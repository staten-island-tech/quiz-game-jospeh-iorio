DOMSelectors = {
  displayContainer: document.querySelector(".container"),
};
console.log("connected");
function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {}

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {}

function showQuestions(questions, quizContainer) {
  const output = [];
  const answers = document.querySelectorAll;
}
for (var i = 0; i < questions.length; i++) {
  answers = [];
  for (letter in questions[i].answers) {
  }
  userAnswer = (
    answerContainers[i].querySelector(
      "input[name=question" + i + "]:checked"
    ) || {}
  ).value;
  if (userAnswer === questions[i].correctAnswer) {
    numCorrect++;
    answerContainers[i].style.color = "blue";
  }

  function showResults(questions, quizContainer, resultsContainer) {}

  showQuestions(questions, quizContainer);

  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}

{
  const myQuestions = [
    {
      question: "Who Was The 8th President",
      answers: {
        a: "Andrew Jackson",
        b: "Martin van Buren",
        c: "Henry Ford",
      },
      correctAnswer: "b",
    },
    {
      question: "Who was known as The Great Compromiser?",
      answers: {
        a: "Richard Wheeler",
        b: "Ricky Jenkins",
        c: "Henry Clay",
      },
      correctAnswer: "c",
    },
  ];
}
