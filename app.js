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
    <p><b>Miasto:</b> ${b.miasto}</p>
    <p><b>Zarządca:</b> ${b.zarzadca}</p>
    <button onclick="newInspection()">Nowy przegląd</button><br><br>
    <button onclick="showBuildings()">⬅ Wróć</button>
  `;
}

function newInspection() {
  content.innerHTML = `
    <h2>Nowy przegląd</h2>
    <p>Tu będzie formularz</p>
    <button onclick="showBuildings()">⬅ Wróć</button>
  `;
}

showBuildings();
