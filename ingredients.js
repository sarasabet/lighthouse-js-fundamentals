const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let item = 0;
while( item < ingredients.length ){
  console.log(ingredients[item]);
  item++
}
for(let item = 0; item < ingredients.length; item++){
  console.log(ingredients[item]);
}
// let the IL(ingrediant list ) be = to the length of list . 
for(let IL= ingredients.length-1 ; IL >= 0; IL--){
  console.log(ingredients[IL]);// it srarts printing from back of the list
}