// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do numero secreto";
//
// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um numero entre 1 e 10";

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = parseInt(Math.random() * numeroLimite + 1);
let tentativas = 1;

function mensagemInicial(){
    exibitTextoNaTela("h1", "Jogo do numero secreto");
    exibitTextoNaTela("p", "Escolha um numero entre 1 e 10");
}

mensagemInicial();

function exibitTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibitTextoNaTela("h1", "Jogo do numero secreto");
exibitTextoNaTela("p", "Descubra um numero entre 1 e 10");

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;
    if(quantidadeDeElementos == 3){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o numero secreto em ${tentativas} ${palavraTentativa}!`;
        exibitTextoNaTela("h1", "Acertou!");
        exibitTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto){
            exibitTextoNaTela("p", "O numero secreto é menor!");
        } else {
            exibitTextoNaTela("p", "O numero secreto é maior!");
        }
        limparCampo()
        tentativas++;
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = '';
}

