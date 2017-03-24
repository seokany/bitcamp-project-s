< script >
    //Load the SDK asynchronously
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js.fjs);
    }(document, 'script', 'facebood-jssdk'));
window.fbAsyncInit = function () {
FB.init({
    appId: 1135624536565167
    , cookie: true
    , xfbml: true
    , version: 'v2.8'
});
};
    //로그인 여부 확인
    function checkLoginState() {
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    }
    function statusCahngeCallback(response) {
        console.log('response를 통해 다양한 정보를 확인할 수 있습니다.');
        console.log(response);
        if (response.status === 'connected') {
            console.log('사용자가 Facebook에 로그인하고 앱에 로그인했습니다.');
            FB.api('/me', function(response) {
                console.log('Successful login for: ' + response.name);
            });
        } else if (response.status === 'net_authorized') {
            console.log('사용자가 Facebook에 로그인했지만 앱에 로그인하지 않았습니다.');
            
        } else {
            console.log('사용자가 Facebook에 로그인 하지 않았으므로 앱에 로근인했는지 알 수 없습니다. ');
        }
    }


</script>

