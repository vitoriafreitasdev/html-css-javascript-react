// chat gpt Classe que representa uma Tarefa

class Task {
    constructor(title) {
        this.title = title;
        let status = false; // Status privado (closure)

        // Closure para manipular status
        this.setStatus = function (newStatus) {
            status = newStatus;
        };

        this.getStatus = function () {
            return status;
        };
    }

    // Método GET para acessar o status (usando closure)
    get status() {
        return this.getStatus();
    }

    // Método SET para modificar o status (usando closure)
    set status(value) {
        this.setStatus(value);
    }
}


class TaskManager {
    constructor() {
        this.tasks = []; // Lista de tarefas
    }

    // Método para adicionar uma nova tarefa
    addTask(title) {
        const task = new Task(title);
        this.tasks.push(task);
        console.log(`Tarefa "${title}" adicionada!`);
    }

    // Método para listar todas as tarefas
    listTasks() {
        console.log("\n📌 Lista de Tarefas:");
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.title} - ${task.status ? "✅ Concluída" : "⏳ Pendente"}`);
        });
    }

    // Método para filtrar tarefas concluídas
    get completedTasks() {
        return this.tasks.filter(task => task.status);
    }

    // Método para remover uma tarefa pelo título
    removeTask(title) {
        this.tasks = this.tasks.filter(task => task.title !== title);
        console.log(`Tarefa "${title}" removida.`);
    }
}




// ------------------------------
// Testando o Sistema de Tarefas
// ------------------------------

const manager = new TaskManager();

// Adicionando tarefas
manager.addTask("Estudar JavaScript");
manager.addTask("Criar um projeto pessoal");
manager.addTask("Ler um livro");

// Listando tarefas
manager.listTasks();

// Alterando status da primeira tarefa
manager.tasks[0].status = true;

// Listando novamente após alteração
manager.listTasks();

// Filtrando tarefas concluídas
console.log("\n✅ Tarefas Concluídas:");
console.log(manager.completedTasks);

// Removendo uma tarefa
manager.removeTask("Criar um projeto pessoal");

// Listando novamente após remoção
manager.listTasks();



function buscaMenor(arr){
 menor = arr[0]
 menor_indice = 0
 for (let i = 1; i < arr.length; i++){
    if (arr[i] < menor){
        menor = arr[i]
        menor_indice = i
    }
 }
 return menor_indice
}

function ordenar(arr){
    novoArr = []
    while (arr.length > 0){
        let menor_indice = buscaMenor(arr);
        novoArr.push(arr.splice(menor_indice, 1)[0]);
    }
    return novoArr
}

console.log(ordenar([5, 3, 6, 2, 10]))

// exemplo de get e set

/*
class Retangulo {
    constructor(largura, altura) {
      this._largura = largura;
      this._altura = altura;
    }
  
    // Getter para calcular a área
    get area() {
      return this._largura * this._altura;
    }
  
    // Setter para validar a largura
    set largura(novaLargura) {
      if (novaLargura > 0) {
        this._largura = novaLargura;
      } else {
        console.log("Largura inválida! Deve ser maior que 0.");
      }
    }
  }
  
  const retangulo = new Retangulo(10, 5);
  console.log(retangulo.area); // Saída: 50 (usa o getter)
  
  retangulo.largura = 15; // Atualiza a largura usando o setter
  console.log(retangulo.area); // Saída: 75
  
  retangulo.largura = -5; // Saída no console: "Largura inválida! Deve ser maior que 0."
  */
  /*
  //Exercício: Criando uma Classe de Conta Bancária

  class contaBancaria {
    constructor(titular, saldoIni){
        this.titular = titular
        this._saldo = saldoIni
    }

    get saldo(){
        return this._saldo
    }

    set saldo(novoSaldo){
        if(novoSaldo >= 0){
            this._saldo = novoSaldo
        } else {
            console.log("O novo saldo precisa ser um numero positivo")
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor
            console.log(`✅ Depósito de R$${valor} realizado. Novo saldo: R$${this._saldo}`)
        } else {
            console.log("❌ Erro: Valor de depósito inválido.");
        }
        
    }
    sacar(valor){
        if(valor > 0 && valor <= this._saldo){
            this._saldo -= valor
            console.log(`💸 Saque de R$${valor} realizado. Saldo restante: R$${this._saldo}`);
        } else {
            console.log("❌ Erro: Saldo insuficiente ou valor inválido.");
        }
        
    }
  }

  const minhaConta = new contaBancaria("João Silva", 1000)

  console.log(`Saldo inicial: R$${minhaConta.saldoIni}`)

  minhaConta.depositar(500)
  minhaConta.sacar(300)
  minhaConta.sacar(10000)
  minhaConta.depositar(-100)
  minhaConta.saldoAtualizado

  class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this._idade = idade
    }

    get idade(){
        return this._idade
    }

    set idade(novaIdade){
        if (novaIdade > 0){
            this._idade = novaIdade
        } else {
            console.log("Idade inválida! A idade deve ser um número positivo.")
        }
    }
  }

  const pessoa1 = new Pessoa("Carlos", 25)

  console.log(`Idade inicial: ${pessoa1.idade}`)

  pessoa1.idade = 30
  console.log(`Nova idade: ${pessoa1.idade}`)

  pessoa1.idade = -30
  console.log(`Idade final: ${pessoa1.idade}`)
  */

// Exercício: Criando uma Hierarquia de Contas Bancárias com Closure chat gpt

class ContaBancaria{
    constructor(saldoInicial = 0){
        let saldo = saldoInicial

        this.depositar = function (valor){
            if(valor > 0) {
                saldo += valor
                console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${saldo}`)
            } else {
                console.log("Valor de depósito inválido.")
            }
        }

        this.sacar = function (valor) {
            if(valor > 0 && valor <= saldo) {
                saldo -= valor
                console.log(`Saque de R$${valor} realizado. Saldo atual: R$${saldo}`)
            } else {
                console.log("Saque inválido! Saldo insuficiente.")
            }
        }

        this.getSaldo = function () {
            return saldo
        }
    }

}

class ContaCorrente extends ContaBancaria {
    constructor(saldoInicial, limiteEspecial) {
        super(saldoInicial)
        this.limiteEspecial = limiteEspecial
    }

    sacar(valor) {
        let saldoAtual = this.getSaldo();
        if (valor > 0 && valor <= saldoAtual + this.limiteEspecial) {
           
            super.sacar(valor);
        } else {
            console.log("Saque excede o saldo e o limite especial!");
        }
    }
}

const minhaConta = new ContaCorrente(100, 50); 

minhaConta.depositar(50);  
minhaConta.sacar(120);     
minhaConta.sacar(50);      
minhaConta.sacar(1);      
/*
Exercício: Criando um Sistema de Biblioteca com Closure e Herança
Objetivo: Criar uma hierarquia de classes para gerenciar livros, onde o número de cópias disponíveis seja protegido por uma closure.

Requisitos:
Classe Livro (classe base)

Usa uma closure para armazenar a quantidade de cópias disponíveis.
Métodos:
emprestar(): Diminui o número de cópias disponíveis se houver alguma.
devolver(): Aumenta o número de cópias disponíveis.
getDisponibilidade(): Retorna a quantidade de cópias disponíveis.
Classe Ebook (herda de Livro)

Como e-books não têm cópias físicas limitadas, o método emprestar() deve sempre permitir o "empréstimo".
Testes:

Criar um livro físico e um e-book, testar os métodos e verificar se a closure protege corretamente o número de cópias disponíveis.

*/

class Livro {
    constructor (titulo, copias){
        this.titulo = titulo
        let copiasDisponiveis = copias

        this.emprestar = function(){
            if(copiasDisponiveis > 0){
                copiasDisponiveis = copiasDisponiveis - 1
                console.log(`Livro: ${this.titulo}, copias restantes: ${copiasDisponiveis}`)
            } else {
                console.log(`Livro: ${this.titulo} indisponivel`)
            }
        }

        this.devolver = function(){
            copiasDisponiveis++
            console.log(`Livro: ${this.titulo} devolvido. foi devolvido! Agora há ${copiasDisponiveis} cópias disponíveis.`)
        }

        this.disponibilidade = function(){
            return copiasDisponiveis
        }
    }
}

class Ebook extends Livro {
    constructor(titulo ){
        super(titulo, Infinity)
    }

    emprestar(){
        console.log(`Você pegou emprestado o e-book "${this.titulo}". Boa leitura!`)
    }
    
}

const livroFisico = new Livro("O Senhor dos Anéis", 3);
const ebook = new Ebook("O Hobbit");

livroFisico.emprestar(); // 2 cópias restantes
livroFisico.emprestar(); // 1 cópia restante
livroFisico.emprestar(); // 0 cópias restantes
livroFisico.emprestar(); // Indisponível
livroFisico.devolver(); // 1 cópia disponível

ebook.emprestar(); // Sempre pode ser emprestado
ebook.emprestar(); // Sempre pode ser emprestado

// pesquisa binaria

function pesquisaBinaria(lista, item){
    let baixo = 0
    let alto = lista.length - 1

    while(baixo <= alto){
        let meio = Math.floor((baixo + alto) / 2)
        let chute = lista[meio]

        if (chute === item) {
            return meio
        } else if (chute > item) {
            alto = meio - 1
        } else {
            baixo = meio + 1
        }
    }
    return null
}
    
// recursao
let minhaLista = [1, 3, 5, 7, 9]
console.log(pesquisaBinaria(minhaLista, 3))
console.log(pesquisaBinaria(minhaLista, -1))



function soma(nums, index = 0){
    if (index === nums.length){
        return 0
    } 
    return nums[index] + soma(nums, index + 1)
}

let res = [2, 3, 4, 6]
console.log(`A soma é ${soma(res)}`)

// usando for

function somaArray(array) {
    // Inicializa a soma com 0
    let soma = 0;

    // Itera sobre cada elemento do array e adiciona à soma
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    // Retorna o resultado da soma
    return soma;
}

// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5];
console.log(`A soma do array é: ${somaArray(numeros)}`);

// contando os itens de uma listas

function quantItens(itens){
    if(itens.length === 0){
        return 0
    }

    let quantidade = itens.length
    console.log(quantidade)
}

const num = [10, 5, 25, 8, 30];
quantItens(num)

function encontrarMaiorValorRecursivo(array, index = 0, maior = -Infinity) {
    // Caso base: se o índice atingir o final do array, retorna o maior valor encontrado
    if (index === array.length) {
        return maior;
    }

    // Atualiza o maior valor se o elemento atual for maior
    if (array[index] > maior) {
        maior = array[index];
    }

    // Chamada recursiva para o próximo índice
    return encontrarMaiorValorRecursivo(array, index + 1, maior);
}

// Exemplo de uso:
const numero = [10, 5, 25, 8, 30];
console.log(`O maior valor do array é: ${encontrarMaiorValorRecursivo(numero)}`);