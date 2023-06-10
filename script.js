
let wins = 0
let loses = 0

function getPlayerChoice (value) {
    let cChoice = getComputerChoice();
    let playerChoice = value;
    declareWinner(playerChoice, cChoice);
    setCounter();
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



function setCounter () {
    let wCounter = document.getElementById("wins")
    let lCounter = document.getElementById("defeats")
    lCounter.innerText = loses;
    wCounter.innerText = wins;

}



function declareWinner (playerChoice, decision){
    let elem = document.getElementById("result")

    
    // Player chose Rock
    if (playerChoice === "Rock") {

            if (decision === "Rock") {
                console.log("It's a tie!")
                elem.innerText = "It's a tie!"
            } else if ( decision === "Paper") {
                console.log("You lost!") 
                elem.innerText = "You lost!"
                loses++
            } else {
                console.log("You've won!")
                elem.innerText = "You've won!"     
                wins++ 
            }

    //Paper choice
    } else if (playerChoice === "Paper") {
            if (decision === "Paper") {
                console.log("It's a tie!")
                elem.innerText = "It's a tie!"
            } else if ( decision === "Scissors") {
                console.log("You lost!")
                elem.innerText ="You lost!"
                loses++
            } else {
                console.log("You've won!")
                elem.innerText = "You've won!"
                wins++ 
            }

    //Scissors
    } else {
        if (decision === "Scissors") {
            console.log("It's a tie!")
            elem.innerText = "It's a tie!"
        } else if ( decision === "Rock") {
            console.log("You lost!")
            elem.innerText = "You lost!" 
            loses++
        } else {
            console.log("You've won!")
            elem.innerText = "You've won!"
            wins++ 
        }
    }
}
