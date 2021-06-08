function whichSchool(age) {
  if (age < 13) {
    console.log('elementary school')
  }
  else if  ((age >= 13) && (age <= 18) ) {
    console.log('Secondary school ')
  }
  else if  ((age > 18) && (age < 100)) {
    console.log("Lighhouse Labs")
  }
}
whichSchool(15);
