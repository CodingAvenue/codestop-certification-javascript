function frequency(a, n, x) 
{ 
    count = 0; 
    for (i = 0; i < n; i++) {
        if (a[i] == x) {
            count++; 
        }
    }
    return count; 
} 

a = [0, 5, 5, 5, 4, 6, 7, 5, 5, 8, 10, 5]; 
x = 5; 
n = a.length; 
console.log(frequency(a, n, x)); 