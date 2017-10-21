/* Return an array consisting of the largest number from each provided sub-array.

   Input: [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
   Output: [5, 27, 39, 1001]
*/

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

function largestOfFour(arr) {
  var arrOfLargest = [];

  for (let i = 0; i < arr.length; i++) {
    var largest = 0;

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest) largest = arr[i][j];
    }

    arrOfLargest.push(largest);
  }

  return arrOfLargest;
}