

function hashStringToInt(s, tableSize) {
    let hash = 17;
  
    for (let i = 0; i < s.length; i++) {
      hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }
  
    return hash;
}

class HashTable {

    table = new Array(3);
    numItens = 0;
    loadFactor = this.numItens / this.table.length 

setItem = (key, value) => {
    this.numItens++;
    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  getItem = key => {
    const idx = hashStringToInt(key, this.table.length);

    if (!this.table[idx]) {
      return null;
    }

    // O(n)
    return this.table[idx].find(x => x[0] === key)[1];
  };
}

const myTable = new HashTable();
myTable.setItem("firtsName", "bob");
myTable.setItem("firtsName", "bob");
myTable.setItem("lastsName", "tim");
myTable.setItem("age", 5);
myTable.setItem("dob", "1/2/3");
//console.log(myTable.table[0])
console.log(myTable.getItem("firtName"))
console.log(myTable.getItem("lastName"))
console.log(myTable.getItem("age"))
console.log(myTable.getItem("dob"))

