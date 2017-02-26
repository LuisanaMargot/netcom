$(document).ready(function(){
    function strollToService() {

    }
    $("#servicio-page").ready(function(){
      $(".boton").click(function(){
        $(".contenedor").hide(1000);
        $('#'+$(this).attr('data-target')).show(1000);
      });
      $(".boton-out").click(function(){
        $("#contenedor").hide(1000);
      });
    });
});
