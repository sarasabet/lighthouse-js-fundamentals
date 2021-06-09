const range = function(start, end, step){
  let outputArray = [];
  if(start > end){
    return outputArray;
  }
  else if(step <= 0){
    return outputArray;
  }
  else if(start === undefined || end === undefined || step === undefined){
    return outputArray;
  }
  else{
    for(let i = start; i <= end; i = i + step){
      outputArray.push(i);
    }
  }
  return outputArray;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));