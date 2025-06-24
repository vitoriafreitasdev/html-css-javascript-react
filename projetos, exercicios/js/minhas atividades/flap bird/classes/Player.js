import { flapBird } from "../utis/consts"

class Player {
    constructor(canvasWidth, canvasHeight){
        this.alive = true
        this.height = 128 / 2 + 30
        this.width = 128 / 2 + 30
        this.velocity = 8
        this.position = {
            x: canvasWidth / 2 - this.width / 2,
            y: canvasHeight - this.height - 30
        }
        this.image = this.getImage(flapBird)
    }
    getImage(path){
        const image = new Image()
        image.src = path
        return image
    }

    // passos a si fazer, 1 desenhar o player na tela, 2 passo a movimentacao de voar, apertar setinha pra cima, soma o y, pra baixo diminui o y(ou o acontrario, realizar testes para saber o correto)
}