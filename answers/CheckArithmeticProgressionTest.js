function isArithmeticSequence(arr)
{
    delta = arr[1] - arr[0];
    for(index=0; index<arr.length-1; index++) {
        if ((arr[index + 1] - arr[index]) != delta) {
            return "Not an arithmetic sequence.";
        }       
    }
    return "An arithmetic sequence.";
}

my_arr1 = [6, 7, 9, 11];
my_arr2 = [5, 7, 9, 11];

console.log(isArithmeticSequence(my_arr1));
console.log(isArithmeticSequence(my_arr2));