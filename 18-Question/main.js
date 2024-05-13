"use strict";
//Making a Array of Countries and Print its Original Order
let countriesTovisit = ["China", "South korea", "Turkey", "Paris"];
console.log("original order:", countriesTovisit);
//Print the Array in Alphabetical Order without modifying the actual array list
console.log("Alphabetical Order:", [...countriesTovisit].sort());
//show that the array is still in its original order
console.log("still in original order:", countriesTovisit);
//Print the Array in reversed order without modifying the actual array list
console.log("reverse order:", [...countriesTovisit].reverse());
//show that the array is still in its original order
console.log("still in original order:", countriesTovisit);
//We have Change the original Array Order Now
console.log("Original Array Reversed:", countriesTovisit.reverse());
//Print the Array to Show that it's back to its Original Order
console.log("Back to Original Order:", countriesTovisit.reverse());
//Print the Array to Show that it's order has been changed in Alphabetical order Now
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());
//We have Change again the original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriesTovisit.reverse());
