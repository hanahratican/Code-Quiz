/*const startButton = document.getElementById('start-button')

const questionContainerElement = document.getElementById('question-container')

const startingMinutes = 2;

let time = startingMinutes * 60; 

const countdownEl = document.getElementById('countdown');


startButton.addEventListener('click', startTimer);



function startTimer() {

    console.log("Timer Started")
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    
    var timerInterval = setInterval(function() {
        time--;

        if(time === 0) {
            clearInterval(timerInterval);
            sendMessage("You are out of time!");
        }
    }, 1000);
    time--;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
}




function nextQuestion() {

}

function selectAnswer() {

}

let questions = [
    {
        question: 'What is 2 plus 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }

        ]
    }
]*/



const startButton = document.getElementById('start-button');
const questionContainerElement = document.getElementById('question-container');
const answerBtn = document.getElementsByClassName('answer-btns')
const answerOne = document.getElementById('answer1')
const answerTwo = document.getElementById('answer2')
const answerThree = document.getElementById('answer3')
const answerFour = document.getElementById('answer4')
const quizQuestionHeader = document.getElementByClass('question-header')


startButton.addEventListener('click', startQuiz, startTimer) //Starts the timer and hides the start button and displays the first question.

function startQuiz() {
    console.log("Quiz Started")
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
}
//function responsible for hiding the start button and displaying the first quesiton.

function startTimer() {
    const startingMinutes = 2;
    let time = startingMinutes * 60;
    var timerInterval = setInterval(function() {
        time--;
            if(time === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
}
//function to start the countdown, not currently working.

function showQuestionOne() {

}
//function to display question one.

function selectAnswer() {
    answerBtn.addEventListener('click', nextQuestion)
}
//function to add an event listener to when the quiz taker clicks on an answer.

function nextQuestion() {
    
}
//function to display the next question after answering the previous one.