const multiplicationTable = function(maxValue) {
let num ='';// declare a variable to save the final result  in,
for ( let i = 1; i <= maxValue; i ++){ // set up a FL which has row  = maxValue
  for ( let j = 1; j <= maxValue; j ++){ // set a Fl that has column = maxValues
    j === maxValue ? num += '\n' : num += j*i 
  }
  console.log('length of num at this point; ',num.length)
}
return num
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10)); 