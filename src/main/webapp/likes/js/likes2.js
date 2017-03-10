$(function() {
	$(".thumb").on("click", function() {
		console.log($(this).data("css"));
		$(".thumb").each(function() {
			$(this).css("display", "none");
		});
		$(".desc").each(function() {
			$(this).css("display", "none");
		});
		$(this).css({
			display: "block",
			position: "relative",
			margin: "0 20px",
			"box-shadow": "10px 10px 5px rgba(132, 132, 132, .4)"
		});
		$(".sub-board").css({
			display: "inline-block",
			position: "relative",
			top: "-620px",
			left: "500px", 
			width: "710px",
			height: "610px",
			overflow: "hidden",
		});
		if ($(this).hasClass("one")) {
			$(".sub-board .one").css({
				width: "710px",
				left: "-500px",
				display: "block",
			});
			$(".sub-board .one").animate({
				left: "10px",
			}, 1000);
		} else if ($(this).hasClass("two")) {
			$(this).css("left", "324px");
			$(".sub-board .two").css({
				width: "710px",
				left: "-500px",
				display: "block",
			});
			$(".sub-board .two").animate({
				left: "10px",
			}, 1000);
		} else if ($(this).hasClass("thr")) {
			$(this).css("left", "634px");
			$(".sub-board .thr").css({
				width: "710px",
				left: "-500px",
				display: "block",
			});
			$(".sub-board .thr").animate({
				left: "10px",
			}, 1000);
		} else if ($(this).hasClass("fou")) {
			$(this).css("left", "944px");
			$(".sub-board .fou").css({
				width: "710px",
				left: "-500px",
				display: "block",
			});
			$(".sub-board .fou").animate({
				left: "10px",
			}, 1000);
		}
		
		$(this).animate({
			left: "50px",
			top: "-50px",
			width: "360px", 
			height: "660px",
		}, 500);
		
	});
});