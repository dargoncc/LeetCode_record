/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10 || x === 0) return true
  let tempLists = x.toString().split('')
  let result = true;
  for (let i = 0; i < tempLists.length - 1; i++) {
    let L = tempLists[i]
    let R = tempLists[tempLists.length - 1 - i]
    if (L !== R && i !== tempLists.length - 1 - i) {
      result = false;
      break
    }
  }
  return result
};
// @lc code=end

