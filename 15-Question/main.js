var guestList = ["Samreen", "Maryam", "Amna", "Sidra"];
var dontCome = guestList[0];
console.log(dontCome, "Can't come");
guestList.splice(0, 1, "Shireen");
guestList.forEach(function (guest) { return console.log("Assalam u Alaikum ".concat(guest, ", would you like to dinner with me?")); });
