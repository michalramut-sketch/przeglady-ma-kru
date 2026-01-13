function showBuildings(){
 document.getElementById('content').innerHTML = '<h2>Lista budynków</h2><p>Budynki testowe</p>';
}

function newInspection(){
 document.getElementById('content').innerHTML = `
 <h2>Formularz przeglądu</h2>
 <label>Stan:
 <select>
 <option>OK</option>
 <option>Usterka</option>
 </select>
 </label><br><br>
 <label>Uwagi:<br>
 <textarea rows="4" cols="30"></textarea>
 </label><br><br>
 <button>Zapisz</button>
 `;
}
