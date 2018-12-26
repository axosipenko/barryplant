(function ($) {

  window.site = window.site || {};

  site.windowSize = function () {
    windowHeight = window.innerHeight || $(window).height();
    windowWidth = window.innerWidth || $(window).width();
  }

  site.onResize = function () {
    site.windowSize();

    site.agentFeaturesResize = function () {
      site.windowSize();

      if (windowWidth <= 992 && windowWidth >= 768) {
        $('.c-slider--agent-features').append($('.c-agent-features__information'));
      } else {
        $('.c-agent-features__about').append($('.c-agent-features__information'))
      }
    }

    window.onresize = function () {
      site.agentFeaturesResize();
    }
  };

})(jQuery);
