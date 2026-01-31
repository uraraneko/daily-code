// https://leetcode.cn/problems/two-sum?envType=study-plan-v2&envId=top-100-liked

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

function twoSum(nums: number[], target: number): number[] {
  const mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mp.has(nums[i])) {
      return [mp.get(nums[i]), i];
    }
    mp.set(target - nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

const twoSum2 = (nums: number[], tar: number): number[] => {
  const mp = {};
  for (let i = 0; i < nums.length; i++) {
    if (typeof mp[nums[i]] === "number") {
      return [mp[nums[i]], i];
    }
    mp[tar - nums[i]] = i;
  }
  return [];
};

console.log(twoSum2([2, 7, 11, 15], 9));
