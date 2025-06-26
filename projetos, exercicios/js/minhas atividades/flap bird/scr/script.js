import Player from "./classes/Player.js";

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.imageSmoothingEnabled = false;

const player = new Player(canvas.width, canvas.height)

const keys = {
    up: false,
    down: false,
    right: false,
    left: false
}

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height) 
    player.draw(ctx)

    if(keys.up && player.position.y >= 0){
        player.moveUp()
    }
    if(keys.down && player.position.y <= canvas.height - player.height){
        player.moveDown()
    }
    if(keys.right  && player.position.x <= canvas.width  - player.width){
        player.moveRight()
    } 
    if(keys.left  && player.position.x >= 0){
        player.moveLeft()
    }

    window.requestAnimationFrame(gameLoop)
}

window.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase()

    if (key === "w") keys.up = true
    if (key === "s") keys.down = true
    if (key === "d") keys.right = true
    if (key === "a") keys.left = true
    
})
window.addEventListener("keyup", (e) => {
    const key = e.key.toLowerCase()

    if (key === "w") keys.up = false
    if (key === "s") keys.down = false
    if (key === "d") keys.right = false
    if (key === "a") keys.left = false
    
})

gameLoop()