/*  Write a function which takes a ROT13 encoded string as input and returns a
    decoded string. All letters will be uppercase. Do not transform any
    non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

    Input: "SERR PBQR PNZC"
    Output: "FREE CODE CAMP"

    Try these:
    "SERR CVMMN!"
    "SERR YBIR?"
    "GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK." 
*/

console.log(rot13("SERR PBQR PNZC"));

function rot13(str) {
  var decoded = "";
  
  for (let i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    
    if (charCode >= 65 && charCode <= 90) {
      if (charCode >= 78) decoded += String.fromCharCode(charCode - 13);
      else decoded += String.fromCharCode(charCode + 13);
    }
    else decoded += str[i];
  }
  
  return decoded;
}