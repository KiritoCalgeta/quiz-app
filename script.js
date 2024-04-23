const questions = [
    {
        question: "What is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is my first name",
        answers: [
            {text: "Callum", correct: true},
            {text: "Cal", correct: false},
            {text: "Pops", correct: false},
            {text: "William", correct: false},
        ]
    },
    {
        question: "Where do I live?",
        answers: [
            {text: "France", correct: false},
            {text: "South Korea", correct: false},
            {text: "London", correct: false},
            {text: "Edinburgh", correct: true},
        ]
    },
    {
        question: "What is my favourite anime?",
        answers: [
            {text: "Sword Art Online", correct: true},
            {text: "Dragonball", correct: false},
            {text: "Seraph of the End", correct: false},
            {text: "One Punch Man", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
startQuiz();