const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolo = '@#?!*+%&°ª§+='
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelector('#checkbox');
const forcaSenha = document.querySelector('#fraca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.textContent=tamanhoSenha;
    geraSenha();
}
botoes[0].onclick =n diminuiTamanho;
botoes[1]

function aumentaTamanho(){
    if(tamanhoSenha < 20){
        tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent=tamanhoSenha
    geraSenha();
}



for (i = 0;i <checkbox.length) 


geraSenha();

function geraSenha(){
    let senha = '';
    for (let i=0; i<tamanhoSenha; i++) {
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio]
    }
    campoSenha.value = senha;
}

