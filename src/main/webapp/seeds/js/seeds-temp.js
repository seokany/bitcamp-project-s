$( function() {
  
  // 서버에서 로그인 사용자 정보를 가져온다.
  $.getJSON(serverRoot + '/auth/loginUser.json', function(ajaxResult) {
    $('#test1').on('click', function() {
      console.log(ajaxResult.data.memberNo);
      console.log("status " + ajaxResult.status);
    if (ajaxResult.status == "fail") { // 로그인 되지 않았으면,
      console.log("로그인되지 않은 사용자다"); 
    // 검사지 페이지로 이동한다.
      $(".wrapper").removeClass("dashboard");
      $(".wrapper").load("json.mbti.html #container");
    
    } else { // 로그인이 되었으면, ===> 검사 유무를 조사한다.????????여기 모르겠음!!!!!!!!
      console.log("로그인한 사용자다");
      $.getJSON(serverRoot + '/seeds/list.json',
          {
            "menteeNo" : ajaxResult.data.memberNo,
            "type" : 'mbti'
          }, function(ajaxResult) {
      
            console.log("넘어오니 " + ajaxResult.status );
        if(ajaxResult.status == "success") { // 검사했으면? 검사결과 페이지로 이동
          $(".wrapper").load("mbti-result-istp.html .test-result");
        } else { //검사안했으면? 검사페이지로 이동
          $(".wrapper").load("json.mbti.html #container");
        }
      });
    }
    });
  });
});
 

/*
$('#test1').on('click', function() {
  $(".wrapper").removeClass("dashboard");
  $(".wrapper").load("json.mbti.html #container");
});
*/