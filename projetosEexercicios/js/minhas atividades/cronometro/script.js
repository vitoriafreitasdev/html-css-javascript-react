
document.addEventListener("DOMContentLoaded", function() {
    let minutoElem = document.getElementById("minuto");
    let segundoElem = document.getElementById("segundo");
    let timerId = null;

   function iniciar(){
    if(!timerId){
        timerId = setInterval(() =>{
            let minuto = parseInt(minutoElem.innerHTML)
            let segundo = parseInt(segundoElem.innerHTML)

            segundo++

            if(segundo === 60){
                segundo = 0
                minuto++
            }

            segundoElem.innerText = segundo
            minutoElem.innerText = minuto
        }, 1000)
    }
   }

   function parar(){
    clearInterval(timerId)
    timerId = null
   }

   function reiniciar(){
    parar()
    segundoElem.innerText = "00"
    minutoElem.innerHTML = "00"
   }

    // Expor funções para serem chamadas no HTML
    window.iniciar = iniciar;
    window.parar = parar;
    window.reiniciar = reiniciar;

})

/* usando o settimeout

document.addEventListener("DOMContentLoaded", function() {
    let minutoElem = document.getElementById("minuto");
    let segundoElem = document.getElementById("segundo");
    let timerId = null;

    function atualizarTimer() {
        let minuto = parseInt(minutoElem.innerText);
        let segundo = parseInt(segundoElem.innerText);

        segundo++;

        if (segundo === 60) {
            segundo = 0;
            minuto++;
        }

        segundoElem.innerText = segundo.toString().padStart(2, '0');
        minutoElem.innerText = minuto.toString().padStart(2, '0');

        timerId = setTimeout(atualizarTimer, 1000);
    }

    function iniciar() {
        if (!timerId) {
            atualizarTimer();
        }
    }

    function parar() {
        clearTimeout(timerId);
        timerId = null;
    }

    function reiniciar() {
        parar();
        segundoElem.innerText = "00";
        minutoElem.innerText = "00";
    }

    // Expor funções para serem chamadas no HTML
    window.iniciar = iniciar;
    window.parar = parar;
    window.reiniciar = reiniciar;
});


*/