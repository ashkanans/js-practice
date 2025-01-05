/**
 * Problem: Scope of Variables
 *
 * Instructions:
 * 1. Inside a function named `variableScopeDemo`, declare three variables:
 *    - A variable using `var` named `varVariable` and assign it a value (e.g., "I'm a var").
 *    - A variable using `let` named `letVariable` and assign it a value (e.g., "I'm a let").
 *    - A variable using `const` named `constVariable` and assign it a value (e.g., "I'm a const").
 *
 * 2. Return the values of the variables declared inside the function in an object (e.g., `{ varVariable, letVariable, constVariable }`).
 *
 * 3. Outside the function:
 *    - Attempt to access `varVariable`, `letVariable`, and `constVariable` directly.
 *    - Use `try-catch` blocks to check whether accessing these variables throws a `ReferenceError`.
 *    - Log meaningful error messages in the console for each variable if a `ReferenceError` is thrown.
 *
 * Expected Behavior:
 * - `varVariable` is not accessible outside the function and throws a `ReferenceError`.
 * - `letVariable` is not accessible outside the function and throws a `ReferenceError`.
 * - `constVariable` is not accessible outside the function and throws a `ReferenceError`.
 *
 * Example:
 * Running this file should produce the following output in the console:
 * ```
 * Error accessing 'varVariable' outside the function: ReferenceError
 * Error accessing 'letVariable' outside the function: ReferenceError
 * Error accessing 'constVariable' outside the function: ReferenceError
 * ```
 */

// Write your function here


try {
    // Try to access varVariable here
} catch (error) {
    if (error instanceof ReferenceError) {
        console.error("Error accessing 'varVariable' outside the function: ReferenceError");
    }
}

try {
    // Try to access letVariable here
} catch (error) {
    if (error instanceof ReferenceError) {
        console.error("Error accessing 'letVariable' outside the function: ReferenceError");
    }
}

try {
    // Try to access constVariable here
} catch (error) {
    if (error instanceof ReferenceError) {
        console.error("Error accessing 'constVariable' outside the function: ReferenceError");
    }
}

// Export the function and results
export {variableScopeDemo, varOutside, letOutside, constOutside};
