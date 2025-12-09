// assinatura.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página ASSINATURA carregada');

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

    // Filtragem por modelo e valor
    const formAssinatura = document.querySelector('#filtro-assinatura form');
    formAssinatura.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(formAssinatura);
        const filters = Object.fromEntries(formData.entries());
        console.log('Filtros assinatura:', filters);

        const allCards = document.querySelectorAll('.veiculo-card');
        allCards.forEach(card => {
            const modelo = card.querySelector('h3').textContent.toLowerCase();
            const valorText = card.querySelector('p:nth-child(3)').textContent.replace(/[^\d]/g, '');
            const valor = parseInt(valorText);

            let mostrar = true;
            if (filters.modelo && !modelo.includes(filters.modelo.toLowerCase())) mostrar = false;
            if (filters.valor && valor > parseInt(filters.valor)) mostrar = false;

            card.style.display = mostrar ? 'block' : 'none';
        });
    });
});
