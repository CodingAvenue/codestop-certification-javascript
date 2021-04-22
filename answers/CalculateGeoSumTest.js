function sumOfGeoSeries(a, r, n) 
{ 
    return (a * (1 - Math.pow(r, n))) / (1 - r); 
}

a = 2;  
r = 2;  
n = 15;  

console.log(sumOfGeoSeries(a, r, n)); 