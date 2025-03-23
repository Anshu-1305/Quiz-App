import { allQuestions } from './quizQuestions.js';

const startScreen = document.getElementById("start-screen");
const questionCountInput = document.getElementById("question-count");
const startButton = document.getElementById("start-btn");

const quizSection = document.getElementById("quiz-section");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Start quiz based on user selection
startButton.addEventListener("click", () => {
    const questionCount = parseInt(questionCountInput.value);
    
    if (questionCount > 0 && questionCount <= allQuestions.length) {
        selectedQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, questionCount); // Shuffle and select questions
        startScreen.style.display = "none";
        quizSection.style.display = "block";
        startQuiz();
    } else {
        alert("Please enter a valid number of questions.");
    }
});

// Initialize the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none"; // Hide Next button initially
    showQuestion();
}

// Display a new question
function showQuestion() {
    resetState();
    let currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    questionElement.classList.add("fade-in");

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

// Reset answer buttons before showing a new question
function resetState() {
    nextButton.style.display = "none"; // Hide Next button until answer is selected
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Handle answer selection
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("wrong");

        // Show the correct answer in green
        document.querySelectorAll(".btn").forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
        });
    }

    // Disable all buttons after selection
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });

    nextButton.style.display = "block"; // Show next button
}

// Function to handle "Next" button click
function handleNextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
}

// Display the final score
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${selectedQuestions.length}!`;
    nextButton.innerHTML = "Restart Quiz";
    nextButton.style.display = "block";

    // Reset event listener to restart the quiz
    nextButton.removeEventListener("click", handleNextQuestion);
    nextButton.addEventListener("click", restartQuiz);
}

// Restart the quiz
function restartQuiz() {
    startScreen.style.display = "block";
    quizSection.style.display = "none";
    nextButton.innerHTML = "Next";
    
    // Reset event listeners
    nextButton.removeEventListener("click", restartQuiz);
    nextButton.addEventListener("click", handleNextQuestion);
}

// Ensure Next button works properly
nextButton.addEventListener("click", handleNextQuestion);
