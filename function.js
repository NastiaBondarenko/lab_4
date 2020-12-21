
let lang = document.getElementById("languages");
let arrow = document.getElementById("arrowIcons");

let i = 0;
const language = () =>{
	if(i == 0){
		i = 1;
	 lang.style = "display:block;"
	 arrow.style = "transform:rotate(180deg)"
	}
	else{
		i = 0;
		lang.style = "display:none;"
		arrow.style = "transform:rotate(0deg)"
	}
}


const size = (prod, j, prise) =>{
	console.log
	for (var i = 1; i < document.getElementById(prod).childNodes.length; i=i+2) {
		document.getElementById(prod).childNodes[i].style = "background-color: #efefef; color: black"
		document.getElementById(prise).childNodes[i].hidden = "true";
	}
	document.getElementById(prod).childNodes[j].style = "background-color: #4f4f4f; color: white"
	document.getElementById(prise).childNodes[j].hidden = "";
}

const selfPickup = () =>{
	document.getElementById("formBask1").hidden = "true";
	document.getElementById("formBask2").hidden = "";
	document.getElementById("deliveryB1").style = "background-color:#f8f8f8; color:black;";
	document.getElementById("deliveryB2").style = "background-color:white; color:#d63422;";
}

const delivery = () =>{
	document.getElementById("formBask2").hidden = "true";
	document.getElementById("formBask1").hidden = "";
	document.getElementById("deliveryB2").style = "background-color:#f8f8f8; color:black;";
	document.getElementById("deliveryB1").style = "background-color:white; color:#d63422;";
}

let k = 0;
const iconMenu = () =>{
	k++
	if(k%2==0){
		document.getElementById("hiddenBlock").style = "right:-30%;"
		document.getElementById("iconMenu").src="picture/menu.png";
	}else{
		document.getElementById("hiddenBlock").style = "right:0%;"
		document.getElementById("iconMenu").src="picture/x.png";
	}
	
}