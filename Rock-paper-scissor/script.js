const score = JSON.parse(localStorage.getItem('score')) || {
        Wins: 0,
        Loses: 0,
        Ties: 0
        }

        updateScore();
        
/*
        if(!score){
          score = {
          Wins : 0,
          Loses : 0,
          Ties : 0
          }
        }*/


 
       function updateScore(){
document.querySelector('.js-score')
        .innerHTML = `Wins : ${score.Wins} , Loses : ${score.Loses} , Ties : ${score.Ties}`;
       }
        
function pickComputerMove(){
const randomNumber = Math.random();
   let computerMove = ' ';
   if(randomNumber >= 0 &&  randomNumber < 1/3 ){
     computerMove = 'Rock';
   }else if(randomNumber >= 1/3 &&  randomNumber < 2/3){
    computerMove = 'Paper';
   }
   else if(randomNumber >= 2/3 &&  randomNumber < 1){
     computerMove = 'Scissors';
   }
 
   return computerMove;
}

let isautoPlaying = false;
let intervalId;
//const AutoPlay = () =>{

//}
function autoPlay(){
  if(!intervalId){
intervalId = setInterval(() => {
    const playerMove = pickComputerMove();
playGame(playerMove);
  },1000);
  isautoPlaying = true;
  }else{
    clearInterval(intervalId);
    isautoPlaying = false;
  }
 
}

document.querySelector('.js-rock-button')
.addEventListener('click',() => {
  playGame('Rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('Paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('Scissors');
});

document.querySelector('.js-auto-play').addEventListener('click', () => {
  autoPlay();
})

document.body.addEventListener('keydown',(event) => {
  if(event.key === 'r'){
    playGame('Rock');
  }else if(event.key === 'p'){s
    playGame('Paper');
  }else if(event.key === 's'){
    playGame('Scissors');
  }
})

function playGame(playerMove){
  const computerMove = pickComputerMove();
    let result = ' ';
  if(playerMove === 'Paper'){
    if(computerMove === 'Rock'){
    result = 'You Win';
   }else if(computerMove === 'Paper'){
 result = 'Tie';
   }else if(computerMove === 'Scissors'){
    result = 'You Lose';
   }

  }else if(playerMove === 'Scissors'){
   
   if(computerMove === 'Rock'){
    result = 'You Lose';
   }else if(computerMove === 'Paper'){
    result = 'You Win';
   }else if(computerMove === 'Scissors'){
    result = 'Tie';
   }
}else if(playerMove === 'Rock'){
    if(computerMove === 'Rock'){
    result = 'Tie';
   }else if(computerMove === 'Paper'){
 result = 'You Lose';
   }else if(computerMove === 'Scissors'){
    result = 'You Win';
   }
  } 
  
 if(result === 'You Win'){
score.Wins += 1;
 }else if(result === 'You Lose'){
    score.Loses += 1;
 }else if(result === 'Tie'){
    score.Ties += 1;
 }

 localStorage.setItem('score',JSON.stringify(score));

 updateScore();
 document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-move').innerHTML = ` you
      <img src="r-s-p/${playerMove}-emoji.png" alt="" class="move-icon">
     <img src="r-s-p/${computerMove}-emoji.png" alt="" class="move-icon">
    computer`;

} 