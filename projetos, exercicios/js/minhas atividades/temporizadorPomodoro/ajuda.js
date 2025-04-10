document.addEventListener('DOMContentLoaded', () => {
    // Elementos DOM
    const timerDisplay = document.getElementById('timer');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const workTimeInput = document.getElementById('workTime');
    const breakTimeInput = document.getElementById('breakTime');
    const saveSettingsBtn = document.getElementById('saveSettings');
    const cycleCountDisplay = document.getElementById('cycleCount');
    const alarm = document.getElementById('alarm');
    
    // Variáveis de estado
    let timer;
    let timeLeft = 0;
    let isRunning = false;
    let isWorkTime = true;
    let cyclesCompleted = 0;
    
    // Carregar configurações salvas
    function loadSettings() {
        const savedWorkTime = localStorage.getItem('workTime');
        const savedBreakTime = localStorage.getItem('breakTime');
        const savedCycles = localStorage.getItem('cyclesCompleted');
        
        if (savedWorkTime) workTimeInput.value = savedWorkTime;
        if (savedBreakTime) breakTimeInput.value = savedBreakTime;
        if (savedCycles) {
            cyclesCompleted = parseInt(savedCycles);
            cycleCountDisplay.textContent = cyclesCompleted;
        }
        
        resetTimer();
    }
    
    // Salvar configurações
    function saveSettings() {
        localStorage.setItem('workTime', workTimeInput.value);
        localStorage.setItem('breakTime', breakTimeInput.value);
        localStorage.setItem('cyclesCompleted', cyclesCompleted);
        resetTimer();
        alert('Configurações salvas!');
    }
    
    // Atualizar display do timer
    function updateDisplay(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Iniciar timer
    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            startBtn.disabled = true;
            pauseBtn.disabled = false;
            
            timer = setInterval(() => {
                timeLeft--;
                updateDisplay(timeLeft);
                
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    alarm.play();
                    if (isWorkTime) {
                        cyclesCompleted++;
                        cycleCountDisplay.textContent = cyclesCompleted;
                        localStorage.setItem('cyclesCompleted', cyclesCompleted);
                        alert('Hora do descanso!');
                        startBreak();
                    } else {
                        alert('Volte ao trabalho!');
                        startWork();
                    }
                }
            }, 1000);
        }
    }
    
    // Pausar timer
    function pauseTimer() {
        clearInterval(timer);
        isRunning = false;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }
    
    // Resetar timer
    function resetTimer() {
        pauseTimer();
        isWorkTime = true;
        timeLeft = parseInt(workTimeInput.value) * 60;
        updateDisplay(timeLeft);
    }
    
    // Iniciar tempo de trabalho
    function startWork() {
        isWorkTime = true;
        timeLeft = parseInt(workTimeInput.value) * 60;
        updateDisplay(timeLeft);
        startTimer();
    }
    
    // Iniciar tempo de descanso
    function startBreak() {
        isWorkTime = false;
        timeLeft = parseInt(breakTimeInput.value) * 60;
        updateDisplay(timeLeft);
        startTimer();
    }
    
    // Event listeners
    startBtn.addEventListener('click', startWork);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    saveSettingsBtn.addEventListener('click', saveSettings);
    
    // Inicializar
    loadSettings();
});