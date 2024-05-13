// Define Variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana","orange", "mango"];
//Test for equality and inequality with srtings

console.log("Is apple is equal to apple?");
console.log(apple == "apple");


console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

// Tests using lower case function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

//Numerical Tests
//Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

//Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

//Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

//Less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);

//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

//Less than or Equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);

//Tests using "And" & "Or" Operators

//Using && (And)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);

// Using ||(OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

//Test whether an item is include in array
console.log("\nIs orange is include in my array?");
console.log(fruits.includes("orange"));

//Test whether an item is not include in array
console.log("\nIs orange is not include in my array?");
console.log(!fruits.includes("orange"));








