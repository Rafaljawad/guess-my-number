let randomNum=Math.floor(Math.random()*20)+1;//create random number between 0-20
let score=20;//create varible score to store the number in ech attempt and decrease it when the guess is wrong
  let highScore=0;// create varible highscore to store the highscore if the answer is right

document.querySelector('.Check').addEventListener('click', function (){//we create a function for check button
  let guessValue=Number(document.querySelector('.guess-num').value);//here the number that we insert it ,just store it in a varible guessValue
  console.log(guessValue);
if(guessValue===0){// if no number in the input type(guess-num)
document.querySelector('.message').textContent="🔲No number inserted";//then change the message from start guessing to no number inserted
alert("try to insert number");// and give the user an alert that insert num
}
else if(guessValue===randomNum){//if the randomNum equal to the number that we inserted which is now the guess value then:


  document.querySelector('.message').textContent="👏correct number";//change the message to coorect number
  document.querySelector('.quastionmark').textContent= randomNum;//and change the question MARK TO THE RIGHT NUMBER WHICH IS THE RANDOM OR THE GUESS VALUE BECAUSE THEY ARE SAME
  document.querySelector('h1').textContent="🎉Congrats🎉Horray! ";//AND CHANGE THE  H1
  document.querySelector('body').style.backgroundColor="rgb(139, 219, 129)";//AND CHANGE THE BACKGROUND COLOR
  if(score>highScore){//HERE IF THE ANSWER IS CORRECT BESIDE THE CODE ABOVE TRY TO MAKE THE HIGH SCORE=CURRENT SCORE IF THE CURRENT SCORE HIGHER THEN PUT IN HIGH SCORE SAME THE CURRENT IF NO JUST LEAVE IT WITHOUT CHANGING
      highScore=score;
    document.querySelector('.high-scr').textContent=highScore;
  }



}
else if(guessValue>randomNum){//HERE IF THE guessValue GRAETER THAN THE RANDOM DO THE CODE BELOW AND NOTICE THAT IF WE TRY MULTIPLE TIME
  //AND IN EACH WRONG ANSWER THE SCORE WILL GO DOWN FOR INFINITY WHICH WE DONT WANT SO WE HAVE IN THIS
  //CASE TO PUT IF INSIDE THE ELSE IF TO STOP THE ATTEMPT WHEN THE SCORE ARRIVE TO 0 THE GAME WILL OVER
  if(score>1){
  document.querySelector('.message').textContent="🔼Too high";
  score--;
  document.querySelector('.num-20').textContent=score;

}
else{// IF THE SCORE ARRIVES TO 0 THEN THE GAME IS OVER
  document.querySelector('.message').textContent="🤚Game Over";
  document.querySelector('.num-20').textContent=0;
}
}
else{//THIS ELSE FOR IF THE guessValue<RANDOMNUM DO THE SAME CODE ABOVE JUST CHANGE THE MESSAGE FROM TOOHIGH TO TOO LOW
  if(score>1){
  document.querySelector('.message').textContent="🔻Too Low";
  score--;
  document.querySelector('.num-20').textContent=score;
}
else{
  document.querySelector('.message').textContent="Game Over";
  document.querySelector('.num-20').textContent=0;
}
}
});
document.querySelector('.again').addEventListener('click', function (){//HERE CREATE FUNCTION FOR AGAIN BUTTON
  score=20;// TO PRING BACK THE SAME SCORE AS BEFOR WE HAVE TO RE ASSIGN THE SCORE AND THE RANDOM NUM
  //TO DO SO JUST PUT IT BECAUSE THEY ARE ALREADY LET VARIABLE
  randomNum= randomNum=Math.floor(Math.random()*20)+1;
  document.querySelector('.quastionmark').textContent="❔";// SET EVERYTHING AS IT WAS BEFOR
document.querySelector('.guess-num').value=" ";// LET THE INPUT EMPTY
document.querySelector('.message').textContent="🤔Guess the number....";//PRING BACK THE SAME MESSAGE AS BEFOR TRYING
document.querySelector('.num-20').textContent="20";//CHANGE THE SCORE TO 20
  document.querySelector('body').style.backgroundColor="white";//THE BACKGROUND COLOR TO WHITE


});
