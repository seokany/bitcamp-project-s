$(function(){
  
  $("nav.tabs li a").click(function(){
    $(" nav.tabs li .active").removeClass("active");
    $(this).addClass("active");
    
  });
      
  $("header nav li a").click(function(){
    $("header nav li .active").removeClass("active");
    $(this).addClass("active");
    
  });
});



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

      //Change arrow
      $(".user-menu-toggle .simple-arrow").removeClass("fa-chevron-down").addClass("fa-chevron-up");
      
      isopen_usermenu = true;
    } else {

      // Close menu
      $(".user-menu").hide();

      //Change arrow
      $(".user-menu-toggle .simple-arrow").removeClass("fa-chevron-up").addClass("fa-chevron-down");

      isopen_usermenu = false;
    }
  });
});


