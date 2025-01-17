// Get the phrase and shift number from command-line arguments
const inputPhrase = process.argv[2]?.toLowerCase();
const shiftAmount = parseInt(process.argv[3]);

// Validate inputs
if (!inputPhrase || isNaN(shiftAmount)) {
  console.log('Usage: node caesarCipher.js "your phrase" shiftNumber');
  process.exit(1);
}

// Function to shift a character
