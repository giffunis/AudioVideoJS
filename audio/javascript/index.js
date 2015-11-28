//Definición de Variables
var audioElm, inicio, playbutton, masvel, menosvel, mute, navbar, volumenbar, seeking,  tiempoActual, duracion;

function initialize () {
  //Asignacion de su valor a cada variable
  audioElm = document.getElementById("audio1");
  inicio = document.getElementById("iniciar");
  playbutton = document.getElementById('playbutton');
  masvel = document.getElementById("masvel");
  menosvel = document.getElementById("menosvel");
  mute = document.getElementById("mute");
  navbar = document.getElementById("navbar");
  volumenbar = document.getElementById("volumenbar");
  tiempoActual = document.getElementById("tiempoActual");
  duracion = document.getElementById("duracion");


  //EventListeners
  inicio.addEventListener("click",iniciar);
  playbutton.addEventListener("click",playPausa);
  masvel.addEventListener("click",aumentarVel);
  menosvel.addEventListener("click",disminuirVel);
  mute.addEventListener("click",mutear);
  navbar.addEventListener("mousedown", function(event){ seeking = true; audioElm.pause(); seek(event); });
  navbar.addEventListener("mousemove", function(event){ seek(event); });
  navbar.addEventListener("mouseup", function(){ seeking = false; audioElm.play(); });
  volumenbar.addEventListener("mousemove", volumen_set);
  audioElm.addEventListener("timeupdate", function() { actualizarTiempo(); })
}

window.onload = initialize; //Lo que hace esta línea es asegurar que el HTML está cargado completamente. Así nos ahorramos errores al llamar a los elementos del HTML.

function iniciar () {
  if (audioElm.paused == true) {
    // Get file from text box and assign it to the source of the audio element
    audioElm.src = document.getElementById('audioFile').value;
    audioElm.play();
  }
}
function playPausa() {
  if (document.getElementById("audio1")) {
    if (audioElm.paused) {
      audioElm.play();
      document.getElementById("playbutton").innerHTML = "Pause";
    }
      else {
        audioElm.pause();
        document.getElementById("playbutton").innerHTML = "play";
      }
  }
}

// Aumenta la velocidad del audio
function aumentarVel() {
  audioElm.playbackRate += 1;
}

// Dsminuye la velocidd del audio
function disminuirVel() {
  if (audioElm.playbackRate <= 1) {
    var temp = audioElm.playbackRate;
    audioElm.playbackRate = (temp / 2);
  } else {
    audioElm.playbackRate -= 1;
  }
}

function mutear (){
  if(audioElm.muted){
		audioElm.muted = false;
    document.getElementById("mute").innerHTML = "mutear";
	} else {
		audioElm.muted = true;
    document.getElementById("mute").innerHTML = "mutear";
	}
}

function volumen_set () {
  audioElm.volume = volumenbar.value / 100;
}

function seek(event) {
  if(seeking){
    navbar.value = event.clientX - navbar.offsetLeft;
    var seekto = audioElm.duration * (navbar.value / 100);
    audioElm.currentTime = seekto;
  }
}

function actualizarTiempo() {
  var new_time = audioElm.currentTime * (100 / audioElm.duration);
  navbar.value = new_time;
  var minActual = Math.floor(audioElm.currentTime / 60);
  var secActual = Math.floor(audioElm.currentTime - minActual * 60);
  var minDuracion = Math.floor(audioElm.duration / 60);
  var secDuracion = Math.floor(audioElm.duration - minDuracion * 60);
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
