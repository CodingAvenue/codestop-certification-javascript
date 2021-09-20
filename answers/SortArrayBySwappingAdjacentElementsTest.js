function sortedAfterSwap(A, B, n) 
{ 
    for (i = 0; i < n - 1; i++) { 
        if (B[i]) { 
            j = i; 
            while (B[j]) {
                j++; 
            }
            A.sort(); 
            i = j; 
        }
    }

    for (i = 0; i < n; i++) { 
        if (A[i] != i + 1) {
            return false; 
        }
    }
    return true; 
}

A = [7, 2, 5, 3, 4, 6, 9]; 
B = [0, 1, 1, 1, 0, 0]; 
n = A.length; 

if (sortedAfterSwap(A, B, n)) {
    console.log("A can be sorted"); 
} else {
    console.log("A can not be sorted"); 
}