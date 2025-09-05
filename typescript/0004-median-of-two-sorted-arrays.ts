//Array
//https://leetcode.com/problems/median-of-two-sorted-arrays/?envType=problem-list-v2&envId=array

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const n = merged.length;

  if (n % 2 === 1) {
    return merged[Math.floor(n / 2)];
  } else {
    console.log(merged[n / 2 - 1]);
    console.log(merged[n / 2]);
    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
  }
}
