/*
In this exercise, we will be given a url encoded string of key-value pairs, and we will have to turn it into a JavaScript object.
URL Encoded Strings

To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

    %20 represents a space character.
    Key-value pairs are represented using an = character: key=value
    Multiple key-value pairs are separated using a & character: key1=value1&key2=value2

So the following URL encoded string:
*/

const urlDecode = function(text) {
  let newText = (text.split('%20').join(' ')).split('&') // to replace the %20 with space and creat and array , split with &
  let newObject ={}
  newText.forEach(element => {
    for( let i = 0; i < element.length; i ++){
      if ( element[i] === '='){
        newObject[(element.slice(0,i))] = (element.slice(i+1)) // introduce keys and values
        break;
      }
    }
  });
  return newObject

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
