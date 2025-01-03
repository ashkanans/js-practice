/**
 * Problem: Swap the values of two variables.
 *
 * Instructions:
 * 1. Create a function `swapValues` that takes two arguments `a` and `b`.
 * 2. Use a temporary variable to swap their values.
 * 3. Return the swapped values as an array [b, a].
 *
 * Example:
 * swapValues(3, 5) should return [5, 3].
 */

function swapValues(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b]
}

export { swapValues };
