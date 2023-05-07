"use strict";
// Type Alias
const crush1 = {
    crushName: "Natash",
    age: 22,
    profession: "Web Developer",
    address: "Kushtia",
};
const crush2 = {
    crushName: "Purnima",
    profession: "acting",
    address: "Jhenaidah",
};
const crush3 = {
    crushName: "Sabnur",
    profession: "Polish",
    age: 21,
    address: "Khulna",
};
const isCrashMarrid = false;
const calculate = (num1, num2, operation) => {
    return operation(num1, num2);
};
calculate(20, 10, (x, y) => x + y);
calculate(20, 10, (x, y) => x - y);
calculate(20, 10, (x, y) => x * y);
calculate(20, 10, (x, y) => x / y);
