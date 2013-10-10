(function($) {
  jQuery(".box-2 .link-list-block .block-title").click(function(){
    jQuery(this).parent().children("ul").stop().slideToggle();
  });
})(jQuery);
