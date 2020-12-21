
const basketShow = (suma, count) =>{
	let result = suma+'грн'
		if(count<10){
			document.getElementById("counter").innerHTML = '0'+count;
		} 
		else document.getElementById("counter").innerHTML =count;
		document.getElementById("basketPay").innerHTML = result;
		document.getElementById("basketPay").hidden = "";

}

const countSuma = () =>{
	let count = 0; 
	let suma = 0;
	let keys = Object.keys(localStorage);
	  promisedPizza.then((pizza) => {
		if (pizza.length > 0) {
			for(let key of keys) {
		 		 let h = localStorage.getItem(key);
		  		count = count + h.length;
			    for (let key1 in pizza) {
			    	if(pizza[key1].id == key){
			    		for(let j = 0; j < h.length; j++){
			    			suma=suma+pizza[key1].price[h[j]];
			    		}
			    	}
			    }
			}
		}
		suma=Math.floor(suma*100)/100;
 	basketShow(suma, count);
	}) 
}


const saveBasket = (id, prisInt, size) =>{
		if(size == 1) size = 0;
		if(size == 3) size = 1;
		if(size == 5) size = 2	
		let item = id;
		if(localStorage.getItem(item) != null){
			let it = localStorage.getItem(item)+size
			localStorage.setItem(item, it) ;
		}
		else{
			localStorage.setItem(item, size)
		}
		let count = 0; 
		let order = [];
		let suma = 0;
		let f = 0;
		let keys = Object.keys(localStorage);
		countSuma();			 
}

const basket = (prise, id, bull) =>{
	
	let size;
	if(bull){
		for (var i = 1; i < document.getElementById(prise).childNodes.length; i=i+2) {
			if(document.getElementById(prise).childNodes[i].hidden == ""){
				let pris = document.getElementById(prise).childNodes[i].innerHTML;
				size = i;
				let prisStr ='';
				let prisInt;
				for(let j = 0; j < pris.length-3; j++){
					 prisStr = prisStr + pris[j]
				}
				prisInt = parseFloat(prisStr);	
				saveBasket(id,prisInt,  size);
				return 0;
			}
		}	
		}else{
			let prisInt = 0;
			 promisedPizza.then((pizza) => {
		        if (pizza.length > 0) {
		            for (let key1 in pizza) {
		            	if(pizza[key1].id == id){
		            		size=1;
		            		prisInt = pizza[key1].price[0];
		            		saveBasket(id, prisInt, size);
		            		return 0;
		            	}
		            }
		        }
		    })   
				
		}			
		
}