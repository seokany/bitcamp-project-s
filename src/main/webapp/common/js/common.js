$( function() {
	/* header 호출 스크립트 */
	$.get("../common/header.html", function(result) {
		$("#header").html(result); 
		/* header 메뉴 선택 스크립트 */
		var pageState = document.location.href.split("/");
		if (pageState[4] == "mystuff") {
			$("#mystuff").css({"border-bottom": "2px solid #86F021",
				"text-decoration": "none"});
		} else if (pageState[4] == "mentos") {
			$("#mentos").css({"border-bottom": "2.5px solid #86F021",
				"text-decoration": "none"});
		} else if (pageState[4] == "liktit") {
			$("#likeit").css({"border-bottom": "2.5px solid #86F021",
				"text-decoration": "none"});
		} else if (pageState[4] == "seeds") {
			$("#seeds").css({"border-bottom": "2.5px solid #86F021",
				"text-decoration": "none"});
		}
	});
	
	/* footer 호출 스크립트 */
	$.get("../common/footer.html", function(result) {
		$("#footer").html(result); 
	});
});
