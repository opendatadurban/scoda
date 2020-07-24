$(document).ready(function () {
    var navHeight = '50';
    $(window).scroll(
        function(){
         if ($(window).scrollTop() >= navHeight) {
                 $('.navigation-scoda').addClass('fill');
             }
        else {
                 $('.navigation-scoda').removeClass('fill');
             }
        }
      );

}); 