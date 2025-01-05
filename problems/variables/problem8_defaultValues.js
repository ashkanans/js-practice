/**
 * Problem: Default Values
 *
 * Instructions:
 * 1. Declare a variable without initializing it.
 * 2. Assign it a value later and return the final value.
 *
 * Example:
 * A variable declared without a value should initially hold `undefined`.
 */

function defaultValueDemo() {
    let defaultVar;
    const initial = defaultVar; // Should be undefined
    defaultVar = "Now I have a value";
    return {initial, updated: defaultVar};
}

// Export the function
export {defaultValueDemo};
