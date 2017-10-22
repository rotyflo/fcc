/* Return true if the given string is a palindrome. Otherwise, return false.

   Input: "Race car"
   Output: true
*/

console.log(palindrome("Race car"));

function palindrome(str) {
  var reverseStr = str.split("").reverse().join("");
  var re = /[^a-z0-9]/gi;

  // Ignore case and all non-alphanumeric characters
  str = str.replace(re, "").toLowerCase();
  reverseStr = reverseStr.replace(re, "").toLowerCase();

  if (str === reverseStr) return true;

  return false;
}