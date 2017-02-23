//Register module
angular.module('chat', [])
//Add controller
.controller('chatController', ['$scope', function($scope) {
  //Add default messages to object
  $scope.messages = [
      {text:'Hello there how is your day going?', from: 'message-local'},
      {text:'Top of the morning to you governor.', from:'message-remote'}
  ];
  //Function to add message
  $scope.addMessage = function() {
    
    //Check if message is empty and stop function
    if($scope.chatText === '' || $scope.chatText === undefined ){
     //message empty focus input to write message
      angular.forEach(document.querySelectorAll('#message-input'), function(elem) { elem.focus(); });
      return false;
    }
    //message ok push message to $scope.messages
    $scope.messages.push({text:$scope.chatText , from:'message-local'});
      //reset input
      $scope.chatText = '';
  }
  //run addMessage on pressing enter.
  $scope.triggerSubmit = function() { $scope.addMessage(); }
  
  }])
//Add directive to handle enter key
.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                event.preventDefault();
            }
        });
    };
});

