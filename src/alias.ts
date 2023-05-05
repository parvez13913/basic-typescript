// Type Alias

type CrushType = {
  crushName: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: CrushType = {
  crushName: "Natash",
  age: 22,
  profession: "Web Developer",
  address: "Kushtia",
};

const crush2: CrushType = {
  crushName: "Purnima",
  profession: "acting",
  address: "Jhenaidah",
};
const crush3: CrushType = {
  crushName: "Sabnur",
  profession: "Polish",
  age: 21,
  address: "Khulna",
};

type CrashMarridType = boolean;

const isCrashMarrid: CrashMarridType = false;

type OperationType = (x: number, y: number) => number;

const calculate = (
  num1: number,
  num2: number,
  operation: OperationType
): number => {
  return operation(num1, num2);
};

calculate(20, 10, (x, y) => x + y);
calculate(20, 10, (x, y) => x - y);
calculate(20, 10, (x, y) => x * y);
calculate(20, 10, (x, y) => x / y);
