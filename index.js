'use strict'

function getContent(url) {
    return fetch(url).then(content => content.json());
}


window.addEventListener('popstate', router);



 window.onload = function() {

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
		
		countSuma();		
  };


window.onunload = function() {
	localStorage.clear()
}


async function getData(url, order) {
    const response = await fetch(url, {
        method: 'post',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
        body: JSON.stringify(order)
    });
  
    return response.json();
  }