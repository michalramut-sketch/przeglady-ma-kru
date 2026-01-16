let currentFilter = "all";

function addTestInspection(type) {
  addInspection({
    id: Date.now(),
    type,
    building: "Armii Krajowej 2",
    date: new Date().toISOString().slice(0,10)
  });
  renderHistory();
}

function deleteInspection(id) {
  let data = loadInspections().filter(i => i.id !== id);
  saveInspections(data);
  renderHistory();
}

function changeDate(id) {
  const d = prompt("Nowa data YYYY-MM-DD");
  if (!d) return;
  const data = loadInspections();
  const el = data.find(i => i.id === id);
  if (el) el.date = d;
  saveInspections(data);
  renderHistory();
}

function setFilter(t) {
  currentFilter = t;
  renderHistory();
}

function renderHistory() {
  const data = loadInspections();
  const list = currentFilter === "all" ? data : data.filter(i => i.type === currentFilter);
  const el = document.getElementById("history");
  if (!list.length) {
    el.innerHTML = "<p>Brak przeglądów</p>";
    return;
  }
  el.innerHTML = list.map(i => `
    <div style="border:1px solid #333;padding:8px;margin:6px 0">
      <strong>${i.type}</strong><br>
      ${i.building}<br>
      Data: ${i.date}<br>
      <button onclick="changeDate(${i.id})">📅</button>
      <button onclick="deleteInspection(${i.id})">🗑</button>
    </div>
  `).join("");
}
