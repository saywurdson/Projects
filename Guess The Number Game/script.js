/**
 * Guess The Number Game
 * Done: Get user value from input and save it to variable numberGuess
 * Done: Generate a random number 1 to 100 and save it to variable correctNumber
 * Done: Console whether the guess is too high, too low, or is correct inside playGame function
 * Done: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * Done: Complete the showYouWon, showNumberAbove, showNumberBelow
 * Done: Use the showYouWon... functions within displayResult to display the correct dialog
 * Done: Save the guess history in a variable called guess
 * Done: Display the guess history using displayHistory() function
 * Done: Use the initGame() function to restart the game
 */

let guesses = []; // Variable to store the list of guesses
let correctNumber = getRandomNumber(); // Variable to store the correct random number

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

/**
 * Main function for playing the game
 */
function playGame(){
  let numberGuess = document.getElementById('number-guess').value;
  console.log(correctNumber);
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

/**
 * Show the result for if the guess it too high, too low, or correct
 */
function displayResult(numberGuess) {
  if(numberGuess > correctNumber){showNumberAbove();}
    else if(numberGuess < correctNumber){showNumberBelow();}
    else{showYouWon();}
}

/**
 * Initialize a new game by resetting all values and content on the page
 */
function initGame(){
  correctNumber = getRandomNumber(); // Resets the correctNumber variable
  document.getElementById("result").innerHTML = ""; // Resets the result display
  guesses = []; // Resets the guesses array
  displayHistory(); // Resets the guess display history
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){document.getElementById("result").innerHTML = "";}

/**
 * Return a random number between 1 and 100
 */
function getRandomNumber(){
  let randomNumber = Math.random();
  let wholeNumber = Math.floor(randomNumber * 100) + 1;
  return wholeNumber;
}

/**
 * Save guess history 
 */
function saveGuessHistory(guess){guesses.push(guess);} // Appends array of guesses

/**
 * Display guess history to user
 */
function displayHistory() {
  let index = guesses.length - 1; // Displays most recent guess at the top 
  let list = "<ul class='list-group'>";
  while(index >= 0) {
    list += "<li class='list-group-item'>" +
    "You guessed " + guesses[index] + '</li>';
    index-=1;
  }
  list += '</ul>';
  document.getElementById("history").innerHTML = list;
}


/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   */
  let dialog = getDialog('won', text)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function and save it to variable called dialog
   */
  let dialog = getDialog('warning', text)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function and save it to variable called dialog
   */
  let dialog = getDialog('warning', text)
  document.getElementById("result").innerHTML = dialog;
}
