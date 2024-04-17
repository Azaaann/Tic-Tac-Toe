let boxes = document.querySelectorAll('.box');
let reset = document.getElementById("reset-btn");

let turn = true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) =>{
    box.addEventListener('click',() => {
        console.log("Box got clicked");
        if(turn){
            box.innerHTML="O";
            box.style.color="red";
            turn=false;
        }else{
            box.innerHTML="X";
            box.style.color="green";
            turn=true;
        }
        box.disabled=true;
        chechWinner();
    });
});

const chechWinner=()=>{
     for (let Pattern of winPattern){
        let pos1=boxes[Pattern[0]].innerHTML;
        let pos2=boxes[Pattern[1]].innerHTML;
        let pos3=boxes[Pattern[2]].innerHTML;
        if(pos1!="",pos2!="",pos3!=""){
            if(pos1===pos2&& pos2==pos3){
                console.log("Winner",pos1);
            }
        }
     }
}

const resestGame=()=>{
    turn=true;
    boxes.innerHTML="";

}
reset.addEventListener('click',resestGame);