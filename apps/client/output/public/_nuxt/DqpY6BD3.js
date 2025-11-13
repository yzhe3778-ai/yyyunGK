import {
  b as $,
  c as a,
  D as at,
  q as ct,
  G as d,
  p as dt,
  l as e,
  H as g,
  e as it,
  d as j,
  o as l,
  j as lt,
  i as nt,
  _ as rt,
  a as t,
  n as U,
  f as V,
  t as v,
  m as w,
  w as y,
} from "./BJowY05t.js";
import { S as c, u as N, a as T } from "./BpgD7k3R.js";
import { _ as M } from "./D_a5X8Y3.js";
import {
  b as et,
  g as F,
  h as J,
  d as q,
  a as st,
  e as tt,
  u as X,
  _ as Y,
  c as z,
  f as Z,
} from "./DEtzpKsO.js";
import { _ as ot } from "./Dgj5Rc6o.js";

import "./BC2xWXSP.js";

const _t = t(
    "h3",
    { class: "mb-4 text-center text-base font-bold" },
    " 请先按下单键/组合键，通过回车键（Enter ⏎）来设置 ",
    -1,
  ),
  ut = { class: "h-8 rounded border border-solid text-center leading-8" },
  ht = { class: "mt-2 flex h-8 justify-center gap-0.5 text-center" },
  gt = { key: 0 },
  pt = V({
    __name: "CustomShortcutDialog",
    setup(i) {
      const {
        showModal: r,
        shortcutKeyStr: p,
        shortcutKeyTip: b,
        hasSameShortcutKey: x,
        handleCloseDialog: k,
        handleKeydown: _,
      } = N();
      return (
        nt(() => {
          document.addEventListener("keydown", _);
        }),
        lt(() => {
          document.removeEventListener("keydown", _);
        }),
        (E, u) => {
          const S = M,
            f = Y,
            C = ot;
          return (
            l(),
            w(
              C,
              {
                modelValue: e(r),
                "onUpdate:modelValue": u[0] || (u[0] = (h) => (ct(r) ? (r.value = h) : null)),
                onClose: e(k),
              },
              {
                default: y(() => [
                  $(f, null, {
                    default: y(() => [
                      _t,
                      t("div", ut, v(e(p)), 1),
                      t("div", ht, [
                        e(b)
                          ? (l(),
                            a("div", gt, [
                              (l(!0),
                              a(
                                d,
                                null,
                                g(
                                  e(T)(e(b)),
                                  (h) => (
                                    l(), w(S, null, { default: y(() => [j(v(h), 1)]), _: 2 }, 1024)
                                  ),
                                ),
                                256,
                              )),
                            ]))
                          : U("", !0),
                      ]),
                      e(x)
                        ? (l(),
                          a(
                            "div",
                            {
                              key: 0,
                              class: at(["mt-4 text-center text-xs", "text-[rgba(136,136,136,1)]"]),
                            },
                            " 已有相同的按键绑定，请重新设置 ",
                          ))
                        : U("", !0),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ["modelValue", "onClose"],
            )
          );
        }
      );
    },
  }),
  n = (i) => (dt("data-v-8308af9e"), (i = i()), it(), i),
  bt = {
    class:
      "mx-auto my-8 w-full max-w-screen-lg space-y-8 rounded-lg bg-base-100 px-6 py-8 shadow-even-lg dark:bg-gray-900 dark:shadow-gray-700 md:px-12",
  },
  xt = n(() => t("h2", { class: "text-xl font-medium" }, "游戏模式", -1)),
  mt = { class: "table text-base" },
  yt = { class: "hover" },
  vt = n(() => t("td", { class: "label-text" }, "模式", -1)),
  kt = { class: "text-right" },
  St = { class: "join" },
  ft = ["value", "aria-label", "checked", "onChange"],
  Ct = n(() => t("h2", { class: "text-xl font-medium" }, "快捷键设置", -1)),
  wt = { class: "table text-base" },
  Et = n(() =>
    t(
      "thead",
      null,
      [
        t("tr", { class: "text-base" }, [
          t("th", { class: "" }, "功能"),
          t("th", { class: "w-1/6 text-center" }, "快捷键"),
          t("th", { class: "w-2/6 pr-6 text-right" }, "操作"),
        ]),
      ],
      -1,
    ),
  ),
  Pt = { class: "hover" },
  Kt = { class: "label-text" },
  At = { class: "text-center" },
  Ut = { class: "flex justify-center gap-0.5 text-center" },
  Mt = { class: "text-right" },
  Tt = ["onClick"],
  Nt = n(() => t("h2", { class: "text-xl font-medium" }, "声音设置", -1)),
  Vt = { class: "table" },
  $t = { class: "hover" },
  jt = n(() => t("td", { class: "label-text" }, "开启键盘打字音效", -1)),
  Dt = { class: "text-right" },
  Wt = ["checked"],
  It = { class: "hover" },
  Bt = n(() => t("td", { class: "label-text" }, "答案页面自动播放声音", -1)),
  Gt = { class: "text-right" },
  Ot = ["checked"],
  Rt = { class: "hover" },
  Lt = n(() => t("td", { class: "label-text" }, "答题时自动播放声音", -1)),
  Qt = { class: "text-right" },
  Ht = ["checked"],
  Yt = { class: "hover" },
  qt = n(() => t("td", { class: "label-text" }, "切换口音", -1)),
  zt = { class: "text-right" },
  Ft = { class: "join" },
  Jt = ["value", "aria-label", "checked", "onChange"],
  Xt = n(() => t("h2", { class: "text-xl font-medium" }, "答题设置", -1)),
  Zt = { class: "table" },
  te = { class: "hover" },
  ee = n(() => t("td", { class: "label-text" }, "显示每个单词长度", -1)),
  se = { class: "text-right" },
  oe = ["checked"],
  ne = { class: "hover" },
  le = n(() => t("td", { class: "label-text" }, "开启空格提交答案", -1)),
  ae = { class: "text-right" },
  ce = ["checked"],
  de = { class: "hover" },
  ie = n(() => t("td", { class: "label-text" }, "答题正确后自动下一题", -1)),
  re = { class: "text-right" },
  _e = ["checked"],
  ue = { class: "hover" },
  he = n(() => t("td", { class: "label-text" }, "自动显示答案（输错三次）", -1)),
  ge = { class: "text-right" },
  pe = ["checked"],
  be = V({
    __name: "Setting",
    setup(i) {
      const { autoNextQuestion: r, toggleAutoQuestion: p } = q(),
        { keyboardSound: b, toggleKeyboardSound: x } = z(),
        { autoPlaySound: k, toggleAutoPlaySound: _ } = F(),
        { autoPlayEnglish: E, toggleAutoPlayEnglish: u } = J(),
        { pronunciation: S, getPronunciationOptions: f, togglePronunciation: C } = X(),
        { showWordsWidth: h, toggleAutoWordsWidth: P } = Z(),
        { useSpace: D, toggleUseSpaceSubmitAnswer: K } = tt(),
        { showErrorTip: W, toggleShowErrorTip: A } = et(),
        { shortcutKeys: I, handleEdit: B } = N(),
        { getGamePlayModeOptions: G, currentGamePlayMode: O, toggleGamePlayMode: R } = st(),
        L = [
          { label: "播放发音", type: c.SOUND },
          { label: "显示隐藏/答案预览/再来一次", type: c.ANSWER },
          { label: "返回上个问题", type: c.PREVIOUS },
          { label: "跳过当前问题", type: c.SKIP },
          { label: "标记内容已经掌握", type: c.MASTERED },
          { label: "暂停游戏/继续游戏", type: c.PAUSE },
        ];
      return (xe, o) => {
        const Q = M,
          H = pt;
        return (
          l(),
          a(
            d,
            null,
            [
              t("div", bt, [
                t("section", null, [
                  xt,
                  t("table", mt, [
                    t("tbody", null, [
                      t("tr", yt, [
                        vt,
                        t("td", kt, [
                          t("div", St, [
                            (l(!0),
                            a(
                              d,
                              null,
                              g(
                                e(G)(),
                                (s) => (
                                  l(),
                                  a(
                                    "input",
                                    {
                                      class: "btn join-item btn-sm",
                                      type: "radio",
                                      name: "gameMode",
                                      value: s.value,
                                      "aria-label": s.label,
                                      checked: e(O) === s.value,
                                      onChange: (m) => e(R)(s.value),
                                    },
                                    null,
                                    40,
                                    ft,
                                  )
                                ),
                              ),
                              256,
                            )),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t("section", null, [
                  Ct,
                  t("table", wt, [
                    Et,
                    t("tbody", null, [
                      (l(),
                      a(
                        d,
                        null,
                        g(L, (s) =>
                          t("tr", Pt, [
                            t("td", Kt, v(s.label), 1),
                            t("td", At, [
                              t("div", Ut, [
                                (l(!0),
                                a(
                                  d,
                                  null,
                                  g(
                                    e(T)(e(I)[s.type]),
                                    (m) => (
                                      l(),
                                      w(Q, null, { default: y(() => [j(v(m), 1)]), _: 2 }, 1024)
                                    ),
                                  ),
                                  256,
                                )),
                              ]),
                            ]),
                            t("td", Mt, [
                              t(
                                "button",
                                {
                                  class: "btn btn-outline btn-secondary btn-sm",
                                  onClick: (m) => e(B)(s.type),
                                },
                                " 编辑 ",
                                8,
                                Tt,
                              ),
                            ]),
                          ]),
                        ),
                        64,
                      )),
                    ]),
                  ]),
                ]),
                t("section", null, [
                  Nt,
                  t("table", Vt, [
                    t("tbody", null, [
                      t("tr", $t, [
                        jt,
                        t("td", Dt, [
                          t(
                            "input",
                            {
                              type: "checkbox",
                              class: "toggle toggle-secondary",
                              checked: e(b),
                              onChange: o[0] || (o[0] = (...s) => e(x) && e(x)(...s)),
                            },
                            null,
                            40,
                            Wt,
                          ),
                        ]),
                      ]),
                      t("tr", It, [
                        Bt,
                        t("td", Gt, [
                          t(
                            "input",
                            {
                              type: "checkbox",
                              class: "toggle toggle-secondary",
                              checked: e(k),
                              onChange: o[1] || (o[1] = (...s) => e(_) && e(_)(...s)),
                            },
                            null,
                            40,
                            Ot,
                          ),
                        ]),
                      ]),
                      t("tr", Rt, [
                        Lt,
                        t("td", Qt, [
                          t(
                            "input",
                            {
                              type: "checkbox",
                              class: "toggle toggle-secondary",
                              checked: e(E),
                              onChange: o[2] || (o[2] = (...s) => e(u) && e(u)(...s)),
                            },
                            null,
                            40,
                            Ht,
                          ),
                        ]),
                      ]),
                      t("tr", Yt, [
                        qt,
                        t("td", zt, [
                          t("div", Ft, [
                            (l(!0),
                            a(
                              d,
                              null,
                              g(
                                e(f)(),
                                (s) => (
                                  l(),
                                  a(
                                    "input",
                                    {
                                      class: "btn join-item btn-sm",
                                      type: "radio",
                                      name: "options",
                                      value: s.value,
                                      "aria-label": s.label,
                                      checked: e(S) === s.value,
                                      onChange: (m) => e(C)(s.value),
                                    },
                                    null,
                                    40,
                                    Jt,
                                  )
                                ),
                              ),
                              256,
                            )),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                t("section", null, [
                  Xt,
                  t("table", Zt, [
                    t("tbody", null, [
                      t("tr", te, [
                        ee,
                        t("td", se, [
                          t(
                            "input",
                            {
                              type: "checkbox",
                              class: "toggle toggle-secondary",
                              checked: e(h),
                              onChange: o[3] || (o[3] = (...s) => e(P) && e(P)(...s)),
                            },
                            null,
                            40,
                            oe,
                          ),
                        ]),
                      ]),
                      t("tr", ne, [
                        le,
                        t("td", ae, [
                          t(
                            "input",
                            {
                              type: "checkbox",
                              class: "toggle toggle-secondary",
                              checked: e(D),
                              onChange: o[4] || (o[4] = (...s) => e(K) && e(K)(...s)),
                            },
                            null,
                            40,
                            ce,
                          ),
                        ]),
                      ]),
                      t("tr", de, [
                        ie,
                        t("td", re, [
                          t(
                            "input",
                            {
                              type: "checkbox",
                              class: "toggle toggle-secondary",
                              checked: e(r),
                              onChange: o[5] || (o[5] = (...s) => e(p) && e(p)(...s)),
                            },
                            null,
                            40,
                            _e,
                          ),
                        ]),
                      ]),
                      t("tr", ue, [
                        he,
                        t("td", ge, [
                          t(
                            "input",
                            {
                              type: "checkbox",
                              class: "toggle toggle-secondary",
                              checked: e(W),
                              onChange: o[6] || (o[6] = (...s) => e(A) && e(A)(...s)),
                            },
                            null,
                            40,
                            pe,
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              $(H),
            ],
            64,
          )
        );
      };
    },
  }),
  Ce = rt(be, [["__scopeId", "data-v-8308af9e"]]);
export { Ce as default };
