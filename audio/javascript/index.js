//Definición de Variables
var audioElm, playbutton, masvel, menosvel, mute, navbar, volumenbar, tiempoActual, duracion;

function initialize () {
  //Asignacion de su valor a cada variable
  audioElm = document.getElementById("audio1");
  playbutton = document.getElementById('playbutton');
  masvel = document.getElementById("masvel");
  menosvel = document.getElementById("menosvel");
  mute = document.getElementById("mute");
  navbar = document.getElementById("navbar");
  volumenbar = document.getElementById("volumenbar");
  tiempoActual = document.getElementById("tiempoActual");
  duracion = document.getElementById("duracion");

  //EventListeners
  playbutton.addEventListener("click", playPausa);
  menosvel.addEventListener("click",disminuirVel);
  masvel.addEventListener("click",aumentarVel);
  mute.addEventListener("click",mutear);
  navbar.addEventListener("change",audioBar);
  volumenbar.addEventListener("mousemove", volumenSet);
  audioElm.addEventListener("timeupdate",actualizarTiempo);
  navbar.addEventListener("mousedown", md);
  navbar.addEventListener("mouseup", mu);
}

window.onload = initialize;

function playPausa() {
  if(audioElm.paused){
    audioElm.play();
    playbutton.style.background = 'url("http://mannyzone.com/images/pause.png") no-repeat';
  }
  else{
    audioElm.pause();
    playbutton.style.background = 'url("http://mannyzone.com/images/play.png") no-repeat';
  }
// 'url("http://mannyzone.com/images/pause.png") no-repeat';

// 'url("http://mannyzone.com/images/play.png") no-repeat';

}

function aumentarVel() {
  audioElm.playbackRate += 1;
  if(audioElm.playbackRate < 1){

  }
  // falta if<1
}


function disminuirVel() {
  if (audioElm.playbackRate <= 1) {
    var x = audioElm.playbackRate;
    audioElm.playbackRate = (x/2);
  }else {
    audioElm.playbackRate -= 1;
  }
}


function mutear (){
  if(audioElm.muted){
    audioElm.muted = false;
    mute.style.background = 'url("http://help.motorola.com/hc/apps/connect/10/en-us/images/global/mdpi/mc_sound_on.png") no-repeat';
  }else {
    audioElm.muted = true;
    mute.style.background = 'url("http://www.oakschurch.co.uk/controls%5Ccvol_mute.png") no-repeat';
  }
// 'url("http://help.motorola.com/hc/apps/connect/10/en-us/images/global/mdpi/mc_sound_on.png") no-repeat';

// 'url("http://www.oakschurch.co.uk/controls%5Ccvol_mute.png") no-repeat';

}


function audioBar() {
  var a = audioElm.duration * (navbar.value / 100);
  audioElm.currentTime = a;
}


function volumenSet () {
  audioElm.volume = volumenbar.value / 100;
}



function actualizarTiempo() {
  var ne = audioElm.currentTime * (100 / audioElm.duration);
  navbar.value = ne;
  var minActual = Math.floor(audioElm.currentTime / 60);
  var secActual = Math.floor(audioElm.currentTime - minActual * 60);
  var minDuracion = Math.floor(audioElm.duration / 60);
  var secDuracion = Math.floor(audioElm.duration - minDuracion * 60);

  if (minActual < 10) {
    minActual = "0" + minActual;
  }
  if (secActual < 10) {
    secActual = "0" + secActual;
  }
  if (minDuracion < 10) {
    minDuracion = "0" + minDuracion;
  }
  if (secDuracion < 10) {
    secDuracion = "0" + secDuracion;
  }
  tiempoActual.innerHTML = minActual + ":" + secActual;
  duracion.innerHTML = minDuracion + ":" + secDuracion;
}


function md (){
  audioElm.pause();
}


function mu () {
  audioElm.play();
}
