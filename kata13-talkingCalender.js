//In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017. 
const talkingCalendar = function(date) {
  // Your code here
  let month = date.slice(5,7)// take out the month number
  let monthName ='' // save up the proper month name
  switch (month){ // use a switch statement adn based ob each month number, give it a proper name
    case '01':
      monthName += "January";
      break;
    case '02':
      monthName += "February";
      break;
    case '03':
      n=monthName += "March";
      break;
    case '04':
      monthName += "April";
      break;
    case '05':
      monthName +='May';
      break;
    case '06':
      monthName += 'June';
      break;
    case '07':
      monthName = 'July';
      break;
    case '08':
      monthName += 'Agust';
      break;
    case '09':
      monthName += 'September';
      break;
    case '10':
      monthName += 'October';
      break;
    case '11':
      monthName += 'November';
      break;
    case '12':
      monthName = 'December';
      break;
    default:
      monthName += 'Not a valid month\'s name';
    }
  if (date.slice(-1) === '2'){
    monthName += ' '+ date.slice(-2) +'ed'+', ' + date.slice(0, 4);
  } else if (date.slice(-1) === '3'){
    monthName += ' '+ date.slice(-2) +'rd'+', '+ date.slice(0, 4);
  } else {
    monthName += ' '+ date.slice(-2) +'th'+', '+ date.slice(0, 4);
  }  
  return monthName
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));