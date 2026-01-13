const content = document.getElementById("content");

function showForm(){
  content.innerHTML = `
    <div class="card">
      <h2>${building.address}</h2>
      <p>Formularz przeglądu budowlanego – start</p>
      <label>Stan techniczny:</label><br>
      <button>Dobry</button>
      <button>Zadowalający</button>
      <button>Średni</button>
      <button>Zły</button>
    </div>
  `;
}

showForm();
