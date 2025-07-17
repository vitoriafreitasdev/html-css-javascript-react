const nome = document.querySelector("#name")
const formBtn = document.querySelector("#enviarFormBtn")
const raca = document.querySelector("#raca")
const genero = document.querySelector("#genero")

const hideIni = document.querySelector(".hideIni")
const hideForm = document.querySelector(".hideForm")
const hideDes = document.querySelector(".hideDes")
const hideQuaseFim = document.querySelector(".hideQuaseFim")

const h2 = document.querySelector("#h2")
const pResDadoArma = document.querySelector("#pResDadoArma")
const pResDado = document.querySelector("#pResDado")

const baterBtn = document.querySelector("#baterBtn")
const dadoArmaBtn = document.querySelector("#dadoArma")
const resDoDadoArma = document.querySelector("#resDoDadoArma")
const resDoDano = document.querySelector("#resDoDano")

const caminho = document.querySelector("#caminho")
const caminhoBtn = document.querySelector("#caminhoBtn") 
const caminhoRes = document.querySelector("#caminhoRes")

const img = document.createElement('img')
img.setAttribute('id', 'foto')

let danoTomado;
let arma;
let vidaInimiga = 13
let forteInimigoVida = 30
let inimigo1FracoVida = 15
let inimigo2FracoVida = 15

formBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    const nomeJogador = nome.value
    const racaJogador = raca.value
    const generoJogador = genero.value

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
            pResDadoArma.innerText = "Voê ganhou => Arma: Espada de Sangue de Prata (Dano: 10 de 13)"
            arma = "Espada de Sangue de Prata (Dano: 10 de 13)"
            break
        case 6:
            img.setAttribute('src', 'img/dadoFace6.png')
            pResDadoArma.innerText = "Voê ganhou => Arma: Aerondight (Dano: 13 de 13)"
            arma = "Arma: Aerondight (Dano: 13 de 13)"
            break            
        default:
            return
    }
    resDoDadoArma.appendChild(img)
    hideDes.style.display = "block"
})

baterBtn.addEventListener("click", () => {

    if(arma === "Espada Enferrujada (Dano: 1 de 13)" && vidaInimiga <= 13 && vidaInimiga > 0){
        vidaInimiga = vidaInimiga - 1
        pResDado.innerText = `Dano muito baixo, você causou apenas 1 de dano, vida inimiga: ${vidaInimiga}, bata novamente, até finilizar!`
    } else if(arma === "Espada de Ferro (Dano: 3 de 13)" && vidaInimiga <= 13 && vidaInimiga > 0){
        vidaInimiga = vidaInimiga - 3
        pResDado.innerText = `Você causou apenas 3 de dano, vida inimiga: ${vidaInimiga}, bata novamente, até finilizar!`

    } else if(arma === "Katana de Aço (Dano: 5 de 13)" && vidaInimiga <= 13 && vidaInimiga > 0){
        vidaInimiga = vidaInimiga - 5
        pResDado.innerText = `Você causou 5 de dano, vida inimiga: ${vidaInimiga}, bata novamente, até finilizar!`
    } else if(arma === "Duas Katana de Aço (Dano: 7 de 13)" && vidaInimiga <= 13 && vidaInimiga > 0){
        vidaInimiga = vidaInimiga - 7
        pResDado.innerText = `Você causou 7 de dano, vida inimiga: ${vidaInimiga}, bata novamente, até finilizar!`
    } else if(arma === "Espada de Sangue de Prata (Dano: 10 de 13)" && vidaInimiga <= 13 && vidaInimiga > 0){
        vidaInimiga = vidaInimiga - 10
        pResDado.innerText = `Você causou 10 de dano, vida inimiga: ${vidaInimiga}, bata novamente, até finilizar!`
    } else if(arma ===  "Arma: Aerondight (Dano: 13 de 13)" && vidaInimiga <= 13 && vidaInimiga > 0){
        vidaInimiga = vidaInimiga - 13
        pResDado.innerText = `Você causou 13 de dano, vida inimiga: ${vidaInimiga}, bata mais uma vez para finalizar!` 
    } else if (vidaInimiga <= 0){
        pResDado.innerText = "Você o matou!"
        vidaInimiga = 0
        hideQuaseFim.style.display = "block"
    }
})

caminhoBtn.addEventListener("click", () => {
    //continuar criar a parte do caminho claro
    const caminhoValue = caminho.value.toLowerCase().trim()
    const pIni = document.createElement("p")
    const hitButton = document.createElement("button")
    hitButton.classList.add("hitButton")
    if(caminhoValue === "escuro") {
       pIni.innerText = "Inimigo que tem a aparência rochosa com 3,25 de altura na sua frente."
       if(arma != "Arma: Aerondight (Dano: 13 de 13)") {
        pIni.innerText += " Mas você recebe uma arma: Íris (dano: 11)"
        arma = "Íris (dano: 11)"
       }
       hitButton.innerHTML = "Bater"
       caminhoRes.appendChild(pIni)
       caminhoRes.appendChild(hitButton)
       hitButton.addEventListener("click", () =>{
        forteInimigoVida -= 11
        pIni.innerText = `${forteInimigoVida}`
        if(forteInimigoVida <= 0){
            pIni.innerText = "Matou! Finalizou!"
        }
       })

    } else if(caminhoValue === "claro"){
       pIni.innerText = "Dois inimigos a sua frente, um é baixo feito de gelo, outro alto feito de fogo"
       if(arma != "Arma: Aerondight (Dano: 13 de 13)") {
        pIni.innerText += " Mas você recebe uma arma: Íris (dano: 11)"
        arma = "Íris (dano: 11)"
       }
       hitButton.innerHTML = "Bater"
       caminhoRes.appendChild(pIni)
       caminhoRes.appendChild(hitButton)
       hitButton.addEventListener("click", () =>{
        inimigo1FracoVida -= 11
        inimigo2FracoVida -= 11
        pIni.innerText = `Vida do inimigo de gelo: ${inimigo1FracoVida}. Vida do inimigo de fogo: ${inimigo2FracoVida}`
       
        if(inimigo1FracoVida <= 0 && inimigo2FracoVida <= 0){
            pIni.innerText = "Matou! Finalizou!"
        }
       })

    } else{
        caminhoRes.innerText = "Escreva 'claro' ou 'escuro' para fazer sua escolha."
    }
})
