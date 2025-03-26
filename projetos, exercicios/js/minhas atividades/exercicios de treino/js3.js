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