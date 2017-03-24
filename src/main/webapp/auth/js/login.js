$(function() {
	$(document.body).on('click', '.login-form-toggle', function() {
	  $('.login-form-container').stop().addClass('login-form-active');
	});
	
	$(document.body).on('click', '.login-form-close', function() {
	  $('.login-form-container').stop().removeClass('login-form-active');
	});
	
	$(document.body).on('click', '.auth-login-form', function(e) {
		if (e.target.classList[0] != 'auth-login-form') return; 
		$('.login-form-container').addClass('animated fadeOutRight');
		setTimeout(function() {
		  $('.auth-login-form').css('display', 'none');
		}, 800);
	});
	
/*   로그인 이벤트   */
	function logIn(event) {
		event.preventDefault();
		var param = {
				email: $('#login-input-email').val(),
				password: $('#login-input-password').val()
			};
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
					$('.login-form-container').removeClass("animated fadeInRight");
					$('.login-form-container').addClass("animated fadeOutRight");
			    	setTimeout(function() {
			    		$('.auth-login-form').css("display", "none");
			    		$('.login-form-container').removeClass("animated fadeOutRight");
			    	}, 600);
			    	$('.header-icon-power').css("display", "none");
			    	$('.header-icon-user').css("display", "inline-block");
			    	$('.header-icon-message').css("display", "inline-block");
			    	$('.user-menu').load(clientRoot + '/common/header.html .user-menu-call');
			    	userInfo(); 
					$('.profile-img').attr('src', clientRoot + '/mystuff/img/' + memberInfo.photoPath);
					$('.user-info h3').text(memberInfo.name);
					return;
				} else {
					location.href = "expert/driver.html";
					return;
				}
			}
		}, 'json');
	}
	$(document.body).on('keypress', '.login-button-go', function(event) {
		logIn(event);
	});
	$(document.body).on('click', '.login-button-go', function(event) {
		logIn(event);
	});
/*   /로그인 이벤트   */
	
/*   회원가입 이벤트   */
	function signUp(event) {
		event.preventDefault();
		console.log('signUp ok?');
		var param = {
			name: $('#signup-form-username').val(),
			age: $('#signup-form-age').val(),
			email: $('#signup-form-email').val(),
			password: $('#signup-form-password').val()
		}
		$.post(serverRoot + '/mentee/add.json', param, function(ajaxResult) {
			if (ajaxResult.status == "fail") {
				console.log('회원가입 실패 시 반환 데이터');
				console.log(ajaxResult.data);
				return;
			}
			$('.login-form-container').stop().removeClass('login-form-active');
		}, 'json');
		
		var result = window.sessionStorage.getItem('result');
		var resultValue = window.sessionStorage.getItem('resultValues');
		if (result != null) {
			console.log("세선에서 테스트 정보 받았다~");
			var comn = '세션에서 테스트 정보 받았다.';
			warnModalStart(comn); 
		}
	}
	$(document.body).on('keypress', '.login-button-next', function(event) {
		signUp(event);
	});
	$(document.body).on('click', '.login-button-next', function(event) {
		signUp(event);
	});
/*   /회원가입 이벤트   */
	
});