// Prototypes:
// Using the new and a property called prototype Javascript performs OOP.
// Every object in Javascript has an internal link to another object called prototype.

console.log("*".repeat(10).concat(' Start of script ').concat("*".repeat(10)));

var foo = {};
foo.__proto__.bar = 123;
console.log(foo.bar);

console.log('*'.repeat(10));

// The '__' prefix in JS is used for private or internal methods and should 
// not be used directly in Javascript. 
// So when we create an object using the new operator on a function, the __proto__
// is set to the functions .prototype member

function foo1() { };
foo1.prototype.bar = 123;

var boo = new foo1();
console.log(boo.__proto__ == foo1.prototype);
console.log(boo.bar);

console.log('*'.repeat(10));

// Prototypes are awesome because they are shared between all the objects
// As such they saves memory

function fooTest() { };
fooTest.prototype.someVar = 123;

var testObj1 = new fooTest();
var testObj2 = new fooTest();

console.log(testObj1.someVar);
console.log(testObj2.someVar);

// Modify the prototype. All other values also modified
fooTest.prototype.someVar = 416;
console.log(testObj1.someVar);
console.log(testObj2.someVar);

// If we set the same property on an object the prototype link is broken
testObj1.someVar = 'abc';
console.log(testObj1.someVar); // broken prototype link
console.log(testObj2.someVar); // prototype value

console.log('*'.repeat(10));

// Writing a class type function using prototype and this

function dogClass() {
    // properties of the class goes here
    this.name = 'default';
}
dogClass.prototype.setName = function (name) {
    this.name = name;
}
dogClass.prototype.getName = function () {
    console.log(this.name);
}

var tommy = new dogClass();
tommy.setName('Tommy');
tommy.getName();

console.log("*".repeat(10).concat(' End of script ').concat("*".repeat(10)));
