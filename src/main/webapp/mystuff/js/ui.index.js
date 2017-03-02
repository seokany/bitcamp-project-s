/*
 * UI Javascript Library
 * @Date : 2013-12-04
 * @Author : Jaeho Sim(bvlgaricl@aintlab.com)
 *
 **/

// SVGHover
function SVGHover() {

	var Item = $('.Item'),
		speed = 200,
		easing = mina.easein;

	$.easing.crazy = function(t, millisecondsSince, startValue, endValue, totalDuration) {
		if ( t < 0.5 ) {
			return t*4;
		} else {
			return -2*t + 3;
		}
	};

	[].slice.call ( document.querySelectorAll( 'article' ) ).forEach( function( el ) {

		var SVGHover = $(el).find('.SVGHover'),
			s = Snap( el.querySelector( 'svg' ) ), p = s.path (""),
			path = s.select( 'path' ),
			jpathConfig = {
				from : 'm 0,-0.065346 200,0 L -0.08393764,0.79450452 0,199.93465 z',
				to : "m 0,-0.065346 200,0 0,199.999996 -200,0 z"
			};

		el.addEventListener( 'mouseenter', function(e) {

			var w = $(this).width(),
				h = $(this).height(),
				offset	= $(this).offset(),
				xc = e.pageX - offset.left,
				yc = e.pageY - offset.top,
				x = (xc - (w/2)) * ( w > h ? (h/w) : 1 ),
				y = (yc  - (h/2)) * ( h > w ? (w/h) : 1 );

			var fromStyle,
				toStyle;

			slideFromTR = ( 'm '+(w/4)*3+',0 '+w/4+',0 0,'+h+' 0,-'+h+' z' );
			slideFromBR = ( 'm '+w+','+h+' 0,-'+h+' 0,'+h+' -'+w/4+',0 z' );
			slideFromBL = ( 'm 0,0 0,'+h+' '+w/4+',0 -'+w/4+',0 z' );
			slideFromTL = ( 'm 0,0 '+w/4+',0 L 0,0 0,'+h+' z' );

			if (x > 0 && y < 0) {
				fromStyle = slideFromTR;
			} else if (x > 0 && y > 0) {
				fromStyle = slideFromBR;
			} else if (x < 0 && y > 0) {
				fromStyle = slideFromBL;
			} else {
				fromStyle = slideFromTL;
			}

			pathConfig = {
				from : fromStyle,
				//to : "m 0.04171012,-0.00487185 "+sw+",0 0,"+sh+" -"+sw+",0 z"
				to : "m 0,0 "+w+",0 0,"+h+" -"+w+",0  z"
			};

			path.attr( { d : pathConfig.from } );
			path.animate( { 'path' : pathConfig.to }, speed, easing );

			//var images = ['red', 'green', 'blue', '#1257A3' ];

			//path.attr({ fill: images[Math.floor(Math.random() * images.length)] });
			path.attr({
				fill : '#2e89d7'
			});

			SVGHover.stop(true, true).fadeIn(250);

		});

		el.addEventListener( 'mouseleave', function(e) {

			var w		= $(this).width(),
				h		= $(this).height(),
				offset	= $(this).offset(),
				xc		= e.pageX - offset.left,
				yc		= e.pageY - offset.top,
				x		= (xc - (w/2)) * ( w > h ? (h/w) : 1 ),
				y		= (yc  - (h/2)) * ( h > w ? (w/h) : 1 );


			var fromStyle, toStyle,
				slideToTL = ( 'm 0,0 '+w/4+',0 L 0,0 0,'+h/4+' z' );
				slideToTR = ( 'm '+(w/4)*3+',0 '+w/4+',0 0,'+h/4+' 0,-'+h/4+' z' );
				slideToBR = ( 'm '+w+','+h+' 0,-'+h/4+' 0,'+h/4+' -'+w/4+',0 z' );
				slideToBL = ( 'm 0,'+(h/4)*3+' 0,'+h/4+' '+w/4+',0 -'+w/4+',0 z' );


			if (x > 0 && y < 0) {
				toStyle = slideToTR;
			} else if (x > 0 && y > 0) {
				toStyle = slideToBR;
			} else if (x < 0 && y > 0) {
				toStyle = slideToBL;
			} else {
				toStyle = slideToTL;
			}

			pathConfig = {
				from : "m 0,0 "+w+",0 0,"+h+" -"+w+",0  z",
				to :  toStyle
			};

			path.attr( { d : pathConfig.from } );
			path.animate( { 'path' : pathConfig.to }, speed, easing );

			SVGHover.stop(true, true).fadeOut(100);

		});
	});

}

// HoverDir
function HoverDir() {
	var Item = $('.GridWrap .Item').not('.Item1, .Item2, .Item6');

	Item.each( function() {
		$(this).hoverdir({}, '.Hover');
	});
}

// HoverDir Plugin
;( function( $, window, undefined ) {

	'use strict';

	$.HoverDir = function( options, element ) {

		this.$el = $( element );
		this._init( options );

	};

	// the options
	$.HoverDir.defaults = {
		speed : 300,
		easing : 'ease',
		hoverDelay : 0,
		inverse : false
	};

	$.HoverDir.prototype = {

		_init : function( options ) {

			// options
			this.options = $.extend( true, {}, $.HoverDir.defaults, options );
			// transition properties
			this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
			// support for CSS transitions
			this.support = Modernizr.csstransitions;
			// load the events
			this._loadEvents();

		},
		_loadEvents : function() {

			var self = this;

			this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {

				var $el = $( this ),
					$hoverElem = $el.find( 'div' ),
					direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
					styleCSS = self._getStyle( direction );

				if( event.type === 'mouseenter' ) {

					$hoverElem.hide().css( styleCSS.from );
					clearTimeout( self.tmhover );

					self.tmhover = setTimeout( function() {

						$hoverElem.show( 0, function() {

							var $el = $( this );
							if( self.support ) {
								$el.css( 'transition', self.transitionProp );
							}
							self._applyAnimation( $el, styleCSS.to, self.options.speed );

						} );


					}, self.options.hoverDelay );

				}
				else {

					if( self.support ) {
						$hoverElem.css( 'transition', self.transitionProp );
					}
					clearTimeout( self.tmhover );
					self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );

				}

			} );

		},
		// credits : http://stackoverflow.com/a/3647634
		_getDir : function( $el, coordinates ) {

			// the width and height of the current div
			var w = $el.width(),
				h = $el.height(),

				// calculate the x and y to get an angle to the center of the div from that x and y.
				// gets the x value relative to the center of the DIV and "normalize" it
				x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
				y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),

				// the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
				// first calculate the angle of the point,
				// add 180 deg to get rid of the negative values
				// divide by 90 to get the quadrant
				// add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
				direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;

			return direction;

		},
		_getStyle : function( direction ) {

			var fromStyle, toStyle,
				slideFromTop = { left : '0px', top : '-100%' },
				slideFromBottom = { left : '0px', top : '100%' },
				slideFromLeft = { left : '-100%', top : '0px' },
				slideFromRight = { left : '100%', top : '0px' },
				slideTop = { top : '0px' },
				slideLeft = { left : '0px' };

			switch( direction ) {
				case 0:
					// from top
					fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
					toStyle = slideTop;
					break;
				case 1:
					// from right
					fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
					toStyle = slideLeft;
					break;
				case 2:
					// from bottom
					fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
					toStyle = slideTop;
					break;
				case 3:
					// from left
					fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
					toStyle = slideLeft;
					break;
			};

			return { from : fromStyle, to : toStyle };

		},
		// apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
		_applyAnimation : function( el, styleCSS, speed ) {

			$.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
			el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed + 'ms' } ) );

		}

	};

	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );

		}

	};

	$.fn.hoverdir = function( options ) {

		var instance = $.data( this, 'hoverdir' );

		if ( typeof options === 'string' ) {

			var args = Array.prototype.slice.call( arguments, 1 );

			this.each(function() {

				if ( !instance ) {

					logError( "cannot call methods on hoverdir prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;

				}

				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for hoverdir instance" );
					return;

				}

				instance[ options ].apply( instance, args );

			});

		}
		else {

			this.each(function() {

				if ( instance ) {

					instance._init();

				}
				else {

					instance = $.data( this, 'hoverdir', new $.HoverDir( options, this ) );

				}

			});

		}

		return instance;

	};

} )( jQuery, window );

// IndexSlider
function IndexSlider() {
	$('.indexSlider1 > .innerFrame').flexibleSlider({
		autoSlide : true,
		snapToChildren: true,
		//desktopClickDrag: true,
		infiniteSlider : true,
		keyboardControls: true,
		navPrevSelector : $('.indexSlider1Prev'),
		navNextSelector : $('.indexSlider1Next'),
		navSlideSelector: $('.indexSlider1indicator > button'),
		onSlideChange: slideChange1,
		onSlideComplete : slideComplete1
	});

	$('.indexSlider1 i').remove();
	$('.indexSlider1 > .innerFrame').find('.item').css('visibility','visible');

	function slideChange1(args) {
		$('.indexSlider1indicator > button').removeClass('active');
		$('.indexSlider1indicator > button:eq(' + (args.currentSlideNumber - 1) + ')').addClass('active');
	}

	function slideComplete1(args) {

	}

	$('.indexSlider2 > .innerFrame').flexibleSlider({
		autoSlide : true,
		snapToChildren: true,
		//desktopClickDrag: true,
		infiniteSlider : true,
		keyboardControls: true,
		navPrevSelector : $('.indexSlider2Prev'),
		navNextSelector : $('.indexSlider2Next'),
		navSlideSelector: $('.indexSlider2indicator > button'),
		onSlideChange: slideChange2
	});

	$('.indexSlider2 i').remove();

	$('.indexSlider2 > .innerFrame').find('.item').css('visibility','visible');

	function slideChange2(args) {
		$('.indexSlider2indicator > button').removeClass('active');
		$('.indexSlider2indicator > button:eq(' + (args.currentSlideNumber - 1) + ')').addClass('active');

	}
}