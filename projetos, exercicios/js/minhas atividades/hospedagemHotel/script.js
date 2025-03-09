const quarto1 = document.getElementById("hotel1")
const quarto2 = document.getElementById("hotel2")
const quarto3 = document.getElementById("hotel3")

let quant1QuartosDispo = true
let quant2QuartosDispo = true
let quant3QuartosDispo = true

quarto1.addEventListener("click", () => {
    
    if(quant1QuartosDispo === true) {
        alert("aluguel concluido")
        quant1QuartosDispo = false
    } else {
        alert("quarto indisponível")
    }
})

quarto2.addEventListener("click", () => {
    
    if(quant2QuartosDispo === true) {
        alert("aluguel concluido")
        quant2QuartosDispo = false
    } else {
        alert("quarto indisponível")
    }
})

quarto3.addEventListener("click", () => {
    
    if(quant3QuartosDispo === true) {
        alert("aluguel concluido")
        quant3QuartosDispo = false
    } else {
        alert("quarto indisponível")
    }
})