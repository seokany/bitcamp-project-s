$('#test1').on('click', function() {
  $(".wrapper").removeClass("dashboard");
  $(".wrapper").load("json.mbti.html #container");
});

/*$('.result-btn').on('click', function() {
  $(".wrapper").addClass("dashboard");
  $(".wrapper").load("mbti-result-istp.html .wrapper");
});
*/