// Immediately Invoked Function Expressions (IIFE)
// It’s a function that is defined and executed immediately after its creation.
// basic syntax
(function chai(){
    console.log(`DB CONNECTED`);
})(); // semicolon is required to stop the invoke

// first () is function definition () is execution call
// Benefits : Variables inside an IIFE are private and don’t leak into the global scope.

// even we can use Arrow function in it
(() => {
    console.log(`DB CONNECTED TWO`);
})()