// Get the phrase and shift number from command-line arguments
const inputPhrase = process.argv[2]?.toLowerCase();
const shiftAmount = parseInt(process.argv[3]);

// Validate inputs
if (!inputPhrase || isNaN(shiftAmount)) {
  console.log('Usage: node caesarCipher.js "your phrase" shiftNumber');
  process.exit(1);
}

// Function to shift a character
function shiftChar(char, shift) {
  const alphabetStart = "a".charCodeAt(0);
  const alphabetEnd = "z".charCodeAt(0);
  const charCode = char.charCodeAt(0);

  if (charCode >= alphabetStart && charCode <= alphabetEnd) {
    let shifted = (((charCode - alphabetStart + shift) % 26) + 26) % 26;
    return String.fromCharCode(alphabetStart + shifted);
  }
  return char; // Non-alphabet characters stay the same
}

// Encrypt the input phrase
function caesarCipher(phrase, shift) {
  return phrase
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}

const encryptedText = caesarCipher(inputPhrase, shiftAmount);
console.log(`Encrypted Text: ${encryptedText}`);
