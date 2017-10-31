/*  Compare two arrays and return a new array with any items only found in one
    of the two given arrays, but not both. In other words, return the symmetric
    difference of the two arrays.

    Input: [1, 2, 3, 5], [1, 2, 3, 4, 5]
    Output: [4]
*/

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function diffArray(arr1, arr2) {
  var newArr = [];
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) newArr.push(arr1[i]);
  }
  
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) newArr.push(arr2[i]);
  }
  
  return newArr;
}