// exercicio hash table

class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(nome){
        let total = 0           
        for(let i = 0; i < nome.length; i++){
            total += nome.charCodeAt(i)
        }
        return total % this.size
    }

    adicionar(nome, telefone){
        const index = this.hash(nome)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[nome, telefone]]
        } else{
            const mesmoNome = bucket.find(item => item[0] === nome)
            if(mesmoNome){
                mesmoNome[1] = nome
            } else {
                bucket.push([nome, telefone])
            }
        }
    }

    buscar(nome){
        const index = this.hash(nome)
        const bucket = this.table[index]
        if(bucket){
            const mesmoNome = bucket.find(item => item[0] === nome)
            if(mesmoNome){
                return mesmoNome
            }
        } 
        return undefined
    }

    remover(nome){
        const index = this.hash(nome)
        const bucket = this.table[index]
        if(bucket){
            const mesmoNome = bucket.find(item => item[0] === nome)
            if(mesmoNome){
                bucket.splice(bucket.indexOf(mesmoNome), 1)
            }
        }
    }

    mostrar(){
        for(let i = 1; i < this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}

const lista = new HashTable(50)

lista.adicionar("João", 11985554575)
lista.adicionar("Felipe", 11982544961)
lista.mostrar()
console.log(lista.buscar("João")) 

// password validation

function password(password){
    const numeros = '0123456789'.split('');
    const letrasMai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const letrasMin = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let num = false;
    let letraMaTrue = false;
    let letraMinTrue = false;


    for( const char of password ) {
        if(numeros.includes(char)){
            num = true;
            break;
        } 
    }  

    for( const char of password ) {
        if(letrasMai.includes(char)){
            letraMaTrue = true;
            break;
        } 
    }  

    for( const char of password ) {
        if(letrasMin.includes(char)){
            letraMinTrue = true;
            break;
        } 
    } 

   
        return num && letraMaTrue && letraMinTrue ?  `Password accepted` : `Password denied`;
}

console.log(password("Vi1234"));
console.log(password("vi"));
console.log(password("VI"));
console.log(password("234"));
console.log(password("Vgfdi12345"));

// método mais eficiente

function senha(password) {
    const temNumero = /\d/.test(password);
    const temMaiuscula = /[A-Z]/.test(password);
    const temMinuscula = /[a-z]/.test(password);
    
    return temNumero && temMaiuscula && temMinuscula 
        ? 'Password accepted' 
        : 'Password denied';
}

console.log(senha("Vgfdi12345"));


function reverseString(str) {
    // Passo 1. Crie uma string vazia que vai receber a nova string criada
    var newString = "";
 
    // Step 2. Crie o laço FOR
    /* O ponto inicial do laço será (str.length - 1), que corresponde ao 
       último caractere da string, "o"
       Enquanto i for maior ou igual a 0, o laço continuará
       Decrementamos i após cada iteração */
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // ou newString = newString + str[i];
    }
    /* Aqui, hello's length é igual a 5
        Para cada iteração: i = str.length - 1 e newString = newString + str[i]
        Primeira iteração:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Segunda iteração:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Terceira iteração:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Quarta iteração:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Quinta iteração:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    Fim do laço FOR*/
 
    // Passo 3. Retorne a string invertida
    return newString; // "olleh"
}

console.log(reverseString('hello'))
// usando recursão 

function reverseString(str) {
    if (str === "") // Este é o caso terminal que encerrará a recursão
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
}

// usando js metedos

function reverse(str) {
    // Passo 1. Use o método split() para retornar um novo array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Passo 2. Use o método reverse() para inverter o array recém-criado
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Passo 3. Use o método join() para unir todos os elementos do array em uma string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    // Passo 4. Retorne a string invertida
    return joinArray; // "olleh"
}
 
console.log(reverse("hello"))