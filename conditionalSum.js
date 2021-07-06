//For this kata, we'll be adding only the numbers in the array which match the given condition.
const conditionalSum = (values, condition) => {
  let sumOfNums= 0;
  if ( condition === 'even'){
    values.forEach(element => { 
      element % 2 === 0 ? sumOfNums += element : sumOfNums = sumOfNums;
    });
  }
  else {
    values.forEach(element => { 
      element % 2 !== 0 ? sumOfNums += element : sumOfNums = sumOfNums;
    });
  }  
  return (sumOfNums)
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
