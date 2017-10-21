/*  Check if a string (first argument, str) ends with the given target 
    string (second argument, target).
    
    Input: "Bastian", "ian"
    Output: true
*/

console.log(confirmEnding("Bastian", "ian"));

function confirmEnding(str, target) {
  var lastLetter = str.substring(str.length - target.length);

  if (lastLetter === target) return true;

  return false;
}