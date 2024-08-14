document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login === 'admin' && senha === '1234') {
        document.getElementById('feedback').textContent = 'Login bem-sucedido!';
        document.getElementById('feedback').style.color = 'green';

        
        setTimeout(function() {
            window.location.href = './home.html'; 
        }, 1000); 
    } else {
        document.getElementById('feedback').textContent = 'Login ou senha incorretos!';
        document.getElementById('feedback').style.color = 'red';
    }
});
