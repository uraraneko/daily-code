/**
 Do not return anything, modify nums in-place instead.
 */

// TODO:最优解
function moveZeroes(nums: number[]): void {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j]) nums[i++] = nums[j];
  }
  for (; i < nums.length; i++) nums[i] = 0;
}

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
export {};
