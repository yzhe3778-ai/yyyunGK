import { C as N, r as y } from "./BJowY05t.js";

var w = ((e) => (
  (e.SOUND = "sound"),
  (e.ANSWER = "answer"),
  (e.SKIP = "skip"),
  (e.PREVIOUS = "previous"),
  (e.MASTERED = "mastered"),
  (e.PAUSE = "pause"),
  e
))(w || {});
const v = "shortcutKeys",
  M = {
    sound: "Ctrl+'",
    answer: "Ctrl+;",
    skip: "Ctrl+.",
    previous: "Ctrl+,",
    mastered: "Ctrl+m",
    pause: "Ctrl+p",
  },
  u = {
    ESC: "Esc",
    ALT: "Alt",
    CTRL: "Ctrl",
    META: "Meta",
    SHIFT: "Shift",
    ENTER: "Enter",
    COMMAND: "Command",
    CONTROL: "Control",
  },
  I = new Map([
    [u.ALT, !0],
    [u.CTRL, !0],
    [u.CONTROL, !0],
    [u.SHIFT, !0],
    [u.META, !0],
    [u.COMMAND, !0],
  ]);
function g(e) {
  return { [u.CONTROL]: u.CTRL, [u.META]: u.COMMAND }[e] || e;
}
function O(e) {
  return e.split("+").map((t) => t.trim().charAt(0).toUpperCase() + t.slice(1).toLowerCase());
}
const f = y(!1),
  p = y(""),
  l = y(""),
  c = y({ ...M }),
  K = y(!1),
  T = N(() => l.value.replace(/\+/g, "+"));
A();
function A() {
  const e = localStorage.getItem(v);
  e
    ? (c.value = { ...c.value, ...JSON.parse(e) })
    : localStorage.setItem(v, JSON.stringify(c.value));
}
function R() {
  function e(r) {
    (f.value = !0), (l.value = ""), (p.value = r);
  }
  function t() {
    (f.value = !1), (K.value = !1);
  }
  function n(r) {
    return r.altKey
      ? u.ALT
      : r.shiftKey
        ? u.SHIFT
        : r.ctrlKey
          ? u.CTRL
          : r.metaKey
            ? u.COMMAND
            : "";
  }
  function a() {
    const r = l.value.trim();
    r && ((c.value[p.value] = r), localStorage.setItem(v, JSON.stringify(c.value)));
  }
  function m(r) {
    return r === u.ENTER;
  }
  function s(r) {
    const i = Object.values(c.value),
      h = c.value[p.value];
    return i.some((C) => C === r && C !== h);
  }
  function S(r) {
    if (!f.value) return;
    if ((r.preventDefault(), r.key === "Escape")) {
      t();
      return;
    }
    const i = n(r);
    if (!i && m(r.key)) {
      s(l.value) ? (K.value = !0) : (a(), t());
      return;
    }
    const h = g(r.key);
    I.has(r.key) || !i ? (l.value = h) : (l.value = `${i}+${h}`);
  }
  function d() {
    (f.value = !1),
      (p.value = ""),
      (l.value = ""),
      (c.value = { ...M }),
      (K.value = !1),
      localStorage.removeItem(v);
  }
  return {
    showModal: f,
    shortcutKeys: c,
    shortcutKeyStr: l,
    shortcutKeyTip: T,
    hasSameShortcutKey: K,
    setShortcutKeys: A,
    handleKeydown: S,
    handleEdit: e,
    handleCloseDialog: t,
    reset: d,
  };
}
const o = [];
window.addEventListener("keydown", (e) => {
  k(e).forEach((n) => {
    n.command(e);
  });
});
function E(e) {
  const t = e.toLowerCase().split("+");
  return { key: t[t.length - 1], ctrlKey: t.includes("ctrl"), metaKey: t.includes("command") };
}
function k(e) {
  return o.filter((t) => {
    const n =
        t.ctrlKey === e.ctrlKey && t.metaKey === e.metaKey && t.key === g(e.key).toLowerCase(),
      a = t.key === "*";
    return n || a;
  });
}
function F(e, t = "+") {
  return e.split(t).map((n) => (n.length === 1 ? n.toUpperCase() : n));
}
function L(e, t) {
  return { ...E(e), command: t };
}
function J(e, t) {
  const n = L(e, t);
  return o.push(n), n;
}
function U(e, t) {
  function n() {
    return typeof e == "object" ? e : t ? L(e, t) : E(e);
  }
  let a = n();
  if (typeof e == "string" && !t) {
    for (let s = o.length - 1; s >= 0; s--)
      o[s].key === a.key &&
        o[s].ctrlKey === a.ctrlKey &&
        o[s].metaKey === a.metaKey &&
        o.splice(s, 1);
    return;
  }
  const m = o.findIndex(
    ({ key: s, command: S, ctrlKey: d, metaKey: r }) =>
      s === a.key && d === a.ctrlKey && r === a.metaKey && S === a.command,
  );
  m !== -1 && o.splice(m, 1);
}
export { w as S, F as a, U as c, O as p, J as r, R as u };
