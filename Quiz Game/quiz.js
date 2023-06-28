
let nums = [2, 2, 2, 2, 5, 4, 5, 2, 8, 9, 2];
let val = 2

var majorityElement = function (nums) {
    nums.sort();
    console.log(nums);
    console.log(nums[Math.floor(nums.length / 2)]);
};
majorityElement(nums)