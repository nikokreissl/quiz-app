// Query

// Variables
const questionForm = document.querySelector('[data-js="question-form"]');

// Form Functionality
questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Hello World");
});
