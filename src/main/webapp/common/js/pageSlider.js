$(function() {
	var mainFramePages = ["seeds/mbti.html", "mystuff/main.html", "expert/main.html", "mentos/main.html"];
	var wheelState;
	var wheelType; 
	
	$("html, body").on("mousewheel DOMMouseScroll", function(event) {
		wheelState = true; 
		wheelType = event.originalEvent.wheelDelta;
	});
		
	function hasScrolled() {
		var frameState = $("#main-frame", parent.document).attr("main-frame-state"); 
		
		if (wheelType < 0) {
			$("body").addClass("animated slideOutLeft");
			$(".slideOutLeft").css("animation-duration", "2s");
			setTimeout(function() {
				if (frameState == 0) {
					$("#main-frame", parent.document).attr("src", mainFramePages[1]);
				} else if (frameState == 1) {
					$("#main-frame", parent.document).attr("src", mainFramePages[2]);
				} else if (frameState == 2) {
					$("#main-frame", parent.document).attr("src", mainFramePages[3]);
				} else if (frameState == 3) {
					$("#main-frame", parent.document).attr("src", mainFramePages[0]);
				}
			}, 1000);
			
		} else {
			$("body").addClass("animated slideOutRight");
			$(".slideOutRight").css("animation-duration", "2s");
			setTimeout(function() {
				if (frameState == 3) {
					$("#main-frame", parent.document).attr("src", mainFramePages[2]);
				} else if (frameState == 2) {
					$("#main-frame", parent.document).attr("src", mainFramePages[1]);
				} else if (frameState == 1) {
					$("#main-frame", parent.document).attr("src", mainFramePages[0]);
				} else if (frameState == 0) {
					$("#main-frame", parent.document).attr("src", mainFramePages[3]);
				}
			}, 1000); 
		}
	};
		
	setInterval(function() {
		if (wheelState) {
			hasScrolled(); 
			wheelState = false; 
		}
	}, 250);
	
	var pageState = document.location.href.split("/");
	if (pageState[4] == "mystuff") {
		$("#main-frame", parent.document).attr("main-frame-state", 1);
	} else if (pageState[4] == "mentos") {
		$("#main-frame", parent.document).attr("main-frame-state", 3);
	} else if (pageState[4] == "expert") {
		$("#main-frame", parent.document).attr("main-frame-state", 2);
	} else if (pageState[4] == "seeds") {
		$("#main-frame", parent.document).attr("main-frame-state", 0);
	}
});
