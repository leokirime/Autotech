// home.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página HOME carregada');

    // Seleciona os cards
    const cardVenda = document.querySelector('#card-venda');       // Card Carro à Venda
    const cardAssinatura = document.querySelector('#card-assinatura'); // Card Carro por Assinatura

    // Redirecionamento ao clicar
    if(cardVenda) {
        cardVenda.addEventListener('click', () => {
            window.location.href = 'vendas.html'; // página de venda
        });
    }

    if(cardAssinatura) {
        cardAssinatura.addEventListener('click', () => {
            window.location.href = 'assinatura.html'; // página de assinatura
        });
    }
});
