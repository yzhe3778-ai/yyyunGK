import { u as D } from "./B0AEzVw1.js";
import {
  o as a,
  H as A,
  f as b,
  b as B,
  c,
  l as C,
  a as d,
  m as f,
  G as g,
  C as h,
  i as I,
  t as l,
  v as L,
  d as M,
  n as N,
  B as R,
  E as T,
  w as V,
  r as w,
  D as x,
} from "./BJowY05t.js";
import { u as y } from "./ChrpOMnS.js";
import { _ as S } from "./CyUMc6TN.js";

import "./D_a5X8Y3.js";
import "./BC2xWXSP.js";
import "./CnNyuEuj.js";

const E = { class: "text-base font-bold" },
  F = ["title"],
  j = b({
    __name: "CourseCard",
    props: { title: {}, id: {}, count: {}, coursePackId: {}, description: {} },
    setup(m) {
      const t = m,
        { activeCourseMap: u } = y(),
        s = w(),
        o = h(() => !!t.count),
        n = h(() => u.value[t.coursePackId] == t.id),
        p = h(() => `恭喜您，当前课程已完成 ${t.count} 次 🎉`);
      return (
        I(() => {
          var e;
          (e = s.value) == null || e.scrollIntoView({ behavior: "smooth", block: "start" });
        }),
        (e, i) => {
          const v = S;
          return (
            a(),
            c(
              "div",
              {
                ref: n.value ? "activeCourseRef" : void 0,
                class: x([
                  "relative h-[160px] w-full cursor-pointer rounded-xl border border-gray-400 p-4 pb-6 transition-all duration-300 dark:text-gray-100",
                  "hover:text-purple-500 hover:shadow-lg hover:shadow-gray-300 hover:dark:text-purple-400 dark:hover:shadow-gray-500",
                  {
                    "border-2 border-emerald-500 hover:text-emerald-500 hover:shadow-emerald-200 hover:dark:text-emerald-300 dark:hover:shadow-emerald-700":
                      o.value,
                    "border-2 border-purple-500 hover:text-purple-500 hover:shadow-purple-200 hover:dark:text-purple-300 dark:hover:shadow-purple-700":
                      n.value,
                  },
                ]),
              },
              [
                d("h3", E, l(e.title), 1),
                d(
                  "p",
                  {
                    class: "mt-4 line-clamp-3 text-sm text-gray-500 dark:text-gray-400",
                    title: e.description,
                  },
                  l(e.description),
                  9,
                  F,
                ),
                o.value
                  ? (a(),
                    c(
                      "div",
                      {
                        key: 0,
                        class: x([
                          "absolute bottom-1.5 right-2 h-5 w-7 rounded-md text-center text-xs leading-5 text-white",
                          { "bg-emerald-600": o.value, "bg-purple-600": n.value },
                        ]),
                      },
                      [
                        B(v, { text: p.value }, { default: V(() => [M(l(e.count), 1)]), _: 1 }, 8, [
                          "text",
                        ]),
                      ],
                      2,
                    ))
                  : N("", !0),
              ],
              2,
            )
          );
        }
      );
    },
  }),
  z = { class: "flex w-full flex-col" },
  G = { class: "mb-4 text-center text-3xl dark:border-gray-600" },
  H = { class: "h-full scrollbar-hide" },
  U = {
    class:
      "grid h-[79vh] grid-cols-1 justify-start gap-8 overflow-y-auto overflow-x-hidden pb-96 pl-0 pr-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  },
  Z = b({
    __name: "[id]",
    setup(m) {
      const t = w(!1),
        u = T(),
        s = D(),
        o = u.params.id,
        { updateActiveCourseMap: n } = y();
      p();
      async function p() {
        (t.value = !0), await s.setupCoursePack(o), (t.value = !1);
      }
      function e(i) {
        n(o, i), L(`/game/${o}/${i}`);
      }
      return (i, v) => {
        var _, k;
        const P = R,
          $ = j;
        return (
          a(),
          c("div", z, [
            t.value
              ? (a(), f(P, { key: 0 }))
              : (a(),
                c(
                  g,
                  { key: 1 },
                  [
                    d("h2", G, l((_ = C(s).currentCoursePack) == null ? void 0 : _.title), 1),
                    d("div", H, [
                      d("div", U, [
                        (a(!0),
                        c(
                          g,
                          null,
                          A(
                            (k = C(s).currentCoursePack) == null ? void 0 : k.courses,
                            (r) => (
                              a(),
                              f(
                                $,
                                {
                                  key: r.id,
                                  title: r.title,
                                  description: r.description,
                                  id: r.id,
                                  count: r.completionCount,
                                  coursePackId: r.coursePackId,
                                  onClick: (q) => e(r.id),
                                },
                                null,
                                8,
                                ["title", "description", "id", "count", "coursePackId", "onClick"],
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                    ]),
                  ],
                  64,
                )),
          ])
        );
      };
    },
  });
export { Z as default };
