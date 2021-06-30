/* 
There's a new attraction at this year's Codeville festival. The organizers have decided to bring in several inflatable attractions, but they have no clue how to much blow them up. Each attraction needs to be pumped to a precise volume to achieve maximum festival fun!

The attractions are each made up of a combination of several different shapes: cones, spheres and prisms. For example, the giant inflatable duck is made up of two spheres (the body and head) and a cone (the beak) 🦆.

Each shape has a different calculation for determining volume, so we'll need to create a few functions that will help us figure out the volume of the various inflatable attractions.

In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

    sphereVolume()will calculate the volume of a sphere given a radius
    coneVolume() will calculate the volume of a cone given a radius and a height
    prismVolume() will calculate the volume of a prism given a height, a width, and a depth
*/
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return  (4/3)*PI*(radius*radius*radius)
}// define a function to calculate sphere's  volume

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);


const coneVolume = function (radius, height) {
  return PI*radius*radius*( height / 3);
}// define a function to calculate cone's  volume

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth
}// define a function to calculate prism's  volume

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let total = 0;
  for ( const solid of solids) {
    if (solid.type === 'sphere'){
      total += sphereVolume(solid.radius)
    }
    else if ( solid.type === 'cone'){
      total += coneVolume( solid.radius, solid.height)
    }
    else if (solid.type === 'prism'){
      tota += prismVolume( solid.radius, solid.height, solid.width)
    }
  }// to calculate the total volume f the baloon with different solids

  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);