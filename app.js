const buildings = [
  { id: 1, name: "Armii Krajowej 2" },
  { id: 2, name: "Kościuszki 10" },
  { id: 3, name: "Piłsudskiego 5" }
];

function showInspectionTypes() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>Wybierz rodzaj przeglądu</h2>
    <button onclick="chooseType('Budowlany')">🏗️ Budowlany</button><br><br>
    <button onclick="chooseType('Gazowy')">🔥 Gazowy</button><br><br>
    <button onclick="chooseType('Elektryczny')">⚡ Elektryczny</button>
  `;
}

function chooseType(type) {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>${type} – wybierz budynek</h2>
    ${buildings.map(b =>
      `<button onclick="confirm('${type}', ${b.id})">${b.name}</button><br><br>`
    ).join("")}
    <button onclick="showInspectionTypes()">← Wróć</button>
  `;
}

function confirm(type, id) {
  const building = buildings.find(b => b.id === id);
  document.getElementById("content").innerHTML = `
    <h2>Wybrano</h2>
    <p><strong>${type}</strong></p>
    <p>Budynek: ${building.name}</p>
    <p>(tu w następnym kroku wejdzie formularz)</p>
    <button onclick="showInspectionTypes()">← Nowy wybór</button>
  `;
}
