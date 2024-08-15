document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    // Recupera o nome e senha armazenados no localStorage
    const storedNome = localStorage.getItem("nome");
    const storedSenha = localStorage.getItem("senha");

    if (login === storedNome && senha === storedSenha) {
        document.getElementById('feedback').textContent = 'Login bem-sucedido!';
        document.getElementById('feedback').style.color = 'green';

        // Redireciona para a página home após 1 segundo
        setTimeout(function() {
            window.location.href = './home.html'; 
        }, 1000); 
    } else {
        document.getElementById('feedback').textContent = 'Login ou senha incorretos!';
        document.getElementById('feedback').style.color = 'red';
    }
});
