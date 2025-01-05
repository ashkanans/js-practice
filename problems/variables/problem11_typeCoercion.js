/**
 * Problem: Type Coercion
 *
 * Instructions:
 * 1. Concatenate a string and a number.
 * 2. Return the result and its type.
 *
 * Example:
 * Adding "The answer is " + 42 should result in a string.
 */

function typeCoercion() {
    const result = "The answer is " + 42;
    return {result, type: typeof result};
}

// Export the function
export {typeCoercion};
