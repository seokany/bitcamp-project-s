/*
 * AUI Front-End Javascript Execution
 * @Date : 2013-12-04
 * @Author : Jaeho Sim(bvlgaricl@aintlab.com)
 *
 **/

// Protecting jQuery against Crashing Other Javascript Libraries
(function($){

	// Document Ready
	$(document).ready(function(){

		// Gnb
		if ( $('.Gnb').length ) Gnb();

		// PrettySelect
		if ( $('.PrettySelect').length ) PrettySelect();

		// DescSlider
		if ( $('.DescSlider').length ) DescSlider();

		// ArticleType1
		if ( $('.Article.Type1').length ) ArticleType1();

		// PathIndicator
		if ( $('.PathIndicator').length ) PathIndicator();

		// IntroSlider
		if ( $('.IntroKeyVisual').length ) IntroSlider();

		// ProductView
		if ( $('.ProductView').length ) ProductSlider();

		// ToTop
		if ( $('.ToTop').length ) ToTop();

		// HiddenMobile
		if ( $('.HiddenMobile').length ) HiddenMobile();

		// MemberSelect
		if ( $('.MemberInfo.Type1').length ) MemberSelect();

		// TableType1
		if ( $('.TableType.Type1').length ) TableType1();

		// LayerPop
		if ( $('.PopTrigger').length ) LayerPop();

		// Gallery.Type1
		if ( $('.Gallery.Type1').length ) GalleryType1();

		// AsanWorkspace
		if ( $('.AsanWorkspace').length ) AsanWorkspace();

		// CeoMessage
		if ( $('.CeoMessage').length ) CeoMessage();

		// Scroller
		if ( $('.Scroller').length ) {
			$(".Scroller").niceScroll({
				autohidemode : false
				, cursorcolor:"#666"
				, cursorwidth:"15px"
				, cursorborder:"0px solid transparent"
				, cursorborderradius:"0"
			});
		}

		// ProductViewImage
		if ( $('.ProductView .ProductTable td a').length ) ProductViewImage();

		// AllInfo
		if ( $('.AllInfo').length ) AllInfo();

		// TabFunc
		if ( $('.TabFunc').length ) ContentTab();

		// InnerLinkScroll
		if ( $('.TextBox .InnerLinkWrap').length ) InnerLinkScroll();

		// WorkFlow
		if ( $('.AllInfo').find('.WorkFlow').length ) WorkFlow();

		// FaqEvent
		if ( $(".TriggerFold01 button").length ) FaqEvent();

	});


	// Window Load
	$(window).load(function() {

		if ( $('html').hasClass('ie7') || $('html').hasClass('ie8') ) {
			setTimeout(function() {
				$('body').css({
					'background-image' : 'none'
					, 'visibility' : 'visible'
				});
				if ( $('.IndexContent').length ) $('img').css('display','block');
			}, 500);
		}

		// GalleryType1
		if ( $('.Gallery.Type1').length ) WorkspaceGallery();

		// InnoxLife
		if ( $('.InnoxLife').length ) InnoxLife();

		// Index HoverDir
		if ( $('.IndexContent').length ) {
			if ( !UIisMobile() ) {
				if ( $.browser.msie ) {
					if ( $.browser.version < 9 ) {
						HoverDir();
					} else {
						SVGHover();
					}
				} else {
					SVGHover();
				}
			}

			// IndexSlider
			if ( $('html').hasClass('lte8') ) {
				setTimeout(function() {
					IndexSlider();
				}, 500);
			} else {
				IndexSlider();
			}
		}

	});

})(jQuery);

