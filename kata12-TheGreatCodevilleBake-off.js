
/*
The town festival is tomorrow and the organizers have only just realized that they've booked two bakeries to cater desserts, but only have one kitchen available. Instead of just choosing one bakery, let's help them figure out a way to work together.

Both of the bakeries have a specialty, so they each have a stock of specific ingredients.

Lucky for the festival organizers, we've found a recipe book in the town library with TONS of fusion recipes, unfortunately it's thousands of pages long and we don't have much time. Let's write a function that helps determine which recipes match the ingredients that both bakeries have in stock.
We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.
*/

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let recipesForA = [];// create a variable to keep record of all recipes's name that rae inclouded A ingredients
  let recipesForB= [];// create a variable to keep record of all recipes's name that rae inclouded B ingredients

  for ( let i = 0 ; i < bakeryA.length ; i ++){ // loop thtough all A and all recipes Ing 
    for ( let j = 0; j < recipes.length ; j ++) {
      if ( bakeryA[i] === recipes[j].ingredients[0] || bakeryA[i] === recipes[j].ingredients[1]){
        recipesForA.push(recipes[j].name)
      }
    }
  } 

  for ( let i = 0; i < bakeryB.length ; i ++) {// loop thtough all B and all recipes Ing 
    for ( let j = 0; j < recipes.length; j ++){
      if ( bakeryB[i] === recipes[j].ingredients[0] ||bakeryB[i] === recipes[j].ingredients[1] ){
        recipesForB.push(recipes[j].name) 
      }
    }
  }
  let result = [] // push all the shared recipes of list recipesForA & recipesForB
  for ( let i = 0; i < recipesForA.length ; i ++){ //loop through recipesForA & recipesForB
    for ( let j = 0; j < recipesForB.length ; j ++){
      recipesForA[i] === recipesForB[j] ? result.push(recipesForA[i]) : result = result
    }

  }
  return result
 
}  
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];
console.log(chooseRecipe(bakeryA, bakeryB, recipes));


bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
