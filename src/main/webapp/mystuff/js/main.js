



var currPageNo = 1;
var pageSize = 5;
var sno = 5;
$( function() { 
    
	
	$.getJSON(serverRoot + '/video/list.json', 
		    {
			  "pageNo": currPageNo,
			  "pageSize": pageSize,
			  "sno": sno
			}, function(ajaxResult) {
		      var status = ajaxResult.status;
		      if (status != "success") return;
		  
		      var list = ajaxResult.data.list;
		      $.each(list, function(k, v) {
		    	  $.getJSON(serverRoot + '/video/isLike.json', 
		    		{
		    		  "cono": v.contentsNo,
		    		  "sno": sno
		    		}, function(ajaxResult) {
		  		      var status = ajaxResult.status;
				      if (status != "success") return;
				      
				      var isLike = ajaxResult.data.isLike;
				      
				      if (isLike == 1) {
				    	  list[k].isLike = true;
				      } else {
				    	  list[k].isLike = false;
				      }
				      
				      /*console.log(list[k].isLike);*/
//				      list[k].isLike = true;
//				      console.log(list);
//				      console.log("test02" + typeof list[k].isLike === true);
				      /*console.log(typeof list[k].isLike == "false");*/
				      
				      /*console.log(list);
		      for (var i in list) {
		    	  console.log(i,'번째 isLike = ',list[i].isLike)
		    	  if (list[i].isLike) {
		    		  $('.btn.heart').addClass('checked')
		    	  }
		      }*/
				      var section = $('.section');
				      var template = Handlebars.compile($('#trTemplate').html());
				      section.html(template({"list": list}));
//				      console.log(list);
		    		});
		    	  
		    	  
		      });


		      /*loadList(currPageNo,pageSize,sno);
		  	function loadList(pageNo, pageSize, sno) {
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
					      
					    var like = ajaxResult.data.list;
					     console.log(like);*/
					     
/*		  	var isLike = {};
	  		for (var i = 0; i < like.length; i++) {
	  			if (like[i].contentsNo == list[i].contentsNo) {
	  				return options.fn(this);
	  			} else {
	  				return options.inverse(this);
	  			}
	  		}
			Handlebars.registerHelper('isLike', function(options) {
			  if () {
			    return options.fn(this);
			  } else {
			    return options.inverse(this);
			  }
			});
		  	
		  	*                {{#if isLike}}
     <a href="#" class="btn heart checked"></a>
    {{else}}
      <a href="#" class="btn heart"></a>
    {{/if}}
		  	*/

		      
		  	
		      
		      
		      
		      
		      
		  	
		  	// 좋아요 버튼 눌렀을 때
		  	
		  	$(document.body).on( "click", ".section .buttonHolder", function() {// 좋아요 버튼 눌렀을 때
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
		  	});  

	
	
//	멘토 슬라이드 
	
	$.getJSON(serverRoot + '/plan/list.json',
			 {
		  "pageNo": currPageNo,
		  "pageSize": pageSize,
		  "sno": sno
		},
		    function(ajaxResult) {
		      var status = ajaxResult.status;
		      if (status != "success")
		        return;
		      
		  
		      var list = ajaxResult.data.list;
//		      console.log("멘토");
//		      console.log(list);
		      countLike();
		      
		      function countLike() {
		      $.each(list, function(k, v) {
		    	  $.getJSON(serverRoot + '/video/isLike.json', 
		    		{
		    		  "cono": v.contentsNo,
		    		  "sno": sno
		    		}, function(ajaxResult) {
		  		      var status = ajaxResult.status;
				      if (status != "success") return;
				      
				      var isLike = ajaxResult.data.isLike;
				      
				      if (isLike == 1) {
				    	  list[k].isLike = true;
				      } else {
				    	  list[k].isLike = false;
				      }

				      
				      var section = $('.mt-carousel > .ul');
				      var template = Handlebars.compile($('#mentoList').html());
				      section.html(template({"list": list}));
//				      console.log(list);
				      jcarousels();
		    		});
		    	  
		    	  
		      });
		      }

		  });  
	
	
	// mystuff 파일 업로드

	

	
	
	
	
	
	
	
		        // 좋아요 버튼 눌렀을 때
		        
		        $(document.body).on( "click", ".ul .buttonHolder", function() {// 좋아요 버튼 눌렀을 때
		        	 event.preventDefault();
		        	 var curNo = $(this).attr("data-no");
				        var sno = 5;
				        
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
			})



	
	
	
    function jcarousels() {
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
    };
	
	
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
    
    
    
    
    // 인물 디테일 페이지.
    var $play = $('.play'),
    $detail  = $('.detail'),
    $movie = $('.movie', $detail),
    $close = $('.close');

    $('.movies .movie').click(function(){
//    	console.log("dkdkdl");
      
      $movie.html($(this).html());
      $play.appendTo($movie);

      $poster = $('.poster', this).addClass('active');

    $('.poster', $detail).css({
    	
	    top: $poster.position().top,
	    left: $poster.position().left,
	    width: $poster.width(),
	    height: $poster.height()
	    }).data({
	    top: $poster.position().top,
	    left: $poster.position().left,
	    width: $poster.width(),
	    height: $poster.height()
	    
    })

    $detail.show();

    $('.poster', $detail).delay(10).queue(function(next) {
      $detail.addClass('ready');
      
      next();
    }).delay(100).queue(function(next){
    	
    $(this).css({ top: '-10%', left: '-6%',  width: 366, height: 400 });
    next();
     })
    })


    /*--------------------
    Close
    --------------------*/
    function close(){
//    console.log('asd');
    $p = $('.detail .poster');
//    console.log($p)
    $p.css({
    top: $p.data('top'),
    left: $p.data('left'),
    width: $p.data('width'),
    height: $p.data('height'),
    })
    $detail.removeClass('ready').delay(500).queue(function(next){
    $(this).hide();
    $poster.removeClass('active');
    next();
    });
    }

    $close.click(close);
    $('body').click(function(e){
    $p = $(e.target).parents();
    if ($p.is('.app')){
    return false;
    } else {
    close();
    }
    })


    /*--------------------
    CodePen Thumbnail
    --------------------*/
    setTimeout(function(){
    $('.movie:eq(0)').click();
    }, 300);
    setTimeout(function(){
    close();
    },1700);
    
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
      
      
      $("body").tooltip({   
    	    selector: "[data-toggle='tooltip']",
    	    container: "body"
    	  })
    	    //Popover, activated by clicking
    	    .popover({
    	    selector: "[data-toggle='popover']",
    	    container: "body",
    	    html: true
    	  });
    	  //They can be chained like the example above (when using the same selector).
    	  

});




	
