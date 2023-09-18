//global scope variables
var startBtn = document.getElementById("start-btn");
var timerEl = document.getElementById("timer");
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var answerContainer = document.getElementById("answer-container");
var nextbtn = document.getElementById("next-btn");

var myQuestions = [
  {
    question: "what's 1+1?",
    answers: ["a. 2", "b. 4", "c. 6", "d. 8"],
    correctAnswer: "a. 2",
  },
  {
    question: "what's 2+2?",
    answers: ["a. 2", "b. 4", "c. 6", "d. 8"],
    correctAnswer: "b. 4",
  },
  {
    question: "what's 3+3?",
    answers: ["a. 2", "b. 4", "c. 6", "d. 8"],
    correctAnswer: "c. 6",
  },
  {
    question: "what's 4+4?",
    answers: ["a. 2", "b. 4", "c. 6", "d. 8"],
    correctAnswer: "d. 8",
  }
]

var score = 0;
var currentIndex = 0;
var currentQuestion = myQuestions[currentIndex];
console.log(currentQuestion);
console.log(currentQuestion.question);
console.log(currentQuestion.answers);
console.log(currentQuestion.answers[3]);



//function to ask current question and display answer choices
function askCurrentQuestion () {
    questionEl.innerHTML="";
    questionEl.textContent= currentQuestion.question;
    quizContainer.style.display="block";
  // putting answer choice text in buttons
    choiceA.innerHTML= "";
    choiceA.textContent = currentQuestion.answers[0];
    choiceB.innerHTML = "";
    choiceB.textContent = currentQuestion.answers[1];
    choiceC.innerHTML = "";
    choiceC.textContent = currentQuestion.answers[2];
    choiceD.innerHTML = "";
    choiceD.textContent = currentQuestion.answers[3];
    answerContainer.addEventListener("click", checkAnswer);
}

// function to listen to user 
//answer choice and see if answer is correct

function checkAnswer(event){
  var userChoice = event.target.textContent;
  console.log("users choice was " + userChoice);
  var correctAnswer = currentQuestion.correctAnswer;
  console.log("the correct answer is " + correctAnswer);

  if (userChoice === correctAnswer) {
    score ++;
    console.log("score is now " + score);
  } else {
    console.log("wrong");
  }
  nextbtn.addEventListener("click", nextQuestion);
}
// TODO need to fix bug in next question
function nextQuestion () {
  currentIndex ++; 
  askCurrentQuestion();
  answerChoiceText();
}

var secondsLeft = 60;

function setTime() {
  var timeInterval = setInterval(function() {
    secondsLeft --;
    timerEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0 ) {
      clearInterval(timeInterval);
      alert("time is up");
    }
    }, 1000)
}

  startBtn.addEventListener("click", startQuiz );




function startQuiz (){
  askCurrentQuestion();
  setTime();
}

