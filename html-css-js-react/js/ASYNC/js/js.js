// setTimeout
/*
console.log("Ainda não executou!")

setTimeout(function () {
    console.log("Requisição assíncrona")
}, 2000)

console.log("Ainda não executou 2")
*/
/*
function contagemRegressiva(segundos){
    if (segundos < 0) return

    console.log(segundos)

    setTimeout(function () {
        contagemRegressiva(segundos - 1)
    }, 1000)
   
}

*/
/*
function pedidoDelivery(){
    console.log("Pedido recebido. Estamos preparando seu pedido...")

    setTimeout(function (){
    console.log("Pedido pronto para retirada!")
    }, 3000)
}

pedidoDelivery()*/
/*
function piscarTexto(texto, vezes) {
    let contador = 0;

    function piscar() {
        if (contador >= vezes * 2) return; // Condição de parada

        if (contador % 2 === 0) {
            console.log(texto); // Exibe o texto
        } else {
            console.clear(); // Limpa o console
        }

        contador++; // Incrementa o contador
        setTimeout(piscar, 500); // Agenda a próxima "piscada" após 500ms
    }

    piscar(); // Inicia o processo
}

// Teste a função
piscarTexto("ola", 3)
*/
// função setInternal

//setInterval(function(){
    //console.log("Intervalo assíncrono")
//}, 3000)

// promise

/*
const promessa = Promise.resolve(5 + 5)

console.log("Algum código")

promessa
    .then((value) => {
    console.log(`A soma é ${value}`)
    return value
    })
    .then((value) => value - 1)
    .then((value) => console.log(`Agora é ${value}`))

console.log("Outro código")

// falha na promise

Promise.resolve(4 * "asd")
    .then((n) => {
    if(Number.isNaN(n)) {
        throw new Error("Valores inválidos")
    }
    })
    .catch((err) => console.log(`um erro ocorreu: ${err}`))

*/
// rejeição
/*
function checkNumber(n) {
    return new Promise((resolve, reject) => {

        if(n > 10) {
            resolve(`O número é maior que 10`)
        } else {
            reject(new Error("Número muito baixo"))
        }

    })
}

const a = checkNumber(20)
const b = checkNumber(10)

a.then((v) => console.log(`O resultado é ${v}`)). catch((err) => console.log(`Um erro ocorreu: ${err}`))*/


// resolvendo varias promises

const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10)
    }, 1000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
    if(30 > 1) {
        resolve(30)
    } else {
        reject("Erro!")
    }
})

Promise.all([p1, p2, p3]).then((values) => console.log(values))