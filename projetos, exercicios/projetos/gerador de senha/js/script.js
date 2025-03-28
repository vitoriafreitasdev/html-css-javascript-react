// Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Novas funcionalidades
const openCloseGeneratorButton = document.querySelector(
  "#open-generate-password"
);
const generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");

// funções 
const getLetterLowerCase = () => {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // para gerar uma letra aleatoria minuscula https://www.grepper.com/codeimages/ascii-value-of-alphabets-in-javascript.png 97 pq as letras minuscula começa pelo 97
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // para gerar uma letra aleatoria maiuscula começa no 65
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%&*+-"
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password =  " "
    // segunda versão
    
    const passwordLength = +lengthInput.value;

    const generators = [];

    if(lettersInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase);
    }

    if(numbersInput.checked) {
        generators.push(getNumber);
    }

    if(symbolsInput.checked) {
        generators.push(getSymbol);
    }

    console.log(generators.length);

    if (generators.length === 0) {
        return;
    }


    for(i = 0; i < passwordLength; i = i + generators.length){
        generators.forEach(() => {

            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;
        })
    }
    
   
    password = password.slice(0, passwordLength);

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
};

// Eventos
generatePasswordButton.addEventListener("click", () => {
    generatePassword(
      getLetterLowerCase,
      getLetterUpperCase,
      getNumber,
      getSymbol
    );
  });

  openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide");
  })

  copyPasswordButton.addEventListener("click", (e) =>  {
    e.preventDefault();

    const password = generatedPasswordElement.querySelector("h4").innerText
    console.log(password);
    // para pegar a senha e o usario ja pode dar ctrl v
    navigator.clipboard.writeText(password).then(() => {

        copyPasswordButton.innerText = "Senha copiada com sucesso!";

        setTimeout(() =>{
        
            copyPasswordButton.innerText = "Copiar"
        
        }, 1000)
    })
  })