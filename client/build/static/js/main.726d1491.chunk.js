(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    52: function (e, t, c) {},
    60: function (e, t, c) {},
    64: function (e, t, c) {},
    65: function (e, t, c) {},
    66: function (e, t, c) {},
    67: function (e, t, c) {},
    68: function (e, t, c) {},
    69: function (e, t, c) {},
    70: function (e, t, c) {},
    71: function (e, t, c) {
      "use strict";
      c.r(t);
      var n = c(0),
        s = c.n(n),
        r = c(41),
        a = c.n(r),
        i = (c(52), c(6)),
        o = c.n(i),
        l = c(8),
        j = c(5),
        u = c(83),
        b = c(84),
        d = c(22),
        O =
          (c(60),
          d.a.create({
            baseURL: "https://enchanting-tuna-costume.cyclic.app/api/",
          })),
        p = c(10),
        x = c(1);
      function h(e) {
        var t = e.type,
          c = e.setGenre,
          s = Object(n.useState)({}),
          r = Object(j.a)(s, 2),
          a = r[0],
          i = r[1];
        Object(n.useEffect)(
          function () {
            (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var c;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              O.get("/movies/random?type=".concat(t), {
                                headers: {
                                  token:
                                    "Bearer " +
                                    JSON.parse(localStorage.getItem("user"))
                                      .accessToken,
                                },
                              })
                            );
                          case 3:
                            (c = e.sent), i(c.data[0]), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          },
          [t]
        );
        return Object(x.jsxs)("div", {
          className: "featured",
          children: [
            "movie" === t &&
              Object(x.jsxs)("div", {
                className: "category",
                children: [
                  Object(x.jsx)("span", { children: "Movies" }),
                  Object(x.jsxs)("select", {
                    name: "genre",
                    id: "genre",
                    onChange: function (e) {
                      return c(e.target.value);
                    },
                    children: [
                      Object(x.jsx)("option", { children: "Genre" }),
                      Object(x.jsx)("option", {
                        value: "Comedy",
                        children: "Comedy",
                      }),
                      Object(x.jsx)("option", {
                        value: "Sports",
                        children: "Sports",
                      }),
                      Object(x.jsx)("option", {
                        value: "Documentary",
                        children: "Documentary",
                      }),
                      Object(x.jsx)("option", {
                        value: "Romantic",
                        children: "Romantic",
                      }),
                      Object(x.jsx)("option", {
                        value: "Action & Adventure",
                        children: "Action & Adventure",
                      }),
                      Object(x.jsx)("option", {
                        value: "Horror",
                        children: "Horror",
                      }),
                    ],
                  }),
                ],
              }),
            "series" === t &&
              Object(x.jsxs)("div", {
                className: "category",
                children: [
                  Object(x.jsx)("span", { children: "Series" }),
                  Object(x.jsxs)("select", {
                    name: "genre",
                    id: "genre",
                    onChange: function (e) {
                      return c(e.target.value);
                    },
                    children: [
                      Object(x.jsx)("option", { children: "Genre" }),
                      Object(x.jsx)("option", {
                        value: "Comedy",
                        children: "Comedy",
                      }),
                      Object(x.jsx)("option", {
                        value: "Sports",
                        children: "Sports",
                      }),
                      Object(x.jsx)("option", {
                        value: "Documentary",
                        children: "Documentary",
                      }),
                      Object(x.jsx)("option", {
                        value: "Action n Adventure",
                        children: "Action & Adventure",
                      }),
                      Object(x.jsx)("option", {
                        value: "Horror",
                        children: "Horror",
                      }),
                    ],
                  }),
                ],
              }),
            Object(x.jsx)("img", { src: a.img, alt: "" }),
            Object(x.jsxs)("div", {
              className: "info",
              children: [
                Object(x.jsx)("img", { src: a.imgTitle, alt: "" }),
                Object(x.jsx)("span", { className: "desc", children: a.desc }),
                Object(x.jsxs)("div", {
                  className: "buttons",
                  children: [
                    Object(x.jsx)(p.b, {
                      to: "/watch",
                      state: { movie: a },
                      children: Object(x.jsxs)("button", {
                        className: "play",
                        children: [
                          Object(x.jsx)(u.a, {}),
                          Object(x.jsx)("span", { children: "Play" }),
                        ],
                      }),
                    }),
                    Object(x.jsxs)("button", {
                      className: "more",
                      children: [
                        Object(x.jsx)(b.a, {}),
                        Object(x.jsx)("span", { children: "Info" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var m = c(88),
        v = c(89),
        f = c(85),
        g = c(86),
        N = c(87);
      c(64);
      function y(e) {
        var t = e.index,
          c = e.item,
          s = Object(n.useState)(!1),
          r = Object(j.a)(s, 2),
          a = r[0],
          i = r[1],
          b = Object(n.useState)({}),
          d = Object(j.a)(b, 2),
          h = d[0],
          m = d[1];
        return (
          Object(n.useEffect)(
            function () {
              (function () {
                var e = Object(l.a)(
                  o.a.mark(function e() {
                    var t;
                    return o.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                O.get("/movies/find/" + c, {
                                  headers: {
                                    token:
                                      "Bearer " +
                                      JSON.parse(localStorage.getItem("user"))
                                        .accessToken,
                                  },
                                })
                              );
                            case 3:
                              (t = e.sent), m(t.data), (e.next = 10);
                              break;
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e.catch(0)),
                                console.log(e.t0);
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [c]
          ),
          Object(x.jsx)(p.b, {
            to: "/watch",
            state: { movie: h },
            children: Object(x.jsxs)("div", {
              className: "listItem",
              style: { left: a && 225 * t - 50 + 2.5 * t },
              onMouseEnter: function () {
                return i(!0);
              },
              onMouseLeave: function () {
                return i(!1);
              },
              children: [
                " ",
                Object(x.jsx)("img", {
                  src: null === h || void 0 === h ? void 0 : h.imgSm,
                  alt: "",
                }),
                a &&
                  Object(x.jsxs)(x.Fragment, {
                    children: [
                      " ",
                      Object(x.jsx)("video", {
                        src: h.trailer,
                        autoPlay: !0,
                        loop: !0,
                      }),
                      Object(x.jsxs)("div", {
                        className: "itemInfo",
                        children: [
                          Object(x.jsxs)("div", {
                            className: "icons",
                            children: [
                              Object(x.jsx)(u.a, { className: "icon" }),
                              Object(x.jsx)(f.a, { className: "icon" }),
                              Object(x.jsx)(g.a, { className: "icon" }),
                              Object(x.jsx)(N.a, { className: "icon" }),
                            ],
                          }),
                          Object(x.jsxs)("div", {
                            className: "itemInfoTop",
                            children: [
                              Object(x.jsx)("span", { children: h.title }),
                              Object(x.jsxs)("span", {
                                className: "limit",
                                children: ["+", h.limit],
                              }),
                              Object(x.jsx)("span", { children: h.year }),
                            ],
                          }),
                          Object(x.jsx)("div", {
                            className: "desc",
                            children: h.desc,
                          }),
                          Object(x.jsx)("div", {
                            className: "genre",
                            children: h.genre,
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          })
        );
      }
      c(65);
      function w(e) {
        var t = e.list,
          c = Object(n.useState)(!1),
          s = Object(j.a)(c, 2),
          r = s[0],
          a = s[1],
          i = Object(n.useState)(0),
          o = Object(j.a)(i, 2),
          l = o[0],
          u = o[1],
          b = Object(n.useState)(window.innerWidth / 230),
          d = Object(j.a)(b, 2),
          O = d[0],
          p = (d[1], Object(n.useRef)()),
          h = function (e) {
            a(!0);
            var t = p.current.getBoundingClientRect().x - 50;
            "left" === e &&
              l > 0 &&
              (u(l - 1),
              (p.current.style.transform = "translateX(".concat(
                230 + t,
                "px)"
              ))),
              "right" === e &&
                l < 8 - O &&
                (u(l + 1),
                (p.current.style.transform = "translateX(".concat(
                  -230 + t,
                  "px)"
                )));
          };
        return Object(x.jsxs)("div", {
          className: "list",
          children: [
            Object(x.jsx)("span", {
              className: "listTitle",
              children: t.title,
            }),
            Object(x.jsxs)("div", {
              className: "wrapper",
              children: [
                Object(x.jsx)(m.a, {
                  className: "sliderArrow left",
                  onClick: function () {
                    return h("left");
                  },
                  style: { display: !r && "none" },
                  id: "left",
                }),
                Object(x.jsx)("div", {
                  className: "container",
                  ref: p,
                  children: t.content.map(function (e, t) {
                    return Object(x.jsx)(y, { index: t, item: e }, t);
                  }),
                }),
                t.content[5] &&
                  Object(x.jsx)(v.a, {
                    className: "sliderArrow right",
                    onClick: function () {
                      return h("right");
                    },
                    id: "right",
                  }),
              ],
            }),
          ],
        });
      }
      c(66);
      var S = c(90),
        k = c(91),
        C = c(46),
        I = function (e, t) {
          switch (t.type) {
            case "LOGIN_START":
              return { user: null, isFetching: !0, error: !1 };
            case "LOGIN_SUCCESS":
              return { user: t.payload, isFetching: !1, error: !1 };
            case "LOGIN_FAILURE":
              return { user: null, isFetching: !1, error: !0 };
            case "LOGOUT":
              return { user: null, isFetching: !1, error: !1 };
            default:
              return Object(C.a)({}, e);
          }
        },
        _ = {
          user: JSON.parse(localStorage.getItem("user")) || null,
          isFetching: !1,
          error: !1,
        },
        L = Object(n.createContext)(_),
        A = function (e) {
          var t = e.children,
            c = Object(n.useReducer)(I, _),
            s = Object(j.a)(c, 2),
            r = s[0],
            a = s[1];
          return (
            Object(n.useEffect)(
              function () {
                localStorage.setItem("user", JSON.stringify(r.user));
              },
              [r.user]
            ),
            Object(x.jsx)(L.Provider, {
              value: {
                user: r.user,
                isFetching: r.isFetching,
                error: r.error,
                dispatch: a,
              },
              children: t,
            })
          );
        },
        T = function (e) {
          return { type: "LOGIN_SUCCESS", payload: e };
        },
        G = function () {
          var e = Object(n.useState)(!1),
            t = Object(j.a)(e, 2),
            c = t[0],
            s = t[1],
            r = Object(n.useContext)(L).dispatch;
          return (
            (window.onscroll = function () {
              return (
                s(0 !== window.pageYOffset),
                function () {
                  return (window.onscroll = null);
                }
              );
            }),
            Object(x.jsx)("div", {
              className: c ? "navbar scrolled" : "navbar",
              children: Object(x.jsxs)("div", {
                className: "container",
                children: [
                  Object(x.jsxs)("div", {
                    className: "left",
                    children: [
                      Object(x.jsx)("img", {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
                        alt: "",
                      }),
                      " ",
                      Object(x.jsx)(p.b, {
                        to: "/",
                        className: "link",
                        children: Object(x.jsx)("span", {
                          children: "Homepage",
                        }),
                      }),
                      Object(x.jsx)(p.b, {
                        to: "/series",
                        className: "link",
                        children: Object(x.jsx)("span", {
                          className: "navbarmainLinks",
                          children: "Series",
                        }),
                      }),
                      Object(x.jsx)(p.b, {
                        to: "/movies",
                        className: "link",
                        children: Object(x.jsx)("span", {
                          className: "navbarmainLinks",
                          children: "Movies",
                        }),
                      }),
                      Object(x.jsx)("span", { children: "My List" }),
                    ],
                  }),
                  Object(x.jsxs)("div", {
                    className: "right",
                    children: [
                      Object(x.jsx)(S.a, { className: "icon" }),
                      Object(x.jsxs)("div", {
                        className: "profile",
                        children: [
                          Object(x.jsx)(k.a, { className: "icon" }),
                          Object(x.jsxs)("div", {
                            className: "options",
                            children: [
                              Object(x.jsx)("span", { children: "Settings" }),
                              Object(x.jsx)("span", {
                                onClick: function () {
                                  return r({ type: "LOGOUT" });
                                },
                                children: "Logout",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        R =
          (c(67),
          function (e) {
            var t = e.type,
              c = Object(n.useState)([]),
              s = Object(j.a)(c, 2),
              r = s[0],
              a = s[1],
              i = Object(n.useState)(null),
              u = Object(j.a)(i, 2),
              b = u[0],
              d = u[1];
            return (
              Object(n.useEffect)(
                function () {
                  (function () {
                    var e = Object(l.a)(
                      o.a.mark(function e() {
                        var c;
                        return o.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    O.get(
                                      "lists"
                                        .concat(t ? "?type=" + t : "")
                                        .concat(b ? "&genre=" + b : ""),
                                      {
                                        headers: {
                                          token:
                                            "Bearer " +
                                            JSON.parse(
                                              localStorage.getItem("user")
                                            ).accessToken,
                                        },
                                      }
                                    )
                                  );
                                case 3:
                                  (c = e.sent), a(c.data), (e.next = 10);
                                  break;
                                case 7:
                                  (e.prev = 7),
                                    (e.t0 = e.catch(0)),
                                    console.log(e.t0);
                                case 10:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 7]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()();
                },
                [t, b]
              ),
              Object(x.jsxs)("div", {
                className: "home",
                children: [
                  Object(x.jsx)(G, {}),
                  Object(x.jsx)(h, { type: t, setGenre: d }),
                  r.map(function (e, t) {
                    return Object(x.jsx)(w, { list: e }, t);
                  }),
                ],
              })
            );
          }),
        E = c(4);
      c(68);
      function F() {
        var e = Object(n.useState)(""),
          t = Object(j.a)(e, 2),
          c = t[0],
          s = t[1],
          r = Object(n.useState)(""),
          a = Object(j.a)(r, 2),
          i = a[0],
          u = a[1],
          b = Object(n.useState)(""),
          d = Object(j.a)(b, 2),
          p = d[0],
          h = d[1],
          m = Object(E.n)(),
          v = Object(n.useRef)(),
          f = Object(n.useRef)(),
          g = Object(n.useRef)(),
          N = (function () {
            var e = Object(l.a)(
              o.a.mark(function e(t) {
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            u(f.current.value),
                            h(g.current.value),
                            t.preventDefault(),
                            (e.prev = 3),
                            (e.next = 6),
                            O.post("auth/register", {
                              email: c,
                              username: p,
                              password: i,
                            })
                          );
                        case 6:
                          m("/login"), (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9), (e.t0 = e.catch(3)), console.log(e.t0);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return Object(x.jsxs)("div", {
          className: "register",
          children: [
            Object(x.jsx)("div", {
              className: "top",
              children: Object(x.jsxs)("div", {
                className: "wrapper",
                children: [
                  Object(x.jsx)("img", {
                    className: "logo",
                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
                    alt: "",
                  }),
                  Object(x.jsx)("button", {
                    className: "loginButton",
                    onClick: function () {
                      m("/login");
                    },
                    children: "Sign In",
                  }),
                ],
              }),
            }),
            Object(x.jsxs)("div", {
              className: "container",
              children: [
                Object(x.jsx)("h1", {
                  children: "Unlimited movies, TV shows, and more.",
                }),
                Object(x.jsx)("h2", {
                  children: "Watch anywhere. Cancel anytime.",
                }),
                Object(x.jsx)("p", {
                  children:
                    "Ready to watch? Enter your email to create or restart your membership.",
                }),
                c
                  ? Object(x.jsxs)("form", {
                      className: "input",
                      children: [
                        Object(x.jsx)("input", {
                          type: "username",
                          placeholder: "username",
                          ref: g,
                        }),
                        Object(x.jsx)("input", {
                          type: "password",
                          placeholder: "password",
                          ref: f,
                        }),
                        Object(x.jsx)("button", {
                          className: "registerButton",
                          onClick: N,
                          children: "Start",
                        }),
                      ],
                    })
                  : Object(x.jsxs)("div", {
                      className: "input",
                      children: [
                        Object(x.jsx)("input", {
                          type: "email",
                          placeholder: "Email address",
                          ref: v,
                        }),
                        Object(x.jsx)("button", {
                          className: "registerButton",
                          onClick: function () {
                            s(v.current.value);
                          },
                          children: "Get Started",
                        }),
                      ],
                    }),
              ],
            }),
          ],
        });
      }
      var B = c(92);
      c(69);
      function U() {
        var e,
          t =
            null === (e = Object(E.k)().state) || void 0 === e
              ? void 0
              : e.movie;
        return Object(x.jsxs)("div", {
          className: "watch",
          children: [
            Object(x.jsx)(p.b, {
              to: "/",
              children: Object(x.jsxs)("div", {
                className: "back",
                children: [Object(x.jsx)(B.a, {}), "Home"],
              }),
            }),
            Object(x.jsx)("video", {
              className: "video",
              autoPlay: !0,
              progress: !0,
              controls: !0,
              src: t.video,
            }),
          ],
        });
      }
      var H = (function () {
        var e = Object(l.a)(
          o.a.mark(function e(t, c) {
            var n;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        c({ type: "LOGIN_START" }),
                        (e.prev = 1),
                        (e.next = 4),
                        O.post("auth/login", t)
                      );
                    case 4:
                      (n = e.sent), c(T(n.data)), (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(1)),
                        c({ type: "LOGIN_FAILURE" });
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 8]]
            );
          })
        );
        return function (t, c) {
          return e.apply(this, arguments);
        };
      })();
      c(70);
      function J() {
        var e = Object(n.useState)(""),
          t = Object(j.a)(e, 2),
          c = t[0],
          s = t[1],
          r = Object(n.useState)(""),
          a = Object(j.a)(r, 2),
          i = a[0],
          o = a[1],
          l = Object(n.useContext)(L).dispatch;
        return Object(x.jsxs)("div", {
          className: "login",
          children: [
            Object(x.jsx)("div", {
              className: "top",
              children: Object(x.jsx)("div", {
                className: "wrapper",
                children: Object(x.jsx)("img", {
                  className: "logo",
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
                  alt: "",
                }),
              }),
            }),
            Object(x.jsx)("div", {
              className: "container",
              children: Object(x.jsxs)("form", {
                children: [
                  Object(x.jsx)("h1", { children: "Sign In" }),
                  Object(x.jsx)("input", {
                    type: "email",
                    placeholder: "Email or phone number",
                    onChange: function (e) {
                      return s(e.target.value);
                    },
                  }),
                  Object(x.jsx)("input", {
                    type: "password",
                    placeholder: "Password",
                    onChange: function (e) {
                      return o(e.target.value);
                    },
                  }),
                  Object(x.jsx)("button", {
                    className: "loginButton",
                    onClick: function (e) {
                      e.preventDefault(), H({ email: c, password: i }, l);
                    },
                    children: "Sign In",
                  }),
                  Object(x.jsxs)("span", {
                    children: [
                      "New to Netflix?",
                      " ",
                      Object(x.jsx)(p.b, {
                        to: "/register",
                        children: Object(x.jsx)("b", {
                          children: "Sign up now.",
                        }),
                      }),
                    ],
                  }),
                  Object(x.jsxs)("small", {
                    children: [
                      "This page is protected by Google reCAPTCHA to ensure you're not a bot. ",
                      Object(x.jsx)("b", { children: "Learn more" }),
                      ".",
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var D = function () {
        var e = Object(n.useContext)(L).user;
        return Object(x.jsx)(x.Fragment, {
          children: Object(x.jsx)(p.a, {
            children: Object(x.jsxs)(E.d, {
              children: [
                Object(x.jsx)(E.b, {
                  exact: !0,
                  path: "/",
                  element: e
                    ? Object(x.jsx)(R, {})
                    : Object(x.jsx)(E.a, { to: "/register", replace: !0 }),
                }),
                Object(x.jsx)(E.b, {
                  path: "/register",
                  element: e
                    ? Object(x.jsx)(E.a, { to: "/", replace: !0 })
                    : Object(x.jsx)(F, {}),
                }),
                Object(x.jsx)(E.b, {
                  path: "/login",
                  element: e
                    ? Object(x.jsx)(E.a, { to: "/", replace: !0 })
                    : Object(x.jsx)(J, {}),
                }),
                e &&
                  Object(x.jsxs)(x.Fragment, {
                    children: [
                      Object(x.jsx)(E.b, {
                        path: "/movies",
                        element: Object(x.jsx)(R, { type: "movie" }),
                      }),
                      Object(x.jsx)(E.b, {
                        path: "/series",
                        element: Object(x.jsx)(R, { type: "series" }),
                      }),
                      Object(x.jsx)(E.b, {
                        path: "/watch",
                        element: Object(x.jsx)(U, {}),
                      }),
                      " ",
                    ],
                  }),
              ],
            }),
          }),
        });
      };
      a.a.render(
        Object(x.jsx)(s.a.StrictMode, {
          children: Object(x.jsx)(A, { children: Object(x.jsx)(D, {}) }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[71, 1, 2]],
]);
//# sourceMappingURL=main.726d1491.chunk.js.map
