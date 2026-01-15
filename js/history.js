const historyDiv = document.getElementById('history');
const searchInput = document.getElementById('search');
const typeFilter = document.getElementById('typeFilter');

function render() {
  const data = JSON.parse(localStorage.getItem('przeglady')) || [];
  const q = searchInput.value.toLowerCase();
  const type = typeFilter.value;

  historyDiv.innerHTML = "";

  data
    .filter(p =>
      (!type || p.typ === type) &&
      (p.adres.toLowerCase().includes(q) || String(p.id).includes(q))
    )
    .forEach(p => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <strong>${p.adres}</strong><br>
        <span class="small">${p.typ.toUpperCase()} • ${p.data}</span><br>
        <span class="small">Zarządca: ${p.zarzadca} • ${p.wykonawca}</span><br>
        <span class="small">Status: ${p.status}</span>
      `;
      historyDiv.appendChild(div);
    });
}

searchInput.addEventListener('input', render);
typeFilter.addEventListener('change', render);
render();
