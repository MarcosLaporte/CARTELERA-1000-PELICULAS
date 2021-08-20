let btnSwitch = document.querySelector("#switch");
let btnRandom = document.querySelector("#random");
let btnSeen = document.querySelector("#vistas");
let btnBest = document.querySelector("#mejores");
let btnBad = document.querySelector("#peores");
let btnBuscar = document.querySelector("#buscar");

	// Botón de estilo de página
	btnSwitch.onclick = function(){
		if(document.body.style.background == "white"){
			document.body.style.background = "#15202b";
				document.body.style.color = "white";
			btnSwitch.style.color = "#15202B";
			btnRandom.style.color = "#15202B";
			btnSeen.style.color = "#15202B";
			btnBest.style.color = "#15202B";
			btnBad.style.color = "#15202B";
			btnBuscar.style.color = "#15202B";
			alert("A");
		}else if(document.body.style.background == "rgb(21, 32, 43)"){
			document.body.style.background = "white";
				document.body.style.color = "black";
			btnSwitch.style.color = "white";
			btnRandom.style.color = "white";
			btnSeen.style.color = "white";
			btnBest.style.color = "white";
			btnBad.style.color = "white";
			btnBuscar.style.color = "white";
			alert("B");
		}else{
			document.body.style.background = "#15202b";
				document.body.style.color = "white";
			btnSwitch.style.color = "#15202B";
			btnRandom.style.color = "#15202B";
			btnSeen.style.color = "#15202B";
			btnBest.style.color = "#15202B";
			btnBad.style.color = "#15202B";
			btnBuscar.style.color = "#15202B";
			alert("C");
		}
	}
	
	// Buscador de pelis
	btnBuscar.onclick = function(){
		let busqueda = prompt("Ingrese el nombre de una película:").toUpperCase();
		while(busqueda.length == 0){
			busqueda = prompt("Debe ingresar algo. Ingrese el nombre de una película:").toUpperCase();
		}
		for(let i = 1; i < pelis.length; i++){
			if(busqueda == pelis[i]){
				alert(`"${busqueda}" se encuentra en el número ${i}.`);
				console.log(`"${busqueda}" se encuentra en el número ${i}.`);
				return;
			}else if(i == 1000){
				alert(`"${busqueda}" no existe. El título que escriba debe coincidir con alguno de la lista.`);
				console.log(`"${busqueda}" no existe.`);
			}
		}
	}

let min = 1;
let max = 1001;
let random;
let SEEN = [ , 1, 7, 8, 12, 19, 21, 22, 24, 25, 28, 31, 35, 38, 54, 65, 69, 76, 80, 82, 92, 93, 103, 104, 111, 129, 135, 151, 152, 157, 167, 188, 190, 192, 208, 233,241, 248, 273, 281, 282, 283, 284, 285, 303, 305, 310, 311, 319, 320, 323, 334, 339, 358, 364, 383, 403,
404, 408, 409, 416, 435, 462, 473, 487, 492, 508, 514, 517, 535, 545, 553, 555, 583, 587, 591, 601, 604, 607, 619, 630, 639, 671, 685, 688, 690, 695, 716, 717, 735, 752, 756, 772, 776, 780, 785, 787, 863, 869, 877, 882, 886, 897, 903, 919, 932, 937, 939, 945, 959, 994];
let BEST = [ , 5, 27, 73, 81, 185, 226, 246, 265, 414, 465, 467, 533, 598, 745, 842, 954];
let BAD = [ , 106, 456, 529, 530, 758];
let nameSEEN = [];
let nameBEST = [];
let nameBAD = [];
	
	// Marca películas vistas
	btnSeen.onclick = function(){
		let contSeen = 0;
		for(let i = 1; i < pelis.length; i++){
			if(pelis[SEEN[i]] != undefined){
			console.log(pelis[SEEN[i]]);
			contSeen++;
			nameSEEN.push(pelis[SEEN[i]]);
			}
		}
		alert(`En total son ${contSeen} películas vistas.`);
		console.log(`En total son ${contSeen} películas vistas.`);
		// console.log(nameSEEN);
		btnSeen.style.backgroundColor = "#0f537e";
		btnSeen.disabled = true; //Bloquea el botón para que no vuelva a ser presionado.
	}

	// Marca las mejores películas
	btnBest.onclick = function(){
		let contBest = 0;
		for(var i = 1; i < pelis.length; i++){
			if(pelis[BEST[i]] != undefined){
			console.log(pelis[BEST[i]]);
			contBest++;
			nameBEST.push(pelis[BEST[i]]);
			}
		}
		alert(`En total son ${contBest} las mejores películas vistas.`);
		console.log(`En total son ${contBest} las mejores películas vistas.`);
		// console.log(nameBEST);
		btnBest.style.backgroundColor = "#0f537e";
		btnBest.disabled = true;
	}

	// Marca las peores películas
	btnBad.onclick = function(){
		let contBad = 0;
		for(let i = 1; i < pelis.length; i++){
			if(pelis[BAD[i]] != undefined){
			console.log(pelis[BAD[i]]);
			contBad++;
			nameBAD.push(pelis[BAD[i]]);
			}
		}
		alert(`En total son ${contBad} las peores películas vistas.`);
		console.log(`En total son ${contBad} las peores películas vistas.`);
		// console.log(nameBAD);
		btnBad.style.backgroundColor = "#0f537e";
		btnBad.disabled = true;
	}

	btnRandom.onclick = function(){
		random = Math.floor(Math.random() * max + min);
			if(SEEN.includes(random)){
				alert(`Número ${random}? Esta película ya la viste! Intentá de nuevo.`);
			}else if(BEST.includes(random)){
				alert(`Número ${random}? Una joyita! Ya la viste, pero da para verla de nuevo! Intentá de nuevo.`);
			}else if(BAD.includes(random)){
				alert(`Número ${random}? Que película de mierda! Ya la viste. Intentá de nuevo.`);
			}else{
				alert(`La película elegida es la número ${random}!`);
			}
		alert(`La película con ese número (${random}) es: ${pelis[random]}.`);
		console.log(`${random}, ${pelis[random]}`);
	}