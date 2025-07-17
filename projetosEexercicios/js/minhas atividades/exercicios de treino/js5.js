// this 

 function talk(){
     return `Ola, ${this.name}`
 }

 const me = {
     name: 'Vitoria',
     talk
 }
 const you = {
     name: 'Sina',
     talk
 }
// o que esta na esquerda "me" é o this.
//console.log(me.talk())
//console.log(you.talk())

class Pessoa{
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }

    aprensentacaoNome(){
        console.log(`Ola, eu sou ${this.nome}`)
    }

    apresentaoIdade() { 
        console.log(`tenho ${this.idade}`)
    }
    aprensentacaoAltura() {
        console.log(`Minha altura é ${this.altura}`)
    }
}

const eu = new Pessoa('Julio', 38, 1.98)
// eu.aprensentacaoNome()
// eu.apresentaoIdade()
// eu.aprensentacaoAltura()
const voce = new Pessoa('Maria', 35, 1.70)
// voce.aprensentacaoNome()
// voce.apresentaoIdade()
// voce.aprensentacaoAltura()
// Bind function => 
function falar(){
    return `Eu sou ${this.nome}`
}
const pessoa = {
    nome: 'Julia'
}
const outraPessoa = {
    nome: 'Matheus'
}
// qualquer objeto que eu passar em bind vai ser usado como valor de this dentro da funcao, pode ser usado dessas duas maneiras, q da o msm resultado
// const meTalk = falar.bind(pessoa)
// console.log(meTalk())
// console.log(falar.bind(pessoa)())
// ou pode tbm usar o call
// console.log(falar.call(outraPessoa))

// usando parametros 

function conversar(lingua, isPoilite){
    if(isPoilite){
        if(lingua == 'en'){
        console.log(`Hello, I am ${this.name}`)
        } else if (lingua == 'it'){
            console.log(`Ciao, Io sono ${this.name}`)
        }
    } else {
        if(lingua == 'en'){
        console.log(`I am ${this.name}`)
        } else if (lingua == 'it'){
            console.log(`Io sono ${this.name}`)
        }
    }
    
}

const humano = {
    name: 'Davi'
}
// conversar.call(humano, 'en', isPoilite = false)
// conversar.call(humano, 'it', isPoilite = true)

// this em constructor 

function Person(n){
    this.name = n
    this.talk = function(){
        console.log(this)
    }
}

const I = new Person('Sina')
I.talk()

// this in a callback function => are functions that you pass into another function and they get executed in totally different context, doesnt have the binding that constructor have, so if console.log(this) in a callback function, you will have a window object, even if the callback function it is inside a constructor function. you can fix using bind() or can just use a arrow function

function Human(n){
    this.name = n
    this.talk = function(){
        console.log(this)
    }

    setTimeout(function(){ // => setTimeout é uma callback function
        console.log(this)
    }.bind(this), 100) // voce usa bind dps dos {} pois dps dele vc esta dentro do contexto da constructor, assim podendo usar bind(), dentro dos => {} vc ta no contexto da callback function
}

const i = new Human('Sina')

function Humano(n){
    this.name = n
    this.talk = function() {
        console.log(this)
    }

    setTimeout(() => {
        console.log(this)
    }, 100)
}

const im =  new Humano('isaac')
