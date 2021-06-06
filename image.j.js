$(document).ready(function(){
  $(window).scroll(function(){

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});

