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
var nextBtn = document.getElementById("next-btn");
var initialsInput = document.getElementById("high-score-initials");
var submitBtn = document.getElementById("submit-initials");
var highScoreScreen= document.getElementById("input");
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
    question: "what's 1+1?",
    answers: ["a. 2", "b. 4", "c. 6", "d. 8"],
    correctAnswer: "a. 2",
  },
  {
    question: "what's 2+2?",
    answers: ["a. 4", "b. 2", "c. 6", "d. 8"],
    correctAnswer: "a. 4",
  },
  {
    question: "what's 3+3?",
    answers: ["a. 6", "b. 4", "c. 2", "d. 8"],
    correctAnswer: "a. 6",
  },
  {
    question: "what's 4+4?",
    answers: ["a. 8", "b. 4", "c. 6", "d. 2"],
    correctAnswer: "a. 8",
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

  //TODO need to figure out why correct answer index is not increasing for answer choices

}

function checkAnswer(event) {
  console.log(currentIndex, myQuestions.length);
  if(currentIndex < myQuestions.length -1){
    var currentCorrectAnswer = myQuestions[currentIndex];
    var userChoice = event.target.textContent;
    console.log("users choice was " + userChoice);
    var correctAnswer = currentCorrectAnswer.correctAnswer;
  
    if (userChoice === correctAnswer) {
      score++;
      console.log("score is now " + score);
    } else {
      secondsLeft = secondsLeft - 10;
    }
    currentIndex ++;
    askCurrentQuestion();
  } else {
    quizContainer.style.display= "none";
    highScoreScreen.style.display="flex";
  }



}


startBtn.addEventListener("click", startQuiz);
answerContainer.addEventListener("click", checkAnswer);
submitBtn.addEventListener("click", renderLastHighscore)


function startQuiz() {
  titleEl.innerHTML="Good Luck!!";
  startBtn.style.display="none";
  setTime();
  askCurrentQuestion();

} 

function showResult () {
  
}


