var App = {
    // sliderHome: function(){
    //     jQuery('.banner_slider').slick({
    //       infinite: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       autoplay: true,
    //       autoplaySpeed: 5000,
    //       speed: 1500,
    //       dots: true,
    //       arrows: false,
    //       fade: false,
    //       focusOnSelect: true,
    //     });
    //     jQuery('.slider_partner').slick({
    //       infinite: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       variableWidth: true,
    //       centerMode: true,
    //       autoplay: false,
    //       autoplaySpeed: 5000,
    //       speed: 1500,
    //       dots: false,
    //       arrows: true,
    //       fade: false,
    //       focusOnSelect: true,
    //       prevArrow: '<div class="prev_slider"><img src="assets/images/left.png" class="img-fluid"/></div>',
    //       nextArrow: '<div class="next_slider"><img src="assets/images/right.png" class="img-fluid"/></div>',
    //     });
    // },
    sliderPackage : function(){
      jQuery('.slider_package').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1500,
        dots: true,
        arrows: true,
        fade: false,
        focusOnSelect: true,
        dots:false,
        prevArrow: '.package_control .left',
        nextArrow: '.package_control .right',
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    },
    mobileHandle:function(){
      jQuery('.menu-option').click(function(){
          jQuery('.overlay').css({'display':'block',});
          jQuery('.nav__mobile').css({'transform':'translateX(0%)'})
      })
      jQuery('.overlay').click(function(){
        jQuery('.overlay').css({'display':'none',});
        jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
      })
      jQuery('.nav-mobile__list li a').click(function(){
          jQuery('.overlay').css({'display':'none',});
          jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
      })
    },
};

jQuery(document).ready(function () {
    App.sliderPackage()
    App.mobileHandle()
    AOS.init({
      duration:1500,
      disable: window.innerWidth < 1200,
    });
    jQuery("a[href^='#']").click(function(e) {
      e.preventDefault();
      
      var position = $($(this).attr("href")).offset().top;

      $("body, html").animate({
          scrollTop: position
      },900 );
    });
});