
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
// GŁÓWNY WIDOK
// =======================
const content = document.getElementById("content");

// =======================
// LISTA BUDYNKÓW
// =======================
function showBuildings() {
  let html = `<h2>Lista budynków</h2>`;

  buildings.forEach(b => {
    html += `
      <div style="border:1px solid #ccc; padding:12px; margin-bottom:10px">
        <strong>${b.address}</strong><br>
        Zarządca: ${b.manager}<br><br>

        <button onclick="newInspection(${b.id})">
          ➕ Nowy przegląd
        </button>
      </div>
    `;
  });

  content.innerHTML = html;
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

// =======================
// START
// =======================
showBuildings();

