// Query

let questionCard = document.querySelector('[data-js="question-card"]');

let answerButton = document.querySelector('[data-js="answer-button"]');

answerButton.addEventListener("click", () => {
  questionCard.classList.toggle("answer-shown");
});
