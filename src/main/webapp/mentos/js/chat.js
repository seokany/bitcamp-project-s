$(".chat-form textarea").focus(function () {
	$(".chat-form").animate({
		height: "30vmin"
	}, 400);
	$(".chat-form textarea").animate({
		height: "25vmin"
	}, 600),
	$(".chatbox").css("padding-top", "30vmin"); 
});

$(".chatbox").on("click", function() {
	$(".chat-form").animate({
		height: "50px"
	}, 400);
	$(".chat-form textarea").animate({
		height: "30px"
	}, 300),
	$(".chatbox").css("padding-top", "60vmin"); 
});


