// Animation on scroll
AOS.init({
    duration: 800,
    easing: "slide",
  });
  
  (function ($) {
    "use strict";
    $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: "scroll",
    });
  
    //   carousel
    var carousel = function () {
      $(".home-slider").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        nav: true,
        dots: false,
        autoplayHoverPause: false,
        items: 1,
        navText: [
          "<span class = 'ion-ios-arrow-back'></span>",
          "<span class = 'ion-ios-arrow-forward'></span>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });
      $(".carousel-testimony").owlCarousel({
        loop: true,
        autoplay: true,
        center: true,
        margin: 30,
        nav: false,
        stagePadding: 0,
        items: 1,
        navText: [
          "<span class = 'ion-ios-arrow-back'></span>",
          "<span class = 'ion-ios-arrow-forward'></span>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      });
    };
    carousel();
  
  
    var contentWayPoint = function () {
      var i = 0;
      $(".ftco-animate").waypoint(
        function (direction) {
          if (
            direction === "down" &&
            !$(this.element).hasClass("ftco-animated")
          ) {
            i++;
            $(this.element).addClass("item-animate");
            setTimeout(function () {
              $("body .ftco-animate.item-animate").each(function (k) {
                var el = $(this);
                setTimeout(
                  function () {
                    var effect = el.data("animate-effect");
                    if (effect === "fadeIn") {
                      el.addClass("fadeIn ftco-animated");
                    } else if (effect === "fadeInLeft") {
                      el.addClass("fadeInLeft ftco-animated");
                    } else if (effect === "fadeInRight") {
                      el.addClass("fadeInRight ftco-animated");
                    } else {
                      el.addClass("fadeInUp ftco-animated");
                    }
                    el.removeClass("item-animate");
                  },
                  k * 50,
                  "easeInOutExpo"
                );
              });
            }, 100);
          }
        },
        { offset: "95%" }
      );
    };
    contentWayPoint();
  
  })(jQuery);

  var particles = Particles.init({
    selector: '.background',
    color: ['#6A438D', '#404B69', '#DBEDF3'],
    connectParticles: true,
    maxParticles: 100,
    sizeVariations: 5
  });
  