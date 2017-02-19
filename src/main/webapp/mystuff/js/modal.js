$( function() { 
    $(document.body).on( "click", ".modal-esc", function() { 
    	$( ".modal" ).removeClass("animated zoomOut");
        $( ".modal" ).addClass("animated zoomOut");
        $( ".modal-back" ).css("animation-duration", "0.5s");
        $( ".modal-content" ).css("animation-delay", "0.1s");
        $( ".modal-content" ).css("animation-duration", "0.8s");
        setTimeout( function() {
        	$('.modal').remove();
        }, 1000); 
    });
});

$( ".like-btn" ).hover(
	  function() {
	    $( this ).addClass( "animated jello" );
	    console.log(this);
	  }, 
	  function() {
	    $( this ).removeClass( "animated jello" );
	  }
	);
	
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
