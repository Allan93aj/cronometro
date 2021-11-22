function relogio() {

function criarSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })

}



const relogio = document.querySelector(".relogio")
const iniciar = document.querySelector(".iniciar")
const pausar = document.querySelector(".pausar")
const zerar = document.querySelector(".zerar")

let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criarSegundos(segundos);
    }, 1000)
}

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    relogio.classList.add('iniciou');
    clearInterval(timer);
    iniciaRelogio();
})


pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado');
    relogio.classList.remove('iniciou');
    clearInterval(timer)
})

zerar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    relogio.classList.remove('iniciou');
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = "0"
})

}

relogio();
