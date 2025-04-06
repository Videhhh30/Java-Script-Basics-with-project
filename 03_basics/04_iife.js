// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // add semi colon

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')