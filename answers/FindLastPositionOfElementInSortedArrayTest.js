const searchLastPosition = (nums, target) => {
    let lo = 0;
    let hi = nums.length - 1;
  
    while (lo <= hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
  
      if (nums[mid] < target) {
        lo = mid + 1;
      } else if (nums[mid] > target) {
        hi = mid - 1;
      } else {
        if (mid === nums.length - 1 || nums[mid + 1] > target) {
          return mid;
        } else {
          lo = mid + 1;
        }
      }
    }
  
    return -1;
  };
  
  
  nums = [5,7,7,8,8,10], target = 8;
  
  console.log(searchLastPosition(nums,target));