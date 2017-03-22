
/*var currPageNo = 1;
var pageSize = 15;
var sno = 5;*/

	
/*	$(document.body).on( "click", "#tab-2", function() {
	$(".likes").load("likes/video-like.html .dashboard", function() {
		likeVideoList(currPageNo, pageSize, sno);
     	});
	}); // 좋아하는 영상 클릭시 이벤트
	
});


$('#prevPgBtn').click(function() {
  if (currPageNo > 1) {
	  likeVideoList(--currPageNo, 15, sno);
  }
});
  
$('#nextPgBtn').click(function() {
	likeVideoList(++currPageNo, 15, sno);
});
  
function preparePagingButton(totalCount) {
  // 현재 페이지 번호가 1이면 이전 버튼을 비활성시킨다.
  if (currPageNo <= 1) {
    $('#prevPgBtn').attr('disabled', true);
  } else {
    $('#prevPgBtn').attr('disabled', false);
  }
  
  var maxPageNo = parseInt(totalCount / pageSize);
  if ((totalCount % pageSize) > 0) {
    maxPageNo++;
  }
  
  if (currPageNo >= maxPageNo) {
    $('#nextPgBtn').attr('disabled', true); 
  } else {
    $('#nextPgBtn').attr('disabled', false);
  }
  
  // 현재 페이지 번호를 출력한다.
  $('#pageNo').text(currPageNo);
}

function likeVideoList(pageNo, pageSize, sno) {
	$.getJSON(serverRoot + '/videoLike/list.json', 
	    {
		  "pageNo": pageNo,
		  "pageSize": pageSize,
		  "sno": sno
		}, 
		function(ajaxResult) {
		      var status = ajaxResult.status;
		      if (status != "success")
		        return;
		      
		      var list = ajaxResult.data.list;
		      console.log(list);
		      
		      var section = $('.video-like-list');

		      var template = Handlebars.compile($('#videoLike').html());
		      section.html(template({"list": list}));
		      
		  console.log("like");
		      console.log(ajaxResult.data.totalCount);
		  preparePagingButton(ajaxResult.data.totalCount);
	});  
}*/

$('.tooltip-viewport-bottom').tooltip({
	placement: 'bottom',
	viewport: {selector: '.container-viewport', padding: 2}
});



$( function() { 

		        // 좋아요 버튼 눌렀을 때
		        
		        $(document.body).on( "click", ".video-like-list .buttonHolder", function() {// 좋아요 버튼 눌렀을 때
		        	 event.preventDefault();
		        	 var curNo = $(this).attr("data-no");
				        
		        	if($(this).children(".btn").hasClass("checked")) {
		        		$(this).children(".btn").removeClass("checked");
		        		$(this).children(".btn").css("color","black");
		                $.post(serverRoot + '/like/delete.json?curNo=' + curNo, function(ajaxResult) {
				        	  if (ajaxResult.status != "success") {
				    	          alert(ajaxResult.data);
				    	          return;
				    	      }
				        	  console.log("삭제했다.");
				          }, 'json');
		        	} else {
		        		$(this).children(".btn").addClass("checked");
		                $(this).children(".checked").css("color","#f94e66");
				          
		                $.post(serverRoot + '/like/add.json?curNo=' + curNo + '&sno=' + sno, function(ajaxResult) {
				        	  if (ajaxResult.status != "success") {
				    	          alert(ajaxResult.data);
				    	          return;
				    	      }
				        	  console.log("했다.");
				          }, 'json');
		                
		                
		        	}
		        })
		    	
		      
	/*	      $('.name-link').click(function(event) {
		        event.preventDefault();
		        location.href = 'view.html?memberNo=' + $(this).attr("data-no");
		      */
		      
//		      preparePagingButton(ajaxResult.data.totalCount);
		        
		        
		        
		        // 영상 더보기 
			
	$(document.body).on( "click", ".rec-video1", function() {
		var videoAddr = $(this).parent('.video-conts').children('.video-btm').attr('iframe-addr').replace('www.ted.com','embed.ted.com');
		var cono = $(this).parent('.video-conts').children('.video-btm').children('.buttonHolder').attr('data-no');
		var list = new Array();
		$.getJSON(serverRoot + '/videoDetail/getOne.json', 
				{
			"cono": cono
				}, 
				function(ajaxResult) {
					var status = ajaxResult.status;
					if (status != "success")
						return;
					
					 list = ajaxResult.data.list;
					 console.log(list);
					 

					 $('.mystuff-modal').load('../mystuff/talks.html #contents', function() {
						 
						 $('#iframe').append("<iframe src=''style='width:;width: 100%;height: 480px;position: relative;' background-color: black; frameborder='0' scrolling='no' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>")
						 $('#iframe iframe').attr('src',videoAddr);
						 $('#talk-speaker-description .speakerName').text(list[0].speakerName);
						 $('#talk-speaker-description .videoDsc').text(list[0].videoDescription);
						 $('.talkSpeaker .speakerName').text(list[0].speakerName);
						 $('.talkSpeaker .speakerJob').text(list[0].speakerJob);
						 $('.talkSpeaker').children('#talk-speaker-thumb').attr('src',list[0].videoImage);
					 });
				});
		
	})
		        
		        
		        
		        
		        
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
    	    });

    
    

	