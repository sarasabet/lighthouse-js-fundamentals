
// In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.
const organizeInstructors = function(instructors) {
  let result = {};//variable to stor final objet/eresult 
  instructors.forEach(element => { // loop through each and every ellement 
    let course = element.course;
    if (course in result){ // if the course name is already in the result list  , update it with an instructor's name
      result[course].push(element.name)
    } else {
      result[course] = [element.name] //if the course name is not in the resulr,add it uo to the reault and all ab {} array for the inctructors' names
    }

    
  });
  console.log(result)
    
}
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));