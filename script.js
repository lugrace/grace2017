// var lastScrollTop=0;
// $(window).scroll(function(){
//   var st = $(this).scrollTop();
//     if(st<lastScrollTop){
//       $('#name').fadeIn();
//     } else{
//       $('#name').fadeOut();
//     }
//     lastScrollTop = st;
// })
$(document).ready(function(){
  $('#intro').hide().fadeIn(2000);
});

$(document).ready(main);
