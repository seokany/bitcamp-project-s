$( function() {
	/* header 호출 스크립트 */
	$.get("../common/header.html", function(result) {
		$("#header").html(result); 
	});
	
	/* footer 호출 스크립트 */
	$.get("../common/footer.html", function(result) {
		$("#footer").html(result); 
	});
	
});

$(function() {
	var pageState = document.location.href.split("/");
	if (pageState[4] == "mystuff") {
		$("#mystuff").css({"border-bottom": "2.5px solid #86F021",
					"text-decoration": "none"});
	} else if (pageState[4] == "mentos") {
		$("#mentos").css({"border-bottom": "2.5px solid #86F021",
			"text-decoration": "none"});
	} else if (pageState[4] == "seeds") {
		$("#seeds").css({"border-bottom": "2.5px solid #86F021",
			"text-decoration": "none"});
	} else if (pageState[4] == "setting") {
		$("#setting").css({"border-bottom": "2.5px solid #86F021",
			"text-decoration": "none"});
	}
});

//$(function() {
//	$(iframe).css("display:none");
//});