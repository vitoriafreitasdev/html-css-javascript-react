// exercicio hash table

class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(nome){
        let total = 0           
        for(let i = 0; i < nome.lenght; i++){
            total = total + nome.charCodeAt(i)
        }
        return total % this.size
    }

    adicionar(nome, telefone){
        const index = this.hash(nome)
        const bucket = this.table[index]
    }
}