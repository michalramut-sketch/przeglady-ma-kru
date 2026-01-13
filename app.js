function showInspectionTypes() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>Wybierz rodzaj przeglądu</h2>
    <button onclick="selectInspection('Budowlany')">🏗️ Budowlany</button><br><br>
    <button onclick="selectInspection('Gazowy')">🔥 Gazowy</button><br><br>
    <button onclick="selectInspection('Elektryczny')">⚡ Elektryczny</button><br><br>
    <button onclick="selectInspection('PPOŻ')">🚒 PPOŻ</button><br><br>
    <button onclick="selectInspection('Odgromowy')">⚡ Odgromowy</button>
  `;
}

function selectInspection(type) {
  const content = document.getElementById("content");
  content.innerHTML = `<h2>Wybrano przegląd: ${type}</h2>
  <button onclick="showInspectionTypes()">← Zmień rodzaj</button>`;
}
