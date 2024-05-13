let guestList = ["Samreen", "Maryam", "Amna", "Sidra"];

let dontCome = guestList[0];

console.log(dontCome, "Can't come");

guestList.splice(0, 1, "Shireen");

guestList.forEach(guest => console.log(`Assalam u Alaikum ${guest}, would you like to dinner with me?`));




