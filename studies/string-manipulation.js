/*STRING MANIPULATION
*the process of changing, parsing, splicing, pasting, or analyzing strings
*pattern in a string
//Concatenation- process of joining 2 strings together into a single string
*/
var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);
// Splitting- process of breaking down a string into multiple strings using a certain rule (, . " ")
var str = "How are you doing today?";
var res = str.split(" ");
//Substring- extracting a portion of a string from a bigger string
const strg = 'Mozilla';
console.log(strg.substring(1, 3));
// expected output: "oz"
console.log(strg.substring(2));
// expected output: "zilla"
//Case conversation- converting a string into a specific case, lowercase, uppercase, titlecase
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."
const sentences = 'The quick brown fox jumps over the lazy dog.';
console.log(sentences.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
//Searching- process of searching for a specific p
var str = "Visit W3Schools!";
var n = str.search("W3Schools");

/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */
// 1. declaration //
var myName;
/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined
// 2. initialization or assignment //
myName = 'Seble';
console.log(myName); // prints => Seble
// 3. re-assignment //
myName = 'Wongel';
console.log(myName); // prints => Wongel
// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";