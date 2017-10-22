/*  Return the lowest index at which a value (second argument) should be
    inserted into an array (first argument) once it has been sorted. The
    returned value should be a number.

    Input: [40, 60], 50
    Output: 1
*/

console.log(getIndexToIns([40, 60], 50));

function getIndexToIns(arr, num) {
  var index = 0;
  
  arr.sort(function(a, b) {
    return a - b;
  });
  
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) index++;
  }
  
  return index;
}