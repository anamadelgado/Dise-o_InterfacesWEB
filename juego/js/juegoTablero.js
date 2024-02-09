var contador = 0;

var tiempoIni;
$(document).ready(function () {
  $("#cuadrado").hide();

  $("#empezar").on("click", function () {
    $("#empezar").hide();
    $("#cuadrado").show();

    $(".cuadrado").mouseenter(function (e) {
      if (contador === 0) {
        tiempoIni = e.timeStamp;
      }
      moverCuadrado(e);
    });

    $(".cuadrado").css({
      left: 0 + "px",
      top: 0 + "px",
    });
  });
});

function moverCuadrado(e) {
  var containerAncho = $(".container").width();
  var containerLargo = $(".container").height();
  var cuadradoAncho = $(".cuadrado").width();
  var cuadradoAlto = $(".cuadrado").height();

  var maxX = containerAncho - cuadradoAncho;
  var maxY = containerLargo - cuadradoAlto;

  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);

  $(".cuadrado").css({
    left: randomX + "px",
    top: randomY + "px",
  });
  contador++;
  if (contador > 10) {
    $(".cuadrado").off("mouseenter");
    var tiempoFinal = e.timeStamp;
    var tiempo = ((tiempoFinal - tiempoIni) / 1000).toFixed(2);
    $("#resultado").append(
      "El tiempo es " +
        tiempo +
        "<button id='reiniciar'>Reiniciar juego</button>"
    );
  }
  $("#reiniciar").on("click", function () {
    contador = 0;
    $("#resultado").empty();
    $("#empezar").show();
    $("#cuadrado").hide();
  });
}
