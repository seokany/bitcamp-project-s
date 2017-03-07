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
	$.get("common/header.html", function(result) {
		$("#header").html(result); 
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
