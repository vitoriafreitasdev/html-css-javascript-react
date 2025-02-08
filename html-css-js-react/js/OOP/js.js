// metodos
/*
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("au au")
    }
}

console.log(animal.nome)
animal.latir()

// aprofundando em metodos

const pessoa = {
    nome: "Matheus",

    getNome: function () {
        return this.nome
    },

    setNome: function(novoNome){
        this.nome = novoNome
    }
}

console.log(pessoa.nome)
console.log(pessoa.getNome())

pessoa.setNome("Joaquim")

console.log(pessoa.getNome())

*/

// exercicio
/*
const carro = {
    marca: "fiat",
    velocidade: 0,
    ligado: false,
    velocidadeMaxima: 120,

    ligarDesligar: function(){
        this.ligado = !this.ligado
        const status = this.ligado ? 'ligado' : 'desligado'
        console.log(`Carro ${status}`)
    },

    acelerar: function(kmh){
        if(!this.ligado) {
            console.log('Ligue o carro primeiro!');
            return;
        }
        
        const novaVelocidade = this.velocidade + kmh;
        this.velocidade = Math.min(novaVelocidade, this.velocidadeMaxima);
        
        if(novaVelocidade > this.velocidadeMaxima) {
            console.log(`Velocidade máxima (${this.velocidadeMaxima} km/h) atingida!`);
        }
        console.log(`Acelerando... Velocidade atual: ${this.velocidade} km/h`);
   },

   frear: function(kmh){
    if(!this.ligado) {
        console.log('Carro desligado!');
        return;
    }
    
    if(this.velocidade - kmh >= 0) {
        this.velocidade -= kmh;
        console.log(`Freando... Velocidade atual: ${this.velocidade} km/h`);
    } else {
        this.velocidade = 0;
        console.log('O carro já está parado!');
    }
   },

   mostrarVelocidade: function(){
    console.log(`Velocidade do ${this.marca}: ${this.velocidade} km/h`)
   }
}

carro.acelerar(10); 
carro.ligarDesligar(); 
carro.acelerar(30); 
carro.acelerar(100)
carro.ligarDesligar(); 
carro.frear(50); 
*/

/*
const contaBancaria = {
    titular: "Vitória Freitas",
    saldo: 2500.87,

    depositar: function(valor){
        this.saldo = this.saldo + valor
    },

    sacar: function(valorRetirado){
        this.saldo = this.saldo - valorRetirado
    },

    verSaldo: function(){
        console.log(`Saldo: ${this.saldo} reais`)
    }

}

contaBancaria.depositar(200)
contaBancaria.sacar(50)
contaBancaria.verSaldo()
*/

// prototype
// fallback
/*
const text = "asd"

console.log(Object.getPrototypeOf(text))

const bool = true

console.log(Object.getPrototypeOf(bool))

const arr = []

console.log(arr.length)

console.log(Object.getPrototypeOf(arr))

// mais sobre prototype

const myObject = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObject))

console.log(Object.getPrototypeOf(myObject) === Object.prototype) 

const mySecondObject = Object.create(myObject)

console.log(mySecondObject)

console.log(mySecondObject.a)

console.log(Object.getPrototypeOf(mySecondObject) === myObject)
*/

// classes básicas
/*
const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemão"

console.log(pastorAlemao)
console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro)
bulldog.raca = "Bulldog"

console.log(bulldog)
*/
// função como classe - função construtora
/*
function criarCachorro(nome, raca){
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("Bob", "Vira lata")

console.log(bob)

const jack = criarCachorro("Jack", "Poodle")

console.log(jack)

console.log(Object.getPrototypeOf(jack))
*/
// funções como classe
/*
function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky")

console.log(husky)

// metodos na função construtora
Cachorro.prototype.uivar = function() {
    console.log("Auuuu!")
}

console.log(Cachorro.prototype)

husky.uivar()
*/
/*
class CachorroClasse {
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador")

console.log(jeff)
console.log(Object.getPrototypeOf(jeff))
*/

// função construtor 
// exemplo como usaria com o DOM
function SuperElement(type, content){
    this.el = document.createElement(type)
    this.el.innerText = content
    document.body.append(this.el)
    this.el.addEventListener('click', () => {
        console.log(this.el)
    })
}

const array = ['a', 'b', 'c']

const myElements = array.map(item => {
    return new SuperElement('p', item)
})
