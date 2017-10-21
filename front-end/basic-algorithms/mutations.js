/*  Return true if the string in the first element of the array contains all
    of the letters of the string in the second element of the array.

    Input: ["hello", "hey"]
    Output: false
*/

console.log(mutation(["hello", "hey"]));

function mutation(arr) {
  var content = arr[0].toLowerCase();
  var search = arr[1].toLowerCase();
  
  for (let i = 0; i < search.length; i++) {
    if (content.indexOf(search[i]) === -1) return false;
  }
  
  return true;
}