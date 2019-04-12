var inquirer = require('inquirer');
var Word = require("./Word.js");
var Letter = require("./Letter.js");

inquirer
.prompt([
    {
    type: "input",
    message: "Guess a letter",
    name: "userGuess",
    },
])
.then(function(name) {
    //show the guess
    console.log(name.userGuess);
    var guessWord = new Word(name.userGuess);
})