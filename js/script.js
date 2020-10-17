$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
$(function () {
    $('[data-toggle="popover"]').popover()
  });
  $('.popover-dismiss').popover({
    trigger: 'focus'
  });
 
  function modInicio() {
    $("#contenedor").empty();
    $("#contenedor").load("pages/inicio.html",function () {

    });
  };