const data = JSON.parse(localStorage.getItem('przeglady')||'[]');
const root = document.getElementById('cards');
if(!data.length){root.innerHTML='<p>Brak zapisanych przeglądów</p>'}
data.forEach(p=>{
  const d=document.createElement('div');
  d.className='card';
  d.innerHTML=`<b>${p.data||'brak daty'}</b><br>
  Typ: ${p.typ||'budowlany'}<br>
  Stan: <span class="badge">${p.stan||'OK'}</span>`;
  root.appendChild(d);
});
