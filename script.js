$(document).ready(function(){
  $('#intro').hide().fadeIn(2000);
});

var lastScrollTop=0;
$(window).scroll(function(){
  var st = $(this).scrollTop();
    if(st<lastScrollTop){
      $('#skills').fadeIn();
    } else{
      $('#skills').fadeOut();
    }
    lastScrollTop = st;
})
