"use strict";
//Creating Guest lis Array
let guestList = ["Samreen", "Maryam", "Amna", "Shireen"];
//Making Variable for those guest who cant come
let dontCome = guestList[0];
//Printing the name of giest who can't come
console.log(dontCome, "can't come");
//Add or remove values from Guest list Array
guestList.splice(0, 1, "Sidra");
//Message print for bigger table
console.log("Good News! We have Found a Bigger Table For Dinner");
//Adding a new value at starting index of Array
guestList.unshift("Sara");
//Adding a new value at ending index of Array
guestList.push("Anum");
//Get a middle index of our guest list Array
let middleIndex = Math.floor(guestList.length / 2);
//Addind a new guest at middle index of Array
guestList.splice(middleIndex, 0, "Bano");
//Print Message of Updated List
console.log("Updated List of our Guests");
//Sending a Invitation Message to our Guests one by one with their names
guestList.forEach(oneguest => console.log(`Assalam u Alaikum ${oneguest}, Would you like to Dinner with me?`));
