
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
				<form class="contactInput" id="form1">
					<input type="text" name="name" class="inputBask wid3" placeholder="Ім'я">
					<input type="text" name="number" class="inputBask wid3" placeholder="Телефон">
					<input type="text" name="email" class="inputBask wid3" placeholder="Email">
				</form>
				<h2>Адреса</h2>
				<form class="adressInput" id="form2">
					<input type="text" name="town" class="inputBask wid3" placeholder="Місто">
					<input type="text" name="street" class="inputBask wid2" placeholder="Вулиця">
					<input type="text" name="house" class="inputBask wid3" placeholder="Будинок">
					<input type="text" name="flat" class="inputBask wid3" placeholder="Квартира">
					<input type="text" name="pidizd" class="inputBask wid3" placeholder="Під'їзд">
					<input type="text" name="cod" class="inputBask wid3" placeholder="Код">
					<input type="text" name="poverh" class="inputBask wid3" placeholder="Поверх">
					<input type="text" name="coment" class="inputBask wid2 com2" placeholder="Коментар">
				</form>
				<h2>Дата та час</h2>
				<div class="dataInput">
					<form class="forInp" id="form3">
						Дата
					<input type="text" name="day" class="inputBask wid1" placeholder="Сьогодні">
					</form>
					<form class="forInp" id="form4">
						Час
					<input type="text" name="time" class="inputBask wid1" placeholder="Найближчим">
					</form>
				</div>
				<h2>Оплата</h2>
				<form class="payInput" id="form5">
					<input type="text" name="action" class="inputBask wid3" placeholder="Купон">
					<input type="text" name="reshta" class="inputBask wid3" placeholder="Решта з">
					<input type="text" name="typePay" class="inputBask wid3" placeholder="Тип оплати">
				</form>
				
				<button class="makePrder" onclick ="order(1)">Замовити</button>
			</div>
			<div class="formBask" id="formBask2" hidden="" >
				<h2>Контакти</h2>
				<form class="contactInput" id="form6">
					<input type="text" name="name" class="inputBask wid3" placeholder="Ім'я">
					<input type="text" name="number" class="inputBask wid3" placeholder="Телефон">
					<input type="text" name="email" class="inputBask wid3" placeholder="Email">
				</form>
				<h2>Ресторан</h2>
				<form class="adressInput" id="adressInput2">
					<input type="text" name="town" class="inputBask wid3" placeholder="Місто">
					<input type="text" name="restor" class="inputBask wid2" placeholder="Ресторан">
					<input type="text" name="coment" class="inputBask wid2 com2" id="com22" placeholder="Коментар">
				</form>
				<h2>Дата та час</h2>
				<div class="dataInput">
					<form class="forInp" id="form8">
						Дата
					<input type="text" name="day" class="inputBask wid1" placeholder="Сьогодні">
					</form>
					<form class="forInp" id="form9">
						Час
					<input type="text" name="time" class="inputBask wid1" placeholder="Найближчим">
					</form>
				</div>
				<h2>Оплата</h2>
				<form class="payInput" id="form10">
					<input type="text" name="action" class="inputBask wid3" placeholder="Купон">
					<input type="text" name="reshta" class="inputBask wid3" placeholder="Решта з">
					<input type="text" name="typePay" class="inputBask wid3" placeholder="Тип оплати">
				</form>
				
				<button class="makePrder" onclick ="order(0)">Замовити</button>
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
