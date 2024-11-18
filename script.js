document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.getElementById('surprise-button');
    const nosotrosLink = document.getElementById('nosotros-link');
    const acercaLink = document.getElementById('acerca-link');
    const siLink = document.getElementById('si-link');
    const inicioLink = document.getElementById('inicio-link');
    const mainImage = document.getElementById('main-image');

    const welcomeSection = document.querySelector('.welcome');
    const surpriseContent = document.getElementById('surprise-content');

    // Función para ocultar la imagen y la sección de bienvenida
    const hideMainContent = () => {
        mainImage.style.display = 'none';
        welcomeSection.style.display = 'none';
    };

    // Función para mostrar la imagen y la sección de bienvenida
    const showMainContent = () => {
        mainImage.style.display = 'block';
        welcomeSection.style.display = 'block';
        surpriseContent.style.display = 'none';
    };

    // Configura los eventos para los enlaces
    if (nosotrosLink) {
        nosotrosLink.addEventListener('click', (e) => {
            e.preventDefault();
            hideMainContent();
            surpriseContent.innerHTML = '<iframe src="https://aronhdez23122005.github.io/CARTA/CARTA.html" title="Sorpresa" width="100%" height="500px" style="border:none;"></iframe>';
            surpriseContent.style.display = 'block';
        });
    }

    if (acercaLink) {
        acercaLink.addEventListener('click', (e) => {
            e.preventDefault();
            hideMainContent();
            surpriseContent.innerHTML = '<iframe src="https://aronhdez23122005.github.io/payuri/acercademi.html" title="Sorpresa" width="100%" height="500px" style="border:none;"></iframe>';
            surpriseContent.style.display = 'block';
        });
    }

    if (siLink) {
        siLink.addEventListener('click', (e) => {
            e.preventDefault();
            hideMainContent();
            surpriseContent.innerHTML = '<iframe src="https://aronhdez23122005.github.io/CARA/CARA.html" title="Sorpresa" width="100%" height="500px" style="border:none;"></iframe>';
            surpriseContent.style.display = 'block';
        });
    }

    if (inicioLink) {
        inicioLink.addEventListener('click', (e) => {
            e.preventDefault();
            showMainContent();
        });
    }

    // Evento para el botón de sorpresa
    surpriseButton.addEventListener('click', () => {
        alert('¡Sorpresa!, aquí no hay nada...Te Amo Yuri...');
    });
});
