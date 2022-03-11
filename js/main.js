$(document).ready(function () {

  $("#owl-demo").owlCarousel({

    navigation: true, // Show next and prev buttons

    // slideSpeed : 2500,
    // paginationSpeed : 2500,
    loop: true,
    items: 1,
    autoplay: true,
    nav: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false




  });

  // =============================================
  $(".animation").each(function () {
    var waypoint = new Waypoint({
      element: this,
      handler: function (direction) {
        var animation=$(this.element).attr('data-animation');
        $(this.element).css('opacity','1');
        $(this.element).addClass("animate__animated " +animation);
      },
      offset: '75%'
    })
  });


});

$(window).scroll(function () {
  var top = $(window).scrollTop();
  if (top >= 112) {
    $("header").addClass('secondary-dark-blue-bg');
  }
  else {
    if ($("header").hasClass('secondary-dark-blue-bg')) {
      $("header").removeClass('secondary-dark-blue-bg');
    }


  }
});

/*
 
var owl = $('.owl-carousel');
owl.owlCarousel({
  items:4,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true
});
 
*/
//============================================================================
// portfolio section
$("#portfolio-carousal").owlCarousel({

  nav: true, // Show next and prev buttons
  dots: false,
  slideSpeed: 300,
  loop: true,
  items: 4,

  autoplay: true,
  autoplayTimeout: 3000,
  autoplay: 250,
  autoplayHoverPause: true,
  itemsDesktop: false,

  responsive: {
    0: {
      items: 1,
      nav: true,
      center: true,
    },
    450: {
      items: 2,
      nav: true
    },
    880: {
      items: 3,
      nav: true,

    },
    1000: {
      items: 4,
      nav: true,

    }
  }


});

//============================================================================
// team section
$("#team-carousal").owlCarousel({

  nav: true, // Show next and prev buttons
  dots: false,
  slideSpeed: 300,
  loop: true,
  items: 4,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplay: 250,
  autoplayHoverPause: true,
  // itemsDesktop : false,
  // itemsDesktopSmall : false,
  // itemsTablet: false,
  // itemsMobile : false
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    500: {
      items: 2,
      nav: true
    },
    880: {
      items: 3,
      nav: true,

    },
    1000: {
      items: 4,
      nav: true,

    }
  }
});


// ====================================================================================



/***********Testimonial Section Start*******/

$(".testimonial-carousel").owlCarousel({

  navigation: true, // Show next and prev buttons

  slideSpeed: 300,
  paginationSpeed: 500,
  loop: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 3500,
  autoplay: 250,
  autoplayHoverPause: true,
  itemsDesktop: false,
  itemsDesktopSmall: false,
  itemsTablet: false,
  itemsMobile: false

});


/***********Testimonial Slider Section End*******/

// =======================Slick Nav====================

// $("#demo").slicknav({
//   label:'',
// });
$('#menu').slicknav({
  label: '',
});
// =========================================================
$('#main').stellar();


// ============================animation=============================






