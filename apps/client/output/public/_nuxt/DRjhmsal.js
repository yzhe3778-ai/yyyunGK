import { _ as pt } from "./_b8Uo-6J.js";
import {
  f as _t,
  w as At,
  t as B,
  o as D,
  z as Et,
  l as It,
  c as K,
  a as k,
  r as Mt,
  b as q,
  G as St,
  H as wt,
  i as xt,
  y as yt,
  C as Z,
} from "./BJowY05t.js";
import { u as bt } from "./C6LStEew.js";
import { _ as mt } from "./CyUMc6TN.js";

import "./Be3xCWOP.js";
import "./D_a5X8Y3.js";
import "./BC2xWXSP.js";
import "./CnNyuEuj.js";

function I(s) {
  return Array.isArray ? Array.isArray(s) : ot(s) === "[object Array]";
}
const vt = 1 / 0;
function kt(s) {
  if (typeof s == "string") return s;
  let t = s + "";
  return t == "0" && 1 / s == -vt ? "-0" : t;
}
function Lt(s) {
  return s == null ? "" : kt(s);
}
function y(s) {
  return typeof s == "string";
}
function it(s) {
  return typeof s == "number";
}
function Rt(s) {
  return s === !0 || s === !1 || (Nt(s) && ot(s) == "[object Boolean]");
}
function ct(s) {
  return typeof s == "object";
}
function Nt(s) {
  return ct(s) && s !== null;
}
function m(s) {
  return s != null;
}
function W(s) {
  return !s.trim().length;
}
function ot(s) {
  return s == null
    ? s === void 0
      ? "[object Undefined]"
      : "[object Null]"
    : Object.prototype.toString.call(s);
}
const Ot = "Incorrect 'index' type",
  $t = (s) => `Invalid value for key ${s}`,
  Ct = (s) => `Pattern length exceeds max of ${s}.`,
  Tt = (s) => `Missing ${s} property in key`,
  Ft = (s) => `Property 'weight' in key '${s}' must be a positive integer`,
  tt = Object.prototype.hasOwnProperty;
class jt {
  constructor(t) {
    (this._keys = []), (this._keyMap = {});
    let e = 0;
    t.forEach((n) => {
      let r = at(n);
      this._keys.push(r), (this._keyMap[r.id] = r), (e += r.weight);
    }),
      this._keys.forEach((n) => {
        n.weight /= e;
      });
  }
  get(t) {
    return this._keyMap[t];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function at(s) {
  let t = null,
    e = null,
    n = null,
    r = 1,
    i = null;
  if (y(s) || I(s)) (n = s), (t = et(s)), (e = z(s));
  else {
    if (!tt.call(s, "name")) throw new Error(Tt("name"));
    const c = s.name;
    if (((n = c), tt.call(s, "weight") && ((r = s.weight), r <= 0))) throw new Error(Ft(c));
    (t = et(c)), (e = z(c)), (i = s.getFn);
  }
  return { path: t, id: e, weight: r, src: n, getFn: i };
}
function et(s) {
  return I(s) ? s : s.split(".");
}
function z(s) {
  return I(s) ? s.join(".") : s;
}
function Pt(s, t) {
  let e = [],
    n = !1;
  const r = (i, c, o) => {
    if (m(i))
      if (!c[o]) e.push(i);
      else {
        let a = c[o];
        const h = i[a];
        if (!m(h)) return;
        if (o === c.length - 1 && (y(h) || it(h) || Rt(h))) e.push(Lt(h));
        else if (I(h)) {
          n = !0;
          for (let l = 0, u = h.length; l < u; l += 1) r(h[l], c, o + 1);
        } else c.length && r(h, c, o + 1);
      }
  };
  return r(s, y(t) ? t.split(".") : t, 0), n ? e : e[0];
}
const Dt = { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 },
  Kt = {
    isCaseSensitive: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (s, t) => (s.score === t.score ? (s.idx < t.idx ? -1 : 1) : s.score < t.score ? -1 : 1),
  },
  Bt = { location: 0, threshold: 0.6, distance: 100 },
  Wt = {
    useExtendedSearch: !1,
    getFn: Pt,
    ignoreLocation: !1,
    ignoreFieldNorm: !1,
    fieldNormWeight: 1,
  };
var d = { ...Kt, ...Dt, ...Bt, ...Wt };
const zt = /[^ ]+/g;
function Vt(s = 1, t = 3) {
  const e = new Map(),
    n = Math.pow(10, t);
  return {
    get(r) {
      const i = r.match(zt).length;
      if (e.has(i)) return e.get(i);
      const c = 1 / Math.pow(i, 0.5 * s),
        o = parseFloat(Math.round(c * n) / n);
      return e.set(i, o), o;
    },
    clear() {
      e.clear();
    },
  };
}
class Q {
  constructor({ getFn: t = d.getFn, fieldNormWeight: e = d.fieldNormWeight } = {}) {
    (this.norm = Vt(e, 3)), (this.getFn = t), (this.isCreated = !1), this.setIndexRecords();
  }
  setSources(t = []) {
    this.docs = t;
  }
  setIndexRecords(t = []) {
    this.records = t;
  }
  setKeys(t = []) {
    (this.keys = t),
      (this._keysMap = {}),
      t.forEach((e, n) => {
        this._keysMap[e.id] = n;
      });
  }
  create() {
    this.isCreated ||
      !this.docs.length ||
      ((this.isCreated = !0),
      y(this.docs[0])
        ? this.docs.forEach((t, e) => {
            this._addString(t, e);
          })
        : this.docs.forEach((t, e) => {
            this._addObject(t, e);
          }),
      this.norm.clear());
  }
  add(t) {
    const e = this.size();
    y(t) ? this._addString(t, e) : this._addObject(t, e);
  }
  removeAt(t) {
    this.records.splice(t, 1);
    for (let e = t, n = this.size(); e < n; e += 1) this.records[e].i -= 1;
  }
  getValueForItemAtKeyId(t, e) {
    return t[this._keysMap[e]];
  }
  size() {
    return this.records.length;
  }
  _addString(t, e) {
    if (!m(t) || W(t)) return;
    let n = { v: t, i: e, n: this.norm.get(t) };
    this.records.push(n);
  }
  _addObject(t, e) {
    let n = { i: e, $: {} };
    this.keys.forEach((r, i) => {
      let c = r.getFn ? r.getFn(t) : this.getFn(t, r.path);
      if (m(c)) {
        if (I(c)) {
          let o = [];
          const a = [{ nestedArrIndex: -1, value: c }];
          for (; a.length; ) {
            const { nestedArrIndex: h, value: l } = a.pop();
            if (m(l))
              if (y(l) && !W(l)) {
                let u = { v: l, i: h, n: this.norm.get(l) };
                o.push(u);
              } else
                I(l) &&
                  l.forEach((u, f) => {
                    a.push({ nestedArrIndex: f, value: u });
                  });
          }
          n.$[i] = o;
        } else if (y(c) && !W(c)) {
          let o = { v: c, n: this.norm.get(c) };
          n.$[i] = o;
        }
      }
    }),
      this.records.push(n);
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function ht(s, t, { getFn: e = d.getFn, fieldNormWeight: n = d.fieldNormWeight } = {}) {
  const r = new Q({ getFn: e, fieldNormWeight: n });
  return r.setKeys(s.map(at)), r.setSources(t), r.create(), r;
}
function Ht(s, { getFn: t = d.getFn, fieldNormWeight: e = d.fieldNormWeight } = {}) {
  const { keys: n, records: r } = s,
    i = new Q({ getFn: t, fieldNormWeight: e });
  return i.setKeys(n), i.setIndexRecords(r), i;
}
function T(
  s,
  {
    errors: t = 0,
    currentLocation: e = 0,
    expectedLocation: n = 0,
    distance: r = d.distance,
    ignoreLocation: i = d.ignoreLocation,
  } = {},
) {
  const c = t / s.length;
  if (i) return c;
  const o = Math.abs(n - e);
  return r ? c + o / r : o ? 1 : c;
}
function Ut(s = [], t = d.minMatchCharLength) {
  let e = [],
    n = -1,
    r = -1,
    i = 0;
  for (let c = s.length; i < c; i += 1) {
    let o = s[i];
    o && n === -1
      ? (n = i)
      : !o && n !== -1 && ((r = i - 1), r - n + 1 >= t && e.push([n, r]), (n = -1));
  }
  return s[i - 1] && i - n >= t && e.push([n, i - 1]), e;
}
const L = 32;
function Gt(
  s,
  t,
  e,
  {
    location: n = d.location,
    distance: r = d.distance,
    threshold: i = d.threshold,
    findAllMatches: c = d.findAllMatches,
    minMatchCharLength: o = d.minMatchCharLength,
    includeMatches: a = d.includeMatches,
    ignoreLocation: h = d.ignoreLocation,
  } = {},
) {
  if (t.length > L) throw new Error(Ct(L));
  const l = t.length,
    u = s.length,
    f = Math.max(0, Math.min(n, u));
  let g = i,
    p = f;
  const _ = o > 1 || a,
    b = _ ? Array(u) : [];
  let E;
  for (; (E = s.indexOf(t, p)) > -1; ) {
    let M = T(t, { currentLocation: E, expectedLocation: f, distance: r, ignoreLocation: h });
    if (((g = Math.min(M, g)), (p = E + l), _)) {
      let S = 0;
      for (; S < l; ) (b[E + S] = 1), (S += 1);
    }
  }
  p = -1;
  let R = [],
    v = 1,
    $ = l + u;
  const gt = 1 << (l - 1);
  for (let M = 0; M < l; M += 1) {
    let S = 0,
      w = $;
    for (; S < w; )
      T(t, {
        errors: M,
        currentLocation: f + w,
        expectedLocation: f,
        distance: r,
        ignoreLocation: h,
      }) <= g
        ? (S = w)
        : ($ = w),
        (w = Math.floor(($ - S) / 2 + S));
    $ = w;
    let X = Math.max(1, f - w + 1),
      P = c ? u : Math.min(f + w, u) + l,
      N = Array(P + 2);
    N[P + 1] = (1 << M) - 1;
    for (let x = P; x >= X; x -= 1) {
      let C = x - 1,
        J = e[s.charAt(C)];
      if (
        (_ && (b[C] = +!!J),
        (N[x] = ((N[x + 1] << 1) | 1) & J),
        M && (N[x] |= ((R[x + 1] | R[x]) << 1) | 1 | R[x + 1]),
        N[x] & gt &&
          ((v = T(t, {
            errors: M,
            currentLocation: C,
            expectedLocation: f,
            distance: r,
            ignoreLocation: h,
          })),
          v <= g))
      ) {
        if (((g = v), (p = C), p <= f)) break;
        X = Math.max(1, 2 * f - p);
      }
    }
    if (
      T(t, {
        errors: M + 1,
        currentLocation: f,
        expectedLocation: f,
        distance: r,
        ignoreLocation: h,
      }) > g
    )
      break;
    R = N;
  }
  const j = { isMatch: p >= 0, score: Math.max(0.001, v) };
  if (_) {
    const M = Ut(b, o);
    M.length ? a && (j.indices = M) : (j.isMatch = !1);
  }
  return j;
}
function Yt(s) {
  let t = {};
  for (let e = 0, n = s.length; e < n; e += 1) {
    const r = s.charAt(e);
    t[r] = (t[r] || 0) | (1 << (n - e - 1));
  }
  return t;
}
class lt {
  constructor(
    t,
    {
      location: e = d.location,
      threshold: n = d.threshold,
      distance: r = d.distance,
      includeMatches: i = d.includeMatches,
      findAllMatches: c = d.findAllMatches,
      minMatchCharLength: o = d.minMatchCharLength,
      isCaseSensitive: a = d.isCaseSensitive,
      ignoreLocation: h = d.ignoreLocation,
    } = {},
  ) {
    if (
      ((this.options = {
        location: e,
        threshold: n,
        distance: r,
        includeMatches: i,
        findAllMatches: c,
        minMatchCharLength: o,
        isCaseSensitive: a,
        ignoreLocation: h,
      }),
      (this.pattern = a ? t : t.toLowerCase()),
      (this.chunks = []),
      !this.pattern.length)
    )
      return;
    const l = (f, g) => {
        this.chunks.push({ pattern: f, alphabet: Yt(f), startIndex: g });
      },
      u = this.pattern.length;
    if (u > L) {
      let f = 0;
      const g = u % L,
        p = u - g;
      for (; f < p; ) l(this.pattern.substr(f, L), f), (f += L);
      if (g) {
        const _ = u - L;
        l(this.pattern.substr(_), _);
      }
    } else l(this.pattern, 0);
  }
  searchIn(t) {
    const { isCaseSensitive: e, includeMatches: n } = this.options;
    if ((e || (t = t.toLowerCase()), this.pattern === t)) {
      let p = { isMatch: !0, score: 0 };
      return n && (p.indices = [[0, t.length - 1]]), p;
    }
    const {
      location: r,
      distance: i,
      threshold: c,
      findAllMatches: o,
      minMatchCharLength: a,
      ignoreLocation: h,
    } = this.options;
    let l = [],
      u = 0,
      f = !1;
    this.chunks.forEach(({ pattern: p, alphabet: _, startIndex: b }) => {
      const {
        isMatch: E,
        score: R,
        indices: v,
      } = Gt(t, p, _, {
        location: r + b,
        distance: i,
        threshold: c,
        findAllMatches: o,
        minMatchCharLength: a,
        includeMatches: n,
        ignoreLocation: h,
      });
      E && (f = !0), (u += R), E && v && (l = [...l, ...v]);
    });
    let g = { isMatch: f, score: f ? u / this.chunks.length : 1 };
    return f && n && (g.indices = l), g;
  }
}
class A {
  constructor(t) {
    this.pattern = t;
  }
  static isMultiMatch(t) {
    return st(t, this.multiRegex);
  }
  static isSingleMatch(t) {
    return st(t, this.singleRegex);
  }
  search() {}
}
function st(s, t) {
  const e = s.match(t);
  return e ? e[1] : null;
}
class Qt extends A {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(t) {
    const e = t === this.pattern;
    return { isMatch: e, score: e ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class Xt extends A {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(t) {
    const n = t.indexOf(this.pattern) === -1;
    return { isMatch: n, score: n ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class Jt extends A {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(t) {
    const e = t.startsWith(this.pattern);
    return { isMatch: e, score: e ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class Zt extends A {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(t) {
    const e = !t.startsWith(this.pattern);
    return { isMatch: e, score: e ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class qt extends A {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(t) {
    const e = t.endsWith(this.pattern);
    return {
      isMatch: e,
      score: e ? 0 : 1,
      indices: [t.length - this.pattern.length, t.length - 1],
    };
  }
}
class te extends A {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(t) {
    const e = !t.endsWith(this.pattern);
    return { isMatch: e, score: e ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class ut extends A {
  constructor(
    t,
    {
      location: e = d.location,
      threshold: n = d.threshold,
      distance: r = d.distance,
      includeMatches: i = d.includeMatches,
      findAllMatches: c = d.findAllMatches,
      minMatchCharLength: o = d.minMatchCharLength,
      isCaseSensitive: a = d.isCaseSensitive,
      ignoreLocation: h = d.ignoreLocation,
    } = {},
  ) {
    super(t),
      (this._bitapSearch = new lt(t, {
        location: e,
        threshold: n,
        distance: r,
        includeMatches: i,
        findAllMatches: c,
        minMatchCharLength: o,
        isCaseSensitive: a,
        ignoreLocation: h,
      }));
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(t) {
    return this._bitapSearch.searchIn(t);
  }
}
class dt extends A {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(t) {
    let e = 0,
      n;
    const r = [],
      i = this.pattern.length;
    for (; (n = t.indexOf(this.pattern, e)) > -1; ) (e = n + i), r.push([n, e - 1]);
    const c = !!r.length;
    return { isMatch: c, score: c ? 0 : 1, indices: r };
  }
}
const V = [Qt, dt, Jt, Zt, te, qt, Xt, ut],
  nt = V.length,
  ee = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
  se = "|";
function ne(s, t = {}) {
  return s.split(se).map((e) => {
    let n = e
        .trim()
        .split(ee)
        .filter((i) => i && !!i.trim()),
      r = [];
    for (let i = 0, c = n.length; i < c; i += 1) {
      const o = n[i];
      let a = !1,
        h = -1;
      for (; !a && ++h < nt; ) {
        const l = V[h];
        let u = l.isMultiMatch(o);
        u && (r.push(new l(u, t)), (a = !0));
      }
      if (!a)
        for (h = -1; ++h < nt; ) {
          const l = V[h];
          let u = l.isSingleMatch(o);
          if (u) {
            r.push(new l(u, t));
            break;
          }
        }
    }
    return r;
  });
}
const re = new Set([ut.type, dt.type]);
class ie {
  constructor(
    t,
    {
      isCaseSensitive: e = d.isCaseSensitive,
      includeMatches: n = d.includeMatches,
      minMatchCharLength: r = d.minMatchCharLength,
      ignoreLocation: i = d.ignoreLocation,
      findAllMatches: c = d.findAllMatches,
      location: o = d.location,
      threshold: a = d.threshold,
      distance: h = d.distance,
    } = {},
  ) {
    (this.query = null),
      (this.options = {
        isCaseSensitive: e,
        includeMatches: n,
        minMatchCharLength: r,
        findAllMatches: c,
        ignoreLocation: i,
        location: o,
        threshold: a,
        distance: h,
      }),
      (this.pattern = e ? t : t.toLowerCase()),
      (this.query = ne(this.pattern, this.options));
  }
  static condition(t, e) {
    return e.useExtendedSearch;
  }
  searchIn(t) {
    const e = this.query;
    if (!e) return { isMatch: !1, score: 1 };
    const { includeMatches: n, isCaseSensitive: r } = this.options;
    t = r ? t : t.toLowerCase();
    let i = 0,
      c = [],
      o = 0;
    for (let a = 0, h = e.length; a < h; a += 1) {
      const l = e[a];
      (c.length = 0), (i = 0);
      for (let u = 0, f = l.length; u < f; u += 1) {
        const g = l[u],
          { isMatch: p, indices: _, score: b } = g.search(t);
        if (p) {
          if (((i += 1), (o += b), n)) {
            const E = g.constructor.type;
            re.has(E) ? (c = [...c, ..._]) : c.push(_);
          }
        } else {
          (o = 0), (i = 0), (c.length = 0);
          break;
        }
      }
      if (i) {
        let u = { isMatch: !0, score: o / i };
        return n && (u.indices = c), u;
      }
    }
    return { isMatch: !1, score: 1 };
  }
}
const H = [];
function ce(...s) {
  H.push(...s);
}
function U(s, t) {
  for (let e = 0, n = H.length; e < n; e += 1) {
    let r = H[e];
    if (r.condition(s, t)) return new r(s, t);
  }
  return new lt(s, t);
}
const F = { AND: "$and", OR: "$or" },
  G = { PATH: "$path", PATTERN: "$val" },
  Y = (s) => !!(s[F.AND] || s[F.OR]),
  oe = (s) => !!s[G.PATH],
  ae = (s) => !I(s) && ct(s) && !Y(s),
  rt = (s) => ({ [F.AND]: Object.keys(s).map((t) => ({ [t]: s[t] })) });
function ft(s, t, { auto: e = !0 } = {}) {
  const n = (r) => {
    let i = Object.keys(r);
    const c = oe(r);
    if (!c && i.length > 1 && !Y(r)) return n(rt(r));
    if (ae(r)) {
      const a = c ? r[G.PATH] : i[0],
        h = c ? r[G.PATTERN] : r[a];
      if (!y(h)) throw new Error($t(a));
      const l = { keyId: z(a), pattern: h };
      return e && (l.searcher = U(h, t)), l;
    }
    let o = { children: [], operator: i[0] };
    return (
      i.forEach((a) => {
        const h = r[a];
        I(h) &&
          h.forEach((l) => {
            o.children.push(n(l));
          });
      }),
      o
    );
  };
  return Y(s) || (s = rt(s)), n(s);
}
function he(s, { ignoreFieldNorm: t = d.ignoreFieldNorm }) {
  s.forEach((e) => {
    let n = 1;
    e.matches.forEach(({ key: r, norm: i, score: c }) => {
      const o = r ? r.weight : null;
      n *= Math.pow(c === 0 && o ? Number.EPSILON : c, (o || 1) * (t ? 1 : i));
    }),
      (e.score = n);
  });
}
function le(s, t) {
  const e = s.matches;
  (t.matches = []),
    m(e) &&
      e.forEach((n) => {
        if (!m(n.indices) || !n.indices.length) return;
        const { indices: r, value: i } = n;
        let c = { indices: r, value: i };
        n.key && (c.key = n.key.src), n.idx > -1 && (c.refIndex = n.idx), t.matches.push(c);
      });
}
function ue(s, t) {
  t.score = s.score;
}
function de(s, t, { includeMatches: e = d.includeMatches, includeScore: n = d.includeScore } = {}) {
  const r = [];
  return (
    e && r.push(le),
    n && r.push(ue),
    s.map((i) => {
      const { idx: c } = i,
        o = { item: t[c], refIndex: c };
      return (
        r.length &&
          r.forEach((a) => {
            a(i, o);
          }),
        o
      );
    })
  );
}
class O {
  constructor(t, e = {}, n) {
    (this.options = { ...d, ...e }),
      this.options.useExtendedSearch,
      (this._keyStore = new jt(this.options.keys)),
      this.setCollection(t, n);
  }
  setCollection(t, e) {
    if (((this._docs = t), e && !(e instanceof Q))) throw new Error(Ot);
    this._myIndex =
      e ||
      ht(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight,
      });
  }
  add(t) {
    m(t) && (this._docs.push(t), this._myIndex.add(t));
  }
  remove(t = () => !1) {
    const e = [];
    for (let n = 0, r = this._docs.length; n < r; n += 1) {
      const i = this._docs[n];
      t(i, n) && (this.removeAt(n), (n -= 1), (r -= 1), e.push(i));
    }
    return e;
  }
  removeAt(t) {
    this._docs.splice(t, 1), this._myIndex.removeAt(t);
  }
  getIndex() {
    return this._myIndex;
  }
  search(t, { limit: e = -1 } = {}) {
    const {
      includeMatches: n,
      includeScore: r,
      shouldSort: i,
      sortFn: c,
      ignoreFieldNorm: o,
    } = this.options;
    let a = y(t)
      ? y(this._docs[0])
        ? this._searchStringList(t)
        : this._searchObjectList(t)
      : this._searchLogical(t);
    return (
      he(a, { ignoreFieldNorm: o }),
      i && a.sort(c),
      it(e) && e > -1 && (a = a.slice(0, e)),
      de(a, this._docs, { includeMatches: n, includeScore: r })
    );
  }
  _searchStringList(t) {
    const e = U(t, this.options),
      { records: n } = this._myIndex,
      r = [];
    return (
      n.forEach(({ v: i, i: c, n: o }) => {
        if (!m(i)) return;
        const { isMatch: a, score: h, indices: l } = e.searchIn(i);
        a && r.push({ item: i, idx: c, matches: [{ score: h, value: i, norm: o, indices: l }] });
      }),
      r
    );
  }
  _searchLogical(t) {
    const e = ft(t, this.options),
      n = (o, a, h) => {
        if (!o.children) {
          const { keyId: u, searcher: f } = o,
            g = this._findMatches({
              key: this._keyStore.get(u),
              value: this._myIndex.getValueForItemAtKeyId(a, u),
              searcher: f,
            });
          return g && g.length ? [{ idx: h, item: a, matches: g }] : [];
        }
        const l = [];
        for (let u = 0, f = o.children.length; u < f; u += 1) {
          const g = o.children[u],
            p = n(g, a, h);
          if (p.length) l.push(...p);
          else if (o.operator === F.AND) return [];
        }
        return l;
      },
      r = this._myIndex.records,
      i = {},
      c = [];
    return (
      r.forEach(({ $: o, i: a }) => {
        if (m(o)) {
          let h = n(e, o, a);
          h.length &&
            (i[a] || ((i[a] = { idx: a, item: o, matches: [] }), c.push(i[a])),
            h.forEach(({ matches: l }) => {
              i[a].matches.push(...l);
            }));
        }
      }),
      c
    );
  }
  _searchObjectList(t) {
    const e = U(t, this.options),
      { keys: n, records: r } = this._myIndex,
      i = [];
    return (
      r.forEach(({ $: c, i: o }) => {
        if (!m(c)) return;
        let a = [];
        n.forEach((h, l) => {
          a.push(...this._findMatches({ key: h, value: c[l], searcher: e }));
        }),
          a.length && i.push({ idx: o, item: c, matches: a });
      }),
      i
    );
  }
  _findMatches({ key: t, value: e, searcher: n }) {
    if (!m(e)) return [];
    let r = [];
    if (I(e))
      e.forEach(({ v: i, i: c, n: o }) => {
        if (!m(i)) return;
        const { isMatch: a, score: h, indices: l } = n.searchIn(i);
        a && r.push({ score: h, key: t, value: i, idx: c, norm: o, indices: l });
      });
    else {
      const { v: i, n: c } = e,
        { isMatch: o, score: a, indices: h } = n.searchIn(i);
      o && r.push({ score: a, key: t, value: i, norm: c, indices: h });
    }
    return r;
  }
}
O.version = "7.0.0";
O.createIndex = ht;
O.parseIndex = Ht;
O.config = d;
O.parseQuery = ft;
ce(ie);
const fe = {
    class:
      "mx-auto my-8 w-full max-w-screen-lg space-y-3 rounded-lg bg-white px-6 py-8 shadow-even-lg dark:bg-gray-900 dark:shadow-gray-700 md:px-12",
  },
  ge = { class: "mb-4 flex items-center justify-between" },
  pe = { class: "text-gray-600 dark:text-gray-300" },
  me = { class: "text-lg font-bold text-purple-800 dark:text-white" },
  _e = { class: "text-purple-600 dark:text-purple-300" },
  Me = ["onClick"],
  ke = _t({
    __name: "mastered-elements",
    setup(s) {
      const t = bt(),
        e = Mt(""),
        n = Z(() => new O(t.masteredElements, { keys: ["content.english"], threshold: 0.4 })),
        r = Z(() => (e.value ? n.value.search(e.value).map((o) => o.item) : t.masteredElements));
      function i(o) {
        return new Date(o).toISOString().split("T")[0];
      }
      function c(o) {
        t.removeElement(o.id + "");
      }
      return (
        xt(async () => {
          t.setup();
        }),
        (o, a) => {
          const h = pt,
            l = mt;
          return (
            D(),
            K("div", fe, [
              k("div", ge, [
                yt(
                  k(
                    "input",
                    {
                      "onUpdate:modelValue": a[0] || (a[0] = (u) => (e.value = u)),
                      type: "text",
                      placeholder: "Search ...",
                      class:
                        "w-3/4 rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-purple-500",
                    },
                    null,
                    512,
                  ),
                  [[Et, e.value]],
                ),
                k("span", pe, "Total: " + B(It(t).totalMasteredElementsCount), 1),
              ]),
              (D(!0),
              K(
                St,
                null,
                wt(
                  r.value,
                  (u) => (
                    D(),
                    K(
                      "div",
                      {
                        key: u.id,
                        class:
                          "flex items-center justify-between rounded-lg bg-purple-100 p-4 transition-colors duration-300 hover:bg-purple-200 dark:bg-purple-700 dark:hover:bg-purple-600",
                      },
                      [
                        k("div", null, [
                          k("div", me, B(u.content.english), 1),
                          k("div", _e, " Added on " + B(i(u.masteredAt)), 1),
                        ]),
                        k(
                          "div",
                          {
                            onClick: (f) => c(u),
                            class:
                              "cursor-pointer transition-transform duration-300 hover:scale-110",
                          },
                          [
                            q(
                              l,
                              { text: "删除" },
                              {
                                default: At(() => [
                                  q(h, { name: "i-ph-trash-bold", class: "h-5 w-5" }),
                                ]),
                                _: 1,
                              },
                            ),
                          ],
                          8,
                          Me,
                        ),
                      ],
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
  });
export { ke as default };
