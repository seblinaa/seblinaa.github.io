
'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-seblinaa');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *      //Make sure youre inside the github .io folder in the terminal 
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // must use the filter function to filer out the male customers 
    // output must be a number 
    return _.filter(array,function(customer){
        //return a condition that results to true or false based on the argument
        // test if the customer obj has gender prop of male
        // don't use a conditional statement in filer 
        // functions calls return one particular value 
        return customer.gender === "male"; 
    }).length // takes the length of whats inside of the function

};

var femaleCount = function(array) {
//call on reduce function
return _.reduce(array, function(customer, array) { 
      if (array.gender === "female") {
              customer++
      }
      return customer;
   }, 0);
}

var oldestCustomer = function(array) {
//create an array of all the customers ages using a for loop
let allAges = [];
for (let i = 0; i < array.length; i++) {allAges.push(array[i].age)};// pushed array of array into all ages 
//use reduce to find the oldest age out of the array
let oldestAge = _.reduce(allAges, function(oldest, currentVal) {
        if (currentVal > oldest) {
          return currentVal;
        } else return oldest
 })
//use another for loop to loop thru array once more
for (let i = 0; i < array.length; i++) {
    if (array[i].age === oldestAge) {
        return array[i].name
    }
}
}
  

var youngestCustomer = function(array) {
//create an array of all the customers ages using a for loop
let allAges = [];
for (let i = 0; i < array.length; i++) {allAges.push(array[i].age)};
//use reduce to find the youngest age out of the array
let youngestAge = _.reduce(allAges, function(youngest, currentVal) {
        if (currentVal < youngest) return currentVal;
        return youngest
 })
//use another for loop to loop thru array once more
for (let i = 0; i < array.length; i++) {
    if (array[i].age === youngestAge) {
        return array[i].name
    }
}
}

// var averageBalance = function(array) {
// //find avgbalance of all customers  //input is array of objects (customers)  //outut is a single number 
// //create an array of all the customer balances using a for loop
// let allBals = [];
// for (let i = 0; i < array.length; i++) { allBals.push(Number(array[i].balance))};
// //use reduce to multiply all the balances together and get a single sum
// // Number inside 
// let multAllBal = _.reduce(allBals, function(mult, currentVal) {
//     return mult * currentVal
// })
// //return multAllBal divided by the length of the array
// return Number(multAllBal / array.length);
// }
var averageBalance = function(array) {
//find avgbalance of all customers  //input is array of objects (customers)  //outut is a single number 
//create an array of all the customer balances using a for loop
let allBals = [];
for (let i = 0; i < array.length; i++) {
    // loop through the array and get the average balance and remove the characters because it prevents 
    // the numbers function from turning into a number 
    allBals.push(Number(array[i].balance.replace(/[$,]+/g,"")) 
    )}; //console.log(allBals)
//use reduce to add all the balances together and get a single sum
// Number inside 

let multAllBal = _.reduce(allBals, function(mult, currentVal) {
    return mult + currentVal
})

//console.log(multAllBal)
//return multAllBal divided by the length of the array
return multAllBal / array.length;


}




var firstLetterCount = function(array,  letter){
  // find how many customers begin with a given letter
  // create an variable to lowercase letter
  let char = letter.toLowerCase()
   
  // use the filter function to return the values in the array to lowercase 
  // alse use the filter function to compare if the letters match the first letter in array 
  
  let customer = _.filter(array,function(value){
      return value.name.charAt(0).toLocaleLowerCase() === char
   
}) 
// return the length of array 
return customer.length;

}


    
var friendFirstLetterCount = function(array, customer, letter){
    let char = letter.toLowerCase()
     //console.log(customer)
     // use filter array to compare name and custome name 
     let result = _.filter(array,function(x){
         return x.name.toLowerCase() === customer.toLowerCase()
     })
     
     // pass the results from first filter function into second filter functionto see if name is equal to letter 
     let friends = _.filter(result[0].friends,function(value){
      return value.name.charAt(0).toLocaleLowerCase() === char
     })
     
     //console.log(customer)
     // return length of friends in array 
     return friends.length; 
     
};

var friendsCount = function(array, pal){
//create a new array to hold final result
    let namesFriends = [];
//let the const friends be equal to the function pluck
//use pluck to grab all friends properties from array 
    const friends = _.pluck(array, "friends");
    for(let i = 0; i < friends.length; i++){
//use a for in loop to see if a friends name is equal to pal
        for(let key in friends[i]){
            if(friends[i][key].name === pal){
//if friends name is equal to seach, push the name of the customer who had pal in their friends list 
                namesFriends.push(array[i].name);
            }
        }
    }
    return namesFriends;
};

var topThreeTags = function(array) {
//create a new array 
 let tagArray = [];
    // loop through the input array
    for (let i = 0; i < array.length; i++) {
        // concatenate the tags array from each object in the input array and assign the result to the tagArray variable
        tagArray = tagArray.concat(array[i].tags);
    }
//use reduce to create an object of properties consisting of a tally of how often each tag is used
//for example {tag1: 4}
let tagCount = _.reduce(tagArray, function(tagObj, tag){
    if (tagObj[tag]) {
        tagObj[tag]++;
    } else {
        tagObj[tag] = 1;
    }
    return tagObj;
}, {});
//declare an empty array 
let countsArray = [];
//use a for in loop to push the key value pairs from tagCount into countsArray
for (let key in tagCount) {
    countsArray.push([key, tagCount[key]]);
}
//use sort to arrange the values in countsArray in descending order
countsArray.sort(function(a, b){
    return b[1] - a[1];
});
//use slice to get the first three values (aka the top three tag)
let topThreeArray = countsArray.slice(0, 3);
//use map to get the key value for the top three 
let topThreeWords = _.map(topThreeArray, function(arr){
    return arr[0];
});
  return topThreeWords;  
};

var genderCount = function(array) {
//expected output is an object consisting of a tally of genders //must use _.reduce
//create a new array and set it equal to the pluck function 
//use pluck to add all gender properties to this array
let genderArray = _.pluck(array, 'gender');
//use reduce to take a tally of everyone's gender 
//for example {male: 1}
let genderCount = _.reduce(genderArray, function(accumulator, currentgender) {
    if (accumulator[currentgender]) {
        accumulator[currentgender]++;
    } else {
        accumulator[currentgender] = 1;
    }
    return accumulator;
}, {});
return genderCount;
}
