function saveInspection(){
  const data = {
    id: Date.now(),
    adres: document.getElementById('adres').value,
    stan: document.getElementById('stan').value,
    data: new Date().toISOString()
  };

  let all = JSON.parse(localStorage.getItem('ma-kru-przeglady') || '[]');
  all.push(data);
  localStorage.setItem('ma-kru-przeglady', JSON.stringify(all));

  alert('Zapisano przegląd!');
}
