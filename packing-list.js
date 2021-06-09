const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");

for (let item = 0;  item < packingList.length ; item++){
  console.log(packingList[item]);
};
let startpoint = 0;
while(startpoint < packingList.length){
  console.log(packingList[startpoint]);
  startpoint++;
};