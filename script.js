let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


// to show Winner
const showWinner =(userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lost!";
        msg.style.backgroundColor = "red";
    }
}

// to get computer choice
const getCompChoice =() =>{
    const options = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random()*3);
    return options[randomNumber];
}



// for computer choice
const compChoice = (userChoice)=> {

    // to generate computer choice
    const compChoice = getCompChoice();



    //condition if game is draw
    if(userChoice === compChoice){
        drawGame();
    }

    // if userChoice is rock and compchoice is paper then user will win 
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors , paper ?
            userWin = compChoice ==="paper" ? false : true;
        }

        // if userChoice is paper and compchoice is scissor then user will lost 
        else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false  : true;
        }

        // if user will take scissor or comp have rock user will lost if paper user will lost
        else {
             userWin = compChoice === "rock" ? false : true;

        }

        showWinner(userWin);
    }

}


// for user choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked", userChoice);
        compChoice(userChoice);
    })
})


// when game was draw
const drawGame = () =>{
    msg.innerText = "Game draw! Play again";
    msg.style.backgroundColor = "greenrgb(203, 211, 89)";
}
