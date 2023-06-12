
let wins = 0
let loses = 0


function getPlayerChoice (value) {
    let cChoice = getComputerChoice();
    let playerChoice = value;
    changeLeftImg(playerChoice)
    declareWinner(playerChoice, cChoice);
    setCounter();
}

function changeLeftImg (choice) {

    let leftImg = document.getElementById("left")

    if (choice === "Rock") {
        leftImg.src = "images/stone.png"
    } else if (choice === "Paper") {
        leftImg.src = "images/paper.png"
    } else if (choice === "Scissors") {
        leftImg.src = "images/scissors.png"
    }
}


function getComputerChoice () {

    let rightImg = document.getElementById("right")

    let choice = Math.random()
    choice = Number(choice.toFixed(2))

    let decision = ""
    
    if ( 2/3 <= choice && choice <= 1) {
        decision = "Rock"
        rightImg.src = "images/stone.png"
        return decision
    } else if (1/3 <= choice && choice <= 2/3) {
        decision = "Paper"
        rightImg.src = "images/paper.png"
        return decision
    } else {
        decision = "Scissors"
        rightImg.src = "images/scissors.png"
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
                elem.innerText = "It's a tie!"
            } else if ( decision === "Paper") {
                elem.innerText = "You lost!"
                loses++
            } else {
                elem.innerText = "You've won!"     
                wins++ 
            }

    //Paper choice
    } else if (playerChoice === "Paper") {
            if (decision === "Paper") {
                elem.innerText = "It's a tie!"
            } else if ( decision === "Scissors") {
                elem.innerText ="You lost!"
                loses++
            } else {
                elem.innerText = "You've won!"
                wins++ 
            }

    //Scissors
    } else {
        if (decision === "Scissors") {
            elem.innerText = "It's a tie!"
        } else if ( decision === "Rock") {
            elem.innerText = "You lost!" 
            loses++
        } else {
            elem.innerText = "You've won!"
            wins++ 
        }
    }
}
