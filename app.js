let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let amigo = input.value;

    if (amigo === '') {
        alert('Digite um nome válido!');
        return;
    }

    amigos.push(amigo);
    input.value = '';
    listaAmigos();
}

function listaAmigos() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}

