$(document).ready(function(){
    //toggle btn
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change')
    });
});



/*This is for the gallery section*/
$("#done").magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });
