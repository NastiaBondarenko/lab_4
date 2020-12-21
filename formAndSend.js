



const sendServer = (form) =>{
	fetch('https://my-json-server.typicode.com/NastiaBondarenko/db2/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            })
	
            .then(response => response.json())
            .then(data => {
                let orderId = data['id'];
                history.pushState({}, null, '#order/' + orderId.toString());
                 document.getElementById("mainBlock").innerHTML = ``;
                 if(form.street != null)document.getElementById("mainBlock").innerHTML = `
                 <h2>Номер замовлення `+orderId+`</h2>
                 <p>`+form.name+`</p>
                  <p>`+form.email+`</p>
                  <p>`+form.number+`</p>
                  <p>`+form.town+`, `+form.street+`, `+form.house+` `+form.flat+`</p>
                  <p>`+form.day+` `+form.time+`</p>
                  <p>`+form.suma+`</p>

                 `;
                 else document.getElementById("mainBlock").innerHTML = `
                 <h2>Номер замовлення `+orderId+`</h2>
                 <p>`+form.name+`</p>
                  <p>`+form.email+`</p>
                  <p>`+form.number+`</p>
                  <p>`+form.town+`, `+form.restor+`</p>
                  <p>`+form.day+` `+form.time+`</p>
                  <p>`+form.suma+`</p>

                 `;
                 let keys = Object.keys(localStorage);
                 let production = [];
                 console.log(form.product)
                 const size = ["Маленька", "Середня", "Велика"]
                
                 	 promisedPizza.then((pizza) => {
					if (pizza.length > 0) {
						for (let key1 in pizza) {
							 for(let i = 0; i < form.product.length; i++){
							let prod = [0,0,0];
							if(form.product[i][0] == pizza[key1].id){
								//console.log(pizza[key1].id)
					 		 const h = form.product[i][1];
					 			for(let j = 0; j < h.length; j++){
					 				prod[h[j]]++;
					 			}
			                 
			                 

			                 for(let j = 0; j < 3; j++){
			                 	if(prod[j]!=0) production.push([pizza[key1].productName, size[j], prod[j], prod[j]*pizza[key1].price[j]])
			                 }
			             console.log(production)
			         	}
			         }	
			     }
				}
				 for(i = 0; i < production.length; i++){
                 	 	console.log("here")
                 	 	document.getElementById("mainBlock").innerHTML += `
                 	 	<p>`+production[i]+`</p>
                 	 	`
                 	 }
            		})
                 	

                 	
                	 
            })
            .catch((error) => {
                document.getElementById("mainBlock").innerHTML = "Eror";
			})
			localStorage.clear()
		basketShow(0, 0);


}


const order = (bull) =>{
	if(document.getElementById("counter").innerHTML != "00"){
		let product=[];
			let keys = Object.keys(localStorage);
			for(let key of keys) {
		 			product.push([key, localStorage.getItem(key)]);
			    }
	if(bull==1){
		if(form1.elements.name.value =='' || form1.elements.number.value=='' ||
		form1.elements.email.value=='' || form2.elements.town.value == ''	||
		form2.elements.street.value=='' || form2.elements.house.value=='' ){
			alert("Заповніть форму")
		}else{
			

		let form = {
				"name" : form1.elements.name.value,
				"number" : form1.elements.number.value, 
				"email" : form1.elements.email.value,
				"town" : form2.elements.town.value,
				"street" : form2.elements.street.value,
				"house" : form2.elements.house.value,
				"flat" : form2.elements.flat.value,
				"pidizd" : form2.elements.pidizd.value,
				"cod" : form2.elements.cod.value,
				"poverh" : form2.elements.poverh.value,
				"coment" : form2.elements.coment.value,
				"day" : form3.elements.day.value,
				"time" : form4.elements.time.value,
				"action" : form5.elements.action.value,
				"reshta" :  form5.elements.reshta.value,
				"typePay" : form5.elements.typePay.value,
				"product" : product, 
				"suma": document.getElementById("basketPay").innerHTML 

			}
			sendServer(form)
		}
		
	}
	
	else{
		//console.log(form10)
		if(form6.elements.name.value =='' || 
			form6.elements.number.value=='' ||
		form6.elements.email.value=='' || 
		adressInput2.elements.town.value == ''	||
		adressInput2.elements.restor.value=='' ){
			alert("Заповніть форму")
		}
		
		else{
			console.log("hi")
		let form = {
	 		"name" : form6.elements.name.value,
	 		"number" : form6.elements.number.value, 
	 		"email" : form6.elements.email.value,
	 		"town" : adressInput2.elements.town.value,
			"restor" : adressInput2.elements.restor.value,
	 		"coment" : adressInput2.elements.coment.value,
	 		"day" : form8.elements.day.value,
	 		"time" : form9.elements.time.value,
	 		"action" : form10.elements.action.value,
	 		"reshta" :  form10.elements.reshta.value,
	 		"typePay" : form10.elements.typePay.value,
	 		"product" : product, 
	 		"suma": document.getElementById("basketPay").innerHTML 
	 	}
		 	sendServer(form)
		}
		
	// }

	}
}
}


