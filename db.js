const DB_KEY = "MA_KRU_DB";

function initDB() {
  if (!localStorage.getItem(DB_KEY)) {
    localStorage.setItem(DB_KEY, JSON.stringify({ przeglady: [] }));
  }
}

function saveInspection(data) {
  const db = JSON.parse(localStorage.getItem(DB_KEY));
  db.przeglady.push(data);
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function getInspections() {
  return JSON.parse(localStorage.getItem(DB_KEY)).przeglady;
}

initDB();