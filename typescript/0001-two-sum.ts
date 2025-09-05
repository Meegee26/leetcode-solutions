//Array
//https://leetcode.com/problems/two-sum/?envType=problem-list-v2&envId=array&

function twoSum(nums: number[], target: number): number[] {
  const indexMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const needed = target - current;

    if (indexMap.has(needed)) {
      return [indexMap.get(needed)!, i];
    }

    indexMap.set(current, i);
  }

  return [];
}
