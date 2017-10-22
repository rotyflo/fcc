/*  Return the remaining elements of an array after chopping off n elements
    from the head. The head means the beginning of the array, or the zeroth
    index.

    Input: [1, 2, 3], 2
    Output: [3]
*/

console.log(slasher([1, 2, 3], 2));

function slasher(arr, howMany) {
  return arr.slice(howMany);
}