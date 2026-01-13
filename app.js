const buildings = [
  { id: 1, address: "Armii Krajowej 2" },
  { id: 2, address: "Kościuszki 10" }
];

function showBuildings(){
  const c = document.getElementById("content");
  c.innerHTML = buildings.map(b=>`<div onclick="startInspection(${b.id})">${b.address}</div>`).join("");
}

function newInspection(){
  document.getElementById("content").innerHTML = "<h2>Wybierz budynek</h2>";
  showBuildings();
}

function startInspection(id){
  document.getElementById("content").innerHTML = `
  <h2>Formularz – przegląd budowlany</h2>
  <label>Stan techniczny: <input></label><br>
  <label>Uwagi: <textarea></textarea></label><br>
  <button onclick="alert('Zapisano')">Zapisz</button>
  `;
}
