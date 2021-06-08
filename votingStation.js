/* 
we filter all the available location based on their capacity and also based on their location , acce[table capacity is at least 20 and acceptable location for voting are schools and community centres
*/


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function(stations) {
  let goodStations = [];
  for(let station of stations) {
    if ((station[1] >= 20) && (station[2] === 'school' || station[2] === 'community centre')) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));
