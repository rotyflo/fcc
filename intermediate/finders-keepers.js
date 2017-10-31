/*  Create a function that looks through an array (first argument) and returns
    the first element in the array that passes a truth test (second argument).
    
    Input: [1, 2, 3, 4], function(num){ return num % 2 === 0; }
    Output: 2
*/

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return arr[i];
  }
}