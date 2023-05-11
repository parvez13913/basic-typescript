// Pick

interface IPerson {
  name: string;
  email: string;
  contactNo: number;
}

// type Email = Pick<IPerson, "email">;
type Contact = Pick<IPerson, "email" | "contactNo">;

// Omit
type NameType = Omit<IPerson, "email" | "contactNo">;

// Partial
// To make all the poperties be optional type
type Optional = Partial<IPerson>;

// Required

type RequiredProperty = Required<IPerson>;

const personnnn: Readonly<IPerson> = {
  name: "Tamim",
  email: "Tamim@gmail.com",
  contactNo: 88998889,
};

// Record Type

// type MyObject = {
//   a: string;
//   b: string;
//   c: string;
// };

// index signature
// type MyObject = {
//   [key: 'a'|'b'|'c']: string;
// };

// Record utility
type MyObject = Record<"a" | "b" | "c" | "d", string>;

const myObject: MyObject = {
  a: "Alue",
  b: "Bagun",
  c: "Chai",
  d: "Daul",
};
