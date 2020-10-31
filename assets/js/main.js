$(document).ready(function () {
  // Navbar move //
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 0) {
      $(".header-bottom").css({
        "background-color": "#693ff5",
        top: "0",
      });
    } else {
      $(".header-bottom").css({
        "background-color": "transparent",
        top: "54px",
      });
    }
  });
  // ----- //

  // Owl carousel 2//
  if ($(".slider .owl-carousel").length) {
    $(".slider .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 6,
        },
      },
    });
    $(".slider .owl-carousel .owl-prev").html(
      '<i class="flaticon-left-arrow"></i>'
    );
    $(".slider .owl-carousel .owl-next").html(
      '<i class="flaticon-right-arrow"></i>'
    );
  }

  if( $(".real-estate-slider .owl-carousel").length){
  $(".real-estate-slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
  });
  $(".real-estate-slider .owl-carousel .owl-prev").html(
    '<i class="flaticon-left-arrow"></i>'
  );
  $(".real-estate-slider .owl-carousel .owl-next").html(
    '<i class="flaticon-right-arrow"></i>'
  );
  var i = 1;
  $(".real-estate-slider .owl-carousel .owl-dot").each(function (e) {
    $(this).html("<span>" + i + "</span>");
    i++;
  });
}

$('.customers-slider .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
  // ----- //

  // jQuery countdown //
  if ($(".time").length) {
    $(function () {
      $("[data-countdown]").each(function () {
        var $this = $(this),
          finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
          $this.html(event.strftime("%Dd: %Hh: %Mm: %Ss"));
        });
      });
    });
  }
  // ----- //
  
});
  
