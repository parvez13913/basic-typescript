"use strict";
// function
function add(num1, num2) {
    return num1 + num2;
}
// add(2, 5);
const arrowAdd = (num1, num2) => num1 + num2;
const arry = [2, 3, 4];
const newArry = arry.map((element) => element * element);
const person = {
    name: "Parvez",
    balance: 50,
    addBalance(money) {
        console.log(`My New Balance Is ${this.balance + money}`);
    },
};
// default value in function => default value সব সময় লাস্ট প্যারামিটারে দিতে হবে,প্রথম প্যারামিটারে দেওয়া আর না দেওয়া সমান।
function defaultValueAddFunction(num1, num2 = 10) {
    return num1 + num2;
}
// defaultValueAddFunction(10, 20); => default value ব্যাবহার না করতে চাইলে মান দিয়ে function কল করবো।
// spread opearator Arry থেকে ইলিমেন্ট গুলোকে আলাদা করে ফেলে।
const ourFriends = ["Hasem", "Kasem", "Josim"];
const ourNewFriends = ["Asif", "Hasib", "Maruf"];
ourFriends.push(...ourNewFriends);
// console.log(ourFriends);
// rest opearator ইলিমেন্ট গুলোকে নিয়ে একটা Arry তৈরি করে।
const greedFriend = (...friends) => friends.forEach((friend) => console.log(`Hi ${friend}`));
greedFriend("Nasir", "Sabbir", "Taskin", "Hridey");
// Arry and Object Destreucturing
const friendss = ["Hasem", "Kasem", "Josim"];
const [bestFriend] = friendss;
const myBestFriend = {
    bestFriendName: "Shakib",
    age: 22,
};
const { age } = myBestFriend;
// console.log(age, bestFriend);
