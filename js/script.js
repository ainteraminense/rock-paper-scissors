// CREATE function
function getComputerChoice(){
// GET randomly rock, paper or scissors
let computerChoiceNumber = Math.floor(Math.random() * 3) + 1 ;
return translateNumberToChoice(computerChoiceNumber);
}

// DISPLAY the values generated
console.log(getComputerChoice());

//CREATE function
function getHumanChoice() {

    //GET the human choice for rock, paper or scissors
    let promptChoiceNumber = () => prompt(`Please, select one of the options below:
     1: rock
     2: paper
     3: scissors`);
    let humanChoiceNumber = promptChoiceNumber();
    //WHILE the human choice is not one of the options  
    while(humanChoiceNumber != 1
         && humanChoiceNumber != 2
         && humanChoiceNumber != 3) {
            humanChoiceNumber = promptChoiceNumber();
         } 
    return translateNumberToChoice(Number(humanChoiceNumber));
}

//DISPLAY human choice
console.log(getHumanChoice());

//CREATE variables for human and computer scores
//INIT the variables with 0
let humanScore = 0
let computerScore = 0;


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
