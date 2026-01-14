function showBuildings(){content.innerHTML='<h2>Budynki</h2>'+BUILDINGS.map(b=>`<div onclick="openB(${b.id})">${b.adres}</div>`).join('')}
function openB(id){content.innerHTML='<h3>Karta budynku</h3><button onclick="startInspection(currentType)">Nowy przegląd</button>'}
let currentType='';
function startInspection(t){currentType=t;content.innerHTML='<h2>Formularz '+t+'</h2><p>Pełny formularz ('+t+')</p>'}
const content=document.getElementById('content'); showBuildings();