/**
 * Problem: Template Literals
 *
 * Instructions:
 * 1. Use template literals to create a sentence with variables for name and age.
 * 2. Return the formatted sentence.
 *
 * Example:
 * For name="John" and age=25, return "My name is John and I am 25 years old."
 */

function createSentence(name, age) {
    return `My name is ${name} and I am ${age} years old.`;
}

// Export the function
export {createSentence};
