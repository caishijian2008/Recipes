/*$(document).ready(function() {*/
(function($) {

  /* 首页循环播放的动画 */
  /*function ztlistMoveleft() { 
    $("#ztlist_item_list_ul").animate({"marginLeft": "0"}, 500, function() {
      $("#ztlist_item_list_li").last().prependTo($("#ztlist_item_list_ul"));
      $("#ztlist_item_list_ul").css('margin-left', '-205px');
      
    });
  }
  */
  function ztlistMoveleft() { // 出错！！
    $("#ztlist_item_list_ul").animate({"marginLeft": "205px"}, 500, function() {
      $("#ztlist_item_list_li").last().prependTo($("#ztlist_item_list_ul"));
      $("#ztlist_item_list_ul").css('margin-left', '205px');
      
    });
  }

  function ztlistMoveright() {
    $("#ztlist_item_list_ul").animate({"marginLeft": "-205px"}, 600, function() {
      $("#ztlist_item_list_li").first().appendTo($("#ztlist_item_list_ul"));
      $("#ztlist_item_list_ul").css('margin-left', '0');
    });
  }

  var index_cd_move = "";

  $(function() {
    if ($("#ztlist_item_list_li").length > 0) {
      index_cd_move = setInterval(function(){ztlistMoveright();},3000);
      $("#ztlist_item_list_ul").mouseenter(function() {
        clearInterval(index_cd_move);
      });
      $("#ztlist_item_list_ul").mouseleave(function() {
        index_cd_move = setInterval(function(){ztlistMoveright();},3000);
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

  /* 用户注册 */
  /*$(function() {
    /* 自定义的验证方法 
    jQuery.validator.addMethod("regexp",function(value, element) {
      return this.optional(element) || /^[A-Za-z0-9]+$/.test(value);
    },"Just only English and digits!");

    $('.signupform').validate({
      submitHandler: function(form) {
        alert("注册提交事件！");
        $(form).ajaxSubmit();
      },
      rules: {
        username: {
          required: true,
          rangelength: [6,20],
          regexp: true
        },
        email: "required",
        password: {
          required: true,
          minlength: 6
        },
        confirm_password: {
          required: true,
          minlength: 6,
          equalTo: "#password"
        },
        agree: "required"
      },
      messages: {
        username: {
          required: "请输入用户名！",
          rangelength: "只能在6-20个字符之间",
          regexp: "只能是英文和数字的组合"
        },
        email: "请输入一个正确的邮箱！",
        password: {
          required: "请输入密码！",
          minlength: "密码长度不能小于6位！"
        },
        confirm_password: {
          required: "再次输入密码！",
          minlength: "密码长度不能小于6位！",
          equalTo: "两次密码输入不一致"
        },
        agree: "请同意我们的协议！"
      }
    });
    
  });*/

})(jQuery);
