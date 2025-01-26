let compscore = 0;
let userscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const draw =()=>{
    msg.innerText=`Thats Draw. Play Again`; 
    msg.style.backgroundColor="#081b31";
}
const showWinner = (userWin,userchoice,compchoice) =>
{
    if(userWin)
    {
        userscore++;
        msg.innerText=`Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userScore.innerText=`${userscore}`
    }
    else
    {
        compscore++;
        msg.innerText=`${compchoice} beats your ${userchoice} `;
        msg.style.backgroundColor="red";
        compScore.innerText=`${compscore}`
    }
}
const genCompchoice=()=>{
    let options = ["rock","paper","scissor"];
    let randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const playGame=(userchoice)=>{
    console.log("You:",userchoice);
    let compchoice=genCompchoice();
    console.log("Comp:",compchoice);
    if(userchoice===compchoice)
    {
        draw();
    }
    else
    {
        let userWin= true;
        if(userchoice==="rock")
        {
            userWin=compchoice==="scissor" ? true : false;
        }
        else if(userchoice==="paper")
        {
            userWin=compchoice==="rock" ? true : false;
        }
        else
        {
            userWin=compchoice==="paper" ? true : false;
        }
        showWinner(userWin,userchoice,compchoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");   
        playGame(userchoice);     
    })
});