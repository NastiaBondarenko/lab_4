let bull = 1;
const slider =(id) =>{
	if(id == 5) bull = !bull
	if(id == 1) bull = !bull	
	if(bull == 0){
	let nid = id+1;
	let newId= 'sl'+nid;
	let oldId = 'sl'+id
	document.getElementById(oldId).style ="margin-left:-100%;"
	document.getElementById(newId).style ="margin-left:0%;"}
	else{
	let nid = id-1;
	let newId= 'sl'+nid;
	let oldId = 'sl'+id
	document.getElementById(oldId).style ="margin-right:100%;"
	document.getElementById(newId).style ="margin-left:0%;"}
}