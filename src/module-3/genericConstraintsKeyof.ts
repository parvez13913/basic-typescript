// Generic KeyOf Constraints

type PersoneType = {
  name: string;
  age: number;
  address: string;
};

type NewType = "name" | "age" | "address";

type NewTypeUsingKeyOf = keyof PersoneType;

const a: NewType = "address";
const b: NewTypeUsingKeyOf = "age";

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const property = getProperty(
  {
    name: "Abir Hassan",
    age: 29,
    address: "Garagonj",
  },
  "age"
);
