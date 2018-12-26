/*
 * Initialize sliders
 *
 * */
(function ($) {

  window.site = window.site || {};

  site.sliders = function () {

    $('.c-slider').each(function () {
      var self = this;
      $(self).find('.c-slider__slides').slick({
        variableWidth: false,
        slidesToShow: 1,
        centerMode: false,
        rows: 0,
        dots: true,
        appendDots: $('.c-slider__dots'),
        appendArrows: $(self).find('.c-slider__footer'),
        nextArrow: $(self).find('.c-slider__next'),
        prevArrow: $(self).find('.c-slider__prev'),
        mobileFirst: true,
        responsive: [{
            breakpoint: 580,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          }
        ]
      });
    });

    $('.c-slider--agents').each(function () {
      var self = this;
      $(self).find('.c-slider__slides').slick({
        variableWidth: false,
        slidesToShow: 1,
        centerMode: false,
        rows: 0,
        infinite: false,
        dots: true,
        appendDots: $('.c-slider__dots'),
        appendArrows: $(self).find('.c-slider__footer'),
        nextArrow: $(self).find('.c-slider__next'),
        prevArrow: $(self).find('.c-slider__prev'),
        mobileFirst: true,
        responsive: [{
          breakpoint: 350,
          settings: {
            slidesToShow: 2
          }
          },{
            breakpoint: 580,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6
            }
          }
        ]
      });
    });

    $('.c-slider--agent-features').each(function () {
      var self = this;
      $(self).find('.c-slider__slides').slick({
        variableWidth: false,
        slidesToShow: 1,
        centerMode: false,
        rows: 0,
        infinite: false,
        dots: true,
        appendDots: $('.c-slider__dots'),
        appendArrows: $(self).find('.c-slider__footer'),
        nextArrow: $(self).find('.c-slider__next'),
        prevArrow: $(self).find('.c-slider__prev'),
        mobileFirst: true
      });
    });

    $('.c-slider--case-features').each(function () {
      var self = this;
      $(self).find('.c-slider__slides').slick({
        variableWidth: false,
        slidesToShow: 1,
        centerMode: false,
        rows: 0,
        infinite: false,
        dots: true,
        appendDots: $('.c-slider__dots'),
        appendArrows: $(self).find('.c-slider__footer'),
        nextArrow: $(self).find('.c-slider__next'),
        prevArrow: $(self).find('.c-slider__prev'),
        mobileFirst: true
      });
    });

  }

})(jQuery);
