$(function() {
  
  var animating = false,
      submitPhase1 = 1100,
      submitPhase2 = 400,
      logoutPhase1 = 800,
      $login = $(".login"),
      $app = $(".app");
  
  function ripple(elem, e) {
    $(".ripple").remove();
    var elTop = elem.offset().top,
        elLeft = elem.offset().left,
        x = e.pageX - elLeft,
        y = e.pageY - elTop;
    var $ripple = $("<div class='ripple'></div>");
    $ripple.css({top: y, left: x});
    elem.append($ripple);
  };
  
  $(document).on("click", ".login_submit", function(e) {
	  
	  if ($('#save-email').is(':checked')) {
			setCookie('email', $('#email').val(), 30);
		} else {
			setCookie('email', '', 0);
		}
	  
		var param = {
				email: $('#email').val(),
				password: $('#password').val()
			};
	  
		$.post(serverRoot + '/auth/login.json', param, function(ajaxResult) {
			if (ajaxResult.status == "success") {
				location.href = "../mystuff/homepage.html";	
				return;
			}
			console.log(ajaxResult.data);
			alert(ajaxResult.data);
		}, 'json');
		
	  
    if (animating) return;
    animating = true;
    var that = this;
    ripple($(that), e);
    $(that).addClass("processing");
    setTimeout(function() {
      $(that).addClass("success");
      setTimeout(function() {
        $app.show();
        $app.css("top");
        $app.addClass("active");
      }, submitPhase2 - 70);
      setTimeout(function() {
        $login.hide();
        $login.addClass("inactive");
        animating = false;
        $(that).removeClass("success processing");
      }, submitPhase2);
    }, submitPhase1);
  });
  
  $(document).on("click", ".app_logout", function(e) {
    if (animating) return;
    $(".ripple").remove();
    animating = true;
    var that = this;
    $(that).addClass("clicked");
    setTimeout(function() {
      $app.removeClass("active");
      $login.show();
      $login.css("top");
      $login.removeClass("inactive");
    }, logoutPhase1 - 120);
    setTimeout(function() {
      $app.hide();
      animating = false;
      $(that).removeClass("clicked");
    }, logoutPhase1);
  });
  
  $(document).on("click", ".new-sign", function(e) {
	  $(".sign-in").addClass("animated fadeOutLeft");
	  $(".sign-up").removeClass("animated fadeOutRight");
	  $(".sign-up").addClass("animated fadeInRight");
	$('.sign-up').css("display", "block");
//	$('.sign-in').css("display", "none");
	  
  })
  
    $(document).on("click", ".close", function(e) {
    	$(".sign-up").addClass("animated fadeOutRight");
    	 $(".sign-in").removeClass("animated fadeOutLeft");
    	 $(".sign-in").addClass("animated fadeInLeft");
    	 $('.sign-in').css("display", "block");
	});
}); // click()

$(function(){
	  $('.passIn').keyup(function(){
	   $('.check').html('');
	  }); //passIn.keyup

	  $('.passCheck').keyup(function(){
	   if ($('.passIn').val() != $('.passCheck').val()){
		   $('.check').html('');
		   $('.check').removeClass("correct")
		   $('.check').addClass("incorrect")
		   $('.check').html("비밀번호가 일치하지않습니다.");
	   } else {
		   $('.check').html('');
		   $('.check').removeClass("incorrect")
		   $('.check').addClass("correct")
		   $('.check').html(" OK!! ");
	   }
	  }); //passCheck.keyup
	  
	 });









