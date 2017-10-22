/*  Write a function that splits an array (first argument) into groups the
    length of size (second argument) and returns them as a two-dimensional 
    array.
    
    Input: ["a", "b", "c", "d"], 2
    Output: [["a", "b"], ["c", "d"]]
*/

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

function chunkArrayInGroups(arr, size) {
  var newArr = [];

  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }

  return newArr;
}