/*In this kata you'll be responsible for setting up your JS file from scratch. Make sure it is well organized!

Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end, the number of tries needed should be printed.

Inputting the same number multiple times should only count as one try. If the user provides an answer which isn't a number, print an error message and do not count this as a try.
*/

'use strict';
let prompt = require("prompt-sync")({sigint: true}); // get th einput , if want to intrupt , press A^C
let storage =[];
let count = 0; 
let number = Math.floor(Math.random()*100); // genertae random number between 0-100
let answer = 0

while( answer !== number){ // as ong as the guess and random number are not equall , keep guessing
  let answer =prompt('Enter a number in range of (0-100; ' )
  if (isNaN(answer)){ // check if the guess is an actual number
    console.log('It is not a number, please try again!')
  }
  else { 
    if (storage.includes(answer)){ // check if the number is not already guessed
      console.log('You have already guessed this number, try again!')

    }
    else if (number < answer){
      console.log('your number is too big!')
      count ++;
      storage.push(answer);
    }
    else if (number > answer){
      console.log('your number is too small!')
      count ++;
      storage.push(answer);
    }
    else {
      count ++
      console.log(`Great job! ${answer} is the secret numer! you gussed ${count}times`)
      break;
    }
  }
};