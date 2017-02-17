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
	
//		$.getJSON("../auth/loginUser.json", function(ajaxResult) {
//			
//			if (ajaxResult.status == "fail") {
//				$('#logon-div').css('display', 'none');
//				$('#login-btn').click(function(event) {
//					event.preventDefault(); 
//					location.href = '../auth'; 
//				});
//				return; 
//			}
//			$('#logoff-div').css('display', 'none'); 
//			if (ajaxResult.data.photoPath == null) 
//				$('#logon-img').css('display', 'none'); 
//			if (ajaxResult.data.photoPath != null) 
//				$('#logon-div img').attr('src', '../upload/' + ajaxResult.data.photoPath); 
//			$('#logon-div span').text(ajaxResult.data.name); 
//			$('#logout-btn').click(function(event) {
//				event.preventDefault(); 
//				$.getJSON('../auth/logout.json', function(ajaxResult) {
//					location.href = '../auth'; 
//				});
//			});
//		});
