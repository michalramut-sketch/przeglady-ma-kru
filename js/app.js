function showBuildings(){
const c=document.getElementById('content');
const b=JSON.parse(localStorage.getItem('buildings'));
c.innerHTML=b.map(x=>`<div class="card"><b>${x.address}</b></div>`).join('');
}

function addTestInspection(){
const list=JSON.parse(localStorage.getItem('inspections'));
list.push({date:new Date().toISOString(),type:'budowlany'});
localStorage.setItem('inspections', JSON.stringify(list));
alert('Zapisano testowy przegląd');
}
showBuildings();
