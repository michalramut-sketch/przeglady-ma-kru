const buildings = [
  "Armii Krajowej 2",
  "Kościuszki 10"
];

function showBuildings() {
  const c = document.getElementById("content");
  c.innerHTML = "";
  buildings.forEach(b => {
    const div = document.createElement("div");
    div.className = "building";
    div.textContent = b;
    c.appendChild(div);
  });
}

function showHistory() {
  const c = document.getElementById("content");
  const data = JSON.parse(localStorage.getItem("ma-kru-history") || "[]");
  if (data.length === 0) {
    c.textContent = "Brak zapisanych przeglądów.";
    return;
  }
  c.innerHTML = "";
  data.forEach(i => {
    const div = document.createElement("div");
    div.textContent = `${i.budynek} – ${i.data}`;
    c.appendChild(div);
  });
}

// testowy zapis (na przyszłość)
if (!localStorage.getItem("ma-kru-history")) {
  localStorage.setItem("ma-kru-history", JSON.stringify([]));
}
