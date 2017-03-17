/*토글메뉴*/

$(function () {

  var isopen_usermenu = false;
  /**
   * Open and close usermenu event
   */
  $(".user-menu-toggle").on("click", function () {
    if(!isopen_usermenu) {

      // Show menu
      $(".user-menu").show();

      isopen_usermenu = true;
    } else {

      // Close menu
      $(".user-menu").hide();

      isopen_usermenu = false;
    }
  });
});


