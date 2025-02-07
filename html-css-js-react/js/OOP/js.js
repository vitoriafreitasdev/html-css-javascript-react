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