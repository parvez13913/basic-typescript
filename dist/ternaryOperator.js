"use strict";
// ternary Operator
const myAge = 22;
const isAdult = myAge >= 22 ? "Yes" : "No";
console.log(isAdult);
// Nullish Coeslancing Operator=> Null And Undefined,Nullish Coeslancing Operator শুধুমাত্র Null এবং Undefined এর ক্ষেত্রে কাজ করে অন্য কোন ফলসি ভ্যালুর ক্ষেত্রে কাজ করেনা।
const isUser = null;
const fullUserName = isUser !== null && isUser !== void 0 ? isUser : "Guest";
console.log(fullUserName);
