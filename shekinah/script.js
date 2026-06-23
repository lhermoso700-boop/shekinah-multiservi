// script.js
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const form = document.getElementById("contact-form");
  const responseMessage = document.getElementById("form-response");

  // Mejorar accesibilidad: actualizar aria-expanded y controlar menú móvil
  navToggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  if (window.emailjs) {
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    responseMessage.textContent = "Enviando mensaje...";
    responseMessage.style.color = "#b87333";

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(
        function () {
          responseMessage.textContent = "Mensaje enviado con éxito. Gracias.";
          form.reset();
        },
        function (error) {
          responseMessage.textContent = "Error al enviar. Por favor intente de nuevo.";
          responseMessage.style.color = "#ff6b6b";
          console.error("EmailJS error:", error);
        }
      );
  });
});