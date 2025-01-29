// criando uma função
/*
function minhaFuncao(){
    console.log("Testando")
}

minhaFuncao()

const minhaFuncaoEmVariavel = function (){
    console.log("Função em variável")
}

minhaFuncaoEmVariavel()

function funcaoComParametro(txt){
    console.log(`imprimindo: ${txt}`)
}

funcaoComParametro("Imprimindo alguma coisa")

*/
/*
const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2){
    return n1 + n2
}
const res = soma(a, b)

console.log(`resultado: ${res}`)
console.log(`resultado: ${soma(c, d)}`)


// escopo da funcao

let y = 10

function testandoFuncao(){
    let y = 29
    console.log(`Y dentro da função é: ${y}`)
}

testandoFuncao()

y = 15

console.log(`Y fora da função é: ${y}`)

testandoFuncao()

// escopo aninhado

let m = 10

function escopoAninhado(){
    let m = 20

    if(true){
        let m = 30

        if(true){
            let m = 40

            console.log(m)
        }

        console.log(m)
    }

}

escopoAninhado()

console.log(m)

*/
/*
let numero = parseFloat(prompt("digite um numero:"))

function dobroNum(){
    let dobro = numero * numero
    alert(dobro)
}

dobroNum()

*/
/*
let n = parseFloat(prompt("digite um numero: "))

function contarAteN(){
    
    for(let i = 1; i <= n; i++){
        console.log(i)
    }
}

contarAteN()
*/


// arrow function

/*

const testeArrow = () => {
    console.log("Esta é uma arrow function")
}

testeArrow()

const parOuImpar = (n) => {
    if (n % 2 === 0){
        console.log("Par")
        return
    }

    console.log("Impar")
}

parOuImpar(5)

parOuImpar(10)

// mais sobre arrow functions

const raizQuadrada = (x) => {
    return x * x
}

console.log(raizQuadrada(4))

const raizQuadrada2 = (x) => x * x

console.log(raizQuadrada2(5))
console.log(raizQuadrada(12))


const helloWorld = () => console.log("Hello World")

helloWorld()

// parametro opcional

const multiplication = function (m, n){
    if(n === undefined){
        return m * 2
    } else {
        return m * n
    }
}

console.log(multiplication(5))

console.log(multiplication(2, 4))

const greeting = (name) => {
    if(!name){
        console.log("Olá")
        return
    }

    console.log(`Olá ${name}`)
}

greeting()

greeting("Vitória")


const nome = prompt("Qual é o seu nome?")
const periodo = prompt("Qual é o periodo?")

function saudacao(n, p){
   return `Bom ${p}, ${n}!`
}
alert(saudacao(nome, periodo))


*/
/*
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("Matheus"))

console.log(customGreeting("João", "Bom dia"))


const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++){
        console.log(text)
    }
}

repeatText("Testando")

repeatText("Agora repete 5 vezes", 5)

const multiplicar = (numero1, numero2 = 2) => {
    return numero1 * numero2
}

console.log(multiplicar(6))
console.log(multiplicar(6, 3))
*/

// closure

function someFunction() {
    let txt = "Alguma coisa"

    function display() {
        console.log(txt)
    }

    display()
}

someFunction()

// mais sobre closure

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m
    }
}

const c1 = multiplicationClosure(5)
const c2 = multiplicationClosure(10)

console.log(c1)
console.log(c2)
console.log(c1(5))
console.log(c2(10))

// recursion

const untilTen = (n, m) => {
    if (n < 10) {
        console.log("A função parou de executar")
    } else {
        const x = n - m

        console.log(x)

        untilTen(x, m)
    }
}

untilTen(100, 7)

// infite recursion
// function run(){
//   console.log("Executando")
//  run()
//}

// run() 


function factorial(x){
    if(x === 0){
        return 1;
    } else {
        return x * factorial(x - 1)
    }
}


const num = 6

const result = factorial(num)

console.log(`O fatorial do numero ${num} é ${result}`)