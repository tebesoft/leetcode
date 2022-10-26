/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let i = 0;
  let j = 1;
  while (j <= nums.length) {
      if (nums[i] != nums[j]) {
          i++;
          nums[i] = nums[j];
          j++;
      } else {
          j++;
      }
  }
  return i;
};