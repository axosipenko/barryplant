(function($){


    window.site = window.site || {};

    site.toggleNav = function(){
        $('.c-toggle-nav').toggleClass('is-active');
    };

    site.triggerFilter = function(e){
        e.preventDefault();

        $('.c-toggle-nav').removeClass('is-active');
        $('.c-toggle-nav').data('curentNav',$(this).text());
        $('.c-toggle-nav__label .title').html($('.c-toggle-nav').data('curentNav'));
        $('.c-toggle-nav').find('.c-toggle-nav__item').removeClass('current');
        $(this).parent().addClass('current');
    };

  site.toggleNavs = function() {

      // remove toggle if click outside
      $(document).mouseup(function(e)
      {
          var container = $(".c-toggle-nav");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
              $('.c-toggle-nav').removeClass('is-active');
          }
      });
      var $nav = $('.c-toggle-nav');

      $('.c-toggle-nav__label .title').html($nav.find('.c-toggle-nav__item:first-child').text());

      // $nav.toggleClass('.Navbar__ToggleShow');

      $('.c-toggle-nav__trigger').on('click', site.toggleNav);
      $('.c-toggle-nav__item a').on('click', site.triggerFilter);
      $('.c-toggle-nav__label').on('click', site.toggleNav);

  };


})(jQuery);

