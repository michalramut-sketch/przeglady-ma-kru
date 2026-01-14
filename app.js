function showBuildings(){
  const c=document.getElementById("content");
  c.innerHTML = "<h2>Lista budynków</h2>" +
    BUILDINGS.map(b=>`<div class='building' onclick='openBuilding(${b.id})'>
      <strong>${b.adres}</strong><br><small>${b.zarzadca}</small>
    </div>`).join("");
}

function openBuilding(id){
  const b = BUILDINGS.find(x=>x.id===id);
  document.getElementById("content").innerHTML =
    `<h2>${b.adres}</h2>
     <p>Zarządca: ${b.zarzadca}</p>
     <button onclick="newInspection()">Nowy przegląd</button>
     <button onclick="showBuildings()">⬅ Wróć</button>`;
}

function newInspection(){
  document.getElementById("content").innerHTML =
    "<h2>Nowy przegląd</h2><p>(formularz w kolejnym kroku)</p>";
}

showBuildings();
