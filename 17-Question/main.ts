//Creating Guest list Array
let guestList = ["Samreen", "Maryam", "Amna","Shireen"];

//Making Variable for those guest who cant come
let dontCome = guestList[0];

//Printing the name of guest who can't come
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
let middleIndex: number = Math.floor (guestList.length / 2);

//Addind a new guest at middle index of Array
guestList.splice(middleIndex, 0, "Bano");

//Print Message of Updated List
console.log("Updated List of our Guests");

//Sending a Invitation Message to our Guests one by one with their names
guestList.forEach(oneguest => console.log(`Assalam u Alaikum ${oneguest}, Would you like to Dinner with me?`));

//Inform only two Guests can be invited for dinner
console.log("Unfortunately, the new dinner table won't arrive on time, so I can only invite two Guests to dinner with me");

//Using while-pop to remove guests from the array until only two names remain
while(guestList.length > 2){
let removeGuest = guestList.pop();
console.log(`Sorry, ${removeGuest} I can't invite you to dinner`);
}

//sending a Invitations to the last two Guests on the List
console.log("Invitation to the last two Guests");
guestList.forEach(lastTwo => console.log(`Luckily ${lastTwo}, You are still Invited to Dinner`));

//Removing Last two Guests from the List
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);













