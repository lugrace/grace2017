$(document).ready(function(){
  $('#intro').hide().fadeIn(2000);
   $("#downArrow").exBounce();

   $(window).scroll( function(){
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
        }); 
    });
});

$.fn.exBounce = function(){
    var self = this;
    (function runEffect(){
        self.effect("bounce", { times:0 }, 1000, runEffect);
    })();
   return this;

};


