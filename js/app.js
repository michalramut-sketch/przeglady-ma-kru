
function showBuildings(){
  document.getElementById('content').innerHTML =
    '<h2>Lista budynków</h2>' +
    '<div class="card" onclick="alert(\'Budynek 1 – klik działa\')">Budynek 1 – ul. Przykładowa 1</div>' +
    '<div class="card" onclick="alert(\'Budynek 2 – klik działa\')">Budynek 2 – ul. Testowa 2</div>';
}

function newInspection(){
  document.getElementById('content').innerHTML =
    '<h2>Nowy przegląd</h2>' +
    '<label>Stan:</label>' +
    '<select><option>Dobry</option><option>Zadowalający</option><option>Średni</option><option>Zły</option></select><br><br>' +
    '<input type="file" accept="image/*" capture="environment"><br><br>' +
    '<button onclick="alert(\'Zapis działa\')">Zapisz</button>';
}
