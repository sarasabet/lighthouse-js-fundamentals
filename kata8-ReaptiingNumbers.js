const repeatNumbers = function (data) {
  let result = '';
  for (let i = 0; i < data.length; i ++){
    const element =data[i];
   
    for (let j = 0; j < element[1]; j ++ ){
      result = result + element[0];
      
    }
    if (i < data.length -1){
      result = result +','
    }
  }
  return result;

};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);

console.log(
  repeatNumbers([
    [4557, 4],
    [123, 2],
    [35, 6],
  ])
); 

