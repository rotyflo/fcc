/*  Check if a value is classified as a boolean primitive. Return true or false.
    Boolean primitives are true and false.

    Input: true
    Output: true
*/

console.log(booWho(true));

function booWho(bool) {
  bool = JSON.stringify(bool);
  
  return bool === "true" || bool === "false" ? true : false;
}