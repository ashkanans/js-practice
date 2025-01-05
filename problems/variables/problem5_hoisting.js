/**
 * Problem: Hoisting
 *
 * Instructions:
 * 1. Demonstrate how variables declared with `var` are hoisted.
 * 2. Compare the behavior with variables declared using `let` and `const`.
 *
 * Example:
 * Accessing a `var` variable before declaration should return `undefined`.
 * Accessing `let` or `const` variables before declaration should throw an error.
 */

// Write your solution here
function hoistingDemo() {
    console.log(varVariable); // Should print: undefined
    var varVariable = "I am hoisted";

    // Uncomment the lines below to observe errors
    // console.log(letVariable);
    // let letVariable = "I am not hoisted";

    return varVariable;
}

// Export the function
export {hoistingDemo};
