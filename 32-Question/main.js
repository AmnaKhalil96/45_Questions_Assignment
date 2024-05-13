"use strict";
//List the Array of current users
let currentUsers = ["Salar", "Jehan", "Faris", "Wajdan", "Yaram"];
//Array of new users
let newUsers = ["Fateh", "Salar", "Usman", "Jehan", "Ali"];
// Loop through new users to check for usernames availablity
newUsers.forEach(newOneuser => {
    //Making a Condition for username already exists and save in our-condition variable
    let ourCondition = currentUsers.some(currrentOneuser => currrentOneuser.toLowerCase() === newOneuser.toLowerCase());
    //Print Different messages using If-Else statements
    if (ourCondition) {
        console.log(`Sorry ${newOneuser} is already taken!`);
    }
    else {
        console.log(`This Username ${newOneuser} is available`);
    }
});
