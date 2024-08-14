let nome = document.getElementById('nome')
let senha = document.getElementById('senha')

function pegarDados() {
    let nome = document.getElementById('nome').value
    localStorage.setItem("nome", nome)
}