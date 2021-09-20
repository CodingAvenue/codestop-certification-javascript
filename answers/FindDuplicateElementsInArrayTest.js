const findDuplicates = nums => {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
      const index = Math.abs(nums[i]) - 1;

      if (nums[index] < 0) {
        result.push(Math.abs(nums[i]));
      } else {
        nums[index] = -nums[index];
      }
    }
    return result;
  };

num =[4,3,2,7,8,2,3,1,1,4,5,6,8,5];

console.log(findDuplicates(num));