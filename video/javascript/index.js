//Inicialización de Variables

var vid, btn, navbar, tiempoActual, duracion, mutebtn, volumenbar, pantcompl;

function initialize(){

	//Referenciando las variables

	vid = document.getElementById("mi_video");
	btn = document.getElementById("btnplaypause");
	navbar = document.getElementById("navbar");
	tiempoActual = document.getElementById("tiempoactual");
	duracion = document.getElementById("duracion");
	mutebtn = document.getElementById("mutebtn");
	volumenbar = document.getElementById("volumenbar");
	pantcompl = document.getElementById("pantcompl");

	//Añadiendo Listeners

	btn.addEventListener("click",playPause);
	navbar.addEventListener("change",vidBar);
	vid.addEventListener("timeupdate",actualiza_navbar);
	navbar.addEventListener("mousedown", md);
	navbar.addEventListener("mouseup", mu);
	mutebtn.addEventListener("click",vidmute);
	volumenbar.addEventListener("change",volumen_set);

}

window.onload = initialize; 

function playPause(){
	if(vid.paused){
		vid.play();
		btn.style.background = 'url("http://www.kelliyounglove.com/site/templates/img/audio-pause.png") no-repeat';
	} else {
		vid.pause();
		btn.style.background = 'url("https://s3.amazonaws.com/online.fliphtml5.com/book/template/Handy/style/icon/autoPlay.png") no-repeat';
	}
}


function vidBar(){
	var navbarto = vid.duration * (navbar.value / 100);
	vid.currentTime = navbarto;
}


function actualiza_navbar(){
	var new_time = vid.currentTime * (100 / vid.duration);
	navbar.value = new_time;
	var minActual = Math.floor(vid.currentTime / 60);
	var secActual = Math.floor(vid.currentTime - minActual * 60);
	var minDuracion = Math.floor(vid.duration / 60);
	var secDuracion = Math.floor(vid.duration - minDuracion * 60);
	if (secActual < 10){
		secActual = "0" + secActual;
	}
	if(minActual < 10){
		minActual = "0" + minActual;
	}
	if(secDuracion < 10){
		secDuracion = "0" + secDuracion;
	}
	if(minDuracion < 10){
		minDuracion = "0" + minDuracion;
	}
	tiempoActual.innerHTML = minActual+":"+secActual;
	duracion.innerHTML = minDuracion+":"+secDuracion;
}


function vidmute(){
	if(vid.muted){
		vid.muted = false;
		mutebtn.style.background = 'url("http://www.academia.org.mx/aml_static/dm2/style/icon/soundOn.png") no-repeat';
	} else {
		vid.muted = true;
		mutebtn.style.background = 'url("http://epresskitz.com/images/mute_icon.png") no-repeat';
	}
}


function volumen_set(){
	vid.volume = volumenbar.value / 100;
}


function pantallaCompleta(){

}


function md (){
	vid.pause();
}


function mu () {
	vid.play();
}
