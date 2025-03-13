// Animación al hacer scroll (usar IntersectionObserver)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
    }, {
        threshold: 0.3 // Se activa cuando el 30% de la carta esté visible
    });

    cards.forEach(card => observer.observe(card));

    // Mensaje de alerta al presionar "Ordenar"
    const orderButtons = document.querySelectorAll('.card-button');
    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.closest('.card').querySelector('.card-title').innerText;
            alert(`¡Has ordenado: ${productName}! Gracias por tu compra.`);
        });
    });
});
});
