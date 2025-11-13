import {
  ab as _,
  ag as A,
  ad as C,
  ae as D,
  i as F,
  c as G,
  ac as H,
  b as J,
  r as k,
  ah as L,
  f as O,
  af as P,
  C as p,
  aa as q,
  R as Q,
  a as S,
  ai as T,
  u as U,
  o as V,
  t as W,
  a9 as x,
  _ as X,
} from "./BJowY05t.js";

async function Y(e, t) {
  return await Z(t).catch(
    (i) => (
      console.error("Failed to get image meta for " + t, i + ""), { width: 0, height: 0, ratio: 0 }
    ),
  );
}
async function Z(e) {
  if (typeof Image > "u") throw new TypeError("Image not supported");
  return new Promise((t, r) => {
    const i = new Image();
    (i.onload = () => {
      const s = { width: i.width, height: i.height, ratio: i.width / i.height };
      t(s);
    }),
      (i.onerror = (s) => r(s)),
      (i.src = e);
  });
}
function j(e) {
  return (t) => (t ? e[t] || t : e.missingValue);
}
function K({ formatter: e, keyMap: t, joinWith: r = "/", valueMap: i } = {}) {
  e || (e = (o, n) => `${o}=${n}`), t && typeof t != "function" && (t = j(t));
  const s = i || {};
  return (
    Object.keys(s).forEach((o) => {
      typeof s[o] != "function" && (s[o] = j(s[o]));
    }),
    (o = {}) =>
      Object.entries(o)
        .filter(([d, c]) => typeof c < "u")
        .map(([d, c]) => {
          const l = s[d];
          return (
            typeof l == "function" && (c = l(o[d])),
            (d = typeof t == "function" ? t(d) : d),
            e(d, c)
          );
        })
        .join(r)
  );
}
function g(e = "") {
  if (typeof e == "number") return e;
  if (typeof e == "string" && e.replace("px", "").match(/^\d+$/g)) return Number.parseInt(e, 10);
}
function ee(e = "") {
  if (e === void 0 || !e.length) return [];
  const t = new Set();
  for (const r of e.split(" ")) {
    const i = Number.parseInt(r.replace("x", ""));
    i && t.add(i);
  }
  return Array.from(t);
}
function te(e) {
  if (e.length === 0)
    throw new Error(
      "`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)",
    );
}
function ie(e) {
  const t = {};
  if (typeof e == "string")
    for (const r of e.split(/[\s,]+/).filter((i) => i)) {
      const i = r.split(":");
      i.length !== 2 ? (t["1px"] = i[0].trim()) : (t[i[0].trim()] = i[1].trim());
    }
  else Object.assign(t, e);
  return t;
}
function re(e) {
  const t = { options: e },
    r = (s, o = {}) => E(t, s, o),
    i = (s, o = {}, n = {}) => r(s, { ...n, modifiers: C(o, n.modifiers || {}) }).url;
  for (const s in e.presets) i[s] = (o, n, d) => i(o, n, { ...e.presets[s], ...d });
  return (
    (i.options = e),
    (i.getImage = r),
    (i.getMeta = (s, o) => se(t, s, o)),
    (i.getSizes = (s, o) => ae(t, s, o)),
    (t.$img = i),
    i
  );
}
async function se(e, t, r) {
  const i = E(e, t, { ...r });
  return typeof i.getMeta == "function" ? await i.getMeta() : await Y(e, i.url);
}
function E(e, t, r) {
  var l, h;
  if (t && typeof t != "string")
    throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);
  if (!t || t.startsWith("data:")) return { url: t };
  const { provider: i, defaults: s } = oe(e, r.provider || e.options.provider),
    o = ne(e, r.preset);
  if (((t = x(t) ? t : q(t)), !i.supportsAlias))
    for (const m in e.options.alias)
      t.startsWith(m) && (t = _(e.options.alias[m], t.substr(m.length)));
  if (i.validateDomains && x(t)) {
    const m = H(t).host;
    if (!e.options.domains.find((w) => w === m)) return { url: t };
  }
  const n = C(r, o, s);
  n.modifiers = { ...n.modifiers };
  const d = n.modifiers.format;
  (l = n.modifiers) != null && l.width && (n.modifiers.width = g(n.modifiers.width)),
    (h = n.modifiers) != null && h.height && (n.modifiers.height = g(n.modifiers.height));
  const c = i.getImage(t, n, e);
  return (c.format = c.format || d || ""), c;
}
function oe(e, t) {
  const r = e.options.providers[t];
  if (!r) throw new Error("Unknown provider: " + t);
  return r;
}
function ne(e, t) {
  if (!t) return {};
  if (!e.options.presets[t]) throw new Error("Unknown preset: " + t);
  return e.options.presets[t];
}
function ae(e, t, r) {
  var f, b, z, $, I;
  const i = g((f = r.modifiers) == null ? void 0 : f.width),
    s = g((b = r.modifiers) == null ? void 0 : b.height),
    o = ie(r.sizes),
    n = (z = r.densities) != null && z.trim() ? ee(r.densities.trim()) : e.options.densities;
  te(n);
  const d = i && s ? s / i : 0,
    c = [],
    l = [];
  if (Object.keys(o).length >= 1) {
    for (const u in o) {
      const v = M(u, String(o[u]), s, d, e);
      if (v !== void 0) {
        c.push({
          size: v.size,
          screenMaxWidth: v.screenMaxWidth,
          media: `(max-width: ${v.screenMaxWidth}px)`,
        });
        for (const y of n) l.push({ width: v._cWidth * y, src: N(e, t, r, v, y) });
      }
    }
    de(c);
  } else
    for (const u of n) {
      const v = Object.keys(o)[0];
      let y = M(v, String(o[v]), s, d, e);
      y === void 0 &&
        (y = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: ($ = r.modifiers) == null ? void 0 : $.width,
          _cHeight: (I = r.modifiers) == null ? void 0 : I.height,
        }),
        l.push({ width: u, src: N(e, t, r, y, u) });
    }
  ce(l);
  const h = l[l.length - 1],
    m = c.length ? c.map((u) => `${u.media ? u.media + " " : ""}${u.size}`).join(", ") : void 0,
    w = m ? "w" : "x",
    a = l.map((u) => `${u.src} ${u.width}${w}`).join(", ");
  return { sizes: m, srcset: a, src: h == null ? void 0 : h.src };
}
function M(e, t, r, i, s) {
  const o = (s.options.screens && s.options.screens[e]) || Number.parseInt(e),
    n = t.endsWith("vw");
  if ((!n && /^\d+$/.test(t) && (t = t + "px"), !n && !t.endsWith("px"))) return;
  let d = Number.parseInt(t);
  if (!o || !d) return;
  n && (d = Math.round((d / 100) * o));
  const c = i ? Math.round(d * i) : r;
  return { size: t, screenMaxWidth: o, _cWidth: d, _cHeight: c };
}
function N(e, t, r, i, s) {
  return e.$img(
    t,
    {
      ...r.modifiers,
      width: i._cWidth ? i._cWidth * s : void 0,
      height: i._cHeight ? i._cHeight * s : void 0,
    },
    r,
  );
}
function de(e) {
  var r;
  e.sort((i, s) => i.screenMaxWidth - s.screenMaxWidth);
  let t = null;
  for (let i = e.length - 1; i >= 0; i--) {
    const s = e[i];
    s.media === t && e.splice(i, 1), (t = s.media);
  }
  for (let i = 0; i < e.length; i++) e[i].media = ((r = e[i + 1]) == null ? void 0 : r.media) || "";
}
function ce(e) {
  e.sort((r, i) => r.width - i.width);
  let t = null;
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    i.width === t && e.splice(r, 1), (t = i.width);
  }
}
const le = K({
    keyMap: {
      format: "f",
      fit: "fit",
      width: "w",
      height: "h",
      resize: "s",
      quality: "q",
      background: "b",
    },
    joinWith: "&",
    formatter: (e, t) => P(e) + "_" + P(t),
  }),
  ue = (e, { modifiers: t = {}, baseURL: r } = {}, i) => {
    t.width && t.height && ((t.resize = `${t.width}x${t.height}`), delete t.width, delete t.height);
    const s = le(t) || "_";
    return r || (r = _(i.options.nuxt.baseURL, "/_ipx")), { url: _(r, s, D(e)) };
  },
  fe = !0,
  ge = !0,
  he = Object.freeze(
    Object.defineProperty(
      { __proto__: null, getImage: ue, supportsAlias: ge, validateDomains: fe },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  B = {
    screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536, "2xl": 1536 },
    presets: {},
    provider: "ipxStatic",
    domains: [],
    alias: {},
    densities: [1, 2],
    format: ["webp"],
  };
B.providers = { ipxStatic: { provider: he, defaults: {} } };
const R = () => {
  const e = L(),
    t = A();
  return t.$img || t._img || (t._img = re({ ...B, nuxt: { baseURL: e.app.baseURL } }));
};
function me(e) {
  var t;
  (t = performance == null ? void 0 : performance.mark) == null ||
    t.call(performance, "mark_feature_usage", { detail: { feature: e } });
}
const ve = {
    src: { type: String, default: void 0 },
    format: { type: String, default: void 0 },
    quality: { type: [Number, String], default: void 0 },
    background: { type: String, default: void 0 },
    fit: { type: String, default: void 0 },
    modifiers: { type: Object, default: void 0 },
    preset: { type: String, default: void 0 },
    provider: { type: String, default: void 0 },
    sizes: { type: [Object, String], default: void 0 },
    densities: { type: String, default: void 0 },
    preload: { type: [Boolean, Object], default: void 0 },
    width: { type: [String, Number], default: void 0 },
    height: { type: [String, Number], default: void 0 },
    alt: { type: String, default: void 0 },
    referrerpolicy: { type: String, default: void 0 },
    usemap: { type: String, default: void 0 },
    longdesc: { type: String, default: void 0 },
    ismap: { type: Boolean, default: void 0 },
    loading: { type: String, default: void 0, validator: (e) => ["lazy", "eager"].includes(e) },
    crossorigin: {
      type: [Boolean, String],
      default: void 0,
      validator: (e) => ["anonymous", "use-credentials", "", !0, !1].includes(e),
    },
    decoding: {
      type: String,
      default: void 0,
      validator: (e) => ["async", "auto", "sync"].includes(e),
    },
    nonce: { type: [String], default: void 0 },
  },
  pe = (e) => {
    const t = p(() => ({ provider: e.provider, preset: e.preset })),
      r = p(() => ({
        width: g(e.width),
        height: g(e.height),
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        usemap: e.usemap,
        longdesc: e.longdesc,
        ismap: e.ismap,
        crossorigin: e.crossorigin === !0 ? "anonymous" : e.crossorigin || void 0,
        loading: e.loading,
        decoding: e.decoding,
        nonce: e.nonce,
      })),
      i = R(),
      s = p(() => ({
        ...e.modifiers,
        width: g(e.width),
        height: g(e.height),
        format: e.format,
        quality: e.quality || i.options.quality,
        background: e.background,
        fit: e.fit,
      }));
    return { options: t, attrs: r, modifiers: s };
  },
  ye = {
    ...ve,
    placeholder: { type: [Boolean, String, Number, Array], default: void 0 },
    placeholderClass: { type: String, default: void 0 },
  },
  we = O({
    name: "NuxtImg",
    props: ye,
    emits: ["load", "error"],
    setup: (e, t) => {
      const r = R(),
        i = pe(e),
        s = k(!1),
        o = k(),
        n = p(() =>
          r.getSizes(e.src, {
            ...i.options.value,
            sizes: e.sizes,
            densities: e.densities,
            modifiers: { ...i.modifiers.value, width: g(e.width), height: g(e.height) },
          }),
        ),
        d = p(() => {
          const a = { ...i.attrs.value, "data-nuxt-img": "" };
          return (
            (!e.placeholder || s.value) && ((a.sizes = n.value.sizes), (a.srcset = n.value.srcset)),
            a
          );
        }),
        c = p(() => {
          let a = e.placeholder;
          if ((a === "" && (a = !0), !a || s.value)) return !1;
          if (typeof a == "string") return a;
          const f = Array.isArray(a) ? a : typeof a == "number" ? [a, a] : [10, 10];
          return r(
            e.src,
            {
              ...i.modifiers.value,
              width: f[0],
              height: f[1],
              quality: f[2] || 50,
              blur: f[3] || 3,
            },
            i.options.value,
          );
        }),
        l = p(() => (e.sizes ? n.value.src : r(e.src, i.modifiers.value, i.options.value))),
        h = p(() => (c.value ? c.value : l.value));
      if (e.preload) {
        const a = Object.values(n.value).every((f) => f);
        U({
          link: [
            {
              rel: "preload",
              as: "image",
              nonce: e.nonce,
              ...(a
                ? { href: n.value.src, imagesizes: n.value.sizes, imagesrcset: n.value.srcset }
                : { href: h.value }),
              ...(typeof e.preload != "boolean" && e.preload.fetchPriority
                ? { fetchpriority: e.preload.fetchPriority }
                : {}),
            },
          ],
        });
      }
      const w = A().isHydrating;
      return (
        F(() => {
          if (c.value) {
            const a = new Image();
            (a.src = l.value),
              e.sizes && ((a.sizes = n.value.sizes || ""), (a.srcset = n.value.srcset)),
              (a.onload = (f) => {
                (s.value = !0), t.emit("load", f);
              }),
              me("nuxt-image");
            return;
          }
          o.value &&
            (o.value.complete &&
              w &&
              (o.value.getAttribute("data-error")
                ? t.emit("error", new Event("error"))
                : t.emit("load", new Event("load"))),
            (o.value.onload = (a) => {
              t.emit("load", a);
            }),
            (o.value.onerror = (a) => {
              t.emit("error", a);
            }));
        }),
        () =>
          T("img", {
            ref: o,
            ...d.value,
            ...t.attrs,
            class: e.placeholder && !s.value ? [e.placeholderClass] : void 0,
            src: h.value,
          })
      );
    },
  }),
  Se = { class: "relative aspect-video overflow-hidden" },
  _e = { class: "card-body" },
  be = { class: "card-title truncate" },
  ze = ["title"],
  $e = O({
    __name: "CoursePackCard",
    props: { coursePack: {} },
    emits: ["cardClick"],
    setup(e) {
      return (t, r) => {
        const i = we;
        return (
          V(),
          G(
            "div",
            {
              class: "course-pack-card",
              onClick: r[0] || (r[0] = (s) => t.$emit("cardClick", t.coursePack)),
            },
            [
              S("figure", Se, [
                J(
                  i,
                  {
                    src: t.coursePack.cover,
                    placeholder: [288, 180],
                    width: "288",
                    height: "180",
                    class: "inset-0 h-full w-full object-cover",
                  },
                  null,
                  8,
                  ["src"],
                ),
              ]),
              S("div", _e, [
                S("h2", be, W(t.coursePack.title), 1),
                S(
                  "p",
                  { class: "description-text", title: t.coursePack.description },
                  W(t.coursePack.description),
                  9,
                  ze,
                ),
                Q(t.$slots, "actions", {}, void 0, !0),
              ]),
            ],
          )
        );
      };
    },
  }),
  xe = X($e, [["__scopeId", "data-v-92bb3980"]]);
export { xe as C };
