(() => {
  var t = {
      732: function (t) {
        t.exports = (function () {
          "use strict";
          function t() {
            return (
              (t =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (t[o] = n[o]);
                  }
                  return t;
                }),
              t.apply(this, arguments)
            );
          }
          var e = "undefined" != typeof window,
            n =
              (e && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            o = e && "IntersectionObserver" in window,
            a = e && "classList" in document.createElement("p"),
            i = e && window.devicePixelRatio > 1,
            r = {
              elements_selector: ".lazy",
              container: n || e ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            s = function (e) {
              return t({}, r, e);
            },
            c = function (t, e) {
              var n,
                o = "LazyLoad::Initialized",
                a = new t(e);
              try {
                n = new CustomEvent(o, { detail: { instance: a } });
              } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  o,
                  !1,
                  !1,
                  { instance: a }
                );
              }
              window.dispatchEvent(n);
            },
            l = "src",
            d = "srcset",
            u = "sizes",
            f = "poster",
            m = "llOriginalAttrs",
            p = "data",
            g = "loading",
            v = "loaded",
            h = "applied",
            b = "error",
            _ = "native",
            y = "data-",
            E = "ll-status",
            L = function (t, e) {
              return t.getAttribute(y + e);
            },
            A = function (t) {
              return L(t, E);
            },
            w = function (t, e) {
              return (function (t, e, n) {
                var o = "data-ll-status";
                null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
              })(t, 0, e);
            },
            x = function (t) {
              return w(t, null);
            },
            S = function (t) {
              return null === A(t);
            },
            I = function (t) {
              return A(t) === _;
            },
            k = [g, v, h, b],
            q = function (t, e, n, o) {
              t &&
                (void 0 === o ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, o));
            },
            O = function (t, e) {
              a
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            C = function (t, e) {
              a
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            P = function (t) {
              return t.llTempImage;
            },
            M = function (t, e) {
              if (e) {
                var n = e._observer;
                n && n.unobserve(t);
              }
            },
            T = function (t, e) {
              t && (t.loadingCount += e);
            },
            $ = function (t, e) {
              t && (t.toLoadCount = e);
            },
            R = function (t) {
              for (var e, n = [], o = 0; (e = t.children[o]); o += 1)
                "SOURCE" === e.tagName && n.push(e);
              return n;
            },
            B = function (t, e) {
              var n = t.parentNode;
              n && "PICTURE" === n.tagName && R(n).forEach(e);
            },
            N = function (t, e) {
              R(t).forEach(e);
            },
            D = [l],
            z = [l, f],
            G = [l, d, u],
            H = [p],
            V = function (t) {
              return !!t[m];
            },
            F = function (t) {
              return t[m];
            },
            j = function (t) {
              return delete t[m];
            },
            J = function (t, e) {
              if (!V(t)) {
                var n = {};
                e.forEach(function (e) {
                  n[e] = t.getAttribute(e);
                }),
                  (t[m] = n);
              }
            },
            U = function (t, e) {
              if (V(t)) {
                var n = F(t);
                e.forEach(function (e) {
                  !(function (t, e, n) {
                    n ? t.setAttribute(e, n) : t.removeAttribute(e);
                  })(t, e, n[e]);
                });
              }
            },
            W = function (t, e, n) {
              O(t, e.class_loading),
                w(t, g),
                n && (T(n, 1), q(e.callback_loading, t, n));
            },
            Y = function (t, e, n) {
              n && t.setAttribute(e, n);
            },
            Q = function (t, e) {
              Y(t, u, L(t, e.data_sizes)),
                Y(t, d, L(t, e.data_srcset)),
                Y(t, l, L(t, e.data_src));
            },
            X = {
              IMG: function (t, e) {
                B(t, function (t) {
                  J(t, G), Q(t, e);
                }),
                  J(t, G),
                  Q(t, e);
              },
              IFRAME: function (t, e) {
                J(t, D), Y(t, l, L(t, e.data_src));
              },
              VIDEO: function (t, e) {
                N(t, function (t) {
                  J(t, D), Y(t, l, L(t, e.data_src));
                }),
                  J(t, z),
                  Y(t, f, L(t, e.data_poster)),
                  Y(t, l, L(t, e.data_src)),
                  t.load();
              },
              OBJECT: function (t, e) {
                J(t, H), Y(t, p, L(t, e.data_src));
              },
            },
            K = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            Z = function (t, e) {
              !e ||
                (function (t) {
                  return t.loadingCount > 0;
                })(e) ||
                (function (t) {
                  return t.toLoadCount > 0;
                })(e) ||
                q(t.callback_finish, e);
            },
            tt = function (t, e, n) {
              t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
            },
            et = function (t, e, n) {
              t.removeEventListener(e, n);
            },
            nt = function (t) {
              return !!t.llEvLisnrs;
            },
            ot = function (t) {
              if (nt(t)) {
                var e = t.llEvLisnrs;
                for (var n in e) {
                  var o = e[n];
                  et(t, n, o);
                }
                delete t.llEvLisnrs;
              }
            },
            at = function (t, e, n) {
              !(function (t) {
                delete t.llTempImage;
              })(t),
                T(n, -1),
                (function (t) {
                  t && (t.toLoadCount -= 1);
                })(n),
                C(t, e.class_loading),
                e.unobserve_completed && M(t, n);
            },
            it = function (t, e, n) {
              var o = P(t) || t;
              nt(o) ||
                (function (t, e, n) {
                  nt(t) || (t.llEvLisnrs = {});
                  var o = "VIDEO" === t.tagName ? "loadeddata" : "load";
                  tt(t, o, e), tt(t, "error", n);
                })(
                  o,
                  function (a) {
                    !(function (t, e, n, o) {
                      var a = I(e);
                      at(e, n, o),
                        O(e, n.class_loaded),
                        w(e, v),
                        q(n.callback_loaded, e, o),
                        a || Z(n, o);
                    })(0, t, e, n),
                      ot(o);
                  },
                  function (a) {
                    !(function (t, e, n, o) {
                      var a = I(e);
                      at(e, n, o),
                        O(e, n.class_error),
                        w(e, b),
                        q(n.callback_error, e, o),
                        n.restore_on_error && U(e, G),
                        a || Z(n, o);
                    })(0, t, e, n),
                      ot(o);
                  }
                );
            },
            rt = function (t, e, n) {
              !(function (t) {
                t.llTempImage = document.createElement("IMG");
              })(t),
                it(t, e, n),
                (function (t) {
                  V(t) || (t[m] = { backgroundImage: t.style.backgroundImage });
                })(t),
                (function (t, e, n) {
                  var o = L(t, e.data_bg),
                    a = L(t, e.data_bg_hidpi),
                    r = i && a ? a : o;
                  r &&
                    ((t.style.backgroundImage = 'url("'.concat(r, '")')),
                    P(t).setAttribute(l, r),
                    W(t, e, n));
                })(t, e, n),
                (function (t, e, n) {
                  var o = L(t, e.data_bg_multi),
                    a = L(t, e.data_bg_multi_hidpi),
                    r = i && a ? a : o;
                  r &&
                    ((t.style.backgroundImage = r),
                    (function (t, e, n) {
                      O(t, e.class_applied),
                        w(t, h),
                        n &&
                          (e.unobserve_completed && M(t, e),
                          q(e.callback_applied, t, n));
                    })(t, e, n));
                })(t, e, n);
            },
            st = function (t, e, n) {
              !(function (t) {
                return K.indexOf(t.tagName) > -1;
              })(t)
                ? rt(t, e, n)
                : (function (t, e, n) {
                    it(t, e, n),
                      (function (t, e, n) {
                        var o = X[t.tagName];
                        o && (o(t, e), W(t, e, n));
                      })(t, e, n);
                  })(t, e, n);
            },
            ct = function (t) {
              t.removeAttribute(l), t.removeAttribute(d), t.removeAttribute(u);
            },
            lt = function (t) {
              B(t, function (t) {
                U(t, G);
              }),
                U(t, G);
            },
            dt = {
              IMG: lt,
              IFRAME: function (t) {
                U(t, D);
              },
              VIDEO: function (t) {
                N(t, function (t) {
                  U(t, D);
                }),
                  U(t, z),
                  t.load();
              },
              OBJECT: function (t) {
                U(t, H);
              },
            },
            ut = function (t, e) {
              (function (t) {
                var e = dt[t.tagName];
                e
                  ? e(t)
                  : (function (t) {
                      if (V(t)) {
                        var e = F(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(t);
              })(t),
                (function (t, e) {
                  S(t) ||
                    I(t) ||
                    (C(t, e.class_entered),
                    C(t, e.class_exited),
                    C(t, e.class_applied),
                    C(t, e.class_loading),
                    C(t, e.class_loaded),
                    C(t, e.class_error));
                })(t, e),
                x(t),
                j(t);
            },
            ft = ["IMG", "IFRAME", "VIDEO"],
            mt = function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            },
            pt = function (t, e, n) {
              t.forEach(function (t) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(t)
                  ? (function (t, e, n, o) {
                      var a = (function (t) {
                        return k.indexOf(A(t)) >= 0;
                      })(t);
                      w(t, "entered"),
                        O(t, n.class_entered),
                        C(t, n.class_exited),
                        (function (t, e, n) {
                          e.unobserve_entered && M(t, n);
                        })(t, n, o),
                        q(n.callback_enter, t, e, o),
                        a || st(t, n, o);
                    })(t.target, t, e, n)
                  : (function (t, e, n, o) {
                      S(t) ||
                        (O(t, n.class_exited),
                        (function (t, e, n, o) {
                          n.cancel_on_exit &&
                            (function (t) {
                              return A(t) === g;
                            })(t) &&
                            "IMG" === t.tagName &&
                            (ot(t),
                            (function (t) {
                              B(t, function (t) {
                                ct(t);
                              }),
                                ct(t);
                            })(t),
                            lt(t),
                            C(t, n.class_loading),
                            T(o, -1),
                            x(t),
                            q(n.callback_cancel, t, e, o));
                        })(t, e, n, o),
                        q(n.callback_exit, t, e, o));
                    })(t.target, t, e, n);
              });
            },
            gt = function (t) {
              return Array.prototype.slice.call(t);
            },
            vt = function (t) {
              return t.container.querySelectorAll(t.elements_selector);
            },
            ht = function (t) {
              return (function (t) {
                return A(t) === b;
              })(t);
            },
            bt = function (t, e) {
              return (function (t) {
                return gt(t).filter(S);
              })(t || vt(e));
            },
            _t = function (t, n) {
              var a = s(t);
              (this._settings = a),
                (this.loadingCount = 0),
                (function (t, e) {
                  o &&
                    !mt(t) &&
                    (e._observer = new IntersectionObserver(
                      function (n) {
                        pt(n, t, e);
                      },
                      (function (t) {
                        return {
                          root: t.container === document ? null : t.container,
                          rootMargin: t.thresholds || t.threshold + "px",
                        };
                      })(t)
                    ));
                })(a, this),
                (function (t, n) {
                  e &&
                    window.addEventListener("online", function () {
                      !(function (t, e) {
                        var n;
                        ((n = vt(t)), gt(n).filter(ht)).forEach(function (e) {
                          C(e, t.class_error), x(e);
                        }),
                          e.update();
                      })(t, n);
                    });
                })(a, this),
                this.update(n);
            };
          return (
            (_t.prototype = {
              update: function (t) {
                var e,
                  a,
                  i = this._settings,
                  r = bt(t, i);
                $(this, r.length),
                  !n && o
                    ? mt(i)
                      ? (function (t, e, n) {
                          t.forEach(function (t) {
                            -1 !== ft.indexOf(t.tagName) &&
                              (function (t, e, n) {
                                t.setAttribute("loading", "lazy"),
                                  it(t, e, n),
                                  (function (t, e) {
                                    var n = X[t.tagName];
                                    n && n(t, e);
                                  })(t, e),
                                  w(t, _);
                              })(t, e, n);
                          }),
                            $(n, 0);
                        })(r, i, this)
                      : ((a = r),
                        (function (t) {
                          t.disconnect();
                        })((e = this._observer)),
                        (function (t, e) {
                          e.forEach(function (e) {
                            t.observe(e);
                          });
                        })(e, a))
                    : this.loadAll(r);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  vt(this._settings).forEach(function (t) {
                    j(t);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (t) {
                var e = this,
                  n = this._settings;
                bt(t, n).forEach(function (t) {
                  M(t, e), st(t, n, e);
                });
              },
              restoreAll: function () {
                var t = this._settings;
                vt(t).forEach(function (e) {
                  ut(e, t);
                });
              },
            }),
            (_t.load = function (t, e) {
              var n = s(e);
              st(t, n);
            }),
            (_t.resetStatus = function (t) {
              x(t);
            }),
            e &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var n, o = 0; (n = e[o]); o += 1) c(t, n);
                  else c(t, e);
              })(_t, window.lazyLoadOptions),
            _t
          );
        })();
      },
    },
    e = {};
  function n(o) {
    var a = e[o];
    if (void 0 !== a) return a.exports;
    var i = (e[o] = { exports: {} });
    return t[o].call(i.exports, i, i.exports, n), i.exports;
  }
  (() => {
    "use strict";
    function t() {
      if (location.hash) return location.hash.replace("#", "");
    }
    let e = (t, e = 500, n = 0) => {
        t.classList.contains("_slide") ||
          (t.classList.add("_slide"),
          (t.style.transitionProperty = "height, margin, padding"),
          (t.style.transitionDuration = e + "ms"),
          (t.style.height = `${t.offsetHeight}px`),
          t.offsetHeight,
          (t.style.overflow = "hidden"),
          (t.style.height = n ? `${n}px` : "0px"),
          (t.style.paddingTop = 0),
          (t.style.paddingBottom = 0),
          (t.style.marginTop = 0),
          (t.style.marginBottom = 0),
          window.setTimeout(() => {
            (t.hidden = !n),
              !n && t.style.removeProperty("height"),
              t.style.removeProperty("padding-top"),
              t.style.removeProperty("padding-bottom"),
              t.style.removeProperty("margin-top"),
              t.style.removeProperty("margin-bottom"),
              !n && t.style.removeProperty("overflow"),
              t.style.removeProperty("transition-duration"),
              t.style.removeProperty("transition-property"),
              t.classList.remove("_slide");
          }, e));
      },
      o = (t, e = 500, n = 0) => {
        if (!t.classList.contains("_slide")) {
          t.classList.add("_slide"),
            (t.hidden = !t.hidden && null),
            n && t.style.removeProperty("height");
          let o = t.offsetHeight;
          (t.style.overflow = "hidden"),
            (t.style.height = n ? `${n}px` : "0px"),
            (t.style.paddingTop = 0),
            (t.style.paddingBottom = 0),
            (t.style.marginTop = 0),
            (t.style.marginBottom = 0),
            t.offsetHeight,
            (t.style.transitionProperty = "height, margin, padding"),
            (t.style.transitionDuration = e + "ms"),
            (t.style.height = o + "px"),
            t.style.removeProperty("padding-top"),
            t.style.removeProperty("padding-bottom"),
            t.style.removeProperty("margin-top"),
            t.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              t.style.removeProperty("height"),
                t.style.removeProperty("overflow"),
                t.style.removeProperty("transition-duration"),
                t.style.removeProperty("transition-property"),
                t.classList.remove("_slide");
            }, e);
        }
      },
      a = !0,
      i = (t = 500) => {
        let e = document.querySelector("body");
        if (a) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let t = 0; t < n.length; t++) {
              n[t].style.paddingRight = "0px";
            }
            (e.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, t),
            (a = !1),
            setTimeout(function () {
              a = !0;
            }, t);
        }
      };
    function r(t) {
      setTimeout(() => {
        window.FLS && console.log(t);
      }, 0);
    }
    function s(t, e) {
      const n = Array.from(t).filter(function (t, n, o) {
        if (t.dataset[e]) return t.dataset[e].split(",")[0];
      });
      if (n.length) {
        const t = [];
        n.forEach((n) => {
          const o = {},
            a = n.dataset[e].split(",");
          (o.value = a[0]),
            (o.type = a[1] ? a[1].trim() : "max"),
            (o.item = n),
            t.push(o);
        });
        let o = t.map(function (t) {
          return (
            "(" +
            t.type +
            "-width: " +
            t.value +
            "px)," +
            t.value +
            "," +
            t.type
          );
        });
        o = (function (t) {
          return t.filter(function (t, e, n) {
            return n.indexOf(t) === e;
          });
        })(o);
        const a = [];
        if (o.length)
          return (
            o.forEach((e) => {
              const n = e.split(","),
                o = n[1],
                i = n[2],
                r = window.matchMedia(n[0]),
                s = t.filter(function (t) {
                  if (t.value === o && t.type === i) return !0;
                });
              a.push({ itemsArray: s, matchMedia: r });
            }),
            a
          );
      }
    }
    let c = (t, e = !1, n = 500, o = 0) => {
      const a = document.querySelector(t);
      if (a) {
        let s = "",
          c = 0;
        e &&
          ((s = "header.header"), (c = document.querySelector(s).offsetHeight));
        let l = {
          speedAsDuration: !0,
          speed: n,
          header: s,
          offset: o,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (i(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(a, "", l);
        else {
          let t = a.getBoundingClientRect().top + scrollY;
          (t = c ? t - c : t),
            (t = o ? t - o : t),
            window.scrollTo({ top: t, behavior: "smooth" });
        }
        r(`[gotoBlock]: Юхуу...едем к ${t}`);
      } else r(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${t}`);
    };
    new (n(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    let l = !1;
    setTimeout(() => {
      if (l) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0);
    document.querySelector("body").getBoundingClientRect().height;
    let d = window.innerHeight + 200,
      u = document.querySelector(".program__up");
    (window.onscroll = function () {
      pageYOffset > d ? u.classList.add("fixed") : u.classList.remove("fixed");
    }),
      new ModalVideo(".js-modal-btn", { channel: "vimeo" }),
      $(function () {
        $("iframe").responsiveIframe({ xdomain: "*" });
      }),
      document.addEventListener("DOMContentLoaded", function () {
        const t = (t, e) => {
          const n = t.querySelectorAll(".webinar__doctor--item"),
            o = n.length - 2,
            a = t.querySelector(".nextstop"),
            i = [...n].indexOf(a) + 3;
          a && a.classList.remove("nextstop"),
            i < o ? n[i].classList.add("nextstop") : e.remove();
        };
        document.querySelectorAll("._beautician").forEach((e) => {
          const n = e.nextElementSibling;
          n.addEventListener("click", t.bind(null, e, n)), t(e, n);
        });
      }),
      document.addEventListener("DOMContentLoaded", function () {
        const t = (t, e) => {
          const n = t.querySelectorAll(".webinar__second--item"),
            o = n.length - 2,
            a = t.querySelector(".nextstop"),
            i = [...n].indexOf(a) + 3;
          a && a.classList.remove("nextstop"),
            i < o ? n[i].classList.add("nextstop") : e.remove();
        };
        document.querySelectorAll("._nutritionist").forEach((e) => {
          const n = e.nextElementSibling;
          n.addEventListener("click", t.bind(null, e, n)), t(e, n);
        });
      }),
      document.addEventListener("DOMContentLoaded", function () {
        const t = (t, e) => {
          const n = t.querySelectorAll(".webinar__third--item"),
            o = n.length - 2,
            a = t.querySelector(".nextstop"),
            i = [...n].indexOf(a) + 3;
          a && a.classList.remove("nextstop"),
            i < o ? n[i].classList.add("nextstop") : e.remove();
        };
        document.querySelectorAll("._pharmacologist").forEach((e) => {
          const n = e.nextElementSibling;
          n.addEventListener("click", t.bind(null, e, n)), t(e, n);
        });
      }),
      (window.FLS = !1),
      (function (t) {
        let e = new Image();
        (e.onload = e.onerror =
          function () {
            t(2 == e.height);
          }),
          (e.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (t) {
        let e = !0 === t ? "webp" : "no-webp";
        document.documentElement.classList.add(e);
      }),
      (function () {
        const t = document.querySelectorAll("[data-tabs]");
        let n = [];
        if (t.length > 0) {
          const e = location.hash.replace("#", "");
          e.startsWith("tab-") && (n = e.replace("tab-", "").split("-")),
            t.forEach((t, e) => {
              t.classList.add("_tab-init"),
                t.setAttribute("data-tabs-index", e),
                t.addEventListener("click", i),
                (function (t) {
                  const e = t.querySelectorAll("[data-tabs-titles]>*"),
                    o = t.querySelectorAll("[data-tabs-body]>*"),
                    a = t.dataset.tabsIndex,
                    i = n[0] == a;
                  if (i) {
                    t.querySelector(
                      "[data-tabs-titles]>._tab-active"
                    ).classList.remove("_tab-active");
                  }
                  o.length > 0 &&
                    o.forEach((t, o) => {
                      e[o].setAttribute("data-tabs-title", ""),
                        t.setAttribute("data-tabs-item", ""),
                        i && o == n[1] && e[o].classList.add("_tab-active"),
                        (t.hidden = !e[o].classList.contains("_tab-active"));
                    });
                })(t);
            });
          let o = s(t, "tabs");
          o &&
            o.length &&
            o.forEach((t) => {
              t.matchMedia.addEventListener("change", function () {
                a(t.itemsArray, t.matchMedia);
              }),
                a(t.itemsArray, t.matchMedia);
            });
        }
        function a(t, e) {
          t.forEach((t) => {
            const n = (t = t.item).querySelector("[data-tabs-titles]"),
              o = t.querySelectorAll("[data-tabs-title]"),
              a = t.querySelector("[data-tabs-body]");
            t.querySelectorAll("[data-tabs-item]").forEach((i, r) => {
              e.matches
                ? (a.append(o[r]), a.append(i), t.classList.add("_tab-spoller"))
                : (n.append(o[r]), t.classList.remove("_tab-spoller"));
            });
          });
        }
        function i(t) {
          const n = t.target;
          if (n.closest("[data-tabs-title]")) {
            const a = n.closest("[data-tabs-title]"),
              i = a.closest("[data-tabs]");
            if (
              !a.classList.contains("_tab-active") &&
              !i.querySelectorAll("._slide").length
            ) {
              const t = i.querySelector("[data-tabs-title]._tab-active");
              t && t.classList.remove("_tab-active"),
                a.classList.add("_tab-active"),
                (function (t) {
                  const n = t.querySelectorAll("[data-tabs-title]"),
                    a = t.querySelectorAll("[data-tabs-item]"),
                    i = t.dataset.tabsIndex,
                    r = (function (t) {
                      if (t.hasAttribute("data-tabs-animate"))
                        return t.dataset.tabsAnimate > 0
                          ? t.dataset.tabsAnimate
                          : 500;
                    })(t);
                  a.length > 0 &&
                    a.forEach((t, a) => {
                      n[a].classList.contains("_tab-active")
                        ? (r ? o(t, r) : (t.hidden = !1),
                          t.closest(".popup") ||
                            (location.hash = `tab-${i}-${a}`))
                        : r
                        ? e(t, r)
                        : (t.hidden = !0);
                    });
                })(i);
            }
            t.preventDefault();
          }
        }
      })(),
      (function () {
        function e(t) {
          if ("click" === t.type) {
            const e = t.target;
            if (e.closest("[data-goto]")) {
              const n = e.closest("[data-goto]"),
                o = n.dataset.goto ? n.dataset.goto : "",
                a = !!n.hasAttribute("data-goto-header"),
                i = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : 500,
                r = n.dataset.gotoTop ? parseInt(n.dataset.gotoTop) : 0;
              c(o, a, i, r), t.preventDefault();
            }
          } else if ("watcherCallback" === t.type && t.detail) {
            const e = t.detail.entry,
              n = e.target;
            if ("navigator" === n.dataset.watch) {
              document.querySelector("[data-goto]._navigator-active");
              let t;
              if (n.id && document.querySelector(`[data-goto="#${n.id}"]`))
                t = document.querySelector(`[data-goto="#${n.id}"]`);
              else if (n.classList.length)
                for (let e = 0; e < n.classList.length; e++) {
                  const o = n.classList[e];
                  if (document.querySelector(`[data-goto=".${o}"]`)) {
                    t = document.querySelector(`[data-goto=".${o}"]`);
                    break;
                  }
                }
              e.isIntersecting
                ? t && t.classList.add("_navigator-active")
                : t && t.classList.remove("_navigator-active");
            }
          }
        }
        if (
          (document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e),
          t())
        ) {
          let e;
          document.querySelector(`#${t()}`)
            ? (e = `#${t()}`)
            : document.querySelector(`.${t()}`) && (e = `.${t()}`),
            e && c(e, !0, 500, 20);
        }
      })();
  })();
})();
