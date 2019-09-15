// Understanding 'this':
// It is something that is passed to the function depending upon how you call it.
// The simplest way to think of it is that it refers to the calling context.
// The calling context is the prefix used to call a function

console.log("*".repeat(10).concat(' Start of script ').concat("*".repeat(10)));
var foo = {
    bar: 123,
    bas: function () {
        console.log('inside this.bar is: ', this.bar); // inside the function bas,
        // this refers to foo, as bas was called on foo and is therefore the calling context. 
    }
}

console.log('foo.bar is: ', foo.bar);
foo.bas();

console.log('*'.repeat(10));

// The default calling context is the node.js global variable.

function foo2() {
    console.log('is this called from globals?: ', this == global);
}
foo2();
console.log('*'.repeat(10));

// Since Javascript supports first class object

var boo = {
    bas: 123
};

function bar() {
    if (this === global) {
        console.log('Called from global context');
    }
    if (this === boo) {
        console.log('Called from boo context');
    }
}

// global context
bar();

boo.bar = bar;
boo.bar();

console.log('*'.repeat(10));

// If you call a function with the new Javascript operator, it creates a new 
// Javascript object and this within the function refers to the new object.

function nFoo() {
    this.foo = 123;
    console.log('Is this global?: ', this == global);
}

nFoo();
console.log('From global context: ', global.foo);

var n1Foo = new nFoo();
console.log('From n1Foo context: ', n1Foo.foo);
console.log("*".repeat(10).concat(' End of script ').concat("*".repeat(10)));
