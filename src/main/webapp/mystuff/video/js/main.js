
var currPageNo = 1;
var pageSize = 5;

loadList(currPageNo, 5);

$('#new-btn').click(function(event) {
	event.preventDefault(); 
	location.href = 'view.html';
});

$('#prevPgBtn').click(function() {
  if (currPageNo > 1) {
    loadList(--currPageNo, 5);
  }
});
  
$('#nextPgBtn').click(function() {
  loadList(++currPageNo, 5);
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


function loadList(pageNo, pageSize) {
	  $.getJSON(serverRoot + '/video/list.json', 
	      {
	      "pageNo": pageNo,
	      "pageSize": pageSize
	    }, 
	    function(ajaxResult) {
	      var status = ajaxResult.status;
	      if (status != "success")
	        return;
	      
	      var list = ajaxResult.data.list;
	      var tbody = $('#list-table > tbody');
	      var template = Handlebars.compile($('#trTemplate').html());
	      tbody.html(template({"list": list}));
	      
	      $('.name-link').click(function(event) {
	        event.preventDefault();
	        location.href = 'view.html?memberNo=' + $(this).attr("data-no");
	      });
	      
	      preparePagingButton(ajaxResult.data.totalCount);
	  });  
	}