"use strict";
//Define the make_album function
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling three functions and creating 3 variables with different values
let album1 = make_album("Amna Khalil", "Album title 1");
let album2 = make_album("Ali", "Album title 2");
//Calling a make_album function with third parameter
let album3 = make_album("Saad", "Album title 3", 10);
//Printing the variables
console.log(album1);
console.log(album2);
console.log(album3);
