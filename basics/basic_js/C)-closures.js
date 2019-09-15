// Closures:
// Whenever we have a function defined inside another function, the inner 
// function has access to the variables declared in the outer function.

function outerFunction(arg) {
    var variableInOuterFunction = arg;

    function bar() {
        console.log(variableInOuterFunction);
    }

    bar();
}

outerFunction('hello closure!');

function outerFunction2(arg) {
    var variableInOuterFunction = arg;

    return function () {
        console.log(variableInOuterFunction);
    }
}

var innerFunc = outerFunction2('hello Closure2!');
innerFunc();

console.log('*'.repeat(10));
// Lets look at another example
// Lexical Scoping
function init() {
    let name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName is a inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}

init();

// Closure
function makeFunc() {
    var name = 'Mozilla-closure';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

// Functions in javascript forms closures. A closure is the combination of a 
// function and the lexical environment within which that function was declared.
// This environment consists of any local variables that were in scope at the 
// time the closure was created.

// A slightly more interesting example

function makeAddr(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = makeAddr(5);
var add10 = makeAddr(10);

console.log(add5(2));
console.log(add10(4));
console.log('*'.repeat(10));

// Emulating private methods with closures
// It is possible to emulate private methods using closures
// Private methods arent just useful for restricting access to code:
// they provide a powerful way of managing your globalnamespace, keeping 
// non-essential methods from clutering up the public interface to your code.

var counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
})();
console.log(counter.value());  //0
counter.increment(); //1
counter.increment(); //2
console.log(counter.value()); //2
counter.decrement(); //1
console.log(counter.value()); //1
