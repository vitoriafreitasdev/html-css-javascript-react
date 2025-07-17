const quantAlunos = document.getElementById("quantAlunos")
const btnEnviar = document.getElementById("btnEnviar")
const resultado = document.getElementById("resultado")
const calcular = document.getElementById("calcular")
const mediasDiv = document.getElementById("medias")



btnEnviar.addEventListener("click", () => {
    const alunos = parseInt(quantAlunos.value)
    resultado.innerHTML = ""

    for(i = 1; i <= alunos; i++){

        let template = `<div class="row">
                            <div class="alunos"> 
                                Digite a nota do ${i} aluno: <input type="number" name="n1" class="n1">                        
                            </div> 
                            <div class="alunos"> 
                                Digite a segunda nota do ${i} aluno: <input type="number" name="n2" class="n2">                        
                            </div> 
                       </div>`

        resultado.insertAdjacentHTML('beforeend', template);
        calcular.style.display = "block";
    }
    
})


calcular.addEventListener("click", () => {
    const notas1 = document.querySelectorAll(".n1")
    const notas2 = document.querySelectorAll(".n2")
    mediasDiv.innerHTML = "<h3>Médias dos Alunos:</h3>";
    
    for (let index = 0; index < notas1.length; index++) {
            const nota1 = notas1[index];
            const nota2 = notas2[index];
            const n1 = parseFloat(nota1.value);
            const n2 = parseFloat(nota2.value);
            const media = (n1 + n2) / 2;
            mediasDiv.insertAdjacentHTML('beforeend', `<p>Aluno ${index + 1}: ${media.toFixed(2)}</p>`);
    }
    /*notas1.forEach((nota1, index) =>{
       const nota2 = notas2[index]
       const n1 = parseFloat(nota1.value)
       const n2 = parseFloat(nota2.value)
       const media = (n1 + n2) / 2
       mediasDiv.insertAdjacentHTML('beforeend', `<p>Aluno ${index + 1}: ${media.toFixed(2)}</p>`);
    })*/
})
    
