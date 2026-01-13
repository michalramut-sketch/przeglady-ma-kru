const SECTIONS = [
  {name:'I. Elementy konstrukcyjne budynku', items:[
    'Fundamenty','Ściany nośne','Kominy','Izolacje przeciwwilgociowe',
    'Stropy','Schody','Konstrukcja dachu','Balkony / loggie'
  ]},
  {name:'II. Elementy wykończenia zewnętrznego', items:[
    'Drzwi zewnętrzne','Pokrycie dachu','Obróbki blacharskie',
    'Rynny i rury spustowe','Tynki zewnętrzne / elewacja'
  ]},
  {name:'III. Wykończenie wewnętrzne – klatka schodowa', items:[
    'Tynki','Malatura','Okna','Drzwi','Posadzki','Stopnie schodowe','Balustrady'
  ]},
  {name:'IV. Wykończenie wewnętrzne – piwnice', items:[
    'Tynki','Posadzki','Okna','Drzwi','Schody'
  ]},
  {name:'V. Wykończenie wewnętrzne – strych', items:[
    'Tynki','Podłogi','Okna','Drzwi / wyłaz'
  ]},
  {name:'VI. Instalacje i urządzenia służące ochronie środowiska', items:[
    'Przejścia przyłączy instalacyjnych przez ściany budynku',
    'Elementy instalacji kanalizacyjnej',
    'Instalacja centralnego ogrzewania i c.w.u.',
    'Instalacja wodna'
  ]}
];

const form = document.getElementById('form');

SECTIONS.forEach((sec,si)=>{
  const s=document.createElement('div');
  s.className='section';
  s.innerHTML=`<h3>${sec.name}
    <label class="small">
      <input type="checkbox" checked onchange="toggleSection(${si},this.checked)"> sekcja aktywna
    </label>
  </h3>`;

  const body=document.createElement('div');
  body.id='section-'+si;

  sec.items.forEach((it,ii)=>{
    const d=document.createElement('div');
    d.className='item';
    d.innerHTML=`
      <label>${it}</label>
      <div class="controls">
        <select>
          <option value="">Stan</option>
          <option>Dobry</option>
          <option>Zadowalający</option>
          <option>Średni</option>
          <option>Zły</option>
          <option>Nie dotyczy</option>
        </select>
        <select>
          <option value="">Pilność</option>
          <option>I</option><option>II</option><option>III</option><option>IV</option>
        </select>
        <label class="small">
          <input type="checkbox" onchange="toggleItem(this)"> wyłącz
        </label>
      </div>
      <textarea placeholder="Opis / nieprawidłowości"></textarea>
    `;
    body.appendChild(d);
  });

  s.appendChild(body);
  form.appendChild(s);
});

function toggleSection(i,on){
  document.getElementById('section-'+i).style.display = on?'block':'none';
}

function toggleItem(cb){
  const item=cb.closest('.item');
  item.style.opacity = cb.checked?0.4:1;
}

function save(){
  alert('Formularz zapisany (logika zapisu w kolejnym kroku)');
}
