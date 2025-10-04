'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent =10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/



let secretNumber = Math.trunc((Math.random()*20)+1);

let score =20;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click',() => {
const guess= Number(document.querySelector('.guess').value);
console.log(typeof guess);
if(!guess){
   // document.querySelector('.message').textContent = '⛔No number';
displayMessage('⛔No number');
    //when player wins 
}else if(guess === secretNumber){
//document.querySelector('.message').textContent = '🎉Correct Number';
displayMessage('🎉Correct Number');
document.querySelector('.number').textContent =secretNumber;
document.querySelector('body').style.backgroundColor ='#60b347';
document.querySelector('.number').style.width = '30rem';
if(score > highScore){
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
}

}else if(guess !== secretNumber){
   // document.querySelector('.message').textContent = guess > secretNumber?'📈Too High!':'📉Too Low!';
    displayMessage(guess > secretNumber?'📈Too High!':'📉Too Low!');
    score--;
if(score > 0){
document.querySelector('.score').textContent = score;
}else{
   // document.querySelector('.message').textContent = '💥 you lost the game!'
   displayMessage('💥 you lost the game!');
}

/*
}else if(guess > secretNumber){
    document.querySelector('.message').textContent = '📈Too High!';
    score--;
if(score > 0){
document.querySelector('.score').textContent = score;
}else{
    document.querySelector('.message').textContent = '💥 you lost the game!'
}
}else if(guess < secretNumber){
document.querySelector('.message').textContent = '📉Too Low!';
score--;
if(score > 0){
document.querySelector('.score').textContent = score;
}else{
    document.querySelector('.message').textContent = '💥 you lost the game!'
}*/
}

});



document.querySelector('.again').addEventListener('click', () =>{

    score =20;
secretNumber = Math.trunc((Math.random()*20)+1);

document.querySelector('.score').textContent = score;
document.querySelector('.number').style.width = '15rem';
document.querySelector('.number').textContent= '?';
document.querySelector('body').style.backgroundColor ='#222';
//document.querySelector('.message').textContent = "Start guessing...";
displayMessage('Start guessing...');
document.querySelector('.guess').value = '';
});
