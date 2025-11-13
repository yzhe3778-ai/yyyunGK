import { r as i } from "./BJowY05t.js";

const t = "activeCourseMap";
function l() {
  const e = i(a());
  function a() {
    return JSON.parse(localStorage.getItem(t) || "{}");
  }
  function r(o, s) {
    (e.value = a()), (e.value[o] = s), localStorage.setItem(t, JSON.stringify(e.value));
  }
  function u(o) {
    (e.value = a()), delete e.value[o], localStorage.setItem(t, JSON.stringify(e.value));
  }
  function c() {
    localStorage.removeItem(t);
  }
  return {
    activeCourseMap: e,
    resetActiveCourseMap: c,
    updateActiveCourseMap: r,
    removeActiveCourseMap: u,
  };
}
export { l as u };
