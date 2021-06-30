// /We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased //

const camelCase = (input) => {
  let result ='' // to save the semi-final result
  let slicedInput=input.split(' ') // slice the input bt ' ' space
  for ( let i = 0 ; i < slicedInput.length; i ++){// go through each word
    let word = slicedInput[i]; // save each word here

    let cameledWord= ''; //save the camelcased word here
    for (let j = 0; j < word.length; j ++){ // go through each letter of each word
      if (j === 0 ){
        cameledWord = cameledWord + word[0].toUpperCase();
      }
      else {
        cameledWord =cameledWord + word[j];
      }
    }
    result = result + cameledWord

  }
  let camedCaseOutput = result.replace(result[0], result[0].toLowerCase()) // convert the first letter to lower case 

  return camedCaseOutput;
}
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));