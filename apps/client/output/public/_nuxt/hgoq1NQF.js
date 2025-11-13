import { _ as ct } from "./_b8Uo-6J.js";
import {
  p as _t,
  a8 as At,
  R as Bt,
  n as Ct,
  o as d,
  w as dt,
  i as Dt,
  a2 as Et,
  _ as et,
  e as ft,
  a7 as Ft,
  H as G,
  c as h,
  X as Ht,
  I as it,
  a3 as jt,
  t as L,
  V as Mt,
  G as N,
  E as Nt,
  D as Ot,
  m as pt,
  l as T,
  a as t,
  d as tt,
  r as U,
  j as Ut,
  f as V,
  a0 as vt,
  b as w,
  g as Yt,
  Y as zt,
} from "./BJowY05t.js";
import { d as Gt, h as Jt, u as Pt, e as Qt, b as Wt, c as Zt } from "./BKGWfCmr.js";
import { c as Kt, r as Xt } from "./BpgD7k3R.js";
import { _ as kt } from "./C8e6MUgy.js";
import { _ as It, a as Lt } from "./CK-F4Qy6.js";
import { _ as qt } from "./CyUMc6TN.js";
import { u as Vt } from "./D1fxQRhZ.js";
import { C as Rt } from "./xMoqfWMV.js";

import "./D_a5X8Y3.js";
import "./BC2xWXSP.js";
import "./CnNyuEuj.js";
import "./Be3xCWOP.js";

const xt = U([]);
function te() {
  async function m() {
    xt.value = await Wt();
  }
  return { fetchCoursePacks: m, coursePacks: xt };
}
const ee = { class: "flex min-h-[350px]" },
  ne = { key: 0, class: "flex flex-1 items-center justify-center" },
  se = t("span", { class: "loading loading-dots loading-md" }, null, -1),
  ae = [se],
  oe = { key: 1, class: "w-full" },
  re = {
    key: 0,
    class:
      "grid w-full grid-cols-1 gap-4 min-[500px]:grid-cols-2 md:grid-cols-1 min-[850px]:grid-cols-2 xl:grid-cols-3",
  },
  ie = { class: "mt-2 flex justify-between" },
  ce = ["onClick"],
  le = ["onClick"],
  de = { key: 1, class: "flex h-full w-full flex-1 items-center justify-center text-slate-500" },
  ue = V({
    __name: "RecentCoursePack",
    setup(m) {
      const { gotoCourseList: x, gotoGame: $ } = Vt(),
        { coursePacks: g, fetchCoursePacks: v } = te(),
        y = U(!1);
      u();
      async function u() {
        g.value.length === 0 ? ((y.value = !0), await v(), (y.value = !1)) : await v();
      }
      return (_, j) => {
        const C = kt;
        return (
          d(),
          h("div", ee, [
            y.value
              ? (d(), h("div", ne, ae))
              : (d(),
                h("div", oe, [
                  T(g).length
                    ? (d(),
                      h("div", re, [
                        (d(!0),
                        h(
                          N,
                          null,
                          G(
                            T(g),
                            (b) => (
                              d(),
                              pt(
                                Rt,
                                {
                                  coursePack: {
                                    id: b.coursePackId,
                                    title: b.title,
                                    description: b.description,
                                    cover: b.cover,
                                    isFree: b.isFree,
                                  },
                                },
                                {
                                  actions: dt(() => [
                                    t("div", ie, [
                                      t(
                                        "button",
                                        {
                                          class: "btn btn-sm tw-btn-blue",
                                          onClick: vt((I) => T(x)(b.coursePackId), ["stop"]),
                                        },
                                        " 课程列表 ",
                                        8,
                                        ce,
                                      ),
                                      t(
                                        "button",
                                        {
                                          class: "btn btn-success btn-sm text-white",
                                          onClick: vt(
                                            (I) => T($)(b.coursePackId, b.courseId),
                                            ["stop"],
                                          ),
                                        },
                                        " 继续游戏 ",
                                        8,
                                        le,
                                      ),
                                    ]),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["coursePack"],
                              )
                            ),
                          ),
                          256,
                        )),
                      ]))
                    : (d(),
                      h("div", de, [
                        tt(" 暂无记录，"),
                        w(
                          C,
                          {
                            href: "/course-pack",
                            class: "link text-blue-500 no-underline hover:opacity-75",
                          },
                          { default: dt(() => [tt("先学习一课， ")]), _: 1 },
                        ),
                        tt("再来看看吧~ "),
                      ])),
                ])),
          ])
        );
      };
    },
  });
var Tt = { exports: {} };
(function (m, x) {
  (function ($, g) {
    m.exports = g();
  })(jt, function () {
    var $ = 1e3,
      g = 6e4,
      v = 36e5,
      y = "millisecond",
      u = "second",
      _ = "minute",
      j = "hour",
      C = "day",
      b = "week",
      I = "month",
      R = "quarter",
      o = "year",
      f = "date",
      i = "Invalid Date",
      k =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      O = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_",
          ),
        ordinal: function (r) {
          var s = ["th", "st", "nd", "rd"],
            e = r % 100;
          return "[" + r + (s[(e - 20) % 10] || s[e] || s[0]) + "]";
        },
      },
      M = function (r, s, e) {
        var a = String(r);
        return !a || a.length >= s ? r : "" + Array(s + 1 - a.length).join(e) + r;
      },
      B = {
        s: M,
        z: function (r) {
          var s = -r.utcOffset(),
            e = Math.abs(s),
            a = Math.floor(e / 60),
            n = e % 60;
          return (s <= 0 ? "+" : "-") + M(a, 2, "0") + ":" + M(n, 2, "0");
        },
        m: function r(s, e) {
          if (s.date() < e.date()) return -r(e, s);
          var a = 12 * (e.year() - s.year()) + (e.month() - s.month()),
            n = s.clone().add(a, I),
            c = e - n < 0,
            l = s.clone().add(a + (c ? -1 : 1), I);
          return +(-(a + (e - n) / (c ? n - l : l - n)) || 0);
        },
        a: function (r) {
          return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
        },
        p: function (r) {
          return (
            { M: I, y: o, w: b, d: C, D: f, h: j, m: _, s: u, ms: y, Q: R }[r] ||
            String(r || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (r) {
          return r === void 0;
        },
      },
      W = "en",
      Z = {};
    Z[W] = O;
    var nt = "$isDayjsObject",
      X = function (r) {
        return r instanceof st || !(!r || !r[nt]);
      },
      P = function r(s, e, a) {
        var n;
        if (!s) return W;
        if (typeof s == "string") {
          var c = s.toLowerCase();
          Z[c] && (n = c), e && ((Z[c] = e), (n = c));
          var l = s.split("-");
          if (!n && l.length > 1) return r(l[0]);
        } else {
          var D = s.name;
          (Z[D] = s), (n = D);
        }
        return !a && n && (W = n), n || (!a && W);
      },
      z = function (r, s) {
        if (X(r)) return r.clone();
        var e = typeof s == "object" ? s : {};
        return (e.date = r), (e.args = arguments), new st(e);
      },
      p = B;
    (p.l = P),
      (p.i = X),
      (p.w = function (r, s) {
        return z(r, { locale: s.$L, utc: s.$u, x: s.$x, $offset: s.$offset });
      });
    var st = (function () {
        function r(e) {
          (this.$L = P(e.locale, null, !0)),
            this.parse(e),
            (this.$x = this.$x || e.x || {}),
            (this[nt] = !0);
        }
        var s = r.prototype;
        return (
          (s.parse = function (e) {
            (this.$d = (function (a) {
              var n = a.date,
                c = a.utc;
              if (n === null) return new Date(NaN);
              if (p.u(n)) return new Date();
              if (n instanceof Date) return new Date(n);
              if (typeof n == "string" && !/Z$/i.test(n)) {
                var l = n.match(k);
                if (l) {
                  var D = l[2] - 1 || 0,
                    S = (l[7] || "0").substring(0, 3);
                  return c
                    ? new Date(Date.UTC(l[1], D, l[3] || 1, l[4] || 0, l[5] || 0, l[6] || 0, S))
                    : new Date(l[1], D, l[3] || 1, l[4] || 0, l[5] || 0, l[6] || 0, S);
                }
              }
              return new Date(n);
            })(e)),
              this.init();
          }),
          (s.init = function () {
            var e = this.$d;
            (this.$y = e.getFullYear()),
              (this.$M = e.getMonth()),
              (this.$D = e.getDate()),
              (this.$W = e.getDay()),
              (this.$H = e.getHours()),
              (this.$m = e.getMinutes()),
              (this.$s = e.getSeconds()),
              (this.$ms = e.getMilliseconds());
          }),
          (s.$utils = function () {
            return p;
          }),
          (s.isValid = function () {
            return this.$d.toString() !== i;
          }),
          (s.isSame = function (e, a) {
            var n = z(e);
            return this.startOf(a) <= n && n <= this.endOf(a);
          }),
          (s.isAfter = function (e, a) {
            return z(e) < this.startOf(a);
          }),
          (s.isBefore = function (e, a) {
            return this.endOf(a) < z(e);
          }),
          (s.$g = function (e, a, n) {
            return p.u(e) ? this[a] : this.set(n, e);
          }),
          (s.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (s.valueOf = function () {
            return this.$d.getTime();
          }),
          (s.startOf = function (e, a) {
            var n = this,
              c = !!p.u(a) || a,
              l = p.p(e),
              D = function (q, F) {
                var Q = p.w(n.$u ? Date.UTC(n.$y, F, q) : new Date(n.$y, F, q), n);
                return c ? Q : Q.endOf(C);
              },
              S = function (q, F) {
                return p.w(
                  n
                    .toDate()
                    [q].apply(n.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(F)),
                  n,
                );
              },
              H = this.$W,
              Y = this.$M,
              A = this.$D,
              K = "set" + (this.$u ? "UTC" : "");
            switch (l) {
              case o:
                return c ? D(1, 0) : D(31, 11);
              case I:
                return c ? D(1, Y) : D(0, Y + 1);
              case b:
                var J = this.$locale().weekStart || 0,
                  ot = (H < J ? H + 7 : H) - J;
                return D(c ? A - ot : A + (6 - ot), Y);
              case C:
              case f:
                return S(K + "Hours", 0);
              case j:
                return S(K + "Minutes", 1);
              case _:
                return S(K + "Seconds", 2);
              case u:
                return S(K + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (s.endOf = function (e) {
            return this.startOf(e, !1);
          }),
          (s.$set = function (e, a) {
            var n,
              c = p.p(e),
              l = "set" + (this.$u ? "UTC" : ""),
              D = ((n = {}),
              (n[C] = l + "Date"),
              (n[f] = l + "Date"),
              (n[I] = l + "Month"),
              (n[o] = l + "FullYear"),
              (n[j] = l + "Hours"),
              (n[_] = l + "Minutes"),
              (n[u] = l + "Seconds"),
              (n[y] = l + "Milliseconds"),
              n)[c],
              S = c === C ? this.$D + (a - this.$W) : a;
            if (c === I || c === o) {
              var H = this.clone().set(f, 1);
              H.$d[D](S), H.init(), (this.$d = H.set(f, Math.min(this.$D, H.daysInMonth())).$d);
            } else D && this.$d[D](S);
            return this.init(), this;
          }),
          (s.set = function (e, a) {
            return this.clone().$set(e, a);
          }),
          (s.get = function (e) {
            return this[p.p(e)]();
          }),
          (s.add = function (e, a) {
            var n,
              c = this;
            e = Number(e);
            var l = p.p(a),
              D = function (Y) {
                var A = z(c);
                return p.w(A.date(A.date() + Math.round(Y * e)), c);
              };
            if (l === I) return this.set(I, this.$M + e);
            if (l === o) return this.set(o, this.$y + e);
            if (l === C) return D(1);
            if (l === b) return D(7);
            var S = ((n = {}), (n[_] = g), (n[j] = v), (n[u] = $), n)[l] || 1,
              H = this.$d.getTime() + e * S;
            return p.w(H, this);
          }),
          (s.subtract = function (e, a) {
            return this.add(-1 * e, a);
          }),
          (s.format = function (e) {
            var a = this,
              n = this.$locale();
            if (!this.isValid()) return n.invalidDate || i;
            var c = e || "YYYY-MM-DDTHH:mm:ssZ",
              l = p.z(this),
              D = this.$H,
              S = this.$m,
              H = this.$M,
              Y = n.weekdays,
              A = n.months,
              K = n.meridiem,
              J = function (F, Q, rt, lt) {
                return (F && (F[Q] || F(a, c))) || rt[Q].slice(0, lt);
              },
              ot = function (F) {
                return p.s(D % 12 || 12, F, "0");
              },
              q =
                K ||
                function (F, Q, rt) {
                  var lt = F < 12 ? "AM" : "PM";
                  return rt ? lt.toLowerCase() : lt;
                };
            return c.replace(E, function (F, Q) {
              return (
                Q ||
                (function (rt) {
                  switch (rt) {
                    case "YY":
                      return String(a.$y).slice(-2);
                    case "YYYY":
                      return p.s(a.$y, 4, "0");
                    case "M":
                      return H + 1;
                    case "MM":
                      return p.s(H + 1, 2, "0");
                    case "MMM":
                      return J(n.monthsShort, H, A, 3);
                    case "MMMM":
                      return J(A, H);
                    case "D":
                      return a.$D;
                    case "DD":
                      return p.s(a.$D, 2, "0");
                    case "d":
                      return String(a.$W);
                    case "dd":
                      return J(n.weekdaysMin, a.$W, Y, 2);
                    case "ddd":
                      return J(n.weekdaysShort, a.$W, Y, 3);
                    case "dddd":
                      return Y[a.$W];
                    case "H":
                      return String(D);
                    case "HH":
                      return p.s(D, 2, "0");
                    case "h":
                      return ot(1);
                    case "hh":
                      return ot(2);
                    case "a":
                      return q(D, S, !0);
                    case "A":
                      return q(D, S, !1);
                    case "m":
                      return String(S);
                    case "mm":
                      return p.s(S, 2, "0");
                    case "s":
                      return String(a.$s);
                    case "ss":
                      return p.s(a.$s, 2, "0");
                    case "SSS":
                      return p.s(a.$ms, 3, "0");
                    case "Z":
                      return l;
                  }
                  return null;
                })(F) ||
                l.replace(":", "")
              );
            });
          }),
          (s.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (s.diff = function (e, a, n) {
            var c,
              l = this,
              D = p.p(a),
              S = z(e),
              H = (S.utcOffset() - this.utcOffset()) * g,
              Y = this - S,
              A = function () {
                return p.m(l, S);
              };
            switch (D) {
              case o:
                c = A() / 12;
                break;
              case I:
                c = A();
                break;
              case R:
                c = A() / 3;
                break;
              case b:
                c = (Y - H) / 6048e5;
                break;
              case C:
                c = (Y - H) / 864e5;
                break;
              case j:
                c = Y / v;
                break;
              case _:
                c = Y / g;
                break;
              case u:
                c = Y / $;
                break;
              default:
                c = Y;
            }
            return n ? c : p.a(c);
          }),
          (s.daysInMonth = function () {
            return this.endOf(I).$D;
          }),
          (s.$locale = function () {
            return Z[this.$L];
          }),
          (s.locale = function (e, a) {
            if (!e) return this.$L;
            var n = this.clone(),
              c = P(e, a, !0);
            return c && (n.$L = c), n;
          }),
          (s.clone = function () {
            return p.w(this.$d, this);
          }),
          (s.toDate = function () {
            return new Date(this.valueOf());
          }),
          (s.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (s.toISOString = function () {
            return this.$d.toISOString();
          }),
          (s.toString = function () {
            return this.$d.toUTCString();
          }),
          r
        );
      })(),
      at = st.prototype;
    return (
      (z.prototype = at),
      [
        ["$ms", y],
        ["$s", u],
        ["$m", _],
        ["$H", j],
        ["$W", C],
        ["$M", I],
        ["$y", o],
        ["$D", f],
      ].forEach(function (r) {
        at[r[1]] = function (s) {
          return this.$g(s, r[0], r[1]);
        };
      }),
      (z.extend = function (r, s) {
        return r.$i || (r(s, st, z), (r.$i = !0)), z;
      }),
      (z.locale = P),
      (z.isDayjs = X),
      (z.unix = function (r) {
        return z(1e3 * r);
      }),
      (z.en = Z[W]),
      (z.Ls = Z),
      (z.p = {}),
      z
    );
  });
})(Tt);
var he = Tt.exports;
const me = Et(he),
  pe = { 0: "Sun", 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat" },
  _e = { 0: "周日", 1: "周一", 2: "周二", 3: "周三", 4: "周四", 5: "周五", 6: "周六" },
  fe = {
    0: "一月",
    1: "二月",
    2: "三月",
    3: "四月",
    4: "五月",
    5: "六月",
    6: "七月",
    7: "八月",
    8: "九月",
    9: "十月",
    10: "十一月",
    11: "十二月",
  },
  yt = U(),
  ht = U([]),
  wt = U([]),
  mt = U([]);
function ge(m, x) {
  g();
  function $(o) {
    return o.toISOString().slice(0, 10);
  }
  function g() {
    ht.value = [];
    for (let o = 2024; o <= new Date().getFullYear(); o++)
      ht.value.unshift({ label: o.toString(), value: o });
  }
  function v(o) {
    const f = o % 100;
    if ([11, 12, 13].includes(f)) return "th";
    const i = o % 10;
    return [1, 2, 3].includes(i) ? { 1: "st", 2: "nd", 3: "rd" }[i] : "th";
  }
  function y(o) {
    return o ? (o < 3 ? "low" : o < 5 ? "moderate" : o < 10 ? "high" : "higher") : "";
  }
  function u(o) {
    return mt.value.map((f) =>
      f.map((i) => {
        if (!i) return null;
        const k = me(i.date).format("YYYY-MM-DD"),
          E = o.find((B) => B.date === k),
          O = x.getActivityLevel(E),
          M = x.tipFormatter(E || { date: k, duration: 0 });
        return { date: i.date, tips: M, bg: O };
      }),
    );
  }
  function _(o) {
    return o.map((f, i) => {
      var M;
      const E = (o[i + 1] || { offset: 53 }).offset - f.offset,
        O = (M = fe[f.month]) == null ? void 0 : M.slice(0, 3);
      return { colSpan: E, month: O };
    });
  }
  function j(o) {
    m("toggleYear", o), (yt.value = o);
    const f = R(o);
    (wt.value = _(f.thead)), (mt.value = f.tbody);
  }
  function C(o = new Date()) {
    const f = 364 + (o.getDay() % 7),
      i = o.getDate() - f;
    return new Date(o.setDate(i));
  }
  function b(o) {
    const f = o ? new Date(`${o}-01-01`) : C(new Date()),
      i = o ? new Date(`${o}-12-31`) : new Date();
    return { startDate: f, endDate: i };
  }
  function I(o) {
    const f = [[], [], [], [], [], [], []],
      i = o.getDay();
    for (let k = 0; k < i; k++) f[k].push(null);
    return f;
  }
  function R(o) {
    const { startDate: f, endDate: i } = b(o),
      k = I(f),
      E = [];
    let O = 12,
      M = new Date(+f);
    for (; M <= i; ) {
      const B = M.getMonth(),
        W = M.getDay(),
        Z = M.getDate();
      if (Z === 1 && E.length < O) {
        const nt = W,
          X = nt - 1,
          P = k[nt].length,
          p = k[X] && k[X][P] !== null ? P + 1 : P;
        if (E.length === 0 && p !== 0) {
          const at = { offset: 0, month: (B || 12) - 1 };
          p < 3 ? ((at.month = -1), (O = 13)) : p === 3 && (O = 13), E.push(at);
        }
        E.push({ offset: p, month: B });
      }
      k[W].push({ date: new Date(+M) }), M.setDate(Z + 1);
    }
    return { thead: E, tbody: k };
  }
  return {
    format: $,
    calcStartDate: C,
    calcDateRange: b,
    getActivityLevel: y,
    getOrdinalSuffix: v,
    initTable: j,
    initTbody: I,
    initData: R,
    renderHead: _,
    renderBody: u,
    weeks: pe,
    weeksZh: _e,
    thead: wt,
    tbody: mt,
    year: yt,
    yearOptions: ht,
  };
}
const ve = (m) => (_t("data-v-1d0d5dea"), (m = m()), ft(), m),
  xe = { class: "flex justify-between" },
  ye = {
    class:
      "min-w-0 flex-1 rounded-md border border-gray-300 px-2 py-4 text-xs dark:border-gray-700",
  },
  we = ve(() => t("th", null, null, -1)),
  $e = ["colspan"],
  be = { class: "relative hidden w-8 md:block" },
  ke = { class: "absolute" },
  De = { class: "mt-2 flex justify-between px-1" },
  Ce = { class: "justify-self-end text-sm dark:text-gray-400" },
  Me = { key: 0, class: "font-semibold text-purple-500" },
  Te = it(
    '<div class="flex items-center gap-1 text-xs" data-v-1d0d5dea><div class="text-gray-500" data-v-1d0d5dea>更少</div><div class="cell" data-v-1d0d5dea></div><div class="cell low" data-v-1d0d5dea></div><div class="cell moderate" data-v-1d0d5dea></div><div class="cell high" data-v-1d0d5dea></div><div class="cell higher" data-v-1d0d5dea></div><div class="text-gray-500" data-v-1d0d5dea>更多</div></div>',
    1,
  ),
  Se = V({
    __name: "CalendarGraph",
    props: { data: {}, totalLearningTime: {} },
    emits: ["toggleYear"],
    setup(m, { emit: x }) {
      const $ = m,
        g = x,
        v = U(),
        y = U(null),
        {
          initTable: u,
          renderBody: _,
          thead: j,
          tbody: C,
          weeksZh: b,
          yearOptions: I,
        } = ge(g, {
          getActivityLevel(i) {
            if (!i) return "";
            const k = R(i.duration);
            return k < 10 ? "low" : k < 30 ? "moderate" : k < 60 ? "high" : "higher";
          },
          tipFormatter(i) {
            if (i.duration === 0) return `${i == null ? void 0 : i.date} 没有学习`;
            let k = "";
            return (
              R(i.duration) < 1 ? (k = "不足 1 分钟") : (k = ` ${R(i.duration)} 分钟`),
              `${i.date} 学习${k}`
            );
          },
        });
      function R(i) {
        return Math.floor(i / 60);
      }
      function o(i) {
        const k = Math.floor(i / 3600),
          E = Math.floor((i % 3600) / 60);
        return k > 0 ? `${k}小时${E}分钟` : E === 0 ? "不足 1 分钟" : `${E}分钟`;
      }
      Dt(() => {
        u(), f();
      });
      function f() {
        zt(() => {
          y.value && (y.value.scrollLeft = y.value.scrollWidth);
        });
      }
      return (
        Ht(() => {
          C.value = _($.data);
        }),
        (i, k) => {
          const E = qt;
          return (
            d(),
            h("div", xe, [
              t("div", ye, [
                t(
                  "div",
                  { class: "w-full overflow-x-auto", ref_key: "tableContainer", ref: y },
                  [
                    t(
                      "table",
                      { class: "mx-auto mb-2", ref_key: "calendarTable", ref: v },
                      [
                        t("thead", null, [
                          we,
                          (d(!0),
                          h(
                            N,
                            null,
                            G(
                              T(j),
                              ({ colSpan: O, month: M }) => (
                                d(),
                                h(
                                  "th",
                                  { class: "pb-1 text-left font-normal", colspan: O, key: M },
                                  L(M),
                                  9,
                                  $e,
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                        t("tbody", null, [
                          (d(!0),
                          h(
                            N,
                            null,
                            G(
                              T(C),
                              (O, M) => (
                                d(),
                                h("tr", { key: T(b)[M] }, [
                                  t("td", be, [t("span", ke, L(M % 2 !== 0 ? T(b)[M] : ""), 1)]),
                                  (d(!0),
                                  h(
                                    N,
                                    null,
                                    G(
                                      O,
                                      (B, W) => (
                                        d(),
                                        h("td", { key: W }, [
                                          w(
                                            E,
                                            { text: B == null ? void 0 : B.tips },
                                            {
                                              default: dt(() => [
                                                t(
                                                  "div",
                                                  {
                                                    class: Ot([
                                                      "cell block",
                                                      [B == null ? void 0 : B.bg],
                                                    ]),
                                                  },
                                                  null,
                                                  2,
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["text"],
                                          ),
                                        ])
                                      ),
                                    ),
                                    128,
                                  )),
                                ])
                              ),
                            ),
                            128,
                          )),
                        ]),
                      ],
                      512,
                    ),
                  ],
                  512,
                ),
                t("div", De, [
                  t("span", Ce, [
                    tt(L(i.totalLearningTime > 0 ? "一共学习" : "还没有开始学习") + " ", 1),
                    i.totalLearningTime > 0
                      ? (d(), h("span", Me, L(o(i.totalLearningTime)), 1))
                      : Ct("", !0),
                  ]),
                  Te,
                ]),
              ]),
              (d(!0),
              h(
                N,
                null,
                G(
                  T(I),
                  (O) => (
                    d(),
                    h(
                      "div",
                      { class: "btn btn-sm tw-btn-blue ml-6 hidden pr-7 xl:flex", key: O.value },
                      L(O.label),
                      1,
                    )
                  ),
                ),
                128,
              )),
            ])
          );
        }
      );
    },
  }),
  Ie = et(Se, [["__scopeId", "data-v-1d0d5dea"]]),
  $t = U([]),
  bt = U(0);
function Le() {
  async function m() {
    ($t.value = await Zt()), (bt.value = await Gt());
  }
  return { learningDailyTimeList: $t, learningDailyTotalTime: bt, setupLearningDailyTime: m };
}
const je = { class: "mt-8 flex w-full justify-between" },
  Ee = { class: "mr-16 hidden w-72 md:block" },
  ze = {
    class:
      "mx-auto h-56 w-56 overflow-hidden rounded-full border-2 border-gray-300 bg-gray-300 dark:border-gray-700 dark:bg-gray-700",
  },
  He = ["src"],
  Oe = { class: "mt-4 truncate" },
  Ye = { class: "flex gap-2" },
  Fe = { class: "text-3xl font-medium" },
  Be = { class: "text-md text-gray-400" },
  Ne = t("hr", { class: "my-5 dark:border-gray-700" }, null, -1),
  Ae = { class: "min-w-0 flex-1" },
  Ue = { class: "mb-4 flex justify-between border-b pb-2 dark:border-gray-700" },
  Re = t("div", { class: "text-xl font-medium" }, "最近使用的课程包", -1),
  Ve = V({
    __name: "index",
    setup(m) {
      const x = Yt(),
        { learningDailyTimeList: $, learningDailyTotalTime: g, setupLearningDailyTime: v } = Le(),
        { toggleYear: y } = u();
      Ft(async () => {
        const { setupLearningTime: _ } = Pt();
        _(await Qt());
      }, "$h3Ssxd1RaF");
      function u() {
        const _ = U([]),
          j = U(0);
        async function C(b) {
          v();
        }
        return { data: _, totalLearningTime: j, toggleYear: C };
      }
      return (_, j) => {
        var o, f, i;
        const C = It,
          b = kt,
          I = ue,
          R = Ie;
        return (
          d(),
          h("div", je, [
            t("div", Ee, [
              t("div", ze, [
                t(
                  "img",
                  {
                    class: "h-full object-cover",
                    src: (o = T(x).user) == null ? void 0 : o.avatar,
                  },
                  null,
                  8,
                  He,
                ),
              ]),
              t("div", Oe, [
                t("div", Ye, [
                  t("div", Fe, L((f = T(x).user) == null ? void 0 : f.username), 1),
                  w(C),
                ]),
                t("div", Be, L((i = T(x).user) == null ? void 0 : i.name), 1),
              ]),
              Ne,
            ]),
            t("div", Ae, [
              t("div", Ue, [
                Re,
                w(
                  b,
                  {
                    href: "/course-pack",
                    class: "link text-blue-500 no-underline hover:opacity-75",
                  },
                  { default: dt(() => [tt("更多课程包 ")]), _: 1 },
                ),
              ]),
              w(I),
              w(
                R,
                { class: "mt-10", data: T($), totalLearningTime: T(g), onToggleYear: T(y) },
                null,
                8,
                ["data", "totalLearningTime", "onToggleYear"],
              ),
            ]),
          ])
        );
      };
    },
  }),
  We = {},
  Ze = { class: "w-full pt-24" },
  Ge = t(
    "span",
    { class: "relative flex justify-center" },
    [
      t("div", {
        class:
          "absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75",
      }),
      t(
        "div",
        {
          class:
            "absolute -top-1 flex h-2 w-5 items-center justify-center rounded-lg bg-gray-600 dark:bg-gray-400 lg:-top-2 lg:h-3.5 lg:w-8",
        },
        [t("div", { class: "h-1 w-3.5 rounded-lg bg-white dark:bg-theme-dark lg:h-2 lg:w-6" })],
      ),
    ],
    -1,
  ),
  Pe = [Ge];
function Qe(m, x) {
  return d(), h("div", Ze, Pe);
}
const ut = et(We, [["render", Qe]]),
  Je = "" + new URL("home-page-preview.DEt-KP6q.png", import.meta.url).href,
  St = (m) => (_t("data-v-c041412a"), (m = m()), ft(), m),
  qe = { class: "pt-28 text-gray-500", id: "home" },
  Xe = it(
    '<div class="mx-auto my-5 text-center" data-v-c041412a><h2 class="bg-gradient-to-r from-purple-600 to-gray-200 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent dark:from-purple-600 dark:to-gray-100 lg:text-4xl xl:text-5xl" data-v-c041412a> 让你上瘾的英语学习工具 </h2><div class="mt-5 text-sm md:text-base xl:text-lg" data-v-c041412a><p class="pt-2 text-center text-gray-500 dark:text-gray-300 lg:text-xl" data-v-c041412a> 使用<span class="text-purple-400 dark:text-purple-200" data-v-c041412a> 连词成句 </span>、<span class="text-purple-400 dark:text-purple-200" data-v-c041412a> i + 1 </span>、<span class="text-purple-400 dark:text-purple-200" data-v-c041412a> 以终为始 </span>等学习理论来帮助你习得英语 </p><p class="pt-2 text-center text-gray-500 dark:text-gray-300 lg:text-xl" data-v-c041412a> 通过不断的<span class="text-purple-400 dark:text-purple-200" data-v-c041412a> 重复 </span>形成肌肉记忆 </p><p class="pt-2 text-center text-gray-500 dark:text-gray-300 lg:text-xl" data-v-c041412a> 最重要的是<span class="text-purple-400 dark:text-purple-200" data-v-c041412a> 游戏化 </span>的形式让学习英语从此不再痛苦 </p></div></div>',
    1,
  ),
  Ke = { class: "my-10 flex flex-wrap items-center justify-center gap-4 font-customFont" },
  t1 = it(
    '<strong data-v-c041412a>开启Earthworm</strong><div id="container-stars" data-v-c041412a><div id="stars" data-v-c041412a></div></div><div id="glow" data-v-c041412a><div class="circle" data-v-c041412a></div><div class="circle" data-v-c041412a></div></div>',
    3,
  ),
  e1 = [t1],
  n1 = {
    href: "https://github.com/cuixueshe/earthworm",
    rel: "noreferrer noopener",
    target: "_blank",
    class:
      "group relative inline-flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-full px-6 duration-500",
  },
  s1 = {
    class: "relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6",
  },
  a1 = {
    class:
      "absolute flex translate-x-0 items-center justify-center text-purple-600 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0",
  },
  o1 = St(() =>
    t(
      "span",
      {
        class:
          "bg-gradient-to-r from-purple-600 to-gray-300 bg-clip-text pl-6 font-medium text-transparent",
      },
      "Star us on GitHub",
      -1,
    ),
  ),
  r1 = {
    class:
      "absolute right-0 flex translate-x-12 items-center justify-center text-purple-400 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100",
  },
  i1 = St(() =>
    t(
      "div",
      { class: "mt-20 flex w-full justify-center" },
      [t("img", { alt: "", src: Je, class: "w-4/5 lg:w-3/4" })],
      -1,
    ),
  ),
  c1 = V({
    __name: "Banner",
    emits: ["start-earthworm"],
    setup(m, { emit: x }) {
      const $ = x;
      function g() {
        $("start-earthworm");
      }
      return (v, y) => {
        const u = ct,
          _ = ut;
        return (
          d(),
          h("section", qe, [
            Xe,
            t("div", Ke, [
              t("button", { onClick: g, class: "btn relative", type: "button" }, e1),
              t("a", n1, [
                t("div", s1, [
                  t("div", a1, [w(u, { name: "i-ph-star-fill", class: "h-5 w-5" })]),
                  o1,
                  t("div", r1, [w(u, { name: "i-ph-arrow-right", class: "h-5 w-5" })]),
                ]),
              ]),
            ]),
            i1,
            w(_),
          ])
        );
      };
    },
  }),
  l1 = et(c1, [["__scopeId", "data-v-c041412a"]]),
  d1 = { class: "mx-auto my-5 text-center" },
  u1 = {
    class:
      "bg-gradient-to-r from-purple-600 to-gray-200 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent dark:from-purple-600 dark:to-gray-100 lg:text-4xl xl:text-5xl",
  },
  h1 = { class: "mt-5" },
  m1 = { class: "mt-5" },
  gt = V({
    __name: "Title",
    props: { title: { type: String, required: !0 }, description: { type: Array, required: !0 } },
    setup(m) {
      const x = m,
        { title: $, description: g } = x;
      return (v, y) => (
        d(),
        h("div", d1, [
          t("h2", u1, L(T($)), 1),
          t("div", h1, [
            (d(!0),
            h(
              N,
              null,
              G(
                T(g),
                (u, _) => (
                  d(),
                  h(
                    "p",
                    {
                      key: _,
                      class: "pt-2 text-center text-sm text-gray-800 dark:text-gray-300 lg:text-xl",
                    },
                    L(u),
                    1,
                  )
                ),
              ),
              128,
            )),
          ]),
          t("div", m1, [Bt(v.$slots, "default")]),
        ])
      );
    },
  }),
  p1 = { class: "w-full flex-col pt-24", id: "features" },
  _1 = { class: "py-16" },
  f1 = { class: "grid grid-cols-1 gap-8 md:mt-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3" },
  g1 = {
    class:
      "shrink-0 rounded-lg border border-gray-300 bg-white p-2 text-purple-400 dark:border-gray-800 dark:bg-[#121229] dark:text-[#bea6ff]",
  },
  v1 = ["innerHTML"],
  x1 = { class: "text-lg font-bold dark:text-white" },
  y1 = { class: "mt-1 text-sm leading-6 text-gray-500 opacity-90 dark:text-white" },
  w1 = V({
    __name: "Features",
    setup(m) {
      const x = [
        {
          icon: '<svg t="1711849789837" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6594" width="25" height="25"><path d="M896 448c0-212-172-384-384-384S128 236 128 448c0 192.8 142.4 352.8 328 380l-4 68H256v64h512v-64H573.6l-4-68C754.4 800 896 640.8 896 448zM512 768c-176.8 0-320-143.2-320-320s143.2-320 320-320 320 143.2 320 320-143.2 320-320 320z m0-560c-132.8 0-240 107.2-240 240s107.2 240 240 240 240-107.2 240-240-107.2-240-240-240zM416 512c-52.8 0-96-43.2-96-96s43.2-96 96-96 96 43.2 96 96-43.2 96-96 96z" p-id="6595" fill="currentColor" stroke="currentColor"></path></svg>',
          title: "实时反馈和进度跟踪",
          desc: "Earthworm 提供精准即时的反馈机制，辅助学习者即刻纠正学习中的偏差，并通过高效的进度跟踪功能，让每位学习者都能实时掌握自身的学习进展，清晰认识到自己的学习里程碑",
        },
        {
          icon: '<svg t="1711849623890" class="icon" viewBox="0 0 1102 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4539" width="25" height="25"><path d="M608.886154 986.466462l-1.969231 2.048a78.769231 78.769231 0 0 1-111.379692-1.457231L377.974154 866.461538H157.538462a118.153846 118.153846 0 0 1-118.153847-118.153846V157.538462a118.153846 118.153846 0 0 1 118.153847-118.153847h787.692307a118.153846 118.153846 0 0 1 118.153846 118.153847v590.76923a118.153846 118.153846 0 0 1-118.153846 118.153846h-221.735384l-114.609231 120.004924zM945.230769 787.692308a39.384615 39.384615 0 0 0 39.384616-39.384616V157.538462a39.384615 39.384615 0 0 0-39.384616-39.384616H157.538462a39.384615 39.384615 0 0 0-39.384616 39.384616v590.76923a39.384615 39.384615 0 0 0 39.384616 39.384616h253.636923l140.760615 144.384 137.846154-144.384H945.230769z" fill="currentColor" p-id="4540"></path><path d="M215.197538 592.187077V273.408c0-14.690462 3.268923-25.836308 9.846154-33.358769 6.537846-7.561846 15.36-11.303385 26.505846-11.303385 11.106462 0 20.086154 3.702154 26.899693 11.145846 6.813538 7.483077 10.24 18.628923 10.24 33.516308v318.779077c0 14.887385-3.465846 26.072615-10.358154 33.516308a34.894769 34.894769 0 0 1-26.781539 11.18523 33.201231 33.201231 0 0 1-26.269538-11.579077c-6.695385-7.719385-10.082462-18.747077-10.082462-33.083076z m315.47077 3.229538a227.643077 227.643077 0 0 1-51.515077 31.113847 144.147692 144.147692 0 0 1-55.886769 10.358153c-18.825846 0-35.406769-3.741538-49.664-11.18523a81.762462 81.762462 0 0 1-33.004308-30.28677 78.572308 78.572308 0 0 1-11.579077-41.472c0-20.086154 6.380308-37.218462 19.140923-51.396923 12.721231-14.178462 30.247385-23.709538 52.499692-28.553846 4.647385-1.063385 16.226462-3.505231 34.737231-7.246769 18.510769-3.780923 34.304-7.246769 47.497846-10.397539 13.193846-3.150769 27.529846-6.931692 42.929231-11.421538-0.866462-19.377231-4.765538-33.595077-11.697231-42.692923-6.892308-9.058462-21.228308-13.587692-42.929231-13.587692-18.668308 0-32.689231 2.599385-42.141538 7.798153-9.452308 5.238154-17.486769 12.996923-24.221538 23.433847-6.734769 10.397538-11.500308 17.289846-14.257231 20.598153-2.796308 3.308308-8.782769 5.001846-17.92 5.001847a31.310769 31.310769 0 0 1-21.425231-7.955693 25.875692 25.875692 0 0 1-9.019077-20.322461c0-12.918154 4.608-25.481846 13.784615-37.691077 9.137231-12.209231 23.394462-22.252308 42.771693-30.168616 19.377231-7.876923 43.52-11.815385 72.428307-11.815384 32.295385 0 57.698462 3.780923 76.169847 11.421538 18.510769 7.640615 31.547077 19.692308 39.187692 36.233846 7.640615 16.502154 11.421538 38.4 11.421538 65.654154a6024.900923 6024.900923 0 0 1-0.512 84.007385c0 13.824 2.284308 28.238769 6.852923 43.204923 4.568615 14.966154 6.892308 24.654769 6.892308 28.947692 0 7.561846-3.544615 14.414769-10.633846 20.598154a35.643077 35.643077 0 0 1-24.103385 9.294769c-7.561846 0-14.966154-3.544615-22.370461-10.633846-7.364923-7.089231-15.163077-17.368615-23.394462-30.838154z m-4.804923-106.338461c-10.791385 3.938462-26.427077 8.113231-46.985847 12.524308-20.558769 4.371692-34.776615 7.640615-42.692923 9.688615-7.876923 2.048-15.438769 6.104615-22.606769 12.130461-7.168 5.986462-10.752 14.375385-10.752 25.16677 0 11.106462 4.214154 20.598154 12.603077 28.356923 8.467692 7.876923 19.495385 11.736615 33.161846 11.736615 14.532923 0 27.963077-3.150769 40.251077-9.531077 12.288-6.380308 21.267692-14.572308 27.057231-24.654769 6.616615-11.106462 9.964308-29.420308 9.964308-54.902154v-10.515692z m193.772307-110.395077v8.900923c12.957538-17.053538 27.057231-29.577846 42.417231-37.572923 15.36-7.995077 33.004308-11.972923 52.893539-11.972923 19.416615 0 36.706462 4.214154 51.987692 12.642461 15.241846 8.428308 26.624 20.401231 34.185846 35.84 4.844308 8.940308 7.995077 18.628923 9.452308 29.065847 1.417846 10.397538 2.126769 23.670154 2.126769 39.817846v136.782769c0 14.729846-3.387077 25.836308-10.121846 33.398154a33.555692 33.555692 0 0 1-26.230154 11.303384 33.870769 33.870769 0 0 1-26.663385-11.579077c-6.813538-7.719385-10.24-18.747077-10.24-33.083076v-122.525539c0-24.221538-3.347692-42.771692-10.082461-55.611077-6.695385-12.839385-20.125538-19.259077-40.251077-19.259077-13.115077 0-25.048615 3.938462-35.800616 11.736616-10.752 7.798154-18.668308 18.510769-23.709538 32.17723-3.544615 10.948923-5.356308 31.389538-5.356308 61.361231v92.081231c0 14.887385-3.465846 26.072615-10.397538 33.516308a34.894769 34.894769 0 0 1-26.781539 11.18523 33.28 33.28 0 0 1-26.112-11.579077c-6.813538-7.719385-10.24-18.747077-10.24-33.083076V379.746462c0-14.020923 3.072-24.457846 9.176616-31.389539 6.104615-6.892308 14.454154-10.358154 25.048615-10.358154 6.459077 0 12.288 1.536 17.486769 4.568616a32.768 32.768 0 0 1 12.524308 13.74523c3.150769 6.104615 4.726154 13.548308 4.726154 22.331077z" fill="currentColor" stroke="currentColor" p-id="4541"></path></svg>',
          title: "情境语言学习",
          desc: "Earthworm 精心设计了丰富的语境化学习内容，旨在帮助用户深入理解单词在不同场合下的具体用法，从而有效提高用词的准确性和适应性，让语言学习更贴近真实应用场景",
        },
        {
          icon: '<svg t="1711850588926" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7901" width="25" height="25"><path d="M565.301333 173.76l0 411.52-101.610667 0L463.690667 298.645333c-16.448 12.373333-32.362667 22.314667-47.722667 29.930667-15.381333 7.594667-34.666667 14.869333-57.834667 21.888l0-81.216c34.218667-10.837333 60.757333-23.872 79.68-39.104 18.901333-15.232 33.706667-34.026667 44.373333-56.384L565.301333 173.76z" fill="currentColor" p-id="7902"></path><path d="M380.448 1023.573333 269.408 901.184 87.754667 911.701333 234.869333 586.709333 318.688 624.682667 234.357333 811.029333 308.021333 806.741333 354.912 858.474667 432.949333 688.277333 516.618667 726.634667Z" fill="currentColor" p-id="7903"></path><path d="M643.573333 1023.573333 507.402667 726.634667 591.050667 688.277333 669.088 858.474667 716 806.741333 789.642667 811.029333 705.312 624.682667 789.152 586.709333 936.245333 911.701333 754.592 901.184Z" fill="currentColor" p-id="7904"></path><path d="M512.010667 783.616c-218.794667 0-396.8-175.765333-396.8-391.808C115.210667 175.786667 293.216 0 512.010667 0s396.757333 175.786667 396.757333 391.808C908.768 607.850667 730.826667 783.616 512.010667 783.616zM512.010667 104.362667c-161.258667 0-292.458667 128.96-292.458667 287.466667 0 158.549333 131.2 287.466667 292.458667 287.466667 161.237333 0 292.437333-128.917333 292.437333-287.466667C804.469333 233.322667 673.248 104.362667 512.010667 104.362667z" fill="currentColor" stroke="currentColor" p-id="7905"></path></svg>',
          title: "提高语言表达能力",
          desc: "通过系统的造句练习，本应用不仅加强了学习者对词汇使用和语法结构的理解，而且有效提升了口语和书面语的表达流畅性及准确度，让语言表达更加自如和精准",
        },
        {
          icon: '<svg t="1711850694514" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10218" width="25" height="25"><path d="M874.95014 449.780222c-13.412467-17.361404-26.312258-35.075848-39.232515-52.792338-17.175162-23.53296-18.914782-49.391894-15.347538-77.838767C833.817346 212.273028 805.223117 120.434416 717.463401 52.703862 675.22646 20.088041 624.203418 9.132531 572.569461 3.924929c-27.876892-2.811021-56.008588-3.427051-84.118794-3.622502l-4.675484-0.288572c0 0-167.432247-3.55701-238.673763 103.318055-71.248679 106.874042-53.442137 252.927387-32.060166 306.359291 21.378902 53.435998 42.746547 110.431052 53.438044 146.057438 10.681264 35.62127 14.238275 131.828373 7.109928 149.639008-0.352017 0.904602-0.513699 4.650924-1.764179 7.309472-7.724934 53.531165-34.066868 99.634154-51.314685 147.284382-20.44667 56.476239-43.61738 113.813077-88.576314 162.965518l498.896295 0c-11.826343-16.384147-21.695103-32.944302-33.081425-45.292531-25.398446-27.578087-35.464704-60.796635-22.945583-97.067704 14.438843-41.860364 28.677117-84.982464 45.017262-126.067163 2.892885-7.275703 15.15311-14.082732 23.992424-15.665786 19.139909-3.395328 38.846729-3.932564 58.343771-5.032617 21.305224-1.162475 42.73529-1.025352 63.95251-3.030008 34.38921-3.263322 53.398135-26.909869 47.655344-61.239726-3.805674-22.726595-2.227736-39.999994 20.176517-53.130029 5.760187-3.391235 4.393051-18.958784 7.270587-33.955328 7.291053-4.236485 9.098211-14.824629 3.499705-29.465063-11.395532-29.805824-11.420091-39.05139 18.742866-51.047602C890.371356 491.288569 892.816034 472.92535 874.95014 449.780222zM662.66436 291.255851c-9.057278 11.117193-22.738875 16.299212-36.037755 15.067152-5.707999 0.023536-19.164468 1.815344-31.173983 16.52434l-43.429092 53.306038c-11.981886 14.704902-7.159046 31.530094-7.159046 31.530094l-0.106424-0.115634c2.038425 10.390646-0.369413 21.605052-7.554042 30.421854-12.823043 15.739464-36.022405 18.12172-51.759823 5.298677-12.029981-9.801221-16.224511-25.63176-11.81304-39.580439 1.011026-4.047174 3.486402-17.346054-4.059454-29.264495l-19.224843-26.618226c-0.318248-0.372483-0.620123-0.72757-0.876973-1.136893-5.653764-7.785309-15.691369-11.120262-20.912274-12.417814-7.137557-0.01842-14.313999-2.402722-20.271685-7.257284-13.775741-11.222593-15.862261-31.472788-4.638644-45.247506 7.158023-8.787126 17.967201-12.787227 28.477573-11.657498 8.424875-0.008186 13.680573-4.143365 16.175392-6.754841l1.738596-2.133592c0 0 4.712323-6.129601 3.941773-17.002223-1.871626-8.003273-0.116657-16.793469 5.494128-23.681339 9.623166-11.80997 26.976383-13.586429 38.787377-3.962239 9.156539 7.459898 12.269435 19.574814 8.709354 30.160911-1.509376 6.793726-0.203638 11.037375 1.032515 13.31423l1.427511 1.947351c0.034792 0.062422 0.051165 0.075725 0.051165 0.075725s4.394074 4.901634 12.890581 8.019646c4.001125 0.588401 7.88764 2.20727 11.238966 4.936426 9.85034 8.025786 11.311621 22.505561 3.302207 32.337482-8.022716 9.84727-22.487142 11.327994-32.338505 3.302207-7.612371-6.203279-10.196217-16.306375-7.25933-25.090431 1.145079-5.319143-1.146102-10.137889-2.07731-11.830437l-1.830694-2.558264c-1.919721-2.100846-5.778607-5.243418-12.056587-5.656834-0.388856-0.008186-0.758269-0.002047-1.135869-0.025583-8.840337 0.485047-13.78495 4.930287-15.594155 6.945175l-0.813528 0.99977-0.029676 0.035816c-0.423649 0.520863-6.400777 8.130163-5.168717 17.01655 0.671289 1.702781 1.199314 3.508915 1.549285 5.288444l0.027629 0.24457c1.086751 5.64967 0.632403 11.559261-1.377369 17.065668-0.629333 4.782931-0.48607 14.249531 7.049553 24.697482 0.183172 0.261966 0.314155 0.478907 0.460488 0.711197l18.951621 26.228347c9.026579 12.561077 25.049499 13.284554 25.049499 13.284554 0.23229 0.021489 0.499373 0.038886 0.765433 0.059352 3.750415 0.099261 14.704902-0.49221 23.473608-9.62419l48.820889-59.924779c9.782802-13.399164 8.648979-26.343981 7.590881-31.681543-2.408861-8.101511-2.279925-16.8651 0.494257-24.998334 1.3436-6.252398 3.772928-18.769472-4.818746-32.245384l-30.136351-41.699705c-16.286933-21.099539-40.182143-20.380155-40.182143-20.380155l0.039909-0.048095c-6.470362-0.01228-12.914117-1.261736-19.048835-3.751439-6.65558-1.820461-21.277594-3.878328-37.347586 5.753024l-71.901548 51.929692c-23.006981 18.110463-20.08135 43.584634-20.08135 43.584634l-0.091074-0.160659c0.047072 12.343113-4.018521 24.796742-12.413721 35.102454-19.247356 23.620964-53.95072 27.168765-77.572708 7.921409-23.590265-19.218703-27.165695-53.951744-7.920386-77.573731 15.138784-18.581184 39.863895-24.735344 61.258146-17.132183 5.337562 1.535982 26.522036 6.323006 46.007822-6.634091L441.100268 150.439785c1.018189-0.835017 2.074241-1.719153 3.260252-2.551101 17.919105-12.941747 21.082143-31.370458 21.651101-38.393405-0.626263-12.051471 3.033078-24.39049 11.264549-34.492563 17.634626-21.644961 49.497294-24.881677 71.125882-7.260354 16.684999 13.595639 22.42165 35.61513 16.089435 54.891138l0.174985-0.106424c0 0-9.562791 21.346156 6.796796 44.670361l27.880986 38.623648c0.161682 0.220011 0.325411 0.432858 0.516769 0.648776 7.296169 10.22487 18.878966 16.396426 31.103375 17.284656 9.084908 0.081864 18.175955 3.127222 25.756603 9.304918C674.441585 247.493162 677.08683 273.552664 662.66436 291.255851z" fill="currentColor" p-id="10219"></path></svg>',
          title: "增强词汇保留率",
          desc: "Earthworm 采用独特的单词句式构建方法，旨在加深学习者对词汇的记忆和应用能力，通过实践加强理解，显著提高长期词汇保留效果",
        },
        {
          icon: '<svg t="1711850963973" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22066" width="25" height="25"><path d="M512 953.81818174c244.02272695 0 441.81818174-197.79545479 441.81818174-441.81818174C953.81818174 267.97727305 756.02272695 70.18181826 512 70.18181826 267.97727305 70.18181826 70.18181826 267.97727305 70.18181826 512c0 244.02272695 197.79545479 441.81818174 441.81818174 441.81818174z m0-65.45454522a376.36363653 376.36363653 0 1 1 0-752.72727305 376.36363653 376.36363653 0 0 1 0 752.72727305z" p-id="22067" fill="currentColor"></path><path d="M296 671.50454521a305.46818174 305.46818174 0 0 0 432 0 32.72727305 32.72727305 0 1 0-46.30909131-46.26818173 240.01363652 240.01363652 0 0 1-339.38181738 0 32.72727305 32.72727305 0 1 0-46.30909131 46.26818173z" p-id="22068" fill="currentColor"></path><path d="M358.59090869 426.78636347m-51.13636348 0a51.13636347 51.13636347 0 1 0 102.27272784 0 51.13636347 51.13636347 0 1 0-102.27272784 0Z" p-id="22069" fill="currentColor"></path><path d="M665.40909131 426.78636347m-51.13636436 0a51.13636347 51.13636347 0 1 0 102.27272784 0 51.13636347 51.13636347 0 1 0-102.27272784 0Z" p-id="22070" fill="currentColor"></path></svg>',
          title: "掌握常用搭配和惯用表达",
          desc: "Earthworm 集成了丰富的词汇搭配和惯用表达学习资源，帮助学习者精准掌握语言的自然表达方式，使得语言运用更加地道、流畅，增强交流的自然性和效果",
        },
        {
          icon: '<svg t="1711851013197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23372" width="25" height="25"><path d="M671.402667 190.190933 671.402667 478.549333l0 288.3584c0 20.980622-27.500089 29.377422-38.820978 11.719111-64.773689-100.955022-128.750933-153.895822-353.427911-165.114311l70.929067 230.570667-106.006756 0-71.736889-233.187556C102.058667 607.675733 45.966222 549.626311 45.966222 478.549333c0-73.147733 59.357867-132.676267 132.5056-132.676267 308.110222 0 380.541156-52.747378 454.098489-167.412622C643.902578 160.813511 671.402667 169.210311 671.402667 190.190933zM853.879467 506.493156c0 55.261867-18.591289 106.018133-46.569244 144.418133 0 0-11.207111 15.348622-29.809778 15.348622-19.1488 0-36.056178-16.0768-36.056178-36.2496 0-11.912533 7.133867-21.595022 7.133867-21.595022 13.312-19.467378 32.813511-49.368178 32.813511-101.922133s-19.501511-82.466133-32.813511-101.933511c0 0-7.133867-9.682489-7.133867-21.595022 0-20.1728 16.907378-36.2496 36.056178-36.2496 18.602667 0 29.809778 15.348622 29.809778 15.348622C835.299556 400.475022 853.879467 451.231289 853.879467 506.493156zM826.971022 297.301333c0 0-16.361244-11.696356-16.361244-30.025956 0-20.627911 16.941511-36.386133 36.2496-36.386133 12.413156 0 23.847822 8.749511 23.847822 8.749511 43.815822 32.768 113.891556 116.736 113.891556 266.8544S914.511644 740.579556 870.695822 773.347556c0 0-11.434667 8.749511-23.847822 8.749511-19.296711 0-36.2496-15.758222-36.2496-36.386133 0-18.3296 16.361244-30.025956 16.361244-30.025956 50.9952-37.626311 85.128533-112.833422 85.128533-209.191822S877.954844 334.927644 826.971022 297.301333z" p-id="23373" fill="currentColor"></path></svg>',
          title: "键盘音效",
          desc: "为追求极致学习体验的专业用户提供了多样化的键盘音效设置及发音方法选择，旨在通过优化听觉反馈，增强学习的沉浸感和效率，助力英语学习过程更加高效愉悦",
        },
      ];
      return ($, g) => {
        const v = gt,
          y = ut;
        return (
          d(),
          h(
            N,
            null,
            [
              t("div", p1, [
                w(v, {
                  title: "了解有关 Earthworm 更多信息",
                  description: ["通过这些强大的功能将 Earthworm 提升到一个新的水平！"],
                }),
                t("section", _1, [
                  t("div", f1, [
                    (d(),
                    h(
                      N,
                      null,
                      G(x, (u, _) =>
                        t("div", { key: _, class: "flex items-start gap-4" }, [
                          t("span", g1, [t("span", { innerHTML: u.icon }, null, 8, v1)]),
                          t("div", null, [t("h2", x1, L(u.title), 1), t("p", y1, L(u.desc), 1)]),
                        ]),
                      ),
                      64,
                    )),
                  ]),
                ]),
              ]),
              w(y),
            ],
            64,
          )
        );
      };
    },
  }),
  $1 = [
    {
      nickname: "cuixiaorui",
      account: "cui_xiaorui",
      avatar: "/commentsImgs/cuixiaorui.jpg",
      link: "",
      comment:
        "Earthworm is more than just a tool; It's a journey into the heart of language learning, making every sentence and conjunction an adventure. With its addictive gameplay, it's not just an exercise, it's a daily habit that invites you to take a deeper look at the richness of the English language!",
      chinese:
        " Earthworm 不仅仅是一个工具;这是一次进入语言学习核心的旅程，让每个句子和连词都成为一次冒险。凭借其令人上瘾的游戏玩法，它不仅是一种练习，而且是一种日常习惯，邀请您更深入地了解英语的丰富性！",
      time: 1708423574717,
      likeCount: 1342,
    },
    {
      nickname: "fengstats",
      account: "fengstats",
      avatar: "/commentsImgs/fengstats.png",
      link: "",
      comment:
        "I am simply fascinated by this app! This progressive way of learning makes each stage full of challenges, but also gives me a strong sense of achievement. I have been unable to stop the pace of learning, I am eager to make a little progress, I hope you can climb another tall building!",
      chinese:
        "我简直被这款应用迷住了！这种渐进式的学习方式，让每个阶段都充满挑战，同时也让我有了一种强烈的成就感。我已经不能停下学习的脚步，我渴望一点点的进步，希望能更上一层楼！",
      time: 1708409873687,
      likeCount: 197,
    },
    {
      nickname: "zclsx",
      account: "jiushi21",
      avatar: "/commentsImgs/zclsx.jpg",
      link: "",
      comment:
        "This application overcomes the boredom of English learning. I can't stop brushing courses now.",
      chinese: "这个应用克服了英语学习的枯燥，我现在刷课程刷得停不下来。",
      time: 1706005913747,
      likeCount: 79,
    },
    {
      nickname: "Nauxscript",
      account: "Nauxscript",
      avatar: "/commentsImgs/Nauxscript.jpg",
      link: "",
      comment:
        "Now I go through the app every day and I feel that my English has improved by leaps and bounds, which is fun and fulfilling. I hope to be able to join and share after studying like me, it will be addictive!",
      chinese:
        "现在我每天都要浏览这个应用程序，我觉得我的英语突飞猛进，有趣又充满成就感。我希望能够加入和我一样学习后进行打卡分享，会上瘾的！",
      time: 1706931528936,
      likeCount: 520,
    },
    {
      nickname: "Ims",
      account: "Immersecode",
      avatar: "/commentsImgs/yaolifeng0629.jpg",
      link: "",
      comment:
        "Such interesting and fulfilling English learning application, it is really overwhelming. I practice it every day now, it has become a habit. Awesome!",
      chinese:
        "如此有趣又充实的英语学习应用，真是让人不知所措。我现在每天都在练习，这已经成为一种习惯。棒！",
      time: 1706863861905,
      likeCount: 98,
    },
    {
      nickname: "vampirewy",
      account: "vampirewy",
      avatar: "/commentsImgs/vampirewy.jpg",
      link: "",
      comment:
        "Through sentence splitting, I feel that I have a deeper understanding of sentences after brushing the lessons. The feeling is subtle, and when I open it the next day, it gets smoother every time!",
      chinese:
        "通过句子拆分进行学习，我感觉我刷课之后，对句子的理解更加深刻。这种感觉是潜移默化的，当我第二天打开，每次都会变得更加流畅！",
      time: 1704763341161,
      likeCount: 86,
    },
    {
      nickname: "hildxd",
      account: "hildxd",
      avatar: "/commentsImgs/hildxd.jpg",
      link: "",
      comment:
        "I have never been so enthusiastic about learning as I am now. This app really makes learning so interesting that every learning is like a challenge that I can't resist. It's such a great feeling that I can keep brushing the course without getting bored.",
      chinese:
        "再也没有像现在这样，我对学习如此充满热情。这个应用真是把学习变得如此有趣，每一次学习都像是一种挑战，让我无法抗拒。这种感觉太棒了，我能够一直刷课程而不觉得无聊",
      time: 1709913419937,
      likeCount: 486,
    },
    {
      nickname: "zuowendong",
      account: "zuowendong",
      avatar: "/commentsImgs/zuowendong.jpg",
      link: "",
      comment:
        "I really can't resist the magic of this English learning application of conjunctions and sentences. When I am free every day, I will habitually open this app and can't help but challenge myself. This is a new way of entertainment for me!",
      chinese:
        "我真的无法抵抗这款连词造句的英语学习应用的魔力，每天闲下来的时候，我都会习惯性地打开这款应用，忍不住去挑战一下自己，这对我来说是一种全新的娱乐方式！",
      time: 1708567188968,
      likeCount: 232,
    },
    {
      nickname: "Hazel-Lin",
      account: "HazelLin",
      avatar: "/commentsImgs/Hazel-Lin.jpg",
      link: "",
      comment:
        "I didn't expect that learning English could be so interesting. I can't stop the way this conjunction makes sentences.",
      chinese: "真没想到学习英语可以这么有趣，这个连词造句的方式简直让我停不下来。",
      time: 1703189419913,
      likeCount: 78,
    },
  ],
  b1 = { class: "flex flex-col pt-24" },
  k1 = { class: "mx-auto max-w-screen-xl" },
  D1 = { class: "mt-8 sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8" },
  C1 = {
    class:
      "cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 dark:bg-[#111128] dark:hover:shadow-blue-400/50",
  },
  M1 = { class: "flex h-full flex-col justify-between p-6" },
  T1 = { class: "flex items-center gap-4" },
  S1 = ["src"],
  I1 = { class: "flex-grow" },
  L1 = { class: "mt-0.5 text-lg font-bold dark:text-white" },
  j1 = { class: "text-xs text-gray-500" },
  E1 = { class: "mt-4 text-sm text-gray-700 dark:text-gray-300 lg:text-base" },
  z1 = { class: "my-2 flex items-center justify-between" },
  H1 = { class: "text-xs text-gray-500" },
  O1 = t("div", { class: "mx-auto my-4" }, null, -1),
  Y1 = { class: "mt-4 flex items-center justify-between text-xs" },
  F1 = { class: "flex items-center" },
  B1 = { class: "text-gray-500 dark:text-gray-400" },
  N1 = ["href"],
  A1 = V({
    __name: "Comments",
    setup(m) {
      return (x, $) => {
        const g = gt,
          v = ct,
          y = ut;
        return (
          d(),
          h(
            N,
            null,
            [
              t("section", b1, [
                t("div", k1, [
                  w(g, {
                    title: "用户反馈",
                    description: [
                      "如果您正在使用 Earthworm ，请随时在 Twitter 上向我们提供您的反馈!",
                    ],
                  }),
                  t("div", D1, [
                    (d(!0),
                    h(
                      N,
                      null,
                      G(
                        T($1),
                        (u, _) => (
                          d(),
                          h("div", { key: _, class: "mb-8 sm:break-inside-avoid" }, [
                            t("blockquote", C1, [
                              t("div", M1, [
                                t("div", T1, [
                                  t(
                                    "img",
                                    {
                                      src: u.avatar,
                                      alt: "",
                                      class:
                                        "h-12 w-12 rounded-full border-2 border-purple-400 object-cover p-1 lg:h-14 lg:w-14",
                                    },
                                    null,
                                    8,
                                    S1,
                                  ),
                                  t("div", I1, [
                                    t("p", L1, L(u.nickname), 1),
                                    t("p", j1, L("@" + u.account), 1),
                                  ]),
                                  w(v, {
                                    name: "i-simple-icons-twitter",
                                    class: "h-6 w-6 self-start text-[#03a9f4]",
                                  }),
                                ]),
                                t("p", E1, L(u.chinese), 1),
                                t("div", z1, [t("div", H1, L(T(Jt)({ timestamp: u.time })), 1)]),
                                O1,
                                t("div", Y1, [
                                  t("div", F1, [
                                    w(v, {
                                      name: "i-ph-heart-straight-fill",
                                      class:
                                        "mr-2 h-5 w-5 fill-current text-pink-300 dark:text-blue-300",
                                    }),
                                    t("span", B1, L(u.likeCount) + " likes", 1),
                                  ]),
                                  t(
                                    "a",
                                    {
                                      href: u.link,
                                      class: "text-blue-500 dark:text-blue-400",
                                      tabindex: "-1",
                                      "aria-disabled": "true",
                                      style: { "pointer-events": "none" },
                                    },
                                    "See " + L(u.account) + "'s",
                                    9,
                                    N1,
                                  ),
                                ]),
                              ]),
                            ]),
                          ])
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
              ]),
              w(y),
            ],
            64,
          )
        );
      };
    },
  }),
  U1 = { class: "body-font overflow-hidden pt-24 text-gray-600", id: "faq" },
  R1 = { class: "divide-y divide-gray-100 py-16 dark:divide-gray-800" },
  V1 = ["open"],
  W1 = { class: "flex cursor-pointer items-center justify-between py-5" },
  Z1 = { class: "text-base font-medium text-black dark:text-gray-300 lg:text-lg" },
  G1 = {
    class: "transition-max-height mb-4 overflow-hidden duration-500 ease-in-out dark:text-gray-500",
  },
  P1 = { key: 0 },
  Q1 = V({
    __name: "Questions",
    setup(m) {
      const x = [
        {
          title: "如何向开发团队提出更多的功能需求？",
          content: [
            "可以加入我们官方 Telegram 群组, 详细的描述您想要的功能以及告知这个功能想要解决的问题是什么",
            "也可以去 github/issues 来提交您想要的功能需求",
          ],
        },
        {
          title: "如何向开发团队报告我在应用中遇到的错误或漏洞？",
          content: [
            "如果您在应用中发现了错误或漏洞，可以加入我们官方 Telegram 群组，提供详细的描述和重现问题的步骤，当然最好提供一个小视频 🤪",
          ],
        },
        {
          title: "如何为 Earthworm 贡献代码？",
          content: [
            "我们提供了完整的贡献代码指南，可以先读一读(页脚处有链接)",
            "去 github/issues 逛一逛， 也可以基于你在使用中遇到的问题提一个 issue 并且自己尝试修复",
          ],
        },
        {
          title: "Earthworm 项目是完全免费的吗？",
          content: [
            "不完全免费，因为想要长久发展收费是必然的。未来会采用订阅模式，为会员提供更多的学习内容和功能",
          ],
        },
      ];
      return ($, g) => {
        const v = gt,
          y = ct,
          u = ut;
        return (
          d(),
          h(
            N,
            null,
            [
              t("section", U1, [
                w(v, {
                  title: "常见问题解答",
                  description: [
                    "如果您找不到所需的内容，请加入 Telegram 群组",
                    "我们会尽快回复您！",
                  ],
                }),
                t("div", R1, [
                  (d(),
                  h(
                    N,
                    null,
                    G(x, (_, j) =>
                      t(
                        "details",
                        { key: j, class: "group", open: j === 0 },
                        [
                          t("summary", W1, [
                            t("h2", Z1, L(_.title), 1),
                            w(y, { name: "i-ph-caret-right-bold", class: "icon h-6 w-6" }),
                          ]),
                          t("div", G1, [
                            (d(!0),
                            h(
                              N,
                              null,
                              G(
                                _.content,
                                (C, b) => (
                                  d(),
                                  h(
                                    "p",
                                    { key: `content-${b}`, class: "py-2 text-sm lg:text-base" },
                                    [
                                      _.content.length > 1
                                        ? (d(), h("span", P1, L(b + 1) + ". ", 1))
                                        : Ct("", !0),
                                      tt(" " + L(C), 1),
                                    ],
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]),
                        ],
                        8,
                        V1,
                      ),
                    ),
                    64,
                  )),
                ]),
              ]),
              w(u),
            ],
            64,
          )
        );
      };
    },
  }),
  J1 = et(Q1, [["__scopeId", "data-v-6ac003aa"]]),
  q1 = {},
  X1 = (m) => (_t("data-v-5a88d691"), (m = m()), ft(), m),
  K1 = { id: "contact" },
  tn = { class: "mx-auto max-w-screen-xl space-y-6 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-6" },
  en = { class: "grid grid-cols-1 gap-6 lg:grid-cols-3" },
  nn = it(
    '<div class="flex items-center" data-v-5a88d691><img width="48" height="48" class="mr-6 overflow-hidden rounded-md" src="' +
      Lt +
      '" alt="earth-worm-logo" data-v-5a88d691><span class="mt-4 text-3xl" data-v-5a88d691>Earthworm</span></div><p class="typing mt-4 max-w-[16rem] text-base leading-relaxed" data-v-5a88d691> 一起来加入我们 <span class="bg-gradient-to-r from-purple-400 via-purple-400 to-gray-400 bg-clip-text text-transparent dark:from-purple-600 dark:to-gray-100" data-v-5a88d691>Earthworm</span>! </p>',
    2,
  ),
  sn = { class: "mt-6 flex gap-6 transition" },
  an = { href: "https://x.com/cui_xiaorui", rel: "noreferrer", target: "_blank" },
  on = X1(() => t("span", { class: "sr-only" }, "Twitter", -1)),
  rn = { href: "https://t.me/+dohhXSz-5n1kZDQ1", rel: "noreferrer", target: "_blank" },
  cn = { href: "https://github.com/cuixueshe/earthworm", rel: "noreferrer", target: "_blank" },
  ln = it(
    '<div class="grid grid-cols-1 gap-6 transition sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4" data-v-5a88d691><div data-v-5a88d691><p class="text-lg font-medium" data-v-5a88d691>Earthworm</p><ul class="mt-6 space-y-4 text-sm" data-v-5a88d691><li data-v-5a88d691><a href="https://github.com/cuixueshe/earthworm" class="hover:opacity-80" data-v-5a88d691> 开源 </a></li><li data-v-5a88d691><a href="https://github.com/cuixueshe/earthworm/issues" class="hover:opacity-80" data-v-5a88d691> 问题 </a></li><li data-v-5a88d691><a href="https://github.com/cuixueshe/earthworm/issues/91" class="hover:opacity-80" data-v-5a88d691> 贡献代码 </a></li></ul></div><div data-v-5a88d691><p class="text-lg font-medium" data-v-5a88d691>团队</p><ul class="mt-6 space-y-4 text-sm" data-v-5a88d691><li data-v-5a88d691><a href="https://t.me/+dohhXSz-5n1kZDQ1" class="hover:opacity-80" data-v-5a88d691> 联系我们 </a></li></ul></div></div>',
    1,
  );
function dn(m, x) {
  const $ = ct;
  return (
    d(),
    h("footer", K1, [
      t("div", tn, [
        t("div", en, [
          t("div", null, [
            nn,
            t("ul", sn, [
              t("li", null, [
                t("a", an, [
                  on,
                  w($, { name: "i-simple-icons-x", class: "icon-link icon-link-gray" }),
                ]),
              ]),
              t("li", null, [
                t("a", rn, [
                  w($, { name: "i-simple-icons-telegram", class: "icon-link icon-link-gray" }),
                ]),
              ]),
              t("li", null, [
                t("a", cn, [
                  w($, { name: "i-simple-icons-github", class: "icon-link icon-link-gray" }),
                ]),
              ]),
            ]),
          ]),
          ln,
        ]),
      ]),
    ])
  );
}
const un = et(q1, [
    ["render", dn],
    ["__scopeId", "data-v-5a88d691"],
  ]),
  hn = ["data-content"],
  mn = V({
    __name: "BackTop",
    setup(m) {
      const x = Nt(),
        $ = () => {
          if (x.path === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
          } else window.location.href = "/";
        };
      return (g, v) => {
        const y = ct;
        return (
          d(),
          h(
            "button",
            {
              class: "button cursor-pointer bg-white transition-all duration-300 dark:bg-[#05051d]",
              "data-content": T(x).path === "/" ? "Back to Top" : "Go to Home",
              onClick: $,
            },
            [
              w(y, {
                name: "i-ph-arrow-up-bold",
                class: "svgIcon h-5 w-5 fill-black transition-all duration-300 dark:fill-white",
              }),
            ],
            8,
            hn,
          )
        );
      };
    },
  }),
  pn = et(mn, [["__scopeId", "data-v-39167b82"]]),
  _n = { class: "font-customFont" },
  fn = V({
    __name: "index",
    setup(m) {
      const { startEarthworm: x } = $();
      function $() {
        const g = At();
        async function v() {
          Mt() || g.push("/course-pack");
        }
        return (
          Dt(() => {
            Xt("enter", v);
          }),
          Ut(() => {
            Kt("enter", v);
          }),
          { startEarthworm: v }
        );
      }
      return (g, v) => {
        const y = l1,
          u = w1,
          _ = A1,
          j = J1,
          C = un,
          b = pn;
        return (
          d(),
          h("div", _n, [
            w(y, { onStartEarthworm: T(x) }, null, 8, ["onStartEarthworm"]),
            w(u),
            w(_),
            w(j),
            w(C),
            w(b, { class: "sticky bottom-28 ml-auto flex justify-end sm:block" }),
          ])
        );
      };
    },
  }),
  In = V({
    __name: "index",
    setup(m) {
      return (x, $) => {
        const g = Ve,
          v = fn;
        return T(Mt)() ? (d(), pt(g, { key: 0 })) : (d(), pt(v, { key: 1 }));
      };
    },
  });
export { In as default };
