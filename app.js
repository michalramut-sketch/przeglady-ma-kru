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
<h2>Przegląd budowlany – formularz</h2>

${section("I. Elementy konstrukcyjne", ["Fundamenty","Ściany nośne","Stropy","Schody","Konstrukcja dachu"])}

${section("II. Wykończenie zewnętrzne", ["Elewacja","Pokrycie dachu","Rynny","Drzwi zewnętrzne"])}

${section("VI. Instalacje i ochrona środowiska", [
"Przejścia instalacyjne przez ściany",
"Kanalizacja",
"C.O. i C.W.U.",
"Instalacja wodna"
])}

<button onclick="showBuildings()">⬅ Wróć</button>
`;
}

function section(title, items){
return `
<div class="section">
<b>${title}</b>
${items.map(i=>`
<div>
<b>${i}</b>
<div class="states">
<span>Dobry</span>
<span>Zadowalający</span>
<span>Średni</span>
<span>Zły</span>
</div>
<textarea placeholder="Opis / uwagi"></textarea>
</div>
`).join("")}
</div>`;
}

showBuildings();