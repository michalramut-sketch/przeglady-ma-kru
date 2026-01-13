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
<button onclick="startInspection(${id})">Nowy przegląd budowlany</button>
<button onclick="showBuildings()">⬅ Wróć</button>`;
}

function startInspection(id){
content.innerHTML=`
<h2>Przegląd budowlany</h2>
<div class="section">
<b>I. Elementy konstrukcyjne</b><br>
Fundamenty:
<span class="state">Dobry</span>
<span class="state">Zadowalający</span>
<span class="state">Średni</span>
<span class="state">Zły</span>
</div>
<div class="section">
<b>II. Wykończenie zewnętrzne</b><br>
Elewacja:
<span class="state">Dobry</span>
<span class="state">Zadowalający</span>
<span class="state">Średni</span>
<span class="state">Zły</span>
</div>
<button onclick="showBuildings()">⬅ Wróć</button>
`;
}

showBuildings();