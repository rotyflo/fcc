/* Return the length of the longest word in the provided sentence.

   Input: "The quick brown fox jumped over the lazy dog"
   Output: 6
*/

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

function findLongestWord(str) {
  var words = str.split(" ");

  for (var i = 0, longestLength = 0; i < words.length; i++) {
    var currentLength = words[i].length;

    if (currentLength > longestLength) longestLength = currentLength;
  }

  return longestLength;
}