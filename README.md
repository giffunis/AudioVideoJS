STW: Audio y Video en JavaScript
===================
Presentación para la asignatura de Sistemas y Tecnologías Web en la que implementaremos funcionalidades de audio y video usando HTML y JavaScript.

## Reproductor de Audio

En este apartado se explicará como crear y personalizar un reproductor de audio.

En primer lugar se crea el fichero HTML en el que se va a trabajar (index.html):

```
<!DOCTYPE html>
<html>
 <head>
   <meta charset="UTF-8">
   <title>Reproductor de audio</title>
   <link rel="stylesheet" type="text/css" href="css/estilos.css">
   <script src="javascript/index.js" language="javascript" type="text/javascript"></script>
</head>
<body>
<div id="main">
   <img src="fotos/musica.jpg" alt="">
   <div id="controles">
   </div>
   <div>
    <audio id="audio1" style="width:25%"></audio>
   </div>
 </div>
</body>
</html>
```
* En el div fichero es donde cargaremos el fichero de audio que queremos que se reproduzca.
* En el div controles iremos añadiendo los botones o elementos que se encargarán de controlar el vídeo.
* La etiqueta audio es la que contendrá el archivo de audio que cargemos.

#### Carga del fichero

1. ñadimos el input y el botón que se encargarán cargar el audio seleccionado.

```
<body>
  <div id="fichero">
    <input type="text" id="audioFile" placeholder="audio.mp3" size="60" />
    <button id="iniciar">Cargar audio</button>
  </div>
  <div id="main">
    ...
  </div>
</body>
```

2. Le damos funcionalidad al botón "Cargar audio". Para ello usamos JavaScript (fichero index.js).


* Definimos las variables que vamos a utilizar y creamos la funcion initialze, donde asignaremos los valores a las variables y definiremos los EventListeners.
```
var inicio;
function initialize () {
  //Asignacion de su valor a cada variable
  inicio = document.getElementById("iniciar");

  //EventListeners
  inicio.addEventListener("click",iniciar);
}
```
inicio.addEventListener("click",iniciar): cuando se haga click en el botón con id inicar se ejecutará la función iniciar, que definiremos a continuación.

* Definimos la función iniciar(): 

```
function iniciar () {
  if (audioElm.paused == true) {
    // Get file from text box and assign it to the source of the audio element
    audioElm.src = document.getElementById('audioFile').value;
    audioElm.play();
  }
}
```
En esta función se coge el audio introducido en el area de texto y se asigna al elemento de audio. A continuación se inicia la reproducción.

#### Play/pausa
1. Añadimos el botón que se encargará de parar y pausar el vídeo dentro del div controles.

```
<button id="playbutton"></button>
```

2. Añadimos al css un icono de play para que se muestre como botón.
```
#playbutton{
  background:url("http://mannyzone.com/images/pause.png" ) no-repeat;
  ...
}
```
Además de esta se le han añadido otras propiedadades como de posición que se podrán ver en el archivo css correspondiente.

3. Le damos funcionalidad al botón usando JavaScript.


* Definimos las variables que vamos a utilizar.
* Le asiganamos su valor y su EventListener correspondiente dentro de la función initialize.

```
var audioElm, inicio, playbutton;
function initialize () {
  //Asignacion de su valor a cada variable
  inicio = document.getElementById("iniciar");
  audioElm = document.getElementById("audio1");
  playbutton = document.getElementById('playbutton');

  //EventListeners
  inicio.addEventListener("click",iniciar);
  playbutton.addEventListener("click",playPausa);
}
```
playbutton.addEventListener("click",playPausa): cuando se haga click en el botón con id playbutton se ejecutará la función playPausa, que definiremos a continuación.

* Indicamos que la funcion initialize se ejecutará cuando se haya cargado la ventana.

```
window.onload = initialize;
```
* Definimos la la funcion playPausa():
```
function playPausa() {
  if (document.getElementById("audio1")) {
    if (audioElm.paused) {
      audioElm.play();
      playbutton.style.background = 'url("http://mannyzone.com/images/pause.png") no-repeat';
    }
      else {
        audioElm.pause();
        playbutton.style.background = 'url("http://mannyzone.com/images/play.png") no-repeat';
      }
  }
}
```
Esta funcuón comprueba si existe un elemento de audio. Si lo hay comprueba si esta pausado o no, en caso de que esté pausado, inicia la reproducción y cambia el botón a uno de pausa. Si por el contrario, el audio se está reproduciendo, lo pausa y cambia el botón al de play.


##Reproductor de vídeo

En este apartado se explicará como crear y personalizar un reproductor de vídeo en una página web.


En primer lugar se crea el fichero HTML en el que se va a trabajar (index.html):

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vídeo en JavaScript</title>
  <link rel="stylesheet" type="text/css" href="css/estilos.css">
  <script src="javascript/index.js" language="javascript" type="text/javascript"></script>
</head>
<body>
  <div id="contenedor">
    <!-- Si ponemos dentro de la etiqueta video autoplay, el vídeo se inicia solo al cargar la página -->
    <video id="mi_video" width="550" height="320">
      <source src="videos/video1.mp4">
    </video>
    <!-- Div que va a contener nuestros controles personalizados -->
    <div id="controles">
      <button id="btnplaypause" onclick="playPause(this, 'mi_video')">Play</button>
    </div>
  </div>
</body>
</html>

```

* En el head se ha incluido el fichero de estilos, usado para personalizar los colores, la posicion, etc. del reproductor y el script que contiene las funciones que usaremos para controlar el video.
* El div contenedor contiene el reproductor y los controles personalizados que vayamos añadiendo.
* La etiqueta vídeo contiene el víedo que se va reproducir en la página web.
* El div controles es donde se irán añadiendo los distintos controles que queremos que tenga el video.
* La sentencia onclick="playPause(this, 'mi_video') hace que cuando se pulse el botón Play se llame a la función playPause, que definiremos en el siguiente paso. Esta función se encargará de parar y pausar el vídeo. El parámetro this hace referencia al botón, y el parámetro 'mi_video' hace referencia al vídeo que se está reproduciendo ('mi_video' es el id de la etiqueta video).


Ahora creamos la función playPause en un fichero JavaScript (javascript/index.js)

```
function playPause(btn, vid) {
  var vid = document.getElementById(vid);
  if (vid.paused) {
    vid.play();
    btn.innerHTML = "Pause";
  }
  else {
    vid.pause();
    btn.innerHTML = "Play";
  }
}
```
En esta creamos una variable vid que represanta al vídeo que se ha cargado en la página. A continuación comprobamos si el video está pausado o no. En caso de que esté pausado se inicia el video y se cambia la etiqueta de Play por Pause y en caso de que esté corriendo se pausa y se cambia la etiqueta de Pause por la de Play.

* play() y pause() son funciones por defecto de javascript que inician y detienen el video.
* vid.paused devuelve true si el video está pausado y false si no lo está. También es una función por defecto de javascript.

-------------------------------------------------------------------

Lo que haremos a continución será estructurar mejor el código para que este sea mas legible y entendible.

Para empezar inicializaremos tres de las variables que nos harán falta en nuestro fichero javascript

```
var vid, btn, navbar;

```
Lo siguiente será añadir esta línea debajo

```
var vid, btn, navbar;

window.onload = intialize;

```
Lo que hace esta línea es asegurar que el HTML está cargado completamente. Así nos ahorramos errores al llamar a los elementos del HTML con su id antes de que estos se hayan cargado.

Después crearemos la función initialize que usaremos para referenciar nuestras variables creadas anteriormente a los id's de nuestro HTML

```
var vid, btn, navbar;

function intialize(){

	//Referenciando las variables

	vid = document.getElementById("mi_video");
	btn = document.getElementById("btnplaypause");
	navbar = document.getElementById("navbar");
}

window.onload = intialize;

```
Gracias a esto ya no necesitamos pasarle parámetros a nuestra función playPause() por lo que podemos quitárselos. Así mismo podemos quitar la referencia de vid porque ya la tenemos en el initialize.

El código entero del javascript quedaría de la siguiente forma:


```
var vid, btn, navbar;

function intialize(){

	//Referenciando las variables

	vid = document.getElementById("mi_video");
	btn = document.getElementById("btnplaypause");
	navbar = document.getElementById("navbar");
}

window.onload = intialize;

function playPause(){
	if(vid.paused){
		vid.play();
		btn.innerHTML = "Pause";
	} else {
		vid.pause();
		btn.innerHTML = "Play";
	}
}

```
A su vez, en el HTML, cuando llamamos a la función playPause(), también debemos quitarle los parámetros, quedando de la siguiente manera:

```
<button id="btnplaypause" onclick="playPause()">Play</button>

```

A continuación reemplazaremos nuestro evento onclick mediante un listener que definiremos en nuestra función initialize

```
function intialize(){

	//Referenciando las variables

	vid = document.getElementById("mi_video");
	btn = document.getElementById("btnplaypause");
	navbar = document.getElementById("navbar");

	//Añadiendo Listeners

	btn.addEventListener("click",playPause,false);
}

```

Este listener nos permitirá eliminar la llamada a la función playPause() con el método onClick de nuestro HTML

```
<button id="btnplaypause">Play</button>

```
Lo que haremos ahora será añadir un nuevo controlador a nuestro HTML usando la variable nvbar que definimos anteriormente

```
<div id="controles">
  <button id="btnplaypause">Play</button>
  <input id="navbar" type="range" min="0" max="100" value="0" step="1">
</div>
```
También añadiremos un nuevo listener para esto junto a los demás en el initialize

```
	navbar.addEventListener("change",vidBar,false);

```
Esto lo que hará es que cuando haya un cambio en la barra de navegación se va a llamar a la función vidBar() que implementaremos a continuación.


```
function vidBar(){
	var navbarto = vid.duration * (navbar.value / 100);
	vid.currentTime = navbarto;
}

```
vid.duration nos dá la duración total del video.

Básicamente lo que estamos haciendo en esta función es que al mover la barra de navegación el video se sitúe en ese punto.

Lo que haremos a continuación será que a medida que avance el video se vea el progreso del mismo en la barra de navegación.

Para ello añadiremos otro listener quedando nuestra función initialize de la siguiente forma:

```
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
```
Lo que hará es que según pase el tiempo se va a llamar a la función actualiza_navbar() que definiremos a continuación
```
function actualiza_navbar(){
	var new_time = vid.currentTime * (100 / vid.duration);
	navbar.value = new_time;
}
```

-------------------------------------------------------------------

#### Mostrar duración y tiempo actual del vídeo

En primer lugar modificamos el html y añadimos la zona donde queremos que se muestren los datos de duración y tiempo. Esto lo haremos añadiendo etiquetas span a nuestro div controles:
```
<div id="controles">
  <button id="btnplaypause">Play</button>
  <input id="navbar" type="range" min="0" max="100" value="0" step="1">
  <span id="tiempoactual"></span>   /    <span id="duracion"></span>
</div>
```

A continuación procedemos a modificar el código JavaScript. En primer lugar añadimos dos nuevas variables, tiempoActual y duracion.

```
var vid, btn, navbar, tiempoActual, duracion, mutebtn, volumenbar;
```

Ahora le asignamos su valor correspondiente a cada una de las nuevas variables. Para ello ponemos lo siguiente dentro de la función initialize.

```
tiempoActual = document.getElementById("tiempoactual");
duracion = document.getElementById("duracion");
```

Por último ampliamos la función actualiza_navbar():

```
function actualiza_navbar(){
	var new_time = vid.currentTime * (100 / vid.duration);
	navbar.value = new_time;
	// Aqui empieza el codigo para mostrar el tiempo actual del video y su duración
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
```

* minActual almacena los minutos reproducidos del vídeo.
* secActual almacena los segundos reproducidos del vídeo.
* minduración almacena los minutos totales del vídeo.
* secDuracion almacena los segundos totales del vídeo.
* En los ifs lo que se hace es que cada se añada un 0 delante si los minutos o segundos correspondientes son menor que 0, de esta forma en vez de aparecernos en este formato: 9:15, 3:4 ... nos aparecerá lo siguiente: 09:15, 03:04 ...
* En las dos últimas líneas se modifica el HTML para que se vayan actualizando los datos.

-------------------------------------------------------------------
Lo que trataremos de hacer ahora será centrarnos en las funcionalidades de audio de nuestro video.

Para empezar vamos a crear un botón que mutee y desmutee el video.

Para ello en el fichero index.html añadiremos la siguiente linea debajo de las etiquetas span que muestran el tiempo inicial.
```
<button id="mutebtn">Mute</button>
```
Ahora vamos a darle funcionalidad.

En el fichero index.js crearemos otra variable que llamaremos mutebtn y la inicializaremos.
```
mutebtn = document.getElementById("mutebtn");
```
A su vez añadiremos otro listener donde usaremos esta nueva variable.
```
mutebtn.addEventListener("click",vidmute,false);
```
Como vemos es un evento click que llama a la función vidmute que definiremos a continuación.

```
function vidmute(){
	if(vid.muted){
		vid.muted = false;
		mutebtn.innerHTML = "Mute";
	} else {
		vid.muted = true;
		mutebtn.innerHTML = "Unmute";
	}
}
```
A continuación pasaremos a crear una barra para subir y bajar el volumen.

En el index.html añadiremos lo siguiente.

```
<input id="volumenbar" type="range" min="0" max="100" value="100" step="1">
```

Al igual que antes pasaremos a proporcionarle funcionalidad.

Crearemos la variable volumenbar y la inicializaremos.

```
volumenbar = document.getElementById("volumenbar");
```
Y añadimos el listener correspondiente.

```
volumenbar.addEventListener("change",volumen_set,false);
```

Al igual que la barra de navegación del video, esta se activa con un evento change, llamando a la función volumen_set().

```
function volumen_set(){
	vid.volume = volumenbar.value / 100;
}
```

Como dato adicional, en la sentencia
```

<input id="volumenbar" type="range" min="0" max="100" value="100" step="1">
```

value es igual a 100 para que la barra este al máximo por defecto.

-------------------------------------------------------------------
####Pantalla completa

Creamos un nuevo boton HTML en el div de controles:

```
<button id="pantcompl">[ &nbsp; ]</button>
```

En el fichero JavaScript añadimos una nueva variable y le asignamos su valor correspondiente como hemos hecho en los pasos anteriores:

```
var vid, btn, navbar, tiempoActual, duracion, mutebtn, volumenbar, pantcompl;
function intialize(){

  ....
	pantcompl = document.getElementById("pantcompl");
  ....
```

A continuación creamos un EventListener dentro de la función initialize(), para que cuando se haga click en el botón de pantalla completa se realize la acción correspondiente.

```
pantcompl.addEventListener("click",pantallaCompleta,false);
```

Por último creamos la función pantallaCompleta.

```
function pantallaCompleta(){
	if(vid.requestFullScreen){
		vid.requestFullScreen();
	}
	else if (vid.webkitRequestFullScreen) {
		vid.webkitRequestFullScreen();
	}
	else if (vid.mozRequestFullScreen) {
		vid.mozRequestFullScreen();
	}
}
```

#### Información extra:

* Si se añade controls o controls="controls en la etiqueta video, se pondrán los controles por defecto de HTML".
```
<video id="mi_video" controls width="550" height="320"></video>
<video id="mi_video" controls="controls" width="550" height="320"></video>
```
* Si se añade autoplay en la etiqueta video, el video se reproducirá automáticamente al cargar la página.
```
<video id="mi_video" controls width="550" height="320"></video>
```


##Enlaces utilizados

##Datos Adicionales
----------------------------------------
- Enlace a la página personal de Alejandro Ravelo Moreno: http://alu0100763379.github.io/
- Enlace a la página personal de Rebecca Martínez Galán: http://rebeccamartinez.github.io/
- Contacto Alejandro: alu0100763379@ull.edu.es
- Contacto Rebecca: alu0100773026@ull.edu.es
