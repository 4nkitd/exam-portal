function require(t, e, i) { var n = require.resolve(t); if (null == n) { i = i || t, e = e || "root"; var r = new Error('Failed to require "' + i + '" from "' + e + '"'); throw r.path = i, r.parent = e, r.require = !0, r } var s = require.modules[n]; if (!s._resolving && !s.exports) { var a = { exports: {} };
        a.client = a.component = !0, s._resolving = !0, s.call(this, a.exports, require.relative(n), a), delete s._resolving, s.exports = a.exports } return s.exports }! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Raphael = e() : t.Raphael = e() }(this, function() { return function(i) {
        function n(t) { if (r[t]) return r[t].exports; var e = r[t] = { exports: {}, id: t, loaded: !1 }; return i[t].call(e.exports, e, e.exports, n), e.loaded = !0, e.exports } var r = {}; return n.m = i, n.c = r, n.p = "", n(0) }([function(t, e, i) { var n, r;
        n = [i(1), i(3), i(4)], void 0 === (r = function(t) { return t }.apply(e, n)) || (t.exports = r) }, function(t, e, i) { var n, r;
        n = [i(2)], void 0 === (r = function(R) {
            function I(t) { if (I.is(t, "function")) return n ? t() : R.on("raphael.DOMload", t); if (I.is(t, E)) return I._engine.create[x](I, t.splice(0, 3 + I.is(t[0], z))).add(t); var e = Array.prototype.slice.call(arguments, 0); if (I.is(e[e.length - 1], "function")) { var i = e.pop(); return n ? i.call(I._engine.create[x](I, e)) : R.on("raphael.DOMload", function() { i.call(I._engine.create[x](I, e)) }) } return I._engine.create[x](I, arguments) }

            function v(t) { if ("function" == typeof t || Object(t) !== t) return t; var e = new t.constructor; for (var i in t) t[N](i) && (e[i] = v(t[i])); return e }

            function W(s, a, o) { return function t() { var e = Array.prototype.slice.call(arguments, 0),
                        i = e.join("␀"),
                        n = t.cache = t.cache || {},
                        r = t.count = t.count || []; return n[N](i) ? function(t, e) { for (var i = 0, n = t.length; i < n; i++)
                            if (t[i] === e) return t.push(t.splice(i, 1)[0]) }(r, i) : (1e3 <= r.length && delete n[r.shift()], r.push(i), n[i] = s[x](a, e)), o ? o(n[i]) : n[i] } }

            function l() { return this.hex }

            function y(t, e) { for (var i = [], n = 0, r = t.length; n < r - 2 * !e; n += 2) { var s = [{ x: +t[n - 2], y: +t[n - 1] }, { x: +t[n], y: +t[n + 1] }, { x: +t[n + 2], y: +t[n + 3] }, { x: +t[n + 4], y: +t[n + 5] }];
                    e ? n ? r - 4 == n ? s[3] = { x: +t[0], y: +t[1] } : r - 2 == n && (s[2] = { x: +t[0], y: +t[1] }, s[3] = { x: +t[2], y: +t[3] }) : s[0] = { x: +t[r - 2], y: +t[r - 1] } : r - 4 == n ? s[3] = s[2] : n || (s[0] = { x: +t[n], y: +t[n + 1] }), i.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y]) } return i }

            function b(t, e, i, n, r) { return t * (t * (-3 * e + 9 * i - 9 * n + 3 * r) + 6 * e - 12 * i + 6 * n) - 3 * e + 3 * i }

            function k(t, e, i, n, r, s, a, o, l) { null == l && (l = 1); for (var h = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2, u = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], c = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, p = 0; p < 12; p++) { var f = h * u[p] + h,
                        g = b(f, t, i, r, a),
                        m = b(f, e, n, s, o),
                        v = g * g + m * m;
                    d += c[p] * q.sqrt(v) } return h * d }

            function D(t, e, i, n, r, s, a, o) { if (!(T(t, i) < M(r, a) || M(t, i) > T(r, a) || T(e, n) < M(s, o) || M(e, n) > T(s, o))) { var l = (t - i) * (s - o) - (e - n) * (r - a); if (l) { var h = ((t * n - e * i) * (r - a) - (t - i) * (r * o - s * a)) / l,
                            u = ((t * n - e * i) * (s - o) - (e - n) * (r * o - s * a)) / l,
                            c = +h.toFixed(2),
                            d = +u.toFixed(2); if (!(c < +M(t, i).toFixed(2) || c > +T(t, i).toFixed(2) || c < +M(r, a).toFixed(2) || c > +T(r, a).toFixed(2) || d < +M(e, n).toFixed(2) || d > +T(e, n).toFixed(2) || d < +M(s, o).toFixed(2) || d > +T(s, o).toFixed(2))) return { x: h, y: u } } } }

            function S(t, e, i) { var n = I.bezierBBox(t),
                    r = I.bezierBBox(e); if (!I.isBBoxIntersect(n, r)) return i ? 0 : []; for (var s = k.apply(0, t), a = k.apply(0, e), o = T(~~(s / 5), 1), l = T(~~(a / 5), 1), h = [], u = [], c = {}, d = i ? 0 : [], p = 0; p < o + 1; p++) { var f = I.findDotsAtSegment.apply(I, t.concat(p / o));
                    h.push({ x: f.x, y: f.y, t: p / o }) } for (p = 0; p < l + 1; p++) f = I.findDotsAtSegment.apply(I, e.concat(p / l)), u.push({ x: f.x, y: f.y, t: p / l }); for (p = 0; p < o; p++)
                    for (var g = 0; g < l; g++) { var m = h[p],
                            v = h[p + 1],
                            y = u[g],
                            b = u[g + 1],
                            x = V(v.x - m.x) < .001 ? "y" : "x",
                            w = V(b.x - y.x) < .001 ? "y" : "x",
                            _ = D(m.x, m.y, v.x, v.y, y.x, y.y, b.x, b.y); if (_) { if (c[_.x.toFixed(4)] == _.y.toFixed(4)) continue;
                            c[_.x.toFixed(4)] = _.y.toFixed(4); var S = m.t + V((_[x] - m[x]) / (v[x] - m[x])) * (v.t - m.t),
                                C = y.t + V((_[w] - y[w]) / (b[w] - y[w])) * (b.t - y.t);
                            0 <= S && S <= 1.001 && 0 <= C && C <= 1.001 && (i ? d++ : d.push({ x: _.x, y: _.y, t1: M(S, 1), t2: M(C, 1) })) } }
                return d }

            function r(t, e, i) { t = I._path2curve(t), e = I._path2curve(e); for (var n, r, s, a, o, l, h, u, c, d, p = i ? 0 : [], f = 0, g = t.length; f < g; f++) { var m = t[f]; if ("M" == m[0]) n = o = m[1], r = l = m[2];
                    else { r = "C" == m[0] ? (n = (c = [n, r].concat(m.slice(1)))[6], c[7]) : (c = [n, r, n, r, o, l, o, l], n = o, l); for (var v = 0, y = e.length; v < y; v++) { var b = e[v]; if ("M" == b[0]) s = h = b[1], a = u = b[2];
                            else { a = "C" == b[0] ? (s = (d = [s, a].concat(b.slice(1)))[6], d[7]) : (d = [s, a, s, a, h, u, h, u], s = h, u); var x = S(c, d, i); if (i) p += x;
                                else { for (var w = 0, _ = x.length; w < _; w++) x[w].segment1 = f, x[w].segment2 = v, x[w].bez1 = c, x[w].bez2 = d;
                                    p = p.concat(x) } } } } } return p }

            function F(t, e, i, n, r, s) { this.f = null != t ? (this.a = +t, this.b = +e, this.c = +i, this.d = +n, this.e = +r, +s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0) }

            function i() { return this.x + " " + this.y + " " + this.width + " × " + this.height }

            function u(t, e) { var i = [],
                    n = {}; if (this.ms = e, this.times = 1, t) { for (var r in t) t[N](r) && (n[X(r)] = t[r], i.push(X(r)));
                    i.sort(ot) } this.anim = n, this.top = i[i.length - 1], this.percents = i }

            function _(t, e, i, n, r, s) { i = X(i); var a, o, l, h, u, c, d = t.ms,
                    p = {},
                    f = {},
                    g = {}; if (n)
                    for (v = 0, y = ee.length; v < y; v++) { var m = ee[v]; if (m.el.id == e.id && m.anim == t) { m.percent != i ? (ee.splice(v, 1), l = 1) : o = m, e.attr(m.totalOrigin); break } } else n = +f; for (var v = 0, y = t.percents.length; v < y; v++) { if (t.percents[v] == i || t.percents[v] > n * t.top) { i = t.percents[v], u = t.percents[v - 1] || 0, d = d / t.top * (i - u), h = t.percents[v + 1], a = t.anim[i]; break } n && e.attr(t.anim[t.percents[v]]) } if (a) { if (o) o.initstatus = n, o.start = new Date - o.ms * n;
                    else { for (var b in a)
                            if (a[N](b) && (K[N](b) || e.paper.customAttributes[N](b))) switch (p[b] = e.attr(b), null == p[b] && (p[b] = J[b]), f[b] = a[b], K[b]) {
                                case z:
                                    g[b] = (f[b] - p[b]) / d; break;
                                case "colour":
                                    p[b] = I.getRGB(p[b]); var x = I.getRGB(f[b]);
                                    g[b] = { r: (x.r - p[b].r) / d, g: (x.g - p[b].g) / d, b: (x.b - p[b].b) / d }; break;
                                case "path":
                                    var w = Pt(p[b], f[b]),
                                        _ = w[1]; for (p[b] = w[0], g[b] = [], v = 0, y = p[b].length; v < y; v++) { g[b][v] = [0]; for (var S = 1, C = p[b][v].length; S < C; S++) g[b][v][S] = (_[v][S] - p[b][v][S]) / d } break;
                                case "transform":
                                    var k = e._,
                                        D = Ft(k[b], f[b]); if (D)
                                        for (p[b] = D.from, f[b] = D.to, g[b] = [], g[b].real = !0, v = 0, y = p[b].length; v < y; v++)
                                            for (g[b][v] = [p[b][v][0]], S = 1, C = p[b][v].length; S < C; S++) g[b][v][S] = (f[b][v][S] - p[b][v][S]) / d;
                                    else { var T = e.matrix || new F,
                                            M = { _: { transform: k.transform }, getBBox: function() { return e.getBBox(1) } };
                                        p[b] = [T.a, T.b, T.c, T.d, T.e, T.f], Rt(M, f[b]), f[b] = M._.transform, g[b] = [(M.matrix.a - T.a) / d, (M.matrix.b - T.b) / d, (M.matrix.c - T.c) / d, (M.matrix.d - T.d) / d, (M.matrix.e - T.e) / d, (M.matrix.f - T.f) / d] } break;
                                case "csv":
                                    var A = H(a[b])[U](j),
                                        E = H(p[b])[U](j); if ("clip-rect" == b)
                                        for (p[b] = E, g[b] = [], v = E.length; v--;) g[b][v] = (A[v] - p[b][v]) / d;
                                    f[b] = A; break;
                                default:
                                    for (A = [][Y](a[b]), E = [][Y](p[b]), g[b] = [], v = e.paper.customAttributes[b].length; v--;) g[b][v] = ((A[v] || 0) - (E[v] || 0)) / d }
                        var P = a.easing,
                            L = I.easing_formulas[P]; if (!L)
                            if ((L = H(P).match(B)) && 5 == L.length) { var O = L;
                                L = function(t) { return function(t, e, i, n, r, s) {
                                        function l(t) { return ((c * t + u) * t + h) * t } var a, h = 3 * e,
                                            u = 3 * (n - e) - h,
                                            c = 1 - h - u,
                                            o = 3 * i,
                                            d = 3 * (r - i) - o; return (((1 - o - d) * (a = function(t, e) { var i, n, r, s, a, o; for (r = t, o = 0; o < 8; o++) { if (s = l(r) - t, V(s) < e) return r; if (V(a = (3 * c * r + 2 * u) * r + h) < 1e-6) break;
                                                r -= s / a } if ((r = t) < (i = 0)) return i; if ((n = 1) < r) return n; for (; i < n;) { if (s = l(r), V(s - t) < e) return r;
                                                s < t ? i = r : n = r, r = (n - i) / 2 + i } return r }(t, 1 / (200 * s))) + d) * a + o) * a }(t, +O[1], +O[2], +O[3], +O[4], d) } } else L = lt; if (m = { anim: t, percent: i, timestamp: c = a.start || t.start || +new Date, start: c + (t.del || 0), status: 0, initstatus: n || 0, stop: !1, ms: d, easing: L, from: p, diff: g, to: f, el: e, callback: a.callback, prev: u, next: h, repeat: s || t.times, origin: e.attr(), totalOrigin: r }, ee.push(m), n && !o && !l && (m.stop = !0, m.start = new Date - d * n, 1 == ee.length)) return ne();
                        l && (m.start = new Date - m.ms * n), 1 == ee.length && ie(ne) } R("raphael.anim.start." + e.id, e, t) } }

            function t(t) { for (var e = 0; e < ee.length; e++) ee[e].el.paper == t && ee.splice(e--, 1) } I.version = "2.2.0", I.eve = R; var n, e, s, a, j = /[, ]+/,
                o = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 },
                h = /\{(\d+)\}/g,
                N = "hasOwnProperty",
                f = { doc: document, win: window },
                c = { was: Object.prototype[N].call(f.win, "Raphael"), is: f.win.Raphael },
                d = function() { this.ca = this.customAttributes = {} },
                x = "apply",
                Y = "concat",
                g = "ontouchstart" in f.win || f.win.DocumentTouch && f.doc instanceof DocumentTouch,
                H = String,
                U = "split",
                p = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [U](" "),
                m = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" },
                w = H.prototype.toLowerCase,
                q = Math,
                T = q.max,
                M = q.min,
                V = q.abs,
                A = q.pow,
                G = q.PI,
                z = "number",
                C = "string",
                E = "array",
                P = Object.prototype.toString,
                L = (I._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
                O = { NaN: 1, Infinity: 1, "-Infinity": 1 },
                B = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
                $ = q.round,
                X = parseFloat,
                Z = parseInt,
                Q = H.prototype.toUpperCase,
                J = I._availableAttrs = { "arrow-end": "none", "arrow-start": "none", blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", "letter-spacing": 0, opacity: 1, path: "M0,0", r: 0, rx: 0, ry: 0, src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt", "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", transform: "", width: 0, x: 0, y: 0, class: "" },
                K = I._availableAnimAttrs = { blur: z, "clip-rect": "csv", cx: z, cy: z, fill: "colour", "fill-opacity": z, "font-size": z, height: z, opacity: z, path: "path", r: z, rx: z, ry: z, stroke: "colour", "stroke-opacity": z, "stroke-width": z, transform: "transform", width: z, x: z, y: z },
                tt = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
                et = { hs: 1, rg: 1 },
                it = /,?([achlmqrstvxz]),?/gi,
                nt = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                rt = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                st = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
                at = (I._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
                ot = function(t, e) { return X(t) - X(e) },
                lt = function(t) { return t },
                ht = I._rectPath = function(t, e, i, n, r) { return r ? [
                        ["M", t + r, e],
                        ["l", i - 2 * r, 0],
                        ["a", r, r, 0, 0, 1, r, r],
                        ["l", 0, n - 2 * r],
                        ["a", r, r, 0, 0, 1, -r, r],
                        ["l", 2 * r - i, 0],
                        ["a", r, r, 0, 0, 1, -r, -r],
                        ["l", 0, 2 * r - n],
                        ["a", r, r, 0, 0, 1, r, -r],
                        ["z"]
                    ] : [
                        ["M", t, e],
                        ["l", i, 0],
                        ["l", 0, n],
                        ["l", -i, 0],
                        ["z"]
                    ] },
                ut = function(t, e, i, n) { return null == n && (n = i), [
                        ["M", t, e],
                        ["m", 0, -n],
                        ["a", i, n, 0, 1, 1, 0, 2 * n],
                        ["a", i, n, 0, 1, 1, 0, -2 * n],
                        ["z"]
                    ] },
                ct = I._getPath = { path: function(t) { return t.attr("path") }, circle: function(t) { var e = t.attrs; return ut(e.cx, e.cy, e.r) }, ellipse: function(t) { var e = t.attrs; return ut(e.cx, e.cy, e.rx, e.ry) }, rect: function(t) { var e = t.attrs; return ht(e.x, e.y, e.width, e.height, e.r) }, image: function(t) { var e = t.attrs; return ht(e.x, e.y, e.width, e.height) }, text: function(t) { var e = t._getBBox(); return ht(e.x, e.y, e.width, e.height) }, set: function(t) { var e = t._getBBox(); return ht(e.x, e.y, e.width, e.height) } },
                dt = I.mapPath = function(t, e) { if (!e) return t; var i, n, r, s, a, o, l; for (r = 0, a = (t = Pt(t)).length; r < a; r++)
                        for (s = 1, o = (l = t[r]).length; s < o; s += 2) i = e.x(l[s], l[s + 1]), n = e.y(l[s], l[s + 1]), l[s] = i, l[s + 1] = n; return t }; if (I._g = f, "VML" == (I.type = f.win.SVGAngle || f.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML")) { var pt, ft = f.doc.createElement("div"); if (ft.innerHTML = '<v:shape adj="1"/>', (pt = ft.firstChild).style.behavior = "url(#default#VML)", !pt || "object" != typeof pt.adj) return I.type = "";
                ft = null } I.svg = !(I.vml = "VML" == I.type), I._Paper = d, I.fn = e = d.prototype = I.prototype, I._id = 0, I.is = function(t, e) { return "finite" == (e = w.call(e)) ? !O[N](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || P.call(t).slice(8, -1).toLowerCase() == e }, I.angle = function(t, e, i, n, r, s) { if (null != r) return I.angle(t, e, r, s) - I.angle(i, n, r, s); var a = t - i,
                    o = e - n; return a || o ? (180 + 180 * q.atan2(-o, -a) / G + 360) % 360 : 0 }, I.rad = function(t) { return t % 360 * G / 180 }, I.deg = function(t) { return Math.round(180 * t / G % 360 * 1e3) / 1e3 }, I.snapTo = function(t, e, i) { if (i = I.is(i, "finite") ? i : 10, I.is(t, E)) { for (var n = t.length; n--;)
                        if (V(t[n] - e) <= i) return t[n] } else { var r = e % (t = +t); if (r < i) return e - r; if (t - i < r) return e - r + t } return e }, I.createUUID = (s = /[xy]/g, a = function(t) { var e = 16 * q.random() | 0; return ("x" == t ? e : 3 & e | 8).toString(16) }, function() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(s, a).toUpperCase() }), I.setWindow = function(t) { R("raphael.setWindow", I, f.win, t), f.win = t, f.doc = f.win.document, I._engine.initWin && I._engine.initWin(f.win) }; var gt = function(t) { if (I.vml) { var i, n = /^\s+|\s+$/g; try { var e = new ActiveXObject("htmlfile");
                            e.write("<body>"), e.close(), i = e.body } catch (t) { i = createPopup().document.body } var r = i.createTextRange();
                        gt = W(function(t) { try { i.style.color = H(t).replace(n, ""); var e = r.queryCommandValue("ForeColor"); return "#" + ("000000" + (e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16).toString(16)).slice(-6) } catch (t) { return "none" } }) } else { var s = f.doc.createElement("i");
                        s.title = "Raphaël Colour Picker", s.style.display = "none", f.doc.body.appendChild(s), gt = W(function(t) { return s.style.color = t, f.doc.defaultView.getComputedStyle(s, "").getPropertyValue("color") }) } return gt(t) },
                mt = function() { return "hsb(" + [this.h, this.s, this.b] + ")" },
                vt = function() { return "hsl(" + [this.h, this.s, this.l] + ")" },
                yt = function() { return this.hex },
                bt = function(t, e, i) { if (null == e && I.is(t, "object") && "r" in t && "g" in t && "b" in t && (i = t.b, e = t.g, t = t.r), null == e && I.is(t, C)) { var n = I.getRGB(t);
                        t = n.r, e = n.g, i = n.b } return (1 < t || 1 < e || 1 < i) && (t /= 255, e /= 255, i /= 255), [t, e, i] },
                xt = function(t, e, i, n) { var r = { r: t *= 255, g: e *= 255, b: i *= 255, hex: I.rgb(t, e, i), toString: yt }; return I.is(n, "finite") && (r.opacity = n), r };
            I.color = function(t) { var e; return I.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = I.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : I.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = I.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (I.is(t, "string") && (t = I.getRGB(t)), I.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = I.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = I.rgb2hsb(t), t.v = e.b) : (t = { hex: "none" }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1), t.toString = yt, t }, I.hsb2rgb = function(t, e, i, n) { var r, s, a, o, l; return this.is(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, n = t.o, t = t.h), o = (l = i * e) * (1 - V((t = (t *= 360) % 360 / 60) % 2 - 1)), r = s = a = i - l, xt(r += [l, o, 0, 0, o, l][t = ~~t], s += [o, l, l, o, 0, 0][t], a += [0, 0, o, l, l, o][t], n) }, I.hsl2rgb = function(t, e, i, n) { var r, s, a, o, l; return this.is(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (1 < t || 1 < e || 1 < i) && (t /= 360, e /= 100, i /= 100), o = (l = 2 * e * (i < .5 ? i : 1 - i)) * (1 - V((t = (t *= 360) % 360 / 60) % 2 - 1)), r = s = a = i - l / 2, xt(r += [l, o, 0, 0, o, l][t = ~~t], s += [o, l, l, o, 0, 0][t], a += [0, 0, o, l, l, o][t], n) }, I.rgb2hsb = function(t, e, i) { var n, r; return t = (i = bt(t, e, i))[0], e = i[1], i = i[2], { h: ((0 == (r = (n = T(t, e, i)) - M(t, e, i)) ? null : n == t ? (e - i) / r : n == e ? (i - t) / r + 2 : (t - e) / r + 4) + 360) % 6 * 60 / 360, s: 0 == r ? 0 : r / n, b: n, toString: mt } }, I.rgb2hsl = function(t, e, i) { var n, r, s, a; return t = (i = bt(t, e, i))[0], e = i[1], i = i[2], n = ((r = T(t, e, i)) + (s = M(t, e, i))) / 2, { h: ((0 == (a = r - s) ? null : r == t ? (e - i) / a : r == e ? (i - t) / a + 2 : (t - e) / a + 4) + 360) % 6 * 60 / 360, s: 0 == a ? 0 : n < .5 ? a / (2 * n) : a / (2 - 2 * n), l: n, toString: vt } }, I._path2string = function() { return this.join(",").replace(it, "$1") }, I._preload = function(t, e) { var i = f.doc.createElement("img");
                i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function() { e.call(this), this.onload = null, f.doc.body.removeChild(this) }, i.onerror = function() { f.doc.body.removeChild(this) }, f.doc.body.appendChild(i), i.src = t }, I.getRGB = W(function(t) { if (!t || (t = H(t)).indexOf("-") + 1) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: l }; if ("none" == t) return { r: -1, g: -1, b: -1, hex: "none", toString: l };!et[N](t.toLowerCase().substring(0, 2)) && "#" != t.charAt() && (t = gt(t)); var e, i, n, r, s, a, o = t.match(L); return o ? (o[2] && (n = Z(o[2].substring(5), 16), i = Z(o[2].substring(3, 5), 16), e = Z(o[2].substring(1, 3), 16)), o[3] && (n = Z((s = o[3].charAt(3)) + s, 16), i = Z((s = o[3].charAt(2)) + s, 16), e = Z((s = o[3].charAt(1)) + s, 16)), o[4] && (a = o[4][U](tt), e = X(a[0]), "%" == a[0].slice(-1) && (e *= 2.55), i = X(a[1]), "%" == a[1].slice(-1) && (i *= 2.55), n = X(a[2]), "%" == a[2].slice(-1) && (n *= 2.55), "rgba" == o[1].toLowerCase().slice(0, 4) && (r = X(a[3])), a[3] && "%" == a[3].slice(-1) && (r /= 100)), o[5] ? (a = o[5][U](tt), e = X(a[0]), "%" == a[0].slice(-1) && (e *= 2.55), i = X(a[1]), "%" == a[1].slice(-1) && (i *= 2.55), n = X(a[2]), "%" == a[2].slice(-1) && (n *= 2.55), ("deg" == a[0].slice(-3) || "°" == a[0].slice(-1)) && (e /= 360), "hsba" == o[1].toLowerCase().slice(0, 4) && (r = X(a[3])), a[3] && "%" == a[3].slice(-1) && (r /= 100), I.hsb2rgb(e, i, n, r)) : o[6] ? (a = o[6][U](tt), e = X(a[0]), "%" == a[0].slice(-1) && (e *= 2.55), i = X(a[1]), "%" == a[1].slice(-1) && (i *= 2.55), n = X(a[2]), "%" == a[2].slice(-1) && (n *= 2.55), ("deg" == a[0].slice(-3) || "°" == a[0].slice(-1)) && (e /= 360), "hsla" == o[1].toLowerCase().slice(0, 4) && (r = X(a[3])), a[3] && "%" == a[3].slice(-1) && (r /= 100), I.hsl2rgb(e, i, n, r)) : ((o = { r: e, g: i, b: n, toString: l }).hex = "#" + (16777216 | n | i << 8 | e << 16).toString(16).slice(1), I.is(r, "finite") && (o.opacity = r), o)) : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: l } }, I), I.hsb = W(function(t, e, i) { return I.hsb2rgb(t, e, i).hex }), I.hsl = W(function(t, e, i) { return I.hsl2rgb(t, e, i).hex }), I.rgb = W(function(t, e, i) {
                function n(t) { return t + .5 | 0 } return "#" + (16777216 | n(i) | n(e) << 8 | n(t) << 16).toString(16).slice(1) }), (I.getColor = function(t) { var e = this.getColor.start = this.getColor.start || { h: 0, s: 1, b: t || .75 },
                    i = this.hsb2rgb(e.h, e.s, e.b); return e.h += .075, 1 < e.h && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: e.b })), i.hex }).reset = function() { delete this.start }, I.parsePathString = function(t) { if (!t) return null; var e = wt(t); if (e.arr) return St(e.arr); var s = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 },
                    a = []; return I.is(t, E) && I.is(t[0], E) && (a = St(t)), a.length || H(t).replace(nt, function(t, e, i) { var n = [],
                        r = e.toLowerCase(); if (i.replace(st, function(t, e) { e && n.push(+e) }), "m" == r && 2 < n.length && (a.push([e][Y](n.splice(0, 2))), r = "l", e = "m" == e ? "l" : "L"), "r" == r) a.push([e][Y](n));
                    else
                        for (; n.length >= s[r] && (a.push([e][Y](n.splice(0, s[r]))), s[r]);); }), a.toString = I._path2string, e.arr = St(a), a }, I.parseTransformString = W(function(t) { if (!t) return null; var r = []; return I.is(t, E) && I.is(t[0], E) && (r = St(t)), r.length || H(t).replace(rt, function(t, e, i) { var n = [];
                    w.call(e), i.replace(st, function(t, e) { e && n.push(+e) }), r.push([e][Y](n)) }), r.toString = I._path2string, r }); var wt = function(e) { var i = wt.ps = wt.ps || {}; return i[e] ? i[e].sleep = 100 : i[e] = { sleep: 100 }, setTimeout(function() { for (var t in i) i[N](t) && t != e && (i[t].sleep--, !i[t].sleep && delete i[t]) }), i[e] };
            I.findDotsAtSegment = function(t, e, i, n, r, s, a, o, l) { var h = 1 - l,
                    u = A(h, 3),
                    c = A(h, 2),
                    d = l * l,
                    p = d * l,
                    f = u * t + 3 * c * l * i + 3 * h * l * l * r + p * a,
                    g = u * e + 3 * c * l * n + 3 * h * l * l * s + p * o,
                    m = t + 2 * l * (i - t) + d * (r - 2 * i + t),
                    v = e + 2 * l * (n - e) + d * (s - 2 * n + e),
                    y = i + 2 * l * (r - i) + d * (a - 2 * r + i),
                    b = n + 2 * l * (s - n) + d * (o - 2 * s + n),
                    x = h * t + l * i,
                    w = h * e + l * n,
                    _ = h * r + l * a,
                    S = h * s + l * o,
                    C = 90 - 180 * q.atan2(m - y, v - b) / G; return (y < m || v < b) && (C += 180), { x: f, y: g, m: { x: m, y: v }, n: { x: y, y: b }, start: { x: x, y: w }, end: { x: _, y: S }, alpha: C } }, I.bezierBBox = function(t, e, i, n, r, s, a, o) { I.is(t, "array") || (t = [t, e, i, n, r, s, a, o]); var l = Et.apply(null, t); return { x: l.min.x, y: l.min.y, x2: l.max.x, y2: l.max.y, width: l.max.x - l.min.x, height: l.max.y - l.min.y } }, I.isPointInsideBBox = function(t, e, i) { return e >= t.x && e <= t.x2 && i >= t.y && i <= t.y2 }, I.isBBoxIntersect = function(t, e) { var i = I.isPointInsideBBox; return i(e, t.x, t.y) || i(e, t.x2, t.y) || i(e, t.x, t.y2) || i(e, t.x2, t.y2) || i(t, e.x, e.y) || i(t, e.x2, e.y) || i(t, e.x, e.y2) || i(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y) }, I.pathIntersection = function(t, e) { return r(t, e) }, I.pathIntersectionNumber = function(t, e) { return r(t, e, 1) }, I.isPointInsidePath = function(t, e, i) { var n = I.pathBBox(t); return I.isPointInsideBBox(n, e, i) && r(t, [
                    ["M", e, i],
                    ["H", n.x2 + 10]
                ], 1) % 2 == 1 }, I._removedFactory = function(t) { return function() { R("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t) } }; var _t = I.pathBBox = function(t) { var e = wt(t); if (e.bbox) return v(e.bbox); if (!t) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 }; for (var i, n = 0, r = 0, s = [], a = [], o = 0, l = (t = Pt(t)).length; o < l; o++)
                        if ("M" == (i = t[o])[0]) n = i[1], r = i[2], s.push(n), a.push(r);
                        else { var h = Et(n, r, i[1], i[2], i[3], i[4], i[5], i[6]);
                            s = s[Y](h.min.x, h.max.x), a = a[Y](h.min.y, h.max.y), n = i[5], r = i[6] } var u = M[x](0, s),
                        c = M[x](0, a),
                        d = T[x](0, s),
                        p = T[x](0, a),
                        f = d - u,
                        g = p - c,
                        m = { x: u, y: c, x2: d, y2: p, width: f, height: g, cx: u + f / 2, cy: c + g / 2 }; return e.bbox = v(m), m },
                St = function(t) { var e = v(t); return e.toString = I._path2string, e },
                Ct = I._pathToRelative = function(t) { var e = wt(t); if (e.rel) return St(e.rel);
                    I.is(t, E) && I.is(t && t[0], E) || (t = I.parsePathString(t)); var i = [],
                        n = 0,
                        r = 0,
                        s = 0,
                        a = 0,
                        o = 0; "M" == t[0][0] && (s = n = t[0][1], a = r = t[0][2], o++, i.push(["M", n, r])); for (var l = o, h = t.length; l < h; l++) { var u = i[l] = [],
                            c = t[l]; if (c[0] != w.call(c[0])) switch (u[0] = w.call(c[0]), u[0]) {
                            case "a":
                                u[1] = c[1], u[2] = c[2], u[3] = c[3], u[4] = c[4], u[5] = c[5], u[6] = +(c[6] - n).toFixed(3), u[7] = +(c[7] - r).toFixed(3); break;
                            case "v":
                                u[1] = +(c[1] - r).toFixed(3); break;
                            case "m":
                                s = c[1], a = c[2];
                            default:
                                for (var d = 1, p = c.length; d < p; d++) u[d] = +(c[d] - (d % 2 ? n : r)).toFixed(3) } else { u = i[l] = [], "m" == c[0] && (s = c[1] + n, a = c[2] + r); for (var f = 0, g = c.length; f < g; f++) i[l][f] = c[f] }
                        var m = i[l].length; switch (i[l][0]) {
                            case "z":
                                n = s, r = a; break;
                            case "h":
                                n += +i[l][m - 1]; break;
                            case "v":
                                r += +i[l][m - 1]; break;
                            default:
                                n += +i[l][m - 2], r += +i[l][m - 1] } } return i.toString = I._path2string, e.rel = St(i), i },
                kt = I._pathToAbsolute = function(t) { var e = wt(t); if (e.abs) return St(e.abs); if (I.is(t, E) && I.is(t && t[0], E) || (t = I.parsePathString(t)), !t || !t.length) return [
                        ["M", 0, 0]
                    ]; var i = [],
                        n = 0,
                        r = 0,
                        s = 0,
                        a = 0,
                        o = 0; "M" == t[0][0] && (s = n = +t[0][1], a = r = +t[0][2], o++, i[0] = ["M", n, r]); for (var l, h, u = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), c = o, d = t.length; c < d; c++) { if (i.push(l = []), (h = t[c])[0] != Q.call(h[0])) switch (l[0] = Q.call(h[0]), l[0]) {
                                case "A":
                                    l[1] = h[1], l[2] = h[2], l[3] = h[3], l[4] = h[4], l[5] = h[5], l[6] = +(h[6] + n), l[7] = +(h[7] + r); break;
                                case "V":
                                    l[1] = +h[1] + r; break;
                                case "H":
                                    l[1] = +h[1] + n; break;
                                case "R":
                                    for (var p = [n, r][Y](h.slice(1)), f = 2, g = p.length; f < g; f++) p[f] = +p[f] + n, p[++f] = +p[f] + r;
                                    i.pop(), i = i[Y](y(p, u)); break;
                                case "M":
                                    s = +h[1] + n, a = +h[2] + r;
                                default:
                                    for (f = 1, g = h.length; f < g; f++) l[f] = +h[f] + (f % 2 ? n : r) } else if ("R" == h[0]) p = [n, r][Y](h.slice(1)), i.pop(), i = i[Y](y(p, u)), l = ["R"][Y](h.slice(-2));
                            else
                                for (var m = 0, v = h.length; m < v; m++) l[m] = h[m]; switch (l[0]) {
                            case "Z":
                                n = s, r = a; break;
                            case "H":
                                n = l[1]; break;
                            case "V":
                                r = l[1]; break;
                            case "M":
                                s = l[l.length - 2], a = l[l.length - 1];
                            default:
                                n = l[l.length - 2], r = l[l.length - 1] } } return i.toString = I._path2string, e.abs = St(i), i },
                Dt = function(t, e, i, n) { return [t, e, i, n, i, n] },
                Tt = function(t, e, i, n, r, s) { return [1 / 3 * t + 2 / 3 * i, 1 / 3 * e + 2 / 3 * n, 1 / 3 * r + 2 / 3 * i, 1 / 3 * s + 2 / 3 * n, r, s] },
                Mt = function(t, e, i, n, r, s, a, o, l, h) { var u, c = 120 * G / 180,
                        d = G / 180 * (+r || 0),
                        p = [],
                        f = W(function(t, e, i) { return { x: t * q.cos(i) - e * q.sin(i), y: t * q.sin(i) + e * q.cos(i) } }); if (h) S = h[0], C = h[1], w = h[2], _ = h[3];
                    else { t = (u = f(t, e, -d)).x, e = u.y, o = (u = f(o, l, -d)).x, l = u.y, q.cos(G / 180 * r), q.sin(G / 180 * r); var g = (t - o) / 2,
                            m = (e - l) / 2,
                            v = g * g / (i * i) + m * m / (n * n);
                        1 < v && (i *= v = q.sqrt(v), n *= v); var y = i * i,
                            b = n * n,
                            x = (s == a ? -1 : 1) * q.sqrt(V((y * b - y * m * m - b * g * g) / (y * m * m + b * g * g))),
                            w = x * i * m / n + (t + o) / 2,
                            _ = x * -n * g / i + (e + l) / 2,
                            S = q.asin(((e - _) / n).toFixed(9)),
                            C = q.asin(((l - _) / n).toFixed(9));
                        (S = t < w ? G - S : S) < 0 && (S = 2 * G + S), (C = o < w ? G - C : C) < 0 && (C = 2 * G + C), a && C < S && (S -= 2 * G), !a && S < C && (C -= 2 * G) } var k = C - S; if (V(k) > c) { var D = C,
                            T = o,
                            M = l;
                        C = S + c * (a && S < C ? 1 : -1), o = w + i * q.cos(C), l = _ + n * q.sin(C), p = Mt(o, l, i, n, r, 0, a, T, M, [C, D, w, _]) } k = C - S; var A = q.cos(S),
                        E = q.sin(S),
                        P = q.cos(C),
                        L = q.sin(C),
                        O = q.tan(k / 4),
                        R = 4 / 3 * i * O,
                        I = 4 / 3 * n * O,
                        F = [t, e],
                        j = [t + R * E, e - I * A],
                        N = [o + R * L, l - I * P],
                        H = [o, l]; if (j[0] = 2 * F[0] - j[0], j[1] = 2 * F[1] - j[1], h) return [j, N, H][Y](p); for (var z = [], B = 0, $ = (p = [j, N, H][Y](p).join()[U](",")).length; B < $; B++) z[B] = B % 2 ? f(p[B - 1], p[B], d).y : f(p[B], p[B + 1], d).x; return z },
                At = function(t, e, i, n, r, s, a, o, l) { var h = 1 - l; return { x: A(h, 3) * t + 3 * A(h, 2) * l * i + 3 * h * l * l * r + A(l, 3) * a, y: A(h, 3) * e + 3 * A(h, 2) * l * n + 3 * h * l * l * s + A(l, 3) * o } },
                Et = W(function(t, e, i, n, r, s, a, o) { var l, h = r - 2 * i + t - (a - 2 * r + i),
                        u = 2 * (i - t) - 2 * (r - i),
                        c = t - i,
                        d = (-u + q.sqrt(u * u - 4 * h * c)) / 2 / h,
                        p = (-u - q.sqrt(u * u - 4 * h * c)) / 2 / h,
                        f = [e, o],
                        g = [t, a]; return "1e12" < V(d) && (d = .5), "1e12" < V(p) && (p = .5), 0 < d && d < 1 && (l = At(t, e, i, n, r, s, a, o, d), g.push(l.x), f.push(l.y)), 0 < p && p < 1 && (l = At(t, e, i, n, r, s, a, o, p), g.push(l.x), f.push(l.y)), h = s - 2 * n + e - (o - 2 * s + n), c = e - n, d = (-(u = 2 * (n - e) - 2 * (s - n)) + q.sqrt(u * u - 4 * h * c)) / 2 / h, p = (-u - q.sqrt(u * u - 4 * h * c)) / 2 / h, "1e12" < V(d) && (d = .5), "1e12" < V(p) && (p = .5), 0 < d && d < 1 && (l = At(t, e, i, n, r, s, a, o, d), g.push(l.x), f.push(l.y)), 0 < p && p < 1 && (l = At(t, e, i, n, r, s, a, o, p), g.push(l.x), f.push(l.y)), { min: { x: M[x](0, g), y: M[x](0, f) }, max: { x: T[x](0, g), y: T[x](0, f) } } }),
                Pt = I._path2curve = W(function(t, e) { var i = !e && wt(t); if (!e && i.curve) return St(i.curve); for (var s = kt(t), a = e && kt(e), n = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, r = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, o = function(t, e, i) { var n, r; if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y]; switch (!(t[0] in { T: 1, Q: 1 }) && (e.qx = e.qy = null), t[0]) {
                                case "M":
                                    e.X = t[1], e.Y = t[2]; break;
                                case "A":
                                    t = ["C"][Y](Mt[x](0, [e.x, e.y][Y](t.slice(1)))); break;
                                case "S":
                                    r = "C" == i || "S" == i ? (n = 2 * e.x - e.bx, 2 * e.y - e.by) : (n = e.x, e.y), t = ["C", n, r][Y](t.slice(1)); break;
                                case "T":
                                    e.qy = "Q" == i || "T" == i ? (e.qx = 2 * e.x - e.qx, 2 * e.y - e.qy) : (e.qx = e.x, e.y), t = ["C"][Y](Tt(e.x, e.y, e.qx, e.qy, t[1], t[2])); break;
                                case "Q":
                                    e.qx = t[1], e.qy = t[2], t = ["C"][Y](Tt(e.x, e.y, t[1], t[2], t[3], t[4])); break;
                                case "L":
                                    t = ["C"][Y](Dt(e.x, e.y, t[1], t[2])); break;
                                case "H":
                                    t = ["C"][Y](Dt(e.x, e.y, t[1], e.y)); break;
                                case "V":
                                    t = ["C"][Y](Dt(e.x, e.y, e.x, t[1])); break;
                                case "Z":
                                    t = ["C"][Y](Dt(e.x, e.y, e.X, e.Y)) } return t }, l = function(t, e) { if (7 < t[e].length) { t[e].shift(); for (var i = t[e]; i.length;) u[e] = "A", a && (c[e] = "A"), t.splice(e++, 0, ["C"][Y](i.splice(0, 6)));
                                t.splice(e, 1), g = T(s.length, a && a.length || 0) } }, h = function(t, e, i, n, r) { t && e && "M" == t[r][0] && "M" != e[r][0] && (e.splice(r, 0, ["M", n.x, n.y]), i.bx = 0, i.by = 0, i.x = t[r][1], i.y = t[r][2], g = T(s.length, a && a.length || 0)) }, u = [], c = [], d = "", p = "", f = 0, g = T(s.length, a && a.length || 0); f < g; f++) { s[f] && (d = s[f][0]), "C" != d && (u[f] = d, f && (p = u[f - 1])), s[f] = o(s[f], n, p), "A" != u[f] && "C" == d && (u[f] = "C"), l(s, f), a && (a[f] && (d = a[f][0]), "C" != d && (c[f] = d, f && (p = c[f - 1])), a[f] = o(a[f], r, p), "A" != c[f] && "C" == d && (c[f] = "C"), l(a, f)), h(s, a, n, r, f), h(a, s, r, n, f); var m = s[f],
                            v = a && a[f],
                            y = m.length,
                            b = a && v.length;
                        n.x = m[y - 2], n.y = m[y - 1], n.bx = X(m[y - 4]) || n.x, n.by = X(m[y - 3]) || n.y, r.bx = a && (X(v[b - 4]) || r.x), r.by = a && (X(v[b - 3]) || r.y), r.x = a && v[b - 2], r.y = a && v[b - 1] } return a || (i.curve = St(s)), a ? [s, a] : s }, null, St),
                Lt = (I._parseDots = W(function(t) { for (var e = [], i = 0, n = t.length; i < n; i++) { var r = {},
                            s = t[i].match(/^([^:]*):?([\d\.]*)/); if (r.color = I.getRGB(s[1]), r.color.error) return null;
                        r.opacity = r.color.opacity, r.color = r.color.hex, s[2] && (r.offset = s[2] + "%"), e.push(r) } for (i = 1, n = e.length - 1; i < n; i++)
                        if (!e[i].offset) { for (var a = X(e[i - 1].offset || 0), o = 0, l = i + 1; l < n; l++)
                                if (e[l].offset) { o = e[l].offset; break } o || (o = 100, l = n); for (var h = ((o = X(o)) - a) / (l - i + 1); i < l; i++) a += h, e[i].offset = a + "%" } return e }), I._tear = function(t, e) { t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next) }),
                Ot = (I._tofront = function(t, e) { e.top !== t && (Lt(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t) }, I._toback = function(t, e) { e.bottom !== t && (Lt(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t) }, I._insertafter = function(t, e, i) { Lt(t, i), e == i.top && (i.top = t), e.next && (e.next.prev = t), t.next = e.next, (t.prev = e).next = t }, I._insertbefore = function(t, e, i) { Lt(t, i), e == i.bottom && (i.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, (e.prev = t).next = e }, I.toMatrix = function(t, e) { var i = _t(t),
                        n = { _: { transform: "" }, getBBox: function() { return i } }; return Rt(n, e), n.matrix }),
                Rt = (I.transformPath = function(t, e) { return dt(t, Ot(t, e)) }, I._extractTransform = function(t, e) { if (null == e) return t._.transform;
                    e = H(e).replace(/\.{3}|\u2026/g, t._.transform || ""); var i, n, r = I.parseTransformString(e),
                        s = 0,
                        a = 1,
                        o = 1,
                        l = t._,
                        h = new F; if (l.transform = r || [], r)
                        for (var u = 0, c = r.length; u < c; u++) { var d, p, f, g, m, v = r[u],
                                y = v.length,
                                b = H(v[0]).toLowerCase(),
                                x = v[0] != b,
                                w = x ? h.invert() : 0; "t" == b && 3 == y ? x ? (d = w.x(0, 0), p = w.y(0, 0), f = w.x(v[1], v[2]), g = w.y(v[1], v[2]), h.translate(f - d, g - p)) : h.translate(v[1], v[2]) : "r" == b ? 2 == y ? (m = m || t.getBBox(1), h.rotate(v[1], m.x + m.width / 2, m.y + m.height / 2), s += v[1]) : 4 == y && (x ? (f = w.x(v[2], v[3]), g = w.y(v[2], v[3]), h.rotate(v[1], f, g)) : h.rotate(v[1], v[2], v[3]), s += v[1]) : "s" == b ? 2 == y || 3 == y ? (m = m || t.getBBox(1), h.scale(v[1], v[y - 1], m.x + m.width / 2, m.y + m.height / 2), a *= v[1], o *= v[y - 1]) : 5 == y && (x ? (f = w.x(v[3], v[4]), g = w.y(v[3], v[4]), h.scale(v[1], v[2], f, g)) : h.scale(v[1], v[2], v[3], v[4]), a *= v[1], o *= v[2]) : "m" == b && 7 == y && h.add(v[1], v[2], v[3], v[4], v[5], v[6]), l.dirtyT = 1, t.matrix = h } t.matrix = h, l.sx = a, l.sy = o, l.deg = s, l.dx = i = h.e, l.dy = n = h.f, 1 == a && 1 == o && !s && l.bbox ? (l.bbox.x += +i, l.bbox.y += +n) : l.dirtyT = 1 }),
                It = function(t) { var e = t[0]; switch (e.toLowerCase()) {
                        case "t":
                            return [e, 0, 0];
                        case "m":
                            return [e, 1, 0, 0, 1, 0, 0];
                        case "r":
                            return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                        case "s":
                            return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1] } },
                Ft = I._equaliseTransform = function(t, e) { e = H(e).replace(/\.{3}|\u2026/g, t), t = I.parseTransformString(t) || [], e = I.parseTransformString(e) || []; for (var i, n, r, s, a = T(t.length, e.length), o = [], l = [], h = 0; h < a; h++) { if (r = t[h] || It(e[h]), s = e[h] || It(r), r[0] != s[0] || "r" == r[0].toLowerCase() && (r[2] != s[2] || r[3] != s[3]) || "s" == r[0].toLowerCase() && (r[3] != s[3] || r[4] != s[4])) return; for (o[h] = [], l[h] = [], i = 0, n = T(r.length, s.length); i < n; i++) i in r && (o[h][i] = r[i]), i in s && (l[h][i] = s[i]) } return { from: o, to: l } };
            I._getContainer = function(t, e, i, n) { var r; if (null != (r = null != n || I.is(t, "object") ? t : f.doc.getElementById(t))) return r.tagName ? null == e ? { container: r, width: r.style.pixelWidth || r.offsetWidth, height: r.style.pixelHeight || r.offsetHeight } : { container: r, width: e, height: i } : { container: 1, x: t, y: e, width: i, height: n } }, I.pathToRelative = Ct, I._engine = {}, I.path2curve = Pt, I.matrix = function(t, e, i, n, r, s) { return new F(t, e, i, n, r, s) },
                function(t) {
                    function r(t) { return t[0] * t[0] + t[1] * t[1] }

                    function s(t) { var e = q.sqrt(r(t));
                        t[0] && (t[0] /= e), t[1] && (t[1] /= e) } t.add = function(t, e, i, n, r, s) { var a, o, l, h, u = [
                                [],
                                [],
                                []
                            ],
                            c = [
                                [this.a, this.c, this.e],
                                [this.b, this.d, this.f],
                                [0, 0, 1]
                            ],
                            d = [
                                [t, i, r],
                                [e, n, s],
                                [0, 0, 1]
                            ]; for (t && t instanceof F && (d = [
                                [t.a, t.c, t.e],
                                [t.b, t.d, t.f],
                                [0, 0, 1]
                            ]), a = 0; a < 3; a++)
                            for (o = 0; o < 3; o++) { for (l = h = 0; l < 3; l++) h += c[a][l] * d[l][o];
                                u[a][o] = h } this.a = u[0][0], this.b = u[1][0], this.c = u[0][1], this.d = u[1][1], this.e = u[0][2], this.f = u[1][2] }, t.invert = function() { var t = this,
                            e = t.a * t.d - t.b * t.c; return new F(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e) }, t.clone = function() { return new F(this.a, this.b, this.c, this.d, this.e, this.f) }, t.translate = function(t, e) { this.add(1, 0, 0, 1, t, e) }, t.scale = function(t, e, i, n) { null == e && (e = t), (i || n) && this.add(1, 0, 0, 1, i, n), this.add(t, 0, 0, e, 0, 0), (i || n) && this.add(1, 0, 0, 1, -i, -n) }, t.rotate = function(t, e, i) { t = I.rad(t), e = e || 0, i = i || 0; var n = +q.cos(t).toFixed(9),
                            r = +q.sin(t).toFixed(9);
                        this.add(n, r, -r, n, e, i), this.add(1, 0, 0, 1, -e, -i) }, t.x = function(t, e) { return t * this.a + e * this.c + this.e }, t.y = function(t, e) { return t * this.b + e * this.d + this.f }, t.get = function(t) { return +this[H.fromCharCode(97 + t)].toFixed(4) }, t.toString = function() { return I.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join() }, t.toFilter = function() { return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')" }, t.offset = function() { return [this.e.toFixed(4), this.f.toFixed(4)] }, t.split = function() { var t = {};
                        t.dx = this.e, t.dy = this.f; var e = [
                            [this.a, this.c],
                            [this.b, this.d]
                        ];
                        t.scalex = q.sqrt(r(e[0])), s(e[0]), t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * t.shear, e[1][1] - e[0][1] * t.shear], t.scaley = q.sqrt(r(e[1])), s(e[1]), t.shear /= t.scaley; var i = -e[0][1],
                            n = e[1][1]; return n < 0 ? (t.rotate = I.deg(q.acos(n)), i < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = I.deg(q.asin(i)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t }, t.toTransformString = function(t) { var e = t || this[U](); return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : "") + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : "") + (e.rotate ? "r" + [e.rotate, 0, 0] : "")) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] } }(F.prototype); for (var jt = function() { this.returnValue = !1 }, Nt = function() { return this.originalEvent.preventDefault() }, Ht = function() { this.cancelBubble = !0 }, zt = function() { return this.originalEvent.stopPropagation() }, Bt = function(t) { var e = f.doc.documentElement.scrollTop || f.doc.body.scrollTop,
                        i = f.doc.documentElement.scrollLeft || f.doc.body.scrollLeft; return { x: t.clientX + i, y: t.clientY + e } }, $t = f.doc.addEventListener ? function(s, t, a, o) { var e = function(t) { var e = Bt(t); return a.call(o, t, e.x, e.y) }; if (s.addEventListener(t, e, !1), g && m[t]) { var i = function(t) { for (var e = Bt(t), i = t, n = 0, r = t.targetTouches && t.targetTouches.length; n < r; n++)
                                if (t.targetTouches[n].target == s) {
                                    (t = t.targetTouches[n]).originalEvent = i, t.preventDefault = Nt, t.stopPropagation = zt; break } return a.call(o, t, e.x, e.y) };
                        s.addEventListener(m[t], i, !1) } return function() { return s.removeEventListener(t, e, !1), g && m[t] && s.removeEventListener(m[t], i, !1), !0 } } : f.doc.attachEvent ? function(t, e, s, a) { var i = function(t) { t = t || f.win.event; var e = f.doc.documentElement.scrollTop || f.doc.body.scrollTop,
                            i = f.doc.documentElement.scrollLeft || f.doc.body.scrollLeft,
                            n = t.clientX + i,
                            r = t.clientY + e; return t.preventDefault = t.preventDefault || jt, t.stopPropagation = t.stopPropagation || Ht, s.call(a, t, n, r) }; return t.attachEvent("on" + e, i),
                        function() { return t.detachEvent("on" + e, i), !0 } } : void 0, Wt = [], Yt = function(t) { for (var e, i = t.clientX, n = t.clientY, r = f.doc.documentElement.scrollTop || f.doc.body.scrollTop, s = f.doc.documentElement.scrollLeft || f.doc.body.scrollLeft, a = Wt.length; a--;) { if (e = Wt[a], g && t.touches) { for (var o, l = t.touches.length; l--;)
                                if ((o = t.touches[l]).identifier == e.el._drag.id) { i = o.clientX, n = o.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault(); break } } else t.preventDefault(); var h, u = e.el.node,
                            c = u.nextSibling,
                            d = u.parentNode,
                            p = u.style.display;
                        f.win.opera && d.removeChild(u), u.style.display = "none", h = e.el.paper.getElementByPoint(i, n), u.style.display = p, f.win.opera && (c ? d.insertBefore(u, c) : d.appendChild(u)), h && R("raphael.drag.over." + e.el.id, e.el, h), i += s, n += r, R("raphael.drag.move." + e.el.id, e.move_scope || e.el, i - e.el._drag.x, n - e.el._drag.y, i, n, t) } }, Ut = function(t) { I.unmousemove(Yt).unmouseup(Ut); for (var e, i = Wt.length; i--;)(e = Wt[i]).el._drag = {}, R("raphael.drag.end." + e.el.id, e.end_scope || e.start_scope || e.move_scope || e.el, t);
                    Wt = [] }, qt = I.el = {}, Vt = p.length; Vt--;) ! function(n) { I[n] = qt[n] = function(t, e) { return I.is(t, "function") && (this.events = this.events || [], this.events.push({ name: n, f: t, unbind: $t(this.shape || this.node || f.doc, n, t, e || this) })), this }, I["un" + n] = qt["un" + n] = function(t) { for (var e = this.events || [], i = e.length; i--;) e[i].name != n || !I.is(t, "undefined") && e[i].f != t || (e[i].unbind(), e.splice(i, 1), !e.length && delete this.events); return this } }(p[Vt]);
            qt.data = function(t, e) { var i = at[this.id] = at[this.id] || {}; if (0 == arguments.length) return i; if (1 != arguments.length) return i[t] = e, R("raphael.data.set." + this.id, this, e, t), this; if (I.is(t, "object")) { for (var n in t) t[N](n) && this.data(n, t[n]); return this } return R("raphael.data.get." + this.id, this, i[t], t), i[t] }, qt.removeData = function(t) { return null == t ? at[this.id] = {} : at[this.id] && delete at[this.id][t], this }, qt.getData = function() { return v(at[this.id] || {}) }, qt.hover = function(t, e, i, n) { return this.mouseover(t, i).mouseout(e, n || i) }, qt.unhover = function(t, e) { return this.unmouseover(t).unmouseout(e) }; var Gt = [];
            qt.drag = function(o, l, h, u, c, d) {
                function t(t) {
                    (t.originalEvent || t).preventDefault(); var e = t.clientX,
                        i = t.clientY,
                        n = f.doc.documentElement.scrollTop || f.doc.body.scrollTop,
                        r = f.doc.documentElement.scrollLeft || f.doc.body.scrollLeft; if (this._drag.id = t.identifier, g && t.touches)
                        for (var s, a = t.touches.length; a--;)
                            if (s = t.touches[a], this._drag.id = s.identifier, s.identifier == this._drag.id) { e = s.clientX, i = s.clientY; break } this._drag.x = e + r, this._drag.y = i + n, !Wt.length && I.mousemove(Yt).mouseup(Ut), Wt.push({ el: this, move_scope: u, start_scope: c, end_scope: d }), l && R.on("raphael.drag.start." + this.id, l), o && R.on("raphael.drag.move." + this.id, o), h && R.on("raphael.drag.end." + this.id, h), R("raphael.drag.start." + this.id, c || u || this, t.clientX + r, t.clientY + n, t) } return this._drag = {}, Gt.push({ el: this, start: t }), this.mousedown(t), this }, qt.onDragOver = function(t) { t ? R.on("raphael.drag.over." + this.id, t) : R.unbind("raphael.drag.over." + this.id) }, qt.undrag = function() { for (var t = Gt.length; t--;) Gt[t].el == this && (this.unmousedown(Gt[t].start), Gt.splice(t, 1), R.unbind("raphael.drag.*." + this.id));!Gt.length && I.unmousemove(Yt).unmouseup(Ut), Wt = [] }, e.circle = function(t, e, i) { var n = I._engine.circle(this, t || 0, e || 0, i || 0); return this.__set__ && this.__set__.push(n), n }, e.rect = function(t, e, i, n, r) { var s = I._engine.rect(this, t || 0, e || 0, i || 0, n || 0, r || 0); return this.__set__ && this.__set__.push(s), s }, e.ellipse = function(t, e, i, n) { var r = I._engine.ellipse(this, t || 0, e || 0, i || 0, n || 0); return this.__set__ && this.__set__.push(r), r }, e.path = function(t) { t && !I.is(t, C) && !I.is(t[0], E) && (t += ""); var e = I._engine.path(I.format[x](I, arguments), this); return this.__set__ && this.__set__.push(e), e }, e.image = function(t, e, i, n, r) { var s = I._engine.image(this, t || "about:blank", e || 0, i || 0, n || 0, r || 0); return this.__set__ && this.__set__.push(s), s }, e.text = function(t, e, i) { var n = I._engine.text(this, t || 0, e || 0, H(i)); return this.__set__ && this.__set__.push(n), n }, e.set = function(t) {!I.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length)); var e = new ue(t); return this.__set__ && this.__set__.push(e), e.paper = this, e.type = "set", e }, e.setStart = function(t) { this.__set__ = t || this.set() }, e.setFinish = function(t) { var e = this.__set__; return delete this.__set__, e }, e.getSize = function() { var t = this.canvas.parentNode; return { width: t.offsetWidth, height: t.offsetHeight } }, e.setSize = function(t, e) { return I._engine.setSize.call(this, t, e) }, e.setViewBox = function(t, e, i, n, r) { return I._engine.setViewBox.call(this, t, e, i, n, r) }, e.top = e.bottom = null, e.raphael = I, e.getElementByPoint = function(t, e) { var i, n, r, s, a, o, l, h = this.canvas,
                    u = f.doc.elementFromPoint(t, e); if (f.win.opera && "svg" == u.tagName) { var c = (n = (i = h).getBoundingClientRect(), s = (r = i.ownerDocument).body, o = (a = r.documentElement).clientTop || s.clientTop || 0, l = a.clientLeft || s.clientLeft || 0, { y: n.top + (f.win.pageYOffset || a.scrollTop || s.scrollTop) - o, x: n.left + (f.win.pageXOffset || a.scrollLeft || s.scrollLeft) - l }),
                        d = h.createSVGRect();
                    d.x = t - c.x, d.y = e - c.y, d.width = d.height = 1; var p = h.getIntersectionList(d, null);
                    p.length && (u = p[p.length - 1]) } if (!u) return null; for (; u.parentNode && u != h.parentNode && !u.raphael;) u = u.parentNode; return u == this.canvas.parentNode && (u = h), u && u.raphael ? this.getById(u.raphaelid) : null }, e.getElementsByBBox = function(e) { var i = this.set(); return this.forEach(function(t) { I.isBBoxIntersect(t.getBBox(), e) && i.push(t) }), i }, e.getById = function(t) { for (var e = this.bottom; e;) { if (e.id == t) return e;
                    e = e.next } return null }, e.forEach = function(t, e) { for (var i = this.bottom; i;) { if (!1 === t.call(e, i)) return this;
                    i = i.next } return this }, e.getElementsByPoint = function(e, i) { var n = this.set(); return this.forEach(function(t) { t.isPointInside(e, i) && n.push(t) }), n }, qt.isPointInside = function(t, e) { var i = this.realPath = ct[this.type](this); return this.attr("transform") && this.attr("transform").length && (i = I.transformPath(i, this.attr("transform"))), I.isPointInsidePath(i, t, e) }, qt.getBBox = function(t) { if (this.removed) return {}; var e = this._; return t ? (!e.dirty && e.bboxwt || (this.realPath = ct[this.type](this), e.bboxwt = _t(this.realPath), e.bboxwt.toString = i, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = ct[this.type](this)), e.bbox = _t(dt(this.realPath, this.matrix)), e.bbox.toString = i, e.dirty = e.dirtyT = 0), e.bbox) }, qt.clone = function() { if (this.removed) return null; var t = this.paper[this.type]().attr(this.attr()); return this.__set__ && this.__set__.push(t), t }, qt.glow = function(t) { if ("text" == this.type) return null; var e = { width: ((t = t || {}).width || 10) + (+this.attr("stroke-width") || 1), fill: t.fill || !1, opacity: null == t.opacity ? .5 : t.opacity, offsetx: t.offsetx || 0, offsety: t.offsety || 0, color: t.color || "#000" },
                    i = e.width / 2,
                    n = this.paper,
                    r = n.set(),
                    s = this.realPath || ct[this.type](this);
                s = this.matrix ? dt(s, this.matrix) : s; for (var a = 1; a < i + 1; a++) r.push(n.path(s).attr({ stroke: e.color, fill: e.fill ? e.color : "none", "stroke-linejoin": "round", "stroke-linecap": "round", "stroke-width": +(e.width / i * a).toFixed(3), opacity: +(e.opacity / i).toFixed(3) })); return r.insertBefore(this).translate(e.offsetx, e.offsety) }; var Xt = function(t, e, i, n, r, s, a, o, l) { return null == l ? k(t, e, i, n, r, s, a, o) : I.findDotsAtSegment(t, e, i, n, r, s, a, o, function(t, e, i, n, r, s, a, o, l) { if (!(l < 0 || k(t, e, i, n, r, s, a, o) < l)) { var h, u = .5,
                                c = 1 - u; for (h = k(t, e, i, n, r, s, a, o, c); .01 < V(h - l);) h = k(t, e, i, n, r, s, a, o, c += (h < l ? 1 : -1) * (u /= 2)); return c } }(t, e, i, n, r, s, a, o, l)) },
                Zt = function(p, f) { return function(t, e, i) { for (var n, r, s, a, o, l = "", h = {}, u = 0, c = 0, d = (t = Pt(t)).length; c < d; c++) { if ("M" == (s = t[c])[0]) n = +s[1], r = +s[2];
                            else { if (e < u + (a = Xt(n, r, s[1], s[2], s[3], s[4], s[5], s[6]))) { if (f && !h.start) { if (l += ["C" + (o = Xt(n, r, s[1], s[2], s[3], s[4], s[5], s[6], e - u)).start.x, o.start.y, o.m.x, o.m.y, o.x, o.y], i) return l;
                                        h.start = l, l = ["M" + o.x, o.y + "C" + o.n.x, o.n.y, o.end.x, o.end.y, s[5], s[6]].join(), u += a, n = +s[5], r = +s[6]; continue } if (!p && !f) return { x: (o = Xt(n, r, s[1], s[2], s[3], s[4], s[5], s[6], e - u)).x, y: o.y, alpha: o.alpha } } u += a, n = +s[5], r = +s[6] } l += s.shift() + s } return h.end = l, (o = p ? u : f ? h : I.findDotsAtSegment(n, r, s[0], s[1], s[2], s[3], s[4], s[5], 1)).alpha && (o = { x: o.x, y: o.y, alpha: o.alpha }), o } },
                Qt = Zt(1),
                Jt = Zt(),
                Kt = Zt(0, 1);
            I.getTotalLength = Qt, I.getPointAtLength = Jt, I.getSubpath = function(t, e, i) { if (this.getTotalLength(t) - i < 1e-6) return Kt(t, e).end; var n = Kt(t, i, 1); return e ? Kt(n, e).end : n }, qt.getTotalLength = function() { var t = this.getPath(); if (t) return this.node.getTotalLength ? this.node.getTotalLength() : Qt(t) }, qt.getPointAtLength = function(t) { var e = this.getPath(); if (e) return Jt(e, t) }, qt.getPath = function() { var t, e = I._getPath[this.type]; if ("text" != this.type && "set" != this.type) return e && (t = e(this)), t }, qt.getSubpath = function(t, e) { var i = this.getPath(); if (i) return I.getSubpath(i, t, e) }; var te = I.easing_formulas = { linear: function(t) { return t }, "<": function(t) { return A(t, 1.7) }, ">": function(t) { return A(t, .48) }, "<>": function(t) { var e = .48 - t / 1.04,
                        i = q.sqrt(.1734 + e * e),
                        n = i - e,
                        r = -i - e,
                        s = A(V(n), 1 / 3) * (n < 0 ? -1 : 1) + A(V(r), 1 / 3) * (r < 0 ? -1 : 1) + .5; return 3 * (1 - s) * s * s + s * s * s }, backIn: function(t) { return t * t * (2.70158 * t - 1.70158) }, backOut: function(t) { return (t -= 1) * t * (2.70158 * t + 1.70158) + 1 }, elastic: function(t) { return t == !!t ? t : A(2, -10 * t) * q.sin(2 * G * (t - .075) / .3) + 1 }, bounce: function(t) { var e = 7.5625,
                        i = 2.75; return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375 } };
            te.easeIn = te["ease-in"] = te["<"], te.easeOut = te["ease-out"] = te[">"], te.easeInOut = te["ease-in-out"] = te["<>"], te["back-in"] = te.backIn, te["back-out"] = te.backOut; var ee = [],
                ie = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) { setTimeout(t, 16) },
                ne = function() { for (var t = +new Date, e = 0; e < ee.length; e++) { var i = ee[e]; if (!i.el.removed && !i.paused) { var n, r, s = t - i.start,
                                a = i.ms,
                                o = i.easing,
                                l = i.from,
                                h = i.diff,
                                u = i.to,
                                c = (i.t, i.el),
                                d = {},
                                p = {}; if (i.initstatus ? (s = (i.initstatus * i.anim.top - i.prev) / (i.percent - i.prev) * a, i.status = i.initstatus, delete i.initstatus, i.stop && ee.splice(e--, 1)) : i.status = (i.prev + (i.percent - i.prev) * (s / a)) / i.anim.top, !(s < 0))
                                if (s < a) { var f = o(s / a); for (var g in l)
                                        if (l[N](g)) { switch (K[g]) {
                                                case z:
                                                    n = +l[g] + f * a * h[g]; break;
                                                case "colour":
                                                    n = "rgb(" + [re($(l[g].r + f * a * h[g].r)), re($(l[g].g + f * a * h[g].g)), re($(l[g].b + f * a * h[g].b))].join(",") + ")"; break;
                                                case "path":
                                                    n = []; for (var m = 0, v = l[g].length; m < v; m++) { n[m] = [l[g][m][0]]; for (var y = 1, b = l[g][m].length; y < b; y++) n[m][y] = +l[g][m][y] + f * a * h[g][m][y];
                                                        n[m] = n[m].join(" ") } n = n.join(" "); break;
                                                case "transform":
                                                    if (h[g].real)
                                                        for (n = [], m = 0, v = l[g].length; m < v; m++)
                                                            for (n[m] = [l[g][m][0]], y = 1, b = l[g][m].length; y < b; y++) n[m][y] = l[g][m][y] + f * a * h[g][m][y];
                                                    else { var x = function(t) { return +l[g][t] + f * a * h[g][t] };
                                                        n = [
                                                            ["m", x(0), x(1), x(2), x(3), x(4), x(5)]
                                                        ] } break;
                                                case "csv":
                                                    if ("clip-rect" == g)
                                                        for (n = [], m = 4; m--;) n[m] = +l[g][m] + f * a * h[g][m]; break;
                                                default:
                                                    var w = [][Y](l[g]); for (n = [], m = c.paper.customAttributes[g].length; m--;) n[m] = +w[m] + f * a * h[g][m] } d[g] = n } c.attr(d),
                                        function(t, e, i) { setTimeout(function() { R("raphael.anim.frame." + t, e, i) }) }(c.id, c, i.anim) } else { if (function(t, e, i) { setTimeout(function() { R("raphael.anim.frame." + e.id, e, i), R("raphael.anim.finish." + e.id, e, i), I.is(t, "function") && t.call(e) }) }(i.callback, c, i.anim), c.attr(u), ee.splice(e--, 1), 1 < i.repeat && !i.next) { for (r in u) u[N](r) && (p[r] = i.totalOrigin[r]);
                                        i.el.attr(p), _(i.anim, i.el, i.anim.percents[0], null, i.totalOrigin, i.repeat - 1) } i.next && !i.stop && _(i.anim, i.el, i.next, null, i.totalOrigin, i.repeat) } } } ee.length && ie(ne) },
                re = function(t) { return 255 < t ? 255 : t < 0 ? 0 : t };
            qt.animateWith = function(t, e, i, n, r, s) { var a = this; if (a.removed) return s && s.call(a), a; var o = i instanceof u ? i : I.animation(i, n, r, s);
                _(o, a, o.percents[0], null, a.attr()); for (var l = 0, h = ee.length; l < h; l++)
                    if (ee[l].anim == e && ee[l].el == t) { ee[h - 1].start = ee[l].start; break } return a }, qt.onAnimation = function(t) { return t ? R.on("raphael.anim.frame." + this.id, t) : R.unbind("raphael.anim.frame." + this.id), this }, u.prototype.delay = function(t) { var e = new u(this.anim, this.ms); return e.times = this.times, e.del = +t || 0, e }, u.prototype.repeat = function(t) { var e = new u(this.anim, this.ms); return e.del = this.del, e.times = q.floor(T(t, 0)) || 1, e }, I.animation = function(t, e, i, n) { if (t instanceof u) return t;!I.is(i, "function") && i || (n = n || i || null, i = null), t = Object(t), e = +e || 0; var r, s, a = {}; for (s in t) t[N](s) && X(s) != s && X(s) + "%" != s && (r = !0, a[s] = t[s]); if (r) return i && (a.easing = i), n && (a.callback = n), new u({ 100: a }, e); if (n) { var o = 0; for (var l in t) { var h = Z(l);
                        t[N](l) && o < h && (o = h) }!t[o += "%"].callback && (t[o].callback = n) } return new u(t, e) }, qt.animate = function(t, e, i, n) { var r = this; if (r.removed) return n && n.call(r), r; var s = t instanceof u ? t : I.animation(t, e, i, n); return _(s, r, s.percents[0], null, r.attr()), r }, qt.setTime = function(t, e) { return t && null != e && this.status(t, M(e, t.ms) / t.ms), this }, qt.status = function(t, e) { var i, n, r = [],
                    s = 0; if (null != e) return _(t, this, -1, M(e, 1)), this; for (i = ee.length; s < i; s++)
                    if ((n = ee[s]).el.id == this.id && (!t || n.anim == t)) { if (t) return n.status;
                        r.push({ anim: n.anim, status: n.status }) } return t ? 0 : r }, qt.pause = function(t) { for (var e = 0; e < ee.length; e++) ee[e].el.id != this.id || t && ee[e].anim != t || !1 !== R("raphael.anim.pause." + this.id, this, ee[e].anim) && (ee[e].paused = !0); return this }, qt.resume = function(t) { for (var e = 0; e < ee.length; e++)
                    if (ee[e].el.id == this.id && (!t || ee[e].anim == t)) { var i = ee[e];!1 !== R("raphael.anim.resume." + this.id, this, i.anim) && (delete i.paused, this.status(i.anim, i.status)) } return this }, qt.stop = function(t) { for (var e = 0; e < ee.length; e++) ee[e].el.id != this.id || t && ee[e].anim != t || !1 !== R("raphael.anim.stop." + this.id, this, ee[e].anim) && ee.splice(e--, 1); return this }, R.on("raphael.remove", t), R.on("raphael.clear", t), qt.toString = function() { return "Raphaël’s object" }; var se, ae, oe, le, he, ue = function(t) { if (this.items = [], this.length = 0, this.type = "set", t)
                        for (var e = 0, i = t.length; e < i; e++) !t[e] || t[e].constructor != qt.constructor && t[e].constructor != ue || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++) },
                ce = ue.prototype; for (var de in ce.push = function() { for (var t, e, i = 0, n = arguments.length; i < n; i++) !(t = arguments[i]) || t.constructor != qt.constructor && t.constructor != ue || (this[e = this.items.length] = this.items[e] = t, this.length++); return this }, ce.pop = function() { return this.length && delete this[this.length--], this.items.pop() }, ce.forEach = function(t, e) { for (var i = 0, n = this.items.length; i < n; i++)
                        if (!1 === t.call(e, this.items[i], i)) return this; return this }, qt) qt[N](de) && (ce[de] = function(i) { return function() { var e = arguments; return this.forEach(function(t) { t[i][x](t, e) }) } }(de)); return ce.attr = function(t, e) { if (t && I.is(t, E) && I.is(t[0], "object"))
                        for (var i = 0, n = t.length; i < n; i++) this.items[i].attr(t[i]);
                    else
                        for (var r = 0, s = this.items.length; r < s; r++) this.items[r].attr(t, e); return this }, ce.clear = function() { for (; this.length;) this.pop() }, ce.splice = function(t, e, i) { t = t < 0 ? T(this.length + t, 0) : t, e = T(0, M(this.length - t, e)); var n, r = [],
                        s = [],
                        a = []; for (n = 2; n < arguments.length; n++) a.push(arguments[n]); for (n = 0; n < e; n++) s.push(this[t + n]); for (; n < this.length - t; n++) r.push(this[t + n]); var o = a.length; for (n = 0; n < o + r.length; n++) this.items[t + n] = this[t + n] = n < o ? a[n] : r[n - o]; for (n = this.items.length = this.length -= e - o; this[n];) delete this[n++]; return new ue(s) }, ce.exclude = function(t) { for (var e = 0, i = this.length; e < i; e++)
                        if (this[e] == t) return this.splice(e, 1), !0 }, ce.animate = function(t, e, i, n) {
                    (I.is(i, "function") || !i) && (n = i || null); var r, s, a = this.items.length,
                        o = a,
                        l = this; if (!a) return this;
                    n && (s = function() {!--a && n.call(l) }), i = I.is(i, C) ? i : s; var h = I.animation(t, e, i, s); for (r = this.items[--o].animate(h); o--;) this.items[o] && !this.items[o].removed && this.items[o].animateWith(r, h, h), this.items[o] && !this.items[o].removed || a--; return this }, ce.insertAfter = function(t) { for (var e = this.items.length; e--;) this.items[e].insertAfter(t); return this }, ce.getBBox = function() { for (var t = [], e = [], i = [], n = [], r = this.items.length; r--;)
                        if (!this.items[r].removed) { var s = this.items[r].getBBox();
                            t.push(s.x), e.push(s.y), i.push(s.x + s.width), n.push(s.y + s.height) } return { x: t = M[x](0, t), y: e = M[x](0, e), x2: i = T[x](0, i), y2: n = T[x](0, n), width: i - t, height: n - e } }, ce.clone = function(t) { t = this.paper.set(); for (var e = 0, i = this.items.length; e < i; e++) t.push(this.items[e].clone()); return t }, ce.toString = function() { return "Raphaël‘s set" }, ce.glow = function(n) { var r = this.paper.set(); return this.forEach(function(t, e) { var i = t.glow(n);
                        null != i && i.forEach(function(t, e) { r.push(t) }) }), r }, ce.isPointInside = function(e, i) { var n = !1; return this.forEach(function(t) { if (t.isPointInside(e, i)) return !(n = !0) }), n }, I.registerFont = function(t) { if (!t.face) return t;
                    this.fonts = this.fonts || {}; var e = { w: t.w, face: {}, glyphs: {} },
                        i = t.face["font-family"]; for (var n in t.face) t.face[N](n) && (e.face[n] = t.face[n]); if (this.fonts[i] ? this.fonts[i].push(e) : this.fonts[i] = [e], !t.svg)
                        for (var r in e.face["units-per-em"] = Z(t.face["units-per-em"], 10), t.glyphs)
                            if (t.glyphs[N](r)) { var s = t.glyphs[r]; if (e.glyphs[r] = { w: s.w, k: {}, d: s.d && "M" + s.d.replace(/[mlcxtrv]/g, function(t) { return { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" } [t] || "M" }) + "z" }, s.k)
                                    for (var a in s.k) s[N](a) && (e.glyphs[r].k[a] = s.k[a]) } return t }, e.getFont = function(t, e, i, n) { if (n = n || "normal", i = i || "normal", e = +e || { normal: 400, bold: 700, lighter: 300, bolder: 800 } [e] || 400, I.fonts) { var r, s = I.fonts[t]; if (!s) { var a = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, "") + "(\\s|$)", "i"); for (var o in I.fonts)
                                if (I.fonts[N](o) && a.test(o)) { s = I.fonts[o]; break } } if (s)
                            for (var l = 0, h = s.length; l < h && ((r = s[l]).face["font-weight"] != e || r.face["font-style"] != i && r.face["font-style"] || r.face["font-stretch"] != n); l++); return r } }, e.print = function(t, e, i, n, r, s, a, o) { s = s || "middle", a = T(M(a || 0, 1), -1), o = T(M(o || 1, 3), 1); var l, h = H(i)[U](""),
                        u = 0,
                        c = 0,
                        d = ""; if (I.is(n, "string") && (n = this.getFont(n)), n) { l = (r || 16) / n.face["units-per-em"]; for (var p = n.face.bbox[U](j), f = +p[0], g = p[3] - p[1], m = 0, v = +p[1] + ("baseline" == s ? g + +n.face.descent : g / 2), y = 0, b = h.length; y < b; y++) { if ("\n" == h[y]) c = w = u = 0, m += g * o;
                            else { var x = c && n.glyphs[h[y - 1]] || {},
                                    w = n.glyphs[h[y]];
                                u += c ? (x.w || n.w) + (x.k && x.k[h[y]] || 0) + n.w * a : 0, c = 1 } w && w.d && (d += I.transformPath(w.d, ["t", u * l, m * l, "s", l, l, f, v, "t", (t - f) / l, (e - v) / l])) } } return this.path(d).attr({ fill: "#000", stroke: "none" }) }, e.add = function(t) { if (I.is(t, "array"))
                        for (var e, i = this.set(), n = 0, r = t.length; n < r; n++) e = t[n] || {}, o[N](e.type) && i.push(this[e.type]().attr(e)); return i }, I.format = function(t, e) { var i = I.is(e, E) ? [0][Y](e) : arguments; return t && I.is(t, C) && i.length - 1 && (t = t.replace(h, function(t, e) { return null == i[++e] ? "" : i[e] })), t || "" }, I.fullfill = (le = /\{([^\}]+)\}/g, he = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function(t, r) { return String(t).replace(le, function(t, e) { return i = t, s = n = r, e.replace(he, function(t, e, i, n, r) { e = e || n, s && (e in s && (s = s[e]), "function" == typeof s && r && (s = s())) }), s = (null == s || s == n ? i : s) + ""; var i, n, s }) }), I.ninja = function() { if (c.was) f.win.Raphael = c.is;
                    else { window.Raphael = void 0; try { delete window.Raphael } catch (t) {} } return I }, I.st = ce, R.on("raphael.DOMload", function() { n = !0 }), se = document, ae = "DOMContentLoaded", null == se.readyState && se.addEventListener && (se.addEventListener(ae, oe = function() { se.removeEventListener(ae, oe, !1), se.readyState = "complete" }, !1), se.readyState = "loading"),
                function t() { /in/.test(se.readyState) ? setTimeout(t, 9) : I.eve("raphael.DOMload") }(), I }.apply(e, n)) || (t.exports = r) }, function(t, e, i) { var n, p, f, d, g, m, v, y, b, x, r, w, _;
        d = "hasOwnProperty", g = /[\.\/]/, m = /\s*,\s*/, v = function(t, e) { return t - e }, y = { n: {} }, b = function() { for (var t = 0, e = this.length; t < e; t++)
                if (void 0 !== this[t]) return this[t] }, x = function() { for (var t = this.length; --t;)
                if (void 0 !== this[t]) return this[t] }, r = Object.prototype.toString, w = String, _ = Array.isArray || function(t) { return t instanceof Array || "[object Array]" == r.call(t) }, eve = function(t, e) { var i, n = f,
                r = Array.prototype.slice.call(arguments, 2),
                s = eve.listeners(t),
                a = 0,
                o = [],
                l = {},
                h = [],
                u = p;
            h.firstDefined = b, h.lastDefined = x, p = t; for (var c = f = 0, d = s.length; c < d; c++) "zIndex" in s[c] && (o.push(s[c].zIndex), s[c].zIndex < 0 && (l[s[c].zIndex] = s[c])); for (o.sort(v); o[a] < 0;)
                if (i = l[o[a++]], h.push(i.apply(e, r)), f) return f = n, h; for (c = 0; c < d; c++)
                if ("zIndex" in (i = s[c]))
                    if (i.zIndex == o[a]) { if (h.push(i.apply(e, r)), f) break;
                        do { if ((i = l[o[++a]]) && h.push(i.apply(e, r)), f) break } while (i) } else l[i.zIndex] = i;
            else if (h.push(i.apply(e, r)), f) break; return f = n, p = u, h }, eve._events = y, eve.listeners = function(t) { var e, i, n, r, s, a, o, l, h = _(t) ? t : t.split(g),
                u = y,
                c = [u],
                d = []; for (r = 0, s = h.length; r < s; r++) { for (l = [], a = 0, o = c.length; a < o; a++)
                    for (i = [(u = c[a].n)[h[r]], u["*"]], n = 2; n--;)(e = i[n]) && (l.push(e), d = d.concat(e.f || []));
                c = l } return d }, eve.separator = function(t) { g = t ? (t = "[" + (t = w(t).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", new RegExp(t)) : /[\.\/]/ }, eve.on = function(t, a) { if ("function" != typeof a) return function() {}; for (var e = _(t) ? _(t[0]) ? t : [t] : w(t).split(m), i = 0, n = e.length; i < n; i++) ! function(t) { for (var e, i = _(t) ? t : w(t).split(g), n = y, r = 0, s = i.length; r < s; r++) n = (n = n.n).hasOwnProperty(i[r]) && n[i[r]] || (n[i[r]] = { n: {} }); for (n.f = n.f || [], r = 0, s = n.f.length; r < s; r++)
                    if (n.f[r] == a) { e = !0; break }! e && n.f.push(a) }(e[i]); return function(t) {+t == +t && (a.zIndex = +t) } }, eve.f = function(t) { var e = [].slice.call(arguments, 1); return function() { eve.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0))) } }, eve.stop = function() { f = 1 }, eve.nt = function(t) { var e = _(p) ? p.join(".") : p; return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e }, eve.nts = function() { return _(p) ? p : p.split(g) }, eve.off = eve.unbind = function(t, e) { if (t) { var i = _(t) ? _(t[0]) ? t : [t] : w(t).split(m); if (1 < i.length)
                    for (var n = 0, r = i.length; n < r; n++) eve.off(i[n], e);
                else { i = _(t) ? t : w(t).split(g); var s, a, o, l, h, u = [y]; for (n = 0, r = i.length; n < r; n++)
                        for (l = 0; l < u.length; l += o.length - 2) { if (o = [l, 1], s = u[l].n, "*" != i[n]) s[i[n]] && o.push(s[i[n]]);
                            else
                                for (a in s) s[d](a) && o.push(s[a]);
                            u.splice.apply(u, o) }
                    for (n = 0, r = u.length; n < r; n++)
                        for (s = u[n]; s.n;) { if (e) { if (s.f) { for (l = 0, h = s.f.length; l < h; l++)
                                        if (s.f[l] == e) { s.f.splice(l, 1); break }! s.f.length && delete s.f } for (a in s.n)
                                    if (s.n[d](a) && s.n[a].f) { var c = s.n[a].f; for (l = 0, h = c.length; l < h; l++)
                                            if (c[l] == e) { c.splice(l, 1); break }! c.length && delete s.n[a].f } } else
                                for (a in delete s.f, s.n) s.n[d](a) && s.n[a].f && delete s.n[a].f;
                            s = s.n } } } else eve._events = y = { n: {} } }, eve.once = function(t, e) { var i = function() { return eve.off(t, i), e.apply(this, arguments) }; return eve.on(t, i) }, eve.version = "0.5.0", eve.toString = function() { return "You are running Eve 0.5.0" }, void 0 !== t && t.exports ? t.exports = eve : void 0 === (n = function() { return eve }.apply(e, [])) || (t.exports = n) }, function(t, e, i) { var n, r;
        n = [i(1)], void 0 === (r = function(k) { if (!k || k.svg) { var D = "hasOwnProperty",
                    T = String,
                    m = parseFloat,
                    _ = parseInt,
                    v = Math,
                    S = v.max,
                    C = v.abs,
                    y = v.pow,
                    M = /[, ]+/,
                    d = k.eve,
                    A = "http://www.w3.org/1999/xlink",
                    E = { block: "M5,0 0,2.5 5,5z", classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z", diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z", open: "M6,1 1,3.5 6,6", oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z" },
                    P = {};
                k.toString = function() { return "Your browser supports SVG.\nYou are running Raphaël " + this.version }; var L = function(t, e) { if (e)
                            for (var i in "string" == typeof t && (t = L(t)), e) e[D](i) && ("xlink:" == i.substring(0, 6) ? t.setAttributeNS(A, i.substring(6), T(e[i])) : t.setAttribute(i, T(e[i])));
                        else(t = k._g.doc.createElementNS("http://www.w3.org/2000/svg", t)).style && (t.style.webkitTapHighlightColor = "rgba(0,0,0,0)"); return t },
                    O = function(t, e) { var r = "linear",
                            i = t.id + e,
                            s = .5,
                            a = .5,
                            n = t.node,
                            o = t.paper,
                            l = n.style,
                            h = k._g.doc.getElementById(i); if (!h) { if (e = (e = T(e).replace(k._radial_gradient, function(t, e, i) { if (r = "radial", e && i) { s = m(e); var n = 2 * (.5 < (a = m(i))) - 1;
                                        .25 < y(s - .5, 2) + y(a - .5, 2) && (a = v.sqrt(.25 - y(s - .5, 2)) * n + .5) && .5 != a && (a = a.toFixed(5) - 1e-5 * n) } return "" })).split(/\s*\-\s*/), "linear" == r) { var u = e.shift(); if (u = -m(u), isNaN(u)) return null; var c = [0, 0, v.cos(k.rad(u)), v.sin(k.rad(u))],
                                    d = 1 / (S(C(c[2]), C(c[3])) || 1);
                                c[2] *= d, c[3] *= d, c[2] < 0 && (c[0] = -c[2], c[2] = 0), c[3] < 0 && (c[1] = -c[3], c[3] = 0) } var p = k._parseDots(e); if (!p) return null; if (i = i.replace(/[\(\)\s,\xb0#]/g, "_"), t.gradient && i != t.gradient.id && (o.defs.removeChild(t.gradient), delete t.gradient), !t.gradient) { h = L(r + "Gradient", { id: i }), t.gradient = h, L(h, "radial" == r ? { fx: s, fy: a } : { x1: c[0], y1: c[1], x2: c[2], y2: c[3], gradientTransform: t.matrix.invert() }), o.defs.appendChild(h); for (var f = 0, g = p.length; f < g; f++) h.appendChild(L("stop", { offset: p[f].offset ? p[f].offset : f ? "100%" : "0%", "stop-color": p[f].color || "#fff", "stop-opacity": isFinite(p[f].opacity) ? p[f].opacity : 1 })) } } return L(n, { fill: b(i), opacity: 1, "fill-opacity": 1 }), l.fill = "", l.opacity = 1, l.fillOpacity = 1 },
                    b = function(t) { if ((e = document.documentMode) && (9 === e || 10 === e)) return "url('#" + t + "')"; var e, i = document.location; return "url('" + i.protocol + "//" + i.host + i.pathname + i.search + "#" + t + "')" },
                    R = function(t) { var e = t.getBBox(1);
                        L(t.pattern, { patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")" }) },
                    I = function(t, e, i) { if ("path" == t.type) { for (var n, r, s, a, o, l = T(e).toLowerCase().split("-"), h = t.paper, u = i ? "end" : "start", c = t.node, d = t.attrs, p = d["stroke-width"], f = l.length, g = "classic", m = 3, v = 3, y = 5; f--;) switch (l[f]) {
                                case "block":
                                case "classic":
                                case "oval":
                                case "diamond":
                                case "open":
                                case "none":
                                    g = l[f]; break;
                                case "wide":
                                    v = 5; break;
                                case "narrow":
                                    v = 2; break;
                                case "long":
                                    m = 5; break;
                                case "short":
                                    m = 2 }
                            if (o = "open" == g ? (m += 2, v += 2, y += 2, s = 1, a = i ? 4 : 1, { fill: "none", stroke: d.stroke }) : (a = s = m / 2, { fill: d.stroke, stroke: "none" }), t._.arrows ? i ? (t._.arrows.endPath && P[t._.arrows.endPath]--, t._.arrows.endMarker && P[t._.arrows.endMarker]--) : (t._.arrows.startPath && P[t._.arrows.startPath]--, t._.arrows.startMarker && P[t._.arrows.startMarker]--) : t._.arrows = {}, "none" != g) { var b = "raphael-marker-" + g,
                                    x = "raphael-marker-" + u + g + m + v + "-obj" + t.id;
                                k._g.doc.getElementById(b) ? P[b]++ : (h.defs.appendChild(L(L("path"), { "stroke-linecap": "round", d: E[g], id: b })), P[b] = 1); var w, _ = k._g.doc.getElementById(x);
                                _ ? (P[x]++, w = _.getElementsByTagName("use")[0]) : (_ = L(L("marker"), { id: x, markerHeight: v, markerWidth: m, orient: "auto", refX: a, refY: v / 2 }), w = L(L("use"), { "xlink:href": "#" + b, transform: (i ? "rotate(180 " + m / 2 + " " + v / 2 + ") " : "") + "scale(" + m / y + "," + v / y + ")", "stroke-width": (1 / ((m / y + v / y) / 2)).toFixed(4) }), _.appendChild(w), h.defs.appendChild(_), P[x] = 1), L(w, o); var S = s * ("diamond" != g && "oval" != g);
                                r = i ? (n = t._.arrows.startdx * p || 0, k.getTotalLength(d.path) - S * p) : (n = S * p, k.getTotalLength(d.path) - (t._.arrows.enddx * p || 0)), (o = {})["marker-" + u] = "url(#" + x + ")", (r || n) && (o.d = k.getSubpath(d.path, n, r)), L(c, o), t._.arrows[u + "Path"] = b, t._.arrows[u + "Marker"] = x, t._.arrows[u + "dx"] = S, t._.arrows[u + "Type"] = g, t._.arrows[u + "String"] = e } else r = i ? (n = t._.arrows.startdx * p || 0, k.getTotalLength(d.path) - n) : (n = 0, k.getTotalLength(d.path) - (t._.arrows.enddx * p || 0)), t._.arrows[u + "Path"] && L(c, { d: k.getSubpath(d.path, n, r) }), delete t._.arrows[u + "Path"], delete t._.arrows[u + "Marker"], delete t._.arrows[u + "dx"], delete t._.arrows[u + "Type"], delete t._.arrows[u + "String"]; for (o in P)
                                if (P[D](o) && !P[o]) { var C = k._g.doc.getElementById(o);
                                    C && C.parentNode.removeChild(C) } } },
                    o = { "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3] },
                    F = function(t, e, i) { if (e = o[T(e).toLowerCase()]) { for (var n = t.attrs["stroke-width"] || "1", r = { round: n, square: n, butt: 0 } [t.attrs["stroke-linecap"] || i["stroke-linecap"]] || 0, s = [], a = e.length; a--;) s[a] = e[a] * n + (a % 2 ? 1 : -1) * r;
                            L(t.node, { "stroke-dasharray": s.join(",") }) } else L(t.node, { "stroke-dasharray": "none" }) },
                    p = function(t, e) { var i = t.node,
                            n = t.attrs,
                            r = i.style.visibility; for (var s in i.style.visibility = "hidden", e)
                            if (e[D](s)) { if (!k._availableAttrs[D](s)) continue; var a = e[s]; switch (n[s] = a, s) {
                                    case "blur":
                                        t.blur(a); break;
                                    case "title":
                                        var o = i.getElementsByTagName("title"); if (o.length && (o = o[0])) o.firstChild.nodeValue = a;
                                        else { o = L("title"); var l = k._g.doc.createTextNode(a);
                                            o.appendChild(l), i.appendChild(o) } break;
                                    case "href":
                                    case "target":
                                        var h = i.parentNode; if ("a" != h.tagName.toLowerCase()) { var u = L("a");
                                            h.insertBefore(u, i), u.appendChild(i), h = u } "target" == s ? h.setAttributeNS(A, "show", "blank" == a ? "new" : a) : h.setAttributeNS(A, s, a); break;
                                    case "cursor":
                                        i.style.cursor = a; break;
                                    case "transform":
                                        t.transform(a); break;
                                    case "arrow-start":
                                        I(t, a); break;
                                    case "arrow-end":
                                        I(t, a, 1); break;
                                    case "clip-rect":
                                        var c = T(a).split(M); if (4 == c.length) { t.clip && t.clip.parentNode.parentNode.removeChild(t.clip.parentNode); var d = L("clipPath"),
                                                p = L("rect");
                                            d.id = k.createUUID(), L(p, { x: c[0], y: c[1], width: c[2], height: c[3] }), d.appendChild(p), t.paper.defs.appendChild(d), L(i, { "clip-path": "url(#" + d.id + ")" }), t.clip = p } if (!a) { var f = i.getAttribute("clip-path"); if (f) { var g = k._g.doc.getElementById(f.replace(/(^url\(#|\)$)/g, ""));
                                                g && g.parentNode.removeChild(g), L(i, { "clip-path": "" }), delete t.clip } } break;
                                    case "path":
                                        "path" == t.type && (L(i, { d: a ? n.path = k._pathToAbsolute(a) : "M0,0" }), t._.dirty = 1, t._.arrows && ("startString" in t._.arrows && I(t, t._.arrows.startString), "endString" in t._.arrows && I(t, t._.arrows.endString, 1))); break;
                                    case "width":
                                        if (i.setAttribute(s, a), t._.dirty = 1, !n.fx) break;
                                        s = "x", a = n.x;
                                    case "x":
                                        n.fx && (a = -n.x - (n.width || 0));
                                    case "rx":
                                        if ("rx" == s && "rect" == t.type) break;
                                    case "cx":
                                        i.setAttribute(s, a), t.pattern && R(t), t._.dirty = 1; break;
                                    case "height":
                                        if (i.setAttribute(s, a), t._.dirty = 1, !n.fy) break;
                                        s = "y", a = n.y;
                                    case "y":
                                        n.fy && (a = -n.y - (n.height || 0));
                                    case "ry":
                                        if ("ry" == s && "rect" == t.type) break;
                                    case "cy":
                                        i.setAttribute(s, a), t.pattern && R(t), t._.dirty = 1; break;
                                    case "r":
                                        "rect" == t.type ? L(i, { rx: a, ry: a }) : i.setAttribute(s, a), t._.dirty = 1; break;
                                    case "src":
                                        "image" == t.type && i.setAttributeNS(A, "href", a); break;
                                    case "stroke-width":
                                        1 == t._.sx && 1 == t._.sy || (a /= S(C(t._.sx), C(t._.sy)) || 1), i.setAttribute(s, a), n["stroke-dasharray"] && F(t, n["stroke-dasharray"], e), t._.arrows && ("startString" in t._.arrows && I(t, t._.arrows.startString), "endString" in t._.arrows && I(t, t._.arrows.endString, 1)); break;
                                    case "stroke-dasharray":
                                        F(t, a, e); break;
                                    case "fill":
                                        var m = T(a).match(k._ISURL); if (m) { d = L("pattern"); var v = L("image");
                                            d.id = k.createUUID(), L(d, { x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1 }), L(v, { x: 0, y: 0, "xlink:href": m[1] }), d.appendChild(v),
                                                function(i) { k._preload(m[1], function() { var t = this.offsetWidth,
                                                            e = this.offsetHeight;
                                                        L(i, { width: t, height: e }), L(v, { width: t, height: e }) }) }(d), t.paper.defs.appendChild(d), L(i, { fill: "url(#" + d.id + ")" }), t.pattern = d, t.pattern && R(t); break } var y = k.getRGB(a); if (y.error) { if (("circle" == t.type || "ellipse" == t.type || "r" != T(a).charAt()) && O(t, a)) { if ("opacity" in n || "fill-opacity" in n) { var b = k._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, "")); if (b) { var x = b.getElementsByTagName("stop");
                                                        L(x[x.length - 1], { "stop-opacity": ("opacity" in n ? n.opacity : 1) * ("fill-opacity" in n ? n["fill-opacity"] : 1) }) } } n.gradient = a, n.fill = "none"; break } } else delete e.gradient, delete n.gradient, !k.is(n.opacity, "undefined") && k.is(e.opacity, "undefined") && L(i, { opacity: n.opacity }), !k.is(n["fill-opacity"], "undefined") && k.is(e["fill-opacity"], "undefined") && L(i, { "fill-opacity": n["fill-opacity"] });
                                        y[D]("opacity") && L(i, { "fill-opacity": 1 < y.opacity ? y.opacity / 100 : y.opacity });
                                    case "stroke":
                                        y = k.getRGB(a), i.setAttribute(s, y.hex), "stroke" == s && y[D]("opacity") && L(i, { "stroke-opacity": 1 < y.opacity ? y.opacity / 100 : y.opacity }), "stroke" == s && t._.arrows && ("startString" in t._.arrows && I(t, t._.arrows.startString), "endString" in t._.arrows && I(t, t._.arrows.endString, 1)); break;
                                    case "gradient":
                                        ("circle" == t.type || "ellipse" == t.type || "r" != T(a).charAt()) && O(t, a); break;
                                    case "opacity":
                                        n.gradient && !n[D]("stroke-opacity") && L(i, { "stroke-opacity": 1 < a ? a / 100 : a });
                                    case "fill-opacity":
                                        if (n.gradient) {
                                            (b = k._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, ""))) && (x = b.getElementsByTagName("stop"), L(x[x.length - 1], { "stop-opacity": a })); break }
                                    default:
                                        "font-size" == s && (a = _(a, 10) + "px"); var w = s.replace(/(\-.)/g, function(t) { return t.substring(1).toUpperCase() });
                                        i.style[w] = a, t._.dirty = 1, i.setAttribute(s, a) } } j(t, e), i.style.visibility = r },
                    j = function(t, e) { if ("text" == t.type && (e[D]("text") || e[D]("font") || e[D]("font-size") || e[D]("x") || e[D]("y"))) { var i = t.attrs,
                                n = t.node,
                                r = n.firstChild ? _(k._g.doc.defaultView.getComputedStyle(n.firstChild, "").getPropertyValue("font-size"), 10) : 10; if (e[D]("text")) { for (i.text = e.text; n.firstChild;) n.removeChild(n.firstChild); for (var s, a = T(e.text).split("\n"), o = [], l = 0, h = a.length; l < h; l++) s = L("tspan"), l && L(s, { dy: 1.2 * r, x: i.x }), s.appendChild(k._g.doc.createTextNode(a[l])), n.appendChild(s), o[l] = s } else
                                for (l = 0, h = (o = n.getElementsByTagName("tspan")).length; l < h; l++) l ? L(o[l], { dy: 1.2 * r, x: i.x }) : L(o[0], { dy: 0 });
                            L(n, { x: i.x, y: i.y }), t._.dirty = 1; var u = t._getBBox(),
                                c = i.y - (u.y + u.height / 2);
                            c && k.is(c, "finite") && L(o[0], { dy: c }) } },
                    n = function(t) { return t.parentNode && "a" === t.parentNode.tagName.toLowerCase() ? t.parentNode : t },
                    l = function(t, e) { this[0] = this.node = t, t.raphael = !0, this.id = ("0000" + (Math.random() * Math.pow(36, 5) << 0).toString(36)).slice(-5), t.raphaelid = this.id, this.matrix = k.matrix(), this.realPath = null, this.paper = e, this.attrs = this.attrs || {}, this._ = { transform: [], sx: 1, sy: 1, deg: 0, dx: 0, dy: 0, dirty: 1 }, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), (e.top = this).next = null },
                    t = k.el;
                (l.prototype = t).constructor = l, k._engine.path = function(t, e) { var i = L("path");
                    e.canvas && e.canvas.appendChild(i); var n = new l(i, e); return n.type = "path", p(n, { fill: "none", stroke: "#000", path: t }), n }, t.rotate = function(t, e, i) { if (this.removed) return this; if ((t = T(t).split(M)).length - 1 && (e = m(t[1]), i = m(t[2])), t = m(t[0]), null == i && (e = i), null == e || null == i) { var n = this.getBBox(1);
                        e = n.x + n.width / 2, i = n.y + n.height / 2 } return this.transform(this._.transform.concat([
                        ["r", t, e, i]
                    ])), this }, t.scale = function(t, e, i, n) { if (this.removed) return this; if ((t = T(t).split(M)).length - 1 && (e = m(t[1]), i = m(t[2]), n = m(t[3])), t = m(t[0]), null == e && (e = t), null == n && (i = n), null == i || null == n) var r = this.getBBox(1); return i = null == i ? r.x + r.width / 2 : i, n = null == n ? r.y + r.height / 2 : n, this.transform(this._.transform.concat([
                        ["s", t, e, i, n]
                    ])), this }, t.translate = function(t, e) { return this.removed || ((t = T(t).split(M)).length - 1 && (e = m(t[1])), t = m(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([
                        ["t", t, e]
                    ]))), this }, t.transform = function(t) { var e = this._; if (null == t) return e.transform; if (k._extractTransform(this, t), this.clip && L(this.clip, { transform: this.matrix.invert() }), this.pattern && R(this), this.node && L(this.node, { transform: this.matrix }), 1 != e.sx || 1 != e.sy) { var i = this.attrs[D]("stroke-width") ? this.attrs["stroke-width"] : 1;
                        this.attr({ "stroke-width": i }) } return this }, t.hide = function() { return this.removed || (this.node.style.display = "none"), this }, t.show = function() { return this.removed || (this.node.style.display = ""), this }, t.remove = function() { var t = n(this.node); if (!this.removed && t.parentNode) { var e = this.paper; for (var i in e.__set__ && e.__set__.exclude(this), d.unbind("raphael.*.*." + this.id), this.gradient && e.defs.removeChild(this.gradient), k._tear(this, e), t.parentNode.removeChild(t), this.removeData(), this) this[i] = "function" == typeof this[i] ? k._removedFactory(i) : null;
                        this.removed = !0 } }, t._getBBox = function() { if ("none" == this.node.style.display) { this.show(); var t = !0 } var e, i = !1;
                    this.paper.canvas.parentElement ? e = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (e = this.paper.canvas.parentNode.style), e && "none" == e.display && (i = !0, e.display = ""); var n = {}; try { n = this.node.getBBox() } catch (t) { n = { x: this.node.clientLeft, y: this.node.clientTop, width: this.node.clientWidth, height: this.node.clientHeight } } finally { n = n || {}, i && (e.display = "none") } return t && this.hide(), n }, t.attr = function(t, e) { if (this.removed) return this; if (null == t) { var i = {}; for (var n in this.attrs) this.attrs[D](n) && (i[n] = this.attrs[n]); return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i } if (null == e && k.is(t, "string")) { if ("fill" == t && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient; if ("transform" == t) return this._.transform; for (var r = t.split(M), s = {}, a = 0, o = r.length; a < o; a++)(t = r[a]) in this.attrs ? s[t] = this.attrs[t] : k.is(this.paper.customAttributes[t], "function") ? s[t] = this.paper.customAttributes[t].def : s[t] = k._availableAttrs[t]; return o - 1 ? s : s[r[0]] } if (null == e && k.is(t, "array")) { for (s = {}, a = 0, o = t.length; a < o; a++) s[t[a]] = this.attr(t[a]); return s } if (null != e) { var l = {};
                        l[t] = e } else null != t && k.is(t, "object") && (l = t); for (var h in l) d("raphael.attr." + h + "." + this.id, this, l[h]); for (h in this.paper.customAttributes)
                        if (this.paper.customAttributes[D](h) && l[D](h) && k.is(this.paper.customAttributes[h], "function")) { var u = this.paper.customAttributes[h].apply(this, [].concat(l[h])); for (var c in this.attrs[h] = l[h], u) u[D](c) && (l[c] = u[c]) } return p(this, l), this }, t.toFront = function() { if (this.removed) return this; var t = n(this.node);
                    t.parentNode.appendChild(t); var e = this.paper; return e.top != this && k._tofront(this, e), this }, t.toBack = function() { if (this.removed) return this; var t = n(this.node),
                        e = t.parentNode; return e.insertBefore(t, e.firstChild), k._toback(this, this.paper), this.paper, this }, t.insertAfter = function(t) { if (this.removed || !t) return this; var e = n(this.node),
                        i = n(t.node || t[t.length - 1].node); return i.nextSibling ? i.parentNode.insertBefore(e, i.nextSibling) : i.parentNode.appendChild(e), k._insertafter(this, t, this.paper), this }, t.insertBefore = function(t) { if (this.removed || !t) return this; var e = n(this.node),
                        i = n(t.node || t[0].node); return i.parentNode.insertBefore(e, i), k._insertbefore(this, t, this.paper), this }, t.blur = function(t) { var e = this; if (0 != +t) { var i = L("filter"),
                            n = L("feGaussianBlur");
                        e.attrs.blur = t, i.id = k.createUUID(), L(n, { stdDeviation: +t || 1.5 }), i.appendChild(n), e.paper.defs.appendChild(i), e._blur = i, L(e.node, { filter: "url(#" + i.id + ")" }) } else e._blur && (e._blur.parentNode.removeChild(e._blur), delete e._blur, delete e.attrs.blur), e.node.removeAttribute("filter"); return e }, k._engine.circle = function(t, e, i, n) { var r = L("circle");
                    t.canvas && t.canvas.appendChild(r); var s = new l(r, t); return s.attrs = { cx: e, cy: i, r: n, fill: "none", stroke: "#000" }, s.type = "circle", L(r, s.attrs), s }, k._engine.rect = function(t, e, i, n, r, s) { var a = L("rect");
                    t.canvas && t.canvas.appendChild(a); var o = new l(a, t); return o.attrs = { x: e, y: i, width: n, height: r, rx: s || 0, ry: s || 0, fill: "none", stroke: "#000" }, o.type = "rect", L(a, o.attrs), o }, k._engine.ellipse = function(t, e, i, n, r) { var s = L("ellipse");
                    t.canvas && t.canvas.appendChild(s); var a = new l(s, t); return a.attrs = { cx: e, cy: i, rx: n, ry: r, fill: "none", stroke: "#000" }, a.type = "ellipse", L(s, a.attrs), a }, k._engine.image = function(t, e, i, n, r, s) { var a = L("image");
                    L(a, { x: i, y: n, width: r, height: s, preserveAspectRatio: "none" }), a.setAttributeNS(A, "href", e), t.canvas && t.canvas.appendChild(a); var o = new l(a, t); return o.attrs = { x: i, y: n, width: r, height: s, src: e }, o.type = "image", o }, k._engine.text = function(t, e, i, n) { var r = L("text");
                    t.canvas && t.canvas.appendChild(r); var s = new l(r, t); return s.attrs = { x: e, y: i, "text-anchor": "middle", text: n, "font-family": k._availableAttrs["font-family"], "font-size": k._availableAttrs["font-size"], stroke: "none", fill: "#000" }, s.type = "text", p(s, s.attrs), s }, k._engine.setSize = function(t, e) { return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this }, k._engine.create = function() { var t = k._getContainer.apply(0, arguments),
                        e = t && t.container,
                        i = t.x,
                        n = t.y,
                        r = t.width,
                        s = t.height; if (!e) throw new Error("SVG container not found."); var a, o = L("svg"),
                        l = "overflow:hidden;"; return i = i || 0, n = n || 0, L(o, { height: s = s || 342, version: 1.1, width: r = r || 512, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }), 1 == e ? (o.style.cssText = l + "position:absolute;left:" + i + "px;top:" + n + "px", k._g.doc.body.appendChild(o), a = 1) : (o.style.cssText = l + "position:relative", e.firstChild ? e.insertBefore(o, e.firstChild) : e.appendChild(o)), (e = new k._Paper).width = r, e.height = s, e.canvas = o, e.clear(), e._left = e._top = 0, a && (e.renderfix = function() {}), e.renderfix(), e }, k._engine.setViewBox = function(t, e, i, n, r) { d("raphael.setViewBox", this, this._viewBox, [t, e, i, n, r]); var s, a, o = this.getSize(),
                        l = S(i / o.width, n / o.height),
                        h = this.top,
                        u = r ? "xMidYMid meet" : "xMinYMin"; for (s = null == t ? (this._vbSize && (l = 1), delete this._vbSize, "0 0 " + this.width + " " + this.height) : (this._vbSize = l, t + " " + e + " " + i + " " + n), L(this.canvas, { viewBox: s, preserveAspectRatio: u }); l && h;) a = "stroke-width" in h.attrs ? h.attrs["stroke-width"] : 1, h.attr({ "stroke-width": a }), h._.dirty = 1, h._.dirtyT = 1, h = h.prev; return this._viewBox = [t, e, i, n, !!r], this }, k.prototype.renderfix = function() { var t, e = this.canvas,
                        i = e.style; try { t = e.getScreenCTM() || e.createSVGMatrix() } catch (i) { t = e.createSVGMatrix() } var n = -t.e % 1,
                        r = -t.f % 1;
                    (n || r) && (n && (this._left = (this._left + n) % 1, i.left = this._left + "px"), r && (this._top = (this._top + r) % 1, i.top = this._top + "px")) }, k.prototype.clear = function() { k.eve("raphael.clear", this); for (var t = this.canvas; t.firstChild;) t.removeChild(t.firstChild);
                    this.bottom = this.top = null, (this.desc = L("desc")).appendChild(k._g.doc.createTextNode("Created with Raphaël " + k.version)), t.appendChild(this.desc), t.appendChild(this.defs = L("defs")) }, k.prototype.remove = function() { for (var t in d("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this) this[t] = "function" == typeof this[t] ? k._removedFactory(t) : null }; var e = k.st; for (var i in t) t[D](i) && !e[D](i) && (e[i] = function(i) { return function() { var e = arguments; return this.forEach(function(t) { t[i].apply(t, e) }) } }(i)) } }.apply(e, n)) || (t.exports = r) }, function(t, e, i) { var n, r;
        n = [i(1)], void 0 === (r = function(L) { if (!L || L.vml) { var O = "hasOwnProperty",
                    R = String,
                    I = parseFloat,
                    c = Math,
                    F = c.round,
                    j = c.max,
                    N = c.min,
                    v = c.abs,
                    H = "fill",
                    z = /[, ]+/,
                    d = L.eve,
                    B = " ",
                    $ = { M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x" },
                    W = /([clmz]),?([^clmz]*)/gi,
                    n = / progid:\S+Blur\([^\)]+\)/g,
                    Y = /-?[^,\s-]+/g,
                    u = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
                    U = 21600,
                    q = { path: 1, rect: 1, image: 1 },
                    V = { circle: 1, ellipse: 1 },
                    y = function(t, e, i) { var n = L.matrix(); return n.rotate(-t, .5, .5), { dx: n.x(e, i), dy: n.y(e, i) } },
                    G = function(t, e, i, n, r, s) { var a = t._,
                            o = t.matrix,
                            l = a.fillpos,
                            h = t.node,
                            u = h.style,
                            c = 1,
                            d = "",
                            p = U / e,
                            f = U / i; if (u.visibility = "hidden", e && i) { if (h.coordsize = v(p) + B + v(f), u.rotation = s * (e * i < 0 ? -1 : 1), s) { var g = y(s, n, r);
                                n = g.dx, r = g.dy } if (e < 0 && (d += "x"), i < 0 && (d += " y") && (c = -1), u.flip = d, h.coordorigin = n * -p + B + r * -f, l || a.fillsize) { var m = h.getElementsByTagName(H);
                                m = m && m[0], h.removeChild(m), l && (g = y(s, o.x(l[0], l[1]), o.y(l[0], l[1])), m.position = g.dx * c + B + g.dy * c), a.fillsize && (m.size = a.fillsize[0] * v(e) + B + a.fillsize[1] * v(i)), h.appendChild(m) } u.visibility = "visible" } };
                L.toString = function() { return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version }; var X, Z = function(t, e, i) { for (var n = R(e).toLowerCase().split("-"), r = i ? "end" : "start", s = n.length, a = "classic", o = "medium", l = "medium"; s--;) switch (n[s]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                a = n[s]; break;
                            case "wide":
                            case "narrow":
                                l = n[s]; break;
                            case "long":
                            case "short":
                                o = n[s] }
                        var h = t.node.getElementsByTagName("stroke")[0];
                        h[r + "arrow"] = a, h[r + "arrowlength"] = o, h[r + "arrowwidth"] = l },
                    p = function(t, e) { t.attrs = t.attrs || {}; var i = t.node,
                            n = t.attrs,
                            r = i.style,
                            s = q[t.type] && (e.x != n.x || e.y != n.y || e.width != n.width || e.height != n.height || e.cx != n.cx || e.cy != n.cy || e.rx != n.rx || e.ry != n.ry || e.r != n.r),
                            a = V[t.type] && (n.cx != e.cx || n.cy != e.cy || n.r != e.r || n.rx != e.rx || n.ry != e.ry),
                            o = t; for (var l in e) e[O](l) && (n[l] = e[l]); if (s && (n.path = L._getPath[t.type](t), t._.dirty = 1), e.href && (i.href = e.href), e.title && (i.title = e.title), e.target && (i.target = e.target), e.cursor && (r.cursor = e.cursor), "blur" in e && t.blur(e.blur), (e.path && "path" == t.type || s) && (i.path = function(t) { var e = /[ahqstv]/gi,
                                    i = L._pathToAbsolute; if (R(t).match(e) && (i = L._path2curve), e = /[clmz]/g, i == L._pathToAbsolute && !R(t).match(e)) { var n = R(t).replace(W, function(t, e, i) { var n = [],
                                            r = "m" == e.toLowerCase(),
                                            s = $[e]; return i.replace(Y, function(t) { r && 2 == n.length && (s += n + $["m" == e ? "l" : "L"], n = []), n.push(F(t * U)) }), s + n }); return n } var r, s, a = i(t);
                                n = []; for (var o = 0, l = a.length; o < l; o++) { r = a[o], "z" == (s = a[o][0].toLowerCase()) && (s = "x"); for (var h = 1, u = r.length; h < u; h++) s += F(r[h] * U) + (h != u - 1 ? "," : "");
                                    n.push(s) } return n.join(B) }(~R(n.path).toLowerCase().indexOf("r") ? L._pathToAbsolute(n.path) : n.path), t._.dirty = 1, "image" == t.type && (t._.fillpos = [n.x, n.y], t._.fillsize = [n.width, n.height], G(t, 1, 1, 0, 0, 0))), "transform" in e && t.transform(e.transform), a) { var h = +n.cx,
                                u = +n.cy,
                                c = +n.rx || +n.r || 0,
                                d = +n.ry || +n.r || 0;
                            i.path = L.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", F((h - c) * U), F((u - d) * U), F((h + c) * U), F((u + d) * U), F(h * U)), t._.dirty = 1 } if ("clip-rect" in e) { var p = R(e["clip-rect"]).split(z); if (4 == p.length) { p[2] = +p[2] + +p[0], p[3] = +p[3] + +p[1]; var f = i.clipRect || L._g.doc.createElement("div"),
                                    g = f.style;
                                g.clip = L.format("rect({1}px {2}px {3}px {0}px)", p), i.clipRect || (g.position = "absolute", g.top = 0, g.left = 0, g.width = t.paper.width + "px", g.height = t.paper.height + "px", i.parentNode.insertBefore(f, i), f.appendChild(i), i.clipRect = f) } e["clip-rect"] || i.clipRect && (i.clipRect.style.clip = "auto") } if (t.textpath) { var m = t.textpath.style;
                            e.font && (m.font = e.font), e["font-family"] && (m.fontFamily = '"' + e["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, "") + '"'), e["font-size"] && (m.fontSize = e["font-size"]), e["font-weight"] && (m.fontWeight = e["font-weight"]), e["font-style"] && (m.fontStyle = e["font-style"]) } if ("arrow-start" in e && Z(o, e["arrow-start"]), "arrow-end" in e && Z(o, e["arrow-end"], 1), null != e.opacity || null != e.fill || null != e.src || null != e.stroke || null != e["stroke-width"] || null != e["stroke-opacity"] || null != e["fill-opacity"] || null != e["stroke-dasharray"] || null != e["stroke-miterlimit"] || null != e["stroke-linejoin"] || null != e["stroke-linecap"]) { var v = i.getElementsByTagName(H); if (!(v = v && v[0]) && (v = X(H)), "image" == t.type && e.src && (v.src = e.src), e.fill && (v.on = !0), null != v.on && "none" != e.fill && null !== e.fill || (v.on = !1), v.on && e.fill) { var y = R(e.fill).match(L._ISURL); if (y) { v.parentNode == i && i.removeChild(v), v.rotate = !0, v.src = y[1], v.type = "tile"; var b = t.getBBox(1);
                                    v.position = b.x + B + b.y, t._.fillpos = [b.x, b.y], L._preload(y[1], function() { t._.fillsize = [this.offsetWidth, this.offsetHeight] }) } else v.color = L.getRGB(e.fill).hex, v.src = "", v.type = "solid", L.getRGB(e.fill).error && (o.type in { circle: 1, ellipse: 1 } || "r" != R(e.fill).charAt()) && Q(o, e.fill, v) && (n.fill = "none", n.gradient = e.fill, v.rotate = !1) } if ("fill-opacity" in e || "opacity" in e) { var x = ((+n["fill-opacity"] + 1 || 2) - 1) * ((+n.opacity + 1 || 2) - 1) * ((+L.getRGB(e.fill).o + 1 || 2) - 1);
                                x = N(j(x, 0), 1), v.opacity = x, v.src && (v.color = "none") } i.appendChild(v); var w = i.getElementsByTagName("stroke") && i.getElementsByTagName("stroke")[0],
                                _ = !1;!w && (_ = w = X("stroke")), (e.stroke && "none" != e.stroke || e["stroke-width"] || null != e["stroke-opacity"] || e["stroke-dasharray"] || e["stroke-miterlimit"] || e["stroke-linejoin"] || e["stroke-linecap"]) && (w.on = !0), ("none" == e.stroke || null === e.stroke || null == w.on || 0 == e.stroke || 0 == e["stroke-width"]) && (w.on = !1); var S = L.getRGB(e.stroke);
                            w.on && e.stroke && (w.color = S.hex), x = ((+n["stroke-opacity"] + 1 || 2) - 1) * ((+n.opacity + 1 || 2) - 1) * ((+S.o + 1 || 2) - 1); var C = .75 * (I(e["stroke-width"]) || 1); if (x = N(j(x, 0), 1), null == e["stroke-width"] && (C = n["stroke-width"]), e["stroke-width"] && (w.weight = C), C && C < 1 && (x *= C) && (w.weight = 1), w.opacity = x, e["stroke-linejoin"] && (w.joinstyle = e["stroke-linejoin"] || "miter"), w.miterlimit = e["stroke-miterlimit"] || 8, e["stroke-linecap"] && (w.endcap = "butt" == e["stroke-linecap"] ? "flat" : "square" == e["stroke-linecap"] ? "square" : "round"), "stroke-dasharray" in e) { var k = { "-": "shortdash", ".": "shortdot", "-.": "shortdashdot", "-..": "shortdashdotdot", ". ": "dot", "- ": "dash", "--": "longdash", "- .": "dashdot", "--.": "longdashdot", "--..": "longdashdotdot" };
                                w.dashstyle = k[O](e["stroke-dasharray"]) ? k[e["stroke-dasharray"]] : "" } _ && i.appendChild(w) } if ("text" == o.type) { o.paper.canvas.style.display = ""; var D = o.paper.span,
                                T = n.font && n.font.match(/\d+(?:\.\d*)?(?=px)/);
                            r = D.style, n.font && (r.font = n.font), n["font-family"] && (r.fontFamily = n["font-family"]), n["font-weight"] && (r.fontWeight = n["font-weight"]), n["font-style"] && (r.fontStyle = n["font-style"]), T = I(n["font-size"] || T && T[0]) || 10, r.fontSize = 100 * T + "px", o.textpath.string && (D.innerHTML = R(o.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>")); var M = D.getBoundingClientRect();
                            o.W = n.w = (M.right - M.left) / 100, o.H = n.h = (M.bottom - M.top) / 100, o.X = n.x, o.Y = n.y + o.H / 2, ("x" in e || "y" in e) && (o.path.v = L.format("m{0},{1}l{2},{1}", F(n.x * U), F(n.y * U), F(n.x * U) + 1)); for (var A = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], E = 0, P = A.length; E < P; E++)
                                if (A[E] in e) { o._.dirty = 1; break } switch (n["text-anchor"]) {
                                case "start":
                                    o.textpath.style["v-text-align"] = "left", o.bbx = o.W / 2; break;
                                case "end":
                                    o.textpath.style["v-text-align"] = "right", o.bbx = -o.W / 2; break;
                                default:
                                    o.textpath.style["v-text-align"] = "center", o.bbx = 0 } o.textpath.style["v-text-kern"] = !0 } },
                    Q = function(t, e, i) { t.attrs = t.attrs || {}, t.attrs; var n = Math.pow,
                            r = "linear",
                            s = ".5 .5"; if (t.attrs.gradient = e, e = (e = R(e).replace(L._radial_gradient, function(t, e, i) { return r = "radial", e && i && (e = I(e), i = I(i), .25 < n(e - .5, 2) + n(i - .5, 2) && (i = c.sqrt(.25 - n(e - .5, 2)) * (2 * (.5 < i) - 1) + .5), s = e + B + i), "" })).split(/\s*\-\s*/), "linear" == r) { var a = e.shift(); if (a = -I(a), isNaN(a)) return null } var o = L._parseDots(e); if (!o) return null; if (t = t.shape || t.node, o.length) { t.removeChild(i), i.on = !0, i.method = "none", i.color = o[0].color, i.color2 = o[o.length - 1].color; for (var l = [], h = 0, u = o.length; h < u; h++) o[h].offset && l.push(o[h].offset + B + o[h].color);
                            i.colors = l.length ? l.join() : "0% " + i.color, i.angle = "radial" == r ? (i.type = "gradientTitle", i.focus = "100%", i.focussize = "0 0", i.focusposition = s, 0) : (i.type = "gradient", (270 - a) % 360), t.appendChild(i) } return 1 },
                    f = function(t, e) { this[0] = this.node = t, t.raphael = !0, this.id = L._oid++, t.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = e, this.matrix = L.matrix(), this._ = { transform: [], sx: 1, sy: 1, dx: 0, dy: 0, deg: 0, dirty: 1, dirtyT: 1 }, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), (e.top = this).next = null },
                    t = L.el;
                (f.prototype = t).constructor = f, t.transform = function(t) { if (null == t) return this._.transform; var e, i = this.paper._viewBoxShift,
                        n = i ? "s" + [i.scale, i.scale] + "-1-1t" + [i.dx, i.dy] : "";
                    i && (e = t = R(t).replace(/\.{3}|\u2026/g, this._.transform || "")), L._extractTransform(this, n + t); var r, s = this.matrix.clone(),
                        a = this.skew,
                        o = this.node,
                        l = ~R(this.attrs.fill).indexOf("-"),
                        h = !R(this.attrs.fill).indexOf("url("); if (s.translate(1, 1), h || l || "image" == this.type)
                        if (a.matrix = "1 0 0 1", a.offset = "0 0", r = s.split(), l && r.noRotation || !r.isSimple) { o.style.filter = s.toFilter(); var u = this.getBBox(),
                                c = this.getBBox(1),
                                d = u.x - c.x,
                                p = u.y - c.y;
                            o.coordorigin = d * -U + B + p * -U, G(this, 1, 1, d, p, 0) } else o.style.filter = "", G(this, r.scalex, r.scaley, r.dx, r.dy, r.rotate);
                    else o.style.filter = "", a.matrix = R(s), a.offset = s.offset(); return null !== e && (this._.transform = e, L._extractTransform(this, e)), this }, t.rotate = function(t, e, i) { if (this.removed) return this; if (null != t) { if ((t = R(t).split(z)).length - 1 && (e = I(t[1]), i = I(t[2])), t = I(t[0]), null == i && (e = i), null == e || null == i) { var n = this.getBBox(1);
                            e = n.x + n.width / 2, i = n.y + n.height / 2 } return this._.dirtyT = 1, this.transform(this._.transform.concat([
                            ["r", t, e, i]
                        ])), this } }, t.translate = function(t, e) { return this.removed || ((t = R(t).split(z)).length - 1 && (e = I(t[1])), t = I(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([
                        ["t", t, e]
                    ]))), this }, t.scale = function(t, e, i, n) { if (this.removed) return this; if ((t = R(t).split(z)).length - 1 && (e = I(t[1]), i = I(t[2]), n = I(t[3]), isNaN(i) && (i = null), isNaN(n) && (n = null)), t = I(t[0]), null == e && (e = t), null == n && (i = n), null == i || null == n) var r = this.getBBox(1); return i = null == i ? r.x + r.width / 2 : i, n = null == n ? r.y + r.height / 2 : n, this.transform(this._.transform.concat([
                        ["s", t, e, i, n]
                    ])), this._.dirtyT = 1, this }, t.hide = function() { return !this.removed && (this.node.style.display = "none"), this }, t.show = function() { return !this.removed && (this.node.style.display = ""), this }, t.auxGetBBox = L.el.getBBox, t.getBBox = function() { var t = this.auxGetBBox(); if (this.paper && this.paper._viewBoxShift) { var e = {},
                            i = 1 / this.paper._viewBoxShift.scale; return e.x = t.x - this.paper._viewBoxShift.dx, e.x *= i, e.y = t.y - this.paper._viewBoxShift.dy, e.y *= i, e.width = t.width * i, e.height = t.height * i, e.x2 = e.x + e.width, e.y2 = e.y + e.height, e } return t }, t._getBBox = function() { return this.removed ? {} : { x: this.X + (this.bbx || 0) - this.W / 2, y: this.Y - this.H, width: this.W, height: this.H } }, t.remove = function() { if (!this.removed && this.node.parentNode) { for (var t in this.paper.__set__ && this.paper.__set__.exclude(this), L.eve.unbind("raphael.*.*." + this.id), L._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape), this) this[t] = "function" == typeof this[t] ? L._removedFactory(t) : null;
                        this.removed = !0 } }, t.attr = function(t, e) { if (this.removed) return this; if (null == t) { var i = {}; for (var n in this.attrs) this.attrs[O](n) && (i[n] = this.attrs[n]); return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i } if (null == e && L.is(t, "string")) { if (t == H && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient; for (var r = t.split(z), s = {}, a = 0, o = r.length; a < o; a++)(t = r[a]) in this.attrs ? s[t] = this.attrs[t] : L.is(this.paper.customAttributes[t], "function") ? s[t] = this.paper.customAttributes[t].def : s[t] = L._availableAttrs[t]; return o - 1 ? s : s[r[0]] } if (this.attrs && null == e && L.is(t, "array")) { for (s = {}, a = 0, o = t.length; a < o; a++) s[t[a]] = this.attr(t[a]); return s } var l; for (var h in null != e && ((l = {})[t] = e), null == e && L.is(t, "object") && (l = t), l) d("raphael.attr." + h + "." + this.id, this, l[h]); if (l) { for (h in this.paper.customAttributes)
                            if (this.paper.customAttributes[O](h) && l[O](h) && L.is(this.paper.customAttributes[h], "function")) { var u = this.paper.customAttributes[h].apply(this, [].concat(l[h])); for (var c in this.attrs[h] = l[h], u) u[O](c) && (l[c] = u[c]) } l.text && "text" == this.type && (this.textpath.string = l.text), p(this, l) } return this }, t.toFront = function() { return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && L._tofront(this, this.paper), this }, t.toBack = function() { return this.removed || this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), L._toback(this, this.paper)), this }, t.insertAfter = function(t) { return this.removed || (t.constructor == L.st.constructor && (t = t[t.length - 1]), t.node.nextSibling ? t.node.parentNode.insertBefore(this.node, t.node.nextSibling) : t.node.parentNode.appendChild(this.node), L._insertafter(this, t, this.paper)), this }, t.insertBefore = function(t) { return this.removed || (t.constructor == L.st.constructor && (t = t[0]), t.node.parentNode.insertBefore(this.node, t.node), L._insertbefore(this, t, this.paper)), this }, t.blur = function(t) { var e = this.node.runtimeStyle,
                        i = e.filter; return i = i.replace(n, ""), 0 != +t ? (this.attrs.blur = t, e.filter = i + B + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+t || 1.5) + ")", e.margin = L.format("-{0}px 0 0 -{0}px", F(+t || 1.5))) : (e.filter = i, e.margin = 0, delete this.attrs.blur), this }, L._engine.path = function(t, e) { var i = X("shape");
                    i.style.cssText = u, i.coordsize = U + B + U, i.coordorigin = e.coordorigin; var n = new f(i, e),
                        r = { fill: "none", stroke: "#000" };
                    t && (r.path = t), n.type = "path", n.path = [], n.Path = "", p(n, r), e.canvas && e.canvas.appendChild(i); var s = X("skew"); return s.on = !0, i.appendChild(s), n.skew = s, n.transform(""), n }, L._engine.rect = function(t, e, i, n, r, s) { var a = L._rectPath(e, i, n, r, s),
                        o = t.path(a),
                        l = o.attrs; return o.X = l.x = e, o.Y = l.y = i, o.W = l.width = n, o.H = l.height = r, l.r = s, l.path = a, o.type = "rect", o }, L._engine.ellipse = function(t, e, i, n, r) { var s = t.path(); return s.attrs, s.X = e - n, s.Y = i - r, s.W = 2 * n, s.H = 2 * r, s.type = "ellipse", p(s, { cx: e, cy: i, rx: n, ry: r }), s }, L._engine.circle = function(t, e, i, n) { var r = t.path(); return r.attrs, r.X = e - n, r.Y = i - n, r.W = r.H = 2 * n, r.type = "circle", p(r, { cx: e, cy: i, r: n }), r }, L._engine.image = function(t, e, i, n, r, s) { var a = L._rectPath(i, n, r, s),
                        o = t.path(a).attr({ stroke: "none" }),
                        l = o.attrs,
                        h = o.node,
                        u = h.getElementsByTagName(H)[0]; return l.src = e, o.X = l.x = i, o.Y = l.y = n, o.W = l.width = r, o.H = l.height = s, l.path = a, o.type = "image", u.parentNode == h && h.removeChild(u), u.rotate = !0, u.src = e, u.type = "tile", o._.fillpos = [i, n], o._.fillsize = [r, s], h.appendChild(u), G(o, 1, 1, 0, 0, 0), o }, L._engine.text = function(t, e, i, n) { var r = X("shape"),
                        s = X("path"),
                        a = X("textpath");
                    e = e || 0, i = i || 0, n = n || "", s.v = L.format("m{0},{1}l{2},{1}", F(e * U), F(i * U), F(e * U) + 1), s.textpathok = !0, a.string = R(n), a.on = !0, r.style.cssText = u, r.coordsize = U + B + U, r.coordorigin = "0 0"; var o = new f(r, t),
                        l = { fill: "#000", stroke: "none", font: L._availableAttrs.font, text: n };
                    o.shape = r, o.path = s, o.textpath = a, o.type = "text", o.attrs.text = R(n), o.attrs.x = e, o.attrs.y = i, o.attrs.w = 1, o.attrs.h = 1, p(o, l), r.appendChild(a), r.appendChild(s), t.canvas.appendChild(r); var h = X("skew"); return h.on = !0, r.appendChild(h), o.skew = h, o.transform(""), o }, L._engine.setSize = function(t, e) { var i = this.canvas.style; return (this.width = t) == +t && (t += "px"), (this.height = e) == +e && (e += "px"), i.width = t, i.height = e, i.clip = "rect(0 " + t + " " + e + " 0)", this._viewBox && L._engine.setViewBox.apply(this, this._viewBox), this }, L._engine.setViewBox = function(t, e, i, n, r) { L.eve("raphael.setViewBox", this, this._viewBox, [t, e, i, n, r]); var s, a, o = this.getSize(),
                        l = o.width,
                        h = o.height; return r && (i * (s = h / n) < l && (t -= (l - i * s) / 2 / s), n * (a = l / i) < h && (e -= (h - n * a) / 2 / a)), this._viewBox = [t, e, i, n, !!r], this._viewBoxShift = { dx: -t, dy: -e, scale: o }, this.forEach(function(t) { t.transform("...") }), this }, L._engine.initWin = function(t) { var e = t.document;
                    e.styleSheets.length < 31 ? e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : e.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)"); try {!e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), X = function(t) { return e.createElement("<rvml:" + t + ' class="rvml">') } } catch (t) { X = function(t) { return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">') } } }, L._engine.initWin(L._g.win), L._engine.create = function() { var t = L._getContainer.apply(0, arguments),
                        e = t.container,
                        i = t.height,
                        n = t.width,
                        r = t.x,
                        s = t.y; if (!e) throw new Error("VML container not found."); var a = new L._Paper,
                        o = a.canvas = L._g.doc.createElement("div"),
                        l = o.style; return r = r || 0, s = s || 0, n = n || 512, i = i || 342, (a.width = n) == +n && (n += "px"), (a.height = i) == +i && (i += "px"), a.coordsize = 216e5 + B + 216e5, a.coordorigin = "0 0", a.span = L._g.doc.createElement("span"), a.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", o.appendChild(a.span), l.cssText = L.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", n, i), 1 == e ? (L._g.doc.body.appendChild(o), l.left = r + "px", l.top = s + "px", l.position = "absolute") : e.firstChild ? e.insertBefore(o, e.firstChild) : e.appendChild(o), a.renderfix = function() {}, a }, L.prototype.clear = function() { L.eve("raphael.clear", this), this.canvas.innerHTML = "", this.span = L._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null }, L.prototype.remove = function() { for (var t in L.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas), this) this[t] = "function" == typeof this[t] ? L._removedFactory(t) : null; return !0 }; var e = L.st; for (var i in t) t[O](i) && !e[O](i) && (e[i] = function(i) { return function() { var e = arguments; return this.forEach(function(t) { t[i].apply(t, e) }) } }(i)) } }.apply(e, n)) || (t.exports = r) }]) }),
function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e() }(this, function() { "use strict"; var t, r;

    function y() { return t.apply(null, arguments) }

    function o(t) { return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t) }

    function l(t) { return null != t && "[object Object]" === Object.prototype.toString.call(t) }

    function h(t) { return void 0 === t }

    function u(t) { return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t) }

    function c(t) { return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t) }

    function d(t, e) { var i, n = []; for (i = 0; i < t.length; ++i) n.push(e(t[i], i)); return n }

    function b(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

    function p(t, e) { for (var i in e) b(e, i) && (t[i] = e[i]); return b(e, "toString") && (t.toString = e.toString), b(e, "valueOf") && (t.valueOf = e.valueOf), t }

    function f(t, e, i, n) { return Ce(t, e, i, n, !0).utc() }

    function x(t) { return null == t._pf && (t._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), t._pf }

    function g(t) { if (null == t._isValid) { var e = x(t),
                i = r.call(e.parsedDateParts, function(t) { return null != t }),
                n = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i); if (t._strict && (n = n && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return n;
            t._isValid = n } return t._isValid }

    function m(t) { var e = f(NaN); return null != t ? p(x(e), t) : x(e).userInvalidated = !0, e } r = Array.prototype.some ? Array.prototype.some : function(t) { for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++)
            if (n in e && t.call(this, e[n], n, e)) return !0; return !1 }; var s = y.momentProperties = [];

    function v(t, e) { var i, n, r; if (h(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), h(e._i) || (t._i = e._i), h(e._f) || (t._f = e._f), h(e._l) || (t._l = e._l), h(e._strict) || (t._strict = e._strict), h(e._tzm) || (t._tzm = e._tzm), h(e._isUTC) || (t._isUTC = e._isUTC), h(e._offset) || (t._offset = e._offset), h(e._pf) || (t._pf = x(e)), h(e._locale) || (t._locale = e._locale), 0 < s.length)
            for (i = 0; i < s.length; i++) h(r = e[n = s[i]]) || (t[n] = r); return t } var e = !1;

    function w(t) { v(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === e && (e = !0, y.updateOffset(this), e = !1) }

    function _(t) { return t instanceof w || null != t && null != t._isAMomentObject }

    function S(t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t) }

    function C(t) { var e = +t,
            i = 0; return 0 !== e && isFinite(e) && (i = S(e)), i }

    function a(t, e, i) { var n, r = Math.min(t.length, e.length),
            s = Math.abs(t.length - e.length),
            a = 0; for (n = 0; n < r; n++)(i && t[n] !== e[n] || !i && C(t[n]) !== C(e[n])) && a++; return a + s }

    function k(t) {!1 === y.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t) }

    function i(r, s) { var a = !0; return p(function() { if (null != y.deprecationHandler && y.deprecationHandler(null, r), a) { for (var t, e = [], i = 0; i < arguments.length; i++) { if (t = "", "object" == typeof arguments[i]) { for (var n in t += "\n[" + i + "] ", arguments[0]) t += n + ": " + arguments[0][n] + ", ";
                        t = t.slice(0, -2) } else t = arguments[i];
                    e.push(t) } k(r + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + (new Error).stack), a = !1 } return s.apply(this, arguments) }, s) } var n, D = {};

    function T(t, e) { null != y.deprecationHandler && y.deprecationHandler(t, e), D[t] || (k(e), D[t] = !0) }

    function M(t) { return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t) }

    function A(t, e) { var i, n = p({}, t); for (i in e) b(e, i) && (l(t[i]) && l(e[i]) ? (n[i] = {}, p(n[i], t[i]), p(n[i], e[i])) : null != e[i] ? n[i] = e[i] : delete n[i]); for (i in t) b(t, i) && !b(e, i) && l(t[i]) && (n[i] = p({}, n[i])); return n }

    function E(t) { null != t && this.set(t) } y.suppressDeprecationWarnings = !1, y.deprecationHandler = null, n = Object.keys ? Object.keys : function(t) { var e, i = []; for (e in t) b(t, e) && i.push(e); return i }; var P = {};

    function L(t, e) { var i = t.toLowerCase();
        P[i] = P[i + "s"] = P[e] = t }

    function O(t) { return "string" == typeof t ? P[t] || P[t.toLowerCase()] : void 0 }

    function R(t) { var e, i, n = {}; for (i in t) b(t, i) && (e = O(i)) && (n[e] = t[i]); return n } var I = {};

    function F(t, e) { I[t] = e }

    function j(t, e, i) { var n = "" + Math.abs(t),
            r = e - n.length; return (0 <= t ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n } var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        H = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        z = {},
        B = {};

    function $(t, e, i, n) { var r = n; "string" == typeof n && (r = function() { return this[n]() }), t && (B[t] = r), e && (B[e[0]] = function() { return j(r.apply(this, arguments), e[1], e[2]) }), i && (B[i] = function() { return this.localeData().ordinal(r.apply(this, arguments), t) }) }

    function W(t, e) { return t.isValid() ? (e = Y(e, t.localeData()), z[e] = z[e] || function(n) { var t, r, e, s = n.match(N); for (t = 0, r = s.length; t < r; t++) B[s[t]] ? s[t] = B[s[t]] : s[t] = (e = s[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, ""); return function(t) { var e, i = ""; for (e = 0; e < r; e++) i += M(s[e]) ? s[e].call(t, n) : s[e]; return i } }(e), z[e](t)) : t.localeData().invalidDate() }

    function Y(t, e) { var i = 5;

        function n(t) { return e.longDateFormat(t) || t } for (H.lastIndex = 0; 0 <= i && H.test(t);) t = t.replace(H, n), H.lastIndex = 0, i -= 1; return t } var U = /\d/,
        q = /\d\d/,
        V = /\d{3}/,
        G = /\d{4}/,
        X = /[+-]?\d{6}/,
        Z = /\d\d?/,
        Q = /\d\d\d\d?/,
        J = /\d\d\d\d\d\d?/,
        K = /\d{1,3}/,
        tt = /\d{1,4}/,
        et = /[+-]?\d{1,6}/,
        it = /\d+/,
        nt = /[+-]?\d+/,
        rt = /Z|[+-]\d\d:?\d\d/gi,
        st = /Z|[+-]\d\d(?::?\d\d)?/gi,
        at = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        ot = {};

    function lt(t, i, n) { ot[t] = M(i) ? i : function(t, e) { return t && n ? n : i } }

    function ht(t) { return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var ut = {};

    function ct(t, i) { var e, n = i; for ("string" == typeof t && (t = [t]), u(i) && (n = function(t, e) { e[i] = C(t) }), e = 0; e < t.length; e++) ut[t[e]] = n }

    function dt(t, r) { ct(t, function(t, e, i, n) { i._w = i._w || {}, r(t, i._w, i, n) }) } var pt = 0,
        ft = 1,
        gt = 2,
        mt = 3,
        vt = 4,
        yt = 5,
        bt = 6,
        xt = 7,
        wt = 8;

    function _t(t) { return St(t) ? 366 : 365 }

    function St(t) { return t % 4 == 0 && t % 100 != 0 || t % 400 == 0 } $("Y", 0, 0, function() { var t = this.year(); return t <= 9999 ? "" + t : "+" + t }), $(0, ["YY", 2], 0, function() { return this.year() % 100 }), $(0, ["YYYY", 4], 0, "year"), $(0, ["YYYYY", 5], 0, "year"), $(0, ["YYYYYY", 6, !0], 0, "year"), L("year", "y"), F("year", 1), lt("Y", nt), lt("YY", Z, q), lt("YYYY", tt, G), lt("YYYYY", et, X), lt("YYYYYY", et, X), ct(["YYYYY", "YYYYYY"], pt), ct("YYYY", function(t, e) { e[pt] = 2 === t.length ? y.parseTwoDigitYear(t) : C(t) }), ct("YY", function(t, e) { e[pt] = y.parseTwoDigitYear(t) }), ct("Y", function(t, e) { e[pt] = parseInt(t, 10) }), y.parseTwoDigitYear = function(t) { return C(t) + (68 < C(t) ? 1900 : 2e3) }; var Ct, kt = Dt("FullYear", !0);

    function Dt(e, i) { return function(t) { return null != t ? (Mt(this, e, t), y.updateOffset(this, i), this) : Tt(this, e) } }

    function Tt(t, e) { return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN }

    function Mt(t, e, i) { t.isValid() && !isNaN(i) && ("FullYear" === e && St(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), At(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i)) }

    function At(t, e) { if (isNaN(t) || isNaN(e)) return NaN; var i = (e % 12 + 12) % 12; return t += (e - i) / 12, 1 === i ? St(t) ? 29 : 28 : 31 - i % 7 % 2 } Ct = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) { var e; for (e = 0; e < this.length; ++e)
            if (this[e] === t) return e; return -1 }, $("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), $("MMM", 0, 0, function(t) { return this.localeData().monthsShort(this, t) }), $("MMMM", 0, 0, function(t) { return this.localeData().months(this, t) }), L("month", "M"), F("month", 8), lt("M", Z), lt("MM", Z, q), lt("MMM", function(t, e) { return e.monthsShortRegex(t) }), lt("MMMM", function(t, e) { return e.monthsRegex(t) }), ct(["M", "MM"], function(t, e) { e[ft] = C(t) - 1 }), ct(["MMM", "MMMM"], function(t, e, i, n) { var r = i._locale.monthsParse(t, n, i._strict);
        null != r ? e[ft] = r : x(i).invalidMonth = t }); var Et = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Pt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Lt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function Ot(t, e) { var i; if (!t.isValid()) return t; if ("string" == typeof e)
            if (/^\d+$/.test(e)) e = C(e);
            else if (!u(e = t.localeData().monthsParse(e))) return t; return i = Math.min(t.date(), At(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t }

    function Rt(t) { return null != t ? (Ot(this, t), y.updateOffset(this, !0), this) : Tt(this, "Month") } var It = at,
        Ft = at;

    function jt() {
        function t(t, e) { return e.length - t.length } var e, i, n = [],
            r = [],
            s = []; for (e = 0; e < 12; e++) i = f([2e3, e]), n.push(this.monthsShort(i, "")), r.push(this.months(i, "")), s.push(this.months(i, "")), s.push(this.monthsShort(i, "")); for (n.sort(t), r.sort(t), s.sort(t), e = 0; e < 12; e++) n[e] = ht(n[e]), r[e] = ht(r[e]); for (e = 0; e < 24; e++) s[e] = ht(s[e]);
        this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i") }

    function Nt(t) { var e = new Date(Date.UTC.apply(null, arguments)); return t < 100 && 0 <= t && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e }

    function Ht(t, e, i) { var n = 7 + e - i; return -(7 + Nt(t, 0, n).getUTCDay() - e) % 7 + n - 1 }

    function zt(t, e, i, n, r) { var s, a, o = 1 + 7 * (e - 1) + (7 + i - n) % 7 + Ht(t, n, r); return a = o <= 0 ? _t(s = t - 1) + o : o > _t(t) ? (s = t + 1, o - _t(t)) : (s = t, o), { year: s, dayOfYear: a } }

    function Bt(t, e, i) { var n, r, s = Ht(t.year(), e, i),
            a = Math.floor((t.dayOfYear() - s - 1) / 7) + 1; return a < 1 ? n = a + $t(r = t.year() - 1, e, i) : a > $t(t.year(), e, i) ? (n = a - $t(t.year(), e, i), r = t.year() + 1) : (r = t.year(), n = a), { week: n, year: r } }

    function $t(t, e, i) { var n = Ht(t, e, i),
            r = Ht(t + 1, e, i); return (_t(t) - n + r) / 7 } $("w", ["ww", 2], "wo", "week"), $("W", ["WW", 2], "Wo", "isoWeek"), L("week", "w"), L("isoWeek", "W"), F("week", 5), F("isoWeek", 5), lt("w", Z), lt("ww", Z, q), lt("W", Z), lt("WW", Z, q), dt(["w", "ww", "W", "WW"], function(t, e, i, n) { e[n.substr(0, 1)] = C(t) }), $("d", 0, "do", "day"), $("dd", 0, 0, function(t) { return this.localeData().weekdaysMin(this, t) }), $("ddd", 0, 0, function(t) { return this.localeData().weekdaysShort(this, t) }), $("dddd", 0, 0, function(t) { return this.localeData().weekdays(this, t) }), $("e", 0, 0, "weekday"), $("E", 0, 0, "isoWeekday"), L("day", "d"), L("weekday", "e"), L("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), lt("d", Z), lt("e", Z), lt("E", Z), lt("dd", function(t, e) { return e.weekdaysMinRegex(t) }), lt("ddd", function(t, e) { return e.weekdaysShortRegex(t) }), lt("dddd", function(t, e) { return e.weekdaysRegex(t) }), dt(["dd", "ddd", "dddd"], function(t, e, i, n) { var r = i._locale.weekdaysParse(t, n, i._strict);
        null != r ? e.d = r : x(i).invalidWeekday = t }), dt(["d", "e", "E"], function(t, e, i, n) { e[n] = C(t) }); var Wt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Yt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Ut = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        qt = at,
        Vt = at,
        Gt = at;

    function Xt() {
        function t(t, e) { return e.length - t.length } var e, i, n, r, s, a = [],
            o = [],
            l = [],
            h = []; for (e = 0; e < 7; e++) i = f([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), r = this.weekdaysShort(i, ""), s = this.weekdays(i, ""), a.push(n), o.push(r), l.push(s), h.push(n), h.push(r), h.push(s); for (a.sort(t), o.sort(t), l.sort(t), h.sort(t), e = 0; e < 7; e++) o[e] = ht(o[e]), l[e] = ht(l[e]), h[e] = ht(h[e]);
        this._weekdaysRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i") }

    function Zt() { return this.hours() % 12 || 12 }

    function Qt(t, e) { $(t, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), e) }) }

    function Jt(t, e) { return e._meridiemParse } $("H", ["HH", 2], 0, "hour"), $("h", ["hh", 2], 0, Zt), $("k", ["kk", 2], 0, function() { return this.hours() || 24 }), $("hmm", 0, 0, function() { return "" + Zt.apply(this) + j(this.minutes(), 2) }), $("hmmss", 0, 0, function() { return "" + Zt.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2) }), $("Hmm", 0, 0, function() { return "" + this.hours() + j(this.minutes(), 2) }), $("Hmmss", 0, 0, function() { return "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2) }), Qt("a", !0), Qt("A", !1), L("hour", "h"), F("hour", 13), lt("a", Jt), lt("A", Jt), lt("H", Z), lt("h", Z), lt("k", Z), lt("HH", Z, q), lt("hh", Z, q), lt("kk", Z, q), lt("hmm", Q), lt("hmmss", J), lt("Hmm", Q), lt("Hmmss", J), ct(["H", "HH"], mt), ct(["k", "kk"], function(t, e, i) { var n = C(t);
        e[mt] = 24 === n ? 0 : n }), ct(["a", "A"], function(t, e, i) { i._isPm = i._locale.isPM(t), i._meridiem = t }), ct(["h", "hh"], function(t, e, i) { e[mt] = C(t), x(i).bigHour = !0 }), ct("hmm", function(t, e, i) { var n = t.length - 2;
        e[mt] = C(t.substr(0, n)), e[vt] = C(t.substr(n)), x(i).bigHour = !0 }), ct("hmmss", function(t, e, i) { var n = t.length - 4,
            r = t.length - 2;
        e[mt] = C(t.substr(0, n)), e[vt] = C(t.substr(n, 2)), e[yt] = C(t.substr(r)), x(i).bigHour = !0 }), ct("Hmm", function(t, e, i) { var n = t.length - 2;
        e[mt] = C(t.substr(0, n)), e[vt] = C(t.substr(n)) }), ct("Hmmss", function(t, e, i) { var n = t.length - 4,
            r = t.length - 2;
        e[mt] = C(t.substr(0, n)), e[vt] = C(t.substr(n, 2)), e[yt] = C(t.substr(r)) }); var Kt, te = Dt("Hours", !0),
        ee = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Pt, monthsShort: Lt, week: { dow: 0, doy: 6 }, weekdays: Wt, weekdaysMin: Ut, weekdaysShort: Yt, meridiemParse: /[ap]\.?m?\.?/i },
        ie = {},
        ne = {};

    function re(t) { return t ? t.toLowerCase().replace("_", "-") : t }

    function se(t) { var e = null; if (!ie[t] && "undefined" != typeof module && module && module.exports) try { e = Kt._abbr, require("./locale/" + t), ae(e) } catch (t) {}
        return ie[t] }

    function ae(t, e) { var i; return t && ((i = h(e) ? le(t) : oe(t, e)) ? Kt = i : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), Kt._abbr }

    function oe(t, e) { if (null === e) return delete ie[t], null; var i, n = ee; if (e.abbr = t, null != ie[t]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = ie[t]._config;
        else if (null != e.parentLocale)
            if (null != ie[e.parentLocale]) n = ie[e.parentLocale]._config;
            else { if (null == (i = se(e.parentLocale))) return ne[e.parentLocale] || (ne[e.parentLocale] = []), ne[e.parentLocale].push({ name: t, config: e }), null;
                n = i._config } return ie[t] = new E(A(n, e)), ne[t] && ne[t].forEach(function(t) { oe(t.name, t.config) }), ae(t), ie[t] }

    function le(t) { var e; if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Kt; if (!o(t)) { if (e = se(t)) return e;
            t = [t] } return function(t) { for (var e, i, n, r, s = 0; s < t.length;) { for (e = (r = re(t[s]).split("-")).length, i = (i = re(t[s + 1])) ? i.split("-") : null; 0 < e;) { if (n = se(r.slice(0, e).join("-"))) return n; if (i && i.length >= e && a(r, i, !0) >= e - 1) break;
                    e-- } s++ } return Kt }(t) }

    function he(t) { var e, i = t._a; return i && -2 === x(t).overflow && (e = i[ft] < 0 || 11 < i[ft] ? ft : i[gt] < 1 || i[gt] > At(i[pt], i[ft]) ? gt : i[mt] < 0 || 24 < i[mt] || 24 === i[mt] && (0 !== i[vt] || 0 !== i[yt] || 0 !== i[bt]) ? mt : i[vt] < 0 || 59 < i[vt] ? vt : i[yt] < 0 || 59 < i[yt] ? yt : i[bt] < 0 || 999 < i[bt] ? bt : -1, x(t)._overflowDayOfYear && (e < pt || gt < e) && (e = gt), x(t)._overflowWeeks && -1 === e && (e = xt), x(t)._overflowWeekday && -1 === e && (e = wt), x(t).overflow = e), t }

    function ue(t, e, i) { return null != t ? t : null != e ? e : i }

    function ce(t) { var e, i, n, r, s, a = []; if (!t._d) { var o, l; for (o = t, l = new Date(y.now()), n = o._useUTC ? [l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()] : [l.getFullYear(), l.getMonth(), l.getDate()], t._w && null == t._a[gt] && null == t._a[ft] && function(t) { var e, i, n, r, s, a, o, l; if (null != (e = t._w).GG || null != e.W || null != e.E) s = 1, a = 4, i = ue(e.GG, t._a[pt], Bt(ke(), 1, 4).year), n = ue(e.W, 1), ((r = ue(e.E, 1)) < 1 || 7 < r) && (l = !0);
                    else { s = t._locale._week.dow, a = t._locale._week.doy; var h = Bt(ke(), s, a);
                        i = ue(e.gg, t._a[pt], h.year), n = ue(e.w, h.week), null != e.d ? ((r = e.d) < 0 || 6 < r) && (l = !0) : null != e.e ? (r = e.e + s, (e.e < 0 || 6 < e.e) && (l = !0)) : r = s } n < 1 || n > $t(i, s, a) ? x(t)._overflowWeeks = !0 : null != l ? x(t)._overflowWeekday = !0 : (o = zt(i, n, r, s, a), t._a[pt] = o.year, t._dayOfYear = o.dayOfYear) }(t), null != t._dayOfYear && (s = ue(t._a[pt], n[pt]), (t._dayOfYear > _t(s) || 0 === t._dayOfYear) && (x(t)._overflowDayOfYear = !0), i = Nt(s, 0, t._dayOfYear), t._a[ft] = i.getUTCMonth(), t._a[gt] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = n[e]; for (; e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[mt] && 0 === t._a[vt] && 0 === t._a[yt] && 0 === t._a[bt] && (t._nextDay = !0, t._a[mt] = 0), t._d = (t._useUTC ? Nt : function(t, e, i, n, r, s, a) { var o = new Date(t, e, i, n, r, s, a); return t < 100 && 0 <= t && isFinite(o.getFullYear()) && o.setFullYear(t), o }).apply(null, a), r = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[mt] = 24), t._w && void 0 !== t._w.d && t._w.d !== r && (x(t).weekdayMismatch = !0) } } var de = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        pe = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        fe = /Z|[+-]\d\d(?::?\d\d)?/,
        ge = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        me = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        ve = /^\/?Date\((\-?\d+)/i;

    function ye(t) { var e, i, n, r, s, a, o = t._i,
            l = de.exec(o) || pe.exec(o); if (l) { for (x(t).iso = !0, e = 0, i = ge.length; e < i; e++)
                if (ge[e][1].exec(l[1])) { r = ge[e][0], n = !1 !== ge[e][2]; break } if (null == r) return void(t._isValid = !1); if (l[3]) { for (e = 0, i = me.length; e < i; e++)
                    if (me[e][1].exec(l[3])) { s = (l[2] || " ") + me[e][0]; break } if (null == s) return void(t._isValid = !1) } if (!n && null != s) return void(t._isValid = !1); if (l[4]) { if (!fe.exec(l[4])) return void(t._isValid = !1);
                a = "Z" } t._f = r + (s || "") + (a || ""), _e(t) } else t._isValid = !1 } var be = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/; var xe = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

    function we(t) { var e, i, n, r, s, a, o, l, h, u, c, d = be.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")); if (d) { var p = (r = d[4], s = d[3], a = d[2], o = d[5], l = d[6], h = d[7], c = [(u = parseInt(r, 10), u <= 49 ? 2e3 + u : u <= 999 ? 1900 + u : u), Lt.indexOf(s), parseInt(a, 10), parseInt(o, 10), parseInt(l, 10)], h && c.push(parseInt(h, 10)), c); if (i = p, n = t, (e = d[1]) && Yt.indexOf(e) !== new Date(i[0], i[1], i[2]).getDay() && (x(n).weekdayMismatch = !0, !(n._isValid = !1))) return;
            t._a = p, t._tzm = function(t, e, i) { if (t) return xe[t]; if (e) return 0; var n = parseInt(i, 10),
                    r = n % 100; return (n - r) / 100 * 60 + r }(d[8], d[9], d[10]), t._d = Nt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), x(t).rfc2822 = !0 } else t._isValid = !1 }

    function _e(t) { if (t._f !== y.ISO_8601)
            if (t._f !== y.RFC_2822) { t._a = [], x(t).empty = !0; var e, i, n, r, s, a, o, l, h = "" + t._i,
                    u = h.length,
                    c = 0; for (n = Y(t._f, t._locale).match(N) || [], e = 0; e < n.length; e++) r = n[e], (i = (h.match((m = r, v = t, b(ot, m) ? ot[m](v._strict, v._locale) : new RegExp(ht(m.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, n, r) { return e || i || n || r }))))) || [])[0]) && (0 < (s = h.substr(0, h.indexOf(i))).length && x(t).unusedInput.push(s), h = h.slice(h.indexOf(i) + i.length), c += i.length), B[r] ? (i ? x(t).empty = !1 : x(t).unusedTokens.push(r), a = r, l = t, null != (o = i) && b(ut, a) && ut[a](o, l._a, l, a)) : t._strict && !i && x(t).unusedTokens.push(r);
                x(t).charsLeftOver = u - c, 0 < h.length && x(t).unusedInput.push(h), t._a[mt] <= 12 && !0 === x(t).bigHour && 0 < t._a[mt] && (x(t).bigHour = void 0), x(t).parsedDateParts = t._a.slice(0), x(t).meridiem = t._meridiem, t._a[mt] = (d = t._locale, p = t._a[mt], null == (f = t._meridiem) ? p : null != d.meridiemHour ? d.meridiemHour(p, f) : (null != d.isPM && ((g = d.isPM(f)) && p < 12 && (p += 12), g || 12 !== p || (p = 0)), p)), ce(t), he(t) } else we(t);
        else ye(t); var d, p, f, g, m, v }

    function Se(t) { var e, i, n, r, s = t._i,
            a = t._f; return t._locale = t._locale || le(t._l), null === s || void 0 === a && "" === s ? m({ nullInput: !0 }) : ("string" == typeof s && (t._i = s = t._locale.preparse(s)), _(s) ? new w(he(s)) : (c(s) ? t._d = s : o(a) ? function(t) { var e, i, n, r, s; if (0 === t._f.length) return x(t).invalidFormat = !0, t._d = new Date(NaN); for (r = 0; r < t._f.length; r++) s = 0, e = v({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], _e(e), g(e) && (s += x(e).charsLeftOver, s += 10 * x(e).unusedTokens.length, x(e).score = s, (null == n || s < n) && (n = s, i = e));
            p(t, i || e) }(t) : a ? _e(t) : h(i = (e = t)._i) ? e._d = new Date(y.now()) : c(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? (n = e, null === (r = ve.exec(n._i)) ? (ye(n), !1 === n._isValid && (delete n._isValid, we(n), !1 === n._isValid && (delete n._isValid, y.createFromInputFallback(n)))) : n._d = new Date(+r[1])) : o(i) ? (e._a = d(i.slice(0), function(t) { return parseInt(t, 10) }), ce(e)) : l(i) ? function(t) { if (!t._d) { var e = R(t._i);
                t._a = d([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) { return t && parseInt(t, 10) }), ce(t) } }(e) : u(i) ? e._d = new Date(i) : y.createFromInputFallback(e), g(t) || (t._d = null), t)) }

    function Ce(t, e, i, n, r) { var s, a = {}; return !0 !== i && !1 !== i || (n = i, i = void 0), (l(t) && function(t) { if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length; var e; for (e in t)
                if (t.hasOwnProperty(e)) return !1; return !0 }(t) || o(t) && 0 === t.length) && (t = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = r, a._l = i, a._i = t, a._f = e, a._strict = n, (s = new w(he(Se(a))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s }

    function ke(t, e, i, n) { return Ce(t, e, i, n, !1) } y.createFromInputFallback = i("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) { t._d = new Date(t._i + (t._useUTC ? " UTC" : "")) }), y.ISO_8601 = function() {}, y.RFC_2822 = function() {}; var De = i("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var t = ke.apply(null, arguments); return this.isValid() && t.isValid() ? t < this ? this : t : m() }),
        Te = i("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var t = ke.apply(null, arguments); return this.isValid() && t.isValid() ? this < t ? this : t : m() });

    function Me(t, e) { var i, n; if (1 === e.length && o(e[0]) && (e = e[0]), !e.length) return ke(); for (i = e[0], n = 1; n < e.length; ++n) e[n].isValid() && !e[n][t](i) || (i = e[n]); return i } var Ae = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function Ee(t) { var e = R(t),
            i = e.year || 0,
            n = e.quarter || 0,
            r = e.month || 0,
            s = e.week || e.isoWeek || 0,
            a = e.day || 0,
            o = e.hour || 0,
            l = e.minute || 0,
            h = e.second || 0,
            u = e.millisecond || 0;
        this._isValid = function(t) { for (var e in t)
                if (-1 === Ct.call(Ae, e) || null != t[e] && isNaN(t[e])) return !1; for (var i = !1, n = 0; n < Ae.length; ++n)
                if (t[Ae[n]]) { if (i) return !1;
                    parseFloat(t[Ae[n]]) !== C(t[Ae[n]]) && (i = !0) } return !0 }(e), this._milliseconds = +u + 1e3 * h + 6e4 * l + 1e3 * o * 60 * 60, this._days = +a + 7 * s, this._months = +r + 3 * n + 12 * i, this._data = {}, this._locale = le(), this._bubble() }

    function Pe(t) { return t instanceof Ee }

    function Le(t) { return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t) }

    function Oe(t, i) { $(t, 0, 0, function() { var t = this.utcOffset(),
                e = "+"; return t < 0 && (t = -t, e = "-"), e + j(~~(t / 60), 2) + i + j(~~t % 60, 2) }) } Oe("Z", ":"), Oe("ZZ", ""), lt("Z", st), lt("ZZ", st), ct(["Z", "ZZ"], function(t, e, i) { i._useUTC = !0, i._tzm = Ie(st, t) }); var Re = /([\+\-]|\d\d)/gi;

    function Ie(t, e) { var i = (e || "").match(t); if (null === i) return null; var n = ((i[i.length - 1] || []) + "").match(Re) || ["-", 0, 0],
            r = 60 * n[1] + C(n[2]); return 0 === r ? 0 : "+" === n[0] ? r : -r }

    function Fe(t, e) { var i, n; return e._isUTC ? (i = e.clone(), n = (_(t) || c(t) ? t.valueOf() : ke(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + n), y.updateOffset(i, !1), i) : ke(t).local() }

    function je(t) { return 15 * -Math.round(t._d.getTimezoneOffset() / 15) }

    function Ne() { return !!this.isValid() && this._isUTC && 0 === this._offset } y.updateOffset = function() {}; var He = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        ze = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function Be(t, e) { var i, n, r, s, a, o, l = t,
            h = null; return Pe(t) ? l = { ms: t._milliseconds, d: t._days, M: t._months } : u(t) ? (l = {}, e ? l[e] = t : l.milliseconds = t) : (h = He.exec(t)) ? (i = "-" === h[1] ? -1 : 1, l = { y: 0, d: C(h[gt]) * i, h: C(h[mt]) * i, m: C(h[vt]) * i, s: C(h[yt]) * i, ms: C(Le(1e3 * h[bt])) * i }) : (h = ze.exec(t)) ? (i = "-" === h[1] ? -1 : 1, l = { y: $e(h[2], i), M: $e(h[3], i), w: $e(h[4], i), d: $e(h[5], i), h: $e(h[6], i), m: $e(h[7], i), s: $e(h[8], i) }) : null == l ? l = {} : "object" == typeof l && ("from" in l || "to" in l) && (s = ke(l.from), a = ke(l.to), r = s.isValid() && a.isValid() ? (a = Fe(a, s), s.isBefore(a) ? o = We(s, a) : ((o = We(a, s)).milliseconds = -o.milliseconds, o.months = -o.months), o) : { milliseconds: 0, months: 0 }, (l = {}).ms = r.milliseconds, l.M = r.months), n = new Ee(l), Pe(t) && b(t, "_locale") && (n._locale = t._locale), n }

    function $e(t, e) { var i = t && parseFloat(t.replace(",", ".")); return (isNaN(i) ? 0 : i) * e }

    function We(t, e) { var i = { milliseconds: 0, months: 0 }; return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i }

    function Ye(n, r) { return function(t, e) { var i; return null === e || isNaN(+e) || (T(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = t, t = e, e = i), Ue(this, Be(t = "string" == typeof t ? +t : t, e), n), this } }

    function Ue(t, e, i, n) { var r = e._milliseconds,
            s = Le(e._days),
            a = Le(e._months);
        t.isValid() && (n = null == n || n, a && Ot(t, Tt(t, "Month") + a * i), s && Mt(t, "Date", Tt(t, "Date") + s * i), r && t._d.setTime(t._d.valueOf() + r * i), n && y.updateOffset(t, s || a)) } Be.fn = Ee.prototype, Be.invalid = function() { return Be(NaN) }; var qe = Ye(1, "add"),
        Ve = Ye(-1, "subtract");

    function Ge(t, e) { var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            n = t.clone().add(i, "months"); return -(i + (e - n < 0 ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(i + 1, "months") - n))) || 0 }

    function Xe(t) { var e; return void 0 === t ? this._locale._abbr : (null != (e = le(t)) && (this._locale = e), this) } y.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", y.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]"; var Ze = i("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) { return void 0 === t ? this.localeData() : this.locale(t) });

    function Qe() { return this._locale }

    function Je(t, e) { $(0, [t, t.length], 0, e) }

    function Ke(t, e, i, n, r) { var s; return null == t ? Bt(this, n, r).year : ((s = $t(t, n, r)) < e && (e = s), function(t, e, i, n, r) { var s = zt(t, e, i, n, r),
                a = Nt(s.year, 0, s.dayOfYear); return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this }.call(this, t, e, i, n, r)) } $(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), $(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), Je("gggg", "weekYear"), Je("ggggg", "weekYear"), Je("GGGG", "isoWeekYear"), Je("GGGGG", "isoWeekYear"), L("weekYear", "gg"), L("isoWeekYear", "GG"), F("weekYear", 1), F("isoWeekYear", 1), lt("G", nt), lt("g", nt), lt("GG", Z, q), lt("gg", Z, q), lt("GGGG", tt, G), lt("gggg", tt, G), lt("GGGGG", et, X), lt("ggggg", et, X), dt(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, i, n) { e[n.substr(0, 2)] = C(t) }), dt(["gg", "GG"], function(t, e, i, n) { e[n] = y.parseTwoDigitYear(t) }), $("Q", 0, "Qo", "quarter"), L("quarter", "Q"), F("quarter", 7), lt("Q", U), ct("Q", function(t, e) { e[ft] = 3 * (C(t) - 1) }), $("D", ["DD", 2], "Do", "date"), L("date", "D"), F("date", 9), lt("D", Z), lt("DD", Z, q), lt("Do", function(t, e) { return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient }), ct(["D", "DD"], gt), ct("Do", function(t, e) { e[gt] = C(t.match(Z)[0]) }); var ti = Dt("Date", !0);
    $("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), L("dayOfYear", "DDD"), F("dayOfYear", 4), lt("DDD", K), lt("DDDD", V), ct(["DDD", "DDDD"], function(t, e, i) { i._dayOfYear = C(t) }), $("m", ["mm", 2], 0, "minute"), L("minute", "m"), F("minute", 14), lt("m", Z), lt("mm", Z, q), ct(["m", "mm"], vt); var ei = Dt("Minutes", !1);
    $("s", ["ss", 2], 0, "second"), L("second", "s"), F("second", 15), lt("s", Z), lt("ss", Z, q), ct(["s", "ss"], yt); var ii, ni = Dt("Seconds", !1); for ($("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), $(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), $(0, ["SSS", 3], 0, "millisecond"), $(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), $(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), $(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), $(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), $(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), $(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), L("millisecond", "ms"), F("millisecond", 16), lt("S", K, U), lt("SS", K, q), lt("SSS", K, V), ii = "SSSS"; ii.length <= 9; ii += "S") lt(ii, it);

    function ri(t, e) { e[bt] = C(1e3 * ("0." + t)) } for (ii = "S"; ii.length <= 9; ii += "S") ct(ii, ri); var si = Dt("Milliseconds", !1);
    $("z", 0, 0, "zoneAbbr"), $("zz", 0, 0, "zoneName"); var ai = w.prototype;

    function oi(t) { return t } ai.add = qe, ai.calendar = function(t, e) { var i = t || ke(),
            n = Fe(i, this).startOf("day"),
            r = y.calendarFormat(this, n) || "sameElse",
            s = e && (M(e[r]) ? e[r].call(this, i) : e[r]); return this.format(s || this.localeData().calendar(r, this, ke(i))) }, ai.clone = function() { return new w(this) }, ai.diff = function(t, e, i) { var n, r, s; if (!this.isValid()) return NaN; if (!(n = Fe(t, this)).isValid()) return NaN; switch (r = 6e4 * (n.utcOffset() - this.utcOffset()), e = O(e)) {
            case "year":
                s = Ge(this, n) / 12; break;
            case "month":
                s = Ge(this, n); break;
            case "quarter":
                s = Ge(this, n) / 3; break;
            case "second":
                s = (this - n) / 1e3; break;
            case "minute":
                s = (this - n) / 6e4; break;
            case "hour":
                s = (this - n) / 36e5; break;
            case "day":
                s = (this - n - r) / 864e5; break;
            case "week":
                s = (this - n - r) / 6048e5; break;
            default:
                s = this - n } return i ? s : S(s) }, ai.endOf = function(t) { return void 0 === (t = O(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")) }, ai.format = function(t) { t || (t = this.isUtc() ? y.defaultFormatUtc : y.defaultFormat); var e = W(this, t); return this.localeData().postformat(e) }, ai.from = function(t, e) { return this.isValid() && (_(t) && t.isValid() || ke(t).isValid()) ? Be({ to: this, from: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }, ai.fromNow = function(t) { return this.from(ke(), t) }, ai.to = function(t, e) { return this.isValid() && (_(t) && t.isValid() || ke(t).isValid()) ? Be({ from: this, to: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }, ai.toNow = function(t) { return this.to(ke(), t) }, ai.get = function(t) { return M(this[t = O(t)]) ? this[t]() : this }, ai.invalidAt = function() { return x(this).overflow }, ai.isAfter = function(t, e) { var i = _(t) ? t : ke(t); return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = O(e) || "millisecond") ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf()) }, ai.isBefore = function(t, e) { var i = _(t) ? t : ke(t); return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = O(e) || "millisecond") ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf()) }, ai.isBetween = function(t, e, i, n) { var r = _(t) ? t : ke(t),
            s = _(e) ? e : ke(e); return !!(this.isValid() && r.isValid() && s.isValid()) && ("(" === (n = n || "()")[0] ? this.isAfter(r, i) : !this.isBefore(r, i)) && (")" === n[1] ? this.isBefore(s, i) : !this.isAfter(s, i)) }, ai.isSame = function(t, e) { var i, n = _(t) ? t : ke(t); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = O(e) || "millisecond") ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf())) }, ai.isSameOrAfter = function(t, e) { return this.isSame(t, e) || this.isAfter(t, e) }, ai.isSameOrBefore = function(t, e) { return this.isSame(t, e) || this.isBefore(t, e) }, ai.isValid = function() { return g(this) }, ai.lang = Ze, ai.locale = Xe, ai.localeData = Qe, ai.max = Te, ai.min = De, ai.parsingFlags = function() { return p({}, x(this)) }, ai.set = function(t, e) { if ("object" == typeof t)
            for (var i = function(t) { var e = []; for (var i in t) e.push({ unit: i, priority: I[i] }); return e.sort(function(t, e) { return t.priority - e.priority }), e }(t = R(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]);
        else if (M(this[t = O(t)])) return this[t](e); return this }, ai.startOf = function(t) { switch (t = O(t)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0) } return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this }, ai.subtract = Ve, ai.toArray = function() { var t = this; return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()] }, ai.toObject = function() { var t = this; return { years: t.year(), months: t.month(), date: t.date(), hours: t.hours(), minutes: t.minutes(), seconds: t.seconds(), milliseconds: t.milliseconds() } }, ai.toDate = function() { return new Date(this.valueOf()) }, ai.toISOString = function(t) { if (!this.isValid()) return null; var e = !0 !== t,
            i = e ? this.clone().utc() : this; return i.year() < 0 || 9999 < i.year() ? W(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : M(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", W(i, "Z")) : W(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") }, ai.inspect = function() { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var t = "moment",
            e = "";
        this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z"); var i = "[" + t + '("]',
            n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            r = e + '[")]'; return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + r) }, ai.toJSON = function() { return this.isValid() ? this.toISOString() : null }, ai.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, ai.unix = function() { return Math.floor(this.valueOf() / 1e3) }, ai.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, ai.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, ai.year = kt, ai.isLeapYear = function() { return St(this.year()) }, ai.weekYear = function(t) { return Ke.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, ai.isoWeekYear = function(t) { return Ke.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4) }, ai.quarter = ai.quarters = function(t) { return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3) }, ai.month = Rt, ai.daysInMonth = function() { return At(this.year(), this.month()) }, ai.week = ai.weeks = function(t) { var e = this.localeData().week(this); return null == t ? e : this.add(7 * (t - e), "d") }, ai.isoWeek = ai.isoWeeks = function(t) { var e = Bt(this, 1, 4).week; return null == t ? e : this.add(7 * (t - e), "d") }, ai.weeksInYear = function() { var t = this.localeData()._week; return $t(this.year(), t.dow, t.doy) }, ai.isoWeeksInYear = function() { return $t(this.year(), 1, 4) }, ai.date = ti, ai.day = ai.days = function(t) { if (!this.isValid()) return null != t ? this : NaN; var e, i, n = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != t ? (e = t, i = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = i.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - n, "d")) : n }, ai.weekday = function(t) { if (!this.isValid()) return null != t ? this : NaN; var e = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == t ? e : this.add(t - e, "d") }, ai.isoWeekday = function(t) { if (!this.isValid()) return null != t ? this : NaN; if (null == t) return this.day() || 7; var e, i, n = (e = t, i = this.localeData(), "string" == typeof e ? i.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e); return this.day(this.day() % 7 ? n : n - 7) }, ai.dayOfYear = function(t) { var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == t ? e : this.add(t - e, "d") }, ai.hour = ai.hours = te, ai.minute = ai.minutes = ei, ai.second = ai.seconds = ni, ai.millisecond = ai.milliseconds = si, ai.utcOffset = function(t, e, i) { var n, r = this._offset || 0; if (!this.isValid()) return null != t ? this : NaN; if (null == t) return this._isUTC ? r : je(this); if ("string" == typeof t) { if (null === (t = Ie(st, t))) return this } else Math.abs(t) < 16 && !i && (t *= 60); return !this._isUTC && e && (n = je(this)), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), r !== t && (!e || this._changeInProgress ? Ue(this, Be(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, y.updateOffset(this, !0), this._changeInProgress = null)), this }, ai.utc = function(t) { return this.utcOffset(0, t) }, ai.local = function(t) { return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(je(this), "m")), this }, ai.parseZone = function() { if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) { var t = Ie(rt, this._i);
            null != t ? this.utcOffset(t) : this.utcOffset(0, !0) } return this }, ai.hasAlignedHourOffset = function(t) { return !!this.isValid() && (t = t ? ke(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0) }, ai.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, ai.isLocal = function() { return !!this.isValid() && !this._isUTC }, ai.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, ai.isUtc = Ne, ai.isUTC = Ne, ai.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, ai.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, ai.dates = i("dates accessor is deprecated. Use date instead.", ti), ai.months = i("months accessor is deprecated. Use month instead", Rt), ai.years = i("years accessor is deprecated. Use year instead", kt), ai.zone = i("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) { return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset() }), ai.isDSTShifted = i("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() { if (!h(this._isDSTShifted)) return this._isDSTShifted; var t = {}; if (v(t, this), (t = Se(t))._a) { var e = t._isUTC ? f(t._a) : ke(t._a);
            this._isDSTShifted = this.isValid() && 0 < a(t._a, e.toArray()) } else this._isDSTShifted = !1; return this._isDSTShifted }); var li = E.prototype;

    function hi(t, e, i, n) { var r = le(),
            s = f().set(n, e); return r[i](s, t) }

    function ui(t, e, i) { if (u(t) && (e = t, t = void 0), t = t || "", null != e) return hi(t, e, i, "month"); var n, r = []; for (n = 0; n < 12; n++) r[n] = hi(t, n, i, "month"); return r }

    function ci(t, e, i, n) { "boolean" == typeof t ? u(e) && (i = e, e = void 0) : (e = t, t = !1, u(i = e) && (i = e, e = void 0)), e = e || ""; var r, s = le(),
            a = t ? s._week.dow : 0; if (null != i) return hi(e, (i + a) % 7, n, "day"); var o = []; for (r = 0; r < 7; r++) o[r] = hi(e, (r + a) % 7, n, "day"); return o } li.calendar = function(t, e, i) { var n = this._calendar[t] || this._calendar.sameElse; return M(n) ? n.call(e, i) : n }, li.longDateFormat = function(t) { var e = this._longDateFormat[t],
            i = this._longDateFormat[t.toUpperCase()]; return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) { return t.slice(1) }), this._longDateFormat[t]) }, li.invalidDate = function() { return this._invalidDate }, li.ordinal = function(t) { return this._ordinal.replace("%d", t) }, li.preparse = oi, li.postformat = oi, li.relativeTime = function(t, e, i, n) { var r = this._relativeTime[i]; return M(r) ? r(t, e, i, n) : r.replace(/%d/i, t) }, li.pastFuture = function(t, e) { var i = this._relativeTime[0 < t ? "future" : "past"]; return M(i) ? i(e) : i.replace(/%s/i, e) }, li.set = function(t) { var e, i; for (i in t) M(e = t[i]) ? this[i] = e : this["_" + i] = e;
        this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) }, li.months = function(t, e) { return t ? o(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Et).test(e) ? "format" : "standalone"][t.month()] : o(this._months) ? this._months : this._months.standalone }, li.monthsShort = function(t, e) { return t ? o(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Et.test(e) ? "format" : "standalone"][t.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, li.monthsParse = function(t, e, i) { var n, r, s; if (this._monthsParseExact) return function(t, e, i) { var n, r, s, a = t.toLocaleLowerCase(); if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) s = f([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(s, "").toLocaleLowerCase(); return i ? "MMM" === e ? -1 !== (r = Ct.call(this._shortMonthsParse, a)) ? r : null : -1 !== (r = Ct.call(this._longMonthsParse, a)) ? r : null : "MMM" === e ? -1 !== (r = Ct.call(this._shortMonthsParse, a)) ? r : -1 !== (r = Ct.call(this._longMonthsParse, a)) ? r : null : -1 !== (r = Ct.call(this._longMonthsParse, a)) ? r : -1 !== (r = Ct.call(this._shortMonthsParse, a)) ? r : null }.call(this, t, e, i); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) { if (r = f([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(s.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n; if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n; if (!i && this._monthsParse[n].test(t)) return n } }, li.monthsRegex = function(t) { return this._monthsParseExact ? (b(this, "_monthsRegex") || jt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (b(this, "_monthsRegex") || (this._monthsRegex = Ft), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex) }, li.monthsShortRegex = function(t) { return this._monthsParseExact ? (b(this, "_monthsRegex") || jt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (b(this, "_monthsShortRegex") || (this._monthsShortRegex = It), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex) }, li.week = function(t) { return Bt(t, this._week.dow, this._week.doy).week }, li.firstDayOfYear = function() { return this._week.doy }, li.firstDayOfWeek = function() { return this._week.dow }, li.weekdays = function(t, e) { return t ? o(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : o(this._weekdays) ? this._weekdays : this._weekdays.standalone }, li.weekdaysMin = function(t) { return t ? this._weekdaysMin[t.day()] : this._weekdaysMin }, li.weekdaysShort = function(t) { return t ? this._weekdaysShort[t.day()] : this._weekdaysShort }, li.weekdaysParse = function(t, e, i) { var n, r, s; if (this._weekdaysParseExact) return function(t, e, i) { var n, r, s, a = t.toLocaleLowerCase(); if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) s = f([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(s, "").toLocaleLowerCase(); return i ? "dddd" === e ? -1 !== (r = Ct.call(this._weekdaysParse, a)) ? r : null : "ddd" === e ? -1 !== (r = Ct.call(this._shortWeekdaysParse, a)) ? r : null : -1 !== (r = Ct.call(this._minWeekdaysParse, a)) ? r : null : "dddd" === e ? -1 !== (r = Ct.call(this._weekdaysParse, a)) ? r : -1 !== (r = Ct.call(this._shortWeekdaysParse, a)) ? r : -1 !== (r = Ct.call(this._minWeekdaysParse, a)) ? r : null : "ddd" === e ? -1 !== (r = Ct.call(this._shortWeekdaysParse, a)) ? r : -1 !== (r = Ct.call(this._weekdaysParse, a)) ? r : -1 !== (r = Ct.call(this._minWeekdaysParse, a)) ? r : null : -1 !== (r = Ct.call(this._minWeekdaysParse, a)) ? r : -1 !== (r = Ct.call(this._weekdaysParse, a)) ? r : -1 !== (r = Ct.call(this._shortWeekdaysParse, a)) ? r : null }.call(this, t, e, i); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) { if (r = f([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(s.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n; if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n; if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n; if (!i && this._weekdaysParse[n].test(t)) return n } }, li.weekdaysRegex = function(t) { return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Xt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (b(this, "_weekdaysRegex") || (this._weekdaysRegex = qt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex) }, li.weekdaysShortRegex = function(t) { return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Xt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (b(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Vt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, li.weekdaysMinRegex = function(t) { return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Xt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (b(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Gt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, li.isPM = function(t) { return "p" === (t + "").toLowerCase().charAt(0) }, li.meridiem = function(t, e, i) { return 11 < t ? i ? "pm" : "PM" : i ? "am" : "AM" }, ae("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(t) { var e = t % 10; return t + (1 === C(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th") } }), y.lang = i("moment.lang is deprecated. Use moment.locale instead.", ae), y.langData = i("moment.langData is deprecated. Use moment.localeData instead.", le); var di = Math.abs;

    function pi(t, e, i, n) { var r = Be(e, i); return t._milliseconds += n * r._milliseconds, t._days += n * r._days, t._months += n * r._months, t._bubble() }

    function fi(t) { return t < 0 ? Math.floor(t) : Math.ceil(t) }

    function gi(t) { return 4800 * t / 146097 }

    function mi(t) { return 146097 * t / 4800 }

    function vi(t) { return function() { return this.as(t) } } var yi = vi("ms"),
        bi = vi("s"),
        xi = vi("m"),
        wi = vi("h"),
        _i = vi("d"),
        Si = vi("w"),
        Ci = vi("M"),
        ki = vi("y");

    function Di(t) { return function() { return this.isValid() ? this._data[t] : NaN } } var Ti = Di("milliseconds"),
        Mi = Di("seconds"),
        Ai = Di("minutes"),
        Ei = Di("hours"),
        Pi = Di("days"),
        Li = Di("months"),
        Oi = Di("years"),
        Ri = Math.round,
        Ii = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
        Fi = Math.abs;

    function ji(t) { return (0 < t) - (t < 0) || +t }

    function Ni() { if (!this.isValid()) return this.localeData().invalidDate(); var t, e, i = Fi(this._milliseconds) / 1e3,
            n = Fi(this._days),
            r = Fi(this._months);
        e = S((t = S(i / 60)) / 60), i %= 60, t %= 60; var s = S(r / 12),
            a = r %= 12,
            o = n,
            l = e,
            h = t,
            u = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
            c = this.asSeconds(); if (!c) return "P0D"; var d = c < 0 ? "-" : "",
            p = ji(this._months) !== ji(c) ? "-" : "",
            f = ji(this._days) !== ji(c) ? "-" : "",
            g = ji(this._milliseconds) !== ji(c) ? "-" : ""; return d + "P" + (s ? p + s + "Y" : "") + (a ? p + a + "M" : "") + (o ? f + o + "D" : "") + (l || h || u ? "T" : "") + (l ? g + l + "H" : "") + (h ? g + h + "M" : "") + (u ? g + u + "S" : "") } var Hi = Ee.prototype; return Hi.isValid = function() { return this._isValid }, Hi.abs = function() { var t = this._data; return this._milliseconds = di(this._milliseconds), this._days = di(this._days), this._months = di(this._months), t.milliseconds = di(t.milliseconds), t.seconds = di(t.seconds), t.minutes = di(t.minutes), t.hours = di(t.hours), t.months = di(t.months), t.years = di(t.years), this }, Hi.add = function(t, e) { return pi(this, t, e, 1) }, Hi.subtract = function(t, e) { return pi(this, t, e, -1) }, Hi.as = function(t) { if (!this.isValid()) return NaN; var e, i, n = this._milliseconds; if ("month" === (t = O(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + gi(e), "month" === t ? i : i / 12; switch (e = this._days + Math.round(mi(this._months)), t) {
            case "week":
                return e / 7 + n / 6048e5;
            case "day":
                return e + n / 864e5;
            case "hour":
                return 24 * e + n / 36e5;
            case "minute":
                return 1440 * e + n / 6e4;
            case "second":
                return 86400 * e + n / 1e3;
            case "millisecond":
                return Math.floor(864e5 * e) + n;
            default:
                throw new Error("Unknown unit " + t) } }, Hi.asMilliseconds = yi, Hi.asSeconds = bi, Hi.asMinutes = xi, Hi.asHours = wi, Hi.asDays = _i, Hi.asWeeks = Si, Hi.asMonths = Ci, Hi.asYears = ki, Hi.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12) : NaN }, Hi._bubble = function() { var t, e, i, n, r, s = this._milliseconds,
            a = this._days,
            o = this._months,
            l = this._data; return 0 <= s && 0 <= a && 0 <= o || s <= 0 && a <= 0 && o <= 0 || (s += 864e5 * fi(mi(o) + a), o = a = 0), l.milliseconds = s % 1e3, t = S(s / 1e3), l.seconds = t % 60, e = S(t / 60), l.minutes = e % 60, i = S(e / 60), l.hours = i % 24, o += r = S(gi(a += S(i / 24))), a -= fi(mi(r)), n = S(o / 12), o %= 12, l.days = a, l.months = o, l.years = n, this }, Hi.clone = function() { return Be(this) }, Hi.get = function(t) { return t = O(t), this.isValid() ? this[t + "s"]() : NaN }, Hi.milliseconds = Ti, Hi.seconds = Mi, Hi.minutes = Ai, Hi.hours = Ei, Hi.days = Pi, Hi.weeks = function() { return S(this.days() / 7) }, Hi.months = Li, Hi.years = Oi, Hi.humanize = function(t) { if (!this.isValid()) return this.localeData().invalidDate(); var e, i, n, r, s, a, o, l, h, u, c = this.localeData(),
            d = (e = !t, i = c, n = Be(this).abs(), r = Ri(n.as("s")), s = Ri(n.as("m")), a = Ri(n.as("h")), o = Ri(n.as("d")), l = Ri(n.as("M")), h = Ri(n.as("y")), (u = r <= Ii.ss && ["s", r] || r < Ii.s && ["ss", r] || s <= 1 && ["m"] || s < Ii.m && ["mm", s] || a <= 1 && ["h"] || a < Ii.h && ["hh", a] || o <= 1 && ["d"] || o < Ii.d && ["dd", o] || l <= 1 && ["M"] || l < Ii.M && ["MM", l] || h <= 1 && ["y"] || ["yy", h])[2] = e, u[3] = 0 < +this, u[4] = i, function(t, e, i, n, r) { return r.relativeTime(e || 1, !!i, t, n) }.apply(null, u)); return t && (d = c.pastFuture(+this, d)), c.postformat(d) }, Hi.toISOString = Ni, Hi.toString = Ni, Hi.toJSON = Ni, Hi.locale = Xe, Hi.localeData = Qe, Hi.toIsoString = i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ni), Hi.lang = Ze, $("X", 0, 0, "unix"), $("x", 0, 0, "valueOf"), lt("x", nt), lt("X", /[+-]?\d+(\.\d{1,3})?/), ct("X", function(t, e, i) { i._d = new Date(1e3 * parseFloat(t, 10)) }), ct("x", function(t, e, i) { i._d = new Date(C(t)) }), y.version = "2.23.0", t = ke, y.fn = ai, y.min = function() { return Me("isBefore", [].slice.call(arguments, 0)) }, y.max = function() { return Me("isAfter", [].slice.call(arguments, 0)) }, y.now = function() { return Date.now ? Date.now() : +new Date }, y.utc = f, y.unix = function(t) { return ke(1e3 * t) }, y.months = function(t, e) { return ui(t, e, "months") }, y.isDate = c, y.locale = ae, y.invalid = m, y.duration = Be, y.isMoment = _, y.weekdays = function(t, e, i) { return ci(t, e, i, "weekdays") }, y.parseZone = function() { return ke.apply(null, arguments).parseZone() }, y.localeData = le, y.isDuration = Pe, y.monthsShort = function(t, e) { return ui(t, e, "monthsShort") }, y.weekdaysMin = function(t, e, i) { return ci(t, e, i, "weekdaysMin") }, y.defineLocale = oe, y.updateLocale = function(t, e) { if (null != e) { var i, n, r = ee;
            null != (n = se(t)) && (r = n._config), (i = new E(e = A(r, e))).parentLocale = ie[t], ie[t] = i, ae(t) } else null != ie[t] && (null != ie[t].parentLocale ? ie[t] = ie[t].parentLocale : null != ie[t] && delete ie[t]); return ie[t] }, y.locales = function() { return n(ie) }, y.weekdaysShort = function(t, e, i) { return ci(t, e, i, "weekdaysShort") }, y.normalizeUnits = O, y.relativeTimeRounding = function(t) { return void 0 === t ? Ri : "function" == typeof t && (Ri = t, !0) }, y.relativeTimeThreshold = function(t, e) { return void 0 !== Ii[t] && (void 0 === e ? Ii[t] : (Ii[t] = e, "s" === t && (Ii.ss = e - 1), !0)) }, y.calendarFormat = function(t, e) { var i = t.diff(e, "days", !0); return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse" }, y.prototype = ai, y.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, y }),
function(t, e) { "function" == typeof define && define.amd ? define("Chartist", [], function() { return t.Chartist = e() }) : "object" == typeof module && module.exports ? module.exports = e() : t.Chartist = e() }(this, function() { var n = { version: "0.11.0" }; return function(h, f, g) { "use strict";
            g.namespaces = { svg: "http://www.w3.org/2000/svg", xmlns: "http://www.w3.org/2000/xmlns/", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", ct: "http://gionkunz.github.com/chartist-js/ct" }, g.noop = function(t) { return t }, g.alphaNumerate = function(t) { return String.fromCharCode(97 + t % 26) }, g.extend = function(t) { var e, i, n; for (t = t || {}, e = 1; e < arguments.length; e++)
                    for (var r in i = arguments[e]) "object" != typeof(n = i[r]) || null === n || n instanceof Array ? t[r] = n : t[r] = g.extend(t[r], n); return t }, g.replaceAll = function(t, e, i) { return t.replace(new RegExp(e, "g"), i) }, g.ensureUnit = function(t, e) { return "number" == typeof t && (t += e), t }, g.quantity = function(t) { if ("string" != typeof t) return { value: t }; var e = /^(\d+)\s*(.*)$/g.exec(t); return { value: +e[1], unit: e[2] || void 0 } }, g.querySelector = function(t) { return t instanceof Node ? t : f.querySelector(t) }, g.times = function(t) { return Array.apply(null, new Array(t)) }, g.sum = function(t, e) { return t + (e || 0) }, g.mapMultiply = function(e) { return function(t) { return t * e } }, g.mapAdd = function(e) { return function(t) { return t + e } }, g.serialMap = function(n, r) { var s = [],
                    t = Math.max.apply(null, n.map(function(t) { return t.length })); return g.times(t).forEach(function(t, e) { var i = n.map(function(t) { return t[e] });
                    s[e] = r.apply(null, i) }), s }, g.roundWithPrecision = function(t, e) { var i = Math.pow(10, e || g.precision); return Math.round(t * i) / i }, g.precision = 8, g.escapingMap = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }, g.serialize = function(t) { return null == t ? t : ("number" == typeof t ? t = "" + t : "object" == typeof t && (t = JSON.stringify({ data: t })), Object.keys(g.escapingMap).reduce(function(t, e) { return g.replaceAll(t, e, g.escapingMap[e]) }, t)) }, g.deserialize = function(t) { if ("string" != typeof t) return t;
                t = Object.keys(g.escapingMap).reduce(function(t, e) { return g.replaceAll(t, g.escapingMap[e], e) }, t); try { t = void 0 !== (t = JSON.parse(t)).data ? t.data : t } catch (t) {} return t }, g.createSvg = function(e, t, i, n) { var r; return t = t || "100%", i = i || "100%", Array.prototype.slice.call(e.querySelectorAll("svg")).filter(function(t) { return t.getAttributeNS(g.namespaces.xmlns, "ct") }).forEach(function(t) { e.removeChild(t) }), (r = new g.Svg("svg").attr({ width: t, height: i }).addClass(n))._node.style.width = t, r._node.style.height = i, e.appendChild(r._node), r }, g.normalizeData = function(t, e, i) { var n, r = { raw: t, normalized: {} }; return r.normalized.series = g.getDataArray({ series: t.series || [] }, e, i), n = r.normalized.series.every(function(t) { return t instanceof Array }) ? Math.max.apply(null, r.normalized.series.map(function(t) { return t.length })) : r.normalized.series.length, r.normalized.labels = (t.labels || []).slice(), Array.prototype.push.apply(r.normalized.labels, g.times(Math.max(0, n - r.normalized.labels.length)).map(function() { return "" })), e && g.reverseData(r.normalized), r }, g.safeHasProperty = function(t, e) { return null !== t && "object" == typeof t && t.hasOwnProperty(e) }, g.isDataHoleValue = function(t) { return null == t || "number" == typeof t && isNaN(t) }, g.reverseData = function(t) { t.labels.reverse(), t.series.reverse(); for (var e = 0; e < t.series.length; e++) "object" == typeof t.series[e] && void 0 !== t.series[e].data ? t.series[e].data.reverse() : t.series[e] instanceof Array && t.series[e].reverse() }, g.getDataArray = function(t, e, n) { return t.series.map(function t(e) { if (g.safeHasProperty(e, "value")) return t(e.value); if (g.safeHasProperty(e, "data")) return t(e.data); if (e instanceof Array) return e.map(t); if (!g.isDataHoleValue(e)) { if (n) { var i = {}; return "string" == typeof n ? i[n] = g.getNumberOrUndefined(e) : i.y = g.getNumberOrUndefined(e), i.x = e.hasOwnProperty("x") ? g.getNumberOrUndefined(e.x) : i.x, i.y = e.hasOwnProperty("y") ? g.getNumberOrUndefined(e.y) : i.y, i } return g.getNumberOrUndefined(e) } }) }, g.normalizePadding = function(t, e) { return e = e || 0, "number" == typeof t ? { top: t, right: t, bottom: t, left: t } : { top: "number" == typeof t.top ? t.top : e, right: "number" == typeof t.right ? t.right : e, bottom: "number" == typeof t.bottom ? t.bottom : e, left: "number" == typeof t.left ? t.left : e } }, g.getMetaData = function(t, e) { var i = t.data ? t.data[e] : t[e]; return i ? i.meta : void 0 }, g.orderOfMagnitude = function(t) { return Math.floor(Math.log(Math.abs(t)) / Math.LN10) }, g.projectLength = function(t, e, i) { return e / i.range * t }, g.getAvailableHeight = function(t, e) { return Math.max((g.quantity(e.height).value || t.height()) - (e.chartPadding.top + e.chartPadding.bottom) - e.axisX.offset, 0) }, g.getHighLow = function(t, e, r) { var s = { high: void 0 === (e = g.extend({}, e, r ? e["axis" + r.toUpperCase()] : {})).high ? -Number.MAX_VALUE : +e.high, low: void 0 === e.low ? Number.MAX_VALUE : +e.low },
                    a = void 0 === e.high,
                    o = void 0 === e.low; return (a || o) && function t(e) { if (void 0 !== e)
                        if (e instanceof Array)
                            for (var i = 0; i < e.length; i++) t(e[i]);
                        else { var n = r ? +e[r] : +e;
                            a && n > s.high && (s.high = n), o && n < s.low && (s.low = n) } }(t), (e.referenceValue || 0 === e.referenceValue) && (s.high = Math.max(e.referenceValue, s.high), s.low = Math.min(e.referenceValue, s.low)), s.high <= s.low && (0 === s.low ? s.high = 1 : s.low < 0 ? s.high = 0 : (0 < s.high || (s.high = 1), s.low = 0)), s }, g.isNumeric = function(t) { return null !== t && isFinite(t) }, g.isFalseyButZero = function(t) { return !t && 0 !== t }, g.getNumberOrUndefined = function(t) { return g.isNumeric(t) ? +t : void 0 }, g.isMultiValue = function(t) { return "object" == typeof t && ("x" in t || "y" in t) }, g.getMultiValue = function(t, e) { return g.isMultiValue(t) ? g.getNumberOrUndefined(t[e || "y"]) : g.getNumberOrUndefined(t) }, g.rho = function(t) {
                function i(t, e) { return t % e == 0 ? e : i(e, t % e) }

                function e(t) { return t * t + 1 } if (1 === t) return t; var n, r = 2,
                    s = 2; if (t % 2 == 0) return 2; for (; r = e(r) % t, s = e(e(s)) % t, 1 === (n = i(Math.abs(r - s), t));); return n }, g.getBounds = function(t, e, i, n) {
                function r(t, e) { return t === (t += e) && (t *= 1 + (0 < e ? d : -d)), t } var s, a, o, l = 0,
                    h = { high: e.high, low: e.low };
                h.valueRange = h.high - h.low, h.oom = g.orderOfMagnitude(h.valueRange), h.step = Math.pow(10, h.oom), h.min = Math.floor(h.low / h.step) * h.step, h.max = Math.ceil(h.high / h.step) * h.step, h.range = h.max - h.min, h.numberOfSteps = Math.round(h.range / h.step); var u = g.projectLength(t, h.step, h) < i,
                    c = n ? g.rho(h.range) : 0; if (n && g.projectLength(t, 1, h) >= i) h.step = 1;
                else if (n && c < h.step && g.projectLength(t, c, h) >= i) h.step = c;
                else
                    for (;;) { if (u && g.projectLength(t, h.step, h) <= i) h.step *= 2;
                        else { if (u || !(g.projectLength(t, h.step / 2, h) >= i)) break; if (h.step /= 2, n && h.step % 1 != 0) { h.step *= 2; break } } if (1e3 < l++) throw new Error("Exceeded maximum number of iterations while optimizing scale step!") }
                var d = 2221e-19; for (h.step = Math.max(h.step, d), a = h.min, o = h.max; a + h.step <= h.low;) a = r(a, h.step); for (; o - h.step >= h.high;) o = r(o, -h.step);
                h.min = a, h.max = o, h.range = h.max - h.min; var p = []; for (s = h.min; s <= h.max; s = r(s, h.step)) { var f = g.roundWithPrecision(s);
                    f !== p[p.length - 1] && p.push(f) } return h.values = p, h }, g.polarToCartesian = function(t, e, i, n) { var r = (n - 90) * Math.PI / 180; return { x: t + i * Math.cos(r), y: e + i * Math.sin(r) } }, g.createChartRect = function(t, e, i) { var n = !(!e.axisX && !e.axisY),
                    r = n ? e.axisY.offset : 0,
                    s = n ? e.axisX.offset : 0,
                    a = t.width() || g.quantity(e.width).value || 0,
                    o = t.height() || g.quantity(e.height).value || 0,
                    l = g.normalizePadding(e.chartPadding, i);
                a = Math.max(a, r + l.left + l.right), o = Math.max(o, s + l.top + l.bottom); var h = { padding: l, width: function() { return this.x2 - this.x1 }, height: function() { return this.y1 - this.y2 } }; return n ? ("start" === e.axisX.position ? (h.y2 = l.top + s, h.y1 = Math.max(o - l.bottom, h.y2 + 1)) : (h.y2 = l.top, h.y1 = Math.max(o - l.bottom - s, h.y2 + 1)), "start" === e.axisY.position ? (h.x1 = l.left + r, h.x2 = Math.max(a - l.right, h.x1 + 1)) : (h.x1 = l.left, h.x2 = Math.max(a - l.right - r, h.x1 + 1))) : (h.x1 = l.left, h.x2 = Math.max(a - l.right, h.x1 + 1), h.y2 = l.top, h.y1 = Math.max(o - l.bottom, h.y2 + 1)), h }, g.createGrid = function(t, e, i, n, r, s, a, o) { var l = {};
                l[i.units.pos + "1"] = t, l[i.units.pos + "2"] = t, l[i.counterUnits.pos + "1"] = n, l[i.counterUnits.pos + "2"] = n + r; var h = s.elem("line", l, a.join(" "));
                o.emit("draw", g.extend({ type: "grid", axis: i, index: e, group: s, element: h }, l)) }, g.createGridBackground = function(t, e, i, n) { var r = t.elem("rect", { x: e.x1, y: e.y2, width: e.width(), height: e.height() }, i, !0);
                n.emit("draw", { type: "gridBackground", group: t, element: r }) }, g.createLabel = function(t, e, i, n, r, s, a, o, l, h, u) { var c, d = {}; if (d[r.units.pos] = t + a[r.units.pos], d[r.counterUnits.pos] = a[r.counterUnits.pos], d[r.units.len] = e, d[r.counterUnits.len] = Math.max(0, s - 10), h) { var p = f.createElement("span");
                    p.className = l.join(" "), p.setAttribute("xmlns", g.namespaces.xhtml), p.innerText = n[i], p.style[r.units.len] = Math.round(d[r.units.len]) + "px", p.style[r.counterUnits.len] = Math.round(d[r.counterUnits.len]) + "px", c = o.foreignObject(p, g.extend({ style: "overflow: visible;" }, d)) } else c = o.elem("text", d, l.join(" ")).text(n[i]);
                u.emit("draw", g.extend({ type: "label", axis: r, index: i, group: o, element: c, text: n[i] }, d)) }, g.getSeriesOption = function(t, e, i) { if (t.name && e.series && e.series[t.name]) { var n = e.series[t.name]; return n.hasOwnProperty(i) ? n[i] : e[i] } return e[i] }, g.optionsProvider = function(t, i, n) {
                function e(t) { var e = r; if (r = g.extend({}, a), i)
                        for (s = 0; s < i.length; s++) h.matchMedia(i[s][0]).matches && (r = g.extend(r, i[s][1]));
                    n && t && n.emit("optionsChanged", { previousOptions: e, currentOptions: r }) } var r, s, a = g.extend({}, t),
                    o = []; if (!h.matchMedia) throw "window.matchMedia not found! Make sure you're using a polyfill."; if (i)
                    for (s = 0; s < i.length; s++) { var l = h.matchMedia(i[s][0]);
                        l.addListener(e), o.push(l) }
                return e(), { removeMediaQueryListeners: function() { o.forEach(function(t) { t.removeListener(e) }) }, getCurrentOptions: function() { return g.extend({}, r) } } }, g.splitIntoSegments = function(t, e, i) { i = g.extend({}, { increasingX: !1, fillHoles: !1 }, i); for (var n = [], r = !0, s = 0; s < t.length; s += 2) void 0 === g.getMultiValue(e[s / 2].value) ? i.fillHoles || (r = !0) : (i.increasingX && 2 <= s && t[s] <= t[s - 2] && (r = !0), r && (n.push({ pathCoordinates: [], valueData: [] }), r = !1), n[n.length - 1].pathCoordinates.push(t[s], t[s + 1]), n[n.length - 1].valueData.push(e[s / 2])); return n } }(window, document, n),
        function(t, e, g) { "use strict";
            g.Interpolation = {}, g.Interpolation.none = function(l) { return l = g.extend({}, { fillHoles: !1 }, l),
                    function(t, e) { for (var i = new g.Svg.Path, n = !0, r = 0; r < t.length; r += 2) { var s = t[r],
                                a = t[r + 1],
                                o = e[r / 2];
                            void 0 !== g.getMultiValue(o.value) ? (n ? i.move(s, a, !1, o) : i.line(s, a, !1, o), n = !1) : l.fillHoles || (n = !0) } return i } }, g.Interpolation.simple = function(c) { c = g.extend({}, { divisor: 2, fillHoles: !1 }, c); var d = 1 / Math.max(1, c.divisor); return function(t, e) { for (var i, n, r, s = new g.Svg.Path, a = 0; a < t.length; a += 2) { var o = t[a],
                            l = t[a + 1],
                            h = (o - i) * d,
                            u = e[a / 2];
                        void 0 !== u.value ? (void 0 === r ? s.move(o, l, !1, u) : s.curve(i + h, n, o - h, l, o, l, !1, u), i = o, n = l, r = u) : c.fillHoles || (i = o = r = void 0) } return s } }, g.Interpolation.cardinal = function(h) { h = g.extend({}, { tension: 1, fillHoles: !1 }, h); var u = Math.min(1, Math.max(0, h.tension)),
                    c = 1 - u; return function e(t, i) { var n = g.splitIntoSegments(t, i, { fillHoles: h.fillHoles }); if (n.length) { if (1 < n.length) { var r = []; return n.forEach(function(t) { r.push(e(t.pathCoordinates, t.valueData)) }), g.Svg.Path.join(r) } if (t = n[0].pathCoordinates, i = n[0].valueData, t.length <= 4) return g.Interpolation.none()(t, i); for (var s = (new g.Svg.Path).move(t[0], t[1], !1, i[0]), a = 0, o = t.length; a < o - 2; a += 2) { var l = [{ x: +t[a - 2], y: +t[a - 1] }, { x: +t[a], y: +t[a + 1] }, { x: +t[a + 2], y: +t[a + 3] }, { x: +t[a + 4], y: +t[a + 5] }];
                            o - 4 === a ? l[3] = l[2] : a || (l[0] = { x: +t[a], y: +t[a + 1] }), s.curve(u * (-l[0].x + 6 * l[1].x + l[2].x) / 6 + c * l[2].x, u * (-l[0].y + 6 * l[1].y + l[2].y) / 6 + c * l[2].y, u * (l[1].x + 6 * l[2].x - l[3].x) / 6 + c * l[2].x, u * (l[1].y + 6 * l[2].y - l[3].y) / 6 + c * l[2].y, l[2].x, l[2].y, !1, i[(a + 2) / 2]) } return s } return g.Interpolation.none()([]) } }, g.Interpolation.monotoneCubic = function(f) { return f = g.extend({}, { fillHoles: !1 }, f),
                    function e(t, i) { var n = g.splitIntoSegments(t, i, { fillHoles: f.fillHoles, increasingX: !0 }); if (n.length) { if (1 < n.length) { var r = []; return n.forEach(function(t) { r.push(e(t.pathCoordinates, t.valueData)) }), g.Svg.Path.join(r) } if (t = n[0].pathCoordinates, i = n[0].valueData, t.length <= 4) return g.Interpolation.none()(t, i); var s, a, o = [],
                                l = [],
                                h = t.length / 2,
                                u = [],
                                c = [],
                                d = [],
                                p = []; for (s = 0; s < h; s++) o[s] = t[2 * s], l[s] = t[2 * s + 1]; for (s = 0; s < h - 1; s++) d[s] = l[s + 1] - l[s], p[s] = o[s + 1] - o[s], c[s] = d[s] / p[s]; for (u[0] = c[0], u[h - 1] = c[h - 2], s = 1; s < h - 1; s++) 0 === c[s] || 0 === c[s - 1] || 0 < c[s - 1] != 0 < c[s] ? u[s] = 0 : (u[s] = 3 * (p[s - 1] + p[s]) / ((2 * p[s] + p[s - 1]) / c[s - 1] + (p[s] + 2 * p[s - 1]) / c[s]), isFinite(u[s]) || (u[s] = 0)); for (a = (new g.Svg.Path).move(o[0], l[0], !1, i[0]), s = 0; s < h - 1; s++) a.curve(o[s] + p[s] / 3, l[s] + u[s] * p[s] / 3, o[s + 1] - p[s] / 3, l[s + 1] - u[s + 1] * p[s] / 3, o[s + 1], l[s + 1], !1, i[s + 1]); return a } return g.Interpolation.none()([]) } }, g.Interpolation.step = function(u) { return u = g.extend({}, { postpone: !0, fillHoles: !1 }, u),
                    function(t, e) { for (var i, n, r, s = new g.Svg.Path, a = 0; a < t.length; a += 2) { var o = t[a],
                                l = t[a + 1],
                                h = e[a / 2];
                            void 0 !== h.value ? (void 0 === r ? s.move(o, l, !1, h) : (u.postpone ? s.line(o, n, !1, r) : s.line(i, l, !1, h), s.line(o, l, !1, h)), i = o, n = l, r = h) : u.fillHoles || (i = n = r = void 0) } return s } } }(window, document, n),
        function(t, e, i) { "use strict";
            n.EventEmitter = function() { var n = []; return { addEventHandler: function(t, e) { n[t] = n[t] || [], n[t].push(e) }, removeEventHandler: function(t, e) { n[t] && (e ? (n[t].splice(n[t].indexOf(e), 1), 0 === n[t].length && delete n[t]) : delete n[t]) }, emit: function(e, i) { n[e] && n[e].forEach(function(t) { t(i) }), n["*"] && n["*"].forEach(function(t) { t(e, i) }) } } } }(window, document),
        function(t, e, s) { "use strict";
            s.Class = { extend: function(t, e) { var i = e || this.prototype || s.Class,
                        n = Object.create(i);
                    s.Class.cloneDefinitions(n, t); var r = function() { var t, e = n.constructor || function() {}; return t = this === s ? Object.create(n) : this, e.apply(t, Array.prototype.slice.call(arguments, 0)), t }; return r.prototype = n, r.super = i, r.extend = this.extend, r }, cloneDefinitions: function() { var t = function(t) { var e = []; if (t.length)
                                for (var i = 0; i < t.length; i++) e.push(t[i]); return e }(arguments),
                        i = t[0]; return t.splice(1, t.length - 1).forEach(function(e) { Object.getOwnPropertyNames(e).forEach(function(t) { delete i[t], Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t)) }) }), i } } }(window, document, n),
        function(s, t, a) { "use strict";
            a.Base = a.Class.extend({ constructor: function(t, e, i, n, r) { this.container = a.querySelector(t), this.data = e || {}, this.data.labels = this.data.labels || [], this.data.series = this.data.series || [], this.defaultOptions = i, this.options = n, this.responsiveOptions = r, this.eventEmitter = a.EventEmitter(), this.supportsForeignObject = a.Svg.isSupported("Extensibility"), this.supportsAnimations = a.Svg.isSupported("AnimationEventsAttribute"), this.resizeListener = function() { this.update() }.bind(this), this.container && (this.container.__chartist__ && this.container.__chartist__.detach(), this.container.__chartist__ = this), this.initializeTimeoutId = setTimeout(function() { s.addEventListener("resize", this.resizeListener), this.optionsProvider = a.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter), this.eventEmitter.addEventHandler("optionsChanged", function() { this.update() }.bind(this)), this.options.plugins && this.options.plugins.forEach(function(t) { t instanceof Array ? t[0](this, t[1]) : t(this) }.bind(this)), this.eventEmitter.emit("data", { type: "initial", data: this.data }), this.createChart(this.optionsProvider.getCurrentOptions()), this.initializeTimeoutId = void 0 }.bind(this), 0) }, optionsProvider: void 0, container: void 0, svg: void 0, eventEmitter: void 0, createChart: function() { throw new Error("Base chart type can't be instantiated!") }, update: function(t, e, i) { return t && (this.data = t || {}, this.data.labels = this.data.labels || [], this.data.series = this.data.series || [], this.eventEmitter.emit("data", { type: "update", data: this.data })), e && (this.options = a.extend({}, i ? this.options : this.defaultOptions, e), this.initializeTimeoutId || (this.optionsProvider.removeMediaQueryListeners(), this.optionsProvider = a.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter))), this.initializeTimeoutId || this.createChart(this.optionsProvider.getCurrentOptions()), this }, detach: function() { return this.initializeTimeoutId ? s.clearTimeout(this.initializeTimeoutId) : (s.removeEventListener("resize", this.resizeListener), this.optionsProvider.removeMediaQueryListeners()), this }, on: function(t, e) { return this.eventEmitter.addEventHandler(t, e), this }, off: function(t, e) { return this.eventEmitter.removeEventHandler(t, e), this }, version: a.version, supportsForeignObject: !1 }) }(window, document, n),
        function(t, a, l) { "use strict";
            l.Svg = l.Class.extend({ constructor: function(t, e, i, n, r) { t instanceof Element ? this._node = t : (this._node = a.createElementNS(l.namespaces.svg, t), "svg" === t && this.attr({ "xmlns:ct": l.namespaces.ct })), e && this.attr(e), i && this.addClass(i), n && (r && n._node.firstChild ? n._node.insertBefore(this._node, n._node.firstChild) : n._node.appendChild(this._node)) }, attr: function(i, t) { return "string" == typeof i ? t ? this._node.getAttributeNS(t, i) : this._node.getAttribute(i) : (Object.keys(i).forEach(function(t) { if (void 0 !== i[t])
                            if (-1 !== t.indexOf(":")) { var e = t.split(":");
                                this._node.setAttributeNS(l.namespaces[e[0]], t, i[t]) } else this._node.setAttribute(t, i[t]) }.bind(this)), this) }, elem: function(t, e, i, n) { return new l.Svg(t, e, i, this, n) }, parent: function() { return this._node.parentNode instanceof SVGElement ? new l.Svg(this._node.parentNode) : null }, root: function() { for (var t = this._node;
                        "svg" !== t.nodeName;) t = t.parentNode; return new l.Svg(t) }, querySelector: function(t) { var e = this._node.querySelector(t); return e ? new l.Svg(e) : null }, querySelectorAll: function(t) { var e = this._node.querySelectorAll(t); return e.length ? new l.Svg.List(e) : null }, getNode: function() { return this._node }, foreignObject: function(t, e, i, n) { if ("string" == typeof t) { var r = a.createElement("div");
                        r.innerHTML = t, t = r.firstChild } t.setAttribute("xmlns", l.namespaces.xmlns); var s = this.elem("foreignObject", e, i, n); return s._node.appendChild(t), s }, text: function(t) { return this._node.appendChild(a.createTextNode(t)), this }, empty: function() { for (; this._node.firstChild;) this._node.removeChild(this._node.firstChild); return this }, remove: function() { return this._node.parentNode.removeChild(this._node), this.parent() }, replace: function(t) { return this._node.parentNode.replaceChild(t._node, this._node), t }, append: function(t, e) { return e && this._node.firstChild ? this._node.insertBefore(t._node, this._node.firstChild) : this._node.appendChild(t._node), this }, classes: function() { return this._node.getAttribute("class") ? this._node.getAttribute("class").trim().split(/\s+/) : [] }, addClass: function(t) { return this._node.setAttribute("class", this.classes(this._node).concat(t.trim().split(/\s+/)).filter(function(t, e, i) { return i.indexOf(t) === e }).join(" ")), this }, removeClass: function(t) { var e = t.trim().split(/\s+/); return this._node.setAttribute("class", this.classes(this._node).filter(function(t) { return -1 === e.indexOf(t) }).join(" ")), this }, removeAllClasses: function() { return this._node.setAttribute("class", ""), this }, height: function() { return this._node.getBoundingClientRect().height }, width: function() { return this._node.getBoundingClientRect().width }, animate: function(t, i, o) { return void 0 === i && (i = !0), Object.keys(t).forEach(function(a) {
                        function e(e, t) { var i, n, r, s = {};
                            e.easing && (r = e.easing instanceof Array ? e.easing : l.Svg.Easing[e.easing], delete e.easing), e.begin = l.ensureUnit(e.begin, "ms"), e.dur = l.ensureUnit(e.dur, "ms"), r && (e.calcMode = "spline", e.keySplines = r.join(" "), e.keyTimes = "0;1"), t && (e.fill = "freeze", s[a] = e.from, this.attr(s), n = l.quantity(e.begin || 0).value, e.begin = "indefinite"), i = this.elem("animate", l.extend({ attributeName: a }, e)), t && setTimeout(function() { try { i._node.beginElement() } catch (t) { s[a] = e.to, this.attr(s), i.remove() } }.bind(this), n), o && i._node.addEventListener("beginEvent", function() { o.emit("animationBegin", { element: this, animate: i._node, params: e }) }.bind(this)), i._node.addEventListener("endEvent", function() { o && o.emit("animationEnd", { element: this, animate: i._node, params: e }), t && (s[a] = e.to, this.attr(s), i.remove()) }.bind(this)) } t[a] instanceof Array ? t[a].forEach(function(t) { e.bind(this)(t, !1) }.bind(this)) : e.bind(this)(t[a], i) }.bind(this)), this } }), l.Svg.isSupported = function(t) { return a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#" + t, "1.1") }, l.Svg.Easing = { easeInSine: [.47, 0, .745, .715], easeOutSine: [.39, .575, .565, 1], easeInOutSine: [.445, .05, .55, .95], easeInQuad: [.55, .085, .68, .53], easeOutQuad: [.25, .46, .45, .94], easeInOutQuad: [.455, .03, .515, .955], easeInCubic: [.55, .055, .675, .19], easeOutCubic: [.215, .61, .355, 1], easeInOutCubic: [.645, .045, .355, 1], easeInQuart: [.895, .03, .685, .22], easeOutQuart: [.165, .84, .44, 1], easeInOutQuart: [.77, 0, .175, 1], easeInQuint: [.755, .05, .855, .06], easeOutQuint: [.23, 1, .32, 1], easeInOutQuint: [.86, 0, .07, 1], easeInExpo: [.95, .05, .795, .035], easeOutExpo: [.19, 1, .22, 1], easeInOutExpo: [1, 0, 0, 1], easeInCirc: [.6, .04, .98, .335], easeOutCirc: [.075, .82, .165, 1], easeInOutCirc: [.785, .135, .15, .86], easeInBack: [.6, -.28, .735, .045], easeOutBack: [.175, .885, .32, 1.275], easeInOutBack: [.68, -.55, .265, 1.55] }, l.Svg.List = l.Class.extend({ constructor: function(t) { var n = this;
                    this.svgElements = []; for (var e = 0; e < t.length; e++) this.svgElements.push(new l.Svg(t[e]));
                    Object.keys(l.Svg.prototype).filter(function(t) { return -1 === ["constructor", "parent", "querySelector", "querySelectorAll", "replace", "append", "classes", "height", "width"].indexOf(t) }).forEach(function(i) { n[i] = function() { var e = Array.prototype.slice.call(arguments, 0); return n.svgElements.forEach(function(t) { l.Svg.prototype[i].apply(t, e) }), n } }) } }) }(window, document, n),
        function(t, e, o) { "use strict";

            function h(t, e, i, n, r, s) { var a = o.extend({ command: r ? t.toLowerCase() : t.toUpperCase() }, e, s ? { data: s } : {});
                i.splice(n, 0, a) }

            function r(r, s) { r.forEach(function(i, n) { a[i.command.toLowerCase()].forEach(function(t, e) { s(i, t, n, e, r) }) }) } var a = { m: ["x", "y"], l: ["x", "y"], c: ["x1", "y1", "x2", "y2", "x", "y"], a: ["rx", "ry", "xAr", "lAf", "sf", "x", "y"] },
                i = { accuracy: 3 };
            o.Svg.Path = o.Class.extend({ constructor: function(t, e) { this.pathElements = [], this.pos = 0, this.close = t, this.options = o.extend({}, i, e) }, position: function(t) { return void 0 !== t ? (this.pos = Math.max(0, Math.min(this.pathElements.length, t)), this) : this.pos }, remove: function(t) { return this.pathElements.splice(this.pos, t), this }, move: function(t, e, i, n) { return h("M", { x: +t, y: +e }, this.pathElements, this.pos++, i, n), this }, line: function(t, e, i, n) { return h("L", { x: +t, y: +e }, this.pathElements, this.pos++, i, n), this }, curve: function(t, e, i, n, r, s, a, o) { return h("C", { x1: +t, y1: +e, x2: +i, y2: +n, x: +r, y: +s }, this.pathElements, this.pos++, a, o), this }, arc: function(t, e, i, n, r, s, a, o, l) { return h("A", { rx: +t, ry: +e, xAr: +i, lAf: +n, sf: +r, x: +s, y: +a }, this.pathElements, this.pos++, o, l), this }, scale: function(i, n) { return r(this.pathElements, function(t, e) { t[e] *= "x" === e[0] ? i : n }), this }, translate: function(i, n) { return r(this.pathElements, function(t, e) { t[e] += "x" === e[0] ? i : n }), this }, transform: function(a) { return r(this.pathElements, function(t, e, i, n, r) { var s = a(t, e, i, n, r);
                        (s || 0 === s) && (t[e] = s) }), this }, parse: function(t) { var e = t.replace(/([A-Za-z])([0-9])/g, "$1 $2").replace(/([0-9])([A-Za-z])/g, "$1 $2").split(/[\s,]+/).reduce(function(t, e) { return e.match(/[A-Za-z]/) && t.push([]), t[t.length - 1].push(e), t }, []); "Z" === e[e.length - 1][0].toUpperCase() && e.pop(); var i = e.map(function(n) { var t = n.shift(),
                                e = a[t.toLowerCase()]; return o.extend({ command: t }, e.reduce(function(t, e, i) { return t[e] = +n[i], t }, {})) }),
                        n = [this.pos, 0]; return Array.prototype.push.apply(n, i), Array.prototype.splice.apply(this.pathElements, n), this.pos += i.length, this }, stringify: function() { var n = Math.pow(10, this.options.accuracy); return this.pathElements.reduce(function(t, e) { var i = a[e.command.toLowerCase()].map(function(t) { return this.options.accuracy ? Math.round(e[t] * n) / n : e[t] }.bind(this)); return t + e.command + i.join(",") }.bind(this), "") + (this.close ? "Z" : "") }, clone: function(t) { var e = new o.Svg.Path(t || this.close); return e.pos = this.pos, e.pathElements = this.pathElements.slice().map(function(t) { return o.extend({}, t) }), e.options = o.extend({}, this.options), e }, splitByCommand: function(e) { var i = [new o.Svg.Path]; return this.pathElements.forEach(function(t) { t.command === e.toUpperCase() && 0 !== i[i.length - 1].pathElements.length && i.push(new o.Svg.Path), i[i.length - 1].pathElements.push(t) }), i } }), o.Svg.Path.elementDescriptions = a, o.Svg.Path.join = function(t, e, i) { for (var n = new o.Svg.Path(e, i), r = 0; r < t.length; r++)
                    for (var s = t[r], a = 0; a < s.pathElements.length; a++) n.pathElements.push(s.pathElements[a]); return n } }(window, document, n),
        function(t, e, d) { "use strict"; var r = { x: { pos: "x", len: "width", dir: "horizontal", rectStart: "x1", rectEnd: "x2", rectOffset: "y2" }, y: { pos: "y", len: "height", dir: "vertical", rectStart: "y2", rectEnd: "y1", rectOffset: "x1" } };
            d.Axis = d.Class.extend({ constructor: function(t, e, i, n) { this.units = t, this.counterUnits = t === r.x ? r.y : r.x, this.chartRect = e, this.axisLength = e[t.rectEnd] - e[t.rectStart], this.gridOffset = e[t.rectOffset], this.ticks = i, this.options = n }, createGridAndLabels: function(r, s, a, o, l) { var h = o["axis" + this.units.pos.toUpperCase()],
                        u = this.ticks.map(this.projectValue.bind(this)),
                        c = this.ticks.map(h.labelInterpolationFnc);
                    u.forEach(function(t, e) { var i, n = { x: 0, y: 0 };
                        i = u[e + 1] ? u[e + 1] - t : Math.max(this.axisLength - t, 30), d.isFalseyButZero(c[e]) && "" !== c[e] || ("x" === this.units.pos ? (t = this.chartRect.x1 + t, n.x = o.axisX.labelOffset.x, "start" === o.axisX.position ? n.y = this.chartRect.padding.top + o.axisX.labelOffset.y + (a ? 5 : 20) : n.y = this.chartRect.y1 + o.axisX.labelOffset.y + (a ? 5 : 20)) : (t = this.chartRect.y1 - t, n.y = o.axisY.labelOffset.y - (a ? i : 0), "start" === o.axisY.position ? n.x = a ? this.chartRect.padding.left + o.axisY.labelOffset.x : this.chartRect.x1 - 10 : n.x = this.chartRect.x2 + o.axisY.labelOffset.x + 10), h.showGrid && d.createGrid(t, e, this, this.gridOffset, this.chartRect[this.counterUnits.len](), r, [o.classNames.grid, o.classNames[this.units.dir]], l), h.showLabel && d.createLabel(t, i, e, c, this, h.offset, n, s, [o.classNames.label, o.classNames[this.units.dir], "start" === h.position ? o.classNames[h.position] : o.classNames.end], a, l)) }.bind(this)) }, projectValue: function(t, e, i) { throw new Error("Base axis can't be instantiated!") } }), d.Axis.units = r }(window, document, n),
        function(t, e, s) { "use strict";
            s.AutoScaleAxis = s.Axis.extend({ constructor: function(t, e, i, n) { var r = n.highLow || s.getHighLow(e, n, t.pos);
                    this.bounds = s.getBounds(i[t.rectEnd] - i[t.rectStart], r, n.scaleMinSpace || 20, n.onlyInteger), this.range = { min: this.bounds.min, max: this.bounds.max }, s.AutoScaleAxis.super.constructor.call(this, t, i, this.bounds.values, n) }, projectValue: function(t) { return this.axisLength * (+s.getMultiValue(t, this.units.pos) - this.bounds.min) / this.bounds.range } }) }(window, document, n),
        function(t, e, s) { "use strict";
            s.FixedScaleAxis = s.Axis.extend({ constructor: function(t, e, i, n) { var r = n.highLow || s.getHighLow(e, n, t.pos);
                    this.divisor = n.divisor || 1, this.ticks = n.ticks || s.times(this.divisor).map(function(t, e) { return r.low + (r.high - r.low) / this.divisor * e }.bind(this)), this.ticks.sort(function(t, e) { return t - e }), this.range = { min: r.low, max: r.high }, s.FixedScaleAxis.super.constructor.call(this, t, i, this.ticks, n), this.stepLength = this.axisLength / this.divisor }, projectValue: function(t) { return this.axisLength * (+s.getMultiValue(t, this.units.pos) - this.range.min) / (this.range.max - this.range.min) } }) }(window, document, n),
        function(t, e, s) { "use strict";
            s.StepAxis = s.Axis.extend({ constructor: function(t, e, i, n) { s.StepAxis.super.constructor.call(this, t, i, n.ticks, n); var r = Math.max(1, n.ticks.length - (n.stretch ? 1 : 0));
                    this.stepLength = this.axisLength / r }, projectValue: function(t, e) { return this.stepLength * e } }) }(window, document, n),
        function(t, e, m) { "use strict"; var r = { axisX: { offset: 30, position: "end", labelOffset: { x: 0, y: 0 }, showLabel: !0, showGrid: !0, labelInterpolationFnc: m.noop, type: void 0 }, axisY: { offset: 40, position: "start", labelOffset: { x: 0, y: 0 }, showLabel: !0, showGrid: !0, labelInterpolationFnc: m.noop, type: void 0, scaleMinSpace: 20, onlyInteger: !1 }, width: void 0, height: void 0, showLine: !0, showPoint: !0, showArea: !1, areaBase: 0, lineSmooth: !0, showGridBackground: !1, low: void 0, high: void 0, chartPadding: { top: 15, right: 15, bottom: 5, left: 10 }, fullWidth: !1, reverseData: !1, classNames: { chart: "ct-chart-line", label: "ct-label", labelGroup: "ct-labels", series: "ct-series", line: "ct-line", point: "ct-point", area: "ct-area", grid: "ct-grid", gridGroup: "ct-grids", gridBackground: "ct-grid-background", vertical: "ct-vertical", horizontal: "ct-horizontal", start: "ct-start", end: "ct-end" } };
            m.Line = m.Base.extend({ constructor: function(t, e, i, n) { m.Line.super.constructor.call(this, t, e, r, m.extend({}, r, i), n) }, createChart: function(u) { var c = m.normalizeData(this.data, u.reverseData, !0);
                    this.svg = m.createSvg(this.container, u.width, u.height, u.classNames.chart); var d, p, t = this.svg.elem("g").addClass(u.classNames.gridGroup),
                        f = this.svg.elem("g"),
                        e = this.svg.elem("g").addClass(u.classNames.labelGroup),
                        g = m.createChartRect(this.svg, u, r.padding);
                    d = void 0 === u.axisX.type ? new m.StepAxis(m.Axis.units.x, c.normalized.series, g, m.extend({}, u.axisX, { ticks: c.normalized.labels, stretch: u.fullWidth })) : u.axisX.type.call(m, m.Axis.units.x, c.normalized.series, g, u.axisX), p = void 0 === u.axisY.type ? new m.AutoScaleAxis(m.Axis.units.y, c.normalized.series, g, m.extend({}, u.axisY, { high: m.isNumeric(u.high) ? u.high : u.axisY.high, low: m.isNumeric(u.low) ? u.low : u.axisY.low })) : u.axisY.type.call(m, m.Axis.units.y, c.normalized.series, g, u.axisY), d.createGridAndLabels(t, e, this.supportsForeignObject, u, this.eventEmitter), p.createGridAndLabels(t, e, this.supportsForeignObject, u, this.eventEmitter), u.showGridBackground && m.createGridBackground(t, g, u.classNames.gridBackground, this.eventEmitter), c.raw.series.forEach(function(n, r) { var i = f.elem("g");
                        i.attr({ "ct:series-name": n.name, "ct:meta": m.serialize(n.meta) }), i.addClass([u.classNames.series, n.className || u.classNames.series + "-" + m.alphaNumerate(r)].join(" ")); var s = [],
                            a = [];
                        c.normalized.series[r].forEach(function(t, e) { var i = { x: g.x1 + d.projectValue(t, e, c.normalized.series[r]), y: g.y1 - p.projectValue(t, e, c.normalized.series[r]) };
                            s.push(i.x, i.y), a.push({ value: t, valueIndex: e, meta: m.getMetaData(n, e) }) }.bind(this)); var t = { lineSmooth: m.getSeriesOption(n, u, "lineSmooth"), showPoint: m.getSeriesOption(n, u, "showPoint"), showLine: m.getSeriesOption(n, u, "showLine"), showArea: m.getSeriesOption(n, u, "showArea"), areaBase: m.getSeriesOption(n, u, "areaBase") },
                            e = ("function" == typeof t.lineSmooth ? t.lineSmooth : t.lineSmooth ? m.Interpolation.monotoneCubic() : m.Interpolation.none())(s, a); if (t.showPoint && e.pathElements.forEach(function(t) { var e = i.elem("line", { x1: t.x, y1: t.y, x2: t.x + .01, y2: t.y }, u.classNames.point).attr({ "ct:value": [t.data.value.x, t.data.value.y].filter(m.isNumeric).join(","), "ct:meta": m.serialize(t.data.meta) });
                                this.eventEmitter.emit("draw", { type: "point", value: t.data.value, index: t.data.valueIndex, meta: t.data.meta, series: n, seriesIndex: r, axisX: d, axisY: p, group: i, element: e, x: t.x, y: t.y }) }.bind(this)), t.showLine) { var o = i.elem("path", { d: e.stringify() }, u.classNames.line, !0);
                            this.eventEmitter.emit("draw", { type: "line", values: c.normalized.series[r], path: e.clone(), chartRect: g, index: r, series: n, seriesIndex: r, seriesMeta: n.meta, axisX: d, axisY: p, group: i, element: o }) } if (t.showArea && p.range) { var l = Math.max(Math.min(t.areaBase, p.range.max), p.range.min),
                                h = g.y1 - p.projectValue(l);
                            e.splitByCommand("M").filter(function(t) { return 1 < t.pathElements.length }).map(function(t) { var e = t.pathElements[0],
                                    i = t.pathElements[t.pathElements.length - 1]; return t.clone(!0).position(0).remove(1).move(e.x, h).line(e.x, e.y).position(t.pathElements.length + 1).line(i.x, h) }).forEach(function(t) { var e = i.elem("path", { d: t.stringify() }, u.classNames.area, !0);
                                this.eventEmitter.emit("draw", { type: "area", values: c.normalized.series[r], path: t.clone(), series: n, seriesIndex: r, axisX: d, axisY: p, chartRect: g, index: r, group: i, element: e }) }.bind(this)) } }.bind(this)), this.eventEmitter.emit("created", { bounds: p.bounds, chartRect: g, axisX: d, axisY: p, svg: this.svg, options: u }) } }) }(window, document, n),
        function(t, e, _) { "use strict"; var a = { axisX: { offset: 30, position: "end", labelOffset: { x: 0, y: 0 }, showLabel: !0, showGrid: !0, labelInterpolationFnc: _.noop, scaleMinSpace: 30, onlyInteger: !1 }, axisY: { offset: 40, position: "start", labelOffset: { x: 0, y: 0 }, showLabel: !0, showGrid: !0, labelInterpolationFnc: _.noop, scaleMinSpace: 20, onlyInteger: !1 }, width: void 0, height: void 0, high: void 0, low: void 0, referenceValue: 0, chartPadding: { top: 15, right: 15, bottom: 5, left: 10 }, seriesBarDistance: 15, stackBars: !1, stackMode: "accumulate", horizontalBars: !1, distributeSeries: !1, reverseData: !1, showGridBackground: !1, classNames: { chart: "ct-chart-bar", horizontalBars: "ct-horizontal-bars", label: "ct-label", labelGroup: "ct-labels", series: "ct-series", bar: "ct-bar", grid: "ct-grid", gridGroup: "ct-grids", gridBackground: "ct-grid-background", vertical: "ct-vertical", horizontal: "ct-horizontal", start: "ct-start", end: "ct-end" } };
            _.Bar = _.Base.extend({ constructor: function(t, e, i, n) { _.Bar.super.constructor.call(this, t, e, a, _.extend({}, a, i), n) }, createChart: function(p) { var f, t;
                    p.distributeSeries ? (f = _.normalizeData(this.data, p.reverseData, p.horizontalBars ? "x" : "y")).normalized.series = f.normalized.series.map(function(t) { return [t] }) : f = _.normalizeData(this.data, p.reverseData, p.horizontalBars ? "x" : "y"), this.svg = _.createSvg(this.container, p.width, p.height, p.classNames.chart + (p.horizontalBars ? " " + p.classNames.horizontalBars : "")); var e = this.svg.elem("g").addClass(p.classNames.gridGroup),
                        i = this.svg.elem("g"),
                        n = this.svg.elem("g").addClass(p.classNames.labelGroup); if (p.stackBars && 0 !== f.normalized.series.length) { var r = _.serialMap(f.normalized.series, function() { return Array.prototype.slice.call(arguments).map(function(t) { return t }).reduce(function(t, e) { return { x: t.x + (e && e.x) || 0, y: t.y + (e && e.y) || 0 } }, { x: 0, y: 0 }) });
                        t = _.getHighLow([r], p, p.horizontalBars ? "x" : "y") } else t = _.getHighLow(f.normalized.series, p, p.horizontalBars ? "x" : "y");
                    t.high = +p.high || (0 === p.high ? 0 : t.high), t.low = +p.low || (0 === p.low ? 0 : t.low); var g, s, m, v, y, b = _.createChartRect(this.svg, p, a.padding);
                    s = p.distributeSeries && p.stackBars ? f.normalized.labels.slice(0, 1) : f.normalized.labels, p.horizontalBars ? (g = v = void 0 === p.axisX.type ? new _.AutoScaleAxis(_.Axis.units.x, f.normalized.series, b, _.extend({}, p.axisX, { highLow: t, referenceValue: 0 })) : p.axisX.type.call(_, _.Axis.units.x, f.normalized.series, b, _.extend({}, p.axisX, { highLow: t, referenceValue: 0 })), m = y = void 0 === p.axisY.type ? new _.StepAxis(_.Axis.units.y, f.normalized.series, b, { ticks: s }) : p.axisY.type.call(_, _.Axis.units.y, f.normalized.series, b, p.axisY)) : (m = v = void 0 === p.axisX.type ? new _.StepAxis(_.Axis.units.x, f.normalized.series, b, { ticks: s }) : p.axisX.type.call(_, _.Axis.units.x, f.normalized.series, b, p.axisX), g = y = void 0 === p.axisY.type ? new _.AutoScaleAxis(_.Axis.units.y, f.normalized.series, b, _.extend({}, p.axisY, { highLow: t, referenceValue: 0 })) : p.axisY.type.call(_, _.Axis.units.y, f.normalized.series, b, _.extend({}, p.axisY, { highLow: t, referenceValue: 0 }))); var x = p.horizontalBars ? b.x1 + g.projectValue(0) : b.y1 - g.projectValue(0),
                        w = [];
                    m.createGridAndLabels(e, n, this.supportsForeignObject, p, this.eventEmitter), g.createGridAndLabels(e, n, this.supportsForeignObject, p, this.eventEmitter), p.showGridBackground && _.createGridBackground(e, b, p.classNames.gridBackground, this.eventEmitter), f.raw.series.forEach(function(l, h) { var u, c, d = h - (f.raw.series.length - 1) / 2;
                        u = p.distributeSeries && !p.stackBars ? m.axisLength / f.normalized.series.length / 2 : p.distributeSeries && p.stackBars ? m.axisLength / 2 : m.axisLength / f.normalized.series[h].length / 2, (c = i.elem("g")).attr({ "ct:series-name": l.name, "ct:meta": _.serialize(l.meta) }), c.addClass([p.classNames.series, l.className || p.classNames.series + "-" + _.alphaNumerate(h)].join(" ")), f.normalized.series[h].forEach(function(t, e) { var i, n, r, s; if (s = p.distributeSeries && !p.stackBars ? h : p.distributeSeries && p.stackBars ? 0 : e, i = p.horizontalBars ? { x: b.x1 + g.projectValue(t && t.x ? t.x : 0, e, f.normalized.series[h]), y: b.y1 - m.projectValue(t && t.y ? t.y : 0, s, f.normalized.series[h]) } : { x: b.x1 + m.projectValue(t && t.x ? t.x : 0, s, f.normalized.series[h]), y: b.y1 - g.projectValue(t && t.y ? t.y : 0, e, f.normalized.series[h]) }, m instanceof _.StepAxis && (m.options.stretch || (i[m.units.pos] += u * (p.horizontalBars ? -1 : 1)), i[m.units.pos] += p.stackBars || p.distributeSeries ? 0 : d * p.seriesBarDistance * (p.horizontalBars ? -1 : 1)), r = w[e] || x, w[e] = r - (x - i[m.counterUnits.pos]), void 0 !== t) { var a = {};
                                a[m.units.pos + "1"] = i[m.units.pos], a[m.units.pos + "2"] = i[m.units.pos], !p.stackBars || "accumulate" !== p.stackMode && p.stackMode ? (a[m.counterUnits.pos + "1"] = x, a[m.counterUnits.pos + "2"] = i[m.counterUnits.pos]) : (a[m.counterUnits.pos + "1"] = r, a[m.counterUnits.pos + "2"] = w[e]), a.x1 = Math.min(Math.max(a.x1, b.x1), b.x2), a.x2 = Math.min(Math.max(a.x2, b.x1), b.x2), a.y1 = Math.min(Math.max(a.y1, b.y2), b.y1), a.y2 = Math.min(Math.max(a.y2, b.y2), b.y1); var o = _.getMetaData(l, e);
                                n = c.elem("line", a, p.classNames.bar).attr({ "ct:value": [t.x, t.y].filter(_.isNumeric).join(","), "ct:meta": _.serialize(o) }), this.eventEmitter.emit("draw", _.extend({ type: "bar", value: t, index: e, meta: o, series: l, seriesIndex: h, axisX: v, axisY: y, chartRect: b, group: c, element: n }, a)) } }.bind(this)) }.bind(this)), this.eventEmitter.emit("created", { bounds: g.bounds, chartRect: b, axisX: v, axisY: y, svg: this.svg, options: p }) } }) }(window, document, n),
        function(t, e, T) { "use strict";

            function M(t, e, i) { var n = e.x > t.x; return n && "explode" === i || !n && "implode" === i ? "start" : n && "implode" === i || !n && "explode" === i ? "end" : "middle" } var r = { width: void 0, height: void 0, chartPadding: 5, classNames: { chartPie: "ct-chart-pie", chartDonut: "ct-chart-donut", series: "ct-series", slicePie: "ct-slice-pie", sliceDonut: "ct-slice-donut", sliceDonutSolid: "ct-slice-donut-solid", label: "ct-label" }, startAngle: 0, total: void 0, donut: !1, donutSolid: !1, donutWidth: 60, showLabel: !0, labelOffset: 0, labelPosition: "inside", labelInterpolationFnc: T.noop, labelDirection: "neutral", reverseData: !1, ignoreEmptyValues: !1 };
            T.Pie = T.Base.extend({ constructor: function(t, e, i, n) { T.Pie.super.constructor.call(this, t, e, r, T.extend({}, r, i), n) }, createChart: function(m) { var v, t, y, b, x, w = T.normalizeData(this.data),
                        _ = [],
                        S = m.startAngle;
                    this.svg = T.createSvg(this.container, m.width, m.height, m.donut ? m.classNames.chartDonut : m.classNames.chartPie), t = T.createChartRect(this.svg, m, r.padding), y = Math.min(t.width() / 2, t.height() / 2), x = m.total || w.normalized.series.reduce(function(t, e) { return t + e }, 0); var C = T.quantity(m.donutWidth); "%" === C.unit && (C.value *= y / 100), y -= m.donut && !m.donutSolid ? C.value / 2 : 0, b = "outside" === m.labelPosition || m.donut && !m.donutSolid ? y : "center" === m.labelPosition ? 0 : m.donutSolid ? y - C.value / 2 : y / 2, b += m.labelOffset; var k = { x: t.x1 + t.width() / 2, y: t.y2 + t.height() / 2 },
                        D = 1 === w.raw.series.filter(function(t) { return t.hasOwnProperty("value") ? 0 !== t.value : 0 !== t }).length;
                    w.raw.series.forEach(function(t, e) { _[e] = this.svg.elem("g", null, null) }.bind(this)), m.showLabel && (v = this.svg.elem("g", null, null)), w.raw.series.forEach(function(t, e) { if (0 !== w.normalized.series[e] || !m.ignoreEmptyValues) { _[e].attr({ "ct:series-name": t.name }), _[e].addClass([m.classNames.series, t.className || m.classNames.series + "-" + T.alphaNumerate(e)].join(" ")); var i = 0 < x ? S + w.normalized.series[e] / x * 360 : 0,
                                n = Math.max(0, S - (0 === e || D ? 0 : .2));
                            359.99 <= i - n && (i = n + 359.99); var r, s, a, o = T.polarToCartesian(k.x, k.y, y, n),
                                l = T.polarToCartesian(k.x, k.y, y, i),
                                h = new T.Svg.Path(!m.donut || m.donutSolid).move(l.x, l.y).arc(y, y, 0, 180 < i - S, 0, o.x, o.y);
                            m.donut ? m.donutSolid && (a = y - C.value, r = T.polarToCartesian(k.x, k.y, a, S - (0 === e || D ? 0 : .2)), s = T.polarToCartesian(k.x, k.y, a, i), h.line(r.x, r.y), h.arc(a, a, 0, 180 < i - S, 1, s.x, s.y)) : h.line(k.x, k.y); var u = m.classNames.slicePie;
                            m.donut && (u = m.classNames.sliceDonut, m.donutSolid && (u = m.classNames.sliceDonutSolid)); var c = _[e].elem("path", { d: h.stringify() }, u); if (c.attr({ "ct:value": w.normalized.series[e], "ct:meta": T.serialize(t.meta) }), m.donut && !m.donutSolid && (c._node.style.strokeWidth = C.value + "px"), this.eventEmitter.emit("draw", { type: "slice", value: w.normalized.series[e], totalDataSum: x, index: e, meta: t.meta, series: t, group: _[e], element: c, path: h.clone(), center: k, radius: y, startAngle: S, endAngle: i }), m.showLabel) { var d, p;
                                d = 1 === w.raw.series.length ? { x: k.x, y: k.y } : T.polarToCartesian(k.x, k.y, b, S + (i - S) / 2), p = w.normalized.labels && !T.isFalseyButZero(w.normalized.labels[e]) ? w.normalized.labels[e] : w.normalized.series[e]; var f = m.labelInterpolationFnc(p, e); if (f || 0 === f) { var g = v.elem("text", { dx: d.x, dy: d.y, "text-anchor": M(k, d, m.labelDirection) }, m.classNames.label).text("" + f);
                                    this.eventEmitter.emit("draw", { type: "label", index: e, group: v, element: g, text: "" + f, x: d.x, y: d.y }) } } S = i } }.bind(this)), this.eventEmitter.emit("created", { chartRect: t, svg: this.svg, options: m }) }, determineAnchorPosition: M }) }(window, document, n), n }),
function() { var m, _, t, e, o = [].slice,
        u = function(t, e) { return function() { return t.apply(e, arguments) } },
        r = {}.hasOwnProperty,
        s = function(t, e) {
            function i() { this.constructor = t } for (var n in e) r.call(e, n) && (t[n] = e[n]); return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t },
        l = [].indexOf || function(t) { for (var e = 0, i = this.length; e < i; e++)
                if (e in this && this[e] === t) return e; return -1 };
    _ = window.Morris = {}, m = jQuery, _.EventEmitter = function() {
        function t() {} return t.prototype.on = function(t, e) { return null == this.handlers && (this.handlers = {}), null == this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this }, t.prototype.fire = function() { var t, e, i, n, r, s, a; if (i = arguments[0], t = 2 <= arguments.length ? o.call(arguments, 1) : [], null != this.handlers && null != this.handlers[i]) { for (a = [], n = 0, r = (s = this.handlers[i]).length; n < r; n++) e = s[n], a.push(e.apply(null, t)); return a } }, t }(), _.commas = function(t) { var e, i, n, r; return null != t ? (n = t < 0 ? "-" : "", e = Math.abs(t), n += (i = Math.floor(e).toFixed(0)).replace(/(?=(?:\d{3})+$)(?!^)/g, ","), (r = e.toString()).length > i.length && (n += r.slice(i.length)), n) : "-" }, _.pad2 = function(t) { return (t < 10 ? "0" : "") + t }, _.Grid = function(t) {
        function e(t) { this.resizeHandler = u(this.resizeHandler, this); var s = this; if (this.el = "string" == typeof t.element ? m(document.getElementById(t.element)) : m(t.element), null == this.el || 0 === this.el.length) throw new Error("Graph container element not found"); "static" === this.el.css("position") && this.el.css("position", "relative"), this.options = m.extend({}, this.gridDefaults, this.defaults || {}, t), "string" == typeof this.options.units && (this.options.postUnits = t.units), this.raphael = new Raphael(this.el[0]), this.elementWidth = null, this.elementHeight = null, this.dirty = !1, this.selectFrom = null, this.init && this.init(), this.setData(this.options.data), this.el.bind("mousemove", function(t) { var e, i, n, r; return i = s.el.offset(), r = t.pageX - i.left, s.selectFrom ? (e = s.data[s.hitTest(Math.min(r, s.selectFrom))]._x, n = s.data[s.hitTest(Math.max(r, s.selectFrom))]._x - e, s.selectionRect.attr({ x: e, width: n })) : s.fire("hovermove", r, t.pageY - i.top) }), this.el.bind("mouseleave", function() { return s.selectFrom && (s.selectionRect.hide(), s.selectFrom = null), s.fire("hoverout") }), this.el.bind("touchstart touchmove touchend", function(t) { var e, i; return i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], e = s.el.offset(), s.fire("hovermove", i.pageX - e.left, i.pageY - e.top) }), this.el.bind("click", function(t) { var e; return e = s.el.offset(), s.fire("gridclick", t.pageX - e.left, t.pageY - e.top) }), this.options.rangeSelect && (this.selectionRect = this.raphael.rect(0, 0, 0, this.el.innerHeight()).attr({ fill: this.options.rangeSelectColor, stroke: !1 }).toBack().hide(), this.el.bind("mousedown", function(t) { var e; return e = s.el.offset(), s.startRange(t.pageX - e.left) }), this.el.bind("mouseup", function(t) { var e; return e = s.el.offset(), s.endRange(t.pageX - e.left), s.fire("hovermove", t.pageX - e.left, t.pageY - e.top) })), this.options.resize && m(window).bind("resize", function() { return null != s.timeoutId && window.clearTimeout(s.timeoutId), s.timeoutId = window.setTimeout(s.resizeHandler, 100) }), this.el.css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"), this.postInit && this.postInit() } return s(e, t), e.prototype.gridDefaults = { dateFormat: null, axes: !0, grid: !0, gridLineColor: "#aaa", gridStrokeWidth: .5, gridTextColor: "#888", gridTextSize: 12, gridTextFamily: "sans-serif", gridTextWeight: "normal", hideHover: !1, yLabelFormat: null, xLabelAngle: 0, numLines: 5, padding: 25, parseTime: !0, postUnits: "", preUnits: "", ymax: "auto", ymin: "auto 0", goals: [], goalStrokeWidth: 1, goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"], events: [], eventStrokeWidth: 1, eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"], rangeSelect: null, rangeSelectColor: "#eef", resize: !1 }, e.prototype.setData = function(n, t) { var r, s, a, e, i, o, l, h, u, c, d, p, f, g, m; return null == t && (t = !0), null == (this.options.data = n) || 0 === n.length ? (this.data = [], this.raphael.clear(), void(null != this.hover && this.hover.hide())) : (p = this.cumulative ? 0 : null, f = this.cumulative ? 0 : null, 0 < this.options.goals.length && (i = Math.min.apply(Math, this.options.goals), e = Math.max.apply(Math, this.options.goals), f = null != f ? Math.min(f, i) : i, p = null != p ? Math.max(p, e) : e), this.data = function() { var t, e, i; for (i = [], a = t = 0, e = n.length; t < e; a = ++t) l = n[a], (o = { src: l }).label = l[this.options.xkey], this.options.parseTime ? (o.x = _.parseDate(o.label), this.options.dateFormat ? o.label = this.options.dateFormat(o.x) : "number" == typeof o.label && (o.label = new Date(o.label).toString())) : (o.x = a, this.options.xLabelFormat && (o.label = this.options.xLabelFormat(o))), u = 0, o.y = function() { var t, e, i, n; for (i = this.options.ykeys, n = [], s = t = 0, e = i.length; t < e; s = ++t) d = i[s], "string" == typeof(g = l[d]) && (g = parseFloat(g)), null != g && "number" != typeof g && (g = null), null != g && (this.cumulative ? u += g : null != p ? (p = Math.max(g, p), f = Math.min(g, f)) : p = f = g), this.cumulative && null != u && (p = Math.max(u, p), f = Math.min(u, f)), n.push(g); return n }.call(this), i.push(o); return i }.call(this), this.options.parseTime && (this.data = this.data.sort(function(t, e) { return (t.x > e.x) - (e.x > t.x) })), this.xmin = this.data[0].x, this.xmax = this.data[this.data.length - 1].x, this.events = [], 0 < this.options.events.length && (this.events = this.options.parseTime ? function() { var t, e, i, n; for (n = [], t = 0, e = (i = this.options.events).length; t < e; t++) r = i[t], n.push(_.parseDate(r)); return n }.call(this) : this.options.events, this.xmax = Math.max(this.xmax, Math.max.apply(Math, this.events)), this.xmin = Math.min(this.xmin, Math.min.apply(Math, this.events))), this.xmin === this.xmax && (this.xmin -= 1, this.xmax += 1), this.ymin = this.yboundary("min", f), this.ymax = this.yboundary("max", p), this.ymin === this.ymax && (f && (this.ymin -= 1), this.ymax += 1), (!0 === (m = this.options.axes) || "both" === m || "y" === m || !0 === this.options.grid) && (this.options.ymax === this.gridDefaults.ymax && this.options.ymin === this.gridDefaults.ymin ? (this.grid = this.autoGridLines(this.ymin, this.ymax, this.options.numLines), this.ymin = Math.min(this.ymin, this.grid[0]), this.ymax = Math.max(this.ymax, this.grid[this.grid.length - 1])) : (h = (this.ymax - this.ymin) / (this.options.numLines - 1), this.grid = function() { var t, e, i; for (i = [], c = t = this.ymin, e = this.ymax; 0 < h ? t <= e : e <= t; c = t += h) i.push(c); return i }.call(this))), this.dirty = !0, t ? this.redraw() : void 0) }, e.prototype.yboundary = function(t, e) { var i, n; return "string" == typeof(i = this.options["y" + t]) ? "auto" === i.slice(0, 4) ? 5 < i.length ? (n = parseInt(i.slice(5), 10), null == e ? n : Math[t](e, n)) : null != e ? e : 0 : parseInt(i, 10) : i }, e.prototype.autoGridLines = function(t, e, i) { var n, r, s, a, o, l, h, u; return a = e - t, u = Math.floor(Math.log(a) / Math.log(10)), l = Math.pow(10, u), r = Math.floor(t / l) * l, n = Math.ceil(e / l) * l, o = (n - r) / (i - 1), 1 === l && 1 < o && Math.ceil(o) !== o && (o = Math.ceil(o), n = r + o * (i - 1)), r < 0 && 0 < n && (r = Math.floor(t / o) * o, n = Math.ceil(e / o) * o), o < 1 ? (s = Math.floor(Math.log(o) / Math.log(10)), function() { var t, e; for (e = [], h = t = r; 0 < o ? t <= n : n <= t; h = t += o) e.push(parseFloat(h.toFixed(1 - s))); return e }()) : function() { var t, e; for (e = [], h = t = r; 0 < o ? t <= n : n <= t; h = t += o) e.push(h); return e }() }, e.prototype._calc = function() { var t, r, e, n, i, s, a, o; return i = this.el.width(), e = this.el.height(), (this.elementWidth !== i || this.elementHeight !== e || this.dirty) && (this.elementWidth = i, this.elementHeight = e, this.dirty = !1, this.left = this.options.padding, this.right = this.elementWidth - this.options.padding, this.top = this.options.padding, this.bottom = this.elementHeight - this.options.padding, (!0 === (a = this.options.axes) || "both" === a || "y" === a) && (s = function() { var t, e, i, n; for (n = [], t = 0, e = (i = this.grid).length; t < e; t++) r = i[t], n.push(this.measureText(this.yAxisFormat(r)).width); return n }.call(this), this.left += Math.max.apply(Math, s)), (!0 === (o = this.options.axes) || "both" === o || "x" === o) && (t = function() { var t, e, i; for (i = [], n = t = 0, e = this.data.length; 0 <= e ? t < e : e < t; n = 0 <= e ? ++t : --t) i.push(this.measureText(this.data[n].text, -this.options.xLabelAngle).height); return i }.call(this), this.bottom -= Math.max.apply(Math, t)), this.width = Math.max(1, this.right - this.left), this.height = Math.max(1, this.bottom - this.top), this.dx = this.width / (this.xmax - this.xmin), this.dy = this.height / (this.ymax - this.ymin), this.calc) ? this.calc() : void 0 }, e.prototype.transY = function(t) { return this.bottom - (t - this.ymin) * this.dy }, e.prototype.transX = function(t) { return 1 === this.data.length ? (this.left + this.right) / 2 : this.left + (t - this.xmin) * this.dx }, e.prototype.redraw = function() { return this.raphael.clear(), this._calc(), this.drawGrid(), this.drawGoals(), this.drawEvents(), this.draw ? this.draw() : void 0 }, e.prototype.measureText = function(t, e) { var i, n; return null == e && (e = 0), i = (n = this.raphael.text(100, 100, t).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).rotate(e)).getBBox(), n.remove(), i }, e.prototype.yAxisFormat = function(t) { return this.yLabelFormat(t) }, e.prototype.yLabelFormat = function(t) { return "function" == typeof this.options.yLabelFormat ? this.options.yLabelFormat(t) : "" + this.options.preUnits + _.commas(t) + this.options.postUnits }, e.prototype.drawGrid = function() { var t, e, i, n, r, s, a, o; if (!1 !== this.options.grid || !0 === (r = this.options.axes) || "both" === r || "y" === r) { for (o = [], i = 0, n = (s = this.grid).length; i < n; i++) t = s[i], e = this.transY(t), (!0 === (a = this.options.axes) || "both" === a || "y" === a) && this.drawYAxisLabel(this.left - this.options.padding / 2, e, this.yAxisFormat(t)), this.options.grid ? o.push(this.drawGridLine("M" + this.left + "," + e + "H" + (this.left + this.width))) : o.push(void 0); return o } }, e.prototype.drawGoals = function() { var t, e, i, n, r, s, a; for (a = [], i = n = 0, r = (s = this.options.goals).length; n < r; i = ++n) e = s[i], t = this.options.goalLineColors[i % this.options.goalLineColors.length], a.push(this.drawGoal(e, t)); return a }, e.prototype.drawEvents = function() { var t, e, i, n, r, s, a; for (a = [], i = n = 0, r = (s = this.events).length; n < r; i = ++n) e = s[i], t = this.options.eventLineColors[i % this.options.eventLineColors.length], a.push(this.drawEvent(e, t)); return a }, e.prototype.drawGoal = function(t, e) { return this.raphael.path("M" + this.left + "," + this.transY(t) + "H" + this.right).attr("stroke", e).attr("stroke-width", this.options.goalStrokeWidth) }, e.prototype.drawEvent = function(t, e) { return this.raphael.path("M" + this.transX(t) + "," + this.bottom + "V" + this.top).attr("stroke", e).attr("stroke-width", this.options.eventStrokeWidth) }, e.prototype.drawYAxisLabel = function(t, e, i) { return this.raphael.text(t, e, i).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor).attr("text-anchor", "end") }, e.prototype.drawGridLine = function(t) { return this.raphael.path(t).attr("stroke", this.options.gridLineColor).attr("stroke-width", this.options.gridStrokeWidth) }, e.prototype.startRange = function(t) { return this.hover.hide(), this.selectFrom = t, this.selectionRect.attr({ x: t, width: 0 }).show() }, e.prototype.endRange = function(t) { var e, i; return this.selectFrom ? (i = Math.min(this.selectFrom, t), e = Math.max(this.selectFrom, t), this.options.rangeSelect.call(this.el, { start: this.data[this.hitTest(i)].x, end: this.data[this.hitTest(e)].x }), this.selectFrom = null) : void 0 }, e.prototype.resizeHandler = function() { return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw() }, e }(_.EventEmitter), _.parseDate = function(t) { var e, i, n, r, s, a, o, l, h, u, c; return "number" == typeof t ? t : (i = t.match(/^(\d+) Q(\d)$/), r = t.match(/^(\d+)-(\d+)$/), s = t.match(/^(\d+)-(\d+)-(\d+)$/), o = t.match(/^(\d+) W(\d+)$/), l = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/), h = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/), i ? new Date(parseInt(i[1], 10), 3 * parseInt(i[2], 10) - 1, 1).getTime() : r ? new Date(parseInt(r[1], 10), parseInt(r[2], 10) - 1, 1).getTime() : s ? new Date(parseInt(s[1], 10), parseInt(s[2], 10) - 1, parseInt(s[3], 10)).getTime() : o ? (4 !== (u = new Date(parseInt(o[1], 10), 0, 1)).getDay() && u.setMonth(0, 1 + (4 - u.getDay() + 7) % 7), u.getTime() + 6048e5 * parseInt(o[2], 10)) : l ? l[6] ? (a = 0, "Z" !== l[6] && (a = 60 * parseInt(l[8], 10) + parseInt(l[9], 10), "+" === l[7] && (a = 0 - a)), Date.UTC(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10) + a)) : new Date(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10)).getTime() : h ? (c = parseFloat(h[6]), e = Math.floor(c), n = Math.round(1e3 * (c - e)), h[8] ? (a = 0, "Z" !== h[8] && (a = 60 * parseInt(h[10], 10) + parseInt(h[11], 10), "+" === h[9] && (a = 0 - a)), Date.UTC(parseInt(h[1], 10), parseInt(h[2], 10) - 1, parseInt(h[3], 10), parseInt(h[4], 10), parseInt(h[5], 10) + a, e, n)) : new Date(parseInt(h[1], 10), parseInt(h[2], 10) - 1, parseInt(h[3], 10), parseInt(h[4], 10), parseInt(h[5], 10), e, n).getTime()) : new Date(parseInt(t, 10), 0, 1).getTime()) }, _.Hover = function() {
        function t(t) { null == t && (t = {}), this.options = m.extend({}, _.Hover.defaults, t), this.el = m("<div class='" + this.options.class + "'></div>"), this.el.hide(), this.options.parent.append(this.el) } return t.defaults = { class: "morris-hover morris-default-style" }, t.prototype.update = function(t, e, i) { return t ? (this.html(t), this.show(), this.moveTo(e, i)) : this.hide() }, t.prototype.html = function(t) { return this.el.html(t) }, t.prototype.moveTo = function(t, e) { var i, n, r, s, a, o; return a = this.options.parent.innerWidth(), s = this.options.parent.innerHeight(), n = this.el.outerWidth(), i = this.el.outerHeight(), r = Math.min(Math.max(0, t - n / 2), a - n), null != e ? (o = e - i - 10) < 0 && s < (o = e + 10) + i && (o = s / 2 - i / 2) : o = s / 2 - i / 2, this.el.css({ left: r + "px", top: parseInt(o) + "px" }) }, t.prototype.show = function() { return this.el.show() }, t.prototype.hide = function() { return this.el.hide() }, t }(), _.Line = function(t) {
        function e(t) { return this.hilight = u(this.hilight, this), this.onHoverOut = u(this.onHoverOut, this), this.onHoverMove = u(this.onHoverMove, this), this.onGridClick = u(this.onGridClick, this), this instanceof _.Line ? void e.__super__.constructor.call(this, t) : new _.Line(t) } return s(e, t), e.prototype.init = function() { return "always" !== this.options.hideHover ? (this.hover = new _.Hover({ parent: this.el }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)) : void 0 }, e.prototype.defaults = { lineWidth: 3, pointSize: 4, lineColors: ["#0b62a4", "#7A92A3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"], pointStrokeWidths: [1], pointStrokeColors: ["#ffffff"], pointFillColors: [], smooth: !0, xLabels: "auto", xLabelFormat: null, xLabelMargin: 24, hideHover: !1 }, e.prototype.calc = function() { return this.calcPoints(), this.generatePaths() }, e.prototype.calcPoints = function() { var r, s, t, e, i, n; for (n = [], t = 0, e = (i = this.data).length; t < e; t++)(r = i[t])._x = this.transX(r.x), r._y = function() { var t, e, i, n; for (n = [], t = 0, e = (i = r.y).length; t < e; t++) null != (s = i[t]) ? n.push(this.transY(s)) : n.push(s); return n }.call(this), n.push(r._ymax = Math.min.apply(Math, [this.bottom].concat(function() { var t, e, i, n; for (n = [], t = 0, e = (i = r._y).length; t < e; t++) null != (s = i[t]) && n.push(s); return n }()))); return n }, e.prototype.hitTest = function(t) { var e, i, n, r; if (0 === this.data.length) return null; for (e = i = 0, n = (r = this.data.slice(1)).length; i < n && !(t < (r[e]._x + this.data[e]._x) / 2); e = ++i); return e }, e.prototype.onGridClick = function(t, e) { var i; return i = this.hitTest(t), this.fire("click", i, this.data[i].src, t, e) }, e.prototype.onHoverMove = function(t) { var e; return e = this.hitTest(t), this.displayHoverForRow(e) }, e.prototype.onHoverOut = function() { return !1 !== this.options.hideHover ? this.displayHoverForRow(null) : void 0 }, e.prototype.displayHoverForRow = function(t) { var e; return null != t ? ((e = this.hover).update.apply(e, this.hoverContentForRow(t)), this.hilight(t)) : (this.hover.hide(), this.hilight()) }, e.prototype.hoverContentForRow = function(t) { var e, i, n, r, s, a, o; for (e = "<div class='morris-hover-row-label'>" + (n = this.data[t]).label + "</div>", i = s = 0, a = (o = n.y).length; s < a; i = ++s) r = o[i], e += "<div class='morris-hover-point' style='color: " + this.colorFor(n, i, "label") + "'>\n  " + this.options.labels[i] + ":\n  " + this.yLabelFormat(r) + "\n</div>"; return "function" == typeof this.options.hoverCallback && (e = this.options.hoverCallback(t, this.options, e, n.src)), [e, n._x, n._ymax] }, e.prototype.generatePaths = function() { var r, s, a, o; return this.paths = function() { var t, e, i, n; for (n = [], s = t = 0, e = this.options.ykeys.length; 0 <= e ? t < e : e < t; s = 0 <= e ? ++t : --t) o = "boolean" == typeof this.options.smooth ? this.options.smooth : (i = this.options.ykeys[s], 0 <= l.call(this.options.smooth, i)), 1 < (r = function() { var t, e, i, n; for (n = [], t = 0, e = (i = this.data).length; t < e; t++) void 0 !== (a = i[t])._y[s] && n.push({ x: a._x, y: a._y[s] }); return n }.call(this)).length ? n.push(_.Line.createPath(r, o, this.bottom)) : n.push(null); return n }.call(this) }, e.prototype.draw = function() { var t; return (!0 === (t = this.options.axes) || "both" === t || "x" === t) && this.drawXAxis(), this.drawSeries(), !1 === this.options.hideHover ? this.displayHoverForRow(this.data.length - 1) : void 0 }, e.prototype.drawXAxis = function() { var t, e, i, o, l, r, h, n, s, a, u = this; for (h = this.bottom + this.options.padding / 2, o = l = null, t = function(t, e) { var i, n, r, s, a; return a = (i = u.drawXAxisLabel(u.transX(e), h, t)).getBBox(), i.transform("r" + -u.options.xLabelAngle), n = i.getBBox(), i.transform("t0," + n.height / 2 + "..."), 0 !== u.options.xLabelAngle && (s = -.5 * a.width * Math.cos(u.options.xLabelAngle * Math.PI / 180), i.transform("t" + s + ",0...")), n = i.getBBox(), (null == l || l >= n.x + n.width || null != o && o >= n.x) && 0 <= n.x && n.x + n.width < u.el.width() ? (0 !== u.options.xLabelAngle && (r = 1.25 * u.options.gridTextSize / Math.sin(u.options.xLabelAngle * Math.PI / 180), o = n.x - r), l = n.x - u.options.xLabelMargin) : i.remove() }, (i = this.options.parseTime ? 1 === this.data.length && "auto" === this.options.xLabels ? [
                    [this.data[0].label, this.data[0].x]
                ] : _.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat) : function() { var t, e, i, n; for (n = [], t = 0, e = (i = this.data).length; t < e; t++) r = i[t], n.push([r.label, r.x]); return n }.call(this)).reverse(), a = [], n = 0, s = i.length; n < s; n++) e = i[n], a.push(t(e[0], e[1])); return a }, e.prototype.drawSeries = function() { var t, e, i, n, r, s; for (this.seriesPoints = [], t = e = n = this.options.ykeys.length - 1; n <= 0 ? e <= 0 : 0 <= e; t = n <= 0 ? ++e : --e) this._drawLineFor(t); for (s = [], t = i = r = this.options.ykeys.length - 1; r <= 0 ? i <= 0 : 0 <= i; t = r <= 0 ? ++i : --i) s.push(this._drawPointFor(t)); return s }, e.prototype._drawPointFor = function(t) { var e, i, n, r, s, a; for (this.seriesPoints[t] = [], a = [], n = 0, r = (s = this.data).length; n < r; n++)(e = null) != (i = s[n])._y[t] && (e = this.drawLinePoint(i._x, i._y[t], this.colorFor(i, t, "point"), t)), a.push(this.seriesPoints[t].push(e)); return a }, e.prototype._drawLineFor = function(t) { var e; return null !== (e = this.paths[t]) ? this.drawLinePath(e, this.colorFor(null, t, "line"), t) : void 0 }, e.createPath = function(t, e, i) { var n, r, s, a, o, l, h, u, c, d; for (h = "", e && (s = _.Line.gradients(t)), u = { y: null }, a = c = 0, d = t.length; c < d; a = ++c) null != (n = t[a]).y && (null != u.y ? e ? (r = s[a], l = s[a - 1], o = (n.x - u.x) / 4, h += "C" + (u.x + o) + "," + Math.min(i, u.y + o * l) + "," + (n.x - o) + "," + Math.min(i, n.y - o * r) + "," + n.x + "," + n.y) : h += "L" + n.x + "," + n.y : e && null == s[a] || (h += "M" + n.x + "," + n.y)), u = n; return h }, e.gradients = function(t) { var e, i, n, r, s, a, o, l; for (i = function(t, e) { return (t.y - e.y) / (t.x - e.x) }, l = [], n = a = 0, o = t.length; a < o; n = ++a) null != (e = t[n]).y ? (r = t[n + 1] || { y: null }, null != (s = t[n - 1] || { y: null }).y && null != r.y ? l.push(i(s, r)) : null != s.y ? l.push(i(s, e)) : null != r.y ? l.push(i(e, r)) : l.push(null)) : l.push(null); return l }, e.prototype.hilight = function(t) { var e, i, n, r, s; if (null !== this.prevHilight && this.prevHilight !== t)
                for (e = i = 0, r = this.seriesPoints.length - 1; 0 <= r ? i <= r : r <= i; e = 0 <= r ? ++i : --i) this.seriesPoints[e][this.prevHilight] && this.seriesPoints[e][this.prevHilight].animate(this.pointShrinkSeries(e)); if (null !== t && this.prevHilight !== t)
                for (e = n = 0, s = this.seriesPoints.length - 1; 0 <= s ? n <= s : s <= n; e = 0 <= s ? ++n : --n) this.seriesPoints[e][t] && this.seriesPoints[e][t].animate(this.pointGrowSeries(e)); return this.prevHilight = t }, e.prototype.colorFor = function(t, e, i) { return "function" == typeof this.options.lineColors ? this.options.lineColors.call(this, t, e, i) : "point" === i && this.options.pointFillColors[e % this.options.pointFillColors.length] || this.options.lineColors[e % this.options.lineColors.length] }, e.prototype.drawXAxisLabel = function(t, e, i) { return this.raphael.text(t, e, i).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor) }, e.prototype.drawLinePath = function(t, e, i) { return this.raphael.path(t).attr("stroke", e).attr("stroke-width", this.lineWidthForSeries(i)) }, e.prototype.drawLinePoint = function(t, e, i, n) { return this.raphael.circle(t, e, this.pointSizeForSeries(n)).attr("fill", i).attr("stroke-width", this.pointStrokeWidthForSeries(n)).attr("stroke", this.pointStrokeColorForSeries(n)) }, e.prototype.pointStrokeWidthForSeries = function(t) { return this.options.pointStrokeWidths[t % this.options.pointStrokeWidths.length] }, e.prototype.pointStrokeColorForSeries = function(t) { return this.options.pointStrokeColors[t % this.options.pointStrokeColors.length] }, e.prototype.lineWidthForSeries = function(t) { return this.options.lineWidth instanceof Array ? this.options.lineWidth[t % this.options.lineWidth.length] : this.options.lineWidth }, e.prototype.pointSizeForSeries = function(t) { return this.options.pointSize instanceof Array ? this.options.pointSize[t % this.options.pointSize.length] : this.options.pointSize }, e.prototype.pointGrowSeries = function(t) { return Raphael.animation({ r: this.pointSizeForSeries(t) + 3 }, 25, "linear") }, e.prototype.pointShrinkSeries = function(t) { return Raphael.animation({ r: this.pointSizeForSeries(t) }, 25, "linear") }, e }(_.Grid), _.labelSeries = function(t, e, i, n, r) { var s, a, o, l, h, u, c, d, p, f, g; if (o = 200 * (e - t) / i, a = new Date(t), void 0 === (c = _.LABEL_SPECS[n]))
            for (p = 0, f = (g = _.AUTO_LABEL_ORDER).length; p < f; p++)
                if (l = g[p], o >= (u = _.LABEL_SPECS[l]).span) { c = u; break } for (void 0 === c && (c = _.LABEL_SPECS.second), r && (c = m.extend({}, c, { fmt: r })), s = c.start(a), h = [];
            (d = s.getTime()) <= e;) t <= d && h.push([c.fmt(s), d]), c.incr(s); return h }, t = function(e) { return { span: 60 * e * 1e3, start: function(t) { return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours()) }, fmt: function(t) { return _.pad2(t.getHours()) + ":" + _.pad2(t.getMinutes()) }, incr: function(t) { return t.setUTCMinutes(t.getUTCMinutes() + e) } } }, e = function(e) { return { span: 1e3 * e, start: function(t) { return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes()) }, fmt: function(t) { return _.pad2(t.getHours()) + ":" + _.pad2(t.getMinutes()) + ":" + _.pad2(t.getSeconds()) }, incr: function(t) { return t.setUTCSeconds(t.getUTCSeconds() + e) } } }, _.LABEL_SPECS = { decade: { span: 1728e8, start: function(t) { return new Date(t.getFullYear() - t.getFullYear() % 10, 0, 1) }, fmt: function(t) { return "" + t.getFullYear() }, incr: function(t) { return t.setFullYear(t.getFullYear() + 10) } }, year: { span: 1728e7, start: function(t) { return new Date(t.getFullYear(), 0, 1) }, fmt: function(t) { return "" + t.getFullYear() }, incr: function(t) { return t.setFullYear(t.getFullYear() + 1) } }, month: { span: 24192e5, start: function(t) { return new Date(t.getFullYear(), t.getMonth(), 1) }, fmt: function(t) { return t.getFullYear() + "-" + _.pad2(t.getMonth() + 1) }, incr: function(t) { return t.setMonth(t.getMonth() + 1) } }, week: { span: 6048e5, start: function(t) { return new Date(t.getFullYear(), t.getMonth(), t.getDate()) }, fmt: function(t) { return t.getFullYear() + "-" + _.pad2(t.getMonth() + 1) + "-" + _.pad2(t.getDate()) }, incr: function(t) { return t.setDate(t.getDate() + 7) } }, day: { span: 864e5, start: function(t) { return new Date(t.getFullYear(), t.getMonth(), t.getDate()) }, fmt: function(t) { return t.getFullYear() + "-" + _.pad2(t.getMonth() + 1) + "-" + _.pad2(t.getDate()) }, incr: function(t) { return t.setDate(t.getDate() + 1) } }, hour: t(60), "30min": t(30), "15min": t(15), "10min": t(10), "5min": t(5), minute: t(1), "30sec": e(30), "15sec": e(15), "10sec": e(10), "5sec": e(5), second: e(1) }, _.AUTO_LABEL_ORDER = ["decade", "year", "month", "week", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"], _.Area = function(t) {
        function i(t) { var e; return this instanceof _.Area ? (e = m.extend({}, n, t), this.cumulative = !e.behaveLikeLine, "auto" === e.fillOpacity && (e.fillOpacity = e.behaveLikeLine ? .8 : 1), void i.__super__.constructor.call(this, e)) : new _.Area(t) } var n; return s(i, t), n = { fillOpacity: "auto", behaveLikeLine: !1 }, i.prototype.calcPoints = function() { var r, s, a, t, e, i, n; for (n = [], t = 0, e = (i = this.data).length; t < e; t++)(r = i[t])._x = this.transX(r.x), s = 0, r._y = function() { var t, e, i, n; for (n = [], t = 0, e = (i = r.y).length; t < e; t++) a = i[t], this.options.behaveLikeLine ? n.push(this.transY(a)) : (s += a || 0, n.push(this.transY(s))); return n }.call(this), n.push(r._ymax = Math.max.apply(Math, r._y)); return n }, i.prototype.drawSeries = function() { var t, e, i, n, r, s, a, o; for (this.seriesPoints = [], o = [], i = 0, n = (e = this.options.behaveLikeLine ? function() { s = []; for (var t = 0, e = this.options.ykeys.length - 1; 0 <= e ? t <= e : e <= t; 0 <= e ? t++ : t--) s.push(t); return s }.apply(this) : function() { a = []; for (var t = r = this.options.ykeys.length - 1; r <= 0 ? t <= 0 : 0 <= t; r <= 0 ? t++ : t--) a.push(t); return a }.apply(this)).length; i < n; i++) t = e[i], this._drawFillFor(t), this._drawLineFor(t), o.push(this._drawPointFor(t)); return o }, i.prototype._drawFillFor = function(t) { var e; return null !== (e = this.paths[t]) ? (e += "L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z", this.drawFilledPath(e, this.fillForSeries(t))) : void 0 }, i.prototype.fillForSeries = function(t) { var e; return e = Raphael.rgb2hsl(this.colorFor(this.data[t], t, "line")), Raphael.hsl(e.h, this.options.behaveLikeLine ? .9 * e.s : .75 * e.s, Math.min(.98, this.options.behaveLikeLine ? 1.2 * e.l : 1.25 * e.l)) }, i.prototype.drawFilledPath = function(t, e) { return this.raphael.path(t).attr("fill", e).attr("fill-opacity", this.options.fillOpacity).attr("stroke", "none") }, i }(_.Line), _.Bar = function(t) {
        function e(t) { return this.onHoverOut = u(this.onHoverOut, this), this.onHoverMove = u(this.onHoverMove, this), this.onGridClick = u(this.onGridClick, this), this instanceof _.Bar ? void e.__super__.constructor.call(this, m.extend({}, t, { parseTime: !1 })) : new _.Bar(t) } return s(e, t), e.prototype.init = function() { return this.cumulative = this.options.stacked, "always" !== this.options.hideHover ? (this.hover = new _.Hover({ parent: this.el }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)) : void 0 }, e.prototype.defaults = { barSizeRatio: .75, barGap: 3, barColors: ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"], barOpacity: 1, barRadius: [0, 0, 0, 0], xLabelMargin: 50 }, e.prototype.calc = function() { var t; return this.calcBars(), !1 === this.options.hideHover ? (t = this.hover).update.apply(t, this.hoverContentForRow(this.data.length - 1)) : void 0 }, e.prototype.calcBars = function() { var t, r, s, e, i, n, a; for (a = [], t = e = 0, i = (n = this.data).length; e < i; t = ++e)(r = n[t])._x = this.left + this.width * (t + .5) / this.data.length, a.push(r._y = function() { var t, e, i, n; for (n = [], t = 0, e = (i = r.y).length; t < e; t++) null != (s = i[t]) ? n.push(this.transY(s)) : n.push(null); return n }.call(this)); return a }, e.prototype.draw = function() { var t; return (!0 === (t = this.options.axes) || "both" === t || "x" === t) && this.drawXAxis(), this.drawSeries() }, e.prototype.drawXAxis = function() { var t, e, i, n, r, s, a, o, l, h, u, c, d; for (h = this.bottom + (this.options.xAxisLabelTopPadding || this.options.padding / 2), s = a = null, d = [], t = u = 0, c = this.data.length; 0 <= c ? u < c : c < u; t = 0 <= c ? ++u : --u) o = this.data[this.data.length - 1 - t], l = (e = this.drawXAxisLabel(o._x, h, o.label)).getBBox(), e.transform("r" + -this.options.xLabelAngle), i = e.getBBox(), e.transform("t0," + i.height / 2 + "..."), 0 !== this.options.xLabelAngle && (r = -.5 * l.width * Math.cos(this.options.xLabelAngle * Math.PI / 180), e.transform("t" + r + ",0...")), (null == a || a >= i.x + i.width || null != s && s >= i.x) && 0 <= i.x && i.x + i.width < this.el.width() ? (0 !== this.options.xLabelAngle && (n = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180), s = i.x - n), d.push(a = i.x - this.options.xLabelMargin)) : d.push(e.remove()); return d }, e.prototype.drawSeries = function() { var r, s, a, o, l, h, u, t, c, d, p, e, f, g, m; return a = this.width / this.options.data.length, t = this.options.stacked ? 1 : this.options.ykeys.length, r = (a * this.options.barSizeRatio - this.options.barGap * (t - 1)) / t, this.options.barSize && (r = Math.min(r, this.options.barSize)), e = a - r * t - this.options.barGap * (t - 1), u = e / 2, m = this.ymin <= 0 && 0 <= this.ymax ? this.transY(0) : null, this.bars = function() { var t, e, i, n; for (i = this.data, n = [], o = t = 0, e = i.length; t < e; o = ++t) c = i[o], l = 0, n.push(function() { var t, e, i, n; for (i = c._y, n = [], d = t = 0, e = i.length; t < e; d = ++t) null !== (g = i[d]) ? (s = m ? (f = Math.min(g, m), Math.max(g, m)) : (f = g, this.bottom), h = this.left + o * a + u, this.options.stacked || (h += d * (r + this.options.barGap)), p = s - f, this.options.verticalGridCondition && this.options.verticalGridCondition(c.x) && this.drawBar(this.left + o * a, this.top, a, Math.abs(this.top - this.bottom), this.options.verticalGridColor, this.options.verticalGridOpacity, this.options.barRadius), this.options.stacked && (f -= l), this.drawBar(h, f, r, p, this.colorFor(c, d, "bar"), this.options.barOpacity, this.options.barRadius), n.push(l += p)) : n.push(null); return n }.call(this)); return n }.call(this) }, e.prototype.colorFor = function(t, e, i) { var n, r; return "function" == typeof this.options.barColors ? (n = { x: t.x, y: t.y[e], label: t.label }, r = { index: e, key: this.options.ykeys[e], label: this.options.labels[e] }, this.options.barColors.call(this, n, r, i)) : this.options.barColors[e % this.options.barColors.length] }, e.prototype.hitTest = function(t) { return 0 === this.data.length ? null : (t = Math.max(Math.min(t, this.right), this.left), Math.min(this.data.length - 1, Math.floor((t - this.left) / (this.width / this.data.length)))) }, e.prototype.onGridClick = function(t, e) { var i; return i = this.hitTest(t), this.fire("click", i, this.data[i].src, t, e) }, e.prototype.onHoverMove = function(t) { var e, i; return e = this.hitTest(t), (i = this.hover).update.apply(i, this.hoverContentForRow(e)) }, e.prototype.onHoverOut = function() { return !1 !== this.options.hideHover ? this.hover.hide() : void 0 }, e.prototype.hoverContentForRow = function(t) { var e, i, n, r, s, a, o; for (e = "<div class='morris-hover-row-label'>" + (n = this.data[t]).label + "</div>", i = s = 0, a = (o = n.y).length; s < a; i = ++s) r = o[i], e += "<div class='morris-hover-point' style='color: " + this.colorFor(n, i, "label") + "'>\n  " + this.options.labels[i] + ":\n  " + this.yLabelFormat(r) + "\n</div>"; return "function" == typeof this.options.hoverCallback && (e = this.options.hoverCallback(t, this.options, e, n.src)), [e, this.left + (t + .5) * this.width / this.data.length] }, e.prototype.drawXAxisLabel = function(t, e, i) { return this.raphael.text(t, e, i).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor) }, e.prototype.drawBar = function(t, e, i, n, r, s, a) { var o; return (0 === (o = Math.max.apply(Math, a)) || n < o ? this.raphael.rect(t, e, i, n) : this.raphael.path(this.roundedRect(t, e, i, n, a))).attr("fill", r).attr("fill-opacity", s).attr("stroke", "none") }, e.prototype.roundedRect = function(t, e, i, n, r) { return null == r && (r = [0, 0, 0, 0]), ["M", t, r[0] + e, "Q", t, e, t + r[0], e, "L", t + i - r[1], e, "Q", t + i, e, t + i, e + r[1], "L", t + i, e + n - r[2], "Q", t + i, e + n, t + i - r[2], e + n, "L", t + r[3], e + n, "Q", t, e + n, t, e + n - r[3], "Z"] }, e }(_.Grid), _.Donut = function(t) {
        function e(t) { this.resizeHandler = u(this.resizeHandler, this), this.select = u(this.select, this), this.click = u(this.click, this); var e = this; if (!(this instanceof _.Donut)) return new _.Donut(t); if (this.options = m.extend({}, this.defaults, t), this.el = "string" == typeof t.element ? m(document.getElementById(t.element)) : m(t.element), null === this.el || 0 === this.el.length) throw new Error("Graph placeholder not found.");
            void 0 !== t.data && 0 !== t.data.length && (this.raphael = new Raphael(this.el[0]), this.options.resize && m(window).bind("resize", function() { return null != e.timeoutId && window.clearTimeout(e.timeoutId), e.timeoutId = window.setTimeout(e.resizeHandler, 100) }), this.setData(t.data)) } return s(e, t), e.prototype.defaults = { colors: ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"], backgroundColor: "#FFFFFF", labelColor: "#000000", formatter: _.commas, resize: !1 }, e.prototype.redraw = function() { var t, e, i, n, r, s, a, o, l, h, u, c, d, p, f, g, m, v, y, b, x, w; for (this.raphael.clear(), e = this.el.width() / 2, i = this.el.height() / 2, c = (Math.min(e, i) - 10) / 3, d = u = 0, g = (y = this.values).length; d < g; d++) u += y[d]; for (o = 5 / (2 * c), t = 1.9999 * Math.PI - o * this.data.length, r = s = 0, this.segments = [], n = p = 0, m = (b = this.values).length; p < m; n = ++p) l = s + o + t * (b[n] / u), (h = new _.DonutSegment(e, i, 2 * c, c, s, l, this.data[n].color || this.options.colors[r % this.options.colors.length], this.options.backgroundColor, r, this.raphael)).render(), this.segments.push(h), h.on("hover", this.select), h.on("click", this.click), s = l, r += 1; for (this.text1 = this.drawEmptyDonutLabel(e, i - 10, this.options.labelColor, 15, 800), this.text2 = this.drawEmptyDonutLabel(e, i + 10, this.options.labelColor, 14), a = Math.max.apply(Math, this.values), w = [], f = r = 0, v = (x = this.values).length; f < v; f++) { if (x[f] === a) { this.select(r); break } w.push(r += 1) } return w }, e.prototype.setData = function(t) { var r; return this.data = t, this.values = function() { var t, e, i, n; for (n = [], t = 0, e = (i = this.data).length; t < e; t++) r = i[t], n.push(parseFloat(r.value)); return n }.call(this), this.redraw() }, e.prototype.click = function(t) { return this.fire("click", t, this.data[t]) }, e.prototype.select = function(t) { var e, i, n, r; for (i = 0, n = (r = this.segments).length; i < n; i++) r[i].deselect(); return this.segments[t].select(), e = this.data[t], this.setLabels(e.label, this.options.formatter(e.value, e)) }, e.prototype.setLabels = function(t, e) { var i, n, r, s, a, o, l, h; return s = 1.8 * (i = 2 * (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) / 3), r = i / 2, n = i / 3, this.text1.attr({ text: t, transform: "" }), a = this.text1.getBBox(), o = Math.min(s / a.width, r / a.height), this.text1.attr({ transform: "S" + o + "," + o + "," + (a.x + a.width / 2) + "," + (a.y + a.height) }), this.text2.attr({ text: e, transform: "" }), l = this.text2.getBBox(), h = Math.min(s / l.width, n / l.height), this.text2.attr({ transform: "S" + h + "," + h + "," + (l.x + l.width / 2) + "," + l.y }) }, e.prototype.drawEmptyDonutLabel = function(t, e, i, n, r) { var s; return s = this.raphael.text(t, e, "").attr("font-size", n).attr("fill", i), null != r && s.attr("font-weight", r), s }, e.prototype.resizeHandler = function() { return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw() }, e }(_.EventEmitter), _.DonutSegment = function(t) {
        function e(t, e, i, n, r, s, a, o, l, h) { this.cx = t, this.cy = e, this.inner = i, this.outer = n, this.color = a, this.backgroundColor = o, this.index = l, this.raphael = h, this.deselect = u(this.deselect, this), this.select = u(this.select, this), this.sin_p0 = Math.sin(r), this.cos_p0 = Math.cos(r), this.sin_p1 = Math.sin(s), this.cos_p1 = Math.cos(s), this.is_long = s - r > Math.PI ? 1 : 0, this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5), this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer), this.hilight = this.calcArc(this.inner) } return s(e, t), e.prototype.calcArcPoints = function(t) { return [this.cx + t * this.sin_p0, this.cy + t * this.cos_p0, this.cx + t * this.sin_p1, this.cy + t * this.cos_p1] }, e.prototype.calcSegment = function(t, e) { var i, n, r, s, a, o, l, h, u, c; return i = (u = this.calcArcPoints(t))[0], r = u[1], n = u[2], s = u[3], a = (c = this.calcArcPoints(e))[0], l = c[1], o = c[2], h = c[3], "M" + i + "," + r + "A" + t + "," + t + ",0," + this.is_long + ",0," + n + "," + s + "L" + o + "," + h + "A" + e + "," + e + ",0," + this.is_long + ",1," + a + "," + l + "Z" }, e.prototype.calcArc = function(t) { var e, i, n, r, s; return e = (s = this.calcArcPoints(t))[0], n = s[1], i = s[2], r = s[3], "M" + e + "," + n + "A" + t + "," + t + ",0," + this.is_long + ",0," + i + "," + r }, e.prototype.render = function() { var t = this; return this.arc = this.drawDonutArc(this.hilight, this.color), this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function() { return t.fire("hover", t.index) }, function() { return t.fire("click", t.index) }) }, e.prototype.drawDonutArc = function(t, e) { return this.raphael.path(t).attr({ stroke: e, "stroke-width": 2, opacity: 0 }) }, e.prototype.drawDonutSegment = function(t, e, i, n, r) { return this.raphael.path(t).attr({ fill: e, stroke: i, "stroke-width": 3 }).hover(n).click(r) }, e.prototype.select = function() { return this.selected ? void 0 : (this.seg.animate({ path: this.selectedPath }, 150, "<>"), this.arc.animate({ opacity: 1 }, 150, "<>"), this.selected = !0) }, e.prototype.deselect = function() { return this.selected ? (this.seg.animate({ path: this.path }, 150, "<>"), this.arc.animate({ opacity: 0 }, 150, "<>"), this.selected = !1) : void 0 }, e }(_.EventEmitter) }.call(this),
    function(h) { var a = new Array,
            o = new Array;
        h.fn.doAutosize = function(t) { var e = h(this).data("minwidth"),
                i = h(this).data("maxwidth"),
                n = "",
                r = h(this),
                s = h("#" + h(this).data("tester_id")); if (n !== (n = r.val())) { var a = n.replace(/&/g, "&amp;").replace(/\s/g, " ").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                s.html(a); var o = s.width(),
                    l = o + t.comfortZone >= e ? o + t.comfortZone : e;
                (l < r.width() && e <= l || e < l && l < i) && r.width(l) } }, h.fn.resetAutosize = function(t) { var e = h(this).data("minwidth") || t.minInputWidth || h(this).width(),
                i = h(this).data("maxwidth") || t.maxInputWidth || h(this).closest(".tagsinput").width() - t.inputPadding,
                n = h(this),
                r = h("<tester/>").css({ position: "absolute", top: -9999, left: -9999, width: "auto", fontSize: n.css("fontSize"), fontFamily: n.css("fontFamily"), fontWeight: n.css("fontWeight"), letterSpacing: n.css("letterSpacing"), whiteSpace: "nowrap" }),
                s = h(this).attr("id") + "_autosize_tester";
            0 < !h("#" + s).length && (r.attr("id", s), r.appendTo("body")), n.data("minwidth", e), n.data("maxwidth", i), n.data("tester_id", s), n.css("width", e) }, h.fn.addTag = function(r, s) { return s = jQuery.extend({ focus: !1, callback: !0 }, s), this.each(function() { var t = h(this).attr("id"),
                    e = h(this).val().split(a[t]); if ("" == e[0] && (e = new Array), r = jQuery.trim(r), s.unique) 1 == (i = h(this).tagExist(r)) && h("#" + t + "_tag").addClass("not_valid");
                else var i = !1; if ("" != r && 1 != i && (h("<span>").addClass("tag").append(h("<span>").text(r).append("&nbsp;&nbsp;"), h("<a>", { href: "#", title: "Removing tag", text: "x" }).click(function() { return h("#" + t).removeTag(escape(r)) })).insertBefore("#" + t + "_addTag"), e.push(r), h("#" + t + "_tag").val(""), s.focus ? h("#" + t + "_tag").focus() : h("#" + t + "_tag").blur(), h.fn.tagsInput.updateTagsField(this, e), s.callback && o[t] && o[t].onAddTag && o[t].onAddTag.call(this, r), o[t] && o[t].onChange)) { var n = e.length;
                    o[t].onChange.call(this, h(this), e[n - 1]) } }), !1 }, h.fn.removeTag = function(n) { return n = unescape(n), this.each(function() { var t = h(this).attr("id"),
                    e = h(this).val().split(a[t]); for (h("#" + t + "_tagsinput .tag").remove(), str = "", i = 0; i < e.length; i++) e[i] != n && (str = str + a[t] + e[i]);
                h.fn.tagsInput.importTags(this, str), o[t] && o[t].onRemoveTag && o[t].onRemoveTag.call(this, n) }), !1 }, h.fn.tagExist = function(t) { var e = h(this).attr("id"),
                i = h(this).val().split(a[e]); return 0 <= jQuery.inArray(t, i) }, h.fn.importTags = function(t) { var e = h(this).attr("id");
            h("#" + e + "_tagsinput .tag").remove(), h.fn.tagsInput.importTags(this, t) }, h.fn.tagsInput = function(t) { var r = jQuery.extend({ interactive: !0, defaultText: "add a tag", minChars: 0, width: "300px", height: "100px", autocomplete: { selectFirst: !1 }, hide: !0, delimiter: ",", unique: !0, removeWithBackspace: !0, placeholderColor: "#666666", autosize: !0, comfortZone: 20, inputPadding: 12 }, t),
                i = 0; return this.each(function() { if (void 0 === h(this).attr("data-tagsinput-init")) { h(this).attr("data-tagsinput-init", !0), r.hide && h(this).hide(); var n = h(this).attr("id");
                    (!n || a[h(this).attr("id")]) && (n = h(this).attr("id", "tags" + (new Date).getTime() + i++).attr("id")); var t = jQuery.extend({ pid: n, real_input: "#" + n, holder: "#" + n + "_tagsinput", input_wrapper: "#" + n + "_addTag", fake_input: "#" + n + "_tag" }, r);
                    a[n] = t.delimiter, (r.onAddTag || r.onRemoveTag || r.onChange) && (o[n] = new Array, o[n].onAddTag = r.onAddTag, o[n].onRemoveTag = r.onRemoveTag, o[n].onChange = r.onChange); var e = '<div id="' + n + '_tagsinput" class="tagsinput"><div id="' + n + '_addTag">'; if (r.interactive && (e = e + '<input id="' + n + '_tag" value="" data-default="' + r.defaultText + '" />'), h(e += '</div><div class="tags_clear"></div></div>').insertAfter(this), h(t.holder).css("width", r.width), h(t.holder).css("min-height", r.height), h(t.holder).css("height", r.height), "" != h(t.real_input).val() && h.fn.tagsInput.importTags(h(t.real_input), h(t.real_input).val()), r.interactive) { if (h(t.fake_input).val(h(t.fake_input).attr("data-default")), h(t.fake_input).css("color", r.placeholderColor), h(t.fake_input).resetAutosize(r), h(t.holder).bind("click", t, function(t) { h(t.data.fake_input).focus() }), h(t.fake_input).bind("focus", t, function(t) { h(t.data.fake_input).val() == h(t.data.fake_input).attr("data-default") && h(t.data.fake_input).val(""), h(t.data.fake_input).css("color", "#000000") }), null != r.autocomplete_url) { for (attrname in autocomplete_options = { source: r.autocomplete_url }, r.autocomplete) autocomplete_options[attrname] = r.autocomplete[attrname];
                            void 0 !== jQuery.Autocompleter ? (h(t.fake_input).autocomplete(r.autocomplete_url, r.autocomplete), h(t.fake_input).bind("result", t, function(t, e, i) { e && h("#" + n).addTag(e[0] + "", { focus: !0, unique: r.unique }) })) : void 0 !== jQuery.ui.autocomplete && (h(t.fake_input).autocomplete(autocomplete_options), h(t.fake_input).bind("autocompleteselect", t, function(t, e) { return h(t.data.real_input).addTag(e.item.value, { focus: !0, unique: r.unique }), !1 })) } else h(t.fake_input).bind("blur", t, function(t) { var e = h(this).attr("data-default"); return "" != h(t.data.fake_input).val() && h(t.data.fake_input).val() != e ? t.data.minChars <= h(t.data.fake_input).val().length && (!t.data.maxChars || t.data.maxChars >= h(t.data.fake_input).val().length) && h(t.data.real_input).addTag(h(t.data.fake_input).val(), { focus: !0, unique: r.unique }) : (h(t.data.fake_input).val(h(t.data.fake_input).attr("data-default")), h(t.data.fake_input).css("color", r.placeholderColor)), !1 });
                        h(t.fake_input).bind("keypress", t, function(t) { return s(t) ? (t.preventDefault(), t.data.minChars <= h(t.data.fake_input).val().length && (!t.data.maxChars || t.data.maxChars >= h(t.data.fake_input).val().length) && h(t.data.real_input).addTag(h(t.data.fake_input).val(), { focus: !0, unique: r.unique }), h(t.data.fake_input).resetAutosize(r), !1) : void(t.data.autosize && h(t.data.fake_input).doAutosize(r)) }), t.removeWithBackspace && h(t.fake_input).bind("keydown", function(t) { if (8 == t.keyCode && "" == h(this).val()) { t.preventDefault(); var e = h(this).closest(".tagsinput").find(".tag:last").text(),
                                    i = h(this).attr("id").replace(/_tag$/, "");
                                e = e.replace(/[\s]+x$/, ""), h("#" + i).removeTag(escape(e)), h(this).trigger("focus") } }), h(t.fake_input).blur(), t.unique && h(t.fake_input).keydown(function(t) {
                            (8 == t.keyCode || String.fromCharCode(t.which).match(/\w+|[áéíóúÁÉÍÓÚñÑ,/]+/)) && h(this).removeClass("not_valid") }) } } }), this }, h.fn.tagsInput.updateTagsField = function(t, e) { var i = h(t).attr("id");
            h(t).val(e.join(a[i])) }, h.fn.tagsInput.importTags = function(t, e) { h(t).val(""); var n = h(t).attr("id"),
                r = e.split(a[n]); for (i = 0; i < r.length; i++) h(t).addTag(r[i], { focus: !1, callback: !1 });
            o[n] && o[n].onChange && o[n].onChange.call(t, t, r[i]) }; var s = function(i) { var n = !1; return 13 == i.which || ("string" == typeof i.data.delimiter ? i.which == i.data.delimiter.charCodeAt(0) && (n = !0) : h.each(i.data.delimiter, function(t, e) { i.which == e.charCodeAt(0) && (n = !0) }), n) } }(jQuery),
    function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery) }(function(D, T) {
        function M() { return new Date(Date.UTC.apply(Date, arguments)) }

        function w() { var t = new Date; return M(t.getFullYear(), t.getMonth(), t.getDate()) }

        function s(t, e) { return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate() }

        function t(t, e) { return function() { return e !== T && D.fn.datepicker.deprecated(e), this[t].apply(this, arguments) } } var e, i = (e = { get: function(t) { return this.slice(t)[0] }, contains: function(t) { for (var e = t && t.valueOf(), i = 0, n = this.length; i < n; i++)
                        if (0 <= this[i].valueOf() - e && this[i].valueOf() - e < 864e5) return i; return -1 }, remove: function(t) { this.splice(t, 1) }, replace: function(t) { t && (D.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t)) }, clear: function() { this.length = 0 }, copy: function() { var t = new i; return t.replace(this), t } }, function() { var t = []; return t.push.apply(t, arguments), D.extend(t, e), t }),
            _ = function(t, e) { D.data(t, "datepicker", this), this._process_options(e), this.dates = new i, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = D(t), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = D(E.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(t, e) { return Number(e) + 1 }), this._process_options({ startDate: this._o.startDate, endDate: this._o.endDate, daysOfWeekDisabled: this.o.daysOfWeekDisabled, daysOfWeekHighlighted: this.o.daysOfWeekHighlighted, datesDisabled: this.o.datesDisabled }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show() };
        _.prototype = { constructor: _, _resolveViewName: function(i) { return D.each(E.viewModes, function(t, e) { if (i === t || -1 !== D.inArray(i, e.names)) return i = t, !1 }), i }, _resolveDaysOfWeek: function(t) { return D.isArray(t) || (t = t.split(/[,\s]*/)), D.map(t, Number) }, _check_template: function(t) { try { return t !== T && "" !== t && ((t.match(/[<>]/g) || []).length <= 0 || 0 < D(t).length) } catch (t) { return !1 } }, _process_options: function(t) { this._o = D.extend({}, this._o, t); var e = this.o = D.extend({}, this._o),
                    i = e.language;
                A[i] || (i = i.split("-")[0], A[i] || (i = u.language)), e.language = i, e.startView = this._resolveViewName(e.startView), e.minViewMode = this._resolveViewName(e.minViewMode), e.maxViewMode = this._resolveViewName(e.maxViewMode), e.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, e.startView)), !0 !== e.multidate && (e.multidate = Number(e.multidate) || !1, !1 !== e.multidate && (e.multidate = Math.max(0, e.multidate))), e.multidateSeparator = String(e.multidateSeparator), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7; var n = E.parseFormat(e.format);
                e.startDate !== -1 / 0 && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = E.parseDate(e.startDate, n, e.language, e.assumeNearbyYear) : e.startDate = -1 / 0), e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = E.parseDate(e.endDate, n, e.language, e.assumeNearbyYear) : e.endDate = 1 / 0), e.daysOfWeekDisabled = this._resolveDaysOfWeek(e.daysOfWeekDisabled || []), e.daysOfWeekHighlighted = this._resolveDaysOfWeek(e.daysOfWeekHighlighted || []), e.datesDisabled = e.datesDisabled || [], D.isArray(e.datesDisabled) || (e.datesDisabled = e.datesDisabled.split(",")), e.datesDisabled = D.map(e.datesDisabled, function(t) { return E.parseDate(t, n, e.language, e.assumeNearbyYear) }); var r = String(e.orientation).toLowerCase().split(/\s+/g),
                    s = e.orientation.toLowerCase(); if (r = D.grep(r, function(t) { return /^auto|left|right|top|bottom$/.test(t) }), e.orientation = { x: "auto", y: "auto" }, s && "auto" !== s)
                    if (1 === r.length) switch (r[0]) {
                        case "top":
                        case "bottom":
                            e.orientation.y = r[0]; break;
                        case "left":
                        case "right":
                            e.orientation.x = r[0] } else s = D.grep(r, function(t) { return /^left|right$/.test(t) }), e.orientation.x = s[0] || "auto", s = D.grep(r, function(t) { return /^top|bottom$/.test(t) }), e.orientation.y = s[0] || "auto"; if (e.defaultViewDate instanceof Date || "string" == typeof e.defaultViewDate) e.defaultViewDate = E.parseDate(e.defaultViewDate, n, e.language, e.assumeNearbyYear);
                else if (e.defaultViewDate) { var a = e.defaultViewDate.year || (new Date).getFullYear(),
                        o = e.defaultViewDate.month || 0,
                        l = e.defaultViewDate.day || 1;
                    e.defaultViewDate = M(a, o, l) } else e.defaultViewDate = w() }, _events: [], _secondaryEvents: [], _applyEvents: function(t) { for (var e, i, n, r = 0; r < t.length; r++) e = t[r][0], 2 === t[r].length ? (i = T, n = t[r][1]) : 3 === t[r].length && (i = t[r][1], n = t[r][2]), e.on(n, i) }, _unapplyEvents: function(t) { for (var e, i, n, r = 0; r < t.length; r++) e = t[r][0], 2 === t[r].length ? (n = T, i = t[r][1]) : 3 === t[r].length && (n = t[r][1], i = t[r][2]), e.off(i, n) }, _buildEvents: function() { var t = { keyup: D.proxy(function(t) {-1 === D.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update() }, this), keydown: D.proxy(this.keydown, this), paste: D.proxy(this.paste, this) };!0 === this.o.showOnFocus && (t.focus = D.proxy(this.show, this)), this.isInput ? this._events = [
                    [this.element, t]
                ] : this.component && this.inputField.length ? this._events = [
                    [this.inputField, t],
                    [this.component, { click: D.proxy(this.show, this) }]
                ] : this._events = [
                    [this.element, { click: D.proxy(this.show, this), keydown: D.proxy(this.keydown, this) }]
                ], this._events.push([this.element, "*", { blur: D.proxy(function(t) { this._focused_from = t.target }, this) }], [this.element, { blur: D.proxy(function(t) { this._focused_from = t.target }, this) }]), this.o.immediateUpdates && this._events.push([this.element, { "changeYear changeMonth": D.proxy(function(t) { this.update(t.date) }, this) }]), this._secondaryEvents = [
                    [this.picker, { click: D.proxy(this.click, this) }],
                    [this.picker, ".prev, .next", { click: D.proxy(this.navArrowsClick, this) }],
                    [this.picker, ".day:not(.disabled)", { click: D.proxy(this.dayCellClick, this) }],
                    [D(window), { resize: D.proxy(this.place, this) }],
                    [D(document), { "mousedown touchstart": D.proxy(function(t) { this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.isInline || this.hide() }, this) }]
                ] }, _attachEvents: function() { this._detachEvents(), this._applyEvents(this._events) }, _detachEvents: function() { this._unapplyEvents(this._events) }, _attachSecondaryEvents: function() { this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents) }, _detachSecondaryEvents: function() { this._unapplyEvents(this._secondaryEvents) }, _trigger: function(t, e) { var i = e || this.dates.get(-1),
                    n = this._utc_to_local(i);
                this.element.trigger({ type: t, date: n, viewMode: this.viewMode, dates: D.map(this.dates, this._utc_to_local), format: D.proxy(function(t, e) { 0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format; var i = this.dates.get(t); return E.formatDate(i, e, this.o.language) }, this) }) }, show: function() { if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && D(this.element).blur(), this }, hide: function() { return this.isInline || !this.picker.is(":visible") || (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide")), this }, destroy: function() { return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this }, paste: function(t) { var e; if (t.originalEvent.clipboardData && t.originalEvent.clipboardData.types && -1 !== D.inArray("text/plain", t.originalEvent.clipboardData.types)) e = t.originalEvent.clipboardData.getData("text/plain");
                else { if (!window.clipboardData) return;
                    e = window.clipboardData.getData("Text") } this.setDate(e), this.update(), t.preventDefault() }, _utc_to_local: function(t) { if (!t) return t; var e = new Date(t.getTime() + 6e4 * t.getTimezoneOffset()); return e.getTimezoneOffset() !== t.getTimezoneOffset() && (e = new Date(t.getTime() + 6e4 * e.getTimezoneOffset())), e }, _local_to_utc: function(t) { return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset()) }, _zero_time: function(t) { return t && new Date(t.getFullYear(), t.getMonth(), t.getDate()) }, _zero_utc_time: function(t) { return t && M(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()) }, getDates: function() { return D.map(this.dates, this._utc_to_local) }, getUTCDates: function() { return D.map(this.dates, function(t) { return new Date(t) }) }, getDate: function() { return this._utc_to_local(this.getUTCDate()) }, getUTCDate: function() { var t = this.dates.get(-1); return t !== T ? new Date(t) : null }, clearDates: function() { this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide() }, setDates: function() { var t = D.isArray(arguments[0]) ? arguments[0] : arguments; return this.update.apply(this, t), this._trigger("changeDate"), this.setValue(), this }, setUTCDates: function() { var t = D.isArray(arguments[0]) ? arguments[0] : arguments; return this.setDates.apply(this, D.map(t, this._utc_to_local)), this }, setDate: t("setDates"), setUTCDate: t("setUTCDates"), remove: t("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"), setValue: function() { var t = this.getFormattedDate(); return this.inputField.val(t), this }, getFormattedDate: function(e) { e === T && (e = this.o.format); var i = this.o.language; return D.map(this.dates, function(t) { return E.formatDate(t, e, i) }).join(this.o.multidateSeparator) }, getStartDate: function() { return this.o.startDate }, setStartDate: function(t) { return this._process_options({ startDate: t }), this.update(), this.updateNavArrows(), this }, getEndDate: function() { return this.o.endDate }, setEndDate: function(t) { return this._process_options({ endDate: t }), this.update(), this.updateNavArrows(), this }, setDaysOfWeekDisabled: function(t) { return this._process_options({ daysOfWeekDisabled: t }), this.update(), this }, setDaysOfWeekHighlighted: function(t) { return this._process_options({ daysOfWeekHighlighted: t }), this.update(), this }, setDatesDisabled: function(t) { return this._process_options({ datesDisabled: t }), this.update(), this }, place: function() { if (this.isInline) return this; var t = this.picker.outerWidth(),
                    e = this.picker.outerHeight(),
                    i = D(this.o.container),
                    n = i.width(),
                    r = "body" === this.o.container ? D(document).scrollTop() : i.scrollTop(),
                    s = i.offset(),
                    a = [0];
                this.element.parents().each(function() { var t = D(this).css("z-index"); "auto" !== t && 0 !== Number(t) && a.push(Number(t)) }); var o = Math.max.apply(Math, a) + this.o.zIndexOffset,
                    l = this.component ? this.component.parent().offset() : this.element.offset(),
                    h = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    u = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    c = l.left - s.left,
                    d = l.top - s.top; "body" !== this.o.container && (d += r), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (c -= t - u)) : l.left < 0 ? (this.picker.addClass("datepicker-orient-left"), c -= l.left - 10) : n < c + t ? (this.picker.addClass("datepicker-orient-right"), c += u - t) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left"); var p = this.o.orientation.y; if ("auto" === p && (p = -r + d - e < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + p), "top" === p ? d -= e + parseInt(this.picker.css("padding-top")) : d += h, this.o.rtl) { var f = n - (c + u);
                    this.picker.css({ top: d, right: f, zIndex: o }) } else this.picker.css({ top: d, left: c, zIndex: o }); return this }, _allow_update: !0, update: function() { if (!this._allow_update) return this; var t = this.dates.copy(),
                    i = [],
                    e = !1; return arguments.length ? (D.each(arguments, D.proxy(function(t, e) { e instanceof Date && (e = this._local_to_utc(e)), i.push(e) }, this)), e = !0) : (i = (i = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val()) && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = D.map(i, D.proxy(function(t) { return E.parseDate(t, this.o.format, this.o.language, this.o.assumeNearbyYear) }, this)), i = D.grep(i, D.proxy(function(t) { return !this.dateWithinRange(t) || !t }, this), !0), this.dates.replace(i), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), e ? (this.setValue(), this.element.change()) : this.dates.length && String(t) !== String(this.dates) && e && (this._trigger("changeDate"), this.element.change()), !this.dates.length && t.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this }, fillDow: function() { if (this.o.showWeekDays) { var t = this.o.weekStart,
                        e = "<tr>"; for (this.o.calendarWeeks && (e += '<th class="cw">&#160;</th>'); t < this.o.weekStart + 7;) e += '<th class="dow', -1 !== D.inArray(t, this.o.daysOfWeekDisabled) && (e += " disabled"), e += '">' + A[this.o.language].daysMin[t++ % 7] + "</th>";
                    e += "</tr>", this.picker.find(".datepicker-days thead").append(e) } }, fillMonths: function() { for (var t = this._utc_to_local(this.viewDate), e = "", i = 0; i < 12; i++) e += '<span class="month' + (t && t.getMonth() === i ? " focused" : "") + '">' + A[this.o.language].monthsShort[i] + "</span>";
                this.picker.find(".datepicker-months td").html(e) }, setRange: function(t) { t && t.length ? this.range = D.map(t, function(t) { return t.valueOf() }) : delete this.range, this.fill() }, getClassNames: function(t) { var e = [],
                    i = this.viewDate.getUTCFullYear(),
                    n = this.viewDate.getUTCMonth(),
                    r = w(); return t.getUTCFullYear() < i || t.getUTCFullYear() === i && t.getUTCMonth() < n ? e.push("old") : (t.getUTCFullYear() > i || t.getUTCFullYear() === i && t.getUTCMonth() > n) && e.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && e.push("focused"), this.o.todayHighlight && s(t, r) && e.push("today"), -1 !== this.dates.contains(t) && e.push("active"), this.dateWithinRange(t) || e.push("disabled"), this.dateIsDisabled(t) && e.push("disabled", "disabled-date"), -1 !== D.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) && e.push("highlighted"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && e.push("range"), -1 !== D.inArray(t.valueOf(), this.range) && e.push("selected"), t.valueOf() === this.range[0] && e.push("range-start"), t.valueOf() === this.range[this.range.length - 1] && e.push("range-end")), e }, _fill_yearsView: function(t, e, i, n, r, s, a) { for (var o, l, h, u = "", c = i / 10, d = this.picker.find(t), p = Math.floor(n / i) * i, f = p + 9 * c, g = Math.floor(this.viewDate.getFullYear() / c) * c, m = D.map(this.dates, function(t) { return Math.floor(t.getUTCFullYear() / c) * c }), v = p - c; v <= f + c; v += c) o = [e], l = null, v === p - c ? o.push("old") : v === f + c && o.push("new"), -1 !== D.inArray(v, m) && o.push("active"), (v < r || s < v) && o.push("disabled"), v === g && o.push("focused"), a !== D.noop && ((h = a(new Date(v, 0, 1))) === T ? h = {} : "boolean" == typeof h ? h = { enabled: h } : "string" == typeof h && (h = { classes: h }), !1 === h.enabled && o.push("disabled"), h.classes && (o = o.concat(h.classes.split(/\s+/))), h.tooltip && (l = h.tooltip)), u += '<span class="' + o.join(" ") + '"' + (l ? ' title="' + l + '"' : "") + ">" + v + "</span>";
                d.find(".datepicker-switch").text(p + "-" + f), d.find("td").html(u) }, fill: function() { var t, e, i = new Date(this.viewDate),
                    r = i.getUTCFullYear(),
                    n = i.getUTCMonth(),
                    s = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                    a = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                    o = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                    l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                    h = A[this.o.language].today || A.en.today || "",
                    u = A[this.o.language].clear || A.en.clear || "",
                    c = A[this.o.language].titleFormat || A.en.titleFormat; if (!isNaN(r) && !isNaN(n)) { this.picker.find(".datepicker-days .datepicker-switch").text(E.formatDate(i, c, this.o.language)), this.picker.find("tfoot .today").text(h).css("display", !0 === this.o.todayBtn || "linked" === this.o.todayBtn ? "table-cell" : "none"), this.picker.find("tfoot .clear").text(u).css("display", !0 === this.o.clearBtn ? "table-cell" : "none"), this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"), this.updateNavArrows(), this.fillMonths(); var d = M(r, n, 0),
                        p = d.getUTCDate();
                    d.setUTCDate(p - (d.getUTCDay() - this.o.weekStart + 7) % 7); var f = new Date(d);
                    d.getUTCFullYear() < 100 && f.setUTCFullYear(d.getUTCFullYear()), f.setUTCDate(f.getUTCDate() + 42), f = f.valueOf(); for (var g, m, v = []; d.valueOf() < f;) { if ((g = d.getUTCDay()) === this.o.weekStart && (v.push("<tr>"), this.o.calendarWeeks)) { var y = new Date(+d + (this.o.weekStart - g - 7) % 7 * 864e5),
                                b = new Date(Number(y) + (11 - y.getUTCDay()) % 7 * 864e5),
                                x = new Date(Number(x = M(b.getUTCFullYear(), 0, 1)) + (11 - x.getUTCDay()) % 7 * 864e5),
                                w = (b - x) / 864e5 / 7 + 1;
                            v.push('<td class="cw">' + w + "</td>") }(m = this.getClassNames(d)).push("day"); var _ = d.getUTCDate();
                        this.o.beforeShowDay !== D.noop && ((e = this.o.beforeShowDay(this._utc_to_local(d))) === T ? e = {} : "boolean" == typeof e ? e = { enabled: e } : "string" == typeof e && (e = { classes: e }), !1 === e.enabled && m.push("disabled"), e.classes && (m = m.concat(e.classes.split(/\s+/))), e.tooltip && (t = e.tooltip), e.content && (_ = e.content)), m = D.isFunction(D.uniqueSort) ? D.uniqueSort(m) : D.unique(m), v.push('<td class="' + m.join(" ") + '"' + (t ? ' title="' + t + '"' : "") + ' data-date="' + d.getTime().toString() + '">' + _ + "</td>"), t = null, g === this.o.weekEnd && v.push("</tr>"), d.setUTCDate(d.getUTCDate() + 1) } this.picker.find(".datepicker-days tbody").html(v.join("")); var S = A[this.o.language].monthsTitle || A.en.monthsTitle || "Months",
                        C = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? S : r).end().find("tbody span").removeClass("active"); if (D.each(this.dates, function(t, e) { e.getUTCFullYear() === r && C.eq(e.getUTCMonth()).addClass("active") }), (r < s || o < r) && C.addClass("disabled"), r === s && C.slice(0, a).addClass("disabled"), r === o && C.slice(l + 1).addClass("disabled"), this.o.beforeShowMonth !== D.noop) { var k = this;
                        D.each(C, function(t, e) { var i = new Date(r, t, 1),
                                n = k.o.beforeShowMonth(i);
                            n === T ? n = {} : "boolean" == typeof n ? n = { enabled: n } : "string" == typeof n && (n = { classes: n }), !1 !== n.enabled || D(e).hasClass("disabled") || D(e).addClass("disabled"), n.classes && D(e).addClass(n.classes), n.tooltip && D(e).prop("title", n.tooltip) }) } this._fill_yearsView(".datepicker-years", "year", 10, r, s, o, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, r, s, o, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, r, s, o, this.o.beforeShowCentury) } }, updateNavArrows: function() { if (this._allow_update) { var t, e, i = new Date(this.viewDate),
                        n = i.getUTCFullYear(),
                        r = i.getUTCMonth(),
                        s = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                        a = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                        o = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                        l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                        h = 1; switch (this.viewMode) {
                        case 4:
                            h *= 10;
                        case 3:
                            h *= 10;
                        case 2:
                            h *= 10;
                        case 1:
                            t = Math.floor(n / h) * h < s, e = Math.floor(n / h) * h + h > o; break;
                        case 0:
                            t = n <= s && r < a, e = o <= n && l < r } this.picker.find(".prev").toggleClass("disabled", t), this.picker.find(".next").toggleClass("disabled", e) } }, click: function(t) { var e, i, n;
                t.preventDefault(), t.stopPropagation(), (e = D(t.target)).hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), e.hasClass("today") && !e.hasClass("day") && (this.setViewMode(0), this._setDate(w(), "linked" === this.o.todayBtn ? null : "view")), e.hasClass("clear") && this.clearDates(), e.hasClass("disabled") || (e.hasClass("month") || e.hasClass("year") || e.hasClass("decade") || e.hasClass("century")) && (this.viewDate.setUTCDate(1), 1 === this.viewMode ? (n = e.parent().find("span").index(e), i = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(n)) : (n = 0, i = Number(e.text()), this.viewDate.setUTCFullYear(i)), this._trigger(E.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(M(i, n, 1)) : (this.setViewMode(this.viewMode - 1), this.fill())), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), delete this._focused_from }, dayCellClick: function(t) { var e = D(t.currentTarget).data("date"),
                    i = new Date(e);
                this.o.updateViewDate && (i.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), i.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)), this._setDate(i) }, navArrowsClick: function(t) { var e = D(t.currentTarget).hasClass("prev") ? -1 : 1;
                0 !== this.viewMode && (e *= 12 * E.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, e), this._trigger(E.viewModes[this.viewMode].e, this.viewDate), this.fill() }, _toggle_multidate: function(t) { var e = this.dates.contains(t); if (t || this.dates.clear(), -1 !== e ? (!0 === this.o.multidate || 1 < this.o.multidate || this.o.toggleActive) && this.dates.remove(e) : (!1 === this.o.multidate && this.dates.clear(), this.dates.push(t)), "number" == typeof this.o.multidate)
                    for (; this.dates.length > this.o.multidate;) this.dates.remove(0) }, _setDate: function(t, e) { e && "date" !== e || this._toggle_multidate(t && new Date(t)), (!e && this.o.updateViewDate || "view" === e) && (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate"), this.inputField.trigger("change"), !this.o.autoclose || e && "date" !== e || this.hide() }, moveDay: function(t, e) { var i = new Date(t); return i.setUTCDate(t.getUTCDate() + e), i }, moveWeek: function(t, e) { return this.moveDay(t, 7 * e) }, moveMonth: function(t, e) { if (!(i = t) || isNaN(i.getTime())) return this.o.defaultViewDate; var i; if (!e) return t; var n, r, s = new Date(t.valueOf()),
                    a = s.getUTCDate(),
                    o = s.getUTCMonth(),
                    l = Math.abs(e); if (e = 0 < e ? 1 : -1, 1 === l) r = -1 === e ? function() { return s.getUTCMonth() === o } : function() { return s.getUTCMonth() !== n }, n = o + e, s.setUTCMonth(n), n = (n + 12) % 12;
                else { for (var h = 0; h < l; h++) s = this.moveMonth(s, e);
                    n = s.getUTCMonth(), s.setUTCDate(a), r = function() { return n !== s.getUTCMonth() } } for (; r();) s.setUTCDate(--a), s.setUTCMonth(n); return s }, moveYear: function(t, e) { return this.moveMonth(t, 12 * e) }, moveAvailableDate: function(t, e, i) { do { if (t = this[i](t, e), !this.dateWithinRange(t)) return !1;
                    i = "moveDay" } while (this.dateIsDisabled(t)); return t }, weekOfDateIsDisabled: function(t) { return -1 !== D.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled) }, dateIsDisabled: function(e) { return this.weekOfDateIsDisabled(e) || 0 < D.grep(this.o.datesDisabled, function(t) { return s(e, t) }).length }, dateWithinRange: function(t) { return t >= this.o.startDate && t <= this.o.endDate }, keydown: function(t) { if (this.picker.is(":visible")) { var e, i, n = !1,
                        r = this.focusDate || this.viewDate; switch (t.keyCode) {
                        case 27:
                            this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault(), t.stopPropagation(); break;
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                            if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                            e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1, 0 === this.viewMode ? t.ctrlKey ? (i = this.moveAvailableDate(r, e, "moveYear")) && this._trigger("changeYear", this.viewDate) : t.shiftKey ? (i = this.moveAvailableDate(r, e, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === t.keyCode || 39 === t.keyCode ? i = this.moveAvailableDate(r, e, "moveDay") : this.weekOfDateIsDisabled(r) || (i = this.moveAvailableDate(r, e, "moveWeek")) : 1 === this.viewMode ? (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), i = this.moveAvailableDate(r, e, "moveMonth")) : 2 === this.viewMode && (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), i = this.moveAvailableDate(r, e, "moveYear")), i && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), t.preventDefault()); break;
                        case 13:
                            if (!this.o.forceParse) break;
                            r = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(r), n = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), t.stopPropagation(), this.o.autoclose && this.hide()); break;
                        case 9:
                            this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide() } n && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change")) } else 40 !== t.keyCode && 27 !== t.keyCode || (this.show(), t.stopPropagation()) }, setViewMode: function(t) { this.viewMode = t, this.picker.children("div").hide().filter(".datepicker-" + E.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate)) } }; var h = function(t, e) { D.data(t, "datepicker", this), this.element = D(t), this.inputs = D.map(e.inputs, function(t) { return t.jquery ? t[0] : t }), delete e.inputs, this.keepEmptyValues = e.keepEmptyValues, delete e.keepEmptyValues, r.call(D(this.inputs), e).on("changeDate", D.proxy(this.dateUpdated, this)), this.pickers = D.map(this.inputs, function(t) { return D.data(t, "datepicker") }), this.updateDates() };
        h.prototype = { updateDates: function() { this.dates = D.map(this.pickers, function(t) { return t.getUTCDate() }), this.updateRanges() }, updateRanges: function() { var i = D.map(this.dates, function(t) { return t.valueOf() });
                D.each(this.pickers, function(t, e) { e.setRange(i) }) }, clearDates: function() { D.each(this.pickers, function(t, e) { e.clearDates() }) }, dateUpdated: function(t) { if (!this.updating) { this.updating = !0; var i = D.data(t.target, "datepicker"); if (i !== T) { var n = i.getUTCDate(),
                            r = this.keepEmptyValues,
                            e = D.inArray(t.target, this.inputs),
                            s = e - 1,
                            a = e + 1,
                            o = this.inputs.length; if (-1 !== e) { if (D.each(this.pickers, function(t, e) { e.getUTCDate() || e !== i && r || e.setUTCDate(n) }), n < this.dates[s])
                                for (; 0 <= s && n < this.dates[s];) this.pickers[s--].setUTCDate(n);
                            else if (n > this.dates[a])
                                for (; a < o && n > this.dates[a];) this.pickers[a++].setUTCDate(n);
                            this.updateDates(), delete this.updating } } } }, destroy: function() { D.map(this.pickers, function(t) { t.destroy() }), D(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker }, remove: t("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead") }; var n = D.fn.datepicker,
            r = function(a) { var o, l = Array.apply(null, arguments); if (l.shift(), this.each(function() { var t = D(this),
                            e = t.data("datepicker"),
                            i = "object" == typeof a && a; if (!e) { var n = function(t, e) {
                                    function i(t, e) { return e.toLowerCase() } var n = D(t).data(),
                                        r = {},
                                        s = new RegExp("^" + e.toLowerCase() + "([A-Z])"); for (var a in e = new RegExp("^" + e.toLowerCase()), n) e.test(a) && (r[a.replace(s, i)] = n[a]); return r }(this, "date"),
                                r = function(t) { var i = {}; if (A[t] || (t = t.split("-")[0], A[t])) { var n = A[t]; return D.each(c, function(t, e) { e in n && (i[e] = n[e]) }), i } }(D.extend({}, u, n, i).language),
                                s = D.extend({}, u, r, n, i);
                            e = t.hasClass("input-daterange") || s.inputs ? (D.extend(s, { inputs: s.inputs || t.find("input").toArray() }), new h(this, s)) : new _(this, s), t.data("datepicker", e) } "string" == typeof a && "function" == typeof e[a] && (o = e[a].apply(e, l)) }), o === T || o instanceof _ || o instanceof h) return this; if (1 < this.length) throw new Error("Using only allowed for the collection of a single element (" + a + " function)"); return o };
        D.fn.datepicker = r; var u = D.fn.datepicker.defaults = { assumeNearbyYear: !1, autoclose: !1, beforeShowDay: D.noop, beforeShowMonth: D.noop, beforeShowYear: D.noop, beforeShowDecade: D.noop, beforeShowCentury: D.noop, calendarWeeks: !1, clearBtn: !1, toggleActive: !1, daysOfWeekDisabled: [], daysOfWeekHighlighted: [], datesDisabled: [], endDate: 1 / 0, forceParse: !0, format: "mm/dd/yyyy", keepEmptyValues: !1, keyboardNavigation: !0, language: "en", minViewMode: 0, maxViewMode: 4, multidate: !1, multidateSeparator: ",", orientation: "auto", rtl: !1, startDate: -1 / 0, startView: 0, todayBtn: !1, todayHighlight: !1, updateViewDate: !0, weekStart: 0, disableTouchKeyboard: !1, enableOnReadonly: !0, showOnFocus: !0, zIndexOffset: 10, container: "body", immediateUpdates: !1, title: "", templates: { leftArrow: "&#x00AB;", rightArrow: "&#x00BB;" }, showWeekDays: !0 },
            c = D.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        D.fn.datepicker.Constructor = _; var A = D.fn.datepicker.dates = { en: { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", clear: "Clear", titleFormat: "MM yyyy" } },
            E = { viewModes: [{ names: ["days", "month"], clsName: "days", e: "changeMonth" }, { names: ["months", "year"], clsName: "months", e: "changeYear", navStep: 1 }, { names: ["years", "decade"], clsName: "years", e: "changeDecade", navStep: 10 }, { names: ["decades", "century"], clsName: "decades", e: "changeCentury", navStep: 100 }, { names: ["centuries", "millennium"], clsName: "centuries", e: "changeMillennium", navStep: 1e3 }], validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g, nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g, parseFormat: function(t) { if ("function" == typeof t.toValue && "function" == typeof t.toDisplay) return t; var e = t.replace(this.validParts, "\0").split("\0"),
                        i = t.match(this.validParts); if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format."); return { separators: e, parts: i } }, parseDate: function(t, e, i, r) {
                    function n() { var t = this.slice(0, s[l].length),
                            e = s[l].slice(0, t.length); return t.toLowerCase() === e.toLowerCase() } if (!t) return T; if (t instanceof Date) return t; if ("string" == typeof e && (e = E.parseFormat(e)), e.toValue) return e.toValue(t, e, i); var s, a, o, l, h, u = { d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear" },
                        c = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" }; if (t in c && (t = c[t]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(t)) { for (s = t.match(/([\-+]\d+)([dmwy])/gi), t = new Date, l = 0; l < s.length; l++) a = s[l].match(/([\-+]\d+)([dmwy])/i), o = Number(a[1]), h = u[a[2].toLowerCase()], t = _.prototype[h](t, o); return _.prototype._zero_utc_time(t) } s = t && t.match(this.nonpunctuation) || []; var d, p, f = {},
                        g = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        m = { yyyy: function(t, e) { return t.setUTCFullYear(r ? (!0 === (n = r) && (n = 10), (i = e) < 100 && (i += 2e3) > (new Date).getFullYear() + n && (i -= 100), i) : e); var i, n }, m: function(t, e) { if (isNaN(t)) return t; for (e -= 1; e < 0;) e += 12; for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1); return t }, d: function(t, e) { return t.setUTCDate(e) } };
                    m.yy = m.yyyy, m.M = m.MM = m.mm = m.m, m.dd = m.d, t = w(); var v = e.parts.slice(); if (s.length !== v.length && (v = D(v).filter(function(t, e) { return -1 !== D.inArray(e, g) }).toArray()), s.length === v.length) { var y, b, x; for (l = 0, y = v.length; l < y; l++) { if (d = parseInt(s[l], 10), a = v[l], isNaN(d)) switch (a) {
                                case "MM":
                                    p = D(A[i].months).filter(n), d = D.inArray(p[0], A[i].months) + 1; break;
                                case "M":
                                    p = D(A[i].monthsShort).filter(n), d = D.inArray(p[0], A[i].monthsShort) + 1 } f[a] = d } for (l = 0; l < g.length; l++)(x = g[l]) in f && !isNaN(f[x]) && (b = new Date(t), m[x](b, f[x]), isNaN(b) || (t = b)) } return t }, formatDate: function(t, e, i) { if (!t) return ""; if ("string" == typeof e && (e = E.parseFormat(e)), e.toDisplay) return e.toDisplay(t, e, i); var n = { d: t.getUTCDate(), D: A[i].daysShort[t.getUTCDay()], DD: A[i].days[t.getUTCDay()], m: t.getUTCMonth() + 1, M: A[i].monthsShort[t.getUTCMonth()], MM: A[i].months[t.getUTCMonth()], yy: t.getUTCFullYear().toString().substring(2), yyyy: t.getUTCFullYear() };
                    n.dd = (n.d < 10 ? "0" : "") + n.d, n.mm = (n.m < 10 ? "0" : "") + n.m, t = []; for (var r = D.extend([], e.separators), s = 0, a = e.parts.length; s <= a; s++) r.length && t.push(r.shift()), t.push(n[e.parts[s]]); return t.join("") }, headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + u.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + u.templates.rightArrow + "</th></tr></thead>", contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>', footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>' };
        E.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + E.headTemplate + "<tbody></tbody>" + E.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + E.headTemplate + E.contTemplate + E.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + E.headTemplate + E.contTemplate + E.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + E.headTemplate + E.contTemplate + E.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + E.headTemplate + E.contTemplate + E.footTemplate + "</table></div></div>", D.fn.datepicker.DPGlobal = E, D.fn.datepicker.noConflict = function() { return D.fn.datepicker = n, this }, D.fn.datepicker.version = "1.8.0", D.fn.datepicker.deprecated = function(t) { var e = window.console;
            e && e.warn && e.warn("DEPRECATED: " + t) }, D(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(t) { var e = D(this);
            e.data("datepicker") || (t.preventDefault(), r.call(e, "show")) }), D(function() { r.call(D('[data-provide="datepicker-inline"]')) }) }),
    function(i) { "function" == typeof define && define.amd ? define(["jquery"], i) : "object" == typeof module && module.exports ? module.exports = function(t, e) { return void 0 === e && (e = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), i(e), e } : i(jQuery) }(function(i) { var t = function() { if (i && i.fn && i.fn.select2 && i.fn.select2.amd) var t = i.fn.select2.amd; var e, r, h; return t && t.requirejs || (t ? r = t : t = {}, function(p) {
                    function f(t, e) { return i.call(t, e) }

                    function o(t, e) { var i, n, r, s, a, o, l, h, u, c, d, p = e && e.split("/"),
                            f = S.map,
                            g = f && f["*"] || {}; if (t) { for (a = (t = t.split("/")).length - 1, S.nodeIdCompat && k.test(t[a]) && (t[a] = t[a].replace(k, "")), "." === t[0].charAt(0) && p && (t = p.slice(0, p.length - 1).concat(t)), u = 0; u < t.length; u++)
                                if ("." === (d = t[u])) t.splice(u, 1), u -= 1;
                                else if (".." === d) { if (0 === u || 1 === u && ".." === t[2] || ".." === t[u - 1]) continue;
                                0 < u && (t.splice(u - 1, 2), u -= 2) } t = t.join("/") } if ((p || g) && f) { for (u = (i = t.split("/")).length; 0 < u; u -= 1) { if (n = i.slice(0, u).join("/"), p)
                                    for (c = p.length; 0 < c; c -= 1)
                                        if ((r = f[p.slice(0, c).join("/")]) && (r = r[n])) { s = r, o = u; break } if (s) break;!l && g && g[n] && (l = g[n], h = u) }!s && l && (s = l, o = h), s && (i.splice(0, o, s), t = i.join("/")) } return t }

                    function g(e, i) { return function() { var t = n.call(arguments, 0); return "string" != typeof t[0] && 1 === t.length && t.push(null), a.apply(p, t.concat([e, i])) } }

                    function m(e) { return function(t) { w[e] = t } }

                    function v(t) { if (f(_, t)) { var e = _[t];
                            delete _[t], C[t] = !0, s.apply(p, e) } if (!f(w, t) && !f(C, t)) throw new Error("No " + t); return w[t] }

                    function l(t) { var e, i = t ? t.indexOf("!") : -1; return -1 < i && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [e, t] }

                    function y(t) { return t ? l(t) : [] } var s, a, b, x, w = {},
                        _ = {},
                        S = {},
                        C = {},
                        i = Object.prototype.hasOwnProperty,
                        n = [].slice,
                        k = /\.js$/;
                    b = function(t, e) { var i, n, r = l(t),
                            s = r[0],
                            a = e[1]; return t = r[1], s && (i = v(s = o(s, a))), s ? t = i && i.normalize ? i.normalize(t, (n = a, function(t) { return o(t, n) })) : o(t, a) : (s = (r = l(t = o(t, a)))[0], t = r[1], s && (i = v(s))), { f: s ? s + "!" + t : t, n: t, pr: s, p: i } }, x = { require: function(t) { return g(t) }, exports: function(t) { var e = w[t]; return void 0 !== e ? e : w[t] = {} }, module: function(t) { return { id: t, uri: "", exports: w[t], config: (e = t, function() { return S && S.config && S.config[e] || {} }) }; var e } }, s = function(t, e, i, n) { var r, s, a, o, l, h, u, c = [],
                            d = typeof i; if (h = y(n = n || t), "undefined" === d || "function" === d) { for (e = !e.length && i.length ? ["require", "exports", "module"] : e, l = 0; l < e.length; l += 1)
                                if ("require" === (s = (o = b(e[l], h)).f)) c[l] = x.require(t);
                                else if ("exports" === s) c[l] = x.exports(t), u = !0;
                            else if ("module" === s) r = c[l] = x.module(t);
                            else if (f(w, s) || f(_, s) || f(C, s)) c[l] = v(s);
                            else { if (!o.p) throw new Error(t + " missing " + s);
                                o.p.load(o.n, g(n, !0), m(s), {}), c[l] = w[s] } a = i ? i.apply(w[t], c) : void 0, t && (r && r.exports !== p && r.exports !== w[t] ? w[t] = r.exports : a === p && u || (w[t] = a)) } else t && (w[t] = i) }, e = r = a = function(t, e, i, n, r) { if ("string" == typeof t) return x[t] ? x[t](e) : v(b(t, y(e)).f); if (!t.splice) { if ((S = t).deps && a(S.deps, S.callback), !e) return;
                            e.splice ? (t = e, e = i, i = null) : t = p } return e = e || function() {}, "function" == typeof i && (i = n, n = r), n ? s(p, t, e, i) : setTimeout(function() { s(p, t, e, i) }, 4), a }, a.config = function(t) { return a(t) }, e._defined = w, (h = function(t, e, i) { if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                        e.splice || (i = e, e = []), f(w, t) || f(_, t) || (_[t] = [t, e, i]) }).amd = { jQuery: !0 } }(), t.requirejs = e, t.require = r, t.define = h), t.define("almond", function() {}), t.define("jquery", [], function() { var t = i || $; return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t }), t.define("select2/utils", ["jquery"], function(s) {
                    function u(t) { var e = t.prototype,
                            i = []; for (var n in e) "function" == typeof e[n] && "constructor" !== n && i.push(n); return i } var r = { Extend: function(t, e) {
                                function i() { this.constructor = t } var n = {}.hasOwnProperty; for (var r in e) n.call(e, r) && (t[r] = e[r]); return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t }, Decorate: function(n, r) {
                                function s() { var t = Array.prototype.unshift,
                                        e = r.prototype.constructor.length,
                                        i = n.prototype.constructor;
                                    0 < e && (t.call(arguments, n.prototype.constructor), i = r.prototype.constructor), i.apply(this, arguments) } var t = u(r),
                                    e = u(n);
                                r.displayName = n.displayName, s.prototype = new function() { this.constructor = s }; for (var i = 0; i < e.length; i++) { var a = e[i];
                                    s.prototype[a] = n.prototype[a] } for (var o = function(t) { var e = function() {};
                                        t in s.prototype && (e = s.prototype[t]); var i = r.prototype[t]; return function() { return Array.prototype.unshift.call(arguments, e), i.apply(this, arguments) } }, l = 0; l < t.length; l++) { var h = t[l];
                                    s.prototype[h] = o(h) } return s } },
                        t = function() { this.listeners = {} };
                    t.prototype.on = function(t, e) { this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e] }, t.prototype.trigger = function(t) { var e = Array.prototype.slice,
                            i = e.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == i && (i = []), 0 === i.length && i.push({}), (i[0]._type = t) in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments) }, t.prototype.invoke = function(t, e) { for (var i = 0, n = t.length; i < n; i++) t[i].apply(this, e) }, r.Observable = t, r.generateChars = function(t) { for (var e = "", i = 0; i < t; i++) e += Math.floor(36 * Math.random()).toString(36); return e }, r.bind = function(t, e) { return function() { t.apply(e, arguments) } }, r._convertData = function(t) { for (var e in t) { var i = e.split("-"),
                                n = t; if (1 !== i.length) { for (var r = 0; r < i.length; r++) { var s = i[r];
                                    (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in n || (n[s] = {}), r == i.length - 1 && (n[s] = t[e]), n = n[s] } delete t[e] } } return t }, r.hasScroll = function(t, e) { var i = s(e),
                            n = e.style.overflowX,
                            r = e.style.overflowY; return (n !== r || "hidden" !== r && "visible" !== r) && ("scroll" === n || "scroll" === r || i.innerHeight() < e.scrollHeight || i.innerWidth() < e.scrollWidth) }, r.escapeMarkup = function(t) { var e = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function(t) { return e[t] }) }, r.appendMany = function(t, e) { if ("1.7" === s.fn.jquery.substr(0, 3)) { var i = s();
                            s.map(e, function(t) { i = i.add(t) }), e = i } t.append(e) }, r.__cache = {}; var i = 0; return r.GetUniqueElementId = function(t) { var e = t.getAttribute("data-select2-id"); return null == e && (t.id ? (e = t.id, t.setAttribute("data-select2-id", e)) : (t.setAttribute("data-select2-id", ++i), e = i.toString())), e }, r.StoreData = function(t, e, i) { var n = r.GetUniqueElementId(t);
                        r.__cache[n] || (r.__cache[n] = {}), r.__cache[n][e] = i }, r.GetData = function(t, e) { var i = r.GetUniqueElementId(t); return e ? r.__cache[i] && null != r.__cache[i][e] ? r.__cache[i][e] : s(t).data(e) : r.__cache[i] }, r.RemoveData = function(t) { var e = r.GetUniqueElementId(t);
                        null != r.__cache[e] && delete r.__cache[e] }, r }), t.define("select2/results", ["jquery", "./utils"], function(d, p) {
                    function n(t, e, i) { this.$element = t, this.data = i, this.options = e, n.__super__.constructor.call(this) } return p.Extend(n, p.Observable), n.prototype.render = function() { var t = d('<ul class="select2-results__options" role="tree"></ul>'); return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t }, n.prototype.clear = function() { this.$results.empty() }, n.prototype.displayMessage = function(t) { var e = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading(); var i = d('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            n = this.options.get("translations").get(t.message);
                        i.append(e(n(t.args))), i[0].className += " select2-results__message", this.$results.append(i) }, n.prototype.hideMessages = function() { this.$results.find(".select2-results__message").remove() }, n.prototype.append = function(t) { this.hideLoading(); var e = []; if (null != t.results && 0 !== t.results.length) { t.results = this.sort(t.results); for (var i = 0; i < t.results.length; i++) { var n = t.results[i],
                                    r = this.option(n);
                                e.push(r) } this.$results.append(e) } else 0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }) }, n.prototype.position = function(t, e) { e.find(".select2-results").append(t) }, n.prototype.sort = function(t) { return this.options.get("sorter")(t) }, n.prototype.highlightFirstItem = function() { var t = this.$results.find(".select2-results__option[aria-selected]"),
                            e = t.filter("[aria-selected=true]");
                        0 < e.length ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible() }, n.prototype.setClasses = function() { var e = this;
                        this.data.current(function(t) { var n = d.map(t, function(t) { return t.id.toString() });
                            e.$results.find(".select2-results__option[aria-selected]").each(function() { var t = d(this),
                                    e = p.GetData(this, "data"),
                                    i = "" + e.id;
                                null != e.element && e.element.selected || null == e.element && -1 < d.inArray(i, n) ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false") }) }) }, n.prototype.showLoading = function(t) { this.hideLoading(); var e = { disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(t) },
                            i = this.option(e);
                        i.className += " loading-results", this.$results.prepend(i) }, n.prototype.hideLoading = function() { this.$results.find(".loading-results").remove() }, n.prototype.option = function(t) { var e = document.createElement("li");
                        e.className = "select2-results__option"; var i = { role: "treeitem", "aria-selected": "false" }; for (var n in t.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == t.id && delete i["aria-selected"], null != t._resultId && (e.id = t._resultId), t.title && (e.title = t.title), t.children && (i.role = "group", i["aria-label"] = t.text, delete i["aria-selected"]), i) { var r = i[n];
                            e.setAttribute(n, r) } if (t.children) { var s = d(e),
                                a = document.createElement("strong");
                            a.className = "select2-results__group", d(a), this.template(t, a); for (var o = [], l = 0; l < t.children.length; l++) { var h = t.children[l],
                                    u = this.option(h);
                                o.push(u) } var c = d("<ul></ul>", { class: "select2-results__options select2-results__options--nested" });
                            c.append(o), s.append(a), s.append(c) } else this.template(t, e); return p.StoreData(e, "data", t), e }, n.prototype.bind = function(e, t) { var l = this,
                            i = e.id + "-results";
                        this.$results.attr("id", i), e.on("results:all", function(t) { l.clear(), l.append(t.data), e.isOpen() && (l.setClasses(), l.highlightFirstItem()) }), e.on("results:append", function(t) { l.append(t.data), e.isOpen() && l.setClasses() }), e.on("query", function(t) { l.hideMessages(), l.showLoading(t) }), e.on("select", function() { e.isOpen() && (l.setClasses(), l.highlightFirstItem()) }), e.on("unselect", function() { e.isOpen() && (l.setClasses(), l.highlightFirstItem()) }), e.on("open", function() { l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible() }), e.on("close", function() { l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant") }), e.on("results:toggle", function() { var t = l.getHighlightedResults();
                            0 !== t.length && t.trigger("mouseup") }), e.on("results:select", function() { var t = l.getHighlightedResults(); if (0 !== t.length) { var e = p.GetData(t[0], "data"); "true" == t.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", { data: e }) } }), e.on("results:previous", function() { var t = l.getHighlightedResults(),
                                e = l.$results.find("[aria-selected]"),
                                i = e.index(t); if (!(i <= 0)) { var n = i - 1;
                                0 === t.length && (n = 0); var r = e.eq(n);
                                r.trigger("mouseenter"); var s = l.$results.offset().top,
                                    a = r.offset().top,
                                    o = l.$results.scrollTop() + (a - s);
                                0 === n ? l.$results.scrollTop(0) : a - s < 0 && l.$results.scrollTop(o) } }), e.on("results:next", function() { var t = l.getHighlightedResults(),
                                e = l.$results.find("[aria-selected]"),
                                i = e.index(t) + 1; if (!(i >= e.length)) { var n = e.eq(i);
                                n.trigger("mouseenter"); var r = l.$results.offset().top + l.$results.outerHeight(!1),
                                    s = n.offset().top + n.outerHeight(!1),
                                    a = l.$results.scrollTop() + s - r;
                                0 === i ? l.$results.scrollTop(0) : r < s && l.$results.scrollTop(a) } }), e.on("results:focus", function(t) { t.element.addClass("select2-results__option--highlighted") }), e.on("results:message", function(t) { l.displayMessage(t) }), d.fn.mousewheel && this.$results.on("mousewheel", function(t) { var e = l.$results.scrollTop(),
                                i = l.$results.get(0).scrollHeight - e + t.deltaY,
                                n = 0 < t.deltaY && e - t.deltaY <= 0,
                                r = t.deltaY < 0 && i <= l.$results.height();
                            n ? (l.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : r && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), t.preventDefault(), t.stopPropagation()) }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) { var e = d(this),
                                i = p.GetData(this, "data"); "true" !== e.attr("aria-selected") ? l.trigger("select", { originalEvent: t, data: i }) : l.options.get("multiple") ? l.trigger("unselect", { originalEvent: t, data: i }) : l.trigger("close", {}) }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(t) { var e = p.GetData(this, "data");
                            l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", { data: e, element: d(this) }) }) }, n.prototype.getHighlightedResults = function() { return this.$results.find(".select2-results__option--highlighted") }, n.prototype.destroy = function() { this.$results.remove() }, n.prototype.ensureHighlightVisible = function() { var t = this.getHighlightedResults(); if (0 !== t.length) { var e = this.$results.find("[aria-selected]").index(t),
                                i = this.$results.offset().top,
                                n = t.offset().top,
                                r = this.$results.scrollTop() + (n - i),
                                s = n - i;
                            r -= 2 * t.outerHeight(!1), e <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(r) } }, n.prototype.template = function(t, e) { var i = this.options.get("templateResult"),
                            n = this.options.get("escapeMarkup"),
                            r = i(t, e);
                        null == r ? e.style.display = "none" : "string" == typeof r ? e.innerHTML = n(r) : d(e).append(r) }, n }), t.define("select2/keys", [], function() { return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 } }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(i, n, r) {
                    function s(t, e) { this.$element = t, this.options = e, s.__super__.constructor.call(this) } return n.Extend(s, n.Observable), s.prototype.render = function() { var t = i('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'); return this._tabindex = 0, null != n.GetData(this.$element[0], "old-tabindex") ? this._tabindex = n.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t }, s.prototype.bind = function(t, e) { var i = this,
                            n = (t.id, t.id + "-results");
                        this.container = t, this.$selection.on("focus", function(t) { i.trigger("focus", t) }), this.$selection.on("blur", function(t) { i._handleBlur(t) }), this.$selection.on("keydown", function(t) { i.trigger("keypress", t), t.which === r.SPACE && t.preventDefault() }), t.on("results:focus", function(t) { i.$selection.attr("aria-activedescendant", t.data._resultId) }), t.on("selection:update", function(t) { i.update(t.data) }), t.on("open", function() { i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", n), i._attachCloseHandler(t) }), t.on("close", function() { i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), window.setTimeout(function() { i.$selection.focus() }, 0), i._detachCloseHandler(t) }), t.on("enable", function() { i.$selection.attr("tabindex", i._tabindex) }), t.on("disable", function() { i.$selection.attr("tabindex", "-1") }) }, s.prototype._handleBlur = function(t) { var e = this;
                        window.setTimeout(function() { document.activeElement == e.$selection[0] || i.contains(e.$selection[0], document.activeElement) || e.trigger("blur", t) }, 1) }, s.prototype._attachCloseHandler = function(t) { i(document.body).on("mousedown.select2." + t.id, function(t) { var e = i(t.target).closest(".select2");
                            i(".select2.select2-container--open").each(function() { i(this), this != e[0] && n.GetData(this, "element").select2("close") }) }) }, s.prototype._detachCloseHandler = function(t) { i(document.body).off("mousedown.select2." + t.id) }, s.prototype.position = function(t, e) { e.find(".selection").append(t) }, s.prototype.destroy = function() { this._detachCloseHandler(this.container) }, s.prototype.update = function(t) { throw new Error("The `update` method must be defined in child classes.") }, s }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(t, e, i, n) {
                    function r() { r.__super__.constructor.apply(this, arguments) } return i.Extend(r, e), r.prototype.render = function() { var t = r.__super__.render.call(this); return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t }, r.prototype.bind = function(e, t) { var i = this;
                        r.__super__.bind.apply(this, arguments); var n = e.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", n).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", n), this.$selection.on("mousedown", function(t) { 1 === t.which && i.trigger("toggle", { originalEvent: t }) }), this.$selection.on("focus", function(t) {}), this.$selection.on("blur", function(t) {}), e.on("focus", function(t) { e.isOpen() || i.$selection.focus() }) }, r.prototype.clear = function() { var t = this.$selection.find(".select2-selection__rendered");
                        t.empty(), t.removeAttr("title") }, r.prototype.display = function(t, e) { var i = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(i(t, e)) }, r.prototype.selectionContainer = function() { return t("<span></span>") }, r.prototype.update = function(t) { if (0 !== t.length) { var e = t[0],
                                i = this.$selection.find(".select2-selection__rendered"),
                                n = this.display(e, i);
                            i.empty().append(n), i.attr("title", e.title || e.text) } else this.clear() }, r }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(r, t, o) {
                    function i(t, e) { i.__super__.constructor.apply(this, arguments) } return o.Extend(i, t), i.prototype.render = function() { var t = i.__super__.render.call(this); return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t }, i.prototype.bind = function(t, e) { var n = this;
                        i.__super__.bind.apply(this, arguments), this.$selection.on("click", function(t) { n.trigger("toggle", { originalEvent: t }) }), this.$selection.on("click", ".select2-selection__choice__remove", function(t) { if (!n.options.get("disabled")) { var e = r(this).parent(),
                                    i = o.GetData(e[0], "data");
                                n.trigger("unselect", { originalEvent: t, data: i }) } }) }, i.prototype.clear = function() { var t = this.$selection.find(".select2-selection__rendered");
                        t.empty(), t.removeAttr("title") }, i.prototype.display = function(t, e) { var i = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(i(t, e)) }, i.prototype.selectionContainer = function() { return r('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>') }, i.prototype.update = function(t) { if (this.clear(), 0 !== t.length) { for (var e = [], i = 0; i < t.length; i++) { var n = t[i],
                                    r = this.selectionContainer(),
                                    s = this.display(n, r);
                                r.append(s), r.attr("title", n.title || n.text), o.StoreData(r[0], "data", n), e.push(r) } var a = this.$selection.find(".select2-selection__rendered");
                            o.appendMany(a, e) } }, i }), t.define("select2/selection/placeholder", ["../utils"], function(t) {
                    function e(t, e, i) { this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i) } return e.prototype.normalizePlaceholder = function(t, e) { return "string" == typeof e && (e = { id: "", text: e }), e }, e.prototype.createPlaceholder = function(t, e) { var i = this.selectionContainer(); return i.html(this.display(e)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i }, e.prototype.update = function(t, e) { var i = 1 == e.length && e[0].id != this.placeholder.id; if (1 < e.length || i) return t.call(this, e);
                        this.clear(); var n = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(n) }, e }), t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function(n, r, o) {
                    function t() {} return t.prototype.bind = function(t, e, i) { var n = this;
                        t.call(this, e, i), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(t) { n._handleClear(t) }), e.on("keypress", function(t) { n._handleKeyboardClear(t, e) }) }, t.prototype._handleClear = function(t, e) { if (!this.options.get("disabled")) { var i = this.$selection.find(".select2-selection__clear"); if (0 !== i.length) { e.stopPropagation(); var n = o.GetData(i[0], "data"),
                                    r = this.$element.val();
                                this.$element.val(this.placeholder.id); var s = { data: n }; if (this.trigger("clear", s), s.prevented) return void this.$element.val(r); for (var a = 0; a < n.length; a++)
                                    if (s = { data: n[a] }, this.trigger("unselect", s), s.prevented) return void this.$element.val(r);
                                this.$element.trigger("change"), this.trigger("toggle", {}) } } }, t.prototype._handleKeyboardClear = function(t, e, i) { i.isOpen() || e.which != r.DELETE && e.which != r.BACKSPACE || this._handleClear(e) }, t.prototype.update = function(t, e) { if (t.call(this, e), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === e.length)) { var i = n('<span class="select2-selection__clear">&times;</span>');
                            o.StoreData(i[0], "data", e), this.$selection.find(".select2-selection__rendered").prepend(i) } }, t }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(n, a, o) {
                    function t(t, e, i) { t.call(this, e, i) } return t.prototype.render = function(t) { var e = n('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = e, this.$search = e.find("input"); var i = t.call(this); return this._transferTabIndex(), i }, t.prototype.bind = function(t, e, i) { var n = this;
                        t.call(this, e, i), e.on("open", function() { n.$search.trigger("focus") }), e.on("close", function() { n.$search.val(""), n.$search.removeAttr("aria-activedescendant"), n.$search.trigger("focus") }), e.on("enable", function() { n.$search.prop("disabled", !1), n._transferTabIndex() }), e.on("disable", function() { n.$search.prop("disabled", !0) }), e.on("focus", function(t) { n.$search.trigger("focus") }), e.on("results:focus", function(t) { n.$search.attr("aria-activedescendant", t.id) }), this.$selection.on("focusin", ".select2-search--inline", function(t) { n.trigger("focus", t) }), this.$selection.on("focusout", ".select2-search--inline", function(t) { n._handleBlur(t) }), this.$selection.on("keydown", ".select2-search--inline", function(t) { if (t.stopPropagation(), n.trigger("keypress", t), n._keyUpPrevented = t.isDefaultPrevented(), t.which === o.BACKSPACE && "" === n.$search.val()) { var e = n.$searchContainer.prev(".select2-selection__choice"); if (0 < e.length) { var i = a.GetData(e[0], "data");
                                    n.searchRemoveChoice(i), t.preventDefault() } } }); var r = document.documentMode,
                            s = r && r <= 11;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function(t) { s ? n.$selection.off("input.search input.searchcheck") : n.$selection.off("keyup.search") }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(t) { if (s && "input" === t.type) n.$selection.off("input.search input.searchcheck");
                            else { var e = t.which;
                                e != o.SHIFT && e != o.CTRL && e != o.ALT && e != o.TAB && n.handleSearch(t) } }) }, t.prototype._transferTabIndex = function(t) { this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1") }, t.prototype.createPlaceholder = function(t, e) { this.$search.attr("placeholder", e.text) }, t.prototype.update = function(t, e) { var i = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), i && (this.$element.find("[data-select2-tag]").length ? this.$element.focus() : this.$search.focus()) }, t.prototype.handleSearch = function() { if (this.resizeSearch(), !this._keyUpPrevented) { var t = this.$search.val();
                            this.trigger("query", { term: t }) } this._keyUpPrevented = !1 }, t.prototype.searchRemoveChoice = function(t, e) { this.trigger("unselect", { data: e }), this.$search.val(e.text), this.handleSearch() }, t.prototype.resizeSearch = function() { this.$search.css("width", "25px"); var t;
                        t = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", t) }, t }), t.define("select2/selection/eventRelay", ["jquery"], function(a) {
                    function t() {} return t.prototype.bind = function(t, e, i) { var n = this,
                            r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                            s = ["opening", "closing", "selecting", "unselecting", "clearing"];
                        t.call(this, e, i), e.on("*", function(t, e) { if (-1 !== a.inArray(t, r)) { e = e || {}; var i = a.Event("select2:" + t, { params: e });
                                n.$element.trigger(i), -1 !== a.inArray(t, s) && (e.prevented = i.isDefaultPrevented()) } }) }, t }), t.define("select2/translation", ["jquery", "require"], function(e, i) {
                    function n(t) { this.dict = t || {} } return n.prototype.all = function() { return this.dict }, n.prototype.get = function(t) { return this.dict[t] }, n.prototype.extend = function(t) { this.dict = e.extend({}, t.all(), this.dict) }, n._cache = {}, n.loadPath = function(t) { if (!(t in n._cache)) { var e = i(t);
                            n._cache[t] = e } return new n(n._cache[t]) }, n }), t.define("select2/diacritics", [], function() { return { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" } }), t.define("select2/data/base", ["../utils"], function(n) {
                    function i(t, e) { i.__super__.constructor.call(this) } return n.Extend(i, n.Observable), i.prototype.current = function(t) { throw new Error("The `current` method must be defined in child classes.") }, i.prototype.query = function(t, e) { throw new Error("The `query` method must be defined in child classes.") }, i.prototype.bind = function(t, e) {}, i.prototype.destroy = function() {}, i.prototype.generateResultId = function(t, e) { var i = t.id + "-result-"; return i += n.generateChars(4), null != e.id ? i += "-" + e.id.toString() : i += "-" + n.generateChars(4), i }, i }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function(t, o, l) {
                    function i(t, e) { this.$element = t, this.options = e, i.__super__.constructor.call(this) } return o.Extend(i, t), i.prototype.current = function(t) { var i = [],
                            n = this;
                        this.$element.find(":selected").each(function() { var t = l(this),
                                e = n.item(t);
                            i.push(e) }), t(i) }, i.prototype.select = function(r) { var s = this; if (r.selected = !0, l(r.element).is("option")) return r.element.selected = !0, void this.$element.trigger("change"); if (this.$element.prop("multiple")) this.current(function(t) { var e = [];
                            (r = [r]).push.apply(r, t); for (var i = 0; i < r.length; i++) { var n = r[i].id; - 1 === l.inArray(n, e) && e.push(n) } s.$element.val(e), s.$element.trigger("change") });
                        else { var t = r.id;
                            this.$element.val(t), this.$element.trigger("change") } }, i.prototype.unselect = function(r) { var s = this; if (this.$element.prop("multiple")) { if (r.selected = !1, l(r.element).is("option")) return r.element.selected = !1, void this.$element.trigger("change");
                            this.current(function(t) { for (var e = [], i = 0; i < t.length; i++) { var n = t[i].id;
                                    n !== r.id && -1 === l.inArray(n, e) && e.push(n) } s.$element.val(e), s.$element.trigger("change") }) } }, i.prototype.bind = function(t, e) { var i = this;
                        (this.container = t).on("select", function(t) { i.select(t.data) }), t.on("unselect", function(t) { i.unselect(t.data) }) }, i.prototype.destroy = function() { this.$element.find("*").each(function() { o.RemoveData(this) }) }, i.prototype.query = function(n, t) { var r = [],
                            s = this;
                        this.$element.children().each(function() { var t = l(this); if (t.is("option") || t.is("optgroup")) { var e = s.item(t),
                                    i = s.matches(n, e);
                                null !== i && r.push(i) } }), t({ results: r }) }, i.prototype.addOptions = function(t) { o.appendMany(this.$element, t) }, i.prototype.option = function(t) { var e;
                        t.children ? (e = document.createElement("optgroup")).label = t.text : void 0 !== (e = document.createElement("option")).textContent ? e.textContent = t.text : e.innerText = t.text, void 0 !== t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title); var i = l(e),
                            n = this._normalizeItem(t); return n.element = e, o.StoreData(e, "data", n), i }, i.prototype.item = function(t) { var e = {}; if (null != (e = o.GetData(t[0], "data"))) return e; if (t.is("option")) e = { id: t.val(), text: t.text(), disabled: t.prop("disabled"), selected: t.prop("selected"), title: t.prop("title") };
                        else if (t.is("optgroup")) { e = { text: t.prop("label"), children: [], title: t.prop("title") }; for (var i = t.children("option"), n = [], r = 0; r < i.length; r++) { var s = l(i[r]),
                                    a = this.item(s);
                                n.push(a) } e.children = n } return (e = this._normalizeItem(e)).element = t[0], o.StoreData(t[0], "data", e), e }, i.prototype._normalizeItem = function(t) { return t !== Object(t) && (t = { id: t, text: t }), null != (t = l.extend({}, { text: "" }, t)).id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), l.extend({}, { selected: !1, disabled: !1 }, t) }, i.prototype.matches = function(t, e) { return this.options.get("matcher")(t, e) }, i }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function(t, f, g) {
                    function n(t, e) { var i = e.get("data") || [];
                        n.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(i)) } return f.Extend(n, t), n.prototype.select = function(i) { var t = this.$element.find("option").filter(function(t, e) { return e.value == i.id.toString() });
                        0 === t.length && (t = this.option(i), this.addOptions(t)), n.__super__.select.call(this, i) }, n.prototype.convertToOptions = function(t) {
                        function e(t) { return function() { return g(this).val() == t.id } } for (var i = this, n = this.$element.find("option"), r = n.map(function() { return i.item(g(this)).id }).get(), s = [], a = 0; a < t.length; a++) { var o = this._normalizeItem(t[a]); if (0 <= g.inArray(o.id, r)) { var l = n.filter(e(o)),
                                    h = this.item(l),
                                    u = g.extend(!0, {}, o, h),
                                    c = this.option(u);
                                l.replaceWith(c) } else { var d = this.option(o); if (o.children) { var p = this.convertToOptions(o.children);
                                    f.appendMany(d, p) } s.push(d) } } return s }, n }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(t, e, s) {
                    function i(t, e) { this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, t, e) } return e.Extend(i, t), i.prototype._applyDefaults = function(t) { var e = { data: function(t) { return s.extend({}, t, { q: t.term }) }, transport: function(t, e, i) { var n = s.ajax(t); return n.then(e), n.fail(i), n } }; return s.extend({}, e, t, !0) }, i.prototype.processResults = function(t) { return t }, i.prototype.query = function(i, n) {
                        function t() { var t = e.transport(e, function(t) { var e = r.processResults(t, i);
                                r.options.get("debug") && window.console && console.error && (e && e.results && s.isArray(e.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), n(e) }, function() { "status" in t && (0 === t.status || "0" === t.status) || r.trigger("results:message", { message: "errorLoading" }) });
                            r._request = t } var r = this;
                        null != this._request && (s.isFunction(this._request.abort) && this._request.abort(), this._request = null); var e = s.extend({ type: "GET" }, this.ajaxOptions); "function" == typeof e.url && (e.url = e.url.call(this.$element, i)), "function" == typeof e.data && (e.data = e.data.call(this.$element, i)), this.ajaxOptions.delay && null != i.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(t, this.ajaxOptions.delay)) : t() }, i }), t.define("select2/data/tags", ["jquery"], function(u) {
                    function t(t, e, i) { var n = i.get("tags"),
                            r = i.get("createTag");
                        void 0 !== r && (this.createTag = r); var s = i.get("insertTag"); if (void 0 !== s && (this.insertTag = s), t.call(this, e, i), u.isArray(n))
                            for (var a = 0; a < n.length; a++) { var o = n[a],
                                    l = this._normalizeItem(o),
                                    h = this.option(l);
                                this.$element.append(h) } } return t.prototype.query = function(t, h, u) { var c = this;
                        this._removeOldTags(), null != h.term && null == h.page ? t.call(this, h, function t(e, i) { for (var n = e.results, r = 0; r < n.length; r++) { var s = n[r],
                                    a = null != s.children && !t({ results: s.children }, !0); if ((s.text || "").toUpperCase() === (h.term || "").toUpperCase() || a) return !i && (e.data = n, void u(e)) } if (i) return !0; var o = c.createTag(h); if (null != o) { var l = c.option(o);
                                l.attr("data-select2-tag", !0), c.addOptions([l]), c.insertTag(n, o) } e.results = n, u(e) }) : t.call(this, h, u) }, t.prototype.createTag = function(t, e) { var i = u.trim(e.term); return "" === i ? null : { id: i, text: i } }, t.prototype.insertTag = function(t, e, i) { e.unshift(i) }, t.prototype._removeOldTags = function(t) { this._lastTag, this.$element.find("option[data-select2-tag]").each(function() { this.selected || u(this).remove() }) }, t }), t.define("select2/data/tokenizer", ["jquery"], function(c) {
                    function t(t, e, i) { var n = i.get("tokenizer");
                        void 0 !== n && (this.tokenizer = n), t.call(this, e, i) } return t.prototype.bind = function(t, e, i) { t.call(this, e, i), this.$search = e.dropdown.$search || e.selection.$search || i.find(".select2-search__field") }, t.prototype.query = function(t, e, i) { var r = this;
                        e.term = e.term || ""; var n = this.tokenizer(e, this.options, function(t) { var e, i = r._normalizeItem(t); if (!r.$element.find("option").filter(function() { return c(this).val() === i.id }).length) { var n = r.option(i);
                                n.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([n]) } e = i, r.trigger("select", { data: e }) });
                        n.term !== e.term && (this.$search.length && (this.$search.val(n.term), this.$search.focus()), e.term = n.term), t.call(this, e, i) }, t.prototype.tokenizer = function(t, e, i, n) { for (var r = i.get("tokenSeparators") || [], s = e.term, a = 0, o = this.createTag || function(t) { return { id: t.term, text: t.term } }; a < s.length;) { var l = s[a]; if (-1 !== c.inArray(l, r)) { var h = s.substr(0, a),
                                    u = o(c.extend({}, e, { term: h }));
                                null != u ? (n(u), s = s.substr(a + 1) || "", a = 0) : a++ } else a++ } return { term: s } }, t }), t.define("select2/data/minimumInputLength", [], function() {
                    function t(t, e, i) { this.minimumInputLength = i.get("minimumInputLength"), t.call(this, e, i) } return t.prototype.query = function(t, e, i) { e.term = e.term || "", e.term.length < this.minimumInputLength ? this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: e.term, params: e } }) : t.call(this, e, i) }, t }), t.define("select2/data/maximumInputLength", [], function() {
                    function t(t, e, i) { this.maximumInputLength = i.get("maximumInputLength"), t.call(this, e, i) } return t.prototype.query = function(t, e, i) { e.term = e.term || "", 0 < this.maximumInputLength && e.term.length > this.maximumInputLength ? this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: e.term, params: e } }) : t.call(this, e, i) }, t }), t.define("select2/data/maximumSelectionLength", [], function() {
                    function t(t, e, i) { this.maximumSelectionLength = i.get("maximumSelectionLength"), t.call(this, e, i) } return t.prototype.query = function(i, n, r) { var s = this;
                        this.current(function(t) { var e = null != t ? t.length : 0;
                            0 < s.maximumSelectionLength && e >= s.maximumSelectionLength ? s.trigger("results:message", { message: "maximumSelected", args: { maximum: s.maximumSelectionLength } }) : i.call(s, n, r) }) }, t }), t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
                    function i(t, e) { this.$element = t, this.options = e, i.__super__.constructor.call(this) } return t.Extend(i, t.Observable), i.prototype.render = function() { var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>'); return t.attr("dir", this.options.get("dir")), this.$dropdown = t }, i.prototype.bind = function() {}, i.prototype.position = function(t, e) {}, i.prototype.destroy = function() { this.$dropdown.remove() }, i }), t.define("select2/dropdown/search", ["jquery", "../utils"], function(r, t) {
                    function e() {} return e.prototype.render = function(t) { var e = t.call(this),
                            i = r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>'); return this.$searchContainer = i, this.$search = i.find("input"), e.prepend(i), e }, e.prototype.bind = function(t, e, i) { var n = this;
                        t.call(this, e, i), this.$search.on("keydown", function(t) { n.trigger("keypress", t), n._keyUpPrevented = t.isDefaultPrevented() }), this.$search.on("input", function(t) { r(this).off("keyup") }), this.$search.on("keyup input", function(t) { n.handleSearch(t) }), e.on("open", function() { n.$search.attr("tabindex", 0), n.$search.focus(), window.setTimeout(function() { n.$search.focus() }, 0) }), e.on("close", function() { n.$search.attr("tabindex", -1), n.$search.val(""), n.$search.blur() }), e.on("focus", function() { e.isOpen() || n.$search.focus() }), e.on("results:all", function(t) { null != t.query.term && "" !== t.query.term || (n.showSearch(t) ? n.$searchContainer.removeClass("select2-search--hide") : n.$searchContainer.addClass("select2-search--hide")) }) }, e.prototype.handleSearch = function(t) { if (!this._keyUpPrevented) { var e = this.$search.val();
                            this.trigger("query", { term: e }) } this._keyUpPrevented = !1 }, e.prototype.showSearch = function(t, e) { return !0 }, e }), t.define("select2/dropdown/hidePlaceholder", [], function() {
                    function t(t, e, i, n) { this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i, n) } return t.prototype.append = function(t, e) { e.results = this.removePlaceholder(e.results), t.call(this, e) }, t.prototype.normalizePlaceholder = function(t, e) { return "string" == typeof e && (e = { id: "", text: e }), e }, t.prototype.removePlaceholder = function(t, e) { for (var i = e.slice(0), n = e.length - 1; 0 <= n; n--) { var r = e[n];
                            this.placeholder.id === r.id && i.splice(n, 1) } return i }, t }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function(r) {
                    function t(t, e, i, n) { this.lastParams = {}, t.call(this, e, i, n), this.$loadingMore = this.createLoadingMore(), this.loading = !1 } return t.prototype.append = function(t, e) { this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore) }, t.prototype.bind = function(t, e, i) { var n = this;
                        t.call(this, e, i), e.on("query", function(t) { n.lastParams = t, n.loading = !0 }), e.on("query:append", function(t) { n.lastParams = t, n.loading = !0 }), this.$results.on("scroll", function() { var t = r.contains(document.documentElement, n.$loadingMore[0]);!n.loading && t && n.$results.offset().top + n.$results.outerHeight(!1) + 50 >= n.$loadingMore.offset().top + n.$loadingMore.outerHeight(!1) && n.loadMore() }) }, t.prototype.loadMore = function() { this.loading = !0; var t = r.extend({}, { page: 1 }, this.lastParams);
                        t.page++, this.trigger("query:append", t) }, t.prototype.showLoadingMore = function(t, e) { return e.pagination && e.pagination.more }, t.prototype.createLoadingMore = function() { var t = r('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            e = this.options.get("translations").get("loadingMore"); return t.html(e(this.lastParams)), t }, t }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(f, o) {
                    function t(t, e, i) { this.$dropdownParent = i.get("dropdownParent") || f(document.body), t.call(this, e, i) } return t.prototype.bind = function(t, e, i) { var n = this,
                            r = !1;
                        t.call(this, e, i), e.on("open", function() { n._showDropdown(), n._attachPositioningHandler(e), r || (r = !0, e.on("results:all", function() { n._positionDropdown(), n._resizeDropdown() }), e.on("results:append", function() { n._positionDropdown(), n._resizeDropdown() })) }), e.on("close", function() { n._hideDropdown(), n._detachPositioningHandler(e) }), this.$dropdownContainer.on("mousedown", function(t) { t.stopPropagation() }) }, t.prototype.destroy = function(t) { t.call(this), this.$dropdownContainer.remove() }, t.prototype.position = function(t, e, i) { e.attr("class", i.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({ position: "absolute", top: -999999 }), this.$container = i }, t.prototype.render = function(t) { var e = f("<span></span>"),
                            i = t.call(this); return e.append(i), this.$dropdownContainer = e }, t.prototype._hideDropdown = function(t) { this.$dropdownContainer.detach() }, t.prototype._attachPositioningHandler = function(t, e) { var i = this,
                            n = "scroll.select2." + e.id,
                            r = "resize.select2." + e.id,
                            s = "orientationchange.select2." + e.id,
                            a = this.$container.parents().filter(o.hasScroll);
                        a.each(function() { o.StoreData(this, "select2-scroll-position", { x: f(this).scrollLeft(), y: f(this).scrollTop() }) }), a.on(n, function(t) { var e = o.GetData(this, "select2-scroll-position");
                            f(this).scrollTop(e.y) }), f(window).on(n + " " + r + " " + s, function(t) { i._positionDropdown(), i._resizeDropdown() }) }, t.prototype._detachPositioningHandler = function(t, e) { var i = "scroll.select2." + e.id,
                            n = "resize.select2." + e.id,
                            r = "orientationchange.select2." + e.id;
                        this.$container.parents().filter(o.hasScroll).off(i), f(window).off(i + " " + n + " " + r) }, t.prototype._positionDropdown = function() { var t = f(window),
                            e = this.$dropdown.hasClass("select2-dropdown--above"),
                            i = this.$dropdown.hasClass("select2-dropdown--below"),
                            n = null,
                            r = this.$container.offset();
                        r.bottom = r.top + this.$container.outerHeight(!1); var s = { height: this.$container.outerHeight(!1) };
                        s.top = r.top, s.bottom = r.top + s.height; var a = this.$dropdown.outerHeight(!1),
                            o = t.scrollTop(),
                            l = t.scrollTop() + t.height(),
                            h = o < r.top - a,
                            u = l > r.bottom + a,
                            c = { left: r.left, top: s.bottom },
                            d = this.$dropdownParent; "static" === d.css("position") && (d = d.offsetParent()); var p = d.offset();
                        c.top -= p.top, c.left -= p.left, e || i || (n = "below"), u || !h || e ? !h && u && e && (n = "below") : n = "above", ("above" == n || e && "below" !== n) && (c.top = s.top - p.top - a), null != n && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + n), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + n)), this.$dropdownContainer.css(c) }, t.prototype._resizeDropdown = function() { var t = { width: this.$container.outerWidth(!1) + "px" };
                        this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t) }, t.prototype._showDropdown = function(t) { this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown() }, t }), t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function t(t, e, i, n) { this.minimumResultsForSearch = i.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, i, n) } return t.prototype.showSearch = function(t, e) { return !(function t(e) { for (var i = 0, n = 0; n < e.length; n++) { var r = e[n];
                                r.children ? i += t(r.children) : i++ } return i }(e.data.results) < this.minimumResultsForSearch) && t.call(this, e) }, t }), t.define("select2/dropdown/selectOnClose", ["../utils"], function(s) {
                    function t() {} return t.prototype.bind = function(t, e, i) { var n = this;
                        t.call(this, e, i), e.on("close", function(t) { n._handleSelectOnClose(t) }) }, t.prototype._handleSelectOnClose = function(t, e) { if (e && null != e.originalSelect2Event) { var i = e.originalSelect2Event; if ("select" === i._type || "unselect" === i._type) return } var n = this.getHighlightedResults(); if (!(n.length < 1)) { var r = s.GetData(n[0], "data");
                            null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", { data: r }) } }, t }), t.define("select2/dropdown/closeOnSelect", [], function() {
                    function t() {} return t.prototype.bind = function(t, e, i) { var n = this;
                        t.call(this, e, i), e.on("select", function(t) { n._selectTriggered(t) }), e.on("unselect", function(t) { n._selectTriggered(t) }) }, t.prototype._selectTriggered = function(t, e) { var i = e.originalEvent;
                        i && i.ctrlKey || this.trigger("close", { originalEvent: i, originalSelect2Event: e }) }, t }), t.define("select2/i18n/en", [], function() { return { errorLoading: function() { return "The results could not be loaded." }, inputTooLong: function(t) { var e = t.input.length - t.maximum,
                                i = "Please delete " + e + " character"; return 1 != e && (i += "s"), i }, inputTooShort: function(t) { return "Please enter " + (t.minimum - t.input.length) + " or more characters" }, loadingMore: function() { return "Loading more results…" }, maximumSelected: function(t) { var e = "You can only select " + t.maximum + " item"; return 1 != t.maximum && (e += "s"), e }, noResults: function() { return "No results found" }, searching: function() { return "Searching…" } } }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(f, g, m, v, y, b, x, w, _, S, C, e, k, D, T, M, A, E, P, L, O, R, I, F, j, N, H, z, t) {
                    function i() { this.reset() } return i.prototype.apply = function(t) { if (null == (t = f.extend(!0, {}, this.defaults, t)).dataAdapter) { if (null != t.ajax ? t.dataAdapter = T : null != t.data ? t.dataAdapter = D : t.dataAdapter = k, 0 < t.minimumInputLength && (t.dataAdapter = S.Decorate(t.dataAdapter, E)), 0 < t.maximumInputLength && (t.dataAdapter = S.Decorate(t.dataAdapter, P)), 0 < t.maximumSelectionLength && (t.dataAdapter = S.Decorate(t.dataAdapter, L)), t.tags && (t.dataAdapter = S.Decorate(t.dataAdapter, M)), null == t.tokenSeparators && null == t.tokenizer || (t.dataAdapter = S.Decorate(t.dataAdapter, A)), null != t.query) { var e = g(t.amdBase + "compat/query");
                                t.dataAdapter = S.Decorate(t.dataAdapter, e) } if (null != t.initSelection) { var i = g(t.amdBase + "compat/initSelection");
                                t.dataAdapter = S.Decorate(t.dataAdapter, i) } } if (null == t.resultsAdapter && (t.resultsAdapter = m, null != t.ajax && (t.resultsAdapter = S.Decorate(t.resultsAdapter, F)), null != t.placeholder && (t.resultsAdapter = S.Decorate(t.resultsAdapter, I)), t.selectOnClose && (t.resultsAdapter = S.Decorate(t.resultsAdapter, H))), null == t.dropdownAdapter) { if (t.multiple) t.dropdownAdapter = O;
                            else { var n = S.Decorate(O, R);
                                t.dropdownAdapter = n } if (0 !== t.minimumResultsForSearch && (t.dropdownAdapter = S.Decorate(t.dropdownAdapter, N)), t.closeOnSelect && (t.dropdownAdapter = S.Decorate(t.dropdownAdapter, z)), null != t.dropdownCssClass || null != t.dropdownCss || null != t.adaptDropdownCssClass) { var r = g(t.amdBase + "compat/dropdownCss");
                                t.dropdownAdapter = S.Decorate(t.dropdownAdapter, r) } t.dropdownAdapter = S.Decorate(t.dropdownAdapter, j) } if (null == t.selectionAdapter) { if (t.multiple ? t.selectionAdapter = y : t.selectionAdapter = v, null != t.placeholder && (t.selectionAdapter = S.Decorate(t.selectionAdapter, b)), t.allowClear && (t.selectionAdapter = S.Decorate(t.selectionAdapter, x)), t.multiple && (t.selectionAdapter = S.Decorate(t.selectionAdapter, w)), null != t.containerCssClass || null != t.containerCss || null != t.adaptContainerCssClass) { var s = g(t.amdBase + "compat/containerCss");
                                t.selectionAdapter = S.Decorate(t.selectionAdapter, s) } t.selectionAdapter = S.Decorate(t.selectionAdapter, _) } if ("string" == typeof t.language)
                            if (0 < t.language.indexOf("-")) { var a = t.language.split("-")[0];
                                t.language = [t.language, a] } else t.language = [t.language]; if (f.isArray(t.language)) { var o = new C;
                            t.language.push("en"); for (var l = t.language, h = 0; h < l.length; h++) { var u = l[h],
                                    c = {}; try { c = C.loadPath(u) } catch (e) { try { u = this.defaults.amdLanguageBase + u, c = C.loadPath(u) } catch (e) { t.debug && window.console && console.warn && console.warn('Select2: The language file for "' + u + '" could not be automatically loaded. A fallback will be used instead.'); continue } } o.extend(c) } t.translations = o } else { var d = C.loadPath(this.defaults.amdLanguageBase + "en"),
                                p = new C(t.language);
                            p.extend(d), t.translations = p } return t }, i.prototype.reset = function() {
                        function o(t) { return t.replace(/[^\u0000-\u007E]/g, function(t) { return e[t] || t }) } this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: S.escapeMarkup, language: t, matcher: function t(e, i) { if ("" === f.trim(e.term)) return i; if (i.children && 0 < i.children.length) { for (var n = f.extend(!0, {}, i), r = i.children.length - 1; 0 <= r; r--) null == t(e, i.children[r]) && n.children.splice(r, 1); return 0 < n.children.length ? n : t(e, n) } var s = o(i.text).toUpperCase(),
                                    a = o(e.term).toUpperCase(); return -1 < s.indexOf(a) ? i : null }, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function(t) { return t }, templateResult: function(t) { return t.text }, templateSelection: function(t) { return t.text }, theme: "default", width: "resolve" } }, i.prototype.set = function(t, e) { var i = {};
                        i[f.camelCase(t)] = e; var n = S._convertData(i);
                        f.extend(!0, this.defaults, n) }, new i }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(n, s, r, a) {
                    function t(t, e) { if (this.options = t, null != e && this.fromElement(e), this.options = r.apply(this.options), e && e.is("input")) { var i = n(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = a.Decorate(this.options.dataAdapter, i) } } return t.prototype.fromElement = function(t) { var e, i = ["select2"];
                        null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), a.GetData(t[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.StoreData(t[0], "data", a.GetData(t[0], "select2Tags")), a.StoreData(t[0], "tags", !0)), a.GetData(t[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", a.GetData(t[0], "ajaxUrl")), a.StoreData(t[0], "ajax-Url", a.GetData(t[0], "ajaxUrl"))), e = s.fn.jquery && "1." == s.fn.jquery.substr(0, 2) && t[0].dataset ? s.extend(!0, {}, t[0].dataset, a.GetData(t[0])) : a.GetData(t[0]); var n = s.extend(!0, {}, e); for (var r in n = a._convertData(n)) - 1 < s.inArray(r, i) || (s.isPlainObject(this.options[r]) ? s.extend(this.options[r], n[r]) : this.options[r] = n[r]); return this }, t.prototype.get = function(t) { return this.options[t] }, t.prototype.set = function(t, e) { this.options[t] = e }, t }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(r, h, u, n) { var c = function(t, e) { null != u.GetData(t[0], "select2") && u.GetData(t[0], "select2").destroy(), this.$element = t, this.id = this._generateId(t), e = e || {}, this.options = new h(e, t), c.__super__.constructor.call(this); var i = t.attr("tabindex") || 0;
                        u.StoreData(t[0], "old-tabindex", i), t.attr("tabindex", "-1"); var n = this.options.get("dataAdapter");
                        this.dataAdapter = new n(t, this.options); var r = this.render();
                        this._placeContainer(r); var s = this.options.get("selectionAdapter");
                        this.selection = new s(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r); var a = this.options.get("dropdownAdapter");
                        this.dropdown = new a(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r); var o = this.options.get("resultsAdapter");
                        this.results = new o(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown); var l = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(t) { l.trigger("selection:update", { data: t }) }), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), u.StoreData(t[0], "select2", this), t.data("select2", this) }; return u.Extend(c, u.Observable), c.prototype._generateId = function(t) { return "select2-" + (null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + u.generateChars(2) : u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "") }, c.prototype._placeContainer = function(t) { t.insertAfter(this.$element); var e = this._resolveWidth(this.$element, this.options.get("width"));
                        null != e && t.css("width", e) }, c.prototype._resolveWidth = function(t, e) { var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i; if ("resolve" == e) { var n = this._resolveWidth(t, "style"); return null != n ? n : this._resolveWidth(t, "element") } if ("element" == e) { var r = t.outerWidth(!1); return r <= 0 ? "auto" : r + "px" } if ("style" != e) return e; var s = t.attr("style"); if ("string" != typeof s) return null; for (var a = s.split(";"), o = 0, l = a.length; o < l; o += 1) { var h = a[o].replace(/\s/g, "").match(i); if (null !== h && 1 <= h.length) return h[1] } return null }, c.prototype._bindAdapters = function() { this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container) }, c.prototype._registerDomEvents = function() { var e = this;
                        this.$element.on("change.select2", function() { e.dataAdapter.current(function(t) { e.trigger("selection:update", { data: t }) }) }), this.$element.on("focus.select2", function(t) { e.trigger("focus", t) }), this._syncA = u.bind(this._syncAttributes, this), this._syncS = u.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA); var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != t ? (this._observer = new t(function(t) { r.each(t, e._syncA), r.each(t, e._syncS) }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1)) }, c.prototype._registerDataEvents = function() { var i = this;
                        this.dataAdapter.on("*", function(t, e) { i.trigger(t, e) }) }, c.prototype._registerSelectionEvents = function() { var i = this,
                            n = ["toggle", "focus"];
                        this.selection.on("toggle", function() { i.toggleDropdown() }), this.selection.on("focus", function(t) { i.focus(t) }), this.selection.on("*", function(t, e) {-1 === r.inArray(t, n) && i.trigger(t, e) }) }, c.prototype._registerDropdownEvents = function() { var i = this;
                        this.dropdown.on("*", function(t, e) { i.trigger(t, e) }) }, c.prototype._registerResultsEvents = function() { var i = this;
                        this.results.on("*", function(t, e) { i.trigger(t, e) }) }, c.prototype._registerEvents = function() { var i = this;
                        this.on("open", function() { i.$container.addClass("select2-container--open") }), this.on("close", function() { i.$container.removeClass("select2-container--open") }), this.on("enable", function() { i.$container.removeClass("select2-container--disabled") }), this.on("disable", function() { i.$container.addClass("select2-container--disabled") }), this.on("blur", function() { i.$container.removeClass("select2-container--focus") }), this.on("query", function(e) { i.isOpen() || i.trigger("open", {}), this.dataAdapter.query(e, function(t) { i.trigger("results:all", { data: t, query: e }) }) }), this.on("query:append", function(e) { this.dataAdapter.query(e, function(t) { i.trigger("results:append", { data: t, query: e }) }) }), this.on("keypress", function(t) { var e = t.which;
                            i.isOpen() ? e === n.ESC || e === n.TAB || e === n.UP && t.altKey ? (i.close(), t.preventDefault()) : e === n.ENTER ? (i.trigger("results:select", {}), t.preventDefault()) : e === n.SPACE && t.ctrlKey ? (i.trigger("results:toggle", {}), t.preventDefault()) : e === n.UP ? (i.trigger("results:previous", {}), t.preventDefault()) : e === n.DOWN && (i.trigger("results:next", {}), t.preventDefault()) : (e === n.ENTER || e === n.SPACE || e === n.DOWN && t.altKey) && (i.open(), t.preventDefault()) }) }, c.prototype._syncAttributes = function() { this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {}) }, c.prototype._syncSubtree = function(t, e) { var i = !1,
                            n = this; if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) { if (e)
                                if (e.addedNodes && 0 < e.addedNodes.length)
                                    for (var r = 0; r < e.addedNodes.length; r++) e.addedNodes[r].selected && (i = !0);
                                else e.removedNodes && 0 < e.removedNodes.length && (i = !0);
                            else i = !0;
                            i && this.dataAdapter.current(function(t) { n.trigger("selection:update", { data: t }) }) } }, c.prototype.trigger = function(t, e) { var i = c.__super__.trigger,
                            n = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting", clear: "clearing" }; if (void 0 === e && (e = {}), t in n) { var r = n[t],
                                s = { prevented: !1, name: t, args: e }; if (i.call(this, r, s), s.prevented) return void(e.prevented = !0) } i.call(this, t, e) }, c.prototype.toggleDropdown = function() { this.options.get("disabled") || (this.isOpen() ? this.close() : this.open()) }, c.prototype.open = function() { this.isOpen() || this.trigger("query", {}) }, c.prototype.close = function() { this.isOpen() && this.trigger("close", {}) }, c.prototype.isOpen = function() { return this.$container.hasClass("select2-container--open") }, c.prototype.hasFocus = function() { return this.$container.hasClass("select2-container--focus") }, c.prototype.focus = function(t) { this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {})) }, c.prototype.enable = function(t) { this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != t && 0 !== t.length || (t = [!0]); var e = !t[0];
                        this.$element.prop("disabled", e) }, c.prototype.data = function() { this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'); var e = []; return this.dataAdapter.current(function(t) { e = t }), e }, c.prototype.val = function(t) { if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val(); var e = t[0];
                        r.isArray(e) && (e = r.map(e, function(t) { return t.toString() })), this.$element.val(e).trigger("change") }, c.prototype.destroy = function() { this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", u.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), u.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null }, c.prototype.render = function() { var t = r('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'); return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), u.StoreData(t[0], "element", this.$element), t }, c }), t.define("jquery-mousewheel", ["jquery"], function(t) { return t }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function(r, t, s, e, a) { if (null == r.fn.select2) { var o = ["open", "close", "destroy"];
                        r.fn.select2 = function(e) { if ("object" == typeof(e = e || {})) return this.each(function() { var t = r.extend(!0, {}, e);
                                new s(r(this), t) }), this; if ("string" != typeof e) throw new Error("Invalid arguments for Select2: " + e); var i, n = Array.prototype.slice.call(arguments, 1); return this.each(function() { var t = a.GetData(this, "select2");
                                null == t && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), i = t[e].apply(t, n) }), -1 < r.inArray(e, o) ? this : i } } return null == r.fn.select2.defaults && (r.fn.select2.defaults = e), s }), { define: t.define, require: t.require } }(),
            e = t.require("jquery.select2"); return i.fn.select2.amd = t, e }), require.modules = {}, require.aliases = {}, require.resolve = function(t) { "/" === t.charAt(0) && (t = t.slice(1)); for (var e = [t, t + ".js", t + ".json", t + "/index.js", t + "/index.json"], i = 0; i < e.length; i++) { if (t = e[i], require.modules.hasOwnProperty(t)) return t; if (require.aliases.hasOwnProperty(t)) return require.aliases[t] } }, require.normalize = function(t, e) { var i = []; if ("." != e.charAt(0)) return e;
        t = t.split("/"), e = e.split("/"); for (var n = 0; n < e.length; ++n) ".." == e[n] ? t.pop() : "." != e[n] && "" != e[n] && i.push(e[n]); return t.concat(i).join("/") }, require.register = function(t, e) { require.modules[t] = e }, require.alias = function(t, e) { if (!require.modules.hasOwnProperty(t)) throw new Error('Failed to alias "' + t + '", it does not exist');
        require.aliases[e] = t }, require.relative = function(r) { var s = require.normalize(r, "..");

        function e(t) { return require(e.resolve(t), r, t) } return e.resolve = function(t) { var e = t.charAt(0); if ("/" == e) return t.slice(1); if ("." == e) return require.normalize(s, t); var i = r.split("/"),
                n = function(t, e) { for (var i = t.length; i--;)
                        if ("deps" === t[i]) return i; return -1 }(i) + 1; return n || (n = 0), i.slice(0, n + 1).join("/") + "/deps/" + t }, e.exists = function(t) { return require.modules.hasOwnProperty(e.resolve(t)) }, e }, require.register("switchery/switchery.js", function(t, e, i) { i.exports = r; var n = { color: "#64bd63", className: "switchery", disabled: !1, speed: "0.1s" };

        function r(t, e) { if (!(this instanceof r)) return new r(e); for (var i in this.element = t, this.options = e || {}, n) i in this.options || (this.options[i] = n[i]); "checkbox" == this.element.type && this.init() } r.prototype.hide = function() { this.element.style.display = "none" }, r.prototype.show = function() { var t = this.create();
            this.element.parentNode.appendChild(t) }, r.prototype.create = function() { return this.switcher = document.createElement("span"), this.jack = document.createElement("small"), this.switcher.appendChild(this.jack), this.switcher.className = this.options.className, this.switcher }, r.prototype.isChecked = function() { return this.element.checked }, r.prototype.isDisabled = function() { return this.options.disabled || this.element.disabled }, r.prototype.setPosition = function(t) { var e = this.isChecked(),
                i = this.switcher,
                n = this.jack;
            t && e ? e = !1 : t && !e && (e = !0), !0 === e ? (this.element.checked = !0, window.getComputedStyle ? n.style.left = parseInt(window.getComputedStyle(i).width) - n.offsetWidth + "px" : n.style.left = parseInt(i.currentStyle.width) - n.offsetWidth + "px", this.options.color && this.colorize()) : (n.style.left = "0", this.element.checked = !1, this.switcher.style.backgroundColor = "", this.switcher.style.borderColor = "") }, r.prototype.setSpeed = function() { this.switcher.style.transitionDuration = this.options.speed, this.jack.style.transitionDuration = this.options.speed }, r.prototype.setAttributes = function() { var t = this.element.getAttribute("id"),
                e = this.element.getAttribute("name");
            t && this.switcher.setAttribute("id", t), e && this.switcher.setAttribute("name", e) }, r.prototype.colorize = function() { this.switcher.style.backgroundColor = this.options.color, this.switcher.style.borderColor = this.options.color }, r.prototype.handleClick = function() { var t = this,
                e = this.switcher;!1 === this.isDisabled() ? e.addEventListener ? e.addEventListener("click", function() { t.setPosition(!0) }) : e.attachEvent("onclick", function() { t.setPosition(!0) }) : this.element.disabled = !0 }, r.prototype.init = function() { this.hide(), this.show(), this.setSpeed(), this.setPosition(), this.setAttributes(), this.handleClick() } }), require.alias("switchery/switchery.js", "switchery/index.js"),
    function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(u) { var i;
        u.extend(u.fn, { validate: function(t) { if (this.length) { var n = u.data(this[0], "validator"); return n || (this.attr("novalidate", "novalidate"), n = new u.validator(t, this[0]), u.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function(t) { n.submitButton = t.currentTarget, u(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== u(this).attr("formnovalidate") && (n.cancelSubmit = !0) }), this.on("submit.validate", function(i) {
                        function t() { var t, e; return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (t = u("<input type='hidden'/>").attr("name", n.submitButton.name).val(u(n.submitButton).val()).appendTo(n.currentForm)), !(n.settings.submitHandler && !n.settings.debug) || (e = n.settings.submitHandler.call(n, n.currentForm, i), t && t.remove(), void 0 !== e && e) } return n.settings.debug && i.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, t()) : n.form() ? n.pendingRequest ? !(n.formSubmitted = !0) : t() : (n.focusInvalid(), !1) })), n) } t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.") }, valid: function() { var t, e, i; return u(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, e = u(this[0].form).validate(), this.each(function() {
                    (t = e.element(this) && t) || (i = i.concat(e.errorList)) }), e.errorList = i), t }, rules: function(t, e) { var i, n, r, s, a, o, l = this[0],
                    h = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable"); if (null != l && (!l.form && h && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) { if (t) switch (i = u.data(l.form, "validator").settings, n = i.rules, r = u.validator.staticRules(l), t) {
                        case "add":
                            u.extend(r, u.validator.normalizeRule(e)), delete r.messages, n[l.name] = r, e.messages && (i.messages[l.name] = u.extend(i.messages[l.name], e.messages)); break;
                        case "remove":
                            return e ? (o = {}, u.each(e.split(/\s/), function(t, e) { o[e] = r[e], delete r[e] }), o) : (delete n[l.name], r) }
                    return (s = u.validator.normalizeRules(u.extend({}, u.validator.classRules(l), u.validator.attributeRules(l), u.validator.dataRules(l), u.validator.staticRules(l)), l)).required && (a = s.required, delete s.required, s = u.extend({ required: a }, s)), s.remote && (a = s.remote, delete s.remote, s = u.extend(s, { remote: a })), s } } }), u.extend(u.expr.pseudos || u.expr[":"], { blank: function(t) { return !u.trim("" + u(t).val()) }, filled: function(t) { var e = u(t).val(); return null !== e && !!u.trim("" + e) }, unchecked: function(t) { return !u(t).prop("checked") } }), u.validator = function(t, e) { this.settings = u.extend(!0, {}, u.validator.defaults, t), this.currentForm = e, this.init() }, u.validator.format = function(i, t) { return 1 === arguments.length ? function() { var t = u.makeArray(arguments); return t.unshift(i), u.validator.format.apply(this, t) } : (void 0 === t || (2 < arguments.length && t.constructor !== Array && (t = u.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), u.each(t, function(t, e) { i = i.replace(new RegExp("\\{" + t + "\\}", "g"), function() { return e }) })), i) }, u.extend(u.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", pendingClass: "pending", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: u([]), errorLabelContainer: u([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function(t) { this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t))) }, onfocusout: function(t) { this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t) }, onkeyup: function(t, e) { 9 === e.which && "" === this.elementValue(t) || -1 !== u.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t) }, onclick: function(t) { t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode) }, highlight: function(t, e, i) { "radio" === t.type ? this.findByName(t.name).addClass(e).removeClass(i) : u(t).addClass(e).removeClass(i) }, unhighlight: function(t, e, i) { "radio" === t.type ? this.findByName(t.name).removeClass(e).addClass(i) : u(t).removeClass(e).addClass(i) } }, setDefaults: function(t) { u.extend(u.validator.defaults, t) }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: u.validator.format("Please enter no more than {0} characters."), minlength: u.validator.format("Please enter at least {0} characters."), rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."), range: u.validator.format("Please enter a value between {0} and {1}."), max: u.validator.format("Please enter a value less than or equal to {0}."), min: u.validator.format("Please enter a value greater than or equal to {0}."), step: u.validator.format("Please enter a multiple of {0}.") }, autoCreateRanges: !1, prototype: { init: function() {
                    function t(t) { var e = void 0 !== u(this).attr("contenteditable") && "false" !== u(this).attr("contenteditable"); if (!this.form && e && (this.form = u(this).closest("form")[0], this.name = u(this).attr("name")), s === this.form) { var i = u.data(this.form, "validator"),
                                n = "on" + t.type.replace(/^validate/, ""),
                                r = i.settings;
                            r[n] && !u(this).is(r.ignore) && r[n].call(i, this, t) } } this.labelContainer = u(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm), this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset(); var i, s = this.currentForm,
                        n = this.groups = {};
                    u.each(this.settings.groups, function(i, t) { "string" == typeof t && (t = t.split(/\s/)), u.each(t, function(t, e) { n[e] = i }) }), i = this.settings.rules, u.each(i, function(t, e) { i[t] = u.validator.normalizeRule(e) }), u(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && u(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler) }, form: function() { return this.checkForm(), u.extend(this.submitted, this.errorMap), this.invalid = u.extend({}, this.errorMap), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() }, checkForm: function() { this.prepareForm(); for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]); return this.valid() }, element: function(t) { var e, i, n = this.clean(t),
                        r = this.validationTargetFor(n),
                        s = this,
                        a = !0; return void 0 === r ? delete this.invalid[n.name] : (this.prepareElement(r), this.currentElements = u(r), (i = this.groups[r.name]) && u.each(this.groups, function(t, e) { e === i && t !== r.name && (n = s.validationTargetFor(s.clean(s.findByName(t)))) && n.name in s.invalid && (s.currentElements.push(n), a = s.check(n) && a) }), e = !1 !== this.check(r), a = a && e, this.invalid[r.name] = !e, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), u(t).attr("aria-invalid", !e)), a }, showErrors: function(e) { if (e) { var i = this;
                        u.extend(this.errorMap, e), this.errorList = u.map(this.errorMap, function(t, e) { return { message: t, element: i.findByName(e)[0] } }), this.successList = u.grep(this.successList, function(t) { return !(t.name in e) }) } this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors() }, resetForm: function() { u.fn.resetForm && u(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors(); var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(t) }, resetElements: function(t) { var e; if (this.settings.unhighlight)
                        for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                    else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass) }, numberOfInvalids: function() { return this.objectLength(this.invalid) }, objectLength: function(t) { var e, i = 0; for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++; return i }, hideErrors: function() { this.hideThese(this.toHide) }, hideThese: function(t) { t.not(this.containers).text(""), this.addWrapper(t).hide() }, valid: function() { return 0 === this.size() }, size: function() { return this.errorList.length }, focusInvalid: function() { if (this.settings.focusInvalid) try { u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (t) {} }, findLastActive: function() { var e = this.lastActive; return e && 1 === u.grep(this.errorList, function(t) { return t.element.name === e.name }).length && e }, elements: function() { var i = this,
                        n = {}; return u(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() { var t = this.name || u(this).attr("name"),
                            e = void 0 !== u(this).attr("contenteditable") && "false" !== u(this).attr("contenteditable"); return !t && i.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = u(this).closest("form")[0], this.name = t), !(this.form !== i.currentForm || t in n || !i.objectLength(u(this).rules()) || (n[t] = !0, 0)) }) }, clean: function(t) { return u(t)[0] }, errors: function() { var t = this.settings.errorClass.split(" ").join("."); return u(this.settings.errorElement + "." + t, this.errorContext) }, resetInternals: function() { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = u([]), this.toHide = u([]) }, reset: function() { this.resetInternals(), this.currentElements = u([]) }, prepareForm: function() { this.reset(), this.toHide = this.errors().add(this.containers) }, prepareElement: function(t) { this.reset(), this.toHide = this.errorsFor(t) }, elementValue: function(t) { var e, i, n = u(t),
                        r = t.type,
                        s = void 0 !== n.attr("contenteditable") && "false" !== n.attr("contenteditable"); return "radio" === r || "checkbox" === r ? this.findByName(t.name).filter(":checked").val() : "number" === r && void 0 !== t.validity ? t.validity.badInput ? "NaN" : n.val() : (e = s ? n.text() : n.val(), "file" === r ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : 0 <= (i = e.lastIndexOf("/")) ? e.substr(i + 1) : 0 <= (i = e.lastIndexOf("\\")) ? e.substr(i + 1) : e : "string" == typeof e ? e.replace(/\r/g, "") : e) }, check: function(t) { t = this.validationTargetFor(this.clean(t)); var e, i, n, r, s = u(t).rules(),
                        a = u.map(s, function(t, e) { return e }).length,
                        o = !1,
                        l = this.elementValue(t); for (i in "function" == typeof s.normalizer ? r = s.normalizer : "function" == typeof this.settings.normalizer && (r = this.settings.normalizer), r && (l = r.call(t, l), delete s.normalizer), s) { n = { method: i, parameters: s[i] }; try { if ("dependency-mismatch" === (e = u.validator.methods[i].call(this, l, t, n.parameters)) && 1 === a) { o = !0; continue } if (o = !1, "pending" === e) return void(this.toHide = this.toHide.not(this.errorsFor(t))); if (!e) return this.formatAndAdd(t, n), !1 } catch (e) { throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + n.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + n.method + "' method."), e } } if (!o) return this.objectLength(s) && this.successList.push(t), !0 }, customDataMessage: function(t, e) { return u(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || u(t).data("msg") }, customMessage: function(t, e) { var i = this.settings.messages[t]; return i && (i.constructor === String ? i : i[e]) }, findDefined: function() { for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t] }, defaultMessage: function(t, e) { "string" == typeof e && (e = { method: e }); var i = this.findDefined(this.customMessage(t.name, e.method), this.customDataMessage(t, e.method), !this.settings.ignoreTitle && t.title || void 0, u.validator.messages[e.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                        n = /\$?\{(\d+)\}/g; return "function" == typeof i ? i = i.call(this, e.parameters, t) : n.test(i) && (i = u.validator.format(i.replace(n, "{$1}"), e.parameters)), i }, formatAndAdd: function(t, e) { var i = this.defaultMessage(t, e);
                    this.errorList.push({ message: i, element: t, method: e.method }), this.errorMap[t.name] = i, this.submitted[t.name] = i }, addWrapper: function(t) { return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t }, defaultShowErrors: function() { var t, e, i; for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message); if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]); if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show() }, validElements: function() { return this.currentElements.not(this.invalidElements()) }, invalidElements: function() { return u(this.errorList).map(function() { return this.element }) }, showLabel: function(t, e) { var i, n, r, s, a = this.errorsFor(t),
                        o = this.idOrName(t),
                        l = u(t).attr("aria-describedby");
                    a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(e)) : (i = a = u("<" + this.settings.errorElement + ">").attr("id", o + "-error").addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, u(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", o) : 0 === a.parents("label[for='" + this.escapeCssMeta(o) + "']").length && (r = a.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (l += " " + r) : l = r, u(t).attr("aria-describedby", l), (n = this.groups[t.name]) && (s = this, u.each(s.groups, function(t, e) { e === n && u("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", a.attr("id")) })))), !e && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a) }, errorsFor: function(t) { var e = this.escapeCssMeta(this.idOrName(t)),
                        i = u(t).attr("aria-describedby"),
                        n = "label[for='" + e + "'], label[for='" + e + "'] *"; return i && (n = n + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(n) }, escapeCssMeta: function(t) { return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1") }, idOrName: function(t) { return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name) }, validationTargetFor: function(t) { return this.checkable(t) && (t = this.findByName(t.name)), u(t).not(this.settings.ignore)[0] }, checkable: function(t) { return /radio|checkbox/i.test(t.type) }, findByName: function(t) { return u(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']") }, getLength: function(t, e) { switch (e.nodeName.toLowerCase()) {
                        case "select":
                            return u("option:selected", e).length;
                        case "input":
                            if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length } return t.length }, depend: function(t, e) { return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e) }, dependTypes: { boolean: function(t) { return t }, string: function(t, e) { return !!u(t, e.form).length }, function: function(t, e) { return t(e) } }, optional: function(t) { var e = this.elementValue(t); return !u.validator.methods.required.call(this, e, t) && "dependency-mismatch" }, startRequest: function(t) { this.pending[t.name] || (this.pendingRequest++, u(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0) }, stopRequest: function(t, e) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], u(t).removeClass(this.settings.pendingClass), e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(), this.submitButton && u("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) }, previousValue: function(t, e) { return e = "string" == typeof e && e || "remote", u.data(t, "previousValue") || u.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, { method: e }) }) }, destroy: function() { this.resetForm(), u(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur") } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function(t, e) { t.constructor === String ? this.classRuleSettings[t] = e : u.extend(this.classRuleSettings, t) }, classRules: function(t) { var e = {},
                    i = u(t).attr("class"); return i && u.each(i.split(" "), function() { this in u.validator.classRuleSettings && u.extend(e, u.validator.classRuleSettings[this]) }), e }, normalizeAttributeRule: function(t, e, i, n) { /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0) }, attributeRules: function(t) { var e, i, n = {},
                    r = u(t),
                    s = t.getAttribute("type"); for (e in u.validator.methods) i = "required" === e ? ("" === (i = t.getAttribute(e)) && (i = !0), !!i) : r.attr(e), this.normalizeAttributeRule(n, s, e, i); return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n }, dataRules: function(t) { var e, i, n = {},
                    r = u(t),
                    s = t.getAttribute("type"); for (e in u.validator.methods) "" === (i = r.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase())) && (i = !0), this.normalizeAttributeRule(n, s, e, i); return n }, staticRules: function(t) { var e = {},
                    i = u.data(t.form, "validator"); return i.settings.rules && (e = u.validator.normalizeRule(i.settings.rules[t.name]) || {}), e }, normalizeRules: function(n, r) { return u.each(n, function(t, e) { if (!1 !== e) { if (e.param || e.depends) { var i = !0; switch (typeof e.depends) {
                                case "string":
                                    i = !!u(e.depends, r.form).length; break;
                                case "function":
                                    i = e.depends.call(r, r) } i ? n[t] = void 0 === e.param || e.param : (u.data(r.form, "validator").resetElements(u(r)), delete n[t]) } } else delete n[t] }), u.each(n, function(t, e) { n[t] = u.isFunction(e) && "normalizer" !== t ? e(r) : e }), u.each(["minlength", "maxlength"], function() { n[this] && (n[this] = Number(n[this])) }), u.each(["rangelength", "range"], function() { var t;
                    n[this] && (u.isArray(n[this]) ? n[this] = [Number(n[this][0]), Number(n[this][1])] : "string" == typeof n[this] && (t = n[this].replace(/[\[\]]/g, "").split(/[\s,]+/), n[this] = [Number(t[0]), Number(t[1])])) }), u.validator.autoCreateRanges && (null != n.min && null != n.max && (n.range = [n.min, n.max], delete n.min, delete n.max), null != n.minlength && null != n.maxlength && (n.rangelength = [n.minlength, n.maxlength], delete n.minlength, delete n.maxlength)), n }, normalizeRule: function(t) { if ("string" == typeof t) { var e = {};
                    u.each(t.split(/\s/), function() { e[this] = !0 }), t = e } return t }, addMethod: function(t, e, i) { u.validator.methods[t] = e, u.validator.messages[t] = void 0 !== i ? i : u.validator.messages[t], e.length < 3 && u.validator.addClassRules(t, u.validator.normalizeRule(t)) }, methods: { required: function(t, e, i) { if (!this.depend(i, e)) return "dependency-mismatch"; if ("select" !== e.nodeName.toLowerCase()) return this.checkable(e) ? 0 < this.getLength(t, e) : null != t && 0 < t.length; var n = u(e).val(); return n && 0 < n.length }, email: function(t, e) { return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t) }, url: function(t, e) { return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t) }, date: (i = !1, function(t, e) { return i || (i = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString()) }), dateISO: function(t, e) { return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t) }, number: function(t, e) { return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t) }, digits: function(t, e) { return this.optional(e) || /^\d+$/.test(t) }, minlength: function(t, e, i) { var n = u.isArray(t) ? t.length : this.getLength(t, e); return this.optional(e) || i <= n }, maxlength: function(t, e, i) { var n = u.isArray(t) ? t.length : this.getLength(t, e); return this.optional(e) || n <= i }, rangelength: function(t, e, i) { var n = u.isArray(t) ? t.length : this.getLength(t, e); return this.optional(e) || n >= i[0] && n <= i[1] }, min: function(t, e, i) { return this.optional(e) || i <= t }, max: function(t, e, i) { return this.optional(e) || t <= i }, range: function(t, e, i) { return this.optional(e) || t >= i[0] && t <= i[1] }, step: function(t, e, i) { var n, r = u(e).attr("type"),
                        s = "Step attribute on input type " + r + " is not supported.",
                        a = new RegExp("\\b" + r + "\\b"),
                        o = function(t) { var e = ("" + t).match(/(?:\.(\d+))?$/); return e && e[1] ? e[1].length : 0 },
                        l = function(t) { return Math.round(t * Math.pow(10, n)) },
                        h = !0; if (r && !a.test(["text", "number", "range"].join())) throw new Error(s); return n = o(i), (o(t) > n || l(t) % l(i) != 0) && (h = !1), this.optional(e) || h }, equalTo: function(t, e, i) { var n = u(i); return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() { u(e).valid() }), t === n.val() }, remote: function(s, a, t, o) { if (this.optional(a)) return "dependency-mismatch";
                    o = "string" == typeof o && o || "remote"; var l, e, i, h = this.previousValue(a, o); return this.settings.messages[a.name] || (this.settings.messages[a.name] = {}), h.originalMessage = h.originalMessage || this.settings.messages[a.name][o], this.settings.messages[a.name][o] = h.message, t = "string" == typeof t && { url: t } || t, i = u.param(u.extend({ data: s }, t.data)), h.old === i ? h.valid : (h.old = i, (l = this).startRequest(a), (e = {})[a.name] = s, u.ajax(u.extend(!0, { mode: "abort", port: "validate" + a.name, dataType: "json", data: e, context: l.currentForm, success: function(t) { var e, i, n, r = !0 === t || "true" === t;
                            l.settings.messages[a.name][o] = h.originalMessage, r ? (n = l.formSubmitted, l.resetInternals(), l.toHide = l.errorsFor(a), l.formSubmitted = n, l.successList.push(a), l.invalid[a.name] = !1, l.showErrors()) : (e = {}, i = t || l.defaultMessage(a, { method: o, parameters: s }), e[a.name] = h.message = i, l.invalid[a.name] = !0, l.showErrors(e)), h.valid = r, l.stopRequest(a, r) } }, t)), "pending") } } }); var n, r = {}; return u.ajaxPrefilter ? u.ajaxPrefilter(function(t, e, i) { var n = t.port; "abort" === t.mode && (r[n] && r[n].abort(), r[n] = i) }) : (n = u.ajax, u.ajax = function(t) { var e = ("mode" in t ? t : u.ajaxSettings).mode,
                i = ("port" in t ? t : u.ajaxSettings).port; return "abort" === e ? (r[i] && r[i].abort(), r[i] = n.apply(this, arguments), r[i]) : n.apply(this, arguments) }), u }),
    function(v) { "use strict";
        v.event.special.destroyed || (v.event.special.destroyed = { remove: function(t) { t.handler && t.handler() } }), v.fn.extend({ maxlength: function(u, t) {
                function h(t) { var e = t.val(); return e = u.twoCharLinebreak ? e.replace(/\r(?!\n)|\n(?!\r)/g, "\r\n") : e.replace(new RegExp("\r?\n", "g"), "\n"), u.utf8 ? function(t) { for (var e = 0, i = 0; i < t.length; i++) { var n = t.charCodeAt(i);
                            n < 128 ? e++ : e += 127 < n && n < 2048 ? 2 : 3 } return e }(e) : e.length }

                function c(t, e) { return e - h(t) }

                function d(t, e) { e.css({ display: "block" }), t.trigger("maxlength.shown") }

                function p(t, e, i) { var n = ""; return u.message ? n = "function" == typeof u.message ? u.message(t, e) : u.message.replace("%charsTyped%", i).replace("%charsRemaining%", e - i).replace("%charsTotal%", e) : (u.preText && (n += u.preText), n += u.showCharsTyped ? i : e - i, u.showMaxLength && (n += u.separator + e), u.postText && (n += u.postText)), n }

                function f(t, e, i, n) { var r, s, a, o, l;
                    n && (n.html(p(e.val(), i, i - t)), 0 < t ? (s = e, a = u.threshold, o = i, l = !0, !u.alwaysShow && o - h(s) > a && (l = !1), l ? d(e, n.removeClass(u.limitReachedClass).addClass(u.warningClass)) : (r = e, n.css({ display: "none" }), r.trigger("maxlength.hidden"))) : d(e, n.removeClass(u.warningClass).addClass(u.limitReachedClass))), u.allowOverMax && (t < 0 ? e.addClass("overmax") : e.removeClass("overmax")) }

                function g(t, e) { var i, n, r = (n = (i = t)[0], v.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : { width: n.offsetWidth, height: n.offsetHeight }, i.offset())); if ("function" !== v.type(u.placement))
                        if (v.isPlainObject(u.placement)) ! function(t, e) { if (t && e) { var n = {};
                                v.each(["top", "bottom", "left", "right", "position"], function(t, e) { var i = u.placement[e];
                                    void 0 !== i && (n[e] = i) }), e.css(n) } }(u.placement, e);
                        else { var s = t.outerWidth(),
                                a = e.outerWidth(),
                                o = e.width(),
                                l = e.height(); switch (u.appendToParent && (r.top -= t.parent().offset().top, r.left -= t.parent().offset().left), u.placement) {
                                case "bottom":
                                    e.css({ top: r.top + r.height, left: r.left + r.width / 2 - o / 2 }); break;
                                case "top":
                                    e.css({ top: r.top - l, left: r.left + r.width / 2 - o / 2 }); break;
                                case "left":
                                    e.css({ top: r.top + r.height / 2 - l / 2, left: r.left - o }); break;
                                case "right":
                                    e.css({ top: r.top + r.height / 2 - l / 2, left: r.left + r.width }); break;
                                case "bottom-right":
                                    e.css({ top: r.top + r.height, left: r.left + r.width }); break;
                                case "top-right":
                                    e.css({ top: r.top - l, left: r.left + s }); break;
                                case "top-left":
                                    e.css({ top: r.top - l, left: r.left - a }); break;
                                case "bottom-left":
                                    e.css({ top: r.top + t.outerHeight(), left: r.left - a }); break;
                                case "centered-right":
                                    e.css({ top: r.top + l / 2, left: r.left + s - a - 3 }); break;
                                case "bottom-right-inside":
                                    e.css({ top: r.top + r.height, left: r.left + r.width - a }); break;
                                case "top-right-inside":
                                    e.css({ top: r.top - l, left: r.left + s - a }); break;
                                case "top-left-inside":
                                    e.css({ top: r.top - l, left: r.left }); break;
                                case "bottom-left-inside":
                                    e.css({ top: r.top + t.outerHeight(), left: r.left }) } } else u.placement(t, e, r) }

                function m(t) { var e = "maxlength"; return u.allowOverMax && (e = "data-bs-mxl"), t.attr(e) || t.attr("size") } var e = v("body"); return v.isFunction(u) && !t && (t = u, u = {}), u = v.extend({ showOnReady: !1, alwaysShow: !1, threshold: 10, warningClass: "label label-success", limitReachedClass: "label label-important label-danger", separator: " / ", preText: "", postText: "", showMaxLength: !0, placement: "bottom", message: null, showCharsTyped: !0, validate: !1, utf8: !1, appendToParent: !1, twoCharLinebreak: !0, allowOverMax: !1 }, u), this.each(function() {
                    function t() { var t = p(h.val(), o, "0");
                        o = m(h), l || (l = v('<span class="bootstrap-maxlength"></span>').css({ display: "none", position: "absolute", whiteSpace: "nowrap", zIndex: 1099 }).html(t)), h.is("textarea") && (h.data("maxlenghtsizex", h.outerWidth()), h.data("maxlenghtsizey", h.outerHeight()), h.mouseup(function() {
                            (h.outerWidth() !== h.data("maxlenghtsizex") || h.outerHeight() !== h.data("maxlenghtsizey")) && g(h, l), h.data("maxlenghtsizex", h.outerWidth()), h.data("maxlenghtsizey", h.outerHeight()) })), u.appendToParent ? (h.parent().append(l), h.parent().css("position", "relative")) : e.append(l), f(c(h, m(h)), h, o, l), g(h, l) } var o, l, h = v(this);
                    v(window).resize(function() { l && g(h, l) }), u.allowOverMax && (v(this).attr("data-bs-mxl", v(this).attr("maxlength")), v(this).removeAttr("maxlength")), u.showOnReady ? h.ready(function() { t() }) : h.focus(function() { t() }), h.on("maxlength.reposition", function() { g(h, l) }), h.on("destroyed", function() { l && l.remove() }), h.on("blur", function() { l && !u.showOnReady && l.remove() }), h.on("input", function() { var t, e, i, n, r = m(h),
                            s = c(h, r),
                            a = !0; return u.validate && s < 0 ? (e = r, i = (t = h).val(), n = 0, u.twoCharLinebreak && "\n" === (i = i.replace(/\r(?!\n)|\n(?!\r)/g, "\r\n")).substr(i.length - 1) && i.length % 2 == 1 && (n = 1), t.val(i.substr(0, e - n)), a = !1) : f(s, h, o, l), ("bottom-right-inside" === u.placement || "top-right-inside" === u.placement) && g(h, l), a }) }) } }) }(jQuery),
    function(i) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], function(t) { return i(t, window, document) }) : "object" == typeof exports ? module.exports = function(t, e) { return t || (t = window), e || (e = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), i(e, t, t.document) } : i(jQuery, window, document) }(function($, M, y, W) { "use strict"; var f, b, e, t, T = function(S) { this.$ = function(t, e) { return this.api(!0).$(t, e) }, this._ = function(t, e) { return this.api(!0).rows(t, e).data() }, this.api = function(t) { return new b(t ? se(this[f.iApiIndex]) : this) }, this.fnAddData = function(t, e) { var i = this.api(!0),
                        n = $.isArray(t) && ($.isArray(t[0]) || $.isPlainObject(t[0])) ? i.rows.add(t) : i.row.add(t); return (e === W || e) && i.draw(), n.flatten().toArray() }, this.fnAdjustColumnSizing = function(t) { var e = this.api(!0).columns.adjust(),
                        i = e.settings()[0],
                        n = i.oScroll;
                    t === W || t ? e.draw(!1) : "" === n.sX && "" === n.sY || Bt(i) }, this.fnClearTable = function(t) { var e = this.api(!0).clear();
                    (t === W || t) && e.draw() }, this.fnClose = function(t) { this.api(!0).row(t).child.hide() }, this.fnDeleteRow = function(t, e, i) { var n = this.api(!0),
                        r = n.rows(t),
                        s = r.settings()[0],
                        a = s.aoData[r[0][0]]; return r.remove(), e && e.call(this, s, a), (i === W || i) && n.draw(), a }, this.fnDestroy = function(t) { this.api(!0).destroy(t) }, this.fnDraw = function(t) { this.api(!0).draw(t) }, this.fnFilter = function(t, e, i, n, r, s) { var a = this.api(!0);
                    null === e || e === W ? a.search(t, i, n, s) : a.column(e).search(t, i, n, s), a.draw() }, this.fnGetData = function(t, e) { var i = this.api(!0); if (t === W) return i.data().toArray(); var n = t.nodeName ? t.nodeName.toLowerCase() : ""; return e !== W || "td" == n || "th" == n ? i.cell(t, e).data() : i.row(t).data() || null }, this.fnGetNodes = function(t) { var e = this.api(!0); return t !== W ? e.row(t).node() : e.rows().nodes().flatten().toArray() }, this.fnGetPosition = function(t) { var e = this.api(!0),
                        i = t.nodeName.toUpperCase(); if ("TR" == i) return e.row(t).index(); if ("TD" != i && "TH" != i) return null; var n = e.cell(t).index(); return [n.row, n.columnVisible, n.column] }, this.fnIsOpen = function(t) { return this.api(!0).row(t).child.isShown() }, this.fnOpen = function(t, e, i) { return this.api(!0).row(t).child(e, i).show().child()[0] }, this.fnPageChange = function(t, e) { var i = this.api(!0).page(t);
                    (e === W || e) && i.draw(!1) }, this.fnSetColumnVis = function(t, e, i) { var n = this.api(!0).column(t).visible(e);
                    (i === W || i) && n.columns.adjust().draw() }, this.fnSettings = function() { return se(this[f.iApiIndex]) }, this.fnSort = function(t) { this.api(!0).order(t).draw() }, this.fnSortListener = function(t, e, i) { this.api(!0).order.listener(t, e, i) }, this.fnUpdate = function(t, e, i, n, r) { var s = this.api(!0); return i === W || null === i ? s.row(e).data(t) : s.cell(e, i).data(t), (r === W || r) && s.columns.adjust(), (n === W || n) && s.draw(), 0 }, this.fnVersionCheck = f.fnVersionCheck; var C = this,
                    k = S === W,
                    D = this.length; for (var t in k && (S = {}), this.oApi = this.internal = f.internal, T.ext.internal) t && (this[t] = Re(t)); return this.each(function() { var s, a = 1 < D ? le({}, S, !0) : S,
                        o = 0,
                        t = this.getAttribute("id"),
                        l = !1,
                        e = T.defaults,
                        h = $(this); if ("table" == this.nodeName.toLowerCase()) { P(e), L(e.column), A(e, e, !0), A(e.column, e.column, !0), A(e, $.extend(a, h.data())); var i = T.settings; for (o = 0, s = i.length; o < s; o++) { var n = i[o]; if (n.nTable == this || n.nTHead && n.nTHead.parentNode == this || n.nTFoot && n.nTFoot.parentNode == this) { var r = a.bRetrieve !== W ? a.bRetrieve : e.bRetrieve,
                                    u = a.bDestroy !== W ? a.bDestroy : e.bDestroy; if (k || r) return n.oInstance; if (u) { n.oInstance.fnDestroy(); break } return void ae(n, 0, "Cannot reinitialise DataTable", 3) } if (n.sTableId == this.id) { i.splice(o, 1); break } } null !== t && "" !== t || (t = "DataTables_Table_" + T.ext._unique++, this.id = t); var c = $.extend(!0, {}, T.models.oSettings, { sDestroyWidth: h[0].style.width, sInstance: t, sTableId: t });
                        c.nTable = this, c.oApi = C.internal, c.oInit = a, i.push(c), c.oInstance = 1 === C.length ? C : h.dataTable(), P(a), E(a.oLanguage), a.aLengthMenu && !a.iDisplayLength && (a.iDisplayLength = $.isArray(a.aLengthMenu[0]) ? a.aLengthMenu[0][0] : a.aLengthMenu[0]), a = le($.extend(!0, {}, e), a), oe(c.oFeatures, a, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), oe(c, a, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                            ["oSearch", "oPreviousSearch"],
                            ["aoSearchCols", "aoPreSearchCols"],
                            ["iDisplayLength", "_iDisplayLength"]
                        ]), oe(c.oScroll, a, [
                            ["sScrollX", "sX"],
                            ["sScrollXInner", "sXInner"],
                            ["sScrollY", "sY"],
                            ["bScrollCollapse", "bCollapse"]
                        ]), oe(c.oLanguage, a, "fnInfoCallback"), ue(c, "aoDrawCallback", a.fnDrawCallback, "user"), ue(c, "aoServerParams", a.fnServerParams, "user"), ue(c, "aoStateSaveParams", a.fnStateSaveParams, "user"), ue(c, "aoStateLoadParams", a.fnStateLoadParams, "user"), ue(c, "aoStateLoaded", a.fnStateLoaded, "user"), ue(c, "aoRowCallback", a.fnRowCallback, "user"), ue(c, "aoRowCreatedCallback", a.fnCreatedRow, "user"), ue(c, "aoHeaderCallback", a.fnHeaderCallback, "user"), ue(c, "aoFooterCallback", a.fnFooterCallback, "user"), ue(c, "aoInitComplete", a.fnInitComplete, "user"), ue(c, "aoPreDrawCallback", a.fnPreDrawCallback, "user"), c.rowIdFn = Z(a.rowId), O(c); var d = c.oClasses; if ($.extend(d, T.ext.classes, a.oClasses), h.addClass(d.sTable), c.iInitDisplayStart === W && (c.iInitDisplayStart = a.iDisplayStart, c._iDisplayStart = a.iDisplayStart), null !== a.iDeferLoading) { c.bDeferLoading = !0; var p = $.isArray(a.iDeferLoading);
                            c._iRecordsDisplay = p ? a.iDeferLoading[0] : a.iDeferLoading, c._iRecordsTotal = p ? a.iDeferLoading[1] : a.iDeferLoading } var f = c.oLanguage;
                        $.extend(!0, f, a.oLanguage), f.sUrl && ($.ajax({ dataType: "json", url: f.sUrl, success: function(t) { E(t), A(e.oLanguage, t), $.extend(!0, f, t), Lt(c) }, error: function() { Lt(c) } }), l = !0), null === a.asStripeClasses && (c.asStripeClasses = [d.sStripeOdd, d.sStripeEven]); var g = c.asStripeClasses,
                            m = h.children("tbody").find("tr").eq(0); - 1 !== $.inArray(!0, $.map(g, function(t, e) { return m.hasClass(t) })) && ($("tbody tr", this).removeClass(g.join(" ")), c.asDestroyStripes = g.slice()); var v, y = [],
                            b = this.getElementsByTagName("thead"); if (0 !== b.length && (ut(c.aoHeader, b[0]), y = ct(c)), null === a.aoColumns)
                            for (v = [], o = 0, s = y.length; o < s; o++) v.push(null);
                        else v = a.aoColumns; for (o = 0, s = v.length; o < s; o++) R(c, y ? y[o] : null); if (N(c, a.aoColumnDefs, v, function(t, e) { I(c, t, e) }), m.length) { var x = function(t, e) { return null !== t.getAttribute("data-" + e) ? e : null };
                            $(m[0]).children("th, td").each(function(t, e) { var i = c.aoColumns[t]; if (i.mData === t) { var n = x(e, "sort") || x(e, "order"),
                                        r = x(e, "filter") || x(e, "search");
                                    null === n && null === r || (i.mData = { _: t + ".display", sort: null !== n ? t + ".@data-" + n : W, type: null !== n ? t + ".@data-" + n : W, filter: null !== r ? t + ".@data-" + r : W }, I(c, t)) } }) } var w = c.oFeatures,
                            _ = function() { if (a.aaSorting === W) { var t = c.aaSorting; for (o = 0, s = t.length; o < s; o++) t[o][1] = c.aoColumns[o].asSorting[0] } ee(c), w.bSort && ue(c, "aoDrawCallback", function() { if (c.bSorted) { var t = Zt(c),
                                            i = {};
                                        $.each(t, function(t, e) { i[e.src] = e.dir }), ce(c, null, "order", [c, t, i]), Jt(c) } }), ue(c, "aoDrawCallback", function() {
                                    (c.bSorted || "ssp" === fe(c) || w.bDeferRender) && ee(c) }, "sc"); var e = h.children("caption").each(function() { this._captionSide = $(this).css("caption-side") }),
                                    i = h.children("thead");
                                0 === i.length && (i = $("<thead/>").appendTo(h)), c.nTHead = i[0]; var n = h.children("tbody");
                                0 === n.length && (n = $("<tbody/>").appendTo(h)), c.nTBody = n[0]; var r = h.children("tfoot"); if (0 === r.length && 0 < e.length && ("" !== c.oScroll.sX || "" !== c.oScroll.sY) && (r = $("<tfoot/>").appendTo(h)), 0 === r.length || 0 === r.children().length ? h.addClass(d.sNoFooter) : 0 < r.length && (c.nTFoot = r[0], ut(c.aoFooter, c.nTFoot)), a.aaData)
                                    for (o = 0; o < a.aaData.length; o++) H(c, a.aaData[o]);
                                else(c.bDeferLoading || "dom" == fe(c)) && z(c, $(c.nTBody).children("tr"));
                                c.aiDisplay = c.aiDisplayMaster.slice(), !(c.bInitialised = !0) === l && Lt(c) };
                        a.bStateSave ? (w.bStateSave = !0, ue(c, "aoDrawCallback", ne, "state_save"), re(c, a, _)) : _() } else ae(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2) }), C = null, this },
            i = {},
            n = /[\r\n]/g,
            r = /<.*?>/g,
            s = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
            a = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"),
            o = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
            l = function(t) { return !t || !0 === t || "-" === t },
            p = function(t) { var e = parseInt(t, 10); return !isNaN(e) && isFinite(t) ? e : null },
            h = function(t, e) { return i[e] || (i[e] = new RegExp(St(e), "g")), "string" == typeof t && "." !== e ? t.replace(/\./g, "").replace(i[e], ".") : t },
            u = function(t, e, i) { var n = "string" == typeof t; return !!l(t) || (e && n && (t = h(t, e)), i && n && (t = t.replace(o, "")), !isNaN(parseFloat(t)) && isFinite(t)) },
            c = function(t, e, i) { return !!l(t) || (l(n = t) || "string" == typeof n) && !!u(d(t), e, i) || null; var n },
            Y = function(t, e, i) { var n = [],
                    r = 0,
                    s = t.length; if (i !== W)
                    for (; r < s; r++) t[r] && t[r][e] && n.push(t[r][e][i]);
                else
                    for (; r < s; r++) t[r] && n.push(t[r][e]); return n },
            x = function(t, e, i, n) { var r = [],
                    s = 0,
                    a = e.length; if (n !== W)
                    for (; s < a; s++) t[e[s]][i] && r.push(t[e[s]][i][n]);
                else
                    for (; s < a; s++) r.push(t[e[s]][i]); return r },
            g = function(t, e) { var i, n = [];
                e === W ? (e = 0, i = t) : (i = e, e = t); for (var r = e; r < i; r++) n.push(r); return n },
            w = function(t) { for (var e = [], i = 0, n = t.length; i < n; i++) t[i] && e.push(t[i]); return e },
            d = function(t) { return t.replace(r, "") },
            m = function(t) { if (function(t) { if (t.length < 2) return !0; for (var e = t.slice().sort(), i = e[0], n = 1, r = e.length; n < r; n++) { if (e[n] === i) return !1;
                            i = e[n] } return !0 }(t)) return t.slice(); var e, i, n, r = [],
                    s = t.length,
                    a = 0;
                t: for (i = 0; i < s; i++) { for (e = t[i], n = 0; n < a; n++)
                        if (r[n] === e) continue t;
                    r.push(e), a++ }
                return r };

        function v(i) { var n, r, s = {};
            $.each(i, function(t, e) {
                (n = t.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") && (r = t.replace(n[0], n[2].toLowerCase()), s[r] = t, "o" === n[1] && v(i[t])) }), i._hungarianMap = s }

        function A(i, n, r) { var s;
            i._hungarianMap || v(i), $.each(n, function(t, e) {
                (s = i._hungarianMap[t]) === W || !r && n[s] !== W || ("o" === s.charAt(0) ? (n[s] || (n[s] = {}), $.extend(!0, n[s], n[t]), A(i[s], n[s], r)) : n[s] = n[t]) }) }

        function E(t) { var e = T.defaults.oLanguage,
                i = e.sDecimal; if (i && Le(i), t) { var n = t.sZeroRecords;!t.sEmptyTable && n && "No data available in table" === e.sEmptyTable && oe(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && n && "Loading..." === e.sLoadingRecords && oe(t, t, "sZeroRecords", "sLoadingRecords"), t.sInfoThousands && (t.sThousands = t.sInfoThousands); var r = t.sDecimal;
                r && i !== r && Le(r) } } T.util = { throttle: function(n, t) { var r, s, a = t !== W ? t : 200; return function() { var t = this,
                        e = +new Date,
                        i = arguments;
                    r && e < r + a ? (clearTimeout(s), s = setTimeout(function() { r = W, n.apply(t, i) }, a)) : (r = e, n.apply(t, i)) } }, escapeRegex: function(t) { return t.replace(a, "\\$1") } }; var _ = function(t, e, i) { t[e] !== W && (t[i] = t[e]) };

        function P(t) { _(t, "ordering", "bSort"), _(t, "orderMulti", "bSortMulti"), _(t, "orderClasses", "bSortClasses"), _(t, "orderCellsTop", "bSortCellsTop"), _(t, "order", "aaSorting"), _(t, "orderFixed", "aaSortingFixed"), _(t, "paging", "bPaginate"), _(t, "pagingType", "sPaginationType"), _(t, "pageLength", "iDisplayLength"), _(t, "searching", "bFilter"), "boolean" == typeof t.sScrollX && (t.sScrollX = t.sScrollX ? "100%" : ""), "boolean" == typeof t.scrollX && (t.scrollX = t.scrollX ? "100%" : ""); var e = t.aoSearchCols; if (e)
                for (var i = 0, n = e.length; i < n; i++) e[i] && A(T.models.oSearch, e[i]) }

        function L(t) { _(t, "orderable", "bSortable"), _(t, "orderData", "aDataSort"), _(t, "orderSequence", "asSorting"), _(t, "orderDataType", "sortDataType"); var e = t.aDataSort; "number" != typeof e || $.isArray(e) || (t.aDataSort = [e]) }

        function O(t) { if (!T.__browser) { var e = {};
                T.__browser = e; var i = $("<div/>").css({ position: "fixed", top: 0, left: -1 * $(M).scrollLeft(), height: 1, width: 1, overflow: "hidden" }).append($("<div/>").css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" }).append($("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"),
                    n = i.children(),
                    r = n.children();
                e.barWidth = n[0].offsetWidth - n[0].clientWidth, e.bScrollOversize = 100 === r[0].offsetWidth && 100 !== n[0].clientWidth, e.bScrollbarLeft = 1 !== Math.round(r.offset().left), e.bBounding = !!i[0].getBoundingClientRect().width, i.remove() } $.extend(t.oBrowser, T.__browser), t.oScroll.iBarWidth = T.__browser.barWidth }

        function S(t, e, i, n, r, s) { var a, o = n,
                l = !1; for (i !== W && (a = i, l = !0); o !== r;) t.hasOwnProperty(o) && (a = l ? e(a, t[o], o, t) : t[o], l = !0, o += s); return a }

        function R(t, e) { var i = T.defaults.column,
                n = t.aoColumns.length,
                r = $.extend({}, T.models.oColumn, i, { nTh: e || y.createElement("th"), sTitle: i.sTitle ? i.sTitle : e ? e.innerHTML : "", aDataSort: i.aDataSort ? i.aDataSort : [n], mData: i.mData ? i.mData : n, idx: n });
            t.aoColumns.push(r); var s = t.aoPreSearchCols;
            s[n] = $.extend({}, T.models.oSearch, s[n]), I(t, n, $(e).data()) }

        function I(t, e, i) { var n = t.aoColumns[e],
                r = t.oClasses,
                s = $(n.nTh); if (!n.sWidthOrig) { n.sWidthOrig = s.attr("width") || null; var a = (s.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                a && (n.sWidthOrig = a[1]) } i !== W && null !== i && (L(i), A(T.defaults.column, i), i.mDataProp === W || i.mData || (i.mData = i.mDataProp), i.sType && (n._sManualType = i.sType), i.className && !i.sClass && (i.sClass = i.className), i.sClass && s.addClass(i.sClass), $.extend(n, i), oe(n, i, "sWidth", "sWidthOrig"), i.iDataSort !== W && (n.aDataSort = [i.iDataSort]), oe(n, i, "aDataSort")); var o = n.mData,
                l = Z(o),
                h = n.mRender ? Z(n.mRender) : null,
                u = function(t) { return "string" == typeof t && -1 !== t.indexOf("@") };
            n._bAttrSrc = $.isPlainObject(o) && (u(o.sort) || u(o.type) || u(o.filter)), n._setter = null, n.fnGetData = function(t, e, i) { var n = l(t, e, W, i); return h && e ? h(n, e, t, i) : n }, n.fnSetData = function(t, e, i) { return Q(o)(t, e, i) }, "number" != typeof o && (t._rowReadObject = !0), t.oFeatures.bSort || (n.bSortable = !1, s.addClass(r.sSortableNone)); var c = -1 !== $.inArray("asc", n.asSorting),
                d = -1 !== $.inArray("desc", n.asSorting);
            n.bSortable && (c || d) ? n.sSortingClassJUI = c && !d ? (n.sSortingClass = r.sSortableAsc, r.sSortJUIAscAllowed) : !c && d ? (n.sSortingClass = r.sSortableDesc, r.sSortJUIDescAllowed) : (n.sSortingClass = r.sSortable, r.sSortJUI) : (n.sSortingClass = r.sSortableNone, n.sSortingClassJUI = "") }

        function U(t) { if (!1 !== t.oFeatures.bAutoWidth) { var e = t.aoColumns;
                Yt(t); for (var i = 0, n = e.length; i < n; i++) e[i].nTh.style.width = e[i].sWidth } var r = t.oScroll; "" === r.sY && "" === r.sX || Bt(t), ce(t, null, "column-sizing", [t]) }

        function q(t, e) { var i = j(t, "bVisible"); return "number" == typeof i[e] ? i[e] : null }

        function C(t, e) { var i = j(t, "bVisible"),
                n = $.inArray(e, i); return -1 !== n ? n : null }

        function F(t) { var i = 0; return $.each(t.aoColumns, function(t, e) { e.bVisible && "none" !== $(e.nTh).css("display") && i++ }), i }

        function j(t, i) { var n = []; return $.map(t.aoColumns, function(t, e) { t[i] && n.push(e) }), n }

        function k(t) { var e, i, n, r, s, a, o, l, h, u = t.aoColumns,
                c = t.aoData,
                d = T.ext.type.detect; for (e = 0, i = u.length; e < i; e++)
                if (h = [], !(o = u[e]).sType && o._sManualType) o.sType = o._sManualType;
                else if (!o.sType) { for (n = 0, r = d.length; n < r; n++) { for (s = 0, a = c.length; s < a && (h[s] === W && (h[s] = D(t, s, e, "type")), (l = d[n](h[s], t)) || n === d.length - 1) && "html" !== l; s++); if (l) { o.sType = l; break } } o.sType || (o.sType = "string") } }

        function N(t, e, i, n) { var r, s, a, o, l, h, u, c = t.aoColumns; if (e)
                for (r = e.length - 1; 0 <= r; r--) { var d = (u = e[r]).targets !== W ? u.targets : u.aTargets; for ($.isArray(d) || (d = [d]), a = 0, o = d.length; a < o; a++)
                        if ("number" == typeof d[a] && 0 <= d[a]) { for (; c.length <= d[a];) R(t);
                            n(d[a], u) } else if ("number" == typeof d[a] && d[a] < 0) n(c.length + d[a], u);
                    else if ("string" == typeof d[a])
                        for (l = 0, h = c.length; l < h; l++)("_all" == d[a] || $(c[l].nTh).hasClass(d[a])) && n(l, u) }
            if (i)
                for (r = 0, s = i.length; r < s; r++) n(r, i[r]) }

        function H(t, e, i, n) { var r = t.aoData.length,
                s = $.extend(!0, {}, T.models.oRow, { src: i ? "dom" : "data", idx: r });
            s._aData = e, t.aoData.push(s); for (var a = t.aoColumns, o = 0, l = a.length; o < l; o++) a[o].sType = null;
            t.aiDisplayMaster.push(r); var h = t.rowIdFn(e); return h !== W && (t.aIds[h] = s), !i && t.oFeatures.bDeferRender || nt(t, r, i, n), r }

        function z(i, t) { var n; return t instanceof $ || (t = $(t)), t.map(function(t, e) { return n = it(i, e), H(i, n.data, e, n.cells) }) }

        function D(t, e, i, n) { var r = t.iDraw,
                s = t.aoColumns[i],
                a = t.aoData[e]._aData,
                o = s.sDefaultContent,
                l = s.fnGetData(a, n, { settings: t, row: e, col: i }); if (l === W) return t.iDrawError != r && null === o && (ae(t, 0, "Requested unknown parameter " + ("function" == typeof s.mData ? "{function}" : "'" + s.mData + "'") + " for row " + e + ", column " + i, 4), t.iDrawError = r), o; if (l !== a && null !== l || null === o || n === W) { if ("function" == typeof l) return l.call(a) } else l = o; return null === l && "display" == n ? "" : l }

        function B(t, e, i, n) { var r = t.aoColumns[i],
                s = t.aoData[e]._aData;
            r.fnSetData(s, n, { settings: t, row: e, col: i }) } var V = /\[.*?\]$/,
            G = /\(\)$/;

        function X(t) { return $.map(t.match(/(\\.|[^\.])+/g) || [""], function(t) { return t.replace(/\\\./g, ".") }) }

        function Z(r) { if ($.isPlainObject(r)) { var s = {}; return $.each(r, function(t, e) { e && (s[t] = Z(e)) }),
                    function(t, e, i, n) { var r = s[e] || s._; return r !== W ? r(t, e, i, n) : t } } if (null === r) return function(t) { return t }; if ("function" == typeof r) return function(t, e, i, n) { return r(t, e, i, n) }; if ("string" != typeof r || -1 === r.indexOf(".") && -1 === r.indexOf("[") && -1 === r.indexOf("(")) return function(t, e) { return t[r] }; var p = function(t, e, i) { var n, r, s, a; if ("" !== i)
                    for (var o = X(i), l = 0, h = o.length; l < h; l++) { if (n = o[l].match(V), r = o[l].match(G), n) { if (o[l] = o[l].replace(V, ""), "" !== o[l] && (t = t[o[l]]), s = [], o.splice(0, l + 1), a = o.join("."), $.isArray(t))
                                for (var u = 0, c = t.length; u < c; u++) s.push(p(t[u], e, a)); var d = n[0].substring(1, n[0].length - 1);
                            t = "" === d ? s : s.join(d); break } if (r) o[l] = o[l].replace(G, ""), t = t[o[l]]();
                        else { if (null === t || t[o[l]] === W) return W;
                            t = t[o[l]] } }
                return t }; return function(t, e) { return p(t, e, r) } }

        function Q(n) { if ($.isPlainObject(n)) return Q(n._); if (null === n) return function() {}; if ("function" == typeof n) return function(t, e, i) { n(t, "set", e, i) }; if ("string" != typeof n || -1 === n.indexOf(".") && -1 === n.indexOf("[") && -1 === n.indexOf("(")) return function(t, e) { t[n] = e }; var f = function(t, e, i) { for (var n, r, s, a, o, l = X(i), h = l[l.length - 1], u = 0, c = l.length - 1; u < c; u++) { if (r = l[u].match(V), s = l[u].match(G), r) { if (l[u] = l[u].replace(V, ""), t[l[u]] = [], (n = l.slice()).splice(0, u + 1), o = n.join("."), $.isArray(e))
                            for (var d = 0, p = e.length; d < p; d++) f(a = {}, e[d], o), t[l[u]].push(a);
                        else t[l[u]] = e; return } s && (l[u] = l[u].replace(G, ""), t = t[l[u]](e)), null !== t[l[u]] && t[l[u]] !== W || (t[l[u]] = {}), t = t[l[u]] } h.match(G) ? t = t[h.replace(G, "")](e) : t[h.replace(V, "")] = e }; return function(t, e) { return f(t, e, n) } }

        function J(t) { return Y(t.aoData, "_aData") }

        function K(t) { t.aoData.length = 0, t.aiDisplayMaster.length = 0, t.aiDisplay.length = 0, t.aIds = {} }

        function tt(t, e, i) { for (var n = -1, r = 0, s = t.length; r < s; r++) t[r] == e ? n = r : t[r] > e && t[r]--; - 1 != n && i === W && t.splice(n, 1) }

        function et(i, n, t, e) { var r, s, a = i.aoData[n],
                o = function(t, e) { for (; t.childNodes.length;) t.removeChild(t.firstChild);
                    t.innerHTML = D(i, n, e, "display") }; if ("dom" !== t && (t && "auto" !== t || "dom" !== a.src)) { var l = a.anCells; if (l)
                    if (e !== W) o(l[e], e);
                    else
                        for (r = 0, s = l.length; r < s; r++) o(l[r], r) } else a._aData = it(i, a, e, e === W ? W : a._aData).data;
            a._aSortData = null, a._aFilterData = null; var h = i.aoColumns; if (e !== W) h[e].sType = null;
            else { for (r = 0, s = h.length; r < s; r++) h[r].sType = null;
                rt(i, a) } }

        function it(t, e, i, r) { var n, s, a, o = [],
                l = e.firstChild,
                h = 0,
                u = t.aoColumns,
                c = t._rowReadObject;
            r = r !== W ? r : c ? {} : []; var d = function(t, e) { if ("string" == typeof t) { var i = t.indexOf("@"); if (-1 !== i) { var n = t.substring(i + 1);
                            Q(t)(r, e.getAttribute(n)) } } },
                p = function(t) { i !== W && i !== h || (s = u[h], a = $.trim(t.innerHTML), s && s._bAttrSrc ? (Q(s.mData._)(r, a), d(s.mData.sort, t), d(s.mData.type, t), d(s.mData.filter, t)) : c ? (s._setter || (s._setter = Q(s.mData)), s._setter(r, a)) : r[h] = a), h++ }; if (l)
                for (; l;) "TD" != (n = l.nodeName.toUpperCase()) && "TH" != n || (p(l), o.push(l)), l = l.nextSibling;
            else
                for (var f = 0, g = (o = e.anCells).length; f < g; f++) p(o[f]); var m = e.firstChild ? e : e.nTr; if (m) { var v = m.getAttribute("id");
                v && Q(t.rowId)(r, v) } return { data: r, cells: o } }

        function nt(t, e, i, n) { var r, s, a, o, l, h = t.aoData[e],
                u = h._aData,
                c = []; if (null === h.nTr) { for (r = i || y.createElement("tr"), h.nTr = r, h.anCells = c, r._DT_RowIndex = e, rt(t, h), o = 0, l = t.aoColumns.length; o < l; o++) a = t.aoColumns[o], (s = i ? n[o] : y.createElement(a.sCellType))._DT_CellIndex = { row: e, column: o }, c.push(s), i && !a.mRender && a.mData === o || $.isPlainObject(a.mData) && a.mData._ === o + ".display" || (s.innerHTML = D(t, e, o, "display")), a.sClass && (s.className += " " + a.sClass), a.bVisible && !i ? r.appendChild(s) : !a.bVisible && i && s.parentNode.removeChild(s), a.fnCreatedCell && a.fnCreatedCell.call(t.oInstance, s, D(t, e, o), u, e, o);
                ce(t, "aoRowCreatedCallback", null, [r, u, e, c]) } h.nTr.setAttribute("role", "row") }

        function rt(t, e) { var i = e.nTr,
                n = e._aData; if (i) { var r = t.rowIdFn(n); if (r && (i.id = r), n.DT_RowClass) { var s = n.DT_RowClass.split(" ");
                    e.__rowc = e.__rowc ? m(e.__rowc.concat(s)) : s, $(i).removeClass(e.__rowc.join(" ")).addClass(n.DT_RowClass) } n.DT_RowAttr && $(i).attr(n.DT_RowAttr), n.DT_RowData && $(i).data(n.DT_RowData) } }

        function st(t) { var e, i, n, r, s, a = t.nTHead,
                o = t.nTFoot,
                l = 0 === $("th, td", a).length,
                h = t.oClasses,
                u = t.aoColumns; for (l && (r = $("<tr/>").appendTo(a)), e = 0, i = u.length; e < i; e++) s = u[e], n = $(s.nTh).addClass(s.sClass), l && n.appendTo(r), t.oFeatures.bSort && (n.addClass(s.sSortingClass), !1 !== s.bSortable && (n.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId), te(t, s.nTh, e))), s.sTitle != n[0].innerHTML && n.html(s.sTitle), pe(t, "header")(t, n, s, h); if (l && ut(t.aoHeader, a), $(a).find(">tr").attr("role", "row"), $(a).find(">tr>th, >tr>td").addClass(h.sHeaderTH), $(o).find(">tr>th, >tr>td").addClass(h.sFooterTH), null !== o) { var c = t.aoFooter[0]; for (e = 0, i = c.length; e < i; e++)(s = u[e]).nTf = c[e].cell, s.sClass && $(s.nTf).addClass(s.sClass) } }

        function at(t, e, i) { var n, r, s, a, o, l, h, u, c, d = [],
                p = [],
                f = t.aoColumns.length; if (e) { for (i === W && (i = !1), n = 0, r = e.length; n < r; n++) { for (d[n] = e[n].slice(), d[n].nTr = e[n].nTr, s = f - 1; 0 <= s; s--) t.aoColumns[s].bVisible || i || d[n].splice(s, 1);
                    p.push([]) } for (n = 0, r = d.length; n < r; n++) { if (h = d[n].nTr)
                        for (; l = h.firstChild;) h.removeChild(l); for (s = 0, a = d[n].length; s < a; s++)
                        if (c = u = 1, p[n][s] === W) { for (h.appendChild(d[n][s].cell), p[n][s] = 1; d[n + u] !== W && d[n][s].cell == d[n + u][s].cell;) p[n + u][s] = 1, u++; for (; d[n][s + c] !== W && d[n][s].cell == d[n][s + c].cell;) { for (o = 0; o < u; o++) p[n + o][s + c] = 1;
                                c++ } $(d[n][s].cell).attr("rowspan", u).attr("colspan", c) } } } }

        function ot(t) { var e = ce(t, "aoPreDrawCallback", "preDraw", [t]); if (-1 === $.inArray(!1, e)) { var i = [],
                    n = 0,
                    r = t.asStripeClasses,
                    s = r.length,
                    a = (t.aoOpenRows.length, t.oLanguage),
                    o = t.iInitDisplayStart,
                    l = "ssp" == fe(t),
                    h = t.aiDisplay;
                t.bDrawing = !0, o !== W && -1 !== o && (t._iDisplayStart = l ? o : o >= t.fnRecordsDisplay() ? 0 : o, t.iInitDisplayStart = -1); var u = t._iDisplayStart,
                    c = t.fnDisplayEnd(); if (t.bDeferLoading) t.bDeferLoading = !1, t.iDraw++, Ht(t, !1);
                else if (l) { if (!t.bDestroying && !pt(t)) return } else t.iDraw++; if (0 !== h.length)
                    for (var d = l ? 0 : u, p = l ? t.aoData.length : c, f = d; f < p; f++) { var g = h[f],
                            m = t.aoData[g];
                        null === m.nTr && nt(t, g); var v = m.nTr; if (0 !== s) { var y = r[n % s];
                            m._sRowStripe != y && ($(v).removeClass(m._sRowStripe).addClass(y), m._sRowStripe = y) } ce(t, "aoRowCallback", null, [v, m._aData, n, f, g]), i.push(v), n++ } else { var b = a.sZeroRecords;
                        1 == t.iDraw && "ajax" == fe(t) ? b = a.sLoadingRecords : a.sEmptyTable && 0 === t.fnRecordsTotal() && (b = a.sEmptyTable), i[0] = $("<tr/>", { class: s ? r[0] : "" }).append($("<td />", { valign: "top", colSpan: F(t), class: t.oClasses.sRowEmpty }).html(b))[0] } ce(t, "aoHeaderCallback", "header", [$(t.nTHead).children("tr")[0], J(t), u, c, h]), ce(t, "aoFooterCallback", "footer", [$(t.nTFoot).children("tr")[0], J(t), u, c, h]); var x = $(t.nTBody);
                x.children().detach(), x.append($(i)), ce(t, "aoDrawCallback", "draw", [t]), t.bSorted = !1, t.bFiltered = !1, t.bDrawing = !1 } else Ht(t, !1) }

        function lt(t, e) { var i = t.oFeatures,
                n = i.bSort,
                r = i.bFilter;
            n && Qt(t), r ? yt(t, t.oPreviousSearch) : t.aiDisplay = t.aiDisplayMaster.slice(), !0 !== e && (t._iDisplayStart = 0), t._drawHold = e, ot(t), t._drawHold = !1 }

        function ht(t) { var e = t.oClasses,
                i = $(t.nTable),
                n = $("<div/>").insertBefore(i),
                r = t.oFeatures,
                s = $("<div/>", { id: t.sTableId + "_wrapper", class: e.sWrapper + (t.nTFoot ? "" : " " + e.sNoFooter) });
            t.nHolding = n[0], t.nTableWrapper = s[0], t.nTableReinsertBefore = t.nTable.nextSibling; for (var a, o, l, h, u, c, d = t.sDom.split(""), p = 0; p < d.length; p++) { if (a = null, "<" == (o = d[p])) { if (l = $("<div/>")[0], "'" == (h = d[p + 1]) || '"' == h) { for (u = "", c = 2; d[p + c] != h;) u += d[p + c], c++; if ("H" == u ? u = e.sJUIHeader : "F" == u && (u = e.sJUIFooter), -1 != u.indexOf(".")) { var f = u.split(".");
                            l.id = f[0].substr(1, f[0].length - 1), l.className = f[1] } else "#" == u.charAt(0) ? l.id = u.substr(1, u.length - 1) : l.className = u;
                        p += c } s.append(l), s = $(l) } else if (">" == o) s = s.parent();
                else if ("l" == o && r.bPaginate && r.bLengthChange) a = It(t);
                else if ("f" == o && r.bFilter) a = vt(t);
                else if ("r" == o && r.bProcessing) a = Nt(t);
                else if ("t" == o) a = zt(t);
                else if ("i" == o && r.bInfo) a = At(t);
                else if ("p" == o && r.bPaginate) a = Ft(t);
                else if (0 !== T.ext.feature.length)
                    for (var g = T.ext.feature, m = 0, v = g.length; m < v; m++)
                        if (o == g[m].cFeature) { a = g[m].fnInit(t); break } if (a) { var y = t.aanFeatures;
                    y[o] || (y[o] = []), y[o].push(a), s.append(a) } } n.replaceWith(s), t.nHolding = null }

        function ut(t, e) { var i, n, r, s, a, o, l, h, u, c, d = $(e).children("tr"),
                p = function(t, e, i) { for (var n = t[e]; n[i];) i++; return i }; for (t.splice(0, t.length), r = 0, o = d.length; r < o; r++) t.push([]); for (r = 0, o = d.length; r < o; r++)
                for (n = (i = d[r]).firstChild; n;) { if ("TD" == n.nodeName.toUpperCase() || "TH" == n.nodeName.toUpperCase())
                        for (h = (h = 1 * n.getAttribute("colspan")) && 0 !== h && 1 !== h ? h : 1, u = (u = 1 * n.getAttribute("rowspan")) && 0 !== u && 1 !== u ? u : 1, l = p(t, r, 0), c = 1 === h, a = 0; a < h; a++)
                            for (s = 0; s < u; s++) t[r + s][l + a] = { cell: n, unique: c }, t[r + s].nTr = i;
                    n = n.nextSibling } }

        function ct(t, e, i) { var n = [];
            i || (i = t.aoHeader, e && ut(i = [], e)); for (var r = 0, s = i.length; r < s; r++)
                for (var a = 0, o = i[r].length; a < o; a++) !i[r][a].unique || n[a] && t.bSortCellsTop || (n[a] = i[r][a].cell); return n }

        function dt(r, t, e) { if (ce(r, "aoServerParams", "serverParams", [t]), t && $.isArray(t)) { var s = {},
                    a = /(.*?)\[\]$/;
                $.each(t, function(t, e) { var i = e.name.match(a); if (i) { var n = i[0];
                        s[n] || (s[n] = []), s[n].push(e.value) } else s[e.name] = e.value }), t = s } var i, n = r.ajax,
                o = r.oInstance,
                l = function(t) { ce(r, null, "xhr", [r, t, r.jqXHR]), e(t) }; if ($.isPlainObject(n) && n.data) { var h = "function" == typeof(i = n.data) ? i(t, r) : i;
                t = "function" == typeof i && h ? h : $.extend(!0, t, h), delete n.data } var u = { data: t, success: function(t) { var e = t.error || t.sError;
                    e && ae(r, 0, e), r.json = t, l(t) }, dataType: "json", cache: !1, type: r.sServerMethod, error: function(t, e, i) { var n = ce(r, null, "xhr", [r, null, r.jqXHR]); - 1 === $.inArray(!0, n) && ("parsererror" == e ? ae(r, 0, "Invalid JSON response", 1) : 4 === t.readyState && ae(r, 0, "Ajax error", 7)), Ht(r, !1) } };
            r.oAjaxData = t, ce(r, null, "preXhr", [r, t]), r.fnServerData ? r.fnServerData.call(o, r.sAjaxSource, $.map(t, function(t, e) { return { name: e, value: t } }), l, r) : r.sAjaxSource || "string" == typeof n ? r.jqXHR = $.ajax($.extend(u, { url: n || r.sAjaxSource })) : "function" == typeof n ? r.jqXHR = n.call(o, t, l, r) : (r.jqXHR = $.ajax($.extend(u, n)), n.data = i) }

        function pt(e) { return !e.bAjaxDataGet || (e.iDraw++, Ht(e, !0), dt(e, ft(e), function(t) { gt(e, t) }), !1) }

        function ft(t) { var e, i, n, r, s = t.aoColumns,
                a = s.length,
                o = t.oFeatures,
                l = t.oPreviousSearch,
                h = t.aoPreSearchCols,
                u = [],
                c = Zt(t),
                d = t._iDisplayStart,
                p = !1 !== o.bPaginate ? t._iDisplayLength : -1,
                f = function(t, e) { u.push({ name: t, value: e }) };
            f("sEcho", t.iDraw), f("iColumns", a), f("sColumns", Y(s, "sName").join(",")), f("iDisplayStart", d), f("iDisplayLength", p); var g = { draw: t.iDraw, columns: [], order: [], start: d, length: p, search: { value: l.sSearch, regex: l.bRegex } }; for (e = 0; e < a; e++) n = s[e], r = h[e], i = "function" == typeof n.mData ? "function" : n.mData, g.columns.push({ data: i, name: n.sName, searchable: n.bSearchable, orderable: n.bSortable, search: { value: r.sSearch, regex: r.bRegex } }), f("mDataProp_" + e, i), o.bFilter && (f("sSearch_" + e, r.sSearch), f("bRegex_" + e, r.bRegex), f("bSearchable_" + e, n.bSearchable)), o.bSort && f("bSortable_" + e, n.bSortable);
            o.bFilter && (f("sSearch", l.sSearch), f("bRegex", l.bRegex)), o.bSort && ($.each(c, function(t, e) { g.order.push({ column: e.col, dir: e.dir }), f("iSortCol_" + t, e.col), f("sSortDir_" + t, e.dir) }), f("iSortingCols", c.length)); var m = T.ext.legacy.ajax; return null === m ? t.sAjaxSource ? u : g : m ? u : g }

        function gt(t, i) { var e = function(t, e) { return i[t] !== W ? i[t] : i[e] },
                n = mt(t, i),
                r = e("sEcho", "draw"),
                s = e("iTotalRecords", "recordsTotal"),
                a = e("iTotalDisplayRecords", "recordsFiltered"); if (r) { if (1 * r < t.iDraw) return;
                t.iDraw = 1 * r } K(t), t._iRecordsTotal = parseInt(s, 10), t._iRecordsDisplay = parseInt(a, 10); for (var o = 0, l = n.length; o < l; o++) H(t, n[o]);
            t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, ot(t), t._bInitComplete || Ot(t, i), t.bAjaxDataGet = !0, Ht(t, !1) }

        function mt(t, e) { var i = $.isPlainObject(t.ajax) && t.ajax.dataSrc !== W ? t.ajax.dataSrc : t.sAjaxDataProp; return "data" === i ? e.aaData || e[i] : "" !== i ? Z(i)(e) : e }

        function vt(i) { var t = i.oClasses,
                e = i.sTableId,
                n = i.oLanguage,
                r = i.oPreviousSearch,
                s = i.aanFeatures,
                a = '<input type="search" class="' + t.sFilterInput + '"/>',
                o = n.sSearch;
            o = o.match(/_INPUT_/) ? o.replace("_INPUT_", a) : o + a; var l = $("<div/>", { id: s.f ? null : e + "_filter", class: t.sFilter }).append($("<label/>").append(o)),
                h = function() { s.f; var t = this.value ? this.value : "";
                    t != r.sSearch && (yt(i, { sSearch: t, bRegex: r.bRegex, bSmart: r.bSmart, bCaseInsensitive: r.bCaseInsensitive }), i._iDisplayStart = 0, ot(i)) },
                u = null !== i.searchDelay ? i.searchDelay : "ssp" === fe(i) ? 400 : 0,
                c = $("input", l).val(r.sSearch).attr("placeholder", n.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", u ? Ut(h, u) : h).on("keypress.DT", function(t) { if (13 == t.keyCode) return !1 }).attr("aria-controls", e); return $(i.nTable).on("search.dt.DT", function(t, e) { if (i === e) try { c[0] !== y.activeElement && c.val(r.sSearch) } catch (t) {} }), l[0] }

        function yt(t, e, i) { var n = t.oPreviousSearch,
                r = t.aoPreSearchCols,
                s = function(t) { n.sSearch = t.sSearch, n.bRegex = t.bRegex, n.bSmart = t.bSmart, n.bCaseInsensitive = t.bCaseInsensitive },
                a = function(t) { return t.bEscapeRegex !== W ? !t.bEscapeRegex : t.bRegex }; if (k(t), "ssp" != fe(t)) { wt(t, e.sSearch, i, a(e), e.bSmart, e.bCaseInsensitive), s(e); for (var o = 0; o < r.length; o++) xt(t, r[o].sSearch, o, a(r[o]), r[o].bSmart, r[o].bCaseInsensitive);
                bt(t) } else s(e);
            t.bFiltered = !0, ce(t, null, "search", [t]) }

        function bt(t) { for (var e, i, n = T.ext.search, r = t.aiDisplay, s = 0, a = n.length; s < a; s++) { for (var o = [], l = 0, h = r.length; l < h; l++) i = r[l], e = t.aoData[i], n[s](t, e._aFilterData, i, e._aData, l) && o.push(i);
                r.length = 0, $.merge(r, o) } }

        function xt(t, e, i, n, r, s) { if ("" !== e) { for (var a, o = [], l = t.aiDisplay, h = _t(e, n, r, s), u = 0; u < l.length; u++) a = t.aoData[l[u]]._aFilterData[i], h.test(a) && o.push(l[u]);
                t.aiDisplay = o } }

        function wt(t, e, i, n, r, s) { var a, o, l, h = _t(e, n, r, s),
                u = t.oPreviousSearch.sSearch,
                c = t.aiDisplayMaster,
                d = []; if (0 !== T.ext.search.length && (i = !0), o = Dt(t), e.length <= 0) t.aiDisplay = c.slice();
            else { for ((o || i || u.length > e.length || 0 !== e.indexOf(u) || t.bSorted) && (t.aiDisplay = c.slice()), a = t.aiDisplay, l = 0; l < a.length; l++) h.test(t.aoData[a[l]]._sFilterRow) && d.push(a[l]);
                t.aiDisplay = d } }

        function _t(t, e, i, n) { return t = e ? t : St(t), i && (t = "^(?=.*?" + $.map(t.match(/"[^"]+"|[^ ]+/g) || [""], function(t) { if ('"' === t.charAt(0)) { var e = t.match(/^"(.*)"$/);
                    t = e ? e[1] : t } return t.replace('"', "") }).join(")(?=.*?") + ").*$"), new RegExp(t, n ? "i" : "") } var St = T.util.escapeRegex,
            Ct = $("<div>")[0],
            kt = Ct.textContent !== W;

        function Dt(t) { var e, i, n, r, s, a, o, l, h = t.aoColumns,
                u = T.ext.type.search,
                c = !1; for (i = 0, r = t.aoData.length; i < r; i++)
                if (!(l = t.aoData[i])._aFilterData) { for (a = [], n = 0, s = h.length; n < s; n++)(e = h[n]).bSearchable ? (o = D(t, i, n, "filter"), u[e.sType] && (o = u[e.sType](o)), null === o && (o = ""), "string" != typeof o && o.toString && (o = o.toString())) : o = "", o.indexOf && -1 !== o.indexOf("&") && (Ct.innerHTML = o, o = kt ? Ct.textContent : Ct.innerText), o.replace && (o = o.replace(/[\r\n]/g, "")), a.push(o);
                    l._aFilterData = a, l._sFilterRow = a.join("  "), c = !0 } return c }

        function Tt(t) { return { search: t.sSearch, smart: t.bSmart, regex: t.bRegex, caseInsensitive: t.bCaseInsensitive } }

        function Mt(t) { return { sSearch: t.search, bSmart: t.smart, bRegex: t.regex, bCaseInsensitive: t.caseInsensitive } }

        function At(t) { var e = t.sTableId,
                i = t.aanFeatures.i,
                n = $("<div/>", { class: t.oClasses.sInfo, id: i ? null : e + "_info" }); return i || (t.aoDrawCallback.push({ fn: Et, sName: "information" }), n.attr("role", "status").attr("aria-live", "polite"), $(t.nTable).attr("aria-describedby", e + "_info")), n[0] }

        function Et(t) { var e = t.aanFeatures.i; if (0 !== e.length) { var i = t.oLanguage,
                    n = t._iDisplayStart + 1,
                    r = t.fnDisplayEnd(),
                    s = t.fnRecordsTotal(),
                    a = t.fnRecordsDisplay(),
                    o = a ? i.sInfo : i.sInfoEmpty;
                a !== s && (o += " " + i.sInfoFiltered), o = Pt(t, o += i.sInfoPostFix); var l = i.fnInfoCallback;
                null !== l && (o = l.call(t.oInstance, t, n, r, s, a, o)), $(e).html(o) } }

        function Pt(t, e) { var i = t.fnFormatNumber,
                n = t._iDisplayStart + 1,
                r = t._iDisplayLength,
                s = t.fnRecordsDisplay(),
                a = -1 === r; return e.replace(/_START_/g, i.call(t, n)).replace(/_END_/g, i.call(t, t.fnDisplayEnd())).replace(/_MAX_/g, i.call(t, t.fnRecordsTotal())).replace(/_TOTAL_/g, i.call(t, s)).replace(/_PAGE_/g, i.call(t, a ? 1 : Math.ceil(n / r))).replace(/_PAGES_/g, i.call(t, a ? 1 : Math.ceil(s / r))) }

        function Lt(i) { var n, t, e, r = i.iInitDisplayStart,
                s = i.aoColumns,
                a = i.oFeatures,
                o = i.bDeferLoading; if (i.bInitialised) { for (ht(i), st(i), at(i, i.aoHeader), at(i, i.aoFooter), Ht(i, !0), a.bAutoWidth && Yt(i), n = 0, t = s.length; n < t; n++)(e = s[n]).sWidth && (e.nTh.style.width = Xt(e.sWidth));
                ce(i, null, "preInit", [i]), lt(i); var l = fe(i);
                ("ssp" != l || o) && ("ajax" == l ? dt(i, [], function(t) { var e = mt(i, t); for (n = 0; n < e.length; n++) H(i, e[n]);
                    i.iInitDisplayStart = r, lt(i), Ht(i, !1), Ot(i, t) }) : (Ht(i, !1), Ot(i))) } else setTimeout(function() { Lt(i) }, 200) }

        function Ot(t, e) { t._bInitComplete = !0, (e || t.oInit.aaData) && U(t), ce(t, null, "plugin-init", [t, e]), ce(t, "aoInitComplete", "init", [t, e]) }

        function Rt(t, e) { var i = parseInt(e, 10);
            t._iDisplayLength = i, de(t), ce(t, null, "length", [t, i]) }

        function It(n) { for (var t = n.oClasses, e = n.sTableId, i = n.aLengthMenu, r = $.isArray(i[0]), s = r ? i[0] : i, a = r ? i[1] : i, o = $("<select/>", { name: e + "_length", "aria-controls": e, class: t.sLengthSelect }), l = 0, h = s.length; l < h; l++) o[0][l] = new Option("number" == typeof a[l] ? n.fnFormatNumber(a[l]) : a[l], s[l]); var u = $("<div><label/></div>").addClass(t.sLength); return n.aanFeatures.l || (u[0].id = e + "_length"), u.children().append(n.oLanguage.sLengthMenu.replace("_MENU_", o[0].outerHTML)), $("select", u).val(n._iDisplayLength).on("change.DT", function(t) { Rt(n, $(this).val()), ot(n) }), $(n.nTable).on("length.dt.DT", function(t, e, i) { n === e && $("select", u).val(i) }), u[0] }

        function Ft(t) { var e = t.sPaginationType,
                u = T.ext.pager[e],
                c = "function" == typeof u,
                d = function(t) { ot(t) },
                i = $("<div/>").addClass(t.oClasses.sPaging + e)[0],
                p = t.aanFeatures; return c || u.fnInit(t, i, d), p.p || (i.id = t.sTableId + "_paginate", t.aoDrawCallback.push({ fn: function(t) { if (c) { var e, i, n = t._iDisplayStart,
                            r = t._iDisplayLength,
                            s = t.fnRecordsDisplay(),
                            a = -1 === r,
                            o = a ? 0 : Math.ceil(n / r),
                            l = a ? 1 : Math.ceil(s / r),
                            h = u(o, l); for (e = 0, i = p.p.length; e < i; e++) pe(t, "pageButton")(t, p.p[e], e, h, o, l) } else u.fnUpdate(t, d) }, sName: "pagination" })), i }

        function jt(t, e, i) { var n = t._iDisplayStart,
                r = t._iDisplayLength,
                s = t.fnRecordsDisplay();
            0 === s || -1 === r ? n = 0 : "number" == typeof e ? s < (n = e * r) && (n = 0) : "first" == e ? n = 0 : "previous" == e ? (n = 0 <= r ? n - r : 0) < 0 && (n = 0) : "next" == e ? n + r < s && (n += r) : "last" == e ? n = Math.floor((s - 1) / r) * r : ae(t, 0, "Unknown paging action: " + e, 5); var a = t._iDisplayStart !== n; return t._iDisplayStart = n, a && (ce(t, null, "page", [t]), i && ot(t)), a }

        function Nt(t) { return $("<div/>", { id: t.aanFeatures.r ? null : t.sTableId + "_processing", class: t.oClasses.sProcessing }).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0] }

        function Ht(t, e) { t.oFeatures.bProcessing && $(t.aanFeatures.r).css("display", e ? "block" : "none"), ce(t, null, "processing", [t, e]) }

        function zt(t) { var e = $(t.nTable);
            e.attr("role", "grid"); var i = t.oScroll; if ("" === i.sX && "" === i.sY) return t.nTable; var n = i.sX,
                r = i.sY,
                s = t.oClasses,
                a = e.children("caption"),
                o = a.length ? a[0]._captionSide : null,
                l = $(e[0].cloneNode(!1)),
                h = $(e[0].cloneNode(!1)),
                u = e.children("tfoot"),
                c = "<div/>",
                d = function(t) { return t ? Xt(t) : null };
            u.length || (u = null); var p = $(c, { class: s.sScrollWrapper }).append($(c, { class: s.sScrollHead }).css({ overflow: "hidden", position: "relative", border: 0, width: n ? d(n) : "100%" }).append($(c, { class: s.sScrollHeadInner }).css({ "box-sizing": "content-box", width: i.sXInner || "100%" }).append(l.removeAttr("id").css("margin-left", 0).append("top" === o ? a : null).append(e.children("thead"))))).append($(c, { class: s.sScrollBody }).css({ position: "relative", overflow: "auto", width: d(n) }).append(e));
            u && p.append($(c, { class: s.sScrollFoot }).css({ overflow: "hidden", border: 0, width: n ? d(n) : "100%" }).append($(c, { class: s.sScrollFootInner }).append(h.removeAttr("id").css("margin-left", 0).append("bottom" === o ? a : null).append(e.children("tfoot"))))); var f = p.children(),
                g = f[0],
                m = f[1],
                v = u ? f[2] : null; return n && $(m).on("scroll.DT", function(t) { var e = this.scrollLeft;
                g.scrollLeft = e, u && (v.scrollLeft = e) }), $(m).css(r && i.bCollapse ? "max-height" : "height", r), t.nScrollHead = g, t.nScrollBody = m, t.nScrollFoot = v, t.aoDrawCallback.push({ fn: Bt, sName: "scrolling" }), p[0] }

        function Bt(i) { var t, e, n, r, s, a, o, l, h, u = i.oScroll,
                c = u.sX,
                d = u.sXInner,
                p = u.sY,
                f = u.iBarWidth,
                g = $(i.nScrollHead),
                m = g[0].style,
                v = g.children("div"),
                y = v[0].style,
                b = v.children("table"),
                x = i.nScrollBody,
                w = $(x),
                _ = x.style,
                S = $(i.nScrollFoot).children("div"),
                C = S.children("table"),
                k = $(i.nTHead),
                D = $(i.nTable),
                T = D[0],
                M = T.style,
                A = i.nTFoot ? $(i.nTFoot) : null,
                E = i.oBrowser,
                P = E.bScrollOversize,
                L = Y(i.aoColumns, "nTh"),
                O = [],
                R = [],
                I = [],
                F = [],
                j = function(t) { var e = t.style;
                    e.paddingTop = "0", e.paddingBottom = "0", e.borderTopWidth = "0", e.borderBottomWidth = "0", e.height = 0 },
                N = x.scrollHeight > x.clientHeight; if (i.scrollBarVis !== N && i.scrollBarVis !== W) return i.scrollBarVis = N, void U(i);
            i.scrollBarVis = N, D.children("thead, tfoot").remove(), A && (a = A.clone().prependTo(D), e = A.find("tr"), r = a.find("tr")), s = k.clone().prependTo(D), t = k.find("tr"), n = s.find("tr"), s.find("th, td").removeAttr("tabindex"), c || (_.width = "100%", g[0].style.width = "100%"), $.each(ct(i, s), function(t, e) { o = q(i, t), e.style.width = i.aoColumns[o].sWidth }), A && $t(function(t) { t.style.width = "" }, r), h = D.outerWidth(), "" === c ? (M.width = "100%", P && (D.find("tbody").height() > x.offsetHeight || "scroll" == w.css("overflow-y")) && (M.width = Xt(D.outerWidth() - f)), h = D.outerWidth()) : "" !== d && (M.width = Xt(d), h = D.outerWidth()), $t(j, n), $t(function(t) { I.push(t.innerHTML), O.push(Xt($(t).css("width"))) }, n), $t(function(t, e) {-1 !== $.inArray(t, L) && (t.style.width = O[e]) }, t), $(n).height(0), A && ($t(j, r), $t(function(t) { F.push(t.innerHTML), R.push(Xt($(t).css("width"))) }, r), $t(function(t, e) { t.style.width = R[e] }, e), $(r).height(0)), $t(function(t, e) { t.innerHTML = '<div class="dataTables_sizing">' + I[e] + "</div>", t.childNodes[0].style.height = "0", t.childNodes[0].style.overflow = "hidden", t.style.width = O[e] }, n), A && $t(function(t, e) { t.innerHTML = '<div class="dataTables_sizing">' + F[e] + "</div>", t.childNodes[0].style.height = "0", t.childNodes[0].style.overflow = "hidden", t.style.width = R[e] }, r), D.outerWidth() < h ? (l = x.scrollHeight > x.offsetHeight || "scroll" == w.css("overflow-y") ? h + f : h, P && (x.scrollHeight > x.offsetHeight || "scroll" == w.css("overflow-y")) && (M.width = Xt(l - f)), "" !== c && "" === d || ae(i, 1, "Possible column misalignment", 6)) : l = "100%", _.width = Xt(l), m.width = Xt(l), A && (i.nScrollFoot.style.width = Xt(l)), p || P && (_.height = Xt(T.offsetHeight + f)); var H = D.outerWidth();
            b[0].style.width = Xt(H), y.width = Xt(H); var z = D.height() > x.clientHeight || "scroll" == w.css("overflow-y"),
                B = "padding" + (E.bScrollbarLeft ? "Left" : "Right");
            y[B] = z ? f + "px" : "0px", A && (C[0].style.width = Xt(H), S[0].style.width = Xt(H), S[0].style[B] = z ? f + "px" : "0px"), D.children("colgroup").insertBefore(D.children("thead")), w.scroll(), !i.bSorted && !i.bFiltered || i._drawHold || (x.scrollTop = 0) }

        function $t(t, e, i) { for (var n, r, s = 0, a = 0, o = e.length; a < o;) { for (n = e[a].firstChild, r = i ? i[a].firstChild : null; n;) 1 === n.nodeType && (i ? t(n, r, s) : t(n, s), s++), n = n.nextSibling, r = i ? r.nextSibling : null;
                a++ } } var Wt = /<.*?>/g;

        function Yt(t) { var e, i, n, r = t.nTable,
                s = t.aoColumns,
                a = t.oScroll,
                o = a.sY,
                l = a.sX,
                h = a.sXInner,
                u = s.length,
                c = j(t, "bVisible"),
                d = $("th", t.nTHead),
                p = r.getAttribute("width"),
                f = r.parentNode,
                g = !1,
                m = t.oBrowser,
                v = m.bScrollOversize,
                y = r.style.width; for (y && -1 !== y.indexOf("%") && (p = y), e = 0; e < c.length; e++) null !== (i = s[c[e]]).sWidth && (i.sWidth = qt(i.sWidthOrig, f), g = !0); if (v || !g && !l && !o && u == F(t) && u == d.length)
                for (e = 0; e < u; e++) { var b = q(t, e);
                    null !== b && (s[b].sWidth = Xt(d.eq(e).width())) } else { var x = $(r).clone().css("visibility", "hidden").removeAttr("id");
                    x.find("tbody tr").remove(); var w = $("<tr/>").appendTo(x.find("tbody")); for (x.find("thead, tfoot").remove(), x.append($(t.nTHead).clone()).append($(t.nTFoot).clone()), x.find("tfoot th, tfoot td").css("width", ""), d = ct(t, x.find("thead")[0]), e = 0; e < c.length; e++) i = s[c[e]], d[e].style.width = null !== i.sWidthOrig && "" !== i.sWidthOrig ? Xt(i.sWidthOrig) : "", i.sWidthOrig && l && $(d[e]).append($("<div/>").css({ width: i.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 })); if (t.aoData.length)
                        for (e = 0; e < c.length; e++) i = s[n = c[e]], $(Vt(t, n)).clone(!1).append(i.sContentPadding).appendTo(w);
                    $("[name]", x).removeAttr("name"); var _ = $("<div/>").css(l || o ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(x).appendTo(f);
                    l && h ? x.width(h) : l ? (x.css("width", "auto"), x.removeAttr("width"), x.width() < f.clientWidth && p && x.width(f.clientWidth)) : o ? x.width(f.clientWidth) : p && x.width(p); var S = 0; for (e = 0; e < c.length; e++) { var C = $(d[e]),
                            k = C.outerWidth() - C.width(),
                            D = m.bBounding ? Math.ceil(d[e].getBoundingClientRect().width) : C.outerWidth();
                        S += D, s[c[e]].sWidth = Xt(D - k) } r.style.width = Xt(S), _.remove() }
            if (p && (r.style.width = Xt(p)), (p || l) && !t._reszEvt) { var T = function() { $(M).on("resize.DT-" + t.sInstance, Ut(function() { U(t) })) };
                v ? setTimeout(T, 1e3) : T(), t._reszEvt = !0 } } var Ut = T.util.throttle;

        function qt(t, e) { if (!t) return 0; var i = $("<div/>").css("width", Xt(t)).appendTo(e || y.body),
                n = i[0].offsetWidth; return i.remove(), n }

        function Vt(t, e) { var i = Gt(t, e); if (i < 0) return null; var n = t.aoData[i]; return n.nTr ? n.anCells[e] : $("<td/>").html(D(t, i, e, "display"))[0] }

        function Gt(t, e) { for (var i, n = -1, r = -1, s = 0, a = t.aoData.length; s < a; s++)(i = (i = (i = D(t, s, e, "display") + "").replace(Wt, "")).replace(/&nbsp;/g, " ")).length > n && (n = i.length, r = s); return r }

        function Xt(t) { return null === t ? "0px" : "number" == typeof t ? t < 0 ? "0px" : t + "px" : t.match(/\d$/) ? t + "px" : t }

        function Zt(t) { var e, i, n, r, s, a, o, l = [],
                h = t.aoColumns,
                u = t.aaSortingFixed,
                c = $.isPlainObject(u),
                d = [],
                p = function(t) { t.length && !$.isArray(t[0]) ? d.push(t) : $.merge(d, t) }; for ($.isArray(u) && p(u), c && u.pre && p(u.pre), p(t.aaSorting), c && u.post && p(u.post), e = 0; e < d.length; e++)
                for (i = 0, n = (r = h[o = d[e][0]].aDataSort).length; i < n; i++) a = h[s = r[i]].sType || "string", d[e]._idx === W && (d[e]._idx = $.inArray(d[e][1], h[s].asSorting)), l.push({ src: o, col: s, dir: d[e][1], index: d[e]._idx, type: a, formatter: T.ext.type.order[a + "-pre"] }); return l }

        function Qt(t) { var e, i, n, r, u, c = [],
                d = T.ext.type.order,
                p = t.aoData,
                s = (t.aoColumns, 0),
                a = t.aiDisplayMaster; for (k(t), e = 0, i = (u = Zt(t)).length; e < i; e++)(r = u[e]).formatter && s++, ie(t, r.col); if ("ssp" != fe(t) && 0 !== u.length) { for (e = 0, n = a.length; e < n; e++) c[a[e]] = e;
                s === u.length ? a.sort(function(t, e) { var i, n, r, s, a, o = u.length,
                        l = p[t]._aSortData,
                        h = p[e]._aSortData; for (r = 0; r < o; r++)
                        if (0 != (s = (i = l[(a = u[r]).col]) < (n = h[a.col]) ? -1 : n < i ? 1 : 0)) return "asc" === a.dir ? s : -s; return (i = c[t]) < (n = c[e]) ? -1 : n < i ? 1 : 0 }) : a.sort(function(t, e) { var i, n, r, s, a, o = u.length,
                        l = p[t]._aSortData,
                        h = p[e]._aSortData; for (r = 0; r < o; r++)
                        if (i = l[(a = u[r]).col], n = h[a.col], 0 !== (s = (d[a.type + "-" + a.dir] || d["string-" + a.dir])(i, n))) return s; return (i = c[t]) < (n = c[e]) ? -1 : n < i ? 1 : 0 }) } t.bSorted = !0 }

        function Jt(t) { for (var e, i = t.aoColumns, n = Zt(t), r = t.oLanguage.oAria, s = 0, a = i.length; s < a; s++) { var o = i[s],
                    l = o.asSorting,
                    h = o.sTitle.replace(/<.*?>/g, ""),
                    u = o.nTh;
                u.removeAttribute("aria-sort"), e = o.bSortable ? h + ("asc" === (0 < n.length && n[0].col == s ? (u.setAttribute("aria-sort", "asc" == n[0].dir ? "ascending" : "descending"), l[n[0].index + 1] || l[0]) : l[0]) ? r.sSortAscending : r.sSortDescending) : h, u.setAttribute("aria-label", e) } }

        function Kt(t, e, i, n) { var r, s = t.aoColumns[e],
                a = t.aaSorting,
                o = s.asSorting,
                l = function(t, e) { var i = t._idx; return i === W && (i = $.inArray(t[1], o)), i + 1 < o.length ? i + 1 : e ? null : 0 }; if ("number" == typeof a[0] && (a = t.aaSorting = [a]), i && t.oFeatures.bSortMulti) { var h = $.inArray(e, Y(a, "0")); - 1 !== h ? (null === (r = l(a[h], !0)) && 1 === a.length && (r = 0), null === r ? a.splice(h, 1) : (a[h][1] = o[r], a[h]._idx = r)) : (a.push([e, o[0], 0]), a[a.length - 1]._idx = 0) } else a.length && a[0][0] == e ? (r = l(a[0]), a.length = 1, a[0][1] = o[r], a[0]._idx = r) : (a.length = 0, a.push([e, o[0]]), a[0]._idx = 0);
            lt(t), "function" == typeof n && n(t) }

        function te(e, t, i, n) { var r = e.aoColumns[i];
            he(t, {}, function(t) {!1 !== r.bSortable && (e.oFeatures.bProcessing ? (Ht(e, !0), setTimeout(function() { Kt(e, i, t.shiftKey, n), "ssp" !== fe(e) && Ht(e, !1) }, 0)) : Kt(e, i, t.shiftKey, n)) }) }

        function ee(t) { var e, i, n, r = t.aLastSort,
                s = t.oClasses.sSortColumn,
                a = Zt(t),
                o = t.oFeatures; if (o.bSort && o.bSortClasses) { for (e = 0, i = r.length; e < i; e++) n = r[e].src, $(Y(t.aoData, "anCells", n)).removeClass(s + (e < 2 ? e + 1 : 3)); for (e = 0, i = a.length; e < i; e++) n = a[e].src, $(Y(t.aoData, "anCells", n)).addClass(s + (e < 2 ? e + 1 : 3)) } t.aLastSort = a }

        function ie(t, e) { var i, n, r, s = t.aoColumns[e],
                a = T.ext.order[s.sSortDataType];
            a && (i = a.call(t.oInstance, t, e, C(t, e))); for (var o = T.ext.type.order[s.sType + "-pre"], l = 0, h = t.aoData.length; l < h; l++)(n = t.aoData[l])._aSortData || (n._aSortData = []), n._aSortData[e] && !a || (r = a ? i[l] : D(t, l, e, "sort"), n._aSortData[e] = o ? o(r) : r) }

        function ne(i) { if (i.oFeatures.bStateSave && !i.bDestroying) { var t = { time: +new Date, start: i._iDisplayStart, length: i._iDisplayLength, order: $.extend(!0, [], i.aaSorting), search: Tt(i.oPreviousSearch), columns: $.map(i.aoColumns, function(t, e) { return { visible: t.bVisible, search: Tt(i.aoPreSearchCols[e]) } }) };
                ce(i, "aoStateSaveParams", "stateSaveParams", [i, t]), i.oSavedState = t, i.fnStateSaveCallback.call(i.oInstance, i, t) } }

        function re(r, t, s) { var a, o, l = r.aoColumns,
                e = function(t) { if (t && t.time) { var e = ce(r, "aoStateLoadParams", "stateLoadParams", [r, t]); if (-1 === $.inArray(!1, e)) { var i = r.iStateDuration; if (0 < i && t.time < +new Date - 1e3 * i) s();
                            else if (t.columns && l.length !== t.columns.length) s();
                            else { if (r.oLoadedState = $.extend(!0, {}, t), t.start !== W && (r._iDisplayStart = t.start, r.iInitDisplayStart = t.start), t.length !== W && (r._iDisplayLength = t.length), t.order !== W && (r.aaSorting = [], $.each(t.order, function(t, e) { r.aaSorting.push(e[0] >= l.length ? [0, e[1]] : e) })), t.search !== W && $.extend(r.oPreviousSearch, Mt(t.search)), t.columns)
                                    for (a = 0, o = t.columns.length; a < o; a++) { var n = t.columns[a];
                                        n.visible !== W && (l[a].bVisible = n.visible), n.search !== W && $.extend(r.aoPreSearchCols[a], Mt(n.search)) } ce(r, "aoStateLoaded", "stateLoaded", [r, t]), s() } } else s() } else s() }; if (r.oFeatures.bStateSave) { var i = r.fnStateLoadCallback.call(r.oInstance, r, e);
                i !== W && e(i) } else s() }

        function se(t) { var e = T.settings,
                i = $.inArray(t, Y(e, "nTable")); return -1 !== i ? e[i] : null }

        function ae(t, e, i, n) { if (i = "DataTables warning: " + (t ? "table id=" + t.sTableId + " - " : "") + i, n && (i += ". For more information about this error, please see http://datatables.net/tn/" + n), e) M.console && console.log && console.log(i);
            else { var r = T.ext,
                    s = r.sErrMode || r.errMode; if (t && ce(t, null, "error", [t, n, i]), "alert" == s) alert(i);
                else { if ("throw" == s) throw new Error(i); "function" == typeof s && s(t, n, i) } } }

        function oe(i, n, t, e) { $.isArray(t) ? $.each(t, function(t, e) { $.isArray(e) ? oe(i, n, e[0], e[1]) : oe(i, n, e) }) : (e === W && (e = t), n[t] !== W && (i[e] = n[t])) }

        function le(t, e, i) { var n; for (var r in e) e.hasOwnProperty(r) && (n = e[r], $.isPlainObject(n) ? ($.isPlainObject(t[r]) || (t[r] = {}), $.extend(!0, t[r], n)) : i && "data" !== r && "aaData" !== r && $.isArray(n) ? t[r] = n.slice() : t[r] = n); return t }

        function he(e, t, i) { $(e).on("click.DT", t, function(t) { $(e).blur(), i(t) }).on("keypress.DT", t, function(t) { 13 === t.which && (t.preventDefault(), i(t)) }).on("selectstart.DT", function() { return !1 }) }

        function ue(t, e, i, n) { i && t[e].push({ fn: i, sName: n }) }

        function ce(i, t, e, n) { var r = []; if (t && (r = $.map(i[t].slice().reverse(), function(t, e) { return t.fn.apply(i.oInstance, n) })), null !== e) { var s = $.Event(e + ".dt");
                $(i.nTable).trigger(s, n), r.push(s.result) } return r }

        function de(t) { var e = t._iDisplayStart,
                i = t.fnDisplayEnd(),
                n = t._iDisplayLength;
            i <= e && (e = i - n), e -= e % n, (-1 === n || e < 0) && (e = 0), t._iDisplayStart = e }

        function pe(t, e) { var i = t.renderer,
                n = T.ext.renderer[e]; return $.isPlainObject(i) && i[e] ? n[i[e]] || n._ : "string" == typeof i && n[i] || n._ }

        function fe(t) { return t.oFeatures.bServerSide ? "ssp" : t.ajax || t.sAjaxSource ? "ajax" : "dom" } var ge = [],
            me = Array.prototype;
        b = function(t, e) { if (!(this instanceof b)) return new b(t, e); var o = [],
                i = function(t) { var e, i, n, r, s, a = (e = t, r = T.settings, s = $.map(r, function(t, e) { return t.nTable }), e ? e.nTable && e.oApi ? [e] : e.nodeName && "table" === e.nodeName.toLowerCase() ? -1 !== (i = $.inArray(e, s)) ? [r[i]] : null : e && "function" == typeof e.settings ? e.settings().toArray() : ("string" == typeof e ? n = $(e) : e instanceof $ && (n = e), n ? n.map(function(t) { return -1 !== (i = $.inArray(this, s)) ? r[i] : null }).toArray() : void 0) : []);
                    a && (o = o.concat(a)) }; if ($.isArray(t))
                for (var n = 0, r = t.length; n < r; n++) i(t[n]);
            else i(t);
            this.context = m(o), e && $.merge(this, e), this.selector = { rows: null, cols: null, opts: null }, b.extend(this, this, ge) }, T.Api = b, $.extend(b.prototype, { any: function() { return 0 !== this.count() }, concat: me.concat, context: [], count: function() { return this.flatten().length }, each: function(t) { for (var e = 0, i = this.length; e < i; e++) t.call(this, this[e], e, this); return this }, eq: function(t) { var e = this.context; return e.length > t ? new b(e[t], this[t]) : null }, filter: function(t) { var e = []; if (me.filter) e = me.filter.call(this, t, this);
                else
                    for (var i = 0, n = this.length; i < n; i++) t.call(this, this[i], i, this) && e.push(this[i]); return new b(this.context, e) }, flatten: function() { var t = []; return new b(this.context, t.concat.apply(t, this.toArray())) }, join: me.join, indexOf: me.indexOf || function(t, e) { for (var i = e || 0, n = this.length; i < n; i++)
                    if (this[i] === t) return i; return -1 }, iterator: function(t, e, i, n) { var r, s, a, o, l, h, u, c, d = [],
                    p = this.context,
                    f = this.selector; for ("string" == typeof t && (n = i, i = e, e = t, t = !1), s = 0, a = p.length; s < a; s++) { var g = new b(p[s]); if ("table" === e)(r = i.call(g, p[s], s)) !== W && d.push(r);
                    else if ("columns" === e || "rows" === e)(r = i.call(g, p[s], this[s], s)) !== W && d.push(r);
                    else if ("column" === e || "column-rows" === e || "row" === e || "cell" === e)
                        for (u = this[s], "column-rows" === e && (h = we(p[s], f.opts)), o = 0, l = u.length; o < l; o++) c = u[o], (r = "cell" === e ? i.call(g, p[s], c.row, c.column, s, o) : i.call(g, p[s], c, s, o, h)) !== W && d.push(r) } if (d.length || n) { var m = new b(p, t ? d.concat.apply([], d) : d),
                        v = m.selector; return v.rows = f.rows, v.cols = f.cols, v.opts = f.opts, m } return this }, lastIndexOf: me.lastIndexOf || function(t, e) { return this.indexOf.apply(this.toArray.reverse(), arguments) }, length: 0, map: function(t) { var e = []; if (me.map) e = me.map.call(this, t, this);
                else
                    for (var i = 0, n = this.length; i < n; i++) e.push(t.call(this, this[i], i)); return new b(this.context, e) }, pluck: function(e) { return this.map(function(t) { return t[e] }) }, pop: me.pop, push: me.push, reduce: me.reduce || function(t, e) { return S(this, t, e, 0, this.length, 1) }, reduceRight: me.reduceRight || function(t, e) { return S(this, t, e, this.length - 1, -1, -1) }, reverse: me.reverse, selector: null, shift: me.shift, slice: function() { return new b(this.context, this) }, sort: me.sort, splice: me.splice, toArray: function() { return me.slice.call(this) }, to$: function() { return $(this) }, toJQuery: function() { return $(this) }, unique: function() { return new b(this.context, m(this)) }, unshift: me.unshift }), b.extend = function(t, e, i) { if (i.length && e && (e instanceof b || e.__dt_wrapper)) { var n, r, s, a = function(e, i, n) { return function() { var t = i.apply(e, arguments); return b.extend(t, t, n.methodExt), t } }; for (n = 0, r = i.length; n < r; n++) e[(s = i[n]).name] = "function" == typeof s.val ? a(t, s.val, s) : $.isPlainObject(s.val) ? {} : s.val, e[s.name].__dt_wrapper = !0, b.extend(t, e[s.name], s.propExt) } }, b.register = e = function(t, e) { if ($.isArray(t))
                for (var i = 0, n = t.length; i < n; i++) b.register(t[i], e);
            else { var r, s, a, o, l = t.split("."),
                    h = ge,
                    u = function(t, e) { for (var i = 0, n = t.length; i < n; i++)
                            if (t[i].name === e) return t[i]; return null }; for (r = 0, s = l.length; r < s; r++) { var c = u(h, a = (o = -1 !== l[r].indexOf("()")) ? l[r].replace("()", "") : l[r]);
                    c || (c = { name: a, val: {}, methodExt: [], propExt: [] }, h.push(c)), r === s - 1 ? c.val = e : h = o ? c.methodExt : c.propExt } } }, b.registerPlural = t = function(t, e, i) { b.register(t, i), b.register(e, function() { var t = i.apply(this, arguments); return t === this ? this : t instanceof b ? t.length ? $.isArray(t[0]) ? new b(t.context, t[0]) : t[0] : W : t }) }, e("tables()", function(t) { return t ? new b(function(t, i) { if ("number" == typeof t) return [i[t]]; var n = $.map(i, function(t, e) { return t.nTable }); return $(n).filter(t).map(function(t) { var e = $.inArray(this, n); return i[e] }).toArray() }(t, this.context)) : this }), e("table()", function(t) { var e = this.tables(t),
                i = e.context; return i.length ? new b(i[0]) : e }), t("tables().nodes()", "table().node()", function() { return this.iterator("table", function(t) { return t.nTable }, 1) }), t("tables().body()", "table().body()", function() { return this.iterator("table", function(t) { return t.nTBody }, 1) }), t("tables().header()", "table().header()", function() { return this.iterator("table", function(t) { return t.nTHead }, 1) }), t("tables().footer()", "table().footer()", function() { return this.iterator("table", function(t) { return t.nTFoot }, 1) }), t("tables().containers()", "table().container()", function() { return this.iterator("table", function(t) { return t.nTableWrapper }, 1) }), e("draw()", function(e) { return this.iterator("table", function(t) { "page" === e ? ot(t) : ("string" == typeof e && (e = "full-hold" !== e), lt(t, !1 === e)) }) }), e("page()", function(e) { return e === W ? this.page.info().page : this.iterator("table", function(t) { jt(t, e) }) }), e("page.info()", function(t) { if (0 === this.context.length) return W; var e = this.context[0],
                i = e._iDisplayStart,
                n = e.oFeatures.bPaginate ? e._iDisplayLength : -1,
                r = e.fnRecordsDisplay(),
                s = -1 === n; return { page: s ? 0 : Math.floor(i / n), pages: s ? 1 : Math.ceil(r / n), start: i, end: e.fnDisplayEnd(), length: n, recordsTotal: e.fnRecordsTotal(), recordsDisplay: r, serverSide: "ssp" === fe(e) } }), e("page.len()", function(e) { return e === W ? 0 !== this.context.length ? this.context[0]._iDisplayLength : W : this.iterator("table", function(t) { Rt(t, e) }) }); var ve = function(r, s, t) { if (t) { var e = new b(r);
                e.one("draw", function() { t(e.ajax.json()) }) } if ("ssp" == fe(r)) lt(r, s);
            else { Ht(r, !0); var i = r.jqXHR;
                i && 4 !== i.readyState && i.abort(), dt(r, [], function(t) { K(r); for (var e = mt(r, t), i = 0, n = e.length; i < n; i++) H(r, e[i]);
                    lt(r, s), Ht(r, !1) }) } };
        e("ajax.json()", function() { var t = this.context; if (0 < t.length) return t[0].json }), e("ajax.params()", function() { var t = this.context; if (0 < t.length) return t[0].oAjaxData }), e("ajax.reload()", function(e, i) { return this.iterator("table", function(t) { ve(t, !1 === i, e) }) }), e("ajax.url()", function(e) { var t = this.context; return e === W ? 0 === t.length ? W : (t = t[0]).ajax ? $.isPlainObject(t.ajax) ? t.ajax.url : t.ajax : t.sAjaxSource : this.iterator("table", function(t) { $.isPlainObject(t.ajax) ? t.ajax.url = e : t.ajax = e }) }), e("ajax.url().load()", function(e, i) { return this.iterator("table", function(t) { ve(t, !1 === i, e) }) }); var ye = function(t, e, i, n, r) { var s, a, o, l, h, u, c = [],
                    d = typeof e; for (e && "string" !== d && "function" !== d && e.length !== W || (e = [e]), o = 0, l = e.length; o < l; o++)
                    for (h = 0, u = (a = e[o] && e[o].split && !e[o].match(/[\[\(:]/) ? e[o].split(",") : [e[o]]).length; h < u; h++)(s = i("string" == typeof a[h] ? $.trim(a[h]) : a[h])) && s.length && (c = c.concat(s)); var p = f.selector[t]; if (p.length)
                    for (o = 0, l = p.length; o < l; o++) c = p[o](n, r, c); return m(c) },
            be = function(t) { return t || (t = {}), t.filter && t.search === W && (t.search = t.filter), $.extend({ search: "none", order: "current", page: "all" }, t) },
            xe = function(t) { for (var e = 0, i = t.length; e < i; e++)
                    if (0 < t[e].length) return t[0] = t[e], t[0].length = 1, t.length = 1, t.context = [t.context[e]], t; return t.length = 0, t },
            we = function(t, e) { var i, n = [],
                    r = t.aiDisplay,
                    s = t.aiDisplayMaster,
                    a = e.search,
                    o = e.order,
                    l = e.page; if ("ssp" == fe(t)) return "removed" === a ? [] : g(0, s.length); if ("current" == l)
                    for (u = t._iDisplayStart, c = t.fnDisplayEnd(); u < c; u++) n.push(r[u]);
                else if ("current" == o || "applied" == o) { if ("none" == a) n = s.slice();
                    else if ("applied" == a) n = r.slice();
                    else if ("removed" == a) { for (var h = {}, u = 0, c = r.length; u < c; u++) h[r[u]] = null;
                        n = $.map(s, function(t) { return h.hasOwnProperty(t) ? null : t }) } } else if ("index" == o || "original" == o)
                    for (u = 0, c = t.aoData.length; u < c; u++) "none" == a ? n.push(u) : (-1 === (i = $.inArray(u, r)) && "removed" == a || 0 <= i && "applied" == a) && n.push(u); return n };
        e("rows()", function(e, i) { e === W ? e = "" : $.isPlainObject(e) && (i = e, e = ""), i = be(i); var t = this.iterator("table", function(t) { return ye("row", e, function(i) { var t = p(i),
                        n = l.aoData; if (null !== t && !h) return [t]; if (u || (u = we(l, h)), null !== t && -1 !== $.inArray(t, u)) return [t]; if (null === i || i === W || "" === i) return u; if ("function" == typeof i) return $.map(u, function(t) { var e = n[t]; return i(t, e._aData, e.nTr) ? t : null }); if (i.nodeName) { var e = i._DT_RowIndex,
                            r = i._DT_CellIndex; if (e !== W) return n[e] && n[e].nTr === i ? [e] : []; if (r) return n[r.row] && n[r.row].nTr === i ? [r.row] : []; var s = $(i).closest("*[data-dt-row]"); return s.length ? [s.data("dt-row")] : [] } if ("string" == typeof i && "#" === i.charAt(0)) { var a = l.aIds[i.replace(/^#/, "")]; if (a !== W) return [a.idx] } var o = w(x(l.aoData, u, "nTr")); return $(o).filter(i).map(function() { return this._DT_RowIndex }).toArray() }, l = t, h = i); var l, h, u }, 1); return t.selector.rows = e, t.selector.opts = i, t }), e("rows().nodes()", function() { return this.iterator("row", function(t, e) { return t.aoData[e].nTr || W }, 1) }), e("rows().data()", function() { return this.iterator(!0, "rows", function(t, e) { return x(t.aoData, e, "_aData") }, 1) }), t("rows().cache()", "row().cache()", function(n) { return this.iterator("row", function(t, e) { var i = t.aoData[e]; return "search" === n ? i._aFilterData : i._aSortData }, 1) }), t("rows().invalidate()", "row().invalidate()", function(i) { return this.iterator("row", function(t, e) { et(t, e, i) }) }), t("rows().indexes()", "row().index()", function() { return this.iterator("row", function(t, e) { return e }, 1) }), t("rows().ids()", "row().id()", function(t) { for (var e = [], i = this.context, n = 0, r = i.length; n < r; n++)
                for (var s = 0, a = this[n].length; s < a; s++) { var o = i[n].rowIdFn(i[n].aoData[this[n][s]]._aData);
                    e.push((!0 === t ? "#" : "") + o) }
            return new b(i, e) }), t("rows().remove()", "row().remove()", function() { var d = this; return this.iterator("row", function(t, e, i) { var n, r, s, a, o, l, h = t.aoData,
                    u = h[e]; for (h.splice(e, 1), n = 0, r = h.length; n < r; n++)
                    if (l = (o = h[n]).anCells, null !== o.nTr && (o.nTr._DT_RowIndex = n), null !== l)
                        for (s = 0, a = l.length; s < a; s++) l[s]._DT_CellIndex.row = n;
                tt(t.aiDisplayMaster, e), tt(t.aiDisplay, e), tt(d[i], e, !1), 0 < t._iRecordsDisplay && t._iRecordsDisplay--, de(t); var c = t.rowIdFn(u._aData);
                c !== W && delete t.aIds[c] }), this.iterator("table", function(t) { for (var e = 0, i = t.aoData.length; e < i; e++) t.aoData[e].idx = e }), this }), e("rows.add()", function(s) { var t = this.iterator("table", function(t) { var e, i, n, r = []; for (i = 0, n = s.length; i < n; i++)(e = s[i]).nodeName && "TR" === e.nodeName.toUpperCase() ? r.push(z(t, e)[0]) : r.push(H(t, e)); return r }, 1),
                e = this.rows(-1); return e.pop(), $.merge(e, t), e }), e("row()", function(t, e) { return xe(this.rows(t, e)) }), e("row().data()", function(t) { var e = this.context; if (t === W) return e.length && this.length ? e[0].aoData[this[0]]._aData : W; var i = e[0].aoData[this[0]]; return i._aData = t, $.isArray(t) && i.nTr.id && Q(e[0].rowId)(t, i.nTr.id), et(e[0], this[0], "data"), this }), e("row().node()", function() { var t = this.context; return t.length && this.length && t[0].aoData[this[0]].nTr || null }), e("row.add()", function(e) { e instanceof $ && e.length && (e = e[0]); var t = this.iterator("table", function(t) { return e.nodeName && "TR" === e.nodeName.toUpperCase() ? z(t, e)[0] : H(t, e) }); return this.row(t[0]) }); var _e = function(t, e) { var i = t.context; if (i.length) { var n = i[0].aoData[e !== W ? e : t[0]];
                    n && n._details && (n._details.remove(), n._detailsShow = W, n._details = W) } },
            Se = function(t, e) { var i = t.context; if (i.length && t.length) { var n = i[0].aoData[t[0]];
                    n._details && ((n._detailsShow = e) ? n._details.insertAfter(n.nTr) : n._details.detach(), Ce(i[0])) } },
            Ce = function(l) { var r = new b(l),
                    t = ".dt.DT_details",
                    e = "draw" + t,
                    i = "column-visibility" + t,
                    n = "destroy" + t,
                    h = l.aoData;
                r.off(e + " " + i + " " + n), 0 < Y(h, "_details").length && (r.on(e, function(t, e) { l === e && r.rows({ page: "current" }).eq(0).each(function(t) { var e = h[t];
                        e._detailsShow && e._details.insertAfter(e.nTr) }) }), r.on(i, function(t, e, i, n) { if (l === e)
                        for (var r, s = F(e), a = 0, o = h.length; a < o; a++)(r = h[a])._details && r._details.children("td[colspan]").attr("colspan", s) }), r.on(n, function(t, e) { if (l === e)
                        for (var i = 0, n = h.length; i < n; i++) h[i]._details && _e(r, i) })) },
            ke = "row().child",
            De = ke + "()";
        e(De, function(t, e) { var s, i, a, o, n = this.context; return t === W ? n.length && this.length ? n[0].aoData[this[0]]._details : W : (!0 === t ? this.child.show() : !1 === t ? _e(this) : n.length && this.length && (s = n[0], i = n[0].aoData[this[0]], a = [], (o = function(t, e) { if ($.isArray(t) || t instanceof $)
                    for (var i = 0, n = t.length; i < n; i++) o(t[i], e);
                else if (t.nodeName && "tr" === t.nodeName.toLowerCase()) a.push(t);
                else { var r = $("<tr><td/></tr>").addClass(e);
                    $("td", r).addClass(e).html(t)[0].colSpan = F(s), a.push(r[0]) } })(t, e), i._details && i._details.detach(), i._details = $(a), i._detailsShow && i._details.insertAfter(i.nTr)), this) }), e([ke + ".show()", De + ".show()"], function(t) { return Se(this, !0), this }), e([ke + ".hide()", De + ".hide()"], function() { return Se(this, !1), this }), e([ke + ".remove()", De + ".remove()"], function() { return _e(this), this }), e(ke + ".isShown()", function() { var t = this.context; return t.length && this.length && t[0].aoData[this[0]]._detailsShow || !1 }); var Te = /^([^:]+):(name|visIdx|visible)$/,
            Me = function(t, e, i, n, r) { for (var s = [], a = 0, o = r.length; a < o; a++) s.push(D(t, r[a], e)); return s };
        e("columns()", function(i, n) { i === W ? i = "" : $.isPlainObject(i) && (n = i, i = ""), n = be(n); var t = this.iterator("table", function(t) { return e = i, h = n, u = (l = t).aoColumns, c = Y(u, "sName"), d = Y(u, "nTh"), ye("column", e, function(i) { var t = p(i); if ("" === i) return g(u.length); if (null !== t) return [0 <= t ? t : u.length + t]; if ("function" == typeof i) { var n = we(l, h); return $.map(u, function(t, e) { return i(e, Me(l, e, 0, 0, n), d[e]) ? e : null }) } var r = "string" == typeof i ? i.match(Te) : ""; if (r) switch (r[2]) {
                        case "visIdx":
                        case "visible":
                            var e = parseInt(r[1], 10); if (e < 0) { var s = $.map(u, function(t, e) { return t.bVisible ? e : null }); return [s[s.length + e]] } return [q(l, e)];
                        case "name":
                            return $.map(c, function(t, e) { return t === r[1] ? e : null });
                        default:
                            return [] }
                    if (i.nodeName && i._DT_CellIndex) return [i._DT_CellIndex.column]; var a = $(d).filter(i).map(function() { return $.inArray(this, d) }).toArray(); if (a.length || !i.nodeName) return a; var o = $(i).closest("*[data-dt-column]"); return o.length ? [o.data("dt-column")] : [] }, l, h); var l, e, h, u, c, d }, 1); return t.selector.cols = i, t.selector.opts = n, t }), t("columns().header()", "column().header()", function(t, e) { return this.iterator("column", function(t, e) { return t.aoColumns[e].nTh }, 1) }), t("columns().footer()", "column().footer()", function(t, e) { return this.iterator("column", function(t, e) { return t.aoColumns[e].nTf }, 1) }), t("columns().data()", "column().data()", function() { return this.iterator("column-rows", Me, 1) }), t("columns().dataSrc()", "column().dataSrc()", function() { return this.iterator("column", function(t, e) { return t.aoColumns[e].mData }, 1) }), t("columns().cache()", "column().cache()", function(s) { return this.iterator("column-rows", function(t, e, i, n, r) { return x(t.aoData, r, "search" === s ? "_aFilterData" : "_aSortData", e) }, 1) }), t("columns().nodes()", "column().nodes()", function() { return this.iterator("column-rows", function(t, e, i, n, r) { return x(t.aoData, r, "anCells", e) }, 1) }), t("columns().visible()", "column().visible()", function(i, n) { var t = this.iterator("column", function(t, e) { if (i === W) return t.aoColumns[e].bVisible;! function(t, e, i) { var n, r, s, a, o = t.aoColumns,
                        l = o[e],
                        h = t.aoData; if (i === W) return l.bVisible; if (l.bVisible !== i) { if (i) { var u = $.inArray(!0, Y(o, "bVisible"), e + 1); for (r = 0, s = h.length; r < s; r++) a = h[r].nTr, n = h[r].anCells, a && a.insertBefore(n[e], n[u] || null) } else $(Y(t.aoData, "anCells", e)).detach();
                        l.bVisible = i, at(t, t.aoHeader), at(t, t.aoFooter), t.aiDisplay.length || $(t.nTBody).find("td[colspan]").attr("colspan", F(t)), ne(t) } }(t, e, i) }); return i !== W && (this.iterator("column", function(t, e) { ce(t, null, "column-visibility", [t, e, i, n]) }), (n === W || n) && this.columns.adjust()), t }), t("columns().indexes()", "column().index()", function(i) { return this.iterator("column", function(t, e) { return "visible" === i ? C(t, e) : e }, 1) }), e("columns.adjust()", function() { return this.iterator("table", function(t) { U(t) }, 1) }), e("column.index()", function(t, e) { if (0 !== this.context.length) { var i = this.context[0]; if ("fromVisible" === t || "toData" === t) return q(i, e); if ("fromData" === t || "toVisible" === t) return C(i, e) } }), e("column()", function(t, e) { return xe(this.columns(t, e)) }), e("cells()", function(m, t, v) { if ($.isPlainObject(m) && (m.row === W ? (v = m, m = null) : (v = t, t = null)), $.isPlainObject(t) && (v = t, t = null), null === t || t === W) return this.iterator("table", function(t) { return n = t, e = m, i = be(v), c = n.aoData, d = we(n, i), p = w(x(c, d, "anCells")), f = $([].concat.apply([], p)), g = n.aoColumns.length, ye("cell", e, function(t) { var e = "function" == typeof t; if (null === t || t === W || e) { for (s = [], a = 0, o = d.length; a < o; a++)
                            for (r = d[a], l = 0; l < g; l++) h = { row: r, column: l }, e ? (u = c[r], t(h, D(n, r, l), u.anCells ? u.anCells[l] : null) && s.push(h)) : s.push(h); return s } if ($.isPlainObject(t)) return t.column !== W && t.row !== W && -1 !== $.inArray(t.row, d) ? [t] : []; var i = f.filter(t).map(function(t, e) { return { row: e._DT_CellIndex.row, column: e._DT_CellIndex.column } }).toArray(); return i.length || !t.nodeName ? i : (u = $(t).closest("*[data-dt-row]")).length ? [{ row: u.data("dt-row"), column: u.data("dt-column") }] : [] }, n, i); var n, e, i, r, s, a, o, l, h, u, c, d, p, f, g }); var i, n, r, s, a, o = this.columns(t),
                l = this.rows(m);
            this.iterator("table", function(t, e) { for (i = [], n = 0, r = l[e].length; n < r; n++)
                    for (s = 0, a = o[e].length; s < a; s++) i.push({ row: l[e][n], column: o[e][s] }) }, 1); var e = this.cells(i, v); return $.extend(e.selector, { cols: t, rows: m, opts: v }), e }), t("cells().nodes()", "cell().node()", function() { return this.iterator("cell", function(t, e, i) { var n = t.aoData[e]; return n && n.anCells ? n.anCells[i] : W }, 1) }), e("cells().data()", function() { return this.iterator("cell", function(t, e, i) { return D(t, e, i) }, 1) }), t("cells().cache()", "cell().cache()", function(n) { return n = "search" === n ? "_aFilterData" : "_aSortData", this.iterator("cell", function(t, e, i) { return t.aoData[e][n][i] }, 1) }), t("cells().render()", "cell().render()", function(n) { return this.iterator("cell", function(t, e, i) { return D(t, e, i, n) }, 1) }), t("cells().indexes()", "cell().index()", function() { return this.iterator("cell", function(t, e, i) { return { row: e, column: i, columnVisible: C(t, i) } }, 1) }), t("cells().invalidate()", "cell().invalidate()", function(n) { return this.iterator("cell", function(t, e, i) { et(t, e, n, i) }) }), e("cell()", function(t, e, i) { return xe(this.cells(t, e, i)) }), e("cell().data()", function(t) { var e = this.context,
                i = this[0]; return t === W ? e.length && i.length ? D(e[0], i[0].row, i[0].column) : W : (B(e[0], i[0].row, i[0].column, t), et(e[0], i[0].row, "data", i[0].column), this) }), e("order()", function(e, t) { var i = this.context; return e === W ? 0 !== i.length ? i[0].aaSorting : W : ("number" == typeof e ? e = [
                [e, t]
            ] : e.length && !$.isArray(e[0]) && (e = Array.prototype.slice.call(arguments)), this.iterator("table", function(t) { t.aaSorting = e.slice() })) }), e("order.listener()", function(e, i, n) { return this.iterator("table", function(t) { te(t, e, i, n) }) }), e("order.fixed()", function(e) { if (e) return this.iterator("table", function(t) { t.aaSortingFixed = $.extend(!0, {}, e) }); var t = this.context,
                i = t.length ? t[0].aaSortingFixed : W; return $.isArray(i) ? { pre: i } : i }), e(["columns().order()", "column().order()"], function(n) { var r = this; return this.iterator("table", function(t, e) { var i = [];
                $.each(r[e], function(t, e) { i.push([e, n]) }), t.aaSorting = i }) }), e("search()", function(e, i, n, r) { var t = this.context; return e === W ? 0 !== t.length ? t[0].oPreviousSearch.sSearch : W : this.iterator("table", function(t) { t.oFeatures.bFilter && yt(t, $.extend({}, t.oPreviousSearch, { sSearch: e + "", bRegex: null !== i && i, bSmart: null === n || n, bCaseInsensitive: null === r || r }), 1) }) }), t("columns().search()", "column().search()", function(n, r, s, a) { return this.iterator("column", function(t, e) { var i = t.aoPreSearchCols; if (n === W) return i[e].sSearch;
                t.oFeatures.bFilter && ($.extend(i[e], { sSearch: n + "", bRegex: null !== r && r, bSmart: null === s || s, bCaseInsensitive: null === a || a }), yt(t, t.oPreviousSearch, 1)) }) }), e("state()", function() { return this.context.length ? this.context[0].oSavedState : null }), e("state.clear()", function() { return this.iterator("table", function(t) { t.fnStateSaveCallback.call(t.oInstance, t, {}) }) }), e("state.loaded()", function() { return this.context.length ? this.context[0].oLoadedState : null }), e("state.save()", function() { return this.iterator("table", function(t) { ne(t) }) }), T.versionCheck = T.fnVersionCheck = function(t) { for (var e, i, n = T.version.split("."), r = t.split("."), s = 0, a = r.length; s < a; s++)
                if ((e = parseInt(n[s], 10) || 0) !== (i = parseInt(r[s], 10) || 0)) return i < e; return !0 }, T.isDataTable = T.fnIsDataTable = function(t) { var r = $(t).get(0),
                s = !1; return t instanceof T.Api || ($.each(T.settings, function(t, e) { var i = e.nScrollHead ? $("table", e.nScrollHead)[0] : null,
                    n = e.nScrollFoot ? $("table", e.nScrollFoot)[0] : null;
                e.nTable !== r && i !== r && n !== r || (s = !0) }), s) }, T.tables = T.fnTables = function(e) { var t = !1;
            $.isPlainObject(e) && (t = e.api, e = e.visible); var i = $.map(T.settings, function(t) { if (!e || e && $(t.nTable).is(":visible")) return t.nTable }); return t ? new b(i) : i }, T.camelToHungarian = A, e("$()", function(t, e) { var i = this.rows(e).nodes(),
                n = $(i); return $([].concat(n.filter(t).toArray(), n.find(t).toArray())) }), $.each(["on", "one", "off"], function(t, i) { e(i + "()", function() { var t = Array.prototype.slice.call(arguments);
                t[0] = $.map(t[0].split(/\s/), function(t) { return t.match(/\.dt\b/) ? t : t + ".dt" }).join(" "); var e = $(this.tables().nodes()); return e[i].apply(e, t), this }) }), e("clear()", function() { return this.iterator("table", function(t) { K(t) }) }), e("settings()", function() { return new b(this.context, this.context) }), e("init()", function() { var t = this.context; return t.length ? t[0].oInit : null }), e("data()", function() { return this.iterator("table", function(t) { return Y(t.aoData, "_aData") }).flatten() }), e("destroy()", function(f) { return f = f || !1, this.iterator("table", function(e) { var i, t = e.nTableWrapper.parentNode,
                    n = e.oClasses,
                    r = e.nTable,
                    s = e.nTBody,
                    a = e.nTHead,
                    o = e.nTFoot,
                    l = $(r),
                    h = $(s),
                    u = $(e.nTableWrapper),
                    c = $.map(e.aoData, function(t) { return t.nTr });
                e.bDestroying = !0, ce(e, "aoDestroyCallback", "destroy", [e]), f || new b(e).columns().visible(!0), u.off(".DT").find(":not(tbody *)").off(".DT"), $(M).off(".DT-" + e.sInstance), r != a.parentNode && (l.children("thead").detach(), l.append(a)), o && r != o.parentNode && (l.children("tfoot").detach(), l.append(o)), e.aaSorting = [], e.aaSortingFixed = [], ee(e), $(c).removeClass(e.asStripeClasses.join(" ")), $("th, td", a).removeClass(n.sSortable + " " + n.sSortableAsc + " " + n.sSortableDesc + " " + n.sSortableNone), h.children().detach(), h.append(c); var d = f ? "remove" : "detach";
                l[d](), u[d](), !f && t && (t.insertBefore(r, e.nTableReinsertBefore), l.css("width", e.sDestroyWidth).removeClass(n.sTable), (i = e.asDestroyStripes.length) && h.children().each(function(t) { $(this).addClass(e.asDestroyStripes[t % i]) })); var p = $.inArray(e, T.settings); - 1 !== p && T.settings.splice(p, 1) }) }), $.each(["column", "row", "cell"], function(t, l) { e(l + "s().every()", function(s) { var a = this.selector.opts,
                    o = this; return this.iterator(l, function(t, e, i, n, r) { s.call(o[l](e, "cell" === l ? i : a, "cell" === l ? a : W), e, i, n, r) }) }) }), e("i18n()", function(t, e, i) { var n = this.context[0],
                r = Z(t)(n.oLanguage); return r === W && (r = e), i !== W && $.isPlainObject(r) && (r = r[i] !== W ? r[i] : r._), r.replace("%d", i) }), T.version = "1.10.19", T.settings = [], T.models = {}, T.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 }, T.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1 }, T.models.oColumn = { idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: !1, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, nTh: null, nTf: null, sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null }, T.defaults = { aaData: null, aaSorting: [
                [0, "asc"]
            ], aaSortingFixed: [], ajax: null, aLengthMenu: [10, 25, 50, 100], aoColumns: null, aoColumnDefs: null, aoSearchCols: [], asStripeClasses: null, bAutoWidth: !0, bDeferRender: !1, bDestroy: !1, bFilter: !0, bInfo: !0, bLengthChange: !0, bPaginate: !0, bProcessing: !1, bRetrieve: !1, bScrollCollapse: !1, bServerSide: !1, bSort: !0, bSortMulti: !0, bSortCellsTop: !1, bSortClasses: !0, bStateSave: !1, fnCreatedRow: null, fnDrawCallback: null, fnFooterCallback: null, fnFormatNumber: function(t) { return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands) }, fnHeaderCallback: null, fnInfoCallback: null, fnInitComplete: null, fnPreDrawCallback: null, fnRowCallback: null, fnServerData: null, fnServerParams: null, fnStateLoadCallback: function(t) { try { return JSON.parse((-1 === t.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t.sInstance + "_" + location.pathname)) } catch (t) {} }, fnStateLoadParams: null, fnStateLoaded: null, fnStateSaveCallback: function(t, e) { try {
                    (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t.sInstance + "_" + location.pathname, JSON.stringify(e)) } catch (t) {} }, fnStateSaveParams: null, iStateDuration: 7200, iDeferLoading: null, iDisplayLength: 10, iDisplayStart: 0, iTabIndex: 0, oClasses: {}, oLanguage: { oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" }, oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" }, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries", sInfoEmpty: "Showing 0 to 0 of 0 entries", sInfoFiltered: "(filtered from _MAX_ total entries)", sInfoPostFix: "", sDecimal: "", sThousands: ",", sLengthMenu: "Show _MENU_ entries", sLoadingRecords: "Loading...", sProcessing: "Processing...", sSearch: "Search:", sSearchPlaceholder: "", sUrl: "", sZeroRecords: "No matching records found" }, oSearch: $.extend({}, T.models.oSearch), sAjaxDataProp: "data", sAjaxSource: null, sDom: "lfrtip", searchDelay: null, sPaginationType: "simple_numbers", sScrollX: "", sScrollXInner: "", sScrollY: "", sServerMethod: "GET", renderer: null, rowId: "DT_RowId" }, v(T.defaults), T.defaults.column = { aDataSort: null, iDataSort: -1, asSorting: ["asc", "desc"], bSearchable: !0, bSortable: !0, bVisible: !0, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null }, v(T.defaults.column), T.models.oSettings = { oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null }, oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null }, oLanguage: { fnInfoCallback: null }, oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 }, ajax: null, aanFeatures: [], aoData: [], aiDisplay: [], aiDisplayMaster: [], aIds: {}, aoColumns: [], aoHeader: [], aoFooter: [], oPreviousSearch: {}, aoPreSearchCols: [], aaSorting: null, aaSortingFixed: [], asStripeClasses: null, asDestroyStripes: [], sDestroyWidth: 0, aoRowCallback: [], aoHeaderCallback: [], aoFooterCallback: [], aoDrawCallback: [], aoRowCreatedCallback: [], aoPreDrawCallback: [], aoInitComplete: [], aoStateSaveParams: [], aoStateLoadParams: [], aoStateLoaded: [], sTableId: "", nTable: null, nTHead: null, nTFoot: null, nTBody: null, nTableWrapper: null, bDeferLoading: !1, bInitialised: !1, aoOpenRows: [], sDom: null, searchDelay: null, sPaginationType: "two_button", iStateDuration: 0, aoStateSave: [], aoStateLoad: [], oSavedState: null, oLoadedState: null, sAjaxSource: null, sAjaxDataProp: null, bAjaxDataGet: !0, jqXHR: null, json: W, oAjaxData: W, fnServerData: null, aoServerParams: [], sServerMethod: null, fnFormatNumber: null, aLengthMenu: null, iDraw: 0, bDrawing: !1, iDrawError: -1, _iDisplayLength: 10, _iDisplayStart: 0, _iRecordsTotal: 0, _iRecordsDisplay: 0, oClasses: {}, bFiltered: !1, bSorted: !1, bSortCellsTop: null, oInit: null, aoDestroyCallback: [], fnRecordsTotal: function() { return "ssp" == fe(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length }, fnRecordsDisplay: function() { return "ssp" == fe(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length }, fnDisplayEnd: function() { var t = this._iDisplayLength,
                    e = this._iDisplayStart,
                    i = e + t,
                    n = this.aiDisplay.length,
                    r = this.oFeatures,
                    s = r.bPaginate; return r.bServerSide ? !1 === s || -1 === t ? e + n : Math.min(e + t, this._iRecordsDisplay) : !s || n < i || -1 === t ? n : i }, oInstance: null, sInstance: null, iTabIndex: 0, nScrollHead: null, nScrollFoot: null, aLastSort: [], oPlugins: {}, rowIdFn: null, rowId: null }, T.ext = f = { buttons: {}, classes: {}, builder: "-source-", errMode: "alert", feature: [], search: [], selector: { cell: [], column: [], row: [] }, internal: {}, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: { detect: [], search: {}, order: {} }, _unique: 0, fnVersionCheck: T.fnVersionCheck, iApiIndex: 0, oJUIClasses: {}, sVersion: T.version }, $.extend(f, { afnFiltering: f.search, aTypes: f.type.detect, ofnSearch: f.type.search, oSort: f.type.order, afnSortData: f.order, aoFeatures: f.feature, oApi: f.internal, oStdClasses: f.classes, oPagination: f.pager }), $.extend(T.ext.classes, { sTable: "dataTable", sNoFooter: "no-footer", sPageButton: "paginate_button", sPageButtonActive: "current", sPageButtonDisabled: "disabled", sStripeOdd: "odd", sStripeEven: "even", sRowEmpty: "dataTables_empty", sWrapper: "dataTables_wrapper", sFilter: "dataTables_filter", sInfo: "dataTables_info", sPaging: "dataTables_paginate paging_", sLength: "dataTables_length", sProcessing: "dataTables_processing", sSortAsc: "sorting_asc", sSortDesc: "sorting_desc", sSortable: "sorting", sSortableAsc: "sorting_asc_disabled", sSortableDesc: "sorting_desc_disabled", sSortableNone: "sorting_disabled", sSortColumn: "sorting_", sFilterInput: "", sLengthSelect: "", sScrollWrapper: "dataTables_scroll", sScrollHead: "dataTables_scrollHead", sScrollHeadInner: "dataTables_scrollHeadInner", sScrollBody: "dataTables_scrollBody", sScrollFoot: "dataTables_scrollFoot", sScrollFootInner: "dataTables_scrollFootInner", sHeaderTH: "", sFooterTH: "", sSortJUIAsc: "", sSortJUIDesc: "", sSortJUI: "", sSortJUIAscAllowed: "", sSortJUIDescAllowed: "", sSortJUIWrapper: "", sSortIcon: "", sJUIHeader: "", sJUIFooter: "" }); var Ae = T.ext.pager;

        function Ee(t, e) { var i = [],
                n = Ae.numbers_length,
                r = Math.floor(n / 2); return e <= n ? i = g(0, e) : t <= r ? ((i = g(0, n - 2)).push("ellipsis"), i.push(e - 1)) : (e - 1 - r <= t ? (i = g(e - (n - 2), e)).splice(0, 0, "ellipsis") : ((i = g(t - r + 2, t + r - 1)).push("ellipsis"), i.push(e - 1), i.splice(0, 0, "ellipsis")), i.splice(0, 0, 0)), i.DT_el = "span", i } $.extend(Ae, { simple: function(t, e) { return ["previous", "next"] }, full: function(t, e) { return ["first", "previous", "next", "last"] }, numbers: function(t, e) { return [Ee(t, e)] }, simple_numbers: function(t, e) { return ["previous", Ee(t, e), "next"] }, full_numbers: function(t, e) { return ["first", "previous", Ee(t, e), "next", "last"] }, first_last_numbers: function(t, e) { return ["first", Ee(t, e), "last"] }, _numbers: Ee, numbers_length: 7 }), $.extend(!0, T.ext.renderer, { pageButton: { _: function(o, t, l, e, h, u) { var c, d, i, p = o.oClasses,
                        f = o.oLanguage.oPaginate,
                        g = o.oLanguage.oAria.paginate || {},
                        m = 0,
                        v = function(t, e) { var i, n, r, s = function(t) { jt(o, t.data.action, !0) }; for (i = 0, n = e.length; i < n; i++)
                                if (r = e[i], $.isArray(r)) { var a = $("<" + (r.DT_el || "div") + "/>").appendTo(t);
                                    v(a, r) } else { switch (c = null, d = "", r) {
                                        case "ellipsis":
                                            t.append('<span class="ellipsis">&#x2026;</span>'); break;
                                        case "first":
                                            c = f.sFirst, d = r + (0 < h ? "" : " " + p.sPageButtonDisabled); break;
                                        case "previous":
                                            c = f.sPrevious, d = r + (0 < h ? "" : " " + p.sPageButtonDisabled); break;
                                        case "next":
                                            c = f.sNext, d = r + (h < u - 1 ? "" : " " + p.sPageButtonDisabled); break;
                                        case "last":
                                            c = f.sLast, d = r + (h < u - 1 ? "" : " " + p.sPageButtonDisabled); break;
                                        default:
                                            c = r + 1, d = h === r ? p.sPageButtonActive : "" } null !== c && (he($("<a>", { class: p.sPageButton + " " + d, "aria-controls": o.sTableId, "aria-label": g[r], "data-dt-idx": m, tabindex: o.iTabIndex, id: 0 === l && "string" == typeof r ? o.sTableId + "_" + r : null }).html(c).appendTo(t), { action: r }, s), m++) } }; try { i = $(t).find(y.activeElement).data("dt-idx") } catch (t) {} v($(t).empty(), e), i !== W && $(t).find("[data-dt-idx=" + i + "]").focus() } } }), $.extend(T.ext.type.detect, [function(t, e) { var i = e.oLanguage.sDecimal; return u(t, i) ? "num" + i : null }, function(t, e) { if (t && !(t instanceof Date) && !s.test(t)) return null; var i = Date.parse(t); return null !== i && !isNaN(i) || l(t) ? "date" : null }, function(t, e) { var i = e.oLanguage.sDecimal; return u(t, i, !0) ? "num-fmt" + i : null }, function(t, e) { var i = e.oLanguage.sDecimal; return c(t, i) ? "html-num" + i : null }, function(t, e) { var i = e.oLanguage.sDecimal; return c(t, i, !0) ? "html-num-fmt" + i : null }, function(t, e) { return l(t) || "string" == typeof t && -1 !== t.indexOf("<") ? "html" : null }]), $.extend(T.ext.type.search, { html: function(t) { return l(t) ? t : "string" == typeof t ? t.replace(n, " ").replace(r, "") : "" }, string: function(t) { return l(t) ? t : "string" == typeof t ? t.replace(n, " ") : t } }); var Pe = function(t, e, i, n) { return 0 === t || t && "-" !== t ? (e && (t = h(t, e)), t.replace && (i && (t = t.replace(i, "")), n && (t = t.replace(n, ""))), 1 * t) : -1 / 0 };

        function Le(i) { $.each({ num: function(t) { return Pe(t, i) }, "num-fmt": function(t) { return Pe(t, i, o) }, "html-num": function(t) { return Pe(t, i, r) }, "html-num-fmt": function(t) { return Pe(t, i, r, o) } }, function(t, e) { f.type.order[t + i + "-pre"] = e, t.match(/^html\-/) && (f.type.search[t + i] = f.type.search.html) }) } $.extend(f.type.order, { "date-pre": function(t) { var e = Date.parse(t); return isNaN(e) ? -1 / 0 : e }, "html-pre": function(t) { return l(t) ? "" : t.replace ? t.replace(/<.*?>/g, "").toLowerCase() : t + "" }, "string-pre": function(t) { return l(t) ? "" : "string" == typeof t ? t.toLowerCase() : t.toString ? t.toString() : "" }, "string-asc": function(t, e) { return t < e ? -1 : e < t ? 1 : 0 }, "string-desc": function(t, e) { return t < e ? 1 : e < t ? -1 : 0 } }), Le(""), $.extend(!0, T.ext.renderer, { header: { _: function(s, a, o, l) { $(s.nTable).on("order.dt.DT", function(t, e, i, n) { if (s === e) { var r = o.idx;
                            a.removeClass(o.sSortingClass + " " + l.sSortAsc + " " + l.sSortDesc).addClass("asc" == n[r] ? l.sSortAsc : "desc" == n[r] ? l.sSortDesc : o.sSortingClass) } }) }, jqueryui: function(s, a, o, l) { $("<div/>").addClass(l.sSortJUIWrapper).append(a.contents()).append($("<span/>").addClass(l.sSortIcon + " " + o.sSortingClassJUI)).appendTo(a), $(s.nTable).on("order.dt.DT", function(t, e, i, n) { if (s === e) { var r = o.idx;
                            a.removeClass(l.sSortAsc + " " + l.sSortDesc).addClass("asc" == n[r] ? l.sSortAsc : "desc" == n[r] ? l.sSortDesc : o.sSortingClass), a.find("span." + l.sSortIcon).removeClass(l.sSortJUIAsc + " " + l.sSortJUIDesc + " " + l.sSortJUI + " " + l.sSortJUIAscAllowed + " " + l.sSortJUIDescAllowed).addClass("asc" == n[r] ? l.sSortJUIAsc : "desc" == n[r] ? l.sSortJUIDesc : o.sSortingClassJUI) } }) } } }); var Oe = function(t) { return "string" == typeof t ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t };

        function Re(e) { return function() { var t = [se(this[T.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments)); return T.ext.internal[e].apply(this, t) } } return T.render = { number: function(s, a, o, l, h) { return { display: function(t) { if ("number" != typeof t && "string" != typeof t) return t; var e = t < 0 ? "-" : "",
                            i = parseFloat(t); if (isNaN(i)) return Oe(t);
                        i = i.toFixed(o), t = Math.abs(i); var n = parseInt(t, 10),
                            r = o ? a + (t - n).toFixed(o).substring(2) : ""; return e + (l || "") + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, s) + r + (h || "") } } }, text: function() { return { display: Oe, filter: Oe } } }, $.extend(T.ext.internal, { _fnExternApiFunc: Re, _fnBuildAjax: dt, _fnAjaxUpdate: pt, _fnAjaxParameters: ft, _fnAjaxUpdateDraw: gt, _fnAjaxDataSrc: mt, _fnAddColumn: R, _fnColumnOptions: I, _fnAdjustColumnSizing: U, _fnVisibleToColumnIndex: q, _fnColumnIndexToVisible: C, _fnVisbleColumns: F, _fnGetColumns: j, _fnColumnTypes: k, _fnApplyColumnDefs: N, _fnHungarianMap: v, _fnCamelToHungarian: A, _fnLanguageCompat: E, _fnBrowserDetect: O, _fnAddData: H, _fnAddTr: z, _fnNodeToDataIndex: function(t, e) { return e._DT_RowIndex !== W ? e._DT_RowIndex : null }, _fnNodeToColumnIndex: function(t, e, i) { return $.inArray(i, t.aoData[e].anCells) }, _fnGetCellData: D, _fnSetCellData: B, _fnSplitObjNotation: X, _fnGetObjectDataFn: Z, _fnSetObjectDataFn: Q, _fnGetDataMaster: J, _fnClearTable: K, _fnDeleteIndex: tt, _fnInvalidate: et, _fnGetRowElements: it, _fnCreateTr: nt, _fnBuildHead: st, _fnDrawHead: at, _fnDraw: ot, _fnReDraw: lt, _fnAddOptionsHtml: ht, _fnDetectHeader: ut, _fnGetUniqueThs: ct, _fnFeatureHtmlFilter: vt, _fnFilterComplete: yt, _fnFilterCustom: bt, _fnFilterColumn: xt, _fnFilter: wt, _fnFilterCreateSearch: _t, _fnEscapeRegex: St, _fnFilterData: Dt, _fnFeatureHtmlInfo: At, _fnUpdateInfo: Et, _fnInfoMacros: Pt, _fnInitialise: Lt, _fnInitComplete: Ot, _fnLengthChange: Rt, _fnFeatureHtmlLength: It, _fnFeatureHtmlPaginate: Ft, _fnPageChange: jt, _fnFeatureHtmlProcessing: Nt, _fnProcessingDisplay: Ht, _fnFeatureHtmlTable: zt, _fnScrollDraw: Bt, _fnApplyToChildren: $t, _fnCalculateColumnWidths: Yt, _fnThrottle: Ut, _fnConvertToWidth: qt, _fnGetWidestNode: Vt, _fnGetMaxLenString: Gt, _fnStringToCss: Xt, _fnSortFlatten: Zt, _fnSort: Qt, _fnSortAria: Jt, _fnSortListener: Kt, _fnSortAttachListener: te, _fnSortingClasses: ee, _fnSortData: ie, _fnSaveState: ne, _fnLoadState: re, _fnSettingsFromNode: se, _fnLog: ae, _fnMap: oe, _fnBindAction: he, _fnCallbackReg: ue, _fnCallbackFire: ce, _fnLengthOverflow: de, _fnRenderer: pe, _fnDataSource: fe, _fnRowAttributes: rt, _fnExtend: le, _fnCalculateEnd: function() {} }), (($.fn.dataTable = T).$ = $).fn.dataTableSettings = T.settings, $.fn.dataTableExt = T.ext, $.fn.DataTable = function(t) { return $(this).dataTable(t).api() }, $.each(T, function(t, e) { $.fn.DataTable[t] = e }), $.fn.dataTable }),
    function(i) { "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function(t) { return i(t, window, document) }) : "object" == typeof exports ? module.exports = function(t, e) { return t || (t = window), e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), i(e, t, t.document) } : i(jQuery, window, document) }(function(b, t, n, r) { "use strict"; var s = b.fn.dataTable; return b.extend(!0, s.defaults, { dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>", renderer: "bootstrap" }), b.extend(s.ext.classes, { sWrapper: "dataTables_wrapper dt-bootstrap4", sFilterInput: "form-control form-control-sm", sLengthSelect: "custom-select custom-select-sm form-control form-control-sm", sProcessing: "dataTables_processing card", sPageButton: "paginate_button page-item" }), s.ext.renderer.pageButton.bootstrap = function(o, t, l, e, h, u) { var c, d, i, p = new s.Api(o),
                f = o.oClasses,
                g = o.oLanguage.oPaginate,
                m = o.oLanguage.oAria.paginate || {},
                v = 0,
                y = function(t, e) { var i, n, r, s, a = function(t) { t.preventDefault(), b(t.currentTarget).hasClass("disabled") || p.page() == t.data.action || p.page(t.data.action).draw("page") }; for (i = 0, n = e.length; i < n; i++)
                        if (s = e[i], b.isArray(s)) y(t, s);
                        else { switch (d = c = "", s) {
                                case "ellipsis":
                                    c = "&#x2026;", d = "disabled"; break;
                                case "first":
                                    c = g.sFirst, d = s + (0 < h ? "" : " disabled"); break;
                                case "previous":
                                    c = g.sPrevious, d = s + (0 < h ? "" : " disabled"); break;
                                case "next":
                                    c = g.sNext, d = s + (h < u - 1 ? "" : " disabled"); break;
                                case "last":
                                    c = g.sLast, d = s + (h < u - 1 ? "" : " disabled"); break;
                                default:
                                    c = s + 1, d = h === s ? "active" : "" } c && (r = b("<li>", { class: f.sPageButton + " " + d, id: 0 === l && "string" == typeof s ? o.sTableId + "_" + s : null }).append(b("<a>", { href: "#", "aria-controls": o.sTableId, "aria-label": m[s], "data-dt-idx": v, tabindex: o.iTabIndex, class: "page-link" }).html(c)).appendTo(t), o.oApi._fnBindAction(r, { action: s }, a), v++) } }; try { i = b(t).find(n.activeElement).data("dt-idx") } catch (t) {} y(b(t).empty().html('<ul class="pagination"/>').children("ul"), e), i !== r && b(t).find("[data-dt-idx=" + i + "]").focus() }, s }), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {} return e.prototype = t, new e }),
    function(n, e, t, i) { "use strict"; var r = { _positionClasses: ["bottom-left", "bottom-right", "top-right", "top-left", "bottom-center", "top-center", "mid-center"], _defaultIcons: ["success", "error", "info", "warning"], init: function(t, e) { this.prepareOptions(t, n.toast.options), this.process() }, prepareOptions: function(t, e) { var i = {}; "string" == typeof t || t instanceof Array ? i.text = t : i = t, this.options = n.extend({}, e, i) }, process: function() { this.setup(), this.addToDom(), this.position(), this.bindToast(), this.animate() }, setup: function() { var t = ""; if (this._toastEl = this._toastEl || n("<div></div>", { class: "jq-toast-single" }), t += '<span class="jq-toast-loader"></span>', this.options.allowToastClose && (t += '<span class="close-jq-toast-single">&times;</span>'), this.options.text instanceof Array) { this.options.heading && (t += '<h2 class="jq-toast-heading">' + this.options.heading + "</h2>"), t += '<ul class="jq-toast-ul">'; for (var e = 0; e < this.options.text.length; e++) t += '<li class="jq-toast-li" id="jq-toast-item-' + e + '">' + this.options.text[e] + "</li>";
                    t += "</ul>" } else this.options.heading && (t += '<h2 class="jq-toast-heading">' + this.options.heading + "</h2>"), t += this.options.text;
                this._toastEl.html(t), !1 !== this.options.bgColor && this._toastEl.css("background-color", this.options.bgColor), !1 !== this.options.textColor && this._toastEl.css("color", this.options.textColor), this.options.textAlign && this._toastEl.css("text-align", this.options.textAlign), !1 !== this.options.icon && (this._toastEl.addClass("jq-has-icon"), -1 !== n.inArray(this.options.icon, this._defaultIcons) && this._toastEl.addClass("jq-icon-" + this.options.icon)), !1 !== this.options.class && this._toastEl.addClass(this.options.class) }, position: function() { "string" == typeof this.options.position && -1 !== n.inArray(this.options.position, this._positionClasses) ? "bottom-center" === this.options.position ? this._container.css({ left: n(e).outerWidth() / 2 - this._container.outerWidth() / 2, bottom: 20 }) : "top-center" === this.options.position ? this._container.css({ left: n(e).outerWidth() / 2 - this._container.outerWidth() / 2, top: 20 }) : "mid-center" === this.options.position ? this._container.css({ left: n(e).outerWidth() / 2 - this._container.outerWidth() / 2, top: n(e).outerHeight() / 2 - this._container.outerHeight() / 2 }) : this._container.addClass(this.options.position) : "object" == typeof this.options.position ? this._container.css({ top: this.options.position.top ? this.options.position.top : "auto", bottom: this.options.position.bottom ? this.options.position.bottom : "auto", left: this.options.position.left ? this.options.position.left : "auto", right: this.options.position.right ? this.options.position.right : "auto" }) : this._container.addClass("bottom-left") }, bindToast: function() { var e = this;
                this._toastEl.on("afterShown", function() { e.processLoader() }), this._toastEl.find(".close-jq-toast-single").on("click", function(t) { t.preventDefault(), "fade" === e.options.showHideTransition ? (e._toastEl.trigger("beforeHide"), e._toastEl.fadeOut(function() { e._toastEl.trigger("afterHidden") })) : "slide" === e.options.showHideTransition ? (e._toastEl.trigger("beforeHide"), e._toastEl.slideUp(function() { e._toastEl.trigger("afterHidden") })) : (e._toastEl.trigger("beforeHide"), e._toastEl.hide(function() { e._toastEl.trigger("afterHidden") })) }), "function" == typeof this.options.beforeShow && this._toastEl.on("beforeShow", function() { e.options.beforeShow() }), "function" == typeof this.options.afterShown && this._toastEl.on("afterShown", function() { e.options.afterShown() }), "function" == typeof this.options.beforeHide && this._toastEl.on("beforeHide", function() { e.options.beforeHide() }), "function" == typeof this.options.afterHidden && this._toastEl.on("afterHidden", function() { e.options.afterHidden() }) }, addToDom: function() { var t = n(".jq-toast-wrap"); if (0 === t.length ? (t = n("<div></div>", { class: "jq-toast-wrap" }), n("body").append(t)) : (!this.options.stack || isNaN(parseInt(this.options.stack, 10))) && t.empty(), t.find(".jq-toast-single:hidden").remove(), t.append(this._toastEl), this.options.stack && !isNaN(parseInt(this.options.stack), 10)) { var e = t.find(".jq-toast-single").length - this.options.stack;
                    0 < e && n(".jq-toast-wrap").find(".jq-toast-single").slice(0, e).remove() } this._container = t }, canAutoHide: function() { return !1 !== this.options.hideAfter && !isNaN(parseInt(this.options.hideAfter, 10)) }, processLoader: function() { if (!this.canAutoHide() || !1 === this.options.loader) return !1; var t = this._toastEl.find(".jq-toast-loader"),
                    e = (this.options.hideAfter - 400) / 1e3 + "s",
                    i = this.options.loaderBg,
                    n = t.attr("style") || "";
                n = n.substring(0, n.indexOf("-webkit-transition")), n += "-webkit-transition: width " + e + " ease-in;                       -o-transition: width " + e + " ease-in;                       transition: width " + e + " ease-in;                       background-color: " + i + ";", t.attr("style", n).addClass("jq-toast-loaded") }, animate: function() { var t = this;
                this._toastEl.hide(), this._toastEl.trigger("beforeShow"), "fade" === this.options.showHideTransition.toLowerCase() ? this._toastEl.fadeIn(function() { t._toastEl.trigger("afterShown") }) : "slide" === this.options.showHideTransition.toLowerCase() ? this._toastEl.slideDown(function() { t._toastEl.trigger("afterShown") }) : this._toastEl.show(function() { t._toastEl.trigger("afterShown") }), this.canAutoHide() && (t = this, e.setTimeout(function() { "fade" === t.options.showHideTransition.toLowerCase() ? (t._toastEl.trigger("beforeHide"), t._toastEl.fadeOut(function() { t._toastEl.trigger("afterHidden") })) : "slide" === t.options.showHideTransition.toLowerCase() ? (t._toastEl.trigger("beforeHide"), t._toastEl.slideUp(function() { t._toastEl.trigger("afterHidden") })) : (t._toastEl.trigger("beforeHide"), t._toastEl.hide(function() { t._toastEl.trigger("afterHidden") })) }, this.options.hideAfter)) }, reset: function(t) { "all" === t ? n(".jq-toast-wrap").remove() : this._toastEl.remove() }, update: function(t) { this.prepareOptions(t, this.options), this.setup(), this.bindToast() } };
        n.toast = function(t) { var e = Object.create(r); return e.init(t, this), { reset: function(t) { e.reset(t) }, update: function(t) { e.update(t) } } }, n.toast.options = { text: "", heading: "", showHideTransition: "fade", allowToastClose: !0, hideAfter: 3e3, loader: !0, loaderBg: "#9EC600", stack: 5, position: "bottom-left", bgColor: !1, textColor: !1, textAlign: "left", icon: !1, beforeShow: function() {}, afterShown: function() {}, beforeHide: function() {}, afterHidden: function() {} } }(jQuery, window, document),
    function(t) { "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t() }(function() { "use strict"; var V = "12.1.0";

        function o(t) { return null != t }

        function G(t) { t.preventDefault() }

        function r(t) { return "number" == typeof t && !isNaN(t) && isFinite(t) }

        function X(t, e, i) { 0 < i && (J(t, e), setTimeout(function() { K(t, e) }, i)) }

        function Z(t) { return Math.max(Math.min(t, 100), 0) }

        function Q(t) { return Array.isArray(t) ? t : [t] }

        function e(t) { var e = (t = String(t)).split("."); return 1 < e.length ? e[1].length : 0 }

        function J(t, e) { t.classList ? t.classList.add(e) : t.className += " " + e }

        function K(t, e) { t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ") }

        function tt(t) { var e = void 0 !== window.pageXOffset,
                i = "CSS1Compat" === (t.compatMode || ""); return { x: e ? window.pageXOffset : i ? t.documentElement.scrollLeft : t.body.scrollLeft, y: e ? window.pageYOffset : i ? t.documentElement.scrollTop : t.body.scrollTop } }

        function u(t, e) { return 100 / (e - t) }

        function c(t, e) { return 100 * e / (t[1] - t[0]) }

        function d(t, e) { for (var i = 1; t >= e[i];) i += 1; return i }

        function s(t, e, i) { var n; if ("number" == typeof e && (e = [e]), !Array.isArray(e)) throw new Error("noUiSlider (" + V + "): 'range' contains invalid value."); if (!r(n = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !r(e[0])) throw new Error("noUiSlider (" + V + "): 'range' value isn't numeric.");
            i.xPct.push(n), i.xVal.push(e[0]), n ? i.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (i.xSteps[0] = e[1]), i.xHighestCompleteStep.push(0) }

        function a(t, e, i) { if (!e) return !0;
            i.xSteps[t] = c([i.xVal[t], i.xVal[t + 1]], e) / u(i.xPct[t], i.xPct[t + 1]); var n = (i.xVal[t + 1] - i.xVal[t]) / i.xNumSteps[t],
                r = Math.ceil(Number(n.toFixed(3)) - 1),
                s = i.xVal[t] + i.xNumSteps[t] * r;
            i.xHighestCompleteStep[t] = s }

        function i(t, e, i) { var n;
            this.xPct = [], this.xVal = [], this.xSteps = [i || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e; var r = []; for (n in t) t.hasOwnProperty(n) && r.push([t[n], n]); for (r.length && "object" == typeof r[0][0] ? r.sort(function(t, e) { return t[0][0] - e[0][0] }) : r.sort(function(t, e) { return t[0] - e[0] }), n = 0; n < r.length; n++) s(r[n][1], r[n][0], this); for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) a(n, this.xNumSteps[n], this) } i.prototype.getMargin = function(t) { var e = this.xNumSteps[0]; if (e && t / e % 1 != 0) throw new Error("noUiSlider (" + V + "): 'limit', 'margin' and 'padding' must be divisible by step."); return 2 === this.xPct.length && c(this.xVal, t) }, i.prototype.toStepping = function(t) { return function(t, e, i) { if (i >= t.slice(-1)[0]) return 100; var n, r, s = d(i, t),
                    a = t[s - 1],
                    o = t[s],
                    l = e[s - 1],
                    h = e[s]; return l + (r = i, c(n = [a, o], n[0] < 0 ? r + Math.abs(n[0]) : r - n[0]) / u(l, h)) }(this.xVal, this.xPct, t) }, i.prototype.fromStepping = function(t) { return function(t, e, i) { if (100 <= i) return t.slice(-1)[0]; var n, r = d(i, e),
                    s = t[r - 1],
                    a = t[r],
                    o = e[r - 1]; return n = [s, a], (i - o) * u(o, e[r]) * (n[1] - n[0]) / 100 + n[0] }(this.xVal, this.xPct, t) }, i.prototype.getStep = function(t) { return function(t, e, i, n) { if (100 === n) return n; var r, s, a = d(n, t),
                    o = t[a - 1],
                    l = t[a]; return i ? (l - o) / 2 < n - o ? l : o : e[a - 1] ? t[a - 1] + (r = n - t[a - 1], s = e[a - 1], Math.round(r / s) * s) : n }(this.xPct, this.xSteps, this.snap, t) }, i.prototype.getNearbySteps = function(t) { var e = d(t, this.xPct); return { stepBefore: { startValue: this.xVal[e - 2], step: this.xNumSteps[e - 2], highestStep: this.xHighestCompleteStep[e - 2] }, thisStep: { startValue: this.xVal[e - 1], step: this.xNumSteps[e - 1], highestStep: this.xHighestCompleteStep[e - 1] }, stepAfter: { startValue: this.xVal[e], step: this.xNumSteps[e], highestStep: this.xHighestCompleteStep[e] } } }, i.prototype.countStepDecimals = function() { var t = this.xNumSteps.map(e); return Math.max.apply(null, t) }, i.prototype.convert = function(t) { return this.getStep(this.toStepping(t)) }; var l = { to: function(t) { return void 0 !== t && t.toFixed(2) }, from: Number };

        function n(t) { if ("object" == typeof(e = t) && "function" == typeof e.to && "function" == typeof e.from) return !0; var e; throw new Error("noUiSlider (" + V + "): 'format' requires 'to' and 'from' methods.") }

        function h(t, e) { if (!r(e)) throw new Error("noUiSlider (" + V + "): 'step' is not numeric.");
            t.singleStep = e }

        function p(t, e) { if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider (" + V + "): 'range' is not an object."); if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (" + V + "): Missing 'min' or 'max' in 'range'."); if (e.min === e.max) throw new Error("noUiSlider (" + V + "): 'range' 'min' and 'max' cannot be equal.");
            t.spectrum = new i(e, t.snap, t.singleStep) }

        function f(t, e) { if (e = Q(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider (" + V + "): 'start' option is incorrect.");
            t.handles = e.length, t.start = e }

        function g(t, e) { if ("boolean" != typeof(t.snap = e)) throw new Error("noUiSlider (" + V + "): 'snap' option must be a boolean.") }

        function m(t, e) { if ("boolean" != typeof(t.animate = e)) throw new Error("noUiSlider (" + V + "): 'animate' option must be a boolean.") }

        function v(t, e) { if ("number" != typeof(t.animationDuration = e)) throw new Error("noUiSlider (" + V + "): 'animationDuration' option must be a number.") }

        function y(t, e) { var i, n = [!1]; if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) { for (i = 1; i < t.handles; i++) n.push(e);
                n.push(!1) } else { if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (" + V + "): 'connect' option doesn't match handle count.");
                n = e } t.connect = n }

        function b(t, e) { switch (e) {
                case "horizontal":
                    t.ort = 0; break;
                case "vertical":
                    t.ort = 1; break;
                default:
                    throw new Error("noUiSlider (" + V + "): 'orientation' option is invalid.") } }

        function x(t, e) { if (!r(e)) throw new Error("noUiSlider (" + V + "): 'margin' option must be numeric."); if (0 !== e && (t.margin = t.spectrum.getMargin(e), !t.margin)) throw new Error("noUiSlider (" + V + "): 'margin' option is only supported on linear sliders.") }

        function w(t, e) { if (!r(e)) throw new Error("noUiSlider (" + V + "): 'limit' option must be numeric."); if (t.limit = t.spectrum.getMargin(e), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + V + "): 'limit' option is only supported on linear sliders with 2 or more handles.") }

        function _(t, e) { if (!r(e) && !Array.isArray(e)) throw new Error("noUiSlider (" + V + "): 'padding' option must be numeric or array of exactly 2 numbers."); if (Array.isArray(e) && 2 !== e.length && !r(e[0]) && !r(e[1])) throw new Error("noUiSlider (" + V + "): 'padding' option must be numeric or array of exactly 2 numbers."); if (0 !== e) { if (Array.isArray(e) || (e = [e, e]), !(t.padding = [t.spectrum.getMargin(e[0]), t.spectrum.getMargin(e[1])]) === t.padding[0] || !1 === t.padding[1]) throw new Error("noUiSlider (" + V + "): 'padding' option is only supported on linear sliders."); if (t.padding[0] < 0 || t.padding[1] < 0) throw new Error("noUiSlider (" + V + "): 'padding' option must be a positive number(s)."); if (100 <= t.padding[0] + t.padding[1]) throw new Error("noUiSlider (" + V + "): 'padding' option must not exceed 100% of the range.") } }

        function S(t, e) { switch (e) {
                case "ltr":
                    t.dir = 0; break;
                case "rtl":
                    t.dir = 1; break;
                default:
                    throw new Error("noUiSlider (" + V + "): 'direction' option was not recognized.") } }

        function C(t, e) { if ("string" != typeof e) throw new Error("noUiSlider (" + V + "): 'behaviour' must be a string containing options."); var i = 0 <= e.indexOf("tap"),
                n = 0 <= e.indexOf("drag"),
                r = 0 <= e.indexOf("fixed"),
                s = 0 <= e.indexOf("snap"),
                a = 0 <= e.indexOf("hover"),
                o = 0 <= e.indexOf("unconstrained"); if (r) { if (2 !== t.handles) throw new Error("noUiSlider (" + V + "): 'fixed' behaviour must be used with 2 handles");
                x(t, t.start[1] - t.start[0]) } if (o && (t.margin || t.limit)) throw new Error("noUiSlider (" + V + "): 'unconstrained' behaviour cannot be used with margin or limit");
            t.events = { tap: i || s, drag: n, fixed: r, snap: s, hover: a, unconstrained: o } }

        function k(t, e) { if (!1 !== e)
                if (!0 === e) { t.tooltips = []; for (var i = 0; i < t.handles; i++) t.tooltips.push(!0) } else { if (t.tooltips = Q(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + V + "): must pass a formatter for all handles.");
                    t.tooltips.forEach(function(t) { if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + V + "): 'tooltips' must be passed a formatter or 'false'.") }) } }

        function D(t, e) { n(t.ariaFormat = e) }

        function T(t, e) { n(t.format = e) }

        function M(t, e) { if ("boolean" != typeof(t.keyboardSupport = e)) throw new Error("noUiSlider (" + V + "): 'keyboardSupport' option must be a boolean.") }

        function A(t, e) { t.documentElement = e }

        function E(t, e) { if ("string" != typeof e && !1 !== e) throw new Error("noUiSlider (" + V + "): 'cssPrefix' must be a string or `false`.");
            t.cssPrefix = e }

        function P(t, e) { if ("object" != typeof e) throw new Error("noUiSlider (" + V + "): 'cssClasses' must be an object."); if ("string" == typeof t.cssPrefix)
                for (var i in t.cssClasses = {}, e) e.hasOwnProperty(i) && (t.cssClasses[i] = t.cssPrefix + e[i]);
            else t.cssClasses = e }

        function et(e) { var i = { margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, ariaFormat: l, format: l },
                n = { step: { r: !1, t: h }, start: { r: !0, t: f }, connect: { r: !0, t: y }, direction: { r: !0, t: S }, snap: { r: !1, t: g }, animate: { r: !1, t: m }, animationDuration: { r: !1, t: v }, range: { r: !0, t: p }, orientation: { r: !1, t: b }, margin: { r: !1, t: x }, limit: { r: !1, t: w }, padding: { r: !1, t: _ }, behaviour: { r: !0, t: C }, ariaFormat: { r: !1, t: D }, format: { r: !1, t: T }, tooltips: { r: !1, t: k }, keyboardSupport: { r: !0, t: M }, documentElement: { r: !1, t: A }, cssPrefix: { r: !0, t: E }, cssClasses: { r: !0, t: P } },
                r = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: !0, cssPrefix: "noUi-", cssClasses: { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", connects: "connects", ltr: "ltr", rtl: "rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" } };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(n).forEach(function(t) { if (!o(e[t]) && void 0 === r[t]) { if (n[t].r) throw new Error("noUiSlider (" + V + "): '" + t + "' is required."); return !0 } n[t].t(i, o(e[t]) ? e[t] : r[t]) }), i.pips = e.pips; var t = document.createElement("div"),
                s = void 0 !== t.style.msTransform,
                a = void 0 !== t.style.transform; return i.transformRule = a ? "transform" : s ? "msTransform" : "webkitTransform", i.style = [
                ["left", "top"],
                ["right", "bottom"]
            ][i.dir][i.ort], i } return { __spectrum: i, version: V, create: function(t, e) { if (!t || !t.nodeName) throw new Error("noUiSlider (" + V + "): create requires a single element, got: " + t); if (t.noUiSlider) throw new Error("noUiSlider (" + V + "): Slider was already initialized."); var i = function(t, d, s) { var l, h, o, a, u, e, c, r, p = window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" },
                        f = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() { var t = !1; try { var e = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                                window.addEventListener("test", null, e) } catch (t) {} return t }(),
                        _ = t,
                        g = [],
                        m = [],
                        v = 0,
                        S = d.spectrum,
                        y = [],
                        b = {},
                        C = t.ownerDocument,
                        x = d.documentElement || C.documentElement,
                        w = C.body,
                        k = "rtl" === C.dir || 1 === d.ort ? 0 : 100;

                    function D(t, e) { var i = C.createElement("div"); return e && J(i, e), t.appendChild(i), i }

                    function T(t, e) { return !!e && D(t, d.cssClasses.connect) }

                    function M() { var t;
                        u && ((t = u).parentElement.removeChild(t), u = null) }

                    function A(t) { M(); var g, m, v, y, e, i, b, x, w, n = t.mode,
                            r = t.density || 1,
                            s = t.filter || !1,
                            a = function(t, e, i) { if ("range" === t || "steps" === t) return S.xVal; if ("count" === t) { if (e < 2) throw new Error("noUiSlider (" + V + "): 'values' (>= 2) required for mode 'count'."); var n = e - 1,
                                        r = 100 / n; for (e = []; n--;) e[n] = n * r;
                                    e.push(100), t = "positions" } return "positions" === t ? e.map(function(t) { return S.fromStepping(i ? S.getStep(t) : t) }) : "values" === t ? i ? e.map(function(t) { return S.fromStepping(S.getStep(S.toStepping(t))) }) : e : void 0 }(n, t.values || !1, t.stepped || !1),
                            o = (g = r, m = n, v = a, y = {}, e = S.xVal[0], i = S.xVal[S.xVal.length - 1], x = b = !1, w = 0, (v = v.slice().sort(function(t, e) { return t - e }).filter(function(t) { return !this[t] && (this[t] = !0) }, {}))[0] !== e && (v.unshift(e), b = !0), v[v.length - 1] !== i && (v.push(i), x = !0), v.forEach(function(t, e) { var i, n, r, s, a, o, l, h, u, c, d = t,
                                    p = v[e + 1],
                                    f = "steps" === m; if (f && (i = S.xNumSteps[e]), i || (i = p - d), !1 !== d && void 0 !== p)
                                    for (i = Math.max(i, 1e-7), n = d; n <= p; n = (n + i).toFixed(7) / 1) { for (h = (a = (s = S.toStepping(n)) - w) / g, c = a / (u = Math.round(h)), r = 1; r <= u; r += 1) y[(o = w + r * c).toFixed(5)] = [S.fromStepping(o), 0];
                                        l = -1 < v.indexOf(n) ? 1 : f ? 2 : 0, !e && b && (l = 0), n === p && x || (y[s.toFixed(5)] = [n, l]), w = s } }), y),
                            l = t.format || { to: Math.round }; return u = _.appendChild(function(e, r, s) { var a = C.createElement("div"),
                                o = [];
                            o[0] = d.cssClasses.valueNormal, o[1] = d.cssClasses.valueLarge, o[2] = d.cssClasses.valueSub; var l = [];
                            l[0] = d.cssClasses.markerNormal, l[1] = d.cssClasses.markerLarge, l[2] = d.cssClasses.markerSub; var h = [d.cssClasses.valueHorizontal, d.cssClasses.valueVertical],
                                u = [d.cssClasses.markerHorizontal, d.cssClasses.markerVertical];

                            function c(t, e) { var i = e === d.cssClasses.value,
                                    n = i ? o : l; return e + " " + (i ? h : u)[d.ort] + " " + n[t] } return J(a, d.cssClasses.pips), J(a, 0 === d.ort ? d.cssClasses.pipsHorizontal : d.cssClasses.pipsVertical), Object.keys(e).forEach(function(t) {! function(t, e, i) { if (-1 !== (i = r ? r(e, i) : i)) { var n = D(a, !1);
                                        n.className = c(i, d.cssClasses.marker), n.style[d.style] = t + "%", 0 < i && ((n = D(a, !1)).className = c(i, d.cssClasses.value), n.setAttribute("data-value", e), n.style[d.style] = t + "%", n.innerHTML = s.to(e)) } }(t, e[t][0], e[t][1]) }), a }(o, s, l)) }

                    function E() { var t = l.getBoundingClientRect(),
                            e = "offset" + ["Width", "Height"][d.ort]; return 0 === d.ort ? t.width || l[e] : t.height || l[e] }

                    function P(n, r, s, a) { var e = function(t) { return !!(t = function(t, e, i) { var n, r, s = 0 === t.type.indexOf("touch"),
                                        a = 0 === t.type.indexOf("mouse"),
                                        o = 0 === t.type.indexOf("pointer"); if (0 === t.type.indexOf("MSPointer") && (o = !0), s) { var l = function(t) { return t.target === i || i.contains(t.target) }; if ("touchstart" === t.type) { var h = Array.prototype.filter.call(t.touches, l); if (1 < h.length) return !1;
                                            n = h[0].pageX, r = h[0].pageY } else { var u = Array.prototype.find.call(t.changedTouches, l); if (!u) return !1;
                                            n = u.pageX, r = u.pageY } } return e = e || tt(C), (a || o) && (n = t.clientX + e.x, r = t.clientY + e.y), t.pageOffset = e, t.points = [n, r], t.cursor = a || o, t }(t, a.pageOffset, a.target || r)) && !(_.hasAttribute("disabled") && !a.doNotReject) && (e = _, i = d.cssClasses.tap, !((e.classList ? e.classList.contains(i) : new RegExp("\\b" + i + "\\b").test(e.className)) && !a.doNotReject) && !(n === p.start && void 0 !== t.buttons && 1 < t.buttons) && (!a.hover || !t.buttons) && (f || t.preventDefault(), t.calcPoint = t.points[d.ort], void s(t, a))); var e, i },
                            i = []; return n.split(" ").forEach(function(t) { r.addEventListener(t, e, !!f && { passive: !0 }), i.push([t, e]) }), i }

                    function L(t) { var e, i, n, r, s, a, o = 100 * (t - (e = l, i = d.ort, n = e.getBoundingClientRect(), s = (r = e.ownerDocument).documentElement, a = tt(r), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (a.x = 0), i ? n.top + a.y - s.clientTop : n.left + a.x - s.clientLeft)) / E(); return o = Z(o), d.dir ? 100 - o : o }

                    function O(t, e) { "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && I(t, e) }

                    function R(t, e) { if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return I(t, e); var i = (d.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
                        n(0 < i, 100 * i / e.baseSize, e.locations, e.handleNumbers) }

                    function I(t, e) { e.handle && (K(e.handle, d.cssClasses.active), v -= 1), e.listeners.forEach(function(t) { x.removeEventListener(t[0], t[1]) }), 0 === v && (K(_, d.cssClasses.drag), $(), t.cursor && (w.style.cursor = "", w.removeEventListener("selectstart", G))), e.handleNumbers.forEach(function(t) { j("change", t), j("set", t), j("end", t) }) }

                    function F(t, e) { var i; if (1 === e.handleNumbers.length) { var n = h[e.handleNumbers[0]]; if (n.hasAttribute("disabled")) return !1;
                            i = n.children[0], v += 1, J(i, d.cssClasses.active) } t.stopPropagation(); var r = [],
                            s = P(p.move, x, R, { target: t.target, handle: i, listeners: r, startCalcPoint: t.calcPoint, baseSize: E(), pageOffset: t.pageOffset, handleNumbers: e.handleNumbers, buttonsProperty: t.buttons, locations: g.slice() }),
                            a = P(p.end, x, I, { target: t.target, handle: i, listeners: r, doNotReject: !0, handleNumbers: e.handleNumbers }),
                            o = P("mouseout", x, O, { target: t.target, handle: i, listeners: r, doNotReject: !0, handleNumbers: e.handleNumbers });
                        r.push.apply(r, s.concat(a, o)), t.cursor && (w.style.cursor = getComputedStyle(t.target).cursor, 1 < h.length && J(_, d.cssClasses.drag), w.addEventListener("selectstart", G, !1)), e.handleNumbers.forEach(function(t) { j("start", t) }) }

                    function i(t, e) { b[t] = b[t] || [], b[t].push(e), "update" === t.split(".")[0] && h.forEach(function(t, e) { j("update", e) }) }

                    function j(i, n, r) { Object.keys(b).forEach(function(t) { var e = t.split(".")[0];
                            i === e && b[t].forEach(function(t) { t.call(a, y.map(d.format.to), n, y.slice(), r || !1, g.slice()) }) }) }

                    function N(t) { return t + "%" }

                    function H(t, e, i, n, r, s) { return 1 < h.length && !d.events.unconstrained && (n && 0 < e && (i = Math.max(i, t[e - 1] + d.margin)), r && e < h.length - 1 && (i = Math.min(i, t[e + 1] - d.margin))), 1 < h.length && d.limit && (n && 0 < e && (i = Math.min(i, t[e - 1] + d.limit)), r && e < h.length - 1 && (i = Math.max(i, t[e + 1] - d.limit))), d.padding && (0 === e && (i = Math.max(i, d.padding[0])), e === h.length - 1 && (i = Math.min(i, 100 - d.padding[1]))), !((i = Z(i = S.getStep(i))) === t[e] && !s) && i }

                    function z(t, e) { var i = d.ort; return (i ? e : t) + ", " + (i ? t : e) }

                    function n(t, n, i, e) { var r = i.slice(),
                            s = [!t, t],
                            a = [t, !t];
                        e = e.slice(), t && e.reverse(), 1 < e.length ? e.forEach(function(t, e) { var i = H(r, t, r[t] + n, s[e], a[e], !1);!1 === i ? n = 0 : (n = i - r[t], r[t] = i) }) : s = a = [!0]; var o = !1;
                        e.forEach(function(t, e) { o = W(t, i[t] + n, s[e], a[e]) || o }), o && e.forEach(function(t) { j("update", t), j("slide", t) }) }

                    function B(t, e) { return d.dir ? 100 - t - e : t }

                    function $() { m.forEach(function(t) { var e = 50 < g[t] ? -1 : 1,
                                i = 3 + (h.length + e * t);
                            h[t].style.zIndex = i }) }

                    function W(t, e, i, n) { return !1 !== (e = H(g, t, e, i, n, !1)) && (function(t, e) { g[t] = e, y[t] = S.fromStepping(e); var i = "translate(" + z(N(B(e, 0) - k), "0") + ")";
                            h[t].style[d.transformRule] = i, Y(t), Y(t + 1) }(t, e), !0) }

                    function Y(t) { if (o[t]) { var e = 0,
                                i = 100;
                            0 !== t && (e = g[t - 1]), t !== o.length - 1 && (i = g[t]); var n = i - e,
                                r = "translate(" + z(N(B(e, n)), "0") + ")",
                                s = "scale(" + z(n / 100, "1") + ")";
                            o[t].style[d.transformRule] = r + " " + s } }

                    function U(t, e) { var n = Q(t),
                            i = void 0 === g[0];
                        e = void 0 === e || !!e, d.animate && !i && X(_, d.cssClasses.tap, d.animationDuration), m.forEach(function(t) { var e, i;
                            W(t, null === (e = n[i = t]) || !1 === e || void 0 === e ? g[i] : ("number" == typeof e && (e = String(e)), e = d.format.from(e), !1 === (e = S.toStepping(e)) || isNaN(e) ? g[i] : e), !0, !1) }), m.forEach(function(t) { W(t, g[t], !0, !0) }), $(), m.forEach(function(t) { j("update", t), null !== n[t] && e && j("set", t) }) }

                    function q() { var t = y.map(d.format.to); return 1 === t.length ? t[0] : t } return J(e = _, d.cssClasses.target), 0 === d.dir ? J(e, d.cssClasses.ltr) : J(e, d.cssClasses.rtl), 0 === d.ort ? J(e, d.cssClasses.horizontal) : J(e, d.cssClasses.vertical), l = D(e, d.cssClasses.base),
                        function(t, e) { var i, n, r, s = D(e, d.cssClasses.connects);
                            h = [], (o = []).push(T(s, t[0])); for (var a = 0; a < d.handles; a++) h.push((i = a, r = void 0, (r = D(n = D(e, d.cssClasses.origin), d.cssClasses.handle)).setAttribute("data-handle", i), d.keyboardSupport && r.setAttribute("tabindex", "0"), r.setAttribute("role", "slider"), r.setAttribute("aria-orientation", d.ort ? "vertical" : "horizontal"), 0 === i ? J(r, d.cssClasses.handleLower) : i === d.handles - 1 && J(r, d.cssClasses.handleUpper), n)), m[a] = a, o.push(T(s, t[a + 1])) }(d.connect, l), (c = d.events).fixed || h.forEach(function(t, e) { P(p.start, t.children[0], F, { handleNumbers: [e] }) }), c.tap && P(p.start, l, function(t) { t.stopPropagation(); var n, r, s, e = L(t.calcPoint),
                                i = (n = e, s = !(r = 100), h.forEach(function(t, e) { if (!t.hasAttribute("disabled")) { var i = Math.abs(g[e] - n);
                                        (i < r || 100 === i && 100 === r) && (s = e, r = i) } }), s); if (!1 === i) return !1;
                            d.events.snap || X(_, d.cssClasses.tap, d.animationDuration), W(i, e, !0, !0), $(), j("slide", i, !0), j("update", i, !0), j("change", i, !0), j("set", i, !0), d.events.snap && F(t, { handleNumbers: [i] }) }, {}), c.hover && P(p.move, l, function(t) { var e = L(t.calcPoint),
                                i = S.getStep(e),
                                n = S.fromStepping(i);
                            Object.keys(b).forEach(function(t) { "hover" === t.split(".")[0] && b[t].forEach(function(t) { t.call(a, n) }) }) }, { hover: !0 }), c.drag && o.forEach(function(t, e) { if (!1 !== t && 0 !== e && e !== o.length - 1) { var i = h[e - 1],
                                    n = h[e],
                                    r = [t];
                                J(t, d.cssClasses.draggable), c.fixed && (r.push(i.children[0]), r.push(n.children[0])), r.forEach(function(t) { P(p.start, t, F, { handles: [i, n], handleNumbers: [e - 1, e] }) }) } }), U(d.start), a = { destroy: function() { for (var t in d.cssClasses) d.cssClasses.hasOwnProperty(t) && K(_, d.cssClasses[t]); for (; _.firstChild;) _.removeChild(_.firstChild);
                                delete _.noUiSlider }, steps: function() { return g.map(function(t, e) { var i = S.getNearbySteps(t),
                                        n = y[e],
                                        r = i.thisStep.step,
                                        s = null;!1 !== r && n + r > i.stepAfter.startValue && (r = i.stepAfter.startValue - n), s = n > i.thisStep.startValue ? i.thisStep.step : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep, 100 === t ? r = null : 0 === t && (s = null); var a = S.countStepDecimals(); return null !== r && !1 !== r && (r = Number(r.toFixed(a))), null !== s && !1 !== s && (s = Number(s.toFixed(a))), [s, r] }) }, on: i, off: function(t) { var n = t && t.split(".")[0],
                                    r = n && t.substring(n.length);
                                Object.keys(b).forEach(function(t) { var e = t.split(".")[0],
                                        i = t.substring(e.length);
                                    n && n !== e || r && r !== i || delete b[t] }) }, get: q, set: U, setHandle: function(t, e, i) { var n = []; if (!(0 <= (t = Number(t)) && t < m.length)) throw new Error("noUiSlider (" + V + "): invalid handle number, got: " + t); for (var r = 0; r < m.length; r++) n[r] = null;
                                n[t] = e, U(n, i) }, reset: function(t) { U(d.start, t) }, __moveHandles: function(t, e, i) { n(t, e, g, i) }, options: s, updateOptions: function(e, t) { var i = q(),
                                    n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
                                n.forEach(function(t) { void 0 !== e[t] && (s[t] = e[t]) }); var r = et(s);
                                n.forEach(function(t) { void 0 !== e[t] && (d[t] = r[t]) }), S = r.spectrum, d.margin = r.margin, d.limit = r.limit, d.padding = r.padding, d.pips && A(d.pips), g = [], U(e.start || i, t) }, target: _, removePips: M, pips: A }, d.pips && A(d.pips), d.tooltips && (r = h.map(function(t, e) { return !!d.tooltips[e] && D(t.firstChild, d.cssClasses.tooltip) }), i("update", function(t, e, i) { if (r[e]) { var n = t[e];!0 !== d.tooltips[e] && (n = d.tooltips[e].to(i[e])), r[e].innerHTML = n } })), i("update", function(t, e, a, i, o) { m.forEach(function(t) { var e = h[t],
                                    i = H(g, t, 0, !0, !0, !0),
                                    n = H(g, t, 100, !0, !0, !0),
                                    r = o[t],
                                    s = d.ariaFormat.to(a[t]);
                                i = S.fromStepping(i).toFixed(1), n = S.fromStepping(n).toFixed(1), r = S.fromStepping(r).toFixed(1), e.children[0].setAttribute("aria-valuemin", i), e.children[0].setAttribute("aria-valuemax", n), e.children[0].setAttribute("aria-valuenow", r), e.children[0].setAttribute("aria-valuetext", s) }) }), a }(t, et(e), e); return t.noUiSlider = i } } }),
    function(C, $, W) { var t;
        t = function(I) { "use strict"; var t, e, v, F, x, j, N, H, u, _, i, s, c, z, d, n, r, P, B, o, a, l, h, w, p, f, g, m, y, b = {},
                S = 0;
            t = function() { return { common: { type: "line", lineColor: "#00f", fillColor: "#cdf", defaultPixelsPerValue: 3, width: "auto", height: "auto", composite: !1, tagValuesAttribute: "values", tagOptionsPrefix: "spark", enableTagOptions: !1, enableHighlight: !0, highlightLighten: 1.4, tooltipSkipNull: !0, tooltipPrefix: "", tooltipSuffix: "", disableHiddenCheck: !1, numberFormatter: !1, numberDigitGroupCount: 3, numberDigitGroupSep: ",", numberDecimalMark: ".", disableTooltips: !1, disableInteraction: !1 }, line: { spotColor: "#f80", highlightSpotColor: "#5f5", highlightLineColor: "#f22", spotRadius: 1.5, minSpotColor: "#f80", maxSpotColor: "#f80", lineWidth: 1, normalRangeMin: W, normalRangeMax: W, normalRangeColor: "#ccc", drawNormalOnTop: !1, chartRangeMin: W, chartRangeMax: W, chartRangeMinX: W, chartRangeMaxX: W, tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}') }, bar: { barColor: "#3366cc", negBarColor: "#f44", stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"], zeroColor: W, nullColor: W, zeroAxis: !0, barWidth: 4, barSpacing: 1, chartRangeMax: W, chartRangeMin: W, chartRangeClip: !1, colorMap: W, tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}') }, tristate: { barWidth: 4, barSpacing: 1, posBarColor: "#6f6", negBarColor: "#f44", zeroBarColor: "#999", colorMap: {}, tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{value:map}}'), tooltipValueLookups: { map: { "-1": "Loss", 0: "Draw", 1: "Win" } } }, discrete: { lineHeight: "auto", thresholdColor: W, thresholdValue: 0, chartRangeMax: W, chartRangeMin: W, chartRangeClip: !1, tooltipFormat: new v("{{prefix}}{{value}}{{suffix}}") }, bullet: { targetColor: "#f33", targetWidth: 3, performanceColor: "#33f", rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"], base: W, tooltipFormat: new v("{{fieldkey:fields}} - {{value}}"), tooltipValueLookups: { fields: { r: "Range", p: "Performance", t: "Target" } } }, pie: { offset: 0, sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"], borderWidth: 0, borderColor: "#000", tooltipFormat: new v('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)') }, box: { raw: !1, boxLineColor: "#000", boxFillColor: "#cdf", whiskerColor: "#000", outlierLineColor: "#333", outlierFillColor: "#fff", medianColor: "#f00", showOutliers: !0, outlierIQR: 1.5, spotRadius: 1.5, target: W, targetColor: "#4a2", chartRangeMax: W, chartRangeMin: W, tooltipFormat: new v("{{field:fields}}: {{value}}"), tooltipFormatFieldlistKey: "field", tooltipValueLookups: { fields: { lq: "Lower Quartile", med: "Median", uq: "Upper Quartile", lo: "Left Outlier", ro: "Right Outlier", lw: "Left Whisker", rw: "Right Whisker" } } } } }, e = function() { var t, e; return t = function() { this.init.apply(this, arguments) }, 1 < arguments.length ? (arguments[0] ? (t.prototype = I.extend(new arguments[0], arguments[arguments.length - 1]), t._super = arguments[0].prototype) : t.prototype = arguments[arguments.length - 1], 2 < arguments.length && ((e = Array.prototype.slice.call(arguments, 1, -1)).unshift(t.prototype), I.extend.apply(I, e))) : t.prototype = arguments[0], t.prototype.cls = t }, I.SPFormatClass = v = e({ fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g, precre: /(\w+)\.(\d+)/, init: function(t, e) { this.format = t, this.fclass = e }, render: function(t, e, i) { var n, r, s, a, o, l = this,
                        h = t; return this.format.replace(this.fre, function() { return r = arguments[1], s = arguments[3], (n = l.precre.exec(r)) ? (o = n[2], r = n[1]) : o = !1, (a = h[r]) === W ? "" : s && e && e[s] ? e[s].get ? e[s].get(a) || a : e[s][a] || a : (u(a) && (a = i.get("numberFormatter") ? i.get("numberFormatter")(a) : c(a, o, i.get("numberDigitGroupCount"), i.get("numberDigitGroupSep"), i.get("numberDecimalMark"))), a) }) } }), I.spformat = function(t, e) { return new v(t, e) }, F = function(t, e, i) { return t < e ? e : i < t ? i : t }, x = function(t, e) { var i; return 2 === e ? (i = $.floor(t.length / 2), t.length % 2 ? t[i] : (t[i - 1] + t[i]) / 2) : t.length % 2 ? (i = (t.length * e + e) / 4) % 1 ? (t[$.floor(i)] + t[$.floor(i) - 1]) / 2 : t[i - 1] : (i = (t.length * e + 2) / 4) % 1 ? (t[$.floor(i)] + t[$.floor(i) - 1]) / 2 : t[i - 1] }, j = function(t) { var e; switch (t) {
                    case "undefined":
                        t = W; break;
                    case "null":
                        t = null; break;
                    case "true":
                        t = !0; break;
                    case "false":
                        t = !1; break;
                    default:
                        t == (e = parseFloat(t)) && (t = e) } return t }, N = function(t) { var e, i = []; for (e = t.length; e--;) i[e] = j(t[e]); return i }, H = function(t, e) { var i, n, r = []; for (i = 0, n = t.length; i < n; i++) t[i] !== e && r.push(t[i]); return r }, u = function(t) { return !isNaN(parseFloat(t)) && isFinite(t) }, c = function(t, e, i, n, r) { var s, a; for (t = (!1 === e ? parseFloat(t).toString() : t.toFixed(e)).split(""), (s = (s = I.inArray(".", t)) < 0 ? t.length : s) < t.length && (t[s] = r), a = s - i; 0 < a; a -= i) t.splice(a, 0, n); return t.join("") }, _ = function(t, e, i) { var n; for (n = e.length; n--;)
                    if ((!i || null !== e[n]) && e[n] !== t) return !1; return !0 }, s = function(t) { return I.isArray(t) ? t : [t] }, i = function(t) { var e, i; if (C.createStyleSheet) try { return void(C.createStyleSheet().cssText = t) } catch (t) { i = !0 }(e = C.createElement("style")).type = "text/css", C.getElementsByTagName("head")[0].appendChild(e), i ? C.styleSheets[C.styleSheets.length - 1].cssText = t : e["string" == typeof C.body.style.WebkitAppearance ? "innerText" : "innerHTML"] = t }, I.fn.simpledraw = function(t, e, i, n) { var r, s; if (i && (r = this.data("_jqs_vcanvas"))) return r; if (!1 === I.fn.sparkline.canvas) return !1; if (I.fn.sparkline.canvas === W) { var a = C.createElement("canvas"); if (a.getContext && a.getContext("2d")) I.fn.sparkline.canvas = function(t, e, i, n) { return new g(t, e, i, n) };
                    else { if (!C.namespaces || C.namespaces.v) return I.fn.sparkline.canvas = !1;
                        C.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), I.fn.sparkline.canvas = function(t, e, i, n) { return new m(t, e, i) } } } return t === W && (t = I(this).innerWidth()), e === W && (e = I(this).innerHeight()), r = I.fn.sparkline.canvas(t, e, this, n), (s = I(this).data("_jqs_mhandler")) && s.registerCanvas(r), r }, I.fn.cleardraw = function() { var t = this.data("_jqs_vcanvas");
                t && t.reset() }, I.RangeMapClass = z = e({ init: function(t) { var e, i, n = []; for (e in t) t.hasOwnProperty(e) && "string" == typeof e && -1 < e.indexOf(":") && ((i = e.split(":"))[0] = 0 === i[0].length ? -1 / 0 : parseFloat(i[0]), i[1] = 0 === i[1].length ? 1 / 0 : parseFloat(i[1]), i[2] = t[e], n.push(i));
                    this.map = t, this.rangelist = n || !1 }, get: function(t) { var e, i, n, r = this.rangelist; if ((n = this.map[t]) !== W) return n; if (r)
                        for (e = r.length; e--;)
                            if ((i = r[e])[0] <= t && i[1] >= t) return i[2]; return W } }), I.range_map = function(t) { return new z(t) }, d = e({ init: function(t, e) { var i = I(t);
                    this.$el = i, this.options = e, this.currentPageX = 0, this.currentPageY = 0, this.el = t, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !e.get("disableTooltips"), this.highlightEnabled = !e.get("disableHighlight") }, registerSparkline: function(t) { this.splist.push(t), this.over && this.updateDisplay() }, registerCanvas: function(t) { var e = I(t.canvas);
                    this.canvas = t, (this.$canvas = e).mouseenter(I.proxy(this.mouseenter, this)), e.mouseleave(I.proxy(this.mouseleave, this)), e.click(I.proxy(this.mouseclick, this)) }, reset: function(t) { this.splist = [], this.tooltip && t && (this.tooltip.remove(), this.tooltip = W) }, mouseclick: function(t) { var e = I.Event("sparklineClick");
                    e.originalEvent = t, e.sparklines = this.splist, this.$el.trigger(e) }, mouseenter: function(t) { I(C.body).unbind("mousemove.jqs"), I(C.body).bind("mousemove.jqs", I.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = t.pageX, this.currentPageY = t.pageY, this.currentEl = t.target, !this.tooltip && this.displayTooltips && (this.tooltip = new n(this.options), this.tooltip.updatePosition(t.pageX, t.pageY)), this.updateDisplay() }, mouseleave: function() { I(C.body).unbind("mousemove.jqs"); var t, e = this.splist,
                        i = e.length,
                        n = !1; for (this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null), t = 0; t < i; t++) e[t].clearRegionHighlight() && (n = !0);
                    n && this.canvas.render() }, mousemove: function(t) { this.currentPageX = t.pageX, this.currentPageY = t.pageY, this.currentEl = t.target, this.tooltip && this.tooltip.updatePosition(t.pageX, t.pageY), this.updateDisplay() }, updateDisplay: function() { var t, e, i, n, r = this.splist,
                        s = r.length,
                        a = !1,
                        o = this.$canvas.offset(),
                        l = this.currentPageX - o.left,
                        h = this.currentPageY - o.top; if (this.over) { for (e = 0; e < s; e++)(i = r[e].setRegionHighlight(this.currentEl, l, h)) && (a = !0); if (a) { if ((n = I.Event("sparklineRegionChange")).sparklines = this.splist, this.$el.trigger(n), this.tooltip) { for (t = "", e = 0; e < s; e++) t += r[e].getCurrentRegionTooltip();
                                this.tooltip.setContent(t) } this.disableHighlight || this.canvas.render() } null === i && this.mouseleave() } } }), n = e({ sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;", init: function(t) { var e, i = t.get("tooltipClassname", "jqstooltip"),
                        n = this.sizeStyle;
                    this.container = t.get("tooltipContainer") || C.body, this.tooltipOffsetX = t.get("tooltipOffsetX", 10), this.tooltipOffsetY = t.get("tooltipOffsetY", 12), I("#jqssizetip").remove(), I("#jqstooltip").remove(), this.sizetip = I("<div/>", { id: "jqssizetip", style: n, class: i }), this.tooltip = I("<div/>", { id: "jqstooltip", class: i }).appendTo(this.container), e = this.tooltip.offset(), this.offsetLeft = e.left, this.offsetTop = e.top, this.hidden = !0, I(window).unbind("resize.jqs scroll.jqs"), I(window).bind("resize.jqs scroll.jqs", I.proxy(this.updateWindowDims, this)), this.updateWindowDims() }, updateWindowDims: function() { this.scrollTop = I(window).scrollTop(), this.scrollLeft = I(window).scrollLeft(), this.scrollRight = this.scrollLeft + I(window).width(), this.updatePosition() }, getSize: function(t) { this.sizetip.html(t).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove() }, setContent: function(t) { if (!t) return this.tooltip.css("visibility", "hidden"), void(this.hidden = !0);
                    this.getSize(t), this.tooltip.html(t).css({ width: this.width, height: this.height, visibility: "visible" }), this.hidden && (this.hidden = !1, this.updatePosition()) }, updatePosition: function(t, e) { if (t === W) { if (this.mousex === W) return;
                        t = this.mousex - this.offsetLeft, e = this.mousey - this.offsetTop } else this.mousex = t -= this.offsetLeft, this.mousey = e -= this.offsetTop;
                    this.height && this.width && !this.hidden && (e -= this.height + this.tooltipOffsetY, t += this.tooltipOffsetX, e < this.scrollTop && (e = this.scrollTop), t < this.scrollLeft ? t = this.scrollLeft : t + this.width > this.scrollRight && (t = this.scrollRight - this.width), this.tooltip.css({ left: t, top: e })) }, remove: function() { this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = W, I(window).unbind("resize.jqs scroll.jqs") } }), I(function() { i('.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;box-sizing: content-box;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}') }), y = [], I.fn.sparkline = function(h, i) { return this.each(function() { var t, e, o = new I.fn.sparkline.options(this, i),
                        l = I(this); if (t = function() { var t, e, i, n, r, s, a;
                            t = "html" === h || h === W ? ((a = this.getAttribute(o.get("tagValuesAttribute"))) !== W && null !== a || (a = l.html()), a.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")) : h, e = "auto" === o.get("width") ? t.length * o.get("defaultPixelsPerValue") : o.get("width"), "auto" === o.get("height") ? o.get("composite") && I.data(this, "_jqs_vcanvas") || ((n = C.createElement("span")).innerHTML = "a", l.html(n), i = I(n).innerHeight() || I(n).height(), I(n).remove(), n = null) : i = o.get("height"), o.get("disableInteraction") ? r = !1 : (r = I.data(this, "_jqs_mhandler")) ? o.get("composite") || r.reset() : (r = new d(this, o), I.data(this, "_jqs_mhandler", r)), !o.get("composite") || I.data(this, "_jqs_vcanvas") ? ((s = new(I.fn.sparkline[o.get("type")])(this, t, o, e, i)).render(), r && r.registerSparkline(s)) : I.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), I.data(this, "_jqs_errnotify", !0)) }, I(this).html() && !o.get("disableHiddenCheck") && I(this).is(":hidden") || !I(this).parents("body").length) { if (!o.get("composite") && I.data(this, "_jqs_pending"))
                            for (e = y.length; e; e--) y[e - 1][0] == this && y.splice(e - 1, 1);
                        y.push([this, t]), I.data(this, "_jqs_pending", !0) } else t.call(this) }) }, I.fn.sparkline.defaults = t(), I.sparkline_display_visible = function() { var t, e, i, n = []; for (e = 0, i = y.length; e < i; e++) t = y[e][0], I(t).is(":visible") && !I(t).parents().is(":hidden") ? (y[e][1].call(t), I.data(y[e][0], "_jqs_pending", !1), n.push(e)) : I(t).closest("html").length || I.data(t, "_jqs_pending") || (I.data(y[e][0], "_jqs_pending", !1), n.push(e)); for (e = n.length; e; e--) y.splice(n[e - 1], 1) }, I.fn.sparkline.options = e({ init: function(t, e) { var i, n, r, s;
                    this.userOptions = e = e || {}, this.tag = t, this.tagValCache = {}, r = (n = I.fn.sparkline.defaults).common, this.tagOptionsPrefix = e.enableTagOptions && (e.tagOptionsPrefix || r.tagOptionsPrefix), i = (s = this.getTagSetting("type")) === b ? n[e.type || r.type] : n[s], this.mergedOptions = I.extend({}, r, i, e) }, getTagSetting: function(t) { var e, i, n, r, s = this.tagOptionsPrefix; if (!1 === s || s === W) return b; if (this.tagValCache.hasOwnProperty(t)) e = this.tagValCache.key;
                    else { if ((e = this.tag.getAttribute(s + t)) === W || null === e) e = b;
                        else if ("[" === e.substr(0, 1))
                            for (i = (e = e.substr(1, e.length - 2).split(",")).length; i--;) e[i] = j(e[i].replace(/(^\s*)|(\s*$)/g, ""));
                        else if ("{" === e.substr(0, 1))
                            for (n = e.substr(1, e.length - 2).split(","), e = {}, i = n.length; i--;) e[(r = n[i].split(":", 2))[0].replace(/(^\s*)|(\s*$)/g, "")] = j(r[1].replace(/(^\s*)|(\s*$)/g, ""));
                        else e = j(e);
                        this.tagValCache.key = e } return e }, get: function(t, e) { var i, n = this.getTagSetting(t); return n !== b ? n : (i = this.mergedOptions[t]) === W ? e : i } }), I.fn.sparkline._base = e({ disabled: !1, init: function(t, e, i, n, r) { this.el = t, this.$el = I(t), this.values = e, this.options = i, this.width = n, this.height = r, this.currentRegion = W }, initTarget: function() { var t = !this.options.get("disableInteraction");
                    (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), t)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0 }, render: function() { return !this.disabled || (this.el.innerHTML = "", !1) }, getRegion: function(t, e) {}, setRegionHighlight: function(t, e, i) { var n, r = this.currentRegion,
                        s = !this.options.get("disableHighlight"); return e > this.canvasWidth || i > this.canvasHeight || e < 0 || i < 0 ? null : r !== (n = this.getRegion(t, e, i)) && (r !== W && s && this.removeHighlight(), (this.currentRegion = n) !== W && s && this.renderHighlight(), !0) }, clearRegionHighlight: function() { return this.currentRegion !== W && (this.removeHighlight(), !(this.currentRegion = W)) }, renderHighlight: function() { this.changeHighlight(!0) }, removeHighlight: function() { this.changeHighlight(!1) }, changeHighlight: function(t) {}, getCurrentRegionTooltip: function() { var t, e, i, n, r, s, a, o, l, h, u, c, d, p, f = this.options,
                        g = "",
                        m = []; if (this.currentRegion === W) return ""; if (t = this.getCurrentRegionFields(), u = f.get("tooltipFormatter")) return u(this, f, t); if (f.get("tooltipChartTitle") && (g += '<div class="jqs jqstitle">' + f.get("tooltipChartTitle") + "</div>\n"), !(e = this.options.get("tooltipFormat"))) return ""; if (I.isArray(e) || (e = [e]), I.isArray(t) || (t = [t]), a = this.options.get("tooltipFormatFieldlist"), o = this.options.get("tooltipFormatFieldlistKey"), a && o) { for (l = [], s = t.length; s--;) h = t[s][o], -1 != (p = I.inArray(h, a)) && (l[p] = t[s]);
                        t = l } for (i = e.length, d = t.length, s = 0; s < i; s++)
                        for ("string" == typeof(c = e[s]) && (c = new v(c)), n = c.fclass || "jqsfield", p = 0; p < d; p++) t[p].isNull && f.get("tooltipSkipNull") || (I.extend(t[p], { prefix: f.get("tooltipPrefix"), suffix: f.get("tooltipSuffix") }), r = c.render(t[p], f.get("tooltipValueLookups"), f), m.push('<div class="' + n + '">' + r + "</div>")); return m.length ? g + m.join("\n") : "" }, getCurrentRegionFields: function() {}, calcHighlightColor: function(t, e) { var i, n, r, s, a = e.get("highlightColor"),
                        o = e.get("highlightLighten"); if (a) return a; if (o && (i = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(t) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(t))) { for (r = [], n = 4 === t.length ? 16 : 1, s = 0; s < 3; s++) r[s] = F($.round(parseInt(i[s + 1], 16) * n * o), 0, 255); return "rgb(" + r.join(",") + ")" } return t } }), r = { changeHighlight: function(t) { var e, i = this.currentRegion,
                        n = this.target,
                        r = this.regionShapes[i];
                    r && (e = this.renderRegion(i, t), I.isArray(e) || I.isArray(r) ? (n.replaceWithShapes(r, e), this.regionShapes[i] = I.map(e, function(t) { return t.id })) : (n.replaceWithShape(r, e), this.regionShapes[i] = e.id)) }, render: function() { var t, e, i, n, r = this.values,
                        s = this.target,
                        a = this.regionShapes; if (this.cls._super.render.call(this)) { for (i = r.length; i--;)
                            if (t = this.renderRegion(i))
                                if (I.isArray(t)) { for (e = [], n = t.length; n--;) t[n].append(), e.push(t[n].id);
                                    a[i] = e } else t.append(), a[i] = t.id;
                        else a[i] = null;
                        s.render() } } }, I.fn.sparkline.line = P = e(I.fn.sparkline._base, { type: "line", init: function(t, e, i, n, r) { P._super.init.call(this, t, e, i, n, r), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget() }, getRegion: function(t, e, i) { var n, r = this.regionMap; for (n = r.length; n--;)
                        if (null !== r[n] && e >= r[n][0] && e <= r[n][1]) return r[n][2]; return W }, getCurrentRegionFields: function() { var t = this.currentRegion; return { isNull: null === this.yvalues[t], x: this.xvalues[t], y: this.yvalues[t], color: this.options.get("lineColor"), fillColor: this.options.get("fillColor"), offset: t } }, renderHighlight: function() { var t, e, i = this.currentRegion,
                        n = this.target,
                        r = this.vertices[i],
                        s = this.options,
                        a = s.get("spotRadius"),
                        o = s.get("highlightSpotColor"),
                        l = s.get("highlightLineColor");
                    r && (a && o && (t = n.drawCircle(r[0], r[1], a, W, o), this.highlightSpotId = t.id, n.insertAfterShape(this.lastShapeId, t)), l && (e = n.drawLine(r[0], this.canvasTop, r[0], this.canvasTop + this.canvasHeight, l), this.highlightLineId = e.id, n.insertAfterShape(this.lastShapeId, e))) }, removeHighlight: function() { var t = this.target;
                    this.highlightSpotId && (t.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (t.removeShapeId(this.highlightLineId), this.highlightLineId = null) }, scanValues: function() { var t, e, i, n, r, s = this.values,
                        a = s.length,
                        o = this.xvalues,
                        l = this.yvalues,
                        h = this.yminmax; for (t = 0; t < a; t++) e = s[t], i = "string" == typeof s[t], n = "object" == typeof s[t] && s[t] instanceof Array, r = i && s[t].split(":"), i && 2 === r.length ? (o.push(Number(r[0])), l.push(Number(r[1])), h.push(Number(r[1]))) : n ? (o.push(e[0]), l.push(e[1]), h.push(e[1])) : (o.push(t), null === s[t] || "null" === s[t] ? l.push(null) : (l.push(Number(e)), h.push(Number(e))));
                    this.options.get("xvalues") && (o = this.options.get("xvalues")), this.maxy = this.maxyorg = $.max.apply($, h), this.miny = this.minyorg = $.min.apply($, h), this.maxx = $.max.apply($, o), this.minx = $.min.apply($, o), this.xvalues = o, this.yvalues = l, this.yminmax = h }, processRangeOptions: function() { var t = this.options,
                        e = t.get("normalRangeMin"),
                        i = t.get("normalRangeMax");
                    e !== W && (e < this.miny && (this.miny = e), i > this.maxy && (this.maxy = i)), t.get("chartRangeMin") !== W && (t.get("chartRangeClip") || t.get("chartRangeMin") < this.miny) && (this.miny = t.get("chartRangeMin")), t.get("chartRangeMax") !== W && (t.get("chartRangeClip") || t.get("chartRangeMax") > this.maxy) && (this.maxy = t.get("chartRangeMax")), t.get("chartRangeMinX") !== W && (t.get("chartRangeClipX") || t.get("chartRangeMinX") < this.minx) && (this.minx = t.get("chartRangeMinX")), t.get("chartRangeMaxX") !== W && (t.get("chartRangeClipX") || t.get("chartRangeMaxX") > this.maxx) && (this.maxx = t.get("chartRangeMaxX")) }, drawNormalRange: function(t, e, i, n, r) { var s = this.options.get("normalRangeMin"),
                        a = this.options.get("normalRangeMax"),
                        o = e + $.round(i - i * ((a - this.miny) / r)),
                        l = $.round(i * (a - s) / r);
                    this.target.drawRect(t, o, n, l, W, this.options.get("normalRangeColor")).append() }, render: function() { var t, e, i, n, r, s, a, o, l, h, u, c, d, p, f, g, m, v, y, b, x, w, _, S, C = this.options,
                        k = this.target,
                        D = this.canvasWidth,
                        T = this.canvasHeight,
                        M = this.vertices,
                        A = C.get("spotRadius"),
                        E = this.regionMap; if (P._super.render.call(this) && (this.scanValues(), this.processRangeOptions(), w = this.xvalues, _ = this.yvalues, this.yminmax.length && !(this.yvalues.length < 2))) { for (n = r = 0, t = this.maxx - this.minx == 0 ? 1 : this.maxx - this.minx, e = this.maxy - this.miny == 0 ? 1 : this.maxy - this.miny, i = this.yvalues.length - 1, A && (D < 4 * A || T < 4 * A) && (A = 0), A && (((b = C.get("highlightSpotColor") && !C.get("disableInteraction")) || C.get("minSpotColor") || C.get("spotColor") && _[i] === this.miny) && (T -= $.ceil(A)), (b || C.get("maxSpotColor") || C.get("spotColor") && _[i] === this.maxy) && (T -= $.ceil(A), n += $.ceil(A)), (b || (C.get("minSpotColor") || C.get("maxSpotColor")) && (_[0] === this.miny || _[0] === this.maxy)) && (r += $.ceil(A), D -= $.ceil(A)), (b || C.get("spotColor") || C.get("minSpotColor") || C.get("maxSpotColor") && (_[i] === this.miny || _[i] === this.maxy)) && (D -= $.ceil(A))), T--, C.get("normalRangeMin") === W || C.get("drawNormalOnTop") || this.drawNormalRange(r, n, T, D, e), o = [a = []], d = p = null, f = _.length, S = 0; S < f; S++) l = w[S], u = w[S + 1], h = _[S], p = (c = r + $.round((l - this.minx) * (D / t))) + ((S < f - 1 ? r + $.round((u - this.minx) * (D / t)) : D) - c) / 2, E[S] = [d || 0, p, S], d = p, null === h ? S && (null !== _[S - 1] && (a = [], o.push(a)), M.push(null)) : (h < this.miny && (h = this.miny), h > this.maxy && (h = this.maxy), a.length || a.push([c, n + T]), s = [c, n + $.round(T - T * ((h - this.miny) / e))], a.push(s), M.push(s)); for (g = [], m = [], v = o.length, S = 0; S < v; S++)(a = o[S]).length && (C.get("fillColor") && (a.push([a[a.length - 1][0], n + T]), m.push(a.slice(0)), a.pop()), 2 < a.length && (a[0] = [a[0][0], a[1][1]]), g.push(a)); for (v = m.length, S = 0; S < v; S++) k.drawShape(m[S], C.get("fillColor"), C.get("fillColor")).append(); for (C.get("normalRangeMin") !== W && C.get("drawNormalOnTop") && this.drawNormalRange(r, n, T, D, e), v = g.length, S = 0; S < v; S++) k.drawShape(g[S], C.get("lineColor"), W, C.get("lineWidth")).append(); if (A && C.get("valueSpots"))
                            for ((y = C.get("valueSpots")).get === W && (y = new z(y)), S = 0; S < f; S++)(x = y.get(_[S])) && k.drawCircle(r + $.round((w[S] - this.minx) * (D / t)), n + $.round(T - T * ((_[S] - this.miny) / e)), A, W, x).append();
                        A && C.get("spotColor") && null !== _[i] && k.drawCircle(r + $.round((w[w.length - 1] - this.minx) * (D / t)), n + $.round(T - T * ((_[i] - this.miny) / e)), A, W, C.get("spotColor")).append(), this.maxy !== this.minyorg && (A && C.get("minSpotColor") && (l = w[I.inArray(this.minyorg, _)], k.drawCircle(r + $.round((l - this.minx) * (D / t)), n + $.round(T - T * ((this.minyorg - this.miny) / e)), A, W, C.get("minSpotColor")).append()), A && C.get("maxSpotColor") && (l = w[I.inArray(this.maxyorg, _)], k.drawCircle(r + $.round((l - this.minx) * (D / t)), n + $.round(T - T * ((this.maxyorg - this.miny) / e)), A, W, C.get("maxSpotColor")).append())), this.lastShapeId = k.getLastShapeId(), this.canvasTop = n, k.render() } } }), I.fn.sparkline.bar = B = e(I.fn.sparkline._base, r, { type: "bar", init: function(t, e, i, n, r) { var s, a, o, l, h, u, c, d, p, f, g, m, v, y, b, x, w, _, S, C, k, D = parseInt(i.get("barWidth"), 10),
                        T = parseInt(i.get("barSpacing"), 10),
                        M = i.get("chartRangeMin"),
                        A = i.get("chartRangeMax"),
                        E = i.get("chartRangeClip"),
                        P = 1 / 0,
                        L = -1 / 0; for (B._super.init.call(this, t, e, i, n, r), u = 0, c = e.length; u < c; u++)((s = "string" == typeof(C = e[u]) && -1 < C.indexOf(":")) || I.isArray(C)) && (b = !0, s && (C = e[u] = N(C.split(":"))), C = H(C, null), (a = $.min.apply($, C)) < P && (P = a), L < (o = $.max.apply($, C)) && (L = o));
                    this.stacked = b, this.regionShapes = {}, this.barWidth = D, this.barSpacing = T, this.totalBarWidth = D + T, this.width = n = e.length * D + (e.length - 1) * T, this.initTarget(), E && (v = M === W ? -1 / 0 : M, y = A === W ? 1 / 0 : A), h = [], l = b ? [] : h; var O = [],
                        R = []; for (u = 0, c = e.length; u < c; u++)
                        if (b)
                            for (x = e[u], e[u] = S = [], O[u] = 0, l[u] = R[u] = 0, w = 0, _ = x.length; w < _; w++) null !== (C = S[w] = E ? F(x[w], v, y) : x[w]) && (0 < C && (O[u] += C), P < 0 && 0 < L ? C < 0 ? R[u] += $.abs(C) : l[u] += C : l[u] += $.abs(C - (C < 0 ? L : P)), h.push(C));
                        else C = E ? F(e[u], v, y) : e[u], null !== (C = e[u] = j(C)) && h.push(C);
                    this.max = m = $.max.apply($, h), this.min = g = $.min.apply($, h), this.stackMax = L = b ? $.max.apply($, O) : m, this.stackMin = P = b ? $.min.apply($, h) : g, i.get("chartRangeMin") !== W && (i.get("chartRangeClip") || i.get("chartRangeMin") < g) && (g = i.get("chartRangeMin")), i.get("chartRangeMax") !== W && (i.get("chartRangeClip") || i.get("chartRangeMax") > m) && (m = i.get("chartRangeMax")), this.zeroAxis = p = i.get("zeroAxis", !0), f = g <= 0 && 0 <= m && p ? 0 : 0 == p ? g : 0 < g ? g : m, this.xaxisOffset = f, d = b ? $.max.apply($, l) + $.max.apply($, R) : m - g, this.canvasHeightEf = p && g < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1, g < f ? (k = ((b && 0 <= m ? L : m) - f) / d * this.canvasHeight) !== $.ceil(k) && (this.canvasHeightEf -= 2, k = $.ceil(k)) : k = this.canvasHeight, this.yoffset = k, I.isArray(i.get("colorMap")) ? (this.colorMapByIndex = i.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = i.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === W && (this.colorMapByValue = new z(this.colorMapByValue))), this.range = d }, getRegion: function(t, e, i) { var n = $.floor(e / this.totalBarWidth); return n < 0 || n >= this.values.length ? W : n }, getCurrentRegionFields: function() { var t, e, i = this.currentRegion,
                        n = s(this.values[i]),
                        r = []; for (e = n.length; e--;) t = n[e], r.push({ isNull: null === t, value: t, color: this.calcColor(e, t, i), offset: i }); return r }, calcColor: function(t, e, i) { var n, r, s = this.colorMapByIndex,
                        a = this.colorMapByValue,
                        o = this.options; return n = this.stacked ? o.get("stackedBarColor") : e < 0 ? o.get("negBarColor") : o.get("barColor"), 0 === e && o.get("zeroColor") !== W && (n = o.get("zeroColor")), a && (r = a.get(e)) ? n = r : s && s.length > i && (n = s[i]), I.isArray(n) ? n[t % n.length] : n }, renderRegion: function(t, e) { var i, n, r, s, a, o, l, h, u, c, d = this.values[t],
                        p = this.options,
                        f = this.xaxisOffset,
                        g = [],
                        m = this.range,
                        v = this.stacked,
                        y = this.target,
                        b = t * this.totalBarWidth,
                        x = this.canvasHeightEf,
                        w = this.yoffset; if (l = (d = I.isArray(d) ? d : [d]).length, h = d[0], s = _(null, d), c = _(f, d, !0), s) return p.get("nullColor") ? (r = e ? p.get("nullColor") : this.calcHighlightColor(p.get("nullColor"), p), i = 0 < w ? w - 1 : w, y.drawRect(b, i, this.barWidth - 1, 0, r, r)) : W; for (a = w, o = 0; o < l; o++) { if (h = d[o], v && h === f) { if (!c || u) continue;
                            u = !0 } n = 0 < m ? $.floor(x * ($.abs(h - f) / m)) + 1 : 1, h < f || h === f && 0 === w ? (i = a, a += n) : (i = w - n, w -= n), r = this.calcColor(o, h, t), e && (r = this.calcHighlightColor(r, p)), g.push(y.drawRect(b, i, this.barWidth - 1, n - 1, r, r)) } return 1 === g.length ? g[0] : g } }), I.fn.sparkline.tristate = o = e(I.fn.sparkline._base, r, { type: "tristate", init: function(t, e, i, n, r) { var s = parseInt(i.get("barWidth"), 10),
                        a = parseInt(i.get("barSpacing"), 10);
                    o._super.init.call(this, t, e, i, n, r), this.regionShapes = {}, this.barWidth = s, this.barSpacing = a, this.totalBarWidth = s + a, this.values = I.map(e, Number), this.width = n = e.length * s + (e.length - 1) * a, I.isArray(i.get("colorMap")) ? (this.colorMapByIndex = i.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = i.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === W && (this.colorMapByValue = new z(this.colorMapByValue))), this.initTarget() }, getRegion: function(t, e, i) { return $.floor(e / this.totalBarWidth) }, getCurrentRegionFields: function() { var t = this.currentRegion; return { isNull: this.values[t] === W, value: this.values[t], color: this.calcColor(this.values[t], t), offset: t } }, calcColor: function(t, e) { var i, n = this.values,
                        r = this.options,
                        s = this.colorMapByIndex,
                        a = this.colorMapByValue; return a && (i = a.get(t)) ? i : s && s.length > e ? s[e] : n[e] < 0 ? r.get("negBarColor") : 0 < n[e] ? r.get("posBarColor") : r.get("zeroBarColor") }, renderRegion: function(t, e) { var i, n, r, s, a, o, l = this.values,
                        h = this.options,
                        u = this.target; if (i = u.pixelHeight, r = $.round(i / 2), s = t * this.totalBarWidth, n = l[t] < 0 ? (a = r) - 1 : 0 < l[t] ? (a = 0, r - 1) : (a = r - 1, 2), null !== (o = this.calcColor(l[t], t))) return e && (o = this.calcHighlightColor(o, h)), u.drawRect(s, a, this.barWidth - 1, n - 1, o, o) } }), I.fn.sparkline.discrete = a = e(I.fn.sparkline._base, r, { type: "discrete", init: function(t, e, i, n, r) { a._super.init.call(this, t, e, i, n, r), this.regionShapes = {}, this.values = e = I.map(e, Number), this.min = $.min.apply($, e), this.max = $.max.apply($, e), this.range = this.max - this.min, this.width = n = "auto" === i.get("width") ? 2 * e.length : this.width, this.interval = $.floor(n / e.length), this.itemWidth = n / e.length, i.get("chartRangeMin") !== W && (i.get("chartRangeClip") || i.get("chartRangeMin") < this.min) && (this.min = i.get("chartRangeMin")), i.get("chartRangeMax") !== W && (i.get("chartRangeClip") || i.get("chartRangeMax") > this.max) && (this.max = i.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = "auto" === i.get("lineHeight") ? $.round(.3 * this.canvasHeight) : i.get("lineHeight")) }, getRegion: function(t, e, i) { return $.floor(e / this.itemWidth) }, getCurrentRegionFields: function() { var t = this.currentRegion; return { isNull: this.values[t] === W, value: this.values[t], offset: t } }, renderRegion: function(t, e) { var i, n, r, s, a = this.values,
                        o = this.options,
                        l = this.min,
                        h = this.max,
                        u = this.range,
                        c = this.interval,
                        d = this.target,
                        p = this.canvasHeight,
                        f = this.lineHeight,
                        g = p - f; return n = F(a[t], l, h), s = t * c, i = $.round(g - g * ((n - l) / u)), r = o.get("thresholdColor") && n < o.get("thresholdValue") ? o.get("thresholdColor") : o.get("lineColor"), e && (r = this.calcHighlightColor(r, o)), d.drawLine(s, i, s, i + f, r) } }), I.fn.sparkline.bullet = l = e(I.fn.sparkline._base, { type: "bullet", init: function(t, e, i, n, r) { var s, a, o;
                    l._super.init.call(this, t, e, i, n, r), this.values = e = N(e), (o = e.slice())[0] = null === o[0] ? o[2] : o[0], o[1] = null === e[1] ? o[2] : o[1], s = $.min.apply($, e), a = $.max.apply($, e), s = i.get("base") === W ? s < 0 ? s : 0 : i.get("base"), this.min = s, this.max = a, this.range = a - s, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = n = "auto" === i.get("width") ? "4.0em" : n, this.target = this.$el.simpledraw(n, r, i.get("composite")), e.length || (this.disabled = !0), this.initTarget() }, getRegion: function(t, e, i) { var n = this.target.getShapeAt(t, e, i); return n !== W && this.shapes[n] !== W ? this.shapes[n] : W }, getCurrentRegionFields: function() { var t = this.currentRegion; return { fieldkey: t.substr(0, 1), value: this.values[t.substr(1)], region: t } }, changeHighlight: function(t) { var e, i = this.currentRegion,
                        n = this.valueShapes[i]; switch (delete this.shapes[n], i.substr(0, 1)) {
                        case "r":
                            e = this.renderRange(i.substr(1), t); break;
                        case "p":
                            e = this.renderPerformance(t); break;
                        case "t":
                            e = this.renderTarget(t) } this.valueShapes[i] = e.id, this.shapes[e.id] = i, this.target.replaceWithShape(n, e) }, renderRange: function(t, e) { var i = this.values[t],
                        n = $.round(this.canvasWidth * ((i - this.min) / this.range)),
                        r = this.options.get("rangeColors")[t - 2]; return e && (r = this.calcHighlightColor(r, this.options)), this.target.drawRect(0, 0, n - 1, this.canvasHeight - 1, r, r) }, renderPerformance: function(t) { var e = this.values[1],
                        i = $.round(this.canvasWidth * ((e - this.min) / this.range)),
                        n = this.options.get("performanceColor"); return t && (n = this.calcHighlightColor(n, this.options)), this.target.drawRect(0, $.round(.3 * this.canvasHeight), i - 1, $.round(.4 * this.canvasHeight) - 1, n, n) }, renderTarget: function(t) { var e = this.values[0],
                        i = $.round(this.canvasWidth * ((e - this.min) / this.range) - this.options.get("targetWidth") / 2),
                        n = $.round(.1 * this.canvasHeight),
                        r = this.canvasHeight - 2 * n,
                        s = this.options.get("targetColor"); return t && (s = this.calcHighlightColor(s, this.options)), this.target.drawRect(i, n, this.options.get("targetWidth") - 1, r - 1, s, s) }, render: function() { var t, e, i = this.values.length,
                        n = this.target; if (l._super.render.call(this)) { for (t = 2; t < i; t++) e = this.renderRange(t).append(), this.shapes[e.id] = "r" + t, this.valueShapes["r" + t] = e.id;
                        null !== this.values[1] && (e = this.renderPerformance().append(), this.shapes[e.id] = "p1", this.valueShapes.p1 = e.id), null !== this.values[0] && (e = this.renderTarget().append(), this.shapes[e.id] = "t0", this.valueShapes.t0 = e.id), n.render() } } }), I.fn.sparkline.pie = h = e(I.fn.sparkline._base, { type: "pie", init: function(t, e, i, n, r) { var s, a = 0; if (h._super.init.call(this, t, e, i, n, r), this.shapes = {}, this.valueShapes = {}, this.values = e = I.map(e, Number), "auto" === i.get("width") && (this.width = this.height), 0 < e.length)
                        for (s = e.length; s--;) a += e[s];
                    this.total = a, this.initTarget(), this.radius = $.floor($.min(this.canvasWidth, this.canvasHeight) / 2) }, getRegion: function(t, e, i) { var n = this.target.getShapeAt(t, e, i); return n !== W && this.shapes[n] !== W ? this.shapes[n] : W }, getCurrentRegionFields: function() { var t = this.currentRegion; return { isNull: this.values[t] === W, value: this.values[t], percent: this.values[t] / this.total * 100, color: this.options.get("sliceColors")[t % this.options.get("sliceColors").length], offset: t } }, changeHighlight: function(t) { var e = this.currentRegion,
                        i = this.renderSlice(e, t),
                        n = this.valueShapes[e];
                    delete this.shapes[n], this.target.replaceWithShape(n, i), this.valueShapes[e] = i.id, this.shapes[i.id] = e }, renderSlice: function(t, e) { var i, n, r, s, a, o = this.target,
                        l = this.options,
                        h = this.radius,
                        u = l.get("borderWidth"),
                        c = l.get("offset"),
                        d = 2 * $.PI,
                        p = this.values,
                        f = this.total,
                        g = c ? 2 * $.PI * (c / 360) : 0; for (s = p.length, r = 0; r < s; r++) { if (n = i = g, 0 < f && (n = g + d * (p[r] / f)), t === r) return a = l.get("sliceColors")[r % l.get("sliceColors").length], e && (a = this.calcHighlightColor(a, l)), o.drawPieSlice(h, h, h - u, i, n, W, a);
                        g = n } }, render: function() { var t, e, i = this.target,
                        n = this.values,
                        r = this.options,
                        s = this.radius,
                        a = r.get("borderWidth"),
                        o = r.get("donutWidth"); if (h._super.render.call(this)) { for (a && i.drawCircle(s, s, $.floor(s - a / 2), r.get("borderColor"), W, a).append(), e = n.length; e--;) n[e] && (t = this.renderSlice(e).append(), this.valueShapes[e] = t.id, this.shapes[t.id] = e);
                        o && i.drawCircle(s, s, s - o, r.get("donutColor"), r.get("donutColor"), 0).append(), i.render() } } }), I.fn.sparkline.box = w = e(I.fn.sparkline._base, { type: "box", init: function(t, e, i, n, r) { w._super.init.call(this, t, e, i, n, r), this.values = I.map(e, Number), this.width = "auto" === i.get("width") ? "4.0em" : n, this.initTarget(), this.values.length || (this.disabled = 1) }, getRegion: function() { return 1 }, getCurrentRegionFields: function() { var t = [{ field: "lq", value: this.quartiles[0] }, { field: "med", value: this.quartiles[1] }, { field: "uq", value: this.quartiles[2] }]; return this.loutlier !== W && t.push({ field: "lo", value: this.loutlier }), this.routlier !== W && t.push({ field: "ro", value: this.routlier }), this.lwhisker !== W && t.push({ field: "lw", value: this.lwhisker }), this.rwhisker !== W && t.push({ field: "rw", value: this.rwhisker }), t }, render: function() { var t, e, i, n, r, s, a, o, l, h, u, c = this.target,
                        d = this.values,
                        p = d.length,
                        f = this.options,
                        g = this.canvasWidth,
                        m = this.canvasHeight,
                        v = f.get("chartRangeMin") === W ? $.min.apply($, d) : f.get("chartRangeMin"),
                        y = f.get("chartRangeMax") === W ? $.max.apply($, d) : f.get("chartRangeMax"),
                        b = 0; if (w._super.render.call(this)) { if (f.get("raw")) f.get("showOutliers") && 5 < d.length ? (e = d[0], t = d[1], n = d[2], r = d[3], s = d[4], a = d[5], o = d[6]) : (t = d[0], n = d[1], r = d[2], s = d[3], a = d[4]);
                        else if (d.sort(function(t, e) { return t - e }), n = x(d, 1), r = x(d, 2), i = (s = x(d, 3)) - n, f.get("showOutliers")) { for (t = a = W, l = 0; l < p; l++) t === W && d[l] > n - i * f.get("outlierIQR") && (t = d[l]), d[l] < s + i * f.get("outlierIQR") && (a = d[l]);
                            e = d[0], o = d[p - 1] } else t = d[0], a = d[p - 1];
                        this.quartiles = [n, r, s], this.lwhisker = t, this.rwhisker = a, this.loutlier = e, this.routlier = o, u = g / (y - v + 1), f.get("showOutliers") && (b = $.ceil(f.get("spotRadius")), u = (g -= 2 * $.ceil(f.get("spotRadius"))) / (y - v + 1), e < t && c.drawCircle((e - v) * u + b, m / 2, f.get("spotRadius"), f.get("outlierLineColor"), f.get("outlierFillColor")).append(), a < o && c.drawCircle((o - v) * u + b, m / 2, f.get("spotRadius"), f.get("outlierLineColor"), f.get("outlierFillColor")).append()), c.drawRect($.round((n - v) * u + b), $.round(.1 * m), $.round((s - n) * u), $.round(.8 * m), f.get("boxLineColor"), f.get("boxFillColor")).append(), c.drawLine($.round((t - v) * u + b), $.round(m / 2), $.round((n - v) * u + b), $.round(m / 2), f.get("lineColor")).append(), c.drawLine($.round((t - v) * u + b), $.round(m / 4), $.round((t - v) * u + b), $.round(m - m / 4), f.get("whiskerColor")).append(), c.drawLine($.round((a - v) * u + b), $.round(m / 2), $.round((s - v) * u + b), $.round(m / 2), f.get("lineColor")).append(), c.drawLine($.round((a - v) * u + b), $.round(m / 4), $.round((a - v) * u + b), $.round(m - m / 4), f.get("whiskerColor")).append(), c.drawLine($.round((r - v) * u + b), $.round(.1 * m), $.round((r - v) * u + b), $.round(.9 * m), f.get("medianColor")).append(), f.get("target") && (h = $.ceil(f.get("spotRadius")), c.drawLine($.round((f.get("target") - v) * u + b), $.round(m / 2 - h), $.round((f.get("target") - v) * u + b), $.round(m / 2 + h), f.get("targetColor")).append(), c.drawLine($.round((f.get("target") - v) * u + b - h), $.round(m / 2), $.round((f.get("target") - v) * u + b + h), $.round(m / 2), f.get("targetColor")).append()), c.render() } } }), p = e({ init: function(t, e, i, n) { this.target = t, this.id = e, this.type = i, this.args = n }, append: function() { return this.target.appendShape(this), this } }), f = e({ _pxregex: /(\d+)(px)?\s*$/i, init: function(t, e, i) { t && (this.width = t, this.height = e, this.target = i, this.lastShapeId = null, i[0] && (i = i[0]), I.data(i, "_jqs_vcanvas", this)) }, drawLine: function(t, e, i, n, r, s) { return this.drawShape([
                        [t, e],
                        [i, n]
                    ], r, s) }, drawShape: function(t, e, i, n) { return this._genShape("Shape", [t, e, i, n]) }, drawCircle: function(t, e, i, n, r, s) { return this._genShape("Circle", [t, e, i, n, r, s]) }, drawPieSlice: function(t, e, i, n, r, s, a) { return this._genShape("PieSlice", [t, e, i, n, r, s, a]) }, drawRect: function(t, e, i, n, r, s) { return this._genShape("Rect", [t, e, i, n, r, s]) }, getElement: function() { return this.canvas }, getLastShapeId: function() { return this.lastShapeId }, reset: function() { alert("reset not implemented") }, _insert: function(t, e) { I(e).html(t) }, _calculatePixelDims: function(t, e, i) { var n;
                    n = this._pxregex.exec(e), this.pixelHeight = n ? n[1] : I(i).height(), n = this._pxregex.exec(t), this.pixelWidth = n ? n[1] : I(i).width() }, _genShape: function(t, e) { var i = S++; return e.unshift(i), new p(this, i, t, e) }, appendShape: function(t) { alert("appendShape not implemented") }, replaceWithShape: function(t, e) { alert("replaceWithShape not implemented") }, insertAfterShape: function(t, e) { alert("insertAfterShape not implemented") }, removeShapeId: function(t) { alert("removeShapeId not implemented") }, getShapeAt: function(t, e, i) { alert("getShapeAt not implemented") }, render: function() { alert("render not implemented") } }), g = e(f, { init: function(t, e, i, n) { g._super.init.call(this, t, e, i), this.canvas = C.createElement("canvas"), i[0] && (i = i[0]), I.data(i, "_jqs_vcanvas", this), I(this.canvas).css({ display: "inline-block", width: t, height: e, verticalAlign: "top" }), this._insert(this.canvas, i), this._calculatePixelDims(t, e, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = n, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = W, I(this.canvas).css({ width: this.pixelWidth, height: this.pixelHeight }) }, _getContext: function(t, e, i) { var n = this.canvas.getContext("2d"); return t !== W && (n.strokeStyle = t), n.lineWidth = i === W ? 1 : i, e !== W && (n.fillStyle = e), n }, reset: function() { this._getContext().clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = W }, _drawShape: function(t, e, i, n, r) { var s, a, o = this._getContext(i, n, r); for (o.beginPath(), o.moveTo(e[0][0] + .5, e[0][1] + .5), s = 1, a = e.length; s < a; s++) o.lineTo(e[s][0] + .5, e[s][1] + .5);
                    i !== W && o.stroke(), n !== W && o.fill(), this.targetX !== W && this.targetY !== W && o.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t) }, _drawCircle: function(t, e, i, n, r, s, a) { var o = this._getContext(r, s, a);
                    o.beginPath(), o.arc(e, i, n, 0, 2 * $.PI, !1), this.targetX !== W && this.targetY !== W && o.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t), r !== W && o.stroke(), s !== W && o.fill() }, _drawPieSlice: function(t, e, i, n, r, s, a, o) { var l = this._getContext(a, o);
                    l.beginPath(), l.moveTo(e, i), l.arc(e, i, n, r, s, !1), l.lineTo(e, i), l.closePath(), a !== W && l.stroke(), o && l.fill(), this.targetX !== W && this.targetY !== W && l.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t) }, _drawRect: function(t, e, i, n, r, s, a) { return this._drawShape(t, [
                        [e, i],
                        [e + n, i],
                        [e + n, i + r],
                        [e, i + r],
                        [e, i]
                    ], s, a) }, appendShape: function(t) { return this.shapes[t.id] = t, this.shapeseq.push(t.id), this.lastShapeId = t.id, t.id }, replaceWithShape: function(t, e) { var i, n = this.shapeseq; for (this.shapes[e.id] = e, i = n.length; i--;) n[i] == t && (n[i] = e.id);
                    delete this.shapes[t] }, replaceWithShapes: function(t, e) { var i, n, r, s = this.shapeseq,
                        a = {}; for (n = t.length; n--;) a[t[n]] = !0; for (n = s.length; n--;) a[i = s[n]] && (s.splice(n, 1), delete this.shapes[i], r = n); for (n = e.length; n--;) s.splice(r, 0, e[n].id), this.shapes[e[n].id] = e[n] }, insertAfterShape: function(t, e) { var i, n = this.shapeseq; for (i = n.length; i--;)
                        if (n[i] === t) return n.splice(i + 1, 0, e.id), void(this.shapes[e.id] = e) }, removeShapeId: function(t) { var e, i = this.shapeseq; for (e = i.length; e--;)
                        if (i[e] === t) { i.splice(e, 1); break } delete this.shapes[t] }, getShapeAt: function(t, e, i) { return this.targetX = e, this.targetY = i, this.render(), this.currentTargetShapeId }, render: function() { var t, e, i = this.shapeseq,
                        n = this.shapes,
                        r = i.length; for (this._getContext().clearRect(0, 0, this.pixelWidth, this.pixelHeight), e = 0; e < r; e++) this["_draw" + (t = n[i[e]]).type].apply(this, t.args);
                    this.interact || (this.shapes = {}, this.shapeseq = []) } }), m = e(f, { init: function(t, e, i) { var n;
                    m._super.init.call(this, t, e, i), i[0] && (i = i[0]), I.data(i, "_jqs_vcanvas", this), this.canvas = C.createElement("span"), I(this.canvas).css({ display: "inline-block", position: "relative", overflow: "hidden", width: t, height: e, margin: "0px", padding: "0px", verticalAlign: "top" }), this._insert(this.canvas, i), this._calculatePixelDims(t, e, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, n = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", n), this.group = I(this.canvas).children()[0], this.rendered = !1, this.prerender = "" }, _drawShape: function(t, e, i, n, r) { var s, a, o, l, h, u, c = []; for (u = 0, h = e.length; u < h; u++) c[u] = e[u][0] + "," + e[u][1]; return s = c.splice(0, 1), r = r === W ? 1 : r, a = i === W ? ' stroked="false" ' : ' strokeWeight="' + r + 'px" strokeColor="' + i + '" ', o = n === W ? ' filled="false"' : ' fillColor="' + n + '" filled="true" ', l = c[0] === c[c.length - 1] ? "x " : "", '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + t + '" ' + a + o + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + s + " l " + c.join(", ") + " " + l + 'e"> </v:shape>' }, _drawCircle: function(t, e, i, n, r, s, a) { return '<v:oval  id="jqsshape' + t + '" ' + (r === W ? ' stroked="false" ' : ' strokeWeight="' + a + 'px" strokeColor="' + r + '" ') + (s === W ? ' filled="false"' : ' fillColor="' + s + '" filled="true" ') + ' style="position:absolute;top:' + (i -= n) + "px; left:" + (e -= n) + "px; width:" + 2 * n + "px; height:" + 2 * n + 'px"></v:oval>' }, _drawPieSlice: function(t, e, i, n, r, s, a, o) { var l, h, u, c, d, p, f; if (r === s) return ""; if (s - r == 2 * $.PI && (r = 0, s = 2 * $.PI), h = e + $.round($.cos(r) * n), u = i + $.round($.sin(r) * n), c = e + $.round($.cos(s) * n), d = i + $.round($.sin(s) * n), h === c && u === d) { if (s - r < $.PI) return "";
                        h = c = e + n, u = d = i } return h === c && u === d && s - r < $.PI ? "" : (l = [e - n, i - n, e + n, i + n, h, u, c, d], p = a === W ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + a + '" ', f = o === W ? ' filled="false"' : ' fillColor="' + o + '" filled="true" ', '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + t + '" ' + p + f + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + e + "," + i + " wa " + l.join(", ") + ' x e"> </v:shape>') }, _drawRect: function(t, e, i, n, r, s, a) { return this._drawShape(t, [
                        [e, i],
                        [e, i + r],
                        [e + n, i + r],
                        [e + n, i],
                        [e, i]
                    ], s, a) }, reset: function() { this.group.innerHTML = "" }, appendShape: function(t) { var e = this["_draw" + t.type].apply(this, t.args); return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", e) : this.prerender += e, this.lastShapeId = t.id, t.id }, replaceWithShape: function(t, e) { var i = I("#jqsshape" + t),
                        n = this["_draw" + e.type].apply(this, e.args);
                    i[0].outerHTML = n }, replaceWithShapes: function(t, e) { var i, n = I("#jqsshape" + t[0]),
                        r = "",
                        s = e.length; for (i = 0; i < s; i++) r += this["_draw" + e[i].type].apply(this, e[i].args); for (n[0].outerHTML = r, i = 1; i < t.length; i++) I("#jqsshape" + t[i]).remove() }, insertAfterShape: function(t, e) { var i = I("#jqsshape" + t),
                        n = this["_draw" + e.type].apply(this, e.args);
                    i[0].insertAdjacentHTML("afterEnd", n) }, removeShapeId: function(t) { var e = I("#jqsshape" + t);
                    this.group.removeChild(e[0]) }, getShapeAt: function(t, e, i) { return t.id.substr(8) }, render: function() { this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0) } }) }, "function" == typeof define && define.amd ? define(["jquery"], t) : jQuery && !jQuery.fn.sparkline && t(jQuery) }(document, Math),
    function(v) { "use strict";

        function a(t, e) { this.isInit = !0, this.itemsArray = [], this.$element = v(t), this.$element.hide(), this.isSelect = "SELECT" === t.tagName, this.multiple = this.isSelect && t.hasAttribute("multiple"), this.objectItems = e && e.itemValue, this.placeholderText = t.hasAttribute("placeholder") ? this.$element.attr("placeholder") : "", this.inputSize = Math.max(1, this.placeholderText.length), this.$container = v('<div class="bootstrap-tagsinput"></div>'), this.$input = v('<input type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container), this.$element.before(this.$container), this.build(e), this.isInit = !1 }

        function s(t, e) { if ("function" != typeof t[e]) { var i = t[e];
                t[e] = function(t) { return t[i] } } }

        function o(t, e) { if ("function" != typeof t[e]) { var i = t[e];
                t[e] = function() { return i } } }

        function y(t) { return t ? e.text(t).html() : "" }

        function h(t) { var e = 0; if (document.selection) { t.focus(); var i = document.selection.createRange();
                i.moveStart("character", -t.value.length), e = i.text.length } else(t.selectionStart || "0" == t.selectionStart) && (e = t.selectionStart); return e } var u = { tagClass: function(t) { return "label label-info" }, itemValue: function(t) { return t ? t.toString() : t }, itemText: function(t) { return this.itemValue(t) }, itemTitle: function(t) { return null }, freeInput: !0, addOnBlur: !0, maxTags: void 0, maxChars: void 0, confirmKeys: [13, 44], delimiter: ",", delimiterRegex: null, cancelConfirmKeysOnEmpty: !1, onTagExists: function(t, e) { e.hide().fadeIn() }, trimValue: !1, allowDuplicates: !1 };
        a.prototype = { constructor: a, add: function(t, e, i) { var n = this; if (!(n.options.maxTags && n.itemsArray.length >= n.options.maxTags) && (!1 === t || t)) { if ("string" == typeof t && n.options.trimValue && (t = v.trim(t)), "object" == typeof t && !n.objectItems) throw "Can't add objects when itemValue option is not set"; if (!t.toString().match(/^\s*$/)) { if (n.isSelect && !n.multiple && 0 < n.itemsArray.length && n.remove(n.itemsArray[0]), "string" == typeof t && "INPUT" === this.$element[0].tagName) { var r = n.options.delimiterRegex ? n.options.delimiterRegex : n.options.delimiter,
                                s = t.split(r); if (1 < s.length) { for (var a = 0; a < s.length; a++) this.add(s[a], !0); return void(e || n.pushVal()) } } var o = n.options.itemValue(t),
                            l = n.options.itemText(t),
                            h = n.options.tagClass(t),
                            u = n.options.itemTitle(t),
                            c = v.grep(n.itemsArray, function(t) { return n.options.itemValue(t) === o })[0]; if (!c || n.options.allowDuplicates) { if (!(n.items().toString().length + t.length + 1 > n.options.maxInputLength)) { var d = v.Event("beforeItemAdd", { item: t, cancel: !1, options: i }); if (n.$element.trigger(d), !d.cancel) { n.itemsArray.push(t); var p = v('<span class="tag ' + y(h) + (null !== u ? '" title="' + u : "") + '">' + y(l) + '<span data-role="remove"></span></span>');
                                    p.data("item", t), n.findInputWrapper().before(p), p.after(" "); var f = v('option[value="' + encodeURIComponent(o) + '"]', n.$element).length || v('option[value="' + y(o) + '"]', n.$element).length; if (n.isSelect && !f) { var g = v("<option selected>" + y(l) + "</option>");
                                        g.data("item", t), g.attr("value", o), n.$element.append(g) } e || n.pushVal(), (n.options.maxTags === n.itemsArray.length || n.items().toString().length === n.options.maxInputLength) && n.$container.addClass("bootstrap-tagsinput-max"), v(".typeahead, .twitter-typeahead", n.$container).length && n.$input.typeahead("val", ""), this.isInit ? n.$element.trigger(v.Event("itemAddedOnInit", { item: t, options: i })) : n.$element.trigger(v.Event("itemAdded", { item: t, options: i })) } } } else if (n.options.onTagExists) { var m = v(".tag", n.$container).filter(function() { return v(this).data("item") === c });
                            n.options.onTagExists(t, m) } } } }, remove: function(e, t, i) { var n = this; if (n.objectItems && (e = (e = "object" == typeof e ? v.grep(n.itemsArray, function(t) { return n.options.itemValue(t) == n.options.itemValue(e) }) : v.grep(n.itemsArray, function(t) { return n.options.itemValue(t) == e }))[e.length - 1]), e) { var r = v.Event("beforeItemRemove", { item: e, cancel: !1, options: i }); if (n.$element.trigger(r), r.cancel) return;
                    v(".tag", n.$container).filter(function() { return v(this).data("item") === e }).remove(), v("option", n.$element).filter(function() { return v(this).data("item") === e }).remove(), -1 !== v.inArray(e, n.itemsArray) && n.itemsArray.splice(v.inArray(e, n.itemsArray), 1) } t || n.pushVal(), n.options.maxTags > n.itemsArray.length && n.$container.removeClass("bootstrap-tagsinput-max"), n.$element.trigger(v.Event("itemRemoved", { item: e, options: i })) }, removeAll: function() { for (v(".tag", this.$container).remove(), v("option", this.$element).remove(); 0 < this.itemsArray.length;) this.itemsArray.pop();
                this.pushVal() }, refresh: function() { var s = this;
                v(".tag", s.$container).each(function() { var t = v(this),
                        e = t.data("item"),
                        i = s.options.itemValue(e),
                        n = s.options.itemText(e),
                        r = s.options.tagClass(e);
                    t.attr("class", null), t.addClass("tag " + y(r)), t.contents().filter(function() { return 3 == this.nodeType })[0].nodeValue = y(n), s.isSelect && v("option", s.$element).filter(function() { return v(this).data("item") === e }).attr("value", i) }) }, items: function() { return this.itemsArray }, pushVal: function() { var e = this,
                    t = v.map(e.items(), function(t) { return e.options.itemValue(t).toString() });
                e.$element.val(t, !0).trigger("change") }, build: function(t) { var l = this; if (l.options = v.extend({}, u, t), l.objectItems && (l.options.freeInput = !1), s(l.options, "itemValue"), s(l.options, "itemText"), o(l.options, "tagClass"), l.options.typeahead) { var n = l.options.typeahead || {};
                    o(n, "source"), l.$input.typeahead(v.extend({}, n, { source: function(t, r) {
                            function e(t) { for (var e = [], i = 0; i < t.length; i++) { var n = l.options.itemText(t[i]);
                                    s[n] = t[i], e.push(n) } r(e) } this.map = {}; var s = this.map,
                                i = n.source(t);
                            v.isFunction(i.success) ? i.success(e) : v.isFunction(i.then) ? i.then(e) : v.when(i).then(e) }, updater: function(t) { return l.add(this.map[t]), this.map[t] }, matcher: function(t) { return -1 !== t.toLowerCase().indexOf(this.query.trim().toLowerCase()) }, sorter: function(t) { return t.sort() }, highlighter: function(t) { var e = new RegExp("(" + this.query + ")", "gi"); return t.replace(e, "<strong>$1</strong>") } })) } if (l.options.typeaheadjs) { var i, e = null,
                        r = l.options.typeaheadjs;
                    i = v.isArray(r) ? (e = r[0], r[1]) : r, l.$input.typeahead(e, i).on("typeahead:selected", v.proxy(function(t, e) { i.valueKey ? l.add(e[i.valueKey]) : l.add(e), l.$input.typeahead("val", "") }, l)) } l.$container.on("click", v.proxy(function(t) { l.$element.attr("disabled") || l.$input.removeAttr("disabled"), l.$input.focus() }, l)), l.options.addOnBlur && l.options.freeInput && l.$input.on("focusout", v.proxy(function(t) { 0 === v(".typeahead, .twitter-typeahead", l.$container).length && (l.add(l.$input.val()), l.$input.val("")) }, l)), l.$container.on("keydown", "input", v.proxy(function(t) { var e = v(t.target),
                        i = l.findInputWrapper(); if (l.$element.attr("disabled")) l.$input.attr("disabled", "disabled");
                    else { switch (t.which) {
                            case 8:
                                if (0 === h(e[0])) { var n = i.prev();
                                    n.length && l.remove(n.data("item")) } break;
                            case 46:
                                if (0 === h(e[0])) { var r = i.next();
                                    r.length && l.remove(r.data("item")) } break;
                            case 37:
                                var s = i.prev();
                                0 === e.val().length && s[0] && (s.before(i), e.focus()); break;
                            case 39:
                                var a = i.next();
                                0 === e.val().length && a[0] && (a.after(i), e.focus()) } var o = e.val().length;
                        Math.ceil(o / 5), e.attr("size", Math.max(this.inputSize, e.val().length)) } }, l)), l.$container.on("keypress", "input", v.proxy(function(t) { var e = v(t.target); if (l.$element.attr("disabled")) l.$input.attr("disabled", "disabled");
                    else { var s, i, a, n = e.val(),
                            r = l.options.maxChars && n.length >= l.options.maxChars;
                        l.options.freeInput && (s = t, i = l.options.confirmKeys, a = !1, v.each(i, function(t, e) { if ("number" == typeof e && s.which === e) return !(a = !0); if (s.which === e.which) { var i = !e.hasOwnProperty("altKey") || s.altKey === e.altKey,
                                    n = !e.hasOwnProperty("shiftKey") || s.shiftKey === e.shiftKey,
                                    r = !e.hasOwnProperty("ctrlKey") || s.ctrlKey === e.ctrlKey; if (i && n && r) return !(a = !0) } }), a || r) && (0 !== n.length && (l.add(r ? n.substr(0, l.options.maxChars) : n), e.val("")), !1 === l.options.cancelConfirmKeysOnEmpty && t.preventDefault()); var o = e.val().length;
                        Math.ceil(o / 5), e.attr("size", Math.max(this.inputSize, e.val().length)) } }, l)), l.$container.on("click", "[data-role=remove]", v.proxy(function(t) { l.$element.attr("disabled") || l.remove(v(t.target).closest(".tag").data("item")) }, l)), l.options.itemValue === u.itemValue && ("INPUT" === l.$element[0].tagName ? l.add(l.$element.val()) : v("option", l.$element).each(function() { l.add(v(this).attr("value"), !0) })) }, destroy: function() { this.$container.off("keypress", "input"), this.$container.off("click", "[role=remove]"), this.$container.remove(), this.$element.removeData("tagsinput"), this.$element.show() }, focus: function() { this.$input.focus() }, input: function() { return this.$input }, findInputWrapper: function() { for (var t = this.$input[0], e = this.$container[0]; t && t.parentNode !== e;) t = t.parentNode; return v(t) } }, v.fn.tagsinput = function(i, n, r) { var s = []; return this.each(function() { var t = v(this).data("tagsinput"); if (t)
                    if (i || n) { if (void 0 !== t[i]) { if (3 === t[i].length && void 0 !== r) var e = t[i](n, null, r);
                            else e = t[i](n);
                            void 0 !== e && s.push(e) } } else s.push(t);
                else t = new a(this, i), v(this).data("tagsinput", t), s.push(t), "SELECT" === this.tagName && v("option", v(this)).attr("selected", "selected"), v(this).val(v(this).val()) }), "string" == typeof i ? 1 < s.length ? s : s[0] : s }, v.fn.tagsinput.Constructor = a; var e = v("<div />");
        v(function() { v("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput() }) }(window.jQuery);
var $jscomp = { scope: {}, findInternal: function(t, e, i) { t instanceof String && (t = String(t)); for (var n = t.length, r = 0; r < n; r++) { var s = t[r]; if (e.call(i, s, r, t)) return { i: r, v: s } } return { i: -1, v: void 0 } } };
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, i) { if (i.get || i.set) throw new TypeError("ES3 does not support getters and setters.");
        t != Array.prototype && t != Object.prototype && (t[e] = i.value) }, $jscomp.getGlobal = function(t) { return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function(t, e, i, n) { if (e) { for (i = $jscomp.global, t = t.split("."), n = 0; n < t.length - 1; n++) { var r = t[n];
                r in i || (i[r] = {}), i = i[r] }(e = e(n = i[t = t[t.length - 1]])) != n && null != e && $jscomp.defineProperty(i, t, { configurable: !0, writable: !0, value: e }) } }, $jscomp.polyfill("Array.prototype.find", function(t) { return t || function(t, e) { return $jscomp.findInternal(this, t, e).v } }, "es6-impl", "es3"),
    function(t, e, i) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(e || i) }(function(a) { var o = function(h, b, x) { var w = { invalid: [], getCaret: function() { try { var t, e = 0,
                            i = h.get(0),
                            n = document.selection,
                            r = i.selectionStart; return n && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((t = n.createRange()).moveStart("character", -w.val().length), e = t.text.length) : (r || "0" === r) && (e = r), e } catch (t) {} }, setCaret: function(t) { try { if (h.is(":focus")) { var e, i = h.get(0);
                            i.setSelectionRange ? i.setSelectionRange(t, t) : ((e = i.createTextRange()).collapse(!0), e.moveEnd("character", t), e.moveStart("character", t), e.select()) } } catch (t) {} }, events: function() { h.on("keydown.mask", function(t) { h.data("mask-keycode", t.keyCode || t.which), h.data("mask-previus-value", h.val()), h.data("mask-previus-caret-pos", w.getCaret()), w.maskDigitPosMapOld = w.maskDigitPosMap }).on(a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", w.behaviour).on("paste.mask drop.mask", function() { setTimeout(function() { h.keydown().keyup() }, 100) }).on("change.mask", function() { h.data("changed", !0) }).on("blur.mask", function() { s === w.val() || h.data("changed") || h.trigger("change"), h.data("changed", !1) }).on("blur.mask", function() { s = w.val() }).on("focus.mask", function(t) {!0 === x.selectOnFocus && a(t.target).select() }).on("focusout.mask", function() { x.clearIfNotMatch && !n.test(w.val()) && w.val("") }) }, getRegexMask: function() { for (var t, e, i, n, r = [], s = 0; s < b.length; s++)(t = _.translation[b.charAt(s)]) ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), i = t.optional, (t = t.recursive) ? (r.push(b.charAt(s)), n = { digit: b.charAt(s), pattern: e }) : r.push(i || t ? e + "?" : e)) : r.push(b.charAt(s).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")); return r = r.join(""), n && (r = r.replace(new RegExp("(" + n.digit + "(.*" + n.digit + ")?)"), "($1)?").replace(new RegExp(n.digit, "g"), n.pattern)), new RegExp(r) }, destroyEvents: function() { h.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask ")) }, val: function(t) { var e = h.is("input") ? "val" : "text"; return 0 < arguments.length ? (h[e]() !== t && h[e](t), h) : h[e]() }, calculateCaretPosition: function() { var t = h.data("mask-previus-value") || "",
                        e = w.getMasked(),
                        i = w.getCaret(); if (t !== e) { var n, r = h.data("mask-previus-caret-pos") || 0,
                            s = (e = e.length, t.length),
                            a = t = 0,
                            o = 0,
                            l = 0; for (n = i; n < e && w.maskDigitPosMap[n]; n++) a++; for (n = i - 1; 0 <= n && w.maskDigitPosMap[n]; n--) t++; for (n = i - 1; 0 <= n; n--) w.maskDigitPosMap[n] && o++; for (n = r - 1; 0 <= n; n--) w.maskDigitPosMapOld[n] && l++;
                        s < i ? i = 10 * e : i <= r && r !== s ? w.maskDigitPosMapOld[i] || (i = (r = i) - (l - o) - t, w.maskDigitPosMap[i] && (i = r)) : r < i && (i = i + (o - l) + a) } return i }, behaviour: function(t) { t = t || window.event, w.invalid = []; var e = h.data("mask-keycode"); if (-1 === a.inArray(e, _.byPassKeys)) { e = w.getMasked(); var i = w.getCaret(); return setTimeout(function() { w.setCaret(w.calculateCaretPosition()) }, a.jMaskGlobals.keyStrokeCompensation), w.val(e), w.setCaret(i), w.callbacks(t) } }, getMasked: function(t, e) { var i, n, r, s = [],
                        a = void 0 === e ? w.val() : e + "",
                        o = 0,
                        l = b.length,
                        h = 0,
                        u = a.length,
                        c = 1,
                        d = "push",
                        p = -1,
                        f = 0,
                        g = []; for (n = x.reverse ? (d = "unshift", c = -1, i = 0, o = l - 1, h = u - 1, function() { return -1 < o && -1 < h }) : (i = l - 1, function() { return o < l && h < u }); n();) { var m = b.charAt(o),
                            v = a.charAt(h),
                            y = _.translation[m];
                        y ? (v.match(y.pattern) ? (s[d](v), y.recursive && (-1 === p ? p = o : o === i && o !== p && (o = p - c), i === p && (o -= c)), o += c) : v === r ? (f--, r = void 0) : y.optional ? (o += c, h -= c) : y.fallback ? (s[d](y.fallback), o += c, h -= c) : w.invalid.push({ p: h, v: v, e: y.pattern }), h += c) : (t || s[d](m), v === m ? (g.push(h), h += c) : (r = m, g.push(h + f), f++), o += c) } return a = b.charAt(i), l !== u + 1 || _.translation[a] || s.push(a), s = s.join(""), w.mapMaskdigitPositions(s, g, u), s }, mapMaskdigitPositions: function(t, e, i) { for (t = x.reverse ? t.length - i : 0, w.maskDigitPosMap = {}, i = 0; i < e.length; i++) w.maskDigitPosMap[e[i] + t] = 1 }, callbacks: function(t) { var e = w.val(),
                        i = e !== s,
                        n = [e, t, h, x],
                        r = function(t, e, i) { "function" == typeof x[t] && e && x[t].apply(this, i) };
                    r("onChange", !0 === i, n), r("onKeyPress", !0 === i, n), r("onComplete", e.length === b.length, n), r("onInvalid", 0 < w.invalid.length, [e, t, h, w.invalid, x]) } };
            h = a(h); var n, _ = this,
                s = w.val();
            b = "function" == typeof b ? b(w.val(), void 0, h, x) : b, _.mask = b, _.options = x, _.remove = function() { var t = w.getCaret(); return _.options.placeholder && h.removeAttr("placeholder"), h.data("mask-maxlength") && h.removeAttr("maxlength"), w.destroyEvents(), w.val(_.getCleanVal()), w.setCaret(t), h }, _.getCleanVal = function() { return w.getMasked(!0) }, _.getMaskedVal = function(t) { return w.getMasked(!1, t) }, _.init = function(t) { if (t = t || !1, x = x || {}, _.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch, _.byPassKeys = a.jMaskGlobals.byPassKeys, _.translation = a.extend({}, a.jMaskGlobals.translation, x.translation), _ = a.extend(!0, {}, _, x), n = w.getRegexMask(), t) w.events(), w.val(w.getMasked());
                else { x.placeholder && h.attr("placeholder", x.placeholder), h.data("mask") && h.attr("autocomplete", "off"); for (var e = !(t = 0); t < b.length; t++) { var i = _.translation[b.charAt(t)]; if (i && i.recursive) { e = !1; break } } e && h.attr("maxlength", b.length).data("mask-maxlength", !0), w.destroyEvents(), w.events(), t = w.getCaret(), w.val(w.getMasked()), w.setCaret(t) } }, _.init(!h.is("input")) };
        a.maskWatchers = {}; var e = function() { var t = a(this),
                    e = {},
                    i = t.attr("data-mask"); if (t.attr("data-mask-reverse") && (e.reverse = !0), t.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0), "true" === t.attr("data-mask-selectonfocus") && (e.selectOnFocus = !0), l(t, i, e)) return t.data("mask", new o(this, i, e)) },
            l = function(t, e, i) { i = i || {}; var n = a(t).data("mask"),
                    r = JSON.stringify;
                t = a(t).val() || a(t).text(); try { return "function" == typeof e && (e = e(t)), "object" != typeof n || r(n.options) !== r(i) || n.mask !== e } catch (t) {} },
            t = function(t) { var e, i = document.createElement("div"); return (e = (t = "on" + t) in i) || (i.setAttribute(t, "return;"), e = "function" == typeof i[t]), e };
        a.fn.mask = function(t, e) { e = e || {}; var i = this.selector,
                n = (r = a.jMaskGlobals).watchInterval,
                r = e.watchInputs || r.watchInputs,
                s = function() { if (l(this, t, e)) return a(this).data("mask", new o(this, t, e)) }; return a(this).each(s), i && "" !== i && r && (clearInterval(a.maskWatchers[i]), a.maskWatchers[i] = setInterval(function() { a(document).find(i).each(s) }, n)), this }, a.fn.masked = function(t) { return this.data("mask").getMaskedVal(t) }, a.fn.unmask = function() { return clearInterval(a.maskWatchers[this.selector]), delete a.maskWatchers[this.selector], this.each(function() { var t = a(this).data("mask");
                t && t.remove().removeData("mask") }) }, a.fn.cleanVal = function() { return this.data("mask").getCleanVal() }, a.applyDataMask = function(t) {
            ((t = t || a.jMaskGlobals.maskElements) instanceof a ? t : a(t)).filter(a.jMaskGlobals.dataMaskAttr).each(e) }, t = { maskElements: "input,td,span,div", dataMaskAttr: "*[data-mask]", dataMask: !0, watchInterval: 300, watchInputs: !0, keyStrokeCompensation: 10, useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && t("input"), watchDataMask: !1, byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91], translation: { 0: { pattern: /\d/ }, 9: { pattern: /\d/, optional: !0 }, "#": { pattern: /\d/, recursive: !0 }, A: { pattern: /[a-zA-Z0-9]/ }, S: { pattern: /[a-zA-Z]/ } } }, a.jMaskGlobals = a.jMaskGlobals || {}, (t = a.jMaskGlobals = a.extend(!0, {}, t, a.jMaskGlobals)).dataMask && a.applyDataMask(), setInterval(function() { a.jMaskGlobals.watchDataMask && a.applyDataMask() }, t.watchInterval) }, window.jQuery, window.Zepto),
    function(l, r, t, e) { "use strict";

        function n(t, e) { this.options = l.extend(!0, {}, i, e), this.main = l(t), this.nav = this.main.children("ul"), this.steps = l("li > a", this.nav), this.container = this.main.children("div"), this.pages = this.container.children("div"), this.current_index = null, this.options.toolbarSettings.toolbarButtonPosition = "right" === this.options.toolbarSettings.toolbarButtonPosition ? "end" : this.options.toolbarSettings.toolbarButtonPosition, this.options.toolbarSettings.toolbarButtonPosition = "left" === this.options.toolbarSettings.toolbarButtonPosition ? "start" : this.options.toolbarSettings.toolbarButtonPosition, this.options.theme = null === this.options.theme || "" === this.options.theme ? "default" : this.options.theme, this.init() } var i = { selected: 0, keyNavigation: !0, autoAdjustHeight: !0, cycleSteps: !1, backButtonSupport: !0, useURLhash: !0, showStepURLhash: !0, lang: { next: "Next", previous: "Previous" }, toolbarSettings: { toolbarPosition: "bottom", toolbarButtonPosition: "end", showNextButton: !0, showPreviousButton: !0, toolbarExtraButtons: [] }, anchorSettings: { anchorClickable: !0, enableAllAnchors: !1, markDoneStep: !0, markAllPreviousStepsAsDone: !0, removeDoneStepOnNavigateBack: !1, enableAnchorOnDoneStep: !0 }, contentURL: null, contentCache: !0, ajaxSettings: {}, disabledSteps: [], errorSteps: [], hiddenSteps: [], theme: "default", transitionEffect: "none", transitionSpeed: "400" };
        l.extend(n.prototype, { init: function() { this._setElements(), this._setToolbar(), this._setEvents(); var t = this.options.selected; if (this.options.useURLhash) { var e = r.location.hash; if (e && 0 < e.length) { var i = l("a[href*='" + e + "']", this.nav); if (0 < i.length) { var n = this.steps.index(i);
                            t = 0 <= n ? n : t } } } 0 < t && this.options.anchorSettings.markDoneStep && this.options.anchorSettings.markAllPreviousStepsAsDone && this.steps.eq(t).parent("li").prevAll().addClass("done"), this._showStep(t) }, _setElements: function() { this.main.addClass("sw-main sw-theme-" + this.options.theme), this.nav.addClass("nav nav-tabs step-anchor").children("li").addClass("nav-item").children("a").addClass("nav-link"), !1 !== this.options.anchorSettings.enableAllAnchors && !1 !== this.options.anchorSettings.anchorClickable && this.steps.parent("li").addClass("clickable"), this.container.addClass("sw-container tab-content"), this.pages.addClass("tab-pane step-content"); var i = this; return this.options.disabledSteps && 0 < this.options.disabledSteps.length && l.each(this.options.disabledSteps, function(t, e) { i.steps.eq(e).parent("li").addClass("disabled") }), this.options.errorSteps && 0 < this.options.errorSteps.length && l.each(this.options.errorSteps, function(t, e) { i.steps.eq(e).parent("li").addClass("danger") }), this.options.hiddenSteps && 0 < this.options.hiddenSteps.length && l.each(this.options.hiddenSteps, function(t, e) { i.steps.eq(e).parent("li").addClass("hidden") }), !0 }, _setToolbar: function() { if ("none" === this.options.toolbarSettings.toolbarPosition) return !0; var t, e, i = !1 !== this.options.toolbarSettings.showNextButton ? l("<button></button>").text(this.options.lang.next).addClass("btn btn-secondary sw-btn-next").attr("type", "button") : null,
                    n = !1 !== this.options.toolbarSettings.showPreviousButton ? l("<button></button>").text(this.options.lang.previous).addClass("btn btn-secondary sw-btn-prev").attr("type", "button") : null,
                    r = l("<div></div>").addClass("btn-group mr-2 sw-btn-group").attr("role", "group").append(n, i),
                    s = null; switch (this.options.toolbarSettings.toolbarExtraButtons && 0 < this.options.toolbarSettings.toolbarExtraButtons.length && (s = l("<div></div>").addClass("btn-group mr-2 sw-btn-group-extra").attr("role", "group"), l.each(this.options.toolbarSettings.toolbarExtraButtons, function(t, e) { s.append(e.clone(!0)) })), this.options.toolbarSettings.toolbarPosition) {
                    case "top":
                        (t = l("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-top justify-content-" + this.options.toolbarSettings.toolbarButtonPosition)).append(r), "start" === this.options.toolbarSettings.toolbarButtonPosition ? t.prepend(s) : t.append(s), this.container.before(t); break;
                    case "bottom":
                        (e = l("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-" + this.options.toolbarSettings.toolbarButtonPosition)).append(r), "start" === this.options.toolbarSettings.toolbarButtonPosition ? e.prepend(s) : e.append(s), this.container.after(e); break;
                    case "both":
                        (t = l("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-top justify-content-" + this.options.toolbarSettings.toolbarButtonPosition)).append(r), "start" === this.options.toolbarSettings.toolbarButtonPosition ? t.prepend(s) : t.append(s), this.container.before(t), (e = l("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-" + this.options.toolbarSettings.toolbarButtonPosition)).append(r.clone(!0)), null !== s && ("start" === this.options.toolbarSettings.toolbarButtonPosition ? e.prepend(s.clone(!0)) : e.append(s.clone(!0))), this.container.after(e); break;
                    default:
                        (e = l("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-" + this.options.toolbarSettings.toolbarButtonPosition)).append(r), this.options.toolbarSettings.toolbarButtonPosition, e.append(s), this.container.after(e) } return !0 }, _setEvents: function() { var i = this; return l(this.steps).on("click", function(t) { if (t.preventDefault(), !1 === i.options.anchorSettings.anchorClickable) return !0; var e = i.steps.index(this); if (!1 === i.options.anchorSettings.enableAnchorOnDoneStep && i.steps.eq(e).parent("li").hasClass("done")) return !0;
                    e !== i.current_index && (!1 !== i.options.anchorSettings.enableAllAnchors && !1 !== i.options.anchorSettings.anchorClickable ? i._showStep(e) : i.steps.eq(e).parent("li").hasClass("done") && i._showStep(e)) }), l(".sw-btn-next", this.main).on("click", function(t) { t.preventDefault(), i._showNext() }), l(".sw-btn-prev", this.main).on("click", function(t) { t.preventDefault(), i._showPrevious() }), this.options.keyNavigation && l(t).keyup(function(t) { i._keyNav(t) }), this.options.backButtonSupport && l(r).on("hashchange", function(t) { if (!i.options.useURLhash) return !0; if (r.location.hash) { var e = l("a[href*='" + r.location.hash + "']", i.nav);
                        e && 0 < e.length && (t.preventDefault(), i._showStep(i.steps.index(e))) } }), !0 }, _showNext: function() { for (var t = this.current_index + 1, e = t; e < this.steps.length; e++)
                    if (!this.steps.eq(e).parent("li").hasClass("disabled") && !this.steps.eq(e).parent("li").hasClass("hidden")) { t = e; break } if (this.steps.length <= t) { if (!this.options.cycleSteps) return !1;
                    t = 0 } return this._showStep(t), !0 }, _showPrevious: function() { for (var t = this.current_index - 1, e = t; 0 <= e; e--)
                    if (!this.steps.eq(e).parent("li").hasClass("disabled") && !this.steps.eq(e).parent("li").hasClass("hidden")) { t = e; break } if (t < 0) { if (!this.options.cycleSteps) return !1;
                    t = this.steps.length - 1 } return this._showStep(t), !0 }, _showStep: function(t) { return !(!this.steps.eq(t) || t == this.current_index || this.steps.eq(t).parent("li").hasClass("disabled") || this.steps.eq(t).parent("li").hasClass("hidden") || (this._loadStepContent(t), 0)) }, _loadStepContent: function(e) { var n = this,
                    t = this.steps.eq(this.current_index),
                    i = "",
                    r = this.steps.eq(e),
                    s = r.data("content-url") && 0 < r.data("content-url").length ? r.data("content-url") : this.options.contentURL; if (null !== this.current_index && this.current_index !== e && (i = this.current_index < e ? "forward" : "backward"), null !== this.current_index && !1 === this._triggerEvent("leaveStep", [t, this.current_index, i])) return !1; if (!(s && 0 < s.length) || r.data("has-content") && this.options.contentCache) this._transitPage(e);
                else { var a = 0 < r.length ? l(r.attr("href"), this.main) : null,
                        o = l.extend(!0, {}, { url: s, type: "POST", data: { step_number: e }, dataType: "text", beforeSend: function() { n._loader("show") }, error: function(t, e, i) { n._loader("hide"), l.error(i) }, success: function(t) { t && 0 < t.length && (r.data("has-content", !0), a.html(t)), n._loader("hide"), n._transitPage(e) } }, this.options.ajaxSettings);
                    l.ajax(o) } return !0 }, _transitPage: function(t) { var e = this,
                    i = this.steps.eq(this.current_index),
                    n = 0 < i.length ? l(i.attr("href"), this.main) : null,
                    r = this.steps.eq(t),
                    s = 0 < r.length ? l(r.attr("href"), this.main) : null,
                    a = "";
                null !== this.current_index && this.current_index !== t && (a = this.current_index < t ? "forward" : "backward"); var o = "middle"; return 0 === t ? o = "first" : t === this.steps.length - 1 && (o = "final"), this.options.transitionEffect = this.options.transitionEffect.toLowerCase(), this.pages.finish(), "slide" === this.options.transitionEffect ? n && 0 < n.length ? n.slideUp("fast", this.options.transitionEasing, function() { s.slideDown(e.options.transitionSpeed, e.options.transitionEasing) }) : s.slideDown(this.options.transitionSpeed, this.options.transitionEasing) : "fade" === this.options.transitionEffect ? n && 0 < n.length ? n.fadeOut("fast", this.options.transitionEasing, function() { s.fadeIn("fast", e.options.transitionEasing, function() { l(this).show() }) }) : s.fadeIn(this.options.transitionSpeed, this.options.transitionEasing, function() { l(this).show() }) : (n && 0 < n.length && n.hide(), s.show()), this._setURLHash(r.attr("href")), this._setAnchor(t), this._setButtons(t), this._fixHeight(t), this.current_index = t, this._triggerEvent("showStep", [r, this.current_index, a, o]), !0 }, _setAnchor: function(t) { return this.steps.eq(this.current_index).parent("li").removeClass("active"), !1 !== this.options.anchorSettings.markDoneStep && null !== this.current_index && (this.steps.eq(this.current_index).parent("li").addClass("done"), !1 !== this.options.anchorSettings.removeDoneStepOnNavigateBack && this.steps.eq(t).parent("li").nextAll().removeClass("done")), this.steps.eq(t).parent("li").removeClass("done").addClass("active"), !0 }, _setButtons: function(t) { return this.options.cycleSteps || (t <= 0 ? l(".sw-btn-prev", this.main).addClass("disabled") : l(".sw-btn-prev", this.main).removeClass("disabled"), this.steps.length - 1 <= t ? l(".sw-btn-next", this.main).addClass("disabled") : l(".sw-btn-next", this.main).removeClass("disabled")), !0 }, _keyNav: function(t) { switch (t.which) {
                    case 37:
                        this._showPrevious(), t.preventDefault(); break;
                    case 39:
                        this._showNext(), t.preventDefault(); break;
                    default:
                        return } }, _fixHeight: function(t) { if (this.options.autoAdjustHeight) { var e = 0 < this.steps.eq(t).length ? l(this.steps.eq(t).attr("href"), this.main) : null;
                    this.container.finish().animate({ minHeight: e.outerHeight() }, this.options.transitionSpeed, function() {}) } return !0 }, _triggerEvent: function(t, e) { var i = l.Event(t); return this.main.trigger(i, e), !i.isDefaultPrevented() && i.result }, _setURLHash: function(t) { this.options.showStepURLhash && r.location.hash !== t && (r.location.hash = t) }, _loader: function(t) { switch (t) {
                    case "show":
                        this.main.addClass("sw-loading"); break;
                    case "hide":
                        this.main.removeClass("sw-loading"); break;
                    default:
                        this.main.toggleClass("sw-loading") } }, theme: function(t) { if (this.options.theme === t) return !1;
                this.main.removeClass("sw-theme-" + this.options.theme), this.options.theme = t, this.main.addClass("sw-theme-" + this.options.theme), this._triggerEvent("themeChanged", [this.options.theme]) }, next: function() { this._showNext() }, prev: function() { this._showPrevious() }, reset: function() { if (!1 === this._triggerEvent("beginReset")) return !1;
                this.container.stop(!0), this.pages.stop(!0), this.pages.hide(), this.current_index = null, this._setURLHash(this.steps.eq(this.options.selected).attr("href")), l(".sw-toolbar", this.main).remove(), this.steps.removeClass(), this.steps.parents("li").removeClass(), this.steps.data("has-content", !1), this.init(), this._triggerEvent("endReset") }, stepState: function(i, t) { i = l.isArray(i) ? i : [i]; var e = l.grep(this.steps, function(t, e) { return -1 !== l.inArray(e, i) }); if (e && 0 < e.length) switch (t) {
                    case "disable":
                        l(e).parents("li").addClass("disabled"); break;
                    case "enable":
                        l(e).parents("li").removeClass("disabled"); break;
                    case "hide":
                        l(e).parents("li").addClass("hidden"); break;
                    case "show":
                        l(e).parents("li").removeClass("hidden"); break;
                    case "error-on":
                        l(e).parents("li").addClass("danger"); break;
                    case "error-off":
                        l(e).parents("li").removeClass("danger") } } }), l.fn.smartWizard = function(t) { var e, i = arguments; return void 0 === t || "object" == typeof t ? this.each(function() { l.data(this, "smartWizard") || l.data(this, "smartWizard", new n(this, t)) }) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (e = l.data(this[0], "smartWizard"), "destroy" === t && l.data(this, "smartWizard", null), e instanceof n && "function" == typeof e[t] ? e[t].apply(e, Array.prototype.slice.call(i, 1)) : this) : void 0 } }(jQuery, window, document),
    function(t) { if ("function" == typeof define && define.amd) define(["jquery"], t);
        else if ("object" == typeof module && module.exports) { var e = require("jquery");
            t(e), module.exports = e } else t(jQuery) }(function(p) {
        function a(t) { this.init(t) } a.prototype = { value: 0, size: 100, startAngle: -Math.PI, thickness: "auto", fill: { gradient: ["#3aeabb", "#fdd250"] }, emptyFill: "rgba(0, 0, 0, .1)", animation: { duration: 1200, easing: "circleProgressEasing" }, animationStartValue: 0, reverse: !1, lineCap: "butt", insertMode: "prepend", constructor: a, el: null, canvas: null, ctx: null, radius: 0, arcFill: null, lastFrameValue: 0, init: function(t) { p.extend(this, t), this.radius = this.size / 2, this.initWidget(), this.initFill(), this.draw(), this.el.trigger("circle-inited") }, initWidget: function() { this.canvas || (this.canvas = p("<canvas>")["prepend" == this.insertMode ? "prependTo" : "appendTo"](this.el)[0]); var t = this.canvas; if (t.width = this.size, t.height = this.size, this.ctx = t.getContext("2d"), 1 < window.devicePixelRatio) { var e = window.devicePixelRatio;
                    t.style.width = t.style.height = this.size + "px", t.width = t.height = this.size * e, this.ctx.scale(e, e) } }, initFill: function() {
                function t() { var t = p("<canvas>")[0];
                    t.width = i.size, t.height = i.size, t.getContext("2d").drawImage(e, 0, 0, s, s), i.arcFill = i.ctx.createPattern(t, "no-repeat"), i.drawFrame(i.lastFrameValue) } var e, i = this,
                    n = this.fill,
                    r = this.ctx,
                    s = this.size; if (!n) throw Error("The fill is not specified!"); if ("string" == typeof n && (n = { color: n }), n.color && (this.arcFill = n.color), n.gradient) { var a = n.gradient; if (1 == a.length) this.arcFill = a[0];
                    else if (1 < a.length) { for (var o = n.gradientAngle || 0, l = n.gradientDirection || [s / 2 * (1 - Math.cos(o)), s / 2 * (1 + Math.sin(o)), s / 2 * (1 + Math.cos(o)), s / 2 * (1 - Math.sin(o))], h = r.createLinearGradient.apply(r, l), u = 0; u < a.length; u++) { var c = a[u],
                                d = u / (a.length - 1);
                            p.isArray(c) && (d = c[1], c = c[0]), h.addColorStop(d, c) } this.arcFill = h } } n.image && (n.image instanceof Image ? e = n.image : (e = new Image).src = n.image, e.complete ? t() : e.onload = t) }, draw: function() { this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value) }, drawFrame: function(t) { this.lastFrameValue = t, this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(t), this.drawArc(t) }, drawArc: function(t) { if (0 !== t) { var e = this.ctx,
                        i = this.radius,
                        n = this.getThickness(),
                        r = this.startAngle;
                    e.save(), e.beginPath(), this.reverse ? e.arc(i, i, i - n / 2, r - 2 * Math.PI * t, r) : e.arc(i, i, i - n / 2, r, r + 2 * Math.PI * t), e.lineWidth = n, e.lineCap = this.lineCap, e.strokeStyle = this.arcFill, e.stroke(), e.restore() } }, drawEmptyArc: function(t) { var e = this.ctx,
                    i = this.radius,
                    n = this.getThickness(),
                    r = this.startAngle;
                t < 1 && (e.save(), e.beginPath(), t <= 0 ? e.arc(i, i, i - n / 2, 0, 2 * Math.PI) : this.reverse ? e.arc(i, i, i - n / 2, r, r - 2 * Math.PI * t) : e.arc(i, i, i - n / 2, r + 2 * Math.PI * t, r), e.lineWidth = n, e.strokeStyle = this.emptyFill, e.stroke(), e.restore()) }, drawAnimated: function(i) { var n = this,
                    r = this.el,
                    t = p(this.canvas);
                t.stop(!0, !1), r.trigger("circle-animation-start"), t.css({ animationProgress: 0 }).animate({ animationProgress: 1 }, p.extend({}, this.animation, { step: function(t) { var e = n.animationStartValue * (1 - t) + i * t;
                        n.drawFrame(e), r.trigger("circle-animation-progress", [t, e]) } })).promise().always(function() { r.trigger("circle-animation-end") }) }, getThickness: function() { return p.isNumeric(this.thickness) ? this.thickness : this.size / 14 }, getValue: function() { return this.value }, setValue: function(t) { this.animation && (this.animationStartValue = this.lastFrameValue), this.value = t, this.draw() } }, p.circleProgress = { defaults: a.prototype }, p.easing.circleProgressEasing = function(t) { return t < .5 ? .5 * (t *= 2) * t * t : 1 - .5 * (t = 2 - 2 * t) * t * t }, p.fn.circleProgress = function(r, t) { var s = "circle-progress",
                e = this.data(s); if ("widget" == r) { if (!e) throw Error('Calling "widget" method on not initialized instance is forbidden'); return e.canvas } if ("value" != r) return this.each(function() { var t = p(this),
                    e = t.data(s),
                    i = p.isPlainObject(r) ? r : {}; if (e) e.init(i);
                else { var n = p.extend({}, t.data()); "string" == typeof n.fill && (n.fill = JSON.parse(n.fill)), "string" == typeof n.animation && (n.animation = JSON.parse(n.animation)), (i = p.extend(n, i)).el = t, e = new a(i), t.data(s, e) } }); if (!e) throw Error('Calling "value" method on not initialized instance is forbidden'); if (void 0 === t) return e.getValue(); var i = t; return this.each(function() { p(this).data(s).setValue(i) }) } }),
    function() { "use strict";

        function e(t) { if (!t) throw new Error("No options passed to Waypoint constructor"); if (!t.element) throw new Error("No element option passed to Waypoint constructor"); if (!t.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + i, this.options = e.Adapter.extend({}, e.defaults, t), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = t.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), s[this.key] = this, i += 1 } var i = 0,
            s = {};
        e.prototype.queueTrigger = function(t) { this.group.queueTrigger(this, t) }, e.prototype.trigger = function(t) { this.enabled && this.callback && this.callback.apply(this, t) }, e.prototype.destroy = function() { this.context.remove(this), this.group.remove(this), delete s[this.key] }, e.prototype.disable = function() { return this.enabled = !1, this }, e.prototype.enable = function() { return this.context.refresh(), this.enabled = !0, this }, e.prototype.next = function() { return this.group.next(this) }, e.prototype.previous = function() { return this.group.previous(this) }, e.invokeAll = function(t) { var e = []; for (var i in s) e.push(s[i]); for (var n = 0, r = e.length; n < r; n++) e[n][t]() }, e.destroyAll = function() { e.invokeAll("destroy") }, e.disableAll = function() { e.invokeAll("disable") }, e.enableAll = function() { for (var t in e.Context.refreshAll(), s) s[t].enabled = !0; return this }, e.refreshAll = function() { e.Context.refreshAll() }, e.viewportHeight = function() { return window.innerHeight || document.documentElement.clientHeight }, e.viewportWidth = function() { return document.documentElement.clientWidth }, e.adapters = [], e.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, e.offsetAliases = { "bottom-in-view": function() { return this.context.innerHeight() - this.adapter.outerHeight() }, "right-in-view": function() { return this.context.innerWidth() - this.adapter.outerWidth() } }, window.Waypoint = e }(),
    function() { "use strict";

        function e(t) { this.element = t, this.Adapter = m.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, m.windowContext || (m.windowContext = !0, m.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler() } var i = 0,
            n = {},
            m = window.Waypoint,
            t = window.onload;
        e.prototype.add = function(t) { var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh() }, e.prototype.checkEmpty = function() { var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                i = this.element == this.element.window;
            t && e && !i && (this.adapter.off(".waypoints"), delete n[this.key]) }, e.prototype.createThrottledResizeHandler = function() {
            function t() { e.handleResize(), e.didResize = !1 } var e = this;
            this.adapter.on("resize.waypoints", function() { e.didResize || (e.didResize = !0, m.requestAnimationFrame(t)) }) }, e.prototype.createThrottledScrollHandler = function() {
            function t() { e.handleScroll(), e.didScroll = !1 } var e = this;
            this.adapter.on("scroll.waypoints", function() {
                (!e.didScroll || m.isTouch) && (e.didScroll = !0, m.requestAnimationFrame(t)) }) }, e.prototype.handleResize = function() { m.Context.refreshAll() }, e.prototype.handleScroll = function() { var t = {},
                e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } }; for (var i in e) { var n = e[i],
                    r = n.newScroll > n.oldScroll ? n.forward : n.backward; for (var s in this.waypoints[i]) { var a = this.waypoints[i][s]; if (null !== a.triggerPoint) { var o = n.oldScroll < a.triggerPoint,
                            l = n.newScroll >= a.triggerPoint;
                        (o && l || !o && !l) && (a.queueTrigger(r), t[a.group.id] = a.group) } } } for (var h in t) t[h].flushTriggers();
            this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll } }, e.prototype.innerHeight = function() { return this.element == this.element.window ? m.viewportHeight() : this.adapter.innerHeight() }, e.prototype.remove = function(t) { delete this.waypoints[t.axis][t.key], this.checkEmpty() }, e.prototype.innerWidth = function() { return this.element == this.element.window ? m.viewportWidth() : this.adapter.innerWidth() }, e.prototype.destroy = function() { var t = []; for (var e in this.waypoints)
                for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]); for (var n = 0, r = t.length; n < r; n++) t[n].destroy() }, e.prototype.refresh = function() { var t, e = this.element == this.element.window,
                i = e ? void 0 : this.adapter.offset(),
                n = {}; for (var r in this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } }) { var s = t[r]; for (var a in this.waypoints[r]) { var o, l, h, u, c = this.waypoints[r][a],
                        d = c.options.offset,
                        p = c.triggerPoint,
                        f = 0,
                        g = null == p;
                    c.element !== c.element.window && (f = c.adapter.offset()[s.offsetProp]), "function" == typeof d ? d = d.apply(c) : "string" == typeof d && (d = parseFloat(d), -1 < c.options.offset.indexOf("%") && (d = Math.ceil(s.contextDimension * d / 100))), o = s.contextScroll - s.contextOffset, c.triggerPoint = Math.floor(f + o - d), l = p < s.oldScroll, h = c.triggerPoint >= s.oldScroll, u = !l && !h, !g && l && h ? (c.queueTrigger(s.backward), n[c.group.id] = c.group) : !g && u ? (c.queueTrigger(s.forward), n[c.group.id] = c.group) : g && s.oldScroll >= c.triggerPoint && (c.queueTrigger(s.forward), n[c.group.id] = c.group) } } return m.requestAnimationFrame(function() { for (var t in n) n[t].flushTriggers() }), this }, e.findOrCreateByElement = function(t) { return e.findByElement(t) || new e(t) }, e.refreshAll = function() { for (var t in n) n[t].refresh() }, e.findByElement = function(t) { return n[t.waypointContextKey] }, window.onload = function() { t && t(), e.refreshAll() }, m.requestAnimationFrame = function(t) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) { window.setTimeout(t, 1e3 / 60) }).call(window, t) }, m.Context = e }(),
    function() { "use strict";

        function a(t, e) { return t.triggerPoint - e.triggerPoint }

        function o(t, e) { return e.triggerPoint - t.triggerPoint }

        function e(t) { this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this } var i = { vertical: {}, horizontal: {} },
            n = window.Waypoint;
        e.prototype.add = function(t) { this.waypoints.push(t) }, e.prototype.clearTriggerQueues = function() { this.triggerQueues = { up: [], down: [], left: [], right: [] } }, e.prototype.flushTriggers = function() { for (var t in this.triggerQueues) { var e = this.triggerQueues[t],
                    i = "up" === t || "left" === t;
                e.sort(i ? o : a); for (var n = 0, r = e.length; n < r; n += 1) { var s = e[n];
                    (s.options.continuous || n === e.length - 1) && s.trigger([t]) } } this.clearTriggerQueues() }, e.prototype.next = function(t) { this.waypoints.sort(a); var e = n.Adapter.inArray(t, this.waypoints); return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1] }, e.prototype.previous = function(t) { this.waypoints.sort(a); var e = n.Adapter.inArray(t, this.waypoints); return e ? this.waypoints[e - 1] : null }, e.prototype.queueTrigger = function(t, e) { this.triggerQueues[e].push(t) }, e.prototype.remove = function(t) { var e = n.Adapter.inArray(t, this.waypoints); - 1 < e && this.waypoints.splice(e, 1) }, e.prototype.first = function() { return this.waypoints[0] }, e.prototype.last = function() { return this.waypoints[this.waypoints.length - 1] }, e.findOrCreate = function(t) { return i[t.axis][t.name] || new e(t) }, n.Group = e }(),
    function() { "use strict";

        function i(t) { this.$element = n(t) } var n = window.jQuery,
            t = window.Waypoint;
        n.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, e) { i.prototype[e] = function() { var t = Array.prototype.slice.call(arguments); return this.$element[e].apply(this.$element, t) } }), n.each(["extend", "inArray", "isEmptyObject"], function(t, e) { i[e] = n[e] }), t.adapters.push({ name: "jquery", Adapter: i }), t.Adapter = i }(),
    function() { "use strict";

        function t(n) { return function() { var e = [],
                    i = arguments[0]; return n.isFunction(arguments[0]) && ((i = n.extend({}, arguments[1])).handler = arguments[0]), this.each(function() { var t = n.extend({}, i, { element: this }); "string" == typeof t.context && (t.context = n(this).closest(t.context)[0]), e.push(new r(t)) }), e } } var r = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto)) }(),
    function(i) { "use strict";
        i.fn.counterUp = function(t) { var e = i.extend({ time: 400, delay: 10 }, t); return this.each(function() { var l = i(this),
                    h = e;
                l.waypoint(function() { var t = [],
                        e = h.time / h.delay,
                        i = l.text(),
                        n = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, ""), /^[0-9]+$/.test(i); for (var r = /^[0-9]+\.[0-9]+$/.test(i), s = r ? (i.split(".")[1] || []).length : 0, a = e; 1 <= a; a--) { var o = parseInt(i / e * a); if (r && (o = parseFloat(i / e * a).toFixed(s)), n)
                            for (;
                                /(\d+)(\d{3})/.test(o.toString());) o = o.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        t.unshift(o) } l.data("counterup-nums", t), l.text("0"), l.data("counterup-func", function() { l.text(l.data("counterup-nums").shift()), l.data("counterup-nums").length ? setTimeout(l.data("counterup-func"), h.delay) : (l.data("counterup-nums"), l.data("counterup-nums", null), l.data("counterup-func", null)) }), setTimeout(l.data("counterup-func"), h.delay) }, { offset: "100%", triggerOnce: !0 }) }) } }(jQuery);