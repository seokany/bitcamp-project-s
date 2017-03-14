//var currPageNo = 1;
//var pageSize = 5;
//
loadList();
//
//$('#new-btn').click(function(event) {
//	event.preventDefault(); 
//	location.href = 'view.html';
//});
//
//$('#prevPgBtn').click(function() {
//  if (currPageNo > 1) {
//    loadList(--currPageNo, 4);
//  }
//});
//  
//$('#nextPgBtn').click(function() {
//  loadList(++currPageNo, 4);
//});
//  
//function preparePagingButton(totalCount) {
//  // 현재 페이지 번호가 1이면 이전 버튼을 비활성시킨다.
//  if (currPageNo <= 1) {
//    $('#prevPgBtn').attr('disabled', true);
//  } else {
//    $('#prevPgBtn').attr('disabled', false);
//  }
//  
//  var maxPageNo = parseInt(totalCount / pageSize);
//  if ((totalCount % pageSize) > 0) {
//    maxPageNo++;
//  }
//  
//  if (currPageNo >= maxPageNo) {
//    $('#nextPgBtn').attr('disabled', true); 
//  } else {
//    $('#nextPgBtn').attr('disabled', false);
//  }
//  
//  // 현재 페이지 번호를 출력한다.
//  $('#pageNo').text(currPageNo);
//}

function loadList() {
//function loadList(pageNo, pageSize) {
	$.getJSON(serverRoot + '/likes/person.json', 
//	    {
//		  "pageNo": pageNo,
//		  "pageSize": pageSize
//		}, 
		function(ajaxResult) {
		  var status = ajaxResult.status;
		  if (status != "success")
			  return;
		  
		  var list = ajaxResult.data.list;
		  var section = $('.persons');
		  var template = Handlebars.compile($('#trTemplate').html());
		  section.html(template({"list": list}));
		  
		  listPlay();
		  
//		  $('.name-link').click(function(event) {
//		  	event.preventDefault();
//		  	location.href = 'view.html?memberNo=' + $(this).attr("data-no");
//		  });
		  
//		  preparePagingButton(ajaxResult.data.totalCount);
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