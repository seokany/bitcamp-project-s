if (! function(t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        "use strict";

        function n(t, e) {
            e = e || Z;
            var n = e.createElement("script");
            n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
        }

        function i(t) {
            var e = !!t && "length" in t && t.length,
                n = ft.type(t);
            return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function o(t, e, n) {
            if (ft.isFunction(e)) return ft.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return ft.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (Ct.test(e)) return ft.filter(e, t, n);
                e = ft.filter(e, t)
            }
            return ft.grep(t, function(t) {
                return ot.call(e, t) > -1 !== n && 1 === t.nodeType
            })
        }

        function s(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function r(t) {
            var e = {};
            return ft.each(t.match(St) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function a(t) {
            return t
        }

        function l(t) {
            throw t
        }

        function u(t, e, n) {
            var i;
            try {
                t && ft.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && ft.isFunction(i = t.then) ? i.call(t, e, n) : e.call(void 0, t)
            } catch (t) {
                n.call(void 0, t)
            }
        }

        function c() {
            Z.removeEventListener("DOMContentLoaded", c), t.removeEventListener("load", c), ft.ready()
        }

        function h() {
            this.expando = ft.expando + h.uid++
        }

        function f(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(Lt, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ht.test(n) ? JSON.parse(n) : n)
                    } catch (o) {}
                    Ot.set(t, e, n)
                } else n = void 0;
            return n
        }

        function d(t, e, n, i) {
            var o, s = 1,
                r = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return ft.css(t, e, "")
                },
                l = a(),
                u = n && n[3] || (ft.cssNumber[e] ? "" : "px"),
                c = (ft.cssNumber[e] || "px" !== u && +l) && Pt.exec(ft.css(t, e));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do s = s || ".5", c /= s, ft.style(t, e, c + u); while (s !== (s = a() / l) && 1 !== s && --r)
            }
            return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
        }

        function p(t) {
            var e, n = t.ownerDocument,
                i = t.nodeName,
                o = Rt[i];
            return o ? o : (e = n.body.appendChild(n.createElement(i)), o = ft.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Rt[i] = o, o)
        }

        function m(t, e) {
            for (var n, i, o = [], s = 0, r = t.length; r > s; s++) i = t[s], i.style && (n = i.style.display, e ? ("none" === n && (o[s] = Mt.get(i, "display") || null, o[s] || (i.style.display = "")), "" === i.style.display && qt(i) && (o[s] = p(i))) : "none" !== n && (o[s] = "none", Mt.set(i, "display", n)));
            for (s = 0; r > s; s++) null != o[s] && (t[s].style.display = o[s]);
            return t
        }

        function g(t, e) {
            var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], n) : n
        }

        function v(t, e) {
            for (var n = 0, i = t.length; i > n; n++) Mt.set(t[n], "globalEval", !e || Mt.get(e[n], "globalEval"))
        }

        function y(t, e, n, i, o) {
            for (var s, r, a, l, u, c, h = e.createDocumentFragment(), f = [], d = 0, p = t.length; p > d; d++)
                if (s = t[d], s || 0 === s)
                    if ("object" === ft.type(s)) ft.merge(f, s.nodeType ? [s] : s);
                    else if (Xt.test(s)) {
                for (r = r || h.appendChild(e.createElement("div")), a = (Vt.exec(s) || ["", ""])[1].toLowerCase(), l = zt[a] || zt._default, r.innerHTML = l[1] + ft.htmlPrefilter(s) + l[2], c = l[0]; c--;) r = r.lastChild;
                ft.merge(f, r.childNodes), r = h.firstChild, r.textContent = ""
            } else f.push(e.createTextNode(s));
            for (h.textContent = "", d = 0; s = f[d++];)
                if (i && ft.inArray(s, i) > -1) o && o.push(s);
                else if (u = ft.contains(s.ownerDocument, s), r = g(h.appendChild(s), "script"), u && v(r), n)
                for (c = 0; s = r[c++];) Ut.test(s.type || "") && n.push(s);
            return h
        }

        function b() {
            return !0
        }

        function x() {
            return !1
        }

        function w() {
            try {
                return Z.activeElement
            } catch (t) {}
        }

        function C(t, e, n, i, o, s) {
            var r, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) C(t, a, n, i, e[a], s);
                return t
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = x;
            else if (!o) return t;
            return 1 === s && (r = o, o = function(t) {
                return ft().off(t), r.apply(this, arguments)
            }, o.guid = r.guid || (r.guid = ft.guid++)), t.each(function() {
                ft.event.add(this, e, o, i, n)
            })
        }

        function _(t, e) {
            return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
        }

        function T(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function k(t) {
            var e = ee.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function E(t, e) {
            var n, i, o, s, r, a, l, u;
            if (1 === e.nodeType) {
                if (Mt.hasData(t) && (s = Mt.access(t), r = Mt.set(e, s), u = s.events)) {
                    delete r.handle, r.events = {};
                    for (o in u)
                        for (n = 0, i = u[o].length; i > n; n++) ft.event.add(e, o, u[o][n])
                }
                Ot.hasData(t) && (a = Ot.access(t), l = ft.extend({}, a), Ot.set(e, l))
            }
        }

        function D(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Bt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function S(t, e, i, o) {
            e = nt.apply([], e);
            var s, r, a, l, u, c, h = 0,
                f = t.length,
                d = f - 1,
                p = e[0],
                m = ft.isFunction(p);
            if (m || f > 1 && "string" == typeof p && !ct.checkClone && te.test(p)) return t.each(function(n) {
                var s = t.eq(n);
                m && (e[0] = p.call(this, n, s.html())), S(s, e, i, o)
            });
            if (f && (s = y(e, t[0].ownerDocument, !1, t, o), r = s.firstChild, 1 === s.childNodes.length && (s = r), r || o)) {
                for (a = ft.map(g(s, "script"), T), l = a.length; f > h; h++) u = s, h !== d && (u = ft.clone(u, !0, !0), l && ft.merge(a, g(u, "script"))), i.call(t[h], u, h);
                if (l)
                    for (c = a[a.length - 1].ownerDocument, ft.map(a, k), h = 0; l > h; h++) u = a[h], Ut.test(u.type || "") && !Mt.access(u, "globalEval") && ft.contains(c, u) && (u.src ? ft._evalUrl && ft._evalUrl(u.src) : n(u.textContent.replace(ne, ""), c))
            }
            return t
        }

        function A(t, e, n) {
            for (var i, o = e ? ft.filter(e, t) : t, s = 0; null != (i = o[s]); s++) n || 1 !== i.nodeType || ft.cleanData(g(i)), i.parentNode && (n && ft.contains(i.ownerDocument, i) && v(g(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function N(t, e, n) {
            var i, o, s, r, a = t.style;
            return n = n || se(t), n && (r = n.getPropertyValue(e) || n[e], "" !== r || ft.contains(t.ownerDocument, t) || (r = ft.style(t, e)), !ct.pixelMarginRight() && oe.test(r) && ie.test(e) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
        }

        function $(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function j(t) {
            if (t in ce) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = ue.length; n--;)
                if (t = ue[n] + e, t in ce) return t
        }

        function M(t, e, n) {
            var i = Pt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function O(t, e, n, i, o) {
            for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === n && (r += ft.css(t, n + Ft[s], !0, o)), i ? ("content" === n && (r -= ft.css(t, "padding" + Ft[s], !0, o)), "margin" !== n && (r -= ft.css(t, "border" + Ft[s] + "Width", !0, o))) : (r += ft.css(t, "padding" + Ft[s], !0, o), "padding" !== n && (r += ft.css(t, "border" + Ft[s] + "Width", !0, o)));
            return r
        }

        function H(t, e, n) {
            var i, o = !0,
                s = se(t),
                r = "border-box" === ft.css(t, "boxSizing", !1, s);
            if (t.getClientRects().length && (i = t.getBoundingClientRect()[e]), 0 >= i || null == i) {
                if (i = N(t, e, s), (0 > i || null == i) && (i = t.style[e]), oe.test(i)) return i;
                o = r && (ct.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
            }
            return i + O(t, e, n || (r ? "border" : "content"), o, s) + "px"
        }

        function L(t, e, n, i, o) {
            return new L.prototype.init(t, e, n, i, o)
        }

        function W() {
            fe && (t.requestAnimationFrame(W), ft.fx.tick())
        }

        function P() {
            return t.setTimeout(function() {
                he = void 0
            }), he = ft.now()
        }

        function F(t, e) {
            var n, i = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Ft[i], o["margin" + n] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function q(t, e, n) {
            for (var i, o = (B.tweeners[e] || []).concat(B.tweeners["*"]), s = 0, r = o.length; r > s; s++)
                if (i = o[s].call(n, e, t)) return i
        }

        function I(t, e, n) {
            var i, o, s, r, a, l, u, c, h = "width" in e || "height" in e,
                f = this,
                d = {},
                p = t.style,
                g = t.nodeType && qt(t),
                v = Mt.get(t, "fxshow");
            n.queue || (r = ft._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() {
                r.unqueued || a()
            }), r.unqueued++, f.always(function() {
                f.always(function() {
                    r.unqueued--, ft.queue(t, "fx").length || r.empty.fire()
                })
            }));
            for (i in e)
                if (o = e[i], de.test(o)) {
                    if (delete e[i], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !v || void 0 === v[i]) continue;
                        g = !0
                    }
                    d[i] = v && v[i] || ft.style(t, i)
                }
            if (l = !ft.isEmptyObject(e), l || !ft.isEmptyObject(d)) {
                h && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = v && v.display, null == u && (u = Mt.get(t, "display")), c = ft.css(t, "display"), "none" === c && (u ? c = u : (m([t], !0), u = t.style.display || u, c = ft.css(t, "display"), m([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === ft.css(t, "float") && (l || (f.done(function() {
                    p.display = u
                }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), l = !1;
                for (i in d) l || (v ? "hidden" in v && (g = v.hidden) : v = Mt.access(t, "fxshow", {
                    display: u
                }), s && (v.hidden = !g), g && m([t], !0), f.done(function() {
                    g || m([t]), Mt.remove(t, "fxshow");
                    for (i in d) ft.style(t, i, d[i])
                })), l = q(g ? v[i] : 0, i, f), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
            }
        }

        function R(t, e) {
            var n, i, o, s, r;
            for (n in t)
                if (i = ft.camelCase(n), o = e[i], s = t[n], ft.isArray(s) && (o = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), r = ft.cssHooks[i], r && "expand" in r) {
                    s = r.expand(s), delete t[i];
                    for (n in s) n in t || (t[n] = s[n], e[n] = o)
                } else e[i] = o
        }

        function B(t, e, n) {
            var i, o, s = 0,
                r = B.prefilters.length,
                a = ft.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = he || P(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, s = 1 - i, r = 0, l = u.tweens.length; l > r; r++) u.tweens[r].run(s);
                    return a.notifyWith(t, [u, s, n]), 1 > s && l ? n : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: ft.extend({}, e),
                    opts: ft.extend(!0, {
                        specialEasing: {},
                        easing: ft.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: he || P(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = ft.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) u.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (R(c, u.opts.specialEasing); r > s; s++)
                if (i = B.prefilters[s].call(u, t, c, u.opts)) return ft.isFunction(i.stop) && (ft._queueHooks(u.elem, u.opts.queue).stop = ft.proxy(i.stop, i)), i;
            return ft.map(c, q, u), ft.isFunction(u.opts.start) && u.opts.start.call(t, u), ft.fx.timer(ft.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function V(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function U(t, e, n, i) {
            var o;
            if (ft.isArray(e)) ft.each(e, function(e, o) {
                n || Ee.test(t) ? i(t, o) : U(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== ft.type(e)) i(t, e);
            else
                for (o in e) U(t + "[" + o + "]", e[o], n, i)
        }

        function z(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    s = e.toLowerCase().match(St) || [];
                if (ft.isFunction(n))
                    for (; i = s[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function X(t, e, n, i) {
            function o(a) {
                var l;
                return s[a] = !0, ft.each(t[a] || [], function(t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || r || s[u] ? r ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
                }), l
            }
            var s = {},
                r = t === Pe;
            return o(e.dataTypes[0]) || !s["*"] && o("*")
        }

        function Q(t, e) {
            var n, i, o = ft.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
            return i && ft.extend(!0, t, i), t
        }

        function G(t, e, n) {
            for (var i, o, s, r, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (o in a)
                    if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in n) s = l[0];
            else {
                for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        s = o;
                        break
                    }
                    r || (r = o)
                }
                s = s || r
            }
            return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
        }

        function Y(t, e, n, i) {
            var o, s, r, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (r in t.converters) u[r.toLowerCase()] = t.converters[r];
            for (s = c.shift(); s;)
                if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (r = u[l + " " + s] || u["* " + s], !r)
                    for (o in u)
                        if (a = o.split(" "), a[1] === s && (r = u[l + " " + a[0]] || u["* " + a[0]])) {
                            r === !0 ? r = u[o] : u[o] !== !0 && (s = a[0], c.unshift(a[1]));
                            break
                        }
                if (r !== !0)
                    if (r && t["throws"]) e = r(e);
                    else try {
                        e = r(e)
                    } catch (h) {
                        return {
                            state: "parsererror",
                            error: r ? h : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function K(t) {
            return ft.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var J = [],
            Z = t.document,
            tt = Object.getPrototypeOf,
            et = J.slice,
            nt = J.concat,
            it = J.push,
            ot = J.indexOf,
            st = {},
            rt = st.toString,
            at = st.hasOwnProperty,
            lt = at.toString,
            ut = lt.call(Object),
            ct = {},
            ht = "3.1.0",
            ft = function(t, e) {
                return new ft.fn.init(t, e)
            },
            dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            pt = /^-ms-/,
            mt = /-([a-z])/g,
            gt = function(t, e) {
                return e.toUpperCase()
            };
        ft.fn = ft.prototype = {
            jquery: ht,
            constructor: ft,
            length: 0,
            toArray: function() {
                return et.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : et.call(this)
            },
            pushStack: function(t) {
                var e = ft.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return ft.each(this, t)
            },
            map: function(t) {
                return this.pushStack(ft.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(et.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: it,
            sort: J.sort,
            splice: J.splice
        }, ft.extend = ft.fn.extend = function() {
            var t, e, n, i, o, s, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof r && (u = r, r = arguments[a] || {}, a++), "object" == typeof r || ft.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = r[e], i = t[e], r !== i && (u && i && (ft.isPlainObject(i) || (o = ft.isArray(i))) ? (o ? (o = !1, s = n && ft.isArray(n) ? n : []) : s = n && ft.isPlainObject(n) ? n : {}, r[e] = ft.extend(u, s, i)) : void 0 !== i && (r[e] = i));
            return r
        }, ft.extend({
            expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === ft.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = ft.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            },
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== rt.call(t) || (e = tt(t)) && (n = at.call(e, "constructor") && e.constructor, "function" != typeof n || lt.call(n) !== ut))
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? st[rt.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                n(t)
            },
            camelCase: function(t) {
                return t.replace(pt, "ms-").replace(mt, gt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var n, o = 0;
                if (i(t))
                    for (n = t.length; n > o && e.call(t[o], o, t[o]) !== !1; o++);
                else
                    for (o in t)
                        if (e.call(t[o], o, t[o]) === !1) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(dt, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? ft.merge(n, "string" == typeof t ? [t] : t) : it.call(n, t)), n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : ot.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i; i++) t[o++] = e[i];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i, o = [], s = 0, r = t.length, a = !n; r > s; s++) i = !e(t[s], s), i !== a && o.push(t[s]);
                return o
            },
            map: function(t, e, n) {
                var o, s, r = 0,
                    a = [];
                if (i(t))
                    for (o = t.length; o > r; r++) s = e(t[r], r, n), null != s && a.push(s);
                else
                    for (r in t) s = e(t[r], r, n), null != s && a.push(s);
                return nt.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, o;
                return "string" == typeof e && (n = t[e], e = t, t = n), ft.isFunction(t) ? (i = et.call(arguments, 2), o = function() {
                    return t.apply(e || this, i.concat(et.call(arguments)))
                }, o.guid = t.guid = t.guid || ft.guid++, o) : void 0
            },
            now: Date.now,
            support: ct
        }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = J[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            st["[object " + e + "]"] = e.toLowerCase()
        });
        var vt = function(t) {
            function e(t, e, n, i) {
                var o, s, r, a, l, u, c, f = e && e.ownerDocument,
                    p = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
                if (!i && ((e ? e.ownerDocument || e : I) !== M && j(e), e = e || M, H)) {
                    if (11 !== p && (l = vt.exec(t)))
                        if (o = l[1]) {
                            if (9 === p) {
                                if (!(r = e.getElementById(o))) return n;
                                if (r.id === o) return n.push(r), n
                            } else if (f && (r = f.getElementById(o)) && F(e, r) && r.id === o) return n.push(r), n
                        } else {
                            if (l[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = l[3]) && C.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(o)), n
                        }
                    if (C.qsa && !z[t + " "] && (!L || !L.test(t))) {
                        if (1 !== p) f = e, c = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(wt, Ct) : e.setAttribute("id", a = q), u = E(t), s = u.length; s--;) u[s] = "#" + a + " " + d(u[s]);
                            c = u.join(","), f = yt.test(t) && h(e.parentNode) || e
                        }
                        if (c) try {
                            return J.apply(n, f.querySelectorAll(c)), n
                        } catch (m) {} finally {
                            a === q && e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(at, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[q] = !0, t
            }

            function o(t) {
                var e = M.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var n = t.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = e
            }

            function r(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function u(t) {
                return function(e) {
                    return "label" in e && e.disabled === t || "form" in e && e.disabled === t || "form" in e && e.disabled === !1 && (e.isDisabled === t || e.isDisabled !== !t && ("label" in e || !Tt(e)) !== t)
                }
            }

            function c(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var o, s = t([], n.length, e), r = s.length; r--;) n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function h(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function f() {}

            function d(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function p(t, e, n) {
                var i = e.dir,
                    o = e.next,
                    s = o || i,
                    r = n && "parentNode" === s,
                    a = B++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) return t(e, n, o)
                } : function(e, n, l) {
                    var u, c, h, f = [R, a];
                    if (l) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || r) && t(e, n, l)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || r)
                                if (h = e[q] || (e[q] = {}), c = h[e.uniqueID] || (h[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;
                                else {
                                    if ((u = c[s]) && u[0] === R && u[1] === a) return f[2] = u[2];
                                    if (c[s] = f, f[2] = t(e, n, l)) return !0
                                }
                }
            }

            function m(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, n, i) {
                for (var o = 0, s = n.length; s > o; o++) e(t, n[o], i);
                return i
            }

            function v(t, e, n, i, o) {
                for (var s, r = [], a = 0, l = t.length, u = null != e; l > a; a++)(s = t[a]) && (n && !n(s, i, o) || (r.push(s), u && e.push(a)));
                return r
            }

            function y(t, e, n, o, s, r) {
                return o && !o[q] && (o = y(o)), s && !s[q] && (s = y(s, r)), i(function(i, r, a, l) {
                    var u, c, h, f = [],
                        d = [],
                        p = r.length,
                        m = i || g(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? m : v(m, f, t, a, l),
                        b = n ? s || (i ? t : p || o) ? [] : r : y;
                    if (n && n(y, b, a, l), o)
                        for (u = v(b, d), o(u, [], a, l), c = u.length; c--;)(h = u[c]) && (b[d[c]] = !(y[d[c]] = h));
                    if (i) {
                        if (s || t) {
                            if (s) {
                                for (u = [], c = b.length; c--;)(h = b[c]) && u.push(y[c] = h);
                                s(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(h = b[c]) && (u = s ? tt(i, h) : f[c]) > -1 && (i[u] = !(r[u] = h))
                        }
                    } else b = v(b === r ? b.splice(p, b.length) : b), s ? s(null, r, b, l) : J.apply(r, b)
                })
            }

            function b(t) {
                for (var e, n, i, o = t.length, s = _.relative[t[0].type], r = s || _.relative[" "], a = s ? 1 : 0, l = p(function(t) {
                        return t === e
                    }, r, !0), u = p(function(t) {
                        return tt(e, t) > -1
                    }, r, !0), c = [function(t, n, i) {
                        var o = !s && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                        return e = null, o
                    }]; o > a; a++)
                    if (n = _.relative[t[a].type]) c = [p(m(c), n)];
                    else {
                        if (n = _.filter[t[a].type].apply(null, t[a].matches), n[q]) {
                            for (i = ++a; o > i && !_.relative[t[i].type]; i++);
                            return y(a > 1 && m(c), a > 1 && d(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(at, "$1"), n, i > a && b(t.slice(a, i)), o > i && b(t = t.slice(i)), o > i && d(t))
                        }
                        c.push(n)
                    }
                return m(c)
            }

            function x(t, n) {
                var o = n.length > 0,
                    s = t.length > 0,
                    r = function(i, r, a, l, u) {
                        var c, h, f, d = 0,
                            p = "0",
                            m = i && [],
                            g = [],
                            y = A,
                            b = i || s && _.find.TAG("*", u),
                            x = R += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (u && (A = r === M || r || u); p !== w && null != (c = b[p]); p++) {
                            if (s && c) {
                                for (h = 0, r || c.ownerDocument === M || (j(c), a = !H); f = t[h++];)
                                    if (f(c, r || M, a)) {
                                        l.push(c);
                                        break
                                    }
                                u && (R = x)
                            }
                            o && ((c = !f && c) && d--, i && m.push(c))
                        }
                        if (d += p, o && p !== d) {
                            for (h = 0; f = n[h++];) f(m, g, r, a);
                            if (i) {
                                if (d > 0)
                                    for (; p--;) m[p] || g[p] || (g[p] = Y.call(l));
                                g = v(g)
                            }
                            J.apply(l, g), u && !i && g.length > 0 && d + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (R = x, A = y), m
                    };
                return o ? i(r) : r
            }
            var w, C, _, T, k, E, D, S, A, N, $, j, M, O, H, L, W, P, F, q = "sizzle" + 1 * new Date,
                I = t.document,
                R = 0,
                B = 0,
                V = n(),
                U = n(),
                z = n(),
                X = function(t, e) {
                    return t === e && ($ = !0), 0
                },
                Q = {}.hasOwnProperty,
                G = [],
                Y = G.pop,
                K = G.push,
                J = G.push,
                Z = G.slice,
                tt = function(t, e) {
                    for (var n = 0, i = t.length; i > n; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                it = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
                ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                rt = new RegExp(nt + "+", "g"),
                at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                lt = new RegExp("^" + nt + "*," + nt + "*"),
                ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                ht = new RegExp(st),
                ft = new RegExp("^" + it + "$"),
                dt = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it + "|[*])"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + st),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                pt = /^(?:input|select|textarea|button)$/i,
                mt = /^h\d$/i,
                gt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                xt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                Ct = function(t, e) {
                    return e ? "\x00" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                _t = function() {
                    j()
                },
                Tt = p(function(t) {
                    return t.disabled === !0
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                J.apply(G = Z.call(I.childNodes), I.childNodes), G[I.childNodes.length].nodeType
            } catch (kt) {
                J = {
                    apply: G.length ? function(t, e) {
                        K.apply(t, Z.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            C = e.support = {}, k = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, j = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : I;
                return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, O = M.documentElement, H = !k(M), I !== M && (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), C.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), C.getElementsByTagName = o(function(t) {
                    return t.appendChild(M.createComment("")), !t.getElementsByTagName("*").length
                }), C.getElementsByClassName = gt.test(M.getElementsByClassName), C.getById = o(function(t) {
                    return O.appendChild(t).id = q, !M.getElementsByName || !M.getElementsByName(q).length
                }), C.getById ? (_.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && H) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, _.filter.ID = function(t) {
                    var e = t.replace(bt, xt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete _.find.ID, _.filter.ID = function(t) {
                    var e = t.replace(bt, xt);
                    return function(t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), _.find.TAG = C.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : C.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = s[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return s
                }, _.find.CLASS = C.getElementsByClassName && function(t, e) {
                    return "undefined" != typeof e.getElementsByClassName && H ? e.getElementsByClassName(t) : void 0
                }, W = [], L = [], (C.qsa = gt.test(M.querySelectorAll)) && (o(function(t) {
                    O.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + q + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || L.push(".#.+[+~]")
                }), o(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = M.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + nt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), O.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                })), (C.matchesSelector = gt.test(P = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(t) {
                    C.disconnectedMatch = P.call(t, "*"), P.call(t, "[s!='']:x"), W.push("!=", st)
                }), L = L.length && new RegExp(L.join("|")), W = W.length && new RegExp(W.join("|")), e = gt.test(O.compareDocumentPosition), F = e || gt.test(O.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, X = e ? function(t, e) {
                    if (t === e) return $ = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !C.sortDetached && e.compareDocumentPosition(t) === n ? t === M || t.ownerDocument === I && F(I, t) ? -1 : e === M || e.ownerDocument === I && F(I, e) ? 1 : N ? tt(N, t) - tt(N, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return $ = !0, 0;
                    var n, i = 0,
                        o = t.parentNode,
                        s = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!o || !s) return t === M ? -1 : e === M ? 1 : o ? -1 : s ? 1 : N ? tt(N, t) - tt(N, e) : 0;
                    if (o === s) return r(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? r(a[i], l[i]) : a[i] === I ? -1 : l[i] === I ? 1 : 0
                }, M) : M
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== M && j(t), n = n.replace(ct, "='$1']"), C.matchesSelector && H && !z[n + " "] && (!W || !W.test(n)) && (!L || !L.test(n))) try {
                    var i = P.call(t, n);
                    if (i || C.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (o) {}
                return e(n, M, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== M && j(t), F(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== M && j(t);
                var n = _.attrHandle[e.toLowerCase()],
                    i = n && Q.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !H) : void 0;
                return void 0 !== i ? i : C.attributes || !H ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.escape = function(t) {
                return (t + "").replace(wt, Ct)
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if ($ = !C.detectDuplicates, N = !C.sortStable && t.slice(0), t.sort(X), $) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return N = null, t
            }, T = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += T(e);
                return n
            }, _ = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: dt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(bt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(bt, xt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = V[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && V(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(o) {
                            var s = e.attr(o, t);
                            return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var s = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var u, c, h, f, d, p, m = s !== r ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (f = e; f = f[m];)
                                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        p = m = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [r ? g.firstChild : g.lastChild], r && y) {
                                    for (f = g, h = f[q] || (f[q] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), u = c[t] || [], d = u[0] === R && u[1], b = d && u[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (b = d = 0) || p.pop();)
                                        if (1 === f.nodeType && ++b && f === e) {
                                            c[t] = [R, d, b];
                                            break
                                        }
                                } else if (y && (f = e, h = f[q] || (f[q] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), u = c[t] || [], d = u[0] === R && u[1], b = d), b === !1)
                                    for (;
                                        (f = ++d && f && f[m] || (b = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (h = f[q] || (f[q] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), c[t] = [R, b]), f !== e)););
                                return b -= o, b === i || b % i === 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var o, s = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return s[q] ? s(n) : s.length > 1 ? (o = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, o = s(t, n), r = o.length; r--;) i = tt(t, o[r]), t[i] = !(e[i] = o[r])
                        }) : function(t) {
                            return s(t, 0, o)
                        }) : s
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            o = D(t.replace(at, "$1"));
                        return o[q] ? i(function(t, e, n, i) {
                            for (var s, r = o(t, null, i, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                        }) : function(t, i, s) {
                            return e[0] = t, o(e, null, s, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(bt, xt),
                            function(e) {
                                return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, xt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === O
                    },
                    focus: function(t) {
                        return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: u(!1),
                    disabled: u(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0;
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !_.pseudos.empty(t)
                    },
                    header: function(t) {
                        return mt.test(t.nodeName)
                    },
                    input: function(t) {
                        return pt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: c(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: c(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: c(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, _.pseudos.nth = _.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) _.pseudos[w] = a(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) _.pseudos[w] = l(w);
            return f.prototype = _.filters = _.pseudos, _.setFilters = new f, E = e.tokenize = function(t, n) {
                var i, o, s, r, a, l, u, c = U[t + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = t, l = [], u = _.preFilter; a;) {
                    i && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = ut.exec(a)) && (i = o.shift(), s.push({
                        value: i,
                        type: o[0].replace(at, " ")
                    }), a = a.slice(i.length));
                    for (r in _.filter) !(o = dt[r].exec(a)) || u[r] && !(o = u[r](o)) || (i = o.shift(), s.push({
                        value: i,
                        type: r,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : U(t, l).slice(0)
            }, D = e.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    s = z[t + " "];
                if (!s) {
                    for (e || (e = E(t)), n = e.length; n--;) s = b(e[n]), s[q] ? i.push(s) : o.push(s);
                    s = z(t, x(o, i)), s.selector = t
                }
                return s
            }, S = e.select = function(t, e, n, i) {
                var o, s, r, a, l, u = "function" == typeof t && t,
                    c = !i && E(t = u.selector || t);
                if (n = n || [], 1 === c.length) {
                    if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && C.getById && 9 === e.nodeType && H && _.relative[s[1].type]) {
                        if (e = (_.find.ID(r.matches[0].replace(bt, xt), e) || [])[0], !e) return n;
                        u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (o = dt.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !_.relative[a = r.type]);)
                        if ((l = _.find[a]) && (i = l(r.matches[0].replace(bt, xt), yt.test(s[0].type) && h(e.parentNode) || e))) {
                            if (s.splice(o, 1), t = i.length && d(s), !t) return J.apply(n, i), n;
                            break
                        }
                }
                return (u || D(t, c))(i, e, !H, n, !e || yt.test(t) && h(e.parentNode) || e), n
            }, C.sortStable = q.split("").sort(X).join("") === q, C.detectDuplicates = !!$, j(), C.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(M.createElement("fieldset"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), C.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || s(et, function(t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        ft.find = vt, ft.expr = vt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = vt.uniqueSort, ft.text = vt.getText, ft.isXMLDoc = vt.isXML, ft.contains = vt.contains, ft.escapeSelector = vt.escape;
        var yt = function(t, e, n) {
                for (var i = [], o = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && ft(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            bt = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            xt = ft.expr.match.needsContext,
            wt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Ct = /^.[^:#\[\.,]*$/;
        ft.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, ft.fn.extend({
            find: function(t) {
                var e, n, i = this.length,
                    o = this;
                if ("string" != typeof t) return this.pushStack(ft(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (ft.contains(o[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; i > e; e++) ft.find(t, o[e], n);
                return i > 1 ? ft.uniqueSort(n) : n
            },
            filter: function(t) {
                return this.pushStack(o(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(o(this, t || [], !0))
            },
            is: function(t) {
                return !!o(this, "string" == typeof t && xt.test(t) ? ft(t) : t || [], !1).length
            }
        });
        var _t, Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            kt = ft.fn.init = function(t, e, n) {
                var i, o;
                if (!t) return this;
                if (n = n || _t, "string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Tt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), wt.test(i[1]) && ft.isPlainObject(e))
                            for (i in e) ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return o = Z.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
                }
                return t.nodeType ? (this[0] = t, this.length = 1, this) : ft.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ft) : ft.makeArray(t, this)
            };
        kt.prototype = ft.fn, _t = ft(Z);
        var Et = /^(?:parents|prev(?:Until|All))/,
            Dt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ft.fn.extend({
            has: function(t) {
                var e = ft(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; n > t; t++)
                        if (ft.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var n, i = 0,
                    o = this.length,
                    s = [],
                    r = "string" != typeof t && ft(t);
                if (!xt.test(t))
                    for (; o > i; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                                s.push(n);
                                break
                            }
                return this.pushStack(s.length > 1 ? ft.uniqueSort(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? ot.call(ft(t), this[0]) : ot.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ft.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return yt(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return yt(t, "parentNode", n)
            },
            next: function(t) {
                return s(t, "nextSibling")
            },
            prev: function(t) {
                return s(t, "previousSibling")
            },
            nextAll: function(t) {
                return yt(t, "nextSibling")
            },
            prevAll: function(t) {
                return yt(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return yt(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return yt(t, "previousSibling", n)
            },
            siblings: function(t) {
                return bt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return bt(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || ft.merge([], t.childNodes)
            }
        }, function(t, e) {
            ft.fn[t] = function(n, i) {
                var o = ft.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ft.filter(i, o)), this.length > 1 && (Dt[t] || ft.uniqueSort(o), Et.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var St = /\S+/g;
        ft.Callbacks = function(t) {
            t = "string" == typeof t ? r(t) : ft.extend({}, t);
            var e, n, i, o, s = [],
                a = [],
                l = -1,
                u = function() {
                    for (o = t.once, i = e = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                    t.memory || (n = !1), e = !1, o && (s = n ? [] : "")
                },
                c = {
                    add: function() {
                        return s && (n && !e && (l = s.length - 1, a.push(n)), function i(e) {
                            ft.each(e, function(e, n) {
                                ft.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== ft.type(n) && i(n)
                            })
                        }(arguments), n && !e && u()), this
                    },
                    remove: function() {
                        return ft.each(arguments, function(t, e) {
                            for (var n;
                                (n = ft.inArray(e, s, n)) > -1;) s.splice(n, 1), l >= n && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? ft.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return o = a = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return o = a = [], n || e || (s = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(t, n) {
                        return o || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, ft.extend({
            Deferred: function(e) {
                var n = [
                        ["notify", "progress", ft.Callbacks("memory"), ft.Callbacks("memory"), 2],
                        ["resolve", "done", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    o = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        "catch": function(t) {
                            return o.then(null, t)
                        },
                        pipe: function() {
                            var t = arguments;
                            return ft.Deferred(function(e) {
                                ft.each(n, function(n, i) {
                                    var o = ft.isFunction(t[i[4]]) && t[i[4]];
                                    s[i[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && ft.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function(e, i, o) {
                            function s(e, n, i, o) {
                                return function() {
                                    var u = this,
                                        c = arguments,
                                        h = function() {
                                            var t, h;
                                            if (!(r > e)) {
                                                if (t = i.apply(u, c), t === n.promise()) throw new TypeError("Thenable self-resolution");
                                                h = t && ("object" == typeof t || "function" == typeof t) && t.then, ft.isFunction(h) ? o ? h.call(t, s(r, n, a, o), s(r, n, l, o)) : (r++, h.call(t, s(r, n, a, o), s(r, n, l, o), s(r, n, a, n.notifyWith))) : (i !== a && (u = void 0, c = [t]), (o || n.resolveWith)(u, c))
                                            }
                                        },
                                        f = o ? h : function() {
                                            try {
                                                h()
                                            } catch (t) {
                                                ft.Deferred.exceptionHook && ft.Deferred.exceptionHook(t, f.stackTrace), e + 1 >= r && (i !== l && (u = void 0, c = [t]), n.rejectWith(u, c))
                                            }
                                        };
                                    e ? f() : (ft.Deferred.getStackHook && (f.stackTrace = ft.Deferred.getStackHook()), t.setTimeout(f))
                                }
                            }
                            var r = 0;
                            return ft.Deferred(function(t) {
                                n[0][3].add(s(0, t, ft.isFunction(o) ? o : a, t.notifyWith)), n[1][3].add(s(0, t, ft.isFunction(e) ? e : a)), n[2][3].add(s(0, t, ft.isFunction(i) ? i : l))
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ft.extend(t, o) : o
                        }
                    },
                    s = {};
                return ft.each(n, function(t, e) {
                    var r = e[2],
                        a = e[5];
                    o[e[1]] = r.add, a && r.add(function() {
                        i = a
                    }, n[3 - t][2].disable, n[0][2].lock), r.add(e[3].fire), s[e[0]] = function() {
                        return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                    }, s[e[0] + "With"] = r.fireWith
                }), o.promise(s), e && e.call(s, s), s
            },
            when: function(t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    o = et.call(arguments),
                    s = ft.Deferred(),
                    r = function(t) {
                        return function(n) {
                            i[t] = this, o[t] = arguments.length > 1 ? et.call(arguments) : n, --e || s.resolveWith(i, o)
                        }
                    };
                if (1 >= e && (u(t, s.done(r(n)).resolve, s.reject), "pending" === s.state() || ft.isFunction(o[n] && o[n].then))) return s.then();
                for (; n--;) u(o[n], r(n), s.reject);
                return s.promise()
            }
        });
        var At = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        ft.Deferred.exceptionHook = function(e, n) {
            t.console && t.console.warn && e && At.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
        }, ft.readyException = function(e) {
            t.setTimeout(function() {
                throw e
            })
        };
        var Nt = ft.Deferred();
        ft.fn.ready = function(t) {
            return Nt.then(t)["catch"](function(t) {
                ft.readyException(t)
            }), this
        }, ft.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? ft.readyWait++ : ft.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, t !== !0 && --ft.readyWait > 0 || Nt.resolveWith(Z, [ft]))
            }
        }), ft.ready.then = Nt.then, "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? t.setTimeout(ft.ready) : (Z.addEventListener("DOMContentLoaded", c), t.addEventListener("load", c));
        var $t = function(t, e, n, i, o, s, r) {
                var a = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === ft.type(n)) {
                    o = !0;
                    for (a in n) $t(t, e, a, n[a], !0, s, r)
                } else if (void 0 !== i && (o = !0, ft.isFunction(i) || (r = !0), u && (r ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(ft(t), n)
                    })), e))
                    for (; l > a; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : u ? e.call(t) : l ? e(t[0], n) : s
            },
            jt = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        h.uid = 1, h.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, jt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e) o[ft.camelCase(e)] = n;
                else
                    for (i in e) o[ft.camelCase(i)] = e[i];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][ft.camelCase(e)]
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        ft.isArray(e) ? e = e.map(ft.camelCase) : (e = ft.camelCase(e), e = e in i ? [e] : e.match(St) || []), n = e.length;
                        for (; n--;) delete i[e[n]]
                    }(void 0 === e || ft.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !ft.isEmptyObject(e)
            }
        };
        var Mt = new h,
            Ot = new h,
            Ht = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Lt = /[A-Z]/g;
        ft.extend({
            hasData: function(t) {
                return Ot.hasData(t) || Mt.hasData(t)
            },
            data: function(t, e, n) {
                return Ot.access(t, e, n)
            },
            removeData: function(t, e) {
                Ot.remove(t, e)
            },
            _data: function(t, e, n) {
                return Mt.access(t, e, n)
            },
            _removeData: function(t, e) {
                Mt.remove(t, e)
            }
        }), ft.fn.extend({
            data: function(t, e) {
                var n, i, o, s = this[0],
                    r = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (o = Ot.get(s), 1 === s.nodeType && !Mt.get(s, "hasDataAttrs"))) {
                        for (n = r.length; n--;) r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = ft.camelCase(i.slice(5)), f(s, i, o[i])));
                        Mt.set(s, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    Ot.set(this, t)
                }) : $t(this, function(e) {
                    var n;
                    if (s && void 0 === e) {
                        if (n = Ot.get(s, t), void 0 !== n) return n;
                        if (n = f(s, t), void 0 !== n) return n
                    } else this.each(function() {
                        Ot.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Ot.remove(this, t)
                })
            }
        }), ft.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = Mt.get(t, e), n && (!i || ft.isArray(n) ? i = Mt.access(t, e, ft.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = ft.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    s = ft._queueHooks(t, e),
                    r = function() {
                        ft.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !i && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return Mt.get(t, n) || Mt.access(t, n, {
                    empty: ft.Callbacks("once memory").add(function() {
                        Mt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), ft.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = ft.queue(this, t, e);
                    ft._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ft.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = ft.Deferred(),
                    s = this,
                    r = this.length,
                    a = function() {
                        --i || o.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) n = Mt.get(s[r], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var Wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Pt = new RegExp("^(?:([+-])=|)(" + Wt + ")([a-z%]*)$", "i"),
            Ft = ["Top", "Right", "Bottom", "Left"],
            qt = function(t, e) {
                return t = e || t, "none" === t.style.display || "" === t.style.display && ft.contains(t.ownerDocument, t) && "none" === ft.css(t, "display")
            },
            It = function(t, e, n, i) {
                var o, s, r = {};
                for (s in e) r[s] = t.style[s], t.style[s] = e[s];
                o = n.apply(t, i || []);
                for (s in e) t.style[s] = r[s];
                return o
            },
            Rt = {};
        ft.fn.extend({
            show: function() {
                return m(this, !0)
            },
            hide: function() {
                return m(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    qt(this) ? ft(this).show() : ft(this).hide()
                })
            }
        });
        var Bt = /^(?:checkbox|radio)$/i,
            Vt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Ut = /^$|\/(?:java|ecma)script/i,
            zt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
        var Xt = /<|&#?\w+;/;
        ! function() {
            var t = Z.createDocumentFragment(),
                e = t.appendChild(Z.createElement("div")),
                n = Z.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ct.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ct.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Qt = Z.documentElement,
            Gt = /^key/,
            Yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Kt = /^([^.]*)(?:\.(.+)|)/;
        ft.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var s, r, a, l, u, c, h, f, d, p, m, g = Mt.get(t);
                if (g)
                    for (n.handler && (s = n, n = s.handler, o = s.selector), o && ft.find.matchesSelector(Qt, o), n.guid || (n.guid = ft.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(e) {
                            return "undefined" != typeof ft && ft.event.triggered !== e.type ? ft.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(St) || [""], u = e.length; u--;) a = Kt.exec(e[u]) || [], d = m = a[1], p = (a[2] || "").split(".").sort(), d && (h = ft.event.special[d] || {}, d = (o ? h.delegateType : h.bindType) || d, h = ft.event.special[d] || {}, c = ft.extend({
                        type: d,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && ft.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, s), (f = l[d]) || (f = l[d] = [], f.delegateCount = 0, h.setup && h.setup.call(t, i, p, r) !== !1 || t.addEventListener && t.addEventListener(d, r)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), ft.event.global[d] = !0)
            },
            remove: function(t, e, n, i, o) {
                var s, r, a, l, u, c, h, f, d, p, m, g = Mt.hasData(t) && Mt.get(t);
                if (g && (l = g.events)) {
                    for (e = (e || "").match(St) || [""], u = e.length; u--;)
                        if (a = Kt.exec(e[u]) || [], d = m = a[1], p = (a[2] || "").split(".").sort(), d) {
                            for (h = ft.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, f = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = f.length; s--;) c = f[s], !o && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(s, 1), c.selector && f.delegateCount--, h.remove && h.remove.call(t, c));
                            r && !f.length && (h.teardown && h.teardown.call(t, p, g.handle) !== !1 || ft.removeEvent(t, d, g.handle), delete l[d])
                        } else
                            for (d in l) ft.event.remove(t, d + e[u], n, i, !0);
                    ft.isEmptyObject(l) && Mt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, o, s, r, a = ft.event.fix(t),
                    l = new Array(arguments.length),
                    u = (Mt.get(this, "events") || {})[a.type] || [],
                    c = ft.event.special[a.type] || {};
                for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (a.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, a) !== !1) {
                    for (r = ft.event.handlers.call(this, a, u), e = 0;
                        (o = r[e++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = o.elem, n = 0;
                            (s = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, i = ((ft.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, s, r = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (i = [], n = 0; a > n; n++) s = e[n], o = s.selector + " ", void 0 === i[o] && (i[o] = s.needsContext ? ft(o, this).index(l) > -1 : ft.find(o, this, null, [l]).length), i[o] && i.push(s);
                            i.length && r.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return a < e.length && r.push({
                    elem: this,
                    handlers: e.slice(a)
                }), r
            },
            addProp: function(t, e) {
                Object.defineProperty(ft.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: ft.isFunction(e) ? function() {
                        return this.originalEvent ? e(this.originalEvent) : void 0
                    } : function() {
                        return this.originalEvent ? this.originalEvent[t] : void 0
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[ft.expando] ? t : new ft.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== w() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === w() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && ft.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return ft.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, ft.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, ft.Event = function(t, e) {
            return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? b : x, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void(this[ft.expando] = !0)) : new ft.Event(t, e)
        }, ft.Event.prototype = {
            constructor: ft.Event,
            isDefaultPrevented: x,
            isPropagationStopped: x,
            isImmediatePropagationStopped: x,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = b, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = b, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = b, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ft.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && Gt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Yt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, ft.event.addProp), ft.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            ft.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        s = t.handleObj;
                    return o && (o === i || ft.contains(i, o)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ft.fn.extend({
            on: function(t, e, n, i) {
                return C(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return C(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = x), this.each(function() {
                    ft.event.remove(this, t, n, e)
                })
            }
        });
        var Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Zt = /<script|<style|<link/i,
            te = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ee = /^true\/(.*)/,
            ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ft.extend({
            htmlPrefilter: function(t) {
                return t.replace(Jt, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, o, s, r, a = t.cloneNode(!0),
                    l = ft.contains(t.ownerDocument, t);
                if (!(ct.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                    for (r = g(a), s = g(t), i = 0, o = s.length; o > i; i++) D(s[i], r[i]);
                if (e)
                    if (n)
                        for (s = s || g(t), r = r || g(a), i = 0, o = s.length; o > i; i++) E(s[i], r[i]);
                    else E(t, a);
                return r = g(a, "script"), r.length > 0 && v(r, !l && g(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, n, i, o = ft.event.special, s = 0; void 0 !== (n = t[s]); s++)
                    if (jt(n)) {
                        if (e = n[Mt.expando]) {
                            if (e.events)
                                for (i in e.events) o[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, e.handle);
                            n[Mt.expando] = void 0
                        }
                        n[Ot.expando] && (n[Ot.expando] = void 0)
                    }
            }
        }), ft.fn.extend({
            detach: function(t) {
                return A(this, t, !0)
            },
            remove: function(t) {
                return A(this, t)
            },
            text: function(t) {
                return $t(this, function(t) {
                    return void 0 === t ? ft.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return S(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = _(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return S(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = _(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return S(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return S(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ft.cleanData(g(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return ft.clone(this, t, e)
                })
            },
            html: function(t) {
                return $t(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Zt.test(t) && !zt[(Vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = ft.htmlPrefilter(t);
                        try {
                            for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (ft.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (o) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return S(this, arguments, function(e) {
                    var n = this.parentNode;
                    ft.inArray(this, t) < 0 && (ft.cleanData(g(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), ft.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ft.fn[t] = function(t) {
                for (var n, i = [], o = ft(t), s = o.length - 1, r = 0; s >= r; r++) n = r === s ? this : this.clone(!0), ft(o[r])[e](n), it.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var ie = /^margin/,
            oe = new RegExp("^(" + Wt + ")(?!px)[a-z%]+$", "i"),
            se = function(e) {
                var n = e.ownerDocument.defaultView;
                return n && n.opener || (n = t), n.getComputedStyle(e)
            };
        ! function() {
            function e() {
                if (a) {
                    a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qt.appendChild(r);
                    var e = t.getComputedStyle(a);
                    n = "1%" !== e.top, s = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Qt.removeChild(r), a = null
                }
            }
            var n, i, o, s, r = Z.createElement("div"),
                a = Z.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ct.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), ft.extend(ct, {
                pixelPosition: function() {
                    return e(), n
                },
                boxSizingReliable: function() {
                    return e(), i
                },
                pixelMarginRight: function() {
                    return e(), o
                },
                reliableMarginLeft: function() {
                    return e(), s
                }
            }))
        }();
        var re = /^(none|table(?!-c[ea]).+)/,
            ae = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            le = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ue = ["Webkit", "Moz", "ms"],
            ce = Z.createElement("div").style;
        ft.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = N(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, s, r, a = ft.camelCase(e),
                        l = t.style;
                    return e = ft.cssProps[a] || (ft.cssProps[a] = j(a) || a), r = ft.cssHooks[e] || ft.cssHooks[a], void 0 === n ? r && "get" in r && void 0 !== (o = r.get(t, !1, i)) ? o : l[e] : (s = typeof n, "string" === s && (o = Pt.exec(n)) && o[1] && (n = d(t, e, o), s = "number"), void(null != n && n === n && ("number" === s && (n += o && o[3] || (ft.cssNumber[a] ? "" : "px")), ct.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (n = r.set(t, n, i)) || (l[e] = n))))
                }
            },
            css: function(t, e, n, i) {
                var o, s, r, a = ft.camelCase(e);
                return e = ft.cssProps[a] || (ft.cssProps[a] = j(a) || a), r = ft.cssHooks[e] || ft.cssHooks[a], r && "get" in r && (o = r.get(t, !0, n)), void 0 === o && (o = N(t, e, i)), "normal" === o && e in le && (o = le[e]), "" === n || n ? (s = parseFloat(o), n === !0 || isFinite(s) ? s || 0 : o) : o
            }
        }), ft.each(["height", "width"], function(t, e) {
            ft.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? !re.test(ft.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? H(t, e, i) : It(t, ae, function() {
                        return H(t, e, i)
                    }) : void 0
                },
                set: function(t, n, i) {
                    var o, s = i && se(t),
                        r = i && O(t, e, i, "border-box" === ft.css(t, "boxSizing", !1, s), s);
                    return r && (o = Pt.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = ft.css(t, e)), M(t, n, r)
                }
            }
        }), ft.cssHooks.marginLeft = $(ct.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(N(t, "marginLeft")) || t.getBoundingClientRect().left - It(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
        }), ft.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ft.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + Ft[i] + e] = s[i] || s[i - 2] || s[0];
                    return o
                }
            }, ie.test(t) || (ft.cssHooks[t + e].set = M)
        }), ft.fn.extend({
            css: function(t, e) {
                return $t(this, function(t, e, n) {
                    var i, o, s = {},
                        r = 0;
                    if (ft.isArray(e)) {
                        for (i = se(t), o = e.length; o > r; r++) s[e[r]] = ft.css(t, e[r], !1, i);
                        return s
                    }
                    return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), ft.Tween = L, L.prototype = {
            constructor: L,
            init: function(t, e, n, i, o, s) {
                this.elem = t, this.prop = n, this.easing = o || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (ft.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = L.propHooks[this.prop];
                return t && t.get ? t.get(this) : L.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = L.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ft.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, ft.fx = L.prototype.init, ft.fx.step = {};
        var he, fe, de = /^(?:toggle|show|hide)$/,
            pe = /queueHooks$/;
        ft.Animation = ft.extend(B, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return d(n.elem, t, Pt.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(St);
                    for (var n, i = 0, o = t.length; o > i; i++) n = t[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(e)
                },
                prefilters: [I],
                prefilter: function(t, e) {
                    e ? B.prefilters.unshift(t) : B.prefilters.push(t)
                }
            }), ft.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? ft.extend({}, t) : {
                    complete: n || !n && e || ft.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !ft.isFunction(e) && e
                };
                return ft.fx.off || Z.hidden ? i.duration = 0 : i.duration = "number" == typeof i.duration ? i.duration : i.duration in ft.fx.speeds ? ft.fx.speeds[i.duration] : ft.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue)
                }, i
            }, ft.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(qt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = ft.isEmptyObject(t),
                        s = ft.speed(e, n, i),
                        r = function() {
                            var e = B(this, ft.extend({}, t), s);
                            (o || Mt.get(this, "finish")) && e.stop(!0)
                        };
                    return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            s = ft.timers,
                            r = Mt.get(this);
                        if (o) r[o] && r[o].stop && i(r[o]);
                        else
                            for (o in r) r[o] && r[o].stop && pe.test(o) && i(r[o]);
                        for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(n), e = !1, s.splice(o, 1));
                        !e && n || ft.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = Mt.get(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            s = ft.timers,
                            r = i ? i.length : 0;
                        for (n.finish = !0, ft.queue(this, t, []),
                            o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; r > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), ft.each(["toggle", "show", "hide"], function(t, e) {
                var n = ft.fn[e];
                ft.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(F(e, !0), t, i, o)
                }
            }), ft.each({
                slideDown: F("show"),
                slideUp: F("hide"),
                slideToggle: F("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                ft.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), ft.timers = [], ft.fx.tick = function() {
                var t, e = 0,
                    n = ft.timers;
                for (he = ft.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                n.length || ft.fx.stop(), he = void 0
            }, ft.fx.timer = function(t) {
                ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
            }, ft.fx.interval = 13, ft.fx.start = function() {
                fe || (fe = t.requestAnimationFrame ? t.requestAnimationFrame(W) : t.setInterval(ft.fx.tick, ft.fx.interval))
            }, ft.fx.stop = function() {
                t.cancelAnimationFrame ? t.cancelAnimationFrame(fe) : t.clearInterval(fe), fe = null
            }, ft.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ft.fn.delay = function(e, n) {
                return e = ft.fx ? ft.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                    var o = t.setTimeout(n, e);
                    i.stop = function() {
                        t.clearTimeout(o)
                    }
                })
            },
            function() {
                var t = Z.createElement("input"),
                    e = Z.createElement("select"),
                    n = e.appendChild(Z.createElement("option"));
                t.type = "checkbox", ct.checkOn = "" !== t.value, ct.optSelected = n.selected, t = Z.createElement("input"), t.value = "t", t.type = "radio", ct.radioValue = "t" === t.value
            }();
        var me, ge = ft.expr.attrHandle;
        ft.fn.extend({
            attr: function(t, e) {
                return $t(this, ft.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ft.removeAttr(this, t)
                })
            }
        }), ft.extend({
            attr: function(t, e, n) {
                var i, o, s = t.nodeType;
                return 3 !== s && 8 !== s && 2 !== s ? "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === s && ft.isXMLDoc(t) || (o = ft.attrHooks[e.toLowerCase()] || (ft.expr.match.bool.test(e) ? me : void 0)), void 0 !== n ? null === n ? void ft.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = ft.find.attr(t, e), null == i ? void 0 : i)) : void 0
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!ct.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i = 0,
                    o = e && e.match(St);
                if (o && 1 === t.nodeType)
                    for (; n = o[i++];) t.removeAttribute(n)
            }
        }), me = {
            set: function(t, e, n) {
                return e === !1 ? ft.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = ge[e] || ft.find.attr;
            ge[e] = function(t, e, i) {
                var o, s, r = e.toLowerCase();
                return i || (s = ge[r], ge[r] = o, o = null != n(t, e, i) ? r : null, ge[r] = s), o
            }
        });
        var ve = /^(?:input|select|textarea|button)$/i,
            ye = /^(?:a|area)$/i;
        ft.fn.extend({
            prop: function(t, e) {
                return $t(this, ft.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[ft.propFix[t] || t]
                })
            }
        }), ft.extend({
            prop: function(t, e, n) {
                var i, o, s = t.nodeType;
                return 3 !== s && 8 !== s && 2 !== s ? (1 === s && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, o = ft.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ft.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ve.test(t.nodeName) || ye.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), ct.optSelected || (ft.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ft.propFix[this.toLowerCase()] = this
        });
        var be = /[\t\r\n\f]/g;
        ft.fn.extend({
            addClass: function(t) {
                var e, n, i, o, s, r, a, l = 0;
                if (ft.isFunction(t)) return this.each(function(e) {
                    ft(this).addClass(t.call(this, e, V(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(St) || []; n = this[l++];)
                        if (o = V(n), i = 1 === n.nodeType && (" " + o + " ").replace(be, " ")) {
                            for (r = 0; s = e[r++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            a = ft.trim(i), o !== a && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, s, r, a, l = 0;
                if (ft.isFunction(t)) return this.each(function(e) {
                    ft(this).removeClass(t.call(this, e, V(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(St) || []; n = this[l++];)
                        if (o = V(n), i = 1 === n.nodeType && (" " + o + " ").replace(be, " ")) {
                            for (r = 0; s = e[r++];)
                                for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                            a = ft.trim(i), o !== a && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(n) {
                    ft(this).toggleClass(t.call(this, n, V(this), e), e)
                }) : this.each(function() {
                    var e, i, o, s;
                    if ("string" === n)
                        for (i = 0, o = ft(this), s = t.match(St) || []; e = s[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = V(this), e && Mt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Mt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + V(n) + " ").replace(be, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var xe = /\r/g,
            we = /[\x20\t\r\n\f]+/g;
        ft.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = ft.isFunction(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? t.call(this, n, ft(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ft.isArray(o) && (o = ft.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = ft.valHooks[o.type] || ft.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(xe, "") : null == n ? "" : n)) : void 0
            }
        }), ft.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ft.find.attr(t, "value");
                        return null != e ? e : ft.trim(ft.text(t)).replace(we, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, s = "select-one" === t.type, r = s ? null : [], a = s ? o + 1 : i.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                            if (n = i[l], (n.selected || l === o) && !n.disabled && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                                if (e = ft(n).val(), s) return e;
                                r.push(e)
                            }
                        return r
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, s = ft.makeArray(e), r = o.length; r--;) i = o[r], (i.selected = ft.inArray(ft.valHooks.option.get(i), s) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), s
                    }
                }
            }
        }), ft.each(["radio", "checkbox"], function() {
            ft.valHooks[this] = {
                set: function(t, e) {
                    return ft.isArray(e) ? t.checked = ft.inArray(ft(t).val(), e) > -1 : void 0
                }
            }, ct.checkOn || (ft.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Ce = /^(?:focusinfocus|focusoutblur)$/;
        ft.extend(ft.event, {
            trigger: function(e, n, i, o) {
                var s, r, a, l, u, c, h, f = [i || Z],
                    d = at.call(e, "type") ? e.type : e,
                    p = at.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = a = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !Ce.test(d + ft.event.triggered) && (d.indexOf(".") > -1 && (p = d.split("."), d = p.shift(), p.sort()), u = d.indexOf(":") < 0 && "on" + d, e = e[ft.expando] ? e : new ft.Event(d, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ft.makeArray(n, [e]), h = ft.event.special[d] || {}, o || !h.trigger || h.trigger.apply(i, n) !== !1)) {
                    if (!o && !h.noBubble && !ft.isWindow(i)) {
                        for (l = h.delegateType || d, Ce.test(l + d) || (r = r.parentNode); r; r = r.parentNode) f.push(r), a = r;
                        a === (i.ownerDocument || Z) && f.push(a.defaultView || a.parentWindow || t)
                    }
                    for (s = 0;
                        (r = f[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : h.bindType || d, c = (Mt.get(r, "events") || {})[e.type] && Mt.get(r, "handle"), c && c.apply(r, n), c = u && r[u], c && c.apply && jt(r) && (e.result = c.apply(r, n), e.result === !1 && e.preventDefault());
                    return e.type = d, o || e.isDefaultPrevented() || h._default && h._default.apply(f.pop(), n) !== !1 || !jt(i) || u && ft.isFunction(i[d]) && !ft.isWindow(i) && (a = i[u], a && (i[u] = null), ft.event.triggered = d, i[d](), ft.event.triggered = void 0, a && (i[u] = a)), e.result
                }
            },
            simulate: function(t, e, n) {
                var i = ft.extend(new ft.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                ft.event.trigger(i, null, e)
            }
        }), ft.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    ft.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? ft.event.trigger(t, e, n, !0) : void 0
            }
        }), ft.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            ft.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ft.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), ct.focusin = "onfocusin" in t, ct.focusin || ft.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                ft.event.simulate(e, t.target, ft.event.fix(t))
            };
            ft.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = Mt.access(i, e);
                    o || i.addEventListener(t, n, !0), Mt.access(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = Mt.access(i, e) - 1;
                    o ? Mt.access(i, e, o) : (i.removeEventListener(t, n, !0), Mt.remove(i, e))
                }
            }
        });
        var _e = t.location,
            Te = ft.now(),
            ke = /\?/;
        ft.parseXML = function(e) {
            var n;
            if (!e || "string" != typeof e) return null;
            try {
                n = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (i) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), n
        };
        var Ee = /\[\]$/,
            De = /\r?\n/g,
            Se = /^(?:submit|button|image|reset|file)$/i,
            Ae = /^(?:input|select|textarea|keygen)/i;
        ft.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    var n = ft.isFunction(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) U(n, t[n], e, o);
            return i.join("&")
        }, ft.fn.extend({
            serialize: function() {
                return ft.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ft.prop(this, "elements");
                    return t ? ft.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ft(this).is(":disabled") && Ae.test(this.nodeName) && !Se.test(t) && (this.checked || !Bt.test(t))
                }).map(function(t, e) {
                    var n = ft(this).val();
                    return null == n ? null : ft.isArray(n) ? ft.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(De, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(De, "\r\n")
                    }
                }).get()
            }
        });
        var Ne = /%20/g,
            $e = /#.*$/,
            je = /([?&])_=[^&]*/,
            Me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Oe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            He = /^(?:GET|HEAD)$/,
            Le = /^\/\//,
            We = {},
            Pe = {},
            Fe = "*/".concat("*"),
            qe = Z.createElement("a");
        qe.href = _e.href, ft.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: _e.href,
                type: "GET",
                isLocal: Oe.test(_e.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Fe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": ft.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Q(Q(t, ft.ajaxSettings), e) : Q(ft.ajaxSettings, t)
            },
            ajaxPrefilter: z(We),
            ajaxTransport: z(Pe),
            ajax: function(e, n) {
                function i(e, n, i, a) {
                    var u, f, d, x, w, C = n;
                    c || (c = !0, l && t.clearTimeout(l), o = void 0, r = a || "", _.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, i && (x = G(p, _, i)), x = Y(p, x, _, u), u ? (p.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (ft.lastModified[s] = w), w = _.getResponseHeader("etag"), w && (ft.etag[s] = w)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, f = x.data, d = x.error, u = !d)) : (d = C, !e && C || (C = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (n || C) + "", u ? v.resolveWith(m, [f, C, _]) : v.rejectWith(m, [_, C, d]), _.statusCode(b), b = void 0, h && g.trigger(u ? "ajaxSuccess" : "ajaxError", [_, p, u ? f : d]), y.fireWith(m, [_, C]), h && (g.trigger("ajaxComplete", [_, p]), --ft.active || ft.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var o, s, r, a, l, u, c, h, f, d, p = ft.ajaxSetup({}, n),
                    m = p.context || p,
                    g = p.context && (m.nodeType || m.jquery) ? ft(m) : ft.event,
                    v = ft.Deferred(),
                    y = ft.Callbacks("once memory"),
                    b = p.statusCode || {},
                    x = {},
                    w = {},
                    C = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (c) {
                                if (!a)
                                    for (a = {}; e = Me.exec(r);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return c ? r : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == c && (p.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (c) _.always(t[_.status]);
                                else
                                    for (e in t) b[e] = [b[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || C;
                            return o && o.abort(e), i(0, e), this
                        }
                    };
                if (v.promise(_), p.url = ((e || p.url || _e.href) + "").replace(Le, _e.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(St) || [""], null == p.crossDomain) {
                    u = Z.createElement("a");
                    try {
                        u.href = p.url, u.href = u.href, p.crossDomain = qe.protocol + "//" + qe.host != u.protocol + "//" + u.host
                    } catch (T) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = ft.param(p.data, p.traditional)), X(We, p, n, _), c) return _;
                h = ft.event && p.global, h && 0 === ft.active++ && ft.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !He.test(p.type), s = p.url.replace($e, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ne, "+")) : (d = p.url.slice(s.length), p.data && (s += (ke.test(s) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (s = s.replace(je, ""), d = (ke.test(s) ? "&" : "?") + "_=" + Te++ + d), p.url = s + d), p.ifModified && (ft.lastModified[s] && _.setRequestHeader("If-Modified-Since", ft.lastModified[s]), ft.etag[s] && _.setRequestHeader("If-None-Match", ft.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", p.contentType), _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Fe + "; q=0.01" : "") : p.accepts["*"]);
                for (f in p.headers) _.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (p.beforeSend.call(m, _, p) === !1 || c)) return _.abort();
                if (C = "abort", y.add(p.complete), _.done(p.success), _.fail(p.error), o = X(Pe, p, n, _)) {
                    if (_.readyState = 1, h && g.trigger("ajaxSend", [_, p]), c) return _;
                    p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                        _.abort("timeout")
                    }, p.timeout));
                    try {
                        c = !1, o.send(x, i)
                    } catch (T) {
                        if (c) throw T;
                        i(-1, T)
                    }
                } else i(-1, "No Transport");
                return _
            },
            getJSON: function(t, e, n) {
                return ft.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return ft.get(t, void 0, e, "script")
            }
        }), ft.each(["get", "post"], function(t, e) {
            ft[e] = function(t, n, i, o) {
                return ft.isFunction(n) && (o = o || i, i = n, n = void 0), ft.ajax(ft.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                }, ft.isPlainObject(t) && t))
            }
        }), ft._evalUrl = function(t) {
            return ft.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, ft.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (ft.isFunction(t) && (t = t.call(this[0])), e = ft(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function(t) {
                return ft.isFunction(t) ? this.each(function(e) {
                    ft(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = ft(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ft.isFunction(t);
                return this.each(function(n) {
                    ft(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    ft(this).replaceWith(this.childNodes)
                }), this
            }
        }), ft.expr.pseudos.hidden = function(t) {
            return !ft.expr.pseudos.visible(t)
        }, ft.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, ft.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        };
        var Ie = {
                0: 200,
                1223: 204
            },
            Re = ft.ajaxSettings.xhr();
        ct.cors = !!Re && "withCredentials" in Re, ct.ajax = Re = !!Re, ft.ajaxTransport(function(e) {
            var n, i;
            return ct.cors || Re && !e.crossDomain ? {
                send: function(o, s) {
                    var r, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) a[r] = e.xhrFields[r];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (r in o) a.setRequestHeader(r, o[r]);
                    n = function(t) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Ie[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (l) {
                        if (n) throw l
                    }
                },
                abort: function() {
                    n && n()
                }
            } : void 0
        }), ft.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), ft.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return ft.globalEval(t), t
                }
            }
        }), ft.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), ft.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(i, o) {
                        e = ft("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), Z.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Be = [],
            Ve = /(=)\?(?=&|$)|\?\?/;
        ft.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Be.pop() || ft.expando + "_" + Te++;
                return this[t] = !0, t
            }
        }), ft.ajaxPrefilter("json jsonp", function(e, n, i) {
            var o, s, r, a = e.jsonp !== !1 && (Ve.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ve, "$1" + o) : e.jsonp !== !1 && (e.url += (ke.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return r || ft.error(o + " was not called"), r[0]
            }, e.dataTypes[0] = "json", s = t[o], t[o] = function() {
                r = arguments
            }, i.always(function() {
                void 0 === s ? ft(t).removeProp(o) : t[o] = s, e[o] && (e.jsonpCallback = n.jsonpCallback, Be.push(o)), r && ft.isFunction(s) && s(r[0]), r = s = void 0
            }), "script") : void 0
        }), ct.createHTMLDocument = function() {
            var t = Z.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), ft.parseHTML = function(t, e, n) {
            if ("string" != typeof t) return [];
            "boolean" == typeof e && (n = e, e = !1);
            var i, o, s;
            return e || (ct.createHTMLDocument ? (e = Z.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = Z.location.href, e.head.appendChild(i)) : e = Z), o = wt.exec(t), s = !n && [], o ? [e.createElement(o[1])] : (o = y([t], e, s), s && s.length && ft(s).remove(), ft.merge([], o.childNodes))
        }, ft.fn.load = function(t, e, n) {
            var i, o, s, r = this,
                a = t.indexOf(" ");
            return a > -1 && (i = ft.trim(t.slice(a)), t = t.slice(0, a)), ft.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && ft.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                s = arguments, r.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                r.each(function() {
                    n.apply(this, s || [t.responseText, e, t])
                })
            }), this
        }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ft.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ft.expr.pseudos.animated = function(t) {
            return ft.grep(ft.timers, function(e) {
                return t === e.elem
            }).length
        }, ft.offset = {
            setOffset: function(t, e, n) {
                var i, o, s, r, a, l, u, c = ft.css(t, "position"),
                    h = ft(t),
                    f = {};
                "static" === c && (t.style.position = "relative"), a = h.offset(), s = ft.css(t, "top"), l = ft.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, u ? (i = h.position(), r = i.top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))), null != e.top && (f.top = e.top - a.top + r), null != e.left && (f.left = e.left - a.left + o), "using" in e ? e.using.call(t, f) : h.css(f)
            }
        }, ft.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    ft.offset.setOffset(this, t, e)
                });
                var e, n, i, o, s = this[0];
                return s ? s.getClientRects().length ? (i = s.getBoundingClientRect(), i.width || i.height ? (o = s.ownerDocument, n = K(o), e = o.documentElement, {
                    top: i.top + n.pageYOffset - e.clientTop,
                    left: i.left + n.pageXOffset - e.clientLeft
                }) : i) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === ft.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (i = t.offset()), i = {
                        top: i.top + ft.css(t[0], "borderTopWidth", !0),
                        left: i.left + ft.css(t[0], "borderLeftWidth", !0)
                    }), {
                        top: e.top - i.top - ft.css(n, "marginTop", !0),
                        left: e.left - i.left - ft.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === ft.css(t, "position");) t = t.offsetParent;
                    return t || Qt
                })
            }
        }), ft.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            ft.fn[t] = function(i) {
                return $t(this, function(t, i, o) {
                    var s = K(t);
                    return void 0 === o ? s ? s[e] : t[i] : void(s ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset) : t[i] = o)
                }, t, i, arguments.length)
            }
        }), ft.each(["top", "left"], function(t, e) {
            ft.cssHooks[e] = $(ct.pixelPosition, function(t, n) {
                return n ? (n = N(t, e), oe.test(n) ? ft(t).position()[e] + "px" : n) : void 0
            })
        }), ft.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            ft.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                ft.fn[i] = function(o, s) {
                    var r = arguments.length && (n || "boolean" != typeof o),
                        a = n || (o === !0 || s === !0 ? "margin" : "border");
                    return $t(this, function(e, n, o) {
                        var s;
                        return ft.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === o ? ft.css(e, n, a) : ft.style(e, n, o, a)
                    }, e, r ? o : void 0, r)
                }
            })
        }), ft.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), ft.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ft
        });
        var Ue = t.jQuery,
            ze = t.$;
        return ft.noConflict = function(e) {
            return t.$ === ft && (t.$ = ze), e && t.jQuery === ft && (t.jQuery = Ue), ft
        }, e || (t.jQuery = t.$ = ft), ft
    }), function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e(t) {
            for (var e = t.css("visibility");
                "inherit" === e;) t = t.parent(), e = t.css("visibility");
            return "hidden" !== e
        }
        t.ui = t.ui || {}, t.ui.version = "1.12.1";
        var n = 0,
            i = Array.prototype.slice;
        t.cleanData = function(e) {
                return function(n) {
                    var i, o, s;
                    for (s = 0; null != (o = n[s]); s++) try {
                        i = t._data(o, "events"), i && i.remove && t(o).triggerHandler("remove")
                    } catch (r) {}
                    e(n)
                }
            }(t.cleanData), t.widget = function(e, n, i) {
                var o, s, r, a = {},
                    l = e.split(".")[0];
                e = e.split(".")[1];
                var u = l + "-" + e;
                return i || (i = n, n = t.Widget), t.isArray(i) && (i = t.extend.apply(null, [{}].concat(i))), t.expr[":"][u.toLowerCase()] = function(e) {
                    return !!t.data(e, u)
                }, t[l] = t[l] || {}, o = t[l][e], s = t[l][e] = function(t, e) {
                    return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new s(t, e)
                }, t.extend(s, o, {
                    version: i.version,
                    _proto: t.extend({}, i),
                    _childConstructors: []
                }), r = new n, r.options = t.widget.extend({}, r.options), t.each(i, function(e, i) {
                    return t.isFunction(i) ? void(a[e] = function() {
                        function t() {
                            return n.prototype[e].apply(this, arguments)
                        }

                        function o(t) {
                            return n.prototype[e].apply(this, t)
                        }
                        return function() {
                            var e, n = this._super,
                                s = this._superApply;
                            return this._super = t, this._superApply = o, e = i.apply(this, arguments), this._super = n, this._superApply = s, e
                        }
                    }()) : void(a[e] = i)
                }), s.prototype = t.widget.extend(r, {
                    widgetEventPrefix: o ? r.widgetEventPrefix || e : e
                }, a, {
                    constructor: s,
                    namespace: l,
                    widgetName: e,
                    widgetFullName: u
                }), o ? (t.each(o._childConstructors, function(e, n) {
                    var i = n.prototype;
                    t.widget(i.namespace + "." + i.widgetName, s, n._proto)
                }), delete o._childConstructors) : n._childConstructors.push(s), t.widget.bridge(e, s), s
            }, t.widget.extend = function(e) {
                for (var n, o, s = i.call(arguments, 1), r = 0, a = s.length; a > r; r++)
                    for (n in s[r]) o = s[r][n], s[r].hasOwnProperty(n) && void 0 !== o && (e[n] = t.isPlainObject(o) ? t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], o) : t.widget.extend({}, o) : o);
                return e
            }, t.widget.bridge = function(e, n) {
                var o = n.prototype.widgetFullName || e;
                t.fn[e] = function(s) {
                    var r = "string" == typeof s,
                        a = i.call(arguments, 1),
                        l = this;
                    return r ? this.length || "instance" !== s ? this.each(function() {
                        var n, i = t.data(this, o);
                        return "instance" === s ? (l = i, !1) : i ? t.isFunction(i[s]) && "_" !== s.charAt(0) ? (n = i[s].apply(i, a), n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
                    }) : l = void 0 : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))), this.each(function() {
                        var e = t.data(this, o);
                        e ? (e.option(s || {}), e._init && e._init()) : t.data(this, o, new n(s, this))
                    })), l
                }
            }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    classes: {},
                    disabled: !1,
                    create: null
                },
                _createWidget: function(e, i) {
                    i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(t) {
                            t.target === i && this.destroy()
                        }
                    }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
                },
                _getCreateOptions: function() {
                    return {}
                },
                _getCreateEventData: t.noop,
                _create: t.noop,
                _init: t.noop,
                destroy: function() {
                    var e = this;
                    this._destroy(), t.each(this.classesElementLookup, function(t, n) {
                        e._removeClass(n, t)
                    }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
                },
                _destroy: t.noop,
                widget: function() {
                    return this.element
                },
                option: function(e, n) {
                    var i, o, s, r = e;
                    if (0 === arguments.length) return t.widget.extend({}, this.options);
                    if ("string" == typeof e)
                        if (r = {}, i = e.split("."), e = i.shift(), i.length) {
                            for (o = r[e] = t.widget.extend({}, this.options[e]), s = 0; i.length - 1 > s; s++) o[i[s]] = o[i[s]] || {}, o = o[i[s]];
                            if (e = i.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
                            o[e] = n
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                            r[e] = n
                        }
                    return this._setOptions(r), this
                },
                _setOptions: function(t) {
                    var e;
                    for (e in t) this._setOption(e, t[e]);
                    return this
                },
                _setOption: function(t, e) {
                    return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
                },
                _setOptionClasses: function(e) {
                    var n, i, o;
                    for (n in e) o = this.classesElementLookup[n], e[n] !== this.options.classes[n] && o && o.length && (i = t(o.get()), this._removeClass(o, n), i.addClass(this._classes({
                        element: i,
                        keys: n,
                        classes: e,
                        add: !0
                    })))
                },
                _setOptionDisabled: function(t) {
                    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _classes: function(e) {
                    function n(n, s) {
                        var r, a;
                        for (a = 0; n.length > a; a++) r = o.classesElementLookup[n[a]] || t(), r = t(e.add ? t.unique(r.get().concat(e.element.get())) : r.not(e.element).get()), o.classesElementLookup[n[a]] = r, i.push(n[a]), s && e.classes[n[a]] && i.push(e.classes[n[a]])
                    }
                    var i = [],
                        o = this;
                    return e = t.extend({
                        element: this.element,
                        classes: this.options.classes || {}
                    }, e), this._on(e.element, {
                        remove: "_untrackClassesElement"
                    }), e.keys && n(e.keys.match(/\S+/g) || [], !0), e.extra && n(e.extra.match(/\S+/g) || []), i.join(" ")
                },
                _untrackClassesElement: function(e) {
                    var n = this;
                    t.each(n.classesElementLookup, function(i, o) {
                        -1 !== t.inArray(e.target, o) && (n.classesElementLookup[i] = t(o.not(e.target).get()))
                    })
                },
                _removeClass: function(t, e, n) {
                    return this._toggleClass(t, e, n, !1)
                },
                _addClass: function(t, e, n) {
                    return this._toggleClass(t, e, n, !0)
                },
                _toggleClass: function(t, e, n, i) {
                    i = "boolean" == typeof i ? i : n;
                    var o = "string" == typeof t || null === t,
                        s = {
                            extra: o ? e : n,
                            keys: o ? t : e,
                            element: o ? this.element : t,
                            add: i
                        };
                    return s.element.toggleClass(this._classes(s), i), this
                },
                _on: function(e, n, i) {
                    var o, s = this;
                    "boolean" != typeof e && (i = n, n = e, e = !1), i ? (n = o = t(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, o = this.widget()), t.each(i, function(i, r) {
                        function a() {
                            return e || s.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? s[r] : r).apply(s, arguments) : void 0
                        }
                        "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                        var l = i.match(/^([\w:-]*)\s*(.*)$/),
                            u = l[1] + s.eventNamespace,
                            c = l[2];
                        c ? o.on(u, c, a) : n.on(u, a)
                    })
                },
                _off: function(e, n) {
                    n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(n).off(n), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
                },
                _delay: function(t, e) {
                    function n() {
                        return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                    }
                    var i = this;
                    return setTimeout(n, e || 0)
                },
                _hoverable: function(e) {
                    this.hoverable = this.hoverable.add(e), this._on(e, {
                        mouseenter: function(e) {
                            this._addClass(t(e.currentTarget), null, "ui-state-hover")
                        },
                        mouseleave: function(e) {
                            this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                        }
                    })
                },
                _focusable: function(e) {
                    this.focusable = this.focusable.add(e), this._on(e, {
                        focusin: function(e) {
                            this._addClass(t(e.currentTarget), null, "ui-state-focus")
                        },
                        focusout: function(e) {
                            this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                        }
                    })
                },
                _trigger: function(e, n, i) {
                    var o, s, r = this.options[e];
                    if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], s = n.originalEvent)
                        for (o in s) o in n || (n[o] = s[o]);
                    return this.element.trigger(n, i), !(t.isFunction(r) && r.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
                }
            }, t.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(e, n) {
                t.Widget.prototype["_" + e] = function(i, o, s) {
                    "string" == typeof o && (o = {
                        effect: o
                    });
                    var r, a = o ? o === !0 || "number" == typeof o ? n : o.effect || n : e;
                    o = o || {}, "number" == typeof o && (o = {
                        duration: o
                    }), r = !t.isEmptyObject(o), o.complete = s, o.delay && i.delay(o.delay), r && t.effects && t.effects.effect[a] ? i[e](o) : a !== e && i[a] ? i[a](o.duration, o.easing, s) : i.queue(function(n) {
                        t(this)[e](), s && s.call(i[0]), n()
                    })
                }
            }), t.widget,
            function() {
                function e(t, e, n) {
                    return [parseFloat(t[0]) * (h.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (h.test(t[1]) ? n / 100 : 1)]
                }

                function n(e, n) {
                    return parseInt(t.css(e, n), 10) || 0
                }

                function i(e) {
                    var n = e[0];
                    return 9 === n.nodeType ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : t.isWindow(n) ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: e.scrollTop(),
                            left: e.scrollLeft()
                        }
                    } : n.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: n.pageY,
                            left: n.pageX
                        }
                    } : {
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        offset: e.offset()
                    }
                }
                var o, s = Math.max,
                    r = Math.abs,
                    a = /left|center|right/,
                    l = /top|center|bottom/,
                    u = /[\+\-]\d+(\.[\d]+)?%?/,
                    c = /^\w+/,
                    h = /%$/,
                    f = t.fn.position;
                t.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== o) return o;
                        var e, n, i = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            s = i.children()[0];
                        return t("body").append(i), e = s.offsetWidth, i.css("overflow", "scroll"), n = s.offsetWidth, e === n && (n = i[0].clientWidth), i.remove(), o = e - n
                    },
                    getScrollInfo: function(e) {
                        var n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                            i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                            o = "scroll" === n || "auto" === n && e.width < e.element[0].scrollWidth,
                            s = "scroll" === i || "auto" === i && e.height < e.element[0].scrollHeight;
                        return {
                            width: s ? t.position.scrollbarWidth() : 0,
                            height: o ? t.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(e) {
                        var n = t(e || window),
                            i = t.isWindow(n[0]),
                            o = !!n[0] && 9 === n[0].nodeType,
                            s = !i && !o;
                        return {
                            element: n,
                            isWindow: i,
                            isDocument: o,
                            offset: s ? t(e).offset() : {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: n.scrollLeft(),
                            scrollTop: n.scrollTop(),
                            width: n.outerWidth(),
                            height: n.outerHeight()
                        }
                    }
                }, t.fn.position = function(o) {
                    if (!o || !o.of) return f.apply(this, arguments);
                    o = t.extend({}, o);
                    var h, d, p, m, g, v, y = t(o.of),
                        b = t.position.getWithinInfo(o.within),
                        x = t.position.getScrollInfo(b),
                        w = (o.collision || "flip").split(" "),
                        C = {};
                    return v = i(y), y[0].preventDefault && (o.at = "left top"), d = v.width, p = v.height, m = v.offset, g = t.extend({}, m), t.each(["my", "at"], function() {
                        var t, e, n = (o[this] || "").split(" ");
                        1 === n.length && (n = a.test(n[0]) ? n.concat(["center"]) : l.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = a.test(n[0]) ? n[0] : "center", n[1] = l.test(n[1]) ? n[1] : "center", t = u.exec(n[0]), e = u.exec(n[1]), C[this] = [t ? t[0] : 0, e ? e[0] : 0], o[this] = [c.exec(n[0])[0], c.exec(n[1])[0]]
                    }), 1 === w.length && (w[1] = w[0]), "right" === o.at[0] ? g.left += d : "center" === o.at[0] && (g.left += d / 2), "bottom" === o.at[1] ? g.top += p : "center" === o.at[1] && (g.top += p / 2), h = e(C.at, d, p), g.left += h[0], g.top += h[1], this.each(function() {
                        var i, a, l = t(this),
                            u = l.outerWidth(),
                            c = l.outerHeight(),
                            f = n(this, "marginLeft"),
                            v = n(this, "marginTop"),
                            _ = u + f + n(this, "marginRight") + x.width,
                            T = c + v + n(this, "marginBottom") + x.height,
                            k = t.extend({}, g),
                            E = e(C.my, l.outerWidth(), l.outerHeight());
                        "right" === o.my[0] ? k.left -= u : "center" === o.my[0] && (k.left -= u / 2), "bottom" === o.my[1] ? k.top -= c : "center" === o.my[1] && (k.top -= c / 2), k.left += E[0], k.top += E[1], i = {
                            marginLeft: f,
                            marginTop: v
                        }, t.each(["left", "top"], function(e, n) {
                            t.ui.position[w[e]] && t.ui.position[w[e]][n](k, {
                                targetWidth: d,
                                targetHeight: p,
                                elemWidth: u,
                                elemHeight: c,
                                collisionPosition: i,
                                collisionWidth: _,
                                collisionHeight: T,
                                offset: [h[0] + E[0], h[1] + E[1]],
                                my: o.my,
                                at: o.at,
                                within: b,
                                elem: l
                            })
                        }), o.using && (a = function(t) {
                            var e = m.left - k.left,
                                n = e + d - u,
                                i = m.top - k.top,
                                a = i + p - c,
                                h = {
                                    target: {
                                        element: y,
                                        left: m.left,
                                        top: m.top,
                                        width: d,
                                        height: p
                                    },
                                    element: {
                                        element: l,
                                        left: k.left,
                                        top: k.top,
                                        width: u,
                                        height: c
                                    },
                                    horizontal: 0 > n ? "left" : e > 0 ? "right" : "center",
                                    vertical: 0 > a ? "top" : i > 0 ? "bottom" : "middle"
                                };
                            u > d && d > r(e + n) && (h.horizontal = "center"), c > p && p > r(i + a) && (h.vertical = "middle"), h.important = s(r(e), r(n)) > s(r(i), r(a)) ? "horizontal" : "vertical", o.using.call(this, t, h)
                        }), l.offset(t.extend(k, {
                            using: a
                        }))
                    })
                }, t.ui.position = {
                    fit: {
                        left: function(t, e) {
                            var n, i = e.within,
                                o = i.isWindow ? i.scrollLeft : i.offset.left,
                                r = i.width,
                                a = t.left - e.collisionPosition.marginLeft,
                                l = o - a,
                                u = a + e.collisionWidth - r - o;
                            e.collisionWidth > r ? l > 0 && 0 >= u ? (n = t.left + l + e.collisionWidth - r - o, t.left += l - n) : t.left = u > 0 && 0 >= l ? o : l > u ? o + r - e.collisionWidth : o : l > 0 ? t.left += l : u > 0 ? t.left -= u : t.left = s(t.left - a, t.left)
                        },
                        top: function(t, e) {
                            var n, i = e.within,
                                o = i.isWindow ? i.scrollTop : i.offset.top,
                                r = e.within.height,
                                a = t.top - e.collisionPosition.marginTop,
                                l = o - a,
                                u = a + e.collisionHeight - r - o;
                            e.collisionHeight > r ? l > 0 && 0 >= u ? (n = t.top + l + e.collisionHeight - r - o, t.top += l - n) : t.top = u > 0 && 0 >= l ? o : l > u ? o + r - e.collisionHeight : o : l > 0 ? t.top += l : u > 0 ? t.top -= u : t.top = s(t.top - a, t.top)
                        }
                    },
                    flip: {
                        left: function(t, e) {
                            var n, i, o = e.within,
                                s = o.offset.left + o.scrollLeft,
                                a = o.width,
                                l = o.isWindow ? o.scrollLeft : o.offset.left,
                                u = t.left - e.collisionPosition.marginLeft,
                                c = u - l,
                                h = u + e.collisionWidth - a - l,
                                f = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                d = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                p = -2 * e.offset[0];
                            0 > c ? (n = t.left + f + d + p + e.collisionWidth - a - s, (0 > n || r(c) > n) && (t.left += f + d + p)) : h > 0 && (i = t.left - e.collisionPosition.marginLeft + f + d + p - l, (i > 0 || h > r(i)) && (t.left += f + d + p))
                        },
                        top: function(t, e) {
                            var n, i, o = e.within,
                                s = o.offset.top + o.scrollTop,
                                a = o.height,
                                l = o.isWindow ? o.scrollTop : o.offset.top,
                                u = t.top - e.collisionPosition.marginTop,
                                c = u - l,
                                h = u + e.collisionHeight - a - l,
                                f = "top" === e.my[1],
                                d = f ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                m = -2 * e.offset[1];
                            0 > c ? (i = t.top + d + p + m + e.collisionHeight - a - s, (0 > i || r(c) > i) && (t.top += d + p + m)) : h > 0 && (n = t.top - e.collisionPosition.marginTop + d + p + m - l, (n > 0 || h > r(n)) && (t.top += d + p + m))
                        }
                    },
                    flipfit: {
                        left: function() {
                            t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                }
            }(), t.ui.position, t.extend(t.expr[":"], {
                data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                    return function(n) {
                        return !!t.data(n, e)
                    }
                }) : function(e, n, i) {
                    return !!t.data(e, i[3])
                }
            }), t.fn.extend({
                disableSelection: function() {
                    var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                    return function() {
                        return this.on(t + ".ui-disableSelection", function(t) {
                            t.preventDefault()
                        })
                    }
                }(),
                enableSelection: function() {
                    return this.off(".ui-disableSelection")
                }
            }), t.ui.focusable = function(n, i) {
                var o, s, r, a, l, u = n.nodeName.toLowerCase();
                return "area" === u ? (o = n.parentNode, s = o.name, n.href && s && "map" === o.nodeName.toLowerCase() ? (r = t("img[usemap='#" + s + "']"), r.length > 0 && r.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(u) ? (a = !n.disabled, a && (l = t(n).closest("fieldset")[0], l && (a = !l.disabled))) : a = "a" === u ? n.href || i : i, a && t(n).is(":visible") && e(t(n)))
            }, t.extend(t.expr[":"], {
                focusable: function(e) {
                    return t.ui.focusable(e, null != t.attr(e, "tabindex"))
                }
            }), t.ui.focusable, t.fn.form = function() {
                return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
            }, t.ui.formResetMixin = {
                _formResetHandler: function() {
                    var e = t(this);
                    setTimeout(function() {
                        var n = e.data("ui-form-reset-instances");
                        t.each(n, function() {
                            this.refresh()
                        })
                    })
                },
                _bindFormResetHandler: function() {
                    if (this.form = this.element.form(), this.form.length) {
                        var t = this.form.data("ui-form-reset-instances") || [];
                        t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                    }
                },
                _unbindFormResetHandler: function() {
                    if (this.form.length) {
                        var e = this.form.data("ui-form-reset-instances");
                        e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                    }
                }
            }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, n) {
                function i(e, n, i, s) {
                    return t.each(o, function() {
                        n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), s && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
                    }), n
                }
                var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
                    s = n.toLowerCase(),
                    r = {
                        innerWidth: t.fn.innerWidth,
                        innerHeight: t.fn.innerHeight,
                        outerWidth: t.fn.outerWidth,
                        outerHeight: t.fn.outerHeight
                    };
                t.fn["inner" + n] = function(e) {
                    return void 0 === e ? r["inner" + n].call(this) : this.each(function() {
                        t(this).css(s, i(this, e) + "px")
                    })
                }, t.fn["outer" + n] = function(e, o) {
                    return "number" != typeof e ? r["outer" + n].call(this, e) : this.each(function() {
                        t(this).css(s, i(this, e, !0, o) + "px")
                    })
                }
            }), t.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.ui.keyCode = {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }, t.ui.escapeSelector = function() {
                var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
                return function(e) {
                    return e.replace(t, "\\$1")
                }
            }(), t.fn.labels = function() {
                var e, n, i, o, s;
                return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (o = this.eq(0).parents("label"), i = this.attr("id"), i && (e = this.eq(0).parents().last(), s = e.add(e.length ? e.siblings() : this.siblings()), n = "label[for='" + t.ui.escapeSelector(i) + "']", o = o.add(s.find(n).addBack(n))), this.pushStack(o))
            }, t.fn.scrollParent = function(e) {
                var n = this.css("position"),
                    i = "absolute" === n,
                    o = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    s = this.parents().filter(function() {
                        var e = t(this);
                        return i && "static" === e.css("position") ? !1 : o.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== n && s.length ? s : t(this[0].ownerDocument || document)
            }, t.fn.extend({
                uniqueId: function() {
                    var t = 0;
                    return function() {
                        return this.each(function() {
                            this.id || (this.id = "ui-id-" + ++t)
                        })
                    }
                }(),
                removeUniqueId: function() {
                    return this.each(function() {
                        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                    })
                }
            }), t.ui.safeActiveElement = function(t) {
                var e;
                try {
                    e = t.activeElement
                } catch (n) {
                    e = t.body
                }
                return e || (e = t.body), e.nodeName || (e = t.body), e
            }, t.widget("ui.menu", {
                version: "1.12.1",
                defaultElement: "<ul>",
                delay: 300,
                options: {
                    icons: {
                        submenu: "ui-icon-caret-1-e"
                    },
                    items: "> *",
                    menus: "ul",
                    position: {
                        my: "left top",
                        at: "right top"
                    },
                    role: "menu",
                    blur: null,
                    focus: null,
                    select: null
                },
                _create: function() {
                    this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                        role: this.options.role,
                        tabIndex: 0
                    }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                        "mousedown .ui-menu-item": function(t) {
                            t.preventDefault()
                        },
                        "click .ui-menu-item": function(e) {
                            var n = t(e.target),
                                i = t(t.ui.safeActiveElement(this.document[0]));
                            !this.mouseHandled && n.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), n.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                        },
                        "mouseenter .ui-menu-item": function(e) {
                            if (!this.previousFilter) {
                                var n = t(e.target).closest(".ui-menu-item"),
                                    i = t(e.currentTarget);
                                n[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, i))
                            }
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function(t, e) {
                            var n = this.active || this.element.find(this.options.items).eq(0);
                            e || this.focus(t, n)
                        },
                        blur: function(e) {
                            this._delay(function() {
                                var n = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
                                n && this.collapseAll(e)
                            })
                        },
                        keydown: "_keydown"
                    }), this.refresh(), this._on(this.document, {
                        click: function(t) {
                            this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                        }
                    })
                },
                _destroy: function() {
                    var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                        n = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), n.children().each(function() {
                        var e = t(this);
                        e.data("ui-menu-submenu-caret") && e.remove()
                    })
                },
                _keydown: function(e) {
                    var n, i, o, s, r = !0;
                    switch (e.keyCode) {
                        case t.ui.keyCode.PAGE_UP:
                            this.previousPage(e);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            this.nextPage(e);
                            break;
                        case t.ui.keyCode.HOME:
                            this._move("first", "first", e);
                            break;
                        case t.ui.keyCode.END:
                            this._move("last", "last", e);
                            break;
                        case t.ui.keyCode.UP:
                            this.previous(e);
                            break;
                        case t.ui.keyCode.DOWN:
                            this.next(e);
                            break;
                        case t.ui.keyCode.LEFT:
                            this.collapse(e);
                            break;
                        case t.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                            break;
                        case t.ui.keyCode.ENTER:
                        case t.ui.keyCode.SPACE:
                            this._activate(e);
                            break;
                        case t.ui.keyCode.ESCAPE:
                            this.collapse(e);
                            break;
                        default:
                            r = !1, i = this.previousFilter || "", s = !1, o = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), o === i ? s = !0 : o = i + o, n = this._filterMenuItems(o), n = s && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n, n.length || (o = String.fromCharCode(e.keyCode), n = this._filterMenuItems(o)), n.length ? (this.focus(e, n), this.previousFilter = o, this.filterTimer = this._delay(function() {
                                delete this.previousFilter
                            }, 1e3)) : delete this.previousFilter
                    }
                    r && e.preventDefault()
                },
                _activate: function(t) {
                    this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
                },
                refresh: function() {
                    var e, n, i, o, s, r = this,
                        a = this.options.icons.submenu,
                        l = this.element.find(this.options.menus);
                    this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = l.filter(":not(.ui-menu)").hide().attr({
                        role: this.options.role,
                        "aria-hidden": "true",
                        "aria-expanded": "false"
                    }).each(function() {
                        var e = t(this),
                            n = e.prev(),
                            i = t("<span>").data("ui-menu-submenu-caret", !0);
                        r._addClass(i, "ui-menu-icon", "ui-icon " + a), n.attr("aria-haspopup", "true").prepend(i), e.attr("aria-labelledby", n.attr("id"))
                    }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), e = l.add(this.element), n = e.find(this.options.items), n.not(".ui-menu-item").each(function() {
                        var e = t(this);
                        r._isDivider(e) && r._addClass(e, "ui-menu-divider", "ui-widget-content")
                    }), o = n.not(".ui-menu-item, .ui-menu-divider"), s = o.children().not(".ui-menu").uniqueId().attr({
                        tabIndex: -1,
                        role: this._itemRole()
                    }), this._addClass(o, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper"), n.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
                },
                _itemRole: function() {
                    return {
                        menu: "menuitem",
                        listbox: "option"
                    }[this.options.role]
                },
                _setOption: function(t, e) {
                    if ("icons" === t) {
                        var n = this.element.find(".ui-menu-icon");
                        this._removeClass(n, null, this.options.icons.submenu)._addClass(n, null, e.submenu)
                    }
                    this._super(t, e)
                },
                _setOptionDisabled: function(t) {
                    this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
                },
                focus: function(t, e) {
                    var n, i, o;
                    this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), i = this.active.children(".ui-menu-item-wrapper"), this._addClass(i, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), o = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(o, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                        this._close()
                    }, this.delay), n = e.children(".ui-menu"), n.length && t && /^mouse/.test(t.type) && this._startOpening(n), this.activeMenu = e.parent(), this._trigger("focus", t, {
                        item: e
                    })
                },
                _scrollIntoView: function(e) {
                    var n, i, o, s, r, a;
                    this._hasScroll() && (n = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, o = e.offset().top - this.activeMenu.offset().top - n - i, s = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.outerHeight(), 0 > o ? this.activeMenu.scrollTop(s + o) : o + a > r && this.activeMenu.scrollTop(s + o - r + a))
                },
                blur: function(t, e) {
                    e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
                        item: this.active
                    }), this.active = null)
                },
                _startOpening: function(t) {
                    clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                        this._close(), this._open(t)
                    }, this.delay))
                },
                _open: function(e) {
                    var n = t.extend({ of: this.active
                    }, this.options.position);
                    clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
                },
                collapseAll: function(e, n) {
                    clearTimeout(this.timer), this.timer = this._delay(function() {
                        var i = n ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                        i.length || (i = this.element), this._close(i), this.blur(e), this._removeClass(i.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = i
                    }, this.delay)
                },
                _close: function(t) {
                    t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
                },
                _closeOnDocumentClick: function(e) {
                    return !t(e.target).closest(".ui-menu").length
                },
                _isDivider: function(t) {
                    return !/[^\-\u2014\u2013\s]/.test(t.text())
                },
                collapse: function(t) {
                    var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    e && e.length && (this._close(), this.focus(t, e))
                },
                expand: function(t) {
                    var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                    e && e.length && (this._open(e.parent()), this._delay(function() {
                        this.focus(t, e)
                    }))
                },
                next: function(t) {
                    this._move("next", "first", t)
                },
                previous: function(t) {
                    this._move("prev", "last", t)
                },
                isFirstItem: function() {
                    return this.active && !this.active.prevAll(".ui-menu-item").length
                },
                isLastItem: function() {
                    return this.active && !this.active.nextAll(".ui-menu-item").length
                },
                _move: function(t, e, n) {
                    var i;
                    this.active && (i = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), i && i.length && this.active || (i = this.activeMenu.find(this.options.items)[e]()), this.focus(n, i)
                },
                nextPage: function(e) {
                    var n, i, o;
                    return this.active ? void(this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, o = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                        return n = t(this), 0 > n.offset().top - i - o
                    }), this.focus(e, n)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
                },
                previousPage: function(e) {
                    var n, i, o;
                    return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, o = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                        return n = t(this), n.offset().top - i + o > 0
                    }), this.focus(e, n)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
                },
                _hasScroll: function() {
                    return this.element.outerHeight() < this.element.prop("scrollHeight")
                },
                select: function(e) {
                    this.active = this.active || t(e.target).closest(".ui-menu-item");
                    var n = {
                        item: this.active
                    };
                    this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, n)
                },
                _filterMenuItems: function(e) {
                    var n = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                        i = RegExp("^" + n, "i");
                    return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                        return i.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
                    })
                }
            }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        var o = !1;
        t(document).on("mouseup", function() {
            o = !1
        }), t.widget("ui.mouse", {
            version: "1.12.1",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var e = this;
                this.element.on("mousedown." + this.widgetName, function(t) {
                    return e._mouseDown(t)
                }).on("click." + this.widgetName, function(n) {
                    return !0 === t.data(n.target, e.widgetName + ".preventClickEvent") ? (t.removeData(n.target, e.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(e) {
                if (!o) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                    var n = this,
                        i = 1 === e.which,
                        s = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                    return i && !s && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return n._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return n._mouseUp(t)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), o = !0, !0)) : !0
                }
            },
            _mouseMove: function(e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                    if (!e.which)
                        if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function(e) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, o = !1, e.preventDefault()
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        }), t.widget("ui.progressbar", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-progressbar": "ui-corner-all",
                    "ui-progressbar-value": "ui-corner-left",
                    "ui-progressbar-complete": "ui-corner-right"
                },
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
            },
            _destroy: function() {
                this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
            },
            value: function(t) {
                return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
            },
            _constrainedValue: function(t) {
                return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
            },
            _setOptions: function(t) {
                var e = t.value;
                delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
            },
            _setOption: function(t, e) {
                "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var e = this.options.value,
                    n = this._percentage();
                this.valueDiv.toggle(this.indeterminate || e > this.min).width(n.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": e
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
            }
        }), t.widget("ui.slider", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var e, n, i = this.options,
                    o = this.element.find(".ui-slider-handle"),
                    s = "<span tabindex='0'></span>",
                    r = [];
                for (n = i.values && i.values.length || 1, o.length > n && (o.slice(n).remove(), o = o.slice(0, n)), e = o.length; n > e; e++) r.push(s);
                this.handles = o.add(t(r.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                    t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
                })
            },
            _createRange: function() {
                var e = this.options;
                e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var n, i, o, s, r, a, l, u, c = this,
                    h = this.options;
                return h.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), n = {
                    x: e.pageX,
                    y: e.pageY
                }, i = this._normValueFromMouse(n), o = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                    var n = Math.abs(i - c.values(e));
                    (o > n || o === n && (e === c._lastChangedValue || c.values(e) === h.min)) && (o = n, s = t(this), r = e)
                }), a = this._start(e, r), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, this._addClass(s, null, "ui-state-active"), s.trigger("focus"), l = s.offset(), u = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = u ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - l.left - s.width() / 2,
                    top: e.pageY - l.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, i), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(t) {
                var e = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    n = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, n), !1
            },
            _mouseStop: function(t) {
                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, n, i, o, s;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, n = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, n = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), i = n / e, i > 1 && (i = 1), 0 > i && (i = 0), "vertical" === this.orientation && (i = 1 - i), o = this._valueMax() - this._valueMin(), s = this._valueMin() + i * o, this._trimAlignValue(s)
            },
            _uiHash: function(t, e, n) {
                var i = {
                    handle: this.handles[t],
                    handleIndex: t,
                    value: void 0 !== e ? e : this.value()
                };
                return this._hasMultipleValues() && (i.value = void 0 !== e ? e : this.values(t), i.values = n || this.values()), i
            },
            _hasMultipleValues: function() {
                return this.options.values && this.options.values.length
            },
            _start: function(t, e) {
                return this._trigger("start", t, this._uiHash(e))
            },
            _slide: function(t, e, n) {
                var i, o, s = this.value(),
                    r = this.values();
                this._hasMultipleValues() && (o = this.values(e ? 0 : 1), s = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (n = 0 === e ? Math.min(o, n) : Math.max(o, n)), r[e] = n), n !== s && (i = this._trigger("slide", t, this._uiHash(e, n, r)), i !== !1 && (this._hasMultipleValues() ? this.values(e, n) : this.value(n)))
            },
            _stop: function(t, e) {
                this._trigger("stop", t, this._uiHash(e))
            },
            _change: function(t, e) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
            },
            value: function(t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function(e, n) {
                var i, o, s;
                if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(n), this._refreshValue(), void this._change(null, e);
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
                for (i = this.options.values, o = arguments[0], s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(o[s]), this._change(null, s);
                this._refreshValue()
            },
            _setOption: function(e, n) {
                var i, o = 0;
                switch ("range" === e && this.options.range === !0 && ("min" === n ? (this.options.value = this._values(0), this.options.values = null) : "max" === n && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (o = this.options.values.length), this._super(e, n), e) {
                    case "orientation":
                        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(n), this.handles.css("horizontal" === n ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), i = o - 1; i >= 0; i--) this._change(null, i);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _setOptionDisabled: function(t) {
                this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _value: function() {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, n, i;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                if (this._hasMultipleValues()) {
                    for (n = this.options.values.slice(), i = 0; n.length > i; i += 1) n[i] = this._trimAlignValue(n[i]);
                    return n
                }
                return []
            },
            _trimAlignValue: function(t) {
                if (this._valueMin() >= t) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    n = (t - this._valueMin()) % e,
                    i = t - n;
                return 2 * Math.abs(n) >= e && (i += n > 0 ? e : -e), parseFloat(i.toFixed(5))
            },
            _calculateNewMax: function() {
                var t = this.options.max,
                    e = this._valueMin(),
                    n = this.options.step,
                    i = Math.round((t - e) / n) * n;
                t = i + e, t > this.options.max && (t -= n), this.max = parseFloat(t.toFixed(this._precision()))
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function(t) {
                var e = "" + t,
                    n = e.indexOf(".");
                return -1 === n ? 0 : e.length - n - 1
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.max
            },
            _refreshRange: function(t) {
                "vertical" === t && this.range.css({
                    width: "",
                    left: ""
                }), "horizontal" === t && this.range.css({
                    height: "",
                    bottom: ""
                })
            },
            _refreshValue: function() {
                var e, n, i, o, s, r = this.options.range,
                    a = this.options,
                    l = this,
                    u = this._animateOff ? !1 : a.animate,
                    c = {};
                this._hasMultipleValues() ? this.handles.each(function(i) {
                    n = 100 * ((l.values(i) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = n + "%", t(this).stop(1, 1)[u ? "animate" : "css"](c, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === i && l.range.stop(1, 1)[u ? "animate" : "css"]({
                        left: n + "%"
                    }, a.animate), 1 === i && l.range[u ? "animate" : "css"]({
                        width: n - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    })) : (0 === i && l.range.stop(1, 1)[u ? "animate" : "css"]({
                        bottom: n + "%"
                    }, a.animate), 1 === i && l.range[u ? "animate" : "css"]({
                        height: n - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }))), e = n
                }) : (i = this.value(), o = this._valueMin(), s = this._valueMax(), n = s !== o ? 100 * ((i - o) / (s - o)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](c, a.animate),
                    "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                        width: n + "%"
                    }, a.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                        width: 100 - n + "%"
                    }, a.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                        height: n + "%"
                    }, a.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                        height: 100 - n + "%"
                    }, a.animate))
            },
            _handleEvents: {
                keydown: function(e) {
                    var n, i, o, s, r = t(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_UP:
                        case t.ui.keyCode.PAGE_DOWN:
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), n = this._start(e, r), n === !1)) return
                    }
                    switch (s = this.options.step, i = o = this._hasMultipleValues() ? this.values(r) : this.value(), e.keyCode) {
                        case t.ui.keyCode.HOME:
                            o = this._valueMin();
                            break;
                        case t.ui.keyCode.END:
                            o = this._valueMax();
                            break;
                        case t.ui.keyCode.PAGE_UP:
                            o = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            o = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                            if (i === this._valueMax()) return;
                            o = this._trimAlignValue(i + s);
                            break;
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (i === this._valueMin()) return;
                            o = this._trimAlignValue(i - s)
                    }
                    this._slide(e, r, o)
                },
                keyup: function(e) {
                    var n = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, n), this._change(e, n), this._removeClass(t(e.target), null, "ui-state-active"))
                }
            }
        }), t.widget("ui.tooltip", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-tooltip": "ui-corner-all ui-widget-shadow"
                },
                content: function() {
                    var e = t(this).attr("title") || "";
                    return t("<a>").text(e).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function(e, n) {
                var i = (e.attr("aria-describedby") || "").split(/\s+/);
                i.push(n), e.data("ui-tooltip-id", n).attr("aria-describedby", t.trim(i.join(" ")))
            },
            _removeDescribedBy: function(e) {
                var n = e.data("ui-tooltip-id"),
                    i = (e.attr("aria-describedby") || "").split(/\s+/),
                    o = t.inArray(n, i); - 1 !== o && i.splice(o, 1), e.removeData("ui-tooltip-id"), i = t.trim(i.join(" ")), i ? e.attr("aria-describedby", i) : e.removeAttr("aria-describedby")
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
            },
            _setOption: function(e, n) {
                var i = this;
                this._super(e, n), "content" === e && t.each(this.tooltips, function(t, e) {
                    i._updateContent(e.element)
                })
            },
            _setOptionDisabled: function(t) {
                this[t ? "_disable" : "_enable"]()
            },
            _disable: function() {
                var e = this;
                t.each(this.tooltips, function(n, i) {
                    var o = t.Event("blur");
                    o.target = o.currentTarget = i.element[0], e.close(o, !0)
                }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                    var e = t(this);
                    return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
                }))
            },
            _enable: function() {
                this.disabledTitles.each(function() {
                    var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                }), this.disabledTitles = t([])
            },
            open: function(e) {
                var n = this,
                    i = t(e ? e.target : this.element).closest(this.options.items);
                i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), e && "mouseover" === e.type && i.parents().each(function() {
                    var e, i = t(this);
                    i.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, n.close(e, !0)), i.attr("title") && (i.uniqueId(), n.parents[this.id] = {
                        element: this,
                        title: i.attr("title")
                    }, i.attr("title", ""))
                }), this._registerCloseHandlers(e, i), this._updateContent(i, e))
            },
            _updateContent: function(t, e) {
                var n, i = this.options.content,
                    o = this,
                    s = e ? e.type : null;
                return "string" == typeof i || i.nodeType || i.jquery ? this._open(e, t, i) : (n = i.call(t[0], function(n) {
                    o._delay(function() {
                        t.data("ui-tooltip-open") && (e && (e.type = s), this._open(e, t, n))
                    })
                }), void(n && this._open(e, t, n)))
            },
            _open: function(e, n, i) {
                function o(t) {
                    u.of = t, r.is(":hidden") || r.position(u)
                }
                var s, r, a, l, u = t.extend({}, this.options.position);
                if (i) {
                    if (s = this._find(n)) return void s.tooltip.find(".ui-tooltip-content").html(i);
                    n.is("[title]") && (e && "mouseover" === e.type ? n.attr("title", "") : n.removeAttr("title")), s = this._tooltip(n), r = s.tooltip, this._addDescribedBy(n, r.attr("id")), r.find(".ui-tooltip-content").html(i), this.liveRegion.children().hide(), l = t("<div>").html(r.find(".ui-tooltip-content").html()), l.removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                        mousemove: o
                    }), o(e)) : r.position(t.extend({ of: n
                    }, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.track && this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function() {
                        r.is(":visible") && (o(u.of), clearInterval(a))
                    }, t.fx.interval)), this._trigger("open", e, {
                        tooltip: r
                    })
                }
            },
            _registerCloseHandlers: function(e, n) {
                var i = {
                    keyup: function(e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var i = t.Event(e);
                            i.currentTarget = n[0], this.close(i, !0)
                        }
                    }
                };
                n[0] !== this.element[0] && (i.remove = function() {
                    this._removeTooltip(this._find(n).tooltip)
                }), e && "mouseover" !== e.type || (i.mouseleave = "close"), e && "focusin" !== e.type || (i.focusout = "close"), this._on(!0, n, i)
            },
            close: function(e) {
                var n, i = this,
                    o = t(e ? e.currentTarget : this.element),
                    s = this._find(o);
                return s ? (n = s.tooltip, void(s.closing || (clearInterval(this.delayedShow), o.data("ui-tooltip-title") && !o.attr("title") && o.attr("title", o.data("ui-tooltip-title")), this._removeDescribedBy(o), s.hiding = !0, n.stop(!0), this._hide(n, this.options.hide, function() {
                    i._removeTooltip(t(this))
                }), o.removeData("ui-tooltip-open"), this._off(o, "mouseleave focusout keyup"), o[0] !== this.element[0] && this._off(o, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, n) {
                    t(n.element).attr("title", n.title), delete i.parents[e]
                }), s.closing = !0, this._trigger("close", e, {
                    tooltip: n
                }), s.hiding || (s.closing = !1)))) : void o.removeData("ui-tooltip-open")
            },
            _tooltip: function(e) {
                var n = t("<div>").attr("role", "tooltip"),
                    i = t("<div>").appendTo(n),
                    o = n.uniqueId().attr("id");
                return this._addClass(i, "ui-tooltip-content"), this._addClass(n, "ui-tooltip", "ui-widget ui-widget-content"), n.appendTo(this._appendTo(e)), this.tooltips[o] = {
                    element: e,
                    tooltip: n
                }
            },
            _find: function(t) {
                var e = t.data("ui-tooltip-id");
                return e ? this.tooltips[e] : null
            },
            _removeTooltip: function(t) {
                t.remove(), delete this.tooltips[t.attr("id")]
            },
            _appendTo: function(t) {
                var e = t.closest(".ui-front, dialog");
                return e.length || (e = this.document[0].body), e
            },
            _destroy: function() {
                var e = this;
                t.each(this.tooltips, function(n, i) {
                    var o = t.Event("blur"),
                        s = i.element;
                    o.target = o.currentTarget = s[0], e.close(o, !0), t("#" + n).remove(), s.data("ui-tooltip-title") && (s.attr("title") || s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function() {
                var t = this._superApply(arguments);
                return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
            }
        }), t.ui.tooltip;
        var s = "ui-effects-",
            r = "ui-effects-style",
            a = "ui-effects-animated",
            l = t;
        t.effects = {
                effect: {}
            },
            function(t, e) {
                function n(t, e, n) {
                    var i = h[e.type] || {};
                    return null == t ? n || !e.def ? null : e.def : (t = i.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : i.mod ? (t + i.mod) % i.mod : 0 > t ? 0 : t > i.max ? i.max : t)
                }

                function i(n) {
                    var i = u(),
                        o = i._rgba = [];
                    return n = n.toLowerCase(), p(l, function(t, s) {
                        var r, a = s.re.exec(n),
                            l = a && s.parse(a),
                            u = s.space || "rgba";
                        return l ? (r = i[u](l), i[c[u].cache] = r[c[u].cache], o = i._rgba = r._rgba, !1) : e
                    }), o.length ? ("0,0,0,0" === o.join() && t.extend(o, s.transparent), i) : s[n]
                }

                function o(t, e, n) {
                    return n = (n + 1) % 1, 1 > 6 * n ? t + 6 * (e - t) * n : 1 > 2 * n ? e : 2 > 3 * n ? t + 6 * (e - t) * (2 / 3 - n) : t
                }
                var s, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    a = /^([\-+])=\s*(\d+\.?\d*)/,
                    l = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }],
                    u = t.Color = function(e, n, i, o) {
                        return new t.Color.fn.parse(e, n, i, o)
                    },
                    c = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    h = {
                        "byte": {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    f = u.support = {},
                    d = t("<p>")[0],
                    p = t.each;
                d.style.cssText = "background-color:rgba(1,1,1,.5)", f.rgba = d.style.backgroundColor.indexOf("rgba") > -1, p(c, function(t, e) {
                    e.cache = "_" + t, e.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), u.fn = t.extend(u.prototype, {
                    parse: function(o, r, a, l) {
                        if (o === e) return this._rgba = [null, null, null, null], this;
                        (o.jquery || o.nodeType) && (o = t(o).css(r), r = e);
                        var h = this,
                            f = t.type(o),
                            d = this._rgba = [];
                        return r !== e && (o = [o, r, a, l], f = "array"), "string" === f ? this.parse(i(o) || s._default) : "array" === f ? (p(c.rgba.props, function(t, e) {
                            d[e.idx] = n(o[e.idx], e)
                        }), this) : "object" === f ? (o instanceof u ? p(c, function(t, e) {
                            o[e.cache] && (h[e.cache] = o[e.cache].slice())
                        }) : p(c, function(e, i) {
                            var s = i.cache;
                            p(i.props, function(t, e) {
                                if (!h[s] && i.to) {
                                    if ("alpha" === t || null == o[t]) return;
                                    h[s] = i.to(h._rgba)
                                }
                                h[s][e.idx] = n(o[t], e, !0)
                            }), h[s] && 0 > t.inArray(null, h[s].slice(0, 3)) && (h[s][3] = 1, i.from && (h._rgba = i.from(h[s])))
                        }), this) : e
                    },
                    is: function(t) {
                        var n = u(t),
                            i = !0,
                            o = this;
                        return p(c, function(t, s) {
                            var r, a = n[s.cache];
                            return a && (r = o[s.cache] || s.to && s.to(o._rgba) || [], p(s.props, function(t, n) {
                                return null != a[n.idx] ? i = a[n.idx] === r[n.idx] : e
                            })), i
                        }), i
                    },
                    _space: function() {
                        var t = [],
                            e = this;
                        return p(c, function(n, i) {
                            e[i.cache] && t.push(n)
                        }), t.pop()
                    },
                    transition: function(t, e) {
                        var i = u(t),
                            o = i._space(),
                            s = c[o],
                            r = 0 === this.alpha() ? u("transparent") : this,
                            a = r[s.cache] || s.to(r._rgba),
                            l = a.slice();
                        return i = i[s.cache], p(s.props, function(t, o) {
                            var s = o.idx,
                                r = a[s],
                                u = i[s],
                                c = h[o.type] || {};
                            null !== u && (null === r ? l[s] = u : (c.mod && (u - r > c.mod / 2 ? r += c.mod : r - u > c.mod / 2 && (r -= c.mod)), l[s] = n((u - r) * e + r, o)))
                        }), this[o](l)
                    },
                    blend: function(e) {
                        if (1 === this._rgba[3]) return this;
                        var n = this._rgba.slice(),
                            i = n.pop(),
                            o = u(e)._rgba;
                        return u(t.map(n, function(t, e) {
                            return (1 - i) * o[e] + i * t
                        }))
                    },
                    toRgbaString: function() {
                        var e = "rgba(",
                            n = t.map(this._rgba, function(t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            });
                        return 1 === n[3] && (n.pop(), e = "rgb("), e + n.join() + ")"
                    },
                    toHslaString: function() {
                        var e = "hsla(",
                            n = t.map(this.hsla(), function(t, e) {
                                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                            });
                        return 1 === n[3] && (n.pop(), e = "hsl("), e + n.join() + ")"
                    },
                    toHexString: function(e) {
                        var n = this._rgba.slice(),
                            i = n.pop();
                        return e && n.push(~~(255 * i)), "#" + t.map(n, function(t) {
                            return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), u.fn.parse.prototype = u.fn, c.hsla.to = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e, n, i = t[0] / 255,
                        o = t[1] / 255,
                        s = t[2] / 255,
                        r = t[3],
                        a = Math.max(i, o, s),
                        l = Math.min(i, o, s),
                        u = a - l,
                        c = a + l,
                        h = .5 * c;
                    return e = l === a ? 0 : i === a ? 60 * (o - s) / u + 360 : o === a ? 60 * (s - i) / u + 120 : 60 * (i - o) / u + 240, n = 0 === u ? 0 : .5 >= h ? u / c : u / (2 - c), [Math.round(e) % 360, n, h, null == r ? 1 : r]
                }, c.hsla.from = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        n = t[1],
                        i = t[2],
                        s = t[3],
                        r = .5 >= i ? i * (1 + n) : i + n - i * n,
                        a = 2 * i - r;
                    return [Math.round(255 * o(a, r, e + 1 / 3)), Math.round(255 * o(a, r, e)), Math.round(255 * o(a, r, e - 1 / 3)), s]
                }, p(c, function(i, o) {
                    var s = o.props,
                        r = o.cache,
                        l = o.to,
                        c = o.from;
                    u.fn[i] = function(i) {
                        if (l && !this[r] && (this[r] = l(this._rgba)), i === e) return this[r].slice();
                        var o, a = t.type(i),
                            h = "array" === a || "object" === a ? i : arguments,
                            f = this[r].slice();
                        return p(s, function(t, e) {
                            var i = h["object" === a ? t : e.idx];
                            null == i && (i = f[e.idx]), f[e.idx] = n(i, e)
                        }), c ? (o = u(c(f)), o[r] = f, o) : u(f)
                    }, p(s, function(e, n) {
                        u.fn[e] || (u.fn[e] = function(o) {
                            var s, r = t.type(o),
                                l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : i,
                                u = this[l](),
                                c = u[n.idx];
                            return "undefined" === r ? c : ("function" === r && (o = o.call(this, c), r = t.type(o)), null == o && n.empty ? this : ("string" === r && (s = a.exec(o), s && (o = c + parseFloat(s[2]) * ("+" === s[1] ? 1 : -1))), u[n.idx] = o, this[l](u)))
                        })
                    })
                }), u.hook = function(e) {
                    var n = e.split(" ");
                    p(n, function(e, n) {
                        t.cssHooks[n] = {
                            set: function(e, o) {
                                var s, r, a = "";
                                if ("transparent" !== o && ("string" !== t.type(o) || (s = i(o)))) {
                                    if (o = u(s || o), !f.rgba && 1 !== o._rgba[3]) {
                                        for (r = "backgroundColor" === n ? e.parentNode : e;
                                            ("" === a || "transparent" === a) && r && r.style;) try {
                                            a = t.css(r, "backgroundColor"), r = r.parentNode
                                        } catch (l) {}
                                        o = o.blend(a && "transparent" !== a ? a : "_default")
                                    }
                                    o = o.toRgbaString()
                                }
                                try {
                                    e.style[n] = o
                                } catch (l) {}
                            }
                        }, t.fx.step[n] = function(e) {
                            e.colorInit || (e.start = u(e.elem, n), e.end = u(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
                        }
                    })
                }, u.hook(r), t.cssHooks.borderColor = {
                    expand: function(t) {
                        var e = {};
                        return p(["Top", "Right", "Bottom", "Left"], function(n, i) {
                            e["border" + i + "Color"] = t
                        }), e
                    }
                }, s = t.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(l),
            function() {
                function e(e) {
                    var n, i, o = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                        s = {};
                    if (o && o.length && o[0] && o[o[0]])
                        for (i = o.length; i--;) n = o[i], "string" == typeof o[n] && (s[t.camelCase(n)] = o[n]);
                    else
                        for (n in o) "string" == typeof o[n] && (s[n] = o[n]);
                    return s
                }

                function n(e, n) {
                    var i, s, r = {};
                    for (i in n) s = n[i], e[i] !== s && (o[i] || (t.fx.step[i] || !isNaN(parseFloat(s))) && (r[i] = s));
                    return r
                }
                var i = ["add", "remove", "toggle"],
                    o = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, n) {
                    t.fx.step[n] = function(t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (l.style(t.elem, n, t.end), t.setAttr = !0)
                    }
                }), t.fn.addBack || (t.fn.addBack = function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }), t.effects.animateClass = function(o, s, r, a) {
                    var l = t.speed(s, r, a);
                    return this.queue(function() {
                        var s, r = t(this),
                            a = r.attr("class") || "",
                            u = l.children ? r.find("*").addBack() : r;
                        u = u.map(function() {
                            var n = t(this);
                            return {
                                el: n,
                                start: e(this)
                            }
                        }), s = function() {
                            t.each(i, function(t, e) {
                                o[e] && r[e + "Class"](o[e])
                            })
                        }, s(), u = u.map(function() {
                            return this.end = e(this.el[0]), this.diff = n(this.start, this.end), this
                        }), r.attr("class", a), u = u.map(function() {
                            var e = this,
                                n = t.Deferred(),
                                i = t.extend({}, l, {
                                    queue: !1,
                                    complete: function() {
                                        n.resolve(e)
                                    }
                                });
                            return this.el.animate(this.diff, i), n.promise()
                        }), t.when.apply(t, u.get()).done(function() {
                            s(), t.each(arguments, function() {
                                var e = this.el;
                                t.each(this.diff, function(t) {
                                    e.css(t, "")
                                })
                            }), l.complete.call(r[0])
                        })
                    })
                }, t.fn.extend({
                    addClass: function(e) {
                        return function(n, i, o, s) {
                            return i ? t.effects.animateClass.call(this, {
                                add: n
                            }, i, o, s) : e.apply(this, arguments)
                        }
                    }(t.fn.addClass),
                    removeClass: function(e) {
                        return function(n, i, o, s) {
                            return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                remove: n
                            }, i, o, s) : e.apply(this, arguments)
                        }
                    }(t.fn.removeClass),
                    toggleClass: function(e) {
                        return function(n, i, o, s, r) {
                            return "boolean" == typeof i || void 0 === i ? o ? t.effects.animateClass.call(this, i ? {
                                add: n
                            } : {
                                remove: n
                            }, o, s, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                                toggle: n
                            }, i, o, s)
                        }
                    }(t.fn.toggleClass),
                    switchClass: function(e, n, i, o, s) {
                        return t.effects.animateClass.call(this, {
                            add: n,
                            remove: e
                        }, i, o, s)
                    }
                })
            }(),
            function() {
                function e(e, n, i, o) {
                    return t.isPlainObject(e) && (n = e, e = e.effect), e = {
                        effect: e
                    }, null == n && (n = {}), t.isFunction(n) && (o = n, i = null, n = {}), ("number" == typeof n || t.fx.speeds[n]) && (o = i, i = n, n = {}), t.isFunction(i) && (o = i, i = null), n && t.extend(e, n), i = i || n.duration, e.duration = t.fx.off ? 0 : "number" == typeof i ? i : i in t.fx.speeds ? t.fx.speeds[i] : t.fx.speeds._default, e.complete = o || n.complete, e
                }

                function n(e) {
                    return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
                }

                function i(t, e) {
                    var n = e.outerWidth(),
                        i = e.outerHeight(),
                        o = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                        s = o.exec(t) || ["", 0, n, i, 0];
                    return {
                        top: parseFloat(s[1]) || 0,
                        right: "auto" === s[2] ? n : parseFloat(s[2]),
                        bottom: "auto" === s[3] ? i : parseFloat(s[3]),
                        left: parseFloat(s[4]) || 0
                    }
                }
                t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
                    return function(n) {
                        return !!t(n).data(a) || e(n)
                    }
                }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
                    save: function(t, e) {
                        for (var n = 0, i = e.length; i > n; n++) null !== e[n] && t.data(s + e[n], t[0].style[e[n]])
                    },
                    restore: function(t, e) {
                        for (var n, i = 0, o = e.length; o > i; i++) null !== e[i] && (n = t.data(s + e[i]), t.css(e[i], n))
                    },
                    setMode: function(t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    },
                    createWrapper: function(e) {
                        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                        var n = {
                                width: e.outerWidth(!0),
                                height: e.outerHeight(!0),
                                "float": e.css("float")
                            },
                            i = t("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            o = {
                                width: e.width(),
                                height: e.height()
                            },
                            s = document.activeElement;
                        try {
                            s.id
                        } catch (r) {
                            s = document.body
                        }
                        return e.wrap(i), (e[0] === s || t.contains(e[0], s)) && t(s).trigger("focus"), i = e.parent(), "static" === e.css("position") ? (i.css({
                            position: "relative"
                        }), e.css({
                            position: "relative"
                        })) : (t.extend(n, {
                            position: e.css("position"),
                            zIndex: e.css("z-index")
                        }), t.each(["top", "left", "bottom", "right"], function(t, i) {
                            n[i] = e.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto")
                        }), e.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), e.css(o), i.css(n).show()
                    },
                    removeWrapper: function(e) {
                        var n = document.activeElement;
                        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === n || t.contains(e[0], n)) && t(n).trigger("focus")), e
                    }
                }), t.extend(t.effects, {
                    version: "1.12.1",
                    define: function(e, n, i) {
                        return i || (i = n, n = "effect"), t.effects.effect[e] = i, t.effects.effect[e].mode = n, i
                    },
                    scaledDimensions: function(t, e, n) {
                        if (0 === e) return {
                            height: 0,
                            width: 0,
                            outerHeight: 0,
                            outerWidth: 0
                        };
                        var i = "horizontal" !== n ? (e || 100) / 100 : 1,
                            o = "vertical" !== n ? (e || 100) / 100 : 1;
                        return {
                            height: t.height() * o,
                            width: t.width() * i,
                            outerHeight: t.outerHeight() * o,
                            outerWidth: t.outerWidth() * i
                        }
                    },
                    clipToBox: function(t) {
                        return {
                            width: t.clip.right - t.clip.left,
                            height: t.clip.bottom - t.clip.top,
                            left: t.clip.left,
                            top: t.clip.top
                        }
                    },
                    unshift: function(t, e, n) {
                        var i = t.queue();
                        e > 1 && i.splice.apply(i, [1, 0].concat(i.splice(e, n))), t.dequeue()
                    },
                    saveStyle: function(t) {
                        t.data(r, t[0].style.cssText)
                    },
                    restoreStyle: function(t) {
                        t[0].style.cssText = t.data(r) || "", t.removeData(r)
                    },
                    mode: function(t, e) {
                        var n = t.is(":hidden");
                        return "toggle" === e && (e = n ? "show" : "hide"), (n ? "hide" === e : "show" === e) && (e = "none"), e
                    },
                    getBaseline: function(t, e) {
                        var n, i;
                        switch (t[0]) {
                            case "top":
                                n = 0;
                                break;
                            case "middle":
                                n = .5;
                                break;
                            case "bottom":
                                n = 1;
                                break;
                            default:
                                n = t[0] / e.height
                        }
                        switch (t[1]) {
                            case "left":
                                i = 0;
                                break;
                            case "center":
                                i = .5;
                                break;
                            case "right":
                                i = 1;
                                break;
                            default:
                                i = t[1] / e.width
                        }
                        return {
                            x: i,
                            y: n
                        }
                    },
                    createPlaceholder: function(e) {
                        var n, i = e.css("position"),
                            o = e.position();
                        return e.css({
                            marginTop: e.css("marginTop"),
                            marginBottom: e.css("marginBottom"),
                            marginLeft: e.css("marginLeft"),
                            marginRight: e.css("marginRight")
                        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(i) && (i = "absolute", n = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                            display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                            visibility: "hidden",
                            marginTop: e.css("marginTop"),
                            marginBottom: e.css("marginBottom"),
                            marginLeft: e.css("marginLeft"),
                            marginRight: e.css("marginRight"),
                            "float": e.css("float")
                        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(s + "placeholder", n)), e.css({
                            position: i,
                            left: o.left,
                            top: o.top
                        }), n
                    },
                    removePlaceholder: function(t) {
                        var e = s + "placeholder",
                            n = t.data(e);
                        n && (n.remove(), t.removeData(e))
                    },
                    cleanUp: function(e) {
                        t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
                    },
                    setTransition: function(e, n, i, o) {
                        return o = o || {}, t.each(n, function(t, n) {
                            var s = e.cssUnit(n);
                            s[0] > 0 && (o[n] = s[0] * i + s[1])
                        }), o
                    }
                }), t.fn.extend({
                    effect: function() {
                        function n(e) {
                            function n() {
                                l.removeData(a), t.effects.cleanUp(l), "hide" === i.mode && l.hide(), r()
                            }

                            function r() {
                                t.isFunction(u) && u.call(l[0]), t.isFunction(e) && e()
                            }
                            var l = t(this);
                            i.mode = h.shift(), t.uiBackCompat === !1 || s ? "none" === i.mode ? (l[c](), r()) : o.call(l[0], i, n) : (l.is(":hidden") ? "hide" === c : "show" === c) ? (l[c](), r()) : o.call(l[0], i, r)
                        }
                        var i = e.apply(this, arguments),
                            o = t.effects.effect[i.effect],
                            s = o.mode,
                            r = i.queue,
                            l = r || "fx",
                            u = i.complete,
                            c = i.mode,
                            h = [],
                            f = function(e) {
                                var n = t(this),
                                    i = t.effects.mode(n, c) || s;
                                n.data(a, !0), h.push(i), s && ("show" === i || i === s && "hide" === i) && n.show(), s && "none" === i || t.effects.saveStyle(n), t.isFunction(e) && e()
                            };
                        return t.fx.off || !o ? c ? this[c](i.duration, u) : this.each(function() {
                            u && u.call(this)
                        }) : r === !1 ? this.each(f).each(n) : this.queue(l, f).queue(l, n)
                    },
                    show: function(t) {
                        return function(i) {
                            if (n(i)) return t.apply(this, arguments);
                            var o = e.apply(this, arguments);
                            return o.mode = "show", this.effect.call(this, o)
                        }
                    }(t.fn.show),
                    hide: function(t) {
                        return function(i) {
                            if (n(i)) return t.apply(this, arguments);
                            var o = e.apply(this, arguments);
                            return o.mode = "hide", this.effect.call(this, o)
                        }
                    }(t.fn.hide),
                    toggle: function(t) {
                        return function(i) {
                            if (n(i) || "boolean" == typeof i) return t.apply(this, arguments);
                            var o = e.apply(this, arguments);
                            return o.mode = "toggle", this.effect.call(this, o)
                        }
                    }(t.fn.toggle),
                    cssUnit: function(e) {
                        var n = this.css(e),
                            i = [];
                        return t.each(["em", "px", "%", "pt"], function(t, e) {
                            n.indexOf(e) > 0 && (i = [parseFloat(n), e])
                        }), i
                    },
                    cssClip: function(t) {
                        return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : i(this.css("clip"), this)
                    },
                    transfer: function(e, n) {
                        var i = t(this),
                            o = t(e.to),
                            s = "fixed" === o.css("position"),
                            r = t("body"),
                            a = s ? r.scrollTop() : 0,
                            l = s ? r.scrollLeft() : 0,
                            u = o.offset(),
                            c = {
                                top: u.top - a,
                                left: u.left - l,
                                height: o.innerHeight(),
                                width: o.innerWidth()
                            },
                            h = i.offset(),
                            f = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                                top: h.top - a,
                                left: h.left - l,
                                height: i.innerHeight(),
                                width: i.innerWidth(),
                                position: s ? "fixed" : "absolute"
                            }).animate(c, e.duration, e.easing, function() {
                                f.remove(), t.isFunction(n) && n()
                            })
                    }
                }), t.fx.step.clip = function(e) {
                    e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = i(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                        top: e.pos * (e.end.top - e.start.top) + e.start.top,
                        right: e.pos * (e.end.right - e.start.right) + e.start.right,
                        bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                        left: e.pos * (e.end.left - e.start.left) + e.start.left
                    })
                }
            }(),
            function() {
                var e = {};
                t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, n) {
                    e[n] = function(e) {
                        return Math.pow(e, t + 2)
                    }
                }), t.extend(e, {
                    Sine: function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    Circ: function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Elastic: function(t) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(t) {
                        return t * t * (3 * t - 2)
                    },
                    Bounce: function(t) {
                        for (var e, n = 4;
                            ((e = Math.pow(2, --n)) - 1) / 11 > t;);
                        return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }), t.each(e, function(e, n) {
                    t.easing["easeIn" + e] = n, t.easing["easeOut" + e] = function(t) {
                        return 1 - n(1 - t)
                    }, t.easing["easeInOut" + e] = function(t) {
                        return .5 > t ? n(2 * t) / 2 : 1 - n(-2 * t + 2) / 2
                    }
                })
            }(), t.effects, t.effects.define("fade", "toggle", function(e, n) {
                var i = "show" === e.mode;
                t(this).css("opacity", i ? 0 : 1).animate({
                    opacity: i ? 1 : 0
                }, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: n
                })
            }), t.effects.define("shake", function(e, n) {
                var i = 1,
                    o = t(this),
                    s = e.direction || "left",
                    r = e.distance || 20,
                    a = e.times || 3,
                    l = 2 * a + 1,
                    u = Math.round(e.duration / l),
                    c = "up" === s || "down" === s ? "top" : "left",
                    h = "up" === s || "left" === s,
                    f = {},
                    d = {},
                    p = {},
                    m = o.queue().length;
                for (t.effects.createPlaceholder(o), f[c] = (h ? "-=" : "+=") + r, d[c] = (h ? "+=" : "-=") + 2 * r, p[c] = (h ? "-=" : "+=") + 2 * r, o.animate(f, u, e.easing); a > i; i++) o.animate(d, u, e.easing).animate(p, u, e.easing);
                o.animate(d, u, e.easing).animate(f, u / 2, e.easing).queue(n), t.effects.unshift(o, m, l + 1)
            }), t.effects.define("size", function(e, n) {
                var i, o, s, r = t(this),
                    a = ["fontSize"],
                    l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                    u = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                    c = e.mode,
                    h = "effect" !== c,
                    f = e.scale || "both",
                    d = e.origin || ["middle", "center"],
                    p = r.css("position"),
                    m = r.position(),
                    g = t.effects.scaledDimensions(r),
                    v = e.from || g,
                    y = e.to || t.effects.scaledDimensions(r, 0);
                t.effects.createPlaceholder(r), "show" === c && (s = v, v = y, y = s), o = {
                    from: {
                        y: v.height / g.height,
                        x: v.width / g.width
                    },
                    to: {
                        y: y.height / g.height,
                        x: y.width / g.width
                    }
                }, ("box" === f || "both" === f) && (o.from.y !== o.to.y && (v = t.effects.setTransition(r, l, o.from.y, v), y = t.effects.setTransition(r, l, o.to.y, y)), o.from.x !== o.to.x && (v = t.effects.setTransition(r, u, o.from.x, v), y = t.effects.setTransition(r, u, o.to.x, y))), ("content" === f || "both" === f) && o.from.y !== o.to.y && (v = t.effects.setTransition(r, a, o.from.y, v), y = t.effects.setTransition(r, a, o.to.y, y)), d && (i = t.effects.getBaseline(d, g), v.top = (g.outerHeight - v.outerHeight) * i.y + m.top, v.left = (g.outerWidth - v.outerWidth) * i.x + m.left, y.top = (g.outerHeight - y.outerHeight) * i.y + m.top, y.left = (g.outerWidth - y.outerWidth) * i.x + m.left), r.css(v), ("content" === f || "both" === f) && (l = l.concat(["marginTop", "marginBottom"]).concat(a), u = u.concat(["marginLeft", "marginRight"]), r.find("*[width]").each(function() {
                    var n = t(this),
                        i = t.effects.scaledDimensions(n),
                        s = {
                            height: i.height * o.from.y,
                            width: i.width * o.from.x,
                            outerHeight: i.outerHeight * o.from.y,
                            outerWidth: i.outerWidth * o.from.x
                        },
                        r = {
                            height: i.height * o.to.y,
                            width: i.width * o.to.x,
                            outerHeight: i.height * o.to.y,
                            outerWidth: i.width * o.to.x
                        };
                    o.from.y !== o.to.y && (s = t.effects.setTransition(n, l, o.from.y, s), r = t.effects.setTransition(n, l, o.to.y, r)), o.from.x !== o.to.x && (s = t.effects.setTransition(n, u, o.from.x, s), r = t.effects.setTransition(n, u, o.to.x, r)), h && t.effects.saveStyle(n), n.css(s), n.animate(r, e.duration, e.easing, function() {
                        h && t.effects.restoreStyle(n)
                    })
                })), r.animate(y, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: function() {
                        var e = r.offset();
                        0 === y.opacity && r.css("opacity", v.opacity), h || (r.css("position", "static" === p ? "relative" : p).offset(e), t.effects.saveStyle(r)), n()
                    }
                })
            }), t.effects.define("slide", "show", function(e, n) {
                var i, o, s = t(this),
                    r = {
                        up: ["bottom", "top"],
                        down: ["top", "bottom"],
                        left: ["right", "left"],
                        right: ["left", "right"]
                    },
                    a = e.mode,
                    l = e.direction || "left",
                    u = "up" === l || "down" === l ? "top" : "left",
                    c = "up" === l || "left" === l,
                    h = e.distance || s["top" === u ? "outerHeight" : "outerWidth"](!0),
                    f = {};
                t.effects.createPlaceholder(s), i = s.cssClip(), o = s.position()[u], f[u] = (c ? -1 : 1) * h + o, f.clip = s.cssClip(), f.clip[r[l][1]] = f.clip[r[l][0]], "show" === a && (s.cssClip(f.clip), s.css(u, f[u]), f.clip = i, f[u] = o), s.animate(f, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: n
                })
            })
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.2.0", i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var i = t(this),
            o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(o);
        e && e.preventDefault(), s.length || (s = i.hasClass("alert") ? i : i.parent()), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                s = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            s = i.data();
        e += "Text", null == s.resetText && i.data("resetText", i[o]()), i[o](null == s[e] ? this.options[e] : s[e]), setTimeout(t.proxy(function() {
            "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault()
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : s.slide;
            o || i.data("bs.carousel", o = new n(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, n.prototype.keydown = function(t) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.to = function(e) {
        var n = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            n.to(e)
        }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(e, n) {
        var i = this.$element.find(".item.active"),
            o = n || i[e](),
            s = this.interval,
            r = "next" == e ? "left" : "right",
            a = "next" == e ? "first" : "last",
            l = this;
        if (!o.length) {
            if (!this.options.wrap) return;
            o = this.$element.find(".item")[a]()
        }
        if (o.hasClass("active")) return this.sliding = !1;
        var u = o[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: r
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(o)]);
                h && h.addClass("active")
            }
            var f = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, i.addClass(r), o.addClass(r), i.one("bsTransitionEnd", function() {
                o.removeClass([e, r].join(" ")).addClass("active"), i.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(f)
                }, 0)
            }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(f)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(n) {
        var i, o = t(this),
            s = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var r = t.extend({}, s.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), n.preventDefault()
        }
    }), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.collapse"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && s.toggle && "show" == e && (e = !e), o || i.data("bs.collapse", o = new n(this, s)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n = t.Event("show.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var o = i.data("bs.collapse");
                    if (o && o.transitioning) return;
                    e.call(i, "hide"), o || i.data("bs.collapse", null)
                }
                var s = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[s](0), this.transitioning = 1;
                var r = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return r.call(this);
                var a = t.camelCase(["scroll", s].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(350)[s](this.$element[0][a])
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var i = t.fn.collapse;
    t.fn.collapse = e, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var i, o = t(this),
            s = o.attr("data-target") || n.preventDefault() || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            r = t(s),
            a = r.data("bs.collapse"),
            l = a ? "toggle" : o.data(),
            u = o.attr("data-parent"),
            c = u && t(u);
        a && a.transitioning || (c && c.find('[data-toggle="collapse"][data-parent="' + u + '"]').not(o).addClass("collapsed"), o[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(r, l)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(o).remove(), t(s).each(function() {
            var i = n(t(this)),
                o = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", o))
        }))
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        r = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    r.VERSION = "3.2.0", r.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var s = n(o),
                r = s.hasClass("open");
            if (e(), !r) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus"), s.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, r.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = n(i),
                    r = o.hasClass("open");
                if (!r || r && 27 == e.keyCode) return 27 == e.which && o.find(s).trigger("focus"), i.trigger("click");
                var a = " li:not(.divider):visible a",
                    l = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == e.keyCode && u > 0 && u--, 40 == e.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s + ', [role="menu"], [role="listbox"]', r.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.modal"),
                r = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            s || o.data("bs.modal", s = new n(this, r)), "string" == typeof e ? s[e](i) : r.show && s.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var n = this,
            i = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var i = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            i ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var n = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && i;
            if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(150) : s()
        } else e && e()
    }, n.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            s = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            r = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, s.data(), i.data());
        i.is("a") && n.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(s, r, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                s = "object" == typeof e && e;
            (o || "destroy" != e) && (o || i.data("bs.tooltip", o = new n(this, s)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
            var r = o[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var i = this,
                o = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                l = a.test(r);
            l && (r = r.replace(a, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var u = this.getPosition(),
                c = o[0].offsetWidth,
                h = o[0].offsetHeight;
            if (l) {
                var f = r,
                    d = this.$element.parent(),
                    p = this.getPosition(d);
                r = "bottom" == r && u.top + u.height + h - p.scroll > p.height ? "top" : "top" == r && u.top - p.scroll - h < 0 ? "bottom" : "right" == r && u.right + c > p.width ? "left" : "left" == r && u.left - c < p.left ? "right" : r, o.removeClass(f).addClass(r)
            }
            var m = this.getCalculatedOffset(r, u, c, h);
            this.applyPlacement(m, r);
            var g = function() {
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            s = i[0].offsetHeight,
            r = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top = e.top + r, e.left = e.left + a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != s && (e.top = e.top + s - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var h = c.left ? 2 * c.left - o + l : 2 * c.top - s + u,
            f = c.left ? "left" : "top",
            d = c.left ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(h, i[0][d], f)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function() {
        function e() {
            "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            i = this.tip(),
            o = t.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName;
        return t.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: i ? t(window).width() : e.outerWidth(),
            height: i ? t(window).height() : e.outerHeight()
        }, i ? {
            top: 0,
            left: 0
        } : e.offset())
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll,
                l = e.top + s - r.scroll + i;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var u = e.left - s,
                c = e.left + s + n;
            u < r.left ? o.left = r.left - u : c > r.width && (o.left = r.left + r.width - c)
        }
        return o
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                s = "object" == typeof e && e;
            (o || "destroy" != e) && (o || i.data("bs.popover", o = new n(this, s)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.2.0", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(n, i) {
        var o = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(n).is("body") ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                s = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, s)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.2.0", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = "offset",
            n = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function() {
            var i = t(this),
                o = i.data("target") || i.attr("href"),
                s = /^#./.test(o) && t(o);
            return s && s.length && s.is(":visible") && [
                [s[e]().top + n, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            s = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e <= o[0]) return r != (t = s[0]) && this.activate(t);
        for (t = o.length; t--;) r != s[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.2.0", n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a")[0],
                s = t.Event("show.bs.tab", {
                    relatedTarget: o
                });
            if (e.trigger(s), !s.isDefaultPrevented()) {
                var r = t(i);
                this.activate(e.closest("li"), n), this.activate(r, r.parent(), function() {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, n, i) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
        }
        var s = n.find("> .active"),
            r = i && t.support.transition && s.hasClass("fade");
        r ? s.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(n) {
        n.preventDefault(), e.call(t(this), "show")
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                s = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, s)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.2.0", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = t(document).height(),
                i = this.$target.scrollTop(),
                o = this.$element.offset(),
                s = this.options.offset,
                r = s.top,
                a = s.bottom;
            "object" != typeof s && (a = r = s), "function" == typeof r && (r = s.top(this.$element)), "function" == typeof a && (a = s.bottom(this.$element));
            var l = null != this.unpin && i + this.unpin <= o.top ? !1 : null != a && o.top + this.$element.height() >= e - a ? "bottom" : null != r && r >= i ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l : ""),
                    c = t.Event(u + ".bs.affix");
                this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(t.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: e - this.$element.height() - a
                }))
            }
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery);
//# sourceMappingURL=footer-vendors-v1.js.map