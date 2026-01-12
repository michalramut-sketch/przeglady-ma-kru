// =======================
// DANE TESTOWE – BUDYNKI
// =======================
const buildings = [
  {
    id: 1,
    address: "Armii Krajowej 2",
    manager: "TBS",
    inspections: {
      budowlany: 1,
      gazowy: 1,
      elektryczny: 0,
      ppoz: 1,
      odgrom: 0
    }
  },
  {
    id: 2,
    address: "Kościuszki 10",
    manager: "Wspólnota",
    inspections: {
      budowlany: 1,
      gazowy: 0,
      elektryczny: 1,
      ppoz: 0,
      odgrom: 1
    }
  }
];

// =======================
// GŁÓWNY CONTENT
// =======================
const content = document.getElementById("content");

// =======================
// LISTA BUDYNKÓW
// =======================
function showBuildings() {
  content.innerHTML = `
    <h2>Lista budynków</h2>

    <div class="building-list">
      ${buildings.map(b => `
        <div class="building-card" onclick="showBuilding(${b.id})">
          <strong>${b.address}</strong><br>
          <small>Zarządca: ${b.manager}</small>
        </div>
      `).join("")}
    </div>
  `;
}

// =======================
// KARTA BUDYNKU
// =======================
function showBuilding(id) {
  const b = buildings.find(x => x.id === id);
  if (!b) return;

  content.innerHTML = `
    <h2>${b.address}</h2>
    <p><strong>Zarządca:</strong> ${b.manager}</p>

    <h3>Dostępne przeglądy</h3>
    <ul>
      ${b.inspections.budowlany ? `<li><button onclick="newInspection('budowlany', ${b.id})">Budowlany</button></li>` : ""}
      ${b.inspections.gazowy ? `<li><button onclick="newInspection('gazowy', ${b.id})">Gazowy</button></li>` : ""}
      ${b.inspections.elektryczny ? `<li><button onclick="newInspection('elektryczny', ${b.id})">Elektryczny</button></li>` : ""}
      ${b.inspections.ppoz ? `<li><button onclick="newInspection('ppoz', ${b.id})">PPOŻ</button></li>` : ""}
      ${b.inspections.odgrom ? `<li><button onclick="newInspection('odgrom', ${b.id})">Odgrom</button></li>` : ""}
    </ul>

    <button onclick="showBuildings()">⬅ Wróć</button>
  `;
}

// =======================
// NOWY PRZEGLĄD (JEDNA FUNKCJA)
// =======================
function newInspection(type, buildingId) {
  const b = buildings.find(x => x.id === buildingId);

  content.innerHTML = `
    <h2>Nowy przegląd: ${type.toUpperCase()}</h2>
    <p><strong>Budynek:</strong> ${b.address}</p>

    <p>(tu będzie formularz)</p>

    <button onclick="showBuilding(${buildingId})">⬅ Wróć do budynku</button>
  `;
}

// =======================
// START APLIKACJI
// =======================
showBuildings();// LISTA BUDYNKÓW
// =======================
function showBuildings() {
  content.innerHTML = `
    <h2>Lista budynków</h2>

    <div class="building-list">
      ${buildings.map(b => `
        <div class="building-card" onclick="showBuilding(${b.id})">
          <strong>${b.address}</strong><br>
          <small>Zarządca: ${b.manager}</small>
        </div>
      `).join("")}
    </div>
  `;
}

// =======================
// KARTA BUDYNKU
// =======================
function showBuilding(id) {
  const b = buildings.find(x => x.id === id);
  if (!b) return;

  content.innerHTML = `
    <h2>${b.address}</h2>
    <p><strong>Zarządca:</strong> ${b.manager}</p>

    <h3>Dostępne przeglądy</h3>
    <ul>
      ${b.inspections.budowlany ? `<li><button onclick="newInspection('budowlany', ${b.id})">Budowlany</button></li>` : ""}
      ${b.inspections.gazowy ? `<li><button onclick="newInspection('gazowy', ${b.id})">Gazowy</button></li>` : ""}
      ${b.inspections.elektryczny ? `<li><button onclick="newInspection('elektryczny', ${b.id})">Elektryczny</button></li>` : ""}
      ${b.inspections.ppoz ? `<li><button onclick="newInspection('ppoz', ${b.id})">PPOŻ</button></li>` : ""}
      ${b.inspections.odgrom ? `<li><button onclick="newInspection('odgrom', ${b.id})">Odgrom</button></li>` : ""}
    </ul>

    <button onclick="showBuildings()">⬅ Wróć</button>
  `;
}

// =======================
// NOWY PRZEGLĄD (JEDNA FUNKCJA)
// =======================
function newInspection(type, buildingId) {
  const b = buildings.find(x => x.id === buildingId);

  content.innerHTML = `
    <h2>Nowy przegląd: ${type.toUpperCase()}</h2>
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

