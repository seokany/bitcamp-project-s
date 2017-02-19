$( function() { 
    $(document.body).on( "click", ".person-esc", function() { 
    	$( ".person" ).removeClass("animated zoomOut");
        $( ".person" ).addClass("animated zoomOut");
        $( ".person-back" ).css("animation-duration", "0.5s");
        $( ".person-modal" ).css("animation-delay", "0.1s");
        $( ".person-modal" ).css("animation-duration", "0.8s");
        setTimeout( function() {
        	$('.person').remove();
        }, 1000); 
    });
});
