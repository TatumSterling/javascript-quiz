//global scope variables
var titleEl = document.getElementById("title")
var startBtn = document.getElementById("start-btn");
var timerEl = document.getElementById("timer");
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var answerContainer = document.getElementById("answer-container");
var initialsInput = document.getElementById("high-score-initials");
var submitBtn = document.getElementById("submit-initials");
var highScoreScreen= document.getElementById("input");
var highScoreBtn = document.getElementById("high-scores");
var userScore = document.getElementById("user-score");
var lastUserDisplay = document.getElementById("render-last-user");
var restartBtn = document.getElementById("restart");
var score = 0;


//timer element
var secondsLeft = 60;

function setTime() {
  var timeInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0) {
      clearInterval(timeInterval);
      alert("time is up");
    }
  }, 1000)
}
// end timer element



var myQuestions = [
  {
    question: "How do you display something in the console ?",
    answers: ["a. console.log ();", "b. alert();", "c. prompt();", "d. confirm():"],
    correctAnswer: "a. console.log ();",
  },
  {
    question: "What is the function declaration format?",
    answers: ["a. function = (declaration)", "b. function myFunction() = {}", "c. function = myFunction() {}", "d. myFunction = fucntion(){}"],
    correctAnswer: "b. function myFunction() = {}",
  },
  {
    question: "what can methods be attached to?",
    answers: ["a. variables", "b. arrays", "c. strings", "d. all of the above"],
    correctAnswer: "d. all of the above",
  },
  {
    question: "who created javascript?",
    answers: ["a. Brendan Eich", "b. Bill Gates", "c. Steve Jobs", "d. Elon Musk"],
    correctAnswer: "a. Brendan Eich",
  }
]


var currentIndex=0;



//function to ask current question and display answer choices
function askCurrentQuestion() {
  var currentQuestion = myQuestions[currentIndex];
    questionEl.innerHTML = "";
    questionEl.textContent = currentQuestion.question;
    quizContainer.style.display = "block";
    // putting answer choice text in buttons
    choiceA.innerHTML = "";
    choiceA.textContent = currentQuestion.answers[0];
    choiceB.innerHTML = "";
    choiceB.textContent = currentQuestion.answers[1];
    choiceC.innerHTML = "";
    choiceC.textContent = currentQuestion.answers[2];
    choiceD.innerHTML = "";
    choiceD.textContent = currentQuestion.answers[3];

  
  //function to listen to user 
  //answer choice and see if answer is correct


}

function checkAnswer(event) {
  console.log(currentIndex, myQuestions.length);
  if(currentIndex < myQuestions.length -1 ){
    var currentCorrectAnswer = myQuestions[currentIndex];
    var userChoice = event.target.textContent;
    console.log("users choice was " + userChoice);
    var correctAnswer = currentCorrectAnswer.correctAnswer;
  
    if (userChoice === correctAnswer) {
      score = score +32;
      console.log("score is now " + score);
    } else {
      secondsLeft = secondsLeft - 10;
    }
    currentIndex ++;
    askCurrentQuestion();
  } else {
    quizContainer.style.display= "none";
    showResult();
  }
}


startBtn.addEventListener("click", startQuiz);
answerContainer.addEventListener("click", checkAnswer);
submitBtn.addEventListener("click", function() {
  localStorage.setItem("last-user", initialsInput.value);
}
);

highScoreBtn.addEventListener("click", showResult)

function startQuiz() {
  titleEl.innerHTML="Good Luck!!";
  startBtn.style.display="none";
  highScoreScreen.style.display="none";
  setTime();
  askCurrentQuestion();

} 

function showResult () {
  highScoreScreen.style.display="flex";
  userScore.innerHTML="Your score is " + score + "%";
  var lastUser=localStorage.getItem("last-user");
  lastUserDisplay.innerHTML= "highscore:  " + lastUser;
  timerEl.style.display="none";
  titleEl.innerHTML="Javascript Quiz Results"
  restartBtn.style.display="block";


}



