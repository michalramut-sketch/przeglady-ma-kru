const BUILDINGS = [
  { id: 1, adres: "Armii Krajowej 2", miasto: "Warszawa", zarzadca: "TBS" },
  { id: 2, adres: "Kościuszki 10", miasto: "Kraków", zarzadca: "Wspólnota" }
];

const content = document.getElementById("content");

function showBuildings() {
  content.innerHTML = `
    <h2>Lista budynków</h2>
    ${BUILDINGS.map(b => `
      <div class="card" onclick="openBuilding(${b.id})">
        <strong>${b.adres}</strong><br>
        <small>${b.miasto} – ${b.zarzadca}</small>
      </div>
    `).join("")}
  `;
}

function openBuilding(id) {
  const b = BUILDINGS.find(x => x.id === id);
  if (!b) return;

  content.innerHTML = `
    <h2>${b.adres}</h2>
    <p><b>Zarządca:</b> ${b.zarzadca}</p>

    <h3>Nowy przegląd</h3>
    <div class="tiles">
      <div class="tile" onclick="selectInspection('Budowlany')">🏗 Budowlany</div>
      <div class="tile" onclick="selectInspection('Gazowy')">🔥 Gazowy</div>
      <div class="tile" onclick="selectInspection('Elektryczny')">⚡ Elektryczny</div>
      <div class="tile" onclick="selectInspection('PPOŻ')">🚨 PPOŻ</div>
      <div class="tile" onclick="selectInspection('Odgromowy')">⚡ Odgromowy</div>
    </div>

    <button onclick="showBuildings()">⬅ Wróć</button>
  `;
}

function selectInspection(type) {
  content.innerHTML = `
    <h2>Wybrano przegląd</h2>
    <p><strong>${type}</strong></p>
    <button onclick="showBuildings()">⬅ Lista budynków</button>
  `;
}

showBuildings();
