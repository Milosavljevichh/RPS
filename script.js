
let wins = 0
let loses = 0


function reset() {
    let elem = document.getElementById("result")

    if (wins === 5) {
    wins = 0;
    loses = 0;
    alert('You won!')
    resetBorder()
    elem.innerText = "Ready to play again?"
} else if (loses === 5) {
    alert('You lost!')
    wins = 0;
    loses = 0;
    resetBorder()
    elem.innerText = "Ready to play again?"
    }
}


function getPlayerChoice (value) {
    resetBorder()
    let cChoice = getComputerChoice();
    let playerChoice = value;
    declareWinner(playerChoice, cChoice);
    setCounter();
}

function resetBorder() {
    let rightImg = document.getElementById("right")
    let leftImg = document.getElementById("left")
    let middleImg = document.getElementById("middle")

    if (rightImg.className || leftImg.className || middleImg.className === "glow-img") {
        rightImg.classList.remove("glow-img")
        leftImg.classList.remove("glow-img")
        middleImg.classList.remove("glow-img")
    }
}

function getComputerChoice () {

    let rightImg = document.getElementById("right")
    let leftImg = document.getElementById("left")
    let middleImg = document.getElementById("middle")

    let choice = Math.random()
    choice = Number(choice.toFixed(2))

    let decision = ""
    
    if ( 2/3 <= choice && choice <= 1) {
        decision = "Rock"
        leftImg.className = "glow-img"
        return decision
    } else if (1/3 <= choice && choice <= 2/3) {
        decision = "Paper"
        middleImg.className = "glow-img"
        return decision
    } else {
        decision = "Scissors"
        rightImg.className = "glow-img"
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
                reset()
            } else {
                elem.innerText = "You've won!"     
                wins++ 
                reset()
            }
            
            //Paper choice
        } else if (playerChoice === "Paper") {
            if (decision === "Paper") {
                elem.innerText = "It's a tie!"
            } else if ( decision === "Scissors") {
                elem.innerText ="You lost!"
                loses++
                reset()
            } else {
                elem.innerText = "You've won!"
                wins++ 
                reset()
            }
            
            //Scissors
        } else {
            if (decision === "Scissors") {
                elem.innerText = "It's a tie!"
            } else if ( decision === "Rock") {
                elem.innerText = "You lost!" 
                loses++
                reset()
            } else {
                elem.innerText = "You've won!"
                wins++ 
                reset()
        }
    }
}

