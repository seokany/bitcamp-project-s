$(document).ready(function () {

;(function ($, window, document, undefined) {
$.fn.cf = function () {
  return this.each(function () {
  var 
    $this = $(this),
    $ccbx = $this.find('.label-checkbox'),
    checkbox = $ccbx.find(':checkbox'),
    innerEls = '<span><i></i></span>';

  $ccbx.find('input').wrap(innerEls);

  $ccbx.on('click', function (e) {
    e.preventDefault();
    var 
      $this = $(this);
      $this.toggleClass('checked');
      $this.find(':checkbox').attr('checked', $this.hasClass('checked'));
  });

  $this.find('[checked="checked"]').closest('.mento-set-box').addClass('checked');

});
}
})(jQuery, window, document);
  /* fire cf */
  $('.mento-set-form').cf();
}); //end doc ready
