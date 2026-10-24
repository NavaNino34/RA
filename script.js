
/* Seleccionar los botones de categorías y los productos */
const filterButtons = document.querySelectorAll('.categorias button');
const comicCards = document.querySelectorAll('.productos .producto');

/* Relacionar el texto de cada botón con su categoría */
function getButtonCategory(button) {
    // Si el botón ya tiene data-category, utilizarlo.
    if (button.dataset.category) {
        return button.dataset.category;
    }

    // Adaptarse al HTML original de Cristopher.
    const label = button.textContent
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase();

    const categories = {
        'todos': 'all',
        'superheroes': 'superheroes',
        'manga': 'manga',
        'novelas graficas': 'novelas-graficas'
    };

    return categories[label];
}

/* Filtrar los cómics */
function filterComics(category) {
    comicCards.forEach(card => {
        // Reconocer el atributo de las dos versiones del HTML.
        const cardCategory =
            card.dataset.category || card.dataset.categoria;

        const visible =
            category === 'all' || cardCategory === category;

        card.style.display = visible ? '' : 'none';
    });
}

/* Eventos de los botones */
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = getButtonCategory(button);

        if (!category) {
            console.warn('No se reconoce la categoría del botón.');
            return;
        }

        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');
        filterComics(category);
    });
});

/* Mostrar todos los productos al iniciar */
filterComics('all');
