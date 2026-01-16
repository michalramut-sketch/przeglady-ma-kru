if(!localStorage.getItem('buildings')){
localStorage.setItem('buildings', JSON.stringify([
 {id:1, address:'Armii Krajowej 2'},
 {id:2, address:'Kościuszki 10'}
]));
}
if(!localStorage.getItem('inspections')){
localStorage.setItem('inspections', JSON.stringify([]));
}
