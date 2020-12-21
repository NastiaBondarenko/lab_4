const fillPageCategoryObnov =() =>{


	document.getElementById("mainBlock").innerHTML += `
	<div class="slider">
			<img class="imgForSlider" id="sl1" onclick="slider(1)" src="picture/action1.jpg">
			<img class="imgForSlider" id="sl2" onclick="slider(2)" src="picture/action2.jpg">
			<img class="imgForSlider" id="sl3" onclick="slider(3)" src="picture/action3.jpg">
			<img class="imgForSlider" id="sl4" onclick="slider(4)" src="picture/action4.jpg">
			<img class="imgForSlider" id="sl5" onclick="slider(5)" src="picture/action5.jpg">
		</div>`
    promisedCategory.then((category) => {
        if (category.length > 0) {
            for (let key in category) {
                document.getElementById("mainBlock").innerHTML += `
                <div class="variant" >
					<div class="name"><h2>Піцца:` +  category[key].Name +`</h2></div>
					<div class="pizzas" id="`+ category[key].nameId +`"></div>
                </div>
                `

                 promisedPizza.then((pizza) => {
		        if (pizza.length > 0) {
		            for (let key1 in pizza) {
		            	
		            	if(pizza[key1].category == category[key].nameId){
		            		

			               document.getElementById(pizza[key1].category).innerHTML += `
			                <div class="product">
			                	<a href="#product/`+ pizza[key1].id+`" class="productA">
									<img src="`+ pizza[key1].images+`">
									<h4>`+ pizza[key1].productName+`</h4>
								</a>
								<p class="margin" id="ingred`+ pizza[key1].id+`"></p>
								<u>Замінити інгредієнти</u>
								<div class="size" id="prod`+ pizza[key1].id+`">
									<button onclick="size('prod`+ pizza[key1].id+`', 1, 'prise`+ pizza[key1].id+`')"
									 class="first" >Маленька</button>
									<button onclick="size('prod`+ pizza[key1].id+`', 3, 'prise`+ pizza[key1].id+`')" 
									 class="nofirst1">Середня</button>
									<button  onclick="size('prod`+ pizza[key1].id+`', 5, 'prise`+ pizza[key1].id+`')"
									class="nofirst2">Велика</button>
								</div>
								<div>
									<div class="prise" id="prise`+ pizza[key1].id+`">
										<p> `+ pizza[key1].price[0]+`грн</p>
										<p hidden>`+ pizza[key1].price[1]+`грн</p>
										<p hidden>`+ pizza[key1].price[2]+`грн</p>
									</div>
									<div class="basketRed" onclick="basket('prise`+ pizza[key1].id+`', `+ pizza[key1].id+`, true)">В кошик</div>
								</div>
							</div>
			                `
			                let ingreds='';
			                 promisedIngridients.then((ingred) => {
							    if (ingred.length > 0) {
							         for (let key2 in ingred) {
										for(let i = 0; i < pizza[key1].ingridients.length; i++){
											if(pizza[key1].ingridients[i] == ingred[key2].id){
												if(ingreds.length!=0) ingreds= ingreds+ ', ' +ingred[key2].name;
							           			else ingreds = ingred[key2].name;

											}		
										let id = 'ingred'+ pizza[key1].id
								 	    document.getElementById(id).innerHTML = ingreds;    
										}
											
							        }

							     }
							     }) 
			            }    
		            }
		        }

   			 })
            }
        }
    })
}      

