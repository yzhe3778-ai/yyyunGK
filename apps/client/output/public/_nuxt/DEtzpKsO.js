import { u as C } from "./BC2xWXSP.js";
import {
  m as _,
  f as A,
  Q as b,
  r as d,
  C as E,
  O as h,
  w as I,
  M as m,
  a6 as N,
  R as O,
  L as p,
  o as P,
  N as T,
  _ as v,
  P as y,
} from "./BJowY05t.js";

const w = { base: "mx-auto", padding: "px-4 sm:px-6 lg:px-8", constrained: "max-w-7xl" },
  W = p(m.ui.strategy, m.ui.container, w),
  U = A({
    inheritAttrs: !1,
    props: {
      as: { type: String, default: "div" },
      class: { type: [String, Object, Array], default: () => "" },
      ui: { type: Object, default: () => ({}) },
    },
    setup(e) {
      const { ui: t, attrs: o } = C("container", T(e, "ui"), W),
        n = E(() => h(y(t.value.base, t.value.padding, t.value.constrained), e.class));
      return { ui: t, attrs: o, containerClass: n };
    },
  });
function M(e, t, o, n, r, i) {
  return (
    P(),
    _(
      N(e.as),
      b({ class: e.containerClass }, e.attrs),
      { default: I(() => [O(e.$slots, "default")]), _: 3 },
      16,
      ["class"],
    )
  );
}
const V = v(U, [["render", M]]),
  x = { CHINESE_TO_ENGLISH: "中译英", DICTATION: "听写" },
  f = "gamePlayMode",
  c = d("CHINESE_TO_ENGLISH");
function R() {
  const e = H() || c.value;
  c.value = e;
}
function H() {
  return localStorage.getItem(f);
}
function G(e) {
  localStorage.setItem(f, e);
}
R();
function X() {
  function e() {
    return Object.entries(x).map(([r, i]) => ({ label: i, value: r }));
  }
  function t(r) {
    (c.value = r), G(r);
  }
  function o() {
    return c.value === "DICTATION";
  }
  function n() {
    return c.value === "CHINESE_TO_ENGLISH";
  }
  return {
    toggleGamePlayMode: t,
    getGamePlayModeOptions: e,
    currentGamePlayMode: c,
    isDictationMode: o,
    isChineseToEnglishMode: n,
  };
}
const L = { American: "美音", British: "英音" },
  S = "pronunciationType",
  l = d("American");
function q() {
  e();
  function e() {
    const a = o() || l.value;
    t(a);
  }
  function t(a) {
    (l.value = a), localStorage.setItem(S, a);
  }
  function o() {
    return localStorage.getItem(S);
  }
  function n() {
    return l.value === "American" ? 2 : 1;
  }
  function r() {
    return Object.entries(L).map(([a, u]) => ({ label: u, value: a }));
  }
  function i(a) {
    return `https://dict.youdao.com/dictvoice?type=${n()}&audio=${a}`;
  }
  function g(a) {
    a !== l.value && t(a);
  }
  return {
    pronunciation: l,
    getPronunciationOptions: r,
    getPronunciationUrl: i,
    togglePronunciation: g,
  };
}
function s(e, t = !0) {
  const o = d(t);
  function n() {
    const u = localStorage.getItem(e);
    u !== null && (o.value = u === "true"), r(o.value);
  }
  function r(u) {
    (o.value = u), localStorage.setItem(e, String(u));
  }
  function i() {
    localStorage.removeItem(e);
  }
  function g() {
    r(!o.value);
  }
  function a() {
    return o.value;
  }
  return n(), { value: o, remove: i, toggle: g, isTrue: a };
}
const D = "autoNextQuestion";
function z() {
  const { value: e, isTrue: t, toggle: o, remove: n } = s(D, !1);
  return {
    autoNextQuestion: e,
    isAutoNextQuestion: t,
    toggleAutoQuestion: o,
    removeAutoQuestion: n,
  };
}
const Q = "autoPronunciation",
  K = "keyboardSoundEnabled",
  $ = "autoPlayEnglish";
function F() {
  const { value: e, isTrue: t, toggle: o, remove: n } = s(Q, !0);
  return { autoPlaySound: e, isAutoPlaySound: t, toggleAutoPlaySound: o, removeAutoPlaySound: n };
}
function Z() {
  const { value: e, isTrue: t, toggle: o, remove: n } = s(K, !0);
  return {
    keyboardSound: e,
    isKeyboardSoundEnabled: t,
    toggleKeyboardSound: o,
    removeKeyboardSound: n,
  };
}
function ee() {
  const { value: e, isTrue: t, toggle: o, remove: n } = s($, !0);
  return {
    autoPlayEnglish: e,
    isAutoPlayEnglish: t,
    toggleAutoPlayEnglish: o,
    removeAutoPlayEnglish: n,
  };
}
const B = "spaceSubmitAnswer";
function oe() {
  const { value: e, toggle: t, isTrue: o, remove: n } = s(B, !1);
  return {
    useSpace: e,
    isUseSpaceSubmitAnswer: o,
    toggleUseSpaceSubmitAnswer: t,
    removeUseSpaceSubmitAnswer: n,
  };
}
const j = "showErrorTip";
function te() {
  const { value: e, toggle: t, isTrue: o, remove: n } = s(j, !0);
  return { showErrorTip: e, toggleShowErrorTip: t, isShowErrorTip: o, removeShowErrorTip: n };
}
const Y = "showWordsWidth";
function ne() {
  const { value: e, toggle: t, isTrue: o, remove: n } = s(Y, !0);
  return {
    showWordsWidth: e,
    toggleAutoWordsWidth: t,
    isShowWordsWidth: o,
    removeAutoWordsWidth: n,
  };
}
export { V as _, X as a, te as b, Z as c, z as d, oe as e, ne as f, F as g, ee as h, q as u };
