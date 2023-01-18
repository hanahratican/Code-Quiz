const startButton = document.getElementById('start-button')

const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startTimer)

function startTimer() {
    console.log("Timer Started")
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    nextQuestion();
}


function nextQuestion() {

}

function selectAnswer() {

}

const questions = [
    {
        question: 'What is 2 plus 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }

        ]
    }
]