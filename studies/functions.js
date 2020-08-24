/*FUNCTIONS
*1. Blocks of code that accept and process inputs and return new data value
*2. Predefined commands to perform an action
*3. Performs actions, perform calculations
*
*Function Declaration vs Function Expression
*1. Function declarations load before any code is executed  
*2. Function expressions load only when the interpreter reaches that line of code 
*3. Similar to the var statement, function declarations are hoisted to the top of other code
*
*function name(parameter) {
*<function body>
*<function body>
*return statement
*/ 
function add(num1, num2){
    return num1 + num2;
}
/*Function Expression:
*
*1. Inputs: datatype that is being passed into this function
*2. Outputs: what the function should return function
*3. Constraints: any specifics in the instructions that involve how to build function
*4. Edge cases: conditions that need to be meet to make sure of the proper output
*
*There are 4 parts to a function declaration
*1. Name
*2. Parameter(s) - optional, not mandatory, placeholders for data coming into the function 
*3. Function body (where the code runs)
*4. Return statement- stops the execution process so that it can return value 
*
*Call the function
-passes control and arguments (if any) to a function
*/