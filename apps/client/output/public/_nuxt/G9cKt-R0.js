import {
  m as a,
  w as c,
  a as e,
  d as f,
  $ as h,
  o as n,
  t as o,
  f as p,
  n as r,
} from "./BJowY05t.js";
import { _ } from "./DdgKjaBG.js";
import { _ as y } from "./Dgj5Rc6o.js";

const w = { class: "flex h-52 flex-col justify-between p-6 text-gray-900 dark:text-white" },
  g = { class: "mb-8 text-2xl font-bold" },
  C = { class: "mb-8 text-base text-gray-700 dark:text-gray-300" },
  k = { class: "flex w-full justify-end space-x-4" },
  V = p({
    __name: "Dialog",
    props: {
      title: { type: String, default: "" },
      content: { type: String, default: "" },
      showCancel: { type: Boolean, default: !1 },
      cancelText: { type: String, default: "取消" },
      showConfirm: { type: Boolean, default: !1 },
      confirmText: { type: String, default: "确认" },
    },
    emits: ["cancel", "confirm"],
    setup(t, { emit: m }) {
      const s = h(),
        l = m;
      async function d() {
        await s.close(), l("cancel");
      }
      async function u() {
        await s.close(), l("confirm");
      }
      return (B, b) => {
        const i = _,
          x = y;
        return (
          n(),
          a(
            x,
            { ui: { width: "w-full sm:max-w-lg" } },
            {
              default: c(() => [
                e("div", w, [
                  e("h2", g, o(t.title), 1),
                  e("p", C, o(t.content), 1),
                  e("div", k, [
                    t.showCancel
                      ? (n(),
                        a(
                          i,
                          { key: 0, color: "gray", class: "px-6", onClick: d },
                          { default: c(() => [f(o(t.cancelText || "取消"), 1)]), _: 1 },
                        ))
                      : r("", !0),
                    t.showConfirm
                      ? (n(),
                        a(
                          i,
                          { key: 1, class: "px-6", onClick: u },
                          { default: c(() => [f(o(t.confirmText || "确认"), 1)]), _: 1 },
                        ))
                      : r("", !0),
                  ]),
                ]),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  });
export { V as _ };
