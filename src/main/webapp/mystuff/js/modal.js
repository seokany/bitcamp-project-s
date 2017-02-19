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
//
//$( function() { 
//	$(document.body).on( "click", ".like-btn", function() { 
//		$( ".person" ).removeClass("animated zoomOut");
//		$( ".person" ).addClass("animated zoomOut");
//		$( ".person-back" ).css("animation-duration", "0.5s");
//		$( ".modal-content" ).css("animation-delay", "0.1s");
//		$( ".modal-content" ).css("animation-duration", "0.8s");
//		setTimeout( function() {
//			$('.person').remove();
//		}, 1000); 
//	});
//});
