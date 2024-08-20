$(document).ready(function() {
  // Manejar clics en elementos con la clase .text-body-secondary
  $(".text-body-secondary").click(function() {
    var idBoton = $(this).attr("id"); // Obtiene el id del elemento clicado
    $("#detalles" + idBoton).toggle(); // Muestra/oculta el elemento correspondiente
  });

  // Manejar clics en elementos con la clase .btn-close
  $(".btn-close").click(function() {
    $(".detalles").hide(); // Oculta todos los elementos con la clase "detalles"
  });
});
