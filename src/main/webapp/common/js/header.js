/*토글메뉴*/

$(function() {
  
  var isopen_usermenu = false;
  var isopen_messagemenu = false;
  
  $(document.body).on("click", function(e) {
    var target = $(e.target); 
    console.log(e.target.classList[0]);
    if (!target.parent().hasClass("toggle")) {
      $(".user-menu").hide();
      $(".message-menu").hide();
    } else {
      if (e.target.classList[0] == "menu-btn") {
        
        if (!isopen_usermenu) {
        $(".message-menu").hide();
        $(".user-menu").show();
        isopen_usermenu = true;
        isopen_messagemenu = false;
        
      } else {
            $(".user-menu").hide();
            isopen_usermenu = false;
          }
      }
    
      if (e.target.classList[0] == "message-btn") {
        
        if (!isopen_messagemenu) {
        $(".user-menu").hide();
        $(".message-menu").show();
        isopen_messagemenu = true;
        isopen_usermenu = false;
        
        } else {
            $(".message-menu").hide();
            isopen_messagemenu = false;
        }
      }
      
    }
  });
  
});




