const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");

for(const item of packingList){
  console.log(item+'\n');
}
for (let item = 0;  item < packingList.length ; item++){
  console.log(packingList[item], item);
};