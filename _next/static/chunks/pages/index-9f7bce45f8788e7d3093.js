(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    9714: function (i, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return F;
          },
        });
      var s = a(5893),
        n = a(7646),
        t = a.n(n),
        l = a(3391),
        r = a(5120),
        c = a.n(r),
        d = a(7294),
        o = a(9500),
        _ = a.n(o),
        h = a(1664),
        p = a(5675);
      var m = function (i) {
          var e = i.section;
          return (0, s.jsxs)("ul", {
            className:
              "contact" == e
                ? _().socials__container_contact
                : _().socials__container,
            children: [
              (0, s.jsx)("li", {
                className: _().socials,
                children: (0, s.jsx)(h.default, {
                  href: "https://www.instagram.com/____heathcliff__/",
                  children: (0, s.jsx)("a", {
                    className: _().socials_link,
                    children: (0, s.jsx)(p.default, {
                      src: "/images/icons/instagram.svg",
                      alt: "instagram",
                      width: "50",
                      height: "50",
                      className: _().social_image,
                    }),
                  }),
                }),
              }),
              (0, s.jsx)("li", {
                className: _().socials,
                children: (0, s.jsx)(h.default, {
                  href: "https://linkedin.com/in/rahul-bharati",
                  children: (0, s.jsx)("a", {
                    className: _().socials_link,
                    children: (0, s.jsx)(p.default, {
                      src: "/images/icons/linkedin.svg",
                      alt: "instagram",
                      width: "50",
                      height: "50",
                      className: _().social_image,
                    }),
                  }),
                }),
              }),
              (0, s.jsx)("li", {
                className: _().socials,
                children: (0, s.jsx)(h.default, {
                  href: "https://blog.rahulbharati.dev/",
                  children: (0, s.jsx)("a", {
                    className: _().socials_link,
                    children: (0, s.jsx)(p.default, {
                      src: "/images/icons/medium.svg",
                      alt: "instagram",
                      width: "50",
                      height: "50",
                      className: _().social_image,
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        x = a(131),
        u = a(5172),
        g = a(9872);
      var j = function () {
          var i = (0, d.useRef)(null),
            e = (0, u._)(),
            n = (0, u._)(),
            t = (0, x.YD)({ threshold: 0.1 }),
            r = (0, l.Z)(t, 3),
            o = r[0],
            _ = r[1];
          return (
            r[2],
            (0, d.useEffect)(function () {
              Promise.all([a.e(386), a.e(764)]).then(a.bind(a, 9136));
            }, []),
            (0, d.useEffect)(
              function () {
                _
                  ? (e.start("visible"), n.start("visible"))
                  : (e.start("hidden"), n.start("hidden"));
              },
              [n, e, _]
            ),
            (0, s.jsxs)(g.E.div, {
              className: c().hero,
              ref: o,
              children: [
                (0, s.jsx)(g.E.div, {
                  className: c().hero_details_container,
                  initial: "hidden",
                  animate: e,
                  variants: {
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        delayChilden: 0.2,
                        staggerChildren: 0.1,
                        delay: 0.2,
                      },
                    },
                    hidden: { y: -50, opacity: 0 },
                  },
                  children: (0, s.jsxs)("div", {
                    className: c().heading__container,
                    children: [
                      (0, s.jsx)("h1", {
                        className: c().heading__name,
                        children: "Rahul Bharati \u2014",
                      }),
                      (0, s.jsx)("h2", {
                        className: c().heading__about,
                        children: "developer from",
                      }),
                      (0, s.jsx)("h2", {
                        className: c().heading__about,
                        children: "Mumbai, India",
                      }),
                      (0, s.jsx)(m, {}),
                    ],
                  }),
                }),
                (0, s.jsx)(g.E.div, {
                  className: c().lottie_container,
                  initial: "hidden",
                  animate: n,
                  variants: {
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        delayChilden: 0.2,
                        staggerChildren: 0.1,
                        delay: 0.4,
                      },
                    },
                    hidden: { y: 50, opacity: 0 },
                  },
                  children: (0, s.jsx)("dotlottie-player", {
                    id: "hero-lottie",
                    ref: i,
                    src: "/animations/developer-lottie.lottie",
                    autoplay: !0,
                    loop: !0,
                    className: c().lottie__player,
                  }),
                }),
              ],
            })
          );
        },
        f = a(9623),
        v = a.n(f);
      var b = function () {
          var i = (0, d.useState)(!1),
            e = i[0],
            a = i[1],
            n = (0, u._)(),
            t = (0, x.YD)({ threshold: 0.1 }),
            r = (0, l.Z)(t, 3),
            c = r[0],
            o = r[1];
          return (
            r[2],
            (0, d.useEffect)(
              function () {
                var i = localStorage.getItem("theme") || "dark";
                document.documentElement.setAttribute("data-theme", i);
              },
              [e]
            ),
            (0, d.useEffect)(function () {
              var i = "light" == localStorage.getItem("theme");
              a(i);
            }, []),
            (0, d.useEffect)(
              function () {
                o ? n.start("visible") : n.start("hidden");
              },
              [n, o]
            ),
            (0, s.jsxs)(g.E.div, {
              className: v().navbar,
              ref: c,
              animate: n,
              initial: "hidden",
              variants: {
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delayChilden: 0.2,
                    staggerChildren: 0.1,
                  },
                },
                hidden: { y: -10, opacity: 0 },
              },
              children: [
                (0, s.jsx)("div", {
                  className: v().brand,
                  children: (0, s.jsx)(h.default, {
                    href: "/",
                    children: (0, s.jsx)("a", {
                      className: v().nav_link,
                      children: "\ud83d\udc4b Rahul B",
                    }),
                  }),
                }),
                (0, s.jsx)("div", {
                  className: v().link__container,
                  children: (0, s.jsx)("ul", {
                    className: v().link__list,
                    children: (0, s.jsx)("li", {
                      className: v().link__item,
                      children: (0, s.jsxs)("label", {
                        id: "switch",
                        className: v().switch,
                        children: [
                          (0, s.jsx)("input", {
                            type: "checkbox",
                            id: "slider",
                            className: v().checkbox,
                            onChange: function () {
                              a(!e),
                                e
                                  ? localStorage.setItem("theme", "dark")
                                  : localStorage.setItem("theme", "light");
                            },
                            checked: e,
                          }),
                          (0, s.jsx)("span", {
                            className: [v().slider, v().round].join(" "),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            })
          );
        },
        k = a(390),
        y = a.n(k);
      var N = function () {
          var i = (0, d.useRef)(null),
            e = (0, u._)(),
            n = (0, u._)(),
            t = (0, x.YD)({ threshold: 0.1 }),
            r = (0, l.Z)(t, 3),
            c = r[0],
            o = r[1];
          r[2],
            (0, d.useEffect)(function () {
              Promise.all([a.e(386), a.e(764)]).then(a.bind(a, 9136));
            }, []),
            (0, d.useEffect)(
              function () {
                o
                  ? (e.start("visible"), n.start("visible"))
                  : (e.start("hidden"), n.start("hidden"));
              },
              [n, e, o]
            );
          var _ = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
          return (0, s.jsxs)(g.E.div, {
            className: y().hero,
            ref: c,
            children: [
              (0, s.jsx)(g.E.div, {
                className: y().lottie_container,
                initial: "hidden",
                animate: n,
                variants: {
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delayChilden: 0.5,
                      staggerChildren: 0.5,
                      delay: 0.4,
                    },
                  },
                  hidden: { y: 50, opacity: 0 },
                },
                children: (0, s.jsx)("dotlottie-player", {
                  id: "hero-lottie",
                  ref: i,
                  src: "/animations/developer-working.lottie",
                  autoplay: !0,
                  loop: !0,
                  className: y().lottie__player,
                }),
              }),
              (0, s.jsx)(g.E.div, {
                className: y().hero_details_container,
                children: (0, s.jsxs)(g.E.div, {
                  className: y().heading__container,
                  initial: "hidden",
                  animate: e,
                  variants: {
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        delayChilden: 0.2,
                        staggerChildren: 0.5,
                        delay: 0.2,
                      },
                    },
                    hidden: { y: -50, opacity: 0 },
                  },
                  children: [
                    (0, s.jsxs)(g.E.h2, {
                      className: y().heading__about,
                      variants: _,
                      children: [
                        (0, s.jsx)("span", {
                          className: y().heading__name,
                          children: "Specialist",
                        }),
                        " in Web",
                      ],
                    }),
                    (0, s.jsx)(g.E.span, {
                      className: y().about__text,
                      variants: _,
                      children:
                        "I'm graduate from R.D. National College with Bachelor's degree in Computer Science. I enjoy created web application that allows to solve real world problems. I like to spend my past time reading or learning a new tech. I do also love watching animes and I'm learning to play a guitar for past few months.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        w = a(1693),
        E = a.n(w);
      var C = function () {
          var i = (0, u._)(),
            e = (0, x.YD)({ threshold: 0.1 }),
            a = (0, l.Z)(e, 3),
            n = a[0],
            t = a[1];
          return (
            a[2],
            (0, d.useEffect)(
              function () {
                t ? i.start("visible") : i.start("hidden");
              },
              [i, t]
            ),
            (0, s.jsxs)(g.E.div, {
              className: E().skills,
              ref: n,
              children: [
                (0, s.jsx)("h2", {
                  className: E().section__heading,
                  children: "My Skills",
                }),
                (0, s.jsxs)(g.E.div, {
                  className: E().skill_container,
                  variants: {
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.5,
                        delay: 0.2,
                      },
                    },
                    hidden: { x: -1e3, opacity: 0 },
                  },
                  animate: i,
                  initial: "hidden",
                  children: [
                    (0, s.jsx)("h3", {
                      className: E().skill__heading,
                      children: "Front-end Web",
                    }),
                    (0, s.jsx)("span", {
                      className: E().skill__text,
                      children: "HTML5, CSS3, Bootstrap, Javascript, React",
                    }),
                  ],
                }),
                (0, s.jsxs)(g.E.div, {
                  className: E().skill_container,
                  variants: {
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.5,
                        delay: 0.4,
                      },
                    },
                    hidden: { x: -1e3, opacity: 0 },
                  },
                  animate: i,
                  initial: "hidden",
                  children: [
                    (0, s.jsx)("h3", {
                      className: E().skill__heading,
                      children: "Back-end Web",
                    }),
                    (0, s.jsx)("span", {
                      className: E().skill__text,
                      children: "Nodejs, Next.js",
                    }),
                  ],
                }),
                (0, s.jsxs)(g.E.div, {
                  className: E().skill_container,
                  variants: {
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.5,
                        delay: 0.6,
                      },
                    },
                    hidden: { x: -1e3, opacity: 0 },
                  },
                  animate: i,
                  initial: "hidden",
                  children: [
                    (0, s.jsx)("h3", {
                      className: E().skill__heading,
                      children: "Databases",
                    }),
                    (0, s.jsx)("span", {
                      className: E().skill__text,
                      children: "MySql, MongoDB and Postgresql",
                    }),
                  ],
                }),
                (0, s.jsxs)(g.E.div, {
                  className: E().skill_container,
                  variants: {
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.5,
                        delay: 0.8,
                      },
                    },
                    hidden: { x: -1e3, opacity: 0 },
                  },
                  animate: i,
                  initial: "hidden",
                  children: [
                    (0, s.jsx)("h3", {
                      className: E().skill__heading,
                      children: "Version Control",
                    }),
                    (0, s.jsx)("span", {
                      className: E().skill__text,
                      children: "Git, Bitbucket, Gitlab",
                    }),
                  ],
                }),
                (0, s.jsxs)(g.E.div, {
                  className: E().skill_container,
                  variants: {
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.5,
                        delay: 1,
                      },
                    },
                    hidden: { x: -1e3, opacity: 0 },
                  },
                  animate: i,
                  initial: "hidden",
                  children: [
                    (0, s.jsx)("h3", {
                      className: E().skill__heading,
                      children: "Containerization",
                    }),
                    (0, s.jsx)("span", {
                      className: E().skill__text,
                      children: "Docker, Kubernetes and Minikube(on linux)",
                    }),
                  ],
                }),
                (0, s.jsxs)(g.E.div, {
                  className: E().skill_container,
                  variants: {
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.5,
                        delay: 1.2,
                      },
                    },
                    hidden: { x: -1e3, opacity: 0 },
                  },
                  animate: i,
                  initial: "hidden",
                  children: [
                    (0, s.jsx)("h3", {
                      className: E().skill__heading,
                      children: "Cloud Platforms",
                    }),
                    (0, s.jsx)("span", {
                      className: E().skill__text,
                      children: "AWS, GCP, Heroku",
                    }),
                  ],
                }),
              ],
            })
          );
        },
        S = a(1935),
        D = a.n(S);
      var P = function () {
          var i = (0, u._)(),
            e = (0, x.YD)({ threshold: 0.1 }),
            a = (0, l.Z)(e, 3),
            n = a[0],
            t = a[1];
          return (
            a[2],
            (0, d.useEffect)(
              function () {
                t ? i.start("visible") : i.start("hidden");
              },
              [i, t]
            ),
            (0, s.jsxs)(g.E.div, {
              className: D().skills,
              ref: n,
              children: [
                (0, s.jsx)("h2", {
                  className: D().section__heading,
                  children: "Experience",
                }),
                (0, s.jsxs)(g.E.div, {
                  className: D().skill_container,
                  animate: i,
                  initial: "hidden",
                  variants: {
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.5,
                        delay: 0.2,
                      },
                    },
                    hidden: { x: 1e3, opacity: 0 },
                  },
                  children: [
                    (0, s.jsx)("h3", {
                      className: D().skill__heading,
                      children:
                        "Web Developer - Rapidera Technologies (February 2022 - August 2022)",
                    }),
                    (0, s.jsx)("span", {
                      className: D().skill__text,
                      children: (0, s.jsxs)("ul", {
                        children: [
                          (0, s.jsx)("li", {
                            children:
                              "Collaborate with other developers to write efficient, well-designed code",
                          }),
                          (0, s.jsx)("li", {
                            children:
                              "Participate in code review and scrum meetups to keep up with changes and tasks",
                          }),
                          (0, s.jsx)("li", {
                            children:
                              "Work as a third-party developer for HDFC life",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)(g.E.div, {
                  className: D().skill_container,
                  animate: i,
                  initial: "hidden",
                  variants: {
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.5,
                        delay: 0.4,
                      },
                    },
                    hidden: { x: 1e3, opacity: 0 },
                  },
                  children: [
                    (0, s.jsx)("h3", {
                      className: D().skill__heading,
                      children:
                        "Web Developer - Paper Boat Apps (October 2019 - February 2022)",
                    }),
                    (0, s.jsx)("span", {
                      className: D().skill__text,
                      children: (0, s.jsxs)("ul", {
                        children: [
                          (0, s.jsx)("li", {
                            children:
                              "Collaborate with designers and other developers to launch web applications",
                          }),
                          (0, s.jsx)("li", {
                            children:
                              "Write efficient, well-designed code and maintain software documentation",
                          }),
                          (0, s.jsx)("li", {
                            children:
                              "Built Kiddopia website to provide a subscription to the user",
                          }),
                          (0, s.jsx)("li", {
                            children:
                              "Worked on serverless applications using Google cloud functions",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)(g.E.div, {
                  className: D().skill_container,
                  animate: i,
                  initial: "hidden",
                  variants: {
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.5,
                        delay: 0.6,
                      },
                    },
                    hidden: { x: 1e3, opacity: 0 },
                  },
                  children: [
                    (0, s.jsx)("h3", {
                      className: D().skill__heading,
                      children:
                        "Web Developer - Appic Mobile (July 2019 - October 2019)",
                    }),
                    (0, s.jsx)("span", {
                      className: D().skill__text,
                      children: (0, s.jsxs)("ul", {
                        children: [
                          (0, s.jsx)("li", {
                            children:
                              "Developed website components using modern frameworks",
                          }),
                          (0, s.jsx)("li", {
                            children:
                              "Participated in code reviews with development teams",
                          }),
                          (0, s.jsx)("li", {
                            children:
                              "Worked on multiple fintech websites backend including mintoak and finwego",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        B = a(8191),
        H = a.n(B);
      var I = function () {
          var i = (0, d.useRef)(null);
          return (
            (0, d.useEffect)(function () {
              Promise.all([a.e(386), a.e(764)]).then(a.bind(a, 9136));
            }, []),
            (0, s.jsxs)("div", {
              className: H().contact,
              children: [
                (0, s.jsx)("div", {
                  className: H().lottie_container,
                  children: (0, s.jsx)("dotlottie-player", {
                    id: "hero-lottie",
                    ref: i,
                    src: "/animations/contact.lottie",
                    autoplay: !0,
                    loop: !0,
                    className: H().lottie__player,
                  }),
                }),
                (0, s.jsx)("div", {
                  className: H().hero_details_container,
                  children: (0, s.jsxs)("div", {
                    className: H().heading__container,
                    children: [
                      (0, s.jsx)("h1", {
                        className: H().heading__name,
                        children: "Just say hi.",
                      }),
                      (0, s.jsx)("h2", {
                        className: H().heading__about,
                        children: "contact@rahulbharati.dev",
                      }),
                      (0, s.jsx)("h2", {
                        className: H().heading__follow,
                        children: "Follow me on",
                      }),
                      (0, s.jsx)(m, { section: "contact" }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        T = a(7243),
        R = a.n(T);
      var W = function () {
        var i = (0, u._)(),
          e = (0, x.YD)({ threshold: 0.1 }),
          a = (0, l.Z)(e, 3),
          n = a[0],
          t = a[1];
        return (
          a[2],
          (0, d.useEffect)(
            function () {
              t ? i.start("visible") : i.start("hidden");
            },
            [i, t]
          ),
          (0, s.jsxs)(g.E.div, {
            className: R().skills,
            ref: n,
            children: [
              (0, s.jsx)("h2", {
                className: R().section__heading,
                children: "Projects",
              }),
              (0, s.jsxs)(g.E.div, {
                className: R().skill_container,
                animate: i,
                initial: "hidden",
                variants: {
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.5,
                      delay: 0.2,
                    },
                  },
                  hidden: { x: -1e3, opacity: 0 },
                },
                children: [
                  (0, s.jsx)("h3", {
                    className: R().skill__heading,
                    children: (0, s.jsx)(h.default, {
                      href: "https://beatnbuddy.rahulbharati.dev/",
                      passHref: !0,
                      children: (0, s.jsx)("a", {
                        target: "_blank",
                        className: R().skill__heading,
                        children: "Beatnbuddy, (Next.js, Solidity, Polygon)",
                      }),
                    }),
                  }),
                  (0, s.jsx)("span", {
                    className: R().skill__text,
                    children: (0, s.jsxs)("ul", {
                      children: [
                        (0, s.jsx)("li", {
                          children:
                            "Web3 app that will allow artist to mint their music as NFT",
                        }),
                        (0, s.jsx)("li", {
                          children:
                            "User will be able to listen to the music streamed directly from IPFS storage",
                        }),
                        (0, s.jsx)("li", {
                          children:
                            "Built this app for Roadtoweb3 Hackathon and is deployed to Polygon Mumbai testnet",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)(g.E.div, {
                className: R().skill_container,
                animate: i,
                initial: "hidden",
                variants: {
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.5,
                      delay: 0.4,
                    },
                  },
                  hidden: { x: -1e3, opacity: 0 },
                },
                children: [
                  (0, s.jsx)("h3", {
                    className: R().skill__heading,
                    children: (0, s.jsx)(h.default, {
                      href: "https://webxstudio.in/",
                      passHref: !0,
                      children: (0, s.jsx)("a", {
                        target: "_blank",
                        className: R().skill__heading,
                        children: "Webxstudio, (Vue.js, CSS, Javascript)",
                      }),
                    }),
                  }),
                  (0, s.jsx)("span", {
                    className: R().skill__text,
                    children: (0, s.jsx)("ul", {
                      children: (0, s.jsx)("li", {
                        children:
                          "Designed and Developed website to promote freelancing business",
                      }),
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)(g.E.div, {
                className: R().skill_container,
                animate: i,
                initial: "hidden",
                variants: {
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.5,
                      delay: 0.6,
                    },
                  },
                  hidden: { x: -1e3, opacity: 0 },
                },
                children: [
                  (0, s.jsx)("h3", {
                    className: R().skill__heading,
                    children: (0, s.jsx)(h.default, {
                      href: "https://smartcomputerinstitute.org/",
                      passHref: !0,
                      children: (0, s.jsx)("a", {
                        target: "_blank",
                        className: R().skill__heading,
                        children:
                          "Smart Computer Institute, (HTML, CSS, JavaScript)",
                      }),
                    }),
                  }),
                  (0, s.jsx)("span", {
                    className: R().skill__text,
                    children: (0, s.jsxs)("ul", {
                      children: [
                        (0, s.jsx)("li", {
                          children:
                            "Built landing page to improve global reach",
                        }),
                        (0, s.jsx)("li", {
                          children:
                            "Done SEO on website to improve listing and customer reach",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)(g.E.div, {
                className: R().skill_container,
                animate: i,
                initial: "hidden",
                variants: {
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.5,
                      delay: 0.8,
                    },
                  },
                  hidden: { x: -1e3, opacity: 0 },
                },
                children: [
                  (0, s.jsx)("h3", {
                    className: R().skill__heading,
                    children: (0, s.jsx)(h.default, {
                      href: "https://rdnational.ac.in/#!home.html",
                      passHref: !0,
                      children: (0, s.jsx)("a", {
                        target: "_blank",
                        className: R().skill__heading,
                        children:
                          "R.D. National College, (HTML, CSS, JavaScript, Bootstrap)",
                      }),
                    }),
                  }),
                  (0, s.jsx)("span", {
                    className: R().skill__text,
                    children: (0, s.jsxs)("ul", {
                      children: [
                        (0, s.jsx)("li", {
                          children:
                            "Built this website to improve the UI for existing website",
                        }),
                        (0, s.jsx)("li", {
                          children:
                            "Trained students during development phase to provide them hands-on experience in building websites",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)(g.E.div, {
                className: R().skill_container,
                animate: i,
                initial: "hidden",
                variants: {
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.5,
                      delay: 1,
                    },
                  },
                  hidden: { x: -1e3, opacity: 0 },
                },
                children: [
                  (0, s.jsx)("h3", {
                    className: R().skill__heading,
                    children: (0, s.jsx)(h.default, {
                      href: "https://github.com/rahul-bharati/instagram_bot",
                      passHref: !0,
                      children: (0, s.jsx)("a", {
                        target: "_blank",
                        className: R().skill__heading,
                        children: "Instagram BOT, (Python)",
                      }),
                    }),
                  }),
                  (0, s.jsx)("span", {
                    className: R().skill__text,
                    children: (0, s.jsxs)("ul", {
                      children: [
                        (0, s.jsx)("li", {
                          children:
                            "Simple script to generate random quotes and upload image on instagram",
                        }),
                        (0, s.jsx)("li", {
                          children: "Built it as a side fun project",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var F = function () {
        return (0, s.jsxs)("div", {
          className: t().app,
          children: [
            (0, s.jsx)(b, {}),
            (0, s.jsx)(j, {}),
            (0, s.jsx)(N, {}),
            (0, s.jsx)(C, {}),
            (0, s.jsx)(P, {}),
            (0, s.jsx)(W, {}),
            (0, s.jsx)(I, {}),
          ],
        });
      };
    },
    8581: function (i, e, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(9714);
        },
      ]);
    },
    390: function (i) {
      i.exports = {
        hero: "about_hero__2mLyH",
        hero_details_container: "about_hero_details_container__XYhpn",
        heading__container: "about_heading__container__2MxSv",
        heading__name: "about_heading__name__1HOYR",
        heading__about: "about_heading__about__3oEbO",
        about__text: "about_about__text__aUIu1",
        lottie_container: "about_lottie_container__1_-z0",
        lottie__player: "about_lottie__player__3HpAm",
      };
    },
    8191: function (i) {
      i.exports = {
        contact: "contact_contact__v2ntA",
        hero_details_container: "contact_hero_details_container__HFN_h",
        heading__container: "contact_heading__container__1-TYC",
        heading__name: "contact_heading__name__1FfVh",
        heading__about: "contact_heading__about__3sUm7",
        heading__follow: "contact_heading__follow__2PmbE",
        lottie_container: "contact_lottie_container__3qhSq",
        lottie__player: "contact_lottie__player__I-9x1",
      };
    },
    1935: function (i) {
      i.exports = {
        skills: "experience_skills__VEbiS",
        section__heading: "experience_section__heading__1g3XQ",
        skill_container: "experience_skill_container__27n7F",
        skill__heading: "experience_skill__heading__3dcbv",
        skill__text: "experience_skill__text__1XGrX",
      };
    },
    5120: function (i) {
      i.exports = {
        hero: "hero_hero__38Lpv",
        hero_details_container: "hero_hero_details_container__2iLxx",
        heading__container: "hero_heading__container__1SdzT",
        heading__name: "hero_heading__name__3LOdr",
        heading__about: "hero_heading__about__3Tep6",
        lottie_container: "hero_lottie_container__2oV5h",
        lottie__player: "hero_lottie__player__2EtCb",
      };
    },
    9623: function (i) {
      i.exports = {
        navbar: "navbar_navbar__1ZPeX",
        nav_link: "navbar_nav_link__1RTN6",
        link__list: "navbar_link__list__1jdjf",
        link__item: "navbar_link__item__3fy1z",
        switch: "navbar_switch__11b1S",
        slider: "navbar_slider__1zgcj",
        checkbox: "navbar_checkbox__35DRH",
        round: "navbar_round__1y8mB",
      };
    },
    7243: function (i) {
      i.exports = {
        skills: "projects_skills__-kjZu",
        section__heading: "projects_section__heading__65kry",
        skill_container: "projects_skill_container__3_s6Z",
        skill__heading: "projects_skill__heading__X5yCK",
        skill__text: "projects_skill__text__2JZ9s",
      };
    },
    1693: function (i) {
      i.exports = {
        skills: "skills_skills__1p_mA",
        section__heading: "skills_section__heading__2tT75",
        skill_container: "skills_skill_container__1J5uE",
        skill__heading: "skills_skill__heading__29hC6",
        skill__text: "skills_skill__text__2zYDs",
      };
    },
    9500: function (i) {
      i.exports = {
        socials__container: "socials_socials__container__1z3mw",
        socials: "socials_socials__UoRFa",
        socials_link: "socials_socials_link__1bp0i",
        social_image: "socials_social_image__SqPdp",
        socials__container_contact: "socials_socials__container_contact__3f2la",
      };
    },
    7646: function (i) {
      i.exports = { app: "index_app__3KyTv" };
    },
  },
  function (i) {
    i.O(0, [792, 774, 888, 179], function () {
      return (e = 8581), i((i.s = e));
      var e;
    });
    var e = i.O();
    _N_E = e;
  },
]);
