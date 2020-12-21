'use strict'

let lang = document.getElementById("languages");
let arrow = document.getElementById("arrowIcons");
let i = 0;
import {promisedCategory, promisedPizza, promisedIngridients} from './promices.js';
console.log("hello")

const order = [];

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
			
			  promisedPizza.then((pizza) => {
				if (pizza.length > 0) {
				    for (let key1 in pizza) {
				    	
				    		for(let key of keys) {
				    			if(pizza[key1].id == key){
							  console.log(localStorage.getItem(key));
							  let h = localStorage.getItem(key);
							  count = count + h.length;
							
				    		for(let j = 0; j < h.length; j++){
				    			suma=suma+pizza[key1].price[h[j]];
				    		}
				    	}
				    	}
				    	if(key1 = pizza.length-1) f = 1;

				    }
				}
				basketShow(suma, count);
				})
			 
		//localStorage.clear()
		
}
//localStorage.clear();


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



console.log(promisedCategory)

const plusOrMinusProduct = (id, size, bull) =>{
	if(bull){
		let keys = Object.keys(localStorage);
    	for(let key of keys) {
    		if(key == id){
				let f = localStorage.getItem(id)+ size;
				localStorage.setItem(id, f) ;
				document.getElementById("mainBlock").innerHTML =``
				fillOrder();
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
    	}		
	
}

const fillPageCategory = function() {
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
  
let activeCup = 0; 


const link2 = 'https://my-json-server.typicode.com/NastiaBondarenko/db2';

const promisedAction = getContent(`${link2}/action`);

function getContent(url) {
    return fetch(url).then(content => content.json());
}


const  activeCupon =(id) =>{
	activeCup = id;
}

const fillAction = () =>{
	promisedAction.then((action) => {
		if (action.length > 0) {
		    for (let key in action) {
		    	
		    	document.getElementById("mainBlock").innerHTML += `
		    				<div class="greyline"></div>
					    	 <div class="action">
								<img class="actionImg" src="`+action[key].image+`">
								<div class="actionContent">
									<div class="actionText">
										<h3>`+action[key].date+`</h3>
										<h1>`+action[key].name+`</h1>
										<p>`+action[key].discription+`</p>
									</div>
									<div class="actionButtuns">
											<button class="actionButtun actionButtun1"><a href="#action/`+action[key].id+`">Деталі</a></button>
											<button class="actionButtun actionButtun2" onclick="activeCupon(`+action[key].id+`)">Активувати купон</button>
									</div>
								</div>	
					</div>
					
		    	 `
		    }		    
		    	document.getElementById("mainBlock").innerHTML += `
		    				<div class="greyline"></div> `
		}
	})	    	
}


const fillOneAction = (id) =>{
	promisedAction.then((action) => {
		if (action.length > 0) {
		    for (let key in action) {
		    	if(action[key].id == id){
		    	document.getElementById("mainBlock").innerHTML += `
		    				<div class="greyline"></div>
					    	 <div class="action">
								<img class="actionImg" src="`+action[key].image+`">
								<div class="actionContent">
									<div class="actionText">
										<h3>`+action[key].date+`</h3>
										<h1>`+action[key].name+`</h1>
										<p>`+action[key].discription+`</p>
									</div>
									<div class="actionButtuns">
											<button class="actionButtun actionButtun2" onclick="activeCupon(`+action[key].id+`)">Активувати купон</button>
									</div>
								</div>	
					</div>
					
		    	 `
		    }		
		    }    
		    	document.getElementById("mainBlock").innerHTML += `
		    				<div class="greyline"></div> `
		
		}
	})	    	
}


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


const fillHome = ()=>{
	fillPageCategory()
	//setTimeout(() => fillIngrets(), 2);
}

const fillOrderList = (product)=>{
	console.log(product)
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


const fillOrder = () =>{
	document.getElementById("mainBlock").innerHTML += `
	<div class="baskBlock">
		<div class="delivery">
			<h2>Оформлення замовлення</h2>
			<div class="deliveryButtons">
				<button class="deliveryButton deliveryButton1" id="deliveryB1" onclick="delivery()">Доставка</button>
				<button class="deliveryButton deliveryButton2" id="deliveryB2" onclick="selfPickup()">З собою</button>
			</div>
			<div class="formBask" id="formBask1" >
				<h2>Контакти</h2>
				<div class="contactInput">
					<input type="text" name="name" class="inputBask wid3" placeholder="Ім'я">
					<input type="text" name="number" class="inputBask wid3" placeholder="Email">
					<input type="text" name="email" class="inputBask wid3" placeholder="Телефон">
				</div>
				<h2>Адреса</h2>
				<div class="adressInput">
					<input type="text" name="town" class="inputBask wid3" placeholder="Місто">
					<input type="text" name="street" class="inputBask wid2" placeholder="Вулиця">
					<input type="text" name="house" class="inputBask wid3" placeholder="Будинок">
					<input type="text" name="flat" class="inputBask wid3" placeholder="Квартира">
					<input type="text" name="pidizd" class="inputBask wid3" placeholder="Під'їзд">
					<input type="text" name="cod" class="inputBask wid3" placeholder="Код">
					<input type="text" name="poverh" class="inputBask wid3" placeholder="Поверх">
					<input type="text" name="coment" class="inputBask wid2 com2" placeholder="Коментар">
				</div>
				<h2>Дата та час</h2>
				<div class="dataInput">
					<div class="forInp">
						Дата
					<input type="text" name="day" class="inputBask wid1" placeholder="Сьогодні">
					</div>
					<div class="forInp">
						Час
					<input type="text" name="time" class="inputBask wid1" placeholder="Найближчим">
					</div>
				</div>
				<h2>Оплата</h2>
				<div class="payInput">
					<input type="text" name="action" class="inputBask wid3" placeholder="Купон">
					<input type="text" name="reshta" class="inputBask wid3" placeholder="Решта з">
					<input type="text" name="typePay" class="inputBask wid3" placeholder="Тип оплати">
				</div>
				<h2>Усього</h2>
				<h1>00.00 грн</h1>
				<button class="makePrder">Замовити</button>
			</div>
			<div class="formBask" id="formBask2" hidden="" >
				<h2>Контакти</h2>
				<div class="contactInput">
					<input type="text" name="name" class="inputBask wid3" placeholder="Ім'я">
					<input type="text" name="number" class="inputBask wid3" placeholder="Email">
					<input type="text" name="email" class="inputBask wid3" placeholder="Телефон">
				</div>
				<h2>Ресторан</h2>
				<div class="adressInput" id="adressInput2">
					<input type="text" name="town" class="inputBask wid3" placeholder="Місто">
					<input type="text" name="restor" class="inputBask wid2" placeholder="Ресторан">
					<input type="text" name="coment" class="inputBask wid2 com2" id="com22" placeholder="Коментар">
				</div>
				<h2>Дата та час</h2>
				<div class="dataInput">
					<div class="forInp">
						Дата
					<input type="text" name="day" class="inputBask wid1" placeholder="Сьогодні">
					</div>
					<div class="forInp">
						Час
					<input type="text" name="time" class="inputBask wid1" placeholder="Найближчим">
					</div>
				</div>
				<h2>Оплата</h2>
				<div class="payInput">
					<input type="text" name="action" class="inputBask wid3" placeholder="Купон">
					<input type="text" name="reshta" class="inputBask wid3" placeholder="Решта з">
					<input type="text" name="typePay" class="inputBask wid3" placeholder="Тип оплати">
				</div>
				<h2>Усього</h2>
				<h1>00.00 грн</h1>
				<button class="makePrder">Замовити</button>
			</div>
		</div>
		<div class="orderBask">
			<h2>Ваше замовлення</h2>
			<div class="mainBlockOrder" id="mainBlockOrder">
			</div>
				<div class="priseOrder" id="priseOrder"><strong>00.00 грн</strong></div>

		</div>
	</div>`
	let product = [];
	let keys = Object.keys(localStorage);
	  promisedPizza.then((pizza) => {
		if (pizza.length > 0) {
		    for (let key1 in pizza) {
	    		for(let key of keys) {
	    			if(pizza[key1].id == key){
	    				let sizes = [0,0,0];
	    				let f = localStorage.getItem(key);
	    				
				  		for(let i = 0; i < f.length; i++){
				  			sizes[f[i]]++;
				  		}
				  		product.push([pizza[key1].id, sizes])
					}
				}
			}
		}
		fillOrderList(product);
		})			
}



const routes = [
    { path: "#action", view: fillAction },
    { path: "#", view: fillHome },
    { path: "#action/", view: fillOneAction },
    { path: "#product/", view: fillOneProduct },
    { path: "#order", view: fillOrder},
    
];


//window.location.href=url+'#phto'

const changeHref = (hrf) =>{
	let a = window.location.href;
	let k = a.indexOf('#');
	if(k==-1) window.location.href=url+hrf
	else{
		a = a.slice(0,k);
		window.location.href=a+hrf
	}	
}


const router = () =>{

	let a = window.location.href;
	let k = a.indexOf('#');
	a = a.slice(k);
	let d = a.indexOf('/');
	if(d==-1){

		for(let i = 0; i < routes.length; i++){
			if(a==routes[i].path){
			document.getElementById("mainBlock").innerHTML =``
			 routes[i].view()
		}
	}
	}
	else{
		let f = a.slice(d+1)
		a = a.slice(0,d+1);
		for(let i = 0; i < routes.length; i++){
			if(a==routes[i].path){
			document.getElementById("mainBlock").innerHTML =``
			 routes[i].view(f)
			}
		}
	}	
	
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;    
 
 
}
window.addEventListener('popstate', router);

const basketShow = (suma, count) =>{
	let result = suma+'грн'
		if(count<10){
			document.getElementById("counter").innerHTML = '0'+count;
		} 
		else document.getElementById("counter").innerHTML =count;
		document.getElementById("basketPay").innerHTML = result;
		document.getElementById("basketPay").hidden = "";

}

 window.onload = function() {
 	console.log("hello")
   let a = window.location.href;
	let k = a.indexOf('#');

	a = a.slice(k);
	if(k==-1) a = "#";
	let d = a.indexOf('/');
	if(d==-1){

		for(let i = 0; i < routes.length; i++){
			if(a==routes[i].path){
			document.getElementById("mainBlock").innerHTML =``
			 routes[i].view()
		}
	}
	}
	else{
		let f = a.slice(d+1)
		a = a.slice(0,d+1);
		for(let i = 0; i < routes.length; i++){
			if(a==routes[i].path){
			document.getElementById("mainBlock").innerHTML =``
			 routes[i].view(f)
			}
		}
	}	
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
		
		
		
	
		
  };



