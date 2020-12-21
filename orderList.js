


const fillOrderList = (product)=>{
	let suma = 0;
	promisedPizza.then((pizza) => {
		let size = ['Маленька', 'Середня', 'Велика']
		if (pizza.length > 0) {
		    for (let key1 in pizza) {
	    		for(let i = 0; i < product.length; i++){
	    			if(pizza[key1].id == product[i][0]){
	    				for(let j = 0; j < product[i][1].length; j++){
	    					if(product[i][1][j]!=0){
	    						suma = suma+pizza[key1].price[j]*product[i][1][j]
	    						document.getElementById("mainBlockOrder").innerHTML += `
	    						<div class="productInOrder">
									<img src="`+pizza[key1].images+`" class="pictureproductInOrder">
									<div class="mainPartOrederForm">
										<div class="textBlockInOrder">
											<h1>`+pizza[key1].productName+`</h1>
											<img onclick="deleteOrder(`+pizza[key1].id+`,`+j+`)" src="picture/x2.png">
										</div>
										<div class="ingredInOrder">	
												<p>Моцарела Соус Domino's</p>
												<p>`+size[j]+`</p>
										</div>
										<div class="priseAndNumber">
											<div><strong>`+pizza[key1].price[j]+`грн</strong></div>
											<div class="numberOrder">
												<button onclick="plusOrMinusProduct(`+pizza[key1].id+`,`+j+`, true )">+</button>
												<p>`+product[i][1][j]+`</p>
												<button onclick="plusOrMinusProduct(`+pizza[key1].id+`,`+j+`, false )">-</button>
											</div>
										</div>
									</div>
								</div>
								<div class="greyline"></div>	
	    						`
	    					}
	    				}
	    			}
	    		}
			}
		}
		suma=Math.floor(suma*100)/100;
		let k = suma+'грн';
		document.getElementById("priseOrder").innerHTML = k;
	})
}
