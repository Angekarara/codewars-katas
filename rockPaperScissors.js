const rps = (p1, p2) => {
  if (
    (p1 == "scissors" && p2 == "paper") ||
    (p1 == "rock" && p2 == "scissors") ||
    (p1 == "paper" && p2 == "rock")
  ) {
    return "Player 1 won!";
  } else if (
    (p1 == "scissors" && p2 == "rock") ||
    (p1 == "paper" && p2 == "scissors") ||
    (p1 == "rock" && p2 == "paper")
  ) {
    return "Player 2 won!";
  }
  return "Draw!";
};
console.log(rps("scissors", "paper"));
console.log(rps("scissors", "rock"));
console.log(rps("rock", "paper"));
console.log(rps("paper", "rock"));
console.log(rps("scissors", "scissors"));
