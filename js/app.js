/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Xi = u(() => {
      window.tram = (function (e) {
          function t(f, y) {
              var b = new E.Bare();
              return b.init(f, y);
          }
          function r(f) {
              return f.replace(/[A-Z]/g, function (y) {
                  return "-" + y.toLowerCase();
              });
          }
          function n(f) {
              var y = parseInt(f.slice(1), 16),
                  b = (y >> 16) & 255,
                  C = (y >> 8) & 255,
                  I = 255 & y;
              return [b, C, I];
          }
          function o(f, y, b) {
              return "#" + ((1 << 24) | (f << 16) | (y << 8) | b).toString(16).slice(1);
          }
          function i() {}
          function a(f, y) {
              p("Type warning: Expected: [" + f + "] Got: [" + typeof y + "] " + y);
          }
          function s(f, y, b) {
              p("Units do not match [" + f + "]: " + y + ", " + b);
          }
          function c(f, y, b) {
              if ((y !== void 0 && (b = y), f === void 0)) return b;
              var C = b;
              return Ve.test(f) || !Ye.test(f) ? (C = parseInt(f, 10)) : Ye.test(f) && (C = 1e3 * parseFloat(f)), 0 > C && (C = 0), C === C ? C : b;
          }
          function p(f) {
              ae.debug && window && window.console.warn(f);
          }
          function g(f) {
              for (var y = -1, b = f ? f.length : 0, C = []; ++y < b; ) {
                  var I = f[y];
                  I && C.push(I);
              }
              return C;
          }
          var h = (function (f, y, b) {
                  function C(ue) {
                      return typeof ue == "object";
                  }
                  function I(ue) {
                      return typeof ue == "function";
                  }
                  function q() {}
                  function te(ue, ye) {
                      function z() {
                          var Me = new de();
                          return I(Me.init) && Me.init.apply(Me, arguments), Me;
                      }
                      function de() {}
                      ye === b && ((ye = ue), (ue = Object)), (z.Bare = de);
                      var pe,
                          we = (q[f] = ue[f]),
                          st = (de[f] = z[f] = new q());
                      return (
                          (st.constructor = z),
                          (z.mixin = function (Me) {
                              return (de[f] = z[f] = te(z, Me)[f]), z;
                          }),
                          (z.open = function (Me) {
                              if (((pe = {}), I(Me) ? (pe = Me.call(z, st, we, z, ue)) : C(Me) && (pe = Me), C(pe))) for (var Ar in pe) y.call(pe, Ar) && (st[Ar] = pe[Ar]);
                              return I(st.init) || (st.init = ue), z;
                          }),
                          z.open(ye)
                      );
                  }
                  return te;
              })("prototype", {}.hasOwnProperty),
              m = {
                  ease: [
                      "ease",
                      function (f, y, b, C) {
                          var I = (f /= C) * f,
                              q = I * f;
                          return y + b * (-2.75 * q * I + 11 * I * I + -15.5 * q + 8 * I + 0.25 * f);
                      },
                  ],
                  "ease-in": [
                      "ease-in",
                      function (f, y, b, C) {
                          var I = (f /= C) * f,
                              q = I * f;
                          return y + b * (-1 * q * I + 3 * I * I + -3 * q + 2 * I);
                      },
                  ],
                  "ease-out": [
                      "ease-out",
                      function (f, y, b, C) {
                          var I = (f /= C) * f,
                              q = I * f;
                          return y + b * (0.3 * q * I + -1.6 * I * I + 2.2 * q + -1.8 * I + 1.9 * f);
                      },
                  ],
                  "ease-in-out": [
                      "ease-in-out",
                      function (f, y, b, C) {
                          var I = (f /= C) * f,
                              q = I * f;
                          return y + b * (2 * q * I + -5 * I * I + 2 * q + 2 * I);
                      },
                  ],
                  linear: [
                      "linear",
                      function (f, y, b, C) {
                          return (b * f) / C + y;
                      },
                  ],
                  "ease-in-quad": [
                      "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                      function (f, y, b, C) {
                          return b * (f /= C) * f + y;
                      },
                  ],
                  "ease-out-quad": [
                      "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                      function (f, y, b, C) {
                          return -b * (f /= C) * (f - 2) + y;
                      },
                  ],
                  "ease-in-out-quad": [
                      "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                      function (f, y, b, C) {
                          return (f /= C / 2) < 1 ? (b / 2) * f * f + y : (-b / 2) * (--f * (f - 2) - 1) + y;
                      },
                  ],
                  "ease-in-cubic": [
                      "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                      function (f, y, b, C) {
                          return b * (f /= C) * f * f + y;
                      },
                  ],
                  "ease-out-cubic": [
                      "cubic-bezier(0.215, 0.610, 0.355, 1)",
                      function (f, y, b, C) {
                          return b * ((f = f / C - 1) * f * f + 1) + y;
                      },
                  ],
                  "ease-in-out-cubic": [
                      "cubic-bezier(0.645, 0.045, 0.355, 1)",
                      function (f, y, b, C) {
                          return (f /= C / 2) < 1 ? (b / 2) * f * f * f + y : (b / 2) * ((f -= 2) * f * f + 2) + y;
                      },
                  ],
                  "ease-in-quart": [
                      "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                      function (f, y, b, C) {
                          return b * (f /= C) * f * f * f + y;
                      },
                  ],
                  "ease-out-quart": [
                      "cubic-bezier(0.165, 0.840, 0.440, 1)",
                      function (f, y, b, C) {
                          return -b * ((f = f / C - 1) * f * f * f - 1) + y;
                      },
                  ],
                  "ease-in-out-quart": [
                      "cubic-bezier(0.770, 0, 0.175, 1)",
                      function (f, y, b, C) {
                          return (f /= C / 2) < 1 ? (b / 2) * f * f * f * f + y : (-b / 2) * ((f -= 2) * f * f * f - 2) + y;
                      },
                  ],
                  "ease-in-quint": [
                      "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                      function (f, y, b, C) {
                          return b * (f /= C) * f * f * f * f + y;
                      },
                  ],
                  "ease-out-quint": [
                      "cubic-bezier(0.230, 1, 0.320, 1)",
                      function (f, y, b, C) {
                          return b * ((f = f / C - 1) * f * f * f * f + 1) + y;
                      },
                  ],
                  "ease-in-out-quint": [
                      "cubic-bezier(0.860, 0, 0.070, 1)",
                      function (f, y, b, C) {
                          return (f /= C / 2) < 1 ? (b / 2) * f * f * f * f * f + y : (b / 2) * ((f -= 2) * f * f * f * f + 2) + y;
                      },
                  ],
                  "ease-in-sine": [
                      "cubic-bezier(0.470, 0, 0.745, 0.715)",
                      function (f, y, b, C) {
                          return -b * Math.cos((f / C) * (Math.PI / 2)) + b + y;
                      },
                  ],
                  "ease-out-sine": [
                      "cubic-bezier(0.390, 0.575, 0.565, 1)",
                      function (f, y, b, C) {
                          return b * Math.sin((f / C) * (Math.PI / 2)) + y;
                      },
                  ],
                  "ease-in-out-sine": [
                      "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                      function (f, y, b, C) {
                          return (-b / 2) * (Math.cos((Math.PI * f) / C) - 1) + y;
                      },
                  ],
                  "ease-in-expo": [
                      "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                      function (f, y, b, C) {
                          return f === 0 ? y : b * Math.pow(2, 10 * (f / C - 1)) + y;
                      },
                  ],
                  "ease-out-expo": [
                      "cubic-bezier(0.190, 1, 0.220, 1)",
                      function (f, y, b, C) {
                          return f === C ? y + b : b * (-Math.pow(2, (-10 * f) / C) + 1) + y;
                      },
                  ],
                  "ease-in-out-expo": [
                      "cubic-bezier(1, 0, 0, 1)",
                      function (f, y, b, C) {
                          return f === 0 ? y : f === C ? y + b : (f /= C / 2) < 1 ? (b / 2) * Math.pow(2, 10 * (f - 1)) + y : (b / 2) * (-Math.pow(2, -10 * --f) + 2) + y;
                      },
                  ],
                  "ease-in-circ": [
                      "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                      function (f, y, b, C) {
                          return -b * (Math.sqrt(1 - (f /= C) * f) - 1) + y;
                      },
                  ],
                  "ease-out-circ": [
                      "cubic-bezier(0.075, 0.820, 0.165, 1)",
                      function (f, y, b, C) {
                          return b * Math.sqrt(1 - (f = f / C - 1) * f) + y;
                      },
                  ],
                  "ease-in-out-circ": [
                      "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                      function (f, y, b, C) {
                          return (f /= C / 2) < 1 ? (-b / 2) * (Math.sqrt(1 - f * f) - 1) + y : (b / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + y;
                      },
                  ],
                  "ease-in-back": [
                      "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                      function (f, y, b, C, I) {
                          return I === void 0 && (I = 1.70158), b * (f /= C) * f * ((I + 1) * f - I) + y;
                      },
                  ],
                  "ease-out-back": [
                      "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                      function (f, y, b, C, I) {
                          return I === void 0 && (I = 1.70158), b * ((f = f / C - 1) * f * ((I + 1) * f + I) + 1) + y;
                      },
                  ],
                  "ease-in-out-back": [
                      "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                      function (f, y, b, C, I) {
                          return I === void 0 && (I = 1.70158), (f /= C / 2) < 1 ? (b / 2) * f * f * (((I *= 1.525) + 1) * f - I) + y : (b / 2) * ((f -= 2) * f * (((I *= 1.525) + 1) * f + I) + 2) + y;
                      },
                  ],
              },
              T = { "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)", "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)", "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)" },
              R = document,
              w = window,
              F = "bkwld-tram",
              N = /[\-\.0-9]/g,
              x = /[A-Z]/,
              S = "number",
              P = /^(rgb|#)/,
              L = /(em|cm|mm|in|pt|pc|px)$/,
              M = /(em|cm|mm|in|pt|pc|px|%)$/,
              H = /(deg|rad|turn)$/,
              Q = "unitless",
              Z = /(all|none) 0s ease 0s/,
              se = /^(width|height)$/,
              re = " ",
              W = R.createElement("a"),
              O = ["Webkit", "Moz", "O", "ms"],
              U = ["-webkit-", "-moz-", "-o-", "-ms-"],
              V = function (f) {
                  if (f in W.style) return { dom: f, css: f };
                  var y,
                      b,
                      C = "",
                      I = f.split("-");
                  for (y = 0; y < I.length; y++) C += I[y].charAt(0).toUpperCase() + I[y].slice(1);
                  for (y = 0; y < O.length; y++) if (((b = O[y] + C), b in W.style)) return { dom: b, css: U[y] + f };
              },
              j = (t.support = { bind: Function.prototype.bind, transform: V("transform"), transition: V("transition"), backface: V("backface-visibility"), timing: V("transition-timing-function") });
          if (j.transition) {
              var ee = j.timing.dom;
              if (((W.style[ee] = m["ease-in-back"][0]), !W.style[ee])) for (var ne in T) m[ne][0] = T[ne];
          }
          var X = (t.frame = (function () {
                  var f = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.oRequestAnimationFrame || w.msRequestAnimationFrame;
                  return f && j.bind
                      ? f.bind(w)
                      : function (y) {
                            w.setTimeout(y, 16);
                        };
              })()),
              Y = (t.now = (function () {
                  var f = w.performance,
                      y = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
                  return y && j.bind
                      ? y.bind(f)
                      : Date.now ||
                            function () {
                                return +new Date();
                            };
              })()),
              d = h(function (f) {
                  function y(ie, ve) {
                      var Oe = g(("" + ie).split(re)),
                          Ee = Oe[0];
                      ve = ve || {};
                      var Fe = K[Ee];
                      if (!Fe) return p("Unsupported property: " + Ee);
                      if (!ve.weak || !this.props[Ee]) {
                          var $e = Fe[0],
                              ke = this.props[Ee];
                          return ke || (ke = this.props[Ee] = new $e.Bare()), ke.init(this.$el, Oe, Fe, ve), ke;
                      }
                  }
                  function b(ie, ve, Oe) {
                      if (ie) {
                          var Ee = typeof ie;
                          if ((ve || (this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1)), Ee == "number" && ve)) return (this.timer = new oe({ duration: ie, context: this, complete: q })), void (this.active = !0);
                          if (Ee == "string" && ve) {
                              switch (ie) {
                                  case "hide":
                                      z.call(this);
                                      break;
                                  case "stop":
                                      te.call(this);
                                      break;
                                  case "redraw":
                                      de.call(this);
                                      break;
                                  default:
                                      y.call(this, ie, Oe && Oe[1]);
                              }
                              return q.call(this);
                          }
                          if (Ee == "function") return void ie.call(this, this);
                          if (Ee == "object") {
                              var Fe = 0;
                              st.call(
                                  this,
                                  ie,
                                  function (Ae, Hm) {
                                      Ae.span > Fe && (Fe = Ae.span), Ae.stop(), Ae.animate(Hm);
                                  },
                                  function (Ae) {
                                      "wait" in Ae && (Fe = c(Ae.wait, 0));
                                  }
                              ),
                                  we.call(this),
                                  Fe > 0 && ((this.timer = new oe({ duration: Fe, context: this })), (this.active = !0), ve && (this.timer.complete = q));
                              var $e = this,
                                  ke = !1,
                                  pn = {};
                              X(function () {
                                  st.call($e, ie, function (Ae) {
                                      Ae.active && ((ke = !0), (pn[Ae.name] = Ae.nextStyle));
                                  }),
                                      ke && $e.$el.css(pn);
                              });
                          }
                      }
                  }
                  function C(ie) {
                      (ie = c(ie, 0)), this.active ? this.queue.push({ options: ie }) : ((this.timer = new oe({ duration: ie, context: this, complete: q })), (this.active = !0));
                  }
                  function I(ie) {
                      return this.active ? (this.queue.push({ options: ie, args: arguments }), void (this.timer.complete = q)) : p("No active transition timer. Use start() or wait() before then().");
                  }
                  function q() {
                      if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
                          var ie = this.queue.shift();
                          b.call(this, ie.options, !0, ie.args);
                      }
                  }
                  function te(ie) {
                      this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1);
                      var ve;
                      typeof ie == "string" ? ((ve = {}), (ve[ie] = 1)) : (ve = typeof ie == "object" && ie != null ? ie : this.props), st.call(this, ve, Me), we.call(this);
                  }
                  function ue(ie) {
                      te.call(this, ie), st.call(this, ie, Ar, km);
                  }
                  function ye(ie) {
                      typeof ie != "string" && (ie = "block"), (this.el.style.display = ie);
                  }
                  function z() {
                      te.call(this), (this.el.style.display = "none");
                  }
                  function de() {
                      this.el.offsetHeight;
                  }
                  function pe() {
                      te.call(this), e.removeData(this.el, F), (this.$el = this.el = null);
                  }
                  function we() {
                      var ie,
                          ve,
                          Oe = [];
                      this.upstream && Oe.push(this.upstream);
                      for (ie in this.props) (ve = this.props[ie]), ve.active && Oe.push(ve.string);
                      (Oe = Oe.join(",")), this.style !== Oe && ((this.style = Oe), (this.el.style[j.transition.dom] = Oe));
                  }
                  function st(ie, ve, Oe) {
                      var Ee,
                          Fe,
                          $e,
                          ke,
                          pn = ve !== Me,
                          Ae = {};
                      for (Ee in ie) ($e = ie[Ee]), Ee in ge ? (Ae.transform || (Ae.transform = {}), (Ae.transform[Ee] = $e)) : (x.test(Ee) && (Ee = r(Ee)), Ee in K ? (Ae[Ee] = $e) : (ke || (ke = {}), (ke[Ee] = $e)));
                      for (Ee in Ae) {
                          if ((($e = Ae[Ee]), (Fe = this.props[Ee]), !Fe)) {
                              if (!pn) continue;
                              Fe = y.call(this, Ee);
                          }
                          ve.call(this, Fe, $e);
                      }
                      Oe && ke && Oe.call(this, ke);
                  }
                  function Me(ie) {
                      ie.stop();
                  }
                  function Ar(ie, ve) {
                      ie.set(ve);
                  }
                  function km(ie) {
                      this.$el.css(ie);
                  }
                  function Qe(ie, ve) {
                      f[ie] = function () {
                          return this.children ? Bm.call(this, ve, arguments) : (this.el && ve.apply(this, arguments), this);
                      };
                  }
                  function Bm(ie, ve) {
                      var Oe,
                          Ee = this.children.length;
                      for (Oe = 0; Ee > Oe; Oe++) ie.apply(this.children[Oe], ve);
                      return this;
                  }
                  (f.init = function (ie) {
                      if (((this.$el = e(ie)), (this.el = this.$el[0]), (this.props = {}), (this.queue = []), (this.style = ""), (this.active = !1), ae.keepInherited && !ae.fallback)) {
                          var ve = B(this.el, "transition");
                          ve && !Z.test(ve) && (this.upstream = ve);
                      }
                      j.backface && ae.hideBackface && v(this.el, j.backface.css, "hidden");
                  }),
                      Qe("add", y),
                      Qe("start", b),
                      Qe("wait", C),
                      Qe("then", I),
                      Qe("next", q),
                      Qe("stop", te),
                      Qe("set", ue),
                      Qe("show", ye),
                      Qe("hide", z),
                      Qe("redraw", de),
                      Qe("destroy", pe);
              }),
              E = h(d, function (f) {
                  function y(b, C) {
                      var I = e.data(b, F) || e.data(b, F, new d.Bare());
                      return I.el || I.init(b), C ? I.start(C) : I;
                  }
                  f.init = function (b, C) {
                      var I = e(b);
                      if (!I.length) return this;
                      if (I.length === 1) return y(I[0], C);
                      var q = [];
                      return (
                          I.each(function (te, ue) {
                              q.push(y(ue, C));
                          }),
                          (this.children = q),
                          this
                      );
                  };
              }),
              _ = h(function (f) {
                  function y() {
                      var q = this.get();
                      this.update("auto");
                      var te = this.get();
                      return this.update(q), te;
                  }
                  function b(q, te, ue) {
                      return te !== void 0 && (ue = te), q in m ? q : ue;
                  }
                  function C(q) {
                      var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(q);
                      return (te ? o(te[1], te[2], te[3]) : q).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                  }
                  var I = { duration: 500, ease: "ease", delay: 0 };
                  (f.init = function (q, te, ue, ye) {
                      (this.$el = q), (this.el = q[0]);
                      var z = te[0];
                      ue[2] && (z = ue[2]),
                          J[z] && (z = J[z]),
                          (this.name = z),
                          (this.type = ue[1]),
                          (this.duration = c(te[1], this.duration, I.duration)),
                          (this.ease = b(te[2], this.ease, I.ease)),
                          (this.delay = c(te[3], this.delay, I.delay)),
                          (this.span = this.duration + this.delay),
                          (this.active = !1),
                          (this.nextStyle = null),
                          (this.auto = se.test(this.name)),
                          (this.unit = ye.unit || this.unit || ae.defaultUnit),
                          (this.angle = ye.angle || this.angle || ae.defaultAngle),
                          ae.fallback || ye.fallback
                              ? (this.animate = this.fallback)
                              : ((this.animate = this.transition), (this.string = this.name + re + this.duration + "ms" + (this.ease != "ease" ? re + m[this.ease][0] : "") + (this.delay ? re + this.delay + "ms" : "")));
                  }),
                      (f.set = function (q) {
                          (q = this.convert(q, this.type)), this.update(q), this.redraw();
                      }),
                      (f.transition = function (q) {
                          (this.active = !0), (q = this.convert(q, this.type)), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), q == "auto" && (q = y.call(this))), (this.nextStyle = q);
                      }),
                      (f.fallback = function (q) {
                          var te = this.el.style[this.name] || this.convert(this.get(), this.type);
                          (q = this.convert(q, this.type)),
                              this.auto && (te == "auto" && (te = this.convert(this.get(), this.type)), q == "auto" && (q = y.call(this))),
                              (this.tween = new A({ from: te, to: q, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this }));
                      }),
                      (f.get = function () {
                          return B(this.el, this.name);
                      }),
                      (f.update = function (q) {
                          v(this.el, this.name, q);
                      }),
                      (f.stop = function () {
                          (this.active || this.nextStyle) && ((this.active = !1), (this.nextStyle = null), v(this.el, this.name, this.get()));
                          var q = this.tween;
                          q && q.context && q.destroy();
                      }),
                      (f.convert = function (q, te) {
                          if (q == "auto" && this.auto) return q;
                          var ue,
                              ye = typeof q == "number",
                              z = typeof q == "string";
                          switch (te) {
                              case S:
                                  if (ye) return q;
                                  if (z && q.replace(N, "") === "") return +q;
                                  ue = "number(unitless)";
                                  break;
                              case P:
                                  if (z) {
                                      if (q === "" && this.original) return this.original;
                                      if (te.test(q)) return q.charAt(0) == "#" && q.length == 7 ? q : C(q);
                                  }
                                  ue = "hex or rgb string";
                                  break;
                              case L:
                                  if (ye) return q + this.unit;
                                  if (z && te.test(q)) return q;
                                  ue = "number(px) or string(unit)";
                                  break;
                              case M:
                                  if (ye) return q + this.unit;
                                  if (z && te.test(q)) return q;
                                  ue = "number(px) or string(unit or %)";
                                  break;
                              case H:
                                  if (ye) return q + this.angle;
                                  if (z && te.test(q)) return q;
                                  ue = "number(deg) or string(angle)";
                                  break;
                              case Q:
                                  if (ye || (z && M.test(q))) return q;
                                  ue = "number(unitless) or string(unit or %)";
                          }
                          return a(ue, q), q;
                      }),
                      (f.redraw = function () {
                          this.el.offsetHeight;
                      });
              }),
              l = h(_, function (f, y) {
                  f.init = function () {
                      y.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), P));
                  };
              }),
              G = h(_, function (f, y) {
                  (f.init = function () {
                      y.init.apply(this, arguments), (this.animate = this.fallback);
                  }),
                      (f.get = function () {
                          return this.$el[this.name]();
                      }),
                      (f.update = function (b) {
                          this.$el[this.name](b);
                      });
              }),
              k = h(_, function (f, y) {
                  function b(C, I) {
                      var q, te, ue, ye, z;
                      for (q in C) (ye = ge[q]), (ue = ye[0]), (te = ye[1] || q), (z = this.convert(C[q], ue)), I.call(this, te, z, ue);
                  }
                  (f.init = function () {
                      y.init.apply(this, arguments), this.current || ((this.current = {}), ge.perspective && ae.perspective && ((this.current.perspective = ae.perspective), v(this.el, this.name, this.style(this.current)), this.redraw()));
                  }),
                      (f.set = function (C) {
                          b.call(this, C, function (I, q) {
                              this.current[I] = q;
                          }),
                              v(this.el, this.name, this.style(this.current)),
                              this.redraw();
                      }),
                      (f.transition = function (C) {
                          var I = this.values(C);
                          this.tween = new he({ current: this.current, values: I, duration: this.duration, delay: this.delay, ease: this.ease });
                          var q,
                              te = {};
                          for (q in this.current) te[q] = q in I ? I[q] : this.current[q];
                          (this.active = !0), (this.nextStyle = this.style(te));
                      }),
                      (f.fallback = function (C) {
                          var I = this.values(C);
                          this.tween = new he({ current: this.current, values: I, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this });
                      }),
                      (f.update = function () {
                          v(this.el, this.name, this.style(this.current));
                      }),
                      (f.style = function (C) {
                          var I,
                              q = "";
                          for (I in C) q += I + "(" + C[I] + ") ";
                          return q;
                      }),
                      (f.values = function (C) {
                          var I,
                              q = {};
                          return (
                              b.call(this, C, function (te, ue, ye) {
                                  (q[te] = ue), this.current[te] === void 0 && ((I = 0), ~te.indexOf("scale") && (I = 1), (this.current[te] = this.convert(I, ye)));
                              }),
                              q
                          );
                      });
              }),
              A = h(function (f) {
                  function y(z) {
                      ue.push(z) === 1 && X(b);
                  }
                  function b() {
                      var z,
                          de,
                          pe,
                          we = ue.length;
                      if (we) for (X(b), de = Y(), z = we; z--; ) (pe = ue[z]), pe && pe.render(de);
                  }
                  function C(z) {
                      var de,
                          pe = e.inArray(z, ue);
                      pe >= 0 && ((de = ue.slice(pe + 1)), (ue.length = pe), de.length && (ue = ue.concat(de)));
                  }
                  function I(z) {
                      return Math.round(z * ye) / ye;
                  }
                  function q(z, de, pe) {
                      return o(z[0] + pe * (de[0] - z[0]), z[1] + pe * (de[1] - z[1]), z[2] + pe * (de[2] - z[2]));
                  }
                  var te = { ease: m.ease[1], from: 0, to: 1 };
                  (f.init = function (z) {
                      (this.duration = z.duration || 0), (this.delay = z.delay || 0);
                      var de = z.ease || te.ease;
                      m[de] && (de = m[de][1]), typeof de != "function" && (de = te.ease), (this.ease = de), (this.update = z.update || i), (this.complete = z.complete || i), (this.context = z.context || this), (this.name = z.name);
                      var pe = z.from,
                          we = z.to;
                      pe === void 0 && (pe = te.from),
                          we === void 0 && (we = te.to),
                          (this.unit = z.unit || ""),
                          typeof pe == "number" && typeof we == "number" ? ((this.begin = pe), (this.change = we - pe)) : this.format(we, pe),
                          (this.value = this.begin + this.unit),
                          (this.start = Y()),
                          z.autoplay !== !1 && this.play();
                  }),
                      (f.play = function () {
                          this.active || (this.start || (this.start = Y()), (this.active = !0), y(this));
                      }),
                      (f.stop = function () {
                          this.active && ((this.active = !1), C(this));
                      }),
                      (f.render = function (z) {
                          var de,
                              pe = z - this.start;
                          if (this.delay) {
                              if (pe <= this.delay) return;
                              pe -= this.delay;
                          }
                          if (pe < this.duration) {
                              var we = this.ease(pe, 0, 1, this.duration);
                              return (de = this.startRGB ? q(this.startRGB, this.endRGB, we) : I(this.begin + we * this.change)), (this.value = de + this.unit), void this.update.call(this.context, this.value);
                          }
                          (de = this.endHex || this.begin + this.change), (this.value = de + this.unit), this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
                      }),
                      (f.format = function (z, de) {
                          if (((de += ""), (z += ""), z.charAt(0) == "#")) return (this.startRGB = n(de)), (this.endRGB = n(z)), (this.endHex = z), (this.begin = 0), void (this.change = 1);
                          if (!this.unit) {
                              var pe = de.replace(N, ""),
                                  we = z.replace(N, "");
                              pe !== we && s("tween", de, z), (this.unit = pe);
                          }
                          (de = parseFloat(de)), (z = parseFloat(z)), (this.begin = this.value = de), (this.change = z - de);
                      }),
                      (f.destroy = function () {
                          this.stop(), (this.context = null), (this.ease = this.update = this.complete = i);
                      });
                  var ue = [],
                      ye = 1e3;
              }),
              oe = h(A, function (f) {
                  (f.init = function (y) {
                      (this.duration = y.duration || 0), (this.complete = y.complete || i), (this.context = y.context), this.play();
                  }),
                      (f.render = function (y) {
                          var b = y - this.start;
                          b < this.duration || (this.complete.call(this.context), this.destroy());
                      });
              }),
              he = h(A, function (f, y) {
                  (f.init = function (b) {
                      (this.context = b.context), (this.update = b.update), (this.tweens = []), (this.current = b.current);
                      var C, I;
                      for (C in b.values) (I = b.values[C]), this.current[C] !== I && this.tweens.push(new A({ name: C, from: this.current[C], to: I, duration: b.duration, delay: b.delay, ease: b.ease, autoplay: !1 }));
                      this.play();
                  }),
                      (f.render = function (b) {
                          var C,
                              I,
                              q = this.tweens.length,
                              te = !1;
                          for (C = q; C--; ) (I = this.tweens[C]), I.context && (I.render(b), (this.current[I.name] = I.value), (te = !0));
                          return te ? void (this.update && this.update.call(this.context)) : this.destroy();
                      }),
                      (f.destroy = function () {
                          if ((y.destroy.call(this), this.tweens)) {
                              var b,
                                  C = this.tweens.length;
                              for (b = C; b--; ) this.tweens[b].destroy();
                              (this.tweens = null), (this.current = null);
                          }
                      });
              }),
              ae = (t.config = { debug: !1, defaultUnit: "px", defaultAngle: "deg", keepInherited: !1, hideBackface: !1, perspective: "", fallback: !j.transition, agentTests: [] });
          (t.fallback = function (f) {
              if (!j.transition) return (ae.fallback = !0);
              ae.agentTests.push("(" + f + ")");
              var y = new RegExp(ae.agentTests.join("|"), "i");
              ae.fallback = y.test(navigator.userAgent);
          }),
              t.fallback("6.0.[2-5] Safari"),
              (t.tween = function (f) {
                  return new A(f);
              }),
              (t.delay = function (f, y, b) {
                  return new oe({ complete: y, duration: f, context: b });
              }),
              (e.fn.tram = function (f) {
                  return t.call(null, this, f);
              });
          var v = e.style,
              B = e.css,
              J = { transform: j.transform && j.transform.css },
              K = {
                  color: [l, P],
                  background: [l, P, "background-color"],
                  "outline-color": [l, P],
                  "border-color": [l, P],
                  "border-top-color": [l, P],
                  "border-right-color": [l, P],
                  "border-bottom-color": [l, P],
                  "border-left-color": [l, P],
                  "border-width": [_, L],
                  "border-top-width": [_, L],
                  "border-right-width": [_, L],
                  "border-bottom-width": [_, L],
                  "border-left-width": [_, L],
                  "border-spacing": [_, L],
                  "letter-spacing": [_, L],
                  margin: [_, L],
                  "margin-top": [_, L],
                  "margin-right": [_, L],
                  "margin-bottom": [_, L],
                  "margin-left": [_, L],
                  padding: [_, L],
                  "padding-top": [_, L],
                  "padding-right": [_, L],
                  "padding-bottom": [_, L],
                  "padding-left": [_, L],
                  "outline-width": [_, L],
                  opacity: [_, S],
                  top: [_, M],
                  right: [_, M],
                  bottom: [_, M],
                  left: [_, M],
                  "font-size": [_, M],
                  "text-indent": [_, M],
                  "word-spacing": [_, M],
                  width: [_, M],
                  "min-width": [_, M],
                  "max-width": [_, M],
                  height: [_, M],
                  "min-height": [_, M],
                  "max-height": [_, M],
                  "line-height": [_, Q],
                  "scroll-top": [G, S, "scrollTop"],
                  "scroll-left": [G, S, "scrollLeft"],
              },
              ge = {};
          j.transform && ((K.transform = [k]), (ge = { x: [M, "translateX"], y: [M, "translateY"], rotate: [H], rotateX: [H], rotateY: [H], scale: [S], scaleX: [S], scaleY: [S], skew: [H], skewX: [H], skewY: [H] })),
              j.transform && j.backface && ((ge.z = [M, "translateZ"]), (ge.rotateZ = [H]), (ge.scaleZ = [S]), (ge.perspective = [L]));
          var Ve = /ms/,
              Ye = /s|\./;
          return (e.tram = t);
      })(window.jQuery);
  });
  var Ss = u((fk, bs) => {
      var jm = window.$,
          Km = Xi() && jm.tram;
      bs.exports = (function () {
          var e = {};
          e.VERSION = "1.6.0-Webflow";
          var t = {},
              r = Array.prototype,
              n = Object.prototype,
              o = Function.prototype,
              i = r.push,
              a = r.slice,
              s = r.concat,
              c = n.toString,
              p = n.hasOwnProperty,
              g = r.forEach,
              h = r.map,
              m = r.reduce,
              T = r.reduceRight,
              R = r.filter,
              w = r.every,
              F = r.some,
              N = r.indexOf,
              x = r.lastIndexOf,
              S = Array.isArray,
              P = Object.keys,
              L = o.bind,
              M = (e.each = e.forEach = function (O, U, V) {
                  if (O == null) return O;
                  if (g && O.forEach === g) O.forEach(U, V);
                  else if (O.length === +O.length) {
                      for (var j = 0, ee = O.length; j < ee; j++) if (U.call(V, O[j], j, O) === t) return;
                  } else for (var ne = e.keys(O), j = 0, ee = ne.length; j < ee; j++) if (U.call(V, O[ne[j]], ne[j], O) === t) return;
                  return O;
              });
          (e.map = e.collect = function (O, U, V) {
              var j = [];
              return O == null
                  ? j
                  : h && O.map === h
                  ? O.map(U, V)
                  : (M(O, function (ee, ne, X) {
                        j.push(U.call(V, ee, ne, X));
                    }),
                    j);
          }),
              (e.find = e.detect = function (O, U, V) {
                  var j;
                  return (
                      H(O, function (ee, ne, X) {
                          if (U.call(V, ee, ne, X)) return (j = ee), !0;
                      }),
                      j
                  );
              }),
              (e.filter = e.select = function (O, U, V) {
                  var j = [];
                  return O == null
                      ? j
                      : R && O.filter === R
                      ? O.filter(U, V)
                      : (M(O, function (ee, ne, X) {
                            U.call(V, ee, ne, X) && j.push(ee);
                        }),
                        j);
              });
          var H = (e.some = e.any = function (O, U, V) {
              U || (U = e.identity);
              var j = !1;
              return O == null
                  ? j
                  : F && O.some === F
                  ? O.some(U, V)
                  : (M(O, function (ee, ne, X) {
                        if (j || (j = U.call(V, ee, ne, X))) return t;
                    }),
                    !!j);
          });
          (e.contains = e.include = function (O, U) {
              return O == null
                  ? !1
                  : N && O.indexOf === N
                  ? O.indexOf(U) != -1
                  : H(O, function (V) {
                        return V === U;
                    });
          }),
              (e.delay = function (O, U) {
                  var V = a.call(arguments, 2);
                  return setTimeout(function () {
                      return O.apply(null, V);
                  }, U);
              }),
              (e.defer = function (O) {
                  return e.delay.apply(e, [O, 1].concat(a.call(arguments, 1)));
              }),
              (e.throttle = function (O) {
                  var U, V, j;
                  return function () {
                      U ||
                          ((U = !0),
                          (V = arguments),
                          (j = this),
                          Km.frame(function () {
                              (U = !1), O.apply(j, V);
                          }));
                  };
              }),
              (e.debounce = function (O, U, V) {
                  var j,
                      ee,
                      ne,
                      X,
                      Y,
                      d = function () {
                          var E = e.now() - X;
                          E < U ? (j = setTimeout(d, U - E)) : ((j = null), V || ((Y = O.apply(ne, ee)), (ne = ee = null)));
                      };
                  return function () {
                      (ne = this), (ee = arguments), (X = e.now());
                      var E = V && !j;
                      return j || (j = setTimeout(d, U)), E && ((Y = O.apply(ne, ee)), (ne = ee = null)), Y;
                  };
              }),
              (e.defaults = function (O) {
                  if (!e.isObject(O)) return O;
                  for (var U = 1, V = arguments.length; U < V; U++) {
                      var j = arguments[U];
                      for (var ee in j) O[ee] === void 0 && (O[ee] = j[ee]);
                  }
                  return O;
              }),
              (e.keys = function (O) {
                  if (!e.isObject(O)) return [];
                  if (P) return P(O);
                  var U = [];
                  for (var V in O) e.has(O, V) && U.push(V);
                  return U;
              }),
              (e.has = function (O, U) {
                  return p.call(O, U);
              }),
              (e.isObject = function (O) {
                  return O === Object(O);
              }),
              (e.now =
                  Date.now ||
                  function () {
                      return new Date().getTime();
                  }),
              (e.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
          var Q = /(.)^/,
              Z = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
              se = /\\|'|\r|\n|\u2028|\u2029/g,
              re = function (O) {
                  return "\\" + Z[O];
              },
              W = /^\s*(\w|\$)+\s*$/;
          return (
              (e.template = function (O, U, V) {
                  !U && V && (U = V), (U = e.defaults({}, U, e.templateSettings));
                  var j = RegExp([(U.escape || Q).source, (U.interpolate || Q).source, (U.evaluate || Q).source].join("|") + "|$", "g"),
                      ee = 0,
                      ne = "__p+='";
                  O.replace(j, function (E, _, l, G, k) {
                      return (
                          (ne += O.slice(ee, k).replace(se, re)),
                          (ee = k + E.length),
                          _
                              ? (ne +=
                                    `'+
((__t=(` +
                                    _ +
                                    `))==null?'':_.escape(__t))+
'`)
                              : l
                              ? (ne +=
                                    `'+
((__t=(` +
                                    l +
                                    `))==null?'':__t)+
'`)
                              : G &&
                                (ne +=
                                    `';
` +
                                    G +
                                    `
__p+='`),
                          E
                      );
                  }),
                      (ne += `';
`);
                  var X = U.variable;
                  if (X) {
                      if (!W.test(X)) throw new Error("variable is not a bare identifier: " + X);
                  } else
                      (ne =
                          `with(obj||{}){
` +
                          ne +
                          `}
`),
                          (X = "obj");
                  ne =
                      `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
                      ne +
                      `return __p;
`;
                  var Y;
                  try {
                      Y = new Function(U.variable || "obj", "_", ne);
                  } catch (E) {
                      throw ((E.source = ne), E);
                  }
                  var d = function (E) {
                      return Y.call(this, E, e);
                  };
                  return (
                      (d.source =
                          "function(" +
                          X +
                          `){
` +
                          ne +
                          "}"),
                      d
                  );
              }),
              e
          );
      })();
  });
  var Ge = u((dk, Ls) => {
      var _e = {},
          Qt = {},
          $t = [],
          ki = window.Webflow || [],
          Ot = window.jQuery,
          Je = Ot(window),
          zm = Ot(document),
          ut = Ot.isFunction,
          Ze = (_e._ = Ss()),
          As = (_e.tram = Xi() && Ot.tram),
          hn = !1,
          Bi = !1;
      As.config.hideBackface = !1;
      As.config.keepInherited = !0;
      _e.define = function (e, t, r) {
          Qt[e] && Cs(Qt[e]);
          var n = (Qt[e] = t(Ot, Ze, r) || {});
          return Rs(n), n;
      };
      _e.require = function (e) {
          return Qt[e];
      };
      function Rs(e) {
          _e.env() && (ut(e.design) && Je.on("__wf_design", e.design), ut(e.preview) && Je.on("__wf_preview", e.preview)), ut(e.destroy) && Je.on("__wf_destroy", e.destroy), e.ready && ut(e.ready) && Ym(e);
      }
      function Ym(e) {
          if (hn) {
              e.ready();
              return;
          }
          Ze.contains($t, e.ready) || $t.push(e.ready);
      }
      function Cs(e) {
          ut(e.design) && Je.off("__wf_design", e.design), ut(e.preview) && Je.off("__wf_preview", e.preview), ut(e.destroy) && Je.off("__wf_destroy", e.destroy), e.ready && ut(e.ready) && Qm(e);
      }
      function Qm(e) {
          $t = Ze.filter($t, function (t) {
              return t !== e.ready;
          });
      }
      _e.push = function (e) {
          if (hn) {
              ut(e) && e();
              return;
          }
          ki.push(e);
      };
      _e.env = function (e) {
          var t = window.__wf_design,
              r = typeof t < "u";
          if (!e) return r;
          if (e === "design") return r && t;
          if (e === "preview") return r && !t;
          if (e === "slug") return r && window.__wf_slug;
          if (e === "editor") return window.WebflowEditor;
          if (e === "test") return window.__wf_test;
          if (e === "frame") return window !== window.top;
      };
      var vn = navigator.userAgent.toLowerCase(),
          Ns = (_e.env.touch = "ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
          $m = (_e.env.chrome = /chrome/.test(vn) && /Google/.test(navigator.vendor) && parseInt(vn.match(/chrome\/(\d+)\./)[1], 10)),
          Zm = (_e.env.ios = /(ipod|iphone|ipad)/.test(vn));
      _e.env.safari = /safari/.test(vn) && !$m && !Zm;
      var Vi;
      Ns &&
          zm.on("touchstart mousedown", function (e) {
              Vi = e.target;
          });
      _e.validClick = Ns
          ? function (e) {
                return e === Vi || Ot.contains(e, Vi);
            }
          : function () {
                return !0;
            };
      var xs = "resize.webflow orientationchange.webflow load.webflow",
          Jm = "scroll.webflow " + xs;
      _e.resize = Hi(Je, xs);
      _e.scroll = Hi(Je, Jm);
      _e.redraw = Hi();
      function Hi(e, t) {
          var r = [],
              n = {};
          return (
              (n.up = Ze.throttle(function (o) {
                  Ze.each(r, function (i) {
                      i(o);
                  });
              })),
              e && t && e.on(t, n.up),
              (n.on = function (o) {
                  typeof o == "function" && (Ze.contains(r, o) || r.push(o));
              }),
              (n.off = function (o) {
                  if (!arguments.length) {
                      r = [];
                      return;
                  }
                  r = Ze.filter(r, function (i) {
                      return i !== o;
                  });
              }),
              n
          );
      }
      _e.location = function (e) {
          window.location = e;
      };
      _e.env() && (_e.location = function () {});
      _e.ready = function () {
          (hn = !0), Bi ? eT() : Ze.each($t, ws), Ze.each(ki, ws), _e.resize.up();
      };
      function ws(e) {
          ut(e) && e();
      }
      function eT() {
          (Bi = !1), Ze.each(Qt, Rs);
      }
      var Dt;
      _e.load = function (e) {
          Dt.then(e);
      };
      function qs() {
          Dt && (Dt.reject(), Je.off("load", Dt.resolve)), (Dt = new Ot.Deferred()), Je.on("load", Dt.resolve);
      }
      _e.destroy = function (e) {
          (e = e || {}), (Bi = !0), Je.triggerHandler("__wf_destroy"), e.domready != null && (hn = e.domready), Ze.each(Qt, Cs), _e.resize.off(), _e.scroll.off(), _e.redraw.off(), ($t = []), (ki = []), Dt.state() === "pending" && qs();
      };
      Ot(_e.ready);
      qs();
      Ls.exports = window.Webflow = _e;
  });
  var Ds = u((pk, Ps) => {
      var gn = Ge();
      gn.define(
          "scroll",
          (Ps.exports = function (e) {
              var t = { WF_CLICK_EMPTY: "click.wf-empty-link", WF_CLICK_SCROLL: "click.wf-scroll" },
                  r = window.location,
                  n = R() ? null : window.history,
                  o = e(window),
                  i = e(document),
                  a = e(document.body),
                  s =
                      window.requestAnimationFrame ||
                      window.mozRequestAnimationFrame ||
                      window.webkitRequestAnimationFrame ||
                      function (W) {
                          window.setTimeout(W, 15);
                      },
                  c = gn.env("editor") ? ".w-editor-body" : "body",
                  p = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
                  g = 'a[href="#"]',
                  h = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
                  m = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                  T = document.createElement("style");
              T.appendChild(document.createTextNode(m));
              function R() {
                  try {
                      return !!window.frameElement;
                  } catch {
                      return !0;
                  }
              }
              var w = /^#[a-zA-Z0-9][\w:.-]*$/;
              function F(W) {
                  return w.test(W.hash) && W.host + W.pathname === r.host + r.pathname;
              }
              let N = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
              function x() {
                  return document.body.getAttribute("data-wf-scroll-motion") === "none" || N.matches;
              }
              function S(W, O) {
                  var U;
                  switch (O) {
                      case "add":
                          (U = W.attr("tabindex")), U ? W.attr("data-wf-tabindex-swap", U) : W.attr("tabindex", "-1");
                          break;
                      case "remove":
                          (U = W.attr("data-wf-tabindex-swap")), U ? (W.attr("tabindex", U), W.removeAttr("data-wf-tabindex-swap")) : W.removeAttr("tabindex");
                          break;
                  }
                  W.toggleClass("wf-force-outline-none", O === "add");
              }
              function P(W) {
                  var O = W.currentTarget;
                  if (!(gn.env("design") || (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(O.className)))) {
                      var U = F(O) ? O.hash : "";
                      if (U !== "") {
                          var V = e(U);
                          V.length &&
                              (W && (W.preventDefault(), W.stopPropagation()),
                              L(U, W),
                              window.setTimeout(
                                  function () {
                                      M(V, function () {
                                          S(V, "add"), V.get(0).focus({ preventScroll: !0 }), S(V, "remove");
                                      });
                                  },
                                  W ? 0 : 300
                              ));
                      }
                  }
              }
              function L(W) {
                  if (r.hash !== W && n && n.pushState && !(gn.env.chrome && r.protocol === "file:")) {
                      var O = n.state && n.state.hash;
                      O !== W && n.pushState({ hash: W }, "", W);
                  }
              }
              function M(W, O) {
                  var U = o.scrollTop(),
                      V = H(W);
                  if (U !== V) {
                      var j = Q(W, U, V),
                          ee = Date.now(),
                          ne = function () {
                              var X = Date.now() - ee;
                              window.scroll(0, Z(U, V, X, j)), X <= j ? s(ne) : typeof O == "function" && O();
                          };
                      s(ne);
                  }
              }
              function H(W) {
                  var O = e(p),
                      U = O.css("position") === "fixed" ? O.outerHeight() : 0,
                      V = W.offset().top - U;
                  if (W.data("scroll") === "mid") {
                      var j = o.height() - U,
                          ee = W.outerHeight();
                      ee < j && (V -= Math.round((j - ee) / 2));
                  }
                  return V;
              }
              function Q(W, O, U) {
                  if (x()) return 0;
                  var V = 1;
                  return (
                      a.add(W).each(function (j, ee) {
                          var ne = parseFloat(ee.getAttribute("data-scroll-time"));
                          !isNaN(ne) && ne >= 0 && (V = ne);
                      }),
                      (472.143 * Math.log(Math.abs(O - U) + 125) - 2e3) * V
                  );
              }
              function Z(W, O, U, V) {
                  return U > V ? O : W + (O - W) * se(U / V);
              }
              function se(W) {
                  return W < 0.5 ? 4 * W * W * W : (W - 1) * (2 * W - 2) * (2 * W - 2) + 1;
              }
              function re() {
                  var { WF_CLICK_EMPTY: W, WF_CLICK_SCROLL: O } = t;
                  i.on(O, h, P),
                      i.on(W, g, function (U) {
                          U.preventDefault();
                      }),
                      document.head.insertBefore(T, document.head.firstChild);
              }
              return { ready: re };
          })
      );
  });
  var Fs = u((vk, Ms) => {
      var tT = Ge();
      tT.define(
          "touch",
          (Ms.exports = function (e) {
              var t = {},
                  r = window.getSelection;
              (e.event.special.tap = { bindType: "click", delegateType: "click" }),
                  (t.init = function (i) {
                      return (i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null;
                  });
              function n(i) {
                  var a = !1,
                      s = !1,
                      c = Math.min(Math.round(window.innerWidth * 0.04), 40),
                      p,
                      g;
                  i.addEventListener("touchstart", h, !1),
                      i.addEventListener("touchmove", m, !1),
                      i.addEventListener("touchend", T, !1),
                      i.addEventListener("touchcancel", R, !1),
                      i.addEventListener("mousedown", h, !1),
                      i.addEventListener("mousemove", m, !1),
                      i.addEventListener("mouseup", T, !1),
                      i.addEventListener("mouseout", R, !1);
                  function h(F) {
                      var N = F.touches;
                      (N && N.length > 1) || ((a = !0), N ? ((s = !0), (p = N[0].clientX)) : (p = F.clientX), (g = p));
                  }
                  function m(F) {
                      if (a) {
                          if (s && F.type === "mousemove") {
                              F.preventDefault(), F.stopPropagation();
                              return;
                          }
                          var N = F.touches,
                              x = N ? N[0].clientX : F.clientX,
                              S = x - g;
                          (g = x), Math.abs(S) > c && r && String(r()) === "" && (o("swipe", F, { direction: S > 0 ? "right" : "left" }), R());
                      }
                  }
                  function T(F) {
                      if (a && ((a = !1), s && F.type === "mouseup")) {
                          F.preventDefault(), F.stopPropagation(), (s = !1);
                          return;
                      }
                  }
                  function R() {
                      a = !1;
                  }
                  function w() {
                      i.removeEventListener("touchstart", h, !1),
                          i.removeEventListener("touchmove", m, !1),
                          i.removeEventListener("touchend", T, !1),
                          i.removeEventListener("touchcancel", R, !1),
                          i.removeEventListener("mousedown", h, !1),
                          i.removeEventListener("mousemove", m, !1),
                          i.removeEventListener("mouseup", T, !1),
                          i.removeEventListener("mouseout", R, !1),
                          (i = null);
                  }
                  this.destroy = w;
              }
              function o(i, a, s) {
                  var c = e.Event(i, { originalEvent: a });
                  e(a.target).trigger(c, s);
              }
              return (t.instance = t.init(document)), t;
          })
      );
  });
  var Ws = u((hk, Gs) => {
      var ji = Ge();
      ji.define(
          "edit",
          (Gs.exports = function (e, t, r) {
              if (((r = r || {}), (ji.env("test") || ji.env("frame")) && !r.fixture && !rT())) return { exit: 1 };
              var n = {},
                  o = e(window),
                  i = e(document.documentElement),
                  a = document.location,
                  s = "hashchange",
                  c,
                  p = r.load || m,
                  g = !1;
              try {
                  g = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
              } catch {}
              g ? p() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && p() : o.on(s, h).triggerHandler(s);
              function h() {
                  c || (/\?edit/.test(a.hash) && p());
              }
              function m() {
                  (c = !0),
                      (window.WebflowEditor = !0),
                      o.off(s, h),
                      x(function (P) {
                          e.ajax({ url: N("https://editor-api.webflow.com/api/editor/view"), data: { siteId: i.attr("data-wf-site") }, xhrFields: { withCredentials: !0 }, dataType: "json", crossDomain: !0, success: T(P) });
                      });
              }
              function T(P) {
                  return function (L) {
                      if (!L) {
                          console.error("Could not load editor data");
                          return;
                      }
                      (L.thirdPartyCookiesSupported = P),
                          R(F(L.bugReporterScriptPath), function () {
                              R(F(L.scriptPath), function () {
                                  window.WebflowEditor(L);
                              });
                          });
                  };
              }
              function R(P, L) {
                  e.ajax({ type: "GET", url: P, dataType: "script", cache: !0 }).then(L, w);
              }
              function w(P, L, M) {
                  throw (console.error("Could not load editor script: " + L), M);
              }
              function F(P) {
                  return P.indexOf("//") >= 0 ? P : N("https://editor-api.webflow.com" + P);
              }
              function N(P) {
                  return P.replace(/([^:])\/\//g, "$1/");
              }
              function x(P) {
                  var L = window.document.createElement("iframe");
                  (L.src = "https://webflow.com/site/third-party-cookie-check.html"), (L.style.display = "none"), (L.sandbox = "allow-scripts allow-same-origin");
                  var M = function (H) {
                      H.data === "WF_third_party_cookies_unsupported" ? (S(L, M), P(!1)) : H.data === "WF_third_party_cookies_supported" && (S(L, M), P(!0));
                  };
                  (L.onerror = function () {
                      S(L, M), P(!1);
                  }),
                      window.addEventListener("message", M, !1),
                      window.document.body.appendChild(L);
              }
              function S(P, L) {
                  window.removeEventListener("message", L, !1), P.remove();
              }
              return n;
          })
      );
      function rT() {
          try {
              return window.top.__Cypress__;
          } catch {
              return !1;
          }
      }
  });
  var Xs = u((gk, Us) => {
      var nT = Ge();
      nT.define(
          "focus-visible",
          (Us.exports = function () {
              function e(r) {
                  var n = !0,
                      o = !1,
                      i = null,
                      a = { text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0 };
                  function s(S) {
                      return !!(S && S !== document && S.nodeName !== "HTML" && S.nodeName !== "BODY" && "classList" in S && "contains" in S.classList);
                  }
                  function c(S) {
                      var P = S.type,
                          L = S.tagName;
                      return !!((L === "INPUT" && a[P] && !S.readOnly) || (L === "TEXTAREA" && !S.readOnly) || S.isContentEditable);
                  }
                  function p(S) {
                      S.getAttribute("data-wf-focus-visible") || S.setAttribute("data-wf-focus-visible", "true");
                  }
                  function g(S) {
                      S.getAttribute("data-wf-focus-visible") && S.removeAttribute("data-wf-focus-visible");
                  }
                  function h(S) {
                      S.metaKey || S.altKey || S.ctrlKey || (s(r.activeElement) && p(r.activeElement), (n = !0));
                  }
                  function m() {
                      n = !1;
                  }
                  function T(S) {
                      s(S.target) && (n || c(S.target)) && p(S.target);
                  }
                  function R(S) {
                      s(S.target) &&
                          S.target.hasAttribute("data-wf-focus-visible") &&
                          ((o = !0),
                          window.clearTimeout(i),
                          (i = window.setTimeout(function () {
                              o = !1;
                          }, 100)),
                          g(S.target));
                  }
                  function w() {
                      document.visibilityState === "hidden" && (o && (n = !0), F());
                  }
                  function F() {
                      document.addEventListener("mousemove", x),
                          document.addEventListener("mousedown", x),
                          document.addEventListener("mouseup", x),
                          document.addEventListener("pointermove", x),
                          document.addEventListener("pointerdown", x),
                          document.addEventListener("pointerup", x),
                          document.addEventListener("touchmove", x),
                          document.addEventListener("touchstart", x),
                          document.addEventListener("touchend", x);
                  }
                  function N() {
                      document.removeEventListener("mousemove", x),
                          document.removeEventListener("mousedown", x),
                          document.removeEventListener("mouseup", x),
                          document.removeEventListener("pointermove", x),
                          document.removeEventListener("pointerdown", x),
                          document.removeEventListener("pointerup", x),
                          document.removeEventListener("touchmove", x),
                          document.removeEventListener("touchstart", x),
                          document.removeEventListener("touchend", x);
                  }
                  function x(S) {
                      (S.target.nodeName && S.target.nodeName.toLowerCase() === "html") || ((n = !1), N());
                  }
                  document.addEventListener("keydown", h, !0),
                      document.addEventListener("mousedown", m, !0),
                      document.addEventListener("pointerdown", m, !0),
                      document.addEventListener("touchstart", m, !0),
                      document.addEventListener("visibilitychange", w, !0),
                      F(),
                      r.addEventListener("focus", T, !0),
                      r.addEventListener("blur", R, !0);
              }
              function t() {
                  if (typeof document < "u")
                      try {
                          document.querySelector(":focus-visible");
                      } catch {
                          e(document);
                      }
              }
              return { ready: t };
          })
      );
  });
  var ks = u((Ek, Vs) => {
      var Zt = Ge();
      Zt.define(
          "links",
          (Vs.exports = function (e, t) {
              var r = {},
                  n = e(window),
                  o,
                  i = Zt.env(),
                  a = window.location,
                  s = document.createElement("a"),
                  c = "w--current",
                  p = /index\.(html|php)$/,
                  g = /\/$/,
                  h,
                  m;
              r.ready = r.design = r.preview = T;
              function T() {
                  (o = i && Zt.env("design")), (m = Zt.env("slug") || a.pathname || ""), Zt.scroll.off(w), (h = []);
                  for (var N = document.links, x = 0; x < N.length; ++x) R(N[x]);
                  h.length && (Zt.scroll.on(w), w());
              }
              function R(N) {
                  var x = (o && N.getAttribute("href-disabled")) || N.getAttribute("href");
                  if (((s.href = x), !(x.indexOf(":") >= 0))) {
                      var S = e(N);
                      if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                          if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                          var P = e(s.hash);
                          P.length && h.push({ link: S, sec: P, active: !1 });
                          return;
                      }
                      if (!(x === "#" || x === "")) {
                          var L = s.href === a.href || x === m || (p.test(x) && g.test(m));
                          F(S, c, L);
                      }
                  }
              }
              function w() {
                  var N = n.scrollTop(),
                      x = n.height();
                  t.each(h, function (S) {
                      var P = S.link,
                          L = S.sec,
                          M = L.offset().top,
                          H = L.outerHeight(),
                          Q = x * 0.5,
                          Z = L.is(":visible") && M + H - Q >= N && M + Q <= N + x;
                      S.active !== Z && ((S.active = Z), F(P, c, Z));
                  });
              }
              function F(N, x, S) {
                  var P = N.hasClass(x);
                  (S && P) || (!S && !P) || (S ? N.addClass(x) : N.removeClass(x));
              }
              return r;
          })
      );
  });
  var js = u((_k, Hs) => {
      var Bs = Ge();
      Bs.define(
          "focus",
          (Hs.exports = function () {
              var e = [],
                  t = !1;
              function r(a) {
                  t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a));
              }
              function n(a) {
                  var s = a.target,
                      c = s.tagName;
                  return (
                      (/^a$/i.test(c) && s.href != null) ||
                      (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
                      (/^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled) ||
                      (!/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
                      /^audio$/i.test(c) ||
                      (/^video$/i.test(c) && s.controls === !0)
                  );
              }
              function o(a) {
                  n(a) &&
                      ((t = !0),
                      setTimeout(() => {
                          for (t = !1, a.target.focus(); e.length > 0; ) {
                              var s = e.pop();
                              s.target.dispatchEvent(new MouseEvent(s.type, s));
                          }
                      }, 0));
              }
              function i() {
                  typeof document < "u" &&
                      document.body.hasAttribute("data-wf-focus-within") &&
                      Bs.env.safari &&
                      (document.addEventListener("mousedown", o, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0));
              }
              return { ready: i };
          })
      );
  });
  var Ys = u((yk, zs) => {
      "use strict";
      var Ki = window.jQuery,
          ct = {},
          En = [],
          Ks = ".w-ix",
          _n = {
              reset: function (e, t) {
                  t.__wf_intro = null;
              },
              intro: function (e, t) {
                  t.__wf_intro || ((t.__wf_intro = !0), Ki(t).triggerHandler(ct.types.INTRO));
              },
              outro: function (e, t) {
                  t.__wf_intro && ((t.__wf_intro = null), Ki(t).triggerHandler(ct.types.OUTRO));
              },
          };
      ct.triggers = {};
      ct.types = { INTRO: "w-ix-intro" + Ks, OUTRO: "w-ix-outro" + Ks };
      ct.init = function () {
          for (var e = En.length, t = 0; t < e; t++) {
              var r = En[t];
              r[0](0, r[1]);
          }
          (En = []), Ki.extend(ct.triggers, _n);
      };
      ct.async = function () {
          for (var e in _n) {
              var t = _n[e];
              _n.hasOwnProperty(e) &&
                  (ct.triggers[e] = function (r, n) {
                      En.push([t, n]);
                  });
          }
      };
      ct.async();
      zs.exports = ct;
  });
  var Rr = u((mk, Zs) => {
      "use strict";
      var zi = Ys();
      function Qs(e, t) {
          var r = document.createEvent("CustomEvent");
          r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
      }
      var iT = window.jQuery,
          yn = {},
          $s = ".w-ix",
          oT = {
              reset: function (e, t) {
                  zi.triggers.reset(e, t);
              },
              intro: function (e, t) {
                  zi.triggers.intro(e, t), Qs(t, "COMPONENT_ACTIVE");
              },
              outro: function (e, t) {
                  zi.triggers.outro(e, t), Qs(t, "COMPONENT_INACTIVE");
              },
          };
      yn.triggers = {};
      yn.types = { INTRO: "w-ix-intro" + $s, OUTRO: "w-ix-outro" + $s };
      iT.extend(yn.triggers, oT);
      Zs.exports = yn;
  });
  var eu = u((Tk, Js) => {
      var aT = Ge();
      aT.define(
          "focus-within",
          (Js.exports = function () {
              function e(i) {
                  for (var a = [i], s = null; (s = i.parentNode || i.host || i.defaultView); ) a.push(s), (i = s);
                  return a;
              }
              function t(i) {
                  typeof i.getAttribute != "function" || i.getAttribute("data-wf-focus-within") || i.setAttribute("data-wf-focus-within", "true");
              }
              function r(i) {
                  typeof i.getAttribute != "function" || !i.getAttribute("data-wf-focus-within") || i.removeAttribute("data-wf-focus-within");
              }
              function n() {
                  var i = function (a) {
                      var s;
                      function c() {
                          (s = !1), a.type === "blur" && Array.prototype.slice.call(e(a.target)).forEach(r), a.type === "focus" && Array.prototype.slice.call(e(a.target)).forEach(t);
                      }
                      s || (window.requestAnimationFrame(c), (s = !0));
                  };
                  return document.addEventListener("focus", i, !0), document.addEventListener("blur", i, !0), t(document.body), !0;
              }
              function o() {
                  if (typeof document < "u" && document.body.hasAttribute("data-wf-focus-within"))
                      try {
                          document.querySelector(":focus-within");
                      } catch {
                          n();
                      }
              }
              return { ready: o };
          })
      );
  });
  var tu = u(() => {
      (function () {
          if (typeof window > "u") return;
          function e(n) {
              Webflow.env("design") ||
                  ($("video").each(function () {
                      n && $(this).prop("autoplay") ? this.play() : this.pause();
                  }),
                  $(".w-background-video--control").each(function () {
                      n ? r($(this)) : t($(this));
                  }));
          }
          function t(n) {
              n.find("> span").each(function (o) {
                  $(this).prop("hidden", () => o === 0);
              });
          }
          function r(n) {
              n.find("> span").each(function (o) {
                  $(this).prop("hidden", () => o === 1);
              });
          }
          $(document).ready(() => {
              let n = window.matchMedia("(prefers-reduced-motion: reduce)");
              n.addEventListener("change", (o) => {
                  e(!o.matches);
              }),
                  n.matches && e(!1),
                  $("video:not([autoplay])").each(function () {
                      $(this)
                          .parent()
                          .find(".w-background-video--control")
                          .each(function () {
                              t($(this));
                          });
                  }),
                  $(document).on("click", ".w-background-video--control", function (o) {
                      if (Webflow.env("design")) return;
                      let i = $(o.currentTarget),
                          a = $(`video#${i.attr("aria-controls")}`).get(0);
                      if (a)
                          if (a.paused) {
                              let s = a.play();
                              r(i),
                                  s &&
                                      typeof s.catch == "function" &&
                                      s.catch(() => {
                                          t(i);
                                      });
                          } else a.pause(), t(i);
                  });
          });
      })();
  });
  var ru = u(() => {
      (function () {
          if (typeof window > "u") return;
          let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
              t = e ? parseInt(e[1], 10) >= 16 : !1;
          if ("objectFit" in document.documentElement.style && !t) {
              window.objectFitPolyfill = function () {
                  return !1;
              };
              return;
          }
          let n = function (s) {
                  let c = window.getComputedStyle(s, null),
                      p = c.getPropertyValue("position"),
                      g = c.getPropertyValue("overflow"),
                      h = c.getPropertyValue("display");
                  (!p || p === "static") && (s.style.position = "relative"),
                      g !== "hidden" && (s.style.overflow = "hidden"),
                      (!h || h === "inline") && (s.style.display = "block"),
                      s.clientHeight === 0 && (s.style.height = "100%"),
                      s.className.indexOf("object-fit-polyfill") === -1 && (s.className += " object-fit-polyfill");
              },
              o = function (s) {
                  let c = window.getComputedStyle(s, null),
                      p = {
                          "max-width": "none",
                          "max-height": "none",
                          "min-width": "0px",
                          "min-height": "0px",
                          top: "auto",
                          right: "auto",
                          bottom: "auto",
                          left: "auto",
                          "margin-top": "0px",
                          "margin-right": "0px",
                          "margin-bottom": "0px",
                          "margin-left": "0px",
                      };
                  for (let g in p) c.getPropertyValue(g) !== p[g] && (s.style[g] = p[g]);
              },
              i = function (s) {
                  let c = s.parentNode;
                  n(c),
                      o(s),
                      (s.style.position = "absolute"),
                      (s.style.height = "100%"),
                      (s.style.width = "auto"),
                      s.clientWidth > c.clientWidth
                          ? ((s.style.top = "0"), (s.style.marginTop = "0"), (s.style.left = "50%"), (s.style.marginLeft = s.clientWidth / -2 + "px"))
                          : ((s.style.width = "100%"), (s.style.height = "auto"), (s.style.left = "0"), (s.style.marginLeft = "0"), (s.style.top = "50%"), (s.style.marginTop = s.clientHeight / -2 + "px"));
              },
              a = function (s) {
                  if (typeof s > "u" || s instanceof Event) s = document.querySelectorAll("[data-object-fit]");
                  else if (s && s.nodeName) s = [s];
                  else if (typeof s == "object" && s.length && s[0].nodeName) s = s;
                  else return !1;
                  for (let c = 0; c < s.length; c++) {
                      if (!s[c].nodeName) continue;
                      let p = s[c].nodeName.toLowerCase();
                      if (p === "img") {
                          if (t) continue;
                          s[c].complete
                              ? i(s[c])
                              : s[c].addEventListener("load", function () {
                                    i(this);
                                });
                      } else
                          p === "video"
                              ? s[c].readyState > 0
                                  ? i(s[c])
                                  : s[c].addEventListener("loadedmetadata", function () {
                                        i(this);
                                    })
                              : i(s[c]);
                  }
                  return !0;
              };
          document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", a) : a(), window.addEventListener("resize", a), (window.objectFitPolyfill = a);
      })();
  });
  var ou = u((wk, iu) => {
      var nu = Ge();
      nu.define(
          "brand",
          (iu.exports = function (e) {
              var t = {},
                  r = document,
                  n = e("html"),
                  o = e("body"),
                  i = ".w-webflow-badge",
                  a = window.location,
                  s = /PhantomJS/i.test(navigator.userAgent),
                  c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                  p;
              t.ready = function () {
                  var T = n.attr("data-wf-status"),
                      R = n.attr("data-wf-domain") || "";
                  /\.webflow\.io$/i.test(R) && a.hostname !== R && (T = !0), T && !s && ((p = p || h()), m(), setTimeout(m, 500), e(r).off(c, g).on(c, g));
              };
              function g() {
                  var T = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                  e(p).attr("style", T ? "display: none !important;" : "");
              }
              function h() {
                  var T = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                      R = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({ marginRight: "8px", width: "16px" }),
                      w = e("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow");
                  return T.append(R, w), T[0];
              }
              function m() {
                  var T = o.children(i),
                      R = T.length && T.get(0) === p,
                      w = nu.env("editor");
                  if (R) {
                      w && T.remove();
                      return;
                  }
                  T.length && T.remove(), w || o.append(p);
              }
              return t;
          })
      );
  });
  var uu = u((Ak, su) => {
      var Mt = Ge(),
          sT = Rr(),
          et = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, ESCAPE: 27, SPACE: 32, ENTER: 13, HOME: 36, END: 35 },
          au = !0,
          uT = /^#[a-zA-Z0-9\-_]+$/;
      Mt.define(
          "dropdown",
          (su.exports = function (e, t) {
              var r = t.debounce,
                  n = {},
                  o = Mt.env(),
                  i = !1,
                  a,
                  s = Mt.env.touch,
                  c = ".w-dropdown",
                  p = "w--open",
                  g = sT.triggers,
                  h = 900,
                  m = "focusout" + c,
                  T = "keydown" + c,
                  R = "mouseenter" + c,
                  w = "mousemove" + c,
                  F = "mouseleave" + c,
                  N = (s ? "click" : "mouseup") + c,
                  x = "w-close" + c,
                  S = "setting" + c,
                  P = e(document),
                  L;
              (n.ready = M),
                  (n.design = function () {
                      i && O(), (i = !1), M();
                  }),
                  (n.preview = function () {
                      (i = !0), M();
                  });
              function M() {
                  (a = o && Mt.env("design")), (L = P.find(c)), L.each(H);
              }
              function H(l, G) {
                  var k = e(G),
                      A = e.data(G, c);
                  A || (A = e.data(G, c, { open: !1, el: k, config: {}, selectedIdx: -1 })),
                      (A.toggle = A.el.children(".w-dropdown-toggle")),
                      (A.list = A.el.children(".w-dropdown-list")),
                      (A.links = A.list.find("a:not(.w-dropdown .w-dropdown a)")),
                      (A.complete = j(A)),
                      (A.mouseLeave = ne(A)),
                      (A.mouseUpOutside = V(A)),
                      (A.mouseMoveOutside = X(A)),
                      Q(A);
                  var oe = A.toggle.attr("id"),
                      he = A.list.attr("id");
                  oe || (oe = "w-dropdown-toggle-" + l),
                      he || (he = "w-dropdown-list-" + l),
                      A.toggle.attr("id", oe),
                      A.toggle.attr("aria-controls", he),
                      A.toggle.attr("aria-haspopup", "menu"),
                      A.toggle.attr("aria-expanded", "false"),
                      A.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"),
                      A.toggle.prop("tagName") !== "BUTTON" && (A.toggle.attr("role", "button"), A.toggle.attr("tabindex") || A.toggle.attr("tabindex", "0")),
                      A.list.attr("id", he),
                      A.list.attr("aria-labelledby", oe),
                      A.links.each(function (v, B) {
                          B.hasAttribute("tabindex") || B.setAttribute("tabindex", "0"), uT.test(B.hash) && B.addEventListener("click", W.bind(null, A));
                      }),
                      A.el.off(c),
                      A.toggle.off(c),
                      A.nav && A.nav.off(c);
                  var ae = se(A, au);
                  a && A.el.on(S, Z(A)),
                      a ||
                          (o && ((A.hovering = !1), W(A)),
                          A.config.hover && A.toggle.on(R, ee(A)),
                          A.el.on(x, ae),
                          A.el.on(T, Y(A)),
                          A.el.on(m, _(A)),
                          A.toggle.on(N, ae),
                          A.toggle.on(T, E(A)),
                          (A.nav = A.el.closest(".w-nav")),
                          A.nav.on(x, ae));
              }
              function Q(l) {
                  var G = Number(l.el.css("z-index"));
                  (l.manageZ = G === h || G === h + 1), (l.config = { hover: l.el.attr("data-hover") === "true" && !s, delay: l.el.attr("data-delay") });
              }
              function Z(l) {
                  return function (G, k) {
                      (k = k || {}), Q(l), k.open === !0 && re(l, !0), k.open === !1 && W(l, { immediate: !0 });
                  };
              }
              function se(l, G) {
                  return r(function (k) {
                      if (l.open || (k && k.type === "w-close")) return W(l, { forceClose: G });
                      re(l);
                  });
              }
              function re(l) {
                  if (!l.open) {
                      U(l), (l.open = !0), l.list.addClass(p), l.toggle.addClass(p), l.toggle.attr("aria-expanded", "true"), g.intro(0, l.el[0]), Mt.redraw.up(), l.manageZ && l.el.css("z-index", h + 1);
                      var G = Mt.env("editor");
                      a || P.on(N, l.mouseUpOutside), l.hovering && !G && l.el.on(F, l.mouseLeave), l.hovering && G && P.on(w, l.mouseMoveOutside), window.clearTimeout(l.delayId);
                  }
              }
              function W(l, { immediate: G, forceClose: k } = {}) {
                  if (l.open && !(l.config.hover && l.hovering && !k)) {
                      l.toggle.attr("aria-expanded", "false"), (l.open = !1);
                      var A = l.config;
                      if ((g.outro(0, l.el[0]), P.off(N, l.mouseUpOutside), P.off(w, l.mouseMoveOutside), l.el.off(F, l.mouseLeave), window.clearTimeout(l.delayId), !A.delay || G)) return l.complete();
                      l.delayId = window.setTimeout(l.complete, A.delay);
                  }
              }
              function O() {
                  P.find(c).each(function (l, G) {
                      e(G).triggerHandler(x);
                  });
              }
              function U(l) {
                  var G = l.el[0];
                  L.each(function (k, A) {
                      var oe = e(A);
                      oe.is(G) || oe.has(G).length || oe.triggerHandler(x);
                  });
              }
              function V(l) {
                  return (
                      l.mouseUpOutside && P.off(N, l.mouseUpOutside),
                      r(function (G) {
                          if (l.open) {
                              var k = e(G.target);
                              if (!k.closest(".w-dropdown-toggle").length) {
                                  var A = e.inArray(l.el[0], k.parents(c)) === -1,
                                      oe = Mt.env("editor");
                                  if (A) {
                                      if (oe) {
                                          var he = k.parents().length === 1 && k.parents("svg").length === 1,
                                              ae = k.parents(".w-editor-bem-EditorHoverControls").length;
                                          if (he || ae) return;
                                      }
                                      W(l);
                                  }
                              }
                          }
                      })
                  );
              }
              function j(l) {
                  return function () {
                      l.list.removeClass(p), l.toggle.removeClass(p), l.manageZ && l.el.css("z-index", "");
                  };
              }
              function ee(l) {
                  return function () {
                      (l.hovering = !0), re(l);
                  };
              }
              function ne(l) {
                  return function () {
                      (l.hovering = !1), l.links.is(":focus") || W(l);
                  };
              }
              function X(l) {
                  return r(function (G) {
                      if (l.open) {
                          var k = e(G.target),
                              A = e.inArray(l.el[0], k.parents(c)) === -1;
                          if (A) {
                              var oe = k.parents(".w-editor-bem-EditorHoverControls").length,
                                  he = k.parents(".w-editor-bem-RTToolbar").length,
                                  ae = e(".w-editor-bem-EditorOverlay"),
                                  v = ae.find(".w-editor-edit-outline").length || ae.find(".w-editor-bem-RTToolbar").length;
                              if (oe || he || v) return;
                              (l.hovering = !1), W(l);
                          }
                      }
                  });
              }
              function Y(l) {
                  return function (G) {
                      if (!(a || !l.open))
                          switch (((l.selectedIdx = l.links.index(document.activeElement)), G.keyCode)) {
                              case et.HOME:
                                  return l.open ? ((l.selectedIdx = 0), d(l), G.preventDefault()) : void 0;
                              case et.END:
                                  return l.open ? ((l.selectedIdx = l.links.length - 1), d(l), G.preventDefault()) : void 0;
                              case et.ESCAPE:
                                  return W(l), l.toggle.focus(), G.stopPropagation();
                              case et.ARROW_RIGHT:
                              case et.ARROW_DOWN:
                                  return (l.selectedIdx = Math.min(l.links.length - 1, l.selectedIdx + 1)), d(l), G.preventDefault();
                              case et.ARROW_LEFT:
                              case et.ARROW_UP:
                                  return (l.selectedIdx = Math.max(-1, l.selectedIdx - 1)), d(l), G.preventDefault();
                          }
                  };
              }
              function d(l) {
                  l.links[l.selectedIdx] && l.links[l.selectedIdx].focus();
              }
              function E(l) {
                  var G = se(l, au);
                  return function (k) {
                      if (!a) {
                          if (!l.open)
                              switch (k.keyCode) {
                                  case et.ARROW_UP:
                                  case et.ARROW_DOWN:
                                      return k.stopPropagation();
                              }
                          switch (k.keyCode) {
                              case et.SPACE:
                              case et.ENTER:
                                  return G(), k.stopPropagation(), k.preventDefault();
                          }
                      }
                  };
              }
              function _(l) {
                  return r(function (G) {
                      var { relatedTarget: k, target: A } = G,
                          oe = l.el[0],
                          he = oe.contains(k) || oe.contains(A);
                      return he || W(l), G.stopPropagation();
                  });
              }
              return n;
          })
      );
  });
  var lu = u((Rk, cu) => {
      var bt = Ge(),
          cT = Rr(),
          xe = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, ESCAPE: 27, SPACE: 32, ENTER: 13, HOME: 36, END: 35 };
      bt.define(
          "navbar",
          (cu.exports = function (e, t) {
              var r = {},
                  n = e.tram,
                  o = e(window),
                  i = e(document),
                  a = t.debounce,
                  s,
                  c,
                  p,
                  g,
                  h = bt.env(),
                  m = '<div class="w-nav-overlay" data-wf-ignore />',
                  T = ".w-nav",
                  R = "w--open",
                  w = "w--nav-dropdown-open",
                  F = "w--nav-dropdown-toggle-open",
                  N = "w--nav-dropdown-list-open",
                  x = "w--nav-link-open",
                  S = cT.triggers,
                  P = e();
              (r.ready = r.design = r.preview = L),
                  (r.destroy = function () {
                      (P = e()), M(), c && c.length && c.each(se);
                  });
              function L() {
                  (p = h && bt.env("design")), (g = bt.env("editor")), (s = e(document.body)), (c = i.find(T)), c.length && (c.each(Z), M(), H());
              }
              function M() {
                  bt.resize.off(Q);
              }
              function H() {
                  bt.resize.on(Q);
              }
              function Q() {
                  c.each(_);
              }
              function Z(v, B) {
                  var J = e(B),
                      K = e.data(B, T);
                  K || (K = e.data(B, T, { open: !1, el: J, config: {}, selectedIdx: -1 })),
                      (K.menu = J.find(".w-nav-menu")),
                      (K.links = K.menu.find(".w-nav-link")),
                      (K.dropdowns = K.menu.find(".w-dropdown")),
                      (K.dropdownToggle = K.menu.find(".w-dropdown-toggle")),
                      (K.dropdownList = K.menu.find(".w-dropdown-list")),
                      (K.button = J.find(".w-nav-button")),
                      (K.container = J.find(".w-container")),
                      (K.overlayContainerId = "w-nav-overlay-" + v),
                      (K.outside = d(K));
                  var ge = J.find(".w-nav-brand");
                  ge && ge.attr("href") === "/" && ge.attr("aria-label") == null && ge.attr("aria-label", "home"),
                      K.button.attr("style", "-webkit-user-select: text;"),
                      K.button.attr("aria-label") == null && K.button.attr("aria-label", "menu"),
                      K.button.attr("role", "button"),
                      K.button.attr("tabindex", "0"),
                      K.button.attr("aria-controls", K.overlayContainerId),
                      K.button.attr("aria-haspopup", "menu"),
                      K.button.attr("aria-expanded", "false"),
                      K.el.off(T),
                      K.button.off(T),
                      K.menu.off(T),
                      O(K),
                      p ? (re(K), K.el.on("setting" + T, U(K))) : (W(K), K.button.on("click" + T, X(K)), K.menu.on("click" + T, "a", Y(K)), K.button.on("keydown" + T, V(K)), K.el.on("keydown" + T, j(K))),
                      _(v, B);
              }
              function se(v, B) {
                  var J = e.data(B, T);
                  J && (re(J), e.removeData(B, T));
              }
              function re(v) {
                  v.overlay && (ae(v, !0), v.overlay.remove(), (v.overlay = null));
              }
              function W(v) {
                  v.overlay || ((v.overlay = e(m).appendTo(v.el)), v.overlay.attr("id", v.overlayContainerId), (v.parent = v.menu.parent()), ae(v, !0));
              }
              function O(v) {
                  var B = {},
                      J = v.config || {},
                      K = (B.animation = v.el.attr("data-animation") || "default");
                  (B.animOver = /^over/.test(K)),
                      (B.animDirect = /left$/.test(K) ? -1 : 1),
                      J.animation !== K && v.open && t.defer(ne, v),
                      (B.easing = v.el.attr("data-easing") || "ease"),
                      (B.easing2 = v.el.attr("data-easing2") || "ease");
                  var ge = v.el.attr("data-duration");
                  (B.duration = ge != null ? Number(ge) : 400), (B.docHeight = v.el.attr("data-doc-height")), (v.config = B);
              }
              function U(v) {
                  return function (B, J) {
                      J = J || {};
                      var K = o.width();
                      O(v),
                          J.open === !0 && oe(v, !0),
                          J.open === !1 && ae(v, !0),
                          v.open &&
                              t.defer(function () {
                                  K !== o.width() && ne(v);
                              });
                  };
              }
              function V(v) {
                  return function (B) {
                      switch (B.keyCode) {
                          case xe.SPACE:
                          case xe.ENTER:
                              return X(v)(), B.preventDefault(), B.stopPropagation();
                          case xe.ESCAPE:
                              return ae(v), B.preventDefault(), B.stopPropagation();
                          case xe.ARROW_RIGHT:
                          case xe.ARROW_DOWN:
                          case xe.HOME:
                          case xe.END:
                              return v.open ? (B.keyCode === xe.END ? (v.selectedIdx = v.links.length - 1) : (v.selectedIdx = 0), ee(v), B.preventDefault(), B.stopPropagation()) : (B.preventDefault(), B.stopPropagation());
                      }
                  };
              }
              function j(v) {
                  return function (B) {
                      if (v.open)
                          switch (((v.selectedIdx = v.links.index(document.activeElement)), B.keyCode)) {
                              case xe.HOME:
                              case xe.END:
                                  return B.keyCode === xe.END ? (v.selectedIdx = v.links.length - 1) : (v.selectedIdx = 0), ee(v), B.preventDefault(), B.stopPropagation();
                              case xe.ESCAPE:
                                  return ae(v), v.button.focus(), B.preventDefault(), B.stopPropagation();
                              case xe.ARROW_LEFT:
                              case xe.ARROW_UP:
                                  return (v.selectedIdx = Math.max(-1, v.selectedIdx - 1)), ee(v), B.preventDefault(), B.stopPropagation();
                              case xe.ARROW_RIGHT:
                              case xe.ARROW_DOWN:
                                  return (v.selectedIdx = Math.min(v.links.length - 1, v.selectedIdx + 1)), ee(v), B.preventDefault(), B.stopPropagation();
                          }
                  };
              }
              function ee(v) {
                  if (v.links[v.selectedIdx]) {
                      var B = v.links[v.selectedIdx];
                      B.focus(), Y(B);
                  }
              }
              function ne(v) {
                  v.open && (ae(v, !0), oe(v, !0));
              }
              function X(v) {
                  return a(function () {
                      v.open ? ae(v) : oe(v);
                  });
              }
              function Y(v) {
                  return function (B) {
                      var J = e(this),
                          K = J.attr("href");
                      if (!bt.validClick(B.currentTarget)) {
                          B.preventDefault();
                          return;
                      }
                      K && K.indexOf("#") === 0 && v.open && ae(v);
                  };
              }
              function d(v) {
                  return (
                      v.outside && i.off("click" + T, v.outside),
                      function (B) {
                          var J = e(B.target);
                          (g && J.closest(".w-editor-bem-EditorOverlay").length) || E(v, J);
                      }
                  );
              }
              var E = a(function (v, B) {
                  if (v.open) {
                      var J = B.closest(".w-nav-menu");
                      v.menu.is(J) || ae(v);
                  }
              });
              function _(v, B) {
                  var J = e.data(B, T),
                      K = (J.collapsed = J.button.css("display") !== "none");
                  if ((J.open && !K && !p && ae(J, !0), J.container.length)) {
                      var ge = G(J);
                      J.links.each(ge), J.dropdowns.each(ge);
                  }
                  J.open && he(J);
              }
              var l = "max-width";
              function G(v) {
                  var B = v.container.css(l);
                  return (
                      B === "none" && (B = ""),
                      function (J, K) {
                          (K = e(K)), K.css(l, ""), K.css(l) === "none" && K.css(l, B);
                      }
                  );
              }
              function k(v, B) {
                  B.setAttribute("data-nav-menu-open", "");
              }
              function A(v, B) {
                  B.removeAttribute("data-nav-menu-open");
              }
              function oe(v, B) {
                  if (v.open) return;
                  (v.open = !0), v.menu.each(k), v.links.addClass(x), v.dropdowns.addClass(w), v.dropdownToggle.addClass(F), v.dropdownList.addClass(N), v.button.addClass(R);
                  var J = v.config,
                      K = J.animation;
                  (K === "none" || !n.support.transform || J.duration <= 0) && (B = !0);
                  var ge = he(v),
                      Ve = v.menu.outerHeight(!0),
                      Ye = v.menu.outerWidth(!0),
                      f = v.el.height(),
                      y = v.el[0];
                  if ((_(0, y), S.intro(0, y), bt.redraw.up(), p || i.on("click" + T, v.outside), B)) {
                      I();
                      return;
                  }
                  var b = "transform " + J.duration + "ms " + J.easing;
                  if ((v.overlay && ((P = v.menu.prev()), v.overlay.show().append(v.menu)), J.animOver)) {
                      n(v.menu)
                          .add(b)
                          .set({ x: J.animDirect * Ye, height: ge })
                          .start({ x: 0 })
                          .then(I),
                          v.overlay && v.overlay.width(Ye);
                      return;
                  }
                  var C = f + Ve;
                  n(v.menu).add(b).set({ y: -C }).start({ y: 0 }).then(I);
                  function I() {
                      v.button.attr("aria-expanded", "true");
                  }
              }
              function he(v) {
                  var B = v.config,
                      J = B.docHeight ? i.height() : s.height();
                  return B.animOver ? v.menu.height(J) : v.el.css("position") !== "fixed" && (J -= v.el.outerHeight(!0)), v.overlay && v.overlay.height(J), J;
              }
              function ae(v, B) {
                  if (!v.open) return;
                  (v.open = !1), v.button.removeClass(R);
                  var J = v.config;
                  if (((J.animation === "none" || !n.support.transform || J.duration <= 0) && (B = !0), S.outro(0, v.el[0]), i.off("click" + T, v.outside), B)) {
                      n(v.menu).stop(), y();
                      return;
                  }
                  var K = "transform " + J.duration + "ms " + J.easing2,
                      ge = v.menu.outerHeight(!0),
                      Ve = v.menu.outerWidth(!0),
                      Ye = v.el.height();
                  if (J.animOver) {
                      n(v.menu)
                          .add(K)
                          .start({ x: Ve * J.animDirect })
                          .then(y);
                      return;
                  }
                  var f = Ye + ge;
                  n(v.menu).add(K).start({ y: -f }).then(y);
                  function y() {
                      v.menu.height(""),
                          n(v.menu).set({ x: 0, y: 0 }),
                          v.menu.each(A),
                          v.links.removeClass(x),
                          v.dropdowns.removeClass(w),
                          v.dropdownToggle.removeClass(F),
                          v.dropdownList.removeClass(N),
                          v.overlay && v.overlay.children().length && (P.length ? v.menu.insertAfter(P) : v.menu.prependTo(v.parent), v.overlay.attr("style", "").hide()),
                          v.el.triggerHandler("w-close"),
                          v.button.attr("aria-expanded", "false");
                  }
              }
              return r;
          })
      );
  });
  var pu = u((Ck, du) => {
      var St = Ge(),
          lT = Rr(),
          lt = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, SPACE: 32, ENTER: 13, HOME: 36, END: 35 },
          fu = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
      St.define(
          "slider",
          (du.exports = function (e, t) {
              var r = {},
                  n = e.tram,
                  o = e(document),
                  i,
                  a,
                  s = St.env(),
                  c = ".w-slider",
                  p = '<div class="w-slider-dot" data-wf-ignore />',
                  g = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                  h = "w-slider-force-show",
                  m = lT.triggers,
                  T,
                  R = !1;
              (r.ready = function () {
                  (a = St.env("design")), w();
              }),
                  (r.design = function () {
                      (a = !0), setTimeout(w, 1e3);
                  }),
                  (r.preview = function () {
                      (a = !1), w();
                  }),
                  (r.redraw = function () {
                      (R = !0), w(), (R = !1);
                  }),
                  (r.destroy = F);
              function w() {
                  (i = o.find(c)), i.length && (i.each(S), !T && (F(), N()));
              }
              function F() {
                  St.resize.off(x), St.redraw.off(r.redraw);
              }
              function N() {
                  St.resize.on(x), St.redraw.on(r.redraw);
              }
              function x() {
                  i.filter(":visible").each(j);
              }
              function S(d, E) {
                  var _ = e(E),
                      l = e.data(E, c);
                  l || (l = e.data(E, c, { index: 0, depth: 1, hasFocus: { keyboard: !1, mouse: !1 }, el: _, config: {} })),
                      (l.mask = _.children(".w-slider-mask")),
                      (l.left = _.children(".w-slider-arrow-left")),
                      (l.right = _.children(".w-slider-arrow-right")),
                      (l.nav = _.children(".w-slider-nav")),
                      (l.slides = l.mask.children(".w-slide")),
                      l.slides.each(m.reset),
                      R && (l.maskWidth = 0),
                      _.attr("role") === void 0 && _.attr("role", "region"),
                      _.attr("aria-label") === void 0 && _.attr("aria-label", "carousel");
                  var G = l.mask.attr("id");
                  if (
                      (G || ((G = "w-slider-mask-" + d), l.mask.attr("id", G)),
                      !a && !l.ariaLiveLabel && (l.ariaLiveLabel = e(g).appendTo(l.mask)),
                      l.left.attr("role", "button"),
                      l.left.attr("tabindex", "0"),
                      l.left.attr("aria-controls", G),
                      l.left.attr("aria-label") === void 0 && l.left.attr("aria-label", "previous slide"),
                      l.right.attr("role", "button"),
                      l.right.attr("tabindex", "0"),
                      l.right.attr("aria-controls", G),
                      l.right.attr("aria-label") === void 0 && l.right.attr("aria-label", "next slide"),
                      !n.support.transform)
                  ) {
                      l.left.hide(), l.right.hide(), l.nav.hide(), (T = !0);
                      return;
                  }
                  l.el.off(c),
                      l.left.off(c),
                      l.right.off(c),
                      l.nav.off(c),
                      P(l),
                      a
                          ? (l.el.on("setting" + c, O(l)), W(l), (l.hasTimer = !1))
                          : (l.el.on("swipe" + c, O(l)),
                            l.left.on("click" + c, Q(l)),
                            l.right.on("click" + c, Z(l)),
                            l.left.on("keydown" + c, H(l, Q)),
                            l.right.on("keydown" + c, H(l, Z)),
                            l.nav.on("keydown" + c, "> div", O(l)),
                            l.config.autoplay && !l.hasTimer && ((l.hasTimer = !0), (l.timerCount = 1), re(l)),
                            l.el.on("mouseenter" + c, M(l, !0, "mouse")),
                            l.el.on("focusin" + c, M(l, !0, "keyboard")),
                            l.el.on("mouseleave" + c, M(l, !1, "mouse")),
                            l.el.on("focusout" + c, M(l, !1, "keyboard"))),
                      l.nav.on("click" + c, "> div", O(l)),
                      s ||
                          l.mask
                              .contents()
                              .filter(function () {
                                  return this.nodeType === 3;
                              })
                              .remove();
                  var k = _.filter(":hidden");
                  k.addClass(h);
                  var A = _.parents(":hidden");
                  A.addClass(h), R || j(d, E), k.removeClass(h), A.removeClass(h);
              }
              function P(d) {
                  var E = {};
                  (E.crossOver = 0), (E.animation = d.el.attr("data-animation") || "slide"), E.animation === "outin" && ((E.animation = "cross"), (E.crossOver = 0.5)), (E.easing = d.el.attr("data-easing") || "ease");
                  var _ = d.el.attr("data-duration");
                  if (
                      ((E.duration = _ != null ? parseInt(_, 10) : 500),
                      L(d.el.attr("data-infinite")) && (E.infinite = !0),
                      L(d.el.attr("data-disable-swipe")) && (E.disableSwipe = !0),
                      L(d.el.attr("data-hide-arrows")) ? (E.hideArrows = !0) : d.config.hideArrows && (d.left.show(), d.right.show()),
                      L(d.el.attr("data-autoplay")))
                  ) {
                      (E.autoplay = !0), (E.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3), (E.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10));
                      var l = "mousedown" + c + " touchstart" + c;
                      a ||
                          d.el.off(l).one(l, function () {
                              W(d);
                          });
                  }
                  var G = d.right.width();
                  (E.edge = G ? G + 40 : 100), (d.config = E);
              }
              function L(d) {
                  return d === "1" || d === "true";
              }
              function M(d, E, _) {
                  return function (l) {
                      if (E) d.hasFocus[_] = E;
                      else if (e.contains(d.el.get(0), l.relatedTarget) || ((d.hasFocus[_] = E), (d.hasFocus.mouse && _ === "keyboard") || (d.hasFocus.keyboard && _ === "mouse"))) return;
                      E ? (d.ariaLiveLabel.attr("aria-live", "polite"), d.hasTimer && W(d)) : (d.ariaLiveLabel.attr("aria-live", "off"), d.hasTimer && re(d));
                  };
              }
              function H(d, E) {
                  return function (_) {
                      switch (_.keyCode) {
                          case lt.SPACE:
                          case lt.ENTER:
                              return E(d)(), _.preventDefault(), _.stopPropagation();
                      }
                  };
              }
              function Q(d) {
                  return function () {
                      V(d, { index: d.index - 1, vector: -1 });
                  };
              }
              function Z(d) {
                  return function () {
                      V(d, { index: d.index + 1, vector: 1 });
                  };
              }
              function se(d, E) {
                  var _ = null;
                  E === d.slides.length && (w(), ee(d)),
                      t.each(d.anchors, function (l, G) {
                          e(l.els).each(function (k, A) {
                              e(A).index() === E && (_ = G);
                          });
                      }),
                      _ != null && V(d, { index: _, immediate: !0 });
              }
              function re(d) {
                  W(d);
                  var E = d.config,
                      _ = E.timerMax;
                  (_ && d.timerCount++ > _) ||
                      (d.timerId = window.setTimeout(function () {
                          d.timerId == null || a || (Z(d)(), re(d));
                      }, E.delay));
              }
              function W(d) {
                  window.clearTimeout(d.timerId), (d.timerId = null);
              }
              function O(d) {
                  return function (E, _) {
                      _ = _ || {};
                      var l = d.config;
                      if (a && E.type === "setting") {
                          if (_.select === "prev") return Q(d)();
                          if (_.select === "next") return Z(d)();
                          if ((P(d), ee(d), _.select == null)) return;
                          se(d, _.select);
                          return;
                      }
                      if (E.type === "swipe") return l.disableSwipe || St.env("editor") ? void 0 : _.direction === "left" ? Z(d)() : _.direction === "right" ? Q(d)() : void 0;
                      if (d.nav.has(E.target).length) {
                          var G = e(E.target).index();
                          if ((E.type === "click" && V(d, { index: G }), E.type === "keydown"))
                              switch (E.keyCode) {
                                  case lt.ENTER:
                                  case lt.SPACE: {
                                      V(d, { index: G }), E.preventDefault();
                                      break;
                                  }
                                  case lt.ARROW_LEFT:
                                  case lt.ARROW_UP: {
                                      U(d.nav, Math.max(G - 1, 0)), E.preventDefault();
                                      break;
                                  }
                                  case lt.ARROW_RIGHT:
                                  case lt.ARROW_DOWN: {
                                      U(d.nav, Math.min(G + 1, d.pages)), E.preventDefault();
                                      break;
                                  }
                                  case lt.HOME: {
                                      U(d.nav, 0), E.preventDefault();
                                      break;
                                  }
                                  case lt.END: {
                                      U(d.nav, d.pages), E.preventDefault();
                                      break;
                                  }
                                  default:
                                      return;
                              }
                      }
                  };
              }
              function U(d, E) {
                  var _ = d.children().eq(E).focus();
                  d.children().not(_);
              }
              function V(d, E) {
                  E = E || {};
                  var _ = d.config,
                      l = d.anchors;
                  d.previous = d.index;
                  var G = E.index,
                      k = {};
                  G < 0
                      ? ((G = l.length - 1), _.infinite && ((k.x = -d.endX), (k.from = 0), (k.to = l[0].width)))
                      : G >= l.length && ((G = 0), _.infinite && ((k.x = l[l.length - 1].width), (k.from = -l[l.length - 1].x), (k.to = k.from - k.x))),
                      (d.index = G);
                  var A = d.nav.children().eq(G).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                  d.nav.children().not(A).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"),
                      _.hideArrows && (d.index === l.length - 1 ? d.right.hide() : d.right.show(), d.index === 0 ? d.left.hide() : d.left.show());
                  var oe = d.offsetX || 0,
                      he = (d.offsetX = -l[d.index].x),
                      ae = { x: he, opacity: 1, visibility: "" },
                      v = e(l[d.index].els),
                      B = e(l[d.previous] && l[d.previous].els),
                      J = d.slides.not(v),
                      K = _.animation,
                      ge = _.easing,
                      Ve = Math.round(_.duration),
                      Ye = E.vector || (d.index > d.previous ? 1 : -1),
                      f = "opacity " + Ve + "ms " + ge,
                      y = "transform " + Ve + "ms " + ge;
                  if (
                      (v.find(fu).removeAttr("tabindex"),
                      v.removeAttr("aria-hidden"),
                      v.find("*").removeAttr("aria-hidden"),
                      J.find(fu).attr("tabindex", "-1"),
                      J.attr("aria-hidden", "true"),
                      J.find("*").attr("aria-hidden", "true"),
                      a || (v.each(m.intro), J.each(m.outro)),
                      E.immediate && !R)
                  ) {
                      n(v).set(ae), I();
                      return;
                  }
                  if (d.index === d.previous) return;
                  if ((a || d.ariaLiveLabel.text(`Slide ${G + 1} of ${l.length}.`), K === "cross")) {
                      var b = Math.round(Ve - Ve * _.crossOver),
                          C = Math.round(Ve - b);
                      (f = "opacity " + b + "ms " + ge),
                          n(B).set({ visibility: "" }).add(f).start({ opacity: 0 }),
                          n(v)
                              .set({ visibility: "", x: he, opacity: 0, zIndex: d.depth++ })
                              .add(f)
                              .wait(C)
                              .then({ opacity: 1 })
                              .then(I);
                      return;
                  }
                  if (K === "fade") {
                      n(B).set({ visibility: "" }).stop(),
                          n(v)
                              .set({ visibility: "", x: he, opacity: 0, zIndex: d.depth++ })
                              .add(f)
                              .start({ opacity: 1 })
                              .then(I);
                      return;
                  }
                  if (K === "over") {
                      (ae = { x: d.endX }),
                          n(B).set({ visibility: "" }).stop(),
                          n(v)
                              .set({ visibility: "", zIndex: d.depth++, x: he + l[d.index].width * Ye })
                              .add(y)
                              .start({ x: he })
                              .then(I);
                      return;
                  }
                  _.infinite && k.x
                      ? (n(d.slides.not(B)).set({ visibility: "", x: k.x }).add(y).start({ x: he }), n(B).set({ visibility: "", x: k.from }).add(y).start({ x: k.to }), (d.shifted = B))
                      : (_.infinite && d.shifted && (n(d.shifted).set({ visibility: "", x: oe }), (d.shifted = null)), n(d.slides).set({ visibility: "" }).add(y).start({ x: he }));
                  function I() {
                      (v = e(l[d.index].els)), (J = d.slides.not(v)), K !== "slide" && (ae.visibility = "hidden"), n(J).set(ae);
                  }
              }
              function j(d, E) {
                  var _ = e.data(E, c);
                  if (_) {
                      if (X(_)) return ee(_);
                      a && Y(_) && ee(_);
                  }
              }
              function ee(d) {
                  var E = 1,
                      _ = 0,
                      l = 0,
                      G = 0,
                      k = d.maskWidth,
                      A = k - d.config.edge;
                  A < 0 && (A = 0),
                      (d.anchors = [{ els: [], x: 0, width: 0 }]),
                      d.slides.each(function (he, ae) {
                          l - _ > A && (E++, (_ += k), (d.anchors[E - 1] = { els: [], x: l, width: 0 })), (G = e(ae).outerWidth(!0)), (l += G), (d.anchors[E - 1].width += G), d.anchors[E - 1].els.push(ae);
                          var v = he + 1 + " of " + d.slides.length;
                          e(ae).attr("aria-label", v), e(ae).attr("role", "group");
                      }),
                      (d.endX = l),
                      a && (d.pages = null),
                      d.nav.length && d.pages !== E && ((d.pages = E), ne(d));
                  var oe = d.index;
                  oe >= E && (oe = E - 1), V(d, { immediate: !0, index: oe });
              }
              function ne(d) {
                  var E = [],
                      _,
                      l = d.el.attr("data-nav-spacing");
                  l && (l = parseFloat(l) + "px");
                  for (var G = 0, k = d.pages; G < k; G++)
                      (_ = e(p)),
                          _.attr("aria-label", "Show slide " + (G + 1) + " of " + k)
                              .attr("aria-pressed", "false")
                              .attr("role", "button")
                              .attr("tabindex", "-1"),
                          d.nav.hasClass("w-num") && _.text(G + 1),
                          l != null && _.css({ "margin-left": l, "margin-right": l }),
                          E.push(_);
                  d.nav.empty().append(E);
              }
              function X(d) {
                  var E = d.mask.width();
                  return d.maskWidth !== E ? ((d.maskWidth = E), !0) : !1;
              }
              function Y(d) {
                  var E = 0;
                  return (
                      d.slides.each(function (_, l) {
                          E += e(l).outerWidth(!0);
                      }),
                      d.slidesWidth !== E ? ((d.slidesWidth = E), !0) : !1
                  );
              }
              return r;
          })
      );
  });
  var vu = u((Nk, yt) => {
      function Yi(e) {
          return (
              (yt.exports = Yi =
                  typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                      ? function (t) {
                            return typeof t;
                        }
                      : function (t) {
                            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                        }),
              (yt.exports.__esModule = !0),
              (yt.exports.default = yt.exports),
              Yi(e)
          );
      }
      (yt.exports = Yi), (yt.exports.__esModule = !0), (yt.exports.default = yt.exports);
  });
  var Jt = u((xk, Cr) => {
      var fT = vu().default;
      function hu(e) {
          if (typeof WeakMap != "function") return null;
          var t = new WeakMap(),
              r = new WeakMap();
          return (hu = function (o) {
              return o ? r : t;
          })(e);
      }
      function dT(e, t) {
          if (!t && e && e.__esModule) return e;
          if (e === null || (fT(e) !== "object" && typeof e != "function")) return { default: e };
          var r = hu(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
              if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                  var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                  a && (a.get || a.set) ? Object.defineProperty(n, i, a) : (n[i] = e[i]);
              }
          return (n.default = e), r && r.set(e, n), n;
      }
      (Cr.exports = dT), (Cr.exports.__esModule = !0), (Cr.exports.default = Cr.exports);
  });
  var ft = u((qk, Nr) => {
      function pT(e) {
          return e && e.__esModule ? e : { default: e };
      }
      (Nr.exports = pT), (Nr.exports.__esModule = !0), (Nr.exports.default = Nr.exports);
  });
  var Ie = u((Lk, gu) => {
      var mn = function (e) {
          return e && e.Math == Math && e;
      };
      gu.exports =
          mn(typeof globalThis == "object" && globalThis) ||
          mn(typeof window == "object" && window) ||
          mn(typeof self == "object" && self) ||
          mn(typeof global == "object" && global) ||
          (function () {
              return this;
          })() ||
          Function("return this")();
  });
  var er = u((Pk, Eu) => {
      Eu.exports = function (e) {
          try {
              return !!e();
          } catch {
              return !0;
          }
      };
  });
  var Ft = u((Dk, _u) => {
      var vT = er();
      _u.exports = !vT(function () {
          return (
              Object.defineProperty({}, 1, {
                  get: function () {
                      return 7;
                  },
              })[1] != 7
          );
      });
  });
  var Tn = u((Mk, yu) => {
      var xr = Function.prototype.call;
      yu.exports = xr.bind
          ? xr.bind(xr)
          : function () {
                return xr.apply(xr, arguments);
            };
  });
  var Ou = u((Iu) => {
      "use strict";
      var mu = {}.propertyIsEnumerable,
          Tu = Object.getOwnPropertyDescriptor,
          hT = Tu && !mu.call({ 1: 2 }, 1);
      Iu.f = hT
          ? function (t) {
                var r = Tu(this, t);
                return !!r && r.enumerable;
            }
          : mu;
  });
  var Qi = u((Gk, bu) => {
      bu.exports = function (e, t) {
          return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: t };
      };
  });
  var tt = u((Wk, wu) => {
      var Su = Function.prototype,
          $i = Su.bind,
          Zi = Su.call,
          gT = $i && $i.bind(Zi);
      wu.exports = $i
          ? function (e) {
                return e && gT(Zi, e);
            }
          : function (e) {
                return (
                    e &&
                    function () {
                        return Zi.apply(e, arguments);
                    }
                );
            };
  });
  var Cu = u((Uk, Ru) => {
      var Au = tt(),
          ET = Au({}.toString),
          _T = Au("".slice);
      Ru.exports = function (e) {
          return _T(ET(e), 8, -1);
      };
  });
  var xu = u((Xk, Nu) => {
      var yT = Ie(),
          mT = tt(),
          TT = er(),
          IT = Cu(),
          Ji = yT.Object,
          OT = mT("".split);
      Nu.exports = TT(function () {
          return !Ji("z").propertyIsEnumerable(0);
      })
          ? function (e) {
                return IT(e) == "String" ? OT(e, "") : Ji(e);
            }
          : Ji;
  });
  var eo = u((Vk, qu) => {
      var bT = Ie(),
          ST = bT.TypeError;
      qu.exports = function (e) {
          if (e == null) throw ST("Can't call method on " + e);
          return e;
      };
  });
  var qr = u((kk, Lu) => {
      var wT = xu(),
          AT = eo();
      Lu.exports = function (e) {
          return wT(AT(e));
      };
  });
  var dt = u((Bk, Pu) => {
      Pu.exports = function (e) {
          return typeof e == "function";
      };
  });
  var tr = u((Hk, Du) => {
      var RT = dt();
      Du.exports = function (e) {
          return typeof e == "object" ? e !== null : RT(e);
      };
  });
  var Lr = u((jk, Mu) => {
      var to = Ie(),
          CT = dt(),
          NT = function (e) {
              return CT(e) ? e : void 0;
          };
      Mu.exports = function (e, t) {
          return arguments.length < 2 ? NT(to[e]) : to[e] && to[e][t];
      };
  });
  var Gu = u((Kk, Fu) => {
      var xT = tt();
      Fu.exports = xT({}.isPrototypeOf);
  });
  var Uu = u((zk, Wu) => {
      var qT = Lr();
      Wu.exports = qT("navigator", "userAgent") || "";
  });
  var Ku = u((Yk, ju) => {
      var Hu = Ie(),
          ro = Uu(),
          Xu = Hu.process,
          Vu = Hu.Deno,
          ku = (Xu && Xu.versions) || (Vu && Vu.version),
          Bu = ku && ku.v8,
          rt,
          In;
      Bu && ((rt = Bu.split(".")), (In = rt[0] > 0 && rt[0] < 4 ? 1 : +(rt[0] + rt[1])));
      !In && ro && ((rt = ro.match(/Edge\/(\d+)/)), (!rt || rt[1] >= 74) && ((rt = ro.match(/Chrome\/(\d+)/)), rt && (In = +rt[1])));
      ju.exports = In;
  });
  var no = u((Qk, Yu) => {
      var zu = Ku(),
          LT = er();
      Yu.exports =
          !!Object.getOwnPropertySymbols &&
          !LT(function () {
              var e = Symbol();
              return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && zu && zu < 41);
          });
  });
  var io = u(($k, Qu) => {
      var PT = no();
      Qu.exports = PT && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var oo = u((Zk, $u) => {
      var DT = Ie(),
          MT = Lr(),
          FT = dt(),
          GT = Gu(),
          WT = io(),
          UT = DT.Object;
      $u.exports = WT
          ? function (e) {
                return typeof e == "symbol";
            }
          : function (e) {
                var t = MT("Symbol");
                return FT(t) && GT(t.prototype, UT(e));
            };
  });
  var Ju = u((Jk, Zu) => {
      var XT = Ie(),
          VT = XT.String;
      Zu.exports = function (e) {
          try {
              return VT(e);
          } catch {
              return "Object";
          }
      };
  });
  var tc = u((eB, ec) => {
      var kT = Ie(),
          BT = dt(),
          HT = Ju(),
          jT = kT.TypeError;
      ec.exports = function (e) {
          if (BT(e)) return e;
          throw jT(HT(e) + " is not a function");
      };
  });
  var nc = u((tB, rc) => {
      var KT = tc();
      rc.exports = function (e, t) {
          var r = e[t];
          return r == null ? void 0 : KT(r);
      };
  });
  var oc = u((rB, ic) => {
      var zT = Ie(),
          ao = Tn(),
          so = dt(),
          uo = tr(),
          YT = zT.TypeError;
      ic.exports = function (e, t) {
          var r, n;
          if ((t === "string" && so((r = e.toString)) && !uo((n = ao(r, e)))) || (so((r = e.valueOf)) && !uo((n = ao(r, e)))) || (t !== "string" && so((r = e.toString)) && !uo((n = ao(r, e))))) return n;
          throw YT("Can't convert object to primitive value");
      };
  });
  var sc = u((nB, ac) => {
      ac.exports = !1;
  });
  var On = u((iB, cc) => {
      var uc = Ie(),
          QT = Object.defineProperty;
      cc.exports = function (e, t) {
          try {
              QT(uc, e, { value: t, configurable: !0, writable: !0 });
          } catch {
              uc[e] = t;
          }
          return t;
      };
  });
  var bn = u((oB, fc) => {
      var $T = Ie(),
          ZT = On(),
          lc = "__core-js_shared__",
          JT = $T[lc] || ZT(lc, {});
      fc.exports = JT;
  });
  var co = u((aB, pc) => {
      var eI = sc(),
          dc = bn();
      (pc.exports = function (e, t) {
          return dc[e] || (dc[e] = t !== void 0 ? t : {});
      })("versions", []).push({ version: "3.19.0", mode: eI ? "pure" : "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
  });
  var hc = u((sB, vc) => {
      var tI = Ie(),
          rI = eo(),
          nI = tI.Object;
      vc.exports = function (e) {
          return nI(rI(e));
      };
  });
  var wt = u((uB, gc) => {
      var iI = tt(),
          oI = hc(),
          aI = iI({}.hasOwnProperty);
      gc.exports =
          Object.hasOwn ||
          function (t, r) {
              return aI(oI(t), r);
          };
  });
  var lo = u((cB, Ec) => {
      var sI = tt(),
          uI = 0,
          cI = Math.random(),
          lI = sI((1).toString);
      Ec.exports = function (e) {
          return "Symbol(" + (e === void 0 ? "" : e) + ")_" + lI(++uI + cI, 36);
      };
  });
  var fo = u((lB, Ic) => {
      var fI = Ie(),
          dI = co(),
          _c = wt(),
          pI = lo(),
          yc = no(),
          Tc = io(),
          rr = dI("wks"),
          Gt = fI.Symbol,
          mc = Gt && Gt.for,
          vI = Tc ? Gt : (Gt && Gt.withoutSetter) || pI;
      Ic.exports = function (e) {
          if (!_c(rr, e) || !(yc || typeof rr[e] == "string")) {
              var t = "Symbol." + e;
              yc && _c(Gt, e) ? (rr[e] = Gt[e]) : Tc && mc ? (rr[e] = mc(t)) : (rr[e] = vI(t));
          }
          return rr[e];
      };
  });
  var wc = u((fB, Sc) => {
      var hI = Ie(),
          gI = Tn(),
          Oc = tr(),
          bc = oo(),
          EI = nc(),
          _I = oc(),
          yI = fo(),
          mI = hI.TypeError,
          TI = yI("toPrimitive");
      Sc.exports = function (e, t) {
          if (!Oc(e) || bc(e)) return e;
          var r = EI(e, TI),
              n;
          if (r) {
              if ((t === void 0 && (t = "default"), (n = gI(r, e, t)), !Oc(n) || bc(n))) return n;
              throw mI("Can't convert object to primitive value");
          }
          return t === void 0 && (t = "number"), _I(e, t);
      };
  });
  var po = u((dB, Ac) => {
      var II = wc(),
          OI = oo();
      Ac.exports = function (e) {
          var t = II(e, "string");
          return OI(t) ? t : t + "";
      };
  });
  var ho = u((pB, Cc) => {
      var bI = Ie(),
          Rc = tr(),
          vo = bI.document,
          SI = Rc(vo) && Rc(vo.createElement);
      Cc.exports = function (e) {
          return SI ? vo.createElement(e) : {};
      };
  });
  var go = u((vB, Nc) => {
      var wI = Ft(),
          AI = er(),
          RI = ho();
      Nc.exports =
          !wI &&
          !AI(function () {
              return (
                  Object.defineProperty(RI("div"), "a", {
                      get: function () {
                          return 7;
                      },
                  }).a != 7
              );
          });
  });
  var Eo = u((qc) => {
      var CI = Ft(),
          NI = Tn(),
          xI = Ou(),
          qI = Qi(),
          LI = qr(),
          PI = po(),
          DI = wt(),
          MI = go(),
          xc = Object.getOwnPropertyDescriptor;
      qc.f = CI
          ? xc
          : function (t, r) {
                if (((t = LI(t)), (r = PI(r)), MI))
                    try {
                        return xc(t, r);
                    } catch {}
                if (DI(t, r)) return qI(!NI(xI.f, t, r), t[r]);
            };
  });
  var Pr = u((gB, Pc) => {
      var Lc = Ie(),
          FI = tr(),
          GI = Lc.String,
          WI = Lc.TypeError;
      Pc.exports = function (e) {
          if (FI(e)) return e;
          throw WI(GI(e) + " is not an object");
      };
  });
  var Dr = u((Fc) => {
      var UI = Ie(),
          XI = Ft(),
          VI = go(),
          Dc = Pr(),
          kI = po(),
          BI = UI.TypeError,
          Mc = Object.defineProperty;
      Fc.f = XI
          ? Mc
          : function (t, r, n) {
                if ((Dc(t), (r = kI(r)), Dc(n), VI))
                    try {
                        return Mc(t, r, n);
                    } catch {}
                if ("get" in n || "set" in n) throw BI("Accessors not supported");
                return "value" in n && (t[r] = n.value), t;
            };
  });
  var Sn = u((_B, Gc) => {
      var HI = Ft(),
          jI = Dr(),
          KI = Qi();
      Gc.exports = HI
          ? function (e, t, r) {
                return jI.f(e, t, KI(1, r));
            }
          : function (e, t, r) {
                return (e[t] = r), e;
            };
  });
  var yo = u((yB, Wc) => {
      var zI = tt(),
          YI = dt(),
          _o = bn(),
          QI = zI(Function.toString);
      YI(_o.inspectSource) ||
          (_o.inspectSource = function (e) {
              return QI(e);
          });
      Wc.exports = _o.inspectSource;
  });
  var Vc = u((mB, Xc) => {
      var $I = Ie(),
          ZI = dt(),
          JI = yo(),
          Uc = $I.WeakMap;
      Xc.exports = ZI(Uc) && /native code/.test(JI(Uc));
  });
  var mo = u((TB, Bc) => {
      var eO = co(),
          tO = lo(),
          kc = eO("keys");
      Bc.exports = function (e) {
          return kc[e] || (kc[e] = tO(e));
      };
  });
  var wn = u((IB, Hc) => {
      Hc.exports = {};
  });
  var $c = u((OB, Qc) => {
      var rO = Vc(),
          Yc = Ie(),
          To = tt(),
          nO = tr(),
          iO = Sn(),
          Io = wt(),
          Oo = bn(),
          oO = mo(),
          aO = wn(),
          jc = "Object already initialized",
          So = Yc.TypeError,
          sO = Yc.WeakMap,
          An,
          Mr,
          Rn,
          uO = function (e) {
              return Rn(e) ? Mr(e) : An(e, {});
          },
          cO = function (e) {
              return function (t) {
                  var r;
                  if (!nO(t) || (r = Mr(t)).type !== e) throw So("Incompatible receiver, " + e + " required");
                  return r;
              };
          };
      rO || Oo.state
          ? ((At = Oo.state || (Oo.state = new sO())),
            (Kc = To(At.get)),
            (bo = To(At.has)),
            (zc = To(At.set)),
            (An = function (e, t) {
                if (bo(At, e)) throw new So(jc);
                return (t.facade = e), zc(At, e, t), t;
            }),
            (Mr = function (e) {
                return Kc(At, e) || {};
            }),
            (Rn = function (e) {
                return bo(At, e);
            }))
          : ((Wt = oO("state")),
            (aO[Wt] = !0),
            (An = function (e, t) {
                if (Io(e, Wt)) throw new So(jc);
                return (t.facade = e), iO(e, Wt, t), t;
            }),
            (Mr = function (e) {
                return Io(e, Wt) ? e[Wt] : {};
            }),
            (Rn = function (e) {
                return Io(e, Wt);
            }));
      var At, Kc, bo, zc, Wt;
      Qc.exports = { set: An, get: Mr, has: Rn, enforce: uO, getterFor: cO };
  });
  var el = u((bB, Jc) => {
      var wo = Ft(),
          lO = wt(),
          Zc = Function.prototype,
          fO = wo && Object.getOwnPropertyDescriptor,
          Ao = lO(Zc, "name"),
          dO = Ao && function () {}.name === "something",
          pO = Ao && (!wo || (wo && fO(Zc, "name").configurable));
      Jc.exports = { EXISTS: Ao, PROPER: dO, CONFIGURABLE: pO };
  });
  var ol = u((SB, il) => {
      var vO = Ie(),
          tl = dt(),
          hO = wt(),
          rl = Sn(),
          gO = On(),
          EO = yo(),
          nl = $c(),
          _O = el().CONFIGURABLE,
          yO = nl.get,
          mO = nl.enforce,
          TO = String(String).split("String");
      (il.exports = function (e, t, r, n) {
          var o = n ? !!n.unsafe : !1,
              i = n ? !!n.enumerable : !1,
              a = n ? !!n.noTargetGet : !1,
              s = n && n.name !== void 0 ? n.name : t,
              c;
          if (
              (tl(r) &&
                  (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
                  (!hO(r, "name") || (_O && r.name !== s)) && rl(r, "name", s),
                  (c = mO(r)),
                  c.source || (c.source = TO.join(typeof s == "string" ? s : ""))),
              e === vO)
          ) {
              i ? (e[t] = r) : gO(t, r);
              return;
          } else o ? !a && e[t] && (i = !0) : delete e[t];
          i ? (e[t] = r) : rl(e, t, r);
      })(Function.prototype, "toString", function () {
          return (tl(this) && yO(this).source) || EO(this);
      });
  });
  var Ro = u((wB, al) => {
      var IO = Math.ceil,
          OO = Math.floor;
      al.exports = function (e) {
          var t = +e;
          return t !== t || t === 0 ? 0 : (t > 0 ? OO : IO)(t);
      };
  });
  var ul = u((AB, sl) => {
      var bO = Ro(),
          SO = Math.max,
          wO = Math.min;
      sl.exports = function (e, t) {
          var r = bO(e);
          return r < 0 ? SO(r + t, 0) : wO(r, t);
      };
  });
  var ll = u((RB, cl) => {
      var AO = Ro(),
          RO = Math.min;
      cl.exports = function (e) {
          return e > 0 ? RO(AO(e), 9007199254740991) : 0;
      };
  });
  var dl = u((CB, fl) => {
      var CO = ll();
      fl.exports = function (e) {
          return CO(e.length);
      };
  });
  var Co = u((NB, vl) => {
      var NO = qr(),
          xO = ul(),
          qO = dl(),
          pl = function (e) {
              return function (t, r, n) {
                  var o = NO(t),
                      i = qO(o),
                      a = xO(n, i),
                      s;
                  if (e && r != r) {
                      for (; i > a; ) if (((s = o[a++]), s != s)) return !0;
                  } else for (; i > a; a++) if ((e || a in o) && o[a] === r) return e || a || 0;
                  return !e && -1;
              };
          };
      vl.exports = { includes: pl(!0), indexOf: pl(!1) };
  });
  var xo = u((xB, gl) => {
      var LO = tt(),
          No = wt(),
          PO = qr(),
          DO = Co().indexOf,
          MO = wn(),
          hl = LO([].push);
      gl.exports = function (e, t) {
          var r = PO(e),
              n = 0,
              o = [],
              i;
          for (i in r) !No(MO, i) && No(r, i) && hl(o, i);
          for (; t.length > n; ) No(r, (i = t[n++])) && (~DO(o, i) || hl(o, i));
          return o;
      };
  });
  var Cn = u((qB, El) => {
      El.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  });
  var yl = u((_l) => {
      var FO = xo(),
          GO = Cn(),
          WO = GO.concat("length", "prototype");
      _l.f =
          Object.getOwnPropertyNames ||
          function (t) {
              return FO(t, WO);
          };
  });
  var Tl = u((ml) => {
      ml.f = Object.getOwnPropertySymbols;
  });
  var Ol = u((DB, Il) => {
      var UO = Lr(),
          XO = tt(),
          VO = yl(),
          kO = Tl(),
          BO = Pr(),
          HO = XO([].concat);
      Il.exports =
          UO("Reflect", "ownKeys") ||
          function (t) {
              var r = VO.f(BO(t)),
                  n = kO.f;
              return n ? HO(r, n(t)) : r;
          };
  });
  var Sl = u((MB, bl) => {
      var jO = wt(),
          KO = Ol(),
          zO = Eo(),
          YO = Dr();
      bl.exports = function (e, t) {
          for (var r = KO(t), n = YO.f, o = zO.f, i = 0; i < r.length; i++) {
              var a = r[i];
              jO(e, a) || n(e, a, o(t, a));
          }
      };
  });
  var Al = u((FB, wl) => {
      var QO = er(),
          $O = dt(),
          ZO = /#|\.prototype\./,
          Fr = function (e, t) {
              var r = eb[JO(e)];
              return r == rb ? !0 : r == tb ? !1 : $O(t) ? QO(t) : !!t;
          },
          JO = (Fr.normalize = function (e) {
              return String(e).replace(ZO, ".").toLowerCase();
          }),
          eb = (Fr.data = {}),
          tb = (Fr.NATIVE = "N"),
          rb = (Fr.POLYFILL = "P");
      wl.exports = Fr;
  });
  var Cl = u((GB, Rl) => {
      var qo = Ie(),
          nb = Eo().f,
          ib = Sn(),
          ob = ol(),
          ab = On(),
          sb = Sl(),
          ub = Al();
      Rl.exports = function (e, t) {
          var r = e.target,
              n = e.global,
              o = e.stat,
              i,
              a,
              s,
              c,
              p,
              g;
          if ((n ? (a = qo) : o ? (a = qo[r] || ab(r, {})) : (a = (qo[r] || {}).prototype), a))
              for (s in t) {
                  if (((p = t[s]), e.noTargetGet ? ((g = nb(a, s)), (c = g && g.value)) : (c = a[s]), (i = ub(n ? s : r + (o ? "." : "#") + s, e.forced)), !i && c !== void 0)) {
                      if (typeof p == typeof c) continue;
                      sb(p, c);
                  }
                  (e.sham || (c && c.sham)) && ib(p, "sham", !0), ob(a, s, p, e);
              }
      };
  });
  var xl = u((WB, Nl) => {
      var cb = xo(),
          lb = Cn();
      Nl.exports =
          Object.keys ||
          function (t) {
              return cb(t, lb);
          };
  });
  var Ll = u((UB, ql) => {
      var fb = Ft(),
          db = Dr(),
          pb = Pr(),
          vb = qr(),
          hb = xl();
      ql.exports = fb
          ? Object.defineProperties
          : function (t, r) {
                pb(t);
                for (var n = vb(r), o = hb(r), i = o.length, a = 0, s; i > a; ) db.f(t, (s = o[a++]), n[s]);
                return t;
            };
  });
  var Dl = u((XB, Pl) => {
      var gb = Lr();
      Pl.exports = gb("document", "documentElement");
  });
  var kl = u((VB, Vl) => {
      var Eb = Pr(),
          _b = Ll(),
          Ml = Cn(),
          yb = wn(),
          mb = Dl(),
          Tb = ho(),
          Ib = mo(),
          Fl = ">",
          Gl = "<",
          Po = "prototype",
          Do = "script",
          Ul = Ib("IE_PROTO"),
          Lo = function () {},
          Xl = function (e) {
              return Gl + Do + Fl + e + Gl + "/" + Do + Fl;
          },
          Wl = function (e) {
              e.write(Xl("")), e.close();
              var t = e.parentWindow.Object;
              return (e = null), t;
          },
          Ob = function () {
              var e = Tb("iframe"),
                  t = "java" + Do + ":",
                  r;
              return (e.style.display = "none"), mb.appendChild(e), (e.src = String(t)), (r = e.contentWindow.document), r.open(), r.write(Xl("document.F=Object")), r.close(), r.F;
          },
          Nn,
          xn = function () {
              try {
                  Nn = new ActiveXObject("htmlfile");
              } catch {}
              xn = typeof document < "u" ? (document.domain && Nn ? Wl(Nn) : Ob()) : Wl(Nn);
              for (var e = Ml.length; e--; ) delete xn[Po][Ml[e]];
              return xn();
          };
      yb[Ul] = !0;
      Vl.exports =
          Object.create ||
          function (t, r) {
              var n;
              return t !== null ? ((Lo[Po] = Eb(t)), (n = new Lo()), (Lo[Po] = null), (n[Ul] = t)) : (n = xn()), r === void 0 ? n : _b(n, r);
          };
  });
  var Hl = u((kB, Bl) => {
      var bb = fo(),
          Sb = kl(),
          wb = Dr(),
          Mo = bb("unscopables"),
          Fo = Array.prototype;
      Fo[Mo] == null && wb.f(Fo, Mo, { configurable: !0, value: Sb(null) });
      Bl.exports = function (e) {
          Fo[Mo][e] = !0;
      };
  });
  var jl = u(() => {
      "use strict";
      var Ab = Cl(),
          Rb = Co().includes,
          Cb = Hl();
      Ab(
          { target: "Array", proto: !0 },
          {
              includes: function (t) {
                  return Rb(this, t, arguments.length > 1 ? arguments[1] : void 0);
              },
          }
      );
      Cb("includes");
  });
  var zl = u((jB, Kl) => {
      var Nb = Ie(),
          xb = tt();
      Kl.exports = function (e, t) {
          return xb(Nb[e].prototype[t]);
      };
  });
  var Ql = u((KB, Yl) => {
      jl();
      var qb = zl();
      Yl.exports = qb("Array", "includes");
  });
  var Zl = u((zB, $l) => {
      var Lb = Ql();
      $l.exports = Lb;
  });
  var ef = u((YB, Jl) => {
      var Pb = Zl();
      Jl.exports = Pb;
  });
  var rf = u((QB, tf) => {
      var Db = typeof global == "object" && global && global.Object === Object && global;
      tf.exports = Db;
  });
  var of = u(($B, nf) => {
      var Mb = rf(),
          Fb = typeof self == "object" && self && self.Object === Object && self,
          Gb = Mb || Fb || Function("return this")();
      nf.exports = Gb;
  });
  var Go = u((ZB, af) => {
      var Wb = of(),
          Ub = Wb.Symbol;
      af.exports = Ub;
  });
  var lf = u((JB, cf) => {
      var sf = Go(),
          uf = Object.prototype,
          Xb = uf.hasOwnProperty,
          Vb = uf.toString,
          Gr = sf ? sf.toStringTag : void 0;
      function kb(e) {
          var t = Xb.call(e, Gr),
              r = e[Gr];
          try {
              e[Gr] = void 0;
              var n = !0;
          } catch {}
          var o = Vb.call(e);
          return n && (t ? (e[Gr] = r) : delete e[Gr]), o;
      }
      cf.exports = kb;
  });
  var df = u((eH, ff) => {
      var Bb = Object.prototype,
          Hb = Bb.toString;
      function jb(e) {
          return Hb.call(e);
      }
      ff.exports = jb;
  });
  var gf = u((tH, hf) => {
      var pf = Go(),
          Kb = lf(),
          zb = df(),
          Yb = "[object Null]",
          Qb = "[object Undefined]",
          vf = pf ? pf.toStringTag : void 0;
      function $b(e) {
          return e == null ? (e === void 0 ? Qb : Yb) : vf && vf in Object(e) ? Kb(e) : zb(e);
      }
      hf.exports = $b;
  });
  var _f = u((rH, Ef) => {
      function Zb(e, t) {
          return function (r) {
              return e(t(r));
          };
      }
      Ef.exports = Zb;
  });
  var mf = u((nH, yf) => {
      var Jb = _f(),
          eS = Jb(Object.getPrototypeOf, Object);
      yf.exports = eS;
  });
  var If = u((iH, Tf) => {
      function tS(e) {
          return e != null && typeof e == "object";
      }
      Tf.exports = tS;
  });
  var Wo = u((oH, bf) => {
      var rS = gf(),
          nS = mf(),
          iS = If(),
          oS = "[object Object]",
          aS = Function.prototype,
          sS = Object.prototype,
          Of = aS.toString,
          uS = sS.hasOwnProperty,
          cS = Of.call(Object);
      function lS(e) {
          if (!iS(e) || rS(e) != oS) return !1;
          var t = nS(e);
          if (t === null) return !0;
          var r = uS.call(t, "constructor") && t.constructor;
          return typeof r == "function" && r instanceof r && Of.call(r) == cS;
      }
      bf.exports = lS;
  });
  var Sf = u((Uo) => {
      "use strict";
      Object.defineProperty(Uo, "__esModule", { value: !0 });
      Uo.default = fS;
      function fS(e) {
          var t,
              r = e.Symbol;
          return typeof r == "function" ? (r.observable ? (t = r.observable) : ((t = r("observable")), (r.observable = t))) : (t = "@@observable"), t;
      }
  });
  var wf = u((Vo, Xo) => {
      "use strict";
      Object.defineProperty(Vo, "__esModule", { value: !0 });
      var dS = Sf(),
          pS = vS(dS);
      function vS(e) {
          return e && e.__esModule ? e : { default: e };
      }
      var nr;
      typeof self < "u" ? (nr = self) : typeof window < "u" ? (nr = window) : typeof global < "u" ? (nr = global) : typeof Xo < "u" ? (nr = Xo) : (nr = Function("return this")());
      var hS = (0, pS.default)(nr);
      Vo.default = hS;
  });
  var ko = u((Wr) => {
      "use strict";
      Wr.__esModule = !0;
      Wr.ActionTypes = void 0;
      Wr.default = Nf;
      var gS = Wo(),
          ES = Cf(gS),
          _S = wf(),
          Af = Cf(_S);
      function Cf(e) {
          return e && e.__esModule ? e : { default: e };
      }
      var Rf = (Wr.ActionTypes = { INIT: "@@redux/INIT" });
      function Nf(e, t, r) {
          var n;
          if ((typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)), typeof r < "u")) {
              if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
              return r(Nf)(e, t);
          }
          if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
          var o = e,
              i = t,
              a = [],
              s = a,
              c = !1;
          function p() {
              s === a && (s = a.slice());
          }
          function g() {
              return i;
          }
          function h(w) {
              if (typeof w != "function") throw new Error("Expected listener to be a function.");
              var F = !0;
              return (
                  p(),
                  s.push(w),
                  function () {
                      if (F) {
                          (F = !1), p();
                          var x = s.indexOf(w);
                          s.splice(x, 1);
                      }
                  }
              );
          }
          function m(w) {
              if (!(0, ES.default)(w)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
              if (typeof w.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
              if (c) throw new Error("Reducers may not dispatch actions.");
              try {
                  (c = !0), (i = o(i, w));
              } finally {
                  c = !1;
              }
              for (var F = (a = s), N = 0; N < F.length; N++) F[N]();
              return w;
          }
          function T(w) {
              if (typeof w != "function") throw new Error("Expected the nextReducer to be a function.");
              (o = w), m({ type: Rf.INIT });
          }
          function R() {
              var w,
                  F = h;
              return (
                  (w = {
                      subscribe: function (x) {
                          if (typeof x != "object") throw new TypeError("Expected the observer to be an object.");
                          function S() {
                              x.next && x.next(g());
                          }
                          S();
                          var P = F(S);
                          return { unsubscribe: P };
                      },
                  }),
                  (w[Af.default] = function () {
                      return this;
                  }),
                  w
              );
          }
          return m({ type: Rf.INIT }), (n = { dispatch: m, subscribe: h, getState: g, replaceReducer: T }), (n[Af.default] = R), n;
      }
  });
  var Ho = u((Bo) => {
      "use strict";
      Bo.__esModule = !0;
      Bo.default = yS;
      function yS(e) {
          typeof console < "u" && typeof console.error == "function" && console.error(e);
          try {
              throw new Error(e);
          } catch {}
      }
  });
  var Lf = u((jo) => {
      "use strict";
      jo.__esModule = !0;
      jo.default = bS;
      var xf = ko(),
          mS = Wo(),
          cH = qf(mS),
          TS = Ho(),
          lH = qf(TS);
      function qf(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function IS(e, t) {
          var r = t && t.type,
              n = (r && '"' + r.toString() + '"') || "an action";
          return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
      }
      function OS(e) {
          Object.keys(e).forEach(function (t) {
              var r = e[t],
                  n = r(void 0, { type: xf.ActionTypes.INIT });
              if (typeof n > "u")
                  throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
              var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
              if (typeof r(void 0, { type: o }) > "u")
                  throw new Error(
                      'Reducer "' +
                          t +
                          '" returned undefined when probed with a random type. ' +
                          ("Don't try to handle " + xf.ActionTypes.INIT + ' or other actions in "redux/*" ') +
                          "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
                  );
          });
      }
      function bS(e) {
          for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
              var o = t[n];
              typeof e[o] == "function" && (r[o] = e[o]);
          }
          var i = Object.keys(r);
          if (!1) var a;
          var s;
          try {
              OS(r);
          } catch (c) {
              s = c;
          }
          return function () {
              var p = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                  g = arguments[1];
              if (s) throw s;
              if (!1) var h;
              for (var m = !1, T = {}, R = 0; R < i.length; R++) {
                  var w = i[R],
                      F = r[w],
                      N = p[w],
                      x = F(N, g);
                  if (typeof x > "u") {
                      var S = IS(w, g);
                      throw new Error(S);
                  }
                  (T[w] = x), (m = m || x !== N);
              }
              return m ? T : p;
          };
      }
  });
  var Df = u((Ko) => {
      "use strict";
      Ko.__esModule = !0;
      Ko.default = SS;
      function Pf(e, t) {
          return function () {
              return t(e.apply(void 0, arguments));
          };
      }
      function SS(e, t) {
          if (typeof e == "function") return Pf(e, t);
          if (typeof e != "object" || e === null)
              throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
          for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
              var i = r[o],
                  a = e[i];
              typeof a == "function" && (n[i] = Pf(a, t));
          }
          return n;
      }
  });
  var Yo = u((zo) => {
      "use strict";
      zo.__esModule = !0;
      zo.default = wS;
      function wS() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          if (t.length === 0)
              return function (i) {
                  return i;
              };
          if (t.length === 1) return t[0];
          var n = t[t.length - 1],
              o = t.slice(0, -1);
          return function () {
              return o.reduceRight(function (i, a) {
                  return a(i);
              }, n.apply(void 0, arguments));
          };
      }
  });
  var Mf = u((Qo) => {
      "use strict";
      Qo.__esModule = !0;
      var AS =
          Object.assign ||
          function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
          };
      Qo.default = xS;
      var RS = Yo(),
          CS = NS(RS);
      function NS(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function xS() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return function (n) {
              return function (o, i, a) {
                  var s = n(o, i, a),
                      c = s.dispatch,
                      p = [],
                      g = {
                          getState: s.getState,
                          dispatch: function (m) {
                              return c(m);
                          },
                      };
                  return (
                      (p = t.map(function (h) {
                          return h(g);
                      })),
                      (c = CS.default.apply(void 0, p)(s.dispatch)),
                      AS({}, s, { dispatch: c })
                  );
              };
          };
      }
  });
  var $o = u((Ke) => {
      "use strict";
      Ke.__esModule = !0;
      Ke.compose = Ke.applyMiddleware = Ke.bindActionCreators = Ke.combineReducers = Ke.createStore = void 0;
      var qS = ko(),
          LS = ir(qS),
          PS = Lf(),
          DS = ir(PS),
          MS = Df(),
          FS = ir(MS),
          GS = Mf(),
          WS = ir(GS),
          US = Yo(),
          XS = ir(US),
          VS = Ho(),
          hH = ir(VS);
      function ir(e) {
          return e && e.__esModule ? e : { default: e };
      }
      Ke.createStore = LS.default;
      Ke.combineReducers = DS.default;
      Ke.bindActionCreators = FS.default;
      Ke.applyMiddleware = WS.default;
      Ke.compose = XS.default;
  });
  var Ff = u((qe) => {
      "use strict";
      Object.defineProperty(qe, "__esModule", { value: !0 });
      qe.QuickEffectIds = qe.QuickEffectDirectionConsts = qe.EventTypeConsts = qe.EventLimitAffectedElements = qe.EventContinuousMouseAxes = qe.EventBasedOn = qe.EventAppliesTo = void 0;
      var kS = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
      };
      qe.EventTypeConsts = kS;
      var BS = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
      qe.EventAppliesTo = BS;
      var HS = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
      qe.EventBasedOn = HS;
      var jS = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
      qe.EventContinuousMouseAxes = jS;
      var KS = { CHILDREN: "CHILDREN", SIBLINGS: "SIBLINGS", IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN" };
      qe.EventLimitAffectedElements = KS;
      var zS = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
      };
      qe.QuickEffectIds = zS;
      var YS = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
      };
      qe.QuickEffectDirectionConsts = YS;
  });
  var Zo = u((or) => {
      "use strict";
      Object.defineProperty(or, "__esModule", { value: !0 });
      or.ActionTypeConsts = or.ActionAppliesTo = void 0;
      var QS = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      };
      or.ActionTypeConsts = QS;
      var $S = { ELEMENT: "ELEMENT", ELEMENT_CLASS: "ELEMENT_CLASS", TRIGGER_ELEMENT: "TRIGGER_ELEMENT" };
      or.ActionAppliesTo = $S;
  });
  var Gf = u((qn) => {
      "use strict";
      Object.defineProperty(qn, "__esModule", { value: !0 });
      qn.InteractionTypeConsts = void 0;
      var ZS = {
          MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
          MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
          MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
          SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
          SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
          MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
          PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
          PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
          PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
          NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
          DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
          ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
          TAB_INTERACTION: "TAB_INTERACTION",
          SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
      qn.InteractionTypeConsts = ZS;
  });
  var Wf = u((Ln) => {
      "use strict";
      Object.defineProperty(Ln, "__esModule", { value: !0 });
      Ln.ReducedMotionTypes = void 0;
      var JS = Zo(),
          { TRANSFORM_MOVE: ew, TRANSFORM_SCALE: tw, TRANSFORM_ROTATE: rw, TRANSFORM_SKEW: nw, STYLE_SIZE: iw, STYLE_FILTER: ow, STYLE_FONT_VARIATION: aw } = JS.ActionTypeConsts,
          sw = { [ew]: !0, [tw]: !0, [rw]: !0, [nw]: !0, [iw]: !0, [ow]: !0, [aw]: !0 };
      Ln.ReducedMotionTypes = sw;
  });
  var Uf = u((le) => {
      "use strict";
      Object.defineProperty(le, "__esModule", { value: !0 });
      le.IX2_VIEWPORT_WIDTH_CHANGED = le.IX2_TEST_FRAME_RENDERED = le.IX2_STOP_REQUESTED = le.IX2_SESSION_STOPPED = le.IX2_SESSION_STARTED = le.IX2_SESSION_INITIALIZED = le.IX2_RAW_DATA_IMPORTED = le.IX2_PREVIEW_REQUESTED = le.IX2_PLAYBACK_REQUESTED = le.IX2_PARAMETER_CHANGED = le.IX2_MEDIA_QUERIES_DEFINED = le.IX2_INSTANCE_STARTED = le.IX2_INSTANCE_REMOVED = le.IX2_INSTANCE_ADDED = le.IX2_EVENT_STATE_CHANGED = le.IX2_EVENT_LISTENER_ADDED = le.IX2_ELEMENT_STATE_CHANGED = le.IX2_CLEAR_REQUESTED = le.IX2_ANIMATION_FRAME_CHANGED = le.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
      var uw = "IX2_RAW_DATA_IMPORTED";
      le.IX2_RAW_DATA_IMPORTED = uw;
      var cw = "IX2_SESSION_INITIALIZED";
      le.IX2_SESSION_INITIALIZED = cw;
      var lw = "IX2_SESSION_STARTED";
      le.IX2_SESSION_STARTED = lw;
      var fw = "IX2_SESSION_STOPPED";
      le.IX2_SESSION_STOPPED = fw;
      var dw = "IX2_PREVIEW_REQUESTED";
      le.IX2_PREVIEW_REQUESTED = dw;
      var pw = "IX2_PLAYBACK_REQUESTED";
      le.IX2_PLAYBACK_REQUESTED = pw;
      var vw = "IX2_STOP_REQUESTED";
      le.IX2_STOP_REQUESTED = vw;
      var hw = "IX2_CLEAR_REQUESTED";
      le.IX2_CLEAR_REQUESTED = hw;
      var gw = "IX2_EVENT_LISTENER_ADDED";
      le.IX2_EVENT_LISTENER_ADDED = gw;
      var Ew = "IX2_EVENT_STATE_CHANGED";
      le.IX2_EVENT_STATE_CHANGED = Ew;
      var _w = "IX2_ANIMATION_FRAME_CHANGED";
      le.IX2_ANIMATION_FRAME_CHANGED = _w;
      var yw = "IX2_PARAMETER_CHANGED";
      le.IX2_PARAMETER_CHANGED = yw;
      var mw = "IX2_INSTANCE_ADDED";
      le.IX2_INSTANCE_ADDED = mw;
      var Tw = "IX2_INSTANCE_STARTED";
      le.IX2_INSTANCE_STARTED = Tw;
      var Iw = "IX2_INSTANCE_REMOVED";
      le.IX2_INSTANCE_REMOVED = Iw;
      var Ow = "IX2_ELEMENT_STATE_CHANGED";
      le.IX2_ELEMENT_STATE_CHANGED = Ow;
      var bw = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
      le.IX2_ACTION_LIST_PLAYBACK_CHANGED = bw;
      var Sw = "IX2_VIEWPORT_WIDTH_CHANGED";
      le.IX2_VIEWPORT_WIDTH_CHANGED = Sw;
      var ww = "IX2_MEDIA_QUERIES_DEFINED";
      le.IX2_MEDIA_QUERIES_DEFINED = ww;
      var Aw = "IX2_TEST_FRAME_RENDERED";
      le.IX2_TEST_FRAME_RENDERED = Aw;
  });
  var Xf = u((D) => {
      "use strict";
      Object.defineProperty(D, "__esModule", { value: !0 });
      D.W_MOD_JS = D.W_MOD_IX = D.WILL_CHANGE = D.WIDTH = D.WF_PAGE = D.TRANSLATE_Z = D.TRANSLATE_Y = D.TRANSLATE_X = D.TRANSLATE_3D = D.TRANSFORM = D.SKEW_Y = D.SKEW_X = D.SKEW = D.SIBLINGS = D.SCALE_Z = D.SCALE_Y = D.SCALE_X = D.SCALE_3D = D.ROTATE_Z = D.ROTATE_Y = D.ROTATE_X = D.RENDER_TRANSFORM = D.RENDER_STYLE = D.RENDER_PLUGIN = D.RENDER_GENERAL = D.PRESERVE_3D = D.PLAIN_OBJECT = D.PARENT = D.OPACITY = D.IX2_ID_DELIMITER = D.IMMEDIATE_CHILDREN = D.HTML_ELEMENT = D.HEIGHT = D.FONT_VARIATION_SETTINGS = D.FLEX = D.FILTER = D.DISPLAY = D.CONFIG_Z_VALUE = D.CONFIG_Z_UNIT = D.CONFIG_Y_VALUE = D.CONFIG_Y_UNIT = D.CONFIG_X_VALUE = D.CONFIG_X_UNIT = D.CONFIG_VALUE = D.CONFIG_UNIT = D.COMMA_DELIMITER = D.COLOR = D.COLON_DELIMITER = D.CHILDREN = D.BOUNDARY_SELECTOR = D.BORDER_COLOR = D.BAR_DELIMITER = D.BACKGROUND_COLOR = D.BACKGROUND = D.AUTO = D.ABSTRACT_NODE = void 0;
      var Rw = "|";
      D.IX2_ID_DELIMITER = Rw;
      var Cw = "data-wf-page";
      D.WF_PAGE = Cw;
      var Nw = "w-mod-js";
      D.W_MOD_JS = Nw;
      var xw = "w-mod-ix";
      D.W_MOD_IX = xw;
      var qw = ".w-dyn-item";
      D.BOUNDARY_SELECTOR = qw;
      var Lw = "xValue";
      D.CONFIG_X_VALUE = Lw;
      var Pw = "yValue";
      D.CONFIG_Y_VALUE = Pw;
      var Dw = "zValue";
      D.CONFIG_Z_VALUE = Dw;
      var Mw = "value";
      D.CONFIG_VALUE = Mw;
      var Fw = "xUnit";
      D.CONFIG_X_UNIT = Fw;
      var Gw = "yUnit";
      D.CONFIG_Y_UNIT = Gw;
      var Ww = "zUnit";
      D.CONFIG_Z_UNIT = Ww;
      var Uw = "unit";
      D.CONFIG_UNIT = Uw;
      var Xw = "transform";
      D.TRANSFORM = Xw;
      var Vw = "translateX";
      D.TRANSLATE_X = Vw;
      var kw = "translateY";
      D.TRANSLATE_Y = kw;
      var Bw = "translateZ";
      D.TRANSLATE_Z = Bw;
      var Hw = "translate3d";
      D.TRANSLATE_3D = Hw;
      var jw = "scaleX";
      D.SCALE_X = jw;
      var Kw = "scaleY";
      D.SCALE_Y = Kw;
      var zw = "scaleZ";
      D.SCALE_Z = zw;
      var Yw = "scale3d";
      D.SCALE_3D = Yw;
      var Qw = "rotateX";
      D.ROTATE_X = Qw;
      var $w = "rotateY";
      D.ROTATE_Y = $w;
      var Zw = "rotateZ";
      D.ROTATE_Z = Zw;
      var Jw = "skew";
      D.SKEW = Jw;
      var eA = "skewX";
      D.SKEW_X = eA;
      var tA = "skewY";
      D.SKEW_Y = tA;
      var rA = "opacity";
      D.OPACITY = rA;
      var nA = "filter";
      D.FILTER = nA;
      var iA = "font-variation-settings";
      D.FONT_VARIATION_SETTINGS = iA;
      var oA = "width";
      D.WIDTH = oA;
      var aA = "height";
      D.HEIGHT = aA;
      var sA = "backgroundColor";
      D.BACKGROUND_COLOR = sA;
      var uA = "background";
      D.BACKGROUND = uA;
      var cA = "borderColor";
      D.BORDER_COLOR = cA;
      var lA = "color";
      D.COLOR = lA;
      var fA = "display";
      D.DISPLAY = fA;
      var dA = "flex";
      D.FLEX = dA;
      var pA = "willChange";
      D.WILL_CHANGE = pA;
      var vA = "AUTO";
      D.AUTO = vA;
      var hA = ",";
      D.COMMA_DELIMITER = hA;
      var gA = ":";
      D.COLON_DELIMITER = gA;
      var EA = "|";
      D.BAR_DELIMITER = EA;
      var _A = "CHILDREN";
      D.CHILDREN = _A;
      var yA = "IMMEDIATE_CHILDREN";
      D.IMMEDIATE_CHILDREN = yA;
      var mA = "SIBLINGS";
      D.SIBLINGS = mA;
      var TA = "PARENT";
      D.PARENT = TA;
      var IA = "preserve-3d";
      D.PRESERVE_3D = IA;
      var OA = "HTML_ELEMENT";
      D.HTML_ELEMENT = OA;
      var bA = "PLAIN_OBJECT";
      D.PLAIN_OBJECT = bA;
      var SA = "ABSTRACT_NODE";
      D.ABSTRACT_NODE = SA;
      var wA = "RENDER_TRANSFORM";
      D.RENDER_TRANSFORM = wA;
      var AA = "RENDER_GENERAL";
      D.RENDER_GENERAL = AA;
      var RA = "RENDER_STYLE";
      D.RENDER_STYLE = RA;
      var CA = "RENDER_PLUGIN";
      D.RENDER_PLUGIN = CA;
  });
  var Be = u((Re) => {
      "use strict";
      var Vf = Jt().default;
      Object.defineProperty(Re, "__esModule", { value: !0 });
      var Pn = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
      Re.IX2EngineConstants = Re.IX2EngineActionTypes = void 0;
      var Jo = Ff();
      Object.keys(Jo).forEach(function (e) {
          e === "default" ||
              e === "__esModule" ||
              Object.prototype.hasOwnProperty.call(Pn, e) ||
              (e in Re && Re[e] === Jo[e]) ||
              Object.defineProperty(Re, e, {
                  enumerable: !0,
                  get: function () {
                      return Jo[e];
                  },
              });
      });
      var ea = Zo();
      Object.keys(ea).forEach(function (e) {
          e === "default" ||
              e === "__esModule" ||
              Object.prototype.hasOwnProperty.call(Pn, e) ||
              (e in Re && Re[e] === ea[e]) ||
              Object.defineProperty(Re, e, {
                  enumerable: !0,
                  get: function () {
                      return ea[e];
                  },
              });
      });
      var ta = Gf();
      Object.keys(ta).forEach(function (e) {
          e === "default" ||
              e === "__esModule" ||
              Object.prototype.hasOwnProperty.call(Pn, e) ||
              (e in Re && Re[e] === ta[e]) ||
              Object.defineProperty(Re, e, {
                  enumerable: !0,
                  get: function () {
                      return ta[e];
                  },
              });
      });
      var ra = Wf();
      Object.keys(ra).forEach(function (e) {
          e === "default" ||
              e === "__esModule" ||
              Object.prototype.hasOwnProperty.call(Pn, e) ||
              (e in Re && Re[e] === ra[e]) ||
              Object.defineProperty(Re, e, {
                  enumerable: !0,
                  get: function () {
                      return ra[e];
                  },
              });
      });
      var NA = Vf(Uf());
      Re.IX2EngineActionTypes = NA;
      var xA = Vf(Xf());
      Re.IX2EngineConstants = xA;
  });
  var kf = u((Dn) => {
      "use strict";
      Object.defineProperty(Dn, "__esModule", { value: !0 });
      Dn.ixData = void 0;
      var qA = Be(),
          { IX2_RAW_DATA_IMPORTED: LA } = qA.IX2EngineActionTypes,
          PA = (e = Object.freeze({}), t) => {
              switch (t.type) {
                  case LA:
                      return t.payload.ixData || Object.freeze({});
                  default:
                      return e;
              }
          };
      Dn.ixData = PA;
  });
  var Ur = u((SH, mt) => {
      function na() {
          return (
              (mt.exports = na = Object.assign
                  ? Object.assign.bind()
                  : function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        }
                        return e;
                    }),
              (mt.exports.__esModule = !0),
              (mt.exports.default = mt.exports),
              na.apply(this, arguments)
          );
      }
      (mt.exports = na), (mt.exports.__esModule = !0), (mt.exports.default = mt.exports);
  });
  var ar = u((be) => {
      "use strict";
      Object.defineProperty(be, "__esModule", { value: !0 });
      var DA =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (e) {
                    return typeof e;
                }
              : function (e) {
                    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                };
      be.clone = Fn;
      be.addLast = jf;
      be.addFirst = Kf;
      be.removeLast = zf;
      be.removeFirst = Yf;
      be.insert = Qf;
      be.removeAt = $f;
      be.replaceAt = Zf;
      be.getIn = Gn;
      be.set = Wn;
      be.setIn = Un;
      be.update = ed;
      be.updateIn = td;
      be.merge = rd;
      be.mergeDeep = nd;
      be.mergeIn = id;
      be.omit = od;
      be.addDefaults = ad;
      var Bf = "INVALID_ARGS";
      function Hf(e) {
          throw new Error(e);
      }
      function ia(e) {
          var t = Object.keys(e);
          return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t;
      }
      var MA = {}.hasOwnProperty;
      function Fn(e) {
          if (Array.isArray(e)) return e.slice();
          for (var t = ia(e), r = {}, n = 0; n < t.length; n++) {
              var o = t[n];
              r[o] = e[o];
          }
          return r;
      }
      function He(e, t, r) {
          var n = r;
          n == null && Hf(Bf);
          for (var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++) a[s - 3] = arguments[s];
          for (var c = 0; c < a.length; c++) {
              var p = a[c];
              if (p != null) {
                  var g = ia(p);
                  if (g.length)
                      for (var h = 0; h <= g.length; h++) {
                          var m = g[h];
                          if (!(e && n[m] !== void 0)) {
                              var T = p[m];
                              t && Mn(n[m]) && Mn(T) && (T = He(e, t, n[m], T)), !(T === void 0 || T === n[m]) && (o || ((o = !0), (n = Fn(n))), (n[m] = T));
                          }
                      }
              }
          }
          return n;
      }
      function Mn(e) {
          var t = typeof e > "u" ? "undefined" : DA(e);
          return e != null && (t === "object" || t === "function");
      }
      function jf(e, t) {
          return Array.isArray(t) ? e.concat(t) : e.concat([t]);
      }
      function Kf(e, t) {
          return Array.isArray(t) ? t.concat(e) : [t].concat(e);
      }
      function zf(e) {
          return e.length ? e.slice(0, e.length - 1) : e;
      }
      function Yf(e) {
          return e.length ? e.slice(1) : e;
      }
      function Qf(e, t, r) {
          return e
              .slice(0, t)
              .concat(Array.isArray(r) ? r : [r])
              .concat(e.slice(t));
      }
      function $f(e, t) {
          return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
      }
      function Zf(e, t, r) {
          if (e[t] === r) return e;
          for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
          return (o[t] = r), o;
      }
      function Gn(e, t) {
          if ((!Array.isArray(t) && Hf(Bf), e != null)) {
              for (var r = e, n = 0; n < t.length; n++) {
                  var o = t[n];
                  if (((r = r?.[o]), r === void 0)) return r;
              }
              return r;
          }
      }
      function Wn(e, t, r) {
          var n = typeof t == "number" ? [] : {},
              o = e ?? n;
          if (o[t] === r) return o;
          var i = Fn(o);
          return (i[t] = r), i;
      }
      function Jf(e, t, r, n) {
          var o = void 0,
              i = t[n];
          if (n === t.length - 1) o = r;
          else {
              var a = Mn(e) && Mn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
              o = Jf(a, t, r, n + 1);
          }
          return Wn(e, i, o);
      }
      function Un(e, t, r) {
          return t.length ? Jf(e, t, r, 0) : r;
      }
      function ed(e, t, r) {
          var n = e?.[t],
              o = r(n);
          return Wn(e, t, o);
      }
      function td(e, t, r) {
          var n = Gn(e, t),
              o = r(n);
          return Un(e, t, o);
      }
      function rd(e, t, r, n, o, i) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
          return s.length ? He.call.apply(He, [null, !1, !1, e, t, r, n, o, i].concat(s)) : He(!1, !1, e, t, r, n, o, i);
      }
      function nd(e, t, r, n, o, i) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
          return s.length ? He.call.apply(He, [null, !1, !0, e, t, r, n, o, i].concat(s)) : He(!1, !0, e, t, r, n, o, i);
      }
      function id(e, t, r, n, o, i, a) {
          var s = Gn(e, t);
          s == null && (s = {});
          for (var c = void 0, p = arguments.length, g = Array(p > 7 ? p - 7 : 0), h = 7; h < p; h++) g[h - 7] = arguments[h];
          return g.length ? (c = He.call.apply(He, [null, !1, !1, s, r, n, o, i, a].concat(g))) : (c = He(!1, !1, s, r, n, o, i, a)), Un(e, t, c);
      }
      function od(e, t) {
          for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
              if (MA.call(e, r[o])) {
                  n = !0;
                  break;
              }
          if (!n) return e;
          for (var i = {}, a = ia(e), s = 0; s < a.length; s++) {
              var c = a[s];
              r.indexOf(c) >= 0 || (i[c] = e[c]);
          }
          return i;
      }
      function ad(e, t, r, n, o, i) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
          return s.length ? He.call.apply(He, [null, !0, !1, e, t, r, n, o, i].concat(s)) : He(!0, !1, e, t, r, n, o, i);
      }
      var FA = {
          clone: Fn,
          addLast: jf,
          addFirst: Kf,
          removeLast: zf,
          removeFirst: Yf,
          insert: Qf,
          removeAt: $f,
          replaceAt: Zf,
          getIn: Gn,
          set: Wn,
          setIn: Un,
          update: ed,
          updateIn: td,
          merge: rd,
          mergeDeep: nd,
          mergeIn: id,
          omit: od,
          addDefaults: ad,
      };
      be.default = FA;
  });
  var ud = u((Xn) => {
      "use strict";
      var GA = ft().default;
      Object.defineProperty(Xn, "__esModule", { value: !0 });
      Xn.ixRequest = void 0;
      var WA = GA(Ur()),
          UA = Be(),
          XA = ar(),
          { IX2_PREVIEW_REQUESTED: VA, IX2_PLAYBACK_REQUESTED: kA, IX2_STOP_REQUESTED: BA, IX2_CLEAR_REQUESTED: HA } = UA.IX2EngineActionTypes,
          jA = { preview: {}, playback: {}, stop: {}, clear: {} },
          sd = Object.create(null, { [VA]: { value: "preview" }, [kA]: { value: "playback" }, [BA]: { value: "stop" }, [HA]: { value: "clear" } }),
          KA = (e = jA, t) => {
              if (t.type in sd) {
                  let r = [sd[t.type]];
                  return (0, XA.setIn)(e, [r], (0, WA.default)({}, t.payload));
              }
              return e;
          };
      Xn.ixRequest = KA;
  });
  var ld = u((Vn) => {
      "use strict";
      Object.defineProperty(Vn, "__esModule", { value: !0 });
      Vn.ixSession = void 0;
      var zA = Be(),
          pt = ar(),
          {
              IX2_SESSION_INITIALIZED: YA,
              IX2_SESSION_STARTED: QA,
              IX2_TEST_FRAME_RENDERED: $A,
              IX2_SESSION_STOPPED: ZA,
              IX2_EVENT_LISTENER_ADDED: JA,
              IX2_EVENT_STATE_CHANGED: e0,
              IX2_ANIMATION_FRAME_CHANGED: t0,
              IX2_ACTION_LIST_PLAYBACK_CHANGED: r0,
              IX2_VIEWPORT_WIDTH_CHANGED: n0,
              IX2_MEDIA_QUERIES_DEFINED: i0,
          } = zA.IX2EngineActionTypes,
          cd = { active: !1, tick: 0, eventListeners: [], eventState: {}, playbackState: {}, viewportWidth: 0, mediaQueryKey: null, hasBoundaryNodes: !1, hasDefinedMediaQueries: !1, reducedMotion: !1 },
          o0 = 20,
          a0 = (e = cd, t) => {
              switch (t.type) {
                  case YA: {
                      let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
                      return (0, pt.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
                  }
                  case QA:
                      return (0, pt.set)(e, "active", !0);
                  case $A: {
                      let {
                          payload: { step: r = o0 },
                      } = t;
                      return (0, pt.set)(e, "tick", e.tick + r);
                  }
                  case ZA:
                      return cd;
                  case t0: {
                      let {
                          payload: { now: r },
                      } = t;
                      return (0, pt.set)(e, "tick", r);
                  }
                  case JA: {
                      let r = (0, pt.addLast)(e.eventListeners, t.payload);
                      return (0, pt.set)(e, "eventListeners", r);
                  }
                  case e0: {
                      let { stateKey: r, newState: n } = t.payload;
                      return (0, pt.setIn)(e, ["eventState", r], n);
                  }
                  case r0: {
                      let { actionListId: r, isPlaying: n } = t.payload;
                      return (0, pt.setIn)(e, ["playbackState", r], n);
                  }
                  case n0: {
                      let { width: r, mediaQueries: n } = t.payload,
                          o = n.length,
                          i = null;
                      for (let a = 0; a < o; a++) {
                          let { key: s, min: c, max: p } = n[a];
                          if (r >= c && r <= p) {
                              i = s;
                              break;
                          }
                      }
                      return (0, pt.merge)(e, { viewportWidth: r, mediaQueryKey: i });
                  }
                  case i0:
                      return (0, pt.set)(e, "hasDefinedMediaQueries", !0);
                  default:
                      return e;
              }
          };
      Vn.ixSession = a0;
  });
  var dd = u((CH, fd) => {
      function s0() {
          (this.__data__ = []), (this.size = 0);
      }
      fd.exports = s0;
  });
  var kn = u((NH, pd) => {
      function u0(e, t) {
          return e === t || (e !== e && t !== t);
      }
      pd.exports = u0;
  });
  var Xr = u((xH, vd) => {
      var c0 = kn();
      function l0(e, t) {
          for (var r = e.length; r--; ) if (c0(e[r][0], t)) return r;
          return -1;
      }
      vd.exports = l0;
  });
  var gd = u((qH, hd) => {
      var f0 = Xr(),
          d0 = Array.prototype,
          p0 = d0.splice;
      function v0(e) {
          var t = this.__data__,
              r = f0(t, e);
          if (r < 0) return !1;
          var n = t.length - 1;
          return r == n ? t.pop() : p0.call(t, r, 1), --this.size, !0;
      }
      hd.exports = v0;
  });
  var _d = u((LH, Ed) => {
      var h0 = Xr();
      function g0(e) {
          var t = this.__data__,
              r = h0(t, e);
          return r < 0 ? void 0 : t[r][1];
      }
      Ed.exports = g0;
  });
  var md = u((PH, yd) => {
      var E0 = Xr();
      function _0(e) {
          return E0(this.__data__, e) > -1;
      }
      yd.exports = _0;
  });
  var Id = u((DH, Td) => {
      var y0 = Xr();
      function m0(e, t) {
          var r = this.__data__,
              n = y0(r, e);
          return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
      }
      Td.exports = m0;
  });
  var Vr = u((MH, Od) => {
      var T0 = dd(),
          I0 = gd(),
          O0 = _d(),
          b0 = md(),
          S0 = Id();
      function sr(e) {
          var t = -1,
              r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1]);
          }
      }
      sr.prototype.clear = T0;
      sr.prototype.delete = I0;
      sr.prototype.get = O0;
      sr.prototype.has = b0;
      sr.prototype.set = S0;
      Od.exports = sr;
  });
  var Sd = u((FH, bd) => {
      var w0 = Vr();
      function A0() {
          (this.__data__ = new w0()), (this.size = 0);
      }
      bd.exports = A0;
  });
  var Ad = u((GH, wd) => {
      function R0(e) {
          var t = this.__data__,
              r = t.delete(e);
          return (this.size = t.size), r;
      }
      wd.exports = R0;
  });
  var Cd = u((WH, Rd) => {
      function C0(e) {
          return this.__data__.get(e);
      }
      Rd.exports = C0;
  });
  var xd = u((UH, Nd) => {
      function N0(e) {
          return this.__data__.has(e);
      }
      Nd.exports = N0;
  });
  var oa = u((XH, qd) => {
      var x0 = typeof global == "object" && global && global.Object === Object && global;
      qd.exports = x0;
  });
  var nt = u((VH, Ld) => {
      var q0 = oa(),
          L0 = typeof self == "object" && self && self.Object === Object && self,
          P0 = q0 || L0 || Function("return this")();
      Ld.exports = P0;
  });
  var ur = u((kH, Pd) => {
      var D0 = nt(),
          M0 = D0.Symbol;
      Pd.exports = M0;
  });
  var Gd = u((BH, Fd) => {
      var Dd = ur(),
          Md = Object.prototype,
          F0 = Md.hasOwnProperty,
          G0 = Md.toString,
          kr = Dd ? Dd.toStringTag : void 0;
      function W0(e) {
          var t = F0.call(e, kr),
              r = e[kr];
          try {
              e[kr] = void 0;
              var n = !0;
          } catch {}
          var o = G0.call(e);
          return n && (t ? (e[kr] = r) : delete e[kr]), o;
      }
      Fd.exports = W0;
  });
  var Ud = u((HH, Wd) => {
      var U0 = Object.prototype,
          X0 = U0.toString;
      function V0(e) {
          return X0.call(e);
      }
      Wd.exports = V0;
  });
  var Ut = u((jH, kd) => {
      var Xd = ur(),
          k0 = Gd(),
          B0 = Ud(),
          H0 = "[object Null]",
          j0 = "[object Undefined]",
          Vd = Xd ? Xd.toStringTag : void 0;
      function K0(e) {
          return e == null ? (e === void 0 ? j0 : H0) : Vd && Vd in Object(e) ? k0(e) : B0(e);
      }
      kd.exports = K0;
  });
  var vt = u((KH, Bd) => {
      function z0(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
      }
      Bd.exports = z0;
  });
  var aa = u((zH, Hd) => {
      var Y0 = Ut(),
          Q0 = vt(),
          $0 = "[object AsyncFunction]",
          Z0 = "[object Function]",
          J0 = "[object GeneratorFunction]",
          eR = "[object Proxy]";
      function tR(e) {
          if (!Q0(e)) return !1;
          var t = Y0(e);
          return t == Z0 || t == J0 || t == $0 || t == eR;
      }
      Hd.exports = tR;
  });
  var Kd = u((YH, jd) => {
      var rR = nt(),
          nR = rR["__core-js_shared__"];
      jd.exports = nR;
  });
  var Qd = u((QH, Yd) => {
      var sa = Kd(),
          zd = (function () {
              var e = /[^.]+$/.exec((sa && sa.keys && sa.keys.IE_PROTO) || "");
              return e ? "Symbol(src)_1." + e : "";
          })();
      function iR(e) {
          return !!zd && zd in e;
      }
      Yd.exports = iR;
  });
  var ua = u(($H, $d) => {
      var oR = Function.prototype,
          aR = oR.toString;
      function sR(e) {
          if (e != null) {
              try {
                  return aR.call(e);
              } catch {}
              try {
                  return e + "";
              } catch {}
          }
          return "";
      }
      $d.exports = sR;
  });
  var Jd = u((ZH, Zd) => {
      var uR = aa(),
          cR = Qd(),
          lR = vt(),
          fR = ua(),
          dR = /[\\^$.*+?()[\]{}|]/g,
          pR = /^\[object .+?Constructor\]$/,
          vR = Function.prototype,
          hR = Object.prototype,
          gR = vR.toString,
          ER = hR.hasOwnProperty,
          _R = RegExp(
              "^" +
                  gR
                      .call(ER)
                      .replace(dR, "\\$&")
                      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                  "$"
          );
      function yR(e) {
          if (!lR(e) || cR(e)) return !1;
          var t = uR(e) ? _R : pR;
          return t.test(fR(e));
      }
      Zd.exports = yR;
  });
  var tp = u((JH, ep) => {
      function mR(e, t) {
          return e?.[t];
      }
      ep.exports = mR;
  });
  var Rt = u((ej, rp) => {
      var TR = Jd(),
          IR = tp();
      function OR(e, t) {
          var r = IR(e, t);
          return TR(r) ? r : void 0;
      }
      rp.exports = OR;
  });
  var Bn = u((tj, np) => {
      var bR = Rt(),
          SR = nt(),
          wR = bR(SR, "Map");
      np.exports = wR;
  });
  var Br = u((rj, ip) => {
      var AR = Rt(),
          RR = AR(Object, "create");
      ip.exports = RR;
  });
  var sp = u((nj, ap) => {
      var op = Br();
      function CR() {
          (this.__data__ = op ? op(null) : {}), (this.size = 0);
      }
      ap.exports = CR;
  });
  var cp = u((ij, up) => {
      function NR(e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
      }
      up.exports = NR;
  });
  var fp = u((oj, lp) => {
      var xR = Br(),
          qR = "__lodash_hash_undefined__",
          LR = Object.prototype,
          PR = LR.hasOwnProperty;
      function DR(e) {
          var t = this.__data__;
          if (xR) {
              var r = t[e];
              return r === qR ? void 0 : r;
          }
          return PR.call(t, e) ? t[e] : void 0;
      }
      lp.exports = DR;
  });
  var pp = u((aj, dp) => {
      var MR = Br(),
          FR = Object.prototype,
          GR = FR.hasOwnProperty;
      function WR(e) {
          var t = this.__data__;
          return MR ? t[e] !== void 0 : GR.call(t, e);
      }
      dp.exports = WR;
  });
  var hp = u((sj, vp) => {
      var UR = Br(),
          XR = "__lodash_hash_undefined__";
      function VR(e, t) {
          var r = this.__data__;
          return (this.size += this.has(e) ? 0 : 1), (r[e] = UR && t === void 0 ? XR : t), this;
      }
      vp.exports = VR;
  });
  var Ep = u((uj, gp) => {
      var kR = sp(),
          BR = cp(),
          HR = fp(),
          jR = pp(),
          KR = hp();
      function cr(e) {
          var t = -1,
              r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1]);
          }
      }
      cr.prototype.clear = kR;
      cr.prototype.delete = BR;
      cr.prototype.get = HR;
      cr.prototype.has = jR;
      cr.prototype.set = KR;
      gp.exports = cr;
  });
  var mp = u((cj, yp) => {
      var _p = Ep(),
          zR = Vr(),
          YR = Bn();
      function QR() {
          (this.size = 0), (this.__data__ = { hash: new _p(), map: new (YR || zR)(), string: new _p() });
      }
      yp.exports = QR;
  });
  var Ip = u((lj, Tp) => {
      function $R(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      Tp.exports = $R;
  });
  var Hr = u((fj, Op) => {
      var ZR = Ip();
      function JR(e, t) {
          var r = e.__data__;
          return ZR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
      }
      Op.exports = JR;
  });
  var Sp = u((dj, bp) => {
      var eC = Hr();
      function tC(e) {
          var t = eC(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
      }
      bp.exports = tC;
  });
  var Ap = u((pj, wp) => {
      var rC = Hr();
      function nC(e) {
          return rC(this, e).get(e);
      }
      wp.exports = nC;
  });
  var Cp = u((vj, Rp) => {
      var iC = Hr();
      function oC(e) {
          return iC(this, e).has(e);
      }
      Rp.exports = oC;
  });
  var xp = u((hj, Np) => {
      var aC = Hr();
      function sC(e, t) {
          var r = aC(this, e),
              n = r.size;
          return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
      }
      Np.exports = sC;
  });
  var Hn = u((gj, qp) => {
      var uC = mp(),
          cC = Sp(),
          lC = Ap(),
          fC = Cp(),
          dC = xp();
      function lr(e) {
          var t = -1,
              r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1]);
          }
      }
      lr.prototype.clear = uC;
      lr.prototype.delete = cC;
      lr.prototype.get = lC;
      lr.prototype.has = fC;
      lr.prototype.set = dC;
      qp.exports = lr;
  });
  var Pp = u((Ej, Lp) => {
      var pC = Vr(),
          vC = Bn(),
          hC = Hn(),
          gC = 200;
      function EC(e, t) {
          var r = this.__data__;
          if (r instanceof pC) {
              var n = r.__data__;
              if (!vC || n.length < gC - 1) return n.push([e, t]), (this.size = ++r.size), this;
              r = this.__data__ = new hC(n);
          }
          return r.set(e, t), (this.size = r.size), this;
      }
      Lp.exports = EC;
  });
  var ca = u((_j, Dp) => {
      var _C = Vr(),
          yC = Sd(),
          mC = Ad(),
          TC = Cd(),
          IC = xd(),
          OC = Pp();
      function fr(e) {
          var t = (this.__data__ = new _C(e));
          this.size = t.size;
      }
      fr.prototype.clear = yC;
      fr.prototype.delete = mC;
      fr.prototype.get = TC;
      fr.prototype.has = IC;
      fr.prototype.set = OC;
      Dp.exports = fr;
  });
  var Fp = u((yj, Mp) => {
      var bC = "__lodash_hash_undefined__";
      function SC(e) {
          return this.__data__.set(e, bC), this;
      }
      Mp.exports = SC;
  });
  var Wp = u((mj, Gp) => {
      function wC(e) {
          return this.__data__.has(e);
      }
      Gp.exports = wC;
  });
  var Xp = u((Tj, Up) => {
      var AC = Hn(),
          RC = Fp(),
          CC = Wp();
      function jn(e) {
          var t = -1,
              r = e == null ? 0 : e.length;
          for (this.__data__ = new AC(); ++t < r; ) this.add(e[t]);
      }
      jn.prototype.add = jn.prototype.push = RC;
      jn.prototype.has = CC;
      Up.exports = jn;
  });
  var kp = u((Ij, Vp) => {
      function NC(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0;
          return !1;
      }
      Vp.exports = NC;
  });
  var Hp = u((Oj, Bp) => {
      function xC(e, t) {
          return e.has(t);
      }
      Bp.exports = xC;
  });
  var la = u((bj, jp) => {
      var qC = Xp(),
          LC = kp(),
          PC = Hp(),
          DC = 1,
          MC = 2;
      function FC(e, t, r, n, o, i) {
          var a = r & DC,
              s = e.length,
              c = t.length;
          if (s != c && !(a && c > s)) return !1;
          var p = i.get(e),
              g = i.get(t);
          if (p && g) return p == t && g == e;
          var h = -1,
              m = !0,
              T = r & MC ? new qC() : void 0;
          for (i.set(e, t), i.set(t, e); ++h < s; ) {
              var R = e[h],
                  w = t[h];
              if (n) var F = a ? n(w, R, h, t, e, i) : n(R, w, h, e, t, i);
              if (F !== void 0) {
                  if (F) continue;
                  m = !1;
                  break;
              }
              if (T) {
                  if (
                      !LC(t, function (N, x) {
                          if (!PC(T, x) && (R === N || o(R, N, r, n, i))) return T.push(x);
                      })
                  ) {
                      m = !1;
                      break;
                  }
              } else if (!(R === w || o(R, w, r, n, i))) {
                  m = !1;
                  break;
              }
          }
          return i.delete(e), i.delete(t), m;
      }
      jp.exports = FC;
  });
  var zp = u((Sj, Kp) => {
      var GC = nt(),
          WC = GC.Uint8Array;
      Kp.exports = WC;
  });
  var Qp = u((wj, Yp) => {
      function UC(e) {
          var t = -1,
              r = Array(e.size);
          return (
              e.forEach(function (n, o) {
                  r[++t] = [o, n];
              }),
              r
          );
      }
      Yp.exports = UC;
  });
  var Zp = u((Aj, $p) => {
      function XC(e) {
          var t = -1,
              r = Array(e.size);
          return (
              e.forEach(function (n) {
                  r[++t] = n;
              }),
              r
          );
      }
      $p.exports = XC;
  });
  var nv = u((Rj, rv) => {
      var Jp = ur(),
          ev = zp(),
          VC = kn(),
          kC = la(),
          BC = Qp(),
          HC = Zp(),
          jC = 1,
          KC = 2,
          zC = "[object Boolean]",
          YC = "[object Date]",
          QC = "[object Error]",
          $C = "[object Map]",
          ZC = "[object Number]",
          JC = "[object RegExp]",
          eN = "[object Set]",
          tN = "[object String]",
          rN = "[object Symbol]",
          nN = "[object ArrayBuffer]",
          iN = "[object DataView]",
          tv = Jp ? Jp.prototype : void 0,
          fa = tv ? tv.valueOf : void 0;
      function oN(e, t, r, n, o, i, a) {
          switch (r) {
              case iN:
                  if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                  (e = e.buffer), (t = t.buffer);
              case nN:
                  return !(e.byteLength != t.byteLength || !i(new ev(e), new ev(t)));
              case zC:
              case YC:
              case ZC:
                  return VC(+e, +t);
              case QC:
                  return e.name == t.name && e.message == t.message;
              case JC:
              case tN:
                  return e == t + "";
              case $C:
                  var s = BC;
              case eN:
                  var c = n & jC;
                  if ((s || (s = HC), e.size != t.size && !c)) return !1;
                  var p = a.get(e);
                  if (p) return p == t;
                  (n |= KC), a.set(e, t);
                  var g = kC(s(e), s(t), n, o, i, a);
                  return a.delete(e), g;
              case rN:
                  if (fa) return fa.call(e) == fa.call(t);
          }
          return !1;
      }
      rv.exports = oN;
  });
  var Kn = u((Cj, iv) => {
      function aN(e, t) {
          for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
          return e;
      }
      iv.exports = aN;
  });
  var Le = u((Nj, ov) => {
      var sN = Array.isArray;
      ov.exports = sN;
  });
  var da = u((xj, av) => {
      var uN = Kn(),
          cN = Le();
      function lN(e, t, r) {
          var n = t(e);
          return cN(e) ? n : uN(n, r(e));
      }
      av.exports = lN;
  });
  var uv = u((qj, sv) => {
      function fN(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
              var a = e[r];
              t(a, r, e) && (i[o++] = a);
          }
          return i;
      }
      sv.exports = fN;
  });
  var pa = u((Lj, cv) => {
      function dN() {
          return [];
      }
      cv.exports = dN;
  });
  var va = u((Pj, fv) => {
      var pN = uv(),
          vN = pa(),
          hN = Object.prototype,
          gN = hN.propertyIsEnumerable,
          lv = Object.getOwnPropertySymbols,
          EN = lv
              ? function (e) {
                    return e == null
                        ? []
                        : ((e = Object(e)),
                          pN(lv(e), function (t) {
                              return gN.call(e, t);
                          }));
                }
              : vN;
      fv.exports = EN;
  });
  var pv = u((Dj, dv) => {
      function _N(e, t) {
          for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
          return n;
      }
      dv.exports = _N;
  });
  var Ct = u((Mj, vv) => {
      function yN(e) {
          return e != null && typeof e == "object";
      }
      vv.exports = yN;
  });
  var gv = u((Fj, hv) => {
      var mN = Ut(),
          TN = Ct(),
          IN = "[object Arguments]";
      function ON(e) {
          return TN(e) && mN(e) == IN;
      }
      hv.exports = ON;
  });
  var jr = u((Gj, yv) => {
      var Ev = gv(),
          bN = Ct(),
          _v = Object.prototype,
          SN = _v.hasOwnProperty,
          wN = _v.propertyIsEnumerable,
          AN = Ev(
              (function () {
                  return arguments;
              })()
          )
              ? Ev
              : function (e) {
                    return bN(e) && SN.call(e, "callee") && !wN.call(e, "callee");
                };
      yv.exports = AN;
  });
  var Tv = u((Wj, mv) => {
      function RN() {
          return !1;
      }
      mv.exports = RN;
  });
  var zn = u((Kr, dr) => {
      var CN = nt(),
          NN = Tv(),
          bv = typeof Kr == "object" && Kr && !Kr.nodeType && Kr,
          Iv = bv && typeof dr == "object" && dr && !dr.nodeType && dr,
          xN = Iv && Iv.exports === bv,
          Ov = xN ? CN.Buffer : void 0,
          qN = Ov ? Ov.isBuffer : void 0,
          LN = qN || NN;
      dr.exports = LN;
  });
  var Yn = u((Uj, Sv) => {
      var PN = 9007199254740991,
          DN = /^(?:0|[1-9]\d*)$/;
      function MN(e, t) {
          var r = typeof e;
          return (t = t ?? PN), !!t && (r == "number" || (r != "symbol" && DN.test(e))) && e > -1 && e % 1 == 0 && e < t;
      }
      Sv.exports = MN;
  });
  var Qn = u((Xj, wv) => {
      var FN = 9007199254740991;
      function GN(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= FN;
      }
      wv.exports = GN;
  });
  var Rv = u((Vj, Av) => {
      var WN = Ut(),
          UN = Qn(),
          XN = Ct(),
          VN = "[object Arguments]",
          kN = "[object Array]",
          BN = "[object Boolean]",
          HN = "[object Date]",
          jN = "[object Error]",
          KN = "[object Function]",
          zN = "[object Map]",
          YN = "[object Number]",
          QN = "[object Object]",
          $N = "[object RegExp]",
          ZN = "[object Set]",
          JN = "[object String]",
          ex = "[object WeakMap]",
          tx = "[object ArrayBuffer]",
          rx = "[object DataView]",
          nx = "[object Float32Array]",
          ix = "[object Float64Array]",
          ox = "[object Int8Array]",
          ax = "[object Int16Array]",
          sx = "[object Int32Array]",
          ux = "[object Uint8Array]",
          cx = "[object Uint8ClampedArray]",
          lx = "[object Uint16Array]",
          fx = "[object Uint32Array]",
          Te = {};
      Te[nx] = Te[ix] = Te[ox] = Te[ax] = Te[sx] = Te[ux] = Te[cx] = Te[lx] = Te[fx] = !0;
      Te[VN] = Te[kN] = Te[tx] = Te[BN] = Te[rx] = Te[HN] = Te[jN] = Te[KN] = Te[zN] = Te[YN] = Te[QN] = Te[$N] = Te[ZN] = Te[JN] = Te[ex] = !1;
      function dx(e) {
          return XN(e) && UN(e.length) && !!Te[WN(e)];
      }
      Av.exports = dx;
  });
  var Nv = u((kj, Cv) => {
      function px(e) {
          return function (t) {
              return e(t);
          };
      }
      Cv.exports = px;
  });
  var qv = u((zr, pr) => {
      var vx = oa(),
          xv = typeof zr == "object" && zr && !zr.nodeType && zr,
          Yr = xv && typeof pr == "object" && pr && !pr.nodeType && pr,
          hx = Yr && Yr.exports === xv,
          ha = hx && vx.process,
          gx = (function () {
              try {
                  var e = Yr && Yr.require && Yr.require("util").types;
                  return e || (ha && ha.binding && ha.binding("util"));
              } catch {}
          })();
      pr.exports = gx;
  });
  var $n = u((Bj, Dv) => {
      var Ex = Rv(),
          _x = Nv(),
          Lv = qv(),
          Pv = Lv && Lv.isTypedArray,
          yx = Pv ? _x(Pv) : Ex;
      Dv.exports = yx;
  });
  var ga = u((Hj, Mv) => {
      var mx = pv(),
          Tx = jr(),
          Ix = Le(),
          Ox = zn(),
          bx = Yn(),
          Sx = $n(),
          wx = Object.prototype,
          Ax = wx.hasOwnProperty;
      function Rx(e, t) {
          var r = Ix(e),
              n = !r && Tx(e),
              o = !r && !n && Ox(e),
              i = !r && !n && !o && Sx(e),
              a = r || n || o || i,
              s = a ? mx(e.length, String) : [],
              c = s.length;
          for (var p in e) (t || Ax.call(e, p)) && !(a && (p == "length" || (o && (p == "offset" || p == "parent")) || (i && (p == "buffer" || p == "byteLength" || p == "byteOffset")) || bx(p, c))) && s.push(p);
          return s;
      }
      Mv.exports = Rx;
  });
  var Zn = u((jj, Fv) => {
      var Cx = Object.prototype;
      function Nx(e) {
          var t = e && e.constructor,
              r = (typeof t == "function" && t.prototype) || Cx;
          return e === r;
      }
      Fv.exports = Nx;
  });
  var Ea = u((Kj, Gv) => {
      function xx(e, t) {
          return function (r) {
              return e(t(r));
          };
      }
      Gv.exports = xx;
  });
  var Uv = u((zj, Wv) => {
      var qx = Ea(),
          Lx = qx(Object.keys, Object);
      Wv.exports = Lx;
  });
  var Jn = u((Yj, Xv) => {
      var Px = Zn(),
          Dx = Uv(),
          Mx = Object.prototype,
          Fx = Mx.hasOwnProperty;
      function Gx(e) {
          if (!Px(e)) return Dx(e);
          var t = [];
          for (var r in Object(e)) Fx.call(e, r) && r != "constructor" && t.push(r);
          return t;
      }
      Xv.exports = Gx;
  });
  var Xt = u((Qj, Vv) => {
      var Wx = aa(),
          Ux = Qn();
      function Xx(e) {
          return e != null && Ux(e.length) && !Wx(e);
      }
      Vv.exports = Xx;
  });
  var Qr = u(($j, kv) => {
      var Vx = ga(),
          kx = Jn(),
          Bx = Xt();
      function Hx(e) {
          return Bx(e) ? Vx(e) : kx(e);
      }
      kv.exports = Hx;
  });
  var Hv = u((Zj, Bv) => {
      var jx = da(),
          Kx = va(),
          zx = Qr();
      function Yx(e) {
          return jx(e, zx, Kx);
      }
      Bv.exports = Yx;
  });
  var zv = u((Jj, Kv) => {
      var jv = Hv(),
          Qx = 1,
          $x = Object.prototype,
          Zx = $x.hasOwnProperty;
      function Jx(e, t, r, n, o, i) {
          var a = r & Qx,
              s = jv(e),
              c = s.length,
              p = jv(t),
              g = p.length;
          if (c != g && !a) return !1;
          for (var h = c; h--; ) {
              var m = s[h];
              if (!(a ? m in t : Zx.call(t, m))) return !1;
          }
          var T = i.get(e),
              R = i.get(t);
          if (T && R) return T == t && R == e;
          var w = !0;
          i.set(e, t), i.set(t, e);
          for (var F = a; ++h < c; ) {
              m = s[h];
              var N = e[m],
                  x = t[m];
              if (n) var S = a ? n(x, N, m, t, e, i) : n(N, x, m, e, t, i);
              if (!(S === void 0 ? N === x || o(N, x, r, n, i) : S)) {
                  w = !1;
                  break;
              }
              F || (F = m == "constructor");
          }
          if (w && !F) {
              var P = e.constructor,
                  L = t.constructor;
              P != L && "constructor" in e && "constructor" in t && !(typeof P == "function" && P instanceof P && typeof L == "function" && L instanceof L) && (w = !1);
          }
          return i.delete(e), i.delete(t), w;
      }
      Kv.exports = Jx;
  });
  var Qv = u((e5, Yv) => {
      var eq = Rt(),
          tq = nt(),
          rq = eq(tq, "DataView");
      Yv.exports = rq;
  });
  var Zv = u((t5, $v) => {
      var nq = Rt(),
          iq = nt(),
          oq = nq(iq, "Promise");
      $v.exports = oq;
  });
  var eh = u((r5, Jv) => {
      var aq = Rt(),
          sq = nt(),
          uq = aq(sq, "Set");
      Jv.exports = uq;
  });
  var _a = u((n5, th) => {
      var cq = Rt(),
          lq = nt(),
          fq = cq(lq, "WeakMap");
      th.exports = fq;
  });
  var ei = u((i5, uh) => {
      var ya = Qv(),
          ma = Bn(),
          Ta = Zv(),
          Ia = eh(),
          Oa = _a(),
          sh = Ut(),
          vr = ua(),
          rh = "[object Map]",
          dq = "[object Object]",
          nh = "[object Promise]",
          ih = "[object Set]",
          oh = "[object WeakMap]",
          ah = "[object DataView]",
          pq = vr(ya),
          vq = vr(ma),
          hq = vr(Ta),
          gq = vr(Ia),
          Eq = vr(Oa),
          Vt = sh;
      ((ya && Vt(new ya(new ArrayBuffer(1))) != ah) || (ma && Vt(new ma()) != rh) || (Ta && Vt(Ta.resolve()) != nh) || (Ia && Vt(new Ia()) != ih) || (Oa && Vt(new Oa()) != oh)) &&
          (Vt = function (e) {
              var t = sh(e),
                  r = t == dq ? e.constructor : void 0,
                  n = r ? vr(r) : "";
              if (n)
                  switch (n) {
                      case pq:
                          return ah;
                      case vq:
                          return rh;
                      case hq:
                          return nh;
                      case gq:
                          return ih;
                      case Eq:
                          return oh;
                  }
              return t;
          });
      uh.exports = Vt;
  });
  var gh = u((o5, hh) => {
      var ba = ca(),
          _q = la(),
          yq = nv(),
          mq = zv(),
          ch = ei(),
          lh = Le(),
          fh = zn(),
          Tq = $n(),
          Iq = 1,
          dh = "[object Arguments]",
          ph = "[object Array]",
          ti = "[object Object]",
          Oq = Object.prototype,
          vh = Oq.hasOwnProperty;
      function bq(e, t, r, n, o, i) {
          var a = lh(e),
              s = lh(t),
              c = a ? ph : ch(e),
              p = s ? ph : ch(t);
          (c = c == dh ? ti : c), (p = p == dh ? ti : p);
          var g = c == ti,
              h = p == ti,
              m = c == p;
          if (m && fh(e)) {
              if (!fh(t)) return !1;
              (a = !0), (g = !1);
          }
          if (m && !g) return i || (i = new ba()), a || Tq(e) ? _q(e, t, r, n, o, i) : yq(e, t, c, r, n, o, i);
          if (!(r & Iq)) {
              var T = g && vh.call(e, "__wrapped__"),
                  R = h && vh.call(t, "__wrapped__");
              if (T || R) {
                  var w = T ? e.value() : e,
                      F = R ? t.value() : t;
                  return i || (i = new ba()), o(w, F, r, n, i);
              }
          }
          return m ? (i || (i = new ba()), mq(e, t, r, n, o, i)) : !1;
      }
      hh.exports = bq;
  });
  var Sa = u((a5, yh) => {
      var Sq = gh(),
          Eh = Ct();
      function _h(e, t, r, n, o) {
          return e === t ? !0 : e == null || t == null || (!Eh(e) && !Eh(t)) ? e !== e && t !== t : Sq(e, t, r, n, _h, o);
      }
      yh.exports = _h;
  });
  var Th = u((s5, mh) => {
      var wq = ca(),
          Aq = Sa(),
          Rq = 1,
          Cq = 2;
      function Nq(e, t, r, n) {
          var o = r.length,
              i = o,
              a = !n;
          if (e == null) return !i;
          for (e = Object(e); o--; ) {
              var s = r[o];
              if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
          }
          for (; ++o < i; ) {
              s = r[o];
              var c = s[0],
                  p = e[c],
                  g = s[1];
              if (a && s[2]) {
                  if (p === void 0 && !(c in e)) return !1;
              } else {
                  var h = new wq();
                  if (n) var m = n(p, g, c, e, t, h);
                  if (!(m === void 0 ? Aq(g, p, Rq | Cq, n, h) : m)) return !1;
              }
          }
          return !0;
      }
      mh.exports = Nq;
  });
  var wa = u((u5, Ih) => {
      var xq = vt();
      function qq(e) {
          return e === e && !xq(e);
      }
      Ih.exports = qq;
  });
  var bh = u((c5, Oh) => {
      var Lq = wa(),
          Pq = Qr();
      function Dq(e) {
          for (var t = Pq(e), r = t.length; r--; ) {
              var n = t[r],
                  o = e[n];
              t[r] = [n, o, Lq(o)];
          }
          return t;
      }
      Oh.exports = Dq;
  });
  var Aa = u((l5, Sh) => {
      function Mq(e, t) {
          return function (r) {
              return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
          };
      }
      Sh.exports = Mq;
  });
  var Ah = u((f5, wh) => {
      var Fq = Th(),
          Gq = bh(),
          Wq = Aa();
      function Uq(e) {
          var t = Gq(e);
          return t.length == 1 && t[0][2]
              ? Wq(t[0][0], t[0][1])
              : function (r) {
                    return r === e || Fq(r, e, t);
                };
      }
      wh.exports = Uq;
  });
  var $r = u((d5, Rh) => {
      var Xq = Ut(),
          Vq = Ct(),
          kq = "[object Symbol]";
      function Bq(e) {
          return typeof e == "symbol" || (Vq(e) && Xq(e) == kq);
      }
      Rh.exports = Bq;
  });
  var ri = u((p5, Ch) => {
      var Hq = Le(),
          jq = $r(),
          Kq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          zq = /^\w*$/;
      function Yq(e, t) {
          if (Hq(e)) return !1;
          var r = typeof e;
          return r == "number" || r == "symbol" || r == "boolean" || e == null || jq(e) ? !0 : zq.test(e) || !Kq.test(e) || (t != null && e in Object(t));
      }
      Ch.exports = Yq;
  });
  var qh = u((v5, xh) => {
      var Nh = Hn(),
          Qq = "Expected a function";
      function Ra(e, t) {
          if (typeof e != "function" || (t != null && typeof t != "function")) throw new TypeError(Qq);
          var r = function () {
              var n = arguments,
                  o = t ? t.apply(this, n) : n[0],
                  i = r.cache;
              if (i.has(o)) return i.get(o);
              var a = e.apply(this, n);
              return (r.cache = i.set(o, a) || i), a;
          };
          return (r.cache = new (Ra.Cache || Nh)()), r;
      }
      Ra.Cache = Nh;
      xh.exports = Ra;
  });
  var Ph = u((h5, Lh) => {
      var $q = qh(),
          Zq = 500;
      function Jq(e) {
          var t = $q(e, function (n) {
                  return r.size === Zq && r.clear(), n;
              }),
              r = t.cache;
          return t;
      }
      Lh.exports = Jq;
  });
  var Mh = u((g5, Dh) => {
      var eL = Ph(),
          tL = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          rL = /\\(\\)?/g,
          nL = eL(function (e) {
              var t = [];
              return (
                  e.charCodeAt(0) === 46 && t.push(""),
                  e.replace(tL, function (r, n, o, i) {
                      t.push(o ? i.replace(rL, "$1") : n || r);
                  }),
                  t
              );
          });
      Dh.exports = nL;
  });
  var Ca = u((E5, Fh) => {
      function iL(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; ) o[r] = t(e[r], r, e);
          return o;
      }
      Fh.exports = iL;
  });
  var kh = u((_5, Vh) => {
      var Gh = ur(),
          oL = Ca(),
          aL = Le(),
          sL = $r(),
          uL = 1 / 0,
          Wh = Gh ? Gh.prototype : void 0,
          Uh = Wh ? Wh.toString : void 0;
      function Xh(e) {
          if (typeof e == "string") return e;
          if (aL(e)) return oL(e, Xh) + "";
          if (sL(e)) return Uh ? Uh.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -uL ? "-0" : t;
      }
      Vh.exports = Xh;
  });
  var Hh = u((y5, Bh) => {
      var cL = kh();
      function lL(e) {
          return e == null ? "" : cL(e);
      }
      Bh.exports = lL;
  });
  var Zr = u((m5, jh) => {
      var fL = Le(),
          dL = ri(),
          pL = Mh(),
          vL = Hh();
      function hL(e, t) {
          return fL(e) ? e : dL(e, t) ? [e] : pL(vL(e));
      }
      jh.exports = hL;
  });
  var hr = u((T5, Kh) => {
      var gL = $r(),
          EL = 1 / 0;
      function _L(e) {
          if (typeof e == "string" || gL(e)) return e;
          var t = e + "";
          return t == "0" && 1 / e == -EL ? "-0" : t;
      }
      Kh.exports = _L;
  });
  var ni = u((I5, zh) => {
      var yL = Zr(),
          mL = hr();
      function TL(e, t) {
          t = yL(t, e);
          for (var r = 0, n = t.length; e != null && r < n; ) e = e[mL(t[r++])];
          return r && r == n ? e : void 0;
      }
      zh.exports = TL;
  });
  var ii = u((O5, Yh) => {
      var IL = ni();
      function OL(e, t, r) {
          var n = e == null ? void 0 : IL(e, t);
          return n === void 0 ? r : n;
      }
      Yh.exports = OL;
  });
  var $h = u((b5, Qh) => {
      function bL(e, t) {
          return e != null && t in Object(e);
      }
      Qh.exports = bL;
  });
  var Jh = u((S5, Zh) => {
      var SL = Zr(),
          wL = jr(),
          AL = Le(),
          RL = Yn(),
          CL = Qn(),
          NL = hr();
      function xL(e, t, r) {
          t = SL(t, e);
          for (var n = -1, o = t.length, i = !1; ++n < o; ) {
              var a = NL(t[n]);
              if (!(i = e != null && r(e, a))) break;
              e = e[a];
          }
          return i || ++n != o ? i : ((o = e == null ? 0 : e.length), !!o && CL(o) && RL(a, o) && (AL(e) || wL(e)));
      }
      Zh.exports = xL;
  });
  var tg = u((w5, eg) => {
      var qL = $h(),
          LL = Jh();
      function PL(e, t) {
          return e != null && LL(e, t, qL);
      }
      eg.exports = PL;
  });
  var ng = u((A5, rg) => {
      var DL = Sa(),
          ML = ii(),
          FL = tg(),
          GL = ri(),
          WL = wa(),
          UL = Aa(),
          XL = hr(),
          VL = 1,
          kL = 2;
      function BL(e, t) {
          return GL(e) && WL(t)
              ? UL(XL(e), t)
              : function (r) {
                    var n = ML(r, e);
                    return n === void 0 && n === t ? FL(r, e) : DL(t, n, VL | kL);
                };
      }
      rg.exports = BL;
  });
  var oi = u((R5, ig) => {
      function HL(e) {
          return e;
      }
      ig.exports = HL;
  });
  var Na = u((C5, og) => {
      function jL(e) {
          return function (t) {
              return t?.[e];
          };
      }
      og.exports = jL;
  });
  var sg = u((N5, ag) => {
      var KL = ni();
      function zL(e) {
          return function (t) {
              return KL(t, e);
          };
      }
      ag.exports = zL;
  });
  var cg = u((x5, ug) => {
      var YL = Na(),
          QL = sg(),
          $L = ri(),
          ZL = hr();
      function JL(e) {
          return $L(e) ? YL(ZL(e)) : QL(e);
      }
      ug.exports = JL;
  });
  var Nt = u((q5, lg) => {
      var eP = Ah(),
          tP = ng(),
          rP = oi(),
          nP = Le(),
          iP = cg();
      function oP(e) {
          return typeof e == "function" ? e : e == null ? rP : typeof e == "object" ? (nP(e) ? tP(e[0], e[1]) : eP(e)) : iP(e);
      }
      lg.exports = oP;
  });
  var xa = u((L5, fg) => {
      var aP = Nt(),
          sP = Xt(),
          uP = Qr();
      function cP(e) {
          return function (t, r, n) {
              var o = Object(t);
              if (!sP(t)) {
                  var i = aP(r, 3);
                  (t = uP(t)),
                      (r = function (s) {
                          return i(o[s], s, o);
                      });
              }
              var a = e(t, r, n);
              return a > -1 ? o[i ? t[a] : a] : void 0;
          };
      }
      fg.exports = cP;
  });
  var qa = u((P5, dg) => {
      function lP(e, t, r, n) {
          for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; ) if (t(e[i], i, e)) return i;
          return -1;
      }
      dg.exports = lP;
  });
  var vg = u((D5, pg) => {
      var fP = /\s/;
      function dP(e) {
          for (var t = e.length; t-- && fP.test(e.charAt(t)); );
          return t;
      }
      pg.exports = dP;
  });
  var gg = u((M5, hg) => {
      var pP = vg(),
          vP = /^\s+/;
      function hP(e) {
          return e && e.slice(0, pP(e) + 1).replace(vP, "");
      }
      hg.exports = hP;
  });
  var ai = u((F5, yg) => {
      var gP = gg(),
          Eg = vt(),
          EP = $r(),
          _g = 0 / 0,
          _P = /^[-+]0x[0-9a-f]+$/i,
          yP = /^0b[01]+$/i,
          mP = /^0o[0-7]+$/i,
          TP = parseInt;
      function IP(e) {
          if (typeof e == "number") return e;
          if (EP(e)) return _g;
          if (Eg(e)) {
              var t = typeof e.valueOf == "function" ? e.valueOf() : e;
              e = Eg(t) ? t + "" : t;
          }
          if (typeof e != "string") return e === 0 ? e : +e;
          e = gP(e);
          var r = yP.test(e);
          return r || mP.test(e) ? TP(e.slice(2), r ? 2 : 8) : _P.test(e) ? _g : +e;
      }
      yg.exports = IP;
  });
  var Ig = u((G5, Tg) => {
      var OP = ai(),
          mg = 1 / 0,
          bP = 17976931348623157e292;
      function SP(e) {
          if (!e) return e === 0 ? e : 0;
          if (((e = OP(e)), e === mg || e === -mg)) {
              var t = e < 0 ? -1 : 1;
              return t * bP;
          }
          return e === e ? e : 0;
      }
      Tg.exports = SP;
  });
  var La = u((W5, Og) => {
      var wP = Ig();
      function AP(e) {
          var t = wP(e),
              r = t % 1;
          return t === t ? (r ? t - r : t) : 0;
      }
      Og.exports = AP;
  });
  var Sg = u((U5, bg) => {
      var RP = qa(),
          CP = Nt(),
          NP = La(),
          xP = Math.max;
      function qP(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n) return -1;
          var o = r == null ? 0 : NP(r);
          return o < 0 && (o = xP(n + o, 0)), RP(e, CP(t, 3), o);
      }
      bg.exports = qP;
  });
  var Pa = u((X5, wg) => {
      var LP = xa(),
          PP = Sg(),
          DP = LP(PP);
      wg.exports = DP;
  });
  var ui = u((We) => {
      "use strict";
      var MP = ft().default;
      Object.defineProperty(We, "__esModule", { value: !0 });
      We.withBrowser = We.TRANSFORM_STYLE_PREFIXED = We.TRANSFORM_PREFIXED = We.IS_BROWSER_ENV = We.FLEX_PREFIXED = We.ELEMENT_MATCHES = void 0;
      var FP = MP(Pa()),
          Rg = typeof window < "u";
      We.IS_BROWSER_ENV = Rg;
      var si = (e, t) => (Rg ? e() : t);
      We.withBrowser = si;
      var GP = si(() => (0, FP.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], (e) => e in Element.prototype));
      We.ELEMENT_MATCHES = GP;
      var WP = si(() => {
          let e = document.createElement("i"),
              t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
              r = "";
          try {
              let { length: n } = t;
              for (let o = 0; o < n; o++) {
                  let i = t[o];
                  if (((e.style.display = i), e.style.display === i)) return i;
              }
              return r;
          } catch {
              return r;
          }
      }, "flex");
      We.FLEX_PREFIXED = WP;
      var Cg = si(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
              let t = ["Webkit", "Moz", "ms"],
                  r = "Transform",
                  { length: n } = t;
              for (let o = 0; o < n; o++) {
                  let i = t[o] + r;
                  if (e.style[i] !== void 0) return i;
              }
          }
          return "transform";
      }, "transform");
      We.TRANSFORM_PREFIXED = Cg;
      var Ag = Cg.split("transform")[0],
          UP = Ag ? Ag + "TransformStyle" : "transformStyle";
      We.TRANSFORM_STYLE_PREFIXED = UP;
  });
  var Da = u((k5, Pg) => {
      var XP = 4,
          VP = 0.001,
          kP = 1e-7,
          BP = 10,
          Jr = 11,
          ci = 1 / (Jr - 1),
          HP = typeof Float32Array == "function";
      function Ng(e, t) {
          return 1 - 3 * t + 3 * e;
      }
      function xg(e, t) {
          return 3 * t - 6 * e;
      }
      function qg(e) {
          return 3 * e;
      }
      function li(e, t, r) {
          return ((Ng(t, r) * e + xg(t, r)) * e + qg(t)) * e;
      }
      function Lg(e, t, r) {
          return 3 * Ng(t, r) * e * e + 2 * xg(t, r) * e + qg(t);
      }
      function jP(e, t, r, n, o) {
          var i,
              a,
              s = 0;
          do (a = t + (r - t) / 2), (i = li(a, n, o) - e), i > 0 ? (r = a) : (t = a);
          while (Math.abs(i) > kP && ++s < BP);
          return a;
      }
      function KP(e, t, r, n) {
          for (var o = 0; o < XP; ++o) {
              var i = Lg(t, r, n);
              if (i === 0) return t;
              var a = li(t, r, n) - e;
              t -= a / i;
          }
          return t;
      }
      Pg.exports = function (t, r, n, o) {
          if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
          var i = HP ? new Float32Array(Jr) : new Array(Jr);
          if (t !== r || n !== o) for (var a = 0; a < Jr; ++a) i[a] = li(a * ci, t, n);
          function s(c) {
              for (var p = 0, g = 1, h = Jr - 1; g !== h && i[g] <= c; ++g) p += ci;
              --g;
              var m = (c - i[g]) / (i[g + 1] - i[g]),
                  T = p + m * ci,
                  R = Lg(T, t, n);
              return R >= VP ? KP(c, T, t, n) : R === 0 ? T : jP(c, p, p + ci, t, n);
          }
          return function (p) {
              return t === r && n === o ? p : p === 0 ? 0 : p === 1 ? 1 : li(s(p), r, o);
          };
      };
  });
  var Ma = u((ce) => {
      "use strict";
      var zP = ft().default;
      Object.defineProperty(ce, "__esModule", { value: !0 });
      ce.bounce = ND;
      ce.bouncePast = xD;
      ce.easeOut = ce.easeInOut = ce.easeIn = ce.ease = void 0;
      ce.inBack = TD;
      ce.inCirc = ED;
      ce.inCubic = rD;
      ce.inElastic = bD;
      ce.inExpo = vD;
      ce.inOutBack = OD;
      ce.inOutCirc = yD;
      ce.inOutCubic = iD;
      ce.inOutElastic = wD;
      ce.inOutExpo = gD;
      ce.inOutQuad = tD;
      ce.inOutQuart = sD;
      ce.inOutQuint = lD;
      ce.inOutSine = pD;
      ce.inQuad = JP;
      ce.inQuart = oD;
      ce.inQuint = uD;
      ce.inSine = fD;
      ce.outBack = ID;
      ce.outBounce = mD;
      ce.outCirc = _D;
      ce.outCubic = nD;
      ce.outElastic = SD;
      ce.outExpo = hD;
      ce.outQuad = eD;
      ce.outQuart = aD;
      ce.outQuint = cD;
      ce.outSine = dD;
      ce.swingFrom = RD;
      ce.swingFromTo = AD;
      ce.swingTo = CD;
      var fi = zP(Da()),
          Tt = 1.70158,
          YP = (0, fi.default)(0.25, 0.1, 0.25, 1);
      ce.ease = YP;
      var QP = (0, fi.default)(0.42, 0, 1, 1);
      ce.easeIn = QP;
      var $P = (0, fi.default)(0, 0, 0.58, 1);
      ce.easeOut = $P;
      var ZP = (0, fi.default)(0.42, 0, 0.58, 1);
      ce.easeInOut = ZP;
      function JP(e) {
          return Math.pow(e, 2);
      }
      function eD(e) {
          return -(Math.pow(e - 1, 2) - 1);
      }
      function tD(e) {
          return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
      }
      function rD(e) {
          return Math.pow(e, 3);
      }
      function nD(e) {
          return Math.pow(e - 1, 3) + 1;
      }
      function iD(e) {
          return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 3) : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function oD(e) {
          return Math.pow(e, 4);
      }
      function aD(e) {
          return -(Math.pow(e - 1, 4) - 1);
      }
      function sD(e) {
          return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 4) : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function uD(e) {
          return Math.pow(e, 5);
      }
      function cD(e) {
          return Math.pow(e - 1, 5) + 1;
      }
      function lD(e) {
          return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 5) : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function fD(e) {
          return -Math.cos(e * (Math.PI / 2)) + 1;
      }
      function dD(e) {
          return Math.sin(e * (Math.PI / 2));
      }
      function pD(e) {
          return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function vD(e) {
          return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function hD(e) {
          return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function gD(e) {
          return e === 0 ? 0 : e === 1 ? 1 : (e /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (e - 1)) : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function ED(e) {
          return -(Math.sqrt(1 - e * e) - 1);
      }
      function _D(e) {
          return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function yD(e) {
          return (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function mD(e) {
          return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function TD(e) {
          let t = Tt;
          return e * e * ((t + 1) * e - t);
      }
      function ID(e) {
          let t = Tt;
          return (e -= 1) * e * ((t + 1) * e + t) + 1;
      }
      function OD(e) {
          let t = Tt;
          return (e /= 0.5) < 1 ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t)) : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function bD(e) {
          let t = Tt,
              r = 0,
              n = 1;
          return e === 0 ? 0 : e === 1 ? 1 : (r || (r = 0.3), n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r)));
      }
      function SD(e) {
          let t = Tt,
              r = 0,
              n = 1;
          return e === 0 ? 0 : e === 1 ? 1 : (r || (r = 0.3), n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)), n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
      }
      function wD(e) {
          let t = Tt,
              r = 0,
              n = 1;
          return e === 0
              ? 0
              : (e /= 1 / 2) === 2
              ? 1
              : (r || (r = 0.3 * 1.5),
                n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
                e < 1 ? -0.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r) * 0.5 + 1);
      }
      function AD(e) {
          let t = Tt;
          return (e /= 0.5) < 1 ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t)) : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function RD(e) {
          let t = Tt;
          return e * e * ((t + 1) * e - t);
      }
      function CD(e) {
          let t = Tt;
          return (e -= 1) * e * ((t + 1) * e + t) + 1;
      }
      function ND(e) {
          return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function xD(e) {
          return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
  });
  var Ga = u((en) => {
      "use strict";
      var qD = ft().default,
          LD = Jt().default;
      Object.defineProperty(en, "__esModule", { value: !0 });
      en.applyEasing = MD;
      en.createBezierEasing = DD;
      en.optimizeFloat = Fa;
      var Dg = LD(Ma()),
          PD = qD(Da());
      function Fa(e, t = 5, r = 10) {
          let n = Math.pow(r, t),
              o = Number(Math.round(e * n) / n);
          return Math.abs(o) > 1e-4 ? o : 0;
      }
      function DD(e) {
          return (0, PD.default)(...e);
      }
      function MD(e, t, r) {
          return t === 0 ? 0 : t === 1 ? 1 : Fa(r ? (t > 0 ? r(t) : t) : t > 0 && e && Dg[e] ? Dg[e](t) : t);
      }
  });
  var Wg = u((gr) => {
      "use strict";
      Object.defineProperty(gr, "__esModule", { value: !0 });
      gr.createElementState = Gg;
      gr.ixElements = void 0;
      gr.mergeActionState = Wa;
      var di = ar(),
          Fg = Be(),
          {
              HTML_ELEMENT: j5,
              PLAIN_OBJECT: FD,
              ABSTRACT_NODE: K5,
              CONFIG_X_VALUE: GD,
              CONFIG_Y_VALUE: WD,
              CONFIG_Z_VALUE: UD,
              CONFIG_VALUE: XD,
              CONFIG_X_UNIT: VD,
              CONFIG_Y_UNIT: kD,
              CONFIG_Z_UNIT: BD,
              CONFIG_UNIT: HD,
          } = Fg.IX2EngineConstants,
          { IX2_SESSION_STOPPED: jD, IX2_INSTANCE_ADDED: KD, IX2_ELEMENT_STATE_CHANGED: zD } = Fg.IX2EngineActionTypes,
          Mg = {},
          YD = "refState",
          QD = (e = Mg, t = {}) => {
              switch (t.type) {
                  case jD:
                      return Mg;
                  case KD: {
                      let { elementId: r, element: n, origin: o, actionItem: i, refType: a } = t.payload,
                          { actionTypeId: s } = i,
                          c = e;
                      return (0, di.getIn)(c, [r, n]) !== n && (c = Gg(c, n, a, r, i)), Wa(c, r, s, o, i);
                  }
                  case zD: {
                      let { elementId: r, actionTypeId: n, current: o, actionItem: i } = t.payload;
                      return Wa(e, r, n, o, i);
                  }
                  default:
                      return e;
              }
          };
      gr.ixElements = QD;
      function Gg(e, t, r, n, o) {
          let i = r === FD ? (0, di.getIn)(o, ["config", "target", "objectId"]) : null;
          return (0, di.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
      }
      function Wa(e, t, r, n, o) {
          let i = ZD(o),
              a = [t, YD, r];
          return (0, di.mergeIn)(e, a, n, i);
      }
      var $D = [
          [GD, VD],
          [WD, kD],
          [UD, BD],
          [XD, HD],
      ];
      function ZD(e) {
          let { config: t } = e;
          return $D.reduce((r, n) => {
              let o = n[0],
                  i = n[1],
                  a = t[o],
                  s = t[i];
              return a != null && s != null && (r[i] = s), r;
          }, {});
      }
  });
  var Ug = u((Pe) => {
      "use strict";
      Object.defineProperty(Pe, "__esModule", { value: !0 });
      Pe.renderPlugin = Pe.getPluginOrigin = Pe.getPluginDuration = Pe.getPluginDestination = Pe.getPluginConfig = Pe.createPluginInstance = Pe.clearPlugin = void 0;
      var JD = (e) => e.value;
      Pe.getPluginConfig = JD;
      var eM = (e, t) => {
          if (t.config.duration !== "auto") return null;
          let r = parseFloat(e.getAttribute("data-duration"));
          return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      };
      Pe.getPluginDuration = eM;
      var tM = (e) => e || { value: 0 };
      Pe.getPluginOrigin = tM;
      var rM = (e) => ({ value: e.value });
      Pe.getPluginDestination = rM;
      var nM = (e) => {
          let t = window.Webflow.require("lottie").createInstance(e);
          return t.stop(), t.setSubframe(!0), t;
      };
      Pe.createPluginInstance = nM;
      var iM = (e, t, r) => {
          if (!e) return;
          let n = t[r.actionTypeId].value / 100;
          e.goToFrame(e.frames * n);
      };
      Pe.renderPlugin = iM;
      var oM = (e) => {
          window.Webflow.require("lottie").createInstance(e).stop();
      };
      Pe.clearPlugin = oM;
  });
  var Ua = u((Ne) => {
      "use strict";
      Object.defineProperty(Ne, "__esModule", { value: !0 });
      Ne.getPluginOrigin = Ne.getPluginDuration = Ne.getPluginDestination = Ne.getPluginConfig = Ne.createPluginInstance = Ne.clearPlugin = void 0;
      Ne.isPluginType = uM;
      Ne.renderPlugin = void 0;
      var kt = Ug(),
          Xg = Be(),
          aM = ui(),
          sM = {
              [Xg.ActionTypeConsts.PLUGIN_LOTTIE]: {
                  getConfig: kt.getPluginConfig,
                  getOrigin: kt.getPluginOrigin,
                  getDuration: kt.getPluginDuration,
                  getDestination: kt.getPluginDestination,
                  createInstance: kt.createPluginInstance,
                  render: kt.renderPlugin,
                  clear: kt.clearPlugin,
              },
          };
      function uM(e) {
          return e === Xg.ActionTypeConsts.PLUGIN_LOTTIE;
      }
      var Bt = (e) => (t) => {
              if (!aM.IS_BROWSER_ENV) return () => null;
              let r = sM[t];
              if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
              let n = r[e];
              if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
              return n;
          },
          cM = Bt("getConfig");
      Ne.getPluginConfig = cM;
      var lM = Bt("getOrigin");
      Ne.getPluginOrigin = lM;
      var fM = Bt("getDuration");
      Ne.getPluginDuration = fM;
      var dM = Bt("getDestination");
      Ne.getPluginDestination = dM;
      var pM = Bt("createInstance");
      Ne.createPluginInstance = pM;
      var vM = Bt("render");
      Ne.renderPlugin = vM;
      var hM = Bt("clear");
      Ne.clearPlugin = hM;
  });
  var kg = u(($5, Vg) => {
      function gM(e, t) {
          return e == null || e !== e ? t : e;
      }
      Vg.exports = gM;
  });
  var Hg = u((Z5, Bg) => {
      function EM(e, t, r, n) {
          var o = -1,
              i = e == null ? 0 : e.length;
          for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
          return r;
      }
      Bg.exports = EM;
  });
  var Kg = u((J5, jg) => {
      function _M(e) {
          return function (t, r, n) {
              for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
                  var c = a[e ? s : ++o];
                  if (r(i[c], c, i) === !1) break;
              }
              return t;
          };
      }
      jg.exports = _M;
  });
  var Yg = u((eK, zg) => {
      var yM = Kg(),
          mM = yM();
      zg.exports = mM;
  });
  var Xa = u((tK, Qg) => {
      var TM = Yg(),
          IM = Qr();
      function OM(e, t) {
          return e && TM(e, t, IM);
      }
      Qg.exports = OM;
  });
  var Zg = u((rK, $g) => {
      var bM = Xt();
      function SM(e, t) {
          return function (r, n) {
              if (r == null) return r;
              if (!bM(r)) return e(r, n);
              for (var o = r.length, i = t ? o : -1, a = Object(r); (t ? i-- : ++i < o) && n(a[i], i, a) !== !1; );
              return r;
          };
      }
      $g.exports = SM;
  });
  var Va = u((nK, Jg) => {
      var wM = Xa(),
          AM = Zg(),
          RM = AM(wM);
      Jg.exports = RM;
  });
  var tE = u((iK, eE) => {
      function CM(e, t, r, n, o) {
          return (
              o(e, function (i, a, s) {
                  r = n ? ((n = !1), i) : t(r, i, a, s);
              }),
              r
          );
      }
      eE.exports = CM;
  });
  var nE = u((oK, rE) => {
      var NM = Hg(),
          xM = Va(),
          qM = Nt(),
          LM = tE(),
          PM = Le();
      function DM(e, t, r) {
          var n = PM(e) ? NM : LM,
              o = arguments.length < 3;
          return n(e, qM(t, 4), r, o, xM);
      }
      rE.exports = DM;
  });
  var oE = u((aK, iE) => {
      var MM = qa(),
          FM = Nt(),
          GM = La(),
          WM = Math.max,
          UM = Math.min;
      function XM(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n) return -1;
          var o = n - 1;
          return r !== void 0 && ((o = GM(r)), (o = r < 0 ? WM(n + o, 0) : UM(o, n - 1))), MM(e, FM(t, 3), o, !0);
      }
      iE.exports = XM;
  });
  var sE = u((sK, aE) => {
      var VM = xa(),
          kM = oE(),
          BM = VM(kM);
      aE.exports = BM;
  });
  var cE = u((pi) => {
      "use strict";
      Object.defineProperty(pi, "__esModule", { value: !0 });
      pi.default = void 0;
      var HM = Object.prototype.hasOwnProperty;
      function uE(e, t) {
          return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
      }
      function jM(e, t) {
          if (uE(e, t)) return !0;
          if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
          let r = Object.keys(e),
              n = Object.keys(t);
          if (r.length !== n.length) return !1;
          for (let o = 0; o < r.length; o++) if (!HM.call(t, r[o]) || !uE(e[r[o]], t[r[o]])) return !1;
          return !0;
      }
      var KM = jM;
      pi.default = KM;
  });
  var NE = u((me) => {
      "use strict";
      var gi = ft().default;
      Object.defineProperty(me, "__esModule", { value: !0 });
      me.cleanupHTMLElement = B1;
      me.clearAllStyles = k1;
      me.getActionListProgress = j1;
      me.getAffectedElements = za;
      me.getComputedStyle = _1;
      me.getDestinationValues = S1;
      me.getElementId = v1;
      me.getInstanceId = d1;
      me.getInstanceOrigin = T1;
      me.getItemConfigByKey = void 0;
      me.getMaxDurationItemIndex = CE;
      me.getNamespacedParameterId = Y1;
      me.getRenderType = wE;
      me.getStyleProp = w1;
      me.mediaQueriesEqual = $1;
      me.observeStore = E1;
      me.reduceListToGroup = K1;
      me.reifyState = h1;
      me.renderHTMLElement = A1;
      Object.defineProperty(me, "shallowEqual", {
          enumerable: !0,
          get: function () {
              return yE.default;
          },
      });
      me.shouldAllowMediaQuery = Q1;
      me.shouldNamespaceEventParameter = z1;
      me.stringifyTarget = Z1;
      var xt = gi(kg()),
          Ba = gi(nE()),
          ka = gi(sE()),
          lE = ar(),
          Ht = Be(),
          yE = gi(cE()),
          zM = Ga(),
          Et = Ua(),
          Ue = ui(),
          {
              BACKGROUND: YM,
              TRANSFORM: QM,
              TRANSLATE_3D: $M,
              SCALE_3D: ZM,
              ROTATE_X: JM,
              ROTATE_Y: e1,
              ROTATE_Z: t1,
              SKEW: r1,
              PRESERVE_3D: n1,
              FLEX: i1,
              OPACITY: vi,
              FILTER: tn,
              FONT_VARIATION_SETTINGS: rn,
              WIDTH: ht,
              HEIGHT: gt,
              BACKGROUND_COLOR: mE,
              BORDER_COLOR: o1,
              COLOR: a1,
              CHILDREN: fE,
              IMMEDIATE_CHILDREN: s1,
              SIBLINGS: dE,
              PARENT: u1,
              DISPLAY: hi,
              WILL_CHANGE: Er,
              AUTO: qt,
              COMMA_DELIMITER: nn,
              COLON_DELIMITER: c1,
              BAR_DELIMITER: pE,
              RENDER_TRANSFORM: TE,
              RENDER_GENERAL: Ha,
              RENDER_STYLE: ja,
              RENDER_PLUGIN: IE,
          } = Ht.IX2EngineConstants,
          {
              TRANSFORM_MOVE: _r,
              TRANSFORM_SCALE: yr,
              TRANSFORM_ROTATE: mr,
              TRANSFORM_SKEW: on,
              STYLE_OPACITY: OE,
              STYLE_FILTER: an,
              STYLE_FONT_VARIATION: sn,
              STYLE_SIZE: Tr,
              STYLE_BACKGROUND_COLOR: Ir,
              STYLE_BORDER: Or,
              STYLE_TEXT_COLOR: br,
              GENERAL_DISPLAY: Ei,
          } = Ht.ActionTypeConsts,
          l1 = "OBJECT_VALUE",
          bE = (e) => e.trim(),
          Ka = Object.freeze({ [Ir]: mE, [Or]: o1, [br]: a1 }),
          SE = Object.freeze({ [Ue.TRANSFORM_PREFIXED]: QM, [mE]: YM, [vi]: vi, [tn]: tn, [ht]: ht, [gt]: gt, [rn]: rn }),
          vE = {},
          f1 = 1;
      function d1() {
          return "i" + f1++;
      }
      var p1 = 1;
      function v1(e, t) {
          for (let r in e) {
              let n = e[r];
              if (n && n.ref === t) return n.id;
          }
          return "e" + p1++;
      }
      function h1({ events: e, actionLists: t, site: r } = {}) {
          let n = (0, Ba.default)(
                  e,
                  (a, s) => {
                      let { eventTypeId: c } = s;
                      return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
                  },
                  {}
              ),
              o = r && r.mediaQueries,
              i = [];
          return o ? (i = o.map((a) => a.key)) : ((o = []), console.warn("IX2 missing mediaQueries in site data")), { ixData: { events: e, actionLists: t, eventTypeMap: n, mediaQueries: o, mediaQueryKeys: i } };
      }
      var g1 = (e, t) => e === t;
      function E1({ store: e, select: t, onChange: r, comparator: n = g1 }) {
          let { getState: o, subscribe: i } = e,
              a = i(c),
              s = t(o());
          function c() {
              let p = t(o());
              if (p == null) {
                  a();
                  return;
              }
              n(p, s) || ((s = p), r(s, e));
          }
          return a;
      }
      function hE(e) {
          let t = typeof e;
          if (t === "string") return { id: e };
          if (e != null && t === "object") {
              let { id: r, objectId: n, selector: o, selectorGuids: i, appliesTo: a, useEventTarget: s } = e;
              return { id: r, objectId: n, selector: o, selectorGuids: i, appliesTo: a, useEventTarget: s };
          }
          return {};
      }
      function za({ config: e, event: t, eventTarget: r, elementRoot: n, elementApi: o }) {
          var i, a, s;
          if (!o) throw new Error("IX2 missing elementApi");
          let { targets: c } = e;
          if (Array.isArray(c) && c.length > 0) return c.reduce((V, j) => V.concat(za({ config: { target: j }, event: t, eventTarget: r, elementRoot: n, elementApi: o })), []);
          let { getValidDocument: p, getQuerySelector: g, queryDocument: h, getChildElements: m, getSiblingElements: T, matchSelector: R, elementContains: w, isSiblingNode: F } = o,
              { target: N } = e;
          if (!N) return [];
          let { id: x, objectId: S, selector: P, selectorGuids: L, appliesTo: M, useEventTarget: H } = hE(N);
          if (S) return [vE[S] || (vE[S] = {})];
          if (M === Ht.EventAppliesTo.PAGE) {
              let V = p(x);
              return V ? [V] : [];
          }
          let Z = ((i = t == null || (a = t.action) === null || a === void 0 || (s = a.config) === null || s === void 0 ? void 0 : s.affectedElements) !== null && i !== void 0 ? i : {})[x || P] || {},
              se = !!(Z.id || Z.selector),
              re,
              W,
              O,
              U = t && g(hE(t.target));
          if ((se ? ((re = Z.limitAffectedElements), (W = U), (O = g(Z))) : (W = O = g({ id: x, selector: P, selectorGuids: L })), t && H)) {
              let V = r && (O || H === !0) ? [r] : h(U);
              if (O) {
                  if (H === u1) return h(O).filter((j) => V.some((ee) => w(j, ee)));
                  if (H === fE) return h(O).filter((j) => V.some((ee) => w(ee, j)));
                  if (H === dE) return h(O).filter((j) => V.some((ee) => F(ee, j)));
              }
              return V;
          }
          return W == null || O == null ? [] : Ue.IS_BROWSER_ENV && n ? h(O).filter((V) => n.contains(V)) : re === fE ? h(W, O) : re === s1 ? m(h(W)).filter(R(O)) : re === dE ? T(h(W)).filter(R(O)) : h(O);
      }
      function _1({ element: e, actionItem: t }) {
          if (!Ue.IS_BROWSER_ENV) return {};
          let { actionTypeId: r } = t;
          switch (r) {
              case Tr:
              case Ir:
              case Or:
              case br:
              case Ei:
                  return window.getComputedStyle(e);
              default:
                  return {};
          }
      }
      var gE = /px/,
          y1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = R1[n.type]), r), e || {}),
          m1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = C1[n.type] || n.defaultValue || 0), r), e || {});
      function T1(e, t = {}, r = {}, n, o) {
          let { getStyle: i } = o,
              { actionTypeId: a } = n;
          if ((0, Et.isPluginType)(a)) return (0, Et.getPluginOrigin)(a)(t[a]);
          switch (n.actionTypeId) {
              case _r:
              case yr:
              case mr:
              case on:
                  return t[n.actionTypeId] || Ya[n.actionTypeId];
              case an:
                  return y1(t[n.actionTypeId], n.config.filters);
              case sn:
                  return m1(t[n.actionTypeId], n.config.fontVariations);
              case OE:
                  return { value: (0, xt.default)(parseFloat(i(e, vi)), 1) };
              case Tr: {
                  let s = i(e, ht),
                      c = i(e, gt),
                      p,
                      g;
                  return (
                      n.config.widthUnit === qt ? (p = gE.test(s) ? parseFloat(s) : parseFloat(r.width)) : (p = (0, xt.default)(parseFloat(s), parseFloat(r.width))),
                      n.config.heightUnit === qt ? (g = gE.test(c) ? parseFloat(c) : parseFloat(r.height)) : (g = (0, xt.default)(parseFloat(c), parseFloat(r.height))),
                      { widthValue: p, heightValue: g }
                  );
              }
              case Ir:
              case Or:
              case br:
                  return U1({ element: e, actionTypeId: n.actionTypeId, computedStyle: r, getStyle: i });
              case Ei:
                  return { value: (0, xt.default)(i(e, hi), r.display) };
              case l1:
                  return t[n.actionTypeId] || { value: 0 };
              default:
                  return;
          }
      }
      var I1 = (e, t) => (t && (e[t.type] = t.value || 0), e),
          O1 = (e, t) => (t && (e[t.type] = t.value || 0), e),
          b1 = (e, t, r) => {
              if ((0, Et.isPluginType)(e)) return (0, Et.getPluginConfig)(e)(r, t);
              switch (e) {
                  case an: {
                      let n = (0, ka.default)(r.filters, ({ type: o }) => o === t);
                      return n ? n.value : 0;
                  }
                  case sn: {
                      let n = (0, ka.default)(r.fontVariations, ({ type: o }) => o === t);
                      return n ? n.value : 0;
                  }
                  default:
                      return r[t];
              }
          };
      me.getItemConfigByKey = b1;
      function S1({ element: e, actionItem: t, elementApi: r }) {
          if ((0, Et.isPluginType)(t.actionTypeId)) return (0, Et.getPluginDestination)(t.actionTypeId)(t.config);
          switch (t.actionTypeId) {
              case _r:
              case yr:
              case mr:
              case on: {
                  let { xValue: n, yValue: o, zValue: i } = t.config;
                  return { xValue: n, yValue: o, zValue: i };
              }
              case Tr: {
                  let { getStyle: n, setStyle: o, getProperty: i } = r,
                      { widthUnit: a, heightUnit: s } = t.config,
                      { widthValue: c, heightValue: p } = t.config;
                  if (!Ue.IS_BROWSER_ENV) return { widthValue: c, heightValue: p };
                  if (a === qt) {
                      let g = n(e, ht);
                      o(e, ht, ""), (c = i(e, "offsetWidth")), o(e, ht, g);
                  }
                  if (s === qt) {
                      let g = n(e, gt);
                      o(e, gt, ""), (p = i(e, "offsetHeight")), o(e, gt, g);
                  }
                  return { widthValue: c, heightValue: p };
              }
              case Ir:
              case Or:
              case br: {
                  let { rValue: n, gValue: o, bValue: i, aValue: a } = t.config;
                  return { rValue: n, gValue: o, bValue: i, aValue: a };
              }
              case an:
                  return t.config.filters.reduce(I1, {});
              case sn:
                  return t.config.fontVariations.reduce(O1, {});
              default: {
                  let { value: n } = t.config;
                  return { value: n };
              }
          }
      }
      function wE(e) {
          if (/^TRANSFORM_/.test(e)) return TE;
          if (/^STYLE_/.test(e)) return ja;
          if (/^GENERAL_/.test(e)) return Ha;
          if (/^PLUGIN_/.test(e)) return IE;
      }
      function w1(e, t) {
          return e === ja ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function A1(e, t, r, n, o, i, a, s, c) {
          switch (s) {
              case TE:
                  return q1(e, t, r, o, a);
              case ja:
                  return X1(e, t, r, o, i, a);
              case Ha:
                  return V1(e, o, a);
              case IE: {
                  let { actionTypeId: p } = o;
                  if ((0, Et.isPluginType)(p)) return (0, Et.renderPlugin)(p)(c, t, o);
              }
          }
      }
      var Ya = {
              [_r]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
              [yr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
              [mr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
              [on]: Object.freeze({ xValue: 0, yValue: 0 }),
          },
          R1 = Object.freeze({ blur: 0, "hue-rotate": 0, invert: 0, grayscale: 0, saturate: 100, sepia: 0, contrast: 100, brightness: 100 }),
          C1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
          N1 = (e, t) => {
              let r = (0, ka.default)(t.filters, ({ type: n }) => n === e);
              if (r && r.unit) return r.unit;
              switch (e) {
                  case "blur":
                      return "px";
                  case "hue-rotate":
                      return "deg";
                  default:
                      return "%";
              }
          },
          x1 = Object.keys(Ya);
      function q1(e, t, r, n, o) {
          let i = x1
                  .map((s) => {
                      let c = Ya[s],
                          { xValue: p = c.xValue, yValue: g = c.yValue, zValue: h = c.zValue, xUnit: m = "", yUnit: T = "", zUnit: R = "" } = t[s] || {};
                      switch (s) {
                          case _r:
                              return `${$M}(${p}${m}, ${g}${T}, ${h}${R})`;
                          case yr:
                              return `${ZM}(${p}${m}, ${g}${T}, ${h}${R})`;
                          case mr:
                              return `${JM}(${p}${m}) ${e1}(${g}${T}) ${t1}(${h}${R})`;
                          case on:
                              return `${r1}(${p}${m}, ${g}${T})`;
                          default:
                              return "";
                      }
                  })
                  .join(" "),
              { setStyle: a } = o;
          jt(e, Ue.TRANSFORM_PREFIXED, o), a(e, Ue.TRANSFORM_PREFIXED, i), D1(n, r) && a(e, Ue.TRANSFORM_STYLE_PREFIXED, n1);
      }
      function L1(e, t, r, n) {
          let o = (0, Ba.default)(t, (a, s, c) => `${a} ${c}(${s}${N1(c, r)})`, ""),
              { setStyle: i } = n;
          jt(e, tn, n), i(e, tn, o);
      }
      function P1(e, t, r, n) {
          let o = (0, Ba.default)(t, (a, s, c) => (a.push(`"${c}" ${s}`), a), []).join(", "),
              { setStyle: i } = n;
          jt(e, rn, n), i(e, rn, o);
      }
      function D1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
          return (e === _r && n !== void 0) || (e === yr && n !== void 0) || (e === mr && (t !== void 0 || r !== void 0));
      }
      var M1 = "\\(([^)]+)\\)",
          F1 = /^rgb/,
          G1 = RegExp(`rgba?${M1}`);
      function W1(e, t) {
          let r = e.exec(t);
          return r ? r[1] : "";
      }
      function U1({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
          let o = Ka[t],
              i = n(e, o),
              a = F1.test(i) ? i : r[o],
              s = W1(G1, a).split(nn);
          return { rValue: (0, xt.default)(parseInt(s[0], 10), 255), gValue: (0, xt.default)(parseInt(s[1], 10), 255), bValue: (0, xt.default)(parseInt(s[2], 10), 255), aValue: (0, xt.default)(parseFloat(s[3]), 1) };
      }
      function X1(e, t, r, n, o, i) {
          let { setStyle: a } = i;
          switch (n.actionTypeId) {
              case Tr: {
                  let { widthUnit: s = "", heightUnit: c = "" } = n.config,
                      { widthValue: p, heightValue: g } = r;
                  p !== void 0 && (s === qt && (s = "px"), jt(e, ht, i), a(e, ht, p + s)), g !== void 0 && (c === qt && (c = "px"), jt(e, gt, i), a(e, gt, g + c));
                  break;
              }
              case an: {
                  L1(e, r, n.config, i);
                  break;
              }
              case sn: {
                  P1(e, r, n.config, i);
                  break;
              }
              case Ir:
              case Or:
              case br: {
                  let s = Ka[n.actionTypeId],
                      c = Math.round(r.rValue),
                      p = Math.round(r.gValue),
                      g = Math.round(r.bValue),
                      h = r.aValue;
                  jt(e, s, i), a(e, s, h >= 1 ? `rgb(${c},${p},${g})` : `rgba(${c},${p},${g},${h})`);
                  break;
              }
              default: {
                  let { unit: s = "" } = n.config;
                  jt(e, o, i), a(e, o, r.value + s);
                  break;
              }
          }
      }
      function V1(e, t, r) {
          let { setStyle: n } = r;
          switch (t.actionTypeId) {
              case Ei: {
                  let { value: o } = t.config;
                  o === i1 && Ue.IS_BROWSER_ENV ? n(e, hi, Ue.FLEX_PREFIXED) : n(e, hi, o);
                  return;
              }
          }
      }
      function jt(e, t, r) {
          if (!Ue.IS_BROWSER_ENV) return;
          let n = SE[t];
          if (!n) return;
          let { getStyle: o, setStyle: i } = r,
              a = o(e, Er);
          if (!a) {
              i(e, Er, n);
              return;
          }
          let s = a.split(nn).map(bE);
          s.indexOf(n) === -1 && i(e, Er, s.concat(n).join(nn));
      }
      function AE(e, t, r) {
          if (!Ue.IS_BROWSER_ENV) return;
          let n = SE[t];
          if (!n) return;
          let { getStyle: o, setStyle: i } = r,
              a = o(e, Er);
          !a ||
              a.indexOf(n) === -1 ||
              i(
                  e,
                  Er,
                  a
                      .split(nn)
                      .map(bE)
                      .filter((s) => s !== n)
                      .join(nn)
              );
      }
      function k1({ store: e, elementApi: t }) {
          let { ixData: r } = e.getState(),
              { events: n = {}, actionLists: o = {} } = r;
          Object.keys(n).forEach((i) => {
              let a = n[i],
                  { config: s } = a.action,
                  { actionListId: c } = s,
                  p = o[c];
              p && EE({ actionList: p, event: a, elementApi: t });
          }),
              Object.keys(o).forEach((i) => {
                  EE({ actionList: o[i], elementApi: t });
              });
      }
      function EE({ actionList: e = {}, event: t, elementApi: r }) {
          let { actionItemGroups: n, continuousParameterGroups: o } = e;
          n &&
              n.forEach((i) => {
                  _E({ actionGroup: i, event: t, elementApi: r });
              }),
              o &&
                  o.forEach((i) => {
                      let { continuousActionGroups: a } = i;
                      a.forEach((s) => {
                          _E({ actionGroup: s, event: t, elementApi: r });
                      });
                  });
      }
      function _E({ actionGroup: e, event: t, elementApi: r }) {
          let { actionItems: n } = e;
          n.forEach(({ actionTypeId: o, config: i }) => {
              let a;
              (0, Et.isPluginType)(o) ? (a = (0, Et.clearPlugin)(o)) : (a = RE({ effect: H1, actionTypeId: o, elementApi: r })), za({ config: i, event: t, elementApi: r }).forEach(a);
          });
      }
      function B1(e, t, r) {
          let { setStyle: n, getStyle: o } = r,
              { actionTypeId: i } = t;
          if (i === Tr) {
              let { config: a } = t;
              a.widthUnit === qt && n(e, ht, ""), a.heightUnit === qt && n(e, gt, "");
          }
          o(e, Er) && RE({ effect: AE, actionTypeId: i, elementApi: r })(e);
      }
      var RE = ({ effect: e, actionTypeId: t, elementApi: r }) => (n) => {
          switch (t) {
              case _r:
              case yr:
              case mr:
              case on:
                  e(n, Ue.TRANSFORM_PREFIXED, r);
                  break;
              case an:
                  e(n, tn, r);
                  break;
              case sn:
                  e(n, rn, r);
                  break;
              case OE:
                  e(n, vi, r);
                  break;
              case Tr:
                  e(n, ht, r), e(n, gt, r);
                  break;
              case Ir:
              case Or:
              case br:
                  e(n, Ka[t], r);
                  break;
              case Ei:
                  e(n, hi, r);
                  break;
          }
      };
      function H1(e, t, r) {
          let { setStyle: n } = r;
          AE(e, t, r), n(e, t, ""), t === Ue.TRANSFORM_PREFIXED && n(e, Ue.TRANSFORM_STYLE_PREFIXED, "");
      }
      function CE(e) {
          let t = 0,
              r = 0;
          return (
              e.forEach((n, o) => {
                  let { config: i } = n,
                      a = i.delay + i.duration;
                  a >= t && ((t = a), (r = o));
              }),
              r
          );
      }
      function j1(e, t) {
          let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
              { actionItem: o, verboseTimeElapsed: i = 0 } = t,
              a = 0,
              s = 0;
          return (
              r.forEach((c, p) => {
                  if (n && p === 0) return;
                  let { actionItems: g } = c,
                      h = g[CE(g)],
                      { config: m, actionTypeId: T } = h;
                  o.id === h.id && (s = a + i);
                  let R = wE(T) === Ha ? 0 : m.duration;
                  a += m.delay + R;
              }),
              a > 0 ? (0, zM.optimizeFloat)(s / a) : 0
          );
      }
      function K1({ actionList: e, actionItemId: t, rawData: r }) {
          let { actionItemGroups: n, continuousParameterGroups: o } = e,
              i = [],
              a = (s) => (i.push((0, lE.mergeIn)(s, ["config"], { delay: 0, duration: 0 })), s.id === t);
          return (
              n && n.some(({ actionItems: s }) => s.some(a)),
              o &&
                  o.some((s) => {
                      let { continuousActionGroups: c } = s;
                      return c.some(({ actionItems: p }) => p.some(a));
                  }),
              (0, lE.setIn)(r, ["actionLists"], { [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] } })
          );
      }
      function z1(e, { basedOn: t }) {
          return (e === Ht.EventTypeConsts.SCROLLING_IN_VIEW && (t === Ht.EventBasedOn.ELEMENT || t == null)) || (e === Ht.EventTypeConsts.MOUSE_MOVE && t === Ht.EventBasedOn.ELEMENT);
      }
      function Y1(e, t) {
          return e + c1 + t;
      }
      function Q1(e, t) {
          return t == null ? !0 : e.indexOf(t) !== -1;
      }
      function $1(e, t) {
          return (0, yE.default)(e && e.sort(), t && t.sort());
      }
      function Z1(e) {
          if (typeof e == "string") return e;
          let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
          return t + pE + r + pE + n;
      }
  });
  var Kt = u((Xe) => {
      "use strict";
      var Sr = Jt().default;
      Object.defineProperty(Xe, "__esModule", { value: !0 });
      Xe.IX2VanillaUtils = Xe.IX2VanillaPlugins = Xe.IX2ElementsReducer = Xe.IX2Easings = Xe.IX2EasingUtils = Xe.IX2BrowserSupport = void 0;
      var J1 = Sr(ui());
      Xe.IX2BrowserSupport = J1;
      var eF = Sr(Ma());
      Xe.IX2Easings = eF;
      var tF = Sr(Ga());
      Xe.IX2EasingUtils = tF;
      var rF = Sr(Wg());
      Xe.IX2ElementsReducer = rF;
      var nF = Sr(Ua());
      Xe.IX2VanillaPlugins = nF;
      var iF = Sr(NE());
      Xe.IX2VanillaUtils = iF;
  });
  var PE = u((yi) => {
      "use strict";
      Object.defineProperty(yi, "__esModule", { value: !0 });
      yi.ixInstances = void 0;
      var xE = Be(),
          qE = Kt(),
          wr = ar(),
          { IX2_RAW_DATA_IMPORTED: oF, IX2_SESSION_STOPPED: aF, IX2_INSTANCE_ADDED: sF, IX2_INSTANCE_STARTED: uF, IX2_INSTANCE_REMOVED: cF, IX2_ANIMATION_FRAME_CHANGED: lF } = xE.IX2EngineActionTypes,
          { optimizeFloat: _i, applyEasing: LE, createBezierEasing: fF } = qE.IX2EasingUtils,
          { RENDER_GENERAL: dF } = xE.IX2EngineConstants,
          { getItemConfigByKey: Qa, getRenderType: pF, getStyleProp: vF } = qE.IX2VanillaUtils,
          hF = (e, t) => {
              let { position: r, parameterId: n, actionGroups: o, destinationKeys: i, smoothing: a, restingValue: s, actionTypeId: c, customEasingFn: p, skipMotion: g, skipToValue: h } = e,
                  { parameters: m } = t.payload,
                  T = Math.max(1 - a, 0.01),
                  R = m[n];
              R == null && ((T = 1), (R = s));
              let w = Math.max(R, 0) || 0,
                  F = _i(w - r),
                  N = g ? h : _i(r + F * T),
                  x = N * 100;
              if (N === r && e.current) return e;
              let S, P, L, M;
              for (let Q = 0, { length: Z } = o; Q < Z; Q++) {
                  let { keyframe: se, actionItems: re } = o[Q];
                  if ((Q === 0 && (S = re[0]), x >= se)) {
                      S = re[0];
                      let W = o[Q + 1],
                          O = W && x !== se;
                      (P = O ? W.actionItems[0] : null), O && ((L = se / 100), (M = (W.keyframe - se) / 100));
                  }
              }
              let H = {};
              if (S && !P)
                  for (let Q = 0, { length: Z } = i; Q < Z; Q++) {
                      let se = i[Q];
                      H[se] = Qa(c, se, S.config);
                  }
              else if (S && P && L !== void 0 && M !== void 0) {
                  let Q = (N - L) / M,
                      Z = S.config.easing,
                      se = LE(Z, Q, p);
                  for (let re = 0, { length: W } = i; re < W; re++) {
                      let O = i[re],
                          U = Qa(c, O, S.config),
                          ee = (Qa(c, O, P.config) - U) * se + U;
                      H[O] = ee;
                  }
              }
              return (0, wr.merge)(e, { position: N, current: H });
          },
          gF = (e, t) => {
              let { active: r, origin: n, start: o, immediate: i, renderType: a, verbose: s, actionItem: c, destination: p, destinationKeys: g, pluginDuration: h, instanceDelay: m, customEasingFn: T, skipMotion: R } = e,
                  w = c.config.easing,
                  { duration: F, delay: N } = c.config;
              h != null && (F = h), (N = m ?? N), a === dF ? (F = 0) : (i || R) && (F = N = 0);
              let { now: x } = t.payload;
              if (r && n) {
                  let S = x - (o + N);
                  if (s) {
                      let Q = x - o,
                          Z = F + N,
                          se = _i(Math.min(Math.max(0, Q / Z), 1));
                      e = (0, wr.set)(e, "verboseTimeElapsed", Z * se);
                  }
                  if (S < 0) return e;
                  let P = _i(Math.min(Math.max(0, S / F), 1)),
                      L = LE(w, P, T),
                      M = {},
                      H = null;
                  return (
                      g.length &&
                          (H = g.reduce((Q, Z) => {
                              let se = p[Z],
                                  re = parseFloat(n[Z]) || 0,
                                  O = (parseFloat(se) - re) * L + re;
                              return (Q[Z] = O), Q;
                          }, {})),
                      (M.current = H),
                      (M.position = P),
                      P === 1 && ((M.active = !1), (M.complete = !0)),
                      (0, wr.merge)(e, M)
                  );
              }
              return e;
          },
          EF = (e = Object.freeze({}), t) => {
              switch (t.type) {
                  case oF:
                      return t.payload.ixInstances || Object.freeze({});
                  case aF:
                      return Object.freeze({});
                  case sF: {
                      let {
                              instanceId: r,
                              elementId: n,
                              actionItem: o,
                              eventId: i,
                              eventTarget: a,
                              eventStateKey: s,
                              actionListId: c,
                              groupIndex: p,
                              isCarrier: g,
                              origin: h,
                              destination: m,
                              immediate: T,
                              verbose: R,
                              continuous: w,
                              parameterId: F,
                              actionGroups: N,
                              smoothing: x,
                              restingValue: S,
                              pluginInstance: P,
                              pluginDuration: L,
                              instanceDelay: M,
                              skipMotion: H,
                              skipToValue: Q,
                          } = t.payload,
                          { actionTypeId: Z } = o,
                          se = pF(Z),
                          re = vF(se, Z),
                          W = Object.keys(m).filter((U) => m[U] != null),
                          { easing: O } = o.config;
                      return (0, wr.set)(e, r, {
                          id: r,
                          elementId: n,
                          active: !1,
                          position: 0,
                          start: 0,
                          origin: h,
                          destination: m,
                          destinationKeys: W,
                          immediate: T,
                          verbose: R,
                          current: null,
                          actionItem: o,
                          actionTypeId: Z,
                          eventId: i,
                          eventTarget: a,
                          eventStateKey: s,
                          actionListId: c,
                          groupIndex: p,
                          renderType: se,
                          isCarrier: g,
                          styleProp: re,
                          continuous: w,
                          parameterId: F,
                          actionGroups: N,
                          smoothing: x,
                          restingValue: S,
                          pluginInstance: P,
                          pluginDuration: L,
                          instanceDelay: M,
                          skipMotion: H,
                          skipToValue: Q,
                          customEasingFn: Array.isArray(O) && O.length === 4 ? fF(O) : void 0,
                      });
                  }
                  case uF: {
                      let { instanceId: r, time: n } = t.payload;
                      return (0, wr.mergeIn)(e, [r], { active: !0, complete: !1, start: n });
                  }
                  case cF: {
                      let { instanceId: r } = t.payload;
                      if (!e[r]) return e;
                      let n = {},
                          o = Object.keys(e),
                          { length: i } = o;
                      for (let a = 0; a < i; a++) {
                          let s = o[a];
                          s !== r && (n[s] = e[s]);
                      }
                      return n;
                  }
                  case lF: {
                      let r = e,
                          n = Object.keys(e),
                          { length: o } = n;
                      for (let i = 0; i < o; i++) {
                          let a = n[i],
                              s = e[a],
                              c = s.continuous ? hF : gF;
                          r = (0, wr.set)(r, a, c(s, t));
                      }
                      return r;
                  }
                  default:
                      return e;
              }
          };
      yi.ixInstances = EF;
  });
  var DE = u((mi) => {
      "use strict";
      Object.defineProperty(mi, "__esModule", { value: !0 });
      mi.ixParameters = void 0;
      var _F = Be(),
          { IX2_RAW_DATA_IMPORTED: yF, IX2_SESSION_STOPPED: mF, IX2_PARAMETER_CHANGED: TF } = _F.IX2EngineActionTypes,
          IF = (e = {}, t) => {
              switch (t.type) {
                  case yF:
                      return t.payload.ixParameters || {};
                  case mF:
                      return {};
                  case TF: {
                      let { key: r, value: n } = t.payload;
                      return (e[r] = n), e;
                  }
                  default:
                      return e;
              }
          };
      mi.ixParameters = IF;
  });
  var ME = u((Ti) => {
      "use strict";
      Object.defineProperty(Ti, "__esModule", { value: !0 });
      Ti.default = void 0;
      var OF = $o(),
          bF = kf(),
          SF = ud(),
          wF = ld(),
          AF = Kt(),
          RF = PE(),
          CF = DE(),
          { ixElements: NF } = AF.IX2ElementsReducer,
          xF = (0, OF.combineReducers)({ ixData: bF.ixData, ixRequest: SF.ixRequest, ixSession: wF.ixSession, ixElements: NF, ixInstances: RF.ixInstances, ixParameters: CF.ixParameters });
      Ti.default = xF;
  });
  var FE = u((vK, un) => {
      function qF(e, t) {
          if (e == null) return {};
          var r = {},
              n = Object.keys(e),
              o,
              i;
          for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
          return r;
      }
      (un.exports = qF), (un.exports.__esModule = !0), (un.exports.default = un.exports);
  });
  var WE = u((hK, GE) => {
      var LF = Ut(),
          PF = Le(),
          DF = Ct(),
          MF = "[object String]";
      function FF(e) {
          return typeof e == "string" || (!PF(e) && DF(e) && LF(e) == MF);
      }
      GE.exports = FF;
  });
  var XE = u((gK, UE) => {
      var GF = Na(),
          WF = GF("length");
      UE.exports = WF;
  });
  var kE = u((EK, VE) => {
      var UF = "\\ud800-\\udfff",
          XF = "\\u0300-\\u036f",
          VF = "\\ufe20-\\ufe2f",
          kF = "\\u20d0-\\u20ff",
          BF = XF + VF + kF,
          HF = "\\ufe0e\\ufe0f",
          jF = "\\u200d",
          KF = RegExp("[" + jF + UF + BF + HF + "]");
      function zF(e) {
          return KF.test(e);
      }
      VE.exports = zF;
  });
  var ZE = u((_K, $E) => {
      var HE = "\\ud800-\\udfff",
          YF = "\\u0300-\\u036f",
          QF = "\\ufe20-\\ufe2f",
          $F = "\\u20d0-\\u20ff",
          ZF = YF + QF + $F,
          JF = "\\ufe0e\\ufe0f",
          e2 = "[" + HE + "]",
          $a = "[" + ZF + "]",
          Za = "\\ud83c[\\udffb-\\udfff]",
          t2 = "(?:" + $a + "|" + Za + ")",
          jE = "[^" + HE + "]",
          KE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          zE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          r2 = "\\u200d",
          YE = t2 + "?",
          QE = "[" + JF + "]?",
          n2 = "(?:" + r2 + "(?:" + [jE, KE, zE].join("|") + ")" + QE + YE + ")*",
          i2 = QE + YE + n2,
          o2 = "(?:" + [jE + $a + "?", $a, KE, zE, e2].join("|") + ")",
          BE = RegExp(Za + "(?=" + Za + ")|" + o2 + i2, "g");
      function a2(e) {
          for (var t = (BE.lastIndex = 0); BE.test(e); ) ++t;
          return t;
      }
      $E.exports = a2;
  });
  var e_ = u((yK, JE) => {
      var s2 = XE(),
          u2 = kE(),
          c2 = ZE();
      function l2(e) {
          return u2(e) ? c2(e) : s2(e);
      }
      JE.exports = l2;
  });
  var r_ = u((mK, t_) => {
      var f2 = Jn(),
          d2 = ei(),
          p2 = Xt(),
          v2 = WE(),
          h2 = e_(),
          g2 = "[object Map]",
          E2 = "[object Set]";
      function _2(e) {
          if (e == null) return 0;
          if (p2(e)) return v2(e) ? h2(e) : e.length;
          var t = d2(e);
          return t == g2 || t == E2 ? e.size : f2(e).length;
      }
      t_.exports = _2;
  });
  var i_ = u((TK, n_) => {
      var y2 = "Expected a function";
      function m2(e) {
          if (typeof e != "function") throw new TypeError(y2);
          return function () {
              var t = arguments;
              switch (t.length) {
                  case 0:
                      return !e.call(this);
                  case 1:
                      return !e.call(this, t[0]);
                  case 2:
                      return !e.call(this, t[0], t[1]);
                  case 3:
                      return !e.call(this, t[0], t[1], t[2]);
              }
              return !e.apply(this, t);
          };
      }
      n_.exports = m2;
  });
  var Ja = u((IK, o_) => {
      var T2 = Rt(),
          I2 = (function () {
              try {
                  var e = T2(Object, "defineProperty");
                  return e({}, "", {}), e;
              } catch {}
          })();
      o_.exports = I2;
  });
  var es = u((OK, s_) => {
      var a_ = Ja();
      function O2(e, t, r) {
          t == "__proto__" && a_ ? a_(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
      }
      s_.exports = O2;
  });
  var c_ = u((bK, u_) => {
      var b2 = es(),
          S2 = kn(),
          w2 = Object.prototype,
          A2 = w2.hasOwnProperty;
      function R2(e, t, r) {
          var n = e[t];
          (!(A2.call(e, t) && S2(n, r)) || (r === void 0 && !(t in e))) && b2(e, t, r);
      }
      u_.exports = R2;
  });
  var d_ = u((SK, f_) => {
      var C2 = c_(),
          N2 = Zr(),
          x2 = Yn(),
          l_ = vt(),
          q2 = hr();
      function L2(e, t, r, n) {
          if (!l_(e)) return e;
          t = N2(t, e);
          for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
              var c = q2(t[o]),
                  p = r;
              if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
              if (o != a) {
                  var g = s[c];
                  (p = n ? n(g, c, s) : void 0), p === void 0 && (p = l_(g) ? g : x2(t[o + 1]) ? [] : {});
              }
              C2(s, c, p), (s = s[c]);
          }
          return e;
      }
      f_.exports = L2;
  });
  var v_ = u((wK, p_) => {
      var P2 = ni(),
          D2 = d_(),
          M2 = Zr();
      function F2(e, t, r) {
          for (var n = -1, o = t.length, i = {}; ++n < o; ) {
              var a = t[n],
                  s = P2(e, a);
              r(s, a) && D2(i, M2(a, e), s);
          }
          return i;
      }
      p_.exports = F2;
  });
  var g_ = u((AK, h_) => {
      var G2 = Ea(),
          W2 = G2(Object.getPrototypeOf, Object);
      h_.exports = W2;
  });
  var __ = u((RK, E_) => {
      var U2 = Kn(),
          X2 = g_(),
          V2 = va(),
          k2 = pa(),
          B2 = Object.getOwnPropertySymbols,
          H2 = B2
              ? function (e) {
                    for (var t = []; e; ) U2(t, V2(e)), (e = X2(e));
                    return t;
                }
              : k2;
      E_.exports = H2;
  });
  var m_ = u((CK, y_) => {
      function j2(e) {
          var t = [];
          if (e != null) for (var r in Object(e)) t.push(r);
          return t;
      }
      y_.exports = j2;
  });
  var I_ = u((NK, T_) => {
      var K2 = vt(),
          z2 = Zn(),
          Y2 = m_(),
          Q2 = Object.prototype,
          $2 = Q2.hasOwnProperty;
      function Z2(e) {
          if (!K2(e)) return Y2(e);
          var t = z2(e),
              r = [];
          for (var n in e) (n == "constructor" && (t || !$2.call(e, n))) || r.push(n);
          return r;
      }
      T_.exports = Z2;
  });
  var b_ = u((xK, O_) => {
      var J2 = ga(),
          eG = I_(),
          tG = Xt();
      function rG(e) {
          return tG(e) ? J2(e, !0) : eG(e);
      }
      O_.exports = rG;
  });
  var w_ = u((qK, S_) => {
      var nG = da(),
          iG = __(),
          oG = b_();
      function aG(e) {
          return nG(e, oG, iG);
      }
      S_.exports = aG;
  });
  var R_ = u((LK, A_) => {
      var sG = Ca(),
          uG = Nt(),
          cG = v_(),
          lG = w_();
      function fG(e, t) {
          if (e == null) return {};
          var r = sG(lG(e), function (n) {
              return [n];
          });
          return (
              (t = uG(t)),
              cG(e, r, function (n, o) {
                  return t(n, o[0]);
              })
          );
      }
      A_.exports = fG;
  });
  var N_ = u((PK, C_) => {
      var dG = Nt(),
          pG = i_(),
          vG = R_();
      function hG(e, t) {
          return vG(e, pG(dG(t)));
      }
      C_.exports = hG;
  });
  var q_ = u((DK, x_) => {
      var gG = Jn(),
          EG = ei(),
          _G = jr(),
          yG = Le(),
          mG = Xt(),
          TG = zn(),
          IG = Zn(),
          OG = $n(),
          bG = "[object Map]",
          SG = "[object Set]",
          wG = Object.prototype,
          AG = wG.hasOwnProperty;
      function RG(e) {
          if (e == null) return !0;
          if (mG(e) && (yG(e) || typeof e == "string" || typeof e.splice == "function" || TG(e) || OG(e) || _G(e))) return !e.length;
          var t = EG(e);
          if (t == bG || t == SG) return !e.size;
          if (IG(e)) return !gG(e).length;
          for (var r in e) if (AG.call(e, r)) return !1;
          return !0;
      }
      x_.exports = RG;
  });
  var P_ = u((MK, L_) => {
      var CG = es(),
          NG = Xa(),
          xG = Nt();
      function qG(e, t) {
          var r = {};
          return (
              (t = xG(t, 3)),
              NG(e, function (n, o, i) {
                  CG(r, o, t(n, o, i));
              }),
              r
          );
      }
      L_.exports = qG;
  });
  var M_ = u((FK, D_) => {
      function LG(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; );
          return e;
      }
      D_.exports = LG;
  });
  var G_ = u((GK, F_) => {
      var PG = oi();
      function DG(e) {
          return typeof e == "function" ? e : PG;
      }
      F_.exports = DG;
  });
  var U_ = u((WK, W_) => {
      var MG = M_(),
          FG = Va(),
          GG = G_(),
          WG = Le();
      function UG(e, t) {
          var r = WG(e) ? MG : FG;
          return r(e, GG(t));
      }
      W_.exports = UG;
  });
  var V_ = u((UK, X_) => {
      var XG = nt(),
          VG = function () {
              return XG.Date.now();
          };
      X_.exports = VG;
  });
  var H_ = u((XK, B_) => {
      var kG = vt(),
          ts = V_(),
          k_ = ai(),
          BG = "Expected a function",
          HG = Math.max,
          jG = Math.min;
      function KG(e, t, r) {
          var n,
              o,
              i,
              a,
              s,
              c,
              p = 0,
              g = !1,
              h = !1,
              m = !0;
          if (typeof e != "function") throw new TypeError(BG);
          (t = k_(t) || 0), kG(r) && ((g = !!r.leading), (h = "maxWait" in r), (i = h ? HG(k_(r.maxWait) || 0, t) : i), (m = "trailing" in r ? !!r.trailing : m));
          function T(M) {
              var H = n,
                  Q = o;
              return (n = o = void 0), (p = M), (a = e.apply(Q, H)), a;
          }
          function R(M) {
              return (p = M), (s = setTimeout(N, t)), g ? T(M) : a;
          }
          function w(M) {
              var H = M - c,
                  Q = M - p,
                  Z = t - H;
              return h ? jG(Z, i - Q) : Z;
          }
          function F(M) {
              var H = M - c,
                  Q = M - p;
              return c === void 0 || H >= t || H < 0 || (h && Q >= i);
          }
          function N() {
              var M = ts();
              if (F(M)) return x(M);
              s = setTimeout(N, w(M));
          }
          function x(M) {
              return (s = void 0), m && n ? T(M) : ((n = o = void 0), a);
          }
          function S() {
              s !== void 0 && clearTimeout(s), (p = 0), (n = c = o = s = void 0);
          }
          function P() {
              return s === void 0 ? a : x(ts());
          }
          function L() {
              var M = ts(),
                  H = F(M);
              if (((n = arguments), (o = this), (c = M), H)) {
                  if (s === void 0) return R(c);
                  if (h) return clearTimeout(s), (s = setTimeout(N, t)), T(c);
              }
              return s === void 0 && (s = setTimeout(N, t)), a;
          }
          return (L.cancel = S), (L.flush = P), L;
      }
      B_.exports = KG;
  });
  var K_ = u((VK, j_) => {
      var zG = H_(),
          YG = vt(),
          QG = "Expected a function";
      function $G(e, t, r) {
          var n = !0,
              o = !0;
          if (typeof e != "function") throw new TypeError(QG);
          return YG(r) && ((n = "leading" in r ? !!r.leading : n), (o = "trailing" in r ? !!r.trailing : o)), zG(e, t, { leading: n, maxWait: t, trailing: o });
      }
      j_.exports = $G;
  });
  var Ii = u((fe) => {
      "use strict";
      var ZG = ft().default;
      Object.defineProperty(fe, "__esModule", { value: !0 });
      fe.viewportWidthChanged = fe.testFrameRendered = fe.stopRequested = fe.sessionStopped = fe.sessionStarted = fe.sessionInitialized = fe.rawDataImported = fe.previewRequested = fe.playbackRequested = fe.parameterChanged = fe.mediaQueriesDefined = fe.instanceStarted = fe.instanceRemoved = fe.instanceAdded = fe.eventStateChanged = fe.eventListenerAdded = fe.elementStateChanged = fe.clearRequested = fe.animationFrameChanged = fe.actionListPlaybackChanged = void 0;
      var z_ = ZG(Ur()),
          Y_ = Be(),
          JG = Kt(),
          {
              IX2_RAW_DATA_IMPORTED: eW,
              IX2_SESSION_INITIALIZED: tW,
              IX2_SESSION_STARTED: rW,
              IX2_SESSION_STOPPED: nW,
              IX2_PREVIEW_REQUESTED: iW,
              IX2_PLAYBACK_REQUESTED: oW,
              IX2_STOP_REQUESTED: aW,
              IX2_CLEAR_REQUESTED: sW,
              IX2_EVENT_LISTENER_ADDED: uW,
              IX2_TEST_FRAME_RENDERED: cW,
              IX2_EVENT_STATE_CHANGED: lW,
              IX2_ANIMATION_FRAME_CHANGED: fW,
              IX2_PARAMETER_CHANGED: dW,
              IX2_INSTANCE_ADDED: pW,
              IX2_INSTANCE_STARTED: vW,
              IX2_INSTANCE_REMOVED: hW,
              IX2_ELEMENT_STATE_CHANGED: gW,
              IX2_ACTION_LIST_PLAYBACK_CHANGED: EW,
              IX2_VIEWPORT_WIDTH_CHANGED: _W,
              IX2_MEDIA_QUERIES_DEFINED: yW,
          } = Y_.IX2EngineActionTypes,
          { reifyState: mW } = JG.IX2VanillaUtils,
          TW = (e) => ({ type: eW, payload: (0, z_.default)({}, mW(e)) });
      fe.rawDataImported = TW;
      var IW = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({ type: tW, payload: { hasBoundaryNodes: e, reducedMotion: t } });
      fe.sessionInitialized = IW;
      var OW = () => ({ type: rW });
      fe.sessionStarted = OW;
      var bW = () => ({ type: nW });
      fe.sessionStopped = bW;
      var SW = ({ rawData: e, defer: t }) => ({ type: iW, payload: { defer: t, rawData: e } });
      fe.previewRequested = SW;
      var wW = ({ actionTypeId: e = Y_.ActionTypeConsts.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: o, immediate: i, testManual: a, verbose: s, rawData: c }) => ({
          type: oW,
          payload: { actionTypeId: e, actionListId: t, actionItemId: r, testManual: a, eventId: n, allowEvents: o, immediate: i, verbose: s, rawData: c },
      });
      fe.playbackRequested = wW;
      var AW = (e) => ({ type: aW, payload: { actionListId: e } });
      fe.stopRequested = AW;
      var RW = () => ({ type: sW });
      fe.clearRequested = RW;
      var CW = (e, t) => ({ type: uW, payload: { target: e, listenerParams: t } });
      fe.eventListenerAdded = CW;
      var NW = (e = 1) => ({ type: cW, payload: { step: e } });
      fe.testFrameRendered = NW;
      var xW = (e, t) => ({ type: lW, payload: { stateKey: e, newState: t } });
      fe.eventStateChanged = xW;
      var qW = (e, t) => ({ type: fW, payload: { now: e, parameters: t } });
      fe.animationFrameChanged = qW;
      var LW = (e, t) => ({ type: dW, payload: { key: e, value: t } });
      fe.parameterChanged = LW;
      var PW = (e) => ({ type: pW, payload: (0, z_.default)({}, e) });
      fe.instanceAdded = PW;
      var DW = (e, t) => ({ type: vW, payload: { instanceId: e, time: t } });
      fe.instanceStarted = DW;
      var MW = (e) => ({ type: hW, payload: { instanceId: e } });
      fe.instanceRemoved = MW;
      var FW = (e, t, r, n) => ({ type: gW, payload: { elementId: e, actionTypeId: t, current: r, actionItem: n } });
      fe.elementStateChanged = FW;
      var GW = ({ actionListId: e, isPlaying: t }) => ({ type: EW, payload: { actionListId: e, isPlaying: t } });
      fe.actionListPlaybackChanged = GW;
      var WW = ({ width: e, mediaQueries: t }) => ({ type: _W, payload: { width: e, mediaQueries: t } });
      fe.viewportWidthChanged = WW;
      var UW = () => ({ type: yW });
      fe.mediaQueriesDefined = UW;
  });
  var Z_ = u((De) => {
      "use strict";
      Object.defineProperty(De, "__esModule", { value: !0 });
      De.elementContains = ZW;
      De.getChildElements = eU;
      De.getClosestElement = void 0;
      De.getProperty = KW;
      De.getQuerySelector = YW;
      De.getRefType = nU;
      De.getSiblingElements = tU;
      De.getStyle = jW;
      De.getValidDocument = QW;
      De.isSiblingNode = JW;
      De.matchSelector = zW;
      De.queryDocument = $W;
      De.setStyle = HW;
      var XW = Kt(),
          VW = Be(),
          { ELEMENT_MATCHES: rs } = XW.IX2BrowserSupport,
          { IX2_ID_DELIMITER: Q_, HTML_ELEMENT: kW, PLAIN_OBJECT: BW, WF_PAGE: $_ } = VW.IX2EngineConstants;
      function HW(e, t, r) {
          e.style[t] = r;
      }
      function jW(e, t) {
          return e.style[t];
      }
      function KW(e, t) {
          return e[t];
      }
      function zW(e) {
          return (t) => t[rs](e);
      }
      function YW({ id: e, selector: t }) {
          if (e) {
              let r = e;
              if (e.indexOf(Q_) !== -1) {
                  let n = e.split(Q_),
                      o = n[0];
                  if (((r = n[1]), o !== document.documentElement.getAttribute($_))) return null;
              }
              return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
          }
          return t;
      }
      function QW(e) {
          return e == null || e === document.documentElement.getAttribute($_) ? document : null;
      }
      function $W(e, t) {
          return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e));
      }
      function ZW(e, t) {
          return e.contains(t);
      }
      function JW(e, t) {
          return e !== t && e.parentNode === t.parentNode;
      }
      function eU(e) {
          let t = [];
          for (let r = 0, { length: n } = e || []; r < n; r++) {
              let { children: o } = e[r],
                  { length: i } = o;
              if (i) for (let a = 0; a < i; a++) t.push(o[a]);
          }
          return t;
      }
      function tU(e = []) {
          let t = [],
              r = [];
          for (let n = 0, { length: o } = e; n < o; n++) {
              let { parentNode: i } = e[n];
              if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1) continue;
              r.push(i);
              let a = i.firstElementChild;
              for (; a != null; ) e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
          }
          return t;
      }
      var rU = Element.prototype.closest
          ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
          : (e, t) => {
                if (!document.documentElement.contains(e)) return null;
                let r = e;
                do {
                    if (r[rs] && r[rs](t)) return r;
                    r = r.parentNode;
                } while (r != null);
                return null;
            };
      De.getClosestElement = rU;
      function nU(e) {
          return e != null && typeof e == "object" ? (e instanceof Element ? kW : BW) : null;
      }
  });
  var ns = u((HK, ey) => {
      var iU = vt(),
          J_ = Object.create,
          oU = (function () {
              function e() {}
              return function (t) {
                  if (!iU(t)) return {};
                  if (J_) return J_(t);
                  e.prototype = t;
                  var r = new e();
                  return (e.prototype = void 0), r;
              };
          })();
      ey.exports = oU;
  });
  var Oi = u((jK, ty) => {
      function aU() {}
      ty.exports = aU;
  });
  var Si = u((KK, ry) => {
      var sU = ns(),
          uU = Oi();
      function bi(e, t) {
          (this.__wrapped__ = e), (this.__actions__ = []), (this.__chain__ = !!t), (this.__index__ = 0), (this.__values__ = void 0);
      }
      bi.prototype = sU(uU.prototype);
      bi.prototype.constructor = bi;
      ry.exports = bi;
  });
  var ay = u((zK, oy) => {
      var ny = ur(),
          cU = jr(),
          lU = Le(),
          iy = ny ? ny.isConcatSpreadable : void 0;
      function fU(e) {
          return lU(e) || cU(e) || !!(iy && e && e[iy]);
      }
      oy.exports = fU;
  });
  var cy = u((YK, uy) => {
      var dU = Kn(),
          pU = ay();
      function sy(e, t, r, n, o) {
          var i = -1,
              a = e.length;
          for (r || (r = pU), o || (o = []); ++i < a; ) {
              var s = e[i];
              t > 0 && r(s) ? (t > 1 ? sy(s, t - 1, r, n, o) : dU(o, s)) : n || (o[o.length] = s);
          }
          return o;
      }
      uy.exports = sy;
  });
  var fy = u((QK, ly) => {
      var vU = cy();
      function hU(e) {
          var t = e == null ? 0 : e.length;
          return t ? vU(e, 1) : [];
      }
      ly.exports = hU;
  });
  var py = u(($K, dy) => {
      function gU(e, t, r) {
          switch (r.length) {
              case 0:
                  return e.call(t);
              case 1:
                  return e.call(t, r[0]);
              case 2:
                  return e.call(t, r[0], r[1]);
              case 3:
                  return e.call(t, r[0], r[1], r[2]);
          }
          return e.apply(t, r);
      }
      dy.exports = gU;
  });
  var gy = u((ZK, hy) => {
      var EU = py(),
          vy = Math.max;
      function _U(e, t, r) {
          return (
              (t = vy(t === void 0 ? e.length - 1 : t, 0)),
              function () {
                  for (var n = arguments, o = -1, i = vy(n.length - t, 0), a = Array(i); ++o < i; ) a[o] = n[t + o];
                  o = -1;
                  for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
                  return (s[t] = r(a)), EU(e, this, s);
              }
          );
      }
      hy.exports = _U;
  });
  var _y = u((JK, Ey) => {
      function yU(e) {
          return function () {
              return e;
          };
      }
      Ey.exports = yU;
  });
  var Ty = u((ez, my) => {
      var mU = _y(),
          yy = Ja(),
          TU = oi(),
          IU = yy
              ? function (e, t) {
                    return yy(e, "toString", { configurable: !0, enumerable: !1, value: mU(t), writable: !0 });
                }
              : TU;
      my.exports = IU;
  });
  var Oy = u((tz, Iy) => {
      var OU = 800,
          bU = 16,
          SU = Date.now;
      function wU(e) {
          var t = 0,
              r = 0;
          return function () {
              var n = SU(),
                  o = bU - (n - r);
              if (((r = n), o > 0)) {
                  if (++t >= OU) return arguments[0];
              } else t = 0;
              return e.apply(void 0, arguments);
          };
      }
      Iy.exports = wU;
  });
  var Sy = u((rz, by) => {
      var AU = Ty(),
          RU = Oy(),
          CU = RU(AU);
      by.exports = CU;
  });
  var Ay = u((nz, wy) => {
      var NU = fy(),
          xU = gy(),
          qU = Sy();
      function LU(e) {
          return qU(xU(e, void 0, NU), e + "");
      }
      wy.exports = LU;
  });
  var Ny = u((iz, Cy) => {
      var Ry = _a(),
          PU = Ry && new Ry();
      Cy.exports = PU;
  });
  var qy = u((oz, xy) => {
      function DU() {}
      xy.exports = DU;
  });
  var is = u((az, Py) => {
      var Ly = Ny(),
          MU = qy(),
          FU = Ly
              ? function (e) {
                    return Ly.get(e);
                }
              : MU;
      Py.exports = FU;
  });
  var My = u((sz, Dy) => {
      var GU = {};
      Dy.exports = GU;
  });
  var os = u((uz, Gy) => {
      var Fy = My(),
          WU = Object.prototype,
          UU = WU.hasOwnProperty;
      function XU(e) {
          for (var t = e.name + "", r = Fy[t], n = UU.call(Fy, t) ? r.length : 0; n--; ) {
              var o = r[n],
                  i = o.func;
              if (i == null || i == e) return o.name;
          }
          return t;
      }
      Gy.exports = XU;
  });
  var Ai = u((cz, Wy) => {
      var VU = ns(),
          kU = Oi(),
          BU = 4294967295;
      function wi(e) {
          (this.__wrapped__ = e), (this.__actions__ = []), (this.__dir__ = 1), (this.__filtered__ = !1), (this.__iteratees__ = []), (this.__takeCount__ = BU), (this.__views__ = []);
      }
      wi.prototype = VU(kU.prototype);
      wi.prototype.constructor = wi;
      Wy.exports = wi;
  });
  var Xy = u((lz, Uy) => {
      function HU(e, t) {
          var r = -1,
              n = e.length;
          for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
          return t;
      }
      Uy.exports = HU;
  });
  var ky = u((fz, Vy) => {
      var jU = Ai(),
          KU = Si(),
          zU = Xy();
      function YU(e) {
          if (e instanceof jU) return e.clone();
          var t = new KU(e.__wrapped__, e.__chain__);
          return (t.__actions__ = zU(e.__actions__)), (t.__index__ = e.__index__), (t.__values__ = e.__values__), t;
      }
      Vy.exports = YU;
  });
  var jy = u((dz, Hy) => {
      var QU = Ai(),
          By = Si(),
          $U = Oi(),
          ZU = Le(),
          JU = Ct(),
          eX = ky(),
          tX = Object.prototype,
          rX = tX.hasOwnProperty;
      function Ri(e) {
          if (JU(e) && !ZU(e) && !(e instanceof QU)) {
              if (e instanceof By) return e;
              if (rX.call(e, "__wrapped__")) return eX(e);
          }
          return new By(e);
      }
      Ri.prototype = $U.prototype;
      Ri.prototype.constructor = Ri;
      Hy.exports = Ri;
  });
  var zy = u((pz, Ky) => {
      var nX = Ai(),
          iX = is(),
          oX = os(),
          aX = jy();
      function sX(e) {
          var t = oX(e),
              r = aX[t];
          if (typeof r != "function" || !(t in nX.prototype)) return !1;
          if (e === r) return !0;
          var n = iX(r);
          return !!n && e === n[0];
      }
      Ky.exports = sX;
  });
  var Zy = u((vz, $y) => {
      var Yy = Si(),
          uX = Ay(),
          cX = is(),
          as = os(),
          lX = Le(),
          Qy = zy(),
          fX = "Expected a function",
          dX = 8,
          pX = 32,
          vX = 128,
          hX = 256;
      function gX(e) {
          return uX(function (t) {
              var r = t.length,
                  n = r,
                  o = Yy.prototype.thru;
              for (e && t.reverse(); n--; ) {
                  var i = t[n];
                  if (typeof i != "function") throw new TypeError(fX);
                  if (o && !a && as(i) == "wrapper") var a = new Yy([], !0);
              }
              for (n = a ? n : r; ++n < r; ) {
                  i = t[n];
                  var s = as(i),
                      c = s == "wrapper" ? cX(i) : void 0;
                  c && Qy(c[0]) && c[1] == (vX | dX | pX | hX) && !c[4].length && c[9] == 1 ? (a = a[as(c[0])].apply(a, c[3])) : (a = i.length == 1 && Qy(i) ? a[s]() : a.thru(i));
              }
              return function () {
                  var p = arguments,
                      g = p[0];
                  if (a && p.length == 1 && lX(g)) return a.plant(g).value();
                  for (var h = 0, m = r ? t[h].apply(this, p) : g; ++h < r; ) m = t[h].call(this, m);
                  return m;
              };
          });
      }
      $y.exports = gX;
  });
  var em = u((hz, Jy) => {
      var EX = Zy(),
          _X = EX();
      Jy.exports = _X;
  });
  var rm = u((gz, tm) => {
      function yX(e, t, r) {
          return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
      }
      tm.exports = yX;
  });
  var im = u((Ez, nm) => {
      var mX = rm(),
          ss = ai();
      function TX(e, t, r) {
          return r === void 0 && ((r = t), (t = void 0)), r !== void 0 && ((r = ss(r)), (r = r === r ? r : 0)), t !== void 0 && ((t = ss(t)), (t = t === t ? t : 0)), mX(ss(e), t, r);
      }
      nm.exports = TX;
  });
  var Im = u((Li) => {
      "use strict";
      var qi = ft().default;
      Object.defineProperty(Li, "__esModule", { value: !0 });
      Li.default = void 0;
      var ze = qi(Ur()),
          IX = qi(em()),
          OX = qi(ii()),
          bX = qi(im()),
          zt = Be(),
          us = ds(),
          Ci = Ii(),
          SX = Kt(),
          {
              MOUSE_CLICK: wX,
              MOUSE_SECOND_CLICK: AX,
              MOUSE_DOWN: RX,
              MOUSE_UP: CX,
              MOUSE_OVER: NX,
              MOUSE_OUT: xX,
              DROPDOWN_CLOSE: qX,
              DROPDOWN_OPEN: LX,
              SLIDER_ACTIVE: PX,
              SLIDER_INACTIVE: DX,
              TAB_ACTIVE: MX,
              TAB_INACTIVE: FX,
              NAVBAR_CLOSE: GX,
              NAVBAR_OPEN: WX,
              MOUSE_MOVE: UX,
              PAGE_SCROLL_DOWN: pm,
              SCROLL_INTO_VIEW: vm,
              SCROLL_OUT_OF_VIEW: XX,
              PAGE_SCROLL_UP: VX,
              SCROLLING_IN_VIEW: kX,
              PAGE_FINISH: hm,
              ECOMMERCE_CART_CLOSE: BX,
              ECOMMERCE_CART_OPEN: HX,
              PAGE_START: gm,
              PAGE_SCROLL: jX,
          } = zt.EventTypeConsts,
          cs = "COMPONENT_ACTIVE",
          Em = "COMPONENT_INACTIVE",
          { COLON_DELIMITER: om } = zt.IX2EngineConstants,
          { getNamespacedParameterId: am } = SX.IX2VanillaUtils,
          _m = (e) => (t) => (typeof t == "object" && e(t) ? !0 : t),
          ln = _m(({ element: e, nativeEvent: t }) => e === t.target),
          KX = _m(({ element: e, nativeEvent: t }) => e.contains(t.target)),
          _t = (0, IX.default)([ln, KX]),
          ym = (e, t) => {
              if (t) {
                  let { ixData: r } = e.getState(),
                      { events: n } = r,
                      o = n[t];
                  if (o && !YX[o.eventTypeId]) return o;
              }
              return null;
          },
          zX = ({ store: e, event: t }) => {
              let { action: r } = t,
                  { autoStopEventId: n } = r.config;
              return !!ym(e, n);
          },
          je = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
              let { action: i, id: a } = t,
                  { actionListId: s, autoStopEventId: c } = i.config,
                  p = ym(e, c);
              return (
                  p && (0, us.stopActionGroup)({ store: e, eventId: c, eventTarget: r, eventStateKey: c + om + n.split(om)[1], actionListId: (0, OX.default)(p, "action.config.actionListId") }),
                  (0, us.stopActionGroup)({ store: e, eventId: a, eventTarget: r, eventStateKey: n, actionListId: s }),
                  (0, us.startActionGroup)({ store: e, eventId: a, eventTarget: r, eventStateKey: n, actionListId: s }),
                  o
              );
          },
          it = (e, t) => (r, n) => (e(r, n) === !0 ? t(r, n) : n),
          fn = { handler: it(_t, je) },
          mm = (0, ze.default)({}, fn, { types: [cs, Em].join(" ") }),
          ls = [
              { target: window, types: "resize orientationchange", throttle: !0 },
              { target: document, types: "scroll wheel readystatechange IX2_PAGE_UPDATE", throttle: !0 },
          ],
          sm = "mouseover mouseout",
          fs = { types: ls },
          YX = { PAGE_START: gm, PAGE_FINISH: hm },
          cn = (() => {
              let e = window.pageXOffset !== void 0,
                  r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
              return () => ({
                  scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                  scrollTop: e ? window.pageYOffset : r.scrollTop,
                  stiffScrollTop: (0, bX.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                  scrollWidth: r.scrollWidth,
                  scrollHeight: r.scrollHeight,
                  clientWidth: r.clientWidth,
                  clientHeight: r.clientHeight,
                  innerWidth: window.innerWidth,
                  innerHeight: window.innerHeight,
              });
          })(),
          QX = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
          $X = ({ element: e, nativeEvent: t }) => {
              let { type: r, target: n, relatedTarget: o } = t,
                  i = e.contains(n);
              if (r === "mouseover" && i) return !0;
              let a = e.contains(o);
              return !!(r === "mouseout" && i && a);
          },
          ZX = (e) => {
              let {
                      element: t,
                      event: { config: r },
                  } = e,
                  { clientWidth: n, clientHeight: o } = cn(),
                  i = r.scrollOffsetValue,
                  c = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
              return QX(t.getBoundingClientRect(), { left: 0, top: c, right: n, bottom: o - c });
          },
          Tm = (e) => (t, r) => {
              let { type: n } = t.nativeEvent,
                  o = [cs, Em].indexOf(n) !== -1 ? n === cs : r.isActive,
                  i = (0, ze.default)({}, r, { isActive: o });
              return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
          },
          um = (e) => (t, r) => {
              let n = { elementHovered: $X(t) };
              return ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n)) || n;
          },
          JX = (e) => (t, r) => {
              let n = (0, ze.default)({}, r, { elementVisible: ZX(t) });
              return ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n)) || n;
          },
          cm = (e) => (t, r = {}) => {
              let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = cn(),
                  {
                      event: { config: a, eventTypeId: s },
                  } = t,
                  { scrollOffsetValue: c, scrollOffsetUnit: p } = a,
                  g = p === "PX",
                  h = o - i,
                  m = Number((n / h).toFixed(2));
              if (r && r.percentTop === m) return r;
              let T = (g ? c : (i * (c || 0)) / 100) / h,
                  R,
                  w,
                  F = 0;
              r && ((R = m > r.percentTop), (w = r.scrollingDown !== R), (F = w ? m : r.anchorTop));
              let N = s === pm ? m >= F + T : m <= F - T,
                  x = (0, ze.default)({}, r, { percentTop: m, inBounds: N, anchorTop: F, scrollingDown: R });
              return (r && N && (w || x.inBounds !== r.inBounds) && e(t, x)) || x;
          },
          eV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
          tV = (e) => (t, r) => {
              let n = { finished: document.readyState === "complete" };
              return n.finished && !(r && r.finshed) && e(t), n;
          },
          rV = (e) => (t, r) => {
              let n = { started: !0 };
              return r || e(t), n;
          },
          lm = (e) => (t, r = { clickCount: 0 }) => {
              let n = { clickCount: (r.clickCount % 2) + 1 };
              return (n.clickCount !== r.clickCount && e(t, n)) || n;
          },
          Ni = (e = !0) =>
              (0, ze.default)({}, mm, {
                  handler: it(
                      e ? _t : ln,
                      Tm((t, r) => (r.isActive ? fn.handler(t, r) : r))
                  ),
              }),
          xi = (e = !0) =>
              (0, ze.default)({}, mm, {
                  handler: it(
                      e ? _t : ln,
                      Tm((t, r) => (r.isActive ? r : fn.handler(t, r)))
                  ),
              }),
          fm = (0, ze.default)({}, fs, {
              handler: JX((e, t) => {
                  let { elementVisible: r } = t,
                      { event: n, store: o } = e,
                      { ixData: i } = o.getState(),
                      { events: a } = i;
                  return !a[n.action.config.autoStopEventId] && t.triggered ? t : (n.eventTypeId === vm) === r ? (je(e), (0, ze.default)({}, t, { triggered: !0 })) : t;
              }),
          }),
          dm = 0.05,
          nV = {
              [PX]: Ni(),
              [DX]: xi(),
              [LX]: Ni(),
              [qX]: xi(),
              [WX]: Ni(!1),
              [GX]: xi(!1),
              [MX]: Ni(),
              [FX]: xi(),
              [HX]: { types: "ecommerce-cart-open", handler: it(_t, je) },
              [BX]: { types: "ecommerce-cart-close", handler: it(_t, je) },
              [wX]: {
                  types: "click",
                  handler: it(
                      _t,
                      lm((e, { clickCount: t }) => {
                          zX(e) ? t === 1 && je(e) : je(e);
                      })
                  ),
              },
              [AX]: {
                  types: "click",
                  handler: it(
                      _t,
                      lm((e, { clickCount: t }) => {
                          t === 2 && je(e);
                      })
                  ),
              },
              [RX]: (0, ze.default)({}, fn, { types: "mousedown" }),
              [CX]: (0, ze.default)({}, fn, { types: "mouseup" }),
              [NX]: {
                  types: sm,
                  handler: it(
                      _t,
                      um((e, t) => {
                          t.elementHovered && je(e);
                      })
                  ),
              },
              [xX]: {
                  types: sm,
                  handler: it(
                      _t,
                      um((e, t) => {
                          t.elementHovered || je(e);
                      })
                  ),
              },
              [UX]: {
                  types: "mousemove mouseout scroll",
                  handler: ({ store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: o }, i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }) => {
                      let { basedOn: a, selectedAxis: s, continuousParameterGroupId: c, reverse: p, restingState: g = 0 } = r,
                          { clientX: h = i.clientX, clientY: m = i.clientY, pageX: T = i.pageX, pageY: R = i.pageY } = n,
                          w = s === "X_AXIS",
                          F = n.type === "mouseout",
                          N = g / 100,
                          x = c,
                          S = !1;
                      switch (a) {
                          case zt.EventBasedOn.VIEWPORT: {
                              N = w ? Math.min(h, window.innerWidth) / window.innerWidth : Math.min(m, window.innerHeight) / window.innerHeight;
                              break;
                          }
                          case zt.EventBasedOn.PAGE: {
                              let { scrollLeft: P, scrollTop: L, scrollWidth: M, scrollHeight: H } = cn();
                              N = w ? Math.min(P + T, M) / M : Math.min(L + R, H) / H;
                              break;
                          }
                          case zt.EventBasedOn.ELEMENT:
                          default: {
                              x = am(o, c);
                              let P = n.type.indexOf("mouse") === 0;
                              if (P && _t({ element: t, nativeEvent: n }) !== !0) break;
                              let L = t.getBoundingClientRect(),
                                  { left: M, top: H, width: Q, height: Z } = L;
                              if (!P && !eV({ left: h, top: m }, L)) break;
                              (S = !0), (N = w ? (h - M) / Q : (m - H) / Z);
                              break;
                          }
                      }
                      return (
                          F && (N > 1 - dm || N < dm) && (N = Math.round(N)),
                          (a !== zt.EventBasedOn.ELEMENT || S || S !== i.elementHovered) && ((N = p ? 1 - N : N), e.dispatch((0, Ci.parameterChanged)(x, N))),
                          { elementHovered: S, clientX: h, clientY: m, pageX: T, pageY: R }
                      );
                  },
              },
              [jX]: {
                  types: ls,
                  handler: ({ store: e, eventConfig: t }) => {
                      let { continuousParameterGroupId: r, reverse: n } = t,
                          { scrollTop: o, scrollHeight: i, clientHeight: a } = cn(),
                          s = o / (i - a);
                      (s = n ? 1 - s : s), e.dispatch((0, Ci.parameterChanged)(r, s));
                  },
              },
              [kX]: {
                  types: ls,
                  handler: ({ element: e, store: t, eventConfig: r, eventStateKey: n }, o = { scrollPercent: 0 }) => {
                      let { scrollLeft: i, scrollTop: a, scrollWidth: s, scrollHeight: c, clientHeight: p } = cn(),
                          { basedOn: g, selectedAxis: h, continuousParameterGroupId: m, startsEntering: T, startsExiting: R, addEndOffset: w, addStartOffset: F, addOffsetValue: N = 0, endOffsetValue: x = 0 } = r,
                          S = h === "X_AXIS";
                      if (g === zt.EventBasedOn.VIEWPORT) {
                          let P = S ? i / s : a / c;
                          return P !== o.scrollPercent && t.dispatch((0, Ci.parameterChanged)(m, P)), { scrollPercent: P };
                      } else {
                          let P = am(n, m),
                              L = e.getBoundingClientRect(),
                              M = (F ? N : 0) / 100,
                              H = (w ? x : 0) / 100;
                          (M = T ? M : 1 - M), (H = R ? H : 1 - H);
                          let Q = L.top + Math.min(L.height * M, p),
                              se = L.top + L.height * H - Q,
                              re = Math.min(p + se, c),
                              O = Math.min(Math.max(0, p - Q), re) / re;
                          return O !== o.scrollPercent && t.dispatch((0, Ci.parameterChanged)(P, O)), { scrollPercent: O };
                      }
                  },
              },
              [vm]: fm,
              [XX]: fm,
              [pm]: (0, ze.default)({}, fs, {
                  handler: cm((e, t) => {
                      t.scrollingDown && je(e);
                  }),
              }),
              [VX]: (0, ze.default)({}, fs, {
                  handler: cm((e, t) => {
                      t.scrollingDown || je(e);
                  }),
              }),
              [hm]: { types: "readystatechange IX2_PAGE_UPDATE", handler: it(ln, tV(je)) },
              [gm]: { types: "readystatechange IX2_PAGE_UPDATE", handler: it(ln, rV(je)) },
          };
      Li.default = nV;
  });
  var ds = u((Pt) => {
      "use strict";
      var at = ft().default,
          iV = Jt().default;
      Object.defineProperty(Pt, "__esModule", { value: !0 });
      Pt.observeRequests = LV;
      Pt.startActionGroup = ys;
      Pt.startEngine = Fi;
      Pt.stopActionGroup = _s;
      Pt.stopAllActionGroups = xm;
      Pt.stopEngine = Gi;
      var oV = at(Ur()),
          aV = at(FE()),
          sV = at(Pa()),
          Lt = at(ii()),
          uV = at(r_()),
          cV = at(N_()),
          lV = at(q_()),
          fV = at(P_()),
          dn = at(U_()),
          dV = at(K_()),
          ot = Be(),
          Sm = Kt(),
          Se = Ii(),
          Ce = iV(Z_()),
          pV = at(Im()),
          vV = ["store", "computedStyle"],
          hV = Object.keys(ot.QuickEffectIds),
          ps = (e) => hV.includes(e),
          { COLON_DELIMITER: vs, BOUNDARY_SELECTOR: Pi, HTML_ELEMENT: wm, RENDER_GENERAL: gV, W_MOD_IX: Om } = ot.IX2EngineConstants,
          {
              getAffectedElements: Di,
              getElementId: EV,
              getDestinationValues: hs,
              observeStore: Yt,
              getInstanceId: _V,
              renderHTMLElement: yV,
              clearAllStyles: Am,
              getMaxDurationItemIndex: mV,
              getComputedStyle: TV,
              getInstanceOrigin: IV,
              reduceListToGroup: OV,
              shouldNamespaceEventParameter: bV,
              getNamespacedParameterId: SV,
              shouldAllowMediaQuery: Mi,
              cleanupHTMLElement: wV,
              stringifyTarget: AV,
              mediaQueriesEqual: RV,
              shallowEqual: CV,
          } = Sm.IX2VanillaUtils,
          { isPluginType: gs, createPluginInstance: Es, getPluginDuration: NV } = Sm.IX2VanillaPlugins,
          bm = navigator.userAgent,
          xV = bm.match(/iPad/i) || bm.match(/iPhone/),
          qV = 12;
      function LV(e) {
          Yt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: MV }),
              Yt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: FV }),
              Yt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: GV }),
              Yt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: WV });
      }
      function PV(e) {
          Yt({
              store: e,
              select: ({ ixSession: t }) => t.mediaQueryKey,
              onChange: () => {
                  Gi(e), Am({ store: e, elementApi: Ce }), Fi({ store: e, allowEvents: !0 }), Rm();
              },
          });
      }
      function DV(e, t) {
          let r = Yt({
              store: e,
              select: ({ ixSession: n }) => n.tick,
              onChange: (n) => {
                  t(n), r();
              },
          });
      }
      function MV({ rawData: e, defer: t }, r) {
          let n = () => {
              Fi({ store: r, rawData: e, allowEvents: !0 }), Rm();
          };
          t ? setTimeout(n, 0) : n();
      }
      function Rm() {
          document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function FV(e, t) {
          let { actionTypeId: r, actionListId: n, actionItemId: o, eventId: i, allowEvents: a, immediate: s, testManual: c, verbose: p = !0 } = e,
              { rawData: g } = e;
          if (n && o && g && s) {
              let h = g.actionLists[n];
              h && (g = OV({ actionList: h, actionItemId: o, rawData: g }));
          }
          if ((Fi({ store: t, rawData: g, allowEvents: a, testManual: c }), (n && r === ot.ActionTypeConsts.GENERAL_START_ACTION) || ps(r))) {
              _s({ store: t, actionListId: n }), Nm({ store: t, actionListId: n, eventId: i });
              let h = ys({ store: t, eventId: i, actionListId: n, immediate: s, verbose: p });
              p && h && t.dispatch((0, Se.actionListPlaybackChanged)({ actionListId: n, isPlaying: !s }));
          }
      }
      function GV({ actionListId: e }, t) {
          e ? _s({ store: t, actionListId: e }) : xm({ store: t }), Gi(t);
      }
      function WV(e, t) {
          Gi(t), Am({ store: t, elementApi: Ce });
      }
      function Fi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
          let { ixSession: o } = e.getState();
          t && e.dispatch((0, Se.rawDataImported)(t)),
              o.active ||
                  (e.dispatch((0, Se.sessionInitialized)({ hasBoundaryNodes: !!document.querySelector(Pi), reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches })),
                  r && (HV(e), UV(), e.getState().ixSession.hasDefinedMediaQueries && PV(e)),
                  e.dispatch((0, Se.sessionStarted)()),
                  XV(e, n));
      }
      function UV() {
          let { documentElement: e } = document;
          e.className.indexOf(Om) === -1 && (e.className += ` ${Om}`);
      }
      function XV(e, t) {
          let r = (n) => {
              let { ixSession: o, ixParameters: i } = e.getState();
              o.active && (e.dispatch((0, Se.animationFrameChanged)(n, i)), t ? DV(e, r) : requestAnimationFrame(r));
          };
          r(window.performance.now());
      }
      function Gi(e) {
          let { ixSession: t } = e.getState();
          if (t.active) {
              let { eventListeners: r } = t;
              r.forEach(VV), e.dispatch((0, Se.sessionStopped)());
          }
      }
      function VV({ target: e, listenerParams: t }) {
          e.removeEventListener.apply(e, t);
      }
      function kV({ store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: o, actionListId: i, parameterGroup: a, smoothing: s, restingValue: c }) {
          let { ixData: p, ixSession: g } = e.getState(),
              { events: h } = p,
              m = h[n],
              { eventTypeId: T } = m,
              R = {},
              w = {},
              F = [],
              { continuousActionGroups: N } = a,
              { id: x } = a;
          bV(T, o) && (x = SV(t, x));
          let S = g.hasBoundaryNodes && r ? Ce.getClosestElement(r, Pi) : null;
          N.forEach((P) => {
              let { keyframe: L, actionItems: M } = P;
              M.forEach((H) => {
                  let { actionTypeId: Q } = H,
                      { target: Z } = H.config;
                  if (!Z) return;
                  let se = Z.boundaryMode ? S : null,
                      re = AV(Z) + vs + Q;
                  if (((w[re] = BV(w[re], L, H)), !R[re])) {
                      R[re] = !0;
                      let { config: W } = H;
                      Di({ config: W, event: m, eventTarget: r, elementRoot: se, elementApi: Ce }).forEach((O) => {
                          F.push({ element: O, key: re });
                      });
                  }
              });
          }),
              F.forEach(({ element: P, key: L }) => {
                  let M = w[L],
                      H = (0, Lt.default)(M, "[0].actionItems[0]", {}),
                      { actionTypeId: Q } = H,
                      Z = gs(Q) ? Es(Q)(P, H) : null,
                      se = hs({ element: P, actionItem: H, elementApi: Ce }, Z);
                  ms({ store: e, element: P, eventId: n, actionListId: i, actionItem: H, destination: se, continuous: !0, parameterId: x, actionGroups: M, smoothing: s, restingValue: c, pluginInstance: Z });
              });
      }
      function BV(e = [], t, r) {
          let n = [...e],
              o;
          return n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)), o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })), n[o].actionItems.push(r), n;
      }
      function HV(e) {
          let { ixData: t } = e.getState(),
              { eventTypeMap: r } = t;
          Cm(e),
              (0, dn.default)(r, (o, i) => {
                  let a = pV.default[i];
                  if (!a) {
                      console.warn(`IX2 event type not configured: ${i}`);
                      return;
                  }
                  $V({ logic: a, store: e, events: o });
              });
          let { ixSession: n } = e.getState();
          n.eventListeners.length && KV(e);
      }
      var jV = ["resize", "orientationchange"];
      function KV(e) {
          let t = () => {
              Cm(e);
          };
          jV.forEach((r) => {
              window.addEventListener(r, t), e.dispatch((0, Se.eventListenerAdded)(window, [r, t]));
          }),
              t();
      }
      function Cm(e) {
          let { ixSession: t, ixData: r } = e.getState(),
              n = window.innerWidth;
          if (n !== t.viewportWidth) {
              let { mediaQueries: o } = r;
              e.dispatch((0, Se.viewportWidthChanged)({ width: n, mediaQueries: o }));
          }
      }
      var zV = (e, t) => (0, cV.default)((0, fV.default)(e, t), lV.default),
          YV = (e, t) => {
              (0, dn.default)(e, (r, n) => {
                  r.forEach((o, i) => {
                      let a = n + vs + i;
                      t(o, n, a);
                  });
              });
          },
          QV = (e) => {
              let t = { target: e.target, targets: e.targets };
              return Di({ config: t, elementApi: Ce });
          };
      function $V({ logic: e, store: t, events: r }) {
          ZV(r);
          let { types: n, handler: o } = e,
              { ixData: i } = t.getState(),
              { actionLists: a } = i,
              s = zV(r, QV);
          if (!(0, uV.default)(s)) return;
          (0, dn.default)(s, (h, m) => {
              let T = r[m],
                  { action: R, id: w, mediaQueries: F = i.mediaQueryKeys } = T,
                  { actionListId: N } = R.config;
              RV(F, i.mediaQueryKeys) || t.dispatch((0, Se.mediaQueriesDefined)()),
                  R.actionTypeId === ot.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                      (Array.isArray(T.config) ? T.config : [T.config]).forEach((S) => {
                          let { continuousParameterGroupId: P } = S,
                              L = (0, Lt.default)(a, `${N}.continuousParameterGroups`, []),
                              M = (0, sV.default)(L, ({ id: Z }) => Z === P),
                              H = (S.smoothing || 0) / 100,
                              Q = (S.restingState || 0) / 100;
                          M &&
                              h.forEach((Z, se) => {
                                  let re = w + vs + se;
                                  kV({ store: t, eventStateKey: re, eventTarget: Z, eventId: w, eventConfig: S, actionListId: N, parameterGroup: M, smoothing: H, restingValue: Q });
                              });
                      }),
                  (R.actionTypeId === ot.ActionTypeConsts.GENERAL_START_ACTION || ps(R.actionTypeId)) && Nm({ store: t, actionListId: N, eventId: w });
          });
          let c = (h) => {
                  let { ixSession: m } = t.getState();
                  YV(s, (T, R, w) => {
                      let F = r[R],
                          N = m.eventState[w],
                          { action: x, mediaQueries: S = i.mediaQueryKeys } = F;
                      if (!Mi(S, m.mediaQueryKey)) return;
                      let P = (L = {}) => {
                          let M = o({ store: t, element: T, event: F, eventConfig: L, nativeEvent: h, eventStateKey: w }, N);
                          CV(M, N) || t.dispatch((0, Se.eventStateChanged)(w, M));
                      };
                      x.actionTypeId === ot.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(F.config) ? F.config : [F.config]).forEach(P) : P();
                  });
              },
              p = (0, dV.default)(c, qV),
              g = ({ target: h = document, types: m, throttle: T }) => {
                  m.split(" ")
                      .filter(Boolean)
                      .forEach((R) => {
                          let w = T ? p : c;
                          h.addEventListener(R, w), t.dispatch((0, Se.eventListenerAdded)(h, [R, w]));
                      });
              };
          Array.isArray(n) ? n.forEach(g) : typeof n == "string" && g(e);
      }
      function ZV(e) {
          if (!xV) return;
          let t = {},
              r = "";
          for (let n in e) {
              let { eventTypeId: o, target: i } = e[n],
                  a = Ce.getQuerySelector(i);
              t[a] || ((o === ot.EventTypeConsts.MOUSE_CLICK || o === ot.EventTypeConsts.MOUSE_SECOND_CLICK) && ((t[a] = !0), (r += a + "{cursor: pointer;touch-action: manipulation;}")));
          }
          if (r) {
              let n = document.createElement("style");
              (n.textContent = r), document.body.appendChild(n);
          }
      }
      function Nm({ store: e, actionListId: t, eventId: r }) {
          let { ixData: n, ixSession: o } = e.getState(),
              { actionLists: i, events: a } = n,
              s = a[r],
              c = i[t];
          if (c && c.useFirstGroupAsInitialState) {
              let p = (0, Lt.default)(c, "actionItemGroups[0].actionItems", []),
                  g = (0, Lt.default)(s, "mediaQueries", n.mediaQueryKeys);
              if (!Mi(g, o.mediaQueryKey)) return;
              p.forEach((h) => {
                  var m;
                  let { config: T, actionTypeId: R } = h,
                      w = (T == null || (m = T.target) === null || m === void 0 ? void 0 : m.useEventTarget) === !0 ? { target: s.target, targets: s.targets } : T,
                      F = Di({ config: w, event: s, elementApi: Ce }),
                      N = gs(R);
                  F.forEach((x) => {
                      let S = N ? Es(R)(x, h) : null;
                      ms({ destination: hs({ element: x, actionItem: h, elementApi: Ce }, S), immediate: !0, store: e, element: x, eventId: r, actionItem: h, actionListId: t, pluginInstance: S });
                  });
              });
          }
      }
      function xm({ store: e }) {
          let { ixInstances: t } = e.getState();
          (0, dn.default)(t, (r) => {
              if (!r.continuous) {
                  let { actionListId: n, verbose: o } = r;
                  Ts(r, e), o && e.dispatch((0, Se.actionListPlaybackChanged)({ actionListId: n, isPlaying: !1 }));
              }
          });
      }
      function _s({ store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o }) {
          let { ixInstances: i, ixSession: a } = e.getState(),
              s = a.hasBoundaryNodes && r ? Ce.getClosestElement(r, Pi) : null;
          (0, dn.default)(i, (c) => {
              let p = (0, Lt.default)(c, "actionItem.config.target.boundaryMode"),
                  g = n ? c.eventStateKey === n : !0;
              if (c.actionListId === o && c.eventId === t && g) {
                  if (s && p && !Ce.elementContains(s, c.element)) return;
                  Ts(c, e), c.verbose && e.dispatch((0, Se.actionListPlaybackChanged)({ actionListId: o, isPlaying: !1 }));
              }
          });
      }
      function ys({ store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o, groupIndex: i = 0, immediate: a, verbose: s }) {
          var c;
          let { ixData: p, ixSession: g } = e.getState(),
              { events: h } = p,
              m = h[t] || {},
              { mediaQueries: T = p.mediaQueryKeys } = m,
              R = (0, Lt.default)(p, `actionLists.${o}`, {}),
              { actionItemGroups: w, useFirstGroupAsInitialState: F } = R;
          if (!w || !w.length) return !1;
          i >= w.length && (0, Lt.default)(m, "config.loop") && (i = 0), i === 0 && F && i++;
          let x = (i === 0 || (i === 1 && F)) && ps((c = m.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? m.config.delay : void 0,
              S = (0, Lt.default)(w, [i, "actionItems"], []);
          if (!S.length || !Mi(T, g.mediaQueryKey)) return !1;
          let P = g.hasBoundaryNodes && r ? Ce.getClosestElement(r, Pi) : null,
              L = mV(S),
              M = !1;
          return (
              S.forEach((H, Q) => {
                  let { config: Z, actionTypeId: se } = H,
                      re = gs(se),
                      { target: W } = Z;
                  if (!W) return;
                  let O = W.boundaryMode ? P : null;
                  Di({ config: Z, event: m, eventTarget: r, elementRoot: O, elementApi: Ce }).forEach((V, j) => {
                      let ee = re ? Es(se)(V, H) : null,
                          ne = re ? NV(se)(V, H) : null;
                      M = !0;
                      let X = L === Q && j === 0,
                          Y = TV({ element: V, actionItem: H }),
                          d = hs({ element: V, actionItem: H, elementApi: Ce }, ee);
                      ms({
                          store: e,
                          element: V,
                          actionItem: H,
                          eventId: t,
                          eventTarget: r,
                          eventStateKey: n,
                          actionListId: o,
                          groupIndex: i,
                          isCarrier: X,
                          computedStyle: Y,
                          destination: d,
                          immediate: a,
                          verbose: s,
                          pluginInstance: ee,
                          pluginDuration: ne,
                          instanceDelay: x,
                      });
                  });
              }),
              M
          );
      }
      function ms(e) {
          var t;
          let { store: r, computedStyle: n } = e,
              o = (0, aV.default)(e, vV),
              { element: i, actionItem: a, immediate: s, pluginInstance: c, continuous: p, restingValue: g, eventId: h } = o,
              m = !p,
              T = _V(),
              { ixElements: R, ixSession: w, ixData: F } = r.getState(),
              N = EV(R, i),
              { refState: x } = R[N] || {},
              S = Ce.getRefType(i),
              P = w.reducedMotion && ot.ReducedMotionTypes[a.actionTypeId],
              L;
          if (P && p)
              switch ((t = F.events[h]) === null || t === void 0 ? void 0 : t.eventTypeId) {
                  case ot.EventTypeConsts.MOUSE_MOVE:
                  case ot.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                      L = g;
                      break;
                  default:
                      L = 0.5;
                      break;
              }
          let M = IV(i, x, n, a, Ce, c);
          if ((r.dispatch((0, Se.instanceAdded)((0, oV.default)({ instanceId: T, elementId: N, origin: M, refType: S, skipMotion: P, skipToValue: L }, o))), qm(document.body, "ix2-animation-started", T), s)) {
              JV(r, T);
              return;
          }
          Yt({ store: r, select: ({ ixInstances: H }) => H[T], onChange: Lm }), m && r.dispatch((0, Se.instanceStarted)(T, w.tick));
      }
      function Ts(e, t) {
          qm(document.body, "ix2-animation-stopping", { instanceId: e.id, state: t.getState() });
          let { elementId: r, actionItem: n } = e,
              { ixElements: o } = t.getState(),
              { ref: i, refType: a } = o[r] || {};
          a === wm && wV(i, n, Ce), t.dispatch((0, Se.instanceRemoved)(e.id));
      }
      function qm(e, t, r) {
          let n = document.createEvent("CustomEvent");
          n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
      }
      function JV(e, t) {
          let { ixParameters: r } = e.getState();
          e.dispatch((0, Se.instanceStarted)(t, 0)), e.dispatch((0, Se.animationFrameChanged)(performance.now(), r));
          let { ixInstances: n } = e.getState();
          Lm(n[t], e);
      }
      function Lm(e, t) {
          let {
                  active: r,
                  continuous: n,
                  complete: o,
                  elementId: i,
                  actionItem: a,
                  actionTypeId: s,
                  renderType: c,
                  current: p,
                  groupIndex: g,
                  eventId: h,
                  eventTarget: m,
                  eventStateKey: T,
                  actionListId: R,
                  isCarrier: w,
                  styleProp: F,
                  verbose: N,
                  pluginInstance: x,
              } = e,
              { ixData: S, ixSession: P } = t.getState(),
              { events: L } = S,
              M = L[h] || {},
              { mediaQueries: H = S.mediaQueryKeys } = M;
          if (Mi(H, P.mediaQueryKey) && (n || r || o)) {
              if (p || (c === gV && o)) {
                  t.dispatch((0, Se.elementStateChanged)(i, s, p, a));
                  let { ixElements: Q } = t.getState(),
                      { ref: Z, refType: se, refState: re } = Q[i] || {},
                      W = re && re[s];
                  switch (se) {
                      case wm: {
                          yV(Z, re, W, h, a, F, Ce, c, x);
                          break;
                      }
                  }
              }
              if (o) {
                  if (w) {
                      let Q = ys({ store: t, eventId: h, eventTarget: m, eventStateKey: T, actionListId: R, groupIndex: g + 1, verbose: N });
                      N && !Q && t.dispatch((0, Se.actionListPlaybackChanged)({ actionListId: R, isPlaying: !1 }));
                  }
                  Ts(e, t);
              }
          }
      }
  });
  var Dm = u((It) => {
      "use strict";
      var ek = Jt().default,
          tk = ft().default;
      Object.defineProperty(It, "__esModule", { value: !0 });
      It.actions = void 0;
      It.destroy = Pm;
      It.init = ak;
      It.setEnv = ok;
      It.store = void 0;
      ef();
      var rk = $o(),
          nk = tk(ME()),
          Is = ds(),
          ik = ek(Ii());
      It.actions = ik;
      var Wi = (0, rk.createStore)(nk.default);
      It.store = Wi;
      function ok(e) {
          e() && (0, Is.observeRequests)(Wi);
      }
      function ak(e) {
          Pm(), (0, Is.startEngine)({ store: Wi, rawData: e, allowEvents: !0 });
      }
      function Pm() {
          (0, Is.stopEngine)(Wi);
      }
  });
  var Wm = u((Tz, Gm) => {
      var Mm = Ge(),
          Fm = Dm();
      Fm.setEnv(Mm.env);
      Mm.define(
          "ix2",
          (Gm.exports = function () {
              return Fm;
          })
      );
  });
  var Um = u((Os) => {
      "use strict";
      Object.defineProperty(Os, "__esModule", { value: !0 });
      Os.default = sk;
      function sk(e, t, r, n, o, i, a, s, c, p, g, h, m) {
          return function (T) {
              e(T);
              var R = T.form,
                  w = {
                      name: R.attr("data-name") || R.attr("name") || "Untitled Form",
                      source: t.href,
                      test: r.env(),
                      fields: {},
                      fileUploads: {},
                      dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(R.html()),
                      trackingCookies: n(),
                  };
              let F = R.attr("data-wf-flow");
              F && (w.wfFlow = F), o(T);
              var N = i(R, w.fields);
              if (N) return a(N);
              if (((w.fileUploads = s(R)), c(T), !p)) {
                  g(T);
                  return;
              }
              h.ajax({ url: m, type: "POST", data: w, dataType: "json", crossDomain: !0 })
                  .done(function (x) {
                      x && x.code === 200 && (T.success = !0), g(T);
                  })
                  .fail(function () {
                      g(T);
                  });
          };
      }
  });
  var Vm = u((Oz, Xm) => {
      var Ui = Ge();
      Ui.define(
          "forms",
          (Xm.exports = function (e, t) {
              var r = {},
                  n = e(document),
                  o,
                  i = window.location,
                  a = window.XDomainRequest && !window.atob,
                  s = ".w-form",
                  c,
                  p = /e(-)?mail/i,
                  g = /^\S+@\S+$/,
                  h = window.alert,
                  m = Ui.env(),
                  T,
                  R,
                  w,
                  F = /list-manage[1-9]?.com/i;
              
              r.ready = r.design = r.preview = function () {
                  x(), !m && !T && P();
              };
              function x() {
                  (c = e("html").attr("data-wf-site")),
                      (R = "https://webflow.com/api/v1/form/" + c),
                      a && R.indexOf("https://webflow.com") >= 0 && (R = R.replace("https://webflow.com", "https://formdata.webflow.com")),
                      (w = `${R}/signFile`),
                      (o = e(s + " form")),
                      o.length && o.each(S);
              }
              function S(X, Y) {
                  var d = e(Y),
                      E = e.data(Y, s);
                  E || (E = e.data(Y, s, { form: d })), L(E);
                  var _ = d.closest("div.w-form");
                  (E.done = _.find("> .w-form-done")),
                      (E.fail = _.find("> .w-form-fail")),
                      (E.fileUploads = _.find(".w-file-upload")),
                      E.fileUploads.each(function (k) {
                          j(k, E);
                      });
                  var l = E.form.attr("aria-label") || E.form.attr("data-name") || "Form";
                  E.done.attr("aria-label") || E.form.attr("aria-label", l),
                      E.done.attr("tabindex", "-1"),
                      E.done.attr("role", "region"),
                      E.done.attr("aria-label") || E.done.attr("aria-label", l + " success"),
                      E.fail.attr("tabindex", "-1"),
                      E.fail.attr("role", "region"),
                      E.fail.attr("aria-label") || E.fail.attr("aria-label", l + " failure");
                  var G = (E.action = d.attr("action"));
                  if (((E.handler = null), (E.redirect = d.attr("data-redirect")), F.test(G))) {
                      E.handler = O;
                      return;
                  }
                  if (!G) {
                      if (c) {
                          E.handler = (() => {
                              let k = Um().default;
                              return k(L, i, Ui, se, V, H, h, Q, M, c, U, e, R);
                          })();
                          return;
                      }
                      N();
                  }
              }
              function P() {
                  (T = !0),
                      n.on("submit", s + " form", function (k) {
                          var A = e.data(this, s);
                          A.handler && ((A.evt = k), A.handler(A));
                      });
                  let X = ".w-checkbox-input",
                      Y = ".w-radio-input",
                      d = "w--redirected-checked",
                      E = "w--redirected-focus",
                      _ = "w--redirected-focus-visible",
                      l = ":focus-visible, [data-wf-focus-visible]",
                      G = [
                          ["checkbox", X],
                          ["radio", Y],
                      ];
                  n.on("change", s + ' form input[type="checkbox"]:not(' + X + ")", (k) => {
                      e(k.target).siblings(X).toggleClass(d);
                  }),
                      n.on("change", s + ' form input[type="radio"]', (k) => {
                          e(`input[name="${k.target.name}"]:not(${X})`).map((oe, he) => e(he).siblings(Y).removeClass(d));
                          let A = e(k.target);
                          A.hasClass("w-radio-input") || A.siblings(Y).addClass(d);
                      }),
                      G.forEach(([k, A]) => {
                          n.on("focus", s + ` form input[type="${k}"]:not(` + A + ")", (oe) => {
                              e(oe.target).siblings(A).addClass(E), e(oe.target).filter(l).siblings(A).addClass(_);
                          }),
                              n.on("blur", s + ` form input[type="${k}"]:not(` + A + ")", (oe) => {
                                  e(oe.target).siblings(A).removeClass(`${E} ${_}`);
                              });
                      });
              }
              function L(X) {
                  var Y = (X.btn = X.form.find(':input[type="submit"]'));
                  (X.wait = X.btn.attr("data-wait") || null), (X.success = !1), Y.prop("disabled", !1), X.label && Y.val(X.label);
              }
              function M(X) {
                  var Y = X.btn,
                      d = X.wait;
                  Y.prop("disabled", !0), d && ((X.label = Y.val()), Y.val(d));
              }
              function H(X, Y) {
                  var d = null;
                  return (
                      (Y = Y || {}),
                      X.find(':input:not([type="submit"]):not([type="file"])').each(function (E, _) {
                          var l = e(_),
                              G = l.attr("type"),
                              k = l.attr("data-name") || l.attr("name") || "Field " + (E + 1),
                              A = l.val();
                          if (G === "checkbox") A = l.is(":checked");
                          else if (G === "radio") {
                              if (Y[k] === null || typeof Y[k] == "string") return;
                              A = X.find('input[name="' + l.attr("name") + '"]:checked').val() || null;
                          }
                          typeof A == "string" && (A = e.trim(A)), (Y[k] = A), (d = d || re(l, G, k, A));
                      }),
                      d
                  );
              }
              function Q(X) {
                  var Y = {};
                  return (
                      X.find(':input[type="file"]').each(function (d, E) {
                          var _ = e(E),
                              l = _.attr("data-name") || _.attr("name") || "File " + (d + 1),
                              G = _.attr("data-value");
                          typeof G == "string" && (G = e.trim(G)), (Y[l] = G);
                      }),
                      Y
                  );
              }
              let Z = { _mkto_trk: "marketo" };
              function se() {
                  return document.cookie.split("; ").reduce(function (Y, d) {
                      let E = d.split("="),
                          _ = E[0];
                      if (_ in Z) {
                          let l = Z[_],
                              G = E.slice(1).join("=");
                          Y[l] = G;
                      }
                      return Y;
                  }, {});
              }
              function re(X, Y, d, E) {
                  var _ = null;
                  return (
                      Y === "password"
                          ? (_ = "Passwords cannot be submitted.")
                          : X.attr("required")
                          ? E
                              ? p.test(X.attr("type")) && (g.test(E) || (_ = "Please enter a valid email address for: " + d))
                              : (_ = "Please fill out the required field: " + d)
                          : d === "g-recaptcha-response" && !E && (_ = "Please confirm you\u2019re not a robot."),
                      _
                  );
              }
              function W(X) {
                  V(X), U(X);
              }
              function O(X) {
                  L(X);
                  var Y = X.form,
                      d = {};
                  if (/^https/.test(i.href) && !/^https/.test(X.action)) {
                      Y.attr("method", "post");
                      return;
                  }
                  V(X);
                  var E = H(Y, d);
                  if (E) return h(E);
                  M(X);
                  var _;
                  t.each(d, function (A, oe) {
                      p.test(oe) && (d.EMAIL = A), /^((full[ _-]?)?name)$/i.test(oe) && (_ = A), /^(first[ _-]?name)$/i.test(oe) && (d.FNAME = A), /^(last[ _-]?name)$/i.test(oe) && (d.LNAME = A);
                  }),
                      _ && !d.FNAME && ((_ = _.split(" ")), (d.FNAME = _[0]), (d.LNAME = d.LNAME || _[1]));
                  var l = X.action.replace("/post?", "/post-json?") + "&c=?",
                      G = l.indexOf("u=") + 2;
                  G = l.substring(G, l.indexOf("&", G));
                  var k = l.indexOf("id=") + 3;
                  (k = l.substring(k, l.indexOf("&", k))),
                      (d["b_" + G + "_" + k] = ""),
                      e
                          .ajax({ url: l, data: d, dataType: "jsonp" })
                          .done(function (A) {
                              (X.success = A.result === "success" || /already/.test(A.msg)), X.success || console.info("MailChimp error: " + A.msg), U(X);
                          })
                          .fail(function () {
                              U(X);
                          });
              }
              function U(X) {
                  var Y = X.form,
                      d = X.redirect,
                      E = X.success;
                  if (E && d) {
                      Ui.location(d);
                      return;
                  }
                  X.done.toggle(E), X.fail.toggle(!E), E ? X.done.focus() : X.fail.focus(), Y.toggle(!E), L(X);
              }
              function V(X) {
                  X.evt && X.evt.preventDefault(), (X.evt = null);
              }
              function j(X, Y) {
                  if (!Y.fileUploads || !Y.fileUploads[X]) return;
                  var d,
                      E = e(Y.fileUploads[X]),
                      _ = E.find("> .w-file-upload-default"),
                      l = E.find("> .w-file-upload-uploading"),
                      G = E.find("> .w-file-upload-success"),
                      k = E.find("> .w-file-upload-error"),
                      A = _.find(".w-file-upload-input"),
                      oe = _.find(".w-file-upload-label"),
                      he = oe.children(),
                      ae = k.find(".w-file-upload-error-msg"),
                      v = G.find(".w-file-upload-file"),
                      B = G.find(".w-file-remove-link"),
                      J = v.find(".w-file-upload-file-name"),
                      K = ae.attr("data-w-size-error"),
                      ge = ae.attr("data-w-type-error"),
                      Ve = ae.attr("data-w-generic-error");
                  if (
                      (m ||
                          oe.on("click keydown", function (I) {
                              (I.type === "keydown" && I.which !== 13 && I.which !== 32) || (I.preventDefault(), A.click());
                          }),
                      oe.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                      B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                      m)
                  )
                      A.on("click", function (I) {
                          I.preventDefault();
                      }),
                          oe.on("click", function (I) {
                              I.preventDefault();
                          }),
                          he.on("click", function (I) {
                              I.preventDefault();
                          });
                  else {
                      B.on("click keydown", function (I) {
                          if (I.type === "keydown") {
                              if (I.which !== 13 && I.which !== 32) return;
                              I.preventDefault();
                          }
                          A.removeAttr("data-value"), A.val(""), J.html(""), _.toggle(!0), G.toggle(!1), oe.focus();
                      }),
                          A.on("change", function (I) {
                              (d = I.target && I.target.files && I.target.files[0]), d && (_.toggle(!1), k.toggle(!1), l.toggle(!0), l.focus(), J.text(d.name), C() || M(Y), (Y.fileUploads[X].uploading = !0), ee(d, y));
                          });
                      var Ye = oe.outerHeight();
                      A.height(Ye), A.width(1);
                  }
                  function f(I) {
                      var q = I.responseJSON && I.responseJSON.msg,
                          te = Ve;
                      typeof q == "string" && q.indexOf("InvalidFileTypeError") === 0 ? (te = ge) : typeof q == "string" && q.indexOf("MaxFileSizeError") === 0 && (te = K),
                          ae.text(te),
                          A.removeAttr("data-value"),
                          A.val(""),
                          l.toggle(!1),
                          _.toggle(!0),
                          k.toggle(!0),
                          k.focus(),
                          (Y.fileUploads[X].uploading = !1),
                          C() || L(Y);
                  }
                  function y(I, q) {
                      if (I) return f(I);
                      var te = q.fileName,
                          ue = q.postData,
                          ye = q.fileId,
                          z = q.s3Url;
                      A.attr("data-value", ye), ne(z, ue, d, te, b);
                  }
                  function b(I) {
                      if (I) return f(I);
                      l.toggle(!1), G.css("display", "inline-block"), G.focus(), (Y.fileUploads[X].uploading = !1), C() || L(Y);
                  }
                  function C() {
                      var I = (Y.fileUploads && Y.fileUploads.toArray()) || [];
                      return I.some(function (q) {
                          return q.uploading;
                      });
                  }
              }
              function ee(X, Y) {
                  var d = new URLSearchParams({ name: X.name, size: X.size });
                  e.ajax({ type: "GET", url: `${w}?${d}`, crossDomain: !0 })
                      .done(function (E) {
                          Y(null, E);
                      })
                      .fail(function (E) {
                          Y(E);
                      });
              }
              function ne(X, Y, d, E, _) {
                  var l = new FormData();
                  for (var G in Y) l.append(G, Y[G]);
                  l.append("file", d, E),
                      e
                          .ajax({ type: "POST", url: X, data: l, processData: !1, contentType: !1 })
                          .done(function () {
                              _(null);
                          })
                          .fail(function (k) {
                              _(k);
                          });
              }
              return r;
          })
      );
  });
  Ds();
  Fs();
  Ws();
  Xs();
  ks();
  js();
  Rr();
  eu();
  tu();
  ru();
  ou();
  uu();
  lu();
  pu();
  Wm();
  Vm();
})();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
* https://github.com/bkwld/tram
* MIT License
*/
/*!
* Webflow._ (aka) Underscore.js 1.6.0 (custom build)
* _.each
* _.map
* _.find
* _.filter
* _.any
* _.contains
* _.delay
* _.defer
* _.throttle (webflow)
* _.debounce
* _.keys
* _.has
* _.now
* _.template (webflow: upgraded to 1.13.6)
*
* http://underscorejs.org
* (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
* Underscore may be freely distributed under the MIT license.
* @license MIT
*/
/*! Bundled license information:

timm/lib/timm.js:
(*!
 * Timm
 *
 * Immutability helpers with fast reads and acceptable writes.
 *
 * @copyright Guillermo Grau Panea 2016
 * @license MIT
 *)
*/
/**
* ----------------------------------------------------------------------
* Webflow: Interactions 2.0: Init
*/
Webflow.require("ix2").init({
  events: {
      e: {
          id: "e",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_CLICK",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a", affectedElements: {}, playInReverse: false, autoStopEventId: "e-2" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".faq_question", originalId: "63dae95cb2a1744c06f062b1|39f3c0d3-89a1-9b47-6523-f7526ebfc8f1", appliesTo: "CLASS" },
          targets: [{ selector: ".faq_question", originalId: "63dae95cb2a1744c06f062b1|39f3c0d3-89a1-9b47-6523-f7526ebfc8f1", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1620400341663,
      },
      "e-2": {
          id: "e-2",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_SECOND_CLICK",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-2", affectedElements: {}, playInReverse: false, autoStopEventId: "e" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".faq_question", originalId: "63dae95cb2a1744c06f062b1|39f3c0d3-89a1-9b47-6523-f7526ebfc8f1", appliesTo: "CLASS" },
          targets: [{ selector: ".faq_question", originalId: "63dae95cb2a1744c06f062b1|39f3c0d3-89a1-9b47-6523-f7526ebfc8f1", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1620400341665,
      },
      "e-3": {
          id: "e-3",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OVER",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-3", affectedElements: {}, playInReverse: false, autoStopEventId: "e-4" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".read-more_link-wrapper", originalId: "63dae95cb2a174693ef062a4|b5abf125-a4ab-099c-da90-8d550f99190c", appliesTo: "CLASS" },
          targets: [{ selector: ".read-more_link-wrapper", originalId: "63dae95cb2a174693ef062a4|b5abf125-a4ab-099c-da90-8d550f99190c", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1621245028229,
      },
      "e-4": {
          id: "e-4",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OUT",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-4", affectedElements: {}, playInReverse: false, autoStopEventId: "e-3" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".read-more_link-wrapper", originalId: "63dae95cb2a174693ef062a4|b5abf125-a4ab-099c-da90-8d550f99190c", appliesTo: "CLASS" },
          targets: [{ selector: ".read-more_link-wrapper", originalId: "63dae95cb2a174693ef062a4|b5abf125-a4ab-099c-da90-8d550f99190c", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1621245028230,
      },
      "e-7": {
          id: "e-7",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OVER",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-7", affectedElements: {}, playInReverse: false, autoStopEventId: "e-8" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".layout18_lightbox", originalId: "63dae95cb2a174693ef062a4|b18d10f0-4564-02dd-6cb9-7cb6588a3b94", appliesTo: "CLASS" },
          targets: [{ selector: ".layout18_lightbox", originalId: "63dae95cb2a174693ef062a4|b18d10f0-4564-02dd-6cb9-7cb6588a3b94", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1621422812139,
      },
      "e-8": {
          id: "e-8",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OUT",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-8", affectedElements: {}, playInReverse: false, autoStopEventId: "e-7" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".layout18_lightbox", originalId: "63dae95cb2a174693ef062a4|b18d10f0-4564-02dd-6cb9-7cb6588a3b94", appliesTo: "CLASS" },
          targets: [{ selector: ".layout18_lightbox", originalId: "63dae95cb2a174693ef062a4|b18d10f0-4564-02dd-6cb9-7cb6588a3b94", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1621422812140,
      },
      "e-9": {
          id: "e-9",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OVER",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-9", affectedElements: {}, playInReverse: false, autoStopEventId: "e-10" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".layout19_lightbox", originalId: "63dae95cb2a174693ef062a4|b18d10f0-4564-02dd-6cb9-7cb6588a3b99", appliesTo: "CLASS" },
          targets: [{ selector: ".layout19_lightbox", originalId: "63dae95cb2a174693ef062a4|b18d10f0-4564-02dd-6cb9-7cb6588a3b99", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1621422929850,
      },
      "e-10": {
          id: "e-10",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OUT",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-10", affectedElements: {}, playInReverse: false, autoStopEventId: "e-9" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".layout19_lightbox", originalId: "63dae95cb2a174693ef062a4|b18d10f0-4564-02dd-6cb9-7cb6588a3b99", appliesTo: "CLASS" },
          targets: [{ selector: ".layout19_lightbox", originalId: "63dae95cb2a174693ef062a4|b18d10f0-4564-02dd-6cb9-7cb6588a3b99", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1621422929851,
      },
      "e-13": {
          id: "e-13",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OVER",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-11", affectedElements: {}, playInReverse: false, autoStopEventId: "e-84" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".pricing4_help-circle", originalId: "63dae95cb2a174693ef062a4|d24212c3-d445-dcec-5ed9-c408db753c7c", appliesTo: "CLASS" },
          targets: [{ selector: ".pricing4_help-circle", originalId: "63dae95cb2a174693ef062a4|d24212c3-d445-dcec-5ed9-c408db753c7c", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1621766094892,
      },
      "e-14": {
          id: "e-14",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OUT",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-12", affectedElements: {}, playInReverse: false, autoStopEventId: "e-83" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".pricing4_help-circle", originalId: "63dae95cb2a174693ef062a4|d24212c3-d445-dcec-5ed9-c408db753c7c", appliesTo: "CLASS" },
          targets: [{ selector: ".pricing4_help-circle", originalId: "63dae95cb2a174693ef062a4|d24212c3-d445-dcec-5ed9-c408db753c7c", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1621766094893,
      },
      "e-15": {
          id: "e-15",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_CLICK",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-13", affectedElements: {}, playInReverse: false, autoStopEventId: "e-16" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".layout32_close", originalId: "63dae95cb2a174693ef062a4|6e704347-1632-7d44-3a61-6095bb2a929d", appliesTo: "CLASS" },
          targets: [{ selector: ".layout32_close", originalId: "63dae95cb2a174693ef062a4|6e704347-1632-7d44-3a61-6095bb2a929d", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1621847471211,
      },
      "e-25": {
          id: "e-25",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OVER",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-14", affectedElements: {}, playInReverse: false, autoStopEventId: "e-26" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".cms3_link", originalId: "63dae95cb2a174693ef062a4|0c953c48-e531-8434-76d7-06f48efa1ebb", appliesTo: "CLASS" },
          targets: [{ selector: ".cms3_link", originalId: "63dae95cb2a174693ef062a4|0c953c48-e531-8434-76d7-06f48efa1ebb", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1621949252224,
      },
      "e-26": {
          id: "e-26",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OUT",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: false, autoStopEventId: "e-25" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".cms3_link", originalId: "63dae95cb2a174693ef062a4|0c953c48-e531-8434-76d7-06f48efa1ebb", appliesTo: "CLASS" },
          targets: [{ selector: ".cms3_link", originalId: "63dae95cb2a174693ef062a4|0c953c48-e531-8434-76d7-06f48efa1ebb", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1621949252226,
      },
      "e-27": {
          id: "e-27",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OVER",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: false, autoStopEventId: "e-28" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".lightbox_play", originalId: "ebd6d595-2bca-b96b-0cdf-a20b90745c19", appliesTo: "CLASS" },
          targets: [{ selector: ".lightbox_play", originalId: "ebd6d595-2bca-b96b-0cdf-a20b90745c19", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1622137014793,
      },
      "e-28": {
          id: "e-28",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OUT",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-17", affectedElements: {}, playInReverse: false, autoStopEventId: "e-27" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".lightbox_play", originalId: "ebd6d595-2bca-b96b-0cdf-a20b90745c19", appliesTo: "CLASS" },
          targets: [{ selector: ".lightbox_play", originalId: "ebd6d595-2bca-b96b-0cdf-a20b90745c19", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1622137014796,
      },
      "e-41": {
          id: "e-41",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OVER",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-42" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".layout22_item", originalId: "63dae95cb2a174693ef062a4|a5740c06-0dc6-228e-baef-e5093c74cec3", appliesTo: "CLASS" },
          targets: [{ selector: ".layout22_item", originalId: "63dae95cb2a174693ef062a4|a5740c06-0dc6-228e-baef-e5093c74cec3", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1624730012934,
      },
      "e-42": {
          id: "e-42",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OUT",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21", affectedElements: {}, playInReverse: false, autoStopEventId: "e-41" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".layout22_item", originalId: "63dae95cb2a174693ef062a4|a5740c06-0dc6-228e-baef-e5093c74cec3", appliesTo: "CLASS" },
          targets: [{ selector: ".layout22_item", originalId: "63dae95cb2a174693ef062a4|a5740c06-0dc6-228e-baef-e5093c74cec3", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1624730012935,
      },
      "e-43": {
          id: "e-43",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-26", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "d4d3472b-d260-26f3-6b1e-62b48cd0ffb9", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "d4d3472b-d260-26f3-6b1e-62b48cd0ffb9", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-26-p", selectedAxis: "X_AXIS", basedOn: "ELEMENT", reverse: false, smoothing: 50, restingState: 50 },
              { continuousParameterGroupId: "a-26-p-2", selectedAxis: "Y_AXIS", basedOn: "ELEMENT", reverse: false, smoothing: 50, restingState: 50 },
          ],
          createdOn: 1670302060162,
      },
      "e-44": {
          id: "e-44",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OVER",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-25", affectedElements: {}, playInReverse: false, autoStopEventId: "e-45" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "d4d3472b-d260-26f3-6b1e-62b48cd0ffb9", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "d4d3472b-d260-26f3-6b1e-62b48cd0ffb9", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670302291452,
      },
      "e-45": {
          id: "e-45",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OUT",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-27", affectedElements: {}, playInReverse: false, autoStopEventId: "e-44" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "d4d3472b-d260-26f3-6b1e-62b48cd0ffb9", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "d4d3472b-d260-26f3-6b1e-62b48cd0ffb9", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670302291454,
      },
      "e-46": {
          id: "e-46",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OVER",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-28", affectedElements: {}, playInReverse: false, autoStopEventId: "e-47" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca86", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca86", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670302919428,
      },
      "e-47": {
          id: "e-47",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OUT",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-29", affectedElements: {}, playInReverse: false, autoStopEventId: "e-46" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca86", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca86", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670302919433,
      },
      "e-48": {
          id: "e-48",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-30", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "63dae95cb2a174ca27f0628f", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174ca27f0628f", appliesTo: "PAGE", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-30-p", selectedAxis: "X_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
              { continuousParameterGroupId: "a-30-p-2", selectedAxis: "Y_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
          ],
          createdOn: 1670303740310,
      },
      "e-49": {
          id: "e-49",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-31", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "63dae95cb2a174ca27f0628f", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174ca27f0628f", appliesTo: "PAGE", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-31-p", selectedAxis: "X_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 97, restingState: 50 },
              { continuousParameterGroupId: "a-31-p-2", selectedAxis: "Y_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 97, restingState: 50 },
          ],
          createdOn: 1670307757838,
      },
      "e-50": {
          id: "e-50",
          name: "",
          animationType: "custom",
          eventTypeId: "PAGE_START",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-32", affectedElements: {}, playInReverse: false, autoStopEventId: "e-51" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "63dae95cb2a174ca27f0628f", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174ca27f0628f", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: true, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670311580226,
      },
      "e-52": {
          id: "e-52",
          name: "",
          animationType: "custom",
          eventTypeId: "PAGE_START",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-33", affectedElements: {}, playInReverse: false, autoStopEventId: "e-53" } },
          mediaQueries: ["small", "tiny"],
          target: { id: "63dae95cb2a174ca27f0628f", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174ca27f0628f", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: true, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670386224768,
      },
      "e-54": {
          id: "e-54",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-34", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "18b000b2-24e3-ec1b-eab8-94428b09bf85", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "18b000b2-24e3-ec1b-eab8-94428b09bf85", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-34-p", selectedAxis: "X_AXIS", basedOn: "ELEMENT", reverse: false, smoothing: 50, restingState: 50 },
              { continuousParameterGroupId: "a-34-p-2", selectedAxis: "Y_AXIS", basedOn: "ELEMENT", reverse: false, smoothing: 50, restingState: 50 },
          ],
          createdOn: 1670649611102,
      },
      "e-55": {
          id: "e-55",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_OVER",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-35", affectedElements: {}, playInReverse: false, autoStopEventId: "e-56" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "18b000b2-24e3-ec1b-eab8-94428b09bf85", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "18b000b2-24e3-ec1b-eab8-94428b09bf85", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670649611102,
      },
      "e-56": {
          id: "e-56",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_OUT",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-36", affectedElements: {}, playInReverse: false, autoStopEventId: "e-55" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "18b000b2-24e3-ec1b-eab8-94428b09bf85", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "18b000b2-24e3-ec1b-eab8-94428b09bf85", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670649611102,
      },
      "e-57": {
          id: "e-57",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-30", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "63dae95cb2a174fa08f0629e", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174fa08f0629e", appliesTo: "PAGE", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-30-p", selectedAxis: "X_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
              { continuousParameterGroupId: "a-30-p-2", selectedAxis: "Y_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
          ],
          createdOn: 1670815946317,
      },
      "e-58": {
          id: "e-58",
          name: "",
          animationType: "custom",
          eventTypeId: "PAGE_START",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-33", affectedElements: {}, playInReverse: false, autoStopEventId: "e-59" } },
          mediaQueries: ["small", "tiny"],
          target: { id: "63dae95cb2a174fa08f0629e", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174fa08f0629e", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: true, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670816020382,
      },
      "e-63": {
          id: "e-63",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_OVER",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-38", affectedElements: {}, playInReverse: false, autoStopEventId: "e-64" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "63dae95cb2a174fa08f0629e|199b428b-6173-cd2a-5b8e-ada344f380f2", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174fa08f0629e|199b428b-6173-cd2a-5b8e-ada344f380f2", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670827650073,
      },
      "e-64": {
          id: "e-64",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_OUT",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-39", affectedElements: {}, playInReverse: false, autoStopEventId: "e-63" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "63dae95cb2a174fa08f0629e|199b428b-6173-cd2a-5b8e-ada344f380f2", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174fa08f0629e|199b428b-6173-cd2a-5b8e-ada344f380f2", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670827650073,
      },
      "e-65": {
          id: "e-65",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-37", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "63dae95cb2a174fa08f0629e|199b428b-6173-cd2a-5b8e-ada344f380f2", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174fa08f0629e|199b428b-6173-cd2a-5b8e-ada344f380f2", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-37-p", selectedAxis: "X_AXIS", basedOn: "ELEMENT", reverse: false, smoothing: 50, restingState: 50 },
              { continuousParameterGroupId: "a-37-p-2", selectedAxis: "Y_AXIS", basedOn: "ELEMENT", reverse: false, smoothing: 50, restingState: 50 },
          ],
          createdOn: 1670827650073,
      },
      "e-66": {
          id: "e-66",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OVER",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-40", affectedElements: {}, playInReverse: false, autoStopEventId: "e-67" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "63dae95cb2a174fa08f0629e|199b428b-6173-cd2a-5b8e-ada344f380e7", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174fa08f0629e|199b428b-6173-cd2a-5b8e-ada344f380e7", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670827806552,
      },
      "e-67": {
          id: "e-67",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OUT",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-41", affectedElements: {}, playInReverse: false, autoStopEventId: "e-66" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "63dae95cb2a174fa08f0629e|199b428b-6173-cd2a-5b8e-ada344f380e7", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174fa08f0629e|199b428b-6173-cd2a-5b8e-ada344f380e7", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670827806553,
      },
      "e-68": {
          id: "e-68",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_CLICK",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-43", affectedElements: {}, playInReverse: false, autoStopEventId: "e-69" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca86", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca86", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670904742733,
      },
      "e-69": {
          id: "e-69",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_SECOND_CLICK",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-44", affectedElements: {}, playInReverse: false, autoStopEventId: "e-68" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca86", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca86", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670904742735,
      },
      "e-70": {
          id: "e-70",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-30", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "63dae95cb2a1744e74f06313", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a1744e74f06313", appliesTo: "PAGE", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-30-p", selectedAxis: "X_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
              { continuousParameterGroupId: "a-30-p-2", selectedAxis: "Y_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
          ],
          createdOn: 1670915010450,
      },
      "e-71": {
          id: "e-71",
          name: "",
          animationType: "preset",
          eventTypeId: "PAGE_START",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-46", affectedElements: {}, playInReverse: false, autoStopEventId: "e-72" } },
          mediaQueries: ["small", "tiny"],
          target: { id: "63dae95cb2a1744e74f06313", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a1744e74f06313", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: true, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670915010450,
      },
      "e-73": {
          id: "e-73",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-30", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "63dae95cb2a174c78cf062a1", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174c78cf062a1", appliesTo: "PAGE", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-30-p", selectedAxis: "X_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
              { continuousParameterGroupId: "a-30-p-2", selectedAxis: "Y_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
          ],
          createdOn: 1670993432748,
      },
      "e-74": {
          id: "e-74",
          name: "",
          animationType: "preset",
          eventTypeId: "PAGE_START",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-48", affectedElements: {}, playInReverse: false, autoStopEventId: "e-75" } },
          mediaQueries: ["small", "tiny"],
          target: { id: "63dae95cb2a174c78cf062a1", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174c78cf062a1", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: true, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670993432748,
      },
      "e-76": {
          id: "e-76",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OVER",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-49", affectedElements: {}, playInReverse: false, autoStopEventId: "e-77" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".grid-item", originalId: "63dae95cb2a174c78cf062a1|e2836b1a-2da6-2b96-8d2f-a3dd5a345d4f", appliesTo: "CLASS" },
          targets: [{ selector: ".grid-item", originalId: "63dae95cb2a174c78cf062a1|e2836b1a-2da6-2b96-8d2f-a3dd5a345d4f", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670997327279,
      },
      "e-77": {
          id: "e-77",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_OUT",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-50", affectedElements: {}, playInReverse: false, autoStopEventId: "e-76" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".grid-item", originalId: "63dae95cb2a174c78cf062a1|e2836b1a-2da6-2b96-8d2f-a3dd5a345d4f", appliesTo: "CLASS" },
          targets: [{ selector: ".grid-item", originalId: "63dae95cb2a174c78cf062a1|e2836b1a-2da6-2b96-8d2f-a3dd5a345d4f", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1670997327281,
      },
      "e-78": {
          id: "e-78",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-30", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "63dae95cb2a1745cb3f06335", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a1745cb3f06335", appliesTo: "PAGE", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-30-p", selectedAxis: "X_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
              { continuousParameterGroupId: "a-30-p-2", selectedAxis: "Y_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
          ],
          createdOn: 1671075159941,
      },
      "e-79": {
          id: "e-79",
          name: "",
          animationType: "preset",
          eventTypeId: "PAGE_START",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-52", affectedElements: {}, playInReverse: false, autoStopEventId: "e-80" } },
          mediaQueries: ["small", "tiny"],
          target: { id: "63dae95cb2a1745cb3f06335", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a1745cb3f06335", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: true, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1671075159941,
      },
      "e-81": {
          id: "e-81",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_CLICK",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-53", affectedElements: {}, playInReverse: false, autoStopEventId: "e-82" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".transition-trigger", originalId: "0fbb5a68-9864-1d8e-9964-d1005abba3a0", appliesTo: "CLASS" },
          targets: [{ selector: ".transition-trigger", originalId: "0fbb5a68-9864-1d8e-9964-d1005abba3a0", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1627584494967,
      },
      "e-82": {
          id: "e-82",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_SECOND_CLICK",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-54", affectedElements: {}, playInReverse: false, autoStopEventId: "e-81" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".transition-trigger", originalId: "0fbb5a68-9864-1d8e-9964-d1005abba3a0", appliesTo: "CLASS" },
          targets: [{ selector: ".transition-trigger", originalId: "0fbb5a68-9864-1d8e-9964-d1005abba3a0", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1627584494968,
      },
      "e-85": {
          id: "e-85",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-30", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "63dae95cb2a17474d7f062a7", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a17474d7f062a7", appliesTo: "PAGE", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-30-p", selectedAxis: "X_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
              { continuousParameterGroupId: "a-30-p-2", selectedAxis: "Y_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
          ],
          createdOn: 1671083327551,
      },
      "e-86": {
          id: "e-86",
          name: "",
          animationType: "preset",
          eventTypeId: "PAGE_START",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-56", affectedElements: {}, playInReverse: false, autoStopEventId: "e-87" } },
          mediaQueries: ["small", "tiny"],
          target: { id: "63dae95cb2a17474d7f062a7", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a17474d7f062a7", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: true, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1671083327551,
      },
      "e-88": {
          id: "e-88",
          name: "",
          animationType: "custom",
          eventTypeId: "SCROLL_INTO_VIEW",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-57", affectedElements: {}, playInReverse: false, autoStopEventId: "e-89" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { selector: ".lazy", originalId: "63dae95cb2a174ca27f0628f|6b269082-bdff-997d-9773-02f8edcbf80d", appliesTo: "CLASS" },
          targets: [{ selector: ".lazy", originalId: "63dae95cb2a174ca27f0628f|6b269082-bdff-997d-9773-02f8edcbf80d", appliesTo: "CLASS" }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: 21, scrollOffsetUnit: "%", delay: 0, direction: "BOTTOM", effectIn: true },
          createdOn: 1671257843982,
      },
      "e-90": {
          id: "e-90",
          name: "",
          animationType: "custom",
          eventTypeId: "SCROLLING_IN_VIEW",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-58", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "63dae95cb2a1745947f062ac|aa628559-ae9e-f3ff-1bf3-eccc8a2fdd29", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a1745947f062ac|aa628559-ae9e-f3ff-1bf3-eccc8a2fdd29", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: [{ continuousParameterGroupId: "a-58-p", smoothing: 91, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
          createdOn: 1671259876045,
      },
      "e-92": {
          id: "e-92",
          name: "",
          animationType: "custom",
          eventTypeId: "PAGE_FINISH",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-59", affectedElements: {}, playInReverse: false, autoStopEventId: "e-91" } },
          mediaQueries: ["main"],
          target: { id: "63dae95cb2a174ca27f0628f", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174ca27f0628f", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1671260349132,
      },
      "e-94": {
          id: "e-94",
          name: "",
          animationType: "custom",
          eventTypeId: "PAGE_FINISH",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-59", affectedElements: {}, playInReverse: false, autoStopEventId: "e-93" } },
          mediaQueries: ["main"],
          target: { id: "63dae95cb2a174fa08f0629e", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174fa08f0629e", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1671260694421,
      },
      "e-96": {
          id: "e-96",
          name: "",
          animationType: "custom",
          eventTypeId: "PAGE_FINISH",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-59", affectedElements: {}, playInReverse: false, autoStopEventId: "e-95" } },
          mediaQueries: ["main"],
          target: { id: "63dae95cb2a1744e74f06313", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a1744e74f06313", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1671260723469,
      },
      "e-98": {
          id: "e-98",
          name: "",
          animationType: "custom",
          eventTypeId: "PAGE_FINISH",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-59", affectedElements: {}, playInReverse: false, autoStopEventId: "e-97" } },
          mediaQueries: ["main"],
          target: { id: "63dae95cb2a1745cb3f06335", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a1745cb3f06335", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1671260738622,
      },
      "e-100": {
          id: "e-100",
          name: "",
          animationType: "custom",
          eventTypeId: "PAGE_FINISH",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-59", affectedElements: {}, playInReverse: false, autoStopEventId: "e-99" } },
          mediaQueries: ["main"],
          target: { id: "63dae95cb2a174c78cf062a1", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174c78cf062a1", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1671260749370,
      },
      "e-102": {
          id: "e-102",
          name: "",
          animationType: "custom",
          eventTypeId: "PAGE_FINISH",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-59", affectedElements: {}, playInReverse: false, autoStopEventId: "e-101" } },
          mediaQueries: ["main"],
          target: { id: "63dae95cb2a17474d7f062a7", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a17474d7f062a7", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1671260760481,
      },
      "e-104": {
          id: "e-104",
          name: "",
          animationType: "custom",
          eventTypeId: "PAGE_FINISH",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-59", affectedElements: {}, playInReverse: false, autoStopEventId: "e-103" } },
          mediaQueries: ["main"],
          target: { id: "63dae95cb2a1745947f062ac", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a1745947f062ac", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1671260773737,
      },
      "e-106": {
          id: "e-106",
          name: "",
          animationType: "custom",
          eventTypeId: "PAGE_FINISH",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-59", affectedElements: {}, playInReverse: false, autoStopEventId: "e-105" } },
          mediaQueries: ["main"],
          target: { id: "63dae95cb2a1740f77f062ae", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a1740f77f062ae", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1671260789976,
      },
      "e-107": {
          id: "e-107",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-30", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "63dae95cb2a1740f77f062ae", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a1740f77f062ae", appliesTo: "PAGE", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-30-p", selectedAxis: "X_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
              { continuousParameterGroupId: "a-30-p-2", selectedAxis: "Y_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
          ],
          createdOn: 1671293353913,
      },
      "e-108": {
          id: "e-108",
          name: "",
          animationType: "custom",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-30", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "63dae95cb2a1745947f062ac", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a1745947f062ac", appliesTo: "PAGE", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-30-p", selectedAxis: "X_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
              { continuousParameterGroupId: "a-30-p-2", selectedAxis: "Y_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
          ],
          createdOn: 1671293363319,
      },
      "e-109": {
          id: "e-109",
          name: "",
          animationType: "custom",
          eventTypeId: "PAGE_START",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-46", affectedElements: {}, playInReverse: false, autoStopEventId: "e-110" } },
          mediaQueries: ["small", "tiny"],
          target: { id: "63dae95cb2a1740f77f062ae", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a1740f77f062ae", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1671293483488,
      },
      "e-111": {
          id: "e-111",
          name: "",
          animationType: "custom",
          eventTypeId: "PAGE_START",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-56", affectedElements: {}, playInReverse: false, autoStopEventId: "e-112" } },
          mediaQueries: ["small", "tiny"],
          target: { id: "63dae95cb2a1745947f062ac", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a1745947f062ac", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1671293512058,
      },
      "e-113": {
          id: "e-113",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-62", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "63dae95cb2a17474d7f062a7|ef85b750-29a2-8996-eb8d-557d961bb5da", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a17474d7f062a7|ef85b750-29a2-8996-eb8d-557d961bb5da", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-62-p", selectedAxis: "X_AXIS", basedOn: "ELEMENT", reverse: false, smoothing: 50, restingState: 50 },
              { continuousParameterGroupId: "a-62-p-2", selectedAxis: "Y_AXIS", basedOn: "ELEMENT", reverse: false, smoothing: 50, restingState: 50 },
          ],
          createdOn: 1672976707016,
      },
      "e-114": {
          id: "e-114",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_OVER",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-63", affectedElements: {}, playInReverse: false, autoStopEventId: "e-115" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "63dae95cb2a17474d7f062a7|ef85b750-29a2-8996-eb8d-557d961bb5da", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a17474d7f062a7|ef85b750-29a2-8996-eb8d-557d961bb5da", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1672976707016,
      },
      "e-115": {
          id: "e-115",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_OUT",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-64", affectedElements: {}, playInReverse: false, autoStopEventId: "e-114" } },
          mediaQueries: ["main", "medium", "small", "tiny"],
          target: { id: "63dae95cb2a17474d7f062a7|ef85b750-29a2-8996-eb8d-557d961bb5da", appliesTo: "ELEMENT", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a17474d7f062a7|ef85b750-29a2-8996-eb8d-557d961bb5da", appliesTo: "ELEMENT", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1672976707016,
      },
      "e-116": {
          id: "e-116",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-65", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "63dae95cb2a17466b6f06334", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a17466b6f06334", appliesTo: "PAGE", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-65-p", selectedAxis: "X_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
              { continuousParameterGroupId: "a-65-p-2", selectedAxis: "Y_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
          ],
          createdOn: 1673586848746,
      },
      "e-117": {
          id: "e-117",
          name: "",
          animationType: "preset",
          eventTypeId: "PAGE_START",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-66", affectedElements: {}, playInReverse: false, autoStopEventId: "e-118" } },
          mediaQueries: ["small", "tiny"],
          target: { id: "63dae95cb2a17466b6f06334", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a17466b6f06334", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: true, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1673586848746,
      },
      "e-120": {
          id: "e-120",
          name: "",
          animationType: "preset",
          eventTypeId: "PAGE_FINISH",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-59", affectedElements: {}, playInReverse: false, autoStopEventId: "e-119" } },
          mediaQueries: ["main"],
          target: { id: "63dae95cb2a17466b6f06334", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a17466b6f06334", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1673586848746,
      },
      "e-121": {
          id: "e-121",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-67", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "63dae95cb2a17407c0f0633b", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a17407c0f0633b", appliesTo: "PAGE", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-67-p", selectedAxis: "X_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
              { continuousParameterGroupId: "a-67-p-2", selectedAxis: "Y_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
          ],
          createdOn: 1673587145178,
      },
      "e-122": {
          id: "e-122",
          name: "",
          animationType: "preset",
          eventTypeId: "PAGE_START",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-68", affectedElements: {}, playInReverse: false, autoStopEventId: "e-123" } },
          mediaQueries: ["small", "tiny"],
          target: { id: "63dae95cb2a17407c0f0633b", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a17407c0f0633b", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: true, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1673587145178,
      },
      "e-125": {
          id: "e-125",
          name: "",
          animationType: "preset",
          eventTypeId: "PAGE_FINISH",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-59", affectedElements: {}, playInReverse: false, autoStopEventId: "e-124" } },
          mediaQueries: ["main"],
          target: { id: "63dae95cb2a17407c0f0633b", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a17407c0f0633b", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1673587145178,
      },
      "e-126": {
          id: "e-126",
          name: "",
          animationType: "preset",
          eventTypeId: "MOUSE_MOVE",
          action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-69", affectedElements: {}, duration: 0 } },
          mediaQueries: ["main", "medium"],
          target: { id: "63dae95cb2a174623df0633c", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174623df0633c", appliesTo: "PAGE", styleBlockIds: [] }],
          config: [
              { continuousParameterGroupId: "a-69-p", selectedAxis: "X_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
              { continuousParameterGroupId: "a-69-p-2", selectedAxis: "Y_AXIS", basedOn: "VIEWPORT", reverse: false, smoothing: 99, restingState: 50 },
          ],
          createdOn: 1674846632420,
      },
      "e-127": {
          id: "e-127",
          name: "",
          animationType: "preset",
          eventTypeId: "PAGE_START",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-70", affectedElements: {}, playInReverse: false, autoStopEventId: "e-128" } },
          mediaQueries: ["small", "tiny"],
          target: { id: "63dae95cb2a174623df0633c", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174623df0633c", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: true, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1674846632420,
      },
      "e-130": {
          id: "e-130",
          name: "",
          animationType: "preset",
          eventTypeId: "PAGE_FINISH",
          action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-59", affectedElements: {}, playInReverse: false, autoStopEventId: "e-129" } },
          mediaQueries: ["main"],
          target: { id: "63dae95cb2a174623df0633c", appliesTo: "PAGE", styleBlockIds: [] },
          targets: [{ id: "63dae95cb2a174623df0633c", appliesTo: "PAGE", styleBlockIds: [] }],
          config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
          createdOn: 1674846632420,
      },
  },
  actionLists: {
      a: {
          id: "a",
          title: "faq-question Reveal",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-n",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                              delay: 0,
                              easing: "",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".faq_explander-vertical", selectorGuids: ["3a3918c5-48d0-0093-d895-1bef9a6da41d"] },
                              zValue: 0,
                              xUnit: "DEG",
                              yUnit: "DEG",
                              zUnit: "deg",
                          },
                      },
                      {
                          id: "a-n-5",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                              delay: 0,
                              easing: "",
                              duration: 500,
                              target: { useEventTarget: "SIBLINGS", selector: ".faq_answer", selectorGuids: ["0594e440-c525-3318-ed49-3dc9586e31e0"] },
                              heightValue: 0,
                              widthUnit: "PX",
                              heightUnit: "px",
                              locked: false,
                          },
                      },
                      {
                          id: "a-n-3",
                          actionTypeId: "GENERAL_DISPLAY",
                          config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "SIBLINGS", selector: ".faq_answer", selectorGuids: ["0594e440-c525-3318-ed49-3dc9586e31e0"] }, value: "none" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-n-4",
                          actionTypeId: "GENERAL_DISPLAY",
                          config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "SIBLINGS", selector: ".faq_answer", selectorGuids: ["0594e440-c525-3318-ed49-3dc9586e31e0"] }, value: "block" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-n-2",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                              delay: 0,
                              easing: "ease",
                              duration: 250,
                              target: { useEventTarget: "CHILDREN", selector: ".faq_explander-vertical", selectorGuids: ["3a3918c5-48d0-0093-d895-1bef9a6da41d"] },
                              zValue: 90,
                              xUnit: "DEG",
                              yUnit: "DEG",
                              zUnit: "deg",
                          },
                      },
                      {
                          id: "a-n-6",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                              delay: 0,
                              easing: "ease",
                              duration: 250,
                              target: { useEventTarget: "SIBLINGS", selector: ".faq_answer", selectorGuids: ["0594e440-c525-3318-ed49-3dc9586e31e0"] },
                              widthUnit: "PX",
                              heightUnit: "AUTO",
                              locked: false,
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1620400345437,
      },
      "a-2": {
          id: "a-2",
          title: "faq-question Hide",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-2-n-2",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                              delay: 0,
                              easing: "ease",
                              duration: 250,
                              target: { useEventTarget: "CHILDREN", selector: ".faq_explander-vertical", selectorGuids: ["3a3918c5-48d0-0093-d895-1bef9a6da41d"] },
                              zValue: 0,
                              xUnit: "DEG",
                              yUnit: "DEG",
                              zUnit: "deg",
                          },
                      },
                      {
                          id: "a-2-n-4",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                              delay: 0,
                              easing: "ease",
                              duration: 250,
                              target: { useEventTarget: "SIBLINGS", selector: ".faq_answer", selectorGuids: ["0594e440-c525-3318-ed49-3dc9586e31e0"] },
                              heightValue: 0,
                              widthUnit: "PX",
                              heightUnit: "px",
                              locked: false,
                          },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-2-n-3",
                          actionTypeId: "GENERAL_DISPLAY",
                          config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "SIBLINGS", selector: ".faq_answer", selectorGuids: ["0594e440-c525-3318-ed49-3dc9586e31e0"] }, value: "none" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1620400345437,
      },
      "a-3": {
          id: "a-3",
          title: "read-more Hover",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-3-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".read-more_icon", selectorGuids: ["cf8da322-5b5f-532a-13c8-163c15d6153c"] },
                              xValue: 0,
                              xUnit: "rem",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-3-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "ease",
                              duration: 250,
                              target: { useEventTarget: "CHILDREN", selector: ".read-more_icon", selectorGuids: ["cf8da322-5b5f-532a-13c8-163c15d6153c"] },
                              xValue: 0.25,
                              xUnit: "rem",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1621245034119,
      },
      "a-4": {
          id: "a-4",
          title: "read-more Hover Out",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-4-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "ease",
                              duration: 250,
                              target: { useEventTarget: "CHILDREN", selector: ".read-more_icon", selectorGuids: ["cf8da322-5b5f-532a-13c8-163c15d6153c"] },
                              xValue: 0,
                              xUnit: "rem",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1621245034119,
      },
      "a-7": {
          id: "a-7",
          title: "layout18_lightbox Hover",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-7-n",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                              delay: 0,
                              easing: "",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".layout18_play-circle", selectorGuids: ["02f99e28-d3fb-c839-fb6b-0eca31542b52"] },
                              xValue: 1,
                              yValue: 1,
                              locked: true,
                          },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-7-n-2",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                              delay: 0,
                              easing: "ease",
                              duration: 250,
                              target: { useEventTarget: "CHILDREN", selector: ".layout18_play-circle", selectorGuids: ["02f99e28-d3fb-c839-fb6b-0eca31542b52"] },
                              xValue: 1.08,
                              yValue: 1.08,
                              locked: true,
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1621422815353,
      },
      "a-8": {
          id: "a-8",
          title: "layout18_lightbox Hover Out",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-8-n-2",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                              delay: 0,
                              easing: "ease",
                              duration: 250,
                              target: { useEventTarget: "CHILDREN", selector: ".layout18_play-circle", selectorGuids: ["02f99e28-d3fb-c839-fb6b-0eca31542b52"] },
                              xValue: 1,
                              yValue: 1,
                              locked: true,
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1621422815353,
      },
      "a-9": {
          id: "a-9",
          title: "layout19_lightbox Hover",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-9-n",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                              delay: 0,
                              easing: "",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".layout19_play-circle", selectorGuids: ["a7285947-c6e8-f6c2-4a1e-ddacc3c77612"] },
                              xValue: 1,
                              yValue: 1,
                              locked: true,
                          },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-9-n-2",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                              delay: 0,
                              easing: "ease",
                              duration: 250,
                              target: { useEventTarget: "CHILDREN", selector: ".layout19_play-circle", selectorGuids: ["a7285947-c6e8-f6c2-4a1e-ddacc3c77612"] },
                              xValue: 1.08,
                              yValue: 1.08,
                              locked: true,
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1621422941788,
      },
      "a-10": {
          id: "a-10",
          title: "layout19_lightbox Hover Out",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-10-n-2",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                              delay: 0,
                              easing: "ease",
                              duration: 250,
                              target: { useEventTarget: "CHILDREN", selector: ".layout19_play-circle", selectorGuids: ["a7285947-c6e8-f6c2-4a1e-ddacc3c77612"] },
                              xValue: 1,
                              yValue: 1,
                              locked: true,
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1621422941788,
      },
      "a-11": {
          id: "a-11",
          title: "pricing4_help-icon Hover",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-11-n-3",
                          actionTypeId: "GENERAL_DISPLAY",
                          config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "SIBLINGS", selector: ".pricing4_help-textbox", selectorGuids: ["1a21331c-751c-4478-24b3-dcec5b2ae290"] }, value: "none" },
                      },
                      {
                          id: "a-11-n",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "SIBLINGS", selector: ".pricing4_help-textbox", selectorGuids: ["1a21331c-751c-4478-24b3-dcec5b2ae290"] }, value: 0, unit: "" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-11-n-4",
                          actionTypeId: "GENERAL_DISPLAY",
                          config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "SIBLINGS", selector: ".pricing4_help-textbox", selectorGuids: ["1a21331c-751c-4478-24b3-dcec5b2ae290"] }, value: "block" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-11-n-2",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "ease", duration: 250, target: { useEventTarget: "SIBLINGS", selector: ".pricing4_help-textbox", selectorGuids: ["1a21331c-751c-4478-24b3-dcec5b2ae290"] }, value: 1, unit: "" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1621765953433,
      },
      "a-12": {
          id: "a-12",
          title: "pricing4_help-icon Hover Out",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-12-n-4",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "ease", duration: 250, target: { useEventTarget: "SIBLINGS", selector: ".pricing4_help-textbox", selectorGuids: ["1a21331c-751c-4478-24b3-dcec5b2ae290"] }, value: 0, unit: "" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-12-n-3",
                          actionTypeId: "GENERAL_DISPLAY",
                          config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: "SIBLINGS", selector: ".pricing4_help-textbox", selectorGuids: ["1a21331c-751c-4478-24b3-dcec5b2ae290"] }, value: "none" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1621765953433,
      },
      "a-13": {
          id: "a-13",
          title: "layout32_close Click",
          actionItemGroups: [
              { actionItems: [{ id: "a-13-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: {}, value: "block" } }] },
              { actionItems: [{ id: "a-13-n-2", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: {}, value: "none" } }] },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1621847490289,
      },
      "a-14": {
          id: "a-14",
          title: "cms3_link Hover",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-14-n",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".cms3_image-overlay", selectorGuids: ["6376423a-670f-7c51-7d4e-7ebf53e1a9a6"] }, value: 0.25, unit: "" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-14-n-2",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "ease", duration: 250, target: { useEventTarget: "CHILDREN", selector: ".cms3_image-overlay", selectorGuids: ["6376423a-670f-7c51-7d4e-7ebf53e1a9a6"] }, value: 0, unit: "" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1621949257462,
      },
      "a-15": {
          id: "a-15",
          title: "cms3_link Hover Out",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-15-n-2",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "ease", duration: 250, target: { useEventTarget: "CHILDREN", selector: ".cms3_image-overlay", selectorGuids: ["6376423a-670f-7c51-7d4e-7ebf53e1a9a6"] }, value: 0.25, unit: "" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1621949257462,
      },
      "a-16": {
          id: "a-16",
          title: "lightbox-play Hover",
          actionItemGroups: [
              { actionItems: [{ id: "a-16-n", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "", duration: 500, target: {}, xValue: 1, yValue: 1, locked: true } }] },
              { actionItems: [{ id: "a-16-n-2", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "ease", duration: 250, target: {}, xValue: 1.08, yValue: 1.08, locked: true } }] },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1622137026144,
      },
      "a-17": {
          id: "a-17",
          title: "lightbox-play Hover Out",
          actionItemGroups: [{ actionItems: [{ id: "a-17-n-2", actionTypeId: "TRANSFORM_SCALE", config: { delay: 0, easing: "ease", duration: 250, target: {}, xValue: 1, yValue: 1, locked: true } }] }],
          useFirstGroupAsInitialState: false,
          createdOn: 1622137026144,
      },
      "a-20": {
          id: "a-20",
          title: "layout22_item Hover",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-20-n",
                          actionTypeId: "STYLE_FILTER",
                          config: {
                              delay: 0,
                              easing: "",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".layout22_logo", selectorGuids: ["7448982c-92a1-7209-8c7d-207619186bb8"] },
                              filters: [{ type: "grayscale", filterId: "713c", value: 100, unit: "%" }],
                          },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-20-n-2",
                          actionTypeId: "STYLE_FILTER",
                          config: {
                              delay: 0,
                              easing: "ease",
                              duration: 250,
                              target: { useEventTarget: "CHILDREN", selector: ".layout22_logo", selectorGuids: ["7448982c-92a1-7209-8c7d-207619186bb8"] },
                              filters: [{ type: "grayscale", filterId: "4830", value: 0, unit: "%" }],
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1624730017633,
      },
      "a-21": {
          id: "a-21",
          title: "layout22_item Hover Out",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-21-n-2",
                          actionTypeId: "STYLE_FILTER",
                          config: {
                              delay: 0,
                              easing: "ease",
                              duration: 250,
                              target: { useEventTarget: "CHILDREN", selector: ".layout22_logo", selectorGuids: ["7448982c-92a1-7209-8c7d-207619186bb8"] },
                              filters: [{ type: "grayscale", filterId: "4830", value: 100, unit: "%" }],
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1624730017633,
      },
      "a-26": {
          id: "a-26",
          title: "New Mouse Animation",
          continuousParameterGroups: [
              {
                  id: "a-26-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-26-n",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "d4d3472b-d260-26f3-6b1e-62b48cd0ffb9" }, xValue: -10, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-26-n-2",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "d4d3472b-d260-26f3-6b1e-62b48cd0ffb9" }, xValue: 10, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
              {
                  id: "a-26-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-26-n-3",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "d4d3472b-d260-26f3-6b1e-62b48cd0ffb9" }, yValue: -10, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-26-n-4",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "d4d3472b-d260-26f3-6b1e-62b48cd0ffb9" }, yValue: 10, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
          ],
          createdOn: 1670302064865,
      },
      "a-25": {
          id: "a-25",
          title: "New Timed Animation",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-25-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".image", selectorGuids: ["95a97899-50bb-892e-400b-123f711c0c99"] },
                              xValue: 0,
                              xUnit: "%",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-25-n-4",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "outQuad",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".image", selectorGuids: ["95a97899-50bb-892e-400b-123f711c0c99"] },
                              xValue: 50,
                              xUnit: "%",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670301984228,
      },
      "a-27": {
          id: "a-27",
          title: "New Timed Animation",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-27-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "outQuad",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".image", selectorGuids: ["95a97899-50bb-892e-400b-123f711c0c99"] },
                              xValue: 0,
                              xUnit: "%",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1670302475266,
      },
      "a-28": {
          id: "a-28",
          title: "menu-hover",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-28-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "outQuad",
                              duration: 300,
                              target: { useEventTarget: "CHILDREN", selector: ".menu-line", selectorGuids: ["560e3c25-8785-86d9-cbcb-aca784ffa6f7"] },
                              xValue: 11,
                              xUnit: "%",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1670302928716,
      },
      "a-29": {
          id: "a-29",
          title: "menu-hover 2",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-29-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "outQuad",
                              duration: 300,
                              target: { useEventTarget: "CHILDREN", selector: ".menu-line", selectorGuids: ["560e3c25-8785-86d9-cbcb-aca784ffa6f7"] },
                              xValue: -92,
                              xUnit: "%",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1670302928716,
      },
      "a-30": {
          id: "a-30",
          title: "gradient move",
          continuousParameterGroups: [
              {
                  id: "a-30-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              { id: "a-30-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -50, xUnit: "vw", yUnit: "PX", zUnit: "PX" } },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              { id: "a-30-n-2", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: 50, xUnit: "vw", yUnit: "PX", zUnit: "PX" } },
                          ],
                      },
                  ],
              },
              {
                  id: "a-30-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              { id: "a-30-n-3", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, yValue: -50, xUnit: "PX", yUnit: "vh", zUnit: "PX" } },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              { id: "a-30-n-4", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, yValue: 50, xUnit: "PX", yUnit: "vh", zUnit: "PX" } },
                          ],
                      },
                  ],
              },
          ],
          createdOn: 1670303743578,
      },
      "a-31": {
          id: "a-31",
          title: "New Mouse Animation",
          continuousParameterGroups: [
              {
                  id: "a-31-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-31-n",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|70b5f534-2e2e-20c2-106a-6e88735015a4" }, xValue: -10, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-5",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|7c06298c-bdaa-10cf-1591-0f500ab073c9" }, xValue: -15, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-9",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|5c57647d-31a6-3384-a347-f409ec115016" }, xValue: -10, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-13",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|2b3ced12-c4a6-ad2d-0b95-542c848f2b1e" }, xValue: -20, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-17",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|ca4e5c13-4ef8-11a5-ec99-4795a43f2b2d" }, xValue: -5, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-31-n-2",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|70b5f534-2e2e-20c2-106a-6e88735015a4" }, xValue: 10, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-6",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|7c06298c-bdaa-10cf-1591-0f500ab073c9" }, xValue: 15, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-10",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|5c57647d-31a6-3384-a347-f409ec115016" }, xValue: 10, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-14",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|2b3ced12-c4a6-ad2d-0b95-542c848f2b1e" }, xValue: 20, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-18",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|ca4e5c13-4ef8-11a5-ec99-4795a43f2b2d" }, xValue: 5, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
              {
                  id: "a-31-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-31-n-3",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|70b5f534-2e2e-20c2-106a-6e88735015a4" }, yValue: -10, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-7",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|7c06298c-bdaa-10cf-1591-0f500ab073c9" }, yValue: -15, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-11",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|5c57647d-31a6-3384-a347-f409ec115016" }, xValue: null, yValue: -10, xUnit: "px", yUnit: "px", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-15",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|2b3ced12-c4a6-ad2d-0b95-542c848f2b1e" }, yValue: -20, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-19",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|ca4e5c13-4ef8-11a5-ec99-4795a43f2b2d" }, yValue: -5, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-31-n-4",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|70b5f534-2e2e-20c2-106a-6e88735015a4" }, yValue: 10, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-8",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|7c06298c-bdaa-10cf-1591-0f500ab073c9" }, yValue: 15, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-12",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|5c57647d-31a6-3384-a347-f409ec115016" }, yValue: 10, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-16",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|2b3ced12-c4a6-ad2d-0b95-542c848f2b1e" }, yValue: 20, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                              {
                                  id: "a-31-n-20",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174ca27f0628f|ca4e5c13-4ef8-11a5-ec99-4795a43f2b2d" }, yValue: 5, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
          ],
          createdOn: 1670307762530,
      },
      "a-32": {
          id: "a-32",
          title: "scrolling animation",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-32-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "", duration: 30000, target: { selector: ".collection-list-wrapper", selectorGuids: ["479532d4-df5d-df3a-f72e-a1d859de8720"] }, xValue: -100, xUnit: "%", yUnit: "PX", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-32-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "", duration: 0, target: { selector: ".collection-list-wrapper", selectorGuids: ["479532d4-df5d-df3a-f72e-a1d859de8720"] }, xValue: 0, xUnit: "%", yUnit: "PX", zUnit: "PX" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1670311587656,
      },
      "a-33": {
          id: "a-33",
          title: "gradient move for mobile",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-33-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "", duration: 500, target: { id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-33-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: 20, yValue: 10, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-33-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670386234243,
      },
      "a-34": {
          id: "a-34",
          title: "New Mouse Animation 2",
          continuousParameterGroups: [
              {
                  id: "a-34-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-34-n",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "18b000b2-24e3-ec1b-eab8-94428b09bf85" }, xValue: -10, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-34-n-2",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "18b000b2-24e3-ec1b-eab8-94428b09bf85" }, xValue: 10, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
              {
                  id: "a-34-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-34-n-3",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "18b000b2-24e3-ec1b-eab8-94428b09bf85" }, yValue: -10, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-34-n-4",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "18b000b2-24e3-ec1b-eab8-94428b09bf85" }, yValue: 10, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
          ],
          createdOn: 1670302064865,
      },
      "a-35": {
          id: "a-35",
          title: "New Timed Animation 2",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-35-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".image", selectorGuids: ["95a97899-50bb-892e-400b-123f711c0c99"] },
                              xValue: 0,
                              xUnit: "%",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-35-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "outQuad",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".image", selectorGuids: ["95a97899-50bb-892e-400b-123f711c0c99"] },
                              xValue: 50,
                              xUnit: "%",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670301984228,
      },
      "a-36": {
          id: "a-36",
          title: "New Timed Animation 3",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-36-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "outQuad",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".image", selectorGuids: ["95a97899-50bb-892e-400b-123f711c0c99"] },
                              xValue: 0,
                              xUnit: "%",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1670302475266,
      },
      "a-38": {
          id: "a-38",
          title: "New Timed Animation 4",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-38-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".image", selectorGuids: ["95a97899-50bb-892e-400b-123f711c0c99"] },
                              xValue: 0,
                              xUnit: "%",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-38-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "outQuad",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".image", selectorGuids: ["95a97899-50bb-892e-400b-123f711c0c99"] },
                              xValue: 50,
                              xUnit: "%",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670301984228,
      },
      "a-39": {
          id: "a-39",
          title: "New Timed Animation 5",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-39-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "outQuad",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".image", selectorGuids: ["95a97899-50bb-892e-400b-123f711c0c99"] },
                              xValue: 0,
                              xUnit: "%",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1670302475266,
      },
      "a-37": {
          id: "a-37",
          title: "New Mouse Animation 3",
          continuousParameterGroups: [
              {
                  id: "a-37-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-37-n",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "63dae95cb2a174fa08f0629e|94c53dfc-1bbc-5665-5410-4ed1e87cf6ca" }, xValue: -10, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-37-n-2",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "63dae95cb2a174fa08f0629e|94c53dfc-1bbc-5665-5410-4ed1e87cf6ca" }, xValue: 10, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
              {
                  id: "a-37-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-37-n-3",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "63dae95cb2a174fa08f0629e|94c53dfc-1bbc-5665-5410-4ed1e87cf6ca" }, yValue: -10, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-37-n-4",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "63dae95cb2a174fa08f0629e|94c53dfc-1bbc-5665-5410-4ed1e87cf6ca" }, yValue: 10, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
          ],
          createdOn: 1670302064865,
      },
      "a-40": {
          id: "a-40",
          title: "team member hover",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-40-n-2",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".background-gradient", selectorGuids: ["c089df98-2b44-6255-950e-8551380ac6ee"] }, value: 0, unit: "" },
                      },
                      {
                          id: "a-40-n-3",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".image-8", selectorGuids: ["4a9562fb-62b0-b25f-94a2-94c9fa060655"] }, xValue: 1, yValue: 1, locked: true },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-40-n",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "outQuad", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".background-gradient", selectorGuids: ["c089df98-2b44-6255-950e-8551380ac6ee"] }, value: 1, unit: "" },
                      },
                      {
                          id: "a-40-n-4",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                              delay: 0,
                              easing: "outQuad",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".image-8", selectorGuids: ["4a9562fb-62b0-b25f-94a2-94c9fa060655"] },
                              xValue: 1.1,
                              yValue: 1.1,
                              locked: true,
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670827812312,
      },
      "a-41": {
          id: "a-41",
          title: "team member hover 2",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-41-n-3",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "outQuad", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".background-gradient", selectorGuids: ["c089df98-2b44-6255-950e-8551380ac6ee"] }, value: 0, unit: "" },
                      },
                      {
                          id: "a-41-n-4",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: { delay: 0, easing: "outQuad", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".image-8", selectorGuids: ["4a9562fb-62b0-b25f-94a2-94c9fa060655"] }, xValue: 1, yValue: 1, locked: true },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1670827812312,
      },
      "a-43": {
          id: "a-43",
          title: "Menu-open",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-43-n-2",
                          actionTypeId: "STYLE_SIZE",
                          config: { delay: 0, easing: "", duration: 500, target: { selector: ".menu-wrapper", selectorGuids: ["d3be6236-016c-365b-6bf6-9b087318db02"] }, heightValue: 0, widthUnit: "PX", heightUnit: "vh", locked: false },
                      },
                      { id: "a-43-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".menu-wrapper", selectorGuids: ["d3be6236-016c-365b-6bf6-9b087318db02"] }, value: "none" } },
                      {
                          id: "a-43-n-5",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "", duration: 500, target: { selector: ".menu-inner-wrapper", selectorGuids: ["f9a94063-5f8e-fe53-0723-96d0e4593b57"] }, value: 0, unit: "" },
                      },
                      {
                          id: "a-43-n-6",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "", duration: 500, target: { selector: ".menu-inner-wrapper", selectorGuids: ["f9a94063-5f8e-fe53-0723-96d0e4593b57"] }, yValue: 100, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                      },
                      { id: "a-43-n-9", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".close-text", selectorGuids: ["6e19a46d-c960-c4b6-3580-f04ed7758c88"] }, value: "none" } },
                      { id: "a-43-n-10", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".menu-text", selectorGuids: ["5b1b78df-7249-251b-879e-43ef13ba2502"] }, value: "block" } },
                      { id: "a-43-n-11", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".menu-text", selectorGuids: ["5b1b78df-7249-251b-879e-43ef13ba2502"] }, value: 1, unit: "" } },
                      { id: "a-43-n-12", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".close-text", selectorGuids: ["6e19a46d-c960-c4b6-3580-f04ed7758c88"] }, value: 0, unit: "" } },
                      { id: "a-43-n-17", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".nav-gradient", selectorGuids: ["24701a1a-64da-4ddc-f13d-2796fa662303"] }, value: 1, unit: "" } },
                  ],
              },
              {
                  actionItems: [
                      { id: "a-43-n-4", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".menu-wrapper", selectorGuids: ["d3be6236-016c-365b-6bf6-9b087318db02"] }, value: "block" } },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-43-n-3",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                              delay: 0,
                              easing: "outQuad",
                              duration: 600,
                              target: { selector: ".menu-wrapper", selectorGuids: ["d3be6236-016c-365b-6bf6-9b087318db02"] },
                              heightValue: 100,
                              widthUnit: "PX",
                              heightUnit: "vh",
                              locked: false,
                          },
                      },
                      {
                          id: "a-43-n-13",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "outQuad", duration: 500, target: { selector: ".menu-text", selectorGuids: ["5b1b78df-7249-251b-879e-43ef13ba2502"] }, value: 0, unit: "" },
                      },
                      {
                          id: "a-43-n-18",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "outQuad", duration: 500, target: { selector: ".nav-gradient", selectorGuids: ["24701a1a-64da-4ddc-f13d-2796fa662303"] }, value: 0, unit: "" },
                      },
                  ],
              },
              {
                  actionItems: [
                      { id: "a-43-n-15", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".close-text", selectorGuids: ["6e19a46d-c960-c4b6-3580-f04ed7758c88"] }, value: "block" } },
                      { id: "a-43-n-14", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".menu-text", selectorGuids: ["5b1b78df-7249-251b-879e-43ef13ba2502"] }, value: "none" } },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-43-n-7",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "outQuad", duration: 600, target: { selector: ".menu-inner-wrapper", selectorGuids: ["f9a94063-5f8e-fe53-0723-96d0e4593b57"] }, value: 1, unit: "" },
                      },
                      {
                          id: "a-43-n-8",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "outQuad", duration: 600, target: { selector: ".menu-inner-wrapper", selectorGuids: ["f9a94063-5f8e-fe53-0723-96d0e4593b57"] }, yValue: 0, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                      },
                      { id: "a-43-n-16", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".close-text", selectorGuids: ["6e19a46d-c960-c4b6-3580-f04ed7758c88"] }, value: 1, unit: "" } },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670904749866,
      },
      "a-44": {
          id: "a-44",
          title: "Menu-close",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-44-n-14",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "outQuad", duration: 600, target: { selector: ".menu-inner-wrapper", selectorGuids: ["f9a94063-5f8e-fe53-0723-96d0e4593b57"] }, value: 0, unit: "" },
                      },
                      {
                          id: "a-44-n-15",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "outQuad", duration: 600, target: { selector: ".menu-inner-wrapper", selectorGuids: ["f9a94063-5f8e-fe53-0723-96d0e4593b57"] }, yValue: 20, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                      },
                      { id: "a-44-n-16", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".close-text", selectorGuids: ["6e19a46d-c960-c4b6-3580-f04ed7758c88"] }, value: 0, unit: "" } },
                  ],
              },
              {
                  actionItems: [
                      { id: "a-44-n-12", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".close-text", selectorGuids: ["6e19a46d-c960-c4b6-3580-f04ed7758c88"] }, value: "none" } },
                      { id: "a-44-n-13", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".menu-text", selectorGuids: ["5b1b78df-7249-251b-879e-43ef13ba2502"] }, value: "block" } },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-44-n-10",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                              delay: 0,
                              easing: "outQuad",
                              duration: 600,
                              target: { selector: ".menu-wrapper", selectorGuids: ["d3be6236-016c-365b-6bf6-9b087318db02"] },
                              heightValue: 0,
                              widthUnit: "PX",
                              heightUnit: "vh",
                              locked: false,
                          },
                      },
                      {
                          id: "a-44-n-11",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "outQuad", duration: 500, target: { selector: ".menu-text", selectorGuids: ["5b1b78df-7249-251b-879e-43ef13ba2502"] }, value: 1, unit: "" },
                      },
                      {
                          id: "a-44-n-17",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "outQuad", duration: 500, target: { selector: ".nav-gradient", selectorGuids: ["24701a1a-64da-4ddc-f13d-2796fa662303"] }, value: 1, unit: "" },
                      },
                  ],
              },
              {
                  actionItems: [
                      { id: "a-44-n-9", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".menu-wrapper", selectorGuids: ["d3be6236-016c-365b-6bf6-9b087318db02"] }, value: "none" } },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1670904749866,
      },
      "a-46": {
          id: "a-46",
          title: "gradient move for mobile 2",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-46-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a1744e74f06313|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-46-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "63dae95cb2a1744e74f06313|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: 20, yValue: 10, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-46-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "63dae95cb2a1744e74f06313|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670386234243,
      },
      "a-48": {
          id: "a-48",
          title: "gradient move for mobile 3",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-48-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174c78cf062a1|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-48-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "63dae95cb2a174c78cf062a1|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: 20, yValue: 10, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-48-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "63dae95cb2a174c78cf062a1|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670386234243,
      },
      "a-49": {
          id: "a-49",
          title: "case-study hover",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-49-n",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".image-9", selectorGuids: ["4ff1a4c5-872a-2b19-5e0c-8fc5cba4f770"] }, xValue: 1, yValue: 1, locked: true },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-49-n-2",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                              delay: 0,
                              easing: "easeInOut",
                              duration: 1500,
                              target: { useEventTarget: "CHILDREN", selector: ".image-9", selectorGuids: ["4ff1a4c5-872a-2b19-5e0c-8fc5cba4f770"] },
                              xValue: 1.1,
                              yValue: 1.1,
                              locked: true,
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670997333120,
      },
      "a-50": {
          id: "a-50",
          title: "grid-fadeout",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-50-n",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                              delay: 0,
                              easing: "easeInOut",
                              duration: 1250,
                              target: { useEventTarget: "CHILDREN", selector: ".image-9", selectorGuids: ["4ff1a4c5-872a-2b19-5e0c-8fc5cba4f770"] },
                              xValue: 1,
                              yValue: 1,
                              locked: true,
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1670997488749,
      },
      "a-52": {
          id: "a-52",
          title: "gradient move for mobile 4",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-52-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a1745cb3f06335|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-52-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "63dae95cb2a1745cb3f06335|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: 20, yValue: 10, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-52-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "63dae95cb2a1745cb3f06335|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670386234243,
      },
      "a-53": {
          id: "a-53",
          title: "Move Transition Out",
          actionItemGroups: [{ actionItems: [{ id: "a-53-n-7", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { id: "0af05c3c-69a8-d6c8-762a-64bc9281065b" }, value: "none" } }] }],
          useFirstGroupAsInitialState: false,
          createdOn: 1627573490431,
      },
      "a-54": {
          id: "a-54",
          title: "Move Transition In",
          actionItemGroups: [
              {
                  actionItems: [
                      { id: "a-54-n", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, target: { selector: ".transition", selectorGuids: ["56e234ac-290b-09e7-c3e8-8b98a4c466fe"] }, value: "block" } },
                  ],
              },
              {
                  actionItems: [
                      { id: "a-54-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".main-wrapper", selectorGuids: ["4cfb52a8-48c8-e0fc-0f43-9e22cda40563"] }, value: 0, unit: "" } },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1627573849364,
      },
      "a-56": {
          id: "a-56",
          title: "gradient move for mobile 5",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-56-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a17474d7f062a7|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-56-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "63dae95cb2a17474d7f062a7|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: 20, yValue: 10, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-56-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "63dae95cb2a17474d7f062a7|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670386234243,
      },
      "a-57": {
          id: "a-57",
          title: "lazyload",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-57-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".lazy", selectorGuids: ["aac16e13-8136-402f-3a93-97bdba5eafe2"] },
                              yValue: 30,
                              xUnit: "PX",
                              yUnit: "px",
                              zUnit: "PX",
                          },
                      },
                      {
                          id: "a-57-n-2",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "CHILDREN", selector: ".lazy", selectorGuids: ["aac16e13-8136-402f-3a93-97bdba5eafe2"] }, value: 0, unit: "" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-57-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "outQuart",
                              duration: 1000,
                              target: { useEventTarget: "CHILDREN", selector: ".lazy", selectorGuids: ["aac16e13-8136-402f-3a93-97bdba5eafe2"] },
                              yValue: 0,
                              xUnit: "PX",
                              yUnit: "px",
                              zUnit: "PX",
                          },
                      },
                      {
                          id: "a-57-n-4",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "easeOut", duration: 400, target: { useEventTarget: "CHILDREN", selector: ".lazy", selectorGuids: ["aac16e13-8136-402f-3a93-97bdba5eafe2"] }, value: 1, unit: "" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1671257940591,
      },
      "a-58": {
          id: "a-58",
          title: "second image",
          continuousParameterGroups: [
              {
                  id: "a-58-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-58-n",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "63dae95cb2a1745947f062ac|aa628559-ae9e-f3ff-1bf3-eccc8a2fdd29" }, yValue: 16, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-58-n-2",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "63dae95cb2a1745947f062ac|aa628559-ae9e-f3ff-1bf3-eccc8a2fdd29" }, yValue: -40, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
          ],
          createdOn: 1671259880825,
      },
      "a-59": {
          id: "a-59",
          title: "content fade",
          actionItemGroups: [
              {
                  actionItems: [
                      { id: "a-59-n", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".main-wrapper", selectorGuids: ["4cfb52a8-48c8-e0fc-0f43-9e22cda40563"] }, value: 0, unit: "" } },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-59-n-2",
                          actionTypeId: "STYLE_OPACITY",
                          config: { delay: 0, easing: "easeOut", duration: 400, target: { selector: ".main-wrapper", selectorGuids: ["4cfb52a8-48c8-e0fc-0f43-9e22cda40563"] }, value: 1, unit: "" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1671260353536,
      },
      "a-62": {
          id: "a-62",
          title: "New Mouse Animation 4",
          continuousParameterGroups: [
              {
                  id: "a-62-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-62-n",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "63dae95cb2a17474d7f062a7|ef85b750-29a2-8996-eb8d-557d961bb5da" }, xValue: -10, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-62-n-2",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "63dae95cb2a17474d7f062a7|ef85b750-29a2-8996-eb8d-557d961bb5da" }, xValue: 10, xUnit: "px", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
              {
                  id: "a-62-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-62-n-3",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "63dae95cb2a17474d7f062a7|ef85b750-29a2-8996-eb8d-557d961bb5da" }, yValue: -10, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-62-n-4",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "63dae95cb2a17474d7f062a7|ef85b750-29a2-8996-eb8d-557d961bb5da" }, yValue: 10, xUnit: "PX", yUnit: "px", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
          ],
          createdOn: 1670302064865,
      },
      "a-63": {
          id: "a-63",
          title: "New Timed Animation 6",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-63-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".image", selectorGuids: ["95a97899-50bb-892e-400b-123f711c0c99"] },
                              xValue: 0,
                              xUnit: "%",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-63-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "outQuad",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".image", selectorGuids: ["95a97899-50bb-892e-400b-123f711c0c99"] },
                              xValue: 50,
                              xUnit: "%",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670301984228,
      },
      "a-64": {
          id: "a-64",
          title: "New Timed Animation 7",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-64-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                              delay: 0,
                              easing: "outQuad",
                              duration: 500,
                              target: { useEventTarget: "CHILDREN", selector: ".image", selectorGuids: ["95a97899-50bb-892e-400b-123f711c0c99"] },
                              xValue: 0,
                              xUnit: "%",
                              yUnit: "PX",
                              zUnit: "PX",
                          },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: false,
          createdOn: 1670302475266,
      },
      "a-65": {
          id: "a-65",
          title: "gradient move 6",
          continuousParameterGroups: [
              {
                  id: "a-65-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-65-n",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a17466b6f06334|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -50, xUnit: "vw", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-65-n-2",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a17466b6f06334|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: 50, xUnit: "vw", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
              {
                  id: "a-65-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-65-n-3",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a17466b6f06334|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, yValue: -50, xUnit: "PX", yUnit: "vh", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-65-n-4",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a17466b6f06334|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, yValue: 50, xUnit: "PX", yUnit: "vh", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
          ],
          createdOn: 1670303743578,
      },
      "a-66": {
          id: "a-66",
          title: "gradient move for mobile 6",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-66-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a17466b6f06334|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-66-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "63dae95cb2a17466b6f06334|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: 20, yValue: 10, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-66-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "63dae95cb2a17466b6f06334|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670386234243,
      },
      "a-67": {
          id: "a-67",
          title: "gradient move 7",
          continuousParameterGroups: [
              {
                  id: "a-67-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-67-n",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a17407c0f0633b|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -50, xUnit: "vw", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-67-n-2",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a17407c0f0633b|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: 50, xUnit: "vw", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
              {
                  id: "a-67-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-67-n-3",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a17407c0f0633b|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, yValue: -50, xUnit: "PX", yUnit: "vh", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-67-n-4",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a17407c0f0633b|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, yValue: 50, xUnit: "PX", yUnit: "vh", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
          ],
          createdOn: 1670303743578,
      },
      "a-68": {
          id: "a-68",
          title: "gradient move for mobile 7",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-68-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a17407c0f0633b|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-68-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "63dae95cb2a17407c0f0633b|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: 20, yValue: 10, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-68-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "63dae95cb2a17407c0f0633b|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670386234243,
      },
      "a-69": {
          id: "a-69",
          title: "gradient move 8",
          continuousParameterGroups: [
              {
                  id: "a-69-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-69-n",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174623df0633c|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -50, xUnit: "vw", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-69-n-2",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174623df0633c|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: 50, xUnit: "vw", yUnit: "PX", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
              {
                  id: "a-69-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                      {
                          keyframe: 0,
                          actionItems: [
                              {
                                  id: "a-69-n-3",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174623df0633c|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, yValue: -50, xUnit: "PX", yUnit: "vh", zUnit: "PX" },
                              },
                          ],
                      },
                      {
                          keyframe: 100,
                          actionItems: [
                              {
                                  id: "a-69-n-4",
                                  actionTypeId: "TRANSFORM_MOVE",
                                  config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174623df0633c|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, yValue: 50, xUnit: "PX", yUnit: "vh", zUnit: "PX" },
                              },
                          ],
                      },
                  ],
              },
          ],
          createdOn: 1670303743578,
      },
      "a-70": {
          id: "a-70",
          title: "gradient move for mobile 8",
          actionItemGroups: [
              {
                  actionItems: [
                      {
                          id: "a-70-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "", duration: 500, target: { id: "63dae95cb2a174623df0633c|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-70-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "63dae95cb2a174623df0633c|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: 20, yValue: 10, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
              {
                  actionItems: [
                      {
                          id: "a-70-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: { delay: 0, easing: "easeInOut", duration: 10000, target: { id: "63dae95cb2a174623df0633c|2fa4c2ed-c05f-94bb-99bc-4bc4b364ca8d" }, xValue: -20, yValue: 40, xUnit: "vw", yUnit: "vh", zUnit: "PX" },
                      },
                  ],
              },
          ],
          useFirstGroupAsInitialState: true,
          createdOn: 1670386234243,
      },
  },
  site: {
      mediaQueries: [
          { key: "main", min: 992, max: 10000 },
          { key: "medium", min: 768, max: 991 },
          { key: "small", min: 480, max: 767 },
          { key: "tiny", min: 0, max: 479 },
      ],
  },
});
