const __vite__fileDeps = [
    "./ms9CFFSE.js",
    "./DdgKjaBG.js",
    "./_b8Uo-6J.js",
    "./Be3xCWOP.js",
    "./C8e6MUgy.js",
    "./BC2xWXSP.js",
    "./DQnaQhS0.js",
    "./Dgj5Rc6o.js",
    "./DaXZM0k2.js",
    "./CyUMc6TN.js",
    "./D_a5X8Y3.js",
    "./CnNyuEuj.js",
    "./ChrpOMnS.js",
    "./B0AEzVw1.js",
    "./D3FHvt28.js",
    "./xMoqfWMV.js",
    "./CoursePackCard.DxCiamZ3.css",
    "./D1fxQRhZ.js",
    "./CNb174Q1.js",
    "./DEtzpKsO.js",
    "./C6LStEew.js",
    "./BKGWfCmr.js",
    "./BpgD7k3R.js",
    "./G9cKt-R0.js",
    "./_id_.pQo26SIP.css",
    "./hgoq1NQF.js",
    "./CK-F4Qy6.js",
    "./virtual_public.Do3CeR47.css",
    "./index.DdPAaTqb.css",
    "./DRjhmsal.js",
    "./DqpY6BD3.js",
    "./Setting.DAullrce.css",
    "./BjZDF16K.js",
    "./CQkpS3wy.js",
    "./error-404.D9wnsLwT.css",
    "./WaEPOtGd.js",
    "./error-500.53gdxPBe.css",
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
var fc = (e) => {
  throw TypeError(e);
};
var Cp = (e, t, n) => t.has(e) || fc("Cannot " + n);
var dc = (e, t, n) =>
  t.has(e)
    ? fc("Cannot add the same private member more than once")
    : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n);
var gn = (e, t, n) => (Cp(e, t, "access private method"), n);
/**
 * @vue/shared v3.4.29
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function ia(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const _e = {},
  Fn = [],
  at = () => {},
  Tp = () => !1,
  Vr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  aa = (e) => e.startsWith("onUpdate:"),
  Le = Object.assign,
  ca = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  kp = Object.prototype.hasOwnProperty,
  pe = (e, t) => kp.call(e, t),
  Q = Array.isArray,
  Bn = (e) => zr(e) === "[object Map]",
  Uu = (e) => zr(e) === "[object Set]",
  Ap = (e) => zr(e) === "[object RegExp]",
  Z = (e) => typeof e == "function",
  Ae = (e) => typeof e == "string",
  On = (e) => typeof e == "symbol",
  xe = (e) => e !== null && typeof e == "object",
  Fu = (e) => (xe(e) || Z(e)) && Z(e.then) && Z(e.catch),
  Bu = Object.prototype.toString,
  zr = (e) => Bu.call(e),
  Rp = (e) => zr(e).slice(8, -1),
  Wu = (e) => zr(e) === "[object Object]",
  la = (e) => Ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Wn = ia(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  os = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Ip = /-(\w)/g,
  vt = os((e) => e.replace(Ip, (t, n) => (n ? n.toUpperCase() : ""))),
  Pp = /\B([A-Z])/g,
  ln = os((e) => e.replace(Pp, "-$1").toLowerCase()),
  ss = os((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ps = os((e) => (e ? `on${ss(e)}` : "")),
  Rt = (e, t) => !Object.is(e, t),
  Kn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Ku = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: r, value: n });
  },
  ri = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Vu = (e) => {
    const t = Ae(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let hc;
const zu = () =>
  hc ||
  (hc =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function nr(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = Ae(r) ? $p(r) : nr(r);
      if (o) for (const s in o) t[s] = o[s];
    }
    return t;
  } else if (Ae(e) || xe(e)) return e;
}
const Op = /;(?![^(]*\))/g,
  Mp = /:([^]+)/,
  Lp = /\/\*[^]*?\*\//g;
function $p(e) {
  const t = {};
  return (
    e
      .replace(Lp, "")
      .split(Op)
      .forEach((n) => {
        if (n) {
          const r = n.split(Mp);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function pt(e) {
  let t = "";
  if (Ae(e)) t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const r = pt(e[n]);
      r && (t += r + " ");
    }
  else if (xe(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function oi(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ae(t) && (e.class = pt(t)), n && (e.style = nr(n)), e;
}
const Hp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Np = ia(Hp);
function Ju(e) {
  return !!e || e === "";
}
const to = (e) =>
    Ae(e)
      ? e
      : e == null
        ? ""
        : Q(e) || (xe(e) && (e.toString === Bu || !Z(e.toString)))
          ? JSON.stringify(e, qu, 2)
          : String(e),
  qu = (e, t) =>
    t && t.__v_isRef
      ? qu(e, t.value)
      : Bn(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, o], s) => ((n[Os(r, s) + " =>"] = o), n),
              {},
            ),
          }
        : Uu(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Os(n)) }
          : On(t)
            ? Os(t)
            : xe(t) && !Q(t) && !Wu(t)
              ? String(t)
              : t,
  Os = (e, t = "") => {
    var n;
    return On(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.29
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let nt;
class Gu {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = nt),
      !t && nt && (this.index = (nt.scopes || (nt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = nt;
      try {
        return (nt = this), t();
      } finally {
        nt = n;
      }
    }
  }
  on() {
    nt = this;
  }
  off() {
    nt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function is(e) {
  return new Gu(e);
}
function Dp(e, t = nt) {
  t && t.active && t.effects.push(e);
}
function Jr() {
  return nt;
}
function Mo(e) {
  nt && nt.cleanups.push(e);
}
let Sn;
class ua {
  constructor(t, n, r, o) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 5),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Dp(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2) return !1;
    if (this._dirtyLevel === 3 || this._dirtyLevel === 4) {
      (this._dirtyLevel = 1), un();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed) {
          if (n.computed.effect._dirtyLevel === 2) return !0;
          if ((jp(n.computed), this._dirtyLevel >= 5)) break;
        }
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), fn();
    }
    return this._dirtyLevel >= 5;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 5 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = on,
      n = Sn;
    try {
      return (on = !0), (Sn = this), this._runnings++, pc(this), this.fn();
    } finally {
      gc(this), this._runnings--, (Sn = n), (on = t);
    }
  }
  stop() {
    this.active && (pc(this), gc(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function jp(e) {
  return e.value;
}
function pc(e) {
  e._trackId++, (e._depsLength = 0);
}
function gc(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Yu(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Yu(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let on = !0,
  si = 0;
const Qu = [];
function un() {
  Qu.push(on), (on = !1);
}
function fn() {
  const e = Qu.pop();
  on = e === void 0 ? !0 : e;
}
function fa() {
  si++;
}
function da() {
  for (si--; !si && ii.length; ) ii.shift()();
}
function Xu(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && Yu(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const ii = [];
function Zu(e, t, n) {
  fa();
  for (const r of e.keys()) {
    if (!e.computed && r.computed && e.get(r) === r._trackId && r._runnings > 0) {
      r._dirtyLevel = 2;
      continue;
    }
    let o;
    r._dirtyLevel < t &&
      (o ?? (o = e.get(r) === r._trackId)) &&
      (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
      r.computed && r._dirtyLevel === 2 && (r._shouldSchedule = !0),
      (r._dirtyLevel = t)),
      r._shouldSchedule &&
        (o ?? (o = e.get(r) === r._trackId)) &&
        (r.trigger(),
        (!r._runnings || r.allowRecurse) &&
          r._dirtyLevel !== 3 &&
          ((r._shouldSchedule = !1), r.scheduler && ii.push(r.scheduler)));
  }
  da();
}
const ef = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  Lo = new WeakMap(),
  Cn = Symbol(""),
  ai = Symbol("");
function Xe(e, t, n) {
  if (on && Sn) {
    let r = Lo.get(e);
    r || Lo.set(e, (r = new Map()));
    let o = r.get(n);
    o || r.set(n, (o = ef(() => r.delete(n)))), Xu(Sn, o);
  }
}
function jt(e, t, n, r, o, s) {
  const i = Lo.get(e);
  if (!i) return;
  let c = [];
  if (t === "clear") c = [...i.values()];
  else if (n === "length" && Q(e)) {
    const a = Number(r);
    i.forEach((u, l) => {
      (l === "length" || (!On(l) && l >= a)) && c.push(u);
    });
  } else
    switch ((n !== void 0 && c.push(i.get(n)), t)) {
      case "add":
        Q(e) ? la(n) && c.push(i.get("length")) : (c.push(i.get(Cn)), Bn(e) && c.push(i.get(ai)));
        break;
      case "delete":
        Q(e) || (c.push(i.get(Cn)), Bn(e) && c.push(i.get(ai)));
        break;
      case "set":
        Bn(e) && c.push(i.get(Cn));
        break;
    }
  fa();
  for (const a of c) a && Zu(a, 5);
  da();
}
function Up(e, t) {
  const n = Lo.get(e);
  return n && n.get(t);
}
const Fp = ia("__proto__,__v_isRef,__isVue"),
  tf = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(On),
  ),
  mc = Bp();
function Bp() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = ge(this);
        for (let s = 0, i = this.length; s < i; s++) Xe(r, "get", s + "");
        const o = r[t](...n);
        return o === -1 || o === !1 ? r[t](...n.map(ge)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        un(), fa();
        const r = ge(this)[t].apply(this, n);
        return da(), fn(), r;
      };
    }),
    e
  );
}
function Wp(e) {
  On(e) || (e = String(e));
  const t = ge(this);
  return Xe(t, "has", e), t.hasOwnProperty(e);
}
class nf {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    const o = this._isReadonly,
      s = this._isShallow;
    if (n === "__v_isReactive") return !o;
    if (n === "__v_isReadonly") return o;
    if (n === "__v_isShallow") return s;
    if (n === "__v_raw")
      return r === (o ? (s ? ng : af) : s ? sf : of).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = Q(t);
    if (!o) {
      if (i && pe(mc, n)) return Reflect.get(mc, n, r);
      if (n === "hasOwnProperty") return Wp;
    }
    const c = Reflect.get(t, n, r);
    return (On(n) ? tf.has(n) : Fp(n)) || (o || Xe(t, "get", n), s)
      ? c
      : Ie(c)
        ? i && la(n)
          ? c
          : c.value
        : xe(c)
          ? o
            ? sn(c)
            : _t(c)
          : c;
  }
}
class rf extends nf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const a = qn(s);
      if ((!$o(r) && !qn(r) && ((s = ge(s)), (r = ge(r))), !Q(t) && Ie(s) && !Ie(r)))
        return a ? !1 : ((s.value = r), !0);
    }
    const i = Q(t) && la(n) ? Number(n) < t.length : pe(t, n),
      c = Reflect.set(t, n, r, o);
    return t === ge(o) && (i ? Rt(r, s) && jt(t, "set", n, r) : jt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = pe(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && jt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!On(n) || !tf.has(n)) && Xe(t, "has", n), r;
  }
  ownKeys(t) {
    return Xe(t, "iterate", Q(t) ? "length" : Cn), Reflect.ownKeys(t);
  }
}
class Kp extends nf {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Vp = new rf(),
  zp = new Kp(),
  Jp = new rf(!0);
const ha = (e) => e,
  as = (e) => Reflect.getPrototypeOf(e);
function no(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = ge(e),
    s = ge(t);
  n || (Rt(t, s) && Xe(o, "get", t), Xe(o, "get", s));
  const { has: i } = as(o),
    c = r ? ha : n ? ya : Mr;
  if (i.call(o, t)) return c(e.get(t));
  if (i.call(o, s)) return c(e.get(s));
  e !== o && e.get(t);
}
function ro(e, t = !1) {
  const n = this.__v_raw,
    r = ge(n),
    o = ge(e);
  return (
    t || (Rt(e, o) && Xe(r, "has", e), Xe(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function oo(e, t = !1) {
  return (e = e.__v_raw), !t && Xe(ge(e), "iterate", Cn), Reflect.get(e, "size", e);
}
function yc(e) {
  e = ge(e);
  const t = ge(this);
  return as(t).has.call(t, e) || (t.add(e), jt(t, "add", e, e)), this;
}
function vc(e, t) {
  t = ge(t);
  const n = ge(this),
    { has: r, get: o } = as(n);
  let s = r.call(n, e);
  s || ((e = ge(e)), (s = r.call(n, e)));
  const i = o.call(n, e);
  return n.set(e, t), s ? Rt(t, i) && jt(n, "set", e, t) : jt(n, "add", e, t), this;
}
function bc(e) {
  const t = ge(this),
    { has: n, get: r } = as(t);
  let o = n.call(t, e);
  o || ((e = ge(e)), (o = n.call(t, e))), r && r.call(t, e);
  const s = t.delete(e);
  return o && jt(t, "delete", e, void 0), s;
}
function wc() {
  const e = ge(this),
    t = e.size !== 0,
    n = e.clear();
  return t && jt(e, "clear", void 0, void 0), n;
}
function so(e, t) {
  return function (r, o) {
    const s = this,
      i = s.__v_raw,
      c = ge(i),
      a = t ? ha : e ? ya : Mr;
    return !e && Xe(c, "iterate", Cn), i.forEach((u, l) => r.call(o, a(u), a(l), s));
  };
}
function io(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      s = ge(o),
      i = Bn(s),
      c = e === "entries" || (e === Symbol.iterator && i),
      a = e === "keys" && i,
      u = o[e](...r),
      l = n ? ha : t ? ya : Mr;
    return (
      !t && Xe(s, "iterate", a ? ai : Cn),
      {
        next() {
          const { value: f, done: d } = u.next();
          return d ? { value: f, done: d } : { value: c ? [l(f[0]), l(f[1])] : l(f), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Wt(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function qp() {
  const e = {
      get(s) {
        return no(this, s);
      },
      get size() {
        return oo(this);
      },
      has: ro,
      add: yc,
      set: vc,
      delete: bc,
      clear: wc,
      forEach: so(!1, !1),
    },
    t = {
      get(s) {
        return no(this, s, !1, !0);
      },
      get size() {
        return oo(this);
      },
      has: ro,
      add: yc,
      set: vc,
      delete: bc,
      clear: wc,
      forEach: so(!1, !0),
    },
    n = {
      get(s) {
        return no(this, s, !0);
      },
      get size() {
        return oo(this, !0);
      },
      has(s) {
        return ro.call(this, s, !0);
      },
      add: Wt("add"),
      set: Wt("set"),
      delete: Wt("delete"),
      clear: Wt("clear"),
      forEach: so(!0, !1),
    },
    r = {
      get(s) {
        return no(this, s, !0, !0);
      },
      get size() {
        return oo(this, !0);
      },
      has(s) {
        return ro.call(this, s, !0);
      },
      add: Wt("add"),
      set: Wt("set"),
      delete: Wt("delete"),
      clear: Wt("clear"),
      forEach: so(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      (e[s] = io(s, !1, !1)),
        (n[s] = io(s, !0, !1)),
        (t[s] = io(s, !1, !0)),
        (r[s] = io(s, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [Gp, Yp, Qp, Xp] = qp();
function pa(e, t) {
  const n = t ? (e ? Xp : Qp) : e ? Yp : Gp;
  return (r, o, s) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
        ? e
        : o === "__v_raw"
          ? r
          : Reflect.get(pe(n, o) && o in r ? n : r, o, s);
}
const Zp = { get: pa(!1, !1) },
  eg = { get: pa(!1, !0) },
  tg = { get: pa(!0, !1) };
const of = new WeakMap(),
  sf = new WeakMap(),
  af = new WeakMap(),
  ng = new WeakMap();
function rg(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function og(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : rg(Rp(e));
}
function _t(e) {
  return qn(e) ? e : ga(e, !1, Vp, Zp, of);
}
function Nt(e) {
  return ga(e, !1, Jp, eg, sf);
}
function sn(e) {
  return ga(e, !0, zp, tg, af);
}
function ga(e, t, n, r, o) {
  if (!xe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const s = o.get(e);
  if (s) return s;
  const i = og(e);
  if (i === 0) return e;
  const c = new Proxy(e, i === 2 ? r : n);
  return o.set(e, c), c;
}
function Tn(e) {
  return qn(e) ? Tn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qn(e) {
  return !!(e && e.__v_isReadonly);
}
function $o(e) {
  return !!(e && e.__v_isShallow);
}
function cf(e) {
  return e ? !!e.__v_raw : !1;
}
function ge(e) {
  const t = e && e.__v_raw;
  return t ? ge(t) : e;
}
function ma(e) {
  return Object.isExtensible(e) && Ku(e, "__v_skip", !0), e;
}
const Mr = (e) => (xe(e) ? _t(e) : e),
  ya = (e) => (xe(e) ? sn(e) : e);
class lf {
  constructor(t, n, r, o) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new ua(
        () => t(this._value),
        () => br(this, this.effect._dirtyLevel === 3 ? 3 : 4),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = ge(this);
    return (
      (!t._cacheable || t.effect.dirty) && Rt(t._value, (t._value = t.effect.run())) && br(t, 5),
      va(t),
      t.effect._dirtyLevel >= 2 && br(t, 3),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function sg(e, t, n = !1) {
  let r, o;
  const s = Z(e);
  return s ? ((r = e), (o = at)) : ((r = e.get), (o = e.set)), new lf(r, o, s || !o, n);
}
function va(e) {
  var t;
  on &&
    Sn &&
    ((e = ge(e)),
    Xu(
      Sn,
      (t = e.dep) != null ? t : (e.dep = ef(() => (e.dep = void 0), e instanceof lf ? e : void 0)),
    ));
}
function br(e, t = 5, n, r) {
  e = ge(e);
  const o = e.dep;
  o && Zu(o, t);
}
function Ie(e) {
  return !!(e && e.__v_isRef === !0);
}
function ie(e) {
  return uf(e, !1);
}
function cn(e) {
  return uf(e, !0);
}
function uf(e, t) {
  return Ie(e) ? e : new ig(e, t);
}
class ig {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ge(t)),
      (this._value = n ? t : Mr(t));
  }
  get value() {
    return va(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || $o(t) || qn(t);
    (t = n ? t : ge(t)),
      Rt(t, this._rawValue) &&
        (this._rawValue, (this._rawValue = t), (this._value = n ? t : Mr(t)), br(this, 5));
  }
}
function ne(e) {
  return Ie(e) ? e.value : e;
}
function VT(e) {
  return Z(e) ? e() : ne(e);
}
const ag = {
  get: (e, t, n) => ne(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Ie(o) && !Ie(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function ff(e) {
  return Tn(e) ? e : new Proxy(e, ag);
}
class cg {
  constructor(t) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: n, set: r } = t(
      () => va(this),
      () => br(this),
    );
    (this._get = n), (this._set = r);
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function lg(e) {
  return new cg(e);
}
function df(e) {
  const t = Q(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = hf(e, n);
  return t;
}
class ug {
  constructor(t, n, r) {
    (this._object = t), (this._key = n), (this._defaultValue = r), (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Up(ge(this._object), this._key);
  }
}
class fg {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function ba(e, t, n) {
  return Ie(e) ? e : Z(e) ? new fg(e) : xe(e) && arguments.length > 1 ? hf(e, t, n) : ie(e);
}
function hf(e, t, n) {
  const r = e[t];
  return Ie(r) ? r : new ug(e, t, n);
}
/**
 * @vue/runtime-core v3.4.29
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function an(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    rr(o, t, n);
  }
}
function lt(e, t, n, r) {
  if (Z(e)) {
    const o = an(e, t, n, r);
    return (
      o &&
        Fu(o) &&
        o.catch((s) => {
          rr(s, t, n);
        }),
      o
    );
  }
  if (Q(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++) o.push(lt(e[s], t, n, r));
    return o;
  }
}
function rr(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let l = 0; l < u.length; l++) if (u[l](e, i, c) === !1) return;
      }
      s = s.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      un(), an(a, null, 10, [e, i, c]), fn();
      return;
    }
  }
  dg(e, n, o, r);
}
function dg(e, t, n, r = !0) {
  console.error(e);
}
let Lr = !1,
  ci = !1;
const Ke = [];
let Tt = 0;
const Vn = [];
let Qt = null,
  xn = 0;
const pf = Promise.resolve();
let wa = null;
function dn(e) {
  const t = wa || pf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hg(e) {
  let t = Tt + 1,
    n = Ke.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      o = Ke[r],
      s = $r(o);
    s < e || (s === e && o.pre) ? (t = r + 1) : (n = r);
  }
  return t;
}
function cs(e) {
  (!Ke.length || !Ke.includes(e, Lr && e.allowRecurse ? Tt + 1 : Tt)) &&
    (e.id == null ? Ke.push(e) : Ke.splice(hg(e.id), 0, e), gf());
}
function gf() {
  !Lr && !ci && ((ci = !0), (wa = pf.then(mf)));
}
function pg(e) {
  const t = Ke.indexOf(e);
  t > Tt && Ke.splice(t, 1);
}
function li(e) {
  Q(e) ? Vn.push(...e) : (!Qt || !Qt.includes(e, e.allowRecurse ? xn + 1 : xn)) && Vn.push(e), gf();
}
function _c(e, t, n = Lr ? Tt + 1 : 0) {
  for (; n < Ke.length; n++) {
    const r = Ke[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue;
      Ke.splice(n, 1), n--, r();
    }
  }
}
function Ho(e) {
  if (Vn.length) {
    const t = [...new Set(Vn)].sort((n, r) => $r(n) - $r(r));
    if (((Vn.length = 0), Qt)) {
      Qt.push(...t);
      return;
    }
    for (Qt = t, xn = 0; xn < Qt.length; xn++) {
      const n = Qt[xn];
      n.active !== !1 && n();
    }
    (Qt = null), (xn = 0);
  }
}
const $r = (e) => (e.id == null ? 1 / 0 : e.id),
  gg = (e, t) => {
    const n = $r(e) - $r(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function mf(e) {
  (ci = !1), (Lr = !0), Ke.sort(gg);
  try {
    for (Tt = 0; Tt < Ke.length; Tt++) {
      const t = Ke[Tt];
      t && t.active !== !1 && an(t, null, 14);
    }
  } finally {
    (Tt = 0), (Ke.length = 0), Ho(), (Lr = !1), (wa = null), (Ke.length || Vn.length) && mf();
  }
}
function mg(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || _e;
  let o = n;
  const s = t.startsWith("update:"),
    i = s && t.slice(7);
  if (i && i in r) {
    const l = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: f, trim: d } = r[l] || _e;
    d && (o = n.map((h) => (Ae(h) ? h.trim() : h))), f && (o = n.map(ri));
  }
  let c,
    a = r[(c = Ps(t))] || r[(c = Ps(vt(t)))];
  !a && s && (a = r[(c = Ps(ln(t)))]), a && lt(a, e, 6, o);
  const u = r[c + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[c]) return;
    (e.emitted[c] = !0), lt(u, e, 6, o);
  }
}
function yf(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (o !== void 0) return o;
  const s = e.emits;
  let i = {},
    c = !1;
  if (!Z(e)) {
    const a = (u) => {
      const l = yf(u, t, !0);
      l && ((c = !0), Le(i, l));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !s && !c
    ? (xe(e) && r.set(e, null), null)
    : (Q(s) ? s.forEach((a) => (i[a] = null)) : Le(i, s), xe(e) && r.set(e, i), i);
}
function ls(e, t) {
  return !e || !Vr(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      pe(e, t[0].toLowerCase() + t.slice(1)) || pe(e, ln(t)) || pe(e, t));
}
let He = null,
  us = null;
function No(e) {
  const t = He;
  return (He = e), (us = (e && e.type.__scopeId) || null), t;
}
function yg(e) {
  us = e;
}
function vg() {
  us = null;
}
function $t(e, t = He, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && Hc(-1);
    const s = No(t);
    let i;
    try {
      i = e(...o);
    } finally {
      No(s), r._d && Hc(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Ms(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: o,
      propsOptions: [s],
      slots: i,
      attrs: c,
      emit: a,
      render: u,
      renderCache: l,
      props: f,
      data: d,
      setupState: h,
      ctx: p,
      inheritAttrs: b,
    } = e,
    E = No(e);
  let C, v;
  try {
    if (n.shapeFlag & 4) {
      const y = o || r,
        x = y;
      (C = it(u.call(x, y, l, f, h, d, p))), (v = c);
    } else {
      const y = t;
      (C = it(y.length > 1 ? y(f, { attrs: c, slots: i, emit: a }) : y(f, null))),
        (v = t.props ? c : wg(c));
    }
  } catch (y) {
    (Er.length = 0), rr(y, e, 1), (C = me(Be));
  }
  let m = C;
  if (v && b !== !1) {
    const y = Object.keys(v),
      { shapeFlag: x } = m;
    y.length && x & 7 && (s && y.some(aa) && (v = _g(v, s)), (m = bt(m, v, !1, !0)));
  }
  return (
    n.dirs && ((m = bt(m, null, !1, !0)), (m.dirs = m.dirs ? m.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (m.transition = n.transition),
    (C = m),
    No(E),
    C
  );
}
function bg(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (Xn(o)) {
      if (o.type !== Be || o.children === "v-if") {
        if (n) return;
        n = o;
      }
    } else return;
  }
  return n;
}
const wg = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Vr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  _g = (e, t) => {
    const n = {};
    for (const r in e) (!aa(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function xg(e, t, n) {
  const { props: r, children: o, component: s } = e,
    { props: i, children: c, patchFlag: a } = t,
    u = s.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return r ? xc(r, i, u) : !!i;
    if (a & 8) {
      const l = t.dynamicProps;
      for (let f = 0; f < l.length; f++) {
        const d = l[f];
        if (i[d] !== r[d] && !ls(u, d)) return !0;
      }
    }
  } else
    return (o || c) && (!c || !c.$stable) ? !0 : r === i ? !1 : r ? (i ? xc(r, i, u) : !0) : !!i;
  return !1;
}
function xc(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !ls(n, s)) return !0;
  }
  return !1;
}
function _a({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const vf = "components";
function zT(e, t) {
  return wf(vf, e, !0, t) || e;
}
const bf = Symbol.for("v-ndc");
function Dn(e) {
  return Ae(e) ? wf(vf, e, !1) || e : e || bf;
}
function wf(e, t, n = !0, r = !1) {
  const o = He || $e;
  if (o) {
    const s = o.type;
    {
      const c = xi(s, !1);
      if (c && (c === t || c === vt(t) || c === ss(vt(t)))) return s;
    }
    const i = Ec(o[e] || s[e], t) || Ec(o.appContext[e], t);
    return !i && r ? s : i;
  }
}
function Ec(e, t) {
  return e && (e[t] || e[vt(t)] || e[ss(vt(t))]);
}
const ui = (e) => e.__isSuspense;
let fi = 0;
const Eg = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, o, s, i, c, a, u) {
      if (e == null) Sg(t, n, r, o, s, i, c, a, u);
      else {
        if (s && s.deps > 0 && !e.suspense.isInFallback) {
          (t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el);
          return;
        }
        Cg(e, t, n, r, o, i, c, a, u);
      }
    },
    hydrate: Tg,
    create: Ea,
    normalize: kg,
  },
  xa = Eg;
function Hr(e, t) {
  const n = e.props && e.props[t];
  Z(n) && n();
}
function Sg(e, t, n, r, o, s, i, c, a) {
  const {
      p: u,
      o: { createElement: l },
    } = a,
    f = l("div"),
    d = (e.suspense = Ea(e, o, r, t, f, n, s, i, c, a));
  u(null, (d.pendingBranch = e.ssContent), f, null, r, d, s, i),
    d.deps > 0
      ? (Hr(e, "onPending"),
        Hr(e, "onFallback"),
        u(null, e.ssFallback, t, n, r, null, s, i),
        zn(d, e.ssFallback))
      : d.resolve(!1, !0);
}
function Cg(e, t, n, r, o, s, i, c, { p: a, um: u, o: { createElement: l } }) {
  const f = (t.suspense = e.suspense);
  (f.vnode = t), (t.el = e.el);
  const d = t.ssContent,
    h = t.ssFallback,
    { activeBranch: p, pendingBranch: b, isInFallback: E, isHydrating: C } = f;
  if (b)
    (f.pendingBranch = d),
      mt(d, b)
        ? (a(b, d, f.hiddenContainer, null, o, f, s, i, c),
          f.deps <= 0 ? f.resolve() : E && (C || (a(p, h, n, r, o, null, s, i, c), zn(f, h))))
        : ((f.pendingId = fi++),
          C ? ((f.isHydrating = !1), (f.activeBranch = b)) : u(b, o, f),
          (f.deps = 0),
          (f.effects.length = 0),
          (f.hiddenContainer = l("div")),
          E
            ? (a(null, d, f.hiddenContainer, null, o, f, s, i, c),
              f.deps <= 0 ? f.resolve() : (a(p, h, n, r, o, null, s, i, c), zn(f, h)))
            : p && mt(d, p)
              ? (a(p, d, n, r, o, f, s, i, c), f.resolve(!0))
              : (a(null, d, f.hiddenContainer, null, o, f, s, i, c), f.deps <= 0 && f.resolve()));
  else if (p && mt(d, p)) a(p, d, n, r, o, f, s, i, c), zn(f, d);
  else if (
    (Hr(t, "onPending"),
    (f.pendingBranch = d),
    d.shapeFlag & 512 ? (f.pendingId = d.component.suspenseId) : (f.pendingId = fi++),
    a(null, d, f.hiddenContainer, null, o, f, s, i, c),
    f.deps <= 0)
  )
    f.resolve();
  else {
    const { timeout: v, pendingId: m } = f;
    v > 0
      ? setTimeout(() => {
          f.pendingId === m && f.fallback(h);
        }, v)
      : v === 0 && f.fallback(h);
  }
}
function Ea(e, t, n, r, o, s, i, c, a, u, l = !1) {
  const {
    p: f,
    m: d,
    um: h,
    n: p,
    o: { parentNode: b, remove: E },
  } = u;
  let C;
  const v = Ag(e);
  v && t && t.pendingBranch && ((C = t.pendingId), t.deps++);
  const m = e.props ? Vu(e.props.timeout) : void 0,
    y = s,
    x = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: i,
      container: r,
      hiddenContainer: o,
      deps: 0,
      pendingId: fi++,
      timeout: typeof m == "number" ? m : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !l,
      isHydrating: l,
      isUnmounted: !1,
      effects: [],
      resolve(_ = !1, A = !1) {
        const {
          vnode: P,
          activeBranch: S,
          pendingBranch: k,
          pendingId: F,
          effects: I,
          parentComponent: W,
          container: ee,
        } = x;
        let te = !1;
        x.isHydrating
          ? (x.isHydrating = !1)
          : _ ||
            ((te = S && k.transition && k.transition.mode === "out-in"),
            te &&
              (S.transition.afterLeave = () => {
                F === x.pendingId && (d(k, ee, s === y ? p(S) : s, 0), li(I));
              }),
            S && (b(S.el) !== x.hiddenContainer && (s = p(S)), h(S, W, x, !0)),
            te || d(k, ee, s, 0)),
          zn(x, k),
          (x.pendingBranch = null),
          (x.isInFallback = !1);
        let j = x.parent,
          q = !1;
        for (; j; ) {
          if (j.pendingBranch) {
            j.effects.push(...I), (q = !0);
            break;
          }
          j = j.parent;
        }
        !q && !te && li(I),
          (x.effects = []),
          v &&
            t &&
            t.pendingBranch &&
            C === t.pendingId &&
            (t.deps--, t.deps === 0 && !A && t.resolve()),
          Hr(P, "onResolve");
      },
      fallback(_) {
        if (!x.pendingBranch) return;
        const { vnode: A, activeBranch: P, parentComponent: S, container: k, namespace: F } = x;
        Hr(A, "onFallback");
        const I = p(P),
          W = () => {
            x.isInFallback && (f(null, _, k, I, S, null, F, c, a), zn(x, _));
          },
          ee = _.transition && _.transition.mode === "out-in";
        ee && (P.transition.afterLeave = W), (x.isInFallback = !0), h(P, S, null, !0), ee || W();
      },
      move(_, A, P) {
        x.activeBranch && d(x.activeBranch, _, A, P), (x.container = _);
      },
      next() {
        return x.activeBranch && p(x.activeBranch);
      },
      registerDep(_, A, P) {
        const S = !!x.pendingBranch;
        S && x.deps++;
        const k = _.vnode.el;
        _.asyncDep
          .catch((F) => {
            rr(F, _, 0);
          })
          .then((F) => {
            if (_.isUnmounted || x.isUnmounted || x.pendingId !== _.suspenseId) return;
            _.asyncResolved = !0;
            const { vnode: I } = _;
            _i(_, F, !1), k && (I.el = k);
            const W = !k && _.subTree.el;
            A(_, I, b(k || _.subTree.el), k ? null : p(_.subTree), x, i, P),
              W && E(W),
              _a(_, I.el),
              S && --x.deps === 0 && x.resolve();
          });
      },
      unmount(_, A) {
        (x.isUnmounted = !0),
          x.activeBranch && h(x.activeBranch, n, _, A),
          x.pendingBranch && h(x.pendingBranch, n, _, A);
      },
    };
  return x;
}
function Tg(e, t, n, r, o, s, i, c, a) {
  const u = (t.suspense = Ea(
      t,
      r,
      n,
      e.parentNode,
      document.createElement("div"),
      null,
      o,
      s,
      i,
      c,
      !0,
    )),
    l = a(e, (u.pendingBranch = t.ssContent), n, u, s, i);
  return u.deps === 0 && u.resolve(!1, !0), l;
}
function kg(e) {
  const { shapeFlag: t, children: n } = e,
    r = t & 32;
  (e.ssContent = Sc(r ? n.default : n)), (e.ssFallback = r ? Sc(n.fallback) : me(Be));
}
function Sc(e) {
  let t;
  if (Z(e)) {
    const n = Qn && e._c;
    n && ((e._d = !1), oe()), (e = e()), n && ((e._d = !0), (t = ct), qf());
  }
  return (
    Q(e) && (e = bg(e)),
    (e = it(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function _f(e, t) {
  t && t.pendingBranch ? (Q(e) ? t.effects.push(...e) : t.effects.push(e)) : li(e);
}
function zn(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e;
  let o = t.el;
  for (; !o && t.component; ) (t = t.component.subTree), (o = t.el);
  (n.el = o), r && r.subTree === n && ((r.vnode.el = o), _a(r, o));
}
function Ag(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
function fs(e, t, n = $e, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...i) => {
          un();
          const c = Gr(n),
            a = lt(t, n, e, i);
          return c(), fn(), a;
        });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const Bt =
    (e) =>
    (t, n = $e) => {
      (!Yr || e === "sp") && fs(e, (...r) => t(...r), n);
    },
  xf = Bt("bm"),
  Gn = Bt("m"),
  Rg = Bt("bu"),
  Ef = Bt("u"),
  ds = Bt("bum"),
  hs = Bt("um"),
  Ig = Bt("sp"),
  Pg = Bt("rtg"),
  Og = Bt("rtc");
function Sf(e, t = $e) {
  fs("ec", e, t);
}
function JT(e, t) {
  if (He === null) return e;
  const n = gs(He),
    r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, c, a = _e] = t[o];
    s &&
      (Z(s) && (s = { mounted: s, updated: s }),
      s.deep && tn(i),
      r.push({ dir: s, instance: n, value: i, oldValue: void 0, arg: c, modifiers: a }));
  }
  return e;
}
function Ct(e, t, n, r) {
  const o = e.dirs,
    s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const c = o[i];
    s && (c.oldValue = s[i].value);
    let a = c.dir[r];
    a && (un(), lt(a, n, 8, [e.el, c, e, t]), fn());
  }
}
function di(e, t, n, r) {
  let o;
  const s = n;
  if (Q(e) || Ae(e)) {
    o = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++) o[i] = t(e[i], i, void 0, s);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, s);
  } else if (xe(e))
    if (e[Symbol.iterator]) o = Array.from(e, (i, c) => t(i, c, void 0, s));
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let c = 0, a = i.length; c < a; c++) {
        const u = i[c];
        o[c] = t(e[u], u, c, s);
      }
    }
  else o = [];
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */ function qe(e, t) {
  return Z(e) ? Le({ name: e.name }, t, { setup: e }) : e;
}
const kn = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */ function hi(e) {
  Z(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: o = 200,
    timeout: s,
    suspensible: i = !0,
    onError: c,
  } = e;
  let a = null,
    u,
    l = 0;
  const f = () => (l++, (a = null), d()),
    d = () => {
      let h;
      return (
        a ||
        (h = a =
          t()
            .catch((p) => {
              if (((p = p instanceof Error ? p : new Error(String(p))), c))
                return new Promise((b, E) => {
                  c(
                    p,
                    () => b(f()),
                    () => E(p),
                    l + 1,
                  );
                });
              throw p;
            })
            .then((p) =>
              h !== a && a
                ? a
                : (p && (p.__esModule || p[Symbol.toStringTag] === "Module") && (p = p.default),
                  (u = p),
                  p),
            ))
      );
    };
  return qe({
    name: "AsyncComponentWrapper",
    __asyncLoader: d,
    get __asyncResolved() {
      return u;
    },
    setup() {
      const h = $e;
      if (u) return () => Ls(u, h);
      const p = (v) => {
        (a = null), rr(v, h, 13, !r);
      };
      if ((i && h.suspense) || Yr)
        return d()
          .then((v) => () => Ls(v, h))
          .catch((v) => (p(v), () => (r ? me(r, { error: v }) : null)));
      const b = ie(!1),
        E = ie(),
        C = ie(!!o);
      return (
        o &&
          setTimeout(() => {
            C.value = !1;
          }, o),
        s != null &&
          setTimeout(() => {
            if (!b.value && !E.value) {
              const v = new Error(`Async component timed out after ${s}ms.`);
              p(v), (E.value = v);
            }
          }, s),
        d()
          .then(() => {
            (b.value = !0),
              h.parent && qr(h.parent.vnode) && ((h.parent.effect.dirty = !0), cs(h.parent.update));
          })
          .catch((v) => {
            p(v), (E.value = v);
          }),
        () => {
          if (b.value && u) return Ls(u, h);
          if (E.value && r) return me(r, { error: E.value });
          if (n && !C.value) return me(n);
        }
      );
    },
  });
}
function Ls(e, t) {
  const { ref: n, props: r, children: o, ce: s } = t.vnode,
    i = me(e, r, o);
  return (i.ref = n), (i.ce = s), delete t.vnode.ce, i;
}
function gt(e, t, n = {}, r, o) {
  if (He.isCE || (He.parent && kn(He.parent) && He.parent.isCE))
    return t !== "default" && (n.name = t), me("slot", n, r && r());
  let s = e[t];
  s && s._c && (s._d = !1), oe();
  const i = s && Cf(s(n)),
    c = Ve(
      Re,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2,
    );
  return !o && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), s && s._c && (s._d = !0), c;
}
function Cf(e) {
  return e.some((t) => (Xn(t) ? !(t.type === Be || (t.type === Re && !Cf(t.children))) : !0))
    ? e
    : null;
}
const pi = (e) => (e ? (Xf(e) ? gs(e) : pi(e.parent)) : null),
  wr = Le(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pi(e.parent),
    $root: (e) => pi(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Sa(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), cs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = dn.bind(e.proxy)),
    $watch: (e) => rm.bind(e),
  }),
  $s = (e, t) => e !== _e && !e.__isScriptSetup && pe(e, t),
  Mg = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: s,
        accessCache: i,
        type: c,
        appContext: a,
      } = e;
      let u;
      if (t[0] !== "$") {
        const h = i[t];
        if (h !== void 0)
          switch (h) {
            case 1:
              return r[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return s[t];
          }
        else {
          if ($s(r, t)) return (i[t] = 1), r[t];
          if (o !== _e && pe(o, t)) return (i[t] = 2), o[t];
          if ((u = e.propsOptions[0]) && pe(u, t)) return (i[t] = 3), s[t];
          if (n !== _e && pe(n, t)) return (i[t] = 4), n[t];
          gi && (i[t] = 0);
        }
      }
      const l = wr[t];
      let f, d;
      if (l) return t === "$attrs" && Xe(e.attrs, "get", ""), l(e);
      if ((f = c.__cssModules) && (f = f[t])) return f;
      if (n !== _e && pe(n, t)) return (i[t] = 4), n[t];
      if (((d = a.config.globalProperties), pe(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return $s(o, t)
        ? ((o[t] = n), !0)
        : r !== _e && pe(r, t)
          ? ((r[t] = n), !0)
          : pe(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((s[t] = n), !0);
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s } },
      i,
    ) {
      let c;
      return (
        !!n[i] ||
        (e !== _e && pe(e, i)) ||
        $s(t, i) ||
        ((c = s[0]) && pe(c, i)) ||
        pe(r, i) ||
        pe(wr, i) ||
        pe(o.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : pe(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Lg() {
  return $g().attrs;
}
function $g() {
  const e = hn();
  return e.setupContext || (e.setupContext = ed(e));
}
function Do(e) {
  return Q(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function qT(e, t) {
  return !e || !t ? e || t : Q(e) && Q(t) ? e.concat(t) : Le({}, Do(e), Do(t));
}
let gi = !0;
function Hg(e) {
  const t = Sa(e),
    n = e.proxy,
    r = e.ctx;
  (gi = !1), t.beforeCreate && Cc(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: s,
    methods: i,
    watch: c,
    provide: a,
    inject: u,
    created: l,
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: p,
    activated: b,
    deactivated: E,
    beforeDestroy: C,
    beforeUnmount: v,
    destroyed: m,
    unmounted: y,
    render: x,
    renderTracked: _,
    renderTriggered: A,
    errorCaptured: P,
    serverPrefetch: S,
    expose: k,
    inheritAttrs: F,
    components: I,
    directives: W,
    filters: ee,
  } = t;
  if ((u && Ng(u, r, null), i))
    for (const q in i) {
      const V = i[q];
      Z(V) && (r[q] = V.bind(n));
    }
  if (o) {
    const q = o.call(n, n);
    xe(q) && (e.data = _t(q));
  }
  if (((gi = !0), s))
    for (const q in s) {
      const V = s[q],
        de = Z(V) ? V.bind(n, n) : Z(V.get) ? V.get.bind(n, n) : at,
        Ne = !Z(V) && Z(V.set) ? V.set.bind(n) : at,
        Oe = he({ get: de, set: Ne });
      Object.defineProperty(r, q, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (ke) => (Oe.value = ke),
      });
    }
  if (c) for (const q in c) Tf(c[q], r, n, q);
  if (a) {
    const q = Z(a) ? a.call(n) : a;
    Reflect.ownKeys(q).forEach((V) => {
      An(V, q[V]);
    });
  }
  l && Cc(l, e, "c");
  function j(q, V) {
    Q(V) ? V.forEach((de) => q(de.bind(n))) : V && q(V.bind(n));
  }
  if (
    (j(xf, f),
    j(Gn, d),
    j(Rg, h),
    j(Ef, p),
    j(Uf, b),
    j(Ff, E),
    j(Sf, P),
    j(Og, _),
    j(Pg, A),
    j(ds, v),
    j(hs, y),
    j(Ig, S),
    Q(k))
  )
    if (k.length) {
      const q = e.exposed || (e.exposed = {});
      k.forEach((V) => {
        Object.defineProperty(q, V, { get: () => n[V], set: (de) => (n[V] = de) });
      });
    } else e.exposed || (e.exposed = {});
  x && e.render === at && (e.render = x),
    F != null && (e.inheritAttrs = F),
    I && (e.components = I),
    W && (e.directives = W);
}
function Ng(e, t, n = at) {
  Q(e) && (e = mi(e));
  for (const r in e) {
    const o = e[r];
    let s;
    xe(o)
      ? "default" in o
        ? (s = Me(o.from || r, o.default, !0))
        : (s = Me(o.from || r))
      : (s = Me(o)),
      Ie(s)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (i) => (s.value = i),
          })
        : (t[r] = s);
  }
}
function Cc(e, t, n) {
  lt(Q(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Tf(e, t, n, r) {
  const o = r.includes(".") ? jf(n, r) : () => n[r];
  if (Ae(e)) {
    const s = t[e];
    Z(s) && rt(o, s);
  } else if (Z(e)) rt(o, e.bind(n));
  else if (xe(e))
    if (Q(e)) e.forEach((s) => Tf(s, t, n, r));
    else {
      const s = Z(e.handler) ? e.handler.bind(n) : t[e.handler];
      Z(s) && rt(o, s, e);
    }
}
function Sa(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: s,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    c = s.get(t);
  let a;
  return (
    c
      ? (a = c)
      : !o.length && !n && !r
        ? (a = t)
        : ((a = {}), o.length && o.forEach((u) => jo(a, u, i, !0)), jo(a, t, i)),
    xe(t) && s.set(t, a),
    a
  );
}
function jo(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && jo(e, s, n, !0), o && o.forEach((i) => jo(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const c = Dg[i] || (n && n[i]);
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Dg = {
  data: Tc,
  props: kc,
  emits: kc,
  methods: gr,
  computed: gr,
  beforeCreate: Je,
  created: Je,
  beforeMount: Je,
  mounted: Je,
  beforeUpdate: Je,
  updated: Je,
  beforeDestroy: Je,
  beforeUnmount: Je,
  destroyed: Je,
  unmounted: Je,
  activated: Je,
  deactivated: Je,
  errorCaptured: Je,
  serverPrefetch: Je,
  components: gr,
  directives: gr,
  watch: Ug,
  provide: Tc,
  inject: jg,
};
function Tc(e, t) {
  return t
    ? e
      ? function () {
          return Le(Z(e) ? e.call(this, this) : e, Z(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function jg(e, t) {
  return gr(mi(e), mi(t));
}
function mi(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function gr(e, t) {
  return e ? Le(Object.create(null), e, t) : t;
}
function kc(e, t) {
  return e
    ? Q(e) && Q(t)
      ? [...new Set([...e, ...t])]
      : Le(Object.create(null), Do(e), Do(t ?? {}))
    : t;
}
function Ug(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Le(Object.create(null), e);
  for (const r in t) n[r] = Je(e[r], t[r]);
  return n;
}
function kf() {
  return {
    app: null,
    config: {
      isNativeTag: Tp,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Fg = 0;
function Bg(e, t) {
  return function (r, o = null) {
    Z(r) || (r = Le({}, r)), o != null && !xe(o) && (o = null);
    const s = kf(),
      i = new WeakSet();
    let c = !1;
    const a = (s.app = {
      _uid: Fg++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: td,
      get config() {
        return s.config;
      },
      set config(u) {},
      use(u, ...l) {
        return (
          i.has(u) ||
            (u && Z(u.install) ? (i.add(u), u.install(a, ...l)) : Z(u) && (i.add(u), u(a, ...l))),
          a
        );
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), a;
      },
      component(u, l) {
        return l ? ((s.components[u] = l), a) : s.components[u];
      },
      directive(u, l) {
        return l ? ((s.directives[u] = l), a) : s.directives[u];
      },
      mount(u, l, f) {
        if (!c) {
          const d = me(r, o);
          return (
            (d.appContext = s),
            f === !0 ? (f = "svg") : f === !1 && (f = void 0),
            l && t ? t(d, u) : e(d, u, f),
            (c = !0),
            (a._container = u),
            (u.__vue_app__ = a),
            gs(d.component)
          );
        }
      },
      unmount() {
        c && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(u, l) {
        return (s.provides[u] = l), a;
      },
      runWithContext(u) {
        const l = Jn;
        Jn = a;
        try {
          return u();
        } finally {
          Jn = l;
        }
      },
    });
    return a;
  };
}
let Jn = null;
function An(e, t) {
  if ($e) {
    let n = $e.provides;
    const r = $e.parent && $e.parent.provides;
    r === n && (n = $e.provides = Object.create(r)), (n[e] = t);
  }
}
function Me(e, t, n = !1) {
  const r = $e || He;
  if (r || Jn) {
    const o = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : Jn._context.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && Z(t) ? t.call(r && r.proxy) : t;
  }
}
function Ca() {
  return !!($e || He || Jn);
}
const Af = {},
  Rf = () => Object.create(Af),
  If = (e) => Object.getPrototypeOf(e) === Af;
function Wg(e, t, n, r = !1) {
  const o = {},
    s = Rf();
  (e.propsDefaults = Object.create(null)), Pf(e, t, o, s);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  n ? (e.props = r ? o : Nt(o)) : e.type.props ? (e.props = o) : (e.props = s), (e.attrs = s);
}
function Kg(e, t, n, r) {
  const {
      props: o,
      attrs: s,
      vnode: { patchFlag: i },
    } = e,
    c = ge(o),
    [a] = e.propsOptions;
  let u = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const l = e.vnode.dynamicProps;
      for (let f = 0; f < l.length; f++) {
        let d = l[f];
        if (ls(e.emitsOptions, d)) continue;
        const h = t[d];
        if (a)
          if (pe(s, d)) h !== s[d] && ((s[d] = h), (u = !0));
          else {
            const p = vt(d);
            o[p] = yi(a, c, p, h, e, !1);
          }
        else h !== s[d] && ((s[d] = h), (u = !0));
      }
    }
  } else {
    Pf(e, t, o, s) && (u = !0);
    let l;
    for (const f in c)
      (!t || (!pe(t, f) && ((l = ln(f)) === f || !pe(t, l)))) &&
        (a
          ? n && (n[f] !== void 0 || n[l] !== void 0) && (o[f] = yi(a, c, f, void 0, e, !0))
          : delete o[f]);
    if (s !== c) for (const f in s) (!t || !pe(t, f)) && (delete s[f], (u = !0));
  }
  u && jt(e.attrs, "set", "");
}
function Pf(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1,
    c;
  if (t)
    for (let a in t) {
      if (Wn(a)) continue;
      const u = t[a];
      let l;
      o && pe(o, (l = vt(a)))
        ? !s || !s.includes(l)
          ? (n[l] = u)
          : ((c || (c = {}))[l] = u)
        : ls(e.emitsOptions, a) || ((!(a in r) || u !== r[a]) && ((r[a] = u), (i = !0)));
    }
  if (s) {
    const a = ge(n),
      u = c || _e;
    for (let l = 0; l < s.length; l++) {
      const f = s[l];
      n[f] = yi(o, a, f, u[f], e, !pe(u, f));
    }
  }
  return i;
}
function yi(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const c = pe(i, "default");
    if (c && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && Z(a)) {
        const { propsDefaults: u } = o;
        if (n in u) r = u[n];
        else {
          const l = Gr(o);
          (r = u[n] = a.call(null, t)), l();
        }
      } else r = a;
    }
    i[0] && (s && !c ? (r = !1) : i[1] && (r === "" || r === ln(n)) && (r = !0));
  }
  return r;
}
function Of(e, t, n = !1) {
  const r = t.propsCache,
    o = r.get(e);
  if (o) return o;
  const s = e.props,
    i = {},
    c = [];
  let a = !1;
  if (!Z(e)) {
    const l = (f) => {
      a = !0;
      const [d, h] = Of(f, t, !0);
      Le(i, d), h && c.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  if (!s && !a) return xe(e) && r.set(e, Fn), Fn;
  if (Q(s))
    for (let l = 0; l < s.length; l++) {
      const f = vt(s[l]);
      Ac(f) && (i[f] = _e);
    }
  else if (s)
    for (const l in s) {
      const f = vt(l);
      if (Ac(f)) {
        const d = s[l],
          h = (i[f] = Q(d) || Z(d) ? { type: d } : Le({}, d));
        if (h) {
          const p = Pc(Boolean, h.type),
            b = Pc(String, h.type);
          (h[0] = p > -1), (h[1] = b < 0 || p < b), (p > -1 || pe(h, "default")) && c.push(f);
        }
      }
    }
  const u = [i, c];
  return xe(e) && r.set(e, u), u;
}
function Ac(e) {
  return e[0] !== "$" && !Wn(e);
}
function Rc(e) {
  return e === null
    ? "null"
    : typeof e == "function"
      ? e.name || ""
      : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function Ic(e, t) {
  return Rc(e) === Rc(t);
}
function Pc(e, t) {
  return Q(t) ? t.findIndex((n) => Ic(n, e)) : Z(t) && Ic(t, e) ? 0 : -1;
}
const Mf = (e) => e[0] === "_" || e === "$stable",
  Ta = (e) => (Q(e) ? e.map(it) : [it(e)]),
  Vg = (e, t, n) => {
    if (t._n) return t;
    const r = $t((...o) => Ta(t(...o)), n);
    return (r._c = !1), r;
  },
  Lf = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Mf(o)) continue;
      const s = e[o];
      if (Z(s)) t[o] = Vg(o, s, r);
      else if (s != null) {
        const i = Ta(s);
        t[o] = () => i;
      }
    }
  },
  $f = (e, t) => {
    const n = Ta(t);
    e.slots.default = () => n;
  },
  zg = (e, t) => {
    const n = (e.slots = Rf());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Le(n, t), Ku(n, "_", r, !0)) : Lf(t, n);
    } else t && $f(e, t);
  },
  Jg = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = !0,
      i = _e;
    if (r.shapeFlag & 32) {
      const c = t._;
      c
        ? n && c === 1
          ? (s = !1)
          : (Le(o, t), !n && c === 1 && delete o._)
        : ((s = !t.$stable), Lf(t, o)),
        (i = t);
    } else t && ($f(e, t), (i = { default: 1 }));
    if (s) for (const c in o) !Mf(c) && i[c] == null && delete o[c];
  };
function Uo(e, t, n, r, o = !1) {
  if (Q(e)) {
    e.forEach((d, h) => Uo(d, t && (Q(t) ? t[h] : t), n, r, o));
    return;
  }
  if (kn(r) && !o) return;
  const s = r.shapeFlag & 4 ? gs(r.component) : r.el,
    i = o ? null : s,
    { i: c, r: a } = e,
    u = t && t.r,
    l = c.refs === _e ? (c.refs = {}) : c.refs,
    f = c.setupState;
  if (
    (u != null &&
      u !== a &&
      (Ae(u) ? ((l[u] = null), pe(f, u) && (f[u] = null)) : Ie(u) && (u.value = null)),
    Z(a))
  )
    an(a, c, 12, [i, l]);
  else {
    const d = Ae(a),
      h = Ie(a);
    if (d || h) {
      const p = () => {
        if (e.f) {
          const b = d ? (pe(f, a) ? f[a] : l[a]) : a.value;
          o
            ? Q(b) && ca(b, s)
            : Q(b)
              ? b.includes(s) || b.push(s)
              : d
                ? ((l[a] = [s]), pe(f, a) && (f[a] = l[a]))
                : ((a.value = [s]), e.k && (l[e.k] = a.value));
        } else d ? ((l[a] = i), pe(f, a) && (f[a] = i)) : h && ((a.value = i), e.k && (l[e.k] = i));
      };
      i ? ((p.id = -1), je(p, n)) : p();
    }
  }
}
let Oc = !1;
const Ln = () => {
    Oc || (console.error("Hydration completed but contains mismatches."), (Oc = !0));
  },
  qg = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
  Gg = (e) => e.namespaceURI.includes("MathML"),
  ao = (e) => {
    if (qg(e)) return "svg";
    if (Gg(e)) return "mathml";
  },
  co = (e) => e.nodeType === 8;
function Yg(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: o,
        nextSibling: s,
        parentNode: i,
        remove: c,
        insert: a,
        createComment: u,
      },
    } = e,
    l = (m, y) => {
      if (!y.hasChildNodes()) {
        n(null, m, y), Ho(), (y._vnode = m);
        return;
      }
      f(y.firstChild, m, null, null, null), Ho(), (y._vnode = m);
    },
    f = (m, y, x, _, A, P = !1) => {
      P = P || !!y.dynamicChildren;
      const S = co(m) && m.data === "[",
        k = () => b(m, y, x, _, A, S),
        { type: F, ref: I, shapeFlag: W, patchFlag: ee } = y;
      let te = m.nodeType;
      (y.el = m), ee === -2 && ((P = !1), (y.dynamicChildren = null));
      let j = null;
      switch (F) {
        case Yn:
          te !== 3
            ? y.children === ""
              ? (a((y.el = o("")), i(m), m), (j = m))
              : (j = k())
            : (m.data !== y.children && (Ln(), (m.data = y.children)), (j = s(m)));
          break;
        case Be:
          v(m)
            ? ((j = s(m)), C((y.el = m.content.firstChild), m, x))
            : te !== 8 || S
              ? (j = k())
              : (j = s(m));
          break;
        case xr:
          if ((S && ((m = s(m)), (te = m.nodeType)), te === 1 || te === 3)) {
            j = m;
            const q = !y.children.length;
            for (let V = 0; V < y.staticCount; V++)
              q && (y.children += j.nodeType === 1 ? j.outerHTML : j.data),
                V === y.staticCount - 1 && (y.anchor = j),
                (j = s(j));
            return S ? s(j) : j;
          } else k();
          break;
        case Re:
          S ? (j = p(m, y, x, _, A, P)) : (j = k());
          break;
        default:
          if (W & 1)
            (te !== 1 || y.type.toLowerCase() !== m.tagName.toLowerCase()) && !v(m)
              ? (j = k())
              : (j = d(m, y, x, _, A, P));
          else if (W & 6) {
            y.slotScopeIds = A;
            const q = i(m);
            if (
              (S
                ? (j = E(m))
                : co(m) && m.data === "teleport start"
                  ? (j = E(m, m.data, "teleport end"))
                  : (j = s(m)),
              t(y, q, null, x, _, ao(q), P),
              kn(y))
            ) {
              let V;
              S
                ? ((V = me(Re)), (V.anchor = j ? j.previousSibling : q.lastChild))
                : (V = m.nodeType === 3 ? Bo("") : me("div")),
                (V.el = m),
                (y.component.subTree = V);
            }
          } else
            W & 64
              ? te !== 8
                ? (j = k())
                : (j = y.type.hydrate(m, y, x, _, A, P, e, h))
              : W & 128 && (j = y.type.hydrate(m, y, x, _, ao(i(m)), A, P, e, f));
      }
      return I != null && Uo(I, null, _, y), j;
    },
    d = (m, y, x, _, A, P) => {
      P = P || !!y.dynamicChildren;
      const { type: S, props: k, patchFlag: F, shapeFlag: I, dirs: W, transition: ee } = y,
        te = S === "input" || S === "option";
      if (te || F !== -1) {
        W && Ct(y, null, x, "created");
        let j = !1;
        if (v(m)) {
          j = Nf(_, ee) && x && x.vnode.props && x.vnode.props.appear;
          const V = m.content.firstChild;
          j && ee.beforeEnter(V), C(V, m, x), (y.el = m = V);
        }
        if (I & 16 && !(k && (k.innerHTML || k.textContent))) {
          let V = h(m.firstChild, y, m, x, _, A, P);
          for (; V; ) {
            Ln();
            const de = V;
            (V = V.nextSibling), c(de);
          }
        } else I & 8 && m.textContent !== y.children && (Ln(), (m.textContent = y.children));
        if (k)
          if (te || !P || F & 48)
            for (const V in k)
              ((te && (V.endsWith("value") || V === "indeterminate")) ||
                (Vr(V) && !Wn(V)) ||
                V[0] === ".") &&
                r(m, V, null, k[V], void 0, void 0, x);
          else k.onClick && r(m, "onClick", null, k.onClick, void 0, void 0, x);
        let q;
        (q = k && k.onVnodeBeforeMount) && Ye(q, x, y),
          W && Ct(y, null, x, "beforeMount"),
          ((q = k && k.onVnodeMounted) || W || j) &&
            _f(() => {
              q && Ye(q, x, y), j && ee.enter(m), W && Ct(y, null, x, "mounted");
            }, _);
      }
      return m.nextSibling;
    },
    h = (m, y, x, _, A, P, S) => {
      S = S || !!y.dynamicChildren;
      const k = y.children,
        F = k.length;
      for (let I = 0; I < F; I++) {
        const W = S ? k[I] : (k[I] = it(k[I]));
        m
          ? (m = f(m, W, _, A, P, S))
          : W.type === Yn && !W.children
            ? a((W.el = o("")), x)
            : (Ln(), n(null, W, x, null, _, A, ao(x), P));
      }
      return m;
    },
    p = (m, y, x, _, A, P) => {
      const { slotScopeIds: S } = y;
      S && (A = A ? A.concat(S) : S);
      const k = i(m),
        F = h(s(m), y, k, x, _, A, P);
      return F && co(F) && F.data === "]"
        ? s((y.anchor = F))
        : (Ln(), a((y.anchor = u("]")), k, F), F);
    },
    b = (m, y, x, _, A, P) => {
      if ((Ln(), (y.el = null), P)) {
        const F = E(m);
        for (;;) {
          const I = s(m);
          if (I && I !== F) c(I);
          else break;
        }
      }
      const S = s(m),
        k = i(m);
      return c(m), n(null, y, k, S, x, _, ao(k), A), S;
    },
    E = (m, y = "[", x = "]") => {
      let _ = 0;
      for (; m; )
        if (((m = s(m)), m && co(m) && (m.data === y && _++, m.data === x))) {
          if (_ === 0) return s(m);
          _--;
        }
      return m;
    },
    C = (m, y, x) => {
      const _ = y.parentNode;
      _ && _.replaceChild(m, y);
      let A = x;
      for (; A; ) A.vnode.el === y && (A.vnode.el = A.subTree.el = m), (A = A.parent);
    },
    v = (m) => m.nodeType === 1 && m.tagName.toLowerCase() === "template";
  return [l, f];
}
const je = _f;
function Qg(e) {
  return Hf(e);
}
function Xg(e) {
  return Hf(e, Yg);
}
function Hf(e, t) {
  const n = zu();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: o,
      patchProp: s,
      createElement: i,
      createText: c,
      createComment: a,
      setText: u,
      setElementText: l,
      parentNode: f,
      nextSibling: d,
      setScopeId: h = at,
      insertStaticContent: p,
    } = e,
    b = (g, w, T, M = null, O = null, H = null, K = void 0, U = null, B = !!w.dynamicChildren) => {
      if (g === w) return;
      g && !mt(g, w) && ((M = R(g)), ke(g, O, H, !0), (g = null)),
        w.patchFlag === -2 && ((B = !1), (w.dynamicChildren = null));
      const { type: $, ref: J, shapeFlag: X } = w;
      switch ($) {
        case Yn:
          E(g, w, T, M);
          break;
        case Be:
          C(g, w, T, M);
          break;
        case xr:
          g == null && v(w, T, M, K);
          break;
        case Re:
          I(g, w, T, M, O, H, K, U, B);
          break;
        default:
          X & 1
            ? x(g, w, T, M, O, H, K, U, B)
            : X & 6
              ? W(g, w, T, M, O, H, K, U, B)
              : (X & 64 || X & 128) && $.process(g, w, T, M, O, H, K, U, B, z);
      }
      J != null && O && Uo(J, g && g.ref, H, w || g, !w);
    },
    E = (g, w, T, M) => {
      if (g == null) r((w.el = c(w.children)), T, M);
      else {
        const O = (w.el = g.el);
        w.children !== g.children && u(O, w.children);
      }
    },
    C = (g, w, T, M) => {
      g == null ? r((w.el = a(w.children || "")), T, M) : (w.el = g.el);
    },
    v = (g, w, T, M) => {
      [g.el, g.anchor] = p(g.children, w, T, M, g.el, g.anchor);
    },
    m = ({ el: g, anchor: w }, T, M) => {
      let O;
      for (; g && g !== w; ) (O = d(g)), r(g, T, M), (g = O);
      r(w, T, M);
    },
    y = ({ el: g, anchor: w }) => {
      let T;
      for (; g && g !== w; ) (T = d(g)), o(g), (g = T);
      o(w);
    },
    x = (g, w, T, M, O, H, K, U, B) => {
      w.type === "svg" ? (K = "svg") : w.type === "math" && (K = "mathml"),
        g == null ? _(w, T, M, O, H, K, U, B) : S(g, w, O, H, K, U, B);
    },
    _ = (g, w, T, M, O, H, K, U) => {
      let B, $;
      const { props: J, shapeFlag: X, transition: Y, dirs: re } = g;
      if (
        ((B = g.el = i(g.type, H, J && J.is, J)),
        X & 8 ? l(B, g.children) : X & 16 && P(g.children, B, null, M, O, Hs(g, H), K, U),
        re && Ct(g, null, M, "created"),
        A(B, g, g.scopeId, K, M),
        J)
      ) {
        for (const Ee in J)
          Ee !== "value" && !Wn(Ee) && s(B, Ee, null, J[Ee], H, g.children, M, O, ae);
        "value" in J && s(B, "value", null, J.value, H), ($ = J.onVnodeBeforeMount) && Ye($, M, g);
      }
      re && Ct(g, null, M, "beforeMount");
      const ce = Nf(O, Y);
      ce && Y.beforeEnter(B),
        r(B, w, T),
        (($ = J && J.onVnodeMounted) || ce || re) &&
          je(() => {
            $ && Ye($, M, g), ce && Y.enter(B), re && Ct(g, null, M, "mounted");
          }, O);
    },
    A = (g, w, T, M, O) => {
      if ((T && h(g, T), M)) for (let H = 0; H < M.length; H++) h(g, M[H]);
      if (O) {
        let H = O.subTree;
        if (w === H) {
          const K = O.vnode;
          A(g, K, K.scopeId, K.slotScopeIds, O.parent);
        }
      }
    },
    P = (g, w, T, M, O, H, K, U, B = 0) => {
      for (let $ = B; $ < g.length; $++) {
        const J = (g[$] = U ? Zt(g[$]) : it(g[$]));
        b(null, J, w, T, M, O, H, K, U);
      }
    },
    S = (g, w, T, M, O, H, K) => {
      const U = (w.el = g.el);
      let { patchFlag: B, dynamicChildren: $, dirs: J } = w;
      B |= g.patchFlag & 16;
      const X = g.props || _e,
        Y = w.props || _e;
      let re;
      if (
        (T && mn(T, !1),
        (re = Y.onVnodeBeforeUpdate) && Ye(re, T, w, g),
        J && Ct(w, g, T, "beforeUpdate"),
        T && mn(T, !0),
        $
          ? k(g.dynamicChildren, $, U, T, M, Hs(w, O), H)
          : K || V(g, w, U, null, T, M, Hs(w, O), H, !1),
        B > 0)
      ) {
        if (B & 16) F(U, w, X, Y, T, M, O);
        else if (
          (B & 2 && X.class !== Y.class && s(U, "class", null, Y.class, O),
          B & 4 && s(U, "style", X.style, Y.style, O),
          B & 8)
        ) {
          const ce = w.dynamicProps;
          for (let Ee = 0; Ee < ce.length; Ee++) {
            const ye = ce[Ee],
              De = X[ye],
              ft = Y[ye];
            (ft !== De || ye === "value") && s(U, ye, De, ft, O, g.children, T, M, ae);
          }
        }
        B & 1 && g.children !== w.children && l(U, w.children);
      } else !K && $ == null && F(U, w, X, Y, T, M, O);
      ((re = Y.onVnodeUpdated) || J) &&
        je(() => {
          re && Ye(re, T, w, g), J && Ct(w, g, T, "updated");
        }, M);
    },
    k = (g, w, T, M, O, H, K) => {
      for (let U = 0; U < w.length; U++) {
        const B = g[U],
          $ = w[U],
          J = B.el && (B.type === Re || !mt(B, $) || B.shapeFlag & 70) ? f(B.el) : T;
        b(B, $, J, null, M, O, H, K, !0);
      }
    },
    F = (g, w, T, M, O, H, K) => {
      if (T !== M) {
        if (T !== _e)
          for (const U in T) !Wn(U) && !(U in M) && s(g, U, T[U], null, K, w.children, O, H, ae);
        for (const U in M) {
          if (Wn(U)) continue;
          const B = M[U],
            $ = T[U];
          B !== $ && U !== "value" && s(g, U, $, B, K, w.children, O, H, ae);
        }
        "value" in M && s(g, "value", T.value, M.value, K);
      }
    },
    I = (g, w, T, M, O, H, K, U, B) => {
      const $ = (w.el = g ? g.el : c("")),
        J = (w.anchor = g ? g.anchor : c(""));
      let { patchFlag: X, dynamicChildren: Y, slotScopeIds: re } = w;
      re && (U = U ? U.concat(re) : re),
        g == null
          ? (r($, T, M), r(J, T, M), P(w.children || [], T, J, O, H, K, U, B))
          : X > 0 && X & 64 && Y && g.dynamicChildren
            ? (k(g.dynamicChildren, Y, T, O, H, K, U),
              (w.key != null || (O && w === O.subTree)) && ka(g, w, !0))
            : V(g, w, T, J, O, H, K, U, B);
    },
    W = (g, w, T, M, O, H, K, U, B) => {
      (w.slotScopeIds = U),
        g == null
          ? w.shapeFlag & 512
            ? O.ctx.activate(w, T, M, K, B)
            : ee(w, T, M, O, H, K, B)
          : te(g, w, B);
    },
    ee = (g, w, T, M, O, H, K) => {
      const U = (g.component = mm(g, M, O));
      if ((qr(g) && (U.ctx.renderer = z), ym(U), U.asyncDep)) {
        if ((O && O.registerDep(U, j, K), !g.el)) {
          const B = (U.subTree = me(Be));
          C(null, B, w, T);
        }
      } else j(U, g, w, T, O, H, K);
    },
    te = (g, w, T) => {
      const M = (w.component = g.component);
      if (xg(g, w, T))
        if (M.asyncDep && !M.asyncResolved) {
          q(M, w, T);
          return;
        } else (M.next = w), pg(M.update), (M.effect.dirty = !0), M.update();
      else (w.el = g.el), (M.vnode = w);
    },
    j = (g, w, T, M, O, H, K) => {
      const U = () => {
          if (g.isMounted) {
            let { next: J, bu: X, u: Y, parent: re, vnode: ce } = g;
            {
              const Mn = Df(g);
              if (Mn) {
                J && ((J.el = ce.el), q(g, J, K)),
                  Mn.asyncDep.then(() => {
                    g.isUnmounted || U();
                  });
                return;
              }
            }
            let Ee = J,
              ye;
            mn(g, !1),
              J ? ((J.el = ce.el), q(g, J, K)) : (J = ce),
              X && Kn(X),
              (ye = J.props && J.props.onVnodeBeforeUpdate) && Ye(ye, re, J, ce),
              mn(g, !0);
            const De = Ms(g),
              ft = g.subTree;
            (g.subTree = De),
              b(ft, De, f(ft.el), R(ft), g, O, H),
              (J.el = De.el),
              Ee === null && _a(g, De.el),
              Y && je(Y, O),
              (ye = J.props && J.props.onVnodeUpdated) && je(() => Ye(ye, re, J, ce), O);
          } else {
            let J;
            const { el: X, props: Y } = w,
              { bm: re, m: ce, parent: Ee } = g,
              ye = kn(w);
            if (
              (mn(g, !1),
              re && Kn(re),
              !ye && (J = Y && Y.onVnodeBeforeMount) && Ye(J, Ee, w),
              mn(g, !0),
              X && we)
            ) {
              const De = () => {
                (g.subTree = Ms(g)), we(X, g.subTree, g, O, null);
              };
              ye ? w.type.__asyncLoader().then(() => !g.isUnmounted && De()) : De();
            } else {
              const De = (g.subTree = Ms(g));
              b(null, De, T, M, g, O, H), (w.el = De.el);
            }
            if ((ce && je(ce, O), !ye && (J = Y && Y.onVnodeMounted))) {
              const De = w;
              je(() => Ye(J, Ee, De), O);
            }
            (w.shapeFlag & 256 || (Ee && kn(Ee.vnode) && Ee.vnode.shapeFlag & 256)) &&
              g.a &&
              je(g.a, O),
              (g.isMounted = !0),
              (w = T = M = null);
          }
        },
        B = (g.effect = new ua(U, at, () => cs($), g.scope)),
        $ = (g.update = () => {
          B.dirty && B.run();
        });
      ($.id = g.uid), mn(g, !0), $();
    },
    q = (g, w, T) => {
      w.component = g;
      const M = g.vnode.props;
      (g.vnode = w), (g.next = null), Kg(g, w.props, M, T), Jg(g, w.children, T), un(), _c(g), fn();
    },
    V = (g, w, T, M, O, H, K, U, B = !1) => {
      const $ = g && g.children,
        J = g ? g.shapeFlag : 0,
        X = w.children,
        { patchFlag: Y, shapeFlag: re } = w;
      if (Y > 0) {
        if (Y & 128) {
          Ne($, X, T, M, O, H, K, U, B);
          return;
        } else if (Y & 256) {
          de($, X, T, M, O, H, K, U, B);
          return;
        }
      }
      re & 8
        ? (J & 16 && ae($, O, H), X !== $ && l(T, X))
        : J & 16
          ? re & 16
            ? Ne($, X, T, M, O, H, K, U, B)
            : ae($, O, H, !0)
          : (J & 8 && l(T, ""), re & 16 && P(X, T, M, O, H, K, U, B));
    },
    de = (g, w, T, M, O, H, K, U, B) => {
      (g = g || Fn), (w = w || Fn);
      const $ = g.length,
        J = w.length,
        X = Math.min($, J);
      let Y;
      for (Y = 0; Y < X; Y++) {
        const re = (w[Y] = B ? Zt(w[Y]) : it(w[Y]));
        b(g[Y], re, T, null, O, H, K, U, B);
      }
      $ > J ? ae(g, O, H, !0, !1, X) : P(w, T, M, O, H, K, U, B, X);
    },
    Ne = (g, w, T, M, O, H, K, U, B) => {
      let $ = 0;
      const J = w.length;
      let X = g.length - 1,
        Y = J - 1;
      for (; $ <= X && $ <= Y; ) {
        const re = g[$],
          ce = (w[$] = B ? Zt(w[$]) : it(w[$]));
        if (mt(re, ce)) b(re, ce, T, null, O, H, K, U, B);
        else break;
        $++;
      }
      for (; $ <= X && $ <= Y; ) {
        const re = g[X],
          ce = (w[Y] = B ? Zt(w[Y]) : it(w[Y]));
        if (mt(re, ce)) b(re, ce, T, null, O, H, K, U, B);
        else break;
        X--, Y--;
      }
      if ($ > X) {
        if ($ <= Y) {
          const re = Y + 1,
            ce = re < J ? w[re].el : M;
          for (; $ <= Y; ) b(null, (w[$] = B ? Zt(w[$]) : it(w[$])), T, ce, O, H, K, U, B), $++;
        }
      } else if ($ > Y) for (; $ <= X; ) ke(g[$], O, H, !0), $++;
      else {
        const re = $,
          ce = $,
          Ee = new Map();
        for ($ = ce; $ <= Y; $++) {
          const et = (w[$] = B ? Zt(w[$]) : it(w[$]));
          et.key != null && Ee.set(et.key, $);
        }
        let ye,
          De = 0;
        const ft = Y - ce + 1;
        let Mn = !1,
          cc = 0;
        const ar = new Array(ft);
        for ($ = 0; $ < ft; $++) ar[$] = 0;
        for ($ = re; $ <= X; $++) {
          const et = g[$];
          if (De >= ft) {
            ke(et, O, H, !0);
            continue;
          }
          let Et;
          if (et.key != null) Et = Ee.get(et.key);
          else
            for (ye = ce; ye <= Y; ye++)
              if (ar[ye - ce] === 0 && mt(et, w[ye])) {
                Et = ye;
                break;
              }
          Et === void 0
            ? ke(et, O, H, !0)
            : ((ar[Et - ce] = $ + 1),
              Et >= cc ? (cc = Et) : (Mn = !0),
              b(et, w[Et], T, null, O, H, K, U, B),
              De++);
        }
        const lc = Mn ? Zg(ar) : Fn;
        for (ye = lc.length - 1, $ = ft - 1; $ >= 0; $--) {
          const et = ce + $,
            Et = w[et],
            uc = et + 1 < J ? w[et + 1].el : M;
          ar[$] === 0
            ? b(null, Et, T, uc, O, H, K, U, B)
            : Mn && (ye < 0 || $ !== lc[ye] ? Oe(Et, T, uc, 2) : ye--);
        }
      }
    },
    Oe = (g, w, T, M, O = null) => {
      const { el: H, type: K, transition: U, children: B, shapeFlag: $ } = g;
      if ($ & 6) {
        Oe(g.component.subTree, w, T, M);
        return;
      }
      if ($ & 128) {
        g.suspense.move(w, T, M);
        return;
      }
      if ($ & 64) {
        K.move(g, w, T, z);
        return;
      }
      if (K === Re) {
        r(H, w, T);
        for (let X = 0; X < B.length; X++) Oe(B[X], w, T, M);
        r(g.anchor, w, T);
        return;
      }
      if (K === xr) {
        m(g, w, T);
        return;
      }
      if (M !== 2 && $ & 1 && U)
        if (M === 0) U.beforeEnter(H), r(H, w, T), je(() => U.enter(H), O);
        else {
          const { leave: X, delayLeave: Y, afterLeave: re } = U,
            ce = () => r(H, w, T),
            Ee = () => {
              X(H, () => {
                ce(), re && re();
              });
            };
          Y ? Y(H, ce, Ee) : Ee();
        }
      else r(H, w, T);
    },
    ke = (g, w, T, M = !1, O = !1) => {
      const {
        type: H,
        props: K,
        ref: U,
        children: B,
        dynamicChildren: $,
        shapeFlag: J,
        patchFlag: X,
        dirs: Y,
        memoIndex: re,
      } = g;
      if (
        (U != null && Uo(U, null, T, g, !0), re != null && (w.renderCache[re] = void 0), J & 256)
      ) {
        w.ctx.deactivate(g);
        return;
      }
      const ce = J & 1 && Y,
        Ee = !kn(g);
      let ye;
      if ((Ee && (ye = K && K.onVnodeBeforeUnmount) && Ye(ye, w, g), J & 6)) le(g.component, T, M);
      else {
        if (J & 128) {
          g.suspense.unmount(T, M);
          return;
        }
        ce && Ct(g, null, w, "beforeUnmount"),
          J & 64
            ? g.type.remove(g, w, T, O, z, M)
            : $ && (H !== Re || (X > 0 && X & 64))
              ? ae($, w, T, !1, !0)
              : ((H === Re && X & 384) || (!O && J & 16)) && ae(B, w, T),
          M && Ge(g);
      }
      ((Ee && (ye = K && K.onVnodeUnmounted)) || ce) &&
        je(() => {
          ye && Ye(ye, w, g), ce && Ct(g, null, w, "unmounted");
        }, T);
    },
    Ge = (g) => {
      const { type: w, el: T, anchor: M, transition: O } = g;
      if (w === Re) {
        L(T, M);
        return;
      }
      if (w === xr) {
        y(g);
        return;
      }
      const H = () => {
        o(T), O && !O.persisted && O.afterLeave && O.afterLeave();
      };
      if (g.shapeFlag & 1 && O && !O.persisted) {
        const { leave: K, delayLeave: U } = O,
          B = () => K(T, H);
        U ? U(g.el, H, B) : B();
      } else H();
    },
    L = (g, w) => {
      let T;
      for (; g !== w; ) (T = d(g)), o(g), (g = T);
      o(w);
    },
    le = (g, w, T) => {
      const { bum: M, scope: O, update: H, subTree: K, um: U, m: B, a: $ } = g;
      Fo(B),
        Fo($),
        M && Kn(M),
        O.stop(),
        H && ((H.active = !1), ke(K, g, w, T)),
        U && je(U, w),
        je(() => {
          g.isUnmounted = !0;
        }, w),
        w &&
          w.pendingBranch &&
          !w.isUnmounted &&
          g.asyncDep &&
          !g.asyncResolved &&
          g.suspenseId === w.pendingId &&
          (w.deps--, w.deps === 0 && w.resolve());
    },
    ae = (g, w, T, M = !1, O = !1, H = 0) => {
      for (let K = H; K < g.length; K++) ke(g[K], w, T, M, O);
    },
    R = (g) =>
      g.shapeFlag & 6
        ? R(g.component.subTree)
        : g.shapeFlag & 128
          ? g.suspense.next()
          : d(g.anchor || g.el);
  let N = !1;
  const D = (g, w, T) => {
      g == null
        ? w._vnode && ke(w._vnode, null, null, !0)
        : b(w._vnode || null, g, w, null, null, null, T),
        N || ((N = !0), _c(), Ho(), (N = !1)),
        (w._vnode = g);
    },
    z = { p: b, um: ke, m: Oe, r: Ge, mt: ee, mc: P, pc: V, pbc: k, n: R, o: e };
  let ue, we;
  return t && ([ue, we] = t(z)), { render: D, hydrate: ue, createApp: Bg(D, ue) };
}
function Hs({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html"))
    ? void 0
    : n;
}
function mn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Nf(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ka(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (Q(r) && Q(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let c = o[s];
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) && ((c = o[s] = Zt(o[s])), (c.el = i.el)),
        !n && c.patchFlag !== -2 && ka(i, c)),
        c.type === Yn && (c.el = i.el);
    }
}
function Zg(e) {
  const t = e.slice(),
    n = [0];
  let r, o, s, i, c;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((o = n[n.length - 1]), e[o] < u)) {
        (t[r] = o), n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        (c = (s + i) >> 1), e[n[c]] < u ? (s = c + 1) : (i = c);
      u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), (n[s] = r));
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; ) (n[s] = i), (i = t[i]);
  return n;
}
function Df(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Df(t);
}
function Fo(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].active = !1;
}
const em = Symbol.for("v-scx"),
  tm = () => Me(em);
function Ut(e, t) {
  return ps(e, null, t);
}
function nm(e, t) {
  return ps(e, null, { flush: "sync" });
}
const lo = {};
function rt(e, t, n) {
  return ps(e, t, n);
}
function ps(e, t, { immediate: n, deep: r, flush: o, once: s, onTrack: i, onTrigger: c } = _e) {
  if (t && s) {
    const _ = t;
    t = (...A) => {
      _(...A), x();
    };
  }
  const a = $e,
    u = (_) => (r === !0 ? _ : tn(_, r === !1 ? 1 : void 0));
  let l,
    f = !1,
    d = !1;
  if (
    (Ie(e)
      ? ((l = () => e.value), (f = $o(e)))
      : Tn(e)
        ? ((l = () => u(e)), (f = !0))
        : Q(e)
          ? ((d = !0),
            (f = e.some((_) => Tn(_) || $o(_))),
            (l = () =>
              e.map((_) => {
                if (Ie(_)) return _.value;
                if (Tn(_)) return u(_);
                if (Z(_)) return an(_, a, 2);
              })))
          : Z(e)
            ? t
              ? (l = () => an(e, a, 2))
              : (l = () => (h && h(), lt(e, a, 3, [p])))
            : (l = at),
    t && r)
  ) {
    const _ = l;
    l = () => tn(_());
  }
  let h,
    p = (_) => {
      h = m.onStop = () => {
        an(_, a, 4), (h = m.onStop = void 0);
      };
    },
    b;
  if (Yr)
    if (((p = at), t ? n && lt(t, a, 3, [l(), d ? [] : void 0, p]) : l(), o === "sync")) {
      const _ = tm();
      b = _.__watcherHandles || (_.__watcherHandles = []);
    } else return at;
  let E = d ? new Array(e.length).fill(lo) : lo;
  const C = () => {
    if (!(!m.active || !m.dirty))
      if (t) {
        const _ = m.run();
        (r || f || (d ? _.some((A, P) => Rt(A, E[P])) : Rt(_, E))) &&
          (h && h(), lt(t, a, 3, [_, E === lo ? void 0 : d && E[0] === lo ? [] : E, p]), (E = _));
      } else m.run();
  };
  C.allowRecurse = !!t;
  let v;
  o === "sync"
    ? (v = C)
    : o === "post"
      ? (v = () => je(C, a && a.suspense))
      : ((C.pre = !0), a && (C.id = a.uid), (v = () => cs(C)));
  const m = new ua(l, at, v),
    y = Jr(),
    x = () => {
      m.stop(), y && ca(y.effects, m);
    };
  return (
    t ? (n ? C() : (E = m.run())) : o === "post" ? je(m.run.bind(m), a && a.suspense) : m.run(),
    b && b.push(x),
    x
  );
}
function rm(e, t, n) {
  const r = this.proxy,
    o = Ae(e) ? (e.includes(".") ? jf(r, e) : () => r[e]) : e.bind(r, r);
  let s;
  Z(t) ? (s = t) : ((s = t.handler), (n = t));
  const i = Gr(this),
    c = ps(o, s.bind(r), n);
  return i(), c;
}
function jf(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
function tn(e, t = 1 / 0, n) {
  if (t <= 0 || !xe(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e;
  if ((n.add(e), t--, Ie(e))) tn(e.value, t, n);
  else if (Q(e)) for (let r = 0; r < e.length; r++) tn(e[r], t, n);
  else if (Uu(e) || Bn(e))
    e.forEach((r) => {
      tn(r, t, n);
    });
  else if (Wu(e)) {
    for (const r in e) tn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && tn(e[r], t, n);
  }
  return e;
}
const qr = (e) => e.type.__isKeepAlive,
  om = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = hn(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const v = t.default && t.default();
          return v && v.length === 1 ? v[0] : v;
        };
      const o = new Map(),
        s = new Set();
      let i = null;
      const c = n.suspense,
        {
          renderer: {
            p: a,
            m: u,
            um: l,
            o: { createElement: f },
          },
        } = r,
        d = f("div");
      (r.activate = (v, m, y, x, _) => {
        const A = v.component;
        u(v, m, y, 0, c),
          a(A.vnode, v, m, y, A, c, x, v.slotScopeIds, _),
          je(() => {
            (A.isDeactivated = !1), A.a && Kn(A.a);
            const P = v.props && v.props.onVnodeMounted;
            P && Ye(P, A.parent, v);
          }, c);
      }),
        (r.deactivate = (v) => {
          const m = v.component;
          Fo(m.m),
            Fo(m.a),
            u(v, d, null, 1, c),
            je(() => {
              m.da && Kn(m.da);
              const y = v.props && v.props.onVnodeUnmounted;
              y && Ye(y, m.parent, v), (m.isDeactivated = !0);
            }, c);
        });
      function h(v) {
        Ns(v), l(v, n, c, !0);
      }
      function p(v) {
        o.forEach((m, y) => {
          const x = xi(m.type);
          x && (!v || !v(x)) && b(y);
        });
      }
      function b(v) {
        const m = o.get(v);
        !i || !mt(m, i) ? h(m) : i && Ns(i), o.delete(v), s.delete(v);
      }
      rt(
        () => [e.include, e.exclude],
        ([v, m]) => {
          v && p((y) => mr(v, y)), m && p((y) => !mr(m, y));
        },
        { flush: "post", deep: !0 },
      );
      let E = null;
      const C = () => {
        E != null &&
          (ui(n.subTree.type)
            ? je(() => {
                o.set(E, uo(n.subTree));
              }, n.subTree.suspense)
            : o.set(E, uo(n.subTree)));
      };
      return (
        Gn(C),
        Ef(C),
        ds(() => {
          o.forEach((v) => {
            const { subTree: m, suspense: y } = n,
              x = uo(m);
            if (v.type === x.type && v.key === x.key) {
              Ns(x);
              const _ = x.component.da;
              _ && je(_, y);
              return;
            }
            h(v);
          });
        }),
        () => {
          if (((E = null), !t.default)) return null;
          const v = t.default(),
            m = v[0];
          if (v.length > 1) return (i = null), v;
          if (!Xn(m) || (!(m.shapeFlag & 4) && !(m.shapeFlag & 128))) return (i = null), m;
          let y = uo(m);
          const x = y.type,
            _ = xi(kn(y) ? y.type.__asyncResolved || {} : x),
            { include: A, exclude: P, max: S } = e;
          if ((A && (!_ || !mr(A, _))) || (P && _ && mr(P, _))) return (i = y), m;
          const k = y.key == null ? x : y.key,
            F = o.get(k);
          return (
            y.el && ((y = bt(y)), m.shapeFlag & 128 && (m.ssContent = y)),
            (E = k),
            F
              ? ((y.el = F.el),
                (y.component = F.component),
                y.transition && Nr(y, y.transition),
                (y.shapeFlag |= 512),
                s.delete(k),
                s.add(k))
              : (s.add(k), S && s.size > parseInt(S, 10) && b(s.values().next().value)),
            (y.shapeFlag |= 256),
            (i = y),
            ui(m.type) ? m : y
          );
        }
      );
    },
  },
  sm = om;
function mr(e, t) {
  return Q(e) ? e.some((n) => mr(n, t)) : Ae(e) ? e.split(",").includes(t) : Ap(e) ? e.test(t) : !1;
}
function Uf(e, t) {
  Bf(e, "a", t);
}
function Ff(e, t) {
  Bf(e, "da", t);
}
function Bf(e, t, n = $e) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((fs(t, r, n), n)) {
    let o = n.parent;
    for (; o && o.parent; ) qr(o.parent.vnode) && im(r, t, n, o), (o = o.parent);
  }
}
function im(e, t, n, r) {
  const o = fs(t, e, r, !0);
  hs(() => {
    ca(r[t], o);
  }, n);
}
function Ns(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function uo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
const Xt = Symbol("_leaveCb"),
  fo = Symbol("_enterCb");
function am() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    Gn(() => {
      e.isMounted = !0;
    }),
    ds(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const st = [Function, Array],
  Wf = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: st,
    onEnter: st,
    onAfterEnter: st,
    onEnterCancelled: st,
    onBeforeLeave: st,
    onLeave: st,
    onAfterLeave: st,
    onLeaveCancelled: st,
    onBeforeAppear: st,
    onAppear: st,
    onAfterAppear: st,
    onAppearCancelled: st,
  },
  Kf = (e) => {
    const t = e.subTree;
    return t.component ? Kf(t.component) : t;
  },
  cm = {
    name: "BaseTransition",
    props: Wf,
    setup(e, { slots: t }) {
      const n = hn(),
        r = am();
      return () => {
        const o = t.default && zf(t.default(), !0);
        if (!o || !o.length) return;
        let s = o[0];
        if (o.length > 1) {
          for (const d of o)
            if (d.type !== Be) {
              s = d;
              break;
            }
        }
        const i = ge(e),
          { mode: c } = i;
        if (r.isLeaving) return Ds(s);
        const a = Mc(s);
        if (!a) return Ds(s);
        let u = vi(a, i, r, n, (d) => (u = d));
        Nr(a, u);
        const l = n.subTree,
          f = l && Mc(l);
        if (f && f.type !== Be && !mt(a, f) && Kf(n).type !== Be) {
          const d = vi(f, i, r, n);
          if ((Nr(f, d), c === "out-in" && a.type !== Be))
            return (
              (r.isLeaving = !0),
              (d.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && ((n.effect.dirty = !0), n.update());
              }),
              Ds(s)
            );
          c === "in-out" &&
            a.type !== Be &&
            (d.delayLeave = (h, p, b) => {
              const E = Vf(r, f);
              (E[String(f.key)] = f),
                (h[Xt] = () => {
                  p(), (h[Xt] = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = b);
            });
        }
        return s;
      };
    },
  },
  lm = cm;
function Vf(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function vi(e, t, n, r, o) {
  const {
      appear: s,
      mode: i,
      persisted: c = !1,
      onBeforeEnter: a,
      onEnter: u,
      onAfterEnter: l,
      onEnterCancelled: f,
      onBeforeLeave: d,
      onLeave: h,
      onAfterLeave: p,
      onLeaveCancelled: b,
      onBeforeAppear: E,
      onAppear: C,
      onAfterAppear: v,
      onAppearCancelled: m,
    } = t,
    y = String(e.key),
    x = Vf(n, e),
    _ = (S, k) => {
      S && lt(S, r, 9, k);
    },
    A = (S, k) => {
      const F = k[1];
      _(S, k), Q(S) ? S.every((I) => I.length <= 1) && F() : S.length <= 1 && F();
    },
    P = {
      mode: i,
      persisted: c,
      beforeEnter(S) {
        let k = a;
        if (!n.isMounted)
          if (s) k = E || a;
          else return;
        S[Xt] && S[Xt](!0);
        const F = x[y];
        F && mt(e, F) && F.el[Xt] && F.el[Xt](), _(k, [S]);
      },
      enter(S) {
        let k = u,
          F = l,
          I = f;
        if (!n.isMounted)
          if (s) (k = C || u), (F = v || l), (I = m || f);
          else return;
        let W = !1;
        const ee = (S[fo] = (te) => {
          W ||
            ((W = !0),
            te ? _(I, [S]) : _(F, [S]),
            P.delayedLeave && P.delayedLeave(),
            (S[fo] = void 0));
        });
        k ? A(k, [S, ee]) : ee();
      },
      leave(S, k) {
        const F = String(e.key);
        if ((S[fo] && S[fo](!0), n.isUnmounting)) return k();
        _(d, [S]);
        let I = !1;
        const W = (S[Xt] = (ee) => {
          I ||
            ((I = !0),
            k(),
            ee ? _(b, [S]) : _(p, [S]),
            (S[Xt] = void 0),
            x[F] === e && delete x[F]);
        });
        (x[F] = e), h ? A(h, [S, W]) : W();
      },
      clone(S) {
        const k = vi(S, t, n, r, o);
        return o && o(k), k;
      },
    };
  return P;
}
function Ds(e) {
  if (qr(e)) return (e = bt(e)), (e.children = null), e;
}
function Mc(e) {
  if (!qr(e)) return e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Z(n.default)) return n.default();
  }
}
function Nr(e, t) {
  e.shapeFlag & 6 && e.component
    ? Nr(e.component.subTree, t)
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function zf(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Re
      ? (i.patchFlag & 128 && o++, (r = r.concat(zf(i.children, t, c))))
      : (t || i.type !== Be) && r.push(c != null ? bt(i, { key: c }) : i);
  }
  if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
const um = (e) => e.__isTeleport,
  _r = (e) => e && (e.disabled || e.disabled === ""),
  Lc = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  $c = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  bi = (e, t) => {
    const n = e && e.to;
    return Ae(n) ? (t ? t(n) : null) : n;
  },
  fm = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, o, s, i, c, a, u) {
      const {
          mc: l,
          pc: f,
          pbc: d,
          o: { insert: h, querySelector: p, createText: b, createComment: E },
        } = u,
        C = _r(t.props);
      let { shapeFlag: v, children: m, dynamicChildren: y } = t;
      if (e == null) {
        const x = (t.el = b("")),
          _ = (t.anchor = b(""));
        h(x, n, r), h(_, n, r);
        const A = (t.target = bi(t.props, p)),
          P = (t.targetAnchor = b(""));
        A &&
          (h(P, A),
          i === "svg" || Lc(A) ? (i = "svg") : (i === "mathml" || $c(A)) && (i = "mathml"));
        const S = (k, F) => {
          v & 16 && l(m, k, F, o, s, i, c, a);
        };
        C ? S(n, _) : A && S(A, P);
      } else {
        t.el = e.el;
        const x = (t.anchor = e.anchor),
          _ = (t.target = e.target),
          A = (t.targetAnchor = e.targetAnchor),
          P = _r(e.props),
          S = P ? n : _,
          k = P ? x : A;
        if (
          (i === "svg" || Lc(_) ? (i = "svg") : (i === "mathml" || $c(_)) && (i = "mathml"),
          y
            ? (d(e.dynamicChildren, y, S, o, s, i, c), ka(e, t, !0))
            : a || f(e, t, S, k, o, s, i, c, !1),
          C)
        )
          P
            ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to)
            : ho(t, n, x, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const F = (t.target = bi(t.props, p));
          F && ho(t, F, null, u, 0);
        } else P && ho(t, _, A, u, 1);
      }
      Jf(t);
    },
    remove(e, t, n, r, { um: o, o: { remove: s } }, i) {
      const { shapeFlag: c, children: a, anchor: u, targetAnchor: l, target: f, props: d } = e;
      if ((f && s(l), i && s(u), c & 16)) {
        const h = i || !_r(d);
        for (let p = 0; p < a.length; p++) {
          const b = a[p];
          o(b, t, n, h, !!b.dynamicChildren);
        }
      }
    },
    move: ho,
    hydrate: dm,
  };
function ho(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: c, shapeFlag: a, children: u, props: l } = e,
    f = s === 2;
  if ((f && r(i, t, n), (!f || _r(l)) && a & 16))
    for (let d = 0; d < u.length; d++) o(u[d], t, n, 2);
  f && r(c, t, n);
}
function dm(e, t, n, r, o, s, { o: { nextSibling: i, parentNode: c, querySelector: a } }, u) {
  const l = (t.target = bi(t.props, a));
  if (l) {
    const f = l._lpa || l.firstChild;
    if (t.shapeFlag & 16)
      if (_r(t.props)) (t.anchor = u(i(e), t, c(e), n, r, o, s)), (t.targetAnchor = f);
      else {
        t.anchor = i(e);
        let d = f;
        for (; d; )
          if (((d = i(d)), d && d.nodeType === 8 && d.data === "teleport anchor")) {
            (t.targetAnchor = d), (l._lpa = t.targetAnchor && i(t.targetAnchor));
            break;
          }
        u(f, t, l, n, r, o, s);
      }
    Jf(t);
  }
  return t.anchor && i(t.anchor);
}
const GT = fm;
function Jf(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), (n = n.nextSibling);
    t.ut();
  }
}
const Re = Symbol.for("v-fgt"),
  Yn = Symbol.for("v-txt"),
  Be = Symbol.for("v-cmt"),
  xr = Symbol.for("v-stc"),
  Er = [];
let ct = null;
function oe(e = !1) {
  Er.push((ct = e ? null : []));
}
function qf() {
  Er.pop(), (ct = Er[Er.length - 1] || null);
}
let Qn = 1;
function Hc(e) {
  Qn += e;
}
function Gf(e) {
  return (e.dynamicChildren = Qn > 0 ? ct || Fn : null), qf(), Qn > 0 && ct && ct.push(e), e;
}
function Ce(e, t, n, r, o, s) {
  return Gf(ut(e, t, n, r, o, s, !0));
}
function Ve(e, t, n, r, o) {
  return Gf(me(e, t, n, r, o, !0));
}
function Xn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function mt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Yf = ({ key: e }) => e ?? null,
  xo = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null ? (Ae(e) || Ie(e) || Z(e) ? { i: He, r: e, k: t, f: !!n } : e) : null
  );
function ut(e, t = null, n = null, r = 0, o = null, s = e === Re ? 0 : 1, i = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Yf(t),
    ref: t && xo(t),
    scopeId: us,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: He,
  };
  return (
    c ? (Aa(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= Ae(n) ? 8 : 16),
    Qn > 0 && !i && ct && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && ct.push(a),
    a
  );
}
const me = hm;
function hm(e, t = null, n = null, r = 0, o = null, s = !1) {
  if (((!e || e === bf) && (e = Be), Xn(e))) {
    const c = bt(e, t, !0);
    return (
      n && Aa(c, n),
      Qn > 0 && !s && ct && (c.shapeFlag & 6 ? (ct[ct.indexOf(e)] = c) : ct.push(c)),
      (c.patchFlag = -2),
      c
    );
  }
  if ((wm(e) && (e = e.__vccOpts), t)) {
    t = Qf(t);
    let { class: c, style: a } = t;
    c && !Ae(c) && (t.class = pt(c)),
      xe(a) && (cf(a) && !Q(a) && (a = Le({}, a)), (t.style = nr(a)));
  }
  const i = Ae(e) ? 1 : ui(e) ? 128 : um(e) ? 64 : xe(e) ? 4 : Z(e) ? 2 : 0;
  return ut(e, t, n, r, o, i, s, !0);
}
function Qf(e) {
  return e ? (cf(e) || If(e) ? Le({}, e) : e) : null;
}
function bt(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: c, transition: a } = e,
    u = t ? Rn(o || {}, t) : o,
    l = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && Yf(u),
      ref: t && t.ref ? (n && s ? (Q(s) ? s.concat(xo(t)) : [s, xo(t)]) : xo(t)) : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: c,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Re ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && bt(e.ssContent),
      ssFallback: e.ssFallback && bt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return a && r && Nr(l, a.clone(l)), l;
}
function Bo(e = " ", t = 0) {
  return me(Yn, null, e, t);
}
function Nc(e, t) {
  const n = me(xr, null, e);
  return (n.staticCount = t), n;
}
function Gt(e = "", t = !1) {
  return t ? (oe(), Ve(Be, null, e)) : me(Be, null, e);
}
function it(e) {
  return e == null || typeof e == "boolean"
    ? me(Be)
    : Q(e)
      ? me(Re, null, e.slice())
      : typeof e == "object"
        ? Zt(e)
        : me(Yn, null, String(e));
}
function Zt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : bt(e);
}
function Aa(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (Q(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Aa(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !If(t)
        ? (t._ctx = He)
        : o === 3 && He && (He.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    Z(t)
      ? ((t = { default: t, _ctx: He }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Bo(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Rn(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class") t.class !== r.class && (t.class = pt([t.class, r.class]));
      else if (o === "style") t.style = nr([t.style, r.style]);
      else if (Vr(o)) {
        const s = t[o],
          i = r[o];
        i && s !== i && !(Q(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Ye(e, t, n, r = null) {
  lt(e, t, 7, [n, r]);
}
const pm = kf();
let gm = 0;
function mm(e, t, n) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || pm,
    s = {
      uid: gm++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Gu(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Of(r, o),
      emitsOptions: yf(r, o),
      emit: null,
      emitted: null,
      propsDefaults: _e,
      inheritAttrs: r.inheritAttrs,
      ctx: _e,
      data: _e,
      props: _e,
      attrs: _e,
      slots: _e,
      refs: _e,
      setupState: _e,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (s.ctx = { _: s }), (s.root = t ? t.root : s), (s.emit = mg.bind(null, s)), e.ce && e.ce(s), s
  );
}
let $e = null;
const hn = () => $e || He;
let Wo, wi;
{
  const e = zu(),
    t = (n, r) => {
      let o;
      return (
        (o = e[n]) || (o = e[n] = []),
        o.push(r),
        (s) => {
          o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
        }
      );
    };
  (Wo = t("__VUE_INSTANCE_SETTERS__", (n) => ($e = n))),
    (wi = t("__VUE_SSR_SETTERS__", (n) => (Yr = n)));
}
const Gr = (e) => {
    const t = $e;
    return (
      Wo(e),
      e.scope.on(),
      () => {
        e.scope.off(), Wo(t);
      }
    );
  },
  Dc = () => {
    $e && $e.scope.off(), Wo(null);
  };
function Xf(e) {
  return e.vnode.shapeFlag & 4;
}
let Yr = !1;
function ym(e, t = !1) {
  t && wi(t);
  const { props: n, children: r } = e.vnode,
    o = Xf(e);
  Wg(e, n, o, t), zg(e, r);
  const s = o ? vm(e, t) : void 0;
  return t && wi(!1), s;
}
function vm(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Mg));
  const { setup: r } = n;
  if (r) {
    const o = (e.setupContext = r.length > 1 ? ed(e) : null),
      s = Gr(e);
    un();
    const i = an(r, e, 0, [e.props, o]);
    if ((fn(), s(), Fu(i))) {
      if ((i.then(Dc, Dc), t))
        return i
          .then((c) => {
            _i(e, c, t);
          })
          .catch((c) => {
            rr(c, e, 0);
          });
      e.asyncDep = i;
    } else _i(e, i, t);
  } else Zf(e, t);
}
function _i(e, t, n) {
  Z(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : xe(t) && (e.setupState = ff(t)),
    Zf(e, n);
}
let jc;
function Zf(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && jc && !r.render) {
      const o = r.template || Sa(e).template;
      if (o) {
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config,
          { delimiters: c, compilerOptions: a } = r,
          u = Le(Le({ isCustomElement: s, delimiters: c }, i), a);
        r.render = jc(o, u);
      }
    }
    e.render = r.render || at;
  }
  {
    const o = Gr(e);
    un();
    try {
      Hg(e);
    } finally {
      fn(), o();
    }
  }
}
const bm = {
  get(e, t) {
    return Xe(e, "get", ""), e[t];
  },
};
function ed(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, bm), slots: e.slots, emit: e.emit, expose: t };
}
function gs(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(ff(ma(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in wr) return wr[n](e);
          },
          has(t, n) {
            return n in t || n in wr;
          },
        }))
    : e.proxy;
}
function xi(e, t = !0) {
  return Z(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function wm(e) {
  return Z(e) && "__vccOpts" in e;
}
const he = (e, t) => sg(e, t, Yr);
function YT(e, t, n = _e) {
  const r = hn(),
    o = vt(t),
    s = ln(t),
    i = lg((a, u) => {
      let l;
      return (
        nm(() => {
          const f = e[t];
          Rt(l, f) && ((l = f), u());
        }),
        {
          get() {
            return a(), n.get ? n.get(l) : l;
          },
          set(f) {
            const d = r.vnode.props;
            !(
              d &&
              (t in d || o in d || s in d) &&
              (`onUpdate:${t}` in d || `onUpdate:${o}` in d || `onUpdate:${s}` in d)
            ) &&
              Rt(f, l) &&
              ((l = f), u()),
              r.emit(`update:${t}`, n.set ? n.set(f) : f);
          },
        }
      );
    }),
    c = `${t}Modifiers`;
  return (
    (i[Symbol.iterator] = () => {
      let a = 0;
      return {
        next() {
          return a < 2 ? { value: a++ ? e[c] || {} : i, done: !1 } : { done: !0 };
        },
      };
    }),
    i
  );
}
function Ue(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? xe(t) && !Q(t)
      ? Xn(t)
        ? me(e, null, [t])
        : me(e, t)
      : me(e, null, t)
    : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && Xn(n) && (n = [n]),
      me(e, t, n));
}
const td = "3.4.29";
/**
 * @vue/runtime-dom v3.4.29
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const _m = "http://www.w3.org/2000/svg",
  xm = "http://www.w3.org/1998/Math/MathML",
  Lt = typeof document < "u" ? document : null,
  Uc = Lt && Lt.createElement("template"),
  Em = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o =
        t === "svg"
          ? Lt.createElementNS(_m, e)
          : t === "mathml"
            ? Lt.createElementNS(xm, e)
            : n
              ? Lt.createElement(e, { is: n })
              : Lt.createElement(e);
      return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
    },
    createText: (e) => Lt.createTextNode(e),
    createComment: (e) => Lt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Lt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling))
        for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); );
      else {
        Uc.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
        const c = Uc.content;
        if (r === "svg" || r === "mathml") {
          const a = c.firstChild;
          for (; a.firstChild; ) c.appendChild(a.firstChild);
          c.removeChild(a);
        }
        t.insertBefore(c, n);
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
    },
  },
  Kt = "transition",
  cr = "animation",
  Dr = Symbol("_vtc"),
  ms = (e, { slots: t }) => Ue(lm, Sm(e), t);
ms.displayName = "Transition";
const nd = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
ms.props = Le({}, Wf, nd);
const yn = (e, t = []) => {
    Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Fc = (e) => (e ? (Q(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Sm(e) {
  const t = {};
  for (const I in e) I in nd || (t[I] = e[I]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: o,
      enterFromClass: s = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: c = `${n}-enter-to`,
      appearFromClass: a = s,
      appearActiveClass: u = i,
      appearToClass: l = c,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: h = `${n}-leave-to`,
    } = e,
    p = Cm(o),
    b = p && p[0],
    E = p && p[1],
    {
      onBeforeEnter: C,
      onEnter: v,
      onEnterCancelled: m,
      onLeave: y,
      onLeaveCancelled: x,
      onBeforeAppear: _ = C,
      onAppear: A = v,
      onAppearCancelled: P = m,
    } = t,
    S = (I, W, ee) => {
      vn(I, W ? l : c), vn(I, W ? u : i), ee && ee();
    },
    k = (I, W) => {
      (I._isLeaving = !1), vn(I, f), vn(I, h), vn(I, d), W && W();
    },
    F = (I) => (W, ee) => {
      const te = I ? A : v,
        j = () => S(W, I, ee);
      yn(te, [W, j]),
        Bc(() => {
          vn(W, I ? a : s), Vt(W, I ? l : c), Fc(te) || Wc(W, r, b, j);
        });
    };
  return Le(t, {
    onBeforeEnter(I) {
      yn(C, [I]), Vt(I, s), Vt(I, i);
    },
    onBeforeAppear(I) {
      yn(_, [I]), Vt(I, a), Vt(I, u);
    },
    onEnter: F(!1),
    onAppear: F(!0),
    onLeave(I, W) {
      I._isLeaving = !0;
      const ee = () => k(I, W);
      Vt(I, f),
        Vt(I, d),
        Am(),
        Bc(() => {
          I._isLeaving && (vn(I, f), Vt(I, h), Fc(y) || Wc(I, r, E, ee));
        }),
        yn(y, [I, ee]);
    },
    onEnterCancelled(I) {
      S(I, !1), yn(m, [I]);
    },
    onAppearCancelled(I) {
      S(I, !0), yn(P, [I]);
    },
    onLeaveCancelled(I) {
      k(I), yn(x, [I]);
    },
  });
}
function Cm(e) {
  if (e == null) return null;
  if (xe(e)) return [js(e.enter), js(e.leave)];
  {
    const t = js(e);
    return [t, t];
  }
}
function js(e) {
  return Vu(e);
}
function Vt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Dr] || (e[Dr] = new Set())).add(t);
}
function vn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Dr];
  n && (n.delete(t), n.size || (e[Dr] = void 0));
}
function Bc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Tm = 0;
function Wc(e, t, n, r) {
  const o = (e._endId = ++Tm),
    s = () => {
      o === e._endId && r();
    };
  if (n) return setTimeout(s, n);
  const { type: i, timeout: c, propCount: a } = km(e, t);
  if (!i) return r();
  const u = i + "end";
  let l = 0;
  const f = () => {
      e.removeEventListener(u, d), s();
    },
    d = (h) => {
      h.target === e && ++l >= a && f();
    };
  setTimeout(() => {
    l < a && f();
  }, c + 1),
    e.addEventListener(u, d);
}
function km(e, t) {
  const n = window.getComputedStyle(e),
    r = (p) => (n[p] || "").split(", "),
    o = r(`${Kt}Delay`),
    s = r(`${Kt}Duration`),
    i = Kc(o, s),
    c = r(`${cr}Delay`),
    a = r(`${cr}Duration`),
    u = Kc(c, a);
  let l = null,
    f = 0,
    d = 0;
  t === Kt
    ? i > 0 && ((l = Kt), (f = i), (d = s.length))
    : t === cr
      ? u > 0 && ((l = cr), (f = u), (d = a.length))
      : ((f = Math.max(i, u)),
        (l = f > 0 ? (i > u ? Kt : cr) : null),
        (d = l ? (l === Kt ? s.length : a.length) : 0));
  const h = l === Kt && /\b(transform|all)(,|$)/.test(r(`${Kt}Property`).toString());
  return { type: l, timeout: f, propCount: d, hasTransform: h };
}
function Kc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Vc(n) + Vc(e[r])));
}
function Vc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Am() {
  return document.body.offsetHeight;
}
function Rm(e, t, n) {
  const r = e[Dr];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : (e.className = t);
}
const Ko = Symbol("_vod"),
  rd = Symbol("_vsh"),
  QT = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[Ko] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : lr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), lr(e, !0), r.enter(e))
            : r.leave(e, () => {
                lr(e, !1);
              })
          : lr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      lr(e, t);
    },
  };
function lr(e, t) {
  (e.style.display = t ? e[Ko] : "none"), (e[rd] = !t);
}
const Im = Symbol(""),
  Pm = /(^|;)\s*display\s*:/;
function Om(e, t, n) {
  const r = e.style,
    o = Ae(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (Ae(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && Eo(r, c, "");
        }
      else for (const i in t) n[i] == null && Eo(r, i, "");
    for (const i in n) i === "display" && (s = !0), Eo(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[Im];
      i && (n += ";" + i), (r.cssText = n), (s = Pm.test(n));
    }
  } else t && e.removeAttribute("style");
  Ko in e && ((e[Ko] = s ? r.display : ""), e[rd] && (r.display = "none"));
}
const zc = /\s*!important$/;
function Eo(e, t, n) {
  if (Q(n)) n.forEach((r) => Eo(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = Mm(e, t);
    zc.test(n) ? e.setProperty(ln(r), n.replace(zc, ""), "important") : (e[r] = n);
  }
}
const Jc = ["Webkit", "Moz", "ms"],
  Us = {};
function Mm(e, t) {
  const n = Us[t];
  if (n) return n;
  let r = vt(t);
  if (r !== "filter" && r in e) return (Us[t] = r);
  r = ss(r);
  for (let o = 0; o < Jc.length; o++) {
    const s = Jc[o] + r;
    if (s in e) return (Us[t] = s);
  }
  return t;
}
const qc = "http://www.w3.org/1999/xlink";
function Gc(e, t, n, r, o, s = Np(t)) {
  r && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(qc, t.slice(6, t.length))
      : e.setAttributeNS(qc, t, n)
    : n == null || (s && !Ju(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, s ? "" : String(n));
}
function Lm(e, t, n, r, o, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, o, s), (e[t] = n ?? "");
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
    const u = c === "OPTION" ? e.getAttribute("value") || "" : e.value,
      l = n == null ? "" : String(n);
    (u !== l || !("_value" in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean"
      ? (n = Ju(n))
      : n == null && u === "string"
        ? ((n = ""), (a = !0))
        : u === "number" && ((n = 0), (a = !0));
  }
  try {
    e[t] = n;
  } catch {}
  a && e.removeAttribute(t);
}
function Hn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function $m(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Yc = Symbol("_vei");
function Hm(e, t, n, r, o = null) {
  const s = e[Yc] || (e[Yc] = {}),
    i = s[t];
  if (r && i) i.value = r;
  else {
    const [c, a] = Nm(t);
    if (r) {
      const u = (s[t] = Um(r, o));
      Hn(e, c, u, a);
    } else i && ($m(e, c, i, a), (s[t] = void 0));
  }
}
const Qc = /(?:Once|Passive|Capture)$/;
function Nm(e) {
  let t;
  if (Qc.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Qc)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : ln(e.slice(2)), t];
}
let Fs = 0;
const Dm = Promise.resolve(),
  jm = () => Fs || (Dm.then(() => (Fs = 0)), (Fs = Date.now()));
function Um(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    lt(Fm(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = jm()), n;
}
function Fm(e, t) {
  if (Q(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    );
  } else return t;
}
const Xc = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Bm = (e, t, n, r, o, s, i, c, a) => {
    const u = o === "svg";
    t === "class"
      ? Rm(e, r, u)
      : t === "style"
        ? Om(e, n, r)
        : Vr(t)
          ? aa(t) || Hm(e, t, n, r, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : Wm(e, t, r, u)
              )
            ? (Lm(e, t, r, s, i, c, a),
              (t === "value" || t === "checked" || t === "selected") &&
                Gc(e, t, r, u, i, t !== "value"))
            : (t === "true-value" ? (e._trueValue = r) : t === "false-value" && (e._falseValue = r),
              Gc(e, t, r, u));
  };
function Wm(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || (t in e && Xc(t) && Z(n)));
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return !1;
  }
  return Xc(t) && Ae(n) ? !1 : t in e;
}
const Zc = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => Kn(t, n) : t;
};
function Km(e) {
  e.target.composing = !0;
}
function el(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Bs = Symbol("_assign"),
  XT = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
      e[Bs] = Zc(o);
      const s = r || (o.props && o.props.type === "number");
      Hn(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let c = e.value;
        n && (c = c.trim()), s && (c = ri(c)), e[Bs](c);
      }),
        n &&
          Hn(e, "change", () => {
            e.value = e.value.trim();
          }),
        t || (Hn(e, "compositionstart", Km), Hn(e, "compositionend", el), Hn(e, "change", el));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
      if (((e[Bs] = Zc(i)), e.composing)) return;
      const c = (s || e.type === "number") && !/^0\d/.test(e.value) ? ri(e.value) : e.value,
        a = t ?? "";
      c !== a &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((r && t === n) || (o && e.value.trim() === a))) ||
          (e.value = a));
    },
  },
  Vm = ["ctrl", "shift", "alt", "meta"],
  zm = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Vm.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  ZT = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (o, ...s) => {
        for (let i = 0; i < t.length; i++) {
          const c = zm[t[i]];
          if (c && c(o, t)) return;
        }
        return e(o, ...s);
      })
    );
  },
  Jm = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  ek = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (o) => {
        if (!("key" in o)) return;
        const s = ln(o.key);
        if (t.some((i) => i === s || Jm[i] === s)) return e(o);
      })
    );
  },
  od = Le({ patchProp: Bm }, Em);
let Sr,
  tl = !1;
function qm() {
  return Sr || (Sr = Qg(od));
}
function Gm() {
  return (Sr = tl ? Sr : Xg(od)), (tl = !0), Sr;
}
const Ym = (...e) => {
    const t = qm().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const o = id(r);
        if (!o) return;
        const s = t._component;
        !Z(s) && !s.render && !s.template && (s.template = o.innerHTML), (o.innerHTML = "");
        const i = n(o, !1, sd(o));
        return (
          o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
          i
        );
      }),
      t
    );
  },
  Qm = (...e) => {
    const t = Gm().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const o = id(r);
        if (o) return n(o, !0, sd(o));
      }),
      t
    );
  };
function sd(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function id(e) {
  return Ae(e) ? document.querySelector(e) : e;
}
const Xm =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Zm =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  ey = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function ty(e, t) {
  if (e === "__proto__" || (e === "constructor" && t && typeof t == "object" && "prototype" in t)) {
    ny(e);
    return;
  }
  return t;
}
function ny(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function Vo(e, t = {}) {
  if (typeof e != "string") return e;
  const n = e.trim();
  if (e[0] === '"' && e.endsWith('"') && !e.includes("\\")) return n.slice(1, -1);
  if (n.length <= 9) {
    const r = n.toLowerCase();
    if (r === "true") return !0;
    if (r === "false") return !1;
    if (r === "undefined") return;
    if (r === "null") return null;
    if (r === "nan") return Number.NaN;
    if (r === "infinity") return Number.POSITIVE_INFINITY;
    if (r === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!ey.test(e)) {
    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e;
  }
  try {
    if (Xm.test(e) || Zm.test(e)) {
      if (t.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, ty);
    }
    return JSON.parse(e);
  } catch (r) {
    if (t.strict) throw r;
    return e;
  }
}
const ad = /#/g,
  cd = /&/g,
  ld = /\//g,
  ry = /=/g,
  oy = /\?/g,
  ys = /\+/g,
  sy = /%5e/gi,
  iy = /%60/gi,
  ay = /%7c/gi,
  cy = /%20/gi,
  ly = /%252f/gi;
function ud(e) {
  return encodeURI("" + e).replace(ay, "|");
}
function Ei(e) {
  return ud(typeof e == "string" ? e : JSON.stringify(e))
    .replace(ys, "%2B")
    .replace(cy, "+")
    .replace(ad, "%23")
    .replace(cd, "%26")
    .replace(iy, "`")
    .replace(sy, "^")
    .replace(ld, "%2F");
}
function Ws(e) {
  return Ei(e).replace(ry, "%3D");
}
function uy(e) {
  return ud(e)
    .replace(ad, "%23")
    .replace(oy, "%3F")
    .replace(ly, "%2F")
    .replace(cd, "%26")
    .replace(ys, "%2B");
}
function tk(e) {
  return uy(e).replace(ld, "%2F");
}
function fd(e = "") {
  try {
    return decodeURIComponent("" + e);
  } catch {
    return "" + e;
  }
}
function fy(e) {
  return fd(e.replace(ys, " "));
}
function dy(e) {
  return fd(e.replace(ys, " "));
}
function hy(e = "") {
  const t = {};
  e[0] === "?" && (e = e.slice(1));
  for (const n of e.split("&")) {
    const r = n.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2) continue;
    const o = fy(r[1]);
    if (o === "__proto__" || o === "constructor") continue;
    const s = dy(r[2] || "");
    t[o] === void 0 ? (t[o] = s) : Array.isArray(t[o]) ? t[o].push(s) : (t[o] = [t[o], s]);
  }
  return t;
}
function py(e, t) {
  return (
    (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t
      ? Array.isArray(t)
        ? t.map((n) => `${Ws(e)}=${Ei(n)}`).join("&")
        : `${Ws(e)}=${Ei(t)}`
      : Ws(e)
  );
}
function gy(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => py(t, e[t]))
    .filter(Boolean)
    .join("&");
}
const my = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  yy = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  vy = /^([/\\]\s*){2,}[^/\\]/,
  by = /^\.?\//;
function dd(e, t = {}) {
  return (
    typeof t == "boolean" && (t = { acceptRelative: t }),
    t.strict ? my.test(e) : yy.test(e) || (t.acceptRelative ? vy.test(e) : !1)
  );
}
function wy(e = "", t) {
  return e.endsWith("/");
}
function _y(e = "", t) {
  return (wy(e) ? e.slice(0, -1) : e) || "/";
}
function xy(e = "", t) {
  return e.endsWith("/") ? e : e + "/";
}
function Ey(e = "") {
  return e.startsWith("/");
}
function nk(e = "") {
  return Ey(e) ? e : "/" + e;
}
function Sy(e, t) {
  if (Ty(t) || dd(e)) return e;
  const n = _y(t);
  return e.startsWith(n) ? e : Ay(n, e);
}
function Cy(e, t) {
  const n = Ry(e),
    r = { ...hy(n.search), ...t };
  return (n.search = gy(r)), Iy(n);
}
function Ty(e) {
  return !e || e === "/";
}
function ky(e) {
  return e && e !== "/";
}
function Ay(e, ...t) {
  let n = e || "";
  for (const r of t.filter((o) => ky(o)))
    if (n) {
      const o = r.replace(by, "");
      n = xy(n) + o;
    } else n = r;
  return n;
}
const hd = Symbol.for("ufo:protocolRelative");
function Ry(e = "", t) {
  const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (n) {
    const [, f, d = ""] = n;
    return {
      protocol: f.toLowerCase(),
      pathname: d,
      href: f + d,
      auth: "",
      host: "",
      search: "",
      hash: "",
    };
  }
  if (!dd(e, { acceptRelative: !0 })) return nl(e);
  const [, r = "", o, s = ""] =
    e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, i = "", c = ""] = s.match(/([^#/?]*)(.*)?/) || [];
  r === "file:" && (c = c.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: a, search: u, hash: l } = nl(c);
  return {
    protocol: r.toLowerCase(),
    auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
    host: i,
    pathname: a,
    search: u,
    hash: l,
    [hd]: !r,
  };
}
function nl(e = "") {
  const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t, search: n, hash: r };
}
function Iy(e) {
  const t = e.pathname || "",
    n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
    r = e.hash || "",
    o = e.auth ? e.auth + "@" : "",
    s = e.host || "";
  return (e.protocol || e[hd] ? (e.protocol || "") + "//" : "") + o + s + t + n + r;
}
class Py extends Error {
  constructor(t, n) {
    super(t, n),
      (this.name = "FetchError"),
      n != null && n.cause && !this.cause && (this.cause = n.cause);
  }
}
function Oy(e) {
  var a, u, l, f, d;
  const t =
      ((a = e.error) == null ? void 0 : a.message) ||
      ((u = e.error) == null ? void 0 : u.toString()) ||
      "",
    n =
      ((l = e.request) == null ? void 0 : l.method) ||
      ((f = e.options) == null ? void 0 : f.method) ||
      "GET",
    r = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/",
    o = `[${n}] ${JSON.stringify(r)}`,
    s = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>",
    i = `${o}: ${s}${t ? ` ${t}` : ""}`,
    c = new Py(i, e.error ? { cause: e.error } : void 0);
  for (const h of ["request", "options", "response"])
    Object.defineProperty(c, h, {
      get() {
        return e[h];
      },
    });
  for (const [h, p] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"],
  ])
    Object.defineProperty(c, h, {
      get() {
        return e.response && e.response[p];
      },
    });
  return c;
}
const My = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function rl(e = "GET") {
  return My.has(e.toUpperCase());
}
function Ly(e) {
  if (e === void 0) return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean" || t === null
    ? !0
    : t !== "object"
      ? !1
      : Array.isArray(e)
        ? !0
        : e.buffer
          ? !1
          : (e.constructor && e.constructor.name === "Object") || typeof e.toJSON == "function";
}
const $y = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
  Hy = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Ny(e = "") {
  if (!e) return "json";
  const t = e.split(";").shift() || "";
  return Hy.test(t) ? "json" : $y.has(t) || t.startsWith("text/") ? "text" : "blob";
}
function Dy(e, t, n = globalThis.Headers) {
  const r = { ...t, ...e };
  if (
    (t != null &&
      t.params &&
      e != null &&
      e.params &&
      (r.params = { ...(t == null ? void 0 : t.params), ...(e == null ? void 0 : e.params) }),
    t != null &&
      t.query &&
      e != null &&
      e.query &&
      (r.query = { ...(t == null ? void 0 : t.query), ...(e == null ? void 0 : e.query) }),
    t != null && t.headers && e != null && e.headers)
  ) {
    r.headers = new n((t == null ? void 0 : t.headers) || {});
    for (const [o, s] of new n((e == null ? void 0 : e.headers) || {})) r.headers.set(o, s);
  }
  return r;
}
const jy = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  Uy = new Set([101, 204, 205, 304]);
function pd(e = {}) {
  const {
    fetch: t = globalThis.fetch,
    Headers: n = globalThis.Headers,
    AbortController: r = globalThis.AbortController,
  } = e;
  async function o(c) {
    const a = (c.error && c.error.name === "AbortError" && !c.options.timeout) || !1;
    if (c.options.retry !== !1 && !a) {
      let l;
      typeof c.options.retry == "number"
        ? (l = c.options.retry)
        : (l = rl(c.options.method) ? 0 : 1);
      const f = (c.response && c.response.status) || 500;
      if (
        l > 0 &&
        (Array.isArray(c.options.retryStatusCodes)
          ? c.options.retryStatusCodes.includes(f)
          : jy.has(f))
      ) {
        const d = c.options.retryDelay || 0;
        return (
          d > 0 && (await new Promise((h) => setTimeout(h, d))),
          s(c.request, { ...c.options, retry: l - 1 })
        );
      }
    }
    const u = Oy(c);
    throw (Error.captureStackTrace && Error.captureStackTrace(u, s), u);
  }
  const s = async function (a, u = {}) {
      var h;
      const l = { request: a, options: Dy(u, e.defaults, n), response: void 0, error: void 0 };
      (l.options.method = (h = l.options.method) == null ? void 0 : h.toUpperCase()),
        l.options.onRequest && (await l.options.onRequest(l)),
        typeof l.request == "string" &&
          (l.options.baseURL && (l.request = Sy(l.request, l.options.baseURL)),
          (l.options.query || l.options.params) &&
            (l.request = Cy(l.request, { ...l.options.params, ...l.options.query }))),
        l.options.body &&
          rl(l.options.method) &&
          (Ly(l.options.body)
            ? ((l.options.body =
                typeof l.options.body == "string"
                  ? l.options.body
                  : JSON.stringify(l.options.body)),
              (l.options.headers = new n(l.options.headers || {})),
              l.options.headers.has("content-type") ||
                l.options.headers.set("content-type", "application/json"),
              l.options.headers.has("accept") ||
                l.options.headers.set("accept", "application/json"))
            : (("pipeTo" in l.options.body && typeof l.options.body.pipeTo == "function") ||
                typeof l.options.body.pipe == "function") &&
              ("duplex" in l.options || (l.options.duplex = "half")));
      let f;
      if (!l.options.signal && l.options.timeout) {
        const p = new r();
        (f = setTimeout(() => p.abort(), l.options.timeout)), (l.options.signal = p.signal);
      }
      try {
        l.response = await t(l.request, l.options);
      } catch (p) {
        return (
          (l.error = p), l.options.onRequestError && (await l.options.onRequestError(l)), await o(l)
        );
      } finally {
        f && clearTimeout(f);
      }
      if (l.response.body && !Uy.has(l.response.status) && l.options.method !== "HEAD") {
        const p =
          (l.options.parseResponse ? "json" : l.options.responseType) ||
          Ny(l.response.headers.get("content-type") || "");
        switch (p) {
          case "json": {
            const b = await l.response.text(),
              E = l.options.parseResponse || Vo;
            l.response._data = E(b);
            break;
          }
          case "stream": {
            l.response._data = l.response.body;
            break;
          }
          default:
            l.response._data = await l.response[p]();
        }
      }
      return (
        l.options.onResponse && (await l.options.onResponse(l)),
        !l.options.ignoreResponseError && l.response.status >= 400 && l.response.status < 600
          ? (l.options.onResponseError && (await l.options.onResponseError(l)), await o(l))
          : l.response
      );
    },
    i = async function (a, u) {
      return (await s(a, u))._data;
    };
  return (
    (i.raw = s),
    (i.native = (...c) => t(...c)),
    (i.create = (c = {}) => pd({ ...e, defaults: { ...e.defaults, ...c } })),
    i
  );
}
const Ra = (function () {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  })(),
  Fy = Ra.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
  By = Ra.Headers,
  Wy = Ra.AbortController,
  gd = pd({ fetch: Fy, Headers: By, AbortController: Wy }),
  Ky = gd,
  Vy = /#/g,
  zy = /&/g,
  Jy = /\//g,
  qy = /=/g,
  Ia = /\+/g,
  Gy = /%5e/gi,
  Yy = /%60/gi,
  Qy = /%7c/gi,
  Xy = /%20/gi;
function Zy(e) {
  return encodeURI("" + e).replace(Qy, "|");
}
function Si(e) {
  return Zy(typeof e == "string" ? e : JSON.stringify(e))
    .replace(Ia, "%2B")
    .replace(Xy, "+")
    .replace(Vy, "%23")
    .replace(zy, "%26")
    .replace(Yy, "`")
    .replace(Gy, "^")
    .replace(Jy, "%2F");
}
function Ks(e) {
  return Si(e).replace(qy, "%3D");
}
function zo(e = "") {
  try {
    return decodeURIComponent("" + e);
  } catch {
    return "" + e;
  }
}
function e0(e) {
  return zo(e.replace(Ia, " "));
}
function t0(e) {
  return zo(e.replace(Ia, " "));
}
function n0(e = "") {
  const t = {};
  e[0] === "?" && (e = e.slice(1));
  for (const n of e.split("&")) {
    const r = n.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2) continue;
    const o = e0(r[1]);
    if (o === "__proto__" || o === "constructor") continue;
    const s = t0(r[2] || "");
    t[o] === void 0 ? (t[o] = s) : Array.isArray(t[o]) ? t[o].push(s) : (t[o] = [t[o], s]);
  }
  return t;
}
function r0(e, t) {
  return (
    (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t
      ? Array.isArray(t)
        ? t.map((n) => `${Ks(e)}=${Si(n)}`).join("&")
        : `${Ks(e)}=${Si(t)}`
      : Ks(e)
  );
}
function o0(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => r0(t, e[t]))
    .filter(Boolean)
    .join("&");
}
const s0 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  i0 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  a0 = /^([/\\]\s*){2,}[^/\\]/,
  c0 = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
  l0 = /\/$|\/\?|\/#/,
  u0 = /^\.?\//;
function or(e, t = {}) {
  return (
    typeof t == "boolean" && (t = { acceptRelative: t }),
    t.strict ? s0.test(e) : i0.test(e) || (t.acceptRelative ? a0.test(e) : !1)
  );
}
function f0(e) {
  return !!e && c0.test(e);
}
function Ci(e = "", t) {
  return t ? l0.test(e) : e.endsWith("/");
}
function md(e = "", t) {
  if (!t) return (Ci(e) ? e.slice(0, -1) : e) || "/";
  if (!Ci(e, !0)) return e || "/";
  let n = e,
    r = "";
  const o = e.indexOf("#");
  o >= 0 && ((n = e.slice(0, o)), (r = e.slice(o)));
  const [s, ...i] = n.split("?");
  return (
    ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") + (i.length > 0 ? `?${i.join("?")}` : "") + r
  );
}
function Ti(e = "", t) {
  if (!t) return e.endsWith("/") ? e : e + "/";
  if (Ci(e, !0)) return e || "/";
  let n = e,
    r = "";
  const o = e.indexOf("#");
  if (o >= 0 && ((n = e.slice(0, o)), (r = e.slice(o)), !n)) return r;
  const [s, ...i] = n.split("?");
  return s + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + r;
}
function d0(e = "") {
  return e.startsWith("/");
}
function ol(e = "") {
  return d0(e) ? e : "/" + e;
}
function sl(e, t) {
  if (p0(t)) return e;
  const n = md(t);
  if (!e.startsWith(n)) return e;
  const r = e.slice(n.length);
  return r[0] === "/" ? r : "/" + r;
}
function h0(e, t) {
  const n = y0(e),
    r = { ...n0(n.search), ...t };
  return (n.search = o0(r)), v0(n);
}
function p0(e) {
  return !e || e === "/";
}
function g0(e) {
  return e && e !== "/";
}
function yd(e, ...t) {
  let n = e || "";
  for (const r of t.filter((o) => g0(o)))
    if (n) {
      const o = r.replace(u0, "");
      n = Ti(n) + o;
    } else n = r;
  return n;
}
function vd(...e) {
  var i, c, a, u;
  const t = /\/(?!\/)/,
    n = e.filter(Boolean),
    r = [];
  let o = 0;
  for (const l of n)
    if (!(!l || l === "/")) {
      for (const [f, d] of l.split(t).entries())
        if (!(!d || d === ".")) {
          if (d === "..") {
            if (r.length === 1 && or(r[0])) continue;
            r.pop(), o--;
            continue;
          }
          if (f === 1 && (i = r[r.length - 1]) != null && i.endsWith(":/")) {
            r[r.length - 1] += "/" + d;
            continue;
          }
          r.push(d), o++;
        }
    }
  let s = r.join("/");
  return (
    o >= 0
      ? (c = n[0]) != null && c.startsWith("/") && !s.startsWith("/")
        ? (s = "/" + s)
        : (a = n[0]) != null && a.startsWith("./") && !s.startsWith("./") && (s = "./" + s)
      : (s = "../".repeat(-1 * o) + s),
    (u = n[n.length - 1]) != null && u.endsWith("/") && !s.endsWith("/") && (s += "/"),
    s
  );
}
function m0(e, t, n = {}) {
  return (
    n.trailingSlash || ((e = Ti(e)), (t = Ti(t))),
    n.leadingSlash || ((e = ol(e)), (t = ol(t))),
    n.encoding || ((e = zo(e)), (t = zo(t))),
    e === t
  );
}
const bd = Symbol.for("ufo:protocolRelative");
function y0(e = "", t) {
  const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (n) {
    const [, f, d = ""] = n;
    return {
      protocol: f.toLowerCase(),
      pathname: d,
      href: f + d,
      auth: "",
      host: "",
      search: "",
      hash: "",
    };
  }
  if (!or(e, { acceptRelative: !0 })) return il(e);
  const [, r = "", o, s = ""] =
      e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [],
    [, i = "", c = ""] = s.match(/([^#/?]*)(.*)?/) || [],
    { pathname: a, search: u, hash: l } = il(c.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol: r.toLowerCase(),
    auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
    host: i,
    pathname: a,
    search: u,
    hash: l,
    [bd]: !r,
  };
}
function il(e = "") {
  const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t, search: n, hash: r };
}
function v0(e) {
  const t = e.pathname || "",
    n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
    r = e.hash || "",
    o = e.auth ? e.auth + "@" : "",
    s = e.host || "";
  return (e.protocol || e[bd] ? (e.protocol || "") + "//" : "") + o + s + t + n + r;
}
const b0 = () => {
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {};
  },
  Jo = b0().app,
  w0 = () => Jo.baseURL,
  _0 = () => Jo.buildAssetsDir,
  Pa = (...e) => vd(wd(), _0(), ...e),
  wd = (...e) => {
    const t = Jo.cdnURL || Jo.baseURL;
    return e.length ? vd(t, ...e) : t;
  };
(globalThis.__buildAssetsURL = Pa), (globalThis.__publicAssetsURL = wd);
globalThis.$fetch || (globalThis.$fetch = Ky.create({ baseURL: w0() }));
function ki(e, t = {}, n) {
  for (const r in e) {
    const o = e[r],
      s = n ? `${n}:${r}` : r;
    typeof o == "object" && o !== null ? ki(o, t, s) : typeof o == "function" && (t[s] = o);
  }
  return t;
}
const x0 = { run: (e) => e() },
  E0 = () => x0,
  _d = typeof console.createTask < "u" ? console.createTask : E0;
function S0(e, t) {
  const n = t.shift(),
    r = _d(n);
  return e.reduce((o, s) => o.then(() => r.run(() => s(...t))), Promise.resolve());
}
function C0(e, t) {
  const n = t.shift(),
    r = _d(n);
  return Promise.all(e.map((o) => r.run(() => o(...t))));
}
function Vs(e, t) {
  for (const n of [...e]) n(t);
}
class T0 {
  constructor() {
    (this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this));
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != "function") return () => {};
    const o = t;
    let s;
    for (; this._deprecatedHooks[t]; ) (s = this._deprecatedHooks[t]), (t = s.to);
    if (s && !r.allowDeprecated) {
      let i = s.message;
      i || (i = `${o} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, "name", {
          get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0,
        });
      } catch {}
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0));
      }
    );
  }
  hookOnce(t, n) {
    let r,
      o = (...s) => (typeof r == "function" && r(), (r = void 0), (o = void 0), n(...s));
    return (r = this.hook(t, o)), r;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n);
      r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
    const r = this._hooks[t] || [];
    delete this._hooks[t];
    for (const o of r) this.hook(t, o);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t) this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = ki(t),
      r = Object.keys(n).map((o) => this.hook(o, n[o]));
    return () => {
      for (const o of r.splice(0, r.length)) o();
    };
  }
  removeHooks(t) {
    const n = ki(t);
    for (const r in n) this.removeHook(r, n[r]);
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(S0, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(C0, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const o = this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && Vs(this._before, o);
    const s = t(n in this._hooks ? [...this._hooks[n]] : [], r);
    return s instanceof Promise
      ? s.finally(() => {
          this._after && o && Vs(this._after, o);
        })
      : (this._after && o && Vs(this._after, o), s);
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(t);
          n !== -1 && this._before.splice(n, 1);
        }
      }
    );
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(t);
          n !== -1 && this._after.splice(n, 1);
        }
      }
    );
  }
}
function xd() {
  return new T0();
}
function k0(e = {}) {
  let t,
    n = !1;
  const r = (i) => {
    if (t && t !== i) throw new Error("Context conflict");
  };
  let o;
  if (e.asyncContext) {
    const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    i ? (o = new i()) : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const s = () => {
    if (o && t === void 0) {
      const i = o.getStore();
      if (i !== void 0) return i;
    }
    return t;
  };
  return {
    use: () => {
      const i = s();
      if (i === void 0) throw new Error("Context is not available");
      return i;
    },
    tryUse: () => s(),
    set: (i, c) => {
      c || r(i), (t = i), (n = !0);
    },
    unset: () => {
      (t = void 0), (n = !1);
    },
    call: (i, c) => {
      r(i), (t = i);
      try {
        return o ? o.run(i, c) : c();
      } finally {
        n || (t = void 0);
      }
    },
    async callAsync(i, c) {
      t = i;
      const a = () => {
          t = i;
        },
        u = () => (t === i ? a : void 0);
      Ai.add(u);
      try {
        const l = o ? o.run(i, c) : c();
        return n || (t = void 0), await l;
      } finally {
        Ai.delete(u);
      }
    },
  };
}
function A0(e = {}) {
  const t = {};
  return {
    get(n, r = {}) {
      return t[n] || (t[n] = k0({ ...e, ...r })), t[n], t[n];
    },
  };
}
const qo =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof global < "u"
          ? global
          : typeof window < "u"
            ? window
            : {},
  al = "__unctx__",
  R0 = qo[al] || (qo[al] = A0()),
  I0 = (e, t = {}) => R0.get(e, t),
  cl = "__unctx_async_handlers__",
  Ai = qo[cl] || (qo[cl] = new Set());
function jr(e) {
  const t = [];
  for (const o of Ai) {
    const s = o();
    s && t.push(s);
  }
  const n = () => {
    for (const o of t) o();
  };
  let r = e();
  return (
    r &&
      typeof r == "object" &&
      "catch" in r &&
      (r = r.catch((o) => {
        throw (n(), o);
      })),
    [r, n]
  );
}
const P0 = !1,
  Ri = !1,
  O0 = !1,
  rk = { componentName: "NuxtLink" },
  jn = { value: null, errorValue: null, deep: !0 },
  M0 = null,
  L0 = "#__nuxt",
  Ed = "nuxt-app",
  ll = 36e5;
function Sd(e = Ed) {
  return I0(e, { asyncContext: !1 });
}
const $0 = "__nuxt_plugin";
function H0(e) {
  let t = 0;
  const n = {
    _name: Ed,
    _scope: is(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.12.1";
      },
      get vue() {
        return n.vueApp.version;
      },
    },
    payload: Nt({ data: Nt({}), state: _t({}), once: new Set(), _errors: Nt({}) }),
    static: { data: {} },
    runWithContext(o) {
      return n._scope.active && !Jr() ? n._scope.run(() => ul(n, o)) : ul(n, o);
    },
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {};
      t++;
      let o = !1;
      return () => {
        if (!o && ((o = !0), t--, t === 0))
          return (n.isHydrating = !1), n.callHook("app:suspense:resolve");
      };
    },
    _asyncDataPromises: {},
    _asyncData: Nt({}),
    _payloadRevivers: {},
    ...e,
  };
  if (window.__NUXT__)
    for (const o in window.__NUXT__)
      switch (o) {
        case "data":
        case "state":
        case "_errors":
          Object.assign(n.payload[o], window.__NUXT__[o]);
          break;
        default:
          n.payload[o] = window.__NUXT__[o];
      }
  (n.hooks = xd()),
    (n.hook = n.hooks.hook),
    (n.callHook = n.hooks.callHook),
    (n.provide = (o, s) => {
      const i = "$" + o;
      po(n, i, s), po(n.vueApp.config.globalProperties, i, s);
    }),
    po(n.vueApp, "$nuxt", n),
    po(n.vueApp.config.globalProperties, "$nuxt", n);
  {
    window.addEventListener("nuxt.preloadError", (s) => {
      n.callHook("app:chunkError", { error: s.payload });
    }),
      (window.useNuxtApp = window.useNuxtApp || Te);
    const o = n.hook("app:error", (...s) => {
      console.error("[nuxt] error caught during app initialization", ...s);
    });
    n.hook("app:mounted", o);
  }
  const r = n.payload.config;
  return n.provide("config", r), n;
}
function N0(e, t) {
  t.hooks && e.hooks.addHooks(t.hooks);
}
async function D0(e, t) {
  if (typeof t == "function") {
    const { provide: n } = (await e.runWithContext(() => t(e))) || {};
    if (n && typeof n == "object") for (const r in n) e.provide(r, n[r]);
  }
}
async function j0(e, t) {
  const n = [],
    r = [],
    o = [],
    s = [];
  let i = 0;
  async function c(a) {
    var l;
    const u =
      ((l = a.dependsOn) == null
        ? void 0
        : l.filter((f) => t.some((d) => d._name === f) && !n.includes(f))) ?? [];
    if (u.length > 0) r.push([new Set(u), a]);
    else {
      const f = D0(e, a).then(async () => {
        a._name &&
          (n.push(a._name),
          await Promise.all(
            r.map(async ([d, h]) => {
              d.has(a._name) && (d.delete(a._name), d.size === 0 && (i++, await c(h)));
            }),
          ));
      });
      a.parallel ? o.push(f.catch((d) => s.push(d))) : await f;
    }
  }
  for (const a of t) N0(e, a);
  for (const a of t) await c(a);
  if ((await Promise.all(o), i)) for (let a = 0; a < i; a++) await Promise.all(o);
  if (s.length) throw s[0];
}
function We(e) {
  if (typeof e == "function") return e;
  const t = e._name || e.name;
  return delete e.name, Object.assign(e.setup || (() => {}), e, { [$0]: !0, _name: t });
}
function ul(e, t, n) {
  const r = () => t();
  return Sd(e._name).set(e), e.vueApp.runWithContext(r);
}
function U0(e) {
  var n;
  let t;
  return (
    Ca() && (t = (n = hn()) == null ? void 0 : n.appContext.app.$nuxt),
    (t = t || Sd(e).tryUse()),
    t || null
  );
}
function Te(e) {
  const t = U0(e);
  if (!t) throw new Error("[nuxt] instance unavailable");
  return t;
}
function pn(e) {
  return Te().$config;
}
function po(e, t, n) {
  Object.defineProperty(e, t, { get: () => n });
}
function F0(e, t) {
  return { ctx: { table: e }, matchAll: (n) => Td(n, e) };
}
function Cd(e) {
  const t = {};
  for (const n in e)
    t[n] =
      n === "dynamic"
        ? new Map(Object.entries(e[n]).map(([r, o]) => [r, Cd(o)]))
        : new Map(Object.entries(e[n]));
  return t;
}
function B0(e) {
  return F0(Cd(e));
}
function Td(e, t, n) {
  e.endsWith("/") && (e = e.slice(0, -1) || "/");
  const r = [];
  for (const [s, i] of fl(t.wildcard)) (e === s || e.startsWith(s + "/")) && r.push(i);
  for (const [s, i] of fl(t.dynamic))
    if (e.startsWith(s + "/")) {
      const c = "/" + e.slice(s.length).split("/").splice(2).join("/");
      r.push(...Td(c, i));
    }
  const o = t.static.get(e);
  return o && r.push(o), r.filter(Boolean);
}
function fl(e) {
  return [...e.entries()].sort((t, n) => t[0].length - n[0].length);
}
function zs(e) {
  if (e === null || typeof e != "object") return !1;
  const t = Object.getPrototypeOf(e);
  return (t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null) ||
    Symbol.iterator in e
    ? !1
    : Symbol.toStringTag in e
      ? Object.prototype.toString.call(e) === "[object Module]"
      : !0;
}
function Ii(e, t, n = ".", r) {
  if (!zs(t)) return Ii(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor") continue;
    const i = e[s];
    i != null &&
      ((r && r(o, s, i, n)) ||
        (Array.isArray(i) && Array.isArray(o[s])
          ? (o[s] = [...i, ...o[s]])
          : zs(i) && zs(o[s])
            ? (o[s] = Ii(i, o[s], (n ? `${n}.` : "") + s.toString(), r))
            : (o[s] = i)));
  }
  return o;
}
function Oa(e) {
  return (...t) => t.reduce((n, r) => Ii(n, r, "", e), {});
}
const Ma = Oa(),
  W0 = Oa((e, t, n) => {
    if (e[t] !== void 0 && typeof n == "function") return (e[t] = n(e[t])), !0;
  });
function K0(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
var V0 = Object.defineProperty,
  z0 = (e, t, n) =>
    t in e ? V0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  wn = (e, t, n) => (z0(e, typeof t != "symbol" ? t + "" : t, n), n);
class Pi extends Error {
  constructor(t, n = {}) {
    super(t, n),
      wn(this, "statusCode", 500),
      wn(this, "fatal", !1),
      wn(this, "unhandled", !1),
      wn(this, "statusMessage"),
      wn(this, "data"),
      wn(this, "cause"),
      n.cause && !this.cause && (this.cause = n.cause);
  }
  toJSON() {
    const t = { message: this.message, statusCode: Mi(this.statusCode, 500) };
    return (
      this.statusMessage && (t.statusMessage = kd(this.statusMessage)),
      this.data !== void 0 && (t.data = this.data),
      t
    );
  }
}
wn(Pi, "__h3_error__", !0);
function Oi(e) {
  if (typeof e == "string") return new Pi(e);
  if (J0(e)) return e;
  const t = new Pi(e.message ?? e.statusMessage ?? "", { cause: e.cause || e });
  if (K0(e, "stack"))
    try {
      Object.defineProperty(t, "stack", {
        get() {
          return e.stack;
        },
      });
    } catch {
      try {
        t.stack = e.stack;
      } catch {}
    }
  if (
    (e.data && (t.data = e.data),
    e.statusCode
      ? (t.statusCode = Mi(e.statusCode, t.statusCode))
      : e.status && (t.statusCode = Mi(e.status, t.statusCode)),
    e.statusMessage
      ? (t.statusMessage = e.statusMessage)
      : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage)
  ) {
    const n = t.statusMessage;
    kd(t.statusMessage) !== n &&
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.",
      );
  }
  return (
    e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
  );
}
function J0(e) {
  var t;
  return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0;
}
const q0 = /[^\u0009\u0020-\u007E]/g;
function kd(e = "") {
  return e.replace(q0, "");
}
function Mi(e, t = 200) {
  return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e;
}
const Ad = Symbol("layout-meta"),
  Qr = Symbol("route"),
  xt = () => {
    var e;
    return (e = Te()) == null ? void 0 : e.$router;
  },
  La = () => (Ca() ? Me(Qr, Te()._route) : Te()._route);
function ok(e) {
  return e;
}
const G0 = () => {
    try {
      if (Te()._processingMiddleware) return !0;
    } catch {
      return !1;
    }
    return !1;
  },
  sk = (e, t) => {
    e || (e = "/");
    const n = typeof e == "string" ? e : h0(e.path || "/", e.query || {}) + (e.hash || "");
    if (t != null && t.open) {
      const { target: c = "_blank", windowFeatures: a = {} } = t.open,
        u = Object.entries(a)
          .filter(([l, f]) => f !== void 0)
          .map(([l, f]) => `${l.toLowerCase()}=${f}`)
          .join(", ");
      return open(n, c, u), Promise.resolve();
    }
    const r = (t == null ? void 0 : t.external) || or(n, { acceptRelative: !0 });
    if (r) {
      if (!(t != null && t.external))
        throw new Error(
          "Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.",
        );
      const { protocol: c } = new URL(n, window.location.href);
      if (c && f0(c)) throw new Error(`Cannot navigate to a URL with '${c}' protocol.`);
    }
    const o = G0();
    if (!r && o) return e;
    const s = xt(),
      i = Te();
    return r
      ? (i._scope.stop(),
        t != null && t.replace ? location.replace(n) : (location.href = n),
        o ? (i.isHydrating ? new Promise(() => {}) : !1) : Promise.resolve())
      : t != null && t.replace
        ? s.replace(e)
        : s.push(e);
  },
  Rd = "__nuxt_error",
  vs = () => ba(Te().payload, "error"),
  Un = (e) => {
    const t = Xr(e);
    try {
      const n = Te(),
        r = vs();
      n.hooks.callHook("app:error", t), (r.value = r.value || t);
    } catch {
      throw t;
    }
    return t;
  },
  Y0 = async (e = {}) => {
    const t = Te(),
      n = vs();
    t.callHook("app:error:cleared", e),
      e.redirect && (await xt().replace(e.redirect)),
      (n.value = M0);
  },
  Q0 = (e) => !!e && typeof e == "object" && Rd in e,
  Xr = (e) => {
    const t = Oi(e);
    return Object.defineProperty(t, Rd, { value: !0, configurable: !1, writable: !1 }), t;
  },
  X0 = -1,
  Z0 = -2,
  ev = -3,
  tv = -4,
  nv = -5,
  rv = -6;
function ov(e, t) {
  return sv(JSON.parse(e), t);
}
function sv(e, t) {
  if (typeof e == "number") return o(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
  const n = e,
    r = Array(n.length);
  function o(s, i = !1) {
    if (s === X0) return;
    if (s === ev) return NaN;
    if (s === tv) return 1 / 0;
    if (s === nv) return -1 / 0;
    if (s === rv) return -0;
    if (i) throw new Error("Invalid input");
    if (s in r) return r[s];
    const c = n[s];
    if (!c || typeof c != "object") r[s] = c;
    else if (Array.isArray(c))
      if (typeof c[0] == "string") {
        const a = c[0],
          u = t == null ? void 0 : t[a];
        if (u) return (r[s] = u(o(c[1])));
        switch (a) {
          case "Date":
            r[s] = new Date(c[1]);
            break;
          case "Set":
            const l = new Set();
            r[s] = l;
            for (let h = 1; h < c.length; h += 1) l.add(o(c[h]));
            break;
          case "Map":
            const f = new Map();
            r[s] = f;
            for (let h = 1; h < c.length; h += 2) f.set(o(c[h]), o(c[h + 1]));
            break;
          case "RegExp":
            r[s] = new RegExp(c[1], c[2]);
            break;
          case "Object":
            r[s] = Object(c[1]);
            break;
          case "BigInt":
            r[s] = BigInt(c[1]);
            break;
          case "null":
            const d = Object.create(null);
            r[s] = d;
            for (let h = 1; h < c.length; h += 2) d[c[h]] = o(c[h + 1]);
            break;
          default:
            throw new Error(`Unknown type ${a}`);
        }
      } else {
        const a = new Array(c.length);
        r[s] = a;
        for (let u = 0; u < c.length; u += 1) {
          const l = c[u];
          l !== Z0 && (a[u] = o(l));
        }
      }
    else {
      const a = {};
      r[s] = a;
      for (const u in c) {
        const l = c[u];
        a[u] = o(l);
      }
    }
    return r[s];
  }
  return o(0);
}
function iv(e) {
  return Array.isArray(e) ? e : [e];
}
const av = ["title", "titleTemplate", "script", "style", "noscript"],
  So = ["base", "meta", "link", "style", "script", "noscript"],
  cv = [
    "title",
    "titleTemplate",
    "templateParams",
    "base",
    "htmlAttrs",
    "bodyAttrs",
    "meta",
    "link",
    "style",
    "script",
    "noscript",
  ],
  lv = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"],
  Id = [
    "tagPosition",
    "tagPriority",
    "tagDuplicateStrategy",
    "children",
    "innerHTML",
    "textContent",
    "processTemplateParams",
  ],
  uv = typeof window < "u";
function $a(e) {
  let t = 9;
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function dl(e) {
  return (
    e._h ||
    $a(
      e._d
        ? e._d
        : `${e.tag}:${e.textContent || e.innerHTML || ""}:${Object.entries(e.props)
            .map(([t, n]) => `${t}:${String(n)}`)
            .join(",")}`,
    )
  );
}
function Pd(e, t) {
  const { props: n, tag: r } = e;
  if (lv.includes(r)) return r;
  if (r === "link" && n.rel === "canonical") return "canonical";
  if (n.charset) return "charset";
  const o = ["id"];
  r === "meta" && o.push("name", "property", "http-equiv");
  for (const s of o)
    if (typeof n[s] < "u") {
      const i = String(n[s]);
      return `${r}:${s}:${i}`;
    }
  return !1;
}
function hl(e, t) {
  return e == null ? t || null : typeof e == "function" ? e(t) : e;
}
async function fv(e, t, n) {
  const r = {
    tag: e,
    props: await Od(
      typeof t == "object" && typeof t != "function" && !(t instanceof Promise)
        ? { ...t }
        : { [["script", "noscript", "style"].includes(e) ? "innerHTML" : "textContent"]: t },
      ["templateParams", "titleTemplate"].includes(e),
    ),
  };
  return (
    Id.forEach((o) => {
      const s = typeof r.props[o] < "u" ? r.props[o] : n[o];
      typeof s < "u" &&
        ((!["innerHTML", "textContent", "children"].includes(o) || av.includes(r.tag)) &&
          (r[o === "children" ? "innerHTML" : o] = s),
        delete r.props[o]);
    }),
    r.props.body && ((r.tagPosition = "bodyClose"), delete r.props.body),
    r.tag === "script" &&
      typeof r.innerHTML == "object" &&
      ((r.innerHTML = JSON.stringify(r.innerHTML)),
      (r.props.type = r.props.type || "application/json")),
    Array.isArray(r.props.content)
      ? r.props.content.map((o) => ({ ...r, props: { ...r.props, content: o } }))
      : r
  );
}
function dv(e, t) {
  var r;
  const n = e === "class" ? " " : ";";
  return (
    typeof t == "object" &&
      !Array.isArray(t) &&
      (t = Object.entries(t)
        .filter(([, o]) => o)
        .map(([o, s]) => (e === "style" ? `${o}:${s}` : o))),
    (r = String(Array.isArray(t) ? t.join(n) : t)) == null
      ? void 0
      : r
          .split(n)
          .filter((o) => o.trim())
          .filter(Boolean)
          .join(n)
  );
}
async function Od(e, t) {
  for (const n of Object.keys(e)) {
    if (["class", "style"].includes(n)) {
      e[n] = dv(n, e[n]);
      continue;
    }
    if ((e[n] instanceof Promise && (e[n] = await e[n]), !t && !Id.includes(n))) {
      const r = String(e[n]),
        o = n.startsWith("data-");
      r === "true" || r === ""
        ? (e[n] = o ? "true" : !0)
        : e[n] || (o && r === "false" ? (e[n] = "false") : delete e[n]);
    }
  }
  return e;
}
const hv = 10;
async function pv(e) {
  const t = [];
  return (
    Object.entries(e.resolvedInput)
      .filter(([n, r]) => typeof r < "u" && cv.includes(n))
      .forEach(([n, r]) => {
        const o = iv(r);
        t.push(...o.map((s) => fv(n, s, e)).flat());
      }),
    (await Promise.all(t))
      .flat()
      .filter(Boolean)
      .map((n, r) => ((n._e = e._i), e.mode && (n._m = e.mode), (n._p = (e._i << hv) + r), n))
  );
}
const pl = { base: -10, title: 10 },
  gl = { critical: -80, high: -10, low: 20 };
function Go(e) {
  let t = 100;
  const n = e.tagPriority;
  return typeof n == "number"
    ? n
    : (e.tag === "meta"
        ? (e.props["http-equiv"] === "content-security-policy" && (t = -30),
          e.props.charset && (t = -20),
          e.props.name === "viewport" && (t = -15))
        : e.tag === "link" && e.props.rel === "preconnect"
          ? (t = 20)
          : e.tag in pl && (t = pl[e.tag]),
      typeof n == "string" && n in gl ? t + gl[n] : t);
}
const gv = [
    { prefix: "before:", offset: -1 },
    { prefix: "after:", offset: 1 },
  ],
  ml = ["onload", "onerror", "onabort", "onprogress", "onloadstart"],
  zt = "%separator";
function Co(e, t, n) {
  if (typeof e != "string" || !e.includes("%")) return e;
  function r(i) {
    let c;
    return (
      ["s", "pageTitle"].includes(i)
        ? (c = t.pageTitle)
        : i.includes(".")
          ? (c = i.split(".").reduce((a, u) => (a && a[u]) || void 0, t))
          : (c = t[i]),
      typeof c < "u" ? (c || "").replace(/"/g, '\\"') : !1
    );
  }
  let o = e;
  try {
    o = decodeURI(e);
  } catch {}
  return (
    (o.match(/%(\w+\.+\w+)|%(\w+)/g) || [])
      .sort()
      .reverse()
      .forEach((i) => {
        const c = r(i.slice(1));
        typeof c == "string" &&
          (e = e.replace(new RegExp(`\\${i}(\\W|$)`, "g"), (a, u) => `${c}${u}`).trim());
      }),
    e.includes(zt) &&
      (e.endsWith(zt) && (e = e.slice(0, -zt.length).trim()),
      e.startsWith(zt) && (e = e.slice(zt.length).trim()),
      (e = e.replace(new RegExp(`\\${zt}\\s*\\${zt}`, "g"), zt)),
      (e = Co(e, { separator: n }, n))),
    e
  );
}
async function Md(e, t = {}) {
  var l;
  const n = t.document || e.resolvedOptions.document;
  if (!n || !e.dirty) return;
  const r = { shouldRender: !0, tags: [] };
  if ((await e.hooks.callHook("dom:beforeRender", r), !r.shouldRender)) return;
  const o = (await e.resolveTags()).map((f) => ({
    tag: f,
    id: So.includes(f.tag) ? dl(f) : f.tag,
    shouldRender: !0,
  }));
  let s = e._dom;
  if (!s) {
    s = { elMap: { htmlAttrs: n.documentElement, bodyAttrs: n.body } };
    for (const f of ["body", "head"]) {
      const d = (l = n[f]) == null ? void 0 : l.children,
        h = [];
      for (const p of [...d].filter((b) => So.includes(b.tagName.toLowerCase()))) {
        const b = {
          tag: p.tagName.toLowerCase(),
          props: await Od(
            p.getAttributeNames().reduce((v, m) => ({ ...v, [m]: p.getAttribute(m) }), {}),
          ),
          innerHTML: p.innerHTML,
        };
        let E = 1,
          C = Pd(b);
        for (; C && h.find((v) => v._d === C); ) C = `${C}:${E++}`;
        (b._d = C || void 0), h.push(b), (s.elMap[p.getAttribute("data-hid") || dl(b)] = p);
      }
    }
  }
  (s.pendingSideEffects = { ...(s.sideEffects || {}) }), (s.sideEffects = {});
  function i(f, d, h) {
    const p = `${f}:${d}`;
    (s.sideEffects[p] = h), delete s.pendingSideEffects[p];
  }
  function c({ id: f, $el: d, tag: h }) {
    const p = h.tag.endsWith("Attrs");
    (s.elMap[f] = d),
      p ||
        (["textContent", "innerHTML"].forEach((b) => {
          h[b] && h[b] !== d[b] && (d[b] = h[b]);
        }),
        i(f, "el", () => {
          var b;
          (b = s.elMap[f]) == null || b.remove(), delete s.elMap[f];
        }));
    for (const [b, E] of Object.entries(h._eventHandlers || {}))
      d.getAttribute(`data-${b}`) !== "" &&
        ((h.tag === "bodyAttrs" ? n.defaultView : d).addEventListener(
          b.replace("on", ""),
          E.bind(d),
        ),
        d.setAttribute(`data-${b}`, ""));
    Object.entries(h.props).forEach(([b, E]) => {
      const C = `attr:${b}`;
      if (b === "class")
        for (const v of (E || "").split(" ").filter(Boolean))
          p && i(f, `${C}:${v}`, () => d.classList.remove(v)),
            !d.classList.contains(v) && d.classList.add(v);
      else if (b === "style")
        for (const v of (E || "").split(";").filter(Boolean)) {
          const [m, ...y] = v.split(":").map((x) => x.trim());
          i(f, `${C}:${v}:${m}`, () => {
            d.style.removeProperty(m);
          }),
            d.style.setProperty(m, y.join(":"));
        }
      else
        d.getAttribute(b) !== E && d.setAttribute(b, E === !0 ? "" : String(E)),
          p && i(f, C, () => d.removeAttribute(b));
    });
  }
  const a = [],
    u = { bodyClose: void 0, bodyOpen: void 0, head: void 0 };
  for (const f of o) {
    const { tag: d, shouldRender: h, id: p } = f;
    if (h) {
      if (d.tag === "title") {
        n.title = d.textContent;
        continue;
      }
      (f.$el = f.$el || s.elMap[p]), f.$el ? c(f) : So.includes(d.tag) && a.push(f);
    }
  }
  for (const f of a) {
    const d = f.tag.tagPosition || "head";
    (f.$el = n.createElement(f.tag.tag)),
      c(f),
      (u[d] = u[d] || n.createDocumentFragment()),
      u[d].appendChild(f.$el);
  }
  for (const f of o) await e.hooks.callHook("dom:renderTag", f, n, i);
  u.head && n.head.appendChild(u.head),
    u.bodyOpen && n.body.insertBefore(u.bodyOpen, n.body.firstChild),
    u.bodyClose && n.body.appendChild(u.bodyClose),
    Object.values(s.pendingSideEffects).forEach((f) => f()),
    (e._dom = s),
    (e.dirty = !1),
    await e.hooks.callHook("dom:rendered", { renders: o });
}
async function mv(e, t = {}) {
  const n = t.delayFn || ((r) => setTimeout(r, 10));
  return (e._domUpdatePromise =
    e._domUpdatePromise ||
    new Promise((r) =>
      n(async () => {
        await Md(e, t), delete e._domUpdatePromise, r();
      }),
    ));
}
function yv(e) {
  return (t) => {
    var r, o;
    const n =
      ((o =
        (r = t.resolvedOptions.document) == null
          ? void 0
          : r.head.querySelector('script[id="unhead:payload"]')) == null
        ? void 0
        : o.innerHTML) || !1;
    return (
      n && t.push(JSON.parse(n)),
      {
        mode: "client",
        hooks: {
          "entries:updated": function (s) {
            mv(s, e);
          },
        },
      }
    );
  };
}
const vv = ["templateParams", "htmlAttrs", "bodyAttrs"],
  bv = {
    hooks: {
      "tag:normalise": function ({ tag: e }) {
        ["hid", "vmid", "key"].forEach((r) => {
          e.props[r] && ((e.key = e.props[r]), delete e.props[r]);
        });
        const n = Pd(e) || (e.key ? `${e.tag}:${e.key}` : !1);
        n && (e._d = n);
      },
      "tags:resolve": function (e) {
        const t = {};
        e.tags.forEach((r) => {
          const o = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p,
            s = t[o];
          if (s) {
            let c = r == null ? void 0 : r.tagDuplicateStrategy;
            if ((!c && vv.includes(r.tag) && (c = "merge"), c === "merge")) {
              const a = s.props;
              ["class", "style"].forEach((u) => {
                a[u] &&
                  (r.props[u]
                    ? (u === "style" && !a[u].endsWith(";") && (a[u] += ";"),
                      (r.props[u] = `${a[u]} ${r.props[u]}`))
                    : (r.props[u] = a[u]));
              }),
                (t[o].props = { ...a, ...r.props });
              return;
            } else if (r._e === s._e) {
              (s._duped = s._duped || []),
                (r._d = `${s._d}:${s._duped.length + 1}`),
                s._duped.push(r);
              return;
            } else if (Go(r) > Go(s)) return;
          }
          const i = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
          if (So.includes(r.tag) && i === 0) {
            delete t[o];
            return;
          }
          t[o] = r;
        });
        const n = [];
        Object.values(t).forEach((r) => {
          const o = r._duped;
          delete r._duped, n.push(r), o && n.push(...o);
        }),
          (e.tags = n),
          (e.tags = e.tags.filter(
            (r) => !(r.tag === "meta" && (r.props.name || r.props.property) && !r.props.content),
          ));
      },
    },
  },
  wv = {
    mode: "server",
    hooks: {
      "tags:resolve": function (e) {
        const t = {};
        e.tags
          .filter(
            (n) =>
              ["titleTemplate", "templateParams", "title"].includes(n.tag) && n._m === "server",
          )
          .forEach((n) => {
            t[n.tag] = n.tag.startsWith("title") ? n.textContent : n.props;
          }),
          Object.keys(t).length &&
            e.tags.push({
              tag: "script",
              innerHTML: JSON.stringify(t),
              props: { id: "unhead:payload", type: "application/json" },
            });
      },
    },
  },
  _v = ["script", "link", "bodyAttrs"],
  xv = (e) => ({
    hooks: {
      "tags:resolve": function (t) {
        for (const n of t.tags.filter((r) => _v.includes(r.tag)))
          Object.entries(n.props).forEach(([r, o]) => {
            r.startsWith("on") &&
              typeof o == "function" &&
              (e.ssr && ml.includes(r)
                ? (n.props[r] = `this.dataset.${r}fired = true`)
                : delete n.props[r],
              (n._eventHandlers = n._eventHandlers || {}),
              (n._eventHandlers[r] = o));
          }),
            e.ssr &&
              n._eventHandlers &&
              (n.props.src || n.props.href) &&
              (n.key = n.key || $a(n.props.src || n.props.href));
      },
      "dom:renderTag": function ({ $el: t, tag: n }) {
        var r, o;
        for (const s of Object.keys((t == null ? void 0 : t.dataset) || {}).filter((i) =>
          ml.some((c) => `${c}fired` === i),
        )) {
          const i = s.replace("fired", "");
          (o = (r = n._eventHandlers) == null ? void 0 : r[i]) == null ||
            o.call(t, new Event(i.replace("on", "")));
        }
      },
    },
  }),
  Ev = ["link", "style", "script", "noscript"],
  Sv = {
    hooks: {
      "tag:normalise": ({ tag: e }) => {
        e.key && Ev.includes(e.tag) && (e.props["data-hid"] = e._h = $a(e.key));
      },
    },
  },
  Cv = {
    hooks: {
      "tags:resolve": (e) => {
        const t = (n) => {
          var r;
          return (r = e.tags.find((o) => o._d === n)) == null ? void 0 : r._p;
        };
        for (const { prefix: n, offset: r } of gv)
          for (const o of e.tags.filter(
            (s) => typeof s.tagPriority == "string" && s.tagPriority.startsWith(n),
          )) {
            const s = t(o.tagPriority.replace(n, ""));
            typeof s < "u" && (o._p = s + r);
          }
        e.tags.sort((n, r) => n._p - r._p).sort((n, r) => Go(n) - Go(r));
      },
    },
  },
  Tv = { meta: "content", link: "href", htmlAttrs: "lang" },
  kv = (e) => ({
    hooks: {
      "tags:resolve": (t) => {
        var c;
        const { tags: n } = t,
          r = (c = n.find((a) => a.tag === "title")) == null ? void 0 : c.textContent,
          o = n.findIndex((a) => a.tag === "templateParams"),
          s = o !== -1 ? n[o].props : {},
          i = s.separator || "|";
        delete s.separator, (s.pageTitle = Co(s.pageTitle || r || "", s, i));
        for (const a of n.filter((u) => u.processTemplateParams !== !1)) {
          const u = Tv[a.tag];
          u && typeof a.props[u] == "string"
            ? (a.props[u] = Co(a.props[u], s, i))
            : (a.processTemplateParams === !0 || ["titleTemplate", "title"].includes(a.tag)) &&
              ["innerHTML", "textContent"].forEach((l) => {
                typeof a[l] == "string" && (a[l] = Co(a[l], s, i));
              });
        }
        (e._templateParams = s),
          (e._separator = i),
          (t.tags = n.filter((a) => a.tag !== "templateParams"));
      },
    },
  }),
  Av = {
    hooks: {
      "tags:resolve": (e) => {
        const { tags: t } = e;
        let n = t.findIndex((o) => o.tag === "titleTemplate");
        const r = t.findIndex((o) => o.tag === "title");
        if (r !== -1 && n !== -1) {
          const o = hl(t[n].textContent, t[r].textContent);
          o !== null ? (t[r].textContent = o || t[r].textContent) : delete t[r];
        } else if (n !== -1) {
          const o = hl(t[n].textContent);
          o !== null && ((t[n].textContent = o), (t[n].tag = "title"), (n = -1));
        }
        n !== -1 && delete t[n], (e.tags = t.filter(Boolean));
      },
    },
  },
  Rv = {
    hooks: {
      "tags:afterResolve": function (e) {
        for (const t of e.tags)
          typeof t.innerHTML == "string" &&
            (t.innerHTML && ["application/ld+json", "application/json"].includes(t.props.type)
              ? (t.innerHTML = t.innerHTML.replace(/</g, "\\u003C"))
              : (t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`, "g"), `<\\/${t.tag}`)));
      },
    },
  };
let Ld;
function Iv(e = {}) {
  const t = Pv(e);
  return t.use(yv()), (Ld = t);
}
function yl(e, t) {
  return !e || (e === "server" && t) || (e === "client" && !t);
}
function Pv(e = {}) {
  const t = xd();
  t.addHooks(e.hooks || {}), (e.document = e.document || (uv ? document : void 0));
  const n = !e.document,
    r = () => {
      (c.dirty = !0), t.callHook("entries:updated", c);
    };
  let o = 0,
    s = [];
  const i = [],
    c = {
      plugins: i,
      dirty: !1,
      resolvedOptions: e,
      hooks: t,
      headEntries() {
        return s;
      },
      use(a) {
        const u = typeof a == "function" ? a(c) : a;
        (!u.key || !i.some((l) => l.key === u.key)) &&
          (i.push(u), yl(u.mode, n) && t.addHooks(u.hooks || {}));
      },
      push(a, u) {
        u == null || delete u.head;
        const l = { _i: o++, input: a, ...u };
        return (
          yl(l.mode, n) && (s.push(l), r()),
          {
            dispose() {
              (s = s.filter((f) => f._i !== l._i)), t.callHook("entries:updated", c), r();
            },
            patch(f) {
              (s = s.map((d) => (d._i === l._i && (d.input = l.input = f), d))), r();
            },
          }
        );
      },
      async resolveTags() {
        const a = { tags: [], entries: [...s] };
        await t.callHook("entries:resolve", a);
        for (const u of a.entries) {
          const l = u.resolvedInput || u.input;
          if (((u.resolvedInput = await (u.transform ? u.transform(l) : l)), u.resolvedInput))
            for (const f of await pv(u)) {
              const d = { tag: f, entry: u, resolvedOptions: c.resolvedOptions };
              await t.callHook("tag:normalise", d), a.tags.push(d.tag);
            }
        }
        return (
          await t.callHook("tags:beforeResolve", a),
          await t.callHook("tags:resolve", a),
          await t.callHook("tags:afterResolve", a),
          a.tags
        );
      },
      ssr: n,
    };
  return (
    [bv, wv, xv, Sv, Cv, kv, Av, Rv, ...((e == null ? void 0 : e.plugins) || [])].forEach((a) =>
      c.use(a),
    ),
    c.hooks.callHook("init", c),
    c
  );
}
function Ov() {
  return Ld;
}
const Mv = td.startsWith("3");
function Lv(e) {
  return typeof e == "function" ? e() : ne(e);
}
function Yo(e, t = "") {
  if (e instanceof Promise) return e;
  const n = Lv(e);
  return !e || !n
    ? n
    : Array.isArray(n)
      ? n.map((r) => Yo(r, t))
      : typeof n == "object"
        ? Object.fromEntries(
            Object.entries(n).map(([r, o]) =>
              r === "titleTemplate" || r.startsWith("on") ? [r, ne(o)] : [r, Yo(o, r)],
            ),
          )
        : n;
}
const $v = {
    hooks: {
      "entries:resolve": function (e) {
        for (const t of e.entries) t.resolvedInput = Yo(t.input);
      },
    },
  },
  $d = "usehead";
function Hv(e) {
  return {
    install(n) {
      Mv &&
        ((n.config.globalProperties.$unhead = e),
        (n.config.globalProperties.$head = e),
        n.provide($d, e));
    },
  }.install;
}
function Nv(e = {}) {
  e.domDelayFn = e.domDelayFn || ((n) => dn(() => setTimeout(() => n(), 0)));
  const t = Iv(e);
  return t.use($v), (t.install = Hv(t)), t;
}
const Li =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  $i = "__unhead_injection_handler__";
function Dv(e) {
  Li[$i] = e;
}
function jv() {
  if ($i in Li) return Li[$i]();
  const e = Me($d);
  return e || Ov();
}
function Uv(e, t = {}) {
  const n = t.head || jv();
  if (n) return n.ssr ? n.push(e, t) : Fv(n, e, t);
}
function Fv(e, t, n = {}) {
  const r = ie(!1),
    o = ie({});
  Ut(() => {
    o.value = r.value ? {} : Yo(t);
  });
  const s = e.push(o.value, n);
  return (
    rt(o, (c) => {
      s.patch(c);
    }),
    hn() &&
      (ds(() => {
        s.dispose();
      }),
      Ff(() => {
        r.value = !0;
      }),
      Uf(() => {
        r.value = !1;
      })),
    s
  );
}
let To, ko;
function Bv() {
  return (
    (To = $fetch(Pa(`builds/meta/${pn().app.buildId}.json`), { responseType: "json" })),
    To.then((e) => {
      ko = B0(e.matcher);
    }).catch((e) => {
      console.error("[nuxt] Error fetching app manifest.", e);
    }),
    To
  );
}
function bs() {
  return To || Bv();
}
async function Ha(e) {
  if ((await bs(), !ko))
    return console.error("[nuxt] Error creating app manifest matcher.", ko), {};
  try {
    return Ma({}, ...ko.matchAll(e).reverse());
  } catch (t) {
    return console.error("[nuxt] Error matching route rules.", t), {};
  }
}
async function vl(e, t = {}) {
  const n = await Kv(e, t),
    r = Te(),
    o = (r._payloadCache = r._payloadCache || {});
  return (
    n in o ||
      (o[n] = Nd(e).then((s) =>
        s ? Hd(n).then((i) => i || (delete o[n], null)) : ((o[n] = null), null),
      )),
    o[n]
  );
}
const Wv = "_payload.json";
async function Kv(e, t = {}) {
  const n = new URL(e, "http://localhost");
  if (n.host !== "localhost" || or(n.pathname, { acceptRelative: !0 }))
    throw new Error("Payload URL must not include hostname: " + e);
  const r = pn(),
    o = t.hash || (t.fresh ? Date.now() : r.app.buildId),
    s = r.app.cdnURL,
    i = s && (await Nd(e)) ? s : r.app.baseURL;
  return yd(i, n.pathname, Wv + (o ? `?${o}` : ""));
}
async function Hd(e) {
  const t = fetch(e).then((n) => n.text().then(Dd));
  try {
    return await t;
  } catch (n) {
    console.warn("[nuxt] Cannot load payload ", e, n);
  }
  return null;
}
async function Nd(e = La().path) {
  if (((e = md(e)), (await bs()).prerendered.includes(e))) return !0;
  const n = await Ha(e);
  return !!n.prerender && !n.redirect;
}
let go = null;
async function Vv() {
  if (go) return go;
  const e = document.getElementById("__NUXT_DATA__");
  if (!e) return {};
  const t = await Dd(e.textContent || ""),
    n = e.dataset.src ? await Hd(e.dataset.src) : void 0;
  return (go = { ...t, ...n, ...window.__NUXT__ }), go;
}
async function Dd(e) {
  return await ov(e, Te()._payloadRevivers);
}
function zv(e, t) {
  Te()._payloadRevivers[e] = t;
}
const bl = {
    NuxtError: (e) => Xr(e),
    EmptyShallowRef: (e) => cn(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Vo(e)),
    EmptyRef: (e) => ie(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Vo(e)),
    ShallowRef: (e) => cn(e),
    ShallowReactive: (e) => Nt(e),
    Ref: (e) => ie(e),
    Reactive: (e) => _t(e),
  },
  Jv = We({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
      let t, n;
      for (const r in bl) zv(r, bl[r]);
      Object.assign(e.payload, (([t, n] = jr(() => e.runWithContext(Vv))), (t = await t), n(), t)),
        (window.__NUXT__ = e.payload);
    },
  }),
  qv = [],
  Gv = We({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
      const t = Nv({ plugins: qv });
      Dv(() => Te().vueApp._context.provides.usehead), e.vueApp.use(t);
      {
        let n = !0;
        const r = async () => {
          (n = !1), await Md(t);
        };
        t.hooks.hook("dom:beforeRender", (o) => {
          o.shouldRender = !n;
        }),
          e.hooks.hook("page:start", () => {
            n = !0;
          }),
          e.hooks.hook("page:finish", () => {
            e.isHydrating || r();
          }),
          e.hooks.hook("app:error", r),
          e.hooks.hook("app:suspense:resolve", r);
      }
    },
  });
/*!
 * vue-router v4.3.3
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Nn = typeof document < "u";
function Yv(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const ve = Object.assign;
function Js(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = wt(o) ? o.map(e) : e(o);
  }
  return n;
}
const Cr = () => {},
  wt = Array.isArray,
  jd = /#/g,
  Qv = /&/g,
  Xv = /\//g,
  Zv = /=/g,
  eb = /\?/g,
  Ud = /\+/g,
  tb = /%5B/g,
  nb = /%5D/g,
  Fd = /%5E/g,
  rb = /%60/g,
  Bd = /%7B/g,
  ob = /%7C/g,
  Wd = /%7D/g,
  sb = /%20/g;
function Na(e) {
  return encodeURI("" + e)
    .replace(ob, "|")
    .replace(tb, "[")
    .replace(nb, "]");
}
function ib(e) {
  return Na(e).replace(Bd, "{").replace(Wd, "}").replace(Fd, "^");
}
function Hi(e) {
  return Na(e)
    .replace(Ud, "%2B")
    .replace(sb, "+")
    .replace(jd, "%23")
    .replace(Qv, "%26")
    .replace(rb, "`")
    .replace(Bd, "{")
    .replace(Wd, "}")
    .replace(Fd, "^");
}
function ab(e) {
  return Hi(e).replace(Zv, "%3D");
}
function cb(e) {
  return Na(e).replace(jd, "%23").replace(eb, "%3F");
}
function lb(e) {
  return e == null ? "" : cb(e).replace(Xv, "%2F");
}
function Ur(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const ub = /\/$/,
  fb = (e) => e.replace(ub, "");
function qs(e, t, n = "/") {
  let r,
    o = {},
    s = "",
    i = "";
  const c = t.indexOf("#");
  let a = t.indexOf("?");
  return (
    c < a && c >= 0 && (a = -1),
    a > -1 && ((r = t.slice(0, a)), (s = t.slice(a + 1, c > -1 ? c : t.length)), (o = e(s))),
    c > -1 && ((r = r || t.slice(0, c)), (i = t.slice(c, t.length))),
    (r = gb(r ?? t, n)),
    { fullPath: r + (s && "?") + s + i, path: r, query: o, hash: Ur(i) }
  );
}
function db(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function wl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function hb(e, t, n) {
  const r = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    r > -1 &&
    r === o &&
    Zn(t.matched[r], n.matched[o]) &&
    Kd(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Zn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Kd(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!pb(e[n], t[n])) return !1;
  return !0;
}
function pb(e, t) {
  return wt(e) ? _l(e, t) : wt(t) ? _l(t, e) : e === t;
}
function _l(e, t) {
  return wt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function gb(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
    o = r[r.length - 1];
  (o === ".." || o === ".") && r.push("");
  let s = n.length - 1,
    i,
    c;
  for (i = 0; i < r.length; i++)
    if (((c = r[i]), c !== "."))
      if (c === "..") s > 1 && s--;
      else break;
  return n.slice(0, s).join("/") + "/" + r.slice(i).join("/");
}
var Fr;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Fr || (Fr = {}));
var Tr;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Tr || (Tr = {}));
function mb(e) {
  if (!e)
    if (Nn) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"), (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), fb(e);
}
const yb = /^[^#]+#/;
function vb(e, t) {
  return e.replace(yb, "#") + t;
}
function bb(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const ws = () => ({ left: window.scrollX, top: window.scrollY });
function wb(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      o =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = bb(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      );
}
function xl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ni = new Map();
function _b(e, t) {
  Ni.set(e, t);
}
function xb(e) {
  const t = Ni.get(e);
  return Ni.delete(e), t;
}
let Eb = () => location.protocol + "//" + location.host;
function Vd(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf("#");
  if (s > -1) {
    let c = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      a = o.slice(c);
    return a[0] !== "/" && (a = "/" + a), wl(a, "");
  }
  return wl(n, e) + r + o;
}
function Sb(e, t, n, r) {
  let o = [],
    s = [],
    i = null;
  const c = ({ state: d }) => {
    const h = Vd(e, location),
      p = n.value,
      b = t.value;
    let E = 0;
    if (d) {
      if (((n.value = h), (t.value = d), i && i === p)) {
        i = null;
        return;
      }
      E = b ? d.position - b.position : 0;
    } else r(h);
    o.forEach((C) => {
      C(n.value, p, {
        delta: E,
        type: Fr.pop,
        direction: E ? (E > 0 ? Tr.forward : Tr.back) : Tr.unknown,
      });
    });
  };
  function a() {
    i = n.value;
  }
  function u(d) {
    o.push(d);
    const h = () => {
      const p = o.indexOf(d);
      p > -1 && o.splice(p, 1);
    };
    return s.push(h), h;
  }
  function l() {
    const { history: d } = window;
    d.state && d.replaceState(ve({}, d.state, { scroll: ws() }), "");
  }
  function f() {
    for (const d of s) d();
    (s = []),
      window.removeEventListener("popstate", c),
      window.removeEventListener("beforeunload", l);
  }
  return (
    window.addEventListener("popstate", c),
    window.addEventListener("beforeunload", l, { passive: !0 }),
    { pauseListeners: a, listen: u, destroy: f }
  );
}
function El(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? ws() : null,
  };
}
function Cb(e) {
  const { history: t, location: n } = window,
    r = { value: Vd(e, n) },
    o = { value: t.state };
  o.value ||
    s(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function s(a, u, l) {
    const f = e.indexOf("#"),
      d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + a : Eb() + e + a;
    try {
      t[l ? "replaceState" : "pushState"](u, "", d), (o.value = u);
    } catch (h) {
      console.error(h), n[l ? "replace" : "assign"](d);
    }
  }
  function i(a, u) {
    const l = ve({}, t.state, El(o.value.back, a, o.value.forward, !0), u, {
      position: o.value.position,
    });
    s(a, l, !0), (r.value = a);
  }
  function c(a, u) {
    const l = ve({}, o.value, t.state, { forward: a, scroll: ws() });
    s(l.current, l, !0);
    const f = ve({}, El(r.value, a, null), { position: l.position + 1 }, u);
    s(a, f, !1), (r.value = a);
  }
  return { location: r, state: o, push: c, replace: i };
}
function zd(e) {
  e = mb(e);
  const t = Cb(e),
    n = Sb(e, t.state, t.location, t.replace);
  function r(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const o = ve({ location: "", base: e, go: r, createHref: vb.bind(null, e) }, t, n);
  return (
    Object.defineProperty(o, "location", { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(o, "state", { enumerable: !0, get: () => t.state.value }),
    o
  );
}
function Tb(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    zd(e)
  );
}
function kb(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Jd(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const ht = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  qd = Symbol("");
var Sl;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Sl || (Sl = {}));
function er(e, t) {
  return ve(new Error(), { type: e, [qd]: !0 }, t);
}
function It(e, t) {
  return e instanceof Error && qd in e && (t == null || !!(e.type & t));
}
const Cl = "[^/]+?",
  Ab = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Rb = /[.+*?^${}()[\]/\\]/g;
function Ib(e, t) {
  const n = ve({}, Ab, t),
    r = [];
  let o = n.start ? "^" : "";
  const s = [];
  for (const u of e) {
    const l = u.length ? [] : [90];
    n.strict && !u.length && (o += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0) f || (o += "/"), (o += d.value.replace(Rb, "\\$&")), (h += 40);
      else if (d.type === 1) {
        const { value: p, repeatable: b, optional: E, regexp: C } = d;
        s.push({ name: p, repeatable: b, optional: E });
        const v = C || Cl;
        if (v !== Cl) {
          h += 10;
          try {
            new RegExp(`(${v})`);
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${v}): ` + y.message);
          }
        }
        let m = b ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        f || (m = E && u.length < 2 ? `(?:/${m})` : "/" + m),
          E && (m += "?"),
          (o += m),
          (h += 20),
          E && (h += -8),
          b && (h += -20),
          v === ".*" && (h += -50);
      }
      l.push(h);
    }
    r.push(l);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? (o += "$") : n.strict && (o += "(?:/|$)");
  const i = new RegExp(o, n.sensitive ? "" : "i");
  function c(u) {
    const l = u.match(i),
      f = {};
    if (!l) return null;
    for (let d = 1; d < l.length; d++) {
      const h = l[d] || "",
        p = s[d - 1];
      f[p.name] = h && p.repeatable ? h.split("/") : h;
    }
    return f;
  }
  function a(u) {
    let l = "",
      f = !1;
    for (const d of e) {
      (!f || !l.endsWith("/")) && (l += "/"), (f = !1);
      for (const h of d)
        if (h.type === 0) l += h.value;
        else if (h.type === 1) {
          const { value: p, repeatable: b, optional: E } = h,
            C = p in u ? u[p] : "";
          if (wt(C) && !b)
            throw new Error(
              `Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const v = wt(C) ? C.join("/") : C;
          if (!v)
            if (E) d.length < 2 && (l.endsWith("/") ? (l = l.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${p}"`);
          l += v;
        }
    }
    return l || "/";
  }
  return { re: i, score: r, keys: s, parse: c, stringify: a };
}
function Pb(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0;
}
function Gd(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = Pb(r[n], o[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (Tl(r)) return 1;
    if (Tl(o)) return -1;
  }
  return o.length - r.length;
}
function Tl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Ob = { type: 0, value: "" },
  Mb = /[a-zA-Z0-9_]/;
function Lb(e) {
  if (!e) return [[]];
  if (e === "/") return [[Ob]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${u}": ${h}`);
  }
  let n = 0,
    r = n;
  const o = [];
  let s;
  function i() {
    s && o.push(s), (s = []);
  }
  let c = 0,
    a,
    u = "",
    l = "";
  function f() {
    u &&
      (n === 0
        ? s.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
          ? (s.length > 1 &&
              (a === "*" || a === "+") &&
              t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
            s.push({
              type: 1,
              value: u,
              regexp: l,
              repeatable: a === "*" || a === "+",
              optional: a === "*" || a === "?",
            }))
          : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function d() {
    u += a;
  }
  for (; c < e.length; ) {
    if (((a = e[c++]), a === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (u && f(), i()) : a === ":" ? (f(), (n = 1)) : d();
        break;
      case 4:
        d(), (n = r);
        break;
      case 1:
        a === "("
          ? (n = 2)
          : Mb.test(a)
            ? d()
            : (f(), (n = 0), a !== "*" && a !== "?" && a !== "+" && c--);
        break;
      case 2:
        a === ")" ? (l[l.length - 1] == "\\" ? (l = l.slice(0, -1) + a) : (n = 3)) : (l += a);
        break;
      case 3:
        f(), (n = 0), a !== "*" && a !== "?" && a !== "+" && c--, (l = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), i(), o;
}
function $b(e, t, n) {
  const r = Ib(Lb(e.path), n),
    o = ve(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function Hb(e, t) {
  const n = [],
    r = new Map();
  t = Rl({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(l) {
    return r.get(l);
  }
  function s(l, f, d) {
    const h = !d,
      p = Nb(l);
    p.aliasOf = d && d.record;
    const b = Rl(t, l),
      E = [p];
    if ("alias" in l) {
      const m = typeof l.alias == "string" ? [l.alias] : l.alias;
      for (const y of m)
        E.push(
          ve({}, p, {
            components: d ? d.record.components : p.components,
            path: y,
            aliasOf: d ? d.record : p,
          }),
        );
    }
    let C, v;
    for (const m of E) {
      const { path: y } = m;
      if (f && y[0] !== "/") {
        const x = f.record.path,
          _ = x[x.length - 1] === "/" ? "" : "/";
        m.path = f.record.path + (y && _ + y);
      }
      if (
        ((C = $b(m, f, b)),
        d
          ? d.alias.push(C)
          : ((v = v || C), v !== C && v.alias.push(C), h && l.name && !Al(C) && i(l.name)),
        Yd(C) && a(C),
        p.children)
      ) {
        const x = p.children;
        for (let _ = 0; _ < x.length; _++) s(x[_], C, d && d.children[_]);
      }
      d = d || C;
    }
    return v
      ? () => {
          i(v);
        }
      : Cr;
  }
  function i(l) {
    if (Jd(l)) {
      const f = r.get(l);
      f && (r.delete(l), n.splice(n.indexOf(f), 1), f.children.forEach(i), f.alias.forEach(i));
    } else {
      const f = n.indexOf(l);
      f > -1 &&
        (n.splice(f, 1),
        l.record.name && r.delete(l.record.name),
        l.children.forEach(i),
        l.alias.forEach(i));
    }
  }
  function c() {
    return n;
  }
  function a(l) {
    const f = Ub(l, n);
    n.splice(f, 0, l), l.record.name && !Al(l) && r.set(l.record.name, l);
  }
  function u(l, f) {
    let d,
      h = {},
      p,
      b;
    if ("name" in l && l.name) {
      if (((d = r.get(l.name)), !d)) throw er(1, { location: l });
      (b = d.record.name),
        (h = ve(
          kl(
            f.params,
            d.keys
              .filter((v) => !v.optional)
              .concat(d.parent ? d.parent.keys.filter((v) => v.optional) : [])
              .map((v) => v.name),
          ),
          l.params &&
            kl(
              l.params,
              d.keys.map((v) => v.name),
            ),
        )),
        (p = d.stringify(h));
    } else if (l.path != null)
      (p = l.path), (d = n.find((v) => v.re.test(p))), d && ((h = d.parse(p)), (b = d.record.name));
    else {
      if (((d = f.name ? r.get(f.name) : n.find((v) => v.re.test(f.path))), !d))
        throw er(1, { location: l, currentLocation: f });
      (b = d.record.name), (h = ve({}, f.params, l.params)), (p = d.stringify(h));
    }
    const E = [];
    let C = d;
    for (; C; ) E.unshift(C.record), (C = C.parent);
    return { name: b, path: p, params: h, matched: E, meta: jb(E) };
  }
  return (
    e.forEach((l) => s(l)),
    { addRoute: s, resolve: u, removeRoute: i, getRoutes: c, getRecordMatcher: o }
  );
}
function kl(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Nb(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Db(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component },
  };
}
function Db(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Al(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function jb(e) {
  return e.reduce((t, n) => ve(t, n.meta), {});
}
function Rl(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Ub(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const s = (n + r) >> 1;
    Gd(e, t[s]) < 0 ? (r = s) : (n = s + 1);
  }
  const o = Fb(e);
  return o && (r = t.lastIndexOf(o, r - 1)), r;
}
function Fb(e) {
  let t = e;
  for (; (t = t.parent); ) if (Yd(t) && Gd(e, t) === 0) return t;
}
function Yd({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect);
}
function Bb(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(Ud, " "),
      i = s.indexOf("="),
      c = Ur(i < 0 ? s : s.slice(0, i)),
      a = i < 0 ? null : Ur(s.slice(i + 1));
    if (c in t) {
      let u = t[c];
      wt(u) || (u = t[c] = [u]), u.push(a);
    } else t[c] = a;
  }
  return t;
}
function Il(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = ab(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (wt(r) ? r.map((s) => s && Hi(s)) : [r && Hi(r)]).forEach((s) => {
      s !== void 0 && ((t += (t.length ? "&" : "") + n), s != null && (t += "=" + s));
    });
  }
  return t;
}
function Wb(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = wt(r) ? r.map((o) => (o == null ? null : "" + o)) : r == null ? r : "" + r);
  }
  return t;
}
const Kb = Symbol(""),
  Pl = Symbol(""),
  _s = Symbol(""),
  Da = Symbol(""),
  Di = Symbol("");
function ur() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function en(e, t, n, r, o, s = (i) => i()) {
  const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((c, a) => {
      const u = (d) => {
          d === !1
            ? a(er(4, { from: n, to: t }))
            : d instanceof Error
              ? a(d)
              : kb(d)
                ? a(er(2, { from: t, to: d }))
                : (i && r.enterCallbacks[o] === i && typeof d == "function" && i.push(d), c());
        },
        l = s(() => e.call(r && r.instances[o], t, n, u));
      let f = Promise.resolve(l);
      e.length < 3 && (f = f.then(u)), f.catch((d) => a(d));
    });
}
function Gs(e, t, n, r, o = (s) => s()) {
  const s = [];
  for (const i of e)
    for (const c in i.components) {
      let a = i.components[c];
      if (!(t !== "beforeRouteEnter" && !i.instances[c]))
        if (Vb(a)) {
          const l = (a.__vccOpts || a)[t];
          l && s.push(en(l, n, r, i, c, o));
        } else {
          let u = a();
          s.push(() =>
            u.then((l) => {
              if (!l)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${c}" at "${i.path}"`),
                );
              const f = Yv(l) ? l.default : l;
              i.components[c] = f;
              const h = (f.__vccOpts || f)[t];
              return h && en(h, n, r, i, c, o)();
            }),
          );
        }
    }
  return s;
}
function Vb(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ol(e) {
  const t = Me(_s),
    n = Me(Da),
    r = he(() => {
      const a = ne(e.to);
      return t.resolve(a);
    }),
    o = he(() => {
      const { matched: a } = r.value,
        { length: u } = a,
        l = a[u - 1],
        f = n.matched;
      if (!l || !f.length) return -1;
      const d = f.findIndex(Zn.bind(null, l));
      if (d > -1) return d;
      const h = Ml(a[u - 2]);
      return u > 1 && Ml(l) === h && f[f.length - 1].path !== h
        ? f.findIndex(Zn.bind(null, a[u - 2]))
        : d;
    }),
    s = he(() => o.value > -1 && Gb(n.params, r.value.params)),
    i = he(() => o.value > -1 && o.value === n.matched.length - 1 && Kd(n.params, r.value.params));
  function c(a = {}) {
    return qb(a) ? t[ne(e.replace) ? "replace" : "push"](ne(e.to)).catch(Cr) : Promise.resolve();
  }
  return { route: r, href: he(() => r.value.href), isActive: s, isExactActive: i, navigate: c };
}
const zb = qe({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Ol,
    setup(e, { slots: t }) {
      const n = _t(Ol(e)),
        { options: r } = Me(_s),
        o = he(() => ({
          [Ll(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
          [Ll(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]:
            n.isExactActive,
        }));
      return () => {
        const s = t.default && t.default(n);
        return e.custom
          ? s
          : Ue(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value,
              },
              s,
            );
      };
    },
  }),
  Jb = zb;
function qb(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Gb(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (!wt(o) || o.length !== r.length || r.some((s, i) => s !== o[i])) return !1;
  }
  return !0;
}
function Ml(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Ll = (e, t, n) => e ?? t ?? n,
  Yb = qe({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Me(Di),
        o = he(() => e.route || r.value),
        s = Me(Pl, 0),
        i = he(() => {
          let u = ne(s);
          const { matched: l } = o.value;
          let f;
          for (; (f = l[u]) && !f.components; ) u++;
          return u;
        }),
        c = he(() => o.value.matched[i.value]);
      An(
        Pl,
        he(() => i.value + 1),
      ),
        An(Kb, c),
        An(Di, o);
      const a = ie();
      return (
        rt(
          () => [a.value, c.value, e.name],
          ([u, l, f], [d, h, p]) => {
            l &&
              ((l.instances[f] = u),
              h &&
                h !== l &&
                u &&
                u === d &&
                (l.leaveGuards.size || (l.leaveGuards = h.leaveGuards),
                l.updateGuards.size || (l.updateGuards = h.updateGuards))),
              u && l && (!h || !Zn(l, h) || !d) && (l.enterCallbacks[f] || []).forEach((b) => b(u));
          },
          { flush: "post" },
        ),
        () => {
          const u = o.value,
            l = e.name,
            f = c.value,
            d = f && f.components[l];
          if (!d) return $l(n.default, { Component: d, route: u });
          const h = f.props[l],
            p = h ? (h === !0 ? u.params : typeof h == "function" ? h(u) : h) : null,
            E = Ue(
              d,
              ve({}, p, t, {
                onVnodeUnmounted: (C) => {
                  C.component.isUnmounted && (f.instances[l] = null);
                },
                ref: a,
              }),
            );
          return $l(n.default, { Component: E, route: u }) || E;
        }
      );
    },
  });
function $l(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Qd = Yb;
function Qb(e) {
  const t = Hb(e.routes, e),
    n = e.parseQuery || Bb,
    r = e.stringifyQuery || Il,
    o = e.history,
    s = ur(),
    i = ur(),
    c = ur(),
    a = cn(ht);
  let u = ht;
  Nn &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const l = Js.bind(null, (R) => "" + R),
    f = Js.bind(null, lb),
    d = Js.bind(null, Ur);
  function h(R, N) {
    let D, z;
    return Jd(R) ? ((D = t.getRecordMatcher(R)), (z = N)) : (z = R), t.addRoute(z, D);
  }
  function p(R) {
    const N = t.getRecordMatcher(R);
    N && t.removeRoute(N);
  }
  function b() {
    return t.getRoutes().map((R) => R.record);
  }
  function E(R) {
    return !!t.getRecordMatcher(R);
  }
  function C(R, N) {
    if (((N = ve({}, N || a.value)), typeof R == "string")) {
      const w = qs(n, R, N.path),
        T = t.resolve({ path: w.path }, N),
        M = o.createHref(w.fullPath);
      return ve(w, T, { params: d(T.params), hash: Ur(w.hash), redirectedFrom: void 0, href: M });
    }
    let D;
    if (R.path != null) D = ve({}, R, { path: qs(n, R.path, N.path).path });
    else {
      const w = ve({}, R.params);
      for (const T in w) w[T] == null && delete w[T];
      (D = ve({}, R, { params: f(w) })), (N.params = f(N.params));
    }
    const z = t.resolve(D, N),
      ue = R.hash || "";
    z.params = l(d(z.params));
    const we = db(r, ve({}, R, { hash: ib(ue), path: z.path })),
      g = o.createHref(we);
    return ve({ fullPath: we, hash: ue, query: r === Il ? Wb(R.query) : R.query || {} }, z, {
      redirectedFrom: void 0,
      href: g,
    });
  }
  function v(R) {
    return typeof R == "string" ? qs(n, R, a.value.path) : ve({}, R);
  }
  function m(R, N) {
    if (u !== R) return er(8, { from: N, to: R });
  }
  function y(R) {
    return A(R);
  }
  function x(R) {
    return y(ve(v(R), { replace: !0 }));
  }
  function _(R) {
    const N = R.matched[R.matched.length - 1];
    if (N && N.redirect) {
      const { redirect: D } = N;
      let z = typeof D == "function" ? D(R) : D;
      return (
        typeof z == "string" &&
          ((z = z.includes("?") || z.includes("#") ? (z = v(z)) : { path: z }), (z.params = {})),
        ve({ query: R.query, hash: R.hash, params: z.path != null ? {} : R.params }, z)
      );
    }
  }
  function A(R, N) {
    const D = (u = C(R)),
      z = a.value,
      ue = R.state,
      we = R.force,
      g = R.replace === !0,
      w = _(D);
    if (w)
      return A(
        ve(v(w), { state: typeof w == "object" ? ve({}, ue, w.state) : ue, force: we, replace: g }),
        N || D,
      );
    const T = D;
    T.redirectedFrom = N;
    let M;
    return (
      !we && hb(r, z, D) && ((M = er(16, { to: T, from: z })), Oe(z, z, !0, !1)),
      (M ? Promise.resolve(M) : k(T, z))
        .catch((O) => (It(O) ? (It(O, 2) ? O : Ne(O)) : V(O, T, z)))
        .then((O) => {
          if (O) {
            if (It(O, 2))
              return A(
                ve({ replace: g }, v(O.to), {
                  state: typeof O.to == "object" ? ve({}, ue, O.to.state) : ue,
                  force: we,
                }),
                N || T,
              );
          } else O = I(T, z, !0, g, ue);
          return F(T, z, O), O;
        })
    );
  }
  function P(R, N) {
    const D = m(R, N);
    return D ? Promise.reject(D) : Promise.resolve();
  }
  function S(R) {
    const N = L.values().next().value;
    return N && typeof N.runWithContext == "function" ? N.runWithContext(R) : R();
  }
  function k(R, N) {
    let D;
    const [z, ue, we] = Xb(R, N);
    D = Gs(z.reverse(), "beforeRouteLeave", R, N);
    for (const w of z)
      w.leaveGuards.forEach((T) => {
        D.push(en(T, R, N));
      });
    const g = P.bind(null, R, N);
    return (
      D.push(g),
      ae(D)
        .then(() => {
          D = [];
          for (const w of s.list()) D.push(en(w, R, N));
          return D.push(g), ae(D);
        })
        .then(() => {
          D = Gs(ue, "beforeRouteUpdate", R, N);
          for (const w of ue)
            w.updateGuards.forEach((T) => {
              D.push(en(T, R, N));
            });
          return D.push(g), ae(D);
        })
        .then(() => {
          D = [];
          for (const w of we)
            if (w.beforeEnter)
              if (wt(w.beforeEnter)) for (const T of w.beforeEnter) D.push(en(T, R, N));
              else D.push(en(w.beforeEnter, R, N));
          return D.push(g), ae(D);
        })
        .then(
          () => (
            R.matched.forEach((w) => (w.enterCallbacks = {})),
            (D = Gs(we, "beforeRouteEnter", R, N, S)),
            D.push(g),
            ae(D)
          ),
        )
        .then(() => {
          D = [];
          for (const w of i.list()) D.push(en(w, R, N));
          return D.push(g), ae(D);
        })
        .catch((w) => (It(w, 8) ? w : Promise.reject(w)))
    );
  }
  function F(R, N, D) {
    c.list().forEach((z) => S(() => z(R, N, D)));
  }
  function I(R, N, D, z, ue) {
    const we = m(R, N);
    if (we) return we;
    const g = N === ht,
      w = Nn ? history.state : {};
    D &&
      (z || g
        ? o.replace(R.fullPath, ve({ scroll: g && w && w.scroll }, ue))
        : o.push(R.fullPath, ue)),
      (a.value = R),
      Oe(R, N, D, g),
      Ne();
  }
  let W;
  function ee() {
    W ||
      (W = o.listen((R, N, D) => {
        if (!le.listening) return;
        const z = C(R),
          ue = _(z);
        if (ue) {
          A(ve(ue, { replace: !0 }), z).catch(Cr);
          return;
        }
        u = z;
        const we = a.value;
        Nn && _b(xl(we.fullPath, D.delta), ws()),
          k(z, we)
            .catch((g) =>
              It(g, 12)
                ? g
                : It(g, 2)
                  ? (A(g.to, z)
                      .then((w) => {
                        It(w, 20) && !D.delta && D.type === Fr.pop && o.go(-1, !1);
                      })
                      .catch(Cr),
                    Promise.reject())
                  : (D.delta && o.go(-D.delta, !1), V(g, z, we)),
            )
            .then((g) => {
              (g = g || I(z, we, !1)),
                g &&
                  (D.delta && !It(g, 8)
                    ? o.go(-D.delta, !1)
                    : D.type === Fr.pop && It(g, 20) && o.go(-1, !1)),
                F(z, we, g);
            })
            .catch(Cr);
      }));
  }
  let te = ur(),
    j = ur(),
    q;
  function V(R, N, D) {
    Ne(R);
    const z = j.list();
    return z.length ? z.forEach((ue) => ue(R, N, D)) : console.error(R), Promise.reject(R);
  }
  function de() {
    return q && a.value !== ht
      ? Promise.resolve()
      : new Promise((R, N) => {
          te.add([R, N]);
        });
  }
  function Ne(R) {
    return q || ((q = !R), ee(), te.list().forEach(([N, D]) => (R ? D(R) : N())), te.reset()), R;
  }
  function Oe(R, N, D, z) {
    const { scrollBehavior: ue } = e;
    if (!Nn || !ue) return Promise.resolve();
    const we =
      (!D && xb(xl(R.fullPath, 0))) || ((z || !D) && history.state && history.state.scroll) || null;
    return dn()
      .then(() => ue(R, N, we))
      .then((g) => g && wb(g))
      .catch((g) => V(g, R, N));
  }
  const ke = (R) => o.go(R);
  let Ge;
  const L = new Set(),
    le = {
      currentRoute: a,
      listening: !0,
      addRoute: h,
      removeRoute: p,
      hasRoute: E,
      getRoutes: b,
      resolve: C,
      options: e,
      push: y,
      replace: x,
      go: ke,
      back: () => ke(-1),
      forward: () => ke(1),
      beforeEach: s.add,
      beforeResolve: i.add,
      afterEach: c.add,
      onError: j.add,
      isReady: de,
      install(R) {
        const N = this;
        R.component("RouterLink", Jb),
          R.component("RouterView", Qd),
          (R.config.globalProperties.$router = N),
          Object.defineProperty(R.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => ne(a),
          }),
          Nn && !Ge && a.value === ht && ((Ge = !0), y(o.location).catch((ue) => {}));
        const D = {};
        for (const ue in ht)
          Object.defineProperty(D, ue, { get: () => a.value[ue], enumerable: !0 });
        R.provide(_s, N), R.provide(Da, Nt(D)), R.provide(Di, a);
        const z = R.unmount;
        L.add(R),
          (R.unmount = function () {
            L.delete(R),
              L.size < 1 && ((u = ht), W && W(), (W = null), (a.value = ht), (Ge = !1), (q = !1)),
              z();
          });
      },
    };
  function ae(R) {
    return R.reduce((N, D) => N.then(() => S(D)), Promise.resolve());
  }
  return le;
}
function Xb(e, t) {
  const n = [],
    r = [],
    o = [],
    s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const c = t.matched[i];
    c && (e.matched.find((u) => Zn(u, c)) ? r.push(c) : n.push(c));
    const a = e.matched[i];
    a && (t.matched.find((u) => Zn(u, a)) || o.push(a));
  }
  return [n, r, o];
}
function ik() {
  return Me(_s);
}
function Zb() {
  return Me(Da);
}
const ew = (e, t) =>
    t.path
      .replace(/(:\w+)\([^)]+\)/g, "$1")
      .replace(/(:\w+)[?+*]/g, "$1")
      .replace(/:\w+/g, (n) => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || "";
      }),
  ji = (e, t) => {
    const n = e.route.matched.find((o) => {
        var s;
        return ((s = o.components) == null ? void 0 : s.default) === e.Component.type;
      }),
      r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && ew(e.route, n));
    return typeof r == "function" ? r(e.route) : r;
  },
  tw = (e, t) => ({ default: () => (e ? Ue(sm, e === !0 ? {} : e, t) : t) });
function ja(e) {
  return Array.isArray(e) ? e : [e];
}
const nw = "modulepreload",
  rw = function (e, t) {
    return e[0] === "." ? new URL(e, t).href : e;
  },
  Hl = {},
  ow = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      const s = document.getElementsByTagName("link"),
        i = document.querySelector("meta[property=csp-nonce]"),
        c = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
      o = Promise.all(
        n.map((a) => {
          if (((a = rw(a, r)), a in Hl)) return;
          Hl[a] = !0;
          const u = a.endsWith(".css"),
            l = u ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let h = s.length - 1; h >= 0; h--) {
              const p = s[h];
              if (p.href === a && (!u || p.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${a}"]${l}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = u ? "stylesheet" : nw),
            u || ((d.as = "script"), (d.crossOrigin = "")),
            (d.href = a),
            c && d.setAttribute("nonce", c),
            document.head.appendChild(d),
            u)
          )
            return new Promise((h, p) => {
              d.addEventListener("load", h),
                d.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${a}`)));
            });
        }),
      );
    }
    return o
      .then(() => t())
      .catch((s) => {
        const i = new Event("vite:preloadError", { cancelable: !0 });
        if (((i.payload = s), window.dispatchEvent(i), !i.defaultPrevented)) throw s;
      });
  },
  Qe = (...e) =>
    ow(...e).catch((t) => {
      const n = new Event("nuxt.preloadError");
      throw ((n.payload = t), window.dispatchEvent(n), t);
    }),
  Nl = [
    {
      name: "callback",
      path: "/callback",
      component: () =>
        Qe(
          () => import("./ms9CFFSE.js"),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
          import.meta.url,
        ).then((e) => e.default || e),
    },
    {
      name: "course-pack-id",
      path: "/course-pack/:id()",
      component: () =>
        Qe(
          () => import("./DaXZM0k2.js"),
          __vite__mapDeps([8, 9, 10, 5, 11, 12, 13]),
          import.meta.url,
        ).then((e) => e.default || e),
    },
    {
      name: "course-pack",
      path: "/course-pack",
      component: () =>
        Qe(
          () => import("./D3FHvt28.js"),
          __vite__mapDeps([14, 15, 16, 17, 13]),
          import.meta.url,
        ).then((e) => e.default || e),
    },
    {
      name: "game-coursePackId-id",
      path: "/game/:coursePackId()/:id()",
      component: () =>
        Qe(
          () => import("./CNb174Q1.js"),
          __vite__mapDeps([18, 9, 10, 5, 11, 4, 2, 3, 1, 19, 7, 12, 20, 21, 22, 23, 17, 13, 6, 24]),
          import.meta.url,
        ).then((e) => e.default || e),
    },
    {
      name: "index",
      path: "/",
      component: () =>
        Qe(
          () => import("./hgoq1NQF.js"),
          __vite__mapDeps([25, 26, 2, 3, 27, 4, 15, 16, 17, 21, 9, 10, 5, 11, 22, 28]),
          import.meta.url,
        ).then((e) => e.default || e),
    },
    {
      name: "mastered-elements",
      path: "/mastered-elements",
      component: () =>
        Qe(
          () => import("./DRjhmsal.js"),
          __vite__mapDeps([29, 2, 3, 9, 10, 5, 11, 20]),
          import.meta.url,
        ).then((e) => e.default || e),
    },
    {
      name: "privacy-policy",
      path: "/privacy-policy",
      component: () =>
        Qe(() => import("./B1lJxGT0.js"), [], import.meta.url).then((e) => e.default || e),
    },
    {
      name: "terms",
      path: "/terms",
      component: () =>
        Qe(() => import("./B7xktsu9.js"), [], import.meta.url).then((e) => e.default || e),
    },
    {
      name: "User-Setting",
      path: "/User/Setting",
      component: () =>
        Qe(
          () => import("./DqpY6BD3.js"),
          __vite__mapDeps([30, 10, 5, 19, 7, 22, 31]),
          import.meta.url,
        ).then((e) => e.default || e),
    },
  ],
  Xd = (e, t, n) => (
    (t = t === !0 ? {} : t),
    {
      default: () => {
        var r;
        return t ? Ue(e, t, n) : (r = n.default) == null ? void 0 : r.call(n);
      },
    }
  );
function Dl(e) {
  const t =
    (e == null ? void 0 : e.meta.key) ??
    e.path
      .replace(/(:\w+)\([^)]+\)/g, "$1")
      .replace(/(:\w+)[?+*]/g, "$1")
      .replace(/:\w+/g, (n) => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || "";
      });
  return typeof t == "function" ? t(e) : t;
}
function sw(e, t) {
  return e === t || t === ht
    ? !1
    : Dl(e) !== Dl(t)
      ? !0
      : !e.matched.every((r, o) => {
          var s, i;
          return (
            r.components &&
            r.components.default ===
              ((i = (s = t.matched[o]) == null ? void 0 : s.components) == null
                ? void 0
                : i.default)
          );
        });
}
function jl(e, t = !1) {
  if (e) {
    if (e.nodeName === "#comment" && e.nodeValue === "[") return Zd(e, [], t);
    if (t) {
      const n = e.cloneNode(!0);
      return (
        n.querySelectorAll("[data-island-slot]").forEach((r) => {
          r.innerHTML = "";
        }),
        [n.outerHTML]
      );
    }
    return [e.outerHTML];
  }
  return null;
}
function Zd(e, t = [], n = !1) {
  if (e && e.nodeName) {
    if (aw(e)) return t;
    if (!iw(e)) {
      const r = e.cloneNode(!0);
      n &&
        r.querySelectorAll("[data-island-slot]").forEach((o) => {
          o.innerHTML = "";
        }),
        t.push(r.outerHTML);
    }
    Zd(e.nextSibling, t, n);
  }
  return t;
}
function iw(e) {
  return e.nodeName === "#comment" && e.nodeValue === "[";
}
function aw(e) {
  return e.nodeName === "#comment" && e.nodeValue === "]";
}
const cw = {
  scrollBehavior(e, t, n) {
    var u;
    const r = Te(),
      o = ((u = xt().options) == null ? void 0 : u.scrollBehaviorType) ?? "auto";
    let s = n || void 0;
    const i =
      typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
    if ((!s && t && e && i !== !1 && sw(e, t) && (s = { left: 0, top: 0 }), e.path === t.path))
      return t.hash && !e.hash
        ? { left: 0, top: 0 }
        : e.hash
          ? { el: e.hash, top: Ul(e.hash), behavior: o }
          : !1;
    const c = (l) => !!(l.meta.pageTransition ?? Ri),
      a = c(t) && c(e) ? "page:transition:finish" : "page:finish";
    return new Promise((l) => {
      r.hooks.hookOnce(a, async () => {
        await new Promise((f) => setTimeout(f, 0)),
          e.hash && (s = { el: e.hash, top: Ul(e.hash), behavior: o }),
          l(s);
      });
    });
  },
};
function Ul(e) {
  try {
    const t = document.querySelector(e);
    if (t) return Number.parseFloat(getComputedStyle(t).scrollMarginTop);
  } catch {}
  return 0;
}
const lw = { hashMode: !1, scrollBehaviorType: "auto" },
  tt = { ...lw, ...cw },
  uw = async (e) => {
    var a;
    let t, n;
    if (!((a = e.meta) != null && a.validate)) return;
    const r = Te(),
      o = xt();
    if ((([t, n] = jr(() => Promise.resolve(e.meta.validate(e)))), (t = await t), n(), t) === !0)
      return;
    const i = Xr({
        statusCode: 404,
        statusMessage: `Page Not Found: ${e.fullPath}`,
        data: { path: e.fullPath },
      }),
      c = o.beforeResolve((u) => {
        if ((c(), u === e)) {
          const l = o.afterEach(async () => {
            l(), await r.runWithContext(() => Un(i)), window.history.pushState({}, "", e.fullPath);
          });
          return !1;
        }
      });
  },
  fw = async (e) => {
    let t, n;
    const r = (([t, n] = jr(() => Ha(e.path))), (t = await t), n(), t);
    if (r.redirect)
      return or(r.redirect, { acceptRelative: !0 })
        ? ((window.location.href = r.redirect), !1)
        : r.redirect;
  },
  dw = [uw, fw],
  kr = { auth: () => Qe(() => import("./rPtHkhMO.js"), [], import.meta.url) };
function hw(e, t, n) {
  const { pathname: r, search: o, hash: s } = t,
    i = e.indexOf("#");
  if (i > -1) {
    const u = s.includes(e.slice(i)) ? e.slice(i).length : 1;
    let l = s.slice(u);
    return l[0] !== "/" && (l = "/" + l), sl(l, "");
  }
  const c = sl(r, e),
    a = !n || m0(c, n, { trailingSlash: !0 }) ? c : n;
  return a + (a.includes("?") ? "" : o) + s;
}
const pw = We({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
      var E, C;
      let t,
        n,
        r = pn().app.baseURL;
      tt.hashMode && !r.includes("#") && (r += "#");
      const o =
          ((E = tt.history) == null ? void 0 : E.call(tt, r)) ?? (tt.hashMode ? Tb(r) : zd(r)),
        s = ((C = tt.routes) == null ? void 0 : C.call(tt, Nl)) ?? Nl;
      let i;
      const c = Qb({
        ...tt,
        scrollBehavior: (v, m, y) => {
          if (m === ht) {
            i = y;
            return;
          }
          if (tt.scrollBehavior) {
            if (
              ((c.options.scrollBehavior = tt.scrollBehavior),
              "scrollRestoration" in window.history)
            ) {
              const x = c.beforeEach(() => {
                x(), (window.history.scrollRestoration = "manual");
              });
            }
            return tt.scrollBehavior(v, ht, i || y);
          }
        },
        history: o,
        routes: s,
      });
      "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"),
        e.vueApp.use(c);
      const a = cn(c.currentRoute.value);
      c.afterEach((v, m) => {
        a.value = m;
      }),
        Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
          get: () => a.value,
        });
      const u = hw(r, window.location, e.payload.path),
        l = cn(c.currentRoute.value),
        f = () => {
          l.value = c.currentRoute.value;
        };
      e.hook("page:finish", f),
        c.afterEach((v, m) => {
          var y, x, _, A;
          ((x = (y = v.matched[0]) == null ? void 0 : y.components) == null
            ? void 0
            : x.default) ===
            ((A = (_ = m.matched[0]) == null ? void 0 : _.components) == null
              ? void 0
              : A.default) && f();
        });
      const d = {};
      for (const v in l.value) Object.defineProperty(d, v, { get: () => l.value[v] });
      (e._route = Nt(d)), (e._middleware = e._middleware || { global: [], named: {} });
      const h = vs();
      c.afterEach(async (v, m, y) => {
        delete e._processingMiddleware,
          !e.isHydrating && h.value && (await e.runWithContext(Y0)),
          y && (await e.callHook("page:loading:end")),
          v.matched.length === 0 &&
            (await e.runWithContext(() =>
              Un(
                Oi({
                  statusCode: 404,
                  fatal: !1,
                  statusMessage: `Page not found: ${v.fullPath}`,
                  data: { path: v.fullPath },
                }),
              ),
            ));
      });
      try {
        ([t, n] = jr(() => c.isReady())), await t, n();
      } catch (v) {
        ([t, n] = jr(() => e.runWithContext(() => Un(v)))), await t, n();
      }
      const p = u !== c.currentRoute.value.fullPath ? c.resolve(u) : c.currentRoute.value;
      f();
      const b = e.payload.state._layout;
      return (
        c.beforeEach(async (v, m) => {
          var y;
          await e.callHook("page:loading:start"),
            (v.meta = _t(v.meta)),
            e.isHydrating && b && !qn(v.meta.layout) && (v.meta.layout = b),
            (e._processingMiddleware = !0);
          {
            const x = new Set([...dw, ...e._middleware.global]);
            for (const _ of v.matched) {
              const A = _.meta.middleware;
              if (A) for (const P of ja(A)) x.add(P);
            }
            {
              const _ = await e.runWithContext(() => Ha(v.path));
              if (_.appMiddleware)
                for (const A in _.appMiddleware) _.appMiddleware[A] ? x.add(A) : x.delete(A);
            }
            for (const _ of x) {
              const A =
                typeof _ == "string"
                  ? e._middleware.named[_] ||
                    (await ((y = kr[_]) == null ? void 0 : y.call(kr).then((S) => S.default || S)))
                  : _;
              if (!A) throw new Error(`Unknown route middleware: '${_}'.`);
              const P = await e.runWithContext(() => A(v, m));
              if (!e.payload.serverRendered && e.isHydrating && (P === !1 || P instanceof Error)) {
                const S = P || Oi({ statusCode: 404, statusMessage: `Page Not Found: ${u}` });
                return await e.runWithContext(() => Un(S)), !1;
              }
              if (P !== !0 && (P || P === !1)) return P;
            }
          }
        }),
        c.onError(async () => {
          delete e._processingMiddleware, await e.callHook("page:loading:end");
        }),
        e.hooks.hookOnce("app:created", async () => {
          try {
            "name" in p && (p.name = void 0),
              await c.replace({ ...p, force: !0 }),
              (c.options.scrollBehavior = tt.scrollBehavior);
          } catch (v) {
            await e.runWithContext(() => Un(v));
          }
        }),
        { provide: { router: c } }
      );
    },
  }),
  Fl =
    globalThis.requestIdleCallback ||
    ((e) => {
      const t = Date.now(),
        n = { didTimeout: !1, timeRemaining: () => Math.max(0, 50 - (Date.now() - t)) };
      return setTimeout(() => {
        e(n);
      }, 1);
    }),
  ak =
    globalThis.cancelIdleCallback ||
    ((e) => {
      clearTimeout(e);
    }),
  eh = (e) => {
    const t = Te();
    t.isHydrating
      ? t.hooks.hookOnce("app:suspense:resolve", () => {
          Fl(e);
        })
      : Fl(e);
  },
  gw = We({
    name: "nuxt:payload",
    setup(e) {
      xt().beforeResolve(async (t, n) => {
        if (t.path === n.path) return;
        const r = await vl(t.path);
        r && Object.assign(e.static.data, r.data);
      }),
        eh(() => {
          var t;
          e.hooks.hook("link:prefetch", async (n) => {
            const { hostname: r } = new URL(n, window.location.href);
            r === window.location.hostname && (await vl(n));
          }),
            ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== "slow-2g" &&
              setTimeout(bs, 1e3);
        });
    },
  }),
  mw = We((e) => {
    let t;
    async function n() {
      const r = await bs();
      t && clearTimeout(t), (t = setTimeout(n, ll));
      try {
        const o = await $fetch(Pa("builds/latest.json") + `?${Date.now()}`);
        o.id !== r.id && e.hooks.callHook("app:manifest:update", o);
      } catch {}
    }
    eh(() => {
      t = setTimeout(n, ll);
    });
  }),
  yw = hi(() =>
    Qe(() => import("./Be3xCWOP.js"), [], import.meta.url).then((e) => e.default || e.default || e),
  ),
  vw = [["Icon", yw]],
  bw = We({
    name: "nuxt:global-components",
    setup(e) {
      for (const [t, n] of vw) e.vueApp.component(t, n), e.vueApp.component("Lazy" + t, n);
    },
  }),
  nn = {
    default: () =>
      Qe(
        () => import("./BjZDF16K.js"),
        __vite__mapDeps([32, 4, 2, 3, 5, 26, 27, 11, 1, 7, 23]),
        import.meta.url,
      ).then((e) => e.default || e),
  },
  ww = We({
    name: "nuxt:prefetch",
    setup(e) {
      const t = xt();
      e.hooks.hook("app:mounted", () => {
        t.beforeEach(async (n) => {
          var o;
          const r = (o = n == null ? void 0 : n.meta) == null ? void 0 : o.layout;
          r && typeof nn[r] == "function" && (await nn[r]());
        });
      }),
        e.hooks.hook("link:prefetch", (n) => {
          if (or(n)) return;
          const r = t.resolve(n);
          if (!r) return;
          const o = r.meta.layout;
          let s = ja(r.meta.middleware);
          s = s.filter((i) => typeof i == "string");
          for (const i of s) typeof kr[i] == "function" && kr[i]();
          o && typeof nn[o] == "function" && nn[o]();
        });
    },
  }),
  _w = (e) => e === "defer" || e === !1;
function xw(...e) {
  var p;
  const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  typeof e[0] != "string" && e.unshift(t);
  let [n, r, o = {}] = e;
  if (typeof n != "string") throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if (typeof r != "function") throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  const s = Te(),
    i = r,
    c = () => jn.value,
    a = () => (s.isHydrating ? s.payload.data[n] : s.static.data[n]);
  (o.server = o.server ?? !0),
    (o.default = o.default ?? c),
    (o.getCachedData = o.getCachedData ?? a),
    (o.lazy = o.lazy ?? !1),
    (o.immediate = o.immediate ?? !0),
    (o.deep = o.deep ?? jn.deep),
    (o.dedupe = o.dedupe ?? "cancel");
  const u = () => o.getCachedData(n, s) != null;
  if (!s._asyncData[n] || !o.immediate) {
    (p = s.payload._errors)[n] ?? (p[n] = jn.errorValue);
    const b = o.deep ? ie : cn;
    s._asyncData[n] = {
      data: b(o.getCachedData(n, s) ?? o.default()),
      pending: ie(!u()),
      error: ba(s.payload._errors, n),
      status: ie("idle"),
      _default: o.default,
    };
  }
  const l = { ...s._asyncData[n] };
  delete l._default,
    (l.refresh = l.execute =
      (b = {}) => {
        if (s._asyncDataPromises[n]) {
          if (_w(b.dedupe ?? o.dedupe)) return s._asyncDataPromises[n];
          s._asyncDataPromises[n].cancelled = !0;
        }
        if ((b._initial || (s.isHydrating && b._initial !== !1)) && u())
          return Promise.resolve(o.getCachedData(n, s));
        (l.pending.value = !0), (l.status.value = "pending");
        const E = new Promise((C, v) => {
          try {
            C(i(s));
          } catch (m) {
            v(m);
          }
        })
          .then(async (C) => {
            if (E.cancelled) return s._asyncDataPromises[n];
            let v = C;
            o.transform && (v = await o.transform(C)),
              o.pick && (v = Sw(v, o.pick)),
              (s.payload.data[n] = v),
              (l.data.value = v),
              (l.error.value = jn.errorValue),
              (l.status.value = "success");
          })
          .catch((C) => {
            if (E.cancelled) return s._asyncDataPromises[n];
            (l.error.value = Xr(C)), (l.data.value = ne(o.default())), (l.status.value = "error");
          })
          .finally(() => {
            E.cancelled || ((l.pending.value = !1), delete s._asyncDataPromises[n]);
          });
        return (s._asyncDataPromises[n] = E), s._asyncDataPromises[n];
      }),
    (l.clear = () => Ew(s, n));
  const f = () => l.refresh({ _initial: !0 }),
    d = o.server !== !1 && s.payload.serverRendered;
  {
    const b = hn();
    if (b && !b._nuxtOnBeforeMountCbs) {
      b._nuxtOnBeforeMountCbs = [];
      const v = b._nuxtOnBeforeMountCbs;
      xf(() => {
        v.forEach((m) => {
          m();
        }),
          v.splice(0, v.length);
      }),
        hs(() => v.splice(0, v.length));
    }
    d && s.isHydrating && (l.error.value || u())
      ? ((l.pending.value = !1), (l.status.value = l.error.value ? "error" : "success"))
      : b && ((s.payload.serverRendered && s.isHydrating) || o.lazy) && o.immediate
        ? b._nuxtOnBeforeMountCbs.push(f)
        : o.immediate && f();
    const E = Jr();
    if (o.watch) {
      const v = rt(o.watch, () => l.refresh());
      E && Mo(v);
    }
    const C = s.hook("app:data:refresh", async (v) => {
      (!v || v.includes(n)) && (await l.refresh());
    });
    E && Mo(C);
  }
  const h = Promise.resolve(s._asyncDataPromises[n]).then(() => l);
  return Object.assign(h, l), h;
}
function Ew(e, t) {
  t in e.payload.data && (e.payload.data[t] = void 0),
    t in e.payload._errors && (e.payload._errors[t] = jn.errorValue),
    e._asyncData[t] &&
      ((e._asyncData[t].data.value = void 0),
      (e._asyncData[t].error.value = jn.errorValue),
      (e._asyncData[t].pending.value = !1),
      (e._asyncData[t].status.value = "idle")),
    t in e._asyncDataPromises &&
      ((e._asyncDataPromises[t].cancelled = !0), (e._asyncDataPromises[t] = void 0));
}
function Sw(e, t) {
  const n = {};
  for (const r of t) n[r] = e[r];
  return n;
}
const Cw = "$s";
function Tw(...e) {
  const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  typeof e[0] != "string" && e.unshift(t);
  const [n, r] = e;
  if (!n || typeof n != "string")
    throw new TypeError("[nuxt] [useState] key must be a string: " + n);
  if (r !== void 0 && typeof r != "function")
    throw new Error("[nuxt] [useState] init must be a function: " + r);
  const o = Cw + n,
    s = Te(),
    i = ba(s.payload.state, o);
  if (i.value === void 0 && r) {
    const c = r();
    if (Ie(c)) return (s.payload.state[o] = c), c;
    i.value = c;
  }
  return i;
}
function kw(e = {}) {
  const t = e.path || window.location.pathname;
  let n = {};
  try {
    n = Vo(sessionStorage.getItem("nuxt:reload") || "{}");
  } catch {}
  if (
    e.force ||
    (n == null ? void 0 : n.path) !== t ||
    (n == null ? void 0 : n.expires) < Date.now()
  ) {
    try {
      sessionStorage.setItem(
        "nuxt:reload",
        JSON.stringify({ path: t, expires: Date.now() + (e.ttl ?? 1e4) }),
      );
    } catch {}
    if (e.persistState)
      try {
        sessionStorage.setItem("nuxt:reload:state", JSON.stringify({ state: Te().payload.state }));
      } catch {}
    window.location.pathname !== t ? (window.location.href = t) : window.location.reload();
  }
}
const ck = Symbol.for("nuxt:client-only"),
  Ys = new WeakMap();
function Aw(e) {
  if (Ys.has(e)) return Ys.get(e);
  const t = { ...e };
  return (
    t.render
      ? (t.render = (n, r, o, s, i, c) => {
          var a;
          if (s.mounted$ ?? n.mounted$) {
            const u = (a = e.render) == null ? void 0 : a.bind(n)(n, r, o, s, i, c);
            return u.children === null || typeof u.children == "string" ? bt(u) : Ue(u);
          } else {
            const u = jl(n._.vnode.el ?? null) ?? ["<div></div>"];
            return Nc(u.join(""), u.length);
          }
        })
      : t.template &&
        (t.template = `
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),
    (t.setup = (n, r) => {
      var a;
      const o = hn(),
        s = { ...o.attrs },
        i = Rw(o);
      for (const u in s) delete o.attrs[u];
      const c = ie(!1);
      return (
        Gn(() => {
          Object.assign(o.attrs, s), (o.vnode.dirs = i), (c.value = !0);
        }),
        Promise.resolve(((a = e.setup) == null ? void 0 : a.call(e, n, r)) || {}).then((u) =>
          typeof u != "function"
            ? ((u = u || {}), (u.mounted$ = c), u)
            : (...l) => {
                if (c.value) {
                  const f = u(...l);
                  return f.children === null || typeof f.children == "string" ? bt(f) : Ue(f);
                } else {
                  const f = jl((o == null ? void 0 : o.vnode.el) ?? null) ?? ["<div></div>"];
                  return Nc(f.join(""), f.length);
                }
              },
        )
      );
    }),
    Ys.set(e, t),
    t
  );
}
function Rw(e) {
  if (!e || !e.vnode.dirs) return null;
  const t = e.vnode.dirs;
  return (e.vnode.dirs = null), t;
}
const Iw = {
    ui: {
      primary: "purple",
      gray: "cool",
      modal: {
        width: "w-auto sm:max-w-none",
        container: "items-center",
        overlay: { background: "bg-black/75 dark:bg-black/75" },
        background: "dark:bg-gray-800",
      },
      slideover: {
        overlay: { background: "bg-black/75 dark:bg-black/75" },
        background: "bg-white dark:bg-gray-800",
      },
      card: { background: "dark:bg-gray-800" },
      container: { base: "py-5" },
      tooltip: { wrapper: "flex justify-center items-center", strategy: "override" },
      kbd: { default: { size: "md" } },
    },
  },
  Pw = {
    nuxt: {},
    icon: {
      provider: "iconify",
      class: "",
      aliases: {},
      iconifyApiEndpoint: "https://api.iconify.design",
      localApiEndpoint: "/api/_nuxt_icon",
      fallbackToApi: !0,
      cssSelectorPrefix: "i-",
      cssWherePseudo: !0,
      mode: "css",
      attrs: { "aria-hidden": !0 },
      collections: [
        "academicons",
        "akar-icons",
        "ant-design",
        "arcticons",
        "basil",
        "bi",
        "bitcoin-icons",
        "bpmn",
        "brandico",
        "bx",
        "bxl",
        "bxs",
        "bytesize",
        "carbon",
        "catppuccin",
        "cbi",
        "charm",
        "ci",
        "cib",
        "cif",
        "cil",
        "circle-flags",
        "circum",
        "clarity",
        "codicon",
        "covid",
        "cryptocurrency",
        "cryptocurrency-color",
        "dashicons",
        "devicon",
        "devicon-plain",
        "ei",
        "el",
        "emojione",
        "emojione-monotone",
        "emojione-v1",
        "entypo",
        "entypo-social",
        "eos-icons",
        "ep",
        "et",
        "eva",
        "f7",
        "fa",
        "fa-brands",
        "fa-regular",
        "fa-solid",
        "fa6-brands",
        "fa6-regular",
        "fa6-solid",
        "fad",
        "fe",
        "feather",
        "file-icons",
        "flag",
        "flagpack",
        "flat-color-icons",
        "flat-ui",
        "flowbite",
        "fluent",
        "fluent-emoji",
        "fluent-emoji-flat",
        "fluent-emoji-high-contrast",
        "fluent-mdl2",
        "fontelico",
        "fontisto",
        "formkit",
        "foundation",
        "fxemoji",
        "gala",
        "game-icons",
        "geo",
        "gg",
        "gis",
        "gravity-ui",
        "gridicons",
        "grommet-icons",
        "guidance",
        "healthicons",
        "heroicons",
        "heroicons-outline",
        "heroicons-solid",
        "hugeicons",
        "humbleicons",
        "ic",
        "icomoon-free",
        "icon-park",
        "icon-park-outline",
        "icon-park-solid",
        "icon-park-twotone",
        "iconamoon",
        "iconoir",
        "icons8",
        "il",
        "ion",
        "iwwa",
        "jam",
        "la",
        "lets-icons",
        "line-md",
        "logos",
        "ls",
        "lucide",
        "mage",
        "majesticons",
        "maki",
        "map",
        "marketeq",
        "material-symbols",
        "material-symbols-light",
        "mdi",
        "mdi-light",
        "medical-icon",
        "memory",
        "meteocons",
        "mi",
        "mingcute",
        "mono-icons",
        "mynaui",
        "nimbus",
        "nonicons",
        "noto",
        "noto-v1",
        "octicon",
        "oi",
        "ooui",
        "openmoji",
        "oui",
        "pajamas",
        "pepicons",
        "pepicons-pencil",
        "pepicons-pop",
        "pepicons-print",
        "ph",
        "pixelarticons",
        "prime",
        "ps",
        "quill",
        "radix-icons",
        "raphael",
        "ri",
        "rivet-icons",
        "si-glyph",
        "simple-icons",
        "simple-line-icons",
        "skill-icons",
        "solar",
        "streamline",
        "streamline-emojis",
        "subway",
        "svg-spinners",
        "system-uicons",
        "tabler",
        "tdesign",
        "teenyicons",
        "token",
        "token-branded",
        "topcoat",
        "twemoji",
        "typcn",
        "uil",
        "uim",
        "uis",
        "uit",
        "uiw",
        "unjs",
        "vaadin",
        "vs",
        "vscode-icons",
        "websymbol",
        "weui",
        "whh",
        "wi",
        "wpf",
        "zmdi",
        "zondicons",
      ],
    },
    ui: {
      primary: "green",
      gray: "cool",
      colors: [
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
        "primary",
      ],
      strategy: "merge",
    },
  },
  Ow = W0(Iw, Pw);
function th() {
  const e = Te();
  return e._appConfig || (e._appConfig = _t(Ow)), e._appConfig;
}
var nh = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: "normal",
    autoplay: !0,
    timelineOffset: 0,
  },
  Ua = { duration: 1e3, delay: 0, endDelay: 0, easing: "easeOutElastic(1, .5)", round: 0 },
  Mw = [
    "translateX",
    "translateY",
    "translateZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "perspective",
    "matrix",
    "matrix3d",
  ],
  Qo = { CSS: {}, springs: {} };
function kt(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Ar(e, t) {
  return e.indexOf(t) > -1;
}
function Qs(e, t) {
  return e.apply(null, t);
}
var G = {
  arr: function (e) {
    return Array.isArray(e);
  },
  obj: function (e) {
    return Ar(Object.prototype.toString.call(e), "Object");
  },
  pth: function (e) {
    return G.obj(e) && e.hasOwnProperty("totalLength");
  },
  svg: function (e) {
    return e instanceof SVGElement;
  },
  inp: function (e) {
    return e instanceof HTMLInputElement;
  },
  dom: function (e) {
    return e.nodeType || G.svg(e);
  },
  str: function (e) {
    return typeof e == "string";
  },
  fnc: function (e) {
    return typeof e == "function";
  },
  und: function (e) {
    return typeof e > "u";
  },
  nil: function (e) {
    return G.und(e) || e === null;
  },
  hex: function (e) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
  },
  rgb: function (e) {
    return /^rgb/.test(e);
  },
  hsl: function (e) {
    return /^hsl/.test(e);
  },
  col: function (e) {
    return G.hex(e) || G.rgb(e) || G.hsl(e);
  },
  key: function (e) {
    return !nh.hasOwnProperty(e) && !Ua.hasOwnProperty(e) && e !== "targets" && e !== "keyframes";
  },
};
function rh(e) {
  var t = /\(([^)]+)\)/.exec(e);
  return t
    ? t[1].split(",").map(function (n) {
        return parseFloat(n);
      })
    : [];
}
function oh(e, t) {
  var n = rh(e),
    r = kt(G.und(n[0]) ? 1 : n[0], 0.1, 100),
    o = kt(G.und(n[1]) ? 100 : n[1], 0.1, 100),
    s = kt(G.und(n[2]) ? 10 : n[2], 0.1, 100),
    i = kt(G.und(n[3]) ? 0 : n[3], 0.1, 100),
    c = Math.sqrt(o / r),
    a = s / (2 * Math.sqrt(o * r)),
    u = a < 1 ? c * Math.sqrt(1 - a * a) : 0,
    l = 1,
    f = a < 1 ? (a * c + -i) / u : -i + c;
  function d(p) {
    var b = t ? (t * p) / 1e3 : p;
    return (
      a < 1
        ? (b = Math.exp(-b * a * c) * (l * Math.cos(u * b) + f * Math.sin(u * b)))
        : (b = (l + f * b) * Math.exp(-b * c)),
      p === 0 || p === 1 ? p : 1 - b
    );
  }
  function h() {
    var p = Qo.springs[e];
    if (p) return p;
    for (var b = 1 / 6, E = 0, C = 0; ; )
      if (((E += b), d(E) === 1)) {
        if ((C++, C >= 16)) break;
      } else C = 0;
    var v = E * b * 1e3;
    return (Qo.springs[e] = v), v;
  }
  return t ? d : h;
}
function Lw(e) {
  return (
    e === void 0 && (e = 10),
    function (t) {
      return Math.ceil(kt(t, 1e-6, 1) * e) * (1 / e);
    }
  );
}
var $w = (function () {
    var e = 11,
      t = 1 / (e - 1);
    function n(l, f) {
      return 1 - 3 * f + 3 * l;
    }
    function r(l, f) {
      return 3 * f - 6 * l;
    }
    function o(l) {
      return 3 * l;
    }
    function s(l, f, d) {
      return ((n(f, d) * l + r(f, d)) * l + o(f)) * l;
    }
    function i(l, f, d) {
      return 3 * n(f, d) * l * l + 2 * r(f, d) * l + o(f);
    }
    function c(l, f, d, h, p) {
      var b,
        E,
        C = 0;
      do (E = f + (d - f) / 2), (b = s(E, h, p) - l), b > 0 ? (d = E) : (f = E);
      while (Math.abs(b) > 1e-7 && ++C < 10);
      return E;
    }
    function a(l, f, d, h) {
      for (var p = 0; p < 4; ++p) {
        var b = i(f, d, h);
        if (b === 0) return f;
        var E = s(f, d, h) - l;
        f -= E / b;
      }
      return f;
    }
    function u(l, f, d, h) {
      if (!(0 <= l && l <= 1 && 0 <= d && d <= 1)) return;
      var p = new Float32Array(e);
      if (l !== f || d !== h) for (var b = 0; b < e; ++b) p[b] = s(b * t, l, d);
      function E(C) {
        for (var v = 0, m = 1, y = e - 1; m !== y && p[m] <= C; ++m) v += t;
        --m;
        var x = (C - p[m]) / (p[m + 1] - p[m]),
          _ = v + x * t,
          A = i(_, l, d);
        return A >= 0.001 ? a(C, _, l, d) : A === 0 ? _ : c(C, v, v + t, l, d);
      }
      return function (C) {
        return (l === f && d === h) || C === 0 || C === 1 ? C : s(E(C), f, h);
      };
    }
    return u;
  })(),
  sh = (function () {
    var e = {
        linear: function () {
          return function (r) {
            return r;
          };
        },
      },
      t = {
        Sine: function () {
          return function (r) {
            return 1 - Math.cos((r * Math.PI) / 2);
          };
        },
        Expo: function () {
          return function (r) {
            return r ? Math.pow(2, 10 * r - 10) : 0;
          };
        },
        Circ: function () {
          return function (r) {
            return 1 - Math.sqrt(1 - r * r);
          };
        },
        Back: function () {
          return function (r) {
            return r * r * (3 * r - 2);
          };
        },
        Bounce: function () {
          return function (r) {
            for (var o, s = 4; r < ((o = Math.pow(2, --s)) - 1) / 11; );
            return 1 / Math.pow(4, 3 - s) - 7.5625 * Math.pow((o * 3 - 2) / 22 - r, 2);
          };
        },
        Elastic: function (r, o) {
          r === void 0 && (r = 1), o === void 0 && (o = 0.5);
          var s = kt(r, 1, 10),
            i = kt(o, 0.1, 2);
          return function (c) {
            return c === 0 || c === 1
              ? c
              : -s *
                  Math.pow(2, 10 * (c - 1)) *
                  Math.sin(((c - 1 - (i / (Math.PI * 2)) * Math.asin(1 / s)) * (Math.PI * 2)) / i);
          };
        },
      },
      n = ["Quad", "Cubic", "Quart", "Quint"];
    return (
      n.forEach(function (r, o) {
        t[r] = function () {
          return function (s) {
            return Math.pow(s, o + 2);
          };
        };
      }),
      Object.keys(t).forEach(function (r) {
        var o = t[r];
        (e["easeIn" + r] = o),
          (e["easeOut" + r] = function (s, i) {
            return function (c) {
              return 1 - o(s, i)(1 - c);
            };
          }),
          (e["easeInOut" + r] = function (s, i) {
            return function (c) {
              return c < 0.5 ? o(s, i)(c * 2) / 2 : 1 - o(s, i)(c * -2 + 2) / 2;
            };
          }),
          (e["easeOutIn" + r] = function (s, i) {
            return function (c) {
              return c < 0.5 ? (1 - o(s, i)(1 - c * 2)) / 2 : (o(s, i)(c * 2 - 1) + 1) / 2;
            };
          });
      }),
      e
    );
  })();
function Fa(e, t) {
  if (G.fnc(e)) return e;
  var n = e.split("(")[0],
    r = sh[n],
    o = rh(e);
  switch (n) {
    case "spring":
      return oh(e, t);
    case "cubicBezier":
      return Qs($w, o);
    case "steps":
      return Qs(Lw, o);
    default:
      return Qs(r, o);
  }
}
function ih(e) {
  try {
    var t = document.querySelectorAll(e);
    return t;
  } catch {
    return;
  }
}
function xs(e, t) {
  for (
    var n = e.length, r = arguments.length >= 2 ? arguments[1] : void 0, o = [], s = 0;
    s < n;
    s++
  )
    if (s in e) {
      var i = e[s];
      t.call(r, i, s, e) && o.push(i);
    }
  return o;
}
function Es(e) {
  return e.reduce(function (t, n) {
    return t.concat(G.arr(n) ? Es(n) : n);
  }, []);
}
function Bl(e) {
  return G.arr(e)
    ? e
    : (G.str(e) && (e = ih(e) || e),
      e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
}
function Ba(e, t) {
  return e.some(function (n) {
    return n === t;
  });
}
function Wa(e) {
  var t = {};
  for (var n in e) t[n] = e[n];
  return t;
}
function Ui(e, t) {
  var n = Wa(e);
  for (var r in e) n[r] = t.hasOwnProperty(r) ? t[r] : e[r];
  return n;
}
function Ss(e, t) {
  var n = Wa(e);
  for (var r in t) n[r] = G.und(e[r]) ? t[r] : e[r];
  return n;
}
function Hw(e) {
  var t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
  return t ? "rgba(" + t[1] + ",1)" : e;
}
function Nw(e) {
  var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    n = e.replace(t, function (c, a, u, l) {
      return a + a + u + u + l + l;
    }),
    r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),
    o = parseInt(r[1], 16),
    s = parseInt(r[2], 16),
    i = parseInt(r[3], 16);
  return "rgba(" + o + "," + s + "," + i + ",1)";
}
function Dw(e) {
  var t =
      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
    n = parseInt(t[1], 10) / 360,
    r = parseInt(t[2], 10) / 100,
    o = parseInt(t[3], 10) / 100,
    s = t[4] || 1;
  function i(d, h, p) {
    return (
      p < 0 && (p += 1),
      p > 1 && (p -= 1),
      p < 1 / 6
        ? d + (h - d) * 6 * p
        : p < 1 / 2
          ? h
          : p < 2 / 3
            ? d + (h - d) * (2 / 3 - p) * 6
            : d
    );
  }
  var c, a, u;
  if (r == 0) c = a = u = o;
  else {
    var l = o < 0.5 ? o * (1 + r) : o + r - o * r,
      f = 2 * o - l;
    (c = i(f, l, n + 1 / 3)), (a = i(f, l, n)), (u = i(f, l, n - 1 / 3));
  }
  return "rgba(" + c * 255 + "," + a * 255 + "," + u * 255 + "," + s + ")";
}
function jw(e) {
  if (G.rgb(e)) return Hw(e);
  if (G.hex(e)) return Nw(e);
  if (G.hsl(e)) return Dw(e);
}
function Ft(e) {
  var t =
    /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
      e,
    );
  if (t) return t[1];
}
function Uw(e) {
  if (Ar(e, "translate") || e === "perspective") return "px";
  if (Ar(e, "rotate") || Ar(e, "skew")) return "deg";
}
function Fi(e, t) {
  return G.fnc(e) ? e(t.target, t.id, t.total) : e;
}
function At(e, t) {
  return e.getAttribute(t);
}
function Ka(e, t, n) {
  var r = Ft(t);
  if (Ba([n, "deg", "rad", "turn"], r)) return t;
  var o = Qo.CSS[t + n];
  if (!G.und(o)) return o;
  var s = 100,
    i = document.createElement(e.tagName),
    c = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  c.appendChild(i), (i.style.position = "absolute"), (i.style.width = s + n);
  var a = s / i.offsetWidth;
  c.removeChild(i);
  var u = a * parseFloat(t);
  return (Qo.CSS[t + n] = u), u;
}
function ah(e, t, n) {
  if (t in e.style) {
    var r = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
      o = e.style[t] || getComputedStyle(e).getPropertyValue(r) || "0";
    return n ? Ka(e, o, n) : o;
  }
}
function Va(e, t) {
  if (G.dom(e) && !G.inp(e) && (!G.nil(At(e, t)) || (G.svg(e) && e[t]))) return "attribute";
  if (G.dom(e) && Ba(Mw, t)) return "transform";
  if (G.dom(e) && t !== "transform" && ah(e, t)) return "css";
  if (e[t] != null) return "object";
}
function ch(e) {
  if (G.dom(e)) {
    for (
      var t = e.style.transform || "", n = /(\w+)\(([^)]*)\)/g, r = new Map(), o;
      (o = n.exec(t));

    )
      r.set(o[1], o[2]);
    return r;
  }
}
function Fw(e, t, n, r) {
  var o = Ar(t, "scale") ? 1 : 0 + Uw(t),
    s = ch(e).get(t) || o;
  return n && (n.transforms.list.set(t, s), (n.transforms.last = t)), r ? Ka(e, s, r) : s;
}
function za(e, t, n, r) {
  switch (Va(e, t)) {
    case "transform":
      return Fw(e, t, r, n);
    case "css":
      return ah(e, t, n);
    case "attribute":
      return At(e, t);
    default:
      return e[t] || 0;
  }
}
function Ja(e, t) {
  var n = /^(\*=|\+=|-=)/.exec(e);
  if (!n) return e;
  var r = Ft(e) || 0,
    o = parseFloat(t),
    s = parseFloat(e.replace(n[0], ""));
  switch (n[0][0]) {
    case "+":
      return o + s + r;
    case "-":
      return o - s + r;
    case "*":
      return o * s + r;
  }
}
function lh(e, t) {
  if (G.col(e)) return jw(e);
  if (/\s/g.test(e)) return e;
  var n = Ft(e),
    r = n ? e.substr(0, e.length - n.length) : e;
  return t ? r + t : r;
}
function qa(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Bw(e) {
  return Math.PI * 2 * At(e, "r");
}
function Ww(e) {
  return At(e, "width") * 2 + At(e, "height") * 2;
}
function Kw(e) {
  return qa({ x: At(e, "x1"), y: At(e, "y1") }, { x: At(e, "x2"), y: At(e, "y2") });
}
function uh(e) {
  for (var t = e.points, n = 0, r, o = 0; o < t.numberOfItems; o++) {
    var s = t.getItem(o);
    o > 0 && (n += qa(r, s)), (r = s);
  }
  return n;
}
function Vw(e) {
  var t = e.points;
  return uh(e) + qa(t.getItem(t.numberOfItems - 1), t.getItem(0));
}
function fh(e) {
  if (e.getTotalLength) return e.getTotalLength();
  switch (e.tagName.toLowerCase()) {
    case "circle":
      return Bw(e);
    case "rect":
      return Ww(e);
    case "line":
      return Kw(e);
    case "polyline":
      return uh(e);
    case "polygon":
      return Vw(e);
  }
}
function zw(e) {
  var t = fh(e);
  return e.setAttribute("stroke-dasharray", t), t;
}
function Jw(e) {
  for (var t = e.parentNode; G.svg(t) && G.svg(t.parentNode); ) t = t.parentNode;
  return t;
}
function dh(e, t) {
  var n = t || {},
    r = n.el || Jw(e),
    o = r.getBoundingClientRect(),
    s = At(r, "viewBox"),
    i = o.width,
    c = o.height,
    a = n.viewBox || (s ? s.split(" ") : [0, 0, i, c]);
  return { el: r, viewBox: a, x: a[0] / 1, y: a[1] / 1, w: i, h: c, vW: a[2], vH: a[3] };
}
function qw(e, t) {
  var n = G.str(e) ? ih(e)[0] : e,
    r = t || 100;
  return function (o) {
    return { property: o, el: n, svg: dh(n), totalLength: fh(n) * (r / 100) };
  };
}
function Gw(e, t, n) {
  function r(l) {
    l === void 0 && (l = 0);
    var f = t + l >= 1 ? t + l : 0;
    return e.el.getPointAtLength(f);
  }
  var o = dh(e.el, e.svg),
    s = r(),
    i = r(-1),
    c = r(1),
    a = n ? 1 : o.w / o.vW,
    u = n ? 1 : o.h / o.vH;
  switch (e.property) {
    case "x":
      return (s.x - o.x) * a;
    case "y":
      return (s.y - o.y) * u;
    case "angle":
      return (Math.atan2(c.y - i.y, c.x - i.x) * 180) / Math.PI;
  }
}
function Wl(e, t) {
  var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
    r = lh(G.pth(e) ? e.totalLength : e, t) + "";
  return {
    original: r,
    numbers: r.match(n) ? r.match(n).map(Number) : [0],
    strings: G.str(e) || t ? r.split(n) : [],
  };
}
function Ga(e) {
  var t = e ? Es(G.arr(e) ? e.map(Bl) : Bl(e)) : [];
  return xs(t, function (n, r, o) {
    return o.indexOf(n) === r;
  });
}
function hh(e) {
  var t = Ga(e);
  return t.map(function (n, r) {
    return { target: n, id: r, total: t.length, transforms: { list: ch(n) } };
  });
}
function Yw(e, t) {
  var n = Wa(t);
  if ((/^spring/.test(n.easing) && (n.duration = oh(n.easing)), G.arr(e))) {
    var r = e.length,
      o = r === 2 && !G.obj(e[0]);
    o ? (e = { value: e }) : G.fnc(t.duration) || (n.duration = t.duration / r);
  }
  var s = G.arr(e) ? e : [e];
  return s
    .map(function (i, c) {
      var a = G.obj(i) && !G.pth(i) ? i : { value: i };
      return (
        G.und(a.delay) && (a.delay = c ? 0 : t.delay),
        G.und(a.endDelay) && (a.endDelay = c === s.length - 1 ? t.endDelay : 0),
        a
      );
    })
    .map(function (i) {
      return Ss(i, n);
    });
}
function Qw(e) {
  for (
    var t = xs(
        Es(
          e.map(function (s) {
            return Object.keys(s);
          }),
        ),
        function (s) {
          return G.key(s);
        },
      ).reduce(function (s, i) {
        return s.indexOf(i) < 0 && s.push(i), s;
      }, []),
      n = {},
      r = function (s) {
        var i = t[s];
        n[i] = e.map(function (c) {
          var a = {};
          for (var u in c) G.key(u) ? u == i && (a.value = c[u]) : (a[u] = c[u]);
          return a;
        });
      },
      o = 0;
    o < t.length;
    o++
  )
    r(o);
  return n;
}
function Xw(e, t) {
  var n = [],
    r = t.keyframes;
  r && (t = Ss(Qw(r), t));
  for (var o in t) G.key(o) && n.push({ name: o, tweens: Yw(t[o], e) });
  return n;
}
function Zw(e, t) {
  var n = {};
  for (var r in e) {
    var o = Fi(e[r], t);
    G.arr(o) &&
      ((o = o.map(function (s) {
        return Fi(s, t);
      })),
      o.length === 1 && (o = o[0])),
      (n[r] = o);
  }
  return (n.duration = parseFloat(n.duration)), (n.delay = parseFloat(n.delay)), n;
}
function e_(e, t) {
  var n;
  return e.tweens.map(function (r) {
    var o = Zw(r, t),
      s = o.value,
      i = G.arr(s) ? s[1] : s,
      c = Ft(i),
      a = za(t.target, e.name, c, t),
      u = n ? n.to.original : a,
      l = G.arr(s) ? s[0] : u,
      f = Ft(l) || Ft(a),
      d = c || f;
    return (
      G.und(i) && (i = u),
      (o.from = Wl(l, d)),
      (o.to = Wl(Ja(i, l), d)),
      (o.start = n ? n.end : 0),
      (o.end = o.start + o.delay + o.duration + o.endDelay),
      (o.easing = Fa(o.easing, o.duration)),
      (o.isPath = G.pth(s)),
      (o.isPathTargetInsideSVG = o.isPath && G.svg(t.target)),
      (o.isColor = G.col(o.from.original)),
      o.isColor && (o.round = 1),
      (n = o),
      o
    );
  });
}
var ph = {
  css: function (e, t, n) {
    return (e.style[t] = n);
  },
  attribute: function (e, t, n) {
    return e.setAttribute(t, n);
  },
  object: function (e, t, n) {
    return (e[t] = n);
  },
  transform: function (e, t, n, r, o) {
    if ((r.list.set(t, n), t === r.last || o)) {
      var s = "";
      r.list.forEach(function (i, c) {
        s += c + "(" + i + ") ";
      }),
        (e.style.transform = s);
    }
  },
};
function gh(e, t) {
  var n = hh(e);
  n.forEach(function (r) {
    for (var o in t) {
      var s = Fi(t[o], r),
        i = r.target,
        c = Ft(s),
        a = za(i, o, c, r),
        u = c || Ft(a),
        l = Ja(lh(s, u), a),
        f = Va(i, o);
      ph[f](i, o, l, r.transforms, !0);
    }
  });
}
function t_(e, t) {
  var n = Va(e.target, t.name);
  if (n) {
    var r = e_(t, e),
      o = r[r.length - 1];
    return {
      type: n,
      property: t.name,
      animatable: e,
      tweens: r,
      duration: o.end,
      delay: r[0].delay,
      endDelay: o.endDelay,
    };
  }
}
function n_(e, t) {
  return xs(
    Es(
      e.map(function (n) {
        return t.map(function (r) {
          return t_(n, r);
        });
      }),
    ),
    function (n) {
      return !G.und(n);
    },
  );
}
function mh(e, t) {
  var n = e.length,
    r = function (s) {
      return s.timelineOffset ? s.timelineOffset : 0;
    },
    o = {};
  return (
    (o.duration = n
      ? Math.max.apply(
          Math,
          e.map(function (s) {
            return r(s) + s.duration;
          }),
        )
      : t.duration),
    (o.delay = n
      ? Math.min.apply(
          Math,
          e.map(function (s) {
            return r(s) + s.delay;
          }),
        )
      : t.delay),
    (o.endDelay = n
      ? o.duration -
        Math.max.apply(
          Math,
          e.map(function (s) {
            return r(s) + s.duration - s.endDelay;
          }),
        )
      : t.endDelay),
    o
  );
}
var Kl = 0;
function r_(e) {
  var t = Ui(nh, e),
    n = Ui(Ua, e),
    r = Xw(n, e),
    o = hh(e.targets),
    s = n_(o, r),
    i = mh(s, n),
    c = Kl;
  return (
    Kl++,
    Ss(t, {
      id: c,
      children: [],
      animatables: o,
      animations: s,
      duration: i.duration,
      delay: i.delay,
      endDelay: i.endDelay,
    })
  );
}
var yt = [],
  yh = (function () {
    var e;
    function t() {
      !e &&
        (!Vl() || !Pe.suspendWhenDocumentHidden) &&
        yt.length > 0 &&
        (e = requestAnimationFrame(n));
    }
    function n(o) {
      for (var s = yt.length, i = 0; i < s; ) {
        var c = yt[i];
        c.paused ? (yt.splice(i, 1), s--) : (c.tick(o), i++);
      }
      e = i > 0 ? requestAnimationFrame(n) : void 0;
    }
    function r() {
      Pe.suspendWhenDocumentHidden &&
        (Vl()
          ? (e = cancelAnimationFrame(e))
          : (yt.forEach(function (o) {
              return o._onDocumentVisibility();
            }),
            yh()));
    }
    return typeof document < "u" && document.addEventListener("visibilitychange", r), t;
  })();
function Vl() {
  return !!document && document.hidden;
}
function Pe(e) {
  e === void 0 && (e = {});
  var t = 0,
    n = 0,
    r = 0,
    o,
    s = 0,
    i = null;
  function c(v) {
    var m =
      window.Promise &&
      new Promise(function (y) {
        return (i = y);
      });
    return (v.finished = m), m;
  }
  var a = r_(e);
  c(a);
  function u() {
    var v = a.direction;
    v !== "alternate" && (a.direction = v !== "normal" ? "normal" : "reverse"),
      (a.reversed = !a.reversed),
      o.forEach(function (m) {
        return (m.reversed = a.reversed);
      });
  }
  function l(v) {
    return a.reversed ? a.duration - v : v;
  }
  function f() {
    (t = 0), (n = l(a.currentTime) * (1 / Pe.speed));
  }
  function d(v, m) {
    m && m.seek(v - m.timelineOffset);
  }
  function h(v) {
    if (a.reversePlayback) for (var y = s; y--; ) d(v, o[y]);
    else for (var m = 0; m < s; m++) d(v, o[m]);
  }
  function p(v) {
    for (var m = 0, y = a.animations, x = y.length; m < x; ) {
      var _ = y[m],
        A = _.animatable,
        P = _.tweens,
        S = P.length - 1,
        k = P[S];
      S &&
        (k =
          xs(P, function (ae) {
            return v < ae.end;
          })[0] || k);
      for (
        var F = kt(v - k.start - k.delay, 0, k.duration) / k.duration,
          I = isNaN(F) ? 1 : k.easing(F),
          W = k.to.strings,
          ee = k.round,
          te = [],
          j = k.to.numbers.length,
          q = void 0,
          V = 0;
        V < j;
        V++
      ) {
        var de = void 0,
          Ne = k.to.numbers[V],
          Oe = k.from.numbers[V] || 0;
        k.isPath ? (de = Gw(k.value, I * Ne, k.isPathTargetInsideSVG)) : (de = Oe + I * (Ne - Oe)),
          ee && ((k.isColor && V > 2) || (de = Math.round(de * ee) / ee)),
          te.push(de);
      }
      var ke = W.length;
      if (!ke) q = te[0];
      else {
        q = W[0];
        for (var Ge = 0; Ge < ke; Ge++) {
          W[Ge];
          var L = W[Ge + 1],
            le = te[Ge];
          isNaN(le) || (L ? (q += le + L) : (q += le + " "));
        }
      }
      ph[_.type](A.target, _.property, q, A.transforms), (_.currentValue = q), m++;
    }
  }
  function b(v) {
    a[v] && !a.passThrough && a[v](a);
  }
  function E() {
    a.remaining && a.remaining !== !0 && a.remaining--;
  }
  function C(v) {
    var m = a.duration,
      y = a.delay,
      x = m - a.endDelay,
      _ = l(v);
    (a.progress = kt((_ / m) * 100, 0, 100)),
      (a.reversePlayback = _ < a.currentTime),
      o && h(_),
      !a.began && a.currentTime > 0 && ((a.began = !0), b("begin")),
      !a.loopBegan && a.currentTime > 0 && ((a.loopBegan = !0), b("loopBegin")),
      _ <= y && a.currentTime !== 0 && p(0),
      ((_ >= x && a.currentTime !== m) || !m) && p(m),
      _ > y && _ < x
        ? (a.changeBegan || ((a.changeBegan = !0), (a.changeCompleted = !1), b("changeBegin")),
          b("change"),
          p(_))
        : a.changeBegan && ((a.changeCompleted = !0), (a.changeBegan = !1), b("changeComplete")),
      (a.currentTime = kt(_, 0, m)),
      a.began && b("update"),
      v >= m &&
        ((n = 0),
        E(),
        a.remaining
          ? ((t = r), b("loopComplete"), (a.loopBegan = !1), a.direction === "alternate" && u())
          : ((a.paused = !0),
            a.completed ||
              ((a.completed = !0),
              b("loopComplete"),
              b("complete"),
              !a.passThrough && "Promise" in window && (i(), c(a)))));
  }
  return (
    (a.reset = function () {
      var v = a.direction;
      (a.passThrough = !1),
        (a.currentTime = 0),
        (a.progress = 0),
        (a.paused = !0),
        (a.began = !1),
        (a.loopBegan = !1),
        (a.changeBegan = !1),
        (a.completed = !1),
        (a.changeCompleted = !1),
        (a.reversePlayback = !1),
        (a.reversed = v === "reverse"),
        (a.remaining = a.loop),
        (o = a.children),
        (s = o.length);
      for (var m = s; m--; ) a.children[m].reset();
      ((a.reversed && a.loop !== !0) || (v === "alternate" && a.loop === 1)) && a.remaining++,
        p(a.reversed ? a.duration : 0);
    }),
    (a._onDocumentVisibility = f),
    (a.set = function (v, m) {
      return gh(v, m), a;
    }),
    (a.tick = function (v) {
      (r = v), t || (t = r), C((r + (n - t)) * Pe.speed);
    }),
    (a.seek = function (v) {
      C(l(v));
    }),
    (a.pause = function () {
      (a.paused = !0), f();
    }),
    (a.play = function () {
      a.paused && (a.completed && a.reset(), (a.paused = !1), yt.push(a), f(), yh());
    }),
    (a.reverse = function () {
      u(), (a.completed = !a.reversed), f();
    }),
    (a.restart = function () {
      a.reset(), a.play();
    }),
    (a.remove = function (v) {
      var m = Ga(v);
      vh(m, a);
    }),
    a.reset(),
    a.autoplay && a.play(),
    a
  );
}
function zl(e, t) {
  for (var n = t.length; n--; ) Ba(e, t[n].animatable.target) && t.splice(n, 1);
}
function vh(e, t) {
  var n = t.animations,
    r = t.children;
  zl(e, n);
  for (var o = r.length; o--; ) {
    var s = r[o],
      i = s.animations;
    zl(e, i), !i.length && !s.children.length && r.splice(o, 1);
  }
  !n.length && !r.length && t.pause();
}
function o_(e) {
  for (var t = Ga(e), n = yt.length; n--; ) {
    var r = yt[n];
    vh(t, r);
  }
}
function s_(e, t) {
  t === void 0 && (t = {});
  var n = t.direction || "normal",
    r = t.easing ? Fa(t.easing) : null,
    o = t.grid,
    s = t.axis,
    i = t.from || 0,
    c = i === "first",
    a = i === "center",
    u = i === "last",
    l = G.arr(e),
    f = parseFloat(l ? e[0] : e),
    d = l ? parseFloat(e[1]) : 0,
    h = Ft(l ? e[1] : e) || 0,
    p = t.start || 0 + (l ? f : 0),
    b = [],
    E = 0;
  return function (C, v, m) {
    if ((c && (i = 0), a && (i = (m - 1) / 2), u && (i = m - 1), !b.length)) {
      for (var y = 0; y < m; y++) {
        if (!o) b.push(Math.abs(i - y));
        else {
          var x = a ? (o[0] - 1) / 2 : i % o[0],
            _ = a ? (o[1] - 1) / 2 : Math.floor(i / o[0]),
            A = y % o[0],
            P = Math.floor(y / o[0]),
            S = x - A,
            k = _ - P,
            F = Math.sqrt(S * S + k * k);
          s === "x" && (F = -S), s === "y" && (F = -k), b.push(F);
        }
        E = Math.max.apply(Math, b);
      }
      r &&
        (b = b.map(function (W) {
          return r(W / E) * E;
        })),
        n === "reverse" &&
          (b = b.map(function (W) {
            return s ? (W < 0 ? W * -1 : -W) : Math.abs(E - W);
          }));
    }
    var I = l ? (d - f) / E : f;
    return p + I * (Math.round(b[v] * 100) / 100) + h;
  };
}
function i_(e) {
  e === void 0 && (e = {});
  var t = Pe(e);
  return (
    (t.duration = 0),
    (t.add = function (n, r) {
      var o = yt.indexOf(t),
        s = t.children;
      o > -1 && yt.splice(o, 1);
      function i(d) {
        d.passThrough = !0;
      }
      for (var c = 0; c < s.length; c++) i(s[c]);
      var a = Ss(n, Ui(Ua, e));
      a.targets = a.targets || e.targets;
      var u = t.duration;
      (a.autoplay = !1),
        (a.direction = t.direction),
        (a.timelineOffset = G.und(r) ? u : Ja(r, u)),
        i(t),
        t.seek(a.timelineOffset);
      var l = Pe(a);
      i(l), s.push(l);
      var f = mh(s, e);
      return (
        (t.delay = f.delay),
        (t.endDelay = f.endDelay),
        (t.duration = f.duration),
        t.seek(0),
        t.reset(),
        t.autoplay && t.play(),
        t
      );
    }),
    t
  );
}
Pe.version = "3.2.1";
Pe.speed = 1;
Pe.suspendWhenDocumentHidden = !0;
Pe.running = yt;
Pe.remove = o_;
Pe.get = za;
Pe.set = gh;
Pe.convertPx = Ka;
Pe.path = qw;
Pe.setDashoffset = zw;
Pe.stagger = s_;
Pe.timeline = i_;
Pe.easing = Fa;
Pe.penner = sh;
Pe.random = function (e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
};
const a_ = We(() => ({ provide: { anime: Pe } })),
  c_ = !1;
function l_(e) {
  return Jr() ? (Mo(e), !0) : !1;
}
function u_(e) {
  let t = 0,
    n,
    r;
  const o = () => {
    (t -= 1), r && t <= 0 && (r.stop(), (n = void 0), (r = void 0));
  };
  return (...s) => ((t += 1), n || ((r = is(!0)), (n = r.run(() => e(...s)))), l_(o), n);
}
function Jl(e) {
  return typeof e == "function" ? e() : ne(e);
}
const lk = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const f_ = Object.prototype.toString,
  uk = (e) => f_.call(e) === "[object Object]",
  ql = () => {};
function d_(e, t) {
  function n(...r) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r }))
        .then(o)
        .catch(s);
    });
  }
  return n;
}
function h_(e, t = {}) {
  let n,
    r,
    o = ql;
  const s = (c) => {
    clearTimeout(c), o(), (o = ql);
  };
  return (c) => {
    const a = Jl(e),
      u = Jl(t.maxWait);
    return (
      n && s(n),
      a <= 0 || (u !== void 0 && u <= 0)
        ? (r && (s(r), (r = null)), Promise.resolve(c()))
        : new Promise((l, f) => {
            (o = t.rejectOnCancel ? f : l),
              u &&
                !r &&
                (r = setTimeout(() => {
                  n && s(n), (r = null), l(c());
                }, u)),
              (n = setTimeout(() => {
                r && s(r), (r = null), l(c());
              }, a));
          })
    );
  };
}
function fk(e, t = 200, n = {}) {
  return d_(h_(t, n), e);
}
const p_ = Symbol("nuxt-ui.slideover"),
  g_ = We((e) => {
    const t = cn({ component: "div", props: {} });
    e.vueApp.provide(p_, t);
  }),
  Ya = Symbol("nuxt-ui.modal");
function m_() {
  const e = Me(Ya),
    t = ie(!1);
  function n(i, c) {
    if (!e) throw new Error("useModal() is called without provider");
    (e.value = { component: i, props: c ?? {} }), (t.value = !0);
  }
  async function r() {
    e && (t.value = !1);
  }
  function o() {
    e.value = { component: "div", props: {} };
  }
  function s(i) {
    e && (e.value = { ...e.value, props: { ...e.value.props, ...i } });
  }
  return { open: n, close: r, reset: o, patch: s, isOpen: t };
}
const y_ = u_(m_),
  v_ = We((e) => {
    const t = cn({ component: "div", props: {} });
    e.vueApp.provide(Ya, t);
  }),
  Qa = "-";
function b_(e) {
  const t = __(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(i) {
    const c = i.split(Qa);
    return c[0] === "" && c.length !== 1 && c.shift(), bh(c, t) || w_(i);
  }
  function s(i, c) {
    const a = n[i] || [];
    return c && r[i] ? [...a, ...r[i]] : a;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: s };
}
function bh(e, t) {
  var i;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? bh(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const s = e.join(Qa);
  return (i = t.validators.find(({ validator: c }) => c(s))) == null ? void 0 : i.classGroupId;
}
const Gl = /^\[(.+)\]$/;
function w_(e) {
  if (Gl.test(e)) {
    const t = Gl.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function __(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    E_(Object.entries(e.classGroups), n).forEach(([s, i]) => {
      Bi(i, r, s, t);
    }),
    r
  );
}
function Bi(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Yl(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (x_(o)) {
        Bi(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Bi(i, Yl(t, s), n, r);
    });
  });
}
function Yl(e, t) {
  let n = e;
  return (
    t.split(Qa).forEach((r) => {
      n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function x_(e) {
  return e.isThemeGetter;
}
function E_(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((s) =>
          typeof s == "string"
            ? t + s
            : typeof s == "object"
              ? Object.fromEntries(Object.entries(s).map(([i, c]) => [t + i, c]))
              : s,
        );
        return [n, o];
      })
    : e;
}
function S_(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(s, i) {
    n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(s) {
      let i = n.get(s);
      if (i !== void 0) return i;
      if ((i = r.get(s)) !== void 0) return o(s, i), i;
    },
    set(s, i) {
      n.has(s) ? n.set(s, i) : o(s, i);
    },
  };
}
const wh = "!";
function C_(e) {
  const { separator: t, experimentalParseClassName: n } = e,
    r = t.length === 1,
    o = t[0],
    s = t.length;
  function i(c) {
    const a = [];
    let u = 0,
      l = 0,
      f;
    for (let E = 0; E < c.length; E++) {
      let C = c[E];
      if (u === 0) {
        if (C === o && (r || c.slice(E, E + s) === t)) {
          a.push(c.slice(l, E)), (l = E + s);
          continue;
        }
        if (C === "/") {
          f = E;
          continue;
        }
      }
      C === "[" ? u++ : C === "]" && u--;
    }
    const d = a.length === 0 ? c : c.substring(l),
      h = d.startsWith(wh),
      p = h ? d.substring(1) : d,
      b = f && f > l ? f - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: p,
      maybePostfixModifierPosition: b,
    };
  }
  return n
    ? function (a) {
        return n({ className: a, parseClassName: i });
      }
    : i;
}
function T_(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function k_(e) {
  return { cache: S_(e.cacheSize), parseClassName: C_(e), ...b_(e) };
}
const A_ = /\s+/;
function R_(e, t) {
  const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t,
    s = new Set();
  return e
    .trim()
    .split(A_)
    .map((i) => {
      const {
        modifiers: c,
        hasImportantModifier: a,
        baseClassName: u,
        maybePostfixModifierPosition: l,
      } = n(i);
      let f = !!l,
        d = r(f ? u.substring(0, l) : u);
      if (!d) {
        if (!f) return { isTailwindClass: !1, originalClassName: i };
        if (((d = r(u)), !d)) return { isTailwindClass: !1, originalClassName: i };
        f = !1;
      }
      const h = T_(c).join(":");
      return {
        isTailwindClass: !0,
        modifierId: a ? h + wh : h,
        classGroupId: d,
        originalClassName: i,
        hasPostfixModifier: f,
      };
    })
    .reverse()
    .filter((i) => {
      if (!i.isTailwindClass) return !0;
      const { modifierId: c, classGroupId: a, hasPostfixModifier: u } = i,
        l = c + a;
      return s.has(l) ? !1 : (s.add(l), o(a, u).forEach((f) => s.add(c + f)), !0);
    })
    .reverse()
    .map((i) => i.originalClassName)
    .join(" ");
}
function I_() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; ) (t = arguments[e++]) && (n = _h(t)) && (r && (r += " "), (r += n));
  return r;
}
function _h(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++) e[r] && (t = _h(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function Wi(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(a) {
    const u = t.reduce((l, f) => f(l), e());
    return (n = k_(u)), (r = n.cache.get), (o = n.cache.set), (s = c), c(a);
  }
  function c(a) {
    const u = r(a);
    if (u) return u;
    const l = R_(a, n);
    return o(a, l), l;
  }
  return function () {
    return s(I_.apply(null, arguments));
  };
}
function Se(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const xh = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  P_ = /^\d+\/\d+$/,
  O_ = new Set(["px", "full", "screen"]),
  M_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  L_ =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  $_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  H_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  N_ =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Pt(e) {
  return En(e) || O_.has(e) || P_.test(e);
}
function Jt(e) {
  return sr(e, "length", V_);
}
function En(e) {
  return !!e && !Number.isNaN(Number(e));
}
function mo(e) {
  return sr(e, "number", En);
}
function fr(e) {
  return !!e && Number.isInteger(Number(e));
}
function D_(e) {
  return e.endsWith("%") && En(e.slice(0, -1));
}
function se(e) {
  return xh.test(e);
}
function qt(e) {
  return M_.test(e);
}
const j_ = new Set(["length", "size", "percentage"]);
function U_(e) {
  return sr(e, j_, Eh);
}
function F_(e) {
  return sr(e, "position", Eh);
}
const B_ = new Set(["image", "url"]);
function W_(e) {
  return sr(e, B_, J_);
}
function K_(e) {
  return sr(e, "", z_);
}
function dr() {
  return !0;
}
function sr(e, t, n) {
  const r = xh.exec(e);
  return r ? (r[1] ? (typeof t == "string" ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
}
function V_(e) {
  return L_.test(e) && !$_.test(e);
}
function Eh() {
  return !1;
}
function z_(e) {
  return H_.test(e);
}
function J_(e) {
  return N_.test(e);
}
function Ki() {
  const e = Se("colors"),
    t = Se("spacing"),
    n = Se("blur"),
    r = Se("brightness"),
    o = Se("borderColor"),
    s = Se("borderRadius"),
    i = Se("borderSpacing"),
    c = Se("borderWidth"),
    a = Se("contrast"),
    u = Se("grayscale"),
    l = Se("hueRotate"),
    f = Se("invert"),
    d = Se("gap"),
    h = Se("gradientColorStops"),
    p = Se("gradientColorStopPositions"),
    b = Se("inset"),
    E = Se("margin"),
    C = Se("opacity"),
    v = Se("padding"),
    m = Se("saturate"),
    y = Se("scale"),
    x = Se("sepia"),
    _ = Se("skew"),
    A = Se("space"),
    P = Se("translate"),
    S = () => ["auto", "contain", "none"],
    k = () => ["auto", "hidden", "clip", "visible", "scroll"],
    F = () => ["auto", se, t],
    I = () => [se, t],
    W = () => ["", Pt, Jt],
    ee = () => ["auto", En, se],
    te = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    j = () => ["solid", "dashed", "dotted", "double", "none"],
    q = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    V = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
    de = () => ["", "0", se],
    Ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
    Oe = () => [En, mo],
    ke = () => [En, se];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [dr],
      spacing: [Pt, Jt],
      blur: ["none", "", qt, se],
      brightness: Oe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", qt, se],
      borderSpacing: I(),
      borderWidth: W(),
      contrast: Oe(),
      grayscale: de(),
      hueRotate: ke(),
      invert: de(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [D_, Jt],
      inset: F(),
      margin: F(),
      opacity: Oe(),
      padding: I(),
      saturate: Oe(),
      scale: Oe(),
      sepia: de(),
      skew: ke(),
      space: I(),
      translate: I(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", se] }],
      container: ["container"],
      columns: [{ columns: [qt] }],
      "break-after": [{ "break-after": Ne() }],
      "break-before": [{ "break-before": Ne() }],
      "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
      "object-position": [{ object: [...te(), se] }],
      overflow: [{ overflow: k() }],
      "overflow-x": [{ "overflow-x": k() }],
      "overflow-y": [{ "overflow-y": k() }],
      overscroll: [{ overscroll: S() }],
      "overscroll-x": [{ "overscroll-x": S() }],
      "overscroll-y": [{ "overscroll-y": S() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [b] }],
      "inset-x": [{ "inset-x": [b] }],
      "inset-y": [{ "inset-y": [b] }],
      start: [{ start: [b] }],
      end: [{ end: [b] }],
      top: [{ top: [b] }],
      right: [{ right: [b] }],
      bottom: [{ bottom: [b] }],
      left: [{ left: [b] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", fr, se] }],
      basis: [{ basis: F() }],
      "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", se] }],
      grow: [{ grow: de() }],
      shrink: [{ shrink: de() }],
      order: [{ order: ["first", "last", "none", fr, se] }],
      "grid-cols": [{ "grid-cols": [dr] }],
      "col-start-end": [{ col: ["auto", { span: ["full", fr, se] }, se] }],
      "col-start": [{ "col-start": ee() }],
      "col-end": [{ "col-end": ee() }],
      "grid-rows": [{ "grid-rows": [dr] }],
      "row-start-end": [{ row: ["auto", { span: [fr, se] }, se] }],
      "row-start": [{ "row-start": ee() }],
      "row-end": [{ "row-end": ee() }],
      "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", se] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", se] }],
      gap: [{ gap: [d] }],
      "gap-x": [{ "gap-x": [d] }],
      "gap-y": [{ "gap-y": [d] }],
      "justify-content": [{ justify: ["normal", ...V()] }],
      "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
      "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
      "align-content": [{ content: ["normal", ...V(), "baseline"] }],
      "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
      "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
      "place-content": [{ "place-content": [...V(), "baseline"] }],
      "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
      "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
      p: [{ p: [v] }],
      px: [{ px: [v] }],
      py: [{ py: [v] }],
      ps: [{ ps: [v] }],
      pe: [{ pe: [v] }],
      pt: [{ pt: [v] }],
      pr: [{ pr: [v] }],
      pb: [{ pb: [v] }],
      pl: [{ pl: [v] }],
      m: [{ m: [E] }],
      mx: [{ mx: [E] }],
      my: [{ my: [E] }],
      ms: [{ ms: [E] }],
      me: [{ me: [E] }],
      mt: [{ mt: [E] }],
      mr: [{ mr: [E] }],
      mb: [{ mb: [E] }],
      ml: [{ ml: [E] }],
      "space-x": [{ "space-x": [A] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [A] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", se, t] }],
      "min-w": [{ "min-w": [se, t, "min", "max", "fit"] }],
      "max-w": [
        { "max-w": [se, t, "none", "full", "min", "max", "fit", "prose", { screen: [qt] }, qt] },
      ],
      h: [{ h: [se, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [se, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [se, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [se, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", qt, Jt] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            mo,
          ],
        },
      ],
      "font-family": [{ font: [dr] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", se] }],
      "line-clamp": [{ "line-clamp": ["none", En, mo] }],
      leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Pt, se] }],
      "list-image": [{ "list-image": ["none", se] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", se] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [C] }],
      "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [C] }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{ decoration: [...j(), "wavy"] }],
      "text-decoration-thickness": [{ decoration: ["auto", "from-font", Pt, Jt] }],
      "underline-offset": [{ "underline-offset": ["auto", Pt, se] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: I() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            se,
          ],
        },
      ],
      whitespace: [
        { whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", se] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [C] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...te(), F_] }],
      "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
      "bg-size": [{ bg: ["auto", "cover", "contain", U_] }],
      "bg-image": [
        { bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, W_] },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [p] }],
      "gradient-via-pos": [{ via: [p] }],
      "gradient-to-pos": [{ to: [p] }],
      "gradient-from": [{ from: [h] }],
      "gradient-via": [{ via: [h] }],
      "gradient-to": [{ to: [h] }],
      rounded: [{ rounded: [s] }],
      "rounded-s": [{ "rounded-s": [s] }],
      "rounded-e": [{ "rounded-e": [s] }],
      "rounded-t": [{ "rounded-t": [s] }],
      "rounded-r": [{ "rounded-r": [s] }],
      "rounded-b": [{ "rounded-b": [s] }],
      "rounded-l": [{ "rounded-l": [s] }],
      "rounded-ss": [{ "rounded-ss": [s] }],
      "rounded-se": [{ "rounded-se": [s] }],
      "rounded-ee": [{ "rounded-ee": [s] }],
      "rounded-es": [{ "rounded-es": [s] }],
      "rounded-tl": [{ "rounded-tl": [s] }],
      "rounded-tr": [{ "rounded-tr": [s] }],
      "rounded-br": [{ "rounded-br": [s] }],
      "rounded-bl": [{ "rounded-bl": [s] }],
      "border-w": [{ border: [c] }],
      "border-w-x": [{ "border-x": [c] }],
      "border-w-y": [{ "border-y": [c] }],
      "border-w-s": [{ "border-s": [c] }],
      "border-w-e": [{ "border-e": [c] }],
      "border-w-t": [{ "border-t": [c] }],
      "border-w-r": [{ "border-r": [c] }],
      "border-w-b": [{ "border-b": [c] }],
      "border-w-l": [{ "border-l": [c] }],
      "border-opacity": [{ "border-opacity": [C] }],
      "border-style": [{ border: [...j(), "hidden"] }],
      "divide-x": [{ "divide-x": [c] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [c] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [C] }],
      "divide-style": [{ divide: j() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...j()] }],
      "outline-offset": [{ "outline-offset": [Pt, se] }],
      "outline-w": [{ outline: [Pt, Jt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: W() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [C] }],
      "ring-offset-w": [{ "ring-offset": [Pt, Jt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", qt, K_] }],
      "shadow-color": [{ shadow: [dr] }],
      opacity: [{ opacity: [C] }],
      "mix-blend": [{ "mix-blend": [...q(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": q() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [a] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", qt, se] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [l] }],
      invert: [{ invert: [f] }],
      saturate: [{ saturate: [m] }],
      sepia: [{ sepia: [x] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [a] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [l] }],
      "backdrop-invert": [{ "backdrop-invert": [f] }],
      "backdrop-opacity": [{ "backdrop-opacity": [C] }],
      "backdrop-saturate": [{ "backdrop-saturate": [m] }],
      "backdrop-sepia": [{ "backdrop-sepia": [x] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [i] }],
      "border-spacing-x": [{ "border-spacing-x": [i] }],
      "border-spacing-y": [{ "border-spacing-y": [i] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        { transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", se] },
      ],
      duration: [{ duration: ke() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", se] }],
      delay: [{ delay: ke() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", se] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [y] }],
      "scale-x": [{ "scale-x": [y] }],
      "scale-y": [{ "scale-y": [y] }],
      rotate: [{ rotate: [fr, se] }],
      "translate-x": [{ "translate-x": [P] }],
      "translate-y": [{ "translate-y": [P] }],
      "skew-x": [{ "skew-x": [_] }],
      "skew-y": [{ "skew-y": [_] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            se,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            se,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": I() }],
      "scroll-mx": [{ "scroll-mx": I() }],
      "scroll-my": [{ "scroll-my": I() }],
      "scroll-ms": [{ "scroll-ms": I() }],
      "scroll-me": [{ "scroll-me": I() }],
      "scroll-mt": [{ "scroll-mt": I() }],
      "scroll-mr": [{ "scroll-mr": I() }],
      "scroll-mb": [{ "scroll-mb": I() }],
      "scroll-ml": [{ "scroll-ml": I() }],
      "scroll-p": [{ "scroll-p": I() }],
      "scroll-px": [{ "scroll-px": I() }],
      "scroll-py": [{ "scroll-py": I() }],
      "scroll-ps": [{ "scroll-ps": I() }],
      "scroll-pe": [{ "scroll-pe": I() }],
      "scroll-pt": [{ "scroll-pt": I() }],
      "scroll-pr": [{ "scroll-pr": I() }],
      "scroll-pb": [{ "scroll-pb": I() }],
      "scroll-pl": [{ "scroll-pl": I() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", se] }],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Pt, Jt, mo] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
function q_(
  e,
  {
    cacheSize: t,
    prefix: n,
    separator: r,
    experimentalParseClassName: o,
    extend: s = {},
    override: i = {},
  },
) {
  yr(e, "cacheSize", t),
    yr(e, "prefix", n),
    yr(e, "separator", r),
    yr(e, "experimentalParseClassName", o);
  for (const c in i) G_(e[c], i[c]);
  for (const c in s) Y_(e[c], s[c]);
  return e;
}
function yr(e, t, n) {
  n !== void 0 && (e[t] = n);
}
function G_(e, t) {
  if (t) for (const n in t) yr(e, n, t[n]);
}
function Y_(e, t) {
  if (t)
    for (const n in t) {
      const r = t[n];
      r !== void 0 && (e[n] = (e[n] || []).concat(r));
    }
}
function Q_(e, ...t) {
  return typeof e == "function" ? Wi(Ki, e, ...t) : Wi(() => q_(Ki(), e), ...t);
}
const dk = Wi(Ki);
function hk(e, t) {
  const n = { ...e };
  for (const r of t) delete n[r];
  return n;
}
function Ql(e, t, n) {
  typeof t == "string" &&
    (t = t.split(".").map((o) => {
      const s = Number(o);
      return isNaN(s) ? o : s;
    }));
  let r = e;
  for (const o of t) {
    if (r == null) return n;
    r = r[o];
  }
  return r !== void 0 ? r : n;
}
const X_ = Q_({ extend: { classGroups: { icons: [(e) => /^i-/.test(e)] } } }),
  Z_ = Oa((e, t, n, r) => {
    if (
      r === "default" ||
      r.startsWith("default.") ||
      r === "popper" ||
      r.startsWith("popper.") ||
      (r.endsWith("avatar") && t === "size") ||
      (r.endsWith("chip") && t === "size") ||
      (r.endsWith("badge") && t === "size") ||
      t === "color" ||
      t === "variant"
    )
      return !1;
    if (typeof e[t] == "string" && typeof n == "string" && e[t] && n)
      return (e[t] = X_(e[t], n)), !0;
  });
function pk(e, ...t) {
  return e === "override" ? Ma({}, ...t) : Z_({}, ...t);
}
function Xl(e) {
  const t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(t, function (r, o, s, i) {
    return o + o + s + s + i + i;
  });
  const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return n ? `${parseInt(n[1], 16)} ${parseInt(n[2], 16)} ${parseInt(n[3], 16)}` : null;
}
const e1 = "inherit",
  t1 = "currentColor",
  n1 = "transparent",
  r1 = "#000",
  o1 = "#fff",
  s1 = {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },
  i1 = {
    50: "rgb(var(--color-gray-50) / <alpha-value>)",
    100: "rgb(var(--color-gray-100) / <alpha-value>)",
    200: "rgb(var(--color-gray-200) / <alpha-value>)",
    300: "rgb(var(--color-gray-300) / <alpha-value>)",
    400: "rgb(var(--color-gray-400) / <alpha-value>)",
    500: "rgb(var(--color-gray-500) / <alpha-value>)",
    600: "rgb(var(--color-gray-600) / <alpha-value>)",
    700: "rgb(var(--color-gray-700) / <alpha-value>)",
    800: "rgb(var(--color-gray-800) / <alpha-value>)",
    900: "rgb(var(--color-gray-900) / <alpha-value>)",
    950: "rgb(var(--color-gray-950) / <alpha-value>)",
  },
  a1 = {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b",
  },
  c1 = "var(--fallback-n,oklch(var(--n)/<alpha-value>))",
  l1 = {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09",
  },
  u1 = {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a",
  },
  f1 = {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407",
  },
  d1 = {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03",
  },
  h1 = {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006",
  },
  p1 = {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05",
  },
  g1 = {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16",
  },
  m1 = {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22",
  },
  y1 = {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e",
  },
  v1 = {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344",
  },
  b1 = {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49",
  },
  w1 = {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554",
  },
  _1 = {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b",
  },
  x1 = {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065",
  },
  E1 = {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764",
  },
  S1 = {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e",
  },
  C1 = {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724",
  },
  T1 = {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519",
  },
  k1 = {
    50: "rgb(var(--color-primary-50) / <alpha-value>)",
    100: "rgb(var(--color-primary-100) / <alpha-value>)",
    200: "rgb(var(--color-primary-200) / <alpha-value>)",
    300: "rgb(var(--color-primary-300) / <alpha-value>)",
    400: "rgb(var(--color-primary-400) / <alpha-value>)",
    500: "rgb(var(--color-primary-500) / <alpha-value>)",
    600: "rgb(var(--color-primary-600) / <alpha-value>)",
    700: "rgb(var(--color-primary-700) / <alpha-value>)",
    800: "rgb(var(--color-primary-800) / <alpha-value>)",
    900: "rgb(var(--color-primary-900) / <alpha-value>)",
    950: "rgb(var(--color-primary-950) / <alpha-value>)",
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)",
  },
  A1 = "var(--fallback-s,oklch(var(--s)/<alpha-value>))",
  R1 = "var(--fallback-a,oklch(var(--a)/<alpha-value>))",
  I1 = "var(--fallback-in,oklch(var(--in)/<alpha-value>))",
  P1 = "var(--fallback-su,oklch(var(--su)/<alpha-value>))",
  O1 = "var(--fallback-wa,oklch(var(--wa)/<alpha-value>))",
  M1 = "var(--fallback-er,oklch(var(--er)/<alpha-value>))",
  L1 = {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712",
  },
  yo = {
    inherit: e1,
    current: t1,
    transparent: n1,
    black: r1,
    white: o1,
    slate: s1,
    gray: i1,
    zinc: a1,
    neutral: c1,
    stone: l1,
    red: u1,
    orange: f1,
    amber: d1,
    yellow: h1,
    lime: p1,
    green: g1,
    emerald: m1,
    teal: y1,
    cyan: v1,
    sky: b1,
    blue: w1,
    indigo: _1,
    violet: x1,
    purple: E1,
    fuchsia: S1,
    pink: C1,
    rose: T1,
    primary: k1,
    secondary: A1,
    accent: R1,
    info: I1,
    success: P1,
    warning: O1,
    error: M1,
    cool: L1,
    "primary-content": "var(--fallback-pc,oklch(var(--pc)/<alpha-value>))",
    "secondary-content": "var(--fallback-sc,oklch(var(--sc)/<alpha-value>))",
    "accent-content": "var(--fallback-ac,oklch(var(--ac)/<alpha-value>))",
    "neutral-content": "var(--fallback-nc,oklch(var(--nc)/<alpha-value>))",
    "base-100": "var(--fallback-b1,oklch(var(--b1)/<alpha-value>))",
    "base-200": "var(--fallback-b2,oklch(var(--b2)/<alpha-value>))",
    "base-300": "var(--fallback-b3,oklch(var(--b3)/<alpha-value>))",
    "base-content": "var(--fallback-bc,oklch(var(--bc)/<alpha-value>))",
    "info-content": "var(--fallback-inc,oklch(var(--inc)/<alpha-value>))",
    "success-content": "var(--fallback-suc,oklch(var(--suc)/<alpha-value>))",
    "warning-content": "var(--fallback-wac,oklch(var(--wac)/<alpha-value>))",
    "error-content": "var(--fallback-erc,oklch(var(--erc)/<alpha-value>))",
    "neutral-50": "#fafafa",
    "neutral-100": "#f5f5f5",
    "neutral-200": "#e5e5e5",
    "neutral-300": "#d4d4d4",
    "neutral-400": "#a3a3a3",
    "neutral-500": "#737373",
    "neutral-600": "#525252",
    "neutral-700": "#404040",
    "neutral-800": "#262626",
    "neutral-900": "#171717",
    "neutral-950": "#0a0a0a",
    "theme-dark": "#05051d",
  },
  $1 = We(() => {
    const e = th(),
      t = Te(),
      n = he(() => {
        const o = Ql(yo, e.ui.primary),
          s = Ql(yo, e.ui.gray);
        return (
          o ||
            console.warn(`[@nuxt/ui] Primary color '${e.ui.primary}' not found in Tailwind config`),
          s || console.warn(`[@nuxt/ui] Gray color '${e.ui.gray}' not found in Tailwind config`),
          `:root {
${Object.entries(o || yo.green).map(([i, c]) => `--color-primary-${i}: ${Xl(c)};`).join(`
`)}
--color-primary-DEFAULT: var(--color-primary-500);

${Object.entries(s || yo.cool).map(([i, c]) => `--color-gray-${i}: ${Xl(c)};`).join(`
`)}
}

.dark {
  --color-primary-DEFAULT: var(--color-primary-400);
}
`
        );
      }),
      r = { style: [{ innerHTML: () => n.value, tagPriority: -2, id: "nuxt-ui-colors" }] };
    if (t.isHydrating && !t.payload.serverRendered) {
      const o = document.createElement("style");
      (o.innerHTML = n.value),
        o.setAttribute("data-nuxt-ui-colors", ""),
        document.head.appendChild(o),
        (r.script = [
          {
            innerHTML: "document.head.removeChild(document.querySelector('[data-nuxt-ui-colors]'))",
          },
        ]);
    }
    Uv(r);
  }),
  H1 = "__NUXT_COLOR_MODE__",
  N1 = "nuxt-color-mode",
  Ot = window[H1] || {},
  D1 = We((e) => {
    const t = Tw("color-mode", () =>
      _t({ preference: Ot.preference, value: Ot.value, unknown: !1, forced: !1 }),
    ).value;
    xt().afterEach((o) => {
      const s = o.meta.colorMode;
      s && s !== "system"
        ? ((t.value = s), (t.forced = !0))
        : (s === "system" &&
            console.warn("You cannot force the colorMode to system at the page level."),
          (t.forced = !1),
          (t.value = t.preference === "system" ? Ot.getColorScheme() : t.preference));
    });
    let n;
    function r() {
      n ||
        !window.matchMedia ||
        ((n = window.matchMedia("(prefers-color-scheme: dark)")),
        n.addEventListener("change", () => {
          !t.forced && t.preference === "system" && (t.value = Ot.getColorScheme());
        }));
    }
    rt(
      () => t.preference,
      (o) => {
        var s;
        t.forced ||
          (o === "system" ? ((t.value = Ot.getColorScheme()), r()) : (t.value = o),
          (s = window.localStorage) == null || s.setItem(N1, o));
      },
      { immediate: !0 },
    ),
      rt(
        () => t.value,
        (o, s) => {
          Ot.removeColorScheme(s), Ot.addColorScheme(o);
        },
      ),
      t.preference === "system" && r(),
      e.hook("app:mounted", () => {
        t.unknown && ((t.preference = Ot.preference), (t.value = Ot.value), (t.unknown = !1));
      }),
      e.provide("colorMode", t);
  }),
  Rr = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  Cs = (e, t, n, r = "") => {
    const o = e.split(":");
    if (e.slice(0, 1) === "@") {
      if (o.length < 2 || o.length > 3) return null;
      r = o.shift().slice(1);
    }
    if (o.length > 3 || !o.length) return null;
    if (o.length > 1) {
      const c = o.pop(),
        a = o.pop(),
        u = { provider: o.length > 0 ? o[0] : r, prefix: a, name: c };
      return t && !Ao(u) ? null : u;
    }
    const s = o[0],
      i = s.split("-");
    if (i.length > 1) {
      const c = { provider: r, prefix: i.shift(), name: i.join("-") };
      return t && !Ao(c) ? null : c;
    }
    if (n && r === "") {
      const c = { provider: r, prefix: "", name: s };
      return t && !Ao(c, n) ? null : c;
    }
    return null;
  },
  Ao = (e, t) =>
    e
      ? !!(
          (e.provider === "" || e.provider.match(Rr)) &&
          ((t && e.prefix === "") || e.prefix.match(Rr)) &&
          e.name.match(Rr)
        )
      : !1,
  Sh = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  Xo = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  Zr = Object.freeze({ ...Sh, ...Xo }),
  Vi = Object.freeze({ ...Zr, body: "", hidden: !1 });
function j1(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Zl(e, t) {
  const n = j1(e, t);
  for (const r in Vi)
    r in Xo
      ? r in e && !(r in n) && (n[r] = Xo[r])
      : r in t
        ? (n[r] = t[r])
        : r in e && (n[r] = e[r]);
  return n;
}
function U1(e, t) {
  const n = e.icons,
    r = e.aliases || Object.create(null),
    o = Object.create(null);
  function s(i) {
    if (n[i]) return (o[i] = []);
    if (!(i in o)) {
      o[i] = null;
      const c = r[i] && r[i].parent,
        a = c && s(c);
      a && (o[i] = [c].concat(a));
    }
    return o[i];
  }
  return Object.keys(n).concat(Object.keys(r)).forEach(s), o;
}
function F1(e, t, n) {
  const r = e.icons,
    o = e.aliases || Object.create(null);
  let s = {};
  function i(c) {
    s = Zl(r[c] || o[c], s);
  }
  return i(t), n.forEach(i), Zl(e, s);
}
function Ch(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object") return n;
  e.not_found instanceof Array &&
    e.not_found.forEach((o) => {
      t(o, null), n.push(o);
    });
  const r = U1(e);
  for (const o in r) {
    const s = r[o];
    s && (t(o, F1(e, o, s)), n.push(o));
  }
  return n;
}
const B1 = { provider: "", aliases: {}, not_found: {}, ...Sh };
function Xs(e, t) {
  for (const n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
  return !0;
}
function Th(e) {
  if (typeof e != "object" || e === null) return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Xs(e, B1))
    return null;
  const n = t.icons;
  for (const o in n) {
    const s = n[o];
    if (!o.match(Rr) || typeof s.body != "string" || !Xs(s, Vi)) return null;
  }
  const r = t.aliases || Object.create(null);
  for (const o in r) {
    const s = r[o],
      i = s.parent;
    if (!o.match(Rr) || typeof i != "string" || (!n[i] && !r[i]) || !Xs(s, Vi)) return null;
  }
  return t;
}
const eu = Object.create(null);
function W1(e, t) {
  return { provider: e, prefix: t, icons: Object.create(null), missing: new Set() };
}
function Pn(e, t) {
  const n = eu[e] || (eu[e] = Object.create(null));
  return n[t] || (n[t] = W1(e, t));
}
function Xa(e, t) {
  return Th(t)
    ? Ch(t, (n, r) => {
        r ? (e.icons[n] = r) : e.missing.add(n);
      })
    : [];
}
function K1(e, t, n) {
  try {
    if (typeof n.body == "string") return (e.icons[t] = { ...n }), !0;
  } catch {}
  return !1;
}
let Br = !1;
function kh(e) {
  return typeof e == "boolean" && (Br = e), Br;
}
function Ah(e) {
  const t = typeof e == "string" ? Cs(e, !0, Br) : e;
  if (t) {
    const n = Pn(t.provider, t.prefix),
      r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function V1(e, t) {
  const n = Cs(e, !0, Br);
  if (!n) return !1;
  const r = Pn(n.provider, n.prefix);
  return K1(r, n.name, t);
}
function z1(e, t) {
  if (typeof e != "object") return !1;
  if ((typeof t != "string" && (t = e.provider || ""), Br && !t && !e.prefix)) {
    let o = !1;
    return (
      Th(e) &&
        ((e.prefix = ""),
        Ch(e, (s, i) => {
          i && V1(s, i) && (o = !0);
        })),
      o
    );
  }
  const n = e.prefix;
  if (!Ao({ provider: t, prefix: n, name: "a" })) return !1;
  const r = Pn(t, n);
  return !!Xa(r, e);
}
function gk(e) {
  const t = Ah(e);
  return t ? { ...Zr, ...t } : null;
}
const Rh = Object.freeze({ width: null, height: null }),
  Ih = Object.freeze({ ...Rh, ...Xo }),
  J1 = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  q1 = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function tu(e, t, n) {
  if (t === 1) return e;
  if (((n = n || 100), typeof e == "number")) return Math.ceil(e * t * n) / n;
  if (typeof e != "string") return e;
  const r = e.split(J1);
  if (r === null || !r.length) return e;
  const o = [];
  let s = r.shift(),
    i = q1.test(s);
  for (;;) {
    if (i) {
      const c = parseFloat(s);
      isNaN(c) ? o.push(s) : o.push(Math.ceil(c * t * n) / n);
    } else o.push(s);
    if (((s = r.shift()), s === void 0)) return o.join("");
    i = !i;
  }
}
function G1(e, t = "defs") {
  let n = "";
  const r = e.indexOf("<" + t);
  for (; r >= 0; ) {
    const o = e.indexOf(">", r),
      s = e.indexOf("</" + t);
    if (o === -1 || s === -1) break;
    const i = e.indexOf(">", s);
    if (i === -1) break;
    (n += e.slice(o + 1, s).trim()), (e = e.slice(0, r).trim() + e.slice(i + 1));
  }
  return { defs: n, content: e };
}
function Y1(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function Q1(e, t, n) {
  const r = G1(e);
  return Y1(r.defs, t + r.content + n);
}
const X1 = (e) => e === "unset" || e === "undefined" || e === "none";
function Z1(e, t) {
  const n = { ...Zr, ...e },
    r = { ...Ih, ...t },
    o = { left: n.left, top: n.top, width: n.width, height: n.height };
  let s = n.body;
  [n, r].forEach((b) => {
    const E = [],
      C = b.hFlip,
      v = b.vFlip;
    let m = b.rotate;
    C
      ? v
        ? (m += 2)
        : (E.push(
            "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")",
          ),
          E.push("scale(-1 1)"),
          (o.top = o.left = 0))
      : v &&
        (E.push("translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"),
        E.push("scale(1 -1)"),
        (o.top = o.left = 0));
    let y;
    switch ((m < 0 && (m -= Math.floor(m / 4) * 4), (m = m % 4), m)) {
      case 1:
        (y = o.height / 2 + o.top),
          E.unshift("rotate(90 " + y.toString() + " " + y.toString() + ")");
        break;
      case 2:
        E.unshift(
          "rotate(180 " +
            (o.width / 2 + o.left).toString() +
            " " +
            (o.height / 2 + o.top).toString() +
            ")",
        );
        break;
      case 3:
        (y = o.width / 2 + o.left),
          E.unshift("rotate(-90 " + y.toString() + " " + y.toString() + ")");
        break;
    }
    m % 2 === 1 &&
      (o.left !== o.top && ((y = o.left), (o.left = o.top), (o.top = y)),
      o.width !== o.height && ((y = o.width), (o.width = o.height), (o.height = y))),
      E.length && (s = Q1(s, '<g transform="' + E.join(" ") + '">', "</g>"));
  });
  const i = r.width,
    c = r.height,
    a = o.width,
    u = o.height;
  let l, f;
  i === null
    ? ((f = c === null ? "1em" : c === "auto" ? u : c), (l = tu(f, a / u)))
    : ((l = i === "auto" ? a : i), (f = c === null ? tu(l, u / a) : c === "auto" ? u : c));
  const d = {},
    h = (b, E) => {
      X1(E) || (d[b] = E.toString());
    };
  h("width", l), h("height", f);
  const p = [o.left, o.top, a, u];
  return (d.viewBox = p.join(" ")), { attributes: d, viewBox: p, body: s };
}
const ex = /\sid="(\S+)"/g,
  tx = "IconifyId" + Date.now().toString(16) + ((Math.random() * 16777216) | 0).toString(16);
let nx = 0;
function rx(e, t = tx) {
  const n = [];
  let r;
  for (; (r = ex.exec(e)); ) n.push(r[1]);
  if (!n.length) return e;
  const o = "suffix" + ((Math.random() * 16777216) | Date.now()).toString(16);
  return (
    n.forEach((s) => {
      const i = typeof t == "function" ? t(s) : t + (nx++).toString(),
        c = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      e = e.replace(new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"), "$1" + i + o + "$3");
    }),
    (e = e.replace(new RegExp(o, "g"), "")),
    e
  );
}
const zi = Object.create(null);
function Ph(e, t) {
  zi[e] = t;
}
function Ji(e) {
  return zi[e] || zi[""];
}
function Za(e) {
  let t;
  if (typeof e.resources == "string") t = [e.resources];
  else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null;
  return {
    resources: t,
    path: e.path || "/",
    maxURL: e.maxURL || 500,
    rotate: e.rotate || 750,
    timeout: e.timeout || 5e3,
    random: e.random === !0,
    index: e.index || 0,
    dataAfterTimeout: e.dataAfterTimeout !== !1,
  };
}
const Ts = Object.create(null),
  hr = ["https://api.simplesvg.com", "https://api.unisvg.com"],
  Ro = [];
for (; hr.length > 0; )
  hr.length === 1 || Math.random() > 0.5 ? Ro.push(hr.shift()) : Ro.push(hr.pop());
Ts[""] = Za({ resources: ["https://api.iconify.design"].concat(Ro) });
function Oh(e, t) {
  const n = Za(t);
  return n === null ? !1 : ((Ts[e] = n), !0);
}
function ks(e) {
  return Ts[e];
}
function ox() {
  return Object.keys(Ts);
}
const sx = () => {
  let e;
  try {
    if (((e = fetch), typeof e == "function")) return e;
  } catch {}
};
let Zo = sx();
function ix(e) {
  Zo = e;
}
function ax() {
  return Zo;
}
function cx(e, t) {
  const n = ks(e);
  if (!n) return 0;
  let r;
  if (!n.maxURL) r = 0;
  else {
    let o = 0;
    n.resources.forEach((i) => {
      o = Math.max(o, i.length);
    });
    const s = t + ".json?icons=";
    r = n.maxURL - o - n.path.length - s.length;
  }
  return r;
}
function lx(e) {
  return e === 404;
}
const ux = (e, t, n) => {
  const r = [],
    o = cx(e, t),
    s = "icons";
  let i = { type: s, provider: e, prefix: t, icons: [] },
    c = 0;
  return (
    n.forEach((a, u) => {
      (c += a.length + 1),
        c >= o &&
          u > 0 &&
          (r.push(i), (i = { type: s, provider: e, prefix: t, icons: [] }), (c = a.length)),
        i.icons.push(a);
    }),
    r.push(i),
    r
  );
};
function fx(e) {
  if (typeof e == "string") {
    const t = ks(e);
    if (t) return t.path;
  }
  return "/";
}
const dx = (e, t, n) => {
    if (!Zo) {
      n("abort", 424);
      return;
    }
    let r = fx(t.provider);
    switch (t.type) {
      case "icons": {
        const s = t.prefix,
          c = t.icons.join(","),
          a = new URLSearchParams({ icons: c });
        r += s + ".json?" + a.toString();
        break;
      }
      case "custom": {
        const s = t.uri;
        r += s.slice(0, 1) === "/" ? s.slice(1) : s;
        break;
      }
      default:
        n("abort", 400);
        return;
    }
    let o = 503;
    Zo(e + r)
      .then((s) => {
        const i = s.status;
        if (i !== 200) {
          setTimeout(() => {
            n(lx(i) ? "abort" : "next", i);
          });
          return;
        }
        return (o = 501), s.json();
      })
      .then((s) => {
        if (typeof s != "object" || s === null) {
          setTimeout(() => {
            s === 404 ? n("abort", s) : n("next", o);
          });
          return;
        }
        setTimeout(() => {
          n("success", s);
        });
      })
      .catch(() => {
        n("next", o);
      });
  },
  hx = { prepare: ux, send: dx };
function px(e) {
  const t = { loaded: [], missing: [], pending: [] },
    n = Object.create(null);
  e.sort((o, s) =>
    o.provider !== s.provider
      ? o.provider.localeCompare(s.provider)
      : o.prefix !== s.prefix
        ? o.prefix.localeCompare(s.prefix)
        : o.name.localeCompare(s.name),
  );
  let r = { provider: "", prefix: "", name: "" };
  return (
    e.forEach((o) => {
      if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider) return;
      r = o;
      const s = o.provider,
        i = o.prefix,
        c = o.name,
        a = n[s] || (n[s] = Object.create(null)),
        u = a[i] || (a[i] = Pn(s, i));
      let l;
      c in u.icons
        ? (l = t.loaded)
        : i === "" || u.missing.has(c)
          ? (l = t.missing)
          : (l = t.pending);
      const f = { provider: s, prefix: i, name: c };
      l.push(f);
    }),
    t
  );
}
function Mh(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function gx(e) {
  e.pendingCallbacksFlag ||
    ((e.pendingCallbacksFlag = !0),
    setTimeout(() => {
      e.pendingCallbacksFlag = !1;
      const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
      if (!t.length) return;
      let n = !1;
      const r = e.provider,
        o = e.prefix;
      t.forEach((s) => {
        const i = s.icons,
          c = i.pending.length;
        (i.pending = i.pending.filter((a) => {
          if (a.prefix !== o) return !0;
          const u = a.name;
          if (e.icons[u]) i.loaded.push({ provider: r, prefix: o, name: u });
          else if (e.missing.has(u)) i.missing.push({ provider: r, prefix: o, name: u });
          else return (n = !0), !0;
          return !1;
        })),
          i.pending.length !== c &&
            (n || Mh([e], s.id),
            s.callback(i.loaded.slice(0), i.missing.slice(0), i.pending.slice(0), s.abort));
      });
    }));
}
let mx = 0;
function yx(e, t, n) {
  const r = mx++,
    o = Mh.bind(null, n, r);
  if (!t.pending.length) return o;
  const s = { id: r, icons: t, callback: e, abort: o };
  return (
    n.forEach((i) => {
      (i.loaderCallbacks || (i.loaderCallbacks = [])).push(s);
    }),
    o
  );
}
function vx(e, t = !0, n = !1) {
  const r = [];
  return (
    e.forEach((o) => {
      const s = typeof o == "string" ? Cs(o, t, n) : o;
      s && r.push(s);
    }),
    r
  );
}
var bx = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: !1, dataAfterTimeout: !1 };
function wx(e, t, n, r) {
  const o = e.resources.length,
    s = e.random ? Math.floor(Math.random() * o) : e.index;
  let i;
  if (e.random) {
    let _ = e.resources.slice(0);
    for (i = []; _.length > 1; ) {
      const A = Math.floor(Math.random() * _.length);
      i.push(_[A]), (_ = _.slice(0, A).concat(_.slice(A + 1)));
    }
    i = i.concat(_);
  } else i = e.resources.slice(s).concat(e.resources.slice(0, s));
  const c = Date.now();
  let a = "pending",
    u = 0,
    l,
    f = null,
    d = [],
    h = [];
  typeof r == "function" && h.push(r);
  function p() {
    f && (clearTimeout(f), (f = null));
  }
  function b() {
    a === "pending" && (a = "aborted"),
      p(),
      d.forEach((_) => {
        _.status === "pending" && (_.status = "aborted");
      }),
      (d = []);
  }
  function E(_, A) {
    A && (h = []), typeof _ == "function" && h.push(_);
  }
  function C() {
    return {
      startTime: c,
      payload: t,
      status: a,
      queriesSent: u,
      queriesPending: d.length,
      subscribe: E,
      abort: b,
    };
  }
  function v() {
    (a = "failed"),
      h.forEach((_) => {
        _(void 0, l);
      });
  }
  function m() {
    d.forEach((_) => {
      _.status === "pending" && (_.status = "aborted");
    }),
      (d = []);
  }
  function y(_, A, P) {
    const S = A !== "success";
    switch (((d = d.filter((k) => k !== _)), a)) {
      case "pending":
        break;
      case "failed":
        if (S || !e.dataAfterTimeout) return;
        break;
      default:
        return;
    }
    if (A === "abort") {
      (l = P), v();
      return;
    }
    if (S) {
      (l = P), d.length || (i.length ? x() : v());
      return;
    }
    if ((p(), m(), !e.random)) {
      const k = e.resources.indexOf(_.resource);
      k !== -1 && k !== e.index && (e.index = k);
    }
    (a = "completed"),
      h.forEach((k) => {
        k(P);
      });
  }
  function x() {
    if (a !== "pending") return;
    p();
    const _ = i.shift();
    if (_ === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          p(), a === "pending" && (m(), v());
        }, e.timeout);
        return;
      }
      v();
      return;
    }
    const A = {
      status: "pending",
      resource: _,
      callback: (P, S) => {
        y(A, P, S);
      },
    };
    d.push(A), u++, (f = setTimeout(x, e.rotate)), n(_, t, A.callback);
  }
  return setTimeout(x), C;
}
function Lh(e) {
  const t = { ...bx, ...e };
  let n = [];
  function r() {
    n = n.filter((c) => c().status === "pending");
  }
  function o(c, a, u) {
    const l = wx(t, c, a, (f, d) => {
      r(), u && u(f, d);
    });
    return n.push(l), l;
  }
  function s(c) {
    return n.find((a) => c(a)) || null;
  }
  return {
    query: o,
    find: s,
    setIndex: (c) => {
      t.index = c;
    },
    getIndex: () => t.index,
    cleanup: r,
  };
}
function nu() {}
const Zs = Object.create(null);
function _x(e) {
  if (!Zs[e]) {
    const t = ks(e);
    if (!t) return;
    const n = Lh(t),
      r = { config: t, redundancy: n };
    Zs[e] = r;
  }
  return Zs[e];
}
function $h(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const s = Ji(e);
    if (!s) return n(void 0, 424), nu;
    o = s.send;
    const i = _x(e);
    i && (r = i.redundancy);
  } else {
    const s = Za(e);
    if (s) {
      r = Lh(s);
      const i = e.resources ? e.resources[0] : "",
        c = Ji(i);
      c && (o = c.send);
    }
  }
  return !r || !o ? (n(void 0, 424), nu) : r.query(t, o, n)().abort;
}
const ru = "iconify2",
  Wr = "iconify",
  Hh = Wr + "-count",
  ou = Wr + "-version",
  Nh = 36e5,
  xx = 168,
  Ex = 50;
function qi(e, t) {
  try {
    return e.getItem(t);
  } catch {}
}
function ec(e, t, n) {
  try {
    return e.setItem(t, n), !0;
  } catch {}
}
function su(e, t) {
  try {
    e.removeItem(t);
  } catch {}
}
function Gi(e, t) {
  return ec(e, Hh, t.toString());
}
function Yi(e) {
  return parseInt(qi(e, Hh)) || 0;
}
const In = { local: !0, session: !0 },
  Dh = { local: new Set(), session: new Set() };
let tc = !1;
function Sx(e) {
  tc = e;
}
let vo = typeof window > "u" ? {} : window;
function jh(e) {
  const t = e + "Storage";
  try {
    if (vo && vo[t] && typeof vo[t].length == "number") return vo[t];
  } catch {}
  In[e] = !1;
}
function Uh(e, t) {
  const n = jh(e);
  if (!n) return;
  const r = qi(n, ou);
  if (r !== ru) {
    if (r) {
      const c = Yi(n);
      for (let a = 0; a < c; a++) su(n, Wr + a.toString());
    }
    ec(n, ou, ru), Gi(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / Nh) - xx,
    s = (c) => {
      const a = Wr + c.toString(),
        u = qi(n, a);
      if (typeof u == "string") {
        try {
          const l = JSON.parse(u);
          if (
            typeof l == "object" &&
            typeof l.cached == "number" &&
            l.cached > o &&
            typeof l.provider == "string" &&
            typeof l.data == "object" &&
            typeof l.data.prefix == "string" &&
            t(l, c)
          )
            return !0;
        } catch {}
        su(n, a);
      }
    };
  let i = Yi(n);
  for (let c = i - 1; c >= 0; c--) s(c) || (c === i - 1 ? (i--, Gi(n, i)) : Dh[e].add(c));
}
function Fh() {
  if (!tc) {
    Sx(!0);
    for (const e in In)
      Uh(e, (t) => {
        const n = t.data,
          r = t.provider,
          o = n.prefix,
          s = Pn(r, o);
        if (!Xa(s, n).length) return !1;
        const i = n.lastModified || -1;
        return (
          (s.lastModifiedCached = s.lastModifiedCached ? Math.min(s.lastModifiedCached, i) : i), !0
        );
      });
  }
}
function Cx(e, t) {
  const n = e.lastModifiedCached;
  if (n && n >= t) return n === t;
  if (((e.lastModifiedCached = t), n))
    for (const r in In)
      Uh(r, (o) => {
        const s = o.data;
        return o.provider !== e.provider || s.prefix !== e.prefix || s.lastModified === t;
      });
  return !0;
}
function Tx(e, t) {
  tc || Fh();
  function n(r) {
    let o;
    if (!In[r] || !(o = jh(r))) return;
    const s = Dh[r];
    let i;
    if (s.size) s.delete((i = Array.from(s).shift()));
    else if (((i = Yi(o)), i >= Ex || !Gi(o, i + 1))) return;
    const c = { cached: Math.floor(Date.now() / Nh), provider: e.provider, data: t };
    return ec(o, Wr + i.toString(), JSON.stringify(c));
  }
  (t.lastModified && !Cx(e, t.lastModified)) ||
    (Object.keys(t.icons).length &&
      (t.not_found && ((t = Object.assign({}, t)), delete t.not_found),
      n("local") || n("session")));
}
function iu() {}
function kx(e) {
  e.iconsLoaderFlag ||
    ((e.iconsLoaderFlag = !0),
    setTimeout(() => {
      (e.iconsLoaderFlag = !1), gx(e);
    }));
}
function Ax(e, t) {
  e.iconsToLoad ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort()) : (e.iconsToLoad = t),
    e.iconsQueueFlag ||
      ((e.iconsQueueFlag = !0),
      setTimeout(() => {
        e.iconsQueueFlag = !1;
        const { provider: n, prefix: r } = e,
          o = e.iconsToLoad;
        delete e.iconsToLoad;
        let s;
        if (!o || !(s = Ji(n))) return;
        s.prepare(n, r, o).forEach((c) => {
          $h(n, c, (a) => {
            if (typeof a != "object")
              c.icons.forEach((u) => {
                e.missing.add(u);
              });
            else
              try {
                const u = Xa(e, a);
                if (!u.length) return;
                const l = e.pendingIcons;
                l &&
                  u.forEach((f) => {
                    l.delete(f);
                  }),
                  Tx(e, a);
              } catch (u) {
                console.error(u);
              }
            kx(e);
          });
        });
      }));
}
const Rx = (e, t) => {
  const n = vx(e, !0, kh()),
    r = px(n);
  if (!r.pending.length) {
    let a = !0;
    return (
      t &&
        setTimeout(() => {
          a && t(r.loaded, r.missing, r.pending, iu);
        }),
      () => {
        a = !1;
      }
    );
  }
  const o = Object.create(null),
    s = [];
  let i, c;
  return (
    r.pending.forEach((a) => {
      const { provider: u, prefix: l } = a;
      if (l === c && u === i) return;
      (i = u), (c = l), s.push(Pn(u, l));
      const f = o[u] || (o[u] = Object.create(null));
      f[l] || (f[l] = []);
    }),
    r.pending.forEach((a) => {
      const { provider: u, prefix: l, name: f } = a,
        d = Pn(u, l),
        h = d.pendingIcons || (d.pendingIcons = new Set());
      h.has(f) || (h.add(f), o[u][l].push(f));
    }),
    s.forEach((a) => {
      const { provider: u, prefix: l } = a;
      o[u][l].length && Ax(a, o[u][l]);
    }),
    t ? yx(t, r, s) : iu
  );
};
function Ix(e, t) {
  switch (e) {
    case "local":
    case "session":
      In[e] = t;
      break;
    case "all":
      for (const n in In) In[n] = t;
      break;
  }
}
function Px(e, t) {
  const n = { ...e };
  for (const r in t) {
    const o = t[r],
      s = typeof o;
    r in Rh
      ? (o === null || (o && (s === "string" || s === "number"))) && (n[r] = o)
      : s === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const Ox = /[\s,]+/;
function Mx(e, t) {
  t.split(Ox).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function Lx(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, "");
  function r(o) {
    for (; o < 0; ) o += 4;
    return o % 4;
  }
  if (n === "") {
    const o = parseInt(e);
    return isNaN(o) ? 0 : r(o);
  } else if (n !== e) {
    let o = 0;
    switch (n) {
      case "%":
        o = 25;
        break;
      case "deg":
        o = 90;
    }
    if (o) {
      let s = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(s) ? 0 : ((s = s / o), s % 1 === 0 ? r(s) : 0);
    }
  }
  return t;
}
function $x(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t) n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Hx(e) {
  return e
    .replace(/"/g, "'")
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")
    .replace(/\s+/g, " ");
}
function Nx(e) {
  return "data:image/svg+xml," + Hx(e);
}
function Dx(e) {
  return 'url("' + Nx(e) + '")';
}
const au = { ...Ih, inline: !1 },
  jx = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img",
  },
  Ux = { display: "inline-block" },
  Qi = { backgroundColor: "currentColor" },
  Bh = { backgroundColor: "transparent" },
  cu = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" },
  lu = { webkitMask: Qi, mask: Qi, background: Bh };
for (const e in lu) {
  const t = lu[e];
  for (const n in cu) t[e + n] = cu[n];
}
const Io = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  (Io[e + "-flip"] = t), (Io[e.slice(0, 1) + "-flip"] = t), (Io[e + "Flip"] = t);
});
function uu(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const fu = (e, t) => {
  const n = Px(au, t),
    r = { ...jx },
    o = t.mode || "svg",
    s = {},
    i = t.style,
    c = typeof i == "object" && !(i instanceof Array) ? i : {};
  for (let b in t) {
    const E = t[b];
    if (E !== void 0)
      switch (b) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[b] = E === !0 || E === "true" || E === 1;
          break;
        case "flip":
          typeof E == "string" && Mx(n, E);
          break;
        case "color":
          s.color = E;
          break;
        case "rotate":
          typeof E == "string" ? (n[b] = Lx(E)) : typeof E == "number" && (n[b] = E);
          break;
        case "ariaHidden":
        case "aria-hidden":
          E !== !0 && E !== "true" && delete r["aria-hidden"];
          break;
        default: {
          const C = Io[b];
          C ? (E === !0 || E === "true" || E === 1) && (n[C] = !0) : au[b] === void 0 && (r[b] = E);
        }
      }
  }
  const a = Z1(e, n),
    u = a.attributes;
  if ((n.inline && (s.verticalAlign = "-0.125em"), o === "svg")) {
    (r.style = { ...s, ...c }), Object.assign(r, u);
    let b = 0,
      E = t.id;
    return (
      typeof E == "string" && (E = E.replace(/-/g, "_")),
      (r.innerHTML = rx(a.body, E ? () => E + "ID" + b++ : "iconifyVue")),
      Ue("svg", r)
    );
  }
  const { body: l, width: f, height: d } = e,
    h = o === "mask" || (o === "bg" ? !1 : l.indexOf("currentColor") !== -1),
    p = $x(l, { ...u, width: f + "", height: d + "" });
  return (
    (r.style = {
      ...s,
      "--svg": Dx(p),
      width: uu(u.width),
      height: uu(u.height),
      ...Ux,
      ...(h ? Qi : Bh),
      ...c,
    }),
    Ue("span", r)
  );
};
function Fx(e) {
  Ix(e, !1);
}
kh(!0);
Ph("", hx);
if (typeof document < "u" && typeof window < "u") {
  Fh();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload,
      n = "Invalid IconifyPreload syntax.";
    typeof t == "object" &&
      t !== null &&
      (t instanceof Array ? t : [t]).forEach((r) => {
        try {
          (typeof r != "object" ||
            r === null ||
            r instanceof Array ||
            typeof r.icons != "object" ||
            typeof r.prefix != "string" ||
            !z1(r)) &&
            console.error(n);
        } catch {
          console.error(n);
        }
      });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let n in t) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const o = t[n];
          if (typeof o != "object" || !o || o.resources === void 0) continue;
          Oh(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
const Bx = { ...Zr, body: "" },
  mk = qe({
    inheritAttrs: !1,
    data() {
      return { _name: "", _loadingIcon: null, iconMounted: !1, counter: 0 };
    },
    mounted() {
      this.iconMounted = !0;
    },
    unmounted() {
      this.abortLoading();
    },
    methods: {
      abortLoading() {
        this._loadingIcon && (this._loadingIcon.abort(), (this._loadingIcon = null));
      },
      getIcon(e, t, n) {
        if (typeof e == "object" && e !== null && typeof e.body == "string")
          return (this._name = ""), this.abortLoading(), { data: e };
        let r;
        if (typeof e != "string" || (r = Cs(e, !1, !0)) === null) return this.abortLoading(), null;
        let o = Ah(r);
        if (!o)
          return (
            (!this._loadingIcon || this._loadingIcon.name !== e) &&
              (this.abortLoading(),
              (this._name = ""),
              o !== null &&
                (this._loadingIcon = {
                  name: e,
                  abort: Rx([r], () => {
                    this.counter++;
                  }),
                })),
            null
          );
        if ((this.abortLoading(), this._name !== e && ((this._name = e), t && t(e)), n)) {
          o = Object.assign({}, o);
          const i = n(o.body, r.name, r.prefix, r.provider);
          typeof i == "string" && (o.body = i);
        }
        const s = ["iconify"];
        return (
          r.prefix !== "" && s.push("iconify--" + r.prefix),
          r.provider !== "" && s.push("iconify--" + r.provider),
          { data: o, classes: s }
        );
      },
    },
    render() {
      this.counter;
      const e = this.$attrs,
        t = this.iconMounted || e.ssr ? this.getIcon(e.icon, e.onLoad, e.customise) : null;
      if (!t) return fu(Bx, e);
      let n = e;
      return (
        t.classes &&
          (n = {
            ...e,
            class: (typeof e.class == "string" ? e.class + " " : "") + t.classes.join(" "),
          }),
        fu({ ...Zr, ...t.data }, n)
      );
    },
  }),
  Wx = {
    getAPIConfig: ks,
    setAPIModule: Ph,
    sendAPIQuery: $h,
    setFetch: ix,
    getFetch: ax,
    listAPIProviders: ox,
  },
  Kx = We({
    name: "@nuxt/icon",
    setup() {
      var r, o;
      const e = pn(),
        t = th().icon;
      Wx.setFetch($fetch.native), Fx("all");
      const n = [];
      if (t.provider === "server") {
        const s =
          ((o = (r = e.app) == null ? void 0 : r.baseURL) == null
            ? void 0
            : o.replace(/\/$/, "")) ?? "";
        n.push(s + (t.localApiEndpoint || "/api/_nuxt_icon")),
          t.fallbackToApi && n.push(t.iconifyApiEndpoint);
      } else n.push(t.iconifyApiEndpoint);
      Oh("", { resources: n });
    },
  }),
  Vx = We({
    name: "nuxt:chunk-reload",
    setup(e) {
      const t = xt(),
        n = pn(),
        r = new Set();
      t.beforeEach(() => {
        r.clear();
      }),
        e.hook("app:chunkError", ({ error: s }) => {
          r.add(s);
        });
      function o(s) {
        const c =
          "href" in s && s.href[0] === "#" ? n.app.baseURL + s.href : yd(n.app.baseURL, s.fullPath);
        kw({ path: c, persistState: !0 });
      }
      e.hook("app:manifest:update", () => {
        t.beforeResolve(o);
      }),
        t.onError((s, i) => {
          r.has(s) && o(i);
        });
    },
  });
var yk =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function zx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nc = { exports: {} };
const Wh = (e) => typeof e == "object" && e !== null,
  Kh = Symbol("skip"),
  du = (e) => Wh(e) && !(e instanceof RegExp) && !(e instanceof Error) && !(e instanceof Date),
  Xi = (e, t, n, r = new WeakMap()) => {
    if (((n = { deep: !1, target: {}, ...n }), r.has(e))) return r.get(e);
    r.set(e, n.target);
    const { target: o } = n;
    delete n.target;
    const s = (i) => i.map((c) => (du(c) ? Xi(c, t, n, r) : c));
    if (Array.isArray(e)) return s(e);
    for (const [i, c] of Object.entries(e)) {
      const a = t(i, c, e);
      if (a === Kh) continue;
      let [u, l, { shouldRecurse: f = !0 } = {}] = a;
      u !== "__proto__" &&
        (n.deep && f && du(l) && (l = Array.isArray(l) ? s(l) : Xi(l, t, n, r)), (o[u] = l));
    }
    return o;
  };
nc.exports = (e, t, n) => {
  if (!Wh(e)) throw new TypeError(`Expected an object, got \`${e}\` (${typeof e})`);
  return Xi(e, t, n);
};
nc.exports.mapObjectSkip = Kh;
var Jx = nc.exports,
  rc = { exports: {} };
const qx = /[\p{Lu}]/u,
  Gx = /[\p{Ll}]/u,
  hu = /^[\p{Lu}](?![\p{Lu}])/gu,
  Vh = /([\p{Alpha}\p{N}_]|$)/u,
  zh = /[_.\- ]+/,
  Yx = new RegExp("^" + zh.source),
  pu = new RegExp(zh.source + Vh.source, "gu"),
  gu = new RegExp("\\d+" + Vh.source, "gu"),
  Qx = (e, t, n) => {
    let r = !1,
      o = !1,
      s = !1;
    for (let i = 0; i < e.length; i++) {
      const c = e[i];
      r && qx.test(c)
        ? ((e = e.slice(0, i) + "-" + e.slice(i)), (r = !1), (s = o), (o = !0), i++)
        : o && s && Gx.test(c)
          ? ((e = e.slice(0, i - 1) + "-" + e.slice(i - 1)), (s = o), (o = !1), (r = !0))
          : ((r = t(c) === c && n(c) !== c), (s = o), (o = n(c) === c && t(c) !== c));
    }
    return e;
  },
  Xx = (e, t) => ((hu.lastIndex = 0), e.replace(hu, (n) => t(n))),
  Zx = (e, t) => (
    (pu.lastIndex = 0), (gu.lastIndex = 0), e.replace(pu, (n, r) => t(r)).replace(gu, (n) => t(n))
  ),
  Jh = (e, t) => {
    if (!(typeof e == "string" || Array.isArray(e)))
      throw new TypeError("Expected the input to be `string | string[]`");
    if (
      ((t = { pascalCase: !1, preserveConsecutiveUppercase: !1, ...t }),
      Array.isArray(e)
        ? (e = e
            .map((s) => s.trim())
            .filter((s) => s.length)
            .join("-"))
        : (e = e.trim()),
      e.length === 0)
    )
      return "";
    const n = t.locale === !1 ? (s) => s.toLowerCase() : (s) => s.toLocaleLowerCase(t.locale),
      r = t.locale === !1 ? (s) => s.toUpperCase() : (s) => s.toLocaleUpperCase(t.locale);
    return e.length === 1
      ? t.pascalCase
        ? r(e)
        : n(e)
      : (e !== n(e) && (e = Qx(e, n, r)),
        (e = e.replace(Yx, "")),
        t.preserveConsecutiveUppercase ? (e = Xx(e, n)) : (e = n(e)),
        t.pascalCase && (e = r(e.charAt(0)) + e.slice(1)),
        Zx(e, r));
  };
rc.exports = Jh;
rc.exports.default = Jh;
var eE = rc.exports;
class tE {
  constructor(t = {}) {
    if (!(t.maxSize && t.maxSize > 0))
      throw new TypeError("`maxSize` must be a number greater than 0");
    (this.maxSize = t.maxSize),
      (this.onEviction = t.onEviction),
      (this.cache = new Map()),
      (this.oldCache = new Map()),
      (this._size = 0);
  }
  _set(t, n) {
    if ((this.cache.set(t, n), this._size++, this._size >= this.maxSize)) {
      if (((this._size = 0), typeof this.onEviction == "function"))
        for (const [r, o] of this.oldCache.entries()) this.onEviction(r, o);
      (this.oldCache = this.cache), (this.cache = new Map());
    }
  }
  get(t) {
    if (this.cache.has(t)) return this.cache.get(t);
    if (this.oldCache.has(t)) {
      const n = this.oldCache.get(t);
      return this.oldCache.delete(t), this._set(t, n), n;
    }
  }
  set(t, n) {
    return this.cache.has(t) ? this.cache.set(t, n) : this._set(t, n), this;
  }
  has(t) {
    return this.cache.has(t) || this.oldCache.has(t);
  }
  peek(t) {
    if (this.cache.has(t)) return this.cache.get(t);
    if (this.oldCache.has(t)) return this.oldCache.get(t);
  }
  delete(t) {
    const n = this.cache.delete(t);
    return n && this._size--, this.oldCache.delete(t) || n;
  }
  clear() {
    this.cache.clear(), this.oldCache.clear(), (this._size = 0);
  }
  *keys() {
    for (const [t] of this) yield t;
  }
  *values() {
    for (const [, t] of this) yield t;
  }
  *[Symbol.iterator]() {
    for (const t of this.cache) yield t;
    for (const t of this.oldCache) {
      const [n] = t;
      this.cache.has(n) || (yield t);
    }
  }
  get size() {
    let t = 0;
    for (const n of this.oldCache.keys()) this.cache.has(n) || t++;
    return Math.min(this._size + t, this.maxSize);
  }
}
var nE = tE;
const mu = Jx,
  rE = eE,
  oE = nE,
  sE = (e, t) => e.some((n) => (typeof n == "string" ? n === t : ((n.lastIndex = 0), n.test(t)))),
  ei = new oE({ maxSize: 1e5 }),
  yu = (e) =>
    typeof e == "object" &&
    e !== null &&
    !(e instanceof RegExp) &&
    !(e instanceof Error) &&
    !(e instanceof Date),
  vu = (e, t) => {
    if (!yu(e)) return e;
    t = { deep: !1, pascalCase: !1, ...t };
    const { exclude: n, pascalCase: r, stopPaths: o, deep: s } = t,
      i = new Set(o),
      c = (a) => (u, l) => {
        if (s && yu(l)) {
          const f = a === void 0 ? u : `${a}.${u}`;
          i.has(f) || (l = mu(l, c(f)));
        }
        if (!(n && sE(n, u))) {
          const f = r ? `${u}_` : u;
          if (ei.has(f)) u = ei.get(f);
          else {
            const d = rE(u, { pascalCase: r, locale: !1 });
            u.length < 100 && ei.set(f, d), (u = d);
          }
        }
        return [u, l];
      };
    return mu(e, c(void 0));
  };
var iE = (e, t) => (Array.isArray(e) ? Object.keys(e).map((n) => vu(e[n], t)) : vu(e, t));
const oc = zx(iE);
var Zi;
(function (e) {
  (e.OpenId = "openid"), (e.OfflineAccess = "offline_access");
})(Zi || (Zi = {}));
var ea;
(function (e) {
  e.Organization = "urn:logto:resource:organizations";
})(ea || (ea = {}));
var be;
(function (e) {
  (e.Profile = "profile"),
    (e.Email = "email"),
    (e.Phone = "phone"),
    (e.CustomData = "custom_data"),
    (e.Identities = "identities"),
    (e.Roles = "roles"),
    (e.Organizations = "urn:logto:scope:organizations"),
    (e.OrganizationRoles = "urn:logto:scope:organization_roles");
})(be || (be = {}));
const aE = Object.freeze({
    [be.Profile]: ["name", "picture", "username"],
    [be.Email]: ["email", "email_verified"],
    [be.Phone]: ["phone_number", "phone_number_verified"],
    [be.Roles]: ["roles"],
    [be.Organizations]: ["organizations"],
    [be.OrganizationRoles]: ["organization_roles"],
    [be.CustomData]: [],
    [be.Identities]: [],
  }),
  cE = Object.freeze({
    [be.Profile]: [],
    [be.Email]: [],
    [be.Phone]: [],
    [be.Roles]: [],
    [be.Organizations]: [],
    [be.OrganizationRoles]: [],
    [be.CustomData]: ["custom_data"],
    [be.Identities]: ["identities"],
  });
Object.freeze(Object.fromEntries(Object.values(be).map((e) => [e, [...aE[e], ...cE[e]]])));
const sc = { formUrlEncoded: { "Content-Type": "application/x-www-form-urlencoded" } };
var es;
(function (e) {
  (e.AuthorizationCode = "authorization_code"), (e.RefreshToken = "refresh_token");
})(es || (es = {}));
var fe;
(function (e) {
  (e.ClientId = "client_id"),
    (e.Code = "code"),
    (e.CodeChallenge = "code_challenge"),
    (e.CodeChallengeMethod = "code_challenge_method"),
    (e.CodeVerifier = "code_verifier"),
    (e.Error = "error"),
    (e.ErrorDescription = "error_description"),
    (e.GrantType = "grant_type"),
    (e.IdToken = "id_token"),
    (e.IdTokenHint = "id_token_hint"),
    (e.LoginHint = "login_hint"),
    (e.PostLogoutRedirectUri = "post_logout_redirect_uri"),
    (e.Prompt = "prompt"),
    (e.RedirectUri = "redirect_uri"),
    (e.RefreshToken = "refresh_token"),
    (e.Resource = "resource"),
    (e.ResponseType = "response_type"),
    (e.Scope = "scope"),
    (e.State = "state"),
    (e.Token = "token"),
    (e.InteractionMode = "interaction_mode"),
    (e.OrganizationId = "organization_id"),
    (e.FirstScreen = "first_screen"),
    (e.DirectSignIn = "direct_sign_in");
})(fe || (fe = {}));
var ts;
(function (e) {
  (e.None = "none"), (e.Consent = "consent"), (e.Login = "login");
})(ts || (ts = {}));
const lE = async (
    { clientId: e, tokenEndpoint: t, redirectUri: n, codeVerifier: r, code: o, resource: s },
    i,
  ) => {
    const c = new URLSearchParams();
    c.append(fe.ClientId, e),
      c.append(fe.Code, o),
      c.append(fe.CodeVerifier, r),
      c.append(fe.RedirectUri, n),
      c.append(fe.GrantType, es.AuthorizationCode),
      s && c.append(fe.Resource, s);
    const a = await i(t, { method: "POST", headers: sc.formUrlEncoded, body: c.toString() });
    return oc(a);
  },
  uE = async (e, t) => {
    const {
        clientId: n,
        tokenEndpoint: r,
        refreshToken: o,
        resource: s,
        organizationId: i,
        scopes: c,
      } = e,
      a = new URLSearchParams();
    a.append(fe.ClientId, n),
      a.append(fe.RefreshToken, o),
      a.append(fe.GrantType, es.RefreshToken),
      s && a.append(fe.Resource, s),
      i && a.append(fe.OrganizationId, i),
      c != null && c.length && a.append(fe.Scope, c.join(" "));
    const u = await t(r, { method: "POST", headers: sc.formUrlEncoded, body: a.toString() });
    return oc(u);
  },
  fE = "/oidc/.well-known/openid-configuration",
  dE = async (e, t) => oc(await t(e)),
  hE = async (e, t, n, r) =>
    r(e, {
      method: "POST",
      headers: sc.formUrlEncoded,
      body: new URLSearchParams({ [fe.ClientId]: t, [fe.Token]: n }).toString(),
    }),
  qh = (e) => {
    const t = Object.values(Zi),
      n = new Set([...t, be.Profile, ...(e ?? [])]);
    return Array.from(n).join(" ");
  },
  pE = "S256",
  gE = "code",
  mE = (e) => (Array.isArray(e) ? e.join(" ") : e ?? ts.Consent),
  yE = ({
    authorizationEndpoint: e,
    clientId: t,
    redirectUri: n,
    codeChallenge: r,
    state: o,
    scopes: s,
    resources: i,
    prompt: c,
    firstScreen: a,
    interactionMode: u,
    loginHint: l,
    directSignIn: f,
    extraParams: d,
    includeReservedScopes: h = !0,
  }) => {
    const p = new URLSearchParams({
        [fe.ClientId]: t,
        [fe.RedirectUri]: n,
        [fe.CodeChallenge]: r,
        [fe.CodeChallengeMethod]: pE,
        [fe.State]: o,
        [fe.ResponseType]: gE,
        [fe.Prompt]: mE(c),
      }),
      b = h ? qh(s) : s == null ? void 0 : s.join(" ");
    b && p.append(fe.Scope, b),
      l && p.append(fe.LoginHint, l),
      f && p.append(fe.DirectSignIn, `${f.method}:${f.target}`);
    for (const E of i ?? []) p.append(fe.Resource, E);
    if ((a ? p.append(fe.FirstScreen, a) : u && p.append(fe.InteractionMode, u), d))
      for (const [E, C] of Object.entries(d)) p.append(E, C);
    return `${e}?${p.toString()}`;
  },
  vE = ({ endSessionEndpoint: e, clientId: t, postLogoutRedirectUri: n }) => {
    const r = new URLSearchParams({ [fe.ClientId]: t });
    return n && r.append(fe.PostLogoutRedirectUri, n), `${e}?${r.toString()}`;
  },
  bE = async (e, t, n) => n(e, { headers: { Authorization: `Bearer ${t}` } }),
  wE = (e) => [...new Set(e)],
  Gh = (e) => !!e,
  ns = (e) => (Gh(e) ? e : void 0),
  _E = (e) => (Gh(e) ? String(e) : ""),
  xE = (e) =>
    e !== null &&
    (typeof e == "object" || typeof e == "function") &&
    "then" in e &&
    typeof e.then == "function",
  EE = (e, t) => {
    try {
      const n = typeof e == "function" ? e() : e;
      return xE(n)
        ? n.catch((r) => {
            t == null || t(r);
          })
        : n;
    } catch {}
  },
  bu = (e) => e.replaceAll("+", "-").replaceAll("/", "_").replaceAll(/=+$/g, ""),
  wu = (e) => e.replaceAll("-", "+").replaceAll("_", "/"),
  Yh = {
    isSafe: (e) => /^[\w-]*$/.test(e),
    encode: (e) => {
      const t = btoa(unescape(encodeURIComponent(e)));
      return bu(t);
    },
    decode: (e) => {
      const t = wu(e);
      return decodeURIComponent(escape(atob(t)));
    },
    replaceNonUrlSafeCharacters: bu,
    restoreNonUrlSafeCharacters: wu,
  },
  tr = (e) => typeof e == "object" && e !== null,
  SE = Object.freeze({
    "id_token.invalid_iat": "Invalid issued at time in the ID token",
    "id_token.invalid_token": "Invalid ID token",
    "callback_uri_verification.redirect_uri_mismatched":
      "The callback URI mismatches the redirect URI.",
    "callback_uri_verification.error_found": "Error found in the callback URI",
    "callback_uri_verification.missing_state": "Missing state in the callback URI",
    "callback_uri_verification.state_mismatched": "State mismatched in the callback URI",
    "callback_uri_verification.missing_code": "Missing code in the callback URI",
    crypto_subtle_unavailable: "Crypto.subtle is unavailable in insecure contexts (non-HTTPS).",
    unexpected_response_error: "Unexpected response error from the server.",
  });
class Ht extends Error {
  constructor(t, n) {
    super(SE[t]), (this.code = t), (this.data = n);
  }
}
const CE = (e) => (tr(e) ? typeof e.code == "string" && typeof e.message == "string" : !1);
class TE extends Error {
  constructor(t, n) {
    super(n), (this.code = t);
  }
}
class kE {
  constructor(t, n) {
    (this.error = t), (this.errorDescription = n);
  }
}
const AE = (e) => {
    const [, t = ""] = e.split("?");
    return new URLSearchParams(t);
  },
  RE = (e, t, n) => {
    if (!e.startsWith(t)) throw new Ht("callback_uri_verification.redirect_uri_mismatched");
    const r = AE(e),
      o = ns(r.get(fe.Error)),
      s = ns(r.get(fe.ErrorDescription));
    if (o) throw new Ht("callback_uri_verification.error_found", new kE(o, s));
    const i = r.get(fe.State);
    if (!i) throw new Ht("callback_uri_verification.missing_state");
    if (i !== n) throw new Ht("callback_uri_verification.state_mismatched");
    const c = r.get(fe.Code);
    if (!c) throw new Ht("callback_uri_verification.missing_code");
    return c;
  };
function IE(e) {
  if (!tr(e)) throw new TypeError("IdToken is expected to be an object");
  for (const t of ["iss", "sub", "aud"])
    if (typeof e[t] != "string") throw new TypeError(`At path: IdToken.${t}: expected a string`);
  for (const t of ["exp", "iat"])
    if (typeof e[t] != "number") throw new TypeError(`At path: IdToken.${t}: expected a number`);
  for (const t of ["at_hash", "name", "username", "picture", "email", "phone_number"])
    if (e[t] !== void 0 && typeof e[t] != "string" && e[t] !== null)
      throw new TypeError(`At path: IdToken.${t}: expected null or a string`);
  for (const t of ["email_verified", "phone_number_verified"])
    if (e[t] !== void 0 && typeof e[t] != "boolean")
      throw new TypeError(`At path: IdToken.${t}: expected a boolean`);
}
const PE = (e) => {
  const { 1: t } = e.split(".");
  if (!t) throw new Ht("id_token.invalid_token");
  const n = Yh.decode(t),
    r = JSON.parse(n);
  return IE(r), r;
};
function OE(e) {
  if (!tr(e)) throw new TypeError("AccessToken is expected to be an object");
  for (const t of ["jti", "iss", "sub", "aud", "client_id", "scope"])
    if (e[t] !== void 0 && typeof e[t] != "string" && e[t] !== null)
      throw new TypeError(`At path: AccessToken.${t}: expected null or a string`);
  for (const t of ["exp", "iat"])
    if (e[t] !== void 0 && typeof e[t] != "number" && e[t] !== null)
      throw new TypeError(`At path: AccessToken.${t}: expected null or a number`);
}
const _u = (e) => {
    const { 1: t } = e.split(".");
    if (!t) return {};
    const n = Yh.decode(t),
      r = JSON.parse(n);
    return OE(r), r;
  },
  ic = crypto,
  Qh = (e) => e instanceof CryptoKey,
  bo = new TextEncoder(),
  As = new TextDecoder();
function ME(...e) {
  const t = e.reduce((o, { length: s }) => o + s, 0),
    n = new Uint8Array(t);
  let r = 0;
  for (const o of e) n.set(o, r), (r += o.length);
  return n;
}
const LE = (e) => {
    const t = atob(e),
      n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
    return n;
  },
  Po = (e) => {
    let t = e;
    t instanceof Uint8Array && (t = As.decode(t)),
      (t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, ""));
    try {
      return LE(t);
    } catch {
      throw new TypeError("The input to be decoded is not correctly encoded.");
    }
  };
class ot extends Error {
  static get code() {
    return "ERR_JOSE_GENERIC";
  }
  constructor(t) {
    var n;
    super(t),
      (this.code = "ERR_JOSE_GENERIC"),
      (this.name = this.constructor.name),
      (n = Error.captureStackTrace) == null || n.call(Error, this, this.constructor);
  }
}
class St extends ot {
  static get code() {
    return "ERR_JWT_CLAIM_VALIDATION_FAILED";
  }
  constructor(t, n, r = "unspecified", o = "unspecified") {
    super(t),
      (this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED"),
      (this.claim = r),
      (this.reason = o),
      (this.payload = n);
  }
}
class xu extends ot {
  static get code() {
    return "ERR_JWT_EXPIRED";
  }
  constructor(t, n, r = "unspecified", o = "unspecified") {
    super(t),
      (this.code = "ERR_JWT_EXPIRED"),
      (this.claim = r),
      (this.reason = o),
      (this.payload = n);
  }
}
class $E extends ot {
  constructor() {
    super(...arguments), (this.code = "ERR_JOSE_ALG_NOT_ALLOWED");
  }
  static get code() {
    return "ERR_JOSE_ALG_NOT_ALLOWED";
  }
}
class Dt extends ot {
  constructor() {
    super(...arguments), (this.code = "ERR_JOSE_NOT_SUPPORTED");
  }
  static get code() {
    return "ERR_JOSE_NOT_SUPPORTED";
  }
}
class Fe extends ot {
  constructor() {
    super(...arguments), (this.code = "ERR_JWS_INVALID");
  }
  static get code() {
    return "ERR_JWS_INVALID";
  }
}
class Xh extends ot {
  constructor() {
    super(...arguments), (this.code = "ERR_JWT_INVALID");
  }
  static get code() {
    return "ERR_JWT_INVALID";
  }
}
class Zh extends ot {
  constructor() {
    super(...arguments), (this.code = "ERR_JWKS_INVALID");
  }
  static get code() {
    return "ERR_JWKS_INVALID";
  }
}
class ep extends ot {
  constructor() {
    super(...arguments),
      (this.code = "ERR_JWKS_NO_MATCHING_KEY"),
      (this.message = "no applicable key found in the JSON Web Key Set");
  }
  static get code() {
    return "ERR_JWKS_NO_MATCHING_KEY";
  }
}
class HE extends ot {
  constructor() {
    super(...arguments),
      (this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS"),
      (this.message = "multiple matching keys found in the JSON Web Key Set");
  }
  static get code() {
    return "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
  }
}
class NE extends ot {
  constructor() {
    super(...arguments), (this.code = "ERR_JWKS_TIMEOUT"), (this.message = "request timed out");
  }
  static get code() {
    return "ERR_JWKS_TIMEOUT";
  }
}
class DE extends ot {
  constructor() {
    super(...arguments),
      (this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"),
      (this.message = "signature verification failed");
  }
  static get code() {
    return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  }
}
function Mt(e, t = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`);
}
function wo(e, t) {
  return e.name === t;
}
function ti(e) {
  return parseInt(e.name.slice(4), 10);
}
function jE(e) {
  switch (e) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function UE(e, t) {
  if (t.length && !t.some((n) => e.usages.includes(n))) {
    let n = "CryptoKey does not support this operation, its usages must include ";
    if (t.length > 2) {
      const r = t.pop();
      n += `one of ${t.join(", ")}, or ${r}.`;
    } else t.length === 2 ? (n += `one of ${t[0]} or ${t[1]}.`) : (n += `${t[0]}.`);
    throw new TypeError(n);
  }
}
function FE(e, t, ...n) {
  switch (t) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!wo(e.algorithm, "HMAC")) throw Mt("HMAC");
      const r = parseInt(t.slice(2), 10);
      if (ti(e.algorithm.hash) !== r) throw Mt(`SHA-${r}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!wo(e.algorithm, "RSASSA-PKCS1-v1_5")) throw Mt("RSASSA-PKCS1-v1_5");
      const r = parseInt(t.slice(2), 10);
      if (ti(e.algorithm.hash) !== r) throw Mt(`SHA-${r}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!wo(e.algorithm, "RSA-PSS")) throw Mt("RSA-PSS");
      const r = parseInt(t.slice(2), 10);
      if (ti(e.algorithm.hash) !== r) throw Mt(`SHA-${r}`, "algorithm.hash");
      break;
    }
    case "EdDSA": {
      if (e.algorithm.name !== "Ed25519" && e.algorithm.name !== "Ed448")
        throw Mt("Ed25519 or Ed448");
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!wo(e.algorithm, "ECDSA")) throw Mt("ECDSA");
      const r = jE(t);
      if (e.algorithm.namedCurve !== r) throw Mt(r, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  UE(e, n);
}
function tp(e, t, ...n) {
  var r;
  if (n.length > 2) {
    const o = n.pop();
    e += `one of type ${n.join(", ")}, or ${o}.`;
  } else n.length === 2 ? (e += `one of type ${n[0]} or ${n[1]}.`) : (e += `of type ${n[0]}.`);
  return (
    t == null
      ? (e += ` Received ${t}`)
      : typeof t == "function" && t.name
        ? (e += ` Received function ${t.name}`)
        : typeof t == "object" &&
          t != null &&
          (r = t.constructor) != null &&
          r.name &&
          (e += ` Received an instance of ${t.constructor.name}`),
    e
  );
}
const Eu = (e, ...t) => tp("Key must be ", e, ...t);
function np(e, t, ...n) {
  return tp(`Key for the ${e} algorithm must be `, t, ...n);
}
const rp = (e) => Qh(e),
  rn = ["CryptoKey"],
  BE = (...e) => {
    const t = e.filter(Boolean);
    if (t.length === 0 || t.length === 1) return !0;
    let n;
    for (const r of t) {
      const o = Object.keys(r);
      if (!n || n.size === 0) {
        n = new Set(o);
        continue;
      }
      for (const s of o) {
        if (n.has(s)) return !1;
        n.add(s);
      }
    }
    return !0;
  };
function WE(e) {
  return typeof e == "object" && e !== null;
}
function Kr(e) {
  if (!WE(e) || Object.prototype.toString.call(e) !== "[object Object]") return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
const KE = (e, t) => {
  if (e.startsWith("RS") || e.startsWith("PS")) {
    const { modulusLength: n } = t.algorithm;
    if (typeof n != "number" || n < 2048)
      throw new TypeError(`${e} requires key modulusLength to be 2048 bits or larger`);
  }
};
function VE(e) {
  let t, n;
  switch (e.kty) {
    case "RSA": {
      switch (e.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          (t = { name: "RSA-PSS", hash: `SHA-${e.alg.slice(-3)}` }),
            (n = e.d ? ["sign"] : ["verify"]);
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          (t = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${e.alg.slice(-3)}` }),
            (n = e.d ? ["sign"] : ["verify"]);
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          (t = { name: "RSA-OAEP", hash: `SHA-${parseInt(e.alg.slice(-3), 10) || 1}` }),
            (n = e.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"]);
          break;
        default:
          throw new Dt('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (e.alg) {
        case "ES256":
          (t = { name: "ECDSA", namedCurve: "P-256" }), (n = e.d ? ["sign"] : ["verify"]);
          break;
        case "ES384":
          (t = { name: "ECDSA", namedCurve: "P-384" }), (n = e.d ? ["sign"] : ["verify"]);
          break;
        case "ES512":
          (t = { name: "ECDSA", namedCurve: "P-521" }), (n = e.d ? ["sign"] : ["verify"]);
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          (t = { name: "ECDH", namedCurve: e.crv }), (n = e.d ? ["deriveBits"] : []);
          break;
        default:
          throw new Dt('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "OKP": {
      switch (e.alg) {
        case "EdDSA":
          (t = { name: e.crv }), (n = e.d ? ["sign"] : ["verify"]);
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          (t = { name: e.crv }), (n = e.d ? ["deriveBits"] : []);
          break;
        default:
          throw new Dt('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new Dt('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm: t, keyUsages: n };
}
const zE = async (e) => {
  if (!e.alg) throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
  const { algorithm: t, keyUsages: n } = VE(e),
    r = [t, e.ext ?? !1, e.key_ops ?? n],
    o = { ...e };
  return delete o.alg, delete o.use, ic.subtle.importKey("jwk", o, ...r);
};
async function JE(e, t) {
  if (!Kr(e)) throw new TypeError("JWK must be an object");
  switch ((t || (t = e.alg), e.kty)) {
    case "oct":
      if (typeof e.k != "string" || !e.k)
        throw new TypeError('missing "k" (Key Value) Parameter value');
      return Po(e.k);
    case "RSA":
      if (e.oth !== void 0)
        throw new Dt('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
    case "EC":
    case "OKP":
      return zE({ ...e, alg: t });
    default:
      throw new Dt('Unsupported "kty" (Key Type) Parameter value');
  }
}
const qE = (e, t) => {
    if (!(t instanceof Uint8Array)) {
      if (!rp(t)) throw new TypeError(np(e, t, ...rn, "Uint8Array"));
      if (t.type !== "secret")
        throw new TypeError(
          `${rn.join(" or ")} instances for symmetric algorithms must be of type "secret"`,
        );
    }
  },
  GE = (e, t, n) => {
    if (!rp(t)) throw new TypeError(np(e, t, ...rn));
    if (t.type === "secret")
      throw new TypeError(
        `${rn.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`,
      );
    if (t.algorithm && n === "verify" && t.type === "private")
      throw new TypeError(
        `${rn.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`,
      );
    if (t.algorithm && n === "encrypt" && t.type === "private")
      throw new TypeError(
        `${rn.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`,
      );
  },
  YE = (e, t, n) => {
    e.startsWith("HS") || e === "dir" || e.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(e)
      ? qE(e, t)
      : GE(e, t, n);
  };
function QE(e, t, n, r, o) {
  if (o.crit !== void 0 && (r == null ? void 0 : r.crit) === void 0)
    throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');
  if (!r || r.crit === void 0) return new Set();
  if (
    !Array.isArray(r.crit) ||
    r.crit.length === 0 ||
    r.crit.some((i) => typeof i != "string" || i.length === 0)
  )
    throw new e(
      '"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present',
    );
  let s;
  n !== void 0 ? (s = new Map([...Object.entries(n), ...t.entries()])) : (s = t);
  for (const i of r.crit) {
    if (!s.has(i)) throw new Dt(`Extension Header Parameter "${i}" is not recognized`);
    if (o[i] === void 0) throw new e(`Extension Header Parameter "${i}" is missing`);
    if (s.get(i) && r[i] === void 0)
      throw new e(`Extension Header Parameter "${i}" MUST be integrity protected`);
  }
  return new Set(r.crit);
}
const XE = (e, t) => {
  if (t !== void 0 && (!Array.isArray(t) || t.some((n) => typeof n != "string")))
    throw new TypeError(`"${e}" option must be an array of strings`);
  if (t) return new Set(t);
};
function ZE(e, t) {
  const n = `SHA-${e.slice(-3)}`;
  switch (e) {
    case "HS256":
    case "HS384":
    case "HS512":
      return { hash: n, name: "HMAC" };
    case "PS256":
    case "PS384":
    case "PS512":
      return { hash: n, name: "RSA-PSS", saltLength: e.slice(-3) >> 3 };
    case "RS256":
    case "RS384":
    case "RS512":
      return { hash: n, name: "RSASSA-PKCS1-v1_5" };
    case "ES256":
    case "ES384":
    case "ES512":
      return { hash: n, name: "ECDSA", namedCurve: t.namedCurve };
    case "EdDSA":
      return { name: t.name };
    default:
      throw new Dt(`alg ${e} is not supported either by JOSE or your javascript runtime`);
  }
}
function eS(e, t, n) {
  if (Qh(t)) return FE(t, e, n), t;
  if (t instanceof Uint8Array) {
    if (!e.startsWith("HS")) throw new TypeError(Eu(t, ...rn));
    return ic.subtle.importKey("raw", t, { hash: `SHA-${e.slice(-3)}`, name: "HMAC" }, !1, [n]);
  }
  throw new TypeError(Eu(t, ...rn, "Uint8Array"));
}
const tS = async (e, t, n, r) => {
  const o = await eS(e, t, "verify");
  KE(e, o);
  const s = ZE(e, o.algorithm);
  try {
    return await ic.subtle.verify(s, o, n, r);
  } catch {
    return !1;
  }
};
async function nS(e, t, n) {
  if (!Kr(e)) throw new Fe("Flattened JWS must be an object");
  if (e.protected === void 0 && e.header === void 0)
    throw new Fe('Flattened JWS must have either of the "protected" or "header" members');
  if (e.protected !== void 0 && typeof e.protected != "string")
    throw new Fe("JWS Protected Header incorrect type");
  if (e.payload === void 0) throw new Fe("JWS Payload missing");
  if (typeof e.signature != "string") throw new Fe("JWS Signature missing or incorrect type");
  if (e.header !== void 0 && !Kr(e.header)) throw new Fe("JWS Unprotected Header incorrect type");
  let r = {};
  if (e.protected)
    try {
      const b = Po(e.protected);
      r = JSON.parse(As.decode(b));
    } catch {
      throw new Fe("JWS Protected Header is invalid");
    }
  if (!BE(r, e.header))
    throw new Fe("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  const o = { ...r, ...e.header },
    s = QE(Fe, new Map([["b64", !0]]), n == null ? void 0 : n.crit, r, o);
  let i = !0;
  if (s.has("b64") && ((i = r.b64), typeof i != "boolean"))
    throw new Fe('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
  const { alg: c } = o;
  if (typeof c != "string" || !c)
    throw new Fe('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  const a = n && XE("algorithms", n.algorithms);
  if (a && !a.has(c)) throw new $E('"alg" (Algorithm) Header Parameter value not allowed');
  if (i) {
    if (typeof e.payload != "string") throw new Fe("JWS Payload must be a string");
  } else if (typeof e.payload != "string" && !(e.payload instanceof Uint8Array))
    throw new Fe("JWS Payload must be a string or an Uint8Array instance");
  let u = !1;
  typeof t == "function" && ((t = await t(r, e)), (u = !0)), YE(c, t, "verify");
  const l = ME(
    bo.encode(e.protected ?? ""),
    bo.encode("."),
    typeof e.payload == "string" ? bo.encode(e.payload) : e.payload,
  );
  let f;
  try {
    f = Po(e.signature);
  } catch {
    throw new Fe("Failed to base64url decode the signature");
  }
  if (!(await tS(c, t, f, l))) throw new DE();
  let h;
  if (i)
    try {
      h = Po(e.payload);
    } catch {
      throw new Fe("Failed to base64url decode the payload");
    }
  else typeof e.payload == "string" ? (h = bo.encode(e.payload)) : (h = e.payload);
  const p = { payload: h };
  return (
    e.protected !== void 0 && (p.protectedHeader = r),
    e.header !== void 0 && (p.unprotectedHeader = e.header),
    u ? { ...p, key: t } : p
  );
}
async function rS(e, t, n) {
  if ((e instanceof Uint8Array && (e = As.decode(e)), typeof e != "string"))
    throw new Fe("Compact JWS must be a string or Uint8Array");
  const { 0: r, 1: o, 2: s, length: i } = e.split(".");
  if (i !== 3) throw new Fe("Invalid Compact JWS");
  const c = await nS({ payload: o, protected: r, signature: s }, t, n),
    a = { payload: c.payload, protectedHeader: c.protectedHeader };
  return typeof t == "function" ? { ...a, key: c.key } : a;
}
const oS = (e) => Math.floor(e.getTime() / 1e3),
  op = 60,
  sp = op * 60,
  ac = sp * 24,
  sS = ac * 7,
  iS = ac * 365.25,
  aS =
    /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i,
  Su = (e) => {
    const t = aS.exec(e);
    if (!t || (t[4] && t[1])) throw new TypeError("Invalid time period format");
    const n = parseFloat(t[2]),
      r = t[3].toLowerCase();
    let o;
    switch (r) {
      case "sec":
      case "secs":
      case "second":
      case "seconds":
      case "s":
        o = Math.round(n);
        break;
      case "minute":
      case "minutes":
      case "min":
      case "mins":
      case "m":
        o = Math.round(n * op);
        break;
      case "hour":
      case "hours":
      case "hr":
      case "hrs":
      case "h":
        o = Math.round(n * sp);
        break;
      case "day":
      case "days":
      case "d":
        o = Math.round(n * ac);
        break;
      case "week":
      case "weeks":
      case "w":
        o = Math.round(n * sS);
        break;
      default:
        o = Math.round(n * iS);
        break;
    }
    return t[1] === "-" || t[4] === "ago" ? -o : o;
  },
  Cu = (e) => e.toLowerCase().replace(/^application\//, ""),
  cS = (e, t) =>
    typeof e == "string"
      ? t.includes(e)
      : Array.isArray(e)
        ? t.some(Set.prototype.has.bind(new Set(e)))
        : !1,
  lS = (e, t, n = {}) => {
    let r;
    try {
      r = JSON.parse(As.decode(t));
    } catch {}
    if (!Kr(r)) throw new Xh("JWT Claims Set must be a top-level JSON object");
    const { typ: o } = n;
    if (o && (typeof e.typ != "string" || Cu(e.typ) !== Cu(o)))
      throw new St('unexpected "typ" JWT header value', r, "typ", "check_failed");
    const { requiredClaims: s = [], issuer: i, subject: c, audience: a, maxTokenAge: u } = n,
      l = [...s];
    u !== void 0 && l.push("iat"),
      a !== void 0 && l.push("aud"),
      c !== void 0 && l.push("sub"),
      i !== void 0 && l.push("iss");
    for (const p of new Set(l.reverse()))
      if (!(p in r)) throw new St(`missing required "${p}" claim`, r, p, "missing");
    if (i && !(Array.isArray(i) ? i : [i]).includes(r.iss))
      throw new St('unexpected "iss" claim value', r, "iss", "check_failed");
    if (c && r.sub !== c) throw new St('unexpected "sub" claim value', r, "sub", "check_failed");
    if (a && !cS(r.aud, typeof a == "string" ? [a] : a))
      throw new St('unexpected "aud" claim value', r, "aud", "check_failed");
    let f;
    switch (typeof n.clockTolerance) {
      case "string":
        f = Su(n.clockTolerance);
        break;
      case "number":
        f = n.clockTolerance;
        break;
      case "undefined":
        f = 0;
        break;
      default:
        throw new TypeError("Invalid clockTolerance option type");
    }
    const { currentDate: d } = n,
      h = oS(d || new Date());
    if ((r.iat !== void 0 || u) && typeof r.iat != "number")
      throw new St('"iat" claim must be a number', r, "iat", "invalid");
    if (r.nbf !== void 0) {
      if (typeof r.nbf != "number")
        throw new St('"nbf" claim must be a number', r, "nbf", "invalid");
      if (r.nbf > h + f)
        throw new St('"nbf" claim timestamp check failed', r, "nbf", "check_failed");
    }
    if (r.exp !== void 0) {
      if (typeof r.exp != "number")
        throw new St('"exp" claim must be a number', r, "exp", "invalid");
      if (r.exp <= h - f)
        throw new xu('"exp" claim timestamp check failed', r, "exp", "check_failed");
    }
    if (u) {
      const p = h - r.iat,
        b = typeof u == "number" ? u : Su(u);
      if (p - f > b)
        throw new xu(
          '"iat" claim timestamp check failed (too far in the past)',
          r,
          "iat",
          "check_failed",
        );
      if (p < 0 - f)
        throw new St(
          '"iat" claim timestamp check failed (it should be in the past)',
          r,
          "iat",
          "check_failed",
        );
    }
    return r;
  };
async function uS(e, t, n) {
  var i;
  const r = await rS(e, t, n);
  if ((i = r.protectedHeader.crit) != null && i.includes("b64") && r.protectedHeader.b64 === !1)
    throw new Xh("JWTs MUST NOT use unencoded payload");
  const s = { payload: lS(r.protectedHeader, r.payload, n), protectedHeader: r.protectedHeader };
  return typeof t == "function" ? { ...s, key: r.key } : s;
}
function fS(e) {
  switch (typeof e == "string" && e.slice(0, 2)) {
    case "RS":
    case "PS":
      return "RSA";
    case "ES":
      return "EC";
    case "Ed":
      return "OKP";
    default:
      throw new Dt('Unsupported "alg" value for a JSON Web Key Set');
  }
}
function dS(e) {
  return e && typeof e == "object" && Array.isArray(e.keys) && e.keys.every(hS);
}
function hS(e) {
  return Kr(e);
}
function ip(e) {
  return typeof structuredClone == "function" ? structuredClone(e) : JSON.parse(JSON.stringify(e));
}
class pS {
  constructor(t) {
    if (((this._cached = new WeakMap()), !dS(t))) throw new Zh("JSON Web Key Set malformed");
    this._jwks = ip(t);
  }
  async getKey(t, n) {
    const { alg: r, kid: o } = { ...t, ...(n == null ? void 0 : n.header) },
      s = fS(r),
      i = this._jwks.keys.filter((u) => {
        let l = s === u.kty;
        if (
          (l && typeof o == "string" && (l = o === u.kid),
          l && typeof u.alg == "string" && (l = r === u.alg),
          l && typeof u.use == "string" && (l = u.use === "sig"),
          l && Array.isArray(u.key_ops) && (l = u.key_ops.includes("verify")),
          l && r === "EdDSA" && (l = u.crv === "Ed25519" || u.crv === "Ed448"),
          l)
        )
          switch (r) {
            case "ES256":
              l = u.crv === "P-256";
              break;
            case "ES256K":
              l = u.crv === "secp256k1";
              break;
            case "ES384":
              l = u.crv === "P-384";
              break;
            case "ES512":
              l = u.crv === "P-521";
              break;
          }
        return l;
      }),
      { 0: c, length: a } = i;
    if (a === 0) throw new ep();
    if (a !== 1) {
      const u = new HE(),
        { _cached: l } = this;
      throw (
        ((u[Symbol.asyncIterator] = async function* () {
          for (const f of i)
            try {
              yield await Tu(l, f, r);
            } catch {}
        }),
        u)
      );
    }
    return Tu(this._cached, c, r);
  }
}
async function Tu(e, t, n) {
  const r = e.get(t) || e.set(t, {}).get(t);
  if (r[n] === void 0) {
    const o = await JE({ ...t, ext: !0 }, n);
    if (o instanceof Uint8Array || o.type !== "public")
      throw new Zh("JSON Web Key Set members must be public keys");
    r[n] = o;
  }
  return r[n];
}
function gS(e) {
  const t = new pS(e),
    n = async (r, o) => t.getKey(r, o);
  return (
    Object.defineProperties(n, {
      jwks: { value: () => ip(t._jwks), enumerable: !0, configurable: !1, writable: !1 },
    }),
    n
  );
}
const mS = async (e, t, n) => {
  let r,
    o,
    s = !1;
  typeof AbortController == "function" &&
    ((r = new AbortController()),
    (o = setTimeout(() => {
      (s = !0), r.abort();
    }, t)));
  const i = await fetch(e.href, {
    signal: r ? r.signal : void 0,
    redirect: "manual",
    headers: n.headers,
  }).catch((c) => {
    throw s ? new NE() : c;
  });
  if ((o !== void 0 && clearTimeout(o), i.status !== 200))
    throw new ot("Expected 200 OK from the JSON Web Key Set HTTP response");
  try {
    return await i.json();
  } catch {
    throw new ot("Failed to parse the JSON Web Key Set HTTP response as JSON");
  }
};
function yS() {
  return (
    typeof WebSocketPair < "u" ||
    (typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers") ||
    (typeof EdgeRuntime < "u" && EdgeRuntime === "vercel")
  );
}
let ta;
var _o, ju;
(typeof navigator > "u" ||
  !(
    (ju = (_o = navigator.userAgent) == null ? void 0 : _o.startsWith) != null &&
    ju.call(_o, "Mozilla/5.0 ")
  )) &&
  (ta = "jose/v5.4.0");
class vS {
  constructor(t, n) {
    if (!(t instanceof URL)) throw new TypeError("url must be an instance of URL");
    (this._url = new URL(t.href)),
      (this._options = {
        agent: n == null ? void 0 : n.agent,
        headers: n == null ? void 0 : n.headers,
      }),
      (this._timeoutDuration =
        typeof (n == null ? void 0 : n.timeoutDuration) == "number"
          ? n == null
            ? void 0
            : n.timeoutDuration
          : 5e3),
      (this._cooldownDuration =
        typeof (n == null ? void 0 : n.cooldownDuration) == "number"
          ? n == null
            ? void 0
            : n.cooldownDuration
          : 3e4),
      (this._cacheMaxAge =
        typeof (n == null ? void 0 : n.cacheMaxAge) == "number"
          ? n == null
            ? void 0
            : n.cacheMaxAge
          : 6e5);
  }
  coolingDown() {
    return typeof this._jwksTimestamp == "number"
      ? Date.now() < this._jwksTimestamp + this._cooldownDuration
      : !1;
  }
  fresh() {
    return typeof this._jwksTimestamp == "number"
      ? Date.now() < this._jwksTimestamp + this._cacheMaxAge
      : !1;
  }
  async getKey(t, n) {
    (!this._local || !this.fresh()) && (await this.reload());
    try {
      return await this._local(t, n);
    } catch (r) {
      if (r instanceof ep && this.coolingDown() === !1)
        return await this.reload(), this._local(t, n);
      throw r;
    }
  }
  async reload() {
    this._pendingFetch && yS() && (this._pendingFetch = void 0);
    const t = new Headers(this._options.headers);
    ta &&
      !t.has("User-Agent") &&
      (t.set("User-Agent", ta), (this._options.headers = Object.fromEntries(t.entries()))),
      this._pendingFetch ||
        (this._pendingFetch = mS(this._url, this._timeoutDuration, this._options)
          .then((n) => {
            (this._local = gS(n)),
              (this._jwksTimestamp = Date.now()),
              (this._pendingFetch = void 0);
          })
          .catch((n) => {
            throw ((this._pendingFetch = void 0), n);
          })),
      await this._pendingFetch;
  }
}
function bS(e, t) {
  const n = new vS(e, t),
    r = async (o, s) => n.getKey(o, s);
  return (
    Object.defineProperties(r, {
      coolingDown: { get: () => n.coolingDown(), enumerable: !0, configurable: !1 },
      fresh: { get: () => n.fresh(), enumerable: !0, configurable: !1 },
      reload: { value: () => n.reload(), enumerable: !0, configurable: !1, writable: !1 },
      reloading: { get: () => !!n._pendingFetch, enumerable: !0, configurable: !1 },
      jwks: {
        value: () => {
          var o;
          return (o = n._local) == null ? void 0 : o.jwks();
        },
        enumerable: !0,
        configurable: !1,
        writable: !1,
      },
    }),
    r
  );
}
const wS = 300,
  _S = async (e, t, n, r) => {
    const o = await uS(e, r, { audience: t, issuer: n });
    if (Math.abs((o.payload.iat ?? 0) - Date.now() / 1e3) > wS)
      throw new Ht("id_token.invalid_iat");
  };
class xS {
  constructor(t) {
    this.client = t;
  }
  async verifyIdToken(t) {
    const { appId: n } = this.client.logtoConfig,
      { issuer: r, jwksUri: o } = await this.client.getOidcConfig();
    this.getJwtVerifyGetKey || (this.getJwtVerifyGetKey = bS(new URL(o))),
      await _S(t, n, r, this.getJwtVerifyGetKey);
  }
}
var Ir;
(function (e) {
  (e.IdToken = "idToken"),
    (e.RefreshToken = "refreshToken"),
    (e.AccessToken = "accessToken"),
    (e.SignInSession = "signInSession");
})(Ir || (Ir = {}));
var na;
(function (e) {
  (e.OpenidConfig = "openidConfiguration"), (e.Jwks = "jwks");
})(na || (na = {}));
class ES {
  constructor(t) {
    Object.assign(this, t);
  }
  async setStorageItem(t, n) {
    if (!n) {
      await this.storage.removeItem(t);
      return;
    }
    await this.storage.setItem(t, n);
  }
  async getCachedObject(t) {
    const n = await EE(async () => {
      var o;
      const r = await ((o = this.unstable_cache) == null ? void 0 : o.getItem(t));
      return ns(r && JSON.parse(r));
    });
    if (n && typeof n == "object") return n;
  }
  async getWithCache(t, n) {
    var s;
    const r = await this.getCachedObject(t);
    if (r) return r;
    const o = await n();
    return await ((s = this.unstable_cache) == null ? void 0 : s.setItem(t, JSON.stringify(o))), o;
  }
}
const SS = Object.freeze({
  "sign_in_session.invalid": "Invalid sign-in session.",
  "sign_in_session.not_found": "Sign-in session not found.",
  not_authenticated: "Not authenticated.",
  fetch_user_info_failed: "Unable to fetch user info. The access token may be invalid.",
  user_cancelled: "The user cancelled the action.",
  missing_scope_organizations: `The \`${be.Organizations}\` scope is required`,
});
class bn extends Error {
  constructor(t, n) {
    super(SS[t]), (this.name = "LogtoClientError"), (this.code = t), (this.data = n);
  }
}
const CS = (e) => {
    const { prompt: t = ts.Consent, scopes: n = [], resources: r, ...o } = e,
      s = e.includeReservedScopes ?? !0;
    return {
      ...o,
      prompt: t,
      scopes: s ? qh(n).split(" ") : n,
      resources: n.includes(be.Organizations) ? wE([...(r ?? []), ea.Organization]) : r,
    };
  },
  TS = (e) =>
    tr(e) ? ["redirectUri", "codeVerifier", "state"].every((t) => typeof e[t] == "string") : !1,
  kS = (e) =>
    tr(e)
      ? Object.values(e).every((t) =>
          tr(t)
            ? typeof t.token == "string" &&
              typeof t.scope == "string" &&
              typeof t.expiresAt == "number"
            : !1,
        )
      : !1,
  ni = (e = "", t, n = []) => `${n.slice().sort().join(" ")}@${e}${_E(t && `#${t}`)}`,
  AS = (e) => new URL(fE, e).toString();
function pr(e) {
  const t = new Map();
  return async function (...r) {
    const o = JSON.stringify(r),
      s = t.get(o);
    if (s) return s;
    const i = (async () => {
      try {
        return await e.apply(this, r);
      } finally {
        t.delete(o);
      }
    })();
    return t.set(o, i), i;
  };
}
function RS(e) {
  let t = !1,
    n;
  return function (...r) {
    return t || ((t = !0), (n = e.apply(this, r))), n;
  };
}
var Ze, ap, cp, lp, up, fp, dp;
class IS {
  constructor(t, n, r) {
    dc(this, Ze);
    (this.getOidcConfig = RS(gn(this, Ze, ap))),
      (this.getAccessToken = pr(gn(this, Ze, cp))),
      (this.getOrganizationToken = pr(gn(this, Ze, lp))),
      (this.clearAccessToken = pr(gn(this, Ze, up))),
      (this.clearAllTokens = pr(gn(this, Ze, fp))),
      (this.handleSignInCallback = pr(gn(this, Ze, dp))),
      (this.accessTokenMap = new Map()),
      (this.logtoConfig = CS(t)),
      (this.adapter = new ES(n)),
      (this.jwtVerifier = r(this)),
      this.loadAccessTokenMap();
  }
  async isAuthenticated() {
    return !!(await this.getIdToken());
  }
  async getRefreshToken() {
    return this.adapter.storage.getItem("refreshToken");
  }
  async getIdToken() {
    return this.adapter.storage.getItem("idToken");
  }
  async getIdTokenClaims() {
    const t = await this.getIdToken();
    if (!t) throw new bn("not_authenticated");
    return PE(t);
  }
  async getAccessTokenClaims(t) {
    const n = await this.getAccessToken(t);
    return _u(n);
  }
  async getOrganizationTokenClaims(t) {
    const n = await this.getOrganizationToken(t);
    return _u(n);
  }
  async fetchUserInfo() {
    const { userinfoEndpoint: t } = await this.getOidcConfig(),
      n = await this.getAccessToken();
    if (!n) throw new bn("fetch_user_info_failed");
    return bE(t, n, this.adapter.requester);
  }
  async signIn(t, n, r) {
    const {
        redirectUri: o,
        postRedirectUri: s,
        firstScreen: i,
        interactionMode: c,
        loginHint: a,
        directSignIn: u,
        extraParams: l,
        prompt: f,
      } = typeof t == "string" || t instanceof URL
        ? {
            redirectUri: t,
            postRedirectUri: void 0,
            firstScreen: void 0,
            interactionMode: n,
            loginHint: r,
            directSignIn: void 0,
            extraParams: void 0,
            prompt: void 0,
          }
        : t,
      d = o.toString(),
      h = s == null ? void 0 : s.toString(),
      { appId: p, prompt: b, resources: E, scopes: C } = this.logtoConfig,
      { authorizationEndpoint: v } = await this.getOidcConfig(),
      [m, y] = await Promise.all([
        this.adapter.generateCodeVerifier(),
        this.adapter.generateState(),
      ]),
      x = await this.adapter.generateCodeChallenge(m),
      _ = yE({
        authorizationEndpoint: v,
        clientId: p,
        redirectUri: d.toString(),
        codeChallenge: x,
        state: y,
        scopes: C,
        resources: E,
        prompt: f ?? b,
        firstScreen: i,
        interactionMode: c,
        loginHint: a,
        directSignIn: u,
        extraParams: l,
      });
    await Promise.all([
      this.setSignInSession({ redirectUri: d, postRedirectUri: h, codeVerifier: m, state: y }),
      this.clearAllTokens(),
    ]),
      await this.adapter.navigate(_, { redirectUri: d, for: "sign-in" });
  }
  async isSignInRedirected(t) {
    const n = await this.getSignInSession();
    if (!n) return !1;
    const { redirectUri: r } = n,
      { origin: o, pathname: s } = new URL(t);
    return `${o}${s}` === r;
  }
  async signOut(t) {
    const { appId: n } = this.logtoConfig,
      { endSessionEndpoint: r, revocationEndpoint: o } = await this.getOidcConfig(),
      s = await this.getRefreshToken();
    if (s)
      try {
        await hE(o, n, s, this.adapter.requester);
      } catch {}
    const i = vE({ endSessionEndpoint: r, postLogoutRedirectUri: t, clientId: n });
    await this.clearAllTokens(),
      await this.adapter.navigate(i, { redirectUri: t, for: "sign-out" });
  }
  async getSignInSession() {
    const t = await this.adapter.storage.getItem("signInSession");
    if (!t) return null;
    const n = JSON.parse(t);
    if (!TS(n)) throw new bn("sign_in_session.invalid");
    return n;
  }
  async setSignInSession(t) {
    return this.adapter.setStorageItem(Ir.SignInSession, t && JSON.stringify(t));
  }
  async setIdToken(t) {
    return this.adapter.setStorageItem(Ir.IdToken, t);
  }
  async setRefreshToken(t) {
    return this.adapter.setStorageItem(Ir.RefreshToken, t);
  }
  async getAccessTokenByRefreshToken(t, n) {
    const r = await this.getRefreshToken();
    if (!r) throw new bn("not_authenticated");
    const o = ni(t, n),
      { appId: s } = this.logtoConfig,
      { tokenEndpoint: i } = await this.getOidcConfig(),
      c = Math.round(Date.now() / 1e3),
      {
        accessToken: a,
        refreshToken: u,
        idToken: l,
        scope: f,
        expiresIn: d,
      } = await uE(
        { clientId: s, tokenEndpoint: i, refreshToken: r, resource: t, organizationId: n },
        this.adapter.requester,
      );
    return (
      this.accessTokenMap.set(o, { token: a, scope: f, expiresAt: c + d }),
      await this.saveAccessTokenMap(),
      u && (await this.setRefreshToken(u)),
      l && (await this.jwtVerifier.verifyIdToken(l), await this.setIdToken(l)),
      a
    );
  }
  async saveAccessTokenMap() {
    const t = {};
    for (const [n, r] of this.accessTokenMap.entries()) t[n] = r;
    await this.adapter.storage.setItem("accessToken", JSON.stringify(t));
  }
  async loadAccessTokenMap() {
    const t = await this.adapter.storage.getItem("accessToken");
    if (t)
      try {
        const n = JSON.parse(t);
        if (!kS(n)) return;
        this.accessTokenMap.clear();
        for (const [r, o] of Object.entries(n)) this.accessTokenMap.set(r, o);
      } catch (n) {
        console.warn(n);
      }
  }
}
(Ze = new WeakSet()),
  (ap = async function () {
    return this.adapter.getWithCache(na.OpenidConfig, async () =>
      dE(AS(this.logtoConfig.endpoint), this.adapter.requester),
    );
  }),
  (cp = async function (t, n) {
    if (!(await this.isAuthenticated())) throw new bn("not_authenticated");
    const r = ni(t, n),
      o = this.accessTokenMap.get(r);
    return o && o.expiresAt > Date.now() / 1e3
      ? o.token
      : (o && this.accessTokenMap.delete(r), this.getAccessTokenByRefreshToken(t, n));
  }),
  (lp = async function (t) {
    var n;
    if (!((n = this.logtoConfig.scopes) != null && n.includes(be.Organizations)))
      throw new bn("missing_scope_organizations");
    return this.getAccessToken(void 0, t);
  }),
  (up = async function () {
    this.accessTokenMap.clear(), await this.adapter.storage.removeItem("accessToken");
  }),
  (fp = async function () {
    await Promise.all([this.setRefreshToken(null), this.setIdToken(null), this.clearAccessToken()]);
  }),
  (dp = async function (t) {
    const n = await this.getSignInSession();
    if (!n) throw new bn("sign_in_session.not_found");
    const { redirectUri: r, postRedirectUri: o, state: s, codeVerifier: i } = n,
      c = RE(t, r, s),
      a = ni(),
      { appId: u } = this.logtoConfig,
      { tokenEndpoint: l } = await this.getOidcConfig(),
      f = Math.round(Date.now() / 1e3),
      {
        idToken: d,
        refreshToken: h,
        accessToken: p,
        scope: b,
        expiresIn: E,
      } = await lE(
        { clientId: u, tokenEndpoint: l, redirectUri: r, codeVerifier: i, code: c },
        this.adapter.requester,
      );
    await this.jwtVerifier.verifyIdToken(d),
      await this.setRefreshToken(h ?? null),
      await this.setIdToken(d),
      this.accessTokenMap.set(a, { token: p, scope: b, expiresAt: f + E }),
      await this.saveAccessTokenMap(),
      await this.setSignInSession(null),
      o && (await this.adapter.navigate(o, { for: "post-sign-in" }));
  });
const PS =
  (e) =>
  async (...t) => {
    const n = await e(...t);
    if (!n.ok) {
      const r = await n.json();
      if ((console.error(`Logto requester error: [status=${n.status}]`, r), !CE(r)))
        throw new Ht("unexpected_response_error", r);
      const { code: o, message: s } = r;
      throw new TE(o, s);
    }
    return n.json();
  };
let OS = class extends IS {
  constructor(t, n, r) {
    super(t, n, r ?? ((o) => new xS(o)));
  }
};
const ku = "logto_cache";
class MS {
  constructor(t) {
    this.appId = t;
  }
  getKey(t) {
    return t === void 0 ? `${ku}:${this.appId}` : `${ku}:${this.appId}:${t}`;
  }
  async getItem(t) {
    return sessionStorage.getItem(this.getKey(t));
  }
  async setItem(t, n) {
    sessionStorage.setItem(this.getKey(t), n);
  }
  async removeItem(t) {
    sessionStorage.removeItem(`${this.getKey(t)}`);
  }
}
const Au = "logto";
class LS {
  constructor(t) {
    this.appId = t;
  }
  getKey(t) {
    return t === void 0 ? `${Au}:${this.appId}` : `${Au}:${this.appId}:${t}`;
  }
  async getItem(t) {
    return t === "signInSession"
      ? sessionStorage.getItem(this.getKey(t)) ?? sessionStorage.getItem(this.getKey())
      : localStorage.getItem(this.getKey(t));
  }
  async setItem(t, n) {
    if (t === "signInSession") {
      sessionStorage.setItem(this.getKey(t), n);
      return;
    }
    localStorage.setItem(this.getKey(t), n);
  }
  async removeItem(t) {
    if (t === "signInSession") {
      sessionStorage.removeItem(this.getKey(t));
      return;
    }
    localStorage.removeItem(this.getKey(t));
  }
}
const hp = typeof Buffer == "function";
typeof TextDecoder == "function" && new TextDecoder();
typeof TextEncoder == "function" && new TextEncoder();
const $S = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  vr = Array.prototype.slice.call($S);
((e) => {
  let t = {};
  return e.forEach((n, r) => (t[n] = r)), t;
})(vr);
const HS = String.fromCharCode.bind(String);
typeof Uint8Array.from == "function" && Uint8Array.from.bind(Uint8Array);
const NS = (e) => e.replace(/=/g, "").replace(/[+\/]/g, (t) => (t == "+" ? "-" : "_")),
  DS = (e) => {
    let t,
      n,
      r,
      o,
      s = "";
    const i = e.length % 3;
    for (let c = 0; c < e.length; ) {
      if (
        (n = e.charCodeAt(c++)) > 255 ||
        (r = e.charCodeAt(c++)) > 255 ||
        (o = e.charCodeAt(c++)) > 255
      )
        throw new TypeError("invalid character found");
      (t = (n << 16) | (r << 8) | o),
        (s += vr[(t >> 18) & 63] + vr[(t >> 12) & 63] + vr[(t >> 6) & 63] + vr[t & 63]);
    }
    return i ? s.slice(0, i - 3) + "===".substring(i) : s;
  },
  jS =
    typeof btoa == "function"
      ? (e) => btoa(e)
      : hp
        ? (e) => Buffer.from(e, "binary").toString("base64")
        : DS,
  Ru = hp
    ? (e) => Buffer.from(e).toString("base64")
    : (e) => {
        let n = [];
        for (let r = 0, o = e.length; r < o; r += 4096)
          n.push(HS.apply(null, e.subarray(r, r + 4096)));
        return jS(n.join(""));
      },
  pp = (e, t = !1) => (t ? NS(Ru(e)) : Ru(e)),
  gp = (e = 64) => pp(crypto.getRandomValues(new Uint8Array(e)), !0),
  US = () => gp(),
  FS = () => gp(),
  BS = async (e) => {
    if (crypto.subtle === void 0) throw new Ht("crypto_subtle_unavailable");
    const t = new TextEncoder().encode(e),
      n = new Uint8Array(await crypto.subtle.digest("SHA-256", t));
    return pp(n, !0);
  },
  WS = (e) => {
    window.location.assign(e);
  };
class KS extends OS {
  constructor(t, n = !1) {
    const r = PS(fetch);
    super(t, {
      requester: r,
      navigate: WS,
      storage: new LS(t.appId),
      unstable_cache: ns(n && new MS(t.appId)),
      generateCodeChallenge: BS,
      generateCodeVerifier: FS,
      generateState: US,
    });
  }
}
const mp = "@logto/vue",
  yp = "@logto/vue:context",
  VS = (e) => {
    const t = df(_t({ logtoClient: e, isAuthenticated: !1, loadingCount: 1, error: void 0 })),
      { isAuthenticated: n, loadingCount: r, error: o } = t,
      s = he(() => r.value > 0),
      i = (u, l) => {
        u instanceof Error ? (o.value = u) : l && (o.value = new Error(l)), console.error(o);
      },
      c = (u) => {
        u ? (r.value += 1) : (r.value = Math.max(0, r.value - 1));
      },
      a = (u) => {
        n.value = u;
      };
    return (
      (async () => {
        const u = await e.isAuthenticated();
        a(u), c(!1);
      })(),
      { ...t, isLoading: s, setError: i, setLoading: c, setIsAuthenticated: a }
    );
  },
  rs = () => {
    throw new Error("Must install Logto plugin first.");
  },
  vp = (e) => {
    const { logtoClient: t, setLoading: n, setError: r, setIsAuthenticated: o } = e,
      s = t.value ?? rs(),
      i =
        (u, l = !0) =>
        async (...f) => {
          try {
            return n(!0), await u(...f);
          } catch (d) {
            r(d, `Unexpected error occurred while calling ${u.name}.`);
          } finally {
            l && n(!1);
          }
        };
    return {
      ...{
        getRefreshToken: i(s.getRefreshToken.bind(s)),
        getAccessToken: i(s.getAccessToken.bind(s)),
        getAccessTokenClaims: i(s.getAccessTokenClaims.bind(s)),
        getOrganizationToken: i(s.getOrganizationToken.bind(s)),
        getOrganizationTokenClaims: i(s.getOrganizationTokenClaims.bind(s)),
        getIdToken: i(s.getIdToken.bind(s)),
        getIdTokenClaims: i(s.getIdTokenClaims.bind(s)),
        signIn: i(s.signIn.bind(s), !1),
        signOut: i(s.signOut.bind(s)),
        fetchUserInfo: i(s.fetchUserInfo.bind(s)),
        clearAccessToken: i(s.clearAccessToken.bind(s)),
        clearAllTokens: i(s.clearAllTokens.bind(s)),
      },
      handleSignInCallback: async (u, l) => {
        if (!t.value) return rs();
        try {
          n(!0),
            console.log("handleSignInCallback"),
            await t.value.handleSignInCallback(u),
            o(!0),
            l == null || l();
        } catch (f) {
          r(f, "Unexpected error occurred while handling sign in callback.");
        } finally {
          n(!1);
        }
      },
    };
  },
  zS = {
    install(e, t) {
      const n = new KS(t),
        r = VS(n),
        o = vp(r),
        { isAuthenticated: s, isLoading: i, error: c } = r;
      e.provide(yp, r),
        e.provide(mp, { isAuthenticated: sn(s), isLoading: sn(i), error: sn(c), ...o });
    },
  },
  JS = () => {
    const e = Me(mp);
    return e || rs();
  },
  bk = (e) => {
    const t = Me(yp);
    if (!t) return rs();
    const { isAuthenticated: n, isLoading: r, logtoClient: o, error: s } = t,
      { handleSignInCallback: i } = vp(t);
    return (
      Ut(async () => {
        if (!o.value) return;
        const c = window.location.href,
          a = await o.value.isAuthenticated(),
          u = await o.value.isSignInRedirected(c);
        console.log("isAuthenticated", a), console.log("isRedirected", u), !a && u && i(c, e);
      }),
      { isLoading: sn(r), isAuthenticated: sn(n), error: sn(s) }
    );
  };
let ir, Rs;
async function qS() {
  (ir = JS()), (Rs = pn());
}
async function GS(e) {
  e && ZS(e), ir.signIn(Rs.public.signInRedirectURI);
}
function wk() {
  return ir.signOut(Rs.public.signOutRedirectURI);
}
function YS() {
  return ir.isAuthenticated.value;
}
async function QS() {
  return await ir.getAccessToken(Rs.public.backendEndpoint);
}
function XS() {
  return ir.fetchUserInfo();
}
function _k() {
  let e = sessionStorage.getItem("callback");
  return e ? (sessionStorage.removeItem("callback"), e) : "/";
}
function ZS(e) {
  sessionStorage.setItem("callback", e);
}
const eC = We((e) => {
  const t = pn(),
    n = {
      endpoint: t.public.endpoint,
      appId: t.public.appId,
      scopes: [be.Email, be.Phone, be.CustomData, be.Identities, be.Organizations],
      resources: [t.public.backendEndpoint],
    };
  e.vueApp.use(zS, n), qS();
});
let Pr;
function tC() {
  if (Pr) return Pr;
  const t = pn().public.apiBase;
  Pr = gd.create({
    baseURL: t,
    headers: { "Content-Type": "application/json" },
    async onRequest({ options: n }) {
      const r = await QS();
      n.headers = { ...n.headers, Authorization: `Bearer ${r}` };
    },
    async onResponseError({ request: n, response: r, options: o }) {
      const { message: s } = r._data;
      return (
        Array.isArray(s)
          ? s.forEach((i) => {
              _n == null || _n(i, r.status);
            })
          : _n == null || _n(s, r.status),
        Promise.reject(r._data)
      );
    },
    retry: 3,
    retryDelay: 1e3,
  });
}
let _n;
function nC(e) {
  _n = e;
}
function bp() {
  if (!Pr) throw new Error("HTTP client not initialized. Call setupHttp first.");
  return Pr;
}
const rC = We(() => {
  tC();
});
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let wp;
const Is = (e) => (wp = e),
  _p = Symbol();
function ra(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var Or;
(function (e) {
  (e.direct = "direct"), (e.patchObject = "patch object"), (e.patchFunction = "patch function");
})(Or || (Or = {}));
function oC() {
  const e = is(!0),
    t = e.run(() => ie({}));
  let n = [],
    r = [];
  const o = ma({
    install(s) {
      Is(o),
        (o._a = s),
        s.provide(_p, o),
        (s.config.globalProperties.$pinia = o),
        r.forEach((i) => n.push(i)),
        (r = []);
    },
    use(s) {
      return !this._a && !c_ ? r.push(s) : n.push(s), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return o;
}
const xp = () => {};
function Iu(e, t, n, r = xp) {
  e.push(t);
  const o = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), r());
  };
  return !n && Jr() && Mo(o), o;
}
function $n(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const sC = (e) => e();
function oa(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      o = e[n];
    ra(o) && ra(r) && e.hasOwnProperty(n) && !Ie(r) && !Tn(r) ? (e[n] = oa(o, r)) : (e[n] = r);
  }
  return e;
}
const iC = Symbol();
function aC(e) {
  return !ra(e) || !e.hasOwnProperty(iC);
}
const { assign: Yt } = Object;
function cC(e) {
  return !!(Ie(e) && e.effect);
}
function lC(e, t, n, r) {
  const { state: o, actions: s, getters: i } = t,
    c = n.state.value[e];
  let a;
  function u() {
    c || (n.state.value[e] = o ? o() : {});
    const l = df(n.state.value[e]);
    return Yt(
      l,
      s,
      Object.keys(i || {}).reduce(
        (f, d) => (
          (f[d] = ma(
            he(() => {
              Is(n);
              const h = n._s.get(e);
              return i[d].call(h, h);
            }),
          )),
          f
        ),
        {},
      ),
    );
  }
  return (a = Ep(e, u, t, n, r, !0)), a;
}
function Ep(e, t, n = {}, r, o, s) {
  let i;
  const c = Yt({ actions: {} }, n),
    a = { deep: !0 };
  let u,
    l,
    f = [],
    d = [],
    h;
  const p = r.state.value[e];
  !s && !p && (r.state.value[e] = {}), ie({});
  let b;
  function E(P) {
    let S;
    (u = l = !1),
      typeof P == "function"
        ? (P(r.state.value[e]), (S = { type: Or.patchFunction, storeId: e, events: h }))
        : (oa(r.state.value[e], P),
          (S = { type: Or.patchObject, payload: P, storeId: e, events: h }));
    const k = (b = Symbol());
    dn().then(() => {
      b === k && (u = !0);
    }),
      (l = !0),
      $n(f, S, r.state.value[e]);
  }
  const C = s
    ? function () {
        const { state: S } = n,
          k = S ? S() : {};
        this.$patch((F) => {
          Yt(F, k);
        });
      }
    : xp;
  function v() {
    i.stop(), (f = []), (d = []), r._s.delete(e);
  }
  function m(P, S) {
    return function () {
      Is(r);
      const k = Array.from(arguments),
        F = [],
        I = [];
      function W(j) {
        F.push(j);
      }
      function ee(j) {
        I.push(j);
      }
      $n(d, { args: k, name: P, store: x, after: W, onError: ee });
      let te;
      try {
        te = S.apply(this && this.$id === e ? this : x, k);
      } catch (j) {
        throw ($n(I, j), j);
      }
      return te instanceof Promise
        ? te.then((j) => ($n(F, j), j)).catch((j) => ($n(I, j), Promise.reject(j)))
        : ($n(F, te), te);
    };
  }
  const y = {
      _p: r,
      $id: e,
      $onAction: Iu.bind(null, d),
      $patch: E,
      $reset: C,
      $subscribe(P, S = {}) {
        const k = Iu(f, P, S.detached, () => F()),
          F = i.run(() =>
            rt(
              () => r.state.value[e],
              (I) => {
                (S.flush === "sync" ? l : u) && P({ storeId: e, type: Or.direct, events: h }, I);
              },
              Yt({}, a, S),
            ),
          );
        return k;
      },
      $dispose: v,
    },
    x = _t(y);
  r._s.set(e, x);
  const A = ((r._a && r._a.runWithContext) || sC)(() => r._e.run(() => (i = is()).run(t)));
  for (const P in A) {
    const S = A[P];
    if ((Ie(S) && !cC(S)) || Tn(S))
      s || (p && aC(S) && (Ie(S) ? (S.value = p[P]) : oa(S, p[P])), (r.state.value[e][P] = S));
    else if (typeof S == "function") {
      const k = m(P, S);
      (A[P] = k), (c.actions[P] = S);
    }
  }
  return (
    Yt(x, A),
    Yt(ge(x), A),
    Object.defineProperty(x, "$state", {
      get: () => r.state.value[e],
      set: (P) => {
        E((S) => {
          Yt(S, P);
        });
      },
    }),
    r._p.forEach((P) => {
      Yt(
        x,
        i.run(() => P({ store: x, app: r._a, pinia: r, options: c })),
      );
    }),
    p && s && n.hydrate && n.hydrate(x.$state, p),
    (u = !0),
    (l = !0),
    x
  );
}
function uC(e, t, n) {
  let r, o;
  const s = typeof t == "function";
  typeof e == "string" ? ((r = e), (o = s ? n : t)) : ((o = e), (r = e.id));
  function i(c, a) {
    const u = Ca();
    return (
      (c = c || (u ? Me(_p, null) : null)),
      c && Is(c),
      (c = wp),
      c._s.has(r) || (s ? Ep(r, t, o, c) : lC(r, o, c)),
      c._s.get(r)
    );
  }
  return (i.$id = r), i;
}
const fC = We((e) => {
    const t = oC();
    e.vueApp.use(t);
  }),
  dC = [Jv, Gv, pw, gw, mw, bw, ww, a_, g_, v_, $1, D1, Kx, Vx, eC, rC, fC],
  hC = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  },
  pC = {},
  gC = (e) => (yg("data-v-839bc3d0"), (e = e()), vg(), e),
  mC = { class: "flex h-full items-center justify-center" },
  yC = gC(() => ut("div", { class: "loader" }, null, -1)),
  vC = [yC];
function bC(e, t) {
  return oe(), Ce("div", mC, vC);
}
const wC = hC(pC, [
    ["render", bC],
    ["__scopeId", "data-v-839bc3d0"],
  ]),
  _C = qe({
    props: {
      vnode: { type: Object, required: !0 },
      route: { type: Object, required: !0 },
      vnodeRef: Object,
      renderKey: String,
      trackRootNodes: Boolean,
    },
    setup(e) {
      const t = e.renderKey,
        n = e.route,
        r = {};
      for (const o in e.route)
        Object.defineProperty(r, o, { get: () => (t === e.renderKey ? e.route[o] : n[o]) });
      return An(Qr, Nt(r)), () => Ue(e.vnode, { ref: e.vnodeRef });
    },
  }),
  xC = qe({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
      name: { type: String },
      transition: { type: [Boolean, Object], default: void 0 },
      keepalive: { type: [Boolean, Object], default: void 0 },
      route: { type: Object },
      pageKey: { type: [Function, String], default: null },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      const o = Te(),
        s = ie(),
        i = Me(Qr, null);
      let c;
      r({ pageRef: s });
      const a = Me(Ad, null);
      let u;
      const l = o.deferHydration();
      if (o.isHydrating) {
        const f = o.hooks.hookOnce("app:error", l);
        xt().beforeEach(f);
      }
      return (
        e.pageKey &&
          rt(
            () => e.pageKey,
            (f, d) => {
              f !== d && o.callHook("page:loading:start");
            },
          ),
        () =>
          Ue(
            Qd,
            { name: e.name, route: e.route, ...t },
            {
              default: (f) => {
                const d = SC(i, f.route, f.Component),
                  h = i && i.matched.length === f.route.matched.length;
                if (!f.Component) {
                  if (u && !h) return u;
                  l();
                  return;
                }
                if (u && a && !a.isCurrent(f.route)) return u;
                if (d && i && (!a || (a != null && a.isCurrent(i)))) return h ? u : null;
                const p = ji(f, e.pageKey);
                !o.isHydrating &&
                  !CC(i, f.route, f.Component) &&
                  c === p &&
                  o.callHook("page:loading:end"),
                  (c = p);
                const b = !!(e.transition ?? f.route.meta.pageTransition ?? Ri),
                  E =
                    b &&
                    EC(
                      [
                        e.transition,
                        f.route.meta.pageTransition,
                        Ri,
                        {
                          onAfterLeave: () => {
                            o.callHook("page:transition:finish", f.Component);
                          },
                        },
                      ].filter(Boolean),
                    ),
                  C = e.keepalive ?? f.route.meta.keepalive ?? O0;
                return (
                  (u = Xd(
                    ms,
                    b && E,
                    tw(
                      C,
                      Ue(
                        xa,
                        {
                          suspensible: !0,
                          onPending: () => o.callHook("page:start", f.Component),
                          onResolve: () => {
                            dn(() =>
                              o
                                .callHook("page:finish", f.Component)
                                .then(() => o.callHook("page:loading:end"))
                                .finally(l),
                            );
                          },
                        },
                        {
                          default: () => {
                            const v = Ue(_C, {
                              key: p || void 0,
                              vnode: n.default ? Ue(Re, void 0, n.default(f)) : f.Component,
                              route: f.route,
                              renderKey: p || void 0,
                              trackRootNodes: b,
                              vnodeRef: s,
                            });
                            return (
                              C &&
                                (v.type.name =
                                  f.Component.type.name ||
                                  f.Component.type.__name ||
                                  "RouteProvider"),
                              v
                            );
                          },
                        },
                      ),
                    ),
                  ).default()),
                  u
                );
              },
            },
          )
      );
    },
  });
function EC(e) {
  const t = e.map((n) => ({ ...n, onAfterLeave: n.onAfterLeave ? ja(n.onAfterLeave) : void 0 }));
  return Ma(...t);
}
function SC(e, t, n) {
  if (!e) return !1;
  const r = t.matched.findIndex((o) => {
    var s;
    return ((s = o.components) == null ? void 0 : s.default) === (n == null ? void 0 : n.type);
  });
  return !r || r === -1
    ? !1
    : t.matched.slice(0, r).some((o, s) => {
        var i, c, a;
        return (
          ((i = o.components) == null ? void 0 : i.default) !==
          ((a = (c = e.matched[s]) == null ? void 0 : c.components) == null ? void 0 : a.default)
        );
      }) ||
        (n && ji({ route: t, Component: n }) !== ji({ route: e, Component: n }));
}
function CC(e, t, n) {
  return e
    ? t.matched.findIndex((o) => {
        var s;
        return ((s = o.components) == null ? void 0 : s.default) === (n == null ? void 0 : n.type);
      }) <
        t.matched.length - 1
    : !1;
}
const TC = qe({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: { name: String, layoutProps: Object },
    async setup(e, t) {
      const n = await nn[e.name]().then((r) => r.default || r);
      return () => Ue(n, e.layoutProps, t.slots);
    },
  }),
  kC = qe({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: {
      name: { type: [String, Boolean, Object], default: null },
      fallback: { type: [String, Object], default: null },
    },
    setup(e, t) {
      const n = Te(),
        r = Me(Qr),
        o = r === La() ? Zb() : r,
        s = he(() => {
          let a = ne(e.name) ?? o.meta.layout ?? "default";
          return a && !(a in nn) && e.fallback && (a = ne(e.fallback)), a;
        }),
        i = ie();
      t.expose({ layoutRef: i });
      const c = n.deferHydration();
      if (n.isHydrating) {
        const a = n.hooks.hookOnce("app:error", c);
        xt().beforeEach(a);
      }
      return () => {
        const a = s.value && s.value in nn,
          u = o.meta.layoutTransition ?? P0;
        return Xd(ms, a && u, {
          default: () =>
            Ue(
              xa,
              {
                suspensible: !0,
                onResolve: () => {
                  dn(c);
                },
              },
              {
                default: () =>
                  Ue(
                    AC,
                    {
                      layoutProps: Rn(t.attrs, { ref: i }),
                      key: s.value || void 0,
                      name: s.value,
                      shouldProvide: !e.name,
                      hasTransition: !!u,
                    },
                    t.slots,
                  ),
              },
            ),
        }).default();
      };
    },
  }),
  AC = qe({
    name: "NuxtLayoutProvider",
    inheritAttrs: !1,
    props: {
      name: { type: [String, Boolean] },
      layoutProps: { type: Object },
      hasTransition: { type: Boolean },
      shouldProvide: { type: Boolean },
    },
    setup(e, t) {
      const n = e.name;
      return (
        e.shouldProvide && An(Ad, { isCurrent: (r) => n === (r.meta.layout ?? "default") }),
        () => {
          var r, o;
          return !n || (typeof n == "string" && !(n in nn))
            ? (o = (r = t.slots).default) == null
              ? void 0
              : o.call(r)
            : Ue(TC, { key: n, layoutProps: e.layoutProps, name: n }, t.slots);
        }
      );
    },
  }),
  RC = qe({
    __name: "Modals.client",
    setup(e) {
      const t = Me(Ya),
        { isOpen: n, reset: r } = y_();
      return (o, s) =>
        ne(t)
          ? (oe(),
            Ve(
              Dn(ne(t).component),
              Rn({ key: 0 }, ne(t).props, {
                modelValue: ne(n),
                "onUpdate:modelValue": s[0] || (s[0] = (i) => (Ie(n) ? (n.value = i) : null)),
                onAfterLeave: ne(r),
              }),
              null,
              16,
              ["modelValue", "onAfterLeave"],
            ))
          : Gt("", !0);
    },
  });
var IC = Object.defineProperty,
  PC = (e, t, n) =>
    t in e ? IC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  ze = (e, t, n) => (PC(e, typeof t != "symbol" ? t + "" : t, n), n);
function OC(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0],
    n = document.createElement("style");
  (n.type = "text/css"),
    t.appendChild(n),
    n.styleSheet ? (n.styleSheet.cssText = e) : n.appendChild(document.createTextNode(e));
}
OC(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;will-change:transform,opacity,height;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px;transform:translateZ(0)}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toast][data-theme=dark] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:'';position:absolute;left:0;right:0;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount,0));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{from{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;--mobile-offset:16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 91%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 91%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 91%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 100%, 12%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 12%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
);
let sa = 0;
class MC {
  constructor() {
    ze(this, "subscribers"),
      ze(this, "toasts"),
      ze(
        this,
        "subscribe",
        (t) => (
          this.subscribers.push(t),
          () => {
            const n = this.subscribers.indexOf(t);
            this.subscribers.splice(n, 1);
          }
        ),
      ),
      ze(this, "publish", (t) => {
        this.subscribers.forEach((n) => n(t));
      }),
      ze(this, "addToast", (t) => {
        this.publish(t), (this.toasts = [...this.toasts, t]);
      }),
      ze(this, "create", (t) => {
        var n;
        const { message: r, ...o } = t,
          s =
            typeof t.id == "number" || (t.id && ((n = t.id) == null ? void 0 : n.length) > 0)
              ? t.id
              : sa++,
          i = this.toasts.find((a) => a.id === s),
          c = t.dismissible === void 0 ? !0 : t.dismissible;
        return (
          i
            ? (this.toasts = this.toasts.map((a) =>
                a.id === s
                  ? (this.publish({ ...a, ...t, id: s, title: r }),
                    { ...a, ...t, id: s, dismissible: c, title: r })
                  : a,
              ))
            : this.addToast({ title: r, ...o, dismissible: c, id: s }),
          s
        );
      }),
      ze(
        this,
        "dismiss",
        (t) => (
          t ||
            this.toasts.forEach((n) => {
              this.subscribers.forEach((r) => r({ id: n.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((n) => n({ id: t, dismiss: !0 })),
          t
        ),
      ),
      ze(this, "message", (t, n) => this.create({ ...n, message: t, type: "default" })),
      ze(this, "error", (t, n) => this.create({ ...n, type: "error", message: t })),
      ze(this, "success", (t, n) => this.create({ ...n, type: "success", message: t })),
      ze(this, "info", (t, n) => this.create({ ...n, type: "info", message: t })),
      ze(this, "warning", (t, n) => this.create({ ...n, type: "warning", message: t })),
      ze(this, "loading", (t, n) => this.create({ ...n, type: "loading", message: t })),
      ze(this, "promise", (t, n) => {
        if (!n) return;
        let r;
        n.loading !== void 0 &&
          (r = this.create({
            ...n,
            promise: t,
            type: "loading",
            message: n.loading,
            description: typeof n.description != "function" ? n.description : void 0,
          }));
        const o = t instanceof Promise ? t : t();
        let s = r !== void 0;
        return (
          o
            .then((i) => {
              if (i && typeof i.ok == "boolean" && !i.ok) {
                s = !1;
                const c =
                    typeof n.error == "function"
                      ? n.error(`HTTP error! status: ${response.status}`)
                      : n.error,
                  a =
                    typeof n.description == "function"
                      ? n.description(`HTTP error! status: ${response.status}`)
                      : n.description;
                this.create({ id: r, type: "error", message: c, description: a });
              } else if (n.success !== void 0) {
                s = !1;
                const c = typeof n.success == "function" ? n.success(i) : n.success,
                  a = typeof n.description == "function" ? n.description(i) : n.description;
                this.create({ id: r, type: "success", message: c, description: a });
              }
            })
            .catch((i) => {
              if (n.error !== void 0) {
                s = !1;
                const c = typeof n.error == "function" ? n.error(i) : n.error,
                  a = typeof n.description == "function" ? n.description(i) : n.description;
                this.create({ id: r, type: "error", message: c, description: a });
              }
            })
            .finally(() => {
              var i;
              s && (this.dismiss(r), (r = void 0)), (i = n.finally) == null || i.call(n);
            }),
          r
        );
      }),
      ze(this, "custom", (t, n) => {
        const r = (n == null ? void 0 : n.id) || sa++;
        return this.publish({ component: t, id: r, ...n }), r;
      }),
      (this.subscribers = []),
      (this.toasts = []);
  }
}
const dt = new MC(),
  LC = (e, t) => {
    const n = (t == null ? void 0 : t.id) || sa++;
    return dt.create({ message: e, id: n, type: "default", ...t }), n;
  },
  $C = LC,
  Pu = Object.assign($C, {
    success: dt.success,
    info: dt.info,
    warning: dt.warning,
    error: dt.error,
    custom: dt.custom,
    message: dt.message,
    promise: dt.promise,
    dismiss: dt.dismiss,
    loading: dt.loading,
  }),
  eo = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  },
  HC = {},
  NC = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stoke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
  },
  DC = ut("line", { x1: "18", y1: "6", x2: "6", y2: "18" }, null, -1),
  jC = ut("line", { x1: "6", y1: "6", x2: "18", y2: "18" }, null, -1),
  UC = [DC, jC];
function FC(e, t) {
  return oe(), Ce("svg", NC, UC);
}
const BC = eo(HC, [["render", FC]]),
  WC = () => {
    const e = ie(!1);
    return (
      Ut(() => {
        const t = () => {
          e.value = document.hidden;
        };
        return (
          document.addEventListener("visibilitychange", t),
          () => window.removeEventListener("visibilitychange", t)
        );
      }),
      { isDocumentHidden: e }
    );
  },
  KC = [
    "aria-live",
    "data-styled",
    "data-mounted",
    "data-promise",
    "data-removed",
    "data-visible",
    "data-y-position",
    "data-x-position",
    "data-index",
    "data-front",
    "data-swiping",
    "data-dismissible",
    "data-type",
    "data-invert",
    "data-swipe-out",
    "data-expanded",
  ],
  VC = ["aria-label", "data-disabled"],
  zC = { key: 0, "data-icon": "" },
  JC = { "data-content": "" },
  qC = 4e3,
  GC = 14,
  YC = 20,
  QC = 200,
  XC = qe({
    __name: "Toast",
    props: {
      toast: {},
      toasts: {},
      index: {},
      expanded: { type: Boolean },
      invert: { type: Boolean },
      heights: {},
      gap: {},
      position: {},
      visibleToasts: {},
      expandByDefault: { type: Boolean },
      closeButton: { type: Boolean },
      interacting: { type: Boolean },
      duration: {},
      descriptionClass: {},
      style: {},
      cancelButtonStyle: {},
      actionButtonStyle: {},
      unstyled: { type: Boolean },
      loadingIcon: {},
      class: {},
      classes: {},
      icons: {},
      closeButtonAriaLabel: {},
      pauseWhenPageIsHidden: { type: Boolean },
      cn: { type: Function },
    },
    emits: ["update:heights", "removeToast"],
    setup(e, { emit: t }) {
      const n = t,
        r = e,
        o = ie(!1),
        s = ie(!1),
        i = ie(!1),
        c = ie(!1),
        a = ie(0),
        u = ie(0);
      let l = 0;
      const f = ie(null),
        d = he(() => r.index === 0),
        h = he(() => r.index + 1 <= r.visibleToasts),
        p = he(() => r.toast.type),
        b = he(() => r.toast.dismissible !== !1),
        E = he(() => {
          var L, le, ae, R, N, D, z;
          return r.cn(
            (L = r.classes) == null ? void 0 : L.toast,
            (ae = (le = r.toast) == null ? void 0 : le.classes) == null ? void 0 : ae.toast,
            (R = r.classes) == null ? void 0 : R.default,
            (N = r.classes) == null ? void 0 : N[r.toast.type || "default"],
            (z = (D = r.toast) == null ? void 0 : D.classes) == null
              ? void 0
              : z[r.toast.type || "default"],
          );
        }),
        C = r.toast.style || {},
        v = he(() => r.heights.findIndex((L) => L.toastId === r.toast.id) || 0),
        m = he(() => r.toast.closeButton ?? r.closeButton),
        y = he(() => r.toast.duration || r.duration || qC),
        x = ie(0),
        _ = ie(0),
        A = ie(y.value),
        P = ie(0),
        S = ie(null),
        k = he(() => r.position.split("-")),
        F = he(() => k.value[0]),
        I = he(() => k.value[1]),
        W = he(() => typeof r.toast.title != "string"),
        ee = he(() => typeof r.toast.description != "string"),
        te = he(() => r.heights.reduce((L, le, ae) => (ae >= v.value ? L : L + le.height), 0)),
        j = WC(),
        q = he(() => r.toast.invert || r.invert),
        V = he(() => p.value === "loading");
      Gn(() => {
        if (!o.value) return;
        const L = f.value,
          le = L == null ? void 0 : L.style.height;
        L.style.height = "auto";
        const ae = L.getBoundingClientRect().height;
        (L.style.height = le), (u.value = ae);
        let R;
        r.heights.find((N) => N.toastId === r.toast.id)
          ? (R = r.heights.map((N) => (N.toastId === r.toast.id ? { ...N, height: ae } : N)))
          : (R = [{ toastId: r.toast.id, height: ae, position: r.toast.position }, ...r.heights]),
          n("update:heights", R);
      });
      const de = () => {
          (s.value = !0),
            (a.value = _.value),
            setTimeout(() => {
              n("removeToast", r.toast);
            }, QC);
        },
        Ne = () => {
          var L, le;
          V.value ||
            !b.value ||
            (de(), (le = (L = r.toast).onDismiss) == null || le.call(L, r.toast));
        },
        Oe = (L) => {
          V.value ||
            !b.value ||
            ((l = Date.now()),
            (a.value = _.value),
            L.target.setPointerCapture(L.pointerId),
            L.target.tagName !== "BUTTON" &&
              ((i.value = !0), (S.value = { x: L.clientX, y: L.clientY })));
        },
        ke = (L) => {
          var le, ae, R, N;
          if (c.value) return;
          S.value = null;
          const D = Number(
              ((le = f.value) == null
                ? void 0
                : le.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0,
            ),
            z = Date.now() - l || 50,
            ue = Math.abs(D) / z;
          if (Math.abs(D) >= YC || ue > 0.11) {
            (a.value = _.value),
              (R = (ae = r.toast).onDismiss) == null || R.call(ae, r.toast),
              de(),
              (c.value = !0);
            return;
          }
          (N = f.value) == null || N.style.setProperty("--swipe-amount", "0px"), (i.value = !1);
        },
        Ge = (L) => {
          var le;
          if (!S.value) return;
          const ae = L.clientY - S.value.y,
            R = L.clientX - S.value.x,
            N = (k.value[0] === "top" ? Math.min : Math.max)(0, ae),
            D = L.pointerType === "touch" ? 10 : 2;
          Math.abs(N) > D
            ? (le = f.value) == null || le.style.setProperty("--swipe-amount", `${ae}px`)
            : Math.abs(R) > D && (S.value = null);
        };
      return (
        Ut(() => {
          _.value = v.value * GC + te.value;
        }),
        Ut((L) => {
          if (
            (r.toast.promise && p.value === "loading") ||
            r.toast.duration === 1 / 0 ||
            r.toast.type === "loading"
          )
            return;
          let le;
          const ae = () => {
              if (P.value < x.value) {
                const N = Date.now() - x.value;
                A.value = A.value - N;
              }
              P.value = Date.now();
            },
            R = () => {
              (x.value = Date.now()),
                (le = setTimeout(() => {
                  var N, D;
                  (D = (N = r.toast).onAutoClose) == null || D.call(N, r.toast), de();
                }, A.value));
            };
          r.expanded || r.interacting || (r.pauseWhenPageIsHidden && j) ? ae() : R(),
            L(() => {
              clearTimeout(le);
            });
        }),
        Ut(() => {
          r.toast.delete && de();
        }),
        Gn(() => {
          if (f.value) {
            const L = f.value.getBoundingClientRect().height;
            u.value = L;
            const le = [
              { toastId: r.toast.id, height: L, position: r.toast.position },
              ...r.heights,
            ];
            n("update:heights", le);
          }
          o.value = !0;
        }),
        hs(() => {
          if (f.value) {
            const L = r.heights.filter((le) => le.toastId !== r.toast.id);
            n("update:heights", L);
          }
        }),
        (L, le) => {
          var ae, R, N, D, z, ue, we, g, w, T, M, O;
          return (
            oe(),
            Ce(
              "li",
              {
                "aria-live": L.toast.important ? "assertive" : "polite",
                "aria-atomic": "true",
                role: "status",
                tabindex: "0",
                ref_key: "toastRef",
                ref: f,
                "data-sonner-toast": "",
                class: pt(E.value),
                "data-styled": !(
                  L.toast.component ||
                  ((ae = L.toast) != null && ae.unstyled) ||
                  L.unstyled
                ),
                "data-mounted": o.value,
                "data-promise": !!L.toast.promise,
                "data-removed": s.value,
                "data-visible": h.value,
                "data-y-position": F.value,
                "data-x-position": I.value,
                "data-index": L.index,
                "data-front": d.value,
                "data-swiping": i.value,
                "data-dismissible": b.value,
                "data-type": p.value,
                "data-invert": q.value,
                "data-swipe-out": c.value,
                "data-expanded": !!(L.expanded || (L.expandByDefault && o.value)),
                style: nr({
                  "--index": L.index,
                  "--toasts-before": L.index,
                  "--z-index": L.toasts.length - L.index,
                  "--offset": `${s.value ? a.value : _.value}px`,
                  "--initial-height": L.expandByDefault ? "auto" : `${u.value}px`,
                  ...L.style,
                  ...ne(C),
                }),
                onPointerdown: Oe,
                onPointerup: ke,
                onPointermove: Ge,
              },
              [
                m.value && !L.toast.component
                  ? (oe(),
                    Ce(
                      "button",
                      {
                        key: 0,
                        "aria-label": L.closeButtonAriaLabel || "Close toast",
                        "data-disabled": V.value,
                        "data-close-button": "",
                        class: pt(
                          L.cn(
                            (R = L.classes) == null ? void 0 : R.closeButton,
                            (D = (N = L.toast) == null ? void 0 : N.classes) == null
                              ? void 0
                              : D.closeButton,
                          ),
                        ),
                        onClick: Ne,
                      },
                      [me(BC)],
                      10,
                      VC,
                    ))
                  : Gt("", !0),
                L.toast.component
                  ? (oe(),
                    Ve(
                      Dn(L.toast.component),
                      Rn({ key: 1 }, L.toast.componentProps, { onCloseToast: de }),
                      null,
                      16,
                    ))
                  : (oe(),
                    Ce(
                      Re,
                      { key: 2 },
                      [
                        p.value !== "default" || L.toast.icon || L.toast.promise
                          ? (oe(),
                            Ce("div", zC, [
                              (L.toast.promise || p.value === "loading") && !L.toast.icon
                                ? gt(L.$slots, "loading-icon", { key: 0 })
                                : Gt("", !0),
                              L.toast.icon
                                ? (oe(), Ve(Dn(L.toast.icon), { key: 1 }))
                                : (oe(),
                                  Ce(
                                    Re,
                                    { key: 2 },
                                    [
                                      p.value === "success"
                                        ? gt(L.$slots, "success-icon", { key: 0 })
                                        : p.value === "error"
                                          ? gt(L.$slots, "error-icon", { key: 1 })
                                          : p.value === "warning"
                                            ? gt(L.$slots, "warning-icon", { key: 2 })
                                            : p.value === "info"
                                              ? gt(L.$slots, "info-icon", { key: 3 })
                                              : Gt("", !0),
                                    ],
                                    64,
                                  )),
                            ]))
                          : Gt("", !0),
                        ut("div", JC, [
                          ut(
                            "div",
                            {
                              "data-title": "",
                              class: pt(
                                L.cn(
                                  (z = L.classes) == null ? void 0 : z.title,
                                  (ue = L.toast.classes) == null ? void 0 : ue.title,
                                ),
                              ),
                            },
                            [
                              W.value
                                ? (oe(),
                                  Ve(
                                    Dn(L.toast.title),
                                    oi(Rn({ key: 0 }, L.toast.componentProps)),
                                    null,
                                    16,
                                  ))
                                : (oe(), Ce(Re, { key: 1 }, [Bo(to(L.toast.title), 1)], 64)),
                            ],
                            2,
                          ),
                          L.toast.description
                            ? (oe(),
                              Ce(
                                "div",
                                {
                                  key: 0,
                                  "data-description": "",
                                  class: pt(
                                    L.cn(
                                      L.descriptionClass,
                                      L.toast.descriptionClass,
                                      (we = L.classes) == null ? void 0 : we.description,
                                      (g = L.toast.classes) == null ? void 0 : g.description,
                                    ),
                                  ),
                                },
                                [
                                  ee.value
                                    ? (oe(),
                                      Ve(
                                        Dn(L.toast.description),
                                        oi(Rn({ key: 0 }, L.toast.componentProps)),
                                        null,
                                        16,
                                      ))
                                    : (oe(),
                                      Ce(Re, { key: 1 }, [Bo(to(L.toast.description), 1)], 64)),
                                ],
                                2,
                              ))
                            : Gt("", !0),
                        ]),
                        L.toast.cancel
                          ? (oe(),
                            Ce(
                              "button",
                              {
                                key: 1,
                                class: pt(
                                  L.cn(
                                    (w = L.classes) == null ? void 0 : w.cancelButton,
                                    (T = L.toast.classes) == null ? void 0 : T.cancelButton,
                                  ),
                                ),
                                "data-button": "",
                                "data-cancel": "",
                                onClick:
                                  le[0] ||
                                  (le[0] = () => {
                                    var H;
                                    de(),
                                      (H = L.toast.cancel) != null &&
                                        H.onClick &&
                                        L.toast.cancel.onClick();
                                  }),
                              },
                              to(L.toast.cancel.label),
                              3,
                            ))
                          : Gt("", !0),
                        L.toast.action
                          ? (oe(),
                            Ce(
                              "button",
                              {
                                key: 2,
                                class: pt(
                                  L.cn(
                                    (M = L.classes) == null ? void 0 : M.actionButton,
                                    (O = L.toast.classes) == null ? void 0 : O.actionButton,
                                  ),
                                ),
                                "data-button": "",
                                onClick:
                                  le[1] ||
                                  (le[1] = (H) => {
                                    var K;
                                    (K = L.toast.action) == null || K.onClick(H),
                                      !H.defaultPrevented && de();
                                  }),
                              },
                              to(L.toast.action.label),
                              3,
                            ))
                          : Gt("", !0),
                      ],
                      64,
                    )),
              ],
              46,
              KC,
            )
          );
        }
      );
    },
  }),
  ZC = ["data-visible"],
  eT = { class: "sonner-spinner" },
  tT = qe({
    __name: "Loader",
    props: { visible: { type: Boolean } },
    setup(e) {
      const t = Array(12).fill(0);
      return (n, r) => (
        oe(),
        Ce(
          "div",
          { class: "sonner-loading-wrapper", "data-visible": n.visible },
          [
            ut("div", eT, [
              (oe(!0),
              Ce(
                Re,
                null,
                di(
                  ne(t),
                  (o) => (
                    oe(), Ce("div", { key: `spinner-bar-${o}`, class: "sonner-loading-bar" })
                  ),
                ),
                128,
              )),
            ]),
          ],
          8,
          ZC,
        )
      );
    },
  }),
  nT = {},
  rT = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20",
  },
  oT = ut(
    "path",
    {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      "clip-rule": "evenodd",
    },
    null,
    -1,
  ),
  sT = [oT];
function iT(e, t) {
  return oe(), Ce("svg", rT, sT);
}
const aT = eo(nT, [["render", iT]]),
  cT = {},
  lT = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20",
  },
  uT = ut(
    "path",
    {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      "clip-rule": "evenodd",
    },
    null,
    -1,
  ),
  fT = [uT];
function dT(e, t) {
  return oe(), Ce("svg", lT, fT);
}
const hT = eo(cT, [["render", dT]]),
  pT = {},
  gT = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20",
  },
  mT = ut(
    "path",
    {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd",
    },
    null,
    -1,
  ),
  yT = [mT];
function vT(e, t) {
  return oe(), Ce("svg", gT, yT);
}
const bT = eo(pT, [["render", vT]]),
  wT = {},
  _T = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20",
  },
  xT = ut(
    "path",
    {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      "clip-rule": "evenodd",
    },
    null,
    -1,
  ),
  ET = [xT];
function ST(e, t) {
  return oe(), Ce("svg", _T, ET);
}
const CT = eo(wT, [["render", ST]]),
  TT = ["aria-label"],
  kT = ["dir", "data-theme", "data-rich-colors", "data-y-position", "data-x-position"],
  AT = 3,
  Ou = "32px",
  RT = 4e3,
  IT = 356,
  Mu = 14,
  PT = typeof window < "u" && typeof document < "u",
  OT = qe({
    name: "Toaster",
    inheritAttrs: !1,
    __name: "Toaster",
    props: {
      invert: { type: Boolean, default: !1 },
      theme: { default: "light" },
      position: { default: "bottom-right" },
      hotkey: { default: () => ["altKey", "KeyT"] },
      richColors: { type: Boolean, default: !1 },
      expand: { type: Boolean, default: !1 },
      duration: { default: RT },
      gap: { default: Mu },
      visibleToasts: { default: AT },
      closeButton: { type: Boolean, default: !1 },
      toastOptions: { default: () => ({}) },
      class: { default: "" },
      style: { default: () => ({}) },
      offset: { default: Ou },
      dir: { default: "auto" },
      icons: {},
      containerAriaLabel: { default: "Notifications" },
      pauseWhenPageIsHidden: { type: Boolean, default: !1 },
      cn: {},
    },
    setup(e) {
      function t(...y) {
        return y.filter(Boolean).join(" ");
      }
      function n() {
        if (typeof window > "u" || typeof document > "u") return "ltr";
        const y = document.documentElement.getAttribute("dir");
        return y === "auto" || !y ? window.getComputedStyle(document.documentElement).direction : y;
      }
      const r = e,
        o = Lg(),
        s = ie([]),
        i = he(() => {
          const y = s.value.filter((x) => x.position).map((x) => x.position);
          return y.length > 0 ? Array.from(new Set([r.position].concat(y))) : [r.position];
        }),
        c = ie([]),
        a = ie(!1),
        u = ie(!1),
        l = ie(
          r.theme !== "system"
            ? r.theme
            : typeof window < "u" &&
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light",
        ),
        f = he(() => r.cn || t),
        d = ie(null),
        h = ie(null),
        p = ie(!1),
        b = r.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
      function E(y) {
        (c.value = c.value.filter(({ toastId: x }) => x !== y.id)),
          (s.value = s.value.filter(({ id: x }) => x !== y.id));
      }
      const C = (y) => {
          var x, _;
          p.value &&
            !(
              (_ = (x = y.currentTarget) == null ? void 0 : x.contains) != null &&
              _.call(x, y.relatedTarget)
            ) &&
            ((p.value = !1), h.value && (h.value.focus({ preventScroll: !0 }), (h.value = null)));
        },
        v = (y) => {
          (y.target instanceof HTMLElement && y.target.dataset.dismissible === "false") ||
            p.value ||
            ((p.value = !0), (h.value = y.relatedTarget));
        },
        m = (y) => {
          (y.target &&
            y.target instanceof HTMLElement &&
            y.target.dataset.dismissible === "false") ||
            (u.value = !1);
        };
      return (
        Ut((y) => {
          const x = dt.subscribe((_) => {
            if (_.dismiss) {
              s.value = s.value.map((A) => (A.id === _.id ? { ...A, delete: !0 } : A));
              return;
            }
            dn(() => {
              const A = s.value.findIndex((P) => P.id === _.id);
              A !== -1 ? s.value.splice(A, 1, _) : (s.value = [_, ...s.value]);
            });
          });
          y(() => {
            x();
          });
        }),
        rt(
          () => r.theme,
          (y) => {
            if (y !== "system") {
              l.value = y;
              return;
            }
            y === "system" &&
              (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                ? (l.value = "dark")
                : (l.value = "light")),
              !(typeof window > "u") &&
                window
                  .matchMedia("(prefers-color-scheme: dark)")
                  .addEventListener("change", ({ matches: x }) => {
                    x ? (l.value = "dark") : (l.value = "light");
                  });
          },
        ),
        rt(
          () => d.value,
          () => {
            if (d.value)
              return () => {
                h.value && (h.value.focus({ preventScroll: !0 }), (h.value = null), (p.value = !1));
              };
          },
        ),
        Ut(() => {
          s.value.length <= 1 && (a.value = !1);
        }),
        Ut((y) => {
          function x(_) {
            const A = r.hotkey.every((k) => _[k] || _.code === k),
              P = Array.isArray(d.value) ? d.value[0] : d.value;
            A && ((a.value = !0), P == null || P.focus());
            const S =
              document.activeElement === d.value ||
              (P == null ? void 0 : P.contains(document.activeElement));
            _.code === "Escape" && S && (a.value = !1);
          }
          PT &&
            (document.addEventListener("keydown", x),
            y(() => {
              document.removeEventListener("keydown", x);
            }));
        }),
        (y, x) => (
          oe(),
          Ce(
            "section",
            { "aria-label": `${y.containerAriaLabel} ${ne(b)}`, tabIndex: -1 },
            [
              (oe(!0),
              Ce(
                Re,
                null,
                di(i.value, (_, A) => {
                  var P;
                  return (
                    oe(),
                    Ce(
                      "ol",
                      Rn(
                        {
                          key: _,
                          ref_for: !0,
                          ref_key: "listRef",
                          ref: d,
                          "data-sonner-toaster": "",
                          class: y.class,
                          dir: y.dir === "auto" ? n() : y.dir,
                          tabIndex: -1,
                          "data-theme": y.theme,
                          "data-rich-colors": y.richColors,
                          "data-y-position": _.split("-")[0],
                          "data-x-position": _.split("-")[1],
                          style: {
                            "--front-toast-height": `${(P = c.value[0]) == null ? void 0 : P.height}px`,
                            "--offset":
                              typeof y.offset == "number" ? `${y.offset}px` : y.offset || Ou,
                            "--width": `${IT}px`,
                            "--gap": `${Mu}px`,
                            ...y.style,
                            ...ne(o).style,
                          },
                          onBlur: C,
                          onFocus: v,
                          onMouseenter: x[1] || (x[1] = (S) => (a.value = !0)),
                          onMousemove: x[2] || (x[2] = (S) => (a.value = !0)),
                          onMouseleave:
                            x[3] ||
                            (x[3] = () => {
                              u.value || (a.value = !1);
                            }),
                          onPointerdown: m,
                          onPointerup: x[4] || (x[4] = (S) => (u.value = !1)),
                        },
                        y.$attrs,
                      ),
                      [
                        (oe(!0),
                        Ce(
                          Re,
                          null,
                          di(
                            s.value.filter((S) => (!S.position && A === 0) || S.position === _),
                            (S, k) => {
                              var F, I, W, ee, te, j, q, V, de;
                              return (
                                oe(),
                                Ve(
                                  XC,
                                  {
                                    key: S.id,
                                    index: k,
                                    toast: S,
                                    duration:
                                      ((F = y.toastOptions) == null ? void 0 : F.duration) ??
                                      y.duration,
                                    class: pt(
                                      ((I = y.toastOptions) == null ? void 0 : I.class) ?? "",
                                    ),
                                    descriptionClass:
                                      (W = y.toastOptions) == null ? void 0 : W.descriptionClass,
                                    invert: y.invert,
                                    visibleToasts: y.visibleToasts,
                                    closeButton:
                                      ((ee = y.toastOptions) == null ? void 0 : ee.closeButton) ??
                                      y.closeButton,
                                    interacting: u.value,
                                    position: _,
                                    style: nr((te = y.toastOptions) == null ? void 0 : te.style),
                                    unstyled: (j = y.toastOptions) == null ? void 0 : j.unstyled,
                                    classes: (q = y.toastOptions) == null ? void 0 : q.classes,
                                    cancelButtonStyle:
                                      (V = y.toastOptions) == null ? void 0 : V.cancelButtonStyle,
                                    actionButtonStyle:
                                      (de = y.toastOptions) == null ? void 0 : de.actionButtonStyle,
                                    toasts: s.value,
                                    expandByDefault: y.expand,
                                    gap: y.gap,
                                    expanded: a.value,
                                    pauseWhenPageIsHidden: y.pauseWhenPageIsHidden,
                                    cn: f.value,
                                    heights: c.value,
                                    "onUpdate:heights": x[0] || (x[0] = (Ne) => (c.value = Ne)),
                                    onRemoveToast: E,
                                  },
                                  {
                                    "loading-icon": $t(() => [
                                      gt(y.$slots, "loading-icon", {}, () => [
                                        me(tT, { visible: S.type === "loading" }, null, 8, [
                                          "visible",
                                        ]),
                                      ]),
                                    ]),
                                    "success-icon": $t(() => [
                                      gt(y.$slots, "success-icon", {}, () => [me(aT)]),
                                    ]),
                                    "error-icon": $t(() => [
                                      gt(y.$slots, "error-icon", {}, () => [me(CT)]),
                                    ]),
                                    "warning-icon": $t(() => [
                                      gt(y.$slots, "warning-icon", {}, () => [me(bT)]),
                                    ]),
                                    "info-icon": $t(() => [
                                      gt(y.$slots, "info-icon", {}, () => [me(hT)]),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  [
                                    "index",
                                    "toast",
                                    "duration",
                                    "class",
                                    "descriptionClass",
                                    "invert",
                                    "visibleToasts",
                                    "closeButton",
                                    "interacting",
                                    "position",
                                    "style",
                                    "unstyled",
                                    "classes",
                                    "cancelButtonStyle",
                                    "actionButtonStyle",
                                    "toasts",
                                    "expandByDefault",
                                    "gap",
                                    "expanded",
                                    "pauseWhenPageIsHidden",
                                    "cn",
                                    "heights",
                                  ],
                                )
                              );
                            },
                          ),
                          128,
                        )),
                      ],
                      16,
                      kT,
                    )
                  );
                }),
                128,
              )),
            ],
            8,
            TT,
          )
        )
      );
    },
  }),
  MT = qe({
    __name: "HttpErrorProvider",
    setup(e) {
      t();
      function t() {
        nC(async (n, r) => {
          switch (r) {
            case 401:
              Pu.error(n, {
                duration: 2e3,
                onAutoClose() {
                  GS(window.location.pathname);
                },
              });
              break;
            default:
              Pu.error(n);
              break;
          }
        });
      }
      return (n, r) => gt(n.$slots, "default");
    },
  });
async function LT(e) {
  return await bp()("/user/setup", { method: "post", body: e });
}
async function $T() {
  const e = bp(),
    t = await XS(),
    n = await e("/user", { method: "get" });
  return { ...t, ...n, avatar: t.picture || "", id: t.sub || "" };
}
var Oo = ((e) => ((e.DARK = "dark"), (e.LIGHT = "light"), e))(Oo || {});
const Lu = "DARK_MODE",
  $u = "dark",
  HT = "light",
  Hu = ie("light");
function NT() {
  const e =
      document.startViewTransition &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    t = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
    n = localStorage.getItem(Lu),
    r = () => {
      if (t && !n) {
        s(!0);
        return;
      }
      s(n === "dark");
    },
    o = (i) => {
      const c = document.documentElement.classList.contains("dark");
      if (!e) {
        s(!c);
        return;
      }
      const a = i.clientX,
        u = i.clientY,
        l = Math.hypot(Math.max(a, innerWidth - a), Math.max(u, innerHeight - u));
      document
        .startViewTransition(() => {
          s(!c);
        })
        .ready.then(() => {
          const d = [`circle(0px at ${a}px ${u}px)`, `circle(${l}px at ${a}px ${u}px)`];
          document.documentElement.animate(
            { clipPath: c ? d : [...d].reverse() },
            {
              duration: 300,
              easing: "ease-in",
              pseudoElement: c ? "::view-transition-new(root)" : "::view-transition-old(root)",
            },
          );
        });
    },
    s = (i = !1) => {
      const c = i ? $u : HT,
        a = i ? "dark" : "light";
      document.documentElement.classList.toggle($u, i),
        document.documentElement.setAttribute("data-theme", c),
        (Hu.value = a),
        localStorage.setItem(Lu, a);
    };
  return { setDarkMode: s, toggleDarkMode: o, initDarkMode: r, darkMode: Hu };
}
var Sp = ((e) => ((e.REGULAR = "regular"), (e.FOUNDER = "founder"), e))(Sp || {});
const DT = uC("user", () => {
    const e = ie();
    function t(s) {
      e.value = s;
    }
    function n() {
      var s, i;
      return !((s = e.value) != null && s.username) || !((i = e.value) != null && i.avatar);
    }
    async function r(s) {
      if (!e.value) return;
      const i = await LT({ username: s.username, avatar: s.avatar });
      (e.value.username = i.username), (e.value.avatar = i.avatar);
    }
    function o() {
      var s, i;
      return (
        ((i = (s = e.value) == null ? void 0 : s.membership.details) == null ? void 0 : i.type) ===
        Sp.FOUNDER
      );
    }
    return { user: e, isNewUser: n, initUser: t, setupNewUser: r, isFounderMembership: o };
  }),
  jT = Aw(RC),
  UT = { key: 0, class: "h-screen w-screen" },
  FT = qe({
    __name: "app",
    setup(e) {
      const { initDarkMode: t, darkMode: n } = NT();
      t();
      const r = DT(),
        { status: o } = xw("initApplication", async () => {
          if (YS()) {
            const s = await $T();
            r.initUser(s);
          }
        });
      return (s, i) => {
        const c = wC,
          a = xC,
          u = kC,
          l = jT,
          f = MT;
        return (
          oe(),
          Ve(f, null, {
            default: $t(() => [
              ne(o) === "pending"
                ? (oe(), Ce("div", UT, [me(c)]))
                : (oe(), Ve(u, { key: 1 }, { default: $t(() => [me(a)]), _: 1 })),
              me(l),
              me(
                ne(OT),
                {
                  theme: ne(n) === ne(Oo).DARK ? "dark" : "light",
                  position: "top-center",
                  toastOptions: {
                    style: {
                      background: ne(n) === ne(Oo).DARK ? "#c084fc" : "#f3e8ff",
                      color: ne(n) === ne(Oo).DARK ? "#000" : "#6b21a8",
                    },
                  },
                },
                null,
                8,
                ["theme", "toastOptions"],
              ),
            ]),
            _: 1,
          })
        );
      };
    },
  }),
  BT = {
    __name: "nuxt-error-page",
    props: { error: Object },
    setup(e) {
      const n = e.error;
      n.stack &&
        n.stack
          .split(
            `
`,
          )
          .splice(1)
          .map((f) => ({
            text: f.replace("webpack:/", "").replace(".vue", ".js").trim(),
            internal:
              (f.includes("node_modules") && !f.includes(".cache")) ||
              f.includes("internal") ||
              f.includes("new Promise"),
          }))
          .map((f) => `<span class="stack${f.internal ? " internal" : ""}">${f.text}</span>`).join(`
`);
      const r = Number(n.statusCode || 500),
        o = r === 404,
        s = n.statusMessage ?? (o ? "Page Not Found" : "Internal Server Error"),
        i = n.message || n.toString(),
        c = void 0,
        l = o
          ? hi(() =>
              Qe(() => import("./CQkpS3wy.js"), __vite__mapDeps([33, 4, 34]), import.meta.url).then(
                (f) => f.default || f,
              ),
            )
          : hi(() =>
              Qe(() => import("./WaEPOtGd.js"), __vite__mapDeps([35, 36]), import.meta.url).then(
                (f) => f.default || f,
              ),
            );
      return (f, d) => (
        oe(),
        Ve(
          ne(l),
          oi(Qf({ statusCode: ne(r), statusMessage: ne(s), description: ne(i), stack: ne(c) })),
          null,
          16,
        )
      );
    },
  },
  WT = { key: 0 },
  Nu = {
    __name: "nuxt-root",
    setup(e) {
      const t = () => null,
        n = Te(),
        r = n.deferHydration();
      if (n.isHydrating) {
        const a = n.hooks.hookOnce("app:error", r);
        xt().beforeEach(a);
      }
      const o = !1;
      An(Qr, La()), n.hooks.callHookWith((a) => a.map((u) => u()), "vue:setup");
      const s = vs(),
        i = !1;
      Sf((a, u, l) => {
        if (
          (n.hooks
            .callHook("vue:error", a, u, l)
            .catch((f) => console.error("[nuxt] Error in `vue:error` hook", f)),
          Q0(a) && (a.fatal || a.unhandled))
        )
          return n.runWithContext(() => Un(a)), !1;
      });
      const c = !1;
      return (a, u) => (
        oe(),
        Ve(
          xa,
          { onResolve: ne(r) },
          {
            default: $t(() => [
              ne(i)
                ? (oe(), Ce("div", WT))
                : ne(s)
                  ? (oe(), Ve(ne(BT), { key: 1, error: ne(s) }, null, 8, ["error"]))
                  : ne(c)
                    ? (oe(), Ve(ne(t), { key: 2, context: ne(c) }, null, 8, ["context"]))
                    : ne(o)
                      ? (oe(), Ve(Dn(ne(o)), { key: 3 }))
                      : (oe(), Ve(ne(FT), { key: 4 })),
            ]),
            _: 1,
          },
          8,
          ["onResolve"],
        )
      );
    },
  };
let Du;
{
  let e;
  (Du = async function () {
    var i, c;
    if (e) return e;
    const r = !!(
        ((i = window.__NUXT__) != null && i.serverRendered) ||
        ((c = document.getElementById("__NUXT_DATA__")) == null ? void 0 : c.dataset.ssr) === "true"
      )
        ? Qm(Nu)
        : Ym(Nu),
      o = H0({ vueApp: r });
    async function s(a) {
      await o.callHook("app:error", a), (o.payload.error = o.payload.error || Xr(a));
    }
    r.config.errorHandler = s;
    try {
      await j0(o, dC);
    } catch (a) {
      s(a);
    }
    try {
      await o.hooks.callHook("app:created", r),
        await o.hooks.callHook("app:beforeMount", r),
        r.mount(L0),
        await o.hooks.callHook("app:mounted", r),
        await dn();
    } catch (a) {
      s(a);
    }
    return r.config.errorHandler === s && (r.config.errorHandler = void 0), r;
  }),
    (e = Du().catch((t) => {
      throw (console.error("Error while mounting app:", t), t);
    }));
}
export {
  y_ as $,
  ek as A,
  wC as B,
  he as C,
  pt as D,
  Zb as E,
  Pu as F,
  Re as G,
  di as H,
  Nc as I,
  Me as J,
  fk as K,
  pk as L,
  Ow as M,
  ba as N,
  dk as O,
  I_ as P,
  Rn as Q,
  gt as R,
  Ql as S,
  _t as T,
  bp as U,
  YS as V,
  uC as W,
  Ut as X,
  dn as Y,
  nr as Z,
  hC as _,
  ut as a,
  ZT as a0,
  QT as a1,
  zx as a2,
  yk as a3,
  Qe as a4,
  GS as a5,
  Dn as a6,
  xw as a7,
  ik as a8,
  dd as a9,
  Fl as aA,
  ds as aB,
  ak as aC,
  n0 as aD,
  rk as aE,
  or as aF,
  yd as aG,
  Ti as aH,
  md as aI,
  ql as aJ,
  uk as aK,
  Jl as aL,
  l_ as aM,
  lk as aN,
  ck as aO,
  bt as aP,
  cn as aQ,
  GT as aR,
  Lg as aS,
  th as aT,
  VT as aU,
  hk as aV,
  Rx as aW,
  gk as aX,
  V1 as aY,
  mk as aZ,
  nk as aa,
  Ay as ab,
  Ry as ac,
  Ma as ad,
  uy as ae,
  tk as af,
  Te as ag,
  pn as ah,
  Ue as ai,
  ms as aj,
  ok as ak,
  zT as al,
  qT as am,
  NT as an,
  YT as ao,
  Oo as ap,
  wk as aq,
  xC as ar,
  oi as as,
  Qf as at,
  Qr as au,
  An as av,
  hn as aw,
  wd as ax,
  xt as ay,
  eh as az,
  me as b,
  Ce as c,
  Bo as d,
  vg as e,
  qe as f,
  DT as g,
  bk as h,
  Gn as i,
  hs as j,
  rt as k,
  ne as l,
  Ve as m,
  Gt as n,
  oe as o,
  yg as p,
  Ie as q,
  ie as r,
  $T as s,
  to as t,
  Uv as u,
  sk as v,
  $t as w,
  _k as x,
  JT as y,
  XT as z,
};
