(function($) {
  // Toggle left menu
  $(".box-2 .link-list-block .block-title").click(function(){
    $(this).parent().children("ul").stop().slideToggle();
  });

  // Add links to community members block
  if(jQuery(".members-block .block-footer-content").length == 1) {
    (function($){
      $(".profile-info-options").bind("DOMSubtreeModified",function(){
        var link_enter = $(".profile-info-options a.icon-add");
        var link_leave = $(".profile-info-options a.leave-community");
        var link_join  = $(".profile-info-options a.join-community");

        $(".members-block .block-footer-content").append(link_enter);
        $(".members-block .block-footer-content").append(link_join);
        $(".members-block .block-footer-content").append(link_leave);
      });
    })(jQuery);
  }
})(jQuery);
