
import Grid from "./classes/Grid.js"
import Particle from "./classes/Particle.js"
import Player from "./classes/Player.js"
import Obstacle from "./classes/Obstacle.js"
import { GameState } from "./utils/constante.js"
import SoundEffects from "./classes/SoundEffect.js"

const soundEffects = new SoundEffects

const startScreen = document.querySelector(".start-screen")
const gameOverScreen = document.querySelector(".game-over")
const scoreUi = document.querySelector(".score-ui")
// const scoreElement = scoreUi.querySelector(".score > span")
// const levelElement = scoreUi.querySelector(".level > span")
// const highElement = scoreElement.querySelector(".high > span")

const scoreElement = document.querySelector("#score")
const levelElement = document.querySelector("#level")
const highElement = document.querySelector("#high")

const buttonPlay = document.querySelector(".button-play")
const buttonRestart = document.querySelector(".button-restart")


gameOverScreen.remove()

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.imageSmoothingEnabled = false;

let currentState = GameState.START 

const gameData = {
    score: 0,
    level: 1,
    high: 0,
};

const showGameData = () => {
    scoreElement.textContent = gameData.score;
    levelElement.textContent = gameData.level;
    highElement.textContent = gameData.high;
};


const incrementScore = (value) => {
    gameData.score += value

    if(gameData.score > gameData.high) {
        gameData.high = gameData.score
    }
}

const player = new Player(canvas.width, canvas.height);
const grid = new Grid(3, 6);
const playerPtojectiles = []
const invadersPtojectiles = []
const particles = []
const obstacles = []

const initObstacles = () => {
    const x = canvas.width / 2 - 50
    const y = canvas.height - 250
    const offset = canvas.width * 0.15
    const color = "crimson"

    const obstacle1 = new Obstacle({x: x - offset, y}, 100, 20, color)
    const obstacle2 = new Obstacle({x: x + offset, y}, 100, 20, color)

    obstacles.push(obstacle1)
    obstacles.push(obstacle2)
}

initObstacles()

const keys = {
    left: false,
    right: false,
    shoot: {
        pressed: false,
        released: true,
    },
};

const drawObstacles = () => {
    obstacles.forEach((obstacle) => obstacle.draw(ctx))
}


const drawProjectiles = () => {

    const projectiles = [...playerPtojectiles, ...invadersPtojectiles]

    projectiles.forEach((projectile) => {
        projectile.draw(ctx) // vai utilizar o metedo draw da class invader
        projectile.update()
    })


}

const drawParticles = () => {
    particles.forEach((particle) => {
        particle.draw(ctx)
        particle.update()
    })
}

const clearProjectiles = () => {
    playerPtojectiles.forEach((projectile, index) => {
        // dps q o projeteis sair da tela vao ser removidos 
        if(projectile.position.y <= 0){
            playerPtojectiles.splice(index, 1) // para fazer a remoção dos projeteis na memoria, dps q eles sairem da tela
        }
    })
}

const clearParticle = () => {
    particles.forEach((particle, i) => {
        if (particle.opacity <= 0) {
            particles.splice(i, 1)
        }
        
    })
}

const createExploxion = (position, size, color) => {
    for (let i = 0; i < size; i += 1){
        const particle = new Particle(
            {
                x: position.x,
                y: position.y,
            },
            {
                x: Math.random() -0.5 * 1.5,
                y: Math.random() -0.5 * 1.5,
            },
            2,
            color
        )
        particles.push(particle)
    }
}

const checkShootInvaders = () => {
    grid.invaders.forEach((invader, invaderIndex) => {
        playerPtojectiles.some((projectile, projectileIndex) => {
            if(invader.hit(projectile)){
                soundEffects.playHitSound()

                createExploxion(
                    {
                    x: invader.position.x + invader.width / 2, // para explosao ir pro centro dele
                    y: invader.position.y + invader.height / 2,
                    },
                    10,
                    "#941CFF"
                )

                incrementScore(10)

                grid.invaders.splice(invaderIndex, 1) // para remover o invader q foi atingido
                playerPtojectiles.splice(projectileIndex, 1) // para remover o projetil 
            }
        })
    })
}

const checkShootPlayer = () => {
    invadersPtojectiles.some((projectile, index) => {
        if (player.hit(projectile)) {
            soundEffects.playExplosionSound()
            invadersPtojectiles.splice(index, 1);
            gameOver();
        }
    });
};

const checkShootObstacles = () => {
    obstacles.forEach((obstacle) => {
        playerPtojectiles.some((projectile, i) => {
            if(obstacle.hit(projectile)) {
                playerPtojectiles.splice(i, 1)
            }
        })

        invadersPtojectiles.some((projectile, i) => {
            if(obstacle.hit(projectile)) {
                invadersPtojectiles.splice(i, 1)
            }
        })
    })
}
const spawnGrid = () => {
    if(grid.invaders.length === 0){
        soundEffects.playNextLevelSound()
        grid.rows = Math.round(Math.random() * 9 + 1)
        grid.cols = Math.round(Math.random() * 9 + 1)
        grid.restart()

        gameData.level += 1
    }
}

const gameOver = () => {
    createExploxion({x: player.position.x + player.width / 2, y: player.position.y + player.height / 2}, 10, "white")
    createExploxion({x: player.position.x + player.width / 2, y: player.position.y + player.height / 2}, 10, "#4D9BE6")
    createExploxion({x: player.position.x + player.width / 2, y: player.position.y + player.height / 2}, 10, "crimson")

    currentState = GameState.GAME_OVER
    player.alive = false

    document.body.append(gameOverScreen)
}

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height) // para limpar o canvas

    if(currentState == GameState.PLAYING){
        showGameData()
        spawnGrid()

        drawProjectiles()
        drawParticles()
        drawObstacles()

        clearProjectiles()
        clearParticle()

        checkShootInvaders() 
        checkShootPlayer()
        checkShootObstacles()
        

        grid.draw(ctx)
        grid.update(player.alive)
        // para salvar o contexto
        ctx.save()
        // para mover o contexto(canvas) para onde o player estava para funcionar a rotação quando precionar para os lado
        ctx.translate(player.position.x + player.width / 2, player.position.y + player.height / 2  )

        if(keys.left && player.position.x >= 0){
            player.moveLeft()
            ctx.rotate(-0.15)
        }
        if(keys.right && player.position.x <= canvas.width - player.width){
            player.moveRight()
            ctx.rotate(0.15)
        }
        if(keys.shoot.pressed && keys.shoot.released) {
            soundEffects.playShootSound()
            player.shoot(playerPtojectiles)
            keys.shoot.released = false
        }
        // volta para posicao original 
        ctx.translate(- player.position.x - player.width / 2, - player.position.y - player.height / 2  )
        player.draw(ctx)
        // para restarar dps de desenhas, e dps dele rotacionar
        ctx.restore()
    }

    if(currentState == GameState.GAME_OVER){
        checkShootObstacles()
        drawParticles()
        drawProjectiles()
        drawObstacles()

        clearProjectiles()
        clearParticle()

        grid.draw(ctx)
        grid.update(player.alive)
    }
    
    window.requestAnimationFrame(gameLoop) // para fazer o loop
}

window.addEventListener("keydown",  (event) => {
    const key = event.key.toLowerCase()
    if (key === "a") keys.left = true
    if (key === "d") keys.right = true
    if (key === "enter") keys.shoot.pressed = true
    console.log(key)
})

window.addEventListener("keyup",  (event) => {
    const key = event.key.toLowerCase()
    if (key === "a") keys.left = false
    if (key === "d") keys.right = false
    if (key === "enter") {
        keys.shoot.pressed = false
        keys.shoot.released = true
    }
})



buttonPlay.addEventListener("click", () => {
    startScreen.remove()
    scoreUi.style.display = "block"
    currentState = GameState.PLAYING

    // para fazer os disparos dos invaders
    setInterval(() => {
        const invader = grid.getRandomInvader()
        if (invader) {
            invader.shoot(invadersPtojectiles)
        }
    }, 1000)
})

buttonRestart.addEventListener("click", () => {
    currentState = GameState.PLAYING
    player.alive = true

    grid.invaders.length = 0
    grid.invadersVelocity = 1

    invadersPtojectiles.length = 0

    gameData.score = 0
    gameData.level = 0

    gameOverScreen.remove()
})



gameLoop()