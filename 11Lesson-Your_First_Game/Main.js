// LESSON 11: YOUR FIRST INTERACTIVE GAME

let playGame = confirm("Shall we play rock, paper, or scissors?");

if (playGame){
  //play
  let playerChoice = prompt("Please enter rock, paper, or scissors.");
  if (playerChoice){
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
      let computerChoice = Math.floor(Math.random()*3 + 1);
      let computer = computerChoice === 1 ? "rock"
        : computerChoice === 2 ? "paper"
        : "scissors";
      
        let result = playerOne === computer ? "Tie Game!" 
        : playerOne === "rock" && computer === "paper" ? `Computer Wins!\nPlayer choice: ${playerOne}\nComputer choice: ${computer}`
        : playerOne === "paper" && computer === "scissors" ? `Computer Wins!\nPlayer choice: ${playerOne}\nComputer choice: ${computer}`
        : playerOne === "scissors" && computer === "rock" ? `Computer Wins!\nPlayer choice: ${playerOne}\nComputer choice: ${computer}`
        : `Player Wins!\nPlayer choice: ${playerOne}\nComputer choice: ${computer}`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing")
    } else {
      alert("You didn't enter rock , paper, or scissors.");
    }

  }else{
    alert("I guess you changed you mind. Maybe next time.");
  }

} else {
  alert ("Ok, maybe next time.");
}