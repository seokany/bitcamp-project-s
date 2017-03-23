

$( function() { 
	
	var currPageNo = 1;
	var pageSize = 5;
	var sno = 5;
    
	$(".mystuff").load("mystuff/mystuff.html .dashboard", function() {
		

	
	$.getJSON(serverRoot + '/person/list.json', 
		    {
			  "pageNo": currPageNo,
			  "pageSize": pageSize,
			  "sno": sno
			}, function(ajaxResult) {
		      var status = ajaxResult.status;
		      if (status != "success") return;
		      console.log("person 객체");
		      console.log(ajaxResult.data.list);
		      
		      var list = ajaxResult.data.list;
		      var section = $('.ps-carousel .ul');
		      console.log(section);
		      var template = Handlebars.compile($('#personList').html());
		      section.html(template({"list": list}));
			});
			
	
	
	
	
	
	$.getJSON(serverRoot + '/video/list.json', 
		    {
			  "pageNo": currPageNo,
			  "pageSize": pageSize,
			  "sno": sno
			}, function(ajaxResult) {
		      var status = ajaxResult.status;
		      if (status != "success") return;
		      console.log("video 객체");
		      console.log(ajaxResult);
		  
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
	
	});
		        // 좋아요 버튼 눌렀을 때
		        
		        $(document.body).on( "click", ".buttonHolder", function() {// 좋아요 버튼 눌렀을 때
		        	 event.preventDefault();
		        	 var curNo = $(this).attr("data-no");
		        	 var sno = 5;
				        
		        	if($(this).children(".btn").hasClass("checked")) {
		        	   $(this).children(".btn").removeClass("checked");
		        	   console.log($(this).parents(".mt-like-list"));
		        	  if($(this).parents(".mt-like-list")) {
		        		  console.log("들어왔니?");
		        		  $(this).parents(".mt-like-list").remove();  
		        	  }
		        	  
		        			 
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
			
  // mystuff 인물 모달 창 띄우기
			
			$(document.body).on( "click", ".model-slide > a", function() {
				
				console.log("-----------------------------------------------");
				console.log("인물모달창");
				console.log(this);
				
				var cono = $(this).attr('data-no');
				console.log(cono);
				
				$.getJSON(serverRoot + '/person/getOne.json', 
						{
					"cono": cono
						}, 
						function(ajaxResult) {
							var status = ajaxResult.status;
							if (status != "success") {
								return;
							}
							
							console.log("인물 리스트0");
							console.log(ajaxResult);
							 console.log(ajaxResult.data.personJob);
							 var name = ajaxResult.data.personName;
							 var job = ajaxResult.data.personJob;
							 var img = ajaxResult.data.personImage2;
							 var schl = ajaxResult.data.personSchool;
							 var desc = ajaxResult.data.personDescription;
							 
							 $('.mystuff-modal').load('mystuff/person-test.html .person-dash', function() {

								 $('.card-image img').attr('src',img);
								 $('.name .p-name').text(name);
								 $('.p-job').html(job);
								 $('.p-schl').html(schl);
								 $('.p-descs').html(desc);
								 
							 }) // mystuff-modal 창에 로드 시키기.
				
			})
			
			})
			
			
			
			
			

// 영상 모달 띄우기
			
	$(document.body).on( "click", ".rec-video1", function() {
		console.log("테스트중입.")
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
					 
					 
				    /*  if($(".frame-area-center").hasClass("mystuff")) {*/
					 $('.mystuff-modal').load('mystuff/talks.html #contents', function() {
						 console.log("여기도 들어오나")
						 
						 $('#iframe').append("<iframe src="+"'"+videoAddr+"'"+"style='width:;width: 100%;height: 386px;' background-color: black; frameborder='0' scrolling='no' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>")
						 $('#talk-speaker-description .speakerName').text(list[0].speakerName);
						 $('#talk-speaker-description .videoDsc').text(list[0].videoDescription);
						 $('.talkSpeaker .speakerName').text(list[0].speakerName);
						 $('.talkSpeaker .speakerJob').text(list[0].speakerJob);
						 $('.talkSpeaker').children('#talk-speaker-thumb').attr('src',list[0].videoImage);
					 });
				});
		
	})
	
	
	
	
	
	
	
	// 슬라이드 호출 함수
	
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
    	  





//영상 디테일 페이지 넘어가는...


$(document.body).on( "click", ".video-box .fpc_page-tip", function() {
	var currPageNo = 1;
	var pageSize = 15;
	var snos = 5;
	 $(".mystuff").load("mystuff/detail/video-detail.html .dashboard", function() {
		 
	 loadVideoList(currPageNo, pageSize, snos);
	 $('.prevPgBtn').click(function() {
		 if (currPageNo > 1) {
			 loadVideoList(--currPageNo, 15, snos);
		 }
	 });
	 
	 $('.nextPgBtn').click(function() {
		 loadVideoList(++currPageNo, 15, snos);
	   });
	 
	 function videoPreparePagingButton(totalCount) {
		 // 현재 페이지 번호가 1이면 이전 버튼을 비활성시킨다.
		 if (currPageNo <= 1) {
			 $('.prevPgBtn').attr('disabled', true);
		 } else {
			 $('.prevPgBtn').attr('disabled', false);
		 }
		 
		 var maxPageNo = parseInt(totalCount / pageSize);
		 console.log(maxPageNo);
		 if ((totalCount % pageSize) > 0) {
			 maxPageNo++;
		 }
		 
		 if (currPageNo >= maxPageNo) {
			 $('.nextPgBtn').attr('disabled', true); 
		 } else {
			 $('.nextPgBtn').attr('disabled', false);
		 }
		 
		 // 현재 페이지 번호를 출력한다.
		 $('.pageNo').text(currPageNo);
	 }
	 
	 function loadVideoList(pageNo, pageSize, sno) {
		 $.getJSON(serverRoot + '/videoDetail/list.json', 
				 {
			 "pageNo": pageNo,
			 "pageSize": pageSize,
			 "sno": sno
				 }, 
				 function(ajaxResult) {
					 var status = ajaxResult.status;
					 if (status != "success") {
						 return;
						 
					 }
					 console.log("=================================");
					 console.log("video");
					 console.log(ajaxResult.data.totalCount);
					 var list = ajaxResult.data.list;
					 console.log(list);
					 
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
									 
									 var section = $('.video-detail-list');
									 var template = Handlebars.compile($('#videoDetail').html());
									 section.html(template({"list": list}));
									 videoPreparePagingButton(ajaxResult.data.totalCount);
								 });
						 
						 
						 
					 });
//		      href="http://localhost:8080/bitcamp-project-s/mystuff/detail/video-detail.html"
					 
				 });  
	 }
	 });
}); // mystuff video 더보기 눌렀을 때



//멘토 디테일 페이지 넘어가는...



$(document.body).on( "click", ".mento-box .fpc_page-tip", function() {
	var currPageNo = 1;
	var pageSize = 4;
	var sno = 5;
	 $(".mystuff").load("mystuff/detail/mento-detail.html .dashboard", function() {
		 
	 loadVideoList(currPageNo, pageSize, sno);
	 $('.prevPgBtn').click(function() {
		 if (currPageNo > 1) {
			 loadVideoList(--currPageNo, 4, sno);
		 }
	 });
	 
	 $('.nextPgBtn').click(function() {
		 loadVideoList(++currPageNo, 4, sno);
	   });
	 
	 function videoPreparePagingButton(totalCount) {
		 // 현재 페이지 번호가 1이면 이전 버튼을 비활성시킨다.
		 if (currPageNo <= 1) {
			 $('.prevPgBtn').attr('disabled', true);
		 } else {
			 $('.prevPgBtn').attr('disabled', false);
		 }
		 
		 var maxPageNo = parseInt(totalCount / pageSize);
		 console.log(maxPageNo);
		 if ((totalCount % pageSize) > 0) {
			 maxPageNo++;
		 }
		 
		 if (currPageNo >= maxPageNo) {
			 $('.nextPgBtn').attr('disabled', true); 
		 } else {
			 $('.nextPgBtn').attr('disabled', false);
		 }
		 
		 // 현재 페이지 번호를 출력한다.
		 $('.pageNo').text(currPageNo);
	 }
	 
	 function loadVideoList(pageNo, pageSize, sno) {
		 $.getJSON(serverRoot + '/planDetail/list.json', 
				 {
			 "pageNo": pageNo,
			 "pageSize": pageSize,
			 "sno": sno
				 }, 
				 function(ajaxResult) {
					 var status = ajaxResult.status;
					 if (status != "success") {
						 return;
						 
					 }
					 console.log("=================================");
					 console.log("mento");
					 console.log(ajaxResult.data.totalCount);
					 var list = ajaxResult.data.list;
					 console.log(list);
					 
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
									 
									 var section = $('.mento-detail-list');
									 var template = Handlebars.compile($('#mentoDetail').html());
									 section.html(template({"list": list}));
									 videoPreparePagingButton(ajaxResult.data.totalCount);
									 mtDetailHover();
								 });
						 
						 
						 
					 });
//		      href="http://localhost:8080/bitcamp-project-s/mystuff/detail/video-detail.html"
					 
				 });  
	 }
	 });
	 
	 
	 // 멘토 디테일 리스트 hover 효과
	   
	 function mtDetailHover() {
			
		 $(".mt-list").hover(function(){
		     $(this).css("cursor","pointer");
		 	   $(this).children(".mt-btm").css({"background": "linear-gradient(90deg, rgba(105, 183, 235, 0.35), #b3dbd3, rgba(244, 214, 219, 0.55)"});
		 	   $(this).children(".mt-btm").children(".mt-name").css("display", "inline-block");
		 	   $(this).children(".mt-btm").children(".detail-mt-photo").css("top", "-50px");
		  
		 })

		 $(".mt-list").mouseleave(
		 	    function () {
		 	     $(this).children(".mt-btm").css("background", "transparent");
		  	 $(this).children(".mt-btm").children(".mt-name").css("display", "none");
		         $(this).children(".mt-btm").children(".detail-mt-photo").css("top", "-15px");
		 	    }
		 	  );
		 }
	 
	 
	 
	 
}); // mystuff video 더보기 눌렀을 때



// 인물 더보기 눌렀을 때

$(document.body).on( "click", ".person-box .fpc_page-tip", function() {
	var currPageNo = 1;
	var pageSize = 4;
	var sno = 5;
	 $(".mystuff").load("likes/person.html .dashboard", function() {
		 
	 loadPersonList(currPageNo, pageSize, sno);
	 $('.prevPgBtn').click(function() {
		 if (currPageNo > 1) {
			 loadPersonList(--currPageNo, 4, sno);
		 }
	 });
	 
	 $('.nextPgBtn').click(function() {
		 loadPersonList(++currPageNo, 4, sno);
	   });
	 
	 function personPreparePagingButton(totalCount) {
		 // 현재 페이지 번호가 1이면 이전 버튼을 비활성시킨다.
		 if (currPageNo <= 1) {
			 $('.prevPgBtn').attr('disabled', true);
		 } else {
			 $('.prevPgBtn').attr('disabled', false);
		 }
		 
		 var maxPageNo = parseInt(totalCount / pageSize);
		 console.log(maxPageNo);
		 if ((totalCount % pageSize) > 0) {
			 maxPageNo++;
		 }
		 
		 if (currPageNo >= maxPageNo) {
			 $('.nextPgBtn').attr('disabled', true); 
		 } else {
			 $('.nextPgBtn').attr('disabled', false);
		 }
		 
		 // 현재 페이지 번호를 출력한다.
		 $('.pageNo').text(currPageNo);
	 }
	 
	 function loadPersonList(pageNo, pageSize, sno) {
		 $.getJSON(serverRoot + '/person/list.json', 
				 {
			 "pageNo": pageNo,
			 "pageSize": pageSize,
			 "sno": sno
				 }, 
				 function(ajaxResult) {
					 var status = ajaxResult.status;
					 if (status != "success") {
						 return;
						 
					 }
					 console.log("=================================");
					 console.log("person");
					  var list = ajaxResult.data.list;
					  var section = $('.persons');
					  var template = Handlebars.compile($('#personDetail').html());
					  section.html(template({"list": list}));
					 
					  setTimeout(function() {
						  listPlay();
						  },5000);
//		      href="http://localhost:8080/bitcamp-project-s/mystuff/detail/video-detail.html"
					 
				 });  
	 }
	 
	 
	 function listPlay() {
		 var $play = $('.play'),
		     $detail  = $('.detail'),
		     $person = $('.person', $detail),
		     $close = $('.close');
		 $('.persons .person').click(function(){
		   $person.html($(this).html());
		   $play.appendTo($person);

		   
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
		     $(this).css({
		       top: '-10%',
		       left: '-6%',
		       width: 266,
		       height: 400
		     });
		     next();
		   })
		 })

		 /*--------------------
		 Close
		 --------------------*/
		 function close(){
		   $p = $('.detail .poster');
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
		   if ($p.is('.dashboard')){
		     return false;
		   } else {
		     close();
		   }
		 })

		 /*--------------------
		 CodePen Thumbnail
		 --------------------*/
		 setTimeout(function(){
		   $('.person:eq(0)').click();
		 }, 300);
		 setTimeout(function(){
		   close();
		 },1700);
		 
		 };
	 
	 
       }); // 

    }); 

	
