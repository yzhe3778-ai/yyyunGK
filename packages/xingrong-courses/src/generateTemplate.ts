import fs from "node:fs";
import path from "node:path";

import * as XLSX from "xlsx";

/**
 * 老王的Excel模板生成工具
 *
 * 功能：生成标准的课程Excel模板，方便填写
 *
 * @author 老王（暴躁但专业）
 */

function main() {
  console.log("🔥 老王的Excel模板生成工具启动中...\n");

  // 创建示例数据
  const sampleData = [
    {
      中文: "你好",
      英文: "Hello",
      音标: "/həˈloʊ/",
    },
    {
      中文: "世界",
      英文: "world",
      音标: "/wɜːrld/",
    },
    {
      中文: "你好世界",
      英文: "Hello world",
      音标: "/həˈloʊ/ /wɜːrld/",
    },
    {
      中文: "我",
      英文: "I",
      音标: "/aɪ/",
    },
    {
      中文: "喜欢",
      英文: "like",
      音标: "/laɪk/",
    },
    {
      中文: "我喜欢",
      英文: "I like",
      音标: "/aɪ/ /laɪk/",
    },
    {
      中文: "学习",
      英文: "to learn",
      音标: "/tə/ /lɜːrn/",
    },
    {
      中文: "英语",
      英文: "English",
      音标: "/ˈɪŋɡlɪʃ/",
    },
    {
      中文: "学习英语",
      英文: "to learn English",
      音标: "/tə/ /lɜːrn/ /ˈɪŋɡlɪʃ/",
    },
    {
      中文: "我喜欢学习英语",
      英文: "I like to learn English",
      音标: "/aɪ/ /laɪk/ /tə/ /lɜːrn/ /ˈɪŋɡlɪʃ/",
    },
  ];

  // 创建工作簿
  const worksheet = XLSX.utils.json_to_sheet(sampleData);

  // 设置列宽
  worksheet["!cols"] = [
    { wch: 30 }, // 中文列
    { wch: 40 }, // 英文列
    { wch: 50 }, // 音标列
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "课程数据");

  // 保存文件
  const templateDir = path.resolve(__dirname, "../templates");
  if (!fs.existsSync(templateDir)) {
    fs.mkdirSync(templateDir, { recursive: true });
  }

  const outputPath = path.join(templateDir, "课程模板.xlsx");
  XLSX.writeFile(workbook, outputPath);

  console.log("🎉 乖乖！Excel模板已生成！");
  console.log(`   文件位置: ${outputPath}`);
  console.log("\n📋 使用说明：");
  console.log("   1. 打开生成的Excel文件");
  console.log("   2. 保留第一行的表头（中文、英文、音标）");
  console.log("   3. 从第二行开始填写你的课程数据");
  console.log("   4. 可以删除示例数据，只保留表头");
  console.log("   5. 保存后使用 pnpm course:excel2json 转换");
  console.log("\n💡 提示：");
  console.log("   - 表头名称可以是中文或英文");
  console.log("   - 每行必须填写完整（中文、英文、音标都要有）");
  console.log("   - 音标格式：/aɪ/ 或 /aɪ/ /laɪk/（多个音标用空格分隔）");

  process.exit(0);
}

main();
