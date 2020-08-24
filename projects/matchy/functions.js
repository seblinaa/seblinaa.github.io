/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//implement a function called search that takes 2 parameters
function search(animalArray, string){
    //iterate over all element index positions in the array
    for (let i = 0; i < animalArray.length; i++){
    //check to see if name property of each aimal object in animals array matches
        if (string === animalArray[i].name){
        //if it matches, return the matching animal
            return animalArray[i];
    
    }
}
//if animal does not match, return null
return null;
}
//


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    //iterate over animals array
    for( let i = 0; i< animals.length; i++){
        //if that name exists replace entire object
        if (name === animals[i].name){
           animals[i] = replacement; 
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    //iterate over array
    for(let i = 0; i < animals.length; i++){
        //if it matches, remove animal
        if (name === animals[i].name){
            animals.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    if(animal["name"].length > 0 && animal["species"].length >0){
        //loop through the animals array
        for(let i = 0; i < animals.length; i++){
            //if animal inside animals array mathches animal object
            if (animals[i].name === animal.name){
                return false;
            }else{
                //if animal has unique name, push animal into animals array
                animals.push(animal);
                        
            }
            
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
