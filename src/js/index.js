const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const resultForm = document.getElementById("form-result");

let countRightAnswers = 0;
let shuffledQuestions, currentQuestionIndex;
let currentQuestion = 1;

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
  document.getElementById("answer-buttons").classList.remove("no-click");

  currentQuestionIndex++;
  setNextQuestion();

  currentQuestion++;
  document.getElementById("current-question").innerHTML = currentQuestion;
});

function startGame() {
  console.log("started");

  document.getElementById("answer-buttons").classList.remove("no-click");

  startButton.classList.add("hide");
  resultForm.classList.add("hide");

  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();

  currentQuestion = 1;
  document.getElementById("current-question").innerHTML = currentQuestion;

  countRightAnswers = 0;

  document.getElementById("all-questions2").innerHTML = questions.length;
  document.getElementById("all-questions").innerHTML = questions.length;
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    resultForm.classList.remove("hide");
    questionContainerElement.classList.add("hide");

    startButton.innerText = "Repeat";
    startButton.classList.remove("hide");
  }

  if ((selectedButton.dataset = correct)) {
    countRightAnswers++; //+1
  }

  document.getElementById("right-answers").innerHTML = countRightAnswers;
  document.getElementById("answers-percent").innerHTML = (
    (100 * countRightAnswers) /
    questions.length
  ).toFixed(0);

  document.getElementById("answer-buttons").classList.add("no-click");
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What is the best animal",
    answers: [
      { text: "Monkey", correct: true },
      { text: "Gorilla", correct: false },
      { text: "Chimp", correct: false },
      { text: "Lemur", correct: false },
    ],
  },
  {
    question: "Am I very tired right now",
    answers: [
      { text: "You bet", correct: true },
      { text: "No", correct: false },
      { text: "HAHAHAAH", correct: false },
      { text: "Okay", correct: false },
    ],
  },
  {
    question: "Did I spend a lot of time on this project ",
    answers: [
      { text: "Kinda", correct: true },
      { text: "So much! ", correct: false },
      { text: "Swag", correct: false },
      { text: "Okay", correct: false },
    ],
  },
  {
    question: "Did I give up many times",
    answers: [
      { text: "No", correct: false },
      { text: "Yes", correct: true },
      { text: "Only twice", correct: false },
      { text: "Only three times", correct: false },
    ],
    question:
      "What is 8+7 due to the fact I'm running out of questions to think of ",
    answers: [
      { text: "15", correct: true },
      { text: "12", correct: false },
      { text: "18", correct: false },
      { text: "17", correct: false },
    ],
  },
];
