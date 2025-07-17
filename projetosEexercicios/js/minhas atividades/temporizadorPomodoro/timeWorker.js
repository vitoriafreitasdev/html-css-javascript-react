let timer
let seconds = 0

self.onmessage = function(e) {
    switch(e.data.command) {
        case 'start':
            if (!timer) {
                timer = setInterval(() => {
                    seconds++;

                    self.postMessage({
                        type: 'update',
                        seconds: seconds
                    })
                }, 1000)
            }
        break
        case 'stop':
            clearInterval(timer)
            timer = null
            seconds = 0
            self.postMessage({
                type: 'update',
                seconds: seconds
            })
            break
    }
}
/*
como funcionaria no outro arquivo js

// Criação do worker
const timerWorker = new Worker('timer-worker.js');

// Elementos da interface
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Ouvinte de mensagens do worker
timerWorker.onmessage = function(e) {
    if (e.data.type === 'update') {
        // Atualiza o display
        const minutes = Math.floor(e.data.seconds / 60);
        const secs = e.data.seconds % 60;
        timerDisplay.textContent = 
            `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
};

// Event listeners
startBtn.addEventListener('click', () => {
    timerWorker.postMessage({ command: 'start' });
});

stopBtn.addEventListener('click', () => {
    timerWorker.postMessage({ command: 'stop' });
});

resetBtn.addEventListener('click', () => {
    timerWorker.postMessage({ command: 'reset' });
});




*/