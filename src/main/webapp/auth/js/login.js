$(function() {
	$(document.body).on('click', '.login-form-toggle', function() {
	  $('.login-form-container').stop().addClass('login-form-active');
	});
	
	$(document.body).on('click', '.login-form-close', function() {
	  $('.login-form-container').stop().removeClass('login-form-active');
	});
	
	$(document.body).on('click', '.auth-login-form', function(event) {
		formClose(event);
	});
	
	function formClose(e) {
		console.log(e);
		if (e != 'undefined') {
			if (e.target.classList[0] != 'auth-login-form') return;
		}
		$('.login-form-container').addClass('animated fadeOutRight');
		setTimeout(function() {
		  $('.auth-login-form').css('display', 'none');
		}, 800);
	}
	
/*   로그인 이벤트   */
	function logIn(event, login) {
		console.log('logIn().start');
		console.log(event, login);
		if (event != 'undefined')
			event.preventDefault();
		var param = login; 
		if (login == undefined) {
			param = {
					email: $('#login-input-email').val(),
					password: $('#login-input-password').val()
				};
			console.log('login().param');
			console.log(param);
		}
		$.post(serverRoot + '/auth/login.json', param, function(ajaxResult) {
			if (ajaxResult.status == "success") {
				console.log('logIn().ajaxResult');
				console.log(ajaxResult.status);
				userInfo();
				eventControll();
				// 서비스 대상에 따른 페이지 분기점
				$('.login-form-container').removeClass("animated fadeInRight");
				$('.login-form-container').addClass("animated fadeOutRight");
		    	setTimeout(function() {
		    		$('.auth-login-form').css("display", "none");
		    		$('.login-form-container').removeClass("animated fadeOutRight");
		    	}, 600);
		    	$('.header-icon-power').css("display", "none");
		    	$('.header-icon-user').css("display", "inline-block");
		    	$('.header-icon-message').css("display", "inline-block");
		    	$('.user-menu').load(clientRoot + '/common/header.html .user-menu-call', function() {
					$('.profile-img').attr('src', clientRoot + '/mystuff/img/' + memberInfo.photoPath);
					$('.user-info h3').text(memberInfo.name);
		    	});

			}
		}, 'json');
	}
	$(document.body).on('keypress', '.login-button-go', function(event) {
		logIn(event, login);
		var login = 'undefined';
	});
	$(document.body).on('click', '.login-button-go', function(event) {
		logIn(event);
	});
/*   /로그인 이벤트   */
	
/*   회원가입 이벤트   */
	function signUp(event) {
		event.preventDefault();
		console.log(event);
		console.log('signUp ok?');
			var param = {
					name: $('#signup-form-username').val(),
					age: $('#signup-form-age').val(),
					email: $('#signup-form-email').val(),
					password: $('#signup-form-password').val()
			}
			login = {
					email: $('#signup-form-email').val(),
					password: $('#signup-form-password').val()
			}
			console.log('signUp() :' + param);
			console.log(param);
		$.post(serverRoot + '/mentee/add.json', param, function(ajaxResult) {
			console.log('회원가입 반환 데이터');
			console.log(ajaxResult);
			if (ajaxResult.status == "fail") {
				console.log('회원가입 실패 시 반환 데이터');
				console.log(ajaxResult.data);
				var comn = '이메일 주소가 중복되었어요!';
				warnModalStart(comn);
			} else {
				var result = window.sessionStorage.getItem('result');
				var resultValue = window.sessionStorage.getItem('resultValues');
				formClose(event);
				logIn(event, login); 
				if (result != null) {
					var comn = 'confirm';
					console.log(event);
					warnModalStart(comn);
				}
			}
		}, 'json');

	}
	$(document.body).on('click', '.modal-confirm-no-btn', function(event) {
		warnModalEnd();
	});
	$(document.body).on('click', '.modal-confirm-yes-btn', function(event) {
		warnModalEnd();
		var param = {
				'memberNo' : memberInfo.memberNo,
				'type' : 'mbti',
				'resultResult' : window.sessionStorage.getItem('result'),
				'eachResult' : window.sessionStorage.getItem('resultValues')
				}
		$.post(serverRoot + '/seeds/add.json', param, function(ajaxResult) {
			if (ajaxResult.status == 'success') {
				var comn = '저장 완료!';
				warnModalStart(comn);
				console.log('modal-confirm-yes-btn :', param);

			} else {
				var comn = '저장 실패<br>테스트를 다시...'; 
				warnModalStart(comn);
			}
			window.sessionStorage.removeItem('result');
			window.sessionStorage.removeItem('resultValues');
		});
	});
	$(document.body).on('keypress', '.login-button-next', function(event) {
		signUp(event);
	});
	$(document.body).on('click', '.login-button-next', function(event) {
		signUp(event);
	});
/*   /회원가입 이벤트   */
});