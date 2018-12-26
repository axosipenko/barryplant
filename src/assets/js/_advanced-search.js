(function($){

  window.site = window.site || {};

  site.advancedSearch = function() {



      $('.c-form-control select').each(function(){

        var $selectElement = $(this),
          dataPlaceholder = $selectElement.attr('data-placeholder');

        $selectElement.selectize({
            placeholder : dataPlaceholder,
            persist: false,
            create: false,
            onInitialize : function(e){
                // remove init class (FOS workaround)
                var $wrapperElement = $('.c-advanced-search__form-controls'),
                matchingClass = 'c-advanced-search__form-controls--selectized';
                if($wrapperElement.hasClass(matchingClass)){
                    $wrapperElement.removeClass(matchingClass);
                }
            },
            // update container class refs
            onFocus : function(){
                var $obj = $(this);
                $parentContainer = $($obj[0].$control_input).parents('.c-form-control');
                $parentContainer.addClass('focus');
            },
            onBlur : function(){
                var $obj = $(this);
                $parentContainer = $($obj[0].$control_input).parents('.c-form-control');
                $parentContainer.removeClass('focus');
                // check for changed element
            },
            // extra blue trigger to catch sticky drop downs in iOS problem
            onDropdownOpen: function(){
                var $obj = $(this);
                $('.c-form-control select').selectize()[0].blur();

            },
            onChange: function(){
                var $obj = $(this);
                $parentContainer = $($obj[0].$control_input).parents('.c-form-control');
                $parentContainer.addClass('changed');
                // check for changed element
                selVal = $parentContainer.find('select').val();
                if(selVal){
                    $parentContainer.addClass('changed');
                }else{
                    $parentContainer.removeClass('changed');
                }
            },
        });


      });
      // disable input
       $(".selectize-input.has-options input").attr('readonly','readonly');

      /*$('.c-form-control select').each(function(){

      });*/

  }

})(jQuery);