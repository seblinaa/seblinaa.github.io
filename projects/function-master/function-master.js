//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};

function objectValues(object) {
        return Object.values(object);   
    
} 
objectValues(objectOne)
objectValues(objectTwo)

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};

function keysToString(object) {
    
    object = Object.keys(object);
    return object.join(" ");
}

keysToString(objectOne);
keysToString(objectTwo);
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};
var objectTwo = {c: "three", boolean: false, d: "four", crayons: "ponies", dangle: "dingle"};

function valuesToString(object) {
  object = Object.values(object);
   for (let value of object){
       if(typeof(value) !== "string"){
       object.splice(object.indexOf(value), 1);
       }
   }
   return object.join(' ')
}
valuesToString(objectOne);
valuesToString(objectTwo);

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
       return "array";
    } else return "object";
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    string = string.split(" ");
    for(var i = 0, x = string.length; i < x; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].slice(1,);
    }
    return string.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
  return "Welcome" + " " + capitalizeWord(object.name) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//  QUnit.test("profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'", function(assert){
//       assert.equal(profileInfo({name: "jake", species: "dog"}), "Jake is a Dog");
//       assert.equal(profileInfo({name: "reggie", species: "dog"}), "Reggie is a Dog");
//     });
return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
   if (Array.isArray(object.noises) && object.noises.length > 0) {
        return object.noises.join(" ")
    } else return "there are no noises"
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if (string.search(word) === -1) {
        return false
    } else return true;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
   object.friends.push(name);
   return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
      if (!Array.isArray(object.friends)) {
        return false
    }
    if(object.friends.includes(name)) {
        return true
    } else return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
var newArray = [];

    
}
    


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object["key"]
    if(Object !== key) {
        return Object.key(value)
    }
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var newArr = [];
   function unique(array) {
   }
   return newArr; 
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}