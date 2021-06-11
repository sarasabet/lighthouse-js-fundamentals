/*
we are lookonh into improving parkings at CodeVill, so we are going to impliment smart parking system,
whereCanIPark takes an array [] which has two items{ parkingSpot, vehicle],
There are three kinds of possible vehicles: regular cars, small cars, and motorcycles.

    Regular cars can only park in R spots.
    Small cars can park in R or S spots.
    Motorcycles can park in R, S, or M spots.

In the array of parking spots, spots are written in both lower-case and upper-case. An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.

Our function must return an array with the coordinates of the spot as an [X, Y] pair. See the example input and output below for an illustration.

*/
const whereCanIPark = function (spots, vehicle) {
  for ( let y = 0; y < spots.length; y ++){
    for ( let x = 0; x < spots[y].length; x ++){
      const spot = spots[y][x];
      
      if (vehicle === 'regular'){
        if (spot === 'R'){
          return [x, y];
        }
      }
      else if (vehicle === 'small') {
        if ( spot ==='S' || spot === 'R'){
          return [x, y];
        }
      }
      else if (vehicle === 'motorcycle'){
        if ( spot ==='S' || spot === 'R' || spot === 'M'){
          return [x, y];
        }
      }
    }
  }
  return false
};


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))