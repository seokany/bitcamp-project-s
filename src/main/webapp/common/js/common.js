$( function() {
	
	/* window 사이즈 구하기 */
	$(window).ready(function() {
		var windowWidth = $(window).width();
		var windowHeigth = $(window).height();
		
		$(window).resize(function() {
			windowWidth = $(window).width();
			windowHeigth = $(window).height();
			
//			$(".main-frame").css("height", windowHeigth + "px");
		});
			
//		$(".main-frame").css("height", windowHeigth + "px");
	});
	
	/* header 호출 스크립트 */
	$.get(clientRoot +"/common/header.html", function(result) {
		
		  $.getJSON(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
				$('#header').html(result);

				if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
					// 로그온 상태 출력 창을 감춘다.
					$('.sign-in').css('display', 'none');
					$('.sign-default').css('display', 'none');
					
					// 로그인 버튼의 클릭 이벤트 핸들러 등록하기
					$('.sign-out').click(function(event) {
						event.preventDefault()
						location.href = clientRoot + '/auth/login.html'
						location.href = '/bitcamp-project-s/auth/login.html'
					});
					return;
				}
				console.log("로그인되었네");
				console.log(ajaxResult.data.name);
				// 로그인 되었으면
				
				var isopen_usermenu = false;
				  /**
				   * Open and close usermenu event
				   */
				  $(".user-menu-toggle").on("click", function () {
				    if(!isopen_usermenu) {
						console.log("헤더클릭요");
				      // Show menu
				      $(".user-menu").css("display", "block");

				      isopen_usermenu = true;
				    } else {
						console.log("헤더클릭안요");
				      // Close menu
						$(".user-menu").css("display", "none");

				      isopen_usermenu = false;
				    }
				  });
				  
				$('.sign-out').css('display', 'none');
				$('#logon-div img').attr('src', clientRoot + '/upload/' + ajaxResult.data.photoPath);
				$('.user-info h3').text(ajaxResult.data.name);
				
				// 로그아웃 버튼의 클릭 이벤트 핸들러 등록하기
				$('#logout-btn').click(function(event) {
					event.preventDefault()
					$.getJSON(serverRoot + '/auth/logout.json', function(ajaxResult) {
						location.href = clientRoot + '/auth/main.html'
					});
				});
			  });
	});
	
//	/* footer 호출 스크립트 */
//	$.get("common/footer.html", function(result) {
//		$("#footer").html(result); 
//	});
//	
	var wheelState;
	var wheelType;
	
	$("html, body").on("mousewheel DOMMouseScroll", function(event) {
		wheelState = true; 
		wheelType = event.originalEvent.wheelDelta;
	});
		
	function hasScrolled() {
		if (wheelType < 0) {
			$(".frame-left").addClass("old-left");
			$(".frame-center").switchClass("frame-center", "frame-left", 2000, "easeInOutBack");
			$(".frame-right").switchClass("frame-right", "frame-center", 2000, "easeInOutBack");
			$(".frame-none").switchClass("frame-none", "frame-right", 0, "easeInOutBack");
			$(".old-left").switchClass("frame-left", "frame-none", 2000, "easeInOutBack");
			$(".old-left").removeClass("old-left");
		} else {
			$(".frame-right").addClass("old-right");
			$(".frame-center").switchClass("frame-center", "frame-right", 1000, "easeInOutBack");
			$(".frame-right").switchClass("frame-right", "frame-none", 1000, "easeInOutBack");
			$(".frame-none").switchClass("frame-none", "frame-left", 0, "easeInOutBack");
			$(".old-right").switchClass("frame-right", "frame-none", 1000, "easeInOutBack");
			$(".old-right").removeClass("old-right");
		}
	};
		
	setInterval(function() {
		if (wheelState) {
			hasScrolled(); 
			wheelState = false; 
		}
	}, 250);
});
