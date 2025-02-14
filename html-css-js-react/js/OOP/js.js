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

// funcao construtor exercicios
/*
function Carro(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

const carro1 = new Carro("Toyota", "Corolla", 2020)
const carro2 = new Carro("Ford", "Mustang", 2018);

console.log("Carro 1:")
console.log(carro1)
console.log("Marca: " + carro1.marca);
console.log("Modelo: " + carro1.modelo);
console.log("Ano: " + carro1.ano);

console.log("\nCarro 2:")
console.log(carro2)
console.log("Marca: " + carro2.marca);
console.log("Modelo: " + carro2.modelo);
console.log("Ano: " + carro2.ano); 
*/
/*
function Produto(nomeProduto, preco, categoria){
 this.nomeProduto = nomeProduto
 this.preco = preco
 this.categoria = categoria

 this.exibirInfo = function(){
    console.log(`Nome do produto ${nomeProduto}, preço: ${preco}, categoria: ${categoria}`)
 }
}

const produto1 = new Produto("Notebook", 3500, "Eletrônicos");
const produto2 = new Produto("Camiseta", 59.90, "Vestuário");
const produto3 = new Produto("Cadeira Gamer", 1200, "Móveis");

// Chamando o método para exibir informações
produto1.exibirInfo();
produto2.exibirInfo();
produto3.exibirInfo();
*/
/*
class Usuario {
    constructor(nome, email, tipo){
        this.nome = nome
        this.email = email
        this.tipo = tipo
    }

    exibirInfo(){
        console.log(`Nome: ${this.nome}, Email: ${this.email}, Tipo de usuário: ${this.tipo}`)
      }
}

const usuario1 = new Usuario("Ana Souza", "ana@email.com", "Administrador");
const usuario2 = new Usuario("Carlos Mendes", "carlos@email.com", "Cliente");
const usuario3 = new Usuario("Mariana Lima", "mariana@email.com", "Funcionário");

// Chamando o método exibirInfo() para exibir os dados no console
usuario1.exibirInfo();
usuario2.exibirInfo();
usuario3.exibirInfo();
*/
/*


// exemplos chat gpt
 

*/
/*
class Carrinho {
    constructor() {
        this.itens = []; // Lista de produtos
    }

    // Método para adicionar um produto (nome e preço)
    adicionarProduto(nome, preco) {
        this.itens.push({ nome, preco });
        console.log(`Produto "${nome}" adicionado ao carrinho.`);
    }

    // Método para remover um produto pelo nome
    removerProduto(nome) {
        const index = this.itens.findIndex(item => item.nome === nome);
        if (index !== -1) {
            this.itens.splice(index, 1);
            console.log(`Produto "${nome}" removido do carrinho.`);
        } else {
            console.log(`Produto "${nome}" não encontrado no carrinho.`);
        }
    }

    // Método para exibir os produtos e o total
    exibirCarrinho() {
        console.log("📦 Carrinho de Compras:");
        this.itens.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}`);
        });

        const total = this.itens.reduce((acc, item) => acc + item.preco, 0);
        console.log(`💰 Total: R$ ${total.toFixed(2)}`);
        console.log("----------------------");
    }
}

// Criando um novo carrinho
const meuCarrinho = new Carrinho();

// Adicionando produtos
meuCarrinho.adicionarProduto("Camisa", 50.00);
meuCarrinho.adicionarProduto("Calça Jeans", 120.00);
meuCarrinho.adicionarProduto("Tênis", 200.00);

// Exibindo carrinho inicial
meuCarrinho.exibirCarrinho();

// Removendo um produto
meuCarrinho.removerProduto("Calça Jeans");

// Exibindo carrinho atualizado
meuCarrinho.exibirCarrinho();
*/
/*
class Pedido{
    constructor(){
        this.itens = []
    }

    adicionarProdutos(pedido, preco){
        this.itens.push({pedido, preco})
        console.log(`Pedidos adicionados: ${pedido}`)
    }

    removerPedido(pedido){
        const index = this.itens.findIndex(item => item.pedido === pedido);
        if (index !== -1) {
            this.itens.splice(index, 1);
            console.log(`Produto "${pedido}" removido do carrinho.`);
        } else {
            console.log(`Produto "${pedido}" não encontrado no carrinho.`);
        }
    }

    exibirItens(){
        console.log(`Itens no carrinho: `)
        let total = 0
        for (let i = 0; i < this.itens.length; i++) {
            console.log(`${i + 1}. ${this.itens[i].pedido} - R$ ${this.itens[i].preco.toFixed(2)}`);
            total += this.itens[i].preco;
        }

        console.log(`💰 Total: R$ ${total.toFixed(2)}`);
        console.log("----------------------");
    }
}


// Criando um novo pedido
const meuPedido = new Pedido();

// Adicionando itens ao pedido
meuPedido.adicionarProdutos("Hambúrguer", 25.00);
meuPedido.adicionarProdutos("Refrigerante", 8.00);
meuPedido.adicionarProdutos("Batata Frita", 12.00);

// Exibindo pedido inicial
meuPedido.exibirItens();

// Removendo um item do pedido
meuPedido.removerPedido("Refrigerante");

// Exibindo pedido atualizado
meuPedido.exibirItens();
*/


// mais sobre classes
/*
class Caminhao {
    constructor(eixos, cor){
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixos} e é da cor ${this.cor}`)
    }
}

const scania = new Caminhao(6, "Vermelha")

console.log(scania)

scania.descreverCaminhao()

Caminhao.motor = 4

const c2 = new Caminhao(4, "Preta")

console.log(c2)

console.log(c2.motor)

Caminhao.prototype.motor = 4.0

const c3 = new Caminhao(6, "Azul")

console.log(c3.motor)

*/

/*
// chat gpt exemplo

class Pedido {
    constructor(numeroPedido, ...itens) {
        this.numeroPedido = numeroPedido;
        this.itens = [...itens]
    }

    adicionarItem(item) {
        this.itens.push(item); 
        console.log(`Item "${item}" adicionado ao pedido ${this.numeroPedido}.`);
    }


    exibirPedido() {
        console.log(`Pedido Nº: ${this.numeroPedido}`);
        console.log(`Itens: ${this.itens.join(", ")}`);
        console.log("----------------------");
    }
}

const pedido1 = new Pedido(101, "Pizza", "Refrigerante");
const pedido2 = new Pedido(102, "Hambúrguer", "Batata Frita");

// Exibindo pedidos iniciais
pedido1.exibirPedido();
pedido2.exibirPedido();

// Adicionando novos itens aos pedidos
pedido1.adicionarItem("Sobremesa");
pedido2.adicionarItem("Milkshake");

// Exibindo pedidos após a adição dos itens
pedido1.exibirPedido();
pedido2.exibirPedido();
*/
/*
class ReservaHotel {
    constructor(){
        this.reservas = []
    }

    reservarQuarto(numeroReserva, nomeHospede, quantidadeNoites){
        this.reservas.push({numeroReserva, nomeHospede, quantidadeNoites})
        console.log(`Reserva Nº ${numeroReserva} para ${nomeHospede} por ${quantidadeNoites} noites foi adicionada.`)
    }

    cancelarReserva(numeroReserva){
        const index = this.reservas.findIndex(reserva => reserva.numeroReserva === numeroReserva);
        if (index !== -1) {
            this.reservas.splice(index, 1);
            console.log(`Resevera Nº "${numeroReserva}" foi cancelada.`);
        } else {
            console.log(`Resevera Nº "${numeroReserva}" não encontrada.`);
        }
        console.log("----------------------");
    }

    exibirReservas(){
        if(this.reservas.length === 0) {
            console.log("Não há reservas ativas")
        } else {
            console.log("Reservas ativas:")
            this.reservas.forEach(reserva => {
                console.log(`Nº ${reserva.numeroReserva} - ${reserva.nomeHospede} - ${reserva.quantidadeNoites} noites`);
            });
        }
    }
}

const hotel = new ReservaHotel()

hotel.reservarQuarto(1, "Carlos", 3)
hotel.reservarQuarto(2, "Mariana", 5)
hotel.exibirReservas()

hotel.cancelarReserva(1)
hotel.exibirReservas()
*/
/*
class Biblioteca{
    constructor(){
        this.livros = []
    }

    adicionarLivro(id, titulo){
        this.livros.push({id, titulo, nomeLeitor: null})
        console.log(`Livro adicionado ${titulo}, ID ${id}`)
    }

    emprestarLivro(id, nomeleitor){
        const livro = this.livros.find(livro => livro.id === id)
        if(livro){
            if(livro.nomeleitor){
                console.log(`O livro "${livro.titulo}" já está emprestado para ${livro.nomeLeitor}.`);
            } else {
                livro.nomeLeitor = nomeleitor
                console.log(`Livro "${livro.titulo}" emprestado para ${nomeleitor}.`);
            }
        } else {
            console.log(`Livro com ID ${id} não encontrado.`);
        }
    }

    devolverLivro(id){
         const livro = this.livros.find(livro => livro.id === id)
         if (livro) {
            if (livro.nomeLeitor) {
                console.log(`Livro "${livro.titulo}" devolvido por ${livro.nomeLeitor}.`);
                livro.nomeLeitor = null;
            } else {
                console.log(`O livro "${livro.titulo}" já está disponível.`);
            }
        } else {
            console.log(`Livro com ID ${id} não encontrado.`);
        }
    }

    exibirLivros(){
        if(this.livros.length === 0){
            console.log(`Não há livros armazenados`)
        } else {
            for (let i = 0; i < this.livros.length; i++){
                const livro = this.livros[i];  
                if (livro.nomeLeitor) {
                    console.log(`ID: ${livro.id} - ${livro.titulo} | Emprestado para: ${livro.nomeLeitor}`);
                } else {
                    console.log(`ID: ${livro.id} - ${livro.titulo} | Disponível`);
                }
            }
        }
    }
}

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro(1, "1984");
biblioteca.adicionarLivro(2, "Dom Casmurro");

biblioteca.emprestarLivro(1, "Ana");
biblioteca.exibirLivros();

biblioteca.devolverLivro(1);
biblioteca.exibirLivros();
*/
/*
class Produto {
    constructor(nome, preco, quantidadeEmEstoque) {
      this.nome = nome;
      this.preco = preco;
      this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
}
  
  class CarrinhoDeCompras {
    constructor() {
      this.produtos = [];
    }
  
    adicionarProduto(produto, quantidade) {
      if (produto.quantidadeEmEstoque >= quantidade) {
        this.produtos.push({ produto, quantidade });
        produto.quantidadeEmEstoque -= quantidade;
        console.log(`Produto adicionado: ${produto.nome}, preço: ${produto.preco}, quantidade: ${quantidade}`);
      } else {
        console.log(`Quantidade insuficiente em estoque para ${produto.nome}`);
      }
    }
  
    removerProduto(nomeProduto) {
      const index = this.produtos.findIndex(item => item.produto.nome === nomeProduto);
      if (index !== -1) {
        const { produto, quantidade } = this.produtos.splice(index, 1)[0];
        produto.quantidadeEmEstoque += quantidade;
        console.log(`${quantidade} ${produto.nome}(s) removido(s) do carrinho.`);
      } else {
        console.log(`Produto ${nomeProduto} não encontrado no carrinho`);
      }
    }
  
    calcularTotal() {
      return this.produtos.reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
    }
  
    verificarEstoque(nomeProduto) {
      const produto = this.produtos.find(item => item.produto.nome === nomeProduto);
      if (produto) {
        console.log(`Estoque de ${nomeProduto}: ${produto.produto.quantidadeEmEstoque}`);
      } else {
        console.log(`Produto ${nomeProduto} não encontrado no carrinho.`);
      }
    }
  }
  
  // Exemplo de uso:
  const produto1 = new Produto("Notebook", 3000, 10);
  const produto2 = new Produto("Mouse", 50, 20);
  
  const carrinho = new CarrinhoDeCompras();
  
  carrinho.adicionarProduto(produto1, 2);
  carrinho.adicionarProduto(produto2, 5);
  
  console.log(`Total da compra: R$ ${carrinho.calcularTotal().toFixed(2)}`);
  
  carrinho.removerProduto("Mouse");
  
  console.log(`Total da compra após remoção: R$ ${carrinho.calcularTotal().toFixed(2)}`);
  
  carrinho.verificarEstoque("Notebook");
  */
/*
  class Carro{
    constructor(modelo, ano, diaria, disponivel = true){
        this.modelo = modelo
        this.ano = ano
        this.diaria = diaria
        this.disponivel = disponivel
    }
  }

  class Locadora {
    constructor(){
        this.veiculos = []
    }


    adicionarCarro(carro){
        this.veiculos.push(carro)
        console.log(`Carro adicionado na locadora ${carro.modelo}`)
    }

    alugarCarro(modelo, dias){
        const disponivel = this.veiculos.find(carro => carro.modelo === modelo && carro.disponivel)
        if(disponivel){
            disponivel.disponivel = false
            const valorTotal = dias * disponivel.diaria
            console.log(`Carro alugado por ${dias} dias. Valor total: R$ ${valorTotal}`);
        } else {
            console.log(`Carro indisponível`)
        }
        
    }

    devolverCarro(modelo){
        const alugado = this.veiculos.find(carro => carro.modelo === modelo && !carro.disponivel);
        if(alugado){
            alugado.disponivel = true
            console.log(`Carro devolvido: ${modelo}`)
        }
    }

    listarCarrosDisponiveis() {
        const disponiveis = this.veiculos.filter(carro => carro.disponivel);
    
        if (disponiveis.length === 0) {
            console.log("Não há carros disponíveis");
        } else {
            console.log("Carros disponíveis:");
            disponiveis.forEach(carro => {
                console.log(`Modelo: ${carro.modelo}, Ano: ${carro.ano}, Diária: R$${carro.diaria}`);
            });
        }
    }
  }


const locadora = new Locadora();
const carro1 = new Carro("Fiat Uno", 2020, 50);
const carro2 = new Carro("Gol", 2021, 60);
const carro3 = new Carro("Onix", 2018, 65)
const carro4 = new Carro("Hilux", 2023, 75)

locadora.adicionarCarro(carro1);
locadora.adicionarCarro(carro2);
locadora.adicionarCarro(carro3)
locadora.adicionarCarro(carro4)

locadora.alugarCarro("Fiat Uno", 3);
locadora.devolverCarro("Fiat Uno");
locadora.listarCarrosDisponiveis()
*/

// override
/*
class Humano{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

const matheus = new Humano("Matheus", 31)

console.log(matheus)

console.log(Humano.prototype.idade)

Humano.prototype.idade = "Não definida"

console.log(matheus.idade)

console.log(Humano.prototype.idade)
*/

// symbol
/*
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2

Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing", 10)

console.log(boeing)

console.log(boeing[asas])

console.log(boeing[pilotos])
*/
// getter e setter
/*
class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo(){
        return `Voce esta lendo: ${this.titulo}`
    }

    set adicionarTags(tags){
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "É um post sobre programação")

console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "programação, javascript, js"

console.log(myPost)


// herança

class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome){
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, "Shark")

console.log(shark)

console.log(shark.patas)


// instanceof

console.log(shark instanceof Lobo)

console.log(Lobo instanceof Mamifero)

console.log(new Lobo(4, "Shark") instanceof Mamifero)

console.log(new Post("a", "b") instanceof Lobo)
*/

// exercios locação de bicletas
/*
class Bicicleta {
    constructor(modelo, ano, diaria, disponivel = true){
        this._modelo = modelo
        this._ano = ano
        this._diaria = diaria
        this._disponivel = disponivel
    }

    get modelo(){
        return this._modelo 
    }

    get ano(){
        return this._ano 
    }

    get diaria(){
        return this._diaria 
    }

    get disponivel(){
        return this._disponivel
    }

    set diaria(novoValor){
        if(novoValor > 0){
            this._diaria = novoValor
        } else {
            console.log("Valor da diária inválido")
        }
    }

    set disponivel(status){
        this._disponivel = status  
    }
}

class LojaBicicletas{
    constructor(){
        this.bicicletas = []
    }

    adicionarBicicleta(bicicleta){
        this.bicicletas.push(bicicleta)
        console.log(`Bicicleta adicionada na locadora ${bicicleta}`)
    }

    alugarBicicleta(modelo, dias){
        const bicicleta = this.bicicletas.find(b => b.modelo == modelo && b.disponivel)

        if(bicicleta){
            bicicleta.disponivel = false
            const valorTotal = dias * bicicleta.diaria
            console.log(`Bicicleta ${modelo} alugada por ${dias}, valor total: ${valorTotal}`)
        } else {
            console.log("Bicicleta indisponivel")
        }
    }

    devolverBicicleta(modelo){
        const bicicleta = this.bicicletas.find(b => b.modelo == modelo && !b.disponivel)
        if(bicicleta){
            bicicleta.disponivel = true
            console.log(`Bicicleta devolvida`)
        }
    }
    
    listarBicicletasDisponiveis(){
        const disponiveis = this.bicicletas.filter(b => b.disponivel)
        
        if(disponiveis.length === 0){
            console.log("Não bicicletas disponiveis")
        } else {
            console.log("Bicicletas disponiveis")
            disponiveis.forEach(b => {
                console.log(`Modelo: ${b.modelo}, Ano: ${b.ano}, Diária: ${b.diaria}`)
            })
        }
    }
}

const loja = new LojaBicicletas()
const bike1 = new Bicicleta("Mountain Bike", 2022, 50)
const bike2 = new Bicicleta("Speed", 2021, 70)
const bike3 = new Bicicleta("BMX", 2023, 75)
const bike4 = new Bicicleta("X", 2020, 50)


loja.adicionarBicicleta(bike1);
loja.adicionarBicicleta(bike2);
loja.adicionarBicicleta(bike3);
loja.adicionarBicicleta(bike4);
loja.listarBicicletasDisponiveis();
loja.alugarBicicleta("Mountain Bike", 3);
loja.listarBicicletasDisponiveis();
loja.devolverBicicleta("Mountain Bike");

// para alterar a diaria

bike1.diaria = 60

loja.listarBicicletasDisponiveis();
*/
// exemplo de get e set chat gpt 
/*
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;  // Atributo "privado"
        this._idade = idade; // Atributo "privado"
    }

    get nome() {
        return this._nome; // Permite apenas leitura
    }

    set idade(novaIdade) {
        if (novaIdade > 0) {
            this._idade = novaIdade; // Permite alteração controlada
        } else {
            console.log("Idade inválida!");
        }
    }
}

const pessoa = new Pessoa("Carlos", 25);
console.log(pessoa.nome); // "Carlos"
pessoa.idade = -5; // "Idade inválida!"
console.log(pessoa._idade); // 25
*/

// herança
// usando classes
/*
class Person{
    talk(){
        return `Talking`
    }
}

const me = new Person()
console.log(me.talk())

class SuperHuman extends Person {
    fly(){
        return `Flying`
    }
}

const you = new SuperHuman()
console.log(you.talk())
console.log(you.fly())


// herança usando objetos

const pessoa = {
    fala() {
        return 'Falando'
    }
}

const eu = Object.create(pessoa)

console.log(eu.fala())

// outro jeito

const humano = {
    fala(){
        return `falando`
    }
}

const voce = {}
Object.setPrototypeOf(voce, humano)
console.log(voce.fala())
*/
// this
/*
function talking() {
    return `I am ${this.name}`
}

const i = {
    name: 'Sina'
}

talking.bind(i)

const iTalk = talking.bind(i)

console.log(iTalk())

console.log(talking.call(i))

function talk(lang, isPolite) {
    if(isPolite){
        if (lang === 'en') {
            return `Hello, i am ${this.name}`
        } else if (lang === 'it') {
            return `Ciao bella, sono ${this.name}`
        }
    }

    if(!isPolite){
        if (lang === 'en') {
            return `${this.name}, what you want?`
        } else if (lang === 'it') {
            return `Sono ${this.name}`
        }
    }
     
}

const me = {
    name: 'Sina'
}

console.log(talk.call(me, 'en', true))

const you = {
    name: 'Qoli'
}

console.log(talk.call(you, 'it', false))

console.log(talk.apply(me, ['en', true]))
*/
// constructor
/*
function Person(n) {
    this.name = n
    this.talk = function() {
        console.log(this.name)
    }
}

const m = new Person('Sina')

m.talk()
*/
// callback
/*
function Person(n){
    this.name = n
    this.talk = function() {
        console.log(this.name)
    }
    
    
    //setTimeout(function(){
       // console.log(this.name)
   // }.bind(this), 1000)
    
    setTimeout(() => {
        console.log(this.name)
    }, 1000)

}

const me = new Person('Sina')
me.talk()
*/

// exercicio heranca

class Veiculo {
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    exibirInfo(){
        console.log(`Veiculo da marca: ${this.marca}, modelo: ${this.modelo}, ano: ${this.ano}`)
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, motor, km){
        super(marca, modelo, ano,)
        this.motor = motor
        this.km = km
    }

    exibirInfo(){
        super.exibirInfo()
        console.log(`Este carro tem motor: ${this.motor}, quilometragem: ${this.km}`)
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas, km){
        super(marca, modelo, ano,)
        this.cilindradas = cilindradas
        this.km = km
    }

    exibirInfo(){
        super.exibirInfo()
        console.log(`Essa moto tem cilindradas: ${this.cilindradas}, quilometragem: ${this.km}`)
    }
}

const meuCarro = new Carro("Toyota", "Corolla", 2022, 2.0, 25000)
const minhaMoto = new Moto("Honda", "CB500", 2021, 500, 17500);
meuCarro.exibirInfo();
minhaMoto.exibirInfo();

console.log("------------------------")

// 🚀 Exercício: Sistema de Funcionários

class Funcionario {
    constructor(nome, salario){
        this.nome = nome
        this.salario = salario
    }
    calcularSalario() {
        console.log(`${this.nome} tem um salário de R$ ${this.salario}`);
    }
}

class Gerente extends Funcionario{
    constructor(nome, salario, bonus){
        super(nome, salario)
        this.bonus = bonus
    }
    calcularSalario(){
        const salarioFinal = this.salario + this.bonus
        console.log(`Salário: R$ ${salarioFinal} do funcionário (Gerente): ${this.nome}`);
    }
    
}

class Desenvolvedor extends Funcionario{
    constructor(nome, salario, aumento){
        super(nome, salario)
        this.aumento = aumento
    }
    calcularSalario(){
        const salarioFinal = this.salario + this.aumento
        console.log(`Salário: R$ ${salarioFinal} do funcionário (Desenvolvedor): ${this.nome}`);
    }
    
}

// Criando objetos das classes filhas
const gerente1 = new Gerente("Carlos", 5000, 1000);
const dev1 = new Desenvolvedor("Ana", 4000, 500);

// Chamando os métodos
gerente1.calcularSalario(); 
dev1.calcularSalario();      