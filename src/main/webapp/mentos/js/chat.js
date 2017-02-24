$(".chat-form").hover(
	function () {
		$(".chat-form").animate({
			height: "30vmin"
		}, 400);
		$(".chat-form textarea").animate({
			height: "25vmin"
		}, 600),
		$(".chatbox").css("padding-top", "30vmin"); 
	},
	function () {
		$(".chatbox").css("padding-top", "60vmin"); 
		$(".chat-form").css("height", "50px");
		$(".chat-form textarea").css("height", "30px");
});

