let guess = 16;
alert("Welcome to number guessing game");
while (true){
let newGuess = prompt("Guess the number range between 0 and 20");
//const newGuess = prompt;
if(guess == newGuess){
    //document.write("WOW Your guess is correct");
    alert("WOW Your guess is correct")
    break;
}
else {
  // document.write("TRY AGAIN your guess is wrong");
  alert("TRY AGAIN your guess is wrong")
}
}