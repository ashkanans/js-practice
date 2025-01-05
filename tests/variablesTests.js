import {stringVar, numberVar, booleanVar, nullVar, undefinedVar} from '../problems/variables/problem1_variables.js';
import {swapValues} from '../problems/variables/problem2_swapVariables.js';
import {variableScopeDemo} from '../problems/variables/problem4_scopeOfVariables.js';
import {hoistingDemo} from '../problems/variables/problem5_hoisting.js';
import {dynamicTyping} from '../problems/variables/problem6_dynamicTyping.js';
import {createSentence} from '../problems/variables/problem7_templateLiterals.js';
import {defaultValueDemo} from '../problems/variables/problem8_defaultValues.js';
import {destructuringDemo} from '../problems/variables/problem9_destructuring.js';
import {redeclarationDemo} from '../problems/variables/problem10_variableRedeclaration.js';
import {typeCoercion} from '../problems/variables/problem11_typeCoercion.js';
import {updateCar} from '../problems/variables/problem12_objectVariables.js';

import fs from 'fs';
import path from 'path';
import {pathToFileURL} from 'url';

function testProblem1Variables() {
    console.assert(typeof stringVar === 'string', 'String test failed');
    console.assert(typeof numberVar === 'number', 'Number test failed');
    console.assert(typeof booleanVar === 'boolean', 'Boolean test failed');
    console.assert(nullVar === null, 'Null test failed');
    console.assert(undefinedVar === undefined, 'Undefined test failed');
}

function testProblem2SwapValues() {
    const [a, b] = swapValues(3, 5);
    console.assert(a === 5 && b === 3, 'Swap values test failed');
}


async function testProblem3DeclareConstants() {
    try {
        // Step 1: Read the content of the implementation file
        const filePath = path.resolve(
            '../problems/variables/problem3_declareConstants.js'
        );

        const fileContent = fs.readFileSync(filePath, 'utf-8');

        // Step 2: Check if `const PI = 3.14;` exists
        const constDeclarationRegex = /const\s+PI\s*=\s*3\.14\s*;/;
        const hasConstDeclaration = constDeclarationRegex.test(fileContent);
        console.assert(
            hasConstDeclaration,
            'PI constant test failed: Missing or incorrect `const PI = 3.14;` declaration.'
        );

        // Step 3: Check if `PI` is reassigned in the file
        const reassignmentRegex = /PI\s*=\s*3\.15\s*;/;
        const hasReassignment = reassignmentRegex.test(fileContent);
        console.assert(
            hasReassignment,
            'PI constant test failed: Missing `PI = 3.15;` reassignment.'
        );

        // Step 4: Confirm the file throws a TypeError when executed
        let errorOccurred = false;
        try {
            // Convert file path to file:// URL and dynamically import
            const fileURL = pathToFileURL(filePath).href;
            await import(fileURL);
        } catch (error) {
            errorOccurred = true;
            console.assert(
                error instanceof TypeError,
                'PI constant test failed: Reassignment did not throw a TypeError.'
            );
        }

        // Ensure an error occurred
        console.assert(
            errorOccurred,
            'PI constant test failed: File should throw a TypeError when executed.'
        );

        console.log('Problem 3: Declare Constants - Test Passed!');
    } catch (error) {
        console.error('Problem 3: Declare Constants - Test Failed.', error);
    }
}


function testProblem4ScopeOfVariables() {
    const result = variableScopeDemo();
    console.assert(result.varVariable === "I'm a var", 'var scope test failed');
    console.assert(result.letVariable === "I'm a let", 'let scope test failed');
    console.assert(result.constVariable === "I'm a const", 'const scope test failed');
}

function testProblem5Hoisting() {
    const result = hoistingDemo();
    console.assert(result === 'I am hoisted', 'Hoisting test failed');
}

function testProblem6DynamicTyping() {
    const result = dynamicTyping();
    console.assert(result === 'string', 'Dynamic typing test failed');
}

function testProblem7TemplateLiterals() {
    const sentence = createSentence('John', 25);
    console.assert(sentence === 'My name is John and I am 25 years old.', 'Template literals test failed');
}

function testProblem8DefaultValues() {
    const {initial, updated} = defaultValueDemo();
    console.assert(initial === undefined, 'Default value test failed');
    console.assert(updated === 'Now I have a value', 'Updated value test failed');
}

function testProblem9Destructuring() {
    const {name, age, first, second} = destructuringDemo();
    console.assert(name === 'Alice', 'Object destructuring test failed');
    console.assert(age === 30, 'Object destructuring test failed');
    console.assert(first === 1, 'Array destructuring test failed');
    console.assert(second === 2, 'Array destructuring test failed');
}

function testProblem10VariableRedeclaration() {
    const {x, y, z} = redeclarationDemo();
    console.assert(x === 20, 'var re-declaration test failed');
    console.assert(y === 30, 'let re-declaration test failed');
    console.assert(z === 50, 'const re-declaration test failed');
}

function testProblem11TypeCoercion() {
    const {result, type} = typeCoercion();
    console.assert(result === 'The answer is 42', 'Type coercion result test failed');
    console.assert(type === 'string', 'Type coercion type test failed');
}

function testProblem12ObjectVariables() {
    const car = updateCar();
    console.assert(car.year === 2021, 'Object variable update test failed');
    console.assert(car.make === 'Toyota', 'Object property test failed');
    console.assert(car.model === 'Corolla', 'Object property test failed');
}


async function runVariablesTests() {
    testProblem1Variables();
    testProblem2SwapValues();
    await testProblem3DeclareConstants();
    // testProblem4ScopeOfVariables();
    // testProblem5Hoisting();
    // testProblem6DynamicTyping();
    // testProblem7TemplateLiterals();
    // testProblem8DefaultValues();
    // testProblem9Destructuring();
    // testProblem10VariableRedeclaration();
    // testProblem11TypeCoercion();
    // testProblem12ObjectVariables();
    console.log('All variables tests passed!');
}

runVariablesTests().catch((error) => {
    console.error('Test suite failed:', error);
});
