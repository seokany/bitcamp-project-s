(function(a) {
    var c = (a.browser.msie ? "paste" : "input") + ".mask";
    var b = (window.orientation != undefined);
    a.mask = {definitions: {"9": "[0-9]",a: "[A-Za-z]","*": "[A-Za-z0-9]"}};
    a.fn.extend({caret: function(e, f) {
            if (this.length == 0) {
                return
            }
            if (typeof e == "number") {
                f = (typeof f == "number") ? f : e;
                return this.each(function() {
                    if (this.setSelectionRange) {
                        this.focus();
                        this.setSelectionRange(e, f)
                    } else {
                        if (this.createTextRange) {
                            var g = this.createTextRange();
                            g.collapse(true);
                            g.moveEnd("character", f);
                            g.moveStart("character", e);
                            g.select()
                        }
                    }
                })
            } else {
                if (this[0].setSelectionRange) {
                    e = this[0].selectionStart;
                    f = this[0].selectionEnd
                } else {
                    if (document.selection && document.selection.createRange) {
                        var d = document.selection.createRange();
                        e = 0 - d.duplicate().moveStart("character", -100000);
                        f = e + d.text.length
                    }
                }
                return {begin: e,end: f}
            }
        },unmask: function() {
            return this.trigger("unmask")
        },mask: function(j, d) {
            if (!j && this.length > 0) {
                var f = a(this[0]);
                var g = f.data("tests");
                return a.map(f.data("buffer"), function(l, m) {
                    return g[m] ? l : null
                }).join("")
            }
            d = a.extend({placeholder: "_",completed: null}, d);
            var k = a.mask.definitions;
            var g = [];
            var e = j.length;
            var i = null;
            var h = j.length;
            a.each(j.split(""), function(m, l) {
                if (l == "?") {
                    h--;
                    e = m
                } else {
                    if (k[l]) {
                        g.push(new RegExp(k[l]));
                        if (i == null) {
                            i = g.length - 1
                        }
                    } else {
                        g.push(null)
                    }
                }
            });
            return this.each(function() {
                var r = a(this);
                var m = a.map(j.split(""), function(x, y) {
                    if (x != "?") {
                        return k[x] ? d.placeholder : x
                    }
                });
                var n = false;
                var q = r.val();
                r.data("buffer", m).data("tests", g);
                function v(x) {
                    while (++x <= h && !g[x]) {
                    }
                    return x
                }
                function t(x) {
                    while (!g[x] && --x >= 0) {
                    }
                    for (var y = x; y < h; y++) {
                        if (g[y]) {
                            m[y] = d.placeholder;
                            var z = v(y);
                            if (z < h && g[y].test(m[z])) {
                                m[y] = m[z]
                            } else {
                                break
                            }
                        }
                    }
                    s();
                    r.caret(Math.max(i, x))
                }
                function u(y) {
                    for (var A = y, z = d.placeholder; A < h; A++) {
                        if (g[A]) {
                            var B = v(A);
                            var x = m[A];
                            m[A] = z;
                            if (B < h && g[B].test(x)) {
                                z = x
                            } else {
                                break
                            }
                        }
                    }
                }
                function l(y) {
                    var x = a(this).caret();
                    var z = y.keyCode;
                    n = (z < 16 || (z > 16 && z < 32) || (z > 32 && z < 41));
                    if ((x.begin - x.end) != 0 && (!n || z == 8 || z == 46)) {
                        w(x.begin, x.end)
                    }
                    if (z == 8 || z == 46 || (b && z == 127)) {
                        t(x.begin + (z == 46 ? 0 : -1));
                        return false
                    } else {
                        if (z == 27) {
                            r.val(q);
                            r.caret(0, p());
                            return false
                        }
                    }
                }
                function o(B) {
                    if (n) {
                        n = false;
                        return (B.keyCode == 8) ? false : null
                    }
                    B = B || window.event;
                    var C = B.charCode || B.keyCode || B.which;
                    var z = a(this).caret();
                    if (B.ctrlKey || B.altKey || B.metaKey) {
                        return true
                    } else {
                        if ((C >= 32 && C <= 125) || C > 186) {
                            var x = v(z.begin - 1);
                            if (x < h) {
                                var A = String.fromCharCode(C);
                                if (g[x].test(A)) {
                                    u(x);
                                    m[x] = A;
                                    s();
                                    var y = v(x);
                                    a(this).caret(y);
                                    if (d.completed && y == h) {
                                        d.completed.call(r)
                                    }
                                }
                            }
                        }
                    }
                    return false
                }
                function w(x, y) {
                    for (var z = x; z < y && z < h; z++) {
                        if (g[z]) {
                            m[z] = d.placeholder
                        }
                    }
                }
                function s() {
                    return r.val(m.join("")).val()
                }
                function p(y) {
                    var z = r.val();
                    var C = -1;
                    for (var B = 0, x = 0; B < h; B++) {
                        if (g[B]) {
                            m[B] = d.placeholder;
                            while (x++ < z.length) {
                                var A = z.charAt(x - 1);
                                if (g[B].test(A)) {
                                    m[B] = A;
                                    C = B;
                                    break
                                }
                            }
                            if (x > z.length) {
                                break
                            }
                        } else {
                            if (m[B] == z[x] && B != e) {
                                x++;
                                C = B
                            }
                        }
                    }
                    if (!y && C + 1 < e) {
                        r.val("");
                        w(0, h)
                    } else {
                        if (y || C + 1 >= e) {
                            s();
                            if (!y) {
                                r.val(r.val().substring(0, C + 1))
                            }
                        }
                    }
                    return (e ? B : i)
                }
                if (!r.attr("readonly")) {
                    r.one("unmask", function() {
                        r.unbind(".mask").removeData("buffer").removeData("tests")
                    }).bind("focus.mask", function() {
                        q = r.val();
                        var x = p();
                        s();
                        setTimeout(function() {
                            if (x == j.length) {
                                r.caret(0, x)
                            } else {
                                r.caret(x)
                            }
                        }, 0)
                    }).bind("blur.mask", function() {
                        p();
                        if (r.val() != q) {
                            r.change()
                        }
                    }).bind("keydown.mask", l).bind("keypress.mask", o).bind(c, function() {
                        setTimeout(function() {
                            r.caret(p(true))
                        }, 0)
                    })
                }
                p()
            })
        }})
})(jQuery);


// DatePicker
function DatePickerArray() {

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

	var dp = $('.DatePicker');
	var i = 0;
	dp.each(function() {
		var This = $(this);
		//console.log(This);
		This.attr("id",This.attr("name")+"_"+i);
		$(This).datepicker({showOn:'both', buttonImage: '/images/ico/ico_calendar01.png'});
		i++;
	});
	$('.DatePicker').mask('9999-99-99');
}

// TableRow
function TableRowForDatepickerArray() {

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
			if ( $('.DatePicker').length ) DatePickerArray();
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
			if ( $('.DatePicker').length ) DatePickerArray();
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