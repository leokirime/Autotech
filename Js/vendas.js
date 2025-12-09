// venda.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página CARROS À VENDA carregada');

    // Animação hover nos cards
    const cards = document.querySelectorAll('.veiculo-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.03)';
            card.style.transition = 'transform 0.3s';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Filtragem simples
    const formVenda = document.querySelector('#filtro-venda form');
    formVenda.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(formVenda);
        const filters = Object.fromEntries(formData.entries());
        console.log('Filtros venda:', filters);

        const allCards = document.querySelectorAll('.veiculo-card');
        allCards.forEach(card => {
            const modelo = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = filters.modelo && !modelo.includes(filters.modelo.toLowerCase()) ? 'none' : 'block';
        });
    });
});
