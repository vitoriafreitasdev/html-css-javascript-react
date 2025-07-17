// botões de adicionar as pizzas
const adiPrecoBtnCal = document.querySelector("#adicionarPrecoCal")
const adiPrecoBtnPor = document.querySelector("#adicionarPrecoPor")
const adiPrecoBtnFran = document.querySelector("#adicionarPrecoFran")
const adiPrecoBtnPep = document.querySelector("#adicionarPrecoPep")
// preços das pizzas
const calPreco = document.querySelector("#calpreco")
const porPreco = document.querySelector("#porpreco")
const franPreco = document.querySelector("#franpreco")
const pepPreco = document.querySelector("#peppreco")
// divs
const divConteudo = document.querySelector("#conteudo")
const divCarrinho = document.querySelector("#carrinho")
const divFinalizar = document.querySelector("#finalizar")
const divResultado = document.querySelector("#resultado")
// botões SIM e NAO
const btnSim = document.querySelector("#botaosim")
const btnNao = document.querySelector("#botaonao")
// preço total e atual
const precoAtual = document.querySelector("#valorAtual")
const precoTotal = document.querySelector("#precoTotal")
const valorResultado = document.querySelector("#valorResultado")
// botão de finalizar
const finalizarCompraBtn = document.querySelector("#btnFinalizarCompra")

const valorCalabresa = +calPreco.innerText
const valorPortuguesa = +porPreco.innerText
const valorFrango = +franPreco.innerText
const valorPeperoni = +pepPreco.innerText

let valorAtual = 0

// eventos
adiPrecoBtnCal.addEventListener("click", () => {
    divConteudo.style.display = "none"
    divCarrinho.style.display = "block"

    valorAtual = valorAtual + valorCalabresa
    precoAtual.innerText = ` ${(valorAtual).toFixed(2)} reais`
    
})

adiPrecoBtnPor.addEventListener("click", () =>{
    divConteudo.style.display = "none"
    divCarrinho.style.display = "block"

    valorAtual = valorAtual + valorCalabresa
    precoAtual.innerText = ` ${(valorAtual).toFixed(2)} reais`
})

adiPrecoBtnFran.addEventListener("click", () =>{
    divConteudo.style.display = "none"
    divCarrinho.style.display = "block"

    valorAtual = valorAtual + valorFrango
    precoAtual.innerText = ` ${(valorAtual).toFixed(2)} reais`
})

adiPrecoBtnPep.addEventListener("click", () =>{
    divConteudo.style.display = "none"
    divCarrinho.style.display = "block"

    valorAtual = valorAtual + valorPeperoni
    precoAtual.innerText = ` ${(valorAtual).toFixed(2)} reais`
})

finalizarCompraBtn.addEventListener("click", () => {
    divConteudo.style.display = "none"
    divCarrinho.style.display = "none"
    divFinalizar.style.display = "none"

    divResultado.style.display = "block"

    valorResultado.innerText += ` ${(valorAtual).toFixed(2)} reais`
})

btnNao.addEventListener("click", () =>{
    divConteudo.style.display = "block"
    divCarrinho.style.display = "none"
    divFinalizar.style.display = "none"

})

btnSim.addEventListener("click", () =>{
    divConteudo.style.display = "none"
    divCarrinho.style.display = "none"
    divFinalizar.style.display = "flex"

    precoTotal.innerText = ` ${(valorAtual).toFixed(2)} reais`

})