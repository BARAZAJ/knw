try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "10c3a475-6ad4-4a63-a240-128884bbece4", e._sentryDebugIdIdentifier = "sentry-dbid-10c3a475-6ad4-4a63-a240-128884bbece4")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4345], {
        77317: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 99543))
        },
        99543: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => d
            });
            var r = s(95155),
                n = s(6874),
                a = s.n(n);
            s(12115);
            var l = s(52343);

            function d() {
                return (0, r.jsxs)("div", {
                    className: "flex min-h-screen flex-col",
                    children: [(0, r.jsx)(l.default, {
                        hideRight: !0
                    }), (0, r.jsxs)("main", {
                        className: "mb-20 flex w-full flex-1 flex-col items-center justify-center px-6 sm:px-4",
                        children: [(0, r.jsx)("h1", {
                            className: "mb-2 text-[80px] sm:text-[100px] md:text-[128px]",
                            children: "404"
                        }), (0, r.jsx)("h2", {
                            className: "text-center text-[28px]/8 sm:text-[32px]/9 md:text-[40px]/10",
                            children: "Oops, looks like this page is gone!"
                        }), (0, r.jsx)("p", {
                            className: "mt-3 text-center text-sm text-black/45 sm:text-base",
                            children: "Next time, be sure to check out YouWare before it disappears."
                        }), (0, r.jsx)(a(), {
                            href: "https://www.youware.com",
                            className: "bg-brand mt-12 flex h-12 w-36 cursor-pointer items-center justify-center rounded-[16px] text-sm text-white sm:mt-16 sm:h-14 sm:w-40 sm:text-base md:mt-20",
                            children: "Explore More"
                        })]
                    })]
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [8823, 8888, 9721, 9342, 770, 7935, 750, 2343, 4850, 8441, 3688, 7358], () => t(77317)), _N_E = e.O()
    }
]);