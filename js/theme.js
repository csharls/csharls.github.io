// Loaded in <head> so a saved theme is applied before first paint (no light/dark flash).
// Without a saved choice the page follows the system preference via CSS.
(() => {
  try {
    const saved = localStorage.getItem("preferredTheme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.dataset.theme = saved;
    }
  } catch (error) {
    // Storage unavailable; fall back to the system preference.
  }
})();
