const SECTIONS = [
  {name:'I. Elementy konstrukcyjne', items:[
    'Fundamenty','Ściany nośne','Stropy','Schody','Konstrukcja dachu','Balkony'
  ]},
  {name:'II. Wykończenie zewnętrzne', items:[
    'Pokrycie dachu','Obróbki blacharskie','Rynny','Elewacja','Stolarka zewnętrzna'
  ]},
  {name:'III. Wykończenie wewnętrzne – klatka', items:[
    'Tynki','Malatura','Posadzki','Balustrady','Oświetlenie'
  ]},
  {name:'IV. Wykończenie wewnętrzne – piwnica', items:[
    'Ściany','Posadzki','Stropy','Schody'
  ]},
  {name:'V. Wykończenie wewnętrzne – strych', items:[
    'Ściany','Posadzki','Konstrukcja dachu'
  ]},
  {name:'VI. Ochrona środowiska', items:[
    'Przejścia instalacyjne','Kanalizacja','C.O. i c.w.u.','Instalacja wodna'
  ]}
];

const form = document.getElementById('form');

SECTIONS.forEach(sec=>{
  const s = document.createElement('div');
  s.className='section';
  s.innerHTML = `<h3>${sec.name}</h3>`;
  sec.items.forEach(it=>{
    const d = document.createElement('div');
    d.className='item';
    d.innerHTML = `
      <label>${it}</label>
      <select>
        <option value="">— wybierz stan —</option>
        <option>Dobry</option>
        <option>Zadowalający</option>
        <option>Średni</option>
        <option>Zły</option>
        <option>Nie dotyczy</option>
      </select>
      <textarea placeholder="Uwagi"></textarea>
    `;
    s.appendChild(d);
  });
  form.appendChild(s);
});

function save(){
  alert('Zapisano (etap formularza)');
}
