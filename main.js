// Query

// Open answer script

const questionCard = document.querySelector('[data-js="question-card"]');

const answerButton = document.querySelector('[data-js="answer-button"]');

answerButton.addEventListener("click", () => {
  questionCard.classList.toggle("question-card__answer--shown");
});

// Dark mode script

// Elements
const bodyElement = document.querySelector('[data-js="body"]');
const headerElement = document.querySelector('[data-js="header"]');
/* Question Card already defined */
const questionAnswerElement = document.querySelector(
  '[data-js="question-answer"]'
);
const questionCardBookmark = document.querySelector(
  '[data-js="bookmark-icon"]'
);
const navigationBlock = document.querySelector('[data-js="navigation"]');
const navigationItems = document.querySelector('[data-js="navigation-items"]');

// Button
const themeButton = document.querySelector('[data-js="theme-button"]');

themeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("body--dark-mode");
  headerElement.classList.toggle("header--dark-mode");
  questionCard.classList.toggle("question-card--dark-mode");
  questionAnswerElement.classList.toggle("question-card__answer--dark-mode");
  questionCardBookmark.classList.toggle("question-card__bookmark--dark-mode");
  navigationBlock.classList.toggle("nav--dark-mode");
  navigationItems.classList.toggle("nav-items--dark-mode");
});
