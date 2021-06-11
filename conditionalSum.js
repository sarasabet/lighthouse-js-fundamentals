const conditionalSum = function(values, condition) {
  if (condition ==='odd') {
    let sumOfOdds = 0;
    for ( let i =0; i < values.length; i++){
      if(values[i] % 2 !== 0){
        sumOfOdds += values[i];
      }
      else{
        sumOfOdds += 0;
       }      
      }
      return sumOfOdds
    }
  else if ( condition ==='even'){
    let sumOfEven = 0;
    for(let i = 0; i < values.length; i++){
      if(values[i] % 2 === 0){
        sumOfEven += values[i];
      } else {
        sumOfEven += 0;
      }
    }
    return sumOfEven
  }
};



console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
