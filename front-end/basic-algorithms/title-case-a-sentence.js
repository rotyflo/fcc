/* Return the provided string with the first letter of each word capitalized.

   Input: "I'm a little tea pot"
   Output: "I'm A Little Tea Pot"
*/

console.log(titleCase("I'm a little tea pot"));

function titleCase(str) {
  var words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}