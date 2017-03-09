$( function() {
	// header.html을 가져와서 붙인다.
	$.get(clientRoot + '/header.html', function(result) {
	  // 서버에서 로그인 사용자 정보를 가져온다.
	  $.getJSON(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
		$('#header').html(result);

		if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
			// 로그온 상태 출력 창을 감춘다.
			$('#logon-div').css('display', 'none');
			
			// 로그인 버튼의 클릭 이벤트 핸들러 등록하기
			$('#login-btn').click(function(event) {
				event.preventDefault()
				location.href = clientRoot + '/auth/main.html'
				location.href = '/java89-project-web2/auth/main.html'
			});
			return;
		}
		
		// 로그인 되었으면, 로그오프 상태 출력 창을 감춘다. 
		$('#logoff-div').css('display', 'none');
		$('#logon-div img').attr('src', clientRoot + '/upload/' + ajaxResult.data.photoPath);
		$('#logon-div span').text(ajaxResult.data.name);
		
		// 로그아웃 버튼의 클릭 이벤트 핸들러 등록하기
		$('#logout-btn').click(function(event) {
			event.preventDefault()
			$.getJSON(serverRoot + '/auth/logout.json', function(ajaxResult) {
				location.href = clientRoot + '/auth/main.html'
			});
		});
	  });
	});
	
	// sidebar.html을 가져와서 붙인다.
	$.get(clientRoot + '/sidebar.html', function(result) {
	  $('#sidebar').html(result);
	});
	
	// footer.html을 가져와서 붙인다.
	$.get(clientRoot + '/footer.html', function(result) {
	  $('#footer').html(result);
	});
});





