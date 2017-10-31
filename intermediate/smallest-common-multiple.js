/*  Find the smallest common multiple of the provided parameters that can be
    evenly divided by both, as well as by all sequential numbers in the range
    between these parameters. The range will be an array of two numbers that
    will not necessarily be in numerical order.

    e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is
    evenly divisible by all numbers between 1 and 3.

    Input: [1, 5]
    Output: 60
*/

console.log(smallestCommons([1, 5]));

function smallestCommons(arr) {
  arr = arr[0] < arr[1] ? arr : [arr[1], arr[0]];
  
  let found = false;
  let answer = 0;
  
  while (!found) {
    answer++;

    for (let i = arr[0]; i <= arr[1]; i++) {
      if (answer % i !== 0) break;
      else if (answer % i === 0 && i === arr[1]) found = true;
    }
  }
  
  return answer;
}