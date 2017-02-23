$( function() { 
    $(document.body).on( "click", ".modal-esc", function() { 
    	$( ".modal-back" ).addClass("animated fadeOut");
        $( ".modal-content" ).addClass("animated slideOutRight");
        $( ".modal-back" ).css("animation-duration", "0.8s");
        $( ".modal-content" ).css("animation-duration", "0.5s");
        setTimeout( function() {
        	$(".pop-modal", parent.document).css("display", "none");
        }, 800); 
    });
});

var likeState = false; 
$( function() { 
	$(document.body).on( "click", ".like-btn", function() { 
		if (!likeState) {
			likeState = true; 
			$( "#like-n-btn").css("display", "none");
			$( "#like-c-btn").css("display", "inline-block");
		} else {
			likeState = false; 
			$( "#like-c-btn").css("display", "none");
			$( "#like-n-btn").css("display", "inline-block");
		}
	});
});

$( ".like-btn" ).hover(
	function() {
		$( this ).addClass( "animated jello" );
		if (!likeState) {
			$( "#like-n-btn").css("display", "none");
			$( "#like-c-btn").css("display", "inline-block");
		} else {
			$( "#like-c-btn").css("display", "none");
			$( "#like-n-btn").css("display", "inline-block");
		}
	}, 
	function() {
		$( this ).removeClass( "animated jello" );
		if (!likeState) {
			$( "#like-c-btn").css("display", "none");
			$( "#like-n-btn").css("display", "inline-block");
		} else {
			$( "#like-n-btn").css("display", "none");
			$( "#like-c-btn").css("display", "inline-block");
		}
	}
);

$( ".down-btn" ).hover(
	function() {
		$( this ).addClass( "animated jello" );
	}, 
	function() {
		$( this ).removeClass( "animated jello" );
	}
);

$(function() {
	$(document.body).on("click", ".frame-modal", function() {
		$("#iframe").attr("src", $($(this)).attr("frame-src"));
		$(".pop-modal").css("display", "block");
	});
});