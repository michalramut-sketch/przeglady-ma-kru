const DB_KEY = "ma_kru_przeglady";

function loadInspections() {
  return JSON.parse(localStorage.getItem(DB_KEY)) || [];
}

function saveInspections(data) {
  localStorage.setItem(DB_KEY, JSON.stringify(data));
}

function addInspection(inspection) {
  const data = loadInspections();
  data.push(inspection);
  saveInspections(data);
}
