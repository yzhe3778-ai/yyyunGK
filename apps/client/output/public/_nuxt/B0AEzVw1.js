import { W as C, r as i, U as u } from "./BJowY05t.js";

async function y(t) {
  return await u()(`/course-history/${t}`, { method: "get" });
}
async function d() {
  return await u()("/course-pack", { method: "get" });
}
async function k(t) {
  return await u()(`/course-pack/${t}`, { method: "get" });
}
const l = C("course-pack", () => {
  const t = i([]),
    o = i();
  async function p() {
    const e = await d();
    t.value = e;
  }
  async function f(e) {
    var s;
    if (e === ((s = o.value) == null ? void 0 : s.id)) return;
    const r = await k(e);
    o.value = r;
  }
  async function h(e) {
    var a;
    const r = await y(e),
      s = (c) => r.find((n) => n.courseId === c);
    (a = o.value) == null ||
      a.courses.forEach((c) => {
        const n = s(c.id);
        n && (c.completionCount = n.completionCount);
      });
  }
  return {
    setupCoursePack: f,
    setupCoursePacks: p,
    updateCoursesCompleteCount: h,
    currentCoursePack: o,
    coursePacks: t,
  };
});
export { l as u };
