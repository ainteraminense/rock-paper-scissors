// CREATE function
function getComputerChoice(){
// GET randomly rock, paper or scissors
let computerChoiceNumber = Math.random() * 3;
switch (Math.floor(computerChoiceNumber) + 1) {
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
// DISPLAY the values generated
console.log(getComputerChoice());