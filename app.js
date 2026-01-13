const buildings=[
{id:1,name:'Armii Krajowej 2'},
{id:2,name:'Kościuszki 10'}
];

const content=document.getElementById('content');

function showBuildings(){
 content.innerHTML='<h3>Lista budynków</h3>'+
 buildings.map(b=>`<div class="card" onclick="openBuilding(${b.id})">${b.name}</div>`).join('');
}

function openBuilding(id){
 const b=buildings.find(x=>x.id===id);
 content.innerHTML=`<h3>${b.name}</h3>
 <button onclick="startInspection('budowlany')">Przegląd budowlany</button>
 <button onclick="showBuildings()">Wróć</button>`;
}

function newInspection(){
 content.innerHTML=`<h3>Wybierz przegląd</h3>
 <button onclick="startInspection('budowlany')">Budowlany</button>`;
}

function startInspection(type){
 content.innerHTML=`<h3>Formularz – ${type}</h3>
 <p>(tu będzie pełny formularz)</p>
 <button onclick="showBuildings()">Zakończ</button>`;
}
