# JavaScript Certification Questions

+++

### Moderate

/// type=CR, answer=[tests/JavaScriptCertification/FixStackOverflowRecursiveTest.js], difficulty=moderate

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

```JavaScript
// write your code here...


```


:::

/// type=REPL, readonly=true

```javascript
var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();
```
/// type=SS, answer=[3], difficulty=moderate

What is the output of the given code?

 - It prints `1`.

 - It prints `2`.

 - It prints `3`.

 - It prints `undefined`.

 - It produces an error.

:::


:::

/// type=REPL, readonly=true

```javascript
var length = 10;
function fn() {
    console.log(this.length);
}

var obj = {
    length: 5,
    method: function(fn) {
        fn();
        arguments[0]();
    }
};

obj.method(fn, 1);
```
/// type=SS, answer=[2], difficulty=moderate

What is the output of the given code?

 - It produces an error.

 - It prints `10 2` in separate lines.

 - It prints `10 5` in separate lines.

 - It prints `2 10` in separate lines.

 - It prints `5 10` in separate lines.

:::


:::

/// type=REPL, readonly=true

```javascript
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ document.write(i); });
    document.body.appendChild(btn);
}
```
/// type=MS, answer=[3,4,5], difficulty=moderate

Why does the given code prints `5` when the user clicks on `Button 3`?

 - The variable `i` in the `for` loop has a fixed value of `5`.

 - When the `onclick` method is invoked the value of the variable `i` is set to `5`.

 - The value of the variable `i` is not captured as it passes through the `for` loop.

 - The `for` loop has completed its execution at the time the `onclick` method is invoked in any of the buttons.

 - The value of the variable `i` is already `5` at the time the `onclick` method is invoked in any of the buttons.

:::


/// type=CR, answer=[tests/JavaScriptCertification/CreatePrivateCounterInClosureTest.js], difficulty=moderate

Write a program that uses a closure to create a private counter. Create a function within an outer function that allows you to update a private variable `counter`. The variable `counter` should not be accessible from outside the function without the use of a helper function.

```javascript
// Add your code here...



```


/// type=CR, answer=[tests/JavaScriptCertification/FunctionThatPrintsAllMethodTest.js], difficulty=moderate

Write a program that prints all methods and properties in a JavaScript object.

```javascript
// Add your code here...



```


/// type=CR, answer=[tests/JavaScriptCertification/ConvertObjectIntoKeyValuesPairsTest.js], difficulty=moderate

Write a program that converts an object into a list of `[key, value]` pairs.

```javascript
// Add your code here...



```


/// type=CR, answer=[tests/JavaScriptCertification/ConvertTheGivenFunctionsIntoClosureTest.js], difficulty=moderate

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


:::

/// type=REPL, readonly=true

```javascript
const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}
```
/// type=SS, answer=[5], difficulty=moderate

What is the output of the given code?

 - It prints `10`.

 - It prints `100`.

 - It prints `null`.

 - It prints `undefined`.

 - It generates a `ReferenceError`.

:::


:::

/// type=REPL, readonly=true

```javascript
const myGenerator = (function *(){
  yield 1;
  yield 2;
  yield 3;
})();
for (const value of myGenerator) {
  console.log(value);
  break;
}

for (const value of myGenerator) {
  console.log(value);
}
```
/// type=SS, answer=[1], difficulty=moderate

What is the output of the given code?

 - It prints `1`.

 - It prints `1 1`.

 - It prints `1 2 3`.

 - It prints `1 2 3 1 2 3`.

 - It prints `1 2 3 4 5 6`.

:::


:::

/// type=REPL, readonly=true

```javascript
var user = {
	"name": "Juan",
	"country": "Philippines",
	"website": "codestop.io"
};

for(var key in user)
{
	if(user.hasOwnProperty(key))
	{
		console.log(key + " -> " + user[key]);
	}
}
```
/// type=SS, answer=[3], difficulty=moderate

What is printed first in the console?

 - `Juan`

 - `Philippines`

 - `name -> Juan`

 - `country -> Philippines`

 - `website -> codestop.io`

:::


:::

/// type=REPL, readonly=true

```javascript
function User(name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function() {
        return () => {
            console.log("Hi! I'm " + this.name + ", " + this.age + " yrs old");
        };
    }
}

let user = new User('Charles', 18);
let profile = user.getProfile();
profile();
```
/// type=SS, answer=[2], difficulty=moderate

What is the output of the given code?

 - It produces an error.

 - It prints `Hi! I'm Charles, 18 yrs old`.

 - It prints `Hi! I'm undefined, 18 yrs old`.

 - It prints `Hi! I'm Charles, undefined yrs old`.

 - It prints `Hi! I'm undefined, undefined yrs old`.

:::



/// type=CR, answer=[tests/JavaScriptCertification/FindMaxMinElementsInAnArrayTest.js], difficulty=moderate

Given an array of integers, write a program that finds the largest and the smallest element in an array without using any looping statements.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/FindLargestAndSmallestElementsInAnArrayTest.js], difficulty=moderate

Given an array of integers, write a program that finds the largest and the smallest element in an array without using Math functions.

```javascript
// Add your code here...




```


:::

/// type=REPL, readonly=true

```javascript
class Employee {
    constructor() {
        this.name = "James";
    }

    constructor() {
        this.age = 28;
    }
}

var employeeObject = new Employee();

console.log(employeeObject.name);
```
/// type=SS, answer=[5], difficulty=moderate

What is the output of the given code?

 - It prints `28`.

 - It prints `James`.

 - It prints `James 28`.

 - No output is displayed.

 - It generates `SyntaxError: A class may only have one constructor`.

:::


:::

/// type=REPL, readonly=true

```javascript
class Employee {
    constructor() {
        this.name = "James";
    }

    constructor() {
        this.age = 28;
    }
}

var employeeObject = new Employee();

console.log(employeeObject.name);
```
/// type=MS, answer=[3,5], difficulty=moderate

Why does the given code generate a `SyntaxError`?

 - The statement `this.age = 28;` on line 7 is invalid.

 - There is no `age` property defined in the `Employee` class.

 - There are two `constructor()` methods defined in the `Employee` class.

 - The statement `var employeeObject = new Employee();` on line 11 is incorrect.

 - The `constructor()` is a special method that should be defined only once in a class.

:::


:::

/// type=REPL, readonly=true

```javascript
const newPrototype = {};
const newObject = Object.create(newPrototype);

console.log(Object.getPrototypeOf(newObject) === newPrototype);
```
/// type=SS, answer=[1], difficulty=moderate

What is the output of the given code?

 - It prints `true`.

 - It prints `false`.

 - It prints `undefined`.

 - No output is displayed.

 - It generates a `SyntaxError`.

:::


:::

/// type=REPL, readonly=true

```javascript
const newObject = {};
Object.preventExtensions(newObject);

try {
    Object.defineProperty(newObject, 'newProperty', {
        value: 100
    });
} catch (e) {
    console.log(e);
}
```
/// type=SS, answer=[5], difficulty=moderate

What is the output of the given code?

 - It prints `1`.

 - It prints `100`.

 - It prints `undefined`.

 - It generates a `SyntaxError`.

 - It generates a `TypeError: Cannot define property newProperty, object is not extensible`.

:::


/// type=CR, answer=[tests/JavaScriptCertification/AddClassToAnElementTest.js], difficulty=moderate

Write a function that adds a class to an HTML element.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/CheckElementDescendantTest.js], difficulty=moderate

Write a function that checks the descendant of an HTML element.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/CheckBracketBalanceTest.js], difficulty=moderate

Implement the `checkBracketBalance()` function to take a string containing only curly `{}`, square `[]`, and round `()` brackets. The function should tell us if all the brackets in the string are balanced. This means that every opening bracket will have a closing one. For example, `{[]}` is balanced, but `{[}]` is not. The `checkBracketBalance()` function returns `true` if the brackets are balance and `false` otherwise.

```javascript
function checkBracketBalance(str) {
// Add your code here...


}
console.log(checkBracketBalance("{[]()}" )); // true
console.log(checkBracketBalance("{[(])}")); // false
console.log(checkBracketBalance("{[}")); // false
```


/// type=CR, answer=[tests/JavaScriptCertification/RemoveFirstTwoElementFromAnArrayTest.js], difficulty=moderate

Write a function that removes the first two elements of an array using array destructuring.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/CheckObjectIfArrayTest.js], difficulty=moderate

Implement the `checkArray()` function that takes an object and determines if it is an array or not. The `checkArray()` function should return either `true` or `false`.

```javascript
// Add your code here...




```


:::

/// type=REPL, readonly=true

```javascript
function isPrototype(){
    var obj1 = {x: 1};
    var obj2;
    console.log(obj1.isPrototypeOf(obj2)); 
}
isPrototype();
```
/// type=SS, answer=[3], difficulty=moderate

What is the output of the given code?

 - It prints `1`.

 - It prints `true`.

 - It prints `false`.

 - It generates a `TypeError`.

 - It generates a `SyntaxError`.

:::


:::

/// type=REPL, readonly=true

```javascript
function isPrototype(){
    var obj1 = {x: 1};
    var obj2 = Object.create(obj1)
    console.log(obj1.isPrototypeOf(obj2));
}

isPrototype();
```
/// type=SS, answer=[2], difficulty=moderate

What is the output of the given code?

 - It prints `1`.

 - It prints `true`.

 - It prints `false`.

 - It generates a `TypeError`.

 - It generates a `SyntaxError`.

:::


:::

/// type=REPL, readonly=true

```javascript
function Dog (name) {
  this.name = name;
}

Dog.bark = function () {
  console.log(this.name + ' says bowow');
}

let sven = new Dog('sven');
sven.bark();
```
/// type=SS, answer=[5], difficulty=moderate

What is the output of the given code?

 - It prints `sven`.

 - It prints `undefined`.

 - It prints `sven says bowow`.

 - It generates a `SyntaxError`.

 - It generates a `TypeError: sven.bark is not a function`.

:::


:::

/// type=REPL, readonly=true

```javascript
class Dog {
  constructor (name) {
    this.name = name;
  }

  bark () {
    console.log(this.name + ' says bowow');
  }
}

let sven = new Dog('sven');
sven.bark();
```
/// type=SS, answer=[3], difficulty=moderate

What is the output of the given code?

 - It prints `sven`.

 - It prints `undefined`.

 - It prints `sven says bowow`.

 - It generates a `SyntaxError`.

 - It generates a `TypeError: sven.bark is not a function`.

:::


/// type=CR, answer=[tests/JavaScriptCertification/ModifyPersonCodeImplementationTest.js], difficulty=moderate

Correct the given code so that it successfully prints `Janelle Smith` and `true` to the console.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
};

function Woman(name) {
};

function check() {
    var obj = new Woman("Janelle Smith");
    console.log(obj.name);
    console.log(obj instanceof Person);
}
check();
```


/// type=CR, answer=[tests/JavaScriptCertification/ChangeTextFunctionTest.js], difficulty=moderate

Write a program that uses a function to change the text of an HTML element when the user clicks a certain button.

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/ChangeFontAndColorOfElementTextFunctionTest.js], difficulty=moderate

Write a program that uses a function to change the font and color of an HTML element text when the user clicks a certain button.

```javascript
// Add your code here...




```


:::

/// type=REPL, readonly=true

```javascript
var object = {
    "name": "Anna",
    "age": "25",
    "address": "Cebu"
};

for (var key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(key + " -> " + object[key]);
    }
}
```
/// type=SS, answer=[4], difficulty=moderate

What is printed first to the console?

 - `name`

 - `Anna`

 - `age -> 25`

 - `name -> Anna`

 - `address -> Cebu`

:::


/// type=CR, answer=[tests/JavaScriptCertification/ImplementIsEmptyFunctionTest.js], difficulty=moderate

Implement the `isEmpty()` function to check if an object is empty or not using `for...in` loop and `hasOwnProperty()` method. This function should return `true` if an object is empty and `false` otherwise.

```javascript
// Add your code here...




```


:::

/// type=REPL, readonly=true

```javascript
function sum() {
    var total = 0;
    for (var i = 0, len = arguments.length; i < len; ++i) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3));
```
/// type=SS, answer=[4], difficulty=moderate

What is the output of the given code?

 - It prints `1`.

 - It prints `2`.

 - It prints `3`.

 - It prints `6`.

 - It generates a `SyntaxError`.

:::


:::

/// type=REPL, readonly=true

```javascript
var handler = {
    get: function(obj, prop) {
        return prop in obj ?
            obj[prop] :
            100;
    }
};

var p = new Proxy({}, handler);
p.a = 10;
p.b = null;

console.log(p.a, p.b);
```
/// type=SS, answer=[3], difficulty=moderate

What is the output of the given code?

 - It prints `100`.

 - It prints `10 100`.

 - It prints `10 null`.

 - It prints `false 100`.

 - It produces an error.

:::


:::

/// type=REPL, readonly=true

```javascript
var handler = {
    get: function(obj, prop) {
        return prop in obj ?
            obj[prop] :
            100;
    }
};

var p = new Proxy({}, handler);
p.a = 10;
p.b = null;

console.log('c' in p, p.c);
```
/// type=SS, answer=[4], difficulty=moderate

What is the output of the given code?

 - It prints `100`.

 - It prints `10 100`.

 - It prints `10 null`.

 - It prints `false 100`.

 - It produces an error.

:::


:::

/// type=REPL, readonly=true

```javascript
const newObject = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.getOwnPropertyNames(newObject));
```
/// type=SS, answer=[3], difficulty=moderate

What is the output of the given code?

 - It generates a `TypeError`.

 - It generates a `SyntaxError`.

 - It prints `[ 'a', 'b', 'c' ]`.

 - It prints `[ '1', '2', '3' ]`.

 - It prints `[ 'a:1', 'b:2', 'c:3' ]`.

:::


/// type=CR, answer=[tests/JavaScriptCertification/DisplayPascalsTriangleTest.js], difficulty=moderate

Given a non-negative integer `n`, write a program the generates the first `n` rows of the Pascal's triangle. 

```javascript
// Add your code here...




```


/// type=CR, answer=[tests/JavaScriptCertification/CalculateGeoSumTest.js], difficulty=moderate

A Geometric series is a series with a constant ratio between successive terms. The first term of the series is denoted by `a` and the common ratio is denoted by `r`. The series looks like this: `a`, `ar`, `ar^2`, `ar^3`, `ar^4`, and so on. Write a program that calculates the sum of a geometric series.

```javascript
// Add your code here...




```



:::

/// type=REPL, readonly=true

```javascript
function Polygon(ary){
    this.ary=ary;
}

Polygon.prototype.perimeter=function(){
    let p=0;
    for(let i=0; i<this.ary.length; i++){
        p+=this.ary[i];
    }
    return p;
}

sides=[2,5,3,5];
poly = new Polygon(sides);
console.log(poly.perimeter());
```
/// type=SS, answer=[1], difficulty=moderate

What is the output of the given code?

 - It prints `15`.

 - It prints `false`.

 - It generates a `SyntaxError`.

 - It prints `Polygon { ary: [ 2, 5, 3, 5 ] }`.

 - It prints `Polygon { perimeter: [Function] }`.

:::


:::

/// type=REPL, readonly=true

```javascript
function Polygon(ary){
    this.ary=ary;
}

Polygon.prototype.perimeter=function(){
    let p=0;
    for(let i=0; i<this.ary.length; i++){
        p+=this.ary[i];
    }
    return p;
}

sides=[2,5,3,5];
poly = new Polygon(sides);
console.log(poly.__proto__);
```
/// type=SS, answer=[5], difficulty=moderate

What is the output of the given code?

 - It prints `15`.

 - It prints `false`.

 - It generates a `SyntaxError`.

 - It prints `Polygon { ary: [ 2, 5, 3, 5 ] }`.

 - It prints `Polygon { perimeter: [Function] }`.

:::


:::

/// type=REPL, readonly=true

```javascript
function Polygon(ary){
    this.ary=ary;
}

Polygon.prototype.perimeter=function(){
    let p=0;
    for(let i=0; i<this.ary.length; i++){
        p+=this.ary[i];
    }
    return p;
}

sides=[2,5,3,5];
poly = new Polygon(sides);
console.log(poly.hasOwnProperty());
```
/// type=SS, answer=[2], difficulty=moderate

What is the output of the given code?

 - It prints `15`.

 - It prints `false`.

 - It generates a `SyntaxError`.

 - It prints `Polygon { ary: [ 2, 5, 3, 5 ] }`.

 - It prints `Polygon { perimeter: [Function] }`.

:::


:::

/// type=REPL, readonly=true

```javascript
function Polygon(ary){
    this.ary=ary;
}

Polygon.prototype.perimeter=function(){
    let p=0;
    for(let i=0; i<this.ary.length; i++){
        p+=this.ary[i];
    }
    return p;
}

sides=[2,5,3,5];
poly = new Polygon(sides);
console.log(poly);
```
/// type=SS, answer=[4], difficulty=moderate

What is the output of the given code?

 - It prints `15`.

 - It prints `false`.

 - It generates a `SyntaxError`.

 - It prints `Polygon { ary: [ 2, 5, 3, 5 ] }`.

 - It prints `Polygon { perimeter: [Function] }`.

:::


:::

/// type=REPL, readonly=true

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.eat = function () {
    console.log(`${this.name} is eating.`);
};

Person.prototype.sleep = function () {
    console.log(`${this.name} is sleeping.`);
};

Person.prototype.walk =function () {
    console.log(`${this.name} is walking.`);
};

ana = new Person("Ana",20);
console.log(ana.__proto__);
```
/// type=SS, answer=[5], difficulty=moderate

What is the output of the given code?

 - It prints `false`.

 - It produces an error.

 - It prints `Ana is eating.`.

 - It prints `Person { name: 'Ana', age: 20 }`.

 - It prints `Person { eat: [Function], sleep: [Function], walk: [Function] }`.

:::


:::

/// type=REPL, readonly=true

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.eat = function () {
    console.log(`${this.name} is eating.`);
};

Person.prototype.sleep = function () {
    console.log(`${this.name} is sleeping.`);
};

Person.prototype.walk =function () {
    console.log(`${this.name} is walking.`);
};

ana = new Person("Ana",20);
console.log(ana);
```
/// type=SS, answer=[4], difficulty=moderate

What is the output of the given code?

 - It prints `false`.

 - It produces an error.

 - It prints `Ana is eating.`.

 - It prints `Person { name: 'Ana', age: 20 }`.

 - It prints `Person { eat: [Function], sleep: [Function], walk: [Function] }`.

:::


:::

/// type=REPL, readonly=true

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.eat = function () {
    console.log(`${this.name} is eating.`);
};

Person.prototype.sleep = function () {
    console.log(`${this.name} is sleeping.`);
};

Person.prototype.walk =function () {
    console.log(`${this.name} is walking.`);
};

ana = new Person("Ana",20);
console.log(ana.hasOwnProperty());
```
/// type=SS, answer=[1], difficulty=moderate

What is the output of the given code?

 - It prints `false`.

 - It produces an error.

 - It prints `Ana is eating.`.

 - It prints `Person { name: 'Ana', age: 20 }`.

 - It prints `Person { eat: [Function], sleep: [Function], walk: [Function] }`.

:::


+++
