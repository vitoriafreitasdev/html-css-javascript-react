class Particle {
    constructor(position, velocity, radius, color){
        this.position = position;
        this.velocity = velocity;
        this.radius = radius;
        this.color = color;
        this.opacity =  1;
    }
    
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(
            this.position.x,
            this.position.y,
            this.radius,
            0,
            Math.PI * 2 // para desenhar um arco completo, meio arco seria so Math.PI
        )
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }

    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

export default Particle;