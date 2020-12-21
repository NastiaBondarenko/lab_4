

const plusOrMinusProduct = (id, size, bull) =>{
	if(bull){
		let keys = Object.keys(localStorage);
    	for(let key of keys) {
    		if(key == id){
				let f = localStorage.getItem(id)+ size;
				localStorage.setItem(id, f) ;
				document.getElementById("mainBlock").innerHTML =``
				fillOrder();
				countSuma();
	
    		}
    	}		
	}
	else{
		let keys = Object.keys(localStorage);
    	for(let key of keys) {
    		if(key == id){
				let f = localStorage.getItem(id);
				for(let i = 0; i < f.length; i++){
					if(f[i]==size){
						if(f.length == 1) localStorage.removeItem(id)
						 f = f.slice(0, i) + f.slice(i+1);
						 break;
					}
				}
				localStorage.setItem(id, f);
				document.getElementById("mainBlock").innerHTML =``
				fillOrder();
				countSuma();
	
    		}
    	}		
	}
}


const deleteOrder = (id, size)=>{
	let keys = Object.keys(localStorage);
    	for(let key of keys) {
    		if(key == id){
				let f = localStorage.getItem(id);
				for(let i = f.length; i >= 0; i--){
					if(f[i]==size){
						if(f.length == 1) localStorage.removeItem(id)
						 f = f.slice(0, i) + f.slice(i+1);
						 
					}
				}
				localStorage.setItem(id, f);
				document.getElementById("mainBlock").innerHTML =``
				fillOrder();
				let count = 0; 
				let suma = 0;
				let keys = Object.keys(localStorage);
				 countSuma();
	
    		}
    	}		
	
}
