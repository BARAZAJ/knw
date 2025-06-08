(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9144], {
        191: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => s.Vt,
                N: () => f
            });
            var n = r(5695),
                l = r(2115),
                a = r(4477);
            let i = (0, a.createServerReference)("60d7ce557c6a2c4e3b865bc11edd5c8cc98944f0b0", a.callServer, void 0, a.findSourceMapURL, "remixProject");
            var s = r(165),
                o = r(565),
                c = r(239),
                d = r(6139),
                u = r(8436),
                p = r(9003);
            let m = e => ({
                    remix: "Failed to remix project, please try again later",
                    create: "Failed to create project, please try again later"
                })[e],
                f = () => {
                    let e = (0, n.useRouter)(),
                        t = (0, c.I)(),
                        {
                            checkAuth: r
                        } = (0, p.M)(),
                        [a, s] = (0, l.useState)(!1);
                    return {
                        remixAction: (0, l.useCallback)(async (t, n) => r(async () => {
                            s(!0);
                            try {
                                let r = await (0, o.i)(),
                                    l = await i(t, r);
                                if (l.data) {
                                    let t = (0, d.$)(),
                                        r = {
                                            enter_from: n
                                        };
                                    "create" === n && (r.createWeb = "true"), e.push("".concat(t, "/editor/").concat(l.data.project_id, "?").concat(new URLSearchParams(r).toString()))
                                } else(0, u.P)({
                                    message: m(n),
                                    type: "error"
                                })
                            } catch (e) {
                                console.log("error", e), (0, u.P)({
                                    message: m(n),
                                    type: "error"
                                })
                            } finally {
                                s(!1)
                            }
                            setTimeout(() => {
                                s(!1)
                            }, 1e3)
                        }, {
                            title: "Want to remix this project?",
                            description: "Log in to remix and customize it your way.",
                            cancelText: "Cancel",
                            confirmText: "Log in"
                        })(), [t, e]),
                        isRemixing: a
                    }
                }
        },
        565: (e, t, r) => {
            "use strict";
            r.d(t, {
                i: () => l
            });
            let n = null,
                l = () => n ? Promise.resolve(n) : new Promise(e => {
                    if (!window.collectEvent) {
                        e("");
                        return
                    }
                    try {
                        window.collectEvent("getToken", t => {
                            t && t.ssid ? (n = t.ssid, e(t.ssid)) : e("")
                        })
                    } catch (t) {
                        e("")
                    }
                })
        },
        707: (e, t, r) => {
            "use strict";
            r.d(t, {
                S: () => l
            });
            var n = r(4477);
            let l = (0, n.createServerReference)("40765cd84cf16f0018a5e81b1c99cc16ea5026c8eb", n.callServer, void 0, n.findSourceMapURL, "checkSlugPrefix")
        },
        1884: (e, t, r) => {
            "use strict";

            function n(e) {
                return e > 1e3 && e < 1e6 ? (e / 1e3).toFixed(1) + "K" : e > 1e6 ? (e / 1e6).toFixed(1) + "M" : e > 1e9 ? (e / 1e9).toFixed(1) + "B" : e
            }
            r.d(t, {
                Z: () => n
            })
        },
        2919: (e, t, r) => {
            "use strict";
            r.d(t, {
                d: () => u
            });
            var n = r(5155),
                l = r(5427),
                a = r(2115),
                i = r(750),
                s = r(239),
                o = r(6846),
                c = r(7023);
            let d = e => {
                    let {
                        isOpen: t,
                        onEmojiSelect: r,
                        onClose: l,
                        onMouseEnter: s,
                        onMouseLeave: o,
                        className: d
                    } = e, [u, p] = (0, a.useState)([]), {
                        asyncGetEmojis: m
                    } = (0, i.k)(), f = (0, a.useRef)(null);
                    (0, a.useEffect)(() => {
                        t && m().then(e => {
                            console.log("asyncGetEmojis", e), p(e)
                        })
                    }, [t]);
                    let x = e => {
                        r(e), l()
                    };
                    return t ? (0, n.jsx)("div", {
                        className: "absolute top-[-50px] right-0 z-50 h-[54px] w-[268px] items-start justify-items-start ".concat(d),
                        onMouseEnter: s,
                        onMouseLeave: o,
                        children: (0, n.jsx)("div", {
                            className: "flex h-[44px] w-full flex-col items-center justify-center rounded-[8px] bg-white shadow-lg",
                            id: "emoji-picker",
                            ref: f,
                            children: (0, n.jsx)("div", {
                                className: "flex flex-wrap items-center justify-center gap-3",
                                children: u.map(e => (0, n.jsx)("button", {
                                    className: "flex h-5 w-5 cursor-pointer items-center justify-center border-none",
                                    onClick: t => {
                                        t.stopPropagation(), t.preventDefault(), x(e)
                                    },
                                    title: e.display_name,
                                    children: (0, n.jsx)(c.m, {
                                        emoji: e,
                                        className: "h-5 w-5"
                                    })
                                }, e.interaction_type))
                            })
                        })
                    }) : null
                },
                u = e => {
                    let {
                        emojiCounts: t,
                        emojiStatuses: r,
                        className: u,
                        pickerClassName: p,
                        onEmojiClick: m,
                        showAddButton: f = !1,
                        scrollable: x = !0,
                        fromMask: h = "from-[#fff]"
                    } = e, {
                        emojis: v
                    } = (0, i.k)(), [w, j] = (0, a.useState)(!1), [b, g] = (0, a.useState)(!1), [_, y] = (0, a.useState)(!1), [N, k] = (0, a.useState)(!1), S = (0, s.I)(), E = (0, a.useRef)(null), C = (0, a.useRef)(null);
                    (0, a.useEffect)(() => {
                        let e = () => {
                                if (C.current) {
                                    let {
                                        scrollLeft: e,
                                        scrollWidth: t,
                                        clientWidth: r
                                    } = C.current;
                                    y(e > 0), k(e < t - r)
                                }
                            },
                            t = C.current;
                        return t && (e(), t.addEventListener("scroll", e), window.addEventListener("resize", e)), () => {
                            t && (t.removeEventListener("scroll", e), window.removeEventListener("resize", e))
                        }
                    }, []);
                    let P = e => {
                        var t;
                        return (null === (t = r.find(t => t.interaction_type === e)) || void 0 === t ? void 0 : t.status) === !0
                    };
                    return (0, n.jsxs)("div", {
                        className: (0, o.cn)("relative flex justify-end gap-[6px]", u),
                        children: [x && (0, n.jsxs)(n.Fragment, {
                            children: [_ && (0, n.jsx)("div", {
                                className: (0, o.cn)("pointer-events-none absolute top-0 bottom-0 left-[-2px] z-10 w-6 bg-gradient-to-r to-transparent", h)
                            }), N && (0, n.jsx)("div", {
                                className: (0, o.cn)("pointer-events-none absolute top-0 bottom-0 z-10 w-6 bg-gradient-to-l to-transparent", h, f ? "right-7" : "right-0")
                            })]
                        }), (0, n.jsx)("div", {
                            ref: C,
                            className: (0, o.cn)("flex max-h-[26px] min-w-0 gap-[6px]", x ? "flex-nowrap overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" : "flex-wrap overflow-hidden"),
                            children: t.map(e => (0, n.jsxs)("div", {
                                className: (0, o.cn)("flex h-[26px] cursor-pointer items-center gap-[6px] rounded-[8px] px-[6px] py-1", P(e.interaction_type) ? "bg-brand/6 ring-brand/30 ring-1 ring-inset" : "bg-black/3"),
                                style: {
                                    direction: "ltr"
                                },
                                onClick: t => {
                                    t.stopPropagation(), t.preventDefault(), m(e.interaction_type)
                                },
                                children: [(0, n.jsx)(c.m, {
                                    emoji: v.find(t => t.interaction_type === e.interaction_type),
                                    className: "h-4 w-4",
                                    width: 16,
                                    height: 16,
                                    triggerType: c.Z.Click,
                                    selected: P(e.interaction_type)
                                }), (0, n.jsx)("span", {
                                    className: (0, o.cn)("text-xs font-medium", (P(e.interaction_type), "text-black/95")),
                                    children: e.count
                                })]
                            }, e.interaction_type))
                        }), f && (0, n.jsx)("div", {
                            className: "flex h-[26px] w-[26px] shrink-0 cursor-pointer items-center justify-center rounded-[8px] bg-black/3 p-1",
                            style: {
                                direction: "ltr"
                            },
                            onClick: e => {
                                e.stopPropagation(), e.preventDefault(), j(!w)
                            },
                            onMouseEnter: () => {
                                S || (E.current && clearTimeout(E.current), j(!0))
                            },
                            onMouseLeave: () => {
                                S || b || (E.current = setTimeout(() => {
                                    j(!1)
                                }, 100))
                            },
                            children: (0, n.jsx)(l.kpC, {
                                className: "h-4 w-4 text-black/12"
                            })
                        }), w && (0, n.jsx)(d, {
                            isOpen: w,
                            className: p,
                            onEmojiSelect: e => {
                                m(e.interaction_type), j(!1)
                            },
                            onClose: () => {
                                j(!1)
                            },
                            onMouseEnter: () => {
                                S || (E.current && clearTimeout(E.current), g(!0))
                            },
                            onMouseLeave: () => {
                                S || (g(!1), E.current = setTimeout(() => {
                                    j(!1)
                                }, 100))
                            }
                        })]
                    })
                }
        },
        3468: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 3748)), Promise.resolve().then(r.bind(r, 9710))
        },
        3748: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => D
            });
            var n = r(5155),
                l = r(5427),
                a = r(2115),
                i = r(4477);
            let s = (0, i.createServerReference)("00d71391d50ce27f03455e2defa45bbe120e1b641a", i.callServer, void 0, i.findSourceMapURL, "syncClientIdToCookie"),
                o = (0, i.createServerReference)("70c5e629d912d70fed32c3bdeeb5f5ba6f9d082416", i.callServer, void 0, i.findSourceMapURL, "reportStatsProjectIncr"),
                c = (0, i.createServerReference)("40a9f7c9d3c0b1b945836e6893d81fdc8a1469fc19", i.callServer, void 0, i.findSourceMapURL, "viewProject");
            var d = r(6389),
                u = r(565),
                p = r(9962),
                m = r(6846),
                f = r(5695),
                x = r(7928),
                h = r(2919),
                v = r(1021),
                w = r(165),
                j = r(750),
                b = r(191),
                g = r(4821),
                _ = r(6139),
                y = r(1884);

            function N(e) {
                var t;
                let {
                    project: r,
                    handleFullScreen: i,
                    onUpdate: s,
                    onRoll: o,
                    rolling: c
                } = e, {
                    emojis: u,
                    registerInteractionCallback: p,
                    interact: N
                } = (0, j.k)(), [k, S] = (0, a.useState)(null), [E, C] = (0, a.useState)(!1), {
                    track: P
                } = (0, d.s)(), R = (0, f.useRouter)(), {
                    remixAction: L,
                    isRemixing: T
                } = (0, b.N)(), M = (null === (t = r.user) || void 0 === t ? void 0 : t.uid) === w.v1;
                (0, a.useEffect)(() => {
                    R.prefetch((0, _.$)())
                }, []), (0, a.useEffect)(() => {
                    p(r.project_id, (e, t) => {
                        s(r, t)
                    })
                }, [r.project_id, p]), (0, a.useEffect)(() => {
                    E && S(window.innerWidth <= 440)
                }, [E]), (0, a.useEffect)(() => {
                    C(!0)
                }, []);
                let z = e => {
                        var t, n, l, a;
                        let i = null === (n = r.interaction) || void 0 === n ? void 0 : null === (t = n.status.find(t => t.interaction_type === e)) || void 0 === t ? void 0 : t.status;
                        N(r, e, i ? x.f.Cancel : x.f.Add), P("emoji_reaction_click", {
                            action: i ? "false" : "true",
                            project_url: r.project_url,
                            emoji: e,
                            location: "app_page",
                            count: ((null === (a = r.interaction) || void 0 === a ? void 0 : null === (l = a.count.find(t => t.interaction_type === e)) || void 0 === l ? void 0 : l.count) || 0) + (i ? -1 : 1)
                        })
                    },
                    A = (0, a.useCallback)(async () => {
                        if (!r.allow_remix) {
                            (0, g.S)({
                                title: "Remix Not Supported",
                                description: "This project doesn't allow remixing",
                                confirmText: "Got it",
                                onConfirm: () => {}
                            });
                            return
                        }
                        P("remix_button_click", {
                            origin_project_url: r.project_url,
                            remix_count: r.remix_count,
                            location: "project_page",
                            access_control: r.allow_remix ? "allowed" : "not_allowed"
                        }), await L(r.project_id, "remix")
                    }, [L]),
                    F = () => (0, n.jsx)("div", {
                        className: "h-[16px] w-[1px] bg-black/6"
                    });
                return E && null !== k ? (0, n.jsxs)("div", {
                    className: (0, m.cn)("bg-body flex h-12 w-full max-w-full flex-row items-center justify-between gap-4 overflow-visible px-4", k && "h-[72px] border-t border-black/6"),
                    children: [(0, n.jsxs)("div", {
                        id: "left-container",
                        className: "flex flex-1 shrink-0 flex-row items-center gap-2",
                        children: [(0, n.jsxs)("a", {
                            id: "logo-container",
                            className: "flex cursor-pointer flex-row items-center gap-1",
                            onClick: () => {
                                P("app_watermark_button_click", {
                                    project_url: r.project_url
                                }), R.push((0, _.$)())
                            },
                            children: [(0, n.jsx)("img", {
                                src: "/icons/logo.svg",
                                alt: "Logo",
                                className: "text-brand h-6 w-6"
                            }), (0, n.jsx)("div", {
                                className: "text-base leading-5 text-black/95 max-[400px]:hidden",
                                children: "YouWare"
                            })]
                        }), !M && !k && F(), !M && !k && (() => {
                            var e, t;
                            let l = (0, _.$)();
                            return (0, n.jsxs)("div", {
                                id: "user-container",
                                className: "flex cursor-pointer flex-row items-center gap-2",
                                onClick: () => {
                                    var e;
                                    R.push("".concat(l, "/profile/").concat(null === (e = r.user) || void 0 === e ? void 0 : e.uid)), P("app_creator_info_click", {
                                        project_url: r.project_url
                                    })
                                },
                                children: [(0, n.jsx)("img", {
                                    src: (null === (e = r.user) || void 0 === e ? void 0 : e.photo_url) || "/images/avatar.svg",
                                    alt: "",
                                    className: "h-5 w-5 rounded-full bg-gray-200 object-cover"
                                }), !k && (0, n.jsx)("div", {
                                    className: "text-xs font-medium text-black/95",
                                    children: null === (t = r.user) || void 0 === t ? void 0 : t.display_name
                                })]
                            })
                        })()]
                    }), (0, n.jsx)("div", {
                        className: (0, m.cn)("hover:bg-brand border-brand text-brand absolute left-1/2 z-10 flex h-[36px] w-[86px] -translate-x-1/2 transform cursor-pointer items-center justify-center rounded-[12px] border hover:text-white", c && "bg-brand text-white", k && "bg-brand h-[48px] w-[96px] rounded-[16px] border-none text-white shadow-[0px_8px_20px_0px_rgba(55,67,45,0.30)] active:bg-[#44503B] active:shadow-none"),
                        onClick: () => {
                            o(r)
                        },
                        children: (0, n.jsx)("div", {
                            className: "flex items-center gap-1",
                            children: c ? (0, n.jsx)(v.A, {
                                style: {
                                    width: k ? "28px" : "20px",
                                    height: k ? "28px" : "20px"
                                },
                                animationPath: "/animations/lottie-roll-project.json"
                            }) : (0, n.jsx)(l.OB8, {
                                className: (0, m.cn)("h-5 w-5", k && "h-[28px] w-[28px]")
                            })
                        })
                    }), (0, n.jsxs)("div", {
                        className: "flex min-w-0 flex-1 items-center justify-end gap-2",
                        children: [!M && (0, n.jsxs)("div", {
                            className: "ml-auto flex shrink-0 items-center gap-2",
                            children: [(0, n.jsxs)("div", {
                                id: "view-count-container",
                                className: "flex flex-row items-center gap-1",
                                children: [(0, n.jsx)(l.tLq, {
                                    className: (0, m.cn)("h-3 w-3 text-black/30", k && "h-4 w-4")
                                }), (0, n.jsx)("div", {
                                    id: "view-count-text",
                                    className: (0, m.cn)("text-xs font-medium tracking-tighter text-black/30", k && "text-[14px]"),
                                    children: (0, y.Z)(r.view_count || 0)
                                })]
                            }), !k && F()]
                        }), !M && !k && (0, n.jsx)("div", {
                            className: "min-w-0",
                            children: (() => {
                                var e, t;
                                let l = (null === (e = r.interaction) || void 0 === e ? void 0 : e.count.filter(e => e.count > 0)) || [];
                                return (0, n.jsx)("div", {
                                    id: "emoji-container",
                                    className: "relative flex flex-row items-center",
                                    children: (0, n.jsx)(h.d, {
                                        className: "w-full min-w-0 items-center",
                                        emojiCounts: l,
                                        emojiStatuses: (null === (t = r.interaction) || void 0 === t ? void 0 : t.status) || [],
                                        scrollable: !0,
                                        showAddButton: (null == l ? void 0 : l.length) != u.length,
                                        pickerClassName: "top-[-50px] right-[-8px]",
                                        fromMask: "from-[#f6f4f1]",
                                        onEmojiClick: e => {
                                            z(e)
                                        }
                                    })
                                })
                            })()
                        }), !k && (0, n.jsxs)("div", {
                            className: "flex shrink-0 items-center gap-2",
                            children: [!M && F(), !M && (0, n.jsx)("button", {
                                className: (0, m.cn)("flex h-8 w-8 cursor-pointer flex-row items-center justify-center rounded-[10px] border border-black/6 text-black/95 hover:border-none hover:bg-black/6", !r.allow_remix && "opacity-30 hover:opacity-30"),
                                onClick: A,
                                disabled: T,
                                children: T ? (0, n.jsx)(l.xNY, {
                                    className: "h-4 w-4 animate-spin text-black/95"
                                }) : (0, n.jsx)(l.xP3, {
                                    className: "h-4 w-4 text-black/95"
                                })
                            }), !k && (0, n.jsx)("div", {
                                id: "full-screen-button",
                                className: "flex h-8 w-8 cursor-pointer items-center justify-center rounded-[10px] border border-black/6 hover:border-none hover:bg-black/6",
                                onClick: i,
                                children: (0, n.jsx)(l.nHt, {
                                    className: "h-4 w-4",
                                    color: "black"
                                })
                            })]
                        })]
                    })]
                }) : (0, n.jsx)("div", {
                    className: (0, m.cn)("flex h-12 w-full max-w-full flex-row items-center justify-between gap-4 px-4", k && "px-6")
                })
            }

            function k(e) {
                let {
                    isPlaying: t
                } = e;
                return t ? (0, n.jsx)("div", {
                    className: "absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-black",
                    children: (0, n.jsx)(v.A, {
                        animationPath: "/animations/lottie-roll-project-mask.json",
                        className: "aspect-square h-[70%] items-center justify-center opacity-30",
                        style: {
                            pointerEvents: "none"
                        }
                    })
                }) : null
            }
            let S = ({
                interval: e
            }, t) => {
                let r, n = !0,
                    l = (...l) => {
                        n && (t(...l), n = !1, r = setTimeout(() => {
                            n = !0, r = void 0
                        }, e))
                    };
                return l.isThrottled = () => void 0 !== r, l
            };
            var E = r(7835),
                C = r(2343);

            function P(e) {
                let {
                    subdomain: t,
                    onVerificationSuccess: r
                } = e, [i, s] = (0, a.useState)(["", "", "", ""]), [o, c] = (0, a.useState)("idle"), [u, p] = (0, a.useState)(""), {
                    track: m
                } = (0, d.s)();
                (0, a.useEffect)(() => {
                    m("verify_passcode_page_show", {
                        project_url: window.location.pathname
                    })
                }, []);
                let f = (0, a.useRef)([]);
                (0, a.useEffect)(() => {
                    f.current[0] && f.current[0].focus()
                }, []);
                let x = (e, t) => {
                        if ("Backspace" === e.key && !i[t] && t > 0) {
                            var r;
                            null === (r = f.current[t - 1]) || void 0 === r || r.focus()
                        }
                    },
                    h = S({
                        interval: 200
                    }, (e, t) => {
                        let r = e.target.value.slice(-1);
                        if ("" === r || /^[0-9a-zA-Z]$/.test(r)) {
                            let e = [...i];
                            if (e[t] = r, s(e), "" !== r && t < 3) {
                                var n;
                                null === (n = f.current[t + 1]) || void 0 === n || n.focus()
                            }
                            "" !== r && 3 === t && e.every(e => "" !== e) && w(e.join(""))
                        }
                    }),
                    v = e => {
                        e.preventDefault();
                        let t = e.clipboardData.getData("text");
                        if (/^[0-9a-zA-Z]+$/.test(t)) {
                            var r, n;
                            let e = t.split(""),
                                l = [...i];
                            for (let t = 0; t < Math.min(4, e.length); t++) l[t] = e[t];
                            if (s(l), l.every(e => "" !== e)) null === (r = f.current[3]) || void 0 === r || r.focus(), w(l.join(""));
                            else {
                                let e = l.findIndex(e => "" === e); - 1 !== e && (null === (n = f.current[e]) || void 0 === n || n.focus())
                            }
                        }
                    },
                    w = async e => {
                        c("pending");
                        try {
                            let n = await (0, E.a)(t, e);
                            (null == n ? void 0 : n.verified) && (null == n ? void 0 : n.iframe_url) ? (c("success"), m("verify_passcode_success", {
                                project_url: window.location.pathname
                            }), r(null == n ? void 0 : n.iframe_url)) : (c("error"), p("Code mismatch - verify with the owner"))
                        } catch (e) {
                            c("error"), p("Verification failed. Please try again.")
                        }
                    };
                return (0, n.jsxs)("div", {
                    className: "min-h-screen",
                    children: [(0, n.jsx)(C.default, {}), (0, n.jsxs)("div", {
                        className: "flex min-h-[calc(100vh-64px)] flex-col items-center justify-center pb-[15vh]",
                        children: [(0, n.jsx)("h1", {
                            className: "font-montserrat text-transform-capitalize mb-3 text-[40px] leading-[40px] font-medium",
                            children: "Locked Project"
                        }), (0, n.jsx)("p", {
                            className: "",
                            children: "A password is required to view this creation"
                        }), (0, n.jsx)("div", {
                            className: "my-12 flex justify-center space-x-4",
                            children: i.map((e, t) => (0, n.jsx)("input", {
                                ref: e => {
                                    f.current[t] = e
                                },
                                type: "text",
                                inputMode: "text",
                                autoComplete: "off",
                                maxLength: 1,
                                value: e,
                                onChange: e => h(e, t),
                                onKeyDown: e => x(e, t),
                                onPaste: 0 === t ? v : void 0,
                                className: "h-24 w-18 rounded-[20px] border-none text-center text-[40px] font-medium [box-shadow:12.171px_4.868px_65.722px_0px_rgba(0,0,0,0.09)] transition-all focus:outline-black",
                                disabled: "pending" === o
                            }, t))
                        }), (0, n.jsxs)("div", {
                            className: "h-6 w-auto",
                            children: ["pending" === o && (0, n.jsxs)("div", {
                                className: "flex items-center justify-center gap-2",
                                children: [(0, n.jsx)(l.xNY, {
                                    className: "h-6 w-6 animate-spin"
                                }), (0, n.jsx)("p", {
                                    className: "text-center",
                                    children: "Verifying..."
                                })]
                            }), "success" === o && (0, n.jsx)("p", {
                                className: "text-center text-green-600",
                                children: "✨ Access granted!"
                            }), "error" === o && (0, n.jsx)("p", {
                                className: "text-center text-[#E60023]",
                                children: u
                            })]
                        })]
                    })]
                })
            }
            var R = r(707);
            let L = e => ({
                    urlTitle: e.split("-").slice(0, -1).join("-"),
                    urlHash: e.split("-").pop() || ""
                }),
                T = () => {
                    let e = window.location.pathname;
                    return e.includes("/project/") ? L(e.split("/").pop() || "").urlTitle : ""
                },
                M = (0, i.createServerReference)("6094db7d95bc817cbd363649e3519d549850b71da8", i.callServer, void 0, i.findSourceMapURL, "getRandomSelectedProjects"),
                z = "viewed_projects",
                A = () => {
                    try {
                        let e = localStorage.getItem(z);
                        if (!e) return [];
                        let t = JSON.parse(e),
                            r = Date.now();
                        return t.filter(e => r - e.timestamp < 36e5).map(e => e.id)
                    } catch (e) {
                        return console.error("Error getting viewed projects:", e), []
                    }
                },
                F = e => {
                    if (e) try {
                        let t = localStorage.getItem(z),
                            r = t ? JSON.parse(t) : [],
                            n = Date.now(),
                            l = r.filter(e => n - e.timestamp < 36e5),
                            a = l.findIndex(t => t.id === e);
                        a >= 0 ? l[a].timestamp = n : l.push({
                            id: e,
                            timestamp: n
                        }), localStorage.setItem(z, JSON.stringify(l))
                    } catch (e) {
                        console.error("Error saving viewed project:", e)
                    }
                };

            function D(e) {
                let {
                    projectViewDetail: t,
                    urlHash: r,
                    screenStatus: i,
                    enterFrom: f
                } = e, x = (0, a.useRef)(null), [h, v] = (0, a.useState)(f), [w, j] = (0, a.useState)(t.iframe_url), [b, g] = (0, a.useState)(t.need_passcode && !t.iframe_url), {
                    track: _
                } = (0, d.s)(), {
                    isFullScreen: y,
                    handleFullScreen: S,
                    disableExitFullScreen: E
                } = function() {
                    let {
                        initialState: e = !1,
                        forceFullScreen: t = !1
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [r, n] = (0, a.useState)(e);
                    return (0, a.useEffect)(() => {
                        let e = e => {
                            "Escape" === e.key && r && !t && n(!1)
                        };
                        return window.addEventListener("keydown", e), () => {
                            window.removeEventListener("keydown", e)
                        }
                    }, [r, t]), {
                        isFullScreen: r,
                        setIsFullScreen: n,
                        handleFullScreen: () => {
                            t || n(!r)
                        },
                        disableExitFullScreen: t
                    }
                }({
                    initialState: "force_full" === i || "default_full" === i,
                    forceFullScreen: "force_full" === i
                }), {
                    rolling: C,
                    project: L,
                    handleRoll: z,
                    handleFinishRoll: D,
                    setProject: I
                } = function(e) {
                    let {
                        initialProject: t,
                        isLoading: r = !1,
                        onProjectChange: n,
                        onUrlChange: l
                    } = e, [i, s] = (0, a.useState)(!1), [o, c] = (0, a.useState)(0), [u, p] = (0, a.useState)(t), {
                        track: m
                    } = (0, d.s)(), f = (0, a.useRef)(null);
                    (0, a.useEffect)(() => () => {
                        f.current && clearTimeout(f.current)
                    }, []);
                    let x = async () => {
                        if (i || r) return;
                        s(!0), c(Date.now()), f.current && clearTimeout(f.current), f.current = setTimeout(() => {
                            console.log("roll timeout (including API and iframe load), auto stop"), s(!1)
                        }, 5e3);
                        let e = A();
                        m("app_page_random_button_click", {
                            project_url: u.project_url
                        });
                        let t = await M(e);
                        if (!f.current) {
                            console.log("API request completed but timeout already occurred");
                            return
                        }
                        if (t.data && t.data.projects.length > 0) {
                            let e = t.data.projects[0],
                                r = { ...e,
                                    need_passcode: !1
                                };
                            p(r), n && n(r), l && e.iframe_url && l(e.iframe_url), e.project_id && F(e.project_id)
                        } else s(!1), f.current && (clearTimeout(f.current), f.current = null)
                    };
                    return {
                        rolling: i,
                        project: u,
                        handleRoll: x,
                        handleFinishRoll: () => {
                            let e = Date.now() - o;
                            if (f.current && (clearTimeout(f.current), f.current = null), !u.project_url) {
                                s(!1), c(0);
                                return
                            }
                            let t = u.project_url;
                            e > 1e3 ? (s(!1), window.history.pushState({}, "", t)) : setTimeout(() => {
                                s(!1), window.history.pushState({}, "", t)
                            }, 1e3 - e), c(0)
                        },
                        setProject: p
                    }
                }({
                    initialProject: t,
                    isLoading: b,
                    onProjectChange: e => {
                        v("random_button")
                    },
                    onUrlChange: e => {
                        j(e)
                    }
                });
                return ((0, a.useEffect)(() => {
                    let e = async () => {
                        let e = await c(r);
                        j((null == e ? void 0 : e.iframe_url) || ""), g(!1)
                    };
                    t.need_passcode && !t.iframe_url && e()
                }, [t.need_passcode, t.iframe_url]), ! function(e) {
                    let {
                        projectUrl: t
                    } = e;
                    (0, a.useEffect)(() => {
                        if (t && location.pathname === t) return;
                        let e = T();
                        if (!e) {
                            window.history.replaceState(null, "", t);
                            return
                        }(0, R.S)(e).then(e => {
                            var r;
                            (null == e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : r.is_valid) ? window.history.replaceState(null, "", t): window.location.href = "/404"
                        }).catch(e => {
                            window.history.replaceState(null, "", t)
                        })
                    }, [])
                }({
                    projectUrl: t.project_url
                }), (0, a.useEffect)(() => {
                    w && (_("app_page_view", {
                        project_url: (null == L ? void 0 : L.project_url) || t.project_url,
                        enter_from: h
                    }), (0, u.i)().then(e => {
                        o(t.project_id, "view", e)
                    }))
                }, [w]), (0, a.useEffect)(() => {
                    var e;
                    (null === (e = (0, p.j)()) || void 0 === e ? void 0 : e.client_id) || s()
                }, []), b) ? (0, n.jsxs)("div", {
                    className: "flex min-h-screen flex-col items-center justify-center",
                    children: [(0, n.jsx)(l.xNY, {
                        className: "mx-auto mb-3 h-10 w-10 animate-spin text-gray-400"
                    }), (0, n.jsx)("p", {
                        className: "text-sm text-gray-500",
                        children: "Loading..."
                    })]
                }) : t.need_passcode && !w ? (0, n.jsx)(P, {
                    subdomain: r,
                    onVerificationSuccess: e => {
                        j(e)
                    }
                }) : (0, n.jsxs)("div", {
                    className: "relative flex min-h-screen flex-col overflow-hidden",
                    style: {
                        minHeight: "100dvh"
                    },
                    children: [(0, n.jsx)("div", {
                        className: (0, m.cn)("relative flex flex-1 overflow-hidden transition-all duration-300 sm:px-2 sm:pt-2", y ? "pb-2" : "pb-[72px] sm:pb-12"),
                        children: (0, n.jsxs)("div", {
                            className: "relative flex flex-1 overflow-hidden border-black/6 sm:rounded-lg sm:border",
                            children: [(0, n.jsx)(k, {
                                isPlaying: C
                            }), (0, n.jsx)("iframe", {
                                ref: x,
                                src: w,
                                className: "flex-1 overflow-hidden transition-all duration-300 ".concat(y ? "!m-0 !rounded-none !border-none" : ""),
                                loading: "eager",
                                allowFullScreen: !0,
                                seamless: !0,
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; camera; microphone; geolocation; fullscreen; payment",
                                sandbox: "allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation",
                                onLoad: () => {
                                    t.project_id !== L.project_id && D()
                                }
                            })]
                        })
                    }), (0, n.jsx)("button", {
                        onClick: S,
                        className: "fixed right-2 bottom-2 z-50 cursor-pointer rounded-[10px] border border-black/12 bg-white p-2 transition-all duration-300 hover:bg-gray-100 ".concat(y && !E ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"),
                        children: (0, n.jsx)(l.a3o, {
                            className: "h-4 w-4"
                        })
                    }), (0, n.jsx)("div", {
                        className: "fixed bottom-0 left-0 z-50 w-full transition-all duration-300 ".concat(y ? "translate-y-full" : "translate-y-0"),
                        children: (0, n.jsx)(N, {
                            project: L,
                            rolling: C,
                            handleFullScreen: S,
                            onRoll: () => {
                                z()
                            },
                            onUpdate: (e, r) => {
                                I({ ...e,
                                    need_passcode: t.need_passcode,
                                    interaction: r
                                })
                            }
                        })
                    })]
                })
            }
        },
        7835: (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => l
            });
            var n = r(4477);
            let l = (0, n.createServerReference)("609f96f93197757e98f3ef53379cb0fd45a3f2d999", n.callServer, void 0, n.findSourceMapURL, "verifyPasscode")
        },
        9710: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => s
            });
            var n = r(5155),
                l = r(6874),
                a = r.n(l);
            r(2115);
            var i = r(2343);

            function s(e) {
                let {
                    error: t = "Something went wrong!",
                    reset: r
                } = e;
                return (0, n.jsxs)("div", {
                    className: "flex min-h-screen flex-col",
                    children: [(0, n.jsx)(i.default, {
                        hideRight: !0
                    }), (0, n.jsxs)("main", {
                        className: "mb-20 flex w-full flex-1 flex-col items-center justify-center px-6 sm:px-4",
                        children: [(0, n.jsx)("h2", {
                            className: "text-center text-[28px]/8 sm:text-[32px]/9 md:text-[40px]/10",
                            children: t
                        }), (0, n.jsx)("p", {
                            className: "mt-3 text-center text-sm text-black/45 sm:text-base",
                            children: "Please try again later or contact support if the problem persists."
                        }), (0, n.jsxs)("div", {
                            className: "mt-12 flex gap-4 sm:mt-16 md:mt-20",
                            children: [(0, n.jsx)("button", {
                                onClick: () => {
                                    r ? r() : window.location.reload()
                                },
                                className: "shine-effect flex h-12 w-36 cursor-pointer items-center justify-center rounded-full bg-black/95 text-sm text-white sm:h-14 sm:w-40 sm:text-base",
                                children: "Try Again"
                            }), (0, n.jsx)(a(), {
                                href: "https://www.youware.com",
                                className: "shine-effect flex h-12 w-36 cursor-pointer items-center justify-center rounded-full border border-black/95 text-sm text-black/95 sm:h-14 sm:w-40 sm:text-base",
                                children: "Go Home"
                            })]
                        })]
                    })]
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [8823, 8888, 9721, 9342, 770, 7935, 750, 2343, 8441, 1684, 7358], () => t(3468)), _N_E = e.O()
    }
]);