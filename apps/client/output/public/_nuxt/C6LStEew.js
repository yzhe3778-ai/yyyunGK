import { U as a, W as d, C as h, r as i } from "./BJowY05t.js";

async function f(e) {
  return await a()("/mastered-elements", { method: "post", body: { content: e } });
}
async function p() {
  return await a()("/mastered-elements", { method: "get" });
}
async function r(e) {
  return await a()(`/mastered-elements/${e}`, { method: "delete" });
}
const E = d("masteredElements", () => {
  const e = i([]),
    s = h(() => e.value.length);
  async function o(t) {
    const n = await f(t),
      m = [...e.value];
    return (
      e.value.unshift(n),
      () => {
        (e.value = m), r(n.id).catch(console.error);
      }
    );
  }
  async function c(t) {
    await r(t), (e.value = e.value.filter(({ id: n }) => n !== t));
  }
  function u(t) {
    return !!e.value.find((n) => n.content.english.toLowerCase() === t.toLowerCase());
  }
  async function l() {
    const t = await p();
    e.value = [...t];
  }
  return {
    masteredElements: e,
    totalMasteredElementsCount: s,
    addElement: o,
    removeElement: c,
    checkMastered: u,
    setup: l,
  };
});
export { E as u };
