// Type Guard
// Keyof Guard
type Alphaneumaric = number | string;

function add(param1: Alphaneumaric, param2: Alphaneumaric): Alphaneumaric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

add(1, 3);
add("1", "5");

// In Guard

type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: string;
};

const normalUser1: NormalUserType = { name: "Parvez" };
const adminUser1: AdminUserType = { name: "Parvez", role: "Admin" };

function getUser(user: NormalUserType | AdminUserType) {
  if ("role" in user) {
    return `I am an Usaer and mu role is ${user.role}`;
  } else {
    return "I am Normal User";
  }
}

console.log(getUser(normalUser1));
// instance of Guard
class Animal1 {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("Making sound");
  }
}

class Dog extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeBark() {
    console.log("I am Barking");
  }
}
class Cat extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMew() {
    console.log("I am Mewking");
  }
}
function isDog(animal: Animal1): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: Animal1): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: Animal1) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMew();
  } else {
    animal.makeSound();
  }
}

const animal2 = new Dog("Bruno", "Dog");
const animal3 = new Cat("Guddu", "Cat");

getAnimal(animal2);
getAnimal(animal3);
