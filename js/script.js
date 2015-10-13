
$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 100){
    $("nav").addClass("shrink");
    updateSliderMargin();
  }
  else
  {
    $("nav").removeClass("shrink");
    updateSliderMargin();
  }
});
