document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Pega os valores dos campos de login e senha
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    // Condição simples de validação (você pode personalizar isso)
    if (login === 'admin' && senha === '1234') {
        document.getElementById('feedback').textContent = 'Login bem-sucedido!';
        document.getElementById('feedback').style.color = 'green';
        // Aqui você pode redirecionar o usuário ou fazer outra ação
    } else {
        document.getElementById('feedback').textContent = 'Login ou senha incorretos!';
        document.getElementById('feedback').style.color = 'red';
    }
});
