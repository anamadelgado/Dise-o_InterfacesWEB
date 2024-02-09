$(document).ready(function () {
  console.log("hola");
  //para que se vea se usa el metodo show()
  //para ocultar hide()

  $("button.mostrarContenedor").click(function () {
    $("div.contenedor").show();
    $(this).hide();
    $("button.ocultarContenedor").show();
  });

  $(".ocultarContenedor").click(function () {
    $(".contenedor").hide();
    $(this).hide();
    $(".mostrarContenedor").show();
  });
});
