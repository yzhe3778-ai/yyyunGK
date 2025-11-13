import { _ as L } from "./_b8Uo-6J.js";
import { u as X } from "./BC2xWXSP.js";
import {
  D as _,
  q as _e,
  M as $,
  Q as A,
  r as B,
  w as b,
  X as be,
  a6 as ce,
  c as d,
  a5 as de,
  N as E,
  l as f,
  G as F,
  ap as fe,
  V as G,
  $ as ge,
  C as h,
  ao as he,
  k as ie,
  R as J,
  H as K,
  n as M,
  an as me,
  b as p,
  am as pe,
  O as q,
  ah as Q,
  _ as R,
  o as r,
  m as S,
  P as T,
  a as t,
  E as ue,
  g as V,
  aq as ve,
  t as w,
  v as W,
  ar as we,
  i as xe,
  L as Y,
  f as y,
  al as z,
} from "./BJowY05t.js";
import { _ as le } from "./C8e6MUgy.js";
import { _ as ke, a as ye } from "./CK-F4Qy6.js";
import { a as Ce } from "./CnNyuEuj.js";
import { _ as $e } from "./DdgKjaBG.js";
import { h as De, G as Me, l as Ne, Y as Se, u as Te, S as Ue } from "./Dgj5Rc6o.js";
import { _ as ze } from "./G9cKt-R0.js";

import "./Be3xCWOP.js";

const Ae = {
    wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
    background: "bg-gray-100 dark:bg-gray-800",
    rounded: "rounded-full",
    text: "font-medium leading-none text-gray-900 dark:text-white truncate",
    placeholder: "font-medium leading-none text-gray-500 dark:text-gray-400 truncate",
    size: {
      "3xs": "h-4 w-4 text-[8px]",
      "2xs": "h-5 w-5 text-[10px]",
      xs: "h-6 w-6 text-xs",
      sm: "h-8 w-8 text-sm",
      md: "h-10 w-10 text-base",
      lg: "h-12 w-12 text-lg",
      xl: "h-14 w-14 text-xl",
      "2xl": "h-16 w-16 text-2xl",
      "3xl": "h-20 w-20 text-3xl",
    },
    chip: {
      base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",
      background: "bg-{color}-500 dark:bg-{color}-400",
      position: {
        "top-right": "top-0 right-0",
        "bottom-right": "bottom-0 right-0",
        "top-left": "top-0 left-0",
        "bottom-left": "bottom-0 left-0",
      },
      size: {
        "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
        "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
        xs: "h-1.5 min-w-[0.375rem] text-[6px] p-px",
        sm: "h-2 min-w-[0.5rem] text-[7px] p-0.5",
        md: "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
        lg: "h-3 min-w-[0.75rem] text-[10px] p-0.5",
        xl: "h-3.5 min-w-[0.875rem] text-[11px] p-1",
        "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
        "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1",
      },
    },
    icon: {
      base: "text-gray-500 dark:text-gray-400 flex-shrink-0",
      size: {
        "3xs": "h-2 w-2",
        "2xs": "h-2.5 w-2.5",
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
        xl: "h-7 w-7",
        "2xl": "h-8 w-8",
        "3xl": "h-10 w-10",
      },
    },
    default: { size: "sm", icon: null, chipColor: null, chipPosition: "top-right" },
  },
  Oe = {
    wrapper: "fixed inset-0 flex z-50",
    overlay: {
      base: "fixed inset-0 transition-opacity",
      background: "bg-gray-200/75 dark:bg-gray-800/75",
      transition: {
        enter: "ease-in-out duration-500",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in-out duration-500",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
      },
    },
    base: "relative flex-1 flex flex-col w-full focus:outline-none",
    background: "bg-white dark:bg-gray-900",
    ring: "",
    rounded: "",
    padding: "",
    shadow: "shadow-xl",
    width: "w-screen max-w-md",
    height: "h-screen max-h-96",
    translate: {
      base: "translate-x-0",
      left: "-translate-x-full rtl:translate-x-full",
      right: "translate-x-full rtl:-translate-x-full",
      top: "-translate-y-full",
      bottom: "translate-y-full",
    },
    transition: {
      enter: "transform transition ease-in-out duration-300",
      leave: "transform transition ease-in-out duration-200",
    },
  },
  x = Y($.ui.strategy, $.ui.avatar, Ae),
  je = y({
    components: { UIcon: L },
    inheritAttrs: !1,
    props: {
      as: { type: [String, Object], default: "img" },
      src: { type: [String, Boolean], default: null },
      alt: { type: String, default: null },
      text: { type: String, default: null },
      icon: { type: String, default: () => x.default.icon },
      size: {
        type: String,
        default: () => x.default.size,
        validator(e) {
          return Object.keys(x.size).includes(e);
        },
      },
      chipColor: {
        type: String,
        default: () => x.default.chipColor,
        validator(e) {
          return ["gray", ...$.ui.colors].includes(e);
        },
      },
      chipPosition: {
        type: String,
        default: () => x.default.chipPosition,
        validator(e) {
          return Object.keys(x.chip.position).includes(e);
        },
      },
      chipText: { type: [String, Number], default: null },
      imgClass: { type: String, default: "" },
      class: { type: [String, Object, Array], default: () => "" },
      ui: { type: Object, default: () => ({}) },
    },
    setup(e) {
      const { ui: n, attrs: a } = X("avatar", E(e, "ui"), x),
        s = h(() => (typeof e.src == "boolean" ? null : e.src)),
        c = h(() =>
          (e.alt || "")
            .split(" ")
            .map((k) => k.charAt(0))
            .join("")
            .substring(0, 2),
        ),
        m = h(() =>
          q(
            T(
              n.value.wrapper,
              (o.value || !s.value) && n.value.background,
              n.value.rounded,
              n.value.size[e.size],
            ),
            e.class,
          ),
        ),
        i = h(() => q(T(n.value.rounded, n.value.size[e.size]), e.imgClass)),
        l = h(() => T(n.value.icon.base, n.value.icon.size[e.size])),
        g = h(() =>
          T(
            n.value.chip.base,
            n.value.chip.size[e.size],
            n.value.chip.position[e.chipPosition],
            n.value.chip.background.replaceAll("{color}", e.chipColor),
          ),
        ),
        o = B(!1);
      ie(
        () => e.src,
        () => {
          o.value && (o.value = !1);
        },
      );
      function u() {
        o.value = !0;
      }
      return {
        ui: n,
        attrs: a,
        wrapperClass: m,
        imgClass: i,
        iconClass: l,
        chipClass: g,
        url: s,
        placeholder: c,
        error: o,
        onError: u,
      };
    },
  });
function Ee(e, n, a, s, c, m) {
  const i = L;
  return (
    r(),
    d(
      "span",
      { class: _(e.wrapperClass) },
      [
        e.url && !e.error
          ? (r(),
            S(
              ce(e.as),
              A({ key: 0, class: e.imgClass, alt: e.alt, src: e.url }, e.attrs, {
                onError: e.onError,
              }),
              null,
              16,
              ["class", "alt", "src", "onError"],
            ))
          : e.text
            ? (r(), d("span", { key: 1, class: _(e.ui.text) }, w(e.text), 3))
            : e.icon
              ? (r(),
                S(i, { key: 2, name: e.icon, class: _(e.iconClass) }, null, 8, ["name", "class"]))
              : e.placeholder
                ? (r(), d("span", { key: 3, class: _(e.ui.placeholder) }, w(e.placeholder), 3))
                : M("", !0),
        e.chipColor
          ? (r(), d("span", { key: 4, class: _(e.chipClass) }, w(e.chipText), 3))
          : M("", !0),
        J(e.$slots, "default"),
      ],
      2,
    )
  );
}
const Z = R(je, [["render", Ee]]),
  C = B(!1);
function ee() {
  return {
    isUserMenuOpen: C,
    openUserMenu: () => {
      C.value = !0;
    },
    closeUserMenu: () => {
      C.value = !1;
    },
    toggleUserMenu: () => {
      C.value = !C.value;
    },
  };
}
const Le = { class: "mx-auto max-w-screen-xl" },
  Re = { class: "flex h-16 items-center justify-between" },
  Be = { class: "flex flex-1 items-center justify-between" },
  Ve = t(
    "div",
    { class: "logo flex items-center" },
    [
      t("img", {
        width: "48",
        height: "48",
        class: "mr-6 hidden overflow-hidden rounded-md md:block",
        src: ye,
        alt: "earth-worm-logo",
      }),
      t(
        "h1",
        { class: "text-wrap text-2xl font-extrabold leading-normal dark:text-white" },
        " Earthworm ",
      ),
    ],
    -1,
  ),
  Fe = { key: 0, "aria-label": "Global", class: "hidden md:block" },
  He = { class: "flex items-center text-base" },
  Pe = ["href", "target"],
  Ie = { class: "flex items-center" },
  qe = { key: 0, class: "logged-in flex items-center" },
  Ge = 8,
  We = y({
    __name: "Navbar",
    setup(e) {
      const n = Q(),
        { openUserMenu: a } = ee(),
        s = ue(),
        c = V(),
        { y: m } = Ce(),
        i = [
          { name: "文档", href: n.public.helpDocsURL, target: "_blank" },
          { name: "功能", href: "#features" },
          { name: "问题", href: "#faq" },
          { name: "联系我们", href: "#contact" },
        ],
        l = h(() => ["index", "User-Setting", "mastered-elements"].includes(s.name)),
        g = h(() => m.value >= Ge);
      return (o, u) => {
        var U;
        const k = le,
          O = Z;
        return (
          r(),
          d(
            "header",
            {
              class: _([
                "w-full px-5 font-customFont transition-all duration-300 ease-linear",
                {
                  "sticky top-0 z-10": l.value,
                  "glass bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-md":
                    l.value && g.value,
                },
              ]),
            },
            [
              t("div", Le, [
                t("div", Re, [
                  t("div", Be, [
                    p(k, { to: "/" }, { default: b(() => [Ve]), _: 1 }),
                    f(s).path === "/" && !f(G)()
                      ? (r(),
                        d("nav", Fe, [
                          t("ul", He, [
                            (r(),
                            d(
                              F,
                              null,
                              K(i, (v, j) =>
                                t("li", { class: "px-4", key: j }, [
                                  t(
                                    "a",
                                    {
                                      class:
                                        "text-nowrap hover:text-purple-600 dark:text-white dark:hover:text-purple-400",
                                      href: v.href,
                                      target: v.target ?? "_self",
                                    },
                                    w(v.name),
                                    9,
                                    Pe,
                                  ),
                                ]),
                              ),
                              64,
                            )),
                          ]),
                        ]))
                      : M("", !0),
                  ]),
                  t("div", Ie, [
                    f(G)()
                      ? (r(),
                        d("div", qe, [
                          t(
                            "div",
                            {
                              class:
                                "h-8 w-8 cursor-pointer overflow-hidden rounded-full bg-gray-300 transition-all hover:scale-125 hover:opacity-90 dark:bg-gray-700",
                              onClick: u[0] || (u[0] = (...v) => f(a) && f(a)(...v)),
                            },
                            [
                              p(
                                O,
                                { src: (U = f(c).user) == null ? void 0 : U.avatar, alt: "Avatar" },
                                null,
                                8,
                                ["src"],
                              ),
                            ],
                          ),
                        ]))
                      : (r(),
                        d(
                          "button",
                          {
                            key: 1,
                            "aria-label": "Login",
                            class:
                              "btn btn-sm mr-1 border-none bg-purple-500 text-white shadow-md hover:bg-purple-600 focus:outline-none",
                            onClick: u[1] || (u[1] = (v) => f(de)()),
                          },
                          " 登录 ",
                        )),
                  ]),
                ]),
              ]),
            ],
            2,
          )
        );
      };
    },
  }),
  Ye = {},
  Je = { class: "flex h-12 shrink-0 flex-col items-center justify-center text-xs opacity-65" },
  Ke = t(
    "p",
    { class: "text-nowrap" },
    "Copyright © 2023-2024, Earthworm. All rights reserved.",
    -1,
  ),
  Qe = [Ke];
function Xe(e, n) {
  return r(), d("footer", Je, Qe);
}
const Ze = R(Ye, [["render", Xe]]),
  et = Y($.ui.strategy, $.ui.slideover, Oe),
  tt = y({
    components: { HDialog: Se, HDialogPanel: Me, TransitionRoot: Ue, TransitionChild: De },
    inheritAttrs: !1,
    props: {
      modelValue: { type: Boolean, default: !1 },
      appear: { type: Boolean, default: !1 },
      side: {
        type: String,
        default: "right",
        validator: (e) => ["left", "right", "top", "bottom"].includes(e),
      },
      overlay: { type: Boolean, default: !0 },
      transition: { type: Boolean, default: !0 },
      preventClose: { type: Boolean, default: !1 },
      class: { type: [String, Object, Array], default: () => "" },
      ui: { type: Object, default: () => ({}) },
    },
    emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
    setup(e, { emit: n }) {
      const { ui: a, attrs: s } = X("slideover", E(e, "ui"), et, E(e, "class")),
        c = h({
          get() {
            return e.modelValue;
          },
          set(o) {
            n("update:modelValue", o);
          },
        }),
        m = h(() => {
          if (!e.transition) return {};
          let o, u;
          switch (e.side) {
            case "left":
              (o = a.value.translate.left), (u = a.value.translate.left);
              break;
            case "right":
              (o = a.value.translate.right), (u = a.value.translate.right);
              break;
            case "top":
              (o = a.value.translate.top), (u = a.value.translate.top);
              break;
            case "bottom":
              (o = a.value.translate.bottom), (u = a.value.translate.bottom);
              break;
            default:
              (o = a.value.translate.right), (u = a.value.translate.right);
          }
          return {
            ...a.value.transition,
            enterFrom: o,
            enterTo: a.value.translate.base,
            leaveFrom: a.value.translate.base,
            leaveTo: u,
          };
        }),
        i = h(() => {
          switch (e.side) {
            case "left":
              return "horizontal";
            case "right":
              return "horizontal";
            case "top":
              return "vertical";
            case "bottom":
              return "vertical";
            default:
              return "right";
          }
        });
      function l(o) {
        if (e.preventClose) {
          n("close-prevented");
          return;
        }
        (c.value = o), n("close");
      }
      const g = () => {
        n("after-leave");
      };
      return (
        Ne(() => Te("$WAu2uC3fVh")),
        { ui: a, attrs: s, isOpen: c, transitionClass: m, sideType: i, onAfterLeave: g, close: l }
      );
    },
  });
function nt(e, n, a, s, c, m) {
  const i = z("TransitionChild"),
    l = z("HDialogPanel"),
    g = z("HDialog"),
    o = z("TransitionRoot");
  return (
    r(),
    S(
      o,
      { as: "template", appear: e.appear, show: e.isOpen, onAfterLeave: e.onAfterLeave },
      {
        default: b(() => [
          p(
            g,
            A(
              {
                class: [
                  e.ui.wrapper,
                  { "justify-end": e.side === "right" },
                  { "items-end": e.side === "bottom" },
                ],
              },
              e.attrs,
              { onClose: e.close },
            ),
            {
              default: b(() => [
                e.overlay
                  ? (r(),
                    S(
                      i,
                      A({ key: 0, as: "template", appear: e.appear }, e.ui.overlay.transition),
                      {
                        default: b(() => [
                          t(
                            "div",
                            { class: _([e.ui.overlay.base, e.ui.overlay.background]) },
                            null,
                            2,
                          ),
                        ]),
                        _: 1,
                      },
                      16,
                      ["appear"],
                    ))
                  : M("", !0),
                p(
                  i,
                  A({ as: "template", appear: e.appear }, e.transitionClass),
                  {
                    default: b(() => [
                      p(
                        l,
                        {
                          class: _([
                            e.ui.base,
                            e.sideType === "horizontal"
                              ? [e.ui.width, "h-full"]
                              : [e.ui.height, "w-full"],
                            e.ui.background,
                            e.ui.ring,
                            e.ui.padding,
                          ]),
                        },
                        { default: b(() => [J(e.$slots, "default")]), _: 3 },
                        8,
                        ["class"],
                      ),
                    ]),
                    _: 3,
                  },
                  16,
                  ["appear"],
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
const at = R(tt, [["render", nt]]),
  st = { class: "flex h-full flex-col" },
  ot = { class: "flex items-center justify-between p-4" },
  rt = { class: "flex items-center gap-3" },
  lt = { class: "avatar" },
  it = { class: "mask mask-squircle h-14 w-14" },
  ct = { class: "flex gap-2" },
  ut = { class: "text-xl font-bold" },
  dt = { class: "text-sm opacity-75" },
  pt = { class: "flex-grow p-4" },
  mt = ["onClick"],
  ht = { class: "font-medium" },
  ft = t("div", { class: "p-4 text-center text-xs opacity-50" }, "版本 v1.0.0", -1),
  gt = y({
    __name: "UserMenu",
    props: { open: {}, openModifiers: {} },
    emits: pe(["logout"], ["update:open"]),
    setup(e, { emit: n }) {
      const { isUserMenuOpen: a, closeUserMenu: s } = ee(),
        { darkMode: c, toggleDarkMode: m } = me(),
        i = Q();
      he(e, "open");
      const l = V(),
        g = h(() => c.value === fe.DARK),
        o = ge(),
        u = h(() => [
          { title: "设置", name: "setting", eventName: v, icon: "i-ph-gear" },
          { title: "掌握列表", name: "setting", eventName: U, icon: "i-ph-book" },
          { title: "编辑器", name: "setting", eventName: te, icon: "i-ph-planet-duotone" },
          {
            title: "帮助文档",
            name: "helpDocs",
            eventName: k,
            icon: "i-ph-book-open-text-duotone",
          },
          { title: "建议反馈", name: "feedback", eventName: O, icon: "i-ph-hands-praying-duotone" },
          {
            title: "主题切换",
            name: "changeTheme",
            eventName: m,
            icon: g.value ? "i-ph-moon" : "i-ph-sun",
          },
          { title: "登出", name: "logout", eventName: j, icon: "i-ph-sign-out" },
        ]);
      function k() {
        s(), window.open(i.public.helpDocsURL, "_blank");
      }
      function O() {
        s(), window.open("https://txc.qq.com/products/652508", "_blank");
      }
      function U() {
        s(), W("/mastered-elements");
      }
      function v() {
        s(), W("/user/setting");
      }
      function j() {
        s(),
          o.open(ze, {
            title: "退出登录",
            content: "是否确认退出登录？",
            showCancel: !0,
            showConfirm: !0,
            async onConfirm() {
              ve();
            },
          });
      }
      function te() {
        s(), window.open("https://earthworm-editor.cuixueshe.com", "_blank");
      }
      return (Ct, H) => {
        const ne = Z,
          ae = ke,
          se = $e,
          oe = L,
          re = at;
        return (
          r(),
          S(
            re,
            {
              modelValue: f(a),
              "onUpdate:modelValue": H[0] || (H[0] = (D) => (_e(a) ? (a.value = D) : null)),
              ui: { width: "w-screen max-w-80" },
            },
            {
              default: b(() => {
                var D, P, I;
                return [
                  t("div", st, [
                    t("div", ot, [
                      t("div", rt, [
                        t("div", lt, [
                          t("div", it, [
                            p(
                              ne,
                              {
                                size: "xl",
                                src: (D = f(l).user) == null ? void 0 : D.avatar,
                                alt: "Avatar",
                              },
                              null,
                              8,
                              ["src"],
                            ),
                          ]),
                        ]),
                        t("div", null, [
                          t("div", ct, [
                            t("div", ut, w((P = f(l).user) == null ? void 0 : P.username), 1),
                            p(ae),
                          ]),
                          t("div", dt, w((I = f(l).user) == null ? void 0 : I.name), 1),
                        ]),
                      ]),
                      p(
                        se,
                        {
                          color: "gray",
                          variant: "ghost",
                          icon: "i-heroicons-x-mark-20-solid",
                          onClick: f(s),
                          tabindex: "-1",
                          ui: { color: { gray: { ghost: "dark:hover:bg-gray-600" } } },
                        },
                        null,
                        8,
                        ["onClick"],
                      ),
                    ]),
                    t("div", pt, [
                      (r(!0),
                      d(
                        F,
                        null,
                        K(
                          u.value,
                          (N, $t) => (
                            r(),
                            d(
                              "button",
                              {
                                key: N.name,
                                onClick: N.eventName,
                                class:
                                  "mb-2 flex w-full items-center rounded-lg p-1 transition-all duration-200 ease-in-out hover:bg-base-200 hover:shadow-md dark:hover:bg-gray-600",
                                tabindex: "-1",
                              },
                              [
                                p(oe, { name: N.icon, class: "mr-3 h-7 w-7" }, null, 8, ["name"]),
                                t("span", ht, w(N.title), 1),
                              ],
                              8,
                              mt,
                            )
                          ),
                        ),
                        128,
                      )),
                    ]),
                    ft,
                  ]),
                ];
              }),
              _: 1,
            },
            8,
            ["modelValue"],
          )
        );
      };
    },
  }),
  vt = { key: 0, class: "w-full rounded-lg bg-purple-600 px-4 py-1 text-white" },
  _t = t(
    "div",
    { class: "font-bold" },
    " 【邀请函】加入 Earthworm 创始会员 与我们一起成就更好的英语学习平台 ",
    -1,
  ),
  xt = y({
    __name: "FoundingMemberNotice",
    setup(e) {
      const n = B(!1),
        a = V();
      xe(() => {
        n.value = i();
      }),
        be(() => {
          n.value = !a.isFounderMembership();
        });
      function s() {
        m(), (n.value = !1);
      }
      function c() {
        window.open(
          "https://earthworm-docs.cuixueshe.com/get-started/founding-member.html",
          "_blank",
        );
      }
      function m() {
        const l = Date.now() + 1728e5;
        localStorage.setItem("noticeDismissed", l.toString());
      }
      function i() {
        if (a.isFounderMembership()) return !1;
        const l = localStorage.getItem("noticeDismissed");
        return l ? Date.now() > parseInt(l) : !0;
      }
      return (l, g) =>
        n.value
          ? (r(),
            d("div", vt, [
              t("div", { class: "flex items-center justify-between" }, [
                _t,
                t("div", { class: "hidden sm:flex sm:space-x-4" }, [
                  t("button", { class: "text-black", onClick: s }, " 不感兴趣 "),
                  t(
                    "button",
                    { class: "rounded-lg bg-white px-4 font-bold text-purple-600", onClick: c },
                    " 查看详情 ",
                  ),
                ]),
              ]),
              t("div", { class: "flex items-center justify-center gap-8 sm:hidden" }, [
                t("button", { class: "text-black", onClick: s }, " 不感兴趣 "),
                t(
                  "button",
                  { class: "rounded-lg bg-white px-4 font-bold text-purple-600", onClick: c },
                  " 查看详情 ",
                ),
              ]),
            ]))
          : M("", !0);
    },
  }),
  bt = {
    class:
      "h-full w-full bg-white text-slate-600 transition-colors dark:bg-theme-dark dark:text-slate-300",
  },
  wt = { class: "m-auto flex h-fit min-h-screen flex-col items-center" },
  yt = { class: "flex w-full flex-1 px-5" },
  kt = { class: "mx-auto flex w-full max-w-screen-xl flex-1" },
  Et = y({
    __name: "default",
    setup(e) {
      return (n, a) => {
        const s = We,
          c = we,
          m = Ze,
          i = gt;
        return (
          r(),
          d(
            F,
            null,
            [
              t("div", bt, [
                t("div", wt, [p(s), p(xt), t("div", yt, [t("div", kt, [p(c)])]), p(m)]),
              ]),
              p(i),
            ],
            64,
          )
        );
      };
    },
  });
export { Et as default };
