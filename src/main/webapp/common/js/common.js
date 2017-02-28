$( function() {
	
	/* window 사이즈 구하기 */
	$(window).ready(function() {
		var windowWidth = $(window).width();
		var windowHeigth = $(window).height();
		
		$(window).resize(function() {
			windowWidth = $(window).width();
			windowHeigth = $(window).height();
			
			$(".main-frame").css("height", (windowHeigth - 130) + "px");
		});
			
		$(".main-frame").css("height", (windowHeigth - 130) + "px");
	});
	
	/* 현재 슬라이딩된 페이지 구하기 */
	var mainFrameState = $("#main-frame").attr("src"); 
	
	/* iframe 위에서 마우스휠 이벤트 발생시키기 */
//	$(window.frames[1]).on("mousewheel", function(e) {
//		if(mainFrameState == "mystuff/main.html") {
//			$("#main-frame").attr("src", "seeds/mbti.html");
//			mainFrameState = $("#main-frame").attr("src"); 
//		}
//	});
	$("html, body").on("mousewheel DOMMouseScroll", function() {
		if (mainFrameState == "seeds/mbti.html") {
			$("#main-frame").attr("src", "seeds/mbti.html");
			mainFrameState = $("#main-frame").attr("src"); 
		} else if(mainFrameState == "seeds/mbti.html") {
			$("#main-frame").attr("src", "seeds/mbti.html");
			mainFrameState = $("#main-frame").attr("src"); 
	//		
	//	} else if() {
	//		
	//	} else if() {
			
		}
		setTimeout( function() {
		console.log(window.frames.length);
        }, 3000); 
		
		console.log(mainFrameState);
	});
	
	
	/* header 호출 스크립트 */
	$.get("common/header.html", function(result) {
		$("#header").html(result); 
		/* header 메뉴 선택 스크립트 */
		var pageState = document.location.href.split("/");
		if (pageState[4] == "mystuff") {
			$("#mystuff").css({"border-bottom": "2px solid #86F021",
				"text-decoration": "none"});
		} else if (pageState[4] == "mentos") {
			$("#mentos").css({"border-bottom": "2px solid #86F021",
				"text-decoration": "none"});
		} else if (pageState[4] == "seeds") {
			$("#seeds").css({"border-bottom": "2px solid #86F021",
				"text-decoration": "none"});
		} else if (pageState[4] == "setting") {
			$("#setting").css({"border-bottom": "2px solid #86F021",
				"text-decoration": "none"});
		}
	});
	
	/* footer 호출 스크립트 */
	$.get("common/footer.html", function(result) {
		$("#footer").html(result); 
	});
});
