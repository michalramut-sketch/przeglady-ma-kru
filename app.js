const content=document.getElementById("content");

function showBuildings(){
 content.innerHTML = BUILDINGS.map(b=>`
  <div onclick="newInspection(${b.id})">
   <strong>${b.address}</strong>
  </div>
 `).join("");
}

function newInspection(id){
 const b = BUILDINGS.find(x=>x.id===id);
 content.innerHTML = `
  <h2>Nowy przegląd – ${b.address}</h2>
  <textarea id="uwagi"></textarea><br>
  <button onclick="save(${id})">Zapisz</button>
 `;
}

function save(id){
 const b = BUILDINGS.find(x=>x.id===id);
 saveInspection({id, address:b.address, uwagi:document.getElementById("uwagi").value, date:new Date().toISOString()});
 showHistory();
}

function showHistory(){
 const list = loadInspections();
 content.innerHTML = list.map((i,idx)=>`
  <div>
   ${i.address} – ${i.date}
  </div>
 `).join("");
}

showBuildings();
