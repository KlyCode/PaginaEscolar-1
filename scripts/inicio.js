

let submenu = document.getElementsByClassName("submenu-enlaces");
let link = document.getElementsByClassName("grupo-enlaces");

function mostrarSubmenu( item ) {
	submenu[item].classList.toggle("submenu-enlaces-mostrar");
	link[item].classList.toggle("menu-link-activado");
} 


let icono = document.getElementsByClassName("menu-icono");
let menu1 = document.getElementById("menu1");
function menuHamburguesa() {

	for (var i = 0; i < icono.length; i++) {
		icono[i].classList.toggle("menu-icono-activo");
	}

	menu1.classList.toggle("enlaces-mostrar");
}


let imagen = document.getElementsByClassName("carrusel-imagen");

let cambio = 0;
let move = 0;
let n = 1;

function carrusel() {		
	if (cambio == 0) {
		n++; 

		if (n >= imagen.length) { 
			cambio = 1;
		}

		move -= 100;
		
		for (var i = 0; i < imagen.length; i++) {
			imagen[i].style.transform = `translateX(${move}%)`;
		}

	} else if (cambio == 1) {				
		n--; 

		if (n == 1) { 
			cambio = 0;
		}
			
		move += 100;
		
		for (var i = 0; i < imagen.length; i++) {
			imagen[i].style.transform = `translateX(${move}%)`;
		}			
	}
} 

setInterval(carrusel, 8000); 
