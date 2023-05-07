"use strict";
// nullable Type
const searchName = (value) => {
    if (value === null) {
        console.log("There is Nothing to search");
    }
    else {
        console.log("Searching....");
    }
};
searchName(null);
// Unknown Type
const getMyCarSpeed = (speed) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My Speed is ${convertedSpeed}`);
    }
    else if (typeof speed === "string") {
        const [value, unit] = speed.split(" ");
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My Speed is ${convertedSpeed}`);
    }
    else {
        console.log("It is wrong Type");
    }
};
getMyCarSpeed(10);
getMyCarSpeed(false);
getMyCarSpeed("20 kmh^-1");
// Never Type=> Never কখনো কোন কিছু return করে না।
function errorThrow(message) {
    throw new Error(message);
}
errorThrow("Error Khaichi");
