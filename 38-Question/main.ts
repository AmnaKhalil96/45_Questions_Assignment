//Describe a Function

function describeCity(city: string, country: string = "Pakistan"){
console.log(`${city} is in ${country}`);
}

// Calling a Function
describeCity("Karachi");

describeCity("Lahore");

describeCity("Berlin", "Germany");