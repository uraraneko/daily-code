// https://leetcode.cn/problems/longest-consecutive-sequence/

// TODO: set,map & not
function longestConsecutive(nums: number[]): number {
  let res = 0;
  const mp = {};
  for (let i = 0; i < nums.length; i++) mp[nums[i]] = 0;

  const next = (o: number) => {
    if (mp[o]) return mp[o];

    // if mp[o] is not calculate
    if (typeof mp[o] === "number") {
      mp[o] = 1 + next(o + 1);
      return mp[o];
    }

    return 0;
  };

  for (const i in mp) {
    // console.log(i, mp[i]);
    if (typeof mp[Number(i) - 1] !== "number") {
      mp[i] = next(Number(i));
      res = mp[i] > res ? mp[i] : res;
    }

    // console.log(i, mp[i]);
  }

  return res;
}

const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const nums2 = [1, 0, -1];
console.log(longestConsecutive(nums2));

const longestConsecutive2 = (nums: number[]) => {
  const set = new Set<number>(nums);
  let res = 0;

  for (const i of set) {
    if (!set.has(i - 1)) {
      let cnt = 1;
      while (set.has(i + cnt)) cnt++;
      res = res > cnt ? res : cnt;
    }
  }
  return res;
};

console.log(longestConsecutive2(nums2));
