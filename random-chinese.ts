function getRandomChineseCharacter(): string {
  const chineseRanges: Array<[number, number]> = [
    [0x4e00, 0x9fff], // CJK Unified Ideographs
    [0x3400, 0x4dbf], // CJK Unified Ideographs Extension A
    [0x20000, 0x2a6df], // CJK Unified Ideographs Extension B
    [0x2a700, 0x2b73f], // CJK Unified Ideographs Extension C
    [0x2b740, 0x2b81f], // CJK Unified Ideographs Extension D
    [0x2b820, 0x2ceaf], // CJK Unified Ideographs Extension E
    [0xf900, 0xfaff],   // CJK Compatibility Ideographs
    [0x2f800, 0x2fa1f], // CJK Compatibility Ideographs Supplement
  ];

  const randomChar = (): string => {
    const range = chineseRanges[Math.floor(Math.random() * chineseRanges.length)];
    const codePoint = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
    return String.fromCodePoint(codePoint);
  };

  return randomChar();
}

module.exports = getRandomChineseCharacter

