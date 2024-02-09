$(document).ready(function () {
  $(".section2").hide();
  $(".section3").hide();
  $("#inicia").on("click", function () {
    $(".section1").hide();
    $(".section2").show();
  });

  $("#crea").on("click", function () {
    $(".section1").hide();
    $(".section2").hide();
    $(".section3").show();
  });

  $("#email").on("input", function () {
    if ($(this).val().length > 0 && $("#password").val().length > 0) {
      $("#iniciar").prop("disabled", false);
    } else {
      $("#iniciar").prop("disabled", true);
    }
  });
  $("#password").on("input", function () {
    if ($(this).val().length > 0 && $("#email").val().length > 0) {
      $("#iniciar").prop("disabled", false);
    } else {
      $("#iniciar").prop("disabled", true);
    }
  });
});
