// function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// add(2, 5);

const arrowAdd = (num1: number, num2: number): number => num1 + num2;

const arry: number[] = [2, 3, 4];
const newArry = arry.map((element: number) => element * element);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Parvez",
  balance: 50,
  addBalance(money: number) {
    console.log(`My New Balance Is ${this.balance + money}`);
  },
};
