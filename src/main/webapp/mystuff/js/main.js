 
$( function() { 
	
	$.getJSON(serverRoot + '/video/list.json',  
		    function(ajaxResult) {
		      var status = ajaxResult.status;
		      if (status != "success")
		        return;
		      
		  
		      var list = ajaxResult.data.list;
		      console.log(list);
		      
		      var section = $('.section');

		      var template = Handlebars.compile($('#trTemplate').html());
		      section.html(template({"list": list}));
		      
	/*	      $('.name-link').click(function(event) {
		        event.preventDefault();
		        location.href = 'view.html?memberNo=' + $(this).attr("data-no");
		      });*/
		      
//		      preparePagingButton(ajaxResult.data.totalCount);
		  });  
	
	
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
    
   
    $(document.body).on( "click", ".rec-btn", function() { // 추천목록 눌렀을 때
    	 
    	$("#rec-list").css("border-bottom", "2px solid blue");
    	$("#like-list").css("border-bottom", "none");
	    	$(".rec-btn").css("text-decoration", "none");
	    $("#all-rec-list").css("display", "block");
        $("#all-like-list").css("display", "none");
//        $(".all-rec-model, .job-all, .all-rec-mento, video-all").css("display", "inline-block");
       
    });

    $(document.body).on( "click", ".like-btn", function() {// 좋아요 목록 눌렀을 때
    	
    	$("#like-list").css("border-bottom", "2px solid blue");
    	$("#rec-list").css("border-bottom", "none");
    	$(".like-btn").css("text-decoration", "none");
	    $("#all-like-list").css("display", "block");
        $("#all-rec-list").css("display", "none");
//        $(".all-rec-model, .job-all, .all-rec-mento, video-all").css("display", "inline-block");
   
    });
    

    $(".hover").mouseleave(
    	    function () {
    	      $(this).removeClass("hover");
    	    }
    	  );
    
    $(".video").hover(function() { // 비디오 hover효과
    	
    	$(".video").css("background-color", "rgba(240, 128, 128, 0.27)");
    	
    })
    
    $(".video").mouseleave(
    	    function () {
    	      $(".video").css("background-color", "transparent");
    	    }
    	  );
    //
    
    
    
    //  추천영상 더보기 버튼.
    
    $(".videoBox").hover(function(){
    	$(this).children(".video-box").css({"height":"20px", "width":"20px"});
    })
        $(".videoBox").mouseleave(
    	    function () {
    	    	$(this).children(".video-box").css({"height":"0px", "width":"0px"});
    	    }
    	  );
    
    $(".video-box").hover(function(){
    	$(this).css({"height":"50px", "width":"50px"});
    })
        $(".video-box").mouseleave(
    	    function () {
    	      $(this).css({"height":"20px", "width":"20px"});
    	    }
    	  );
    
    
    $(".jobBox").hover(function(){
    	$(this).children(".job-box").css({"height":"20px", "width":"20px"});
    })
        $(".jobBox").mouseleave(
    	    function () {
    	    	$(this).children(".job-box").css({"height":"0px", "width":"0px"});
    	    }
    	  );
    
    $(".job-box").hover(function(){
    	$(this).css({"height":"50px", "width":"50px"});
    })
        $(".job-box").mouseleave(
    	    function () {
    	      $(this).css({"height":"20px", "width":"20px"});
    	    }
    	  );
    
 // 멘토 리스트 페이지
   
      $(".mt-list").hover(function(){
	       $(this).css("cursor","pointer");
	   	   $(this).children(".mt-btm").css({"background": "linear-gradient(90deg, rgba(105, 183, 235, 0.35), #b3dbd3, rgba(244, 214, 219, 0.55)"});
	   	   $(this).children(".mt-btm").children(".mt-name").css("display", "inline-block");
	  	   $(this).children(".mt-btm").children(".mt-photo").css("top", "-50px");
  	  
      })
      
    $(".mt-list").mouseleave(
    	    function () {
    	     $(this).children(".mt-btm").css("background", "transparent");
        	 $(this).children(".mt-btm").children(".mt-name").css("display", "none");
  	         $(this).children(".mt-btm").children(".mt-photo").css("top", "-15px");
    	    }
    	  );
    
    // 좋아요 버튼 눌렀을 때
    
    $(document.body).on( "click", ".buttonHolder", function() {// 좋아요 목록 눌렀을 때
    	
    	if($(this).children(".btn").hasClass("checked")) {
    		$(this).children(".btn").removeClass("checked");
    		$(this).children(".btn").css("color","black");	
    	} else {
    		$(this).children(".btn").addClass("checked");
            $(this).children(".checked").css("color","#f94e66");	
    	}
    })
});

(function($) { // 슬라이드 쇼
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



	