var Letter = require("./Letter.js");

var wordArray = ['kite', 'scarecrow', 'desire', 'butter', 'nut'];
var letterObjects = [];


function Word() {
    var wordPicked = wordArray[Math.floor(Math.random())];
    // console.log(wordPicked);
    var letterArray = [];
    letterArray = Array.from(wordPicked);
    console.log(letterArray);
// loop through the word using the constructor functon Letter on the letters in the array to make letter objects for each letter and push those objects into an array
        console.log(letterObjects);   
    }
//loop through the letterObjects array and run the guessLetter function for each letter
    function stringWord() {
        for (var x = 0; x < letterObjects.length; x++) {
            var strings = [];
            var newStrings = letterObjects[x].guessLetter();
            strings.push(newStrings);
            // console.log(strings.join(" "));
        }
    };


Word();
stringWord();

module.exports = Word;



