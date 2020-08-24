/* LOOPS
*Allows programmer to repeat a sequence of codes multiple times
*1. For loops, uses 3 statements:
*Start: tells loop where to begin, starts counting at 0
*     var- counts the number of repetitions that have been executed
*Stop:tells loop where to stop, repeats while true,loops stops repeating when condition becomes false
*		Update- decides the increments for the loop
*		Iterate over values in an array
*For loop is used where we already know about the number of times loop needs to be excuted. 
*/
for (var i = 0; i < 5; i++) {
console.log('Hello!');
}
/*2. For in Loops
*iterate over an object - will give you the value to each key in the object
*Iterate over index values
*/
var object = {};
for (var key in object ) {
    console.log(key);
    console.log(object[key])
}
console.log(object[key]);
/*3. While Loops
*while loop is used to repeat a section of code an unknown number of times until a specific condition is met
*/
var count = 0;
while(count < 5){
console.log(count);
count++;
}
/*4. For of
*	Loops through an array, for let and const
*   loops through the values of an iterable objects. 
*   lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
*/
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element);
}