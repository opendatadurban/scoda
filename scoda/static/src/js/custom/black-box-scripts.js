$(document).ready(function () {


  //filter
$("#filter .btn").each(function() {
  $(this).on("click", function(){
    var filtertag = 'data-story-card';
    if($(this).hasClass("data-story-card-productive")){
      filtertag = 'data-story-card-productive';
    }
    else if($(this).hasClass("data-story-card-inclusive")){
      filtertag = 'data-story-card-inclusive';
    }
    else if($(this).hasClass("data-story-card-well-governed")){
      filtertag = 'data-story-card-well-governed';
    }
    else if($(this).hasClass("data-story-card-sustainable")){
      filtertag = 'data-story-card-sustainable';
    }
    else if($(this).hasClass("data-story-card-built")){
      filtertag = 'data-story-card-built';
    }
    else if($(this).hasClass("data-story-card-city")){
      filtertag = 'data-story-card-city';
    }

    if($('.indicator_card.' + filtertag).is(":visible") ){
      $('.indicator_card.' + filtertag).hide();
    }
    else{
      $('.indicator_card.' + filtertag).show();
    }

    if($(this).hasClass('selected')){
      $(this).removeClass('selected');
    }
    else{
      $(this).addClass('selected');
    }

    
  });
});
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