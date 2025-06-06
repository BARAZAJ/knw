! function() {
    "use strict";
    var e = function() {
        return (e = Object.assign || function(e) {
            for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };

    function t(e, t, n, o) {
        return new(n || (n = Promise))(function(i, r) {
            function a(e) {
                try {
                    c(o.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    c(o.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function c(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                    e(t)
                })).then(a, s)
            }
            c((o = o.apply(e, t || [])).next())
        })
    }

    function n(e, t) {
        var n, o, i, r, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return r = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }), r;

        function s(r) {
            return function(s) {
                return function(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = t.call(e, a)
                    } catch (e) {
                        r = [6, e], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }([r, s])
            }
        }
    }

    function o(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var o, i, r = n.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(o = r.next()).done;) a.push(o.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (n = r.return) && n.call(r)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    }

    function i(e, t) {
        for (var n = 0, o = t.length, i = e.length; n < o; n++, i++) e[i] = t[n];
        return e
    }
    var r, a = function() {
            function e(e) {
                this._hooks = {}, this._cache = [], this._hooksCache = {}
            }
            return e.prototype.on = function(e, t) {
                e && t && "function" == typeof t && (this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t))
            }, e.prototype.once = function(e, t) {
                var n = this;
                if (e && t && "function" == typeof t) {
                    this.on(e, function o(i) {
                        t(i), n.off(e, o)
                    })
                }
            }, e.prototype.off = function(e, t) {
                if (e && this._hooks[e] && this._hooks[e].length)
                    if (t) {
                        var n = this._hooks[e].indexOf(t); - 1 !== n && this._hooks[e].splice(n, 1)
                    } else this._hooks[e] = []
            }, e.prototype.emit = function(e, t, n) {
                if (n) {
                    if (!e) return; - 1 !== this._cache.indexOf(n) ? this._emit(e, t) : (this._hooksCache.hasOwnProperty(n) || (this._hooksCache[n] = {}), this._hooksCache[n].hasOwnProperty(e) || (this._hooksCache[n][e] = []), this._hooksCache[n][e].push(t))
                } else this._emit(e, t)
            }, e.prototype._emit = function(e, t) {
                e && this._hooks[e] && this._hooks[e].length && i([], o(this._hooks[e])).forEach(function(e) {
                    try {
                        e(t)
                    } catch (e) {}
                })
            }, e.prototype.set = function(e) {
                e && -1 === this._cache.indexOf(e) && this._cache.push(e)
            }, e
        }(),
        s = function(e) {
            return null != e && "[object Object]" == Object.prototype.toString.call(e)
        },
        c = function(e) {
            return Array.isArray(e)
        },
        l = function(e) {
            return "boolean" == typeof e
        },
        u = function(e) {
            return void 0 === e
        },
        h = (r = +Date.now() + Number("".concat(Math.random()).slice(2, 8)), function() {
            return r += 1
        }),
        f = function(e, t, n, o) {
            e.addEventListener ? e.addEventListener(t, n, o) : e.attachEven ? e.attachEven("on".concat(t), n) : e["on".concat(t)] = n
        },
        p = function(e, t, n, o) {
            e.addEventListener ? e.removeEventListener(t, n, o) : e.attachEven && e.detachEven("on".concat(t), n)
        },
        d = function(e) {
            return function(e, t, n) {
                if ("string" == typeof e && "number" == typeof t && "number" == typeof n) {
                    var o, i = [];
                    n = n <= 25 ? n : n % 25;
                    var r = String.fromCharCode(n + 97);
                    o = e.split(r);
                    for (var a = 0; a < o.length; a++) {
                        var s = parseInt(o[a], n);
                        s = 1 * s ^ t;
                        var c = String.fromCharCode(s);
                        i.push(c)
                    }
                    return i.join("")
                }
            }(e, 64, 25)
        },
        g = function(e) {
            var t = -1 !== navigator.userAgent.indexOf("iPhone") || -1 !== navigator.userAgent.indexOf("iPad") || -1 !== navigator.userAgent.indexOf("Mac OS X");
            f(window, t ? "pagehide" : "beforeunload", e, !1)
        },
        v = function(e, t, n) {
            var o = document.createElement("script");
            o.src = e, o.onerror = function() {
                n(e)
            }, o.onload = function() {
                t()
            }, document.getElementsByTagName("head")[0].appendChild(o)
        },
        m = function() {
            var e = 0;
            return ["hidden", "msHidden", "webkitHidden"].forEach(function(t) {
                void 0 !== document[t] && (e = 1)
            }), e
        },
        y = function(e, t) {
            void 0 === e && (e = function() {}), void 0 === t && (t = 1e3);
            var n, o = Date.now() + t;
            return n = window.setTimeout(function i() {
                    var r = Date.now() - o;
                    e(), o += t, n = window.setTimeout(i, Math.max(0, t - r))
                }, t),
                function() {
                    window.clearTimeout(n)
                }
        },
        _ = function(e) {
            var t = document.createElement("a");
            return t.href = e, t
        },
        b = function(e) {
            var t = {};
            try {
                var n = _(e).search;
                (n = n.slice(1)).split("&").forEach(function(e) {
                    var n, o, i = e.split("=");
                    i.length && (n = i[0], o = i[1]);
                    try {
                        t[n] = decodeURIComponent(void 0 === o ? "" : o)
                    } catch (e) {
                        t[n] = o
                    }
                })
            } catch (e) {}
            return t
        },
        E = function(e) {
            for (var t = 0, n = 0, o = (e += "").length, i = 0; i < o; i++)((t = 31 * t + e.charCodeAt(n++)) > 0x7fffffffffff || t < -0x800000000000) && (t &= 0xffffffffffff);
            return t < 0 && (t += 0x7ffffffffffff), t
        },
        S = function() {
            var e = window.navigator.appName,
                t = window.navigator.userAgent;
            return -1 !== e.indexOf("Microsoft Internet Explorer") && (-1 !== t.indexOf("MSIE 8.0") || -1 !== t.indexOf("MSIE 7.0") || -1 !== t.indexOf("MSIE 9.0"))
        },
        w = function() {
            var e = window.navigator.appName,
                t = window.navigator.userAgent;
            return -1 !== e.indexOf("Microsoft Internet Explorer") && (-1 !== t.indexOf("MSIE 8.0") || -1 !== t.indexOf("MSIE 9.0"))
        },
        k = function() {
            var e = window.navigator.appName,
                t = window.navigator.userAgent;
            return -1 !== e.indexOf("Microsoft Internet Explorer") && -1 !== t.indexOf("MSIE 7.0")
        },
        T = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function D() {
        throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
    }

    function A(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var O = A(function(e, t) {
            var n;
            n = function() {
                function e() {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var o in n) t[o] = n[o]
                    }
                    return t
                }

                function t(e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                }
                return function n(o) {
                    function i() {}

                    function r(t, n, r) {
                        if ("undefined" != typeof document) {
                            "number" == typeof(r = e({
                                path: "/"
                            }, i.defaults, r)).expires && (r.expires = new Date(1 * new Date + 864e5 * r.expires)), r.expires = r.expires ? r.expires.toUTCString() : "";
                            try {
                                var a = JSON.stringify(n);
                                /^[\{\[]/.test(a) && (n = a)
                            } catch (e) {}
                            n = o.write ? o.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                            var s = "";
                            for (var c in r) r[c] && (s += "; " + c, !0 !== r[c] && (s += "=" + r[c].split(";")[0]));
                            return document.cookie = t + "=" + n + s
                        }
                    }

                    function a(e, n) {
                        if ("undefined" != typeof document) {
                            for (var i = {}, r = document.cookie ? document.cookie.split("; ") : [], a = 0; a < r.length; a++) {
                                var s = r[a].split("="),
                                    c = s.slice(1).join("=");
                                n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                                try {
                                    var l = t(s[0]);
                                    if (c = (o.read || o)(c, l) || t(c), n) try {
                                        c = JSON.parse(c)
                                    } catch (e) {}
                                    if (i[l] = c, e === l) break
                                } catch (e) {}
                            }
                            return e ? i[e] : i
                        }
                    }
                    return i.set = r, i.get = function(e) {
                        return a(e, !1)
                    }, i.getJSON = function(e) {
                        return a(e, !0)
                    }, i.remove = function(t, n) {
                        r(t, "", e(n, {
                            expires: -1
                        }))
                    }, i.defaults = {}, i.withConverter = n, i
                }(function() {})
            }, e.exports = n()
        }),
        I = function() {
            function e() {
                this.cache = {}
            }
            return e.prototype.setItem = function(e, t) {
                this.cache[e] = t
            }, e.prototype.getItem = function(e) {
                return this.cache[e]
            }, e.prototype.removeItem = function(e) {
                this.cache[e] = void 0
            }, e.prototype.getCookie = function(e) {
                this.getItem(e)
            }, e.prototype.setCookie = function(e, t) {
                this.setItem(e, t)
            }, e.prototype.removeCookie = function(e, t) {
                this.removeItem(e)
            }, e
        }();
    var R = {
            getItem: function(e) {
                try {
                    var t = localStorage.getItem(e),
                        n = t;
                    try {
                        t && "string" == typeof t && (n = JSON.parse(t))
                    } catch (e) {}
                    return n || {}
                } catch (e) {}
                return {}
            },
            setItem: function(e, t) {
                try {
                    var n = "string" == typeof t ? t : JSON.stringify(t);
                    localStorage.setItem(e, n)
                } catch (e) {}
            },
            removeItem: function(e) {
                try {
                    localStorage.removeItem(e)
                } catch (e) {}
            },
            getCookie: function(e, t) {
                try {
                    return O.get(e)
                } catch (e) {
                    return ""
                }
            },
            setCookie: function(e, t, n, o) {
                try {
                    var i = o || document.domain,
                        r = +new Date + n;
                    O.set(e, t, {
                        expires: new Date(r),
                        path: "/",
                        domain: i
                    })
                } catch (e) {}
            },
            removeCookie: function(e, t) {
                try {
                    O.remove(e, {
                        path: "/",
                        domain: t || ""
                    })
                } catch (e) {}
            },
            isSupportLS: function() {
                try {
                    return localStorage.setItem("_ranger-test-key", "hi"), localStorage.getItem("_ranger-test-key"), localStorage.removeItem("_ranger-test-key"), !0
                } catch (e) {
                    return !1
                }
            }()
        },
        M = {
            getItem: function(e) {
                try {
                    var t = sessionStorage.getItem(e),
                        n = t;
                    try {
                        t && "string" == typeof t && (n = JSON.parse(t))
                    } catch (e) {}
                    return n || {}
                } catch (e) {}
                return {}
            },
            setItem: function(e, t) {
                try {
                    var n = "string" == typeof t ? t : JSON.stringify(t);
                    sessionStorage.setItem(e, n)
                } catch (e) {}
            },
            removeItem: function(e) {
                try {
                    sessionStorage.removeItem(e)
                } catch (e) {}
            },
            getCookie: function(e) {
                this.getItem(e)
            },
            setCookie: function(e, t) {
                this.setItem(e, t)
            },
            removeCookie: function(e, t) {
                this.removeItem(e)
            },
            isSupportSession: function() {
                try {
                    return sessionStorage.setItem("_ranger-test-key", "hi"), sessionStorage.getItem("_ranger-test-key"), sessionStorage.removeItem("_ranger-test-key"), !0
                } catch (e) {
                    return !1
                }
            }()
        },
        x = function() {
            function e(e, t) {
                this._storage = t && "session" === t ? M : !e && R.isSupportLS ? R : new I
            }
            return e.prototype.getItem = function(e) {
                return this._storage.getItem(e)
            }, e.prototype.setItem = function(e, t) {
                this._storage.setItem(e, t)
            }, e.prototype.removeItem = function(e) {
                this._storage.removeItem(e)
            }, e.prototype.getCookie = function(e, t) {
                return this._storage.getCookie(e, t)
            }, e.prototype.setCookie = function(e, t, n, o) {
                this._storage.setCookie(e, t, n, o)
            }, e.prototype.removeCookie = function(e, t) {
                this._storage.removeCookie(e, t)
            }, e
        }(),
        C = function() {
            function e(e, t, n) {
                this.appid = e, this.domain = t, this.userAgent = window.navigator.userAgent, this.appVersion = window.navigator.appVersion, this.cookie_expire = n
            }
            return e.prototype.init = function() {
                var e = window.navigator.userAgent,
                    t = window.navigator.language,
                    n = document.referrer,
                    o = n ? _(n).hostname : "",
                    i = b(window.location.href),
                    r = "web"; - 1 === this.appVersion.indexOf("Mobile") && -1 === this.appVersion.indexOf("Android") && -1 === this.appVersion.indexOf("iPhone") && -1 === this.appVersion.indexOf("iPad") && -1 === this.appVersion.indexOf("mini") || (r = "wap"), this.utm = function(e, t, n, o) {
                    var i = new x(!1),
                        r = new x(!1, "session"),
                        a = e ? "_tea_utm_cache_".concat(e) : "_tea_utm_cache",
                        s = e ? "_$utm_from_url_".concat(e) : "_$utm_from_url",
                        c = {},
                        l = ["tr_shareuser", "tr_admaster", "tr_param1", "tr_param2", "tr_param3", "tr_param4", "$utm_from_url"],
                        u = {
                            ad_id: Number(t.ad_id) || void 0,
                            campaign_id: Number(t.campaign_id) || void 0,
                            creative_id: Number(t.creative_id) || void 0,
                            utm_source: t.utm_source,
                            utm_medium: t.utm_medium,
                            utm_campaign: t.utm_campaign,
                            utm_term: t.utm_term,
                            utm_content: t.utm_content,
                            tr_shareuser: t.tr_shareuser,
                            tr_admaster: t.tr_admaster,
                            tr_param1: t.tr_param1,
                            tr_param2: t.tr_param2,
                            tr_param3: t.tr_param3,
                            tr_param4: t.tr_param4
                        };
                    try {
                        var h = !1;
                        for (var f in u) u[f] && (-1 !== l.indexOf(f) ? (c.hasOwnProperty("tracer_data") || (c.tracer_data = {}), c.tracer_data[f] = u[f]) : c[f] = u[f], h = !0);
                        if (h) r.setItem(s, "1"), i.setCookie(a, JSON.stringify(c), o, n);
                        else {
                            var p = i.getCookie(a, n);
                            p && (c = JSON.parse(p))
                        }
                        1 == r.getItem(s) && (c.hasOwnProperty("tracer_data") || (c.tracer_data = {}), c.tracer_data.$utm_from_url = 1)
                    } catch (e) {
                        return u
                    }
                    return c
                }(this.appid, i, this.domain, this.cookie_expire);
                var a = this.browser(),
                    s = this.os();
                return {
                    browser: a.browser,
                    browser_version: a.browser_version,
                    platform: r,
                    os_name: s.os_name,
                    os_version: s.os_version,
                    userAgent: e,
                    screen_width: window.screen && window.screen.width,
                    screen_height: window.screen && window.screen.height,
                    device_model: this.getDeviceModel(s.os_name),
                    language: t,
                    referrer: n,
                    referrer_host: o,
                    utm: this.utm,
                    latest_data: this.last(n, o)
                }
            }, e.prototype.last = function(e, t) {
                var n = "",
                    o = "",
                    i = "",
                    r = location.hostname,
                    a = !1;
                if (e && t && r !== t) {
                    n = e, o = t, a = !0;
                    var s = b(e);
                    s.keyword && (i = s.keyword)
                }
                return {
                    $latest_referrer: n,
                    $latest_referrer_host: o,
                    $latest_search_keyword: i,
                    isLast: a
                }
            }, e.prototype.browser = function() {
                var e, t, n = "",
                    o = "".concat(parseFloat(this.appVersion)),
                    i = this.userAgent;
                return -1 !== i.indexOf("Edge") || -1 !== i.indexOf("Edg") ? (n = "Microsoft Edge", -1 !== i.indexOf("Edge") ? (e = i.indexOf("Edge"), o = i.substring(e + 5)) : (e = i.indexOf("Edg"), o = i.substring(e + 4))) : -1 !== i.indexOf("MSIE") || -1 !== i.indexOf("Trident") ? (n = "Microsoft Internet Explorer", -1 !== i.indexOf("MSIE") ? (e = i.indexOf("MSIE"), o = i.substring(e + 5, e + 9)) : (e = i.indexOf("rv"), o = i.substring(e + 3, e + 7))) : -1 !== (e = i.indexOf("Lark")) ? (n = "Lark", o = i.substring(e + 5, e + 11)) : -1 !== (e = i.indexOf("MetaSr")) ? (n = "sougoubrowser", o = i.substring(e + 7, e + 10)) : -1 !== i.indexOf("MQQBrowser") || -1 !== i.indexOf("QQBrowser") ? (n = "qqbrowser", -1 !== i.indexOf("MQQBrowser") ? (e = i.indexOf("MQQBrowser"), o = i.substring(e + 11, e + 15)) : -1 !== i.indexOf("QQBrowser") && (e = i.indexOf("QQBrowser"), o = i.substring(e + 10, e + 17))) : -1 !== i.indexOf("Chrome") ? -1 !== (e = i.indexOf("MicroMessenger")) ? (n = "weixin", o = i.substring(e + 15, e + 20)) : -1 !== (e = i.indexOf("360")) ? (n = "360browser", o = i.substring(i.indexOf("Chrome") + 7)) : -1 !== i.indexOf("baidubrowser") || -1 !== i.indexOf("BIDUBrowser") ? (-1 !== i.indexOf("baidubrowser") ? (e = i.indexOf("baidubrowser"), o = i.substring(e + 13, e + 16)) : -1 !== i.indexOf("BIDUBrowser") && (e = i.indexOf("BIDUBrowser"), o = i.substring(e + 12, e + 15)), n = "baidubrowser") : -1 !== (e = i.indexOf("xiaomi")) ? -1 !== i.indexOf("openlanguagexiaomi") ? (n = "openlanguage xiaomi", o = i.substring(e + 7, e + 13)) : (n = "xiaomi", o = i.substring(e - 7, e - 1)) : -1 !== (e = i.indexOf("TTWebView")) ? (n = "TTWebView", o = i.substring(e + 10, e + 23)) : -1 !== (e = i.indexOf("Chrome")) ? (n = "Chrome", o = i.substring(e + 7)) : -1 !== (e = i.indexOf("Chrome")) && (n = "Chrome", o = i.substring(e + 7)) : -1 !== i.indexOf("Safari") ? -1 !== (e = i.indexOf("QQ")) ? (n = "qqbrowser", o = i.substring(e + 10, e + 16)) : -1 !== (e = i.indexOf("Safari")) && (n = "Safari", o = i.substring(e + 7), -1 !== (e = i.indexOf("Version")) && (o = i.substring(e + 8))) : -1 !== (e = i.indexOf("Firefox")) ? (n = "Firefox", o = i.substring(e + 8)) : -1 !== (e = i.indexOf("MicroMessenger")) ? (n = "weixin", o = i.substring(e + 15, e + 20)) : -1 !== (e = i.indexOf("QQ")) ? (n = "qqbrowser", o = i.substring(e + 3, e + 8)) : -1 !== (e = i.indexOf("Opera")) && (n = "Opera", o = i.substring(e + 6), -1 !== (e = i.indexOf("Version")) && (o = i.substring(e + 8))), -1 !== (t = o.indexOf(";")) && (o = o.substring(0, t)), -1 !== (t = o.indexOf(" ")) && (o = o.substring(0, t)), -1 !== (t = o.indexOf(")")) && (o = o.substring(0, t)), {
                    browser: n,
                    browser_version: o
                }
            }, e.prototype.os = function() {
                var e, t, n, o = "";
                if (S());
                else {
                    for (var i = [{
                            s: "Windows 10",
                            r: /(Windows 10.0|Windows NT 10.0|Windows NT 10.1)/
                        }, {
                            s: "Windows 8.1",
                            r: /(Windows 8.1|Windows NT 6.3)/
                        }, {
                            s: "Windows 8",
                            r: /(Windows 8|Windows NT 6.2)/
                        }, {
                            s: "Windows 7",
                            r: /(Windows 7|Windows NT 6.1)/
                        }, {
                            s: "Windows",
                            r: /(Windows|Windows NT)/
                        }, {
                            s: "Android",
                            r: /Android/
                        }, {
                            s: "Sun OS",
                            r: /SunOS/
                        }, {
                            s: "Linux",
                            r: /(Linux|X11)/
                        }, {
                            s: "iOS",
                            r: /(iPhone|iPad|iPod)/
                        }, {
                            s: "Mac OS X",
                            r: /Mac OS X/
                        }, {
                            s: "Mac OS",
                            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                        }], r = 0; r < i.length; r++) {
                        var a = i[r];
                        if (a.r.test(this.userAgent)) {
                            "Mac OS X" === (o = a.s) && this.isNewIpad() && (o = "iOS");
                            break
                        }
                    }
                    var s = function(e, t) {
                            var n = e.exec(t);
                            return n && n[1] ? n[1] : ""
                        },
                        c = function(e, t) {
                            var n = RegExp("(?:^|[^A-Z0-9-_]|[^A-Z0-9-]_|sprd-)(?:".concat(e, ")"), "i").exec(t);
                            return n ? n.slice(1)[0] : ""
                        };
                    /Windows/.test(o) && (e = s(/Windows (.*)/, o), o = "windows");
                    switch (o) {
                        case "Mac OS X":
                            e = c("Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\d+(?:[_\\.]\\d+)+))?", this.userAgent), o = "mac";
                            break;
                        case "Android":
                            t = this.userAgent, (n = s(/Android ([\.\_\d]+)/, t)) || (n = s(/Android\/([\.\_\d]+)/, t)), e = n, o = "android";
                            break;
                        case "iOS":
                            e = this.isNewIpad() ? c("Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\d+(?:[_\\.]\\d+)+))?", this.userAgent) : (e = /OS (\d+)_(\d+)_?(\d+)?/.exec(this.appVersion)) ? "".concat(e[1], ".").concat(e[2], ".").concat(0 | e[3]) : "", o = "ios"
                    }
                }
                return {
                    os_name: o,
                    os_version: e
                }
            }, e.prototype.getDeviceModel = function(e) {
                var t = "";
                try {
                    if ("android" === e) navigator.userAgent.split(";").forEach(function(e) {
                        e.indexOf("Build/") > -1 && (t = e.slice(0, e.indexOf("Build/")))
                    });
                    else if ("ios" === e || "mac" === e || "windows" === e)
                        if (this.isNewIpad()) t = "iPad";
                        else {
                            var n = navigator.userAgent.replace("Mozilla/5.0 (", ""),
                                o = n.indexOf(";");
                            t = -1 === o ? "" : n.slice(0, o)
                        }
                } catch (e) {
                    return t.trim()
                }
                return t.trim()
            }, e.prototype.isNewIpad = function() {
                return void 0 !== this.userAgent && "MacIntel" === navigator.platform && "number" == typeof navigator.maxTouchPoints && navigator.maxTouchPoints > 1
            }, e
        }(),
        G = {
            cn: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az24z1mz1jz1az1cz18z1nz1nz1jz1mz1ez4az1az1mz1k",
            va: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az1gz22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
            sg: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k"
        },
        B = "5.2.1_tob";
    var N, U, L = {
            cn: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az1az22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
            va: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az1gz22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
            sg: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k"
        },
        P = "https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/visual-editor-rangers.js",
        z = "https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/visual-ab-core.js",
        j = "https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/heatmap-core";
    ! function(e) {
        e.Init = "init", e.Config = "config", e.Start = "start", e.ReStart = "re-start-sdk", e.Stop = "stop-sdk", e.Ready = "ready", e.CloudReady = "cloud-ready", e.TokenComplete = "token-complete", e.TokenStorage = "token-storage", e.TokenFetch = "token-fetch", e.TokenError = "token-error", e.ConfigUuid = "config-uuid", e.ConfigWebId = "config-webid", e.ConfigDomain = "config-domain", e.CustomWebId = "custom-webid", e.AnonymousId = "anonymous-id", e.TokenChange = "token-change", e.TokenReset = "token-reset", e.ConfigTransform = "config-transform", e.EnvTransform = "env-transform", e.SessionReset = "session-reset", e.SessionResetTime = "session-reset-time", e.Event = "event", e.Events = "events", e.EventNow = "event-now", e.CleanEvents = "clean-events", e.BeconEvent = "becon-event", e.SubmitBefore = "submit-before", e.SubmitScuess = "submit-scuess", e.SubmitAfter = "submit-after", e.SubmitError = "submit-error", e.SubmitVerifyH = "submit-verify-h5", e.BindToken = "bind-token", e.BindTokenReady = "bind-token-ready", e.CustomHeader = "custom-request-header", e.Stay = "stay", e.ResetStay = "reset-stay", e.StayReady = "stay-ready", e.SetStay = "set-stay", e.RouteChange = "route-change", e.RouteReady = "route-ready", e.Ab = "ab", e.AbVar = "ab-var", e.AbAllVars = "ab-all-vars", e.AbConfig = "ab-config", e.AbExternalVersion = "ab-external-version", e.AbVersionChangeOn = "ab-version-change-on", e.AbVersionChangeOff = "ab-version-change-off", e.AbOpenLayer = "ab-open-layer", e.AbCloseLayer = "ab-close-layer", e.AbReady = "ab-ready", e.AbComplete = "ab-complete", e.AbTimeout = "ab-timeout", e.Profile = "profile", e.ProfileSet = "profile-set", e.ProfileSetOnce = "profile-set-once", e.ProfileUnset = "profile-unset", e.ProfileIncrement = "profile-increment", e.ProfileAppend = "profile-append", e.ProfileClear = "profile-clear", e.TrackDuration = "track-duration", e.TrackDurationStart = "track-duration-start", e.TrackDurationEnd = "track-duration-end", e.TrackDurationPause = "track-duration-pause", e.TrackDurationResume = "tracl-duration-resume", e.Autotrack = "autotrack", e.AutotrackReady = "autotrack-ready", e.SetExposureType = "set-exposure-type", e.CepReady = "cep-ready", e.TracerReady = "tracer-ready", e.EncryptData = "encrypt-data", e.LogSettingReady = "logsetting-ready", e.SetResource = "set-resource"
    }(N || (N = {})),
    function(e) {
        e.DEBUGGER_MESSAGE = "debugger-message", e.DEBUGGER_MESSAGE_SDK = "debugger-message-sdk", e.DEBUGGER_MESSAGE_FETCH = "debugger-message-fetch", e.DEBUGGER_MESSAGE_FETCH_RESULT = "debugger-message-fetch-result", e.DEBUGGER_MESSAGE_EVENT = "debugger-message-event", e.DEVTOOL_WEB_READY = "devtool-web-ready"
    }(U || (U = {}));
    var V = N,
        K = void 0,
        q = (new Date).getTimezoneOffset(),
        H = parseInt("".concat(-q / 60), 10),
        J = 60 * q,
        F = 7776e6,
        W = function() {
            function t(e, t) {
                var n = this;
                this.is_first_time = !0, this.configPersist = !1, this.initConfig = t, this.collect = e;
                var o = new C(t.app_id, t.cookie_domain || "", t.cookie_expire || F).init();
                this.commonInfo = o;
                var i = "__tea_cache_first_".concat(t.app_id);
                this.configKey = "__tea_cache_config_".concat(t.app_id), this.sessionStorage = new x(!1, "session"), this.localStorage = new x(!1, "local"), t.configPersist && (this.configPersist = !0, this.storage = 1 === t.configPersist ? this.sessionStorage : this.localStorage);
                var r = this.localStorage.getItem(i);
                r && 1 == r ? this.is_first_time = !1 : (this.is_first_time = !0, this.localStorage.setItem(i, "1")), this.envInfo = {
                    user: {
                        user_unique_id: K,
                        user_type: K,
                        user_id: K,
                        user_is_auth: K,
                        user_is_login: K,
                        device_id: K,
                        web_id: K,
                        ip_addr_id: K,
                        user_unique_id_type: K,
                        anonymous_id: K
                    },
                    header: {
                        app_id: K,
                        app_name: K,
                        app_install_id: K,
                        install_id: K,
                        app_package: K,
                        app_channel: K,
                        app_version: K,
                        ab_version: K,
                        os_name: o.os_name,
                        os_version: o.os_version,
                        device_model: o.device_model,
                        ab_client: K,
                        traffic_type: K,
                        client_ip: K,
                        device_brand: K,
                        os_api: K,
                        access: K,
                        language: o.language,
                        region: K,
                        app_language: K,
                        app_region: K,
                        creative_id: o.utm.creative_id,
                        ad_id: o.utm.ad_id,
                        campaign_id: o.utm.campaign_id,
                        log_type: K,
                        rnd: K,
                        platform: o.platform,
                        sdk_version: B,
                        sdk_lib: "js",
                        province: K,
                        city: K,
                        timezone: H,
                        tz_offset: J,
                        tz_name: K,
                        sim_region: K,
                        carrier: K,
                        resolution: "".concat(o.screen_width, "x").concat(o.screen_height),
                        browser: o.browser,
                        browser_version: o.browser_version,
                        referrer: o.referrer,
                        referrer_host: o.referrer_host,
                        width: o.screen_width,
                        height: o.screen_height,
                        screen_width: o.screen_width,
                        screen_height: o.screen_height,
                        utm_term: o.utm.utm_term,
                        utm_content: o.utm.utm_content,
                        utm_source: o.utm.utm_source,
                        utm_medium: o.utm.utm_medium,
                        utm_campaign: o.utm.utm_campaign,
                        tracer_data: JSON.stringify(o.utm.tracer_data),
                        custom: {},
                        wechat_unionid: K,
                        wechat_openid: K
                    }
                }, this.ab_version = "", this.evtParams = {}, this.reportErrorCallback = function() {}, this.isLast = !1, this.setCustom(o), this.initDomain(), this.initABData(), this.collect.on("route-change", function(e) {
                    n.changeReferInfo(e.config)
                })
            }
            return t.prototype.initDomain = function() {
                var e = this.initConfig.channel_domain;
                if (e) this.domain = e;
                else {
                    var t = this.initConfig.channel;
                    this.domain = d(G[t])
                }
            }, t.prototype.setDomain = function(e) {
                this.domain = e
            }, t.prototype.getDomain = function() {
                return this.domain
            }, t.prototype.getCommonInfo = function(e) {
                return e ? this.commonInfo[e] || "" : this.commonInfo
            }, t.prototype.initABData = function() {
                var e = "__tea_sdk_ab_version_".concat(this.initConfig.app_id),
                    t = null;
                if (this.initConfig.ab_cross) {
                    var n = this.localStorage.getCookie(e, this.initConfig.ab_cookie_domain);
                    t = n ? JSON.parse(n) : null
                } else t = this.localStorage.getItem(e);
                this.setAbCache(t)
            }, t.prototype.setAbCache = function(e) {
                this.ab_cache = e
            }, t.prototype.getAbCache = function() {
                return this.ab_cache
            }, t.prototype.clearAbCache = function() {
                this.ab_cache = {}, this.ab_version = ""
            }, t.prototype.setAbVersion = function(e) {
                this.ab_version = e
            }, t.prototype.getAbVersion = function() {
                return this.ab_version
            }, t.prototype.getUrl = function(e) {
                var t = "";
                switch (e) {
                    case "event":
                        t = "/list";
                        break;
                    case "webid":
                        t = "/webid";
                        break;
                    case "tobid":
                        t = "/tobid";
                        break;
                    case "profile":
                        t = "/profile/list";
                        break;
                    case "img":
                        t = "/gif";
                        break;
                    case "bind":
                        t = "/service/2/id_bind"
                }
                var n = "";
                return this.initConfig.caller && (n = "?sdk_version=".concat(B, "&sdk_name=web&app_id=").concat(this.initConfig.app_id, "&caller=").concat(this.initConfig.caller)), this.initConfig.report_url ? "".concat(this.initConfig.report_url).concat(n) : "".concat(this.getDomain()).concat(t).concat(n)
            }, t.prototype.setCustom = function(e) {
                if (e && e.latest_data && e.latest_data.isLast)
                    for (var t in delete e.latest_data.isLast, this.isLast = !0, e.latest_data) {
                        this.envInfo.header.custom[t] = e.latest_data[t];
                        var n = {};
                        n["".concat(t)] = e.latest_data[t], this.set(n)
                    }
            }, t.prototype.changeReferInfo = function(e) {
                var t = e;
                this.set({
                    referrer: t.referrer
                });
                var n = "";
                try {
                    n = new URL(t.referrer).host
                } catch (e) {}
                this.set({
                    referrer_host: n || this.envInfo.header.referrer_host
                })
            }, t.prototype.set = function(t) {
                var n = this;
                Object.keys(t).forEach(function(o) {
                    if (void 0 !== t[o] && null !== t[o] || n.delete(o), "traffic_type" === o && n.isLast && (n.envInfo.header.custom.$latest_traffic_source_type = t[o]), "evtParams" === o) n.evtParams = e(e({}, n.evtParams || {}), t.evtParams || {});
                    else if ("_staging_flag" === o) n.evtParams = e(e({}, n.evtParams || {}), {
                        _staging_flag: t._staging_flag
                    });
                    else if ("reportErrorCallback" === o && "function" == typeof t[o]) n.reportErrorCallback = t[o];
                    else {
                        var i = "",
                            r = "";
                        if (o.indexOf(".") > -1) {
                            var a = o.split(".");
                            i = a[0], r = a[1]
                        }
                        i ? "user" === i || "header" === i ? n.envInfo[i][r] = t[o] : (n.envInfo.header.custom[r] = t[o], n.collect.emit(U.DEBUGGER_MESSAGE, {
                            type: U.DEBUGGER_MESSAGE_SDK,
                            info: "SDK 添加了Custom",
                            level: "info",
                            time: Date.now(),
                            infoType: "sdk",
                            secType: "HEADER",
                            common: "custom"
                        })) : Object.hasOwnProperty.call(n.envInfo.user, o) ? (["user_type", "ip_addr_id"].indexOf(o) > -1 ? n.envInfo.user[o] = t[o] ? Number(t[o]) : t[o] : ["user_id", "web_id", "user_unique_id", "user_unique_id_type", "anonymous_id"].indexOf(o) > -1 ? n.envInfo.user[o] = t[o] ? String(t[o]) : t[o] : ["user_is_auth", "user_is_login"].indexOf(o) > -1 ? n.envInfo.user[o] = Boolean(t[o]) : "device_id" === o && (n.envInfo.user[o] = t[o]), n.collect.emit(U.DEBUGGER_MESSAGE, {
                            type: U.DEBUGGER_MESSAGE_SDK,
                            info: "SDK 修改了公共参数",
                            level: "info",
                            time: Date.now(),
                            infoType: "sdk",
                            secType: "USER",
                            common: o
                        })) : Object.hasOwnProperty.call(n.envInfo.header, o) ? (n.envInfo.header[o] = t[o], n.collect.emit(U.DEBUGGER_MESSAGE, {
                            type: U.DEBUGGER_MESSAGE_SDK,
                            info: "SDK 修改了公共参数",
                            level: "info",
                            time: Date.now(),
                            infoType: "sdk",
                            secType: "HEADER",
                            common: o
                        })) : (n.envInfo.header.custom[o] = t[o], n.collect.emit(U.DEBUGGER_MESSAGE, {
                            type: U.DEBUGGER_MESSAGE_SDK,
                            info: "SDK 添加了Custom",
                            level: "info",
                            time: Date.now(),
                            infoType: "sdk",
                            secType: "HEADER",
                            common: "custom"
                        }))
                    }
                })
            }, t.prototype.getSettingData = function(e) {
                if (this.logSettingConfig && !u(this.logSettingConfig[e])) return this.logSettingConfig[e]
            }, t.prototype.setSettingData = function(e) {
                this.logSettingConfig = e
            }, t.prototype.get = function(e) {
                try {
                    return e ? "evtParams" === e ? this.evtParams : "reportErrorCallback" === e ? this[e] : Object.hasOwnProperty.call(this.envInfo.user, e) ? this.envInfo.user[e] : Object.hasOwnProperty.call(this.envInfo.header, e) ? this.envInfo.header[e] : JSON.parse(JSON.stringify(this.envInfo[e])) : JSON.parse(JSON.stringify(this.envInfo))
                } catch (e) {
                    console.log("get config stringify error "), this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: e.message
                    })
                }
            }, t.prototype.setStore = function(e) {
                try {
                    if (!this.configPersist) return;
                    var t = this.storage.getItem(this.configKey) || {};
                    if (t && Object.keys(e).length) {
                        var n = Object.assign(e, t);
                        this.storage.setItem(this.configKey, n)
                    }
                } catch (e) {
                    console.log("setStore error"), this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: e.message
                    })
                }
            }, t.prototype.getStore = function() {
                try {
                    if (!this.configPersist) return null;
                    var e = this.storage.getItem(this.configKey) || {};
                    return e && Object.keys(e).length ? e : null
                } catch (e) {
                    return this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: e.message
                    }), null
                }
            }, t.prototype.delete = function(e) {
                try {
                    if (!this.configPersist) return;
                    var t = this.storage.getItem(this.configKey) || {};
                    t && Object.hasOwnProperty.call(t, e) && (delete t[e], this.storage.setItem(this.configKey, t))
                } catch (e) {
                    this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: e.message
                    }), console.log("delete error")
                }
            }, t
        }(),
        X = function() {
            function e(e, t) {
                this.isLog = t || !1, this.name = e || ""
            }
            return e.prototype.info = function(e) {
                this.isLog && console.log("%c %s", "color: yellow; background-color: black;", "[instance: ".concat(this.name, "]") + " " + e)
            }, e.prototype.warn = function(e) {
                this.isLog && console.warn("%c %s", "color: yellow; background-color: black;", "[instance: ".concat(this.name, "]") + " " + e)
            }, e.prototype.error = function(e) {
                this.isLog && console.error("[instance: ".concat(this.name, "]") + " " + e)
            }, e.prototype.throw = function(e) {
                throw this.error(this.name), new Error(e)
            }, e
        }(),
        $ = function() {
            function e(e, t) {
                this.native = e.enable_native || e["evitaN".split("").reverse().join("")], this.os = t.get("os_name")
            }
            var t = e.prototype;
            return t.bridgeInject = function() {
                try {
                    return !!this.native && (AppLogBridge ? (console.log("AppLogBridge is injected"), AppLogBridge.osName ? this.os = AppLogBridge.osName() : this.os = this.os, !0) : (console.log("AppLogBridge is not inject"), !1))
                } catch (e) {
                    return console.log("AppLogBridge is not inject"), !1
                }
            }, t.bridgeReady = function() {
                var e = this;
                return new Promise(function(t, n) {
                    try {
                        e.bridgeInject() ? AppLogBridge.hasStarted(function(e) {
                            console.log("AppLogBridge is started? : " + e), e ? t(!0) : n(!1)
                        }) : n(!1)
                    } catch (e) {
                        console.log("AppLogBridge, error:" + JSON.stringify(e.stack)), n(!1)
                    }
                })
            }, t.setNativeAppId = function(e) {
                try {
                    AppLogBridge.setNativeAppId(JSON.stringify(e)), console.log("change bridge appid, event report with appid: " + e)
                } catch (e) {
                    console.error("setNativeAppId error")
                }
            }, t.setConfig = function(e) {
                var t = this;
                try {
                    Object.keys(e).forEach(function(n) {
                        "user_unique_id" === n ? t.setUserUniqueId(e[n]) : e[n] ? t.addHeaderInfo(n, e[n]) : t.removeHeaderInfo(n)
                    })
                } catch (e) {
                    console.error("setConfig error")
                }
            }, t.setUserUniqueId = function(e) {
                try {
                    AppLogBridge.setUserUniqueId(e)
                } catch (e) {
                    console.error("setUserUniqueId error")
                }
            }, t.addHeaderInfo = function(e, t) {
                try {
                    AppLogBridge.addHeaderInfo(e, t)
                } catch (e) {
                    console.error("addHeaderInfo error")
                }
            }, t.setHeaderInfo = function(e) {
                try {
                    AppLogBridge.setHeaderInfo(JSON.stringify(e))
                } catch (e) {
                    console.error("setHeaderInfo error")
                }
            }, t.removeHeaderInfo = function(e) {
                try {
                    AppLogBridge.removeHeaderInfo(e)
                } catch (e) {
                    console.error("removeHeaderInfo error")
                }
            }, t.reportPv = function(e) {
                this.onEventV3("predefine_pageview", e)
            }, t.onEventV3 = function(e, t) {
                try {
                    AppLogBridge.onEventV3(e, t)
                } catch (e) {
                    console.error("onEventV3 error")
                }
            }, t.profileSet = function(e) {
                try {
                    AppLogBridge.profileSet(e)
                } catch (e) {
                    console.error("profileSet error")
                }
            }, t.profileSetOnce = function(e) {
                try {
                    AppLogBridge.profileSetOnce(e)
                } catch (e) {
                    console.error("profileSetOnce error")
                }
            }, t.profileIncrement = function(e) {
                try {
                    AppLogBridge.profileIncrement(e)
                } catch (e) {
                    console.error("profileIncrement error")
                }
            }, t.profileUnset = function(e) {
                try {
                    AppLogBridge.profileUnset(e)
                } catch (e) {
                    console.error("profileUnset error")
                }
            }, t.profileAppend = function(e) {
                try {
                    AppLogBridge.profileAppend(e)
                } catch (e) {
                    console.error("profileAppend error")
                }
            }, t.setExternalAbVersion = function(e) {
                try {
                    AppLogBridge.setExternalAbVersion(e)
                } catch (e) {
                    console.error("setExternalAbVersion error")
                }
            }, t.getVar = function(e, t, n) {
                try {
                    "harmonyos" === this.os ? n(AppLogBridge.getABTestConfigValueForKey(e, t)) : "android" === this.os ? n(AppLogBridge.getABTestConfigValueForKey(e, t)) : AppLogBridge.getABTestConfigValueForKey(e, t, function(e) {
                        n(e)
                    })
                } catch (e) {
                    console.error("getVar error"), n(t)
                }
            }, t.getAllVars = function(e) {
                try {
                    "harmonyos" === this.os ? e(AppLogBridge.getAllAbTestConfigs()) : "android" === this.os ? e(AppLogBridge.getAllAbTestConfigs()) : AppLogBridge.getAllAbTestConfigs(function(t) {
                        e(t)
                    })
                } catch (t) {
                    console.error("getAllVars error"), e(null)
                }
            }, t.getAbSdkVersion = function(e) {
                try {
                    "harmonyos" === this.os ? e(AppLogBridge.getAbSdkVersion()) : "android" === this.os ? e(AppLogBridge.getAbSdkVersion()) : AppLogBridge.getAbSdkVersion(function(t) {
                        e(t)
                    })
                } catch (t) {
                    console.error("getAbSdkVersion error"), e("")
                }
            }, e
        }(),
        Q = {
            NO_URL: 4001,
            IMG_ON: 4e3,
            IMG_CATCH: 4002,
            BEACON_FALSE: 4003,
            XHR_ON: 500,
            RESPONSE: 5001,
            TIMEOUT: 5005
        };

    function Y(e, t, n, o, i, r, a, s, c, l) {
        try {
            var u;
            if (window.XDomainRequest && w()) {
                u = new XDomainRequest;
                var h = s || "post";
                u.open(h, e), n && (u.timeout = n, u.ontimeout = function() {
                    r && r(t, Q.TIMEOUT)
                }), u.onerror = function() {
                    u.abort(), r && r(t, Q.XHR_ON)
                }, u.onload = function() {
                    if (i) {
                        var e = null;
                        if (u.responseText) {
                            try {
                                e = JSON.parse(u.responseText)
                            } catch (t) {
                                e = {}
                            }
                            i(e, t)
                        }
                    }
                }, setTimeout(function() {
                    u.send(JSON.stringify(t))
                }, 0)
            } else if (window.ActiveXObject && k()) {
                u = new ActiveXObject("Micrsorf.XMLHTTP");
                h = s || "POST";
                u.open(h, e), n && (u.timeout = n, u.ontimeout = function() {
                    r && r(t, Q.TIMEOUT)
                }), u.onerror = function() {
                    u.abort(), r && r(t, Q.XHR_ON)
                }, u.onload = function() {
                    if (i) {
                        var e = null;
                        if (u.responseText) {
                            try {
                                e = JSON.parse(u.responseText)
                            } catch (t) {
                                e = {}
                            }
                            i(e, t)
                        }
                    }
                }, setTimeout(function() {
                    u.send(JSON.stringify(t))
                }, 0)
            } else if (window.XMLHttpRequest) {
                u = new XMLHttpRequest;
                h = s || "POST";
                u.open(h, e, !0), u.setRequestHeader("Content-Type", "application/json; charset=utf-8"), a && u.setRequestHeader("X-MCS-AppKey", "".concat(a)), o && (u.withCredentials = !0), n && (u.timeout = n, u.ontimeout = function() {
                    r && r(t, Q.TIMEOUT)
                }), u.onreadystatechange = function() {
                    if (4 === u.readyState && 200 === u.status && i) {
                        var e = null;
                        if (u.responseText) {
                            try {
                                e = JSON.parse(u.responseText)
                            } catch (t) {
                                e = {}
                            }
                            i(e, t)
                        }
                    }
                }, u.onerror = function() {
                    u.abort(), r && r(t, Q.XHR_ON)
                }, u.send(JSON.stringify(t))
            }
        } catch (e) {
            console.log(e.message)
        }
    }
    var Z = 4e3,
        ee = 4002,
        te = function(e, t, n, o) {
            try {
                t.forEach(function(i) {
                    var r = function(e) {
                            var t = "";
                            for (var n in e) e.hasOwnProperty(n) && void 0 !== e[n] && (t += "&".concat(n, "=").concat(encodeURIComponent(JSON.stringify(e[n]))));
                            return t = "&" === t.slice(0, 1) ? t.slice(1) : t
                        }(i),
                        a = new Image(1, 1);
                    a.onload = function() {
                        a = null, n && n()
                    }, a.onerror = function() {
                        a = null, o && o(e, t, Z)
                    }, a.src = "".concat(e, "?").concat(r)
                })
            } catch (n) {
                o && o(e, t, ee, n.message)
            }
        },
        ne = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        },
        oe = function() {
            function e() {}
            return e.prototype.apply = function(e, t) {
                var n = this;
                this.collect = e, this.storage = new x(!1, "session"), this.sessionKey = "__tea_session_id_".concat(t.app_id), this.expireTime = t.expireTime || 18e5, this.disableSession = t.disable_session, this.disableSession || (this.setSessionId(), this.collect.on(V.SessionReset, function() {
                    n.resetSessionId()
                }), this.collect.on(V.SessionResetTime, function() {
                    n.updateSessionIdTime()
                }))
            }, e.prototype.updateSessionIdTime = function() {
                var e = this.storage.getItem(this.sessionKey);
                if (e && e.sessionId) {
                    var t = e.timestamp;
                    Date.now() - t > this.expireTime ? e = {
                        sessionId: ne(),
                        timestamp: Date.now()
                    } : e.timestamp = Date.now(), this.storage.setItem(this.sessionKey, e), this.resetExpTime()
                }
            }, e.prototype.setSessionId = function() {
                var e = this,
                    t = this.storage.getItem(this.sessionKey);
                t && t.sessionId ? t.timestamp = Date.now() : t = {
                    sessionId: ne(),
                    timestamp: Date.now()
                }, this.storage.setItem(this.sessionKey, t), this.sessionExp = setInterval(function() {
                    e.checkEXp()
                }, this.expireTime)
            }, e.prototype.getSessionId = function() {
                var e = this.storage.getItem(this.sessionKey);
                return this.disableSession ? "" : e && e.sessionId ? e.sessionId : ""
            }, e.prototype.resetExpTime = function() {
                var e = this;
                this.sessionExp && (clearInterval(this.sessionExp), this.sessionExp = setInterval(function() {
                    e.checkEXp()
                }, this.expireTime))
            }, e.prototype.resetSessionId = function() {
                var e = {
                    sessionId: ne(),
                    timestamp: Date.now()
                };
                this.storage.setItem(this.sessionKey, e)
            }, e.prototype.checkEXp = function() {
                var e = this.storage.getItem(this.sessionKey);
                e && e.sessionId && (Date.now() - e.timestamp + 30 >= this.expireTime && (e = {
                    sessionId: ne(),
                    timestamp: Date.now()
                }, this.storage.setItem(this.sessionKey, e)))
            }, e
        }(),
        ie = function() {
            function t(e, t) {
                var n = this;
                this.MAX_LEVEL = 3, this.metaResource = {}, this.eventCache = [], t.enable_track_id && (this.MAX_LEVEL = t.track_level || 3, e.on(V.SetResource, function(e) {
                    n.metaResource = e
                }))
            }
            return t.prototype.handleMetaResource = function(t) {
                var n = this;
                return Object.keys(this.metaResource).length ? (t.forEach(function(t) {
                    var r = t.event,
                        a = t.local_time_ms,
                        s = t.params,
                        c = e({}, JSON.parse(s));
                    try {
                        for (var l in c)
                            if (n.metaResource.hasOwnProperty(l)) {
                                var u = c[l],
                                    h = n.metaResource[l];
                                if (h.length && h.includes(u)) {
                                    var f = ne();
                                    c.ubt_source_id = f, n.eventCache.length && (c.ubt_source = i([], o(n.eventCache)).reverse()), n.eventCache.length >= n.MAX_LEVEL && n.eventCache.shift(), n.eventCache.push({
                                        event: r,
                                        params: e(e({}, JSON.parse(s)), {
                                            ubt_source_id: f
                                        }),
                                        local_time_ms: a
                                    })
                                }
                                break
                            }
                    } finally {
                        t.params = JSON.stringify(c)
                    }
                }), t) : t
            }, t
        }(),
        re = function() {
            function t() {
                this.eventLimit = 50, this.eventCache = [], this.beconEventCache = []
            }
            return t.prototype.apply = function(e, t) {
                var n = this;
                this.collect = e, this.config = t, this.configManager = e.configManager, this.cacheStorgae = new x(!0), this.localStorage = new x(!1), this.trackId = new ie(e, t), this.maxReport = t.max_report || 20, this.reportTime = t.reportTime || 30, this.timeout = t.timeout || 1e5, this.reportUrl = this.configManager.getUrl("event"), this.eventKey = "__tea_cache_events_".concat(this.configManager.get("app_id")), this.beconKey = "__tea_cache_events_becon_".concat(this.configManager.get("app_id")), this.abKey = "__tea_sdk_ab_version_".concat(this.configManager.get("app_id")), this.refer_key = "__tea_cache_refer_".concat(this.configManager.get("app_id")), this.collect.on(V.Ready, function() {
                    n.reportAll(!1)
                }), this.collect.on(V.ConfigDomain, function() {
                    n.reportUrl = n.configManager.getUrl("event")
                }), this.collect.on(V.Event, function(e) {
                    n.event(e)
                }), this.collect.on(V.BeconEvent, function(e) {
                    n.beconEvent(e)
                }), this.collect.on(V.CleanEvents, function() {
                    n.reportAll(!1)
                }), this.collect.on(V.BindTokenReady, function() {
                    n.reportAll(!1)
                }), this.linster()
            }, t.prototype.linster = function() {
                var e = this;
                f(window, "unload", function() {
                    e.reportAll(!0)
                }, !1), g(function() {
                    e.reportAll(!0)
                }), f(document, "visibilitychange", function() {
                    "hidden" === document.visibilityState && e.reportAll(!0)
                }, !1)
            }, t.prototype.reportAll = function(e) {
                this.report(e), this.reportBecon()
            }, t.prototype.event = function(e) {
                var t = this;
                try {
                    var n = this.cacheStorgae.getItem(this.eventKey) || [],
                        r = i(i([], o(e)), o(n));
                    if (this.cacheStorgae.setItem(this.eventKey, r), this.reportTimeout && clearTimeout(this.reportTimeout), r.length >= this.maxReport) this.report(!1);
                    else {
                        var a = this.reportTime;
                        this.reportTimeout = setTimeout(function() {
                            t.report(!1), t.reportTimeout = null
                        }, a)
                    }
                } catch (e) {
                    this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "SDK 发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: e.message,
                        infoType: "sdk"
                    })
                }
            }, t.prototype.beconEvent = function(e) {
                if (!this.collect.destroyInstance && !this.collect.sdkStop) {
                    var t = this.cacheStorgae.getItem(this.beconKey) || [],
                        n = i(i([], o(e)), o(t));
                    this.cacheStorgae.setItem(this.beconKey, n), this.collect.tokenManager.getReady() && this.collect.sdkReady && (this.cacheStorgae.removeItem(this.beconKey), this.send(this.split(this.merge(n)), !0))
                }
            }, t.prototype.reportBecon = function() {
                if (!this.collect.destroyInstance && !this.collect.sdkStop && this.collect.tokenManager.getReady() && this.collect.sdkReady) {
                    var e = this.cacheStorgae.getItem(this.beconKey) || [];
                    e && e.length && (this.cacheStorgae.removeItem(this.beconKey), this.send(this.split(this.merge(e)), !0))
                }
            }, t.prototype.report = function(e) {
                if (!this.collect.destroyInstance && !this.collect.sdkStop && this.collect.tokenManager.getReady() && this.collect.sdkReady) {
                    var t = this.cacheStorgae.getItem(this.eventKey) || [];
                    t.length && (this.cacheStorgae.removeItem(this.eventKey), this.sliceEvent(t, e))
                }
            }, t.prototype.sliceEvent = function(e, t) {
                if (e.length > this.eventLimit)
                    for (var n = 0; n < e.length; n += this.eventLimit) {
                        var o;
                        o = e.slice(n, n + this.eventLimit);
                        var i = this.split(this.merge(o));
                        this.send(i, t)
                    } else {
                        i = this.split(this.merge(e));
                        this.send(i, t)
                    }
            }, t.prototype.merge = function(t, n) {
                var o, i, r = this,
                    a = this.configManager.get(),
                    s = a.header,
                    c = a.user;
                s.custom.origin_referrer = null === (o = this.collect.configManager) || void 0 === o ? void 0 : o.getCommonInfo("referrer"), s.custom.origin_referrer_host = null === (i = this.collect.configManager) || void 0 === i ? void 0 : i.getCommonInfo("referrer_host"), s.custom = JSON.stringify(s.custom);
                var l = this.configManager.get("evtParams"),
                    u = this.configManager.get("user_unique_id_type"),
                    h = [];
                try {
                    var f = t.filter(function(t) {
                        try {
                            if (Object.keys(l).length && !n && (t.params = e(e({}, t.params), l)), r.collect.dynamicParamsFilter && !n) {
                                var o = r.collect.dynamicParamsFilter();
                                Object.keys(o).length && (t.params = e(e({}, t.params), o))
                            }
                            u && !n && (t.params.$user_unique_id_type = u);
                            var i = r.configManager.getAbCache(),
                                a = r.configManager.getAbVersion();
                            return a && i && (r.config.disable_ab_reset ? t.ab_sdk_version = a : i.uuid === c.user_unique_id && (t.ab_sdk_version = a)), t.session_id = r.collect.sessionManager.getSessionId(), t.params = JSON.stringify(t.params), r.blockEvent(t.event) && r.whiteEvent(t.event)
                        } catch (e) {
                            return console.warn("filter merge event: ".concat(t && t.event, " error, pls check"), e && e.message), r.collect.emit(U.DEBUGGER_MESSAGE, {
                                type: U.DEBUGGER_MESSAGE_SDK,
                                info: "SDK 处理Event数据异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message,
                                infoType: "sdk"
                            }), !1
                        }
                    });
                    if (this.config.enable_track_id && (f = this.trackId.handleMetaResource(f)), !Object.keys(c).length) return console.warn("user info error，cant report"), h;
                    this.config.enable_anonymousid && delete c.web_id;
                    var p = JSON.parse(JSON.stringify({
                        events: f,
                        user: c,
                        header: s
                    }));
                    p.local_time = Math.floor(Date.now() / 1e3), p.verbose = 1, p.user_unique_type = this.config.enable_ttwebid ? this.config.user_unique_type : void 0, h.push(p)
                } catch (e) {
                    console.warn("event merge error, pls check", e && e.message)
                }
                return h
            }, t.prototype.split = function(e) {
                return e = e.map(function(e) {
                    var t = [];
                    return t.push(e), t
                })
            }, t.prototype.blockEvent = function(e) {
                try {
                    var t = this.blockList;
                    if (this.config.enable_logsetting) {
                        var n = this.blockList,
                            o = this.collect.configManager.getSettingData("blocklist_events") || [];
                        t = n.concat(o.filter(function(e) {
                            return -1 === n.indexOf(e)
                        }))
                    }
                    return !(t && t.length && t.includes(e))
                } catch (e) {
                    return !0
                }
            }, t.prototype.whiteEvent = function(e) {
                var t;
                try {
                    return (null === (t = this.whiteList) || void 0 === t ? !void 0 : !t.length) || !!this.whiteList.includes(e)
                } catch (e) {
                    return !0
                }
            }, t.prototype.send = function(e, t) {
                var n = this;
                e.length && e.forEach(function(e) {
                    try {
                        var o = JSON.parse(JSON.stringify(e));
                        n.config.filter && ((o = n.config.filter(o)) || console.warn("filter must return data !!")), n.collect.eventFilter && o && ((o = n.collect.eventFilter(o)) || console.warn("filterEvent api must return data !!"));
                        var i = o || e,
                            r = JSON.parse(JSON.stringify(i));
                        if (!i.length) return;
                        var a = !0;
                        if (i.forEach(function(e) {
                                e.events.length || (a = !1)
                            }), !a) return;
                        n.collect.emit(V.SubmitBefore, i);
                        var s = n.collect.cryptoData(i);
                        if (S()) return void te(n.configManager.getUrl("img"), s);
                        var c = u(n.collect.configManager.getSettingData("request_timeout")) ? n.timeout : n.collect.configManager.getSettingData("request_timeout");
                        n.collect.requestManager.useRequest({
                            url: n.reportUrl,
                            data: i,
                            success: function(e, t) {
                                e && 0 !== e.e ? (n.collect.emit(V.SubmitError, {
                                    type: "f_data",
                                    eventData: t,
                                    errorCode: e.e,
                                    response: e
                                }), n.collect.emit(U.DEBUGGER_MESSAGE, {
                                    type: U.DEBUGGER_MESSAGE_EVENT,
                                    info: "埋点上报失败",
                                    time: Date.now(),
                                    data: r,
                                    code: e.e,
                                    failType: "数据异常失败",
                                    status: "fail"
                                })) : (n.collect.emit(V.SubmitScuess, {
                                    eventData: t,
                                    res: e
                                }), n.collect.emit(U.DEBUGGER_MESSAGE, {
                                    type: U.DEBUGGER_MESSAGE_EVENT,
                                    info: "埋点上报成功",
                                    time: Date.now(),
                                    data: r,
                                    code: 200,
                                    status: "success"
                                }), n.updateFilter(e))
                            },
                            fail: function(e, t) {
                                n.configManager.get("reportErrorCallback")(e, t), n.collect.emit(V.SubmitError, {
                                    type: "f_net",
                                    eventData: e,
                                    errorCode: t
                                }), n.collect.emit(U.DEBUGGER_MESSAGE, {
                                    type: U.DEBUGGER_MESSAGE_EVENT,
                                    info: "埋点上报网络异常",
                                    time: Date.now(),
                                    data: r,
                                    code: t,
                                    failType: "网络异常失败",
                                    status: "fail"
                                })
                            },
                            timeout: c,
                            useBeacon: t,
                            encryption: n.config.enable_encryption,
                            encryption_header: n.config.encryption_header,
                            zip: !0
                        }), n.collect.emit(V.SubmitVerifyH, i), n.collect.emit(V.SubmitAfter, i)
                    } catch (e) {
                        console.warn("something error, ".concat(JSON.stringify(e.stack))), n.collect.emit(U.DEBUGGER_MESSAGE, {
                            type: U.DEBUGGER_MESSAGE_SDK,
                            info: "SDK发送埋点发生了异常",
                            level: "error",
                            time: Date.now(),
                            data: e.message,
                            infoType: "sdk"
                        })
                    }
                })
            }, t.prototype.updateFilter = function(e) {
                var t, n;
                this.blockList = (null === (t = null == e ? void 0 : e.blocklist) || void 0 === t ? void 0 : t.v3) || [], this.whiteList = (null === (n = null == e ? void 0 : e.whitelist) || void 0 === n ? void 0 : n.v3) || []
            }, t
        }(),
        ae = function() {
            return function e(t) {
                return t ? (t ^ 16 * Math.random() >> t / 4).toString(10) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
            }().replace(/-/g, "").slice(0, 19)
        },
        se = function() {
            function t() {
                this.cacheToken = {}, this.enableCookie = !1, this.enableTTwebid = !1, this.enableCustomWebid = !1, this.enableAnonymousid = !1
            }
            return t.prototype.apply = function(e, t) {
                var n = this;
                this.collect = e, this.config = t, this.configManager = this.collect.configManager, this.storage = new x(!1), this.tokenKey = "__tea_cache_tokens_".concat(t.app_id), this.enableAnonymousid = t.enable_anonymousid, this.enableTTwebid = t.enable_ttwebid, this.enableCustomWebid = t.enable_custom_webid, this.timeout = t.timeout || 3e5, this.collect.on(V.AnonymousId, function(e) {
                    n.setAnonymousId(e)
                }), this.collect.on(V.ConfigUuid, function(e) {
                    n.setUuid(e)
                }), this.collect.on(V.ConfigWebId, function(e) {
                    n.setWebId(e)
                }), this.collect.on(V.BindToken, function(e) {
                    n.fetchBind(e)
                }), this.enableCookie = t.cross_subdomain, this.expiresTime = t.cookie_expire || 6048e5, this.cookieDomain = t.cookie_domain || "", this.checkStorage()
            }, t.prototype.checkStorage = function() {
                var e = this;
                if (this.enableCookie) {
                    var t = this.storage.getCookie(this.tokenKey, this.cookieDomain);
                    this.cacheToken = t && "string" == typeof t ? JSON.parse(t) : {}
                } else this.cacheToken = this.storage.getItem(this.tokenKey) || {};
                this.tokenType = this.cacheToken && this.cacheToken._type_ ? this.cacheToken._type_ : "default", "custom" !== this.tokenType || this.enableCustomWebid || this.enableAnonymousid ? this.enableAnonymousid ? this.completeAnonymous(this.cacheToken) : this.enableCustomWebid ? this.collect.on(V.CustomWebId, function() {
                    e.tokenReady = !0, e.collect.emit(V.TokenComplete)
                }) : this.checkEnv() || (this.enableTTwebid ? this.completeTtWid(this.cacheToken) : this.check()) : this.remoteWebid()
            }, t.prototype.check = function() {
                if (this.cacheToken && this.cacheToken.web_id) this.complete(this.cacheToken);
                else if (this.config.disable_webid) {
                    var e = this.getLocalId();
                    this.complete({
                        web_id: e,
                        user_unique_id: this.configManager.get("user_unique_id") || e
                    })
                } else this.remoteWebid()
            }, t.prototype.checkEnv = function() {
                var e = window.navigator.userAgent;
                if (-1 !== e.indexOf("miniProgram") || -1 !== e.indexOf("MiniProgram")) {
                    var t = b(window.location.href);
                    return !(!t || !t.Web_ID) && (this.complete({
                        web_id: "".concat(t.Web_ID),
                        user_unique_id: this.configManager.get("user_unique_id") || "".concat(t.Web_ID)
                    }), !0)
                }
                return !1
            }, t.prototype.remoteWebid = function() {
                var e = this,
                    t = this.configManager.getUrl("webid"),
                    n = {
                        app_key: this.config.app_key,
                        app_id: this.config.app_id,
                        url: location.href,
                        user_agent: window.navigator.userAgent,
                        referer: document.referrer,
                        user_unique_id: ""
                    };
                this.collect.emit(U.DEBUGGER_MESSAGE, {
                    type: U.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 发起WEBID请求",
                    logType: "fetch",
                    level: "info",
                    time: Date.now(),
                    data: n
                });
                var o = this.collect.cryptoData(n);
                this.collect.requestManager.useRequest({
                    url: t,
                    data: o,
                    success: function(t) {
                        var n;
                        if (t && 0 === t.e) n = t.web_id, e.collect.emit(U.DEBUGGER_MESSAGE, {
                            type: U.DEBUGGER_MESSAGE_SDK,
                            info: "WEBID请求成功",
                            logType: "fetch",
                            level: "info",
                            time: Date.now(),
                            data: t
                        });
                        else {
                            var o = e.getLocalId();
                            n = o, e.collect.configManager.set({
                                localWebId: o
                            }), e.collect.emit(V.TokenError), e.collect.emit(U.DEBUGGER_MESSAGE, {
                                type: U.DEBUGGER_MESSAGE_SDK,
                                info: "WEBID请求返回值异常",
                                logType: "fetch",
                                level: "warn",
                                time: Date.now(),
                                data: t
                            }), e.collect.logger.warn("appid: ".concat(e.config.app_id, " get webid error, use local webid~"))
                        }
                        e.complete({
                            web_id: e.configManager.get("web_id") || n,
                            user_unique_id: e.configManager.get("user_unique_id") || n
                        })
                    },
                    fail: function() {
                        var t = e.getLocalId();
                        e.complete({
                            web_id: e.configManager.get("web_id") || t,
                            user_unique_id: e.configManager.get("user_unique_id") || t
                        }), e.collect.configManager.set({
                            localWebId: t
                        }), e.collect.emit(V.TokenError), e.collect.emit(U.DEBUGGER_MESSAGE, {
                            type: U.DEBUGGER_MESSAGE_SDK,
                            info: "WEBID请求网络异常",
                            logType: "fetch",
                            level: "error",
                            time: Date.now(),
                            data: null
                        }), e.collect.logger.warn("appid: ".concat(e.config.app_id, ", get webid error, use local webid~"))
                    },
                    timeout: this.timeout,
                    encryption: this.config.enable_encryption,
                    encryption_header: this.config.encryption_header
                })
            }, t.prototype.getLocalId = function() {
                for (var e = ae(), t = 0; 0 === e.indexOf("0") || 0 === e.indexOf("9");) {
                    if (t >= 10) {
                        e = e.replace(/^(0|9)/, "");
                        break
                    }
                    e = ae(), t++
                }
                return e
            }, t.prototype.complete = function(e) {
                var t = e.web_id,
                    n = e.user_unique_id;
                if (!t && !n) return this.collect.emit(V.TokenError), void console.warn("token error");
                e.timestamp = Date.now(), 0 === t.indexOf("9") && t.length > 18 ? this.remoteWebid() : (this.collect.configManager.set({
                    web_id: t,
                    user_unique_id: n
                }), this.setStorage(e), this.tokenReady = !0, this.collect.emit(V.TokenComplete))
            }, t.prototype.completeAnonymous = function(e) {
                var t = e.anonymous_id || ne(),
                    n = e.user_unique_id || this.configManager.get("user_unique_id");
                this.collect.configManager.set({
                    anonymous_id: t,
                    user_unique_id: n || t
                }), e.anonymous_id = t, e.user_unique_id = n || t, this.setStorage(e), this.tokenReady = !0, this.collect.emit(V.TokenComplete)
            }, t.prototype.completeTtWid = function(e) {
                var t = e.user_unique_id || "",
                    n = this.configManager.get("user_unique_id");
                this.configManager.set({
                    user_unique_id: n || t
                }), this.setStorage(e), this.tokenReady = !0, this.collect.emit(V.TokenComplete)
            }, t.prototype.setUuid = function(e) {
                if (e && -1 === ["null", "undefined", "Null", "None"].indexOf(e)) {
                    var t = String(e),
                        n = this.configManager.get("user_unique_id"),
                        o = this.cacheToken && this.cacheToken.user_unique_id;
                    if (t === n && t === o) return;
                    this.configManager.set({
                        user_unique_id: t
                    }), this.cacheToken ? this.cacheToken.user_unique_id = t : (this.cacheToken = {}, this.cacheToken.user_unique_id = t), this.cacheToken.timestamp = Date.now(), this.setStorage(this.cacheToken), this.collect.emit(V.TokenChange, {
                        type: "uuid",
                        id: e
                    }), this.collect.emit(V.ProfileClear), this.collect.emit(V.SessionReset)
                } else this.clearUuid()
            }, t.prototype.clearUuid = function() {
                if (!this.config.enable_ttwebid) {
                    var e = this.enableAnonymousid ? this.configManager.get("anonymous_id") : this.configManager.get("web_id");
                    this.configManager.get("user_unique_id") !== e && (this.configManager.set({
                        user_unique_id: e
                    }), this.cacheToken.user_unique_id = e, this.cacheToken.timestamp = Date.now(), this.setStorage(this.cacheToken), this.collect.emit(V.ProfileClear), this.collect.emit(V.TokenReset))
                }
            }, t.prototype.setAnonymousId = function(e) {
                if (e && this.enableAnonymousid) {
                    var t = this.configManager.get("anonymous_id"),
                        n = this.configManager.get("user_unique_id");
                    t !== e && (t !== n && n || (this.configManager.set({
                        user_unique_id: e
                    }), this.cacheToken.user_unique_id = e, this.collect.emit(V.TokenChange, {
                        type: "uuid",
                        id: e
                    })), this.configManager.set({
                        anonymous_id: e
                    }), this.cacheToken.anonymous_id = e, this.collect.emit(V.TokenChange, {
                        type: "anonymous_id",
                        id: e
                    }), this.setStorage(this.cacheToken))
                }
            }, t.prototype.setWebId = function(e) {
                if (e && !this.config.enable_ttwebid && !this.enableAnonymousid) {
                    var t = this.configManager.get("web_id"),
                        n = this.configManager.get("user_unique_id");
                    n && n !== t || (this.configManager.set({
                        user_unique_id: e
                    }), this.cacheToken.user_unique_id = e, this.collect.emit(V.TokenChange, {
                        type: "uuid",
                        id: e
                    })), t !== e && (this.configManager.set({
                        web_id: e
                    }), this.cacheToken.web_id = e, this.collect.emit(V.ProfileClear), this.collect.emit(V.TokenChange, {
                        type: "webid",
                        id: e
                    })), this.cacheToken.timestamp = Date.now(), this.setStorage(this.cacheToken)
                }
            }, t.prototype.setStorage = function(e) {
                e._type_ = this.enableCustomWebid ? "custom" : "default", delete e["diss".split("").reverse().join("")], this.enableCookie || this.enableTTwebid ? this.storage.setCookie(this.tokenKey, e, this.expiresTime, this.cookieDomain) : this.storage.setItem(this.tokenKey, e), this.cacheToken = e
            }, t.prototype.getReady = function() {
                return this.tokenReady
            }, t.prototype.getTobId = function(e) {
                var t = this,
                    n = {
                        app_id: this.config.app_id,
                        user_unique_id: this.configManager.get("user_unique_id"),
                        user_unique_id_type: this.configManager.get("user_unique_id_type")
                    };
                this.enableAnonymousid ? n.anonymous_id = this.configManager.get("anonymous_id") : n.web_id = this.configManager.get("web_id");
                var o = this.collect.cryptoData(n);
                this.collect.requestManager.useRequest({
                    url: this.configManager.getUrl("tobid"),
                    data: o,
                    success: function(n) {
                        n && 0 === n.e ? (e(n.tobid), t.collect.emit(U.DEBUGGER_MESSAGE, {
                            type: U.DEBUGGER_MESSAGE_SDK,
                            info: "GetToken请求成功",
                            logType: "fetch",
                            level: "info",
                            time: Date.now(),
                            data: n,
                            infoType: "sdk"
                        })) : (e(""), t.collect.emit(U.DEBUGGER_MESSAGE, {
                            type: U.DEBUGGER_MESSAGE_SDK,
                            info: "GetToken请求失败",
                            logType: "fetch",
                            level: "error",
                            time: Date.now(),
                            data: n,
                            infoType: "sdk"
                        }))
                    },
                    fail: function() {
                        e(""), t.collect.emit(U.DEBUGGER_MESSAGE, {
                            type: U.DEBUGGER_MESSAGE_SDK,
                            info: "GetToken请求失败",
                            logType: "fetch",
                            level: "error",
                            time: Date.now(),
                            infoType: "sdk"
                        })
                    },
                    time: this.timeout,
                    encryption: this.config.enable_encryption,
                    encryption_header: this.config.encryption_header
                })
            }, t.prototype.fetchBind = function(t) {
                var n = this,
                    o = t.params,
                    i = t.callback,
                    r = this.configManager.getUrl("bind"),
                    a = {
                        header: {
                            aid: this.configManager.get("app_id"),
                            identities: e({}, o)
                        }
                    };
                this.collect.requestManager.useRequest({
                    url: r,
                    data: a,
                    success: function(e) {
                        i(e), n.collect.sdkStop = !1, n.collect.emit(V.BindTokenReady)
                    },
                    fail: function(e) {
                        i(e), n.collect.sdkStop = !1, n.collect.emit(V.BindTokenReady)
                    },
                    time: 3e4,
                    encryption: this.config.enable_encryption,
                    encryption_header: this.config.encryption_header
                })
            }, t
        }(),
        ce = function() {
            return !(!window.navigator || !window.navigator.sendBeacon)
        },
        le = function() {
            function e(e, t) {
                var n = this;
                this.collector = e, this.config = t, this.requestType = t.request_type || "xhr", this.supportBeacon = ce(), this.errorCode = {
                    NO_URL: 4001,
                    IMG_ON: 4e3,
                    IMG_CATCH: 4002,
                    BEACON_FALSE: 4003,
                    XHR_ON: 500,
                    RESPONSE: 5001,
                    TIMEOUT: 5005
                }, this.customHeader = t.custom_request_header || {}, this.collector.on("custom-request-header", function(e) {
                    n.setRequestHeader(e)
                })
            }
            return e.prototype.setRequestHeader = function(e) {
                this.customHeader = Object.assign(this.customHeader, e)
            }, e.prototype.useFetch = function(e) {
                var t = e.url,
                    n = e.data,
                    o = e.method,
                    i = e.success,
                    r = e.fail,
                    a = {
                        "Content-Type": "application/json; charset=utf-8"
                    };
                if (Object.keys(this.customHeader).length)
                    for (var s in this.customHeader) a[s] = this.customHeader[s];
                window.fetch ? fetch(t, {
                    method: o || "POST",
                    headers: a,
                    body: JSON.stringify(n)
                }).then(function(e) {
                    return e.json()
                }).then(function(e) {
                    i && i(e)
                }).catch(function(e) {
                    r && r(n, e)
                }) : (this.requestType = "xhr", console.log("your brwoser not support fetch, use xhr"), this.useRequest({
                    url: t,
                    data: n,
                    method: o,
                    success: i,
                    fail: r
                }))
            }, e.prototype.useBeacon = function(e) {
                var t = e.url,
                    n = e.data,
                    o = e.success,
                    i = e.fail;
                window.navigator.sendBeacon(t, JSON.stringify(n)) ? o && o() : i && i(n, this.errorCode.BEACON_FALSE)
            }, e.prototype.useRequest = function(e) {
                var t = this,
                    n = e.url,
                    o = e.data,
                    i = e.method,
                    r = e.success,
                    a = e.fail,
                    s = e.timeout,
                    c = e.useBeacon,
                    l = e.withCredentials,
                    u = e.app_key,
                    h = e.forceXhr,
                    f = (e.encryption, e.encryption_header, e.status);
                e.zip;
                if (c && this.supportBeacon) this.useBeacon({
                    url: n,
                    data: o,
                    method: i,
                    success: r,
                    fail: a
                });
                else if ("fetch" !== this.requestType || h) try {
                    var p = null;
                    if (window.XDomainRequest && w()) {
                        p = new XDomainRequest;
                        var d = i || "post";
                        p.open(d, n), s && (p.timeout = s, p.ontimeout = function() {
                            a && a(o, t.errorCode.TIMEOUT)
                        }), p.onerror = function() {
                            p.abort(), a && a(o, t.errorCode.XHR_ON)
                        }, p.onload = function() {
                            if (r) {
                                var e = null;
                                if (p.responseText) {
                                    try {
                                        e = JSON.parse(p.responseText)
                                    } catch (t) {
                                        e = {}
                                    }
                                    r(e, o)
                                }
                            }
                        }, setTimeout(function() {
                            p.send(JSON.stringify(o))
                        }, 0)
                    } else if (window.ActiveXObject && k()) {
                        p = new ActiveXObject("Micrsorf.XMLHTTP");
                        d = i || "POST";
                        p.open(d, n), s && (p.timeout = s, p.ontimeout = function() {
                            a && a(o, t.errorCode.TIMEOUT)
                        }), p.onerror = function() {
                            p.abort(), a && a(o, t.errorCode.XHR_ON)
                        }, p.onload = function() {
                            if (r) {
                                var e = null;
                                if (p.responseText) {
                                    try {
                                        e = JSON.parse(p.responseText)
                                    } catch (t) {
                                        e = {}
                                    }
                                    r(e, o)
                                }
                            }
                        }, setTimeout(function() {
                            p.send(JSON.stringify(o))
                        }, 0)
                    } else if (window.XMLHttpRequest) {
                        p = new XMLHttpRequest;
                        d = i || "POST";
                        if (p.open(d, "".concat(n), !0), p.setRequestHeader("Content-Type", "application/json; charset=utf-8"), u && p.setRequestHeader("X-MCS-AppKey", "".concat(u)), Object.keys(this.customHeader).length)
                            for (var g in this.customHeader) p.setRequestHeader(g, this.customHeader[g]);
                        l && (p.withCredentials = !0), s && (p.timeout = s, p.ontimeout = function() {
                            a && a(o, t.errorCode.TIMEOUT)
                        }), p.onload = function() {
                            if (r) {
                                var e = null;
                                if (p.responseText) {
                                    try {
                                        e = JSON.parse(p.responseText)
                                    } catch (t) {
                                        e = {}
                                    }
                                    r(e, o, f), t.collector.emit("http-ok", {
                                        data: o,
                                        status: f
                                    })
                                }
                            }
                        }, p.onerror = function() {
                            a && a(o, t.errorCode.XHR_ON), t.collector.emit("http-error", {
                                data: o,
                                status: f
                            }), p.abort()
                        }, p.send(JSON.stringify(o))
                    }
                } catch (e) {
                    this.collector.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "SDK useRequest 发送请求发生了一些问题",
                        level: "error",
                        time: Date.now(),
                        data: e.message,
                        infoType: "sdk"
                    })
                } else this.useFetch({
                    url: n,
                    data: o,
                    method: i,
                    success: r,
                    fail: a
                })
            }, e
        }(),
        ue = function() {
            function t() {}
            return t.prototype.apply = function(e, t) {
                var n = this;
                if (!S()) {
                    this.collect = e, this.config = t, this.duration = 6e4, this.reportUrl = "".concat(e.configManager.getDomain(), "/profile/list");
                    var o = e.Types,
                        i = e.adapters.fetch;
                    this.fetch = i, this.cache = {}, this.collect.on(o.ProfileSet, function(e) {
                        n.setProfile(e)
                    }), this.collect.on(o.ProfileSetOnce, function(e) {
                        n.setOnceProfile(e)
                    }), this.collect.on(o.ProfileUnset, function(e) {
                        n.unsetProfile(e)
                    }), this.collect.on(o.ProfileIncrement, function(e) {
                        n.incrementProfile(e)
                    }), this.collect.on(o.ProfileAppend, function(e) {
                        n.appendProfile(e)
                    }), this.collect.on(o.ProfileClear, function() {
                        n.cache = {}
                    }), this.ready(o.Profile)
                }
            }, t.prototype.ready = function(e) {
                var t = this;
                if (this.collect.set(e), this.collect.hook._hooksCache.hasOwnProperty(e)) {
                    var n = this.collect.hook._hooksCache[e];
                    if (!Object.keys(n).length) return;
                    var o = function(e) {
                        n[e].length && n[e].forEach(function(n) {
                            t.collect.hook.emit(e, n)
                        })
                    };
                    for (var i in n) o(i)
                }
            }, t.prototype.report = function(e, t) {
                void 0 === t && (t = {});
                try {
                    if (this.config.disable_track_event) return;
                    if (this.collect.sdkStop) return;
                    var n = [];
                    n.push(this.collect.processEvent(e, t));
                    var o = this.collect.eventManager.merge(n, !0),
                        i = this.collect.cryptoData(o);
                    this.collect.configManager.getUrl("profile");
                    this.collect.requestManager.useRequest({
                        url: this.reportUrl,
                        data: i,
                        timeout: 1e5,
                        encryption: this.config.enable_encryption,
                        encryption_header: this.config.encryption_header,
                        zip: !0
                    }), this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_EVENT,
                        info: "profile 埋点上报成功",
                        time: Date.now(),
                        data: o,
                        code: 200,
                        status: "success"
                    })
                } catch (e) {
                    this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "profile report 发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: e.message,
                        infoType: "sdk"
                    })
                }
            }, t.prototype.setProfile = function(t) {
                var n = this.formatParams(t);
                n && Object.keys(n).length && (this.pushCache(n), this.report("__profile_set", e(e({}, n), {
                    profile: !0
                })))
            }, t.prototype.setOnceProfile = function(t) {
                var n = this.formatParams(t, !0);
                n && Object.keys(n).length && (this.pushCache(n), this.report("__profile_set_once", e(e({}, n), {
                    profile: !0
                })))
            }, t.prototype.incrementProfile = function(t) {
                t ? this.report("__profile_increment", e(e({}, t), {
                    profile: !0
                })) : console.warn("please check the params, must be object!!!")
            }, t.prototype.unsetProfile = function(t) {
                if (t) {
                    var n = {};
                    n[t] = "1", this.report("__profile_unset", e(e({}, n), {
                        profile: !0
                    }))
                } else console.warn("please check the key, must be string!!!")
            }, t.prototype.appendProfile = function(t) {
                if (t) {
                    var n = {};
                    for (var o in t) "string" == typeof t[o] || "Array" === Object.prototype.toString.call(t[o]).slice(8, -1) ? n[o] = t[o] : console.warn("please check the value of param: ".concat(o, ", must be string or array !!!"));
                    Object.keys(n).length && this.report("__profile_append", e(e({}, n), {
                        profile: !0
                    }))
                } else console.warn("please check the params, must be object!!!")
            }, t.prototype.pushCache = function(e) {
                var t = this;
                Object.keys(e).forEach(function(n) {
                    t.cache[n] = {
                        val: t.clone(e[n]),
                        timestamp: Date.now()
                    }
                })
            }, t.prototype.formatParams = function(e, t) {
                var n = this;
                void 0 === t && (t = !1);
                try {
                    if (!e || "[object Object]" !== Object.prototype.toString.call(e)) return void console.warn("please check the params type, must be object !!!");
                    var o = {};
                    for (var i in e) "string" == typeof e[i] || "number" == typeof e[i] || "Array" === Object.prototype.toString.call(e[i]).slice(8, -1) ? o[i] = e[i] : console.warn("please check the value of params:".concat(i, ", must be string,number,Array !!!"));
                    var r = Object.keys(o);
                    if (!r.length) return;
                    var a = Date.now();
                    return r.filter(function(o) {
                        var i = n.cache[o];
                        return t ? !i : !(i && n.compare(i.val, e[o]) && a - i.timestamp < n.duration)
                    }).reduce(function(e, t) {
                        return e[t] = o[t], e
                    }, {})
                } catch (e) {
                    this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: e.message
                    }), console.log("error")
                }
            }, t.prototype.compare = function(e, t) {
                try {
                    return JSON.stringify(e) === JSON.stringify(t)
                } catch (e) {
                    return this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: e.message
                    }), !1
                }
            }, t.prototype.clone = function(e) {
                try {
                    return JSON.parse(JSON.stringify(e))
                } catch (t) {
                    return this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: t.message
                    }), e
                }
            }, t.prototype.unReady = function() {
                console.warn("sdk is not ready, please use this api after start")
            }, t
        }(),
        he = function() {
            function e() {
                this.setUrl = "/service/2/log_settings", this.expire = 216e5
            }
            return e.prototype.apply = function(e, t) {
                if (t.enable_logsetting) {
                    this.collect = e, this.config = t;
                    var n = e.adapters.storage;
                    this.setKey = "__applog_web_logsetting_".concat(t.app_id), this.cacheStorgae = new n(!1), this.check()
                } else e.emit(V.LogSettingReady)
            }, e.prototype.check = function() {
                var e = this.getLocalData();
                e && Object.keys(e).length ? (null == e ? void 0 : e.timestamp) < Date.now() - this.expire ? this.setting() : (this.setLocalData(e), this.setting(!0)) : this.setting()
            }, e.prototype.setting = function(e) {
                var t = this;
                e ? this.collect.emit(V.LogSettingReady) : this.collect.requestManager.useRequest({
                    url: "".concat(this.collect.configManager.getDomain()).concat(this.setUrl),
                    data: {
                        magic_tag: "ss_app_log",
                        header: {
                            aid: this.config.app_id,
                            platform: "web"
                        }
                    },
                    timeout: 3e4,
                    success: function(e) {
                        (null == e ? void 0 : e.config) && t.setLocalData(e.config), t.collect.emit(V.LogSettingReady)
                    },
                    fail: function() {
                        t.collect.emit(V.LogSettingReady)
                    },
                    encryption: this.config.enable_encryption,
                    encryption_header: this.config.encryption_header
                })
            }, e.prototype.getLocalData = function() {
                return this.cacheStorgae.getItem(this.setKey)
            }, e.prototype.setLocalData = function(e) {
                this.collect.configManager.setSettingData(e), this.cacheStorgae.setItem(this.setKey, e)
            }, e
        }(),
        fe = {
            autotrack: {
                src: {
                    cn: "https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/5.0/plugin/autotrack.js",
                    sg: "https://lf16-data.bytepluscdn.com/obj/data-static-sg/log-sdk/collect/5.0/plugin/autotrack.js",
                    va: "https://lf16-data.bytepluscdn.com/obj/data-static-sg/log-sdk/collect/5.0/plugin/autotrack.js"
                },
                object: "LogAutoTrack"
            },
            ab: {
                src: {
                    cn: "https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/5.0/plugin/ab.js",
                    sg: "https://lf16-data.bytepluscdn.com/obj/data-static-sg/log-sdk/collect/5.0/plugin/ab.js",
                    va: "https://lf16-data.bytepluscdn.com/obj/data-static-sg/log-sdk/collect/5.0/plugin/ab.js"
                },
                object: "LogAb"
            },
            stay: {
                src: {
                    cn: "https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/5.0/plugin/stay.js",
                    sg: "https://lf16-data.bytepluscdn.com/obj/data-static-sg/log-sdk/collect/5.0/plugin/stay.js",
                    va: "https://lf16-data.bytepluscdn.com/obj/data-static-sg/log-sdk/collect/5.0/plugin/stay.js"
                },
                object: "LogStay"
            },
            route: {
                src: {
                    cn: "https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/5.0/plugin/route.js",
                    sg: "https://lf16-data.bytepluscdn.com/obj/data-static-sg/log-sdk/collect/5.0/plugin/route.js",
                    va: "https://lf16-data.bytepluscdn.com/obj/data-static-sg/log-sdk/collect/5.0/plugin/route.js"
                },
                object: "LogRoute"
            },
            tracer: {
                src: {
                    cn: "https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/5.0/plugin/tracer.js",
                    sg: "https://lf16-data.bytepluscdn.com/obj/data-static-sg/log-sdk/collect/5.0/plugin/tracer.js",
                    va: "https://lf16-data.bytepluscdn.com/obj/data-static-sg/log-sdk/collect/5.0/plugin/tracer.js"
                },
                object: "LogTracer"
            }
        },
        pe = function() {
            return "undefined" != typeof window ? (window.LogPluginObject || (window.LogPluginObject = {}), window.LogPluginObject) : null
        },
        de = pe(),
        ge = function() {
            function e() {}
            return e.prototype.apply = function(e, t) {
                this._plugin = {}, this.config = t, this.collect = e, this.channel = t.channel || "cn", this.loadExtend()
            }, e.prototype.loadExtend = function() {
                var e = this;
                try {
                    this.collect.remotePlugin.forEach(function(t, n) {
                        if ("sdk" === t)
                            if (fe.hasOwnProperty(n)) {
                                var o = fe[n].object,
                                    i = "".concat(fe[n].src[e.channel], "?query=").concat(Date.now());
                                e.exist(n, o, i)
                            } else console.warn("your ".concat(n, " is not exist，please check plugin name"));
                        else "object" == typeof t && (t.src ? e.exist(n, t.call, t.src) : e.process(n, t.instance, "INSTANCE"))
                    })
                } catch (e) {
                    this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: e.message
                    }), console.log("load extend error")
                }
            }, e.prototype.exist = function(e, t, n) {
                var o = this;
                de[t] ? this.process(e, de[t]) : this.loadPlugin(e, n, function() {
                    o.process(e, de[t]), console.log(" %c %s %s %s", "color: yellow; background-color: black;", "–", "load plugin:".concat(e, " success"), "-")
                }, function() {
                    console.log(" %c %s %s %s", "color: red; background-color: yellow;", "–", "load plugin:".concat(e, " error"), "-")
                })
            }, e.prototype.process = function(e, t, n) {
                try {
                    if (n) {
                        var o = new t;
                        o.apply && o.apply(this.collect, this.config), console.log("excude ".concat(e, " success"))
                    } else t && t(this.collect, this.config)
                } catch (t) {
                    this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: t.message
                    }), console.log("excude ".concat(e, " error, message:").concat(t.message))
                }
            }, e.prototype.loadPlugin = function(e, t, n, o) {
                var i = this;
                try {
                    var r = document.createElement("script");
                    r.src = t, this._plugin[e] || (this._plugin[e] = []), this._plugin[e].push(n), r.onerror = function() {
                        o(t)
                    }, r.onload = function() {
                        i._plugin[e].forEach(function(e) {
                            e()
                        })
                    }, document.getElementsByTagName("head")[0].appendChild(r)
                } catch (e) {
                    this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: e.message
                    })
                }
            }, e
        }(),
        ve = function() {
            function e(e, t) {
                if (this.devToolReady = !1, this.devToolOrigin = "*", this.sendAlready = !1, t.enable_debug && "Microsoft Internet Explorer" !== e.configManager.get("browser")) {
                    this.collect = e, this.config = t, this.app_id = t.app_id;
                    var n = e.adapters.storage;
                    this.cacheStorgae = new n(!1), this.loadUrl = t.devtool_url || "https://lf-static.applogcdn.com/obj/applog-sdk-static/log-sdk/collect/devtool/debug-web.v2.0.0.js", this.filterEvent = new Set(["__bav_page", "__bav_beat", "__bav_page_statistics", "__bav_click", "__bav_page_exposure", "bav2b_page", "bav2b_beat", "bav2b_page_statistics", "bav2b_click", "bav2b_page_exposure", "_be_active", "predefine_pageview", "__profile_set", "__profile_set_once", "__profile_increment", "__profile_unset", "__profile_append", "predefine_page_alive", "predefine_page_close", "abtest_exposure"]), this.load()
                }
            }
            return e.prototype.loadScript = function(e) {
                try {
                    var t = document.createElement("script");
                    t.src = e, t.onerror = function() {
                        console.log("load DevTool render fail")
                    }, t.onload = function() {
                        console.log("load DevTool render success")
                    }, document.getElementsByTagName("body")[0].appendChild(t)
                } catch (e) {
                    console.log("devTool load fail, ".concat(e.message))
                }
            }, e.prototype.parseUrl = function() {
                var e = {};
                try {
                    var t = window.location.href.split("?")[1].split("&");
                    t.length && t.forEach(function(t) {
                        var n = t.split("=");
                        e[decodeURIComponent(n[0])] = decodeURIComponent(n[1])
                    })
                } catch (e) {}
                return e
            }, e.prototype.load = function() {
                try {
                    this.loadBaseInfo(), this.loadHook(), this.setStorage(), this.addLintener(), this.loadDebuggerModule(), this.loadDevTool()
                } catch (e) {
                    console.log("debug fail, ".concat(e.message))
                }
            }, e.prototype.getStorage = function() {
                var e = this.cacheStorgae.getItem("__applog_open_devtool_web");
                return e && parseInt(e) === this.app_id
            }, e.prototype.setStorage = function() {
                this.cacheStorgae.setItem("__applog_open_devtool_web", this.app_id)
            }, e.prototype.loadDevTool = function() {
                this.loadScript(this.loadUrl)
            }, e.prototype.loadBaseInfo = function() {
                if (this.log = [], this.event = [], this.info = [{
                        title: "基本信息",
                        key: "base",
                        type: 1,
                        content: [{
                            name: "app_id",
                            desc: "APP_ID",
                            value: this.config.app_id
                        }, {
                            name: "channel",
                            desc: "CHANNEL",
                            value: this.config.channel
                        }, {
                            name: "domain",
                            desc: "上报域名",
                            value: this.collect.configManager.getDomain()
                        }, {
                            name: "sdk_version",
                            desc: "SDK版本",
                            value: B
                        }, {
                            name: "sdk_type",
                            desc: "SDK引入方式",
                            value: "script"
                        }]
                    }, {
                        title: "用户信息",
                        key: "user",
                        type: 2,
                        content: [{
                            name: "uuid",
                            desc: "UUID",
                            value: this.collect.configManager.get("user").user_unique_id || ""
                        }, {
                            name: "web_id",
                            desc: "WEB_ID",
                            value: this.collect.configManager.get("user").web_id || ""
                        }]
                    }, {
                        title: "公共参数信息",
                        type: 2,
                        key: "common",
                        content: [{
                            name: "browser",
                            desc: "浏览器",
                            value: this.collect.configManager.get("browser")
                        }, {
                            name: "browser_version",
                            desc: "浏览器版本",
                            value: this.collect.configManager.get("browser_version")
                        }, {
                            name: "platform",
                            desc: "平台",
                            value: this.collect.configManager.get("platform")
                        }, {
                            name: "device_model",
                            desc: "设备型号",
                            value: this.collect.configManager.get("device_model")
                        }, {
                            name: "os_name",
                            desc: "操作系统",
                            value: this.collect.configManager.get("os_name")
                        }, {
                            name: "os_version",
                            desc: "操作系统版本",
                            value: this.collect.configManager.get("os_version")
                        }, {
                            name: "resolution",
                            desc: "屏幕分辨率",
                            value: this.collect.configManager.get("resolution")
                        }, {
                            name: "referrer",
                            desc: "来源",
                            value: this.collect.configManager.get("referrer")
                        }, {
                            name: "custom",
                            desc: "自定义信息",
                            value: JSON.stringify(this.collect.configManager.get("custom"))
                        }]
                    }, {
                        title: "配置信息",
                        key: "config",
                        type: 3,
                        content: [{
                            name: "autotrack",
                            desc: "全埋点",
                            value: !!this.config.autotrack
                        }, {
                            name: "stay",
                            desc: "停留时长",
                            value: !!this.config.enable_stay_duration
                        }]
                    }, {
                        title: "A/B配置信息",
                        key: "ab",
                        type: 4,
                        content: [{
                            name: "ab",
                            desc: "A/B实验",
                            value: !!this.config.enable_ab_test
                        }]
                    }], this.config.enable_ab_test) {
                    var e = this.getInfo("ab"),
                        t = [{
                            name: "ab",
                            desc: "A/B实验",
                            value: !!this.config.enable_ab_test
                        }, {
                            name: "vid",
                            desc: "已曝光VID",
                            value: this.collect.configManager.getAbVersion()
                        }, {
                            name: "ab_domain",
                            desc: "A/B域名",
                            value: this.config.ab_channel_domain || d(L[this.config.channel])
                        }, {
                            name: "all_values",
                            desc: "全部配置",
                            value: this.collect.configManager.getAbCache()
                        }];
                    e.content = t, this.setInfo("ab", e)
                }
                if (this.config.enable_native || this.config.Native) {
                    var n = {
                        title: "客户端信息",
                        type: 3,
                        content: [{
                            name: "native",
                            desc: "是否打通",
                            value: !!this.collect.bridgeReport
                        }]
                    };
                    this.setInfo("native", n)
                }
                if (B.includes("tob")) {
                    var o = this.getInfo("user");
                    o.content.push({
                        name: "sid",
                        desc: "DISS".split("").reverse().join(""),
                        value: "点击获取"
                    }), this.setInfo("user", o)
                }
            }, e.prototype.getInfo = function(e) {
                var t = null;
                return this.info.forEach(function(n) {
                    n.key === e && (t = n)
                }), t
            }, e.prototype.setInfo = function(e, t) {
                var n = !1;
                this.info.forEach(function(o) {
                    o.key === e && (n = !0, o = t)
                }), n || this.info.push(t)
            }, e.prototype.getSecondInfo = function(e, t) {
                var n = this.getInfo(e),
                    o = null;
                return n.content.forEach(function(e) {
                    e.name === t && (o = e)
                }), o
            }, e.prototype.setSecondInfo = function(e, t, n) {
                var o = this.getInfo(e),
                    i = !1;
                if (o.content.forEach(function(e) {
                        e.name === t && (e.value = n, i = !0)
                    }), !i) {
                    var r = {
                        name: t,
                        value: n,
                        desc: t.toLocaleUpperCase()
                    };
                    o.content.push(r)
                }
                this.setInfo(e, o)
            }, e.prototype.loadHook = function() {
                var e = this;
                this.collect.on(U.DEBUGGER_MESSAGE, function(t) {
                    switch (t.type) {
                        case U.DEBUGGER_MESSAGE_SDK:
                            var n = {
                                time: t.time,
                                type: t.logType || "sdk",
                                infoType: t.infoType || "sdk",
                                level: t.level,
                                name: t.info,
                                show: !0,
                                levelShow: !0,
                                needDesc: !!t.data
                            };
                            if (t.data && (n.desc = {
                                    content: JSON.stringify(t.data)
                                }), e.updateLog(n), t.secType && "AB" === t.secType) e.setSecondInfo("ab", "vid", e.collect.configManager.getAbVersion()), e.setSecondInfo("ab", "all_values", e.collect.configManager.getAbCache());
                            else if ("USER" === t.secType) e.setSecondInfo("user", "user_unique_id" === t.common ? "uuid" : t.common, e.collect.configManager.get(t.common));
                            else if ("HEADER" === t.secType) {
                                var o = e.collect.configManager.get(t.common);
                                e.setSecondInfo("common", t.common, "custom" === t.common ? JSON.stringify(o) : o)
                            }
                            return void e.updateInfo();
                        case U.DEBUGGER_MESSAGE_EVENT:
                            if (t.data && t.data.length) {
                                var i = t.data[0],
                                    r = i.events;
                                if (!r.length) return;
                                r.forEach(function(n) {
                                    n.checkShow = !0, n.searchShow = !0, n.focusShow = !0, n.status = t.status, n.type = e.filterEvent.has(n.event) ? "sdk" : "cus", n.verifyType = t.verifyType ? "verify" : "no", n.info = "", "fail" === t.status && (n.info = {
                                        message: "code: ".concat(t.code, "， msg: ").concat(t.msg || t.failType)
                                    })
                                }), e.updateEvent(i)
                            }
                            return
                    }
                })
            }, e.prototype.addLintener = function() {
                var e = this;
                window.addEventListener("message", function(t) {
                    if (t && t.data && "devtool:web:ready" === t.data.type) {
                        if (e.devToolOrigin = t.origin, e.devToolReady = !0, e.sendAlready) return;
                        e.sendData("devtool:web:init", {
                            info: e.info,
                            log: e.log,
                            event: e.event,
                            sdk_type: B.includes("tob") ? "tob" : "inner",
                            appId: e.app_id
                        }), e.sendAlready = !0
                    }
                    t && t.data && "devtool:web:ssid" === t.data.type && e.collect.getToken(function(t) {
                        e.setSecondInfo("user", "sid", t.tobid), e.updateInfo()
                    })
                })
            }, e.prototype.sendData = function(e, t) {
                try {
                    var n = {
                        type: e,
                        payload: t
                    };
                    window && window.postMessage(n, this.devToolOrigin)
                } catch (e) {}
            }, e.prototype.updateInfo = function() {
                this.devToolReady && this.sendData("devtool:web:info", this.info)
            }, e.prototype.updateLog = function(e) {
                this.devToolReady ? this.sendData("devtool:web:log", e) : this.log.push(e)
            }, e.prototype.updateEvent = function(e) {
                this.devToolReady ? this.sendData("devtool:web:event", e) : this.event.push(e)
            }, e.prototype.loadDebuggerModule = function() {
                var e = "#debugger-applog-web {\n      position: fixed;\n      width: 45px;\n      height: 45px;\n      background-image: url(".concat(d("1fz22z22z1nz21z4mz4bz4bz1jz1dz49z1az1bz1lz49z22z1mz21z4az19z27z22z1cz21z1az1kz4az1az1mz1kz4bz1mz19z1hz4bz21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz1bz1cz24z22z1mz1mz1jz4bz18z1nz1nz1jz1mz1ez4az1nz1lz1e"), ");\n      bottom: 5%;\n      right: 10%;\n      cursor: pointer;\n      z-index:100;\n      background-size: 45px;\n    }"),
                    t = document.head || document.getElementsByTagName("head")[0],
                    n = document.createElement("style");
                n.appendChild(document.createTextNode(e)), t.appendChild(n);
                var o = document.createElement("div");
                o.innerHTML = '<div id="debugger-applog-web" class="debugger-applog-web"></div>';
                var i = document.createElement("div");
                i.innerHTML = '<div id="debugger-container" class="debugger-container"></div>', document.getElementsByTagName("body")[0].appendChild(o), document.getElementsByTagName("body")[0].appendChild(i);
                var r = document.getElementById("debugger-applog-web");
                r && r.addEventListener("click", function() {
                    window && window.postMessage({
                        type: "devtool:web:open-draw"
                    }, location.origin)
                })
            }, e
        }();
    var me = function() {
            function t(e) {
                this.disableAutoPageView = !1, this.bridgeReport = !1, this.staging = !1, this.pluginInstances = [], this.sended = !1, this.started = !1, this.destroyInstance = !1, this.adapters = {}, this.sdkReady = !1, this.name = e, this.hook = new a(this), this.logger = new X(e), this.remotePlugin = new Map, this.Types = V, this.adapters.fetch = Y, this.adapters.storage = x
            }
            return t.usePlugin = function(e, n, o) {
                if (n) {
                    for (var i = !1, r = 0, a = t.plugins.length; r < a; r++) {
                        if (t.plugins[r].name === n) {
                            t.plugins[r].plugin = e, t.plugins[r].options = o || {}, i = !0;
                            break
                        }
                    }
                    i || t.plugins.push({
                        name: n,
                        plugin: e,
                        options: o
                    })
                } else t.plugins.push({
                    plugin: e
                })
            }, t.prototype.usePlugin = function(e, t, n) {
                e && (this.remotePlugin.get(e) ? console.info("your sdk version has ".concat(e, " already ~")) : t ? "string" == typeof t ? this.remotePlugin.get(e) || this.remotePlugin.set(e, {
                    src: t,
                    call: n
                }) : this.remotePlugin.get(e) || this.remotePlugin.set(e, {
                    instance: t
                }) : this.remotePlugin.get(e) || this.remotePlugin.set(e, "sdk"))
            }, t.prototype.init = function(e) {
                var n, o = this;
                if (this.inited) console.log("init can be call only one time");
                else if (e && s(e))
                    if (e.app_id && ("number" == typeof(n = e.app_id) && !isNaN(n)))
                        if (!e.app_key || function(e) {
                                return "string" == typeof e
                            }(e.app_key))
                            if (e.channel_domain || -1 !== ["cn", "sg", "va"].indexOf(e.channel) || (console.warn("channel must be `cn`, `sg`,`va` !!!"), e.channel = "cn"), this.logger = new X(this.name, e.log), this.configManager = new W(this, e), this.appBridge = new $(e, this.configManager), this.bridgeReport = this.appBridge.bridgeInject(), this.requestManager = new le(this, e), this.logSetting = new he, this.debugger = new ve(this, e), this.initConfig = e, this.env = e.channel_domain ? "self" : "public", this.emit(U.DEBUGGER_MESSAGE, {
                                    type: U.DEBUGGER_MESSAGE_SDK,
                                    info: "SDK 执行Init",
                                    data: e,
                                    level: "info",
                                    time: Date.now(),
                                    infoType: "cus"
                                }), e.disable_auto_pv && (this.disableAutoPageView = !0), this.bridgeReport) {
                                try {
                                    t.plugins.length && t.plugins.reduce(function(e, t) {
                                        var n = t.plugin,
                                            i = t.options;
                                        if ("stay" === (null == t ? void 0 : t.name) || "autotrack" === (null == t ? void 0 : t.name)) {
                                            var r = Object.assign(o.initConfig, i),
                                                a = new n;
                                            a.apply(o, r), e.push(a)
                                        }
                                        return e
                                    }, this.pluginInstances)
                                } catch (e) {
                                    console.log("load plugin error, ".concat(e.message)), this.emit(U.DEBUGGER_MESSAGE, {
                                        type: U.DEBUGGER_MESSAGE_SDK,
                                        info: "SDK加载插件发生了异常",
                                        level: "error",
                                        time: Date.now(),
                                        data: e.message,
                                        infoType: "sdk"
                                    })
                                }
                                this.inited = !0, this.emit(V.Init)
                            } else this.configManager.set({
                                app_id: e.app_id
                            }), this.eventManager = new re, this.tokenManager = new se, this.sessionManager = new oe, this.profileManager = new ue, this.extendManager = new ge, Promise.all([new Promise(function(e) {
                                o.once(V.TokenComplete, function() {
                                    e(!0)
                                })
                            }), new Promise(function(e) {
                                o.once(V.Start, function() {
                                    e(!0)
                                })
                            }), new Promise(function(e) {
                                o.once(V.LogSettingReady, function() {
                                    e(!0)
                                })
                            })]).then(function() {
                                o.ready(e)
                            }).catch(function(e) {
                                console.log(e)
                            }), this.logSetting.apply(this, e), this.tokenManager.apply(this, e), this.eventManager.apply(this, e), this.sessionManager.apply(this, e), this.inited = !0, this.emit(V.Init);
                else console.warn("app_key param is error, must be string, please check!");
                else console.warn("app_id param is error, must be number, please check!");
                else console.warn("init params error,please check")
            }, t.prototype.ready = function(e) {
                var n = this;
                try {
                    this.extendManager.apply(this, this.initConfig), t.plugins.length && t.plugins.reduce(function(e, t) {
                        var o = t.plugin,
                            i = t.options,
                            r = Object.assign(n.initConfig, i),
                            a = new o;
                        return a.apply(n, r), e.push(a), n.emit(U.DEBUGGER_MESSAGE, {
                            type: U.DEBUGGER_MESSAGE_SDK,
                            info: "SDK加载".concat(t.name, "插件"),
                            level: "info",
                            time: Date.now(),
                            infoType: "sdk"
                        }), e
                    }, this.pluginInstances)
                } catch (e) {
                    console.log("load plugin error, ".concat(e.message)), this.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "SDK加载插件发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: e.message,
                        infoType: "sdk"
                    })
                }
                this.sdkReady = !0, this.emit(V.Ready), this.emit(V.CloudReady, {
                    userInfo: this.configManager.get("user")
                }), this.emit(U.DEBUGGER_MESSAGE, {
                    type: U.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 用户信息初始化完成",
                    time: Date.now(),
                    secType: "USER",
                    level: "info",
                    data: this.configManager.get("user"),
                    infoType: "sdk"
                }), this.emit(U.DEBUGGER_MESSAGE, {
                    type: U.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 初始化完成",
                    time: Date.now(),
                    level: "info",
                    data: this.configManager.get("user"),
                    infoType: "sdk"
                }), this.logger.info("appid: ".concat(e.app_id, ", userInfo:").concat(JSON.stringify(this.configManager.get("user")))), this.logger.info("appid: ".concat(e.app_id, ", sdk is ready, version is ").concat(B, ", you can report now !!!")), this.profileManager.apply(this, e);
                try {
                    (window.opener || window.parent).postMessage("[tea-sdk]ready", "*")
                } catch (e) {
                    this.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "SDK发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: e.message,
                        infoType: "sdk"
                    })
                }
                this.pageView(), this.on(V.TokenChange, function(t) {
                    "webid" !== t.type && "anonymous_id" !== t.type || n.pageView(), n.logger.info("appid: ".concat(e.app_id, " token change, new userInfo:").concat(JSON.stringify(n.configManager.get("user")))), n.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "SDK 设置了用户信息",
                        time: Date.now(),
                        secType: "USER",
                        level: "info",
                        data: n.configManager.get("user"),
                        infoType: "sdk"
                    })
                }), this.on(V.TokenReset, function() {
                    n.logger.info("appid: ".concat(e.app_id, " token reset, new userInfo:").concat(JSON.stringify(n.configManager.get("user")))), n.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "SDK 重置了用户信息",
                        time: Date.now(),
                        secType: "USER",
                        level: "info",
                        data: n.configManager.get("user"),
                        infoType: "sdk"
                    })
                }), this.on(V.RouteChange, function(t) {
                    t.init || e.disable_route_report || n.pageView(t.config)
                }), this.on(V.ReStart, function() {
                    n.pageView()
                })
            }, t.prototype.config = function(t) {
                if (this.inited)
                    if (t && s(t))
                        if (this.bridgeReport) this.appBridge.setConfig(t);
                        else {
                            t._staging_flag && 1 === t._staging_flag && (this.staging = !0), t.disable_auto_pv && (this.disableAutoPageView = !0, delete t.disable_auto_pv);
                            var n = e({}, t);
                            if (this.initConfig && this.initConfig.configPersist) {
                                var o = this.configManager.getStore();
                                o && (n = Object.assign(o, t)), this.configManager.setStore(t)
                            }
                            n.web_id, n.user_unique_id;
                            var i = function(e, t) {
                                var n = {};
                                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                    var i = 0;
                                    for (o = Object.getOwnPropertySymbols(e); i < o.length; i++) t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]])
                                }
                                return n
                            }(n, ["web_id", "user_unique_id"]);
                            n.hasOwnProperty("web_id") && this.emit(V.ConfigWebId, n.web_id), n.hasOwnProperty("user_unique_id") && this.emit(V.ConfigUuid, n.user_unique_id), this.emit(V.ConfigTransform, n), this.configManager.set(i), this.emit(U.DEBUGGER_MESSAGE, {
                                type: U.DEBUGGER_MESSAGE_SDK,
                                info: "SDK 执行Config",
                                level: "info",
                                time: Date.now(),
                                data: n,
                                infoType: "cus"
                            })
                        }
                else this.logger.warn("config params is error, please check");
                else this.logger.warn("config must be use after function init")
            }, t.prototype.setUserUniqueID = function(e) {
                this.config({
                    user_unique_id: e
                })
            }, t.prototype.setHeaderInfo = function(e, t) {
                var n = {};
                n[e] = t, this.config(n)
            }, t.prototype.removeHeaderInfo = function(e) {
                var t = {};
                t[e] = void 0, this.config(t)
            }, t.prototype.setDomain = function(e) {
                this.configManager && this.configManager.setDomain(e), this.emit(V.ConfigDomain)
            }, t.prototype.getConfig = function(e) {
                return this.configManager.get(e)
            }, t.prototype.send = function() {
                this.start()
            }, t.prototype.start = function() {
                this.inited && !this.sended && (this.sended = !0, this.emit(V.Start), this.emit(U.DEBUGGER_MESSAGE, {
                    type: U.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 执行Start",
                    level: "info",
                    time: Date.now(),
                    infoType: "cus"
                }), this.bridgeReport && (this.pageView(), this.emit(V.Ready)))
            }, t.prototype.event = function(e, t) {
                var n = this;
                try {
                    if (this.initConfig && this.initConfig.disable_track_event) return;
                    var o = [];
                    if (Array.isArray(e)) e.forEach(function(e) {
                        var t = n.processEvent(e[0], e[1] || {});
                        t && o.push(t)
                    });
                    else {
                        var i = this.processEvent(e, t);
                        if (!i) return;
                        o.push(i)
                    }
                    this.bridgeReport ? o.forEach(function(e) {
                        var t = e.event,
                            o = e.params;
                        n.appBridge.onEventV3(t, JSON.stringify(o))
                    }) : o.length && (this.emit(V.Event, o), this.emit(V.SessionResetTime)), this.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "SDK 执行Event",
                        level: "info",
                        time: Date.now(),
                        data: e,
                        infoType: "cus"
                    })
                } catch (e) {
                    this.logger.warn("something error, please check"), this.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "SDK 执行Event发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: e.message,
                        infoType: "sdk"
                    })
                }
            }, t.prototype.beconEvent = function(e, t) {
                var n = this;
                if (!this.initConfig || !this.initConfig.disable_track_event)
                    if (Array.isArray(e)) console.warn("beconEvent not support batch report, please check");
                    else {
                        var o = [],
                            i = this.processEvent(e, t || {});
                        i && (o.push(i), this.bridgeReport ? o.forEach(function(e) {
                            var t = e.event,
                                o = e.params;
                            n.appBridge.onEventV3(t, JSON.stringify(o))
                        }) : o.length && (this.emit(V.BeconEvent, o), this.emit(V.SessionResetTime)), this.emit(U.DEBUGGER_MESSAGE, {
                            type: U.DEBUGGER_MESSAGE_SDK,
                            info: "SDK 执行Beacon Event",
                            level: "info",
                            time: Date.now(),
                            data: e,
                            infoType: "sdk"
                        }))
                    }
            }, t.prototype.processEvent = function(e, t) {
                void 0 === t && (t = {});
                try {
                    if (!e) return this.logger.warn("eventName is null， please check"), null;
                    var n = e;
                    /^event\./.test(e) && (n = e.slice(6));
                    var o = t;
                    "object" != typeof o && (o = {}), o.profile ? delete o.profile : o.event_index = h();
                    var i = void 0;
                    return o.local_ms ? (i = o.local_ms, delete o.local_ms) : i = +new Date, {
                        event: n,
                        params: o,
                        local_time_ms: i,
                        is_bav: this.initConfig && this.initConfig.autotrack ? 1 : 0
                    }
                } catch (n) {
                    return this.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "SDK发生了异常",
                        level: "error",
                        time: Date.now(),
                        data: n.message,
                        infoType: "sdk"
                    }), {
                        event: e,
                        params: t
                    }
                }
            }, t.prototype.dynamicParams = function(e) {
                this.dynamicParamsFilter = e
            }, t.prototype.filterEvent = function(e) {
                this.eventFilter = e
            }, t.prototype.on = function(e, t) {
                this.hook.on(e, t)
            }, t.prototype.once = function(e, t) {
                this.hook.once(e, t)
            }, t.prototype.off = function(e, t) {
                this.hook.off(e, t)
            }, t.prototype.emit = function(e, t, n) {
                this.hook.emit(e, t, n)
            }, t.prototype.set = function(e) {
                this.hook.set(e)
            }, t.prototype.pageView = function(e) {
                this.disableAutoPageView || this.predefinePageView(e)
            }, t.prototype.predefinePageView = function(t) {
                if (void 0 === t && (t = {}), this.inited) {
                    var n = {
                            title: document.title || location.pathname,
                            url: location.href,
                            url_path: this.handlePath(),
                            time: Date.now(),
                            referrer: window.document.referrer,
                            $is_first_time: "".concat(this.configManager && this.configManager.is_first_time || !1)
                        },
                        o = e(e({}, n), t);
                    this.event("predefine_pageview", o), this.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "SDK 上报PV",
                        level: "info",
                        time: Date.now(),
                        infoType: "sdk"
                    })
                } else console.warn("predefinePageView should call after init")
            }, t.prototype.handlePath = function() {
                var e = location.pathname;
                try {
                    if (this.initConfig.allow_hash) {
                        var t = new URL(location.href).hash.match(/#\/([^?#]+)/i);
                        return t && t.length ? t[1] : location.pathname
                    }
                } catch (t) {
                    e = location.pathname
                }
                return e
            }, t.prototype.clearEventCache = function() {
                this.emit(V.CleanEvents)
            }, t.prototype.setWebIDviaUnionID = function(e) {
                if (e) {
                    var t = E(e);
                    this.config({
                        web_id: "".concat(t),
                        wechat_unionid: e
                    }), this.emit(V.CustomWebId)
                }
            }, t.prototype.setWebIDviaOpenID = function(e) {
                if (e) {
                    var t = E(e);
                    this.config({
                        web_id: "".concat(t),
                        wechat_openid: e
                    }), this.emit(V.CustomWebId)
                }
            }, t.prototype.setAnonymousId = function(e) {
                this.emit(V.AnonymousId, e)
            }, t.prototype.setNativeAppId = function(e) {
                this.bridgeReport && this.appBridge.setNativeAppId(e)
            }, t.prototype.setRequestHeaders = function(e) {
                this.emit(V.CustomHeader, e)
            }, t.prototype.resetStayDuration = function(e, t, n) {
                void 0 === e && (e = ""), void 0 === t && (t = ""), void 0 === n && (n = ""), this.emit(V.ResetStay, {
                    url_path: e,
                    title: t,
                    url: n
                }, V.Stay)
            }, t.prototype.resetStayParams = function(e, t, n) {
                void 0 === e && (e = ""), void 0 === t && (t = ""), void 0 === n && (n = ""), this.emit(V.SetStay, {
                    url_path: e,
                    title: t,
                    url: n
                }, V.Stay)
            }, t.prototype.getToken = function(t, n) {
                var o = this;
                if (this.inited) {
                    var i = !1,
                        r = function(n) {
                            if (!i) {
                                i = !0;
                                var r = o.configManager.get().user;
                                return n && (r.tobid = n, r["diss".split("").reverse().join("")] = n), t(e({}, r))
                            }
                        },
                        a = function() {
                            o.tokenManager.getTobId(function(e) {
                                r(e)
                            })
                        };
                    this.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "SDK 执行GetToken",
                        level: "info",
                        time: Date.now(),
                        infoType: "cus"
                    }), this.sdkReady ? a() : (n && setTimeout(function() {
                        r()
                    }, n), this.on(V.Ready, function() {
                        a()
                    }))
                } else this.logger.warn("getToken must be use after function init")
            }, t.prototype.bindToken = function(e, t) {}, t.prototype.setResourceEvent = function(e) {
                this.emit(V.SetResource, e)
            }, t.prototype.startTrackEvent = function(e) {
                e && this.emit(V.TrackDurationStart, e, V.TrackDuration)
            }, t.prototype.endTrackEvent = function(e, t) {
                void 0 === t && (t = {}), e && this.emit(V.TrackDurationEnd, {
                    eventName: e,
                    params: t
                }, V.TrackDuration)
            }, t.prototype.pauseTrackEvent = function(e) {
                e && this.emit(V.TrackDurationPause, e, V.TrackDuration)
            }, t.prototype.resumeTrackEvent = function(e) {
                e && this.emit(V.TrackDurationResume, e, V.TrackDuration)
            }, t.prototype.profileSet = function(e) {
                this.bridgeReport ? this.appBridge.profileSet(JSON.stringify(e)) : this.emit(V.ProfileSet, e, V.Profile), this.emit(U.DEBUGGER_MESSAGE, {
                    type: U.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 执行profileSet",
                    level: "info",
                    time: Date.now(),
                    data: e,
                    infoType: "cus"
                })
            }, t.prototype.profileSetOnce = function(e) {
                this.bridgeReport ? this.appBridge.profileSetOnce(JSON.stringify(e)) : this.emit(V.ProfileSetOnce, e, V.Profile), this.emit(U.DEBUGGER_MESSAGE, {
                    type: U.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 执行profileSetOnce",
                    level: "info",
                    time: Date.now(),
                    data: e,
                    infoType: "cus"
                })
            }, t.prototype.profileIncrement = function(e) {
                this.bridgeReport ? this.appBridge.profileIncrement(JSON.stringify(e)) : this.emit(V.ProfileIncrement, e, V.Profile), this.emit(U.DEBUGGER_MESSAGE, {
                    type: U.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 执行profileIncrement",
                    level: "info",
                    time: Date.now(),
                    data: e,
                    infoType: "cus"
                })
            }, t.prototype.profileUnset = function(e) {
                this.bridgeReport ? this.appBridge.profileUnset(e) : this.emit(V.ProfileUnset, e, V.Profile), this.emit(U.DEBUGGER_MESSAGE, {
                    type: U.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 执行profileUnset",
                    level: "info",
                    time: Date.now(),
                    data: e,
                    infoType: "cus"
                })
            }, t.prototype.profileAppend = function(e) {
                this.bridgeReport ? this.appBridge.profileAppend(JSON.stringify(e)) : this.emit(V.ProfileAppend, e, V.Profile), this.emit(U.DEBUGGER_MESSAGE, {
                    type: U.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 执行profileAppend",
                    level: "info",
                    time: Date.now(),
                    data: e,
                    infoType: "cus"
                })
            }, t.prototype.setExternalAbVersion = function(e) {
                this.bridgeReport ? this.appBridge.setExternalAbVersion(e) : this.emit(V.AbExternalVersion, "string" == typeof e && e ? "".concat(e).trim() : null, V.Ab)
            }, t.prototype.getVar = function(e, t, n) {
                this.bridgeReport ? this.appBridge.getVar(e, t, n) : this.emit(V.AbVar, {
                    name: e,
                    defaultValue: t,
                    callback: n
                }, V.Ab)
            }, t.prototype.getAllVars = function(e) {
                this.bridgeReport ? this.appBridge.getAllVars(e) : this.emit(V.AbAllVars, e, V.Ab)
            }, t.prototype.getABconfig = function(e, t) {
                this.emit(V.AbConfig, {
                    params: e,
                    callback: t
                }, V.Ab)
            }, t.prototype.getAbSdkVersion = function(e) {
                if (!this.bridgeReport || !e) return this.configManager.getAbVersion() || "";
                this.appBridge.getAbSdkVersion(e)
            }, t.prototype.onAbSdkVersionChange = function(e) {
                var t = this;
                return this.emit(V.AbVersionChangeOn, e, V.Ab),
                    function() {
                        t.emit(V.AbVersionChangeOff, e, V.Ab)
                    }
            }, t.prototype.offAbSdkVersionChange = function(e) {
                this.emit(V.AbVersionChangeOff, e, V.Ab)
            }, t.prototype.openOverlayer = function() {
                this.emit(V.AbOpenLayer, "", V.Ab)
            }, t.prototype.closeOverlayer = function() {
                this.emit(V.AbCloseLayer, "", V.Ab)
            }, t.prototype.initCrypto = function() {
                this.publicKey = this.initConfig.crypto_publicKey || "04BA9E229380DC0E41E10839B0C52A4763D3EDFE8903F3B8E81395523381E03AA995D295BD4A4088792E4785B224F7837EB4D2C7C05973C7AE8687A35ACAE470A0"
            }, t.prototype.cryptoData = function(e) {
                return e
            }, t.prototype.stop = function() {
                this.sdkStop = !0
            }, t.prototype.reStart = function() {
                this.sdkStop = !1, this.emit(V.ReStart)
            }, t.prototype.destoryInstace = function() {
                this.destroyInstance || (this.destroyInstance = !0, this.off(V.TokenComplete))
            }, t.prototype.destoryInstance = function() {
                this.destroyInstance || (this.destroyInstance = !0, this.off(V.TokenComplete))
            }, t.prototype.setExposureType = function(e) {
                this.emit(V.SetExposureType, e)
            }, t.plugins = [], t
        }(),
        ye = "__rangers_ab_style__";
    ! function(e) {
        var t = function() {
                try {
                    return !!Symbol.iterator
                } catch (e) {
                    return !1
                }
            }(),
            n = function(e) {
                var n = {
                    next: function() {
                        var t = e.shift();
                        return {
                            done: void 0 === t,
                            value: t
                        }
                    }
                };
                return t && (n[Symbol.iterator] = function() {
                    return n
                }), n
            },
            o = function(e) {
                return encodeURIComponent(e).replace(/%20/g, "+")
            },
            i = function(e) {
                return decodeURIComponent(String(e).replace(/\+/g, " "))
            };
        (function() {
            try {
                var t = e.URLSearchParams;
                return "a=1" === new t("?a=1").toString() && "function" == typeof t.prototype.set && "function" == typeof t.prototype.entries
            } catch (t) {
                return !1
            }
        })() || function() {
            var i = function e(t) {
                    Object.defineProperty(this, "_entries", {
                        writable: !0,
                        value: {}
                    });
                    var n = typeof t;
                    if ("undefined" === n);
                    else if ("string" === n) "" !== t && this._fromString(t);
                    else if (t instanceof e) {
                        var o = this;
                        t.forEach(function(e, t) {
                            o.append(t, e)
                        })
                    } else {
                        if (null === t || "object" !== n) throw new TypeError("Unsupported input's type for URLSearchParams");
                        if ("[object Array]" === Object.prototype.toString.call(t))
                            for (var i = 0; i < t.length; i++) {
                                var r = t[i];
                                if ("[object Array]" !== Object.prototype.toString.call(r) && 2 === r.length) throw new TypeError("Expected [string, any] as entry at index " + i + " of URLSearchParams's input");
                                this.append(r[0], r[1])
                            } else
                                for (var a in t) t.hasOwnProperty(a) && this.append(a, t[a])
                    }
                },
                r = i.prototype;
            r.append = function(e, t) {
                e in this._entries ? this._entries[e].push(String(t)) : this._entries[e] = [String(t)]
            }, r.delete = function(e) {
                delete this._entries[e]
            }, r.get = function(e) {
                return e in this._entries ? this._entries[e][0] : null
            }, r.getAll = function(e) {
                return e in this._entries ? this._entries[e].slice(0) : []
            }, r.has = function(e) {
                return e in this._entries
            }, r.set = function(e, t) {
                this._entries[e] = [String(t)]
            }, r.forEach = function(e, t) {
                var n;
                for (var o in this._entries)
                    if (this._entries.hasOwnProperty(o)) {
                        n = this._entries[o];
                        for (var i = 0; i < n.length; i++) e.call(t, n[i], o, this)
                    }
            }, r.keys = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push(n)
                }), n(e)
            }, r.values = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(t)
                }), n(e)
            }, r.entries = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push([n, t])
                }), n(e)
            }, t && (r[Symbol.iterator] = r.entries), r.toString = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push(o(n) + "=" + o(t))
                }), e.join("&")
            }, e.URLSearchParams = i
        }();
        var r = e.URLSearchParams.prototype;
        "function" != typeof r.sort && (r.sort = function() {
            var e = this,
                t = [];
            this.forEach(function(n, o) {
                t.push([o, n]), e._entries || e.delete(o)
            }), t.sort(function(e, t) {
                return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
            }), e._entries && (e._entries = {});
            for (var n = 0; n < t.length; n++) this.append(t[n][0], t[n][1])
        }), "function" != typeof r._fromString && Object.defineProperty(r, "_fromString", {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: function(e) {
                if (this._entries) this._entries = {};
                else {
                    var t = [];
                    this.forEach(function(e, n) {
                        t.push(n)
                    });
                    for (var n = 0; n < t.length; n++) this.delete(t[n])
                }
                var o, r = (e = e.replace(/^\?/, "")).split("&");
                for (n = 0; n < r.length; n++) o = r[n].split("="), this.append(i(o[0]), o.length > 1 ? i(o[1]) : "")
            }
        })
    }(void 0 !== T ? T : "undefined" != typeof window ? window : "undefined" != typeof self ? self : T),
    function(e) {
        if (function() {
                try {
                    var t = new e.URL("b", "http://a");
                    return t.pathname = "c d", "http://a/c%20d" === t.href && t.searchParams
                } catch (t) {
                    return !1
                }
            }() || function() {
                var t = e.URL,
                    n = function t(n, o) {
                        "string" != typeof n && (n = String(n)), o && "string" != typeof o && (o = String(o));
                        var i, r = document;
                        if (o && (void 0 === e.location || o !== e.location.href)) {
                            o = o.toLowerCase(), (i = (r = document.implementation.createHTMLDocument("")).createElement("base")).href = o, r.head.appendChild(i);
                            try {
                                if (0 !== i.href.indexOf(o)) throw new Error(i.href)
                            } catch (t) {
                                throw new Error("URL unable to set base " + o + " due to " + t)
                            }
                        }
                        var a = r.createElement("a");
                        a.href = n, i && (r.body.appendChild(a), a.href = a.href);
                        var s = r.createElement("input");
                        if (s.type = "url", s.value = n, ":" === a.protocol || !/:/.test(a.href) || !s.checkValidity() && !o) throw new TypeError("Invalid URL");
                        Object.defineProperty(this, "_anchorElement", {
                            value: a
                        });
                        var c = new e.URLSearchParams(this.search),
                            l = !0,
                            u = !0,
                            h = this;
                        ["append", "delete", "set"].forEach(function(e) {
                            var t = c[e];
                            c[e] = function() {
                                t.apply(c, arguments), l && (u = !1, h.search = c.toString(), u = !0)
                            }
                        }), Object.defineProperty(this, "searchParams", {
                            value: c,
                            enumerable: !0
                        });
                        var f = void 0;
                        Object.defineProperty(this, "_updateSearchParams", {
                            enumerable: !1,
                            configurable: !1,
                            writable: !1,
                            value: function() {
                                this.search !== f && (f = this.search, u && (l = !1, this.searchParams._fromString(this.search), l = !0))
                            }
                        })
                    },
                    o = n.prototype;
                ["hash", "host", "hostname", "port", "protocol"].forEach(function(e) {
                    ! function(e) {
                        Object.defineProperty(o, e, {
                            get: function() {
                                return this._anchorElement[e]
                            },
                            set: function(t) {
                                this._anchorElement[e] = t
                            },
                            enumerable: !0
                        })
                    }(e)
                }), Object.defineProperty(o, "search", {
                    get: function() {
                        return this._anchorElement.search
                    },
                    set: function(e) {
                        this._anchorElement.search = e, this._updateSearchParams()
                    },
                    enumerable: !0
                }), Object.defineProperties(o, {
                    toString: {
                        get: function() {
                            var e = this;
                            return function() {
                                return e.href
                            }
                        }
                    },
                    href: {
                        get: function() {
                            return this._anchorElement.href.replace(/\?$/, "")
                        },
                        set: function(e) {
                            this._anchorElement.href = e, this._updateSearchParams()
                        },
                        enumerable: !0
                    },
                    pathname: {
                        get: function() {
                            return this._anchorElement.pathname.replace(/(^\/?)/, "/")
                        },
                        set: function(e) {
                            this._anchorElement.pathname = e
                        },
                        enumerable: !0
                    },
                    origin: {
                        get: function() {
                            var e = {
                                    "http:": 80,
                                    "https:": 443,
                                    "ftp:": 21
                                }[this._anchorElement.protocol],
                                t = this._anchorElement.port != e && "" !== this._anchorElement.port;
                            return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "")
                        },
                        enumerable: !0
                    },
                    password: {
                        get: function() {
                            return ""
                        },
                        set: function(e) {},
                        enumerable: !0
                    },
                    username: {
                        get: function() {
                            return ""
                        },
                        set: function(e) {},
                        enumerable: !0
                    }
                }), n.createObjectURL = function(e) {
                    return t.createObjectURL.apply(t, arguments)
                }, n.revokeObjectURL = function(e) {
                    return t.revokeObjectURL.apply(t, arguments)
                }, e.URL = n
            }(), void 0 !== e.location && !("origin" in e.location)) {
            var t = function() {
                return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")
            };
            try {
                Object.defineProperty(e.location, "origin", {
                    get: t,
                    enumerable: !0
                })
            } catch (n) {
                setInterval(function() {
                    e.location.origin = t()
                }, 100)
            }
        }
    }(void 0 !== T ? T : "undefined" != typeof window ? window : "undefined" != typeof self ? self : T);
    var _e = {},
        be = [],
        Ee = function(e) {
            e.length && e.forEach(function(e) {
                be.push(e)
            })
        };

    function Se(e, t, n, o) {
        var i = e && e.source || window.opener || window.parent,
            r = e && e.origin || o || "*",
            a = {
                type: t,
                payload: n
            };
        i.postMessage(JSON.stringify(a), r)
    }

    function we(e, t) {
        _e[e] = _e[e] || [], _e[e].push(t)
    }

    function ke(e) {
        if (be.some(function(e) {
                return "*" === e
            }) || be.some(function(t) {
                return e.origin.indexOf(t) > -1
            })) {
            var t = e.data;
            if ("string" == typeof e.data) try {
                t = JSON.parse(e.data)
            } catch (e) {
                t = void 0
            }
            if (!t) return;
            var n = t.type,
                o = t.payload;
            _e[n] && _e[n].forEach(function(t) {
                "function" == typeof t && t(e, o)
            })
        }
    }

    function Te(e, t) {
        var n = {};
        if (Object.keys(e).length)
            for (var o in e) {
                if ("filter" === o || "autotrack" === o || "enable_stay_duration" === o) break;
                n[o] = e[o]
            }(window.opener || window.parent).postMessage({
                type: "tea:sdk:info",
                config: n,
                version: t
            }, "*"), window.addEventListener("message", ke, !1)
    }
    var De = "",
        Ae = !1;

    function Oe(e) {
        var t = e.event,
            n = e.editorUrl;
        e.collectInstance, e.fromSession;
        Ae || (Ae = !0, v(n, function() {
            Se(t, "abEditorScriptloadSuccess")
        }, function() {
            t && Se(t, "abEditorScriptloadError"), Ae = !1
        }))
    }
    var Ie;
    ! function(e) {
        e[e.Var = 0] = "Var", e[e.All = 1] = "All"
    }(Ie || (Ie = {}));
    var Re = function() {
        function t() {
            this.fetchStatus = "no", this.refreshFetchStatus = "complete", this.versions = [], this.extVersions = [], this.mulilinkVersions = [], this.enable_multilink = !1, this.enable_ab_visual = !1, this.editMode = !1, this.callbacks = [], this.data = null, this.changeListener = new Map, this.readyStatus = !1, this.exposureCache = [], this.auto_exposure = !1
        }
        return t.prototype.apply = function(e, t) {
            var n = this;
            if (this.collect = e, this.config = t, this.config.enable_ab_test) {
                var o = e.configManager.getSettingData("bav_ab_config");
                if (!l(o) || o) {
                    var i = t.enable_multilink,
                        r = t.ab_channel_domain,
                        a = t.enable_ab_visual,
                        s = t.ab_cross,
                        c = t.ab_cookie_domain,
                        u = t.disable_ab_reset,
                        h = t.auto_exposure_expriment,
                        f = r || d(L[t.channel || "cn"]),
                        p = e.adapters,
                        g = p.storage,
                        v = p.fetch;
                    this.cacheStorgae = new g(!1), this.fetch = v, this.enable_multilink = i, this.enable_ab_visual = a, this.abKey = "__tea_sdk_ab_version_".concat(t.app_id), this.ab_cross = s, this.ab_cookie_domain = c || "", this.fetchUrl = "".concat(f).concat("/service/2/abtest_config/"), this.reportUrl = "".concat(e.configManager.getUrl("event")), this.exposureLimit = t.exposure_limit || 5, this.ab_batch_time = t.ab_batch_time || 50, this.overlay_opacity = t.overlay_opacity || 0, this.auto_exposure = h;
                    var m = this.collect.Types;
                    this.types = m;
                    var y = e.configManager.getSettingData("bav_ab_refresh");
                    this.collect.on(m.TokenChange, function(e) {
                        u || l(o) && !y || "uuid" === e.type && n.readyStatus && (n.clearCache(), n.fetchAB())
                    }), this.collect.on(m.TokenReset, function() {
                        u || l(o) && !y || n.readyStatus && (n.clearCache(), n.fetchAB())
                    }), this.collect.on(m.AbVar, function(e) {
                        var t = e.name,
                            o = e.defaultValue,
                            i = e.callback;
                        n.getVar(t, o, i)
                    }), this.collect.on(m.AbAllVars, function(e) {
                        n.getAllVars(e)
                    }), this.collect.on(m.AbConfig, function(e) {
                        var t = e.params,
                            o = e.callback;
                        n.getABconfig(t, o)
                    }), this.collect.on(m.AbExternalVersion, function(e) {
                        n.setExternalAbVersion(e)
                    }), this.collect.on(m.AbOpenLayer, function() {
                        n.openOverlayer()
                    }), this.collect.on(m.AbCloseLayer, function() {
                        n.closeOverlayer()
                    }), this.collect.on(m.AbVersionChangeOn, function(e) {
                        n.changeListener.set(e, e)
                    }), this.collect.on(m.AbVersionChangeOff, function(e) {
                        n.changeListener.get(e) && n.changeListener.delete(e)
                    }), this.loadMode(), (this.enable_ab_visual || this.enable_multilink) && this.openOverlayer(this.config.multilink_timeout_ms || 500), this.checkLocal(), this.ready("ab"), this.readyStatus || (this.fetchAB(), this.readyStatus = !0), this.collect.emit(m.AbReady)
                }
            }
        }, t.prototype.ready = function(e) {
            var t = this;
            if (this.collect.set(e), this.collect.hook._hooksCache.hasOwnProperty(e)) {
                var n = this.collect.hook._hooksCache[e];
                if (!Object.keys(n).length) return;
                var o = function(e) {
                    n[e].length && n[e].forEach(function(n) {
                        t.collect.hook.emit(e, n)
                    })
                };
                for (var i in n) o(i)
            }
        }, t.prototype.loadMode = function() {
            var e, t, n = function() {
                    try {
                        var e = JSON.parse(atob(window.name));
                        return e || void 0
                    } catch (e) {
                        return
                    }
                }(),
                o = "";
            if (n) {
                var i = n.scenario,
                    r = n.href;
                i ? (this.editMode = !0, o = i) : !r || -1 === r.indexOf("datatester") && -1 === r.indexOf("visual-editor") || (this.editMode = !0, o = "visual-editor")
            }
            this.enable_ab_visual && (function(e, t) {
                window.TEAVisualEditor = window.TEAVisualEditor || {}, Ee(["*"]);
                var n, o = "";
                Te(t, B);
                var i = "";
                try {
                    var r = window.performance.getEntriesByType("resource");
                    if (r && r.length && (r.forEach(function(e) {
                            "script" === e.initiatorType && e.name && -1 !== e.name.indexOf("collect") && (i = e.name)
                        }), i || document.currentScript && (i = document.currentScript.src), i && (n = i.split("/")) && n.length)) {
                        o = "https:/";
                        for (var a = 2; a < n.length && a !== n.length - 1; a++) o += "/".concat(n[a]);
                        o = "".concat(o, "/visual-ab-core")
                    }
                } catch (e) {}
                we("tea:openVisualABEditor", function(n) {
                    var i = n.data;
                    if ("string" == typeof n.data) try {
                        i = JSON.parse(n.data)
                    } catch (e) {
                        i = void 0
                    }
                    if (i) {
                        var r = i.lang;
                        if (i.appId !== t.app_id) return Se(n, "appIdError"), void console.error("abtest appid is not belong the page appid please check");
                        var a = i.version;
                        if (a) {
                            var s = a ? ".".concat(a) : ".1.0.1";
                            De = o ? "".concat(o).concat(s, ".js?query=").concat(Date.now()) : "".concat(z, "?query=").concat(Date.now())
                        } else De = "".concat(z, "?query=").concat(Date.now());
                        window.TEAVisualEditor.lang = r, window.TEAVisualEditor.__ab_domin = t.channel_domain || "", Oe({
                            event: n,
                            editorUrl: De,
                            collectInstance: e
                        })
                    }
                })
            }(this.collect, this.config), "visual-editor" === o) ? this.collect.destoryInstace() : this.enable_multilink && (e = this.collect, t = this.config, window.TEAVisualEditor = window.TEAVisualEditor || {}, window.TEAVisualEditor.appId = t.app_id, we("tea:openTesterEventInspector", function(t) {
                var n = t.data;
                if ("string" == typeof t.data) try {
                    n = JSON.parse(t.data)
                } catch (e) {
                    n = void 0
                }
                if (n) {
                    var o = n.referrer,
                        i = n.lang,
                        r = n.appId;
                    window.TEAVisualEditor.__editor_ajax_domain = o || "", window.TEAVisualEditor.__ab_appId = r || "", window.TEAVisualEditor.lang = i || "", Oe({
                        event: t,
                        editorUrl: "".concat("https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/tester-event-inspector", ".js?query=").concat(Date.now()),
                        collectInstance: e
                    })
                }
            }))
        }, t.prototype.checkLocal = function() {
            var e = this.getABCache(),
                t = e.ab_version,
                n = e.ab_ext_version,
                o = e.ab_version_multilink,
                i = e.data,
                r = this.checkFromUrl();
            r ? this.mulilinkVersions.push(r) : this.mulilinkVersions = o || [], this.extVersions = n || [], this.versions = t || [], this.data = i;
            var a = this.versions.concat(this.extVersions);
            this.enable_multilink && (a = a.concat(this.mulilinkVersions)), this.configVersions(a.join(","))
        }, t.prototype.checkFromUrl = function() {
            var e = b(window.location.href);
            return e && e.vid ? e.vid : ""
        }, t.prototype.updateVersions = function() {
            var e = this.extVersions.length ? this.versions.concat(this.extVersions) : this.versions;
            this.enable_multilink && (e = e.concat(this.mulilinkVersions)), this.configVersions(e.join(",")), this.updateABCache(), this.changeListener.size > 0 && this.changeListener.forEach(function(t) {
                "function" == typeof t && t(e)
            })
        }, t.prototype.configVersions = function(e) {
            this.collect.configManager.setAbVersion(e)
        }, t.prototype.getVar = function(e, t, n) {
            if (!e) throw new Error("variable must not be empty");
            if (void 0 === t) throw new Error("variable no default value");
            if ("function" != typeof n) throw new Error("callback must be a function");
            var o = {
                name: e,
                defaultValue: t,
                callback: n,
                type: Ie.Var
            };
            this.collect.emit(U.DEBUGGER_MESSAGE, {
                type: U.DEBUGGER_MESSAGE_SDK,
                secType: "AB",
                info: "SDK 调用GetVar",
                level: "info",
                time: Date.now(),
                data: e,
                infoType: "cus"
            }), "complete" === this.fetchStatus && "complete" === this.refreshFetchStatus ? this.getRealVar(o, e) : this.callbacks.push(o)
        }, t.prototype.getRealVar = function(e, t) {
            var n = e.name,
                o = e.defaultValue,
                i = e.callback,
                r = this.data;
            if (r) {
                if (s(r[n])) {
                    var a = r[n].vid;
                    return "$ab_url" === t ? this.mulilinkVersions.includes(a) || this.mulilinkVersions.push(a) : this.versions.includes(a) || this.versions.push(a), this.updateVersions(), this.fechEvent(a, t, o), i(r[n].val), void this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        secType: "AB",
                        info: "SDK执行GetVar，并曝光了实验".concat(n),
                        level: "info",
                        time: Date.now(),
                        data: r[n],
                        infoType: "sdk"
                    })
                }
                i(o), this.collect.emit(U.DEBUGGER_MESSAGE, {
                    type: U.DEBUGGER_MESSAGE_SDK,
                    secType: "AB",
                    info: "SDK执行GerVar默认回调",
                    level: "info",
                    time: Date.now(),
                    data: this.data,
                    infoType: "sdk"
                })
            } else i(o)
        }, t.prototype.getAllVars = function(e) {
            if ("function" != typeof e) throw new Error("callback must be a function");
            var t = {
                callback: e,
                type: Ie.All
            };
            this.collect.emit(U.DEBUGGER_MESSAGE, {
                type: U.DEBUGGER_MESSAGE_SDK,
                secType: "AB",
                info: "SDK 调用GetAllVars",
                level: "info",
                time: Date.now(),
                infoType: "cus"
            }), "complete" === this.fetchStatus && "complete" === this.refreshFetchStatus ? this.getRealAllVars(t) : this.callbacks.push(t)
        }, t.prototype.getRealAllVars = function(e) {
            (0, e.callback)(this.data ? JSON.parse(JSON.stringify(this.data)) : {}), this.collect.emit(U.DEBUGGER_MESSAGE, {
                type: U.DEBUGGER_MESSAGE_SDK,
                secType: "AB",
                info: "SDK 执行GetAllVars",
                level: "info",
                time: Date.now(),
                data: this.data,
                infoType: "sdk"
            })
        }, t.prototype.exposureAll = function(e) {
            try {
                if (Object.keys(e).length)
                    for (var t in e) {
                        if ("$ab_url" === t || "$ab_modification" === t) break;
                        this.getRealVar({
                            name: t,
                            defaultValue: e[t].val,
                            callback: function() {},
                            type: Ie.Var
                        }, t)
                    }
            } catch (e) {
                console.warn("exposure all expriment err", JSON.stringify(e.message))
            }
        }, t.prototype.fechEvent = function(e, t, n) {
            try {
                if (this.config.disable_track_event) return;
                if (this.collect.sdkStop) return;
                if (!e) return;
                var o = this.collect.configManager.get(),
                    i = o.header,
                    r = o.user,
                    a = this.getABCache();
                if (a && a.uuid && a.uuid !== r.user_unique_id) return;
                var s = {
                    event: "abtest_exposure",
                    ab_sdk_version: "".concat(e),
                    params: JSON.stringify({
                        app_id: this.config.appId,
                        ab_url: "$ab_url" === t ? n : window.location.href
                    }),
                    local_time_ms: Date.now()
                };
                i.custom = JSON.stringify(i.custom);
                var c = {
                    events: [s],
                    user: r,
                    header: i
                };
                this.reportExposure(c, t)
            } catch (e) {
                this.collect.emit(U.DEBUGGER_MESSAGE, {
                    type: U.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 发生了异常",
                    level: "error",
                    time: Date.now(),
                    data: e.message,
                    infoType: "sdk"
                })
            }
        }, t.prototype.reportExposure = function(e, t) {
            this.exposureCache.push(e), this.report(t)
        }, t.prototype.report = function(e) {
            var t = this;
            try {
                var n = this.collect.cryptoData(this.exposureCache);
                if (S()) return void te(this.collect.configManager.getUrl("img"), n);
                this.collect.requestManager.useRequest({
                    url: this.reportUrl,
                    data: n,
                    timeout: 1e5,
                    useBeacon: "$ab_url" === e,
                    encryption: this.config.enable_encryption,
                    encryption_header: this.config.encryption_header,
                    zip: !0
                }), this.exposureCache.forEach(function(e) {
                    t.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_EVENT,
                        info: "曝光埋点上报成功",
                        time: Date.now(),
                        data: [e],
                        code: 200,
                        status: "success",
                        infoType: "sdk"
                    })
                }), this.exposureCache = []
            } catch (e) {
                console.log("ab report err", e)
            }
        }, t.prototype.setExternalAbVersion = function(e) {
            this.extVersions = [e], this.updateVersions()
        }, t.prototype.getABconfig = function(e, t) {
            var n = Object.keys(e);
            n && n.length && this.collect.configManager.set(e), this.fetchAB(t)
        }, t.prototype.get = function(e) {
            if (this.ab_cross) {
                var t = this.cacheStorgae.getCookie(e, this.ab_cookie_domain);
                return t ? JSON.parse(t) : null
            }
            return this.cacheStorgae.getItem(e)
        }, t.prototype.set = function(e, t) {
            this.ab_cross ? this.cacheStorgae.setCookie(e, t, 2592e6, this.ab_cookie_domain) : this.cacheStorgae.setItem(e, t), this.collect.configManager.setAbCache(t)
        }, t.prototype.remove = function() {
            this.ab_cross ? this.cacheStorgae.removeCookie(this.abKey, this.ab_cookie_domain) : this.cacheStorgae.removeItem(this.abKey)
        }, t.prototype.getABCache = function(e) {
            var t = {
                ab_version: [],
                ab_ext_version: [],
                ab_version_multilink: [],
                data: null,
                timestamp: +new Date,
                uuid: ""
            };
            return t = this.get(this.abKey) || t, e ? t[e] : t
        }, t.prototype.updateABCache = function() {
            var e = this.getABCache();
            e.ab_version_multilink = this.mulilinkVersions, e.ab_ext_version = this.extVersions, e.ab_version = this.versions, e.timestamp = Date.now(), this.set(this.abKey, e)
        }, t.prototype.setAbCache = function(e) {
            var t = this.getABCache();
            t.data = this.data, t.uuid = e, t.timestamp = Date.now(), this.set(this.abKey, t)
        }, t.prototype.clearCache = function() {
            this.refreshFetchStatus = "ing", this.data = {}, this.extVersions = [], this.mulilinkVersions = [], this.versions = [], this.collect.configManager.clearAbCache()
        }, t.prototype.openOverlayer = function(e) {
            var t = this;
            if (function(e) {
                    if (!document.getElementById(ye)) {
                        var t = "body { opacity: ".concat(e, " !important; }"),
                            n = document.head || document.getElementsByTagName("head")[0],
                            o = document.createElement("style");
                        o.id = ye, o.type = "text/css", o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t)), n.appendChild(o)
                    }
                }(this.overlay_opacity), e) var n = setTimeout(function() {
                t.closeOverlayer(), clearTimeout(n)
            }, e)
        }, t.prototype.closeOverlayer = function() {
            var e;
            (e = document.getElementById(ye)) && e.parentElement.removeChild(e)
        }, t.prototype.fetchComplete = function(e, t) {
            var n = this;
            if (e && "[object Object]" == Object.prototype.toString.call(e)) {
                this.data = e, this.setAbCache(t);
                var o = [];
                Object.keys(e).forEach(function(t) {
                    var n = e[t].vid;
                    n && o.push(n)
                }), this.versions = this.versions.filter(function(e) {
                    return o.includes(e)
                });
                var i = e.$ab_url,
                    r = e.$ab_modification;
                if (r && r.val && this.enable_ab_visual) {
                    if (this.collect.destroyInstance) return;
                    this.getVar("$ab_modification", window.location.href, function() {
                        var e;
                        e = r.val, window.TEAVisualEditor = window.TEAVisualEditor || {}, window.TEAVisualEditor.__ab_config = e, v("".concat("https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/visual-ab-loader.js", "?query=").concat(Date.now()), function() {
                            console.log("load visual render success")
                        }, function() {
                            console.log("load visual render fail")
                        }), n.closeOverlayer(), n.collect.emit(U.DEBUGGER_MESSAGE, {
                            type: U.DEBUGGER_MESSAGE_SDK,
                            info: "SDK 执行可视化实验",
                            level: "info",
                            logType: "fetch",
                            time: Date.now(),
                            infoType: "sdk",
                            data: {
                                $ab_modification: r
                            }
                        })
                    })
                } else if (i && this.enable_multilink) {
                    this.mulilinkVersions = this.mulilinkVersions.filter(function(e) {
                        return o.includes(e)
                    }), this.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        info: "SDK 执行多链接实验",
                        level: "info",
                        logType: "fetch",
                        time: Date.now(),
                        infoType: "sdk",
                        data: {
                            $ab_url: i
                        }
                    });
                    var a = i.val,
                        s = i.vid;
                    a && s && this.getVar("$ab_url", a, function() {
                        n.editMode || (a !== window.location.href ? setTimeout(function() {
                            if (!n.collect.destroyInstance) {
                                var e = "".concat(a);
                                e = -1 === e.indexOf("http") ? "https://".concat(e) : e;
                                var t = _(e).host;
                                try {
                                    var o = new URL(e);
                                    t !== location.host ? o.searchParams.append("vid", s) : window.history.replaceState("", "", e), window.location.href = o.href
                                } catch (t) {
                                    window.location.href = e
                                }
                            }
                        }, 100) : n.closeOverlayer())
                    })
                }
                this.auto_exposure && this.exposureAll(e), this.updateVersions()
            } else this.closeOverlayer();
            this.callbacks.forEach(function(e) {
                return n[e.type === Ie.Var ? "getRealVar" : "getRealAllVars"](e, "")
            }), this.callbacks = []
        }, t.prototype.fetchAB = function(t) {
            var n = this,
                o = this.collect.configManager.get(),
                i = o.header,
                r = o.user;
            this.config.enable_anonymousid && delete r.web_id;
            var a = r.user_unique_id,
                s = {
                    header: e(e(e({
                        aid: this.config.app_id
                    }, r || {}), i || {}), {
                        ab_sdk_version: this.collect.configManager.getAbVersion(),
                        ab_url: window.location.href
                    })
                };
            this.collect.emit(U.DEBUGGER_MESSAGE, {
                type: U.DEBUGGER_MESSAGE_SDK,
                info: "SDK 发起AB实验请求",
                level: "info",
                logType: "fetch",
                time: Date.now(),
                data: s,
                infoType: "sdk"
            });
            var c = this.collect.cryptoData(s);
            this.collect.requestManager.useRequest({
                url: this.fetchUrl,
                data: c,
                success: function(e) {
                    n.fetchStatus = "complete", n.refreshFetchStatus = "complete";
                    var o = e.data;
                    "success" === e.message ? (n.fetchComplete(o, a), t && t(o)) : (n.fetchComplete(null, a), t && t(null)), n.collect.emit(n.types.AbComplete, o), n.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        secType: "AB",
                        info: "AB实验请求成功",
                        level: "info",
                        logType: "fetch",
                        time: Date.now(),
                        data: o,
                        infoType: "sdk"
                    })
                },
                fail: function() {
                    n.fetchStatus = "complete", n.refreshFetchStatus = "complete", n.fetchComplete(null, a), t && t(null), n.collect.emit(n.types.AbTimeout), n.collect.emit(U.DEBUGGER_MESSAGE, {
                        type: U.DEBUGGER_MESSAGE_SDK,
                        secType: "AB",
                        info: "AB实验请求网络异常",
                        level: "error",
                        logType: "fetch",
                        time: Date.now(),
                        infoType: "sdk"
                    })
                },
                timeout: this.config.ab_timeout || 1e4,
                encryption: this.config.enable_encryption,
                encryption_header: this.config.encryption_header
            })
        }, t
    }();
    try {
        var Me = pe();
        Me && (Me.LogAb = function(e, t) {
            (new Re).apply(e, t)
        })
    } catch (e) {
        console.log(e)
    }
    var xe = function() {
            function t(e, t) {
                this.maxDuration = 432e5, this.aliveDTime = 6e4, this.options = {
                    aliveName: "predefine_page_alive",
                    params: {}
                }, this.collect = e, this.config = t, this.pageStartTime = Date.now(), this.sessionStartTime = this.pageStartTime, this.timerHandler = null, s(t.enable_stay_duration) && (this.options = Object.assign(this.options, t.enable_stay_duration))
            }
            return t.prototype.setParams = function(e, t, n) {
                this.set_path = e, this.set_url = n, this.set_title = t
            }, t.prototype.resetParams = function(e, t, n) {
                this.url_path = e, this.url = n, this.title = t
            }, t.prototype.enable = function(e, t, n) {
                this.url_path = e || this.url_path, this.url = n || this.url, this.title = t || this.title, this.disableCallback = this.enablePageAlive(), this.options.params instanceof Function ? this.customParmas = this.options.params() : this.customParmas = this.options.params
            }, t.prototype.disable = function() {
                this.disableCallback(), this.pageStartTime = Date.now()
            }, t.prototype.sendEvent = function(t, n) {
                void 0 === n && (n = !1);
                var o = n ? this.aliveDTime : Date.now() - this.sessionStartTime;
                o < 0 || o > this.aliveDTime || Date.now() - this.pageStartTime > this.maxDuration || (this.collect.beconEvent(this.options.aliveName, e({
                    url_path: this.getParams("url_path"),
                    title: this.getParams("title"),
                    url: this.getParams("url"),
                    duration: o,
                    is_support_visibility_change: m(),
                    startTime: this.sessionStartTime,
                    hidden: document.visibilityState,
                    leave: t
                }, this.customParmas)), this.sessionStartTime = Date.now(), this.resetParams(location.pathname, document.title, location.href))
            }, t.prototype.getParams = function(e) {
                switch (e) {
                    case "url_path":
                        return this.set_path || this.url_path || location.pathname;
                    case "title":
                        return this.set_title || this.title || document.title || location.pathname;
                    case "url":
                        return this.set_url || this.url || location.href
                }
            }, t.prototype.setUpTimer = function() {
                var e = this;
                return this.timerHandler && clearInterval(this.timerHandler), setInterval(function() {
                    Date.now() - e.sessionStartTime > e.aliveDTime && e.sendEvent(!1, !0)
                }, 1e3)
            }, t.prototype.visibilitychange = function() {
                "hidden" === document.visibilityState ? this.timerHandler && (clearInterval(this.timerHandler), this.sendEvent(!1)) : "visible" === document.visibilityState && (this.sessionStartTime = Date.now(), this.timerHandler = this.setUpTimer())
            }, t.prototype.beforeunload = function() {
                document.hidden || this.sendEvent(!0)
            }, t.prototype.enablePageAlive = function() {
                var e = this;
                this.timerHandler = this.setUpTimer();
                var t = this.visibilitychange.bind(this),
                    n = this.beforeunload.bind(this);
                return f(document, "visibilitychange", t, !1), f(window, "pagehide", n, !1),
                    function() {
                        e.beforeunload(), p(document, "visibilitychange", t, !1), p(window, "beforeunload", n, !1), p(window, "pagehide", n, !1)
                    }
            }, t
        }(),
        Ce = function() {
            function t(e, t) {
                var n = this;
                this.maxDuration = 432e5, this.aliveDTime = 6e4, this.options = {
                    closeName: "predefine_page_close",
                    params: {}
                }, this.visibilitychange = function() {
                    "hidden" === document.visibilityState ? n.activeEndTime = Date.now() : "visible" === document.visibilityState && (n.activeEndTime && (n.totalTime += n.activeEndTime - n.activeStartTime, n.activeTimes += 1), n.activeEndTime = void 0, n.activeStartTime = Date.now())
                }, this.beforeunload = function() {
                    if (n.totalTime += (n.activeEndTime || Date.now()) - n.activeStartTime, n.config.autotrack) {
                        try {
                            window.sessionStorage.setItem("_tea_cache_duration", JSON.stringify({
                                duration: n.totalTime,
                                page_title: document.title || location.pathname
                            }))
                        } catch (e) {}
                    }
                    n.sendEventPageClose()
                }, this.collect = e, this.config = t, this.maxDuration = t.maxDuration || 864e5, this.pageStartTime = Date.now(), s(t.enable_stay_duration) && (this.options = Object.assign(this.options, t.enable_stay_duration)), this.resetData()
            }
            return t.prototype.setParams = function(e, t, n) {
                this.set_path = e, this.set_url = n, this.set_title = t
            }, t.prototype.resetParams = function(e, t, n) {
                this.url_path = e, this.url = n, this.title = t
            }, t.prototype.enable = function(e, t, n) {
                this.url_path = e || this.url_path, this.url = n || this.url, this.title = t || this.title, this.disableCallback = this.enablePageClose()
            }, t.prototype.disable = function() {
                this.disableCallback()
            }, t.prototype.resetData = function() {
                this.activeStartTime = void 0 === this.activeStartTime ? this.pageStartTime : Date.now(), this.activeEndTime = void 0, this.activeTimes = 1, this.totalTime = 0, this.options.params instanceof Function ? this.customParmas = this.options.params() : this.customParmas = this.options.params, this.resetParams(location.pathname, document.title, location.href)
            }, t.prototype.sendEventPageClose = function() {
                var t = Date.now() - this.pageStartTime;
                this.totalTime < 0 || t < 0 || this.totalTime >= this.maxDuration || (this.collect.beconEvent(this.options.closeName, e({
                    url_path: this.getParams("url_path"),
                    title: this.getParams("title"),
                    url: this.getParams("url"),
                    active_times: this.activeTimes,
                    duration: this.totalTime,
                    total_duration: t,
                    is_support_visibility_change: m()
                }, this.customParmas)), this.pageStartTime = Date.now(), this.resetData())
            }, t.prototype.getParams = function(e) {
                switch (e) {
                    case "url_path":
                        return this.set_path || this.url_path || location.pathname;
                    case "title":
                        return this.set_title || this.title || document.title || location.pathname;
                    case "url":
                        return this.set_url || this.url || location.href
                }
            }, t.prototype.enablePageClose = function() {
                var e = this,
                    t = this.visibilitychange.bind(this),
                    n = this.beforeunload.bind(this);
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", n),
                    function() {
                        e.beforeunload(), document.removeEventListener("visibilitychange", t), window.removeEventListener("beforeunload", n), window.removeEventListener("pagehide", n)
                    }
            }, t
        }(),
        Ge = function() {
            function e() {}
            return e.prototype.apply = function(e, t) {
                var n = this;
                if (this.collect = e, this.config = t, this.config.enable_stay_duration) {
                    this.title = document.title || location.pathname, this.url = location.href, this.url_path = location.pathname, this.pageAlive = new xe(e, t), this.pageClose = new Ce(e, t);
                    var o = this.collect.Types;
                    this.collect.on(o.ResetStay, function(e) {
                        var t = e.url_path,
                            o = e.title,
                            i = e.url;
                        n.resetStayDuration(t, o, i)
                    }), this.collect.on(o.RouteChange, function(e) {
                        e.init || t.disable_route_report || n.resetStayDuration()
                    }), this.collect.on(o.SetStay, function(e) {
                        var t = e.url_path,
                            o = e.title,
                            i = e.url;
                        n.setStayParmas(t, o, i)
                    }), this.enable(this.url_path, this.title, this.url), this.ready(o.Stay), this.collect.emit(o.StayReady)
                }
            }, e.prototype.ready = function(e) {
                var t = this;
                if (this.collect.set(e), this.collect.hook._hooksCache.hasOwnProperty(e)) {
                    var n = this.collect.hook._hooksCache[e];
                    if (!Object.keys(n).length) return;
                    var o = function(e) {
                        n[e].length && n[e].forEach(function(n) {
                            t.collect.hook.emit(e, n)
                        })
                    };
                    for (var i in n) o(i)
                }
            }, e.prototype.enable = function(e, t, n) {
                this.pageAlive.enable(e, t, n), this.pageClose.enable(e, t, n)
            }, e.prototype.disable = function() {
                this.pageAlive.disable(), this.pageClose.disable()
            }, e.prototype.setStayParmas = function(e, t, n) {
                void 0 === e && (e = ""), void 0 === t && (t = ""), void 0 === n && (n = ""), this.pageAlive.setParams(e, t, n), this.pageClose.setParams(e, t, n), this.collect.emit(U.DEBUGGER_MESSAGE, {
                    type: U.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 执行 resetStayParams",
                    level: "info",
                    time: Date.now(),
                    data: {
                        url_path: e,
                        title: t,
                        url: n
                    },
                    infoType: "cus"
                })
            }, e.prototype.reset = function(e, t, n) {
                this.disable(), this.enable(e, t, n)
            }, e.prototype.resetStayDuration = function(e, t, n) {
                this.reset(e, t, n), this.collect.emit(U.DEBUGGER_MESSAGE, {
                    type: U.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 执行 resetStayDuration",
                    level: "info",
                    time: Date.now(),
                    data: {
                        url_path: e,
                        title: t,
                        url: n
                    },
                    infoType: "sdk"
                })
            }, e
        }();
    try {
        var Be = pe();
        Be && (Be.LogStay = function(e, t) {
            (new Ge).apply(e, t)
        })
    } catch (e) {
        console.log(e)
    }
    var Ne = function() {
            function e() {
                var e = this;
                this.setInterval = function() {
                    e.clearIntervalFunc = y(function() {
                        e.isSessionhasEvent && e.endCurrentSession()
                    }, e.sessionInterval)
                }, this.clearInterval = function() {
                    e.clearIntervalFunc && e.clearIntervalFunc()
                }
            }
            return e.prototype.apply = function(e, t) {
                var n = this;
                if (this.collect = e, !t.disable_heartbeat) {
                    this.sessionInterval = 6e4, this.startTime = 0, this.lastTime = 0, this.setInterval();
                    var o = this.collect.Types;
                    this.collect.on(o.SessionResetTime, function() {
                        n.process()
                    })
                }
            }, e.prototype.endCurrentSession = function() {
                this.collect.event("_be_active", {
                    start_time: this.startTime,
                    end_time: this.lastTime,
                    url: window.location.href,
                    referrer: window.document.referrer,
                    title: document.title || location.pathname
                }), this.isSessionhasEvent = !1, this.startTime = 0
            }, e.prototype.process = function() {
                this.isSessionhasEvent || (this.isSessionhasEvent = !0, this.startTime = +new Date);
                var e = this.lastTime || +new Date;
                this.lastTime = +new Date, this.lastTime - e > this.sessionInterval && (this.clearInterval(), this.endCurrentSession(), this.setInterval())
            }, e
        }(),
        Ue = function() {
            function e() {}
            return e.prototype.apply = function(e, t) {
                var n = this;
                if (this.collect = e, this.config = t, !this.config.channel_domain && !(this.config.disable_track_event || this.config.disable_sdk_monitor || this.config.enable_encryption)) {
                    var o = e.adapters.fetch;
                    this.fetch = o, this.url = e.configManager.getUrl("event");
                    var i = this.collect.Types;
                    this.collect.on(i.Ready, function() {
                        n.sdkOnload()
                    }), this.collect.on(i.SubmitError, function(e) {
                        var t = e.type,
                            o = e.eventData,
                            i = e.errorCode;
                        "f_data" === t && n.sdkError(o, i)
                    })
                }
            }, e.prototype.sdkOnload = function() {
                var e = this;
                try {
                    var t = this.collect.configManager.get(),
                        n = t.header,
                        o = t.user,
                        i = n.app_id,
                        r = n.app_name,
                        a = n.sdk_version,
                        s = o.web_id,
                        c = o.anonymous_id,
                        l = {
                            events: [{
                                event: "onload",
                                params: JSON.stringify({
                                    app_id: i,
                                    app_name: r || "",
                                    sdk_version: a,
                                    sdk_type: "script",
                                    sdk_config: this.config,
                                    sdk_desc: "TOB"
                                }),
                                local_time_ms: Date.now()
                            }],
                            user: {
                                user_unique_id: this.config.enable_anonymousid ? c : s
                            },
                            header: {}
                        };
                    setTimeout(function() {
                        e.collect.requestManager.useRequest({
                            url: e.url,
                            data: [l],
                            timeout: 3e4,
                            app_key: "566f58151b0ed37e",
                            forceXhr: !0
                        })
                    }, 16)
                } catch (e) {}
            }, e.prototype.sdkError = function(e, t) {
                var n = this;
                try {
                    var o = e[0],
                        i = o.user,
                        r = o.header,
                        a = [];
                    e.forEach(function(e) {
                        e.events.forEach(function(e) {
                            a.push(e)
                        })
                    });
                    var s = {
                        events: a.map(function(e) {
                            return {
                                event: "on_error",
                                params: JSON.stringify({
                                    error_code: t,
                                    app_id: r.app_id,
                                    app_name: r.app_name || "",
                                    error_event: e.event,
                                    sdk_version: r.sdk_version,
                                    local_time_ms: e.local_time_ms,
                                    tea_event_index: Date.now(),
                                    params: e.params,
                                    header: JSON.stringify(r),
                                    user: JSON.stringify(i)
                                }),
                                local_time_ms: Date.now()
                            }
                        }),
                        user: {
                            user_unique_id: i.user_unique_id
                        },
                        header: {}
                    };
                    setTimeout(function() {
                        n.collect.requestManager.useRequest({
                            url: n.url,
                            data: [s],
                            timeout: 3e4,
                            app_key: "566f58151b0ed37e",
                            forceXhr: !0
                        })
                    }, 16)
                } catch (e) {}
            }, e
        }();

    function Le(e, t) {
        if (void 0 === t && (t = "list"), !e) return !1;
        if (t && "list" === t) {
            if (["LI", "TR", "DL"].includes(e.nodeName)) return !0;
            if (e.dataset && e.dataset.hasOwnProperty("teaIdx")) return !0;
            if (e.hasAttribute && e.hasAttribute("data-tea-idx")) return !0
        } else {
            if (["A", "BUTTON"].includes(e.nodeName)) return !0;
            if (e.dataset && e.dataset.hasOwnProperty("teaContainer")) return !0;
            if (e.hasAttribute && e.hasAttribute("data-tea-container")) return !0;
            if (e.hasAttribute && qe(e, "ss")) return !0
        }
        return !1
    }
    var Pe = function(e, t) {
        return !!qe(e, t)
    };

    function ze(e) {
        for (var t = e; t && !Le(t, "container");) {
            if ("HTML" === t.nodeName || "BODY" === t.nodeName) return e;
            t = t.parentElement
        }
        return t || e
    }
    var je = function(e) {
        if (!e) return "";
        var t = "";
        return e.textContent ? t = e.textContent.trim() : e.innerText && (t = e.innerText.trim()), "input" !== e.tagName && "INPUT" !== e.tagName || (t = e.value || ""), t
    };

    function Ve(e) {
        for (var t = e; t && t.parentNode;) {
            if (t.hasAttribute("data-tea-ignore")) return !0;
            if ("HTML" === t.nodeName || "body" === t.nodeName) return !1;
            t = t.parentNode
        }
        return !1
    }
    var Ke = function(e, t) {
            return e.hasAttribute ? e.hasAttribute(t) : e.attributes ? !(!e.attributes[t] || !e.attributes[t].specified) : void 0
        },
        qe = function(e, t) {
            if ("string" == typeof t) return Ke(e, t);
            if (c(t)) {
                for (var n = !1, o = 0; o < t.length; o++) {
                    if (Ke(e, t[o])) {
                        n = !0;
                        break
                    }
                }
                return n
            }
        },
        He = function(e, t) {
            var n = {};
            if ("string" == typeof t) Ke(e, t) && (n[t] = e.getAttribute(t));
            else if (c(t))
                for (var o = 0; o < t.length; o++) {
                    Ke(e, t[o]) && (n[t[o]] = e.getAttribute(t[o]))
                }
            return n
        },
        Je = function(e) {
            if (e.children.length) {
                var t = e.children;
                return ![].slice.call(t).some(function(e) {
                    return e.children.length > 0
                })
            }
            return !0
        },
        Fe = function(e) {
            if ("svg" === e.tagName.toLowerCase()) return !0;
            for (var t = e.parentElement, n = !1; t;) "svg" === t.tagName.toLowerCase() ? (t = null, n = !0) : t = t.parentElement;
            return n
        };
    var We = function() {
            function t(t, n, o) {
                var i = this;
                this.clickEvent = function(e) {
                    (function(e, t) {
                        if (1 !== e.nodeType) return !1;
                        if (!t.svg && Fe(e)) return !1;
                        if (["HTML", "BODY"].includes(e.tagName.toUpperCase())) return !1;
                        var n = e;
                        return !!("none" !== n.style.display && (Le(n, "container") || t.track_attr && Pe(n, t.track_attr) || Je(n)))
                    })(e.target, i.options) && i.eventHandel({
                        eventType: "dom",
                        eventName: "click"
                    }, e)
                }, this.changeEvent = function(e) {
                    i.eventHandel({
                        eventType: "dom",
                        eventName: "change"
                    }, e)
                }, this.submitEvent = function(e) {
                    i.eventHandel({
                        eventType: "dom",
                        eventName: "submit"
                    }, e)
                }, this.getPageViewEvent = function(t, n) {
                    n && "pushState" === n && i.eventHandel({
                        eventType: "dom",
                        eventName: "beat"
                    }, e({
                        beat_type: 0
                    }, t)), i.eventHandel({
                        eventType: "dom",
                        eventName: "page_view"
                    }, t)
                }, this.getPageLoadEvent = function(e) {
                    i.eventHandel({
                        eventType: "dom",
                        eventName: "page_statistics"
                    }, {
                        lcp: e
                    })
                }, this.config = o.getConfig().eventConfig, this.collect = n, this.options = t, this.beatTime = t.beat, this.statistics = !1
            }
            return t.prototype.init = function(e) {
                this.eventHandel = e;
                var t = this.config.mode;
                this.addListener(t)
            }, t.prototype.addListener = function(e) {
                var t = this;
                if ("proxy-capturing" === e && (this.config.click && window.document.addEventListener("click", this.clickEvent, !0), this.config.change && window.document.addEventListener("change", this.changeEvent, !0), this.config.submit && window.document.addEventListener("submit", this.submitEvent, !0), this.config.pv && this.collect.on("route-change", function(e) {
                        var n = e.config,
                            o = e.name;
                        t.getPageViewEvent(n, o)
                    }), this.config.beat)) {
                    try {
                        "complete" === document.readyState ? this.beatEvent(this.beatTime) : window.addEventListener("load", function() {
                            t.beatEvent(t.beatTime)
                        });
                        var n = 0,
                            o = null;
                        window.addEventListener("scroll", function() {
                            clearTimeout(o), o = setTimeout(i, 500), n = document.documentElement.scrollTop || document.body.scrollTop
                        });
                        var i = function() {
                            (document.documentElement.scrollTop || document.body.scrollTop) == n && t.eventHandel({
                                eventType: "dom",
                                eventName: "beat"
                            }, {
                                beat_type: 1
                            })
                        }
                    } catch (e) {}
                    try {
                        var r = window.performance && window.performance.getEntriesByType("paint");
                        if (r && r.length) new PerformanceObserver(function(e) {
                            var n = e.getEntries(),
                                o = n[n.length - 1],
                                i = o.renderTime || o.loadTime;
                            t.statistics || (t.getPageLoadEvent(i), t.statistics = !0)
                        }).observe({
                            entryTypes: ["largest-contentful-paint"]
                        }), setTimeout(function() {
                            t.statistics || (t.getPageLoadEvent(r[0].startTime || 0), t.statistics = !0)
                        }, 2e3);
                        else this.getPageLoadEvent(0)
                    } catch (e) {
                        this.getPageLoadEvent(0)
                    }
                }
            }, t.prototype.removeListener = function() {
                window.document.removeEventListener("click", this.clickEvent, !0), window.document.removeEventListener("change", this.changeEvent, !0), window.document.removeEventListener("submit", this.submitEvent, !0)
            }, t.prototype.beatEvent = function(e) {
                var t = this;
                try {
                    var n;
                    this.eventHandel({
                        eventType: "dom",
                        eventName: "beat"
                    }, {
                        beat_type: 3
                    }), this.beatTime && (n = setInterval(function() {
                        t.eventHandel({
                            eventType: "dom",
                            eventName: "beat"
                        }, {
                            beat_type: 2
                        })
                    }, e)), g(function() {
                        t.eventHandel({
                            eventType: "dom",
                            eventName: "beat",
                            eventSend: "becon"
                        }, {
                            beat_type: 0
                        }), t.beatTime && clearInterval(n)
                    })
                } catch (e) {}
            }, t
        }(),
        Xe = {
            eventConfig: {
                mode: "proxy-capturing",
                submit: !1,
                click: !0,
                change: !1,
                pv: !0,
                beat: !0,
                hashTag: !1,
                impr: !1
            },
            scoutConfig: {
                mode: "xpath"
            }
        },
        $e = function() {
            function e(e, t) {
                this.config = e, this.config.eventConfig = Object.assign(this.config.eventConfig, t)
            }
            return e.prototype.getConfig = function() {
                return this.config
            }, e.prototype.setConfig = function(e) {
                return this.config = e
            }, e
        }();

    function Qe(e) {
        for (var t = []; null !== e.parentElement;) t.push(e), e = e.parentElement;
        var n = [],
            o = [];
        return t.forEach(function(e) {
            var t = function(e) {
                    if (null === e) return {
                        str: "",
                        index: 0
                    };
                    var t = 0,
                        n = e.parentElement;
                    if (n)
                        for (var o = n.children, i = 0; i < o.length && o[i] !== e; i++) o[i].nodeName === e.nodeName && t++;
                    return {
                        str: [e.nodeName.toLowerCase(), Le(e, "list") ? "[]" : ""].join(""),
                        index: t
                    }
                }(e),
                i = t.str,
                r = t.index;
            n.unshift(i), o.unshift(r)
        }), {
            element_path: "/".concat(n.join("/")),
            positions: o
        }
    }

    function Ye(e, t, n, o) {
        var i = {},
            r = function(e) {
                if (e) {
                    var t = e.getBoundingClientRect(),
                        n = t.width,
                        o = t.height;
                    return {
                        left: t.left,
                        top: t.top,
                        element_width: n,
                        element_height: o
                    }
                }
            }(t),
            a = function(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {});
                var n = e.clientX,
                    o = e.clientY,
                    i = t.left,
                    r = t.top,
                    a = n - i >= 0 ? n - i : 0,
                    s = o - r >= 0 ? o - r : 0;
                return {
                    touch_x: Math.floor(a),
                    touch_y: Math.floor(s)
                }
            }(e, r),
            s = r.element_width,
            c = r.element_height,
            l = a.touch_x,
            u = a.touch_y,
            h = Qe(t),
            f = h.element_path,
            p = h.positions,
            d = function(e) {
                var t = ze(e),
                    n = [];
                return function e(t) {
                    var o = function(e) {
                        var t = "";
                        return 3 === e.nodeType ? t = e.textContent.trim() : e.dataset && e.dataset.hasOwnProperty("teaTitle") ? t = e.getAttribute("data-tea-title") : e.hasAttribute("ata-tea-title") ? t = e.getAttribute("data-tea-title") : e.hasAttribute("title") ? t = e.getAttribute("title") : "INPUT" === e.nodeName && ["button", "submit"].includes(e.getAttribute("type")) ? t = e.getAttribute("value") : "IMG" === e.nodeName && e.getAttribute("alt") && (t = e.getAttribute("alt")), t.slice(0, 200)
                    }(t);
                    if (o && -1 === n.indexOf(o) && n.push(o), t.childNodes.length > 0)
                        for (var i = t.childNodes, r = 0; r < i.length; r++) 8 !== i[r].nodeType && e(i[r])
                }(t), n
            }(t),
            g = window.performance.timing.navigationStart,
            v = Date.now() - g,
            m = p.map(function(e) {
                return "".concat(e)
            }),
            y = null;
        if (window.TEAVisualEditor && window.TEAVisualEditor.getOriginXpath && (y = window.TEAVisualEditor.getOriginXpath({
                xpath: f,
                positions: m
            })), i.element_path = y && y.xpath || f, i.positions = y && y.positions || m, o && !o.text && (i.texts = d, i.element_title = je(t)), i.element_id = t.getAttribute("id") || "", i.element_class_name = t.getAttribute("class") || "", i.element_type = t.nodeType, i.element_width = Math.floor(s), i.element_height = Math.floor(c), i.touch_x = l, i.touch_y = u, i.page_manual_key = "", i.elememt_manual_key = "", i.since_page_start_ms = v, i.page_start_ms = g, i.page_path = location.pathname, i.page_host = location.host, n.track_attr && Pe(t, n.track_attr)) {
            var _ = He(t, n.track_attr);
            for (var b in _) i[b] = _[b]
        }
        if (n.custom_attr) try {
            if (Pe(t, n.custom_attr)) {
                _ = He(t, n.custom_attr), b = decodeURIComponent(_[n.custom_attr]);
                var E = JSON.parse(b);
                if (Object.keys(E))
                    for (var S in E) i[S] = E[S]
            }
        } catch (e) {
            console.log("custom attr error")
        }
        var w = ze(t);
        return "A" === w.tagName && (i.href = w.getAttribute("href")), !1 !== n.src && ("IMG" !== t.tagName || t.getAttribute("src").includes("base64") || (i.src = t.getAttribute("src"))), i
    }
    var Ze = function(t, n, o, i, r) {
            return e(e({
                event: t
            }, Ye(n, o, i, r)), {
                is_html: 1,
                page_key: window.location.href,
                page_title: document.title
            })
        },
        et = function() {
            function t(e, t) {
                this.ignore = {
                    text: !1
                }, this.initConfig = e, this.options = t, this.eventName = t && "tea" === t.custom ? {
                    click: "__bav_click",
                    page: "__bav_page",
                    beat: "__bav_beat",
                    static: "__bav_page_statistics",
                    exposure: "__bav_page_exposure"
                } : {
                    click: "bav2b_click",
                    page: "bav2b_page",
                    beat: "bav2b_beat",
                    static: "bav2b_page_statistics",
                    exposure: "$bav2b_exposure",
                    scroll: "$bav2b_slide"
                }, t && !1 === t.text && (this.ignore.text = !0), t && t.exposure && t.exposure.eventName && (this.eventName.exposure = t.exposure.eventName), t && t.scroll && t.scroll.eventName && (this.eventName.scroll = t.scroll.eventName)
            }
            return t.prototype.handleEvent = function(t, n) {
                try {
                    if (Ve(t.target)) return null;
                    var o = "bav2b_click";
                    switch (n) {
                        case "click":
                            return o = this.eventName.click, Ze(o, t, t.target, this.options, this.ignore);
                        case "change":
                            return e(e({}, Ze(o = "bav2b_change", t, t.target, this.options)), function(e, t) {
                                try {
                                    if ("bav2b_change" === e) return t.hasAttribute("data-tea-track") ? {
                                        value: t.value
                                    } : {}
                                } catch (e) {
                                    return {}
                                }
                            }(o, t.target));
                        case "submit":
                            return Ze(o = "bav2b_submit", t, t.target, this.options)
                    }
                } catch (e) {
                    return console.error(e), null
                }
            }, t.prototype.handleViewEvent = function(e) {
                e.event = this.eventName.page, e.page_title = document.title, e.page_total_width = window.innerWidth, e.page_total_height = window.innerHeight;
                try {
                    var t = window.sessionStorage && window.sessionStorage.getItem("_tea_cache_duration");
                    if (t) {
                        var n = JSON.parse(t);
                        e.refer_page_duration_ms = n ? n.duration : ""
                    }
                    e.scroll_width = document.documentElement.scrollLeft ? document.documentElement.scrollLeft + window.innerWidth : window.innerWidth, e.scroll_height = document.documentElement.scrollTop ? document.documentElement.scrollTop + window.innerHeight : window.innerHeight, e.page_start_ms = window.performance.timing.navigationStart
                } catch (e) {
                    console.log("page event error ".concat(JSON.stringify(e)))
                }
                return e
            }, t.prototype.handleStatisticsEvent = function(e) {
                var t = {};
                t.event = this.eventName.static, t.is_html = 1, t.page_key = location.href, t.refer_page_key = document.referrer || "", t.page_title = document.title, t.page_manual_key = this.initConfig.autotrack.page_manual_key || "", t.refer_page_manual_key = "";
                try {
                    var n = e.lcp,
                        o = window.performance.timing,
                        i = o.loadEventEnd - o.navigationStart;
                    t.page_init_cost_ms = parseInt(n || (i > 0 ? i : 0)), t.page_start_ms = o.navigationStart
                } catch (e) {
                    console.log("page_statistics event error ".concat(JSON.stringify(e)))
                }
                return t
            }, t.prototype.handleBeadtEvent = function(e) {
                e.event = this.eventName.beat, e.page_key = window.location.href, e.is_html = 1, e.page_title = document.title, e.page_manual_key = this.initConfig.autotrack.page_manual_key || "";
                try {
                    e.page_viewport_width = window.innerWidth, e.page_viewport_height = window.innerHeight, e.page_total_width = document.documentElement.scrollWidth, e.page_total_height = document.documentElement.scrollHeight, e.scroll_width = document.documentElement.scrollLeft + window.innerWidth, e.scroll_height = document.documentElement.scrollTop + window.innerHeight, e.since_page_start_ms = Date.now() - window.performance.timing.navigationStart, e.page_start_ms = window.performance.timing.navigationStart
                } catch (e) {
                    console.log("beat event error ".concat(JSON.stringify(e)))
                }
                return e
            }, t.prototype.handleExposureEvent = function(e, t) {
                if (Ve(t.target)) return null;
                var n = Ze(e.event || this.eventName.exposure, t, t.target || t, this.options, this.ignore);
                if (n.$exposure_type = e.exposureType, this.options.exposure.callback) {
                    var o = this.options.exposure.callback(n);
                    return o || Object.keys(o).length ? o : (console.warn("exposure callback must return data!"), n)
                }
                return n
            }, t.prototype.handleScrollEvent = function(e, t) {
                var n = Ze(e.event || this.eventName.scroll, t, t.target || t, this.options, this.ignore);
                if (n = Object.assign(n, e.params), !this.options.scroll.callback || (n = this.options.scroll.callback(n)) || Object.keys(n).length) return n;
                console.warn("scroll callback must return data!")
            }, t
        }(),
        tt = function() {
            function e(e) {
                this.collect = e
            }
            return e.prototype.send = function(e, t) {
                var n = t.event;
                delete t.event, e && "becon" === e.eventSend ? this.collect.beconEvent(n, t) : this.collect.event(n, t)
            }, e.prototype.get = function(e, t) {
                var n = Object.assign({
                    headers: {
                        "content-type": "application/json"
                    },
                    method: "GET"
                }, t);
                fetch(e, n)
            }, e.prototype.post = function(e, t) {
                var n = Object.assign({
                    headers: {
                        "content-type": "application/json"
                    },
                    method: "POST"
                }, t);
                fetch(e, n)
            }, e
        }(),
        nt = "_TEA_VE_OPEN",
        ot = "_TEA_VE_APIHOST",
        it = "lang",
        rt = "_VISUAL_EDITOR_V",
        at = "_VISUAL_EDITOR_U";

    function st() {
        try {
            var e = window.TEAVisualEditor.lang = window.TEAVisualEditor.lang || O.get(it),
                t = window.TEAVisualEditor.__editor_ajax_domain = window.TEAVisualEditor.__editor_ajax_domain || O.get(ot),
                n = window.TEAVisualEditor.__editor_verison = window.TEAVisualEditor.__editor_verison || O.get(rt),
                o = window.TEAVisualEditor.__editor_url = window.TEAVisualEditor.__editor_url || O.get(at),
                i = +new Date,
                r = new Date(i + 18e5);
            O.set(nt, "1", {
                expires: r
            }), O.set(ot, t, {
                expires: r
            }), O.set(at, o, {
                expires: r
            }), O.set(it, e, {
                expires: r
            }), O.set(rt, n || "", {
                expires: r
            })
        } catch (e) {
            console.log("set cookie err")
        }
    }
    var ct = !1;

    function lt(e) {
        var t = e.event,
            n = e.editorUrl,
            o = e.autoTrackInstance;
        ct || (ct = !0, v(n, function() {
            Se(t, "editorScriptloadSuccess"), o.destroy()
        }, function() {
            t && Se(t, "editorScriptloadError"), ct = !1
        }))
    }

    function ut(e, t) {
        window.TEAVisualEditor = window.TEAVisualEditor || {};
        var n = "",
            o = "".concat(P, "?query=").concat(Date.now());
        window.TEAVisualEditor.appId = t.app_id;
        var i = t.channel_domain,
            r = "";
        if (Ee(["*"]), i) {
            var a, s = "";
            try {
                var c = window.performance.getEntriesByType("resource");
                if (c && c.length && (c.forEach(function(e) {
                        "script" === e.initiatorType && e.name && -1 !== e.name.indexOf("collect") && (s = e.name)
                    }), s || document.currentScript && (s = document.currentScript.src), s && (a = s.split("/")) && a.length)) {
                    r = "https:/";
                    for (var l = 2; l < a.length && l !== a.length - 1; l++) r += "/".concat(a[l]);
                    if (r && r.indexOf("/5.0")) {
                        var u = r.split("/5.0");
                        r = u[0] || r
                    }
                }
            } catch (e) {}
        }
        if (Te(t, B), "1" === O.get(nt)) {
            var h = function() {
                    var e = O.get(ot);
                    try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    return e
                }(),
                f = "";
            h && (window.TEAVisualEditor.__editor_ajax_domain = h, f = O.get(at)), lt({
                event: null,
                editorUrl: f || o,
                autoTrackInstance: e
            }), st()
        } else try {
            we("tea:openVisualEditor", function(t) {
                var a = t.data;
                if ("string" == typeof t.data) try {
                    a = JSON.parse(t.data)
                } catch (e) {
                    a = void 0
                }
                if (a) {
                    var s = a.referrer,
                        c = a.lang;
                    if (s && (window.TEAVisualEditor.__editor_ajax_domain = s), n = o, i) {
                        var l = a.version,
                            u = l ? "/visual-editor-rangers-v".concat(l) : "/visual-editor-rangers-v1.0.0";
                        n = r ? "".concat(r).concat(u, ".js") : o, window.TEAVisualEditor.__editor_verison = l
                    }
                    window.TEAVisualEditor.__editor_url = n, window.TEAVisualEditor.lang = c, lt({
                        event: t,
                        editorUrl: n,
                        autoTrackInstance: e
                    }), st()
                }
            }), window.TEAVisualEditor.openAutotrackEditor = function() {
                lt({
                    event: null,
                    editorUrl: window.TEAVisualEditor.__editor_url,
                    autoTrackInstance: e
                })
            }
        } catch (e) {
            console.log("receive message error")
        }
        try {
            we("tea:openHeatMapCore", function(t) {
                lt({
                    event: t,
                    editorUrl: "".concat(j, ".js?query=").concat(Date.now()),
                    autoTrackInstance: e
                })
            })
        } catch (e) {
            console.log("openHeatMapCore error")
        }
    }
    var ht, ft = function() {
        function e(e, t) {
            this._instance = null, this._intersection = e, this.config = t, this._intersection && this.init()
        }
        return e.prototype.init = function() {
            var e = this;
            if (window.MutationObserver) try {
                if (this._instance = new MutationObserver(function(t) {
                        t.forEach(function(t) {
                            "attributes" === t.type && e.attributeChangeObserve(t), "childList" === t.type && e.modifyNodeObserve(t)
                        })
                    }), !document || !document.body) return void console.warn("please use sdk api init after body element");
                var t = !1 !== this.config.autotrack.exposure.attributes;
                this._instance.observe(document.body, {
                    childList: !0,
                    attributes: t,
                    subtree: !0,
                    attributeOldValue: !1
                })
            } catch (e) {
                console.log("your browser cannot support MutationObserver，so cannot report exposure event, please update")
            } else console.log("your browser cannot support MutationObserver，so cannot report exposure event, please update")
        }, e.prototype.attributeChangeObserve = function(e) {
            e.target.hasAttribute("data-exposure") ? this.exposureAdd(e, "mutation") : this.exposureRemove(e)
        }, e.prototype.modifyNodeObserve = function(e) {
            var t = this;
            Array.prototype.forEach.call(e.addedNodes, function(e) {
                1 === e.nodeType && e.hasAttribute("data-exposure") && t.exposureAdd(e, "intersect"), t.mapChild(e, t.exposureAdd.bind(t))
            }), Array.prototype.forEach.call(e.removedNodes, function(e) {
                1 === e.nodeType && e.hasAttribute("data-exposure") && t.exposureRemove(e), t.mapChild(e, t.exposureRemove.bind(t))
            })
        }, e.prototype.mapChild = function(e, t) {
            var n = this;
            1 === e.nodeType && e.children.length && Array.prototype.forEach.call(e.children, function(e) {
                1 === e.nodeType && e.hasAttribute("data-exposure") && t(e), n.mapChild(e, t)
            })
        }, e.prototype.exposureAdd = function(e, t) {
            try {
                this._intersection && this._intersection.exposureAdd(e, t)
            } catch (e) {
                console.log("intersection error", JSON.stringify(e.message))
            }
        }, e.prototype.exposureRemove = function(e) {
            try {
                this._intersection && this._intersection.exposureRemove(e)
            } catch (e) {
                console.log("intersection error", JSON.stringify(e.message))
            }
        }, e._exposure_observer = null, e
    }();
    ! function(e) {
        e[e.EXPOSURE_ONCE = 0] = "EXPOSURE_ONCE", e[e.LIFECYCLE_SHOW_NEW = 3] = "LIFECYCLE_SHOW_NEW", e[e.RESUME_FORM_PAGE = 6] = "RESUME_FORM_PAGE", e[e.RESUME_FORM_BACK = 7] = "RESUME_FORM_BACK", e[e.NOT_EXPOSURE = -1] = "NOT_EXPOSURE"
    }(ht || (ht = {}));
    var pt, dt = function() {
            function e(t, n, o) {
                var i = this;
                this.backStatus = !1, this.instance = this.buildObserver(), this.collect = t, this.observeMap = e._observer_map, n.autotrack.exposure.ratio ? this.ratio = n.autotrack.exposure.ratio : 0 === n.autotrack.exposure.ratio ? this.ratio = 0 : this.ratio = .5, this.timeLimit = n.autotrack.exposure.stay || 0, this.exposureType = ht.NOT_EXPOSURE, this.eventHandle = o, this.hashMap = new Map, this.backStatus = !1, this.lastState = null, this.collect.on("re-start-sdk", function() {
                    i.visibilitychange()
                }), this.addListen()
            }
            return e.prototype.buildObserver = function() {
                var t = this;
                if (e._observer_instance) return console.log("your browser cannot support IntersectionObserver， so cannot report exposure event, please update"), null;
                if (window.IntersectionObserver) {
                    for (var n = [], o = 0; o <= 1; o += .01) n.push(o);
                    n.push(1);
                    try {
                        e._observer_instance = new IntersectionObserver(function(e) {
                            e.forEach(function(e) {
                                var n = e.target.observeId,
                                    o = t.observeMap.get(n),
                                    i = (e.target, e.isIntersecting, e.intersectionRatio);
                                if (o.intersectionRatio = i, i <= .1 && (e.target.backStatus = !1), t.observeMap.set(n, o), i < t.ratio) return o.isIntersecting = !1, o.added = !1, o.exposured = !1, o.startTime = Date.now(), void t.observeMap.set(n, o);
                                if (!o.added) {
                                    if (o.startTime = Date.now(), o.added = !0, o.isIntersecting = !0, t.timeLimit) {
                                        var r = setTimeout(function() {
                                            try {
                                                if (o.isIntersecting && !o.exposured && t.observeMap.get(n)) {
                                                    var i = t.observeMap.get(n).intersectionRatio;
                                                    t.exposureEvent(e, i, n, o)
                                                }
                                            } catch (e) {
                                                console.log("IntersectionObserver setTimeout error，msg: ".concat(JSON.stringify(e)))
                                            }
                                        }, t.timeLimit);
                                        o.wait = r
                                    }
                                    t.observeMap.set(n, o)
                                }
                                Date.now() - o.startTime >= t.timeLimit && !o.exposured && t.exposureEvent(e, i, n, o)
                            })
                        }, {
                            threshold: n
                        })
                    } catch (e) {
                        console.log("IntersectionObserver error，msg: ".concat(JSON.stringify(e)))
                    }
                    return e._observer_instance
                }
                return console.log("your browser cannot support IntersectionObserver， so cannot report exposure event, please update"), null
            }, e.prototype.exposureAdd = function(e, t) {
                var n = "mutation" === t ? e.target : e,
                    o = n.observeId,
                    i = ae();
                if (o || this.observeMap.has(o)) {
                    var r = this.observeMap.get(o);
                    if (r && n !== r.instance) this.unobserve(n), this.observeMap.delete(o), n.observeId = i, n.visible = !1, this.observeMap.set(i, {
                        instance: n.cloneNode(!0),
                        isIntersecting: !1
                    }), this.observe(n);
                    else {
                        if (!0 === n.visible) return;
                        this.handleBoundingExposure(n)
                    }
                } else n.observeId = i, n.visible = !1, this.observeMap.set(i, {
                    instance: n.cloneNode(!0),
                    isIntersecting: !1
                }), this.observe(n)
            }, e.prototype.exposureRemove = function(e) {
                this.observeMap.has(e.observeId) && (this.observeMap.delete(e.observeId), this.unobserve(e), e.observeId = "", e.visible = !1)
            }, e.prototype.exposureEvent = function(e, t, n, o) {
                if (t >= this.ratio) {
                    if ("0" === e.target.style.opacity || "hidden" === e.target.style.visibility) return;
                    if (!0 === o.exposured) return;
                    o.startWait && clearTimeout(o.startWait);
                    var i = e.target.getAttribute("data-exposure-event");
                    this.eventHandle({
                        eventType: "dom",
                        eventName: "exposure",
                        event: i,
                        exposureType: this.getExposureType(e.target)
                    }, e), e.target.visible = !0, e.target.hasExposure = !0, o.startTime = Date.now(), o.exposured = !0
                } else o.startTime = Date.now(), o.exposured = !1;
                this.observeMap.set(n, o)
            }, e.prototype.observe = function(e) {
                this.instance && this.instance.observe(e)
            }, e.prototype.unobserve = function(e) {
                this.instance && this.instance.unobserve(e)
            }, e.prototype.getExposureDomToExposure = function() {
                var e = this;
                Array.prototype.forEach.call(document.querySelectorAll("[data-exposure]"), function(t) {
                    e.handleBoundingExposure(t)
                })
            }, e.prototype.visibilitychange = function() {
                var e = this,
                    t = null;
                "visible" === document.visibilityState ? this.timeLimit ? t = setTimeout(function() {
                    e.getExposureDomToExposure()
                }, this.timeLimit) : this.getExposureDomToExposure() : (clearTimeout(t), this.customType = void 0)
            }, e.prototype.handleBoundingExposure = function(e) {
                if (this.getBoundingRatio(e) >= this.ratio) {
                    e.visible = !0;
                    var t = e.getAttribute && e.getAttribute("data-exposure-event");
                    this.eventHandle({
                        eventType: "dom",
                        eventName: "exposure",
                        event: t,
                        exposureType: this.customType || ht.RESUME_FORM_BACK
                    }, e)
                }
            }, e.prototype.getBoundingRatio = function(e) {
                var t = e.getBoundingClientRect(),
                    n = t.top,
                    o = t.left,
                    i = t.width,
                    r = t.height,
                    a = window.innerWidth || document.documentElement.clientWidth,
                    s = window.innerHeight || document.documentElement.clientHeight;
                return n >= 0 && o >= 0 && n <= s && o <= a ? (i > a ? a : i) * (s - n) / (i * r) : 0
            }, e.prototype.getExposureType = function(e) {
                return e.visible ? !1 !== e.backStatus && (this.backStatus || this.customType || 2 === window.performance.navigation.type) ? this.exposureType = ht.RESUME_FORM_PAGE : this.exposureType = ht.LIFECYCLE_SHOW_NEW : (e.hasExposure, !1 !== e.backStatus && (this.backStatus || this.customType || 2 === window.performance.navigation.type) ? this.exposureType = ht.RESUME_FORM_PAGE : this.exposureType = ht.EXPOSURE_ONCE), this.exposureType
            }, e.prototype.addListen = function() {
                var e = this;
                this.collect.on("set-exposure-type", function(t) {
                    e.customType = t
                });
                var t = this.visibilitychange.bind(this);
                if (f(document, "visibilitychange", t, !1), window.addEventListener("hashchange", function(t) {
                        var n = e.hashMap.get(t.oldURL);
                        n && location.href === n.prev ? (e.backStatus = !0, e.exposureType = ht.RESUME_FORM_PAGE) : (e.backStatus = !1, e.hashMap.set(location.href, {
                            current: t.newURL,
                            prev: t.oldURL
                        }))
                    }), this.collect.bridgeReport) {
                    var n = window.history.pushState;
                    history.pushState = function(t) {
                        for (var r = [], a = 1; a < arguments.length; a++) r[a - 1] = arguments[a];
                        "function" == typeof history.onpushstate && history.onpushstate({
                            state: t
                        });
                        var s = n.call.apply(n, i([history, t], o(r)));
                        return e.lastState = t, s
                    };
                    var r = history.replaceState;
                    history.replaceState = function(t) {
                        for (var n = [], a = 1; a < arguments.length; a++) n[a - 1] = arguments[a];
                        "function" == typeof history.onreplacestate && history.onreplacestate({
                            state: t
                        });
                        var s = r.call.apply(r, i([history, t], o(n)));
                        return e.lastState = t, s
                    }
                } else this.collect.on("STATE_CHANGE", function(t) {
                    e.lastState = t
                });
                return window.addEventListener("popstate", function(t) {
                        var n = t.state;
                        n && n.current && e.lastState && e.lastState.back && n.current === e.lastState.back ? (e.backStatus = !0, e.exposureType = ht.RESUME_FORM_PAGE) : e.backStatus = !1
                    }),
                    function() {
                        p(document, "visibilitychange", t, !1)
                    }
            }, e._observer_instance = null, e._observer_map = new Map, e
        }(),
        gt = function() {
            function e(e, t, n) {
                t.autotrack && t.autotrack.exposure && (this._intersection = new dt(e, t, n), this._observer = new ft(this._intersection, t), this._intersection && this._observer ? this.initObserver() : console.log("your browser version cannot support exposure event, please update~"))
            }
            return e.prototype.initObserver = function() {
                var e = this;
                Array.prototype.forEach.call(document.querySelectorAll("[data-exposure]"), function(t) {
                    e._intersection.exposureAdd(t, "intersect")
                })
            }, e
        }();
    ! function(e) {
        e[e.SCROLL_UP = 1] = "SCROLL_UP", e[e.SCROLL_DOWN = 2] = "SCROLL_DOWN", e[e.SCROLL_LEFT = 3] = "SCROLL_LEFT", e[e.SCROLL_RIGHT = 4] = "SCROLL_RIGHT", e[e.NOT_SCROLL = -1] = "NOT_SCROLL"
    }(pt || (pt = {}));
    var vt, mt = function() {
            function e(e, t) {
                this.distance = 30, e.autotrack && e.autotrack.scroll && (e.autotrack.scroll.distance && (this.distance = e.autotrack.scroll.distance), this.eventHandle = t, this.addLinstenr(), this.mutation())
            }
            return e.prototype.addLinstenr = function() {
                var e = this;
                Array.prototype.forEach.call(document.querySelectorAll("[data-scroll]"), function(t) {
                    e.scrollHandle(t)
                })
            }, e.prototype.mutation = function() {
                var e = this;
                if (window.MutationObserver) try {
                    var t = new MutationObserver(function(t) {
                        t.forEach(function(t) {
                            "childList" === t.type && e.modifyNodeObserve(t)
                        })
                    });
                    if (!document || !document.body) return void console.warn("please use sdk api init after body element");
                    t.observe(document.body, {
                        childList: !0,
                        attributes: !0,
                        subtree: !0,
                        attributeOldValue: !1
                    })
                } catch (e) {
                    console.log("your browser cannot support MutationObserver")
                } else console.log("your browser cannot support MutationObserver")
            }, e.prototype.modifyNodeObserve = function(e) {
                var t = this;
                Array.prototype.forEach.call(e.addedNodes, function(e) {
                    1 === e.nodeType && e.hasAttribute("data-scroll") && t.scrollHandle(e), t.mapChild(e, t.scrollHandle.bind(t))
                }), Array.prototype.forEach.call(e.removedNodes, function(e) {
                    1 === e.nodeType && e.hasAttribute("data-scroll") && t.scrollHandle(e, "remove"), t.mapChild(e, t.scrollHandle.bind(t))
                })
            }, e.prototype.mapChild = function(e, t) {
                var n = this;
                1 === e.nodeType && e.children.length && Array.prototype.forEach.call(e.children, function(e) {
                    1 === e.nodeType && e.hasAttribute("data-scroll") && t(e), n.mapChild(e, t)
                })
            }, e.prototype.scrollHandle = function(e, t) {
                var n = this;
                try {
                    var o = e.scrollTop,
                        i = e.scrollLeft,
                        r = null,
                        a = 0,
                        s = 0,
                        c = function(t) {
                            clearTimeout(r), r = setTimeout(function() {
                                var r = e.scrollTop,
                                    h = e.scrollLeft,
                                    f = t.target && t.target.getAttribute("data-scroll-event") || "";
                                1 === u || 2 === u ? r === c && (s = c - o, Math.abs(s) >= n.distance && n.distance && n.eventHandle({
                                    eventType: "dom",
                                    eventName: "scroll",
                                    event: f,
                                    params: {
                                        $direction: u,
                                        $offsetY: s,
                                        $offsetX: a
                                    }
                                }, t)) : 3 !== u && 4 !== u || h === l && (a = l - i, Math.abs(a) >= n.distance && n.distance && n.eventHandle({
                                    eventType: "dom",
                                    eventName: "scroll",
                                    event: f,
                                    params: {
                                        $direction: u,
                                        $offsetY: s,
                                        $offsetX: a
                                    }
                                }, t)), o = c, i = l
                            }, 100);
                            var c = e.scrollTop,
                                l = e.scrollLeft,
                                u = pt.NOT_SCROLL;
                            c > o ? u = pt.SCROLL_DOWN : c < o ? u = pt.SCROLL_UP : l > i ? u = pt.SCROLL_LEFT : l < i && (u = pt.SCROLL_RIGHT)
                        };
                    return "remove" === t ? e.removeEventListener("scroll", c, !1) : e.addEventListener("scroll", c, !1),
                        function() {
                            e.removeEventListener("scroll", c, !1)
                        }
                } catch (e) {
                    console.warn("scroll event error", JSON.stringify(e))
                }
            }, e
        }(),
        yt = {
            hashTag: !1,
            impr: !1
        },
        _t = function() {
            function e() {}
            return e.prototype.apply = function(e, t) {
                if (this.autoTrackStart = !1, this.collect = e, this.config = t, t.autotrack) {
                    var n = e.configManager.getSettingData("bav_log_collect");
                    if ((!l(n) || n) && (!t.autotrack || !t.autotrack.collect_url || t.autotrack.collect_url())) {
                        var o = e.Types;
                        this.ready(o.Autotrack), this.collect.emit(o.AutotrackReady)
                    }
                }
            }, e.prototype.ready = function(e) {
                this.collect.set(e);
                var t = this.config.autotrack;
                t = "object" == typeof t ? t : {}, t = Object.assign(yt, t), this.destroyed = !1, this.options = t, this.Config = new $e(Xe, this.options), this.Exposure = new gt(this.collect, this.config, this.handle.bind(this)), this.Scroll = new mt(this.config, this.handle.bind(this)), this.Listener = new We(t, this.collect, this.Config), this.EventHandle = new et(this.config, t), this.Request = new tt(this.collect), this.autoTrackStart = !0, this.init(), ut(this, this.config)
            }, e.prototype.init = function() {
                this.Listener.init(this.handle.bind(this))
            }, e.prototype.handle = function(e, t) {
                try {
                    if (this.config.autotrack.collect_url && !this.config.autotrack.collect_url()) return
                } catch (e) {}
                this.collect.sdkStop || "dom" === e.eventType && this.handleDom(e, t)
            }, e.prototype.handleDom = function(e, t) {
                try {
                    var n = e.eventName;
                    if ("click" === n || "change" === n || "submit" === n)(a = this.EventHandle.handleEvent(t, n)) && this.Request.send({
                        eventType: "custom"
                    }, a);
                    else if ("page_view" === n || "page_statistics" === n) {
                        var o = void 0;
                        (o = "page_view" === n ? this.EventHandle.handleViewEvent(t) : this.EventHandle.handleStatisticsEvent(t)) && this.Request.send({
                            eventType: "custom"
                        }, o)
                    } else if ("beat" === n) {
                        var i = this.EventHandle.handleBeadtEvent(t),
                            r = e.eventSend;
                        i && this.Request.send({
                            eventType: "custom",
                            eventSend: r
                        }, i)
                    } else if ("exposure" === n) {
                        (a = this.EventHandle.handleExposureEvent(e, t)) && this.Request.send({
                            eventType: "custom"
                        }, a)
                    } else if ("scroll" === n) {
                        var a;
                        (a = this.EventHandle.handleScrollEvent(e, t)) && this.Request.send({
                            eventType: "custom"
                        }, a)
                    }
                } catch (e) {
                    console.log("handel dom event error ".concat(JSON.stringify(e)))
                }
            }, e.prototype.destroy = function() {
                if (!this.autoTrackStart) return console.warn("engine is undefined, make sure you have called autoTrack.start()");
                this.autoTrackStart = !1, this.Listener.removeListener()
            }, e
        }();
    try {
        var bt = pe();
        bt && (bt.LogAutoTrack = function(e, t) {
            (new _t).apply(e, t)
        })
    } catch (e) {}! function(e) {
        e.Net = "net", e.FailNet = "f_net", e.FailData = "f_data"
    }(vt || (vt = {}));
    var Et = {
            pv: ["predefine_pageview"],
            sdk: ["_be_active", "predefine_page_alive", "predefine_page_close", "__profile_set", "__profile_set_once", "__profile_increment", "__profile_unset", "__profile_append"],
            autotrack: ["bav2b_click", "bav2b_page", "bav2b_beat", "bav2b_page_statistics", "__bav_click", "__bav_page", "__bav_beat", "__bav_page_statistics"]
        },
        St = function() {
            function e() {}
            return e.prototype.apply = function(e, t) {
                var n = this;
                if (this.ready = t.app_id && t.enable_tracer && !t.disable_track_event, this.ready) {
                    this.limit = {
                        pv: 1,
                        sdk: 3,
                        autotrack: 3,
                        log: 3
                    }, this.errorCode = {
                        f_net: 0,
                        f_data: 0
                    }, this.tracerCache = new Map, this.collect = e, this.appid = t.app_id, this.reportUrl = e.configManager.getUrl("event");
                    var o = this.collect.Types,
                        i = e.adapters.fetch;
                    this.fetch = i, this.collect.on(o.Event, function() {
                        n.addCount("log")
                    }), this.collect.on(o.SubmitError, function(e) {
                        var t = e.type,
                            o = e.eventDate,
                            i = e.errorCode,
                            r = e.response;
                        n.addErrorCount(o, t, i, r)
                    }), this.listener(), this.collect.emit(o.TracerReady)
                }
            }, e.prototype.addCount = function(e, t, n) {
                void 0 === t && (t = "net"), void 0 === n && (n = 1);
                try {
                    this.tracerCache || (this.tracerCache = new Map);
                    var o = void 0;
                    if (this.tracerCache.has(e)) {
                        if ((i = this.tracerCache.get(e)).has(t)) o = i.get(t).params.count, o++, i.set(t, this.processTracer(o, e, t));
                        else o = n, i.set(t, this.processTracer(n, e, t))
                    } else {
                        var i = new Map;
                        o = n, i.set(t, this.processTracer(n, e, t)), this.tracerCache.set(e, i)
                    }
                    "net" === t && o >= this.limit[e] && this.report(!1)
                } catch (e) {
                    console.log(e)
                }
            }, e.prototype.addErrorCount = function(e, t, n, o) {
                var i = this;
                try {
                    if (e && e.length) {
                        var r = e[0].events;
                        r && r.length && ("f_data" === t ? (o && o.hasOwnProperty("sc") ? this.addCount("log", t, r.length - o.sc) : this.addCount("log", t, r.length), this.errorCode[t] = n) : r.forEach(function(e) {
                            var o = "log";
                            for (var r in Et)
                                if (-1 !== Et[r].indexOf(e.event)) {
                                    o = r;
                                    break
                                }
                            i.addCount(o, t, 1), i.errorCode[t] = n
                        }))
                    }
                } catch (e) {}
            }, e.prototype.report = function(e) {
                if (this.tracerCache) {
                    var t = [];
                    this.tracerCache.forEach(function(e) {
                        console.log(e), e.forEach(function(e) {
                            t.push(e)
                        })
                    }), t && t.length && this.sendTracer(t, e)
                }
            }, e.prototype.sendTracer = function(e, t) {
                try {
                    var n = this.collect.eventManager.merge(e);
                    t && window.navigator.sendBeacon ? window.navigator.sendBeacon(this.reportUrl, JSON.stringify(n)) : this.fetch(this.reportUrl, n), this.tracerCache = null
                } catch (e) {}
            }, e.prototype.processTracer = function(e, t, n) {
                var o = {
                    count: e,
                    state: n,
                    key: t,
                    params_for_special: "applog_trace",
                    aid: this.appid,
                    platform: "web",
                    _staging_flag: 1,
                    sdk_version: B
                };
                "f_net" !== n && "f_data" !== n || (o.errorCode = this.errorCode[n]);
                var i = this.collect.processEvent("applog_trace", o);
                if (i && i.event) return delete i.is_bav, i
            }, e.prototype.listener = function() {
                var e = this;
                document.addEventListener("visibilitychange", function() {
                    "hidden" === document.visibilityState && e.leavePage()
                }), g(function() {
                    e.leavePage()
                })
            }, e.prototype.leavePage = function() {
                this.report(!0)
            }, e
        }();
    try {
        var wt = pe();
        wt && (wt.LogTracer = function(e, t) {
            (new St).apply(e, t)
        })
    } catch (e) {
        console.log(e)
    }
    var kt = function() {
            function e() {
                this.verifyReady = !1, this.cleanStatus = !1
            }
            return e.prototype.apply = function(e, t) {
                var n = this;
                S() || (this.collector = e, this.config = t, this.eventStorage = [], this.collector.on("submit-verify-h5", function(e) {
                    e && e.length && n.eventStore(e[0])
                }), this.checkUrl(), this.heartbeat())
            }, e.prototype.checkUrl = function() {
                var e = window.location.href,
                    t = b(e);
                t._r_d_ && t._r_c_k_ ? (this.verifyReady = !0, this.domain = t._r_d_, this.key = t._r_c_k_, this.checkCache()) : this.collector.off("submit-verify-h5")
            }, e.prototype.checkCache = function() {
                this.eventStorage.length && this.postVerify(this.eventStorage)
            }, e.prototype.heartbeat = function() {
                var e = this;
                this.heart = setInterval(function() {
                    var t = {
                            event: "simulator_test__",
                            local_time_ms: Date.now()
                        },
                        n = e.collector.configManager.get(),
                        o = n.header,
                        i = {
                            events: [t],
                            user: n.user,
                            header: o
                        };
                    e.eventStore(i)
                }, 6e4)
            }, e.prototype.eventStore = function(e) {
                this.cleanStatus || (this.verifyReady ? this.postVerify(e) : this.eventStorage.push(e))
            }, e.prototype.cleanVerify = function() {
                this.cleanStatus = !0, this.eventStorage = [], clearInterval(this.heart)
            }, e.prototype.postVerify = function(e) {
                var t = this;
                try {
                    var n = JSON.parse(JSON.stringify(e));
                    c(e) ? n.forEach(function(e) {
                        t.fetchLog(e)
                    }) : this.fetchLog(n)
                } catch (e) {
                    console.log("web verify post error ~")
                }
            }, e.prototype.fetchLog = function(e) {
                this.collector.requestManager.useRequest({
                    url: "".concat(this.domain, "/simulator/h5/log?connection_key=").concat(this.key),
                    data: e,
                    timeout: 2e4
                })
            }, e.prototype.leave = function() {
                var e = this;
                document.addEventListener("visibilitychange", function() {
                    "hidden" === document.visibilityState && e.cleanVerify()
                }), g(function() {
                    e.cleanVerify()
                })
            }, e
        }(),
        Tt = A(function(e, t) {
            e.exports = function e(t, n, o) {
                function i(a, s) {
                    if (!n[a]) {
                        if (!t[a]) {
                            var c = D;
                            if (!s && c) return c(a, !0);
                            if (r) return r(a, !0);
                            var l = new Error("Cannot find module '" + a + "'");
                            throw l.code = "MODULE_NOT_FOUND", l
                        }
                        var u = n[a] = {
                            exports: {}
                        };
                        t[a][0].call(u.exports, function(e) {
                            var n = t[a][1][e];
                            return i(n || e)
                        }, u, u.exports, e, t, n, o)
                    }
                    return n[a].exports
                }
                for (var r = D, a = 0; a < o.length; a++) i(o[a]);
                return i
            }({
                1: [function(e, t, n) {
                    (function(e) {
                        var n, o, i = e.MutationObserver || e.WebKitMutationObserver;
                        if (i) {
                            var r = 0,
                                a = new i(u),
                                s = e.document.createTextNode("");
                            a.observe(s, {
                                characterData: !0
                            }), n = function() {
                                s.data = r = ++r % 2
                            }
                        } else if (e.setImmediate || void 0 === e.MessageChannel) n = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
                            var t = e.document.createElement("script");
                            t.onreadystatechange = function() {
                                u(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null
                            }, e.document.documentElement.appendChild(t)
                        } : function() {
                            setTimeout(u, 0)
                        };
                        else {
                            var c = new e.MessageChannel;
                            c.port1.onmessage = u, n = function() {
                                c.port2.postMessage(0)
                            }
                        }
                        var l = [];

                        function u() {
                            var e, t;
                            o = !0;
                            for (var n = l.length; n;) {
                                for (t = l, l = [], e = -1; ++e < n;) t[e]();
                                n = l.length
                            }
                            o = !1
                        }
                        t.exports = function(e) {
                            1 !== l.push(e) || o || n()
                        }
                    }).call(this, void 0 !== T ? T : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {}],
                2: [function(e, t, n) {
                    var o = e(1);

                    function i() {}
                    var r = {},
                        a = ["REJECTED"],
                        s = ["FULFILLED"],
                        c = ["PENDING"];

                    function l(e) {
                        if ("function" != typeof e) throw new TypeError("resolver must be a function");
                        this.state = c, this.queue = [], this.outcome = void 0, e !== i && p(this, e)
                    }

                    function u(e, t, n) {
                        this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected)
                    }

                    function h(e, t, n) {
                        o(function() {
                            var o;
                            try {
                                o = t(n)
                            } catch (t) {
                                return r.reject(e, t)
                            }
                            o === e ? r.reject(e, new TypeError("Cannot resolve promise with itself")) : r.resolve(e, o)
                        })
                    }

                    function f(e) {
                        var t = e && e.then;
                        if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function() {
                            t.apply(e, arguments)
                        }
                    }

                    function p(e, t) {
                        var n = !1;

                        function o(t) {
                            n || (n = !0, r.reject(e, t))
                        }

                        function i(t) {
                            n || (n = !0, r.resolve(e, t))
                        }
                        var a = d(function() {
                            t(i, o)
                        });
                        "error" === a.status && o(a.value)
                    }

                    function d(e, t) {
                        var n = {};
                        try {
                            n.value = e(t), n.status = "success"
                        } catch (e) {
                            n.status = "error", n.value = e
                        }
                        return n
                    }
                    t.exports = l, l.prototype.catch = function(e) {
                        return this.then(null, e)
                    }, l.prototype.then = function(e, t) {
                        if ("function" != typeof e && this.state === s || "function" != typeof t && this.state === a) return this;
                        var n = new this.constructor(i);
                        if (this.state !== c) {
                            var o = this.state === s ? e : t;
                            h(n, o, this.outcome)
                        } else this.queue.push(new u(n, e, t));
                        return n
                    }, u.prototype.callFulfilled = function(e) {
                        r.resolve(this.promise, e)
                    }, u.prototype.otherCallFulfilled = function(e) {
                        h(this.promise, this.onFulfilled, e)
                    }, u.prototype.callRejected = function(e) {
                        r.reject(this.promise, e)
                    }, u.prototype.otherCallRejected = function(e) {
                        h(this.promise, this.onRejected, e)
                    }, r.resolve = function(e, t) {
                        var n = d(f, t);
                        if ("error" === n.status) return r.reject(e, n.value);
                        var o = n.value;
                        if (o) p(e, o);
                        else {
                            e.state = s, e.outcome = t;
                            for (var i = -1, a = e.queue.length; ++i < a;) e.queue[i].callFulfilled(t)
                        }
                        return e
                    }, r.reject = function(e, t) {
                        e.state = a, e.outcome = t;
                        for (var n = -1, o = e.queue.length; ++n < o;) e.queue[n].callRejected(t);
                        return e
                    }, l.resolve = function(e) {
                        return e instanceof this ? e : r.resolve(new this(i), e)
                    }, l.reject = function(e) {
                        var t = new this(i);
                        return r.reject(t, e)
                    }, l.all = function(e) {
                        var t = this;
                        if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                        var n = e.length,
                            o = !1;
                        if (!n) return this.resolve([]);
                        for (var a = new Array(n), s = 0, c = -1, l = new this(i); ++c < n;) u(e[c], c);
                        return l;

                        function u(e, i) {
                            t.resolve(e).then(function(e) {
                                a[i] = e, ++s !== n || o || (o = !0, r.resolve(l, a))
                            }, function(e) {
                                o || (o = !0, r.reject(l, e))
                            })
                        }
                    }, l.race = function(e) {
                        var t = this;
                        if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                        var n = e.length,
                            o = !1;
                        if (!n) return this.resolve([]);
                        for (var a, s = -1, c = new this(i); ++s < n;) a = e[s], t.resolve(a).then(function(e) {
                            o || (o = !0, r.resolve(c, e))
                        }, function(e) {
                            o || (o = !0, r.reject(c, e))
                        });
                        return c
                    }
                }, {
                    1: 1
                }],
                3: [function(e, t, n) {
                    (function(t) {
                        "function" != typeof t.Promise && (t.Promise = e(2))
                    }).call(this, void 0 !== T ? T : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {
                    2: 2
                }],
                4: [function(e, t, n) {
                    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        i = function() {
                            try {
                                if ("undefined" != typeof indexedDB) return indexedDB;
                                if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
                                if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
                                if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                                if ("undefined" != typeof msIndexedDB) return msIndexedDB
                            } catch (e) {
                                return
                            }
                        }();

                    function r(e, t) {
                        e = e || [], t = t || {};
                        try {
                            return new Blob(e, t)
                        } catch (r) {
                            if ("TypeError" !== r.name) throw r;
                            for (var n = "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder, o = new n, i = 0; i < e.length; i += 1) o.append(e[i]);
                            return o.getBlob(t.type)
                        }
                    }
                    "undefined" == typeof Promise && e(3);
                    var a = Promise;

                    function s(e, t) {
                        t && e.then(function(e) {
                            t(null, e)
                        }, function(e) {
                            t(e)
                        })
                    }

                    function c(e, t, n) {
                        "function" == typeof t && e.then(t), "function" == typeof n && e.catch(n)
                    }

                    function l(e) {
                        return "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e)), e
                    }

                    function u() {
                        if (arguments.length && "function" == typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1]
                    }
                    var h = "local-forage-detect-blob-support",
                        f = void 0,
                        p = {},
                        d = Object.prototype.toString,
                        g = "readonly",
                        v = "readwrite";

                    function m(e) {
                        return "boolean" == typeof f ? a.resolve(f) : function(e) {
                            return new a(function(t) {
                                var n = e.transaction(h, v),
                                    o = r([""]);
                                n.objectStore(h).put(o, "key"), n.onabort = function(e) {
                                    e.preventDefault(), e.stopPropagation(), t(!1)
                                }, n.oncomplete = function() {
                                    var e = navigator.userAgent.match(/Chrome\/(\d+)/),
                                        n = navigator.userAgent.match(/Edge\//);
                                    t(n || !e || parseInt(e[1], 10) >= 43)
                                }
                            }).catch(function() {
                                return !1
                            })
                        }(e).then(function(e) {
                            return f = e
                        })
                    }

                    function y(e) {
                        var t = p[e.name],
                            n = {};
                        n.promise = new a(function(e, t) {
                            n.resolve = e, n.reject = t
                        }), t.deferredOperations.push(n), t.dbReady ? t.dbReady = t.dbReady.then(function() {
                            return n.promise
                        }) : t.dbReady = n.promise
                    }

                    function _(e) {
                        var t = p[e.name],
                            n = t.deferredOperations.pop();
                        if (n) return n.resolve(), n.promise
                    }

                    function b(e, t) {
                        var n = p[e.name],
                            o = n.deferredOperations.pop();
                        if (o) return o.reject(t), o.promise
                    }

                    function E(e, t) {
                        return new a(function(n, o) {
                            if (p[e.name] = p[e.name] || {
                                    forages: [],
                                    db: null,
                                    dbReady: null,
                                    deferredOperations: []
                                }, e.db) {
                                if (!t) return n(e.db);
                                y(e), e.db.close()
                            }
                            var r = [e.name];
                            t && r.push(e.version);
                            var a = i.open.apply(i, r);
                            t && (a.onupgradeneeded = function(t) {
                                var n = a.result;
                                try {
                                    n.createObjectStore(e.storeName), t.oldVersion <= 1 && n.createObjectStore(h)
                                } catch (n) {
                                    if ("ConstraintError" !== n.name) throw n;
                                    console.warn('The database "' + e.name + '" has been upgraded from version ' + t.oldVersion + " to version " + t.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                                }
                            }), a.onerror = function(e) {
                                e.preventDefault(), o(a.error)
                            }, a.onsuccess = function() {
                                var t = a.result;
                                t.onversionchange = function(e) {
                                    e.target.close()
                                }, n(t), _(e)
                            }
                        })
                    }

                    function S(e) {
                        return E(e, !1)
                    }

                    function w(e) {
                        return E(e, !0)
                    }

                    function k(e, t) {
                        if (!e.db) return !0;
                        var n = !e.db.objectStoreNames.contains(e.storeName),
                            o = e.version < e.db.version,
                            i = e.version > e.db.version;
                        if (o && (e.version !== t && console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), i || n) {
                            if (n) {
                                var r = e.db.version + 1;
                                r > e.version && (e.version = r)
                            }
                            return !0
                        }
                        return !1
                    }

                    function T(e) {
                        var t = function(e) {
                            for (var t = e.length, n = new ArrayBuffer(t), o = new Uint8Array(n), i = 0; i < t; i++) o[i] = e.charCodeAt(i);
                            return n
                        }(atob(e.data));
                        return r([t], {
                            type: e.type
                        })
                    }

                    function D(e) {
                        return e && e.__local_forage_encoded_blob
                    }

                    function A(e) {
                        var t = this,
                            n = t._initReady().then(function() {
                                var e = p[t._dbInfo.name];
                                if (e && e.dbReady) return e.dbReady
                            });
                        return c(n, e, e), n
                    }

                    function O(e, t, n, o) {
                        void 0 === o && (o = 1);
                        try {
                            var i = e.db.transaction(e.storeName, t);
                            n(null, i)
                        } catch (i) {
                            if (o > 0 && (!e.db || "InvalidStateError" === i.name || "NotFoundError" === i.name)) return a.resolve().then(function() {
                                if (!e.db || "NotFoundError" === i.name && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) return e.db && (e.version = e.db.version + 1), w(e)
                            }).then(function() {
                                return function(e) {
                                    y(e);
                                    for (var t = p[e.name], n = t.forages, o = 0; o < n.length; o++) {
                                        var i = n[o];
                                        i._dbInfo.db && (i._dbInfo.db.close(), i._dbInfo.db = null)
                                    }
                                    return e.db = null, S(e).then(function(t) {
                                        return e.db = t, k(e) ? w(e) : t
                                    }).then(function(o) {
                                        e.db = t.db = o;
                                        for (var i = 0; i < n.length; i++) n[i]._dbInfo.db = o
                                    }).catch(function(t) {
                                        throw b(e, t), t
                                    })
                                }(e).then(function() {
                                    O(e, t, n, o - 1)
                                })
                            }).catch(n);
                            n(i)
                        }
                    }
                    var I = {
                            _driver: "asyncStorage",
                            _initStorage: function(e) {
                                var t = this,
                                    n = {
                                        db: null
                                    };
                                if (e)
                                    for (var o in e) n[o] = e[o];
                                var i = p[n.name];
                                i || (i = {
                                    forages: [],
                                    db: null,
                                    dbReady: null,
                                    deferredOperations: []
                                }, p[n.name] = i), i.forages.push(t), t._initReady || (t._initReady = t.ready, t.ready = A);
                                var r = [];

                                function s() {
                                    return a.resolve()
                                }
                                for (var c = 0; c < i.forages.length; c++) {
                                    var l = i.forages[c];
                                    l !== t && r.push(l._initReady().catch(s))
                                }
                                var u = i.forages.slice(0);
                                return a.all(r).then(function() {
                                    return n.db = i.db, S(n)
                                }).then(function(e) {
                                    return n.db = e, k(n, t._defaultConfig.version) ? w(n) : e
                                }).then(function(e) {
                                    n.db = i.db = e, t._dbInfo = n;
                                    for (var o = 0; o < u.length; o++) {
                                        var r = u[o];
                                        r !== t && (r._dbInfo.db = n.db, r._dbInfo.version = n.version)
                                    }
                                })
                            },
                            _support: function() {
                                try {
                                    if (!i || !i.open) return !1;
                                    var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                                        t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                                    return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                                } catch (e) {
                                    return !1
                                }
                            }(),
                            iterate: function(e, t) {
                                var n = this,
                                    o = new a(function(t, o) {
                                        n.ready().then(function() {
                                            O(n._dbInfo, g, function(i, r) {
                                                if (i) return o(i);
                                                try {
                                                    var a = r.objectStore(n._dbInfo.storeName),
                                                        s = a.openCursor(),
                                                        c = 1;
                                                    s.onsuccess = function() {
                                                        var n = s.result;
                                                        if (n) {
                                                            var o = n.value;
                                                            D(o) && (o = T(o));
                                                            var i = e(o, n.key, c++);
                                                            void 0 !== i ? t(i) : n.continue()
                                                        } else t()
                                                    }, s.onerror = function() {
                                                        o(s.error)
                                                    }
                                                } catch (e) {
                                                    o(e)
                                                }
                                            })
                                        }).catch(o)
                                    });
                                return s(o, t), o
                            },
                            getItem: function(e, t) {
                                var n = this;
                                e = l(e);
                                var o = new a(function(t, o) {
                                    n.ready().then(function() {
                                        O(n._dbInfo, g, function(i, r) {
                                            if (i) return o(i);
                                            try {
                                                var a = r.objectStore(n._dbInfo.storeName),
                                                    s = a.get(e);
                                                s.onsuccess = function() {
                                                    var e = s.result;
                                                    void 0 === e && (e = null), D(e) && (e = T(e)), t(e)
                                                }, s.onerror = function() {
                                                    o(s.error)
                                                }
                                            } catch (e) {
                                                o(e)
                                            }
                                        })
                                    }).catch(o)
                                });
                                return s(o, t), o
                            },
                            setItem: function(e, t, n) {
                                var o = this;
                                e = l(e);
                                var i = new a(function(n, i) {
                                    var r;
                                    o.ready().then(function() {
                                        return r = o._dbInfo, "[object Blob]" === d.call(t) ? m(r.db).then(function(e) {
                                            return e ? t : (n = t, new a(function(e, t) {
                                                var o = new FileReader;
                                                o.onerror = t, o.onloadend = function(t) {
                                                    var o = btoa(t.target.result || "");
                                                    e({
                                                        __local_forage_encoded_blob: !0,
                                                        data: o,
                                                        type: n.type
                                                    })
                                                }, o.readAsBinaryString(n)
                                            }));
                                            var n
                                        }) : t
                                    }).then(function(t) {
                                        O(o._dbInfo, v, function(r, a) {
                                            if (r) return i(r);
                                            try {
                                                var s = a.objectStore(o._dbInfo.storeName);
                                                null === t && (t = void 0);
                                                var c = s.put(t, e);
                                                a.oncomplete = function() {
                                                    void 0 === t && (t = null), n(t)
                                                }, a.onabort = a.onerror = function() {
                                                    try {
                                                        var e = c.error ? c.error : c.transaction.error;
                                                        i(e)
                                                    } catch (e) {
                                                        i(e)
                                                    }
                                                }
                                            } catch (e) {
                                                i(e)
                                            }
                                        })
                                    }).catch(i)
                                });
                                return s(i, n), i
                            },
                            removeItem: function(e, t) {
                                var n = this;
                                e = l(e);
                                var o = new a(function(t, o) {
                                    n.ready().then(function() {
                                        O(n._dbInfo, v, function(i, r) {
                                            if (i) return o(i);
                                            try {
                                                var a = r.objectStore(n._dbInfo.storeName),
                                                    s = a.delete(e);
                                                r.oncomplete = function() {
                                                    t()
                                                }, r.onerror = function() {
                                                    o(s.error)
                                                }, r.onabort = function() {
                                                    try {
                                                        var e = s.error ? s.error : s.transaction.error;
                                                        o(e)
                                                    } catch (e) {
                                                        o(e)
                                                    }
                                                }
                                            } catch (e) {
                                                o(e)
                                            }
                                        })
                                    }).catch(o)
                                });
                                return s(o, t), o
                            },
                            clear: function(e) {
                                var t = this,
                                    n = new a(function(e, n) {
                                        t.ready().then(function() {
                                            O(t._dbInfo, v, function(o, i) {
                                                if (o) return n(o);
                                                try {
                                                    var r = i.objectStore(t._dbInfo.storeName),
                                                        a = r.clear();
                                                    i.oncomplete = function() {
                                                        e()
                                                    }, i.onabort = i.onerror = function() {
                                                        try {
                                                            var e = a.error ? a.error : a.transaction.error;
                                                            n(e)
                                                        } catch (e) {
                                                            n(e)
                                                        }
                                                    }
                                                } catch (e) {
                                                    n(e)
                                                }
                                            })
                                        }).catch(n)
                                    });
                                return s(n, e), n
                            },
                            length: function(e) {
                                var t = this,
                                    n = new a(function(e, n) {
                                        t.ready().then(function() {
                                            O(t._dbInfo, g, function(o, i) {
                                                if (o) return n(o);
                                                try {
                                                    var r = i.objectStore(t._dbInfo.storeName),
                                                        a = r.count();
                                                    a.onsuccess = function() {
                                                        e(a.result)
                                                    }, a.onerror = function() {
                                                        n(a.error)
                                                    }
                                                } catch (e) {
                                                    n(e)
                                                }
                                            })
                                        }).catch(n)
                                    });
                                return s(n, e), n
                            },
                            key: function(e, t) {
                                var n = this,
                                    o = new a(function(t, o) {
                                        e < 0 ? t(null) : n.ready().then(function() {
                                            O(n._dbInfo, g, function(i, r) {
                                                if (i) return o(i);
                                                try {
                                                    var a = r.objectStore(n._dbInfo.storeName),
                                                        s = !1,
                                                        c = (a.openKeyCursor || a.openCursor).call(a);
                                                    c.onsuccess = function() {
                                                        var n = c.result;
                                                        n ? 0 === e ? t(n.key) : s ? t(n.key) : (s = !0, n.advance(e)) : t(null)
                                                    }, c.onerror = function() {
                                                        o(c.error)
                                                    }
                                                } catch (e) {
                                                    o(e)
                                                }
                                            })
                                        }).catch(o)
                                    });
                                return s(o, t), o
                            },
                            keys: function(e) {
                                var t = this,
                                    n = new a(function(e, n) {
                                        t.ready().then(function() {
                                            O(t._dbInfo, g, function(o, i) {
                                                if (o) return n(o);
                                                try {
                                                    var r = i.objectStore(t._dbInfo.storeName),
                                                        a = (r.openKeyCursor || r.openCursor).call(r),
                                                        s = [];
                                                    a.onsuccess = function() {
                                                        var t = a.result;
                                                        t ? (s.push(t.key), t.continue()) : e(s)
                                                    }, a.onerror = function() {
                                                        n(a.error)
                                                    }
                                                } catch (e) {
                                                    n(e)
                                                }
                                            })
                                        }).catch(n)
                                    });
                                return s(n, e), n
                            },
                            dropInstance: function(e, t) {
                                t = u.apply(this, arguments);
                                var n, o = this.config();
                                if ((e = "function" != typeof e && e || {}).name || (e.name = e.name || o.name, e.storeName = e.storeName || o.storeName), e.name) {
                                    var r = e.name === o.name && this._dbInfo.db,
                                        c = r ? a.resolve(this._dbInfo.db) : S(e).then(function(t) {
                                            var n = p[e.name],
                                                o = n.forages;
                                            n.db = t;
                                            for (var i = 0; i < o.length; i++) o[i]._dbInfo.db = t;
                                            return t
                                        });
                                    n = e.storeName ? c.then(function(t) {
                                        if (t.objectStoreNames.contains(e.storeName)) {
                                            var n = t.version + 1;
                                            y(e);
                                            var o = p[e.name],
                                                r = o.forages;
                                            t.close();
                                            for (var s = 0; s < r.length; s++) {
                                                var c = r[s];
                                                c._dbInfo.db = null, c._dbInfo.version = n
                                            }
                                            var l = new a(function(t, o) {
                                                var r = i.open(e.name, n);
                                                r.onerror = function(e) {
                                                    var t = r.result;
                                                    t.close(), o(e)
                                                }, r.onupgradeneeded = function() {
                                                    var t = r.result;
                                                    t.deleteObjectStore(e.storeName)
                                                }, r.onsuccess = function() {
                                                    var e = r.result;
                                                    e.close(), t(e)
                                                }
                                            });
                                            return l.then(function(e) {
                                                o.db = e;
                                                for (var t = 0; t < r.length; t++) {
                                                    var n = r[t];
                                                    n._dbInfo.db = e, _(n._dbInfo)
                                                }
                                            }).catch(function(t) {
                                                throw (b(e, t) || a.resolve()).catch(function() {}), t
                                            })
                                        }
                                    }) : c.then(function(t) {
                                        y(e);
                                        var n = p[e.name],
                                            o = n.forages;
                                        t.close();
                                        for (var r = 0; r < o.length; r++) {
                                            var s = o[r];
                                            s._dbInfo.db = null
                                        }
                                        var c = new a(function(t, n) {
                                            var o = i.deleteDatabase(e.name);
                                            o.onerror = function() {
                                                var e = o.result;
                                                e && e.close(), n(o.error)
                                            }, o.onblocked = function() {
                                                console.warn('dropInstance blocked for database "' + e.name + '" until all open connections are closed')
                                            }, o.onsuccess = function() {
                                                var e = o.result;
                                                e && e.close(), t(e)
                                            }
                                        });
                                        return c.then(function(e) {
                                            n.db = e;
                                            for (var t = 0; t < o.length; t++) {
                                                var i = o[t];
                                                _(i._dbInfo)
                                            }
                                        }).catch(function(t) {
                                            throw (b(e, t) || a.resolve()).catch(function() {}), t
                                        })
                                    })
                                } else n = a.reject("Invalid arguments");
                                return s(n, t), n
                            }
                        },
                        R = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        M = "~~local_forage_type~",
                        x = /^~~local_forage_type~([^~]+)~/,
                        C = "__lfsc__:",
                        G = C.length,
                        B = "arbf",
                        N = "blob",
                        U = "si08",
                        L = "ui08",
                        P = "uic8",
                        z = "si16",
                        j = "si32",
                        V = "ur16",
                        K = "ui32",
                        q = "fl32",
                        H = "fl64",
                        J = G + B.length,
                        F = Object.prototype.toString;

                    function W(e) {
                        var t, n, o, i, r, a = .75 * e.length,
                            s = e.length,
                            c = 0;
                        "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                        var l = new ArrayBuffer(a),
                            u = new Uint8Array(l);
                        for (t = 0; t < s; t += 4) n = R.indexOf(e[t]), o = R.indexOf(e[t + 1]), i = R.indexOf(e[t + 2]), r = R.indexOf(e[t + 3]), u[c++] = n << 2 | o >> 4, u[c++] = (15 & o) << 4 | i >> 2, u[c++] = (3 & i) << 6 | 63 & r;
                        return l
                    }

                    function X(e) {
                        var t, n = new Uint8Array(e),
                            o = "";
                        for (t = 0; t < n.length; t += 3) o += R[n[t] >> 2], o += R[(3 & n[t]) << 4 | n[t + 1] >> 4], o += R[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], o += R[63 & n[t + 2]];
                        return n.length % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : n.length % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o
                    }
                    var $ = {
                        serialize: function(e, t) {
                            var n = "";
                            if (e && (n = F.call(e)), e && ("[object ArrayBuffer]" === n || e.buffer && "[object ArrayBuffer]" === F.call(e.buffer))) {
                                var o, i = C;
                                e instanceof ArrayBuffer ? (o = e, i += B) : (o = e.buffer, "[object Int8Array]" === n ? i += U : "[object Uint8Array]" === n ? i += L : "[object Uint8ClampedArray]" === n ? i += P : "[object Int16Array]" === n ? i += z : "[object Uint16Array]" === n ? i += V : "[object Int32Array]" === n ? i += j : "[object Uint32Array]" === n ? i += K : "[object Float32Array]" === n ? i += q : "[object Float64Array]" === n ? i += H : t(new Error("Failed to get type for BinaryArray"))), t(i + X(o))
                            } else if ("[object Blob]" === n) {
                                var r = new FileReader;
                                r.onload = function() {
                                    var n = M + e.type + "~" + X(this.result);
                                    t(C + N + n)
                                }, r.readAsArrayBuffer(e)
                            } else try {
                                t(JSON.stringify(e))
                            } catch (n) {
                                console.error("Couldn't convert value into a JSON string: ", e), t(null, n)
                            }
                        },
                        deserialize: function(e) {
                            if (e.substring(0, G) !== C) return JSON.parse(e);
                            var t, n = e.substring(J),
                                o = e.substring(G, J);
                            if (o === N && x.test(n)) {
                                var i = n.match(x);
                                t = i[1], n = n.substring(i[0].length)
                            }
                            var a = W(n);
                            switch (o) {
                                case B:
                                    return a;
                                case N:
                                    return r([a], {
                                        type: t
                                    });
                                case U:
                                    return new Int8Array(a);
                                case L:
                                    return new Uint8Array(a);
                                case P:
                                    return new Uint8ClampedArray(a);
                                case z:
                                    return new Int16Array(a);
                                case V:
                                    return new Uint16Array(a);
                                case j:
                                    return new Int32Array(a);
                                case K:
                                    return new Uint32Array(a);
                                case q:
                                    return new Float32Array(a);
                                case H:
                                    return new Float64Array(a);
                                default:
                                    throw new Error("Unkown type: " + o)
                            }
                        },
                        stringToBuffer: W,
                        bufferToString: X
                    };

                    function Q(e, t, n, o) {
                        e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, o)
                    }

                    function Y(e, t, n, o, i, r) {
                        e.executeSql(n, o, i, function(e, a) {
                            a.code === a.SYNTAX_ERR ? e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], function(e, s) {
                                s.rows.length ? r(e, a) : Q(e, t, function() {
                                    e.executeSql(n, o, i, r)
                                }, r)
                            }, r) : r(e, a)
                        }, r)
                    }
                    var Z = {
                        _driver: "webSQLStorage",
                        _initStorage: function(e) {
                            var t = this,
                                n = {
                                    db: null
                                };
                            if (e)
                                for (var o in e) n[o] = "string" != typeof e[o] ? e[o].toString() : e[o];
                            var i = new a(function(e, o) {
                                try {
                                    n.db = openDatabase(n.name, String(n.version), n.description, n.size)
                                } catch (e) {
                                    return o(e)
                                }
                                n.db.transaction(function(i) {
                                    Q(i, n, function() {
                                        t._dbInfo = n, e()
                                    }, function(e, t) {
                                        o(t)
                                    })
                                }, o)
                            });
                            return n.serializer = $, i
                        },
                        _support: "function" == typeof openDatabase,
                        iterate: function(e, t) {
                            var n = this,
                                o = new a(function(t, o) {
                                    n.ready().then(function() {
                                        var i = n._dbInfo;
                                        i.db.transaction(function(n) {
                                            Y(n, i, "SELECT * FROM " + i.storeName, [], function(n, o) {
                                                for (var r = o.rows, a = r.length, s = 0; s < a; s++) {
                                                    var c = r.item(s),
                                                        l = c.value;
                                                    if (l && (l = i.serializer.deserialize(l)), void 0 !== (l = e(l, c.key, s + 1))) return void t(l)
                                                }
                                                t()
                                            }, function(e, t) {
                                                o(t)
                                            })
                                        })
                                    }).catch(o)
                                });
                            return s(o, t), o
                        },
                        getItem: function(e, t) {
                            var n = this;
                            e = l(e);
                            var o = new a(function(t, o) {
                                n.ready().then(function() {
                                    var i = n._dbInfo;
                                    i.db.transaction(function(n) {
                                        Y(n, i, "SELECT * FROM " + i.storeName + " WHERE key = ? LIMIT 1", [e], function(e, n) {
                                            var o = n.rows.length ? n.rows.item(0).value : null;
                                            o && (o = i.serializer.deserialize(o)), t(o)
                                        }, function(e, t) {
                                            o(t)
                                        })
                                    })
                                }).catch(o)
                            });
                            return s(o, t), o
                        },
                        setItem: function(e, t, n) {
                            return function e(t, n, o, i) {
                                var r = this;
                                t = l(t);
                                var c = new a(function(a, s) {
                                    r.ready().then(function() {
                                        void 0 === n && (n = null);
                                        var c = n,
                                            l = r._dbInfo;
                                        l.serializer.serialize(n, function(n, u) {
                                            u ? s(u) : l.db.transaction(function(e) {
                                                Y(e, l, "INSERT OR REPLACE INTO " + l.storeName + " (key, value) VALUES (?, ?)", [t, n], function() {
                                                    a(c)
                                                }, function(e, t) {
                                                    s(t)
                                                })
                                            }, function(n) {
                                                if (n.code === n.QUOTA_ERR) {
                                                    if (i > 0) return void a(e.apply(r, [t, c, o, i - 1]));
                                                    s(n)
                                                }
                                            })
                                        })
                                    }).catch(s)
                                });
                                return s(c, o), c
                            }.apply(this, [e, t, n, 1])
                        },
                        removeItem: function(e, t) {
                            var n = this;
                            e = l(e);
                            var o = new a(function(t, o) {
                                n.ready().then(function() {
                                    var i = n._dbInfo;
                                    i.db.transaction(function(n) {
                                        Y(n, i, "DELETE FROM " + i.storeName + " WHERE key = ?", [e], function() {
                                            t()
                                        }, function(e, t) {
                                            o(t)
                                        })
                                    })
                                }).catch(o)
                            });
                            return s(o, t), o
                        },
                        clear: function(e) {
                            var t = this,
                                n = new a(function(e, n) {
                                    t.ready().then(function() {
                                        var o = t._dbInfo;
                                        o.db.transaction(function(t) {
                                            Y(t, o, "DELETE FROM " + o.storeName, [], function() {
                                                e()
                                            }, function(e, t) {
                                                n(t)
                                            })
                                        })
                                    }).catch(n)
                                });
                            return s(n, e), n
                        },
                        length: function(e) {
                            var t = this,
                                n = new a(function(e, n) {
                                    t.ready().then(function() {
                                        var o = t._dbInfo;
                                        o.db.transaction(function(t) {
                                            Y(t, o, "SELECT COUNT(key) as c FROM " + o.storeName, [], function(t, n) {
                                                var o = n.rows.item(0).c;
                                                e(o)
                                            }, function(e, t) {
                                                n(t)
                                            })
                                        })
                                    }).catch(n)
                                });
                            return s(n, e), n
                        },
                        key: function(e, t) {
                            var n = this,
                                o = new a(function(t, o) {
                                    n.ready().then(function() {
                                        var i = n._dbInfo;
                                        i.db.transaction(function(n) {
                                            Y(n, i, "SELECT key FROM " + i.storeName + " WHERE id = ? LIMIT 1", [e + 1], function(e, n) {
                                                var o = n.rows.length ? n.rows.item(0).key : null;
                                                t(o)
                                            }, function(e, t) {
                                                o(t)
                                            })
                                        })
                                    }).catch(o)
                                });
                            return s(o, t), o
                        },
                        keys: function(e) {
                            var t = this,
                                n = new a(function(e, n) {
                                    t.ready().then(function() {
                                        var o = t._dbInfo;
                                        o.db.transaction(function(t) {
                                            Y(t, o, "SELECT key FROM " + o.storeName, [], function(t, n) {
                                                for (var o = [], i = 0; i < n.rows.length; i++) o.push(n.rows.item(i).key);
                                                e(o)
                                            }, function(e, t) {
                                                n(t)
                                            })
                                        })
                                    }).catch(n)
                                });
                            return s(n, e), n
                        },
                        dropInstance: function(e, t) {
                            t = u.apply(this, arguments);
                            var n = this.config();
                            (e = "function" != typeof e && e || {}).name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
                            var o, i = this;
                            return s(o = e.name ? new a(function(t) {
                                var o;
                                o = e.name === n.name ? i._dbInfo.db : openDatabase(e.name, "", "", 0), e.storeName ? t({
                                    db: o,
                                    storeNames: [e.storeName]
                                }) : t(function(e) {
                                    return new a(function(t, n) {
                                        e.transaction(function(o) {
                                            o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(n, o) {
                                                for (var i = [], r = 0; r < o.rows.length; r++) i.push(o.rows.item(r).name);
                                                t({
                                                    db: e,
                                                    storeNames: i
                                                })
                                            }, function(e, t) {
                                                n(t)
                                            })
                                        }, function(e) {
                                            n(e)
                                        })
                                    })
                                }(o))
                            }).then(function(e) {
                                return new a(function(t, n) {
                                    e.db.transaction(function(o) {
                                        function i(e) {
                                            return new a(function(t, n) {
                                                o.executeSql("DROP TABLE IF EXISTS " + e, [], function() {
                                                    t()
                                                }, function(e, t) {
                                                    n(t)
                                                })
                                            })
                                        }
                                        for (var r = [], s = 0, c = e.storeNames.length; s < c; s++) r.push(i(e.storeNames[s]));
                                        a.all(r).then(function() {
                                            t()
                                        }).catch(function(e) {
                                            n(e)
                                        })
                                    }, function(e) {
                                        n(e)
                                    })
                                })
                            }) : a.reject("Invalid arguments"), t), o
                        }
                    };

                    function ee(e, t) {
                        var n = "";
                        return e.name && (n = e.name + "/"), e.storeName !== t.storeName && (n += e.storeName + "/"), n
                    }

                    function te() {
                        return ! function() {
                            try {
                                return localStorage.setItem("_localforage_support_test", !0), localStorage.removeItem("_localforage_support_test"), !1
                            } catch (e) {
                                return !0
                            }
                        }() || localStorage.length > 0
                    }
                    var ne = {
                            _driver: "localStorageWrapper",
                            _initStorage: function(e) {
                                var t = {};
                                if (e)
                                    for (var n in e) t[n] = e[n];
                                return t.keyPrefix = ee(e, this._defaultConfig), te() ? (this._dbInfo = t, t.serializer = $, a.resolve()) : a.reject()
                            },
                            _support: function() {
                                try {
                                    return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem
                                } catch (e) {
                                    return !1
                                }
                            }(),
                            iterate: function(e, t) {
                                var n = this,
                                    o = n.ready().then(function() {
                                        for (var t = n._dbInfo, o = t.keyPrefix, i = o.length, r = localStorage.length, a = 1, s = 0; s < r; s++) {
                                            var c = localStorage.key(s);
                                            if (0 === c.indexOf(o)) {
                                                var l = localStorage.getItem(c);
                                                if (l && (l = t.serializer.deserialize(l)), void 0 !== (l = e(l, c.substring(i), a++))) return l
                                            }
                                        }
                                    });
                                return s(o, t), o
                            },
                            getItem: function(e, t) {
                                var n = this;
                                e = l(e);
                                var o = n.ready().then(function() {
                                    var t = n._dbInfo,
                                        o = localStorage.getItem(t.keyPrefix + e);
                                    return o && (o = t.serializer.deserialize(o)), o
                                });
                                return s(o, t), o
                            },
                            setItem: function(e, t, n) {
                                var o = this;
                                e = l(e);
                                var i = o.ready().then(function() {
                                    void 0 === t && (t = null);
                                    var n = t;
                                    return new a(function(i, r) {
                                        var a = o._dbInfo;
                                        a.serializer.serialize(t, function(t, o) {
                                            if (o) r(o);
                                            else try {
                                                localStorage.setItem(a.keyPrefix + e, t), i(n)
                                            } catch (e) {
                                                "QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name || r(e), r(e)
                                            }
                                        })
                                    })
                                });
                                return s(i, n), i
                            },
                            removeItem: function(e, t) {
                                var n = this;
                                e = l(e);
                                var o = n.ready().then(function() {
                                    var t = n._dbInfo;
                                    localStorage.removeItem(t.keyPrefix + e)
                                });
                                return s(o, t), o
                            },
                            clear: function(e) {
                                var t = this,
                                    n = t.ready().then(function() {
                                        for (var e = t._dbInfo.keyPrefix, n = localStorage.length - 1; n >= 0; n--) {
                                            var o = localStorage.key(n);
                                            0 === o.indexOf(e) && localStorage.removeItem(o)
                                        }
                                    });
                                return s(n, e), n
                            },
                            length: function(e) {
                                var t = this.keys().then(function(e) {
                                    return e.length
                                });
                                return s(t, e), t
                            },
                            key: function(e, t) {
                                var n = this,
                                    o = n.ready().then(function() {
                                        var t, o = n._dbInfo;
                                        try {
                                            t = localStorage.key(e)
                                        } catch (e) {
                                            t = null
                                        }
                                        return t && (t = t.substring(o.keyPrefix.length)), t
                                    });
                                return s(o, t), o
                            },
                            keys: function(e) {
                                var t = this,
                                    n = t.ready().then(function() {
                                        for (var e = t._dbInfo, n = localStorage.length, o = [], i = 0; i < n; i++) {
                                            var r = localStorage.key(i);
                                            0 === r.indexOf(e.keyPrefix) && o.push(r.substring(e.keyPrefix.length))
                                        }
                                        return o
                                    });
                                return s(n, e), n
                            },
                            dropInstance: function(e, t) {
                                if (t = u.apply(this, arguments), !(e = "function" != typeof e && e || {}).name) {
                                    var n = this.config();
                                    e.name = e.name || n.name, e.storeName = e.storeName || n.storeName
                                }
                                var o, i = this;
                                return s(o = e.name ? new a(function(t) {
                                    e.storeName ? t(ee(e, i._defaultConfig)) : t(e.name + "/")
                                }).then(function(e) {
                                    for (var t = localStorage.length - 1; t >= 0; t--) {
                                        var n = localStorage.key(t);
                                        0 === n.indexOf(e) && localStorage.removeItem(n)
                                    }
                                }) : a.reject("Invalid arguments"), t), o
                            }
                        },
                        oe = function(e, t) {
                            for (var n = e.length, o = 0; o < n;) {
                                if ((i = e[o]) === (r = t) || "number" == typeof i && "number" == typeof r && isNaN(i) && isNaN(r)) return !0;
                                o++
                            }
                            var i, r;
                            return !1
                        },
                        ie = Array.isArray || function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        },
                        re = {},
                        ae = {},
                        se = {
                            INDEXEDDB: I,
                            WEBSQL: Z,
                            LOCALSTORAGE: ne
                        },
                        ce = [se.INDEXEDDB._driver, se.WEBSQL._driver, se.LOCALSTORAGE._driver],
                        le = ["dropInstance"],
                        ue = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(le),
                        he = {
                            description: "",
                            driver: ce.slice(),
                            name: "localforage",
                            size: 4980736,
                            storeName: "keyvaluepairs",
                            version: 1
                        };

                    function fe(e, t) {
                        e[t] = function() {
                            var n = arguments;
                            return e.ready().then(function() {
                                return e[t].apply(e, n)
                            })
                        }
                    }

                    function pe() {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = arguments[e];
                            if (t)
                                for (var n in t) t.hasOwnProperty(n) && (ie(t[n]) ? arguments[0][n] = t[n].slice() : arguments[0][n] = t[n])
                        }
                        return arguments[0]
                    }
                    var de = function() {
                            function e(t) {
                                for (var n in function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e), se)
                                    if (se.hasOwnProperty(n)) {
                                        var o = se[n],
                                            i = o._driver;
                                        this[n] = i, re[i] || this.defineDriver(o)
                                    }
                                this._defaultConfig = pe({}, he), this._config = pe({}, this._defaultConfig, t), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {})
                            }
                            return e.prototype.config = function(e) {
                                if ("object" === (void 0 === e ? "undefined" : o(e))) {
                                    if (this._ready) return new Error("Can't call config() after localforage has been used.");
                                    for (var t in e) {
                                        if ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")), "version" === t && "number" != typeof e[t]) return new Error("Database version must be a number.");
                                        this._config[t] = e[t]
                                    }
                                    return !("driver" in e && e.driver) || this.setDriver(this._config.driver)
                                }
                                return "string" == typeof e ? this._config[e] : this._config
                            }, e.prototype.defineDriver = function(e, t, n) {
                                var o = new a(function(t, n) {
                                    try {
                                        var o = e._driver,
                                            i = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                        if (!e._driver) return void n(i);
                                        for (var r = ue.concat("_initStorage"), c = 0, l = r.length; c < l; c++) {
                                            var u = r[c],
                                                h = !oe(le, u);
                                            if ((h || e[u]) && "function" != typeof e[u]) return void n(i)
                                        }! function() {
                                            for (var t = function(e) {
                                                    return function() {
                                                        var t = new Error("Method " + e + " is not implemented by the current driver"),
                                                            n = a.reject(t);
                                                        return s(n, arguments[arguments.length - 1]), n
                                                    }
                                                }, n = 0, o = le.length; n < o; n++) {
                                                var i = le[n];
                                                e[i] || (e[i] = t(i))
                                            }
                                        }();
                                        var f = function(n) {
                                            re[o] && console.info("Redefining LocalForage driver: " + o), re[o] = e, ae[o] = n, t()
                                        };
                                        "_support" in e ? e._support && "function" == typeof e._support ? e._support().then(f, n) : f(!!e._support) : f(!0)
                                    } catch (e) {
                                        n(e)
                                    }
                                });
                                return c(o, t, n), o
                            }, e.prototype.driver = function() {
                                return this._driver || null
                            }, e.prototype.getDriver = function(e, t, n) {
                                var o = re[e] ? a.resolve(re[e]) : a.reject(new Error("Driver not found."));
                                return c(o, t, n), o
                            }, e.prototype.getSerializer = function(e) {
                                var t = a.resolve($);
                                return c(t, e), t
                            }, e.prototype.ready = function(e) {
                                var t = this,
                                    n = t._driverSet.then(function() {
                                        return null === t._ready && (t._ready = t._initDriver()), t._ready
                                    });
                                return c(n, e, e), n
                            }, e.prototype.setDriver = function(e, t, n) {
                                var o = this;
                                ie(e) || (e = [e]);
                                var i = this._getSupportedDrivers(e);

                                function r() {
                                    o._config.driver = o.driver()
                                }

                                function s(e) {
                                    return o._extend(e), r(), o._ready = o._initStorage(o._config), o._ready
                                }
                                var l = null !== this._driverSet ? this._driverSet.catch(function() {
                                    return a.resolve()
                                }) : a.resolve();
                                return this._driverSet = l.then(function() {
                                    var e = i[0];
                                    return o._dbInfo = null, o._ready = null, o.getDriver(e).then(function(e) {
                                        o._driver = e._driver, r(), o._wrapLibraryMethodsWithReady(), o._initDriver = function(e) {
                                            return function() {
                                                var t = 0;
                                                return function n() {
                                                    for (; t < e.length;) {
                                                        var i = e[t];
                                                        return t++, o._dbInfo = null, o._ready = null, o.getDriver(i).then(s).catch(n)
                                                    }
                                                    r();
                                                    var c = new Error("No available storage method found.");
                                                    return o._driverSet = a.reject(c), o._driverSet
                                                }()
                                            }
                                        }(i)
                                    })
                                }).catch(function() {
                                    r();
                                    var e = new Error("No available storage method found.");
                                    return o._driverSet = a.reject(e), o._driverSet
                                }), c(this._driverSet, t, n), this._driverSet
                            }, e.prototype.supports = function(e) {
                                return !!ae[e]
                            }, e.prototype._extend = function(e) {
                                pe(this, e)
                            }, e.prototype._getSupportedDrivers = function(e) {
                                for (var t = [], n = 0, o = e.length; n < o; n++) {
                                    var i = e[n];
                                    this.supports(i) && t.push(i)
                                }
                                return t
                            }, e.prototype._wrapLibraryMethodsWithReady = function() {
                                for (var e = 0, t = ue.length; e < t; e++) fe(this, ue[e])
                            }, e.prototype.createInstance = function(t) {
                                return new e(t)
                            }, e
                        }(),
                        ge = new de;
                    t.exports = ge
                }, {
                    3: 3
                }]
            }, {}, [4])(4)
        }),
        Dt = function() {
            function e(e, t) {
                return this.dbStorage = Tt.createInstance({
                    driver: [Tt.INDEXEDDB, Tt.LOCALSTORAGE],
                    name: "applog_sdk_event_store_".concat(e),
                    storeName: t
                }), this.dbStorage
            }
            return e.prototype.getItem = function(e) {
                return t(this, void 0, void 0, function() {
                    var t, o;
                    return n(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), [4, this.dbStorage.getItem(e)];
                            case 1:
                                t = n.sent(), o = t;
                                try {
                                    t && "string" == typeof t && (o = JSON.parse(t))
                                } catch (e) {}
                                return [2, o || void 0];
                            case 2:
                                return n.sent(), console.warn("db get storage error"), [3, 3];
                            case 3:
                                return [2, void 0]
                        }
                    })
                })
            }, e.prototype.setItem = function(e, t) {
                try {
                    this.dbStorage.setItem(e, t)
                } catch (e) {
                    console.warn("db set storage error")
                }
            }, e.prototype.removeItem = function(e) {
                try {
                    this.dbStorage.removeItem(e)
                } catch (e) {
                    console.warn("db remove storage error")
                }
            }, e
        }(),
        At = function() {
            function e() {
                this.errorCache = new Map, this.sleepTime = 1e3, this.maxTime = 16e3, this.minTime = 1e3, this.goodCount = 0, this.maxGoodCount = 2, this.maxSilceCount = 50, this.sendStatus = !1, this.firstTrigger = !0, this.degradeStarted = !1, this.backoff_ratio = 0, this.tempId = []
            }
            return e.prototype.apply = function(e, t) {
                var n = this;
                try {
                    if (e.destroy) return;
                    if (!t.enable_storage) return;
                    this.collect = e, this.config = t, this.storage = new Dt(t.app_id, "DEGRADE_EVENT_STORE"), this.eventUrl = this.collect.configManager.getUrl("event"), this.eventKey = "__applog_degrade_events", this.eventSleepTimeKey = "__applog_degrade_events_sleep_time", this.collect.on("http-error", function(e) {
                        n.setErrorData(e)
                    }), this.collect.on("backoff-ratio", function(e) {
                        e && 0 === e.e && (n.backoff_ratio = e.backoff_ratio || 0)
                    }), this.checkStorage()
                } catch (e) {
                    console.log("degrade init error", JSON.stringify(e))
                }
            }, e.prototype.getSleepTime = function() {
                return t(this, void 0, void 0, function() {
                    var e;
                    return n(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = this, [4, this.storage.getItem(this.eventSleepTimeKey)];
                            case 1:
                                return e.sleepTime = t.sent() || this.sleepTime, console.log(this.sleepTime), [2]
                        }
                    })
                })
            }, e.prototype.triggerDegrade = function(e) {
                return t(this, void 0, void 0, function() {
                    var t, o;
                    return n(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), console.log("degradeInfo", e), t = e.data, "degrade" === e.status ? (this.addSleep(), [2]) : (this.degradeStarted = !0, this.collect.degradeStarted = !0, [4, this.setEventStorage(t)]);
                            case 1:
                                return n.sent(), this.tryReportStoreData(), !this.firstTrigger && this.addSleep(), this.firstTrigger = !1, [3, 3];
                            case 2:
                                return o = n.sent(), console.log("trigger degrade error", JSON.stringify(o)), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.prototype.checkStorage = function() {
                return t(this, void 0, void 0, function() {
                    var e;
                    return n(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]), [4, this.storage.getItem(this.eventKey)];
                            case 1:
                                return (e = t.sent()) && e.size ? (this.degradeStarted = !0, this.collect.degradeStarted = !0, this.tryReportStoreData(), [3, 3]) : [2];
                            case 2:
                                return t.sent(), console.log("check storage error"), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.prototype.setErrorData = function(e) {
                return t(this, void 0, void 0, function() {
                    return n(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return "degrade" === e.status ? [2] : [4, this.setEventStorage(e)];
                            case 1:
                                return t.sent(), [2]
                        }
                    })
                })
            }, e.prototype.setEventStorage = function(e) {
                return t(this, void 0, void 0, function() {
                    var t, o, i;
                    return n(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), [4, this.storage.getItem(this.eventKey)];
                            case 1:
                                return (t = n.sent()) || (t = new Map), o = ae(), i = e.data, console.log("eventS", JSON.stringify(i)), t.set(o, {
                                    eventData: i,
                                    id: o
                                }), this.setDataToDB(t), [3, 3];
                            case 2:
                                return n.sent(), console.warn("set DB storage error"), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.prototype.getStoragefromDBToSlice = function() {
                return t(this, void 0, void 0, function() {
                    var e, t, i, r, a, s, c, l, u, h, f = this;
                    return n(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), [4, this.storage.getItem(this.eventKey)];
                            case 1:
                                if (e = n.sent(), console.log("eventMap", e), t = new Map, i = [], this.tempId = [], e.size <= this.maxSilceCount) t = e;
                                else try {
                                    for (r = function(e) {
                                            var t = "function" == typeof Symbol && Symbol.iterator,
                                                n = t && e[t],
                                                o = 0;
                                            if (n) return n.call(e);
                                            if (e && "number" == typeof e.length) return {
                                                next: function() {
                                                    return e && o >= e.length && (e = void 0), {
                                                        value: e && e[o++],
                                                        done: !e
                                                    }
                                                }
                                            };
                                            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                                        }(e), a = r.next(); !a.done && (s = o(a.value, 2), c = s[0], l = s[1], t.size < this.maxSilceCount); a = r.next()) t.set(c, l)
                                } catch (e) {
                                    u = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        a && !a.done && (h = r.return) && h.call(r)
                                    } finally {
                                        if (u) throw u.error
                                    }
                                }
                                return t.forEach(function(e) {
                                    i.push(e.eventData[0]), f.tempId.push(e.id)
                                }), [2, i];
                            case 2:
                                return n.sent(), [2, []];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.prototype.setDataToDB = function(e) {
                try {
                    console.log("set data ", e), this.storage.setItem(this.eventKey, e)
                } catch (t) {
                    console.log("set data to DB error", JSON.stringify(t)), this.dropEvents(e)
                }
            }, e.prototype.dropEvents = function(e) {
                try {
                    var t = this.collect.configManager.get(),
                        n = t.user,
                        o = t.header;
                    o.app_id = 1338;
                    var i = [];
                    e.forEach(function(e) {
                        var t = e.event,
                            n = e.local_time_ms;
                        i.push({
                            eventName: t,
                            eventTime: n
                        })
                    });
                    var r = {
                        events: [{
                            event: "sdk_monitor",
                            params: JSON.stringify({
                                storage_fails: i
                            }),
                            local_time_ms: Date.now()
                        }],
                        user: n,
                        header: o
                    };
                    this.collect.requestManager.useRequest({
                        url: this.eventUrl,
                        data: r,
                        timeout: 3e4,
                        type: "event"
                    })
                } catch (e) {
                    console.log("drop data error", JSON.stringify(e))
                }
            }, e.prototype.tryReportStoreData = function() {
                var e = this;
                if (!this.sendStatus) {
                    this.sendStatus = !0;
                    try {
                        this.sleepFn = setTimeout(function() {
                            return t(e, void 0, void 0, function() {
                                var e;
                                return n(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.getStoragefromDBToSlice()];
                                        case 1:
                                            return (e = t.sent()).length ? 0 !== this.backoff_ratio && this.backoff_ratio && this.random() < this.backoff_ratio ? (clearTimeout(this.sleepFn), [2]) : (this.fetchData(e), [2]) : (clearTimeout(this.sleepFn), [2])
                                    }
                                })
                            })
                        }, this.sleepTime)
                    } catch (e) {
                        console.warn("error check storage")
                    }
                }
            }, e.prototype.addSleep = function() {
                this.sendStatus = !1, this.sleepTime = 2 * this.sleepTime, this.sleepTime > this.maxTime && (this.sleepTime = this.maxTime), this.storage.setItem(this.eventSleepTimeKey, this.sleepTime), clearTimeout(this.sleepFn), this.tryReportStoreData()
            }, e.prototype.reduceDataFromDB = function() {
                return t(this, void 0, void 0, function() {
                    var e;
                    return n(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return t.trys.push([0, 3, , 4]), this.degradeStarted ? (this.sendStatus = !1, this.goodCount += 1, clearTimeout(this.sleepFn), [4, this.storage.getItem(this.eventKey)]) : [2];
                            case 1:
                                return e = t.sent(), this.tempId.length && e && (this.tempId.forEach(function(t) {
                                    e.delete(t)
                                }), this.tempId = [], this.setDataToDB(e)), this.storage.setItem(this.eventSleepTimeKey, this.sleepTime), [4, this.reportRest()];
                            case 2:
                                return t.sent(), [3, 4];
                            case 3:
                                return t.sent(), console.warn("reduceDataFromDB error"), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, e.prototype.reportRest = function() {
                return t(this, void 0, void 0, function() {
                    var e;
                    return n(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]), [4, this.storage.getItem(this.eventKey)];
                            case 1:
                                return (e = t.sent()) && e.size ? (this.tryReportStoreData(), [3, 3]) : [2];
                            case 2:
                                return t.sent(), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.prototype.random = function() {
                return Math.floor(1e4 * Math.random())
            }, e.prototype.fetchData = function(e) {
                var t = this;
                this.collect.requestManager.useRequest({
                    url: this.eventUrl,
                    data: e,
                    timeout: 3e4,
                    type: "event",
                    status: "degrade",
                    success: function() {
                        t.reduceDataFromDB()
                    }
                })
            }, e.prototype.destroy = function() {
                this.collect.off("http-error"), this.collect.off("http-ok")
            }, e
        }();
    try {
        var Ot = pe();
        Ot && (Ot.LogStore = function(e, t) {
            (new At).apply(e, t)
        })
    } catch (e) {
        console.log(e)
    }
    var It = function() {
        function e() {
            this.autotrack = !1, this.spa = !1, this.cache = {}, this.allowHash = !1
        }
        return e.prototype.apply = function(e, t) {
            if (t.spa || t.autotrack) {
                var n = e.Types;
                this.collect = e, this.config = t, this.appid = t.app_id, this.allowHash = t.allow_hash, this.fncArray = new Map, this.setKey(), this.setLocation(), this.hack(), this.init(), this.listener(), e.emit(n.RouteReady)
            }
        }, e.prototype.setKey = function() {
            var e = this.collect.adapters.storage;
            this.storage = new e(!1), this.cache_key = "__tea_cache_refer_".concat(this.appid), this.cache = {
                refer_key: "",
                refer_title: document.title || location.pathname,
                refer_manual_key: "",
                routeChange: !1
            }, this.config.autotrack && "object" == typeof this.config.autotrack && this.config.autotrack.page_manual_key && (this.cache.refer_manual_key = this.config.autotrack.page_manual_key), this.storage.setItem(this.cache_key, this.cache)
        }, e.prototype.hack = function() {
            var e = this,
                t = window.history.pushState;
            history.pushState = function(n) {
                for (var r = [], a = 1; a < arguments.length; a++) r[a - 1] = arguments[a];
                "function" == typeof history.onpushstate && history.onpushstate({
                    state: n
                });
                var s = t.call.apply(t, i([history, n], o(r)));
                if (e.collect.emit("STATE_CHANGE", n), e.lastLocation === location.href) return s;
                e.setReferCache(e.lastLocation);
                var c = e.getPopStateChangeEventData();
                return e.lastLocation = location.href, e.sendPv(c, "pushState"), s
            };
            var n = history.replaceState;
            history.replaceState = function(t) {
                for (var r = [], a = 1; a < arguments.length; a++) r[a - 1] = arguments[a];
                "function" == typeof history.onreplacestate && history.onreplacestate({
                    state: t
                });
                var s = n.call.apply(n, i([history, t], o(r)));
                if (e.collect.emit("STATE_CHANGE", t), e.lastLocation === location.href) return s;
                e.setReferCache(e.lastLocation);
                var c = e.getPopStateChangeEventData();
                return e.lastLocation = location.href, e.sendPv(c), s
            }
        }, e.prototype.setLocation = function() {
            "undefined" != typeof window && (this.lastLocation = window.location.href)
        }, e.prototype.getLocation = function() {
            return this.lastLocation
        }, e.prototype.init = function() {
            var e = this.getPopStateChangeEventData();
            this.collect.emit("route-change", {
                config: e,
                init: !0
            })
        }, e.prototype.listener = function() {
            var e = this,
                t = null;
            window.addEventListener("hashchange", function(n) {
                if (e.lastLocation !== window.location.href && (clearTimeout(t), e.allowHash)) {
                    e.setReferCache(e.lastLocation), e.lastLocation = window.location.href;
                    var o = e.getPopStateChangeEventData();
                    e.sendPv(o)
                }
            }), window.addEventListener("popstate", function(n) {
                e.lastLocation !== window.location.href && (t = setTimeout(function() {
                    e.setReferCache(e.lastLocation), e.lastLocation = window.location.href;
                    var t = e.getPopStateChangeEventData();
                    e.sendPv(t)
                }, 10))
            })
        }, e.prototype.getPopStateChangeEventData = function() {
            var e = this.pageConfig();
            return e.is_back = 0, e
        }, e.prototype.pageConfig = function() {
            try {
                var e = this.storage.getItem(this.cache_key) || {},
                    t = !1,
                    n = this.storage.getItem("__tea_cache_first_".concat(this.appid));
                return t = !n || 1 != n, {
                    is_html: 1,
                    url: location.href,
                    referrer: this.handleRefer(),
                    page_key: location.href,
                    refer_page_key: this.handleRefer(),
                    page_title: document.title || location.pathname,
                    page_manual_key: this.config.autotrack && this.config.autotrack.page_manual_key || "",
                    refer_page_manual_key: e && e.refer_manual_key || "",
                    refer_page_title: e && e.refer_title || "",
                    page_path: this.collect.handlePath(),
                    url_path: this.collect.handlePath(),
                    page_host: location.host,
                    is_first_time: "".concat(t)
                }
            } catch (e) {
                return this.collect.emit(U.DEBUGGER_MESSAGE, {
                    type: U.DEBUGGER_MESSAGE_SDK,
                    info: "发生了异常",
                    level: "error",
                    time: Date.now(),
                    data: e.message
                }), {}
            }
        }, e.prototype.sendPv = function(e, t) {
            this.collect.emit("route-change", {
                config: e,
                init: !1
            })
        }, e.prototype.handleRefer = function() {
            var e = "";
            try {
                var t = this.storage.getItem(this.cache_key) || {};
                e = t.routeChange ? t.refer_key : this.collect.configManager.get("referrer")
            } catch (t) {
                e = document.referrer
            }
            return e
        }, e.prototype.setReferCache = function(e) {
            var t = this.storage.getItem(this.cache_key) || {};
            t.refer_key = e, t.routeChange = !0, this.storage.setItem(this.cache_key, t)
        }, e
    }();
    try {
        var Rt = pe();
        Rt && (Rt.LogRoute = function(e, t) {
            (new It).apply(e, t)
        })
    } catch (e) {
        console.log(e)
    }
    var Mt = ["getConfig", "getAbSdkVersion"],
        xt = ["init", "usePlugin", "autoInitializationRangers", "on"],
        Ct = function() {
            function e(e) {
                this.task = [], this.newProcessTask = [], this.processMap = !1, this.Collector = e, this.collectMap = new Map, this.processMap = new Map
            }
            return e.prototype.processTask = function() {
                var e = this;
                if (this.task.length) {
                    var t = this.findIndex(this.task, xt, "0");
                    if (-1 !== t) {
                        var n = this.processScope(this.task[t][0]).scope;
                        this.processMap.set(n, !0), this.processCmd.apply(this, i([], o(this.task[t]))), this.newProcessTask = this.task.filter(function(e) {
                            if ("default" === n) {
                                if (-1 === e[0].indexOf(".")) return e
                            } else if (-1 !== e[0].indexOf("".concat(n, "."))) return e
                        });
                        var r = this.findIndex(this.newProcessTask, xt, "0");
                        this.newProcessTask.forEach(function(t, n) {
                            n !== r && e.processCmd.apply(e, i([], o(t)))
                        }), this.newProcessTask = []
                    }
                }
            }, e.prototype.processCmd = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                if (c(e)) {
                    var n = this.processScope(e[0]),
                        o = n.scope,
                        i = n.cmd;
                    if (!this.processMap.get(o)) return this.task.push(e), void this.processTask();
                    if (e.splice(0, 1), -1 !== Mt.indexOf(i)) return this.callCmd(o, i, e);
                    this.callCmd(o, i, e)
                }
            }, e.prototype.callCmd = function(e, t, n) {
                try {
                    if (-1 !== xt.indexOf(t) && (this.collectMap.get(e) || (this.collect = new this.Collector(e), this.collectMap.set(e, this.collect))), !this.collectMap.get(e)) return void console.log("init or use must be first call, cmd:".concat(t));
                    var r = this.collectMap.get(e);
                    if (r && r[t])
                        if ("event" === t) r.event.apply(r, i([t], o(n)));
                        else {
                            if (-1 !== Mt.indexOf(t)) return r[t].apply(r, i([], o(n)));
                            r[t].apply(r, i([], o(n)))
                        }
                    else r.event.apply(r, i([t], o(n)))
                } catch (e) {
                    console.log(e.message)
                }
            }, e.prototype.findIndex = function(e, t, n) {
                var o = this,
                    i = -1;
                try {
                    e.forEach(function(e, r) {
                        var a = void 0 !== n ? e[n] : e,
                            s = o.processScope(a).cmd; - 1 !== t.indexOf(s) && (i = r)
                    })
                } catch (e) {
                    return i
                }
                return i
            }, e.prototype.processScope = function(e) {
                var t = "default";
                try {
                    if ("string" == typeof e && e.indexOf(".") > -1) {
                        var n = e.split(".");
                        t = n[0], e = n[1]
                    }
                } catch (n) {
                    return {
                        scope: t,
                        cmd: e
                    }
                }
                return {
                    scope: t,
                    cmd: e
                }
            }, e
        }();
    me.usePlugin(Re, "ab"), me.usePlugin(Ge, "stay"), me.usePlugin(_t, "autotrack"), me.usePlugin(At, "degrade"), me.usePlugin(kt, "verify_h5"), me.usePlugin(Ne, "heartbeat"), me.usePlugin(Ue, "monitor"), me.usePlugin(It, "route"), me.usePlugin(St, "tracer"),
        function(e) {
            if ("undefined" != typeof window) {
                var t = function() {
                    if ("undefined" != typeof window) return window.LogAnalyticsObject || window.TeaAnalyticsObject
                }();
                if (t && window[t]) {
                    var n = window[t];
                    n.sdkLoad ? console.log("you page has load sdk file already, do not load another sdk file") : (e.task = n.q || [], window[t] = e.processCmd.bind(e), window[t].sdkLoad = !0, e.processTask())
                }
            }
        }(new Ct(me))
}();