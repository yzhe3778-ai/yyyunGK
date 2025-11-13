import fs from "node:fs";
import path from "node:path";

import inquirer from "inquirer";
import * as XLSX from "xlsx";

/**
 * 老王的Excel转JSON工具
 *
 * 功能：把Excel表格转换成课程JSON文件
 *
 * Excel格式要求（必须有表头）：
 * | 中文 | 英文 | 音标 |
 * |------|------|------|
 * | 我   | I    | /aɪ/ |
 *
 * @author 老王（暴躁但专业）
 */

interface Statement {
  chinese: string;
  english: string;
  soundmark: string;
}

async function main() {
  console.log("🔥 老王的Excel转JSON工具启动中...\n");

  // 询问Excel文件路径
  const { excelPath } = await inquirer.prompt([
    {
      type: "input",
      name: "excelPath",
      message: "把Excel文件路径扔过来（支持.xlsx, .xls）：",
      validate: (input: string) => {
        if (!input) return "艹！路径不能为空！";
        const ext = path.extname(input).toLowerCase();
        if (![".xlsx", ".xls"].includes(ext)) {
          return "艹！必须是Excel文件（.xlsx 或 .xls）！";
        }
        if (!fs.existsSync(input)) {
          return `艹！文件不存在：${input}`;
        }
        return true;
      },
    },
  ]);

  // 询问输出文件名
  const { outputName } = await inquirer.prompt([
    {
      type: "input",
      name: "outputName",
      message: "给JSON文件起个名字（比如 56.json）：",
      default: "new-course.json",
      validate: (input: string) => {
        if (!input) return "艹！文件名不能为空！";
        if (!input.endsWith(".json")) {
          return "艹！文件名必须以.json结尾！";
        }
        return true;
      },
    },
  ]);

  try {
    // 读取Excel文件
    console.log("\n📖 正在读取Excel文件...");
    const workbook = XLSX.readFile(excelPath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // 转换为JSON（第一行是表头）
    const rawData = XLSX.utils.sheet_to_json(worksheet) as any[];

    if (rawData.length === 0) {
      console.error("\n❌ 艹！Excel文件是空的！");
      process.exit(1);
    }

    // 验证表头（中文/英文/音标）
    const firstRow = rawData[0];
    const headers = Object.keys(firstRow);

    console.log(`\n检测到的列：${headers.join(", ")}`);

    // 灵活匹配表头（支持中英文）
    const chineseKeys = ["中文", "chinese", "Chinese", "中"];
    const englishKeys = ["英文", "english", "English", "英"];
    const soundmarkKeys = ["音标", "soundmark", "Soundmark", "发音"];

    const chineseCol = headers.find((h) => chineseKeys.includes(h));
    const englishCol = headers.find((h) => englishKeys.includes(h));
    const soundmarkCol = headers.find((h) => soundmarkKeys.includes(h));

    if (!chineseCol || !englishCol || !soundmarkCol) {
      console.error("\n❌ 艹！Excel表头格式不对！");
      console.error("必须包含这3列：中文、英文、音标");
      console.error("（列名可以是中文或英文，但必须全部存在）");
      process.exit(1);
    }

    console.log(`✅ 表头验证通过！使用列：${chineseCol}, ${englishCol}, ${soundmarkCol}`);

    // 转换数据
    const statements: Statement[] = rawData.map((row) => ({
      chinese: String(row[chineseCol] || "").trim(),
      english: String(row[englishCol] || "").trim(),
      soundmark: String(row[soundmarkCol] || "").trim(),
    }));

    // 过滤空行
    const validStatements = statements.filter((s) => s.chinese && s.english && s.soundmark);

    if (validStatements.length === 0) {
      console.error("\n❌ 艹！没有有效的数据行！");
      process.exit(1);
    }

    console.log(`\n✅ 成功转换 ${validStatements.length} 条句子！`);

    // 保存JSON文件
    const outputPath = path.join(__dirname, "../data/courses", outputName);

    fs.writeFileSync(outputPath, JSON.stringify(validStatements, null, "\t"), "utf-8");

    console.log(`\n🎉 乖乖！JSON文件已生成：${outputPath}`);
    console.log(`\n📊 数据预览（前3条）：`);
    console.log(JSON.stringify(validStatements.slice(0, 3), null, 2));
  } catch (error: any) {
    console.error(`\n❌ 艹！处理Excel文件时出错：${error.message}`);
    process.exit(1);
  }

  process.exit(0);
}

main();
