/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 * 拷贝覆盖
 * 主要思路是遍历数组 nums，每次取出的数字变量为 num，同时设置一个下标 ans
 * 在遍历过程中如果出现数字与需要移除的值不相同时，则进行拷贝覆盖 nums[ans] = num，ans 自增 1
 * 如果相同的时候，则跳过该数字不进行拷贝覆盖，最后 ans 即为新的数组长度
 * 这种思路在移除元素较多时更适合使用，最极端的情况是全部元素都需要移除，遍历一遍结束即可
 * 时间复杂度：O(n)O(n)，空间复杂度：O(1)O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[ans] = nums[i]
      ans++
    }
  }
  return ans
};
// @lc code=end

