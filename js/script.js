
$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 100){
    $("nav").addClass("shrink");
  }
  else
  {
    $("nav").removeClass("shrink");
  }
});

$(".utility").on("click", function() {
  if ($("nav").hasClass("shrink")) {
    $("nav").removeClass("shrink");
    if ($(".subnav").hasClass("affix")) {
      $(".subnav").removeClass("affix")
      $(".subnav").addClass("affix-top")
    }
  }
  window.scrollTo(0, 0);
})

$(".subnav").affix({
  offset: {
    top: $(".one").height()
  }
});

$('.subnav').on('affixed.bs.affix', function(){
  $(".indicator").addClass("active");
});

$('.subnav').on('affixed-top.bs.affix', function(){
  $(".indicator").removeClass("active");
});
