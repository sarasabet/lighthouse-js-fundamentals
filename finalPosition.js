const moves =['north', 'north', 'west', 'west', 'north', 'east','north'];
const finalPosition=(moves) =>{
  let pos =[0, 0];
  for(let item = 0; item <= moves.length; item++){
    if(moves[item] === 'north'){
      pos[1]++
    }
    else if( moves[item] === 'south'){
      pos[1]--
    }
    else if(moves[item] === 'east'){
      pos[0]++
    }
    else if(moves[item] === 'west'){
      pos[0]--
    }
  }
  return (pos);
}
console.log(finalPosition(moves));  