
document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('cadastrarButton').addEventListener('click', function (event) {

        event.preventDefault();


        let nome = document.getElementById('nome').value;
        let senha = document.getElementById('senha').value;
        let repita = document.getElementById('repita').value;


        if (senha === repita) {

            localStorage.setItem("nome", nome);
            localStorage.setItem("senha", senha);


            alert('Cadastro realizado com sucesso!');


            window.location.href = 'login.html';
        } else {

            alert('As senhas não correspondem. Por favor, tente novamente.');
        }
    });
});
