
function mostrar(seccion, boton) {

    // Ocultar todas las páginas
    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach(function(pagina) {
        pagina.classList.add("oculto");
    });

    // Mostrar la página seleccionada
    const paginaSeleccionada = document.getElementById(seccion);

    if (paginaSeleccionada) {
        paginaSeleccionada.classList.remove("oculto");
    }

    // Actualizar el botón activo
    const botones = document.querySelectorAll(".menu-btn");

    botones.forEach(function(elemento) {
        elemento.classList.remove("active");
    });

    if (boton) {
        boton.classList.add("active");
    }

    // Cambiar el título de la barra superior
    const titulos = {
        inicio: "Panel de control",
        cursos: "Mis cursos",
        notas: "Calificaciones",
        prematricula: "Prematrícula",
        horario: "Horario académico",
        carne: "Carné digital"
    };

    document.querySelector(".topbar h3").textContent =
        titulos[seccion] || "Portal Académico";
}


function prematricular() {

    const curso = document.getElementById("curso").value;
    const resultado = document.getElementById("resultado");

    if (curso === "") {

        resultado.textContent =
            "Seleccione una asignatura antes de continuar.";

        resultado.style.color = "#d65b5b";

    } else {

        resultado.textContent =
            "Solicitud de demostración registrada para: " + curso;

        resultado.style.color = "#16845d";
    }
}
