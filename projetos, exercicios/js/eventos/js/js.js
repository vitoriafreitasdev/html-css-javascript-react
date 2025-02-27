// adicionando eventos

const bnt = document.querySelector("#my-button")


bnt.addEventListener("click", function() {
    console.log("Clicou aqui!")
})

// removendo evento 

const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("teste")
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// argumento do evento

const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})

// propagaçao

const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Evento 2")
})

// removendo evento padrao

const a = document.querySelector("a")

a.addEventListener("click", (e) =>{
    e.preventDefault()

    console.log("Não alterou a página")
})

// eventos de tecla

document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`)
})

// eventos de mouse
const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão")
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão")
})

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo")
})

// movimentando o mouse

document.addEventListener("mousedown", (e) => {
    //console.log(`No eixo X: ${e.x}`)
    //console.log(`No eixo Y: ${e.y}`)
})

// evento de scroll
window.addEventListener("scroll", (e) =>{
    if(window.scrollY  > 200) {
        console.log("passando de 200px")
    }
})

const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
    input.style.backgroundColor = "lightblue"
})

input.addEventListener("blur", (e) => {
    console.log("Saiu do input")
    input.style.backgroundColor = "white"
})

// evento de carregamento

window.addEventListener("load", () => {
    console.log("A página carregou")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault()
    e.returnValue = ""
})

// debounce

const debounce = (f, delay) => {

    let timeout 

    return (...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener("mousemove", 
    debounce(() => {
    console.log("Executando a cada 400ms")
}, 400)
)