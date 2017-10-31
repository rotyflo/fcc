/*  Translate the provided string to pig latin. Pig Latin takes the first
    consonant (or consonant cluster) of an English word, moves it to the end of
    the word and suffixes an "ay". If a word begins with a vowel you just add
    "way" to the end. Input strings are guaranteed to be English words in all
    lowercase.

    Input: "glove"
    Output: "oveglay"
*/

console.log(translatePigLatin("glove"));

function translatePigLatin(str) {
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'y':
        if (i === 0) return str + "way";
        else return str.slice(i) + str.slice(0, i) + "ay";
    }
  }
}