// যে জিনিসের অনেকগুলো রুপ থাকে তাকে polymorphism বলে।
class Person {
  takeNap(): void {
    console.log("I aM sleeping 8 houre par Day");
  }
}

class Studenttt extends Person {
  takeNap(): void {
    console.log("I am Sleeping 10 hour par Day");
  }
}

class Developer extends Person {
  takeNap(): void {
    console.log("I am sleeping 6 houre par day");
  }
}

function getNap(param: Person) {
  param.takeNap();
}

const person1 = new Person();
const person2 = new Studenttt();
const person3 = new Developer();

console.log(getNap(person1));
console.log(getNap(person2));
console.log(getNap(person3));

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  redious: number;

  constructor(redious: number) {
    super();
    this.redious = redious;
  }

  getArea(): number {
    return Math.PI * this.redious * this.redious;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

function getAreaOfSheap(param: Shape) {
  console.log(param.getArea());
}

getAreaOfSheap(new Circle(20));
getAreaOfSheap(new Rectangle(20, 23));
