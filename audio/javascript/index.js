//Definición de Variables
var audioElm, inicio, masvel, menosvel;

function initialize () {
  //Asignacion de su valor a cada variable
  audioElm = document.getElementById("audio1");
  inicio = document.getElementById("iniciar");
  pp = document.getElementById('playbutton');
  masvel = document.getElementById("masvel");
  menosvel = document.getElementById("menosvel");

  //EventListeners
  inicio.addEventListener("click",iniciar,false);
  pp.addEventListener("click",playPausa,false);
  masvel.addEventListener("click",aumentarVel,false);
  menosvel.addEventListener("click",disminuirVel,false);
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
