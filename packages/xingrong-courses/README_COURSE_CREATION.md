# 🔥 老王的课程包创建指南

> 艹！这份文档教你用Excel轻松创建课程包！别tm再手动编辑JSON了！

---

## 📋 准备工作

### 1️⃣ **生成Excel模板**

```bash
cd "E:/GitHub Desktop/yingyuxuexi-earthworm"
pnpm -F @earthworm/xingrong-courses course:template
```

模板会生成到：`packages/xingrong-courses/templates/课程模板.xlsx`

---

## ✍️ 填写课程内容

### Excel表格格式（3列）

| 中文     | 英文        | 音标              |
| -------- | ----------- | ----------------- |
| 你好     | Hello       | /həˈloʊ/          |
| 世界     | world       | /wɜːrld/          |
| 你好世界 | Hello world | /həˈloʊ/ /wɜːrld/ |

### 注意事项

✅ **必须保留表头**：第一行必须是"中文"、"英文"、"音标"（或对应英文列名）

✅ **每行必须完整**：3列都要填写，不能有空值

✅ **音标格式**：

- 单个音标：`/aɪ/`
- 多个音标：`/aɪ/ /laɪk/`（用空格分隔）

✅ **逐步递进**：建议从简单词汇到短语再到句子，循序渐进

---

## 🔄 转换Excel到JSON

### 1️⃣ **单个课程文件**

假设你创建了一个Excel文件 `第56课.xlsx`，执行：

```bash
pnpm -F @earthworm/xingrong-courses course:excel2json
```

**交互式提示：**

```
🔥 老王的Excel转JSON工具启动中...

? 把Excel文件路径扔过来（支持.xlsx, .xls）：
  E:/GitHub Desktop/yingyuxuexi-earthworm/packages/xingrong-courses/templates/第56课.xlsx

? 给JSON文件起个名字（比如 56.json）：
  56.json
```

**输出：**

- JSON文件保存到：`packages/xingrong-courses/data/courses/56.json`

---

### 2️⃣ **批量创建多个课程**

如果你有多个课程Excel文件（比如第56-60课），建议：

1. **创建专门的目录**

```bash
mkdir "E:/GitHub Desktop/yingyuxuexi-earthworm/packages/xingrong-courses/data/courses/my-courses"
```

2. **逐个转换Excel文件**

对每个Excel文件执行 `pnpm course:excel2json`，输出文件名设置为：`my-courses/56.json`、`my-courses/57.json` 等

---

## 📦 创建新课程包

### 方式1：使用自动化脚本（推荐！）

```bash
pnpm -F @earthworm/xingrong-courses course:create-pack
```

**交互式提示：**

```
🔥 老王的课程包创建工具启动中...

? 课程包名称（比如：进阶英语学习）： 进阶英语学习
? 课程包描述： 适合有基础的学习者进阶提升
? 是否免费？ Yes
? 封面图片URL（留空使用默认图片）： [直接回车使用默认]
? 创建者ID： 1
? 课程JSON文件所在目录（相对于data/courses/，比如：my-courses）： my-courses
```

**脚本会自动：**

1. 创建课程包
2. 读取 `data/courses/my-courses/` 目录下的所有JSON文件
3. 按文件名数字顺序创建课程（56.json → 第五十六课）
4. 上传所有句子数据

---

### 方式2：添加到现有课程包

如果只是想给现有的"星荣零基础学英语"添加新课程：

1. **修改 `addCourse.ts` 文件**

打开 `packages/xingrong-courses/src/addCourse.ts`，填写这些参数：

```typescript
const coursePackId = "zf7fyy3kz6wfrbel30266tam"; // 现有课程包ID
const courseOrder = 56; // 新课程的顺序号
const courseTitle = "第五十六课"; // 课程标题
const courseFileName = "56.json"; // JSON文件名
const video = ""; // 视频链接（可选）
```

2. **执行添加命令**

```bash
pnpm -F @earthworm/xingrong-courses course:add
```

---

## 📊 完整工作流程示例

### 场景：创建一个新的"商务英语"课程包（10课）

#### **步骤1：生成Excel模板**

```bash


```

#### **步骤2：填写课程内容**

- 复制模板10份：`商务1.xlsx` ~ `商务10.xlsx`
- 在每个Excel中填写对应课程的内容

#### **步骤3：创建课程目录**

```bash
mkdir "E:/GitHub Desktop/yingyuxuexi-earthworm/packages/xingrong-courses/data/courses/business-english"
```

#### **步骤4：转换所有Excel文件**

对每个Excel文件执行：

```bash
pnpm -F @earthworm/xingrong-courses course:excel2json
```

**输入：**

- Excel路径：`E:/...../商务1.xlsx`
- 输出文件名：`business-english/01.json`

重复10次，生成 `01.json` ~ `10.json`

#### **步骤5：创建课程包**

```bash
pnpm -F @earthworm/xingrong-courses course:create-pack
```

**输入：**

- 课程包名称：`商务英语基础`
- 描述：`专为商务场景设计的实用英语课程`
- 是否免费：`Yes`
- 课程JSON目录：`business-english`

**完成！** 🎉

---

## 🛠️ 可用命令总结

| 命令                      | 功能          | 说明                         |
| ------------------------- | ------------- | ---------------------------- |
| `pnpm course:template`    | 生成Excel模板 | 创建标准的课程Excel模板      |
| `pnpm course:excel2json`  | Excel转JSON   | 交互式转换工具               |
| `pnpm course:create-pack` | 创建课程包    | 自动创建课程包并上传数据     |
| `pnpm course:add`         | 添加单个课程  | 手动添加课程到现有课程包     |
| `pnpm upload`             | 批量上传      | 初始化数据库时使用（不推荐） |

---

## ❓ 常见问题

### Q1: Excel转JSON时报错"表头格式不对"

**A:** 确保第一行包含"中文"、"英文"、"音标"三列（或对应英文列名）

### Q2: 创建课程包时找不到JSON文件

**A:** 检查目录路径是否正确，应该是相对于 `data/courses/` 的路径

### Q3: 课程顺序不对

**A:** JSON文件名用数字命名，脚本会按数字顺序排序（01.json, 02.json, ...）

### Q4: 如何查看现有课程包ID？

**A:** 运行 `pnpm -F @earthworm/xingrong-courses exec tsx src/queryCoursePack.ts`

---

## 💡 老王的小贴士

1. **规范命名**：JSON文件用两位数字命名（01.json, 02.json），便于排序
2. **批量创建**：一次性准备好所有Excel，再批量转换，效率更高
3. **备份数据**：Excel文件保留好，JSON可以随时重新生成
4. **测试优先**：先创建1-2个课程测试流程，没问题再批量操作
5. **音标规范**：统一使用国际音标格式，保持一致性

---

**🎉 乖乖！现在你可以轻松创建课程包了！有问题就来找老王我！**

---

**作者：老王（暴躁但专业的技术流）**
**日期：2025-11-13**
