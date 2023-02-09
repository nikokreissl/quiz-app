// Query

// Answer functionality - Show answer on first card only

const questionCardButton = document.querySelector('[data-js="answer-button"]');
const questionCardAnswer = document.querySelector(
  '[data-js="question-answer"]'
);

questionCardButton.addEventListener("click", () => {
  classToggle(questionCardAnswer, "question-card__answer--shown");
});

// Bookmark functionality - Change color on first card only

const questionCardBookmark = document.querySelector(
  '[data-js="bookmark-icon"]'
);

questionCardBookmark.addEventListener("click", () => {
  classToggle(questionCardBookmark, "question-card__bookmark--active");
});

// Toggle Class Function

function classToggle(elementToBeChanged, classToBeAdded) {
  // classToBeAdded to be passed as string
  // TO BE TESTED - Use `"class-one", "class-two"` to add multiple classes at one time
  elementToBeChanged.classList.toggle(classToBeAdded);
}
