
import Grid from "./classes/Grid.js"
import Invader from "./classes/Invader.js"
import Particle from "./classes/Particle.js"
import Player from "./classes/Player.js"
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.imageSmoothingEnabled = false;

const player = new Player(canvas.width, canvas.height);
const grid = new Grid(3, 6);
const playerPtojectiles = []
const invadersPtojectiles = []
const keys = {
    left: false,
    right: false,
    shoot: {
        pressed: false,
        released: true,
    },
};

const drawProjectiles = () => {

    const projectiles = [...playerPtojectiles, ...invadersPtojectiles]

    projectiles.forEach((projectile) => {
        projectile.draw(ctx) // vai utilizar o metedo draw da class invader
        projectile.update()
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
const checkShootInvaders = () => {
    grid.invaders.forEach((invader, invaderIndex) => {
        playerPtojectiles.some((projectile, projectileIndex) => {
            if(invader.hit(projectile)){
                grid.invaders.splice(invaderIndex, 1) // para remover o invader q foi atingido
                playerPtojectiles.splice(projectileIndex, 1) // para remover o projetil 
            }
        })
    })
}

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height) // para limpar o canvas

    drawProjectiles()
    clearProjectiles()

    checkShootInvaders() 

    grid.draw(ctx)
    //grid.update()
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
        player.shoot(playerPtojectiles)
        keys.shoot.released = false
    }
    // volta para posicao original 
    ctx.translate(- player.position.x - player.width / 2, - player.position.y - player.height / 2  )
    player.draw(ctx)
    // para restarar dps de desenhas, e dps dele rotacionar
    ctx.restore()
    window.requestAnimationFrame(gameLoop) // para fazer o loop
}

window.addEventListener("keydown",  (event) => {
    const key = event.key.toLowerCase()
    if (key === "a") keys.left = true
    if (key === "d") keys.right = true
    if (key === "enter") keys.shoot.pressed = true
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

// para fazer os disparos dos invaders
// setInterval(() => {
//     const invader = grid.getRandomInvader()
//     if (invader) {
//         invader.shoot(invadersPtojectiles)
//     }
// }, 1000)

gameLoop()