const user_choices = document.querySelectorAll('.input');

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let userChoice = '', computerChoice = 0;

const userOutput = document.querySelector('.user-output-image');
const computerOutput = document.querySelector('.computer-output-image');
let choices = ['images/rock.png', 'images/paper.png', 'images/scissors.png'];

function updateOutput(userChoice, computerChoice, e) {
    console.log(userChoice, computerChoice)

    userOutput.src = choices[userChoice]; // display user's choice in output
    computerOutput.src = choices[computerChoice] // display computer's choice in output
}

function getWinner(userChoice, computerChoice, e) {
    if (userChoice === computerChoice) {
        return 'Draw';
    } else if (userChoice === 'Rock' && computerChoice === 'Scissors' ||
               userChoice === 'Paper' && computerChoice === 'Rock' ||
               userChoice === 'Scissors' && computerChoice === 'Paper') {
        return 'User';
    } else {
        return 'Computer';
    }
}

const userScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.computer-score');
const output_message = document.querySelector('.output-message');
function updateScore(winner, userChoice, computerChoice) {
    if (winner === 'User') {
        userScore.innerText = parseFloat(userScore.innerText) + 1;
        output_message.innerText = `You Win! ${userChoice} > ${computerChoice}`;
    } else if (winner === 'Computer') {
        computerScore.innerText = parseFloat(computerScore.innerText) + 1;
        output_message.innerText = `You Lose! ${userChoice} < ${computerChoice}`;
    } else {
        output_message.innerText = `Draw!`;
    }
}

user_choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        // user_choices.forEach(choice => choice.parentElement.classList.remove('selected'));
        // e.target.parentElement.classList.add('selected');
        switch (true) {
            case e.target.parentElement.classList.contains('rock-input'):
                userChoice = 'Rock';
                break;
            case e.target.parentElement.classList.contains('paper-input'):
                userChoice = 'Paper';
                break;
            case e.target.parentElement.classList.contains('scissors-input'):
                userChoice = 'Scissors';
                break;
        }
        computerChoice = getComputerChoice();
        let userChoiceIndex = ['Rock', 'Paper', 'Scissors'].indexOf(userChoice); // getting index version of user choice

        updateOutput(userChoiceIndex, computerChoice, e);

        // update computer choice names for winner and score
        computerChoice = ['Rock', 'Paper', 'Scissors'][computerChoice];

        let winner = getWinner(userChoice, computerChoice, e);
        updateScore(winner, userChoice, computerChoice);
    })
})

const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', () => {
    output_message.innerText = '', userScore.innerText = 0, computerScore.innerText = 0;
    userChoice = '';
    computerChoice = 0;

    // default images
    userOutput.src = choices[0];
    computerOutput.src = choices[0];
})
