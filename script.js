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
        selectedQuestions = allQuestions.slice(0, questionCount); // Select user-defined number of questions
        startScreen.style.display = "none";
        quizSection.style.display = "block";
        startQuiz();
    }
});

// Load Questions
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

// Display Question
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

// Reset state before showing new question
function resetState() {
    nextButton.style.display = "none";
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

// Handle "Next" button click
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

// Show final score
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${selectedQuestions.length}!`;
    nextButton.innerHTML = "Restart Quiz";
    nextButton.style.display = "block";

    // Restart quiz on clicking next button
    nextButton.onclick = () => {
        startScreen.style.display = "block";
        quizSection.style.display = "none";
    };
}
