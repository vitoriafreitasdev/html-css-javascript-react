import Player from "./classes/Player.js"
import Projectile from "./classes/Projetile.js"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.imageSmoothingEnabled = false;

const player = new Player(canvas.width, canvas.height);

const keys = {
    left: false,
    right: false,
    shoot: {
        pressed: false,
        released: true,
    }
}

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height) // para limpar o canvas
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
})

window.addEventListener("keyup",  (event) => {
    const key = event.key.toLowerCase()
    if (key === "a") keys.left = false
    if (key === "d") keys.right = false
})

gameLoop()