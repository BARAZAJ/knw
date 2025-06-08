"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8229], {
        2341: (e, t, i) => {
            i.r(t), i.d(t, {
                COPY_AUTOCAPTURE_EVENT: () => m,
                Compression: () => s,
                PostHog: () => nc,
                SurveyQuestionBranchingType: () => rr,
                SurveyQuestionType: () => rs,
                SurveySchedule: () => rn,
                SurveyType: () => ri,
                default: () => nd,
                knownUnsafeEditableEvent: () => y,
                posthog: () => nd,
                severityLevels: () => b
            });
            var s, r = "undefined" != typeof window ? window : void 0,
                n = "undefined" != typeof globalThis ? globalThis : r,
                o = Array.prototype,
                a = o.forEach,
                l = o.indexOf,
                c = null == n ? void 0 : n.navigator,
                u = null == n ? void 0 : n.document,
                d = null == n ? void 0 : n.location,
                h = null == n ? void 0 : n.fetch,
                _ = null != n && n.XMLHttpRequest && "withCredentials" in new n.XMLHttpRequest ? n.XMLHttpRequest : void 0,
                p = null == n ? void 0 : n.AbortController,
                g = null == c ? void 0 : c.userAgent,
                v = null != r ? r : {},
                f = {
                    DEBUG: !1,
                    LIB_VERSION: "1.231.0"
                },
                m = "$copy_autocapture",
                y = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"];
            ! function(e) {
                e.GZipJS = "gzip-js", e.Base64 = "base64"
            }(s || (s = {}));
            var b = ["fatal", "error", "warning", "log", "info", "debug"];

            function w(e, t) {
                return -1 !== e.indexOf(t)
            }
            var S = function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                },
                k = function(e) {
                    return e.replace(/^\$/, "")
                },
                E = Array.isArray,
                x = Object.prototype,
                I = x.hasOwnProperty,
                P = x.toString,
                C = E || function(e) {
                    return "[object Array]" === P.call(e)
                },
                F = e => "function" == typeof e,
                R = e => e === Object(e) && !C(e),
                T = e => {
                    if (R(e)) {
                        for (var t in e)
                            if (I.call(e, t)) return !1;
                        return !0
                    }
                    return !1
                },
                $ = e => void 0 === e,
                A = e => "[object String]" == P.call(e),
                O = e => A(e) && 0 === e.trim().length,
                M = e => null === e,
                L = e => $(e) || M(e),
                D = e => "[object Number]" == P.call(e),
                q = e => "[object Boolean]" === P.call(e),
                N = e => e instanceof FormData,
                B = e => e instanceof Error,
                H = e => w(y, e),
                U = e => {
                    var t = {
                        _log: function(t) {
                            if (r && (f.DEBUG || v.POSTHOG_DEBUG) && !$(r.console) && r.console) {
                                for (var i = ("__rrweb_original__" in r.console[t]) ? r.console[t].__rrweb_original__ : r.console[t], s = arguments.length, n = Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) n[o - 1] = arguments[o];
                                i(e, ...n)
                            }
                        },
                        info: function() {
                            for (var e = arguments.length, i = Array(e), s = 0; s < e; s++) i[s] = arguments[s];
                            t._log("log", ...i)
                        },
                        warn: function() {
                            for (var e = arguments.length, i = Array(e), s = 0; s < e; s++) i[s] = arguments[s];
                            t._log("warn", ...i)
                        },
                        error: function() {
                            for (var e = arguments.length, i = Array(e), s = 0; s < e; s++) i[s] = arguments[s];
                            t._log("error", ...i)
                        },
                        critical: function() {
                            for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                            console.error(e, ...i)
                        },
                        uninitializedWarning: e => {
                            t.error("You must initialize PostHog before calling ".concat(e))
                        },
                        createLogger: t => U("".concat(e, " ").concat(t))
                    };
                    return t
                },
                z = U("[PostHog.js]"),
                j = z.createLogger,
                W = j("[ExternalScriptsLoader]"),
                V = (e, t, i) => {
                    if (e.config.disable_external_dependency_loading) return W.warn("".concat(t, " was requested but loading of external scripts is disabled.")), i("Loading of external scripts is disabled");
                    var s = null == u ? void 0 : u.querySelectorAll("script");
                    if (s) {
                        for (var r = 0; r < s.length; r++)
                            if (s[r].src === t) return i()
                    }
                    var n = () => {
                        if (!u) return i("document not found");
                        var s = u.createElement("script");
                        if (s.type = "text/javascript", s.crossOrigin = "anonymous", s.src = t, s.onload = e => i(void 0, e), s.onerror = e => i(e), e.config.prepare_external_dependency_script && (s = e.config.prepare_external_dependency_script(s)), !s) return i("prepare_external_dependency_script returned null");
                        var r, n = u.querySelectorAll("body > script");
                        n.length > 0 ? null === (r = n[0].parentNode) || void 0 === r || r.insertBefore(s, n[0]) : u.body.appendChild(s)
                    };
                    null != u && u.body ? n() : null == u || u.addEventListener("DOMContentLoaded", n)
                };

            function G(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), i.push.apply(i, s)
                }
                return i
            }

            function J(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(i), !0).forEach(function(t) {
                        Y(e, t, i[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : G(Object(i)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    })
                }
                return e
            }

            function Y(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function K(e, t) {
                if (null == e) return {};
                var i, s, r = function(e, t) {
                    if (null == e) return {};
                    var i, s, r = {},
                        n = Object.keys(e);
                    for (s = 0; s < n.length; s++) i = n[s], t.indexOf(i) >= 0 || (r[i] = e[i]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (s = 0; s < n.length; s++) i = n[s], t.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i])
                }
                return r
            }
            v.__PosthogExtensions__ = v.__PosthogExtensions__ || {}, v.__PosthogExtensions__.loadExternalDependency = (e, t, i) => {
                var s = "/static/".concat(t, ".js") + "?v=".concat(e.version);
                if ("remote-config" === t && (s = "/array/".concat(e.config.token, "/config.js")), "toolbar" === t) {
                    var r = 3e5 * Math.floor(Date.now() / 3e5);
                    s = "".concat(s, "&t=").concat(r)
                }
                var n = e.requestRouter.endpointFor("assets", s);
                V(e, n, i)
            }, v.__PosthogExtensions__.loadSiteApp = (e, t, i) => {
                var s = e.requestRouter.endpointFor("api", t);
                V(e, s, i)
            };
            var Q = {};

            function X(e, t, i) {
                if (C(e)) {
                    if (a && e.forEach === a) e.forEach(t, i);
                    else if ("length" in e && e.length === +e.length) {
                        for (var s = 0, r = e.length; s < r; s++)
                            if (s in e && t.call(i, e[s], s) === Q) return
                    }
                }
            }

            function Z(e, t, i) {
                if (!L(e)) {
                    if (C(e)) return X(e, t, i);
                    if (N(e)) {
                        for (var s of e.entries())
                            if (t.call(i, s[1], s[0]) === Q) return
                    } else
                        for (var r in e)
                            if (I.call(e, r) && t.call(i, e[r], r) === Q) return
                }
            }
            var ee = function(e) {
                    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                    return X(i, function(t) {
                        for (var i in t) void 0 !== t[i] && (e[i] = t[i])
                    }), e
                },
                et = function(e) {
                    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                    return X(i, function(t) {
                        X(t, function(t) {
                            e.push(t)
                        })
                    }), e
                };

            function ei(e) {
                for (var t = Object.keys(e), i = t.length, s = Array(i); i--;) s[i] = [t[i], e[t[i]]];
                return s
            }
            var es = function(e) {
                    try {
                        return e()
                    } catch (e) {
                        return
                    }
                },
                er = function(e) {
                    return function() {
                        try {
                            for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                            return e.apply(this, i)
                        } catch (e) {
                            z.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), z.critical(e)
                        }
                    }
                },
                en = function(e) {
                    var t = {};
                    return Z(e, function(e, i) {
                        A(e) && e.length > 0 && (t[i] = e)
                    }), t
                },
                eo = ["herokuapp.com", "vercel.app", "netlify.app"];

            function ea(e, t) {
                for (var i = 0; i < e.length; i++)
                    if (t(e[i])) return e[i]
            }

            function el(e, t, i, s) {
                var {
                    capture: r = !1,
                    passive: n = !0
                } = null != s ? s : {};
                null == e || e.addEventListener(t, i, {
                    capture: r,
                    passive: n
                })
            }
            var ec = "$people_distinct_id",
                eu = "__alias",
                ed = "__timers",
                eh = "$autocapture_disabled_server_side",
                e_ = "$heatmaps_enabled_server_side",
                ep = "$exception_capture_enabled_server_side",
                eg = "$web_vitals_enabled_server_side",
                ev = "$dead_clicks_enabled_server_side",
                ef = "$web_vitals_allowed_metrics",
                em = "$session_recording_enabled_server_side",
                ey = "$console_log_recording_enabled_server_side",
                eb = "$session_recording_network_payload_capture",
                ew = "$session_recording_masking",
                eS = "$session_recording_canvas_recording",
                ek = "$replay_sample_rate",
                eE = "$replay_minimum_duration",
                ex = "$replay_script_config",
                eI = "$sesid",
                eP = "$session_is_sampled",
                eC = "$session_recording_url_trigger_activated_session",
                eF = "$session_recording_event_trigger_activated_session",
                eR = "$enabled_feature_flags",
                eT = "$early_access_features",
                e$ = "$stored_person_properties",
                eA = "$stored_group_properties",
                eO = "$surveys",
                eM = "$surveys_activated",
                eL = "$flag_call_reported",
                eD = "$user_state",
                eq = "$client_session_props",
                eN = "$capture_rate_limit",
                eB = "$initial_campaign_params",
                eH = "$initial_referrer_info",
                eU = "$initial_person_info",
                ez = "$epp",
                ej = "__POSTHOG_TOOLBAR__",
                eW = "$posthog_cookieless",
                eV = [ec, eu, "__cmpns", ed, em, e_, eI, eR, eD, eT, eA, e$, eO, eL, eq, eN, eB, eH, ez];

            function eG(e) {
                var t;
                return e instanceof Element && (e.id === ej || !(null === (t = e.closest) || void 0 === t || !t.call(e, ".toolbar-global-fade-container")))
            }

            function eJ(e) {
                return !!e && 1 === e.nodeType
            }

            function eY(e, t) {
                return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
            }

            function eK(e) {
                return !!e && 3 === e.nodeType
            }

            function eQ(e) {
                return !!e && 11 === e.nodeType
            }

            function eX(e) {
                return e ? S(e).split(/\s+/) : []
            }

            function eZ(e) {
                var t = null == r ? void 0 : r.location.href;
                return !!(t && e && e.some(e => t.match(e)))
            }

            function e0(e) {
                var t = "";
                switch (typeof e.className) {
                    case "string":
                        t = e.className;
                        break;
                    case "object":
                        t = (e.className && "baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
                        break;
                    default:
                        t = ""
                }
                return eX(t)
            }

            function e1(e) {
                return L(e) ? null : S(e).split(/(\s+)/).filter(e => tr(e)).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
            }

            function e2(e) {
                var t = "";
                return e8(e) && !e4(e) && e.childNodes && e.childNodes.length && Z(e.childNodes, function(e) {
                    var i;
                    eK(e) && e.textContent && (t += null !== (i = e1(e.textContent)) && void 0 !== i ? i : "")
                }), S(t)
            }

            function e3(e) {
                var t;
                return $(e.target) ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null
            }
            var e5 = ["a", "button", "form", "input", "select", "textarea", "label"];

            function e6(e) {
                var t = e.parentNode;
                return !(!t || !eJ(t)) && t
            }

            function e8(e) {
                for (var t = e; t.parentNode && !eY(t, "body"); t = t.parentNode) {
                    var i = e0(t);
                    if (w(i, "ph-sensitive") || w(i, "ph-no-capture")) return !1
                }
                if (w(e0(e), "ph-include")) return !0;
                var s = e.type || "";
                if (A(s)) switch (s.toLowerCase()) {
                    case "hidden":
                    case "password":
                        return !1
                }
                var r = e.name || e.id || "";
                return !(A(r) && /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r.replace(/[^a-zA-Z0-9]/g, "")))
            }

            function e4(e) {
                return !!(eY(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type) || eY(e, "select") || eY(e, "textarea") || "true" === e.getAttribute("contenteditable"))
            }
            var e7 = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
                e9 = new RegExp("^(?:".concat(e7, ")$")),
                te = new RegExp(e7),
                tt = "\\d{3}-?\\d{2}-?\\d{4}",
                ti = new RegExp("^(".concat(tt, ")$")),
                ts = new RegExp("(".concat(tt, ")"));

            function tr(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return !(L(e) || A(e) && (e = S(e), (t ? e9 : te).test((e || "").replace(/[- ]/g, "")) || (t ? ti : ts).test(e)))
            }

            function tn(e) {
                var t = e2(e);
                return tr(t = "".concat(t, " ").concat(function e(t) {
                    var i = "";
                    return t && t.childNodes && t.childNodes.length && Z(t.childNodes, function(t) {
                        var s;
                        if (t && "span" === (null === (s = t.tagName) || void 0 === s ? void 0 : s.toLowerCase())) try {
                            var r = e2(t);
                            i = "".concat(i, " ").concat(r).trim(), t.childNodes && t.childNodes.length && (i = "".concat(i, " ").concat(e(t)).trim())
                        } catch (e) {
                            z.error("[AutoCapture]", e)
                        }
                    }), i
                }(e)).trim()) ? t : ""
            }

            function to(e) {
                return e.replace(/"|\\"/g, '\\"')
            }
            class ta {
                constructor() {
                    this.clicks = []
                }
                isRageClick(e, t, i) {
                    var s = this.clicks[this.clicks.length - 1];
                    if (s && Math.abs(e - s.x) + Math.abs(t - s.y) < 30 && i - s.timestamp < 1e3) {
                        if (this.clicks.push({
                                x: e,
                                y: t,
                                timestamp: i
                            }), 3 === this.clicks.length) return !0
                    } else this.clicks = [{
                        x: e,
                        y: t,
                        timestamp: i
                    }];
                    return !1
                }
            }
            var tl = ["localhost", "127.0.0.1"],
                tc = e => {
                    var t = null == u ? void 0 : u.createElement("a");
                    return $(t) ? null : (t.href = e, t)
                },
                tu = function(e) {
                    var t, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&",
                        r = [];
                    return Z(e, function(e, s) {
                        $(e) || $(s) || "undefined" === s || (t = encodeURIComponent(e instanceof File ? e.name : e.toString()), i = encodeURIComponent(s), r[r.length] = i + "=" + t)
                    }), r.join(s)
                },
                td = function(e, t) {
                    for (var i, s = ((e.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), r = 0; r < s.length; r++) {
                        var n = s[r].split("=");
                        if (n[0] === t) {
                            i = n;
                            break
                        }
                    }
                    if (!C(i) || i.length < 2) return "";
                    var o = i[1];
                    try {
                        o = decodeURIComponent(o)
                    } catch (e) {
                        z.error("Skipping decoding for malformed query param: " + o)
                    }
                    return o.replace(/\+/g, " ")
                },
                th = function(e, t, i) {
                    if (!e || !t || !t.length) return e;
                    for (var s = e.split("#"), r = s[0] || "", n = s[1], o = r.split("?"), a = o[1], l = o[0], c = (a || "").split("&"), u = [], d = 0; d < c.length; d++) {
                        var h = c[d].split("=");
                        C(h) && (t.includes(h[0]) ? u.push(h[0] + "=" + i) : u.push(c[d]))
                    }
                    var _ = l;
                    return null != a && (_ += "?" + u.join("&")), null != n && (_ += "#" + n), _
                },
                t_ = function(e, t) {
                    var i = e.match(RegExp(t + "=([^&]*)"));
                    return i ? i[1] : null
                },
                tp = j("[AutoCapture]");

            function tg(e, t) {
                return t.length > e ? t.slice(0, e) + "..." : t
            }
            class tv {
                constructor(e) {
                    Y(this, "_initialized", !1), Y(this, "_isDisabledServerSide", null), Y(this, "rageclicks", new ta), Y(this, "_elementsChainAsString", !1), this.instance = e, this._elementSelectors = null
                }
                get config() {
                    var e, t, i = R(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
                    return i.url_allowlist = null === (e = i.url_allowlist) || void 0 === e ? void 0 : e.map(e => new RegExp(e)), i.url_ignorelist = null === (t = i.url_ignorelist) || void 0 === t ? void 0 : t.map(e => new RegExp(e)), i
                }
                _addDomEventHandlers() {
                    if (this.isBrowserSupported()) {
                        if (r && u) {
                            var e = e => {
                                e = e || (null == r ? void 0 : r.event);
                                try {
                                    this._captureEvent(e)
                                } catch (e) {
                                    tp.error("Failed to capture event", e)
                                }
                            };
                            if (el(u, "submit", e, {
                                    capture: !0
                                }), el(u, "change", e, {
                                    capture: !0
                                }), el(u, "click", e, {
                                    capture: !0
                                }), this.config.capture_copied_text) {
                                var t = e => {
                                    e = e || (null == r ? void 0 : r.event), this._captureEvent(e, m)
                                };
                                el(u, "copy", t, {
                                    capture: !0
                                }), el(u, "cut", t, {
                                    capture: !0
                                })
                            }
                        }
                    } else tp.info("Disabling Automatic Event Collection because this browser is not supported")
                }
                startIfEnabled() {
                    this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
                }
                onRemoteConfig(e) {
                    e.elementsChainAsString && (this._elementsChainAsString = e.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({
                        [eh]: !!e.autocapture_opt_out
                    }), this._isDisabledServerSide = !!e.autocapture_opt_out, this.startIfEnabled()
                }
                setElementSelectors(e) {
                    this._elementSelectors = e
                }
                getElementSelectors(e) {
                    var t, i = [];
                    return null === (t = this._elementSelectors) || void 0 === t || t.forEach(t => {
                        var s = null == u ? void 0 : u.querySelectorAll(t);
                        null == s || s.forEach(s => {
                            e === s && i.push(t)
                        })
                    }), i
                }
                get isEnabled() {
                    var e, t, i = null === (e = this.instance.persistence) || void 0 === e ? void 0 : e.props[eh];
                    if (M(this._isDisabledServerSide) && !q(i) && !this.instance.config.advanced_disable_decide) return !1;
                    var s = null !== (t = this._isDisabledServerSide) && void 0 !== t ? t : !!i;
                    return !!this.instance.config.autocapture && !s
                }
                _captureEvent(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture";
                    if (this.isEnabled) {
                        var i, s = e3(e);
                        eK(s) && (s = s.parentNode || null), "$autocapture" === t && "click" === e.type && e instanceof MouseEvent && this.instance.config.rageclick && null !== (i = this.rageclicks) && void 0 !== i && i.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._captureEvent(e, "$rageclick");
                        var n = t === m;
                        if (s && function(e, t) {
                                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                    s = arguments.length > 3 ? arguments[3] : void 0,
                                    n = arguments.length > 4 ? arguments[4] : void 0;
                                if (!r || !e || eY(e, "html") || !eJ(e) || null != i && i.url_allowlist && !eZ(i.url_allowlist) || null != i && i.url_ignorelist && eZ(i.url_ignorelist)) return !1;
                                if (null != i && i.dom_event_allowlist) {
                                    var o = i.dom_event_allowlist;
                                    if (o && !o.some(e => t.type === e)) return !1
                                }
                                for (var a = !1, l = [e], c = !0, u = e; u.parentNode && !eY(u, "body");)
                                    if (eQ(u.parentNode)) l.push(u.parentNode.host), u = u.parentNode.host;
                                    else {
                                        if (!(c = e6(u))) break;
                                        if (s || e5.indexOf(c.tagName.toLowerCase()) > -1) a = !0;
                                        else {
                                            var d = r.getComputedStyle(c);
                                            d && "pointer" === d.getPropertyValue("cursor") && (a = !0)
                                        }
                                        l.push(c), u = c
                                    }
                                if (! function(e, t) {
                                        var i = null == t ? void 0 : t.element_allowlist;
                                        if ($(i)) return !0;
                                        var s = function(e) {
                                            if (i.some(t => e.tagName.toLowerCase() === t)) return {
                                                v: !0
                                            }
                                        };
                                        for (var r of e) {
                                            var n = s(r);
                                            if ("object" == typeof n) return n.v
                                        }
                                        return !1
                                    }(l, i) || ! function(e, t) {
                                        var i = null == t ? void 0 : t.css_selector_allowlist;
                                        if ($(i)) return !0;
                                        var s = function(e) {
                                            if (i.some(t => e.matches(t))) return {
                                                v: !0
                                            }
                                        };
                                        for (var r of e) {
                                            var n = s(r);
                                            if ("object" == typeof n) return n.v
                                        }
                                        return !1
                                    }(l, i)) return !1;
                                var h = r.getComputedStyle(e);
                                if (h && "pointer" === h.getPropertyValue("cursor") && "click" === t.type) return !0;
                                var _ = e.tagName.toLowerCase();
                                switch (_) {
                                    case "html":
                                        return !1;
                                    case "form":
                                        return (n || ["submit"]).indexOf(t.type) >= 0;
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        return (n || ["change", "click"]).indexOf(t.type) >= 0;
                                    default:
                                        return a ? (n || ["click"]).indexOf(t.type) >= 0 : (n || ["click"]).indexOf(t.type) >= 0 && (e5.indexOf(_) > -1 || "true" === e.getAttribute("contenteditable"))
                                }
                            }(s, e, this.config, n, n ? ["copy", "cut"] : void 0)) {
                            var {
                                props: o,
                                explicitNoCapture: a
                            } = function(e, t) {
                                for (var i, s, {
                                        e: n,
                                        maskAllElementAttributes: o,
                                        maskAllText: a,
                                        elementAttributeIgnoreList: l,
                                        elementsChainAsString: c
                                    } = t, u = [e], d = e; d.parentNode && !eY(d, "body");) eQ(d.parentNode) ? (u.push(d.parentNode.host), d = d.parentNode.host) : (u.push(d.parentNode), d = d.parentNode);
                                var h, _ = [],
                                    p = {},
                                    g = !1,
                                    v = !1;
                                if (Z(u, e => {
                                        var t = e8(e);
                                        "a" === e.tagName.toLowerCase() && (g = e.getAttribute("href"), g = t && g && tr(g) && g), w(e0(e), "ph-no-capture") && (v = !0), _.push(function(e, t, i, s) {
                                            var r = e.tagName.toLowerCase(),
                                                n = {
                                                    tag_name: r
                                                };
                                            e5.indexOf(r) > -1 && !i && ("a" === r.toLowerCase() || "button" === r.toLowerCase() ? n.$el_text = tg(1024, tn(e)) : n.$el_text = tg(1024, e2(e)));
                                            var o = e0(e);
                                            o.length > 0 && (n.classes = o.filter(function(e) {
                                                return "" !== e
                                            })), Z(e.attributes, function(i) {
                                                var r;
                                                if ((!e4(e) || -1 !== ["name", "id", "class", "aria-label"].indexOf(i.name)) && (null == s || !s.includes(i.name)) && !t && tr(i.value) && (!A(r = i.name) || "_ngcontent" !== r.substring(0, 10) && "_nghost" !== r.substring(0, 7))) {
                                                    var o = i.value;
                                                    "class" === i.name && (o = eX(o).join(" ")), n["attr__" + i.name] = tg(1024, o)
                                                }
                                            });
                                            for (var a = 1, l = 1, c = e; c = function(e) {
                                                    if (e.previousElementSibling) return e.previousElementSibling;
                                                    var t = e;
                                                    do t = t.previousSibling; while (t && !eJ(t));
                                                    return t
                                                }(c);) a++, c.tagName === e.tagName && l++;
                                            return n.nth_child = a, n.nth_of_type = l, n
                                        }(e, o, a, l)), ee(p, function(e) {
                                            if (!e8(e)) return {};
                                            var t = {};
                                            return Z(e.attributes, function(e) {
                                                if (e.name && 0 === e.name.indexOf("data-ph-capture-attribute")) {
                                                    var i = e.name.replace("data-ph-capture-attribute-", ""),
                                                        s = e.value;
                                                    i && s && tr(s) && (t[i] = s)
                                                }
                                            }), t
                                        }(e))
                                    }), v) return {
                                    props: {},
                                    explicitNoCapture: v
                                };
                                if (a || ("a" === e.tagName.toLowerCase() || "button" === e.tagName.toLowerCase() ? _[0].$el_text = tn(e) : _[0].$el_text = e2(e)), g) {
                                    _[0].attr__href = g;
                                    var f, m, y = null === (f = tc(g)) || void 0 === f ? void 0 : f.host,
                                        b = null == r || null === (m = r.location) || void 0 === m ? void 0 : m.host;
                                    y && b && y !== b && (h = g)
                                }
                                return {
                                    props: ee({
                                        $event_type: n.type,
                                        $ce_version: 1
                                    }, c ? {} : {
                                        $elements: _
                                    }, {
                                        $elements_chain: _.map(e => {
                                            var t, i, s, r = {
                                                text: null === (i = e.$el_text) || void 0 === i ? void 0 : i.slice(0, 400),
                                                tag_name: e.tag_name,
                                                href: null === (s = e.attr__href) || void 0 === s ? void 0 : s.slice(0, 2048),
                                                attr_class: (t = e.attr__class) ? C(t) ? t : eX(t) : void 0,
                                                attr_id: e.attr__id,
                                                nth_child: e.nth_child,
                                                nth_of_type: e.nth_of_type,
                                                attributes: {}
                                            };
                                            return ei(e).filter(e => {
                                                var [t] = e;
                                                return 0 === t.indexOf("attr__")
                                            }).forEach(e => {
                                                var [t, i] = e;
                                                return r.attributes[t] = i
                                            }), r
                                        }).map(e => {
                                            var t, i, s = "";
                                            if (e.tag_name && (s += e.tag_name), e.attr_class)
                                                for (var r of (e.attr_class.sort(), e.attr_class)) s += ".".concat(r.replace(/"/g, ""));
                                            var n = J(J(J(J({}, e.text ? {
                                                    text: e.text
                                                } : {}), {}, {
                                                    "nth-child": null !== (t = e.nth_child) && void 0 !== t ? t : 0,
                                                    "nth-of-type": null !== (i = e.nth_of_type) && void 0 !== i ? i : 0
                                                }, e.href ? {
                                                    href: e.href
                                                } : {}), e.attr_id ? {
                                                    attr_id: e.attr_id
                                                } : {}), e.attributes),
                                                o = {};
                                            return ei(n).sort((e, t) => {
                                                var [i] = e, [s] = t;
                                                return i.localeCompare(s)
                                            }).forEach(e => {
                                                var [t, i] = e;
                                                return o[to(t.toString())] = to(i.toString())
                                            }), s += ":", s += ei(n).map(e => {
                                                var [t, i] = e;
                                                return "".concat(t, '="').concat(i, '"')
                                            }).join("")
                                        }).join(";")
                                    }, null !== (i = _[0]) && void 0 !== i && i.$el_text ? {
                                        $el_text: null === (s = _[0]) || void 0 === s ? void 0 : s.$el_text
                                    } : {}, h && "click" === n.type ? {
                                        $external_click_url: h
                                    } : {}, p)
                                }
                            }(s, {
                                e: e,
                                maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
                                maskAllText: this.instance.config.mask_all_text,
                                elementAttributeIgnoreList: this.config.element_attribute_ignorelist,
                                elementsChainAsString: this._elementsChainAsString
                            });
                            if (a) return !1;
                            var l = this.getElementSelectors(s);
                            if (l && l.length > 0 && (o.$element_selectors = l), t === m) {
                                var c, u = e1(null == r || null === (c = r.getSelection()) || void 0 === c ? void 0 : c.toString()),
                                    d = e.type || "clipboard";
                                if (!u) return !1;
                                o.$selected_content = u, o.$copy_type = d
                            }
                            return this.instance.capture(t, o), !0
                        }
                    }
                }
                isBrowserSupported() {
                    return F(null == u ? void 0 : u.querySelectorAll)
                }
            }
            Math.trunc || (Math.trunc = function(e) {
                return e < 0 ? Math.ceil(e) : Math.floor(e)
            }), Number.isInteger || (Number.isInteger = function(e) {
                return D(e) && isFinite(e) && Math.floor(e) === e
            });
            var tf = "0123456789abcdef";
            class tm {
                constructor(e) {
                    if (this.bytes = e, 16 !== e.length) throw TypeError("not 128-bit length")
                }
                static fromFieldsV7(e, t, i, s) {
                    if (!Number.isInteger(e) || !Number.isInteger(t) || !Number.isInteger(i) || !Number.isInteger(s) || e < 0 || t < 0 || i < 0 || s < 0 || e > 0xffffffffffff || t > 4095 || i > 0x3fffffff || s > 0xffffffff) throw RangeError("invalid field value");
                    var r = new Uint8Array(16);
                    return r[0] = e / 0x10000000000, r[1] = e / 0x100000000, r[2] = e / 0x1000000, r[3] = e / 65536, r[4] = e / 256, r[5] = e, r[6] = 112 | t >>> 8, r[7] = t, r[8] = 128 | i >>> 24, r[9] = i >>> 16, r[10] = i >>> 8, r[11] = i, r[12] = s >>> 24, r[13] = s >>> 16, r[14] = s >>> 8, r[15] = s, new tm(r)
                }
                toString() {
                    for (var e = "", t = 0; t < this.bytes.length; t++) e = e + tf.charAt(this.bytes[t] >>> 4) + tf.charAt(15 & this.bytes[t]), 3 !== t && 5 !== t && 7 !== t && 9 !== t || (e += "-");
                    if (36 !== e.length) throw Error("Invalid UUIDv7 was generated");
                    return e
                }
                clone() {
                    return new tm(this.bytes.slice(0))
                }
                equals(e) {
                    return 0 === this.compareTo(e)
                }
                compareTo(e) {
                    for (var t = 0; t < 16; t++) {
                        var i = this.bytes[t] - e.bytes[t];
                        if (0 !== i) return Math.sign(i)
                    }
                    return 0
                }
            }
            class ty {
                constructor() {
                    Y(this, "timestamp", 0), Y(this, "counter", 0), Y(this, "random", new tS)
                }
                generate() {
                    var e = this.generateOrAbort();
                    if ($(e)) {
                        this.timestamp = 0;
                        var t = this.generateOrAbort();
                        if ($(t)) throw Error("Could not generate UUID after timestamp reset");
                        return t
                    }
                    return e
                }
                generateOrAbort() {
                    var e = Date.now();
                    if (e > this.timestamp) this.timestamp = e, this.resetCounter();
                    else {
                        if (!(e + 1e4 > this.timestamp)) return;
                        this.counter++, this.counter > 0x3ffffffffff && (this.timestamp++, this.resetCounter())
                    }
                    return tm.fromFieldsV7(this.timestamp, Math.trunc(this.counter / 0x40000000), 0x3fffffff & this.counter, this.random.nextUint32())
                }
                resetCounter() {
                    this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32())
                }
            }
            var tb, tw = e => {
                if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw Error("no cryptographically strong RNG available");
                for (var t = 0; t < e.length; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
                return e
            };
            r && !$(r.crypto) && crypto.getRandomValues && (tw = e => crypto.getRandomValues(e));
            class tS {
                constructor() {
                    Y(this, "buffer", new Uint32Array(8)), Y(this, "cursor", 1 / 0)
                }
                nextUint32() {
                    return this.cursor >= this.buffer.length && (tw(this.buffer), this.cursor = 0), this.buffer[this.cursor++]
                }
            }
            var tk, tE = () => tx().toString(),
                tx = () => (tb || (tb = new ty)).generate(),
                tI = "",
                tP = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i,
                tC = {
                    is_supported: () => !!u,
                    error: function(e) {
                        z.error("cookieStore error: " + e)
                    },
                    get: function(e) {
                        if (u) {
                            try {
                                for (var t = e + "=", i = u.cookie.split(";").filter(e => e.length), s = 0; s < i.length; s++) {
                                    for (var r = i[s];
                                        " " == r.charAt(0);) r = r.substring(1, r.length);
                                    if (0 === r.indexOf(t)) return decodeURIComponent(r.substring(t.length, r.length))
                                }
                            } catch (e) {}
                            return null
                        }
                    },
                    parse: function(e) {
                        var t;
                        try {
                            t = JSON.parse(tC.get(e)) || {}
                        } catch (e) {}
                        return t
                    },
                    set: function(e, t, i, s, r) {
                        if (u) try {
                            var n = "",
                                o = "",
                                a = function(e, t) {
                                    if (t) {
                                        var i = function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
                                            if (tI) return tI;
                                            if (!t || ["localhost", "127.0.0.1"].includes(e)) return "";
                                            for (var i = e.split("."), s = Math.min(i.length, 8), r = "dmn_chk_" + tE(), n = RegExp("(^|;)\\s*" + r + "=1"); !tI && s--;) {
                                                var o = i.slice(s).join("."),
                                                    a = r + "=1;domain=." + o;
                                                t.cookie = a, n.test(t.cookie) && (t.cookie = a + ";expires=Thu, 01 Jan 1970 00:00:00 GMT", tI = o)
                                            }
                                            return tI
                                        }(e);
                                        if (!i) {
                                            var s, r = (s = e.match(tP)) ? s[0] : "";
                                            r !== i && z.info("Warning: cookie subdomain discovery mismatch", r, i), i = r
                                        }
                                        return i ? "; domain=." + i : ""
                                    }
                                    return ""
                                }(u.location.hostname, s);
                            if (i) {
                                var l = new Date;
                                l.setTime(l.getTime() + 24 * i * 36e5), n = "; expires=" + l.toUTCString()
                            }
                            r && (o = "; secure");
                            var c = e + "=" + encodeURIComponent(JSON.stringify(t)) + n + "; SameSite=Lax; path=/" + a + o;
                            return c.length > 3686.4 && z.warn("cookieStore warning: large cookie, len=" + c.length), u.cookie = c, c
                        } catch (e) {
                            return
                        }
                    },
                    remove: function(e, t) {
                        try {
                            tC.set(e, "", -1, t)
                        } catch (e) {
                            return
                        }
                    }
                },
                tF = null,
                tR = {
                    is_supported: function() {
                        if (!M(tF)) return tF;
                        var e = !0;
                        if ($(r)) e = !1;
                        else try {
                            var t = "__mplssupport__";
                            tR.set(t, "xyz"), '"xyz"' !== tR.get(t) && (e = !1), tR.remove(t)
                        } catch (t) {
                            e = !1
                        }
                        return e || z.error("localStorage unsupported; falling back to cookie store"), tF = e, e
                    },
                    error: function(e) {
                        z.error("localStorage error: " + e)
                    },
                    get: function(e) {
                        try {
                            return null == r ? void 0 : r.localStorage.getItem(e)
                        } catch (e) {
                            tR.error(e)
                        }
                        return null
                    },
                    parse: function(e) {
                        try {
                            return JSON.parse(tR.get(e)) || {}
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t) {
                        try {
                            null == r || r.localStorage.setItem(e, JSON.stringify(t))
                        } catch (e) {
                            tR.error(e)
                        }
                    },
                    remove: function(e) {
                        try {
                            null == r || r.localStorage.removeItem(e)
                        } catch (e) {
                            tR.error(e)
                        }
                    }
                },
                tT = ["distinct_id", eI, eP, ez, eU],
                t$ = J(J({}, tR), {}, {
                    parse: function(e) {
                        try {
                            var t = {};
                            try {
                                t = tC.parse(e) || {}
                            } catch (e) {}
                            var i = ee(t, JSON.parse(tR.get(e) || "{}"));
                            return tR.set(e, i), i
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t, i, s, r, n) {
                        try {
                            tR.set(e, t, void 0, void 0, n);
                            var o = {};
                            tT.forEach(e => {
                                t[e] && (o[e] = t[e])
                            }), Object.keys(o).length && tC.set(e, o, i, s, r, n)
                        } catch (e) {
                            tR.error(e)
                        }
                    },
                    remove: function(e, t) {
                        try {
                            null == r || r.localStorage.removeItem(e), tC.remove(e, t)
                        } catch (e) {
                            tR.error(e)
                        }
                    }
                }),
                tA = {},
                tO = {
                    is_supported: function() {
                        return !0
                    },
                    error: function(e) {
                        z.error("memoryStorage error: " + e)
                    },
                    get: function(e) {
                        return tA[e] || null
                    },
                    parse: function(e) {
                        return tA[e] || null
                    },
                    set: function(e, t) {
                        tA[e] = t
                    },
                    remove: function(e) {
                        delete tA[e]
                    }
                },
                tM = null,
                tL = {
                    is_supported: function() {
                        if (!M(tM)) return tM;
                        if (tM = !0, $(r)) tM = !1;
                        else try {
                            var e = "__support__";
                            tL.set(e, "xyz"), '"xyz"' !== tL.get(e) && (tM = !1), tL.remove(e)
                        } catch (e) {
                            tM = !1
                        }
                        return tM
                    },
                    error: function(e) {
                        z.error("sessionStorage error: ", e)
                    },
                    get: function(e) {
                        try {
                            return null == r ? void 0 : r.sessionStorage.getItem(e)
                        } catch (e) {
                            tL.error(e)
                        }
                        return null
                    },
                    parse: function(e) {
                        try {
                            return JSON.parse(tL.get(e)) || null
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t) {
                        try {
                            null == r || r.sessionStorage.setItem(e, JSON.stringify(t))
                        } catch (e) {
                            tL.error(e)
                        }
                    },
                    remove: function(e) {
                        try {
                            null == r || r.sessionStorage.removeItem(e)
                        } catch (e) {
                            tL.error(e)
                        }
                    }
                };
            ! function(e) {
                e[e.PENDING = -1] = "PENDING", e[e.DENIED = 0] = "DENIED", e[e.GRANTED = 1] = "GRANTED"
            }(tk || (tk = {}));
            class tD {
                constructor(e) {
                    this.instance = e
                }
                get config() {
                    return this.instance.config
                }
                get consent() {
                    return this.getDnt() ? tk.DENIED : this.storedConsent
                }
                isOptedOut() {
                    return this.consent === tk.DENIED || this.consent === tk.PENDING && this.config.opt_out_capturing_by_default
                }
                isOptedIn() {
                    return !this.isOptedOut()
                }
                optInOut(e) {
                    this.storage.set(this.storageKey, +!!e, this.config.cookie_expiration, this.config.cross_subdomain_cookie, this.config.secure_cookie)
                }
                reset() {
                    this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie)
                }
                get storageKey() {
                    var {
                        token: e,
                        opt_out_capturing_cookie_prefix: t
                    } = this.instance.config;
                    return (t || "__ph_opt_in_out_") + e
                }
                get storedConsent() {
                    var e = this.storage.get(this.storageKey);
                    return "1" === e ? tk.GRANTED : "0" === e ? tk.DENIED : tk.PENDING
                }
                get storage() {
                    if (!this._storage) {
                        var e = this.config.opt_out_capturing_persistence_type;
                        this._storage = "localStorage" === e ? tR : tC;
                        var t = "localStorage" === e ? tC : tR;
                        t.get(this.storageKey) && (this._storage.get(this.storageKey) || this.optInOut("1" === t.get(this.storageKey)), t.remove(this.storageKey, this.config.cross_subdomain_cookie))
                    }
                    return this._storage
                }
                getDnt() {
                    return !!this.config.respect_dnt && !!ea([null == c ? void 0 : c.doNotTrack, null == c ? void 0 : c.msDoNotTrack, v.doNotTrack], e => w([!0, 1, "1", "yes"], e))
                }
            }
            var tq = j("[Dead Clicks]"),
                tN = () => !0,
                tB = e => {
                    var t, i = !(null === (t = e.instance.persistence) || void 0 === t || !t.get_property(ev)),
                        s = e.instance.config.capture_dead_clicks;
                    return q(s) ? s : i
                };
            class tH {
                get lazyLoadedDeadClicksAutocapture() {
                    return this._lazyLoadedDeadClicksAutocapture
                }
                constructor(e, t, i) {
                    this.instance = e, this.isEnabled = t, this.onCapture = i, this.startIfEnabled()
                }
                onRemoteConfig(e) {
                    this.instance.persistence && this.instance.persistence.register({
                        [ev]: null == e ? void 0 : e.captureDeadClicks
                    }), this.startIfEnabled()
                }
                startIfEnabled() {
                    this.isEnabled(this) && this.loadScript(() => {
                        this.start()
                    })
                }
                loadScript(e) {
                    var t, i, s;
                    null !== (t = v.__PosthogExtensions__) && void 0 !== t && t.initDeadClicksAutocapture && e(), null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.loadExternalDependency) || void 0 === s || s.call(i, this.instance, "dead-clicks-autocapture", t => {
                        t ? tq.error("failed to load script", t) : e()
                    })
                }
                start() {
                    var e;
                    if (u) {
                        if (!this._lazyLoadedDeadClicksAutocapture && null !== (e = v.__PosthogExtensions__) && void 0 !== e && e.initDeadClicksAutocapture) {
                            var t = R(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
                            t.__onCapture = this.onCapture, this._lazyLoadedDeadClicksAutocapture = v.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, t), this._lazyLoadedDeadClicksAutocapture.start(u), tq.info("starting...")
                        }
                    } else tq.error("`document` not found. Cannot start.")
                }
                stop() {
                    this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, tq.info("stopping..."))
                }
            }
            var tU = j("[ExceptionAutocapture]");
            class tz {
                constructor(e) {
                    var t;
                    Y(this, "startCapturing", () => {
                        var e, t, i, s;
                        if (r && this.isEnabled && !this.hasHandlers) {
                            var n = null === (e = v.__PosthogExtensions__) || void 0 === e || null === (t = e.errorWrappingFunctions) || void 0 === t ? void 0 : t.wrapOnError,
                                o = null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.errorWrappingFunctions) || void 0 === s ? void 0 : s.wrapUnhandledRejection;
                            if (n && o) try {
                                this.unwrapOnError = n(this.captureException.bind(this)), this.unwrapUnhandledRejection = o(this.captureException.bind(this))
                            } catch (e) {
                                tU.error("failed to start", e), this.stopCapturing()
                            } else tU.error("failed to load error wrapping functions - cannot start")
                        }
                    }), this.instance = e, this.remoteEnabled = !(null === (t = this.instance.persistence) || void 0 === t || !t.props[ep]), this.startIfEnabled()
                }
                get isEnabled() {
                    var e;
                    return q(this.instance.config.capture_exceptions) ? this.instance.config.capture_exceptions : null !== (e = this.remoteEnabled) && void 0 !== e && e
                }
                get hasHandlers() {
                    return !$(this.unwrapOnError)
                }
                startIfEnabled() {
                    this.isEnabled && !this.hasHandlers && (tU.info("enabled, starting..."), this.loadScript(this.startCapturing))
                }
                loadScript(e) {
                    var t, i;
                    this.hasHandlers && e(), null === (t = v.__PosthogExtensions__) || void 0 === t || null === (i = t.loadExternalDependency) || void 0 === i || i.call(t, this.instance, "exception-autocapture", t => {
                        if (t) return tU.error("failed to load script", t);
                        e()
                    })
                }
                stopCapturing() {
                    var e, t;
                    null === (e = this.unwrapOnError) || void 0 === e || e.call(this), this.unwrapOnError = void 0, null === (t = this.unwrapUnhandledRejection) || void 0 === t || t.call(this), this.unwrapUnhandledRejection = void 0
                }
                onRemoteConfig(e) {
                    var t = e.autocaptureExceptions;
                    this.remoteEnabled = !!t, this.instance.persistence && this.instance.persistence.register({
                        [ep]: this.remoteEnabled
                    }), this.startIfEnabled()
                }
                captureException(e) {
                    var t = this.instance.requestRouter.endpointFor("ui");
                    e.$exception_personURL = "".concat(t, "/project/").concat(this.instance.config.token, "/person/").concat(this.instance.get_distinct_id()), this.instance.exceptions.sendExceptionEvent(e)
                }
            }

            function tj(e) {
                var t, i;
                return (null === (t = JSON.stringify(e, (i = [], function(e, t) {
                    if (R(t)) {
                        for (; i.length > 0 && i[i.length - 1] !== this;) i.pop();
                        return i.includes(t) ? "[Circular]" : (i.push(t), t)
                    }
                    return t
                }))) || void 0 === t ? void 0 : t.length) || 0
            }
            var tW = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e))(tW || {}),
                tV = (e => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e[e.CustomElement = 16] = "CustomElement", e))(tV || {}),
                tG = "[SessionRecording]",
                tJ = "redacted",
                tY = {
                    initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
                    maskRequestFn: e => e,
                    recordHeaders: !1,
                    recordBody: !1,
                    recordInitialRequests: !1,
                    recordPerformance: !1,
                    performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
                    payloadSizeLimitBytes: 1e6,
                    payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "analytics.google.com"]
                },
                tK = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
                tQ = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
                tX = ["/s/", "/e/", "/i/"];

            function tZ(e, t, i, s) {
                if (L(e)) return e;
                var r = (null == t ? void 0 : t["content-length"]) || new Blob([e]).size;
                return A(r) && (r = parseInt(r)), r > i ? tG + " ".concat(s, " body too large to record (").concat(r, " bytes)") : e
            }

            function t0(e, t) {
                if (L(e)) return e;
                var i = e;
                return tr(i, !1) || (i = tG + " " + t + " body " + tJ), Z(tQ, e => {
                    var s, r;
                    null !== (s = i) && void 0 !== s && s.length && -1 !== (null === (r = i) || void 0 === r ? void 0 : r.indexOf(e)) && (i = tG + " " + t + " body " + tJ + " as might contain: " + e)
                }), i
            }
            var t1 = (e, t) => {
                var i, s, r = {
                        payloadSizeLimitBytes: tY.payloadSizeLimitBytes,
                        performanceEntryTypeToObserve: [...tY.performanceEntryTypeToObserve],
                        payloadHostDenyList: [...t.payloadHostDenyList || [], ...tY.payloadHostDenyList]
                    },
                    n = !1 !== e.session_recording.recordHeaders && t.recordHeaders,
                    o = !1 !== e.session_recording.recordBody && t.recordBody,
                    a = !1 !== e.capture_performance && t.recordPerformance,
                    l = (s = Math.min(1e6, null !== (i = r.payloadSizeLimitBytes) && void 0 !== i ? i : 1e6), e => (null != e && e.requestBody && (e.requestBody = tZ(e.requestBody, e.requestHeaders, s, "Request")), null != e && e.responseBody && (e.responseBody = tZ(e.responseBody, e.responseHeaders, s, "Response")), e)),
                    c = t => {
                        var i;
                        return l(((e, t) => {
                            var i, s = tc(e.name),
                                r = 0 === t.indexOf("http") ? null === (i = tc(t)) || void 0 === i ? void 0 : i.pathname : t;
                            "/" === r && (r = "");
                            var n = null == s ? void 0 : s.pathname.replace(r || "", "");
                            if (!(s && n && tX.some(e => 0 === n.indexOf(e)))) return e
                        })((L(i = t.requestHeaders) || Z(Object.keys(null != i ? i : {}), e => {
                            tK.includes(e.toLowerCase()) && (i[e] = tJ)
                        }), t), e.api_host))
                    },
                    u = F(e.session_recording.maskNetworkRequestFn);
                return u && F(e.session_recording.maskCapturedNetworkRequestFn) && z.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), u && (e.session_recording.maskCapturedNetworkRequestFn = t => {
                    var i = e.session_recording.maskNetworkRequestFn({
                        url: t.name
                    });
                    return J(J({}, t), {}, {
                        name: null == i ? void 0 : i.url
                    })
                }), r.maskRequestFn = F(e.session_recording.maskCapturedNetworkRequestFn) ? t => {
                    var i, s, r, n = c(t);
                    return n && null !== (i = null === (s = (r = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === s ? void 0 : s.call(r, n)) && void 0 !== i ? i : void 0
                } : e => (function(e) {
                    if (!$(e)) return e.requestBody = t0(e.requestBody, "Request"), e.responseBody = t0(e.responseBody, "Response"), e
                })(c(e)), J(J(J({}, tY), r), {}, {
                    recordHeaders: n,
                    recordBody: o,
                    recordPerformance: a,
                    recordInitialRequests: a
                })
            };

            function t2(e, t, i, s, r) {
                return t > i && (z.warn("min cannot be greater than max."), t = i), D(e) ? e > i ? (s && z.warn(s + " cannot be  greater than max: " + i + ". Using max value instead."), i) : e < t ? (s && z.warn(s + " cannot be less than min: " + t + ". Using min value instead."), t) : e : (s && z.warn(s + " must be a number. using max or fallback. max: " + i + ", fallback: " + r), t2(r || i, t, i, s))
            }
            class t3 {
                constructor(e) {
                    var t, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Y(this, "bucketSize", 100), Y(this, "refillRate", 10), Y(this, "mutationBuckets", {}), Y(this, "loggedTracker", {}), Y(this, "refillBuckets", () => {
                        Object.keys(this.mutationBuckets).forEach(e => {
                            this.mutationBuckets[e] = this.mutationBuckets[e] + this.refillRate, this.mutationBuckets[e] >= this.bucketSize && delete this.mutationBuckets[e]
                        })
                    }), Y(this, "getNodeOrRelevantParent", e => {
                        var t = this.rrweb.mirror.getNode(e);
                        if ("svg" !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
                            var i = t.closest("svg");
                            if (i) return [this.rrweb.mirror.getId(i), i]
                        }
                        return [e, t]
                    }), Y(this, "numberOfChanges", e => {
                        var t, i, s, r, n, o, a, l;
                        return (null !== (t = null === (i = e.removes) || void 0 === i ? void 0 : i.length) && void 0 !== t ? t : 0) + (null !== (s = null === (r = e.attributes) || void 0 === r ? void 0 : r.length) && void 0 !== s ? s : 0) + (null !== (n = null === (o = e.texts) || void 0 === o ? void 0 : o.length) && void 0 !== n ? n : 0) + (null !== (a = null === (l = e.adds) || void 0 === l ? void 0 : l.length) && void 0 !== a ? a : 0)
                    }), Y(this, "throttleMutations", e => {
                        if (3 !== e.type || 0 !== e.data.source) return e;
                        var t = e.data,
                            i = this.numberOfChanges(t);
                        t.attributes && (t.attributes = t.attributes.filter(e => {
                            var t, i, s, [r, n] = this.getNodeOrRelevantParent(e.id);
                            return 0 !== this.mutationBuckets[r] && (this.mutationBuckets[r] = null !== (t = this.mutationBuckets[r]) && void 0 !== t ? t : this.bucketSize, this.mutationBuckets[r] = Math.max(this.mutationBuckets[r] - 1, 0), 0 === this.mutationBuckets[r] && (this.loggedTracker[r] || (this.loggedTracker[r] = !0, null === (i = (s = this.options).onBlockedNode) || void 0 === i || i.call(s, r, n))), e)
                        }));
                        var s = this.numberOfChanges(t);
                        return 0 !== s || i === s ? e : void 0
                    }), this.rrweb = e, this.options = s, this.refillRate = t2(null !== (t = this.options.refillRate) && void 0 !== t ? t : this.refillRate, 0, 100, "mutation throttling refill rate"), this.bucketSize = t2(null !== (i = this.options.bucketSize) && void 0 !== i ? i : this.bucketSize, 0, 100, "mutation throttling bucket size"), setInterval(() => {
                        this.refillBuckets()
                    }, 1e3)
                }
            }
            var t5 = Uint8Array,
                t6 = Uint16Array,
                t8 = Uint32Array,
                t4 = new t5([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
                t7 = new t5([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
                t9 = new t5([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                ie = function(e, t) {
                    for (var i = new t6(31), s = 0; s < 31; ++s) i[s] = t += 1 << e[s - 1];
                    var r = new t8(i[30]);
                    for (s = 1; s < 30; ++s)
                        for (var n = i[s]; n < i[s + 1]; ++n) r[n] = n - i[s] << 5 | s;
                    return [i, r]
                },
                it = ie(t4, 2),
                ii = it[0],
                is = it[1];
            ii[28] = 258, is[258] = 28;
            for (var ir = ie(t7, 0)[1], io = new t6(32768), ia = 0; ia < 32768; ++ia) {
                var il = (43690 & ia) >>> 1 | (21845 & ia) << 1;
                il = (61680 & (il = (52428 & il) >>> 2 | (13107 & il) << 2)) >>> 4 | (3855 & il) << 4, io[ia] = ((65280 & il) >>> 8 | (255 & il) << 8) >>> 1
            }
            var ic = function(e, t, i) {
                    for (var s = e.length, r = 0, n = new t6(t); r < s; ++r) ++n[e[r] - 1];
                    var o, a = new t6(t);
                    for (r = 0; r < t; ++r) a[r] = a[r - 1] + n[r - 1] << 1;
                    if (i) {
                        o = new t6(1 << t);
                        var l = 15 - t;
                        for (r = 0; r < s; ++r)
                            if (e[r])
                                for (var c = r << 4 | e[r], u = t - e[r], d = a[e[r] - 1]++ << u, h = d | (1 << u) - 1; d <= h; ++d) o[io[d] >>> l] = c
                    } else
                        for (o = new t6(s), r = 0; r < s; ++r) o[r] = io[a[e[r] - 1]++] >>> 15 - e[r];
                    return o
                },
                iu = new t5(288);
            for (ia = 0; ia < 144; ++ia) iu[ia] = 8;
            for (ia = 144; ia < 256; ++ia) iu[ia] = 9;
            for (ia = 256; ia < 280; ++ia) iu[ia] = 7;
            for (ia = 280; ia < 288; ++ia) iu[ia] = 8;
            var id = new t5(32);
            for (ia = 0; ia < 32; ++ia) id[ia] = 5;
            var ih = ic(iu, 9, 0),
                i_ = ic(id, 5, 0),
                ip = function(e) {
                    return (e / 8 >> 0) + (7 & e && 1)
                },
                ig = function(e, t, i) {
                    (null == i || i > e.length) && (i = e.length);
                    var s = new(e instanceof t6 ? t6 : e instanceof t8 ? t8 : t5)(i - t);
                    return s.set(e.subarray(t, i)), s
                },
                iv = function(e, t, i) {
                    i <<= 7 & t;
                    var s = t / 8 >> 0;
                    e[s] |= i, e[s + 1] |= i >>> 8
                },
                im = function(e, t, i) {
                    i <<= 7 & t;
                    var s = t / 8 >> 0;
                    e[s] |= i, e[s + 1] |= i >>> 8, e[s + 2] |= i >>> 16
                },
                iy = function(e, t) {
                    for (var i = [], s = 0; s < e.length; ++s) e[s] && i.push({
                        s: s,
                        f: e[s]
                    });
                    var r = i.length,
                        n = i.slice();
                    if (!r) return [new t5(0), 0];
                    if (1 == r) {
                        var o = new t5(i[0].s + 1);
                        return o[i[0].s] = 1, [o, 1]
                    }
                    i.sort(function(e, t) {
                        return e.f - t.f
                    }), i.push({
                        s: -1,
                        f: 25001
                    });
                    var a = i[0],
                        l = i[1],
                        c = 0,
                        u = 1,
                        d = 2;
                    for (i[0] = {
                            s: -1,
                            f: a.f + l.f,
                            l: a,
                            r: l
                        }; u != r - 1;) a = i[i[c].f < i[d].f ? c++ : d++], l = i[c != u && i[c].f < i[d].f ? c++ : d++], i[u++] = {
                        s: -1,
                        f: a.f + l.f,
                        l: a,
                        r: l
                    };
                    var h = n[0].s;
                    for (s = 1; s < r; ++s) n[s].s > h && (h = n[s].s);
                    var _ = new t6(h + 1),
                        p = ib(i[u - 1], _, 0);
                    if (p > t) {
                        s = 0;
                        var g = 0,
                            v = p - t,
                            f = 1 << v;
                        for (n.sort(function(e, t) {
                                return _[t.s] - _[e.s] || e.f - t.f
                            }); s < r; ++s) {
                            var m = n[s].s;
                            if (!(_[m] > t)) break;
                            g += f - (1 << p - _[m]), _[m] = t
                        }
                        for (g >>>= v; g > 0;) {
                            var y = n[s].s;
                            _[y] < t ? g -= 1 << t - _[y]++ - 1 : ++s
                        }
                        for (; s >= 0 && g; --s) {
                            var b = n[s].s;
                            _[b] == t && (--_[b], ++g)
                        }
                        p = t
                    }
                    return [new t5(_), p]
                },
                ib = function(e, t, i) {
                    return -1 == e.s ? Math.max(ib(e.l, t, i + 1), ib(e.r, t, i + 1)) : t[e.s] = i
                },
                iw = function(e) {
                    for (var t = e.length; t && !e[--t];);
                    for (var i = new t6(++t), s = 0, r = e[0], n = 1, o = function(e) {
                            i[s++] = e
                        }, a = 1; a <= t; ++a)
                        if (e[a] == r && a != t) ++n;
                        else {
                            if (!r && n > 2) {
                                for (; n > 138; n -= 138) o(32754);
                                n > 2 && (o(n > 10 ? n - 11 << 5 | 28690 : n - 3 << 5 | 12305), n = 0)
                            } else if (n > 3) {
                                for (o(r), --n; n > 6; n -= 6) o(8304);
                                n > 2 && (o(n - 3 << 5 | 8208), n = 0)
                            }
                            for (; n--;) o(r);
                            n = 1, r = e[a]
                        }
                    return [i.subarray(0, s), t]
                },
                iS = function(e, t) {
                    for (var i = 0, s = 0; s < t.length; ++s) i += e[s] * t[s];
                    return i
                },
                ik = function(e, t, i) {
                    var s = i.length,
                        r = ip(t + 2);
                    e[r] = 255 & s, e[r + 1] = s >>> 8, e[r + 2] = 255 ^ e[r], e[r + 3] = 255 ^ e[r + 1];
                    for (var n = 0; n < s; ++n) e[r + n + 4] = i[n];
                    return 8 * (r + 4 + s)
                },
                iE = function(e, t, i, s, r, n, o, a, l, c, u) {
                    iv(t, u++, i), ++r[256];
                    for (var d = iy(r, 15), h = d[0], _ = d[1], p = iy(n, 15), g = p[0], v = p[1], f = iw(h), m = f[0], y = f[1], b = iw(g), w = b[0], S = b[1], k = new t6(19), E = 0; E < m.length; ++E) k[31 & m[E]]++;
                    for (E = 0; E < w.length; ++E) k[31 & w[E]]++;
                    for (var x = iy(k, 7), I = x[0], P = x[1], C = 19; C > 4 && !I[t9[C - 1]]; --C);
                    var F, R, T, $, A = c + 5 << 3,
                        O = iS(r, iu) + iS(n, id) + o,
                        M = iS(r, h) + iS(n, g) + o + 14 + 3 * C + iS(k, I) + (2 * k[16] + 3 * k[17] + 7 * k[18]);
                    if (A <= O && A <= M) return ik(t, u, e.subarray(l, l + c));
                    if (iv(t, u, 1 + (M < O)), u += 2, M < O) {
                        F = ic(h, _, 0), R = h, T = ic(g, v, 0), $ = g;
                        var L = ic(I, P, 0);
                        for (iv(t, u, y - 257), iv(t, u + 5, S - 1), iv(t, u + 10, C - 4), u += 14, E = 0; E < C; ++E) iv(t, u + 3 * E, I[t9[E]]);
                        u += 3 * C;
                        for (var D = [m, w], q = 0; q < 2; ++q) {
                            var N = D[q];
                            for (E = 0; E < N.length; ++E) {
                                var B = 31 & N[E];
                                iv(t, u, L[B]), u += I[B], B > 15 && (iv(t, u, N[E] >>> 5 & 127), u += N[E] >>> 12)
                            }
                        }
                    } else F = ih, R = iu, T = i_, $ = id;
                    for (E = 0; E < a; ++E)
                        if (s[E] > 255) {
                            im(t, u, F[(B = s[E] >>> 18 & 31) + 257]), u += R[B + 257], B > 7 && (iv(t, u, s[E] >>> 23 & 31), u += t4[B]);
                            var H = 31 & s[E];
                            im(t, u, T[H]), u += $[H], H > 3 && (im(t, u, s[E] >>> 5 & 8191), u += t7[H])
                        } else im(t, u, F[s[E]]), u += R[s[E]];
                    return im(t, u, F[256]), u + R[256]
                },
                ix = new t8([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
                iI = function() {
                    for (var e = new t8(256), t = 0; t < 256; ++t) {
                        for (var i = t, s = 9; --s;) i = (1 & i && 0xedb88320) ^ i >>> 1;
                        e[t] = i
                    }
                    return e
                }(),
                iP = function() {
                    var e = 0xffffffff;
                    return {
                        p: function(t) {
                            for (var i = e, s = 0; s < t.length; ++s) i = iI[255 & i ^ t[s]] ^ i >>> 8;
                            e = i
                        },
                        d: function() {
                            return 0xffffffff ^ e
                        }
                    }
                },
                iC = function(e, t, i) {
                    for (; i; ++t) e[t] = i, i >>>= 8
                },
                iF = function(e, t) {
                    var i = t.filename;
                    if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : 2 * (9 == t.level), e[9] = 3, 0 != t.mtime && iC(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), i) {
                        e[3] = 8;
                        for (var s = 0; s <= i.length; ++s) e[s + 10] = i.charCodeAt(s)
                    }
                };

            function iR(e, t) {
                void 0 === t && (t = {});
                var i, s, r, n = iP(),
                    o = e.length;
                n.p(e);
                var a = (s = t, r = 10 + ((i = t).filename && i.filename.length + 1 || 0), function(e, t, i, s, r, n) {
                        var o = e.length,
                            a = new t5(s + o + 5 * (1 + Math.floor(o / 7e3)) + 8),
                            l = a.subarray(s, a.length - r),
                            c = 0;
                        if (!t || o < 8)
                            for (var u = 0; u <= o; u += 65535) {
                                var d = u + 65535;
                                d < o ? c = ik(l, c, e.subarray(u, d)) : (l[u] = n, c = ik(l, c, e.subarray(u, o)))
                            } else {
                                for (var h = ix[t - 1], _ = h >>> 13, p = 8191 & h, g = (1 << i) - 1, v = new t6(32768), f = new t6(g + 1), m = Math.ceil(i / 3), y = 2 * m, b = function(t) {
                                        return (e[t] ^ e[t + 1] << m ^ e[t + 2] << y) & g
                                    }, w = new t8(25e3), S = new t6(288), k = new t6(32), E = 0, x = 0, I = (u = 0, 0), P = 0, C = 0; u < o; ++u) {
                                    var F = b(u),
                                        R = 32767 & u,
                                        T = f[F];
                                    if (v[R] = T, f[F] = R, P <= u) {
                                        var $ = o - u;
                                        if ((E > 7e3 || I > 24576) && $ > 423) {
                                            c = iE(e, l, 0, w, S, k, x, I, C, u - C, c), I = E = x = 0, C = u;
                                            for (var A = 0; A < 286; ++A) S[A] = 0;
                                            for (A = 0; A < 30; ++A) k[A] = 0
                                        }
                                        var O = 2,
                                            M = 0,
                                            L = p,
                                            D = R - T & 32767;
                                        if ($ > 2 && F == b(u - D))
                                            for (var q = Math.min(_, $) - 1, N = Math.min(32767, u), B = Math.min(258, $); D <= N && --L && R != T;) {
                                                if (e[u + O] == e[u + O - D]) {
                                                    for (var H = 0; H < B && e[u + H] == e[u + H - D]; ++H);
                                                    if (H > O) {
                                                        if (O = H, M = D, H > q) break;
                                                        var U = Math.min(D, H - 2),
                                                            z = 0;
                                                        for (A = 0; A < U; ++A) {
                                                            var j = u - D + A + 32768 & 32767,
                                                                W = j - v[j] + 32768 & 32767;
                                                            W > z && (z = W, T = j)
                                                        }
                                                    }
                                                }
                                                D += (R = T) - (T = v[R]) + 32768 & 32767
                                            }
                                        if (M) {
                                            w[I++] = 0x10000000 | is[O] << 18 | ir[M];
                                            var V = 31 & is[O],
                                                G = 31 & ir[M];
                                            x += t4[V] + t7[G], ++S[257 + V], ++k[G], P = u + O, ++E
                                        } else w[I++] = e[u], ++S[e[u]]
                                    }
                                }
                                c = iE(e, l, n, w, S, k, x, I, C, u - C, c)
                            }
                        return ig(a, 0, s + ip(c) + r)
                    }(e, null == s.level ? 6 : s.level, null == s.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + s.mem, r, 8, !0)),
                    l = a.length;
                return iF(a, t), iC(a, l - 8, n.d()), iC(a, l - 4, o), a
            }

            function iT(e, t) {
                var i = e.length;
                if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
                for (var s = new t5(e.length + (e.length >>> 1)), r = 0, n = function(e) {
                        s[r++] = e
                    }, o = 0; o < i; ++o) {
                    if (r + 5 > s.length) {
                        var a = new t5(r + 8 + (i - o << 1));
                        a.set(s), s = a
                    }
                    var l = e.charCodeAt(o);
                    l < 128 || t ? n(l) : (l < 2048 ? n(192 | l >>> 6) : (l > 55295 && l < 57344 ? (n(240 | (l = 65536 + (1047552 & l) | 1023 & e.charCodeAt(++o)) >>> 18), n(128 | l >>> 12 & 63)) : n(224 | l >>> 12), n(128 | l >>> 6 & 63)), n(128 | 63 & l))
                }
                return ig(s, 0, r)
            }
            var i$ = "[SessionRecording]",
                iA = j(i$),
                iO = [tV.MouseMove, tV.MouseInteraction, tV.Scroll, tV.ViewportResize, tV.Input, tV.TouchMove, tV.MediaInteraction, tV.Drag],
                iM = e => ({
                    rrwebMethod: e,
                    enqueuedAt: Date.now(),
                    attempt: 1
                });

            function iL(e) {
                return function(e, t) {
                    for (var i = "", s = 0; s < e.length;) {
                        var r = e[s++];
                        r < 128 || t ? i += String.fromCharCode(r) : r < 224 ? i += String.fromCharCode((31 & r) << 6 | 63 & e[s++]) : r < 240 ? i += String.fromCharCode((15 & r) << 12 | (63 & e[s++]) << 6 | 63 & e[s++]) : i += String.fromCharCode(55296 | (r = ((15 & r) << 18 | (63 & e[s++]) << 12 | (63 & e[s++]) << 6 | 63 & e[s++]) - 65536) >> 10, 56320 | 1023 & r)
                    }
                    return i
                }(iR(iT(JSON.stringify(e))), !0)
            }

            function iD(e) {
                return e.type === tW.Custom && "sessionIdle" === e.data.tag
            }

            function iq(e, t) {
                return t.some(t => "regex" === t.matching && new RegExp(t.url).test(e))
            }
            class iN {
                get sessionIdleThresholdMilliseconds() {
                    return this.instance.config.session_recording.session_idle_threshold_ms || 3e5
                }
                get rrwebRecord() {
                    var e, t;
                    return null == v || null === (e = v.__PosthogExtensions__) || void 0 === e || null === (t = e.rrweb) || void 0 === t ? void 0 : t.record
                }
                get started() {
                    return this._captureStarted
                }
                get sessionManager() {
                    if (!this.instance.sessionManager) throw Error(i$ + " must be started with a valid sessionManager.");
                    return this.instance.sessionManager
                }
                get fullSnapshotIntervalMillis() {
                    var e, t;
                    return "trigger_pending" === this.triggerStatus ? 6e4 : null !== (e = null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.full_snapshot_interval_millis) && void 0 !== e ? e : 3e5
                }
                get isSampled() {
                    var e = this.instance.get_property(eP);
                    return q(e) ? e : null
                }
                get sessionDuration() {
                    var e, t, i = null === (e = this.buffer) || void 0 === e ? void 0 : e.data[(null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) - 1],
                        {
                            sessionStartTimestamp: s
                        } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
                    return i ? i.timestamp - s : null
                }
                get isRecordingEnabled() {
                    var e = !!this.instance.get_property(em),
                        t = !this.instance.config.disable_session_recording;
                    return r && e && t
                }
                get isConsoleLogCaptureEnabled() {
                    var e = !!this.instance.get_property(ey),
                        t = this.instance.config.enable_recording_console_log;
                    return null != t ? t : e
                }
                get canvasRecording() {
                    var e, t, i, s, r, n, o = this.instance.config.session_recording.captureCanvas,
                        a = this.instance.get_property(eS),
                        l = null !== (e = null !== (t = null == o ? void 0 : o.recordCanvas) && void 0 !== t ? t : null == a ? void 0 : a.enabled) && void 0 !== e && e,
                        c = null !== (i = null !== (s = null == o ? void 0 : o.canvasFps) && void 0 !== s ? s : null == a ? void 0 : a.fps) && void 0 !== i ? i : 4,
                        u = null !== (r = null !== (n = null == o ? void 0 : o.canvasQuality) && void 0 !== n ? n : null == a ? void 0 : a.quality) && void 0 !== r ? r : .4;
                    if ("string" == typeof u) {
                        var d = parseFloat(u);
                        u = isNaN(d) ? .4 : d
                    }
                    return {
                        enabled: l,
                        fps: t2(c, 0, 12, "canvas recording fps", 4),
                        quality: t2(u, 0, 1, "canvas recording quality", .4)
                    }
                }
                get networkPayloadCapture() {
                    var e, t, i = this.instance.get_property(eb),
                        s = {
                            recordHeaders: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
                            recordBody: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.recordBody
                        },
                        r = (null == s ? void 0 : s.recordHeaders) || (null == i ? void 0 : i.recordHeaders),
                        n = (null == s ? void 0 : s.recordBody) || (null == i ? void 0 : i.recordBody),
                        o = R(this.instance.config.capture_performance) ? this.instance.config.capture_performance.network_timing : this.instance.config.capture_performance,
                        a = !!(q(o) ? o : null == i ? void 0 : i.capturePerformance);
                    return r || n || a ? {
                        recordHeaders: r,
                        recordBody: n,
                        recordPerformance: a
                    } : void 0
                }
                get masking() {
                    var e, t, i, s, r, n, o = this.instance.get_property(ew),
                        a = {
                            maskAllInputs: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.maskAllInputs,
                            maskTextSelector: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.maskTextSelector,
                            blockSelector: null === (i = this.instance.config.session_recording) || void 0 === i ? void 0 : i.blockSelector
                        },
                        l = null !== (s = null == a ? void 0 : a.maskAllInputs) && void 0 !== s ? s : null == o ? void 0 : o.maskAllInputs,
                        c = null !== (r = null == a ? void 0 : a.maskTextSelector) && void 0 !== r ? r : null == o ? void 0 : o.maskTextSelector,
                        u = null !== (n = null == a ? void 0 : a.blockSelector) && void 0 !== n ? n : null == o ? void 0 : o.blockSelector;
                    return $(l) && $(c) && $(u) ? void 0 : {
                        maskAllInputs: null == l || l,
                        maskTextSelector: c,
                        blockSelector: u
                    }
                }
                get sampleRate() {
                    var e = this.instance.get_property(ek);
                    return D(e) ? e : null
                }
                get minimumDuration() {
                    var e = this.instance.get_property(eE);
                    return D(e) ? e : null
                }
                get status() {
                    return this.receivedDecide ? this.isRecordingEnabled ? !1 === this.isSampled ? "disabled" : this._urlBlocked ? "paused" : L(this._linkedFlag) || this._linkedFlagSeen ? "trigger_pending" === this.triggerStatus ? "buffering" : q(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering"
                }
                get urlTriggerStatus() {
                    var e;
                    return 0 === this._urlTriggers.length ? "trigger_disabled" : (null === (e = this.instance) || void 0 === e ? void 0 : e.get_property(eC)) === this.sessionId ? "trigger_activated" : "trigger_pending"
                }
                get eventTriggerStatus() {
                    var e;
                    return 0 === this._eventTriggers.length ? "trigger_disabled" : (null === (e = this.instance) || void 0 === e ? void 0 : e.get_property(eF)) === this.sessionId ? "trigger_activated" : "trigger_pending"
                }
                get triggerStatus() {
                    var e = "trigger_activated" === this.eventTriggerStatus || "trigger_activated" === this.urlTriggerStatus,
                        t = "trigger_pending" === this.eventTriggerStatus || "trigger_pending" === this.urlTriggerStatus;
                    return e ? "trigger_activated" : t ? "trigger_pending" : "trigger_disabled"
                }
                constructor(e) {
                    if (Y(this, "queuedRRWebEvents", []), Y(this, "isIdle", !1), Y(this, "_linkedFlagSeen", !1), Y(this, "_lastActivityTimestamp", Date.now()), Y(this, "_linkedFlag", null), Y(this, "_removePageViewCaptureHook", void 0), Y(this, "_onSessionIdListener", void 0), Y(this, "_persistDecideOnSessionListener", void 0), Y(this, "_samplingSessionListener", void 0), Y(this, "_urlTriggers", []), Y(this, "_urlBlocklist", []), Y(this, "_urlBlocked", !1), Y(this, "_eventTriggers", []), Y(this, "_removeEventTriggerCaptureHook", void 0), Y(this, "_forceAllowLocalhostNetworkCapture", !1), Y(this, "_onBeforeUnload", () => {
                            this._flushBuffer()
                        }), Y(this, "_onOffline", () => {
                            this._tryAddCustomEvent("browser offline", {})
                        }), Y(this, "_onOnline", () => {
                            this._tryAddCustomEvent("browser online", {})
                        }), Y(this, "_onVisibilityChange", () => {
                            if (null != u && u.visibilityState) {
                                var e = "window " + u.visibilityState;
                                this._tryAddCustomEvent(e, {})
                            }
                        }), this.instance = e, this._captureStarted = !1, this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = !1, !this.instance.sessionManager) throw iA.error("started without valid sessionManager"), Error(i$ + " started without valid sessionManager. This is a bug.");
                    if (this.instance.config.__preview_experimental_cookieless_mode) throw Error(i$ + " cannot be used with __preview_experimental_cookieless_mode.");
                    var {
                        sessionId: t,
                        windowId: i
                    } = this.sessionManager.checkAndGetSessionAndWindowId();
                    this.sessionId = t, this.windowId = i, this.buffer = this.clearBuffer(), this.sessionIdleThresholdMilliseconds >= this.sessionManager.sessionTimeoutMs && iA.warn("session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds, ") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs, "). Session will never be detected as idle"))
                }
                startIfEnabledOrStop(e) {
                    this.isRecordingEnabled ? (this._startCapture(e), el(r, "beforeunload", this._onBeforeUnload), el(r, "offline", this._onOffline), el(r, "online", this._onOnline), el(r, "visibilitychange", this._onVisibilityChange), this._setupSampling(), this._addEventTriggerListener(), L(this._removePageViewCaptureHook) && (this._removePageViewCaptureHook = this.instance.on("eventCaptured", e => {
                        try {
                            if ("$pageview" === e.event) {
                                var t = null != e && e.properties.$current_url ? this._maskUrl(null == e ? void 0 : e.properties.$current_url) : "";
                                if (!t) return;
                                this._tryAddCustomEvent("$pageview", {
                                    href: t
                                })
                            }
                        } catch (e) {
                            iA.error("Could not add $pageview to rrweb session", e)
                        }
                    })), this._onSessionIdListener || (this._onSessionIdListener = this.sessionManager.onSessionId((e, t, i) => {
                        var s, r, n, o;
                        i && (this._tryAddCustomEvent("$session_id_change", {
                            sessionId: e,
                            windowId: t,
                            changeReason: i
                        }), null === (s = this.instance) || void 0 === s || null === (r = s.persistence) || void 0 === r || r.unregister(eF), null === (n = this.instance) || void 0 === n || null === (o = n.persistence) || void 0 === o || o.unregister(eC))
                    }))) : this.stopRecording()
                }
                stopRecording() {
                    var e, t, i, s;
                    this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this._captureStarted = !1, null == r || r.removeEventListener("beforeunload", this._onBeforeUnload), null == r || r.removeEventListener("offline", this._onOffline), null == r || r.removeEventListener("online", this._onOnline), null == r || r.removeEventListener("visibilitychange", this._onVisibilityChange), this.clearBuffer(), clearInterval(this._fullSnapshotTimer), null === (e = this._removePageViewCaptureHook) || void 0 === e || e.call(this), this._removePageViewCaptureHook = void 0, null === (t = this._removeEventTriggerCaptureHook) || void 0 === t || t.call(this), this._removeEventTriggerCaptureHook = void 0, null === (i = this._onSessionIdListener) || void 0 === i || i.call(this), this._onSessionIdListener = void 0, null === (s = this._samplingSessionListener) || void 0 === s || s.call(this), this._samplingSessionListener = void 0, iA.info("stopped"))
                }
                makeSamplingDecision(e) {
                    var t, i, s = this.sessionId !== e,
                        r = this.sampleRate;
                    if (D(r)) {
                        var n = this.isSampled,
                            o = s || !q(n),
                            a = o ? function(e) {
                                for (var t = 0, i = 0; i < e.length; i++) t = (t << 5) - t + e.charCodeAt(i) | 0;
                                return Math.abs(t)
                            }(e) % 100 < t2(100 * r, 0, 100) : n;
                        o && (a ? this._reportStarted("sampled") : iA.warn("Sample rate (".concat(r, ") has determined that this sessionId (").concat(e, ") will not be sent to the server.")), this._tryAddCustomEvent("samplingDecisionMade", {
                            sampleRate: r,
                            isSampled: a
                        })), null === (i = this.instance.persistence) || void 0 === i || i.register({
                            [eP]: a
                        })
                    } else null === (t = this.instance.persistence) || void 0 === t || t.register({
                        [eP]: null
                    })
                }
                onRemoteConfig(e) {
                    var t, i, s, r, n, o;
                    if (this._tryAddCustomEvent("$remote_config_received", e), this._persistRemoteConfig(e), this._linkedFlag = (null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.linkedFlag) || null, null !== (i = e.sessionRecording) && void 0 !== i && i.endpoint && (this._endpoint = null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.endpoint), this._setupSampling(), !L(this._linkedFlag) && !this._linkedFlagSeen) {
                        var a = A(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag,
                            l = A(this._linkedFlag) ? null : this._linkedFlag.variant;
                        this.instance.onFeatureFlags((e, t) => {
                            var i = R(t) && a in t,
                                s = l ? t[a] === l : i;
                            s && this._reportStarted("linked_flag_matched", {
                                linkedFlag: a,
                                linkedVariant: l
                            }), this._linkedFlagSeen = s
                        })
                    }
                    null !== (s = e.sessionRecording) && void 0 !== s && s.urlTriggers && (this._urlTriggers = e.sessionRecording.urlTriggers), null !== (r = e.sessionRecording) && void 0 !== r && r.urlBlocklist && (this._urlBlocklist = e.sessionRecording.urlBlocklist), null !== (n = e.sessionRecording) && void 0 !== n && n.eventTriggers && (this._eventTriggers = e.sessionRecording.eventTriggers), this.receivedDecide = !0, this.startIfEnabledOrStop()
                }
                _setupSampling() {
                    D(this.sampleRate) && L(this._samplingSessionListener) && (this._samplingSessionListener = this.sessionManager.onSessionId(e => {
                        this.makeSamplingDecision(e)
                    }))
                }
                _persistRemoteConfig(e) {
                    if (this.instance.persistence) {
                        var t, i = this.instance.persistence,
                            s = () => {
                                var t, s, r, n, o, a, l, c, u, d = null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.sampleRate,
                                    h = L(d) ? null : parseFloat(d),
                                    _ = null === (s = e.sessionRecording) || void 0 === s ? void 0 : s.minimumDurationMilliseconds;
                                i.register({
                                    [em]: !!e.sessionRecording,
                                    [ey]: null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.consoleLogRecordingEnabled,
                                    [eb]: J({
                                        capturePerformance: e.capturePerformance
                                    }, null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.networkPayloadCapture),
                                    [ew]: null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.masking,
                                    [eS]: {
                                        enabled: null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.recordCanvas,
                                        fps: null === (l = e.sessionRecording) || void 0 === l ? void 0 : l.canvasFps,
                                        quality: null === (c = e.sessionRecording) || void 0 === c ? void 0 : c.canvasQuality
                                    },
                                    [ek]: h,
                                    [eE]: $(_) ? null : _,
                                    [ex]: null === (u = e.sessionRecording) || void 0 === u ? void 0 : u.scriptConfig
                                })
                            };
                        s(), null === (t = this._persistDecideOnSessionListener) || void 0 === t || t.call(this), this._persistDecideOnSessionListener = this.sessionManager.onSessionId(s)
                    }
                }
                log(e) {
                    var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
                    null === (t = this.instance.sessionRecording) || void 0 === t || t.onRRwebEmit({
                        type: 6,
                        data: {
                            plugin: "rrweb/console@1",
                            payload: {
                                level: i,
                                trace: [],
                                payload: [JSON.stringify(e)]
                            }
                        },
                        timestamp: Date.now()
                    })
                }
                _startCapture(e) {
                    if (!$(Object.assign) && !$(Array.from) && !(this._captureStarted || this.instance.config.disable_session_recording || this.instance.consent.isOptedOut())) {
                        var t, i;
                        (this._captureStarted = !0, this.sessionManager.checkAndGetSessionAndWindowId(), this.rrwebRecord) ? this._onScriptLoaded(): null === (t = v.__PosthogExtensions__) || void 0 === t || null === (i = t.loadExternalDependency) || void 0 === i || i.call(t, this.instance, this.scriptName, e => {
                            if (e) return iA.error("could not load recorder", e);
                            this._onScriptLoaded()
                        }), iA.info("starting"), "active" === this.status && this._reportStarted(e || "recording_initialized")
                    }
                }
                get scriptName() {
                    var e, t, i;
                    return (null === (e = this.instance) || void 0 === e || null === (t = e.persistence) || void 0 === t || null === (i = t.get_property(ex)) || void 0 === i ? void 0 : i.script) || "recorder"
                }
                isInteractiveEvent(e) {
                    var t;
                    return 3 === e.type && -1 !== iO.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source)
                }
                _updateWindowAndSessionIds(e) {
                    var t = this.isInteractiveEvent(e);
                    t || this.isIdle || e.timestamp - this._lastActivityTimestamp > this.sessionIdleThresholdMilliseconds && (this.isIdle = !0, clearInterval(this._fullSnapshotTimer), this._tryAddCustomEvent("sessionIdle", {
                        eventTimestamp: e.timestamp,
                        lastActivityTimestamp: this._lastActivityTimestamp,
                        threshold: this.sessionIdleThresholdMilliseconds,
                        bufferLength: this.buffer.data.length,
                        bufferSize: this.buffer.size
                    }), this._flushBuffer());
                    var i = !1;
                    if (t && (this._lastActivityTimestamp = e.timestamp, this.isIdle && (this.isIdle = !1, this._tryAddCustomEvent("sessionNoLongerIdle", {
                            reason: "user activity",
                            type: e.type
                        }), i = !0)), !this.isIdle) {
                        var {
                            windowId: s,
                            sessionId: r
                        } = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp), n = this.sessionId !== r, o = this.windowId !== s;
                        this.windowId = s, this.sessionId = r, n || o ? (this.stopRecording(), this.startIfEnabledOrStop("session_id_changed")) : i && this._scheduleFullSnapshot()
                    }
                }
                _tryRRWebMethod(e) {
                    try {
                        return e.rrwebMethod(), !0
                    } catch (t) {
                        return this.queuedRRWebEvents.length < 10 ? this.queuedRRWebEvents.push({
                            enqueuedAt: e.enqueuedAt || Date.now(),
                            attempt: e.attempt++,
                            rrwebMethod: e.rrwebMethod
                        }) : iA.warn("could not emit queued rrweb event.", t, e), !1
                    }
                }
                _tryAddCustomEvent(e, t) {
                    return this._tryRRWebMethod(iM(() => this.rrwebRecord.addCustomEvent(e, t)))
                }
                _tryTakeFullSnapshot() {
                    return this._tryRRWebMethod(iM(() => this.rrwebRecord.takeFullSnapshot()))
                }
                _onScriptLoaded() {
                    var e, t, i, s, r = {
                        blockClass: "ph-no-capture",
                        blockSelector: void 0,
                        ignoreClass: "ph-ignore-input",
                        maskTextClass: "ph-mask",
                        maskTextSelector: void 0,
                        maskTextFn: void 0,
                        maskAllInputs: !0,
                        maskInputOptions: {
                            password: !0
                        },
                        maskInputFn: void 0,
                        slimDOMOptions: {},
                        collectFonts: !1,
                        inlineStylesheet: !0,
                        recordCrossOriginIframes: !1
                    };
                    for (var [n, o] of Object.entries(this.instance.config.session_recording || {})) n in r && ("maskInputOptions" === n ? r.maskInputOptions = J({
                        password: !0
                    }, o) : r[n] = o);
                    if (this.canvasRecording && this.canvasRecording.enabled && (r.recordCanvas = !0, r.sampling = {
                            canvas: this.canvasRecording.fps
                        }, r.dataURLOptions = {
                            type: "image/webp",
                            quality: this.canvasRecording.quality
                        }), this.masking && (r.maskAllInputs = null === (t = this.masking.maskAllInputs) || void 0 === t || t, r.maskTextSelector = null !== (i = this.masking.maskTextSelector) && void 0 !== i ? i : void 0, r.blockSelector = null !== (s = this.masking.blockSelector) && void 0 !== s ? s : void 0), this.rrwebRecord) {
                        this.mutationRateLimiter = null !== (e = this.mutationRateLimiter) && void 0 !== e ? e : new t3(this.rrwebRecord, {
                            refillRate: this.instance.config.session_recording.__mutationRateLimiterRefillRate,
                            bucketSize: this.instance.config.session_recording.__mutationRateLimiterBucketSize,
                            onBlockedNode: (e, t) => {
                                var i = "Too many mutations on node '".concat(e, "'. Rate limiting. This could be due to SVG animations or something similar");
                                iA.info(i, {
                                    node: t
                                }), this.log(i$ + " " + i, "warn")
                            }
                        });
                        var a = this._gatherRRWebPlugins();
                        this.stopRrweb = this.rrwebRecord(J({
                            emit: e => {
                                this.onRRwebEmit(e)
                            },
                            plugins: a
                        }, r)), this._lastActivityTimestamp = Date.now(), this.isIdle = !1, this._tryAddCustomEvent("$session_options", {
                            sessionRecordingOptions: r,
                            activePlugins: a.map(e => null == e ? void 0 : e.name)
                        }), this._tryAddCustomEvent("$posthog_config", {
                            config: this.instance.config
                        })
                    } else iA.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")
                }
                _scheduleFullSnapshot() {
                    if (this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), !this.isIdle) {
                        var e = this.fullSnapshotIntervalMillis;
                        e && (this._fullSnapshotTimer = setInterval(() => {
                            this._tryTakeFullSnapshot()
                        }, e))
                    }
                }
                _gatherRRWebPlugins() {
                    var e, t, i, s, r = [],
                        n = null === (e = v.__PosthogExtensions__) || void 0 === e || null === (t = e.rrwebPlugins) || void 0 === t ? void 0 : t.getRecordConsolePlugin;
                    n && this.isConsoleLogCaptureEnabled && r.push(n());
                    var o = null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.rrwebPlugins) || void 0 === s ? void 0 : s.getRecordNetworkPlugin;
                    return this.networkPayloadCapture && F(o) && (!tl.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? r.push(o(t1(this.instance.config, this.networkPayloadCapture))) : iA.info("NetworkCapture not started because we are on localhost.")), r
                }
                onRRwebEmit(e) {
                    var t;
                    if (this._processQueuedEvents(), e && R(e)) {
                        if (e.type === tW.Meta) {
                            var i = this._maskUrl(e.data.href);
                            if (this._lastHref = i, !i) return;
                            e.data.href = i
                        } else this._pageViewFallBack();
                        if (this._checkUrlTriggerConditions(), !this._urlBlocked || e.type === tW.Custom && "recording paused" === e.data.tag) {
                            e.type === tW.FullSnapshot && this._scheduleFullSnapshot(), e.type === tW.FullSnapshot && "trigger_pending" === this.triggerStatus && this.clearBuffer();
                            var s = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
                            if (s) {
                                var r = function(e) {
                                    if (e && R(e) && 6 === e.type && R(e.data) && "rrweb/console@1" === e.data.plugin) {
                                        e.data.payload.payload.length > 10 && (e.data.payload.payload = e.data.payload.payload.slice(0, 10), e.data.payload.payload.push("...[truncated]"));
                                        for (var t = [], i = 0; i < e.data.payload.payload.length; i++) e.data.payload.payload[i] && e.data.payload.payload[i].length > 2e3 ? t.push(e.data.payload.payload[i].slice(0, 2e3) + "...[truncated]") : t.push(e.data.payload.payload[i]);
                                        return e.data.payload.payload = t, e
                                    }
                                    return e
                                }(s);
                                if (this._updateWindowAndSessionIds(r), !this.isIdle || iD(r)) {
                                    if (iD(r)) {
                                        var n = r.data.payload;
                                        n && (r.timestamp = n.lastActivityTimestamp + n.threshold)
                                    }
                                    var o = null === (t = this.instance.config.session_recording.compress_events) || void 0 === t || t ? function(e) {
                                            if (1024 > tj(e)) return e;
                                            try {
                                                if (e.type === tW.FullSnapshot) return J(J({}, e), {}, {
                                                    data: iL(e.data),
                                                    cv: "2024-10"
                                                });
                                                if (e.type === tW.IncrementalSnapshot && e.data.source === tV.Mutation) return J(J({}, e), {}, {
                                                    cv: "2024-10",
                                                    data: J(J({}, e.data), {}, {
                                                        texts: iL(e.data.texts),
                                                        attributes: iL(e.data.attributes),
                                                        removes: iL(e.data.removes),
                                                        adds: iL(e.data.adds)
                                                    })
                                                });
                                                if (e.type === tW.IncrementalSnapshot && e.data.source === tV.StyleSheetRule) return J(J({}, e), {}, {
                                                    cv: "2024-10",
                                                    data: J(J({}, e.data), {}, {
                                                        adds: e.data.adds ? iL(e.data.adds) : void 0,
                                                        removes: e.data.removes ? iL(e.data.removes) : void 0
                                                    })
                                                })
                                            } catch (e) {
                                                iA.error("could not compress event - will use uncompressed event", e)
                                            }
                                            return e
                                        }(r) : r,
                                        a = {
                                            $snapshot_bytes: tj(o),
                                            $snapshot_data: o,
                                            $session_id: this.sessionId,
                                            $window_id: this.windowId
                                        };
                                    "disabled" !== this.status ? this._captureSnapshotBuffered(a) : this.clearBuffer()
                                }
                            }
                        }
                    }
                }
                _pageViewFallBack() {
                    if (!this.instance.config.capture_pageview && r) {
                        var e = this._maskUrl(r.location.href);
                        this._lastHref !== e && (this._tryAddCustomEvent("$url_changed", {
                            href: e
                        }), this._lastHref = e)
                    }
                }
                _processQueuedEvents() {
                    if (this.queuedRRWebEvents.length) {
                        var e = [...this.queuedRRWebEvents];
                        this.queuedRRWebEvents = [], e.forEach(e => {
                            Date.now() - e.enqueuedAt <= 2e3 && this._tryRRWebMethod(e)
                        })
                    }
                }
                _maskUrl(e) {
                    var t = this.instance.config.session_recording;
                    if (t.maskNetworkRequestFn) {
                        var i, s = {
                            url: e
                        };
                        return null === (i = s = t.maskNetworkRequestFn(s)) || void 0 === i ? void 0 : i.url
                    }
                    return e
                }
                clearBuffer() {
                    return this.buffer = {
                        size: 0,
                        data: [],
                        sessionId: this.sessionId,
                        windowId: this.windowId
                    }, this.buffer
                }
                _flushBuffer() {
                    this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
                    var e = this.minimumDuration,
                        t = this.sessionDuration,
                        i = D(t) && t >= 0,
                        s = D(e) && i && t < e;
                    return "buffering" === this.status || "paused" === this.status || "disabled" === this.status || s ? (this.flushBufferTimer = setTimeout(() => {
                        this._flushBuffer()
                    }, 2e3), this.buffer) : (this.buffer.data.length > 0 && (function e(t) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
                        if (t.size >= i && t.data.length > 1) {
                            var s = Math.floor(t.data.length / 2),
                                r = t.data.slice(0, s),
                                n = t.data.slice(s);
                            return [e({
                                size: tj(r),
                                data: r,
                                sessionId: t.sessionId,
                                windowId: t.windowId
                            }), e({
                                size: tj(n),
                                data: n,
                                sessionId: t.sessionId,
                                windowId: t.windowId
                            })].flatMap(e => e)
                        }
                        return [t]
                    })(this.buffer).forEach(e => {
                        this._captureSnapshot({
                            $snapshot_bytes: e.size,
                            $snapshot_data: e.data,
                            $session_id: e.sessionId,
                            $window_id: e.windowId,
                            $lib: "web",
                            $lib_version: f.LIB_VERSION
                        })
                    }), this.clearBuffer())
                }
                _captureSnapshotBuffered(e) {
                    var t, i = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0);
                    !this.isIdle && (this.buffer.size + e.$snapshot_bytes + i > 943718.4 || this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), this.buffer.size += e.$snapshot_bytes, this.buffer.data.push(e.$snapshot_data), this.flushBufferTimer || this.isIdle || (this.flushBufferTimer = setTimeout(() => {
                        this._flushBuffer()
                    }, 2e3))
                }
                _captureSnapshot(e) {
                    this.instance.capture("$snapshot", e, {
                        _url: this.instance.requestRouter.endpointFor("api", this._endpoint),
                        _noTruncate: !0,
                        _batchKey: "recordings",
                        skip_client_rate_limiting: !0
                    })
                }
                _checkUrlTriggerConditions() {
                    if (void 0 !== r && r.location.href) {
                        var e = r.location.href,
                            t = this._urlBlocked,
                            i = iq(e, this._urlBlocklist);
                        i && !t ? this._pauseRecording() : !i && t && this._resumeRecording(), iq(e, this._urlTriggers) && this._activateTrigger("url")
                    }
                }
                _activateTrigger(e) {
                    var t, i;
                    "trigger_pending" === this.triggerStatus && (null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i || i.register({
                        ["url" === e ? eC : eF]: this.sessionId
                    }), this._flushBuffer(), this._reportStarted(e + "_trigger_matched"))
                }
                _pauseRecording() {
                    this._urlBlocked || (this._urlBlocked = !0, clearInterval(this._fullSnapshotTimer), iA.info("recording paused due to URL blocker"), this._tryAddCustomEvent("recording paused", {
                        reason: "url blocker"
                    }))
                }
                _resumeRecording() {
                    this._urlBlocked && (this._urlBlocked = !1, this._tryTakeFullSnapshot(), this._scheduleFullSnapshot(), this._tryAddCustomEvent("recording resumed", {
                        reason: "left blocked url"
                    }), iA.info("recording resumed"))
                }
                _addEventTriggerListener() {
                    0 !== this._eventTriggers.length && L(this._removeEventTriggerCaptureHook) && (this._removeEventTriggerCaptureHook = this.instance.on("eventCaptured", e => {
                        try {
                            this._eventTriggers.includes(e.event) && this._activateTrigger("event")
                        } catch (e) {
                            iA.error("Could not activate event trigger", e)
                        }
                    }))
                }
                overrideLinkedFlag() {
                    this._linkedFlagSeen = !0, this._tryTakeFullSnapshot(), this._reportStarted("linked_flag_overridden")
                }
                overrideSampling() {
                    var e;
                    null === (e = this.instance.persistence) || void 0 === e || e.register({
                        [eP]: !0
                    }), this._tryTakeFullSnapshot(), this._reportStarted("sampling_overridden")
                }
                overrideTrigger(e) {
                    this._activateTrigger(e)
                }
                _reportStarted(e, t) {
                    this.instance.register_for_session({
                        $session_recording_start_reason: e
                    }), iA.info(e.replace("_", " "), t), w(["recording_initialized", "session_id_changed"], e) || this._tryAddCustomEvent(e, t)
                }
            }
            var iB = j("[SegmentIntegration]"),
                iH = "posthog-js";

            function iU(e) {
                var {
                    organization: t,
                    projectId: i,
                    prefix: s,
                    severityAllowList: r = ["error"]
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return n => {
                    if (!("*" === r || r.includes(n.level)) || !e.__loaded) return n;
                    n.tags || (n.tags = {});
                    var o, a, l, c, u, d = e.requestRouter.endpointFor("ui", "/project/".concat(e.config.token, "/person/").concat(e.get_distinct_id()));
                    n.tags["PostHog Person URL"] = d, e.sessionRecordingStarted() && (n.tags["PostHog Recording URL"] = e.get_session_replay_url({
                        withTimestamp: !0
                    }));
                    var h = (null === (o = n.exception) || void 0 === o ? void 0 : o.values) || [],
                        _ = h.map(e => J(J({}, e), {}, {
                            stacktrace: e.stacktrace ? J(J({}, e.stacktrace), {}, {
                                type: "raw",
                                frames: (e.stacktrace.frames || []).map(e => J(J({}, e), {}, {
                                    platform: "web:javascript"
                                }))
                            }) : void 0
                        })),
                        p = {
                            $exception_message: (null === (a = h[0]) || void 0 === a ? void 0 : a.value) || n.message,
                            $exception_type: null === (l = h[0]) || void 0 === l ? void 0 : l.type,
                            $exception_personURL: d,
                            $exception_level: n.level,
                            $exception_list: _,
                            $sentry_event_id: n.event_id,
                            $sentry_exception: n.exception,
                            $sentry_exception_message: (null === (c = h[0]) || void 0 === c ? void 0 : c.value) || n.message,
                            $sentry_exception_type: null === (u = h[0]) || void 0 === u ? void 0 : u.type,
                            $sentry_tags: n.tags
                        };
                    return t && i && (p.$sentry_url = (s || "https://sentry.io/organizations/") + t + "/issues/?project=" + i + "&query=" + n.event_id), e.exceptions.sendExceptionEvent(p), n
                }
            }
            class iz {
                constructor(e, t, i, s, r) {
                    this.name = iH, this.setupOnce = function(n) {
                        n(iU(e, {
                            organization: t,
                            projectId: i,
                            prefix: s,
                            severityAllowList: r
                        }))
                    }
                }
            }
            var ij, iW = null != r && r.location ? t_(r.location.hash, "__posthog") || t_(location.hash, "state") : null,
                iV = "_postHogToolbarParams",
                iG = j("[Toolbar]");
            ! function(e) {
                e[e.UNINITIALIZED = 0] = "UNINITIALIZED", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED"
            }(ij || (ij = {}));
            class iJ {
                constructor(e) {
                    this.instance = e
                }
                setToolbarState(e) {
                    v.ph_toolbar_state = e
                }
                getToolbarState() {
                    var e;
                    return null !== (e = v.ph_toolbar_state) && void 0 !== e ? e : ij.UNINITIALIZED
                }
                maybeLoadToolbar() {
                    var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    if (!r || !u) return !1;
                    i = null !== (e = i) && void 0 !== e ? e : r.location, n = null !== (t = n) && void 0 !== t ? t : r.history;
                    try {
                        if (!s) {
                            try {
                                r.localStorage.setItem("test", "test"), r.localStorage.removeItem("test")
                            } catch (e) {
                                return !1
                            }
                            s = null == r ? void 0 : r.localStorage
                        }
                        var o, a = iW || t_(i.hash, "__posthog") || t_(i.hash, "state"),
                            l = a ? es(() => JSON.parse(atob(decodeURIComponent(a)))) || es(() => JSON.parse(decodeURIComponent(a))) : null;
                        return l && "ph_authorize" === l.action ? ((o = l).source = "url", o && Object.keys(o).length > 0 && (l.desiredHash ? i.hash = l.desiredHash : n ? n.replaceState(n.state, "", i.pathname + i.search) : i.hash = "")) : ((o = JSON.parse(s.getItem(iV) || "{}")).source = "localstorage", delete o.userIntent), !(!o.token || this.instance.config.token !== o.token) && (this.loadToolbar(o), !0)
                    } catch (e) {
                        return !1
                    }
                }
                _callLoadToolbar(e) {
                    var t = v.ph_load_toolbar || v.ph_load_editor;
                    !L(t) && F(t) ? t(e, this.instance) : iG.warn("No toolbar load function found")
                }
                loadToolbar(e) {
                    var t, i, s = !(null == u || !u.getElementById(ej));
                    if (!r || s) return !1;
                    var n = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
                        o = J(J({
                            token: this.instance.config.token
                        }, e), {}, {
                            apiURL: this.instance.requestRouter.endpointFor("ui")
                        }, n ? {
                            instrument: !1
                        } : {});
                    return (r.localStorage.setItem(iV, JSON.stringify(J(J({}, o), {}, {
                        source: void 0
                    }))), this.getToolbarState() === ij.LOADED) ? this._callLoadToolbar(o) : this.getToolbarState() === ij.UNINITIALIZED && (this.setToolbarState(ij.LOADING), null === (t = v.__PosthogExtensions__) || void 0 === t || null === (i = t.loadExternalDependency) || void 0 === i || i.call(t, this.instance, "toolbar", e => {
                        if (e) return iG.error("[Toolbar] Failed to load", e), void this.setToolbarState(ij.UNINITIALIZED);
                        this.setToolbarState(ij.LOADED), this._callLoadToolbar(o)
                    }), el(r, "turbolinks:load", () => {
                        this.setToolbarState(ij.UNINITIALIZED), this.loadToolbar(o)
                    })), !0
                }
                _loadEditor(e) {
                    return this.loadToolbar(e)
                }
                maybeLoadEditor() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    return this.maybeLoadToolbar(e, t, i)
                }
            }
            var iY = j("[TracingHeaders]");
            class iK {
                constructor(e) {
                    Y(this, "_restoreXHRPatch", void 0), Y(this, "_restoreFetchPatch", void 0), Y(this, "_startCapturing", () => {
                        var e, t, i, s;
                        $(this._restoreXHRPatch) && (null === (e = v.__PosthogExtensions__) || void 0 === e || null === (t = e.tracingHeadersPatchFns) || void 0 === t || t._patchXHR(this.instance.sessionManager)), $(this._restoreFetchPatch) && (null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.tracingHeadersPatchFns) || void 0 === s || s._patchFetch(this.instance.sessionManager))
                    }), this.instance = e
                }
                _loadScript(e) {
                    var t, i, s;
                    null !== (t = v.__PosthogExtensions__) && void 0 !== t && t.tracingHeadersPatchFns && e(), null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.loadExternalDependency) || void 0 === s || s.call(i, this.instance, "tracing-headers", t => {
                        if (t) return iY.error("failed to load script", t);
                        e()
                    })
                }
                startIfEnabledOrStop() {
                    var e, t;
                    this.instance.config.__add_tracing_headers ? this._loadScript(this._startCapturing) : (null === (e = this._restoreXHRPatch) || void 0 === e || e.call(this), null === (t = this._restoreFetchPatch) || void 0 === t || t.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0)
                }
            }
            var iQ = j("[Web Vitals]");
            class iX {
                constructor(e) {
                    var t;
                    Y(this, "_enabledServerSide", !1), Y(this, "_initialized", !1), Y(this, "buffer", {
                        url: void 0,
                        metrics: [],
                        firstMetricTimestamp: void 0
                    }), Y(this, "_flushToCapture", () => {
                        clearTimeout(this._delayedFlushTimer), 0 !== this.buffer.metrics.length && (this.instance.capture("$web_vitals", this.buffer.metrics.reduce((e, t) => J(J({}, e), {}, {
                            ["$web_vitals_".concat(t.name, "_event")]: J({}, t),
                            ["$web_vitals_".concat(t.name, "_value")]: t.value
                        }), {})), this.buffer = {
                            url: void 0,
                            metrics: [],
                            firstMetricTimestamp: void 0
                        })
                    }), Y(this, "_addToBuffer", e => {
                        var t, i = null === (t = this.instance.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0);
                        if ($(i)) iQ.error("Could not read session ID. Dropping metrics!");
                        else {
                            this.buffer = this.buffer || {
                                url: void 0,
                                metrics: [],
                                firstMetricTimestamp: void 0
                            };
                            var s = this._currentURL();
                            $(s) || (L(null == e ? void 0 : e.name) || L(null == e ? void 0 : e.value) ? iQ.error("Invalid metric received", e) : this._maxAllowedValue && e.value >= this._maxAllowedValue ? iQ.error("Ignoring metric with value >= " + this._maxAllowedValue, e) : (this.buffer.url !== s && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), $(this.buffer.url) && (this.buffer.url = s), this.buffer.firstMetricTimestamp = $(this.buffer.firstMetricTimestamp) ? Date.now() : this.buffer.firstMetricTimestamp, e.attribution && e.attribution.interactionTargetElement && (e.attribution.interactionTargetElement = void 0), this.buffer.metrics.push(J(J({}, e), {}, {
                                $current_url: s,
                                $session_id: i.sessionId,
                                $window_id: i.windowId,
                                timestamp: Date.now()
                            })), this.buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()))
                        }
                    }), Y(this, "_startCapturing", () => {
                        var e, t, i, s, r = v.__PosthogExtensions__;
                        $(r) || $(r.postHogWebVitalsCallbacks) || ({
                            onLCP: e,
                            onCLS: t,
                            onFCP: i,
                            onINP: s
                        } = r.postHogWebVitalsCallbacks), e && t && i && s ? (this.allowedMetrics.indexOf("LCP") > -1 && e(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("CLS") > -1 && t(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && i(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("INP") > -1 && s(this._addToBuffer.bind(this)), this._initialized = !0) : iQ.error("web vitals callbacks not loaded - not starting")
                    }), this.instance = e, this._enabledServerSide = !(null === (t = this.instance.persistence) || void 0 === t || !t.props[eg]), this.startIfEnabled()
                }
                get allowedMetrics() {
                    var e, t, i = R(this.instance.config.capture_performance) ? null === (e = this.instance.config.capture_performance) || void 0 === e ? void 0 : e.web_vitals_allowed_metrics : void 0;
                    return $(i) ? (null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.props[ef]) || ["CLS", "FCP", "INP", "LCP"] : i
                }
                get flushToCaptureTimeoutMs() {
                    return (R(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals_delayed_flush_ms : void 0) || 5e3
                }
                get _maxAllowedValue() {
                    var e = R(this.instance.config.capture_performance) && D(this.instance.config.capture_performance.__web_vitals_max_value) ? this.instance.config.capture_performance.__web_vitals_max_value : 9e5;
                    return 0 < e && e <= 6e4 ? 9e5 : e
                }
                get isEnabled() {
                    var e = R(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals : void 0;
                    return q(e) ? e : this._enabledServerSide
                }
                startIfEnabled() {
                    this.isEnabled && !this._initialized && (iQ.info("enabled, starting..."), this.loadScript(this._startCapturing))
                }
                onRemoteConfig(e) {
                    var t = R(e.capturePerformance) && !!e.capturePerformance.web_vitals,
                        i = R(e.capturePerformance) ? e.capturePerformance.web_vitals_allowed_metrics : void 0;
                    this.instance.persistence && (this.instance.persistence.register({
                        [eg]: t
                    }), this.instance.persistence.register({
                        [ef]: i
                    })), this._enabledServerSide = t, this.startIfEnabled()
                }
                loadScript(e) {
                    var t, i, s;
                    null !== (t = v.__PosthogExtensions__) && void 0 !== t && t.postHogWebVitalsCallbacks && e(), null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.loadExternalDependency) || void 0 === s || s.call(i, this.instance, "web-vitals", t => {
                        t ? iQ.error("failed to load script", t) : e()
                    })
                }
                _currentURL() {
                    var e = r ? r.location.href : void 0;
                    return e || iQ.error("Could not determine current URL"), e
                }
            }
            var iZ = j("[Heatmaps]");

            function i0(e) {
                return R(e) && "clientX" in e && "clientY" in e && D(e.clientX) && D(e.clientY)
            }
            class i1 {
                constructor(e) {
                    var t;
                    Y(this, "rageclicks", new ta), Y(this, "_enabledServerSide", !1), Y(this, "_initialized", !1), Y(this, "_flushInterval", null), this.instance = e, this._enabledServerSide = !(null === (t = this.instance.persistence) || void 0 === t || !t.props[e_])
                }
                get flushIntervalMilliseconds() {
                    var e = 5e3;
                    return R(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (e = this.instance.config.capture_heatmaps.flush_interval_milliseconds), e
                }
                get isEnabled() {
                    return $(this.instance.config.capture_heatmaps) ? $(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps : !1 !== this.instance.config.capture_heatmaps
                }
                startIfEnabled() {
                    if (this.isEnabled) this._initialized || (iZ.info("starting..."), this._setupListeners(), this._flushInterval = setInterval(this.flush.bind(this), this.flushIntervalMilliseconds));
                    else {
                        var e, t;
                        clearInterval(null !== (e = this._flushInterval) && void 0 !== e ? e : void 0), null === (t = this.deadClicksCapture) || void 0 === t || t.stop(), this.getAndClearBuffer()
                    }
                }
                onRemoteConfig(e) {
                    var t = !!e.heatmaps;
                    this.instance.persistence && this.instance.persistence.register({
                        [e_]: t
                    }), this._enabledServerSide = t, this.startIfEnabled()
                }
                getAndClearBuffer() {
                    var e = this.buffer;
                    return this.buffer = void 0, e
                }
                _onDeadClick(e) {
                    this._onClick(e.originalEvent, "deadclick")
                }
                _setupListeners() {
                    r && u && (el(r, "beforeunload", this.flush.bind(this)), el(u, "click", e => this._onClick(e || (null == r ? void 0 : r.event)), {
                        capture: !0
                    }), el(u, "mousemove", e => this._onMouseMove(e || (null == r ? void 0 : r.event)), {
                        capture: !0
                    }), this.deadClicksCapture = new tH(this.instance, tN, this._onDeadClick.bind(this)), this.deadClicksCapture.startIfEnabled(), this._initialized = !0)
                }
                _getProperties(e, t) {
                    var i = this.instance.scrollManager.scrollY(),
                        s = this.instance.scrollManager.scrollX(),
                        n = this.instance.scrollManager.scrollElement(),
                        o = function(e, t, i) {
                            for (var s = e; s && eJ(s) && !eY(s, "body") && s !== i;) {
                                if (w(t, null == r ? void 0 : r.getComputedStyle(s).position)) return !0;
                                s = e6(s)
                            }
                            return !1
                        }(e3(e), ["fixed", "sticky"], n);
                    return {
                        x: e.clientX + (o ? 0 : s),
                        y: e.clientY + (o ? 0 : i),
                        target_fixed: o,
                        type: t
                    }
                }
                _onClick(e) {
                    var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
                    if (!eG(e.target) && i0(e)) {
                        var s = this._getProperties(e, i);
                        null !== (t = this.rageclicks) && void 0 !== t && t.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._capture(J(J({}, s), {}, {
                            type: "rageclick"
                        })), this._capture(s)
                    }
                }
                _onMouseMove(e) {
                    !eG(e.target) && i0(e) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout(() => {
                        this._capture(this._getProperties(e, "mousemove"))
                    }, 500))
                }
                _capture(e) {
                    if (r) {
                        var t = r.location.href;
                        this.buffer = this.buffer || {}, this.buffer[t] || (this.buffer[t] = []), this.buffer[t].push(e)
                    }
                }
                flush() {
                    this.buffer && !T(this.buffer) && this.instance.capture("$$heatmap", {
                        $heatmap_data: this.getAndClearBuffer()
                    })
                }
            }
            class i2 {
                constructor(e) {
                    this._instance = e
                }
                doPageView(e, t) {
                    var i, s = this._previousPageViewProperties(e, t);
                    return this._currentPageview = {
                        pathname: null !== (i = null == r ? void 0 : r.location.pathname) && void 0 !== i ? i : "",
                        pageViewId: t,
                        timestamp: e
                    }, this._instance.scrollManager.resetContext(), s
                }
                doPageLeave(e) {
                    var t;
                    return this._previousPageViewProperties(e, null === (t = this._currentPageview) || void 0 === t ? void 0 : t.pageViewId)
                }
                doEvent() {
                    var e;
                    return {
                        $pageview_id: null === (e = this._currentPageview) || void 0 === e ? void 0 : e.pageViewId
                    }
                }
                _previousPageViewProperties(e, t) {
                    var i = this._currentPageview;
                    if (!i) return {
                        $pageview_id: t
                    };
                    var s = {
                            $pageview_id: t,
                            $prev_pageview_id: i.pageViewId
                        },
                        r = this._instance.scrollManager.getContext();
                    if (r && !this._instance.config.disable_scroll_properties) {
                        var {
                            maxScrollHeight: n,
                            lastScrollY: o,
                            maxScrollY: a,
                            maxContentHeight: l,
                            lastContentY: c,
                            maxContentY: u
                        } = r;
                        if (!($(n) || $(o) || $(a) || $(l) || $(c) || $(u))) {
                            n = Math.ceil(n), o = Math.ceil(o), a = Math.ceil(a), l = Math.ceil(l), c = Math.ceil(c), u = Math.ceil(u);
                            var d = n <= 1 ? 1 : t2(o / n, 0, 1),
                                h = n <= 1 ? 1 : t2(a / n, 0, 1),
                                _ = l <= 1 ? 1 : t2(c / l, 0, 1),
                                p = l <= 1 ? 1 : t2(u / l, 0, 1);
                            s = ee(s, {
                                $prev_pageview_last_scroll: o,
                                $prev_pageview_last_scroll_percentage: d,
                                $prev_pageview_max_scroll: a,
                                $prev_pageview_max_scroll_percentage: h,
                                $prev_pageview_last_content: c,
                                $prev_pageview_last_content_percentage: _,
                                $prev_pageview_max_content: u,
                                $prev_pageview_max_content_percentage: p
                            })
                        }
                    }
                    return i.pathname && (s.$prev_pageview_pathname = i.pathname), i.timestamp && (s.$prev_pageview_duration = (e.getTime() - i.timestamp.getTime()) / 1e3), s
                }
            }
            class i3 {
                constructor(e) {
                    this.instance = e
                }
                sendExceptionEvent(e) {
                    this.instance.capture("$exception", e, {
                        _noTruncate: !0,
                        _batchKey: "exceptionEvent"
                    })
                }
            }
            var i5, i6 = j("[FeatureFlags]"),
                i8 = "$active_feature_flags",
                i4 = "$override_feature_flags",
                i7 = "$feature_flag_payloads",
                i9 = "$override_feature_flag_payloads",
                se = "$feature_flag_request_id",
                st = e => {
                    var t = {};
                    for (var [i, s] of ei(e || {})) s && (t[i] = s);
                    return t
                };
            ! function(e) {
                e.FeatureFlags = "feature_flags", e.Recordings = "recordings"
            }(i5 || (i5 = {}));
            class si {
                constructor(e) {
                    Y(this, "_override_warning", !1), Y(this, "_hasLoadedFlags", !1), Y(this, "_requestInFlight", !1), Y(this, "_reloadingDisabled", !1), Y(this, "_additionalReloadRequested", !1), Y(this, "_decideCalled", !1), Y(this, "_flagsLoadedFromRemote", !1), this.instance = e, this.featureFlagEventHandlers = []
                }
                decide() {
                    if (this.instance.config.__preview_remote_config) this._decideCalled = !0;
                    else {
                        var e = !this._reloadDebouncer && (this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load);
                        this._callDecideEndpoint({
                            disableFlags: e
                        })
                    }
                }
                get hasLoadedFlags() {
                    return this._hasLoadedFlags
                }
                getFlags() {
                    return Object.keys(this.getFlagVariants())
                }
                getFlagVariants() {
                    var e = this.instance.get_property(eR),
                        t = this.instance.get_property(i4);
                    if (!t) return e || {};
                    for (var i = ee({}, e), s = Object.keys(t), r = 0; r < s.length; r++) i[s[r]] = t[s[r]];
                    return this._override_warning || (i6.warn(" Overriding feature flags!", {
                        enabledFlags: e,
                        overriddenFlags: t,
                        finalFlags: i
                    }), this._override_warning = !0), i
                }
                getFlagPayloads() {
                    var e = this.instance.get_property(i7),
                        t = this.instance.get_property(i9);
                    if (!t) return e || {};
                    for (var i = ee({}, e || {}), s = Object.keys(t), r = 0; r < s.length; r++) i[s[r]] = t[s[r]];
                    return this._override_warning || (i6.warn(" Overriding feature flag payloads!", {
                        flagPayloads: e,
                        overriddenPayloads: t,
                        finalPayloads: i
                    }), this._override_warning = !0), i
                }
                reloadFeatureFlags() {
                    this._reloadingDisabled || this.instance.config.advanced_disable_feature_flags || this._reloadDebouncer || (this._reloadDebouncer = setTimeout(() => {
                        this._callDecideEndpoint()
                    }, 5))
                }
                clearDebouncer() {
                    clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
                }
                ensureFlagsLoaded() {
                    this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
                }
                setAnonymousDistinctId(e) {
                    this.$anon_distinct_id = e
                }
                setReloadingPaused(e) {
                    this._reloadingDisabled = e
                }
                _callDecideEndpoint(e) {
                    var t;
                    if (this.clearDebouncer(), !this.instance.config.advanced_disable_decide) {
                        if (this._requestInFlight) this._additionalReloadRequested = !0;
                        else {
                            var i = {
                                token: this.instance.config.token,
                                distinct_id: this.instance.get_distinct_id(),
                                groups: this.instance.getGroups(),
                                $anon_distinct_id: this.$anon_distinct_id,
                                person_properties: J(J({}, (null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.get_initial_props()) || {}), this.instance.get_property(e$) || {}),
                                group_properties: this.instance.get_property(eA)
                            };
                            (null != e && e.disableFlags || this.instance.config.advanced_disable_feature_flags) && (i.disable_flags = !0), this._requestInFlight = !0, this.instance._send_request({
                                method: "POST",
                                url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
                                data: i,
                                compression: this.instance.config.disable_compression ? void 0 : s.Base64,
                                timeout: this.instance.config.feature_flag_request_timeout_ms,
                                callback: e => {
                                    var t, s, r, n = !0;
                                    200 === e.statusCode && (this._additionalReloadRequested || (this.$anon_distinct_id = void 0), n = !1), this._requestInFlight = !1, this._decideCalled || (this._decideCalled = !0, this.instance._onRemoteConfig(null !== (r = e.json) && void 0 !== r ? r : {})), i.disable_flags && !this._additionalReloadRequested || (this._flagsLoadedFromRemote = !n, e.json && null !== (t = e.json.quotaLimited) && void 0 !== t && t.includes(i5.FeatureFlags) ? i6.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : (this.receivedFeatureFlags(null !== (s = e.json) && void 0 !== s ? s : {}, n), this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callDecideEndpoint())))
                                }
                            })
                        }
                    }
                }
                getFeatureFlag(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) {
                        var i, s, r, n, o, a = this.getFlagVariants()[e],
                            l = "".concat(a),
                            c = this.instance.get_property(se) || void 0,
                            u = this.instance.get_property(eL) || {};
                        return !t.send_event && "send_event" in t || e in u && u[e].includes(l) || (C(u[e]) ? u[e].push(l) : u[e] = [l], null === (i = this.instance.persistence) || void 0 === i || i.register({
                            [eL]: u
                        }), this.instance.capture("$feature_flag_called", {
                            $feature_flag: e,
                            $feature_flag_response: a,
                            $feature_flag_payload: this.getFeatureFlagPayload(e) || null,
                            $feature_flag_request_id: c,
                            $feature_flag_bootstrapped_response: (null === (s = this.instance.config.bootstrap) || void 0 === s || null === (r = s.featureFlags) || void 0 === r ? void 0 : r[e]) || null,
                            $feature_flag_bootstrapped_payload: (null === (n = this.instance.config.bootstrap) || void 0 === n || null === (o = n.featureFlagPayloads) || void 0 === o ? void 0 : o[e]) || null,
                            $used_bootstrap_value: !this._flagsLoadedFromRemote
                        })), a
                    }
                    i6.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time.")
                }
                getFeatureFlagPayload(e) {
                    return this.getFlagPayloads()[e]
                }
                getRemoteConfigPayload(e, t) {
                    var i = this.instance.config.token;
                    this.instance._send_request({
                        method: "POST",
                        url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
                        data: {
                            distinct_id: this.instance.get_distinct_id(),
                            token: i
                        },
                        compression: this.instance.config.disable_compression ? void 0 : s.Base64,
                        timeout: this.instance.config.feature_flag_request_timeout_ms,
                        callback: i => {
                            var s, r = null === (s = i.json) || void 0 === s ? void 0 : s.featureFlagPayloads;
                            t((null == r ? void 0 : r[e]) || void 0)
                        }
                    })
                }
                isFeatureEnabled(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) return !!this.getFeatureFlag(e, t);
                    i6.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time.")
                }
                addFeatureFlagsHandler(e) {
                    this.featureFlagEventHandlers.push(e)
                }
                removeFeatureFlagsHandler(e) {
                    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(t => t !== e)
                }
                receivedFeatureFlags(e, t) {
                    if (this.instance.persistence) {
                        this._hasLoadedFlags = !0;
                        var i = this.getFlagVariants(),
                            s = this.getFlagPayloads();
                        ! function(e, t) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                r = e.featureFlags,
                                n = e.featureFlagPayloads,
                                o = e.requestId;
                            if (r) {
                                if (C(r)) {
                                    var a = {};
                                    if (r)
                                        for (var l = 0; l < r.length; l++) a[r[l]] = !0;
                                    t && t.register({
                                        [i8]: r,
                                        [eR]: a
                                    })
                                } else {
                                    var c = r,
                                        u = n;
                                    e.errorsWhileComputingFlags && (c = J(J({}, i), c), u = J(J({}, s), u)), t && t.register(J({
                                        [i8]: Object.keys(st(c)),
                                        [eR]: c || {},
                                        [i7]: u || {}
                                    }, o ? {
                                        [se]: o
                                    } : {}))
                                }
                            }
                        }(e, this.instance.persistence, i, s), this._fireFeatureFlagsCallbacks(t)
                    }
                }
                override(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    i6.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
                        flags: e,
                        suppressWarning: t
                    })
                }
                overrideFeatureFlags(e) {
                    if (!this.instance.__loaded || !this.instance.persistence) return i6.uninitializedWarning("posthog.feature_flags.overrideFeatureFlags");
                    if (!1 === e) return this.instance.persistence.unregister(i4), this.instance.persistence.unregister(i9), void this._fireFeatureFlagsCallbacks();
                    if (e && "object" == typeof e && ("flags" in e || "payloads" in e)) {
                        var t;
                        if (this._override_warning = !!(null !== (t = e.suppressWarning) && void 0 !== t && t), "flags" in e) {
                            if (!1 === e.flags) this.instance.persistence.unregister(i4);
                            else if (e.flags) {
                                if (C(e.flags)) {
                                    for (var i = {}, s = 0; s < e.flags.length; s++) i[e.flags[s]] = !0;
                                    this.instance.persistence.register({
                                        [i4]: i
                                    })
                                } else this.instance.persistence.register({
                                    [i4]: e.flags
                                })
                            }
                        }
                        return "payloads" in e && (!1 === e.payloads ? this.instance.persistence.unregister(i9) : e.payloads && this.instance.persistence.register({
                            [i9]: e.payloads
                        })), void this._fireFeatureFlagsCallbacks()
                    }
                    this._fireFeatureFlagsCallbacks()
                }
                onFeatureFlags(e) {
                    if (this.addFeatureFlagsHandler(e), this._hasLoadedFlags) {
                        var {
                            flags: t,
                            flagVariants: i
                        } = this._prepareFeatureFlagsForCallbacks();
                        e(t, i)
                    }
                    return () => this.removeFeatureFlagsHandler(e)
                }
                updateEarlyAccessFeatureEnrollment(e, t) {
                    var i, s = (this.instance.get_property(eT) || []).find(t => t.flagKey === e),
                        r = {
                            ["$feature_enrollment/".concat(e)]: t
                        },
                        n = {
                            $feature_flag: e,
                            $feature_enrollment: t,
                            $set: r
                        };
                    s && (n.$early_access_feature_name = s.name), this.instance.capture("$feature_enrollment_update", n), this.setPersonPropertiesForFlags(r, !1);
                    var o = J(J({}, this.getFlagVariants()), {}, {
                        [e]: t
                    });
                    null === (i = this.instance.persistence) || void 0 === i || i.register({
                        [i8]: Object.keys(st(o)),
                        [eR]: o
                    }), this._fireFeatureFlagsCallbacks()
                }
                getEarlyAccessFeatures(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        s = this.instance.get_property(eT),
                        r = i ? "&".concat(i.map(e => "stage=".concat(e)).join("&")) : "";
                    if (s && !t) return e(s);
                    this.instance._send_request({
                        url: this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token).concat(r)),
                        method: "GET",
                        callback: t => {
                            var i;
                            if (t.json) {
                                var s = t.json.earlyAccessFeatures;
                                return null === (i = this.instance.persistence) || void 0 === i || i.register({
                                    [eT]: s
                                }), e(s)
                            }
                        }
                    })
                }
                _prepareFeatureFlagsForCallbacks() {
                    var e = this.getFlags(),
                        t = this.getFlagVariants();
                    return {
                        flags: e.filter(e => t[e]),
                        flagVariants: Object.keys(t).filter(e => t[e]).reduce((e, i) => (e[i] = t[i], e), {})
                    }
                }
                _fireFeatureFlagsCallbacks(e) {
                    var {
                        flags: t,
                        flagVariants: i
                    } = this._prepareFeatureFlagsForCallbacks();
                    this.featureFlagEventHandlers.forEach(s => s(t, i, {
                        errorsLoading: e
                    }))
                }
                setPersonPropertiesForFlags(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = this.instance.get_property(e$) || {};
                    this.instance.register({
                        [e$]: J(J({}, i), e)
                    }), t && this.instance.reloadFeatureFlags()
                }
                resetPersonPropertiesForFlags() {
                    this.instance.unregister(e$)
                }
                setGroupPropertiesForFlags(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = this.instance.get_property(eA) || {};
                    0 !== Object.keys(i).length && Object.keys(i).forEach(t => {
                        i[t] = J(J({}, i[t]), e[t]), delete e[t]
                    }), this.instance.register({
                        [eA]: J(J({}, i), e)
                    }), t && this.instance.reloadFeatureFlags()
                }
                resetGroupPropertiesForFlags(e) {
                    if (e) {
                        var t = this.instance.get_property(eA) || {};
                        this.instance.register({
                            [eA]: J(J({}, t), {}, {
                                [e]: {}
                            })
                        })
                    } else this.instance.unregister(eA)
                }
            }
            var ss = "Mobile",
                sr = "Android",
                sn = "Tablet",
                so = sr + " " + sn,
                sa = "iPad",
                sl = "Apple",
                sc = sl + " Watch",
                su = "Safari",
                sd = "BlackBerry",
                sh = "Samsung",
                s_ = sh + "Browser",
                sp = sh + " Internet",
                sg = "Chrome",
                sv = sg + " OS",
                sf = sg + " iOS",
                sm = "Internet Explorer",
                sy = sm + " " + ss,
                sb = "Opera",
                sw = sb + " Mini",
                sS = "Edge",
                sk = "Microsoft " + sS,
                sE = "Firefox",
                sx = sE + " iOS",
                sI = "Nintendo",
                sP = "PlayStation",
                sC = "Xbox",
                sF = sr + " " + ss,
                sR = ss + " " + su,
                sT = "Windows",
                s$ = sT + " Phone",
                sA = "Nokia",
                sO = "Ouya",
                sM = "Generic",
                sL = sM + " " + ss.toLowerCase(),
                sD = sM + " " + sn.toLowerCase(),
                sq = "Konqueror",
                sN = "(\\d+(\\.\\d+)?)",
                sB = RegExp("Version/" + sN),
                sH = RegExp(sC, "i"),
                sU = RegExp(sP + " \\w+", "i"),
                sz = RegExp(sI + " \\w+", "i"),
                sj = RegExp(sd + "|PlayBook|BB10", "i"),
                sW = {
                    "NT3.51": "NT 3.11",
                    "NT4.0": "NT 4.0",
                    "5.0": "2000",
                    5.1: "XP",
                    5.2: "XP",
                    "6.0": "Vista",
                    6.1: "7",
                    6.2: "8",
                    6.3: "8.1",
                    6.4: "10",
                    "10.0": "10"
                },
                sV = (e, t) => t && w(t, sl) || function(e) {
                    return w(e, su) && !w(e, sg) && !w(e, sr)
                }(e),
                sG = function(e, t) {
                    return t = t || "", w(e, " OPR/") && w(e, "Mini") ? sw : w(e, " OPR/") ? sb : sj.test(e) ? sd : w(e, "IE" + ss) || w(e, "WPDesktop") ? sy : w(e, s_) ? sp : w(e, sS) || w(e, "Edg/") ? sk : w(e, "FBIOS") ? "Facebook " + ss : w(e, "UCWEB") || w(e, "UCBrowser") ? "UC Browser" : w(e, "CriOS") ? sf : w(e, "CrMo") || w(e, sg) ? sg : w(e, sr) && w(e, su) ? sF : w(e, "FxiOS") ? sx : w(e.toLowerCase(), sq.toLowerCase()) ? sq : sV(e, t) ? w(e, ss) ? sR : su : w(e, sE) ? sE : w(e, "MSIE") || w(e, "Trident/") ? sm : w(e, "Gecko") ? sE : ""
                },
                sJ = {
                    [sy]: [RegExp("rv:" + sN)],
                    [sk]: [RegExp(sS + "?\\/" + sN)],
                    [sg]: [RegExp("(" + sg + "|CrMo)\\/" + sN)],
                    [sf]: [RegExp("CriOS\\/" + sN)],
                    "UC Browser": [RegExp("(UCBrowser|UCWEB)\\/" + sN)],
                    [su]: [sB],
                    [sR]: [sB],
                    [sb]: [RegExp("(Opera|OPR)\\/" + sN)],
                    [sE]: [RegExp(sE + "\\/" + sN)],
                    [sx]: [RegExp("FxiOS\\/" + sN)],
                    [sq]: [RegExp("Konqueror[:/]?" + sN, "i")],
                    [sd]: [RegExp(sd + " " + sN), sB],
                    [sF]: [RegExp("android\\s" + sN, "i")],
                    [sp]: [RegExp(s_ + "\\/" + sN)],
                    [sm]: [RegExp("(rv:|MSIE )" + sN)],
                    Mozilla: [RegExp("rv:" + sN)]
                },
                sY = [
                    [RegExp(sC + "; " + sC + " (.*?)[);]", "i"), e => [sC, e && e[1] || ""]],
                    [RegExp(sI, "i"), [sI, ""]],
                    [RegExp(sP, "i"), [sP, ""]],
                    [sj, [sd, ""]],
                    [RegExp(sT, "i"), (e, t) => {
                        if (/Phone/.test(t) || /WPDesktop/.test(t)) return [s$, ""];
                        if (new RegExp(ss).test(t) && !/IEMobile\b/.test(t)) return [sT + " " + ss, ""];
                        var i = /Windows NT ([0-9.]+)/i.exec(t);
                        if (i && i[1]) {
                            var s = sW[i[1]] || "";
                            return /arm/i.test(t) && (s = "RT"), [sT, s]
                        }
                        return [sT, ""]
                    }],
                    [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, e => e && e[3] ? ["iOS", [e[3], e[4], e[5] || "0"].join(".")] : ["iOS", ""]],
                    [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, e => {
                        var t = "";
                        return e && e.length >= 3 && (t = $(e[2]) ? e[3] : e[2]), ["watchOS", t]
                    }],
                    [RegExp("(" + sr + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + sr + ")", "i"), e => e && e[2] ? [sr, [e[2], e[3], e[4] || "0"].join(".")] : [sr, ""]],
                    [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, e => {
                        var t = ["Mac OS X", ""];
                        if (e && e[1]) {
                            var i = [e[1], e[2], e[3] || "0"];
                            t[1] = i.join(".")
                        }
                        return t
                    }],
                    [/Mac/i, ["Mac OS X", ""]],
                    [/CrOS/, [sv, ""]],
                    [/Linux|debian/i, ["Linux", ""]]
                ],
                sK = function(e) {
                    return sz.test(e) ? sI : sU.test(e) ? sP : sH.test(e) ? sC : RegExp(sO, "i").test(e) ? sO : RegExp("(" + s$ + "|WPDesktop)", "i").test(e) ? s$ : /iPad/.test(e) ? sa : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? sc : sj.test(e) ? sd : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : RegExp(sA, "i").test(e) ? sA : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? !new RegExp(ss).test(e) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) ? /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? sr : so : sr : RegExp("(pda|" + ss + ")", "i").test(e) ? sL : RegExp(sn, "i").test(e) && !RegExp(sn + " pc", "i").test(e) ? sD : ""
                },
                sQ = "https?://(.*)",
                sX = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "irclid", "_kx"],
                sZ = et(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid"], sX),
                s0 = "<masked>",
                s1 = {
                    campaignParams: function() {
                        var {
                            customTrackedParams: e,
                            maskPersonalDataProperties: t,
                            customPersonalDataProperties: i
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!u) return {};
                        var s = t ? et([], sX, i || []) : [];
                        return this._campaignParamsFromUrl(th(u.URL, s, s0), e)
                    },
                    _campaignParamsFromUrl: function(e, t) {
                        var i = sZ.concat(t || []),
                            s = {};
                        return Z(i, function(t) {
                            var i = td(e, t);
                            s[t] = i || null
                        }), s
                    },
                    _searchEngine: function(e) {
                        return e ? 0 === e.search(sQ + "google.([^/?]*)") ? "google" : 0 === e.search(sQ + "bing.com") ? "bing" : 0 === e.search(sQ + "yahoo.com") ? "yahoo" : 0 === e.search(sQ + "duckduckgo.com") ? "duckduckgo" : null : null
                    },
                    _searchInfoFromReferrer: function(e) {
                        var t = s1._searchEngine(e),
                            i = {};
                        if (!M(t)) {
                            i.$search_engine = t;
                            var s = u ? td(u.referrer, "yahoo" != t ? "q" : "p") : "";
                            s.length && (i.ph_keyword = s)
                        }
                        return i
                    },
                    searchInfo: function() {
                        var e = null == u ? void 0 : u.referrer;
                        return e ? this._searchInfoFromReferrer(e) : {}
                    },
                    browser: sG,
                    browserVersion: function(e, t) {
                        var i = sJ[sG(e, t)];
                        if ($(i)) return null;
                        for (var s = 0; s < i.length; s++) {
                            var r = i[s],
                                n = e.match(r);
                            if (n) return parseFloat(n[n.length - 2])
                        }
                        return null
                    },
                    browserLanguage: function() {
                        return navigator.language || navigator.userLanguage
                    },
                    browserLanguagePrefix: function() {
                        var e = this.browserLanguage();
                        return "string" == typeof e ? e.split("-")[0] : void 0
                    },
                    os: function(e) {
                        for (var t = 0; t < sY.length; t++) {
                            var [i, s] = sY[t], r = i.exec(e), n = r && (F(s) ? s(r, e) : s);
                            if (n) return n
                        }
                        return ["", ""]
                    },
                    device: sK,
                    deviceType: function(e) {
                        var t = sK(e);
                        return t === sa || t === so || "Kobo" === t || "Kindle Fire" === t || t === sD ? sn : t === sI || t === sC || t === sP || t === sO ? "Console" : t === sc ? "Wearable" : t ? ss : "Desktop"
                    },
                    referrer: function() {
                        return (null == u ? void 0 : u.referrer) || "$direct"
                    },
                    referringDomain: function() {
                        var e;
                        return null != u && u.referrer && (null === (e = tc(u.referrer)) || void 0 === e ? void 0 : e.host) || "$direct"
                    },
                    referrerInfo: function() {
                        return {
                            $referrer: this.referrer(),
                            $referring_domain: this.referringDomain()
                        }
                    },
                    personInfo: function() {
                        var {
                            maskPersonalDataProperties: e,
                            customPersonalDataProperties: t
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e ? et([], sX, t || []) : [], s = null == d ? void 0 : d.href.substring(0, 1e3);
                        return {
                            r: this.referrer().substring(0, 1e3),
                            u: s ? th(s, i, s0) : void 0
                        }
                    },
                    personPropsFromInfo: function(e) {
                        var t, {
                                r: i,
                                u: s
                            } = e,
                            r = {
                                $referrer: i,
                                $referring_domain: null == i ? void 0 : "$direct" == i ? "$direct" : null === (t = tc(i)) || void 0 === t ? void 0 : t.host
                            };
                        if (s) {
                            r.$current_url = s;
                            var n = tc(s);
                            r.$host = null == n ? void 0 : n.host, r.$pathname = null == n ? void 0 : n.pathname, ee(r, this._campaignParamsFromUrl(s))
                        }
                        return i && ee(r, this._searchInfoFromReferrer(i)), r
                    },
                    initialPersonPropsFromInfo: function(e) {
                        var t = this.personPropsFromInfo(e),
                            i = {};
                        return Z(t, function(e, t) {
                            i["$initial_".concat(k(t))] = e
                        }), i
                    },
                    timezone: function() {
                        try {
                            return Intl.DateTimeFormat().resolvedOptions().timeZone
                        } catch (e) {
                            return
                        }
                    },
                    timezoneOffset: function() {
                        try {
                            return (new Date).getTimezoneOffset()
                        } catch (e) {
                            return
                        }
                    },
                    properties: function() {
                        var {
                            maskPersonalDataProperties: e,
                            customPersonalDataProperties: t
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!g) return {};
                        var i = e ? et([], sX, t || []) : [],
                            [s, n] = s1.os(g);
                        return ee(en({
                            $os: s,
                            $os_version: n,
                            $browser: s1.browser(g, navigator.vendor),
                            $device: s1.device(g),
                            $device_type: s1.deviceType(g),
                            $timezone: s1.timezone(),
                            $timezone_offset: s1.timezoneOffset()
                        }), {
                            $current_url: th(null == d ? void 0 : d.href, i, s0),
                            $host: null == d ? void 0 : d.host,
                            $pathname: null == d ? void 0 : d.pathname,
                            $raw_user_agent: g.length > 1e3 ? g.substring(0, 997) + "..." : g,
                            $browser_version: s1.browserVersion(g, navigator.vendor),
                            $browser_language: s1.browserLanguage(),
                            $browser_language_prefix: s1.browserLanguagePrefix(),
                            $screen_height: null == r ? void 0 : r.screen.height,
                            $screen_width: null == r ? void 0 : r.screen.width,
                            $viewport_height: null == r ? void 0 : r.innerHeight,
                            $viewport_width: null == r ? void 0 : r.innerWidth,
                            $lib: "web",
                            $lib_version: f.LIB_VERSION,
                            $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                            $time: Date.now() / 1e3
                        })
                    },
                    people_properties: function() {
                        if (!g) return {};
                        var [e, t] = s1.os(g);
                        return ee(en({
                            $os: e,
                            $os_version: t,
                            $browser: s1.browser(g, navigator.vendor)
                        }), {
                            $browser_version: s1.browserVersion(g, navigator.vendor)
                        })
                    }
                },
                s2 = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"];
            class s3 {
                constructor(e) {
                    this.config = e, this.props = {}, this.campaign_params_saved = !1, this.name = (e => {
                        var t = "";
                        return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog"
                    })(e), this.storage = this.buildStorage(e), this.load(), e.debug && z.info("Persistence loaded", e.persistence, J({}, this.props)), this.update_config(e, e), this.save()
                }
                buildStorage(e) {
                    -1 === s2.indexOf(e.persistence.toLowerCase()) && (z.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), e.persistence = "localStorage+cookie");
                    var t = e.persistence.toLowerCase();
                    return "localstorage" === t && tR.is_supported() ? tR : "localstorage+cookie" === t && t$.is_supported() ? t$ : "sessionstorage" === t && tL.is_supported() ? tL : "memory" === t ? tO : "cookie" === t ? tC : t$.is_supported() ? t$ : tC
                }
                properties() {
                    var e = {};
                    return Z(this.props, function(t, i) {
                        if (i === eR && R(t))
                            for (var s, r = Object.keys(t), n = 0; n < r.length; n++) e["$feature/".concat(r[n])] = t[r[n]];
                        else s = !1, (M(eV) ? s : l && eV.indexOf === l ? -1 != eV.indexOf(i) : (Z(eV, function(e) {
                            if (s || (s = e === i)) return Q
                        }), s)) || (e[i] = t)
                    }), e
                }
                load() {
                    if (!this.disabled) {
                        var e = this.storage.parse(this.name);
                        e && (this.props = ee({}, e))
                    }
                }
                save() {
                    this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure, this.config.debug)
                }
                remove() {
                    this.storage.remove(this.name, !1), this.storage.remove(this.name, !0)
                }
                clear() {
                    this.remove(), this.props = {}
                }
                register_once(e, t, i) {
                    if (R(e)) {
                        $(t) && (t = "None"), this.expire_days = $(i) ? this.default_expiry : i;
                        var s = !1;
                        if (Z(e, (e, i) => {
                                this.props.hasOwnProperty(i) && this.props[i] !== t || (this.props[i] = e, s = !0)
                            }), s) return this.save(), !0
                    }
                    return !1
                }
                register(e, t) {
                    if (R(e)) {
                        this.expire_days = $(t) ? this.default_expiry : t;
                        var i = !1;
                        if (Z(e, (t, s) => {
                                e.hasOwnProperty(s) && this.props[s] !== t && (this.props[s] = t, i = !0)
                            }), i) return this.save(), !0
                    }
                    return !1
                }
                unregister(e) {
                    e in this.props && (delete this.props[e], this.save())
                }
                update_campaign_params() {
                    if (!this.campaign_params_saved) {
                        var e = s1.campaignParams({
                            customTrackedParams: this.config.custom_campaign_params,
                            maskPersonalDataProperties: this.config.mask_personal_data_properties,
                            customPersonalDataProperties: this.config.custom_personal_data_properties
                        });
                        T(en(e)) || this.register(e), this.campaign_params_saved = !0
                    }
                }
                update_search_keyword() {
                    this.register(s1.searchInfo())
                }
                update_referrer_info() {
                    this.register_once(s1.referrerInfo(), void 0)
                }
                set_initial_person_info() {
                    this.props[eB] || this.props[eH] || this.register_once({
                        [eU]: s1.personInfo({
                            maskPersonalDataProperties: this.config.mask_personal_data_properties,
                            customPersonalDataProperties: this.config.custom_personal_data_properties
                        })
                    }, void 0)
                }
                get_referrer_info() {
                    return en({
                        $referrer: this.props.$referrer,
                        $referring_domain: this.props.$referring_domain
                    })
                }
                get_initial_props() {
                    var e = {};
                    Z([eH, eB], t => {
                        var i = this.props[t];
                        i && Z(i, function(t, i) {
                            e["$initial_" + k(i)] = t
                        })
                    });
                    var t = this.props[eU];
                    return t && ee(e, s1.initialPersonPropsFromInfo(t)), e
                }
                safe_merge(e) {
                    return Z(this.props, function(t, i) {
                        i in e || (e[i] = t)
                    }), e
                }
                update_config(e, t) {
                    if (this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), e.persistence !== t.persistence) {
                        var i = this.buildStorage(e),
                            s = this.props;
                        this.clear(), this.storage = i, this.props = s, this.save()
                    }
                }
                set_disabled(e) {
                    this.disabled = e, this.disabled ? this.remove() : this.save()
                }
                set_cross_subdomain(e) {
                    e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save())
                }
                get_cross_subdomain() {
                    return !!this.cross_subdomain
                }
                set_secure(e) {
                    e !== this.secure && (this.secure = e, this.remove(), this.save())
                }
                set_event_timer(e, t) {
                    var i = this.props[ed] || {};
                    i[e] = t, this.props[ed] = i, this.save()
                }
                remove_event_timer(e) {
                    var t = (this.props[ed] || {})[e];
                    return $(t) || (delete this.props[ed][e], this.save()), t
                }
                get_property(e) {
                    return this.props[e]
                }
                set_property(e, t) {
                    this.props[e] = t, this.save()
                }
            }
            var s5, s6, s8, s4, s7, s9, re, rt, ri, rs, rr, rn, ro = {},
                ra = [],
                rl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                rc = Array.isArray;

            function ru(e, t) {
                for (var i in t) e[i] = t[i];
                return e
            }

            function rd(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function rh(e, t, i, s, r) {
                var n = {
                    type: e,
                    props: t,
                    key: i,
                    ref: s,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: null == r ? ++s8 : r,
                    __i: -1,
                    __u: 0
                };
                return null == r && null != s6.vnode && s6.vnode(n), n
            }

            function r_(e) {
                return e.children
            }

            function rp(e, t) {
                this.props = e, this.context = t
            }

            function rg(e, t) {
                if (null == t) return e.__ ? rg(e.__, e.__i + 1) : null;
                for (var i; t < e.__k.length; t++)
                    if (null != (i = e.__k[t]) && null != i.__e) return i.__e;
                return "function" == typeof e.type ? rg(e) : null
            }

            function rv(e) {
                (!e.__d && (e.__d = !0) && s4.push(e) && !rf.__r++ || s7 !== s6.debounceRendering) && ((s7 = s6.debounceRendering) || s9)(rf)
            }

            function rf() {
                var e, t, i, s, r, n, o, a, l;
                for (s4.sort(re); e = s4.shift();) e.__d && (t = s4.length, s = void 0, n = (r = (i = e).__v).__e, a = [], l = [], (o = i.__P) && ((s = ru({}, r)).__v = r.__v + 1, s6.vnode && s6.vnode(s), rk(o, s, r, i.__n, void 0 !== o.ownerSVGElement, 32 & r.__u ? [n] : null, a, null == n ? rg(r) : n, !!(32 & r.__u), l), s.__.__k[s.__i] = s, function(e, t, i) {
                    t.__d = void 0;
                    for (var s = 0; s < i.length; s++) rE(i[s], i[++s], i[++s]);
                    s6.__c && s6.__c(t, e), e.some(function(t) {
                        try {
                            e = t.__h, t.__h = [], e.some(function(e) {
                                e.call(t)
                            })
                        } catch (e) {
                            s6.__e(e, t.__v)
                        }
                    })
                }(a, s, l), s.__e != n && function e(t) {
                    var i, s;
                    if (null != (t = t.__) && null != t.__c) {
                        for (t.__e = t.__c.base = null, i = 0; i < t.__k.length; i++)
                            if (null != (s = t.__k[i]) && null != s.__e) {
                                t.__e = t.__c.base = s.__e;
                                break
                            }
                        return e(t)
                    }
                }(s)), s4.length > t && s4.sort(re));
                rf.__r = 0
            }

            function rm(e, t, i, s, r, n, o, a, l, c, u) {
                var d, h, _, p, g, v = s && s.__k || ra,
                    f = t.length;
                for (i.__d = l, function(e, t, i) {
                        var s, r, n, o, a, l = t.length,
                            c = i.length,
                            u = c,
                            d = 0;
                        for (e.__k = [], s = 0; s < l; s++) null != (r = e.__k[s] = null == (r = t[s]) || "boolean" == typeof r || "function" == typeof r ? null : "string" == typeof r || "number" == typeof r || "bigint" == typeof r || r.constructor == String ? rh(null, r, null, null, r) : rc(r) ? rh(r_, {
                            children: r
                        }, null, null, null) : void 0 === r.constructor && r.__b > 0 ? rh(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r) ? (r.__ = e, r.__b = e.__b + 1, a = function(e, t, i, s) {
                            var r = e.key,
                                n = e.type,
                                o = i - 1,
                                a = i + 1,
                                l = t[i];
                            if (null === l || l && r == l.key && n === l.type) return i;
                            if (s > +(null != l && 0 == (131072 & l.__u)))
                                for (; o >= 0 || a < t.length;) {
                                    if (o >= 0) {
                                        if ((l = t[o]) && 0 == (131072 & l.__u) && r == l.key && n === l.type) return o;
                                        o--
                                    }
                                    if (a < t.length) {
                                        if ((l = t[a]) && 0 == (131072 & l.__u) && r == l.key && n === l.type) return a;
                                        a++
                                    }
                                }
                            return -1
                        }(r, i, o = s + d, u), r.__i = a, n = null, -1 !== a && (u--, (n = i[a]) && (n.__u |= 131072)), null == n || null === n.__v ? (-1 == a && d--, "function" != typeof r.type && (r.__u |= 65536)) : a !== o && (a === o + 1 ? d++ : a > o ? u > l - o ? d += a - o : d-- : d = a < o && a == o - 1 ? a - o : 0, a !== s + d && (r.__u |= 65536))) : (n = i[s]) && null == n.key && n.__e && (n.__e == e.__d && (e.__d = rg(n)), rx(n, n, !1), i[s] = null, u--);
                        if (u)
                            for (s = 0; s < c; s++) null != (n = i[s]) && 0 == (131072 & n.__u) && (n.__e == e.__d && (e.__d = rg(n)), rx(n, n))
                    }(i, t, v), l = i.__d, d = 0; d < f; d++) null != (_ = i.__k[d]) && "boolean" != typeof _ && "function" != typeof _ && (h = -1 === _.__i ? ro : v[_.__i] || ro, _.__i = d, rk(e, _, h, r, n, o, a, l, c, u), p = _.__e, _.ref && h.ref != _.ref && (h.ref && rE(h.ref, null, _), u.push(_.ref, _.__c || p, _)), null == g && null != p && (g = p), 65536 & _.__u || h.__k === _.__k ? l = function e(t, i, s) {
                    var r, n;
                    if ("function" == typeof t.type) {
                        for (r = t.__k, n = 0; r && n < r.length; n++) r[n] && (r[n].__ = t, i = e(r[n], i, s));
                        return i
                    }
                    return t.__e != i && (s.insertBefore(t.__e, i || null), i = t.__e), i && i.nextSibling
                }(_, l, e) : "function" == typeof _.type && void 0 !== _.__d ? l = _.__d : p && (l = p.nextSibling), _.__d = void 0, _.__u &= -196609);
                i.__d = l, i.__e = g
            }

            function ry(e, t, i) {
                "-" === t[0] ? e.setProperty(t, null == i ? "" : i) : e[t] = null == i ? "" : "number" != typeof i || rl.test(t) ? i : i + "px"
            }

            function rb(e, t, i, s, r) {
                var n;
                e: if ("style" === t) {
                    if ("string" == typeof i) e.style.cssText = i;
                    else {
                        if ("string" == typeof s && (e.style.cssText = s = ""), s)
                            for (t in s) i && t in i || ry(e.style, t, "");
                        if (i)
                            for (t in i) s && i[t] === s[t] || ry(e.style, t, i[t])
                    }
                } else
                if ("o" === t[0] && "n" === t[1]) n = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + n] = i, i ? s ? i.u = s.u : (i.u = Date.now(), e.addEventListener(t, n ? rS : rw, n)) : e.removeEventListener(t, n ? rS : rw, n);
                else {
                    if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e) try {
                        e[t] = null == i ? "" : i;
                        break e
                    } catch (e) {}
                    "function" == typeof i || (null == i || !1 === i && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, i))
                }
            }

            function rw(e) {
                var t = this.l[e.type + !1];
                if (e.t) {
                    if (e.t <= t.u) return
                } else e.t = Date.now();
                return t(s6.event ? s6.event(e) : e)
            }

            function rS(e) {
                return this.l[e.type + !0](s6.event ? s6.event(e) : e)
            }

            function rk(e, t, i, s, r, n, o, a, l, c) {
                var u, d, h, _, p, g, v, f, m, y, b, w, S, k, E, x = t.type;
                if (void 0 !== t.constructor) return null;
                128 & i.__u && (l = !!(32 & i.__u), n = [a = t.__e = i.__e]), (u = s6.__b) && u(t);
                e: if ("function" == typeof x) try {
                    if (f = t.props, m = (u = x.contextType) && s[u.__c], y = u ? m ? m.props.value : u.__ : s, i.__c ? v = (d = t.__c = i.__c).__ = d.__E : ("prototype" in x && x.prototype.render ? t.__c = d = new x(f, y) : (t.__c = d = new rp(f, y), d.constructor = x, d.render = rI), m && m.sub(d), d.props = f, d.state || (d.state = {}), d.context = y, d.__n = s, h = d.__d = !0, d.__h = [], d._sb = []), null == d.__s && (d.__s = d.state), null != x.getDerivedStateFromProps && (d.__s == d.state && (d.__s = ru({}, d.__s)), ru(d.__s, x.getDerivedStateFromProps(f, d.__s))), _ = d.props, p = d.state, d.__v = t, h) null == x.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
                    else {
                        if (null == x.getDerivedStateFromProps && f !== _ && null != d.componentWillReceiveProps && d.componentWillReceiveProps(f, y), !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(f, d.__s, y) || t.__v === i.__v)) {
                            for (t.__v !== i.__v && (d.props = f, d.state = d.__s, d.__d = !1), t.__e = i.__e, t.__k = i.__k, t.__k.forEach(function(e) {
                                    e && (e.__ = t)
                                }), b = 0; b < d._sb.length; b++) d.__h.push(d._sb[b]);
                            d._sb = [], d.__h.length && o.push(d);
                            break e
                        }
                        null != d.componentWillUpdate && d.componentWillUpdate(f, d.__s, y), null != d.componentDidUpdate && d.__h.push(function() {
                            d.componentDidUpdate(_, p, g)
                        })
                    }
                    if (d.context = y, d.props = f, d.__P = e, d.__e = !1, w = s6.__r, S = 0, "prototype" in x && x.prototype.render) {
                        for (d.state = d.__s, d.__d = !1, w && w(t), u = d.render(d.props, d.state, d.context), k = 0; k < d._sb.length; k++) d.__h.push(d._sb[k]);
                        d._sb = []
                    } else
                        do d.__d = !1, w && w(t), u = d.render(d.props, d.state, d.context), d.state = d.__s; while (d.__d && ++S < 25);
                    d.state = d.__s, null != d.getChildContext && (s = ru(ru({}, s), d.getChildContext())), h || null == d.getSnapshotBeforeUpdate || (g = d.getSnapshotBeforeUpdate(_, p)), rm(e, rc(E = null != u && u.type === r_ && null == u.key ? u.props.children : u) ? E : [E], t, i, s, r, n, o, a, l, c), d.base = t.__e, t.__u &= -161, d.__h.length && o.push(d), v && (d.__E = d.__ = null)
                } catch (e) {
                    t.__v = null, l || null != n ? (t.__e = a, t.__u |= l ? 160 : 32, n[n.indexOf(a)] = null) : (t.__e = i.__e, t.__k = i.__k), s6.__e(e, t, i)
                } else null == n && t.__v === i.__v ? (t.__k = i.__k, t.__e = i.__e) : t.__e = function(e, t, i, s, r, n, o, a, l) {
                    var c, u, d, h, _, p, g, v = i.props,
                        f = t.props,
                        m = t.type;
                    if ("svg" === m && (r = !0), null != n) {
                        for (c = 0; c < n.length; c++)
                            if ((_ = n[c]) && "setAttribute" in _ == !!m && (m ? _.localName === m : 3 === _.nodeType)) {
                                e = _, n[c] = null;
                                break
                            }
                    }
                    if (null == e) {
                        if (null === m) return document.createTextNode(f);
                        e = r ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, f.is && f), n = null, a = !1
                    }
                    if (null === m) v === f || a && e.data === f || (e.data = f);
                    else {
                        if (n = n && s5.call(e.childNodes), v = i.props || ro, !a && null != n)
                            for (v = {}, c = 0; c < e.attributes.length; c++) v[(_ = e.attributes[c]).name] = _.value;
                        for (c in v) _ = v[c], "children" == c || ("dangerouslySetInnerHTML" == c ? d = _ : "key" === c || c in f || rb(e, c, null, _, r));
                        for (c in f) _ = f[c], "children" == c ? h = _ : "dangerouslySetInnerHTML" == c ? u = _ : "value" == c ? p = _ : "checked" == c ? g = _ : "key" === c || a && "function" != typeof _ || v[c] === _ || rb(e, c, _, v[c], r);
                        if (u) a || d && (u.__html === d.__html || u.__html === e.innerHTML) || (e.innerHTML = u.__html), t.__k = [];
                        else if (d && (e.innerHTML = ""), rm(e, rc(h) ? h : [h], t, i, s, r && "foreignObject" !== m, n, o, n ? n[0] : i.__k && rg(i, 0), a, l), null != n)
                            for (c = n.length; c--;) null != n[c] && rd(n[c]);
                        a || (c = "value", void 0 === p || p === e[c] && ("progress" !== m || p) && ("option" !== m || p === v[c]) || rb(e, c, p, v[c], !1), c = "checked", void 0 !== g && g !== e[c] && rb(e, c, g, v[c], !1))
                    }
                    return e
                }(i.__e, t, i, s, r, n, o, l, c);
                (u = s6.diffed) && u(t)
            }

            function rE(e, t, i) {
                try {
                    "function" == typeof e ? e(t) : e.current = t
                } catch (e) {
                    s6.__e(e, i)
                }
            }

            function rx(e, t, i) {
                var s, r;
                if (s6.unmount && s6.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || rE(s, null, t)), null != (s = e.__c)) {
                    if (s.componentWillUnmount) try {
                        s.componentWillUnmount()
                    } catch (e) {
                        s6.__e(e, t)
                    }
                    s.base = s.__P = null, e.__c = void 0
                }
                if (s = e.__k)
                    for (r = 0; r < s.length; r++) s[r] && rx(s[r], t, i || "function" != typeof e.type);
                i || null == e.__e || rd(e.__e), e.__ = e.__e = e.__d = void 0
            }

            function rI(e, t, i) {
                return this.constructor(e, i)
            }
            s5 = ra.slice, s6 = {
                    __e: function(e, t, i, s) {
                        for (var r, n, o; t = t.__;)
                            if ((r = t.__c) && !r.__) try {
                                if ((n = r.constructor) && null != n.getDerivedStateFromError && (r.setState(n.getDerivedStateFromError(e)), o = r.__d), null != r.componentDidCatch && (r.componentDidCatch(e, s || {}), o = r.__d), o) return r.__E = r
                            } catch (t) {
                                e = t
                            }
                        throw e
                    }
                }, s8 = 0, rp.prototype.setState = function(e, t) {
                    var i;
                    i = null != this.__s && this.__s !== this.state ? this.__s : this.__s = ru({}, this.state), "function" == typeof e && (e = e(ru({}, i), this.props)), e && ru(i, e), null != e && this.__v && (t && this._sb.push(t), rv(this))
                }, rp.prototype.forceUpdate = function(e) {
                    this.__v && (this.__e = !0, e && this.__h.push(e), rv(this))
                }, rp.prototype.render = r_, s4 = [], s9 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, re = function(e, t) {
                    return e.__v.__b - t.__v.__b
                }, rf.__r = 0, rt = 0,
                function(e) {
                    e.Popover = "popover", e.API = "api", e.Widget = "widget"
                }(ri || (ri = {})),
                function(e) {
                    e.Open = "open", e.MultipleChoice = "multiple_choice", e.SingleChoice = "single_choice", e.Rating = "rating", e.Link = "link"
                }(rs || (rs = {})),
                function(e) {
                    e.NextQuestion = "next_question", e.End = "end", e.ResponseBased = "response_based", e.SpecificQuestion = "specific_question"
                }(rr || (rr = {})),
                function(e) {
                    e.Once = "once", e.Recurring = "recurring", e.Always = "always"
                }(rn || (rn = {})),
                function(e, t) {
                    var i = {
                        __c: t = "__cC" + rt++,
                        __: e,
                        Consumer: function(e, t) {
                            return e.children(t)
                        },
                        Provider: function(e) {
                            var i, s;
                            return this.getChildContext || (i = [], (s = {})[t] = this, this.getChildContext = function() {
                                return s
                            }, this.shouldComponentUpdate = function(e) {
                                this.props.value !== e.value && i.some(function(e) {
                                    e.__e = !0, rv(e)
                                })
                            }, this.sub = function(e) {
                                i.push(e);
                                var t = e.componentWillUnmount;
                                e.componentWillUnmount = function() {
                                    i.splice(i.indexOf(e), 1), t && t.call(e)
                                }
                            }), e.children
                        }
                    };
                    i.Provider.__ = i.Consumer.contextType = i
                }({
                    isPreviewMode: !1,
                    previewPageIndex: 0,
                    onPopupSurveyDismissed: () => {},
                    isPopup: !0,
                    onPreviewSubmit: () => {},
                    onPopupSurveySent: () => {}
                });
            var rP = function(e, t) {
                if (! function(e) {
                        try {
                            new RegExp(e)
                        } catch (e) {
                            return !1
                        }
                        return !0
                    }(t)) return !1;
                try {
                    return new RegExp(t).test(e)
                } catch (e) {
                    return !1
                }
            };
            class rC {
                constructor() {
                    Y(this, "events", {}), this.events = {}
                }
                on(e, t) {
                    return this.events[e] || (this.events[e] = []), this.events[e].push(t), () => {
                        this.events[e] = this.events[e].filter(e => e !== t)
                    }
                }
                emit(e, t) {
                    for (var i of this.events[e] || []) i(t);
                    for (var s of this.events["*"] || []) s(e, t)
                }
            }
            class rF {
                constructor(e) {
                    Y(this, "_debugEventEmitter", new rC), Y(this, "checkStep", (e, t) => this.checkStepEvent(e, t) && this.checkStepUrl(e, t) && this.checkStepElement(e, t)), Y(this, "checkStepEvent", (e, t) => null == t || !t.event || (null == e ? void 0 : e.event) === (null == t ? void 0 : t.event)), this.instance = e, this.actionEvents = new Set, this.actionRegistry = new Set
                }
                init() {
                    var e, t;
                    $(null === (e = this.instance) || void 0 === e ? void 0 : e._addCaptureHook) || null === (t = this.instance) || void 0 === t || t._addCaptureHook((e, t) => {
                        this.on(e, t)
                    })
                }
                register(e) {
                    var t, i;
                    if (!$(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) && (e.forEach(e => {
                            var t, i;
                            null === (t = this.actionRegistry) || void 0 === t || t.add(e), null === (i = e.steps) || void 0 === i || i.forEach(e => {
                                var t;
                                null === (t = this.actionEvents) || void 0 === t || t.add((null == e ? void 0 : e.event) || "")
                            })
                        }), null !== (i = this.instance) && void 0 !== i && i.autocapture)) {
                        var s, r = new Set;
                        e.forEach(e => {
                            var t;
                            null === (t = e.steps) || void 0 === t || t.forEach(e => {
                                null != e && e.selector && r.add(null == e ? void 0 : e.selector)
                            })
                        }), null === (s = this.instance) || void 0 === s || s.autocapture.setElementSelectors(r)
                    }
                }
                on(e, t) {
                    var i;
                    null != t && 0 != e.length && (this.actionEvents.has(e) || this.actionEvents.has(null == t ? void 0 : t.event)) && this.actionRegistry && (null === (i = this.actionRegistry) || void 0 === i ? void 0 : i.size) > 0 && this.actionRegistry.forEach(e => {
                        this.checkAction(t, e) && this._debugEventEmitter.emit("actionCaptured", e.name)
                    })
                }
                _addActionHook(e) {
                    this.onAction("actionCaptured", t => e(t))
                }
                checkAction(e, t) {
                    if (null == (null == t ? void 0 : t.steps)) return !1;
                    for (var i of t.steps)
                        if (this.checkStep(e, i)) return !0;
                    return !1
                }
                onAction(e, t) {
                    return this._debugEventEmitter.on(e, t)
                }
                checkStepUrl(e, t) {
                    if (null != t && t.url) {
                        var i, s = null == e || null === (i = e.properties) || void 0 === i ? void 0 : i.$current_url;
                        if (!s || "string" != typeof s || !rF.matchString(s, null == t ? void 0 : t.url, (null == t ? void 0 : t.url_matching) || "contains")) return !1
                    }
                    return !0
                }
                static matchString(e, t, i) {
                    switch (i) {
                        case "regex":
                            return !!r && rP(e, t);
                        case "exact":
                            return t === e;
                        case "contains":
                            return rP(e, rF.escapeStringRegexp(t).replace(/_/g, ".").replace(/%/g, ".*"));
                        default:
                            return !1
                    }
                }
                static escapeStringRegexp(e) {
                    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
                }
                checkStepElement(e, t) {
                    if ((null != t && t.href || null != t && t.tag_name || null != t && t.text) && !this.getElementsList(e).some(e => !(null != t && t.href && !rF.matchString(e.href || "", null == t ? void 0 : t.href, (null == t ? void 0 : t.href_matching) || "exact")) && (null == t || !t.tag_name || e.tag_name === (null == t ? void 0 : t.tag_name)) && !(null != t && t.text && !rF.matchString(e.text || "", null == t ? void 0 : t.text, (null == t ? void 0 : t.text_matching) || "exact") && !rF.matchString(e.$el_text || "", null == t ? void 0 : t.text, (null == t ? void 0 : t.text_matching) || "exact")))) return !1;
                    if (null != t && t.selector) {
                        var i, s = null == e || null === (i = e.properties) || void 0 === i ? void 0 : i.$element_selectors;
                        if (!s || !s.includes(null == t ? void 0 : t.selector)) return !1
                    }
                    return !0
                }
                getElementsList(e) {
                    return null == (null == e ? void 0 : e.properties.$elements) ? [] : null == e ? void 0 : e.properties.$elements
                }
            }
            class rR {
                constructor(e) {
                    this.instance = e, this.eventToSurveys = new Map, this.actionToSurveys = new Map
                }
                register(e) {
                    var t;
                    $(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) || (this.setupEventBasedSurveys(e), this.setupActionBasedSurveys(e))
                }
                setupActionBasedSurveys(e) {
                    var t = e.filter(e => {
                        var t, i, s, r;
                        return (null === (t = e.conditions) || void 0 === t ? void 0 : t.actions) && (null === (i = e.conditions) || void 0 === i || null === (s = i.actions) || void 0 === s || null === (r = s.values) || void 0 === r ? void 0 : r.length) > 0
                    });
                    0 !== t.length && (null == this.actionMatcher && (this.actionMatcher = new rF(this.instance), this.actionMatcher.init(), this.actionMatcher._addActionHook(e => {
                        this.onAction(e)
                    })), t.forEach(e => {
                        var t, i, s, r, n, o, a, l, c, u;
                        e.conditions && null !== (t = e.conditions) && void 0 !== t && t.actions && null !== (i = e.conditions) && void 0 !== i && null !== (s = i.actions) && void 0 !== s && s.values && (null === (r = e.conditions) || void 0 === r || null === (n = r.actions) || void 0 === n || null === (o = n.values) || void 0 === o ? void 0 : o.length) > 0 && (null === (a = this.actionMatcher) || void 0 === a || a.register(e.conditions.actions.values), null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c || null === (u = c.values) || void 0 === u || u.forEach(t => {
                            if (t && t.name) {
                                var i = this.actionToSurveys.get(t.name);
                                i && i.push(e.id), this.actionToSurveys.set(t.name, i || [e.id])
                            }
                        }))
                    }))
                }
                setupEventBasedSurveys(e) {
                    var t;
                    0 !== e.filter(e => {
                        var t, i, s, r;
                        return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (i = e.conditions) || void 0 === i || null === (s = i.events) || void 0 === s || null === (r = s.values) || void 0 === r ? void 0 : r.length) > 0
                    }).length && (null === (t = this.instance) || void 0 === t || t._addCaptureHook((e, t) => {
                        this.onEvent(e, t)
                    }), e.forEach(e => {
                        var t, i, s;
                        null === (t = e.conditions) || void 0 === t || null === (i = t.events) || void 0 === i || null === (s = i.values) || void 0 === s || s.forEach(t => {
                            if (t && t.name) {
                                var i = this.eventToSurveys.get(t.name);
                                i && i.push(e.id), this.eventToSurveys.set(t.name, i || [e.id])
                            }
                        })
                    }))
                }
                onEvent(e, t) {
                    var i, s, r = (null === (i = this.instance) || void 0 === i || null === (s = i.persistence) || void 0 === s ? void 0 : s.props[eM]) || [];
                    if (rR.SURVEY_SHOWN_EVENT_NAME == e && t && r.length > 0) {
                        var n, o = null == t || null === (n = t.properties) || void 0 === n ? void 0 : n.$survey_id;
                        if (o) {
                            var a = r.indexOf(o);
                            a >= 0 && (r.splice(a, 1), this._updateActivatedSurveys(r))
                        }
                    } else this.eventToSurveys.has(e) && this._updateActivatedSurveys(r.concat(this.eventToSurveys.get(e) || []))
                }
                onAction(e) {
                    var t, i, s = (null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i ? void 0 : i.props[eM]) || [];
                    this.actionToSurveys.has(e) && this._updateActivatedSurveys(s.concat(this.actionToSurveys.get(e) || []))
                }
                _updateActivatedSurveys(e) {
                    var t, i;
                    null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i || i.register({
                        [eM]: [...new Set(e)]
                    })
                }
                getSurveys() {
                    var e, t;
                    return (null === (e = this.instance) || void 0 === e || null === (t = e.persistence) || void 0 === t ? void 0 : t.props[eM]) || []
                }
                getEventToSurveys() {
                    return this.eventToSurveys
                }
                _getActionMatcher() {
                    return this.actionMatcher
                }
            }
            Y(rR, "SURVEY_SHOWN_EVENT_NAME", "survey shown");
            var rT = j("[Surveys]"),
                r$ = {
                    icontains: (e, t) => e.some(e => t.toLowerCase().includes(e.toLowerCase())),
                    not_icontains: (e, t) => e.every(e => !t.toLowerCase().includes(e.toLowerCase())),
                    regex: (e, t) => e.some(e => rP(t, e)),
                    not_regex: (e, t) => e.every(e => !rP(t, e)),
                    exact: (e, t) => e.some(e => t === e),
                    is_not: (e, t) => e.every(e => t !== e)
                };

            function rA(e) {
                return null != e ? e : "icontains"
            }
            class rO {
                constructor(e) {
                    Y(this, "_isFetchingSurveys", !1), Y(this, "_isInitializingSurveys", !1), this.instance = e, this._surveyEventReceiver = null
                }
                onRemoteConfig(e) {
                    this._decideServerResponse = !!e.surveys, rT.info("decideServerResponse set to ".concat(this._decideServerResponse)), this.loadIfEnabled()
                }
                reset() {
                    localStorage.removeItem("lastSeenSurveyDate"), (() => {
                        for (var e = [], t = 0; t < localStorage.length; t++) {
                            var i = localStorage.key(t);
                            null != i && i.startsWith("seenSurvey_") && e.push(i)
                        }
                        return e
                    })().forEach(e => localStorage.removeItem(e))
                }
                loadIfEnabled() {
                    if (!this._surveyManager) {
                        if (this._isInitializingSurveys) rT.info("Already initializing surveys, skipping...");
                        else if (this.instance.config.disable_surveys) rT.info("Disabled. Not loading surveys.");
                        else {
                            var e = null == v ? void 0 : v.__PosthogExtensions__;
                            if (e) {
                                if (this._decideServerResponse) {
                                    this._isInitializingSurveys = !0;
                                    try {
                                        var t = e.generateSurveys;
                                        if (t) this._surveyManager = t(this.instance), this._isInitializingSurveys = !1, this._surveyEventReceiver = new rR(this.instance), rT.info("Surveys loaded successfully");
                                        else {
                                            var i = e.loadExternalDependency;
                                            i ? i(this.instance, "surveys", t => {
                                                if (t || !e.generateSurveys) return rT.error("Could not load surveys script", t), void(this._isInitializingSurveys = !1);
                                                this._surveyManager = e.generateSurveys(this.instance), this._isInitializingSurveys = !1, this._surveyEventReceiver = new rR(this.instance), rT.info("Surveys loaded successfully")
                                            }) : (rT.error("PostHog loadExternalDependency extension not found. Cannot load remote config."), this._isInitializingSurveys = !1)
                                        }
                                    } catch (e) {
                                        throw rT.error("Error initializing surveys", e), this._isInitializingSurveys = !1, e
                                    }
                                } else rT.warn("Decide not loaded yet. Not loading surveys.")
                            } else rT.error("PostHog Extensions not found.")
                        }
                    }
                }
                getSurveys(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.instance.config.disable_surveys) return rT.info("Disabled. Not loading surveys."), e([]);
                    var i = this.instance.get_property(eO);
                    if (i && !t) return e(i);
                    if (this._isFetchingSurveys) return e([]);
                    try {
                        this._isFetchingSurveys = !0, this.instance._send_request({
                            url: this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)),
                            method: "GET",
                            timeout: this.instance.config.surveys_request_timeout_ms,
                            callback: t => {
                                this._isFetchingSurveys = !1;
                                var i = t.statusCode;
                                if (200 !== i || !t.json) return rT.error("Surveys API could not be loaded, status: ".concat(i)), e([]);
                                var s, r, n = t.json.surveys || [],
                                    o = n.filter(e => {
                                        var t, i, s, r, n, o, a, l, c, u, d, h;
                                        return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (i = e.conditions) || void 0 === i || null === (s = i.events) || void 0 === s ? void 0 : s.values) && (null === (r = e.conditions) || void 0 === r || null === (n = r.events) || void 0 === n || null === (o = n.values) || void 0 === o ? void 0 : o.length) > 0 || (null === (a = e.conditions) || void 0 === a ? void 0 : a.actions) && (null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c ? void 0 : c.values) && (null === (u = e.conditions) || void 0 === u || null === (d = u.actions) || void 0 === d || null === (h = d.values) || void 0 === h ? void 0 : h.length) > 0
                                    });
                                return o.length > 0 && (null === (r = this._surveyEventReceiver) || void 0 === r || r.register(o)), null === (s = this.instance.persistence) || void 0 === s || s.register({
                                    [eO]: n
                                }), e(n)
                            }
                        })
                    } catch (e) {
                        throw this._isFetchingSurveys = !1, e
                    }
                }
                isSurveyFeatureFlagEnabled(e) {
                    return !e || this.instance.featureFlags.isFeatureEnabled(e)
                }
                getActiveMatchingSurveys(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.getSurveys(t => {
                        var i, s = t.filter(e => !(!e.start_date || e.end_date)).filter(e => {
                                if (!e.conditions) return !0;
                                var t, i = function(e) {
                                        if (null === (t = e.conditions) || void 0 === t || !t.url) return !0;
                                        var t, i, s, n = null == r || null === (i = r.location) || void 0 === i ? void 0 : i.href;
                                        if (!n) return !1;
                                        var o = [e.conditions.url];
                                        return r$[rA(null === (s = e.conditions) || void 0 === s ? void 0 : s.urlMatchType)](o, n)
                                    }(e),
                                    s = null === (t = e.conditions) || void 0 === t || !t.selector || (null == u ? void 0 : u.querySelector(e.conditions.selector)),
                                    n = function(e) {
                                        if (null === (t = e.conditions) || void 0 === t || !t.deviceTypes || 0 === (null === (i = e.conditions) || void 0 === i ? void 0 : i.deviceTypes.length)) return !0;
                                        if (!g) return !1;
                                        var t, i, s, r = s1.deviceType(g);
                                        return r$[rA(null === (s = e.conditions) || void 0 === s ? void 0 : s.deviceTypesMatchType)](e.conditions.deviceTypes, r)
                                    }(e);
                                return i && s && n
                            }),
                            n = null === (i = this._surveyEventReceiver) || void 0 === i ? void 0 : i.getSurveys();
                        return e(s.filter(e => {
                            if (!(e.linked_flag_key || e.targeting_flag_key || e.internal_targeting_flag_key || null !== (t = e.feature_flag_keys) && void 0 !== t && t.length)) return !0;
                            var t, i, s, r, o, a, l, c, u, d = this.isSurveyFeatureFlagEnabled(e.linked_flag_key),
                                h = this.isSurveyFeatureFlagEnabled(e.targeting_flag_key),
                                _ = (null !== (i = null === (s = e.conditions) || void 0 === s || null === (r = s.events) || void 0 === r || null === (o = r.values) || void 0 === o ? void 0 : o.length) && void 0 !== i ? i : 0) > 0,
                                p = (null !== (a = null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c || null === (u = c.values) || void 0 === u ? void 0 : u.length) && void 0 !== a ? a : 0) > 0,
                                g = !_ && !p || (null == n ? void 0 : n.includes(e.id)),
                                v = this._canActivateRepeatedly(e) || this.isSurveyFeatureFlagEnabled(e.internal_targeting_flag_key),
                                f = this.checkFlags(e);
                            return d && h && v && g && f
                        }))
                    }, t)
                }
                checkFlags(e) {
                    var t;
                    return null === (t = e.feature_flag_keys) || void 0 === t || !t.length || e.feature_flag_keys.every(e => {
                        var {
                            key: t,
                            value: i
                        } = e;
                        return !t || !i || this.instance.featureFlags.isFeatureEnabled(i)
                    })
                }
                _canActivateRepeatedly(e) {
                    var t;
                    return L(null === (t = v.__PosthogExtensions__) || void 0 === t ? void 0 : t.canActivateRepeatedly) ? (rT.warn("init was not called"), !1) : v.__PosthogExtensions__.canActivateRepeatedly(e)
                }
                canRenderSurvey(e) {
                    L(this._surveyManager) ? rT.warn("init was not called") : this.getSurveys(t => {
                        var i = t.filter(t => t.id === e)[0];
                        this._surveyManager.canRenderSurvey(i)
                    })
                }
                renderSurvey(e, t) {
                    L(this._surveyManager) ? rT.warn("init was not called") : this.getSurveys(i => {
                        var s = i.filter(t => t.id === e)[0];
                        this._surveyManager.renderSurvey(s, null == u ? void 0 : u.querySelector(t))
                    })
                }
            }
            var rM = j("[RateLimiter]");
            class rL {
                constructor(e) {
                    var t, i;
                    Y(this, "serverLimits", {}), Y(this, "lastEventRateLimited", !1), Y(this, "checkForLimiting", e => {
                        var t = e.text;
                        if (t && t.length) try {
                            (JSON.parse(t).quota_limited || []).forEach(e => {
                                rM.info("".concat(e || "events", " is quota limited.")), this.serverLimits[e] = (new Date).getTime() + 6e4
                            })
                        } catch (e) {
                            return void rM.warn('could not rate limit - continuing. Error: "'.concat(null == e ? void 0 : e.message, '"'), {
                                text: t
                            })
                        }
                    }), this.instance = e, this.captureEventsPerSecond = (null === (t = e.config.rate_limiting) || void 0 === t ? void 0 : t.events_per_second) || 10, this.captureEventsBurstLimit = Math.max((null === (i = e.config.rate_limiting) || void 0 === i ? void 0 : i.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
                }
                clientRateLimitContext() {
                    var e, t, i, s = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        r = (new Date).getTime(),
                        n = null !== (e = null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.get_property(eN)) && void 0 !== e ? e : {
                            tokens: this.captureEventsBurstLimit,
                            last: r
                        };
                    n.tokens += (r - n.last) / 1e3 * this.captureEventsPerSecond, n.last = r, n.tokens > this.captureEventsBurstLimit && (n.tokens = this.captureEventsBurstLimit);
                    var o = n.tokens < 1;
                    return o || s || (n.tokens = Math.max(0, n.tokens - 1)), !o || this.lastEventRateLimited || s || this.instance.capture("$$client_ingestion_warning", {
                        $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond, " events per second and ").concat(this.captureEventsBurstLimit, " events burst limit.")
                    }, {
                        skip_client_rate_limiting: !0
                    }), this.lastEventRateLimited = o, null === (i = this.instance.persistence) || void 0 === i || i.set_property(eN, n), {
                        isRateLimited: o,
                        remainingTokens: n.tokens
                    }
                }
                isServerRateLimited(e) {
                    var t = this.serverLimits[e || "events"] || !1;
                    return !1 !== t && (new Date).getTime() < t
                }
            }
            var rD = j("[RemoteConfig]");
            class rq {
                constructor(e) {
                    this.instance = e
                }
                get remoteConfig() {
                    var e, t;
                    return null === (e = v._POSTHOG_REMOTE_CONFIG) || void 0 === e || null === (t = e[this.instance.config.token]) || void 0 === t ? void 0 : t.config
                }
                _loadRemoteConfigJs(e) {
                    var t, i, s;
                    null !== (t = v.__PosthogExtensions__) && void 0 !== t && t.loadExternalDependency ? null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.loadExternalDependency) || void 0 === s || s.call(i, this.instance, "remote-config", () => e(this.remoteConfig)) : (rD.error("PostHog Extensions not found. Cannot load remote config."), e())
                }
                _loadRemoteConfigJSON(e) {
                    this.instance._send_request({
                        method: "GET",
                        url: this.instance.requestRouter.endpointFor("assets", "/array/".concat(this.instance.config.token, "/config")),
                        callback: t => {
                            e(t.json)
                        }
                    })
                }
                load() {
                    try {
                        if (this.remoteConfig) return rD.info("Using preloaded remote config", this.remoteConfig), void this.onRemoteConfig(this.remoteConfig);
                        if (this.instance.config.advanced_disable_decide) return void rD.warn("Remote config is disabled. Falling back to local config.");
                        this._loadRemoteConfigJs(e => {
                            if (!e) return rD.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON(e => {
                                this.onRemoteConfig(e)
                            });
                            this.onRemoteConfig(e)
                        })
                    } catch (e) {
                        rD.error("Error loading remote config", e)
                    }
                }
                onRemoteConfig(e) {
                    e ? this.instance.config.__preview_remote_config ? (this.instance._onRemoteConfig(e), !1 !== e.hasFeatureFlags && this.instance.featureFlags.ensureFlagsLoaded()) : rD.info("__preview_remote_config is disabled. Logging config instead", e) : rD.error("Failed to fetch remote config from PostHog.")
                }
            }
            var rN = function(e) {
                    var t, i, s, r, n = "";
                    for (t = i = 0, s = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, r = 0; r < s; r++) {
                        var o = e.charCodeAt(r),
                            a = null;
                        o < 128 ? i++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), M(a) || (i > t && (n += e.substring(t, i)), n += a, t = i = r + 1)
                    }
                    return i > t && (n += e.substring(t, e.length)), n
                },
                rB = !!_ || !!h,
                rH = "text/plain",
                rU = (e, t) => {
                    var [i, s] = e.split("?"), r = J({}, t);
                    null == s || s.split("&").forEach(e => {
                        var [t] = e.split("=");
                        delete r[t]
                    });
                    var n = tu(r);
                    return n = n ? (s ? s + "&" : "") + n : s, "".concat(i, "?").concat(n)
                },
                rz = (e, t) => JSON.stringify(e, (e, t) => "bigint" == typeof t ? t.toString() : t, t),
                rj = e => {
                    var {
                        data: t,
                        compression: i
                    } = e;
                    if (t) {
                        if (i === s.GZipJS) {
                            var r = new Blob([iR(iT(rz(t)), {
                                mtime: 0
                            })], {
                                type: rH
                            });
                            return {
                                contentType: rH,
                                body: r,
                                estimatedSize: r.size
                            }
                        }
                        if (i === s.Base64) {
                            var n = (e => "data=" + encodeURIComponent("string" == typeof e ? e : rz(e)))(function(e) {
                                var t, i, s, r, n, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                                    a = 0,
                                    l = 0,
                                    c = "",
                                    u = [];
                                if (!e) return e;
                                e = rN(e);
                                do t = (n = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, i = n >> 12 & 63, s = n >> 6 & 63, r = 63 & n, u[l++] = o.charAt(t) + o.charAt(i) + o.charAt(s) + o.charAt(r); while (a < e.length);
                                switch (c = u.join(""), e.length % 3) {
                                    case 1:
                                        c = c.slice(0, -2) + "==";
                                        break;
                                    case 2:
                                        c = c.slice(0, -1) + "="
                                }
                                return c
                            }(rz(t)));
                            return {
                                contentType: "application/x-www-form-urlencoded",
                                body: n,
                                estimatedSize: new Blob([n]).size
                            }
                        }
                        var o = rz(t);
                        return {
                            contentType: "application/json",
                            body: o,
                            estimatedSize: new Blob([o]).size
                        }
                    }
                },
                rW = [];
            h && rW.push({
                transport: "fetch",
                method: e => {
                    var t, i, {
                            contentType: s,
                            body: r,
                            estimatedSize: n
                        } = null !== (t = rj(e)) && void 0 !== t ? t : {},
                        o = new Headers;
                    Z(e.headers, function(e, t) {
                        o.append(t, e)
                    }), s && o.append("Content-Type", s);
                    var a = e.url,
                        l = null;
                    if (p) {
                        var c = new p;
                        l = {
                            signal: c.signal,
                            timeout: setTimeout(() => c.abort(), e.timeout)
                        }
                    }
                    h(a, J({
                        method: (null == e ? void 0 : e.method) || "GET",
                        headers: o,
                        keepalive: "POST" === e.method && 52428.8 > (n || 0),
                        body: r,
                        signal: null === (i = l) || void 0 === i ? void 0 : i.signal
                    }, e.fetchOptions)).then(t => t.text().then(i => {
                        var s, r = {
                            statusCode: t.status,
                            text: i
                        };
                        if (200 === t.status) try {
                            r.json = JSON.parse(i)
                        } catch (e) {
                            z.error(e)
                        }
                        null === (s = e.callback) || void 0 === s || s.call(e, r)
                    })).catch(t => {
                        var i;
                        z.error(t), null === (i = e.callback) || void 0 === i || i.call(e, {
                            statusCode: 0,
                            text: t
                        })
                    }).finally(() => l ? clearTimeout(l.timeout) : null)
                }
            }), _ && rW.push({
                transport: "XHR",
                method: e => {
                    var t, i = new _;
                    i.open(e.method || "GET", e.url, !0);
                    var {
                        contentType: s,
                        body: r
                    } = null !== (t = rj(e)) && void 0 !== t ? t : {};
                    Z(e.headers, function(e, t) {
                        i.setRequestHeader(t, e)
                    }), s && i.setRequestHeader("Content-Type", s), e.timeout && (i.timeout = e.timeout), i.withCredentials = !0, i.onreadystatechange = () => {
                        if (4 === i.readyState) {
                            var t, s = {
                                statusCode: i.status,
                                text: i.responseText
                            };
                            if (200 === i.status) try {
                                s.json = JSON.parse(i.responseText)
                            } catch (e) {}
                            null === (t = e.callback) || void 0 === t || t.call(e, s)
                        }
                    }, i.send(r)
                }
            }), null != c && c.sendBeacon && rW.push({
                transport: "sendBeacon",
                method: e => {
                    var t = rU(e.url, {
                        beacon: "1"
                    });
                    try {
                        var i, {
                                contentType: s,
                                body: r
                            } = null !== (i = rj(e)) && void 0 !== i ? i : {},
                            n = "string" == typeof r ? new Blob([r], {
                                type: s
                            }) : r;
                        c.sendBeacon(t, n)
                    } catch (e) {}
                }
            });
            class rV {
                constructor(e, t) {
                    Y(this, "isPaused", !0), Y(this, "queue", []), this.flushTimeoutMs = t2((null == t ? void 0 : t.flush_interval_ms) || 3e3, 250, 5e3, "flush interval", 3e3), this.sendRequest = e
                }
                enqueue(e) {
                    this.queue.push(e), this.flushTimeout || this.setFlushTimeout()
                }
                unload() {
                    this.clearFlushTimeout();
                    var e = Object.values(this.queue.length > 0 ? this.formatQueue() : {});
                    [...e.filter(e => 0 === e.url.indexOf("/e")), ...e.filter(e => 0 !== e.url.indexOf("/e"))].map(e => {
                        this.sendRequest(J(J({}, e), {}, {
                            transport: "sendBeacon"
                        }))
                    })
                }
                enable() {
                    this.isPaused = !1, this.setFlushTimeout()
                }
                setFlushTimeout() {
                    var e = this;
                    this.isPaused || (this.flushTimeout = setTimeout(() => {
                        if (this.clearFlushTimeout(), this.queue.length > 0) {
                            var t = this.formatQueue();
                            for (var i in t) ! function(i) {
                                var s = t[i],
                                    r = (new Date).getTime();
                                s.data && C(s.data) && Z(s.data, e => {
                                    e.offset = Math.abs(e.timestamp - r), delete e.timestamp
                                }), e.sendRequest(s)
                            }(i)
                        }
                    }, this.flushTimeoutMs))
                }
                clearFlushTimeout() {
                    clearTimeout(this.flushTimeout), this.flushTimeout = void 0
                }
                formatQueue() {
                    var e = {};
                    return Z(this.queue, t => {
                        var i, s = (t ? t.batchKey : null) || t.url;
                        $(e[s]) && (e[s] = J(J({}, t), {}, {
                            data: []
                        })), null === (i = e[s].data) || void 0 === i || i.push(t.data)
                    }), this.queue = [], e
                }
            }
            var rG = ["retriesPerformedSoFar"];
            class rJ {
                constructor(e) {
                    Y(this, "isPolling", !1), Y(this, "pollIntervalMs", 3e3), Y(this, "queue", []), this.instance = e, this.queue = [], this.areWeOnline = !0, !$(r) && "onLine" in r.navigator && (this.areWeOnline = r.navigator.onLine, el(r, "online", () => {
                        this.areWeOnline = !0, this.flush()
                    }), el(r, "offline", () => {
                        this.areWeOnline = !1
                    }))
                }
                retriableRequest(e) {
                    var {
                        retriesPerformedSoFar: t
                    } = e, i = K(e, rG);
                    D(t) && t > 0 && (i.url = rU(i.url, {
                        retry_count: t
                    })), this.instance._send_request(J(J({}, i), {}, {
                        callback: e => {
                            var s;
                            200 !== e.statusCode && (e.statusCode < 400 || e.statusCode >= 500) && (null != t ? t : 0) < 10 ? this.enqueue(J({
                                retriesPerformedSoFar: t
                            }, i)) : null === (s = i.callback) || void 0 === s || s.call(i, e)
                        }
                    }))
                }
                enqueue(e) {
                    var t, i, s, r = e.retriesPerformedSoFar || 0;
                    e.retriesPerformedSoFar = r + 1;
                    var n = (s = (Math.random() - .5) * ((i = Math.min(18e5, t = 3e3 * Math.pow(2, r))) - t / 2), Math.ceil(i + s)),
                        o = Date.now() + n;
                    this.queue.push({
                        retryAt: o,
                        requestOptions: e
                    });
                    var a = "Enqueued failed request for retry in ".concat(n);
                    navigator.onLine || (a += " (Browser is offline)"), z.warn(a), this.isPolling || (this.isPolling = !0, this.poll())
                }
                poll() {
                    this.poller && clearTimeout(this.poller), this.poller = setTimeout(() => {
                        this.areWeOnline && this.queue.length > 0 && this.flush(), this.poll()
                    }, this.pollIntervalMs)
                }
                flush() {
                    var e = Date.now(),
                        t = [],
                        i = this.queue.filter(i => i.retryAt < e || (t.push(i), !1));
                    if (this.queue = t, i.length > 0)
                        for (var {
                                requestOptions: s
                            } of i) this.retriableRequest(s)
                }
                unload() {
                    for (var {
                            requestOptions: e
                        } of (this.poller && (clearTimeout(this.poller), this.poller = void 0), this.queue)) try {
                        this.instance._send_request(J(J({}, e), {}, {
                            transport: "sendBeacon"
                        }))
                    } catch (e) {
                        z.error(e)
                    }
                    this.queue = []
                }
            }
            class rY {
                constructor(e) {
                    Y(this, "_updateScrollData", () => {
                        this.context || (this.context = {});
                        var e, t, i, s, r = this.scrollElement(),
                            n = this.scrollY(),
                            o = r ? Math.max(0, r.scrollHeight - r.clientHeight) : 0,
                            a = n + ((null == r ? void 0 : r.clientHeight) || 0),
                            l = (null == r ? void 0 : r.scrollHeight) || 0;
                        this.context.lastScrollY = Math.ceil(n), this.context.maxScrollY = Math.max(n, null !== (e = this.context.maxScrollY) && void 0 !== e ? e : 0), this.context.maxScrollHeight = Math.max(o, null !== (t = this.context.maxScrollHeight) && void 0 !== t ? t : 0), this.context.lastContentY = a, this.context.maxContentY = Math.max(a, null !== (i = this.context.maxContentY) && void 0 !== i ? i : 0), this.context.maxContentHeight = Math.max(l, null !== (s = this.context.maxContentHeight) && void 0 !== s ? s : 0)
                    }), this.instance = e
                }
                getContext() {
                    return this.context
                }
                resetContext() {
                    var e = this.context;
                    return setTimeout(this._updateScrollData, 0), e
                }
                startMeasuringScrollPosition() {
                    el(r, "scroll", this._updateScrollData, {
                        capture: !0
                    }), el(r, "scrollend", this._updateScrollData, {
                        capture: !0
                    }), el(r, "resize", this._updateScrollData)
                }
                scrollElement() {
                    if (!this.instance.config.scroll_root_selector) return null == r ? void 0 : r.document.documentElement;
                    for (var e of C(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [this.instance.config.scroll_root_selector]) {
                        var t = null == r ? void 0 : r.document.querySelector(e);
                        if (t) return t
                    }
                }
                scrollY() {
                    if (this.instance.config.scroll_root_selector) {
                        var e = this.scrollElement();
                        return e && e.scrollTop || 0
                    }
                    return r && (r.scrollY || r.pageYOffset || r.document.documentElement.scrollTop) || 0
                }
                scrollX() {
                    if (this.instance.config.scroll_root_selector) {
                        var e = this.scrollElement();
                        return e && e.scrollLeft || 0
                    }
                    return r && (r.scrollX || r.pageXOffset || r.document.documentElement.scrollLeft) || 0
                }
            }
            var rK = e => s1.personInfo({
                maskPersonalDataProperties: null == e ? void 0 : e.config.mask_personal_data_properties,
                customPersonalDataProperties: null == e ? void 0 : e.config.custom_personal_data_properties
            });
            class rQ {
                constructor(e, t, i, s) {
                    Y(this, "_onSessionIdCallback", e => {
                        var t = this._getStored();
                        if (!t || t.sessionId !== e) {
                            var i = {
                                sessionId: e,
                                props: this._sessionSourceParamGenerator(this.instance)
                            };
                            this._persistence.register({
                                [eq]: i
                            })
                        }
                    }), this.instance = e, this._sessionIdManager = t, this._persistence = i, this._sessionSourceParamGenerator = s || rK, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
                }
                _getStored() {
                    return this._persistence.props[eq]
                }
                getSetOnceProps() {
                    var e, t = null === (e = this._getStored()) || void 0 === e ? void 0 : e.props;
                    return t ? "r" in t ? s1.personPropsFromInfo(t) : {
                        $referring_domain: t.referringDomain,
                        $pathname: t.initialPathName,
                        utm_source: t.utm_source,
                        utm_campaign: t.utm_campaign,
                        utm_medium: t.utm_medium,
                        utm_content: t.utm_content,
                        utm_term: t.utm_term
                    } : {}
                }
                getSessionProps() {
                    var e = {};
                    return Z(en(this.getSetOnceProps()), (t, i) => {
                        "$current_url" === i && (i = "url"), e["$session_entry_".concat(k(i))] = t
                    }), e
                }
            }
            var rX = j("[SessionId]");
            class rZ {
                constructor(e, t, i) {
                    if (Y(this, "_sessionIdChangedHandlers", []), !e.persistence) throw Error("SessionIdManager requires a PostHogPersistence instance");
                    if (e.config.__preview_experimental_cookieless_mode) throw Error("SessionIdManager cannot be used with __preview_experimental_cookieless_mode");
                    this.config = e.config, this.persistence = e.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = t || tE, this._windowIdGenerator = i || tE;
                    var s, r = this.config.persistence_name || this.config.token,
                        n = this.config.session_idle_timeout_seconds || 1800;
                    if (this._sessionTimeoutMs = 1e3 * t2(n, 60, 36e3, "session_idle_timeout_seconds", 1800), e.register({
                            $configured_session_timeout_ms: this._sessionTimeoutMs
                        }), this.resetIdleTimer(), this._window_id_storage_key = "ph_" + r + "_window_id", this._primary_window_exists_storage_key = "ph_" + r + "_primary_window_exists", this._canUseSessionStorage()) {
                        var o = tL.parse(this._window_id_storage_key),
                            a = tL.parse(this._primary_window_exists_storage_key);
                        o && !a ? this._windowId = o : tL.remove(this._window_id_storage_key), tL.set(this._primary_window_exists_storage_key, !0)
                    }
                    if (null !== (s = this.config.bootstrap) && void 0 !== s && s.sessionID) try {
                        var l = (e => {
                            var t = e.replace(/-/g, "");
                            if (32 !== t.length) throw Error("Not a valid UUID");
                            if ("7" !== t[12]) throw Error("Not a UUIDv7");
                            return parseInt(t.substring(0, 12), 16)
                        })(this.config.bootstrap.sessionID);
                        this._setSessionId(this.config.bootstrap.sessionID, (new Date).getTime(), l)
                    } catch (e) {
                        rX.error("Invalid sessionID in bootstrap", e)
                    }
                    this._listenToReloadWindow()
                }
                get sessionTimeoutMs() {
                    return this._sessionTimeoutMs
                }
                onSessionId(e) {
                    return $(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId), () => {
                        this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter(t => t !== e)
                    }
                }
                _canUseSessionStorage() {
                    return "memory" !== this.config.persistence && !this.persistence.disabled && tL.is_supported()
                }
                _setWindowId(e) {
                    e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && tL.set(this._window_id_storage_key, e))
                }
                _getWindowId() {
                    return this._windowId ? this._windowId : this._canUseSessionStorage() ? tL.parse(this._window_id_storage_key) : null
                }
                _setSessionId(e, t, i) {
                    e === this._sessionId && t === this._sessionActivityTimestamp && i === this._sessionStartTimestamp || (this._sessionStartTimestamp = i, this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register({
                        [eI]: [t, e, i]
                    }))
                }
                _getSessionId() {
                    if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
                    var e = this.persistence.props[eI];
                    return C(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0]
                }
                resetSessionId() {
                    this._setSessionId(null, null, null)
                }
                _listenToReloadWindow() {
                    el(r, "beforeunload", () => {
                        this._canUseSessionStorage() && tL.remove(this._primary_window_exists_storage_key)
                    }, {
                        capture: !1
                    })
                }
                checkAndGetSessionAndWindowId() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (this.config.__preview_experimental_cookieless_mode) throw Error("checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode");
                    var i = t || (new Date).getTime(),
                        [s, r, n] = this._getSessionId(),
                        o = this._getWindowId(),
                        a = D(n) && n > 0 && Math.abs(i - n) > 864e5,
                        l = !1,
                        c = !r,
                        u = !e && Math.abs(i - s) > this.sessionTimeoutMs;
                    c || u || a ? (r = this._sessionIdGenerator(), o = this._windowIdGenerator(), rX.info("new session ID generated", {
                        sessionId: r,
                        windowId: o,
                        changeReason: {
                            noSessionId: c,
                            activityTimeout: u,
                            sessionPastMaximumLength: a
                        }
                    }), n = i, l = !0) : o || (o = this._windowIdGenerator(), l = !0);
                    var d = 0 === s || !e || a ? i : s,
                        h = 0 === n ? (new Date).getTime() : n;
                    return this._setWindowId(o), this._setSessionId(r, d, h), e || this.resetIdleTimer(), l && this._sessionIdChangedHandlers.forEach(e => e(r, o, l ? {
                        noSessionId: c,
                        activityTimeout: u,
                        sessionPastMaximumLength: a
                    } : void 0)), {
                        sessionId: r,
                        windowId: o,
                        sessionStartTimestamp: h,
                        changeReason: l ? {
                            noSessionId: c,
                            activityTimeout: u,
                            sessionPastMaximumLength: a
                        } : void 0,
                        lastActivityTimestamp: s
                    }
                }
                resetIdleTimer() {
                    clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout(() => {
                        this.resetSessionId()
                    }, 1.1 * this.sessionTimeoutMs)
                }
            }
            var r0 = ["$set_once", "$set"],
                r1 = j("[SiteApps]");
            class r2 {
                constructor(e) {
                    this.instance = e, this.bufferedInvocations = [], this.apps = {}
                }
                get isEnabled() {
                    return !!this.instance.config.opt_in_site_apps
                }
                eventCollector(e, t) {
                    if (t) {
                        var i = this.globalsForEvent(t);
                        this.bufferedInvocations.push(i), this.bufferedInvocations.length > 1e3 && (this.bufferedInvocations = this.bufferedInvocations.slice(10))
                    }
                }
                get siteAppLoaders() {
                    var e, t;
                    return null === (e = v._POSTHOG_REMOTE_CONFIG) || void 0 === e || null === (t = e[this.instance.config.token]) || void 0 === t ? void 0 : t.siteApps
                }
                init() {
                    if (this.isEnabled) {
                        var e = this.instance._addCaptureHook(this.eventCollector.bind(this));
                        this.stopBuffering = () => {
                            e(), this.bufferedInvocations = [], this.stopBuffering = void 0
                        }
                    }
                }
                globalsForEvent(e) {
                    if (!e) throw Error("Event payload is required");
                    var t, i, s, r, n, o, a, l = {},
                        c = this.instance.get_property("$groups") || [];
                    for (var [u, d] of Object.entries(this.instance.get_property("$stored_group_properties") || {})) l[u] = {
                        id: c[u],
                        type: u,
                        properties: d
                    };
                    var {
                        $set_once: h,
                        $set: _
                    } = e;
                    return {
                        event: J(J({}, K(e, r0)), {}, {
                            properties: J(J(J({}, e.properties), _ ? {
                                $set: J(J({}, null !== (t = null === (i = e.properties) || void 0 === i ? void 0 : i.$set) && void 0 !== t ? t : {}), _)
                            } : {}), h ? {
                                $set_once: J(J({}, null !== (s = null === (r = e.properties) || void 0 === r ? void 0 : r.$set_once) && void 0 !== s ? s : {}), h)
                            } : {}),
                            elements_chain: null !== (n = null === (o = e.properties) || void 0 === o ? void 0 : o.$elements_chain) && void 0 !== n ? n : "",
                            distinct_id: null === (a = e.properties) || void 0 === a ? void 0 : a.distinct_id
                        }),
                        person: {
                            properties: this.instance.get_property("$stored_person_properties")
                        },
                        groups: l
                    }
                }
                setupSiteApp(e) {
                    var t = this.apps[e.id],
                        i = () => {
                            var i;
                            !t.errored && this.bufferedInvocations.length && (r1.info("Processing ".concat(this.bufferedInvocations.length, " events for site app with id ").concat(e.id)), this.bufferedInvocations.forEach(e => {
                                var i;
                                return null === (i = t.processEvent) || void 0 === i ? void 0 : i.call(t, e)
                            }), t.processedBuffer = !0), Object.values(this.apps).every(e => e.processedBuffer || e.errored) && (null === (i = this.stopBuffering) || void 0 === i || i.call(this))
                        },
                        s = !1,
                        r = r => {
                            t.errored = !r, t.loaded = !0, r1.info("Site app with id ".concat(e.id, " ").concat(r ? "loaded" : "errored")), s && i()
                        };
                    try {
                        var {
                            processEvent: n
                        } = e.init({
                            posthog: this.instance,
                            callback: e => {
                                r(e)
                            }
                        });
                        n && (t.processEvent = n), s = !0
                    } catch (t) {
                        r1.error("Error while initializing PostHog app with config id ".concat(e.id), t), r(!1)
                    }
                    if (s && t.loaded) try {
                        i()
                    } catch (i) {
                        r1.error("Error while processing buffered events PostHog app with config id ".concat(e.id), i), t.errored = !0
                    }
                }
                setupSiteApps() {
                    var e = this.siteAppLoaders || [];
                    for (var t of e) this.apps[t.id] = {
                        id: t.id,
                        loaded: !1,
                        errored: !1,
                        processedBuffer: !1
                    };
                    for (var i of e) this.setupSiteApp(i)
                }
                onCapturedEvent(e) {
                    if (0 !== Object.keys(this.apps).length) {
                        var t, i = this.globalsForEvent(e);
                        for (var s of Object.values(this.apps)) try {
                            null === (t = s.processEvent) || void 0 === t || t.call(s, i)
                        } catch (t) {
                            r1.error("Error while processing event ".concat(e.event, " for site app ").concat(s.id), t)
                        }
                    }
                }
                onRemoteConfig(e) {
                    var t, i, s, r = this;
                    if (null !== (t = this.siteAppLoaders) && void 0 !== t && t.length) return this.isEnabled ? (this.setupSiteApps(), void this.instance.on("eventCaptured", e => this.onCapturedEvent(e))) : void r1.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
                    if (null === (i = this.stopBuffering) || void 0 === i || i.call(this), null !== (s = e.siteApps) && void 0 !== s && s.length) {
                        if (this.isEnabled) {
                            var n = function(e, t) {
                                var i, s;
                                v["__$$ph_site_app_".concat(e)] = r.instance, null === (i = v.__PosthogExtensions__) || void 0 === i || null === (s = i.loadSiteApp) || void 0 === s || s.call(i, r.instance, t, t => {
                                    if (t) return r1.error("Error while initializing PostHog app with config id ".concat(e), t)
                                })
                            };
                            for (var {
                                    id: o,
                                    url: a
                                } of e.siteApps) n(o, a)
                        } else r1.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
                    }
                }
            }
            var r3, r5 = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google", "bytespider"],
                r6 = function(e, t) {
                    if (!e) return !1;
                    var i = e.toLowerCase();
                    return r5.concat(t || []).some(e => {
                        var t = e.toLowerCase();
                        return -1 !== i.indexOf(t)
                    })
                },
                r8 = function(e, t) {
                    if (!e) return !1;
                    var i = e.userAgent;
                    if (i && r6(i, t)) return !0;
                    try {
                        var s = null == e ? void 0 : e.userAgentData;
                        if (null != s && s.brands && s.brands.some(e => r6(null == e ? void 0 : e.brand, t))) return !0
                    } catch (e) {}
                    return !!e.webdriver
                };

            function r4(e, t, i) {
                return rz({
                    distinct_id: e,
                    userPropertiesToSet: t,
                    userPropertiesToSetOnce: i
                })
            }! function(e) {
                e.US = "us", e.EU = "eu", e.CUSTOM = "custom"
            }(r3 || (r3 = {}));
            var r7 = "i.posthog.com";
            class r9 {
                constructor(e) {
                    Y(this, "_regionCache", {}), this.instance = e
                }
                get apiHost() {
                    var e = this.instance.config.api_host.trim().replace(/\/$/, "");
                    return "https://app.posthog.com" === e ? "https://us.i.posthog.com" : e
                }
                get uiHost() {
                    var e, t = null === (e = this.instance.config.ui_host) || void 0 === e ? void 0 : e.replace(/\/$/, "");
                    return t || (t = this.apiHost.replace(".".concat(r7), ".posthog.com")), "https://app.posthog.com" === t ? "https://us.posthog.com" : t
                }
                get region() {
                    return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = r3.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = r3.EU : this._regionCache[this.apiHost] = r3.CUSTOM), this._regionCache[this.apiHost]
                }
                endpointFor(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if (t && (t = "/" === t[0] ? t : "/".concat(t)), "ui" === e) return this.uiHost + t;
                    if (this.region === r3.CUSTOM) return this.apiHost + t;
                    var i = r7 + t;
                    switch (e) {
                        case "assets":
                            return "https://".concat(this.region, "-assets.").concat(i);
                        case "api":
                            return "https://".concat(this.region, ".").concat(i)
                    }
                }
            }
            var ne = {
                icontains: (e, t) => !!r && t.href.toLowerCase().indexOf(e.toLowerCase()) > -1,
                not_icontains: (e, t) => !!r && -1 === t.href.toLowerCase().indexOf(e.toLowerCase()),
                regex: (e, t) => !!r && rP(t.href, e),
                not_regex: (e, t) => !!r && !rP(t.href, e),
                exact: (e, t) => t.href === e,
                is_not: (e, t) => t.href !== e
            };
            class nt {
                constructor(e) {
                    var t = this;
                    Y(this, "getWebExperimentsAndEvaluateDisplayLogic", function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        t.getWebExperiments(e => {
                            nt.logInfo("retrieved web experiments from the server"), t._flagToExperiments = new Map, e.forEach(e => {
                                if (e.feature_flag_key) {
                                    t._flagToExperiments && (nt.logInfo("setting flag key ", e.feature_flag_key, " to web experiment ", e), null === (i = t._flagToExperiments) || void 0 === i || i.set(e.feature_flag_key, e));
                                    var i, s = t.instance.getFeatureFlag(e.feature_flag_key);
                                    A(s) && e.variants[s] && t.applyTransforms(e.name, s, e.variants[s].transforms)
                                } else if (e.variants)
                                    for (var r in e.variants) {
                                        var n = e.variants[r];
                                        nt.matchesTestVariant(n) && t.applyTransforms(e.name, r, n.transforms)
                                    }
                            })
                        }, e)
                    }), this.instance = e, this.instance.onFeatureFlags(e => {
                        this.onFeatureFlags(e)
                    })
                }
                onFeatureFlags(e) {
                    if (this._is_bot()) nt.logInfo("Refusing to render web experiment since the viewer is a likely bot");
                    else if (!this.instance.config.disable_web_experiments) {
                        if (L(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
                        nt.logInfo("applying feature flags", e), e.forEach(e => {
                            var t;
                            if (this._flagToExperiments && null !== (t = this._flagToExperiments) && void 0 !== t && t.has(e)) {
                                var i, s = this.instance.getFeatureFlag(e),
                                    r = null === (i = this._flagToExperiments) || void 0 === i ? void 0 : i.get(e);
                                s && null != r && r.variants[s] && this.applyTransforms(r.name, s, r.variants[s].transforms)
                            }
                        })
                    }
                }
                previewWebExperiment() {
                    var e = nt.getWindowLocation();
                    if (null != e && e.search) {
                        var t = td(null == e ? void 0 : e.search, "__experiment_id"),
                            i = td(null == e ? void 0 : e.search, "__experiment_variant");
                        t && i && (nt.logInfo("previewing web experiments ".concat(t, " && ").concat(i)), this.getWebExperiments(e => {
                            this.showPreviewWebExperiment(parseInt(t), i, e)
                        }, !1, !0))
                    }
                }
                loadIfEnabled() {
                    this.instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
                }
                getWebExperiments(e, t, i) {
                    if (this.instance.config.disable_web_experiments && !i) return e([]);
                    var s = this.instance.get_property("$web_experiments");
                    if (s && !t) return e(s);
                    this.instance._send_request({
                        url: this.instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=".concat(this.instance.config.token)),
                        method: "GET",
                        callback: t => 200 === t.statusCode && t.json ? e(t.json.experiments || []) : e([])
                    })
                }
                showPreviewWebExperiment(e, t, i) {
                    var s = i.filter(t => t.id === e);
                    s && s.length > 0 && (nt.logInfo("Previewing web experiment [".concat(s[0].name, "] with variant [").concat(t, "]")), this.applyTransforms(s[0].name, t, s[0].variants[t].transforms))
                }
                static matchesTestVariant(e) {
                    return !L(e.conditions) && nt.matchUrlConditions(e) && nt.matchUTMConditions(e)
                }
                static matchUrlConditions(e) {
                    if (L(e.conditions) || L(null === (t = e.conditions) || void 0 === t ? void 0 : t.url)) return !0;
                    var t, i, s, r, n = nt.getWindowLocation();
                    return !!n && (null === (i = e.conditions) || void 0 === i || !i.url || ne[null !== (s = null === (r = e.conditions) || void 0 === r ? void 0 : r.urlMatchType) && void 0 !== s ? s : "icontains"](e.conditions.url, n))
                }
                static getWindowLocation() {
                    return null == r ? void 0 : r.location
                }
                static matchUTMConditions(e) {
                    if (L(e.conditions) || L(null === (i = e.conditions) || void 0 === i ? void 0 : i.utm)) return !0;
                    var t = s1.campaignParams();
                    if (t.utm_source) {
                        var i, s, r, n, o, a, l, c, u, d, h, _, p, g, v, f, m, y = null === (s = e.conditions) || void 0 === s || null === (r = s.utm) || void 0 === r || !r.utm_campaign || (null === (n = e.conditions) || void 0 === n || null === (o = n.utm) || void 0 === o ? void 0 : o.utm_campaign) == t.utm_campaign,
                            b = null === (a = e.conditions) || void 0 === a || null === (l = a.utm) || void 0 === l || !l.utm_source || (null === (c = e.conditions) || void 0 === c || null === (u = c.utm) || void 0 === u ? void 0 : u.utm_source) == t.utm_source,
                            w = null === (d = e.conditions) || void 0 === d || null === (h = d.utm) || void 0 === h || !h.utm_medium || (null === (_ = e.conditions) || void 0 === _ || null === (p = _.utm) || void 0 === p ? void 0 : p.utm_medium) == t.utm_medium,
                            S = null === (g = e.conditions) || void 0 === g || null === (v = g.utm) || void 0 === v || !v.utm_term || (null === (f = e.conditions) || void 0 === f || null === (m = f.utm) || void 0 === m ? void 0 : m.utm_term) == t.utm_term;
                        return y && w && S && b
                    }
                    return !1
                }
                static logInfo(e) {
                    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                    z.info("[WebExperiments] ".concat(e), i)
                }
                applyTransforms(e, t, i) {
                    this._is_bot() ? nt.logInfo("Refusing to render web experiment since the viewer is a likely bot") : "control" !== t ? i.forEach(i => {
                        if (i.selector) {
                            nt.logInfo("applying transform of variant ".concat(t, " for experiment ").concat(e, " "), i);
                            var s, r = null === (s = document) || void 0 === s ? void 0 : s.querySelectorAll(i.selector);
                            null == r || r.forEach(e => {
                                i.html && (e.innerHTML = i.html), i.css && e.setAttribute("style", i.css)
                            })
                        }
                    }) : nt.logInfo("Control variants leave the page unmodified.")
                }
                _is_bot() {
                    return c && this.instance ? r8(c, this.instance.config.custom_blocked_useragents) : void 0
                }
            }
            var ni = {},
                ns = () => {},
                nr = "posthog",
                nn = !rB && -1 === (null == g ? void 0 : g.indexOf("MSIE")) && -1 === (null == g ? void 0 : g.indexOf("Mozilla")),
                no = () => {
                    var e;
                    return {
                        api_host: "https://us.i.posthog.com",
                        ui_host: null,
                        token: "",
                        autocapture: !0,
                        rageclick: !0,
                        cross_subdomain_cookie: function(e) {
                            var t = null == e ? void 0 : e.hostname;
                            if (!A(t)) return !1;
                            var i = t.split(".").slice(-2).join(".");
                            for (var s of eo)
                                if (i === s) return !1;
                            return !0
                        }(null == u ? void 0 : u.location),
                        persistence: "localStorage+cookie",
                        persistence_name: "",
                        loaded: ns,
                        save_campaign_params: !0,
                        custom_campaign_params: [],
                        custom_blocked_useragents: [],
                        save_referrer: !0,
                        capture_pageview: !0,
                        capture_pageleave: "if_capture_pageview",
                        debug: d && A(null == d ? void 0 : d.search) && -1 !== d.search.indexOf("__posthog_debug=true") || !1,
                        cookie_expiration: 365,
                        upgrade: !1,
                        disable_session_recording: !1,
                        disable_persistence: !1,
                        disable_web_experiments: !0,
                        disable_surveys: !1,
                        disable_external_dependency_loading: !1,
                        enable_recording_console_log: void 0,
                        secure_cookie: "https:" === (null == r || null === (e = r.location) || void 0 === e ? void 0 : e.protocol),
                        ip: !0,
                        opt_out_capturing_by_default: !1,
                        opt_out_persistence_by_default: !1,
                        opt_out_useragent_filter: !1,
                        opt_out_capturing_persistence_type: "localStorage",
                        opt_out_capturing_cookie_prefix: null,
                        opt_in_site_apps: !1,
                        property_denylist: [],
                        respect_dnt: !1,
                        sanitize_properties: null,
                        request_headers: {},
                        request_batching: !0,
                        properties_string_max_length: 65535,
                        session_recording: {},
                        mask_all_element_attributes: !1,
                        mask_all_text: !1,
                        mask_personal_data_properties: !1,
                        custom_personal_data_properties: [],
                        advanced_disable_decide: !1,
                        advanced_disable_feature_flags: !1,
                        advanced_disable_feature_flags_on_first_load: !1,
                        advanced_disable_toolbar_metrics: !1,
                        feature_flag_request_timeout_ms: 3e3,
                        surveys_request_timeout_ms: 1e4,
                        on_request_error: e => {
                            var t = "Bad HTTP status: " + e.statusCode + " " + e.text;
                            z.error(t)
                        },
                        get_device_id: e => e,
                        capture_performance: void 0,
                        name: "posthog",
                        bootstrap: {},
                        disable_compression: !1,
                        session_idle_timeout_seconds: 1800,
                        person_profiles: "identified_only",
                        before_send: void 0,
                        request_queue_config: {
                            flush_interval_ms: 3e3
                        },
                        _onCapture: ns
                    }
                },
                na = e => {
                    var t = {};
                    $(e.process_person) || (t.person_profiles = e.process_person), $(e.xhr_headers) || (t.request_headers = e.xhr_headers), $(e.cookie_name) || (t.persistence_name = e.cookie_name), $(e.disable_cookie) || (t.disable_persistence = e.disable_cookie), $(e.store_google) || (t.save_campaign_params = e.store_google), $(e.verbose) || (t.debug = e.verbose);
                    var i = ee({}, t, e);
                    return C(e.property_blacklist) && ($(e.property_denylist) ? i.property_denylist = e.property_blacklist : C(e.property_denylist) ? i.property_denylist = [...e.property_blacklist, ...e.property_denylist] : z.error("Invalid value for property_denylist config: " + e.property_denylist)), i
                };
            class nl {
                constructor() {
                    Y(this, "__forceAllowLocalhost", !1)
                }
                get _forceAllowLocalhost() {
                    return this.__forceAllowLocalhost
                }
                set _forceAllowLocalhost(e) {
                    z.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e
                }
            }
            class nc {
                get decideEndpointWasHit() {
                    var e, t;
                    return null !== (e = null === (t = this.featureFlags) || void 0 === t ? void 0 : t.hasLoadedFlags) && void 0 !== e && e
                }
                constructor() {
                    Y(this, "webPerformance", new nl), Y(this, "_personProcessingSetOncePropertiesSent", !1), Y(this, "version", f.LIB_VERSION), Y(this, "_internalEventEmitter", new rC), this.config = no(), this.SentryIntegration = iz, this.sentryIntegration = e => (function(e, t) {
                        var i = iU(e, t);
                        return {
                            name: iH,
                            processEvent: e => i(e)
                        }
                    })(this, e), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._initialPersonProfilesConfig = null, this._cachedIdentify = null, this.featureFlags = new si(this), this.toolbar = new iJ(this), this.scrollManager = new rY(this), this.pageViewManager = new i2(this), this.surveys = new rO(this), this.experiments = new nt(this), this.exceptions = new i3(this), this.rateLimiter = new rL(this), this.requestRouter = new r9(this), this.consent = new tD(this), this.people = {
                        set: (e, t, i) => {
                            var s = A(e) ? {
                                [e]: t
                            } : e;
                            this.setPersonProperties(s), null == i || i({})
                        },
                        set_once: (e, t, i) => {
                            var s = A(e) ? {
                                [e]: t
                            } : e;
                            this.setPersonProperties(void 0, s), null == i || i({})
                        }
                    }, this.on("eventCaptured", e => z.info('send "'.concat(null == e ? void 0 : e.event, '"'), e))
                }
                init(e, t, i) {
                    if (i && i !== nr) {
                        var s, r = null !== (s = ni[i]) && void 0 !== s ? s : new nc;
                        return r._init(e, t, i), ni[i] = r, ni[nr][i] = r, r
                    }
                    return this._init(e, t, i)
                }
                _init(e) {
                    var t, i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = arguments.length > 2 ? arguments[2] : void 0;
                    if ($(e) || O(e)) return z.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
                    if (this.__loaded) return z.warn("You have already initialized PostHog! Re-initializing is a no-op"), this;
                    this.__loaded = !0, this.config = {}, this._triggered_notifs = [], n.person_profiles && (this._initialPersonProfilesConfig = n.person_profiles), this.set_config(ee({}, no(), na(n), {
                        name: o,
                        token: e
                    })), this.config.on_xhr_error && z.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = n.disable_compression ? void 0 : s.GZipJS, this.persistence = new s3(this.config), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new s3(J(J({}, this.config), {}, {
                        persistence: "sessionStorage"
                    }));
                    var a = J({}, this.persistence.props),
                        l = J({}, this.sessionPersistence.props);
                    if (this._requestQueue = new rV(e => this._send_retriable_request(e), this.config.request_queue_config), this._retryQueue = new rJ(this), this.__request_queue = [], this.config.__preview_experimental_cookieless_mode || (this.sessionManager = new rZ(this), this.sessionPropsManager = new rQ(this, this.sessionManager, this.persistence)), new iK(this).startIfEnabledOrStop(), this.siteApps = new r2(this), null === (t = this.siteApps) || void 0 === t || t.init(), this.config.__preview_experimental_cookieless_mode || (this.sessionRecording = new iN(this), this.sessionRecording.startIfEnabledOrStop()), this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(), this.autocapture = new tv(this), this.autocapture.startIfEnabled(), this.surveys.loadIfEnabled(), this.heatmaps = new i1(this), this.heatmaps.startIfEnabled(), this.webVitalsAutocapture = new iX(this), this.exceptionObserver = new tz(this), this.exceptionObserver.startIfEnabled(), this.deadClicksAutocapture = new tH(this, tB), this.deadClicksAutocapture.startIfEnabled(), f.DEBUG = f.DEBUG || this.config.debug, f.DEBUG && z.info("Starting in debug mode", {
                            this: this,
                            config: n,
                            thisC: J({}, this.config),
                            p: a,
                            s: l
                        }), this._sync_opt_out_with_persistence(), void 0 !== (null === (i = n.bootstrap) || void 0 === i ? void 0 : i.distinctID)) {
                        var c, u, d = this.config.get_device_id(tE()),
                            h = null !== (c = n.bootstrap) && void 0 !== c && c.isIdentifiedID ? d : n.bootstrap.distinctID;
                        this.persistence.set_property(eD, null !== (u = n.bootstrap) && void 0 !== u && u.isIdentifiedID ? "identified" : "anonymous"), this.register({
                            distinct_id: n.bootstrap.distinctID,
                            $device_id: h
                        })
                    }
                    if (this._hasBootstrappedFeatureFlags()) {
                        var _, p, g = Object.keys((null === (_ = n.bootstrap) || void 0 === _ ? void 0 : _.featureFlags) || {}).filter(e => {
                                var t, i;
                                return !(null === (t = n.bootstrap) || void 0 === t || null === (i = t.featureFlags) || void 0 === i || !i[e])
                            }).reduce((e, t) => {
                                var i, s;
                                return e[t] = (null === (i = n.bootstrap) || void 0 === i || null === (s = i.featureFlags) || void 0 === s ? void 0 : s[t]) || !1, e
                            }, {}),
                            v = Object.keys((null === (p = n.bootstrap) || void 0 === p ? void 0 : p.featureFlagPayloads) || {}).filter(e => g[e]).reduce((e, t) => {
                                var i, s, r, o;
                                return null !== (i = n.bootstrap) && void 0 !== i && null !== (s = i.featureFlagPayloads) && void 0 !== s && s[t] && (e[t] = null === (r = n.bootstrap) || void 0 === r || null === (o = r.featureFlagPayloads) || void 0 === o ? void 0 : o[t]), e
                            }, {});
                        this.featureFlags.receivedFeatureFlags({
                            featureFlags: g,
                            featureFlagPayloads: v
                        })
                    }
                    if (this.config.__preview_experimental_cookieless_mode) this.register_once({
                        distinct_id: eW,
                        $device_id: null
                    }, "");
                    else if (!this.get_distinct_id()) {
                        var m = this.config.get_device_id(tE());
                        this.register_once({
                            distinct_id: m,
                            $device_id: m
                        }, ""), this.persistence.set_property(eD, "anonymous")
                    }
                    return el(r, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
                        passive: !1
                    }), this.toolbar.maybeLoadToolbar(), n.segment ? function(e, t) {
                        var i = e.config.segment;
                        if (!i) return t();
                        ! function(e, t) {
                            var i = e.config.segment;
                            if (!i) return t();
                            var s = i => {
                                    var s = () => i.anonymousId() || tE();
                                    e.config.get_device_id = s, i.id() && (e.register({
                                        distinct_id: i.id(),
                                        $device_id: s()
                                    }), e.persistence.set_property(eD, "identified")), t()
                                },
                                r = i.user();
                            "then" in r && F(r.then) ? r.then(e => s(e)) : s(r)
                        }(e, () => {
                            var s;
                            i.register((Promise && Promise.resolve || iB.warn("This browser does not have Promise support, and can not use the segment integration"), s = (t, i) => {
                                if (!i) return t;
                                t.event.userId || t.event.anonymousId === e.get_distinct_id() || (iB.info("No userId set, resetting PostHog"), e.reset()), t.event.userId && t.event.userId !== e.get_distinct_id() && (iB.info("UserId set, identifying with PostHog"), e.identify(t.event.userId));
                                var s, r = e._calculate_event_properties(i, null !== (s = t.event.properties) && void 0 !== s ? s : {}, new Date);
                                return t.event.properties = Object.assign({}, r, t.event.properties), t
                            }, {
                                name: "PostHog JS",
                                type: "enrichment",
                                version: "1.0.0",
                                isLoaded: () => !0,
                                load: () => Promise.resolve(),
                                track: e => s(e, e.event.event),
                                page: e => s(e, "$pageview"),
                                identify: e => s(e, "$identify"),
                                screen: e => s(e, "$screen")
                            })).then(() => {
                                t()
                            })
                        })
                    }(this, () => this._loaded()) : this._loaded(), F(this.config._onCapture) && this.config._onCapture !== ns && (z.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", e => this.config._onCapture(e.event, e))), this
                }
                _onRemoteConfig(e) {
                    var t, i, r, n, o, a, l, c;
                    if (!u || !u.body) return z.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(() => {
                        this._onRemoteConfig(e)
                    }, 500);
                    this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = w(e.supportedCompression, s.GZipJS) ? s.GZipJS : w(e.supportedCompression, s.Base64) ? s.Base64 : void 0), null !== (t = e.analytics) && void 0 !== t && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), this.set_config({
                        person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : "identified_only"
                    }), null === (i = this.siteApps) || void 0 === i || i.onRemoteConfig(e), null === (r = this.sessionRecording) || void 0 === r || r.onRemoteConfig(e), null === (n = this.autocapture) || void 0 === n || n.onRemoteConfig(e), null === (o = this.heatmaps) || void 0 === o || o.onRemoteConfig(e), this.surveys.onRemoteConfig(e), null === (a = this.webVitalsAutocapture) || void 0 === a || a.onRemoteConfig(e), null === (l = this.exceptionObserver) || void 0 === l || l.onRemoteConfig(e), null === (c = this.deadClicksAutocapture) || void 0 === c || c.onRemoteConfig(e)
                }
                _loaded() {
                    try {
                        this.config.loaded(this)
                    } catch (e) {
                        z.critical("`loaded` function failed", e)
                    }
                    this._start_queue_if_opted_in(), this.config.capture_pageview && setTimeout(() => {
                        this.consent.isOptedIn() && this._captureInitialPageview()
                    }, 1), new rq(this).load(), this.featureFlags.decide()
                }
                _start_queue_if_opted_in() {
                    var e;
                    this.has_opted_out_capturing() || this.config.request_batching && (null === (e = this._requestQueue) || void 0 === e || e.enable())
                }
                _dom_loaded() {
                    this.has_opted_out_capturing() || X(this.__request_queue, e => this._send_retriable_request(e)), this.__request_queue = [], this._start_queue_if_opted_in()
                }
                _handle_unload() {
                    var e, t;
                    this.config.request_batching ? (this._shouldCapturePageleave() && this.capture("$pageleave"), null === (e = this._requestQueue) || void 0 === e || e.unload(), null === (t = this._retryQueue) || void 0 === t || t.unload()) : this._shouldCapturePageleave() && this.capture("$pageleave", null, {
                        transport: "sendBeacon"
                    })
                }
                _send_request(e) {
                    this.__loaded && (nn ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, e.url = rU(e.url, {
                        ip: +!!this.config.ip
                    }), e.headers = J({}, this.config.request_headers), e.compression = "best-available" === e.compression ? this.compression : e.compression, e.fetchOptions = e.fetchOptions || this.config.fetch_options, (e => {
                        var t, i, s, r = J({}, e);
                        r.timeout = r.timeout || 6e4, r.url = rU(r.url, {
                            _: (new Date).getTime().toString(),
                            ver: f.LIB_VERSION,
                            compression: r.compression
                        });
                        var n = null !== (t = r.transport) && void 0 !== t ? t : "fetch",
                            o = null !== (i = null === (s = ea(rW, e => e.transport === n)) || void 0 === s ? void 0 : s.method) && void 0 !== i ? i : rW[0].method;
                        if (!o) throw Error("No available transport method");
                        o(r)
                    })(J(J({}, e), {}, {
                        callback: t => {
                            var i, s, r;
                            this.rateLimiter.checkForLimiting(t), t.statusCode >= 400 && (null === (s = (r = this.config).on_request_error) || void 0 === s || s.call(r, t)), null === (i = e.callback) || void 0 === i || i.call(e, t)
                        }
                    }))))
                }
                _send_retriable_request(e) {
                    this._retryQueue ? this._retryQueue.retriableRequest(e) : this._send_request(e)
                }
                _execute_array(e) {
                    var t, i = [],
                        s = [],
                        r = [];
                    X(e, e => {
                        e && (C(t = e[0]) ? r.push(e) : F(e) ? e.call(this) : C(e) && "alias" === t ? i.push(e) : C(e) && -1 !== t.indexOf("capture") && F(this[t]) ? r.push(e) : s.push(e))
                    });
                    var n = function(e, t) {
                        X(e, function(e) {
                            if (C(e[0])) {
                                var i = t;
                                Z(e, function(e) {
                                    i = i[e[0]].apply(i, e.slice(1))
                                })
                            } else this[e[0]].apply(this, e.slice(1))
                        }, t)
                    };
                    n(i, this), n(s, this), n(r, this)
                }
                _hasBootstrappedFeatureFlags() {
                    var e, t;
                    return (null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) && Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0 || !1
                }
                push(e) {
                    this._execute_array([e])
                }
                capture(e, t, i) {
                    var s;
                    if (this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue) {
                        if (!this.consent.isOptedOut()) {
                            if (!$(e) && A(e)) {
                                if (this.config.opt_out_useragent_filter || !this._is_bot()) {
                                    var r = null != i && i.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
                                    if (null == r || !r.isRateLimited) {
                                        this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
                                        var n, o, a, l, c = new Date,
                                            u = (null == i ? void 0 : i.timestamp) || c,
                                            d = tE(),
                                            h = {
                                                uuid: d,
                                                event: e,
                                                properties: this._calculate_event_properties(e, t || {}, u, d)
                                            };
                                        r && (h.properties.$lib_rate_limit_remaining_tokens = r.remainingTokens), (null == i ? void 0 : i.$set) && (h.$set = null == i ? void 0 : i.$set);
                                        var _ = this._calculate_set_once_properties(null == i ? void 0 : i.$set_once);
                                        _ && (h.$set_once = _), (n = h, o = null != i && i._noTruncate ? null : this.config.properties_string_max_length, a = e => A(e) && !M(o) ? e.slice(0, o) : e, l = new Set, h = function e(t, i) {
                                            var s;
                                            return t !== Object(t) ? a ? a(t, i) : t : l.has(t) ? void 0 : (l.add(t), C(t) ? (s = [], X(t, t => {
                                                s.push(e(t))
                                            })) : (s = {}, Z(t, (t, i) => {
                                                l.has(t) || (s[i] = e(t, i))
                                            })), s)
                                        }(n)).timestamp = u, $(null == i ? void 0 : i.timestamp) || (h.properties.$event_time_override_provided = !0, h.properties.$event_time_override_system_time = c);
                                        var p = J(J({}, h.properties.$set), h.$set);
                                        if (T(p) || this.setPersonPropertiesForFlags(p), !L(this.config.before_send)) {
                                            var g = this._runBeforeSend(h);
                                            if (!g) return;
                                            h = g
                                        }
                                        this._internalEventEmitter.emit("eventCaptured", h);
                                        var v = {
                                            method: "POST",
                                            url: null !== (s = null == i ? void 0 : i._url) && void 0 !== s ? s : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
                                            data: h,
                                            compression: "best-available",
                                            batchKey: null == i ? void 0 : i._batchKey
                                        };
                                        return !this.config.request_batching || i && (null == i || !i._batchKey) || null != i && i.send_instantly ? this._send_retriable_request(v) : this._requestQueue.enqueue(v), h
                                    }
                                    z.critical("This capture call is ignored due to client rate limiting.")
                                }
                            } else z.error("No event name provided to posthog.capture")
                        }
                    } else z.uninitializedWarning("posthog.capture")
                }
                _addCaptureHook(e) {
                    return this.on("eventCaptured", t => e(t.event, t))
                }
                _calculate_event_properties(e, t, i, s) {
                    if (i = i || new Date, !this.persistence || !this.sessionPersistence) return t;
                    var r, n, o = this.persistence.remove_event_timer(e),
                        a = J({}, t);
                    if (a.token = this.config.token, this.config.__preview_experimental_cookieless_mode && (a.$cookieless_mode = !0), "$snapshot" === e) {
                        var l = J(J({}, this.persistence.properties()), this.sessionPersistence.properties());
                        return a.distinct_id = l.distinct_id, (!A(a.distinct_id) && !D(a.distinct_id) || O(a.distinct_id)) && z.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), a
                    }
                    var c, d = s1.properties({
                        maskPersonalDataProperties: this.config.mask_personal_data_properties,
                        customPersonalDataProperties: this.config.custom_personal_data_properties
                    });
                    if (this.sessionManager) {
                        var {
                            sessionId: h,
                            windowId: _
                        } = this.sessionManager.checkAndGetSessionAndWindowId();
                        a.$session_id = h, a.$window_id = _
                    }
                    this.sessionPropsManager && ee(a, this.sessionPropsManager.getSessionProps());
                    try {
                        this.sessionRecording && (a.$recording_status = this.sessionRecording.status, a.$sdk_debug_replay_internal_buffer_length = this.sessionRecording.buffer.data.length, a.$sdk_debug_replay_internal_buffer_size = this.sessionRecording.buffer.size), a.$sdk_debug_retry_queue_size = null === (r = this._retryQueue) || void 0 === r || null === (n = r.queue) || void 0 === n ? void 0 : n.length
                    } catch (e) {
                        a.$sdk_debug_error_capturing_properties = String(e)
                    }
                    if (this.requestRouter.region === r3.CUSTOM && (a.$lib_custom_api_host = this.config.api_host), c = "$pageview" === e ? this.pageViewManager.doPageView(i, s) : "$pageleave" === e ? this.pageViewManager.doPageLeave(i) : this.pageViewManager.doEvent(), a = ee(a, c), "$pageview" === e && u && (a.title = u.title), !$(o)) {
                        var p = i.getTime() - o;
                        a.$duration = parseFloat((p / 1e3).toFixed(3))
                    }
                    g && this.config.opt_out_useragent_filter && (a.$browser_type = this._is_bot() ? "bot" : "browser"), (a = ee({}, d, this.persistence.properties(), this.sessionPersistence.properties(), a)).$is_identified = this._isIdentified(), C(this.config.property_denylist) ? Z(this.config.property_denylist, function(e) {
                        delete a[e]
                    }) : z.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
                    var v = this.config.sanitize_properties;
                    v && (z.error("sanitize_properties is deprecated. Use before_send instead"), a = v(a, e));
                    var f = this._hasPersonProcessing();
                    return a.$process_person_profile = f, f && this._requirePersonProcessing("_calculate_event_properties"), a
                }
                _calculate_set_once_properties(e) {
                    if (!this.persistence || !this._hasPersonProcessing() || this._personProcessingSetOncePropertiesSent) return e;
                    var t, i = ee({}, this.persistence.get_initial_props(), (null === (t = this.sessionPropsManager) || void 0 === t ? void 0 : t.getSetOnceProps()) || {}, e || {}),
                        s = this.config.sanitize_properties;
                    return s && (z.error("sanitize_properties is deprecated. Use before_send instead"), i = s(i, "$set_once")), this._personProcessingSetOncePropertiesSent = !0, T(i) ? void 0 : i
                }
                register(e, t) {
                    var i;
                    null === (i = this.persistence) || void 0 === i || i.register(e, t)
                }
                register_once(e, t, i) {
                    var s;
                    null === (s = this.persistence) || void 0 === s || s.register_once(e, t, i)
                }
                register_for_session(e) {
                    var t;
                    null === (t = this.sessionPersistence) || void 0 === t || t.register(e)
                }
                unregister(e) {
                    var t;
                    null === (t = this.persistence) || void 0 === t || t.unregister(e)
                }
                unregister_for_session(e) {
                    var t;
                    null === (t = this.sessionPersistence) || void 0 === t || t.unregister(e)
                }
                _register_single(e, t) {
                    this.register({
                        [e]: t
                    })
                }
                getFeatureFlag(e, t) {
                    return this.featureFlags.getFeatureFlag(e, t)
                }
                getFeatureFlagPayload(e) {
                    var t = this.featureFlags.getFeatureFlagPayload(e);
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                }
                isFeatureEnabled(e, t) {
                    return this.featureFlags.isFeatureEnabled(e, t)
                }
                reloadFeatureFlags() {
                    this.featureFlags.reloadFeatureFlags()
                }
                updateEarlyAccessFeatureEnrollment(e, t) {
                    this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t)
                }
                getEarlyAccessFeatures(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 ? arguments[2] : void 0;
                    return this.featureFlags.getEarlyAccessFeatures(e, t, i)
                }
                on(e, t) {
                    return this._internalEventEmitter.on(e, t)
                }
                onFeatureFlags(e) {
                    return this.featureFlags.onFeatureFlags(e)
                }
                onSessionId(e) {
                    var t, i;
                    return null !== (t = null === (i = this.sessionManager) || void 0 === i ? void 0 : i.onSessionId(e)) && void 0 !== t ? t : () => {}
                }
                getSurveys(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.surveys.getSurveys(e, t)
                }
                getActiveMatchingSurveys(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.surveys.getActiveMatchingSurveys(e, t)
                }
                renderSurvey(e, t) {
                    this.surveys.renderSurvey(e, t)
                }
                canRenderSurvey(e) {
                    this.surveys.canRenderSurvey(e)
                }
                identify(e, t, i) {
                    if (!this.__loaded || !this.persistence) return z.uninitializedWarning("posthog.identify");
                    if (D(e) && (e = e.toString(), z.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), e) {
                        if (["distinct_id", "distinctid"].includes(e.toLowerCase())) z.critical('The string "'.concat(e, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
                        else if (this._requirePersonProcessing("posthog.identify")) {
                            var s = this.get_distinct_id();
                            this.register({
                                $user_id: e
                            }), this.get_property("$device_id") || this.register_once({
                                $had_persisted_distinct_id: !0,
                                $device_id: s
                            }, ""), e !== s && e !== this.get_property(eu) && (this.unregister(eu), this.register({
                                distinct_id: e
                            }));
                            var r = "anonymous" === (this.persistence.get_property(eD) || "anonymous");
                            e !== s && r ? (this.persistence.set_property(eD, "identified"), this.setPersonPropertiesForFlags(J(J({}, i || {}), t || {}), !1), this.capture("$identify", {
                                distinct_id: e,
                                $anon_distinct_id: s
                            }, {
                                $set: t || {},
                                $set_once: i || {}
                            }), this.featureFlags.setAnonymousDistinctId(s), this._cachedIdentify = r4(e, t, i)) : (t || i) && (this._cachedIdentify !== r4(e, t, i) ? (this.setPersonProperties(t, i), this._cachedIdentify = r4(e, t, i)) : z.info("A duplicate posthog.identify call was made with the same properties. It has been ignored.")), e !== s && (this.reloadFeatureFlags(), this.unregister(eL))
                        }
                    } else z.error("Unique user id has not been set in posthog.identify")
                }
                setPersonProperties(e, t) {
                    (e || t) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(J(J({}, t || {}), e || {})), this.capture("$set", {
                        $set: e || {},
                        $set_once: t || {}
                    }))
                }
                group(e, t, i) {
                    if (e && t) {
                        if (this._requirePersonProcessing("posthog.group")) {
                            var s = this.getGroups();
                            s[e] !== t && this.resetGroupPropertiesForFlags(e), this.register({
                                $groups: J(J({}, s), {}, {
                                    [e]: t
                                })
                            }), i && (this.capture("$groupidentify", {
                                $group_type: e,
                                $group_key: t,
                                $group_set: i
                            }), this.setGroupPropertiesForFlags({
                                [e]: i
                            })), s[e] === t || i || this.reloadFeatureFlags()
                        }
                    } else z.error("posthog.group requires a group type and group key")
                }
                resetGroups() {
                    this.register({
                        $groups: {}
                    }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
                }
                setPersonPropertiesForFlags(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.featureFlags.setPersonPropertiesForFlags(e, t)
                }
                resetPersonPropertiesForFlags() {
                    this.featureFlags.resetPersonPropertiesForFlags()
                }
                setGroupPropertiesForFlags(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e, t)
                }
                resetGroupPropertiesForFlags(e) {
                    this.featureFlags.resetGroupPropertiesForFlags(e)
                }
                reset(e) {
                    if (z.info("reset"), !this.__loaded) return z.uninitializedWarning("posthog.reset");
                    var t, i, s, r, n = this.get_property("$device_id");
                    if (this.consent.reset(), null === (t = this.persistence) || void 0 === t || t.clear(), null === (i = this.sessionPersistence) || void 0 === i || i.clear(), this.surveys.reset(), null === (s = this.persistence) || void 0 === s || s.set_property(eD, "anonymous"), null === (r = this.sessionManager) || void 0 === r || r.resetSessionId(), this._cachedIdentify = null, this.config.__preview_experimental_cookieless_mode) this.register_once({
                        distinct_id: eW,
                        $device_id: null
                    }, "");
                    else {
                        var o = this.config.get_device_id(tE());
                        this.register_once({
                            distinct_id: o,
                            $device_id: e ? o : n
                        }, "")
                    }
                    this.register({
                        $last_posthog_reset: (new Date).toISOString()
                    }, 1)
                }
                get_distinct_id() {
                    return this.get_property("distinct_id")
                }
                getGroups() {
                    return this.get_property("$groups") || {}
                }
                get_session_id() {
                    var e, t;
                    return null !== (e = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== e ? e : ""
                }
                get_session_replay_url(e) {
                    if (!this.sessionManager) return "";
                    var {
                        sessionId: t,
                        sessionStartTimestamp: i
                    } = this.sessionManager.checkAndGetSessionAndWindowId(!0), s = this.requestRouter.endpointFor("ui", "/project/".concat(this.config.token, "/replay/").concat(t));
                    if (null != e && e.withTimestamp && i) {
                        var r, n = null !== (r = e.timestampLookBack) && void 0 !== r ? r : 10;
                        if (!i) return s;
                        var o = Math.max(Math.floor(((new Date).getTime() - i) / 1e3) - n, 0);
                        s += "?t=".concat(o)
                    }
                    return s
                }
                alias(e, t) {
                    return e === this.get_property(ec) ? (z.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? ($(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(eu, e), this.capture("$create_alias", {
                        alias: e,
                        distinct_id: t
                    })) : (z.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1)) : void 0
                }
                set_config(e) {
                    var t, i, s, r, n = J({}, this.config);
                    R(e) && (ee(this.config, na(e)), null === (t = this.persistence) || void 0 === t || t.update_config(this.config, n), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new s3(J(J({}, this.config), {}, {
                        persistence: "sessionStorage"
                    })), tR.is_supported() && "true" === tR.get("ph_debug") && (this.config.debug = !0), this.config.debug && (f.DEBUG = !0, z.info("set_config", {
                        config: e,
                        oldConfig: n,
                        newConfig: J({}, this.config)
                    })), null === (i = this.sessionRecording) || void 0 === i || i.startIfEnabledOrStop(), null === (s = this.autocapture) || void 0 === s || s.startIfEnabled(), null === (r = this.heatmaps) || void 0 === r || r.startIfEnabled(), this.surveys.loadIfEnabled(), this._sync_opt_out_with_persistence())
                }
                startSessionRecording(e) {
                    var t, i, s, r, n, o = !0 === e,
                        a = {
                            sampling: o || !(null == e || !e.sampling),
                            linked_flag: o || !(null == e || !e.linked_flag),
                            url_trigger: o || !(null == e || !e.url_trigger),
                            event_trigger: o || !(null == e || !e.event_trigger)
                        };
                    Object.values(a).some(Boolean) && (null === (t = this.sessionManager) || void 0 === t || t.checkAndGetSessionAndWindowId(), a.sampling && (null === (i = this.sessionRecording) || void 0 === i || i.overrideSampling()), a.linked_flag && (null === (s = this.sessionRecording) || void 0 === s || s.overrideLinkedFlag()), a.url_trigger && (null === (r = this.sessionRecording) || void 0 === r || r.overrideTrigger("url")), a.event_trigger && (null === (n = this.sessionRecording) || void 0 === n || n.overrideTrigger("event"))), this.set_config({
                        disable_session_recording: !1
                    })
                }
                stopSessionRecording() {
                    this.set_config({
                        disable_session_recording: !0
                    })
                }
                sessionRecordingStarted() {
                    var e;
                    return !(null === (e = this.sessionRecording) || void 0 === e || !e.started)
                }
                captureException(e, t) {
                    var i, s = Error("PostHog syntheticException"),
                        r = F(null === (i = v.__PosthogExtensions__) || void 0 === i ? void 0 : i.parseErrorAsProperties) ? J(J({}, v.__PosthogExtensions__.parseErrorAsProperties(B(e) ? {
                            error: e,
                            event: e.message
                        } : {
                            event: e
                        }, {
                            syntheticException: s
                        })), t) : J({
                            $exception_level: "error",
                            $exception_list: [{
                                type: B(e) ? e.name : "Error",
                                value: B(e) ? e.message : R(e) && "message" in e ? String(e.message) : String(e),
                                mechanism: {
                                    handled: !0,
                                    synthetic: !1
                                }
                            }]
                        }, t);
                    this.exceptions.sendExceptionEvent(r)
                }
                loadToolbar(e) {
                    return this.toolbar.loadToolbar(e)
                }
                get_property(e) {
                    var t;
                    return null === (t = this.persistence) || void 0 === t ? void 0 : t.props[e]
                }
                getSessionProperty(e) {
                    var t;
                    return null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.props[e]
                }
                toString() {
                    var e, t = null !== (e = this.config.name) && void 0 !== e ? e : nr;
                    return t !== nr && (t = nr + "." + t), t
                }
                _isIdentified() {
                    var e, t;
                    return "identified" === (null === (e = this.persistence) || void 0 === e ? void 0 : e.get_property(eD)) || "identified" === (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.get_property(eD))
                }
                _hasPersonProcessing() {
                    var e, t, i, s;
                    return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && T(this.getGroups()) && (null === (e = this.persistence) || void 0 === e || null === (t = e.props) || void 0 === t || !t[eu]) && (null === (i = this.persistence) || void 0 === i || null === (s = i.props) || void 0 === s || !s[ez]))
                }
                _shouldCapturePageleave() {
                    return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && this.config.capture_pageview
                }
                createPersonProfile() {
                    this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {})
                }
                _requirePersonProcessing(e) {
                    return "never" === this.config.person_profiles ? (z.error(e + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._register_single(ez, !0), !0)
                }
                _sync_opt_out_with_persistence() {
                    var e, t, i, s, r = this.consent.isOptedOut(),
                        n = this.config.opt_out_persistence_by_default,
                        o = this.config.disable_persistence || r && !!n;
                    (null === (e = this.persistence) || void 0 === e ? void 0 : e.disabled) !== o && (null === (i = this.persistence) || void 0 === i || i.set_disabled(o)), (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.disabled) !== o && (null === (s = this.sessionPersistence) || void 0 === s || s.set_disabled(o))
                }
                opt_in_capturing(e) {
                    var t;
                    this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), ($(null == e ? void 0 : e.captureEventName) || null != e && e.captureEventName) && this.capture(null !== (t = null == e ? void 0 : e.captureEventName) && void 0 !== t ? t : "$opt_in", null == e ? void 0 : e.captureProperties, {
                        send_instantly: !0
                    }), this.config.capture_pageview && this._captureInitialPageview()
                }
                opt_out_capturing() {
                    this.consent.optInOut(!1), this._sync_opt_out_with_persistence()
                }
                has_opted_in_capturing() {
                    return this.consent.isOptedIn()
                }
                has_opted_out_capturing() {
                    return this.consent.isOptedOut()
                }
                clear_opt_in_out_capturing() {
                    this.consent.reset(), this._sync_opt_out_with_persistence()
                }
                _is_bot() {
                    return c ? r8(c, this.config.custom_blocked_useragents) : void 0
                }
                _captureInitialPageview() {
                    u && !this._initialPageviewCaptured && (this._initialPageviewCaptured = !0, this.capture("$pageview", {
                        title: u.title
                    }, {
                        send_instantly: !0
                    }))
                }
                debug(e) {
                    !1 === e ? (null == r || r.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({
                        debug: !1
                    })) : (null == r || r.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
                        debug: !0
                    }))
                }
                _runBeforeSend(e) {
                    if (L(this.config.before_send)) return e;
                    var t = C(this.config.before_send) ? this.config.before_send : [this.config.before_send],
                        i = e;
                    for (var s of t) {
                        if (L(i = s(i))) {
                            var r = "Event '".concat(e.event, "' was rejected in beforeSend function");
                            return H(e.event) ? z.warn("".concat(r, ". This can cause unexpected behavior.")) : z.info(r), null
                        }
                        i.properties && !T(i.properties) || z.warn("Event '".concat(e.event, "' has no properties after beforeSend function, this is likely an error."))
                    }
                    return i
                }
                getPageViewId() {
                    var e;
                    return null === (e = this.pageViewManager._currentPageview) || void 0 === e ? void 0 : e.pageViewId
                }
                captureTraceFeedback(e, t) {
                    this.capture("$ai_feedback", {
                        $ai_trace_id: String(e),
                        $ai_feedback_text: t
                    })
                }
                captureTraceMetric(e, t, i) {
                    this.capture("$ai_metric", {
                        $ai_trace_id: String(e),
                        $ai_metric_name: t,
                        $ai_metric_value: String(i)
                    })
                }
            }! function(e, t) {
                for (var i = 0; i < t.length; i++) e.prototype[t[i]] = er(e.prototype[t[i]])
            }(nc, ["identify"]);
            var nu, nd = (nu = ni[nr] = new nc, function() {
                function e() {
                    e.done || (e.done = !0, nn = !1, Z(ni, function(e) {
                        e._dom_loaded()
                    }))
                }
                null != u && u.addEventListener ? "complete" === u.readyState ? e() : el(u, "DOMContentLoaded", e, {
                    capture: !1
                }) : r && z.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
            }(), nu)
        }
    }
]);