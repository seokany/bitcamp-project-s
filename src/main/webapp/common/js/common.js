$( function() {
	console.log("dasdsadsada");
//	var name = $(sessionScope.name);
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
	
	/* header 호출 스크립트 및 로그인 유저 로그인 상태 확인.*/
	
	var memberNo = 0;
	var date = new Date();
	var photoPath;
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
//				console.log(ajaxResult.data);
				console.log(ajaxResult.data.memberNo);
				console.log(ajaxResult.data.photoPath);
				
			    memberNo = ajaxResult.data.memberNo;
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
				    
				    
				  }); // 토글
				  
				$('.sign-out').css('display', 'none');
				$('.profile-img').attr('src', clientRoot + '/mystuff/img/' + ajaxResult.data.photoPath);
				$('.user-info h3').text(ajaxResult.data.name);
				
				
	
				
				// 로그아웃 버튼의 클릭 이벤트 핸들러 등록하기
				$('#logout-btn').click(function(event) {
					event.preventDefault()
					$.getJSON(serverRoot + '/auth/logout.json', function(ajaxResult) {
						location.href = clientRoot + '/auth/main.html'
					});
				});
				

				// 파일 업로드
				
				$('#photo').fileupload({
				    url: serverRoot + '/common/fileupload.json', // 서버에 요청할 URL
				    dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
				    sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
				    singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기. 기본은 true.
				    autoUpload: true,        // 파일을 추가할 때 자동 업로딩 여부 설정. 기본은 true.
				    disableImageResize: /Android(?!.*Chrome)|Opera/
				        .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
				    previewMaxWidth: 800,   // 미리보기 이미지 너비
				    previewMaxHeight: 800,  // 미리보기 이미지 높이 
				    previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
				    done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
//				    	console.log('done()...');
//				    	console.log(data.result.data[0]);
				       photoPath = data.result.data[0];
//				        $('#photo-path').val(data.result);
				       console.log("하하하하");
				       console.log(data.result.data[0]);
				        
					
					    	var param = {
					    			"memberNo": memberNo,
					    			"name": $('.user-info h3').val(),
					    			"photoPath": photoPath
					    	};
					    
						    $.post(serverRoot + '/mentee/update.json', param, function(ajaxResult) {
						    	if (ajaxResult.status != "success") {
						    		console.log("업데이트안됨.");
						    		alert(ajaxResult.data);
						    		return;
						    	}
						    	console.log("파일업로드!");
						    	console.log(ajaxResult.data);
						    	photoPath = ajaxResult.data.photoPath

						    	console.log(date.getTime())
						    	console.log(location.href); 
						    	var oEmployeesTable = $('.user-info').dataTable();
						    	var oEmployeesTable = $('.user-info').dataTable({
						            "bServerSide": true,
						            "sAjaxSource": "DataContent.aspx"
						      });
						    	
						    	refresh();			    		
						    	function refresh() {
						  		  $.ajax({
						                type: 'POST',
						                url: 'http://localhost:8080/bitcamp-project-s/mystuff/homepage.html', 
						                success: function(msg) {
						                	$('.profile-img').removeAttr('src').attr('src', clientRoot + '/mystuff/img/' + photoPath);
						                }
						            });
						  		} 
						    		

							    	
						    }, 'json'); // 새 파일 업로드 post 요청. update 요청.
						    
						    
				        
				    } // 사진 새로 바꿨을 때 호출되는 함수.
				});
				
				
			  }); // loginUser
		  
		  
	});
	

	
	
	
	
	/* footer 호출 스크립트 */
	$.get("common/footer.html", function(result) {
		$("#footer").html(result); 
	});
	
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
