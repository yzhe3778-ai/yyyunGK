import {
  m as $,
  l as a,
  h as B,
  r as c,
  q as C,
  v as d,
  B as D,
  k as F,
  o as f,
  b as g,
  w as h,
  y as I,
  A as j,
  z as K,
  g as M,
  F as m,
  i as N,
  d as q,
  x as S,
  j as T,
  f as V,
  a as v,
  c as w,
  n as x,
  s as z,
} from "./BJowY05t.js";
import { _ as H } from "./DdgKjaBG.js";
import { _ as E } from "./Dgj5Rc6o.js";
import { _ as Z } from "./DQnaQhS0.js";

import "./_b8Uo-6J.js";
import "./Be3xCWOP.js";
import "./C8e6MUgy.js";
import "./BC2xWXSP.js";

const G = { class: "flex w-full flex-col pt-2" },
  J = v("h3", { class: "mb-4 text-lg font-bold" }, "设置用户名", -1),
  O = { class: "modal-action" },
  P = { key: 0, class: "loading loading-spinner loading-lg" },
  re = V({
    __name: "callback",
    setup(Q) {
      const l = M(),
        {
          username: p,
          isLoadingFetchUserSetup: k,
          isShowSettingUsernameModal: o,
          handleChangeUsername: _,
        } = b(),
        A = (t) => {
          const e = c(null);
          return {
            startAutoRedirect: () => {
              e.value = setTimeout(() => {
                d("/");
              }, t);
            },
            stopAutoRedirect: () => {
              e.value && (clearTimeout(e.value), (e.value = null));
            },
          };
        },
        { startAutoRedirect: y, stopAutoRedirect: U } = A(3e3),
        { isLoading: L, error: R } = B(async () => {
          U();
          const t = await z();
          l.initUser(t), l.isNewUser() ? (o.value = !0) : await d(S());
        });
      N(() => {
        y();
      }),
        T(() => {
          U();
        }),
        F(R, (t) => {
          t &&
            m.error("登录失败", {
              description: `请清空缓存后重新尝试 报错信息: ${t}`,
              duration: 4e3,
              onAutoClose: () => {
                d("/");
              },
            });
        });
      function b() {
        const t = c(""),
          e = c(!1),
          s = c(!1);
        async function i() {
          var r;
          u() &&
            ((s.value = !0),
            await l.setupNewUser({
              username: t.value,
              avatar: (r = l.user) == null ? void 0 : r.avatar,
            }),
            (s.value = !1),
            d(S()),
            (e.value = !1));
        }
        function u() {
          const n = {
            empty: "用户名不能为空",
            minLength: "用户名至少输入 2 个字符",
            invalid: "用户名只能包含字母、数字和下划线，且首字符必须是字母或下划线",
          };
          return t.value
            ? t.value.length < 2
              ? (m.error(n.minLength), !1)
              : /^[A-Za-z_]\w*$/.test(t.value)
                ? !0
                : (m.error(n.invalid), !1)
            : (m.error(n.empty), !1);
        }
        return {
          checkUsername: u,
          username: t,
          isShowSettingUsernameModal: e,
          isLoadingFetchUserSetup: s,
          handleChangeUsername: i,
        };
      }
      return (t, e) => {
        const s = D,
          i = H,
          u = Z,
          r = E;
        return (
          f(),
          w("div", G, [
            a(L) && !a(o) ? (f(), $(s, { key: 0 })) : x("", !0),
            g(
              r,
              {
                modelValue: a(o),
                "onUpdate:modelValue": e[2] || (e[2] = (n) => (C(o) ? (o.value = n) : null)),
                ui: { width: "w-full sm:max-w-lg" },
                "prevent-close": "",
              },
              {
                default: h(() => [
                  g(u, null, {
                    default: h(() => [
                      J,
                      I(
                        v(
                          "input",
                          {
                            "onUpdate:modelValue":
                              e[0] || (e[0] = (n) => (C(p) ? (p.value = n) : null)),
                            type: "text",
                            placeholder: "请输入用户名",
                            class: "input input-sm input-bordered w-full",
                            maxlength: "20",
                            onKeydown: e[1] || (e[1] = j((...n) => a(_) && a(_)(...n), ["enter"])),
                          },
                          null,
                          544,
                        ),
                        [[K, a(p)]],
                      ),
                      v("div", O, [
                        g(
                          i,
                          { type: "submit", onClick: a(_) },
                          {
                            default: h(() => [q(" 确定 "), a(k) ? (f(), w("span", P)) : x("", !0)]),
                            _: 1,
                          },
                          8,
                          ["onClick"],
                        ),
                      ]),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ["modelValue"],
            ),
          ])
        );
      };
    },
  });
export { re as default };
