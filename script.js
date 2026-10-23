// ========================================
// URBAN CUTS — FUNCIONALIDADES
// ========================================


// 1. MENÚ DE NAVEGACIÓN PARA CELULARES

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Cerrar el menú al seleccionar una sección.
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
            menuToggle.textContent = "☰";
        });
    });

    // Cerrar el menú si se vuelve a una pantalla grande.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 680) {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
            menuToggle.textContent = "☰";
        }
    });
}


// 2. ACTUALIZAR AUTOMÁTICAMENTE EL AÑO DEL FOOTER

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// 3. CONFIGURAR RESERVAS POR WHATSAPP

/*
    IMPORTANTE:
    Reemplazá el número de ejemplo por el número real
    de la barbería cuando personalices el proyecto.

    Formato internacional:
    - Código de país.
    - Código de área, si corresponde.
    - Número sin espacios, guiones ni signo +.

    Ejemplo de formato argentino:
    549XXXXXXXXXX

    No publiques un número ajeno sin autorización.
*/

const WHATSAPP_NUMBER = "5493838402391";

const whatsappButton = document.getElementById("whatsapp-button");

if (whatsappButton) {
    const placeholderNumber = "5491100000000";

    const message =
        "¡Hola, URBAN CUTS! Quiero consultar disponibilidad para reservar un turno.";

    const whatsappUrl =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    whatsappButton.href = whatsappUrl;

    whatsappButton.addEventListener("click", (event) => {
        if (WHATSAPP_NUMBER === placeholderNumber) {
            event.preventDefault();

            alert(
                "Este sitio es una demostración. Para activar las reservas, " +
                "configurá el número real de WhatsApp de la barbería en script.js."
            );
        }
    });
}


// 4. EFECTO VISUAL SUTIL AL CARGAR LA PÁGINA

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-loaded");
});

console.log("URBAN CUTS: sitio cargado correctamente.");

