/*  Create a function that sums two arguments together. If only one argument is
    provided, then return a function that expects one argument and returns the
    sum. For example, addTogether(2, 3) should return 5, and addTogether(2)
    should return a function. If either argument isn't a valid number, return
    undefined.

    Input: addTogether(2)(3)
    Output: 5
*/

console.log(addTogether(2)(3));

// FEELS SLOPPY, MAYBE REWORK LATER?
function addTogether() {
  let args = arguments;
  
  if (Number.isInteger(args[0]) && Number.isInteger(args[1])) {
    return args[0] + args[1];
  }
  
  if (Number.isInteger(args[0]) && args.length === 1) {
    return function(num) {
      if (Number.isInteger(num)) return args[0] + num;
    };
  }
}