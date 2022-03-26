/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums
  }
  let max = 0, ans = nums[0]
  nums.forEach(x => {
    max = Math.max(max + x, x)
    ans = Math.max(ans, max)
  })
  return ans
};
// @lc code=end

