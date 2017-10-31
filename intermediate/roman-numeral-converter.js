/*  Convert the given number into a roman numeral. All roman numerals answers
    should be provided in upper-case.

    Input: 2017
    Output: "MMXVII"
*/

console.log(convertToRoman(2017));

function convertToRoman(num) {
  const ones = [1, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const tens = [10, "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const huns = [100, "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const thos = [1000, "M", "MM", "MMM", "MV", "V", "VM", "VMM", "VMMM", "MX"];
  let romanNum = "";
  
  convert(thos);
  convert(huns);
  convert(tens);
  convert(ones);
  
  function convert(place) {
    let val = place[0];
    
    for (let i = place.length - 1; i > 0; i--) {
      if (i * val <= num) {
        romanNum += place[i];
        num -= i * val;
      }
    }
  }
  
  return romanNum;
}