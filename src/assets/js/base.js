(function($) {

  window.console || (window.console = {
    log: function() {}
  });

  window.site || (window.site = {});

  $.extend(site, {
    init_vars: function() {
      this.body = $('body');
      this.root = $('html');
    },
    onready: function() {
      this.init_vars();
      this.modal();
      this.toggle();
      this.unveil();
      this.svg4everybody();
      this.advancedSearch();
      this.toggleNavs();
      this.sliders();
      this.header();
      this.onResize();
    },

    onload: function() {
      this.hoverUnderline(this.body);
    }

  });

  $(function() {
    site.onready();
  });

  $(window).on('load', function() {
    window.site.onload();
  });

})(jQuery);
