
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