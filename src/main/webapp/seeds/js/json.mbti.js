$(function() {
    var stepCount = 0; 
    var stepChange = 0;
    var hasStep = new Array(); 
    var mbti = [0, 0, 0, 0];
    var mbtiValues = [0, 0, 0, 0, 0, 0, 0, 0];
    var mbtiResult = {};
    
    if (stepCount != 0) $(".progress-bar").css("border-radius", "0 100px 100px 0");
    $(document.body).on("click", ".button-two", function() {
      stepCount++;
	  $('.btn-on').attr('disabled', 'disabled'); 
      var nextDiv = $(".on").next("div");
      $(".on").removeClass("on");
      nextDiv.addClass("on");
      if (stepCount == 4) {
        var nextBtn = $(".btn-on").next("button"); 
          $(".btn-on").removeClass("btn-on");
          nextBtn.addClass("btn-on");
      } else if (stepCount == 5) {
        $(".progress").hide();
        $(".btn-on").removeClass("btn-on");
        if (mbti[0] <= 0) {
          mbtiResult[0] = "E"; 
        } else if (mbti[0] > 0) {
          mbtiResult[0] = "I"; 
        }
        if (mbti[1] <= 0) {
          mbtiResult[1] = "S"; 
        } else if (mbti[1] > 0) {
          mbtiResult[1] = "N"; 
        }
        if (mbti[2] <= 0) {
          mbtiResult[2] = "T"; 
        } else if (mbti[2] > 0) {
          mbtiResult[2] = "F"; 
        }
        if (mbti[3] <= 0) {
          mbtiResult[3] = "J"; 
        } else if (mbti[3] > 0) {
          mbtiResult[3] = "P"; 
        }
        var resultMsg = mbtiResult[0] + mbtiResult[1] + mbtiResult[2] + mbtiResult[3]
        var resultValues = mbtiValues[0] +","+ mbtiValues[1] +","+ mbtiValues[2] +","+ mbtiValues[3] +","+ 
        mbtiValues[4] +","+ mbtiValues[5] +","+ mbtiValues[6] +","+ mbtiValues[7];

        console.log('검사결과 DB or Session 분기 처리'); 
        console.log(memberInfo == null);
        if (memberInfo == null) {
        	console.log("비로그인 상태 : Session 전송 후 저장된 데이터 확인");
            window.sessionStorage.setItem('result', resultMsg);
            console.log(window.sessionStorage.getItem('result'));
            window.sessionStorage.setItem('resultValues', resultValues);
            console.log(window.sessionStorage.getItem('resultValues'));
        } else {
        	console.log("로그인 상태 : DB 전송할 데이터");
        	console.log(resultMsg, resultValues, memberInfo.memberNo);
            var param = {
                "memberNo": memberInfo.memberNo,
                "type": 'mbti',
                "resultResult": resultMsg,
                "eachResult" : resultValues
            }
            $.post(serverRoot + '/seeds/add.json', param, function(ajaxResult) {
                if (ajaxResult.status !="success") {
                    alert(ajaxResult.data);
                      return;
                }
	          });
	        }
	      }
      });
        
        $(".wrapper").addClass("dashboard");
        $(".wrapper").load("seeds/mbti-result-istp.html .test-result", function() {
          console.log($('.test-result').children("span").hasClass("result"));
          if ($('.test-result').children("span").hasClass("result")){
            $(".result").html(resultMsg);
          }
        });
        
    $(document.body).on("change", ".radio input", function() {
        for (var i = 0; i < hasStep.length; i++) {
          if (hasStep[i] == $(this).attr('setanswer')) return; 
	  }
	  hasStep[stepChange++] = $(this).attr('setanswer');
      if (stepChange == 4 || stepChange == 8 || stepChange == 12 || stepChange == 16)
    	  $('.btn-on').removeAttr('disabled'); 
      
      if (stepChange == 20) {
        $(".result-btn").removeAttr("disabled");
        $(".result-btn").removeClass("result-btn");
      }
      var question = "question" + stepChange; 
      $(question).addClass(question);
      if($(this).attr("setAnswer") <= 5) {
        mbti[0] += Number($(this).val()); 
        	if($(this).val() > 0) mbtiValues[0] += Number($(this).val()); 
        	if($(this).val() < 0) mbtiValues[1] += Number($(this).val()); 
        	console.log(mbtiValues[0], mbtiValues[1]); 
      } else if ($(this).attr("setAnswer") <= 10 && $(this).attr("setAnswer") > 5) {
         mbti[1] += Number($(this).val()); 
	     	if($(this).val() > 0) mbtiValues[2] += Number($(this).val()); 
	    	if($(this).val() < 0) mbtiValues[3] += Number($(this).val()); 
	    	console.log(mbtiValues[2], mbtiValues[3]); 
      } else if ($(this).attr("setAnswer") <= 15 && $(this).attr("setAnswer") > 10) {
         mbti[2] += Number($(this).val()); 
	     	if($(this).val() > 0) mbtiValues[4] += Number($(this).val()); 
	    	if($(this).val() < 0) mbtiValues[5] += Number($(this).val()); 
	    	console.log(mbtiValues[4], mbtiValues[5]); 
      } else if ($(this).attr("setAnswer") <= 20 && $(this).attr("setAnswer") > 15) {
         mbti[3] += Number($(this).val()); 
	     	if($(this).val() > 0) mbtiValues[6] += Number($(this).val()); 
	    	if($(this).val() < 0) mbtiValues[7] += Number($(this).val()); 
	    	console.log(mbtiValues[6], mbtiValues[7]); 
      }
      
      $(".progress-wrap").attr("data-progress-percent", 5*stepChange);
        moveProgressBar();
        // on browser resize...
        $(window).resize(function() {
            moveProgressBar();
        });

        // SIGNATURE PROGRESS
        function moveProgressBar() {
            var getPercent = ($('.progress-wrap').attr('data-progress-percent') / 100);
            var getProgressWrapWidth = $('.progress-wrap').width();
            var progressTotal = getPercent * getProgressWrapWidth;
            var animationLength = 500;
            
            // on page load, animate percentage bar to data percentage length
            // .stop() used to prevent animation queueing
            $('.progress-bar').animate({
                left: progressTotal
            }, animationLength);
        }
    })
  });