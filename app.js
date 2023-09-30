const stone = document.querySelector(".stone");
const paper = document.querySelector(".paper");
const cissors = document.querySelector (".cissors");

const playerStone = document.getElementById("player-stone");
const playerPaper = document.querySelector(".player-paper");
const playerCissors = document.querySelector(".player-cissors");
let playerPlay = '';

const computerStone = document.querySelector(".computer-stone")
const computerPaper = document.querySelector(".computer-paper")
const computerCissors = document.querySelector(".computer-cissors")
let computerRandomPlay = 0;

const btnReplay = document.querySelector(".btn-replay")
const result = document.querySelector('.result')
const resultMessage = document.querySelector(".message")

playerStone.addEventListener("click", function(){
    playerPlay = "stone"
    reverseCard()
});

playerPaper.addEventListener("click", function(){
    playerPlay = "paper"
    reverseCard()
});

playerCissors.addEventListener("click", function(){
    playerPlay = "cissors"
    reverseCard()
});

btnReplay.addEventListener("click", function(){
    location.reload();
})

function reverseCard() {
    randomPlay() 
    computersArrays[computerRandomPlay].classList.add("card-flip");

    if(i === 0 && playerPlay === 'stone') {
        resultMessage.style.display = 'flex';
        result.innerText = 'Egalité';
    } else if(i === 0 && playerPlay === 'paper') {
        resultMessage.style.display = 'flex';
        result.innerText = 'Victoire';
    } else if ( i === 0 && playerPlay === 'cissors'){
        resultMessage.style.display = 'flex';
        result.innerText = 'Defaite';
    } else if(i === 1 && playerPlay === 'stone') {
        resultMessage.style.display = 'flex';
        result.innerText = 'Defaite';
    } else if(i === 1 && playerPlay === 'paper') {
        resultMessage.style.display = 'flex';
        result.innerText = 'Egalité';
    } else if ( i === 1 && playerPlay === 'cissors'){
        resultMessage.style.display = 'flex';
        result.innerText = 'Victoire';
    } else if(i === 2 && playerPlay === 'stone') {
        resultMessage.style.display = 'flex';
        result.innerText = 'Victoire';
    } else if(i === 2 && playerPlay === 'paper') {
        resultMessage.style.display = 'flex';
        result.innerText = 'Defaite';
    } else if ( i === 2 && playerPlay === 'cissors'){
        resultMessage.style.display = 'flex';
        result.innerText = 'Egalité';
    } else {
        resultMessage.style.display = 'flex';
        result.innerText = 'Erreur';
    }
}

const playersBtn = [playerStone, playerPaper, playerCissors];

const computersArrays = [computerStone,computerPaper,computerCissors]

function randomPlay() {
    computerRandomPlay = Math.floor(Math.random() * computersArrays.length)
    i = computerRandomPlay
}

