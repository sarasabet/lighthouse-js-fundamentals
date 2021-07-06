/*
In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.
*/
const numberOfVowels = function(data) {
  let count = 0;

  let vowels ='AaEeOoUuIi';
  for ( let i = 0 ; i < data.length ; i ++){
    for ( let j = 0; j < vowels.length; j ++){
      data[i] === vowels[j] ? count ++ : count += 0;
    }
  }
  return (count)
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
