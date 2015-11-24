//Inicialización de Variables

var vid, btn, navbar;

function intialize(){
	
	//Referenciando las variables
	
	vid = document.getElementById("mi_video");
	btn = document.getElementById("btnplaypause");
	navbar = document.getElementById("navbar");
	
	//Añadiendo Listeners
	
	btn.addEventListener("click",playPause,false);
	navbar.addEventListener("change",vidBar,false);
	vid.addEventListener("timeupdate",actualiza_navbar,false);
}

window.onload = intialize; //Lo que hace esta línea es asegurar que el HTML está cargado completamente. Así nos ahorramos errores al llamar a los elementos del HTML.

function playPause(){
	if(vid.paused){
		vid.play();
		btn.innerHTML = "Pause";
	} else {
		vid.pause();
		btn.innerHTML = "Play";
	}
}

function vidBar(){
	var navbarto = vid.duration * (navbar.value / 100);
	vid.currentTime = navbarto;
}

function actualiza_navbar(){
	var new_time = vid.currentTime * (100 / vid.duration);
	navbar.value = new_time;
}
