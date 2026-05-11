const saludoElt = document.getElementById('saludo-dinamico');
const horaActual = new Date().getHours();

if (horaActual < 12) {
    saludoElt.textContent = "¡Buenos días! Bienvenido a HanSik Delights";
} else if (horaActual < 18) {
    saludoElt.textContent = "¡Buenas tardes! Disfruta del sabor coreano";
} else {
    saludoElt.textContent = "¡Buenas noches! Una cena especial te espera";
}

// Arreglo con las rutas de tus imágenes (asegúrate de que los nombres coincidan)
const imagenesSlider = ["imagenes/img1.jpg", "imagenes/img2.jpg", "imagenes/img3.jpg"];
let indiceActual = 0;

// Supongamos que quieres que cambie la imagen principal del banner
const imgBanner = document.querySelector('.banner'); 

function rotarImagenes() {
    indiceActual = (indiceActual + 1) % imagenesSlider.length;
    // Cambia el fondo del banner dinámicamente
    imgBanner.style.backgroundImage = `url('${imagenesSlider[indiceActual]}')`;
}

// Cambia cada 3 segundos (3000 milisegundos)
setInterval(rotarImagenes, 3000);

const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener('mouseover', () => {
        boton.style.backgroundColor = "#d35400"; // Un naranja más oscuro
        boton.style.transform = "scale(1.05)";
    });
    
    boton.addEventListener('mouseout', () => {
        boton.style.backgroundColor = ""; // Vuelve al original de tu CSS
        boton.style.transform = "scale(1)";
    });
});
