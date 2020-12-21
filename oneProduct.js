
const fillOneProduct = (id) =>{
	let active;
	 promisedPizza.then((pizza) => {
        if (pizza.length > 0) {
            for (let key1 in pizza) {
            	if(pizza[key1].id == id){
            		active = key1
            		document.getElementById("mainBlock").innerHTML += `
            		<div class="mainBlockProduct">
					        <div class="pictureProduct">

								<img src="picture/2pizza`+pizza[key1].id+`.jpg" class="picture2Pizza">
								<div><h2>Інші продукти</h2></div>
								<div class="friend" id="friend">

								</div>
							</div>
							<div class="ingredients">
								<div><strong><h2>`+pizza[key1].productName+`</h2></strong></div>

								<p>Інгредієнти</p>
								<div class="ingreds" id = "ingreds"></div>
								<div class="priceAndBaskOneProduct">
									<p class="priceOneProduct"><strong>Від `+pizza[key1].price[0]+`грн</strong></p>
									<div class="basketRed" onclick="basket('prise`+ pizza[key1].id+`', `+ pizza[key1].id+`, false)">В кошик</div>
								</div>
							</div>
					</div>

					`
					 promisedIngridients.then((ingred) => {
					    if (ingred.length > 0) {
					         for (let key2 in ingred) {
								for(let i = 0; i < pizza[key1].ingridients.length; i++){
									if(pizza[key1].ingridients[i] == ingred[key2].id){	
										document.getElementById("ingreds").innerHTML += 
									`<div class="ingred">
										<img src="picture/ingred`+ingred[key2].id+`.jpg" class="ingredImg">
										`+ingred[key2].name+`
									</div>
									`
									}
								}
							}
						}
					})	
					 promisedPizza.then((pizza) => {
		        if (pizza.length > 0) {
		            for (let key1 in pizza) {
		            	if(pizza[key1].id != id && pizza[key1].category == pizza[active].category ){
		            		document.getElementById("friend").innerHTML += `
		            			<a class="friendPizzas" href="#product/`+pizza[key1].id+`">
									<img src="picture/pizza`+pizza[key1].id+`.jpg" class="friendImg">
									<p>`+pizza[key1].productName+`</p>
								</a>
		            		`
		            	}
		            }
		        }
		        })    	
            }
        }
        }
	})	

}
