document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login === 'admin' && senha === '1234') {
        document.getElementById('feedback').textContent = 'Login bem-sucedido!';
        document.getElementById('feedback').style.color = 'green';

        // Redireciona para a página do catálogo
        setTimeout(function() {
            window.location.href = './home.html'; // Substitua pelo caminho da página de catálogo
        }, 1000); // Atraso de 1 segundo para que a mensagem de sucesso seja visível
    } else {
        document.getElementById('feedback').textContent = 'Login ou senha incorretos!';
        document.getElementById('feedback').style.color = 'red';
    }
});
