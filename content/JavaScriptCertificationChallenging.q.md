# JavaScript Certification Questions

+++

### Challenging

/// type=CR, answer=[tests/JavaScriptCertification/FixStackOverflowRecursiveTest.js], difficulty=challenging

The given recursive code causes a stack overflow if an array list is too large. Write a program that fixes the problem and still retains the recursive pattern?

```
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};
```

```javaScript
// write your code here...


```


/// type=CR, answer=[tests/JavaScriptCertification/CreatePrivateCounterInClosureTest.js], difficulty=challenging

Write a program that uses a closure to create a private counter. Create a function within an outer function that allows you to update a private variable `counter`. The variable `counter` should not be accessible from outside the function without the use of a helper function.

```javascript
// Add your code here...



```


/// type=CR, answer=[tests/JavaScriptCertification/ImplementIsEmptyFunctionTest.js], difficulty=challenging

Implement the `isEmpty()` function to check if an object is empty or not using `for...in` loop and `hasOwnProperty()` method. This function should return `true` if an object is empty and `false` otherwise.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/PrintPrimeNumbersTest.js], difficulty=challenging

Write a program that prints all primes of a given number `n` using the `Sieve of Eratosthenes` algorithm.

```javascript
// Add your code here...



```


/// type=CR, answer=[tests/JavaScriptCertification/SortArrayElementsUsingHeapSortTest.js], difficulty=challenging

Write a program that sorts the given array elements in ascending order using the `heapsort` sorting algorithm.

```javascript
// Add your code here...



```


/// type=CR, answer=[tests/JavaScriptCertification/FindFirstPositionOfElementInSortedArrayTest.js], difficulty=challenging

Given an array of integers `nums` sorted in ascending order with duplicates, write a program that finds and returns the first position of the specified element `x`. It returns `-1` if `x` is not found in an array. Note: Your algorithm's runtime complexity should be in the order of `O(log n)`.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/FindLastPositionOfElementInSortedArrayTest.js], difficulty=challenging

Given an array of integers `nums` sorted in ascending order with duplicates, write a program that finds and returns the last position of the specified element `x`. It returns `-1` if `x` is not found in an array. Note: Your algorithm's runtime complexity should be in the order of `O(log n)`.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/IsPerFectSquareTest.js], difficulty=challenging

Given a positive integer `num`, write a function that returns true if `num` is a perfect square and `false` otherwise. Note: Do not use any built-in library function such as `sqrt`.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/FindMajorityElementTest.js], difficulty=challenging

Given an array of size `n`, write a program that finds the majority element in an array. The majority element is the element that appears more than `[n/2]` times. You may assume that the array is non-empty and the majority element always exists in the array.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/HammingDistanceTest.js], difficulty=challenging

Given two integers `x` and `y`, write a program that calculates the Hamming distance between two integers. The Hamming distance between two integers is the number of positions at which the corresponding bits are different. 

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/FindMedianOFTwoSortedArraysTest.js], difficulty=challenging

Given two sorted arrays of integers `arr1` and `arr2` of sizes `m` and `n` respectively, write a program that finds the median of the two sorted arrays `arr1` and `arr2`. Note: The program's overall runtime complexity should be in `O(log (m+n))`.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/FindDuplicateElementsInArrayTest.js], difficulty=challenging

Given an array of integers `arr` of size `n` with duplicates, write a program that finds and returns all elements that appear twice in an array. You have to create an arrow function named `findDuplicates()` with one parameter. The `findDuplicates()` function returns all elements with duplicates in an array `arr`. Note: using extra memory space is not allowed and the runtime complexity should be in `O(n)`. 

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/PerfectSquareTest.js], difficulty=challenging

Given a positive integer `n`, write a program that finds and returns the least number of perfect squares where their sum is equal to `n`.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/CountPrimesTest.js], difficulty=challenging

Write a program that accepts a positive integer `n` and returns the total count of prime numbers less than the input `n`.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/MaxAverageSubArrayTest.js], difficulty=challenging

Given an array of integers `arr` of size `n` and a subarray length `k`, write a complete implementation a function named `findMaxAverage()` that accepts two arguments `arr` and `k`. The `findMaxAverage()` function finds and returns the maximum average of the adjacent subarray of the specified length `k` in an array `arr` that has the largest average. Note: `1 <= k <= n <= 30,000` and the elements of the given array `arr` should be in the range of `-10,000` to `10,000`.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/TemperatureClassTest.js], difficulty=challenging

Write a complete implementation of a `Temperature` class. The `Temperature` class reads and writes the temperature in either degrees `Celsius` or degrees `Fahrenheit`, but internally it stores only `Celsius` and automatically converts to and from `Celsius` in the Fahrenheit getter and setter. 

```javascript
// Add your code here...




let temp = new Temperature(37);
console.log(temp.fahrenheit); // 98.60000000000001

temp.fahrenheit = 108;
console.log(temp.celsius); //42.22222222222222
```


/// type=CR, answer=[tests/JavaScriptCertification/InsertElementToBodyTest.js], difficulty=challenging

Write a complete implementation of an `insertElement` function that takes two arguments and inserts the specified HTML element with the specified text into the HTML body.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/FirstUniqueCharacterPositionTest.js], difficulty=challenging

Write a program that returns the position `index` of the first unique character in a given string `str`. The program should return `-1` if the given string does not have a unique character.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/RemoveDuplicateLettersTest.js], difficulty=challenging

Given a string `str` in lowercase characters, write a program that removes duplicates and returns a resultant string without modifying the order of characters in the original string.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/SubArraySumEqualsKTest.js], difficulty=challenging

Given an array of integers `arr` and an integer `k`, write a program that finds and returns the total number of continuous subarrays whose sum equals to `k`. 

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/CountElementOccurencesTest.js], difficulty=challenging

Given an unsorted array `a[]` and an element `x`, write a program that counts and returns the number of occurrences of the specified element `x` in an unsorted array `a[]`. Note: You are not allowed to use nested loops and any built-in array functions in JavaScript.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/PolygonClassTest.js], difficulty=challenging

Write a program that creates a `Polygon` class with constructors that accepts an array of `sides` and a `perimeter()` method that returns the perimeter of a certain polygon.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/SortArrayBySwappingAdjacentElementsTest.js], difficulty=challenging

Given an array, `A` of size `n` that contains elements `1` to `n`. A boolean array `B` consisting of `n-1` elements indicates that if `B[i]` is `1`, then `A[i]` can be swapped with `A[i+1]`. Write a program that identifies if array `A` can be sorted or not by swapping its adjacent elements.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/ConvertCodeIntoClassTest.js], difficulty=challenging

Convert the given code into a `Dog` class with the desired property and method.

```
function Dog (name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + ' says woof');
};

let doggo = new Dog('doggo');
doggo.bark();
```
```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/CreateFactorialFunctionTest.js], difficulty=challenging

Write a function to calculate the factorial of an arbitrary number. Name the function `factorial`. Note: It is only possible to calculate the factorial of a whole number greater than or equal to zero. If invalid input is passed, return `NaN`. The factorial of `0` is `1`, and the factorial of any positive number `n` is defined as `n` times the factorial of `n - 1`. You can write your solution using a loop of your choice. 

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/SearchElementInRotatedArrayTest.js], difficulty=challenging

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand i.e., `0 1 2 4 5 6 7` might become `4 5 6 7 0 1 2`. Write a program that searches the given value `k` in a rotated sorted array `arr`. The program returns the index of the value `k` if it is found in an array otherwise it returns `-1`.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/SearchInsertElementInSortedArrayTest.js], difficulty=challenging

Given a sorted array `arr` without duplicate elements and a value `k`, write a program that searches and inserts the specified value `k` in an array and returns its position `index` if it is found. If not, it returns the specific position `index` where the value `k` should be inserted.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/FunctionThatVisitsElementsTest.js], difficulty=challenging

Given a DOM element on the page, create a function `TraverseElem()` that visits the specified element and all of its descendants (not only its immediate children). The `TraverseElem()` function should pass each visited element to the specified callback function. The `TraverseElem()` function should have two arguments. These are as follows:

 - a DOM element.

 - a callback function (that takes a DOM element as its argument).

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/ConvertTheGivenFunctionsIntoClosureTest.js], difficulty=challenging

Convert the given code snippet into a better representation by using closures.

```
function greet(message) {
  console.log(message);
}

function greeter(name, age) {
  return "Say Hello to " + name + " at " + age + " years old.";
}

var message = greeter("Anna", 18);
greet(message);
```

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/CheckBracketBalanceTest.js], difficulty=challenging

Implement the `checkBracketBalance()` function to take a string containing only curly `{}`, square `[]`, and round `()` brackets. The function should tell us if all the brackets in the string are balanced. This means that every opening bracket will have a closing one. For example, `{[]}` is balanced, but `{[}]` is not. The `checkBracketBalance()` function returns `true` if the brackets are balance and `false` otherwise.

```javascript
function checkBracketBalance(str) {
// Add your code here...


}
console.log(checkBracketBalance("{[]()}" )); // true
console.log(checkBracketBalance("{[(])}")); // false
console.log(checkBracketBalance("{[}")); // false
```

+++