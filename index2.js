const order = (bull) =>{
	console.log("hi")
	if(bull==1){
		if(form1.elements.name.value =='' || form1.elements.number.value=='' ||
		form1.elements.email.value=='' || form2.elements.town.value == ''	||
		form2.elements.street.value=='' || form2.elements.house.value=='' ){
			alert("Заповніть форму")
		}else{
		let form = {
				name : form1.elements.name.value,
				number : form1.elements.number.value, 
				email : form1.elements.email.value,
				town : form2.elements.town.value,
				street : form2.elements.street.value,
				house : form2.elements.house.value,
				flat : form2.elements.flat.value,
				pidizd : form2.elements.pidizd.value,
				cod : form2.elements.cod.value,
				poverh : form2.elements.poverh.value,
				coment : form2.elements.coment.value,
				day : form3.elements.day.value,
				time : form4.elements.time.value,
				action : form5.elements.action.value,
				reshta :  form5.elements.reshta.value,
				typePay : form5.elements.typePay.value
			}
			console.log(form)
		}
	}
		
	
	else{
		//console.log(form10)
		if(form6.elements.name1.value =='' || form6.elements.number1.value=='' ||
		form6.elements.email1.value=='' || adressInput2.elements.town1.value == ''	||
		adressInput2.elements.restor1.value=='' ){
			alert("Заповніть форму")
		}
		
		else{
			console.log("hi")
		let form = {
	 		name : form6.elements.name1.value,
	 		number : form6.elements.number1.value, 
	 		email : form6.elements.email1.value,
	 		town : adressInput2.elements.town1.value,
			restor : adressInput2.elements.restor1.value,
	 		coment : adressInput2.elements.coment1.value,
	 		day : form8.elements.day1.value,
	 		time : form9.elements.time1.value,
	 		action : form10.elements.action1.value,
	 		reshta :  form10.elements.reshta1.value,
	 		typePay : form10.elements.typePay1.value
	 	}
		 	console.log(form)
		}
		
	// }

	}
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