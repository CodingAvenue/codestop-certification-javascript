# JavaScript Certification Questions

+++

### Challenging

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


Given an array of integers `arr` of size `n` with duplicates, write a program that finds and returns all elements that appear twice in an array. Note: using extra memory space is not allowed and the runtime complexity should be in `O(n)`. 

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/CanCompleteRouteTest.js], difficulty=challenging

There are `n` gas stations along a circular route, where the amount of gas at station `i` is `gas[i]`. You have a car with an unlimited gas tank and its costs `cost[i]` of gas to travel from station `i` to its next station `(i+1)`. You begin the journey with an empty tank at one of the gas stations. Write a program that returns the index of the starting gas station if you can travel around the circuit once, otherwise return `-1`.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/PerfectSquareTest.js], difficulty=challenging

Given a positive integer `n`, write a program that finds and returns the least number of perfect squares where their sum is equal to `n`.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/CountPrimesTest.js], difficulty=challenging

Given a positive integer `n`, write a program that counts the number of prime numbers less than `n`.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/MaxProductSubArrayTest.js], difficulty=challenging

Given an array of integers `arr`, write a program that finds and returns the maximum product of the contiguous subarray within an array that contains at least one number and has the largest product.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/MaxAverageSubArrayTest.js], difficulty=challenging

Given an array of integers `arr` of size `n`, write a program that finds and returns the maximum average of the contiguous subarray of the given length `k` within an array that has the largest average. Note: `1 <= k <= n <= 30,000` and the elements of the given array should be in the range of `-10,000` to `10,000`.

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


/// type=CR, answer=[tests/JavaScriptCertification/SearchValueInMatrixTest.js], difficulty=challenging

Given a matrix `m x n` with integers in each row are sorted in ascending order from left to right and integers in each column are sorted in ascending order from top to bottom. Write a program with an efficient algorithm that searches for the specified value `x` in an `m x n` matrix. The program returns `true` if `x` is found in the matrix and `false` otherwise.

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

Given an unsorted array `a[]` and an element `x`, write a program that counts the number of occurrences of the specified element `x` in an unsorted array `a[]`. Note: You are not allowed to use nested loops and any built-in array functions in JavaScript.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/CheckGeometricProgressionTest.js], difficulty=challenging

In mathematics, a geometric progression or geometric sequence is a sequence of numbers where each term after the first is found by multiplying the previous one by a fixed, non-zero number called the common ratio. For example, the sequence `2`, `6`, `18`, `54`, and so on is a geometric progression with a common ratio `3`. Similarly, `10`, `5`, `2.5`, `1.25`, and so on is a geometric sequence with a common ratio `1/2`. Write a program that checks whether a sequence of numbers is a geometric progression or not.


```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/DisplayCollatzSequenceTest.js], difficulty=challenging

Write a program that displays the Collatz sequence of the specified number `n`. Collatz conjecture is a conjecture in mathematics named after Lothar Collatz, who first proposed it in 1937. The conjecture is also known as the `3n + 1` conjecture. The conjecture can be summarized as follows. Take any positive integer `n`. If `n` is even, divide it by `2` to get `n / 2`. If `n` is odd, multiply it by `3` and add `1` to obtain `3n + 1`. Repeat the process which has been called `"Half Or Triple Plus One"` indefinitely. The conjecture is that no matter what number you start with, you will always eventually reach `1`. For example, starting with `n = 12`, one gets the sequence `12`, `6`, `3`, `10`, `5`, `16`, `8`, `4`, `2`, `1`. 

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/PolygonClassTest.js], difficulty=challenging

Write a program that creates a `Polygon` class with constructors that accepts an array of `sides` and a `perimeter()` method that returns the perimeter of a certain polygon.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/CheckArithmeticProgressionTest.js], difficulty=challenging

In mathematics, an arithmetic progression or arithmetic sequence is a sequence of numbers such that the difference between the consecutive terms is constant. For example, the sequence `5`, `7`, `9`, `11`, `13`, `15`, and so on is an arithmetic progression with a common difference of `2`. Write a program that checks whether a sequence of numbers is an arithmetic progression or not.

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

Write a function to calculate the factorial of an arbitrary number. Name the function `factorial`. Note: It is only possible to calculate the factorial of a whole number greater than or equal to zero. If an invalid input is passed, return `NaN`. The factorial of `0` is `1`, and the factorial of any positive number `n` is defined as `n` times the factorial of `n - 1`. You can write your solution using a loop of your choice. 

```javascript
// Add your code here...




```


+++