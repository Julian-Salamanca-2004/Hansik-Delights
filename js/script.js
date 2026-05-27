document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('saludo-dinamico');
    const hora = new Date().getHours();
    let textoSaludo = "";

   
    if (hora >= 6 && hora < 12) {
        textoSaludo = "¡Buenos días!";
    } else if (hora >= 12 && hora < 18) {
        textoSaludo = "¡Buenas tardes!";
    } else {
        textoSaludo = "¡Buenas noches!";
    }

    
    if (contenedor) {
        contenedor.textContent = `${textoSaludo} Sea bienvenido a HanSik Delights, un lugar para conocer la comida coreana.`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    
    const todosLosBotones = document.querySelectorAll('nav ul li a, .btn, .bt');

    todosLosBotones.forEach(boton => {
        boton.addEventListener('mouseover', () => {
            boton.style.color = "#f1c40f"; // Color amarillo
            boton.style.transition = "0.3s";
            boton.style.textShadow = "0px 0px 8px rgba(241, 196, 15, 0.7)";
            
            boton.style.transform = "scale(1.05)";
        });

        boton.addEventListener('mouseout', () => {
            boton.style.color = ""; 
            boton.style.textShadow = "";
            boton.style.transform = "scale(1)";
        });
    });

    // SALUDO DINÁMICO SEGÚN LA HORA 
    const contenedor = document.getElementById('saludo-dinamico');
    const hora = new Date().getHours();
    let textoSaludo = "";

    if (hora >= 6 && hora < 12) {
        textoSaludo = "¡Buenos días!";
    } else if (hora >= 12 && hora < 18) {
        textoSaludo = "¡Buenas tardes!";
    } else {
        textoSaludo = "¡Buenas noches!";
    }

    if (contenedor) {
        contenedor.textContent = `${textoSaludo} Sea bienvenido a HanSik Delights, un lugar para conocer la comida coreana.`;
    }
});