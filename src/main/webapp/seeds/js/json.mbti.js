$(function() {
    var stepCount = 0; 
    var stepChange = 0;
    var mbti = [0, 0, 0, 0]; 
    var mbtiResult = {};
    
    if (stepCount != 0) $(".progress-bar").css("border-radius", "0 100px 100px 0");
    $(document.body).on("click", ".button-two", function() {
      stepCount++;
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

        $(".wrapper").addClass("dashboard");
        $(".wrapper").load("mbti-result-istp.html .test-result", function() {
          console.log($('.test-result').children("span").hasClass("result"));
          if ($('.test-result').children("span").hasClass("result")){
            $(".result").html(resultMsg);
            
            // 로그인한 사용자의 정보를 가져온다.
            var sno = 0;
            $.getJSON(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
              sno = ajaxResult.data.memberNo
              if (ajaxResult.status !="success") {
            	  alert(ajaxResult.data);
            	  return;
              }
              
              console.log("sno:" + sno);
              
              var param = {
            		  "memberNo": sno,
            		  "type": "mbti",
            		  "resultResult": resultMsg
              };
              console.log("param:" + param.memberNo);
              
              $.post(serverRoot + '/seeds/add.json', param, function(ajaxResult) {
            	  if (ajaxResult.status != "success") {
            		  alert(ajaxResult.data);
            		  return;
            	  }
            	  console.log(ajaxResult.data);
            	  location.href = 'seeds-temp.html';
              }, 'json'); // post();
              
            });
            
        
            
          }
        });
      }
    });
    
    
    $(document.body).on("change", ".radio input", function() {
      stepChange++;
      if (stepChange == 20) {
        $(".result-btn").removeAttr("disabled");
        $(".result-btn").removeClass("result-btn");
      }
      var question = "question" + stepChange; 
      $(question).addClass(question);
      if($(this).attr("setAnswer") <= 5) {
        mbti[0] += Number($(this).val()); 
      } else if ($(this).attr("setAnswer") <= 10 && $(this).attr("setAnswer") > 5) {
         mbti[1] += Number($(this).val()); 
      } else if ($(this).attr("setAnswer") <= 15 && $(this).attr("setAnswer") > 10) {
         mbti[2] += Number($(this).val()); 
      } else if ($(this).attr("setAnswer") <= 20 && $(this).attr("setAnswer") > 15) {
         mbti[3] += Number($(this).val()); 
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