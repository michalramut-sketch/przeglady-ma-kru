function newInspection(){
 const rec = {
  id: Date.now(),
  typ: "budowlany",
  data: new Date().toISOString().slice(0,10),
  budynek: "TEST – ul. Przykładowa 1",
  stan: "zadowalający"
 };
 saveInspection(rec);
 alert("Zapisano przegląd");
}

function showHistory(){
 const data = loadInspections();
 document.getElementById('out').textContent = JSON.stringify(data,null,2);
}
