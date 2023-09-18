var startBtn = document.getElementById("start-btn");
var timerEl = document.getElementById("timer");
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");

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

var currentIndex = 0;
var currentQuestion = myQuestions[currentIndex];
console.log(currentQuestion);
console.log(currentQuestion.question);
console.log(currentQuestion.answers);
console.log(currentQuestion.answers[3]);


function answerChoiceText () {
    choiceA.innerHTML= "";
    choiceA.textContent = currentQuestion.answers[0];
    choiceB.innerHTML = "";
    choiceB.textContent = currentQuestion.answers[1];
    choiceC.innerHTML = "";
    choiceC.textContent = currentQuestion.answers[2];
    choiceD.innerHTML = "";
    choiceD.textContent = currentQuestion.answers[3];

}

function askCurrentQuestion () {
    questionEl.innerHTML="";
    questionEl.textContent= currentQuestion.question;
}

answerChoiceText();
askCurrentQuestion();
