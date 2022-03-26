/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 * 从字符串末尾开始向前遍历，其中主要有两种情况
 * 第一种情况，以字符串"Hello World"为例，从后向前遍历直到遍历到头或者遇到空格为止，即为最后一个单词"World"的长度5
 * 第二种情况，以字符串"Hello World "为例，需要先将末尾的空格过滤掉，再进行第一种情况的操作，即认为最后一个单词为"World"，长度为5
 * 所以完整过程为先从后过滤掉空格找到单词尾部，再从尾部向前遍历，找到单词头部，最后两者相减，即为单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let end = s.length - 1
  while(end >= 0 && s[end] === ' ') end--
  if (end < 0) return 0
  let start = end
  while (start >= 0 && s[start] !== ' ') start--
  return end - start
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLastWord;
// @after-stub-for-debug-end
