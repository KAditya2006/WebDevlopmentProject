
let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}

const drawGame = () => {
    console.log("game was draw.");
    result.innerText = "Game was draw! Play again."
    result.style.backgroundColor = "#081b31";
}
const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        result.innerText = "User win the game!"
        result.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("computer win");
        result.innerText = "Computer win the game!"
        result.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    console.log("user choice = ",userchoice);
    const computerChoice = genComputerChoice();
    console.log("computer choice = ", computerChoice);

    if (userchoice === computerChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userchoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userchoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        }
        else{
            userWin = computerChoce === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});