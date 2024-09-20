const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 10) + 1;
let guessedCorrectly = false;

console.log("You have 10 seconds to guess the number between 1 and 10.");

const timer = setTimeout(() => {
  if (!guessedCorrectly) {
    console.log(`Time's up! The correct number was ${randomNumber}.`);
    rl.close();
  }
}, 10000);

const askGuess = () => {
  rl.question('Enter your guess: ', (guess) => {
    const numberGuess = parseInt(guess, 10);
    if (numberGuess === randomNumber) {
      console.log('Correct! You guessed the number.');
      guessedCorrectly = true;
      clearTimeout(timer);
      rl.close();
    } else if (numberGuess < randomNumber) {
      console.log('Too low. Try again.');
      askGuess();
    } else if (numberGuess > randomNumber) {
      console.log('Too high. Try again.');
      askGuess();
    } else {
      console.log('Invalid input. Please enter a number.');
      askGuess();
    }
  });
};

askGuess();
