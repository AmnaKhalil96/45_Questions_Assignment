"use strict";
//Describe a Function
function describeCity(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// Calling a Function
describeCity("Karachi");
describeCity("Lahore");
describeCity("Berlin", "Germany");
