/* Repeat a given string (first argument) num times (second argument).

   Input: "abc", 3
   Output: "abcabcabc"
*/

console.log(repeatStringNumTimes("abc", 3));

function repeatStringNumTimes(str, num) {
  var newStr = "";

  while (num > 0) {
    newStr += str;
    num--;
  }

  return newStr;
}