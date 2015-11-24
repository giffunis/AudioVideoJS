STW: Audio y Video en JavaScript
===================
Presentación para la asignatura de Sistemas y Tecnologías Web en la que implementaremos funcionalidades de audio y video usando HTML y JavaScript.

## Reproductor de Audio

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
