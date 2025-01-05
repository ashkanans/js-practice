/**
 * Problem: Destructuring
 *
 * Instructions:
 * 1. Use destructuring to extract values from an object and an array.
 * 2. Return the destructured values.
 *
 * Example:
 * Extract `name` and `age` from { name: 'Alice', age: 30 }.
 * Extract first and second values from [1, 2, 3].
 */

function destructuringDemo() {
    const person = {name: "Alice", age: 30};
    const numbers = [1, 2, 3];

    const {name, age} = person;
    const [first, second] = numbers;

    return {name, age, first, second};
}

// Export the function
export {destructuringDemo};
