 /* DATA TYPES
*Simple data types
*1. Strings
*-English words inside " "
*-can be combined by using plus sign
*-check length with .length property
*-can access individual characters using bracket notation
*/ 
var myName = "Seble"; // "Seble" -> string
/* 2. Numbers 
*-positive, negative, decimal points
1, -1, 1.5
*/
var myAge = 29; // 29 -> number
/*3. Booleans
*-value based on true or false
*-like using on and off switches
*-Null
*-undefined
*/
var blueSky = true; // -> boolean
/*Complex data types -hold many values
*1. Arrays
*   used for lists
*	used to store similar data types
*   find the value in an array with index- numbers that specifies a position in array 
*	access data in array with bracket notation
*	similar to objects in that the "key" would be a numerical value (index)
*   Add values to an array using 
*       .length (tells you numbers of values)
*       .push (adds to end)
*       .unshift (adds to beginning) 
*       .shift (removes from the beginning) 
*       .pop(removes from the end) 
*       .join (turns array into a string)
*/
var array = [];
var hobbies = ["traveling", "reading", "hiking"];
/*2. Objects
*   collect data in pairs (key:value) called properties
*	keys = strings
*	access and change values using dot notation or bracket notation
*	can store other collections- other objects or arrays
*/
var object = {};
var myself = {
    name: "Seble",
    age: 29,
    city: "Chicago"
}