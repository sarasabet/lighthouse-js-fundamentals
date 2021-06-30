/*
A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.
Chess Board Queen
In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.
*/
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));



function generateBoard(whiteQueen, blackQueen){
  let temp = [];
  let result = [];
  for ( let i = 0; i < 8; i ++){
    for (let j = 0; j < 8; j ++){
      if ((whiteQueen[0] === i && whiteQueen[1] === j) || (blackQueen[0] === i && blackQueen[1] === j)) { // change the [x,y] to 1 if it is the queen position
        temp.push(1);
      } else { 
        temp.push(0)// keep the [x,y] zero /empty if it is not queen position
      }

    }
    result.push(temp)
    temp = []
  }
  return result;//return the chest board iwth white nad balck queen turned to one 
}


function queenThreat(){
  return (whiteQueen[0] == blackQueen[0] || whiteQueen[1]== blackQueen[1] || (whiteQueen[0]+whiteQueen[1]) == (blackQueen[0]+blackQueen[1])|| (whiteQueen[0] - blackQueen[0]) == (whiteQueen[1] - blackQueen[1])) ? true : false  // there is a mathemathical relation for matrix
}