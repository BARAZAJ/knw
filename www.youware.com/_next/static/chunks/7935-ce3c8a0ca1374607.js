try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4f39f130-81f0-47b2-8a83-31618499b23c", e._sentryDebugIdIdentifier = "sentry-dbid-4f39f130-81f0-47b2-8a83-31618499b23c")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7935], {
        4821: (e, t, i) => {
            i.d(t, {
                B: () => n,
                S: () => r
            });
            let o = () => {},
                r = e => {
                    o(e)
                },
                n = e => o = e
        },
        9962: (e, t, i) => {
            i.d(t, {
                j: () => n,
                u: () => r
            });
            let o = {
                value: "",
                name: "yw_id",
                path: "/",
                sameSite: "lax",
                secure: !0,
                httpOnly: !1,
                maxAge: 31536e3
            };

            function r(e) {
                let {
                    name: t,
                    path: i,
                    sameSite: r,
                    secure: n,
                    httpOnly: s,
                    maxAge: a
                } = o;
                document.cookie = "".concat(t, "=").concat(e, "; Path=").concat(i, "; SameSite=").concat(r, "; ").concat(n ? "Secure;" : "", " ").concat(s ? "HttpOnly;" : "", " Max-Age=").concat(a)
            }

            function n() {
                var e, t;
                return {
                    client_id: (null === (e = document.cookie.split("; ").find(e => e.startsWith("client_id="))) || void 0 === e ? void 0 : e.split("=")[1]) || "",
                    yw_id: (null === (t = document.cookie.split("; ").find(e => e.startsWith("yw_id="))) || void 0 === t ? void 0 : t.split("=")[1]) || ""
                }
            }
        },
        10862: (e, t, i) => {
            let o, r;
            i.d(t, {
                AuthProvider: () => A,
                A: () => P
            });
            var n = i(95155),
                s = i(62105),
                a = i(16203),
                l = i(12115),
                c = i(34477);
            let u = (0, c.createServerReference)("40a8a1d7b76b028e9bf52155eb1abb4a747ce2827b", c.callServer, void 0, c.findSourceMapURL, "login"),
                d = (0, c.createServerReference)("406db448e0db1df23268a6bc20a59a30c534d4aa0e", c.callServer, void 0, c.findSourceMapURL, "fetchUserInfo"),
                h = (0, c.createServerReference)("403d795df721b4ab0b4147576234222d98e414aecc", c.callServer, void 0, c.findSourceMapURL, "linkProjects");
            var g = i(56389),
                f = i(84842),
                p = i(9962),
                y = i(23915);
            let v = (0, c.createServerReference)("00b825ebf0c0f04721726aadfa9eebd9ce3f069994", c.callServer, void 0, c.findSourceMapURL, "logout"),
                w = JSON.parse('{"apiKey":"AIzaSyB9Jdqpb4h5RgHmRRJSfqTOfBT-DPV34jA","authDomain":"gglogin.youware.com","projectId":"yourware-arco","storageBucket":"yourware-arco.firebasestorage.app","messagingSenderId":"541265544701","appId":"1:541265544701:web:d52622395895582c9c4594"}');

            function m() {
                if (!r) {
                    let {
                        auth: e
                    } = w ? (o = (0, y.Dk)().length ? (0, y.Dk)()[0] : (0, y.Wp)(w), r = (0, a.xI)(o), (0, a.oM)(r, a.gz), {
                        app: o,
                        auth: r
                    }) : (console.error("firebaseConfig is undefined"), {
                        app: void 0,
                        auth: void 0
                    });
                    r = e
                }
                return r
            }
            async function b() {
                let e = m();
                if (!e) throw console.error("auth is undefined"), Error("auth is undefined");
                try {
                    return await e.signOut(), console.log("sign out successfully"), await v()
                } catch (e) {
                    throw console.error("sign out error:", e), e
                }
            }
            var _ = i(62128),
                E = i(96834);
            let k = (0, l.createContext)({
                    user: null,
                    isLoading: !1,
                    loginWithGoogle: async () => {},
                    loginWithGoogleOneTap: async e => {},
                    sendLinkToEmail: async (e, t) => {},
                    signInWithEmailLink: async (e, t) => {},
                    isSignInWithEmailLink: e => !1,
                    logout: async () => {},
                    updateProfile: async (e, t) => Promise.resolve({
                        code: 0,
                        message: "Success",
                        request_id: "",
                        data: null
                    }),
                    syncSubscription: async () => {}
                }),
                A = e => {
                    let {
                        currentUser: t,
                        children: i
                    } = e, [o, r] = (0, l.useState)(t), [c, y] = (0, l.useState)(!1), v = m(), w = new a.HF, {
                        identify: A
                    } = (0, g.s)();
                    (0, l.useEffect)(() => {
                        var e;
                        let t = null === (e = (0, p.j)()) || void 0 === e ? void 0 : e.yw_id;
                        !t && (null == o ? void 0 : o.ywid) && (0, p.u)(o.ywid), A(o), s.gV({
                            id: t,
                            ...o && {
                                email: o.email,
                                username: o.display_name
                            }
                        }), _.Ay.info("auth context user", {
                            user: o
                        })
                    }, [o]), (0, l.useEffect)(() => {
                        if (o) {
                            let e = f.X.onMessage("SubscriptionUpdated", () => {
                                _.Ay.info("Received subscription update from another tab"), C().catch(e => {
                                    _.Ay.error("Error syncing subscription after broadcast", e)
                                })
                            });
                            return () => {
                                e()
                            }
                        }
                    }, [o]);
                    let P = async () => {
                            try {
                                if (y(!0), !v) throw _.Ay.error("auth is undefined"), Error("auth is undefined");
                                w.setCustomParameters({
                                    prompt: "select_account"
                                }), w.addScope("https://www.googleapis.com/auth/userinfo.profile");
                                let e = await (0, a.df)(v, w);
                                if (await v.signOut(), !e) throw Error("Failed to login");
                                await F(e);
                                let t = await T(e);
                                r(t), await C(t), q(t), _.Ay.info("sign in with google success")
                            } catch (e) {
                                throw _.Ay.error("sign in with google error", e), e
                            } finally {
                                y(!1)
                            }
                        },
                        S = async (e, t) => {
                            if (!v) throw _.Ay.error("auth is undefined"), Error("auth is undefined");
                            try {
                                let i = await (0, a.hK)(v, e, t);
                                if (await v.signOut(), !i) throw Error("Failed to sign in with email link");
                                let o = await T(i);
                                await C(o), _.Ay.info("sign in with email link success", {
                                    loginUser: o
                                }), r(o), q(o)
                            } catch (e) {
                                throw _.Ay.error("sign in with email link error", e), e
                            } finally {
                                y(!1)
                            }
                        },
                        L = async (e, t) => {
                            try {
                                if (_.Ay.info("login with email", {
                                        email: e
                                    }), !v) throw _.Ay.error("auth is undefined"), Error("auth is undefined");
                                await (0, a.MN)(v, e, {
                                    url: t,
                                    handleCodeInApp: !0
                                }), _.Ay.info("send sign in link to email success", {
                                    email: e
                                })
                            } catch (e) {
                                throw _.Ay.error("send sign in link to email error:", e), e
                            }
                        },
                        j = async e => {
                            try {
                                if (y(!0), !v) throw _.Ay.error("auth is undefined"), Error("auth is undefined");
                                let t = a.HF.credential(e),
                                    i = await (0, a.eN)(v, t);
                                if (await v.signOut(), !i) throw Error("Failed to login with Google One Tap");
                                await F(i);
                                let o = await T(i);
                                r(o), await C(o), q(o), _.Ay.info("sign in with Google One Tap success")
                            } catch (e) {
                                throw _.Ay.error("sign in with Google One Tap error", e), e
                            } finally {
                                y(!1)
                            }
                        },
                        I = async () => {
                            try {
                                console.log("sign out"), await b(), r(null)
                            } catch (e) {
                                throw console.error("sign out error:", e), e
                            }
                        },
                        O = async (e, t) => {
                            try {
                                let i = new FormData;
                                return e && i.append("name", e), t && i.append("photo", t), await (0, E.qM)("/user/refresh", {
                                    method: "POST",
                                    body: i
                                })
                            } catch (e) {
                                throw _.Ay.error("update profile error:", e), e
                            }
                        },
                        C = async e => {
                            try {
                                _.Ay.info("sync subscription with user", {
                                    userInfo: e
                                });
                                let t = await d({
                                    id: (null == e ? void 0 : e.uid) || (null == o ? void 0 : o.uid) || ""
                                });
                                if (!t || 0 !== t.code || !t.data) throw Error("Failed to sync subscription");
                                _.Ay.info("sync subscription success", {
                                    response: t
                                }), r({ ...t.data
                                })
                            } catch (e) {
                                throw _.Ay.error("sync subscription error:", e), e
                            }
                        },
                        F = async e => {
                            let t = e.user;
                            _.Ay.info("sync google user profile", {
                                user: t
                            });
                            let i = t.providerData.find(e => "google.com" === e.providerId);
                            if (_.Ay.info("sync google providerInfo", {
                                    providerInfo: i
                                }), i) {
                                let {
                                    displayName: e,
                                    photoURL: o
                                } = i;
                                if (!t.displayName && e && await (0, a.r7)(t, {
                                        displayName: e
                                    }), !t.photoURL && o) {
                                    let e = o.replace(/=s\d+-c$/, "=s400-c");
                                    await (0, a.r7)(t, {
                                        photoURL: e
                                    })
                                }
                            }
                        },
                        T = async e => {
                            var t;
                            let i = e.user;
                            _.Ay.info("sync user to server", {
                                user: i
                            });
                            let o = await i.getIdToken(),
                                r = await u(o);
                            if (200 !== r.code || !(null === (t = r.data) || void 0 === t ? void 0 : t.userInfo)) throw Error("sync user to server failed");
                            return r.data.userInfo
                        },
                        q = async e => {
                            if (_.Ay.info("handle anonymous projects"), null == e ? void 0 : e.uid) {
                                let t = JSON.parse(localStorage.getItem("Anonymous_Projects") || "[]");
                                if (t.length > 0) try {
                                    h({
                                        uid: e.uid,
                                        project_ids: t
                                    }), localStorage.removeItem("Anonymous_Projects"), _.Ay.info("Projects linked successfully in background")
                                } catch (e) {
                                    _.Ay.error("Background project linking failed:", e)
                                }
                            }
                        };
                    return (0, n.jsx)(k.Provider, {
                        value: {
                            user: o,
                            isLoading: c,
                            loginWithGoogle: P,
                            loginWithGoogleOneTap: j,
                            sendLinkToEmail: L,
                            isSignInWithEmailLink: e => v ? (0, a.Pj)(v, e) : (_.Ay.error("auth is undefined"), !1),
                            signInWithEmailLink: S,
                            logout: I,
                            updateProfile: O,
                            syncSubscription: C
                        },
                        children: i
                    })
                },
                P = () => (0, l.useContext)(k)
        },
        30212: (e, t, i) => {
            i.d(t, {
                A: () => a
            });
            var o = i(62128);
            class r {
                async init() {
                    return this.postHog = (await i.e(8229).then(i.bind(i, 72341))).default, new Promise(e => {
                        var t;
                        null === (t = this.postHog) || void 0 === t || t.init("phc_QH92qoJ9zYh2LUuj5goa6NgqgnMOAkdR6gqUCEJL1Eq", {
                            api_host: "https://us.i.posthog.com",
                            capture_pageview: !0,
                            loaded: () => {
                                this.initialized = !0, e()
                            }
                        })
                    })
                }
                track(e, t) {
                    var i;
                    null === (i = this.postHog) || void 0 === i || i.capture(e, t)
                }
                registerPublicProperties(e) {
                    var t;
                    null === (t = this.postHog) || void 0 === t || t.register(e || {})
                }
                identify(e) {
                    var t, i;
                    e ? null === (t = this.postHog) || void 0 === t || t.register({
                        user_id: e.uid,
                        user_anonymous: e.is_anonymous,
                        user_email: e.email,
                        user_name: e.display_name
                    }) : null === (i = this.postHog) || void 0 === i || i.register({
                        user_id: "",
                        user_anonymous: "",
                        user_email: "",
                        user_name: ""
                    })
                }
                constructor() {
                    this.initialized = !1, this.postHog = null
                }
            }
            var n = i(9962);
            class s {
                init() {
                    return o.vF.info("Volcano initialized"), Promise.resolve()
                }
                track(e, t) {
                    window.collectEvent && window.collectEvent(e, t)
                }
                registerPublicProperties(e) {
                    window.collectEvent && (window.collectEvent("config", e), window.collectEvent("send"))
                }
                identify(e) {
                    let {
                        yw_id: t = ""
                    } = (0, n.j)() || {};
                    window.collectEvent && (e ? (window.collectEvent("config", {
                        user_unique_id: t || e.ywid,
                        user_is_login_yw: 1
                    }), window.collectEvent("profileSet", {
                        user_anonymous: e.is_anonymous,
                        user_email: e.email,
                        user_name: e.display_name,
                        user_is_subscribed: +("Pro" === e.plan)
                    })) : (window.collectEvent("config", {
                        user_unique_id: t || null,
                        user_is_login_yw: 0
                    }), window.collectEvent("profileSet", {
                        user_unique_id: "",
                        user_anonymous: "",
                        user_email: "",
                        user_name: "",
                        user_is_subscribed: null
                    })))
                }
            }
            class a {
                static getInstance() {
                    return a.instance || (a.instance = new a), a.instance
                }
                async init() {
                    this.initialized || (this.providers = [new r, new s], await Promise.allSettled(this.providers.map(e => e.init())), this.initialized = !0, o.vF.info("Initialized"), this.processQueue())
                }
                track(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = { ...this.commonProperties,
                            ...t
                        };
                    if (!this.initialized) {
                        this.queueOperation({
                            type: "track",
                            event: e,
                            properties: i
                        });
                        return
                    }
                    this.providers.forEach(t => {
                        /(staging|localhost)/.test("https://www.yourware.so") && /(staging|localhost)/.test("https://www.youware.com") ? t instanceof s && (t.track(e, i), console.log("Tracking event", e, i)) : t.track(e, i)
                    })
                }
                trackGoogleAds(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    window.gtag && window.gtag("event", e, t)
                }
                registerPublicProperties(e) {
                    if (!this.initialized) {
                        this.queueOperation({
                            type: "registerPublicProperties",
                            properties: e
                        });
                        return
                    }
                    this.providers.forEach(t => {
                        t.registerPublicProperties(e)
                    })
                }
                identify(e) {
                    if (!this.initialized) {
                        this.queueOperation({
                            type: "identify",
                            userInfo: e
                        });
                        return
                    }
                    this.providers.forEach(t => {
                        t.identify(e)
                    })
                }
                inject(e) {
                    this.commonProperties = { ...this.commonProperties,
                        ...e
                    }
                }
                queueOperation(e) {
                    this.operationQueue.push(e)
                }
                processQueue() {
                    this.operationQueue.forEach(e => {
                        try {
                            switch (e.type) {
                                case "track":
                                    this.providers.forEach(t => {
                                        t.track(e.event, e.properties)
                                    });
                                    break;
                                case "identify":
                                    this.providers.forEach(t => {
                                        t.identify(e.userInfo)
                                    });
                                    break;
                                case "registerPublicProperties":
                                    this.providers.forEach(t => {
                                        t.registerPublicProperties(e.properties)
                                    })
                            }
                        } catch (t) {
                            o.vF.error("Error processing queued operation: ".concat(e.type), t)
                        }
                    }), this.operationQueue = []
                }
                constructor() {
                    this.initialized = !1, this.operationQueue = [], this.providers = [], this.commonProperties = {}
                }
            }
        },
        48436: (e, t, i) => {
            let o;
            i.d(t, {
                B: () => s,
                P: () => n
            });
            let r = () => {},
                n = e => {
                    clearTimeout(o), r(e), o = setTimeout(() => {
                        (null == e ? void 0 : e.message) === e.message && r(null)
                    }, e.duration || 3e3)
                },
                s = e => r = e
        },
        56389: (e, t, i) => {
            i.d(t, {
                s: () => n
            });
            var o = i(12115),
                r = i(99891);

            function n() {
                let e = (0, o.useContext)(r.I);
                if (!e) throw Error("useAnalytics must be used within AnalyticsProvider");
                return {
                    track: (0, o.useCallback)(function(t) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e.track(t, i)
                    }, [e]),
                    trackGoogleAds: (0, o.useCallback)(function(t) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e.trackGoogleAds(t, i)
                    }, [e]),
                    registerPublicProperties: (0, o.useCallback)(function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.registerPublicProperties(t)
                    }, [e]),
                    identify: (0, o.useCallback)(t => {
                        e.identify(t)
                    }, [e]),
                    inject: (0, o.useCallback)(function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.inject(t)
                    }, [e])
                }
            }
        },
        62128: (e, t, i) => {
            i.d(t, {
                Ay: () => a,
                vF: () => s
            });
            var o = i(61584),
                r = i.n(o);
            class n {
                static getInstance(e) {
                    return n.instance ? e && (n.instance.options = { ...n.instance.options,
                        ...e
                    }) : n.instance = new n(e), n.instance
                }
                setLevel(e) {
                    this.log.setLevel(e)
                }
                getLevel() {
                    return this.log.getLevel()
                }
                setOptions(e) {
                    this.options = { ...this.options,
                        ...e
                    }
                }
                formatLogEntryAsJson(e, t, i, o) {
                    let r = {
                        timestamp: new Date().toISOString(),
                        level: e,
                        message: t,
                        context: i || {},
                        metadata: {
                            environment: "production"
                        }
                    };
                    return o && (r.error = {
                        name: o.name,
                        message: o.message,
                        stack: o.stack
                    }), JSON.stringify(r, null, void 0)
                }
                formatLogEntryAsPretty(e, t, i, o) {
                    let r = new Date(new Date().getTime() + 288e5).toISOString().replace("T", " ").replace("Z", ""),
                        n = "";
                    if (this.options.useSymbols && (n += "".concat(this.symbols[e], " ")), n += "[".concat(r, "] [").concat(e.toUpperCase(), "] ").concat(t), i && Object.keys(i).length > 0)
                        for (let [e, t] of Object.entries(i)) n += "\n  └─ ".concat(e, ": ").concat(this.formatValue(t));
                    return o && (n += "\n  └─ 错误: ".concat(o.name, " - ").concat(o.message), o.stack && (n += "\n      ".concat(o.stack.split("\n").slice(1).join("\n      ")))), n
                }
                formatValue(e) {
                    if ("object" == typeof e && null !== e) {
                        if (Array.isArray(e)) return 0 === e.length ? "[]" : 1 === e.length ? "[".concat(this.formatValue(e[0]), "]") : JSON.stringify(e);
                        try {
                            return JSON.stringify(e)
                        } catch (e) {
                            return "[Object]"
                        }
                    }
                    return String(e)
                }
                formatLogEntry(e, t, i, o) {
                    return "json" === this.options.format ? this.formatLogEntryAsJson(e, t, i, o) : this.formatLogEntryAsPretty(e, t, i, o)
                }
                trace(e, t) {
                    if (0 >= this.log.getLevel()) {
                        let i = this.formatLogEntry("trace", e, t);
                        this.log.trace(i)
                    }
                }
                debug(e, t) {
                    if (1 >= this.log.getLevel()) {
                        let i = this.formatLogEntry("debug", e, t);
                        this.log.debug(i)
                    }
                }
                info(e, t) {
                    if (2 >= this.log.getLevel()) {
                        let i = this.formatLogEntry("info", e, t);
                        this.log.info(i)
                    }
                }
                warn(e, t) {
                    if (3 >= this.log.getLevel()) {
                        let i = this.formatLogEntry("warn", e, t);
                        this.log.warn(i)
                    }
                }
                error(e, t, i) {
                    if (4 >= this.log.getLevel()) {
                        let o = this.formatLogEntry("error", e, i, t);
                        this.log.error(o)
                    }
                }
                constructor(e) {
                    this.options = {
                        useSymbols: !0,
                        format: "pretty"
                    }, this.symbols = {
                        trace: "\uD83D\uDD0D",
                        debug: "\uD83D\uDD27",
                        info: "ℹ️",
                        warn: "⚠️",
                        error: "❌"
                    }, this.log = r().getLogger("youware"), e && (this.options = { ...this.options,
                        ...e
                    }), "https://www.yourware.so".includes("staging") || "https://www.youware.com".includes("staging") ? this.log.setLevel(0) : this.log.setLevel(3)
                }
            }
            let s = n.getInstance(),
                a = s
        },
        66139: (e, t, i) => {
            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; {
                    let i = window.location.host;
                    if (i.includes("localhost")) return "http://" + i;
                    if (r(i) && e && t) return "https://" + i.replace(".yourware.so", ".youware.com");
                    if (i.includes("yourware.so") && !e) return "https://www.yourware.so"
                }
                return "https://www.youware.com"
            }
            i.d(t, {
                $: () => o
            });
            let r = e => null !== ((null == e ? void 0 : e.match(/^([^.]+)\.app(-staging\d*)?\.yourware\.so$/)) || (null == e ? void 0 : e.match(/^([^.]+)\.app(-staging\d*)?\.youware\.com$/)))
        },
        84842: (e, t, i) => {
            i.d(t, {
                X: () => n
            });
            var o = i(62128);
            class r {
                onMessage(e, t) {
                    this.listeners.has(e) || this.listeners.set(e, new Set);
                    let i = this.listeners.get(e);
                    return i.add(t), o.vF.info('Subscribed to event "'.concat(e, '"'), {
                        listenersCount: i.size
                    }), () => {
                        let i = this.listeners.get(e);
                        i && (i.delete(t), o.vF.info('Unsubscribed from event "'.concat(e, '"'), {
                            remainingListeners: i.size
                        }), 0 === i.size && (this.listeners.delete(e), o.vF.info('Removed event "'.concat(e, '" as it has no more listeners'))))
                    }
                }
                sendMessage(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        var i;
                        let r = {
                            event: e,
                            data: t,
                            timestamp: Date.now()
                        };
                        o.vF.info('send message to channel "'.concat(e, '"'), {
                            data: t
                        }), null === (i = this.channel) || void 0 === i || i.postMessage(r)
                    } catch (t) {
                        o.vF.error("Error send message to channel (".concat(e, "):"), t)
                    }
                }
                handleMessage(e) {
                    try {
                        let {
                            event: t,
                            data: i
                        } = e.data;
                        o.vF.info('Received message from another tab for event "'.concat(t, '"'), {
                            data: i
                        });
                        let r = this.listeners.get(t);
                        r && r.size > 0 && (o.vF.info("Notifying ".concat(r.size, ' listeners for event "').concat(t, '"'), {
                            data: i
                        }), r.forEach(e => {
                            e(i)
                        }))
                    } catch (e) {
                        o.vF.error("Error handling broadcast message:", e)
                    }
                }
                cleanup() {
                    try {
                        this.channel && (o.vF.info("Closing broadcast channel"), this.channel.close(), this.channel = null), this.listeners.clear(), o.vF.info("Cleared all listeners")
                    } catch (e) {
                        o.vF.error("Error during cleanup:", e)
                    }
                }
                constructor(e) {
                    this.channel = null, this.listeners = new Map;
                    try {
                        this.channel = new BroadcastChannel(e || "global_broadcast"), this.channel.onmessage = this.handleMessage.bind(this)
                    } catch (e) {
                        o.vF.error("Failed to initialize BroadcastChannel:", e)
                    }
                }
            }
            let n = new r
        },
        96834: (e, t, i) => {
            i.d(t, {
                qM: () => s
            });
            var o = i(23464),
                r = i(66139);
            let n = o.A.create({
                baseURL: "http://yourware-backend-prod.yourware-service-discovery-prod:8000",
                timeout: 6e4
            });
            n.interceptors.request.use(async e => (e.headers["Content-Type"] || (e.headers["Content-Type"] = "application/json"), e), e => Promise.reject(e)), n.interceptors.response.use(e => e.data, e => {
                var t, i, o, r, n, s, a, l, c, u;
                return e.mock && e.data ? e.data : (null === (i = e.response) || void 0 === i ? void 0 : null === (t = i.data) || void 0 === t ? void 0 : t.status_code) ? Promise.reject(e.response.data) : Promise.reject({
                    status_code: (null === (o = e.response) || void 0 === o ? void 0 : o.status) || 500,
                    code: (null === (n = e.response) || void 0 === n ? void 0 : null === (r = n.data) || void 0 === r ? void 0 : r.code) || (null === (s = e.response) || void 0 === s ? void 0 : s.status) || 500,
                    message: (null === (l = e.response) || void 0 === l ? void 0 : null === (a = l.data) || void 0 === a ? void 0 : a.message) || e.message || "Unknown error",
                    request_id: (null === (u = e.response) || void 0 === u ? void 0 : null === (c = u.data) || void 0 === c ? void 0 : c.request_id) || "",
                    data: null
                })
            });
            let s = async (e, t, i) => {
                let o = "".concat(null != i ? i : "/api", "/").concat(e.startsWith("/") ? e.replace("/", "") : e),
                    n = new URLSearchParams;
                (null == t ? void 0 : t.params) && Object.entries(t.params).forEach(e => {
                    let [t, i] = e;
                    n.append(t, i)
                });
                let s = n.toString(),
                    a = s ? "".concat(o, "?").concat(s) : o;
                try {
                    var l, c, u, d, h;
                    let e = { ...null == t ? void 0 : t.headers
                    };
                    e["Content-Type"] || (null == t ? void 0 : t.body) instanceof FormData || (e["Content-Type"] = "application/json");
                    let i = await fetch(a, {
                            headers: e,
                            method: null !== (l = null == t ? void 0 : t.method) && void 0 !== l ? l : "GET",
                            body: (null == t ? void 0 : t.data) ? JSON.stringify(t.data) : null == t ? void 0 : t.body
                        }),
                        o = await i.json();
                    if (!i.ok) {
                        if (401 === i.status) {
                            let e = (0, r.$)(!0),
                                t = window.location.pathname + window.location.search;
                            window.location.href = "".concat(e, "/login?returnTo=").concat(encodeURIComponent(t))
                        }
                        if ((null == o ? void 0 : o.status_code) && (null == o ? void 0 : o.code)) return Promise.reject(o);
                        let e = (c = i.status, u = (null == o ? void 0 : o.code) || i.status, d = (null == o ? void 0 : o.message) || i.statusText, h = (null == o ? void 0 : o.request_id) || "", {
                            status_code: c,
                            code: u,
                            message: d,
                            request_id: h,
                            data: null
                        });
                        return Promise.reject(e)
                    }
                    return o
                } catch (t) {
                    return console.log("commonFetch API ".concat(e, " error"), t), Promise.reject(t)
                }
            }
        },
        99891: (e, t, i) => {
            i.d(t, {
                AnalyticsProvider: () => a,
                I: () => s
            });
            var o = i(95155),
                r = i(12115),
                n = i(30212);
            let s = (0, r.createContext)(null);

            function a(e) {
                let {
                    children: t
                } = e;
                return (0, r.useEffect)(() => {
                    n.A.getInstance().init()
                }, []), (0, o.jsx)(s.Provider, {
                    value: n.A.getInstance(),
                    children: t
                })
            }
        }
    }
]);