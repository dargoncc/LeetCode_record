/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false
  let newMap = new Map(
    [
      [")", "("],
      ["}", "{"],
      ["]", "["]
    ]
  )
  let stack = []
  for (let k of s) {
    if (newMap.has(k)) {
      if (!stack.length || stack[stack.length - 1] !== newMap.get(k)) {
        return false
      }
      stack.pop()
    } else {
      stack.push(k)
    }
  }
  return !stack.length
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end
