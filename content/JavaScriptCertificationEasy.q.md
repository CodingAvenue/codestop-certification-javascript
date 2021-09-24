# JavaScript Certification Questions

+++

### Easy

/// type=CR, answer=[tests/JavaScriptCertification/ConvertToTailCallRecursiveFactorialTest.js], difficulty=easy

Convert the given implementation of a recursive factorial function into a proper tail call (PTC) recursive function. 
```
function factorial(n) {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}
console.log(factorial(5));
```
```javascript
// add your implementation here...

```


:::

/// type=REPL, readonly=true

```javascript
var Employee = {
    company: 'acsx'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);
```
/// type=SS, answer=[1], difficulty=easy

What is the output of the given code?

 - It prints `acsx`.

 - It prints `null`.

 - It prints `undefined`.

 - It produces an error.

 - No output is displayed.

:::


:::

/// type=REPL, readonly=true

```javascript
var Employee = {
    company: 'acsx'
}
var emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company);
```
/// type=MS, answer=[2,4,5], difficulty=easy

Why does the given code outputted `acsx`?

 - The `emp1.company` on line 5 is not enclosed in parentheses `()`.

 - The `delete` operator cannot delete a `prototype` property of an object.

 - The statement `delete emp1.company;` on line 5 can only delete `Employee`.

 - The statement `delete emp1.company;` on line 5 cannot delete the `company` property of `Employee`.

 - `emp1` object only got the `company` property as a `prototype` property and does not have its own `company` property.

:::


:::

/// type=REPL, readonly=true

```javascript
var myObject = {
      egg: "plant",
      func: function() {
            var self = this;
            console.log("outer func: this.egg = " + this.egg);
            console.log("outer func: self.egg = " + self.egg);
            (function() {
                console.log("inner func: this.egg = " + this.egg);
                console.log("inner func: self.egg = " + self.egg);
            }());
       }
};
myObject.func();
```
/// type=SS, answer=[5], difficulty=easy

In the statement `console.log("inner func: this.egg = " + this.egg);` on line 8, what value is returned by `this.egg`?

 - `null`

 - `plant`

 - `false`

 - `myObject`

 - `undefined`

:::


:::

/// type=REPL, readonly=true

```javascript
var myObject = {
      egg: "plant",
        func: function() {
            var self = this;
            console.log("outer func: this.egg = " + this.egg);
            console.log("outer func: self.egg = " + self.egg);
            (function() {
                console.log("inner func: this.egg = " + this.egg);
                console.log("inner func: self.egg = " + self.egg);
            }());
       }
};
myObject.func();
```
/// type=SS, answer=[2], difficulty=easy

In the statement `console.log("inner func: self.egg = " + self.egg);` on line 9, what value is returned by `self.egg`?

 - `null`

 - `plant`

 - `false`

 - `myObject`

 - `undefined`

:::


:::

/// type=REPL, readonly=true

```javascript
var myObject = {
      egg: "plant",
      func: function() {
            var self = this;   
            console.log("outer func: this.egg = " + this.egg);
            console.log("outer func: self.egg = " + self.egg);
            (function() {
                console.log("inner func: this.egg = " + this.egg);
                console.log("inner func: self.egg = " + self.egg);
            }());
       }
};
myObject.func();
```
/// type=MS, answer=[3,4,5], difficulty=easy

In the statement `console.log("inner func: this.egg = " + this.egg);` on line 8, why does `this.egg` return `undefined`?

 - There is no `egg` variable defined in `myObject`.

 - The `+` sign before `this.egg` on line 8 is incorrect.

 - Using `this` in the inner function can no longer refer to `myObject`.

 - In the inner function, `this.egg` can no longer access the variable `egg` of `myObject`.

 - In the inner function, accessing the variable `egg` of `myObject` using `this` is not allowed.

:::


/// type=CR, answer=[tests/JavaScriptCertification/GetInnerHtmlOfAnElementTest.js], difficulty=easy

Write a code that retrieves and changes the inner HTML of an element in JavaScript?

```javascript
// Add your code here...


```


:::

/// type=REPL, readonly=true

```javascript
const tips_filter = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));

console.log(tips_filter(
  [
    { id: 0, value: 'p' },
    { id: 1, value: 'q' },
    { id: 2, value: 'r' },
    { id: 1, value: 's' },
    { id: 0, value: 't' }
  ],
  (p, q) => p.id == q.id
));
```
/// type=SS, answer=[3], difficulty=easy

What is the output of the given code?

 - It prints `[ { id: 0, value: 'p' } ]`.

 - It prints `[ { id: 1, value: 'q' } ]`.

 - It prints `[ { id: 2, value: 'r' } ]`.

 - It prints `[ { id: 1, value: 's' } ]`.

 - It prints `[ { id: 0, value: 't' } ]`.

:::


/// type=MS, answer=[2,4], difficulty=easy

Why does the statement `console.log(3 > 2 > 1);` return `false`?

 - The expression `3 > 2` returns `true` and `true > 1` is invalid.

 - In JavaScript, `true` has the value `1` so the second expression `1 > 1` returns `false`.

 - In JavaScript, `false` has the value `1` so the second expression `1 > 1` returns `false`.

 - JavaScript evaluates the expression `3 > 2 > 1` from left to right and the first expression `3 > 2` returns `true`.

 - JavaScript evaluates the expression `3 > 2 > 1` from right to left and the first expression `3 > 2` returns `false`.


/// type=MS, answer=[2,3,5], difficulty=easy

Which scripts used to empty the array `var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];` in JavaScript?

 - `arrayList = 0;`

 - `arrayList = [];`

 - `arrayList.length = 0;`

 - `arrayList.empty(0, arrayList.length);`

 - `arrayList.splice(0, arrayList.length);`


:::

/// type=REPL, readonly=true

```javascript
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
```
/// type=SS, answer=[4], difficulty=easy

What is the output of the given code?

 - It produces an error.

 - It prints `1 undefined`.

 - It prints `undefined 2`.

 - It prints `1 undefined 2` in separate lines.

 - It prints `2 undefined 1` in separate lines.

:::


:::

/// type=REPL, readonly=true

```javascript
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
```
/// type=SS, answer=[3], difficulty=easy

What is the output of the given code?

 - It prints `20`.

 - It prints `21`.

 - It prints `undefined`.

 - It produces an error.

 - No output is displayed.

:::


:::

/// type=REPL, readonly=true

```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
```
/// type=SS, answer=[3], difficulty=easy

What is the output of the given code?

 - It prints `0 1 2 3`.

 - It prints `1 2 3 4`.

 - It prints `0 1 2 3 4`.

 - It prints `0, 1, 2, 3`.

 - It produces an error.

:::


/// type=MS, answer=[4,5], difficulty=easy

Which statements correctly describe a callback function?

 - It is a named container of different kinds of data.

 - It is a keyword that lets a function return a value.

 - It is a named block of code that performs a specific task.

 - It is a function that is passed to another function as an argument.

 - It is a function that is called and executed inside other function.


:::

/// type=REPL, readonly=true

```javascript
function multiply(a) {
    return function(b) {
        return a * b;
    }
}

console.log(multiply(5)(6));
```
/// type=SS, answer=[4], difficulty=easy

What is the output of the given code?

 - It prints `5`.

 - It prints `6`.

 - It prints `11`.

 - It prints `30`.

 - It produces an error.

:::


/// type=CR, answer=[tests/JavaScriptCertification/ClosureInCreateBaseTest.js], difficulty=easy

Create a closure that keeps the value passed to the `createBase()` function even after the inner function is returned. The inner function that is being returned is created within an outer function and it has access to the variables within the outer function.

```javascript
/// Add your code here...



```


/// type=CR, answer=[tests/JavaScriptCertification/CompleteIsAnagramImplementationTest.js], difficulty=easy

The `isAnagram()` function should determine whether two words are anagrams. Provide the complete implementation of the `isAnagram()` function so that it returns `true` if two strings contain the same characters and `false` otherwise. An `anagram` is a word formed by rearranging the letters of a different word using all the original letters exactly once.

```javascript

function isAnagram(word1, word2) {
    // add your implementation here...

}
```


/// type=MS, answer=[3,4,5], difficulty=easy

Which statements correctly describe `use strict`?

 - It allows code errors to fail silently.

 - It allows duplicate named argument for a function.

 - It eliminates `this` coercion and prevents accidental globals.

 - It enforces stricter parsing and error handling on JavaScript code at runtime.

 - It is a good practice to check and generate errors or throw exceptions on code errors that fail silently.


:::

/// type=REPL, readonly=true

```javascript
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
```
/// type=SS, answer=[4], difficulty=easy

What is the output of the given code?

 - It prints `1 2 3 4`.

 - It prints `1 3 4 2`.

 - It prints `2 3 4 1`.

 - It prints `1 4 3 2`.

 - It prints `2 4 3 1`.

:::


/// type=CR, answer=[tests/JavaScriptCertification/SumFunctionTest.js], difficulty=easy

Write a `sum()` function that works properly when invoked using either of the syntaxes below:

```
console.log(sum(3,5));   // Outputs 8
console.log(sum(3)(5));  // Outputs 5
```

```javascript
    // add your implementation here...


```


:::

/// type=REPL, readonly=true

```javascript
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', (function(i) {
        return function() { document.write(i); };
    })(i));
    document.body.appendChild(btn);
}
```
/// type=SS, answer=[3], difficulty=easy

What gets printed when a user clicks `Button 2`?

 - It prints `0`.

 - It prints `1`.

 - It prints `2`.

 - It prints `3`.

 - It prints `4`.

:::


/// type=MS, answer=[1,2,4], difficulty=easy

Which statements convert an Object `{}` into an Array `[]` in JavaScript?

 - `Object.keys(obj)`

 - `Object.values(obj)`

 - `Object.assign(obj)`

 - `Object.entries(obj)`

 - `Object.fromEntries(obj)`


/// type=MS, answer=[1,3,4], difficulty=easy

Which statements convert an Array `[]` into an Object `{}` in JavaScript?

 - `{ ...arr }`

 - `[{ ...arr }]`

 - `Object.assign({}, arr)`

 - `Object.fromEntries(arr1)`

 - `Object.formEntries(arr1{})`


/// type=MS, answer=[2,3,4,5], difficulty=easy

Which statements correctly describe a closure in JavaScript?

 - It enforces stricter parsing and error handling on JavaScript code at runtime.

 - It has access to variables in three scopes: `local`, `outer functions`, and `global`.

 - It is an inner function that has access to variables in the outer function’s scope chain.

 - It provides better , concise, creative, and expressive code writing for JavaScript developers.

 - It is the combination of a function and the lexical environment within which that function was declared.


/// type=MS, answer=[2,3], difficulty=easy

Which statements add an element at the beginning of an array `arr`?

 - `arr.push('new');`

 - `arr.unshift('new')`

 - `arr = ['new', ...arr];`

 - `arr = [...arr, 'new'];`

 - `arr = ['new', ...arr, 'new'];`


/// type=CR, answer=[tests/JavaScriptCertification/ModifyForCodeToClosureTest.js], difficulty=easy

Modify the given code using closure so that it prints the desired `0`, `1`, `2`, `3`, and `4` to the console.

```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
}


```


/// type=MS, answer=[1,2,3,4], difficulty=easy

Which statements access an HTML element in a JavaScript code?

 - `querySelector()`

 - `getElementById(‘idname’)`

 - `getElementsByClass(‘classname’)`

 - `getElementsByTagName(‘tagname’)`

 - `getElementsByClassName(‘classname’)`


/// type=MS, answer=[2,4,5], difficulty=easy

What are the differences between `attribute` and `property`?

 - An `attribute` can be of various data types while a `property` is of a string data type.

 - An `attribute` is of a string data type while a `property` can be of various data types.

 - An `attribute` is defined by the Document Object Model (DOM) while a `property` is defined by HTML.

 - An `attribute` is defined by HTML while a `property` is defined by the Document Object Model (DOM).

 - An `attribute` is a characteristic of an HTML element while a `property` is a characteristic of an object.


/// type=MS, answer=[1,2,3,5], difficulty=easy

What are the differences between `let` and `var`?

 - `let` is blocked scoped while `var` is globally scoped.

 - `let` variable is hoisted but not initialized while `var` variable is hoisted.

 - `let` variable can be updated but not re-declared while `var` variable can be re-declared and updated.

 - `let` variable can be re-declared and updated while `var` variable can be updated but not re-declared.

 - Referencing an uninitialized `var` variable returns `undefined` while referencing an uninitialized `let` variable generates a `reference error`.


/// type=MS, answer=[2,4], difficulty=easy

What are the differences between `.forEach` and `.map()`?

 - `.forEach` returns an object while `.map()` returns an array.

 - `.forEach` does not return a value while `.map()` returns a new array.

 - `.forEach` returns a new array while `.map()` does not return a value.

 - `.forEach` executes a callback for each element while `.map()` maps each element to a new element by calling the function on each element.

 - `.forEach` maps each element to a new element by calling the function on each element while `.map()` executes a callback for each element.


/// type=MS, answer=[1,3,4], difficulty=easy

Which statements create an object in JavaScript?

 - `var object = {};`

 - `var object = ();`

 - `var object = new Object();`

 - `var object = Object.create(null);`

 - `var object = create new Object();`


/// type=SS, answer=[1], difficulty=easy

What is the difference between `Call`, `Apply`, and `Bind`?

 - The `call()` method invokes a function with a given `this` value and arguments provided one by one; `apply` invokes the function with a given `this` value and allows you to pass in arguments as an array; While `bind` returns a new function, allowing you to pass any number of arguments.

 - The `call()` method invokes the function with a given `this` value and allows you to pass in arguments as an array; `apply` invokes a function with a given `this` value and arguments provided one by one; While `bind` returns a new function, allowing you to pass any number of arguments.

 - The `call()` method returns a new function, allowing you to pass any number of arguments; `apply` invokes the function with a given `this` value and allows you to pass in arguments as an array; While `bind` invokes a function with a given `this` value and arguments provided one by one.

 - The `call()` method invokes a function with a given `this` value and arguments provided one by one; `apply` returns a new function, allowing you to pass any number of arguments; While `bind` invokes the function with a given `this` value and allows you to pass in arguments as an array.

 - The `call()` method invokes the function with a given `this` value and allows you to pass in arguments as an array; `apply` returns a new function, allowing you to pass any number of arguments; While `bind` invokes a function with a given `this` value and arguments provided one by one.


/// type=SS, answer=[3], difficulty=easy

Which statement best describes `hoisting` in JavaScript?

 - It is a technique that attempts to increase a function’s performance by caching its previously computed results.

 - It is a behavior of a function where the return value is only determined by its arguments without any side effects.

 - It is a mechanism where variables and function declarations are moved to the top of their scope before code execution.

 - It is a behavior in JavaScript that occurs when declaring a variable with `let` and `const` keywords, but not with `var`.

 - It is a process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.


/// type=SS, answer=[3], difficulty=easy

What is the difference between `for...of` and `for...in` statements?

 -  `for...of` executes a callback for each element while `for...in` maps each element to a new element by calling the function on each element.

 -  `for...of` maps each element to a new element by calling the function on each element while `for...in` executes a callback for each element.

 - The `for...of` statement iterates over the values of an iterable object while the `for...in` statement iterates over all enumerable property keys of an object.

 - The `for...of` statement iterates over all enumerable property keys of an object while the `for...in` statement iterates over the values of an iterable object.

 - The `for...of` statement iterates over all enumerable property keys of an object while the `for...in` statement maps each element to a new element by calling the function on each element.


:::

/// type=REPL, readonly=true

```javascript
var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
```
/// type=SS, answer=[5], difficulty=easy

What is the output of the given code?

 - It prints `car`.

 - It prints `null`.

 - It prints `Undefined`.

 - It generates a `ReferenceError`.

 - It prints `{model: "Honda", color: "white", year: "2010", country: "UK"}`.

:::


:::

/// type=REPL, readonly=true

```javascript
class A {
    constructor() {
        console.log(new.target.name)
    }
}

class B extends A { constructor() { super() } }

new A();
new B();
```
/// type=SS, answer=[2], difficulty=easy

What is the output of the given code?

 - It prints `A A`.

 - It prints `A B`.

 - It prints `undefined B`.

 - It prints `A undefined`.

 - It generates a `ReferenceError`.

:::


:::

/// type=REPL, readonly=true

```javascript
const props = [
  { id: 1, name: 'Peter'},
  { id: 2, name: 'Jane'},
  { id: 3, name: 'May'}
];

const [,, { name }] = props;
console.log(name);
```
/// type=SS, answer=[1], difficulty=easy

What is the output of the given code?

 - It prints `May`.

 - It prints `Jane`.

 - It prints `Peter`.

 - It prints `undefined`.

 - It generates a `ReferenceError`.

:::


:::

/// type=REPL, readonly=true

```javascript
let count = 5;

(function innerFunc() {
    if (count === 5) {
        let count = 7;
        console.log(count);
    }
    console.log(count);
})();
```
/// type=SS, answer=[1], difficulty=easy

What is the output of the given code?

 - It prints `7 5`.

 - It prints `5 7`.

 - It prints `5 5`.

 - It prints `undefined`.

 - It generates a `ReferenceError`.

:::


/// type=MS, answer=[1,3], difficulty=easy

What are the differences between classical and prototypal inheritances?

 - In classical inheritance, the new instance inherits properties from a parent class. While in prototypal inheritance, the instance is instantiated using a factory function or `Object.create()`.

 - In classical inheritance, the instance is instantiated using a factory function or `Object.create()`. While in prototypal inheritance, the new instance inherits properties from a parent class.

 - In classical inheritance, a constructor instantiates an instance using the `new` keyword. While in prototypal inheritance, an instance is created by cloning an existing object that serves as a prototype.

 - In classical inheritance, an instance is created by cloning an existing object that serves as a prototype. While in prototypal inheritance, a constructor instantiates an instance using the `new` keyword.

 - Classical inheritance invokes a function with a given `this` value and arguments provided one by one. While prototypal inheritance returns a new function, allowing you to pass any number of arguments.


/// type=MS, answer=[3,4,5], difficulty=easy

Which statements make an object non-extensible?

 - `Object.isExtensible(newObject);`

 - `Object.getPrototypeOf(newObject);`

 - `var sealedObject = Object.seal({});`

 - `Object.preventExtensions(newObject);`

 - `var frozenObject = Object.freeze({})`


/// type=MS, answer=[1,4], difficulty=easy

What are the differences between `window` and `document`?

 - A `window` is a javascript global object while a `document` is a property of the `window` object.

 - A `window` is a property of the `window` object while a `document` is a javascript global object.

 - A `window` represents the DOM of the page while a `document` represents the written or generated HTML markup.

 - A `window` has everything including global functions, locations, history, web components, and more. While, a `document` has methods to traverse the DOM like `getElementById`, `querySelector`, `removeChild`, and more.

 - A `window` has methods to traverse the DOM like `getElementById`, `querySelector`, `removeChild`, and more. While, a `document` has everything including global functions, locations, history, web components, and more.


/// type=SS, answer=[3], difficulty=easy

If `Animal` is the superclass and `Mammal` is the subclass, then a subclass inheriting the superclass can be represented as _________.

 - `Mammal = inherit(Animal);`

 - `Mammal = Animal.inherit();`

 - `Mammal.prototype = inherit(Animal);`

 - `Animal.prototype = inherit(Mammal);`

 - `Mammal.prototype = inherit(Animal.prototype);`


/// type=MS, answer=[3,5], difficulty=easy

Which method used to create new properties and modify the attributes of existing properties?

 - `Object.inherit()`

 - `Object.prototype`

 - `Object.defineProperty()`

 - `Object.createProperty()`

 - `Object.defineProperties()`


/// type=CR, answer=[tests/JavaScriptCertification/DisplayDoggoTest.js], difficulty=easy

Correct the code so that it successfully prints `doggo` to the console.

```javascript
let dog = {
  name: 'doggo',
  sayName () {
    console.log(this.name);
  }
};
let sayName = dog.sayName;
sayName();
```


:::

/// type=REPL, readonly=true

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member);
```
/// type=SS, answer=[3], difficulty=easy

What is the output of the given code?

 - It prints `class`.

 - It prints `string`.

 - It prints `object`.

 - It prints `function`.

 - It produces an error.

:::


:::

/// type=REPL, readonly=true

```javascript
class Person {
    constructor() {
        this.name = 'Charles';
    }
}

Person = class AnotherPerson {
    constructor() {
        this.name = 'William';
    }
};

const member = new Person();
console.log(member.name);
```
/// type=SS, answer=[2], difficulty=easy

What is the output of the given code?

 - It prints `Charles`.

 - It prints `William`.

 - It prints `Undefined`.

 - It produces a `TypeError`.

 - It prints `Error: cannot redeclare Person`.

:::


:::

/// type=REPL, readonly=true

```javascript
const note = {
    [Symbol('cat')]: 'meow',
};

console.log(note);
console.log(Object.keys(note));
```
/// type=SS, answer=[4], difficulty=easy

What is the output of the given code?

 - It prints `{}` and `[]`.

 - It prints `{ cat: "meow" }` and `["cat"]`.

 - It prints `Error: cannot redeclare note`.

 - It prints `{ [Symbol(cat)]: 'meow' }` and `[]`.

 - It prints `{Symbol('cat'): 'meow'}` and `["{Symbol('cat')"]`.

:::


:::

/// type=REPL, readonly=true

```javascript
class Animal {
    constructor() {
        console.log("I am an animal.");
    }
}

class Dog extends Animal {
    constructor() {
        console.log("I am a dog.");
        super();
    }
}

const pet = new Dog();
```
/// type=SS, answer=[4], difficulty=easy

What is the output of the given code?

 - It prints `I am a dog.`.

 - It prints `I am an animal.`.

 - It prints `Error: cannot redeclare Animal`.

 - It prints `I am a dog.` and `I am an animal.`.

 - It prints `I am an animal.` and `I am a dog.`.

:::


:::

/// type=REPL, readonly=true

```javascript
String.prototype.giveJohnPrize = () => {
  return 'Just give John a prize already!';
};

const name = 'John';

console.log(name.giveJohnPrize());
```
/// type=SS, answer=[5], difficulty=easy

What is the output of the given code?

 - It prints `John`.

 - It prints `undefined`.

 - It produces a `SyntaxError`.

 - It prints `TypeError: not a function`.

 - It prints `Just give John a prize already!`.

:::


:::

/// type=REPL, readonly=true

```javascript
const person = {
    name: 'John',
    age: 25,
};

for (const item in person) {
    console.log(item);
}
```
/// type=SS, answer=[2], difficulty=easy

What is the output of the given code?

 - It prints `John` and `25`.

 - It prints `name` and `age`.

 - It produces a `SyntaxError`.

 - It prints `{ name: "John" }` and `{ age: 25 }`.

 - It prints `["name", "John"]` and `["age", 25]`.

:::


:::

/// type=REPL, readonly=true

```javascript
var car = new Vehicle("Toyota", "Grey", "2020", "Japan");
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
```
/// type=SS, answer=[5], difficulty=easy

What is the output of the given code?

 - It prints `null`.

 - It prints `undefined`.

 - It produces a `SyntaxError`.

 - It prints `TypeError: Vehicle not a function`.

 - It prints `Vehicle { model: 'Toyota', color: 'Grey', year: '2020', country: 'Japan' }`.

:::


+++
