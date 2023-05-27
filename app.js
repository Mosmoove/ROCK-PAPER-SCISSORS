 const computerChoiceDisplay = document.getElementById('computer-choice');
 const userChoiceDisplay = document.getElementById('user-choice');
 const resultDisplay = document.getElementById('result'); 
let userChoice;
let computerChoice;
let result;

 const possibleChoices = document.querySelectorAll('button'); // in this line, we want to select all the buttons for a user to click on
 possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id;
userChoiceDisplay.innerHTML = userChoice;
generateComputerChoice();
getResult(); // calls the function to get te result
 })) // to make the buttons more interactive, we simply need to add an Action Event Listener, so when the user hears a click, it will call the eventListener one time to perform a specified action.
 //  For example, when the user clicks the "scissor" button in the display, a text will appear saying "scissors"


 const generateComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3) + 1; // In this function, the computer will generate a random number from 1 to 3 to identify the possible choice it can make when the user clicks on the a specifed button

    if(randomNum === 1) {
        computerChoice = 'rock';
    }
    if(randomNum === 2) {
        computerChoice = 'scissors';
    }
    if(randomNum === 3) {
        computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice; // display the computer choice
 }


 const getResult = () => { // gets the result, which is to be displayed
    if(computerChoice == userChoice) { 
        result = "It's a draw!";
    }
   else if(computerChoice == 'rock' && userChoice == 'paper') {
        result = "You Won!";
    }
    else if(computerChoice == 'paper' && userChoice == 'scissors') {
        result = "You Won!";
    }
   else if(computerChoice == 'scissors' && userChoice == 'rock') {
        result = "You Won!";
    }
    else {
        result = "You Lost!";
    }
    resultDisplay.innerHTML = result; // shows the result
 }
