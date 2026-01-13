function showBuildings(){
const c=document.getElementById('content');
c.innerHTML='<h2>Lista budynków</h2>'+BUILDINGS.map(b=>
`<div class="building" onclick="openBuilding(${b.id})">
<b>${b.adres}</b><br>${b.zarzadca}</div>`).join('');
}
function openBuilding(id){
const b=BUILDINGS.find(x=>x.id===id);
content.innerHTML=`<h2>${b.adres}</h2>
<button onclick="newInspection()">Nowy przegląd</button>
<button onclick="showBuildings()">Wróć</button>`;
}
function newInspection(){
content.innerHTML=`<h2>Formularz przeglądu</h2>
<label>Stan:</label><select><option>OK</option><option>Usterka</option></select>
<br><label>Uwagi:</label><textarea></textarea>
<br><button onclick="showBuildings()">Zapisz</button>`;
}
showBuildings();