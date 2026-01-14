// Simple state
const app = document.getElementById('app');
const buildings = [
  {id:1, address:'Armii Krajowej 2'},
  {id:2, address:'Kościuszki 10'}
];
const sections = Array.from({length:32},(_,i)=>`Pozycja ${i+1}`);

function view(v){
  if(v==='buildings') return showBuildings();
  if(v==='new') return newInspection();
  if(v==='history') return showHistory();
}

function showBuildings(){
  app.innerHTML = `<h2>Budynki</h2>` +
  buildings.map(b=>`
    <div class="card">
      <b>${b.address}</b>
      <div class="small">ID: ${b.id}</div>
    </div>
  `).join('');
}

function newInspection(){
  app.innerHTML = `<h2>Nowy przegląd</h2><div id="form"></div>
  <button onclick="saveInspection()">💾 Zapisz</button>
  <button onclick="exportDoc()">📄 Eksport DOCX</button>`;
  const form = document.getElementById('form');
  sections.forEach((name,i)=>{
    const d=document.createElement('div');
    d.className='section';
    d.innerHTML=`
      <h3 onclick="toggle(this)">${i+1}. ${name}</h3>
      <div class="body">
        <label><input type="checkbox" onchange="nd(this)"> Nie dotyczy</label>
        <label>Stan:
          <select>
            <option>Dobry</option><option>Zadowalający</option>
            <option>Średni</option><option>Zły</option>
          </select>
        </label>
        <div class="priority">Pilność:
          <span onclick="setP(this)">I</span>
          <span onclick="setP(this)">II</span>
          <span onclick="setP(this)">III</span>
          <span onclick="setP(this)">IV</span>
        </div>
        <label>Uwagi:<textarea></textarea></label>
        <label>Zdjęcie (metadane): <input type="file" accept="image/*"></label>
      </div>`;
    form.appendChild(d);
  });
}

function toggle(h){const b=h.nextElementSibling; b.style.display=b.style.display==='block'?'none':'block';}
function setP(el){el.parentNode.querySelectorAll('span').forEach(s=>s.classList.remove('active')); el.classList.add('active');}
function nd(cb){cb.closest('.body').style.opacity = cb.checked?0.5:1;}

function saveInspection(){
  const list = JSON.parse(localStorage.getItem('historia')||'[]');
  list.push({date:new Date().toISOString().slice(0,10), note:'Zapis testowy'});
  localStorage.setItem('historia', JSON.stringify(list));
  alert('Zapisano do historii');
}

function showHistory(){
  const list = JSON.parse(localStorage.getItem('historia')||'[]');
  app.innerHTML = `<h2>Historia</h2>` +
  `<button onclick="groupDate()">🗓 Zmień datę (grupowo)</button>` +
  list.map((i,idx)=>`
    <div class="card">
      <input type="checkbox" data-i="${idx}"> ${i.date} – ${i.note}
    </div>
  `).join('');
}

function groupDate(){
  const nd = prompt('Nowa data (YYYY-MM-DD):');
  if(!nd) return;
  const list = JSON.parse(localStorage.getItem('historia')||'[]');
  document.querySelectorAll('input[type=checkbox]:checked').forEach(cb=>{
    const i = parseInt(cb.getAttribute('data-i'));
    list[i].date = nd;
  });
  localStorage.setItem('historia', JSON.stringify(list));
  showHistory();
}

function exportDoc(){
  alert('Eksport DOCX – placeholder (kolejny krok: podpięcie wzoru)');
}

// start
showBuildings();
