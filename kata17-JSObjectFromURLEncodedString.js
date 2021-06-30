/*


To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

%20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character: key1=value1&key2=value2

*/

const urlDecode = function(text) {
  
  let temp = ''; // declare a var to save the text and replace the %20 with ' '
  for ( let i = 0; i < text.length; i ++){
    if( text[i] === '%' && text[i+1]=== '2' && text[i+2] === '0') {
      temp  += (' ');
      i += 2;
    } 
    else{
       temp += text[i];
    }
  }
  
  let newArray = temp.split('&'); // split the temporary text  with & and make an Array
  let result = {};// declare an object to save the final result in it
  for (let i = 0; i < newArray.length; i ++){ // loop through every item of Array
    for ( let j = 0; j < newArray[i].length; j ++){// loop through every element of each Array's ietm
      if ( newArray[i][j] === '='){
        let key = newArray[i].slice(0, j)
        let value = newArray[i].slice(j+1, newArray[i].length)
        result[key]= value;
      }
    }
  }
  return result;
};


console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
