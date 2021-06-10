// In this exerceise we are provided with an array , sort it and return sum of the two largest one,

const sumlargestnumbers =(data) =>{
  let sortedData = data.sort();
  let sumOfLastTwo = data[data.length-1] + data[data.length-2]
  return sumOfLastTwo;

}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([220, 4000, 34, 6, 92, 2, 50]));