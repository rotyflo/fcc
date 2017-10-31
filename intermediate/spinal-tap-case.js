/*  Convert a string to spinal case. Spinal case is
    all-lowercase-words-joined-by-dashes.

    Input: "Teletubbies say Eh-oh"
    Output: "teletubbies-say-eh-oh"
*/

console.log(spinalCase("Teletubbies say Eh-oh"));

// LEARN MORE ABOUT REGEX AND COMEUP WITH A SHORTER SOLUTION
function spinalCase(str) {
  let answer = [];
  
  // DIVIDE WORDS
  for (let i = 0, word = ""; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      answer.push(word);
      word = str[i];
    } else word += str[i];
    
    if (i === str.length - 1) answer.push(word);
  }
  
  let cleanAnswer = [];
  
  // REMOVE SPACES, DASHES AND UNDERSCORES. SET ALL CHARS TO LOWERCASE
  answer.forEach(function(word) {
    cleanAnswer.push(word.replace(/( |-|_)/gi, "").toLowerCase());
  });
  
  // REMOVE EMPTY STRINGS
  cleanAnswer = cleanAnswer.filter(function(word) {
    return word;
  });
  
  return cleanAnswer.join("-");
}