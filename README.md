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



### Información extra:

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
