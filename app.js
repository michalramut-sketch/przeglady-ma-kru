
const content=document.getElementById("content");
function showList(){
 content.innerHTML=BUILDINGS.map(b=>`
  <div class='card' onclick='start(${b.id})'>
   <b>${b.adres}</b><br>Nowy przegląd
  </div>`).join("");
}
function start(id){
 const b=BUILDINGS.find(x=>x.id===id);
 content.innerHTML=`
  <h2>${b.adres}</h2>
  <div class='card'>
   <div class='tile'>Dobry</div>
   <div class='tile'>Zadowalający</div>
   <div class='tile'>Średni</div>
   <div class='tile'>Zły</div>
  </div>
  <button onclick='showList()'>← Wróć</button>
 `;
}
showList();
