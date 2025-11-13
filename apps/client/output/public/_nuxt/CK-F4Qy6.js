import { _ as s } from "./_b8Uo-6J.js";
import {
  l as _,
  c as a,
  m as c,
  o as e,
  ax as l,
  n as m,
  f as n,
  _ as p,
  g as r,
} from "./BJowY05t.js";

const i = n({
    __name: "MembershipBadge",
    setup(u) {
      const o = r();
      return (f, d) => {
        const t = s;
        return (
          e(),
          a("div", null, [
            _(o).isFounderMembership()
              ? (e(),
                c(t, {
                  key: 0,
                  name: "i-ph-crown-simple-fill",
                  class: "glimmer relative overflow-hidden bg-yellow-400",
                  title: "尊贵的创始会员,感谢您对 Earthworm 的大力支持！",
                  style: { width: "20px", height: "20px" },
                }))
              : m("", !0),
          ])
        );
      };
    },
  }),
  g = p(i, [["__scopeId", "data-v-f344293f"]]),
  w = l("/logo.png");
export { g as _, w as a };
