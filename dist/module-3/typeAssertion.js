"use strict";
// Type Assertion=> Type Assertion হচ্ছে টাইপস্ক্রিপ্টকে নিজেই টাইপ বলে দেওয়া।
let variable;
variable = "Next Level Weeb Development";
variable.length;
// Type Assertion এই ভাবেও প্রকাশ করা যাই।
variable.length;
function kgToGram(parm) {
    if (typeof parm === "number") {
        const convertedValue = parm * 1000;
        return convertedValue;
    }
    else if (typeof parm === "string") {
        const value = parseFloat(parm) * 1000;
        return `The Converted Value is ${value}`;
    }
}
const resultToBeNumber = kgToGram(10);
const resultToBeString = kgToGram("30");
try {
}
catch (err) {
    console.log(err.message);
}
