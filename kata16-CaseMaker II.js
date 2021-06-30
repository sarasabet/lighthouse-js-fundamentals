const makeCase = function(input, conversionType) {
  let convertedinput = [];
  if (conversionType ==='camel'){
    for( let i = 0; i < input.length ; i ++){
      if (input[i] === ' ' ){
        i ++;
        convertedinput.push(input[i].toUpperCase())
      } else {
        convertedinput.push(input[i]);
      }
    }
  }
  if (conversionType ==='pascal'){
    for( let i = 0; i < input.length ; i ++){
      if (input[i] === ' ' ){
        i ++;
        convertedinput.push(input[i].toUpperCase())
      } else if (input[i] !== ' ' && i === 0 ){
        convertedinput.push ((input[0]).toUpperCase());
      } else {
        convertedinput.push(input[i]);
      }
    }
  }
  if (conversionType ==='snake'){
    for( let i = 0; i < input.length ; i ++){
      if (input[i] === ' ' ){
        convertedinput.push('_')
      } else {
        convertedinput.push(input[i]);
      }
    }
  }
  if (conversionType ==='kebab'){
    for( let i = 0; i < input.length ; i ++){
      if (input[i] === ' ' ){
        convertedinput.push('-')
      } else {
        convertedinput.push(input[i]);
      }
    }
  }
  if (conversionType ==='title'){
    for( let i = 0; i < input.length ; i ++){
      if (input[i] === ' ' ){
        i ++;
        convertedinput.push(' '+ input[i].toUpperCase())
      } else if (input[i] !== ' ' && i === 0 ){
        convertedinput.push ((input[0]).toUpperCase());
      } else {
        convertedinput.push(input[i]);
      }
    }
  }

let result = convertedinput.join('')
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