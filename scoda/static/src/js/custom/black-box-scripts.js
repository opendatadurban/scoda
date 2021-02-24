$(document).ready(function () {

 // Make the navigation fill or transparent depending on scroll position
   var navHeight = 30;
   $(window).scroll(function(){
     if ($(window).scrollTop() >= navHeight) {
       $('.navigation').addClass('fill');;
       $('.navigation').addClass('box-shadow');
     }
     else {
       $('.navigation').removeClass('fill');
       $('.navigation').removeClass('box-shadow');
     }
   });

// End of document ready function
}); 