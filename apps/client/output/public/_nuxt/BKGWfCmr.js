import { r as f, U as s, g as y } from "./BJowY05t.js";

async function D(t) {
  return await s()("user-course-progress", { body: t, method: "put" });
}
async function w() {
  return await s()("/user-course-progress/recent-course-packs", { method: "get" });
}
async function T(t) {
  return await s()("/user-learning-activities", {
    method: "post",
    body: { ...t, activityType: "daily_total" },
  });
}
async function I() {
  const e = await s()("/user-learning-activities", {
    method: "get",
    params: {
      startDate: new Date().toISOString().split("T")[0],
      endDate: new Date().toISOString().split("T")[0],
      activityType: "daily_total",
    },
  });
  return e.length === 0 ? 0 : e[0].duration;
}
async function $() {
  return await s()("/user-learning-activities", {
    method: "get",
    params: { activityType: "daily_total" },
  });
}
async function M() {
  const e = await s()("/user-learning-activities/total", {
    method: "get",
    params: { activityType: "daily_total" },
  });
  return Number(e);
}
const o = f(0),
  g = f(0),
  u = f(!1);
let c = null;
function L() {
  var d;
  const e = ((d = y().user) == null ? void 0 : d.id) || "";
  function n() {
    const r = new Date().toISOString().split("T")[0];
    return `learningTime_${e}_${r}`;
  }
  function a(r) {
    localStorage.setItem(n(), r.toString());
  }
  function l() {
    const r = localStorage.getItem(n());
    o.value = r ? parseInt(r) : 0;
  }
  function i() {
    localStorage.setItem(n(), o.value.toString()), p();
  }
  function p() {
    const r = o.value - g.value;
    r < 0 || T({ date: new Date().toISOString().split("T")[0], duration: r });
  }
  function m() {
    u.value ||
      (l(),
      o.value === 0 && i(),
      (u.value = !0),
      (g.value = o.value),
      (c = setInterval(() => {
        o.value++, o.value % 30 === 0 && (i(), (g.value = o.value));
      }, 1e3)));
  }
  function h() {
    u.value && (c && (clearInterval(c), (c = null)), (u.value = !1), i());
  }
  return {
    totalSeconds: o,
    isTracking: u,
    startTracking: m,
    stopTracking: h,
    setupLearningTime: a,
  };
}
function k(t) {
  const e = v();
  return e.year === t.year && e.month === t.month && e.day == t.day;
}
function v() {
  const t = new Date(),
    e = t.getFullYear(),
    n = t.getMonth() + 1,
    a = t.getDate();
  return { year: e, month: n, day: a };
}
function _({ timestamp: t }) {
  let e = new Date(t),
    n = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    a = e.getHours(),
    l = e.getMinutes().toString().padStart(2, "0"),
    i = a >= 12 ? "PM" : "AM";
  return (
    (a = a % 12),
    (a = a === 0 ? 12 : a),
    `${a}:${l} ${i} · ${n[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`
  );
}
function b(t) {
  if (t === 0) return "0秒";
  const e = Math.floor(t / 3600),
    n = Math.floor((t % 3600) / 60),
    a = t % 60;
  return (e ? `${e}时` : "") + (n ? `${n}分` : "") + (a ? `${a}秒` : "");
}
export { b as a, w as b, $ as c, M as d, I as e, D as f, v as g, _ as h, k as i, L as u };
