var jsonFile = [{
    idx: 1,
    title: 'MBTI'
}, {
    idx: 2,
    title: 'values'
}, {
    idx: 3,
    title: 'interest'
}, {
    idx: 4,
    title: 'job'
}];

var procUI = function(json) {
    
    var $container = $('#container');
    
    for(var idx in json) {
        var item = json[idx];
        
        var $element = $(
            '<div class = "item" data-idx="' + item.idx + '">' +
                '<h3>' + item.title + '</h3>' + '</div>'
        );
        
        $element.bind('click', function(event) {
            var $this = $(this);
            
            var idx = $this.data('idx');
            console.log(idx);
            $this.zoom();
        });
        
        $element.appendTo($container);
    }
};

procUI(jsonFile);