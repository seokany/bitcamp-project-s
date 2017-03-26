var isopen_sharemenu = false;

$(document.body).on('click', '.fa-share-alt', function(e){
	if (!isopen_sharemenu) {
		$('.social-button-wrapper').children().css("display", "inline-block");
		$('.icon-button').children().css("display", "inline-block");
		isopen_sharemenu = true;
	} else {
		$('.social-button-wrapper').children().css("display", "none");
		$('.icon-button').children().css("display", "none");
		isopen_sharemenu = false;
	}
});

$(document.body).on("click", ".fa-times", function() {
	console.log("닫기버튼 클릭");
	
	$('.seeds-modal-call').addClass('animated fadeOut');
	setTimeout(function() {
		$('.seeds-modal-call').removeClass('animated fadeOut');
		$('.seeds-modal-call').remove();
	}, 800);
	
	/*$('.seeds-modal').unload('seeds/chart-test.html',function(){
		console.log("unload 성공");
		$('.seeds-modal-call').removeClass('seeds-modal');
	});*/
});


