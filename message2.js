const friend = "BRUTUS";
const shiftValue = 3;

const alphabet = "abcdefghijklmnopqrstuvwxyz";

let encryptedName = "";

for (let i = 0; i < friend.length; i++) {
  let letter = friend[i].toLowerCase();
  
  let index = alphabet.indexOf(letter);
  
  let newIndex = index + shiftValue;
  
  if (newIndex >= alphabet.length) {
    newIndex = newIndex - alphabet.length;
  }
  
  let newLetter = alphabet[newIndex];
  
  encryptedName = encryptedName + newLetter.toUpperCase();
}

console.log(encryptedName); // EUXWXV