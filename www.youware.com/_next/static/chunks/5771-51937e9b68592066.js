try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5bd4a845-031d-4ef1-9eca-d13fbfe73c47", e._sentryDebugIdIdentifier = "sentry-dbid-5bd4a845-031d-4ef1-9eca-d13fbfe73c47")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5771], {
        2997: (e, t, a) => {
            a.d(t, {
                A: () => N
            });
            var l = a(95155),
                n = a(25427),
                r = a(35695),
                s = a(12115);

            function i(e) {
                let {
                    children: t,
                    hoverName: a,
                    buttonRef: n,
                    className: r = "",
                    ...s
                } = e;
                return (0, l.jsxs)("div", {
                    className: "group relative",
                    children: [(0, l.jsx)("button", {
                        ref: n,
                        className: "".concat(r),
                        ...s,
                        children: t
                    }), a && (0, l.jsx)("div", {
                        className: "pointer-events-none absolute -top-11 left-1/2 z-50 w-max -translate-x-1/2 rounded-lg bg-[#2C2C2C] px-[10px] py-2 opacity-0 transition-opacity group-hover:opacity-100 after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-black/80 after:content-['']",
                        children: (0, l.jsx)("span", {
                            className: "text-xs text-white",
                            children: a
                        })
                    })]
                })
            }
            var o = a(10862),
                c = a(56389),
                d = a(25839),
                u = a(26846),
                f = a(47650),
                m = a(88240),
                p = a(62128),
                g = a(48436);

            function x(e) {
                let {
                    onback: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: "flex items-center justify-start gap-2 px-6 pt-5 pb-4",
                    children: [(0, l.jsx)("button", {
                        onClick: t,
                        className: "cursor-pointer text-black",
                        children: (0, l.jsx)(n.M0J, {
                            className: "h-4 w-4"
                        })
                    }), (0, l.jsx)("h2", {
                        className: "text-xl font-bold",
                        children: "Add MCP Server"
                    })]
                })
            }

            function h(e) {
                let {
                    integration: t,
                    onBack: a
                } = e, r = t.configurable_fields[0], {
                    installIntegration: i
                } = (0, d.D)(), [o, u] = (0, s.useState)(t.configured_fields && r.key in t.configured_fields ? t.configured_fields[r.key] : ""), [f, h] = (0, s.useState)(!1), {
                    track: b
                } = (0, c.s)(), [v, y] = (0, s.useState)(""), w = {
                    a: e => (0, l.jsx)("a", { ...e,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    })
                }, j = async () => {
                    if (!o) {
                        y("Cannot be empty");
                        return
                    }
                    let e = {
                        [r.key]: o
                    };
                    try {
                        h(!0), await i(t, e), (0, g.P)({
                            message: "".concat(t.name, " installed successfully"),
                            type: "success"
                        }), b("mcp_config_result", {
                            mcp_tool_name: t.name,
                            result: "success"
                        }), a()
                    } catch (e) {
                        p.Ay.error("Install integration failed", void 0, {
                            error: e
                        }), b("mcp_config_result", {
                            mcp_tool_name: t.name,
                            result: "failed"
                        }), e instanceof Error && e.message ? y(e.message) : (0, g.P)({
                            message: "Failed to validate access key.",
                            type: "error"
                        })
                    } finally {
                        h(!1)
                    }
                };
                return (0, l.jsxs)("div", {
                    className: "flex h-full flex-col",
                    children: [(0, l.jsx)(x, {
                        onback: a
                    }), (0, l.jsxs)("div", {
                        className: "flex flex-1 flex-col gap-6 overflow-y-auto px-6 pb-6",
                        children: [t.configurable_fields.length > 0 && (0, l.jsxs)("div", {
                            className: "flex flex-col gap-4 rounded-xl border border-black/12 p-3",
                            children: [(0, l.jsx)(m.oz, {
                                className: "prose prose-gray max-w-none text-sm",
                                components: w,
                                children: r.description
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex gap-4",
                                    children: [(0, l.jsx)("input", {
                                        type: "text",
                                        value: o,
                                        onChange: e => {
                                            v && y(""), u(e.target.value)
                                        },
                                        placeholder: r.name,
                                        className: "h-8 flex-1 rounded-[10px] border border-black/6 bg-black/3 px-3 text-xs focus:outline-none"
                                    }), (0, l.jsx)("button", {
                                        onClick: j,
                                        className: "bg-brand flex h-8 w-24 items-center justify-center gap-2 rounded-[10px] text-white",
                                        children: f ? (0, l.jsx)(n.xNY, {
                                            className: "h-4 w-4 animate-spin"
                                        }) : "Save"
                                    })]
                                }), v && (0, l.jsx)("span", {
                                    className: "mt-2 px-2 text-xs text-[#D42727]",
                                    children: v
                                })]
                            })]
                        }), t.installation_instructions && (0, l.jsx)("div", {
                            className: "rounded-xl bg-black/3",
                            children: (0, l.jsx)(m.oz, {
                                className: "prose prose-gray w-full max-w-none rounded-xl p-3 text-sm break-words",
                                components: w,
                                children: t.installation_instructions
                            })
                        })]
                    })]
                })
            }

            function b(e) {
                let {
                    onClose: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: "flex items-center justify-between px-6 pt-5 pb-4",
                    children: [(0, l.jsx)("div", {
                        children: (0, l.jsx)("h2", {
                            className: "text-xl font-bold text-black/95",
                            children: "MCP Tool"
                        })
                    }), (0, l.jsx)("button", {
                        onClick: t,
                        className: "cursor-pointer text-black",
                        children: (0, l.jsx)(n.Qks, {
                            className: "h-4 w-4"
                        })
                    })]
                })
            }

            function v(e) {
                let {
                    integration: t,
                    onConfigIntegration: a
                } = e, {
                    name: r,
                    description: i,
                    icon: o,
                    usage_count: u
                } = t, {
                    installIntegration: f,
                    uninstallIntegration: m
                } = (0, d.D)(), [x, h] = (0, s.useState)(!1), {
                    track: b
                } = (0, c.s)(), v = async e => {
                    if (p.Ay.info("Install integration", e), b("mcp_install", {
                            mcp_tool_name: e.name
                        }), e.configurable_fields.length > 0) null == a || a(e);
                    else try {
                        h(!0), await f(e, {}), p.Ay.info("Install integration success", e), (0, g.P)({
                            message: "".concat(e.name, " installed successfully"),
                            type: "success"
                        })
                    } catch (t) {
                        (0, g.P)({
                            message: "Failed to install ".concat(e.name),
                            type: "error"
                        }), p.Ay.error("Install MCP Tool failed", void 0, {
                            error: t
                        })
                    } finally {
                        h(!1)
                    }
                }, y = e => {
                    p.Ay.info("Edit integration", e), null == a || a(e)
                }, w = async e => {
                    b("mcp_uninstall", {
                        mcp_tool_name: e.name
                    }), p.Ay.info("Uninstall integration", e);
                    try {
                        h(!0), await m(e), p.Ay.info("Uninstall integration success", e), (0, g.P)({
                            message: "".concat(e.name, " uninstalled successfully"),
                            type: "success"
                        })
                    } catch (t) {
                        (0, g.P)({
                            message: "Failed to uninstall ".concat(e.name),
                            type: "error"
                        }), p.Ay.error("Uninstall MCP Tool failed", void 0, {
                            error: t
                        })
                    } finally {
                        h(!1)
                    }
                };
                return (0, l.jsxs)("div", {
                    className: "relative flex flex-col rounded-xl border border-black/12 bg-white p-4",
                    children: [(0, l.jsxs)("div", {
                        className: "mb-6 flex items-start justify-between",
                        children: [o ? (0, l.jsx)("img", {
                            src: o,
                            alt: r,
                            className: "h-8 w-8 rounded-lg border border-black/10"
                        }) : (0, l.jsx)(n.MgH, {
                            className: "h-8 w-8 rounded-lg border border-black/10 text-black/60"
                        }), t.is_configured ? (0, l.jsxs)("div", {
                            className: "flex gap-1",
                            children: [t.configurable_fields.length > 0 && (0, l.jsx)("button", {
                                onClick: () => y(t),
                                className: "flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg bg-black/6 hover:bg-black/12",
                                children: (0, l.jsx)(n.r0D, {
                                    className: "h-4 w-4 text-black"
                                })
                            }), (0, l.jsx)("button", {
                                onClick: () => w(t),
                                className: "flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg bg-[#D427271F] hover:bg-[#D427274D]",
                                children: x ? (0, l.jsx)(n.xNY, {
                                    className: "h-4 w-4 animate-spin text-[#D42727F2]"
                                }) : (0, l.jsx)(n.lzB, {
                                    className: "h-4 w-4 text-[#D42727F2]"
                                })
                            })]
                        }) : (0, l.jsx)("button", {
                            onClick: () => v(t),
                            className: "bg-brand flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg text-white hover:bg-[#4B5841]",
                            children: x ? (0, l.jsx)(n.xNY, {
                                className: "h-4 w-4 animate-spin text-white"
                            }) : (0, l.jsx)(n.Ld_, {
                                className: "h-4 w-4 text-white"
                            })
                        })]
                    }), (0, l.jsx)("h3", {
                        className: "mb-2 text-sm font-bold text-black/95",
                        children: r
                    }), (0, l.jsx)("p", {
                        className: "mb-2 line-clamp-3 h-13 text-xs text-black/65",
                        children: i
                    }), (0, l.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, l.jsxs)("div", {
                            className: "flex items-center gap-1 text-black/30",
                            children: [(0, l.jsx)(n.LZX, {
                                className: "h-4 w-4"
                            }), (0, l.jsx)("span", {
                                className: "text-xs",
                                children: u
                            })]
                        }), t.configurable_fields.length > 0 && (0, l.jsx)("div", {
                            className: "flex items-center rounded-sm bg-[#55644A1A] px-[5px] py-[2.5px]",
                            children: (0, l.jsx)("span", {
                                className: "text-brand text-[10px]",
                                children: "Token Required"
                            })
                        })]
                    })]
                })
            }

            function y(e) {
                let {
                    installedIntegrations: t,
                    uninstalledIntegrations: a,
                    onConfigIntegration: n
                } = e;
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("div", {
                        className: "flex-1 overflow-y-auto p-6",
                        children: [t.length > 0 && (0, l.jsx)("div", {
                            className: "mb-6",
                            children: (0, l.jsx)("div", {
                                className: "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3",
                                children: t.map((e, t) => (0, l.jsx)(v, {
                                    integration: e,
                                    onConfigIntegration: n
                                }, t))
                            })
                        }), t.length > 0 && a.length > 0 && (0, l.jsx)("div", {
                            className: "my-7 h-px w-full bg-black/6"
                        }), a.length > 0 && (0, l.jsx)("div", {
                            children: (0, l.jsx)("div", {
                                className: "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3",
                                children: a.map((e, t) => (0, l.jsx)(v, {
                                    integration: e,
                                    onConfigIntegration: n
                                }, t))
                            })
                        }), (0, l.jsx)("p", {
                            className: "mt-6 text-center text-sm text-black/30",
                            children: "More MCP Tools Coming Soon"
                        })]
                    })
                })
            }

            function w(e) {
                let {
                    onClose: t,
                    onConfigIntegration: a
                } = e, {
                    availableIntegrations: r,
                    fetchAvailableIntegrations: i
                } = (0, d.D)(), [o, c] = (0, s.useState)(!0), [u, f] = (0, s.useState)(!1);
                (0, s.useEffect)(() => {
                    (async () => {
                        c(!0);
                        try {
                            await i(), f(!1)
                        } catch (e) {
                            f(!0)
                        } finally {
                            c(!1)
                        }
                    })()
                }, [i]);
                let m = !o && !u && r.length > 0,
                    p = [],
                    g = [];
                return m && (p = r.filter(e => e.is_configured), g = r.filter(e => !e.is_configured)), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(b, {
                        onClose: t
                    }), m && (0, l.jsx)(y, {
                        installedIntegrations: p,
                        uninstalledIntegrations: g,
                        onConfigIntegration: a
                    }), o && (0, l.jsxs)("div", {
                        className: "flex flex-1 flex-col items-center justify-center gap-2",
                        children: [(0, l.jsx)(n.xNY, {
                            className: "h-10 w-10 animate-spin text-black/65"
                        }), (0, l.jsx)("p", {
                            className: "text-xs text-black/65",
                            children: "Loading..."
                        })]
                    }), !o && (u || 0 === r.length) && (0, l.jsxs)("div", {
                        className: "flex flex-1 flex-col items-center justify-center gap-4",
                        children: [(0, l.jsx)(n.sFm, {
                            className: "h-10 w-10 text-[#D42727]"
                        }), (0, l.jsx)("p", {
                            className: "text-xs text-black/65",
                            children: "Failed to load. Please try again."
                        }), (0, l.jsx)("button", {
                            className: "rounded-lg bg-black/6 px-2 py-[6px] text-sm text-black/95",
                            onClick: () => {
                                f(!1), c(!0), i()
                            },
                            children: "Retry"
                        })]
                    })]
                })
            }

            function j(e) {
                let {
                    isOpen: t,
                    onClose: a
                } = e, [n, r] = (0, s.useState)(null), [i, o] = (0, s.useState)(!1), {
                    track: d
                } = (0, c.s)();
                if ((0, s.useEffect)(() => (o(!0), d("mcp_marketplace_exposure", {}), () => o(!1)), []), (0, s.useEffect)(() => {
                        if (t) return document.body.style.overflow = "hidden", () => {
                            document.body.style.overflow = "auto"
                        }
                    }, [t]), !t || !i) return null;
                let u = (0, l.jsx)("div", {
                    className: "fixed inset-0 z-[50] flex items-center justify-center overflow-hidden bg-black/20 shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)]",
                    onClick: () => !n && a(),
                    children: (0, l.jsx)("div", {
                        className: "relative mx-auto flex h-[90vh] w-[95%] max-w-4xl flex-col rounded-2xl bg-white shadow-lg sm:h-[600px] sm:w-[540px] md:h-[650px] md:w-[720px] lg:h-[700px] lg:w-[900px]",
                        onClick: e => e.stopPropagation(),
                        children: n ? (0, l.jsx)(h, {
                            integration: n,
                            onBack: () => r(null)
                        }) : (0, l.jsx)(w, {
                            onClose: a,
                            onConfigIntegration: r
                        })
                    })
                });
                return (0, f.createPortal)(u, document.body)
            }
            let _ = e => {
                let {
                    name: t,
                    icon: a,
                    isSelected: r = !1,
                    onClick: s
                } = e;
                return (0, l.jsxs)("div", {
                    onClick: s,
                    className: "flex cursor-pointer items-center justify-between p-2 hover:rounded-lg hover:bg-black/3",
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, l.jsx)("img", {
                            src: a,
                            alt: t,
                            className: "h-5 w-5 rounded-[4px] border border-black/3"
                        }), (0, l.jsx)("span", {
                            className: "text-sm font-normal text-black/95",
                            children: t
                        })]
                    }), r ? (0, l.jsx)(n.Ked, {
                        size: 16,
                        className: "text-brand"
                    }) : (0, l.jsx)(n.$OD, {
                        size: 16,
                        className: "text-black/12"
                    })]
                })
            };

            function k(e) {
                let {
                    isOpen: t,
                    onClose: a,
                    triggerRef: r,
                    onAdd: i
                } = e, o = (0, s.useRef)(null), [u, m] = (0, s.useState)({
                    top: 0,
                    left: 0
                }), {
                    installedIntegrations: p,
                    toggleIntegration: g,
                    isIntegrationSelected: x
                } = (0, d.D)(), [h, b] = (0, s.useState)(!1), {
                    track: v
                } = (0, c.s)(), y = e => {
                    v("mcp_select_tool", {
                        is_enable: !x(e),
                        mcp_tool_name: e.name
                    }), g(e)
                };
                (0, s.useEffect)(() => (b(!0), () => b(!1)), []), (0, s.useEffect)(() => {
                    if (t) return document.body.style.overflow = "hidden", () => {
                        document.body.style.overflow = "auto"
                    }
                }, [t]), (0, s.useEffect)(() => {
                    t && o.current && (null == p ? void 0 : p.length) > 0 && setTimeout(w, 0)
                }, [t, p]);
                let w = () => {
                    if (!(null == r ? void 0 : r.current) || !o.current) return;
                    let e = r.current.getBoundingClientRect(),
                        t = o.current.getBoundingClientRect(),
                        a = {
                            top: e.top - t.height - 8,
                            left: e.left
                        };
                    a.top < 10 && (a.top = e.bottom + 8), a.left + t.width > window.innerWidth - 10 && (a.left = window.innerWidth - t.width - 10), m(a)
                };
                if (!t || !h) return null;
                let j = p.length > 0,
                    k = (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: "fixed inset-0 z-[90]",
                            onClick: a
                        }), (0, l.jsxs)("div", {
                            ref: o,
                            className: "fixed z-[95] flex w-[230px] flex-col items-stretch rounded-[10px] border border-black/3 bg-white p-1 shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)]",
                            style: {
                                left: "".concat(u.left, "px"),
                                top: "".concat(u.top, "px")
                            },
                            children: [(0, l.jsxs)("div", {
                                className: "flex cursor-pointer items-center justify-between px-2 py-2 hover:rounded-lg hover:bg-black/3",
                                onClick: i,
                                children: [(0, l.jsx)("h2", {
                                    className: "text-sm font-bold text-black/95",
                                    children: "MCP Tool"
                                }), (0, l.jsx)("button", {
                                    className: "flex h-4 w-4 cursor-pointer items-center justify-center text-black/95",
                                    children: (0, l.jsx)(n.Ld_, {
                                        size: 16
                                    })
                                })]
                            }), (0, l.jsx)("div", {
                                className: "my-1 h-px bg-black/6"
                            }), j && (0, l.jsx)("div", {
                                className: "flex flex-col",
                                children: p.map((e, t) => (0, l.jsx)(_, {
                                    name: e.name,
                                    icon: e.icon,
                                    isSelected: x(e),
                                    onClick: () => y(e)
                                }, t))
                            })]
                        })]
                    });
                return (0, f.createPortal)(k, document.body)
            }

            function N(e) {
                let {
                    source: t,
                    className: a
                } = e, {
                    user: f
                } = (0, o.A)(), m = (0, r.useRouter)(), p = (0, s.useRef)(null), {
                    installedIntegrations: g,
                    selectedIntegrations: x,
                    fetchInstalledIntegrations: h
                } = (0, d.D)(), [b, v] = (0, s.useState)(!1), [y, w] = (0, s.useState)(!1), {
                    track: _
                } = (0, c.s)();
                return (0, s.useEffect)(() => {
                    f && h()
                }, [f, h]), (0, l.jsxs)("div", {
                    className: "relative",
                    children: [(0, l.jsxs)(i, {
                        buttonRef: p,
                        className: (0, u.cn)("flex cursor-pointer items-center justify-center gap-1 border px-2 transition-colors hover:bg-black/3", a, b && "bg-black/6"),
                        onClick: () => {
                            if (_("mcp_enter_click", {
                                    click_from: t
                                }), !f) {
                                m.push("/login");
                                return
                            }
                            g && g.length > 0 ? v(!0) : w(!0)
                        },
                        hoverName: "MCP Tool",
                        "aria-label": "Connect MCP Tool",
                        children: [(0, l.jsx)(n.qX3, {
                            className: "h-4 w-4 text-black/95"
                        }), f && x.length > 0 && (0, l.jsx)("span", {
                            className: "pt-0.5 text-sm text-black/95",
                            children: x.length
                        })]
                    }), (0, l.jsx)(k, {
                        isOpen: b,
                        onClose: () => {
                            v(!1)
                        },
                        triggerRef: p,
                        onAdd: () => {
                            _("mcp_add_enter_click", {
                                click_from: t
                            }), v(!1), w(!0)
                        }
                    }), y && (0, l.jsx)(j, {
                        isOpen: y,
                        onClose: () => {
                            w(!1)
                        }
                    })]
                })
            }
        },
        3561: (e, t, a) => {
            a.d(t, {
                u: () => s
            });
            var l = a(12115),
                n = a(7307),
                r = a(10862);
            let s = () => {
                let [e, t] = (0, l.useState)(null), [a, s] = (0, l.useState)(null), [i, o] = (0, l.useState)(!1), [c, d] = (0, l.useState)(0), {
                    user: u
                } = (0, r.A)(), f = null, m = e => {
                    let t = new Date(1e3 * e),
                        a = new Date,
                        l = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    return t.toDateString() === a.toDateString() ? t.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: !0,
                        timeZone: l
                    }) : t.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: !0,
                        timeZone: l
                    })
                }, p = async function() {
                    let a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (u) {
                        if (f) return f;
                        if (!i) {
                            if (o(!0), !a && e) {
                                let e = Date.now();
                                if (e - c < 1e4) return;
                                d(e)
                            }
                            return f = new Promise(async (e, a) => {
                                var l, r, i, c, d, u, p, g, x;
                                let h = await (0, n.Q)();
                                if (o(!1), !h.data || !h.data.subscription.quotas) {
                                    e(null);
                                    return
                                }
                                t(null !== (c = h.data) && void 0 !== c ? c : null);
                                let b = null !== (d = null === (l = h.data) || void 0 === l ? void 0 : l.subscription.total_remaining) && void 0 !== d ? d : 0,
                                    v = null !== (u = null === (r = h.data) || void 0 === r ? void 0 : r.subscription.quotas.find(e => "commit" === e.type)) && void 0 !== u ? u : null,
                                    y = null !== (p = null == v ? void 0 : v.reset_at) && void 0 !== p ? p : new Date().getTime() / 1e3 + 86400,
                                    w = null !== (g = null == v ? void 0 : v.limit) && void 0 !== g ? g : 0,
                                    j = {
                                        commit: {
                                            enabled: b > 0,
                                            free_count: b,
                                            will_update_at: m(y),
                                            limit: w
                                        },
                                        is_vip: null !== (x = null === (i = h.data) || void 0 === i ? void 0 : i.subscription.is_vip) && void 0 !== x && x
                                    };
                                s(j), f = null, e(j)
                            })
                        }
                    }
                };
                (0, l.useEffect)(() => {
                    p()
                }, [u]);
                let g = async () => await p(!0);
                return {
                    isLoading: i,
                    subscriptionInfo: e,
                    getSubscriptionInfo: p,
                    refresh: g,
                    usageInfo: a
                }
            }
        },
        4530: (e, t, a) => {
            a.d(t, {
                F: () => n
            });
            var l = a(25427);
            let n = e => {
                switch (e) {
                    case "code":
                        return l.lrj;
                    case "image":
                        return l.hue;
                    case "pdf":
                        return l.HKL;
                    case "audio":
                        return l.J9y;
                    default:
                        return l.n1O
                }
            }
        },
        6058: (e, t, a) => {
            a.d(t, {
                p: () => n
            });
            var l = a(34477);
            let n = (0, l.createServerReference)("60369e09b92a35b7374b6448bace58b0c6c7d3acc6", l.callServer, void 0, l.findSourceMapURL, "deployProject")
        },
        7307: (e, t, a) => {
            a.d(t, {
                Q: () => n
            });
            var l = a(34477);
            let n = (0, l.createServerReference)("406f8697d880446f65feeacc85ab94a969a49f9ded", l.callServer, void 0, l.findSourceMapURL, "fetchSubscriptionInfo")
        },
        25839: (e, t, a) => {
            a.d(t, {
                D: () => m
            });
            var l = a(65453),
                n = a(46786),
                r = a(34477);
            let s = (0, r.createServerReference)("00d2805bb952f64723b20503aea99f893ccf8b899d", r.callServer, void 0, r.findSourceMapURL, "getAvailableIntegrations"),
                i = (0, r.createServerReference)("00e34e7dccd781cec78493db3f515961d56b290895", r.callServer, void 0, r.findSourceMapURL, "getInstalledIntegrations"),
                o = (0, r.createServerReference)("60f273902ec442633f8f87cefbe4d0a44381ab73fe", r.callServer, void 0, r.findSourceMapURL, "installIntegration"),
                c = (0, r.createServerReference)("40590f6d38ac7e0cf7e913e41a15a1d4dd01855dd9", r.callServer, void 0, r.findSourceMapURL, "uninstallIntegration");
            var d = a(62128);
            let u = (e, t) => ({
                    fetchAvailableIntegrations: async () => {
                        if (!(t().availableIntegrations.length > 0)) try {
                            let t = await s();
                            e({
                                availableIntegrations: t.data || []
                            })
                        } catch (e) {
                            d.Ay.error("Failed to fetch available integrations", void 0, {
                                error: e
                            })
                        }
                    },
                    fetchInstalledIntegrations: async () => {
                        if (!(t().installedIntegrations.length > 0)) try {
                            let t = (await i()).data || [];
                            e(e => {
                                let a = t.map(e => e.integration_id);
                                return {
                                    installedIntegrations: t,
                                    selectedIntegrations: 0 === e.selectedIntegrations.length ? a : e.selectedIntegrations.filter(e => a.includes(e))
                                }
                            })
                        } catch (e) {
                            d.Ay.error("Failed to fetch installed integrations", void 0, {
                                error: e
                            })
                        }
                    },
                    installIntegration: async (t, a) => {
                        try {
                            let l = await o(t.integration_id, a);
                            if (0 !== l.code) {
                                if (40304 === l.code) throw Error("".concat(t.name, " API key is invalid"));
                                throw Error("")
                            }
                            e(e => {
                                let a = e.availableIntegrations.map(e => e.integration_id === t.integration_id ? { ...e,
                                        is_configured: !0,
                                        usage_count: e.usage_count + 1
                                    } : e),
                                    l = a.filter(e => e.is_configured),
                                    n = [...e.selectedIntegrations];
                                return e.selectedIntegrations.some(e => e === t.integration_id) || (n = [...e.selectedIntegrations, t.integration_id]), {
                                    availableIntegrations: a,
                                    installedIntegrations: l,
                                    selectedIntegrations: n
                                }
                            })
                        } catch (e) {
                            throw d.Ay.error("Failed to install integration", void 0, {
                                error: e
                            }), e
                        }
                    },
                    uninstallIntegration: async t => {
                        try {
                            await c(t.integration_id), e(e => {
                                let a = e.availableIntegrations.map(e => e.integration_id === t.integration_id ? { ...e,
                                        is_configured: !1,
                                        usage_count: e.usage_count - 1 < 0 ? 0 : e.usage_count - 1,
                                        configured_fields: {}
                                    } : e),
                                    l = a.filter(e => e.is_configured),
                                    n = e.selectedIntegrations.filter(e => e !== t.integration_id);
                                return {
                                    availableIntegrations: a,
                                    installedIntegrations: l,
                                    selectedIntegrations: n
                                }
                            })
                        } catch (e) {
                            throw d.Ay.error("Failed to uninstall integration", void 0, {
                                error: e
                            }), e
                        }
                    },
                    toggleIntegration: t => {
                        e(e => {
                            let a;
                            return {
                                selectedIntegrations: e.selectedIntegrations.some(e => e === t.integration_id) ? e.selectedIntegrations.filter(e => e !== t.integration_id) : [...e.selectedIntegrations, t.integration_id]
                            }
                        })
                    },
                    isIntegrationSelected: e => t().selectedIntegrations.some(t => t === e.integration_id)
                }),
                f = {
                    availableIntegrations: [],
                    installedIntegrations: [],
                    selectedIntegrations: []
                },
                m = (0, l.v)()((0, n.Zr)((e, t, a) => ({ ...f,
                    ...u(e, t, a)
                }), {
                    name: "integration-storage",
                    partialize: e => ({
                        selectedIntegrations: e.selectedIntegrations
                    })
                }))
        },
        34326: (e, t, a) => {
            a.d(t, {
                Q: () => i
            });
            var l = a(96834);
            async function n(e) {
                return await (0, l.qM)("/v1/files/upload", {
                    method: "POST",
                    data: e
                })
            }
            async function r(e) {
                return await (0, l.qM)("/v1/files/list_urls", {
                    method: "POST",
                    data: e
                })
            }
            async function s(e, t) {
                if (!e.length) return [];
                let a = e.map(e => ({
                    file_name: e.name,
                    file_size: e.size,
                    mime_type: e.type
                }));
                try {
                    let l = await n({
                        files: a,
                        event_type: t.eventType,
                        is_public: t.isPublic || !1
                    });
                    if (!l.data || !Array.isArray(l.data.upload_infos) || l.data.upload_infos.length !== e.length) throw Error("Invalid response from server: Missing or incorrect upload information");
                    let s = e.map((e, t) => {
                            let a = l.data.upload_infos[t],
                                n = new FormData;
                            return Object.entries(a.fields || {}).forEach(e => {
                                let [t, a] = e;
                                n.append(t, a)
                            }), n.append("file", e), fetch(a.upload_url, {
                                method: a.method,
                                body: n
                            }).then(e => {
                                if (!e.ok) throw Error("Upload failed with status ".concat(e.status, ": ").concat(e.statusText));
                                return {
                                    file_id: a.file_id
                                }
                            })
                        }),
                        i = await Promise.all(s);
                    if (t.needUrl) {
                        let e = i.map(e => e.file_id),
                            t = await r({
                                file_ids: e
                            });
                        t.data && Array.isArray(t.data.file_urls) && (i = i.map((e, a) => {
                            var l, n;
                            return { ...e,
                                file_url: null === (n = t.data) || void 0 === n ? void 0 : null === (l = n.file_urls) || void 0 === l ? void 0 : l[a]
                            }
                        }))
                    }
                    return i
                } catch (e) {
                    throw console.error("File upload process failed:", e), e instanceof Error ? e : Error("Unknown error during file upload process")
                }
            }
            async function i(e, t) {
                return (await s([e], t))[0]
            }
        },
        38618: (e, t, a) => {
            a.d(t, {
                p: () => n
            });
            var l = a(48436);
            let n = function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (!(null == e ? void 0 : e.commit.enabled)) {
                    if (t) {
                        let t = (null == e ? void 0 : e.is_vip) ? "All tasks for today are used. New tasks available at ".concat(null == e ? void 0 : e.commit.will_update_at) : "You've used up your free tasks for this month. Upgrade for more tasks.";
                        (0, l.P)({
                            message: t,
                            type: "error"
                        })
                    }
                    return !1
                }
                return !0
            }
        },
        40146: (e, t, a) => {
            a.d(t, {
                A: () => s
            });
            var l = a(95155),
                n = a(12115),
                r = a(48436);

            function s(e) {
                var t;
                let {
                    options: a,
                    onFilesReceived: s
                } = e, {
                    allowedExtensions: i,
                    maxAttachments: o,
                    currentCount: c
                } = a, d = (0, n.useRef)(null), u = (0, n.useRef)(s);
                (0, n.useEffect)(() => {
                    u.current = s
                }, [s]);
                let f = (0, n.useCallback)(e => {
                        var t;
                        let a = e.target.files;
                        a && 0 !== a.length && (null === (t = u.current) || void 0 === t || t.call(u, Array.from(a)), d.current && (d.current.value = ""))
                    }, []),
                    m = null !== (t = null == i ? void 0 : i.join(",")) && void 0 !== t ? t : "";
                return {
                    UploadInput: (0, n.useMemo)(() => {
                        let e = e => (0, l.jsx)("input", {
                            type: "file",
                            multiple: void 0 === e.multiple || e.multiple,
                            ref: d,
                            style: {
                                display: "none"
                            },
                            accept: m,
                            onChange: f,
                            ...e
                        }, "file-input");
                        return e.displayName = "UploadInput", e
                    }, [m, f]),
                    handlePlusClick: () => {
                        var e;
                        if (o && o <= (null != c ? c : 0)) {
                            (0, r.P)({
                                message: "You can only have up to ".concat(o, " attachments"),
                                type: "error"
                            });
                            return
                        }
                        null === (e = d.current) || void 0 === e || e.click()
                    }
                }
            }
        },
        44684: (e, t, a) => {
            a.d(t, {
                A: () => c
            });
            var l = a(95155),
                n = a(25427),
                r = a(12115),
                s = a(26846),
                i = a(4530);
            let o = e => {
                    let {
                        attachment: t,
                        onRetry: a
                    } = e;
                    if ("uploading" === t.status || "pending" === t.status) return (0, l.jsx)(n.Fat, {
                        className: "h-4 w-4 flex-shrink-0 animate-spin text-black/65"
                    });
                    if ("error" === t.status) return (0, l.jsx)(n.sFm, {
                        className: "h-4 w-4 flex-shrink-0 text-red-500",
                        onClick: () => a(t.id || "")
                    });
                    if ("image" === t.type) return (0, l.jsx)("img", {
                        src: t.icon,
                        alt: "Attachment",
                        className: "h-8 w-8 flex-shrink-0 rounded-[8px] border-[0.5px] border-black/3 object-cover"
                    });
                    let r = t.icon || (0, i.F)(t.type);
                    return (0, l.jsx)(r, {
                        className: "h-4 w-4 flex-shrink-0 object-contain"
                    })
                },
                c = e => {
                    let {
                        attachments: t,
                        onDelete: a,
                        onRetry: i,
                        className: c = "",
                        editable: d = !0
                    } = e, [u, f] = (0, r.useState)(null), [m, p] = (0, r.useState)(!1), [g, x] = (0, r.useState)(!1), h = (0, r.useRef)(null);
                    return ((0, r.useEffect)(() => {
                        let e = () => {
                                let e = h.current;
                                e && (p(e.scrollLeft > 0), x(e.scrollLeft < e.scrollWidth - e.clientWidth - 1))
                            },
                            t = h.current;
                        return t && (t.addEventListener("scroll", e), e(), setTimeout(e, 100)), () => {
                            t && t.removeEventListener("scroll", e)
                        }
                    }, [t]), 0 === t.length) ? null : (0, l.jsxs)("div", {
                        className: "relative overflow-visible",
                        children: [(0, l.jsx)("div", {
                            ref: h,
                            className: "no-scrollbar flex flex-nowrap gap-2 overflow-x-auto pt-1 pr-1 ".concat(c),
                            children: t.map((e, t) => (0, l.jsxs)("div", {
                                className: (0, s.cn)("relative flex h-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-[8px] bg-black/6", "image" === e.type ? "w-8" : "max-w-[120px] gap-1 px-2"),
                                onMouseEnter: () => f(e.id || null),
                                onMouseLeave: () => f(null),
                                children: [(0, l.jsx)(o, {
                                    attachment: e,
                                    onRetry: i
                                }), "image" !== e.type && (0, l.jsx)("span", {
                                    className: "truncate text-sm font-normal text-black/65",
                                    children: e.name || e.type || ""
                                }), d && u === e.id && (0, l.jsx)("button", {
                                    className: "absolute -top-1 -right-1 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-[#3D3D3D] text-white",
                                    onClick: () => a(e.id || ""),
                                    children: (0, l.jsx)(n.Qks, {
                                        className: "h-3 w-3"
                                    })
                                })]
                            }, t))
                        }), m && (0, l.jsx)("div", {
                            className: "absolute top-2 left-0 z-10 h-6 w-6 cursor-pointer rounded-full bg-white p-1.5 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]",
                            onClick: () => {
                                h.current && (h.current.scrollLeft -= 200)
                            },
                            children: (0, l.jsx)(n.M0J, {
                                className: "h-3 w-3"
                            })
                        }), g && (0, l.jsx)("div", {
                            className: "absolute top-2 right-0 z-10 h-6 w-6 cursor-pointer rounded-full bg-white p-1.5 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]",
                            onClick: () => {
                                h.current && (h.current.scrollLeft += 200)
                            },
                            children: (0, l.jsx)(n.D8V, {
                                className: "h-3 w-3"
                            })
                        })]
                    })
                }
        },
        47511: (e, t, a) => {
            a.d(t, {
                g: () => n
            }), a(12115);
            let l = "yw-create-web-content-key",
                n = () => ({
                    createWeb: async (e, t) => {
                        let a = {
                            userPrompt: e,
                            attachments: t,
                            createdTime: Date.now()
                        };
                        localStorage.setItem(l, JSON.stringify(a))
                    },
                    getCreateWebContent: () => {
                        let e = localStorage.getItem(l);
                        return e ? JSON.parse(e) : null
                    },
                    clearCreateWebContent: () => {
                        localStorage.removeItem(l)
                    }
                })
        },
        49512: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var l = a(48436),
                n = a(56289),
                r = a(40146),
                s = a(12115);

            function i(e) {
                let {
                    options: t,
                    handleFile: a
                } = e, i = e => {
                    (function(e, t) {
                        let {
                            allowedExtensions: a,
                            maxAttachments: n,
                            currentCount: r
                        } = t, s = e.filter(e => {
                            var t;
                            if (!a || 0 === a.length) return !0;
                            let l = "." + (null === (t = e.name.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase());
                            return a.includes(l)
                        });
                        if (0 === s.length) return [];
                        if (!n) return s;
                        let i = n - (null != r ? r : 0);
                        return i <= 0 ? ((0, l.P)({
                            message: "You can only have up to ".concat(n, " attachments"),
                            type: "error"
                        }), []) : s.length > i ? ((0, l.P)({
                            message: "Only adding ".concat(i, " of ").concat(s.length, " files (maximum ").concat(n, " attachments)"),
                            type: "warning"
                        }), s.slice(0, i)) : s
                    })(e, t).forEach(e => a(e))
                }, {
                    UploadInput: o,
                    handlePlusClick: c
                } = (0, r.A)({
                    options: t,
                    onFilesReceived: i
                }), {
                    handlePaste: d
                } = function(e) {
                    let {
                        onFilesReceived: t
                    } = e;
                    return {
                        handlePaste: (0, s.useCallback)(e => {
                            let a = e.clipboardData.items;
                            if (a && a.length > 0) {
                                let l = [];
                                for (let t = 0; t < a.length; t++) {
                                    let n = a[t];
                                    if ("file" === n.kind) {
                                        let t = n.getAsFile();
                                        t && (l.push(t), e.preventDefault())
                                    }
                                }
                                l.length > 0 && t(l)
                            }
                        }, [t])
                    }
                }({
                    onFilesReceived: i
                }), {
                    handleDragLeave: u,
                    handleDragOver: f,
                    handleDrop: m,
                    DragOverlay: p
                } = (0, n.A)({
                    onFilesReceived: i
                });
                return {
                    UploadInput: o,
                    handlePlusClick: c,
                    handlePaste: d,
                    dropHandlers: {
                        onDragLeave: u,
                        onDragOver: f,
                        onDrop: m
                    },
                    DragOverlay: p
                }
            }
        },
        56289: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var l = a(95155),
                n = a(12115);
            let r = async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return new Promise(a => {
                        if (e.isFile) e.file(e => {
                            Object.defineProperty(e, "webkitRelativePath", {
                                value: t + e.name
                            }), a([e])
                        });
                        else if (e.isDirectory) {
                            let l = e.createReader(),
                                n = [],
                                s = () => {
                                    l.readEntries(async l => {
                                        if (l.length > 0) {
                                            for (let a of (await Promise.all(l.map(a => r(a, t + e.name + "/"))))) n.push(...a);
                                            s()
                                        } else a(n)
                                    })
                                };
                            s()
                        } else a([])
                    })
                },
                s = async e => {
                    let t = [],
                        a = Array.from(e);
                    for (let e of (await Promise.all(a.map(e => {
                            let t = e.webkitGetAsEntry();
                            return t ? r(t) : Promise.resolve([])
                        })))) t.push(...e);
                    return t
                };

            function i(e) {
                let {
                    onFilesReceived: t
                } = e, [a, r] = (0, n.useState)(!1);
                return {
                    handleDragLeave: e => {
                        e.preventDefault(), e.stopPropagation(), r(!1)
                    },
                    handleDragOver: e => {
                        e.preventDefault(), e.stopPropagation(), r(!0)
                    },
                    handleDrop: async e => {
                        e.preventDefault(), e.stopPropagation(), r(!1);
                        let a = e.dataTransfer.items;
                        if (a && a.length > 0) try {
                            let e = await s(a);
                            e.length > 0 && t(e)
                        } catch (e) {
                            console.error("== handleDrop error", e)
                        } else {
                            let a = e.dataTransfer.files;
                            a.length > 0 && t(Array.from(a))
                        }
                    },
                    DragOverlay: e => {
                        let {
                            children: t,
                            className: n
                        } = e;
                        return a ? (0, l.jsx)("div", {
                            className: "border-brand/50 absolute inset-0 z-40 flex items-center justify-center rounded-[20px] border border-dashed bg-white/95 ".concat(n || ""),
                            children: t || (0, l.jsx)("div", {
                                className: "text-center text-black/70",
                                children: "Drop files here to attach"
                            })
                        }) : null
                    }
                }
            }
        },
        87895: (e, t, a) => {
            a.d(t, {
                j: () => o
            });
            var l = a(12115),
                n = a(4530),
                r = a(30212),
                s = a(48436),
                i = a(34326);
            let o = () => {
                let [e, t] = (0, l.useState)([]), a = async e => (await (0, i.Q)(e, {
                    eventType: "source_code",
                    needUrl: !1,
                    isPublic: !0
                })).file_id, o = async e => {
                    let t = await (0, i.Q)(e, {
                        eventType: "image",
                        isPublic: !0,
                        needUrl: !0
                    });
                    return {
                        file_id: t.file_id,
                        file_url: t.file_url || ""
                    }
                }, c = async e => (await (0, i.Q)(e, {
                    eventType: "document",
                    isPublic: !0
                })).file_id, d = (0, l.useCallback)(e => {
                    t(t => t.map(t => t.id === e ? { ...t,
                        status: "uploading"
                    } : t))
                }, []), {
                    addTask: u,
                    removeTask: f,
                    resetQueue: m
                } = function() {
                    let {
                        maxConcurrentUploads: e = 3,
                        onTaskStart: t,
                        onTaskComplete: a,
                        onTaskError: n
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [r, s] = (0, l.useState)([]), [i, o] = (0, l.useState)(new Set), c = (0, l.useCallback)(async () => {
                        if (0 === r.length || i.size >= e) return;
                        let l = r[0];
                        s(r.slice(1));
                        let c = new Set(i);
                        c.add(l.id), o(c);
                        try {
                            null == t || t(l.id, l.data);
                            let e = await l.execute();
                            null == a || a(l.id, l.data, e)
                        } catch (e) {
                            console.error("Task failed:", e), null == n || n(l.id, l.data, e)
                        } finally {
                            let e = new Set(i);
                            e.delete(l.id), o(e)
                        }
                    }, [r, i, e, t, a, n]);
                    (0, l.useEffect)(() => {
                        c()
                    }, [r, i, c]);
                    let d = (0, l.useCallback)(e => (s(t => [...t, e]), e.id), []),
                        u = (0, l.useCallback)(e => {
                            s(t => {
                                let a = t.find(t => t.id === e);
                                if (a && !i.has(e)) {
                                    var l;
                                    null === (l = a.cancel) || void 0 === l || l.call(a)
                                }
                                return t.filter(t => t.id !== e)
                            })
                        }, [i]),
                        f = (0, l.useCallback)(() => {
                            r.forEach(e => {
                                if (!i.has(e.id)) {
                                    var t;
                                    null === (t = e.cancel) || void 0 === t || t.call(e)
                                }
                            }), s([])
                        }, [r, i]);
                    return {
                        queue: r,
                        activeTasks: i,
                        addTask: d,
                        removeTask: u,
                        resetQueue: f,
                        isPending: r.length > 0 || i.size > 0
                    }
                }({
                    maxConcurrentUploads: 2,
                    onTaskStart: d,
                    onTaskComplete: (0, l.useCallback)((e, a, l) => {
                        t(t => t.map(t => t.id === e ? { ...t,
                            status: "complete",
                            ...l || {}
                        } : t))
                    }, []),
                    onTaskError: (0, l.useCallback)((e, a) => {
                        t(t => t.map(t => t.id === e ? { ...t,
                            status: "error"
                        } : t)), (0, s.P)({
                            message: "Failed to upload ".concat(a.file.name),
                            type: "error"
                        })
                    }, [])
                }), p = (0, l.useCallback)(e => {
                    let t = e.type.startsWith("image/");
                    return e.type, !(e.size > 5242880) || ((0, s.P)({
                        message: "File size exceeds the limit, ".concat(t ? "image max 2MB" : "file max 5MB"),
                        type: "error"
                    }), !1)
                }, []), g = (0, l.useCallback)(e => e.type.startsWith("image/") ? "image" : "application/pdf" === e.type ? "pdf" : e.type.startsWith("audio/") ? "audio" : "file", []), x = (0, l.useCallback)(async e => {
                    let t = g(e),
                        l = "",
                        r = (0, n.F)(t);
                    if ("image" === t) {
                        let {
                            file_id: t,
                            file_url: a
                        } = await o(e);
                        l = t, r = a
                    } else l = "pdf" === t ? await c(e) : "audio" === t ? await c(e) : await a(e);
                    return {
                        fileId: l,
                        icon: r,
                        fileType: t
                    }
                }, [o, c, a, g]), h = (0, l.useCallback)((e, t) => ({
                    id: e,
                    data: {
                        file: t
                    },
                    execute: async () => {
                        let {
                            fileId: e,
                            icon: a
                        } = await x(t);
                        return r.A.getInstance().track("edit_chat_file_upload_success", {
                            file_type: g(t)
                        }), {
                            file_id: e,
                            icon: a
                        }
                    },
                    cancel: () => {}
                }), [x]), b = (0, l.useCallback)(e => {
                    if (!p(e)) return null;
                    let a = crypto.randomUUID(),
                        l = g(e),
                        r = {
                            id: a,
                            type: l,
                            file_id: "",
                            name: e.name || l,
                            icon: (0, n.F)(l),
                            status: "pending",
                            file: e
                        };
                    return t(e => [...e, r]), u(h(a, e)), a
                }, [p, g, x, u, h]), v = (0, l.useCallback)(e => {
                    t(t => [...t, ...e])
                }, []), y = (0, l.useCallback)(e => {
                    f(e), t(t => t.filter(t => t.id !== e))
                }, [f]), w = (0, l.useCallback)(t => {
                    let a = e.find(e => e.id === t);
                    a && a.file && u(h(t, a.file))
                }, [u, e, h]), j = (0, l.useCallback)(() => e.filter(e => "complete" === e.status).map(e => {
                    let {
                        status: t,
                        file: a,
                        ...l
                    } = e;
                    return l
                }), [e]), _ = (0, l.useCallback)(() => {
                    m(), t([])
                }, [m]);
                return {
                    attachments: e,
                    setAttachments: t,
                    addAttachments: v,
                    addFile: b,
                    removeAttachment: y,
                    handleRetry: w,
                    getCompletedAttachments: j,
                    resetAttachments: _
                }
            }
        }
    }
]);