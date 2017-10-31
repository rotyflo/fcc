/*  Find the missing letter in the passed letter range and return it. If all
    letters are present in the range, return undefined.

    Input: "abce"
    Output: "d"
*/

console.log(fearNotLetter("abce"));

function fearNotLetter(str) {
  let correctCharCode = str.charCodeAt(0);
  
  for (let i = 0; i < str.length; i++) {
    if (correctCharCode !== str.charCodeAt(i)) return String.fromCharCode(correctCharCode);
    correctCharCode++;
  }
}