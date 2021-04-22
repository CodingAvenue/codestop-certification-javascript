const hammingDistance = (x, y) => {
    let dist = 0;
    let n = x ^ y;
  
    while (n) {
      dist++;
      n &= n - 1;
    }
  
    return dist;
};

x=1, y=4;
console.log(hammingDistance(x,y));