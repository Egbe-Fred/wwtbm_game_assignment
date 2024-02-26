const questions = [
    {
        question: "What can be broken but never held?",
        options: ["Dry Stick", "Wet Glass", "A Promise", "Rubber"],
        correctAnswer: "A Promise"
    },
    {
        question: "What word is spelled incorrectly in every single dictionary?",
        options: ["Incorrectly", "Gynaecology", "Catarrh", "Synagogue"],
        correctAnswer: "Incorrectly"
    },
    {
        question: "What is always coming but never arrives?",
        options: ["Money", "Promise", "Hope", "Tomorrow"],
        correctAnswer: "Tomorrow"
    },
    {
        question: "What can one catch that is not thrown?",
        options: ["Ball", "Disease", "A Cold", "Smiles"],
        correctAnswer: "A Cold"
    },
    {
        question: "What never asks a question but gets answered all the time?",
        options: ["Your Spouse", "Your Telephone", "God", "Bills"],
        correctAnswer: "Your Telephone"
    },
];


let currentQuestionIndex = 0; 
let currentQuestion = questions[currentQuestionIndex]; 

const questionElement = document.getElementById('question'); 
const optionElement = document.getElementById('options'); 
const answerElement = document.getElementById('correctAnswer'); 


//  Function to Show Question 
function showQuestion() {
  questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`; 

  optionElement.innerHTML = ''; 
  currentQuestion.options.forEach((option, index) => {
    const optionBtn = document.createElement('button');
    optionBtn.classList.add('option');
    optionBtn.textContent = `${index + 1}. ${option}`;
    optionBtn.addEventListener('click', () => checkAnswer(option));
    optionElement.appendChild(optionBtn);
  });
}

function checkAnswer(playerOption) {
  if (playerOption.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
    answerElement.textContent = "Correct! You have been award N200."; 
    currentQuestionIndex++; 

    if (currentQuestionIndex < questions.length) {
      currentQuestion = questions[currentQuestionIndex];
      showQuestion(); 
    } else {
      answerElement.textContent = "Congratulation! you have won the total sum of N1,000.00!"; 
      optionElement.innerHTML = '';  //This is to clear the buttons
    }
  } else {
    answerElement.textContent = "Incorrect. You loss!"; 
    optionElement.innerHTML = ''; //This is to clear the buttons
  }
}

showQuestion(); 