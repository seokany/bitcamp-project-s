$(function() {
	$.getJSON(serverRoot + '/expert/board.json',
		{
			'pageNo': 1,
			'pageSize': 6, 
			'eno': eno
		}, function(ajaxResult) {
			var status = ajaxResult.status;
			if (status != "success") return; 
			
			var list = ajaxResult.data.list; 
			var board = $('.board');
			var template = Handlebars.compile($('#boardTemp').html()); 
			board.html(template({'list': list})); 
	});
});