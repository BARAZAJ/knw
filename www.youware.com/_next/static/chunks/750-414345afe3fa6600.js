try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cdeb609a-2102-4729-a5dd-901650aecca2", e._sentryDebugIdIdentifier = "sentry-dbid-cdeb609a-2102-4729-a5dd-901650aecca2")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [750], {
        17928: (e, t, a) => {
            a.d(t, {
                f: () => i
            });
            var i = function(e) {
                return e.Add = "add", e.Cancel = "cancel", e
            }({})
        },
        60750: (e, t, a) => {
            a.d(t, {
                EmojiProvider: () => E,
                k: () => C
            });
            var i = a(95155),
                r = a(12115),
                o = a(34477);
            let n = (0, o.createServerReference)("007e6d1648344afe6d00842459c71590c7d366b534", o.callServer, void 0, o.findSourceMapURL, "fetchEmojiList");
            var c = a(10862),
                s = a(89003),
                l = a(62128);
            let d = (0, o.createServerReference)("70f9fae1c9db37a9b38b4c799dfdeb3567c500ef7f", o.callServer, void 0, o.findSourceMapURL, "postInteract");
            var u = a(17928);
            class h {
                addOperation(e, t, a, i) {
                    let r = "".concat(e.project_id, "-").concat(t, "-").concat(Date.now());
                    this.queue = this.queue.filter(a => !(a.project_id === e.project_id && a.interaction_type === t && !this.isOperationInProgress(a.id)));
                    let o = e.interaction || {
                        count: [],
                        status: []
                    };
                    o = this.calculateUpdatedInteraction(e, t, a), i && (this.callbacks.get(e.project_id) || new Set).forEach(t => {
                        t(e.project_id, o)
                    });
                    let n = {
                        id: r,
                        project_id: e.project_id,
                        interaction_type: t,
                        action: a,
                        timestamp: Date.now()
                    };
                    return this.queue.push(n), this.scheduleBatch(), r
                }
                registerCallback(e, t) {
                    var a;
                    return this.callbacks.has(e) || this.callbacks.set(e, new Set), null === (a = this.callbacks.get(e)) || void 0 === a || a.add(t), () => {
                        let a = this.callbacks.get(e);
                        a && (a.delete(t), 0 === a.size && this.callbacks.delete(e))
                    }
                }
                isOperationInProgress(e) {
                    return this.processingOperations.has(e)
                }
                getOperationKey(e) {
                    return "".concat(e.project_id, "-").concat(e.interaction_type)
                }
                scheduleBatch() {
                    this.batchTimer && clearTimeout(this.batchTimer), this.batchTimer = setTimeout(() => {
                        this.processQueue()
                    }, this.batchDelay)
                }
                async processQueue() {
                    if (0 === this.queue.length) return;
                    this.batchTimer = null;
                    let e = new Map;
                    for (let a of this.queue) {
                        var t;
                        let i = this.getOperationKey(a);
                        e.has(i) || e.set(i, []), null === (t = e.get(i)) || void 0 === t || t.push(a)
                    }
                    let a = [];
                    for (let [t, i] of e.entries()) {
                        if (this.processingOperations.has(t)) continue;
                        let e = i[0];
                        a.push(this.processOperation(e, t))
                    }
                    a.length > 0 && (await Promise.all(a), this.queue.length > 0 && this.scheduleBatch())
                }
                async processOperation(e, t) {
                    this.processingOperations.add(t), this.processingOperations.add(e.id);
                    try {
                        await d(e.project_id, e.action, e.interaction_type), this.queue = this.queue.filter(t => t.id !== e.id)
                    } catch (t) {
                        console.error("Failed to process interaction operation:", t), this.queue = this.queue.filter(t => t.id !== e.id)
                    } finally {
                        this.processingOperations.delete(t), this.processingOperations.delete(e.id)
                    }
                }
                calculateUpdatedInteraction(e, t, a) {
                    var i, r;
                    let o = [...(null === (i = e.interaction) || void 0 === i ? void 0 : i.count) || []],
                        n = [...(null === (r = e.interaction) || void 0 === r ? void 0 : r.status) || []],
                        c = n.findIndex(e => e.interaction_type === t);
                    c >= 0 ? n[c] = { ...n[c],
                        status: a === u.f.Add
                    } : a === u.f.Add && n.push({
                        interaction_type: t,
                        status: !0
                    });
                    let s = o.findIndex(e => e.interaction_type === t);
                    if (s >= 0) {
                        let e = a === u.f.Add ? 1 : -1;
                        o[s] = { ...o[s],
                            count: Math.max(0, o[s].count + e)
                        }
                    } else a === u.f.Add && o.push({
                        interaction_type: t,
                        count: 1
                    });
                    return {
                        count: o,
                        status: n
                    }
                }
                constructor() {
                    this.queue = [], this.processingOperations = new Set, this.batchTimer = null, this.batchDelay = 500, this.callbacks = new Map
                }
            }
            let p = "yourware-emoji-list",
                f = "yourware-emoji-lottie-cache",
                y = [],
                g = !1,
                m = [],
                v = {},
                b = new Map,
                w = !1,
                T = e => {
                    m.forEach(t => t(e)), m = []
                },
                S = () => {
                    try {
                        let e = localStorage.getItem(f);
                        e && (v = JSON.parse(atob(e)))
                    } catch (e) {
                        l.vF.error("Failed to load Lottie cache", e), v = {}, localStorage.removeItem(f)
                    }
                },
                j = () => {
                    try {
                        localStorage.setItem(f, btoa(JSON.stringify(v)))
                    } catch (e) {
                        l.vF.error("Failed to save Lottie cache", e)
                    }
                },
                _ = async e => {
                    if (!e || v[e] && v[e].expireTime > Date.now() && v[e].data) return;
                    if (b.has(e)) return b.get(e);
                    let t = (async () => {
                        try {
                            l.vF.info("Start loading Lottie: ".concat(e));
                            let t = await fetch(e),
                                a = await t.json();
                            v[e] = {
                                data: a,
                                expireTime: Date.now() + 864e5
                            }, j(), l.vF.info("Lottie loaded successfully: ".concat(e))
                        } catch (t) {
                            l.vF.error("Failed to preload Lottie: ".concat(e), t)
                        } finally {
                            b.delete(e)
                        }
                    })();
                    return b.set(e, t), t
                },
                I = e => {
                    w || (w = !0, S(), setTimeout(async () => {
                        try {
                            l.vF.info("Start preloading all Lottie animations");
                            let t = e.filter(e => e.lottie).map(e => e.lottie);
                            await Promise.all([...new Set(t)].map(e => _(e))), l.vF.info("All Lottie animations preloaded successfully")
                        } catch (e) {
                            l.vF.error("Failed to preload Lottie animations", e)
                        } finally {
                            w = !1
                        }
                    }, 2e3))
                },
                x = e => e ? v[e] && v[e].expireTime > Date.now() && v[e].data ? v[e].data : (b.has(e) || setTimeout(() => {
                    _(e).catch(console.error)
                }, 0), null) : null,
                F = () => {
                    try {
                        let e = localStorage.getItem(p);
                        if (!e) return {
                            data: [],
                            isExpired: !0
                        };
                        let t = JSON.parse(atob(e)),
                            a = t.expireTime < Date.now();
                        return {
                            data: t.data,
                            isExpired: a
                        }
                    } catch (e) {
                        return l.vF.error("Failed to read emoji cache", e), localStorage.removeItem(p), {
                            data: [],
                            isExpired: !0
                        }
                    }
                },
                O = e => {
                    try {
                        let t = {
                            data: e,
                            expireTime: Date.now() + 3e5
                        };
                        localStorage.setItem(p, btoa(JSON.stringify(t)))
                    } catch (e) {
                        l.vF.error("Failed to save emoji cache", e)
                    }
                },
                k = async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (g) return new Promise(e => {
                        m.push(e)
                    });
                    if (y.length > 0 && !e) return y;
                    if (!e) {
                        let {
                            data: e,
                            isExpired: t
                        } = F();
                        if (e.length > 0) return y = e, t ? setTimeout(() => {
                            k(!0).catch(console.error)
                        }, 0) : w || I(e), y
                    }
                    try {
                        g = !0;
                        let e = (await n()).data || [];
                        return y = e, O(e), w || I(e), T(e), e
                    } catch (e) {
                        return l.vF.error("Failed to fetch emojis", e), T(y), y
                    } finally {
                        g = !1
                    }
                },
                L = (0, r.createContext)({
                    emojis: [],
                    isLoading: !1,
                    getEmojiByType: () => void 0,
                    refreshEmojis: async () => {},
                    asyncGetEmojis: async () => [],
                    getLottieData: () => null,
                    interact: () => Promise.resolve(""),
                    registerInteractionCallback: () => {}
                }),
                E = e => {
                    let {
                        children: t
                    } = e, [a, o] = (0, r.useState)([]), [n, l] = (0, r.useState)(!1), {
                        user: d
                    } = (0, c.A)(), {
                        checkAuth: u
                    } = (0, s.M)(), p = (0, r.useRef)(new h);
                    (0, r.useEffect)(() => {
                        S()
                    }, []), (0, r.useEffect)(() => {
                        let e = !0;
                        return (async () => {
                            l(!0);
                            let t = await f();
                            e && (o(t), l(!1))
                        })(), () => {
                            e = !1
                        }
                    }, []);
                    let f = async () => {
                            if (y.length > 0) {
                                let {
                                    isExpired: e
                                } = F();
                                return e && !n && setTimeout(() => {
                                    k(!0).catch(console.error)
                                }, 0), y
                            }
                            return k()
                        },
                        g = async (e, t, a) => u(async () => p.current.addOperation(e, t, a, (null == d ? void 0 : d.uid) || ""), {
                            title: "Love this project?",
                            description: "Log in to leave reactions and show some love.",
                            cancelText: "Cancel",
                            confirmText: "Log in"
                        })() || "",
                        m = async () => {
                            await k(!0)
                        };
                    return (0, i.jsx)(L.Provider, {
                        value: {
                            emojis: a,
                            isLoading: n,
                            getEmojiByType: e => a.find(t => t.interaction_type === e),
                            refreshEmojis: m,
                            asyncGetEmojis: f,
                            getLottieData: x,
                            interact: g,
                            registerInteractionCallback: (e, t) => {
                                p.current.registerCallback(e, t)
                            }
                        },
                        children: t
                    })
                },
                C = () => (0, r.useContext)(L)
        },
        89003: (e, t, a) => {
            a.d(t, {
                M: () => c
            });
            var i = a(35695),
                r = a(10862),
                o = a(4821),
                n = a(66139);
            let c = () => {
                let {
                    user: e
                } = (0, r.A)(), t = (0, i.useRouter)();
                return {
                    checkAuth: (a, i) => async function() {
                        for (var r = arguments.length, c = Array(r), s = 0; s < r; s++) c[s] = arguments[s];
                        return e ? a(...c) : new Promise(e => {
                            (0, o.S)({
                                title: i.title,
                                description: i.description,
                                cancelText: i.cancelText || "Cancel",
                                confirmText: i.confirmText || "Log in",
                                onCancel: () => {
                                    e(void 0)
                                },
                                onConfirm: () => {
                                    let a = (0, n.$)(!0, !0) + window.location.pathname + window.location.search;
                                    t.push("".concat((0, n.$)(!0), "/login?returnTo=").concat(encodeURIComponent(a))), e(void 0)
                                }
                            })
                        })
                    }
                }
            }
        }
    }
]);