# Contents

1. Variable Declarations with let and const
2. Strings in ES6
3. Arrow Functions: Basics
4. Arrow Functions: Lexical 'this' keyword
5. Destructuring
6. Arrays in ES6
7. Spread Operator in JavaScript
8. Rest Parameters
9. Default values
10. Maps

## Variable Declarations with let and const

So far, we've declared variables only by using `var` keyword, but in ES6, it's changed to `let` or `const`. We use `let` keyword when we know that the value we're assigning is going to be changing. And we use `const` keyword because we know that the value saved in this variable will not change.

The other difference is that the variables declared with `var` are function scope, and the variables declared with `let` or `const` are block scope. They have scope only in which the variables are defined.

One other difference is that the variables that are declared with `var` keyword are hoisted when the Execution Context is created, and thus the value before initializing them will be undefined. But for the variables declared with `let` and `const` keyword will give an error that the variable is not defined, meaning that the variables are still hoisted, but we still cannot access them before declaring them. This is called 'Temporal Dead Zone'.

__NOTE:__ We can assign same variables in different scope when using `let` or `const`. Example:

```javascript
let i = 50;
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
```

Output to that will be:

```output
0
1
2
3
4
50
```

If we replace the above declarations with `var`:

```javascript
var i = 50;
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
```

Output to that will be:

```output
0
1
2
3
4
5
```

This is because both of the variables- i, they are considered to be the same variable, as they have the same scope.

## Strings in ES6

The most important feature for String which is implemented is __String templating__. Let's look at the example:

```javascript
let firstName= 'John';
let lastName= 'Smith';
const yearOfBirth = 1994;

function calculateAge(year) {
    return 2021 - year;
}

// Printing this information in ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old');

// Printing the same information using ES6 String Template Literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)}years old`);
```

String Literals can also be used to create new String objects:

```javascript
let firstName = 'John';
let lastName = 'Smith';
const name = `${firstName} ${lastName}`;
console.log(name);      // John Smith
```

## Arrow Functions: Basics

Let's look at how arrow function changes the default implementation of the functions:

```javascript
const years = [1990, 1991, 1992, 1993, 1994, 1995];

// ES5
var ages5 = years.map(function(element) {
    return 2021 - element;
});

// ES6
var ages6 = years.map(element => 2021 - element);
```

__NOTE:__ If more than one argument is in the argument list of the arrow function, we need to provide the paranthesis, and if we have more than one line in the body of the arrow function, you have to provide the curly braces and have to provide the explicit  return statement:

```javascript
ages6 = years.map((element, index) => {
    const dateToday = new Date().getFullYear();
    const age = dateToday - element;
    return `Age at element ${index + 1}: ${element}`;
});
```

## Arrow Functions: Lexical 'this' keyword

The biggest advantage of using arrow functions is that the `this` keyword associated with these functions are where this function is written in- lexical `this`. Let's use this to our advantage:

```javascript
var box = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListened('click', function() {
            var str = 'Color: ' + this.color;
            alert(str);     // O/P: Color: undefined
        })
    }
}

box.clickMe();
```

Here the `clickMe` property is a method of the box object, `this` attribute inside that method will point to box. But the function where `this` is used, is a function, and not a method of box. So, `this` points to the window object here.

In order to solve this in ES5:

```javascript
var box = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;    // Storing the value of 'this' in a var method for it have access across whole scope.
        document.querySelector('.green').addEventListened('click', function() {
            var str = 'Color: ' + self.color;
            alert(str);     // O/P: Color: green
        })
    }
}

box.clickMe();
```

Let's look at how to use arrow functions to avoid this hack:

```javascript
var box = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListened('click', () => {
            var str = 'Color: ' + this.color;       // Here 'this' keyword shares the lexical this resource.
            alert(str);     // O/P: Color: green
        })
    }
}

box.clickMe();
```

__NOTE:__ If we replace the method defination with the arrow function, the output will be: `Color: undefined`. That's because, then the `this` keyword will share lexical scope of the global context, which is window, and does n't have a 'green' property.

### Another example of 'this' lexical scope usage

```javascript
function Person(name) {
    this.name = name;
}

// ES5:
Person.prototype.myFriends = function(friends) {

    // 'this' keyword available in this scope is pointing to the John object created later
    var arr = friends.map(function(element) {
        return this.name + 'is friends with' + element;     // 'this' keyword is pointing to the global scope and thus no name attribute available here.
    });

    console.log(arr);
}

var friends = ['Umang', 'Smith', 'Mary', 'Bob'];
new Person('John').myFriends(friends);
```

The output to this is:

```output
is friends with Umang
is friends with Smith
is friends with Mary
is friends with Bob
```

Another hack to use the above implementation is that we can bind the method the object's this variable and then calling that method. Example:

```javascript
    var arr = friends.map(function(element) {
        return this.name + 'is friends with' + element;     // 'this' keyword is pointing to the global scope and thus no name attribute available here.
    }).bind(this);

    console.log(arr);
```

The ES6 implementation of the above code:

```javascript
function Person(name) {
    this.name = name;
}

// ES6:
Person.prototype.myFriends = function(friends) {
    let arr = friends.map(element => `${this.name} is friends with ${element}`; 
    console.log(arr);
}

let friends = ['Umang', 'Smith', 'Mary', 'Bob'];
new Person('John').myFriends(friends);
```

## Destructuring

```javascript
// ES5 implementation
var john = ['John', 27];
var name = john[0];
var age = john[1];

// ES6 implementation
const [name, year] = ['John', 27];
```

This is called __destructuring__ of data. This also works with Object:

```javascript
const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;  // This works
const {firstName: fname, lastName: lname} = ojb;    // Changing the names of the variables
```

__NOTE:__ Whether to use square braces or curly braces, it depends on the type of object we're destructuring. If it's an array, it'll be `[]`, and if it's an object, it'll be `{}`.

The more practical implementation of this is that, we can return more than one values from a function:

```javascript
function calculateRetirementAge(birthYear) {
    const age = new Date().getFullYear() - year;
    return [age, 65-age];
}

const [age, retirementAge] = calculateRetirementAge(birthYear);
```

## Arrays in ES6

The most important new additions to the ES6 implementation of arrays is- findIndex() and find() method. Examlpe:

```javascript
let array = [1, 2, 3, 4, 5];
console.log(array.findIndex(element => element >= 5));      // Returns 4- index of the element greater than equal to 5.
console.log(array.find(element => element >= 5));           // Returns 5- element greater than equal to 5
```

## Spread Operator in JavaScript

Spread operator is a convinient way to expand elements of an array:

```javascript
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}
console.log(addFourAges(1, 2, 3, 4));       // We could achieve this because we were sending four different elements. 

// If we want to send four elements of the array
let array = [1, 2, 3, 4];
console.log(...ages);       // This is called expanding, and is equal to writing 1, 2, 3, 4 individual elements
```

Another example of Expanding the array:

```javascript
const array1 = [1, 2, 3, 4, 5];
const array2 = [7, 8, 9, 10, 11];
const completeArray= [...array1, 6, ...array2]; // Or can also be put as [...array1, ...array2];
```

## Rest Parameters

This is used to pass an arbitrary number of arguments to a function. Example:

```javascript
function test(...numbers) {
    numbers.forEach(element => console.log(element));
}

test(1, 2, 3, 4, 5);

// More than one type of arguments
function test(greeting, ...years) {
    console.log(greeting);
    years.forEach(element => console.log(element));
}
```

## Default values

If the caller doesn't pass any values for an argument, and we need it, then we have to give some default values have to be given which will be populated if no value is passed. Example:

```javascript
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

console.log(new SmithPerson('John', 1990)); // Object will be printed with lastname and nationality as undefined.

// To overcome this, update the message defination like this:
function SmithPerson(firstName, yearOfBirth, lastName= 'Smith', nationality='American') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

console.log(new SmithPerson('John', 1990)); // Object will be printed with lastname as Smith and nationality as American.
```

## Maps
