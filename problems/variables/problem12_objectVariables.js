/**
 * Problem: Object Variables
 *
 * Instructions:
 * 1. Create an object with properties for a car (make, model, year).
 * 2. Modify one of the properties and return the updated object.
 *
 * Example:
 * Update the `year` property of a car object.
 */

function updateCar() {
    const car = {make: "Toyota", model: "Corolla", year: 2020};
    car.year = 2021; // Update the year
    return car;
}

// Export the function
export {updateCar};
