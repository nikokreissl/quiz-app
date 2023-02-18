// Query

// Variables
// Form & new cards container
const questionCardContainer = document.querySelector('[data-js="main"]');
const questionForm = document.querySelector('[data-js="question-form"]');

// Input count question
const inputCountQuestion = document.querySelector(
  '[data-js="input-count-question"]'
);
const charactersLeftCountQuestion = document.querySelector(
  '[data-js="input-count-question-number"]'
);
const charactersLeftTextQuestion = document.querySelector(
  '[data-js="input-count-question-text"]'
);

// Input count answer
const inputCountAnswer = document.querySelector(
  '[data-js="input-count-answer"]'
);
const charactersLeftCountAnswer = document.querySelector(
  '[data-js="input-count-answer-number"]'
);
const charactersLeftTextAnswer = document.querySelector(
  '[data-js="input-count-answer-text"]'
);

// Form Functionality
questionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  createNewQuestion(data);

  questionForm.reset();
  questionForm.elements.question.focus();
});

// Count Question
inputCount(
  inputCountQuestion,
  charactersLeftCountQuestion,
  charactersLeftTextQuestion
);
// Count Answer
inputCount(
  inputCountAnswer,
  charactersLeftCountAnswer,
  charactersLeftTextAnswer
);

// Input count function
function inputCount(counter, outputNumber, outputText) {
  counter.addEventListener("input", () => {
    const remainingCharacters = counter.maxLength - counter.value.length;
    outputNumber.textContent = remainingCharacters;
    if (remainingCharacters === 150) {
      outputText.style.color = "black";
    } else if (remainingCharacters < 150 && remainingCharacters > 50) {
      outputText.style.color = "green";
    } else if (remainingCharacters < 51 && remainingCharacters > 25) {
      outputText.style.color = "orange";
    } else if (remainingCharacters < 26) {
      outputText.style.color = "red";
    }
  });
}

// Create new question function
function createNewQuestion(questionData) {
  // Create new card & add to main
  const newQuestionCard = document.createElement("section");
  newQuestionCard.classList.add("question-card");
  questionCardContainer.append(newQuestionCard);

  // Create new headline with question & add to card
  const newQuestionHeadline = document.createElement("h2");
  newQuestionHeadline.classList.add("question-card__question");
  newQuestionHeadline.textContent = questionData.question;
  newQuestionCard.append(newQuestionHeadline);

  // Create new button & add to card
  const newQuestionButton = document.createElement("button");
  newQuestionButton.textContent = "Show Answer";
  newQuestionCard.append(newQuestionButton);

  // Create new container for answer & add to card
  const newQuestionCardAnswerContainer = document.createElement("div");
  newQuestionCardAnswerContainer.classList.add(
    "question-card__answer",
    "hidden"
  );
  newQuestionCard.append(newQuestionCardAnswerContainer);

  // Create new headline within answer container
  const newQuestionCardAnswerHeaderContainer = document.createElement("div");
  newQuestionCardAnswerHeaderContainer.classList.add(
    "question-card__answer-header"
  );
  newQuestionCardAnswerContainer.append(newQuestionCardAnswerHeaderContainer);

  // Add headline "Answer" in answer container
  const newQuestionCardAnswerHeadline = document.createElement("h3");
  newQuestionCardAnswerHeadline.textContent = "Answer";
  newQuestionCardAnswerHeaderContainer.append(newQuestionCardAnswerHeadline);

  // Add "close" icon to answer container
  const newQuestionCardAnswerCloseButton = document.createElement("i");
  newQuestionCardAnswerCloseButton.classList.add(
    "fa-regular",
    "fa-circle-xmark"
  );
  newQuestionCardAnswerHeaderContainer.append(newQuestionCardAnswerCloseButton);

  // Add answer to new question
  const newQuestionCardAnswer = document.createElement("p");
  newQuestionCardAnswer.textContent = questionData.answer;
  newQuestionCardAnswerContainer.append(newQuestionCardAnswer);

  // Add tags-list to question card
  const newQuestionCardTagsList = document.createElement("ul");
  newQuestionCardTagsList.classList.add("question-card__tag-list");
  newQuestionCard.append(newQuestionCardTagsList);

  // Add tags to tags-list
  const newQuestionCardTags = document.createElement("li");
  newQuestionCardTags.textContent = questionData.tags;
  newQuestionCardTagsList.append(newQuestionCardTags);

  // Add bookmark icon
  const newQuestionBookmark = document.createElement("i");
  newQuestionBookmark.classList.add(
    "fa-solid",
    "fa-bookmark",
    "question-card__bookmark"
  );
  newQuestionCard.append(newQuestionBookmark);
}
