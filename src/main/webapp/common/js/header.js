/*토글메뉴*/

$(function () {

  var isopen_usermenu = false;
  var isopen_messagemenu = false;
  
  /* Open and close usermenu event*/
  $(".user-menu-toggle").on("click", function () {
    if(!isopen_usermenu) {
      
      // Show menu
      $(".message-menu").hide();
      $(".user-menu").show();

      isopen_usermenu = true;
      isopen_messagemenu = false;
    } else {
      
      // Close menu
		$(".user-menu").hide();

      isopen_usermenu = false;
    } 
  });
  
  $(".message-menu-toggle").on("click", function () {
    if(!isopen_messagemenu) {

      // Show menu
      $(".user-menu").hide();
      $(".message-menu").show();

      isopen_messagemenu = true;
      isopen_usermenu = false;
    } else {

      // Close menu
      $(".message-menu").hide();

      isopen_messagemenu = false;
    } 
  });
  
  
/*  $("body").on("click", function (e) {
    if(e.target.className != "user-menu-toggle" && e.target.className != "message-menu-toggle" 
      && e.target.className != "sing-in on") {
      
      console.log(e.target.className);
      // Close menu
      $(".user-menu").hide();
      $(".message-menu").hide();

      isopen_usermenu = false;
      isopen_messagemenu = false;
    } 
  });*/

  
});




