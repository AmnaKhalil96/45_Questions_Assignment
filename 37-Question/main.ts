// Making a Function
function makeShirt(size: string = "Large",  printMessage: string = "I Love TypeScript"){
console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
};
//Calling a Function with by default values
makeShirt();

//Calling a Function now with Medium size and default message
makeShirt("Medium");

//Calling a Function now with Small size and also different print message
makeShirt("Small", "I Love JavaScript");