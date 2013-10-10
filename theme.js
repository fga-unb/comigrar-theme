(function($) {
  jQuery(".box-2 .link-list-block .block-title").click(function(){
    jQuery(this).parent().children("ul").stop().slideToggle();
  });

  jQuery(document).ready(function(){
    /*http://localhost:3000/account/user_data*/
    var community = window.location.href.split("/")[3];

    var enter = "<a href='/account/login' class='thickbox' id='link_login'>"+
                "<i class='icon-menu-login'></i><strong>Entrar</strong></a>";

    var leave = "<a href='/profile/"+community+"/leave' "+
                "class='button icon-delete with-text leave-community' "+
                "style='position: relative;' title='Leave community'>"+
                "&nbsp;<span><span>Leave community</span></span></a>";

    var join = "<a href='/profile/"+community+"/join'"+
                "class='button icon-add with-text join-community'"+
                "style='position: relative;' title='Join community'>"+
                "&nbsp;<span><span>Join</span></span></a>";



    jQuery(".members-block .block-footer-content").append(enter);
  });
})(jQuery);
