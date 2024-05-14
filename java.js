let randomNum = Math.floor((Math.random()*10)+1);
console.log(randomNum);
let round = 3;
document.getElementById("btn").onclick=() =>{
    let gessNum = document.getElementById("num").value;
    if (gessNum!= ""){
        round--;
        if (round ==0){
            alert("Game Over");
            location.reload();
        } else{
            if(gessNum > randomNum){
                document.getElementById("hint").innerHTML="your number is too high:(";
                document.getElementById("rounds").innerHTML=round;
           }else if(gessNum < randomNum){
                document.getElementById("hint").innerHTML="your number is too low:(";
                document.getElementById("rounds").innerHTML=round;
          }else if(gessNum == randomNum){
              document.getElementById("hint").innerHTML="congratulation you win";
              document.getElementById("type").innerHTML="Game Over";
          }

        }  
    
        
    }else{
        document.getElementById("hint").innerHTML="please enter a number dont put it empty";
    }
}