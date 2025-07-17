
const h2 = document.querySelector("#acontrario")
const enviar = document.querySelector("#enviar")
const limpar = document.querySelector("#limpar")
const resposta = document.querySelector("#resposta")
const vilanInput = document.querySelector("#vilan")

const vilans = ['Black Knights', 'Puppet Master', 'Ghost Clowner', 'Witch Doctors', 'Waxed Phantom', 'Manor Phantom', 'Ghost Bigfoot', 'Haunted Horse', 'Davy Crockett', 'Captain Injun', 'Greens Gloobs', 'Ghostly Manor', 'Netty Crabbes', 'King Katazuma', 'Gators Ghouls', 'Headless Jack', 'Mambas Wambas', 'Medicines Man','Demon Sharker', 'Kelpy Monster', 'Gramps Vamper', 'Phantom Racer', 'Skeletons Men', 'Moon Monsters'];

let randomElement = vilans[Math.floor(Math.random() * vilans.length)];

let splitElement = randomElement.split("");

let reverseElement = splitElement.reverse();

let joinElement = reverseElement.join();

h2.innerText += ` ${joinElement}`

function ScoobyDooPuzzle(guess){
    guess = vilanInput.value


    if (guess === randomElement){
        resposta.innerText = `Resposta correta!`
    } else {
        resposta.innerText = `Resposta Incorreta`
    }
    
};

enviar.addEventListener("click", () => {

    ScoobyDooPuzzle(vilanInput)
})

limpar.addEventListener("click", () =>{

    resposta.innerText = " "
    vilanInput.value = " "
})

/*
let numeroAleatorio = Math.floor(Math.random() * 100);
console.log(numeroAleatorio);
*/ 