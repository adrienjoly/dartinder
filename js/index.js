var honk = new Audio('honk.wav');
var slap = new Audio('slap.wav');

$(document).ready(function(){

  $(".buddy").on("swiperight",function(){
    $(this).addClass('rotate-left').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status like">Oh oui!</div>');
    if ( $(this).is(':last-child') ) {
      $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
    } else {
      $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    }
    $('.voiture')
      .css({ left: '-40%' })
      .animate({ left: '100%' }, 1000);
    honk.play();
  });

  $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Non merci!</div>');
    if ( $(this).is(':last-child') ) {
      $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
      //alert('Na-na!'); // end
    } else {
      $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    } 
    slap.play();
  });

});
