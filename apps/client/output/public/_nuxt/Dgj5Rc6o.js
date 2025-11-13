import { u as Rt } from "./BC2xWXSP.js";
import {
  N as _e,
  J as $,
  aQ as $t,
  i as A,
  Y as At,
  X as C,
  _ as Ct,
  f as D,
  al as de,
  n as Dt,
  D as ee,
  aR as Ft,
  r as g,
  C as h,
  j,
  aw as Je,
  k as K,
  a as Le,
  aP as Lt,
  R as Nt,
  T as Ot,
  av as P,
  L as Pt,
  w as Q,
  o as qe,
  Q as Se,
  aO as St,
  ai as T,
  b as Te,
  ag as Tt,
  M as Ve,
  m as Ye,
  G as Ze,
} from "./BJowY05t.js";

const Ht = "data-n-ids",
  Mt = "-";
function kt(e) {
  var l, a, i, o, u, s;
  if (typeof e != "string") throw new TypeError("[nuxt] [useId] key must be a string.");
  e = `n${e.slice(1)}`;
  const t = Tt(),
    n = Je();
  if (!n) throw new TypeError("[nuxt] `useId` must be called within a component setup function.");
  t._id || (t._id = 0),
    n._nuxtIdIndex || (n._nuxtIdIndex = {}),
    (l = n._nuxtIdIndex)[e] || (l[e] = 0);
  const r = e + Mt + n._nuxtIdIndex[e]++;
  if (t.payload.serverRendered && t.isHydrating && !$(St, !1)) {
    const d =
        ((a = n.vnode.el) == null ? void 0 : a.nodeType) === 8 &&
        (o = (i = n.vnode.el) == null ? void 0 : i.nextElementSibling) != null &&
        o.getAttribute
          ? (u = n.vnode.el) == null
            ? void 0
            : u.nextElementSibling
          : n.vnode.el,
      v = JSON.parse(
        ((s = d == null ? void 0 : d.getAttribute) == null ? void 0 : s.call(d, Ht)) || "{}",
      );
    if (v[r]) return v[r];
  }
  return e + "_" + t._id++;
}
const jt = {
  wrapper: "relative z-50",
  inner: "fixed inset-0 overflow-y-auto",
  container: "flex min-h-full items-end sm:items-center justify-center text-center",
  padding: "p-4 sm:p-0",
  margin: "sm:my-8",
  base: "relative text-left rtl:text-right flex flex-col",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    transition: {
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
    },
  },
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "rounded-lg",
  shadow: "shadow-xl",
  width: "w-full sm:max-w-lg",
  height: "",
  fullscreen: "w-screen h-screen",
  transition: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  },
};
function Me(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          }),
        );
}
function ne() {
  let e = [],
    t = {
      addEventListener(n, r, l, a) {
        return n.addEventListener(r, l, a), t.add(() => n.removeEventListener(r, l, a));
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        t.requestAnimationFrame(() => {
          t.requestAnimationFrame(...n);
        });
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          Me(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let a = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: a });
          })
        );
      },
      group(n) {
        let r = ne();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let l of e.splice(r, 1)) l();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
let et = Symbol("headlessui.useid"),
  xt = 0;
function ke() {
  return $(et, () => `${++xt}`)();
}
function Bt(e) {
  P(et, e);
}
function E(e) {
  var t;
  if (e == null || e.value == null) return null;
  let n = (t = e.value.$el) != null ? t : e.value;
  return n instanceof Node ? n : null;
}
function H(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t,
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`,
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, H), r);
}
var It = Object.defineProperty,
  Ut = (e, t, n) =>
    t in e ? It(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Ge = (e, t, n) => (Ut(e, typeof t != "symbol" ? t + "" : t, n), n);
let Wt = class {
    constructor() {
      Ge(this, "current", this.detect()), Ge(this, "currentId", 0);
    }
    set(t) {
      this.current !== t && ((this.currentId = 0), (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
  },
  re = new Wt();
function X(e) {
  if (re.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = E(e);
    if (t) return t.ownerDocument;
  }
  return document;
}
let Ae = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var B = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(B || {}),
  tt = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(tt || {}),
  Vt = ((e) => ((e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e))(Vt || {});
function _t(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Ae)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      );
}
var nt = ((e) => ((e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e))(nt || {});
function qt(e, t = 0) {
  var n;
  return e === ((n = X(e)) == null ? void 0 : n.body)
    ? !1
    : H(t, {
        0() {
          return e.matches(Ae);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(Ae)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var Yt = ((e) => ((e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e))(Yt || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ));
function q(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Gt = ["textarea", "input"].join(",");
function Kt(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Gt)) != null
    ? n
    : !1;
}
function Xt(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      a = t(r);
    if (l === null || a === null) return 0;
    let i = l.compareDocumentPosition(a);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ve(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {}) {
  var a;
  let i =
      (a = Array.isArray(e)
        ? e.length > 0
          ? e[0].ownerDocument
          : document
        : e == null
          ? void 0
          : e.ownerDocument) != null
        ? a
        : document,
    o = Array.isArray(e) ? (n ? Xt(e) : e) : _t(e);
  l.length > 0 && o.length > 1 && (o = o.filter((f) => !l.includes(f))), (r = r ?? i.activeElement);
  let u = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })(),
    s = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
      if (t & 8) return o.length - 1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })(),
    d = t & 32 ? { preventScroll: !0 } : {},
    v = 0,
    c = o.length,
    p;
  do {
    if (v >= c || v + c <= 0) return 0;
    let f = s + v;
    if (t & 16) f = (f + c) % c;
    else {
      if (f < 0) return 3;
      if (f >= c) return 1;
    }
    (p = o[f]), p == null || p.focus(d), (v += u);
  } while (p !== i.activeElement);
  return t & 6 && Kt(p) && p.select(), 2;
}
function rt() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0)
  );
}
function zt() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Qt() {
  return rt() || zt();
}
function ce(e, t, n) {
  re.isServer ||
    C((r) => {
      document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
    });
}
function lt(e, t, n) {
  re.isServer ||
    C((r) => {
      window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
    });
}
function Jt(e, t, n = h(() => !0)) {
  function r(a, i) {
    if (!n.value || a.defaultPrevented) return;
    let o = i(a);
    if (o === null || !o.getRootNode().contains(o)) return;
    let u = (function s(d) {
      return typeof d == "function" ? s(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    })(e);
    for (let s of u) {
      if (s === null) continue;
      let d = s instanceof HTMLElement ? s : E(s);
      if ((d != null && d.contains(o)) || (a.composed && a.composedPath().includes(d))) return;
    }
    return !qt(o, nt.Loose) && o.tabIndex !== -1 && a.preventDefault(), t(a, o);
  }
  let l = g(null);
  ce(
    "pointerdown",
    (a) => {
      var i, o;
      n.value &&
        (l.value =
          ((o = (i = a.composedPath) == null ? void 0 : i.call(a)) == null ? void 0 : o[0]) ||
          a.target);
    },
    !0,
  ),
    ce(
      "mousedown",
      (a) => {
        var i, o;
        n.value &&
          (l.value =
            ((o = (i = a.composedPath) == null ? void 0 : i.call(a)) == null ? void 0 : o[0]) ||
            a.target);
      },
      !0,
    ),
    ce(
      "click",
      (a) => {
        Qt() || (l.value && (r(a, () => l.value), (l.value = null)));
      },
      !0,
    ),
    ce("touchend", (a) => r(a, () => (a.target instanceof HTMLElement ? a.target : null)), !0),
    lt(
      "blur",
      (a) =>
        r(a, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    );
}
var me = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(me || {}),
  I = ((e) => ((e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e))(I || {});
function x({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...l }) {
  var a;
  let i = ot(r, n),
    o = Object.assign(l, { props: i });
  if (e || (t & 2 && i.static)) return $e(o);
  if (t & 1) {
    let u = (a = i.unmount) == null || a ? 0 : 1;
    return H(u, {
      0() {
        return null;
      },
      1() {
        return $e({ ...l, props: { ...i, hidden: !0, style: { display: "none" } } });
      },
    });
  }
  return $e(o);
}
function $e({ props: e, attrs: t, slots: n, slot: r, name: l }) {
  var a, i;
  let { as: o, ...u } = it(e, ["unmount", "static"]),
    s = (a = n.default) == null ? void 0 : a.call(n, r),
    d = {};
  if (r) {
    let v = !1,
      c = [];
    for (let [p, f] of Object.entries(r)) typeof f == "boolean" && (v = !0), f === !0 && c.push(p);
    v && (d["data-headlessui-state"] = c.join(" "));
  }
  if (o === "template") {
    if (((s = at(s ?? [])), Object.keys(u).length > 0 || Object.keys(t).length > 0)) {
      let [v, ...c] = s ?? [];
      if (!Zt(v) || c.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${l} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(u)
              .concat(Object.keys(t))
              .map((m) => m.trim())
              .filter((m, w, N) => N.indexOf(m) === w)
              .sort((m, w) => m.localeCompare(w))
              .map((m) => `  - ${m}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((m) => `  - ${m}`).join(`
`),
          ].join(`
`),
        );
      let p = ot((i = v.props) != null ? i : {}, u, d),
        f = Lt(v, p, !0);
      for (let m in p) m.startsWith("on") && (f.props || (f.props = {}), (f.props[m] = p[m]));
      return f;
    }
    return Array.isArray(s) && s.length === 1 ? s[0] : s;
  }
  return T(o, Object.assign({}, u, d), { default: () => s });
}
function at(e) {
  return e.flatMap((t) => (t.type === Ze ? at(t.children) : [t]));
}
function ot(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let l in r)
      l.startsWith("on") && typeof r[l] == "function"
        ? (n[l] != null || (n[l] = []), n[l].push(r[l]))
        : (t[l] = r[l]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n)
    Object.assign(t, {
      [r](l, ...a) {
        let i = n[r];
        for (let o of i) {
          if (l instanceof Event && l.defaultPrevented) return;
          o(l, ...a);
        }
      },
    });
  return t;
}
function it(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function Zt(e) {
  return e == null
    ? !1
    : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var he = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(he || {});
let Pe = D({
    name: "Hidden",
    props: {
      as: { type: [Object, String], default: "div" },
      features: { type: Number, default: 1 },
    },
    setup(e, { slots: t, attrs: n }) {
      return () => {
        var r;
        let { features: l, ...a } = e,
          i = {
            "aria-hidden": (l & 2) === 2 ? !0 : (r = a["aria-hidden"]) != null ? r : void 0,
            hidden: (l & 4) === 4 ? !0 : void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...((l & 4) === 4 && (l & 2) !== 2 && { display: "none" }),
            },
          };
        return x({ ourProps: i, theirProps: a, slot: {}, attrs: n, slots: t, name: "Hidden" });
      };
    },
  }),
  ut = Symbol("Context");
var L = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(L || {});
function en() {
  return je() !== null;
}
function je() {
  return $(ut, null);
}
function tn(e) {
  P(ut, e);
}
var st = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(st || {});
function nn(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let V = [];
nn(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      V[0] !== t.target &&
      (V.unshift(t.target), (V = V.filter((n) => n != null && n.isConnected)), V.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function dt(e, t, n, r) {
  re.isServer ||
    C((l) => {
      (e = e ?? window), e.addEventListener(t, n, r), l(() => e.removeEventListener(t, n, r));
    });
}
var te = ((e) => ((e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e))(
  te || {},
);
function rn() {
  let e = g(0);
  return (
    lt("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
    }),
    e
  );
}
function ct(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.value) {
    let r = E(n);
    r instanceof HTMLElement && t.add(r);
  }
  return t;
}
var ft = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(ft || {});
let J = Object.assign(
  D({
    name: "FocusTrap",
    props: {
      as: { type: [Object, String], default: "div" },
      initialFocus: { type: Object, default: null },
      features: { type: Number, default: 30 },
      containers: { type: [Object, Function], default: g(new Set()) },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let l = g(null);
      r({ el: l, $el: l });
      let a = h(() => X(l)),
        i = g(!1);
      A(() => (i.value = !0)),
        j(() => (i.value = !1)),
        an(
          { ownerDocument: a },
          h(() => i.value && !!(e.features & 16)),
        );
      let o = on(
        { ownerDocument: a, container: l, initialFocus: h(() => e.initialFocus) },
        h(() => i.value && !!(e.features & 2)),
      );
      un(
        { ownerDocument: a, container: l, containers: e.containers, previousActiveElement: o },
        h(() => i.value && !!(e.features & 8)),
      );
      let u = rn();
      function s(p) {
        let f = E(l);
        f &&
          ((m) => m())(() => {
            H(u.value, {
              [te.Forwards]: () => {
                ve(f, B.First, { skipElements: [p.relatedTarget] });
              },
              [te.Backwards]: () => {
                ve(f, B.Last, { skipElements: [p.relatedTarget] });
              },
            });
          });
      }
      let d = g(!1);
      function v(p) {
        p.key === "Tab" &&
          ((d.value = !0),
          requestAnimationFrame(() => {
            d.value = !1;
          }));
      }
      function c(p) {
        if (!i.value) return;
        let f = ct(e.containers);
        E(l) instanceof HTMLElement && f.add(E(l));
        let m = p.relatedTarget;
        m instanceof HTMLElement &&
          m.dataset.headlessuiFocusGuard !== "true" &&
          (pt(f, m) ||
            (d.value
              ? ve(
                  E(l),
                  H(u.value, { [te.Forwards]: () => B.Next, [te.Backwards]: () => B.Previous }) |
                    B.WrapAround,
                  { relativeTo: p.target },
                )
              : p.target instanceof HTMLElement && q(p.target)));
      }
      return () => {
        let p = {},
          f = { ref: l, onKeydown: v, onFocusout: c },
          { features: m, initialFocus: w, containers: N, ...S } = e;
        return T(Ze, [
          !!(m & 4) &&
            T(Pe, {
              as: "button",
              type: "button",
              "data-headlessui-focus-guard": !0,
              onFocus: s,
              features: he.Focusable,
            }),
          x({
            ourProps: f,
            theirProps: { ...t, ...S },
            slot: p,
            attrs: t,
            slots: n,
            name: "FocusTrap",
          }),
          !!(m & 4) &&
            T(Pe, {
              as: "button",
              type: "button",
              "data-headlessui-focus-guard": !0,
              onFocus: s,
              features: he.Focusable,
            }),
        ]);
      };
    },
  }),
  { features: ft },
);
function ln(e) {
  let t = g(V.slice());
  return (
    K(
      [e],
      ([n], [r]) => {
        r === !0 && n === !1
          ? Me(() => {
              t.value.splice(0);
            })
          : r === !1 && n === !0 && (t.value = V.slice());
      },
      { flush: "post" },
    ),
    () => {
      var n;
      return (n = t.value.find((r) => r != null && r.isConnected)) != null ? n : null;
    }
  );
}
function an({ ownerDocument: e }, t) {
  let n = ln(t);
  A(() => {
    C(
      () => {
        var r, l;
        t.value ||
          (((r = e.value) == null ? void 0 : r.activeElement) ===
            ((l = e.value) == null ? void 0 : l.body) &&
            q(n()));
      },
      { flush: "post" },
    );
  }),
    j(() => {
      t.value && q(n());
    });
}
function on({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let l = g(null),
    a = g(!1);
  return (
    A(() => (a.value = !0)),
    j(() => (a.value = !1)),
    A(() => {
      K(
        [t, n, r],
        (i, o) => {
          if (i.every((s, d) => (o == null ? void 0 : o[d]) === s) || !r.value) return;
          let u = E(t);
          u &&
            Me(() => {
              var s, d;
              if (!a.value) return;
              let v = E(n),
                c = (s = e.value) == null ? void 0 : s.activeElement;
              if (v) {
                if (v === c) {
                  l.value = c;
                  return;
                }
              } else if (u.contains(c)) {
                l.value = c;
                return;
              }
              v
                ? q(v)
                : ve(u, B.First | B.NoScroll) === tt.Error &&
                  console.warn("There are no focusable elements inside the <FocusTrap />"),
                (l.value = (d = e.value) == null ? void 0 : d.activeElement);
            });
        },
        { immediate: !0, flush: "post" },
      );
    }),
    l
  );
}
function un({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, l) {
  var a;
  dt(
    (a = e.value) == null ? void 0 : a.defaultView,
    "focus",
    (i) => {
      if (!l.value) return;
      let o = ct(n);
      E(t) instanceof HTMLElement && o.add(E(t));
      let u = r.value;
      if (!u) return;
      let s = i.target;
      s && s instanceof HTMLElement
        ? pt(o, s)
          ? ((r.value = s), q(s))
          : (i.preventDefault(), i.stopPropagation(), q(u))
        : q(r.value);
    },
    !0,
  );
}
function pt(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function sn(e) {
  let t = $t(e.getSnapshot());
  return (
    j(
      e.subscribe(() => {
        t.value = e.getSnapshot();
      }),
    ),
    t
  );
}
function dn(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(l) {
      return r.add(l), () => r.delete(l);
    },
    dispatch(l, ...a) {
      let i = t[l].call(n, ...a);
      i && ((n = i), r.forEach((o) => o()));
    },
  };
}
function cn() {
  let e;
  return {
    before({ doc: t }) {
      var n;
      let r = t.documentElement;
      e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
    },
    after({ doc: t, d: n }) {
      let r = t.documentElement,
        l = r.clientWidth - r.offsetWidth,
        a = e - l;
      n.style(r, "paddingRight", `${a}px`);
    },
  };
}
function fn() {
  return rt()
    ? {
        before({ doc: e, d: t, meta: n }) {
          function r(l) {
            return n.containers.flatMap((a) => a()).some((a) => a.contains(l));
          }
          t.microTask(() => {
            var l;
            if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
              let o = ne();
              o.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => o.dispose()));
            }
            let a = (l = window.scrollY) != null ? l : window.pageYOffset,
              i = null;
            t.addEventListener(
              e,
              "click",
              (o) => {
                if (o.target instanceof HTMLElement)
                  try {
                    let u = o.target.closest("a");
                    if (!u) return;
                    let { hash: s } = new URL(u.href),
                      d = e.querySelector(s);
                    d && !r(d) && (i = d);
                  } catch {}
              },
              !0,
            ),
              t.addEventListener(e, "touchstart", (o) => {
                if (o.target instanceof HTMLElement)
                  if (r(o.target)) {
                    let u = o.target;
                    for (; u.parentElement && r(u.parentElement); ) u = u.parentElement;
                    t.style(u, "overscrollBehavior", "contain");
                  } else t.style(o.target, "touchAction", "none");
              }),
              t.addEventListener(
                e,
                "touchmove",
                (o) => {
                  if (o.target instanceof HTMLElement) {
                    if (o.target.tagName === "INPUT") return;
                    if (r(o.target)) {
                      let u = o.target;
                      for (
                        ;
                        u.parentElement &&
                        u.dataset.headlessuiPortal !== "" &&
                        !(u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth);

                      )
                        u = u.parentElement;
                      u.dataset.headlessuiPortal === "" && o.preventDefault();
                    } else o.preventDefault();
                  }
                },
                { passive: !1 },
              ),
              t.add(() => {
                var o;
                let u = (o = window.scrollY) != null ? o : window.pageYOffset;
                a !== u && window.scrollTo(0, a),
                  i && i.isConnected && (i.scrollIntoView({ block: "nearest" }), (i = null));
              });
          });
        },
      }
    : {};
}
function pn() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function vn(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let _ = dn(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: ne(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: vn(n) },
      l = [fn(), cn(), pn()];
    l.forEach(({ before: a }) => (a == null ? void 0 : a(r))),
      l.forEach(({ after: a }) => (a == null ? void 0 : a(r)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
_.subscribe(() => {
  let e = _.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    ((l && !r) || (!l && r)) && _.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && _.dispatch("TEARDOWN", n);
  }
});
function mn(e, t, n) {
  let r = sn(_),
    l = h(() => {
      let a = e.value ? r.value.get(e.value) : void 0;
      return a ? a.count > 0 : !1;
    });
  return (
    K(
      [e, t],
      ([a, i], [o], u) => {
        if (!a || !i) return;
        _.dispatch("PUSH", a, n);
        let s = !1;
        u(() => {
          s || (_.dispatch("POP", o ?? a, n), (s = !0));
        });
      },
      { immediate: !0 },
    ),
    l
  );
}
let Fe = new Map(),
  Z = new Map();
function Ke(e, t = g(!0)) {
  C((n) => {
    var r;
    if (!t.value) return;
    let l = E(e);
    if (!l) return;
    n(function () {
      var i;
      if (!l) return;
      let o = (i = Z.get(l)) != null ? i : 1;
      if ((o === 1 ? Z.delete(l) : Z.set(l, o - 1), o !== 1)) return;
      let u = Fe.get(l);
      u &&
        (u["aria-hidden"] === null
          ? l.removeAttribute("aria-hidden")
          : l.setAttribute("aria-hidden", u["aria-hidden"]),
        (l.inert = u.inert),
        Fe.delete(l));
    });
    let a = (r = Z.get(l)) != null ? r : 0;
    Z.set(l, a + 1),
      a === 0 &&
        (Fe.set(l, { "aria-hidden": l.getAttribute("aria-hidden"), inert: l.inert }),
        l.setAttribute("aria-hidden", "true"),
        (l.inert = !0));
  });
}
function hn({ defaultContainers: e = [], portals: t, mainTreeNodeRef: n } = {}) {
  let r = g(null),
    l = X(r);
  function a() {
    var i, o, u;
    let s = [];
    for (let d of e)
      d !== null &&
        (d instanceof HTMLElement
          ? s.push(d)
          : "value" in d && d.value instanceof HTMLElement && s.push(d.value));
    if (t != null && t.value) for (let d of t.value) s.push(d);
    for (let d of (i = l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null
      ? i
      : [])
      d !== document.body &&
        d !== document.head &&
        d instanceof HTMLElement &&
        d.id !== "headlessui-portal-root" &&
        (d.contains(E(r)) ||
          d.contains(
            (u = (o = E(r)) == null ? void 0 : o.getRootNode()) == null ? void 0 : u.host,
          ) ||
          s.some((v) => d.contains(v)) ||
          s.push(d));
    return s;
  }
  return {
    resolveContainers: a,
    contains(i) {
      return a().some((o) => o.contains(i));
    },
    mainTreeNodeRef: r,
    MainTreeNode() {
      return n != null ? null : T(Pe, { features: he.Hidden, ref: r });
    },
  };
}
let vt = Symbol("ForcePortalRootContext");
function gn() {
  return $(vt, !1);
}
let Xe = D({
    name: "ForcePortalRoot",
    props: {
      as: { type: [Object, String], default: "template" },
      force: { type: Boolean, default: !1 },
    },
    setup(e, { slots: t, attrs: n }) {
      return (
        P(vt, e.force),
        () => {
          let { force: r, ...l } = e;
          return x({
            theirProps: l,
            ourProps: {},
            slot: {},
            slots: t,
            attrs: n,
            name: "ForcePortalRoot",
          });
        }
      );
    },
  }),
  mt = Symbol("StackContext");
var Ce = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(Ce || {});
function yn() {
  return $(mt, () => {});
}
function wn({ type: e, enabled: t, element: n, onUpdate: r }) {
  let l = yn();
  function a(...i) {
    r == null || r(...i), l(...i);
  }
  A(() => {
    K(
      t,
      (i, o) => {
        i ? a(0, e, n) : o === !0 && a(1, e, n);
      },
      { immediate: !0, flush: "sync" },
    );
  }),
    j(() => {
      t.value && a(1, e, n);
    }),
    P(mt, a);
}
let bn = Symbol("DescriptionContext");
function En({ slot: e = g({}), name: t = "Description", props: n = {} } = {}) {
  let r = g([]);
  function l(a) {
    return (
      r.value.push(a),
      () => {
        let i = r.value.indexOf(a);
        i !== -1 && r.value.splice(i, 1);
      }
    );
  }
  return (
    P(bn, { register: l, slot: e, name: t, props: n }),
    h(() => (r.value.length > 0 ? r.value.join(" ") : void 0))
  );
}
function Tn(e) {
  let t = X(e);
  if (!t) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n) return n;
  let r = t.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(r);
}
const De = new WeakMap();
function Sn(e) {
  var t;
  return (t = De.get(e)) != null ? t : 0;
}
function ze(e, t) {
  let n = t(Sn(e));
  return n <= 0 ? De.delete(e) : De.set(e, n), n;
}
let Ln = D({
    name: "Portal",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let r = g(null),
        l = h(() => X(r)),
        a = gn(),
        i = $(ht, null),
        o = g(a === !0 || i == null ? Tn(r.value) : i.resolveTarget());
      o.value && ze(o.value, (c) => c + 1);
      let u = g(!1);
      A(() => {
        u.value = !0;
      }),
        C(() => {
          a || (i != null && (o.value = i.resolveTarget()));
        });
      let s = $(Ne, null),
        d = !1,
        v = Je();
      return (
        K(r, () => {
          if (d || !s) return;
          let c = E(r);
          c && (j(s.register(c), v), (d = !0));
        }),
        j(() => {
          var c, p;
          let f = (c = l.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
          !f ||
            o.value !== f ||
            ze(o.value, (m) => m - 1) ||
            o.value.children.length > 0 ||
            (p = o.value.parentElement) == null ||
            p.removeChild(o.value);
        }),
        () => {
          if (!u.value || o.value === null) return null;
          let c = { ref: r, "data-headlessui-portal": "" };
          return T(
            Ft,
            { to: o.value },
            x({ ourProps: c, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }),
          );
        }
      );
    },
  }),
  Ne = Symbol("PortalParentContext");
function $n() {
  let e = $(Ne, null),
    t = g([]);
  function n(a) {
    return t.value.push(a), e && e.register(a), () => r(a);
  }
  function r(a) {
    let i = t.value.indexOf(a);
    i !== -1 && t.value.splice(i, 1), e && e.unregister(a);
  }
  let l = { register: n, unregister: r, portals: t };
  return [
    t,
    D({
      name: "PortalWrapper",
      setup(a, { slots: i }) {
        return (
          P(Ne, l),
          () => {
            var o;
            return (o = i.default) == null ? void 0 : o.call(i);
          }
        );
      },
    }),
  ];
}
let ht = Symbol("PortalGroupContext"),
  Fn = D({
    name: "PortalGroup",
    props: {
      as: { type: [Object, String], default: "template" },
      target: { type: Object, default: null },
    },
    setup(e, { attrs: t, slots: n }) {
      let r = Ot({
        resolveTarget() {
          return e.target;
        },
      });
      return (
        P(ht, r),
        () => {
          let { target: l, ...a } = e;
          return x({
            theirProps: a,
            ourProps: {},
            slot: {},
            attrs: t,
            slots: n,
            name: "PortalGroup",
          });
        }
      );
    },
  });
var On = ((e) => ((e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e))(On || {});
let Re = Symbol("DialogContext");
function gt(e) {
  let t = $(Re, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, gt), n);
  }
  return t;
}
let fe = "DC8F892D-2EBD-447C-A4C8-A03058436FF4",
  An = D({
    name: "Dialog",
    inheritAttrs: !1,
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      open: { type: [Boolean, String], default: fe },
      initialFocus: { type: Object, default: null },
      id: { type: String, default: null },
      role: { type: String, default: "dialog" },
    },
    emits: { close: (e) => !0 },
    setup(e, { emit: t, attrs: n, slots: r, expose: l }) {
      var a, i;
      let o = (a = e.id) != null ? a : `headlessui-dialog-${ke()}`,
        u = g(!1);
      A(() => {
        u.value = !0;
      });
      let s = !1,
        d = h(() =>
          e.role === "dialog" || e.role === "alertdialog"
            ? e.role
            : (s ||
                ((s = !0),
                console.warn(
                  `Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`,
                )),
              "dialog"),
        ),
        v = g(0),
        c = je(),
        p = h(() => (e.open === fe && c !== null ? (c.value & L.Open) === L.Open : e.open)),
        f = g(null),
        m = h(() => X(f));
      if ((l({ el: f, $el: f }), !(e.open !== fe || c !== null)))
        throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
      if (typeof p.value != "boolean")
        throw new Error(
          `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${p.value === fe ? void 0 : e.open}`,
        );
      let w = h(() => (u.value && p.value ? 0 : 1)),
        N = h(() => w.value === 0),
        S = h(() => v.value > 1),
        U = $(Re, null) !== null,
        [le, ae] = $n(),
        {
          resolveContainers: Y,
          mainTreeNodeRef: oe,
          MainTreeNode: ie,
        } = hn({
          portals: le,
          defaultContainers: [
            h(() => {
              var y;
              return (y = G.panelRef.value) != null ? y : f.value;
            }),
          ],
        }),
        ye = h(() => (S.value ? "parent" : "leaf")),
        ue = h(() => (c !== null ? (c.value & L.Closing) === L.Closing : !1)),
        we = h(() => (U || ue.value ? !1 : N.value)),
        be = h(() => {
          var y, b, F;
          return (F = Array.from(
            (b = (y = m.value) == null ? void 0 : y.querySelectorAll("body > *")) != null ? b : [],
          ).find((O) =>
            O.id === "headlessui-portal-root" ? !1 : O.contains(E(oe)) && O instanceof HTMLElement,
          )) != null
            ? F
            : null;
        });
      Ke(be, we);
      let R = h(() => (S.value ? !0 : N.value)),
        z = h(() => {
          var y, b, F;
          return (F = Array.from(
            (b = (y = m.value) == null ? void 0 : y.querySelectorAll("[data-headlessui-portal]")) !=
              null
              ? b
              : [],
          ).find((O) => O.contains(E(oe)) && O instanceof HTMLElement)) != null
            ? F
            : null;
        });
      Ke(z, R),
        wn({
          type: "Dialog",
          enabled: h(() => w.value === 0),
          element: f,
          onUpdate: (y, b) => {
            if (b === "Dialog")
              return H(y, { [Ce.Add]: () => (v.value += 1), [Ce.Remove]: () => (v.value -= 1) });
          },
        });
      let M = En({ name: "DialogDescription", slot: h(() => ({ open: p.value })) }),
        k = g(null),
        G = {
          titleId: k,
          panelRef: g(null),
          dialogState: w,
          setTitleId(y) {
            k.value !== y && (k.value = y);
          },
          close() {
            t("close", !1);
          },
        };
      P(Re, G);
      let Ie = h(() => !(!N.value || S.value));
      Jt(
        Y,
        (y, b) => {
          y.preventDefault(), G.close(), At(() => (b == null ? void 0 : b.focus()));
        },
        Ie,
      );
      let Ue = h(() => !(S.value || w.value !== 0));
      dt((i = m.value) == null ? void 0 : i.defaultView, "keydown", (y) => {
        Ue.value &&
          (y.defaultPrevented ||
            (y.key === st.Escape && (y.preventDefault(), y.stopPropagation(), G.close())));
      });
      let We = h(() => !(ue.value || w.value !== 0 || U));
      return (
        mn(m, We, (y) => {
          var b;
          return { containers: [...((b = y.containers) != null ? b : []), Y] };
        }),
        C((y) => {
          if (w.value !== 0) return;
          let b = E(f);
          if (!b) return;
          let F = new ResizeObserver((O) => {
            for (let Ee of O) {
              let se = Ee.target.getBoundingClientRect();
              se.x === 0 && se.y === 0 && se.width === 0 && se.height === 0 && G.close();
            }
          });
          F.observe(b), y(() => F.disconnect());
        }),
        () => {
          let { open: y, initialFocus: b, ...F } = e,
            O = {
              ...n,
              ref: f,
              id: o,
              role: d.value,
              "aria-modal": w.value === 0 ? !0 : void 0,
              "aria-labelledby": k.value,
              "aria-describedby": M.value,
            },
            Ee = { open: w.value === 0 };
          return T(Xe, { force: !0 }, () => [
            T(Ln, () =>
              T(Fn, { target: f.value }, () =>
                T(Xe, { force: !1 }, () =>
                  T(
                    J,
                    {
                      initialFocus: b,
                      containers: Y,
                      features: N.value
                        ? H(ye.value, {
                            parent: J.features.RestoreFocus,
                            leaf: J.features.All & ~J.features.FocusLock,
                          })
                        : J.features.None,
                    },
                    () =>
                      T(ae, {}, () =>
                        x({
                          ourProps: O,
                          theirProps: { ...F, ...n },
                          slot: Ee,
                          attrs: n,
                          slots: r,
                          visible: w.value === 0,
                          features: me.RenderStrategy | me.Static,
                          name: "Dialog",
                        }),
                      ),
                  ),
                ),
              ),
            ),
            T(ie),
          ]);
        }
      );
    },
  }),
  Pn = D({
    name: "DialogPanel",
    props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } },
    setup(e, { attrs: t, slots: n, expose: r }) {
      var l;
      let a = (l = e.id) != null ? l : `headlessui-dialog-panel-${ke()}`,
        i = gt("DialogPanel");
      r({ el: i.panelRef, $el: i.panelRef });
      function o(u) {
        u.stopPropagation();
      }
      return () => {
        let { ...u } = e,
          s = { id: a, ref: i.panelRef, onClick: o };
        return x({
          ourProps: s,
          theirProps: u,
          slot: { open: i.dialogState.value === 0 },
          attrs: t,
          slots: n,
          name: "DialogPanel",
        });
      };
    },
  });
function Cn(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function Oe(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function pe(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var He = ((e) => ((e.Finished = "finished"), (e.Cancelled = "cancelled"), e))(He || {});
function Dn(e, t) {
  let n = ne();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [a, i] = [r, l].map((o) => {
      let [u = 0] = o
        .split(",")
        .filter(Boolean)
        .map((s) => (s.includes("ms") ? parseFloat(s) : parseFloat(s) * 1e3))
        .sort((s, d) => d - s);
      return u;
    });
  return (
    a !== 0 ? n.setTimeout(() => t("finished"), a + i) : t("finished"),
    n.add(() => t("cancelled")),
    n.dispose
  );
}
function Qe(e, t, n, r, l, a) {
  let i = ne(),
    o = a !== void 0 ? Cn(a) : () => {};
  return (
    pe(e, ...l),
    Oe(e, ...t, ...n),
    i.nextFrame(() => {
      pe(e, ...n), Oe(e, ...r), i.add(Dn(e, (u) => (pe(e, ...r, ...t), Oe(e, ...l), o(u))));
    }),
    i.add(() => pe(e, ...t, ...n, ...r, ...l)),
    i.add(() => o("cancelled")),
    i.dispose
  );
}
function W(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let xe = Symbol("TransitionContext");
var Nn = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Nn || {});
function Rn() {
  return $(xe, null) !== null;
}
function Hn() {
  let e = $(xe, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Mn() {
  let e = $(Be, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Be = Symbol("NestingContext");
function ge(e) {
  return "children" in e
    ? ge(e.children)
    : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function yt(e) {
  let t = g([]),
    n = g(!1);
  A(() => (n.value = !0)), j(() => (n.value = !1));
  function r(a, i = I.Hidden) {
    let o = t.value.findIndex(({ id: u }) => u === a);
    o !== -1 &&
      (H(i, {
        [I.Unmount]() {
          t.value.splice(o, 1);
        },
        [I.Hidden]() {
          t.value[o].state = "hidden";
        },
      }),
      !ge(t) && n.value && (e == null || e()));
  }
  function l(a) {
    let i = t.value.find(({ id: o }) => o === a);
    return (
      i
        ? i.state !== "visible" && (i.state = "visible")
        : t.value.push({ id: a, state: "visible" }),
      () => r(a, I.Unmount)
    );
  }
  return { children: t, register: l, unregister: r };
}
let wt = me.RenderStrategy,
  bt = D({
    props: {
      as: { type: [Object, String], default: "div" },
      show: { type: [Boolean], default: null },
      unmount: { type: [Boolean], default: !0 },
      appear: { type: [Boolean], default: !1 },
      enter: { type: [String], default: "" },
      enterFrom: { type: [String], default: "" },
      enterTo: { type: [String], default: "" },
      entered: { type: [String], default: "" },
      leave: { type: [String], default: "" },
      leaveFrom: { type: [String], default: "" },
      leaveTo: { type: [String], default: "" },
    },
    emits: {
      beforeEnter: () => !0,
      afterEnter: () => !0,
      beforeLeave: () => !0,
      afterLeave: () => !0,
    },
    setup(e, { emit: t, attrs: n, slots: r, expose: l }) {
      let a = g(0);
      function i() {
        (a.value |= L.Opening), t("beforeEnter");
      }
      function o() {
        (a.value &= ~L.Opening), t("afterEnter");
      }
      function u() {
        (a.value |= L.Closing), t("beforeLeave");
      }
      function s() {
        (a.value &= ~L.Closing), t("afterLeave");
      }
      if (!Rn() && en())
        return () =>
          T(Et, { ...e, onBeforeEnter: i, onAfterEnter: o, onBeforeLeave: u, onAfterLeave: s }, r);
      let d = g(null),
        v = h(() => (e.unmount ? I.Unmount : I.Hidden));
      l({ el: d, $el: d });
      let { show: c, appear: p } = Hn(),
        { register: f, unregister: m } = Mn(),
        w = g(c.value ? "visible" : "hidden"),
        N = { value: !0 },
        S = ke(),
        U = { value: !1 },
        le = yt(() => {
          !U.value && w.value !== "hidden" && ((w.value = "hidden"), m(S), s());
        });
      A(() => {
        let R = f(S);
        j(R);
      }),
        C(() => {
          if (v.value === I.Hidden && S) {
            if (c.value && w.value !== "visible") {
              w.value = "visible";
              return;
            }
            H(w.value, { hidden: () => m(S), visible: () => f(S) });
          }
        });
      let ae = W(e.enter),
        Y = W(e.enterFrom),
        oe = W(e.enterTo),
        ie = W(e.entered),
        ye = W(e.leave),
        ue = W(e.leaveFrom),
        we = W(e.leaveTo);
      A(() => {
        C(() => {
          if (w.value === "visible") {
            let R = E(d);
            if (R instanceof Comment && R.data === "")
              throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
          }
        });
      });
      function be(R) {
        let z = N.value && !p.value,
          M = E(d);
        !M ||
          !(M instanceof HTMLElement) ||
          z ||
          ((U.value = !0),
          c.value && i(),
          c.value || u(),
          R(
            c.value
              ? Qe(M, ae, Y, oe, ie, (k) => {
                  (U.value = !1), k === He.Finished && o();
                })
              : Qe(M, ye, ue, we, ie, (k) => {
                  (U.value = !1),
                    k === He.Finished && (ge(le) || ((w.value = "hidden"), m(S), s()));
                }),
          ));
      }
      return (
        A(() => {
          K(
            [c],
            (R, z, M) => {
              be(M), (N.value = !1);
            },
            { immediate: !0 },
          );
        }),
        P(Be, le),
        tn(h(() => H(w.value, { visible: L.Open, hidden: L.Closed }) | a.value)),
        () => {
          let {
              appear: R,
              show: z,
              enter: M,
              enterFrom: k,
              enterTo: G,
              entered: Ie,
              leave: Ue,
              leaveFrom: We,
              leaveTo: y,
              ...b
            } = e,
            F = { ref: d },
            O = {
              ...b,
              ...(p.value && c.value && re.isServer
                ? { class: ee([n.class, b.class, ...ae, ...Y]) }
                : {}),
            };
          return x({
            theirProps: O,
            ourProps: F,
            slot: {},
            slots: r,
            attrs: n,
            features: wt,
            visible: w.value === "visible",
            name: "TransitionChild",
          });
        }
      );
    },
  }),
  kn = bt,
  Et = D({
    inheritAttrs: !1,
    props: {
      as: { type: [Object, String], default: "div" },
      show: { type: [Boolean], default: null },
      unmount: { type: [Boolean], default: !0 },
      appear: { type: [Boolean], default: !1 },
      enter: { type: [String], default: "" },
      enterFrom: { type: [String], default: "" },
      enterTo: { type: [String], default: "" },
      entered: { type: [String], default: "" },
      leave: { type: [String], default: "" },
      leaveFrom: { type: [String], default: "" },
      leaveTo: { type: [String], default: "" },
    },
    emits: {
      beforeEnter: () => !0,
      afterEnter: () => !0,
      beforeLeave: () => !0,
      afterLeave: () => !0,
    },
    setup(e, { emit: t, attrs: n, slots: r }) {
      let l = je(),
        a = h(() => (e.show === null && l !== null ? (l.value & L.Open) === L.Open : e.show));
      C(() => {
        if (![!0, !1].includes(a.value))
          throw new Error(
            'A <Transition /> is used but it is missing a `:show="true | false"` prop.',
          );
      });
      let i = g(a.value ? "visible" : "hidden"),
        o = yt(() => {
          i.value = "hidden";
        }),
        u = g(!0),
        s = { show: a, appear: h(() => e.appear || !u.value) };
      return (
        A(() => {
          C(() => {
            (u.value = !1), a.value ? (i.value = "visible") : ge(o) || (i.value = "hidden");
          });
        }),
        P(Be, o),
        P(xe, s),
        () => {
          let d = it(e, [
              "show",
              "appear",
              "unmount",
              "onBeforeEnter",
              "onBeforeLeave",
              "onAfterEnter",
              "onAfterLeave",
            ]),
            v = { unmount: e.unmount };
          return x({
            ourProps: { ...v, as: "template" },
            theirProps: {},
            slot: {},
            slots: {
              ...r,
              default: () => [
                T(
                  kn,
                  {
                    onBeforeEnter: () => t("beforeEnter"),
                    onAfterEnter: () => t("afterEnter"),
                    onBeforeLeave: () => t("beforeLeave"),
                    onAfterLeave: () => t("afterLeave"),
                    ...n,
                    ...v,
                    ...d,
                  },
                  r.default,
                ),
              ],
            },
            attrs: {},
            features: wt,
            visible: i.value === "visible",
            name: "Transition",
          });
        }
      );
    },
  });
const jn = Pt(Ve.ui.strategy, Ve.ui.modal, jt),
  xn = D({
    components: { HDialog: An, HDialogPanel: Pn, TransitionRoot: Et, TransitionChild: bt },
    inheritAttrs: !1,
    props: {
      modelValue: { type: Boolean, default: !1 },
      appear: { type: Boolean, default: !1 },
      overlay: { type: Boolean, default: !0 },
      transition: { type: Boolean, default: !0 },
      preventClose: { type: Boolean, default: !1 },
      fullscreen: { type: Boolean, default: !1 },
      class: { type: [String, Object, Array], default: () => "" },
      ui: { type: Object, default: () => ({}) },
    },
    emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
    setup(e, { emit: t }) {
      const { ui: n, attrs: r } = Rt("modal", _e(e, "ui"), jn, _e(e, "class")),
        l = h({
          get() {
            return e.modelValue;
          },
          set(u) {
            t("update:modelValue", u);
          },
        }),
        a = h(() => (e.transition ? { ...n.value.transition } : {}));
      function i(u) {
        if (e.preventClose) {
          t("close-prevented");
          return;
        }
        (l.value = u), t("close");
      }
      const o = () => {
        t("after-leave");
      };
      return (
        Bt(() => kt("$X80bpyE9TN")),
        { ui: n, attrs: r, isOpen: l, transitionClass: a, onAfterLeave: o, close: i }
      );
    },
  });
function Bn(e, t, n, r, l, a) {
  const i = de("TransitionChild"),
    o = de("HDialogPanel"),
    u = de("HDialog"),
    s = de("TransitionRoot");
  return (
    qe(),
    Ye(
      s,
      { appear: e.appear, show: e.isOpen, as: "template", onAfterLeave: e.onAfterLeave },
      {
        default: Q(() => [
          Te(
            u,
            Se({ class: e.ui.wrapper }, e.attrs, { onClose: e.close }),
            {
              default: Q(() => [
                e.overlay
                  ? (qe(),
                    Ye(
                      i,
                      Se({ key: 0, as: "template", appear: e.appear }, e.ui.overlay.transition),
                      {
                        default: Q(() => [
                          Le(
                            "div",
                            { class: ee([e.ui.overlay.base, e.ui.overlay.background]) },
                            null,
                            2,
                          ),
                        ]),
                        _: 1,
                      },
                      16,
                      ["appear"],
                    ))
                  : Dt("", !0),
                Le(
                  "div",
                  { class: ee(e.ui.inner) },
                  [
                    Le(
                      "div",
                      { class: ee([e.ui.container, !e.fullscreen && e.ui.padding]) },
                      [
                        Te(
                          i,
                          Se({ as: "template", appear: e.appear }, e.transitionClass),
                          {
                            default: Q(() => [
                              Te(
                                o,
                                {
                                  class: ee([
                                    e.ui.base,
                                    e.ui.background,
                                    e.ui.ring,
                                    e.ui.shadow,
                                    e.fullscreen
                                      ? e.ui.fullscreen
                                      : [e.ui.width, e.ui.height, e.ui.rounded, e.ui.margin],
                                  ]),
                                },
                                { default: Q(() => [Nt(e.$slots, "default")]), _: 3 },
                                8,
                                ["class"],
                              ),
                            ]),
                            _: 3,
                          },
                          16,
                          ["appear"],
                        ),
                      ],
                      2,
                    ),
                  ],
                  2,
                ),
              ]),
              _: 3,
            },
            16,
            ["class", "onClose"],
          ),
        ]),
        _: 3,
      },
      8,
      ["appear", "show", "onAfterLeave"],
    )
  );
}
const Vn = Ct(xn, [["render", Bn]]);
export { Pn as G, Et as S, An as Y, Vn as _, bt as h, Bt as l, kt as u };
