try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "45fa602f-38b2-46ab-b22f-9b04a0f5d69e", e._sentryDebugIdIdentifier = "sentry-dbid-45fa602f-38b2-46ab-b22f-9b04a0f5d69e")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9696], {
        565: (e, t, a) => {
            "use strict";
            a.d(t, {
                i: () => l
            });
            let r = null,
                l = () => r ? Promise.resolve(r) : new Promise(e => {
                    if (!window.collectEvent) {
                        e("");
                        return
                    }
                    try {
                        window.collectEvent("getToken", t => {
                            t && t.ssid ? (r = t.ssid, e(t.ssid)) : e("")
                        })
                    } catch (t) {
                        e("")
                    }
                })
        },
        14069: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => n
            });
            var r = a(95155),
                l = a(12115),
                s = a(56389);

            function n(e) {
                let {
                    children: t
                } = e, {
                    track: a
                } = (0, s.s)();
                return (0, l.useEffect)(() => {
                    a("home_page_view")
                }, []), (0, r.jsx)(r.Fragment, {
                    children: t
                })
            }
        },
        29230: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => j
            });
            var r = a(95155),
                l = a(25427),
                s = a(12115),
                n = a(34477);
            let i = (0, n.createServerReference)("40cfdb560a5ea0bb67bfbb0ac49cb83141399b98ff", n.callServer, void 0, n.findSourceMapURL, "getProjects"),
                o = (0, n.createServerReference)("7f1d36a7a79f9e055200837d60acd937e99ee47301", n.callServer, void 0, n.findSourceMapURL, "getInstallFlag"),
                c = (0, n.createServerReference)("40ccf59053abc895c161a8bb6051e714a027d1613b", n.callServer, void 0, n.findSourceMapURL, "markImpression"),
                d = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            batchInterval: t = 1e3
                        } = e,
                        [a, r] = (0, s.useState)(new Set),
                        l = (0, s.useRef)(null),
                        n = (0, s.useCallback)((e, t, a, l) => {
                            r(t => {
                                let a = new Set(t);
                                return a.add(e), a
                            })
                        }, []);
                    return (0, s.useEffect)(() => {
                        let e = async () => {
                            if (a.size > 0) {
                                let e = Array.from(a);
                                try {
                                    r(new Set), await c(e)
                                } catch (e) {
                                    console.error("Failed to report project exposures:", e)
                                }
                            }
                        };
                        return l.current && clearTimeout(l.current), a.size > 0 && (l.current = setTimeout(e, t)), () => {
                            l.current && clearTimeout(l.current)
                        }
                    }, [a, t]), {
                        handleExposure: n,
                        exposedProjectsCount: a.size
                    }
                };
            var u = a(56389);
            let p = () => {
                document.cookie = "install_flag=true; path=/; max-age=".concat(2592e3, "; domain=").concat(".youware.com")
            };
            var x = a(35695),
                m = a(78161),
                f = a(46065);
            let h = e => {
                var t, a, l, s, n;
                let {
                    project: i,
                    userClick: o
                } = e;
                return (0, r.jsxs)("div", {
                    className: "flex flex-row justify-start gap-2 pl-1",
                    children: [(0, r.jsx)("img", {
                        src: (null === (t = i.user) || void 0 === t ? void 0 : t.photo_url) || "/images/avatar.svg",
                        className: "mt-0.5 h-[30px] w-[30px] cursor-pointer rounded-full",
                        onClick: o,
                        alt: "user avatar"
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [(0, r.jsx)("div", {
                            className: "text-[14px] text-black/95",
                            children: null !== (n = null !== (s = i.custom_title) && void 0 !== s ? s : i.title) && void 0 !== n ? n : "".concat(null === (a = i.user) || void 0 === a ? void 0 : a.display_name, "'s project")
                        }), (0, r.jsx)("div", {
                            className: "text-[12px] text-black/30",
                            onClick: o,
                            children: null === (l = i.user) || void 0 === l ? void 0 : l.display_name
                        })]
                    })]
                })
            };
            var v = a(70165);
            let b = e => {
                var t, a;
                let {
                    project: l,
                    index: n,
                    area: i,
                    onUpdate: o,
                    tabName: c,
                    onExposure: d
                } = e, [p, b] = (0, s.useState)(!1), g = (0, s.useRef)(null), j = (0, x.useRouter)(), w = (0, s.useRef)(null), {
                    track: y
                } = (0, u.s)();
                (0, s.useEffect)(() => {
                    let e = new IntersectionObserver(t => {
                        t[0].isIntersecting && !p && (y("home_project_show", {
                            project_url: l.project_url,
                            index: n + 1,
                            area: i,
                            tab_name: c
                        }), d && d(l.project_id, n, i, c), b(!0), e.disconnect())
                    });
                    return g.current && e.observe(g.current), () => e.disconnect()
                }, [y, l.project_url, n, i, p, d, c]);
                let _ = (0, s.useCallback)(() => {
                        y("home_project_click", {
                            project_url: l.project_url,
                            index: n + 1,
                            area: i,
                            tab_name: c
                        }), setTimeout(() => {
                            window.open("".concat(l.project_url, "?enter_from=home"), "_blank")
                        }, 100)
                    }, [l]),
                    N = (0, s.useCallback)(e => {
                        var t, a, r;
                        if (e.preventDefault(), e.stopPropagation(), (null === (t = l.user) || void 0 === t ? void 0 : t.uid) && (null === (a = l.user) || void 0 === a ? void 0 : a.uid) !== v.v1) {
                            let e = "/profile/".concat(null === (r = l.user) || void 0 === r ? void 0 : r.uid);
                            y("home_creator_click", {
                                project_url: l.project_url,
                                creator_profile_url: e
                            }), window.open(e, "_blank")
                        }
                    }, [l.user, j]);
                return (0, r.jsxs)("div", {
                    ref: g,
                    className: "flex w-full cursor-pointer flex-col gap-3 rounded-[16px] bg-white p-2 pb-3 duration-300",
                    onClick: _,
                    children: [(0, r.jsxs)("div", {
                        className: "flex h-full w-full flex-col gap-3",
                        children: [(0, r.jsx)("div", {
                            className: "relative overflow-hidden rounded-[8px] border border-black/6",
                            onMouseEnter: () => {
                                var e;
                                null === (e = w.current) || void 0 === e || e.play()
                            },
                            onMouseLeave: () => {
                                var e;
                                null === (e = w.current) || void 0 === e || e.pause()
                            },
                            children: (0, r.jsx)("div", {
                                className: "aspect-[16/9] w-full overflow-hidden",
                                children: (0, r.jsx)(m.A, {
                                    url: null !== (a = null !== (t = l.custom_cover_url) && void 0 !== t ? t : l.cover_url) && void 0 !== a ? a : "",
                                    className: "h-full w-full object-cover object-top transition-transform duration-300 hover:scale-102",
                                    ref: w,
                                    alt: l.title ? "Screenshot of ".concat(l.title) : "Screenshot of project"
                                })
                            })
                        }), (0, r.jsx)(h, {
                            project: l,
                            userClick: N
                        })]
                    }), (0, r.jsx)("div", {
                        className: "h-[1px] w-full px-1",
                        children: (0, r.jsx)("div", {
                            className: "h-full w-full bg-black/6"
                        })
                    }), (0, r.jsx)(f.A, {
                        project: l,
                        onUpdate: o,
                        location: "home"
                    })]
                })
            };

            function g() {
                return (0, r.jsx)("div", {
                    className: "3xl:grid-cols-4 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3",
                    children: Array(12).fill(0).map((e, t) => (0, r.jsxs)("div", {
                        className: "flex w-full flex-col gap-3 rounded-[16px] bg-white p-2 pb-3",
                        children: [(0, r.jsx)("div", {
                            className: "relative overflow-hidden rounded-[8px] border border-black/6",
                            children: (0, r.jsx)("div", {
                                className: "aspect-[16/9] w-full animate-pulse bg-black/5"
                            })
                        }), (0, r.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, r.jsx)("div", {
                                className: "h-8 w-8 animate-pulse rounded-full bg-black/5"
                            }), (0, r.jsxs)("div", {
                                className: "flex-1",
                                children: [(0, r.jsx)("div", {
                                    className: "mb-1 h-3.5 w-24 animate-pulse rounded bg-black/5"
                                }), (0, r.jsx)("div", {
                                    className: "h-2.5 w-16 animate-pulse rounded bg-black/5"
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "h-[1px] w-full px-1",
                            children: (0, r.jsx)("div", {
                                className: "h-full w-full bg-black/3"
                            })
                        }), (0, r.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, r.jsx)("div", {
                                className: "h-7 w-20 animate-pulse rounded-[4px] bg-black/5"
                            }), (0, r.jsx)("div", {
                                className: "h-7 w-7 animate-pulse rounded-full bg-black/5"
                            })]
                        })]
                    }, t))
                })
            }

            function j(e) {
                let {
                    categories: t,
                    initialCategory: a,
                    initialProjects: n,
                    isNewInstall: c
                } = e, [x, m] = (0, s.useState)(a), [f, h] = (0, s.useState)(c), [v, j] = (0, s.useState)(n), [w, y] = (0, s.useState)(!1), [_, N] = (0, s.useState)(null), [k, S] = (0, s.useState)({
                    next_cursor: "",
                    has_more: !0
                }), [P, C] = (0, s.useState)(!1), E = (0, s.useRef)(null), T = (0, s.useRef)(null), U = (0, s.useRef)(!1), {
                    track: R,
                    inject: z
                } = (0, u.s)(), {
                    handleExposure: I
                } = d();
                (0, s.useEffect)(() => {
                    (async () => {
                        await o() || p()
                    })()
                }, []), (0, s.useEffect)(() => {
                    z({
                        is_new_user: f
                    })
                }, [f]);
                let A = async function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        if (!U.current) try {
                            U.current = !0, e ? y(!0) : C(!0);
                            let r = await i({
                                page_size: 12,
                                cursor: e ? "" : k.next_cursor,
                                ...f ? {
                                    is_new_user: f
                                } : {},
                                ...t && "all" !== t ? {
                                    category_id: t
                                } : {}
                            });
                            if (0 === r.code && r.data) {
                                var a;
                                let t = (null === (a = r.data) || void 0 === a ? void 0 : a.projects) || [];
                                e ? j(t) : j(e => {
                                    let a = t.filter(t => !e.some(e => e.project_id === t.project_id));
                                    return [...e, ...a]
                                }), S(r.data.page_info)
                            } else N(r.message || "Failed to load projects")
                        } catch (e) {
                            N("An error occurred while fetching projects"), S({
                                next_cursor: "",
                                has_more: !1
                            })
                        } finally {
                            y(!1), C(!1), U.current = !1
                        }
                    },
                    F = e => {
                        m(e), j([]), A(!0, e.category_id), R("home_category_tab_click", {
                            tab_name: e.display_name
                        })
                    },
                    M = () => {
                        w || P || !k.has_more || A(!1, x ? x.category_id : void 0)
                    },
                    D = (e, t) => {
                        j(a => a.map(a => a.project_id === e.project_id ? { ...a,
                            interaction: t
                        } : a))
                    };
                return (0, s.useEffect)(() => (E.current && E.current.disconnect(), E.current = new IntersectionObserver(e => {
                    let [t] = e;
                    !t.isIntersecting || !k.has_more || w || P || _ || M()
                }, {
                    rootMargin: "0px 0px 600px 0px",
                    threshold: .1
                }), T.current && E.current.observe(T.current), () => {
                    E.current && E.current.disconnect()
                }), [k.has_more, w, P, _, M]), (0, r.jsxs)("div", {
                    className: "mx-auto w-full max-w-[2000px] px-5 py-6 sm:px-4 md:px-22",
                    children: [(0, r.jsx)("div", {
                        className: "mb-5 flex justify-center sm:mb-4 md:mb-4",
                        children: (0, r.jsx)("div", {
                            className: "no-scrollbar flex items-center gap-3 overflow-x-auto pb-2 whitespace-nowrap",
                            children: t && t.map(e => (0, r.jsx)("button", {
                                onClick: () => F(e),
                                disabled: w,
                                className: "".concat(w ? "" : "cursor-pointer", " min-w-[64px] flex-shrink-0 rounded-[10px] px-4 py-2.5 text-[14px] font-medium transition-colors ").concat((null == x ? void 0 : x.category_id) === e.category_id ? "bg-brand text-white" : "bg-brand/6 hover:bg-brand/12 text-black/65"),
                                children: e.display_name
                            }, e.category_id))
                        })
                    }), w ? (0, r.jsx)(g, {}) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: "3xl:grid-cols-4 mx-auto grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 md:gap-8 xl:grid-cols-3",
                            children: v.map((e, t) => (0, r.jsx)(b, {
                                project: e,
                                area: "codecamp",
                                index: t,
                                onUpdate: D,
                                onExposure: I,
                                tabName: (null == x ? void 0 : x.display_name) || ""
                            }, "".concat(e.project_id, "-").concat(t)))
                        }), 0 === v.length && !w && !_ && (0, r.jsxs)("div", {
                            className: "my-8 py-16 text-center",
                            children: [(0, r.jsx)("p", {
                                className: "mb-2 text-xl font-medium text-black/95",
                                children: "No projects found"
                            }), (0, r.jsx)("p", {
                                className: "text-sm text-black/95",
                                children: "Upload your first project to get started"
                            })]
                        }), _ && (0, r.jsx)("div", {
                            className: "my-8 rounded-lg p-6 text-center text-red-500",
                            children: _
                        })]
                    }), (0, r.jsx)("div", {
                        ref: T,
                        className: "mt-8 h-20 w-full"
                    }), k.has_more && !w && (0, r.jsx)("div", {
                        className: "mt-8 flex justify-center",
                        children: (0, r.jsx)("button", {
                            onClick: M,
                            disabled: P || U.current,
                            className: "rounded-full bg-black/3 px-4 py-2 text-[14px] text-black/95 transition-colors duration-200 hover:bg-black/6 disabled:opacity-70",
                            children: P ? (0, r.jsxs)("span", {
                                className: "flex items-center justify-center gap-2",
                                children: [(0, r.jsx)(l.xNY, {
                                    className: "h-4 w-4 animate-spin text-black/95"
                                }), (0, r.jsx)("p", {
                                    children: "Loading more..."
                                })]
                            }) : "More ideas"
                        })
                    })]
                })
            }
        },
        42919: (e, t, a) => {
            "use strict";
            a.d(t, {
                d: () => u
            });
            var r = a(95155),
                l = a(25427),
                s = a(12115),
                n = a(60750),
                i = a(90239),
                o = a(26846),
                c = a(17023);
            let d = e => {
                    let {
                        isOpen: t,
                        onEmojiSelect: a,
                        onClose: l,
                        onMouseEnter: i,
                        onMouseLeave: o,
                        className: d
                    } = e, [u, p] = (0, s.useState)([]), {
                        asyncGetEmojis: x
                    } = (0, n.k)(), m = (0, s.useRef)(null);
                    (0, s.useEffect)(() => {
                        t && x().then(e => {
                            console.log("asyncGetEmojis", e), p(e)
                        })
                    }, [t]);
                    let f = e => {
                        a(e), l()
                    };
                    return t ? (0, r.jsx)("div", {
                        className: "absolute top-[-50px] right-0 z-50 h-[54px] w-[268px] items-start justify-items-start ".concat(d),
                        onMouseEnter: i,
                        onMouseLeave: o,
                        children: (0, r.jsx)("div", {
                            className: "flex h-[44px] w-full flex-col items-center justify-center rounded-[8px] bg-white shadow-lg",
                            id: "emoji-picker",
                            ref: m,
                            children: (0, r.jsx)("div", {
                                className: "flex flex-wrap items-center justify-center gap-3",
                                children: u.map(e => (0, r.jsx)("button", {
                                    className: "flex h-5 w-5 cursor-pointer items-center justify-center border-none",
                                    onClick: t => {
                                        t.stopPropagation(), t.preventDefault(), f(e)
                                    },
                                    title: e.display_name,
                                    children: (0, r.jsx)(c.m, {
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
                        emojiStatuses: a,
                        className: u,
                        pickerClassName: p,
                        onEmojiClick: x,
                        showAddButton: m = !1,
                        scrollable: f = !0,
                        fromMask: h = "from-[#fff]"
                    } = e, {
                        emojis: v
                    } = (0, n.k)(), [b, g] = (0, s.useState)(!1), [j, w] = (0, s.useState)(!1), [y, _] = (0, s.useState)(!1), [N, k] = (0, s.useState)(!1), S = (0, i.I)(), P = (0, s.useRef)(null), C = (0, s.useRef)(null);
                    (0, s.useEffect)(() => {
                        let e = () => {
                                if (C.current) {
                                    let {
                                        scrollLeft: e,
                                        scrollWidth: t,
                                        clientWidth: a
                                    } = C.current;
                                    _(e > 0), k(e < t - a)
                                }
                            },
                            t = C.current;
                        return t && (e(), t.addEventListener("scroll", e), window.addEventListener("resize", e)), () => {
                            t && (t.removeEventListener("scroll", e), window.removeEventListener("resize", e))
                        }
                    }, []);
                    let E = e => {
                        var t;
                        return (null === (t = a.find(t => t.interaction_type === e)) || void 0 === t ? void 0 : t.status) === !0
                    };
                    return (0, r.jsxs)("div", {
                        className: (0, o.cn)("relative flex justify-end gap-[6px]", u),
                        children: [f && (0, r.jsxs)(r.Fragment, {
                            children: [y && (0, r.jsx)("div", {
                                className: (0, o.cn)("pointer-events-none absolute top-0 bottom-0 left-[-2px] z-10 w-6 bg-gradient-to-r to-transparent", h)
                            }), N && (0, r.jsx)("div", {
                                className: (0, o.cn)("pointer-events-none absolute top-0 bottom-0 z-10 w-6 bg-gradient-to-l to-transparent", h, m ? "right-7" : "right-0")
                            })]
                        }), (0, r.jsx)("div", {
                            ref: C,
                            className: (0, o.cn)("flex max-h-[26px] min-w-0 gap-[6px]", f ? "flex-nowrap overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" : "flex-wrap overflow-hidden"),
                            children: t.map(e => (0, r.jsxs)("div", {
                                className: (0, o.cn)("flex h-[26px] cursor-pointer items-center gap-[6px] rounded-[8px] px-[6px] py-1", E(e.interaction_type) ? "bg-brand/6 ring-brand/30 ring-1 ring-inset" : "bg-black/3"),
                                style: {
                                    direction: "ltr"
                                },
                                onClick: t => {
                                    t.stopPropagation(), t.preventDefault(), x(e.interaction_type)
                                },
                                children: [(0, r.jsx)(c.m, {
                                    emoji: v.find(t => t.interaction_type === e.interaction_type),
                                    className: "h-4 w-4",
                                    width: 16,
                                    height: 16,
                                    triggerType: c.Z.Click,
                                    selected: E(e.interaction_type)
                                }), (0, r.jsx)("span", {
                                    className: (0, o.cn)("text-xs font-medium", (E(e.interaction_type), "text-black/95")),
                                    children: e.count
                                })]
                            }, e.interaction_type))
                        }), m && (0, r.jsx)("div", {
                            className: "flex h-[26px] w-[26px] shrink-0 cursor-pointer items-center justify-center rounded-[8px] bg-black/3 p-1",
                            style: {
                                direction: "ltr"
                            },
                            onClick: e => {
                                e.stopPropagation(), e.preventDefault(), g(!b)
                            },
                            onMouseEnter: () => {
                                S || (P.current && clearTimeout(P.current), g(!0))
                            },
                            onMouseLeave: () => {
                                S || j || (P.current = setTimeout(() => {
                                    g(!1)
                                }, 100))
                            },
                            children: (0, r.jsx)(l.kpC, {
                                className: "h-4 w-4 text-black/12"
                            })
                        }), b && (0, r.jsx)(d, {
                            isOpen: b,
                            className: p,
                            onEmojiSelect: e => {
                                x(e.interaction_type), g(!1)
                            },
                            onClose: () => {
                                g(!1)
                            },
                            onMouseEnter: () => {
                                S || (P.current && clearTimeout(P.current), w(!0))
                            },
                            onMouseLeave: () => {
                                S || (w(!1), P.current = setTimeout(() => {
                                    g(!1)
                                }, 100))
                            }
                        })]
                    })
                }
        },
        46065: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => u
            });
            var r = a(95155),
                l = a(25427),
                s = a(12115),
                n = a(17928),
                i = a(60750),
                o = a(56389),
                c = a(61884),
                d = a(42919);
            let u = e => {
                var t;
                let {
                    project: a,
                    onUpdate: u,
                    location: p
                } = e, {
                    emojis: x,
                    registerInteractionCallback: m,
                    interact: f
                } = (0, i.k)(), {
                    track: h
                } = (0, o.s)();

                function v(e) {
                    var t, r, l, s;
                    let i = null === (r = a.interaction) || void 0 === r ? void 0 : null === (t = r.status.find(t => t.interaction_type === e)) || void 0 === t ? void 0 : t.status;
                    f(a, e, i ? n.f.Cancel : n.f.Add), h("emoji_reaction_click", {
                        action: i ? "false" : "true",
                        project_url: a.project_url,
                        emoji: e,
                        location: p,
                        count: ((null === (s = a.interaction) || void 0 === s ? void 0 : null === (l = s.count.find(t => t.interaction_type === e)) || void 0 === l ? void 0 : l.count) || 0) + (i ? -1 : 1)
                    })
                }(0, s.useEffect)(() => {
                    m(a.project_id, (e, t) => {
                        u(a, t)
                    })
                }, [a.project_id, m]);
                let b = (null === (t = a.interaction) || void 0 === t ? void 0 : t.count.filter(e => e.count > 0)) || [];
                return (0, r.jsxs)("div", {
                    className: "flex flex-row items-center gap-3 px-1",
                    children: [(() => {
                        var e, t;
                        return (0, r.jsxs)("div", {
                            className: "flex flex-row items-center gap-3",
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center gap-1",
                                children: [(0, r.jsx)(l.tLq, {
                                    className: "h-3 w-3 text-black/30"
                                }), (0, r.jsx)("div", {
                                    className: "pt-0.5 text-[12px] text-black/30",
                                    children: (0, c.Z)(null !== (e = a.view_count) && void 0 !== e ? e : 0)
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center gap-1",
                                children: [(0, r.jsx)(l.xP3, {
                                    className: "h-3 w-3 text-black/30"
                                }), (0, r.jsx)("div", {
                                    className: "pt-0.5 text-[12px] text-black/30",
                                    children: (0, c.Z)(null !== (t = a.remix_count) && void 0 !== t ? t : 0)
                                })]
                            })]
                        })
                    })(), (() => {
                        var e;
                        return (0, r.jsx)("div", {
                            className: "min-w-0 flex-1",
                            children: (0, r.jsx)(d.d, {
                                emojiCounts: b,
                                emojiStatuses: (null === (e = a.interaction) || void 0 === e ? void 0 : e.status) || [],
                                onEmojiClick: v,
                                showAddButton: (null == b ? void 0 : b.length) != x.length
                            })
                        })
                    })()]
                })
            }
        },
        61884: (e, t, a) => {
            "use strict";

            function r(e) {
                return e > 1e3 && e < 1e6 ? (e / 1e3).toFixed(1) + "K" : e > 1e6 ? (e / 1e6).toFixed(1) + "M" : e > 1e9 ? (e / 1e9).toFixed(1) + "B" : e
            }
            a.d(t, {
                Z: () => r
            })
        },
        79696: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 86009)), Promise.resolve().then(a.bind(a, 29230)), Promise.resolve().then(a.bind(a, 14069)), Promise.resolve().then(a.bind(a, 52343))
        },
        80191: (e, t, a) => {
            "use strict";
            a.d(t, {
                V: () => i.Vt,
                N: () => m
            });
            var r = a(35695),
                l = a(12115),
                s = a(34477);
            let n = (0, s.createServerReference)("60d7ce557c6a2c4e3b865bc11edd5c8cc98944f0b0", s.callServer, void 0, s.findSourceMapURL, "remixProject");
            var i = a(70165),
                o = a(565),
                c = a(90239),
                d = a(66139),
                u = a(48436),
                p = a(89003);
            let x = e => ({
                    remix: "Failed to remix project, please try again later",
                    create: "Failed to create project, please try again later"
                })[e],
                m = () => {
                    let e = (0, r.useRouter)(),
                        t = (0, c.I)(),
                        {
                            checkAuth: a
                        } = (0, p.M)(),
                        [s, i] = (0, l.useState)(!1);
                    return {
                        remixAction: (0, l.useCallback)(async (t, r) => a(async () => {
                            i(!0);
                            try {
                                let a = await (0, o.i)(),
                                    l = await n(t, a);
                                if (l.data) {
                                    let t = (0, d.$)(),
                                        a = {
                                            enter_from: r
                                        };
                                    "create" === r && (a.createWeb = "true"), e.push("".concat(t, "/editor/").concat(l.data.project_id, "?").concat(new URLSearchParams(a).toString()))
                                } else(0, u.P)({
                                    message: x(r),
                                    type: "error"
                                })
                            } catch (e) {
                                console.log("error", e), (0, u.P)({
                                    message: x(r),
                                    type: "error"
                                })
                            } finally {
                                i(!1)
                            }
                            setTimeout(() => {
                                i(!1)
                            }, 1e3)
                        }, {
                            title: "Want to remix this project?",
                            description: "Log in to remix and customize it your way.",
                            cancelText: "Cancel",
                            confirmText: "Log in"
                        })(), [t, e]),
                        isRemixing: s
                    }
                }
        },
        86009: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => A
            });
            var r = a(95155),
                l = a(35695),
                s = a(12115),
                n = a(10862),
                i = a(26846),
                o = a(25427),
                c = a(44684),
                d = a(2997),
                u = a(49512),
                p = a(66139);
            let x = "yw-pending-action-";
            var m = function(e) {
                return e.CreateWeb = "create_web", e.HomeUpload = "home_upload", e.HtmlShip = "html_ship", e
            }({});
            let f = e => {
                    localStorage.setItem(x + e.key, JSON.stringify(e))
                },
                h = () => {
                    let {
                        user: e
                    } = (0, n.A)(), t = e => {
                        if (new URLSearchParams(window.location.search).get("pending_action") !== e) return null;
                        let t = localStorage.getItem(x + e);
                        return t ? JSON.parse(t) : null
                    }, a = e => {
                        localStorage.removeItem(x + e)
                    }, r = () => {
                        let e = new URL(window.location.href);
                        e.searchParams.delete("pending_action"), window.history.replaceState({}, "", e.toString())
                    };
                    return {
                        withAuth: async t => {
                            let {
                                key: a,
                                payload: r,
                                extraParams: l = {},
                                action: s,
                                reject: n
                            } = t;
                            if (e) await s(r);
                            else {
                                null == n || n(), f({
                                    key: a,
                                    payload: r,
                                    extraParams: l
                                });
                                let e = (0, p.$)(!0) + window.location.pathname,
                                    t = new URLSearchParams(window.location.search);
                                t.set("pending_action", a), Object.entries(l).forEach(e => {
                                    let [a, r] = e;
                                    t.set(a, r)
                                });
                                let s = encodeURIComponent("".concat(e, "?").concat(t.toString())),
                                    i = (0, p.$)(!0);
                                window.location.href = "".concat(i, "/login?returnTo=").concat(s)
                            }
                        },
                        checkPendingAction: t,
                        clearPendingAction: a,
                        clearSearchParams: r,
                        runPendingAction: function(e, l) {
                            let s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                                n = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                                i = t(e);
                            return !!i && i.key === e && !!i.payload && (l(i.payload), s && a(e), n && r(), !0)
                        }
                    }
                };
            var v = a(47511),
                b = a(87895),
                g = a(80191),
                j = a(3561),
                w = a(56389),
                y = a(48436),
                _ = a(38618);
            let N = () => {
                let [e, t] = (0, s.useState)(!1), [a, l] = (0, s.useState)(""), {
                    remixAction: p
                } = (0, g.N)(), {
                    track: x,
                    trackGoogleAds: f
                } = (0, w.s)(), {
                    runPendingAction: N,
                    withAuth: k
                } = h(), {
                    createWeb: S
                } = (0, v.g)(), {
                    usageInfo: P,
                    refresh: C
                } = (0, j.u)(), {
                    user: E
                } = (0, n.A)(), {
                    addFile: T,
                    attachments: U,
                    setAttachments: R,
                    removeAttachment: z,
                    handleRetry: I
                } = (0, b.j)(), {
                    UploadInput: A,
                    handlePlusClick: F,
                    handlePaste: M,
                    dropHandlers: D,
                    DragOverlay: L
                } = (0, u.A)({
                    options: {
                        allowedExtensions: [".png", ".jpg", ".jpeg", ".svg", ".webp", ".gif", ".html", ".css", ".js", ".pdf", ".mp3", ".wav", ".aac", ".m4a", ".ogg"],
                        maxAttachments: 20,
                        currentCount: U.length
                    },
                    handleFile: e => {
                        T(e)
                    }
                }), W = a.trim();
                (0, s.useEffect)(() => {
                    C()
                }, [null == E ? void 0 : E.plan]), (0, s.useEffect)(() => {
                    "" !== a || e || N(m.CreateWeb, async e => {
                        t(!0), l(e.userPrompt), R(e.attachments), await B(e.userPrompt, e.attachments)
                    })
                }, [a]);
                let B = async (e, a) => {
                    if (a.filter(e => "pending" === e.status || "uploading" === e.status).length > 0) {
                        (0, y.P)({
                            message: "Attachments are uploading, please wait...",
                            type: "error"
                        });
                        return
                    }
                    t(!0), await k({
                        key: m.CreateWeb,
                        payload: {
                            userPrompt: e,
                            attachments: a,
                            createdTime: Date.now()
                        },
                        action: async () => {
                            let r = await C();
                            if (!(0, _.p)(r || null, !0)) {
                                t(!1);
                                return
                            }
                            await S(e, a), await p(g.V, "create"), f("conversion", {
                                send_to: "AW-16989287560/jnD3CJrv6ccaEIjpj6U_"
                            }), x("create_new_start"), setTimeout(() => {
                                t(!1)
                            }, 1e3)
                        }
                    })
                };
                return (0, r.jsxs)("div", {
                    className: "relative flex h-full w-full flex-col items-center justify-between gap-3 p-4",
                    ...D,
                    role: "main",
                    "aria-label": "Create web project editor",
                    children: [(0, r.jsx)(L, {}), (0, r.jsxs)("div", {
                        className: "flex w-full flex-1 flex-col gap-3 bg-white",
                        children: [U.length > 0 && (0, r.jsx)(c.A, {
                            attachments: U,
                            onDelete: z,
                            onRetry: I
                        }), (0, r.jsx)("textarea", {
                            disabled: e,
                            value: a,
                            onChange: e => l(e.target.value),
                            onInput: function(e) {
                                e.currentTarget.style.height = "auto", e.currentTarget.style.height = "".concat(e.currentTarget.scrollHeight, "px")
                            },
                            onKeyDown: e => {
                                if ("Enter" === e.key && !e.shiftKey && !e.nativeEvent.isComposing) {
                                    if (!W) {
                                        e.preventDefault();
                                        return
                                    }
                                    e.preventDefault(), B(a, U)
                                }
                            },
                            onPaste: M,
                            placeholder: 'Tell me what you want to build — e.g. "Make me a personal portfolio"',
                            className: (0, i.cn)("flex-1 resize-none overflow-auto border-none bg-transparent p-1 text-sm outline-none"),
                            rows: 3,
                            style: {
                                resize: "none"
                            },
                            "aria-label": "Project description input",
                            "aria-invalid": !1,
                            role: "textbox",
                            "aria-multiline": "true"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex w-full justify-between",
                        role: "toolbar",
                        "aria-label": "Editor actions",
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, r.jsx)("button", {
                                className: "flex h-9 w-9 cursor-pointer items-center justify-center rounded-[10px] border border-black/12 transition-colors hover:bg-black/3",
                                disabled: e,
                                onClick: F,
                                "aria-label": "Add attachment files",
                                type: "button",
                                children: (0, r.jsx)(o.Ld_, {
                                    className: "h-4 w-4 text-black"
                                })
                            }), (0, r.jsx)(d.A, {
                                className: "h-9 rounded-[10px] border-black/12",
                                source: "home_page_input",
                                "aria-label": "Connect integrations"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "flex items-center gap-4",
                            children: e ? (0, r.jsx)("div", {
                                className: "bg-brand flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-[10px]",
                                role: "status",
                                "aria-label": "Submitting, please wait",
                                children: (0, r.jsx)(o.xNY, {
                                    className: "h-4 w-4 animate-spin text-white"
                                })
                            }) : (0, r.jsx)("button", {
                                onClick: () => B(a, U),
                                disabled: !W,
                                className: "flex h-9 w-9 items-center justify-center rounded-[10px] transition-colors ".concat(W ? "bg-brand hover:bg-brand/85 cursor-pointer text-white" : "cursor-not-allowed bg-black/3 text-black/45"),
                                "aria-label": W ? "submit" : "Please enter project description to submit",
                                type: "button",
                                children: (0, r.jsx)(o.avw, {
                                    className: (0, i.cn)("h-4 w-4", W ? "text-white" : "text-black/45")
                                })
                            })
                        })]
                    }), (0, r.jsx)(A, {}), (null == E ? void 0 : E.plan) === "Free" && (null == P ? void 0 : P.commit.will_update_at) ? (0, r.jsxs)("div", {
                        className: "bg-brand/6 absolute right-0 bottom-[-50px] left-0 z-[-1] flex h-[62px] items-center justify-between gap-2 rounded-b-[12px] px-3 pt-3 text-center text-[12px] text-black/45",
                        role: "usage-status",
                        "aria-label": "Free plan usage information",
                        children: [(0, r.jsxs)("div", {
                            className: "flex min-w-0 flex-1 items-center gap-2",
                            children: [(0, r.jsx)(o.xsv, {
                                className: "text-brand h-4 w-4 flex-shrink-0",
                                "aria-hidden": "true"
                            }), (0, r.jsxs)("span", {
                                className: "text-left",
                                children: ["Monthly Free tasks: ", (0, r.jsx)("b", {
                                    children: "".concat(null == P ? void 0 : P.commit.free_count)
                                }), ", reset at", " ", (0, r.jsx)("b", {
                                    children: null == P ? void 0 : P.commit.will_update_at
                                }), ". Upgrade for more tasks."]
                            })]
                        }), (0, r.jsx)("button", {
                            className: "bg-brand hover:bg-brand/80 h-[26px] w-[67px] flex-shrink-0 cursor-pointer rounded-[8px] text-[12px] text-white",
                            onClick: () => {
                                (null == E ? void 0 : E.uid) && (x("sub_upgrade_click", {
                                    click_from: "home_page_input"
                                }), window.open("/subscription", "_blank"))
                            },
                            "aria-label": "Upgrade to premium plan",
                            type: "button",
                            children: "Upgrade"
                        })]
                    }) : null]
                })
            };
            var k = a(6058);
            let S = e => {
                    let t, a, r;
                    return e.includes("import React") || e.includes('from "react"') || e.includes("from 'react'") ? (t = new Blob([e], {
                        type: "application/typescript"
                    }), a = "index.tsx", r = "application/typescript") : (t = new Blob([e], {
                        type: "text/html"
                    }), a = "index.html", r = "text/html"), new File([t], a, {
                        type: r
                    })
                },
                P = e => {
                    let t = [".ds_store", ".git", ".gitignore", ".svn", ".idea", ".vscode", ".tmp", ".temp", ".bak", ".log", ".cache", ".swp"];
                    return e.filter(e => {
                        let a = (e.webkitRelativePath || e.name).split(/[\/\\]/);
                        for (let e of a)
                            if (e.startsWith(".")) return !1;
                        let r = a[a.length - 1];
                        for (let e of t)
                            if (r.toLowerCase().endsWith(e)) return !1;
                        return !0
                    })
                },
                C = async (e, t) => {
                    try {
                        let r = P(e);
                        if (r.length > 1e3) return {
                            error: "too_many_files"
                        };
                        if (0 === r.length || !r.some(e => "text/html" === e.type || e.name.endsWith(".tsx"))) return {
                            error: "invalid_content"
                        };
                        let l = r.some(e => e.name.endsWith(".tsx")),
                            s = new(await a.e(9311).then(a.t.bind(a, 59311, 23))).default;
                        for (let e of r) {
                            let t = e.webkitRelativePath || e.name,
                                a = await e.arrayBuffer();
                            s.file(t, a)
                        }
                        let n = await s.generateAsync({
                                type: "blob"
                            }),
                            i = new File([n], "source_code.zip", {
                                type: "application/zip"
                            });
                        if (n.size > 0x3200000 && !t) return {
                            error: "size_limit_exceeded"
                        };
                        if (!n) return {
                            error: "invalid_content"
                        };
                        return {
                            zipFile: i,
                            isTsx: l
                        }
                    } catch (e) {
                        return console.error("Error during file processing or zip creation:", e), {
                            error: "unknown_error"
                        }
                    }
                };
            var E = a(34326);
            let T = e => {
                let {
                    onUploadSuccess: t,
                    onProjectDeployed: a
                } = e, [l, n] = (0, s.useState)(""), [i, c] = (0, s.useState)(!1), [d, u] = (0, s.useState)(0), {
                    track: p,
                    trackGoogleAds: x
                } = (0, w.s)(), {
                    runPendingAction: f,
                    withAuth: v
                } = h(), b = async () => {
                    if (!l.trim()) {
                        (0, y.P)({
                            message: "Please enter some code first.",
                            type: "error"
                        });
                        return
                    }
                    v({
                        key: m.HtmlShip,
                        payload: l,
                        action: async () => {
                            g(l)
                        },
                        extraParams: {
                            tab: "paste"
                        }
                    })
                };
                (0, s.useEffect)(() => {
                    i || "" !== l || f(m.HtmlShip, async e => {
                        c(!0), n(e), g(e)
                    })
                }, [i]);
                let g = async e => {
                    c(!0), u(0);
                    try {
                        var r;
                        let l = setInterval(() => {
                                u(e => e >= 90 ? e : e + 10)
                            }, 200),
                            s = S(e),
                            {
                                zipFile: n,
                                error: i,
                                isTsx: o
                            } = await C([s]);
                        if (i || !n) {
                            clearInterval(l), c(!1), (0, y.P)({
                                message: {
                                    invalid_content: "Deployment error: The uploaded folder contains unsupported or invalid content.",
                                    size_limit_exceeded: "Upload failed: The folder exceeds the 10MB size limit.",
                                    unknown_error: "Error compressing or uploading files",
                                    too_many_files: "Upload failed: The folder contains too many files"
                                }[i || "invalid_content"],
                                type: "error"
                            });
                            return
                        }
                        x("conversion", {
                            send_to: "AW-16989287560/jnD3CJrv6ccaEIjpj6U_"
                        }), p("upload_click", {
                            file_type: o ? "tsx" : "html",
                            file_size: (n.size / 1048576).toFixed(2) + " MB"
                        });
                        let d = await (0, E.Q)(n, {
                                eventType: "source_code",
                                isPublic: !1,
                                needUrl: !1
                            }),
                            m = await (0, k.p)(d.file_id);
                        clearInterval(l), u(100), c(!1), p("deploy_success", {
                            project_url: null === (r = m.data) || void 0 === r ? void 0 : r.project_url,
                            file_type: o ? "tsx" : "html",
                            file_size: (n.size / 1048576).toFixed(2) + " MB"
                        }), m.data && (null == t || t(m.data), null == a || a(m.data.project_id))
                    } catch (e) {
                        console.error("Error during upload process:", e), c(!1), (0, y.P)({
                            message: "Upload failed. Please try again.",
                            type: "error"
                        })
                    }
                };
                return (0, r.jsxs)("div", {
                    className: "flex h-full w-full flex-col p-4",
                    children: [(0, r.jsx)("textarea", {
                        className: "h-full flex-1 resize-none border-none p-1 pb-4 text-[14px] text-black/95 placeholder:text-black/30 focus:outline-none",
                        value: l,
                        onChange: e => {
                            n(e.target.value)
                        },
                        placeholder: "Paste your HTML or TSX code here...",
                        disabled: i
                    }), (0, r.jsx)("div", {
                        className: "flex justify-end",
                        children: i ? (0, r.jsxs)("div", {
                            className: "bg-brand flex h-9 cursor-not-allowed items-center justify-center gap-2 rounded-[10px] px-2.5 text-[16px] text-white",
                            children: [(0, r.jsx)(o.xNY, {
                                className: "h-4 w-4 animate-spin text-white"
                            }), (0, r.jsxs)("span", {
                                children: ["Uploading ", d, "%"]
                            })]
                        }) : (0, r.jsx)("button", {
                            className: "bg-brand flex h-9 cursor-pointer items-center justify-center rounded-[10px] px-3 text-base text-white disabled:cursor-not-allowed disabled:bg-black/6 disabled:text-black/30",
                            onClick: b,
                            disabled: i || !l.trim(),
                            children: "Ship It"
                        })
                    })]
                })
            };
            var U = a(56289),
                R = a(40146);
            let z = e => {
                    let {
                        onUploadSuccess: t,
                        onProjectDeployed: a
                    } = e, [l, i] = (0, s.useState)(!1), [c, d] = (0, s.useState)(0), {
                        runPendingAction: u,
                        withAuth: p
                    } = h(), {
                        track: x,
                        trackGoogleAds: f
                    } = (0, w.s)(), {
                        user: v
                    } = (0, n.A)(), b = async e => {
                        i(!0), d(0);
                        try {
                            var r, l;
                            let s = setInterval(() => {
                                    d(e => e >= 90 ? e : e + 10)
                                }, 200),
                                {
                                    zipFile: n,
                                    error: o,
                                    isTsx: c = !1
                                } = await C(e, (null == v ? void 0 : v.role) === "admin" || (null == v ? void 0 : v.role) === "employee");
                            if (o || !n) {
                                clearInterval(s), i(!1), (0, y.P)({
                                    message: {
                                        invalid_content: "Deployment error: The uploaded folder contains unsupported or invalid content.",
                                        size_limit_exceeded: "Upload failed: The folder exceeds the 10MB size limit.",
                                        too_many_files: "Upload failed: The folder contains too many files",
                                        unknown_error: "Error compressing or uploading files"
                                    }[o || "invalid_content"],
                                    type: "error"
                                });
                                return
                            }
                            f("conversion", {
                                send_to: "AW-16989287560/jnD3CJrv6ccaEIjpj6U_"
                            }), x("upload_click", {
                                file_type: c ? "tsx" : "html",
                                file_size: (n.size / 1048576).toFixed(2) + " MB"
                            });
                            let u = await (0, E.Q)(n, {
                                    eventType: "source_code",
                                    isPublic: !1,
                                    needUrl: !1
                                }),
                                p = await (0, k.p)(u.file_id);
                            clearInterval(s), d(100), i(!1), 0 === p.code && (null === (r = p.data) || void 0 === r ? void 0 : r.project_id) ? (x("deploy_success", {
                                project_url: null === (l = p.data) || void 0 === l ? void 0 : l.project_url,
                                file_type: c ? "tsx" : "html",
                                file_size: (n.size / 1048576).toFixed(2) + " MB"
                            }), null == t || t(p.data), null == a || a(p.data.project_id)) : (0, y.P)({
                                message: "Error uploading files",
                                type: "error"
                            })
                        } catch (e) {
                            console.error("Error during upload process:", e), i(!1), (0, y.P)({
                                message: "Error uploading files",
                                type: "error"
                            })
                        }
                    }, {
                        UploadInput: g,
                        handlePlusClick: j
                    } = (0, R.A)({
                        options: {
                            allowedExtensions: [".html", ".tsx", ".jsx"],
                            maxAttachments: 1
                        },
                        onFilesReceived: async e => {
                            await b(e)
                        }
                    }), {
                        UploadInput: _,
                        handlePlusClick: N
                    } = (0, R.A)({
                        options: {},
                        onFilesReceived: async e => {
                            await b(e)
                        }
                    }), {
                        handleDragLeave: S,
                        handleDragOver: P,
                        handleDrop: T,
                        DragOverlay: z
                    } = (0, U.A)({
                        onFilesReceived: async e => {
                            await b(e)
                        }
                    }), I = (e, t) => {
                        p({
                            key: m.HomeUpload,
                            payload: {},
                            extraParams: {
                                tab: "upload"
                            },
                            action: e,
                            reject: t
                        })
                    };
                    return (0, s.useEffect)(() => {
                        u(m.HomeUpload, async () => {})
                    }, []), (0, r.jsxs)("div", {
                        className: "relative h-full max-h-[360px] w-full overflow-hidden rounded-[20px] p-3 text-center transition-all duration-300",
                        onDragLeave: S,
                        onDragOver: P,
                        onDrop: e => {
                            e.preventDefault(), e.stopPropagation(), I(async () => {
                                T(e)
                            }, () => {
                                e.preventDefault(), e.stopPropagation()
                            })
                        },
                        id: "upload-file-tab",
                        children: [(0, r.jsx)(z, {}), (0, r.jsx)(g, {}), (0, r.jsx)(_, {
                            webkitdirectory: "true",
                            directory: ""
                        }), (0, r.jsxs)("div", {
                            className: "relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 rounded-[10px] border border-dashed border-black/12 p-2",
                            children: [(0, r.jsxs)("div", {
                                className: "flex flex-col items-center justify-center gap-2",
                                children: [(0, r.jsx)("h2", {
                                    className: "text-[20px] leading-[20px] text-black/95",
                                    children: "Drag & Drop Your Creation"
                                }), (0, r.jsx)("p", {
                                    className: "text-[14px] text-black/65",
                                    children: "HTML or TSX file｜Folder with HTML, CSS, and JS files (＜10 MB)"
                                })]
                            }), (0, r.jsx)("div", {
                                className: "max-xs:flex-col max-xs:gap-2 flex flex-row gap-4",
                                children: l ? (0, r.jsxs)("div", {
                                    className: "flex h-9 w-[164px] items-center justify-center gap-2 rounded-[10px] bg-black/3 text-black/95",
                                    children: [(0, r.jsx)(o.xNY, {
                                        className: "h-4 w-4 animate-spin text-black/95"
                                    }), (0, r.jsxs)("span", {
                                        className: "text-[14px]",
                                        children: ["Uploading ", c, "%"]
                                    })]
                                }) : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsxs)("button", {
                                        onClick: () => {
                                            I(async () => {
                                                await j()
                                            })
                                        },
                                        className: "flex h-9 w-40 cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-black/3 text-black/65 hover:border-black/3 hover:bg-white hover:shadow-[0_8px_16px_1px_rgba(0,0,0,0.1)]",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-[14px]",
                                            children: "Select File"
                                        }), (0, r.jsx)(o.gxh, {
                                            className: "h-4 w-4"
                                        })]
                                    }), (0, r.jsxs)("button", {
                                        onClick: () => {
                                            I(async () => {
                                                await N()
                                            })
                                        },
                                        className: "flex h-9 w-40 cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-black/3 text-black/65 hover:border-black/3 hover:bg-white hover:shadow-[0_8px_16px_1px_rgba(0,0,0,0.1)]",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-[14px]",
                                            children: "Select Folder"
                                        }), (0, r.jsx)(o.iH0, {
                                            className: "h-4 w-4"
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                },
                I = e => {
                    let {
                        tabs: t,
                        selectedTab: a,
                        onSelect: l,
                        className: s
                    } = e;
                    return (0, r.jsx)("div", {
                        className: (0, i.cn)("flex flex-row items-center justify-start rounded-xl bg-black/3 p-0.5", s),
                        children: t.map((e, s) => (0, r.jsxs)("div", {
                            className: "flex flex-row items-center",
                            children: [(0, r.jsx)("button", {
                                onClick: () => l(e.value),
                                className: (0, i.cn)("flex h-9 w-26 cursor-pointer items-center justify-center rounded-[10px] text-[14px] text-black/45 sm:w-37", a === e.value && "bg-brand text-white"),
                                children: e.label
                            }, e.value), s !== t.length - 1 && (0, r.jsx)("div", {
                                className: "mx-1 h-5 w-[1px] bg-black/12"
                            })]
                        }, e.value))
                    })
                },
                A = () => {
                    let e = (0, l.useSearchParams)().get("tab"),
                        [t, a] = (0, s.useState)(null != e ? e : "create"),
                        o = (0, l.useRouter)(),
                        {
                            user: c
                        } = (0, n.A)();
                    (0, s.useEffect)(() => {
                        if (e) {
                            let e = new URL(window.location.href);
                            e.searchParams.delete("tab"), window.history.replaceState({}, "", e.toString())
                        }
                    }, []);
                    let d = e => {
                            o.push("/ready?id=".concat(e.project_id, "&url=").concat(e.project_url, "&iframe_url=").concat(e.iframe_url))
                        },
                        u = e => {
                            if (!(null == c ? void 0 : c.uid)) {
                                let t = JSON.parse(localStorage.getItem("Anonymous_Projects") || "[]");
                                localStorage.setItem("Anonymous_Projects", JSON.stringify([...t, e]))
                            }
                        },
                        p = (e, t) => (0, r.jsx)("div", {
                            className: (0, i.cn)("flex h-full w-full flex-col items-center justify-center", !e && "hidden"),
                            children: t
                        }),
                        x = [{
                            label: "Create",
                            value: "create"
                        }, {
                            label: "Upload",
                            value: "upload"
                        }, {
                            label: "Paste Code",
                            value: "paste"
                        }].filter(e => void 0 !== e);
                    return (0, r.jsxs)("div", {
                        className: "flex h-[calc(100vh-440px)] max-h-[800px] min-h-[600px] w-full flex-col items-center justify-center px-5",
                        children: [(0, r.jsxs)("div", {
                            className: "mx-auto mt-10 mb-6 max-w-screen-lg px-4 text-center sm:mt-16 sm:mb-8 md:mt-20 md:mb-10",
                            children: [(0, r.jsx)("h1", {
                                className: "text-[36px] text-black/95 md:text-[48px]",
                                children: "Not YouTube, it's YouWare."
                            }), (0, r.jsxs)("h2", {
                                className: "mx-auto max-w-[300px] px-2 text-[14px] text-black/65 sm:max-w-none",
                                children: [(0, r.jsx)("span", {
                                    className: "font-bold",
                                    children: "Finally, "
                                }), "your computer speaks", " ", (0, r.jsx)("span", {
                                    className: "font-bold italic",
                                    children: "your language."
                                })]
                            })]
                        }), (0, r.jsx)(I, {
                            tabs: x,
                            selectedTab: t,
                            onSelect: e => a(e),
                            className: "mb-6"
                        }), (0, r.jsx)("div", {
                            className: "flex h-60 w-full max-w-[1280px] flex-col items-center justify-center rounded-[20px] bg-white md:w-4/5 xl:w-3/5 xl:p-0 2xl:w-1/2",
                            children: (0, r.jsx)("div", {
                                className: "relative flex h-full w-full flex-1",
                                children: (0, r.jsxs)("div", {
                                    className: "relative flex h-full w-full flex-col",
                                    children: [p("create" === t, (0, r.jsx)(N, {})), p("upload" === t, (0, r.jsx)(z, {
                                        onUploadSuccess: d,
                                        onProjectDeployed: u
                                    })), p("paste" === t, (0, r.jsx)(T, {
                                        onUploadSuccess: d,
                                        onProjectDeployed: u
                                    }))]
                                })
                            })
                        })]
                    })
                }
        }
    }
]);