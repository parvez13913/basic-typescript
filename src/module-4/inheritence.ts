class Preant {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours} hours`;
  }
}

class Student extends Preant {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}
const student1 = new Student("Parvez", 22, "Bangladesh");

class Teacher extends Preant {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  takeClasses(numberOfClass: number): string {
    return `This ${this.name} will take ${numberOfClass} Classes`;
  }
}

const teacher1 = new Teacher("Abul Kasem", 56, "Dhaka", "professor");
