"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Create an instance of Car
const myCar = new Car("Toyota", "Corolla", 2022);
// Call the start method
myCar.start(); // Output: Car engine started
