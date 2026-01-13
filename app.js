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
  content.innerHTML = `
    <h2>${b.adres}</h2>
    <p><b>Zarządca:</b> ${b.zarzadca}</p>
    <button onclick="startInspection(${b.id})">Nowy przegląd budowlany</button>
    <button onclick="showBuildings()">⬅ Wróć</button>
  `;
}

function startInspection(buildingId) {
  content.innerHTML = `
    <h2>Przegląd budowlany</h2>
    <div class="switch">
      <label><input type="radio" name="typ" value="roczny" checked onchange="toggleType()"> Roczny</label>
      <label><input type="radio" name="typ" value="5letni" onchange="toggleType()"> 5-letni</label>
    </div>

    <section>
      <h3>I. Elementy konstrukcyjne</h3>
      <p>[Fundamenty, ściany, stropy, dach, balkony...]</p>
    </section>

    <section>
      <h3>II. Wykończenie zewnętrzne</h3>
    </section>

    <section id="extra5" style="display:none">
      <h3>VII. Otoczenie i estetyka (tylko 5-letni)</h3>
    </section>

    <button onclick="showBuildings()">⬅ Zakończ</button>
  `;
}

function toggleType(){
  const type = document.querySelector('input[name="typ"]:checked').value;
  document.getElementById("extra5").style.display = type === "5letni" ? "block" : "none";
}

showBuildings();
