(function($){

  window.site = window.site || {};

  // IE fixes for SVGs
  site.svg4everybody = function() {
    svg4everybody();
  },

  // Lazy load images
  site.unveil = function() {
    $('[data-src]').unveil();
  },

  // Toggle active states
  site.toggle = function() {
    var $body = $('body');
    var $html = $('html');
    $body.on("click", "[data-toggle]", function() {
      var toggleTarget = $(this).data('toggle');

      var toggles = $body.find('[data-toggle-content=' + toggleTarget + ']');
      toggles.toggleClass('is-active');
      toggles.trigger('toggle-content');

      $body.find('[data-toggle=' + toggleTarget + ']').toggleClass('is-active');
    });
  }

})(jQuery);
