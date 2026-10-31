// Astronomy Resources — standalone enhancement, no changes to main.js
(() => {
  const panel = document.getElementById('resourcesPanel');
  const open = document.getElementById('resourcesOpen');
  const close = document.getElementById('resourcesClose');
  if (!panel || !open || !close) return;
  function hide() { panel.classList.add('hidden'); open.setAttribute('aria-expanded','false'); }
  function show() { panel.classList.remove('hidden'); open.setAttribute('aria-expanded','true'); }
  open.setAttribute('aria-controls','resourcesPanel');
  open.setAttribute('aria-expanded','false');
  open.addEventListener('click', () => panel.classList.contains('hidden') ? show() : hide());
  close.addEventListener('click', hide);
  document.querySelectorAll('.resource-filters button').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      document.querySelectorAll('.resource-filters button').forEach(b => b.classList.toggle('active', b===button));
      document.querySelectorAll('#resourcesPanel .resource-card').forEach(card => card.classList.toggle('hidden', category!=='all' && card.dataset.category!==category));
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.classList.contains('hidden')) {
      // Existing main.js Escape handler remains untouched.
      hide();
    }
  });
})();
