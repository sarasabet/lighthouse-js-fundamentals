/*
 this function get three parameters name, year of birth and current year, it return a string "name +is xx years old
*/
let data =['Sara', 1986, 2021];
const ageCalculator = (data) => {
  const age = data[2]- data[1]

  const myName =data[0];
  return `${myName} is ${age} years old!`;

};
console.log(ageCalculator(data))

//here is the othe approach

function ageCalculator (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  let str = name + " is " + age + " years old."
  return str;
}