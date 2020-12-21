

const routes = [
    { path: "#action", view: fillAction },
    { path: "#home", view: fillPageCategory },
    { path: "#", view: fillPageCategoryObnov },
    { path: "#action/", view: fillOneAction },
    { path: "#product/", view: fillOneProduct },
    { path: "#order", view: fillOrder},
    
];





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