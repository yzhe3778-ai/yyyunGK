import { u as k } from "./B0AEzVw1.js";
import {
  r as _,
  c as a,
  m as c,
  f,
  l as g,
  B as h,
  a as i,
  G as m,
  o,
  H as p,
} from "./BJowY05t.js";
import { u as x } from "./D1fxQRhZ.js";
import { C as v } from "./xMoqfWMV.js";

const C = { class: "flex w-full flex-col" },
  w = i("h2", { class: "mb-4 text-center text-3xl dark:border-gray-600" }, "课程包列表", -1),
  y = { key: 1, class: "h-[79vh] overflow-y-auto overflow-x-hidden scrollbar-hide" },
  B = {
    class:
      "grid auto-rows-fr grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4",
  },
  S = f({
    __name: "index",
    setup(F) {
      const s = k(),
        { gotoCourseList: n } = x(),
        t = _(!1);
      l();
      async function l() {
        s.coursePacks.length === 0 && ((t.value = !0), await s.setupCoursePacks(), (t.value = !1));
      }
      function d(r) {
        r.isFree ? n(r.id) : console.log("需要是会员");
      }
      return (r, L) => {
        const u = h;
        return (
          o(),
          a("div", C, [
            w,
            t.value
              ? (o(), c(u, { key: 0 }))
              : (o(),
                a("div", y, [
                  i("div", B, [
                    (o(!0),
                    a(
                      m,
                      null,
                      p(
                        g(s).coursePacks,
                        (e) => (
                          o(),
                          c(
                            v,
                            {
                              coursePack: {
                                id: e.id,
                                title: e.title,
                                description: e.description,
                                cover: e.cover,
                                isFree: e.isFree,
                              },
                              onCardClick: d,
                            },
                            null,
                            8,
                            ["coursePack"],
                          )
                        ),
                      ),
                      256,
                    )),
                  ]),
                ])),
          ])
        );
      };
    },
  });
export { S as default };
