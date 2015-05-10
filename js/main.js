---
---
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