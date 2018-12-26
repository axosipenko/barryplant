(function($){

  window.site = window.site || {};

  site.modal = function() {
    $("body").on("click", "[data-modal]", function(e) {
      e.stopPropagation();
      e.preventDefault();
      var content = "[data-modal-id=" + $(this).data('modal') + "]";
      $('body').find("[data-modal=" + $(this).data('modal') + "]").toggleClass("is-active");
      $('body').find("[data-modal-id=" + $(this).data('modal') + "]").toggleClass("is-active");
      $('html, body').toggleClass('is-fixed');
    });

    $("body").on('click', "[data-modal-id].is-active", function(e) {
      e.stopPropagation();
      $(this).find("[data-modal=" + $(e.target).data('modal-id') + "]").trigger('click');
    });
  }

})(jQuery);