function saveInspection(obj){
 const list = JSON.parse(localStorage.getItem("inspections")||"[]");
 list.push(obj);
 localStorage.setItem("inspections",JSON.stringify(list));
}
function loadInspections(){
 return JSON.parse(localStorage.getItem("inspections")||"[]");
}