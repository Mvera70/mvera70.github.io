/* Only local preference storage. No analytics, requests or third-party scripts. */
(() => {
  let theme = 'dark';
  try {
    const saved = localStorage.getItem('pz-theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (_) { /* The pages remain usable with storage disabled. */ }
  document.documentElement.dataset.theme = theme;
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('[data-theme-toggle]');
    if (!button) return;
    function describe() {
      const dark = document.documentElement.dataset.theme === 'dark';
      button.setAttribute('aria-label', dark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
      button.querySelector('[data-theme-word]').textContent = dark ? 'Claro' : 'Oscuro';
    }
    describe();
    button.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('pz-theme', next); } catch (_) {}
      describe();
    });
  });
})();
