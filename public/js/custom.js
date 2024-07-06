
(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').delay(500).slideUp('slow'); // set duration in brackets

    for (let index = 1; index < 5; index++) {
      let headingVideo = document.getElementById('headingVideo' + index);
      headingVideo.children[0].click()
    }
  });

  // NAVBAR
  $(".navbar").headroom();

  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

  $('.slick-slideshow').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    fade: true,
    dots: true,
  });

  $('.slick-testimonial').slick({
    arrows: false,
    dots: true,
  });

})(window.jQuery);
