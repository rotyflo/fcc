/*  Check if the predicate (second argument) is truthy on all elements of a
    collection (first argument).

    Input: [{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"
    Output: false
*/

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

function truthCheck(collection, pre) {
  let falsy = [0, null, undefined, ""];
  let answer = true;
  
  for (let i = 0; i < collection.length; i++) {
    let obj = collection[i];
    let val = obj[pre];
    
    // NON-EXISTANT, FALSY, NaN
    if (!val || falsy.indexOf(val) !== -1 || val !== val) answer = false;
  }
  
  return answer;
}