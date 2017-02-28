var $j = jQuery.noConflict();
$j.ajaxSetup({ cache: false });

var CurrentSet = 1;

$j(document).on('click', '#nextbut', function () {

	CurrentSet++;

	$j('.set' + (CurrentSet-1)).fadeOut(200, function() {
        $j('.set' + CurrentSet).fadeIn(200);
    });

    var progressValue = CurrentSet - 1;

    var sliderWidth = $j('.progress').width();
    var tickPos = sliderWidth / 10 * progressValue - 25;

    $j('.progress-tick').animate({
        left: tickPos + 'px'
    }, { duration: 300, queue: false });

    $j('.progress-bar').animate({
        width: (progressValue * 10) + '%'
    }, { duration: 300, queue: false });

    $j('.progress-tick').html(Math.round(progressValue * 10));

    var formPos = $j('#test-form').offset();
    var formPos2 = formPos.top;
    $j('html, body').animate({ scrollTop: formPos2 - 60 }, 500);

	if (CurrentSet == 10) {
        $j('.setnext').hide();
        $j('.setres').show();
    }

});

$j(document).on('click', '#submbut', function () {

    var sliderWidth = $j('.progress').width();
    var tickPos = sliderWidth - 25;

    $j('.progress-tick').animate({
        left: tickPos + 'px'
    }, 300);

    $j('.progress-bar').animate({
        width: '100%'
    }, 300);

    $j('.progress-tick').html('100');

	$j('#submbut').html('<span>PLEASE WAIT...</span>');
	$j("#submbut").attr('disabled','disabled');
	$j('#test-form').submit();

});

function setAnswer(index, newval) {
    $j('#a' + index).val(newval);
}

$j(document).on('click', '.decision .caption.left', function () {
    $j(this).next().children('.option').removeClass('active');
    $j(this).next().children('.option.agree.max').addClass('active');
});

$j(document).on('click', '.decision .caption.right', function () {
    $j(this).prev().children('.option').removeClass('active');
    $j(this).prev().children('.option.disagree.max').addClass('active');
});

$j('#facebook-share-link').click(function(e) {

	e.preventDefault();

	FB.ui({
		method: 'share',
		href: 'https://www.16personalities.com/free-personality-test',
		},
		function(response){}
	);

});