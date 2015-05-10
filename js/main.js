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

jQuery(function($){
  $.supersized({
  
    slideshow: 1,
    autoplay: 1,
    start_slide: 1,
    random: 0,
    slide_interval: 5000,
    transition: 1,
    transition_speed: 500,
    new_window: 0,
    pause_hover: 0,
    keyboard_nav: 1,
    performance: 1,
    image_protect: 1,
    image_path: 'http://studiofouronefour.com/wp-content/themes/s414/images/',

    //Size & Position
    min_width: 0,
    min_height: 0,
    vertical_center: 1,
    horizontal_center: 1,
    fit_portrait: 1,
    fit_landscape: 0,
    
    //Components
    navigation: 1,
    thumbnail_navigation: 0,
    slide_counter: 1,
    slide_captions: 1,
    slides: [
      {
        image : '/img/slides/slide.jpg',
        title : '<a href="/?p=445">Rustic Reinvention &rarr;</a>',
        url : ''
      },
      {
        image : '/img/slides/slide1.jpg',
        title : '<a href="/?p=432">Freeway Loft &rarr;</a>', url : ''
      },
      {
        image : '/img/slides/sensory_rehab-full.jpg',
        title : '<a href="/?p=279">Sensor[y Rehab]ilitation &rarr;</a>',
        url : ''
      },
      {
        image : '/img/slides/urban_repose-full.jpg',
        title : '<a href="/?p=289">Urban Repose &rarr;</a>',
        url : ''
      }
    ]
                  
  }); 
});