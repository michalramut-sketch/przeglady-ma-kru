function testSave() {
  saveInspection({
    id: Date.now(),
    typ: "budowlany",
    data: new Date().toISOString().slice(0,10),
    budynek: "TEST – ul. Przykładowa 1",
    stan: "zadowalający"
  });
  alert("Przegląd zapisany");
}

function showHistory() {
  document.getElementById("out").textContent =
    JSON.stringify(getInspections(), null, 2);
}