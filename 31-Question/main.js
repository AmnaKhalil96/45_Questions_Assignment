"use strict";
let userNames = ["Asharib Ali", "Amna", "Okasha Aijaz", "Neha", "Admin"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your array is Empty We need to find some users!");
}
else {
    //Using a ForEach Loop on Array
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    });
}
