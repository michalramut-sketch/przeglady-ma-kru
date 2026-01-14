const content = document.getElementById('content');

function showBuildings(){
 content.innerHTML = '<h2>Lista budynków</h2>' +
 BUILDINGS.map(b=>`<div class="card" onclick="openBuilding(${b.id})">
 <strong>${b.adres}</strong><br><small>${b.zarzadca}</small></div>`).join('');
}

function openBuilding(id){
 const b = BUILDINGS.find(x=>x.id===id);
 content.innerHTML = `<h2>${b.adres}</h2>
 <button onclick="startInspection(${id})">➕ Nowy przegląd</button>
 <button onclick="showBuildings()">⬅ Wróć</button>`;
}

function startInspection(bid){
 const b = BUILDINGS.find(x=>x.id===bid);
 content.innerHTML = `<h2>Przegląd budowlany – ${b.adres}</h2>
 <div class="section"><div class='item'>
<strong>1. Fundamenty</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>2. Ściany nośne</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>3. Kominy</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>4. Izolacje przeciwwilgociowe</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>5. Stropy</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>6. Schody</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>7. Konstrukcja dachu</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>8. Drzwi zewnętrzne</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>9. Pokrycie dachu</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>10. Obróbki blacharskie</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>11. Rynny i rury spustowe</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>12. Tynki zewnętrzne</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>13. Tynki wewnętrzne</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>14. Malatura</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>15. Okna</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>16. Drzwi wewnętrzne</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>17. Posadzki</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>18. Stopnie schodowe</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>19. Balustrady</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>20. Tynki piwnic</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>21. Posadzki piwnic</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>22. Okna piwnic</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>23. Drzwi do piwnicy</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>24. Schody piwniczne</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>25. Tynki strych</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>26. Podłogi strych</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>27. Okna strych</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>28. Drzwi strych</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>29. Zieleń</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>30. Drogi i chodniki</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>31. Ogrodzenie</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div><div class='item'>
<strong>32. Bramy wjazdowe</strong>
<select>
<option value="">Stan</option>
<option>dobry</option>
<option>zadowalający</option>
<option>średni</option>
<option>zły</option>
</select>
<select>
<option value="">Pilność</option>
<option>I</option><option>II</option><option>III</option><option>IV</option>
</select>
<textarea placeholder="Opis nieprawidłowości"></textarea>
<input type="file" accept="image/*">
</div></div>
 <button onclick="saveInspection(${bid})">💾 Zapisz</button>
 <button onclick="showBuildings()">⬅ Wróć</button>`;
}

function saveInspection(bid){
 HISTORY.push({building: bid, date: new Date().toLocaleDateString()});
 alert('Zapisano przegląd');
}

function showHistory(){
 content.innerHTML = '<h2>Historia przeglądów</h2>' +
 (HISTORY.length===0 ? '<p>Brak zapisów</p>' :
 HISTORY.map(h=>`<div class="card">Budynek ID ${h.building} – ${h.date}</div>`).join(''));
}

showBuildings();
