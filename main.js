// Query

const questionCard = document.querySelector('[data-js="question-card"]');

const answerButton = document.querySelector('[data-js="answer-button"]');

answerButton.addEventListener("click", () => {
  questionCard.classList.toggle("answer-shown");
});
