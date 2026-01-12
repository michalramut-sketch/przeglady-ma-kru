console.log("APP START");

const buildings = [
  { id: 1, name: "Armii Krajowej 2" },
  { id: 2, name: "Kościuszki 10" }
];

function showBuildings() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>Lista budynków</h2>
    ${buildings.map(b => `
      <div onclick="openBuilding(${b.id})"
           style="padding:8px;border:1px solid #000;margin:4px;">
        ${b.name}
      </div>
    `).join("")}
  `;
}

function openBuilding(id) {
  const b = buildings.find(x => x.id === id);
  document.getElementById("content").innerHTML = `
    <h2>${b.name}</h2>
    <button onclick="newInspection()">Nowy przegląd</button>
    <button onclick="showBuildings()">Wróć</button>
  `;
}

function newInspection() {
  document.getElementById("content").innerHTML = `
    <h2>Nowy przegląd</h2>
    <p>Tu będzie formularz</p>
    <button onclick="showBuildings()">Wróć</button>
  `;
}
showBuildings();}

// =======================
// KARTA BUDYNKU
// =======================
function showBuilding(id) {
  const b = BUILDINGS.find(x => x.id === id);
  if (!b) return;

  const content = document.getElementById("content");

  content.innerHTML = `
    <h2>${b.adres}</h2>
    <p>Zarządca: ${b.zarzadca}</p>

    <button onclick="newInspection()">Nowy przegląd</button>
    <br><br>
    <button onclick="showBuildings()">← Wróć</button>
  `;
}

// =======================
// NOWY PRZEGLĄD
// =======================
function newInspection() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <h2>Nowy przegląd</h2>
    <p>Formularz pojawi się tutaj</p>

    <button onclick="showBuildings()">← Lista budynków</button>
  `;
}

// =======================
// START
// =======================
document.addEventListener("DOMContentLoaded", showBuildings);    <h2>Nowy przegląd: ${type.toUpperCase()}</h2>
    <p><strong>Budynek:</strong> ${b.address}</p>

    <p>(tu będzie formularz)</p>

    <button onclick="showBuilding(${buildingId})">⬅ Wróć do budynku</button>
  `;
}

// =======================
// START APLIKACJI
// =======================
showBuildings();    <h3>Instalacje</h3>
    <ul>
      <li>Gazowa: ${b.instalacje.gaz ? "TAK" : "NIE"}</li>
      <li>Elektryczna: ${b.instalacje.elektryczna ? "TAK" : "NIE"}</li>
      <li>PPOŻ: ${b.instalacje.ppoz ? "TAK" : "NIE"}</li>
      <li>Odgromowa: ${b.instalacje.odgrom ? "TAK" : "NIE"}</li>
    </ul>

    <button onclick="startInspection('${b.id}')">Nowy przegląd</button>
    <button onclick="showBuildings()">⬅ Wróć</button>
  `;
}


// =======================
// NOWY PRZEGLĄD
// =======================
function newInspection(buildingId) {
  const building = buildings.find(b => b.id === buildingId);

  content.innerHTML = `
    <h2>Nowy przegląd – budowlany</h2>
    <p><strong>${building.address}</strong></p>

    <p>⬇️ Formularz pojawi się tutaj</p>

    <button onclick="showBuildings()">⬅️ Wróć do listy</button>
  `;
}
//NOWY PRZEGLĄD
function newInspection(type) {
  const content = document.getElementById("content");

  content.innerHTML = `
    <h2>Nowy przegląd: ${type.toUpperCase()}</h2>

    <p>(Tu za chwilę będzie formularz)</p>

    <button onclick="showBuildings()">← Lista budynków</button>
  `;
}

// =======================
// START
// =======================
showBuildings();

