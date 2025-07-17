class SoundEffects {
    constructor(){
        this.shootSounds = [
            new Audio("scr/assests/audio/shoot.mp3"),
            new Audio("scr/assests/audio/shoot.mp3"),
            new Audio("scr/assests/audio/shoot.mp3"),
            new Audio("scr/assests/audio/shoot.mp3"),
            new Audio("scr/assests/audio/shoot.mp3"),
        ]

        this.hitSounds = [
            new Audio("scr/assests/audio/hit.mp3"),
            new Audio("scr/assests/audio/hit.mp3"),
            new Audio("scr/assests/audio/hit.mp3"),
            new Audio("scr/assests/audio/hit.mp3"),
            new Audio("scr/assests/audio/hit.mp3"),
        ]

        this.explosionSound = new Audio("scr/assests/audio/explosion.mp3")
        this.nextLevelSound = new Audio("scr/assests/audio/next_level.mp3")

        this.currentShootSound = 0
        this.currentHitSound = 0

        this.adjustVolumes()
    }

    playShootSound() {
        this.shootSounds[this.currentShootSound].currentTime = 0
        this.shootSounds[this.currentShootSound].play()
        this.currentShootSound = (this.currentShootSound + 1) % this.shootSounds.length
    }

    playHitSound() {
        this.hitSounds[this.currentShootSound].currentTime = 0
        this.hitSounds[this.currentShootSound].play()
        this.currentHitSound = (this.currentHitSound + 1) % this.hitSounds.length
    }

    playExplosionSound() {
        this.explosionSound.play()
    }

    playNextLevelSound() {
        this.nextLevelSound.play()
    }

    adjustVolumes(){
        this.hitSounds.forEach(sound => (sound.volume = 0.2))
        this.shootSounds.forEach(sound => (sound.volume = 0.5))
        this.explosionSound.volume = 0.2
        this.nextLevelSound.volume = 0.4   
    }
}

export default SoundEffects