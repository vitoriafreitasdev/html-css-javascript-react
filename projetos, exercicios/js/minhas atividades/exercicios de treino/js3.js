let anosVisitados = [];

while (true) {
    let ano = prompt("Insira um ano visitado (ou digite 'sair' para finalizar): ");
    if (ano.toLowerCase() === 'sair') {
        break;
    } else {
        anosVisitados.push(ano);
        console.log(`Ano ${ano} registrado`);
    }
}

console.log("\nAnos visitados");
anosVisitados.forEach(ano => console.log(ano));


let anos = [1822, 1888, 1932];

let intervencoes = {
    1822: ['jafaisfjaipfj', 'faikfosiafsao'],
    1888: ['opujpojpo', 'lpjpojo'],
    1932: ['gdsagdsg', 'sgdsgsd']
};

let cont = 1;

anos.forEach(ano => {
    intervencoes[ano].forEach(intervencao => {
        console.log(`linha temporal ${cont}: no ano ${ano}, ação realizada: ${intervencao}.`);
        cont++;
    });
});