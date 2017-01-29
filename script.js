$(document).ready(function(){
  $('#intro').hide().fadeIn(2000);
});

$.fn.exBounce = function(){
    var self = this;
    (function runEffect(){
        self.effect("bounce", { times:3 }, "slow", runEffect);
    })();
   return this;

};
$(document).ready(function(){
    $("#downArrow").exBounce();
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
