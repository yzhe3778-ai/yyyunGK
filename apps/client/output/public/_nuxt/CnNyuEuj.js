import { aJ as A, C as d, k as E, aM as g, aK as L, r as p, aN as x, aL as y } from "./BJowY05t.js";

function C(n) {
  var t;
  const e = y(n);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
const w = x ? window : void 0;
function W(...n) {
  let t, e, r, o;
  if (
    (typeof n[0] == "string" || Array.isArray(n[0])
      ? (([e, r, o] = n), (t = w))
      : ([t, e, r, o] = n),
    !t)
  )
    return A;
  Array.isArray(e) || (e = [e]), Array.isArray(r) || (r = [r]);
  const l = [],
    u = () => {
      l.forEach((s) => s()), (l.length = 0);
    },
    i = (s, a, c, f) => (s.addEventListener(a, c, f), () => s.removeEventListener(a, c, f)),
    m = E(
      () => [C(t), y(o)],
      ([s, a]) => {
        if ((u(), !s)) return;
        const c = L(a) ? { ...a } : a;
        l.push(...e.flatMap((f) => r.map((h) => i(s, f, h, c))));
      },
      { immediate: !0, flush: "post" },
    ),
    v = () => {
      m(), u();
    };
  return g(v), v;
}
function Y(n = {}) {
  const { window: t = w, behavior: e = "auto" } = n;
  if (!t) return { x: p(0), y: p(0) };
  const r = p(t.scrollX),
    o = p(t.scrollY),
    l = d({
      get() {
        return r.value;
      },
      set(i) {
        scrollTo({ left: i, behavior: e });
      },
    }),
    u = d({
      get() {
        return o.value;
      },
      set(i) {
        scrollTo({ top: i, behavior: e });
      },
    });
  return (
    W(
      t,
      "scroll",
      () => {
        (r.value = t.scrollX), (o.value = t.scrollY);
      },
      { capture: !1, passive: !0 },
    ),
    { x: l, y: u }
  );
}
export { Y as a, C as u };
