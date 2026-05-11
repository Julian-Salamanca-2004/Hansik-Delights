// --- 1. MENSAJES PERSONALIZADOS (Paso 3 de la guía) ---
const saludoElt = document.getElementById('saludo-dinamico');
const hora = new Date().getHours();

if (saludoElt) {
    let mensaje = "";
    if (hora < 12) mensaje = "¡Buenos días! Bienvenido a HanSik";
    else if (hora < 18) mensaje = "¡Buenas tardes! Disfruta el sabor coreano";
    else mensaje = "¡Buenas noches! Una cena especial te espera";
    
    // Esto cambia el texto dinámicamente manteniendo el estilo
    saludoElt.innerHTML = `<p>${mensaje}</p><p>Delights</p>`;
}

// --- 2. SLIDER DE IMÁGENES AUTOMÁTICO (Paso 3 de la guía) ---
// IMPORTANTE: Verifica que estos nombres de archivos existan en tu carpeta /imagenes
const imagenes = [
    "imagenes/img1.jpg", 
    "imagenes/img2.jpg", 
    "imagenes/img3.jpg"
];
let indice = 0;
const banner = document.getElementById('banner-dinamico');

if (banner && imagenes.length > 0) {
    setInterval(() => {
        indice = (indice + 1) % imagenes.length;
        // Cambia el fondo suavemente
        banner.style.backgroundImage = `url('${imagenes[indice]}')`;
    }, 5000); // 5000ms = 5 segundos
}

// --- 3. EVENTOS MOUSEOVER/MOUSEOUT (Paso 3 de la guía) ---
const botonContacto = document.querySelector('.btn');

if (botonContacto) {
    botonContacto.addEventListener('mouseover', () => {
        botonContacto.style.backgroundColor = "#d35400"; // Cambia color
        botonContacto.style.transform = "scale(1.1)";    // Agranda un poco
    });

    botonContacto.addEventListener('mouseout', () => {
        botonContacto.style.backgroundColor = "";       // Vuelve al original
        botonContacto.style.transform = "scale(1)";     // Vuelve al tamaño normal
    });
}