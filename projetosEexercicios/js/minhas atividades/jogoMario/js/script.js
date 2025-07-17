const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const contadorH1 = document.querySelector('#contador')
const gameover = document.querySelector("#gameover") 
const restartDiv = document.querySelector("#restartDiv")
const restart = document.querySelector("#restart")
const gameoverH1 = document.querySelector("#gameoverH1")
let contador = 0
const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const contadorTimer = setInterval(() => {
   contador = contador + 1
   contadorH1.innerText = `Contador de pontos = ${contador}`
}, 1000)


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none'
        pipe.style.left =`${pipePosition}px`
        mario.style.animation = 'none'
        mario.style.bottom =`${marioPosition}px`
        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        restartDiv.style.display = 'block'
        gameover.style.display = 'block'
        clearInterval(loop)
        clearInterval(contadorTimer)
        gameoverH1.innerText = "GAME-OVER!"
        
    
    }
}, 10)


restart.addEventListener("click", () => {
    location.reload();
}) 
document.addEventListener('keydown', jump)