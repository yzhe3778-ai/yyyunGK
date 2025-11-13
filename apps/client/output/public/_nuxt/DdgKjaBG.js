import { _ as U } from "./_b8Uo-6J.js";
import { u as re } from "./BC2xWXSP.js";
import {
  c as _,
  J as $,
  as as A,
  o as b,
  w as B,
  n as C,
  av as D,
  j as E,
  t as ee,
  _ as F,
  f as G,
  R as h,
  M as I,
  a6 as J,
  Q as k,
  at as N,
  m as p,
  i as Q,
  D as S,
  a as T,
  C as u,
  au as V,
  aw as W,
  L as X,
  P as x,
  N as Y,
  O as Z,
} from "./BJowY05t.js";
import { _ as H } from "./C8e6MUgy.js";

const j = Object.freeze({
  ignoreUnknown: !1,
  respectType: !1,
  respectFunctionNames: !1,
  respectFunctionProperties: !1,
  unorderedObjects: !0,
  unorderedArrays: !1,
  unorderedSets: !1,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0,
});
function P(e, l) {
  l ? (l = { ...j, ...l }) : (l = j);
  const i = K(l);
  return i.dispatch(e), i.toString();
}
const te = Object.freeze(["prototype", "__proto__", "constructor"]);
function K(e) {
  let l = "",
    i = new Map();
  const t = (r) => {
    l += r;
  };
  return {
    toString() {
      return l;
    },
    getContext() {
      return i;
    },
    dispatch(r) {
      return e.replacer && (r = e.replacer(r)), this[r === null ? "null" : typeof r](r);
    },
    object(r) {
      if (r && typeof r.toJSON == "function") return this.object(r.toJSON());
      const a = Object.prototype.toString.call(r);
      let n = "";
      const d = a.length;
      d < 10 ? (n = "unknown:[" + a + "]") : (n = a.slice(8, d - 1)), (n = n.toLowerCase());
      let c = null;
      if ((c = i.get(r)) === void 0) i.set(r, i.size);
      else return this.dispatch("[CIRCULAR:" + c + "]");
      if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(r))
        return t("buffer:"), t(r.toString("utf8"));
      if (n !== "object" && n !== "function" && n !== "asyncfunction")
        this[n] ? this[n](r) : e.ignoreUnknown || this.unkown(r, n);
      else {
        let o = Object.keys(r);
        e.unorderedObjects && (o = o.sort());
        let f = [];
        e.respectType !== !1 && !L(r) && (f = te),
          e.excludeKeys &&
            ((o = o.filter((s) => !e.excludeKeys(s))), (f = f.filter((s) => !e.excludeKeys(s)))),
          t("object:" + (o.length + f.length) + ":");
        const y = (s) => {
          this.dispatch(s), t(":"), e.excludeValues || this.dispatch(r[s]), t(",");
        };
        for (const s of o) y(s);
        for (const s of f) y(s);
      }
    },
    array(r, a) {
      if (
        ((a = a === void 0 ? e.unorderedArrays !== !1 : a),
        t("array:" + r.length + ":"),
        !a || r.length <= 1)
      ) {
        for (const c of r) this.dispatch(c);
        return;
      }
      const n = new Map(),
        d = r.map((c) => {
          const o = K(e);
          o.dispatch(c);
          for (const [f, y] of o.getContext()) n.set(f, y);
          return o.toString();
        });
      return (i = n), d.sort(), this.array(d, !1);
    },
    date(r) {
      return t("date:" + r.toJSON());
    },
    symbol(r) {
      return t("symbol:" + r.toString());
    },
    unkown(r, a) {
      if ((t(a), !!r && (t(":"), r && typeof r.entries == "function")))
        return this.array(Array.from(r.entries()), !0);
    },
    error(r) {
      return t("error:" + r.toString());
    },
    boolean(r) {
      return t("bool:" + r);
    },
    string(r) {
      t("string:" + r.length + ":"), t(r);
    },
    function(r) {
      t("fn:"),
        L(r) ? this.dispatch("[native]") : this.dispatch(r.toString()),
        e.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(r.name)),
        e.respectFunctionProperties && this.object(r);
    },
    number(r) {
      return t("number:" + r);
    },
    xml(r) {
      return t("xml:" + r.toString());
    },
    null() {
      return t("Null");
    },
    undefined() {
      return t("Undefined");
    },
    regexp(r) {
      return t("regex:" + r.toString());
    },
    uint8array(r) {
      return t("uint8array:"), this.dispatch(Array.prototype.slice.call(r));
    },
    uint8clampedarray(r) {
      return t("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(r));
    },
    int8array(r) {
      return t("int8array:"), this.dispatch(Array.prototype.slice.call(r));
    },
    uint16array(r) {
      return t("uint16array:"), this.dispatch(Array.prototype.slice.call(r));
    },
    int16array(r) {
      return t("int16array:"), this.dispatch(Array.prototype.slice.call(r));
    },
    uint32array(r) {
      return t("uint32array:"), this.dispatch(Array.prototype.slice.call(r));
    },
    int32array(r) {
      return t("int32array:"), this.dispatch(Array.prototype.slice.call(r));
    },
    float32array(r) {
      return t("float32array:"), this.dispatch(Array.prototype.slice.call(r));
    },
    float64array(r) {
      return t("float64array:"), this.dispatch(Array.prototype.slice.call(r));
    },
    arraybuffer(r) {
      return t("arraybuffer:"), this.dispatch(new Uint8Array(r));
    },
    url(r) {
      return t("url:" + r.toString());
    },
    map(r) {
      t("map:");
      const a = [...r];
      return this.array(a, e.unorderedSets !== !1);
    },
    set(r) {
      t("set:");
      const a = [...r];
      return this.array(a, e.unorderedSets !== !1);
    },
    file(r) {
      return t("file:"), this.dispatch([r.name, r.size, r.type, r.lastModfied]);
    },
    blob() {
      if (e.ignoreUnknown) return t("[blob]");
      throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`);
    },
    domwindow() {
      return t("domwindow");
    },
    bigint(r) {
      return t("bigint:" + r.toString());
    },
    process() {
      return t("process");
    },
    timer() {
      return t("timer");
    },
    pipe() {
      return t("pipe");
    },
    tcp() {
      return t("tcp");
    },
    udp() {
      return t("udp");
    },
    tty() {
      return t("tty");
    },
    statwatcher() {
      return t("statwatcher");
    },
    securecontext() {
      return t("securecontext");
    },
    connection() {
      return t("connection");
    },
    zlib() {
      return t("zlib");
    },
    context() {
      return t("context");
    },
    nodescript() {
      return t("nodescript");
    },
    httpparser() {
      return t("httpparser");
    },
    dataview() {
      return t("dataview");
    },
    signal() {
      return t("signal");
    },
    fsevent() {
      return t("fsevent");
    },
    tlswrap() {
      return t("tlswrap");
    },
  };
}
const M = "[native code] }",
  ae = M.length;
function L(e) {
  return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-ae) === M;
}
function ie(e, l, i = {}) {
  return e === l || P(e, i) === P(l, i);
}
const z = {
    to: { type: [String, Object], default: void 0, required: !1 },
    href: { type: [String, Object], default: void 0, required: !1 },
    target: { type: String, default: void 0, required: !1 },
    rel: { type: String, default: void 0, required: !1 },
    noRel: { type: Boolean, default: void 0, required: !1 },
    prefetch: { type: Boolean, default: void 0, required: !1 },
    noPrefetch: { type: Boolean, default: void 0, required: !1 },
    activeClass: { type: String, default: void 0, required: !1 },
    exactActiveClass: { type: String, default: void 0, required: !1 },
    prefetchedClass: { type: String, default: void 0, required: !1 },
    replace: { type: Boolean, default: void 0, required: !1 },
    ariaCurrentValue: { type: String, default: void 0, required: !1 },
    external: { type: Boolean, default: void 0, required: !1 },
  },
  ne = (e) => Object.keys(z).reduce((i, t) => (e[t] !== void 0 && (i[t] = e[t]), i), {}),
  le = G({
    inheritAttrs: !1,
    props: {
      ...z,
      as: { type: String, default: "button" },
      type: { type: String, default: "button" },
      disabled: { type: Boolean, default: null },
      active: { type: Boolean, default: void 0 },
      exact: { type: Boolean, default: !1 },
      exactQuery: { type: Boolean, default: !1 },
      exactHash: { type: Boolean, default: !1 },
      inactiveClass: { type: String, default: void 0 },
    },
    setup(e) {
      function l(i, t, { isActive: r, isExactActive: a }) {
        return (e.exactQuery && !ie(i.query, t.query)) || (e.exactHash && i.hash !== t.hash)
          ? e.inactiveClass
          : (e.exact && a) || (!e.exact && r)
            ? e.activeClass
            : e.inactiveClass;
      }
      return { resolveLinkClass: l };
    },
  }),
  se = ["href", "aria-disabled", "role", "rel", "target", "onClick"];
function oe(e, l, i, t, r, a) {
  const n = H;
  return e.to
    ? (b(),
      p(
        n,
        k({ key: 1 }, e.$props, { custom: "" }),
        {
          default: B(
            ({
              route: d,
              href: c,
              target: o,
              rel: f,
              navigate: y,
              isActive: s,
              isExactActive: m,
              isExternal: w,
            }) => [
              T(
                "a",
                k(e.$attrs, {
                  href: e.disabled ? void 0 : c,
                  "aria-disabled": e.disabled ? "true" : void 0,
                  role: e.disabled ? "link" : void 0,
                  rel: f,
                  target: o,
                  class:
                    e.active !== void 0
                      ? e.active
                        ? e.activeClass
                        : e.inactiveClass
                      : e.resolveLinkClass(d, e._.provides[V] || e.$route, {
                          isActive: s,
                          isExactActive: m,
                        }),
                  onClick: (v) => !w && !e.disabled && y(v),
                }),
                [
                  h(
                    e.$slots,
                    "default",
                    A(N({ isActive: e.active !== void 0 ? e.active : e.exact ? m : s })),
                  ),
                ],
                16,
                se,
              ),
            ],
          ),
          _: 3,
        },
        16,
      ))
    : (b(),
      p(
        J(e.as),
        k({ key: 0, type: e.type, disabled: e.disabled }, e.$attrs, {
          class: e.active ? e.activeClass : e.inactiveClass,
        }),
        { default: B(() => [h(e.$slots, "default", A(N({ isActive: e.active })))]), _: 3 },
        16,
        ["type", "disabled", "class"],
      ));
}
const R = F(le, [["render", oe]]);
function ue({ ui: e, props: l }) {
  const i = W();
  if ((D("ButtonGroupContextConsumer", !0), $("ButtonGroupContextConsumer", !1)))
    return { size: u(() => l.size), rounded: u(() => e.value.rounded) };
  let r = i.parent,
    a;
  for (; r && !a; ) {
    if (r.type.name === "ButtonGroup") {
      a = $(`group-${r.uid}`);
      break;
    }
    r = r.parent;
  }
  const n = u(() => (a == null ? void 0 : a.value.children.indexOf(i)));
  return (
    Q(() => {
      a == null || a.value.register(i);
    }),
    E(() => {
      a == null || a.value.unregister(i);
    }),
    {
      size: u(() =>
        a != null && a.value ? (a == null ? void 0 : a.value.size) ?? e.value.default.size : l.size,
      ),
      rounded: u(() =>
        !a || n.value === -1
          ? e.value.rounded
          : a.value.children.length === 1
            ? a.value.ui.rounded
            : n.value === 0
              ? a.value.rounded.start
              : n.value === a.value.children.length - 1
                ? a.value.rounded.end
                : "rounded-none",
      ),
    }
  );
}
const de = {
    base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",
    font: "font-medium",
    rounded: "rounded-md",
    truncate: "text-left break-all line-clamp-1",
    block: "w-full flex justify-center items-center",
    inline: "inline-flex items-center",
    size: {
      "2xs": "text-xs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-base",
    },
    gap: {
      "2xs": "gap-x-1",
      xs: "gap-x-1.5",
      sm: "gap-x-1.5",
      md: "gap-x-2",
      lg: "gap-x-2.5",
      xl: "gap-x-2.5",
    },
    padding: {
      "2xs": "px-2 py-1",
      xs: "px-2.5 py-1.5",
      sm: "px-2.5 py-1.5",
      md: "px-3 py-2",
      lg: "px-3.5 py-2.5",
      xl: "px-3.5 py-2.5",
    },
    square: { "2xs": "p-1", xs: "p-1.5", sm: "p-1.5", md: "p-2", lg: "p-2.5", xl: "p-2.5" },
    color: {
      white: {
        solid:
          "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        ghost:
          "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      },
      gray: {
        solid:
          "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        ghost:
          "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        link: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      },
      black: {
        solid:
          "shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        link: "text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      },
    },
    variant: {
      solid:
        "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
      outline:
        "ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
      soft: "text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
      ghost:
        "text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
      link: "text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    },
    icon: {
      base: "flex-shrink-0",
      loading: "animate-spin",
      size: {
        "2xs": "h-4 w-4",
        xs: "h-4 w-4",
        sm: "h-5 w-5",
        md: "h-5 w-5",
        lg: "h-5 w-5",
        xl: "h-6 w-6",
      },
    },
    default: {
      size: "sm",
      variant: "solid",
      color: "primary",
      loadingIcon: "i-heroicons-arrow-path-20-solid",
    },
  },
  g = X(I.ui.strategy, I.ui.button, de),
  ce = G({
    components: { UIcon: U, ULink: R },
    inheritAttrs: !1,
    props: {
      ...z,
      type: { type: String, default: "button" },
      block: { type: Boolean, default: !1 },
      label: { type: String, default: null },
      loading: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      padded: { type: Boolean, default: !0 },
      size: {
        type: String,
        default: () => g.default.size,
        validator(e) {
          return Object.keys(g.size).includes(e);
        },
      },
      color: {
        type: String,
        default: () => g.default.color,
        validator(e) {
          return [...I.ui.colors, ...Object.keys(g.color)].includes(e);
        },
      },
      variant: {
        type: String,
        default: () => g.default.variant,
        validator(e) {
          return [
            ...Object.keys(g.variant),
            ...Object.values(g.color).flatMap((l) => Object.keys(l)),
          ].includes(e);
        },
      },
      icon: { type: String, default: null },
      loadingIcon: { type: String, default: () => g.default.loadingIcon },
      leadingIcon: { type: String, default: null },
      trailingIcon: { type: String, default: null },
      trailing: { type: Boolean, default: !1 },
      leading: { type: Boolean, default: !1 },
      square: { type: Boolean, default: !1 },
      truncate: { type: Boolean, default: !1 },
      class: { type: [String, Object, Array], default: () => "" },
      ui: { type: Object, default: () => ({}) },
    },
    setup(e, { slots: l }) {
      const { ui: i, attrs: t } = re("button", Y(e, "ui"), g),
        { size: r, rounded: a } = ue({ ui: i, props: e }),
        n = u(
          () =>
            (e.icon && e.leading) ||
            (e.icon && !e.trailing) ||
            (e.loading && !e.trailing) ||
            e.leadingIcon,
        ),
        d = u(() => (e.icon && e.trailing) || (e.loading && e.trailing) || e.trailingIcon),
        c = u(() => e.square || (!l.default && !e.label)),
        o = u(() => {
          var O, q;
          const v =
            ((q = (O = i.value.color) == null ? void 0 : O[e.color]) == null
              ? void 0
              : q[e.variant]) || i.value.variant[e.variant];
          return Z(
            x(
              i.value.base,
              i.value.font,
              a.value,
              i.value.size[r.value],
              i.value.gap[r.value],
              e.padded && i.value[c.value ? "square" : "padding"][r.value],
              v == null ? void 0 : v.replaceAll("{color}", e.color),
              e.block ? i.value.block : i.value.inline,
            ),
            e.class,
          );
        }),
        f = u(() => (e.loading ? e.loadingIcon : e.leadingIcon || e.icon)),
        y = u(() => (e.loading && !n.value ? e.loadingIcon : e.trailingIcon || e.icon)),
        s = u(() =>
          x(i.value.icon.base, i.value.icon.size[r.value], e.loading && i.value.icon.loading),
        ),
        m = u(() =>
          x(
            i.value.icon.base,
            i.value.icon.size[r.value],
            e.loading && !n.value && i.value.icon.loading,
          ),
        ),
        w = u(() => ne(e));
      return {
        ui: i,
        attrs: t,
        isLeading: n,
        isTrailing: d,
        isSquare: c,
        buttonClass: o,
        leadingIconName: f,
        trailingIconName: y,
        leadingIconClass: s,
        trailingIconClass: m,
        linkProps: w,
      };
    },
  });
function fe(e, l, i, t, r, a) {
  const n = U,
    d = R;
  return (
    b(),
    p(
      d,
      k(
        { type: e.type, disabled: e.disabled || e.loading, class: e.buttonClass },
        { ...e.linkProps, ...e.attrs },
      ),
      {
        default: B(() => [
          h(e.$slots, "leading", { disabled: e.disabled, loading: e.loading }, () => [
            e.isLeading && e.leadingIconName
              ? (b(),
                p(
                  n,
                  {
                    key: 0,
                    name: e.leadingIconName,
                    class: S(e.leadingIconClass),
                    "aria-hidden": "true",
                  },
                  null,
                  8,
                  ["name", "class"],
                ))
              : C("", !0),
          ]),
          h(e.$slots, "default", {}, () => [
            e.label
              ? (b(),
                _("span", { key: 0, class: S([e.truncate ? e.ui.truncate : ""]) }, ee(e.label), 3))
              : C("", !0),
          ]),
          h(e.$slots, "trailing", { disabled: e.disabled, loading: e.loading }, () => [
            e.isTrailing && e.trailingIconName
              ? (b(),
                p(
                  n,
                  {
                    key: 0,
                    name: e.trailingIconName,
                    class: S(e.trailingIconClass),
                    "aria-hidden": "true",
                  },
                  null,
                  8,
                  ["name", "class"],
                ))
              : C("", !0),
          ]),
        ]),
        _: 3,
      },
      16,
      ["type", "disabled", "class"],
    )
  );
}
const pe = F(ce, [["render", fe]]);
export { pe as _, ue as u };
