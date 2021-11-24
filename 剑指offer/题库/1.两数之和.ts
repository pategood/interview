// var = nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

function twoSum1(nums: number[], target: number): number[] {
  let arr: number[] = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target == nums[i] + nums[j]) {
        return (arr = [i, j])
      }
    }
  }
  return arr
}


function twoSum2(nums: number[], target: number): number[] {
    let _obj = new Map();
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (_obj.has(target - nums[i])) {
            return [_obj.get(target - nums[i]), i];
        } else {
            _obj.set(nums[i], i);
        }
    }
    return [];
};