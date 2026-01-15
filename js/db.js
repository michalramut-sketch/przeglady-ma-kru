const KEY = "ma-kru-przeglady";

function loadInspections(){
 return JSON.parse(localStorage.getItem(KEY) || "[]");
}

function saveInspection(obj){
 const arr = loadInspections();
 arr.push(obj);
 localStorage.setItem(KEY, JSON.stringify(arr));
}
