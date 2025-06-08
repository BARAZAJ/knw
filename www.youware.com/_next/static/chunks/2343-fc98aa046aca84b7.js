"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2343], {
        165: (e, t, a) => {
            a.d(t, {
                RE: () => l,
                Vt: () => s,
                v1: () => n
            });
            var r = a(9509);
            let n = "0000000000000000000000000000",
                s = "00000000-0000-0000-0000-000000000000";
            r.env.JWT_SECRET_KEY;
            let l = "header_banner_close_date"
        },
        239: (e, t, a) => {
            a.d(t, {
                I: () => n
            });
            var r = a(2115);
            let n = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 480,
                    [a, n] = (0, r.useState)(e);
                return (0, r.useEffect)(() => {
                    let e = () => {
                        n(window.innerWidth <= t)
                    };
                    if (e(), "undefined" == typeof ResizeObserver) return window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }; {
                        let t = new ResizeObserver(() => {
                            e()
                        });
                        return t.observe(document.body), () => {
                            t.disconnect()
                        }
                    }
                }, [t]), a
            }
        },
        1021: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var r, n, s = a(5155),
                l = a(2115);
            null === (n = globalThis || window) || void 0 === n || null === (r = n.requestIdleCallback) || void 0 === r || r.call(n, () => a.e(9066).then(a.t.bind(a, 8834, 23)));
            let o = e => {
                let {
                    animationPath: t,
                    animationData: r,
                    className: n = "",
                    style: o,
                    renderer: i = "svg",
                    loop: c = !0,
                    autoplay: d = !0,
                    errorComponent: u,
                    loadingComponent: x,
                    onError: p,
                    onLoad: f
                } = e, m = (0, l.useRef)(null), [h, v] = (0, l.useState)(null), [g, b] = (0, l.useState)(!0);
                return ((0, l.useEffect)(() => {
                    let e = null,
                        n = !0;
                    return (async () => {
                        try {
                            v(null), b(!0);
                            let s = (await a.e(9066).then(a.t.bind(a, 8834, 23))).default;
                            if (!n || !m.current) return;
                            (e = s.loadAnimation({
                                container: m.current,
                                renderer: i,
                                loop: c,
                                autoplay: d,
                                path: t,
                                ...r && {
                                    animationData: r
                                }
                            })).addEventListener("DOMLoaded", () => {
                                n && (b(!1), null == f || f())
                            }), e.addEventListener("error", () => {
                                n && (v("Lottie loading error"), b(!1), null == p || p("Lottie loading error"))
                            })
                        } catch (e) {
                            n && (v("Lottie loading error"), b(!1), null == p || p("Lottie loading error"))
                        }
                    })(), () => {
                        n = !1, e && e.destroy()
                    }
                }, [t, c, d, i]), h && u) ? u : g && x ? x : (0, s.jsx)("div", {
                    ref: m,
                    className: n,
                    style: o
                })
            }
        },
        2343: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => G
            });
            var r = a(5155),
                n = a(5427),
                s = a(8788),
                l = a(6874),
                o = a.n(l),
                i = a(5695),
                c = a(2115),
                d = a(3030),
                u = a(862),
                x = a(6389),
                p = a(2128),
                f = a(8436);
            let m = e => {
                let {
                    onSuccess: t,
                    onError: a
                } = e, {
                    loginWithGoogleOneTap: r
                } = (0, u.A)(), {
                    track: n
                } = (0, x.s)(), s = (0, c.useRef)(!1), l = (0, c.useRef)(0);
                (0, c.useEffect)(() => {
                    if (s.current) return;
                    let e = () => {
                        if (!window.google) {
                            l.current < 20 ? (l.current += 1, p.Ay.info("Google One Tap initialization attempt ".concat(l.current, "/").concat(20)), setTimeout(e, 500)) : p.Ay.error("Failed to initialize Google One Tap: Google script not loaded after maximum attempts");
                            return
                        }
                        if (!s.current) try {
                            window.google.accounts.id.initialize({
                                client_id: "541265544701-ig5gkv7jg7a6od2rip81vpv99fej0oja.apps.googleusercontent.com",
                                callback: o,
                                auto_select: !1,
                                cancel_on_tap_outside: !1,
                                prompt_parent_id: "google-one-tap-container"
                            }), window.google.accounts.id.prompt(e => {
                                p.Ay.info("Google One Tap prompt callback", {
                                    isNotDisplayed: e.isNotDisplayed(),
                                    isSkippedMoment: e.isSkippedMoment(),
                                    isDismissedMoment: e.isDismissedMoment(),
                                    momentType: e.getMomentType()
                                }), e.isNotDisplayed() ? p.Ay.info("Google One Tap not displayed", {
                                    reason: e.getMomentType()
                                }) : e.isSkippedMoment() ? p.Ay.info("Google One Tap skipped", {
                                    reason: e.getMomentType()
                                }) : e.isDismissedMoment() && p.Ay.info("Google One Tap dismissed", {
                                    reason: e.getMomentType()
                                })
                            }), s.current = !0, p.Ay.info("Google One Tap initialized successfully")
                        } catch (e) {
                            p.Ay.error("Error initializing Google One Tap", e), null == a || a(e)
                        }
                    };
                    return e(), () => {}
                }, [t, a]);
                let o = async e => {
                    try {
                        p.Ay.info("Google One Tap credential response received"), n("login_continue_button_click", {
                            login_platform: "google_one_tap"
                        }), await r(e.credential), n("login_status", {
                            result: "success",
                            login_platform: "google_one_tap"
                        }), null == t || t()
                    } catch (e) {
                        p.Ay.error("Google One Tap login error", e), n("login_status", {
                            result: "failed",
                            login_platform: "google_one_tap",
                            fail_reason: e.message || "unknown error"
                        }), (0, f.P)({
                            message: "login failed, please try again later",
                            type: "error"
                        }), null == a || a(e)
                    }
                };
                return null
            };
            var h = a(239),
                v = a(6139),
                g = a(6846),
                b = a(165);
            let j = {
                    setBannerCloseDateCookie: e => {
                        try {
                            let t = new Date;
                            t.setDate(t.getDate() + 30), t.setHours(0, 0, 0, 0), document.cookie = "".concat(b.RE, "=").concat(e, "; expires=").concat(t.toUTCString(), "; path=/; SameSite=Lax")
                        } catch (e) {}
                    },
                    getBannerCloseDateCookieClient: () => {
                        try {
                            let e = document.cookie.split(";").find(e => e.trim().startsWith("".concat(b.RE, "=")));
                            return null == e ? void 0 : e.split("=")[1]
                        } catch (e) {
                            return
                        }
                    },
                    showBanner: () => {
                        try {
                            let e = j.getBannerCloseDateCookieClient();
                            if (!e) return !0;
                            let t = new Date().toISOString().split("T")[0];
                            return e !== t
                        } catch (e) {
                            return !1
                        }
                    },
                    closeBanner: () => {
                        try {
                            let e = new Date().toISOString().split("T")[0];
                            j.setBannerCloseDateCookie(e)
                        } catch (e) {}
                    }
                },
                w = e => {
                    let {
                        showBanner: t = !0,
                        onClose: a,
                        initialBannerState: s
                    } = e, [l, o] = (0, c.useState)(null != s && s), i = (0, h.I)(!1, 840);
                    (0, c.useEffect)(() => {
                        void 0 === s && o(j.showBanner())
                    }, [s]);
                    let d = e => {
                        e.stopPropagation(), e.preventDefault(), window.open("https://www.youware.com/project/youware-retro-challenge", "_blank")
                    };
                    return t && l ? (0, r.jsx)("div", {
                        className: "fixed top-0 right-0 left-0 z-[40] flex h-[64px] items-center px-4 min-[840px]:h-[50px]",
                        style: {
                            backgroundImage: "url('/banner/retro-bg.png')",
                            backgroundRepeat: "repeat-x",
                            backgroundSize: "contain",
                            backgroundColor: "#3E413C"
                        },
                        onClick: i ? d : void 0,
                        children: (0, r.jsxs)("div", {
                            className: "z-10 flex flex-1 items-center justify-between min-[840px]:justify-center",
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("img", {
                                    src: "/banner/retro-logo.png",
                                    alt: "Retro Computer",
                                    className: "mr-3 flex-none",
                                    style: {
                                        width: "40px",
                                        height: "40px"
                                    }
                                }), (0, r.jsx)("div", {
                                    className: "text-[12px] text-white min-[840px]:text-[16px]",
                                    children: (0, r.jsxs)("span", {
                                        children: ["YouWare Retro Challenge: Build a retro site.", " ", (0, r.jsx)("span", {
                                            className: "font-bold min-[840px]:text-[20px]",
                                            children: "Win up to $1000."
                                        })]
                                    })
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "ml-3 flex items-center",
                                children: [!i && (0, r.jsx)("img", {
                                    src: "/banner/retro-btn.png",
                                    alt: "Get more info",
                                    className: "hidden h-[32px] w-[130px] hover:cursor-pointer hover:opacity-85 min-[840px]:block",
                                    onClick: d
                                }), (0, r.jsx)(n.Qks, {
                                    className: "ml-1 h-5 w-5 text-white hover:cursor-pointer hover:opacity-85 min-[840px]:absolute min-[840px]:right-[22px]",
                                    onClick: e => {
                                        e.stopPropagation(), e.preventDefault(), o(!1), j.closeBanner(), a && a()
                                    }
                                })]
                            })]
                        })
                    }) : null
                };
            var y = a(4477);
            let k = (0, y.createServerReference)("00f3bc92f685a0f844c2d09a49c128dfdbbe4dca53", y.callServer, void 0, y.findSourceMapURL, "getUnreadCount"),
                N = (0, y.createServerReference)("00c129a22f40e70098856953d0c19e90c003042b7c", y.callServer, void 0, y.findSourceMapURL, "markAllAsRead"),
                _ = (0, y.createServerReference)("4098bf77ecf0e98f35cdcf3d1f804470b881e2cedc", y.callServer, void 0, y.findSourceMapURL, "getNotifications");
            var C = a(7023),
                S = a(8161),
                E = a(750),
                R = a(832),
                L = a.n(R),
                M = a(6004),
                A = a.n(M),
                T = a(617),
                z = a.n(T);
            L().extend(A()), L().extend(z());
            let D = e => {
                var t, a, n, s, l, o;
                let {
                    notification: i
                } = e, {
                    emojis: c
                } = (0, E.k)(), {
                    track: d
                } = (0, x.s)(), u = "official" === i.type, p = e => {
                    e.stopPropagation(), window.open("/profile/".concat(i.user.uid), "_blank"), d("notification_user_profile_click", {
                        user_profile_url: "/user/".concat(i.user.uid)
                    })
                }, f = null !== (o = null !== (l = null === (t = i.project) || void 0 === t ? void 0 : t.custom_cover_url) && void 0 !== l ? l : null === (a = i.project) || void 0 === a ? void 0 : a.cover_url) && void 0 !== o ? o : "";
                return (0, r.jsxs)("div", {
                    className: "flex w-full cursor-pointer items-center gap-2 overflow-visible rounded-[12px] p-4 transition-all hover:bg-black/3",
                    onClick: () => {
                        if (i.project) {
                            let e = i.project.project_url,
                                t = "".concat(e, "?enter_from=notification_center");
                            window.open(t, "_blank"), d("notification_project_cover_click", {
                                project_url: e
                            })
                        }
                    },
                    children: [(0, r.jsxs)("div", {
                        className: (0, g.cn)("group relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-black/3", u ? "" : "cursor-pointer"),
                        onClick: u ? void 0 : p,
                        children: [u ? (0, r.jsx)("img", {
                            src: "/icons/logo-with-bg.svg",
                            alt: "",
                            className: "h-full w-full rounded-full"
                        }) : (0, r.jsx)("img", {
                            src: (null === (n = i.user) || void 0 === n ? void 0 : n.photo_url) || "/images/avatar.svg",
                            alt: "",
                            className: "h-full w-full rounded-full"
                        }), u ? null : (0, r.jsx)("div", {
                            className: "absolute inset-0 bg-black/12 opacity-0 transition-all group-hover:opacity-100"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-1 flex-shrink-1 flex-col justify-between overflow-x-auto",
                        children: [(0, r.jsx)("div", {
                            className: (0, g.cn)("flex items-center gap-2 self-start", u ? "" : "cursor-pointer hover:underline"),
                            onClick: u ? void 0 : p,
                            children: (0, r.jsx)("div", {
                                children: u ? "YouWare Team" : i.user.display_name
                            })
                        }), (0, r.jsxs)("div", {
                            className: "no-scrollbar flex w-auto items-center overflow-x-auto text-[12px] text-black/66",
                            children: [u ? (0, r.jsx)("span", {
                                className: "flex-shrink-0",
                                children: i.content
                            }) : "remix" === i.type ? (0, r.jsx)("span", {
                                className: "flex-shrink-0",
                                children: "Remixed your project"
                            }) : (0, r.jsxs)("div", {
                                className: "flex flex-shrink-1 items-center overflow-x-auto",
                                children: [(0, r.jsx)("span", {
                                    className: "mr-[3px] flex-shrink-0",
                                    children: "Reacted:"
                                }), (0, r.jsx)("div", {
                                    className: "no-scrollbar flex flex-shrink-1 items-center gap-0.5 overflow-scroll",
                                    children: null === (s = i.emojis) || void 0 === s ? void 0 : s.map(e => (0, r.jsx)(C.m, {
                                        emoji: c.find(t => t.interaction_type === e),
                                        width: 12,
                                        height: 12
                                    }, e))
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex-shrink-0",
                                children: [(0, r.jsx)("span", {
                                    className: "mx-2",
                                    children: "\xb7"
                                }), (0, r.jsx)("span", {
                                    children: function(e) {
                                        let t = L()(e);
                                        return t.isToday() ? t.format("HH:mm") : t.format("M/D")
                                    }(i.timestamp)
                                })]
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "group relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-[4px] border border-black/3",
                        children: [f && !f.includes("placehold.co") ? (0, r.jsx)(S.A, {
                            url: f,
                            className: "h-10 w-10 object-cover"
                        }) : (0, r.jsx)("div", {
                            className: "h-10 w-10 bg-black/6"
                        }), (0, r.jsx)("div", {
                            className: "absolute inset-0 bg-black/12 opacity-0 transition-all group-hover:opacity-100"
                        })]
                    })]
                })
            };

            function I(e) {
                let {
                    onClose: t,
                    hasBanner: a = !1
                } = e, [s, l] = (0, c.useState)([]), [o, i] = (0, c.useState)(!0), [d, u] = (0, c.useState)(!1), [x, f] = (0, c.useState)(void 0), [m, h] = (0, c.useState)(!1), v = (0, c.useRef)(null), b = (0, c.useRef)(null), j = (0, c.useRef)(null), w = (0, c.useRef)(null);
                (0, c.useEffect)(() => {
                    y()
                }, []), (0, c.useEffect)(() => (document.body.style.overflow = "hidden", () => {
                    document.body.style.overflow = "auto"
                }), []);
                let y = async () => {
                    try {
                        i(!0), h(!1);
                        let a = await _({
                            cursor: null != x ? x : "",
                            page_size: 12
                        });
                        if (0 === a.code && a.data) {
                            var e, t;
                            l(e => {
                                var t;
                                return [...e, ...(null === (t = a.data) || void 0 === t ? void 0 : t.notifications) || []]
                            }), u((null === (e = a.data) || void 0 === e ? void 0 : e.page_info.has_more) || !1), f((null === (t = a.data) || void 0 === t ? void 0 : t.page_info.next_cursor) || void 0)
                        } else p.vF.error("Failed to fetch notifications: ", void 0, a), h(!0)
                    } catch (e) {
                        p.vF.error("Failed to fetch notifications:", e), h(!0)
                    } finally {
                        i(!1)
                    }
                };
                (0, c.useEffect)(() => {
                    if (b.current && b.current.disconnect(), !j.current || !d || m) return;
                    let e = new IntersectionObserver(e => {
                        e[0].isIntersecting && !o && d && !m && y()
                    }, {
                        root: w.current,
                        rootMargin: "300px",
                        threshold: .2
                    });
                    return e.observe(j.current), b.current = e, () => {
                        b.current && b.current.disconnect()
                    }
                }, [o, d, m]);
                let k = () => {
                    y()
                };
                return (0, r.jsxs)("div", {
                    className: (0, g.cn)("z-10 flex flex-col items-stretch rounded-[16px] border border-black/3 bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.1)]", "absolute top-8 -right-12 m-1 w-[400px]", "max-sm:fixed max-sm:right-0 max-sm:bottom-0 max-sm:left-0 max-sm:m-0 max-sm:w-screen max-sm:rounded-b-none", a ? "max-sm:top-28" : "max-sm:top-12"),
                    children: [(0, r.jsx)("div", {
                        ref: v,
                        className: "fixed top-0 left-0 -z-1 h-full w-full",
                        onClick: e => {
                            e.target === v.current && (e.stopPropagation(), e.preventDefault(), t())
                        }
                    }), (0, r.jsxs)("div", {
                        className: "m-5 mb-2 flex items-start justify-between",
                        children: [(0, r.jsx)("h3", {
                            className: "text-[20px] font-bold",
                            children: "Notification"
                        }), (0, r.jsx)(n.Qks, {
                            className: "hover:text-brand h-4 w-4 cursor-pointer",
                            onClick: t
                        })]
                    }), (0, r.jsx)(r.Fragment, {
                        children: 0 === s.length ? (0, r.jsx)("div", {
                            className: "mb-2 flex h-36 w-full max-w-full items-center justify-center px-5",
                            children: o ? (0, r.jsx)(n.xNY, {
                                className: "h-6 w-6 animate-spin text-black/65"
                            }) : m ? (0, r.jsxs)("button", {
                                onClick: k,
                                className: "border-brand hover:bg-brand/10 flex cursor-pointer items-center gap-2 rounded-[8px] border px-2 py-1 text-[14px]",
                                children: [(0, r.jsx)(n.Ll9, {
                                    className: "h-4 w-4"
                                }), (0, r.jsx)("span", {
                                    children: "Retry"
                                })]
                            }) : (0, r.jsx)("p", {
                                className: "text-[12px] text-black/66",
                                children: "You don't have any notifications."
                            })
                        }) : (0, r.jsxs)("div", {
                            ref: w,
                            className: "mb-2 w-full max-w-full flex-1 space-y-2 overflow-y-scroll px-1 sm:max-h-[min(600px,calc(100vh-240px))]",
                            children: [s.map((e, t) => (0, r.jsxs)(c.Fragment, {
                                children: [t > 0 && e.is_read && !s[t - 1].is_read && (0, r.jsxs)("div", {
                                    className: "flex items-center gap-1 p-4 text-[12px] text-black/65",
                                    children: [(0, r.jsx)("span", {
                                        children: "Earlier"
                                    }), (0, r.jsx)("div", {
                                        className: "h-px flex-1 bg-black/6"
                                    })]
                                }, "divider-".concat(t)), (0, r.jsx)(D, {
                                    notification: e
                                }, e.id)]
                            }, e.id)), d && (0, r.jsx)("div", {
                                ref: j,
                                className: "flex items-center justify-center py-4",
                                children: o ? (0, r.jsx)(n.xNY, {
                                    className: "h-6 w-6 animate-spin text-black/65"
                                }) : m ? (0, r.jsxs)("button", {
                                    onClick: k,
                                    className: "border-brand hover:bg-brand/10 flex cursor-pointer items-center gap-2 rounded-[8px] border px-2 py-1 text-[14px]",
                                    children: [(0, r.jsx)(n.Ll9, {
                                        className: "h-4 w-4"
                                    }), (0, r.jsx)("span", {
                                        children: "Load more"
                                    })]
                                }) : (0, r.jsx)("div", {
                                    className: "h-4 w-full"
                                })
                            })]
                        })
                    })]
                })
            }

            function O(e) {
                let {
                    hasBanner: t = !1
                } = e, [a, s] = (0, c.useState)(!1), [l, o] = (0, c.useState)(0), {
                    track: d
                } = (0, x.s)(), {
                    user: f
                } = (0, u.A)(), m = (0, i.useRouter)();
                (0, c.useEffect)(() => {
                    f && setTimeout(() => {
                        h()
                    }, 200)
                }, []);
                let h = async () => {
                        try {
                            var e;
                            let t = await k();
                            "number" == typeof(null === (e = t.data) || void 0 === e ? void 0 : e.unread_count) && (o(t.data.unread_count), d("notification_entrance_show", {
                                unread_message_num: t.data.unread_count
                            }))
                        } catch (e) {
                            p.vF.error("Failed to fetch notification count:", e)
                        }
                    },
                    b = async () => {
                        if (s(!1), l) {
                            o(0);
                            try {
                                await N()
                            } catch (e) {
                                p.vF.error("Failed to mark all notifications as read:", e)
                            }
                        }
                    };
                return (0, r.jsxs)("div", {
                    className: "relative ml-2",
                    children: [(0, r.jsxs)("button", {
                        className: (0, g.cn)("cursor-pointer rounded-[10px] p-2 transition-all hover:bg-black/3", a && "bg-white"),
                        onClick: () => {
                            if (!f) {
                                let e = (0, v.$)(!0);
                                m.push("".concat(e, "/login?returnTo=").concat(encodeURIComponent(window.location.pathname + window.location.search)));
                                return
                            }
                            s(!0), d("notification_entrance_click", {
                                unread_message_num: l
                            })
                        },
                        "aria-label": "Notifications",
                        children: [(0, r.jsx)(n.EWM, {
                            size: 16,
                            className: "cursor-pointer text-black/95"
                        }), l > 0 && (0, r.jsx)("div", {
                            className: "absolute top-[6px] right-[5px] h-[11px] rounded-full bg-[#D42727] px-1 text-[8px] leading-[11px] text-white",
                            children: l > 99 ? "99+" : l
                        })]
                    }), a && (0, r.jsx)(I, {
                        hasBanner: t,
                        onClose: b
                    })]
                })
            }
            var P = a(9137),
                B = a.n(P),
                U = a(7606);
            let F = () => {
                    let {
                        user: e,
                        logout: t
                    } = (0, u.A)(), [a, s] = (0, c.useState)(!1), l = (0, c.useRef)(null), o = (0, i.useRouter)(), [d, p] = (0, c.useState)(""), {
                        track: m
                    } = (0, x.s)(), v = (0, c.useRef)(null), b = (0, h.I)(!1, 1200), j = (0, c.useMemo)(() => (null == e ? void 0 : e.plan) === "Pro", [null == e ? void 0 : e.plan]);
                    (0, c.useEffect)(() => {
                        p(window.location.pathname)
                    }, []), (0, c.useEffect)(() => {
                        let e = e => {
                            l.current && !l.current.contains(e.target) && s(!1)
                        };
                        return document.addEventListener("mousedown", e), () => {
                            document.removeEventListener("mousedown", e)
                        }
                    }, []);
                    let w = async () => {
                            try {
                                await t(), o.push("/home")
                            } catch (e) {
                                (0, f.P)({
                                    message: "Failed to logout, please try again later",
                                    type: "error"
                                })
                            }
                            s(!1)
                        },
                        y = () => {
                            (null == e ? void 0 : e.uid) && o.push("/profile/".concat(e.uid))
                        },
                        k = t => {
                            (null == e ? void 0 : e.uid) && (j || m("sub_upgrade_click", {
                                click_from: "subscribe"
                            }), window.open("/subscription", "_blank"))
                        };
                    return e ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("div", {
                            className: (0, g.cn)("bg-brand mr-3 flex cursor-pointer items-center gap-[3px] px-[5px] text-[12px] text-white", j ? "h-5 rounded-[6px] font-bold" : "h-[26px] rounded-[8px] px-2"),
                            onClick: () => k("header"),
                            children: [j && (0, r.jsx)(n.xsv, {
                                className: "h-3 w-3"
                            }), (0, r.jsx)("span", {
                                children: j ? "Pro" : "Upgrade"
                            })]
                        }), (0, r.jsxs)("div", {
                            ref: l,
                            onMouseEnter: () => {
                                v.current && (clearTimeout(v.current), v.current = null), s(!0)
                            },
                            onMouseLeave: () => {
                                v.current = setTimeout(() => {
                                    s(!1)
                                }, 300)
                            },
                            onClick: () => {
                                b ? s(!0) : y()
                            },
                            className: "jsx-29af56ad2ef10cea " + "relative cursor-pointer rounded-full p-1 ".concat(a && "bg-black/6"),
                            children: [(0, r.jsx)("div", {
                                className: "jsx-29af56ad2ef10cea flex cursor-pointer items-center",
                                children: (0, r.jsx)("div", {
                                    "aria-label": "Go to profile",
                                    className: "jsx-29af56ad2ef10cea " + "rounded-full bg-black/6 transition-transform focus:outline-none ".concat(d === "/profile/".concat(e.uid) && "ring ring-black ring-offset-2"),
                                    children: (0, r.jsx)("img", {
                                        src: e.photo_url || "/images/avatar.svg",
                                        alt: "User avatar",
                                        className: "jsx-29af56ad2ef10cea h-6 w-6 overflow-hidden rounded-full object-cover"
                                    })
                                })
                            }), a && (0, r.jsxs)("div", {
                                style: {
                                    animation: "fadeIn 0.2s ease-out"
                                },
                                className: "jsx-29af56ad2ef10cea absolute top-10 right-0 z-10 w-[260px] rounded-[16px] border border-black/3 bg-white p-1 shadow-lg",
                                children: [(0, r.jsxs)("div", {
                                    className: "jsx-29af56ad2ef10cea flex flex-col items-center gap-2 px-3 py-6",
                                    children: [(0, r.jsx)("div", {
                                        onClick: y,
                                        className: "jsx-29af56ad2ef10cea h-16 w-16 cursor-pointer overflow-hidden rounded-full bg-black/6",
                                        children: (0, r.jsx)("img", {
                                            src: e.photo_url || "/images/avatar.svg",
                                            alt: "User avatar",
                                            className: "jsx-29af56ad2ef10cea h-16 w-16 rounded-full object-cover"
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: "jsx-29af56ad2ef10cea w-full space-y-0.5",
                                        children: [(0, r.jsx)("div", {
                                            className: "jsx-29af56ad2ef10cea line-clamp-2 w-full text-center text-[16px] sm:text-[20px]",
                                            children: e.display_name || "User"
                                        }), (0, r.jsx)("div", {
                                            className: "jsx-29af56ad2ef10cea w-full truncate text-center text-[12px] text-black/65",
                                            children: e.email
                                        })]
                                    }), "number" == typeof e.coins && (0, r.jsx)(U.A, {
                                        points: e.coins,
                                        hoverAlign: "center"
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "jsx-29af56ad2ef10cea mx-3 my-1 h-px bg-black/6"
                                }), (0, r.jsxs)("button", {
                                    onClick: y,
                                    className: "jsx-29af56ad2ef10cea flex h-10 w-full cursor-pointer items-center gap-2 rounded-[12px] px-3 text-black transition-colors hover:bg-black/6",
                                    children: [(0, r.jsx)(n.IuU, {
                                        className: "h-4 w-4"
                                    }), (0, r.jsx)("span", {
                                        className: "jsx-29af56ad2ef10cea text-black/95",
                                        children: "Profile"
                                    })]
                                }), (0, r.jsxs)("button", {
                                    onClick: () => k("subscribe"),
                                    className: "jsx-29af56ad2ef10cea flex h-10 w-full cursor-pointer items-center gap-2 rounded-[12px] px-3 text-black transition-colors hover:bg-black/6",
                                    children: [(0, r.jsx)(n.GDL, {
                                        className: "h-4 w-4"
                                    }), (0, r.jsx)("span", {
                                        className: "jsx-29af56ad2ef10cea text-black/95",
                                        children: "Subscribe"
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "jsx-29af56ad2ef10cea mx-3 my-1 h-px bg-black/6"
                                }), (0, r.jsxs)("button", {
                                    onClick: w,
                                    className: "jsx-29af56ad2ef10cea flex h-10 w-full cursor-pointer items-center gap-2 rounded-[12px] px-3 text-black transition-colors hover:bg-black/6",
                                    children: [(0, r.jsx)(n.jfQ, {
                                        className: "h-4 w-4"
                                    }), (0, r.jsx)("span", {
                                        className: "jsx-29af56ad2ef10cea text-black/95",
                                        children: "Logout"
                                    })]
                                })]
                            }), (0, r.jsx)(B(), {
                                id: "29af56ad2ef10cea",
                                children: "@-webkit-keyframes fadeIn{from{opacity:0;-webkit-transform:translatey(-10px);transform:translatey(-10px)}to{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes fadeIn{from{opacity:0;-moz-transform:translatey(-10px);transform:translatey(-10px)}to{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes fadeIn{from{opacity:0;-o-transform:translatey(-10px);transform:translatey(-10px)}to{opacity:1;-o-transform:translatey(0);transform:translatey(0)}}@keyframes fadeIn{from{opacity:0;-webkit-transform:translatey(-10px);-moz-transform:translatey(-10px);-o-transform:translatey(-10px);transform:translatey(-10px)}to{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}"
                            })]
                        })]
                    }) : null
                },
                G = e => {
                    let {
                        showBanner: t = !1,
                        hideRight: a = !1,
                        initialMobile: l,
                        initialBannerVisible: x
                    } = e, {
                        user: f
                    } = (0, u.A)(), b = (0, i.usePathname)(), y = (0, i.useRouter)(), [k, N] = (0, c.useState)("/"), [_, C] = (0, c.useState)(null != x && x), [S, E] = (0, c.useState)(!1), R = (0, h.I)(l || !1, 768);
                    (0, c.useEffect)(() => {
                        location.origin.includes(".app") && N((0, v.$)())
                    }, []), (0, c.useEffect)(() => {
                        void 0 === x && C(j.showBanner())
                    }, [x]);
                    let L = t && _;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(w, {
                            showBanner: L,
                            onClose: () => {
                                C(!1)
                            },
                            initialBannerState: x
                        }), !f && ("/home" === b || "/" === b) && (0, r.jsx)(m, {
                            onSuccess: () => {
                                y.refresh()
                            },
                            onError: e => {
                                p.Ay.error("Google One Tap error:", e)
                            }
                        }), (0, r.jsx)("header", {
                            className: "h-14 w-full",
                            children: (0, r.jsxs)("div", {
                                className: "bg-body fixed right-0 left-0 z-50 flex h-14 w-full items-center justify-between px-4 transition-all duration-300 ".concat(L ? "top-[64px] min-[840px]:top-[50px]" : "top-0"),
                                children: [(0, r.jsx)(o(), {
                                    href: k,
                                    children: (0, r.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [(0, r.jsx)(s.A, {
                                            className: "text-brand h-6 w-6"
                                        }), (0, r.jsx)("div", {
                                            className: "mt-[3px] text-base text-black/95 lg:text-xl xl:text-[20px] ".concat(!a && "max-[400px]:hidden"),
                                            children: "YouWare"
                                        })]
                                    })
                                }), !a && (0, r.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [!R && (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(o(), {
                                            href: "/blog",
                                            className: "ml-2 cursor-pointer rounded-[10px] px-3 py-2 text-[14px] transition-all hover:bg-black/3",
                                            children: "Blogs"
                                        }), (0, r.jsx)(o(), {
                                            href: "/affiliate",
                                            className: "ml-2 cursor-pointer rounded-[10px] px-3 py-2 text-[14px] transition-all hover:bg-black/3",
                                            children: "Affiliate"
                                        }), (0, r.jsx)(o(), {
                                            href: "https://discord.gg/youware",
                                            target: "_blank",
                                            className: "ml-2 cursor-pointer rounded-[10px] px-3 py-2 text-[14px] transition-all hover:bg-black/3",
                                            children: "Community"
                                        })]
                                    }), (0, r.jsx)(O, {
                                        hasBanner: L
                                    }), (0, r.jsx)("div", {
                                        className: "ml-3 h-[12px] w-[0px] bg-black/12"
                                    }), f ? (0, r.jsx)(F, {}) : (0, r.jsx)(o(), {
                                        href: (0, v.$)(!0) + "/login",
                                        className: "bg-brand rounded-[10px] px-3 py-2 text-sm leading-[16px] text-white",
                                        children: "Sign up"
                                    }), R && (0, r.jsxs)(d.rI, {
                                        triggerType: "hover",
                                        onOpenChange: e => {
                                            E(e)
                                        },
                                        children: [(0, r.jsx)(d.ty, {
                                            className: (0, g.cn)("ml-2 rounded-[10px] p-2 hover:bg-black/3", S && "bg-black/6 hover:bg-black/6"),
                                            children: (0, r.jsx)(n.tOc, {
                                                size: 18,
                                                className: "text-black/95"
                                            })
                                        }), (0, r.jsxs)(d.SQ, {
                                            className: "right-0 mt-2 w-36",
                                            children: [(0, r.jsx)(d._2, {
                                                icon: n.L4U,
                                                label: "Blogs",
                                                onClick: () => y.push("/blog")
                                            }), (0, r.jsx)(d._2, {
                                                icon: n.C_5,
                                                label: "Affiliate",
                                                onClick: () => y.push("/affiliate")
                                            }), (0, r.jsx)(d._2, {
                                                icon: n.cyn,
                                                label: "Community",
                                                onClick: () => {
                                                    window.open("https://discord.gg/youware", "_blank")
                                                }
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                }
        },
        3030: (e, t, a) => {
            a.d(t, {
                SQ: () => u,
                _2: () => x,
                mB: () => p,
                rI: () => c,
                ty: () => d
            });
            var r = a(5155),
                n = a(5427),
                s = a(2115),
                l = a(6846);
            let o = (0, s.createContext)(void 0),
                i = () => {
                    let e = (0, s.useContext)(o);
                    if (!e) throw Error("DropdownMenu components must be used within a DropdownMenu provider");
                    return e
                },
                c = e => {
                    let {
                        children: t,
                        className: a,
                        triggerType: n = "click",
                        onOpenChange: i
                    } = e, [c, d] = (0, s.useState)(!1), u = (0, s.useRef)(null), x = (0, s.useRef)(null), p = (0, s.useRef)(null), f = (0, s.useRef)(null);
                    return (0, s.useEffect)(() => {
                        if (c) {
                            let e = e => {
                                var t;
                                !x.current || x.current.contains(e.target) || (null === (t = u.current) || void 0 === t ? void 0 : t.contains(e.target)) || (e.stopPropagation(), e.preventDefault(), d(!1))
                            };
                            return document.addEventListener("mousedown", e), () => {
                                document.removeEventListener("mousedown", e)
                            }
                        }
                    }, [c]), (0, s.useEffect)(() => () => {
                        f.current && clearTimeout(f.current)
                    }, []), (0, s.useEffect)(() => {
                        null == i || i(c)
                    }, [c, i]), (0, r.jsx)(o.Provider, {
                        value: {
                            isOpen: c,
                            setIsOpen: d,
                            triggerRef: u,
                            menuRef: x,
                            triggerType: n
                        },
                        children: (0, r.jsx)("div", {
                            ref: p,
                            className: (0, l.cn)("relative", a),
                            onMouseLeave: "hover" === n ? () => {
                                f.current = setTimeout(() => {
                                    d(!1)
                                }, 200)
                            } : void 0,
                            onMouseEnter: "hover" === n ? () => {
                                f.current && (clearTimeout(f.current), f.current = null)
                            } : void 0,
                            children: t
                        })
                    })
                },
                d = e => {
                    let {
                        children: t,
                        className: a
                    } = e, {
                        setIsOpen: n,
                        triggerRef: s,
                        triggerType: o
                    } = i();
                    return (0, r.jsx)("div", {
                        ref: s,
                        className: (0, l.cn)("cursor-pointer", a),
                        onClick: e => {
                            e.stopPropagation(), e.preventDefault(), n(!0)
                        },
                        onMouseEnter: () => {
                            "hover" === o && n(!0)
                        },
                        children: t
                    })
                },
                u = e => {
                    let {
                        children: t,
                        className: a
                    } = e, {
                        isOpen: n,
                        menuRef: s
                    } = i();
                    return n ? (0, r.jsx)("div", {
                        ref: s,
                        className: (0, l.cn)("absolute z-50 space-y-1 rounded-[10px] bg-white p-1 shadow-[0px_0px_10px_4px_rgba(0,0,0,0.06)]", a),
                        children: t
                    }) : null
                },
                x = e => {
                    let {
                        className: t,
                        icon: a,
                        label: o,
                        rightBlock: c,
                        disabled: d,
                        children: u,
                        onClick: x
                    } = e, {
                        setIsOpen: p
                    } = i(), [f, m] = (0, s.useState)(!1);
                    return (0, r.jsx)("div", {
                        className: (0, l.cn)("flex h-[30px] cursor-pointer items-center justify-between gap-2 rounded-[8px] px-2 hover:bg-black/3", d && "cursor-not-allowed text-black/30", t),
                        onClick: async e => {
                            if (e.stopPropagation(), e.preventDefault(), !d) try {
                                m(!0), await x(e), m(!1), p(!1)
                            } catch (e) {
                                m(!1)
                            }
                        },
                        children: u || (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [a && (f ? (0, r.jsx)(n.xNY, {
                                    className: "h-4 w-4 animate-spin"
                                }) : (0, r.jsx)(a, {
                                    className: "h-4 w-4"
                                })), (0, r.jsx)("span", {
                                    className: "text-[14px] whitespace-nowrap",
                                    style: {
                                        letterSpacing: "-0.4px"
                                    },
                                    children: o
                                })]
                            }), c]
                        })
                    })
                },
                p = e => {
                    let {
                        className: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: (0, l.cn)("my-1 h-[1px] w-full bg-black/6 px-2", t)
                    })
                }
        },
        6846: (e, t, a) => {
            a.d(t, {
                cn: () => s
            });
            var r = a(2596),
                n = a(9688);

            function s() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, n.QP)((0, r.$)(t))
            }
        },
        7023: (e, t, a) => {
            a.d(t, {
                Z: () => o,
                m: () => i
            });
            var r = a(5155),
                n = a(2115),
                s = a(1021),
                l = a(750),
                o = function(e) {
                    return e.Hover = "hover", e.Click = "click", e.None = "none", e
                }({});
            let i = e => {
                let {
                    emoji: t,
                    className: a,
                    width: o = 20,
                    height: i = 20,
                    selected: c = !1,
                    triggerType: d = "hover",
                    ...u
                } = e, [x, p] = (0, n.useState)(!1), {
                    getLottieData: f
                } = (0, l.k)(), [m, h] = (0, n.useState)(!1), v = "".concat(null == t ? void 0 : t.interaction_type, "-").concat(o, "-").concat(i), g = () => "none" !== d && ("hover" === d ? x : "click" === d && c);
                return (0, r.jsx)("div", {
                    className: a,
                    ...u,
                    onMouseEnter: () => p(!0),
                    onMouseLeave: () => p(!1),
                    children: (0, r.jsxs)("div", {
                        style: {
                            position: "relative",
                            width: o,
                            height: i
                        },
                        children: [g() && t && (0, r.jsx)(s.A, {
                            loop: "click" !== d || !c,
                            animationPath: t.lottie,
                            animationData: f(t.lottie),
                            className: "absolute top-0 left-0 h-full w-full",
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: o,
                                height: i,
                                opacity: m && g() ? 1 : 0,
                                zIndex: 1
                            },
                            onLoad: () => h(!0)
                        }), (0, r.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: o,
                                height: i,
                                opacity: m && g() ? 0 : 1
                            },
                            children: (null == t ? void 0 : t.icon) ? (0, r.jsx)("img", {
                                src: t.icon,
                                alt: (null == t ? void 0 : t.display_name) || "",
                                width: o,
                                height: i,
                                style: {
                                    width: o,
                                    height: i
                                }
                            }, v) : null
                        })]
                    })
                })
            }
        },
        7606: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var r = a(5155),
                n = a(2115),
                s = a(6389),
                l = a(6846);
            let o = e => {
                let {
                    className: t,
                    hoverAlign: a = "center",
                    points: o
                } = e, [i, c] = (0, n.useState)(!1), d = (0, n.useRef)(null), {
                    track: u
                } = (0, s.s)(), [x, p] = (0, n.useState)(0);
                return (0, n.useEffect)(() => {
                    d.current && p(d.current.offsetWidth)
                }, [d.current]), (0, n.useEffect)(() => {
                    u("knot_num_show", {
                        knot_num: o
                    })
                }, [o]), (0, r.jsxs)("div", {
                    className: (0, l.cn)("relative inline-block", t),
                    children: [i && (0, r.jsxs)("div", {
                        className: (0, l.cn)("absolute bottom-full z-10 mb-3 w-[280px] rounded-[12px] bg-white p-4 shadow-lg", "left" === a ? "left-0" : "left-1/2 -translate-x-1/2"),
                        children: [(0, r.jsxs)("div", {
                            className: "text-[12px] text-black/65",
                            children: ["Knot is earned through views, emoji reactions, and remixes on your projects—designed to reward creativity and real engagement. Suspicious or inauthentic activity won't count. ", (0, r.jsx)("br", {}), " ", (0, r.jsx)("br", {}), "You’ll be able to cash out your knot in the future."]
                        }), (0, r.jsx)("div", {
                            className: "absolute top-full h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-white",
                            style: {
                                left: "left" === a ? x / 2 : "50%",
                                transform: "translateX(-50%)"
                            }
                        })]
                    }), (0, r.jsxs)("div", {
                        ref: d,
                        className: "bg-brand/10 flex h-[18px] cursor-pointer items-center gap-0.5 rounded-[4px] px-1",
                        onMouseEnter: () => c(!0),
                        onMouseLeave: () => c(!1),
                        children: [(0, r.jsx)("span", {
                            className: "text-brand text-[12px] font-bold",
                            children: o.toLocaleString("en-US", {
                                maximumFractionDigits: 0
                            })
                        }), (0, r.jsx)("span", {
                            className: "text-brand/65 text-[12px]",
                            children: "Knot"
                        })]
                    })]
                })
            }
        },
        8161: (e, t, a) => {
            a.d(t, {
                A: () => m
            });
            var r = a(5155),
                n = a(2115),
                s = a(1021),
                l = function(e) {
                    return e.Image = "image", e.Video = "video", e.Unsupported = "unsupported", e
                }(l || {});
            let o = ["jpg", "jpeg", "png"],
                i = ["mp4"],
                c = e => {
                    var t, a;
                    if (!e || e.includes("placehold.co")) return "image";
                    if (!URL.canParse(e)) return "unsupported";
                    let r = new URL(e).pathname.split("."),
                        n = r.length > 1 && null !== (a = null === (t = r.pop()) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : "";
                    return i.includes(n) ? "video" : o.includes(n) ? "image" : "unsupported"
                },
                d = e => {
                    let {
                        isLoading: t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: "flex h-full w-full flex-col items-center justify-center bg-black/3",
                        children: [(0, r.jsx)("img", {
                            src: "/images/failed-image.svg",
                            alt: "failed",
                            className: "h-[50px] w-[50px]"
                        }), (0, r.jsx)("div", {
                            className: "mt-3 text-[16px] text-black/30",
                            children: t ? "No Cover Detected" : "The cover format is wrong."
                        })]
                    })
                },
                u = () => (0, r.jsxs)("div", {
                    className: "flex h-full w-full flex-col items-center justify-center bg-black/3 pb-10",
                    children: [(0, r.jsx)(s.A, {
                        animationPath: "/animations/lottie-task-loading.json",
                        className: "h-[110px] w-[110px]"
                    }), (0, r.jsx)("div", {
                        className: "mt-[-18px] text-[16px] font-normal text-black/30",
                        children: "Uploading..."
                    })]
                }),
                x = (0, n.memo)(e => {
                    let {
                        url: t,
                        alt: a,
                        className: s
                    } = e, [l, o] = (0, n.useState)(!1);
                    return !t || t.includes("placehold.co") ? (0, r.jsx)(d, {
                        isLoading: !0
                    }) : l ? (0, r.jsx)(d, {
                        isLoading: !1
                    }) : (0, r.jsx)("div", {
                        className: "relative h-full w-full",
                        children: (0, r.jsx)("img", {
                            src: t,
                            alt: null != a ? a : "",
                            loading: "lazy",
                            sizes: "100%",
                            width: "100%",
                            height: "100%",
                            className: "h-full w-full bg-black/3 object-cover ".concat(s),
                            onError: () => {
                                o(!0)
                            }
                        })
                    })
                });
            x.displayName = "ImageCover";
            let p = (0, n.forwardRef)((e, t) => {
                    let {
                        url: a,
                        className: s
                    } = e, l = (0, n.useRef)(null), [o, i] = (0, n.useState)(!1);
                    return (0, n.useEffect)(() => {
                        t && "object" == typeof t && (t.current = {
                            play: () => {
                                if (!e.alwaysAnimated) {
                                    var t;
                                    null === (t = l.current) || void 0 === t || t.play()
                                }
                            },
                            pause: () => {
                                if (!e.alwaysAnimated) {
                                    var t;
                                    null === (t = l.current) || void 0 === t || t.pause()
                                }
                            }
                        })
                    }, [e.alwaysAnimated]), (0, r.jsx)("div", {
                        className: "relative h-full w-full overflow-hidden bg-black/3 ".concat(s),
                        children: o ? (0, r.jsx)(d, {
                            isLoading: !1
                        }) : (0, r.jsx)("video", {
                            ref: l,
                            src: a,
                            className: "h-full w-full object-cover",
                            muted: !0,
                            playsInline: !0,
                            loop: !0,
                            controls: !1,
                            autoPlay: e.alwaysAnimated,
                            onError: () => {
                                i(!0)
                            }
                        })
                    })
                }),
                f = (0, n.memo)((0, n.forwardRef)((e, t) => {
                    if (e.isUploading) return (0, r.jsx)(u, {});
                    switch (c(e.url)) {
                        case "image":
                            return (0, r.jsx)(x, { ...e
                            });
                        case "video":
                            return (0, r.jsx)(p, { ...e,
                                ref: t
                            });
                        case "unsupported":
                            return (0, r.jsx)(d, {
                                isLoading: !1
                            })
                    }
                    return null
                }));
            f.displayName = "MediaCover";
            let m = f
        },
        8788: (e, t, a) => {
            a.d(t, {
                A: () => l
            });
            var r, n = a(2115);

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var r in a)({}).hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                }).apply(null, arguments)
            }
            let l = function(e) {
                return n.createElement("svg", s({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 56 56"
                }, e), r || (r = n.createElement("path", {
                    stroke: "#55644A",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 3,
                    d: "m28 12.388 1.86 2.757c.978 1.451 1.467 2.177 2.125 2.428.41.156.855.189 1.282.093.688-.154 1.276-.802 2.453-2.098l6.757-7.44M28 12.389 25.357 8.47C23.93 6.353 25.447 3.5 28 3.5s4.07 2.853 2.643 4.97zm0 0-1.86 2.757c-.978 1.451-1.467 2.177-2.125 2.428a2.23 2.23 0 0 1-1.282.093c-.688-.154-1.276-.802-2.453-2.098l-6.757-7.44M28 43.613l-1.86-2.757c-.978-1.451-1.467-2.177-2.125-2.428a2.23 2.23 0 0 0-1.282-.093c-.688.154-1.276.802-2.453 2.098l-6.757 7.44M28 43.611l2.643 3.918c1.428 2.117-.09 4.97-2.643 4.97s-4.07-2.853-2.643-4.97zm0 0 1.86-2.757c.978-1.451 1.467-2.177 2.125-2.428a2.23 2.23 0 0 1 1.282-.093c.688.154 1.276.802 2.453 2.098l6.757 7.44M43.612 28l-2.757 1.86c-1.451.978-2.177 1.467-2.428 2.125a2.23 2.23 0 0 0-.093 1.282c.154.688.802 1.276 2.098 2.453l7.44 6.757M43.611 28l3.918-2.643c2.117-1.428 4.97.09 4.97 2.643s-2.853 4.07-4.97 2.643zm0 0-2.757-1.86c-1.451-.978-2.177-1.467-2.428-2.125a2.23 2.23 0 0 1-.093-1.282c.154-.688.802-1.276 2.098-2.453l7.44-6.757M12.387 28l2.757-1.86c1.451-.978 2.177-1.467 2.428-2.125.156-.41.189-.855.093-1.282-.154-.688-.802-1.276-2.098-2.453l-7.44-6.757M12.389 28 8.47 30.643C6.353 32.07 3.5 30.553 3.5 28s2.853-4.07 4.97-2.643zm0 0 2.757 1.86c1.451.978 2.177 1.467 2.428 2.125.156.41.189.855.093 1.282-.154.688-.802 1.276-2.098 2.453l-7.44 6.757"
                })))
            }
        }
    }
]);