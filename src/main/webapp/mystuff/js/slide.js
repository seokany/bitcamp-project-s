/*
 * file name : jquery.touchSwipe.js
 * creator : gospel24
 * homepage : gospel24.tistory.com
 * usage
 * <script type="text/javascript">
		$(document).ready(function(){
			$("#bn_container").touchSwipe({
				banner_wrp : $("#bn_wrapper"),
				banner_lbt : $("#btn_l"),
				banner_rbt : $("#btn_r"),
				nv_btn : $(".nv_btn"),
			});
		});
	</script>
	<div id="bn_container" style="height:200px;">
		<div id="bn_wrapper">
			<div style="background-color:orange; width:300px;height:170px;border:solid 1px;float:left;"></div>
			<div style="background-color:yellow; width:300px;height:170px;border:solid 1px;float:left;"></div>
			<div style="background-color:green; width:300px;height:170px;border:solid 1px;float:left;"></div>
			<div style="background-color:blue; width:300px;height:170px;border:solid 1px;float:left;"></div>
		</div>
	</div>
	
	<div id="banner_navi">
		<img id="btn_l" src="/images/left.png" style="width:50px;" />
		<img id="btn_r" src="/images/right.png" style="width:50px;" />
	</div>
	
	<ul>
		<li class="nv_btn" style="width:100px;">1</li>
		<li class="nv_btn" style="width:100px;">2</li>
		<li class="nv_btn" style="width:100px;">3</li>
		<li class="nv_btn" style="width:100px;">4</li>
	</ul>
 */
;(function($){
	$.fn.touchSwipe = function(opts){		
		
		//browser detect
		opts.browser = (function() {
			var agt = navigator.userAgent.toLowerCase();
			if (agt.indexOf("chrome") != -1) return 'Chrome'; 
			if (agt.indexOf("opera") != -1) return 'Opera'; 
			if (agt.indexOf("staroffice") != -1) return 'Star Office'; 
			if (agt.indexOf("webtv") != -1) return 'WebTV'; 
			if (agt.indexOf("beonex") != -1) return 'Beonex'; 
			if (agt.indexOf("chimera") != -1) return 'Chimera'; 
			if (agt.indexOf("netpositive") != -1) return 'NetPositive'; 
			if (agt.indexOf("phoenix") != -1) return 'Phoenix'; 
			if (agt.indexOf("firefox") != -1) return 'Firefox'; 
			if (agt.indexOf("safari") != -1) return 'Safari'; 
			if (agt.indexOf("skipstone") != -1) return 'SkipStone'; 
			if (agt.indexOf("msie") != -1) return 'MSIE';
			if (agt.indexOf("rv:11.0") != -1) return 'MSIE11';
			if (agt.indexOf("netscape") != -1) return 'Netscape'; 
			if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla'; 
		}());

		opts = $.extend({
			banner_idx : 0,
			banner_dur : 200,
			banner_wrp : null,
			banner_lbt : null,
			banner_rbt : null,
			nv_btn : null
		}, opts);
		
		return this.each(function(){
			$.fn.extend(this, touchSwipe);
			
			var _this = this;
			
			this.opts = opts;
			this._banner_wrp = this.opts.banner_wrp;
			this._banner_wid = this.opts.banner_wrp.children().outerWidth();
			this._banner_len = this.opts.banner_wrp.children().length;
			this._banner_idx = this.opts.banner_idx;
			this._banner_dur = this.opts.banner_dur;
			this._banner_lbt = this.opts.banner_lbt;
			this._banner_rbt = this.opts.banner_rbt;
			this._nv_btn = this.opts.nv_btn;
			this._browser = this.opts.browser;
			this._start = null;
			this._deltaX;
			this._mousedown = false;
			
//			$(window).bind("orientationchange resize", function () {
//				_this.resize(_this);
//			});
			
			this.setup();
		});
	};
	
	var touchSwipe = {
		setup : function(){
			
			var _this = this;
			
			//슬라이드시 화면끊김방지를 위해 앞뒤로 마지막슬라이드, 처음슬라이드를 추가한다.
			var cloneToFirst = this._banner_wrp.children().eq(0).clone();
			var cloneToLast = this._banner_wrp.children().eq(-1).clone();
			this._banner_wrp.append(cloneToFirst);
			this._banner_wrp.prepend(cloneToLast);
			
			
			//setup css to container
			$(this).css({
				"width" : this._banner_wid,
				"position" : "relative",
				"overflow" : "hidden"
			});
			
			//앞뒤로 슬라이드 하나씩 추가했기때문에 배너의 수는 +2가 된다.
			//setup css to wrapper 
			this._banner_wrp.css({
				"width" : this._banner_wid * (this._banner_len+2),
				"position" : "absolute"
			});
			
			this._banner_wrp.css({"left": -this._banner_wid});
			
			if ( this._banner_lbt && this._banner_rbt ) {
				this._banner_lbt.bind("click", function(){
					_this.prev();
				});
				this._banner_rbt.bind("click", function(){
					_this.next();
				});
			}
			
			if ( this._nv_btn ) {
				this._nv_btn.bind("click", function(){
					if (_this._browser == "MSIE") {
						_this.showBanner($(this).index()+1);
					} else {
						_this.showBanner($(this).index());
					}
				});
			}
			
			if (this._browser == "MSIE") {
				this._banner_idx = 1;
			}
			$(this).bind("touchstart", this.onTouchStart);
			$(this).bind("touchmove", this.onTouchMove);
			$(this).bind("touchend", this.onTouchEnd);
			$(this).bind("mousedown", this.onTouchStart);
			$(this).bind("mousemove", this.onTouchMove);
			$(this).bind("mouseup mouseleave﻿", this.onTouchEnd);
			$(this).bind("dragstart", this.onTouchStart);
			$(this).bind("drag", this.onTouchMove);
			$(this).bind("dragend﻿", this.onTouchEnd);
			
			$(this).hover(function() {
				$(this).css('cursor','pointer');
			});
			
		},
		prev : function(){
			var nIndex = this._banner_idx-1;
			this.showBanner(nIndex);
		},
		next : function(){
			var nIndex = this._banner_idx+1;
			this.showBanner(nIndex);	
		},
		origin : function(){
			var nIndex = this._banner_idx;
			this.showBanner(nIndex);
		},
		showBanner : function(nIndex){
			var _this = this;
			if (this._browser == "MSIE") {
				var nPosition = -(this._banner_wid * nIndex);
				// 슬라이드 시작.
				this._banner_wrp.stop();
				this._banner_wrp.animate({
					left: nPosition
				}, 200, function(){
					// 이전 내용이 없는 경우 마지막 배너 인덱스 값으로 설정하기.
					if(nIndex<1) {
						nIndex = _this._banner_len;
						nPosition = -_this._banner_wid * nIndex;
						_this._banner_wrp.css({"left": nPosition + "px"});
					}

					// 다음 내용이 없는 경우, 첫 번째 배너 인덱스 값으로 설정하기.
					if(nIndex>_this._banner_len) {
						nIndex = 1;
						nPosition = -(_this._banner_wid * nIndex);
						_this._banner_wrp.css({"left": nPosition + "px"});
					}

					//현재 배너 인덱스 업데이트 시키기.
					_this._banner_idx = nIndex;
				});
			} else {
				var duration = this._banner_dur;
				var nPosition = -(this._banner_wid * nIndex);
				this.setTranslate3d(duration, nPosition);
				this._banner_idx = nIndex;
				
				if(nIndex<0) {
					this._banner_idx = this._banner_len-1;
					var transX = -(this._banner_wid * (this._banner_len-1));
					setTimeout(function(){
						_this.setTranslate3d(0, transX);
					}, duration);
				}

				// 다음 내용이 없는 경우, 첫 번째 배너 인덱스 값으로 설정하기.
				if(nIndex>=this._banner_len) {
					this._banner_idx = 0;
					setTimeout(function(){
						_this.setTranslate3d(0,0);
					}, duration);
				}
			}

		},
		onTouchStart: function(e) {
			if((e.type == "touchstart" && e.originalEvent.touches.length <= 1) || e.type == "mousedown" || e.type == "dragstart") {
				e.preventDefault();
				
				this._start = {
					// get touch coordinates for delta calculations in onTouchMove
					pageX: e.originalEvent.pageX || e.originalEvent.touches[0].pageX,
					pageY: e.originalEvent.pageY || e.originalEvent.touches[0].pageY,
					// set initial timestamp of touch sequence
					time: Number( new Date() )
				};
				
				//마우스다운 체크
				this._mousedown = true;
				
				// reset deltaX
				this._deltaX = 0;
				
				// set transition time to 0 for 1-to-1 touch movement
				this._banner_wrp.css({
					"-webkit-transition-duration" : "0ms",
					"-moz-transition-duration" : "0ms",
					"-ms-transition-duration" : "0ms",
					"-o-transition-duration" : "0ms",
					"transition-duration" : "0ms"
				});
				e.stopPropagation();
			}
		},
		onTouchMove: function(e) {
			if((e.type == "touchmove" && e.originalEvent.touches.length <= 1) || (e.type == "mousemove" && this._mousedown) ||  (e.type == "drag" && e.originalEvent.pageX > 0) ) {
				this._deltaX = (e.originalEvent.pageX || e.originalEvent.touches[0].pageX) - this._start.pageX;
				
				var _this = this;
				
				// prevent native scrolling 
				e.preventDefault();
				
				this._deltaX = this._deltaX / ( Math.abs(this._deltaX) / this._banner_wid + 1 ); // determine resistance level
				
				if (this._browser == "MSIE") {
					this._banner_wrp.animate({
						left: (_this._deltaX - _this._banner_idx * _this._banner_wid)
					}, 0);
				} else {
					// translate immediately 1-to-1
					this.setTranslate3d(0, this._deltaX - this._banner_idx * this._banner_wid);
				}
				
				e.stopPropagation();
			}

		},
		onTouchEnd: function(e) {
			if ( this._mousedown ) {
				this._mousedown = false;
				var isValidSlide = (Number(new Date()) - this._start.time < 250 && Math.abs(this._deltaX) > 20) || Math.abs(this._deltaX) > this._banner_wid/4;
				
				isValidSlide ? (this._deltaX < 0 ? this.next() : this.prev()) : this.origin();

				e.stopPropagation();
				
				this._deltaX = 0;
			}
		},
		setTranslate3d : function(duration, posX) {
			this._banner_wrp.css({
				"-webkit-transition-duration" : duration + 'ms',
				"-moz-transition-duration" : duration + 'ms',
				"-ms-transition-duration" : duration + 'ms',
				"-o-transition-duration" : duration + 'ms',
				"transition-duration" : duration + 'ms',
				"-webkit-transform" : "translate3d(" + posX + "px,0px,0px)",
				"-moz-transform" : "translate3d(" + posX + "px,0px,0px)",
				"-ms-yransform" : "translate3d(" + posX + "px,0px,0px)",
				"-o-transform" : "translate3d(" + posX + "px,0px,0px)",
				"transform" : "translate3d(" + posX + "px,0px,0px)"
				
//				"-webkit-transition":"all 2s ease-in-out",
//				"-webkit-perspective": "800px",
//				"-webkit-perspective-origin": "50% 100px",
//				"transition":"all 2s ease-in-out",
//				"perspective": "800px",
//				"perspective-origin": "50% 100px",
//				"-webkit-transform":"rotateY(180deg)"
			});
		}
	};
})(jQuery);
