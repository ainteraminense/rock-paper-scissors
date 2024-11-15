// CREATE function
function getComputerChoice(){
// GET randomly rock, paper or scissors
let computerChoiceNumber = Math.floor(Math.random() * 3) + 1 ;
return translateNumberToChoice(computerChoiceNumber);
}

// DISPLAY the values generated
//console.log(getComputerChoice());

//CREATE function
function getHumanChoice() {

    //GET the human choice for rock, paper or scissors
    let promptHumanChoice = () => prompt(`Please, select one of the options below:
     rock
     paper
     scissors`);
    let humanChoice = promptHumanChoice().toLowerCase();
    //WHILE the human choice is not one of the options  
    while(humanChoice != "rock"
         && humanChoice != "paper"
         && humanChoice != "scissors") {
            humanChoice = promptHumanChoice().toLowerCase();
         } 
    return humanChoice;
}

//DISPLAY human choice
//console.log(getHumanChoice);

//CREATE variables for human and computer scores
//INIT the variables with 0
let humanScore = 0
let computerScore = 0;

//CREATE function to compare the computer and human choices
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    let winner;
    // CHECK the winner
    if(humanChoice === "rock" ) {
        switch(computerChoice) {
            case "rock":
                break;
            case "paper":
                winner = "computer";
                break;
            case "scissors":
                winner = "human";
                break;
        }
    } else if (humanChoice === "paper") {
        switch(computerChoice) {
            case "rock":
                winner = "human"
                break;
            case "paper":
                break;
            case "scissors":
                winner = "computer";
                break;
    } 
    } else if (humanChoice == "scissors") {
        switch(computerChoice) {
            case "rock":
                winner = "computer"
                break;
            case "paper":
                winner = "human"
                break;
            case "scissors":
                break;
    }
}

    //DISPLAY winner
    // INCREMENT the score
    if (winner == "human") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++; 
    } else if(winner == "computer") {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else {
        console.log(`It's a draw! You both chose ${humanChoice}`);
    }
}

const humanSelection = getHumanChoice();
//console.log("human selection: " + humanSelection);
const computerSelection = getComputerChoice();
//console.log("computer selection: " + computerSelection);


playRound(humanSelection, computerSelection);


//REUSED function
function translateNumberToChoice(number) {
switch (number) {
    case 1:
        return "rock";
        break;
    case 2:
        return "paper";
        break;
    case 3:
        return "scissors"
        break;
    }
}
