/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
 * val 2
 *         i j
* [0,1,4,0,3,2,2,2]

* val 5
   i  j
* [3, 3]
* 
 */
var removeElement = function(nums, val) {
  
  if (nums.length == 0) {
     return 0;
   }
     
   let i = 0;
   let j = nums.length-1;
 
   while (i < j) {
       if (nums[j] == val) {
         j--;
       }
       
       if (nums[i] == val) {
         const tmp = nums[i];
         nums[i] = nums[j];
         nums[j] = tmp;
       }
       if (nums[i] != val) {
         i++;
       }
   }
   if (nums[i] != val) {
       i += 1;
   }
   return i;
 };