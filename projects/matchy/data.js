/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}; 
animal.species = "Dog";
animal["name"] = "Max";
animal.noises = [];
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = ("woof");
noises.push("bark");
noises.unshift("grr");
noises.unshift("howl");
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises; 
animal["noises"].push("arf");
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *You can access properties on objects using dot notation and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *You can access elements of an array using bracket notation to indicate the index.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal); 
console.log(animals);
var duck = { 
    species: "Duck",
    name: "Jerome",
    noises: ['quack', 'honk', 'sneeze', 'woosh']};
animals.push(duck); 
console.log(animals);
var monkey = {
    species: "Ape",
    name: "George",
    noises: ["ooh ooh", "ah ah"]};
animals.push(monkey);
var lion = {
    species: "Cat",
    name: "Lola",
    noises: ["meow", "purr"]};
animals.push(lion);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// chose an array because it is ideal when making lists
var friends = [];
//create a function that retrns a random indexof the names of animals 
function getRandom(){
    //choose a random number between 1 and length of the array
    var chooseRandomAnimal = Math.floor(Math.random() * animals.length);
    //return random #
    return chooseRandomAnimal;
}
//push random number inside the array
friends.push(animals[getRandom()].name); 
//add friends array to the key friends of one of the animals in our array
animals[Math.floor(Math.random() * animals.length)].friends = friends;



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}