/*  Return an English translated sentence of the passed binary string. The
    binary string will be space separated.

    Input: "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
    Output: "Aren't bonfires fun!?"
*/

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

function binaryAgent(str) {
  let converter = [128, 64, 32, 16, 8, 4, 2, 1];
  let arrOfBytes = str.split(" ");
  let message = "";
  
  for (let i = 0; i < arrOfBytes.length; i++) {
    let byte = arrOfBytes[i];
    let charCode = 0;
    
    for (let j = 0; j < byte.length; j++) {
      let bit = byte[j];
      
      if (bit === "1") charCode += converter[j];
    }
    
    message += String.fromCharCode(charCode);
  }
  
  return message;
}