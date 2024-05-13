"use strict";
// Creating a Variable
let age = 18;
//Creating a Program for Determining the stage of life using If-Else chain
if (age < 2) {
    console.log("You are a Baby.");
}
else if (age >= 2 && age < 4) {
    console.log("You are a Toodler.");
}
else if (age <= 4 && age < 13) {
    console.log("You are a Kid.");
}
else if (age >= 13 && age < 20) {
    console.log("You are a Teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("You are a Adults.");
}
else if (age >= 65) {
    console.log("You are Elders.");
}
