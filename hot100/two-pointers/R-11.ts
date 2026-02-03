function maxArea(height: number[]): number {
  let i = 0,
    j = height.length - 1;
  let res = 0;
  while (i < j) {
    const area = (j - i) * Math.min(height[i], height[j]);
    height[i] < height[j] ? i++ : j--;
    res = Math.max(area, res);
  }

  return res;
}

const nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(nums));
export {};
