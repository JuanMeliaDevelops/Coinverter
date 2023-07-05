// Animacion 

$("#logo1").on("mouseover", function () {
    $("#logo1").addClass("animate__animated animate__swing").delay(1800).queue(function (remover) {
      $(this).removeClass("animate__animated animate__swing");
      remover();
    });
  
  });
  
  
  