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


    
// recursao

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
// nao usa recursao
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
let minhaLista = [1, 3, 5, 7, 9]
console.log(pesquisaBinaria(minhaLista, 3))
console.log(pesquisaBinaria(minhaLista, -1))

// usando recursao 

function recursaoBinaria(lista, item, baixo = 0, alto = lista.length - 1){

    if (baixo > alto) {
        return null;
    }

    let meio = Math.floor((baixo + alto) / 2);
    let chute = lista[meio];

    if (chute === item) {
        return meio;
    } else if (chute > item) {
        return recursaoBinaria(lista, item, baixo, meio - 1);
    } else {
        return recursaoBinaria(lista, item, meio + 1, alto);
    }
}

let minhaLista2 = [1, 3, 5, 7, 9]
console.log(recursaoBinaria(minhaLista2, 3))
console.log(recursaoBinaria(minhaLista2, -1))

// mais estudos de recursao, que acontece quando uma função chama a si mesma, todo loop pode ser uma recursao 

const countToTen = (num = 1) => {
    while (num <= 10){
        console.log(num)
        num++
    }
}

//countToTen() 

// para ter recursao, precisa no minino: a funcao chamar a função e uma condicional para sair

// versao recursiva

const recurToTen = (num = 1) => {
    if(num > 10) return
    console.log(num)
    num++
    recurToTen(num)
}

recurToTen()

// lado ruim de usar recursao é que usa mais memoria quando chamamos uma funcao, do q quando chamamos um loop e talvez mais dificil de debug

// exemplo usando fibonacci
// 0 1 2 3 5 8 13 21

const fibonacci = (num, array = [0, 1]) => {
    while (num > 2) {
        const [nextToLast, last] = array.slice(-2)
        array.push(nextToLast + last)
        num -= 1
    }
    return array
}

console.log(fibonacci(12))

// usando recursao

const fib = (num, array = [0, 1]) => {
    if (num <= 2) return array
    const [nextToLast, last] = array.slice(-2)
    return fib(num - 1, [...array, nextToLast + last])
}

console.log(fib(12))

// qual numero esta posicao n na sequencia fibonacci

// sem recursao

const fibonacciPos = (pos) => {
    if(pos <= 1) return pos
    const seq = [0, 1]

    for(let i = 2; i <= pos; i++) {
        const [nextToLast, last] = seq.slice(-2)
        seq.push(nextToLast + last)
    }
    return seq[pos]

}

console.log(fibonacciPos(8))

const fibPos = (pos) => {
    if(pos < 2) return pos
    return fibPos(pos - 1) + fibPos(pos - 2)
}

console.log(fibPos(8))

const fibPoss = pos => pos < 2 ? pos : fibPos(pos - 1) + fibPos(pos - 2)
console.log(fibPos(8))

console.log(fibPoss(8))
// exemplo do youtuber dave gray
// Export from your streaming service like Spotify, YT Music, etc.

const artistsByGenre = {
    jazz: ["Miles Davis", "John Coltrane"],
    rock: {
        classic: ["Bob Seger", "The Eagles"],
        hair: ["Def Leppard", "Whitesnake", "Poison"],
        alt: {
            classic: ["Pearl Jam", "The Killers"],
            current: ["Joywave", "Sir Sly"]
        }
    },
    unclassified: {
        new: ["Caamp", "Neil Young"],
        classic: ["Seal", "Morcheeba", "Chris Stapleton"]
    }
}


const getArtistNames = (dataObj, arr = []) => {
    Object.keys(dataObj).forEach(key => {
        if (Array.isArray(dataObj[key])) {
            return dataObj[key].forEach(artist => {
                arr.push(artist);
            });
        }
        getArtistNames(dataObj[key], arr);
    });
    return arr;
}

console.log(getArtistNames(artistsByGenre));

// chat gpt
const arvore = {
    nome: "Raiz",
    filhos: [
        {nome: "Filho 1", filhos: []},
        {
            nome: "Filho 2", filhos: [
                {nome: "Neto 1", filhos: []},
                {nome: "Neto 2", filhos: []},
            ],
        },
    ],
}


const percorrerArvore = (node, array = []) => {

    array.push(node.nome); // Adiciona o nome do nó ao array

    if (Array.isArray(node.filhos)) {
        node.filhos.forEach(filho => percorrerArvore(filho, array));
    }

    return array;
};

console.log(percorrerArvore(arvore));

// fatorial sem recursao



function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

// usando recursao

function fat(num, f = num, acumulado = 1){
    if( f === 1) return acumulado
    return fat(num, f - 1, acumulado * f)
}

fat(5)

// Validação de Palíndromos
const Palindrome = (str) => {
    let result = ''
    for (var i = 0; i<str.length / 2; i++ ) {
        if (str[i] !== str[str.length -i -1]) return result = false
        result = true
    }
    return result
}

console.log(Palindrome("palindromo"));
console.log(Palindrome("radar"));
console.log(Palindrome("reviver"));
console.log(Palindrome("antgretdna"));
// versao com recursao
const checkPalindrome = (str, left = 0, right = str.length - 1) => {
    if (left >= right) return true;
    if (str[left] !== str[right]) return false;
    return checkPalindrome(str, left + 1, right - 1);
}

console.log(checkPalindrome("palindromo"));
console.log(checkPalindrome("radar"));
console.log(checkPalindrome("reviver"));
console.log(checkPalindrome("antgretdna"));