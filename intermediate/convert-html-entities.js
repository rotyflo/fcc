/*  Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a
    string to their corresponding HTML entities.

    Input: "Dolce & Gabbana"
    Output: "Dolce &​amp; Gabbana"
*/

console.log(convertHTML("Dolce & Gabbana"));

function convertHTML(str) {
  let answer = "";
  let entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  
  for (let i = 0; i < str.length; i++) {
    if (entities.hasOwnProperty(str[i])) answer += entities[str[i]];
    else answer += str[i];
  }

  return answer;
}