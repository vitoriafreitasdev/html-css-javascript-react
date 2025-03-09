
let baseInput = document.getElementById("base")
let expoenteInput = document.getElementById("expoente")
let formEntrada = document.getElementById("formEntrada")
let numTitulo = document.getElementById("numTitulo")
let resultados = document.getElementById("resultados")

let calcular = (baseNum, expoenteNum) => {
    
    resultados.innerHTML = ""
    
    let result = 1

    for(i = 1; i <= expoenteNum; i++){
        result = baseNum**i

        let template = `<div class="row"> 
                    <div class="operation"> ${baseNum} ^ ${i} = </div>
                    <div class="result"> ${result} </div>
                        </div>`
        
        let parse = new DOMParser()

        let templateHtml = parse.parseFromString(template, "text/html")

        let row = templateHtml.querySelector(".row")

        resultados.appendChild(row)

    }

    numTitulo.innerHTML = `${baseNum} elevado a ${expoenteNum}`
    
}


formEntrada.addEventListener("submit", (e) =>{
    e.preventDefault()

    let base = +baseInput.value
    let expoente = +expoenteInput.value

    if(!base || !expoente) return

    calcular(base, expoente)
})