// array

const lista = [1, 2, 3, 4 , 5]

console.log(lista)

console.log(typeof lista)

const itens = ["Matheus", true, 2, 4.12, []]

console.log(itens)

// mais sobre array

const arr = ["a", "b", "c", "d"]

console.log(arr[0])
console.log(arr[2])

// propriedades 

const numbers = [5, 3, 4]

console.log(numbers.length)

console.log(numbers["length"]) 

const myName = "Matheus"

console.log(myName.length)

// métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

const text = "algum texto"

console.log(text.toUpperCase())

console.log(text.indexOf("g"))

// objetos

const person = {
    name: "Matheus",
    age: 31,
    job: "Programador"
}


console.log(person)

console.log(person.name)

console.log(person.name.length)

console.log(typeof person)

// criando e deletando propriedades


const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 2000
}

console.log(car)

car.doors = 4

console.log(car)

delete car.km

console.log(car)

// mais sobre objetos

const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object)

const obj2 = {
    c:[]
}

Object.assign(obj2, obj)

console.log(obj2)


//conhecendo melhor os objetos

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))


// mutacao

const a ={
    name: "Matheus"
}

const b = a

console.log(a)
console.log(b)

console.log(a === b)

a.age= 31

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)

// loops em arrays

const users = ["Marcos", "João", "Pedro", "Miguel",]

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`)  
}

// push and pop

const array = ["a", "b", "c"]

array.push("d")

console.log(array)
console.log(array.length)

array.pop()

console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido)

console.log(array)

array.push("z", "x", "y")

console.log(array)



// exercicio praticos 
// soma vetor

function somaVetor(numeros){
    soma = 0
    for (let i = 0; i < numeros.length; i++){
        soma = soma + numeros[i]
    }
    return soma
}

//const numeros =  [1, 2, 3, 4, 5]
const resultado = somaVetor([1, 2, 3, 4, 5]) // (numeros)

console.log(`O resultado da soma é igual a ${resultado}`)

// apenas pares 


function apenasPares(pares){
   return{
    pares: function(){
        let resultado = []
        for (let i = 0; i < pares.length; i++){
            if (pares[i] % 2 === 0){
                resultado.push(pares[i])
            }
        }
        return `Pares: ${resultado.join(", ")}`;
    },
    
    todos: function(){
        for (let i = 0; i < pares.length; i++){
            return `Todos: ${pares.join(", ")}`;
           }
       }
   }
   
}

const par = apenasPares([2, 3, 4, 5, 6])

console.log(par.pares())
console.log(par.todos())


// exercicio pratico para objetos
// carro

const carro = {
    modelo: "Corolla",
    marca: "Toyata",
    ano: 2020,
    cor: "Prata",
    ligado: false,

    ligar() {
        this.ligado = true
        console.log("Carro foi ligado")
    },
    
    desligar(){
        this.ligado === false
        console.log("Carro foi desligado")
        
    }
}


// Exibindo as propriedades do carro
console.log("Informações do carro:");
console.log(`Marca: ${carro.marca}`);
console.log(`Modelo: ${carro.modelo}`);
console.log(`Ano: ${carro.ano}`);
console.log(`Cor: ${carro.cor}`);
console.log(`Está ligado? ${carro.ligado ? "Sim" : "Não"}`);



// Ligando e desligando o carro
carro.ligar();
carro.desligar();

// cadastro de usuario

let cadastro = {
    nome: "Vitória",
    idade: 21,
    email: "vitoria@gmail.com",

    apresentar: function(){
        console.log(`idade: ${this.idade}, nome: ${this.nome}`)
    }
}

console.log(cadastro)
cadastro.apresentar()

cadastro.idade = 22
cadastro.apresentar()


// shift e unshift

const letters = ["a", "b", "c"]
const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift("p", "q", "r")
letters.unshift("z")

console.log(letters)

// indexOf e lastInOf

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]

console.log(myElements.indexOf("Maçã"))
console.log(myElements.indexOf("Abacate"))

console.log(myElements[2])
console.log(myElements[myElements.indexOf("Abacate")]) 

console.log(myElements.lastIndexOf("Abacate"))
console.log(myElements.lastIndexOf("Mamão")) // retorna -1
console.log(myElements.indexOf("Mamão")) // retorna -1

// slice

const testeSlice = ["a", "b", "c", "d", "e", "f"]
 
const subArray = testeSlice.slice(2, 4)

console.log(subArray)

console.log(testeSlice)

const subArray2 = testeSlice.slice(2, 4 + 1)

console.log(subArray2)

const subArray3 = testeSlice.slice(10, 20)

console.log(subArray3) // retorna lista vazia "[]"

const subArray4 = testeSlice.slice(2)

console.log(subArray4) 


// exercicio pratico slice

// Exercício: Pegando Parte de uma Frase

const f = "JavaScript é muito divertido!"

const primeiraPalavra = f.slice(0, 10)
const ultimaPalavra = f.slice(-10, -1)

console.log(primeiraPalavra)
console.log(ultimaPalavra)

// Exercício: Manipulando Arrays com slice

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const primeiros = numeros.slice(0, 2+1)
console.log(primeiros)

const indice4a7 = numeros.slice(4, 8)
console.log(indice4a7)

const ultimos = numeros.slice(-3) // (7, 10)
console.log(ultimos)



// forEach

const nums = [1, 2, 3, 4, 5]

nums.forEach((numero) =>{
    console.log(`O número é ${numero}`)
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"},
]

posts.forEach((post) => {
    console.log(`Exibindo post ${post.title}, da categoria: ${post.category}`)
})

 posts.forEach(function(post) {
    console.log("Exibindo post " + post.title + ", da categoria: " + post.category);
});

//  usando o for
const p = [ 
    {title: "Quarto post", category: "Java"},
    {title: "Quinto post", category: "Ruby"},
    {title: "Sexto post", category: "C#"},
];

for (var i = 0; i < p.length; i++) {
    console.log("Exibindo post " + p[i].title + ", da categoria: " + p[i].category);
}


// includes

const brands = ["BMW", "VW", "Fiat"]

console.log(brands.includes("Fiat"))
console.log(brands.includes("KIA"))

if (brands.includes("BMW")){
    console.log("Há carros da marca BMW")
}

// exercicio pratico

const frase = "Ola, tudo bem?"
const palavra = "Ola,"

const palavraEncontrada = frase.includes(palavra)
console.log(frase.includes(palavra))

if (palavraEncontrada){
    console.log(`A palavra "${palavra}" foi encontrada na frase`)
} else {
    console.log(`A palavra "${palavra}" não foi encontrada na frase`)
}

console.log("/n")

const li = ["Ruby", "Java", "Python"]

const linguagem = "Go"

const linguagemEncontrada = li.includes(linguagem)

if (linguagemEncontrada){
    console.log(`Linguagem ${linguagem} foi  encontrada `)
} else {
    console.log(`Linguagem ${linguagem} não foi  encontrada `)
}


// reverse

const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse()

console.log(reverseTest)




// sobre os métodos de string 

// trim

const trimTest = " testando \n"

console.log(trimTest)

console.log(trimTest.trim())

console.log(trimTest)

console.log(trimTest.length)
console.log(trimTest.trim().length)

// padStart

const testePadStart = "1"

const newNumber = testePadStart.padStart(4, "0")

console.log(testePadStart)
console.log(newNumber)

const testePadEnd = newNumber.padEnd(10, "0")
console.log(testePadEnd)

// split

const fra = "O rato roeu a roupa do rei de roma"
const arrayDaFrase = fra.split(" ")

console.log(arrayDaFrase)


// exercicios praticos padStart

let num = "5"
let newNum = num.padStart(5, 0)
console.log(newNum)
let newNumEnd = num.padEnd(5, 0)
console.log(newNumEnd)

// padStart e split

const data = "5/2/2025"

// Divide a data em dia, mês e ano
const partes = data.split("/");

// Usa padStart para garantir dois dígitos no dia e no mês
const diaFormatado = partes[0].padStart(2, "0");
const mesFormatado = partes[1].padStart(2, "0");
const ano = partes[2]; // O ano já está correto

// Junta tudo no formato DD/MM/AAAA
const dataFormatada = `${diaFormatado}/${mesFormatado}/${ano}`;

console.log(`Data formatada: ${dataFormatada}`);



const frases = "O rato roeu a roupa do rei de roma"
const arrayDaFrases = frases.split(" ")
console.log(arrayDaFrases)

// join

const fraseDeNovo = arrayDaFrase.join(" ")
console.log(fraseDeNovo)

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`

console.log(fraseDeCompra)

// repeat

const palavras = "Testando "

console.log(palavras.repeat(5))

// rest operator 

const somaInfinita = (...args) =>{
    let total = 0

    for(let i = 0; i < args.length; i++){
        total += args[i]  
    }

    return total
}

console.log(somaInfinita(1, 2, 3))

console.log(somaInfinita(10, 2000, 3435, 1234, 12, 167, 222))


// exercicios usando o metodo assign, keys, entries
// gerenciamneto de biblioteca

const livro = {
    titulo: "JavaScript, o guia definitivo",
    autor: "David Flanagan",
    anoPublicado: 1996,
    disponivel: true
}

const InformaçõesAdicionais = {
    genero: "Informativo",
    paginas: 1080 
}

const livroCompleto = Object.assign(livro, InformaçõesAdicionais)
console.log(livroCompleto)

const livroKeys = Object.keys(livroCompleto)
console.log(livroKeys)

const livroEntries = Object.entries(livroCompleto)
console.log(livroEntries)

function verificarDisponibilidade(livro){

    if(livro.disponivel){
        return `Livro ${livro.titulo }disponível`
    } else {
        return`Livro ${livro.titulo} indisponível`
    }
}

console.log(verificarDisponibilidade(livroCompleto));


// Exercício: Manipulando Dados de Cliente

const dados = {
    nome: "Miguel Santos",
    idade: 23,
    email: "miguelS@gmail.com",
    endereco: "Rua das Flores"
}

const novosDados = {
    emailNovo: "miguelSantos@gmail.com",
    numero: 123456
}

const tudoJunto = Object.assign(dados, novosDados)
const chaves = Object.keys(tudoJunto)
//const entradas = Object.entries(tudoJunto)

console.log(tudoJunto)
console.log(chaves)
//console.log(entradas)

console.log("Pares chave-valor:");
Object.entries(tudoJunto).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

function calcularMedia(...valores){
    let soma = 0
    for (i = 0; i < valores.length; i++){
        soma = soma + valores[i]
    }
    const media = soma / valores.length
    return media
}

const media1 = calcularMedia(7, 8, 9)
const media2 = calcularMedia(10, 7, 4)
const media3 = calcularMedia(12, 12, 6)   

console.log(media1)
console.log(media2)
console.log(media3)

function registrarPedido(nome, ...pedido){
    console.log(`Pedido registrado para: ${nome}`)

    if (pedido.length === 0){
        console.log("Nenhum pedido registrado.")
    } else {
        for(let i = 0; i < pedido.length; i++){
            console.log(`Produto ${i + 1}: ${pedido[i]}`)
        }
    }
}

registrarPedido("Vitor", "Camisa", "Tenis", "Blusa")
console.log("------");
registrarPedido("João"); // Nenhum produto



function criarContadorDeVendas(...produtos){
    totalVendas = 0
    return{
        incrementar: function(){
            for(let i = 0; i <= produtos.length; i++){
                totalVendas = i
            }
            return totalVendas
        },
        mostrarProdutos: function(){
            return produtos.join(", ")
        }
    }
}

const pedidos = criarContadorDeVendas("short", "camisa", "camiseta", "tenis", "pulseira")
console.log("Total de vendas:", pedidos.incrementar())
console.log("Produtos:", pedidos.mostrarProdutos())
// foreach e push

const nus = [1, 4, 5 , 6, 8]
const resultados = []
nus.forEach(function(numeros){
   const resultado = numeros + 10

    resultados.push(resultado)
}) 

console.log("Array original:", nus)
console.log("Array com resultado", resultados)


function soma10(...num){
    let resultado = []
    for(i = 0; i < num.length; i++){
        resultado.push(num[i] + 10)
    }

    return resultado
    
}

const soma1 = soma10(8, 5, 7 , 2, 4)
console.log(soma1)


// for...of

const somaInfinita2 = (...args) => {
    let total = 0

    for (num of args) {
        total += num
    }

    return total
}

console.log(somaInfinita2(1, 2, 4))
console.log(somaInfinita2(5, 6, 1, 23))

function produtoEstoque(...produtos){
    for(let i = 0; i < produtos.length; i++){
        console.log(produtos[i])
    }
    return produtos
}
produtoEstoque("Sabão", "Lençol", "Vasilha")


function produtoEstoque(...produtos) {
    const estoqueUnico = new Set(produtos); // Remove duplicatas
    for (const produto of estoqueUnico) {
        console.log(produto);
    }
    return Array.from(estoqueUnico); // Retorna os produtos únicos como array
}

const prods = produtoEstoque("Sabão", "Lençol", "Vasilha", "Sabão", "Vasilha");
console.log(prods); // Exibe ["Sabão", "Lençol", "Vasilha"]


// destructuring em objetos

const userDetails = {
    firstName: "Matheus",
    lastName: "Battisti",
    job: "Progrmador"
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job)

// renomear variaveis

const {firstName: primeiroNome} = userDetails

console.log(primeiroNome) 

// destructuring em array

const myList = ["Avião", "Submarino", "Carro"]

const [veiculoA, veiculoB, veiculoC] = myList

console.log(veiculoA, veiculoB, veiculoC)

// JSON 

const myJson = '{"name": "matheus", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}'
console.log(myJson)
console.log(typeof myJson)
const myObject = JSON.parse(myJson)
console.log(myObject)
console.log(myObject.name)
console.log(typeof myObject)
// json invalido
const badJson = '{"name": Matheus, "age": 31}'
// const myBadObject = JSON.parse(badJson)
myObject.isOpenToWork = true
console.log(myObject)
const myNewJson = JSON.stringify(myObject)
console.log(myNewJson)
console.log(typeof myNewJson)


// 1. Criar um objeto JSON
// roda apenas no console do navegador localStorage é um recurso exclusivo dos navegadores.

const usuario = {
    nome: "Carlos Silva",
    idade: 30,
    email: "carlos@email.com",
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
};

// 2. Converter o objeto para uma string JSON
const usuarioJSON = JSON.stringify(usuario);
console.log("JSON String:", usuarioJSON);

// 3. Salvar no localStorage
localStorage.setItem("usuario", usuarioJSON);

// 4. Recuperar a string JSON do localStorage
const usuarioSalvo = localStorage.getItem("usuario");

// 5. Converter de volta para objeto
const usuarioObjeto = JSON.parse(usuarioSalvo);
console.log("Objeto Recuperado:", usuarioObjeto);

// Exibir o nome do usuário
console.log("Nome do usuário:", usuarioObjeto.nome);


// codigo para o nodeJS

const fs = require('fs');

// 1. Criar um objeto JSON
const usu = {
    nome: "Carlos Silva",
    idade: 30,
    email: "carlos@email.com",
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
};

// 2. Converter para string JSON
const usuJSON = JSON.stringify(usu, null, 2); // Indentação para facilitar a leitura

// 3. Salvar em um arquivo JSON
fs.writeFileSync("usuario.json", usuJSON);
console.log("Usuário salvo em usuario.json");

// 4. Ler o arquivo JSON
const usuariooSalvo = fs.readFileSync("usuario.json", "utf-8");

// 5. Converter de volta para objeto
const usuariooObjeto = JSON.parse(usuariooSalvo);
console.log("Objeto Recuperado:", usuariooObjeto);

// Exibir o nome do usuário
console.log("Nome do usuário:", usuarioObjeto.nome);

// exemplo 2

// 1. Criar um array de objetos JSON (lista de produtos)
const produtos = [
    { id: 1, nome: "Teclado", preco: 30.0 },
    { id: 2, nome: "Mouse", preco: 20.0 },
    { id: 3, nome: "Monitor", preco: 450.0 },
    { id: 4, nome: "Cadeira Gamer", preco: 750.0 },
    { id: 5, nome: "Pendrive 32GB", preco: 45.0 }
];

// 2. Converter para uma string JSON
const produtosJSON = JSON.stringify(produtos, null, 2);
console.log("Lista de produtos (JSON String):", produtosJSON);

// 3. Filtrar produtos com preço maior que 50
const produtosCaros = produtos.filter(produto => produto.preco > 50);

// 4. Exibir os produtos filtrados no console
console.log("Produtos com preço acima de 50:", JSON.stringify(produtosCaros, null, 2));

const NJSON = JSON.parse(produtosJSON)
console.log(typeof NJSON)