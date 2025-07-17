const cartas = document.querySelectorAll(".carta");
const contadorH2 = document.querySelector("#contador")
const timerH2 = document.querySelector("#timer")
const iniciarTimer = document.querySelector("#iniciarTimer")
const zerarTimer = document.querySelector("#zerarTimer")
const zerarContador = document.querySelector("#zerarContador")
let contador = -6

// timer


document.addEventListener("DOMContentLoaded", function() {
  let timer = null 
  let minuto = 0
  let segundo = 0

    function iniciar(){
      if(timer){
        return
      }
      timer = setInterval(() => {
        segundo ++
        if(segundo === 60){
          segundo = 0
          minuto++
        }

        timerH2.innerText = `${minuto}:${segundo}`
      }, 1000)

    }

    function parar(){
      clearInterval(timer)
      timer = null
      segundo = 0
      minuto = 0
      timerH2.innerText = `${minuto}:${segundo}`
    }

    iniciarTimer.addEventListener("click", () => {
      iniciar()
    })

    zerarTimer.addEventListener("click", () => {
      parar()
    })

})

cartas.forEach(carta => {
  carta.addEventListener("click", () => {
    carta.classList.toggle("virada");
    contador = contador + 1
    if (contador > 0){
      contadorH2.innerText = `Contador = ${contador}`
    }
  });
});

zerarContador.addEventListener("click", () =>{
  contador = -6
  contadorH2.innerText = `Contador = `
})