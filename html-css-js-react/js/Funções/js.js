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
/*
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
//  console.log("Executando")
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

*/

// closure
/*
t = countdown(5); // Cria a função com `n = 5`

function countdown(n) {
    return function until0() {
        if (n < 0) { 
            console.log("Fim!"); 
            return; // Para a recursão
        }
        
        console.log(n);
        n--; // Decrementa `n` dentro do closure
        until0(); // Chama a função recursivamente
    };
}

const start = countdown(5);
start();

function criarMensagem(tipo) {
    return function (texto) {
        console.log(`[${tipo.toUpperCase()}]: ${texto}`);
    };
}

const logErro = criarMensagem("erro");
const logSucesso = criarMensagem("sucesso");

logErro("Arquivo não encontrado"); 
logSucesso("Cadastro realizado com sucesso!"); 


function delayMensagem(mensagem, tempo) {
    return function () {
        setTimeout(() => {
            console.log(mensagem);
        }, tempo);
    };
}

const mensagemAtrasada = delayMensagem("Isso será exibido depois!", 2000);
mensagemAtrasada(); // Exibe após 2 segundos

*/
/*
function criarSaudacao(base){
    return function(nome) {
        return `${base}, ${nome}`
    }
}

const saudarcomola = criarSaudacao("ola")
console.log(saudarcomola("joao"))

const saudarcombomdia = criarSaudacao("bom dia")
console.log(saudarcombomdia("maria"))


 */

// usa closure
/*
function gerenciador(saldoIni){
   let saldo = saldoIni

    return{
        adiDespesa: function(valor){
            if (valor > saldo){
                console.log("Voce esta sem saldo")
            } else{
                saldo -= valor
                console.log(`despesa de ${valor.toFixed(2)} adionada`)
            }
        },
        verificarSaldo: function(){
            console.log(`seu saldo agora é ${saldo.toFixed(2)}`)
        }
    }
}

const orcamento = gerenciador(1000)
orcamento.verificarSaldo()
orcamento.adiDespesa(200)
orcamento.verificarSaldo()


    // recursao

    
function soma(n) {
    if (n === 0) return 0; // Caso base

    return n + soma(n - 1); // Chama a si mesma somando (n-1)
}

console.log(soma(5)); // 5 + 4 + 3 + 2 + 1 + 0 = 15
*/

/*
function contarOcorrencias(texto, palavra){
   let index = texto.indexOf(palavra)
   if (index === -1){
    return 0
   }

   return 1 + contarOcorrencias(texto.slice(index + palavra.length), palavra)
}

console.log(contarOcorrencias("oi oi tudo bem oi", "oi")); 
console.log(contarOcorrencias("gato cachorro gato gato", "gato")); 
console.log(contarOcorrencias("javascript é legal", "python")); 


function converterParaBinario(n){
    if (n === 0) return 0
    if (n === 1) return 1

    return converterParaBinario(Math.floor(n / 2)) + (n % 2).toString()
    
}

console.log(converterParaBinario(10))
*/

// closure
// global scope
/*

let x = 1;

const parentFunction = () => {
    // local scope
    let myValue = 2
    console.log(x)
    console.log(myValue)

    const childFunction = () => {
        console.log(x += 5)
        console.log(myValue += 1)
    }

    return childFunction
}

const result = parentFunction()
console.log(result)
result()
result()

const credits = ((num) => {
    let credits = num
    console.log(`initial credits value: ${credits}`)
    return () => {
        credits = -1
        if(credits > 0) console.log(`playing game, ${credits} credits(s)remaining`)
        if (credits <= 0) console.log(`not enough credits`)
    }
})(3)

credits()
credits()
credits() 

*/
/*

function criarGerenciadorDeDescontos(){
    let desconto = 0; // Estado mantido pelo closure
    let primeiraCompra = true; // Controla se é a primeira vez que a função é chamadaf
    let valorOriginal = 0; // Armazena o valor original do produto

    return function(valor){

        if (primeiraCompra) {
            valorOriginal = valor; // Armazena o preço original na primeira chamada
            primeiraCompra = false;
            console.log(`Primeira compra: Sem desconto. Valor: R$ ${valorOriginal.toFixed(2)}`);
            return valorOriginal;
        }

        // Aumenta o desconto em 2% até o máximo de 10%

        if(desconto < 10){
            desconto =+ 2
        }
        let valorComDesconto = valor - (valor * desconto) / 100;
        
        console.log(`Desconto aplicado: ${desconto}% | Valor final: R$ ${valorComDesconto.toFixed(2)}`);
        return valorComDesconto;
    }
}

const aplicarDesconto = criarGerenciadorDeDescontos();
aplicarDesconto(100)
aplicarDesconto(100)*/
/*

function calcularDesconto(preco, desconto){

    if (desconto >= 100 || desconto <= 0){
        console.log("valor inválido")
    }

    let valorFinal = preco - (preco * desconto) / 100
    console.log(`Valor final: ${valorFinal}`)
}

calcularDesconto(100, 2)


function validarCPF(cpf){
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 ){
        console.log("CPF invalido")
    }

    return `CPF valido`
}

console.log(validarCPF("12345678909")); // true
console.log(validarCPF("12345678"));    // false
console.log(validarCPF("123abc78909")); // false
console.log(validarCPF(""));            // false


const multiplication = (num1, num2) => num1 * num2

const mult = multiplication(2, 5)
console.log(mult)

*/
/*
function criarContador(valorIni){
    let cont = valorIni

    return{
        incrementar: function(){
             cont ++
             console.log(`${cont}`)
         },
         decrementar: function(){
             cont --
             console.log(`${cont}`)
         },
         valorAtual: function(){
             return cont
         }
     }
    
}

const contador = criarContador(10)
contador.incrementar()
contador.incrementar()
contador.incrementar()
contador.decrementar()
contador.valorAtual() 

function createCounter(){
    let count = 0

    function increment(){
        count++
        console.log(`Count increased to ${count}`)
    }

    function getCount(){
        return count
    }

    return{increment, getCount}

}

const counter = createCounter()
counter.increment()
counter.increment()
console.log(`${counter.getCount()}`)

*/

function createUser(name, password){
    let pass = password
    return{
        login: function(pass){
            if(pass === password){
                return `Login bem sucedido.`
            } else {
                return `Senha incorreta`
            }
        },
        changePassword: function(oldPass){
            if(oldPass === pass) {
                return `Login bem sucedido. Senha alterada`
            } else {
                return `Senha incorreta`
            }
        }    
    }

}

const user = createUser("Carlos", "12345")

console.log(user.login("errado")); 
console.log(user.login("12345"));  

console.log(user.changePassword("errado", "novaSenha123"));
console.log(user.changePassword("12345", "novaSenha123"));


