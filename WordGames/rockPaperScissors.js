const UserInput = process.argv[2]?.toLowerCase();

const InputList = ["rock", "paper", "scissors"];

function getRandomMove() {
  const randomInput = Math.floor(Math.random() * InputList.length);
  return InputList[randomInput];
}

if (!InputList.includes(UserInput)) {
  console.log("\n Invalid move! Please choose rock, paper, or scissors.\n");
  process.exit(1);
}

function Winner(inputs, autoanswer) {
  if (
    (inputs === "rock" && autoanswer === "scissors") ||
    (inputs === "paper" && autoanswer === "rock") ||
    (inputs === "scissors" && autoanswer === "paper")
  ) {
    return "\n Congratulations...You win! :) \n";
  } else if (inputs === autoanswer) {
    return "\n Aww...It's a draw! :| \n";
  } else {
    return "\n Sorry...You lose! :( \n";
  }
}

// Play the game
const RandomMove = getRandomMove();
const result = Winner(UserInput, RandomMove);

console.log(
  `\n You chose ${UserInput}. Autoanswer choose ${RandomMove}. ${result} \n`
);
