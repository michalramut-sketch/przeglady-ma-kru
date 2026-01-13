const buildings = [
  {id:1, address:'Armii Krajowej 2', manager:'TBS'},
  {id:2, address:'Kościuszki 10', manager:'Wspólnota'}
];

const content = document.getElementById('content');

function showBuildings(){
  content.innerHTML = '<h2>Lista budynków</h2>' +
    buildings.map(b =>
      `<div class="building" onclick="openBuilding(${b.id})">
        <strong>${b.address}</strong><br>
        <small>Zarządca: ${b.manager}</small>
      </div>`
    ).join('');
}

function openBuilding(id){
  const b = buildings.find(x=>x.id===id);
  content.innerHTML = `<h2>${b.address}</h2>
  <p>Zarządca: ${b.manager}</p>
  <button onclick="newInspection()">Nowy przegląd</button>
  <button onclick="showBuildings()">Wróć</button>`;
}

function newInspection(){
  content.innerHTML = '<h2>Nowy przegląd</h2><p>Formularz w kolejnym kroku</p><button onclick="showBuildings()">Wróć</button>';
}

showBuildings();
