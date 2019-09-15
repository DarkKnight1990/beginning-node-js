console.log('******* Start of Script *******');
// A variable that has not been assigned a value is undefined
let x;
console.log(x); // undefined

// Using a variable which has not been declared raises error
// console.log(b); // Error 'b' is not defined

console.log('*'.repeat(10));

// Numbers : All numbers in JS have the floating point number type
let foo = 3;
let bar = 5;

console.log(foo + bar);
console.log(foo / bar);
console.log(foo - bar);
console.log(foo * bar);
console.log(foo % bar);
console.log('*'.repeat(10));
// Booleans
let fooBool = true;
console.log(fooBool);

console.log('*'.repeat(10));
// Boolean logical operations
console.log(true && true); // true
console.log(true && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(!true); // false
console.log(!false); // true
console.log('*'.repeat(10));

// Null Type
let x1;
x1 = null;
console.log(x1); // null
console.log(typeof (x1)); // object

console.log('*'.repeat(10));
// Variables declared as const, cannot be changed
const NO_OF_DAYS_IN_A_WEEK = 7;
console.log(NO_OF_DAYS_IN_A_WEEK);
// Trying to change the 'NO_OF_DAYS_IN_A_WEEK' results in error
// NO_OF_DAYS_IN_A_WEEK = 8; // Raises [TypeError: Assignment to constant variable.]
// console.log(NO_OF_DAYS_IN_A_WEEK);

console.log('*'.repeat(10));

// Arrays
let fooArr = [];
console.log(fooArr);

fooArr.push(1); // At the end
console.log(fooArr);

fooArr.unshift(2); // add to the top
console.log(fooArr);

// zero index based
console.log(fooArr[0]);

console.log('*'.repeat(10));

// Objects in Javascript
let fooObj = {}; // object declaration
console.log(fooObj);
fooObj.bar = 123; // extended at runtime
console.log(fooObj);

// Instead of extending it at runtime, you can define which properties go on
// an object upfront.
let fooObj2 = {
    bar: 123
};
console.log(fooObj2);

let fooObj3 = {
    bar: 123,
    bas: {
        bas1: 'Shatterd',
        bas2: 557
    },
    bat: [123, 321, 231]
}
console.log(fooObj3);
console.log();
console.log('******* End of Script *******');
