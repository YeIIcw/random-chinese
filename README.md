# Random Chinese Character Generator

[![npm version](https://img.shields.io/npm/v/random-chinese.svg)](https://www.npmjs.com/package/random-chinese)


A lightweight NPM package to generate random Chinese characters without punctuation, useful for text generation, testing, or learning tools. The package uses Unicode ranges to accurately produce valid Chinese characters.

一个轻量级 NPM 包，用于生成随机汉字，不包括符号，应用于文本生成、测试或学习工具。该包采用 Unicode 范围，以确保生成有效的汉字。

---

## Features / 功能

- Generates random Chinese characters.  
  生成随机汉字。
- Excludes punctuation and other non-character symbols.  
  排除符号和其他非汉字符号。
- Fully TypeScript-supported.  
  完全支持 TypeScript。

---

## Installation / 安装

Install the package via NPM or Yarn:  
通过 NPM 或 Yarn 安装：

```bash
npm install random-chinese
```

or  
或

```bash
yarn add random-chinese
```

---

## Usage / 使用方法

### Importing the Package / 导入包

```typescript
import getRandomChineseCharacter from "random-chinese";

// Generate a random Chinese character
const character = getRandomChineseCharacter();
console.log(character); // Outputs a random Chinese character
```

### Examples / 例子

```typescript
// Generate 5 random Chinese characters
const characters = Array.from({ length: 5 }, () => getRandomChineseCharacter());
console.log(characters.join("")); // Outputs something like: 你好世界
```

---

## API

### `getRandomChineseCharacter(): string`

Generates a single random Chinese character from predefined Unicode ranges.  
从预定义的 Unicode 范围生成一个随机汉字。

**Returns / 返回值：**
- A string containing a single random Chinese character.  
  包含一个随机汉字的字符串。

---

## How It Works / 原理

The package uses the following Unicode ranges to ensure only valid Chinese characters (without punctuation) are generated:  
该包使用下列 Unicode 范围，以确保仅生成有效的汉字（不包括符号）：

- `0x4e00`–`0x9fff`: CJK Unified Ideographs
- `0x3400`–`0x4dbf`: CJK Unified Ideographs Extension A
- `0x20000`–`0x2a6df`: CJK Unified Ideographs Extension B
- `0x2a700`–`0x2b73f`: CJK Unified Ideographs Extension C
- `0x2b740`–`0x2b81f`: CJK Unified Ideographs Extension D
- `0x2b820`–`0x2ceaf`: CJK Unified Ideographs Extension E
- `0xf900`–`0xfaff`: CJK Compatibility Ideographs
- `0x2f800`–`0x2fa1f`: CJK Compatibility Ideographs Supplement

---

## Use Cases / 应用场景

- **Text generation:** Create random Chinese characters for content testing or language learning tools.  
  **文本生成：** 生成随机汉字，应用于内容测试或语言学习工具。
- **Localization testing:** Test how your app handles Chinese text.  
  **本地化测试：** 测试您的应用如何处理汉字文本。
- **Educational tools:** Develop tools for learning and practicing Chinese characters.  
  **教育工具：** 开发用于学习和练习汉字的工具。

---

## Contributing / 贡献

Contributions are welcome! Please follow these steps to contribute:  
欢迎与贡献！请按照下列步骤贡献：

1. Fork the repository.  
   分支仓库。
2. Create a new branch with a descriptive name.  
   创建一个具有描述性名称的分支。
3. Commit your changes.  
   提交您的修改。
4. Submit a pull request.  
   提交一个拉取请求。

---

## License / 版权声明

This project is licensed under the [MIT License](LICENSE).  
本项目按照 [MIT 许可证](LICENSE) 协议授权。

---

## Support / 支持

If you encounter any issues or have suggestions, feel free to [open an issue](https://github.com/yeiicw/random-chinese/issues).  
如果您遇到任何问题或有任何建议，请随时提交一个 [issue](https://github.com/yeiicw/random-chinese/issues)。

---

## Author / 作者

Created by yeiicw. Follow me on [GitHub](https://github.com/yeiicw) for more projects!  
由 yeiicw 创建。在 [GitHub](https://github.com/yeiicw) 上关注我，了解更多项目！

