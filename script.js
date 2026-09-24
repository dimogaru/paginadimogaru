(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-nav");

  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
      navigation.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  const config = window.DIMUGARU_CONFIG || {};
  const configuredLinks = [
    ["offbunker-web-link", config.offbunkerWebUrl, "Añade la URL web en site-config.js para activar este enlace."],
    ["offbunker-app-link", config.offbunkerAppUrl, "Añade la URL de la app en site-config.js para activar este enlace."],
    ["contact-link", config.contactUrl],
    ["footer-contact-link", config.contactUrl],
  ];

  configuredLinks.forEach(([id, url, placeholderMessage]) => {
    const link = document.getElementById(id);
    if (!link) return;
    if (!url && placeholderMessage) {
      link.setAttribute("aria-disabled", "true");
      link.title = placeholderMessage;
      link.addEventListener("click", (event) => event.preventDefault());
      return;
    }
    if (!url) return;
    link.href = url;
    if (/^https?:\/\//i.test(url)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.removeAttribute("target");
      link.removeAttribute("rel");
    }
  });

  document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });

  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();