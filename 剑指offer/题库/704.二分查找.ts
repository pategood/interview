// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


//  var nums:number[] = [-1, 0, 3, 5, 9, 12], target = 9
// 输出: 4
 

function search(nums: number[], target: number): number {
  let left=0, right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor(right/2)
    if (nums[mid] > target) {
      right=mid-1
    } else if (nums[mid] < target) {
      left = mid+1
    } else {
      return mid
    }
  }
  return -1
};





// 笔记: 明白二分查招思路,一直拿数和数组中间项进行对比

// 因为比较完了以后,中间值比对后就不需要在数组内,所以+1 -1