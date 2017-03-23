$(function() {
    
	if ($('input[name=user-type]:checked').val() =="mentee") {
		$('.sareaDiv').css("display", "none");
	}
	
	$(document).on("click", "#user-type1", function(e) {
		$('.sareaDiv').css("display", "none");
	})
	$(document).on("click", "#user-type2", function(e) {
		$('.sareaDiv').css("display", "block");
	})
	
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
  
  $(document.body).on("click", ".login_submit", function(e) {
		var param = {
				email: $('#email').val(),
				password: $('#password').val()
			};
	  
		/*   로그인 버튼 이벤트   */ 
		$.post(serverRoot + '/auth/login.json', param, function(ajaxResult) {
			if (ajaxResult.status == "success") {
				loginEvent = true;
	    		$('.warn-modal-logInfo').css('display', 'none');
	    		$('.warn-modal-testInfo').css('display', 'block');
				console.log("login event 제어변수 상태");
				console.log(loginEvent);
				console.log("로그인 유저 정보");
				console.log(ajaxResult.data);
				memberInfo = ajaxResult.data;
				eventControll();
				if (ajaxResult.data.specialArea == null) {
					$('.demo').removeClass("animated fadeInRight");
			    	$('.demo').addClass("animated fadeOutRight");
			    	setTimeout(function() {
			    		$('.auth-login-form').css("display", "none");
			    		$('.demo').removeClass("animated fadeOutRight");
			    	}, 600);
			    	$('.header-icon-power').css("display", "none");
			    	$('.header-icon-user').css("display", "inline-block");
			    	$('.header-icon-message').css("display", "inline-block");
					return;
				} else {
					location.href = "expert/driver.html";
					return;
				}
			}
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
  
  
  // 회원가입 클릭시 
  
  $(document).on("click", ".signUp_submit", function(e) {
	  if ($('.signUp_input.passIn').val() != $('.signUp_input.passCheck').val()) {
		  alert("패스워드가 일치하지 않습니다.");
	  }
	  else{
		  if($('input[name=user-type]:checked').val() =="mentee") {
		  
		  var param = {
				  name: $('.signUp_input.name').val(),
				  age: $('.signUp_input.age').val(),
				  email: $('.signUp_input.email').val(),
				  password: $('.signUp_input.passIn').val()
		  };
		  
		  $.post(serverRoot + '/mentee/add.json', param, function(ajaxResult) {
			  if (ajaxResult.status == "success") {
				  location.href = "/bitcamp-project-s/auth/login.html";	
				  return;
			  }
			  console.log(ajaxResult.data);
			  alert(ajaxResult.data);
		  }, 'json');
	   } // if 멘티로 체크되어있다면 
		  else {
		   
		   var param = {
					  name: $('.signUp_input.name').val(),
					  age: $('.signUp_input.age').val(),
					  specialArea: $('.signUp_input.sarea').val(),
					  email: $('.signUp_input.email').val(),
					  password: $('.signUp_input.passIn').val()
			  };
			  
			  $.post(serverRoot + '/mento/add.json', param, function(ajaxResult) {
				  if (ajaxResult.status == "success") {
					  location.href = "/bitcamp-project-s/auth/login.html";	
					  return;
				  }
				  console.log(ajaxResult.data);
				  alert(ajaxResult.data);
			  }, 'json');
		   
		   
		   
	   } // 멘토로 체크 되어있다면~ 
	  }  
		
	  
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









