$( function() {
	
	/* window 사이즈 구하기 */
	$(window).ready(function() {
		var windowWidth = $(window).width();
		var windowHeigth = $(window).height();
		
		$(window).resize(function() {
			windowWidth = $(window).width();
			windowHeigth = $(window).height();
			
			$(".main-frame").css("height", windowHeigth + "px");
		});
			
		$(".main-frame").css("height", windowHeigth + "px");
	});
	
	/* header 호출 스크립트 */
	$.get("../common/header.html", function(result) {
		$("#header").html(result); 
	});
	
	/* footer 호출 스크립트 */
	$.get("common/footer.html", function(result) {
		$("#footer").html(result); 
	});
});
