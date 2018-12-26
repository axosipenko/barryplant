/**
 * Header Block handler
 *
 * TODO: rework the code so it is all based on teh Header class.
 */
(function(jQuery, window) {
  window.site = window.site || {};

  var Header = function(jQuery, window) {
    this.jQuery = jQuery;
    this.window = window;
    this.document = window.document;
    this.body = window.document.body;

    // store references to 'jQuery' versions of the elements too.
    this.$window = jQuery(window);
    this.$body = jQuery(this.body);
  };

  Header.prototype.initialise = function(stickyElement) {
    this.header = this.jQuery(stickyElement);

    // obtain references to all DOM elements we need.
    this.stickyElement = this.header.find('[data-sticky]');
    this.megaNav = this.header.find('.c-mega-nav');
    

    // set up all event handlers.
    this.events();
  };

  Header.prototype.touchmoveBodyEvent = function(event) {
    //In this case, the default behavior is scrolling the body, which
    //would result in an overflow.  Since we don't want that, we preventDefault.
    if(! event._allowScroll) {
      event.preventDefault();
    }
  };

  Header.prototype.touchmoveMegaNavEvent = function(event) {
    //if the content is actually scrollable, i.e. the content is long enough
    //that scrolling can occur
    if(this.megaNav[0].offsetHeight < this.megaNav[0].scrollHeight) {
      event._allowScroll = true;
    }
  };

  Header.prototype.touchstartMegaNavEvent = function (event) {
    var top = this.megaNav[0].scrollTop
      , totalScroll = this.megaNav[0].scrollHeight
      , currentScroll = top + this.megaNav[0].offsetHeight;

    //If we're at the top or the bottom of the containers
    //scroll, push up or down one pixel.
    //this prevents the scroll from "passing through" to
    //the body.
    if(top === 0) {
      this.megaNav[0].scrollTop = 1;
    } else if(currentScroll === totalScroll) {
      this.megaNav[0].scrollTop = top - 1;
    }
  };

  /**
   * Disable the 'touch move' event when the menu is open, to prevent scrolling
   * the page on mobile / tablet devices. But we allow the 'mega nav' within
   * the header to scroll if it needs to.
   */
  Header.prototype.disableTouchMove = function() {
    this.window.document.body.addEventListener('touchmove', this.touchmoveBodyEvent, { passive: false });
  };

  Header.prototype.enableTouchMove = function() {
    this.window.document.body.removeEventListener('touchmove', this.touchmoveBodyEvent);
  };

  /**
   * Event handler for the custom event 'toggle-content'.
   * This is fired whenever the mega nav element is toggled on / off, and we
   * use it to disable scrolling while the menu is open.
   *
   * For some reason, the jQuery 'on' and 'off' methods for disabling /
   * enabling touchmove don't work, so we directly assign.
   */
  Header.prototype.toggleContentEvent = function() {
    if (this.stickyElement.hasClass('is-active')) {
      this.$body.addClass('is-fixed');

      this.disableTouchMove();
    } else {
      this.$body.removeClass('is-fixed');

      this.enableTouchMove();
    }
  };

  /**
   * Attaches all event handlers needed for the Header block to operate.
   */
  Header.prototype.events = function() {
    this.stickyElement.on('toggle-content', this.toggleContentEvent.bind(this));

    this.megaNav[0].addEventListener('touchmove', this.touchmoveMegaNavEvent.bind(this));
    this.megaNav[0].addEventListener('touchstart', this.touchstartMegaNavEvent.bind(this));
  };

  var init = function () {
    var header = jQuery('[data-header]');
    var $window = jQuery(window);

    if (header.length) {
      header.each(function() {
        var block = jQuery(this);

        var headerObject = new Header(jQuery, window);

        headerObject.initialise(this);

        // get references to all elements we need.
        var stickyContainer = block.find('[data-sticky-container]');
        var sticky = block.find('[data-sticky]');
        var stickyFill = block.find('[data-sticky-fill]');
        var stickyClass = sticky.data('sticky');
        var stickyHideThreshold = parseInt(sticky.data('hide-sticky'));

        var scrollThreshold;
        var lastScroll;

        var setContainerHeight = function() {
          stickyContainer.css({ 'height': sticky.height() });
        };
        var toggleHeaderSticky = function() {
          if (window.pageYOffset > 1) {
            sticky.addClass(stickyClass);
          } else {
            sticky.removeClass(stickyClass);
          }
        };
        var setFillHeight = function() {
          var fillHeight = window.innerHeight;
          fillHeight -= stickyContainer.height();

          stickyFill.css({ 'height': fillHeight });
        };
        var calculateScrollHide = function() {
          // ignore all scrolling when the menu is active.
          if (sticky.hasClass('is-active')) {
            return;
          }

          var currentScroll = window.pageYOffset;

          if (currentScroll > lastScroll) {
            // scrolling down...
            if (lastScroll >= scrollThreshold) {
              // continuing to scroll down. are we above the threshold
              if ((currentScroll - scrollThreshold) > stickyHideThreshold) {
                sticky.addClass('is-hidden');
              }
            } else {
              // started going down when we were going up. reset.
              scrollThreshold = currentScroll;
            }
          } else {
            // scrolling up...
            if (lastScroll <= scrollThreshold) {
              // continuing to scroll up. are we above the threshold
              if ((scrollThreshold - currentScroll) > stickyHideThreshold) {
                sticky.removeClass('is-hidden');
              }
            } else {
              // started going down when we were going up. reset.
              scrollThreshold = currentScroll;
            }
          }

          lastScroll = currentScroll;
        };


        // set the height of the sticky container.
        $window.on('load', function() {
          setContainerHeight();
          toggleHeaderSticky();
        });
        $window.on('resize', window.site.debounce(setContainerHeight, 100));

        // toggle when the header becomes sticky.
        $window.on('scroll', window.site.debounce(toggleHeaderSticky, 10));

        // set the fill elements' height. we do this on scroll too, as some
        // devices change the viewport height on scroll (minimise the address
        // bar, for example).
        setFillHeight();
        $window.on('resize', window.site.debounce(setFillHeight, 100));
        $window.on('scroll', window.site.debounce(setFillHeight, 500));

        // initialise the 'scroll hide' logic.
        scrollThreshold = window.pageYOffset;
        lastScroll = scrollThreshold;
        $window.on('scroll', window.site.throttle(calculateScrollHide, 100));

      });
    }
  };

  // export the method for use.
  window.site.header = init;
})(jQuery, window);
