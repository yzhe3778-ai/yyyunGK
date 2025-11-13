import { a as Nt, u as Vt } from "./BC2xWXSP.js";
import {
  t as _e,
  _ as $t,
  c as ae,
  f as Bt,
  n as Ce,
  X as Ct,
  Q as et,
  aj as Ht,
  o as J,
  R as Je,
  L as jt,
  M as Ke,
  a as ke,
  i as kt,
  b as Lt,
  ad as Mt,
  D as oe,
  d as Pe,
  N as Qe,
  G as Rt,
  H as St,
  C as Tt,
  m as Wt,
  r as ye,
  w as Ze,
} from "./BJowY05t.js";
import { u as tt } from "./CnNyuEuj.js";
import { _ as ut } from "./D_a5X8Y3.js";

const Ft = {
  wrapper: "relative inline-flex",
  container: "z-20 group",
  width: "max-w-xs",
  background: "bg-white dark:bg-gray-900",
  color: "text-gray-900 dark:text-white",
  shadow: "shadow",
  rounded: "rounded",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  base: "[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative",
  shortcuts: "hidden md:inline-flex flex-shrink-0 gap-0.5",
  middot: "mx-1 text-gray-700 dark:text-gray-200",
  transition: {
    enterActiveClass: "transition ease-out duration-200",
    enterFromClass: "opacity-0 translate-y-1",
    enterToClass: "opacity-100 translate-y-0",
    leaveActiveClass: "transition ease-in duration-150",
    leaveFromClass: "opacity-100 translate-y-0",
    leaveToClass: "opacity-0 translate-y-1",
  },
  popper: { strategy: "fixed" },
  default: { openDelay: 0, closeDelay: 0 },
  arrow: {
    ...Nt,
    base: "[@media(pointer:coarse)]:hidden invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",
  },
};
function T(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function K(e) {
  var t = T(e).Element;
  return e instanceof t || e instanceof Element;
}
function M(e) {
  var t = T(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Te(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = T(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var G = Math.max,
  we = Math.min,
  Z = Math.round;
function $e() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function lt() {
  return !/^((?!chrome|android).)*safari/i.test($e());
}
function _(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    a = 1,
    s = 1;
  t &&
    M(e) &&
    ((a = (e.offsetWidth > 0 && Z(n.width) / e.offsetWidth) || 1),
    (s = (e.offsetHeight > 0 && Z(n.height) / e.offsetHeight) || 1));
  var f = K(e) ? T(e) : window,
    o = f.visualViewport,
    i = !lt() && r,
    l = (n.left + (i && o ? o.offsetLeft : 0)) / a,
    u = (n.top + (i && o ? o.offsetTop : 0)) / s,
    m = n.width / a,
    h = n.height / s;
  return { width: m, height: h, top: u, right: l + m, bottom: u + h, left: l, x: l, y: u };
}
function Me(e) {
  var t = T(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function zt(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Xt(e) {
  return e === T(e) || !M(e) ? Me(e) : zt(e);
}
function N(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function z(e) {
  return ((K(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Le(e) {
  return _(z(e)).left + Me(e).scrollLeft;
}
function V(e) {
  return T(e).getComputedStyle(e);
}
function Re(e) {
  var t = V(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function qt(e) {
  var t = e.getBoundingClientRect(),
    r = Z(t.width) / e.offsetWidth || 1,
    n = Z(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Ut(e, t, r) {
  r === void 0 && (r = !1);
  var n = M(t),
    a = M(t) && qt(t),
    s = z(t),
    f = _(e, a, r),
    o = { scrollLeft: 0, scrollTop: 0 },
    i = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((N(t) !== "body" || Re(s)) && (o = Xt(t)),
      M(t) ? ((i = _(t, !0)), (i.x += t.clientLeft), (i.y += t.clientTop)) : s && (i.x = Le(s))),
    {
      x: f.left + o.scrollLeft - i.x,
      y: f.top + o.scrollTop - i.y,
      width: f.width,
      height: f.height,
    }
  );
}
function Se(e) {
  var t = _(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function xe(e) {
  return N(e) === "html" ? e : e.assignedSlot || e.parentNode || (Te(e) ? e.host : null) || z(e);
}
function pt(e) {
  return ["html", "body", "#document"].indexOf(N(e)) >= 0
    ? e.ownerDocument.body
    : M(e) && Re(e)
      ? e
      : pt(xe(e));
}
function se(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = pt(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = T(n),
    f = a ? [s].concat(s.visualViewport || [], Re(n) ? n : []) : n,
    o = t.concat(f);
  return a ? o : o.concat(se(xe(f)));
}
function It(e) {
  return ["table", "td", "th"].indexOf(N(e)) >= 0;
}
function rt(e) {
  return !M(e) || V(e).position === "fixed" ? null : e.offsetParent;
}
function Yt(e) {
  var t = /firefox/i.test($e()),
    r = /Trident/i.test($e());
  if (r && M(e)) {
    var n = V(e);
    if (n.position === "fixed") return null;
  }
  var a = xe(e);
  for (Te(a) && (a = a.host); M(a) && ["html", "body"].indexOf(N(a)) < 0; ) {
    var s = V(a);
    if (
      s.transform !== "none" ||
      s.perspective !== "none" ||
      s.contain === "paint" ||
      ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
      (t && s.willChange === "filter") ||
      (t && s.filter && s.filter !== "none")
    )
      return a;
    a = a.parentNode;
  }
  return null;
}
function le(e) {
  for (var t = T(e), r = rt(e); r && It(r) && V(r).position === "static"; ) r = rt(r);
  return r && (N(r) === "html" || (N(r) === "body" && V(r).position === "static"))
    ? t
    : r || Yt(e) || t;
}
var $ = "top",
  S = "bottom",
  W = "right",
  B = "left",
  We = "auto",
  pe = [$, S, W, B],
  ee = "start",
  ue = "end",
  Gt = "clippingParents",
  ct = "viewport",
  ie = "popper",
  Kt = "reference",
  nt = pe.reduce(function (e, t) {
    return e.concat([t + "-" + ee, t + "-" + ue]);
  }, []),
  vt = [].concat(pe, [We]).reduce(function (e, t) {
    return e.concat([t, t + "-" + ee, t + "-" + ue]);
  }, []),
  Qt = "beforeRead",
  Jt = "read",
  Zt = "afterRead",
  _t = "beforeMain",
  er = "main",
  tr = "afterMain",
  rr = "beforeWrite",
  nr = "write",
  ar = "afterWrite",
  or = [Qt, Jt, Zt, _t, er, tr, rr, nr, ar];
function ir(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (s) {
    t.set(s.name, s);
  });
  function a(s) {
    r.add(s.name);
    var f = [].concat(s.requires || [], s.requiresIfExists || []);
    f.forEach(function (o) {
      if (!r.has(o)) {
        var i = t.get(o);
        i && a(i);
      }
    }),
      n.push(s);
  }
  return (
    e.forEach(function (s) {
      r.has(s.name) || a(s);
    }),
    n
  );
}
function sr(e) {
  var t = ir(e);
  return or.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      }),
    );
  }, []);
}
function fr(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function ur(e) {
  var t = e.reduce(function (r, n) {
    var a = r[n.name];
    return (
      (r[n.name] = a
        ? Object.assign({}, a, n, {
            options: Object.assign({}, a.options, n.options),
            data: Object.assign({}, a.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
function lr(e, t) {
  var r = T(e),
    n = z(e),
    a = r.visualViewport,
    s = n.clientWidth,
    f = n.clientHeight,
    o = 0,
    i = 0;
  if (a) {
    (s = a.width), (f = a.height);
    var l = lt();
    (l || (!l && t === "fixed")) && ((o = a.offsetLeft), (i = a.offsetTop));
  }
  return { width: s, height: f, x: o + Le(e), y: i };
}
function pr(e) {
  var t,
    r = z(e),
    n = Me(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    s = G(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    f = G(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    o = -n.scrollLeft + Le(e),
    i = -n.scrollTop;
  return (
    V(a || r).direction === "rtl" && (o += G(r.clientWidth, a ? a.clientWidth : 0) - s),
    { width: s, height: f, x: o, y: i }
  );
}
function dt(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Te(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Be(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function cr(e, t) {
  var r = _(e, !1, t === "fixed");
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function at(e, t, r) {
  return t === ct ? Be(lr(e, r)) : K(t) ? cr(t, r) : Be(pr(z(e)));
}
function vr(e) {
  var t = se(xe(e)),
    r = ["absolute", "fixed"].indexOf(V(e).position) >= 0,
    n = r && M(e) ? le(e) : e;
  return K(n)
    ? t.filter(function (a) {
        return K(a) && dt(a, n) && N(a) !== "body";
      })
    : [];
}
function dr(e, t, r, n) {
  var a = t === "clippingParents" ? vr(e) : [].concat(t),
    s = [].concat(a, [r]),
    f = s[0],
    o = s.reduce(
      function (i, l) {
        var u = at(e, l, n);
        return (
          (i.top = G(u.top, i.top)),
          (i.right = we(u.right, i.right)),
          (i.bottom = we(u.bottom, i.bottom)),
          (i.left = G(u.left, i.left)),
          i
        );
      },
      at(e, f, n),
    );
  return (
    (o.width = o.right - o.left), (o.height = o.bottom - o.top), (o.x = o.left), (o.y = o.top), o
  );
}
function H(e) {
  return e.split("-")[0];
}
function te(e) {
  return e.split("-")[1];
}
function He(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function mt(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? H(n) : null,
    s = n ? te(n) : null,
    f = t.x + t.width / 2 - r.width / 2,
    o = t.y + t.height / 2 - r.height / 2,
    i;
  switch (a) {
    case $:
      i = { x: f, y: t.y - r.height };
      break;
    case S:
      i = { x: f, y: t.y + t.height };
      break;
    case W:
      i = { x: t.x + t.width, y: o };
      break;
    case B:
      i = { x: t.x - r.width, y: o };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var l = a ? He(a) : null;
  if (l != null) {
    var u = l === "y" ? "height" : "width";
    switch (s) {
      case ee:
        i[l] = i[l] - (t[u] / 2 - r[u] / 2);
        break;
      case ue:
        i[l] = i[l] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return i;
}
function ht() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function gt(e) {
  return Object.assign({}, ht(), e);
}
function yt(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
function Ne(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    s = r.strategy,
    f = s === void 0 ? e.strategy : s,
    o = r.boundary,
    i = o === void 0 ? Gt : o,
    l = r.rootBoundary,
    u = l === void 0 ? ct : l,
    m = r.elementContext,
    h = m === void 0 ? ie : m,
    p = r.altBoundary,
    g = p === void 0 ? !1 : p,
    d = r.padding,
    v = d === void 0 ? 0 : d,
    y = gt(typeof v != "number" ? v : yt(v, pe)),
    x = h === ie ? Kt : ie,
    A = e.rects.popper,
    c = e.elements[g ? x : h],
    b = dr(K(c) ? c : c.contextElement || z(e.elements.popper), i, u, f),
    w = _(e.elements.reference),
    O = mt({ reference: w, element: A, strategy: "absolute", placement: a }),
    P = Be(Object.assign({}, A, O)),
    D = h === ie ? P : w,
    E = {
      top: b.top - D.top + y.top,
      bottom: D.bottom - b.bottom + y.bottom,
      left: b.left - D.left + y.left,
      right: D.right - b.right + y.right,
    },
    k = e.modifiersData.offset;
  if (h === ie && k) {
    var L = k[a];
    Object.keys(E).forEach(function (C) {
      var X = [W, S].indexOf(C) >= 0 ? 1 : -1,
        q = [$, S].indexOf(C) >= 0 ? "y" : "x";
      E[C] += L[q] * X;
    });
  }
  return E;
}
var ot = { placement: "bottom", modifiers: [], strategy: "absolute" };
function it() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function mr(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    s = a === void 0 ? ot : a;
  return function (o, i, l) {
    l === void 0 && (l = s);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ot, s),
        modifiersData: {},
        elements: { reference: o, popper: i },
        attributes: {},
        styles: {},
      },
      m = [],
      h = !1,
      p = {
        state: u,
        setOptions: function (y) {
          var x = typeof y == "function" ? y(u.options) : y;
          d(),
            (u.options = Object.assign({}, s, u.options, x)),
            (u.scrollParents = {
              reference: K(o) ? se(o) : o.contextElement ? se(o.contextElement) : [],
              popper: se(i),
            });
          var A = sr(ur([].concat(n, u.options.modifiers)));
          return (
            (u.orderedModifiers = A.filter(function (c) {
              return c.enabled;
            })),
            g(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!h) {
            var y = u.elements,
              x = y.reference,
              A = y.popper;
            if (it(x, A)) {
              (u.rects = {
                reference: Ut(x, le(A), u.options.strategy === "fixed"),
                popper: Se(A),
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (E) {
                  return (u.modifiersData[E.name] = Object.assign({}, E.data));
                });
              for (var c = 0; c < u.orderedModifiers.length; c++) {
                if (u.reset === !0) {
                  (u.reset = !1), (c = -1);
                  continue;
                }
                var b = u.orderedModifiers[c],
                  w = b.fn,
                  O = b.options,
                  P = O === void 0 ? {} : O,
                  D = b.name;
                typeof w == "function" &&
                  (u = w({ state: u, options: P, name: D, instance: p }) || u);
              }
            }
          }
        },
        update: fr(function () {
          return new Promise(function (v) {
            p.forceUpdate(), v(u);
          });
        }),
        destroy: function () {
          d(), (h = !0);
        },
      };
    if (!it(o, i)) return p;
    p.setOptions(l).then(function (v) {
      !h && l.onFirstUpdate && l.onFirstUpdate(v);
    });
    function g() {
      u.orderedModifiers.forEach(function (v) {
        var y = v.name,
          x = v.options,
          A = x === void 0 ? {} : x,
          c = v.effect;
        if (typeof c == "function") {
          var b = c({ state: u, name: y, instance: p, options: A }),
            w = function () {};
          m.push(b || w);
        }
      });
    }
    function d() {
      m.forEach(function (v) {
        return v();
      }),
        (m = []);
    }
    return p;
  };
}
var ge = { passive: !0 };
function hr(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    s = a === void 0 ? !0 : a,
    f = n.resize,
    o = f === void 0 ? !0 : f,
    i = T(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    s &&
      l.forEach(function (u) {
        u.addEventListener("scroll", r.update, ge);
      }),
    o && i.addEventListener("resize", r.update, ge),
    function () {
      s &&
        l.forEach(function (u) {
          u.removeEventListener("scroll", r.update, ge);
        }),
        o && i.removeEventListener("resize", r.update, ge);
    }
  );
}
const bt = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: hr,
  data: {},
};
function gr(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = mt({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const yr = { name: "popperOffsets", enabled: !0, phase: "read", fn: gr, data: {} };
var br = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function wr(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: Z(r * a) / a || 0, y: Z(n * a) / a || 0 };
}
function st(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    s = e.variation,
    f = e.offsets,
    o = e.position,
    i = e.gpuAcceleration,
    l = e.adaptive,
    u = e.roundOffsets,
    m = e.isFixed,
    h = f.x,
    p = h === void 0 ? 0 : h,
    g = f.y,
    d = g === void 0 ? 0 : g,
    v = typeof u == "function" ? u({ x: p, y: d }) : { x: p, y: d };
  (p = v.x), (d = v.y);
  var y = f.hasOwnProperty("x"),
    x = f.hasOwnProperty("y"),
    A = B,
    c = $,
    b = window;
  if (l) {
    var w = le(r),
      O = "clientHeight",
      P = "clientWidth";
    if (
      (w === T(r) &&
        ((w = z(r)),
        V(w).position !== "static" &&
          o === "absolute" &&
          ((O = "scrollHeight"), (P = "scrollWidth"))),
      (w = w),
      a === $ || ((a === B || a === W) && s === ue))
    ) {
      c = S;
      var D = m && w === b && b.visualViewport ? b.visualViewport.height : w[O];
      (d -= D - n.height), (d *= i ? 1 : -1);
    }
    if (a === B || ((a === $ || a === S) && s === ue)) {
      A = W;
      var E = m && w === b && b.visualViewport ? b.visualViewport.width : w[P];
      (p -= E - n.width), (p *= i ? 1 : -1);
    }
  }
  var k = Object.assign({ position: o }, l && br),
    L = u === !0 ? wr({ x: p, y: d }, T(r)) : { x: p, y: d };
  if (((p = L.x), (d = L.y), i)) {
    var C;
    return Object.assign(
      {},
      k,
      ((C = {}),
      (C[c] = x ? "0" : ""),
      (C[A] = y ? "0" : ""),
      (C.transform =
        (b.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + d + "px)"
          : "translate3d(" + p + "px, " + d + "px, 0)"),
      C),
    );
  }
  return Object.assign(
    {},
    k,
    ((t = {}), (t[c] = x ? d + "px" : ""), (t[A] = y ? p + "px" : ""), (t.transform = ""), t),
  );
}
function xr(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    s = r.adaptive,
    f = s === void 0 ? !0 : s,
    o = r.roundOffsets,
    i = o === void 0 ? !0 : o,
    l = {
      placement: H(t.placement),
      variation: te(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      st(
        Object.assign({}, l, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: f,
          roundOffsets: i,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        st(
          Object.assign({}, l, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: i,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const wt = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: xr, data: {} };
function Or(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      s = t.elements[r];
    !M(s) ||
      !N(s) ||
      (Object.assign(s.style, n),
      Object.keys(a).forEach(function (f) {
        var o = a[f];
        o === !1 ? s.removeAttribute(f) : s.setAttribute(f, o === !0 ? "" : o);
      }));
  });
}
function Ar(e) {
  var t = e.state,
    r = {
      popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var a = t.elements[n],
          s = t.attributes[n] || {},
          f = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          o = f.reduce(function (i, l) {
            return (i[l] = ""), i;
          }, {});
        !M(a) ||
          !N(a) ||
          (Object.assign(a.style, o),
          Object.keys(s).forEach(function (i) {
            a.removeAttribute(i);
          }));
      });
    }
  );
}
const Er = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Or,
  effect: Ar,
  requires: ["computeStyles"],
};
var Dr = [bt, yr, wt, Er],
  Pr = { left: "right", right: "left", bottom: "top", top: "bottom" };
function be(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Pr[t];
  });
}
var kr = { start: "end", end: "start" };
function ft(e) {
  return e.replace(/start|end/g, function (t) {
    return kr[t];
  });
}
function Cr(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    s = r.rootBoundary,
    f = r.padding,
    o = r.flipVariations,
    i = r.allowedAutoPlacements,
    l = i === void 0 ? vt : i,
    u = te(n),
    m = u
      ? o
        ? nt
        : nt.filter(function (g) {
            return te(g) === u;
          })
      : pe,
    h = m.filter(function (g) {
      return l.indexOf(g) >= 0;
    });
  h.length === 0 && (h = m);
  var p = h.reduce(function (g, d) {
    return (g[d] = Ne(e, { placement: d, boundary: a, rootBoundary: s, padding: f })[H(d)]), g;
  }, {});
  return Object.keys(p).sort(function (g, d) {
    return p[g] - p[d];
  });
}
function jr(e) {
  if (H(e) === We) return [];
  var t = be(e);
  return [ft(e), t, ft(t)];
}
function $r(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        s = a === void 0 ? !0 : a,
        f = r.altAxis,
        o = f === void 0 ? !0 : f,
        i = r.fallbackPlacements,
        l = r.padding,
        u = r.boundary,
        m = r.rootBoundary,
        h = r.altBoundary,
        p = r.flipVariations,
        g = p === void 0 ? !0 : p,
        d = r.allowedAutoPlacements,
        v = t.options.placement,
        y = H(v),
        x = y === v,
        A = i || (x || !g ? [be(v)] : jr(v)),
        c = [v].concat(A).reduce(function (Q, F) {
          return Q.concat(
            H(F) === We
              ? Cr(t, {
                  placement: F,
                  boundary: u,
                  rootBoundary: m,
                  padding: l,
                  flipVariations: g,
                  allowedAutoPlacements: d,
                })
              : F,
          );
        }, []),
        b = t.rects.reference,
        w = t.rects.popper,
        O = new Map(),
        P = !0,
        D = c[0],
        E = 0;
      E < c.length;
      E++
    ) {
      var k = c[E],
        L = H(k),
        C = te(k) === ee,
        X = [$, S].indexOf(L) >= 0,
        q = X ? "width" : "height",
        j = Ne(t, { placement: k, boundary: u, rootBoundary: m, altBoundary: h, padding: l }),
        R = X ? (C ? W : B) : C ? S : $;
      b[q] > w[q] && (R = be(R));
      var ce = be(R),
        U = [];
      if (
        (s && U.push(j[L] <= 0),
        o && U.push(j[R] <= 0, j[ce] <= 0),
        U.every(function (Q) {
          return Q;
        }))
      ) {
        (D = k), (P = !1);
        break;
      }
      O.set(k, U);
    }
    if (P)
      for (
        var ve = g ? 3 : 1,
          Oe = function (F) {
            var ne = c.find(function (me) {
              var I = O.get(me);
              if (I)
                return I.slice(0, F).every(function (Ae) {
                  return Ae;
                });
            });
            if (ne) return (D = ne), "break";
          },
          re = ve;
        re > 0;
        re--
      ) {
        var de = Oe(re);
        if (de === "break") break;
      }
    t.placement !== D && ((t.modifiersData[n]._skip = !0), (t.placement = D), (t.reset = !0));
  }
}
const Br = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: $r,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Tr(e, t, r) {
  var n = H(e),
    a = [B, $].indexOf(n) >= 0 ? -1 : 1,
    s = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    f = s[0],
    o = s[1];
  return (f = f || 0), (o = (o || 0) * a), [B, W].indexOf(n) >= 0 ? { x: o, y: f } : { x: f, y: o };
}
function Mr(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    s = a === void 0 ? [0, 0] : a,
    f = vt.reduce(function (u, m) {
      return (u[m] = Tr(m, t.rects, s)), u;
    }, {}),
    o = f[t.placement],
    i = o.x,
    l = o.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += i), (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[n] = f);
}
const Lr = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Mr };
function Rr(e) {
  return e === "x" ? "y" : "x";
}
function fe(e, t, r) {
  return G(e, we(t, r));
}
function Sr(e, t, r) {
  var n = fe(e, t, r);
  return n > r ? r : n;
}
function Wr(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    s = a === void 0 ? !0 : a,
    f = r.altAxis,
    o = f === void 0 ? !1 : f,
    i = r.boundary,
    l = r.rootBoundary,
    u = r.altBoundary,
    m = r.padding,
    h = r.tether,
    p = h === void 0 ? !0 : h,
    g = r.tetherOffset,
    d = g === void 0 ? 0 : g,
    v = Ne(t, { boundary: i, rootBoundary: l, padding: m, altBoundary: u }),
    y = H(t.placement),
    x = te(t.placement),
    A = !x,
    c = He(y),
    b = Rr(c),
    w = t.modifiersData.popperOffsets,
    O = t.rects.reference,
    P = t.rects.popper,
    D = typeof d == "function" ? d(Object.assign({}, t.rects, { placement: t.placement })) : d,
    E =
      typeof D == "number"
        ? { mainAxis: D, altAxis: D }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
    k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    L = { x: 0, y: 0 };
  if (w) {
    if (s) {
      var C,
        X = c === "y" ? $ : B,
        q = c === "y" ? S : W,
        j = c === "y" ? "height" : "width",
        R = w[c],
        ce = R + v[X],
        U = R - v[q],
        ve = p ? -P[j] / 2 : 0,
        Oe = x === ee ? O[j] : P[j],
        re = x === ee ? -P[j] : -O[j],
        de = t.elements.arrow,
        Q = p && de ? Se(de) : { width: 0, height: 0 },
        F = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : ht(),
        ne = F[X],
        me = F[q],
        I = fe(0, O[j], Q[j]),
        Ae = A ? O[j] / 2 - ve - I - ne - E.mainAxis : Oe - I - ne - E.mainAxis,
        xt = A ? -O[j] / 2 + ve + I + me + E.mainAxis : re + I + me + E.mainAxis,
        Ee = t.elements.arrow && le(t.elements.arrow),
        Ot = Ee ? (c === "y" ? Ee.clientTop || 0 : Ee.clientLeft || 0) : 0,
        Ve = (C = k == null ? void 0 : k[c]) != null ? C : 0,
        At = R + Ae - Ve - Ot,
        Et = R + xt - Ve,
        Fe = fe(p ? we(ce, At) : ce, R, p ? G(U, Et) : U);
      (w[c] = Fe), (L[c] = Fe - R);
    }
    if (o) {
      var ze,
        Dt = c === "x" ? $ : B,
        Pt = c === "x" ? S : W,
        Y = w[b],
        he = b === "y" ? "height" : "width",
        Xe = Y + v[Dt],
        qe = Y - v[Pt],
        De = [$, B].indexOf(y) !== -1,
        Ue = (ze = k == null ? void 0 : k[b]) != null ? ze : 0,
        Ie = De ? Xe : Y - O[he] - P[he] - Ue + E.altAxis,
        Ye = De ? Y + O[he] + P[he] - Ue - E.altAxis : qe,
        Ge = p && De ? Sr(Ie, Y, Ye) : fe(p ? Ie : Xe, Y, p ? Ye : qe);
      (w[b] = Ge), (L[b] = Ge - Y);
    }
    t.modifiersData[n] = L;
  }
}
const Hr = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Wr,
  requiresIfExists: ["offset"],
};
var Nr = function (t, r) {
  return (
    (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t),
    gt(typeof t != "number" ? t : yt(t, pe))
  );
};
function Vr(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    s = r.elements.arrow,
    f = r.modifiersData.popperOffsets,
    o = H(r.placement),
    i = He(o),
    l = [B, W].indexOf(o) >= 0,
    u = l ? "height" : "width";
  if (!(!s || !f)) {
    var m = Nr(a.padding, r),
      h = Se(s),
      p = i === "y" ? $ : B,
      g = i === "y" ? S : W,
      d = r.rects.reference[u] + r.rects.reference[i] - f[i] - r.rects.popper[u],
      v = f[i] - r.rects.reference[i],
      y = le(s),
      x = y ? (i === "y" ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
      A = d / 2 - v / 2,
      c = m[p],
      b = x - h[u] - m[g],
      w = x / 2 - h[u] / 2 + A,
      O = fe(c, w, b),
      P = i;
    r.modifiersData[n] = ((t = {}), (t[P] = O), (t.centerOffset = O - w), t);
  }
}
function Fr(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (dt(t.elements.popper, a) && (t.elements.arrow = a)));
}
const zr = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Vr,
    effect: Fr,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  },
  Xr = mr({ defaultModifiers: [...Dr, Lr, Br, Hr, wt, bt, zr] });
function qr(
  {
    locked: e = !1,
    overflowPadding: t = 8,
    offsetDistance: r = 8,
    offsetSkid: n = 0,
    gpuAcceleration: a = !0,
    adaptive: s = !0,
    scroll: f = !0,
    resize: o = !0,
    arrow: i = !1,
    placement: l,
    strategy: u,
  },
  m,
) {
  const h = ye(null),
    p = ye(null),
    g = ye(null);
  return (
    kt(() => {
      Ct((d) => {
        if (!p.value || (!h.value && !(m != null && m.value))) return;
        const v = tt(p),
          y = tt(h);
        if (!(v instanceof HTMLElement) || !y) return;
        const x = {
          modifiers: [
            { name: "flip", enabled: !e },
            { name: "preventOverflow", options: { padding: t } },
            { name: "offset", options: { offset: [n, r] } },
            { name: "computeStyles", options: { adaptive: s, gpuAcceleration: a } },
            { name: "eventListeners", options: { scroll: f, resize: o } },
            { name: "arrow", enabled: i },
          ],
        };
        l && (x.placement = l), u && (x.strategy = u), (g.value = Xr(y, v, x)), d(g.value.destroy);
      });
    }),
    [h, p, g]
  );
}
const je = jt(Ke.ui.strategy, Ke.ui.tooltip, Ft),
  Ur = Bt({
    components: { UKbd: ut },
    inheritAttrs: !1,
    props: {
      text: { type: String, default: null },
      prevent: { type: Boolean, default: !1 },
      shortcuts: { type: Array, default: () => [] },
      openDelay: { type: Number, default: () => je.default.openDelay },
      closeDelay: { type: Number, default: () => je.default.closeDelay },
      popper: { type: Object, default: () => ({}) },
      class: { type: [String, Object, Array], default: () => "" },
      ui: { type: Object, default: () => ({}) },
    },
    setup(e) {
      const { ui: t, attrs: r } = Vt("tooltip", Qe(e, "ui"), je, Qe(e, "class")),
        n = Tt(() => Mt({}, e.popper, t.value.popper)),
        [a, s] = qr(n.value),
        f = ye(!1);
      let o = null,
        i = null;
      function l() {
        i && (clearTimeout(i), (i = null)),
          !f.value &&
            (o =
              o ||
              setTimeout(() => {
                (f.value = !0), (o = null);
              }, e.openDelay));
      }
      function u() {
        o && (clearTimeout(o), (o = null)),
          f.value &&
            (i =
              i ||
              setTimeout(() => {
                (f.value = !1), (i = null);
              }, e.closeDelay));
      }
      return {
        ui: t,
        attrs: r,
        popper: n,
        trigger: a,
        container: s,
        open: f,
        onMouseEnter: l,
        onMouseLeave: u,
      };
    },
  });
function Ir(e, t, r, n, a, s) {
  const f = ut;
  return (
    J(),
    ae(
      "div",
      et({ ref: "trigger", class: e.ui.wrapper }, e.attrs, {
        onMouseenter: t[0] || (t[0] = (...o) => e.onMouseEnter && e.onMouseEnter(...o)),
        onMouseleave: t[1] || (t[1] = (...o) => e.onMouseLeave && e.onMouseLeave(...o)),
      }),
      [
        Je(e.$slots, "default", { open: e.open }, () => [Pe(" Hover ")]),
        e.open && !e.prevent
          ? (J(),
            ae(
              "div",
              { key: 0, ref: "container", class: oe([e.ui.container, e.ui.width]) },
              [
                Lt(
                  Ht,
                  et({ appear: "" }, e.ui.transition),
                  {
                    default: Ze(() => {
                      var o;
                      return [
                        ke("div", null, [
                          e.popper.arrow
                            ? (J(),
                              ae(
                                "div",
                                {
                                  key: 0,
                                  "data-popper-arrow": "",
                                  class: oe(Object.values(e.ui.arrow)),
                                },
                                null,
                                2,
                              ))
                            : Ce("", !0),
                          ke(
                            "div",
                            {
                              class: oe([
                                e.ui.base,
                                e.ui.background,
                                e.ui.color,
                                e.ui.rounded,
                                e.ui.shadow,
                                e.ui.ring,
                              ]),
                            },
                            [
                              Je(e.$slots, "text", {}, () => [Pe(_e(e.text), 1)]),
                              (o = e.shortcuts) != null && o.length
                                ? (J(),
                                  ae(
                                    "span",
                                    { key: 0, class: oe(e.ui.shortcuts) },
                                    [
                                      ke("span", { class: oe(e.ui.middot) }, "·", 2),
                                      (J(!0),
                                      ae(
                                        Rt,
                                        null,
                                        St(
                                          e.shortcuts,
                                          (i) => (
                                            J(),
                                            Wt(
                                              f,
                                              { key: i, size: "xs" },
                                              { default: Ze(() => [Pe(_e(i), 1)]), _: 2 },
                                              1024,
                                            )
                                          ),
                                        ),
                                        128,
                                      )),
                                    ],
                                    2,
                                  ))
                                : Ce("", !0),
                            ],
                            2,
                          ),
                        ]),
                      ];
                    }),
                    _: 3,
                  },
                  16,
                ),
              ],
              2,
            ))
          : Ce("", !0),
      ],
      16,
    )
  );
}
const Jr = $t(Ur, [["render", Ir]]);
export { Jr as _ };
