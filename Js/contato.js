// contato.js
document.addEventListener('DOMContentLoaded', function() {

    const formContato = document.querySelector('#contato form');
    formContato.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(formContato);
        const dados = Object.fromEntries(formData.entries());
        console.log('Form contato:', dados);

        alert(`Mensagem enviada!\nNome: ${dados.nome}\nEmail: ${dados.email}\nAssunto: ${dados.assunto}`);
        formContato.reset();
    });
});
