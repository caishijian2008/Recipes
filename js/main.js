$(document).ready(function() {
  
  /* 首页循环播放的动画 */
  /*function ztlistMoveleft() {
    $("#ztlist_item_list_ul").animate({"marginLeft": "0px"}, 500, function() {
      $("#ztlist_item_list_li").last().prependTo($("#ztlist_item_list_ul"));
      $("#ztlist_item_list_ul").css('margin-left', '-205px');
      
    });
  }*/
  
  function ztlistMoveleft() {
    $("#ztlist_item_list_ul").animate({"marginLeft": "0px"}, 500, function() {
      $("#ztlist_item_list_li").last().prependTo($("#ztlist_item_list_ul"));
      $("#ztlist_item_list_ul").css('margin-left', '-205px');
      
    });
  }

  function ztlistMoveright() {
    $("#ztlist_item_list_ul").animate({"marginLeft": "-410px"}, 500, function() {
      $("#ztlist_item_list_li").first().appendTo($("#ztlist_item_list_ul"));
      $("#ztlist_item_list_ul").css('margin-left', '-205px');
    });
  }

  var index_cd_move = "";

  $(function() {
    if ($("#ztlist_item_list_li").length > 0) {
      index_cd_move = setInterval(function(){ztlistMoveright();},5000);
      $("#ztlist_item_list_ul").mouseenter(function() {
        clearInterval(index_cd_move);
      });
      $("#ztlist_item_list_ul").mouseleave(function() {
        index_cd_move = setInterval(function(){ztlistMoveright();},5000);
      });
    }
  });

  /* scroll to top JS */
  $(".fixed-btn").hide();
  $(function() {
	  $(window).scroll(function(e) {
	    if($(window).scrollTop() >= 100) {
	      $(".fixed-btn").fadeIn();
	    } else {
	      $(".fixed-btn").fadeOut();
	    }
	  });
  });
  $(".fixed-btn").click(function(e) {
    $("html, body").animate({scrollTop: 0}, 300); 
    return false; 
  }); 

});
