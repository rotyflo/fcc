/* Reverse the provided string.

	 Input: "hello"
	 Output: "olleh"
*/

console.log(reverseString("hello"));

function reverseString(str) {
	return str.split("").reverse().join("");
}