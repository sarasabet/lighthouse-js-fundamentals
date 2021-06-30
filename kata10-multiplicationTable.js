const multiplicationTable = (num) =>{
  let outPut = ''; // declare a variable to svae the final result 
  let maxValue  = 1; // starting point for while loop, as long as  maxValue does not reach the num, keep looping 
  while (maxValue < num + 1){
    for ( let i = 1; i < num + 1 ; i ++){
      outPut = outPut + (i * maxValue) 
    }
    maxValue ++
    outPut = outPut + '\n'
  }
  return outPut
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));