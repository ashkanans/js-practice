import {stringVar, numberVar, booleanVar, nullVar, undefinedVar} from '../problems/variables/problem1_variables.js';
import {swapValues} from '../problems/variables/problem2_swapVariables.js';

function testProblem1Variables() {
    console.assert(typeof stringVar === "string", "String test failed");
    console.assert(typeof numberVar === "number", "Number test failed");
    console.assert(typeof booleanVar === "boolean", "Boolean test failed");
    console.assert(nullVar === null, "Null test failed");
    console.assert(undefinedVar === undefined, "Undefined test failed");
}

function testProblem2SwapValues() {
    const [a, b] = swapValues(3, 5);
    console.assert(a === 5 && b === 3, "Swap values test failed");
}

function runVariablesTests() {
    testProblem1Variables();
    testProblem2SwapValues();
    console.log("All variables tests passed!");
}

runVariablesTests();
