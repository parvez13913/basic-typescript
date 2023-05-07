type User = {
  name: string;
  age: number;
};

// interface=> interface মুল্যত Object Type এর ডাটার ক্ষেত্রে ব্যাবহার করা হয়। premitive type এর ক্ষেত্রে আমরা Type Alias use করবো।

interface IUser {
  name: string;
  age: number;
}

// Extends
interface IExtendeUser extends IUser {
  role: string;
}

const newUser: IExtendeUser = {
  name: "Parvez Rahman",
  age: 22,
  role: "Weeb Developer",
};

const userWithTypeAlias: User = {
  name: "Type Alias",
  age: 100,
};

const userWithInterface: IUser = {
  name: "Interface",
  age: 200,
};

// function এর ক্ষেত্রে আমরা সব সময় Type Alias use করবো।

type roolNumber = number;

type addNumberType = (number1: number, number2: number) => number;

interface IAddNumbers {
  (number1: number, number2: number): number;
}

const addNumber: IAddNumbers = (number1, number2) => number1 + number2;

type rollNumberType = number[];

interface IRoolnumbers {
  [index: number]: number;
}
const roolNumbers: IRoolnumbers = [1, 2, 3];
