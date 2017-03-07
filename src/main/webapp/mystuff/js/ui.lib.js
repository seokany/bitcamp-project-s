/*
 * UI Javascript Library
 * @Date : 2013-12-04
 * @Author : Jaeho Sim(bvlgaricl@aintlab.com)
 *
 **/

// resize Performance Up
(function($,sr){
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('smartResize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartResize');

// Console for IE
if (typeof console === "undefined" || typeof console.log === "undefined") {	console = {}; console.log = function(msg) {	alert(msg);};}

// cookies
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
function createInstantCookie(cookieName, cookieValue) {
	document.cookie = cookieName + "=" + escape(cookieValue) + "; path=/;";
}
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

// mobile Check
function UIisMobile() {
	return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)))
}

// Viewport
function Viewport() {
	var e = window, a = 'inner';
	if (!('innerWidth' in window )) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

// Gnb
function Gnb() {

	var Wrapper = $('.Gnb')
		, List = Wrapper.find('.List')
		, Depth1Trigger = List.children('li')
		, Depth2 = List.children('li').children('ul')
		, Bg = Wrapper.find('.Bg')
		, GnbTrigger = $('.GnbOpener').find('button')
		, BgTop = 0
		, Depth2List = 45
		, MotionDepth2
		, MotionBg
		, WinWidth = Viewport().width
		, IsMobileActive = false
		, IsDesktopActive = false
		, NewWinWidth;

	Init();

	if ( !UIisMobile() ) {
		$(window).on({
			resize : function() {
				WinWidth = Viewport().width;
				Init();
			}
		});
	} else {
		var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

		window.addEventListener(orientationEvent, function() {
			WinWidth = Viewport().width;
			Init();
		}, false);
	}

	// Init
	function Init() {
		if ( WinWidth < 980 ) {
			MobileInit();
		} else {
			DesktopInit();
		}
	}

	// MobileInit
	function MobileInit() {

		if ( !IsMobileActive ) {

			List.off();
			List.css('height', 'auto').hide();
			List.children('ul').children('li').off();
			Depth1Trigger.children('a').removeClass('Current');
			Depth2.hide();
			Wrapper.off();

			MobileBinding();
		}

	}

	// DesktopInit
	function DesktopInit() {

		if ( !IsDesktopActive ) {

			List.show();
			GnbTrigger.hammer().off('tap.gnb');
			Depth1Trigger.children('ul').show();
			Depth1Trigger.children('a').hammer().off('tap.depth1');
			Depth1Trigger.children('a').removeClass('Current');

			DesktopBinding();
		}

	}

	// MobileBinding
	function MobileBinding() {

		IsMobileActive = true;
		IsDesktopActive = false;

		GnbTrigger.hammer().on({
			'tap.gnb' : function(e) {

				e.gesture.preventDefault();

				if ( List.is(':hidden') ) {
					List.stop().slideDown(150);
				} else {
					List.stop().slideUp(150);
				}

				return false;

			}
		});

		Depth1Trigger.each(function() {

			var ThisDepth2 = $(this).children('ul')

			$(this).children('a').hammer().on({
				'tap.depth1' : function() {

					if ( ThisDepth2.is(':hidden') ) {
						Depth2.not(ThisDepth2).stop().slideUp(200);
						ThisDepth2.slideDown(200);

						Depth1Trigger.children('a').removeClass('Current');
						$(this).addClass('Current');
					} else {
						ThisDepth2.stop().slideUp(200);
						$(this).removeClass('Current');
					}
					return false;
				}
			});

			$(this).not('.Utils').children('a').on({
				click : function() {
					return false;
				}
			});
		});

	}

	// DeskTopBinding
	function DesktopBinding() {

		IsDesktopActive = true;
		IsMobileActive = false;

		List.on({
			mouseenter : function() {
				TweenMax.to(Depth2, 0.2, { top : 45, ease : Power2.easeIn });
				TweenMax.to(Bg, 0.2, { top : 0, ease : Power2.easeIn });
			}
		});

		Wrapper.on({
			mouseleave : function() {
				TweenMax.to(Depth2, 0.2, { delay : 0.1, top : -335, ease : Power2.easeIn });
				TweenMax.to(Bg, 0.2, { delay : 0.1, top : -331, ease : Power2.easeIn });
			}
		});
	}

}

// PrettySelect
function PrettySelect() {

	var Object = $('.PrettySelect');

	Object.each(function(oi) {

		// check
		var OriginElement = $(this)
			, OriginID = OriginElement.attr('id');

		// check exist
		if ( OriginElement.prev('.PrettySelect').length ) {
			OriginElement.prev('.PrettySelect').remove();
		}

		var OriginElementOption = OriginElement.find('option')
			, OriginElementWidth = OriginElement.width()
			, NewSelectElement = $('<div class="PrettySelect"></div>').insertBefore(OriginElement)
			, NewSelectElementHTML = '<p class="selected"><a href="#"><span class="text"></span><span class="ico"></span></a></p>'
							+ '<ul class="optionList"></ul>'
			, OptionHTML = ''
			, SelectedOptionElement, SelectedOptionElementTrigger, SelectedOptionElementIco, SelectedOptionElementText, OptionListElement, OptionTriggerElement, OptionSelectedElement
			, BodyHeight, NewSelectElementTop, NewSelectElementHeight, OptionListElementHeight, NewSelectElementLimit, NewSelectElementWidth
			, MotionSpeed = 100
			, OptionElement
			, IsUpside = false;

		// set HTML to _NewSelectElement
		NewSelectElement.html(NewSelectElementHTML).addClass('PrettySelect'+(oi+1)).attr('id','Pretty_'+OriginID);

		// set Variables
		SelectedOptionElement = NewSelectElement.find('p.selected');
		SelectedOptionElementTrigger = SelectedOptionElement.children('a');
		SelectedOptionElementIco = SelectedOptionElementTrigger.find('.ico');
		SelectedOptionElementText = SelectedOptionElement.find('span.text')
		OptionListElement = NewSelectElement.find('ul.optionList');

		// create listItem
		OriginElementOption.each(function() {
			var ThisText = $(this).text();
			if ( $(this).is(':selected') ) {
				OptionHTML += '<li class="selected"><a href="#">' + ThisText + '</a></li>';
			} else {
				OptionHTML += '<li><a href="#">' + ThisText +'</a></li>';
			}
		});

		OptionListElement.html(OptionHTML);
		OptionElement = OptionListElement.find('li');
		OptionElement.first().addClass('first');
		OptionElement.last().addClass('last');
		OptionTriggerElement = OptionElement.find('a');
		OptionSelectedElement = OptionElement.filter('.selected').find('a')
		SelectedOptionElementText.text(OptionSelectedElement.text());

		// CalcurateWidth
		Calcurate();

		// Binding
		Binding();
		DocumentBinding();

		// CalcurateWidth
		function Calcurate() {

			OptionListElement.show();

			BodyHeight = $('body').height()
			NewSelectElementTop = parseInt(NewSelectElement.offset().top, 10)
			NewSelectElementHeight = parseInt(NewSelectElement.height(), 10)
			OptionListElementHeight = parseInt(OptionListElement.height(), 10)
			NewSelectElementLimit = NewSelectElementTop + NewSelectElementHeight + OptionListElementHeight;
			NewSelectElementWidth = OriginElementWidth + SelectedOptionElementIco.width();

			//if ( $('html').hasClass('safari') ) _NewSelectElementWidth += _SelectedOptionElementIco.width();

			if ( BodyHeight < NewSelectElementLimit ) {
				NewSelectElement.addClass('upSide');
				IsUpside = true;
			}

			//NewSelectElement.width(NewSelectElementWidth);

			OptionListElement.hide();
			OriginElement.hide();
		}

		// _Binding
		function Binding() {

			// open _OptionListElement
			SelectedOptionElementTrigger.hammer().on({
				tap : function(e) {

					e.gesture.preventDefault();

					if ( OptionListElement.is(':hidden') ) {
						ShowOptionListElement();
					} else {
						HideOptionListElement();
					}
					return false;
				}
			});

			// option click
			OptionTriggerElement.each(function(i) {
				var ThisValue = $(this).text();
				$(this).hammer().on({
					tap : function(e) {

						e.gesture.preventDefault();

						OptionElement.removeClass('selected');
						$(this).parent().addClass('selected');
						SelectedOptionElementText.text(ThisValue);
						ReturnValueToOriginElement(i);
						HideOptionListElement();
						return false;
					}
				});
			});
		}

		// show OptionListElement
		function ShowOptionListElement() {

			var AllSelectELement = $('.PrettySelect');

			AllSelectELement.find('p.selected').find('>a').removeClass('open');
			SelectedOptionElementTrigger.addClass('open');

			AllSelectELement.not(NewSelectElement).each(function() {
				var ThisOptionListElement = $(this).find('.optionList');
				if ( ThisOptionListElement.is(':visible') ) {
					ThisOptionListElement.hide();
				}
			});
			OptionListElement.show();
		}


		// hide OptionListElement
		function HideOptionListElement() {
			SelectedOptionElementTrigger.removeClass('open');
			OptionListElement.hide();
		}

		// return value to _OriginElement
		function ReturnValueToOriginElement(order) {
			OriginElementOption.removeAttr('selected');
			OriginElementOption.eq(order).attr('selected','selected');
			OriginElement.change();
		}

		// document _Binding
		function DocumentBinding() {
			$(document).hammer().on({
				tap : function(e) {

					e.gesture.preventDefault();

					var e = e || window.event
						, Target = $(e.relatedTarget);

					if ( !Target.parents('.PrettySelect').length ) {
						HideOptionListElement();
					}
				}
			});
		}

	});
}


// DescSlider
function DescSlider() {

	var Wrap = $('.Article.Type1');

	Wrap.each(function() {

		var	This = $(this)
			, DescFrame = This.find('.DescSlider > .innerFrame')
			, DescIndicator = This.find('.DescSliderIndicator > button');

		DescFrame.flexibleSlider({
			//autoSlide : true,
			snapToChildren: true,
			//desktopClickDrag: true,s
			keyboardControls: true,
			navSlideSelector: This.find('.DescSliderIndicator > button'),
			onSlideChange: slideChange,
			onSlideComplete : slideComplete,
			onSliderResize : sliderResize
		});

		$(this).find('i').remove();

		function slideChange(args) {
			DescIndicator.removeClass('active');
			DescIndicator.eq(args.currentSlideNumber - 1).addClass('active');
		}

		function slideComplete(args) {

		}

		function sliderResize() {

		}

	});
}

// ArticleType1
function ArticleType1() {

	var Item = $('.Article.Type1').not('.NoFunc');

	Item.each(function() {

		var Wrap = $(this)
			, DescSlider = Wrap.find('.DescSlider > .innerFrame')
			, ListSect = Wrap.find('.ListSect')
			, Summary = Wrap.find('.Summary')
			, Opener = Wrap.find('.TriggerFold > button')
			, ThumbnailImage = Wrap.find('.Thumbnail')
			, IsAnimating = false
			, Desc = Wrap.find('.DescSect');

		ListSect.attr('data-originMargin', ListSect.css('marginRight'));

		Summary.attr('data-originHeight', Summary.height());

		Opener.hammer().on({
			tap : function(e) {
				OpenCloseFunc(e);
			}
		});

		Summary.hammer().on({
			tap : function(e) {
				OpenCloseFunc(e);
			}
		});

		DescCheck();

		if ( !UIisMobile() ) {
			$(window).on({
				resize : function() {
				 DescCheck();
				}
			});
		} else {
			var supportsOrientationChange = "onorientationchange" in window,
			orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

			window.addEventListener(orientationEvent, function() {
				DescCheck();
			}, false);
		}

		function OpenCloseFunc(e) {

			e.gesture.preventDefault();

			if ( Desc.length ) {
				IsAnimating = true;

				if ( Desc.is(':hidden') ) {

					if ( Viewport().width > 767 ) {
						TweenMax.to(ThumbnailImage, 0.2, { right : -ThumbnailImage.width() });
					}

					TweenMax.to(Opener.find('img'), 0, { marginTop : 0 });

					//TweenMax.to(ListSect, 0, { marginRight : 0 });
					TweenMax.to(Summary, 0, { height : 'auto' });

					if ( Viewport().width > 768 ) {
						Desc.css('visibility','hidden').slideDown(0, function() {
							DescSlider.flexibleSlider('update');
							DescSlider.find('i').remove();
							$(this).css('visibility','visible');
							IsAnimating = false;
						});
					} else {

					}

				} else {
					if ( Viewport().width > 767 ) {
						TweenMax.to(ThumbnailImage, 0.2, { right : 0 });
						Desc.slideUp(0, function() {
							IsAnimating = false;
							TweenMax.to(Opener.find('img'), 0, { marginTop : -21  });
							//ListSect.removeAttr('style');
							Summary.removeAttr('style');

						});
					} else {
						if ( !Summary.hasClass('open') ) {
							TweenMax.to(Opener.find('img'), 0, { marginTop : 0 });
							Summary.addClass('open');
							TweenMax.to(Summary, 0, { height : 'auto' });
						} else {
							TweenMax.to(Opener.find('img'), 0, { marginTop : -21  });
							Summary.removeClass('open');
							Summary.removeAttr('style');

						}
					}

				}


			}
		}

		function DescCheck() {

			if ( Viewport().width < 767 ) {
				Desc.show();
				DescSlider.flexibleSlider('update');
				DescSlider.find('i').remove();
			} else {
				Desc.hide();
			}

		}

	});
}

// PathIndicator
function PathIndicator() {

	var Wrap = $('.PathIndicator')
		, Trigger = Wrap.children('ul').children('li').children('a')
		, SubWrap = Trigger.next('ul');

	Trigger.parent().last().addClass('Last');

	Trigger.each(function() {

		var ThisSubWrap = $(this).next('ul');

		$(this).hammer().on({
			tap : function(e) {

				e.gesture.preventDefault();

				if ( ThisSubWrap.is(':hidden') ) {
					SubWrap.stop(true, true).slideUp(200);
					ThisSubWrap.slideDown(200);
				} else {
					ThisSubWrap.stop(true, true).slideUp(200);
				}
			}
		});
	});

	$(document).hammer().on({
		tap : function(e) {
			e.gesture.preventDefault();

			var e = e || window.event
				, Target = $(e.target);

			if ( !Target.parents('.PathIndicator').length ) {
				SubWrap.stop(true, true).slideUp(200);
			}

		}
	});

}

// IntroSlider
function IntroSlider() {

	var Wrap = $('.IntroKeyVisual')
		, Slider = Wrap.find('.SliderWrap > .innerFrame')
		, IndicatorWrap = Wrap.find('.SliderIndicator')
		, Indicator = IndicatorWrap.find('button');

	Slider.flexibleSlider({
		//autoSlide : true,
		snapToChildren: true,
		//desktopClickDrag: true,
		keyboardControls: true,
		navSlideSelector: Indicator,
		onSlideChange: slideChange,
		onSlideComplete : slideComplete,
		onSliderResize : sliderResize
	});

	Slider.find('i').remove();

	function slideChange(args) {
		Indicator.removeClass('active');
		Indicator.eq(args.currentSlideNumber - 1).addClass('active');
	}

	function slideComplete(args) {

	}

	function sliderResize() {
	}

}

// ProductSlider
function ProductSlider() {

	var Wrap = $('.ProductView')
		, Slider = Wrap.find('.SliderWrap > .innerFrame')
		, IndicatorWrap = Wrap.find('.SliderIndicator')
		, Indicator = IndicatorWrap.find('button');

	Slider.flexibleSlider({
		//autoSlide : true,
		snapToChildren: true,
		//desktopClickDrag: true,
		keyboardControls: true,
		navSlideSelector: Indicator,
		onSlideChange: slideChange,
		onSlideComplete : slideComplete,
		onSliderResize : sliderResize
	});

	Slider.find('i').remove();

	function slideChange(args) {
		Indicator.removeClass('active');
		Indicator.eq(args.currentSlideNumber - 1).addClass('active');
	}

	function slideComplete(args) {

	}

	function sliderResize() {
	}

}

// HistorySlider
function HistorySlider() {

	var Wrap = $('.HistorySlider')
		, Slider = Wrap.find('.SliderWrap > .innerFrame')
		, IndicatorWrap = Wrap.find('.SliderIndicator')
		, Indicator = IndicatorWrap.find('button');

	Slider.flexibleSlider({
		//autoSlide : true,
		snapToChildren: true,
		//desktopClickDrag: true,
		keyboardControls: true,
		navSlideSelector: Indicator,
		onSlideChange: slideChange,
		onSlideComplete : slideComplete,
		onSliderResize : sliderResize
	});

	Slider.find('i').remove();

	function slideChange(args) {
		Indicator.removeClass('active');
		Indicator.eq(args.currentSlideNumber - 1).addClass('active');
	}

	function slideComplete(args) {

	}

	function sliderResize() {
	}

}

// ToTop
function ToTop() {

	var Trigger = $('.ToTop');

	Trigger.hammer().on({
		tap : function(e) {

			e.gesture.preventDefault();

			$("html, body").animate({
				"scrollTop" : 0
			}, 400);
		}
	});

	Trigger.on({
		click : function() {
			return false;
		}
	});

}

// HiddenMobile
function HiddenMobile() {

	var Wrap = $('.HiddenMobile');
	var Element = $('<div class="Warning" />');

	if ( Wrap.hasClass('Type1') ) {
		//Element.text('가로넓이 1024px 이하에서는 노출되지 않는 컨텐츠입니다.');
	} else {
		//Element.text('가로넓이 768px 이하에서는 노출되지 않는 컨텐츠입니다.');
	}

	Element.appendTo(Wrap);
}

// MemberSelect
function MemberSelect() {

	var Wrap = $('.MemberInfo.Type1');

	Wrap.each(function() {

		var This = $(this)
			, ThumbWrap = This.find('.Thumbnail')
			, ThumTrigger = ThumbWrap.find('li')
			, Big = This.find('.Portrait').find('.Img')
			, Info = This.find('.Info');

		ThumTrigger.each(function(i) {

			var ThisTrigger = $(this);

			$(this).find('a').hammer().on({
				tap : function(e) {
					e.gesture.preventDefault();

					ThumTrigger.removeClass('Current');
					ThisTrigger.addClass('Current');

					Big.hide();
					Big.eq(i).show();

					Info.hide();
					Info.eq(i).show();

					return false;
				}
				, click : function() {
					return false;
				}
			});

		});

	});

}

// TableType1
function TableType1() {

	var Table = $('.TableType.Type1');

	Table.each(function() {
		var Tbody = $(this).find('tbody')

		Tbody.find('tr:odd').addClass('Bg');
	});

}

// LayerPop
function LayerPop() {

	var Trigger = $('.PopTrigger')
		, Dimm = $('.DimmLayer');

	$(window).resize(function() {
		if ( Viewport().width < 980 ) {
			if ( $('#recruitManage').is(':visible') ) {
				Dimm.stop().fadeOut(100);
				$('#recruitManage').stop().fadeOut(100);
			}
		}
	});

	Trigger.each(function() {

		var ThisLayer = $($(this).attr('href'))
			, Closer = ThisLayer.find('.Button.Closer');

		ThisLayer.appendTo('body');

		$(this).hammer().on({
			tap : function(e) {
				e.gesture.preventDefault();

				if ( $(this).attr('href') == '#recruitManage' ) {
					if ( Viewport().width < 980 ) {
						alert('가로 넓이 1024px 이하에서는 노출되지 않는 컨텐츠입니다.');
					} else {
						Dimm.fadeIn(100);
						ThisLayer.fadeIn(150);
					}
				} else {
					Dimm.fadeIn(100);
					ThisLayer.fadeIn(150);
				}

				return false;
			}
		});

		$(this).on({
			click : function() {
				return false;
			}
		});

		Closer.hammer().on({
			tap : function(e) {
				e.gesture.preventDefault();

				Dimm.stop().fadeOut(100);
				ThisLayer.stop().fadeOut(100);

				return false;
			}
		});

		Closer.on({
			click : function() {
				return false;
			}
		});

	});

}

// DatePicker
function DatePicker() {

	$.datepicker.regional['ko'] = {
		closeText: '닫기',
		prevText: '이전달',
		nextText: '다음달',
		currentText: '오늘',
		monthNames: ['1월','2월','3월','4월','5월','6월',
		'7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월',
		'7월','8월','9월','10월','11월','12월'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		weekHeader: 'Wk',
		dateFormat: 'yy-mm-dd',
		firstDay: 0,
		isRTL: false,
		duration:200,
		showAnim:'fadeIn',
		showMonthAfterYear: true,
		yearSuffix: '년'
	};

	$.datepicker.setDefaults($.datepicker.regional['ko']);

	$('.DatePicker').datepicker({
		 showOn: 'button'
		 , buttonImage: '/images/ico/ico_calendar01.png'
	});

}

// TableRow
function TableRow() {

	var AddWrap = $('.AddTrigger');

	AddWrap.each(function() {

		var This = $(this)
			, AddTrigger = This.find('.Add')
			, ResetTrigger = This.find('.Rest')
			, ThisTable = This.next('.TableType').find('tbody')
			, CopyOrigin = ThisTable.find('.CopyOrigin')
			, RowLength = 1
			, Remover = ThisTable.find('.Button.Closer01')
			, CopiedObj
			, OriginHTML = '';

		// Copy HTML from Origin TR
		CopyOrigin.each(function(i) {
			var ThisClone = $(this).clone().removeClass('CopyOrigin')
				, ThisHTML = ThisClone.wrapAll("<div />").parent().html();

			OriginHTML += ThisHTML;
		});

		// DatePicker
		setTimeout(function() {
			//if ( $('.DatePicker').length ) DatePicker();
		}, 100);

		// Binding
		Binding();

		// Add
		AddTrigger.on({
			click : function() {

				AddRow();

				return false;
			}
		});

		// Reset
		ResetTrigger.on({
			click : function() {

				ResetRows();

				return false;
			}
		});

		// AddRow
		function AddRow() {

			ThisTable.append(OriginHTML);

			Remover = ThisTable.find('.Button.Closer01');

			/*
			$('.DatePicker').removeClass('HasDatepicker').datepicker({
				 showOn: 'button'
				 , buttonImage: '/images/ico/ico_calendar01.png'
			});
			*/

			Binding();
		}

		// ResetRows
		function ResetRows() {
			if ( ThisTable.find('tr').not('.CopyOrigin').length > 0 ) {
				if ( confirm('정말 초기화하시겠습니까?') ) {
					ThisTable.find('tr').not('.CopyOrigin').remove();
				}
			} else {
				alert('첫번째 줄은 삭제할 수 없습니다.');
			}
		}

		// Binding
		function Binding() {
			Remover.off().on({
				click : function() {
					var ThisRow = $(this).parent('td')
						, ThisTr = ThisRow.parent('tr')
						, ThisTrIdx = ThisTr.index()
						, ThisRowLength = parseInt($(this).parents('td').attr('rowspan'), 10) ? parseInt($(this).parents('td').attr('rowspan'), 10) : 1;

					if ( ThisTable.find('tr').not('.CopyOrigin').length > 0 ) {
						if ( $(this).parents('tr').hasClass('CopyOrigin') ) {
							alert('첫번째 줄은 삭제할 수 없습니다.');
						} else {
							if ( confirm('정말로 삭제하시겠습니까?') ) {
								for ( var j=0; j < ThisRowLength; j++ ) {
									ThisTable.find('tr').eq(ThisTrIdx).remove();
								}
							}
						}

					} else {
						alert('첫번째 줄은 삭제할 수 없습니다.');
					}

					return false;
				}
			});
		}

	});
}

// FileRow
function FileRow() {

	var Trigger = $('.AddFile')
		, FileRow = Trigger.parents('.FileRow')
		, FileWrap = FileRow.find('.FileWrap')
		, Remover = FileRow.find('.Button.Closer01')
		, OriginHTML = FileWrap.html();

	Trigger.on({
		click : function() {
			FileWrap.html(FileWrap.html() + OriginHTML);
			return false;
		}
	});

	Remover.on({
		click : function() {
			if ( FileWrap.children('.FileLine').length > 0 ) {
				if ( $(this).parents('tr').hasClass('CopyOrigin') ) {
					alert('첫번째 줄은 삭제할 수 없습니다.');
				} else {
					FileWrap.children('.FileLine').last().remove();
				}
			} else {
				alert('더 이상 삭제할 수 없습니다.');
			}
			return false;
		}
	});
}

// GalleryType1
function GalleryType1() {

	var Wrap = $('.Gallery.Type1')
		, OuterFrame = Wrap.find('.OuterFrame')
		, InnerFrame = OuterFrame.find('.InnerFrame')
		, Item = InnerFrame.find('.Item')
		, ItemWidth = Item.first().width() + 10

	InnerFrame.width(ItemWidth * Item.length);

}

// GraphDraw
function GraphDraw() {

	var Wrap = $('.GraphType.Type1 .GraphBody');

	Wrap.each(function() {
		var ThisMax = parseFloat($(this).attr('data-max'))
			, Graph = $(this).find('.Graph');

		Graph.each(function() {

			var ThisValueObj = $(this).find('p').text()
				, Value = parseFloat(ThisValueObj)
				, Percentage = (Value / (ThisMax/100));

			//Percentage = ( 90 * Percentage ) / 100

			$(this).css({
				height : Percentage + '%'
			});

		});

	});

}

// IntroSlider
function AsanWorkspace(en) {

	var Wrap = $('.AsanWorkspace')
		, Slider = Wrap.find('.SliderWrap > .innerFrame')
		, Item = Slider.find('.item')
		, IndicatorWrap = Wrap.find('.SliderIndicator')
		, Indicator = IndicatorWrap.find('button')
		, WinWidth = 0
		, IsActivating = false;

	WinWidth = Viewport().width;
	Init();

	if ( !UIisMobile() ) {

		$(window).on({
			resize : function() {
				WinWidth = Viewport().width;
				Init();
			}
		});
	} else {

		var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

		window.addEventListener(orientationEvent, function() {
			WinWidth = Viewport().width;
			Init();
		}, false);
	}

	function Init() {
		if ( WinWidth > 979 ) {
			Destroy();
		} else {
			if ( !IsActivating ) Create();
		}
	}

	function Create() {

		IsActivating = true;

		Item.off('mouseenter mouseleave');
		Item.find('.Desc').show();
		Item.find('.Wrap').removeAttr('style');

		Slider.flexibleSlider({
			//autoSlide : true,
			snapToChildren: true,
			//desktopClickDrag: true,
			keyboardControls: true,
			navSlideSelector: Indicator,
			onSlideChange: slideChange,
			onSlideComplete : slideComplete,
			onSliderResize : sliderResize
		});

		Slider.find('i').remove();

	}

	function Destroy() {
		IsActivating = false;
		Slider.flexibleSlider('destroy');
		Item.find('.Desc').hide();
		Item.find('.Wrap').height(0);
		HoverFunc();
	}

	function slideChange(args) {
		Indicator.removeClass('active');
		Indicator.eq(args.currentSlideNumber - 1).addClass('active');
	}

	function slideComplete(args) {

	}

	function sliderResize() {
	}

	function HoverFunc() {
		Item.each(function(i) {
			var ThisWrap = $(this).find('.Wrap')
				, ThisDesc = $(this).find('.Desc')
				, Height1 = 155
				, Height2 = 170;

			var textHeight = ThisDesc.outerHeight()+$('.ItemTitle').outerHeight()+10;

			if ( en ) {
				Height1 = 255;
				Height2 = 270;
			}

			$(this).on({
				mouseenter : function() {
					if ( i < 4 ) {
						TweenMax.to(ThisWrap, 0.3, { height : textHeight });
					} else {
						TweenMax.to(ThisWrap, 0.3, { height : textHeight });
					}
					ThisDesc.delay(50).fadeIn(250);
				}
				, mouseleave : function() {
					ThisDesc.stop().fadeOut(160);
					TweenMax.to(ThisWrap, 0.3, { delay : 0.15, height: 0 });

				}
			});
		});

	}

}

// PRCenter
function PRCenter() {

	var Wrap = $('.PRCenter')
		, List = Wrap.find('.ThumbnailList')
		, Trigger = List.find('li')
		, VideoIframe = Wrap.find('.VideoContainer')
		, LayerVideo = Wrap.children('.VideoContainer')
		, LayerCloser = LayerVideo.find('.Closer')
		, WinWidth = 0;

	WinWidth = Viewport().width;
	Binding();

	if ( !UIisMobile() ) {

		$(window).on({
			resize : function() {
				WinWidth = Viewport().width;
				Binding();
			}
		});
	} else {

		var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

		window.addEventListener(orientationEvent, function() {
			WinWidth = Viewport().width;
			Binding();
		}, false);
	}

	// Binding
	function Binding() {

		AllReset();

		if ( WinWidth < 768 ) {
			MobileFunc();
		} else {
			DesktopFunc();
		}
	}

	// ScreenReset
	function AllReset() {

		VideoIframe.hide();
		LayerVideo.hide();
		Trigger.find('.Desc').hide();

		Trigger.find('a').hammer().off();
		Trigger.find('a').off();
		Trigger.off();
		List.off();
		LayerCloser.hammer().off();

	}

	// Mobile
	function MobileFunc() {

		Trigger.each(function() {
			var This = $(this)
				, Dimm = This.find('.Bg:before')
				, ThisButton = $(this).find('.Button').children('a')
				, ThisLayer = $(this).find('.VideoContainer');

			This.css('width','auto');

			ThisButton.hammer().on({
				tap : function(e) {

					e.gesture.preventDefault();

					if ( ThisLayer.is(':hidden') ) {
						Trigger.find('.VideoContainer').not(ThisLayer).slideUp(150);
						ThisLayer.stop().slideDown(150);
						Dimm.hide();
					} else {
						ThisLayer.stop().slideUp(150);
						Dimm.show();
					}

					return false;
				}
			});

			ThisButton.on({
				click : function() {
					return false;
				}
			});

		});
	}

	// DesktopFunc
	function DesktopFunc() {

		var TriggerLength = Trigger.length
			, TriggerWidth = 100 / TriggerLength
			, OverWidth = TriggerWidth + 10
			, SmallWidth = (100 - OverWidth ) / (TriggerLength - 1);

		Trigger.each(function(i) {
			$(this).css({
				width : TriggerWidth + '%'
			});
		});

		Trigger.each(function() {
			var This = $(this)
				, Dimm = This.find('.Bg:before')
				, ThisButton = $(this).find('.Button').children('a')
				, ThisSrc = ThisButton.attr('href')
				, ThisDesc = This.find('.Desc');

			ThisButton.hammer().on({
				tap : function(e) {

					e.gesture.preventDefault();

					LayerVideo.find('iframe').attr('src', ThisSrc);

					Dimm.stop().fadeIn(150);

					TweenMax.to(This, 0.3, { width : '100%' });
					TweenMax.to(Trigger.not(This), 0.27, { width : 0, onComplete : function() {
						LayerVideo.show();
					}});

					return false;
				}
			});

			ThisButton.on({
				click : function() {
					return false;
				}
			});

			This.on({
				mouseenter : function() {
					if ( TriggerLength > 1 ) {
						TweenMax.to(This, 0.2, { width : OverWidth + '%' });
						TweenMax.to(Trigger.not(This), 0.2, { width : SmallWidth + '%' });
						Trigger.find('.Desc').hide();
						ThisDesc.show();
					}
				}
			});

		});

		List.on({
			mouseleave : function() {
				TweenMax.to(Trigger, 0.2, { width : TriggerWidth + '%' });
				Trigger.find('.Desc').hide();
			}
		});

		LayerCloser.hammer().on({
			tap : function(e) {
				e.gesture.preventDefault();

				LayerVideo.hide(0, function() {
					TweenMax.to(Trigger, 0.2, { width : TriggerWidth + '%'});
					LayerVideo.find('iframe').attr('src', '');
				});



			}
		});

	}

}

// BallDraw
function BallDrawFunc() {

	var canvas = document.getElementById('Canvas');
	var context = canvas.getContext('2d');

	var paticleSystem1 = new PaticleSystem(1, 400);
	//var paticleSystem2 = new PaticleSystem(2, 500);
	//var paticleSystem3 = new PaticleSystem(3, 600);

	(function drawFrame () {
		window.requestAnimationFrame(drawFrame, canvas);
		//context.fillStyle = utils.colorToRGB("#e7e9eb",0.1);
		context.clearRect(0,0,canvas.width,canvas.height);
		paticleSystem1.draw(context);
		//paticleSystem2.draw(context);
		//paticleSystem3.draw(context);
	}());
}

// CeoMessage
function CeoMessage() {

	var Wrap = $('.CeoMessage').find('.History')
		, Closer = Wrap.find('.Closer')
		, Width = Wrap.outerWidth(true)
		, IsClosed = false;

	if ( !UIisMobile() ) {

		$(window).on({
			resize : function() {
				WinWidth = Viewport().width;
				Binding();
			}
		});
	} else {

		var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

		window.addEventListener(orientationEvent, function() {
			WinWidth = Viewport().width;
			Binding();
		}, false);
	}

	function Binding() {
		AllReset();
	}

	function AllReset() {
		TweenMax.set(Wrap, { right : 0 });
		TweenMax.set(Closer.find('img'), { rotation : 0 });
		IsClosed = false;
	}

	Closer.hammer().on({
		tap : function(e) {

			e.gesture.preventDefault();

			if ( IsClosed ) {
				TweenMax.to(Closer.find('img'), 0.2, { rotation : 0 });
				TweenMax.to(Wrap, 0.2, { right : 0, onComplete : function() {
					IsClosed = false;
				}});
			} else {
				TweenMax.to(Closer.find('img'), 0.2, { rotation : 180 });
				TweenMax.to(Wrap, 0.2, { right : -Width, onComplete : function() {
					IsClosed = true;
				}});
			}
		}
	});

}

// AllInfo
function AllInfo() {

	var Wrap = $('.AllInfo')
		, KeyText = Wrap.children('.KeyText')
		, KeyTextObj = KeyText.children().not('.Bg')
		, Speciality = Wrap.children('.Speciality')
		, SpecObj = Speciality.find('.InnerBox')
		, SpecTrigger = Speciality.find('.ToBottom')
		, Summary = Wrap.children('.Summary')
		, SummaryTitle = Summary.prev('.InnerSubTitle')
		, SummaryNumObj = Summary.find('.Item').find('.Value')
		, SummaryGraph1 = Summary.find('.GraphImg')
		, SummaryGraph2 = Summary.find('.Graph').find('.Real')
		, IsSummaryEnd = false;

	Init();
	//Motion_KeyText();

	ScrollBinding();
	Motion_Speciality();

	$(window).scroll(function() {
		ScrollBinding();
	});

	function Init() {

		// KeyText
		/*
		TweenMax.set(KeyTextObj.eq(0), { opacity : 0 });
		TweenMax.set(KeyTextObj.eq(1), { opacity : 0, scale : 0 });
		TweenMax.set(KeyTextObj.eq(2), { opacity : 0, y : "+=50" });
		*/

		// Speciality
		SpecObj.each(function() {
			TweenMax.set($(this).find('.InnerDimm'), { y : '+=50' });
			TweenMax.set([$(this).find('.Title'),$(this).find('.Desc')], { y : '+=50', opacity: 0 });
		});

		// Summary
		if ( !$('html').hasClass('ie8') && !$('html').hasClass('ie7') ) {
			SummaryNumObj.each(function() {
				$(this).text('0');
			});
			TweenMax.set(SummaryGraph1, { autoAlpha : 0, scale : 0 });
		} 

	}

	function ScrollBinding() {

		var ScrollTop = $(window).scrollTop()
			, SummaryTitleTop = SummaryTitle.offset().top;

		// Speciality
		SpecObj.each(function() {

			var This = $(this)
				, ThisOffset = This.parent().offset().top - 700;

			if ( ScrollTop >= ThisOffset ) {
				if ( This.attr('data-open') !== 'true' ) {
					This.attr('data-open', 'true');
					TweenMax.to([This.find('.InnerDimm'), This.find('.Title'), This.find('.Desc')], 1, { y : 0 });
					TweenMax.to([This.find('.Title'), This.find('.Desc')], 1, { y : 0, opacity : 1 });
				}
			}

		});

		if ( ScrollTop >= SummaryTitleTop - 200 ) {
			if ( !IsSummaryEnd ) {
				IsSummaryEnd = true;
				if ( !$('html').hasClass('ie8') && !$('html').hasClass('ie7') ) {
					Motion_Summary();
				}
			}
		}

	}

	function Motion_KeyText() {

		TweenMax.to(KeyTextObj.eq(0), 1, { opacity : 1 });
		TweenMax.to(KeyTextObj.eq(1), 1, { opacity : 1, scale : 1 });
		TweenMax.to(KeyTextObj.eq(2), 1, { opacity : 1, y : 0 });

	}

	function Motion_Speciality() {

		SpecTrigger.each(function() {

			var ThisItem = $(this).parents('.Item')
				, NextItemTop = ThisItem.next('.Item').length ? ThisItem.next('.Item').offset().top - 60 : null;

			$(this).hammer().on({
				tap : function(e) {

					e.gesture.preventDefault();

					if ( NextItemTop !== null ) {
						$('html, body').stop().animate({
							scrollTop : NextItemTop
						}, 500);
					}
				}
			});

		});

	}

	function Motion_Summary() {

		SummaryNumObj.each(function() {

			var ThisOrigin = parseInt($(this).attr('data-num'), 10)
				, CommaCheck = $(this).attr('data-comma');

			if ( CommaCheck == 'false' ) {
				$(this).animateNumbers(ThisOrigin, false)
			} else {
				$(this).animateNumbers(ThisOrigin)
			}

		});

		TweenMax.to(SummaryGraph1, 1, { autoAlpha : 1, scale : 1 });
		//TweenMax.to(SummaryGraph2.find('img'), 3, { height : '100%'});
		SummaryGraph2.addClass('Move');

	}

}

// WorkFlow
function WorkFlow() {

	var Wrap = $('.AllInfo').find('.WorkFlow')
		, List = Wrap.children('.List')
		, ImageLayer = Wrap.children('.ImageLayer')
		, ListClone = List.clone().appendTo(ImageLayer)
		, LayerItem = ListClone.find('.Item')
		, BtnPrev = ImageLayer.find('.Btn.Prev')
		, BtnNext = ImageLayer.find('.Btn.Next')
		, Closer = ImageLayer.find('.Closer')
		, MovingWidth = Wrap.children('.ImageLayer').width()
		, CurrentLeft = - (CurrentIdx * MovingWidth )
		, IsMobileActive = false
		, IsDesktopActive =  false
		, CurrentIdx = 0
		, Item = List.find('.Item')
		, WinWidth = Viewport().width;

	Binding();

	if ( !UIisMobile() ) {

		$(window).on({
			resize : function() {
				WinWidth = Viewport().width;
				Binding();
			}
		});
	} else {

		var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

		window.addEventListener(orientationEvent, function() {
			WinWidth = Viewport().width;
			Binding();
		}, false);
	}

	function Binding() {
		if ( WinWidth < 980 ) {
			MobileFunc();
		} else {
			DesktopFunc();
		}

		SetImageLayer();
	}

	function MobileFunc() {

		IsDesktopActive = false;

		if ( !IsMobileActive ) {

			IsMobileActive = true;

			Item.off();
			Wrap.off();
			Closer.off();
			BtnNext.off();
			BtnPrev.off();
			Item.hammer().off();
			Item.removeAttr('style');
			Item.removeClass('Active');
			ImageLayer.hide();

			Item.each(function() {

				var This = $(this);

				$(this).hammer().on({
					tap : function(e) {
						e.gesture.preventDefault();
						if ( This.hasClass('Active') ) {
							TweenMax.to($(this), 0.3, {className:"-=Active"});
						} else {
							TweenMax.to(Item.not(this), 0.3, {className:"-=Active"});
							TweenMax.to($(this), 0.3, {className:"+=Active"});
						}
					}
				});

			});
		}
	}

	function DesktopFunc() {

		IsMobileActive = false;

		if ( !IsDesktopActive ) {

			IsDesktopActive = true;

			Item.hammer().off('tap');
			Item.removeClass('Active');

			Item.each(function() {
				$(this).hammer().off('tap');
			});

			Item.each(function(i) {
				var This = $(this)
					, OtherItem = Item.not(This)
					, OtherItemWidth = (100 - 30) / 5;

				$(this).on({
					mouseenter : function() {
						TweenMax.to(This, 0.4, { width : '30%' });
						TweenMax.to(OtherItem, 0.4, { width : OtherItemWidth + '%' });

						TweenMax.to(This.find('.Dimm'), 0.25, { opacity: 0 });
						TweenMax.to(OtherItem.find('.Dimm'), 0.25, { opacity: 0.5 });
					}
				});

				$(this).hammer().on({
					tap : function(e) {
						e.gesture.preventDefault();

						TweenMax.to(This, 0.4, { width : '100%' });
						TweenMax.to(OtherItem, 0.36, { width : 0 });

						CurrentIdx = i;

						SetMotion();
						SetButton();

						ImageLayer.delay(300).fadeIn(100);

					}
				});
			});

			Wrap.on({
				mouseleave : function() {
					TweenMax.to(Item, 0.25, { width : (100/6) + '%' });
					TweenMax.to(Item.find('.Dimm'), 0.25, { opacity: 0.5 });
				}
			});

			Closer.hammer().on({
				tap : function(e) {
					e.gesture.preventDefault();

					ImageLayer.fadeOut(100);

					TweenMax.to(Item, 0.25, { width : (100/6) + '%' });
					TweenMax.to(Item.find('.Dimm'), 0.25, { opacity: 0.5 });

				}
			});

			BtnPrev.hammer().on({
				tap : function(e) {
					e.gesture.preventDefault();

					CurrentIdx -= 1;

					SetMotion();
					SetButton();
				}
			});

			BtnNext.hammer().on({
				tap : function(e) {
					e.gesture.preventDefault();

					CurrentIdx += 1;

					SetMotion();
					SetButton();
				}
			});
		}
	}

	function SetImageLayer() {
		MovingWidth = Wrap.children('.ImageLayer').width();
		CurrentLeft = - (CurrentIdx * MovingWidth );

		LayerItem.width(MovingWidth);
		ListClone.css('marginLeft', CurrentLeft );
	}

	function SetMotion() {
		CurrentLeft = - ( CurrentIdx * MovingWidth );
		TweenMax.to(ListClone, 0.2, { marginLeft : CurrentLeft });
	}

	function SetButton() {
		var PrevIdx = CurrentIdx == 0 ? null : CurrentIdx - 1
			, NextIdx = CurrentIdx == LayerItem.length - 1 ? null : CurrentIdx + 1;

		BtnPrev.show();
		BtnNext.show();

		if ( PrevIdx == null ) {
			BtnPrev.hide();
		} else {
			var PrevImage = LayerItem.eq(PrevIdx).find('.Image').html();
			BtnPrev.find('.Image').html(PrevImage);
		}

		if ( NextIdx == null ) {
			BtnNext.hide();
		} else {
			var NextImage = LayerItem.eq(NextIdx).find('.Image').html();
			BtnNext.find('.Image').html(NextImage);
		}

	}
}

// WorkSpace
function WorkspaceGallery() {

	var Wrap = $('.Gallery.Type1')
		, Layer = $('.OverLayer')
		, SliderWrap = Layer.find('.SliderWrap')
		, Slider = Layer.find('.innerFrame')
		, Item = Wrap.find('.Photo')
		, Closer = Layer.find('.Closer');

	Create();
	Init();

	function Create() {
		Layer.show();
		Slider.flexibleSlider({
			autoSlideTransTimer : 300,
			//autoSlide : true,
			desktopClickDrag: true,
			snapToChildren: true,
			keyboardControls: true,
			navPrevSelector : Layer.find('.Btn.Left'),
			navNextSelector : Layer.find('.Btn.Right'),
			onSlideChange: slideChange,
			onSlideComplete : slideComplete,
			onSliderResize : sliderResize
		});
		Layer.hide();
	}

	Closer.hammer().on({
		tap : function(e) {
			e.gesture.preventDefault();
			Layer.hide();
			Slider.flexibleSlider('destroy');
		}
	});

	Item.each(function(i) {
		$(this).find('a').hammer().on({
			tap : function(e) {
				e.gesture.preventDefault();
				Create();
				GoToSlide(i);
				setTimeout(function() {
					Layer.show();
				}, 300);
			}
		});
		$(this).find('a').on({
			click : function() {
				return false;
			}
		});
	});

	Slider.find('i').remove();

	function GoToSlide(x) {
		Slider.flexibleSlider('goToSlide', x+1);
	}

	function slideChange(args) {
		/*
		DescIndicator.removeClass('active');
		DescIndicator.eq(args.currentSlideNumber - 1).addClass('active');
		*/
	}

	function slideComplete(args) {

	}

	function sliderResize() {

	}

	function Init() {

		Layer.appendTo('body');

		Layer.find('.Photo').find('img').first().load(function() {
			CheckImageHeight();
		});

		if ( !UIisMobile() ) {
			$(window).on({
				resize : function() {
				 CheckImageHeight();
				}
			});
		} else {
			var supportsOrientationChange = "onorientationchange" in window,
			orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

			window.addEventListener(orientationEvent, function() {
				CheckImageHeight();
			}, false);
		}

		function CheckImageHeight() {

			Slider.flexibleSlider('update');

			var Width = Viewport().width
				, Num = 0;

			if ( Width < 767 ) {
				Num = 70;
			} else {
				Num = -15;
			}

			Closer.css({
				marginTop : - ( Layer.find('.Photo').find('img').height() / 2 ) - Num + 'px'
			});
		}
	}

}

// BlockUI
function BlockUI() {

	var Body = $('body');
	Body.css({
		'overflow-y' : 'hidden'
		, 'height' : $(window).height()
	});

}

// ReleaseUI
function ReleaseUI() {
	var Body = $('body');
	Body.css({
		'overflow-y' : 'auto'
		, 'height' : 'auto'
	});
}

// ProductViewImage
function ProductViewImage() {

	var ImageLink = $('.ProductView .ProductTable td a');

	Init();

	if ( !UIisMobile() ) {
		$(window).on({
			resize : function() {
				Init();
			}
		});
	} else {
		var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

		window.addEventListener(orientationEvent, function() {
			Init();
		}, false);
	}

	function Init() {
		var Width = Viewport().width;

		if ( Width < 768 ) {
			ImageLink.on({
				click : function() {
					return true;
				}
			});
		} else {
			ImageLink.on({
				click : function() {
					return false;
				}
			});
		}
	}

}

// PagingMove
function PagingMove() {

	var Paging1 = $('.MovePage1').find('.Paging.Type1')
		, Paging2 = $('.MovePage2').find('.Paging.Type1');

	Paging1.insertAfter($('#PRCenter'));
	Paging2.insertAfter($('#Brochure'));

}

// FaqEvent
function FaqEvent(){

	var Trigger = $(".TriggerFold01 button");

	Trigger.each(function(i){

		var PrevList = $(this).parent().prev(".DescSect01");

		$(this).hammer().on({
			tap:function(e){
				e.gesture.preventDefault();
				if(PrevList.is(':hidden')){
					$(this).children().css("margin-top","0");
					PrevList.stop().show(0);
				}else{
					$(this).children().css("margin-top","-21px");
					PrevList.stop().hide(0);
				}
			}
		});

	});
}

// DaumMap
function DaumMap() {

	Init();

	function Init() {
		var map = new daum.maps.Map(document.getElementById('DaumMap'), {
			center: new daum.maps.LatLng(36.9260396, 127.06402700000001),
			level: 8
		});

		var icon = new daum.maps.MarkerImage(
			'/images/ico/ico_map_marker.png',
			new daum.maps.Size(83, 52),
			new daum.maps.Point(41, 26)
		);

		var marker = new daum.maps.Marker({
			position: new daum.maps.LatLng(36.9260396, 127.06402700000001),
			image : icon
		});

		marker.setMap(map);

		var zoomControl = new daum.maps.ZoomControl();

		map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

		var mapTypeControl = new daum.maps.MapTypeControl();

		map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

	}

}

// ContentTab
function ContentTab() {

	var Wrap = $('.TabFunc')
		, TabTopMargin = 0 - parseInt(Wrap.css('marginTop'), 10)
		, TabTop = Wrap.offset().top - 14
		, TabLeft = Wrap.offset().left
		, TabTrigger = Wrap.find('.TabTrigger')
		, TabContent = $(Wrap.attr('data-tabcont'));

	TabContent.hide();
	TabContent.first().show();

	/*
	ScrollInit();
	$(window).on({
		scroll : function() {
			ScrollInit();
		}
	});
	*/

	TabTrigger.each(function() {
		var This = $(this)
			, ThisContent = $($(this).attr('href'));

		This.hammer().on({
			tap : function(e) {

				e.gesture.preventDefault();

				TabContent.hide();
				ThisContent.show();

				TabTrigger.parent().removeClass('on');
				This.parent().addClass('on');

				$('html, body').stop().animate({
					scrollTop  :$('.TabFunc').offset().top
				}, 400);

				return false;

			}
		});

		This.on({
			click : function() {
				return false;
			}
		});
	});

	function ScrollInit() {

		var ScrollTop = $(window).scrollTop();

		if ( ScrollTop >= TabTop ) {
			Wrap.css({
				position : 'fixed'
				, left : TabLeft
				, top : TabTopMargin
				, zIndex : 2000
				, width : $('.TabFunc').width()
			});
			Wrap.next().css('marginTop', Wrap.outerHeight(true));
		} else {
			Wrap.css({
				position : 'static'
				, left : 'auto'
				, top : 'auto'
				, zIndex : 2000
				, width : 'auto'
			});
			Wrap.next().css('marginTop', 0);
		}

	}

}

// ContentTab
function TabScroll() {

	var Wrap = $('.TabScroll')
		, TabTopMargin = 0 - parseInt(Wrap.css('marginTop'), 10)
		, TabTop = Wrap.offset().top
		, TabContWrap = $('.TabContWrap')
		, TabContWrapOriginMTop = parseInt(TabContWrap.css('marginTop'), 10)
		, TabLeft = Wrap.offset().left;

	ScrollInit();

	$(window).on({
		scroll : function() {
			ScrollInit();
		}
	});

	function ScrollInit() {

		var ScrollTop = $(window).scrollTop();

		if ( ScrollTop >= TabTop ) {
			Wrap.css({
				position : 'fixed'
				, left : TabLeft
				, top : TabTopMargin
				, zIndex : 2000
				, width : $('.TabScroll').width()
			});
			$('.TabContWrap').css('marginTop', Wrap.outerHeight(true)+ TabContWrapOriginMTop);
		} else {
			Wrap.css({
				position : 'static'
				, left : 'auto'
				, top : 'auto'
				, zIndex : 2000
				, width : 'auto'
			});
			$('.TabContWrap').css('marginTop', TabContWrapOriginMTop);
		}

	}

}

// DrawIRChart
function DrawIRChart(widthStr, heightStr, isu_cd) {
	var ob = '';
	ob = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="stc_bytmznprc_01" width="' + widthStr + '" height="' + heightStr + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab#version=9,0,0,0">'
		+ '  <param name="movie" value="http://asp2.krx.co.kr/widget/premium/stc_bytmznprcidx_01.swf?xmlfile=http://asp2.krx.co.kr/widget/premium/stc_bytmznprc_01_data.jsp?isu_cd=' + isu_cd + '&market=Q&h1=' + (heightStr * 0.6) + '&h2=' + (heightStr * 0.4) + '" />'
		+ '  <param name="quality" value="high" />'
		+ '  <param name="WMode" value="opaque" />'
		+ '  <param name="bgcolor" value="#FFFFFF" />'
		+ '  <param name="allowScriptAccess" value="sameDomain" />'
		+ '  <embed src="http://asp2.krx.co.kr/widget/english/stc_bytmznprcidx_01.swf?xmlfile=http://asp2.krx.co.kr/widget/premium/stc_bytmznprc_01_data.jsp?isu_cd=' + isu_cd + '&market=Q&h1=' + (heightStr * 0.6) + '&h2=' + (heightStr * 0.4) + '" quality="high" bgcolor="#FFFFFF" width="' + widthStr + '" height="' + heightStr + '" name="stc_bytmznprcidx" align="middle" play="true" loop="false" quality="high" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"></embed>'
		+ '</object>';

	document.write(ob);
}

// ScrollTop
function ScrollTop() {

	var ScrollTop = $('.ScrollTop');

	ScrollTop.each(function() {
		var This = $(this)
			, ScrollTrigger = This.find('.ScrollTrigger');

		ScrollTrigger.hammer().on({
			tap : function(e) {
				e.gesture.preventDefault();

				$('html, body').stop().animate({
					scrollTop  : This.offset().top
				}, 400);
			}
		});

	});

}

// InnerLinkScroll
function InnerLinkScroll() {

	var Wrap = $('.TextBox .InnerLinkWrap')
		, Trigger = Wrap.find('a');

	Trigger.each(function() {

		$(this).hammer().on({
			tap : function(e) {

				e.gesture.preventDefault();

				var Target = $($(this).attr('href'))
					, TargetTop = Target.offset().top;

				$('html, body').stop().animate({
					scrollTop  : TargetTop
				}, 300);

				return false;

			}
		});

		$(this).on({
			click : function() {
				return false;
			}
		});
	});

}

// InnoxLife
function InnoxLife() {

	var Wrap = $('.InnoxLife')
		, Trigger = Wrap.find('.Article.Type3').not('.NotPrepared')
		, NotPrepared = Wrap.find('.NotPrepared')
		, Cont = Wrap.find('.Article.Type1')
		, ArticleWrapper = Wrap.find('.ArticleWrap')
		, WinWidth = Viewport().width
		, IsMobileActive = false
		, IsWideActive = false;

	Init();
	Binding();
	AlertFunc();

	if ( !UIisMobile() ) {
		$(window).on({
			resize : function() {
				WinWidth = Viewport().width;
				Binding();
			}
		});
	} else {
		var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

		window.addEventListener(orientationEvent, function() {
			WinWidth = Viewport().width;
			Binding();
		}, false);
	}

	function Binding() {

		if ( WinWidth < 768 ) {
			MobileFunc();
		} else {
			WideFunc();
		}

	}

	function AlertFunc() {

		NotPrepared.each(function() {
			$(this).hammer().on({
				tap : function(e) {
					e.gesture.preventDefault();

					alert('준비중입니다.');
				}
			});
		});

	}

	function ResetBinding() {
		Trigger.hammer().off('tap');
		Trigger.removeClass('Hover').removeAttr('style');
		Cont.removeAttr('style').hide();
		ArticleWrapper.removeClass('Open').removeAttr('style');
		Cont.find('.TriggerFold > button').hammer().off('tap');

	}

	function MobileFunc() {

		IsWideActive = false;

		if ( !IsMobileActive ) {

			IsMobileActive = true;

			ResetBinding();

			Trigger.each(function() {
				var This = $(this)
					, ThisWrapper = This.parents('.ArticleWrap')
					, ThisCont = This.next('.Article.Type1')
					, ThisCloser = ThisCont.find('.TriggerFold > button');

				$(this).hammer().on({
					tap : function(e) {
						e.gesture.preventDefault();

						if ( ThisCont.is(':hidden') ) {
							ThisCont.stop().slideDown(150);
							This.addClass('Hover');
						} else {
							ThisCont.stop().slideUp(150);
							This.removeClass('Hover');
						}
					}
				});

				ThisCloser.hammer().on({
					tap : function(e) {
						e.gesture.preventDefault();

						ThisCont.stop().slideUp(150);
						This.removeClass('Hover');
					}
				});

			});

		}

	}

	function WideFunc() {

		ResetBinding();

		IsMobileActive = false;

		Trigger.each(function() {

			var This = $(this)
				, ThisWrapper = This.parents('.ArticleWrap')
				, ThisCont = This.next('.Article.Type1')
				, ThisContHeight = parseInt(ThisCont.attr('data-height'), 10)
				, ThisCloser = ThisCont.find('.TriggerFold > button');

			$(this).hammer().on({

				tap : function(e) {

					e.gesture.preventDefault();

					var ThisHeight = This.height() + 60;

					if ( ThisWrapper.hasClass('Open') ) {

						if ( ThisCont.is(':visible') ) {

							This.removeClass('Hover');

							TweenMax.to(ThisWrapper, 0.4, { height : ThisHeight, onComplete : function() {
								ThisCont.hide();
								ThisWrapper.removeClass('Open').removeAttr('style');
							}});
						} else {
							SetPos();
							Init();
							ThisContHeight = parseInt(ThisCont.attr('data-height'), 10);

							ThisCont.slideDown(200);
							Trigger.removeClass('Hover');
							This.addClass('Hover');

							ThisWrapper.addClass('Open');
							ArticleWrapper.not(ThisWrapper).removeClass('Open').css({
								height : 'auto'
							});

							TweenMax.to(ThisWrapper, 1, { height : ThisHeight + ThisContHeight, ease : Power3.easeOut, onComplete : function() {
								ThisWrapper.addClass('Open');
							}});
						}

					} else {
						SetPos();
						Init();
						ThisContHeight = parseInt(ThisCont.attr('data-height'), 10);

						ThisCont.slideDown(200);
						Trigger.removeClass('Hover');
						This.addClass('Hover');

						ThisWrapper.addClass('Open');
						ArticleWrapper.not(ThisWrapper).removeClass('Open').css({
							height : 'auto'
						});

						TweenMax.to(ThisWrapper, 1, { height : ThisHeight + ThisContHeight, ease : Power3.easeOut, onComplete : function() {
							ThisWrapper.addClass('Open');
						}});
					}
				}
			});

			ThisCloser.hammer().on({
				tap : function(e) {
					e.gesture.preventDefault();

					var ThisHeight = This.height() + 60;

					This.removeClass('Hover');

					TweenMax.to(ThisWrapper, 0.4, { height : ThisHeight, onComplete : function() {
						ThisCont.hide();
						ThisWrapper.removeClass('Open');
					}});
				}
			});

		});
	}

	function Init() {
		Cont.show();
		Cont.each(function() {
			$(this).attr('data-height', $(this).outerHeight(true));
		});
		Cont.hide();
	}

	function SetPos() {

		Cont.each(function() {

			$(this).show();

			var ThisWrapper = $(this).parents('.ArticleWrap')
				, ThisTop = parseInt( $(this).prev('.Article.Type3').height(), 10) + 60
				, ThisHeight = $(this).outerHeight(true);

			$(this).hide();

			$(this).css({
				top : ThisTop
			});

			if ( ThisWrapper.hasClass('Open') ) {
				ThisWrapper.height(ThisTop + ThisHeight);
			}
		});
	}

}

// Popup
function Popup() {

	var Wrap = $('.Popup')
		, Closer = Wrap.find('.Closer')
		, StopShow = Wrap.find('.Checker')
		, ShowCookie = readCookie('INNOX_POPUP')
		, Slider = Wrap.find('.PopSlider > .innerFrame')
		, IndicatorWrap = Wrap.find('.PopSliderIndicator')
		, Indicator = IndicatorWrap.find('button');

	Slider.flexibleSlider({
		//autoSlide : true,
		snapToChildren: true,
		//desktopClickDrag: true,
		keyboardControls: true,
		navSlideSelector: Indicator,
		onSlideChange: slideChange,
		onSlideComplete : slideComplete,
		onSliderResize : sliderResize
	});

	Slider.find('i').remove();

	function slideChange(args) {
		Indicator.removeClass('active');
		Indicator.eq(args.currentSlideNumber - 1).addClass('active');
	}

	function slideComplete(args) {

	}

	function sliderResize() {
	}

	if ( ShowCookie !== null && ShowCookie == '1' ) {
		Wrap.hide();
	}

	Closer.hammer().on({
		tap : function(e) {
			e.gesture.preventDefault();

			Wrap.stop().slideUp(250);
		}
	});

	StopShow.hammer().on({
		tap : function(e) {
			e.gesture.preventDefault();

			if ( $(this).is(':checked') ) {
				eraseCookie('INNOX_POPUP');
			} else {
				createCookie('INNOX_POPUP','1',1);
			}
		}
	});

}

function ethics_menu(a){
	$('.ethics_info>div').css({'display':'none'});
	$('.ethics_info>.ethics'+$(a).parent().index()).css({'display':'block'});
}