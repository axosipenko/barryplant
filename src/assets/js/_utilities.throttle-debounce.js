
(function(window) {
  window.site = window.site || {};

  // export the method for use.
  window.site.throttle = function(func, limit) {
    var throttle = false;

    return function() {
      var args = arguments;
      var context = this;

      if (! throttle) {
        func.apply(context, args);

        // prevent future executions until the time limit.
        throttle = true;
        window.setTimeout(function() {
          throttle = false;
        }, limit);
      }
    }
  };

  window.site.debounce = function(func, delay) {
    var inDebounce = false;

    return function() {
      var context = this;
      var args = arguments;

      if (inDebounce) {
        window.clearTimeout(inDebounce);
        inDebounce = false;
      }

      inDebounce = window.setTimeout(function() {
        func.apply(context, args);
      }, delay);
    }
  };
})(window);

