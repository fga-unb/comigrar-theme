(function($) {
  jQuery(".box-2 .block-title").click(function(){
    jQuery(this).parent().children("ul").stop().slideToggle();
  });
})(jQuery);
