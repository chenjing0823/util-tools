/*
 * @Author: jing.chen
 * @Date: 2021-09-01 11:31:03
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-26 14:57:05
 * @Description:
 */
module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testEnvironment: "jsdom",
  collectCoverage: true,
  globals: {
    navigator: {
      userAgent: null
    }
  },
  coveragePathIgnorePatterns: ["home", "node-modules", "test"],
  // 全局通过率
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -5
    }
  }
};
