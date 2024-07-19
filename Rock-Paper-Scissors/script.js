document.addEventListener("DOMContentLoaded", () => {
//   Popup
const rulesPopup = document.querySelector(".rule-popup");
const ruleBtn = document.querySelector("#rule-btn");
const ruleBtn2 = document.querySelector("#rule-btn2");
const closeBtn = document.querySelector("#close");
const nextBtn = document.querySelector('.next-btn');

//   Gamebox
const choiceContainer = document.querySelector('.choice-container');
const OptionBtn = document.querySelectorAll(".Option-btn");

//   Score
const userScoreNum = document.querySelector('#user-score');
const computerScoreNum = document.querySelector('#pc-score');

//   Result
const resultContainer = document.querySelector('.resultBox');
const userPicked = document.querySelector('.userSide');
const computerPicked = document.querySelector('.pcSide');
const userPic = document.querySelector('.userPic');
const computerPic = document.querySelector('.pcPic');
const resultText = document.querySelector('.result .status');
const playBtn = document.querySelector('.playBtn');



// Initial scores
let userScore = JSON.parse(localStorage.getItem('userScore')) || 0;
let computerScore = JSON.parse(localStorage.getItem('computerScore')) || 0;
userScoreNum.innerText = userScore;
computerScoreNum.innerText = computerScore;

// Function to save scores to localStorage
function saveScore() {
    localStorage.setItem('userScore', JSON.stringify(userScore));
    localStorage.setItem('computerScore', JSON.stringify(computerScore));
}

// function for change border color
function changeBorder(selectOption) {
    const borderColors = {
      rock: "#0074B6",
      paper: "#FFA943",
      scissors: "#BD00FF"
    };
    return borderColors[selectOption];
}

function selectComputerChoice() {
    let randomIndex = Math.floor(Math.random() * OptionBtn.length);
    const btn = OptionBtn[randomIndex];
    const computerPickedPic = btn.querySelector('img').cloneNode(true);
    computerPic.innerHTML = ``;
    computerPic.appendChild(computerPickedPic);
    const computerOption = btn.id;
    const color = changeBorder(computerOption);
    computerPic.style.borderColor = color;
    return computerOption;
}

const getWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "draw";
    }
    else if ((userChoice === "rock" && computerChoice === "scissors") || 
        (userChoice === "scissors" && computerChoice === 'paper') || 
        (userChoice === "paper" && computerChoice === "rock")) {
        userScore++;
        return "user";
    }
    else {
        computerScore++;
        return "computer";
    }
}; 

function showResult(winner){
    switch(winner){
        case "user": {
            userPicked.classList.add('animate');
            computerPicked.classList.remove('animate');
            resultText.textContent = 'You Win';
            nextBtn.classList.remove('hidden');
            window.location.href = 'celebration.html';
        };
        break;
        case "computer": {
            computerPicked.classList.add('animate');
            userPicked.classList.remove('animate');
            resultText.textContent = 'You Lost';
            nextBtn.classList.add('hidden');
        };
        break;
        case "draw": {
            resultText.textContent = 'Draw';
            nextBtn.classList.add('hidden');
        };
    }
}

function selectUserChoice() {
    OptionBtn.forEach((btn) => {
      btn.addEventListener("click", function () {
        const userChoice = btn.id;
        const userPickedPic = btn.querySelector('img').cloneNode(true);
        userPic.innerHTML = ``;
        userPic.appendChild(userPickedPic)
        const computerChoice = selectComputerChoice();
        const winner = getWinner(userChoice, computerChoice);
        choiceContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        showResult(winner);
        const color = changeBorder(userChoice);
        userPic.style.borderColor = color;
        saveScore();
        updateScoreDisplay();
      });
    });
}

selectUserChoice()

function playAgain(){
    choiceContainer.classList.remove('hidden')
    resultContainer.classList.add('hidden')
}

function updateScoreDisplay() {
    userScoreNum.textContent = userScore;
    computerScoreNum.textContent = computerScore;
}

ruleBtn.addEventListener("click", () => rulesPopup.classList.toggle("hidden"));
closeBtn.addEventListener("click", () => rulesPopup.classList.add("hidden"));
playBtn.addEventListener('click', playAgain);

});
