/**
 * Problem: Variable Re-declaration
 *
 * Instructions:
 * 1. Declare variables using `var`, `let`, and `const`.
 * 2. Attempt to re-declare each and observe the behavior.
 *
 * Example:
 * `var` allows re-declaration; `let` and `const` do not.
 */

function redeclarationDemo() {
    var x = 10;
    var x = 20; // No error

    let y = 30;
    // Uncomment the line below to observe the error
    // let y = 40;

    const z = 50;
    // Uncomment the line below to observe the error
    // const z = 60;

    return {x, y, z};
}

// Export the function
export {redeclarationDemo};
