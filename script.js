$(document).ready(function(){
  $('#intro').hide().fadeIn(2000);
});

$("#downArrow").mouseenter(function() {
  $( "#downArrow" ).toggle( "bounce", { times: 3 }, "slow" );
});

var lastScrollTop=0;
$(window).scroll(function(){
  var st = $(this).scrollTop();
  if(st>lastScrollTop){
    $('#skills').fadeIn();
  } else{
    $('#skills').fadeOut();
  }
  lastScrollTop = st;
});
