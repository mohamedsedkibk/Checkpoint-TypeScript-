// Define an interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  // Create an instance of Car
const myCar = new Car("Toyota", "Corolla", 2022);

// Call the start method
myCar.start(); // Output: Car engine started