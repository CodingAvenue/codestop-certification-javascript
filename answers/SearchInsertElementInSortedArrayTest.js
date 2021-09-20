const searchInsert = (nums, target) => {
    let lo = 0;
    let hi = nums.length - 1;
  
    while (lo <= hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
  
      if (nums[mid] === target) {
        return mid;
      }
  
      if (target < nums[mid]) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
  
    return lo;
};

arr = [1,3,5,6], k=2;
console.log(searchInsert(arr,k));