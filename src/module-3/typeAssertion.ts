// Type Assertion=> Type Assertion হচ্ছে টাইপস্ক্রিপ্টকে নিজেই টাইপ বলে দেওয়া।

let variable: any;

variable = "Next Level Weeb Development";

(variable as string).length;
// Type Assertion এই ভাবেও প্রকাশ করা যাই।
<string>variable.length;

function kgToGram(parm: number | string): number | string | undefined {
  if (typeof parm === "number") {
    const convertedValue = parm * 1000;
    return convertedValue;
  } else if (typeof parm === "string") {
    const value = parseFloat(parm) * 1000;
    return `The Converted Value is ${value}`;
  }
}

const resultToBeNumber = kgToGram(10) as number;
const resultToBeString = kgToGram("30") as string;

type CustomErrorType = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomErrorType).message);
}
