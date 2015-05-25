$(document).ready(function(){

  function markImageAsLoaded(image) {
    $(image).addClass("loaded");
  };

  $(".js-load-animations").each(function() {
    var $image = $(this);

    if ($image.prop("complete")) {
      markImageAsLoaded($image);
    } else {
      $image.load(function(){
        markImageAsLoaded(this);
      });
    }
  });

  $(".js-static-load-animations").each(function(index, image) {
    setTimeout(function() { markImageAsLoaded(image); }, 0) 
  });

});

