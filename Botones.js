let btnSwitch = document.querySelector("#switch");
let btnRandom = document.querySelector("#random");
/* let btnSeen = document.querySelector("#vistas");
let btnBest = document.querySelector("#mejores");
let btnBad = document.querySelector("#peores"); */
let btnBuscar = document.querySelector("#buscar");

	// Botón de estilo de página
	btnSwitch.onclick = function(){
		if(document.body.style.backgroundColor == "dimgrey"){
			document.body.style.backgroundColor = "white";
				document.body.style.color = "black";
			document.headear
			btnSwitch.style.color = "white";
			btnRandom.style.color = "white";
			btnSeen.style.color = "white";
			btnBest.style.color = "white";
			btnBad.style.color = "white";
			btnBuscar.style.color = "white";
		}else{
			if(document.body.style.backgroundColor == "white"){
				document.body.style.backgroundColor = "dimgrey";
					document.body.style.color = "white";
				btnSwitch.style.color = "#15202B";
				btnRandom.style.color = "#15202B";
				btnSeen.style.color = "#15202B";
				btnBest.style.color = "#15202B";
				btnBad.style.color = "#15202B";
				btnBuscar.style.color = "#15202B";
			}else{
				document.body.style.backgroundColor = "dimgrey";
					document.body.style.color = "white";
				btnSwitch.style.color = "#15202B";
				btnRandom.style.color = "#15202B";
				btnSeen.style.color = "#15202B";
				btnBest.style.color = "#15202B";
				btnBad.style.color = "#15202B";
				btnBuscar.style.color = "#15202B";
			}
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
				alert(`"${busqueda}" es el número ${i}.\n<-Línea ${linea[i]}->`);
				console.log(`"${busqueda}" es el número ${i}. <-Línea ${linea[i]}->`);
				return;
			}else if(i == 1000){
				alert(`"${busqueda}" no existe. El título que escriba debe coincidir con alguno de la lista.`);
				console.log(`"${busqueda}" no existe.`);
			}
		}
	}

const min = 1;
const max = 1001;
let random;
	
	/* // Marca películas vistas
	btnSeen.onclick = function(){
		let contSeen = 0;
		for(let i = min; i < pelis.length; i++){
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
		for(let i = min; i < pelis.length; i++){
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
		for(let i = min; i < pelis.length; i++){
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
	} */

	btnRandom.onclick = function(){
		random = Math.floor(Math.random() * max + min);
			if(SEEN.includes(random)){
				alert(`"${pelis[random]}"? Esta película ya la viste! Intentá de nuevo.`);
			}else if(BEST.includes(random)){
				alert(`"${pelis[random]}"? Una joyita! Ya la viste, pero da para verla de nuevo! Intentá de nuevo.`);
			}else if(BAD.includes(random)){
				alert(`"${pelis[random]}"? Que película de mierda! Ya la viste. Intentá de nuevo.`);
			}else{
				alert(`La película elegida es "${pelis[random]}"!`);
			}
		// alert(`La película con ese número (${random}) es: ${pelis[random]}.\n<-Línea ${linea[random]}->`);
		console.log(`${random}, ${pelis[random]}. <-${linea[random]}->`);
	}