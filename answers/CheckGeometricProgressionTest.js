function isGeometric(arr)
{
    if (arr.length <= 1) {
        return true;
    }

    ratio = arr[1]/arr[0];
   
    for(i=1; i<arr.length; i++) {
        if ((arr[i]/(arr[i-1])) != ratio) {
            return "Not a geometric sequence";
        }
    }
    return "Geometric  sequence";
}

my_arr1 = [2, 6, 18, 54];
my_arr2 = [10, 5, 2.5, 1.20];

console.log(isGeometric(my_arr1));
console.log(isGeometric(my_arr2));