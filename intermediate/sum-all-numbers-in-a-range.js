/*  We'll pass you an array of two numbers. Return the sum of those two numbers
    and all numbers between them. The lowest number will not always come first.

    Input: [1, 4]
    Output: 10
*/

console.log(sumAll([1, 4]));

function sumAll(arr) {
  let answer = 0;
  
  // SORT LEAST TO GREATEST
  if (arr[0] > arr[1]) arr = [arr[1], arr[0]];
  
  // ADD EVERY NUM FROM arr[0] TO arr[1]
  for (let i = arr[0]; i <= arr[1]; i++) {
    answer += i;
  }
  
  return answer;
}