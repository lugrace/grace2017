$(document).ready(function(){
  $('#intro').hide().fadeIn(2000);
});

$(document).ready(function(){
  $("#downArrow").mouseenter(function() {
    $(this).effect( "bounce", { times: 3 }, "slow" );
  });
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

var lastScrollTop=0;
$(window).scroll(function(){
  var st = $(this).scrollTop();
  if(st<lastScrollTop){
    $('#portfolio').fadeIn();
  } else{
    $('#portfolio').fadeOut();
  }
  lastScrollTop = st;
});
