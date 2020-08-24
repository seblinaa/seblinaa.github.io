/*STRING MANIPULATION
*the process of changing, parsing, splicing, pasting, or analyzing strings
*pattern in a string

//Concatenation- process of joining 2 strings together into a single string
*/
var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);

// Splitting- process of breaking down a string into multiple strings using a certain rule (, . “ “)
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





