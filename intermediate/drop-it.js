/*  Drop the elements of an array (first argument), starting from the front,
    until the predicate (second argument) returns true. The second argument,
    func, is a function you'll use to test the first elements of the array to
    decide if you should drop it or not. Return the rest of the array, otherwise
    return an empty array.

    Input: [1, 2, 3, 4], function(n) {return n >= 3;}
    Ouput: [3, 4]
*/

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));

function dropElements(arr, func) {
  while (func(arr[0]) === false) {
    arr.shift();
  }
  
  return arr;
}