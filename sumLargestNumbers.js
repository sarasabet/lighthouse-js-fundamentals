const sumLargestNumbers = function(data) {
  data.sort((a, b) => a-b) // sort the input array in decending order
  console.log(data.sort())
  return data[data.length-1]+data[data.length-2] // thake the last two element and add the up
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
