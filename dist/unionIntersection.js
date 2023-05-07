"use strict";
// Union Type=> Union Type টা হচ্ছে এমন একটা টাইপ,যেটাতে একটা না হলে আরেকটা হবে, Union হচ্ছে অথবা। Union type | দিয়ে বোঝানো হয়।
// type JuniorDeveloper = {
//     name: string;
//     expertise: string;
//     experience: number;
//   };
const developer = {
    name: "Abdullah",
    experience: 2,
    expertise: "TypeScript",
};
const seniorDeveloper = {
    name: "Sazu",
    expertise: "Redux",
    leadershipExprience: 3,
    experience: 4,
    level: "Senior Developer",
};
// Enum বলে একটা জিনিস আছে,Enum ব্যাবহার করা উচিত না, Enum ব্যাবহার করাটা বেস্ট প্রাক্টিস না।
