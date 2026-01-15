function render(){
  const list = document.getElementById('list');
  const data = JSON.parse(localStorage.getItem('ma-kru-przeglady') || '[]');
  if(data.length===0){
    list.innerHTML = '<p>Brak zapisanych przeglądów</p>';
    return;
  }
  list.innerHTML = data.map(p=>`
    <div class="card">
      <strong>${p.adres}</strong><br>
      Stan: ${p.stan}<br>
      Data: ${new Date(p.data).toLocaleString()}
    </div>
  `).join('');
}

function clearAll(){
  if(confirm('Usunąć wszystkie testowe przeglądy?')){
    localStorage.removeItem('ma-kru-przeglady');
    render();
  }
}

render();
