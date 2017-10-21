/*  You will be provided with an initial array (the first argument in the
    destroyer function), followed by one or more arguments. Remove all elements
    from the initial array that are of the same value as these arguments.

    Input: [1, 2, 3, 1, 2, 3], 2, 3
    Output: [1, 1]
*/

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function destroyer(arr) {
  var args = arguments;
  
  // Loop through all arguments following the first
  for (let i = 1; i < args.length; i++) {
    // Filter each argument out of the array
    arr = arr.filter(function(val) {
      return val !== args[i];
    });
  }
  
  return arr;
}