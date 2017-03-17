/*토글메뉴*/

$(function () {

	console.log("헤더요");
  var isopen_usermenu = false;
  /**
   * Open and close usermenu event
   */
  $(".user-menu-toggle").on("click", function () {
    if(!isopen_usermenu) {
		console.log("헤더클릭요");
      // Show menu
      $(".user-menu").css("display", "block");

      isopen_usermenu = true;
    } else {
		console.log("헤더클릭안요");
      // Close menu
		$(".user-menu").css("display", "none");

      isopen_usermenu = false;
    }
  });
});


