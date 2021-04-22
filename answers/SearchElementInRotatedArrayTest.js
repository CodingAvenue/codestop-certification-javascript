const search = (nums, target) => {
    if (nums.length === 0) {
      return -1;
    }
  
    let lo = 0;
    let hi = nums.length - 1;
  
    while (lo <= hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
  
      if (nums[mid] === target) {
        return mid;
      }
  
      if (nums[lo] <= nums[mid]) {
        if (nums[lo] <= target && target < nums[mid]) {
          hi = mid - 1;
        } else {
          lo = mid + 1;
        }
      } else {
        if (nums[mid] < target && target <= nums[hi]) {
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }
    }
  
    return -1;
};

arr=[0, 1, 2, 4, 5, 6, 7];
k = 8;
console.log(search(arr,k));