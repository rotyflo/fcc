/*  Make a function that looks through an array of objects (first argument) and
    returns an array of all objects that have matching property and value pairs
    (second argument). Each property and value pair of the source object has to
    be present in the object from the collection if it is to be included in the
    returned array.

    Input: { "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }
    Ouput: [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
*/

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let keys = Object.keys(source);
  
  for (let i = 0; i < collection.length; i++) {
    let keyValMatch = 0;
    
    for (let j = 0; j < keys.length; j++) {
      if (collection[i][keys[j]] === source[keys[j]]) keyValMatch++;
      // IF ALL KEY-VAL PAIRS MATCH
      if (keyValMatch === keys.length) {
        arr.push(collection[i]); 
      }
    }
  }
  // Only change code above this line
  return arr;
}