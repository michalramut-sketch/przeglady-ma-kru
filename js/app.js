
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
// ================================
// WIDOKI APLIKACJI (routing ręczny)
// ================================



// =======================
// GŁÓWNY WIDOK
// =======================
const content = document.getElementById("content");

// =======================
// LISTA BUDYNKÓW
// =======================
function showBuildings() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <h2>Lista budynków</h2>

    <div class="building-list">
      ${BUILDINGS.map(b => `
        <div class="building-card" onclick="openBuilding(${b.id})">
          <strong>${b.adres}</strong><br>
          <small>${b.miasto}</small><br>
          <small>Zarządca: ${b.zarzadca}</small>
        </div>
      `).join("")}
    </div>
  `;
}

//Lista budynków
function showBuildings() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <h2>Lista budynków</h2>
    <div class="building-list">
      ${BUILDINGS.map(b => `
        <div class="building-card" onclick="showBuilding('${b.id}')">
          <strong>${b.adres}</strong><br>
          <small>${b.miasto} • ${b.zarzadca}</small>
        </div>
      `).join("")}
    </div>
  `;
}
//DODAJ KARTĘ BUDYNKU
function showBuildings() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <h2>Lista budynków</h2>

    <div class="building-list">
      ${BUILDINGS.map(b => `
        <div class="building-card" onclick="openBuilding(${b.id})">
          <strong>${b.adres}</strong><br>
          <small>${b.miasto}</small><br>
          <small>Zarządca: ${b.zarzadca}</small>
        </div>
      `).join("")}
    </div>
  `;
}

//KARTA Budynku
function showBuilding(id) {
  const b = BUILDINGS.find(x => x.id === id);
  if (!b) return;

  const content = document.getElementById("content");

  content.innerHTML = `
    <h2>${b.adres}</h2>
    <p><strong>Zarządca:</strong> ${b.zarzadca}</p>

    <h3>Dane techniczne</h3>
    <ul>
      <li>Lokale: ${b.lokale}</li>
      <li>Kondygnacje: ${b.kondygnacje}</li>
      <li>Klatki schodowe: ${b.klatki}</li>
    </ul>

    <h3>Instalacje</h3>
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

