$( function() {
  
  // 서버에서 로그인 사용자 정보를 가져온다.
  $.getJSON(serverRoot + '/auth/simpleLoginUser.json', function(ajaxResult) {
	  
	  var memberNo = ajaxResult.data.memberNo;
	  
    $(document.body).on('click', '#test1', function() {
      console.log("클릭이벤트 발생");
      console.log(ajaxResult.data.memberNo);
      console.log("status " + ajaxResult.status);
    if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
      console.log("로그인되지 않은 사용자다"); 
    // 검사지 페이지로 이동한다.
      $(".seeds").removeClass("seeds-call");
      $(".seeds").load("seeds/json.mbti.html #container");
    
    } else { // 로그인이 되었으면, ===> 검사 유무를 조사한다.
      console.log("로그인한 사용자다");
      $.getJSON(serverRoot + '/seeds/list.json',
    
          {
            "menteeNo" : ajaxResult.data.memberNo,
            "type" : 'mbti'
          }, function(ajaxResult) {
      
            console.log("검사상태 " + ajaxResult.status );
        if(ajaxResult.status == "success") { // 검사했으면? 검사결과 페이지로 이동하고 데이터를 가져온다.
          $(".seeds").load("seeds/mbti-result-istp.html .test-result",function(){
        	  
        	  //학생의 검사정보 가져오기
        	  $.getJSON(serverRoot + '/seeds/detail.json?memberNo=' + memberNo, function(ajaxResult) {
        		  var status = ajaxResult.status;
        		  
        		  if (status != "success") {
        			  alert(ajaxResult.data);
        			  return;
        		  }
        		  var result = ajaxResult.data;
            	  console.log("result값은?" + result.resultResult);
            	  
            	  $('#result').text(result.resultResult);
        	  });
        	  
        	  
        	  //가져온 데이터를 해당영역에 뿌리기~~~~~??!!!
        	  
        	  
        	  
        	  
        	  
          });
        } else { //검사안했으면? 검사페이지로 이동
          $(".seeds").load("seeds/json.mbti.html #container");
        }
      });
    }
    });
    
  });
});
 

