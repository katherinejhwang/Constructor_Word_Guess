
function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.changeBoolean = function(userInput) {
        if (userInput === this.letter) {
            console.log("Change Boolean");
            this.guessed = true;
        }
}
    this.guessLetter = function() {
        if (this.guessed === true) {
            console.log("It matches!");
            return this.letter;
            }
            else {
                return ("_");
            }
        }        
}

Letter();

// var x = new Letter('x');
// var y = new Letter('y');
// var z = new Letter('z');


// x.changeBoolean('x');
// x.guessLetter('x');
// y.changeBoolean('y');
// y.guessLetter('y');

// console.log(x);
// console.log(y);


module.exports = Letter;

