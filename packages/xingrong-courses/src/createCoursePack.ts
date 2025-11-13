import fs from "node:fs";
import path from "node:path";

import inquirer from "inquirer";

import { db } from "@earthworm/db";
import {
  coursePack,
  course as courseSchema,
  statement as statementSchema,
} from "@earthworm/schema";

/**
 * 老王的课程包创建工具
 *
 * 功能：创建全新的课程包并上传课程数据
 *
 * @author 老王（暴躁但专业）
 */

type Statement = typeof statementSchema.$inferInsert;

async function main() {
  console.log("🔥 老王的课程包创建工具启动中...\n");

  // 1. 询问课程包信息
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "课程包名称（比如：进阶英语学习）：",
      validate: (input: string) => (input ? true : "艹！名称不能为空！"),
    },
    {
      type: "input",
      name: "description",
      message: "课程包描述：",
      default: "老王精心制作的英语课程",
    },
    {
      type: "confirm",
      name: "isFree",
      message: "是否免费？",
      default: true,
    },
    {
      type: "input",
      name: "cover",
      message: "封面图片URL（留空使用默认图片）：",
      default:
        "https://earthworm-prod-1312884695.cos.ap-beijing.myqcloud.com/course-packs/xingrong.jpg",
    },
    {
      type: "input",
      name: "creatorId",
      message: "创建者ID：",
      default: "1",
    },
    {
      type: "input",
      name: "coursesDir",
      message: "课程JSON文件所在目录（相对于data/courses/，比如：my-courses）：",
      validate: (input: string) => {
        if (!input) return "艹！目录不能为空！";
        const fullPath = path.resolve(__dirname, `../data/courses/${input}`);
        if (!fs.existsSync(fullPath)) {
          return `艹！目录不存在：${fullPath}`;
        }
        return true;
      },
    },
  ]);

  try {
    // 2. 创建课程包
    console.log("\n📦 正在创建课程包...");

    const existingPacks = await db.select().from(coursePack);
    const nextOrder = existingPacks.length + 1;

    const [coursePackEntity] = await db
      .insert(coursePack)
      .values({
        order: nextOrder,
        title: answers.title,
        description: answers.description,
        creatorId: answers.creatorId,
        shareLevel: "public",
        isFree: answers.isFree,
        cover: answers.cover,
      })
      .returning();

    console.log(`✅ 课程包创建成功！`);
    console.log(`   ID: ${coursePackEntity.id}`);
    console.log(`   名称: ${coursePackEntity.title}`);
    console.log(`   顺序: ${coursePackEntity.order}`);

    // 3. 读取课程文件
    const coursesPath = path.resolve(__dirname, `../data/courses/${answers.coursesDir}`);
    const courseFiles = fs
      .readdirSync(coursesPath)
      .filter((file) => file.endsWith(".json"))
      .sort((a, b) => {
        const numA = parseInt(path.parse(a).name);
        const numB = parseInt(path.parse(b).name);
        return numA - numB;
      });

    if (courseFiles.length === 0) {
      console.error("\n❌ 艹！目录里没有JSON文件！");
      process.exit(1);
    }

    console.log(`\n📚 找到 ${courseFiles.length} 个课程文件`);

    // 4. 创建课程并上传数据
    const courseList = await Promise.all(
      courseFiles.map(async (courseFileName, index) => {
        const courseName = path.parse(courseFileName).name;
        const [course] = await db
          .insert(courseSchema)
          .values({
            coursePackId: coursePackEntity.id,
            order: index + 1,
            title: convertToChineseNumber(courseName),
          })
          .returning({
            id: courseSchema.id,
            order: courseSchema.order,
            title: courseSchema.title,
          });

        console.log(`   创建: id-${course.id} order-${course.order} title-${course.title}`);

        return {
          ...course,
          meta: {
            courseFileName,
            courseName,
          },
        };
      }),
    );

    // 5. 上传句子数据
    console.log("\n📝 正在上传课程句子...");

    await Promise.all(
      courseList.map(async (course) => {
        const { id: courseId, meta } = course;

        const courseDataJsonText = fs.readFileSync(
          path.join(coursesPath, meta.courseFileName),
          "utf-8",
        );

        const statementList = JSON.parse(courseDataJsonText) as Statement[];

        let order = 1;
        const statementInsertTask = statementList.map(async (statement) => {
          return await db.insert(statementSchema).values({
            ...statement,
            order: order++,
            courseId,
          });
        });

        console.log(`   ${meta.courseFileName} 开始上传...`);
        await Promise.all(statementInsertTask);
        console.log(`   ${meta.courseFileName} 上传成功！`);
      }),
    );

    console.log("\n🎉 乖乖！全部创建完成！");
    console.log(`\n📊 课程包统计：`);
    console.log(`   课程包ID: ${coursePackEntity.id}`);
    console.log(`   课程包名称: ${coursePackEntity.title}`);
    console.log(`   课程数量: ${courseList.length}`);
  } catch (error: any) {
    console.error(`\n❌ 艹！创建课程包时出错：${error.message}`);
    console.error(error);
    process.exit(1);
  }

  process.exit(0);
}

// 数字转中文课程标题（复用原有逻辑）
function convertToChineseNumber(numStr: string): string {
  const chineseNumbers = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  let chineseStr = "第";
  const num = parseInt(numStr);

  if (num >= 10) {
    const [tens, ones] = numStr.split("");
    if (tens !== "1") {
      chineseStr += chineseNumbers[parseInt(tens, 10)];
    }
    chineseStr += "十";
    if (ones !== "0") {
      chineseStr += chineseNumbers[parseInt(ones, 10)];
    }
  } else {
    chineseStr += chineseNumbers[num];
  }
  chineseStr += "课";
  return chineseStr;
}

main();
