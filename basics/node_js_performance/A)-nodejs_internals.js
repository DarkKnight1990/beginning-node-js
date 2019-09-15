// Node JS internals
// At the heart of nodejs is event loop
// Event loops enable any GUI application to work on any operating system. The OS
// calls a function within your application when something happens(for eg, the user 
// clicks a button), and then your application executes the logic contained inside 
// this function to completion. Afterward, your application is ready to respond
// to new events that might have already arrived (and are there on the queue) or 
// that might arrive later(based on user interaction).

// Thread starvation
// Generally during the duration of a function called from an event in a GUI application,
// no other event can be processed. Consequently, if you do a long running task
// within something like a click handler, the GUI will become un-responsive. This
// lack of availability of CPU resource is called starvation.

// Lets go through a few examples:

console.log('*'.repeat(10).concat(' Thread Starvation '.concat('*'.repeat(10))));
// console.time('timer');
// setTimeout(function () {
//     console.timeEnd('timer');
// }, 1000);

// large operation
// console.time('timeit');
function fibonacci(n) {
    if (n < 2) {
        return 1;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}
// set timer
console.time('timer')
setTimeout(function () {
    console.timeEnd('timer');
}, 1000);
fibonacci(44);
// console.timeEnd('timeit');
