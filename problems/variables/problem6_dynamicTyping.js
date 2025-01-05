/**
 * Problem: Dynamic Typing
 *
 * Instructions:
 * 1. Create a variable and assign it a value of a specific type.
 * 2. Reassign the variable with a value of a different type.
 * 3. Return the final value and its type.
 *
 * Example:
 * A variable can hold a number initially and later hold a string.
 */

function dynamicTyping() {
    let dynamicVar = 42; // Initially a number
    dynamicVar = "Hello"; // Reassigned as a string
    return typeof dynamicVar; // Return the type of the variable
}

// Export the function
export {dynamicTyping};
