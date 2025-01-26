let boxes=document.querySelectorAll(".btn");
let reset= document.querySelector("#reset-btn");
let declare=document.querySelector(".declare");
declare.classList.remove("declare");
let turnO=true;
let count=0;

const reset_game=()=>
{
    for (const box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
    boxes.forEach((box)=>{
        box.classList.remove("O");
        box.classList.remove("X");
        box.classList.add("btn");
    });
    declare.classList.remove("declare");
    document.querySelector("h1").innerHTML="Tic Tac Toe";
    count=0;
}
reset_game();

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turnO)
        {
            box.innerText="O";
            
            box.classList.add("O");
            turnO=false;
        }
        else
        {
            box.innerText="X";
            box.classList.add("X");
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const checkwinner = () =>
{
    const win_pattern=[[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,4,6],[3,4,5],[2,5,8],[6,7,8]];
    for (pattern of win_pattern) {
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        if(posval1!=''&& posval2!='' &&posval3!='')
        {
            if(posval1===posval2 && posval2===posval3)
            {
                for (const box of boxes) {
                    box.disabled=true;
                }
                show_winner(posval1);
            }
            else if(count===9)
            {
                document.querySelector("h1").innerHTML="Draw";
            }
        }
    }
}
const show_winner=(winner)=>
{
    declare.classList.add("declare");
    document.querySelector("h1").innerHTML=`Winner: ${winner}`;
}

reset.addEventListener("click",reset_game);
