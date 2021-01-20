var secretNum = Math.floor(Math.random() * 10)

var userGuess = +prompt("Enter your Guess Number")


if (secretNum === userGuess){
    document.write("Bingo! Correct Answer")
}

else if (userGuess > secretNum){
    document.write("Close enough to correct answer")
}
else if (userGuess < secretNum){
    document.write("Close enough to correct answer")
}