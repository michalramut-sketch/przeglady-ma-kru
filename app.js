function saveInspection(){
  const list = JSON.parse(localStorage.getItem('ma-kru-przeglady') || '[]');
  list.push({
    id: Date.now(),
    etap: 'C',
    typ: 'budowlany',
    budynek: 'TEST C',
    data: new Date().toISOString().slice(0,10)
  });
  localStorage.setItem('ma-kru-przeglady', JSON.stringify(list));
  alert('Zapisano przegląd – Etap C');
}

function showHistory(){
  const list = JSON.parse(localStorage.getItem('ma-kru-przeglady') || '[]');
  document.getElementById('out').textContent =
    JSON.stringify(list, null, 2);
}
