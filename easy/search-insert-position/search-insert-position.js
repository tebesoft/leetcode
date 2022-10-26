/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length-1;
  let mid;
    
  while (left < right) {
      mid = left + Math.floor((right - left) / 2); // mid = Math.floor((right+left) / 2)
      if (nums[mid] == target) {
          return mid;
      }
      else if (target < nums[mid]) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }

  return nums[left] < target ? left+1 : left;
};