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


  var prevRef;

  var cardItems = [1, 2, 3, 4, 5];
  $(document).ready(function () {
    $("#sidebar-filter").css({
      left: "-298px",
    });

    $("#filter-body").css({
      display: "none",
    });

    $("#stack-right-icon").css({
      display: "none",
    });

    $(".filter").css({
      display: "none",
    });
    $("#stack-icon").css({
      display: "none",
    });

    $("#filter-head").css({
      "margin-left": "278px",
      width: "43px",
      "border-radius": "5px",
    });

    $(".drop-down").css("display", "none");
    $("#stack-right-icon").css("display", "inline-block");
    var viewThis = true;

    // $(".nav-link").on("click", function (e) {
    //   console.log("clicked now ");
    //   console.log(e.target.id);
    //   if (e.target.id === "firstButton") {
    //     $("#optionOne").css("display", "none");
    //     $("#optionTwo").css("display", "block");
    //     viewThis = true;
    //     $(`#${e.target.id}`).addClass("active");
    //     $(`#${e.target.id}`).removeClass("inactive");
    //     $("#secondButton").removeClass("active");
    //     $("#secondButton").addClass("inactive");
    //   } else {
    //     viewThis = false;

    //     $("#optionOne").css("display", "block");
    //     $("#optionTwo").css("display", "none");

    //     $(`#${e.target.id}`).addClass("active");
    //     $(`#${e.target.id}`).removeClass("inactive");
    //     $("#firstButton").removeClass("active");
    //     $("#firstButton").addClass("inactive");
    //   }
    // });

    // $(".select2").select2();
    // $(".monitor").select2();
    var reduceHeight = true;
    $(".toggle-button button").click(function () {
      $(".card-list").toggle("slow", "linear");
    });
    //dropdowns
    // $("#state-capture").click(function () {
    //   $("#state").toggle("slow", "linear");
    // });
    // // $("#election-members").click(function () {
    // //   $("#elections").toggle("slow", "linear");
    // // });

    // $("#woman-in-media").click(function () {
    //   $("#woman").toggle("slow", "linear");
    // });
    // $("#child-articles").click(function () {
    //   $("#child").toggle("slow", "linear");
    // });

    $(".drop-down").click(function () {
      // if (!reduceHeight) {
      $("#sidebar-filter").css({
        left: "-298px",
      });

      $("#filter-body").css({
        display: "none",
      });

      $("#stack-right-icon").css({
        display: "none",
      });

      $(".filter").css({
        display: "none",
      });
      $("#stack-icon").css({
        display: "none",
      });

      $("#filter-head").css({
        "margin-left": "278px",
        width: "43px",
        "border-radius": "5px",
      });

      $(".drop-down").css("display", "none");
      $("#stack-right-icon").css("display", "inline-block");

      // $(".filter ").toggle("slow", "linear");
      // $(".drop-down ").toggle("slow", "linear");
      // $("#filter-body ").toggle("slow", "linear");
      // $("#filter-head").animate({ width: "320px" }, 1000);
      // $(".filter").animate({ color: "#fff" }, 1000);

      // reduceHeight = !reduceHeight;
      // }
    });
    $("#stack-right-icon").click(function () {
      $("#sidebar-filter").css({
        left: "0px",
      });

      $(".filter").css({
        display: "inline-block",
      });
      $("#stack-icon").css({
        display: "inline-block",
      });

      $("#filter-body").css({
        display: "block",
      });

      $("#filter-head").css({
        "margin-left": "0px",
        width: "320px",
        "border-radius": "0px 5px 5px 0px",
      });

      $(".drop-down").css("display", "inline-block");
      $("#stack-right-icon").css("display", "none");
      $(".drop-down").css("display", "inline-block");
    });
    //   for (let i = 0; i < 6; i++) {
    //     $(`.status-arrow-${i}`).on("click", function () {
    //       $(`#card-list-${i}`).slideToggle("slow", function () {
    //         $(this).is(":visible")
    //           ? $(`.status-arrow-${i}`).css("transform", "rotate(0deg)")
    //           : $(`.status-arrow-${i}`).css("transform", "rotate(-90deg)");
    //       });
    //     });
    //   }

    $("#article-source-button").click(function () {
      $("#step1").addClass("hideMe");
      $("#step2").removeClass("hideMe");
    });
    $("#article-name-button").click(function () {
      $("#step2").addClass("hideMe");
      $("#step3").removeClass("hideMe");
    });
    $("#article-monitor-button").click(function () {
      // Whatever your final validation and form submission requires
      $("#step3").addClass("hideMe");
      $("#step4").removeClass("hideMe");
    }); // $("#modal-sample-2").modalSteps({
    $("#monitor-notes-button").click(function () {
      // Whatever your final validation and form submission requires
      $("#sampleModal").modal("hide");
    }); // $("#modal-sample-2").modalSteps({

    // $("#sampleModal").modal("hide");
    //   btnCancelHtml: '<span class="glyphicon glyphicon-remove"></span> Quit',
    //   btnPreviousHtml:
    //     '<span class="glyphicon glyphicon-chevron-left"></span> Back',
    //   btnNextHtml: '<span class="glyphicon glyphicon-chevron-right"></span> Go',
    //   btnLastStepHtml: '<span class="glyphicon glyphicon-fire"></span> Finish',
    // });
    // $("#modal-sample-3").modalSteps({
    //   btnCancelHtml: '<span class="glyphicon glyphicon-remove"></span> Quit',
    //   btnPreviousHtml:
    //     '<span class="glyphicon glyphicon-chevron-left"></span> Back',
    //   btnNextHtml: '<span class="glyphicon glyphicon-chevron-right"></span> Go',
    //   btnLastStepHtml: '<span class="glyphicon glyphicon-fire"></span> Finish',
    // });
    // $("#modal-sample-4").modalSteps({
    //   callbacks: {
    //     "2": function () {
    //       alert("Tanam!");
    //     },
    //   },
    // });
    // $("#modal-sample-5").modalSteps({
    //   callbacks: {
    //     "*": function () {
    //       alert("I will be with you until the end");
    //     },
    //   },
    // });
    // $("#modal-sample-6").modalSteps({
    //   completeCallback: function () {
    //     alert("LEGENDARY");
    //   },
    // });

    $("#article-body-content").on("click", function () {
      var articleContent = $("#article-body-content").val();
      if (articleContent) {
        $("#article-body-content").css("background", "none");
      }
    });

    $("#article-source").on("change", function () {
      if ($("#article-source").val() != 0) {
        $("#article-source-button").removeAttr("disabled");
        $("#article-source-button").css("opacity", "1");
        console.log("here is the file name ", $("#article-source").val());
        $("#article-file-name").html("");
        $("#article-file-name").html($("#article-source").val());
      }
    });
    $("#article-name-content").on("change keyup page", function () {
      if ($("#article-name-content").val() != 0) {
        $("#article-name-button").removeAttr("disabled");
        $("#article-name-button").css("opacity", "1");
      }
    });
    $("#article-monitor-select select").on("change ", function () {
      $("#article-monitor-button").removeAttr("disabled");
      $("#article-monitor-button").css("opacity", "1");
    });

    $("#monitor-notes textarea").on("change keyup page", function () {
      if ($("#monitor-notestextarea").val() != 0) {
        $("#monitor-notes-button").removeAttr("disabled");
        $("#monitor-notes-button").css("opacity", "1");
      }
    });
    if ($("#article-body-content").text() != 0) {
      $("#article-body-content").css("background", "none");
      $("#open-modal").css("display", "none");
      $("#edit-article").css("display", "block");
      $("#article-status .yes").css("display", "block");
      $("#article-status .no").css("display", "none");
    } else {
      $("#article-body-content").css(" background", "initial");
      $("#open-modal").css("display", "block");
      $("#edit-article").css("display", "none");
      $("#article-status .yes").css("display", "none");
      $("#article-status .no").css("display", "block");
    }

    $("#publish-date").each(function () {
      if (!$(this).text().trim().length) {
        $(this).addClass("not-populated");
        $(this).text("__/__/__");
        console.log("not-populated");
      } else {
        $(this).addClass("populated");
        console.log("something here");
      }
    });
    $(".a-title p").each(function () {
      if (!$(this).text().trim().length) {
        $(this).addClass("not-populated");
        $(this).text("Ramaphosa demands return of 'stolen' SoE funds");
        console.log("not-populated");
      } else {
        $(this).addClass("populated");
        console.log("something here");
      }
    });

    $(".article-content .content-val > p").each(function () {
      if (!$(this).text().trim().length) {
        $(this).addClass("not-populated");
        $(this).text("Not Assigned");
        console.log("not-populated");
      } else {
        $(this).addClass("populated");
        console.log("something here");
      }
    });

    $(".paginationjs-pages ul li").each(function (index) {
      console.log("this tried ", $(this)[0].className.split(" "));

      if (
        $(this)[0].className.split(" ")[1] !== "paginationjs-next" ||
        $(this)[0].className.split(" ")[1] !== "paginationjs-prev"
      ) {
        // $(this).css("display","none")

        $(".paginationjs-prev a").html("&#8249;");
        $(".paginationjs-next a").html("&#8250;");

        $(this).click(function () {
          $(".paginationjs-prev a").html("&#8249;");
          $(".paginationjs-next a").html("&#8250;");
        });
      }
    });
  });
});
