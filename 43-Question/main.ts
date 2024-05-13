// Define a Function to show magicians names

function show_magicians(magicians: string[]) {
  magicians.forEach((name) => console.log(name));
}

//Function to make magicians great through .map() it will modify array

function make_great(magicians: string[]) {
  return magicians.map((name) => `The Great ${name}`);
}

// Define an array containing magicians names
let magician_names = ["Harry Poter", "Amna Khalil", "Ali"];

// Making a copy of Original array through .Slice() function

let copy_magician_names = magician_names.slice();

// Modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_names);

// show both arrays Original and Copied
// Original
console.log("\nOriginal Array\n");
show_magicians(magician_names);

// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
