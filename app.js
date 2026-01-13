const content=document.getElementById("content");

function showBuildings(){
content.innerHTML='<h2>Lista budynków</h2>'+BUILDINGS.map(b=>`
<div class="card" onclick="openBuilding(${b.id})">
<strong>${b.adres}</strong><br>
<small>Zarządca: ${b.zarzadca}</small>
</div>`).join('');
}

function openBuilding(id){
const b=BUILDINGS.find(x=>x.id===id);
content.innerHTML=`
<h2>${b.adres}</h2>
<p>Zarządca: ${b.zarzadca}</p>
<button onclick="startNewInspection(${id})">Nowy przegląd</button>
<button onclick="showBuildings()">⬅ Wróć</button>`;
}

function startNewInspection(id){
const b=BUILDINGS.find(x=>x.id===id);
content.innerHTML=`
<h2>Nowy przegląd – budowlany</h2>
<p><strong>${b.adres}</strong></p>
<p>(tu będzie formularz)</p>
<button onclick="openBuilding(${id})">⬅ Wróć</button>`;
}

showBuildings();