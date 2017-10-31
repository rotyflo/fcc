/*  Flatten a nested array. You must account for varying levels of nesting.

    Input: [1, [], [3, [[4]]]]
    Output: [1, 3, 4]
*/

console.log(steamrollArray([1, [], [3, [[4]]]]));

function steamrollArray(arr) {
  let flatArr = `[${JSON.stringify(arr).replace(/\[|\]/gi, "").replace(/,,/gi, ",")}]`;
  
  return JSON.parse(flatArr);
}