var rollbtn = document.querySelector(".roll-dice-btn");
var image = document.querySelector(".diceimg");
var currScore1 = document.querySelector("#currentScore1");
var currScore2 = document.querySelector("#currentScore2");
var totalP1 = document.querySelector("#pscore1");
var totalP2 = document.querySelector("#pscore2");
var again = document.querySelector(".new-game-btn");
var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var flag = 0;   //at initial stage
var currentScore = 0;
var totalScore1 = 0;
var totalScore2 = 0;

function resetGame(){
    totalScore1 = 0;
    totalScore2 = 0;
    totalP1.textContent = 0;
    totalP2.textContent = 0;
    currentScore = 0;
    currScore1.textContent = currentScore;
    currScore2.textContent = currentScore;
    p1.style.backgroundColor = "#f5dce7";
    p2.style.backgroundColor = "#f08bb7";
    image.classList.add("hidden");
}

rollbtn.addEventListener("click", function(){
     var number = Math.trunc(Math.random()*6)+1;
     console.log(number);

     if(number == 1){   //for switching btween players
        image.src = "1.png";
        if(flag == 0){
             flag = 1;
             totalScore1 += currentScore;
             totalP1.textContent = totalScore1;
            currentScore = 0;
            currScore1.textContent = currentScore;
            p2.style.backgroundColor = "#f5dce7";
            p1.style.backgroundColor = "#f08bb7";
        }
        else{
          flag = 0;
          totalScore2 += currentScore;
          totalP2.textContent = totalScore2;
          currentScore = 0;
          currScore2.textContent = currentScore;
          p1.style.backgroundColor = "#f5dce7";
          p2.style.backgroundColor = "#f08bb7";
        }
     }

    else{
        image.classList.remove("hidden");
     if(number == 2){
         image.src = "2.png";
     }
     if(number == 3){
        image.src = "3.png";
     }
     if(number == 4){
        image.src = "4.jpeg";
     }
     if(number == 5){
        image.src = "5.png";
     }
     if(number == 6){
        image.src = "6.png";
     }
    }


    //for adding the score when switching happened
    if(flag == 0){
        currentScore += number;
        currScore1.textContent = currentScore;
    }
    else{
        currentScore += number;
        currScore2.textContent = currentScore;
    }


    //for checking total score
    if(totalScore1 >= 100){
        alert(` 🎉 Player 1 Winns the Match ${totalScore1}`);
        resetGame();
    }
   if(totalScore2 >= 100){
        alert(` 🎉 Player 2 Winns the Match ${totalScore2}`);
        resetGame();
    }
});

again.addEventListener("click",resetGame);