document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector("#timer")
    const startBtn = document.querySelector("#startBtn")
    const pauseBtn = document.querySelector("#pauseBtn")
    const resetBtn = document.querySelector("#resetBtn")
    const workTime = document.querySelector("#workTime")
    const breakTime = document.querySelector("#breakTime")
    const saveSettings = document.querySelector("#saveSettings")
    const cycleCount = document.querySelector("#cycleCount")
    const alarm = document.querySelector("#alarm")

    let ciclos = 0
    let timer = null
    let timerDes = null
    let tempoRestante;
    let tempoDeDescanso;

    function iniciar(){
        if(!timer && undefined){
            let minutoTrabalho = parseInt(workTime.value)
            tempoRestante = minutoTrabalho * 60
        }
        
        if(timer) return
        
        if(!timer){
            timer = setInterval (() =>{
                tempoRestante = tempoRestante - 1
                atualizar(tempoRestante)
                  
                if(tempoRestante === 0){
                    clearInterval(timer)
                    iniciarDescansar()
                }
                
            }, 1000)

            
        }
    }

    function pausar(){
        clearInterval(timer)
        timer = null
        
    }

    function resetar(){
        pausar()
        display.textContent = `00:00`
    }

    function salvarLocalStorage(){

        let minutoTrabalho = parseInt(workTime.value)
        let minutoDescanso = parseInt(breakTime.value)
        tempoRestante = minutoTrabalho * 60
        localStorage.setItem("WorkTime", JSON.stringify(minutoTrabalho))
        localStorage.setItem("BreakTime", JSON.stringify(minutoDescanso))
        atualizar(tempoRestante)
    }

    function carregar(){
        // quando carregar retornar os dados salvos
    }

    function atualizar(tempoRestante){
        
        const minuto = Math.floor(tempoRestante / 60);
        let segundo = tempoRestante % 60
        display.textContent = `${minuto.toString().padStart(2, '0')}:${segundo.toString().padStart(2, '0')}`

    }

    function atualizarTempoDescanso(tempoDeDescanso){

        const minuto = Math.floor(tempoDeDescanso / 60);
        let segundo = tempoDeDescanso % 60
        display.textContent = `${minuto.toString().padStart(2, '0')}:${segundo.toString().padStart(2, '0')}`

    }

    function iniciarDescansar(){
        let minutoDescanso = parseInt(breakTime.value)
        // fazer iniciar o descanso depois do trabalho
        tempoDeDescanso = minutoDescanso * 60

    
        if(!timerDes){
            timerDes = setInterval (() =>{
                tempoDeDescanso = tempoDeDescanso - 1
                atualizarTempoDescanso(tempoDeDescanso)
                  
                if(tempoDeDescanso === 0){
                    clearInterval(timerDes)
                    ciclos = ciclos + 1
                    cycleCount.textContent = `Ciclos completos = ${ciclos}`

                    // botar o ciclos salvo na local storage
                }
                
            }, 1000)

            
        }
        
    }

    // eventos

    startBtn.addEventListener("click", () =>{
        iniciar()
    })

    saveSettings.addEventListener("click", () =>{
        salvarLocalStorage()
        

    })
    
    pauseBtn.addEventListener("click", () =>{
        pausar()
    })


    resetBtn.addEventListener("click", () =>{
        resetar()
    })

    // carregar()

})

