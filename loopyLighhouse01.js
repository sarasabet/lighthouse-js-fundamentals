/*
We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

    If the number is a multiple of 3, print the string "Loopy" instead of the number.
    If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
    If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
*/

const loopyLighthouse = () => {
  for (let index = 100; index <= 200; index++) {
    if (index % 3 === 0 && index % 4 === 0) {
      console.log("LoopyLighthouse");
    } else if (index % 3 === 0) {
      console.log("Loopy");
    } else if (index % 4 === 0) {
      console.log("Lighthouse");
    } else {
      console.log(index);
    }
  }
};
loopyLighthouse();
