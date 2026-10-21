// Seleccion de elementos del DOM para el filtro
const filterButtons = document.querySelectorAll('.filter-btn');
const comicCards = document.querySelectorAll('.comic-card');

// Funcion para filtrar productos por categoria
function filterComics(category) {
    comicCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Event listener para los botones del filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.getAttribute('data-category');
        filterComics(category);
    });
});