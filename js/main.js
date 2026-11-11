(() => {
  const storageKey = "preferredLang";
  const nodes = document.querySelectorAll("[data-i18n]");
  const toggle = document.getElementById("langToggle");
  const metaDescription = document.querySelector('meta[name="description"]');

  // Spanish lives in the markup; capture it so we can switch back.
  translations.es = {};
  nodes.forEach((node) => {
    translations.es[node.dataset.i18n] = node.textContent;
  });

  const readStoredLang = () => {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  };

  const storeLang = (lang) => {
    try {
      localStorage.setItem(storageKey, lang);
    } catch (error) {
      // Storage unavailable (private mode); the choice just won't persist.
    }
  };

  const applyLang = (lang) => {
    const dictionary = translations[lang] || translations.es;
    nodes.forEach((node) => {
      const text = dictionary[node.dataset.i18n];
      if (text) {
        node.textContent = text;
      }
    });

    const meta = pageMeta[lang];
    document.documentElement.lang = lang;
    document.title = meta.title;
    metaDescription.setAttribute("content", meta.description);
    toggle.textContent = meta.toggleLabel;
    toggle.setAttribute("aria-label", meta.toggleAria);
    updateThemeLabel();
  };

  // Theme: an explicit choice (data-theme on <html>) overrides the system preference.
  const themeToggle = document.getElementById("themeToggle");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  const currentTheme = () => document.documentElement.dataset.theme || (systemDark.matches ? "dark" : "light");

  function updateThemeLabel() {
    const meta = pageMeta[document.documentElement.lang] || pageMeta.es;
    const label = currentTheme() === "dark" ? meta.themeToLight : meta.themeToDark;
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
  }

  themeToggle.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("preferredTheme", next);
    } catch (error) {
      // Storage unavailable; the choice lasts for this visit only.
    }
    updateThemeLabel();
  });

  systemDark.addEventListener("change", updateThemeLabel);

  const browserLang = (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
  let currentLang = readStoredLang() || browserLang;
  applyLang(currentLang);

  toggle.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    applyLang(currentLang);
    storeLang(currentLang);
  });

  document.getElementById("year").textContent = String(new Date().getFullYear());

  // Build the contact address at runtime; the markup only holds reversed fragments
  // so simple scrapers reading the HTML find no email pattern.
  const emailLink = document.getElementById("contactEmail");
  if (emailLink) {
    const reverse = (value) => value.split("").reverse().join("");
    const address = `${reverse(emailLink.dataset.u)}@${reverse(emailLink.dataset.d)}`;
    emailLink.href = `mailto:${address}`;
    emailLink.textContent = address;
  }

  // Fade sections in as they enter the viewport. Browsers with CSS scroll-driven
  // animations handle this in styles.css, so the observer is only a fallback.
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasScrollTimelines = window.CSS && CSS.supports("animation-timeline: view()");
  if (!reduceMotion && !hasScrollTimelines && "IntersectionObserver" in window) {
    const targets = document.querySelectorAll(".section__title, .about, .card, .timeline__item, .skills, .education, .contact__email");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach((target) => {
      target.classList.add("reveal");
      observer.observe(target);
    });
  }
})();
