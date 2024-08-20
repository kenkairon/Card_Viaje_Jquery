$(document).ready(function() {
  $(".text-body-secondary").click(function() {
    var idBoton = $("#Rio").attr("id");
    $("#detalles" + idBoton).toggle(); // Se utiliza correctamente el valor de idBoton
  });

  $(".btn-close").click(function() {
    $(".detalles").hide(); // Oculta todos los elementos con la clase "detalles"
  });
});
