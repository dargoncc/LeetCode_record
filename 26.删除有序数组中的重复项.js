/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   for (let i = 0; i < nums.length;) {
//     if (nums.indexOf(nums[i]) !== i) {
//       nums.splice(i, 1)
//     } else {
//       i++
//     }
//   }
//   return nums.length
// };
var removeDuplicates = function (nums) {
  let s = 0, f = 1, len = nums.length
  for (; f < len; f++) {
    if (nums[s] !== nums[f]) {
      nums[s + 1] = nums[f]
      s++
    }
  }
  return s + 1
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end
