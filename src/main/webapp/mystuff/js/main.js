 
$( function() { 
    var state = true;
    $(document.body).on( "click", ".job-more", function() { // 직업 더보기
      if ( state ) {
  	    $(".job2-conts").hide().slideDown();
	    $(".job2-conts").css("display", "inline-block");
        $( ".job-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "500px"
        }, 1000 );
        $(".all-rec-model, .all-rec-mento, .video-all").css("display", "none");
      } else {
	  $(".job2-conts").show().slideUp();
  	    $(".job2-conts").css("display", "none");
        $( ".job-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
        $(".all-rec-model, .all-rec-mento, .video-all").css("display", "inline-block");
      }
      state = !state;
    });
    
    var state = true;
    $(document.body).on( "click", ".model-more", function() { // 추천직업 더 보기
      if ( state ) {
    	  $(".job-all, .video-all, .all-rec-mento").show().slideUp();
  	    $(".model2-conts").hide().slideDown();
	    $(".model2-conts").css("display", "inline-block");
	    
        $( ".model-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "500px"
        }, 1000 );
        $(".all-rec-mento, .job-all, .video-all").css("display", "none");
      } else {
    	  $(".all-rec-mento, .job-all, .video-all").hide().slideDown(1200);
    	  $(".model2-conts").show().slideUp();
  	    $(".model2-conts").css("display", "none");
        $( ".model-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
        $(".all-rec-mento, .job-all, .video-all").css("display", "inline-block");
      }
      state = !state;
    });

    var state = true;
    $(document.body).on( "click", ".mento-more", function() { // 멘토 더 보기 눌렀을 때
      if ( state ) {
    	  $(".all-rec-model, .job-all, .video-all").show().slideUp();
  	    $(".mento2-conts").hide().slideDown();
	    $(".mento2-conts").css("display", "inline-block");
	    
        $( ".mento-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "500px"
        }, 1000 );
        $(".all-rec-model, .job-all, .video-all").css("display", "none");
      } else {
    	  $(".all-rec-model, .job-all, .video-all").hide().slideDown(1200);
    	  $(".mento2-conts").show().slideUp();
  	    $(".mento2-conts").css("display", "none");
        $( ".mento-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
        $(".all-rec-model, .job-all, .video-all").css("display", "inline-block");
      }
      state = !state;
    });

    var state = true;
    $(document.body).on( "click", ".video-more", function() { // 추천 영상 더보기 눌렀을 때
      if ( state ) {
  	    $(".video2-conts").hide().slideDown();
	    $(".video2-conts").css("display", "inline-block");
        $( ".video-effect" ).animate({
          backgroundColor: "#BDBDBD",
          color: "#fff",
          height: "500px"
        }, 1000 );
        $(".all-rec-model, .job-all, .all-rec-mento").css("display", "none");
      } else {
    	  $(".all-rec-model, .job-all, .all-rec-mento").hide().slideDown(1500);
	  $(".video2-conts").show().slideUp();
  	    $(".video2-conts").css("display", "none");
        $( ".video-effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          height: "250px"
        }, 1000 );
        $(".all-rec-model, .job-all, .all-rec-mento").css("display", "inline-block");
      }
      state = !state;
    });
   
    $(document.body).on( "click", ".rec-btn", function() { // 추천목록 눌렀을 때
    	 
    	$("#rec-list").css("border-bottom", "2px solid blue");
    	$("#like-list").css("border-bottom", "none");
	    $("#all-rec-list").css("display", "block");
        $("#all-like-list").css("display", "none");
//        $(".all-rec-model, .job-all, .all-rec-mento, video-all").css("display", "inline-block");
       
    });

    $(document.body).on( "click", ".like-btn", function() {// 좋아요 목록 눌렀을 때
    	
    	$("#like-list").css("border-bottom", "2px solid blue");
    	$("#rec-list").css("border-bottom", "none");
	    $("#all-like-list").css("display", "block");
        $("#all-rec-list").css("display", "none");
//        $(".all-rec-model, .job-all, .all-rec-mento, video-all").css("display", "inline-block");
   
    });
    

    
  /*  $(document.body).on( "click", ".favor-btn", function() {
    
    var con_test = confirm("어떤 값이 나올까요. 확인을 눌러보세요.");
    if(con_test == true)
    { 
    	function onclick() {
        this.setAttribute( "src", "../fheart.png" );
    }
    }
    else if(con_test == false) {
      document.write("취소를 누르셨군요.");
    }
  });*/
});

var state = true;
function changeimg() {// 좋아요 버튼 눌렀을 때
	if(state) {
		this.setAttribute( "src", "../image/fheart.png" );
	$(".like-del").css("display", "none");
	$(".like-add").css("display", "block");
	$(".like-add").addClass('animated fadeOut');
	$(".like-add").css("animation-delay", "1s");
	} else {
		this.setAttribute( "src", "../image/heart.png" );
		$(".like-add").css("display", "none");
		$(".like-del").css("display", "block");
		$('.like-del').addClass('animated fadeOut');
		$(".like-del").css("animation-delay", "1s");
	}
	state = !state;
};


/*function ButtonDown() {  마우스로 눌렀을 때 이미지 변환  
 * 
 * onmousedown="ButtonDown.call( this )" onmouseup="ButtonUp.call( this )"
 * => input 태그에 삽입
 * 
    this.setAttribute("src", "../image/fheart.png");
}

function ButtonUp() {
    this.setAttribute( "src", "../image/heart.png" );
}
*/

	
	
	
(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);

	
	
	
	
	
	
	
	
	