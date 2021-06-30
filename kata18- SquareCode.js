/*
n Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle). For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long, once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.
The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

The message is then coded by reading down the columns going left to right. For example, the message above is coded as:

And that's the output of the algorithm. We can then reverse the process to decrypt the text and read the original message.
*/
const squareCode = function(message){
  let msg = message.split(' ').join('');// remove all the spaces and join the  letter back
  

  let lengthMsg = msg.length;
  let squareRoot = Math.ceil(Math.sqrt(lengthMsg)) 
  let newMSG = [];// variable to save temp result
  let result =[]; // variable to save the final result
  let counter = 0;

  for ( let i = 0; i < squareRoot; i ++){
    for ( let j= counter ; j < lengthMsg ; j += squareRoot){
      newMSG.push(msg[j]);
    }
    counter ++;
    result.push(newMSG.join(''));
    newMSG  =[]// to make the newMSG empt y otherwise it save each loop on top of the previous one
  }

  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

