//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let nome = document.querySelector('#amigo').value;
    let nomeLimpo = nome.trim();
    
if (nomeLimpo == ''){
    alert("Digite um nome");
    return;
}

for (let i=0; i<amigos.length; i++){
    if (nomeLimpo == amigos[i]){
    alert ("Nome já inserido. Por favor, insira outro nome") 
    return;
    }    
    }

    amigos.push(nome); 
    alert("Nome inserido com sucesso");
    limparCampo();
    atualizarLista();
} 

console.log(amigos);

function atualizarLista(){
const ul = document.querySelector('#listaAmigos');

ul.innerHTML = "";

for (let i=0; i<listaAmigos.length; i++){
    const li = document.createElement('li');
    li.textContent = amigos[i];
    ul.appendChild(li);

    if (nomeLimpo == amigos[i]){
        alert ("Nome já inserido")
    }
    }

}

function limparCampo(){
    nome = document.querySelector('#amigo');
    nome.value = '';
}

function sortearAmigo(){

    if (amigos.length === 0){
        alert ("Comece digitando os nomes dos amigos");
        return;
    }

    let resultado = document.getElementById('resultado');

    let sorteio = Math.floor(Math.random() * amigos.length);
    console.log ("O nome sorteado é : " + amigos[sorteio]);

    resultado.innerHTML = `<li>${amigos[sorteio]}</li>`;

    
}
