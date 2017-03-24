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

