(function(jQuery, window) {
  window.site = window.site || {};

  var init = function (element) {
    var container = jQuery(element);

    var hoverElements = container.find('[data-hover-underline]');

    if (hoverElements.length) {
      hoverElements.each(function() {
        var block = jQuery(this);

        var element = block.find('.u-hover-underline__element');

        if (element.length) {
          // calculate whether the block is across multiple lines. We do this
          // by comparing the 'natural' width of the element with the width
          // when we disable text wrapping. If they are different, it's
          // multiple lines.
          var originalWidth = element.width();

          element.css({'white-space': 'nowrap'});
          var noWrapWidth = element.width();
          element.css({'white-space': ''});

          if (originalWidth != noWrapWidth) {
            block.addClass('u-hover-underline--multiline');
            element.css({'width': originalWidth + 'px'});
          }
        }
      });
    }
  };

  // export the method for use.
  window.site.hoverUnderline = init;
})(jQuery, window);
