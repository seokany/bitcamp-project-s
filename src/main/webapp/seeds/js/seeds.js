// 아래는 테스트를 위해서
// jsonFile에 직접 배열을 담고 있지만
// 실무에서는 아래코드가 $.ajax를 통해서
// 데이터를 받아오는 부분이라 생각하자.
var jsonFile = [{
  idx: 1,
  title: 'UI ITEM 1',
  content: 'This is a description of the item.'
}, {
  idx: 2,
  title: 'UI ITEM 2',
  content: 'This is a description of the item.'
}, {
  idx: 3,
  title: 'UI ITEM 3',
  content: 'This is a description of the item.'
}, {
  idx: 4,
  title: 'UI ITEM 4',
  content: 'This is a description of the item.'
}, {
  idx: 5,
  title: 'UI ITEM 5',
  content: 'This is a description of the item.'
}];

var procUI = function(json) {
  // 동적으로 추가한 엘리먼트를 어떤 요소 안에다가 추가할지 정해야 하는데
  // 우리는 이것을 부모요소라고 한다.
  // 아래는 id 속성이 `container`인 요소를 부모요소로 정했다.
  // 여기서 생각해보자.
  // 다른 개발자가 스타일 적용을 위해서
  // container를 wrapper로 바꾸면?
  // 사이드 이펙트 직행열차 탑승을 축하한다.
  var $container = $('#container');
  
  for(var idx in json) {
    var item = json[idx];
    
    // 아래는 추가 할 엘리먼트를 동적으로 생성하는 코드다.
    // 아래와 같은 로직은 HTML이 자바스크립트에 포함되어 있기 때문에
    // 가독성을 떨어트리고
    // 개발자는 하나의 UI를 수정하기 위해서 자바스크립트를 살펴봐야 한다.
    // 스타일 하나를 변경하더라도 아래 코드를 수정해야 한다.
    // UI가 복잡해질 수록 아래 코드는 복잡해질 것이다.
    var $element = $(
      
      // 아래 코드에서 data-idx 값으로
      // idx 키의 값을 전달하고 있다.
      // 이는 70번 라인에서 사용되고 있다.
      // 자바스크립트와 사용자화면이 연결되어 있지 않기에 발생하는 문제이다.
      // 예를들어 data-idx에서 data-key로 변경된다면
      // 사이드 이펙트 직행열차를 타게되는 것이다.
      '<div class="item" data-idx="' + item.idx + '">' +
        '<h3>' + item.title + '</h3>' +
        '<p>' + item.content + '</p>' +
      '</div>'
    );
    
    // 아래 이벤트는 사용자가 엘리먼트를 클릭하면
    // 해당 요소는 삭제된다.
    // 우리는 엘리먼트를 추가할 때마다 이 로직도 같이 추가해야 한다.
    // 맙소사
    $element.bind('click', function(event) {
      var $this = $(this);
      
      // 아래는 선택한 엘리먼트의 고유 값을 알아내는 로직이다.
      // 만약 선택한 요소를 통신을 통해
      // DB에서 삭제하고 싶을 때, idx와 같은 구분자를 전달할 것이다.
      var idx = $this.data('idx');
      console.log(idx);
      $this.remove();
    });
    
    $element.appendTo($container);
  }
};

// 다른 js 파일에서
// 비동기 통신을 하여 데이터를 받은 후
// 같은 UI에 엘리먼트를 추가 할 경우
// 재활용을 할경우 procUI를 사용 할 것이다.
procUI(jsonFile);