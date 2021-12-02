// // 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组[4, -1, 2, 1] 的和最大，为 6 。

// 输入：nums = [1]
// 输出：1
let nums = [-2,1,-3,4,-1,2,1,-5,4]
// 0   6

function maxSubArray(nums: number[], max = -Infinity): number {
  nums.reduce(
    (p, v) => {
      p = Math.max(p, 0) + v
      max = Math.max(max, p)
      return p
    }, 0)
  return max
};



// function maxSubArray(nums: number[], max = -Infinity): number {
//   return nums.reduce((p, v) => ((p = Math.max(p, 0) + v), (max = Math.max(max, p)), p), 0),max
// };


// 笔记  明白返回值的 不同写法,return 最后的一个,前面的都当做执行



// 这道题用动态规划的思路并不难解决，比较难的是后文提出的用分治法求解，但由于其不是最优解法，所以先不列出来
// 动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans
// 如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
// 如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
// 每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果
// 时间复杂度：O(n)O(n)

var maxSubArray2 = function(nums) {
  let ans = nums[0];
  let sum = 0;
  for(const num of nums) {
    if(sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    ans = Math.max(ans, sum);
  }
  return ans;
};


// 解释版:

var maxSubArray2 = function (nums) {
  let ans = nums[0]
  let sum = 0
  for (const num of nums) {
    if (sum > 0) {
      sum += num
    } else {
      sum = num
    }
    ans = Math.max(ans, sum)
    console.log(num, sum, ans)
  }
  return ans
}
maxSubArray2([-1, -2, 3, 4, -8, 9, 1, -10, 3, -2, 8, 2])
