"use strict";
//Creating a Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Using for-loop
for (let oneNumber of numbers) {
    let oridinalEnding;
    if (oneNumber === 1) {
        oridinalEnding = "st";
    }
    else if (oneNumber === 2) {
        oridinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        oridinalEnding = "rd";
    }
    else {
        oridinalEnding = "th";
    }
    console.log(`${oneNumber}${oridinalEnding}`);
}
