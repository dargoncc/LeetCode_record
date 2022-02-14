/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string}
 * @return {number}
 */
var romanToInt = function (s) {
  let hashNum = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  }
  let result = 0
  let len = s.length
  for (let i = 0; i < len; ++i) {
    hashNum[s[i]] < hashNum[s[i + 1]] && i < len - 1 ? result -= hashNum[s[i]] : result += hashNum[s[i]]
  }
  return result
};
  // @lc code=end
