
import { INICIAL_FRAME, PATH_ENGINE_IMAGE, PATH_ENGINE_SPRITES, PATH_SPACESHIP_IMAGE } from "../utils/constante.js";

class Player {
    constructor(canvasWidth, canvasHeight) {
        this.width = 48 * 2;
        this.height = 48 * 2;
        this.velocity = 8
        this.position = {
            x: canvasWidth/ 2 - this.width / 2,
            y: canvasHeight - this.height - 30,
        }
        this.image = this.getImage(PATH_SPACESHIP_IMAGE);
        this.engineImage = this.getImage(PATH_ENGINE_IMAGE);
        this.engineSprites = this.getImage(PATH_ENGINE_SPRITES);

        this.sx = 0 // para animacao dos sprites do motor (a posição  dele)
        this.framesCounter = INICIAL_FRAME
    }
    getImage(path) {
        const image = new Image();
        image.src = path;
        return image;
    }

    moveLeft(){
        this.position.x -= this.velocity;
    }
    moveRight(){
        this.position.x += this.velocity;
    }
    draw(ctx){
        
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width ,
            this.height,
        );
        ctx.drawImage(
            this.engineSprites,
            this.sx,
            0,
            48,
            48,
            this.position.x,
            this.position.y + 10,
            this.width ,
            this.height,
            
        );
        ctx.drawImage(
            this.engineImage,
            this.position.x,
            this.position.y + 8,
            this.width ,
            this.height,
        );
        this.update()
    }
    update(){

        if (this.framesCounter === 0) {
            this.sx = this.sx === 96 ? 0 : this.sx + 48 // this.sx recebe 0 se for igual a 96, se nao adiciona mais 48, assim fazendo as troca de imagem do motor, igual no if e else comentado embaixo
            /* 
                if(this.sx === 96) {
                    this.sx = 0    
                } else {
                    this.sx += 48 
                }
            */
            this.framesCounter = INICIAL_FRAME
        } else {
            this.framesCounter --
        }

        
    }
}


export default Player;
