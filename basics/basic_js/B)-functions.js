console.log('******* Start of Script *******');
// Function : The Function constructor creates a new Function Object

// Function sum created with a function constructor
var sum = Function('a', 'b', 'return a + b');
console.log(sum(2, 6));

var adder = new Function('a', 'b', 'c', 'return a + b + c');
let total = adder(3, 6, 9);
console.log(total);

console.log('Type Of Sum : ', typeof sum);
console.log('Type Of Adder : ', typeof adder);

// Every JS function is a Function object
console.log((function () { }).constructor == Function);

console.log('*'.repeat(10));
console.log();
console.log('Difference between Function constructor and function declaration');
console.log();
var x = 10; // global |x|

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // refers to the global |x|, 
    //works in browser but in Node js throws reerence error as |x| is not found.
}

var f1 = createFunction1();
// console.log(f1());

function createFunction2() {
    var x = 20;
    function f() {
        return x;
    }
    return f;
}
var f2 = createFunction2();
console.log(f2());
console.log('*'.repeat(10));

// All function return a value in JS. In the absence of an 
// explicit return 'undefined' is returned
function fooFunc() {
    return '123'
};
console.log(fooFunc());

function fooFunc1() { };
console.log(fooFunc1());
console.log('*'.repeat(10));
console.log();

// An immediately executing function
(function () {
    console.log('This function was executed immediately!');
})();

// The reason for creating immediately executing 
// function is to create a new variable scope.

// This example shows the difference between var and let
let gfoo = 123;
if (true) {
    let gfoo = 456;
}
console.log(gfoo); // 123

var hfoo = 123;
if (true) {
    var hfoo = 456;
}
console.log(hfoo); // 456
console.log('*'.repeat(10));

// Anonymous functions
var foo1 = function namedFunc() {
    console.log('Foo 1');
}
foo1();

var foo2 = function () {
    console.log('Foo 2');
}
foo2();
console.log('*'.repeat(10));

// Higher Order Functions
// Since JS allows us to assign functions to variables, we can pass functions
// to other functions. Functions that takes other functions as arguments are
// called Higher Order Functions.
// setTimeout() is a common example of higher order function
setTimeout(function () {
    console.log('2000 milliseconds have passed since the func is called!');
}, 2000);

console.log();
console.log('******* End of Script *******');
