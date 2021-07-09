/*
In this exercise, we will be building an advanced case maker that can convert strings into all different kinds of case styles; like camel, pascal, snake, or even kebab.
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

*/
const makeCase = function(input, type) {

  let data = [type]// creat an array to save the type there and convert the string to array to handel multiple types
  typeof type === 'string' ? data= [type] : data = type // check the type if it is Str convert tit  to Array

  let newText=[]; // declare an array to save the converted letters
  let result = '';// declare an array to save the final result
  let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u' , 'U'];

  for( let i = 0; i < data.length; i ++){ // go through each and every type , if there is more than one 
    for( let l = 0; l < input.length; l ++){ //got through each and every character/letter 
      if ( data[i] === 'camel'){
        if(input[l] === ' '){
          l ++;
          newText.push(input[l].toUpperCase())
        } else {
          newText.push(input[l])
        }
        result = newText.join('')
        }
      else if(data[i] === 'pascal'){
        if(input[l] === ' '){
          l ++;
          newText.push(input[l].toUpperCase())
        } else {
          newText.push(input[l])
        }
        result = newText.join('')
        result =result[0].toUpperCase() +result.slice(1)
      }
      else if(data[i] === 'snake'){
        if(input[l] === ' '){
          newText.push('_')
        } else {
          newText.push(input[l])
        }
        result = newText.join('')
      }
      else if(data[i] === 'kebab'){
        if(input[l] === ' '){
          newText.push('-')
        } else {
          newText.push(input[l])
        }
        result = newText.join('')
      }
      else if(data[i] === 'title'){
        if(input[l] === ' '){
          l ++;
          newText.push(' '+ input[l].toUpperCase())
        } else {
          newText.push(input[l])
        }
        result = newText.join('')
        result =result[0].toUpperCase() +result.slice(1)
      }
        else if(data[i] === 'vowel'){
          input[i] in vowels ? newText.push(input[l].toUpperCase()) : newText.push(input[l]); 
          result = newText.join('')
      }
        else if(data[i] === 'consonant'){
          input[i] in vowels ? newText.push(input[l]) : newText.push(input[l].toUpperCase());
          result = newText.join('')
      };
    }
  }
  return result;

}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
