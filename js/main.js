---
---
function equalHeight(group) {
  var tallest = 0;
  group.each(function() {
    var thisHeight = $(this).height();
    if(thisHeight > tallest) {
      tallest = thisHeight;
    }
  });
  group.height(tallest);
}

$(document).ready(function(){
  $("#header").addClass("scroll-header");
});
$(window).scroll(function() {
  if ($(this).scrollTop() > 160) { //I just used 200 for testing
    $("#header").addClass("fixed-header").removeClass("scroll-header");
  } else {
    $("#header").removeClass("fixed-header").addClass("scroll-header"); //same here
  }                           
});

$(document).ready(function() {
  equalHeight($(".member"));
});