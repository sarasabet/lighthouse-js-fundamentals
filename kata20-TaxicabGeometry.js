/*
In this exercise, we will write an algorithm to help taxicabs determine how far away a destination is based on the directions given.
The taxi driver is given a list of directions that tell her whether to turn left or right, and how many blocks to drive for. Every time the taxi driver has to turn left, she will make a 90° turn anticlockwise, and every time the taxi driver has to turn right, she will make a 90° turn clockwise.

Let's take a look at some example directions: ["right", 2, "left", 3, "left", 1].
Now that the taxi driver is at her final destination, we can determine that she is 1 block east and 3 blocks north of where she started.

*/
const blocksAway = function(directions) {
  let direction = '';// to keep track of direction
  result = { east: 0, north: 0 }// an object to save the  result of each loop and final result

  for ( let i = 0; i < directions.length; i += 2){
    if ( direction === '+E' && directions[i] === 'right'){// if the direction is E and turn right, change the Direction
      result.north -= directions[i + 1];
      direction ='-N';// -N represent South
    }
    else if ( direction === '+E' && directions[i] === 'left'){// +E represent East
      result.north += directions[i + 1];
      direction ='+N';// +N represent North
    }
    else if ( direction === '-E' && directions[i] === 'right'){// -E represent West
      result.north += directions[i + 1];
      direction ='+N'; 
    } 
    else if ( direction === '-E' && directions[i] === 'left'){
      result.north -= directions[i + 1];
      direction ='-N';
    } 
    else if ( direction === '+N' && directions[i] === 'right'){
      result.east += directions[i + 1];
      direction ='+E';
    }
    else if ( direction === '+N' && directions[i] === 'left'){
      result.east -= directions[i + 1];
      direction ='-E';
    }
    else if ( direction === '-N' && directions[i] === 'right'){
      result.east -= directions[i + 1];
      direction ='-E';
    }
    else if ( direction === '-N' && directions[i] === 'left'){
      result.east += directions[i + 1];
      direction ='+E';
    } else{ // for first loop since the result is empty, add the directiona dn E/N pos
      if( directions[i] === 'right'){
        result.east += directions[i+1];
        direction = '+E';
      } else {
        result.north += directions[i+1];
        direction = '+N';
      }
    }
  }
  return result;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
