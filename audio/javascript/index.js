var x = document.querySelector(".clickhere")
function init () {
  var val = document.querySelector(".val");
  var source = document.querySelector("audio");

  source.src = val.value;
}

  x.addEventListener('click',init,false);
