try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b232b72e-3046-443e-88df-09e7ebbb08af", e._sentryDebugIdIdentifier = "sentry-dbid-b232b72e-3046-443e-88df-09e7ebbb08af")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9144], {
        565: (e, t, r) => {
            "use strict";
            r.d(t, {
                i: () => l
            });
            let a = null,
                l = () => a ? Promise.resolve(a) : new Promise(e => {
                    if (!window.collectEvent) {
                        e("");
                        return
                    }
                    try {
                        window.collectEvent("getToken", t => {
                            t && t.ssid ? (a = t.ssid, e(t.ssid)) : e("")
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
            var a = r(34477);
            let l = (0, a.createServerReference)("40765cd84cf16f0018a5e81b1c99cc16ea5026c8eb", a.callServer, void 0, a.findSourceMapURL, "checkSlugPrefix")
        },
        23468: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 37393)), Promise.resolve().then(r.bind(r, 59710))
        },
        37393: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => G
            });
            var a = r(95155),
                l = r(25427),
                n = r(12115),
                s = r(34477);
            let i = (0, s.createServerReference)("00d71391d50ce27f03455e2defa45bbe120e1b641a", s.callServer, void 0, s.findSourceMapURL, "syncClientIdToCookie"),
                o = (0, s.createServerReference)("70c5e629d912d70fed32c3bdeeb5f5ba6f9d082416", s.callServer, void 0, s.findSourceMapURL, "reportStatsProjectIncr"),
                c = (0, s.createServerReference)("40a9f7c9d3c0b1b945836e6893d81fdc8a1469fc19", s.callServer, void 0, s.findSourceMapURL, "viewProject"),
                d = (0, s.createServerReference)("4037e9359e23e076c01b13490264781ecb81aedda8", s.callServer, void 0, s.findSourceMapURL, "getReportReasonsAction"),
                u = (0, s.createServerReference)("40aa21cf61c520239e7a40ce3834dc538e8fe36dd5", s.callServer, void 0, s.findSourceMapURL, "postReportAction");
            var p = r(56389),
                x = r(48436),
                f = r(26846);
            let m = {
                    project: "Why are you reporting this project?"
                },
                h = e => {
                    let {
                        contentId: t,
                        subjectType: r,
                        onClose: s,
                        trackExtra: i
                    } = e, [o, c] = (0, n.useState)([]), [h, v] = (0, n.useState)(null), [b, j] = (0, n.useState)(""), [w, g] = (0, n.useState)(!1), [y, _] = (0, n.useState)(!0), {
                        track: N
                    } = (0, p.s)();
                    (0, n.useEffect)(() => {
                        (async () => {
                            _(!0);
                            let e = await d({
                                entity_type: r
                            });
                            0 === e.code && e.data ? c(e.data.reasons) : (0, x.P)({
                                message: "Get report reasons failed, please try again later",
                                type: "error"
                            }), _(!1)
                        })()
                    }, []);
                    let k = async e => {
                            let {
                                reason: a,
                                details: l
                            } = e;
                            N("report_submit_click", { ...i,
                                report_reason: (null == h ? void 0 : h.reason) === "other" ? b : a
                            }), g(!0);
                            let n = await u({
                                entity_type: r,
                                entity_id: t,
                                reason: a,
                                details: l
                            });
                            g(!1), 0 === n.code && n.data ? (s(), (0, x.P)({
                                message: "Thanks for reporting. We’ll review this as soon as possible.",
                                type: "success"
                            })) : (0, x.P)({
                                message: "Report failed, please try again later",
                                type: "error"
                            })
                        },
                        S = !y && !w && h;
                    return (0, a.jsx)("div", {
                        className: "fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/20",
                        onClick: e => {
                            !w && e.target === e.currentTarget && s()
                        },
                        children: (0, a.jsxs)("div", {
                            className: "flex w-[512px] max-w-[calc(100vw-32px)] flex-col gap-3 rounded-[16px] bg-white p-6 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.10),0px_16px_32px_-1px_rgba(12,12,13,0.1)]",
                            children: [(0, a.jsx)("h3", {
                                className: "text-[20px] font-bold",
                                children: m[r]
                            }), (0, a.jsx)("div", {
                                className: "flex w-full flex-col gap-1",
                                children: y ? (0, a.jsx)(a.Fragment, {
                                    children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsxs)("div", {
                                        className: "flex h-8 items-center gap-2",
                                        children: [(0, a.jsx)("div", {
                                            className: "h-4 w-4 animate-pulse rounded-full bg-gray-200"
                                        }), (0, a.jsx)("div", {
                                            className: "h-4 flex-1 animate-pulse rounded bg-gray-200"
                                        })]
                                    }, t))
                                }) : (0, a.jsxs)(a.Fragment, {
                                    children: [o.map(e => (0, a.jsxs)("div", {
                                        className: "flex h-8 cursor-pointer items-center gap-2",
                                        onClick: () => v(e),
                                        children: [(0, a.jsx)("div", {
                                            className: (0, f.cn)("hover:bg-brand/10 flex h-4 w-4 items-center justify-center rounded-full border border-solid border-black/12 p-[1px] transition-colors", (null == h ? void 0 : h.reason) === e.reason && "border-brand"),
                                            children: (0, a.jsx)("div", {
                                                className: (0, f.cn)("h-1.5 w-1.5 rounded-full bg-transparent", (null == h ? void 0 : h.reason) === e.reason && "bg-brand")
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "flex-1 pt-0.5 text-[14px] text-black/95",
                                            children: e.description
                                        })]
                                    }, e.reason)), (null == h ? void 0 : h.reason) === "other" && (0, a.jsx)("input", {
                                        type: "text",
                                        className: "h-8 rounded-[10px] border border-solid border-black/12 px-2 text-[14px] text-black/95 placeholder:text-black/30",
                                        value: b,
                                        onChange: e => j(e.target.value),
                                        placeholder: "Enter reason"
                                    })]
                                })
                            }), (0, a.jsxs)("div", {
                                className: "mt-3 flex items-center justify-end gap-2",
                                children: [(0, a.jsx)("button", {
                                    className: "h-9 w-[75px] cursor-pointer rounded-[10px] border border-solid border-black/12 text-[14px] text-black/95 hover:bg-black/6",
                                    onClick: s,
                                    disabled: w,
                                    children: "Cancel"
                                }), (0, a.jsx)("button", {
                                    className: (0, f.cn)("bg-brand flex h-9 w-[134px] cursor-pointer items-center justify-center rounded-[10px] text-[14px] text-white disabled:opacity-50", S && "hover:bg-brand/85"),
                                    onClick: () => {
                                        h && k({
                                            reason: h.reason,
                                            details: "other" === h.reason ? b : void 0
                                        })
                                    },
                                    disabled: !S,
                                    children: w ? (0, a.jsx)(l.rbo, {
                                        className: "h-4 w-4 animate-spin"
                                    }) : "Submit Report"
                                })]
                            })]
                        })
                    })
                };
            var v = r(565),
                b = r(9962),
                j = r(35695),
                w = r(17928),
                g = r(53030),
                y = r(42919),
                _ = r(1021),
                N = r(70165),
                k = r(60750),
                S = r(80191),
                E = r(4821),
                C = r(66139),
                R = r(61884);

            function P(e) {
                var t;
                let {
                    project: r,
                    handleFullScreen: s,
                    handleReport: i,
                    onUpdate: o,
                    onRoll: c,
                    rolling: d
                } = e, {
                    emojis: u,
                    registerInteractionCallback: x,
                    interact: m
                } = (0, k.k)(), [h, v] = (0, n.useState)(null), [b, P] = (0, n.useState)(!1), {
                    track: T
                } = (0, p.s)(), L = (0, j.useRouter)(), {
                    remixAction: M,
                    isRemixing: I
                } = (0, S.N)(), D = (null === (t = r.user) || void 0 === t ? void 0 : t.uid) === N.v1;
                (0, n.useEffect)(() => {
                    L.prefetch((0, C.$)())
                }, []), (0, n.useEffect)(() => {
                    x(r.project_id, (e, t) => {
                        o(r, t)
                    })
                }, [r.project_id, x]), (0, n.useEffect)(() => {
                    b && v(window.innerWidth <= 440)
                }, [b]), (0, n.useEffect)(() => {
                    P(!0)
                }, []);
                let F = e => {
                        var t, a, l, n;
                        let s = null === (a = r.interaction) || void 0 === a ? void 0 : null === (t = a.status.find(t => t.interaction_type === e)) || void 0 === t ? void 0 : t.status;
                        m(r, e, s ? w.f.Cancel : w.f.Add), T("emoji_reaction_click", {
                            action: s ? "false" : "true",
                            project_url: r.project_url,
                            emoji: e,
                            location: "app_page",
                            count: ((null === (n = r.interaction) || void 0 === n ? void 0 : null === (l = n.count.find(t => t.interaction_type === e)) || void 0 === l ? void 0 : l.count) || 0) + (s ? -1 : 1)
                        })
                    },
                    z = (0, n.useCallback)(async () => {
                        if (!r.allow_remix) {
                            (0, E.S)({
                                title: "Remix Not Supported",
                                description: "This project doesn't allow remixing",
                                confirmText: "Got it",
                                onConfirm: () => {}
                            });
                            return
                        }
                        T("remix_button_click", {
                            origin_project_url: r.project_url,
                            remix_count: r.remix_count,
                            location: "project_page",
                            access_control: r.allow_remix ? "allowed" : "not_allowed"
                        }), await M(r.project_id, "remix")
                    }, [M]),
                    A = () => (0, a.jsx)("div", {
                        className: "h-[16px] w-[1px] bg-black/6"
                    });
                return b && null !== h ? (0, a.jsxs)("div", {
                    className: (0, f.cn)("bg-body flex h-12 w-full max-w-full flex-row items-center justify-between gap-4 overflow-visible px-4", h && "h-[72px] border-t border-black/6"),
                    children: [(0, a.jsxs)("div", {
                        id: "left-container",
                        className: "flex flex-1 shrink-0 flex-row items-center gap-2",
                        children: [(0, a.jsxs)("a", {
                            id: "logo-container",
                            className: "flex cursor-pointer flex-row items-center gap-1",
                            onClick: () => {
                                T("app_watermark_button_click", {
                                    project_url: r.project_url
                                }), L.push((0, C.$)())
                            },
                            children: [(0, a.jsx)("img", {
                                src: "/icons/logo.svg",
                                alt: "Logo",
                                className: "text-brand h-6 w-6"
                            }), (0, a.jsx)("div", {
                                className: "text-base leading-5 text-black/95 max-[400px]:hidden",
                                children: "YouWare"
                            })]
                        }), !D && !h && A(), !D && !h && (() => {
                            var e, t;
                            let l = (0, C.$)();
                            return (0, a.jsxs)("div", {
                                id: "user-container",
                                className: "flex cursor-pointer flex-row items-center gap-2",
                                onClick: () => {
                                    var e;
                                    L.push("".concat(l, "/profile/").concat(null === (e = r.user) || void 0 === e ? void 0 : e.uid)), T("app_creator_info_click", {
                                        project_url: r.project_url
                                    })
                                },
                                children: [(0, a.jsx)("img", {
                                    src: (null === (e = r.user) || void 0 === e ? void 0 : e.photo_url) || "/images/avatar.svg",
                                    alt: "",
                                    className: "h-5 w-5 rounded-full bg-gray-200 object-cover"
                                }), !h && (0, a.jsx)("div", {
                                    className: "text-xs font-medium text-black/95",
                                    children: null === (t = r.user) || void 0 === t ? void 0 : t.display_name
                                })]
                            })
                        })()]
                    }), (0, a.jsx)("div", {
                        className: (0, f.cn)("hover:bg-brand border-brand text-brand absolute left-1/2 z-10 flex h-[36px] w-[86px] -translate-x-1/2 transform cursor-pointer items-center justify-center rounded-[12px] border hover:text-white", d && "bg-brand text-white", h && "bg-brand h-[48px] w-[96px] rounded-[16px] border-none text-white shadow-[0px_8px_20px_0px_rgba(55,67,45,0.30)] active:bg-[#44503B] active:shadow-none"),
                        onClick: () => {
                            c(r)
                        },
                        children: (0, a.jsx)("div", {
                            className: "flex items-center gap-1",
                            children: d ? (0, a.jsx)(_.A, {
                                style: {
                                    width: h ? "28px" : "20px",
                                    height: h ? "28px" : "20px"
                                },
                                animationPath: "/animations/lottie-roll-project.json"
                            }) : (0, a.jsx)(l.OB8, {
                                className: (0, f.cn)("h-5 w-5", h && "h-[28px] w-[28px]")
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        className: "flex min-w-0 flex-1 items-center justify-end gap-2",
                        children: [!D && (0, a.jsxs)("div", {
                            className: "ml-auto flex shrink-0 items-center gap-2",
                            children: [(0, a.jsxs)("div", {
                                id: "view-count-container",
                                className: "flex flex-row items-center gap-1",
                                children: [(0, a.jsx)(l.tLq, {
                                    className: (0, f.cn)("h-3 w-3 text-black/30", h && "h-4 w-4")
                                }), (0, a.jsx)("div", {
                                    id: "view-count-text",
                                    className: (0, f.cn)("text-xs font-medium tracking-tighter text-black/30", h && "text-[14px]"),
                                    children: (0, R.Z)(r.view_count || 0)
                                })]
                            }), !h && A()]
                        }), !D && !h && (0, a.jsx)("div", {
                            className: "min-w-0",
                            children: (() => {
                                var e, t;
                                let l = (null === (e = r.interaction) || void 0 === e ? void 0 : e.count.filter(e => e.count > 0)) || [];
                                return (0, a.jsx)("div", {
                                    id: "emoji-container",
                                    className: "relative flex flex-row items-center",
                                    children: (0, a.jsx)(y.d, {
                                        className: "w-full min-w-0 items-center",
                                        emojiCounts: l,
                                        emojiStatuses: (null === (t = r.interaction) || void 0 === t ? void 0 : t.status) || [],
                                        scrollable: !0,
                                        showAddButton: (null == l ? void 0 : l.length) != u.length,
                                        pickerClassName: "top-[-50px] right-[-8px]",
                                        fromMask: "from-[#f6f4f1]",
                                        onEmojiClick: e => {
                                            F(e)
                                        }
                                    })
                                })
                            })()
                        }), !h && (0, a.jsxs)("div", {
                            className: "flex shrink-0 items-center gap-2",
                            children: [!D && A(), !D && (0, a.jsx)("button", {
                                className: (0, f.cn)("flex h-8 w-8 cursor-pointer flex-row items-center justify-center rounded-[10px] border border-black/6 text-black/95 hover:border-none hover:bg-black/6", !r.allow_remix && "opacity-30 hover:opacity-30"),
                                onClick: z,
                                disabled: I,
                                children: I ? (0, a.jsx)(l.xNY, {
                                    className: "h-4 w-4 animate-spin text-black/95"
                                }) : (0, a.jsx)(l.xP3, {
                                    className: "h-4 w-4 text-black/95"
                                })
                            }), (0, a.jsxs)(g.rI, {
                                triggerType: "hover",
                                children: [(0, a.jsx)(g.ty, {
                                    className: "flex h-8 w-8 cursor-pointer items-center justify-center rounded-[10px] border border-black/6 hover:border-none hover:bg-black/6",
                                    children: (0, a.jsx)(l.aWm, {
                                        className: "h-[14px] w-[14px]",
                                        color: "black"
                                    })
                                }), (0, a.jsxs)(g.SQ, {
                                    className: "right-0 bottom-8 w-[148px]",
                                    children: [(0, a.jsx)(g._2, {
                                        icon: l.nHt,
                                        label: "Full Screen",
                                        onClick: s
                                    }), (0, a.jsx)(g._2, {
                                        icon: l.qGO,
                                        label: "Report",
                                        onClick: i
                                    })]
                                })]
                            })]
                        })]
                    })]
                }) : (0, a.jsx)("div", {
                    className: (0, f.cn)("flex h-12 w-full max-w-full flex-row items-center justify-between gap-4 px-4", h && "px-6")
                })
            }

            function T(e) {
                let {
                    isPlaying: t
                } = e;
                return t ? (0, a.jsx)("div", {
                    className: "absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-black",
                    children: (0, a.jsx)(_.A, {
                        animationPath: "/animations/lottie-roll-project-mask.json",
                        className: "aspect-square h-[70%] items-center justify-center opacity-30",
                        style: {
                            pointerEvents: "none"
                        }
                    })
                }) : null
            }
            let L = ({
                interval: e
            }, t) => {
                let r, a = !0,
                    l = (...l) => {
                        a && (t(...l), a = !1, r = setTimeout(() => {
                            a = !0, r = void 0
                        }, e))
                    };
                return l.isThrottled = () => void 0 !== r, l
            };
            var M = r(47835),
                I = r(52343);

            function D(e) {
                let {
                    subdomain: t,
                    onVerificationSuccess: r
                } = e, [s, i] = (0, n.useState)(["", "", "", ""]), [o, c] = (0, n.useState)("idle"), [d, u] = (0, n.useState)(""), {
                    track: x
                } = (0, p.s)();
                (0, n.useEffect)(() => {
                    x("verify_passcode_page_show", {
                        project_url: window.location.pathname
                    })
                }, []);
                let f = (0, n.useRef)([]);
                (0, n.useEffect)(() => {
                    f.current[0] && f.current[0].focus()
                }, []);
                let m = (e, t) => {
                        if ("Backspace" === e.key && !s[t] && t > 0) {
                            var r;
                            null === (r = f.current[t - 1]) || void 0 === r || r.focus()
                        }
                    },
                    h = L({
                        interval: 200
                    }, (e, t) => {
                        let r = e.target.value.slice(-1);
                        if ("" === r || /^[0-9a-zA-Z]$/.test(r)) {
                            let e = [...s];
                            if (e[t] = r, i(e), "" !== r && t < 3) {
                                var a;
                                null === (a = f.current[t + 1]) || void 0 === a || a.focus()
                            }
                            "" !== r && 3 === t && e.every(e => "" !== e) && b(e.join(""))
                        }
                    }),
                    v = e => {
                        e.preventDefault();
                        let t = e.clipboardData.getData("text");
                        if (/^[0-9a-zA-Z]+$/.test(t)) {
                            var r, a;
                            let e = t.split(""),
                                l = [...s];
                            for (let t = 0; t < Math.min(4, e.length); t++) l[t] = e[t];
                            if (i(l), l.every(e => "" !== e)) null === (r = f.current[3]) || void 0 === r || r.focus(), b(l.join(""));
                            else {
                                let e = l.findIndex(e => "" === e); - 1 !== e && (null === (a = f.current[e]) || void 0 === a || a.focus())
                            }
                        }
                    },
                    b = async e => {
                        c("pending");
                        try {
                            let a = await (0, M.a)(t, e);
                            (null == a ? void 0 : a.verified) && (null == a ? void 0 : a.iframe_url) ? (c("success"), x("verify_passcode_success", {
                                project_url: window.location.pathname
                            }), r(null == a ? void 0 : a.iframe_url)) : (c("error"), u("Code mismatch - verify with the owner"))
                        } catch (e) {
                            c("error"), u("Verification failed. Please try again.")
                        }
                    };
                return (0, a.jsxs)("div", {
                    className: "min-h-screen",
                    children: [(0, a.jsx)(I.default, {}), (0, a.jsxs)("div", {
                        className: "flex min-h-[calc(100vh-64px)] flex-col items-center justify-center pb-[15vh]",
                        children: [(0, a.jsx)("h1", {
                            className: "font-montserrat text-transform-capitalize mb-3 text-[40px] leading-[40px] font-medium",
                            children: "Locked Project"
                        }), (0, a.jsx)("p", {
                            className: "",
                            children: "A password is required to view this creation"
                        }), (0, a.jsx)("div", {
                            className: "my-12 flex justify-center space-x-4",
                            children: s.map((e, t) => (0, a.jsx)("input", {
                                ref: e => {
                                    f.current[t] = e
                                },
                                type: "text",
                                inputMode: "text",
                                autoComplete: "off",
                                maxLength: 1,
                                value: e,
                                onChange: e => h(e, t),
                                onKeyDown: e => m(e, t),
                                onPaste: 0 === t ? v : void 0,
                                className: "h-24 w-18 rounded-[20px] border-none text-center text-[40px] font-medium [box-shadow:12.171px_4.868px_65.722px_0px_rgba(0,0,0,0.09)] transition-all focus:outline-black",
                                disabled: "pending" === o
                            }, t))
                        }), (0, a.jsxs)("div", {
                            className: "h-6 w-auto",
                            children: ["pending" === o && (0, a.jsxs)("div", {
                                className: "flex items-center justify-center gap-2",
                                children: [(0, a.jsx)(l.xNY, {
                                    className: "h-6 w-6 animate-spin"
                                }), (0, a.jsx)("p", {
                                    className: "text-center",
                                    children: "Verifying..."
                                })]
                            }), "success" === o && (0, a.jsx)("p", {
                                className: "text-center text-green-600",
                                children: "✨ Access granted!"
                            }), "error" === o && (0, a.jsx)("p", {
                                className: "text-center text-[#E60023]",
                                children: d
                            })]
                        })]
                    })]
                })
            }
            var F = r(707);
            let z = e => ({
                    urlTitle: e.split("-").slice(0, -1).join("-"),
                    urlHash: e.split("-").pop() || ""
                }),
                A = () => {
                    let e = window.location.pathname;
                    return e.includes("/project/") ? z(e.split("/").pop() || "").urlTitle : ""
                },
                U = (0, s.createServerReference)("6094db7d95bc817cbd363649e3519d549850b71da8", s.callServer, void 0, s.findSourceMapURL, "getRandomSelectedProjects"),
                O = "viewed_projects",
                W = () => {
                    try {
                        let e = localStorage.getItem(O);
                        if (!e) return [];
                        let t = JSON.parse(e),
                            r = Date.now();
                        return t.filter(e => r - e.timestamp < 36e5).map(e => e.id)
                    } catch (e) {
                        return console.error("Error getting viewed projects:", e), []
                    }
                },
                $ = e => {
                    if (e) try {
                        let t = localStorage.getItem(O),
                            r = t ? JSON.parse(t) : [],
                            a = Date.now(),
                            l = r.filter(e => a - e.timestamp < 36e5),
                            n = l.findIndex(t => t.id === e);
                        n >= 0 ? l[n].timestamp = a : l.push({
                            id: e,
                            timestamp: a
                        }), localStorage.setItem(O, JSON.stringify(l))
                    } catch (e) {
                        console.error("Error saving viewed project:", e)
                    }
                };
            var q = r(89003);
            let B = () => {
                let [e, t] = (0, n.useState)(!1), {
                    checkAuth: r
                } = (0, q.M)(), a = async () => {
                    await r(async () => {
                        t(!0)
                    }, {
                        title: "Want to report this project?",
                        description: "Please log in to help keep the community safe.",
                        cancelText: "Cancel",
                        confirmText: "Log in"
                    })()
                };
                return {
                    showReportModal: e,
                    setShowReportModal: t,
                    handleReport: a
                }
            };

            function G(e) {
                let {
                    projectViewDetail: t,
                    urlHash: r,
                    screenStatus: s,
                    enterFrom: d
                } = e, u = (0, n.useRef)(null), [x, m] = (0, n.useState)(d), [j, w] = (0, n.useState)(t.iframe_url), [g, y] = (0, n.useState)(t.need_passcode && !t.iframe_url), {
                    track: _
                } = (0, p.s)(), {
                    showReportModal: N,
                    setShowReportModal: k,
                    handleReport: S
                } = B(), {
                    isFullScreen: E,
                    handleFullScreen: C,
                    disableExitFullScreen: R
                } = function() {
                    let {
                        initialState: e = !1,
                        forceFullScreen: t = !1
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [r, a] = (0, n.useState)(e);
                    return (0, n.useEffect)(() => {
                        let e = e => {
                            "Escape" === e.key && r && !t && a(!1)
                        };
                        return window.addEventListener("keydown", e), () => {
                            window.removeEventListener("keydown", e)
                        }
                    }, [r, t]), {
                        isFullScreen: r,
                        setIsFullScreen: a,
                        handleFullScreen: () => {
                            t || a(!r)
                        },
                        disableExitFullScreen: t
                    }
                }({
                    initialState: "force_full" === s || "default_full" === s,
                    forceFullScreen: "force_full" === s
                }), {
                    rolling: L,
                    project: M,
                    handleRoll: I,
                    handleFinishRoll: z,
                    setProject: O
                } = function(e) {
                    let {
                        initialProject: t,
                        isLoading: r = !1,
                        onProjectChange: a,
                        onUrlChange: l
                    } = e, [s, i] = (0, n.useState)(!1), [o, c] = (0, n.useState)(0), [d, u] = (0, n.useState)(t), {
                        track: x
                    } = (0, p.s)(), f = (0, n.useRef)(null);
                    (0, n.useEffect)(() => () => {
                        f.current && clearTimeout(f.current)
                    }, []);
                    let m = async () => {
                        if (s || r) return;
                        i(!0), c(Date.now()), f.current && clearTimeout(f.current), f.current = setTimeout(() => {
                            console.log("roll timeout (including API and iframe load), auto stop"), i(!1)
                        }, 5e3);
                        let e = W();
                        x("app_page_random_button_click", {
                            project_url: d.project_url
                        });
                        let t = await U(e);
                        if (!f.current) {
                            console.log("API request completed but timeout already occurred");
                            return
                        }
                        if (t.data && t.data.projects.length > 0) {
                            let e = t.data.projects[0],
                                r = { ...e,
                                    need_passcode: !1
                                };
                            u(r), a && a(r), l && e.iframe_url && l(e.iframe_url), e.project_id && $(e.project_id)
                        } else i(!1), f.current && (clearTimeout(f.current), f.current = null)
                    };
                    return {
                        rolling: s,
                        project: d,
                        handleRoll: m,
                        handleFinishRoll: () => {
                            let e = Date.now() - o;
                            if (f.current && (clearTimeout(f.current), f.current = null), !d.project_url) {
                                i(!1), c(0);
                                return
                            }
                            let t = d.project_url;
                            e > 1e3 ? (i(!1), window.history.pushState({}, "", t)) : setTimeout(() => {
                                i(!1), window.history.pushState({}, "", t)
                            }, 1e3 - e), c(0)
                        },
                        setProject: u
                    }
                }({
                    initialProject: t,
                    isLoading: g,
                    onProjectChange: e => {
                        m("random_button")
                    },
                    onUrlChange: e => {
                        w(e)
                    }
                });
                return ((0, n.useEffect)(() => {
                    let e = async () => {
                        let e = await c(r);
                        w((null == e ? void 0 : e.iframe_url) || ""), y(!1)
                    };
                    t.need_passcode && !t.iframe_url && e()
                }, [t.need_passcode, t.iframe_url]), ! function(e) {
                    let {
                        projectUrl: t
                    } = e;
                    (0, n.useEffect)(() => {
                        if (t && location.pathname === t) return;
                        let e = A();
                        if (!e) {
                            window.history.replaceState(null, "", t);
                            return
                        }(0, F.S)(e).then(e => {
                            var r;
                            (null == e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : r.is_valid) ? window.history.replaceState(null, "", t): window.location.href = "/404"
                        }).catch(e => {
                            window.history.replaceState(null, "", t)
                        })
                    }, [])
                }({
                    projectUrl: t.project_url
                }), (0, n.useEffect)(() => {
                    j && (_("app_page_view", {
                        project_url: (null == M ? void 0 : M.project_url) || t.project_url,
                        enter_from: x
                    }), (0, v.i)().then(e => {
                        o(t.project_id, "view", e)
                    }))
                }, [j]), (0, n.useEffect)(() => {
                    var e;
                    (null === (e = (0, b.j)()) || void 0 === e ? void 0 : e.client_id) || i()
                }, []), g) ? (0, a.jsxs)("div", {
                    className: "flex min-h-screen flex-col items-center justify-center",
                    children: [(0, a.jsx)(l.xNY, {
                        className: "mx-auto mb-3 h-10 w-10 animate-spin text-gray-400"
                    }), (0, a.jsx)("p", {
                        className: "text-sm text-gray-500",
                        children: "Loading..."
                    })]
                }) : t.need_passcode && !j ? (0, a.jsx)(D, {
                    subdomain: r,
                    onVerificationSuccess: e => {
                        w(e)
                    }
                }) : (0, a.jsxs)("div", {
                    className: "relative flex min-h-screen flex-col overflow-hidden",
                    style: {
                        minHeight: "100dvh"
                    },
                    children: [(0, a.jsx)("div", {
                        className: (0, f.cn)("relative flex flex-1 overflow-hidden transition-all duration-300 sm:px-2 sm:pt-2", E ? "pb-2" : "pb-[72px] sm:pb-12"),
                        children: (0, a.jsxs)("div", {
                            className: "relative flex flex-1 overflow-hidden border-black/6 sm:rounded-lg sm:border",
                            children: [(0, a.jsx)(T, {
                                isPlaying: L
                            }), (0, a.jsx)("iframe", {
                                ref: u,
                                src: j,
                                className: "flex-1 overflow-hidden transition-all duration-300 ".concat(E ? "!m-0 !rounded-none !border-none" : ""),
                                loading: "eager",
                                allowFullScreen: !0,
                                seamless: !0,
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; camera; microphone; geolocation; fullscreen; payment",
                                sandbox: "allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation",
                                onLoad: () => {
                                    t.project_id !== M.project_id && z()
                                }
                            })]
                        })
                    }), (0, a.jsx)("button", {
                        onClick: C,
                        className: "fixed right-2 bottom-2 z-50 cursor-pointer rounded-[10px] border border-black/12 bg-white p-2 transition-all duration-300 hover:bg-gray-100 ".concat(E && !R ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"),
                        children: (0, a.jsx)(l.a3o, {
                            className: "h-4 w-4"
                        })
                    }), (0, a.jsx)("div", {
                        className: "fixed bottom-0 left-0 z-50 w-full transition-all duration-300 ".concat(E ? "translate-y-full" : "translate-y-0"),
                        children: (0, a.jsx)(P, {
                            project: M,
                            rolling: L,
                            handleFullScreen: C,
                            handleReport: () => {
                                _("app_report_button_click", {
                                    project_url: M.project_url
                                }), S()
                            },
                            onRoll: () => {
                                I()
                            },
                            onUpdate: (e, r) => {
                                O({ ...e,
                                    need_passcode: t.need_passcode,
                                    interaction: r
                                })
                            }
                        })
                    }), N && (0, a.jsx)(h, {
                        contentId: M.project_id,
                        subjectType: "project",
                        onClose: () => k(!1),
                        trackExtra: {
                            project_url: M.project_url
                        }
                    })]
                })
            }
        },
        42919: (e, t, r) => {
            "use strict";
            r.d(t, {
                d: () => u
            });
            var a = r(95155),
                l = r(25427),
                n = r(12115),
                s = r(60750),
                i = r(90239),
                o = r(26846),
                c = r(17023);
            let d = e => {
                    let {
                        isOpen: t,
                        onEmojiSelect: r,
                        onClose: l,
                        onMouseEnter: i,
                        onMouseLeave: o,
                        className: d
                    } = e, [u, p] = (0, n.useState)([]), {
                        asyncGetEmojis: x
                    } = (0, s.k)(), f = (0, n.useRef)(null);
                    (0, n.useEffect)(() => {
                        t && x().then(e => {
                            console.log("asyncGetEmojis", e), p(e)
                        })
                    }, [t]);
                    let m = e => {
                        r(e), l()
                    };
                    return t ? (0, a.jsx)("div", {
                        className: "absolute top-[-50px] right-0 z-50 h-[54px] w-[268px] items-start justify-items-start ".concat(d),
                        onMouseEnter: i,
                        onMouseLeave: o,
                        children: (0, a.jsx)("div", {
                            className: "flex h-[44px] w-full flex-col items-center justify-center rounded-[8px] bg-white shadow-lg",
                            id: "emoji-picker",
                            ref: f,
                            children: (0, a.jsx)("div", {
                                className: "flex flex-wrap items-center justify-center gap-3",
                                children: u.map(e => (0, a.jsx)("button", {
                                    className: "flex h-5 w-5 cursor-pointer items-center justify-center border-none",
                                    onClick: t => {
                                        t.stopPropagation(), t.preventDefault(), m(e)
                                    },
                                    title: e.display_name,
                                    children: (0, a.jsx)(c.m, {
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
                        onEmojiClick: x,
                        showAddButton: f = !1,
                        scrollable: m = !0,
                        fromMask: h = "from-[#fff]"
                    } = e, {
                        emojis: v
                    } = (0, s.k)(), [b, j] = (0, n.useState)(!1), [w, g] = (0, n.useState)(!1), [y, _] = (0, n.useState)(!1), [N, k] = (0, n.useState)(!1), S = (0, i.I)(), E = (0, n.useRef)(null), C = (0, n.useRef)(null);
                    (0, n.useEffect)(() => {
                        let e = () => {
                                if (C.current) {
                                    let {
                                        scrollLeft: e,
                                        scrollWidth: t,
                                        clientWidth: r
                                    } = C.current;
                                    _(e > 0), k(e < t - r)
                                }
                            },
                            t = C.current;
                        return t && (e(), t.addEventListener("scroll", e), window.addEventListener("resize", e)), () => {
                            t && (t.removeEventListener("scroll", e), window.removeEventListener("resize", e))
                        }
                    }, []);
                    let R = e => {
                        var t;
                        return (null === (t = r.find(t => t.interaction_type === e)) || void 0 === t ? void 0 : t.status) === !0
                    };
                    return (0, a.jsxs)("div", {
                        className: (0, o.cn)("relative flex justify-end gap-[6px]", u),
                        children: [m && (0, a.jsxs)(a.Fragment, {
                            children: [y && (0, a.jsx)("div", {
                                className: (0, o.cn)("pointer-events-none absolute top-0 bottom-0 left-[-2px] z-10 w-6 bg-gradient-to-r to-transparent", h)
                            }), N && (0, a.jsx)("div", {
                                className: (0, o.cn)("pointer-events-none absolute top-0 bottom-0 z-10 w-6 bg-gradient-to-l to-transparent", h, f ? "right-7" : "right-0")
                            })]
                        }), (0, a.jsx)("div", {
                            ref: C,
                            className: (0, o.cn)("flex max-h-[26px] min-w-0 gap-[6px]", m ? "flex-nowrap overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" : "flex-wrap overflow-hidden"),
                            children: t.map(e => (0, a.jsxs)("div", {
                                className: (0, o.cn)("flex h-[26px] cursor-pointer items-center gap-[6px] rounded-[8px] px-[6px] py-1", R(e.interaction_type) ? "bg-brand/6 ring-brand/30 ring-1 ring-inset" : "bg-black/3"),
                                style: {
                                    direction: "ltr"
                                },
                                onClick: t => {
                                    t.stopPropagation(), t.preventDefault(), x(e.interaction_type)
                                },
                                children: [(0, a.jsx)(c.m, {
                                    emoji: v.find(t => t.interaction_type === e.interaction_type),
                                    className: "h-4 w-4",
                                    width: 16,
                                    height: 16,
                                    triggerType: c.Z.Click,
                                    selected: R(e.interaction_type)
                                }), (0, a.jsx)("span", {
                                    className: (0, o.cn)("text-xs font-medium", (R(e.interaction_type), "text-black/95")),
                                    children: e.count
                                })]
                            }, e.interaction_type))
                        }), f && (0, a.jsx)("div", {
                            className: "flex h-[26px] w-[26px] shrink-0 cursor-pointer items-center justify-center rounded-[8px] bg-black/3 p-1",
                            style: {
                                direction: "ltr"
                            },
                            onClick: e => {
                                e.stopPropagation(), e.preventDefault(), j(!b)
                            },
                            onMouseEnter: () => {
                                S || (E.current && clearTimeout(E.current), j(!0))
                            },
                            onMouseLeave: () => {
                                S || w || (E.current = setTimeout(() => {
                                    j(!1)
                                }, 100))
                            },
                            children: (0, a.jsx)(l.kpC, {
                                className: "h-4 w-4 text-black/12"
                            })
                        }), b && (0, a.jsx)(d, {
                            isOpen: b,
                            className: p,
                            onEmojiSelect: e => {
                                x(e.interaction_type), j(!1)
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
        47835: (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => l
            });
            var a = r(34477);
            let l = (0, a.createServerReference)("609f96f93197757e98f3ef53379cb0fd45a3f2d999", a.callServer, void 0, a.findSourceMapURL, "verifyPasscode")
        },
        59710: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => i
            });
            var a = r(95155),
                l = r(6874),
                n = r.n(l);
            r(12115);
            var s = r(52343);

            function i(e) {
                let {
                    error: t = "Something went wrong!",
                    reset: r
                } = e;
                return (0, a.jsxs)("div", {
                    className: "flex min-h-screen flex-col",
                    children: [(0, a.jsx)(s.default, {
                        hideRight: !0
                    }), (0, a.jsxs)("main", {
                        className: "mb-20 flex w-full flex-1 flex-col items-center justify-center px-6 sm:px-4",
                        children: [(0, a.jsx)("h2", {
                            className: "text-center text-[28px]/8 sm:text-[32px]/9 md:text-[40px]/10",
                            children: t
                        }), (0, a.jsx)("p", {
                            className: "mt-3 text-center text-sm text-black/45 sm:text-base",
                            children: "Please try again later or contact support if the problem persists."
                        }), (0, a.jsxs)("div", {
                            className: "mt-12 flex gap-4 sm:mt-16 md:mt-20",
                            children: [(0, a.jsx)("button", {
                                onClick: () => {
                                    r ? r() : window.location.reload()
                                },
                                className: "shine-effect flex h-12 w-36 cursor-pointer items-center justify-center rounded-full bg-black/95 text-sm text-white sm:h-14 sm:w-40 sm:text-base",
                                children: "Try Again"
                            }), (0, a.jsx)(n(), {
                                href: "https://www.youware.com",
                                className: "shine-effect flex h-12 w-36 cursor-pointer items-center justify-center rounded-full border border-black/95 text-sm text-black/95 sm:h-14 sm:w-40 sm:text-base",
                                children: "Go Home"
                            })]
                        })]
                    })]
                })
            }
        },
        61884: (e, t, r) => {
            "use strict";

            function a(e) {
                return e > 1e3 && e < 1e6 ? (e / 1e3).toFixed(1) + "K" : e > 1e6 ? (e / 1e6).toFixed(1) + "M" : e > 1e9 ? (e / 1e9).toFixed(1) + "B" : e
            }
            r.d(t, {
                Z: () => a
            })
        },
        80191: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => i.Vt,
                N: () => f
            });
            var a = r(35695),
                l = r(12115),
                n = r(34477);
            let s = (0, n.createServerReference)("60d7ce557c6a2c4e3b865bc11edd5c8cc98944f0b0", n.callServer, void 0, n.findSourceMapURL, "remixProject");
            var i = r(70165),
                o = r(565),
                c = r(90239),
                d = r(66139),
                u = r(48436),
                p = r(89003);
            let x = e => ({
                    remix: "Failed to remix project, please try again later",
                    create: "Failed to create project, please try again later"
                })[e],
                f = () => {
                    let e = (0, a.useRouter)(),
                        t = (0, c.I)(),
                        {
                            checkAuth: r
                        } = (0, p.M)(),
                        [n, i] = (0, l.useState)(!1);
                    return {
                        remixAction: (0, l.useCallback)(async (t, a) => r(async () => {
                            i(!0);
                            try {
                                let r = await (0, o.i)(),
                                    l = await s(t, r);
                                if (l.data) {
                                    let t = (0, d.$)(),
                                        r = {
                                            enter_from: a
                                        };
                                    "create" === a && (r.createWeb = "true"), e.push("".concat(t, "/editor/").concat(l.data.project_id, "?").concat(new URLSearchParams(r).toString()))
                                } else(0, u.P)({
                                    message: x(a),
                                    type: "error"
                                })
                            } catch (e) {
                                console.log("error", e), (0, u.P)({
                                    message: x(a),
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
                        isRemixing: n
                    }
                }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [8823, 8888, 9721, 9342, 770, 7935, 750, 2343, 4850, 8441, 3688, 7358], () => t(23468)), _N_E = e.O()
    }
]);