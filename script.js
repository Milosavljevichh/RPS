
function getPlayerChoice (value) {
    let cChoice = getComputerChoice();
    let playerChoice = value;
    declareWinner(playerChoice, cChoice)
}


function getComputerChoice () {

    let choice = Math.random()
    choice = Number(choice.toFixed(2))

    let decision = ""
    
    if ( 2/3 <= choice && choice <= 1) {
        decision = "Rock"
        return decision
    } else if (1/3 <= choice && choice <= 2/3) {
        decision = "Paper"
        return decision
    } else {
        decision = "Scissors"
        return decision
    }


}

function declareWinner (playerChoice, decision){
    // Player chose Rock
    if (playerChoice === "Rock") {

            if (decision === "Rock") {
                console.log("It's a tie!")
            } else if ( decision === "Paper") {
                console.log("You lost!") 
            } else {
                console.log("You've won!")
            }

    //Paper choice
    } else if (playerChoice === "Paper") {
            if (decision === "Paper") {
                console.log("It's a tie!")
            } else if ( decision === "Scissors") {
                console.log("You lost!") 
            } else {
                console.log("You've won!")
            }
            
    //Scissors
    } else {
        if (decision === "Scissors") {
            console.log("It's a tie!")
        } else if ( decision === "Rock") {
            console.log("You lost!") 
        } else {
            console.log("You've won!")
        }
    }
}
