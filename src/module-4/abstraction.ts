// Abstraction
// interface

// interface IVehicals {
//   name: string;
//   model: string;
// }

// const vehicals = {
//   name: "Car",
//   model: "2012",
// };

interface IVehicals {
  startEngine(): void;
  stoptEngine(): void;
  move(): void;
}

class Vehicals implements IVehicals {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  startEngine(): void {
    console.log("I am startting Engine....");
  }
  stoptEngine(): void {
    console.log("I am stoping Engine");
  }
  move(): void {
    console.log("I am moving....");
  }
  test() {
    console.log("I am for Testing Purpose");
  }
}

const vehical = new Vehicals("Car", "Toyota", 2000);

// Abstract

abstract class VehicalsClass {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngine(): void;
  abstract stoptEngine(): void;
  move(): void {
    console.log("I am moving....");
  }
}

class Car extends VehicalsClass {
  startEngine(): void {
    console.log("I am starting.....");
  }
  stoptEngine(): void {
    console.log("I am stoping");
  }
}

// const car1 = new VehicalsClass("Car", "Honda", 2012);
