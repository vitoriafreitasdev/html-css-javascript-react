import { flapBird } from "../utis/consts.js"


class Player {
    constructor(canvasWidth, canvasHeight){
        this.alive = true
        this.height = 128 / 2 + 30
        this.width = 128 / 2 + 30
        this.velocity = 12
        this.position = {
            x: canvasWidth / 2 - 570  - this.width / 2 + 30 ,
            y: canvasHeight - this.height - 250 
        }
        this.image = this.getImage(flapBird)
    }
    getImage(path){
        const image = new Image()
        image.src = path
        return image
    }

    draw(ctx){
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }

    moveUp(){
        this.position.y -= this.velocity
    }

    moveDown(){
        this.position.y += this.velocity
    }


    moveLeft(){
        this.position.x -= this.velocity
    }

    moveRight(){
        this.position.x += this.velocity
    }


    // soma y desce, subtrai y ele sobe, soma x ele vai pra direita, subtrai vai esquerda
}

export default Player;