$(".chat-form textarea").focus(function () {
	$(".chat-form").animate({
		height: "30vh"
	}, 400);
	$(".chat-form textarea").animate({
		height: "25vh"
	}, 600),
	$(".chatbox").css({"padding-top": "30vh",
			"height": "56vh"});
});

$(".chatbox").on("click", function() {
	$(".chat-form").animate({
		height: "50px"
	}, 400);
	$(".chat-form textarea").animate({
		height: "30px"
	}, 300),
	$(".chatbox").css({"padding-top": "60vh",
		"height": "80vh"});
});

