const nome = document.querySelector("#name")
const formBtn = document.querySelector("#enviarFormBtn")
const raca = document.querySelector("#raca")
const genero = document.querySelector("#genero")

const hideIni = document.querySelector(".hideIni")
const hideForm = document.querySelector(".hideForm")
const hideDes = document.querySelector(".hideDes")

const h2 = document.querySelector("#h2")
const pResDadoArma = document.querySelector("#pResDadoArma")
const pResDado = document.querySelector("#pResDado")

const dadoDano = document.querySelector("#dadoDano")
const dadoArmaBtn = document.querySelector("#dadoArma")
const resDoDadoArma = document.querySelector("#resDoDadoArma")
const resDoDano = document.querySelector("#resDoDano")

const img = document.createElement('img')
img.setAttribute('id', 'foto')

let arma;

formBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    const nomeJogador = nome.value
    const racaJogador = raca.value
    const generoJogador = genero.value

    console.log(nomeJogador)
    console.log(racaJogador)
    console.log(generoJogador)

    if(!nomeJogador) return
    
    hideIni.style.display = "block"
    hideForm.style.display = "none"
    h2.innerText += ` ${nomeJogador}`

})

dadoArmaBtn.addEventListener("click", () =>{
    
    resDoDadoArma.innerHTML = " "
    const numDados = [1, 2, 3, 4, 5, 6]
    const resNumDados = numDados[Math.floor(Math.random() * numDados.length)]
    console.log(resNumDados)
    
    switch(resNumDados){
        case 1:
            img.setAttribute('src', 'img/dadoFace1.png')
            pResDadoArma.innerText = "Voê ganhou => Arma: Espada Enferrujada (Dano: 1 de 13)"
            arma = "Espada Enferrujada (Dano: 1 de 13)"
            break
        case 2:
            img.setAttribute('src', 'img/dadoFace2.png')
            pResDadoArma.innerText = "Voê ganhou => Arma: Espada de Ferro (Dano: 3 de 13)"
            arma = "Espada de Ferro (Dano: 3 de 13)"
            break
        case 3:
            img.setAttribute('src', 'img/dadoFace3.png')
            pResDadoArma.innerText = "Voê ganhou => Arma: Katana de Aço (Dano: 5 de 13)"
            arma = "Katana de Aço (Dano: 5 de 13)"
            break
        case 4:
            img.setAttribute('src', 'img/dadoFace4.png')
            pResDadoArma.innerText = "Voê ganhou => Arma: Duas Katana de Aço (Dano: 7 de 13)"
            arma = "Duas Katana de Aço (Dano: 7 de 13)"
            break
        case 5:
            img.setAttribute('src', 'img/dadoFace5.png')
            pResDadoArma.innerText = "Voê ganhou => Arma: Espada de Sangue de Prata (Dano: 9 de 13)"
            arma = "Espada de Sangue de Prata (Dano: 9 de 13)"
            break
        case 6:
            img.setAttribute('src', 'img/dadoFace6.png')
            pResDadoArma.innerText = "Voê ganhou => Arma: Aerondight (Dano: 11 de 13)"
            arma = "Arma: Aerondight (Dano: 11 de 13)"
            break            
        default:
            return
    }
    resDoDadoArma.appendChild(img)
    hideDes.style.display = "block"
})

dadoDano.addEventListener("click", () => {
    const numDados = [1, 2, 3, 4, 5, 6]
    const resNumDados = numDados[Math.floor(Math.random() * numDados.length)]
    switch(resNumDados){
        case 1:
            img.setAttribute('src', 'img/dadoFace1.png')
            pResDado.innerText = "..."

            break
        case 2:
            img.setAttribute('src', 'img/dadoFace2.png')
            pResDado.innerText = "..."

            break
        case 3:
            img.setAttribute('src', 'img/dadoFace3.png')
            pResDado.innerText = "..."
               break
        case 4:
            img.setAttribute('src', 'img/dadoFace4.png')
            pResDado.innerText = "..."
            
            break
        case 5:
            img.setAttribute('src', 'img/dadoFace5.png')
            pResDado.innerText = "..."
    
            break
        case 6:
            img.setAttribute('src', 'img/dadoFace6.png')
            pResDado.innerText = "..."
            break            
        default:
            return
    }
    resDoDano.appendChild(img)

    
})