let tempo_trabalho = 5 ;
let tempo_descanso = 5 ;
let timer = tempo_trabalho;
let fase= "trabalho";
let rodando= false
let timerId = null; 

function iniciaPausa(){
    if (rodando == false) {
        iniciar()
        rodando = true   
        let botao = document.getElementById('botao')
        botao.textContent='Pausar';     
    }else{
        pausar()
        rodando = false
        let botao = document.getElementById('botao')
        botao.textContent='Iniciar'; 
    }
}



function iniciar(){
    if (timerId !== null) {
        clearInterval(timerId)

    }

    timerId = setInterval(tick, 1000);
    
}

function pausar() {
    if (timerId !== null) {
        
        clearInterval(timerId)
        timerId = null
    }

}

    function tick(){

        let timerDiv = document.getElementById('timerDiv')
        display()   
        console.log(timer)
        timer = timer - 1 

        if (timer < 0) {
            if (fase === 'trabalho') {
                fase = 'descanso'
                timer = tempo_descanso
  

            }else{
                fase = 'trabalho'
                timer = tempo_trabalho


            }
        }

    }

function display() {
    let minutos = Math.floor(timer / 60)
    let segundos = timer % 60
    if (segundos < 10) segundos = '0' + segundos

    let timerDiv = document.getElementById('timerDiv')
    timerDiv.textContent=minutos + ':' + segundos 
    let status = document.getElementById('status')
    if (!rodando && timerId === null) {
        
        status.textContent= 'Pomodoro'
    }else if (fase != 'descanso') {

        document.body.className = 'trabalho';
        status.textContent= 'Focus Time'
    }else{

        document.body.className = 'descanso';
        status.textContent= 'Break Time'
    }
}








window.addEventListener('load', () => {
    display();
});