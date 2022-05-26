let casas = document.querySelectorAll('input');
let titulo = document.querySelector('#nomeJogador');
let container = document.querySelector('.container');
let botao = document.querySelector('#botao');
let vencedor = document.querySelector('#vencedor');
let jogador = 'X';

for (var i = 0; i < 9; i++) {
    casas[i].addEventListener('click', (event) => {
        if (event.target.value == '_') {
            event.target.value = jogador;
            event.target.style.color = 'black';
        }
        verificarGanhador();
        trocarJogador();
    });
}
function trocarJogador() {
    if (jogador == 'X') {
        jogador = 'O';
        titulo.innerText = 'Vez do jogador O';
        event.target.style.color = '#00aeff';
    } else {
        jogador = 'X';
        titulo.innerText = 'Vez do jogador X';
    }
}
function verificarGanhador() {
    if (
        casas[0].value == jogador &&
        casas[1].value == jogador &&
        casas[2].value == jogador
    ) {
        vencedor.innerText = 'Jogador ' + jogador + ' ganhou';
        container.removeChild(titulo);
    }
    if (
        casas[3].value == jogador &&
        casas[4].value == jogador &&
        casas[5].value == jogador
    ) {
        vencedor.innerText = 'Jogador ' + jogador + ' ganhou';
        container.removeChild(titulo);
    }
    if (
        casas[6].value == jogador &&
        casas[7].value == jogador &&
        casas[8].value == jogador
    ) {
        vencedor.innerText = 'Jogador ' + jogador + ' ganhou';
        container.removeChild(titulo);
    }
    if (
        casas[0].value == jogador &&
        casas[3].value == jogador &&
        casas[6].value == jogador
    ) {
        vencedor.innerText = 'Jogador ' + jogador + ' ganhou';
        container.removeChild(titulo);
    }
    if (
        casas[1].value == jogador &&
        casas[4].value == jogador &&
        casas[7].value == jogador
    ) {
        vencedor.innerText = 'Jogador ' + jogador + ' ganhou';
        container.removeChild(titulo);
    }
    if (
        casas[2].value == jogador &&
        casas[5].value == jogador &&
        casas[8].value == jogador
    ) {
        vencedor.innerText = 'Jogador ' + jogador + ' ganhou';
        container.removeChild(titulo);
    }
    if (
        casas[0].value == jogador &&
        casas[4].value == jogador &&
        casas[8].value == jogador
    ) {
        vencedor.innerText = 'Jogador ' + jogador + ' ganhou';
        container.removeChild(titulo);
    }
    if (
        casas[2].value == jogador &&
        casas[4].value == jogador &&
        casas[6].value == jogador
    ) {
        vencedor.innerText = 'Jogador ' + jogador + ' ganhou';
        container.removeChild(titulo);
    }
}
