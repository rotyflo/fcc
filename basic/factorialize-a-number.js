/* Return the factorial of the provided integer.

   Input: 5
   Output: 120
*/

console.log(factorialize(5));

function factorialize(num) {
  var answer = 1;

  while (num > 1) {
    answer *= num;
    num--;
  }

  return answer;
}