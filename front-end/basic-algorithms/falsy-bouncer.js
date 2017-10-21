/*  Remove all falsy values from an array.

    Input: [7, "ate", "", false, 9]
    Output: [7, "ate", 9]
*/

console.log(bouncer([7, "ate", "", false, 9]));

function bouncer(arr) {
  return arr.filter(function(val) {
    return val;
  });
}