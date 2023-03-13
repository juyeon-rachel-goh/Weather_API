"use strict";
(self.webpackChunkproject_2 = self.webpackChunkproject_2 || []).push([
  [179],
  {
    1791: (tt, De, I) => {
      var a = I(9808),
        k = I(1223);
      class _e extends a.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class he extends _e {
        static makeCurrent() {
          (0, a.HT)(new he());
        }
        onAndCancel(G, F, K) {
          return (
            G.addEventListener(F, K, !1),
            () => {
              G.removeEventListener(F, K, !1);
            }
          );
        }
        dispatchEvent(G, F) {
          G.dispatchEvent(F);
        }
        remove(G) {
          G.parentNode && G.parentNode.removeChild(G);
        }
        createElement(G, F) {
          return (F = F || this.getDefaultDocument()).createElement(G);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(G) {
          return G.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(G) {
          return G instanceof DocumentFragment;
        }
        getGlobalEventTarget(G, F) {
          return "window" === F
            ? window
            : "document" === F
            ? G
            : "body" === F
            ? G.body
            : null;
        }
        getBaseHref(G) {
          const F = (function Re() {
            return (
              (ae = ae || document.querySelector("base")),
              ae ? ae.getAttribute("href") : null
            );
          })();
          return null == F
            ? null
            : (function ke(z) {
                (Ce = Ce || document.createElement("a")),
                  Ce.setAttribute("href", z);
                const G = Ce.pathname;
                return "/" === G.charAt(0) ? G : `/${G}`;
              })(F);
        }
        resetBaseElement() {
          ae = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(G) {
          return (0, a.Mx)(document.cookie, G);
        }
      }
      let Ce,
        ae = null;
      const Te = new k.OlP("TRANSITION_ID"),
        se = [
          {
            provide: k.ip1,
            useFactory: function be(z, G, F) {
              return () => {
                F.get(k.CZH).donePromise.then(() => {
                  const K = (0, a.q)(),
                    ve = G.querySelectorAll(`style[ng-transition="${z}"]`);
                  for (let Qe = 0; Qe < ve.length; Qe++) K.remove(ve[Qe]);
                });
              };
            },
            deps: [Te, a.K0, k.zs3],
            multi: !0,
          },
        ];
      class ne {
        static init() {
          (0, k.VLi)(new ne());
        }
        addToWindow(G) {
          (k.dqk.getAngularTestability = (K, ve = !0) => {
            const Qe = G.findTestabilityInTree(K, ve);
            if (null == Qe)
              throw new Error("Could not find testability for element.");
            return Qe;
          }),
            (k.dqk.getAllAngularTestabilities = () => G.getAllTestabilities()),
            (k.dqk.getAllAngularRootElements = () => G.getAllRootElements()),
            k.dqk.frameworkStabilizers || (k.dqk.frameworkStabilizers = []),
            k.dqk.frameworkStabilizers.push((K) => {
              const ve = k.dqk.getAllAngularTestabilities();
              let Qe = ve.length,
                nt = !1;
              const un = function (tn) {
                (nt = nt || tn), Qe--, 0 == Qe && K(nt);
              };
              ve.forEach(function (tn) {
                tn.whenStable(un);
              });
            });
        }
        findTestabilityInTree(G, F, K) {
          if (null == F) return null;
          const ve = G.getTestability(F);
          return null != ve
            ? ve
            : K
            ? (0, a.q)().isShadowRoot(F)
              ? this.findTestabilityInTree(G, F.host, !0)
              : this.findTestabilityInTree(G, F.parentElement, !0)
            : null;
        }
      }
      let le = (() => {
        class z {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (z.ɵfac = function (F) {
            return new (F || z)();
          }),
          (z.ɵprov = k.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const re = new k.OlP("EventManagerPlugins");
      let Ne = (() => {
        class z {
          constructor(F, K) {
            (this._zone = K),
              (this._eventNameToPlugin = new Map()),
              F.forEach((ve) => (ve.manager = this)),
              (this._plugins = F.slice().reverse());
          }
          addEventListener(F, K, ve) {
            return this._findPluginFor(K).addEventListener(F, K, ve);
          }
          addGlobalEventListener(F, K, ve) {
            return this._findPluginFor(K).addGlobalEventListener(F, K, ve);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(F) {
            const K = this._eventNameToPlugin.get(F);
            if (K) return K;
            const ve = this._plugins;
            for (let Qe = 0; Qe < ve.length; Qe++) {
              const nt = ve[Qe];
              if (nt.supports(F)) return this._eventNameToPlugin.set(F, nt), nt;
            }
            throw new Error(`No event manager plugin found for event ${F}`);
          }
        }
        return (
          (z.ɵfac = function (F) {
            return new (F || z)(k.LFG(re), k.LFG(k.R0b));
          }),
          (z.ɵprov = k.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      class Ge {
        constructor(G) {
          this._doc = G;
        }
        addGlobalEventListener(G, F, K) {
          const ve = (0, a.q)().getGlobalEventTarget(this._doc, G);
          if (!ve)
            throw new Error(`Unsupported event target ${ve} for event ${F}`);
          return this.addEventListener(ve, F, K);
        }
      }
      let Ae = (() => {
          class z {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(F) {
              const K = new Set();
              F.forEach((ve) => {
                this._stylesSet.has(ve) || (this._stylesSet.add(ve), K.add(ve));
              }),
                this.onStylesAdded(K);
            }
            onStylesAdded(F) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (z.ɵfac = function (F) {
              return new (F || z)();
            }),
            (z.ɵprov = k.Yz7({ token: z, factory: z.ɵfac })),
            z
          );
        })(),
        lt = (() => {
          class z extends Ae {
            constructor(F) {
              super(),
                (this._doc = F),
                (this._hostNodes = new Map()),
                this._hostNodes.set(F.head, []);
            }
            _addStylesToHost(F, K, ve) {
              F.forEach((Qe) => {
                const nt = this._doc.createElement("style");
                (nt.textContent = Qe), ve.push(K.appendChild(nt));
              });
            }
            addHost(F) {
              const K = [];
              this._addStylesToHost(this._stylesSet, F, K),
                this._hostNodes.set(F, K);
            }
            removeHost(F) {
              const K = this._hostNodes.get(F);
              K && K.forEach(pt), this._hostNodes.delete(F);
            }
            onStylesAdded(F) {
              this._hostNodes.forEach((K, ve) => {
                this._addStylesToHost(F, ve, K);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((F) => F.forEach(pt));
            }
          }
          return (
            (z.ɵfac = function (F) {
              return new (F || z)(k.LFG(a.K0));
            }),
            (z.ɵprov = k.Yz7({ token: z, factory: z.ɵfac })),
            z
          );
        })();
      function pt(z) {
        (0, a.q)().remove(z);
      }
      const gt = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
          math: "http://www.w3.org/1998/MathML/",
        },
        me = /%COMP%/g;
      function q(z, G, F) {
        for (let K = 0; K < G.length; K++) {
          let ve = G[K];
          Array.isArray(ve)
            ? q(z, ve, F)
            : ((ve = ve.replace(me, z)), F.push(ve));
        }
        return F;
      }
      function te(z) {
        return (G) => {
          if ("__ngUnwrap__" === G) return z;
          !1 === z(G) && (G.preventDefault(), (G.returnValue = !1));
        };
      }
      let de = (() => {
        class z {
          constructor(F, K, ve) {
            (this.eventManager = F),
              (this.sharedStylesHost = K),
              (this.appId = ve),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Q(F));
          }
          createRenderer(F, K) {
            if (!F || !K) return this.defaultRenderer;
            switch (K.encapsulation) {
              case k.ifc.Emulated: {
                let ve = this.rendererByCompId.get(K.id);
                return (
                  ve ||
                    ((ve = new vt(
                      this.eventManager,
                      this.sharedStylesHost,
                      K,
                      this.appId
                    )),
                    this.rendererByCompId.set(K.id, ve)),
                  ve.applyToHost(F),
                  ve
                );
              }
              case 1:
              case k.ifc.ShadowDom:
                return new Ht(this.eventManager, this.sharedStylesHost, F, K);
              default:
                if (!this.rendererByCompId.has(K.id)) {
                  const ve = q(K.id, K.styles, []);
                  this.sharedStylesHost.addStyles(ve),
                    this.rendererByCompId.set(K.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (z.ɵfac = function (F) {
            return new (F || z)(k.LFG(Ne), k.LFG(lt), k.LFG(k.AFp));
          }),
          (z.ɵprov = k.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      class Q {
        constructor(G) {
          (this.eventManager = G),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(G, F) {
          return F
            ? document.createElementNS(gt[F] || F, G)
            : document.createElement(G);
        }
        createComment(G) {
          return document.createComment(G);
        }
        createText(G) {
          return document.createTextNode(G);
        }
        appendChild(G, F) {
          G.appendChild(F);
        }
        insertBefore(G, F, K) {
          G && G.insertBefore(F, K);
        }
        removeChild(G, F) {
          G && G.removeChild(F);
        }
        selectRootElement(G, F) {
          let K = "string" == typeof G ? document.querySelector(G) : G;
          if (!K)
            throw new Error(`The selector "${G}" did not match any elements`);
          return F || (K.textContent = ""), K;
        }
        parentNode(G) {
          return G.parentNode;
        }
        nextSibling(G) {
          return G.nextSibling;
        }
        setAttribute(G, F, K, ve) {
          if (ve) {
            F = ve + ":" + F;
            const Qe = gt[ve];
            Qe ? G.setAttributeNS(Qe, F, K) : G.setAttribute(F, K);
          } else G.setAttribute(F, K);
        }
        removeAttribute(G, F, K) {
          if (K) {
            const ve = gt[K];
            ve ? G.removeAttributeNS(ve, F) : G.removeAttribute(`${K}:${F}`);
          } else G.removeAttribute(F);
        }
        addClass(G, F) {
          G.classList.add(F);
        }
        removeClass(G, F) {
          G.classList.remove(F);
        }
        setStyle(G, F, K, ve) {
          ve & (k.JOm.DashCase | k.JOm.Important)
            ? G.style.setProperty(F, K, ve & k.JOm.Important ? "important" : "")
            : (G.style[F] = K);
        }
        removeStyle(G, F, K) {
          K & k.JOm.DashCase ? G.style.removeProperty(F) : (G.style[F] = "");
        }
        setProperty(G, F, K) {
          G[F] = K;
        }
        setValue(G, F) {
          G.nodeValue = F;
        }
        listen(G, F, K) {
          return "string" == typeof G
            ? this.eventManager.addGlobalEventListener(G, F, te(K))
            : this.eventManager.addEventListener(G, F, te(K));
        }
      }
      class vt extends Q {
        constructor(G, F, K, ve) {
          super(G), (this.component = K);
          const Qe = q(ve + "-" + K.id, K.styles, []);
          F.addStyles(Qe),
            (this.contentAttr = (function fe(z) {
              return "_ngcontent-%COMP%".replace(me, z);
            })(ve + "-" + K.id)),
            (this.hostAttr = (function Ke(z) {
              return "_nghost-%COMP%".replace(me, z);
            })(ve + "-" + K.id));
        }
        applyToHost(G) {
          super.setAttribute(G, this.hostAttr, "");
        }
        createElement(G, F) {
          const K = super.createElement(G, F);
          return super.setAttribute(K, this.contentAttr, ""), K;
        }
      }
      class Ht extends Q {
        constructor(G, F, K, ve) {
          super(G),
            (this.sharedStylesHost = F),
            (this.hostEl = K),
            (this.shadowRoot = K.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const Qe = q(ve.id, ve.styles, []);
          for (let nt = 0; nt < Qe.length; nt++) {
            const un = document.createElement("style");
            (un.textContent = Qe[nt]), this.shadowRoot.appendChild(un);
          }
        }
        nodeOrShadowRoot(G) {
          return G === this.hostEl ? this.shadowRoot : G;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(G, F) {
          return super.appendChild(this.nodeOrShadowRoot(G), F);
        }
        insertBefore(G, F, K) {
          return super.insertBefore(this.nodeOrShadowRoot(G), F, K);
        }
        removeChild(G, F) {
          return super.removeChild(this.nodeOrShadowRoot(G), F);
        }
        parentNode(G) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(G))
          );
        }
      }
      let st = (() => {
        class z extends Ge {
          constructor(F) {
            super(F);
          }
          supports(F) {
            return !0;
          }
          addEventListener(F, K, ve) {
            return (
              F.addEventListener(K, ve, !1),
              () => this.removeEventListener(F, K, ve)
            );
          }
          removeEventListener(F, K, ve) {
            return F.removeEventListener(K, ve);
          }
        }
        return (
          (z.ɵfac = function (F) {
            return new (F || z)(k.LFG(a.K0));
          }),
          (z.ɵprov = k.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const bt = ["alt", "control", "meta", "shift"],
        nn = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        jt = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        wt = {
          alt: (z) => z.altKey,
          control: (z) => z.ctrlKey,
          meta: (z) => z.metaKey,
          shift: (z) => z.shiftKey,
        };
      let $n = (() => {
        class z extends Ge {
          constructor(F) {
            super(F);
          }
          supports(F) {
            return null != z.parseEventName(F);
          }
          addEventListener(F, K, ve) {
            const Qe = z.parseEventName(K),
              nt = z.eventCallback(Qe.fullKey, ve, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, a.q)().onAndCancel(F, Qe.domEventName, nt)
              );
          }
          static parseEventName(F) {
            const K = F.toLowerCase().split("."),
              ve = K.shift();
            if (0 === K.length || ("keydown" !== ve && "keyup" !== ve))
              return null;
            const Qe = z._normalizeKey(K.pop());
            let nt = "";
            if (
              (bt.forEach((tn) => {
                const Tn = K.indexOf(tn);
                Tn > -1 && (K.splice(Tn, 1), (nt += tn + "."));
              }),
              (nt += Qe),
              0 != K.length || 0 === Qe.length)
            )
              return null;
            const un = {};
            return (un.domEventName = ve), (un.fullKey = nt), un;
          }
          static getEventFullKey(F) {
            let K = "",
              ve = (function Rt(z) {
                let G = z.key;
                if (null == G) {
                  if (((G = z.keyIdentifier), null == G)) return "Unidentified";
                  G.startsWith("U+") &&
                    ((G = String.fromCharCode(parseInt(G.substring(2), 16))),
                    3 === z.location && jt.hasOwnProperty(G) && (G = jt[G]));
                }
                return nn[G] || G;
              })(F);
            return (
              (ve = ve.toLowerCase()),
              " " === ve ? (ve = "space") : "." === ve && (ve = "dot"),
              bt.forEach((Qe) => {
                Qe != ve && wt[Qe](F) && (K += Qe + ".");
              }),
              (K += ve),
              K
            );
          }
          static eventCallback(F, K, ve) {
            return (Qe) => {
              z.getEventFullKey(Qe) === F && ve.runGuarded(() => K(Qe));
            };
          }
          static _normalizeKey(F) {
            return "esc" === F ? "escape" : F;
          }
        }
        return (
          (z.ɵfac = function (F) {
            return new (F || z)(k.LFG(a.K0));
          }),
          (z.ɵprov = k.Yz7({ token: z, factory: z.ɵfac })),
          z
        );
      })();
      const Hi = (0, k.eFA)(k._c5, "browser", [
          { provide: k.Lbi, useValue: a.bD },
          {
            provide: k.g9A,
            useValue: function ln() {
              he.makeCurrent(), ne.init();
            },
            multi: !0,
          },
          {
            provide: a.K0,
            useFactory: function Vi() {
              return (0, k.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        Xt = [
          { provide: k.zSh, useValue: "root" },
          {
            provide: k.qLn,
            useFactory: function Mt() {
              return new k.qLn();
            },
            deps: [],
          },
          { provide: re, useClass: st, multi: !0, deps: [a.K0, k.R0b, k.Lbi] },
          { provide: re, useClass: $n, multi: !0, deps: [a.K0] },
          { provide: de, useClass: de, deps: [Ne, lt, k.AFp] },
          { provide: k.FYo, useExisting: de },
          { provide: Ae, useExisting: lt },
          { provide: lt, useClass: lt, deps: [a.K0] },
          { provide: k.dDg, useClass: k.dDg, deps: [k.R0b] },
          { provide: Ne, useClass: Ne, deps: [re, k.R0b] },
          { provide: a.JF, useClass: le, deps: [] },
        ];
      let zn = (() => {
        class z {
          constructor(F) {
            if (F)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(F) {
            return {
              ngModule: z,
              providers: [
                { provide: k.AFp, useValue: F.appId },
                { provide: Te, useExisting: k.AFp },
                se,
              ],
            };
          }
        }
        return (
          (z.ɵfac = function (F) {
            return new (F || z)(k.LFG(z, 12));
          }),
          (z.ɵmod = k.oAB({ type: z })),
          (z.ɵinj = k.cJS({ providers: Xt, imports: [a.ez, k.hGG] })),
          z
        );
      })();
      "undefined" != typeof window && window;
      var li = I(2382),
        gn = I(9525);
      let Yn = (() => {
        class z {
          constructor() {
            this.title = "Weather-Forecast";
          }
        }
        return (
          (z.ɵfac = function (F) {
            return new (F || z)();
          }),
          (z.ɵcmp = k.Xpm({
            type: z,
            selectors: [["app-root"]],
            decls: 2,
            vars: 0,
            consts: [["outlet", "outlet"]],
            template: function (F, K) {
              1 & F && k._UZ(0, "router-outlet", null, 0);
            },
            directives: [gn.lC],
            styles: [""],
          })),
          z
        );
      })();
      const Ci = [
        { path: "", redirectTo: "home", pathMatch: "full" },
        {
          path: "home",
          loadChildren: () =>
            I.e(806)
              .then(I.bind(I, 3537))
              .then((z) => z.HomeModule),
        },
      ];
      let vi = (() => {
        class z {}
        return (
          (z.ɵfac = function (F) {
            return new (F || z)();
          }),
          (z.ɵmod = k.oAB({ type: z })),
          (z.ɵinj = k.cJS({ imports: [[gn.Bz.forRoot(Ci)], gn.Bz] })),
          z
        );
      })();
      var ci = I(6007),
        Ln = I(520);
      let An = (() => {
        class z {}
        return (
          (z.ɵfac = function (F) {
            return new (F || z)();
          }),
          (z.ɵmod = k.oAB({ type: z, bootstrap: [Yn] })),
          (z.ɵinj = k.cJS({
            providers: [],
            imports: [[Ln.JF, zn, vi, ci.IJ, li.UX]],
          })),
          z
        );
      })();
      (0, k.G48)(),
        Hi()
          .bootstrapModule(An)
          .catch((z) => console.error(z));
    },
    1135: (tt, De, I) => {
      I.d(De, { X: () => k });
      var a = I(7579);
      class k extends a.x {
        constructor(he) {
          super(), (this._value = he);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(he) {
          const ae = super._subscribe(he);
          return !ae.closed && he.next(this._value), ae;
        }
        getValue() {
          const { hasError: he, thrownError: ae, _value: Re } = this;
          if (he) throw ae;
          return this._throwIfClosed(), Re;
        }
        next(he) {
          super.next((this._value = he));
        }
      }
    },
    8306: (tt, De, I) => {
      I.d(De, { y: () => be });
      var a = I(930),
        k = I(727),
        _e = I(8822),
        he = I(4671);
      var Ce = I(2416),
        ke = I(576),
        Te = I(2806);
      let be = (() => {
        class re {
          constructor(Ge) {
            Ge && (this._subscribe = Ge);
          }
          lift(Ge) {
            const Ae = new re();
            return (Ae.source = this), (Ae.operator = Ge), Ae;
          }
          subscribe(Ge, Ae, lt) {
            const pt = (function le(re) {
              return (
                (re && re instanceof a.Lv) ||
                ((function ne(re) {
                  return (
                    re &&
                    (0, ke.m)(re.next) &&
                    (0, ke.m)(re.error) &&
                    (0, ke.m)(re.complete)
                  );
                })(re) &&
                  (0, k.Nn)(re))
              );
            })(Ge)
              ? Ge
              : new a.Hp(Ge, Ae, lt);
            return (
              (0, Te.x)(() => {
                const { operator: gt, source: me } = this;
                pt.add(
                  gt
                    ? gt.call(pt, me)
                    : me
                    ? this._subscribe(pt)
                    : this._trySubscribe(pt)
                );
              }),
              pt
            );
          }
          _trySubscribe(Ge) {
            try {
              return this._subscribe(Ge);
            } catch (Ae) {
              Ge.error(Ae);
            }
          }
          forEach(Ge, Ae) {
            return new (Ae = se(Ae))((lt, pt) => {
              const gt = new a.Hp({
                next: (me) => {
                  try {
                    Ge(me);
                  } catch (Me) {
                    pt(Me), gt.unsubscribe();
                  }
                },
                error: pt,
                complete: lt,
              });
              this.subscribe(gt);
            });
          }
          _subscribe(Ge) {
            var Ae;
            return null === (Ae = this.source) || void 0 === Ae
              ? void 0
              : Ae.subscribe(Ge);
          }
          [_e.L]() {
            return this;
          }
          pipe(...Ge) {
            return (function Re(re) {
              return 0 === re.length
                ? he.y
                : 1 === re.length
                ? re[0]
                : function (Ge) {
                    return re.reduce((Ae, lt) => lt(Ae), Ge);
                  };
            })(Ge)(this);
          }
          toPromise(Ge) {
            return new (Ge = se(Ge))((Ae, lt) => {
              let pt;
              this.subscribe(
                (gt) => (pt = gt),
                (gt) => lt(gt),
                () => Ae(pt)
              );
            });
          }
        }
        return (re.create = (Ne) => new re(Ne)), re;
      })();
      function se(re) {
        var Ne;
        return null !== (Ne = null != re ? re : Ce.v.Promise) && void 0 !== Ne
          ? Ne
          : Promise;
      }
    },
    7579: (tt, De, I) => {
      I.d(De, { x: () => Ce });
      var a = I(8306),
        k = I(727);
      const he = (0, I(3888).d)(
        (Te) =>
          function () {
            Te(this),
              (this.name = "ObjectUnsubscribedError"),
              (this.message = "object unsubscribed");
          }
      );
      var ae = I(8737),
        Re = I(2806);
      let Ce = (() => {
        class Te extends a.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(se) {
            const ne = new ke(this, this);
            return (ne.operator = se), ne;
          }
          _throwIfClosed() {
            if (this.closed) throw new he();
          }
          next(se) {
            (0, Re.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const ne of this.currentObservers) ne.next(se);
              }
            });
          }
          error(se) {
            (0, Re.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = se);
                const { observers: ne } = this;
                for (; ne.length; ) ne.shift().error(se);
              }
            });
          }
          complete() {
            (0, Re.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: se } = this;
                for (; se.length; ) se.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var se;
            return (
              (null === (se = this.observers) || void 0 === se
                ? void 0
                : se.length) > 0
            );
          }
          _trySubscribe(se) {
            return this._throwIfClosed(), super._trySubscribe(se);
          }
          _subscribe(se) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(se),
              this._innerSubscribe(se)
            );
          }
          _innerSubscribe(se) {
            const { hasError: ne, isStopped: le, observers: re } = this;
            return ne || le
              ? k.Lc
              : ((this.currentObservers = null),
                re.push(se),
                new k.w0(() => {
                  (this.currentObservers = null), (0, ae.P)(re, se);
                }));
          }
          _checkFinalizedStatuses(se) {
            const { hasError: ne, thrownError: le, isStopped: re } = this;
            ne ? se.error(le) : re && se.complete();
          }
          asObservable() {
            const se = new a.y();
            return (se.source = this), se;
          }
        }
        return (Te.create = (be, se) => new ke(be, se)), Te;
      })();
      class ke extends Ce {
        constructor(be, se) {
          super(), (this.destination = be), (this.source = se);
        }
        next(be) {
          var se, ne;
          null ===
            (ne =
              null === (se = this.destination) || void 0 === se
                ? void 0
                : se.next) ||
            void 0 === ne ||
            ne.call(se, be);
        }
        error(be) {
          var se, ne;
          null ===
            (ne =
              null === (se = this.destination) || void 0 === se
                ? void 0
                : se.error) ||
            void 0 === ne ||
            ne.call(se, be);
        }
        complete() {
          var be, se;
          null ===
            (se =
              null === (be = this.destination) || void 0 === be
                ? void 0
                : be.complete) ||
            void 0 === se ||
            se.call(be);
        }
        _subscribe(be) {
          var se, ne;
          return null !==
            (ne =
              null === (se = this.source) || void 0 === se
                ? void 0
                : se.subscribe(be)) && void 0 !== ne
            ? ne
            : k.Lc;
        }
      }
    },
    930: (tt, De, I) => {
      I.d(De, { Hp: () => Ge, Lv: () => ne });
      var a = I(576),
        k = I(727),
        _e = I(2416),
        he = I(7849),
        ae = I(5032);
      const Re = Te("C", void 0, void 0);
      function Te(me, Me, $e) {
        return { kind: me, value: Me, error: $e };
      }
      var be = I(3410),
        se = I(2806);
      class ne extends k.w0 {
        constructor(Me) {
          super(),
            (this.isStopped = !1),
            Me
              ? ((this.destination = Me), (0, k.Nn)(Me) && Me.add(this))
              : (this.destination = gt);
        }
        static create(Me, $e, Fe) {
          return new Ge(Me, $e, Fe);
        }
        next(Me) {
          this.isStopped
            ? pt(
                (function ke(me) {
                  return Te("N", me, void 0);
                })(Me),
                this
              )
            : this._next(Me);
        }
        error(Me) {
          this.isStopped
            ? pt(
                (function Ce(me) {
                  return Te("E", void 0, me);
                })(Me),
                this
              )
            : ((this.isStopped = !0), this._error(Me));
        }
        complete() {
          this.isStopped
            ? pt(Re, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(Me) {
          this.destination.next(Me);
        }
        _error(Me) {
          try {
            this.destination.error(Me);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const le = Function.prototype.bind;
      function re(me, Me) {
        return le.call(me, Me);
      }
      class Ne {
        constructor(Me) {
          this.partialObserver = Me;
        }
        next(Me) {
          const { partialObserver: $e } = this;
          if ($e.next)
            try {
              $e.next(Me);
            } catch (Fe) {
              Ae(Fe);
            }
        }
        error(Me) {
          const { partialObserver: $e } = this;
          if ($e.error)
            try {
              $e.error(Me);
            } catch (Fe) {
              Ae(Fe);
            }
          else Ae(Me);
        }
        complete() {
          const { partialObserver: Me } = this;
          if (Me.complete)
            try {
              Me.complete();
            } catch ($e) {
              Ae($e);
            }
        }
      }
      class Ge extends ne {
        constructor(Me, $e, Fe) {
          let je;
          if ((super(), (0, a.m)(Me) || !Me))
            je = {
              next: null != Me ? Me : void 0,
              error: null != $e ? $e : void 0,
              complete: null != Fe ? Fe : void 0,
            };
          else {
            let fe;
            this && _e.v.useDeprecatedNextContext
              ? ((fe = Object.create(Me)),
                (fe.unsubscribe = () => this.unsubscribe()),
                (je = {
                  next: Me.next && re(Me.next, fe),
                  error: Me.error && re(Me.error, fe),
                  complete: Me.complete && re(Me.complete, fe),
                }))
              : (je = Me);
          }
          this.destination = new Ne(je);
        }
      }
      function Ae(me) {
        _e.v.useDeprecatedSynchronousErrorHandling
          ? (0, se.O)(me)
          : (0, he.h)(me);
      }
      function pt(me, Me) {
        const { onStoppedNotification: $e } = _e.v;
        $e && be.z.setTimeout(() => $e(me, Me));
      }
      const gt = {
        closed: !0,
        next: ae.Z,
        error: function lt(me) {
          throw me;
        },
        complete: ae.Z,
      };
    },
    727: (tt, De, I) => {
      I.d(De, { Lc: () => Re, w0: () => ae, Nn: () => Ce });
      var a = I(576);
      const _e = (0, I(3888).d)(
        (Te) =>
          function (se) {
            Te(this),
              (this.message = se
                ? `${se.length} errors occurred during unsubscription:\n${se
                    .map((ne, le) => `${le + 1}) ${ne.toString()}`)
                    .join("\n  ")}`
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = se);
          }
      );
      var he = I(8737);
      class ae {
        constructor(be) {
          (this.initialTeardown = be),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let be;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: se } = this;
            if (se)
              if (((this._parentage = null), Array.isArray(se)))
                for (const re of se) re.remove(this);
              else se.remove(this);
            const { initialTeardown: ne } = this;
            if ((0, a.m)(ne))
              try {
                ne();
              } catch (re) {
                be = re instanceof _e ? re.errors : [re];
              }
            const { _finalizers: le } = this;
            if (le) {
              this._finalizers = null;
              for (const re of le)
                try {
                  ke(re);
                } catch (Ne) {
                  (be = null != be ? be : []),
                    Ne instanceof _e
                      ? (be = [...be, ...Ne.errors])
                      : be.push(Ne);
                }
            }
            if (be) throw new _e(be);
          }
        }
        add(be) {
          var se;
          if (be && be !== this)
            if (this.closed) ke(be);
            else {
              if (be instanceof ae) {
                if (be.closed || be._hasParent(this)) return;
                be._addParent(this);
              }
              (this._finalizers =
                null !== (se = this._finalizers) && void 0 !== se
                  ? se
                  : []).push(be);
            }
        }
        _hasParent(be) {
          const { _parentage: se } = this;
          return se === be || (Array.isArray(se) && se.includes(be));
        }
        _addParent(be) {
          const { _parentage: se } = this;
          this._parentage = Array.isArray(se)
            ? (se.push(be), se)
            : se
            ? [se, be]
            : be;
        }
        _removeParent(be) {
          const { _parentage: se } = this;
          se === be
            ? (this._parentage = null)
            : Array.isArray(se) && (0, he.P)(se, be);
        }
        remove(be) {
          const { _finalizers: se } = this;
          se && (0, he.P)(se, be), be instanceof ae && be._removeParent(this);
        }
      }
      ae.EMPTY = (() => {
        const Te = new ae();
        return (Te.closed = !0), Te;
      })();
      const Re = ae.EMPTY;
      function Ce(Te) {
        return (
          Te instanceof ae ||
          (Te &&
            "closed" in Te &&
            (0, a.m)(Te.remove) &&
            (0, a.m)(Te.add) &&
            (0, a.m)(Te.unsubscribe))
        );
      }
      function ke(Te) {
        (0, a.m)(Te) ? Te() : Te.unsubscribe();
      }
    },
    2416: (tt, De, I) => {
      I.d(De, { v: () => a });
      const a = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    9841: (tt, De, I) => {
      I.d(De, { a: () => be });
      var a = I(8306),
        k = I(4742),
        _e = I(2076),
        he = I(4671),
        ae = I(3268),
        Re = I(3269),
        Ce = I(1810),
        ke = I(5403),
        Te = I(9672);
      function be(...le) {
        const re = (0, Re.yG)(le),
          Ne = (0, Re.jO)(le),
          { args: Ge, keys: Ae } = (0, k.D)(le);
        if (0 === Ge.length) return (0, _e.D)([], re);
        const lt = new a.y(
          (function se(le, re, Ne = he.y) {
            return (Ge) => {
              ne(
                re,
                () => {
                  const { length: Ae } = le,
                    lt = new Array(Ae);
                  let pt = Ae,
                    gt = Ae;
                  for (let me = 0; me < Ae; me++)
                    ne(
                      re,
                      () => {
                        const Me = (0, _e.D)(le[me], re);
                        let $e = !1;
                        Me.subscribe(
                          (0, ke.x)(
                            Ge,
                            (Fe) => {
                              (lt[me] = Fe),
                                $e || (($e = !0), gt--),
                                gt || Ge.next(Ne(lt.slice()));
                            },
                            () => {
                              --pt || Ge.complete();
                            }
                          )
                        );
                      },
                      Ge
                    );
                },
                Ge
              );
            };
          })(Ge, re, Ae ? (pt) => (0, Ce.n)(Ae, pt) : he.y)
        );
        return Ne ? lt.pipe((0, ae.Z)(Ne)) : lt;
      }
      function ne(le, re, Ne) {
        le ? (0, Te.f)(Ne, le, re) : re();
      }
    },
    7272: (tt, De, I) => {
      I.d(De, { z: () => ae });
      var a = I(8189),
        _e = I(3269),
        he = I(2076);
      function ae(...Re) {
        return (function k() {
          return (0, a.J)(1);
        })()((0, he.D)(Re, (0, _e.yG)(Re)));
      }
    },
    9770: (tt, De, I) => {
      I.d(De, { P: () => _e });
      var a = I(8306),
        k = I(8421);
      function _e(he) {
        return new a.y((ae) => {
          (0, k.Xf)(he()).subscribe(ae);
        });
      }
    },
    515: (tt, De, I) => {
      I.d(De, { E: () => k });
      const k = new (I(8306).y)((ae) => ae.complete());
    },
    2076: (tt, De, I) => {
      I.d(De, { D: () => Fe });
      var a = I(8421),
        k = I(9672),
        _e = I(4482),
        he = I(5403);
      function ae(je, fe = 0) {
        return (0, _e.e)((Ke, q) => {
          Ke.subscribe(
            (0, he.x)(
              q,
              (te) => (0, k.f)(q, je, () => q.next(te), fe),
              () => (0, k.f)(q, je, () => q.complete(), fe),
              (te) => (0, k.f)(q, je, () => q.error(te), fe)
            )
          );
        });
      }
      function Re(je, fe = 0) {
        return (0, _e.e)((Ke, q) => {
          q.add(je.schedule(() => Ke.subscribe(q), fe));
        });
      }
      var Te = I(8306),
        se = I(2202),
        ne = I(576);
      function re(je, fe) {
        if (!je) throw new Error("Iterable cannot be null");
        return new Te.y((Ke) => {
          (0, k.f)(Ke, fe, () => {
            const q = je[Symbol.asyncIterator]();
            (0, k.f)(
              Ke,
              fe,
              () => {
                q.next().then((te) => {
                  te.done ? Ke.complete() : Ke.next(te.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var Ne = I(3670),
        Ge = I(8239),
        Ae = I(1144),
        lt = I(6495),
        pt = I(2206),
        gt = I(4532),
        me = I(3260);
      function Fe(je, fe) {
        return fe
          ? (function $e(je, fe) {
              if (null != je) {
                if ((0, Ne.c)(je))
                  return (function Ce(je, fe) {
                    return (0, a.Xf)(je).pipe(Re(fe), ae(fe));
                  })(je, fe);
                if ((0, Ae.z)(je))
                  return (function be(je, fe) {
                    return new Te.y((Ke) => {
                      let q = 0;
                      return fe.schedule(function () {
                        q === je.length
                          ? Ke.complete()
                          : (Ke.next(je[q++]), Ke.closed || this.schedule());
                      });
                    });
                  })(je, fe);
                if ((0, Ge.t)(je))
                  return (function ke(je, fe) {
                    return (0, a.Xf)(je).pipe(Re(fe), ae(fe));
                  })(je, fe);
                if ((0, pt.D)(je)) return re(je, fe);
                if ((0, lt.T)(je))
                  return (function le(je, fe) {
                    return new Te.y((Ke) => {
                      let q;
                      return (
                        (0, k.f)(Ke, fe, () => {
                          (q = je[se.h]()),
                            (0, k.f)(
                              Ke,
                              fe,
                              () => {
                                let te, ie;
                                try {
                                  ({ value: te, done: ie } = q.next());
                                } catch (de) {
                                  return void Ke.error(de);
                                }
                                ie ? Ke.complete() : Ke.next(te);
                              },
                              0,
                              !0
                            );
                        }),
                        () =>
                          (0, ne.m)(null == q ? void 0 : q.return) && q.return()
                      );
                    });
                  })(je, fe);
                if ((0, me.L)(je))
                  return (function Me(je, fe) {
                    return re((0, me.Q)(je), fe);
                  })(je, fe);
              }
              throw (0, gt.z)(je);
            })(je, fe)
          : (0, a.Xf)(je);
      }
    },
    8421: (tt, De, I) => {
      I.d(De, { Xf: () => le });
      var a = I(655),
        k = I(1144),
        _e = I(8239),
        he = I(8306),
        ae = I(3670),
        Re = I(2206),
        Ce = I(4532),
        ke = I(6495),
        Te = I(3260),
        be = I(576),
        se = I(7849),
        ne = I(8822);
      function le(me) {
        if (me instanceof he.y) return me;
        if (null != me) {
          if ((0, ae.c)(me))
            return (function re(me) {
              return new he.y((Me) => {
                const $e = me[ne.L]();
                if ((0, be.m)($e.subscribe)) return $e.subscribe(Me);
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              });
            })(me);
          if ((0, k.z)(me))
            return (function Ne(me) {
              return new he.y((Me) => {
                for (let $e = 0; $e < me.length && !Me.closed; $e++)
                  Me.next(me[$e]);
                Me.complete();
              });
            })(me);
          if ((0, _e.t)(me))
            return (function Ge(me) {
              return new he.y((Me) => {
                me.then(
                  ($e) => {
                    Me.closed || (Me.next($e), Me.complete());
                  },
                  ($e) => Me.error($e)
                ).then(null, se.h);
              });
            })(me);
          if ((0, Re.D)(me)) return lt(me);
          if ((0, ke.T)(me))
            return (function Ae(me) {
              return new he.y((Me) => {
                for (const $e of me) if ((Me.next($e), Me.closed)) return;
                Me.complete();
              });
            })(me);
          if ((0, Te.L)(me))
            return (function pt(me) {
              return lt((0, Te.Q)(me));
            })(me);
        }
        throw (0, Ce.z)(me);
      }
      function lt(me) {
        return new he.y((Me) => {
          (function gt(me, Me) {
            var $e, Fe, je, fe;
            return (0, a.mG)(this, void 0, void 0, function* () {
              try {
                for ($e = (0, a.KL)(me); !(Fe = yield $e.next()).done; )
                  if ((Me.next(Fe.value), Me.closed)) return;
              } catch (Ke) {
                je = { error: Ke };
              } finally {
                try {
                  Fe && !Fe.done && (fe = $e.return) && (yield fe.call($e));
                } finally {
                  if (je) throw je.error;
                }
              }
              Me.complete();
            });
          })(me, Me).catch(($e) => Me.error($e));
        });
      }
    },
    9646: (tt, De, I) => {
      I.d(De, { of: () => _e });
      var a = I(3269),
        k = I(2076);
      function _e(...he) {
        const ae = (0, a.yG)(he);
        return (0, k.D)(he, ae);
      }
    },
    5403: (tt, De, I) => {
      I.d(De, { x: () => k });
      var a = I(930);
      function k(he, ae, Re, Ce, ke) {
        return new _e(he, ae, Re, Ce, ke);
      }
      class _e extends a.Lv {
        constructor(ae, Re, Ce, ke, Te, be) {
          super(ae),
            (this.onFinalize = Te),
            (this.shouldUnsubscribe = be),
            (this._next = Re
              ? function (se) {
                  try {
                    Re(se);
                  } catch (ne) {
                    ae.error(ne);
                  }
                }
              : super._next),
            (this._error = ke
              ? function (se) {
                  try {
                    ke(se);
                  } catch (ne) {
                    ae.error(ne);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = Ce
              ? function () {
                  try {
                    Ce();
                  } catch (se) {
                    ae.error(se);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var ae;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: Re } = this;
            super.unsubscribe(),
              !Re &&
                (null === (ae = this.onFinalize) ||
                  void 0 === ae ||
                  ae.call(this));
          }
        }
      }
    },
    4351: (tt, De, I) => {
      I.d(De, { b: () => _e });
      var a = I(5577),
        k = I(576);
      function _e(he, ae) {
        return (0, k.m)(ae) ? (0, a.z)(he, ae, 1) : (0, a.z)(he, 1);
      }
    },
    1884: (tt, De, I) => {
      I.d(De, { x: () => he });
      var a = I(4671),
        k = I(4482),
        _e = I(5403);
      function he(Re, Ce = a.y) {
        return (
          (Re = null != Re ? Re : ae),
          (0, k.e)((ke, Te) => {
            let be,
              se = !0;
            ke.subscribe(
              (0, _e.x)(Te, (ne) => {
                const le = Ce(ne);
                (se || !Re(be, le)) && ((se = !1), (be = le), Te.next(ne));
              })
            );
          })
        );
      }
      function ae(Re, Ce) {
        return Re === Ce;
      }
    },
    9300: (tt, De, I) => {
      I.d(De, { h: () => _e });
      var a = I(4482),
        k = I(5403);
      function _e(he, ae) {
        return (0, a.e)((Re, Ce) => {
          let ke = 0;
          Re.subscribe(
            (0, k.x)(Ce, (Te) => he.call(ae, Te, ke++) && Ce.next(Te))
          );
        });
      }
    },
    4004: (tt, De, I) => {
      I.d(De, { U: () => _e });
      var a = I(4482),
        k = I(5403);
      function _e(he, ae) {
        return (0, a.e)((Re, Ce) => {
          let ke = 0;
          Re.subscribe(
            (0, k.x)(Ce, (Te) => {
              Ce.next(he.call(ae, Te, ke++));
            })
          );
        });
      }
    },
    8189: (tt, De, I) => {
      I.d(De, { J: () => _e });
      var a = I(5577),
        k = I(4671);
      function _e(he = 1 / 0) {
        return (0, a.z)(k.y, he);
      }
    },
    5577: (tt, De, I) => {
      I.d(De, { z: () => ke });
      var a = I(4004),
        k = I(8421),
        _e = I(4482),
        he = I(9672),
        ae = I(5403),
        Ce = I(576);
      function ke(Te, be, se = 1 / 0) {
        return (0, Ce.m)(be)
          ? ke(
              (ne, le) =>
                (0, a.U)((re, Ne) => be(ne, re, le, Ne))((0, k.Xf)(Te(ne, le))),
              se
            )
          : ("number" == typeof be && (se = be),
            (0, _e.e)((ne, le) =>
              (function Re(Te, be, se, ne, le, re, Ne, Ge) {
                const Ae = [];
                let lt = 0,
                  pt = 0,
                  gt = !1;
                const me = () => {
                    gt && !Ae.length && !lt && be.complete();
                  },
                  Me = (Fe) => (lt < ne ? $e(Fe) : Ae.push(Fe)),
                  $e = (Fe) => {
                    re && be.next(Fe), lt++;
                    let je = !1;
                    (0, k.Xf)(se(Fe, pt++)).subscribe(
                      (0, ae.x)(
                        be,
                        (fe) => {
                          null == le || le(fe), re ? Me(fe) : be.next(fe);
                        },
                        () => {
                          je = !0;
                        },
                        void 0,
                        () => {
                          if (je)
                            try {
                              for (lt--; Ae.length && lt < ne; ) {
                                const fe = Ae.shift();
                                Ne ? (0, he.f)(be, Ne, () => $e(fe)) : $e(fe);
                              }
                              me();
                            } catch (fe) {
                              be.error(fe);
                            }
                        }
                      )
                    );
                  };
                return (
                  Te.subscribe(
                    (0, ae.x)(be, Me, () => {
                      (gt = !0), me();
                    })
                  ),
                  () => {
                    null == Ge || Ge();
                  }
                );
              })(ne, le, Te, se)
            ));
      }
    },
    8675: (tt, De, I) => {
      I.d(De, { O: () => he });
      var a = I(7272),
        k = I(3269),
        _e = I(4482);
      function he(...ae) {
        const Re = (0, k.yG)(ae);
        return (0, _e.e)((Ce, ke) => {
          (Re ? (0, a.z)(ae, Ce, Re) : (0, a.z)(ae, Ce)).subscribe(ke);
        });
      }
    },
    3900: (tt, De, I) => {
      I.d(De, { w: () => he });
      var a = I(8421),
        k = I(4482),
        _e = I(5403);
      function he(ae, Re) {
        return (0, k.e)((Ce, ke) => {
          let Te = null,
            be = 0,
            se = !1;
          const ne = () => se && !Te && ke.complete();
          Ce.subscribe(
            (0, _e.x)(
              ke,
              (le) => {
                null == Te || Te.unsubscribe();
                let re = 0;
                const Ne = be++;
                (0, a.Xf)(ae(le, Ne)).subscribe(
                  (Te = (0, _e.x)(
                    ke,
                    (Ge) => ke.next(Re ? Re(le, Ge, Ne, re++) : Ge),
                    () => {
                      (Te = null), ne();
                    }
                  ))
                );
              },
              () => {
                (se = !0), ne();
              }
            )
          );
        });
      }
    },
    5698: (tt, De, I) => {
      I.d(De, { q: () => he });
      var a = I(515),
        k = I(4482),
        _e = I(5403);
      function he(ae) {
        return ae <= 0
          ? () => a.E
          : (0, k.e)((Re, Ce) => {
              let ke = 0;
              Re.subscribe(
                (0, _e.x)(Ce, (Te) => {
                  ++ke <= ae && (Ce.next(Te), ae <= ke && Ce.complete());
                })
              );
            });
      }
    },
    8505: (tt, De, I) => {
      I.d(De, { b: () => ae });
      var a = I(576),
        k = I(4482),
        _e = I(5403),
        he = I(4671);
      function ae(Re, Ce, ke) {
        const Te =
          (0, a.m)(Re) || Ce || ke ? { next: Re, error: Ce, complete: ke } : Re;
        return Te
          ? (0, k.e)((be, se) => {
              var ne;
              null === (ne = Te.subscribe) || void 0 === ne || ne.call(Te);
              let le = !0;
              be.subscribe(
                (0, _e.x)(
                  se,
                  (re) => {
                    var Ne;
                    null === (Ne = Te.next) || void 0 === Ne || Ne.call(Te, re),
                      se.next(re);
                  },
                  () => {
                    var re;
                    (le = !1),
                      null === (re = Te.complete) ||
                        void 0 === re ||
                        re.call(Te),
                      se.complete();
                  },
                  (re) => {
                    var Ne;
                    (le = !1),
                      null === (Ne = Te.error) ||
                        void 0 === Ne ||
                        Ne.call(Te, re),
                      se.error(re);
                  },
                  () => {
                    var re, Ne;
                    le &&
                      (null === (re = Te.unsubscribe) ||
                        void 0 === re ||
                        re.call(Te)),
                      null === (Ne = Te.finalize) ||
                        void 0 === Ne ||
                        Ne.call(Te);
                  }
                )
              );
            })
          : he.y;
      }
    },
    1566: (tt, De, I) => {
      I.d(De, { P: () => be, z: () => Te });
      var a = I(727);
      class k extends a.w0 {
        constructor(ne, le) {
          super();
        }
        schedule(ne, le = 0) {
          return this;
        }
      }
      const _e = {
        setInterval(se, ne, ...le) {
          const { delegate: re } = _e;
          return (null == re ? void 0 : re.setInterval)
            ? re.setInterval(se, ne, ...le)
            : setInterval(se, ne, ...le);
        },
        clearInterval(se) {
          const { delegate: ne } = _e;
          return ((null == ne ? void 0 : ne.clearInterval) || clearInterval)(
            se
          );
        },
        delegate: void 0,
      };
      var he = I(8737);
      const Re = { now: () => (Re.delegate || Date).now(), delegate: void 0 };
      class Ce {
        constructor(ne, le = Ce.now) {
          (this.schedulerActionCtor = ne), (this.now = le);
        }
        schedule(ne, le = 0, re) {
          return new this.schedulerActionCtor(this, ne).schedule(re, le);
        }
      }
      Ce.now = Re.now;
      const Te = new (class ke extends Ce {
          constructor(ne, le = Ce.now) {
            super(ne, le),
              (this.actions = []),
              (this._active = !1),
              (this._scheduled = void 0);
          }
          flush(ne) {
            const { actions: le } = this;
            if (this._active) return void le.push(ne);
            let re;
            this._active = !0;
            do {
              if ((re = ne.execute(ne.state, ne.delay))) break;
            } while ((ne = le.shift()));
            if (((this._active = !1), re)) {
              for (; (ne = le.shift()); ) ne.unsubscribe();
              throw re;
            }
          }
        })(
          class ae extends k {
            constructor(ne, le) {
              super(ne, le),
                (this.scheduler = ne),
                (this.work = le),
                (this.pending = !1);
            }
            schedule(ne, le = 0) {
              if (this.closed) return this;
              this.state = ne;
              const re = this.id,
                Ne = this.scheduler;
              return (
                null != re && (this.id = this.recycleAsyncId(Ne, re, le)),
                (this.pending = !0),
                (this.delay = le),
                (this.id = this.id || this.requestAsyncId(Ne, this.id, le)),
                this
              );
            }
            requestAsyncId(ne, le, re = 0) {
              return _e.setInterval(ne.flush.bind(ne, this), re);
            }
            recycleAsyncId(ne, le, re = 0) {
              if (null != re && this.delay === re && !1 === this.pending)
                return le;
              _e.clearInterval(le);
            }
            execute(ne, le) {
              if (this.closed) return new Error("executing a cancelled action");
              this.pending = !1;
              const re = this._execute(ne, le);
              if (re) return re;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }
            _execute(ne, le) {
              let Ne,
                re = !1;
              try {
                this.work(ne);
              } catch (Ge) {
                (re = !0),
                  (Ne = Ge || new Error("Scheduled action threw falsy error"));
              }
              if (re) return this.unsubscribe(), Ne;
            }
            unsubscribe() {
              if (!this.closed) {
                const { id: ne, scheduler: le } = this,
                  { actions: re } = le;
                (this.work = this.state = this.scheduler = null),
                  (this.pending = !1),
                  (0, he.P)(re, this),
                  null != ne && (this.id = this.recycleAsyncId(le, ne, null)),
                  (this.delay = null),
                  super.unsubscribe();
              }
            }
          }
        ),
        be = Te;
    },
    3410: (tt, De, I) => {
      I.d(De, { z: () => a });
      const a = {
        setTimeout(k, _e, ...he) {
          const { delegate: ae } = a;
          return (null == ae ? void 0 : ae.setTimeout)
            ? ae.setTimeout(k, _e, ...he)
            : setTimeout(k, _e, ...he);
        },
        clearTimeout(k) {
          const { delegate: _e } = a;
          return ((null == _e ? void 0 : _e.clearTimeout) || clearTimeout)(k);
        },
        delegate: void 0,
      };
    },
    2202: (tt, De, I) => {
      I.d(De, { h: () => k });
      const k = (function a() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      })();
    },
    8822: (tt, De, I) => {
      I.d(De, { L: () => a });
      const a =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    3269: (tt, De, I) => {
      I.d(De, { _6: () => Re, jO: () => he, yG: () => ae });
      var a = I(576),
        k = I(3532);
      function _e(Ce) {
        return Ce[Ce.length - 1];
      }
      function he(Ce) {
        return (0, a.m)(_e(Ce)) ? Ce.pop() : void 0;
      }
      function ae(Ce) {
        return (0, k.K)(_e(Ce)) ? Ce.pop() : void 0;
      }
      function Re(Ce, ke) {
        return "number" == typeof _e(Ce) ? Ce.pop() : ke;
      }
    },
    4742: (tt, De, I) => {
      I.d(De, { D: () => ae });
      const { isArray: a } = Array,
        { getPrototypeOf: k, prototype: _e, keys: he } = Object;
      function ae(Ce) {
        if (1 === Ce.length) {
          const ke = Ce[0];
          if (a(ke)) return { args: ke, keys: null };
          if (
            (function Re(Ce) {
              return Ce && "object" == typeof Ce && k(Ce) === _e;
            })(ke)
          ) {
            const Te = he(ke);
            return { args: Te.map((be) => ke[be]), keys: Te };
          }
        }
        return { args: Ce, keys: null };
      }
    },
    8737: (tt, De, I) => {
      function a(k, _e) {
        if (k) {
          const he = k.indexOf(_e);
          0 <= he && k.splice(he, 1);
        }
      }
      I.d(De, { P: () => a });
    },
    3888: (tt, De, I) => {
      function a(k) {
        const he = k((ae) => {
          Error.call(ae), (ae.stack = new Error().stack);
        });
        return (
          (he.prototype = Object.create(Error.prototype)),
          (he.prototype.constructor = he),
          he
        );
      }
      I.d(De, { d: () => a });
    },
    1810: (tt, De, I) => {
      function a(k, _e) {
        return k.reduce((he, ae, Re) => ((he[ae] = _e[Re]), he), {});
      }
      I.d(De, { n: () => a });
    },
    2806: (tt, De, I) => {
      I.d(De, { O: () => he, x: () => _e });
      var a = I(2416);
      let k = null;
      function _e(ae) {
        if (a.v.useDeprecatedSynchronousErrorHandling) {
          const Re = !k;
          if ((Re && (k = { errorThrown: !1, error: null }), ae(), Re)) {
            const { errorThrown: Ce, error: ke } = k;
            if (((k = null), Ce)) throw ke;
          }
        } else ae();
      }
      function he(ae) {
        a.v.useDeprecatedSynchronousErrorHandling &&
          k &&
          ((k.errorThrown = !0), (k.error = ae));
      }
    },
    9672: (tt, De, I) => {
      function a(k, _e, he, ae = 0, Re = !1) {
        const Ce = _e.schedule(function () {
          he(), Re ? k.add(this.schedule(null, ae)) : this.unsubscribe();
        }, ae);
        if ((k.add(Ce), !Re)) return Ce;
      }
      I.d(De, { f: () => a });
    },
    4671: (tt, De, I) => {
      function a(k) {
        return k;
      }
      I.d(De, { y: () => a });
    },
    1144: (tt, De, I) => {
      I.d(De, { z: () => a });
      const a = (k) =>
        k && "number" == typeof k.length && "function" != typeof k;
    },
    2206: (tt, De, I) => {
      I.d(De, { D: () => k });
      var a = I(576);
      function k(_e) {
        return (
          Symbol.asyncIterator &&
          (0, a.m)(null == _e ? void 0 : _e[Symbol.asyncIterator])
        );
      }
    },
    576: (tt, De, I) => {
      function a(k) {
        return "function" == typeof k;
      }
      I.d(De, { m: () => a });
    },
    3670: (tt, De, I) => {
      I.d(De, { c: () => _e });
      var a = I(8822),
        k = I(576);
      function _e(he) {
        return (0, k.m)(he[a.L]);
      }
    },
    6495: (tt, De, I) => {
      I.d(De, { T: () => _e });
      var a = I(2202),
        k = I(576);
      function _e(he) {
        return (0, k.m)(null == he ? void 0 : he[a.h]);
      }
    },
    8239: (tt, De, I) => {
      I.d(De, { t: () => k });
      var a = I(576);
      function k(_e) {
        return (0, a.m)(null == _e ? void 0 : _e.then);
      }
    },
    3260: (tt, De, I) => {
      I.d(De, { L: () => he, Q: () => _e });
      var a = I(655),
        k = I(576);
      function _e(ae) {
        return (0, a.FC)(this, arguments, function* () {
          const Ce = ae.getReader();
          try {
            for (;;) {
              const { value: ke, done: Te } = yield (0, a.qq)(Ce.read());
              if (Te) return yield (0, a.qq)(void 0);
              yield yield (0, a.qq)(ke);
            }
          } finally {
            Ce.releaseLock();
          }
        });
      }
      function he(ae) {
        return (0, k.m)(null == ae ? void 0 : ae.getReader);
      }
    },
    3532: (tt, De, I) => {
      I.d(De, { K: () => k });
      var a = I(576);
      function k(_e) {
        return _e && (0, a.m)(_e.schedule);
      }
    },
    4482: (tt, De, I) => {
      I.d(De, { A: () => k, e: () => _e });
      var a = I(576);
      function k(he) {
        return (0, a.m)(null == he ? void 0 : he.lift);
      }
      function _e(he) {
        return (ae) => {
          if (k(ae))
            return ae.lift(function (Re) {
              try {
                return he(Re, this);
              } catch (Ce) {
                this.error(Ce);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
    },
    3268: (tt, De, I) => {
      I.d(De, { Z: () => he });
      var a = I(4004);
      const { isArray: k } = Array;
      function he(ae) {
        return (0, a.U)((Re) =>
          (function _e(ae, Re) {
            return k(Re) ? ae(...Re) : ae(Re);
          })(ae, Re)
        );
      }
    },
    5032: (tt, De, I) => {
      function a() {}
      I.d(De, { Z: () => a });
    },
    7849: (tt, De, I) => {
      I.d(De, { h: () => _e });
      var a = I(2416),
        k = I(3410);
      function _e(he) {
        k.z.setTimeout(() => {
          const { onUnhandledError: ae } = a.v;
          if (!ae) throw he;
          ae(he);
        });
      }
    },
    4532: (tt, De, I) => {
      function a(k) {
        return new TypeError(
          `You provided ${
            null !== k && "object" == typeof k ? "an invalid object" : `'${k}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      I.d(De, { z: () => a });
    },
    655: (tt, De, I) => {
      function ke(q, te, ie, de) {
        return new (ie || (ie = Promise))(function (Oe, He) {
          function vt(bt) {
            try {
              st(de.next(bt));
            } catch (ft) {
              He(ft);
            }
          }
          function Ht(bt) {
            try {
              st(de.throw(bt));
            } catch (ft) {
              He(ft);
            }
          }
          function st(bt) {
            bt.done
              ? Oe(bt.value)
              : (function Q(Oe) {
                  return Oe instanceof ie
                    ? Oe
                    : new ie(function (He) {
                        He(Oe);
                      });
                })(bt.value).then(vt, Ht);
          }
          st((de = de.apply(q, te || [])).next());
        });
      }
      function Ae(q) {
        return this instanceof Ae ? ((this.v = q), this) : new Ae(q);
      }
      function lt(q, te, ie) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var Q,
          de = ie.apply(q, te || []),
          Oe = [];
        return (
          (Q = {}),
          He("next"),
          He("throw"),
          He("return"),
          (Q[Symbol.asyncIterator] = function () {
            return this;
          }),
          Q
        );
        function He(nn) {
          de[nn] &&
            (Q[nn] = function (jt) {
              return new Promise(function (wt, $n) {
                Oe.push([nn, jt, wt, $n]) > 1 || vt(nn, jt);
              });
            });
        }
        function vt(nn, jt) {
          try {
            !(function Ht(nn) {
              nn.value instanceof Ae
                ? Promise.resolve(nn.value.v).then(st, bt)
                : ft(Oe[0][2], nn);
            })(de[nn](jt));
          } catch (wt) {
            ft(Oe[0][3], wt);
          }
        }
        function st(nn) {
          vt("next", nn);
        }
        function bt(nn) {
          vt("throw", nn);
        }
        function ft(nn, jt) {
          nn(jt), Oe.shift(), Oe.length && vt(Oe[0][0], Oe[0][1]);
        }
      }
      function gt(q) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var ie,
          te = q[Symbol.asyncIterator];
        return te
          ? te.call(q)
          : ((q = (function ne(q) {
              var te = "function" == typeof Symbol && Symbol.iterator,
                ie = te && q[te],
                de = 0;
              if (ie) return ie.call(q);
              if (q && "number" == typeof q.length)
                return {
                  next: function () {
                    return (
                      q && de >= q.length && (q = void 0),
                      { value: q && q[de++], done: !q }
                    );
                  },
                };
              throw new TypeError(
                te
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            })(q)),
            (ie = {}),
            de("next"),
            de("throw"),
            de("return"),
            (ie[Symbol.asyncIterator] = function () {
              return this;
            }),
            ie);
        function de(Oe) {
          ie[Oe] =
            q[Oe] &&
            function (He) {
              return new Promise(function (vt, Ht) {
                !(function Q(Oe, He, vt, Ht) {
                  Promise.resolve(Ht).then(function (st) {
                    Oe({ value: st, done: vt });
                  }, He);
                })(vt, Ht, (He = q[Oe](He)).done, He.value);
              });
            };
        }
      }
      I.d(De, { FC: () => lt, KL: () => gt, mG: () => ke, qq: () => Ae });
    },
    9808: (tt, De, I) => {
      I.d(De, {
        Do: () => me,
        EM: () => Jr,
        HT: () => ae,
        JF: () => fr,
        JJ: () => mo,
        K0: () => Ce,
        Mx: () => Nt,
        NF: () => xi,
        O5: () => di,
        Ov: () => Kn,
        S$: () => Ae,
        V_: () => be,
        Ye: () => Me,
        b0: () => gt,
        bD: () => $r,
        ez: () => Bo,
        lw: () => ke,
        mk: () => qt,
        mr: () => pt,
        q: () => _e,
        rS: () => jr,
        sg: () => oi,
        tP: () => br,
        uU: () => $i,
        w_: () => Re,
      });
      var a = I(1223);
      let k = null;
      function _e() {
        return k;
      }
      function ae(D) {
        k || (k = D);
      }
      class Re {}
      const Ce = new a.OlP("DocumentToken");
      let ke = (() => {
        class D {
          historyGo(E) {
            throw new Error("Not implemented");
          }
        }
        return (
          (D.ɵfac = function (E) {
            return new (E || D)();
          }),
          (D.ɵprov = a.Yz7({
            token: D,
            factory: function () {
              return (function Te() {
                return (0, a.LFG)(se);
              })();
            },
            providedIn: "platform",
          })),
          D
        );
      })();
      const be = new a.OlP("Location Initialized");
      let se = (() => {
        class D extends ke {
          constructor(E) {
            super(), (this._doc = E), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return _e().getBaseHref(this._doc);
          }
          onPopState(E) {
            const R = _e().getGlobalEventTarget(this._doc, "window");
            return (
              R.addEventListener("popstate", E, !1),
              () => R.removeEventListener("popstate", E)
            );
          }
          onHashChange(E) {
            const R = _e().getGlobalEventTarget(this._doc, "window");
            return (
              R.addEventListener("hashchange", E, !1),
              () => R.removeEventListener("hashchange", E)
            );
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(E) {
            this.location.pathname = E;
          }
          pushState(E, R, H) {
            ne() ? this._history.pushState(E, R, H) : (this.location.hash = H);
          }
          replaceState(E, R, H) {
            ne()
              ? this._history.replaceState(E, R, H)
              : (this.location.hash = H);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(E = 0) {
            this._history.go(E);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (D.ɵfac = function (E) {
            return new (E || D)(a.LFG(Ce));
          }),
          (D.ɵprov = a.Yz7({
            token: D,
            factory: function () {
              return (function le() {
                return new se((0, a.LFG)(Ce));
              })();
            },
            providedIn: "platform",
          })),
          D
        );
      })();
      function ne() {
        return !!window.history.pushState;
      }
      function re(D, M) {
        if (0 == D.length) return M;
        if (0 == M.length) return D;
        let E = 0;
        return (
          D.endsWith("/") && E++,
          M.startsWith("/") && E++,
          2 == E ? D + M.substring(1) : 1 == E ? D + M : D + "/" + M
        );
      }
      function Ne(D) {
        const M = D.match(/#|\?|$/),
          E = (M && M.index) || D.length;
        return D.slice(0, E - ("/" === D[E - 1] ? 1 : 0)) + D.slice(E);
      }
      function Ge(D) {
        return D && "?" !== D[0] ? "?" + D : D;
      }
      let Ae = (() => {
        class D {
          historyGo(E) {
            throw new Error("Not implemented");
          }
        }
        return (
          (D.ɵfac = function (E) {
            return new (E || D)();
          }),
          (D.ɵprov = a.Yz7({
            token: D,
            factory: function () {
              return (function lt(D) {
                const M = (0, a.LFG)(Ce).location;
                return new gt((0, a.LFG)(ke), (M && M.origin) || "");
              })();
            },
            providedIn: "root",
          })),
          D
        );
      })();
      const pt = new a.OlP("appBaseHref");
      let gt = (() => {
          class D extends Ae {
            constructor(E, R) {
              if (
                (super(),
                (this._platformLocation = E),
                (this._removeListenerFns = []),
                null == R && (R = this._platformLocation.getBaseHrefFromDOM()),
                null == R)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              this._baseHref = R;
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(E) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(E),
                this._platformLocation.onHashChange(E)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(E) {
              return re(this._baseHref, E);
            }
            path(E = !1) {
              const R =
                  this._platformLocation.pathname +
                  Ge(this._platformLocation.search),
                H = this._platformLocation.hash;
              return H && E ? `${R}${H}` : R;
            }
            pushState(E, R, H, ce) {
              const Ee = this.prepareExternalUrl(H + Ge(ce));
              this._platformLocation.pushState(E, R, Ee);
            }
            replaceState(E, R, H, ce) {
              const Ee = this.prepareExternalUrl(H + Ge(ce));
              this._platformLocation.replaceState(E, R, Ee);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(E = 0) {
              var R, H;
              null === (H = (R = this._platformLocation).historyGo) ||
                void 0 === H ||
                H.call(R, E);
            }
          }
          return (
            (D.ɵfac = function (E) {
              return new (E || D)(a.LFG(ke), a.LFG(pt, 8));
            }),
            (D.ɵprov = a.Yz7({ token: D, factory: D.ɵfac })),
            D
          );
        })(),
        me = (() => {
          class D extends Ae {
            constructor(E, R) {
              super(),
                (this._platformLocation = E),
                (this._baseHref = ""),
                (this._removeListenerFns = []),
                null != R && (this._baseHref = R);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(E) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(E),
                this._platformLocation.onHashChange(E)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(E = !1) {
              let R = this._platformLocation.hash;
              return null == R && (R = "#"), R.length > 0 ? R.substring(1) : R;
            }
            prepareExternalUrl(E) {
              const R = re(this._baseHref, E);
              return R.length > 0 ? "#" + R : R;
            }
            pushState(E, R, H, ce) {
              let Ee = this.prepareExternalUrl(H + Ge(ce));
              0 == Ee.length && (Ee = this._platformLocation.pathname),
                this._platformLocation.pushState(E, R, Ee);
            }
            replaceState(E, R, H, ce) {
              let Ee = this.prepareExternalUrl(H + Ge(ce));
              0 == Ee.length && (Ee = this._platformLocation.pathname),
                this._platformLocation.replaceState(E, R, Ee);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(E = 0) {
              var R, H;
              null === (H = (R = this._platformLocation).historyGo) ||
                void 0 === H ||
                H.call(R, E);
            }
          }
          return (
            (D.ɵfac = function (E) {
              return new (E || D)(a.LFG(ke), a.LFG(pt, 8));
            }),
            (D.ɵprov = a.Yz7({ token: D, factory: D.ɵfac })),
            D
          );
        })(),
        Me = (() => {
          class D {
            constructor(E, R) {
              (this._subject = new a.vpe()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = E);
              const H = this._platformStrategy.getBaseHref();
              (this._platformLocation = R),
                (this._baseHref = Ne(je(H))),
                this._platformStrategy.onPopState((ce) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: ce.state,
                    type: ce.type,
                  });
                });
            }
            path(E = !1) {
              return this.normalize(this._platformStrategy.path(E));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(E, R = "") {
              return this.path() == this.normalize(E + Ge(R));
            }
            normalize(E) {
              return D.stripTrailingSlash(
                (function Fe(D, M) {
                  return D && M.startsWith(D) ? M.substring(D.length) : M;
                })(this._baseHref, je(E))
              );
            }
            prepareExternalUrl(E) {
              return (
                E && "/" !== E[0] && (E = "/" + E),
                this._platformStrategy.prepareExternalUrl(E)
              );
            }
            go(E, R = "", H = null) {
              this._platformStrategy.pushState(H, "", E, R),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(E + Ge(R)),
                  H
                );
            }
            replaceState(E, R = "", H = null) {
              this._platformStrategy.replaceState(H, "", E, R),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(E + Ge(R)),
                  H
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            historyGo(E = 0) {
              var R, H;
              null === (H = (R = this._platformStrategy).historyGo) ||
                void 0 === H ||
                H.call(R, E);
            }
            onUrlChange(E) {
              this._urlChangeListeners.push(E),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((R) => {
                    this._notifyUrlChangeListeners(R.url, R.state);
                  }));
            }
            _notifyUrlChangeListeners(E = "", R) {
              this._urlChangeListeners.forEach((H) => H(E, R));
            }
            subscribe(E, R, H) {
              return this._subject.subscribe({
                next: E,
                error: R,
                complete: H,
              });
            }
          }
          return (
            (D.normalizeQueryParams = Ge),
            (D.joinWithSlash = re),
            (D.stripTrailingSlash = Ne),
            (D.ɵfac = function (E) {
              return new (E || D)(a.LFG(Ae), a.LFG(ke));
            }),
            (D.ɵprov = a.Yz7({
              token: D,
              factory: function () {
                return (function $e() {
                  return new Me((0, a.LFG)(Ae), (0, a.LFG)(ke));
                })();
              },
              providedIn: "root",
            })),
            D
          );
        })();
      function je(D) {
        return D.replace(/\/index.html$/, "");
      }
      var Ke = (() => (
          ((Ke = Ke || {})[(Ke.Decimal = 0)] = "Decimal"),
          (Ke[(Ke.Percent = 1)] = "Percent"),
          (Ke[(Ke.Currency = 2)] = "Currency"),
          (Ke[(Ke.Scientific = 3)] = "Scientific"),
          Ke
        ))(),
        te = (() => (
          ((te = te || {})[(te.Format = 0)] = "Format"),
          (te[(te.Standalone = 1)] = "Standalone"),
          te
        ))(),
        ie = (() => (
          ((ie = ie || {})[(ie.Narrow = 0)] = "Narrow"),
          (ie[(ie.Abbreviated = 1)] = "Abbreviated"),
          (ie[(ie.Wide = 2)] = "Wide"),
          (ie[(ie.Short = 3)] = "Short"),
          ie
        ))(),
        de = (() => (
          ((de = de || {})[(de.Short = 0)] = "Short"),
          (de[(de.Medium = 1)] = "Medium"),
          (de[(de.Long = 2)] = "Long"),
          (de[(de.Full = 3)] = "Full"),
          de
        ))(),
        Q = (() => (
          ((Q = Q || {})[(Q.Decimal = 0)] = "Decimal"),
          (Q[(Q.Group = 1)] = "Group"),
          (Q[(Q.List = 2)] = "List"),
          (Q[(Q.PercentSign = 3)] = "PercentSign"),
          (Q[(Q.PlusSign = 4)] = "PlusSign"),
          (Q[(Q.MinusSign = 5)] = "MinusSign"),
          (Q[(Q.Exponential = 6)] = "Exponential"),
          (Q[(Q.SuperscriptingExponent = 7)] = "SuperscriptingExponent"),
          (Q[(Q.PerMille = 8)] = "PerMille"),
          (Q[(Q.Infinity = 9)] = "Infinity"),
          (Q[(Q.NaN = 10)] = "NaN"),
          (Q[(Q.TimeSeparator = 11)] = "TimeSeparator"),
          (Q[(Q.CurrencyDecimal = 12)] = "CurrencyDecimal"),
          (Q[(Q.CurrencyGroup = 13)] = "CurrencyGroup"),
          Q
        ))();
      function jt(D, M) {
        return rn((0, a.cg1)(D)[a.wAp.DateFormat], M);
      }
      function wt(D, M) {
        return rn((0, a.cg1)(D)[a.wAp.TimeFormat], M);
      }
      function $n(D, M) {
        return rn((0, a.cg1)(D)[a.wAp.DateTimeFormat], M);
      }
      function Rt(D, M) {
        const E = (0, a.cg1)(D),
          R = E[a.wAp.NumberSymbols][M];
        if (void 0 === R) {
          if (M === Q.CurrencyDecimal) return E[a.wAp.NumberSymbols][Q.Decimal];
          if (M === Q.CurrencyGroup) return E[a.wAp.NumberSymbols][Q.Group];
        }
        return R;
      }
      function zn(D) {
        if (!D[a.wAp.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              D[a.wAp.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function rn(D, M) {
        for (let E = M; E > -1; E--) if (void 0 !== D[E]) return D[E];
        throw new Error("Locale data API: locale data undefined");
      }
      function Jt(D) {
        const [M, E] = D.split(":");
        return { hours: +M, minutes: +E };
      }
      const U =
          /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        j = {},
        Z =
          /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
      var oe = (() => (
          ((oe = oe || {})[(oe.Short = 0)] = "Short"),
          (oe[(oe.ShortGMT = 1)] = "ShortGMT"),
          (oe[(oe.Long = 2)] = "Long"),
          (oe[(oe.Extended = 3)] = "Extended"),
          oe
        ))(),
        Se = (() => (
          ((Se = Se || {})[(Se.FullYear = 0)] = "FullYear"),
          (Se[(Se.Month = 1)] = "Month"),
          (Se[(Se.Date = 2)] = "Date"),
          (Se[(Se.Hours = 3)] = "Hours"),
          (Se[(Se.Minutes = 4)] = "Minutes"),
          (Se[(Se.Seconds = 5)] = "Seconds"),
          (Se[(Se.FractionalSeconds = 6)] = "FractionalSeconds"),
          (Se[(Se.Day = 7)] = "Day"),
          Se
        ))(),
        Pe = (() => (
          ((Pe = Pe || {})[(Pe.DayPeriods = 0)] = "DayPeriods"),
          (Pe[(Pe.Days = 1)] = "Days"),
          (Pe[(Pe.Months = 2)] = "Months"),
          (Pe[(Pe.Eras = 3)] = "Eras"),
          Pe
        ))();
      function It(D, M, E, R) {
        let H = (function gn(D) {
          if (Ci(D)) return D;
          if ("number" == typeof D && !isNaN(D)) return new Date(D);
          if ("string" == typeof D) {
            if (((D = D.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(D))) {
              const [H, ce = 1, Ee = 1] = D.split("-").map((qe) => +qe);
              return it(H, ce - 1, Ee);
            }
            const E = parseFloat(D);
            if (!isNaN(D - E)) return new Date(E);
            let R;
            if ((R = D.match(U)))
              return (function Yn(D) {
                const M = new Date(0);
                let E = 0,
                  R = 0;
                const H = D[8] ? M.setUTCFullYear : M.setFullYear,
                  ce = D[8] ? M.setUTCHours : M.setHours;
                D[9] &&
                  ((E = Number(D[9] + D[10])), (R = Number(D[9] + D[11]))),
                  H.call(M, Number(D[1]), Number(D[2]) - 1, Number(D[3]));
                const Ee = Number(D[4] || 0) - E,
                  qe = Number(D[5] || 0) - R,
                  ot = Number(D[6] || 0),
                  Bt = Math.floor(1e3 * parseFloat("0." + (D[7] || 0)));
                return ce.call(M, Ee, qe, ot, Bt), M;
              })(R);
          }
          const M = new Date(D);
          if (!Ci(M)) throw new Error(`Unable to convert "${D}" into a date`);
          return M;
        })(D);
        M = Tt(E, M) || M;
        let qe,
          Ee = [];
        for (; M; ) {
          if (((qe = Z.exec(M)), !qe)) {
            Ee.push(M);
            break;
          }
          {
            Ee = Ee.concat(qe.slice(1));
            const zt = Ee.pop();
            if (!zt) break;
            M = zt;
          }
        }
        let ot = H.getTimezoneOffset();
        R &&
          ((ot = at(R, ot)),
          (H = (function li(D, M, E) {
            const R = E ? -1 : 1,
              H = D.getTimezoneOffset();
            return (function $t(D, M) {
              return (
                (D = new Date(D.getTime())).setMinutes(D.getMinutes() + M), D
              );
            })(D, R * (at(M, H) - H));
          })(H, R, !0)));
        let Bt = "";
        return (
          Ee.forEach((zt) => {
            const et = (function en(D) {
              if (ri[D]) return ri[D];
              let M;
              switch (D) {
                case "G":
                case "GG":
                case "GGG":
                  M = yt(Pe.Eras, ie.Abbreviated);
                  break;
                case "GGGG":
                  M = yt(Pe.Eras, ie.Wide);
                  break;
                case "GGGGG":
                  M = yt(Pe.Eras, ie.Narrow);
                  break;
                case "y":
                  M = Be(Se.FullYear, 1, 0, !1, !0);
                  break;
                case "yy":
                  M = Be(Se.FullYear, 2, 0, !0, !0);
                  break;
                case "yyy":
                  M = Be(Se.FullYear, 3, 0, !1, !0);
                  break;
                case "yyyy":
                  M = Be(Se.FullYear, 4, 0, !1, !0);
                  break;
                case "Y":
                  M = _i(1);
                  break;
                case "YY":
                  M = _i(2, !0);
                  break;
                case "YYY":
                  M = _i(3);
                  break;
                case "YYYY":
                  M = _i(4);
                  break;
                case "M":
                case "L":
                  M = Be(Se.Month, 1, 1);
                  break;
                case "MM":
                case "LL":
                  M = Be(Se.Month, 2, 1);
                  break;
                case "MMM":
                  M = yt(Pe.Months, ie.Abbreviated);
                  break;
                case "MMMM":
                  M = yt(Pe.Months, ie.Wide);
                  break;
                case "MMMMM":
                  M = yt(Pe.Months, ie.Narrow);
                  break;
                case "LLL":
                  M = yt(Pe.Months, ie.Abbreviated, te.Standalone);
                  break;
                case "LLLL":
                  M = yt(Pe.Months, ie.Wide, te.Standalone);
                  break;
                case "LLLLL":
                  M = yt(Pe.Months, ie.Narrow, te.Standalone);
                  break;
                case "w":
                  M = Dt(1);
                  break;
                case "ww":
                  M = Dt(2);
                  break;
                case "W":
                  M = Dt(1, !0);
                  break;
                case "d":
                  M = Be(Se.Date, 1);
                  break;
                case "dd":
                  M = Be(Se.Date, 2);
                  break;
                case "c":
                case "cc":
                  M = Be(Se.Day, 1);
                  break;
                case "ccc":
                  M = yt(Pe.Days, ie.Abbreviated, te.Standalone);
                  break;
                case "cccc":
                  M = yt(Pe.Days, ie.Wide, te.Standalone);
                  break;
                case "ccccc":
                  M = yt(Pe.Days, ie.Narrow, te.Standalone);
                  break;
                case "cccccc":
                  M = yt(Pe.Days, ie.Short, te.Standalone);
                  break;
                case "E":
                case "EE":
                case "EEE":
                  M = yt(Pe.Days, ie.Abbreviated);
                  break;
                case "EEEE":
                  M = yt(Pe.Days, ie.Wide);
                  break;
                case "EEEEE":
                  M = yt(Pe.Days, ie.Narrow);
                  break;
                case "EEEEEE":
                  M = yt(Pe.Days, ie.Short);
                  break;
                case "a":
                case "aa":
                case "aaa":
                  M = yt(Pe.DayPeriods, ie.Abbreviated);
                  break;
                case "aaaa":
                  M = yt(Pe.DayPeriods, ie.Wide);
                  break;
                case "aaaaa":
                  M = yt(Pe.DayPeriods, ie.Narrow);
                  break;
                case "b":
                case "bb":
                case "bbb":
                  M = yt(Pe.DayPeriods, ie.Abbreviated, te.Standalone, !0);
                  break;
                case "bbbb":
                  M = yt(Pe.DayPeriods, ie.Wide, te.Standalone, !0);
                  break;
                case "bbbbb":
                  M = yt(Pe.DayPeriods, ie.Narrow, te.Standalone, !0);
                  break;
                case "B":
                case "BB":
                case "BBB":
                  M = yt(Pe.DayPeriods, ie.Abbreviated, te.Format, !0);
                  break;
                case "BBBB":
                  M = yt(Pe.DayPeriods, ie.Wide, te.Format, !0);
                  break;
                case "BBBBB":
                  M = yt(Pe.DayPeriods, ie.Narrow, te.Format, !0);
                  break;
                case "h":
                  M = Be(Se.Hours, 1, -12);
                  break;
                case "hh":
                  M = Be(Se.Hours, 2, -12);
                  break;
                case "H":
                  M = Be(Se.Hours, 1);
                  break;
                case "HH":
                  M = Be(Se.Hours, 2);
                  break;
                case "m":
                  M = Be(Se.Minutes, 1);
                  break;
                case "mm":
                  M = Be(Se.Minutes, 2);
                  break;
                case "s":
                  M = Be(Se.Seconds, 1);
                  break;
                case "ss":
                  M = Be(Se.Seconds, 2);
                  break;
                case "S":
                  M = Be(Se.FractionalSeconds, 1);
                  break;
                case "SS":
                  M = Be(Se.FractionalSeconds, 2);
                  break;
                case "SSS":
                  M = Be(Se.FractionalSeconds, 3);
                  break;
                case "Z":
                case "ZZ":
                case "ZZZ":
                  M = cn(oe.Short);
                  break;
                case "ZZZZZ":
                  M = cn(oe.Extended);
                  break;
                case "O":
                case "OO":
                case "OOO":
                case "z":
                case "zz":
                case "zzz":
                  M = cn(oe.ShortGMT);
                  break;
                case "OOOO":
                case "ZZZZ":
                case "zzzz":
                  M = cn(oe.Long);
                  break;
                default:
                  return null;
              }
              return (ri[D] = M), M;
            })(zt);
            Bt += et
              ? et(H, E, ot)
              : "''" === zt
              ? "'"
              : zt.replace(/(^'|'$)/g, "").replace(/''/g, "'");
          }),
          Bt
        );
      }
      function it(D, M, E) {
        const R = new Date(0);
        return R.setFullYear(D, M, E), R.setHours(0, 0, 0), R;
      }
      function Tt(D, M) {
        const E = (function He(D) {
          return (0, a.cg1)(D)[a.wAp.LocaleId];
        })(D);
        if (((j[E] = j[E] || {}), j[E][M])) return j[E][M];
        let R = "";
        switch (M) {
          case "shortDate":
            R = jt(D, de.Short);
            break;
          case "mediumDate":
            R = jt(D, de.Medium);
            break;
          case "longDate":
            R = jt(D, de.Long);
            break;
          case "fullDate":
            R = jt(D, de.Full);
            break;
          case "shortTime":
            R = wt(D, de.Short);
            break;
          case "mediumTime":
            R = wt(D, de.Medium);
            break;
          case "longTime":
            R = wt(D, de.Long);
            break;
          case "fullTime":
            R = wt(D, de.Full);
            break;
          case "short":
            const H = Tt(D, "shortTime"),
              ce = Tt(D, "shortDate");
            R = Kt($n(D, de.Short), [H, ce]);
            break;
          case "medium":
            const Ee = Tt(D, "mediumTime"),
              qe = Tt(D, "mediumDate");
            R = Kt($n(D, de.Medium), [Ee, qe]);
            break;
          case "long":
            const ot = Tt(D, "longTime"),
              Bt = Tt(D, "longDate");
            R = Kt($n(D, de.Long), [ot, Bt]);
            break;
          case "full":
            const zt = Tt(D, "fullTime"),
              et = Tt(D, "fullDate");
            R = Kt($n(D, de.Full), [zt, et]);
        }
        return R && (j[E][M] = R), R;
      }
      function Kt(D, M) {
        return (
          M &&
            (D = D.replace(/\{([^}]+)}/g, function (E, R) {
              return null != M && R in M ? M[R] : E;
            })),
          D
        );
      }
      function on(D, M, E = "-", R, H) {
        let ce = "";
        (D < 0 || (H && D <= 0)) && (H ? (D = 1 - D) : ((D = -D), (ce = E)));
        let Ee = String(D);
        for (; Ee.length < M; ) Ee = "0" + Ee;
        return R && (Ee = Ee.substr(Ee.length - M)), ce + Ee;
      }
      function Be(D, M, E = 0, R = !1, H = !1) {
        return function (ce, Ee) {
          let qe = (function St(D, M) {
            switch (D) {
              case Se.FullYear:
                return M.getFullYear();
              case Se.Month:
                return M.getMonth();
              case Se.Date:
                return M.getDate();
              case Se.Hours:
                return M.getHours();
              case Se.Minutes:
                return M.getMinutes();
              case Se.Seconds:
                return M.getSeconds();
              case Se.FractionalSeconds:
                return M.getMilliseconds();
              case Se.Day:
                return M.getDay();
              default:
                throw new Error(`Unknown DateType value "${D}".`);
            }
          })(D, ce);
          if (((E > 0 || qe > -E) && (qe += E), D === Se.Hours))
            0 === qe && -12 === E && (qe = 12);
          else if (D === Se.FractionalSeconds)
            return (function gi(D, M) {
              return on(D, 3).substr(0, M);
            })(qe, M);
          const ot = Rt(Ee, Q.MinusSign);
          return on(qe, M, ot, R, H);
        };
      }
      function yt(D, M, E = te.Format, R = !1) {
        return function (H, ce) {
          return (function qi(D, M, E, R, H, ce) {
            switch (E) {
              case Pe.Months:
                return (function st(D, M, E) {
                  const R = (0, a.cg1)(D),
                    ce = rn(
                      [R[a.wAp.MonthsFormat], R[a.wAp.MonthsStandalone]],
                      M
                    );
                  return rn(ce, E);
                })(M, H, R)[D.getMonth()];
              case Pe.Days:
                return (function Ht(D, M, E) {
                  const R = (0, a.cg1)(D),
                    ce = rn([R[a.wAp.DaysFormat], R[a.wAp.DaysStandalone]], M);
                  return rn(ce, E);
                })(M, H, R)[D.getDay()];
              case Pe.DayPeriods:
                const Ee = D.getHours(),
                  qe = D.getMinutes();
                if (ce) {
                  const Bt = (function ti(D) {
                      const M = (0, a.cg1)(D);
                      return (
                        zn(M),
                        (M[a.wAp.ExtraData][2] || []).map((R) =>
                          "string" == typeof R ? Jt(R) : [Jt(R[0]), Jt(R[1])]
                        )
                      );
                    })(M),
                    zt = (function ni(D, M, E) {
                      const R = (0, a.cg1)(D);
                      zn(R);
                      const ce =
                        rn([R[a.wAp.ExtraData][0], R[a.wAp.ExtraData][1]], M) ||
                        [];
                      return rn(ce, E) || [];
                    })(M, H, R),
                    et = Bt.findIndex((mn) => {
                      if (Array.isArray(mn)) {
                        const [hn, Cn] = mn,
                          xn = Ee >= hn.hours && qe >= hn.minutes,
                          Pi =
                            Ee < Cn.hours ||
                            (Ee === Cn.hours && qe < Cn.minutes);
                        if (hn.hours < Cn.hours) {
                          if (xn && Pi) return !0;
                        } else if (xn || Pi) return !0;
                      } else if (mn.hours === Ee && mn.minutes === qe)
                        return !0;
                      return !1;
                    });
                  if (-1 !== et) return zt[et];
                }
                return (function vt(D, M, E) {
                  const R = (0, a.cg1)(D),
                    ce = rn(
                      [
                        R[a.wAp.DayPeriodsFormat],
                        R[a.wAp.DayPeriodsStandalone],
                      ],
                      M
                    );
                  return rn(ce, E);
                })(M, H, R)[Ee < 12 ? 0 : 1];
              case Pe.Eras:
                return (function bt(D, M) {
                  return rn((0, a.cg1)(D)[a.wAp.Eras], M);
                })(M, R)[D.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error(`unexpected translation type ${E}`);
            }
          })(H, ce, D, M, E, R);
        };
      }
      function cn(D) {
        return function (M, E, R) {
          const H = -1 * R,
            ce = Rt(E, Q.MinusSign),
            Ee = H > 0 ? Math.floor(H / 60) : Math.ceil(H / 60);
          switch (D) {
            case oe.Short:
              return (
                (H >= 0 ? "+" : "") +
                on(Ee, 2, ce) +
                on(Math.abs(H % 60), 2, ce)
              );
            case oe.ShortGMT:
              return "GMT" + (H >= 0 ? "+" : "") + on(Ee, 1, ce);
            case oe.Long:
              return (
                "GMT" +
                (H >= 0 ? "+" : "") +
                on(Ee, 2, ce) +
                ":" +
                on(Math.abs(H % 60), 2, ce)
              );
            case oe.Extended:
              return 0 === R
                ? "Z"
                : (H >= 0 ? "+" : "") +
                    on(Ee, 2, ce) +
                    ":" +
                    on(Math.abs(H % 60), 2, ce);
            default:
              throw new Error(`Unknown zone width "${D}"`);
          }
        };
      }
      function ii(D) {
        return it(
          D.getFullYear(),
          D.getMonth(),
          D.getDate() + (4 - D.getDay())
        );
      }
      function Dt(D, M = !1) {
        return function (E, R) {
          let H;
          if (M) {
            const ce = new Date(E.getFullYear(), E.getMonth(), 1).getDay() - 1,
              Ee = E.getDate();
            H = 1 + Math.floor((Ee + ce) / 7);
          } else {
            const ce = ii(E),
              Ee = (function Di(D) {
                const M = it(D, 0, 1).getDay();
                return it(D, 0, 1 + (M <= 4 ? 4 : 11) - M);
              })(ce.getFullYear()),
              qe = ce.getTime() - Ee.getTime();
            H = 1 + Math.round(qe / 6048e5);
          }
          return on(H, D, Rt(R, Q.MinusSign));
        };
      }
      function _i(D, M = !1) {
        return function (E, R) {
          return on(ii(E).getFullYear(), D, Rt(R, Q.MinusSign), M);
        };
      }
      const ri = {};
      function at(D, M) {
        D = D.replace(/:/g, "");
        const E = Date.parse("Jan 01, 1970 00:00:00 " + D) / 6e4;
        return isNaN(E) ? M : E;
      }
      function Ci(D) {
        return D instanceof Date && !isNaN(D.valueOf());
      }
      const vi = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
      function dn(D) {
        const M = parseInt(D);
        if (isNaN(M))
          throw new Error("Invalid integer literal when parsing " + D);
        return M;
      }
      function Nt(D, M) {
        M = encodeURIComponent(M);
        for (const E of D.split(";")) {
          const R = E.indexOf("="),
            [H, ce] = -1 == R ? [E, ""] : [E.slice(0, R), E.slice(R + 1)];
          if (H.trim() === M) return decodeURIComponent(ce);
        }
        return null;
      }
      let qt = (() => {
        class D {
          constructor(E, R, H, ce) {
            (this._iterableDiffers = E),
              (this._keyValueDiffers = R),
              (this._ngEl = H),
              (this._renderer = ce),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(E) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                "string" == typeof E ? E.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(E) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = "string" == typeof E ? E.split(/\s+/) : E),
              this._rawClass &&
                ((0, a.sIi)(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const E = this._iterableDiffer.diff(this._rawClass);
              E && this._applyIterableChanges(E);
            } else if (this._keyValueDiffer) {
              const E = this._keyValueDiffer.diff(this._rawClass);
              E && this._applyKeyValueChanges(E);
            }
          }
          _applyKeyValueChanges(E) {
            E.forEachAddedItem((R) => this._toggleClass(R.key, R.currentValue)),
              E.forEachChangedItem((R) =>
                this._toggleClass(R.key, R.currentValue)
              ),
              E.forEachRemovedItem((R) => {
                R.previousValue && this._toggleClass(R.key, !1);
              });
          }
          _applyIterableChanges(E) {
            E.forEachAddedItem((R) => {
              if ("string" != typeof R.item)
                throw new Error(
                  `NgClass can only toggle CSS classes expressed as strings, got ${(0,
                  a.AaK)(R.item)}`
                );
              this._toggleClass(R.item, !0);
            }),
              E.forEachRemovedItem((R) => this._toggleClass(R.item, !1));
          }
          _applyClasses(E) {
            E &&
              (Array.isArray(E) || E instanceof Set
                ? E.forEach((R) => this._toggleClass(R, !0))
                : Object.keys(E).forEach((R) => this._toggleClass(R, !!E[R])));
          }
          _removeClasses(E) {
            E &&
              (Array.isArray(E) || E instanceof Set
                ? E.forEach((R) => this._toggleClass(R, !1))
                : Object.keys(E).forEach((R) => this._toggleClass(R, !1)));
          }
          _toggleClass(E, R) {
            (E = E.trim()) &&
              E.split(/\s+/g).forEach((H) => {
                R
                  ? this._renderer.addClass(this._ngEl.nativeElement, H)
                  : this._renderer.removeClass(this._ngEl.nativeElement, H);
              });
          }
        }
        return (
          (D.ɵfac = function (E) {
            return new (E || D)(
              a.Y36(a.ZZ4),
              a.Y36(a.aQg),
              a.Y36(a.SBq),
              a.Y36(a.Qsj)
            );
          }),
          (D.ɵdir = a.lG2({
            type: D,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
          })),
          D
        );
      })();
      class fn {
        constructor(M, E, R, H) {
          (this.$implicit = M),
            (this.ngForOf = E),
            (this.index = R),
            (this.count = H);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let oi = (() => {
        class D {
          constructor(E, R, H) {
            (this._viewContainer = E),
              (this._template = R),
              (this._differs = H),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(E) {
            (this._ngForOf = E), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(E) {
            this._trackByFn = E;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(E) {
            E && (this._template = E);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const E = this._ngForOf;
              !this._differ &&
                E &&
                (this._differ = this._differs
                  .find(E)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const E = this._differ.diff(this._ngForOf);
              E && this._applyChanges(E);
            }
          }
          _applyChanges(E) {
            const R = this._viewContainer;
            E.forEachOperation((H, ce, Ee) => {
              if (null == H.previousIndex)
                R.createEmbeddedView(
                  this._template,
                  new fn(H.item, this._ngForOf, -1, -1),
                  null === Ee ? void 0 : Ee
                );
              else if (null == Ee) R.remove(null === ce ? void 0 : ce);
              else if (null !== ce) {
                const qe = R.get(ce);
                R.move(qe, Ee), Wt(qe, H);
              }
            });
            for (let H = 0, ce = R.length; H < ce; H++) {
              const qe = R.get(H).context;
              (qe.index = H), (qe.count = ce), (qe.ngForOf = this._ngForOf);
            }
            E.forEachIdentityChange((H) => {
              Wt(R.get(H.currentIndex), H);
            });
          }
          static ngTemplateContextGuard(E, R) {
            return !0;
          }
        }
        return (
          (D.ɵfac = function (E) {
            return new (E || D)(a.Y36(a.s_b), a.Y36(a.Rgc), a.Y36(a.ZZ4));
          }),
          (D.ɵdir = a.lG2({
            type: D,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          D
        );
      })();
      function Wt(D, M) {
        D.context.$implicit = M.item;
      }
      let di = (() => {
        class D {
          constructor(E, R) {
            (this._viewContainer = E),
              (this._context = new dt()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = R);
          }
          set ngIf(E) {
            (this._context.$implicit = this._context.ngIf = E),
              this._updateView();
          }
          set ngIfThen(E) {
            wi("ngIfThen", E),
              (this._thenTemplateRef = E),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(E) {
            wi("ngIfElse", E),
              (this._elseTemplateRef = E),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(E, R) {
            return !0;
          }
        }
        return (
          (D.ɵfac = function (E) {
            return new (E || D)(a.Y36(a.s_b), a.Y36(a.Rgc));
          }),
          (D.ɵdir = a.lG2({
            type: D,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
          })),
          D
        );
      })();
      class dt {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function wi(D, M) {
        if (M && !M.createEmbeddedView)
          throw new Error(
            `${D} must be a TemplateRef, but received '${(0, a.AaK)(M)}'.`
          );
      }
      let br = (() => {
        class D {
          constructor(E) {
            (this._viewContainerRef = E),
              (this._viewRef = null),
              (this.ngTemplateOutletContext = null),
              (this.ngTemplateOutlet = null);
          }
          ngOnChanges(E) {
            if (E.ngTemplateOutlet) {
              const R = this._viewContainerRef;
              this._viewRef && R.remove(R.indexOf(this._viewRef)),
                (this._viewRef = this.ngTemplateOutlet
                  ? R.createEmbeddedView(
                      this.ngTemplateOutlet,
                      this.ngTemplateOutletContext
                    )
                  : null);
            } else
              this._viewRef &&
                E.ngTemplateOutletContext &&
                this.ngTemplateOutletContext &&
                (this._viewRef.context = this.ngTemplateOutletContext);
          }
        }
        return (
          (D.ɵfac = function (E) {
            return new (E || D)(a.Y36(a.s_b));
          }),
          (D.ɵdir = a.lG2({
            type: D,
            selectors: [["", "ngTemplateOutlet", ""]],
            inputs: {
              ngTemplateOutletContext: "ngTemplateOutletContext",
              ngTemplateOutlet: "ngTemplateOutlet",
            },
            features: [a.TTD],
          })),
          D
        );
      })();
      function Zt(D, M) {
        return new a.vHH(2100, "");
      }
      class Dn {
        createSubscription(M, E) {
          return M.subscribe({
            next: E,
            error: (R) => {
              throw R;
            },
          });
        }
        dispose(M) {
          M.unsubscribe();
        }
        onDestroy(M) {
          M.unsubscribe();
        }
      }
      class Ui {
        createSubscription(M, E) {
          return M.then(E, (R) => {
            throw R;
          });
        }
        dispose(M) {}
        onDestroy(M) {}
      }
      const Xi = new Ui(),
        Gi = new Dn();
      let Kn = (() => {
        class D {
          constructor(E) {
            (this._ref = E),
              (this._latestValue = null),
              (this._subscription = null),
              (this._obj = null),
              (this._strategy = null);
          }
          ngOnDestroy() {
            this._subscription && this._dispose();
          }
          transform(E) {
            return this._obj
              ? E !== this._obj
                ? (this._dispose(), this.transform(E))
                : this._latestValue
              : (E && this._subscribe(E), this._latestValue);
          }
          _subscribe(E) {
            (this._obj = E),
              (this._strategy = this._selectStrategy(E)),
              (this._subscription = this._strategy.createSubscription(E, (R) =>
                this._updateLatestValue(E, R)
              ));
          }
          _selectStrategy(E) {
            if ((0, a.QGY)(E)) return Xi;
            if ((0, a.F4k)(E)) return Gi;
            throw Zt();
          }
          _dispose() {
            this._strategy.dispose(this._subscription),
              (this._latestValue = null),
              (this._subscription = null),
              (this._obj = null);
          }
          _updateLatestValue(E, R) {
            E === this._obj &&
              ((this._latestValue = R), this._ref.markForCheck());
          }
        }
        return (
          (D.ɵfac = function (E) {
            return new (E || D)(a.Y36(a.sBO, 16));
          }),
          (D.ɵpipe = a.Yjl({ name: "async", type: D, pure: !1 })),
          D
        );
      })();
      const ho =
        /(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;
      let jr = (() => {
        class D {
          transform(E) {
            if (null == E) return null;
            if ("string" != typeof E) throw Zt();
            return E.replace(
              ho,
              (R) => R[0].toUpperCase() + R.substr(1).toLowerCase()
            );
          }
        }
        return (
          (D.ɵfac = function (E) {
            return new (E || D)();
          }),
          (D.ɵpipe = a.Yjl({ name: "titlecase", type: D, pure: !0 })),
          D
        );
      })();
      const ko = new a.OlP("DATE_PIPE_DEFAULT_TIMEZONE");
      let $i = (() => {
          class D {
            constructor(E, R) {
              (this.locale = E), (this.defaultTimezone = R);
            }
            transform(E, R = "mediumDate", H, ce) {
              var Ee;
              if (null == E || "" === E || E != E) return null;
              try {
                return It(
                  E,
                  R,
                  ce || this.locale,
                  null !== (Ee = null != H ? H : this.defaultTimezone) &&
                    void 0 !== Ee
                    ? Ee
                    : void 0
                );
              } catch (qe) {
                throw Zt();
              }
            }
          }
          return (
            (D.ɵfac = function (E) {
              return new (E || D)(a.Y36(a.soG, 16), a.Y36(ko, 24));
            }),
            (D.ɵpipe = a.Yjl({ name: "date", type: D, pure: !0 })),
            D
          );
        })(),
        mo = (() => {
          class D {
            constructor(E) {
              this._locale = E;
            }
            transform(E, R, H) {
              if (
                !(function wr(D) {
                  return !(null == D || "" === D || D != D);
                })(E)
              )
                return null;
              H = H || this._locale;
              try {
                return (function un(D, M, E) {
                  return (function ve(D, M, E, R, H, ce, Ee = !1) {
                    let qe = "",
                      ot = !1;
                    if (isFinite(D)) {
                      let Bt = (function Ei(D) {
                        let R,
                          H,
                          ce,
                          Ee,
                          qe,
                          M = Math.abs(D) + "",
                          E = 0;
                        for (
                          (H = M.indexOf(".")) > -1 && (M = M.replace(".", "")),
                            (ce = M.search(/e/i)) > 0
                              ? (H < 0 && (H = ce),
                                (H += +M.slice(ce + 1)),
                                (M = M.substring(0, ce)))
                              : H < 0 && (H = M.length),
                            ce = 0;
                          "0" === M.charAt(ce);
                          ce++
                        );
                        if (ce === (qe = M.length)) (R = [0]), (H = 1);
                        else {
                          for (qe--; "0" === M.charAt(qe); ) qe--;
                          for (H -= ce, R = [], Ee = 0; ce <= qe; ce++, Ee++)
                            R[Ee] = Number(M.charAt(ce));
                        }
                        return (
                          H > 22 &&
                            ((R = R.splice(0, 21)), (E = H - 1), (H = 1)),
                          { digits: R, exponent: E, integerLen: H }
                        );
                      })(D);
                      Ee &&
                        (Bt = (function Tn(D) {
                          if (0 === D.digits[0]) return D;
                          const M = D.digits.length - D.integerLen;
                          return (
                            D.exponent
                              ? (D.exponent += 2)
                              : (0 === M
                                  ? D.digits.push(0, 0)
                                  : 1 === M && D.digits.push(0),
                                (D.integerLen += 2)),
                            D
                          );
                        })(Bt));
                      let zt = M.minInt,
                        et = M.minFrac,
                        mn = M.maxFrac;
                      if (ce) {
                        const Hn = ce.match(vi);
                        if (null === Hn)
                          throw new Error(`${ce} is not a valid digit info`);
                        const jn = Hn[1],
                          Nr = Hn[3],
                          tr = Hn[5];
                        null != jn && (zt = dn(jn)),
                          null != Nr && (et = dn(Nr)),
                          null != tr
                            ? (mn = dn(tr))
                            : null != Nr && et > mn && (mn = et);
                      }
                      !(function ui(D, M, E) {
                        if (M > E)
                          throw new Error(
                            `The minimum number of digits after fraction (${M}) is higher than the maximum (${E}).`
                          );
                        let R = D.digits,
                          H = R.length - D.integerLen;
                        const ce = Math.min(Math.max(M, H), E);
                        let Ee = ce + D.integerLen,
                          qe = R[Ee];
                        if (Ee > 0) {
                          R.splice(Math.max(D.integerLen, Ee));
                          for (let et = Ee; et < R.length; et++) R[et] = 0;
                        } else {
                          (H = Math.max(0, H)),
                            (D.integerLen = 1),
                            (R.length = Math.max(1, (Ee = ce + 1))),
                            (R[0] = 0);
                          for (let et = 1; et < Ee; et++) R[et] = 0;
                        }
                        if (qe >= 5)
                          if (Ee - 1 < 0) {
                            for (let et = 0; et > Ee; et--)
                              R.unshift(0), D.integerLen++;
                            R.unshift(1), D.integerLen++;
                          } else R[Ee - 1]++;
                        for (; H < Math.max(0, ce); H++) R.push(0);
                        let ot = 0 !== ce;
                        const Bt = M + D.integerLen,
                          zt = R.reduceRight(function (et, mn, hn, Cn) {
                            return (
                              (Cn[hn] = (mn += et) < 10 ? mn : mn - 10),
                              ot &&
                                (0 === Cn[hn] && hn >= Bt
                                  ? Cn.pop()
                                  : (ot = !1)),
                              mn >= 10 ? 1 : 0
                            );
                          }, 0);
                        zt && (R.unshift(zt), D.integerLen++);
                      })(Bt, et, mn);
                      let hn = Bt.digits,
                        Cn = Bt.integerLen;
                      const xn = Bt.exponent;
                      let Pi = [];
                      for (ot = hn.every((Hn) => !Hn); Cn < zt; Cn++)
                        hn.unshift(0);
                      for (; Cn < 0; Cn++) hn.unshift(0);
                      Cn > 0
                        ? (Pi = hn.splice(Cn, hn.length))
                        : ((Pi = hn), (hn = [0]));
                      const er = [];
                      for (
                        hn.length >= M.lgSize &&
                        er.unshift(hn.splice(-M.lgSize, hn.length).join(""));
                        hn.length > M.gSize;

                      )
                        er.unshift(hn.splice(-M.gSize, hn.length).join(""));
                      hn.length && er.unshift(hn.join("")),
                        (qe = er.join(Rt(E, R))),
                        Pi.length && (qe += Rt(E, H) + Pi.join("")),
                        xn && (qe += Rt(E, Q.Exponential) + "+" + xn);
                    } else qe = Rt(E, Q.Infinity);
                    return (
                      (qe =
                        D < 0 && !ot
                          ? M.negPre + qe + M.negSuf
                          : M.posPre + qe + M.posSuf),
                      qe
                    );
                  })(
                    D,
                    (function tn(D, M = "-") {
                      const E = {
                          minInt: 1,
                          minFrac: 0,
                          maxFrac: 0,
                          posPre: "",
                          posSuf: "",
                          negPre: "",
                          negSuf: "",
                          gSize: 0,
                          lgSize: 0,
                        },
                        R = D.split(";"),
                        H = R[0],
                        ce = R[1],
                        Ee =
                          -1 !== H.indexOf(".")
                            ? H.split(".")
                            : [
                                H.substring(0, H.lastIndexOf("0") + 1),
                                H.substring(H.lastIndexOf("0") + 1),
                              ],
                        qe = Ee[0],
                        ot = Ee[1] || "";
                      E.posPre = qe.substr(0, qe.indexOf("#"));
                      for (let zt = 0; zt < ot.length; zt++) {
                        const et = ot.charAt(zt);
                        "0" === et
                          ? (E.minFrac = E.maxFrac = zt + 1)
                          : "#" === et
                          ? (E.maxFrac = zt + 1)
                          : (E.posSuf += et);
                      }
                      const Bt = qe.split(",");
                      if (
                        ((E.gSize = Bt[1] ? Bt[1].length : 0),
                        (E.lgSize =
                          Bt[2] || Bt[1] ? (Bt[2] || Bt[1]).length : 0),
                        ce)
                      ) {
                        const zt = H.length - E.posPre.length - E.posSuf.length,
                          et = ce.indexOf("#");
                        (E.negPre = ce.substr(0, et).replace(/'/g, "")),
                          (E.negSuf = ce.substr(et + zt).replace(/'/g, ""));
                      } else (E.negPre = M + E.posPre), (E.negSuf = E.posSuf);
                      return E;
                    })(
                      (function ln(D, M) {
                        return (0, a.cg1)(D)[a.wAp.NumberFormats][M];
                      })(M, Ke.Decimal),
                      Rt(M, Q.MinusSign)
                    ),
                    M,
                    Q.Group,
                    Q.Decimal,
                    E
                  );
                })(
                  (function yi(D) {
                    if (
                      "string" == typeof D &&
                      !isNaN(Number(D) - parseFloat(D))
                    )
                      return Number(D);
                    if ("number" != typeof D)
                      throw new Error(`${D} is not a number`);
                    return D;
                  })(E),
                  H,
                  R
                );
              } catch (ce) {
                throw Zt();
              }
            }
          }
          return (
            (D.ɵfac = function (E) {
              return new (E || D)(a.Y36(a.soG, 16));
            }),
            (D.ɵpipe = a.Yjl({ name: "number", type: D, pure: !0 })),
            D
          );
        })();
      let Bo = (() => {
        class D {}
        return (
          (D.ɵfac = function (E) {
            return new (E || D)();
          }),
          (D.ɵmod = a.oAB({ type: D })),
          (D.ɵinj = a.cJS({})),
          D
        );
      })();
      const $r = "browser";
      function xi(D) {
        return D === $r;
      }
      let Jr = (() => {
        class D {}
        return (
          (D.ɵprov = (0, a.Yz7)({
            token: D,
            providedIn: "root",
            factory: () => new Kr((0, a.LFG)(Ce), window),
          })),
          D
        );
      })();
      class Kr {
        constructor(M, E) {
          (this.document = M), (this.window = E), (this.offset = () => [0, 0]);
        }
        setOffset(M) {
          this.offset = Array.isArray(M) ? () => M : M;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(M) {
          this.supportsScrolling() && this.window.scrollTo(M[0], M[1]);
        }
        scrollToAnchor(M) {
          if (!this.supportsScrolling()) return;
          const E = (function Zn(D, M) {
            const E = D.getElementById(M) || D.getElementsByName(M)[0];
            if (E) return E;
            if (
              "function" == typeof D.createTreeWalker &&
              D.body &&
              (D.body.createShadowRoot || D.body.attachShadow)
            ) {
              const R = D.createTreeWalker(D.body, NodeFilter.SHOW_ELEMENT);
              let H = R.currentNode;
              for (; H; ) {
                const ce = H.shadowRoot;
                if (ce) {
                  const Ee =
                    ce.getElementById(M) || ce.querySelector(`[name="${M}"]`);
                  if (Ee) return Ee;
                }
                H = R.nextNode();
              }
            }
            return null;
          })(this.document, M);
          E && (this.scrollToElement(E), E.focus());
        }
        setHistoryScrollRestoration(M) {
          if (this.supportScrollRestoration()) {
            const E = this.window.history;
            E && E.scrollRestoration && (E.scrollRestoration = M);
          }
        }
        scrollToElement(M) {
          const E = M.getBoundingClientRect(),
            R = E.left + this.window.pageXOffset,
            H = E.top + this.window.pageYOffset,
            ce = this.offset();
          this.window.scrollTo(R - ce[0], H - ce[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const M =
              qn(this.window.history) ||
              qn(Object.getPrototypeOf(this.window.history));
            return !(!M || (!M.writable && !M.set));
          } catch (M) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch (M) {
            return !1;
          }
        }
      }
      function qn(D) {
        return Object.getOwnPropertyDescriptor(D, "scrollRestoration");
      }
      class fr {}
    },
    520: (tt, De, I) => {
      I.d(De, { JF: () => Jt, eN: () => Q });
      var a = I(9808),
        k = I(1223),
        _e = I(9646),
        he = I(8306),
        ae = I(4351),
        Re = I(9300),
        Ce = I(4004);
      class ke {}
      class Te {}
      class be {
        constructor(U) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            U
              ? (this.lazyInit =
                  "string" == typeof U
                    ? () => {
                        (this.headers = new Map()),
                          U.split("\n").forEach((j) => {
                            const Z = j.indexOf(":");
                            if (Z > 0) {
                              const oe = j.slice(0, Z),
                                Se = oe.toLowerCase(),
                                Pe = j.slice(Z + 1).trim();
                              this.maybeSetNormalizedName(oe, Se),
                                this.headers.has(Se)
                                  ? this.headers.get(Se).push(Pe)
                                  : this.headers.set(Se, [Pe]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(U).forEach((j) => {
                            let Z = U[j];
                            const oe = j.toLowerCase();
                            "string" == typeof Z && (Z = [Z]),
                              Z.length > 0 &&
                                (this.headers.set(oe, Z),
                                this.maybeSetNormalizedName(j, oe));
                          });
                      })
              : (this.headers = new Map());
        }
        has(U) {
          return this.init(), this.headers.has(U.toLowerCase());
        }
        get(U) {
          this.init();
          const j = this.headers.get(U.toLowerCase());
          return j && j.length > 0 ? j[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(U) {
          return this.init(), this.headers.get(U.toLowerCase()) || null;
        }
        append(U, j) {
          return this.clone({ name: U, value: j, op: "a" });
        }
        set(U, j) {
          return this.clone({ name: U, value: j, op: "s" });
        }
        delete(U, j) {
          return this.clone({ name: U, value: j, op: "d" });
        }
        maybeSetNormalizedName(U, j) {
          this.normalizedNames.has(j) || this.normalizedNames.set(j, U);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof be
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((U) => this.applyUpdate(U)),
              (this.lazyUpdate = null)));
        }
        copyFrom(U) {
          U.init(),
            Array.from(U.headers.keys()).forEach((j) => {
              this.headers.set(j, U.headers.get(j)),
                this.normalizedNames.set(j, U.normalizedNames.get(j));
            });
        }
        clone(U) {
          const j = new be();
          return (
            (j.lazyInit =
              this.lazyInit && this.lazyInit instanceof be
                ? this.lazyInit
                : this),
            (j.lazyUpdate = (this.lazyUpdate || []).concat([U])),
            j
          );
        }
        applyUpdate(U) {
          const j = U.name.toLowerCase();
          switch (U.op) {
            case "a":
            case "s":
              let Z = U.value;
              if (("string" == typeof Z && (Z = [Z]), 0 === Z.length)) return;
              this.maybeSetNormalizedName(U.name, j);
              const oe = ("a" === U.op ? this.headers.get(j) : void 0) || [];
              oe.push(...Z), this.headers.set(j, oe);
              break;
            case "d":
              const Se = U.value;
              if (Se) {
                let Pe = this.headers.get(j);
                if (!Pe) return;
                (Pe = Pe.filter((It) => -1 === Se.indexOf(It))),
                  0 === Pe.length
                    ? (this.headers.delete(j), this.normalizedNames.delete(j))
                    : this.headers.set(j, Pe);
              } else this.headers.delete(j), this.normalizedNames.delete(j);
          }
        }
        forEach(U) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((j) =>
              U(this.normalizedNames.get(j), this.headers.get(j))
            );
        }
      }
      class se {
        encodeKey(U) {
          return Ne(U);
        }
        encodeValue(U) {
          return Ne(U);
        }
        decodeKey(U) {
          return decodeURIComponent(U);
        }
        decodeValue(U) {
          return decodeURIComponent(U);
        }
      }
      const le = /%(\d[a-f0-9])/gi,
        re = {
          40: "@",
          "3A": ":",
          24: "$",
          "2C": ",",
          "3B": ";",
          "2B": "+",
          "3D": "=",
          "3F": "?",
          "2F": "/",
        };
      function Ne(X) {
        return encodeURIComponent(X).replace(le, (U, j) => {
          var Z;
          return null !== (Z = re[j]) && void 0 !== Z ? Z : U;
        });
      }
      function Ge(X) {
        return `${X}`;
      }
      class Ae {
        constructor(U = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = U.encoder || new se()),
            U.fromString)
          ) {
            if (U.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function ne(X, U) {
              const j = new Map();
              return (
                X.length > 0 &&
                  X.replace(/^\?/, "")
                    .split("&")
                    .forEach((oe) => {
                      const Se = oe.indexOf("="),
                        [Pe, It] =
                          -1 == Se
                            ? [U.decodeKey(oe), ""]
                            : [
                                U.decodeKey(oe.slice(0, Se)),
                                U.decodeValue(oe.slice(Se + 1)),
                              ],
                        it = j.get(Pe) || [];
                      it.push(It), j.set(Pe, it);
                    }),
                j
              );
            })(U.fromString, this.encoder);
          } else
            U.fromObject
              ? ((this.map = new Map()),
                Object.keys(U.fromObject).forEach((j) => {
                  const Z = U.fromObject[j];
                  this.map.set(j, Array.isArray(Z) ? Z : [Z]);
                }))
              : (this.map = null);
        }
        has(U) {
          return this.init(), this.map.has(U);
        }
        get(U) {
          this.init();
          const j = this.map.get(U);
          return j ? j[0] : null;
        }
        getAll(U) {
          return this.init(), this.map.get(U) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(U, j) {
          return this.clone({ param: U, value: j, op: "a" });
        }
        appendAll(U) {
          const j = [];
          return (
            Object.keys(U).forEach((Z) => {
              const oe = U[Z];
              Array.isArray(oe)
                ? oe.forEach((Se) => {
                    j.push({ param: Z, value: Se, op: "a" });
                  })
                : j.push({ param: Z, value: oe, op: "a" });
            }),
            this.clone(j)
          );
        }
        set(U, j) {
          return this.clone({ param: U, value: j, op: "s" });
        }
        delete(U, j) {
          return this.clone({ param: U, value: j, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((U) => {
                const j = this.encoder.encodeKey(U);
                return this.map
                  .get(U)
                  .map((Z) => j + "=" + this.encoder.encodeValue(Z))
                  .join("&");
              })
              .filter((U) => "" !== U)
              .join("&")
          );
        }
        clone(U) {
          const j = new Ae({ encoder: this.encoder });
          return (
            (j.cloneFrom = this.cloneFrom || this),
            (j.updates = (this.updates || []).concat(U)),
            j
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((U) => this.map.set(U, this.cloneFrom.map.get(U))),
              this.updates.forEach((U) => {
                switch (U.op) {
                  case "a":
                  case "s":
                    const j =
                      ("a" === U.op ? this.map.get(U.param) : void 0) || [];
                    j.push(Ge(U.value)), this.map.set(U.param, j);
                    break;
                  case "d":
                    if (void 0 === U.value) {
                      this.map.delete(U.param);
                      break;
                    }
                    {
                      let Z = this.map.get(U.param) || [];
                      const oe = Z.indexOf(Ge(U.value));
                      -1 !== oe && Z.splice(oe, 1),
                        Z.length > 0
                          ? this.map.set(U.param, Z)
                          : this.map.delete(U.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class pt {
        constructor() {
          this.map = new Map();
        }
        set(U, j) {
          return this.map.set(U, j), this;
        }
        get(U) {
          return (
            this.map.has(U) || this.map.set(U, U.defaultValue()),
            this.map.get(U)
          );
        }
        delete(U) {
          return this.map.delete(U), this;
        }
        has(U) {
          return this.map.has(U);
        }
        keys() {
          return this.map.keys();
        }
      }
      function me(X) {
        return "undefined" != typeof ArrayBuffer && X instanceof ArrayBuffer;
      }
      function Me(X) {
        return "undefined" != typeof Blob && X instanceof Blob;
      }
      function $e(X) {
        return "undefined" != typeof FormData && X instanceof FormData;
      }
      class je {
        constructor(U, j, Z, oe) {
          let Se;
          if (
            ((this.url = j),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = U.toUpperCase()),
            (function gt(X) {
              switch (X) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || oe
              ? ((this.body = void 0 !== Z ? Z : null), (Se = oe))
              : (Se = Z),
            Se &&
              ((this.reportProgress = !!Se.reportProgress),
              (this.withCredentials = !!Se.withCredentials),
              Se.responseType && (this.responseType = Se.responseType),
              Se.headers && (this.headers = Se.headers),
              Se.context && (this.context = Se.context),
              Se.params && (this.params = Se.params)),
            this.headers || (this.headers = new be()),
            this.context || (this.context = new pt()),
            this.params)
          ) {
            const Pe = this.params.toString();
            if (0 === Pe.length) this.urlWithParams = j;
            else {
              const It = j.indexOf("?");
              this.urlWithParams =
                j + (-1 === It ? "?" : It < j.length - 1 ? "&" : "") + Pe;
            }
          } else (this.params = new Ae()), (this.urlWithParams = j);
        }
        serializeBody() {
          return null === this.body
            ? null
            : me(this.body) ||
              Me(this.body) ||
              $e(this.body) ||
              (function Fe(X) {
                return (
                  "undefined" != typeof URLSearchParams &&
                  X instanceof URLSearchParams
                );
              })(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof Ae
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || $e(this.body)
            ? null
            : Me(this.body)
            ? this.body.type || null
            : me(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof Ae
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              "boolean" == typeof this.body
            ? "application/json"
            : null;
        }
        clone(U = {}) {
          var j;
          const Z = U.method || this.method,
            oe = U.url || this.url,
            Se = U.responseType || this.responseType,
            Pe = void 0 !== U.body ? U.body : this.body,
            It =
              void 0 !== U.withCredentials
                ? U.withCredentials
                : this.withCredentials,
            it =
              void 0 !== U.reportProgress
                ? U.reportProgress
                : this.reportProgress;
          let Tt = U.headers || this.headers,
            Kt = U.params || this.params;
          const on =
            null !== (j = U.context) && void 0 !== j ? j : this.context;
          return (
            void 0 !== U.setHeaders &&
              (Tt = Object.keys(U.setHeaders).reduce(
                (gi, Be) => gi.set(Be, U.setHeaders[Be]),
                Tt
              )),
            U.setParams &&
              (Kt = Object.keys(U.setParams).reduce(
                (gi, Be) => gi.set(Be, U.setParams[Be]),
                Kt
              )),
            new je(Z, oe, Pe, {
              params: Kt,
              headers: Tt,
              context: on,
              reportProgress: it,
              responseType: Se,
              withCredentials: It,
            })
          );
        }
      }
      var fe = (() => (
        ((fe = fe || {})[(fe.Sent = 0)] = "Sent"),
        (fe[(fe.UploadProgress = 1)] = "UploadProgress"),
        (fe[(fe.ResponseHeader = 2)] = "ResponseHeader"),
        (fe[(fe.DownloadProgress = 3)] = "DownloadProgress"),
        (fe[(fe.Response = 4)] = "Response"),
        (fe[(fe.User = 5)] = "User"),
        fe
      ))();
      class Ke {
        constructor(U, j = 200, Z = "OK") {
          (this.headers = U.headers || new be()),
            (this.status = void 0 !== U.status ? U.status : j),
            (this.statusText = U.statusText || Z),
            (this.url = U.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class q extends Ke {
        constructor(U = {}) {
          super(U), (this.type = fe.ResponseHeader);
        }
        clone(U = {}) {
          return new q({
            headers: U.headers || this.headers,
            status: void 0 !== U.status ? U.status : this.status,
            statusText: U.statusText || this.statusText,
            url: U.url || this.url || void 0,
          });
        }
      }
      class te extends Ke {
        constructor(U = {}) {
          super(U),
            (this.type = fe.Response),
            (this.body = void 0 !== U.body ? U.body : null);
        }
        clone(U = {}) {
          return new te({
            body: void 0 !== U.body ? U.body : this.body,
            headers: U.headers || this.headers,
            status: void 0 !== U.status ? U.status : this.status,
            statusText: U.statusText || this.statusText,
            url: U.url || this.url || void 0,
          });
        }
      }
      class ie extends Ke {
        constructor(U) {
          super(U, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${U.url || "(unknown url)"}`
                : `Http failure response for ${U.url || "(unknown url)"}: ${
                    U.status
                  } ${U.statusText}`),
            (this.error = U.error || null);
        }
      }
      function de(X, U) {
        return {
          body: U,
          headers: X.headers,
          context: X.context,
          observe: X.observe,
          params: X.params,
          reportProgress: X.reportProgress,
          responseType: X.responseType,
          withCredentials: X.withCredentials,
        };
      }
      let Q = (() => {
        class X {
          constructor(j) {
            this.handler = j;
          }
          request(j, Z, oe = {}) {
            let Se;
            if (j instanceof je) Se = j;
            else {
              let it, Tt;
              (it = oe.headers instanceof be ? oe.headers : new be(oe.headers)),
                oe.params &&
                  (Tt =
                    oe.params instanceof Ae
                      ? oe.params
                      : new Ae({ fromObject: oe.params })),
                (Se = new je(j, Z, void 0 !== oe.body ? oe.body : null, {
                  headers: it,
                  context: oe.context,
                  params: Tt,
                  reportProgress: oe.reportProgress,
                  responseType: oe.responseType || "json",
                  withCredentials: oe.withCredentials,
                }));
            }
            const Pe = (0, _e.of)(Se).pipe(
              (0, ae.b)((it) => this.handler.handle(it))
            );
            if (j instanceof je || "events" === oe.observe) return Pe;
            const It = Pe.pipe((0, Re.h)((it) => it instanceof te));
            switch (oe.observe || "body") {
              case "body":
                switch (Se.responseType) {
                  case "arraybuffer":
                    return It.pipe(
                      (0, Ce.U)((it) => {
                        if (
                          null !== it.body &&
                          !(it.body instanceof ArrayBuffer)
                        )
                          throw new Error("Response is not an ArrayBuffer.");
                        return it.body;
                      })
                    );
                  case "blob":
                    return It.pipe(
                      (0, Ce.U)((it) => {
                        if (null !== it.body && !(it.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return it.body;
                      })
                    );
                  case "text":
                    return It.pipe(
                      (0, Ce.U)((it) => {
                        if (null !== it.body && "string" != typeof it.body)
                          throw new Error("Response is not a string.");
                        return it.body;
                      })
                    );
                  default:
                    return It.pipe((0, Ce.U)((it) => it.body));
                }
              case "response":
                return It;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${oe.observe}}`
                );
            }
          }
          delete(j, Z = {}) {
            return this.request("DELETE", j, Z);
          }
          get(j, Z = {}) {
            return this.request("GET", j, Z);
          }
          head(j, Z = {}) {
            return this.request("HEAD", j, Z);
          }
          jsonp(j, Z) {
            return this.request("JSONP", j, {
              params: new Ae().append(Z, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(j, Z = {}) {
            return this.request("OPTIONS", j, Z);
          }
          patch(j, Z, oe = {}) {
            return this.request("PATCH", j, de(oe, Z));
          }
          post(j, Z, oe = {}) {
            return this.request("POST", j, de(oe, Z));
          }
          put(j, Z, oe = {}) {
            return this.request("PUT", j, de(oe, Z));
          }
        }
        return (
          (X.ɵfac = function (j) {
            return new (j || X)(k.LFG(ke));
          }),
          (X.ɵprov = k.Yz7({ token: X, factory: X.ɵfac })),
          X
        );
      })();
      class Oe {
        constructor(U, j) {
          (this.next = U), (this.interceptor = j);
        }
        handle(U) {
          return this.interceptor.intercept(U, this.next);
        }
      }
      const He = new k.OlP("HTTP_INTERCEPTORS");
      let vt = (() => {
        class X {
          intercept(j, Z) {
            return Z.handle(j);
          }
        }
        return (
          (X.ɵfac = function (j) {
            return new (j || X)();
          }),
          (X.ɵprov = k.Yz7({ token: X, factory: X.ɵfac })),
          X
        );
      })();
      const Rt = /^\)\]\}',?\n/;
      let Mt = (() => {
        class X {
          constructor(j) {
            this.xhrFactory = j;
          }
          handle(j) {
            if ("JSONP" === j.method)
              throw new Error(
                "Attempted to construct Jsonp request without HttpClientJsonpModule installed."
              );
            return new he.y((Z) => {
              const oe = this.xhrFactory.build();
              if (
                (oe.open(j.method, j.urlWithParams),
                j.withCredentials && (oe.withCredentials = !0),
                j.headers.forEach((Be, St) =>
                  oe.setRequestHeader(Be, St.join(","))
                ),
                j.headers.has("Accept") ||
                  oe.setRequestHeader(
                    "Accept",
                    "application/json, text/plain, */*"
                  ),
                !j.headers.has("Content-Type"))
              ) {
                const Be = j.detectContentTypeHeader();
                null !== Be && oe.setRequestHeader("Content-Type", Be);
              }
              if (j.responseType) {
                const Be = j.responseType.toLowerCase();
                oe.responseType = "json" !== Be ? Be : "text";
              }
              const Se = j.serializeBody();
              let Pe = null;
              const It = () => {
                  if (null !== Pe) return Pe;
                  const Be = oe.statusText || "OK",
                    St = new be(oe.getAllResponseHeaders()),
                    yt =
                      (function ln(X) {
                        return "responseURL" in X && X.responseURL
                          ? X.responseURL
                          : /^X-Request-URL:/m.test(X.getAllResponseHeaders())
                          ? X.getResponseHeader("X-Request-URL")
                          : null;
                      })(oe) || j.url;
                  return (
                    (Pe = new q({
                      headers: St,
                      status: oe.status,
                      statusText: Be,
                      url: yt,
                    })),
                    Pe
                  );
                },
                it = () => {
                  let {
                      headers: Be,
                      status: St,
                      statusText: yt,
                      url: qi,
                    } = It(),
                    cn = null;
                  204 !== St &&
                    (cn =
                      void 0 === oe.response ? oe.responseText : oe.response),
                    0 === St && (St = cn ? 200 : 0);
                  let kt = St >= 200 && St < 300;
                  if ("json" === j.responseType && "string" == typeof cn) {
                    const mi = cn;
                    cn = cn.replace(Rt, "");
                    try {
                      cn = "" !== cn ? JSON.parse(cn) : null;
                    } catch (Di) {
                      (cn = mi),
                        kt && ((kt = !1), (cn = { error: Di, text: cn }));
                    }
                  }
                  kt
                    ? (Z.next(
                        new te({
                          body: cn,
                          headers: Be,
                          status: St,
                          statusText: yt,
                          url: qi || void 0,
                        })
                      ),
                      Z.complete())
                    : Z.error(
                        new ie({
                          error: cn,
                          headers: Be,
                          status: St,
                          statusText: yt,
                          url: qi || void 0,
                        })
                      );
                },
                Tt = (Be) => {
                  const { url: St } = It(),
                    yt = new ie({
                      error: Be,
                      status: oe.status || 0,
                      statusText: oe.statusText || "Unknown Error",
                      url: St || void 0,
                    });
                  Z.error(yt);
                };
              let Kt = !1;
              const on = (Be) => {
                  Kt || (Z.next(It()), (Kt = !0));
                  let St = { type: fe.DownloadProgress, loaded: Be.loaded };
                  Be.lengthComputable && (St.total = Be.total),
                    "text" === j.responseType &&
                      !!oe.responseText &&
                      (St.partialText = oe.responseText),
                    Z.next(St);
                },
                gi = (Be) => {
                  let St = { type: fe.UploadProgress, loaded: Be.loaded };
                  Be.lengthComputable && (St.total = Be.total), Z.next(St);
                };
              return (
                oe.addEventListener("load", it),
                oe.addEventListener("error", Tt),
                oe.addEventListener("timeout", Tt),
                oe.addEventListener("abort", Tt),
                j.reportProgress &&
                  (oe.addEventListener("progress", on),
                  null !== Se &&
                    oe.upload &&
                    oe.upload.addEventListener("progress", gi)),
                oe.send(Se),
                Z.next({ type: fe.Sent }),
                () => {
                  oe.removeEventListener("error", Tt),
                    oe.removeEventListener("abort", Tt),
                    oe.removeEventListener("load", it),
                    oe.removeEventListener("timeout", Tt),
                    j.reportProgress &&
                      (oe.removeEventListener("progress", on),
                      null !== Se &&
                        oe.upload &&
                        oe.upload.removeEventListener("progress", gi)),
                    oe.readyState !== oe.DONE && oe.abort();
                }
              );
            });
          }
        }
        return (
          (X.ɵfac = function (j) {
            return new (j || X)(k.LFG(a.JF));
          }),
          (X.ɵprov = k.Yz7({ token: X, factory: X.ɵfac })),
          X
        );
      })();
      const Vi = new k.OlP("XSRF_COOKIE_NAME"),
        Wn = new k.OlP("XSRF_HEADER_NAME");
      class Hi {}
      let Xt = (() => {
          class X {
            constructor(j, Z, oe) {
              (this.doc = j),
                (this.platform = Z),
                (this.cookieName = oe),
                (this.lastCookieString = ""),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ("server" === this.platform) return null;
              const j = this.doc.cookie || "";
              return (
                j !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = (0, a.Mx)(j, this.cookieName)),
                  (this.lastCookieString = j)),
                this.lastToken
              );
            }
          }
          return (
            (X.ɵfac = function (j) {
              return new (j || X)(k.LFG(a.K0), k.LFG(k.Lbi), k.LFG(Vi));
            }),
            (X.ɵprov = k.Yz7({ token: X, factory: X.ɵfac })),
            X
          );
        })(),
        zn = (() => {
          class X {
            constructor(j, Z) {
              (this.tokenService = j), (this.headerName = Z);
            }
            intercept(j, Z) {
              const oe = j.url.toLowerCase();
              if (
                "GET" === j.method ||
                "HEAD" === j.method ||
                oe.startsWith("http://") ||
                oe.startsWith("https://")
              )
                return Z.handle(j);
              const Se = this.tokenService.getToken();
              return (
                null !== Se &&
                  !j.headers.has(this.headerName) &&
                  (j = j.clone({
                    headers: j.headers.set(this.headerName, Se),
                  })),
                Z.handle(j)
              );
            }
          }
          return (
            (X.ɵfac = function (j) {
              return new (j || X)(k.LFG(Hi), k.LFG(Wn));
            }),
            (X.ɵprov = k.Yz7({ token: X, factory: X.ɵfac })),
            X
          );
        })(),
        ti = (() => {
          class X {
            constructor(j, Z) {
              (this.backend = j), (this.injector = Z), (this.chain = null);
            }
            handle(j) {
              if (null === this.chain) {
                const Z = this.injector.get(He, []);
                this.chain = Z.reduceRight(
                  (oe, Se) => new Oe(oe, Se),
                  this.backend
                );
              }
              return this.chain.handle(j);
            }
          }
          return (
            (X.ɵfac = function (j) {
              return new (j || X)(k.LFG(Te), k.LFG(k.zs3));
            }),
            (X.ɵprov = k.Yz7({ token: X, factory: X.ɵfac })),
            X
          );
        })(),
        rn = (() => {
          class X {
            static disable() {
              return {
                ngModule: X,
                providers: [{ provide: zn, useClass: vt }],
              };
            }
            static withOptions(j = {}) {
              return {
                ngModule: X,
                providers: [
                  j.cookieName ? { provide: Vi, useValue: j.cookieName } : [],
                  j.headerName ? { provide: Wn, useValue: j.headerName } : [],
                ],
              };
            }
          }
          return (
            (X.ɵfac = function (j) {
              return new (j || X)();
            }),
            (X.ɵmod = k.oAB({ type: X })),
            (X.ɵinj = k.cJS({
              providers: [
                zn,
                { provide: He, useExisting: zn, multi: !0 },
                { provide: Hi, useClass: Xt },
                { provide: Vi, useValue: "XSRF-TOKEN" },
                { provide: Wn, useValue: "X-XSRF-TOKEN" },
              ],
            })),
            X
          );
        })(),
        Jt = (() => {
          class X {}
          return (
            (X.ɵfac = function (j) {
              return new (j || X)();
            }),
            (X.ɵmod = k.oAB({ type: X })),
            (X.ɵinj = k.cJS({
              providers: [
                Q,
                { provide: ke, useClass: ti },
                Mt,
                { provide: Te, useExisting: Mt },
              ],
              imports: [
                [
                  rn.withOptions({
                    cookieName: "XSRF-TOKEN",
                    headerName: "X-XSRF-TOKEN",
                  }),
                ],
              ],
            })),
            X
          );
        })();
    },
    1223: (tt, De, I) => {
      I.d(De, {
        deG: () => sc,
        tb: () => X_,
        AFp: () => q_,
        ip1: () => K_,
        CZH: () => $f,
        hGG: () => F1,
        z2F: () => Qf,
        sBO: () => y1,
        Sil: () => QD,
        _Vd: () => bu,
        EJc: () => qD,
        SBq: () => $l,
        qLn: () => Ts,
        vpe: () => fo,
        tBr: () => ys,
        XFs: () => Z,
        OlP: () => On,
        zs3: () => ao,
        ZZ4: () => rh,
        aQg: () => oh,
        soG: () => zf,
        YKP: () => o_,
        h0i: () => ka,
        PXZ: () => d1,
        R0b: () => Vr,
        FiY: () => Ko,
        Lbi: () => YD,
        g9A: () => Q_,
        Qsj: () => Yb,
        FYo: () => t_,
        JOm: () => _r,
        tp0: () => bs,
        Rgc: () => Jl,
        dDg: () => nv,
        GfV: () => n_,
        s_b: () => Eu,
        ifc: () => Be,
        eFA: () => ov,
        G48: () => v1,
        Gpc: () => gt,
        _c5: () => P1,
        VLi: () => l1,
        c2e: () => JD,
        zSh: () => Yd,
        wAp: () => ct,
        vHH: () => Fe,
        cg1: () => bf,
        kL8: () => wm,
        dqk: () => kt,
        sIi: () => kl,
        CqO: () => Ag,
        QGY: () => df,
        F4k: () => Og,
        RDi: () => ce,
        AaK: () => Ae,
        qOj: () => Qd,
        TTD: () => xi,
        _Bn: () => Qm,
        xp6: () => Ct,
        uIk: () => tf,
        Tol: () => Qg,
        ekj: () => mf,
        Suo: () => N_,
        Xpm: () => Yn,
        lG2: () => G,
        Yz7: () => Xt,
        cJS: () => ti,
        oAB: () => An,
        Yjl: () => F,
        Y36: () => Bl,
        _UZ: () => uf,
        BQk: () => du,
        ynx: () => uu,
        qZA: () => cu,
        TgZ: () => lu,
        EpF: () => Mg,
        n5z: () => Ou,
        Ikx: () => yf,
        SDv: () => Km,
        QtT: () => qm,
        pQV: () => Ef,
        LFG: () => hi,
        $8M: () => oc,
        $Z: () => Sg,
        NdJ: () => ff,
        CRH: () => M_,
        oxw: () => Pg,
        ALo: () => __,
        lcZ: () => v_,
        xi3: () => y_,
        Hsn: () => kg,
        F$t: () => Fg,
        Q6J: () => lf,
        s9C: () => pf,
        MGl: () => fu,
        VKq: () => c_,
        WLB: () => u_,
        kEZ: () => d_,
        iGM: () => T_,
        MAs: () => gg,
        CHM: () => ks,
        LSH: () => Tc,
        Udp: () => gf,
        YNc: () => pg,
        W1O: () => I_,
        _uU: () => om,
        Oqu: () => vf,
        hij: () => pu,
        Gf: () => S_,
      });
      var a = I(8189),
        k = I(8421),
        _e = I(515),
        he = I(3269),
        ae = I(2076),
        Ce = I(7579),
        ke = I(727),
        Te = I(8306),
        be = I(5698),
        se = I(930),
        ne = I(4482);
      function re(e, t, ...n) {
        return !0 === t
          ? (e(), null)
          : !1 === t
          ? null
          : t(...n)
              .pipe((0, be.q)(1))
              .subscribe(() => e());
      }
      function Ne(e) {
        for (let t in e) if (e[t] === Ne) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function Ge(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function Ae(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(Ae).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function lt(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const pt = Ne({ __forward_ref__: Ne });
      function gt(e) {
        return (
          (e.__forward_ref__ = gt),
          (e.toString = function () {
            return Ae(this());
          }),
          e
        );
      }
      function me(e) {
        return Me(e) ? e() : e;
      }
      function Me(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(pt) &&
          e.__forward_ref__ === gt
        );
      }
      class Fe extends Error {
        constructor(t, n) {
          super(
            (function je(e, t) {
              return `NG0${Math.abs(e)}${t ? ": " + t : ""}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function fe(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function Ke(e) {
        return "function" == typeof e
          ? e.name || e.toString()
          : "object" == typeof e && null != e && "function" == typeof e.type
          ? e.type.name || e.type.toString()
          : fe(e);
      }
      function de(e, t) {
        const n = t ? ` in ${t}` : "";
        throw new Fe(-201, `No provider for ${Ke(e)} found${n}`);
      }
      function Mt(e, t, n, i) {
        throw new Error(
          `ASSERTION ERROR: ${e}` +
            (null == i ? "" : ` [Expected=> ${n} ${i} ${t} <=Actual]`)
        );
      }
      function Xt(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function ti(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function ni(e) {
        return Ai(e, Ri) || Ai(e, U);
      }
      function Ai(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function wn(e) {
        return e && (e.hasOwnProperty(X) || e.hasOwnProperty(j)) ? e[X] : null;
      }
      const Ri = Ne({ ɵprov: Ne }),
        X = Ne({ ɵinj: Ne }),
        U = Ne({ ngInjectableDef: Ne }),
        j = Ne({ ngInjectorDef: Ne });
      var Z = (() => (
        ((Z = Z || {})[(Z.Default = 0)] = "Default"),
        (Z[(Z.Host = 1)] = "Host"),
        (Z[(Z.Self = 2)] = "Self"),
        (Z[(Z.SkipSelf = 4)] = "SkipSelf"),
        (Z[(Z.Optional = 8)] = "Optional"),
        Z
      ))();
      let oe;
      function Pe(e) {
        const t = oe;
        return (oe = e), t;
      }
      function It(e, t, n) {
        const i = ni(e);
        return i && "root" == i.providedIn
          ? void 0 === i.value
            ? (i.value = i.factory())
            : i.value
          : n & Z.Optional
          ? null
          : void 0 !== t
          ? t
          : void de(Ae(e), "Injector");
      }
      function Tt(e) {
        return { toString: e }.toString();
      }
      var Kt = (() => (
          ((Kt = Kt || {})[(Kt.OnPush = 0)] = "OnPush"),
          (Kt[(Kt.Default = 1)] = "Default"),
          Kt
        ))(),
        Be = (() => {
          return (
            ((e = Be || (Be = {}))[(e.Emulated = 0)] = "Emulated"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            Be
          );
          var e;
        })();
      const St = "undefined" != typeof globalThis && globalThis,
        yt = "undefined" != typeof window && window,
        qi =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        kt = St || ("undefined" != typeof global && global) || yt || qi,
        ii = {},
        Dt = [],
        _i = Ne({ ɵcmp: Ne }),
        ri = Ne({ ɵdir: Ne }),
        en = Ne({ ɵpipe: Ne }),
        at = Ne({ ɵmod: Ne }),
        $t = Ne({ ɵfac: Ne }),
        li = Ne({ __NG_ELEMENT_ID__: Ne });
      let gn = 0;
      function Yn(e) {
        return Tt(() => {
          const n = {},
            i = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: n,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === Kt.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: e.selectors || Dt,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || Be.Emulated,
              id: "c",
              styles: e.styles || Dt,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            o = e.directives,
            l = e.features,
            d = e.pipes;
          return (
            (i.id += gn++),
            (i.inputs = z(e.inputs, n)),
            (i.outputs = z(e.outputs)),
            l && l.forEach((p) => p(i)),
            (i.directiveDefs = o
              ? () => ("function" == typeof o ? o() : o).map(vi)
              : null),
            (i.pipeDefs = d
              ? () => ("function" == typeof d ? d() : d).map(ci)
              : null),
            i
          );
        });
      }
      function vi(e) {
        return (
          K(e) ||
          (function ve(e) {
            return e[ri] || null;
          })(e)
        );
      }
      function ci(e) {
        return (function Qe(e) {
          return e[en] || null;
        })(e);
      }
      const Ln = {};
      function An(e) {
        return Tt(() => {
          const t = {
            type: e.type,
            bootstrap: e.bootstrap || Dt,
            declarations: e.declarations || Dt,
            imports: e.imports || Dt,
            exports: e.exports || Dt,
            transitiveCompileScopes: null,
            schemas: e.schemas || null,
            id: e.id || null,
          };
          return null != e.id && (Ln[e.id] = e.type), t;
        });
      }
      function z(e, t) {
        if (null == e) return ii;
        const n = {};
        for (const i in e)
          if (e.hasOwnProperty(i)) {
            let o = e[i],
              l = o;
            Array.isArray(o) && ((l = o[1]), (o = o[0])),
              (n[o] = i),
              t && (t[o] = l);
          }
        return n;
      }
      const G = Yn;
      function F(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function K(e) {
        return e[_i] || null;
      }
      function nt(e, t) {
        const n = e[at] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${Ae(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function Zt(e) {
        return Array.isArray(e) && "object" == typeof e[1];
      }
      function Dn(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function Ui(e) {
        return 0 != (8 & e.flags);
      }
      function Xi(e) {
        return 2 == (2 & e.flags);
      }
      function Gi(e) {
        return 1 == (1 & e.flags);
      }
      function Kn(e) {
        return null !== e.template;
      }
      function Hr(e) {
        return 0 != (512 & e[2]);
      }
      function si(e, t) {
        return e.hasOwnProperty($t) ? e[$t] : null;
      }
      class Wr {
        constructor(t, n, i) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = i);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function xi() {
        return zr;
      }
      function zr(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = _o), Yr;
      }
      function Yr() {
        const e = Jr(this),
          t = null == e ? void 0 : e.current;
        if (t) {
          const n = e.previous;
          if (n === ii) e.previous = t;
          else for (let i in t) n[i] = t[i];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function _o(e, t, n, i) {
        const o =
            Jr(e) ||
            (function Kr(e, t) {
              return (e[Sr] = t);
            })(e, { previous: ii, current: null }),
          l = o.current || (o.current = {}),
          d = o.previous,
          p = this.declaredInputs[n],
          _ = d[p];
        (l[p] = new Wr(_ && _.currentValue, t, d === ii)), (e[i] = t);
      }
      xi.ngInherit = !0;
      const Sr = "__ngSimpleChanges__";
      function Jr(e) {
        return e[Sr] || null;
      }
      const M = "math";
      let H;
      function ce(e) {
        H = e;
      }
      function Ee() {
        return void 0 !== H
          ? H
          : "undefined" != typeof document
          ? document
          : void 0;
      }
      function ot(e) {
        return !!e.listen;
      }
      const Bt = { createRenderer: (e, t) => Ee() };
      function et(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function Cn(e, t) {
        return et(t[e]);
      }
      function xn(e, t) {
        return et(t[e.index]);
      }
      function er(e, t) {
        return e.data[t];
      }
      function Hn(e, t) {
        return e[t];
      }
      function jn(e, t) {
        const n = t[e];
        return Zt(n) ? n : n[0];
      }
      function Nr(e) {
        return 4 == (4 & e[2]);
      }
      function tr(e) {
        return 128 == (128 & e[2]);
      }
      function y(e, t) {
        return null == t ? null : e[t];
      }
      function v(e) {
        e[18] = 0;
      }
      function A(e, t) {
        e[5] += t;
        let n = e,
          i = e[3];
        for (
          ;
          null !== i && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (i[5] += t), (n = i), (i = i[3]);
      }
      const Y = {
        lFrame: js(null),
        bindingsEnabled: !0,
        isInCheckNoChangesMode: !1,
      };
      function ir() {
        return Y.bindingsEnabled;
      }
      function we() {
        return Y.lFrame.lView;
      }
      function xt() {
        return Y.lFrame.tView;
      }
      function ks(e) {
        return (Y.lFrame.contextLView = e), e[8];
      }
      function Mn() {
        let e = Ls();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function Ls() {
        return Y.lFrame.currentTNode;
      }
      function qr() {
        const e = Y.lFrame,
          t = e.currentTNode;
        return e.isParent ? t : t.parent;
      }
      function Wi(e, t) {
        const n = Y.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function ss() {
        return Y.lFrame.isParent;
      }
      function as() {
        Y.lFrame.isParent = !1;
      }
      function bo() {
        return Y.isInCheckNoChangesMode;
      }
      function ls(e) {
        Y.isInCheckNoChangesMode = e;
      }
      function Xn() {
        const e = Y.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function Mr() {
        return Y.lFrame.bindingIndex++;
      }
      function rr(e) {
        const t = Y.lFrame,
          n = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + e), n;
      }
      function Bs(e) {
        Y.lFrame.inI18n = e;
      }
      function ja(e, t) {
        const n = Y.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), us(t);
      }
      function us(e) {
        Y.lFrame.currentDirectiveIndex = e;
      }
      function Vs() {
        return Y.lFrame.currentQueryIndex;
      }
      function ds(e) {
        Y.lFrame.currentQueryIndex = e;
      }
      function Ua(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function Ho(e, t, n) {
        if (n & Z.SkipSelf) {
          let o = t,
            l = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & Z.Host ||
              ((o = Ua(l)), null === o || ((l = l[15]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = l);
        }
        const i = (Y.lFrame = Hs());
        return (i.currentTNode = t), (i.lView = e), !0;
      }
      function Co(e) {
        const t = Hs(),
          n = e[1];
        (Y.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Hs() {
        const e = Y.lFrame,
          t = null === e ? null : e.child;
        return null === t ? js(e) : t;
      }
      function js(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Us() {
        const e = Y.lFrame;
        return (
          (Y.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const Gs = Us;
      function Eo() {
        const e = Us();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function sn() {
        return Y.lFrame.selectedIndex;
      }
      function hr(e) {
        Y.lFrame.selectedIndex = e;
      }
      function _n() {
        const e = Y.lFrame;
        return er(e.tView, e.selectedIndex);
      }
      function jo(e, t) {
        for (let n = t.directiveStart, i = t.directiveEnd; n < i; n++) {
          const l = e.data[n].type.prototype,
            {
              ngAfterContentInit: d,
              ngAfterContentChecked: p,
              ngAfterViewInit: _,
              ngAfterViewChecked: S,
              ngOnDestroy: N,
            } = l;
          d && (e.contentHooks || (e.contentHooks = [])).push(-n, d),
            p &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, p),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, p)),
            _ && (e.viewHooks || (e.viewHooks = [])).push(-n, _),
            S &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, S),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, S)),
            null != N && (e.destroyHooks || (e.destroyHooks = [])).push(n, N);
        }
      }
      function Uo(e, t, n) {
        Ga(e, t, 3, n);
      }
      function Go(e, t, n, i) {
        (3 & e[2]) === n && Ga(e, t, n, i);
      }
      function To(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function Ga(e, t, n, i) {
        const l = null != i ? i : -1,
          d = t.length - 1;
        let p = 0;
        for (let _ = void 0 !== i ? 65535 & e[18] : 0; _ < d; _++)
          if ("number" == typeof t[_ + 1]) {
            if (((p = t[_]), null != i && p >= i)) break;
          } else
            t[_] < 0 && (e[18] += 65536),
              (p < l || -1 == l) &&
                (Zr(e, n, t, _), (e[18] = (4294901760 & e[18]) + _ + 2)),
              _++;
      }
      function Zr(e, t, n, i) {
        const o = n[i] < 0,
          l = n[i + 1],
          p = e[o ? -n[i] : n[i]];
        if (o) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              l.call(p);
            } finally {
            }
          }
        } else
          try {
            l.call(p);
          } finally {
          }
      }
      class So {
        constructor(t, n, i) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = i);
        }
      }
      function Or(e, t, n) {
        const i = ot(e);
        let o = 0;
        for (; o < n.length; ) {
          const l = n[o];
          if ("number" == typeof l) {
            if (0 !== l) break;
            o++;
            const d = n[o++],
              p = n[o++],
              _ = n[o++];
            i ? e.setAttribute(t, p, _, d) : t.setAttributeNS(d, p, _);
          } else {
            const d = l,
              p = n[++o];
            hs(d)
              ? i && e.setProperty(t, d, p)
              : i
              ? e.setAttribute(t, d, p)
              : t.setAttribute(d, p),
              o++;
          }
        }
        return o;
      }
      function gr(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function hs(e) {
        return 64 === e.charCodeAt(0);
      }
      function Qr(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let i = 0; i < t.length; i++) {
              const o = t[i];
              "number" == typeof o
                ? (n = o)
                : 0 === n ||
                  Fi(e, n, o, null, -1 === n || 2 === n ? t[++i] : null);
            }
          }
        return e;
      }
      function Fi(e, t, n, i, o) {
        let l = 0,
          d = e.length;
        if (-1 === t) d = -1;
        else
          for (; l < e.length; ) {
            const p = e[l++];
            if ("number" == typeof p) {
              if (p === t) {
                d = -1;
                break;
              }
              if (p > t) {
                d = l - 1;
                break;
              }
            }
          }
        for (; l < e.length; ) {
          const p = e[l];
          if ("number" == typeof p) break;
          if (p === n) {
            if (null === i) return void (null !== o && (e[l + 1] = o));
            if (i === e[l + 1]) return void (e[l + 2] = o);
          }
          l++, null !== i && l++, null !== o && l++;
        }
        -1 !== d && (e.splice(d, 0, t), (l = d + 1)),
          e.splice(l++, 0, n),
          null !== i && e.splice(l++, 0, i),
          null !== o && e.splice(l++, 0, o);
      }
      function $o(e) {
        return -1 !== e;
      }
      function Si(e) {
        return 32767 & e;
      }
      function h(e, t) {
        let n = (function m(e) {
            return e >> 16;
          })(e),
          i = t;
        for (; n > 0; ) (i = i[15]), n--;
        return i;
      }
      let f = !0;
      function b(e) {
        const t = f;
        return (f = e), t;
      }
      let V = 0;
      function Ue(e, t) {
        const n = Xe(e, t);
        if (-1 !== n) return n;
        const i = t[1];
        i.firstCreatePass &&
          ((e.injectorIndex = t.length),
          mt(i.data, e),
          mt(t, null),
          mt(i.blueprint, null));
        const o = Ot(e, t),
          l = e.injectorIndex;
        if ($o(o)) {
          const d = Si(o),
            p = h(o, t),
            _ = p[1].data;
          for (let S = 0; S < 8; S++) t[l + S] = p[d + S] | _[d + S];
        }
        return (t[l + 8] = o), l;
      }
      function mt(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function Xe(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Ot(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          i = null,
          o = t;
        for (; null !== o; ) {
          const l = o[1],
            d = l.type;
          if (((i = 2 === d ? l.declTNode : 1 === d ? o[6] : null), null === i))
            return -1;
          if ((n++, (o = o[15]), -1 !== i.injectorIndex))
            return i.injectorIndex | (n << 16);
        }
        return -1;
      }
      function ut(e, t, n) {
        !(function ue(e, t, n) {
          let i;
          "string" == typeof n
            ? (i = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(li) && (i = n[li]),
            null == i && (i = n[li] = V++);
          const o = 255 & i;
          t.data[e + (o >> 5)] |= 1 << o;
        })(e, t, n);
      }
      function mr(e, t, n) {
        if (n & Z.Optional) return e;
        de(t, "NodeInjector");
      }
      function Mo(e, t, n, i) {
        if (
          (n & Z.Optional && void 0 === i && (i = null),
          0 == (n & (Z.Self | Z.Host)))
        ) {
          const o = e[9],
            l = Pe(void 0);
          try {
            return o ? o.get(t, i, n & Z.Optional) : It(t, i, n & Z.Optional);
          } finally {
            Pe(l);
          }
        }
        return mr(i, t, n);
      }
      function Xr(e, t, n, i = Z.Default, o) {
        if (null !== e) {
          const l = (function Ja(e) {
            if ("string" == typeof e) return e.charCodeAt(0) || 0;
            const t = e.hasOwnProperty(li) ? e[li] : void 0;
            return "number" == typeof t ? (t >= 0 ? 255 & t : za) : t;
          })(n);
          if ("function" == typeof l) {
            if (!Ho(t, e, i)) return i & Z.Host ? mr(o, n, i) : Mo(t, n, i, o);
            try {
              const d = l(i);
              if (null != d || i & Z.Optional) return d;
              de(n);
            } finally {
              Gs();
            }
          } else if ("number" == typeof l) {
            let d = null,
              p = Xe(e, t),
              _ = -1,
              S = i & Z.Host ? t[16][6] : null;
            for (
              (-1 === p || i & Z.SkipSelf) &&
              ((_ = -1 === p ? Ot(e, t) : t[p + 8]),
              -1 !== _ && Ka(i, !1)
                ? ((d = t[1]), (p = Si(_)), (t = h(_, t)))
                : (p = -1));
              -1 !== p;

            ) {
              const N = t[1];
              if (rc(l, p, N.data)) {
                const P = Ya(p, t, n, d, i, S);
                if (P !== eo) return P;
              }
              (_ = t[p + 8]),
                -1 !== _ && Ka(i, t[1].data[p + 8] === S) && rc(l, p, t)
                  ? ((d = N), (p = Si(_)), (t = h(_, t)))
                  : (p = -1);
            }
          }
        }
        return Mo(t, n, i, o);
      }
      const eo = {};
      function za() {
        return new Oo(Mn(), we());
      }
      function Ya(e, t, n, i, o, l) {
        const d = t[1],
          p = d.data[e + 8],
          N = ps(
            p,
            d,
            n,
            null == i ? Xi(p) && f : i != d && 0 != (3 & p.type),
            o & Z.Host && l === p
          );
        return null !== N ? Wo(t, d, N, p) : eo;
      }
      function ps(e, t, n, i, o) {
        const l = e.providerIndexes,
          d = t.data,
          p = 1048575 & l,
          _ = e.directiveStart,
          N = l >> 20,
          B = o ? p + N : e.directiveEnd;
        for (let J = i ? p : p + N; J < B; J++) {
          const ge = d[J];
          if ((J < _ && n === ge) || (J >= _ && ge.type === n)) return J;
        }
        if (o) {
          const J = d[_];
          if (J && Kn(J) && J.type === n) return _;
        }
        return null;
      }
      function Wo(e, t, n, i) {
        let o = e[n];
        const l = t.data;
        if (
          (function tc(e) {
            return e instanceof So;
          })(o)
        ) {
          const d = o;
          d.resolving &&
            (function q(e, t) {
              const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
              throw new Fe(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(Ke(l[n]));
          const p = b(d.canSeeViewProviders);
          d.resolving = !0;
          const _ = d.injectImpl ? Pe(d.injectImpl) : null;
          Ho(e, i, Z.Default);
          try {
            (o = e[n] = d.factory(void 0, l, e, i)),
              t.firstCreatePass &&
                n >= i.directiveStart &&
                (function zs(e, t, n) {
                  const {
                    ngOnChanges: i,
                    ngOnInit: o,
                    ngDoCheck: l,
                  } = t.type.prototype;
                  if (i) {
                    const d = zr(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, d),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, d);
                  }
                  o &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o),
                    l &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, l),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, l));
                })(n, l[n], t);
          } finally {
            null !== _ && Pe(_), b(p), (d.resolving = !1), Gs();
          }
        }
        return o;
      }
      function rc(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function Ka(e, t) {
        return !(e & Z.Self || (e & Z.Host && t));
      }
      class Oo {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, i) {
          return Xr(this._tNode, this._lView, t, i, n);
        }
      }
      function Ou(e) {
        return Tt(() => {
          const t = e.prototype.constructor,
            n = t[$t] || Js(t),
            i = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== i; ) {
            const l = o[$t] || Js(o);
            if (l && l !== n) return l;
            o = Object.getPrototypeOf(o);
          }
          return (l) => new l();
        });
      }
      function Js(e) {
        return Me(e)
          ? () => {
              const t = Js(me(e));
              return t && t();
            }
          : si(e);
      }
      function oc(e) {
        return (function Yi(e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const i = n.length;
            let o = 0;
            for (; o < i; ) {
              const l = n[o];
              if (gr(l)) break;
              if (0 === l) o += 2;
              else if ("number" == typeof l)
                for (o++; o < i && "string" == typeof n[o]; ) o++;
              else {
                if (l === t) return n[o + 1];
                o += 2;
              }
            }
          }
          return null;
        })(Mn(), e);
      }
      const ms = "__parameters__";
      function zo(e, t, n) {
        return Tt(() => {
          const i = (function qa(e) {
            return function (...n) {
              if (e) {
                const i = e(...n);
                for (const o in i) this[o] = i[o];
              }
            };
          })(t);
          function o(...l) {
            if (this instanceof o) return i.apply(this, l), this;
            const d = new o(...l);
            return (p.annotation = d), p;
            function p(_, S, N) {
              const P = _.hasOwnProperty(ms)
                ? _[ms]
                : Object.defineProperty(_, ms, { value: [] })[ms];
              for (; P.length <= N; ) P.push(null);
              return (P[N] = P[N] || []).push(d), _;
            }
          }
          return (
            n && (o.prototype = Object.create(n.prototype)),
            (o.prototype.ngMetadataName = e),
            (o.annotationCls = o),
            o
          );
        });
      }
      class On {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = Xt({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory,
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const sc = new On("AnalyzeForEntryComponents");
      function sr(e, t) {
        void 0 === t && (t = e);
        for (let n = 0; n < e.length; n++) {
          let i = e[n];
          Array.isArray(i)
            ? (t === e && (t = e.slice(0, n)), sr(i, t))
            : t !== e && t.push(i);
        }
        return t;
      }
      function Ar(e, t) {
        e.forEach((n) => (Array.isArray(n) ? Ar(n, t) : t(n)));
      }
      function Zs(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function ki(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function Qs(e, t) {
        const n = [];
        for (let i = 0; i < e; i++) n.push(t);
        return n;
      }
      function Ji(e, t, n) {
        let i = vs(e, t);
        return (
          i >= 0
            ? (e[1 | i] = n)
            : ((i = ~i),
              (function yh(e, t, n, i) {
                let o = e.length;
                if (o == t) e.push(n, i);
                else if (1 === o) e.push(i, e[0]), (e[0] = n);
                else {
                  for (o--, e.push(e[o - 1], e[o]); o > t; )
                    (e[o] = e[o - 2]), o--;
                  (e[t] = n), (e[t + 1] = i);
                }
              })(e, i, t, n)),
          i
        );
      }
      function lc(e, t) {
        const n = vs(e, t);
        if (n >= 0) return e[1 | n];
      }
      function vs(e, t) {
        return (function cc(e, t, n) {
          let i = 0,
            o = e.length >> n;
          for (; o !== i; ) {
            const l = i + ((o - i) >> 1),
              d = e[l << n];
            if (t === d) return l << n;
            d > t ? (o = l) : (i = l + 1);
          }
          return ~(o << n);
        })(e, t, 1);
      }
      const Xs = {},
        fc = "__NG_DI_FLAG__",
        el = "ngTempTokenPath",
        Sh = /\n/gm,
        Lu = "__source",
        Nh = Ne({ provide: String, useValue: Ne });
      let ea;
      function vn(e) {
        const t = ea;
        return (ea = e), t;
      }
      function Mh(e, t = Z.Default) {
        if (void 0 === ea) throw new Fe(203, "");
        return null === ea
          ? It(e, void 0, t)
          : ea.get(e, t & Z.Optional ? null : void 0, t);
      }
      function hi(e, t = Z.Default) {
        return (
          (function Se() {
            return oe;
          })() || Mh
        )(me(e), t);
      }
      const Oh = hi;
      function Yo(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const i = me(e[n]);
          if (Array.isArray(i)) {
            if (0 === i.length) throw new Fe(900, "");
            let o,
              l = Z.Default;
            for (let d = 0; d < i.length; d++) {
              const p = i[d],
                _ = Vu(p);
              "number" == typeof _
                ? -1 === _
                  ? (o = p.token)
                  : (l |= _)
                : (o = p);
            }
            t.push(hi(o, l));
          } else t.push(hi(i));
        }
        return t;
      }
      function Jo(e, t) {
        return (e[fc] = t), (e.prototype[fc] = t), e;
      }
      function Vu(e) {
        return e[fc];
      }
      const ys = Jo(
          zo("Inject", (e) => ({ token: e })),
          -1
        ),
        Ko = Jo(zo("Optional"), 8),
        bs = Jo(zo("SkipSelf"), 4);
      let il;
      function Cs(e) {
        var t;
        return (
          (null ===
            (t = (function rl() {
              if (void 0 === il && ((il = null), kt.trustedTypes))
                try {
                  il = kt.trustedTypes.createPolicy("angular", {
                    createHTML: (e) => e,
                    createScript: (e) => e,
                    createScriptURL: (e) => e,
                  });
                } catch (e) {}
              return il;
            })()) || void 0 === t
            ? void 0
            : t.createHTML(e)) || e
        );
      }
      class Ku {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      function Io(e) {
        return e instanceof Ku ? e.changingThisBreaksApplicationSecurity : e;
      }
      class yn {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = "<body><remove></remove>" + t;
          try {
            const n = new window.DOMParser().parseFromString(
              Cs(t),
              "text/html"
            ).body;
            return null === n
              ? this.inertDocumentHelper.getInertBodyElement(t)
              : (n.removeChild(n.firstChild), n);
          } catch (n) {
            return null;
          }
        }
      }
      class sl {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument(
                "sanitization-inert"
              )),
            null == this.inertDocument.body)
          ) {
            const n = this.inertDocument.createElement("html");
            this.inertDocument.appendChild(n);
            const i = this.inertDocument.createElement("body");
            n.appendChild(i);
          }
        }
        getInertBodyElement(t) {
          const n = this.inertDocument.createElement("template");
          if ("content" in n) return (n.innerHTML = Cs(t)), n;
          const i = this.inertDocument.createElement("body");
          return (
            (i.innerHTML = Cs(t)),
            this.defaultDoc.documentMode && this.stripCustomNsAttrs(i),
            i
          );
        }
        stripCustomNsAttrs(t) {
          const n = t.attributes;
          for (let o = n.length - 1; 0 < o; o--) {
            const d = n.item(o).name;
            ("xmlns:ns1" === d || 0 === d.indexOf("ns1:")) &&
              t.removeAttribute(d);
          }
          let i = t.firstChild;
          for (; i; )
            i.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(i),
              (i = i.nextSibling);
        }
      }
      const al =
          /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        Qu =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Zo(e) {
        return (e = String(e)).match(al) || e.match(Qu) ? e : "unsafe:" + e;
      }
      function Xu(e) {
        return (e = String(e))
          .split(",")
          .map((t) => Zo(t.trim()))
          .join(", ");
      }
      function Ni(e) {
        const t = {};
        for (const n of e.split(",")) t[n] = !0;
        return t;
      }
      function to(...e) {
        const t = {};
        for (const n of e)
          for (const i in n) n.hasOwnProperty(i) && (t[i] = !0);
        return t;
      }
      const ll = Ni("area,br,col,hr,img,wbr"),
        Dc = Ni("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        Cc = Ni("rp,rt"),
        Rr = to(
          ll,
          to(
            Dc,
            Ni(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
            )
          ),
          to(
            Cc,
            Ni(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
            )
          ),
          to(Cc, Dc)
        ),
        xo = Ni("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        Qo = Ni("srcset"),
        no = to(
          xo,
          Qo,
          Ni(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
          ),
          Ni(
            "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
          )
        );
      var Un = (() => (
        ((Un = Un || {})[(Un.NONE = 0)] = "NONE"),
        (Un[(Un.HTML = 1)] = "HTML"),
        (Un[(Un.STYLE = 2)] = "STYLE"),
        (Un[(Un.SCRIPT = 3)] = "SCRIPT"),
        (Un[(Un.URL = 4)] = "URL"),
        (Un[(Un.RESOURCE_URL = 5)] = "RESOURCE_URL"),
        Un
      ))();
      function Tc(e) {
        const t = (function io() {
          const e = we();
          return e && e[12];
        })();
        return t
          ? t.sanitize(Un.URL, e) || ""
          : (function na(e, t) {
              const n = (function Vh(e) {
                return (e instanceof Ku && e.getTypeName()) || null;
              })(e);
              if (null != n && n !== t) {
                if ("ResourceURL" === n && "URL" === t) return !0;
                throw new Error(
                  `Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`
                );
              }
              return n === t;
            })(e, "URL")
          ? Io(e)
          : Zo(fe(e));
      }
      const dl = "__ngContext__";
      function En(e, t) {
        e[dl] = t;
      }
      function fl(e) {
        const t = (function ws(e) {
          return e[dl] || null;
        })(e);
        return t ? (Array.isArray(t) ? t : t.lView) : null;
      }
      function ia(e) {
        return e.ngOriginalError;
      }
      function gl(e, ...t) {
        e.error(...t);
      }
      class Ts {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t),
            i = (function pl(e) {
              return (e && e.ngErrorLogger) || gl;
            })(t);
          i(this._console, "ERROR", t),
            n && i(this._console, "ORIGINAL ERROR", n);
        }
        _findOriginalError(t) {
          let n = t && ia(t);
          for (; n && ia(n); ) n = ia(n);
          return n || null;
        }
      }
      const ml = /^>|^->|<!--|-->|--!>|<!-$/g,
        Qh = /(<|>)/;
      const kc = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(kt))();
      function Ir(e) {
        return e instanceof Function ? e() : e;
      }
      var _r = (() => (
        ((_r = _r || {})[(_r.Important = 1)] = "Important"),
        (_r[(_r.DashCase = 2)] = "DashCase"),
        _r
      ))();
      let ra;
      function vl(e, t) {
        return ra(e, t);
      }
      function oa(e) {
        const t = e[3];
        return Dn(t) ? t[3] : t;
      }
      function sa(e) {
        return yd(e[13]);
      }
      function jc(e) {
        return yd(e[4]);
      }
      function yd(e) {
        for (; null !== e && !Dn(e); ) e = e[4];
        return e;
      }
      function Ns(e, t, n, i, o) {
        if (null != i) {
          let l,
            d = !1;
          Dn(i) ? (l = i) : Zt(i) && ((d = !0), (i = i[0]));
          const p = et(i);
          0 === e && null !== n
            ? null == o
              ? Sd(t, n, p)
              : ro(t, n, p, o || null, !0)
            : 1 === e && null !== n
            ? ro(t, n, p, o || null, !0)
            : 2 === e
            ? la(t, p, d)
            : 3 === e && t.destroyNode(p),
            null != l &&
              (function fp(e, t, n, i, o) {
                const l = n[7];
                l !== et(n) && Ns(t, e, i, l, o);
                for (let p = 10; p < n.length; p++) {
                  const _ = n[p];
                  ca(_[1], _, e, t, i, l);
                }
              })(t, e, l, n, o);
        }
      }
      function Uc(e, t) {
        return ot(e) ? e.createText(t) : e.createTextNode(t);
      }
      function yl(e, t, n) {
        ot(e) ? e.setValue(t, n) : (t.textContent = n);
      }
      function ip(e, t) {
        return e.createComment(
          (function _l(e) {
            return e.replace(ml, (t) => t.replace(Qh, "\u200b$1\u200b"));
          })(t)
        );
      }
      function Gc(e, t, n) {
        if (ot(e)) return e.createElement(t, n);
        {
          const i =
            null !== n
              ? (function R(e) {
                  const t = e.toLowerCase();
                  return "svg" === t
                    ? "http://www.w3.org/2000/svg"
                    : t === M
                    ? "http://www.w3.org/1998/MathML/"
                    : null;
                })(n)
              : null;
          return null === i ? e.createElement(t) : e.createElementNS(i, t);
        }
      }
      function Ed(e, t) {
        const n = e[9],
          i = n.indexOf(t),
          o = t[3];
        1024 & t[2] && ((t[2] &= -1025), A(o, -1)), n.splice(i, 1);
      }
      function $c(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          i = e[n];
        if (i) {
          const o = i[17];
          null !== o && o !== e && Ed(o, i), t > 0 && (e[n - 1][4] = i[4]);
          const l = ki(e, 10 + t);
          !(function rp(e, t) {
            ca(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(i[1], i);
          const d = l[19];
          null !== d && d.detachView(l[1]),
            (i[3] = null),
            (i[4] = null),
            (i[2] &= -129);
        }
        return i;
      }
      function bl(e, t) {
        if (!(256 & t[2])) {
          const n = t[11];
          ot(n) && n.destroyNode && ca(e, t, n, 3, null, null),
            (function sp(e) {
              let t = e[13];
              if (!t) return Wc(e[1], e);
              for (; t; ) {
                let n = null;
                if (Zt(t)) n = t[13];
                else {
                  const i = t[10];
                  i && (n = i);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    Zt(t) && Wc(t[1], t), (t = t[3]);
                  null === t && (t = e), Zt(t) && Wc(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Wc(e, t) {
        if (!(256 & t[2])) {
          (t[2] &= -129),
            (t[2] |= 256),
            (function cp(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let i = 0; i < n.length; i += 2) {
                  const o = t[n[i]];
                  if (!(o instanceof So)) {
                    const l = n[i + 1];
                    if (Array.isArray(l))
                      for (let d = 0; d < l.length; d += 2) {
                        const p = o[l[d]],
                          _ = l[d + 1];
                        try {
                          _.call(p);
                        } finally {
                        }
                      }
                    else
                      try {
                        l.call(o);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function lp(e, t) {
              const n = e.cleanup,
                i = t[7];
              let o = -1;
              if (null !== n)
                for (let l = 0; l < n.length - 1; l += 2)
                  if ("string" == typeof n[l]) {
                    const d = n[l + 1],
                      p = "function" == typeof d ? d(t) : et(t[d]),
                      _ = i[(o = n[l + 2])],
                      S = n[l + 3];
                    "boolean" == typeof S
                      ? p.removeEventListener(n[l], _, S)
                      : S >= 0
                      ? i[(o = S)]()
                      : i[(o = -S)].unsubscribe(),
                      (l += 2);
                  } else {
                    const d = i[(o = n[l + 1])];
                    n[l].call(d);
                  }
              if (null !== i) {
                for (let l = o + 1; l < i.length; l++) i[l]();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && ot(t[11]) && t[11].destroy();
          const n = t[17];
          if (null !== n && Dn(t[3])) {
            n !== t[3] && Ed(n, t);
            const i = t[19];
            null !== i && i.detachView(e);
          }
        }
      }
      function wd(e, t, n) {
        return Td(e, t.parent, n);
      }
      function Td(e, t, n) {
        let i = t;
        for (; null !== i && 40 & i.type; ) i = (t = i).parent;
        if (null === i) return n[0];
        if (2 & i.flags) {
          const o = e.data[i.directiveStart].encapsulation;
          if (o === Be.None || o === Be.Emulated) return null;
        }
        return xn(i, n);
      }
      function ro(e, t, n, i, o) {
        ot(e) ? e.insertBefore(t, n, i, o) : t.insertBefore(n, i, o);
      }
      function Sd(e, t, n) {
        ot(e) ? e.appendChild(t, n) : t.appendChild(n);
      }
      function Nd(e, t, n, i, o) {
        null !== i ? ro(e, t, n, i, o) : Sd(e, t, n);
      }
      function Dl(e, t) {
        return ot(e) ? e.parentNode(t) : t.parentNode;
      }
      function zc(e, t, n) {
        return Jc(e, t, n);
      }
      function Yc(e, t, n) {
        return 40 & e.type ? xn(e, n) : null;
      }
      let El,
        Jc = Yc;
      function Kc(e, t) {
        (Jc = e), (El = t);
      }
      function Ms(e, t, n, i) {
        const o = wd(e, i, t),
          l = t[11],
          p = zc(i.parent || t[6], i, t);
        if (null != o)
          if (Array.isArray(n))
            for (let _ = 0; _ < n.length; _++) Nd(l, o, n[_], p, !1);
          else Nd(l, o, n, p, !1);
        void 0 !== El && El(l, i, t, n, o);
      }
      function aa(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return xn(t, e);
          if (4 & n) return wl(-1, e[t.index]);
          if (8 & n) {
            const i = t.child;
            if (null !== i) return aa(e, i);
            {
              const o = e[t.index];
              return Dn(o) ? wl(-1, o) : et(o);
            }
          }
          if (32 & n) return vl(t, e)() || et(e[t.index]);
          {
            const i = qc(e, t);
            return null !== i
              ? Array.isArray(i)
                ? i[0]
                : aa(oa(e[16]), i)
              : aa(e, t.next);
          }
        }
        return null;
      }
      function qc(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function wl(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const i = t[n],
            o = i[1].firstChild;
          if (null !== o) return aa(i, o);
        }
        return t[7];
      }
      function la(e, t, n) {
        const i = Dl(e, t);
        i &&
          (function up(e, t, n, i) {
            ot(e) ? e.removeChild(t, n, i) : t.removeChild(n);
          })(e, i, t, n);
      }
      function Zc(e, t, n, i, o, l, d) {
        for (; null != n; ) {
          const p = i[n.index],
            _ = n.type;
          if (
            (d && 0 === t && (p && En(et(p), i), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & _) Zc(e, t, n.child, i, o, l, !1), Ns(t, e, o, p, l);
            else if (32 & _) {
              const S = vl(n, i);
              let N;
              for (; (N = S()); ) Ns(t, e, o, N, l);
              Ns(t, e, o, p, l);
            } else 16 & _ ? Md(e, t, i, n, o, l) : Ns(t, e, o, p, l);
          n = d ? n.projectionNext : n.next;
        }
      }
      function ca(e, t, n, i, o, l) {
        Zc(n, i, e.firstChild, t, o, l, !1);
      }
      function Md(e, t, n, i, o, l) {
        const d = n[16],
          _ = d[6].projection[i.projection];
        if (Array.isArray(_))
          for (let S = 0; S < _.length; S++) Ns(t, e, o, _[S], l);
        else Zc(e, t, _, d[3], o, l, !0);
      }
      function Od(e, t, n) {
        ot(e) ? e.setAttribute(t, "style", n) : (t.style.cssText = n);
      }
      function Qc(e, t, n) {
        ot(e)
          ? "" === n
            ? e.removeAttribute(t, "class")
            : e.setAttribute(t, "class", n)
          : (t.className = n);
      }
      function Tl(e, t, n) {
        let i = e.length;
        for (;;) {
          const o = e.indexOf(t, n);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const l = t.length;
            if (o + l === i || e.charCodeAt(o + l) <= 32) return o;
          }
          n = o + 1;
        }
      }
      const Xc = "ng-template";
      function s(e, t, n) {
        let i = 0;
        for (; i < e.length; ) {
          let o = e[i++];
          if (n && "class" === o) {
            if (((o = e[i]), -1 !== Tl(o.toLowerCase(), t, 0))) return !0;
          } else if (1 === o) {
            for (; i < e.length && "string" == typeof (o = e[i++]); )
              if (o.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function c(e) {
        return 4 === e.type && e.value !== Xc;
      }
      function r(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Xc);
      }
      function u(e, t, n) {
        let i = 4;
        const o = e.attrs || [],
          l = (function $(e) {
            for (let t = 0; t < e.length; t++) if (gr(e[t])) return t;
            return e.length;
          })(o);
        let d = !1;
        for (let p = 0; p < t.length; p++) {
          const _ = t[p];
          if ("number" != typeof _) {
            if (!d)
              if (4 & i) {
                if (
                  ((i = 2 | (1 & i)),
                  ("" !== _ && !r(e, _, n)) || ("" === _ && 1 === t.length))
                ) {
                  if (g(i)) return !1;
                  d = !0;
                }
              } else {
                const S = 8 & i ? _ : t[++p];
                if (8 & i && null !== e.attrs) {
                  if (!s(e.attrs, S, n)) {
                    if (g(i)) return !1;
                    d = !0;
                  }
                  continue;
                }
                const P = C(8 & i ? "class" : _, o, c(e), n);
                if (-1 === P) {
                  if (g(i)) return !1;
                  d = !0;
                  continue;
                }
                if ("" !== S) {
                  let B;
                  B = P > l ? "" : o[P + 1].toLowerCase();
                  const J = 8 & i ? B : null;
                  if ((J && -1 !== Tl(J, S, 0)) || (2 & i && S !== B)) {
                    if (g(i)) return !1;
                    d = !0;
                  }
                }
              }
          } else {
            if (!d && !g(i) && !g(_)) return !1;
            if (d && g(_)) continue;
            (d = !1), (i = _ | (1 & i));
          }
        }
        return g(i) || d;
      }
      function g(e) {
        return 0 == (1 & e);
      }
      function C(e, t, n, i) {
        if (null === t) return -1;
        let o = 0;
        if (i || !n) {
          let l = !1;
          for (; o < t.length; ) {
            const d = t[o];
            if (d === e) return o;
            if (3 === d || 6 === d) l = !0;
            else {
              if (1 === d || 2 === d) {
                let p = t[++o];
                for (; "string" == typeof p; ) p = t[++o];
                continue;
              }
              if (4 === d) break;
              if (0 === d) {
                o += 4;
                continue;
              }
            }
            o += l ? 1 : 2;
          }
          return -1;
        }
        return (function ee(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const i = e[n];
              if ("number" == typeof i) return -1;
              if (i === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function x(e, t, n = !1) {
        for (let i = 0; i < t.length; i++) if (u(e, t[i], n)) return !0;
        return !1;
      }
      function pe(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const i = t[n];
          if (e.length === i.length) {
            for (let o = 0; o < e.length; o++) if (e[o] !== i[o]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function ze(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function We(e) {
        let t = e[0],
          n = 1,
          i = 2,
          o = "",
          l = !1;
        for (; n < e.length; ) {
          let d = e[n];
          if ("string" == typeof d)
            if (2 & i) {
              const p = e[++n];
              o += "[" + d + (p.length > 0 ? '="' + p + '"' : "") + "]";
            } else 8 & i ? (o += "." + d) : 4 & i && (o += " " + d);
          else
            "" !== o && !g(d) && ((t += ze(l, o)), (o = "")),
              (i = d),
              (l = l || !g(i));
          n++;
        }
        return "" !== o && (t += ze(l, o)), t;
      }
      const Ie = {};
      function Ct(e) {
        Lt(xt(), we(), sn() + e, bo());
      }
      function Lt(e, t, n, i) {
        if (!i)
          if (3 == (3 & t[2])) {
            const l = e.preOrderCheckHooks;
            null !== l && Uo(t, l, n);
          } else {
            const l = e.preOrderHooks;
            null !== l && Go(t, l, 0, n);
          }
        hr(n);
      }
      function Qt(e, t) {
        return (e << 17) | (t << 2);
      }
      function _t(e) {
        return (e >> 17) & 32767;
      }
      function Yt(e) {
        return 2 | e;
      }
      function At(e) {
        return (131068 & e) >> 2;
      }
      function Gn(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function bn(e) {
        return 1 | e;
      }
      function bp(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let i = 0; i < n.length; i += 2) {
            const o = n[i],
              l = n[i + 1];
            if (-1 !== l) {
              const d = e.data[l];
              ds(o), d.contentQueries(2, t[l], l);
            }
          }
      }
      function xl(e, t, n, i, o, l, d, p, _, S) {
        const N = t.blueprint.slice();
        return (
          (N[0] = o),
          (N[2] = 140 | i),
          v(N),
          (N[3] = N[15] = e),
          (N[8] = n),
          (N[10] = d || (e && e[10])),
          (N[11] = p || (e && e[11])),
          (N[12] = _ || (e && e[12]) || null),
          (N[9] = S || (e && e[9]) || null),
          (N[6] = l),
          (N[16] = 2 == t.type ? e[16] : N),
          N
        );
      }
      function ma(e, t, n, i, o) {
        let l = e.data[t];
        if (null === l)
          (l = kd(e, t, n, i, o)),
            (function Ha() {
              return Y.lFrame.inI18n;
            })() && (l.flags |= 64);
        else if (64 & l.type) {
          (l.type = n), (l.value = i), (l.attrs = o);
          const d = qr();
          l.injectorIndex = null === d ? -1 : d.injectorIndex;
        }
        return Wi(l, !0), l;
      }
      function kd(e, t, n, i, o) {
        const l = Ls(),
          d = ss(),
          _ = (e.data[t] = (function kv(e, t, n, i, o, l) {
            return {
              type: n,
              index: i,
              insertBeforeIndex: null,
              injectorIndex: t ? t.injectorIndex : -1,
              directiveStart: -1,
              directiveEnd: -1,
              directiveStylingLast: -1,
              propertyBindings: null,
              flags: 0,
              providerIndexes: 0,
              value: o,
              attrs: l,
              mergedAttrs: null,
              localNames: null,
              initialInputs: void 0,
              inputs: null,
              outputs: null,
              tViews: null,
              next: null,
              projectionNext: null,
              child: null,
              parent: t,
              projection: null,
              styles: null,
              stylesWithoutHost: null,
              residualStyles: void 0,
              classes: null,
              classesWithoutHost: null,
              residualClasses: void 0,
              classBindings: 0,
              styleBindings: 0,
            };
          })(0, d ? l : l && l.parent, n, t, i, o));
        return (
          null === e.firstChild && (e.firstChild = _),
          null !== l &&
            (d
              ? null == l.child && null !== _.parent && (l.child = _)
              : null === l.next && (l.next = _)),
          _
        );
      }
      function _a(e, t, n, i) {
        if (0 === n) return -1;
        const o = t.length;
        for (let l = 0; l < n; l++)
          t.push(i), e.blueprint.push(i), e.data.push(null);
        return o;
      }
      function Pl(e, t, n) {
        Co(t);
        try {
          const i = e.viewQuery;
          null !== i && Wd(1, i, n);
          const o = e.template;
          null !== o && Dp(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && bp(e, t),
            e.staticViewQueries && Wd(2, e.viewQuery, n);
          const l = e.components;
          null !== l &&
            (function xv(e, t) {
              for (let n = 0; n < t.length; n++) e0(e, t[n]);
            })(t, l);
        } catch (i) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            i)
          );
        } finally {
          (t[2] &= -5), Eo();
        }
      }
      function va(e, t, n, i) {
        const o = t[2];
        if (256 == (256 & o)) return;
        Co(t);
        const l = bo();
        try {
          v(t),
            (function cs(e) {
              return (Y.lFrame.bindingIndex = e);
            })(e.bindingStartIndex),
            null !== n && Dp(e, t, n, 2, i);
          const d = 3 == (3 & o);
          if (!l)
            if (d) {
              const S = e.preOrderCheckHooks;
              null !== S && Uo(t, S, null);
            } else {
              const S = e.preOrderHooks;
              null !== S && Go(t, S, 0, null), To(t, 0);
            }
          if (
            ((function Qv(e) {
              for (let t = sa(e); null !== t; t = jc(t)) {
                if (!t[2]) continue;
                const n = t[9];
                for (let i = 0; i < n.length; i++) {
                  const o = n[i],
                    l = o[3];
                  0 == (1024 & o[2]) && A(l, 1), (o[2] |= 1024);
                }
              }
            })(t),
            (function Zv(e) {
              for (let t = sa(e); null !== t; t = jc(t))
                for (let n = 10; n < t.length; n++) {
                  const i = t[n],
                    o = i[1];
                  tr(i) && va(o, i, o.template, i[8]);
                }
            })(t),
            null !== e.contentQueries && bp(e, t),
            !l)
          )
            if (d) {
              const S = e.contentCheckHooks;
              null !== S && Uo(t, S);
            } else {
              const S = e.contentHooks;
              null !== S && Go(t, S, 1), To(t, 1);
            }
          !(function Rv(e, t) {
            const n = e.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let i = 0; i < n.length; i++) {
                  const o = n[i];
                  if (o < 0) hr(~o);
                  else {
                    const l = o,
                      d = n[++i],
                      p = n[++i];
                    ja(d, l), p(2, t[l]);
                  }
                }
              } finally {
                hr(-1);
              }
          })(e, t);
          const p = e.components;
          null !== p &&
            (function Iv(e, t) {
              for (let n = 0; n < t.length; n++) Xv(e, t[n]);
            })(t, p);
          const _ = e.viewQuery;
          if ((null !== _ && Wd(2, _, i), !l))
            if (d) {
              const S = e.viewCheckHooks;
              null !== S && Uo(t, S);
            } else {
              const S = e.viewHooks;
              null !== S && Go(t, S, 2), To(t, 2);
            }
          !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
            l || (t[2] &= -73),
            1024 & t[2] && ((t[2] &= -1025), A(t[3], -1));
        } finally {
          Eo();
        }
      }
      function Pv(e, t, n, i) {
        const o = t[10],
          l = !bo(),
          d = Nr(t);
        try {
          l && !d && o.begin && o.begin(), d && Pl(e, t, i), va(e, t, n, i);
        } finally {
          l && !d && o.end && o.end();
        }
      }
      function Dp(e, t, n, i, o) {
        const l = sn(),
          d = 2 & i;
        try {
          hr(-1), d && t.length > 20 && Lt(e, t, 20, bo()), n(i, o);
        } finally {
          hr(l);
        }
      }
      function Cp(e, t, n) {
        if (Ui(t)) {
          const o = t.directiveEnd;
          for (let l = t.directiveStart; l < o; l++) {
            const d = e.data[l];
            d.contentQueries && d.contentQueries(1, n[l], l);
          }
        }
      }
      function Ld(e, t, n) {
        !ir() ||
          ((function Gv(e, t, n, i) {
            const o = n.directiveStart,
              l = n.directiveEnd;
            e.firstCreatePass || Ue(n, t), En(i, t);
            const d = n.initialInputs;
            for (let p = o; p < l; p++) {
              const _ = e.data[p],
                S = Kn(_);
              S && Jv(t, n, _);
              const N = Wo(t, e, p, n);
              En(N, t),
                null !== d && Kv(0, p - o, N, _, 0, d),
                S && (jn(n.index, t)[8] = N);
            }
          })(e, t, n, xn(n, t)),
          128 == (128 & n.flags) &&
            (function $v(e, t, n) {
              const i = n.directiveStart,
                o = n.directiveEnd,
                d = n.index,
                p = (function Vo() {
                  return Y.lFrame.currentDirectiveIndex;
                })();
              try {
                hr(d);
                for (let _ = i; _ < o; _++) {
                  const S = e.data[_],
                    N = t[_];
                  us(_),
                    (null !== S.hostBindings ||
                      0 !== S.hostVars ||
                      null !== S.hostAttrs) &&
                      Ap(S, N);
                }
              } finally {
                hr(-1), us(p);
              }
            })(e, t, n));
      }
      function Bd(e, t, n = xn) {
        const i = t.localNames;
        if (null !== i) {
          let o = t.index + 1;
          for (let l = 0; l < i.length; l += 2) {
            const d = i[l + 1],
              p = -1 === d ? n(t, e) : e[d];
            e[o++] = p;
          }
        }
      }
      function Ep(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = nu(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function nu(e, t, n, i, o, l, d, p, _, S) {
        const N = 20 + i,
          P = N + o,
          B = (function Fv(e, t) {
            const n = [];
            for (let i = 0; i < t; i++) n.push(i < e ? null : Ie);
            return n;
          })(N, P),
          J = "function" == typeof S ? S() : S;
        return (B[1] = {
          type: e,
          blueprint: B,
          template: n,
          queries: null,
          viewQuery: p,
          declTNode: t,
          data: B.slice().fill(null, N),
          bindingStartIndex: N,
          expandoStartIndex: P,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof l ? l() : l,
          pipeRegistry: "function" == typeof d ? d() : d,
          firstChild: null,
          schemas: _,
          consts: J,
          incompleteFirstPass: !1,
        });
      }
      function Sp(e, t, n, i) {
        const o = kp(t);
        null === n
          ? o.push(i)
          : (o.push(n), e.firstCreatePass && Lp(e).push(i, o.length - 1));
      }
      function Np(e, t, n) {
        for (let i in e)
          if (e.hasOwnProperty(i)) {
            const o = e[i];
            (n = null === n ? {} : n).hasOwnProperty(i)
              ? n[i].push(t, o)
              : (n[i] = [t, o]);
          }
        return n;
      }
      function ar(e, t, n, i, o, l, d, p) {
        const _ = xn(t, n);
        let N,
          S = t.inputs;
        !p && null != S && (N = S[i])
          ? (Hp(e, n, N, i, o),
            Xi(t) &&
              (function Vv(e, t) {
                const n = jn(t, e);
                16 & n[2] || (n[2] |= 64);
              })(n, t.index))
          : 3 & t.type &&
            ((i = (function Bv(e) {
              return "class" === e
                ? "className"
                : "for" === e
                ? "htmlFor"
                : "formaction" === e
                ? "formAction"
                : "innerHtml" === e
                ? "innerHTML"
                : "readonly" === e
                ? "readOnly"
                : "tabindex" === e
                ? "tabIndex"
                : e;
            })(i)),
            (o = null != d ? d(o, t.value || "", i) : o),
            ot(l)
              ? l.setProperty(_, i, o)
              : hs(i) || (_.setProperty ? _.setProperty(i, o) : (_[i] = o)));
      }
      function Vd(e, t, n, i) {
        let o = !1;
        if (ir()) {
          const l = (function Wv(e, t, n) {
              const i = e.directiveRegistry;
              let o = null;
              if (i)
                for (let l = 0; l < i.length; l++) {
                  const d = i[l];
                  x(n, d.selectors, !1) &&
                    (o || (o = []),
                    ut(Ue(n, t), e, d.type),
                    Kn(d) ? (Rp(e, n), o.unshift(d)) : o.push(d));
                }
              return o;
            })(e, t, n),
            d = null === i ? null : { "": -1 };
          if (null !== l) {
            (o = !0), Ip(n, e.data.length, l.length);
            for (let N = 0; N < l.length; N++) {
              const P = l[N];
              P.providersResolver && P.providersResolver(P);
            }
            let p = !1,
              _ = !1,
              S = _a(e, t, l.length, null);
            for (let N = 0; N < l.length; N++) {
              const P = l[N];
              (n.mergedAttrs = Qr(n.mergedAttrs, P.hostAttrs)),
                xp(e, n, t, S, P),
                Yv(S, P, d),
                null !== P.contentQueries && (n.flags |= 8),
                (null !== P.hostBindings ||
                  null !== P.hostAttrs ||
                  0 !== P.hostVars) &&
                  (n.flags |= 128);
              const B = P.type.prototype;
              !p &&
                (B.ngOnChanges || B.ngOnInit || B.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
                (p = !0)),
                !_ &&
                  (B.ngOnChanges || B.ngDoCheck) &&
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (_ = !0)),
                S++;
            }
            !(function Lv(e, t) {
              const i = t.directiveEnd,
                o = e.data,
                l = t.attrs,
                d = [];
              let p = null,
                _ = null;
              for (let S = t.directiveStart; S < i; S++) {
                const N = o[S],
                  P = N.inputs,
                  B = null === l || c(t) ? null : qv(P, l);
                d.push(B), (p = Np(P, S, p)), (_ = Np(N.outputs, S, _));
              }
              null !== p &&
                (p.hasOwnProperty("class") && (t.flags |= 16),
                p.hasOwnProperty("style") && (t.flags |= 32)),
                (t.initialInputs = d),
                (t.inputs = p),
                (t.outputs = _);
            })(e, n);
          }
          d &&
            (function zv(e, t, n) {
              if (t) {
                const i = (e.localNames = []);
                for (let o = 0; o < t.length; o += 2) {
                  const l = n[t[o + 1]];
                  if (null == l) throw new Fe(-301, !1);
                  i.push(t[o], l);
                }
              }
            })(n, i, d);
        }
        return (n.mergedAttrs = Qr(n.mergedAttrs, n.attrs)), o;
      }
      function Op(e, t, n, i, o, l) {
        const d = l.hostBindings;
        if (d) {
          let p = e.hostBindingOpCodes;
          null === p && (p = e.hostBindingOpCodes = []);
          const _ = ~t.index;
          (function Uv(e) {
            let t = e.length;
            for (; t > 0; ) {
              const n = e[--t];
              if ("number" == typeof n && n < 0) return n;
            }
            return 0;
          })(p) != _ && p.push(_),
            p.push(i, o, d);
        }
      }
      function Ap(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Rp(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function Yv(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let i = 0; i < t.exportAs.length; i++) n[t.exportAs[i]] = e;
          Kn(t) && (n[""] = e);
        }
      }
      function Ip(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function xp(e, t, n, i, o) {
        e.data[i] = o;
        const l = o.factory || (o.factory = si(o.type)),
          d = new So(l, Kn(o), null);
        (e.blueprint[i] = d),
          (n[i] = d),
          Op(e, t, 0, i, _a(e, n, o.hostVars, Ie), o);
      }
      function Jv(e, t, n) {
        const i = xn(t, e),
          o = Ep(n),
          l = e[10],
          d = iu(
            e,
            xl(
              e,
              o,
              null,
              n.onPush ? 64 : 16,
              i,
              t,
              l,
              l.createRenderer(i, n),
              null,
              null
            )
          );
        e[t.index] = d;
      }
      function Hd(e, t, n, i, o, l, d) {
        if (null == l)
          ot(e) ? e.removeAttribute(t, o, n) : t.removeAttribute(o);
        else {
          const p = null == d ? fe(l) : d(l, i || "", o);
          ot(e)
            ? e.setAttribute(t, o, p, n)
            : n
            ? t.setAttributeNS(n, o, p)
            : t.setAttribute(o, p);
        }
      }
      function Kv(e, t, n, i, o, l) {
        const d = l[t];
        if (null !== d) {
          const p = i.setInput;
          for (let _ = 0; _ < d.length; ) {
            const S = d[_++],
              N = d[_++],
              P = d[_++];
            null !== p ? i.setInput(n, P, S, N) : (n[N] = P);
          }
        }
      }
      function qv(e, t) {
        let n = null,
          i = 0;
        for (; i < t.length; ) {
          const o = t[i];
          if (0 !== o)
            if (5 !== o) {
              if ("number" == typeof o) break;
              e.hasOwnProperty(o) &&
                (null === n && (n = []), n.push(o, e[o], t[i + 1])),
                (i += 2);
            } else i += 2;
          else i += 4;
        }
        return n;
      }
      function Pp(e, t, n, i) {
        return new Array(e, !0, !1, t, null, 0, i, n, null, null);
      }
      function Xv(e, t) {
        const n = jn(t, e);
        if (tr(n)) {
          const i = n[1];
          80 & n[2] ? va(i, n, i.template, n[8]) : n[5] > 0 && jd(n);
        }
      }
      function jd(e) {
        for (let i = sa(e); null !== i; i = jc(i))
          for (let o = 10; o < i.length; o++) {
            const l = i[o];
            if (1024 & l[2]) {
              const d = l[1];
              va(d, l, d.template, l[8]);
            } else l[5] > 0 && jd(l);
          }
        const n = e[1].components;
        if (null !== n)
          for (let i = 0; i < n.length; i++) {
            const o = jn(n[i], e);
            tr(o) && o[5] > 0 && jd(o);
          }
      }
      function e0(e, t) {
        const n = jn(t, e),
          i = n[1];
        (function t0(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(i, n),
          Pl(i, n, n[8]);
      }
      function iu(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function Ud(e) {
        for (; e; ) {
          e[2] |= 64;
          const t = oa(e);
          if (Hr(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function $d(e, t, n) {
        const i = t[10];
        i.begin && i.begin();
        try {
          va(e, t, e.template, n);
        } catch (o) {
          throw (Vp(t, o), o);
        } finally {
          i.end && i.end();
        }
      }
      function Fp(e) {
        !(function Gd(e) {
          for (let t = 0; t < e.components.length; t++) {
            const n = e.components[t],
              i = fl(n),
              o = i[1];
            Pv(o, i, o.template, n);
          }
        })(e[8]);
      }
      function Wd(e, t, n) {
        ds(0), t(e, n);
      }
      const s0 = (() => Promise.resolve(null))();
      function kp(e) {
        return e[7] || (e[7] = []);
      }
      function Lp(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function Vp(e, t) {
        const n = e[9],
          i = n ? n.get(Ts, null) : null;
        i && i.handleError(t);
      }
      function Hp(e, t, n, i, o) {
        for (let l = 0; l < n.length; ) {
          const d = n[l++],
            p = n[l++],
            _ = t[d],
            S = e.data[d];
          null !== S.setInput ? S.setInput(_, o, i, p) : (_[p] = o);
        }
      }
      function ru(e, t, n) {
        let i = n ? e.styles : null,
          o = n ? e.classes : null,
          l = 0;
        if (null !== t)
          for (let d = 0; d < t.length; d++) {
            const p = t[d];
            "number" == typeof p
              ? (l = p)
              : 1 == l
              ? (o = lt(o, p))
              : 2 == l && (i = lt(i, p + ": " + t[++d] + ";"));
          }
        n ? (e.styles = i) : (e.stylesWithoutHost = i),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      const zd = new On("INJECTOR", -1);
      class jp {
        get(t, n = Xs) {
          if (n === Xs) {
            const i = new Error(`NullInjectorError: No provider for ${Ae(t)}!`);
            throw ((i.name = "NullInjectorError"), i);
          }
          return n;
        }
      }
      const Yd = new On("Set Injector scope."),
        Fl = {},
        c0 = {};
      let Jd;
      function Up() {
        return void 0 === Jd && (Jd = new jp()), Jd;
      }
      function Gp(e, t = null, n = null, i) {
        const o = $p(e, t, n, i);
        return o._resolveInjectorDefTypes(), o;
      }
      function $p(e, t = null, n = null, i) {
        return new u0(e, n, t || Up(), i);
      }
      class u0 {
        constructor(t, n, i, o = null) {
          (this.parent = i),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const l = [];
          n && Ar(n, (p) => this.processProvider(p, t, n)),
            Ar([t], (p) => this.processInjectorType(p, [], l)),
            this.records.set(zd, ya(void 0, this));
          const d = this.records.get(Yd);
          (this.scope = null != d ? d.value : null),
            (this.source = o || ("object" == typeof t ? null : Ae(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, n = Xs, i = Z.Default) {
          this.assertNotDestroyed();
          const o = vn(this),
            l = Pe(void 0);
          try {
            if (!(i & Z.SkipSelf)) {
              let p = this.records.get(t);
              if (void 0 === p) {
                const _ =
                  (function v0(e) {
                    return (
                      "function" == typeof e ||
                      ("object" == typeof e && e instanceof On)
                    );
                  })(t) && ni(t);
                (p = _ && this.injectableDefInScope(_) ? ya(Kd(t), Fl) : null),
                  this.records.set(t, p);
              }
              if (null != p) return this.hydrate(t, p);
            }
            return (i & Z.Self ? Up() : this.parent).get(
              t,
              (n = i & Z.Optional && n === Xs ? null : n)
            );
          } catch (d) {
            if ("NullInjectorError" === d.name) {
              if (((d[el] = d[el] || []).unshift(Ae(t)), o)) throw d;
              return (function Hu(e, t, n, i) {
                const o = e[el];
                throw (
                  (t[Lu] && o.unshift(t[Lu]),
                  (e.message = (function hc(e, t, n, i = null) {
                    e =
                      e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                        ? e.substr(2)
                        : e;
                    let o = Ae(t);
                    if (Array.isArray(t)) o = t.map(Ae).join(" -> ");
                    else if ("object" == typeof t) {
                      let l = [];
                      for (let d in t)
                        if (t.hasOwnProperty(d)) {
                          let p = t[d];
                          l.push(
                            d +
                              ":" +
                              ("string" == typeof p ? JSON.stringify(p) : Ae(p))
                          );
                        }
                      o = `{${l.join(", ")}}`;
                    }
                    return `${n}${i ? "(" + i + ")" : ""}[${o}]: ${e.replace(
                      Sh,
                      "\n  "
                    )}`;
                  })("\n" + e.message, o, n, i)),
                  (e.ngTokenPath = o),
                  (e[el] = null),
                  e)
                );
              })(d, t, "R3InjectorError", this.source);
            }
            throw d;
          } finally {
            Pe(l), vn(o);
          }
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((i, o) => t.push(Ae(o))),
            `R3Injector[${t.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new Fe(205, !1);
        }
        processInjectorType(t, n, i) {
          if (!(t = me(t))) return !1;
          let o = wn(t);
          const l = (null == o && t.ngModule) || void 0,
            d = void 0 === l ? t : l,
            p = -1 !== i.indexOf(d);
          if ((void 0 !== l && (o = wn(l)), null == o)) return !1;
          if (null != o.imports && !p) {
            let N;
            i.push(d);
            try {
              Ar(o.imports, (P) => {
                this.processInjectorType(P, n, i) &&
                  (void 0 === N && (N = []), N.push(P));
              });
            } finally {
            }
            if (void 0 !== N)
              for (let P = 0; P < N.length; P++) {
                const { ngModule: B, providers: J } = N[P];
                Ar(J, (ge) => this.processProvider(ge, B, J || Dt));
              }
          }
          this.injectorDefTypes.add(d);
          const _ = si(d) || (() => new d());
          this.records.set(d, ya(_, Fl));
          const S = o.providers;
          if (null != S && !p) {
            const N = t;
            Ar(S, (P) => this.processProvider(P, N, S));
          }
          return void 0 !== l && void 0 !== t.providers;
        }
        processProvider(t, n, i) {
          let o = ba((t = me(t))) ? t : me(t && t.provide);
          const l = (function f0(e, t, n) {
            return zp(e) ? ya(void 0, e.useValue) : ya(Wp(e), Fl);
          })(t);
          if (ba(t) || !0 !== t.multi) this.records.get(o);
          else {
            let d = this.records.get(o);
            d ||
              ((d = ya(void 0, Fl, !0)),
              (d.factory = () => Yo(d.multi)),
              this.records.set(o, d)),
              (o = t),
              d.multi.push(t);
          }
          this.records.set(o, l);
        }
        hydrate(t, n) {
          return (
            n.value === Fl && ((n.value = c0), (n.value = n.factory())),
            "object" == typeof n.value &&
              n.value &&
              (function _0(e) {
                return (
                  null !== e &&
                  "object" == typeof e &&
                  "function" == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this.onDestroy.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = me(t.providedIn);
          return "string" == typeof n
            ? "any" === n || n === this.scope
            : this.injectorDefTypes.has(n);
        }
      }
      function Kd(e) {
        const t = ni(e),
          n = null !== t ? t.factory : si(e);
        if (null !== n) return n;
        if (e instanceof On) throw new Fe(204, !1);
        if (e instanceof Function)
          return (function d0(e) {
            const t = e.length;
            if (t > 0) throw (Qs(t, "?"), new Fe(204, !1));
            const n = (function rn(e) {
              const t = e && (e[Ri] || e[U]);
              if (t) {
                const n = (function Jt(e) {
                  if (e.hasOwnProperty("name")) return e.name;
                  const t = ("" + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? "" : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new Fe(204, !1);
      }
      function Wp(e, t, n) {
        let i;
        if (ba(e)) {
          const o = me(e);
          return si(o) || Kd(o);
        }
        if (zp(e)) i = () => me(e.useValue);
        else if (
          (function p0(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          i = () => e.useFactory(...Yo(e.deps || []));
        else if (
          (function h0(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          i = () => hi(me(e.useExisting));
        else {
          const o = me(e && (e.useClass || e.provide));
          if (
            !(function m0(e) {
              return !!e.deps;
            })(e)
          )
            return si(o) || Kd(o);
          i = () => new o(...Yo(e.deps));
        }
        return i;
      }
      function ya(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function zp(e) {
        return null !== e && "object" == typeof e && Nh in e;
      }
      function ba(e) {
        return "function" == typeof e;
      }
      let ao = (() => {
        class e {
          static create(n, i) {
            var o;
            if (Array.isArray(n)) return Gp({ name: "" }, i, n, "");
            {
              const l = null !== (o = n.name) && void 0 !== o ? o : "";
              return Gp({ name: l }, n.parent, n.providers, l);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = Xs),
          (e.NULL = new jp()),
          (e.ɵprov = Xt({
            token: e,
            providedIn: "any",
            factory: () => hi(zd),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function S0(e, t) {
        jo(fl(e)[1], Mn());
      }
      function Qd(e) {
        let t = (function rg(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const i = [e];
        for (; t; ) {
          let o;
          if (Kn(e)) o = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new Fe(903, "");
            o = t.ɵdir;
          }
          if (o) {
            if (n) {
              i.push(o);
              const d = e;
              (d.inputs = Xd(e.inputs)),
                (d.declaredInputs = Xd(e.declaredInputs)),
                (d.outputs = Xd(e.outputs));
              const p = o.hostBindings;
              p && A0(e, p);
              const _ = o.viewQuery,
                S = o.contentQueries;
              if (
                (_ && M0(e, _),
                S && O0(e, S),
                Ge(e.inputs, o.inputs),
                Ge(e.declaredInputs, o.declaredInputs),
                Ge(e.outputs, o.outputs),
                Kn(o) && o.data.animation)
              ) {
                const N = e.data;
                N.animation = (N.animation || []).concat(o.data.animation);
              }
            }
            const l = o.features;
            if (l)
              for (let d = 0; d < l.length; d++) {
                const p = l[d];
                p && p.ngInherit && p(e), p === Qd && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function N0(e) {
          let t = 0,
            n = null;
          for (let i = e.length - 1; i >= 0; i--) {
            const o = e[i];
            (o.hostVars = t += o.hostVars),
              (o.hostAttrs = Qr(o.hostAttrs, (n = Qr(n, o.hostAttrs))));
          }
        })(i);
      }
      function Xd(e) {
        return e === ii ? {} : e === Dt ? [] : e;
      }
      function M0(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (i, o) => {
              t(i, o), n(i, o);
            }
          : t;
      }
      function O0(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (i, o, l) => {
              t(i, o, l), n(i, o, l);
            }
          : t;
      }
      function A0(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (i, o) => {
              t(i, o), n(i, o);
            }
          : t;
      }
      let ou = null;
      function Da() {
        if (!ou) {
          const e = kt.Symbol;
          if (e && e.iterator) ou = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const i = t[n];
              "entries" !== i &&
                "size" !== i &&
                Map.prototype[i] === Map.prototype.entries &&
                (ou = i);
            }
          }
        }
        return ou;
      }
      function kl(e) {
        return (
          !!ef(e) && (Array.isArray(e) || (!(e instanceof Map) && Da() in e))
        );
      }
      function ef(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function lo(e, t, n) {
        return (e[t] = n);
      }
      function Oi(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Rs(e, t, n, i) {
        const o = Oi(e, t, n);
        return Oi(e, t + 1, i) || o;
      }
      function tf(e, t, n, i) {
        const o = we();
        return (
          Oi(o, Mr(), t) &&
            (xt(),
            (function so(e, t, n, i, o, l) {
              const d = xn(e, t);
              Hd(t[11], d, l, e.value, n, i, o);
            })(_n(), o, e, t, n, i)),
          tf
        );
      }
      function Ea(e, t, n, i) {
        return Oi(e, Mr(), n) ? t + fe(n) + i : Ie;
      }
      function pg(e, t, n, i, o, l, d, p) {
        const _ = we(),
          S = xt(),
          N = e + 20,
          P = S.firstCreatePass
            ? (function L0(e, t, n, i, o, l, d, p, _) {
                const S = t.consts,
                  N = ma(t, e, 4, d || null, y(S, p));
                Vd(t, n, N, y(S, _)), jo(t, N);
                const P = (N.tViews = nu(
                  2,
                  N,
                  i,
                  o,
                  l,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  S
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, N),
                    (P.queries = t.queries.embeddedTView(N))),
                  N
                );
              })(N, S, _, t, n, i, o, l, d)
            : S.data[N];
        Wi(P, !1);
        const B = _[11].createComment("");
        Ms(S, _, B, P),
          En(B, _),
          iu(_, (_[N] = Pp(B, _, B, P))),
          Gi(P) && Ld(S, _, P),
          null != d && Bd(_, P, p);
      }
      function gg(e) {
        return Hn(
          (function Va() {
            return Y.lFrame.contextLView;
          })(),
          20 + e
        );
      }
      function Bl(e, t = Z.Default) {
        const n = we();
        return null === n ? hi(e, t) : Xr(Mn(), n, me(e), t);
      }
      function Sg() {
        throw new Error("invalid");
      }
      function lf(e, t, n) {
        const i = we();
        return Oi(i, Mr(), t) && ar(xt(), _n(), i, e, t, i[11], n, !1), lf;
      }
      function cf(e, t, n, i, o) {
        const d = o ? "class" : "style";
        Hp(e, n, t.inputs[d], d, i);
      }
      function lu(e, t, n, i) {
        const o = we(),
          l = xt(),
          d = 20 + e,
          p = o[11],
          _ = (o[d] = Gc(
            p,
            t,
            (function ec() {
              return Y.lFrame.currentNamespace;
            })()
          )),
          S = l.firstCreatePass
            ? (function ry(e, t, n, i, o, l, d) {
                const p = t.consts,
                  S = ma(t, e, 2, o, y(p, l));
                return (
                  Vd(t, n, S, y(p, d)),
                  null !== S.attrs && ru(S, S.attrs, !1),
                  null !== S.mergedAttrs && ru(S, S.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, S),
                  S
                );
              })(d, l, o, 0, t, n, i)
            : l.data[d];
        Wi(S, !0);
        const N = S.mergedAttrs;
        null !== N && Or(p, _, N);
        const P = S.classes;
        null !== P && Qc(p, _, P);
        const B = S.styles;
        return (
          null !== B && Od(p, _, B),
          64 != (64 & S.flags) && Ms(l, o, _, S),
          0 ===
            (function pn() {
              return Y.lFrame.elementDepthCount;
            })() && En(_, o),
          (function Pn() {
            Y.lFrame.elementDepthCount++;
          })(),
          Gi(S) && (Ld(l, o, S), Cp(l, S, o)),
          null !== i && Bd(o, S),
          lu
        );
      }
      function cu() {
        let e = Mn();
        ss() ? as() : ((e = e.parent), Wi(e, !1));
        const t = e;
        !(function nr() {
          Y.lFrame.elementDepthCount--;
        })();
        const n = xt();
        return (
          n.firstCreatePass && (jo(n, e), Ui(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function Wa(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            cf(n, t, we(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function Ys(e) {
              return 0 != (32 & e.flags);
            })(t) &&
            cf(n, t, we(), t.stylesWithoutHost, !1),
          cu
        );
      }
      function uf(e, t, n, i) {
        return lu(e, t, n, i), cu(), uf;
      }
      function uu(e, t, n) {
        const i = we(),
          o = xt(),
          l = e + 20,
          d = o.firstCreatePass
            ? (function oy(e, t, n, i, o) {
                const l = t.consts,
                  d = y(l, i),
                  p = ma(t, e, 8, "ng-container", d);
                return (
                  null !== d && ru(p, d, !0),
                  Vd(t, n, p, y(l, o)),
                  null !== t.queries && t.queries.elementStart(t, p),
                  p
                );
              })(l, o, i, t, n)
            : o.data[l];
        Wi(d, !0);
        const p = (i[l] = i[11].createComment(""));
        return (
          Ms(o, i, p, d),
          En(p, i),
          Gi(d) && (Ld(o, i, d), Cp(o, d, i)),
          null != n && Bd(i, d),
          uu
        );
      }
      function du() {
        let e = Mn();
        const t = xt();
        return (
          ss() ? as() : ((e = e.parent), Wi(e, !1)),
          t.firstCreatePass && (jo(t, e), Ui(e) && t.queries.elementEnd(e)),
          du
        );
      }
      function Mg() {
        return we();
      }
      function df(e) {
        return !!e && "function" == typeof e.then;
      }
      function Og(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      const Ag = Og;
      function ff(e, t, n, i) {
        const o = we(),
          l = xt(),
          d = Mn();
        return (
          (function Ig(e, t, n, i, o, l, d, p) {
            const _ = Gi(i),
              N = e.firstCreatePass && Lp(e),
              P = t[8],
              B = kp(t);
            let J = !0;
            if (3 & i.type || p) {
              const Ve = xn(i, t),
                Ye = p ? p(Ve) : Ve,
                ye = B.length,
                rt = p ? (Ft) => p(et(Ft[i.index])) : i.index;
              if (ot(n)) {
                let Ft = null;
                if (
                  (!p &&
                    _ &&
                    (Ft = (function sy(e, t, n, i) {
                      const o = e.cleanup;
                      if (null != o)
                        for (let l = 0; l < o.length - 1; l += 2) {
                          const d = o[l];
                          if (d === n && o[l + 1] === i) {
                            const p = t[7],
                              _ = o[l + 2];
                            return p.length > _ ? p[_] : null;
                          }
                          "string" == typeof d && (l += 2);
                        }
                      return null;
                    })(e, t, o, i.index)),
                  null !== Ft)
                )
                  ((Ft.__ngLastListenerFn__ || Ft).__ngNextListenerFn__ = l),
                    (Ft.__ngLastListenerFn__ = l),
                    (J = !1);
                else {
                  l = hf(i, t, P, l, !1);
                  const an = n.listen(Ye, o, l);
                  B.push(l, an), N && N.push(o, rt, ye, ye + 1);
                }
              } else
                (l = hf(i, t, P, l, !0)),
                  Ye.addEventListener(o, l, d),
                  B.push(l),
                  N && N.push(o, rt, ye, d);
            } else l = hf(i, t, P, l, !1);
            const ge = i.outputs;
            let xe;
            if (J && null !== ge && (xe = ge[o])) {
              const Ve = xe.length;
              if (Ve)
                for (let Ye = 0; Ye < Ve; Ye += 2) {
                  const lr = t[xe[Ye]][xe[Ye + 1]].subscribe(l),
                    Fs = B.length;
                  B.push(l, lr), N && N.push(o, i.index, Fs, -(Fs + 1));
                }
            }
          })(l, o, o[11], d, e, t, !!n, i),
          ff
        );
      }
      function xg(e, t, n, i) {
        try {
          return !1 !== n(i);
        } catch (o) {
          return Vp(e, o), !1;
        }
      }
      function hf(e, t, n, i, o) {
        return function l(d) {
          if (d === Function) return i;
          const p = 2 & e.flags ? jn(e.index, t) : t;
          0 == (32 & t[2]) && Ud(p);
          let _ = xg(t, 0, i, d),
            S = l.__ngNextListenerFn__;
          for (; S; ) (_ = xg(t, 0, S, d) && _), (S = S.__ngNextListenerFn__);
          return o && !1 === _ && (d.preventDefault(), (d.returnValue = !1)), _;
        };
      }
      function Pg(e = 1) {
        return (function Zl(e) {
          return (Y.lFrame.contextLView = (function Ql(e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, Y.lFrame.contextLView))[8];
        })(e);
      }
      function ay(e, t) {
        let n = null;
        const i = (function W(e) {
          const t = e.attrs;
          if (null != t) {
            const n = t.indexOf(5);
            if (0 == (1 & n)) return t[n + 1];
          }
          return null;
        })(e);
        for (let o = 0; o < t.length; o++) {
          const l = t[o];
          if ("*" !== l) {
            if (null === i ? x(e, l, !0) : pe(i, l)) return o;
          } else n = o;
        }
        return n;
      }
      function Fg(e) {
        const t = we()[16][6];
        if (!t.projection) {
          const i = (t.projection = Qs(e ? e.length : 1, null)),
            o = i.slice();
          let l = t.child;
          for (; null !== l; ) {
            const d = e ? ay(l, e) : 0;
            null !== d &&
              (o[d] ? (o[d].projectionNext = l) : (i[d] = l), (o[d] = l)),
              (l = l.next);
          }
        }
      }
      function kg(e, t = 0, n) {
        const i = we(),
          o = xt(),
          l = ma(o, 20 + e, 16, null, n || null);
        null === l.projection && (l.projection = t),
          as(),
          64 != (64 & l.flags) &&
            (function dp(e, t, n) {
              Md(t[11], 0, t, n, wd(e, n, t), zc(n.parent || t[6], n, t));
            })(o, i, l);
      }
      function pf(e, t, n) {
        return fu(e, "", t, "", n), pf;
      }
      function fu(e, t, n, i, o) {
        const l = we(),
          d = Ea(l, t, n, i);
        return d !== Ie && ar(xt(), _n(), l, e, d, l[11], o, !1), fu;
      }
      function Wg(e, t, n, i, o) {
        const l = e[n + 1],
          d = null === t;
        let p = i ? _t(l) : At(l),
          _ = !1;
        for (; 0 !== p && (!1 === _ || d); ) {
          const N = e[p + 1];
          uy(e[p], t) && ((_ = !0), (e[p + 1] = i ? bn(N) : Yt(N))),
            (p = i ? _t(N) : At(N));
        }
        _ && (e[n + 1] = i ? Yt(l) : bn(l));
      }
      function uy(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && vs(e, t) >= 0)
        );
      }
      const ai = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function zg(e) {
        return e.substring(ai.key, ai.keyEnd);
      }
      function Yg(e, t) {
        const n = ai.textEnd;
        return n === t
          ? -1
          : ((t = ai.keyEnd =
              (function py(e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32; ) t++;
                return t;
              })(e, (ai.key = t), n)),
            Ia(e, t, n));
      }
      function Ia(e, t, n) {
        for (; t < n && e.charCodeAt(t) <= 32; ) t++;
        return t;
      }
      function gf(e, t, n) {
        return Lr(e, t, n, !1), gf;
      }
      function mf(e, t) {
        return Lr(e, t, null, !0), mf;
      }
      function Qg(e) {
        !(function Br(e, t, n, i) {
          const o = xt(),
            l = rr(2);
          o.firstUpdatePass && em(o, null, l, i);
          const d = we();
          if (n !== Ie && Oi(d, l, n)) {
            const p = o.data[sn()];
            if (rm(p, i) && !Xg(o, l)) {
              let _ = i ? p.classesWithoutHost : p.stylesWithoutHost;
              null !== _ && (n = lt(_, n || "")), cf(o, p, d, n, i);
            } else
              !(function Ey(e, t, n, i, o, l, d, p) {
                o === Ie && (o = Dt);
                let _ = 0,
                  S = 0,
                  N = 0 < o.length ? o[0] : null,
                  P = 0 < l.length ? l[0] : null;
                for (; null !== N || null !== P; ) {
                  const B = _ < o.length ? o[_ + 1] : void 0,
                    J = S < l.length ? l[S + 1] : void 0;
                  let xe,
                    ge = null;
                  N === P
                    ? ((_ += 2), (S += 2), B !== J && ((ge = P), (xe = J)))
                    : null === P || (null !== N && N < P)
                    ? ((_ += 2), (ge = N))
                    : ((S += 2), (ge = P), (xe = J)),
                    null !== ge && nm(e, t, n, i, ge, xe, d, p),
                    (N = _ < o.length ? o[_] : null),
                    (P = S < l.length ? l[S] : null);
                }
              })(
                o,
                p,
                d,
                d[11],
                d[l + 1],
                (d[l + 1] = (function Cy(e, t, n) {
                  if (null == n || "" === n) return Dt;
                  const i = [],
                    o = Io(n);
                  if (Array.isArray(o))
                    for (let l = 0; l < o.length; l++) e(i, o[l], !0);
                  else if ("object" == typeof o)
                    for (const l in o) o.hasOwnProperty(l) && e(i, l, o[l]);
                  else "string" == typeof o && t(i, o);
                  return i;
                })(e, t, n)),
                i,
                l
              );
          }
        })(Ji, uo, e, !0);
      }
      function uo(e, t) {
        for (
          let n = (function fy(e) {
            return (
              (function Kg(e) {
                (ai.key = 0),
                  (ai.keyEnd = 0),
                  (ai.value = 0),
                  (ai.valueEnd = 0),
                  (ai.textEnd = e.length);
              })(e),
              Yg(e, Ia(e, 0, ai.textEnd))
            );
          })(t);
          n >= 0;
          n = Yg(t, n)
        )
          Ji(e, zg(t), !0);
      }
      function Lr(e, t, n, i) {
        const o = we(),
          l = xt(),
          d = rr(2);
        l.firstUpdatePass && em(l, e, d, i),
          t !== Ie &&
            Oi(o, d, t) &&
            nm(
              l,
              l.data[sn()],
              o,
              o[11],
              e,
              (o[d + 1] = (function wy(e, t) {
                return (
                  null == e ||
                    ("string" == typeof t
                      ? (e += t)
                      : "object" == typeof e && (e = Ae(Io(e)))),
                  e
                );
              })(t, n)),
              i,
              d
            );
      }
      function Xg(e, t) {
        return t >= e.expandoStartIndex;
      }
      function em(e, t, n, i) {
        const o = e.data;
        if (null === o[n + 1]) {
          const l = o[sn()],
            d = Xg(e, n);
          rm(l, i) && null === t && !d && (t = !1),
            (t = (function vy(e, t, n, i) {
              const o = (function Do(e) {
                const t = Y.lFrame.currentDirectiveIndex;
                return -1 === t ? null : e[t];
              })(e);
              let l = i ? t.residualClasses : t.residualStyles;
              if (null === o)
                0 === (i ? t.classBindings : t.styleBindings) &&
                  ((n = Vl((n = _f(null, e, t, n, i)), t.attrs, i)),
                  (l = null));
              else {
                const d = t.directiveStylingLast;
                if (-1 === d || e[d] !== o)
                  if (((n = _f(o, e, t, n, i)), null === l)) {
                    let _ = (function yy(e, t, n) {
                      const i = n ? t.classBindings : t.styleBindings;
                      if (0 !== At(i)) return e[_t(i)];
                    })(e, t, i);
                    void 0 !== _ &&
                      Array.isArray(_) &&
                      ((_ = _f(null, e, t, _[1], i)),
                      (_ = Vl(_, t.attrs, i)),
                      (function by(e, t, n, i) {
                        e[_t(n ? t.classBindings : t.styleBindings)] = i;
                      })(e, t, i, _));
                  } else
                    l = (function Dy(e, t, n) {
                      let i;
                      const o = t.directiveEnd;
                      for (let l = 1 + t.directiveStylingLast; l < o; l++)
                        i = Vl(i, e[l].hostAttrs, n);
                      return Vl(i, t.attrs, n);
                    })(e, t, i);
              }
              return (
                void 0 !== l &&
                  (i ? (t.residualClasses = l) : (t.residualStyles = l)),
                n
              );
            })(o, l, t, i)),
            (function ly(e, t, n, i, o, l) {
              let d = l ? t.classBindings : t.styleBindings,
                p = _t(d),
                _ = At(d);
              e[i] = n;
              let N,
                S = !1;
              if (Array.isArray(n)) {
                const P = n;
                (N = P[1]), (null === N || vs(P, N) > 0) && (S = !0);
              } else N = n;
              if (o)
                if (0 !== _) {
                  const B = _t(e[p + 1]);
                  (e[i + 1] = Qt(B, p)),
                    0 !== B && (e[B + 1] = Gn(e[B + 1], i)),
                    (e[p + 1] = (function Gt(e, t) {
                      return (131071 & e) | (t << 17);
                    })(e[p + 1], i));
                } else
                  (e[i + 1] = Qt(p, 0)),
                    0 !== p && (e[p + 1] = Gn(e[p + 1], i)),
                    (p = i);
              else
                (e[i + 1] = Qt(_, 0)),
                  0 === p ? (p = i) : (e[_ + 1] = Gn(e[_ + 1], i)),
                  (_ = i);
              S && (e[i + 1] = Yt(e[i + 1])),
                Wg(e, N, i, !0),
                Wg(e, N, i, !1),
                (function cy(e, t, n, i, o) {
                  const l = o ? e.residualClasses : e.residualStyles;
                  null != l &&
                    "string" == typeof t &&
                    vs(l, t) >= 0 &&
                    (n[i + 1] = bn(n[i + 1]));
                })(t, N, e, i, l),
                (d = Qt(p, _)),
                l ? (t.classBindings = d) : (t.styleBindings = d);
            })(o, l, t, n, d, i);
        }
      }
      function _f(e, t, n, i, o) {
        let l = null;
        const d = n.directiveEnd;
        let p = n.directiveStylingLast;
        for (
          -1 === p ? (p = n.directiveStart) : p++;
          p < d && ((l = t[p]), (i = Vl(i, l.hostAttrs, o)), l !== e);

        )
          p++;
        return null !== e && (n.directiveStylingLast = p), i;
      }
      function Vl(e, t, n) {
        const i = n ? 1 : 2;
        let o = -1;
        if (null !== t)
          for (let l = 0; l < t.length; l++) {
            const d = t[l];
            "number" == typeof d
              ? (o = d)
              : o === i &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                Ji(e, d, !!n || t[++l]));
          }
        return void 0 === e ? null : e;
      }
      function nm(e, t, n, i, o, l, d, p) {
        if (!(3 & t.type)) return;
        const _ = e.data,
          S = _[p + 1];
        hu(
          (function ei(e) {
            return 1 == (1 & e);
          })(S)
            ? im(_, t, n, o, At(S), d)
            : void 0
        ) ||
          (hu(l) ||
            ((function Vt(e) {
              return 2 == (2 & e);
            })(S) &&
              (l = im(_, null, n, o, p, d))),
          (function hp(e, t, n, i, o) {
            const l = ot(e);
            if (t)
              o
                ? l
                  ? e.addClass(n, i)
                  : n.classList.add(i)
                : l
                ? e.removeClass(n, i)
                : n.classList.remove(i);
            else {
              let d = -1 === i.indexOf("-") ? void 0 : _r.DashCase;
              if (null == o)
                l ? e.removeStyle(n, i, d) : n.style.removeProperty(i);
              else {
                const p = "string" == typeof o && o.endsWith("!important");
                p && ((o = o.slice(0, -10)), (d |= _r.Important)),
                  l
                    ? e.setStyle(n, i, o, d)
                    : n.style.setProperty(i, o, p ? "important" : "");
              }
            }
          })(i, d, Cn(sn(), n), o, l));
      }
      function im(e, t, n, i, o, l) {
        const d = null === t;
        let p;
        for (; o > 0; ) {
          const _ = e[o],
            S = Array.isArray(_),
            N = S ? _[1] : _,
            P = null === N;
          let B = n[o + 1];
          B === Ie && (B = P ? Dt : void 0);
          let J = P ? lc(B, i) : N === i ? B : void 0;
          if ((S && !hu(J) && (J = lc(_, i)), hu(J) && ((p = J), d))) return p;
          const ge = e[o + 1];
          o = d ? _t(ge) : At(ge);
        }
        if (null !== t) {
          let _ = l ? t.residualClasses : t.residualStyles;
          null != _ && (p = lc(_, i));
        }
        return p;
      }
      function hu(e) {
        return void 0 !== e;
      }
      function rm(e, t) {
        return 0 != (e.flags & (t ? 16 : 32));
      }
      function om(e, t = "") {
        const n = we(),
          i = xt(),
          o = e + 20,
          l = i.firstCreatePass ? ma(i, o, 1, t, null) : i.data[o],
          d = (n[o] = Uc(n[11], t));
        Ms(i, n, d, l), Wi(l, !1);
      }
      function vf(e) {
        return pu("", e, ""), vf;
      }
      function pu(e, t, n) {
        const i = we(),
          o = Ea(i, e, t, n);
        return (
          o !== Ie &&
            (function Po(e, t, n) {
              const i = Cn(t, e);
              yl(e[11], i, n);
            })(i, sn(), o),
          pu
        );
      }
      function yf(e, t, n) {
        const i = we();
        return Oi(i, Mr(), t) && ar(xt(), _n(), i, e, t, i[11], n, !0), yf;
      }
      const Is = void 0;
      var $y = [
        "en",
        [["a", "p"], ["AM", "PM"], Is],
        [["AM", "PM"], Is, Is],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        Is,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        Is,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", Is, "{1} 'at' {0}", Is],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function Gy(e) {
          const n = Math.floor(Math.abs(e)),
            i = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === n && 0 === i ? 1 : 5;
        },
      ];
      let xa = {};
      function bf(e) {
        const t = (function Wy(e) {
          return e.toLowerCase().replace(/_/g, "-");
        })(e);
        let n = Tm(t);
        if (n) return n;
        const i = t.split("-")[0];
        if (((n = Tm(i)), n)) return n;
        if ("en" === i) return $y;
        throw new Error(`Missing locale data for the locale "${e}".`);
      }
      function wm(e) {
        return bf(e)[ct.PluralCase];
      }
      function Tm(e) {
        return (
          e in xa ||
            (xa[e] =
              kt.ng &&
              kt.ng.common &&
              kt.ng.common.locales &&
              kt.ng.common.locales[e]),
          xa[e]
        );
      }
      var ct = (() => (
        ((ct = ct || {})[(ct.LocaleId = 0)] = "LocaleId"),
        (ct[(ct.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
        (ct[(ct.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
        (ct[(ct.DaysFormat = 3)] = "DaysFormat"),
        (ct[(ct.DaysStandalone = 4)] = "DaysStandalone"),
        (ct[(ct.MonthsFormat = 5)] = "MonthsFormat"),
        (ct[(ct.MonthsStandalone = 6)] = "MonthsStandalone"),
        (ct[(ct.Eras = 7)] = "Eras"),
        (ct[(ct.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
        (ct[(ct.WeekendRange = 9)] = "WeekendRange"),
        (ct[(ct.DateFormat = 10)] = "DateFormat"),
        (ct[(ct.TimeFormat = 11)] = "TimeFormat"),
        (ct[(ct.DateTimeFormat = 12)] = "DateTimeFormat"),
        (ct[(ct.NumberSymbols = 13)] = "NumberSymbols"),
        (ct[(ct.NumberFormats = 14)] = "NumberFormats"),
        (ct[(ct.CurrencyCode = 15)] = "CurrencyCode"),
        (ct[(ct.CurrencySymbol = 16)] = "CurrencySymbol"),
        (ct[(ct.CurrencyName = 17)] = "CurrencyName"),
        (ct[(ct.Currencies = 18)] = "Currencies"),
        (ct[(ct.Directionality = 19)] = "Directionality"),
        (ct[(ct.PluralCase = 20)] = "PluralCase"),
        (ct[(ct.ExtraData = 21)] = "ExtraData"),
        ct
      ))();
      const zy = ["zero", "one", "two", "few", "many"],
        gu = "en-US",
        mu = { marker: "element" },
        _u = { marker: "ICU" };
      var kn = (() => (
        ((kn = kn || {})[(kn.SHIFT = 2)] = "SHIFT"),
        (kn[(kn.APPEND_EAGERLY = 1)] = "APPEND_EAGERLY"),
        (kn[(kn.COMMENT = 2)] = "COMMENT"),
        kn
      ))();
      let Sm = gu;
      function Nm(e, t, n) {
        const i = t.insertBeforeIndex,
          o = Array.isArray(i) ? i[0] : i;
        return null === o ? Yc(e, 0, n) : et(n[o]);
      }
      function Mm(e, t, n, i, o) {
        const l = t.insertBeforeIndex;
        if (Array.isArray(l)) {
          let d = i,
            p = null;
          if (
            (3 & t.type || ((p = d), (d = o)), null !== d && 0 == (2 & t.flags))
          )
            for (let _ = 1; _ < l.length; _++) ro(e, d, n[l[_]], p, !1);
        }
      }
      function Om(e, t) {
        if ((e.push(t), e.length > 1))
          for (let n = e.length - 2; n >= 0; n--) {
            const i = e[n];
            Am(i) || (Zy(i, t) && null === Qy(i) && Xy(i, t.index));
          }
      }
      function Am(e) {
        return !(64 & e.type);
      }
      function Zy(e, t) {
        return Am(t) || e.index > t.index;
      }
      function Qy(e) {
        const t = e.insertBeforeIndex;
        return Array.isArray(t) ? t[0] : t;
      }
      function Xy(e, t) {
        const n = e.insertBeforeIndex;
        Array.isArray(n) ? (n[0] = t) : (Kc(Nm, Mm), (e.insertBeforeIndex = t));
      }
      function Hl(e, t) {
        const n = e.data[t];
        return null === n || "string" == typeof n
          ? null
          : n.hasOwnProperty("currentCaseLViewIndex")
          ? n
          : n.value;
      }
      function nb(e, t, n) {
        const i = kd(e, n, 64, null, null);
        return Om(t, i), i;
      }
      function vu(e, t) {
        const n = t[e.currentCaseLViewIndex];
        return null === n ? n : n < 0 ? ~n : n;
      }
      function Rm(e) {
        return e >>> 17;
      }
      function Im(e) {
        return (131070 & e) >>> 1;
      }
      let jl = 0,
        Ul = 0;
      function Pm(e, t, n, i) {
        const o = n[11];
        let d,
          l = null;
        for (let p = 0; p < t.length; p++) {
          const _ = t[p];
          if ("string" == typeof _) {
            const S = t[++p];
            null === n[S] && (n[S] = Uc(o, _));
          } else if ("number" == typeof _)
            switch (1 & _) {
              case 0:
                const S = Rm(_);
                let N, P;
                if (
                  (null === l && ((l = S), (d = Dl(o, i))),
                  S === l ? ((N = i), (P = d)) : ((N = null), (P = et(n[S]))),
                  null !== P)
                ) {
                  const xe = Im(_);
                  ro(o, P, n[xe], N, !1);
                  const Ye = Hl(e, xe);
                  if (null !== Ye && "object" == typeof Ye) {
                    const ye = vu(Ye, n);
                    null !== ye && Pm(e, Ye.create[ye], n, n[Ye.anchorIdx]);
                  }
                }
                break;
              case 1:
                const J = t[++p],
                  ge = t[++p];
                Hd(o, Cn(_ >>> 1, n), null, null, J, ge, null);
            }
          else
            switch (_) {
              case _u:
                const S = t[++p],
                  N = t[++p];
                null === n[N] && En((n[N] = ip(o, S)), n);
                break;
              case mu:
                const P = t[++p],
                  B = t[++p];
                null === n[B] && En((n[B] = Gc(o, P, null)), n);
            }
        }
      }
      function Fm(e, t, n, i, o) {
        for (let l = 0; l < n.length; l++) {
          const d = n[l],
            p = n[++l];
          if (d & o) {
            let _ = "";
            for (let S = l + 1; S <= l + p; S++) {
              const N = n[S];
              if ("string" == typeof N) _ += N;
              else if ("number" == typeof N)
                if (N < 0) _ += fe(t[i - N]);
                else {
                  const P = N >>> 2;
                  switch (3 & N) {
                    case 1:
                      const B = n[++S],
                        J = n[++S],
                        ge = e.data[P];
                      "string" == typeof ge
                        ? Hd(t[11], t[P], null, ge, B, _, J)
                        : ar(e, ge, t, B, _, t[11], J, !1);
                      break;
                    case 0:
                      const xe = t[P];
                      null !== xe && yl(t[11], xe, _);
                      break;
                    case 2:
                      ab(e, Hl(e, P), t, _);
                      break;
                    case 3:
                      km(e, Hl(e, P), i, t);
                  }
                }
            }
          } else {
            const _ = n[l + 1];
            if (_ > 0 && 3 == (3 & _)) {
              const N = Hl(e, _ >>> 2);
              t[N.currentCaseLViewIndex] < 0 && km(e, N, i, t);
            }
          }
          l += p;
        }
      }
      function km(e, t, n, i) {
        let o = i[t.currentCaseLViewIndex];
        if (null !== o) {
          let l = jl;
          o < 0 && ((o = i[t.currentCaseLViewIndex] = ~o), (l = -1)),
            Fm(e, i, t.update[o], n, l);
        }
      }
      function ab(e, t, n, i) {
        const o = (function lb(e, t) {
          let n = e.cases.indexOf(t);
          if (-1 === n)
            switch (e.type) {
              case 1: {
                const i = (function Yy(e, t) {
                  const n = wm(t)(parseInt(e, 10)),
                    i = zy[n];
                  return void 0 !== i ? i : "other";
                })(
                  t,
                  (function qy() {
                    return Sm;
                  })()
                );
                (n = e.cases.indexOf(i)),
                  -1 === n && "other" !== i && (n = e.cases.indexOf("other"));
                break;
              }
              case 0:
                n = e.cases.indexOf("other");
            }
          return -1 === n ? null : n;
        })(t, i);
        if (
          vu(t, n) !== o &&
          (Lm(e, t, n),
          (n[t.currentCaseLViewIndex] = null === o ? null : ~o),
          null !== o)
        ) {
          const d = n[t.anchorIdx];
          d && Pm(e, t.create[o], n, d);
        }
      }
      function Lm(e, t, n) {
        let i = vu(t, n);
        if (null !== i) {
          const o = t.remove[i];
          for (let l = 0; l < o.length; l++) {
            const d = o[l];
            if (d > 0) {
              const p = Cn(d, n);
              null !== p && la(n[11], p);
            } else Lm(e, Hl(e, ~d), n);
          }
        }
      }
      function cb() {
        const e = [];
        let n,
          i,
          t = -1;
        function l(p, _) {
          t = 0;
          const S = vu(p, _);
          i = null !== S ? p.remove[S] : Dt;
        }
        function d() {
          if (t < i.length) {
            const p = i[t++];
            return p > 0 ? n[p] : (e.push(t, i), l(n[1].data[~p], n), d());
          }
          return 0 === e.length ? null : ((i = e.pop()), (t = e.pop()), d());
        }
        return function o(p, _) {
          for (n = _; e.length; ) e.pop();
          return l(p.value, _), d;
        };
      }
      const yu = /\ufffd(\d+):?\d*\ufffd/gi,
        db = /\ufffd(\d+)\ufffd/,
        Vm = /^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/,
        fb = /\ufffd\/?\*(\d+:\d+)\ufffd/gi,
        hb = /\ufffd(\/?[#*]\d+):?\d*\ufffd/gi,
        pb = /\uE500/g;
      function Hm(e, t, n, i, o, l, d) {
        const p = _a(e, i, 1, null);
        let _ = p << kn.SHIFT,
          S = qr();
        t === S && (S = null),
          null === S && (_ |= kn.APPEND_EAGERLY),
          d &&
            ((_ |= kn.COMMENT),
            (function np(e) {
              void 0 === ra && (ra = e());
            })(cb)),
          o.push(_, null === l ? "" : l);
        const N = kd(e, p, d ? 32 : 1, null === l ? "" : l, null);
        Om(n, N);
        const P = N.index;
        return (
          Wi(N, !1),
          null !== S &&
            t !== S &&
            (function tb(e, t) {
              let n = e.insertBeforeIndex;
              null === n
                ? (Kc(Nm, Mm), (n = e.insertBeforeIndex = [null, t]))
                : ((function Ht(e, t, n) {
                    e != t && Mt(n, e, t, "==");
                  })(Array.isArray(n), !0, "Expecting array here"),
                  n.push(t));
            })(S, P),
          N
        );
      }
      function _b(e, t, n, i, o, l, d) {
        const p = d.match(yu),
          _ = Hm(e, t, n, l, i, p ? null : d, !1);
        p && Pa(o, d, _.index, null, 0, null);
      }
      function Pa(e, t, n, i, o, l) {
        const d = e.length,
          p = d + 1;
        e.push(null, null);
        const _ = d + 2,
          S = t.split(yu);
        let N = 0;
        for (let P = 0; P < S.length; P++) {
          const B = S[P];
          if (1 & P) {
            const J = o + parseInt(B, 10);
            e.push(-1 - J), (N |= jm(J));
          } else "" !== B && e.push(B);
        }
        return (
          e.push((n << 2) | (i ? 1 : 0)),
          i && e.push(i, l),
          (e[d] = N),
          (e[p] = e.length - _),
          N
        );
      }
      function jm(e) {
        return 1 << Math.min(e, 31);
      }
      function Um(e) {
        let t,
          l,
          n = "",
          i = 0,
          o = !1;
        for (; null !== (t = fb.exec(e)); )
          o
            ? t[0] === `\ufffd/*${l}\ufffd` && ((i = t.index), (o = !1))
            : ((n += e.substring(i, t.index + t[0].length)),
              (l = t[1]),
              (o = !0));
        return (n += e.substr(i)), n;
      }
      function Gm(e, t, n, i, o, l) {
        let d = 0;
        const p = {
          type: o.type,
          currentCaseLViewIndex: _a(e, t, 1, null),
          anchorIdx: l,
          cases: [],
          create: [],
          remove: [],
          update: [],
        };
        (function Tb(e, t, n) {
          e.push(jm(t.mainBinding), 2, -1 - t.mainBinding, (n << 2) | 2);
        })(n, o, l),
          (function eb(e, t, n) {
            const i = e.data[t];
            null === i ? (e.data[t] = n) : (i.value = n);
          })(e, l, p);
        const _ = o.values;
        for (let S = 0; S < _.length; S++) {
          const N = _[S],
            P = [];
          for (let B = 0; B < N.length; B++) {
            const J = N[B];
            if ("string" != typeof J) {
              const ge = P.push(J) - 1;
              N[B] = `\x3c!--\ufffd${ge}\ufffd--\x3e`;
            }
          }
          d = Eb(e, p, t, n, i, o.cases[S], N.join(""), P) | d;
        }
        d &&
          (function Sb(e, t, n) {
            e.push(t, 1, (n << 2) | 3);
          })(n, d, l);
      }
      function Cb(e) {
        const t = [],
          n = [];
        let i = 1,
          o = 0;
        const l = Df(
          (e = e.replace(Vm, function (d, p, _) {
            return (
              (i = "select" === _ ? 0 : 1), (o = parseInt(p.substr(1), 10)), ""
            );
          }))
        );
        for (let d = 0; d < l.length; ) {
          let p = l[d++].trim();
          1 === i && (p = p.replace(/\s*(?:=)?(\w+)\s*/, "$1")),
            p.length && t.push(p);
          const _ = Df(l[d++]);
          t.length > n.length && n.push(_);
        }
        return { type: i, mainBinding: o, cases: t, values: n };
      }
      function Df(e) {
        if (!e) return [];
        let t = 0;
        const n = [],
          i = [],
          o = /[{}]/g;
        let l;
        for (o.lastIndex = 0; (l = o.exec(e)); ) {
          const p = l.index;
          if ("}" == l[0]) {
            if ((n.pop(), 0 == n.length)) {
              const _ = e.substring(t, p);
              Vm.test(_) ? i.push(Cb(_)) : i.push(_), (t = p + 1);
            }
          } else {
            if (0 == n.length) {
              const _ = e.substring(t, p);
              i.push(_), (t = p + 1);
            }
            n.push("{");
          }
        }
        const d = e.substring(t);
        return i.push(d), i;
      }
      function Eb(e, t, n, i, o, l, d, p) {
        const _ = [],
          S = [],
          N = [];
        t.cases.push(l), t.create.push(_), t.remove.push(S), t.update.push(N);
        const B = (function Ki(e) {
            const t = new sl(e);
            return (function bc() {
              try {
                return !!new window.DOMParser().parseFromString(
                  Cs(""),
                  "text/html"
                );
              } catch (e) {
                return !1;
              }
            })()
              ? new yn(t)
              : t;
          })(Ee()).getInertBodyElement(d),
          J =
            (function wc(e) {
              return "content" in e &&
                (function Yh(e) {
                  return (
                    e.nodeType === Node.ELEMENT_NODE &&
                    "TEMPLATE" === e.nodeName
                  );
                })(e)
                ? e.content
                : null;
            })(B) || B;
        return J ? $m(e, t, n, i, _, S, N, J, o, p, 0) : 0;
      }
      function $m(e, t, n, i, o, l, d, p, _, S, N) {
        let P = 0,
          B = p.firstChild;
        for (; B; ) {
          const J = _a(e, n, 1, null);
          switch (B.nodeType) {
            case Node.ELEMENT_NODE:
              const ge = B,
                xe = ge.tagName.toLowerCase();
              if (Rr.hasOwnProperty(xe)) {
                Cf(o, mu, xe, _, J), (e.data[J] = xe);
                const rt = ge.attributes;
                for (let Ft = 0; Ft < rt.length; Ft++) {
                  const an = rt.item(Ft),
                    lr = an.name.toLowerCase();
                  an.value.match(yu)
                    ? no.hasOwnProperty(lr) &&
                      Pa(
                        d,
                        an.value,
                        J,
                        an.name,
                        0,
                        xo[lr] ? Zo : Qo[lr] ? Xu : null
                      )
                    : Nb(o, J, an);
                }
                (P = $m(e, t, n, i, o, l, d, B, J, S, N + 1) | P), Wm(l, J, N);
              }
              break;
            case Node.TEXT_NODE:
              const Ve = B.textContent || "",
                Ye = Ve.match(yu);
              Cf(o, null, Ye ? "" : Ve, _, J),
                Wm(l, J, N),
                Ye && (P = Pa(d, Ve, J, null, 0, null) | P);
              break;
            case Node.COMMENT_NODE:
              const ye = db.exec(B.textContent || "");
              if (ye) {
                const Ft = S[parseInt(ye[1], 10)];
                Cf(o, _u, "", _, J), Gm(e, n, i, _, Ft, J), wb(l, J, N);
              }
          }
          B = B.nextSibling;
        }
        return P;
      }
      function Wm(e, t, n) {
        0 === n && e.push(t);
      }
      function wb(e, t, n) {
        0 === n && (e.push(~t), e.push(t));
      }
      function Cf(e, t, n, i, o) {
        null !== t && e.push(t),
          e.push(
            n,
            o,
            (function ib(e, t, n) {
              return e | (t << 17) | (n << 1);
            })(0, i, o)
          );
      }
      function Nb(e, t, n) {
        e.push((t << 1) | 1, n.name, n.value);
      }
      function Ym(e, t, n = -1) {
        const i = xt(),
          o = we(),
          l = 20 + e,
          d = y(i.consts, t),
          p = qr();
        i.firstCreatePass &&
          (function mb(e, t, n, i, o, l) {
            const d = qr(),
              p = [],
              _ = [],
              S = [[]];
            o = (function Db(e, t) {
              if (
                (function bb(e) {
                  return -1 === e;
                })(t)
              )
                return Um(e);
              {
                const n = e.indexOf(`:${t}\ufffd`) + 2 + t.toString().length,
                  i = e.search(new RegExp(`\ufffd\\/\\*\\d+:${t}\ufffd`));
                return Um(e.substring(n, i));
              }
            })(o, l);
            const N = (function gb(e) {
              return e.replace(pb, " ");
            })(o).split(hb);
            for (let P = 0; P < N.length; P++) {
              let B = N[P];
              if (0 == (1 & P)) {
                const J = Df(B);
                for (let ge = 0; ge < J.length; ge++) {
                  let xe = J[ge];
                  if (0 == (1 & ge)) {
                    const Ve = xe;
                    "" !== Ve && _b(e, d, S[0], p, _, n, Ve);
                  } else {
                    const Ve = xe;
                    if ("object" != typeof Ve)
                      throw new Error(
                        `Unable to parse ICU expression in "${o}" message.`
                      );
                    Gm(e, n, _, t, Ve, Hm(e, d, S[0], n, p, "", !0).index);
                  }
                }
              } else {
                const J = 47 === B.charCodeAt(0),
                  xe =
                    (B.charCodeAt(J ? 1 : 0),
                    20 + Number.parseInt(B.substring(J ? 2 : 1)));
                if (J) S.shift(), Wi(qr(), !1);
                else {
                  const Ve = nb(e, S[0], xe);
                  S.unshift([]), Wi(Ve, !0);
                }
              }
            }
            e.data[i] = { create: p, update: _ };
          })(i, null === p ? 0 : p.index, o, l, d, n);
        const _ = i.data[l],
          N = Td(i, p === o[6] ? null : p, o);
        (function sb(e, t, n, i) {
          const o = e[11];
          for (let l = 0; l < t.length; l++) {
            const d = t[l++],
              p = t[l],
              _ = (d & kn.COMMENT) === kn.COMMENT,
              S = (d & kn.APPEND_EAGERLY) === kn.APPEND_EAGERLY,
              N = d >>> kn.SHIFT;
            let P = e[N];
            null === P && (P = e[N] = _ ? o.createComment(p) : Uc(o, p)),
              S && null !== n && ro(o, n, P, i, !1);
          }
        })(o, _.create, N, p && 8 & p.type ? o[p.index] : null),
          Bs(!0);
      }
      function Km(e, t, n) {
        Ym(e, t, n),
          (function Jm() {
            Bs(!1);
          })();
      }
      function Ef(e) {
        return (
          (function rb(e) {
            e && (jl |= 1 << Math.min(Ul, 31)), Ul++;
          })(Oi(we(), Mr(), e)),
          Ef
        );
      }
      function qm(e) {
        !(function ob(e, t, n) {
          if (Ul > 0) {
            const i = e.data[n];
            Fm(
              e,
              t,
              Array.isArray(i) ? i : i.update,
              (function zi() {
                return Y.lFrame.bindingIndex;
              })() -
                Ul -
                1,
              jl
            );
          }
          (jl = 0), (Ul = 0);
        })(xt(), we(), e + 20);
      }
      function wf(e, t, n, i, o) {
        if (((e = me(e)), Array.isArray(e)))
          for (let l = 0; l < e.length; l++) wf(e[l], t, n, i, o);
        else {
          const l = xt(),
            d = we();
          let p = ba(e) ? e : me(e.provide),
            _ = Wp(e);
          const S = Mn(),
            N = 1048575 & S.providerIndexes,
            P = S.directiveStart,
            B = S.providerIndexes >> 20;
          if (ba(e) || !e.multi) {
            const J = new So(_, o, Bl),
              ge = Sf(p, t, o ? N : N + B, P);
            -1 === ge
              ? (ut(Ue(S, d), l, p),
                Tf(l, e, t.length),
                t.push(p),
                S.directiveStart++,
                S.directiveEnd++,
                o && (S.providerIndexes += 1048576),
                n.push(J),
                d.push(J))
              : ((n[ge] = J), (d[ge] = J));
          } else {
            const J = Sf(p, t, N + B, P),
              ge = Sf(p, t, N, N + B),
              xe = J >= 0 && n[J],
              Ve = ge >= 0 && n[ge];
            if ((o && !Ve) || (!o && !xe)) {
              ut(Ue(S, d), l, p);
              const Ye = (function jb(e, t, n, i, o) {
                const l = new So(e, n, Bl);
                return (
                  (l.multi = []),
                  (l.index = t),
                  (l.componentProviders = 0),
                  Zm(l, o, i && !n),
                  l
                );
              })(o ? Hb : Vb, n.length, o, i, _);
              !o && Ve && (n[ge].providerFactory = Ye),
                Tf(l, e, t.length, 0),
                t.push(p),
                S.directiveStart++,
                S.directiveEnd++,
                o && (S.providerIndexes += 1048576),
                n.push(Ye),
                d.push(Ye);
            } else Tf(l, e, J > -1 ? J : ge, Zm(n[o ? ge : J], _, !o && i));
            !o && i && Ve && n[ge].componentProviders++;
          }
        }
      }
      function Tf(e, t, n, i) {
        const o = ba(t),
          l = (function g0(e) {
            return !!e.useClass;
          })(t);
        if (o || l) {
          const _ = (l ? me(t.useClass) : t).prototype.ngOnDestroy;
          if (_) {
            const S = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
              const N = S.indexOf(n);
              -1 === N ? S.push(n, [i, _]) : S[N + 1].push(i, _);
            } else S.push(n, _);
          }
        }
      }
      function Zm(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function Sf(e, t, n, i) {
        for (let o = n; o < i; o++) if (t[o] === e) return o;
        return -1;
      }
      function Vb(e, t, n, i) {
        return Nf(this.multi, []);
      }
      function Hb(e, t, n, i) {
        const o = this.multi;
        let l;
        if (this.providerFactory) {
          const d = this.providerFactory.componentProviders,
            p = Wo(n, n[1], this.providerFactory.index, i);
          (l = p.slice(0, d)), Nf(o, l);
          for (let _ = d; _ < p.length; _++) l.push(p[_]);
        } else (l = []), Nf(o, l);
        return l;
      }
      function Nf(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function Qm(e, t = []) {
        return (n) => {
          n.providersResolver = (i, o) =>
            (function Bb(e, t, n) {
              const i = xt();
              if (i.firstCreatePass) {
                const o = Kn(e);
                wf(n, i.data, i.blueprint, o, !0),
                  wf(t, i.data, i.blueprint, o, !1);
              }
            })(i, o ? o(e) : e, t);
        };
      }
      class Xm {}
      class $b {
        resolveComponentFactory(t) {
          throw (function Gb(e) {
            const t = Error(
              `No component factory found for ${Ae(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let bu = (() => {
        class e {}
        return (e.NULL = new $b()), e;
      })();
      function Wb() {
        return Fa(Mn(), we());
      }
      function Fa(e, t) {
        return new $l(xn(e, t));
      }
      let $l = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = Wb), e;
      })();
      function zb(e) {
        return e instanceof $l ? e.nativeElement : e;
      }
      class t_ {}
      let Yb = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function Kb() {
                const e = we(),
                  n = jn(Mn().index, e);
                return (function Jb(e) {
                  return e[11];
                })(Zt(n) ? n : e);
              })()),
            e
          );
        })(),
        qb = (() => {
          class e {}
          return (
            (e.ɵprov = Xt({
              token: e,
              providedIn: "root",
              factory: () => null,
            })),
            e
          );
        })();
      class n_ {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const Zb = new n_("13.3.5"),
        Mf = {};
      function Du(e, t, n, i, o = !1) {
        for (; null !== n; ) {
          const l = t[n.index];
          if ((null !== l && i.push(et(l)), Dn(l)))
            for (let p = 10; p < l.length; p++) {
              const _ = l[p],
                S = _[1].firstChild;
              null !== S && Du(_[1], _, S, i);
            }
          const d = n.type;
          if (8 & d) Du(e, t, n.child, i);
          else if (32 & d) {
            const p = vl(n, t);
            let _;
            for (; (_ = p()); ) i.push(_);
          } else if (16 & d) {
            const p = qc(t, n);
            if (Array.isArray(p)) i.push(...p);
            else {
              const _ = oa(t[16]);
              Du(_[1], _, p, i, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return i;
      }
      class Wl {
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return Du(n, t, n.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (Dn(t)) {
              const n = t[8],
                i = n ? n.indexOf(this) : -1;
              i > -1 && ($c(t, i), ki(n, i));
            }
            this._attachedToViewContainer = !1;
          }
          bl(this._lView[1], this._lView);
        }
        onDestroy(t) {
          Sp(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          Ud(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          $d(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function r0(e, t, n) {
            ls(!0);
            try {
              $d(e, t, n);
            } finally {
              ls(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef() {
          if (this._appRef) throw new Fe(902, "");
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function Dd(e, t) {
              ca(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new Fe(902, "");
          this._appRef = t;
        }
      }
      class Qb extends Wl {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Fp(this._view);
        }
        checkNoChanges() {
          !(function o0(e) {
            ls(!0);
            try {
              Fp(e);
            } finally {
              ls(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      class i_ extends bu {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = K(t);
          return new Of(n, this.ngModule);
        }
      }
      function r_(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class Of extends Xm {
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function Je(e) {
              return e.map(We).join(",");
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        get inputs() {
          return r_(this.componentDef.inputs);
        }
        get outputs() {
          return r_(this.componentDef.outputs);
        }
        create(t, n, i, o) {
          const l = (o = o || this.ngModule)
              ? (function eD(e, t) {
                  return {
                    get: (n, i, o) => {
                      const l = e.get(n, Mf, o);
                      return l !== Mf || i === Mf ? l : t.get(n, i, o);
                    },
                  };
                })(t, o.injector)
              : t,
            d = l.get(t_, Bt),
            p = l.get(qb, null),
            _ = d.createRenderer(null, this.componentDef),
            S = this.componentDef.selectors[0][0] || "div",
            N = i
              ? (function Tp(e, t, n) {
                  if (ot(e)) return e.selectRootElement(t, n === Be.ShadowDom);
                  let i = "string" == typeof t ? e.querySelector(t) : t;
                  return (i.textContent = ""), i;
                })(_, i, this.componentDef.encapsulation)
              : Gc(
                  d.createRenderer(null, this.componentDef),
                  S,
                  (function Xb(e) {
                    const t = e.toLowerCase();
                    return "svg" === t ? "svg" : "math" === t ? M : null;
                  })(S)
                ),
            P = this.componentDef.onPush ? 576 : 528,
            B = (function ig(e, t) {
              return {
                components: [],
                scheduler: e || kc,
                clean: s0,
                playerHandler: t || null,
                flags: 0,
              };
            })(),
            J = nu(0, null, null, 1, 0, null, null, null, null, null),
            ge = xl(null, J, B, P, null, null, d, _, p, l);
          let xe, Ve;
          Co(ge);
          try {
            const Ye = (function tg(e, t, n, i, o, l) {
              const d = n[1];
              n[20] = e;
              const _ = ma(d, 20, 2, "#host", null),
                S = (_.mergedAttrs = t.hostAttrs);
              null !== S &&
                (ru(_, S, !0),
                null !== e &&
                  (Or(o, e, S),
                  null !== _.classes && Qc(o, e, _.classes),
                  null !== _.styles && Od(o, e, _.styles)));
              const N = i.createRenderer(e, t),
                P = xl(
                  n,
                  Ep(t),
                  null,
                  t.onPush ? 64 : 16,
                  n[20],
                  _,
                  i,
                  N,
                  l || null,
                  null
                );
              return (
                d.firstCreatePass &&
                  (ut(Ue(_, n), d, t.type), Rp(d, _), Ip(_, n.length, 1)),
                iu(n, P),
                (n[20] = P)
              );
            })(N, this.componentDef, ge, d, _);
            if (N)
              if (i) Or(_, N, ["ng-version", Zb.full]);
              else {
                const { attrs: ye, classes: rt } = (function Pt(e) {
                  const t = [],
                    n = [];
                  let i = 1,
                    o = 2;
                  for (; i < e.length; ) {
                    let l = e[i];
                    if ("string" == typeof l)
                      2 === o
                        ? "" !== l && t.push(l, e[++i])
                        : 8 === o && n.push(l);
                    else {
                      if (!g(o)) break;
                      o = l;
                    }
                    i++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                ye && Or(_, N, ye),
                  rt && rt.length > 0 && Qc(_, N, rt.join(" "));
              }
            if (((Ve = er(J, 20)), void 0 !== n)) {
              const ye = (Ve.projection = []);
              for (let rt = 0; rt < this.ngContentSelectors.length; rt++) {
                const Ft = n[rt];
                ye.push(null != Ft ? Array.from(Ft) : null);
              }
            }
            (xe = (function ng(e, t, n, i, o) {
              const l = n[1],
                d = (function jv(e, t, n) {
                  const i = Mn();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    xp(e, i, t, _a(e, t, 1, null), n));
                  const o = Wo(t, e, i.directiveStart, i);
                  En(o, t);
                  const l = xn(i, t);
                  return l && En(l, t), o;
                })(l, n, t);
              if (
                (i.components.push(d),
                (e[8] = d),
                o && o.forEach((_) => _(d, t)),
                t.contentQueries)
              ) {
                const _ = Mn();
                t.contentQueries(1, d, _.directiveStart);
              }
              const p = Mn();
              return (
                !l.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (hr(p.index),
                  Op(n[1], p, 0, p.directiveStart, p.directiveEnd, t),
                  Ap(t, d)),
                d
              );
            })(Ye, this.componentDef, ge, B, [S0])),
              Pl(J, ge, null);
          } finally {
            Eo();
          }
          return new nD(this.componentType, xe, Fa(Ve, ge), ge, Ve);
        }
      }
      class nD extends class Ub {} {
        constructor(t, n, i, o, l) {
          super(),
            (this.location = i),
            (this._rootLView = o),
            (this._tNode = l),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new Qb(o)),
            (this.componentType = t);
        }
        get injector() {
          return new Oo(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      class ka {}
      class o_ {}
      const La = new Map();
      class l_ extends ka {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new i_(this));
          const i = nt(t);
          (this._bootstrapComponents = Ir(i.bootstrap)),
            (this._r3Injector = $p(
              t,
              n,
              [
                { provide: ka, useValue: this },
                { provide: bu, useValue: this.componentFactoryResolver },
              ],
              Ae(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, n = ao.THROW_IF_NOT_FOUND, i = Z.Default) {
          return t === ao || t === ka || t === zd
            ? this
            : this._r3Injector.get(t, n, i);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Af extends o_ {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== nt(t) &&
              (function rD(e) {
                const t = new Set();
                !(function n(i) {
                  const o = nt(i, !0),
                    l = o.id;
                  null !== l &&
                    ((function s_(e, t, n) {
                      if (t && t !== n)
                        throw new Error(
                          `Duplicate module registered for ${e} - ${Ae(
                            t
                          )} vs ${Ae(t.name)}`
                        );
                    })(l, La.get(l), i),
                    La.set(l, i));
                  const d = Ir(o.imports);
                  for (const p of d) t.has(p) || (t.add(p), n(p));
                })(e);
              })(t);
        }
        create(t) {
          return new l_(this.moduleType, t);
        }
      }
      function c_(e, t, n, i) {
        return f_(we(), Xn(), e, t, n, i);
      }
      function u_(e, t, n, i, o) {
        return h_(we(), Xn(), e, t, n, i, o);
      }
      function d_(e, t, n, i, o, l) {
        return (function p_(e, t, n, i, o, l, d, p) {
          const _ = t + n;
          return (function su(e, t, n, i, o) {
            const l = Rs(e, t, n, i);
            return Oi(e, t + 2, o) || l;
          })(e, _, o, l, d)
            ? lo(e, _ + 3, p ? i.call(p, o, l, d) : i(o, l, d))
            : zl(e, _ + 3);
        })(we(), Xn(), e, t, n, i, o, l);
      }
      function zl(e, t) {
        const n = e[t];
        return n === Ie ? void 0 : n;
      }
      function f_(e, t, n, i, o, l) {
        const d = t + n;
        return Oi(e, d, o)
          ? lo(e, d + 1, l ? i.call(l, o) : i(o))
          : zl(e, d + 1);
      }
      function h_(e, t, n, i, o, l, d) {
        const p = t + n;
        return Rs(e, p, o, l)
          ? lo(e, p + 2, d ? i.call(d, o, l) : i(o, l))
          : zl(e, p + 2);
      }
      function __(e, t) {
        const n = xt();
        let i;
        const o = e + 20;
        n.firstCreatePass
          ? ((i = (function fD(e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const i = t[n];
                  if (e === i.name) return i;
                }
            })(t, n.pipeRegistry)),
            (n.data[o] = i),
            i.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(o, i.onDestroy))
          : (i = n.data[o]);
        const l = i.factory || (i.factory = si(i.type)),
          d = Pe(Bl);
        try {
          const p = b(!1),
            _ = l();
          return (
            b(p),
            (function B0(e, t, n, i) {
              n >= e.data.length &&
                ((e.data[n] = null), (e.blueprint[n] = null)),
                (t[n] = i);
            })(n, we(), o, _),
            _
          );
        } finally {
          Pe(d);
        }
      }
      function v_(e, t, n) {
        const i = e + 20,
          o = we(),
          l = Hn(o, i);
        return Yl(o, i) ? f_(o, Xn(), t, l.transform, n, l) : l.transform(n);
      }
      function y_(e, t, n, i) {
        const o = e + 20,
          l = we(),
          d = Hn(l, o);
        return Yl(l, o)
          ? h_(l, Xn(), t, d.transform, n, i, d)
          : d.transform(n, i);
      }
      function Yl(e, t) {
        return e[1].data[t].pure;
      }
      function Rf(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const fo = class mD extends Ce.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, i) {
          var o, l, d;
          let p = t,
            _ = n || (() => null),
            S = i;
          if (t && "object" == typeof t) {
            const P = t;
            (p = null === (o = P.next) || void 0 === o ? void 0 : o.bind(P)),
              (_ = null === (l = P.error) || void 0 === l ? void 0 : l.bind(P)),
              (S =
                null === (d = P.complete) || void 0 === d ? void 0 : d.bind(P));
          }
          this.__isAsync && ((_ = Rf(_)), p && (p = Rf(p)), S && (S = Rf(S)));
          const N = super.subscribe({ next: p, error: _, complete: S });
          return t instanceof ke.w0 && t.add(N), N;
        }
      };
      function _D() {
        return this._results[Da()]();
      }
      class If {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = Da(),
            i = If.prototype;
          i[n] || (i[n] = _D);
        }
        get changes() {
          return this._changes || (this._changes = new fo());
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const i = this;
          i.dirty = !1;
          const o = sr(t);
          (this._changesDetected = !(function ac(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let i = 0; i < e.length; i++) {
              let o = e[i],
                l = t[i];
              if ((n && ((o = n(o)), (l = n(l))), l !== o)) return !1;
            }
            return !0;
          })(i._results, o, n)) &&
            ((i._results = o),
            (i.length = o.length),
            (i.last = o[this.length - 1]),
            (i.first = o[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      Symbol;
      let Jl = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = bD), e;
      })();
      const vD = Jl,
        yD = class extends vD {
          constructor(t, n, i) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = i);
          }
          createEmbeddedView(t) {
            const n = this._declarationTContainer.tViews,
              i = xl(
                this._declarationLView,
                n,
                t,
                16,
                null,
                n.declTNode,
                null,
                null,
                null,
                null
              );
            i[17] = this._declarationLView[this._declarationTContainer.index];
            const l = this._declarationLView[19];
            return (
              null !== l && (i[19] = l.createEmbeddedView(n)),
              Pl(n, i, t),
              new Wl(i)
            );
          }
        };
      function bD() {
        return Cu(Mn(), we());
      }
      function Cu(e, t) {
        return 4 & e.type ? new yD(t, e, Fa(e, t)) : null;
      }
      let Eu = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = DD), e;
      })();
      function DD() {
        return C_(Mn(), we());
      }
      const CD = Eu,
        b_ = class extends CD {
          constructor(t, n, i) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = i);
          }
          get element() {
            return Fa(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Oo(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Ot(this._hostTNode, this._hostLView);
            if ($o(t)) {
              const n = h(t, this._hostLView),
                i = Si(t);
              return new Oo(n[1].data[i + 8], n);
            }
            return new Oo(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = D_(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, i) {
            const o = t.createEmbeddedView(n || {});
            return this.insert(o, i), o;
          }
          createComponent(t, n, i, o, l) {
            const d =
              t &&
              !(function or(e) {
                return "function" == typeof e;
              })(t);
            let p;
            if (d) p = n;
            else {
              const P = n || {};
              (p = P.index),
                (i = P.injector),
                (o = P.projectableNodes),
                (l = P.ngModuleRef);
            }
            const _ = d ? t : new Of(K(t)),
              S = i || this.parentInjector;
            if (!l && null == _.ngModule) {
              const B = (d ? S : this.parentInjector).get(ka, null);
              B && (l = B);
            }
            const N = _.create(S, o, void 0, l);
            return this.insert(N.hostView, p), N;
          }
          insert(t, n) {
            const i = t._lView,
              o = i[1];
            if (
              (function w(e) {
                return Dn(e[3]);
              })(i)
            ) {
              const N = this.indexOf(t);
              if (-1 !== N) this.detach(N);
              else {
                const P = i[3],
                  B = new b_(P, P[6], P[3]);
                B.detach(B.indexOf(t));
              }
            }
            const l = this._adjustIndex(n),
              d = this._lContainer;
            !(function ap(e, t, n, i) {
              const o = 10 + i,
                l = n.length;
              i > 0 && (n[o - 1][4] = t),
                i < l - 10
                  ? ((t[4] = n[o]), Zs(n, 10 + i, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const d = t[17];
              null !== d &&
                n !== d &&
                (function Cd(e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(d, t);
              const p = t[19];
              null !== p && p.insertView(e), (t[2] |= 128);
            })(o, i, d, l);
            const p = wl(l, d),
              _ = i[11],
              S = Dl(_, d[7]);
            return (
              null !== S &&
                (function op(e, t, n, i, o, l) {
                  (i[0] = o), (i[6] = t), ca(e, i, n, 1, o, l);
                })(o, d[6], _, i, S, p),
              t.attachToViewContainerRef(),
              Zs(xf(d), l, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = D_(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              i = $c(this._lContainer, n);
            i && (ki(xf(this._lContainer), n), bl(i[1], i));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              i = $c(this._lContainer, n);
            return i && null != ki(xf(this._lContainer), n) ? new Wl(i) : null;
          }
          _adjustIndex(t, n = 0) {
            return null == t ? this.length + n : t;
          }
        };
      function D_(e) {
        return e[8];
      }
      function xf(e) {
        return e[8] || (e[8] = []);
      }
      function C_(e, t) {
        let n;
        const i = t[e.index];
        if (Dn(i)) n = i;
        else {
          let o;
          if (8 & e.type) o = et(i);
          else {
            const l = t[11];
            o = l.createComment("");
            const d = xn(e, t);
            ro(
              l,
              Dl(l, d),
              o,
              (function Cl(e, t) {
                return ot(e) ? e.nextSibling(t) : t.nextSibling;
              })(l, d),
              !1
            );
          }
          (t[e.index] = n = Pp(i, t, o, e)), iu(t, n);
        }
        return new b_(n, e, t);
      }
      class Pf {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Pf(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Ff {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const i =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              o = [];
            for (let l = 0; l < i; l++) {
              const d = n.getByIndex(l);
              o.push(this.queries[d.indexInDeclarationView].clone());
            }
            return new Ff(o);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== R_(t, n).matches && this.queries[n].setDirty();
        }
      }
      class E_ {
        constructor(t, n, i = null) {
          (this.predicate = t), (this.flags = n), (this.read = i);
        }
      }
      class kf {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let i = 0; i < this.queries.length; i++)
            this.queries[i].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let i = 0; i < this.length; i++) {
            const o = null !== n ? n.length : 0,
              l = this.getByIndex(i).embeddedTView(t, o);
            l &&
              ((l.indexInDeclarationView = i),
              null !== n ? n.push(l) : (n = [l]));
          }
          return null !== n ? new kf(n) : null;
        }
        template(t, n) {
          for (let i = 0; i < this.queries.length; i++)
            this.queries[i].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class Lf {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new Lf(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let i = t.parent;
            for (; null !== i && 8 & i.type && i.index !== n; ) i = i.parent;
            return n === (null !== i ? i.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const i = this.metadata.predicate;
          if (Array.isArray(i))
            for (let o = 0; o < i.length; o++) {
              const l = i[o];
              this.matchTNodeWithReadOption(t, n, TD(n, l)),
                this.matchTNodeWithReadOption(t, n, ps(n, t, l, !1, !1));
            }
          else
            i === Jl
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, ps(n, t, i, !1, !1));
        }
        matchTNodeWithReadOption(t, n, i) {
          if (null !== i) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === $l || o === Eu || (o === Jl && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const l = ps(n, t, o, !1, !1);
                null !== l && this.addMatch(n.index, l);
              }
            else this.addMatch(n.index, i);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function TD(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let i = 0; i < n.length; i += 2) if (n[i] === t) return n[i + 1];
        return null;
      }
      function ND(e, t, n, i) {
        return -1 === n
          ? (function SD(e, t) {
              return 11 & e.type ? Fa(e, t) : 4 & e.type ? Cu(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function MD(e, t, n) {
              return n === $l
                ? Fa(t, e)
                : n === Jl
                ? Cu(t, e)
                : n === Eu
                ? C_(t, e)
                : void 0;
            })(e, t, i)
          : Wo(e, e[1], n, t);
      }
      function w_(e, t, n, i) {
        const o = t[19].queries[i];
        if (null === o.matches) {
          const l = e.data,
            d = n.matches,
            p = [];
          for (let _ = 0; _ < d.length; _ += 2) {
            const S = d[_];
            p.push(S < 0 ? null : ND(t, l[S], d[_ + 1], n.metadata.read));
          }
          o.matches = p;
        }
        return o.matches;
      }
      function Bf(e, t, n, i) {
        const o = e.queries.getByIndex(n),
          l = o.matches;
        if (null !== l) {
          const d = w_(e, t, o, n);
          for (let p = 0; p < l.length; p += 2) {
            const _ = l[p];
            if (_ > 0) i.push(d[p / 2]);
            else {
              const S = l[p + 1],
                N = t[-_];
              for (let P = 10; P < N.length; P++) {
                const B = N[P];
                B[17] === B[3] && Bf(B[1], B, S, i);
              }
              if (null !== N[9]) {
                const P = N[9];
                for (let B = 0; B < P.length; B++) {
                  const J = P[B];
                  Bf(J[1], J, S, i);
                }
              }
            }
          }
        }
        return i;
      }
      function T_(e) {
        const t = we(),
          n = xt(),
          i = Vs();
        ds(i + 1);
        const o = R_(n, i);
        if (e.dirty && Nr(t) === (2 == (2 & o.metadata.flags))) {
          if (null === o.matches) e.reset([]);
          else {
            const l = o.crossesNgTemplate ? Bf(n, t, i, []) : w_(n, t, o, i);
            e.reset(l, zb), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function S_(e, t, n) {
        const i = xt();
        i.firstCreatePass &&
          (A_(i, new E_(e, t, n), -1),
          2 == (2 & t) && (i.staticViewQueries = !0)),
          O_(i, we(), t);
      }
      function N_(e, t, n, i) {
        const o = xt();
        if (o.firstCreatePass) {
          const l = Mn();
          A_(o, new E_(t, n, i), l.index),
            (function AD(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(o, e),
            2 == (2 & n) && (o.staticContentQueries = !0);
        }
        O_(o, we(), n);
      }
      function M_() {
        return (function OD(e, t) {
          return e[19].queries[t].queryList;
        })(we(), Vs());
      }
      function O_(e, t, n) {
        const i = new If(4 == (4 & n));
        Sp(e, t, i, i.destroy),
          null === t[19] && (t[19] = new Ff()),
          t[19].queries.push(new Pf(i));
      }
      function A_(e, t, n) {
        null === e.queries && (e.queries = new kf()),
          e.queries.track(new Lf(t, n));
      }
      function R_(e, t) {
        return e.queries.getByIndex(t);
      }
      function I_(e, t) {
        return Cu(e, t);
      }
      function Su(...e) {}
      const K_ = new On("Application Initializer");
      let $f = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = Su),
              (this.reject = Su),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((i, o) => {
                (this.resolve = i), (this.reject = o);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              i = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let o = 0; o < this.appInits.length; o++) {
                const l = this.appInits[o]();
                if (df(l)) n.push(l);
                else if (Ag(l)) {
                  const d = new Promise((p, _) => {
                    l.subscribe({ complete: p, error: _ });
                  });
                  n.push(d);
                }
              }
            Promise.all(n)
              .then(() => {
                i();
              })
              .catch((o) => {
                this.reject(o);
              }),
              0 === n.length && i(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(hi(K_, 8));
          }),
          (e.ɵprov = Xt({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const q_ = new On("AppId", {
        providedIn: "root",
        factory: function Z_() {
          return `${Wf()}${Wf()}${Wf()}`;
        },
      });
      function Wf() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Q_ = new On("Platform Initializer"),
        YD = new On("Platform ID", {
          providedIn: "platform",
          factory: () => "unknown",
        }),
        X_ = new On("appBootstrapListener");
      let JD = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Xt({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          e
        );
      })();
      const zf = new On("LocaleId", {
          providedIn: "root",
          factory: () =>
            Oh(zf, Z.Optional | Z.SkipSelf) ||
            (function KD() {
              return (
                ("undefined" != typeof $localize && $localize.locale) || gu
              );
            })(),
        }),
        qD = new On("DefaultCurrencyCode", {
          providedIn: "root",
          factory: () => "USD",
        });
      class ZD {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let QD = (() => {
        class e {
          compileModuleSync(n) {
            return new Af(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const i = this.compileModuleSync(n),
              l = Ir(nt(n).declarations).reduce((d, p) => {
                const _ = K(p);
                return _ && d.push(new Of(_)), d;
              }, []);
            return new ZD(i, l);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Xt({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const e1 = (() => Promise.resolve(0))();
      function Yf(e) {
        "undefined" == typeof Zone
          ? e1.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class Vr {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: i = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new fo(!1)),
            (this.onMicrotaskEmpty = new fo(!1)),
            (this.onStable = new fo(!1)),
            (this.onError = new fo(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched();
          const o = this;
          (o._nesting = 0),
            (o._outer = o._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !i && n),
            (o.shouldCoalesceRunChangeDetection = i),
            (o.lastRequestAnimationFrameId = -1),
            (o.nativeRequestAnimationFrame = (function t1() {
              let e = kt.requestAnimationFrame,
                t = kt.cancelAnimationFrame;
              if ("undefined" != typeof Zone && e && t) {
                const n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                const i = t[Zone.__symbol__("OriginalDelegate")];
                i && (t = i);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function r1(e) {
              const t = () => {
                !(function i1(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(kt, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                Kf(e),
                                (e.isCheckStableRunning = !0),
                                Jf(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    Kf(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, i, o, l, d, p) => {
                  try {
                    return ev(e), n.invokeTask(o, l, d, p);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === l.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      tv(e);
                  }
                },
                onInvoke: (n, i, o, l, d, p, _) => {
                  try {
                    return ev(e), n.invoke(o, l, d, p, _);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), tv(e);
                  }
                },
                onHasTask: (n, i, o, l) => {
                  n.hasTask(o, l),
                    i === o &&
                      ("microTask" == l.change
                        ? ((e._hasPendingMicrotasks = l.microTask),
                          Kf(e),
                          Jf(e))
                        : "macroTask" == l.change &&
                          (e.hasPendingMacrotasks = l.macroTask));
                },
                onHandleError: (n, i, o, l) => (
                  n.handleError(o, l),
                  e.runOutsideAngular(() => e.onError.emit(l)),
                  !1
                ),
              });
            })(o);
        }
        static isInAngularZone() {
          return (
            "undefined" != typeof Zone &&
            !0 === Zone.current.get("isAngularZone")
          );
        }
        static assertInAngularZone() {
          if (!Vr.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (Vr.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(t, n, i) {
          return this._inner.run(t, n, i);
        }
        runTask(t, n, i, o) {
          const l = this._inner,
            d = l.scheduleEventTask("NgZoneEvent: " + o, t, n1, Su, Su);
          try {
            return l.runTask(d, n, i);
          } finally {
            l.cancelTask(d);
          }
        }
        runGuarded(t, n, i) {
          return this._inner.runGuarded(t, n, i);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const n1 = {};
      function Jf(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Kf(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function ev(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function tv(e) {
        e._nesting--, Jf(e);
      }
      class o1 {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new fo()),
            (this.onMicrotaskEmpty = new fo()),
            (this.onStable = new fo()),
            (this.onError = new fo());
        }
        run(t, n, i) {
          return t.apply(n, i);
        }
        runGuarded(t, n, i) {
          return t.apply(n, i);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, i, o) {
          return t.apply(n, i);
        }
      }
      let nv = (() => {
          class e {
            constructor(n) {
              (this._ngZone = n),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Vr.assertNotInAngularZone(),
                        Yf(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Yf(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (i) =>
                    !i.updateCb ||
                    !i.updateCb(n) ||
                    (clearTimeout(i.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, i, o) {
              let l = -1;
              i &&
                i > 0 &&
                (l = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (d) => d.timeoutId !== l
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, i)),
                this._callbacks.push({ doneCb: n, timeoutId: l, updateCb: o });
            }
            whenStable(n, i, o) {
              if (o && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, i, o), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(n, i, o) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(hi(Vr));
            }),
            (e.ɵprov = Xt({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        s1 = (() => {
          class e {
            constructor() {
              (this._applications = new Map()), qf.addToWindow(this);
            }
            registerApplication(n, i) {
              this._applications.set(n, i);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, i = !0) {
              return qf.findTestabilityInTree(this, n, i);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = Xt({
              token: e,
              factory: e.ɵfac,
              providedIn: "platform",
            })),
            e
          );
        })();
      class a1 {
        addToWindow(t) {}
        findTestabilityInTree(t, n, i) {
          return null;
        }
      }
      function l1(e) {
        qf = e;
      }
      let qf = new a1(),
        xs = null;
      const iv = new On("AllowMultipleToken"),
        rv = new On("PlatformOnDestroy");
      class d1 {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function ov(e, t, n = []) {
        const i = `Platform: ${t}`,
          o = new On(i);
        return (l = []) => {
          let d = Zf();
          if (!d || d.injector.get(iv, !1)) {
            const p = [...n, ...l, { provide: o, useValue: !0 }];
            e
              ? e(p)
              : (function f1(e) {
                  if (xs && !xs.get(iv, !1)) throw new Fe(400, "");
                  xs = e;
                  const t = e.get(sv),
                    n = e.get(Q_, null);
                  n && n.forEach((i) => i());
                })(
                  (function p1(e = [], t) {
                    return ao.create({
                      name: t,
                      providers: [
                        { provide: Yd, useValue: "platform" },
                        { provide: rv, useValue: () => (xs = null) },
                        ...e,
                      ],
                    });
                  })(p, i)
                );
          }
          return (function h1(e) {
            const t = Zf();
            if (!t) throw new Fe(401, "");
            return t;
          })();
        };
      }
      function Zf() {
        var e;
        return null !== (e = null == xs ? void 0 : xs.get(sv)) && void 0 !== e
          ? e
          : null;
      }
      let sv = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, i) {
            const p = (function g1(e, t) {
                let n;
                return (
                  (n =
                    "noop" === e
                      ? new o1()
                      : ("zone.js" === e ? void 0 : e) ||
                        new Vr({
                          enableLongStackTrace: !1,
                          shouldCoalesceEventChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneEventCoalescing),
                          shouldCoalesceRunChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneRunCoalescing),
                        })),
                  n
                );
              })(i ? i.ngZone : void 0, {
                ngZoneEventCoalescing: (i && i.ngZoneEventCoalescing) || !1,
                ngZoneRunCoalescing: (i && i.ngZoneRunCoalescing) || !1,
              }),
              _ = [{ provide: Vr, useValue: p }];
            return p.run(() => {
              const S = ao.create({
                  providers: _,
                  parent: this.injector,
                  name: n.moduleType.name,
                }),
                N = n.create(S),
                P = N.injector.get(Ts, null);
              if (!P) throw new Fe(402, "");
              return (
                p.runOutsideAngular(() => {
                  const B = p.onError.subscribe({
                    next: (J) => {
                      P.handleError(J);
                    },
                  });
                  N.onDestroy(() => {
                    Xf(this._modules, N), B.unsubscribe();
                  });
                }),
                (function m1(e, t, n) {
                  try {
                    const i = n();
                    return df(i)
                      ? i.catch((o) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(o)), o)
                          );
                        })
                      : i;
                  } catch (i) {
                    throw (t.runOutsideAngular(() => e.handleError(i)), i);
                  }
                })(P, p, () => {
                  const B = N.injector.get($f);
                  return (
                    B.runInitializers(),
                    B.donePromise.then(
                      () => (
                        (function Ky(e) {
                          (function ln(e, t) {
                            null == e && Mt(t, e, null, "!=");
                          })(e, "Expected localeId to be defined"),
                            "string" == typeof e &&
                              (Sm = e.toLowerCase().replace(/_/g, "-"));
                        })(N.injector.get(zf, gu) || gu),
                        this._moduleDoBootstrap(N),
                        N
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, i = []) {
            const o = av({}, i);
            return (function c1(e, t, n) {
              const i = new Af(n);
              return Promise.resolve(i);
            })(0, 0, n).then((l) => this.bootstrapModuleFactory(l, o));
          }
          _moduleDoBootstrap(n) {
            const i = n.injector.get(Qf);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach((o) => i.bootstrap(o));
            else {
              if (!n.instance.ngDoBootstrap) throw new Fe(403, "");
              n.instance.ngDoBootstrap(i);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new Fe(404, "");
            this._modules.slice().forEach((i) => i.destroy()),
              this._destroyListeners.forEach((i) => i());
            const n = this._injector.get(rv, null);
            null == n || n(), (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(hi(ao));
          }),
          (e.ɵprov = Xt({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          e
        );
      })();
      function av(e, t) {
        return Array.isArray(t)
          ? t.reduce(av, e)
          : Object.assign(Object.assign({}, e), t);
      }
      let Qf = (() => {
        class e {
          constructor(n, i, o, l) {
            (this._zone = n),
              (this._injector = i),
              (this._exceptionHandler = o),
              (this._initStatus = l),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const d = new Te.y((_) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    _.next(this._stable), _.complete();
                  });
              }),
              p = new Te.y((_) => {
                let S;
                this._zone.runOutsideAngular(() => {
                  S = this._zone.onStable.subscribe(() => {
                    Vr.assertNotInAngularZone(),
                      Yf(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), _.next(!0));
                      });
                  });
                });
                const N = this._zone.onUnstable.subscribe(() => {
                  Vr.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        _.next(!1);
                      }));
                });
                return () => {
                  S.unsubscribe(), N.unsubscribe();
                };
              });
            this.isStable = (function Re(...e) {
              const t = (0, he.yG)(e),
                n = (0, he._6)(e, 1 / 0),
                i = e;
              return i.length
                ? 1 === i.length
                  ? (0, k.Xf)(i[0])
                  : (0, a.J)(n)((0, ae.D)(i, t))
                : _e.E;
            })(
              d,
              p.pipe(
                (function le(e = {}) {
                  const {
                    connector: t = () => new Ce.x(),
                    resetOnError: n = !0,
                    resetOnComplete: i = !0,
                    resetOnRefCountZero: o = !0,
                  } = e;
                  return (l) => {
                    let d = null,
                      p = null,
                      _ = null,
                      S = 0,
                      N = !1,
                      P = !1;
                    const B = () => {
                        null == p || p.unsubscribe(), (p = null);
                      },
                      J = () => {
                        B(), (d = _ = null), (N = P = !1);
                      },
                      ge = () => {
                        const xe = d;
                        J(), null == xe || xe.unsubscribe();
                      };
                    return (0, ne.e)((xe, Ve) => {
                      S++, !P && !N && B();
                      const Ye = (_ = null != _ ? _ : t());
                      Ve.add(() => {
                        S--, 0 === S && !P && !N && (p = re(ge, o));
                      }),
                        Ye.subscribe(Ve),
                        d ||
                          ((d = new se.Hp({
                            next: (ye) => Ye.next(ye),
                            error: (ye) => {
                              (P = !0), B(), (p = re(J, n, ye)), Ye.error(ye);
                            },
                            complete: () => {
                              (N = !0), B(), (p = re(J, i)), Ye.complete();
                            },
                          })),
                          (0, ae.D)(xe).subscribe(d));
                    })(l);
                  };
                })()
              )
            );
          }
          bootstrap(n, i) {
            if (!this._initStatus.done) throw new Fe(405, "");
            let o;
            (o =
              n instanceof Xm
                ? n
                : this._injector.get(bu).resolveComponentFactory(n)),
              this.componentTypes.push(o.componentType);
            const l = (function u1(e) {
                return e.isBoundToModule;
              })(o)
                ? void 0
                : this._injector.get(ka),
              p = o.create(ao.NULL, [], i || o.selector, l),
              _ = p.location.nativeElement,
              S = p.injector.get(nv, null),
              N = S && p.injector.get(s1);
            return (
              S && N && N.registerApplication(_, S),
              p.onDestroy(() => {
                this.detachView(p.hostView),
                  Xf(this.components, p),
                  N && N.unregisterApplication(_);
              }),
              this._loadComponent(p),
              p
            );
          }
          tick() {
            if (this._runningTick) throw new Fe(101, "");
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const i = n;
            this._views.push(i), i.attachToAppRef(this);
          }
          detachView(n) {
            const i = n;
            Xf(this._views, i), i.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(X_, [])
                .concat(this._bootstrapListeners)
                .forEach((o) => o(n));
          }
          ngOnDestroy() {
            this._views.slice().forEach((n) => n.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(hi(Vr), hi(ao), hi(Ts), hi($f));
          }),
          (e.ɵprov = Xt({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      function Xf(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      let cv = !0;
      function v1() {
        cv = !1;
      }
      let y1 = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = b1), e;
      })();
      function b1(e) {
        return (function D1(e, t, n) {
          if (Xi(e) && !n) {
            const i = jn(e.index, t);
            return new Wl(i, i);
          }
          return 47 & e.type ? new Wl(t[16], t) : null;
        })(Mn(), we(), 16 == (16 & e));
      }
      class pv {
        constructor() {}
        supports(t) {
          return kl(t);
        }
        create(t) {
          return new N1(t);
        }
      }
      const S1 = (e, t) => t;
      class N1 {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || S1);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            i = this._removalsHead,
            o = 0,
            l = null;
          for (; n || i; ) {
            const d = !i || (n && n.currentIndex < mv(i, o, l)) ? n : i,
              p = mv(d, o, l),
              _ = d.currentIndex;
            if (d === i) o--, (i = i._nextRemoved);
            else if (((n = n._next), null == d.previousIndex)) o++;
            else {
              l || (l = []);
              const S = p - o,
                N = _ - o;
              if (S != N) {
                for (let B = 0; B < S; B++) {
                  const J = B < l.length ? l[B] : (l[B] = 0),
                    ge = J + B;
                  N <= ge && ge < S && (l[B] = J + 1);
                }
                l[d.previousIndex] = N - S;
              }
            }
            p !== _ && t(d, p, _);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !kl(t))) throw new Fe(900, "");
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let o,
            l,
            d,
            n = this._itHead,
            i = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let p = 0; p < this.length; p++)
              (l = t[p]),
                (d = this._trackByFn(p, l)),
                null !== n && Object.is(n.trackById, d)
                  ? (i && (n = this._verifyReinsertion(n, l, d, p)),
                    Object.is(n.item, l) || this._addIdentityChange(n, l))
                  : ((n = this._mismatch(n, l, d, p)), (i = !0)),
                (n = n._next);
          } else
            (o = 0),
              (function k0(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Da()]();
                  let i;
                  for (; !(i = n.next()).done; ) t(i.value);
                }
              })(t, (p) => {
                (d = this._trackByFn(o, p)),
                  null !== n && Object.is(n.trackById, d)
                    ? (i && (n = this._verifyReinsertion(n, p, d, o)),
                      Object.is(n.item, p) || this._addIdentityChange(n, p))
                    : ((n = this._mismatch(n, p, d, o)), (i = !0)),
                  (n = n._next),
                  o++;
              }),
              (this.length = o);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, i, o) {
          let l;
          return (
            null === t ? (l = this._itTail) : ((l = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(i, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, l, o))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(i, o))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, l, o))
              : (t = this._addAfter(new M1(n, i), l, o)),
            t
          );
        }
        _verifyReinsertion(t, n, i, o) {
          let l =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(i, null);
          return (
            null !== l
              ? (t = this._reinsertAfter(l, t._prev, o))
              : t.currentIndex != o &&
                ((t.currentIndex = o), this._addToMoves(t, o)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, i) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const o = t._prevRemoved,
            l = t._nextRemoved;
          return (
            null === o ? (this._removalsHead = l) : (o._nextRemoved = l),
            null === l ? (this._removalsTail = o) : (l._prevRemoved = o),
            this._insertAfter(t, n, i),
            this._addToMoves(t, i),
            t
          );
        }
        _moveAfter(t, n, i) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, i),
            this._addToMoves(t, i),
            t
          );
        }
        _addAfter(t, n, i) {
          return (
            this._insertAfter(t, n, i),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, i) {
          const o = null === n ? this._itHead : n._next;
          return (
            (t._next = o),
            (t._prev = n),
            null === o ? (this._itTail = t) : (o._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new gv()),
            this._linkedRecords.put(t),
            (t.currentIndex = i),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            i = t._next;
          return (
            null === n ? (this._itHead = i) : (n._next = i),
            null === i ? (this._itTail = n) : (i._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new gv()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class M1 {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class O1 {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let i;
          for (i = this._head; null !== i; i = i._nextDup)
            if (
              (null === n || n <= i.currentIndex) &&
              Object.is(i.trackById, t)
            )
              return i;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            i = t._nextDup;
          return (
            null === n ? (this._head = i) : (n._nextDup = i),
            null === i ? (this._tail = n) : (i._prevDup = n),
            null === this._head
          );
        }
      }
      class gv {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let i = this.map.get(n);
          i || ((i = new O1()), this.map.set(n, i)), i.add(t);
        }
        get(t, n) {
          const o = this.map.get(t);
          return o ? o.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function mv(e, t, n) {
        const i = e.previousIndex;
        if (null === i) return i;
        let o = 0;
        return n && i < n.length && (o = n[i]), i + t + o;
      }
      class _v {
        constructor() {}
        supports(t) {
          return t instanceof Map || ef(t);
        }
        create() {
          return new A1();
        }
      }
      class A1 {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || ef(t))) throw new Fe(900, "");
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (i, o) => {
              if (n && n.key === o)
                this._maybeAddToChanges(n, i),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const l = this._getOrCreateRecordForKey(o, i);
                n = this._insertBeforeOrAppend(n, l);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let i = n; null !== i; i = i._nextRemoved)
              i === this._mapHead && (this._mapHead = null),
                this._records.delete(i.key),
                (i._nextRemoved = i._next),
                (i.previousValue = i.currentValue),
                (i.currentValue = null),
                (i._prev = null),
                (i._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const i = t._prev;
            return (
              (n._next = t),
              (n._prev = i),
              (t._prev = n),
              i && (i._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const o = this._records.get(t);
            this._maybeAddToChanges(o, n);
            const l = o._prev,
              d = o._next;
            return (
              l && (l._next = d),
              d && (d._prev = l),
              (o._next = null),
              (o._prev = null),
              o
            );
          }
          const i = new R1(t);
          return (
            this._records.set(t, i),
            (i.currentValue = n),
            this._addToAdditions(i),
            i
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((i) => n(t[i], i));
        }
      }
      class R1 {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function vv() {
        return new rh([new pv()]);
      }
      let rh = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, i) {
            if (null != i) {
              const o = i.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (i) => e.create(n, i || vv()),
              deps: [[e, new bs(), new Ko()]],
            };
          }
          find(n) {
            const i = this.factories.find((o) => o.supports(n));
            if (null != i) return i;
            throw new Fe(901, "");
          }
        }
        return (e.ɵprov = Xt({ token: e, providedIn: "root", factory: vv })), e;
      })();
      function yv() {
        return new oh([new _v()]);
      }
      let oh = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, i) {
            if (i) {
              const o = i.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (i) => e.create(n, i || yv()),
              deps: [[e, new bs(), new Ko()]],
            };
          }
          find(n) {
            const i = this.factories.find((l) => l.supports(n));
            if (i) return i;
            throw new Fe(901, "");
          }
        }
        return (e.ɵprov = Xt({ token: e, providedIn: "root", factory: yv })), e;
      })();
      const P1 = ov(null, "core", []);
      let F1 = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(hi(Qf));
          }),
          (e.ɵmod = An({ type: e })),
          (e.ɵinj = ti({})),
          e
        );
      })();
    },
    2382: (tt, De, I) => {
      I.d(De, {
        Fj: () => me,
        NI: () => Bn,
        oH: () => go,
        u5: () => er,
        JU: () => Ne,
        JJ: () => U,
        JL: () => j,
        F: () => fi,
        UX: () => Hn,
        _Y: () => Ui,
      });
      var a = I(1223),
        k = I(9808),
        _e = I(8306),
        he = I(4742),
        ae = I(8421),
        Re = I(3269),
        Ce = I(5403),
        ke = I(3268),
        Te = I(1810),
        se = I(2076),
        ne = I(4004);
      let le = (() => {
          class w {
            constructor(v, A) {
              (this._renderer = v),
                (this._elementRef = A),
                (this.onChange = (Y) => {}),
                (this.onTouched = () => {});
            }
            setProperty(v, A) {
              this._renderer.setProperty(this._elementRef.nativeElement, v, A);
            }
            registerOnTouched(v) {
              this.onTouched = v;
            }
            registerOnChange(v) {
              this.onChange = v;
            }
            setDisabledState(v) {
              this.setProperty("disabled", v);
            }
          }
          return (
            (w.ɵfac = function (v) {
              return new (v || w)(a.Y36(a.Qsj), a.Y36(a.SBq));
            }),
            (w.ɵdir = a.lG2({ type: w })),
            w
          );
        })(),
        re = (() => {
          class w extends le {}
          return (
            (w.ɵfac = (function () {
              let y;
              return function (A) {
                return (y || (y = a.n5z(w)))(A || w);
              };
            })()),
            (w.ɵdir = a.lG2({ type: w, features: [a.qOj] })),
            w
          );
        })();
      const Ne = new a.OlP("NgValueAccessor"),
        lt = { provide: Ne, useExisting: (0, a.Gpc)(() => me), multi: !0 },
        gt = new a.OlP("CompositionEventMode");
      let me = (() => {
        class w extends le {
          constructor(v, A, Y) {
            super(v, A),
              (this._compositionMode = Y),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function pt() {
                  const w = (0, k.q)() ? (0, k.q)().getUserAgent() : "";
                  return /android (\d+)/.test(w.toLowerCase());
                })());
          }
          writeValue(v) {
            this.setProperty("value", null == v ? "" : v);
          }
          _handleInput(v) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(v);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(v) {
            (this._composing = !1), this._compositionMode && this.onChange(v);
          }
        }
        return (
          (w.ɵfac = function (v) {
            return new (v || w)(a.Y36(a.Qsj), a.Y36(a.SBq), a.Y36(gt, 8));
          }),
          (w.ɵdir = a.lG2({
            type: w,
            selectors: [
              ["input", "formControlName", "", 3, "type", "checkbox"],
              ["textarea", "formControlName", ""],
              ["input", "formControl", "", 3, "type", "checkbox"],
              ["textarea", "formControl", ""],
              ["input", "ngModel", "", 3, "type", "checkbox"],
              ["textarea", "ngModel", ""],
              ["", "ngDefaultControl", ""],
            ],
            hostBindings: function (v, A) {
              1 & v &&
                a.NdJ("input", function (Ze) {
                  return A._handleInput(Ze.target.value);
                })("blur", function () {
                  return A.onTouched();
                })("compositionstart", function () {
                  return A._compositionStart();
                })("compositionend", function (Ze) {
                  return A._compositionEnd(Ze.target.value);
                });
            },
            features: [a._Bn([lt]), a.qOj],
          })),
          w
        );
      })();
      const Fe = new a.OlP("NgValidators"),
        je = new a.OlP("NgAsyncValidators");
      function st(w) {
        return null != w;
      }
      function bt(w) {
        const y = (0, a.QGY)(w) ? (0, se.D)(w) : w;
        return (0, a.CqO)(y), y;
      }
      function ft(w) {
        let y = {};
        return (
          w.forEach((v) => {
            y = null != v ? Object.assign(Object.assign({}, y), v) : y;
          }),
          0 === Object.keys(y).length ? null : y
        );
      }
      function nn(w, y) {
        return y.map((v) => v(w));
      }
      function wt(w) {
        return w.map((y) =>
          (function jt(w) {
            return !w.validate;
          })(y)
            ? y
            : (v) => y.validate(v)
        );
      }
      function Rt(w) {
        return null != w
          ? (function $n(w) {
              if (!w) return null;
              const y = w.filter(st);
              return 0 == y.length
                ? null
                : function (v) {
                    return ft(nn(v, y));
                  };
            })(wt(w))
          : null;
      }
      function Mt(w) {
        return null != w
          ? (function ln(w) {
              if (!w) return null;
              const y = w.filter(st);
              return 0 == y.length
                ? null
                : function (v) {
                    return (function be(...w) {
                      const y = (0, Re.jO)(w),
                        { args: v, keys: A } = (0, he.D)(w),
                        Y = new _e.y((Ze) => {
                          const { length: pn } = v;
                          if (!pn) return void Ze.complete();
                          const Pn = new Array(pn);
                          let nr = pn,
                            ir = pn;
                          for (let vo = 0; vo < pn; vo++) {
                            let yo = !1;
                            (0, ae.Xf)(v[vo]).subscribe(
                              (0, Ce.x)(
                                Ze,
                                (we) => {
                                  yo || ((yo = !0), ir--), (Pn[vo] = we);
                                },
                                () => nr--,
                                void 0,
                                () => {
                                  (!nr || !yo) &&
                                    (ir || Ze.next(A ? (0, Te.n)(A, Pn) : Pn),
                                    Ze.complete());
                                }
                              )
                            );
                          }
                        });
                      return y ? Y.pipe((0, ke.Z)(y)) : Y;
                    })(nn(v, y).map(bt)).pipe((0, ne.U)(ft));
                  };
            })(wt(w))
          : null;
      }
      function Vi(w, y) {
        return null === w ? [y] : Array.isArray(w) ? [...w, y] : [w, y];
      }
      function Wn(w) {
        return w._rawValidators;
      }
      function Hi(w) {
        return w._rawAsyncValidators;
      }
      function Xt(w) {
        return w ? (Array.isArray(w) ? w : [w]) : [];
      }
      function zn(w, y) {
        return Array.isArray(w) ? w.includes(y) : w === y;
      }
      function ti(w, y) {
        const v = Xt(y);
        return (
          Xt(w).forEach((Y) => {
            zn(v, Y) || v.push(Y);
          }),
          v
        );
      }
      function ni(w, y) {
        return Xt(y).filter((v) => !zn(w, v));
      }
      class Ai {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(y) {
          (this._rawValidators = y || []),
            (this._composedValidatorFn = Rt(this._rawValidators));
        }
        _setAsyncValidators(y) {
          (this._rawAsyncValidators = y || []),
            (this._composedAsyncValidatorFn = Mt(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(y) {
          this._onDestroyCallbacks.push(y);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((y) => y()),
            (this._onDestroyCallbacks = []);
        }
        reset(y) {
          this.control && this.control.reset(y);
        }
        hasError(y, v) {
          return !!this.control && this.control.hasError(y, v);
        }
        getError(y, v) {
          return this.control ? this.control.getError(y, v) : null;
        }
      }
      class rn extends Ai {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class Jt extends Ai {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class wn {
        constructor(y) {
          this._cd = y;
        }
        is(y) {
          var v, A, Y;
          return "submitted" === y
            ? !!(null === (v = this._cd) || void 0 === v ? void 0 : v.submitted)
            : !!(null ===
                (Y =
                  null === (A = this._cd) || void 0 === A
                    ? void 0
                    : A.control) || void 0 === Y
                ? void 0
                : Y[y]);
        }
      }
      let U = (() => {
          class w extends wn {
            constructor(v) {
              super(v);
            }
          }
          return (
            (w.ɵfac = function (v) {
              return new (v || w)(a.Y36(rn, 2));
            }),
            (w.ɵdir = a.lG2({
              type: w,
              selectors: [
                ["", "formControlName", ""],
                ["", "ngModel", ""],
                ["", "formControl", ""],
              ],
              hostVars: 14,
              hostBindings: function (v, A) {
                2 & v &&
                  a.ekj("ng-untouched", A.is("untouched"))(
                    "ng-touched",
                    A.is("touched")
                  )("ng-pristine", A.is("pristine"))("ng-dirty", A.is("dirty"))(
                    "ng-valid",
                    A.is("valid")
                  )("ng-invalid", A.is("invalid"))(
                    "ng-pending",
                    A.is("pending")
                  );
              },
              features: [a.qOj],
            })),
            w
          );
        })(),
        j = (() => {
          class w extends wn {
            constructor(v) {
              super(v);
            }
          }
          return (
            (w.ɵfac = function (v) {
              return new (v || w)(a.Y36(Jt, 10));
            }),
            (w.ɵdir = a.lG2({
              type: w,
              selectors: [
                ["", "formGroupName", ""],
                ["", "formArrayName", ""],
                ["", "ngModelGroup", ""],
                ["", "formGroup", ""],
                ["form", 3, "ngNoForm", ""],
                ["", "ngForm", ""],
              ],
              hostVars: 16,
              hostBindings: function (v, A) {
                2 & v &&
                  a.ekj("ng-untouched", A.is("untouched"))(
                    "ng-touched",
                    A.is("touched")
                  )("ng-pristine", A.is("pristine"))("ng-dirty", A.is("dirty"))(
                    "ng-valid",
                    A.is("valid")
                  )("ng-invalid", A.is("invalid"))(
                    "ng-pending",
                    A.is("pending")
                  )("ng-submitted", A.is("submitted"));
              },
              features: [a.qOj],
            })),
            w
          );
        })();
      function Di(w, y) {
        ri(w, y),
          y.valueAccessor.writeValue(w.value),
          (function at(w, y) {
            y.valueAccessor.registerOnChange((v) => {
              (w._pendingValue = v),
                (w._pendingChange = !0),
                (w._pendingDirty = !0),
                "change" === w.updateOn && li(w, y);
            });
          })(w, y),
          (function gn(w, y) {
            const v = (A, Y) => {
              y.valueAccessor.writeValue(A), Y && y.viewToModelUpdate(A);
            };
            w.registerOnChange(v),
              y._registerOnDestroy(() => {
                w._unregisterOnChange(v);
              });
          })(w, y),
          (function $t(w, y) {
            y.valueAccessor.registerOnTouched(() => {
              (w._pendingTouched = !0),
                "blur" === w.updateOn && w._pendingChange && li(w, y),
                "submit" !== w.updateOn && w.markAsTouched();
            });
          })(w, y),
          (function _i(w, y) {
            if (y.valueAccessor.setDisabledState) {
              const v = (A) => {
                y.valueAccessor.setDisabledState(A);
              };
              w.registerOnDisabledChange(v),
                y._registerOnDestroy(() => {
                  w._unregisterOnDisabledChange(v);
                });
            }
          })(w, y);
      }
      function ii(w, y, v = !0) {
        const A = () => {};
        y.valueAccessor &&
          (y.valueAccessor.registerOnChange(A),
          y.valueAccessor.registerOnTouched(A)),
          (function en(w, y) {
            let v = !1;
            if (null !== w) {
              if (null !== y.validator) {
                const Y = Wn(w);
                if (Array.isArray(Y) && Y.length > 0) {
                  const Ze = Y.filter((pn) => pn !== y.validator);
                  Ze.length !== Y.length && ((v = !0), w.setValidators(Ze));
                }
              }
              if (null !== y.asyncValidator) {
                const Y = Hi(w);
                if (Array.isArray(Y) && Y.length > 0) {
                  const Ze = Y.filter((pn) => pn !== y.asyncValidator);
                  Ze.length !== Y.length &&
                    ((v = !0), w.setAsyncValidators(Ze));
                }
              }
            }
            const A = () => {};
            return Dt(y._rawValidators, A), Dt(y._rawAsyncValidators, A), v;
          })(w, y),
          w &&
            (y._invokeOnDestroyCallbacks(),
            w._registerOnCollectionChange(() => {}));
      }
      function Dt(w, y) {
        w.forEach((v) => {
          v.registerOnValidatorChange && v.registerOnValidatorChange(y);
        });
      }
      function ri(w, y) {
        const v = Wn(w);
        null !== y.validator
          ? w.setValidators(Vi(v, y.validator))
          : "function" == typeof v && w.setValidators([v]);
        const A = Hi(w);
        null !== y.asyncValidator
          ? w.setAsyncValidators(Vi(A, y.asyncValidator))
          : "function" == typeof A && w.setAsyncValidators([A]);
        const Y = () => w.updateValueAndValidity();
        Dt(y._rawValidators, Y), Dt(y._rawAsyncValidators, Y);
      }
      function li(w, y) {
        w._pendingDirty && w.markAsDirty(),
          w.setValue(w._pendingValue, { emitModelToViewChange: !1 }),
          y.viewToModelUpdate(w._pendingValue),
          (w._pendingChange = !1);
      }
      function K(w, y) {
        const v = w.indexOf(y);
        v > -1 && w.splice(v, 1);
      }
      const nt = "VALID",
        un = "INVALID",
        tn = "PENDING",
        Tn = "DISABLED";
      function ui(w) {
        return (Le(w) ? w.validators : w) || null;
      }
      function dn(w) {
        return Array.isArray(w) ? Rt(w) : w || null;
      }
      function Qi(w, y) {
        return (Le(y) ? y.asyncValidators : w) || null;
      }
      function Sn(w) {
        return Array.isArray(w) ? Mt(w) : w || null;
      }
      function Le(w) {
        return null != w && !Array.isArray(w) && "object" == typeof w;
      }
      const Nt = (w) => w instanceof di;
      function Rn(w) {
        return ((w) => w instanceof Bn)(w) ? w.value : w.getRawValue();
      }
      function fn(w, y) {
        const v = Nt(w),
          A = w.controls;
        if (!(v ? Object.keys(A) : A).length) throw new a.vHH(1e3, "");
        if (!A[y]) throw new a.vHH(1001, "");
      }
      function oi(w, y) {
        Nt(w),
          w._forEachChild((A, Y) => {
            if (void 0 === y[Y]) throw new a.vHH(1002, "");
          });
      }
      class Wt {
        constructor(y, v) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = y),
            (this._rawAsyncValidators = v),
            (this._composedValidatorFn = dn(this._rawValidators)),
            (this._composedAsyncValidatorFn = Sn(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(y) {
          this._rawValidators = this._composedValidatorFn = y;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(y) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = y;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === nt;
        }
        get invalid() {
          return this.status === un;
        }
        get pending() {
          return this.status == tn;
        }
        get disabled() {
          return this.status === Tn;
        }
        get enabled() {
          return this.status !== Tn;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(y) {
          (this._rawValidators = y), (this._composedValidatorFn = dn(y));
        }
        setAsyncValidators(y) {
          (this._rawAsyncValidators = y),
            (this._composedAsyncValidatorFn = Sn(y));
        }
        addValidators(y) {
          this.setValidators(ti(y, this._rawValidators));
        }
        addAsyncValidators(y) {
          this.setAsyncValidators(ti(y, this._rawAsyncValidators));
        }
        removeValidators(y) {
          this.setValidators(ni(y, this._rawValidators));
        }
        removeAsyncValidators(y) {
          this.setAsyncValidators(ni(y, this._rawAsyncValidators));
        }
        hasValidator(y) {
          return zn(this._rawValidators, y);
        }
        hasAsyncValidator(y) {
          return zn(this._rawAsyncValidators, y);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(y = {}) {
          (this.touched = !0),
            this._parent && !y.onlySelf && this._parent.markAsTouched(y);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((y) => y.markAllAsTouched());
        }
        markAsUntouched(y = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((v) => {
              v.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !y.onlySelf && this._parent._updateTouched(y);
        }
        markAsDirty(y = {}) {
          (this.pristine = !1),
            this._parent && !y.onlySelf && this._parent.markAsDirty(y);
        }
        markAsPristine(y = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((v) => {
              v.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !y.onlySelf && this._parent._updatePristine(y);
        }
        markAsPending(y = {}) {
          (this.status = tn),
            !1 !== y.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !y.onlySelf && this._parent.markAsPending(y);
        }
        disable(y = {}) {
          const v = this._parentMarkedDirty(y.onlySelf);
          (this.status = Tn),
            (this.errors = null),
            this._forEachChild((A) => {
              A.disable(Object.assign(Object.assign({}, y), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== y.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors(
              Object.assign(Object.assign({}, y), { skipPristineCheck: v })
            ),
            this._onDisabledChange.forEach((A) => A(!0));
        }
        enable(y = {}) {
          const v = this._parentMarkedDirty(y.onlySelf);
          (this.status = nt),
            this._forEachChild((A) => {
              A.enable(Object.assign(Object.assign({}, y), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: y.emitEvent,
            }),
            this._updateAncestors(
              Object.assign(Object.assign({}, y), { skipPristineCheck: v })
            ),
            this._onDisabledChange.forEach((A) => A(!1));
        }
        _updateAncestors(y) {
          this._parent &&
            !y.onlySelf &&
            (this._parent.updateValueAndValidity(y),
            y.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(y) {
          this._parent = y;
        }
        updateValueAndValidity(y = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === nt || this.status === tn) &&
                this._runAsyncValidator(y.emitEvent)),
            !1 !== y.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !y.onlySelf &&
              this._parent.updateValueAndValidity(y);
        }
        _updateTreeValidity(y = { emitEvent: !0 }) {
          this._forEachChild((v) => v._updateTreeValidity(y)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: y.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? Tn : nt;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(y) {
          if (this.asyncValidator) {
            (this.status = tn), (this._hasOwnPendingAsyncValidator = !0);
            const v = bt(this.asyncValidator(this));
            this._asyncValidationSubscription = v.subscribe((A) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(A, { emitEvent: y });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(y, v = {}) {
          (this.errors = y), this._updateControlsErrors(!1 !== v.emitEvent);
        }
        get(y) {
          return (function Ei(w, y, v) {
            if (
              null == y ||
              (Array.isArray(y) || (y = y.split(v)),
              Array.isArray(y) && 0 === y.length)
            )
              return null;
            let A = w;
            return (
              y.forEach((Y) => {
                A = Nt(A)
                  ? A.controls.hasOwnProperty(Y)
                    ? A.controls[Y]
                    : null
                  : (((w) => w instanceof dt)(A) && A.at(Y)) || null;
              }),
              A
            );
          })(this, y, ".");
        }
        getError(y, v) {
          const A = v ? this.get(v) : this;
          return A && A.errors ? A.errors[y] : null;
        }
        hasError(y, v) {
          return !!this.getError(y, v);
        }
        get root() {
          let y = this;
          for (; y._parent; ) y = y._parent;
          return y;
        }
        _updateControlsErrors(y) {
          (this.status = this._calculateStatus()),
            y && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(y);
        }
        _initObservables() {
          (this.valueChanges = new a.vpe()), (this.statusChanges = new a.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? Tn
            : this.errors
            ? un
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(tn)
            ? tn
            : this._anyControlsHaveStatus(un)
            ? un
            : nt;
        }
        _anyControlsHaveStatus(y) {
          return this._anyControls((v) => v.status === y);
        }
        _anyControlsDirty() {
          return this._anyControls((y) => y.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((y) => y.touched);
        }
        _updatePristine(y = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !y.onlySelf && this._parent._updatePristine(y);
        }
        _updateTouched(y = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !y.onlySelf && this._parent._updateTouched(y);
        }
        _isBoxedValue(y) {
          return (
            "object" == typeof y &&
            null !== y &&
            2 === Object.keys(y).length &&
            "value" in y &&
            "disabled" in y
          );
        }
        _registerOnCollectionChange(y) {
          this._onCollectionChange = y;
        }
        _setUpdateStrategy(y) {
          Le(y) && null != y.updateOn && (this._updateOn = y.updateOn);
        }
        _parentMarkedDirty(y) {
          return (
            !y &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
      }
      class Bn extends Wt {
        constructor(y = null, v, A) {
          super(ui(v), Qi(A, v)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(y),
            this._setUpdateStrategy(v),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            }),
            Le(v) &&
              v.initialValueIsDefault &&
              (this.defaultValue = this._isBoxedValue(y) ? y.value : y);
        }
        setValue(y, v = {}) {
          (this.value = this._pendingValue = y),
            this._onChange.length &&
              !1 !== v.emitModelToViewChange &&
              this._onChange.forEach((A) =>
                A(this.value, !1 !== v.emitViewToModelChange)
              ),
            this.updateValueAndValidity(v);
        }
        patchValue(y, v = {}) {
          this.setValue(y, v);
        }
        reset(y = this.defaultValue, v = {}) {
          this._applyFormState(y),
            this.markAsPristine(v),
            this.markAsUntouched(v),
            this.setValue(this.value, v),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(y) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(y) {
          this._onChange.push(y);
        }
        _unregisterOnChange(y) {
          K(this._onChange, y);
        }
        registerOnDisabledChange(y) {
          this._onDisabledChange.push(y);
        }
        _unregisterOnDisabledChange(y) {
          K(this._onDisabledChange, y);
        }
        _forEachChild(y) {}
        _syncPendingControls() {
          return !(
            "submit" !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(y) {
          this._isBoxedValue(y)
            ? ((this.value = this._pendingValue = y.value),
              y.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = y);
        }
      }
      class di extends Wt {
        constructor(y, v, A) {
          super(ui(v), Qi(A, v)),
            (this.controls = y),
            this._initObservables(),
            this._setUpdateStrategy(v),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(y, v) {
          return this.controls[y]
            ? this.controls[y]
            : ((this.controls[y] = v),
              v.setParent(this),
              v._registerOnCollectionChange(this._onCollectionChange),
              v);
        }
        addControl(y, v, A = {}) {
          this.registerControl(y, v),
            this.updateValueAndValidity({ emitEvent: A.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(y, v = {}) {
          this.controls[y] &&
            this.controls[y]._registerOnCollectionChange(() => {}),
            delete this.controls[y],
            this.updateValueAndValidity({ emitEvent: v.emitEvent }),
            this._onCollectionChange();
        }
        setControl(y, v, A = {}) {
          this.controls[y] &&
            this.controls[y]._registerOnCollectionChange(() => {}),
            delete this.controls[y],
            v && this.registerControl(y, v),
            this.updateValueAndValidity({ emitEvent: A.emitEvent }),
            this._onCollectionChange();
        }
        contains(y) {
          return this.controls.hasOwnProperty(y) && this.controls[y].enabled;
        }
        setValue(y, v = {}) {
          oi(this, y),
            Object.keys(y).forEach((A) => {
              fn(this, A),
                this.controls[A].setValue(y[A], {
                  onlySelf: !0,
                  emitEvent: v.emitEvent,
                });
            }),
            this.updateValueAndValidity(v);
        }
        patchValue(y, v = {}) {
          null != y &&
            (Object.keys(y).forEach((A) => {
              this.controls[A] &&
                this.controls[A].patchValue(y[A], {
                  onlySelf: !0,
                  emitEvent: v.emitEvent,
                });
            }),
            this.updateValueAndValidity(v));
        }
        reset(y = {}, v = {}) {
          this._forEachChild((A, Y) => {
            A.reset(y[Y], { onlySelf: !0, emitEvent: v.emitEvent });
          }),
            this._updatePristine(v),
            this._updateTouched(v),
            this.updateValueAndValidity(v);
        }
        getRawValue() {
          return this._reduceChildren({}, (y, v, A) => ((y[A] = Rn(v)), y));
        }
        _syncPendingControls() {
          let y = this._reduceChildren(
            !1,
            (v, A) => !!A._syncPendingControls() || v
          );
          return y && this.updateValueAndValidity({ onlySelf: !0 }), y;
        }
        _forEachChild(y) {
          Object.keys(this.controls).forEach((v) => {
            const A = this.controls[v];
            A && y(A, v);
          });
        }
        _setUpControls() {
          this._forEachChild((y) => {
            y.setParent(this),
              y._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(y) {
          for (const v of Object.keys(this.controls)) {
            const A = this.controls[v];
            if (this.contains(v) && y(A)) return !0;
          }
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (y, v, A) => ((v.enabled || this.disabled) && (y[A] = v.value), y)
          );
        }
        _reduceChildren(y, v) {
          let A = y;
          return (
            this._forEachChild((Y, Ze) => {
              A = v(A, Y, Ze);
            }),
            A
          );
        }
        _allControlsDisabled() {
          for (const y of Object.keys(this.controls))
            if (this.controls[y].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
      }
      class dt extends Wt {
        constructor(y, v, A) {
          super(ui(v), Qi(A, v)),
            (this.controls = y),
            this._initObservables(),
            this._setUpdateStrategy(v),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        at(y) {
          return this.controls[y];
        }
        push(y, v = {}) {
          this.controls.push(y),
            this._registerControl(y),
            this.updateValueAndValidity({ emitEvent: v.emitEvent }),
            this._onCollectionChange();
        }
        insert(y, v, A = {}) {
          this.controls.splice(y, 0, v),
            this._registerControl(v),
            this.updateValueAndValidity({ emitEvent: A.emitEvent });
        }
        removeAt(y, v = {}) {
          this.controls[y] &&
            this.controls[y]._registerOnCollectionChange(() => {}),
            this.controls.splice(y, 1),
            this.updateValueAndValidity({ emitEvent: v.emitEvent });
        }
        setControl(y, v, A = {}) {
          this.controls[y] &&
            this.controls[y]._registerOnCollectionChange(() => {}),
            this.controls.splice(y, 1),
            v && (this.controls.splice(y, 0, v), this._registerControl(v)),
            this.updateValueAndValidity({ emitEvent: A.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(y, v = {}) {
          oi(this, y),
            y.forEach((A, Y) => {
              fn(this, Y),
                this.at(Y).setValue(A, {
                  onlySelf: !0,
                  emitEvent: v.emitEvent,
                });
            }),
            this.updateValueAndValidity(v);
        }
        patchValue(y, v = {}) {
          null != y &&
            (y.forEach((A, Y) => {
              this.at(Y) &&
                this.at(Y).patchValue(A, {
                  onlySelf: !0,
                  emitEvent: v.emitEvent,
                });
            }),
            this.updateValueAndValidity(v));
        }
        reset(y = [], v = {}) {
          this._forEachChild((A, Y) => {
            A.reset(y[Y], { onlySelf: !0, emitEvent: v.emitEvent });
          }),
            this._updatePristine(v),
            this._updateTouched(v),
            this.updateValueAndValidity(v);
        }
        getRawValue() {
          return this.controls.map((y) => Rn(y));
        }
        clear(y = {}) {
          this.controls.length < 1 ||
            (this._forEachChild((v) => v._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: y.emitEvent }));
        }
        _syncPendingControls() {
          let y = this.controls.reduce(
            (v, A) => !!A._syncPendingControls() || v,
            !1
          );
          return y && this.updateValueAndValidity({ onlySelf: !0 }), y;
        }
        _forEachChild(y) {
          this.controls.forEach((v, A) => {
            y(v, A);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((y) => y.enabled || this.disabled)
            .map((y) => y.value);
        }
        _anyControls(y) {
          return this.controls.some((v) => v.enabled && y(v));
        }
        _setUpControls() {
          this._forEachChild((y) => this._registerControl(y));
        }
        _allControlsDisabled() {
          for (const y of this.controls) if (y.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(y) {
          y.setParent(this),
            y._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const wi = { provide: Jt, useExisting: (0, a.Gpc)(() => fi) },
        Vn = (() => Promise.resolve(null))();
      let fi = (() => {
          class w extends Jt {
            constructor(v, A) {
              super(),
                (this.submitted = !1),
                (this._directives = new Set()),
                (this.ngSubmit = new a.vpe()),
                (this.form = new di({}, Rt(v), Mt(A)));
            }
            ngAfterViewInit() {
              this._setUpdateStrategy();
            }
            get formDirective() {
              return this;
            }
            get control() {
              return this.form;
            }
            get path() {
              return [];
            }
            get controls() {
              return this.form.controls;
            }
            addControl(v) {
              Vn.then(() => {
                const A = this._findContainer(v.path);
                (v.control = A.registerControl(v.name, v.control)),
                  Di(v.control, v),
                  v.control.updateValueAndValidity({ emitEvent: !1 }),
                  this._directives.add(v);
              });
            }
            getControl(v) {
              return this.form.get(v.path);
            }
            removeControl(v) {
              Vn.then(() => {
                const A = this._findContainer(v.path);
                A && A.removeControl(v.name), this._directives.delete(v);
              });
            }
            addFormGroup(v) {
              Vn.then(() => {
                const A = this._findContainer(v.path),
                  Y = new di({});
                (function Yn(w, y) {
                  ri(w, y);
                })(Y, v),
                  A.registerControl(v.name, Y),
                  Y.updateValueAndValidity({ emitEvent: !1 });
              });
            }
            removeFormGroup(v) {
              Vn.then(() => {
                const A = this._findContainer(v.path);
                A && A.removeControl(v.name);
              });
            }
            getFormGroup(v) {
              return this.form.get(v.path);
            }
            updateModel(v, A) {
              Vn.then(() => {
                this.form.get(v.path).setValue(A);
              });
            }
            setValue(v) {
              this.control.setValue(v);
            }
            onSubmit(v) {
              return (
                (this.submitted = !0),
                (function G(w, y) {
                  w._syncPendingControls(),
                    y.forEach((v) => {
                      const A = v.control;
                      "submit" === A.updateOn &&
                        A._pendingChange &&
                        (v.viewToModelUpdate(A._pendingValue),
                        (A._pendingChange = !1));
                    });
                })(this.form, this._directives),
                this.ngSubmit.emit(v),
                !1
              );
            }
            onReset() {
              this.resetForm();
            }
            resetForm(v) {
              this.form.reset(v), (this.submitted = !1);
            }
            _setUpdateStrategy() {
              this.options &&
                null != this.options.updateOn &&
                (this.form._updateOn = this.options.updateOn);
            }
            _findContainer(v) {
              return v.pop(), v.length ? this.form.get(v) : this.form;
            }
          }
          return (
            (w.ɵfac = function (v) {
              return new (v || w)(a.Y36(Fe, 10), a.Y36(je, 10));
            }),
            (w.ɵdir = a.lG2({
              type: w,
              selectors: [
                ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
                ["ng-form"],
                ["", "ngForm", ""],
              ],
              hostBindings: function (v, A) {
                1 & v &&
                  a.NdJ("submit", function (Ze) {
                    return A.onSubmit(Ze);
                  })("reset", function () {
                    return A.onReset();
                  });
              },
              inputs: { options: ["ngFormOptions", "options"] },
              outputs: { ngSubmit: "ngSubmit" },
              exportAs: ["ngForm"],
              features: [a._Bn([wi]), a.qOj],
            })),
            w
          );
        })(),
        Ui = (() => {
          class w {}
          return (
            (w.ɵfac = function (v) {
              return new (v || w)();
            }),
            (w.ɵdir = a.lG2({
              type: w,
              selectors: [
                ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""],
              ],
              hostAttrs: ["novalidate", ""],
            })),
            w
          );
        })(),
        ho = (() => {
          class w {}
          return (
            (w.ɵfac = function (v) {
              return new (v || w)();
            }),
            (w.ɵmod = a.oAB({ type: w })),
            (w.ɵinj = a.cJS({})),
            w
          );
        })();
      const Dr = new a.OlP("NgModelWithFormControlWarning"),
        Ur = { provide: rn, useExisting: (0, a.Gpc)(() => go) };
      let go = (() => {
          class w extends rn {
            constructor(v, A, Y, Ze) {
              super(),
                (this._ngModelWarningConfig = Ze),
                (this.update = new a.vpe()),
                (this._ngModelWarningSent = !1),
                this._setValidators(v),
                this._setAsyncValidators(A),
                (this.valueAccessor = (function F(w, y) {
                  if (!y) return null;
                  let v, A, Y;
                  return (
                    Array.isArray(y),
                    y.forEach((Ze) => {
                      Ze.constructor === me
                        ? (v = Ze)
                        : (function z(w) {
                            return Object.getPrototypeOf(w.constructor) === re;
                          })(Ze)
                        ? (A = Ze)
                        : (Y = Ze);
                    }),
                    Y || A || v || null
                  );
                })(0, Y));
            }
            set isDisabled(v) {}
            ngOnChanges(v) {
              if (this._isControlChanged(v)) {
                const A = v.form.previousValue;
                A && ii(A, this, !1),
                  Di(this.form, this),
                  this.control.disabled &&
                    this.valueAccessor.setDisabledState &&
                    this.valueAccessor.setDisabledState(!0),
                  this.form.updateValueAndValidity({ emitEvent: !1 });
              }
              (function Zi(w, y) {
                if (!w.hasOwnProperty("model")) return !1;
                const v = w.model;
                return !!v.isFirstChange() || !Object.is(y, v.currentValue);
              })(v, this.viewModel) &&
                (this.form.setValue(this.model), (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.form && ii(this.form, this, !1);
            }
            get path() {
              return [];
            }
            get control() {
              return this.form;
            }
            viewToModelUpdate(v) {
              (this.viewModel = v), this.update.emit(v);
            }
            _isControlChanged(v) {
              return v.hasOwnProperty("form");
            }
          }
          return (
            (w._ngModelWarningSentOnce = !1),
            (w.ɵfac = function (v) {
              return new (v || w)(
                a.Y36(Fe, 10),
                a.Y36(je, 10),
                a.Y36(Ne, 10),
                a.Y36(Dr, 8)
              );
            }),
            (w.ɵdir = a.lG2({
              type: w,
              selectors: [["", "formControl", ""]],
              inputs: {
                form: ["formControl", "form"],
                isDisabled: ["disabled", "isDisabled"],
                model: ["ngModel", "model"],
              },
              outputs: { update: "ngModelChange" },
              exportAs: ["ngForm"],
              features: [a._Bn([Ur]), a.qOj, a.TTD],
            })),
            w
          );
        })(),
        Pi = (() => {
          class w {}
          return (
            (w.ɵfac = function (v) {
              return new (v || w)();
            }),
            (w.ɵmod = a.oAB({ type: w })),
            (w.ɵinj = a.cJS({ imports: [[ho]] })),
            w
          );
        })(),
        er = (() => {
          class w {}
          return (
            (w.ɵfac = function (v) {
              return new (v || w)();
            }),
            (w.ɵmod = a.oAB({ type: w })),
            (w.ɵinj = a.cJS({ imports: [Pi] })),
            w
          );
        })(),
        Hn = (() => {
          class w {
            static withConfig(v) {
              return {
                ngModule: w,
                providers: [
                  { provide: Dr, useValue: v.warnOnNgModelWithFormControl },
                ],
              };
            }
          }
          return (
            (w.ɵfac = function (v) {
              return new (v || w)();
            }),
            (w.ɵmod = a.oAB({ type: w })),
            (w.ɵinj = a.cJS({ imports: [Pi] })),
            w
          );
        })();
    },
    9525: (tt, De, I) => {
      I.d(De, { Bz: () => $a, lC: () => zr });
      var a = I(1223),
        k = I(8306),
        _e = I(576);
      function he(m, h) {
        const f = (0, _e.m)(m) ? m : () => m,
          b = (T) => T.error(f());
        return new k.y(h ? (T) => h.schedule(b, 0, T) : b);
      }
      const Re = (0, I(3888).d)(
        (m) =>
          function () {
            m(this),
              (this.name = "EmptyError"),
              (this.message = "no elements in sequence");
          }
      );
      var Ce = I(727),
        ke = I(4482),
        Te = I(5403);
      function be() {
        return (0, ke.e)((m, h) => {
          let f = null;
          m._refCount++;
          const b = (0, Te.x)(h, void 0, void 0, void 0, () => {
            if (!m || m._refCount <= 0 || 0 < --m._refCount)
              return void (f = null);
            const T = m._connection,
              O = f;
            (f = null),
              T && (!O || T === O) && T.unsubscribe(),
              h.unsubscribe();
          });
          m.subscribe(b), b.closed || (f = m.connect());
        });
      }
      class se extends k.y {
        constructor(h, f) {
          super(),
            (this.source = h),
            (this.subjectFactory = f),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, ke.A)(h) && (this.lift = h.lift);
        }
        _subscribe(h) {
          return this.getSubject().subscribe(h);
        }
        getSubject() {
          const h = this._subject;
          return (
            (!h || h.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: h } = this;
          (this._subject = this._connection = null),
            null == h || h.unsubscribe();
        }
        connect() {
          let h = this._connection;
          if (!h) {
            h = this._connection = new Ce.w0();
            const f = this.getSubject();
            h.add(
              this.source.subscribe(
                (0, Te.x)(
                  f,
                  void 0,
                  () => {
                    this._teardown(), f.complete();
                  },
                  (b) => {
                    this._teardown(), f.error(b);
                  },
                  () => this._teardown()
                )
              )
            ),
              h.closed && ((this._connection = null), (h = Ce.w0.EMPTY));
          }
          return h;
        }
        refCount() {
          return be()(this);
        }
      }
      var ne = I(2076),
        le = I(9646),
        re = I(1135),
        Ne = I(9841),
        Ge = I(7272),
        Ae = I(9770),
        lt = I(515),
        pt = I(7579);
      function gt(m, h, f, b, T) {
        return (O, L) => {
          let V = f,
            ue = h,
            Ue = 0;
          O.subscribe(
            (0, Te.x)(
              L,
              (mt) => {
                const Xe = Ue++;
                (ue = V ? m(ue, mt, Xe) : ((V = !0), mt)), b && L.next(ue);
              },
              T &&
                (() => {
                  V && L.next(ue), L.complete();
                })
            )
          );
        };
      }
      function me(m, h) {
        return (0, ke.e)(gt(m, h, arguments.length >= 2, !0));
      }
      var Me = I(8421);
      function $e(m) {
        return (0, ke.e)((h, f) => {
          let O,
            b = null,
            T = !1;
          (b = h.subscribe(
            (0, Te.x)(f, void 0, void 0, (L) => {
              (O = (0, Me.Xf)(m(L, $e(m)(h)))),
                b ? (b.unsubscribe(), (b = null), O.subscribe(f)) : (T = !0);
            })
          )),
            T && (b.unsubscribe(), (b = null), O.subscribe(f));
        });
      }
      var Fe = I(9300);
      function je(m) {
        return m <= 0
          ? () => lt.E
          : (0, ke.e)((h, f) => {
              let b = [];
              h.subscribe(
                (0, Te.x)(
                  f,
                  (T) => {
                    b.push(T), m < b.length && b.shift();
                  },
                  () => {
                    for (const T of b) f.next(T);
                    f.complete();
                  },
                  void 0,
                  () => {
                    b = null;
                  }
                )
              );
            });
      }
      function fe(m = Ke) {
        return (0, ke.e)((h, f) => {
          let b = !1;
          h.subscribe(
            (0, Te.x)(
              f,
              (T) => {
                (b = !0), f.next(T);
              },
              () => (b ? f.complete() : f.error(m()))
            )
          );
        });
      }
      function Ke() {
        return new Re();
      }
      function q(m) {
        return (0, ke.e)((h, f) => {
          let b = !1;
          h.subscribe(
            (0, Te.x)(
              f,
              (T) => {
                (b = !0), f.next(T);
              },
              () => {
                b || f.next(m), f.complete();
              }
            )
          );
        });
      }
      var te = I(4671),
        de = I(5698);
      function Q(m, h) {
        const f = arguments.length >= 2;
        return (b) =>
          b.pipe(
            m ? (0, Fe.h)((T, O) => m(T, O, b)) : te.y,
            (0, de.q)(1),
            f ? q(h) : fe(() => new Re())
          );
      }
      var He = I(4004),
        vt = I(3900),
        Ht = I(8675),
        st = I(4351),
        bt = I(5577),
        ft = I(8505),
        nn = I(8189),
        jt = I(9808);
      class wt {
        constructor(h, f) {
          (this.id = h), (this.url = f);
        }
      }
      class $n extends wt {
        constructor(h, f, b = "imperative", T = null) {
          super(h, f), (this.navigationTrigger = b), (this.restoredState = T);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Rt extends wt {
        constructor(h, f, b) {
          super(h, f), (this.urlAfterRedirects = b);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class ln extends wt {
        constructor(h, f, b) {
          super(h, f), (this.reason = b);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Mt extends wt {
        constructor(h, f, b) {
          super(h, f), (this.error = b);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Vi extends wt {
        constructor(h, f, b, T) {
          super(h, f), (this.urlAfterRedirects = b), (this.state = T);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Wn extends wt {
        constructor(h, f, b, T) {
          super(h, f), (this.urlAfterRedirects = b), (this.state = T);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Hi extends wt {
        constructor(h, f, b, T, O) {
          super(h, f),
            (this.urlAfterRedirects = b),
            (this.state = T),
            (this.shouldActivate = O);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Xt extends wt {
        constructor(h, f, b, T) {
          super(h, f), (this.urlAfterRedirects = b), (this.state = T);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class zn extends wt {
        constructor(h, f, b, T) {
          super(h, f), (this.urlAfterRedirects = b), (this.state = T);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ti {
        constructor(h) {
          this.route = h;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class ni {
        constructor(h) {
          this.route = h;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Ai {
        constructor(h) {
          this.snapshot = h;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class rn {
        constructor(h) {
          this.snapshot = h;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Jt {
        constructor(h) {
          this.snapshot = h;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class wn {
        constructor(h) {
          this.snapshot = h;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Ri {
        constructor(h, f, b) {
          (this.routerEvent = h), (this.position = f), (this.anchor = b);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      const X = "primary";
      class U {
        constructor(h) {
          this.params = h || {};
        }
        has(h) {
          return Object.prototype.hasOwnProperty.call(this.params, h);
        }
        get(h) {
          if (this.has(h)) {
            const f = this.params[h];
            return Array.isArray(f) ? f[0] : f;
          }
          return null;
        }
        getAll(h) {
          if (this.has(h)) {
            const f = this.params[h];
            return Array.isArray(f) ? f : [f];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function j(m) {
        return new U(m);
      }
      const Z = "ngNavigationCancelingError";
      function oe(m) {
        const h = Error("NavigationCancelingError: " + m);
        return (h[Z] = !0), h;
      }
      function Pe(m, h, f) {
        const b = f.path.split("/");
        if (
          b.length > m.length ||
          ("full" === f.pathMatch && (h.hasChildren() || b.length < m.length))
        )
          return null;
        const T = {};
        for (let O = 0; O < b.length; O++) {
          const L = b[O],
            V = m[O];
          if (L.startsWith(":")) T[L.substring(1)] = V;
          else if (L !== V.path) return null;
        }
        return { consumed: m.slice(0, b.length), posParams: T };
      }
      function it(m, h) {
        const f = m ? Object.keys(m) : void 0,
          b = h ? Object.keys(h) : void 0;
        if (!f || !b || f.length != b.length) return !1;
        let T;
        for (let O = 0; O < f.length; O++)
          if (((T = f[O]), !Tt(m[T], h[T]))) return !1;
        return !0;
      }
      function Tt(m, h) {
        if (Array.isArray(m) && Array.isArray(h)) {
          if (m.length !== h.length) return !1;
          const f = [...m].sort(),
            b = [...h].sort();
          return f.every((T, O) => b[O] === T);
        }
        return m === h;
      }
      function Kt(m) {
        return Array.prototype.concat.apply([], m);
      }
      function on(m) {
        return m.length > 0 ? m[m.length - 1] : null;
      }
      function Be(m, h) {
        for (const f in m) m.hasOwnProperty(f) && h(m[f], f);
      }
      function St(m) {
        return (0, a.CqO)(m)
          ? m
          : (0, a.QGY)(m)
          ? (0, ne.D)(Promise.resolve(m))
          : (0, le.of)(m);
      }
      const qi = {
          exact: function Di(m, h, f) {
            if (
              !gn(m.segments, h.segments) ||
              !ri(m.segments, h.segments, f) ||
              m.numberOfChildren !== h.numberOfChildren
            )
              return !1;
            for (const b in h.children)
              if (!m.children[b] || !Di(m.children[b], h.children[b], f))
                return !1;
            return !0;
          },
          subset: Dt,
        },
        cn = {
          exact: function mi(m, h) {
            return it(m, h);
          },
          subset: function ii(m, h) {
            return (
              Object.keys(h).length <= Object.keys(m).length &&
              Object.keys(h).every((f) => Tt(m[f], h[f]))
            );
          },
          ignored: () => !0,
        };
      function kt(m, h, f) {
        return (
          qi[f.paths](m.root, h.root, f.matrixParams) &&
          cn[f.queryParams](m.queryParams, h.queryParams) &&
          !("exact" === f.fragment && m.fragment !== h.fragment)
        );
      }
      function Dt(m, h, f) {
        return _i(m, h, h.segments, f);
      }
      function _i(m, h, f, b) {
        if (m.segments.length > f.length) {
          const T = m.segments.slice(0, f.length);
          return !(!gn(T, f) || h.hasChildren() || !ri(T, f, b));
        }
        if (m.segments.length === f.length) {
          if (!gn(m.segments, f) || !ri(m.segments, f, b)) return !1;
          for (const T in h.children)
            if (!m.children[T] || !Dt(m.children[T], h.children[T], b))
              return !1;
          return !0;
        }
        {
          const T = f.slice(0, m.segments.length),
            O = f.slice(m.segments.length);
          return (
            !!(gn(m.segments, T) && ri(m.segments, T, b) && m.children[X]) &&
            _i(m.children[X], h, O, b)
          );
        }
      }
      function ri(m, h, f) {
        return h.every((b, T) => cn[f](m[T].parameters, b.parameters));
      }
      class en {
        constructor(h, f, b) {
          (this.root = h), (this.queryParams = f), (this.fragment = b);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = j(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return ci.serialize(this);
        }
      }
      class at {
        constructor(h, f) {
          (this.segments = h),
            (this.children = f),
            (this.parent = null),
            Be(f, (b, T) => (b.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Ln(this);
        }
      }
      class $t {
        constructor(h, f) {
          (this.path = h), (this.parameters = f);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = j(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Qe(this);
        }
      }
      function gn(m, h) {
        return m.length === h.length && m.every((f, b) => f.path === h[b].path);
      }
      class Ci {}
      class vi {
        parse(h) {
          const f = new Sn(h);
          return new en(
            f.parseRootSegment(),
            f.parseQueryParams(),
            f.parseFragment()
          );
        }
        serialize(h) {
          const f = `/${An(h.root, !0)}`,
            b = (function un(m) {
              const h = Object.keys(m)
                .map((f) => {
                  const b = m[f];
                  return Array.isArray(b)
                    ? b.map((T) => `${z(f)}=${z(T)}`).join("&")
                    : `${z(f)}=${z(b)}`;
                })
                .filter((f) => !!f);
              return h.length ? `?${h.join("&")}` : "";
            })(h.queryParams);
          return `${f}${b}${
            "string" == typeof h.fragment
              ? `#${(function G(m) {
                  return encodeURI(m);
                })(h.fragment)}`
              : ""
          }`;
        }
      }
      const ci = new vi();
      function Ln(m) {
        return m.segments.map((h) => Qe(h)).join("/");
      }
      function An(m, h) {
        if (!m.hasChildren()) return Ln(m);
        if (h) {
          const f = m.children[X] ? An(m.children[X], !1) : "",
            b = [];
          return (
            Be(m.children, (T, O) => {
              O !== X && b.push(`${O}:${An(T, !1)}`);
            }),
            b.length > 0 ? `${f}(${b.join("//")})` : f
          );
        }
        {
          const f = (function Yn(m, h) {
            let f = [];
            return (
              Be(m.children, (b, T) => {
                T === X && (f = f.concat(h(b, T)));
              }),
              Be(m.children, (b, T) => {
                T !== X && (f = f.concat(h(b, T)));
              }),
              f
            );
          })(m, (b, T) =>
            T === X ? [An(m.children[X], !1)] : [`${T}:${An(b, !1)}`]
          );
          return 1 === Object.keys(m.children).length && null != m.children[X]
            ? `${Ln(m)}/${f[0]}`
            : `${Ln(m)}/(${f.join("//")})`;
        }
      }
      function Zi(m) {
        return encodeURIComponent(m)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function z(m) {
        return Zi(m).replace(/%3B/gi, ";");
      }
      function F(m) {
        return Zi(m)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function K(m) {
        return decodeURIComponent(m);
      }
      function ve(m) {
        return K(m.replace(/\+/g, "%20"));
      }
      function Qe(m) {
        return `${F(m.path)}${(function nt(m) {
          return Object.keys(m)
            .map((h) => `;${F(h)}=${F(m[h])}`)
            .join("");
        })(m.parameters)}`;
      }
      const tn = /^[^\/()?;=#]+/;
      function Tn(m) {
        const h = m.match(tn);
        return h ? h[0] : "";
      }
      const Ei = /^[^=?&#]+/,
        dn = /^[^&#]+/;
      class Sn {
        constructor(h) {
          (this.url = h), (this.remaining = h);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new at([], {})
              : new at([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const h = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(h);
            } while (this.consumeOptional("&"));
          return h;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const h = [];
          for (
            this.peekStartsWith("(") || h.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), h.push(this.parseSegment());
          let f = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (f = this.parseParens(!0)));
          let b = {};
          return (
            this.peekStartsWith("(") && (b = this.parseParens(!1)),
            (h.length > 0 || Object.keys(f).length > 0) &&
              (b[X] = new at(h, f)),
            b
          );
        }
        parseSegment() {
          const h = Tn(this.remaining);
          if ("" === h && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(h), new $t(K(h), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const h = {};
          for (; this.consumeOptional(";"); ) this.parseParam(h);
          return h;
        }
        parseParam(h) {
          const f = Tn(this.remaining);
          if (!f) return;
          this.capture(f);
          let b = "";
          if (this.consumeOptional("=")) {
            const T = Tn(this.remaining);
            T && ((b = T), this.capture(b));
          }
          h[K(f)] = K(b);
        }
        parseQueryParam(h) {
          const f = (function ui(m) {
            const h = m.match(Ei);
            return h ? h[0] : "";
          })(this.remaining);
          if (!f) return;
          this.capture(f);
          let b = "";
          if (this.consumeOptional("=")) {
            const L = (function Qi(m) {
              const h = m.match(dn);
              return h ? h[0] : "";
            })(this.remaining);
            L && ((b = L), this.capture(b));
          }
          const T = ve(f),
            O = ve(b);
          if (h.hasOwnProperty(T)) {
            let L = h[T];
            Array.isArray(L) || ((L = [L]), (h[T] = L)), L.push(O);
          } else h[T] = O;
        }
        parseParens(h) {
          const f = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const b = Tn(this.remaining),
              T = this.remaining[b.length];
            if ("/" !== T && ")" !== T && ";" !== T)
              throw new Error(`Cannot parse url '${this.url}'`);
            let O;
            b.indexOf(":") > -1
              ? ((O = b.substr(0, b.indexOf(":"))),
                this.capture(O),
                this.capture(":"))
              : h && (O = X);
            const L = this.parseChildren();
            (f[O] = 1 === Object.keys(L).length ? L[X] : new at([], L)),
              this.consumeOptional("//");
          }
          return f;
        }
        peekStartsWith(h) {
          return this.remaining.startsWith(h);
        }
        consumeOptional(h) {
          return (
            !!this.peekStartsWith(h) &&
            ((this.remaining = this.remaining.substring(h.length)), !0)
          );
        }
        capture(h) {
          if (!this.consumeOptional(h)) throw new Error(`Expected "${h}".`);
        }
      }
      class Le {
        constructor(h) {
          this._root = h;
        }
        get root() {
          return this._root.value;
        }
        parent(h) {
          const f = this.pathFromRoot(h);
          return f.length > 1 ? f[f.length - 2] : null;
        }
        children(h) {
          const f = ht(h, this._root);
          return f ? f.children.map((b) => b.value) : [];
        }
        firstChild(h) {
          const f = ht(h, this._root);
          return f && f.children.length > 0 ? f.children[0].value : null;
        }
        siblings(h) {
          const f = Nt(h, this._root);
          return f.length < 2
            ? []
            : f[f.length - 2].children
                .map((T) => T.value)
                .filter((T) => T !== h);
        }
        pathFromRoot(h) {
          return Nt(h, this._root).map((f) => f.value);
        }
      }
      function ht(m, h) {
        if (m === h.value) return h;
        for (const f of h.children) {
          const b = ht(m, f);
          if (b) return b;
        }
        return null;
      }
      function Nt(m, h) {
        if (m === h.value) return [h];
        for (const f of h.children) {
          const b = Nt(m, f);
          if (b.length) return b.unshift(h), b;
        }
        return [];
      }
      class qt {
        constructor(h, f) {
          (this.value = h), (this.children = f);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Rn(m) {
        const h = {};
        return m && m.children.forEach((f) => (h[f.value.outlet] = f)), h;
      }
      class fn extends Le {
        constructor(h, f) {
          super(h), (this.snapshot = f), fi(this, h);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function oi(m, h) {
        const f = (function Wt(m, h) {
            const L = new wi([], {}, {}, "", {}, X, h, null, m.root, -1, {});
            return new Vn("", new qt(L, []));
          })(m, h),
          b = new re.X([new $t("", {})]),
          T = new re.X({}),
          O = new re.X({}),
          L = new re.X({}),
          V = new re.X(""),
          ue = new Bn(b, T, L, V, O, X, h, f.root);
        return (ue.snapshot = f.root), new fn(new qt(ue, []), f);
      }
      class Bn {
        constructor(h, f, b, T, O, L, V, ue) {
          (this.url = h),
            (this.params = f),
            (this.queryParams = b),
            (this.fragment = T),
            (this.data = O),
            (this.outlet = L),
            (this.component = V),
            (this._futureSnapshot = ue);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe((0, He.U)((h) => j(h)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, He.U)((h) => j(h))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function di(m, h = "emptyOnly") {
        const f = m.pathFromRoot;
        let b = 0;
        if ("always" !== h)
          for (b = f.length - 1; b >= 1; ) {
            const T = f[b],
              O = f[b - 1];
            if (T.routeConfig && "" === T.routeConfig.path) b--;
            else {
              if (O.component) break;
              b--;
            }
          }
        return (function dt(m) {
          return m.reduce(
            (h, f) => ({
              params: Object.assign(Object.assign({}, h.params), f.params),
              data: Object.assign(Object.assign({}, h.data), f.data),
              resolve: Object.assign(
                Object.assign({}, h.resolve),
                f._resolvedData
              ),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(f.slice(b));
      }
      class wi {
        constructor(h, f, b, T, O, L, V, ue, Ue, mt, Xe) {
          (this.url = h),
            (this.params = f),
            (this.queryParams = b),
            (this.fragment = T),
            (this.data = O),
            (this.outlet = L),
            (this.component = V),
            (this.routeConfig = ue),
            (this._urlSegment = Ue),
            (this._lastPathIndex = mt),
            (this._resolve = Xe);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = j(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = j(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((b) => b.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class Vn extends Le {
        constructor(h, f) {
          super(f), (this.url = h), fi(this, f);
        }
        toString() {
          return Jn(this._root);
        }
      }
      function fi(m, h) {
        (h.value._routerState = m), h.children.forEach((f) => fi(m, f));
      }
      function Jn(m) {
        const h =
          m.children.length > 0 ? ` { ${m.children.map(Jn).join(", ")} } ` : "";
        return `${m.value}${h}`;
      }
      function Nn(m) {
        if (m.snapshot) {
          const h = m.snapshot,
            f = m._futureSnapshot;
          (m.snapshot = f),
            it(h.queryParams, f.queryParams) ||
              m.queryParams.next(f.queryParams),
            h.fragment !== f.fragment && m.fragment.next(f.fragment),
            it(h.params, f.params) || m.params.next(f.params),
            (function It(m, h) {
              if (m.length !== h.length) return !1;
              for (let f = 0; f < m.length; ++f) if (!it(m[f], h[f])) return !1;
              return !0;
            })(h.url, f.url) || m.url.next(f.url),
            it(h.data, f.data) || m.data.next(f.data);
        } else
          (m.snapshot = m._futureSnapshot), m.data.next(m._futureSnapshot.data);
      }
      function Ii(m, h) {
        const f =
          it(m.params, h.params) &&
          (function li(m, h) {
            return (
              gn(m, h) && m.every((f, b) => it(f.parameters, h[b].parameters))
            );
          })(m.url, h.url);
        return (
          f &&
          !(!m.parent != !h.parent) &&
          (!m.parent || Ii(m.parent, h.parent))
        );
      }
      function In(m, h, f) {
        if (f && m.shouldReuseRoute(h.value, f.value.snapshot)) {
          const b = f.value;
          b._futureSnapshot = h.value;
          const T = (function Ut(m, h, f) {
            return h.children.map((b) => {
              for (const T of f.children)
                if (m.shouldReuseRoute(b.value, T.value.snapshot))
                  return In(m, b, T);
              return In(m, b);
            });
          })(m, h, f);
          return new qt(b, T);
        }
        {
          if (m.shouldAttach(h.value)) {
            const O = m.retrieve(h.value);
            if (null !== O) {
              const L = O.route;
              return (
                (L.value._futureSnapshot = h.value),
                (L.children = h.children.map((V) => In(m, V))),
                L
              );
            }
          }
          const b = (function br(m) {
              return new Bn(
                new re.X(m.url),
                new re.X(m.params),
                new re.X(m.queryParams),
                new re.X(m.fragment),
                new re.X(m.data),
                m.outlet,
                m.component,
                m
              );
            })(h.value),
            T = h.children.map((O) => In(m, O));
          return new qt(b, T);
        }
      }
      function Zt(m) {
        return (
          "object" == typeof m && null != m && !m.outlets && !m.segmentPath
        );
      }
      function Dn(m) {
        return "object" == typeof m && null != m && m.outlets;
      }
      function Ui(m, h, f, b, T) {
        let O = {};
        if (
          (b &&
            Be(b, (V, ue) => {
              O[ue] = Array.isArray(V) ? V.map((Ue) => `${Ue}`) : `${V}`;
            }),
          m === h)
        )
          return new en(f, O, T);
        const L = Xi(m, h, f);
        return new en(L, O, T);
      }
      function Xi(m, h, f) {
        const b = {};
        return (
          Be(m.children, (T, O) => {
            b[O] = T === h ? f : Xi(T, h, f);
          }),
          new at(m.segments, b)
        );
      }
      class Gi {
        constructor(h, f, b) {
          if (
            ((this.isAbsolute = h),
            (this.numberOfDoubleDots = f),
            (this.commands = b),
            h && b.length > 0 && Zt(b[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const T = b.find(Dn);
          if (T && T !== on(b))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class Hr {
        constructor(h, f, b) {
          (this.segmentGroup = h), (this.processChildren = f), (this.index = b);
        }
      }
      function ko(m, h, f) {
        if (
          (m || (m = new at([], {})),
          0 === m.segments.length && m.hasChildren())
        )
          return $i(m, h, f);
        const b = (function Dr(m, h, f) {
            let b = 0,
              T = h;
            const O = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; T < m.segments.length; ) {
              if (b >= f.length) return O;
              const L = m.segments[T],
                V = f[b];
              if (Dn(V)) break;
              const ue = `${V}`,
                Ue = b < f.length - 1 ? f[b + 1] : null;
              if (T > 0 && void 0 === ue) break;
              if (ue && Ue && "object" == typeof Ue && void 0 === Ue.outlets) {
                if (!Cr(ue, Ue, L)) return O;
                b += 2;
              } else {
                if (!Cr(ue, {}, L)) return O;
                b++;
              }
              T++;
            }
            return { match: !0, pathIndex: T, commandIndex: b };
          })(m, h, f),
          T = f.slice(b.commandIndex);
        if (b.match && b.pathIndex < m.segments.length) {
          const O = new at(m.segments.slice(0, b.pathIndex), {});
          return (
            (O.children[X] = new at(m.segments.slice(b.pathIndex), m.children)),
            $i(O, 0, T)
          );
        }
        return b.match && 0 === T.length
          ? new at(m.segments, {})
          : b.match && !m.hasChildren()
          ? Ur(m, h, f)
          : b.match
          ? $i(m, 0, T)
          : Ur(m, h, f);
      }
      function $i(m, h, f) {
        if (0 === f.length) return new at(m.segments, {});
        {
          const b = (function po(m) {
              return Dn(m[0]) ? m[0].outlets : { [X]: m };
            })(f),
            T = {};
          return (
            Be(b, (O, L) => {
              "string" == typeof O && (O = [O]),
                null !== O && (T[L] = ko(m.children[L], h, O));
            }),
            Be(m.children, (O, L) => {
              void 0 === b[L] && (T[L] = O);
            }),
            new at(m.segments, T)
          );
        }
      }
      function Ur(m, h, f) {
        const b = m.segments.slice(0, h);
        let T = 0;
        for (; T < f.length; ) {
          const O = f[T];
          if (Dn(O)) {
            const ue = go(O.outlets);
            return new at(b, ue);
          }
          if (0 === T && Zt(f[0])) {
            b.push(new $t(m.segments[h].path, cr(f[0]))), T++;
            continue;
          }
          const L = Dn(O) ? O.outlets[X] : `${O}`,
            V = T < f.length - 1 ? f[T + 1] : null;
          L && V && Zt(V)
            ? (b.push(new $t(L, cr(V))), (T += 2))
            : (b.push(new $t(L, {})), T++);
        }
        return new at(b, {});
      }
      function go(m) {
        const h = {};
        return (
          Be(m, (f, b) => {
            "string" == typeof f && (f = [f]),
              null !== f && (h[b] = Ur(new at([], {}), 0, f));
          }),
          h
        );
      }
      function cr(m) {
        const h = {};
        return Be(m, (f, b) => (h[b] = `${f}`)), h;
      }
      function Cr(m, h, f) {
        return m == f.path && it(h, f.parameters);
      }
      class Er {
        constructor(h, f, b, T) {
          (this.routeReuseStrategy = h),
            (this.futureState = f),
            (this.currState = b),
            (this.forwardEvent = T);
        }
        activate(h) {
          const f = this.futureState._root,
            b = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(f, b, h),
            Nn(this.futureState.root),
            this.activateChildRoutes(f, b, h);
        }
        deactivateChildRoutes(h, f, b) {
          const T = Rn(f);
          h.children.forEach((O) => {
            const L = O.value.outlet;
            this.deactivateRoutes(O, T[L], b), delete T[L];
          }),
            Be(T, (O, L) => {
              this.deactivateRouteAndItsChildren(O, b);
            });
        }
        deactivateRoutes(h, f, b) {
          const T = h.value,
            O = f ? f.value : null;
          if (T === O)
            if (T.component) {
              const L = b.getContext(T.outlet);
              L && this.deactivateChildRoutes(h, f, L.children);
            } else this.deactivateChildRoutes(h, f, b);
          else O && this.deactivateRouteAndItsChildren(f, b);
        }
        deactivateRouteAndItsChildren(h, f) {
          h.value.component &&
          this.routeReuseStrategy.shouldDetach(h.value.snapshot)
            ? this.detachAndStoreRouteSubtree(h, f)
            : this.deactivateRouteAndOutlet(h, f);
        }
        detachAndStoreRouteSubtree(h, f) {
          const b = f.getContext(h.value.outlet),
            T = b && h.value.component ? b.children : f,
            O = Rn(h);
          for (const L of Object.keys(O))
            this.deactivateRouteAndItsChildren(O[L], T);
          if (b && b.outlet) {
            const L = b.outlet.detach(),
              V = b.children.onOutletDeactivated();
            this.routeReuseStrategy.store(h.value.snapshot, {
              componentRef: L,
              route: h,
              contexts: V,
            });
          }
        }
        deactivateRouteAndOutlet(h, f) {
          const b = f.getContext(h.value.outlet),
            T = b && h.value.component ? b.children : f,
            O = Rn(h);
          for (const L of Object.keys(O))
            this.deactivateRouteAndItsChildren(O[L], T);
          b &&
            b.outlet &&
            (b.outlet.deactivate(),
            b.children.onOutletDeactivated(),
            (b.attachRef = null),
            (b.resolver = null),
            (b.route = null));
        }
        activateChildRoutes(h, f, b) {
          const T = Rn(f);
          h.children.forEach((O) => {
            this.activateRoutes(O, T[O.value.outlet], b),
              this.forwardEvent(new wn(O.value.snapshot));
          }),
            h.children.length && this.forwardEvent(new rn(h.value.snapshot));
        }
        activateRoutes(h, f, b) {
          const T = h.value,
            O = f ? f.value : null;
          if ((Nn(T), T === O))
            if (T.component) {
              const L = b.getOrCreateContext(T.outlet);
              this.activateChildRoutes(h, f, L.children);
            } else this.activateChildRoutes(h, f, b);
          else if (T.component) {
            const L = b.getOrCreateContext(T.outlet);
            if (this.routeReuseStrategy.shouldAttach(T.snapshot)) {
              const V = this.routeReuseStrategy.retrieve(T.snapshot);
              this.routeReuseStrategy.store(T.snapshot, null),
                L.children.onOutletReAttached(V.contexts),
                (L.attachRef = V.componentRef),
                (L.route = V.route.value),
                L.outlet && L.outlet.attach(V.componentRef, V.route.value),
                Nn(V.route.value),
                this.activateChildRoutes(h, null, L.children);
            } else {
              const V = (function mo(m) {
                  for (let h = m.parent; h; h = h.parent) {
                    const f = h.routeConfig;
                    if (f && f._loadedConfig) return f._loadedConfig;
                    if (f && f.component) return null;
                  }
                  return null;
                })(T.snapshot),
                ue = V ? V.module.componentFactoryResolver : null;
              (L.attachRef = null),
                (L.route = T),
                (L.resolver = ue),
                L.outlet && L.outlet.activateWith(T, ue),
                this.activateChildRoutes(h, null, L.children);
            }
          } else this.activateChildRoutes(h, null, b);
        }
      }
      class ur {
        constructor(h, f) {
          (this.routes = h), (this.module = f);
        }
      }
      function Ti(m) {
        return "function" == typeof m;
      }
      function yi(m) {
        return m instanceof en;
      }
      const dr = Symbol("INITIAL_VALUE");
      function si() {
        return (0, vt.w)((m) =>
          (0, Ne.a)(m.map((h) => h.pipe((0, de.q)(1), (0, Ht.O)(dr)))).pipe(
            me((h, f) => {
              let b = !1;
              return f.reduce(
                (T, O, L) =>
                  T !== dr
                    ? T
                    : (O === dr && (b = !0),
                      b || (!1 !== O && L !== f.length - 1 && !yi(O)) ? T : O),
                h
              );
            }, dr),
            (0, Fe.h)((h) => h !== dr),
            (0, He.U)((h) => (yi(h) ? h : !0 === h)),
            (0, de.q)(1)
          )
        );
      }
      class Wr {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new xi()),
            (this.attachRef = null);
        }
      }
      class xi {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(h, f) {
          const b = this.getOrCreateContext(h);
          (b.outlet = f), this.contexts.set(h, b);
        }
        onChildOutletDestroyed(h) {
          const f = this.getContext(h);
          f && ((f.outlet = null), (f.attachRef = null));
        }
        onOutletDeactivated() {
          const h = this.contexts;
          return (this.contexts = new Map()), h;
        }
        onOutletReAttached(h) {
          this.contexts = h;
        }
        getOrCreateContext(h) {
          let f = this.getContext(h);
          return f || ((f = new Wr()), this.contexts.set(h, f)), f;
        }
        getContext(h) {
          return this.contexts.get(h) || null;
        }
      }
      let zr = (() => {
        class m {
          constructor(f, b, T, O, L) {
            (this.parentContexts = f),
              (this.location = b),
              (this.resolver = T),
              (this.changeDetector = L),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new a.vpe()),
              (this.deactivateEvents = new a.vpe()),
              (this.attachEvents = new a.vpe()),
              (this.detachEvents = new a.vpe()),
              (this.name = O || X),
              f.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const f = this.parentContexts.getContext(this.name);
              f &&
                f.route &&
                (f.attachRef
                  ? this.attach(f.attachRef, f.route)
                  : this.activateWith(f.route, f.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new Error("Outlet is not activated");
            this.location.detach();
            const f = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(f.instance),
              f
            );
          }
          attach(f, b) {
            (this.activated = f),
              (this._activatedRoute = b),
              this.location.insert(f.hostView),
              this.attachEvents.emit(f.instance);
          }
          deactivate() {
            if (this.activated) {
              const f = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(f);
            }
          }
          activateWith(f, b) {
            if (this.isActivated)
              throw new Error("Cannot activate an already activated outlet");
            this._activatedRoute = f;
            const L = (b = b || this.resolver).resolveComponentFactory(
                f._futureSnapshot.routeConfig.component
              ),
              V = this.parentContexts.getOrCreateContext(this.name).children,
              ue = new Yr(f, V, this.location.injector);
            (this.activated = this.location.createComponent(
              L,
              this.location.length,
              ue
            )),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (m.ɵfac = function (f) {
            return new (f || m)(
              a.Y36(xi),
              a.Y36(a.s_b),
              a.Y36(a._Vd),
              a.$8M("name"),
              a.Y36(a.sBO)
            );
          }),
          (m.ɵdir = a.lG2({
            type: m,
            selectors: [["router-outlet"]],
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
              attachEvents: "attach",
              detachEvents: "detach",
            },
            exportAs: ["outlet"],
          })),
          m
        );
      })();
      class Yr {
        constructor(h, f, b) {
          (this.route = h), (this.childContexts = f), (this.parent = b);
        }
        get(h, f) {
          return h === Bn
            ? this.route
            : h === xi
            ? this.childContexts
            : this.parent.get(h, f);
        }
      }
      let _o = (() => {
        class m {}
        return (
          (m.ɵfac = function (f) {
            return new (f || m)();
          }),
          (m.ɵcmp = a.Xpm({
            type: m,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (f, b) {
              1 & f && a._UZ(0, "router-outlet");
            },
            directives: [zr],
            encapsulation: 2,
          })),
          m
        );
      })();
      function Sr(m, h = "") {
        for (let f = 0; f < m.length; f++) {
          const b = m[f];
          Jr(b, Kr(h, b));
        }
      }
      function Jr(m, h) {
        m.children && Sr(m.children, h);
      }
      function Kr(m, h) {
        return h
          ? m || h.path
            ? m && !h.path
              ? `${m}/`
              : !m && h.path
              ? h.path
              : `${m}/${h.path}`
            : ""
          : m;
      }
      function qn(m) {
        const h = m.children && m.children.map(qn),
          f = h
            ? Object.assign(Object.assign({}, m), { children: h })
            : Object.assign({}, m);
        return (
          !f.component &&
            (h || f.loadChildren) &&
            f.outlet &&
            f.outlet !== X &&
            (f.component = _o),
          f
        );
      }
      function Zn(m) {
        return m.outlet || X;
      }
      function Qn(m, h) {
        const f = m.filter((b) => Zn(b) === h);
        return f.push(...m.filter((b) => Zn(b) !== h)), f;
      }
      const fr = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function D(m, h, f) {
        var b;
        if ("" === h.path)
          return "full" === h.pathMatch && (m.hasChildren() || f.length > 0)
            ? Object.assign({}, fr)
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: f,
                parameters: {},
                positionalParamSegments: {},
              };
        const O = (h.matcher || Pe)(f, m, h);
        if (!O) return Object.assign({}, fr);
        const L = {};
        Be(O.posParams, (ue, Ue) => {
          L[Ue] = ue.path;
        });
        const V =
          O.consumed.length > 0
            ? Object.assign(
                Object.assign({}, L),
                O.consumed[O.consumed.length - 1].parameters
              )
            : L;
        return {
          matched: !0,
          consumedSegments: O.consumed,
          remainingSegments: f.slice(O.consumed.length),
          parameters: V,
          positionalParamSegments:
            null !== (b = O.posParams) && void 0 !== b ? b : {},
        };
      }
      function M(m, h, f, b, T = "corrected") {
        if (
          f.length > 0 &&
          (function H(m, h, f) {
            return f.some((b) => Ee(m, h, b) && Zn(b) !== X);
          })(m, f, b)
        ) {
          const L = new at(
            h,
            (function R(m, h, f, b) {
              const T = {};
              (T[X] = b),
                (b._sourceSegment = m),
                (b._segmentIndexShift = h.length);
              for (const O of f)
                if ("" === O.path && Zn(O) !== X) {
                  const L = new at([], {});
                  (L._sourceSegment = m),
                    (L._segmentIndexShift = h.length),
                    (T[Zn(O)] = L);
                }
              return T;
            })(m, h, b, new at(f, m.children))
          );
          return (
            (L._sourceSegment = m),
            (L._segmentIndexShift = h.length),
            { segmentGroup: L, slicedSegments: [] }
          );
        }
        if (
          0 === f.length &&
          (function ce(m, h, f) {
            return f.some((b) => Ee(m, h, b));
          })(m, f, b)
        ) {
          const L = new at(
            m.segments,
            (function E(m, h, f, b, T, O) {
              const L = {};
              for (const V of b)
                if (Ee(m, f, V) && !T[Zn(V)]) {
                  const ue = new at([], {});
                  (ue._sourceSegment = m),
                    (ue._segmentIndexShift =
                      "legacy" === O ? m.segments.length : h.length),
                    (L[Zn(V)] = ue);
                }
              return Object.assign(Object.assign({}, T), L);
            })(m, h, f, b, m.children, T)
          );
          return (
            (L._sourceSegment = m),
            (L._segmentIndexShift = h.length),
            { segmentGroup: L, slicedSegments: f }
          );
        }
        const O = new at(m.segments, m.children);
        return (
          (O._sourceSegment = m),
          (O._segmentIndexShift = h.length),
          { segmentGroup: O, slicedSegments: f }
        );
      }
      function Ee(m, h, f) {
        return (
          (!(m.hasChildren() || h.length > 0) || "full" !== f.pathMatch) &&
          "" === f.path
        );
      }
      function qe(m, h, f, b) {
        return (
          !!(Zn(m) === b || (b !== X && Ee(h, f, m))) &&
          ("**" === m.path || D(h, m, f).matched)
        );
      }
      function ot(m, h, f) {
        return 0 === h.length && !m.children[f];
      }
      class Bt {
        constructor(h) {
          this.segmentGroup = h || null;
        }
      }
      class zt {
        constructor(h) {
          this.urlTree = h;
        }
      }
      function et(m) {
        return he(new Bt(m));
      }
      function mn(m) {
        return he(new zt(m));
      }
      class Pi {
        constructor(h, f, b, T, O) {
          (this.configLoader = f),
            (this.urlSerializer = b),
            (this.urlTree = T),
            (this.config = O),
            (this.allowRedirects = !0),
            (this.ngModule = h.get(a.h0i));
        }
        apply() {
          const h = M(this.urlTree.root, [], [], this.config).segmentGroup,
            f = new at(h.segments, h.children);
          return this.expandSegmentGroup(this.ngModule, this.config, f, X)
            .pipe(
              (0, He.U)((O) =>
                this.createUrlTree(
                  Hn(O),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              $e((O) => {
                if (O instanceof zt)
                  return (this.allowRedirects = !1), this.match(O.urlTree);
                throw O instanceof Bt ? this.noMatchError(O) : O;
              })
            );
        }
        match(h) {
          return this.expandSegmentGroup(this.ngModule, this.config, h.root, X)
            .pipe(
              (0, He.U)((T) =>
                this.createUrlTree(Hn(T), h.queryParams, h.fragment)
              )
            )
            .pipe(
              $e((T) => {
                throw T instanceof Bt ? this.noMatchError(T) : T;
              })
            );
        }
        noMatchError(h) {
          return new Error(
            `Cannot match any routes. URL Segment: '${h.segmentGroup}'`
          );
        }
        createUrlTree(h, f, b) {
          const T = h.segments.length > 0 ? new at([], { [X]: h }) : h;
          return new en(T, f, b);
        }
        expandSegmentGroup(h, f, b, T) {
          return 0 === b.segments.length && b.hasChildren()
            ? this.expandChildren(h, f, b).pipe((0, He.U)((O) => new at([], O)))
            : this.expandSegment(h, b, f, b.segments, T, !0);
        }
        expandChildren(h, f, b) {
          const T = [];
          for (const O of Object.keys(b.children))
            "primary" === O ? T.unshift(O) : T.push(O);
          return (0, ne.D)(T).pipe(
            (0, st.b)((O) => {
              const L = b.children[O],
                V = Qn(f, O);
              return this.expandSegmentGroup(h, V, L, O).pipe(
                (0, He.U)((ue) => ({ segment: ue, outlet: O }))
              );
            }),
            me((O, L) => ((O[L.outlet] = L.segment), O), {}),
            (function ie(m, h) {
              const f = arguments.length >= 2;
              return (b) =>
                b.pipe(
                  m ? (0, Fe.h)((T, O) => m(T, O, b)) : te.y,
                  je(1),
                  f ? q(h) : fe(() => new Re())
                );
            })()
          );
        }
        expandSegment(h, f, b, T, O, L) {
          return (0, ne.D)(b).pipe(
            (0, st.b)((V) =>
              this.expandSegmentAgainstRoute(h, f, b, V, T, O, L).pipe(
                $e((Ue) => {
                  if (Ue instanceof Bt) return (0, le.of)(null);
                  throw Ue;
                })
              )
            ),
            Q((V) => !!V),
            $e((V, ue) => {
              if (V instanceof Re || "EmptyError" === V.name)
                return ot(f, T, O) ? (0, le.of)(new at([], {})) : et(f);
              throw V;
            })
          );
        }
        expandSegmentAgainstRoute(h, f, b, T, O, L, V) {
          return qe(T, f, O, L)
            ? void 0 === T.redirectTo
              ? this.matchSegmentAgainstRoute(h, f, T, O, L)
              : V && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(h, f, b, T, O, L)
              : et(f)
            : et(f);
        }
        expandSegmentAgainstRouteUsingRedirect(h, f, b, T, O, L) {
          return "**" === T.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(h, b, T, L)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                h,
                f,
                b,
                T,
                O,
                L
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(h, f, b, T) {
          const O = this.applyRedirectCommands([], b.redirectTo, {});
          return b.redirectTo.startsWith("/")
            ? mn(O)
            : this.lineralizeSegments(b, O).pipe(
                (0, bt.z)((L) => {
                  const V = new at(L, {});
                  return this.expandSegment(h, V, f, L, T, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(h, f, b, T, O, L) {
          const {
            matched: V,
            consumedSegments: ue,
            remainingSegments: Ue,
            positionalParamSegments: mt,
          } = D(f, T, O);
          if (!V) return et(f);
          const Xe = this.applyRedirectCommands(ue, T.redirectTo, mt);
          return T.redirectTo.startsWith("/")
            ? mn(Xe)
            : this.lineralizeSegments(T, Xe).pipe(
                (0, bt.z)((Ot) =>
                  this.expandSegment(h, f, b, Ot.concat(Ue), L, !1)
                )
              );
        }
        matchSegmentAgainstRoute(h, f, b, T, O) {
          if ("**" === b.path)
            return b.loadChildren
              ? (b._loadedConfig
                  ? (0, le.of)(b._loadedConfig)
                  : this.configLoader.load(h.injector, b)
                ).pipe(
                  (0, He.U)((Xe) => ((b._loadedConfig = Xe), new at(T, {})))
                )
              : (0, le.of)(new at(T, {}));
          const {
            matched: L,
            consumedSegments: V,
            remainingSegments: ue,
          } = D(f, b, T);
          return L
            ? this.getChildConfig(h, b, T).pipe(
                (0, bt.z)((mt) => {
                  const Xe = mt.module,
                    Ot = mt.routes,
                    { segmentGroup: ut, slicedSegments: Yi } = M(f, V, ue, Ot),
                    mr = new at(ut.segments, ut.children);
                  if (0 === Yi.length && mr.hasChildren())
                    return this.expandChildren(Xe, Ot, mr).pipe(
                      (0, He.U)((za) => new at(V, za))
                    );
                  if (0 === Ot.length && 0 === Yi.length)
                    return (0, le.of)(new at(V, {}));
                  const Mo = Zn(b) === O;
                  return this.expandSegment(
                    Xe,
                    mr,
                    Ot,
                    Yi,
                    Mo ? X : O,
                    !0
                  ).pipe(
                    (0, He.U)(
                      (eo) => new at(V.concat(eo.segments), eo.children)
                    )
                  );
                })
              )
            : et(f);
        }
        getChildConfig(h, f, b) {
          return f.children
            ? (0, le.of)(new ur(f.children, h))
            : f.loadChildren
            ? void 0 !== f._loadedConfig
              ? (0, le.of)(f._loadedConfig)
              : this.runCanLoadGuards(h.injector, f, b).pipe(
                  (0, bt.z)((T) =>
                    T
                      ? this.configLoader
                          .load(h.injector, f)
                          .pipe((0, He.U)((O) => ((f._loadedConfig = O), O)))
                      : (function Cn(m) {
                          return he(
                            oe(
                              `Cannot load children because the guard of the route "path: '${m.path}'" returned false`
                            )
                          );
                        })(f)
                  )
                )
            : (0, le.of)(new ur([], h));
        }
        runCanLoadGuards(h, f, b) {
          const T = f.canLoad;
          if (!T || 0 === T.length) return (0, le.of)(!0);
          const O = T.map((L) => {
            const V = h.get(L);
            let ue;
            if (
              (function Gr(m) {
                return m && Ti(m.canLoad);
              })(V)
            )
              ue = V.canLoad(f, b);
            else {
              if (!Ti(V)) throw new Error("Invalid CanLoad guard");
              ue = V(f, b);
            }
            return St(ue);
          });
          return (0, le.of)(O).pipe(
            si(),
            (0, ft.b)((L) => {
              if (!yi(L)) return;
              const V = oe(
                `Redirecting to "${this.urlSerializer.serialize(L)}"`
              );
              throw ((V.url = L), V);
            }),
            (0, He.U)((L) => !0 === L)
          );
        }
        lineralizeSegments(h, f) {
          let b = [],
            T = f.root;
          for (;;) {
            if (((b = b.concat(T.segments)), 0 === T.numberOfChildren))
              return (0, le.of)(b);
            if (T.numberOfChildren > 1 || !T.children[X])
              return he(
                new Error(
                  `Only absolute redirects can have named outlets. redirectTo: '${h.redirectTo}'`
                )
              );
            T = T.children[X];
          }
        }
        applyRedirectCommands(h, f, b) {
          return this.applyRedirectCreatreUrlTree(
            f,
            this.urlSerializer.parse(f),
            h,
            b
          );
        }
        applyRedirectCreatreUrlTree(h, f, b, T) {
          const O = this.createSegmentGroup(h, f.root, b, T);
          return new en(
            O,
            this.createQueryParams(f.queryParams, this.urlTree.queryParams),
            f.fragment
          );
        }
        createQueryParams(h, f) {
          const b = {};
          return (
            Be(h, (T, O) => {
              if ("string" == typeof T && T.startsWith(":")) {
                const V = T.substring(1);
                b[O] = f[V];
              } else b[O] = T;
            }),
            b
          );
        }
        createSegmentGroup(h, f, b, T) {
          const O = this.createSegments(h, f.segments, b, T);
          let L = {};
          return (
            Be(f.children, (V, ue) => {
              L[ue] = this.createSegmentGroup(h, V, b, T);
            }),
            new at(O, L)
          );
        }
        createSegments(h, f, b, T) {
          return f.map((O) =>
            O.path.startsWith(":")
              ? this.findPosParam(h, O, T)
              : this.findOrReturn(O, b)
          );
        }
        findPosParam(h, f, b) {
          const T = b[f.path.substring(1)];
          if (!T)
            throw new Error(
              `Cannot redirect to '${h}'. Cannot find '${f.path}'.`
            );
          return T;
        }
        findOrReturn(h, f) {
          let b = 0;
          for (const T of f) {
            if (T.path === h.path) return f.splice(b), T;
            b++;
          }
          return h;
        }
      }
      function Hn(m) {
        const h = {};
        for (const b of Object.keys(m.children)) {
          const O = Hn(m.children[b]);
          (O.segments.length > 0 || O.hasChildren()) && (h[b] = O);
        }
        return (function er(m) {
          if (1 === m.numberOfChildren && m.children[X]) {
            const h = m.children[X];
            return new at(m.segments.concat(h.segments), h.children);
          }
          return m;
        })(new at(m.segments, h));
      }
      class Nr {
        constructor(h) {
          (this.path = h), (this.route = this.path[this.path.length - 1]);
        }
      }
      class tr {
        constructor(h, f) {
          (this.component = h), (this.route = f);
        }
      }
      function w(m, h, f) {
        const b = m._root;
        return Y(b, h ? h._root : null, f, [b.value]);
      }
      function v(m, h, f) {
        const b = (function A(m) {
          if (!m) return null;
          for (let h = m.parent; h; h = h.parent) {
            const f = h.routeConfig;
            if (f && f._loadedConfig) return f._loadedConfig;
          }
          return null;
        })(h);
        return (b ? b.module.injector : f).get(m);
      }
      function Y(
        m,
        h,
        f,
        b,
        T = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const O = Rn(h);
        return (
          m.children.forEach((L) => {
            (function Ze(
              m,
              h,
              f,
              b,
              T = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const O = m.value,
                L = h ? h.value : null,
                V = f ? f.getContext(m.value.outlet) : null;
              if (L && O.routeConfig === L.routeConfig) {
                const ue = (function pn(m, h, f) {
                  if ("function" == typeof f) return f(m, h);
                  switch (f) {
                    case "pathParamsChange":
                      return !gn(m.url, h.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !gn(m.url, h.url) || !it(m.queryParams, h.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !Ii(m, h) || !it(m.queryParams, h.queryParams);
                    default:
                      return !Ii(m, h);
                  }
                })(L, O, O.routeConfig.runGuardsAndResolvers);
                ue
                  ? T.canActivateChecks.push(new Nr(b))
                  : ((O.data = L.data), (O._resolvedData = L._resolvedData)),
                  Y(m, h, O.component ? (V ? V.children : null) : f, b, T),
                  ue &&
                    V &&
                    V.outlet &&
                    V.outlet.isActivated &&
                    T.canDeactivateChecks.push(new tr(V.outlet.component, L));
              } else
                L && Pn(h, V, T),
                  T.canActivateChecks.push(new Nr(b)),
                  Y(m, null, O.component ? (V ? V.children : null) : f, b, T);
            })(L, O[L.value.outlet], f, b.concat([L.value]), T),
              delete O[L.value.outlet];
          }),
          Be(O, (L, V) => Pn(L, f.getContext(V), T)),
          T
        );
      }
      function Pn(m, h, f) {
        const b = Rn(m),
          T = m.value;
        Be(b, (O, L) => {
          Pn(O, T.component ? (h ? h.children.getContext(L) : null) : h, f);
        }),
          f.canDeactivateChecks.push(
            new tr(
              T.component && h && h.outlet && h.outlet.isActivated
                ? h.outlet.component
                : null,
              T
            )
          );
      }
      class Ls {}
      function qr(m) {
        return new k.y((h) => h.error(m));
      }
      class ss {
        constructor(h, f, b, T, O, L) {
          (this.rootComponentType = h),
            (this.config = f),
            (this.urlTree = b),
            (this.url = T),
            (this.paramsInheritanceStrategy = O),
            (this.relativeLinkResolution = L);
        }
        recognize() {
          const h = M(
              this.urlTree.root,
              [],
              [],
              this.config.filter((L) => void 0 === L.redirectTo),
              this.relativeLinkResolution
            ).segmentGroup,
            f = this.processSegmentGroup(this.config, h, X);
          if (null === f) return null;
          const b = new wi(
              [],
              Object.freeze({}),
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              X,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            ),
            T = new qt(b, f),
            O = new Vn(this.url, T);
          return this.inheritParamsAndData(O._root), O;
        }
        inheritParamsAndData(h) {
          const f = h.value,
            b = di(f, this.paramsInheritanceStrategy);
          (f.params = Object.freeze(b.params)),
            (f.data = Object.freeze(b.data)),
            h.children.forEach((T) => this.inheritParamsAndData(T));
        }
        processSegmentGroup(h, f, b) {
          return 0 === f.segments.length && f.hasChildren()
            ? this.processChildren(h, f)
            : this.processSegment(h, f, f.segments, b);
        }
        processChildren(h, f) {
          const b = [];
          for (const O of Object.keys(f.children)) {
            const L = f.children[O],
              V = Qn(h, O),
              ue = this.processSegmentGroup(V, L, O);
            if (null === ue) return null;
            b.push(...ue);
          }
          const T = bo(b);
          return (
            (function as(m) {
              m.sort((h, f) =>
                h.value.outlet === X
                  ? -1
                  : f.value.outlet === X
                  ? 1
                  : h.value.outlet.localeCompare(f.value.outlet)
              );
            })(T),
            T
          );
        }
        processSegment(h, f, b, T) {
          for (const O of h) {
            const L = this.processSegmentAgainstRoute(O, f, b, T);
            if (null !== L) return L;
          }
          return ot(f, b, T) ? [] : null;
        }
        processSegmentAgainstRoute(h, f, b, T) {
          if (h.redirectTo || !qe(h, f, b, T)) return null;
          let O,
            L = [],
            V = [];
          if ("**" === h.path) {
            const ut = b.length > 0 ? on(b).parameters : {};
            O = new wi(
              b,
              ut,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              cs(h),
              Zn(h),
              h.component,
              h,
              Xn(f),
              zi(f) + b.length,
              Mr(h)
            );
          } else {
            const ut = D(f, h, b);
            if (!ut.matched) return null;
            (L = ut.consumedSegments),
              (V = ut.remainingSegments),
              (O = new wi(
                L,
                ut.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                cs(h),
                Zn(h),
                h.component,
                h,
                Xn(f),
                zi(f) + L.length,
                Mr(h)
              ));
          }
          const ue = (function ql(m) {
              return m.children
                ? m.children
                : m.loadChildren
                ? m._loadedConfig.routes
                : [];
            })(h),
            { segmentGroup: Ue, slicedSegments: mt } = M(
              f,
              L,
              V,
              ue.filter((ut) => void 0 === ut.redirectTo),
              this.relativeLinkResolution
            );
          if (0 === mt.length && Ue.hasChildren()) {
            const ut = this.processChildren(ue, Ue);
            return null === ut ? null : [new qt(O, ut)];
          }
          if (0 === ue.length && 0 === mt.length) return [new qt(O, [])];
          const Xe = Zn(h) === T,
            Ot = this.processSegment(ue, Ue, mt, Xe ? X : T);
          return null === Ot ? null : [new qt(O, Ot)];
        }
      }
      function Va(m) {
        const h = m.value.routeConfig;
        return h && "" === h.path && void 0 === h.redirectTo;
      }
      function bo(m) {
        const h = [],
          f = new Set();
        for (const b of m) {
          if (!Va(b)) {
            h.push(b);
            continue;
          }
          const T = h.find((O) => b.value.routeConfig === O.value.routeConfig);
          void 0 !== T ? (T.children.push(...b.children), f.add(T)) : h.push(b);
        }
        for (const b of f) {
          const T = bo(b.children);
          h.push(new qt(b.value, T));
        }
        return h.filter((b) => !f.has(b));
      }
      function Xn(m) {
        let h = m;
        for (; h._sourceSegment; ) h = h._sourceSegment;
        return h;
      }
      function zi(m) {
        let h = m,
          f = h._segmentIndexShift ? h._segmentIndexShift : 0;
        for (; h._sourceSegment; )
          (h = h._sourceSegment),
            (f += h._segmentIndexShift ? h._segmentIndexShift : 0);
        return f - 1;
      }
      function cs(m) {
        return m.data || {};
      }
      function Mr(m) {
        return m.resolve || {};
      }
      function Vo(m) {
        return [...Object.keys(m), ...Object.getOwnPropertySymbols(m)];
      }
      function Do(m) {
        return (0, vt.w)((h) => {
          const f = m(h);
          return f ? (0, ne.D)(f).pipe((0, He.U)(() => h)) : (0, le.of)(h);
        });
      }
      class Ua extends class ds {
        shouldDetach(h) {
          return !1;
        }
        store(h, f) {}
        shouldAttach(h) {
          return !1;
        }
        retrieve(h) {
          return null;
        }
        shouldReuseRoute(h, f) {
          return h.routeConfig === f.routeConfig;
        }
      } {}
      const Ho = new a.OlP("ROUTES");
      class Co {
        constructor(h, f, b, T) {
          (this.injector = h),
            (this.compiler = f),
            (this.onLoadStartListener = b),
            (this.onLoadEndListener = T);
        }
        load(h, f) {
          if (f._loader$) return f._loader$;
          this.onLoadStartListener && this.onLoadStartListener(f);
          const T = this.loadModuleFactory(f.loadChildren).pipe(
            (0, He.U)((O) => {
              this.onLoadEndListener && this.onLoadEndListener(f);
              const L = O.create(h);
              return new ur(
                Kt(L.injector.get(Ho, void 0, a.XFs.Self | a.XFs.Optional)).map(
                  qn
                ),
                L
              );
            }),
            $e((O) => {
              throw ((f._loader$ = void 0), O);
            })
          );
          return (
            (f._loader$ = new se(T, () => new pt.x()).pipe(be())), f._loader$
          );
        }
        loadModuleFactory(h) {
          return St(h()).pipe(
            (0, bt.z)((f) =>
              f instanceof a.YKP
                ? (0, le.of)(f)
                : (0, ne.D)(this.compiler.compileModuleAsync(f))
            )
          );
        }
      }
      class js {
        shouldProcessUrl(h) {
          return !0;
        }
        extract(h) {
          return h;
        }
        merge(h, f) {
          return h;
        }
      }
      function Us(m) {
        throw m;
      }
      function Gs(m, h, f) {
        return h.parse("/");
      }
      function Eo(m, h) {
        return (0, le.of)(null);
      }
      const Zl = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact",
        },
        Ql = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset",
        };
      let sn = (() => {
        class m {
          constructor(f, b, T, O, L, V, ue) {
            (this.rootComponentType = f),
              (this.urlSerializer = b),
              (this.rootContexts = T),
              (this.location = O),
              (this.config = ue),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.disposed = !1),
              (this.navigationId = 0),
              (this.currentPageId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new pt.x()),
              (this.errorHandler = Us),
              (this.malformedUriErrorHandler = Gs),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.hooks = {
                beforePreactivation: Eo,
                afterPreactivation: Eo,
              }),
              (this.urlHandlingStrategy = new js()),
              (this.routeReuseStrategy = new Ua()),
              (this.onSameUrlNavigation = "ignore"),
              (this.paramsInheritanceStrategy = "emptyOnly"),
              (this.urlUpdateStrategy = "deferred"),
              (this.relativeLinkResolution = "corrected"),
              (this.canceledNavigationResolution = "replace"),
              (this.ngModule = L.get(a.h0i)),
              (this.console = L.get(a.c2e));
            const Xe = L.get(a.R0b);
            (this.isNgZoneEnabled =
              Xe instanceof a.R0b && a.R0b.isInAngularZone()),
              this.resetConfig(ue),
              (this.currentUrlTree = (function yt() {
                return new en(new at([], {}), {}, null);
              })()),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.configLoader = new Co(
                L,
                V,
                (Ot) => this.triggerEvent(new ti(Ot)),
                (Ot) => this.triggerEvent(new ni(Ot))
              )),
              (this.routerState = oi(
                this.currentUrlTree,
                this.rootComponentType
              )),
              (this.transitions = new re.X({
                id: 0,
                targetPageId: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                urlAfterRedirects: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: "imperative",
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          get browserPageId() {
            var f;
            return null === (f = this.location.getState()) || void 0 === f
              ? void 0
              : f.ɵrouterPageId;
          }
          setupNavigations(f) {
            const b = this.events;
            return f.pipe(
              (0, Fe.h)((T) => 0 !== T.id),
              (0, He.U)((T) =>
                Object.assign(Object.assign({}, T), {
                  extractedUrl: this.urlHandlingStrategy.extract(T.rawUrl),
                })
              ),
              (0, vt.w)((T) => {
                let O = !1,
                  L = !1;
                return (0, le.of)(T).pipe(
                  (0, ft.b)((V) => {
                    this.currentNavigation = {
                      id: V.id,
                      initialUrl: V.currentRawUrl,
                      extractedUrl: V.extractedUrl,
                      trigger: V.source,
                      extras: V.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? Object.assign(
                            Object.assign({}, this.lastSuccessfulNavigation),
                            { previousNavigation: null }
                          )
                        : null,
                    };
                  }),
                  (0, vt.w)((V) => {
                    const ue = this.browserUrlTree.toString(),
                      Ue =
                        !this.navigated ||
                        V.extractedUrl.toString() !== ue ||
                        ue !== this.currentUrlTree.toString();
                    if (
                      ("reload" === this.onSameUrlNavigation || Ue) &&
                      this.urlHandlingStrategy.shouldProcessUrl(V.rawUrl)
                    )
                      return (
                        _n(V.source) && (this.browserUrlTree = V.extractedUrl),
                        (0, le.of)(V).pipe(
                          (0, vt.w)((Xe) => {
                            const Ot = this.transitions.getValue();
                            return (
                              b.next(
                                new $n(
                                  Xe.id,
                                  this.serializeUrl(Xe.extractedUrl),
                                  Xe.source,
                                  Xe.restoredState
                                )
                              ),
                              Ot !== this.transitions.getValue()
                                ? lt.E
                                : Promise.resolve(Xe)
                            );
                          }),
                          (function jn(m, h, f, b) {
                            return (0, vt.w)((T) =>
                              (function xn(m, h, f, b, T) {
                                return new Pi(m, h, f, b, T).apply();
                              })(m, h, f, T.extractedUrl, b).pipe(
                                (0, He.U)((O) =>
                                  Object.assign(Object.assign({}, T), {
                                    urlAfterRedirects: O,
                                  })
                                )
                              )
                            );
                          })(
                            this.ngModule.injector,
                            this.configLoader,
                            this.urlSerializer,
                            this.config
                          ),
                          (0, ft.b)((Xe) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: Xe.urlAfterRedirects }
                            );
                          }),
                          (function rr(m, h, f, b, T) {
                            return (0, bt.z)((O) =>
                              (function Wi(
                                m,
                                h,
                                f,
                                b,
                                T = "emptyOnly",
                                O = "legacy"
                              ) {
                                try {
                                  const L = new ss(
                                    m,
                                    h,
                                    f,
                                    b,
                                    T,
                                    O
                                  ).recognize();
                                  return null === L
                                    ? qr(new Ls())
                                    : (0, le.of)(L);
                                } catch (L) {
                                  return qr(L);
                                }
                              })(
                                m,
                                h,
                                O.urlAfterRedirects,
                                f(O.urlAfterRedirects),
                                b,
                                T
                              ).pipe(
                                (0, He.U)((L) =>
                                  Object.assign(Object.assign({}, O), {
                                    targetSnapshot: L,
                                  })
                                )
                              )
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            (Xe) => this.serializeUrl(Xe),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          (0, ft.b)((Xe) => {
                            if ("eager" === this.urlUpdateStrategy) {
                              if (!Xe.extras.skipLocationChange) {
                                const ut = this.urlHandlingStrategy.merge(
                                  Xe.urlAfterRedirects,
                                  Xe.rawUrl
                                );
                                this.setBrowserUrl(ut, Xe);
                              }
                              this.browserUrlTree = Xe.urlAfterRedirects;
                            }
                            const Ot = new Vi(
                              Xe.id,
                              this.serializeUrl(Xe.extractedUrl),
                              this.serializeUrl(Xe.urlAfterRedirects),
                              Xe.targetSnapshot
                            );
                            b.next(Ot);
                          })
                        )
                      );
                    if (
                      Ue &&
                      this.rawUrlTree &&
                      this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                    ) {
                      const {
                          id: Ot,
                          extractedUrl: ut,
                          source: Yi,
                          restoredState: mr,
                          extras: Mo,
                        } = V,
                        Xr = new $n(Ot, this.serializeUrl(ut), Yi, mr);
                      b.next(Xr);
                      const eo = oi(ut, this.rootComponentType).snapshot;
                      return (0, le.of)(
                        Object.assign(Object.assign({}, V), {
                          targetSnapshot: eo,
                          urlAfterRedirects: ut,
                          extras: Object.assign(Object.assign({}, Mo), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })
                      );
                    }
                    return (this.rawUrlTree = V.rawUrl), V.resolve(null), lt.E;
                  }),
                  Do((V) => {
                    const {
                      targetSnapshot: ue,
                      id: Ue,
                      extractedUrl: mt,
                      rawUrl: Xe,
                      extras: { skipLocationChange: Ot, replaceUrl: ut },
                    } = V;
                    return this.hooks.beforePreactivation(ue, {
                      navigationId: Ue,
                      appliedUrlTree: mt,
                      rawUrlTree: Xe,
                      skipLocationChange: !!Ot,
                      replaceUrl: !!ut,
                    });
                  }),
                  (0, ft.b)((V) => {
                    const ue = new Wn(
                      V.id,
                      this.serializeUrl(V.extractedUrl),
                      this.serializeUrl(V.urlAfterRedirects),
                      V.targetSnapshot
                    );
                    this.triggerEvent(ue);
                  }),
                  (0, He.U)((V) =>
                    Object.assign(Object.assign({}, V), {
                      guards: w(
                        V.targetSnapshot,
                        V.currentSnapshot,
                        this.rootContexts
                      ),
                    })
                  ),
                  (function nr(m, h) {
                    return (0, bt.z)((f) => {
                      const {
                        targetSnapshot: b,
                        currentSnapshot: T,
                        guards: {
                          canActivateChecks: O,
                          canDeactivateChecks: L,
                        },
                      } = f;
                      return 0 === L.length && 0 === O.length
                        ? (0, le.of)(
                            Object.assign(Object.assign({}, f), {
                              guardsResult: !0,
                            })
                          )
                        : (function ir(m, h, f, b) {
                            return (0, ne.D)(m).pipe(
                              (0, bt.z)((T) =>
                                (function Mn(m, h, f, b, T) {
                                  const O =
                                    h && h.routeConfig
                                      ? h.routeConfig.canDeactivate
                                      : null;
                                  if (!O || 0 === O.length)
                                    return (0, le.of)(!0);
                                  const L = O.map((V) => {
                                    const ue = v(V, h, T);
                                    let Ue;
                                    if (
                                      (function $r(m) {
                                        return m && Ti(m.canDeactivate);
                                      })(ue)
                                    )
                                      Ue = St(ue.canDeactivate(m, h, f, b));
                                    else {
                                      if (!Ti(ue))
                                        throw new Error(
                                          "Invalid CanDeactivate guard"
                                        );
                                      Ue = St(ue(m, h, f, b));
                                    }
                                    return Ue.pipe(Q());
                                  });
                                  return (0, le.of)(L).pipe(si());
                                })(T.component, T.route, f, h, b)
                              ),
                              Q((T) => !0 !== T, !0)
                            );
                          })(L, b, T, m).pipe(
                            (0, bt.z)((V) =>
                              V &&
                              (function wr(m) {
                                return "boolean" == typeof m;
                              })(V)
                                ? (function vo(m, h, f, b) {
                                    return (0, ne.D)(h).pipe(
                                      (0, st.b)((T) =>
                                        (0, Ge.z)(
                                          (function we(m, h) {
                                            return (
                                              null !== m && h && h(new Ai(m)),
                                              (0, le.of)(!0)
                                            );
                                          })(T.route.parent, b),
                                          (function yo(m, h) {
                                            return (
                                              null !== m && h && h(new Jt(m)),
                                              (0, le.of)(!0)
                                            );
                                          })(T.route, b),
                                          (function ks(m, h, f) {
                                            const b = h[h.length - 1],
                                              O = h
                                                .slice(0, h.length - 1)
                                                .reverse()
                                                .map((L) =>
                                                  (function y(m) {
                                                    const h = m.routeConfig
                                                      ? m.routeConfig
                                                          .canActivateChild
                                                      : null;
                                                    return h && 0 !== h.length
                                                      ? { node: m, guards: h }
                                                      : null;
                                                  })(L)
                                                )
                                                .filter((L) => null !== L)
                                                .map((L) =>
                                                  (0, Ae.P)(() => {
                                                    const V = L.guards.map(
                                                      (ue) => {
                                                        const Ue = v(
                                                          ue,
                                                          L.node,
                                                          f
                                                        );
                                                        let mt;
                                                        if (
                                                          (function Bo(m) {
                                                            return (
                                                              m &&
                                                              Ti(
                                                                m.canActivateChild
                                                              )
                                                            );
                                                          })(Ue)
                                                        )
                                                          mt = St(
                                                            Ue.canActivateChild(
                                                              b,
                                                              m
                                                            )
                                                          );
                                                        else {
                                                          if (!Ti(Ue))
                                                            throw new Error(
                                                              "Invalid CanActivateChild guard"
                                                            );
                                                          mt = St(Ue(b, m));
                                                        }
                                                        return mt.pipe(Q());
                                                      }
                                                    );
                                                    return (0, le.of)(V).pipe(
                                                      si()
                                                    );
                                                  })
                                                );
                                            return (0, le.of)(O).pipe(si());
                                          })(m, T.path, f),
                                          (function xt(m, h, f) {
                                            const b = h.routeConfig
                                              ? h.routeConfig.canActivate
                                              : null;
                                            if (!b || 0 === b.length)
                                              return (0, le.of)(!0);
                                            const T = b.map((O) =>
                                              (0, Ae.P)(() => {
                                                const L = v(O, h, f);
                                                let V;
                                                if (
                                                  (function Tr(m) {
                                                    return (
                                                      m && Ti(m.canActivate)
                                                    );
                                                  })(L)
                                                )
                                                  V = St(L.canActivate(h, m));
                                                else {
                                                  if (!Ti(L))
                                                    throw new Error(
                                                      "Invalid CanActivate guard"
                                                    );
                                                  V = St(L(h, m));
                                                }
                                                return V.pipe(Q());
                                              })
                                            );
                                            return (0, le.of)(T).pipe(si());
                                          })(m, T.route, f)
                                        )
                                      ),
                                      Q((T) => !0 !== T, !0)
                                    );
                                  })(b, O, m, h)
                                : (0, le.of)(V)
                            ),
                            (0, He.U)((V) =>
                              Object.assign(Object.assign({}, f), {
                                guardsResult: V,
                              })
                            )
                          );
                    });
                  })(this.ngModule.injector, (V) => this.triggerEvent(V)),
                  (0, ft.b)((V) => {
                    if (yi(V.guardsResult)) {
                      const Ue = oe(
                        `Redirecting to "${this.serializeUrl(V.guardsResult)}"`
                      );
                      throw ((Ue.url = V.guardsResult), Ue);
                    }
                    const ue = new Hi(
                      V.id,
                      this.serializeUrl(V.extractedUrl),
                      this.serializeUrl(V.urlAfterRedirects),
                      V.targetSnapshot,
                      !!V.guardsResult
                    );
                    this.triggerEvent(ue);
                  }),
                  (0, Fe.h)(
                    (V) =>
                      !!V.guardsResult ||
                      (this.restoreHistory(V),
                      this.cancelNavigationTransition(V, ""),
                      !1)
                  ),
                  Do((V) => {
                    if (V.guards.canActivateChecks.length)
                      return (0, le.of)(V).pipe(
                        (0, ft.b)((ue) => {
                          const Ue = new Xt(
                            ue.id,
                            this.serializeUrl(ue.extractedUrl),
                            this.serializeUrl(ue.urlAfterRedirects),
                            ue.targetSnapshot
                          );
                          this.triggerEvent(Ue);
                        }),
                        (0, vt.w)((ue) => {
                          let Ue = !1;
                          return (0, le.of)(ue).pipe(
                            (function Ha(m, h) {
                              return (0, bt.z)((f) => {
                                const {
                                  targetSnapshot: b,
                                  guards: { canActivateChecks: T },
                                } = f;
                                if (!T.length) return (0, le.of)(f);
                                let O = 0;
                                return (0, ne.D)(T).pipe(
                                  (0, st.b)((L) =>
                                    (function Bs(m, h, f, b) {
                                      return (function ja(m, h, f, b) {
                                        const T = Vo(m);
                                        if (0 === T.length)
                                          return (0, le.of)({});
                                        const O = {};
                                        return (0, ne.D)(T).pipe(
                                          (0, bt.z)((L) =>
                                            (function us(m, h, f, b) {
                                              const T = v(m, h, b);
                                              return St(
                                                T.resolve
                                                  ? T.resolve(h, f)
                                                  : T(h, f)
                                              );
                                            })(m[L], h, f, b).pipe(
                                              (0, ft.b)((V) => {
                                                O[L] = V;
                                              })
                                            )
                                          ),
                                          je(1),
                                          (0, bt.z)(() =>
                                            Vo(O).length === T.length
                                              ? (0, le.of)(O)
                                              : lt.E
                                          )
                                        );
                                      })(m._resolve, m, h, b).pipe(
                                        (0, He.U)(
                                          (O) => (
                                            (m._resolvedData = O),
                                            (m.data = Object.assign(
                                              Object.assign({}, m.data),
                                              di(m, f).resolve
                                            )),
                                            null
                                          )
                                        )
                                      );
                                    })(L.route, b, m, h)
                                  ),
                                  (0, ft.b)(() => O++),
                                  je(1),
                                  (0, bt.z)((L) =>
                                    O === T.length ? (0, le.of)(f) : lt.E
                                  )
                                );
                              });
                            })(
                              this.paramsInheritanceStrategy,
                              this.ngModule.injector
                            ),
                            (0, ft.b)({
                              next: () => (Ue = !0),
                              complete: () => {
                                Ue ||
                                  (this.restoreHistory(ue),
                                  this.cancelNavigationTransition(
                                    ue,
                                    "At least one route resolver didn't emit any value."
                                  ));
                              },
                            })
                          );
                        }),
                        (0, ft.b)((ue) => {
                          const Ue = new zn(
                            ue.id,
                            this.serializeUrl(ue.extractedUrl),
                            this.serializeUrl(ue.urlAfterRedirects),
                            ue.targetSnapshot
                          );
                          this.triggerEvent(Ue);
                        })
                      );
                  }),
                  Do((V) => {
                    const {
                      targetSnapshot: ue,
                      id: Ue,
                      extractedUrl: mt,
                      rawUrl: Xe,
                      extras: { skipLocationChange: Ot, replaceUrl: ut },
                    } = V;
                    return this.hooks.afterPreactivation(ue, {
                      navigationId: Ue,
                      appliedUrlTree: mt,
                      rawUrlTree: Xe,
                      skipLocationChange: !!Ot,
                      replaceUrl: !!ut,
                    });
                  }),
                  (0, He.U)((V) => {
                    const ue = (function ji(m, h, f) {
                      const b = In(m, h._root, f ? f._root : void 0);
                      return new fn(b, h);
                    })(
                      this.routeReuseStrategy,
                      V.targetSnapshot,
                      V.currentRouterState
                    );
                    return Object.assign(Object.assign({}, V), {
                      targetRouterState: ue,
                    });
                  }),
                  (0, ft.b)((V) => {
                    (this.currentUrlTree = V.urlAfterRedirects),
                      (this.rawUrlTree = this.urlHandlingStrategy.merge(
                        V.urlAfterRedirects,
                        V.rawUrl
                      )),
                      (this.routerState = V.targetRouterState),
                      "deferred" === this.urlUpdateStrategy &&
                        (V.extras.skipLocationChange ||
                          this.setBrowserUrl(this.rawUrlTree, V),
                        (this.browserUrlTree = V.urlAfterRedirects));
                  }),
                  ((m, h, f) =>
                    (0, He.U)(
                      (b) => (
                        new Er(
                          h,
                          b.targetRouterState,
                          b.currentRouterState,
                          f
                        ).activate(m),
                        b
                      )
                    ))(this.rootContexts, this.routeReuseStrategy, (V) =>
                    this.triggerEvent(V)
                  ),
                  (0, ft.b)({
                    next() {
                      O = !0;
                    },
                    complete() {
                      O = !0;
                    },
                  }),
                  (function Oe(m) {
                    return (0, ke.e)((h, f) => {
                      try {
                        h.subscribe(f);
                      } finally {
                        f.add(m);
                      }
                    });
                  })(() => {
                    var V;
                    O ||
                      L ||
                      this.cancelNavigationTransition(
                        T,
                        `Navigation ID ${T.id} is not equal to the current navigation id ${this.navigationId}`
                      ),
                      (null === (V = this.currentNavigation) || void 0 === V
                        ? void 0
                        : V.id) === T.id && (this.currentNavigation = null);
                  }),
                  $e((V) => {
                    if (
                      ((L = !0),
                      (function Se(m) {
                        return m && m[Z];
                      })(V))
                    ) {
                      const ue = yi(V.url);
                      ue || ((this.navigated = !0), this.restoreHistory(T, !0));
                      const Ue = new ln(
                        T.id,
                        this.serializeUrl(T.extractedUrl),
                        V.message
                      );
                      b.next(Ue),
                        ue
                          ? setTimeout(() => {
                              const mt = this.urlHandlingStrategy.merge(
                                  V.url,
                                  this.rawUrlTree
                                ),
                                Xe = {
                                  skipLocationChange:
                                    T.extras.skipLocationChange,
                                  replaceUrl:
                                    "eager" === this.urlUpdateStrategy ||
                                    _n(T.source),
                                };
                              this.scheduleNavigation(
                                mt,
                                "imperative",
                                null,
                                Xe,
                                {
                                  resolve: T.resolve,
                                  reject: T.reject,
                                  promise: T.promise,
                                }
                              );
                            }, 0)
                          : T.resolve(!1);
                    } else {
                      this.restoreHistory(T, !0);
                      const ue = new Mt(
                        T.id,
                        this.serializeUrl(T.extractedUrl),
                        V
                      );
                      b.next(ue);
                      try {
                        T.resolve(this.errorHandler(V));
                      } catch (Ue) {
                        T.reject(Ue);
                      }
                    }
                    return lt.E;
                  })
                );
              })
            );
          }
          resetRootComponentType(f) {
            (this.rootComponentType = f),
              (this.routerState.root.component = this.rootComponentType);
          }
          setTransition(f) {
            this.transitions.next(
              Object.assign(Object.assign({}, this.transitions.value), f)
            );
          }
          initialNavigation() {
            this.setUpLocationChangeListener(),
              0 === this.navigationId &&
                this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
          }
          setUpLocationChangeListener() {
            this.locationSubscription ||
              (this.locationSubscription = this.location.subscribe((f) => {
                const b = "popstate" === f.type ? "popstate" : "hashchange";
                "popstate" === b &&
                  setTimeout(() => {
                    var T;
                    const O = { replaceUrl: !0 },
                      L = (
                        null === (T = f.state) || void 0 === T
                          ? void 0
                          : T.navigationId
                      )
                        ? f.state
                        : null;
                    if (L) {
                      const ue = Object.assign({}, L);
                      delete ue.navigationId,
                        delete ue.ɵrouterPageId,
                        0 !== Object.keys(ue).length && (O.state = ue);
                    }
                    const V = this.parseUrl(f.url);
                    this.scheduleNavigation(V, b, L, O);
                  }, 0);
              }));
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.currentNavigation;
          }
          triggerEvent(f) {
            this.events.next(f);
          }
          resetConfig(f) {
            Sr(f),
              (this.config = f.map(qn)),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.transitions.complete(),
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0)),
              (this.disposed = !0);
          }
          createUrlTree(f, b = {}) {
            const {
                relativeTo: T,
                queryParams: O,
                fragment: L,
                queryParamsHandling: V,
                preserveFragment: ue,
              } = b,
              Ue = T || this.routerState.root,
              mt = ue ? this.currentUrlTree.fragment : L;
            let Xe = null;
            switch (V) {
              case "merge":
                Xe = Object.assign(
                  Object.assign({}, this.currentUrlTree.queryParams),
                  O
                );
                break;
              case "preserve":
                Xe = this.currentUrlTree.queryParams;
                break;
              default:
                Xe = O || null;
            }
            return (
              null !== Xe && (Xe = this.removeEmptyProps(Xe)),
              (function Fo(m, h, f, b, T) {
                if (0 === f.length) return Ui(h.root, h.root, h.root, b, T);
                const O = (function Kn(m) {
                  if ("string" == typeof m[0] && 1 === m.length && "/" === m[0])
                    return new Gi(!0, 0, m);
                  let h = 0,
                    f = !1;
                  const b = m.reduce((T, O, L) => {
                    if ("object" == typeof O && null != O) {
                      if (O.outlets) {
                        const V = {};
                        return (
                          Be(O.outlets, (ue, Ue) => {
                            V[Ue] = "string" == typeof ue ? ue.split("/") : ue;
                          }),
                          [...T, { outlets: V }]
                        );
                      }
                      if (O.segmentPath) return [...T, O.segmentPath];
                    }
                    return "string" != typeof O
                      ? [...T, O]
                      : 0 === L
                      ? (O.split("/").forEach((V, ue) => {
                          (0 == ue && "." === V) ||
                            (0 == ue && "" === V
                              ? (f = !0)
                              : ".." === V
                              ? h++
                              : "" != V && T.push(V));
                        }),
                        T)
                      : [...T, O];
                  }, []);
                  return new Gi(f, h, b);
                })(f);
                if (O.toRoot()) return Ui(h.root, h.root, new at([], {}), b, T);
                const L = (function ho(m, h, f) {
                    if (m.isAbsolute) return new Hr(h.root, !0, 0);
                    if (-1 === f.snapshot._lastPathIndex) {
                      const O = f.snapshot._urlSegment;
                      return new Hr(O, O === h.root, 0);
                    }
                    const b = Zt(m.commands[0]) ? 0 : 1;
                    return (function jr(m, h, f) {
                      let b = m,
                        T = h,
                        O = f;
                      for (; O > T; ) {
                        if (((O -= T), (b = b.parent), !b))
                          throw new Error("Invalid number of '../'");
                        T = b.segments.length;
                      }
                      return new Hr(b, !1, T - O);
                    })(
                      f.snapshot._urlSegment,
                      f.snapshot._lastPathIndex + b,
                      m.numberOfDoubleDots
                    );
                  })(O, h, m),
                  V = L.processChildren
                    ? $i(L.segmentGroup, L.index, O.commands)
                    : ko(L.segmentGroup, L.index, O.commands);
                return Ui(h.root, L.segmentGroup, V, b, T);
              })(Ue, this.currentUrlTree, f, Xe, null != mt ? mt : null)
            );
          }
          navigateByUrl(f, b = { skipLocationChange: !1 }) {
            const T = yi(f) ? f : this.parseUrl(f),
              O = this.urlHandlingStrategy.merge(T, this.rawUrlTree);
            return this.scheduleNavigation(O, "imperative", null, b);
          }
          navigate(f, b = { skipLocationChange: !1 }) {
            return (
              (function hr(m) {
                for (let h = 0; h < m.length; h++) {
                  const f = m[h];
                  if (null == f)
                    throw new Error(
                      `The requested path contains ${f} segment at index ${h}`
                    );
                }
              })(f),
              this.navigateByUrl(this.createUrlTree(f, b), b)
            );
          }
          serializeUrl(f) {
            return this.urlSerializer.serialize(f);
          }
          parseUrl(f) {
            let b;
            try {
              b = this.urlSerializer.parse(f);
            } catch (T) {
              b = this.malformedUriErrorHandler(T, this.urlSerializer, f);
            }
            return b;
          }
          isActive(f, b) {
            let T;
            if (
              ((T =
                !0 === b
                  ? Object.assign({}, Zl)
                  : !1 === b
                  ? Object.assign({}, Ql)
                  : b),
              yi(f))
            )
              return kt(this.currentUrlTree, f, T);
            const O = this.parseUrl(f);
            return kt(this.currentUrlTree, O, T);
          }
          removeEmptyProps(f) {
            return Object.keys(f).reduce((b, T) => {
              const O = f[T];
              return null != O && (b[T] = O), b;
            }, {});
          }
          processNavigations() {
            this.navigations.subscribe(
              (f) => {
                (this.navigated = !0),
                  (this.lastSuccessfulId = f.id),
                  (this.currentPageId = f.targetPageId),
                  this.events.next(
                    new Rt(
                      f.id,
                      this.serializeUrl(f.extractedUrl),
                      this.serializeUrl(this.currentUrlTree)
                    )
                  ),
                  (this.lastSuccessfulNavigation = this.currentNavigation),
                  f.resolve(!0);
              },
              (f) => {
                this.console.warn(`Unhandled Navigation Error: ${f}`);
              }
            );
          }
          scheduleNavigation(f, b, T, O, L) {
            var V, ue;
            if (this.disposed) return Promise.resolve(!1);
            let Ue, mt, Xe;
            L
              ? ((Ue = L.resolve), (mt = L.reject), (Xe = L.promise))
              : (Xe = new Promise((Yi, mr) => {
                  (Ue = Yi), (mt = mr);
                }));
            const Ot = ++this.navigationId;
            let ut;
            return (
              "computed" === this.canceledNavigationResolution
                ? (0 === this.currentPageId && (T = this.location.getState()),
                  (ut =
                    T && T.ɵrouterPageId
                      ? T.ɵrouterPageId
                      : O.replaceUrl || O.skipLocationChange
                      ? null !== (V = this.browserPageId) && void 0 !== V
                        ? V
                        : 0
                      : (null !== (ue = this.browserPageId) && void 0 !== ue
                          ? ue
                          : 0) + 1))
                : (ut = 0),
              this.setTransition({
                id: Ot,
                targetPageId: ut,
                source: b,
                restoredState: T,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: f,
                extras: O,
                resolve: Ue,
                reject: mt,
                promise: Xe,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              Xe.catch((Yi) => Promise.reject(Yi))
            );
          }
          setBrowserUrl(f, b) {
            const T = this.urlSerializer.serialize(f),
              O = Object.assign(
                Object.assign({}, b.extras.state),
                this.generateNgRouterState(b.id, b.targetPageId)
              );
            this.location.isCurrentPathEqualTo(T) || b.extras.replaceUrl
              ? this.location.replaceState(T, "", O)
              : this.location.go(T, "", O);
          }
          restoreHistory(f, b = !1) {
            var T, O;
            if ("computed" === this.canceledNavigationResolution) {
              const L = this.currentPageId - f.targetPageId;
              ("popstate" !== f.source &&
                "eager" !== this.urlUpdateStrategy &&
                this.currentUrlTree !==
                  (null === (T = this.currentNavigation) || void 0 === T
                    ? void 0
                    : T.finalUrl)) ||
              0 === L
                ? this.currentUrlTree ===
                    (null === (O = this.currentNavigation) || void 0 === O
                      ? void 0
                      : O.finalUrl) &&
                  0 === L &&
                  (this.resetState(f),
                  (this.browserUrlTree = f.currentUrlTree),
                  this.resetUrlToCurrentUrlTree())
                : this.location.historyGo(L);
            } else
              "replace" === this.canceledNavigationResolution &&
                (b && this.resetState(f), this.resetUrlToCurrentUrlTree());
          }
          resetState(f) {
            (this.routerState = f.currentRouterState),
              (this.currentUrlTree = f.currentUrlTree),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                this.currentUrlTree,
                f.rawUrl
              ));
          }
          resetUrlToCurrentUrlTree() {
            this.location.replaceState(
              this.urlSerializer.serialize(this.rawUrlTree),
              "",
              this.generateNgRouterState(
                this.lastSuccessfulId,
                this.currentPageId
              )
            );
          }
          cancelNavigationTransition(f, b) {
            const T = new ln(f.id, this.serializeUrl(f.extractedUrl), b);
            this.triggerEvent(T), f.resolve(!1);
          }
          generateNgRouterState(f, b) {
            return "computed" === this.canceledNavigationResolution
              ? { navigationId: f, ɵrouterPageId: b }
              : { navigationId: f };
          }
        }
        return (
          (m.ɵfac = function (f) {
            a.$Z();
          }),
          (m.ɵprov = a.Yz7({ token: m, factory: m.ɵfac })),
          m
        );
      })();
      function _n(m) {
        return "imperative" !== m;
      }
      class zs {}
      class Uo {
        preload(h, f) {
          return (0, le.of)(null);
        }
      }
      let Go = (() => {
          class m {
            constructor(f, b, T, O) {
              (this.router = f),
                (this.injector = T),
                (this.preloadingStrategy = O),
                (this.loader = new Co(
                  T,
                  b,
                  (ue) => f.triggerEvent(new ti(ue)),
                  (ue) => f.triggerEvent(new ni(ue))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  (0, Fe.h)((f) => f instanceof Rt),
                  (0, st.b)(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const f = this.injector.get(a.h0i);
              return this.processRoutes(f, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(f, b) {
              const T = [];
              for (const O of b)
                if (O.loadChildren && !O.canLoad && O._loadedConfig) {
                  const L = O._loadedConfig;
                  T.push(this.processRoutes(L.module, L.routes));
                } else
                  O.loadChildren && !O.canLoad
                    ? T.push(this.preloadConfig(f, O))
                    : O.children && T.push(this.processRoutes(f, O.children));
              return (0, ne.D)(T).pipe(
                (0, nn.J)(),
                (0, He.U)((O) => {})
              );
            }
            preloadConfig(f, b) {
              return this.preloadingStrategy.preload(b, () =>
                (b._loadedConfig
                  ? (0, le.of)(b._loadedConfig)
                  : this.loader.load(f.injector, b)
                ).pipe(
                  (0, bt.z)(
                    (O) => (
                      (b._loadedConfig = O),
                      this.processRoutes(O.module, O.routes)
                    )
                  )
                )
              );
            }
          }
          return (
            (m.ɵfac = function (f) {
              return new (f || m)(
                a.LFG(sn),
                a.LFG(a.Sil),
                a.LFG(a.zs3),
                a.LFG(zs)
              );
            }),
            (m.ɵprov = a.Yz7({ token: m, factory: m.ɵfac })),
            m
          );
        })(),
        To = (() => {
          class m {
            constructor(f, b, T = {}) {
              (this.router = f),
                (this.viewportScroller = b),
                (this.options = T),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (T.scrollPositionRestoration =
                  T.scrollPositionRestoration || "disabled"),
                (T.anchorScrolling = T.anchorScrolling || "disabled");
            }
            init() {
              "disabled" !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration("manual"),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((f) => {
                f instanceof $n
                  ? ((this.store[this.lastId] =
                      this.viewportScroller.getScrollPosition()),
                    (this.lastSource = f.navigationTrigger),
                    (this.restoredId = f.restoredState
                      ? f.restoredState.navigationId
                      : 0))
                  : f instanceof Rt &&
                    ((this.lastId = f.id),
                    this.scheduleScrollEvent(
                      f,
                      this.router.parseUrl(f.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((f) => {
                f instanceof Ri &&
                  (f.position
                    ? "top" === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : "enabled" === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(f.position)
                    : f.anchor && "enabled" === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(f.anchor)
                    : "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(f, b) {
              this.router.triggerEvent(
                new Ri(
                  f,
                  "popstate" === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  b
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (m.ɵfac = function (f) {
              a.$Z();
            }),
            (m.ɵprov = a.Yz7({ token: m, factory: m.ɵfac })),
            m
          );
        })();
      const Zr = new a.OlP("ROUTER_CONFIGURATION"),
        pr = new a.OlP("ROUTER_FORROOT_GUARD"),
        So = [
          jt.Ye,
          { provide: Ci, useClass: vi },
          {
            provide: sn,
            useFactory: function nc(m, h, f, b, T, O, L = {}, V, ue) {
              const Ue = new sn(null, m, h, f, b, T, Kt(O));
              return (
                V && (Ue.urlHandlingStrategy = V),
                ue && (Ue.routeReuseStrategy = ue),
                (function ic(m, h) {
                  m.errorHandler && (h.errorHandler = m.errorHandler),
                    m.malformedUriErrorHandler &&
                      (h.malformedUriErrorHandler = m.malformedUriErrorHandler),
                    m.onSameUrlNavigation &&
                      (h.onSameUrlNavigation = m.onSameUrlNavigation),
                    m.paramsInheritanceStrategy &&
                      (h.paramsInheritanceStrategy =
                        m.paramsInheritanceStrategy),
                    m.relativeLinkResolution &&
                      (h.relativeLinkResolution = m.relativeLinkResolution),
                    m.urlUpdateStrategy &&
                      (h.urlUpdateStrategy = m.urlUpdateStrategy),
                    m.canceledNavigationResolution &&
                      (h.canceledNavigationResolution =
                        m.canceledNavigationResolution);
                })(L, Ue),
                L.enableTracing &&
                  Ue.events.subscribe((mt) => {
                    var Xe, Ot;
                    null === (Xe = console.group) ||
                      void 0 === Xe ||
                      Xe.call(console, `Router Event: ${mt.constructor.name}`),
                      console.log(mt.toString()),
                      console.log(mt),
                      null === (Ot = console.groupEnd) ||
                        void 0 === Ot ||
                        Ot.call(console);
                  }),
                Ue
              );
            },
            deps: [
              Ci,
              xi,
              jt.Ye,
              a.zs3,
              a.Sil,
              Ho,
              Zr,
              [class Hs {}, new a.FiY()],
              [class Vs {}, new a.FiY()],
            ],
          },
          xi,
          {
            provide: Bn,
            useFactory: function Or(m) {
              return m.routerState.root;
            },
            deps: [sn],
          },
          Go,
          Uo,
          class jo {
            preload(h, f) {
              return f().pipe($e(() => (0, le.of)(null)));
            }
          },
          { provide: Zr, useValue: { enableTracing: !1 } },
        ];
      function tc() {
        return new a.PXZ("Router", sn);
      }
      let $a = (() => {
        class m {
          constructor(f, b) {}
          static forRoot(f, b) {
            return {
              ngModule: m,
              providers: [
                So,
                Ys(f),
                {
                  provide: pr,
                  useFactory: Wa,
                  deps: [[sn, new a.FiY(), new a.tp0()]],
                },
                { provide: Zr, useValue: b || {} },
                {
                  provide: jt.S$,
                  useFactory: fs,
                  deps: [jt.lw, [new a.tBr(jt.mr), new a.FiY()], Zr],
                },
                { provide: To, useFactory: No, deps: [sn, jt.EM, Zr] },
                {
                  provide: zs,
                  useExisting:
                    b && b.preloadingStrategy ? b.preloadingStrategy : Uo,
                },
                { provide: a.PXZ, multi: !0, useFactory: tc },
                [
                  gr,
                  { provide: a.ip1, multi: !0, useFactory: hs, deps: [gr] },
                  { provide: Fi, useFactory: Qr, deps: [gr] },
                  { provide: a.tb, multi: !0, useExisting: Fi },
                ],
              ],
            };
          }
          static forChild(f) {
            return { ngModule: m, providers: [Ys(f)] };
          }
        }
        return (
          (m.ɵfac = function (f) {
            return new (f || m)(a.LFG(pr, 8), a.LFG(sn, 8));
          }),
          (m.ɵmod = a.oAB({ type: m })),
          (m.ɵinj = a.cJS({})),
          m
        );
      })();
      function No(m, h, f) {
        return f.scrollOffset && h.setOffset(f.scrollOffset), new To(m, h, f);
      }
      function fs(m, h, f = {}) {
        return f.useHash ? new jt.Do(m, h) : new jt.b0(m, h);
      }
      function Wa(m) {
        return "guarded";
      }
      function Ys(m) {
        return [
          { provide: a.deG, multi: !0, useValue: m },
          { provide: Ho, multi: !0, useValue: m },
        ];
      }
      let gr = (() => {
        class m {
          constructor(f) {
            (this.injector = f),
              (this.initNavigation = !1),
              (this.destroyed = !1),
              (this.resultOfPreactivationDone = new pt.x());
          }
          appInitializer() {
            return this.injector.get(jt.V_, Promise.resolve(null)).then(() => {
              if (this.destroyed) return Promise.resolve(!0);
              let b = null;
              const T = new Promise((V) => (b = V)),
                O = this.injector.get(sn),
                L = this.injector.get(Zr);
              return (
                "disabled" === L.initialNavigation
                  ? (O.setUpLocationChangeListener(), b(!0))
                  : "enabled" === L.initialNavigation ||
                    "enabledBlocking" === L.initialNavigation
                  ? ((O.hooks.afterPreactivation = () =>
                      this.initNavigation
                        ? (0, le.of)(null)
                        : ((this.initNavigation = !0),
                          b(!0),
                          this.resultOfPreactivationDone)),
                    O.initialNavigation())
                  : b(!0),
                T
              );
            });
          }
          bootstrapListener(f) {
            const b = this.injector.get(Zr),
              T = this.injector.get(Go),
              O = this.injector.get(To),
              L = this.injector.get(sn),
              V = this.injector.get(a.z2F);
            f === V.components[0] &&
              (("enabledNonBlocking" === b.initialNavigation ||
                void 0 === b.initialNavigation) &&
                L.initialNavigation(),
              T.setUpPreloading(),
              O.init(),
              L.resetRootComponentType(V.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          ngOnDestroy() {
            this.destroyed = !0;
          }
        }
        return (
          (m.ɵfac = function (f) {
            return new (f || m)(a.LFG(a.zs3));
          }),
          (m.ɵprov = a.Yz7({ token: m, factory: m.ɵfac })),
          m
        );
      })();
      function hs(m) {
        return m.appInitializer.bind(m);
      }
      function Qr(m) {
        return m.bootstrapListener.bind(m);
      }
      const Fi = new a.OlP("Router Initializer");
    },
    6007: (tt, De, I) => {
      I.d(De, {
        lQ: () => Zs,
        IJ: () => Xc,
        HK: () => Cl,
        dR: () => wl,
        ZS: () => la,
      });
      var a = I(1223),
        k = I(9808),
        _e = I(8421),
        he = I(8306),
        ae = I(5577),
        Re = I(1144),
        Ce = I(576),
        ke = I(3268);
      const Te = ["addListener", "removeListener"],
        be = ["addEventListener", "removeEventListener"],
        se = ["on", "off"];
      function ne(s, c, r, u) {
        if (((0, Ce.m)(r) && ((u = r), (r = void 0)), u))
          return ne(s, c, r).pipe((0, ke.Z)(u));
        const [g, C] = (function Ge(s) {
          return (
            (0, Ce.m)(s.addEventListener) && (0, Ce.m)(s.removeEventListener)
          );
        })(s)
          ? be.map((x) => (W) => s[x](c, W, r))
          : (function re(s) {
              return (0, Ce.m)(s.addListener) && (0, Ce.m)(s.removeListener);
            })(s)
          ? Te.map(le(s, c))
          : (function Ne(s) {
              return (0, Ce.m)(s.on) && (0, Ce.m)(s.off);
            })(s)
          ? se.map(le(s, c))
          : [];
        if (!g && (0, Re.z)(s))
          return (0, ae.z)((x) => ne(x, c, r))((0, _e.Xf)(s));
        if (!g) throw new TypeError("Invalid event target");
        return new he.y((x) => {
          const W = (...$) => x.next(1 < $.length ? $ : $[0]);
          return g(W), () => C(W);
        });
      }
      function le(s, c) {
        return (r) => (u) => s[r](c, u);
      }
      var Ae = I(1566),
        lt = I(3532);
      function gt(s = 0, c, r = Ae.P) {
        let u = -1;
        return (
          null != c && ((0, lt.K)(c) ? (r = c) : (u = c)),
          new he.y((g) => {
            let C = (function pt(s) {
              return s instanceof Date && !isNaN(s);
            })(s)
              ? +s - r.now()
              : s;
            C < 0 && (C = 0);
            let x = 0;
            return r.schedule(function () {
              g.closed ||
                (g.next(x++), 0 <= u ? this.schedule(void 0, u) : g.complete());
            }, C);
          })
        );
      }
      const { isArray: me } = Array;
      function Me(s) {
        return 1 === s.length && me(s[0]) ? s[0] : s;
      }
      var $e = I(5403);
      function Fe(...s) {
        return 1 === (s = Me(s)).length
          ? (0, _e.Xf)(s[0])
          : new he.y(
              (function je(s) {
                return (c) => {
                  let r = [];
                  for (let u = 0; r && !c.closed && u < s.length; u++)
                    r.push(
                      (0, _e.Xf)(s[u]).subscribe(
                        (0, $e.x)(c, (g) => {
                          if (r) {
                            for (let C = 0; C < r.length; C++)
                              C !== u && r[C].unsubscribe();
                            r = null;
                          }
                          c.next(g);
                        })
                      )
                    );
                };
              })(s)
            );
      }
      var fe = I(5032);
      new he.y(fe.Z);
      var te = I(515),
        ie = I(3269);
      function de(...s) {
        const c = (0, ie.jO)(s),
          r = Me(s);
        return r.length
          ? new he.y((u) => {
              let g = r.map(() => []),
                C = r.map(() => !1);
              u.add(() => {
                g = C = null;
              });
              for (let x = 0; !u.closed && x < r.length; x++)
                (0, _e.Xf)(r[x]).subscribe(
                  (0, $e.x)(
                    u,
                    (W) => {
                      if ((g[x].push(W), g.every(($) => $.length))) {
                        const $ = g.map((ee) => ee.shift());
                        u.next(c ? c(...$) : $),
                          g.some((ee, pe) => !ee.length && C[pe]) &&
                            u.complete();
                      }
                    },
                    () => {
                      (C[x] = !0), !g[x].length && u.complete();
                    }
                  )
                );
              return () => {
                g = C = null;
              };
            })
          : te.E;
      }
      var Q = I(9646),
        Oe = I(7579),
        He = I(1135),
        Ht = (I(9841), I(7272)),
        bt = I(4482);
      function ft(s) {
        return (0, bt.e)((c, r) => {
          (0, _e.Xf)(s).subscribe((0, $e.x)(r, () => r.complete(), fe.Z)),
            !r.closed && c.subscribe(r);
        });
      }
      var nn = I(4671);
      function jt(...s) {
        const c = (0, ie.jO)(s);
        return (0, bt.e)((r, u) => {
          const g = s.length,
            C = new Array(g);
          let x = s.map(() => !1),
            W = !1;
          for (let $ = 0; $ < g; $++)
            (0, _e.Xf)(s[$]).subscribe(
              (0, $e.x)(
                u,
                (ee) => {
                  (C[$] = ee),
                    !W &&
                      !x[$] &&
                      ((x[$] = !0), (W = x.every(nn.y)) && (x = null));
                },
                fe.Z
              )
            );
          r.subscribe(
            (0, $e.x)(u, ($) => {
              if (W) {
                const ee = [$, ...C];
                u.next(c ? c(...ee) : ee);
              }
            })
          );
        });
      }
      var wt = I(5698),
        Rt = I(4004);
      function Mt(s, c) {
        return c
          ? (r) =>
              (0, Ht.z)(
                c.pipe(
                  (0, wt.q)(1),
                  (function $n() {
                    return (0, bt.e)((s, c) => {
                      s.subscribe((0, $e.x)(c, fe.Z));
                    });
                  })()
                ),
                r.pipe(Mt(s))
              )
          : (0, ae.z)((r, u) =>
              s(r, u).pipe(
                (0, wt.q)(1),
                (function ln(s) {
                  return (0, Rt.U)(() => s);
                })(r)
              )
            );
      }
      var Wn = I(9300);
      I(8675), I(1884);
      var ti = I(3900),
        ni = I(8505),
        Ai = I(2382),
        rn = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Jt(s) {
        return s.replace(/left|right|bottom|top/g, function (c) {
          return rn[c];
        });
      }
      function wn(s) {
        return s.split("-")[0];
      }
      var Ri = { start: "end", end: "start" };
      function X(s) {
        return s.replace(/start|end/g, function (c) {
          return Ri[c];
        });
      }
      var U = "top",
        j = "bottom",
        Z = "right",
        oe = "left",
        Se = "auto",
        Pe = [U, j, Z, oe],
        It = "start",
        it = "end",
        Kt = "viewport",
        on = "popper",
        Be = Pe.reduce(function (s, c) {
          return s.concat([c + "-" + It, c + "-" + it]);
        }, []),
        St = [].concat(Pe, [Se]).reduce(function (s, c) {
          return s.concat([c, c + "-" + It, c + "-" + it]);
        }, []),
        ri = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function en(s) {
        if (null == s) return window;
        if ("[object Window]" !== s.toString()) {
          var c = s.ownerDocument;
          return (c && c.defaultView) || window;
        }
        return s;
      }
      function at(s) {
        return s instanceof en(s).Element || s instanceof Element;
      }
      function $t(s) {
        return s instanceof en(s).HTMLElement || s instanceof HTMLElement;
      }
      function li(s) {
        return (
          "undefined" != typeof ShadowRoot &&
          (s instanceof en(s).ShadowRoot || s instanceof ShadowRoot)
        );
      }
      function gn(s) {
        return ((at(s) ? s.ownerDocument : s.document) || window.document)
          .documentElement;
      }
      var Yn = Math.max,
        Ci = Math.min,
        vi = Math.round;
      function ci(s, c) {
        void 0 === c && (c = !1);
        var r = s.getBoundingClientRect(),
          u = 1,
          g = 1;
        if ($t(s) && c) {
          var C = s.offsetHeight,
            x = s.offsetWidth;
          x > 0 && (u = vi(r.width) / x || 1),
            C > 0 && (g = vi(r.height) / C || 1);
        }
        return {
          width: r.width / u,
          height: r.height / g,
          top: r.top / g,
          right: r.right / u,
          bottom: r.bottom / g,
          left: r.left / u,
          x: r.left / u,
          y: r.top / g,
        };
      }
      function Ln(s) {
        var c = en(s);
        return { scrollLeft: c.pageXOffset, scrollTop: c.pageYOffset };
      }
      function An(s) {
        return ci(gn(s)).left + Ln(s).scrollLeft;
      }
      function z(s) {
        return en(s).getComputedStyle(s);
      }
      function F(s) {
        return s ? (s.nodeName || "").toLowerCase() : null;
      }
      function K(s) {
        return "html" === F(s)
          ? s
          : s.assignedSlot || s.parentNode || (li(s) ? s.host : null) || gn(s);
      }
      function ve(s) {
        var c = z(s);
        return /auto|scroll|overlay|hidden/.test(
          c.overflow + c.overflowY + c.overflowX
        );
      }
      function Qe(s) {
        return ["html", "body", "#document"].indexOf(F(s)) >= 0
          ? s.ownerDocument.body
          : $t(s) && ve(s)
          ? s
          : Qe(K(s));
      }
      function nt(s, c) {
        var r;
        void 0 === c && (c = []);
        var u = Qe(s),
          g = u === (null == (r = s.ownerDocument) ? void 0 : r.body),
          C = en(u),
          x = g ? [C].concat(C.visualViewport || [], ve(u) ? u : []) : u,
          W = c.concat(x);
        return g ? W : W.concat(nt(K(x)));
      }
      function un(s) {
        return ["table", "td", "th"].indexOf(F(s)) >= 0;
      }
      function tn(s) {
        return $t(s) && "fixed" !== z(s).position ? s.offsetParent : null;
      }
      function Ei(s) {
        for (
          var c = en(s), r = tn(s);
          r && un(r) && "static" === z(r).position;

        )
          r = tn(r);
        return r &&
          ("html" === F(r) || ("body" === F(r) && "static" === z(r).position))
          ? c
          : r ||
              (function Tn(s) {
                var c =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  $t(s) &&
                  "fixed" === z(s).position
                )
                  return null;
                var g = K(s);
                for (
                  li(g) && (g = g.host);
                  $t(g) && ["html", "body"].indexOf(F(g)) < 0;

                ) {
                  var C = z(g);
                  if (
                    "none" !== C.transform ||
                    "none" !== C.perspective ||
                    "paint" === C.contain ||
                    -1 !== ["transform", "perspective"].indexOf(C.willChange) ||
                    (c && "filter" === C.willChange) ||
                    (c && C.filter && "none" !== C.filter)
                  )
                    return g;
                  g = g.parentNode;
                }
                return null;
              })(s) ||
              c;
      }
      function ui(s, c) {
        var r = c.getRootNode && c.getRootNode();
        if (s.contains(c)) return !0;
        if (r && li(r)) {
          var u = c;
          do {
            if (u && s.isSameNode(u)) return !0;
            u = u.parentNode || u.host;
          } while (u);
        }
        return !1;
      }
      function dn(s) {
        return Object.assign({}, s, {
          left: s.x,
          top: s.y,
          right: s.x + s.width,
          bottom: s.y + s.height,
        });
      }
      function Sn(s, c) {
        return c === Kt
          ? dn(
              (function Zi(s) {
                var c = en(s),
                  r = gn(s),
                  u = c.visualViewport,
                  g = r.clientWidth,
                  C = r.clientHeight,
                  x = 0,
                  W = 0;
                return (
                  u &&
                    ((g = u.width),
                    (C = u.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((x = u.offsetLeft), (W = u.offsetTop))),
                  { width: g, height: C, x: x + An(s), y: W }
                );
              })(s)
            )
          : at(c)
          ? (function Qi(s) {
              var c = ci(s);
              return (
                (c.top = c.top + s.clientTop),
                (c.left = c.left + s.clientLeft),
                (c.bottom = c.top + s.clientHeight),
                (c.right = c.left + s.clientWidth),
                (c.width = s.clientWidth),
                (c.height = s.clientHeight),
                (c.x = c.left),
                (c.y = c.top),
                c
              );
            })(c)
          : dn(
              (function G(s) {
                var c,
                  r = gn(s),
                  u = Ln(s),
                  g = null == (c = s.ownerDocument) ? void 0 : c.body,
                  C = Yn(
                    r.scrollWidth,
                    r.clientWidth,
                    g ? g.scrollWidth : 0,
                    g ? g.clientWidth : 0
                  ),
                  x = Yn(
                    r.scrollHeight,
                    r.clientHeight,
                    g ? g.scrollHeight : 0,
                    g ? g.clientHeight : 0
                  ),
                  W = -u.scrollLeft + An(s),
                  $ = -u.scrollTop;
                return (
                  "rtl" === z(g || r).direction &&
                    (W += Yn(r.clientWidth, g ? g.clientWidth : 0) - C),
                  { width: C, height: x, x: W, y: $ }
                );
              })(gn(s))
            );
      }
      function Nt(s) {
        return s.split("-")[1];
      }
      function qt(s) {
        return ["top", "bottom"].indexOf(s) >= 0 ? "x" : "y";
      }
      function Rn(s) {
        var $,
          c = s.reference,
          r = s.element,
          u = s.placement,
          g = u ? wn(u) : null,
          C = u ? Nt(u) : null,
          x = c.x + c.width / 2 - r.width / 2,
          W = c.y + c.height / 2 - r.height / 2;
        switch (g) {
          case U:
            $ = { x, y: c.y - r.height };
            break;
          case j:
            $ = { x, y: c.y + c.height };
            break;
          case Z:
            $ = { x: c.x + c.width, y: W };
            break;
          case oe:
            $ = { x: c.x - r.width, y: W };
            break;
          default:
            $ = { x: c.x, y: c.y };
        }
        var ee = g ? qt(g) : null;
        if (null != ee) {
          var pe = "y" === ee ? "height" : "width";
          switch (C) {
            case It:
              $[ee] = $[ee] - (c[pe] / 2 - r[pe] / 2);
              break;
            case it:
              $[ee] = $[ee] + (c[pe] / 2 - r[pe] / 2);
          }
        }
        return $;
      }
      function oi(s) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, s);
      }
      function Wt(s, c) {
        return c.reduce(function (r, u) {
          return (r[u] = s), r;
        }, {});
      }
      function Bn(s, c) {
        void 0 === c && (c = {});
        var u = c.placement,
          g = void 0 === u ? s.placement : u,
          C = c.boundary,
          x = void 0 === C ? "clippingParents" : C,
          W = c.rootBoundary,
          $ = void 0 === W ? Kt : W,
          ee = c.elementContext,
          pe = void 0 === ee ? on : ee,
          ze = c.altBoundary,
          We = void 0 !== ze && ze,
          Je = c.padding,
          Pt = void 0 === Je ? 0 : Je,
          Ie = oi("number" != typeof Pt ? Pt : Wt(Pt, Pe)),
          Lt = s.rects.popper,
          Et = s.elements[We ? (pe === on ? "reference" : on) : pe],
          Qt = (function ht(s, c, r) {
            var u =
                "clippingParents" === c
                  ? (function Le(s) {
                      var c = nt(K(s)),
                        u =
                          ["absolute", "fixed"].indexOf(z(s).position) >= 0 &&
                          $t(s)
                            ? Ei(s)
                            : s;
                      return at(u)
                        ? c.filter(function (g) {
                            return at(g) && ui(g, u) && "body" !== F(g);
                          })
                        : [];
                    })(s)
                  : [].concat(c),
              g = [].concat(u, [r]),
              x = g.reduce(function (W, $) {
                var ee = Sn(s, $);
                return (
                  (W.top = Yn(ee.top, W.top)),
                  (W.right = Ci(ee.right, W.right)),
                  (W.bottom = Ci(ee.bottom, W.bottom)),
                  (W.left = Yn(ee.left, W.left)),
                  W
                );
              }, Sn(s, g[0]));
            return (
              (x.width = x.right - x.left),
              (x.height = x.bottom - x.top),
              (x.x = x.left),
              (x.y = x.top),
              x
            );
          })(at(Et) ? Et : Et.contextElement || gn(s.elements.popper), x, $),
          _t = ci(s.elements.reference),
          Vt = Rn({
            reference: _t,
            element: Lt,
            strategy: "absolute",
            placement: g,
          }),
          Gt = dn(Object.assign({}, Lt, Vt)),
          Yt = pe === on ? Gt : _t,
          At = {
            top: Qt.top - Yt.top + Ie.top,
            bottom: Yt.bottom - Qt.bottom + Ie.bottom,
            left: Qt.left - Yt.left + Ie.left,
            right: Yt.right - Qt.right + Ie.right,
          },
          Gn = s.modifiersData.offset;
        if (pe === on && Gn) {
          var ei = Gn[g];
          Object.keys(At).forEach(function (bn) {
            var vr = [Z, j].indexOf(bn) >= 0 ? 1 : -1,
              Mi = [U, j].indexOf(bn) >= 0 ? "y" : "x";
            At[bn] += ei[Mi] * vr;
          });
        }
        return At;
      }
      const Vn = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function wi(s) {
          var c = s.state,
            r = s.options,
            u = s.name;
          if (!c.modifiersData[u]._skip) {
            for (
              var g = r.mainAxis,
                C = void 0 === g || g,
                x = r.altAxis,
                W = void 0 === x || x,
                $ = r.fallbackPlacements,
                ee = r.padding,
                pe = r.boundary,
                ze = r.rootBoundary,
                We = r.altBoundary,
                Je = r.flipVariations,
                Pt = void 0 === Je || Je,
                Ie = r.allowedAutoPlacements,
                Ct = c.options.placement,
                Lt = wn(Ct),
                Qt =
                  $ ||
                  (Lt !== Ct && Pt
                    ? (function dt(s) {
                        if (wn(s) === Se) return [];
                        var c = Jt(s);
                        return [X(s), c, X(c)];
                      })(Ct)
                    : [Jt(Ct)]),
                _t = [Ct].concat(Qt).reduce(function (ns, Pr) {
                  return ns.concat(
                    wn(Pr) === Se
                      ? (function di(s, c) {
                          void 0 === c && (c = {});
                          var g = c.boundary,
                            C = c.rootBoundary,
                            x = c.padding,
                            W = c.flipVariations,
                            $ = c.allowedAutoPlacements,
                            ee = void 0 === $ ? St : $,
                            pe = Nt(c.placement),
                            ze = pe
                              ? W
                                ? Be
                                : Be.filter(function (Pt) {
                                    return Nt(Pt) === pe;
                                  })
                              : Pe,
                            We = ze.filter(function (Pt) {
                              return ee.indexOf(Pt) >= 0;
                            });
                          0 === We.length && (We = ze);
                          var Je = We.reduce(function (Pt, Ie) {
                            return (
                              (Pt[Ie] = Bn(s, {
                                placement: Ie,
                                boundary: g,
                                rootBoundary: C,
                                padding: x,
                              })[wn(Ie)]),
                              Pt
                            );
                          }, {});
                          return Object.keys(Je).sort(function (Pt, Ie) {
                            return Je[Pt] - Je[Ie];
                          });
                        })(c, {
                          placement: Pr,
                          boundary: pe,
                          rootBoundary: ze,
                          padding: ee,
                          flipVariations: Pt,
                          allowedAutoPlacements: Ie,
                        })
                      : Pr
                  );
                }, []),
                Vt = c.rects.reference,
                Gt = c.rects.popper,
                Yt = new Map(),
                At = !0,
                Gn = _t[0],
                ei = 0;
              ei < _t.length;
              ei++
            ) {
              var bn = _t[ei],
                vr = wn(bn),
                Mi = Nt(bn) === It,
                ua = [U, j].indexOf(vr) >= 0,
                oo = ua ? "width" : "height",
                pi = Bn(c, {
                  placement: bn,
                  boundary: pe,
                  rootBoundary: ze,
                  altBoundary: We,
                  padding: ee,
                }),
                Li = ua ? (Mi ? Z : oe) : Mi ? j : U;
              Vt[oo] > Gt[oo] && (Li = Jt(Li));
              var ts = Jt(Li),
                xr = [];
              if (
                (C && xr.push(pi[vr] <= 0),
                W && xr.push(pi[Li] <= 0, pi[ts] <= 0),
                xr.every(function (ns) {
                  return ns;
                }))
              ) {
                (Gn = bn), (At = !1);
                break;
              }
              Yt.set(bn, xr);
            }
            if (At)
              for (
                var Nl = function (Pr) {
                    var fa = _t.find(function (ha) {
                      var is = Yt.get(ha);
                      if (is)
                        return is.slice(0, Pr).every(function (pa) {
                          return pa;
                        });
                    });
                    if (fa) return (Gn = fa), "break";
                  },
                  Os = Pt ? 3 : 1;
                Os > 0 && "break" !== Nl(Os);
                Os--
              );
            c.placement !== Gn &&
              ((c.modifiersData[u]._skip = !0),
              (c.placement = Gn),
              (c.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Jn(s, c, r) {
        return Yn(s, Ci(c, r));
      }
      function Ii(s) {
        var c = ci(s),
          r = s.offsetWidth,
          u = s.offsetHeight;
        return (
          Math.abs(c.width - r) <= 1 && (r = c.width),
          Math.abs(c.height - u) <= 1 && (u = c.height),
          { x: s.offsetLeft, y: s.offsetTop, width: r, height: u }
        );
      }
      const In = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function ji(s) {
            var c = s.state,
              r = s.options,
              u = s.name,
              g = r.mainAxis,
              C = void 0 === g || g,
              x = r.altAxis,
              W = void 0 !== x && x,
              We = r.tether,
              Je = void 0 === We || We,
              Pt = r.tetherOffset,
              Ie = void 0 === Pt ? 0 : Pt,
              Ct = Bn(c, {
                boundary: r.boundary,
                rootBoundary: r.rootBoundary,
                padding: r.padding,
                altBoundary: r.altBoundary,
              }),
              Lt = wn(c.placement),
              Et = Nt(c.placement),
              Qt = !Et,
              _t = qt(Lt),
              Vt = (function fi(s) {
                return "x" === s ? "y" : "x";
              })(_t),
              Gt = c.modifiersData.popperOffsets,
              Yt = c.rects.reference,
              At = c.rects.popper,
              Gn =
                "function" == typeof Ie
                  ? Ie(Object.assign({}, c.rects, { placement: c.placement }))
                  : Ie,
              ei =
                "number" == typeof Gn
                  ? { mainAxis: Gn, altAxis: Gn }
                  : Object.assign({ mainAxis: 0, altAxis: 0 }, Gn),
              bn = c.modifiersData.offset
                ? c.modifiersData.offset[c.placement]
                : null,
              vr = { x: 0, y: 0 };
            if (Gt) {
              if (C) {
                var Mi,
                  ua = "y" === _t ? U : oe,
                  oo = "y" === _t ? j : Z,
                  pi = "y" === _t ? "height" : "width",
                  Li = Gt[_t],
                  ts = Li + Ct[ua],
                  xr = Li - Ct[oo],
                  Sl = Je ? -At[pi] / 2 : 0,
                  Nl = Et === It ? Yt[pi] : At[pi],
                  Os = Et === It ? -At[pi] : -Yt[pi],
                  da = c.elements.arrow,
                  ns = Je && da ? Ii(da) : { width: 0, height: 0 },
                  Pr = c.modifiersData["arrow#persistent"]
                    ? c.modifiersData["arrow#persistent"].padding
                    : { top: 0, right: 0, bottom: 0, left: 0 },
                  fa = Pr[ua],
                  ha = Pr[oo],
                  is = Jn(0, Yt[pi], ns[pi]),
                  pa = Qt
                    ? Yt[pi] / 2 - Sl - is - fa - ei.mainAxis
                    : Nl - is - fa - ei.mainAxis,
                  eu = Qt
                    ? -Yt[pi] / 2 + Sl + is + ha + ei.mainAxis
                    : Os + is + ha + ei.mainAxis,
                  Ml = c.elements.arrow && Ei(c.elements.arrow),
                  Ad = null != (Mi = null == bn ? void 0 : bn[_t]) ? Mi : 0,
                  mp = Li + eu - Ad,
                  Rd = Jn(
                    Je
                      ? Ci(
                          ts,
                          Li +
                            pa -
                            Ad -
                            (Ml
                              ? "y" === _t
                                ? Ml.clientTop || 0
                                : Ml.clientLeft || 0
                              : 0)
                        )
                      : ts,
                    Li,
                    Je ? Yn(xr, mp) : xr
                  );
                (Gt[_t] = Rd), (vr[_t] = Rd - Li);
              }
              if (W) {
                var Id,
                  rs = Gt[Vt],
                  Al = "y" === Vt ? "height" : "width",
                  xd = rs + Ct["x" === _t ? U : oe],
                  Fr = rs - Ct["x" === _t ? j : Z],
                  As = -1 !== [U, oe].indexOf(Lt),
                  tu = null != (Id = null == bn ? void 0 : bn[Vt]) ? Id : 0,
                  Rl = As ? xd : rs - Yt[Al] - At[Al] - tu + ei.altAxis,
                  ga = As ? rs + Yt[Al] + At[Al] - tu - ei.altAxis : Fr,
                  Il =
                    Je && As
                      ? (function Nn(s, c, r) {
                          var u = Jn(s, c, r);
                          return u > r ? r : u;
                        })(Rl, rs, ga)
                      : Jn(Je ? Rl : xd, rs, Je ? ga : Fr);
                (Gt[Vt] = Il), (vr[Vt] = Il - rs);
              }
              c.modifiersData[u] = vr;
            }
          },
          requiresIfExists: ["offset"],
        },
        Zt = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function br(s) {
            var c,
              r = s.state,
              u = s.name,
              g = s.options,
              C = r.elements.arrow,
              x = r.modifiersData.popperOffsets,
              W = wn(r.placement),
              $ = qt(W),
              pe = [oe, Z].indexOf(W) >= 0 ? "height" : "width";
            if (C && x) {
              var ze = (function (c, r) {
                  return oi(
                    "number" !=
                      typeof (c =
                        "function" == typeof c
                          ? c(
                              Object.assign({}, r.rects, {
                                placement: r.placement,
                              })
                            )
                          : c)
                      ? c
                      : Wt(c, Pe)
                  );
                })(g.padding, r),
                We = Ii(C),
                Je = "y" === $ ? U : oe,
                Pt = "y" === $ ? j : Z,
                Ie =
                  r.rects.reference[pe] +
                  r.rects.reference[$] -
                  x[$] -
                  r.rects.popper[pe],
                Ct = x[$] - r.rects.reference[$],
                Lt = Ei(C),
                Et = Lt
                  ? "y" === $
                    ? Lt.clientHeight || 0
                    : Lt.clientWidth || 0
                  : 0,
                Gt = Et / 2 - We[pe] / 2 + (Ie / 2 - Ct / 2),
                Yt = Jn(ze[Je], Gt, Et - We[pe] - ze[Pt]);
              r.modifiersData[u] =
                (((c = {})[$] = Yt), (c.centerOffset = Yt - Gt), c);
            }
          },
          effect: function Fo(s) {
            var c = s.state,
              u = s.options.element,
              g = void 0 === u ? "[data-popper-arrow]" : u;
            null != g &&
              (("string" == typeof g &&
                !(g = c.elements.popper.querySelector(g))) ||
                !ui(c.elements.popper, g) ||
                (c.elements.arrow = g));
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"],
        };
      function Gi(s, c, r) {
        void 0 === r && (r = !1);
        var u = $t(c),
          g =
            $t(c) &&
            (function Xi(s) {
              var c = s.getBoundingClientRect(),
                r = vi(c.width) / s.offsetWidth || 1,
                u = vi(c.height) / s.offsetHeight || 1;
              return 1 !== r || 1 !== u;
            })(c),
          C = gn(c),
          x = ci(s, g),
          W = { scrollLeft: 0, scrollTop: 0 },
          $ = { x: 0, y: 0 };
        return (
          (u || (!u && !r)) &&
            (("body" !== F(c) || ve(C)) &&
              (W = (function Ui(s) {
                return s !== en(s) && $t(s)
                  ? (function Dn(s) {
                      return {
                        scrollLeft: s.scrollLeft,
                        scrollTop: s.scrollTop,
                      };
                    })(s)
                  : Ln(s);
              })(c)),
            $t(c)
              ? ((($ = ci(c, !0)).x += c.clientLeft), ($.y += c.clientTop))
              : C && ($.x = An(C))),
          {
            x: x.left + W.scrollLeft - $.x,
            y: x.top + W.scrollTop - $.y,
            width: x.width,
            height: x.height,
          }
        );
      }
      function Kn(s) {
        var c = new Map(),
          r = new Set(),
          u = [];
        function g(C) {
          r.add(C.name),
            []
              .concat(C.requires || [], C.requiresIfExists || [])
              .forEach(function (W) {
                if (!r.has(W)) {
                  var $ = c.get(W);
                  $ && g($);
                }
              }),
            u.push(C);
        }
        return (
          s.forEach(function (C) {
            c.set(C.name, C);
          }),
          s.forEach(function (C) {
            r.has(C.name) || g(C);
          }),
          u
        );
      }
      function ho(s) {
        var c;
        return function () {
          return (
            c ||
              (c = new Promise(function (r) {
                Promise.resolve().then(function () {
                  (c = void 0), r(s());
                });
              })),
            c
          );
        };
      }
      var $i = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Dr() {
        for (var s = arguments.length, c = new Array(s), r = 0; r < s; r++)
          c[r] = arguments[r];
        return !c.some(function (u) {
          return !(u && "function" == typeof u.getBoundingClientRect);
        });
      }
      function Ur(s) {
        void 0 === s && (s = {});
        var r = s.defaultModifiers,
          u = void 0 === r ? [] : r,
          g = s.defaultOptions,
          C = void 0 === g ? $i : g;
        return function (W, $, ee) {
          void 0 === ee && (ee = C);
          var pe = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, $i, C),
              modifiersData: {},
              elements: { reference: W, popper: $ },
              attributes: {},
              styles: {},
            },
            ze = [],
            We = !1,
            Je = {
              state: pe,
              setOptions: function (Lt) {
                var Et = "function" == typeof Lt ? Lt(pe.options) : Lt;
                Ie(),
                  (pe.options = Object.assign({}, C, pe.options, Et)),
                  (pe.scrollParents = {
                    reference: at(W)
                      ? nt(W)
                      : W.contextElement
                      ? nt(W.contextElement)
                      : [],
                    popper: nt($),
                  });
                var Qt = (function Hr(s) {
                  var c = Kn(s);
                  return ri.reduce(function (r, u) {
                    return r.concat(
                      c.filter(function (g) {
                        return g.phase === u;
                      })
                    );
                  }, []);
                })(
                  (function jr(s) {
                    var c = s.reduce(function (r, u) {
                      var g = r[u.name];
                      return (
                        (r[u.name] = g
                          ? Object.assign({}, g, u, {
                              options: Object.assign({}, g.options, u.options),
                              data: Object.assign({}, g.data, u.data),
                            })
                          : u),
                        r
                      );
                    }, {});
                    return Object.keys(c).map(function (r) {
                      return c[r];
                    });
                  })([].concat(u, pe.options.modifiers))
                );
                return (
                  (pe.orderedModifiers = Qt.filter(function (bn) {
                    return bn.enabled;
                  })),
                  (function Pt() {
                    pe.orderedModifiers.forEach(function (Ct) {
                      var Et = Ct.options,
                        _t = Ct.effect;
                      if ("function" == typeof _t) {
                        var Vt = _t({
                          state: pe,
                          name: Ct.name,
                          instance: Je,
                          options: void 0 === Et ? {} : Et,
                        });
                        ze.push(Vt || function () {});
                      }
                    });
                  })(),
                  Je.update()
                );
              },
              forceUpdate: function () {
                if (!We) {
                  var Lt = pe.elements,
                    Et = Lt.reference,
                    Qt = Lt.popper;
                  if (Dr(Et, Qt)) {
                    (pe.rects = {
                      reference: Gi(
                        Et,
                        Ei(Qt),
                        "fixed" === pe.options.strategy
                      ),
                      popper: Ii(Qt),
                    }),
                      (pe.reset = !1),
                      (pe.placement = pe.options.placement),
                      pe.orderedModifiers.forEach(function (bn) {
                        return (pe.modifiersData[bn.name] = Object.assign(
                          {},
                          bn.data
                        ));
                      });
                    for (var Vt = 0; Vt < pe.orderedModifiers.length; Vt++)
                      if (!0 !== pe.reset) {
                        var Gt = pe.orderedModifiers[Vt],
                          Yt = Gt.fn,
                          At = Gt.options;
                        "function" == typeof Yt &&
                          (pe =
                            Yt({
                              state: pe,
                              options: void 0 === At ? {} : At,
                              name: Gt.name,
                              instance: Je,
                            }) || pe);
                      } else (pe.reset = !1), (Vt = -1);
                  }
                }
              },
              update: ho(function () {
                return new Promise(function (Ct) {
                  Je.forceUpdate(), Ct(pe);
                });
              }),
              destroy: function () {
                Ie(), (We = !0);
              },
            };
          if (!Dr(W, $)) return Je;
          function Ie() {
            ze.forEach(function (Ct) {
              return Ct();
            }),
              (ze = []);
          }
          return (
            Je.setOptions(ee).then(function (Ct) {
              !We && ee.onFirstUpdate && ee.onFirstUpdate(Ct);
            }),
            Je
          );
        };
      }
      var cr = { passive: !0 },
        ur = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function wr(s) {
        var c,
          r = s.popper,
          u = s.popperRect,
          g = s.placement,
          C = s.variation,
          x = s.offsets,
          W = s.position,
          $ = s.gpuAcceleration,
          ee = s.adaptive,
          pe = s.roundOffsets,
          ze = s.isFixed,
          We = x.x,
          Je = void 0 === We ? 0 : We,
          Pt = x.y,
          Ie = void 0 === Pt ? 0 : Pt,
          Ct =
            "function" == typeof pe ? pe({ x: Je, y: Ie }) : { x: Je, y: Ie };
        (Je = Ct.x), (Ie = Ct.y);
        var Lt = x.hasOwnProperty("x"),
          Et = x.hasOwnProperty("y"),
          Qt = oe,
          _t = U,
          Vt = window;
        if (ee) {
          var Gt = Ei(r),
            Yt = "clientHeight",
            At = "clientWidth";
          Gt === en(r) &&
            "static" !== z((Gt = gn(r))).position &&
            "absolute" === W &&
            ((Yt = "scrollHeight"), (At = "scrollWidth")),
            (Gt = Gt),
            (g === U || ((g === oe || g === Z) && C === it)) &&
              ((_t = j),
              (Ie -=
                (ze && Gt === Vt && Vt.visualViewport
                  ? Vt.visualViewport.height
                  : Gt[Yt]) - u.height),
              (Ie *= $ ? 1 : -1)),
            (g !== oe && ((g !== U && g !== j) || C !== it)) ||
              ((Qt = Z),
              (Je -=
                (ze && Gt === Vt && Vt.visualViewport
                  ? Vt.visualViewport.width
                  : Gt[At]) - u.width),
              (Je *= $ ? 1 : -1));
        }
        var Mi,
          bn = Object.assign({ position: W }, ee && ur),
          vr =
            !0 === pe
              ? (function Ti(s) {
                  var r = s.y,
                    g = window.devicePixelRatio || 1;
                  return { x: vi(s.x * g) / g || 0, y: vi(r * g) / g || 0 };
                })({ x: Je, y: Ie })
              : { x: Je, y: Ie };
        return (
          (Je = vr.x),
          (Ie = vr.y),
          Object.assign(
            {},
            bn,
            $
              ? (((Mi = {})[_t] = Et ? "0" : ""),
                (Mi[Qt] = Lt ? "0" : ""),
                (Mi.transform =
                  (Vt.devicePixelRatio || 1) <= 1
                    ? "translate(" + Je + "px, " + Ie + "px)"
                    : "translate3d(" + Je + "px, " + Ie + "px, 0)"),
                Mi)
              : (((c = {})[_t] = Et ? Ie + "px" : ""),
                (c[Qt] = Lt ? Je + "px" : ""),
                (c.transform = ""),
                c)
          )
        );
      }
      var si = Ur({
        defaultModifiers: [
          {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function Cr(s) {
              var c = s.state,
                r = s.instance,
                u = s.options,
                g = u.scroll,
                C = void 0 === g || g,
                x = u.resize,
                W = void 0 === x || x,
                $ = en(c.elements.popper),
                ee = [].concat(
                  c.scrollParents.reference,
                  c.scrollParents.popper
                );
              return (
                C &&
                  ee.forEach(function (pe) {
                    pe.addEventListener("scroll", r.update, cr);
                  }),
                W && $.addEventListener("resize", r.update, cr),
                function () {
                  C &&
                    ee.forEach(function (pe) {
                      pe.removeEventListener("scroll", r.update, cr);
                    }),
                    W && $.removeEventListener("resize", r.update, cr);
                }
              );
            },
            data: {},
          },
          {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function Er(s) {
              var c = s.state;
              c.modifiersData[s.name] = Rn({
                reference: c.rects.reference,
                element: c.rects.popper,
                strategy: "absolute",
                placement: c.placement,
              });
            },
            data: {},
          },
          {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function yi(s) {
              var c = s.state,
                r = s.options,
                u = r.gpuAcceleration,
                g = void 0 === u || u,
                C = r.adaptive,
                x = void 0 === C || C,
                W = r.roundOffsets,
                $ = void 0 === W || W,
                pe = {
                  placement: wn(c.placement),
                  variation: Nt(c.placement),
                  popper: c.elements.popper,
                  popperRect: c.rects.popper,
                  gpuAcceleration: g,
                  isFixed: "fixed" === c.options.strategy,
                };
              null != c.modifiersData.popperOffsets &&
                (c.styles.popper = Object.assign(
                  {},
                  c.styles.popper,
                  wr(
                    Object.assign({}, pe, {
                      offsets: c.modifiersData.popperOffsets,
                      position: c.options.strategy,
                      adaptive: x,
                      roundOffsets: $,
                    })
                  )
                )),
                null != c.modifiersData.arrow &&
                  (c.styles.arrow = Object.assign(
                    {},
                    c.styles.arrow,
                    wr(
                      Object.assign({}, pe, {
                        offsets: c.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: $,
                      })
                    )
                  )),
                (c.attributes.popper = Object.assign({}, c.attributes.popper, {
                  "data-popper-placement": c.placement,
                }));
            },
            data: {},
          },
          {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function Tr(s) {
              var c = s.state;
              Object.keys(c.elements).forEach(function (r) {
                var u = c.styles[r] || {},
                  g = c.attributes[r] || {},
                  C = c.elements[r];
                !$t(C) ||
                  !F(C) ||
                  (Object.assign(C.style, u),
                  Object.keys(g).forEach(function (x) {
                    var W = g[x];
                    !1 === W
                      ? C.removeAttribute(x)
                      : C.setAttribute(x, !0 === W ? "" : W);
                  }));
              });
            },
            effect: function Bo(s) {
              var c = s.state,
                r = {
                  popper: {
                    position: c.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0",
                  },
                  arrow: { position: "absolute" },
                  reference: {},
                };
              return (
                Object.assign(c.elements.popper.style, r.popper),
                (c.styles = r),
                c.elements.arrow &&
                  Object.assign(c.elements.arrow.style, r.arrow),
                function () {
                  Object.keys(c.elements).forEach(function (u) {
                    var g = c.elements[u],
                      C = c.attributes[u] || {},
                      W = Object.keys(
                        c.styles.hasOwnProperty(u) ? c.styles[u] : r[u]
                      ).reduce(function ($, ee) {
                        return ($[ee] = ""), $;
                      }, {});
                    !$t(g) ||
                      !F(g) ||
                      (Object.assign(g.style, W),
                      Object.keys(C).forEach(function ($) {
                        g.removeAttribute($);
                      }));
                  });
                }
              );
            },
            requires: ["computeStyles"],
          },
        ],
      });
      const zr = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function xi(s) {
            var c = s.state,
              u = s.name,
              g = s.options.offset,
              C = void 0 === g ? [0, 0] : g,
              x = St.reduce(function (pe, ze) {
                return (
                  (pe[ze] = (function Wr(s, c, r) {
                    var u = wn(s),
                      g = [oe, U].indexOf(u) >= 0 ? -1 : 1,
                      C =
                        "function" == typeof r
                          ? r(Object.assign({}, c, { placement: s }))
                          : r,
                      x = C[0],
                      W = C[1];
                    return (
                      (x = x || 0),
                      (W = (W || 0) * g),
                      [oe, Z].indexOf(u) >= 0 ? { x: W, y: x } : { x, y: W }
                    );
                  })(ze, c.rects, C)),
                  pe
                );
              }, {}),
              W = x[c.placement],
              ee = W.y;
            null != c.modifiersData.popperOffsets &&
              ((c.modifiersData.popperOffsets.x += W.x),
              (c.modifiersData.popperOffsets.y += ee)),
              (c.modifiersData[u] = x);
          },
        },
        fr = ["*"],
        yo = ["dialog"];
      function $a(s, c) {
        if ((1 & s && (a.TgZ(0, "span"), a._uU(1), a.qZA()), 2 & s)) {
          const r = a.oxw().$implicit,
            u = a.oxw();
          a.Tol(u.highlightClass), a.xp6(1), a.Oqu(r);
        }
      }
      function No(s, c) {
        if ((1 & s && a._uU(0), 2 & s)) {
          const r = a.oxw().$implicit;
          a.Oqu(r);
        }
      }
      function fs(s, c) {
        if (
          (1 & s &&
            (a.YNc(0, $a, 2, 3, "span", 1),
            a.YNc(1, No, 1, 1, "ng-template", null, 2, a.W1O)),
          2 & s)
        ) {
          const r = c.odd,
            u = a.MAs(2);
          a.Q6J("ngIf", r)("ngIfElse", u);
        }
      }
      function Wa(s, c) {
        if ((1 & s && a._UZ(0, "ngb-highlight", 2), 2 & s)) {
          const u = c.term;
          a.Q6J("result", (0, c.formatter)(c.result))("term", u);
        }
      }
      function Ys(s, c) {}
      const nc = function (s, c, r) {
        return { result: s, term: c, formatter: r };
      };
      function ic(s, c) {
        if (1 & s) {
          const r = a.EpF();
          a.TgZ(0, "button", 3),
            a.NdJ("mouseenter", function () {
              const C = a.CHM(r).index;
              return a.oxw().markActive(C);
            })("click", function () {
              const C = a.CHM(r).$implicit;
              return a.oxw().select(C);
            }),
            a.YNc(1, Ys, 0, 0, "ng-template", 4),
            a.qZA();
        }
        if (2 & s) {
          const r = c.$implicit,
            u = c.index,
            g = a.oxw(),
            C = a.MAs(1);
          a.ekj("active", u === g.activeIdx),
            a.Q6J("id", g.id + "-" + u),
            a.xp6(1),
            a.Q6J("ngTemplateOutlet", g.resultTemplate || C)(
              "ngTemplateOutletContext",
              a.kEZ(5, nc, r, g.term, g.formatter)
            );
        }
      }
      function gr(s) {
        return null != s ? `${s}` : "";
      }
      function Qr(s) {
        return "string" == typeof s;
      }
      function Si(s) {
        return null != s;
      }
      function O(s) {
        return (s || document.body).getBoundingClientRect();
      }
      function V(s) {
        return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      }
      const Ue = { animation: !0, transitionTimerDelayMs: 5 },
        mt = () => {},
        { transitionTimerDelayMs: Xe } = Ue,
        Ot = new Map(),
        ut = (s, c, r, u) => {
          let g = u.context || {};
          const C = Ot.get(c);
          if (C)
            switch (u.runningTransition) {
              case "continue":
                return te.E;
              case "stop":
                s.run(() => C.transition$.complete()),
                  (g = Object.assign(C.context, g)),
                  Ot.delete(c);
            }
          const x = r(c, u.animation, g) || mt;
          if (
            !u.animation ||
            "none" === window.getComputedStyle(c).transitionProperty
          )
            return (
              s.run(() => x()),
              (0, Q.of)(void 0).pipe(
                (function L(s) {
                  return (c) =>
                    new he.y((r) =>
                      c.subscribe({
                        next: (x) => s.run(() => r.next(x)),
                        error: (x) => s.run(() => r.error(x)),
                        complete: () => s.run(() => r.complete()),
                      })
                    );
                })(s)
              )
            );
          const W = new Oe.x(),
            $ = new Oe.x(),
            ee = W.pipe(
              (function st(...s) {
                return (c) => (0, Ht.z)(c, (0, Q.of)(...s));
              })(!0)
            );
          Ot.set(c, {
            transition$: W,
            complete: () => {
              $.next(), $.complete();
            },
            context: g,
          });
          const pe = (function ue(s) {
            const { transitionDelay: c, transitionDuration: r } =
              window.getComputedStyle(s);
            return 1e3 * (parseFloat(c) + parseFloat(r));
          })(c);
          return (
            s.runOutsideAngular(() => {
              const ze = ne(c, "transitionend").pipe(
                ft(ee),
                (0, Wn.h)(({ target: Je }) => Je === c)
              );
              Fe(gt(pe + Xe).pipe(ft(ee)), ze, $)
                .pipe(ft(ee))
                .subscribe(() => {
                  Ot.delete(c),
                    s.run(() => {
                      x(), W.next(), W.complete();
                    });
                });
            }),
            W.asObservable()
          );
        };
      let Xr = (() => {
          class s {
            constructor() {
              this.animation = Ue.animation;
            }
          }
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵprov = a.Yz7({
              token: s,
              factory: s.ɵfac,
              providedIn: "root",
            })),
            s
          );
        })(),
        Js = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({ imports: [[k.ez]] })),
            s
          );
        })(),
        Ao = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({ imports: [[k.ez]] })),
            s
          );
        })(),
        sc = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({})),
            s
          );
        })(),
        ac = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({ imports: [[k.ez]] })),
            s
          );
        })(),
        Zs = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({})),
            s
          );
        })();
      var vn = (() => {
        return (
          ((s = vn || (vn = {}))[(s.Tab = 9)] = "Tab"),
          (s[(s.Enter = 13)] = "Enter"),
          (s[(s.Escape = 27)] = "Escape"),
          (s[(s.Space = 32)] = "Space"),
          (s[(s.PageUp = 33)] = "PageUp"),
          (s[(s.PageDown = 34)] = "PageDown"),
          (s[(s.End = 35)] = "End"),
          (s[(s.Home = 36)] = "Home"),
          (s[(s.ArrowLeft = 37)] = "ArrowLeft"),
          (s[(s.ArrowUp = 38)] = "ArrowUp"),
          (s[(s.ArrowRight = 39)] = "ArrowRight"),
          (s[(s.ArrowDown = 40)] = "ArrowDown"),
          vn
        );
        var s;
      })();
      const Yo = (s, c) => !!c && c.some((r) => r.contains(s)),
        Jo = (s, c) =>
          !c ||
          null !=
            (function T(s, c) {
              return c && void 0 !== s.closest ? s.closest(c) : null;
            })(s, c),
        Vu =
          "undefined" != typeof navigator &&
          !!navigator.userAgent &&
          (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
            (/Macintosh/.test(navigator.userAgent) &&
              navigator.maxTouchPoints &&
              navigator.maxTouchPoints > 2) ||
            /Android/.test(navigator.userAgent));
      function hc(s, c, r, u, g, C, x, W) {
        r &&
          s.runOutsideAngular(
            ((s) => (Vu ? () => setTimeout(() => s(), 100) : s))(() => {
              const ee = ne(c, "keydown").pipe(
                  ft(g),
                  (0, Wn.h)((We) => We.which === vn.Escape),
                  (0, ni.b)((We) => We.preventDefault())
                ),
                pe = ne(c, "mousedown").pipe(
                  (0, Rt.U)((We) => {
                    const Je = We.target;
                    return (
                      2 !== We.button &&
                      !Yo(Je, x) &&
                      ("inside" === r
                        ? Yo(Je, C) && Jo(Je, W)
                        : "outside" === r
                        ? !Yo(Je, C)
                        : Jo(Je, W) || !Yo(Je, C))
                    );
                  }),
                  ft(g)
                ),
                ze = ne(c, "mouseup").pipe(
                  jt(pe),
                  (0, Wn.h)(([We, Je]) => Je),
                  (function Vi(s, c = Ae.z) {
                    const r = gt(s, c);
                    return Mt(() => r);
                  })(0),
                  ft(g)
                );
              Fe([
                ee.pipe((0, Rt.U)((We) => 0)),
                ze.pipe((0, Rt.U)((We) => 1)),
              ]).subscribe((We) => s.run(() => u(We)));
            })
          );
      }
      const ys = [
        "a[href]",
        "button:not([disabled])",
        'input:not([disabled]):not([type="hidden"])',
        "select:not([disabled])",
        "textarea:not([disabled])",
        "[contenteditable]",
        '[tabindex]:not([tabindex="-1"])',
      ].join(", ");
      function Ko(s) {
        const c = Array.from(s.querySelectorAll(ys)).filter(
          (r) => -1 !== r.tabIndex
        );
        return [c[0], c[c.length - 1]];
      }
      const bs = /\s+/,
        ju = /  +/gi,
        gc = /^start/,
        tl = /^end/,
        ta = /-(top|left)$/,
        mc = /-(bottom|right)$/,
        Gu = /^left/,
        qo = /^right/,
        Ds = /^start/,
        $u = /^end/;
      function nl({ placement: s, baseClass: c }) {
        let r = Array.isArray(s) ? s : s.split(bs),
          g = r.findIndex(($) => "auto" === $);
        g >= 0 &&
          [
            "top",
            "bottom",
            "start",
            "end",
            "top-start",
            "top-end",
            "bottom-start",
            "bottom-end",
            "start-top",
            "start-bottom",
            "end-top",
            "end-bottom",
          ].forEach(function ($) {
            null == r.find((ee) => -1 !== ee.search("^" + $)) &&
              r.splice(g++, 1, $);
          });
        const C = r.map(($) =>
          (function Uu(s) {
            return s
              .replace(gc, "left")
              .replace(tl, "right")
              .replace(ta, "-start")
              .replace(mc, "-end");
          })($)
        );
        return {
          placement: C.shift(),
          modifiers: [
            {
              name: "bootstrapClasses",
              enabled: !!c,
              phase: "write",
              fn({ state: $ }) {
                const ee = new RegExp(c + "-[a-z]+", "gi"),
                  pe = $.elements.popper,
                  ze = $.placement;
                let We = pe.className;
                (We = We.replace(ee, "")),
                  (We += ` ${(function Ah(s, c) {
                    let [r, u] = c.split("-");
                    const g = r.replace(Gu, "start").replace(qo, "end");
                    let C = [g];
                    if (u) {
                      let x = u;
                      ("left" === r || "right" === r) &&
                        (x = x.replace(Ds, "top").replace($u, "bottom")),
                        C.push(`${g}-${x}`);
                    }
                    return s && (C = C.map((x) => `${s}-${x}`)), C.join(" ");
                  })(c, ze)}`),
                  (We = We.trim().replace(ju, " ")),
                  (pe.className = We);
              },
            },
            Vn,
            In,
            Zt,
            { enabled: !0, name: "flip", options: { fallbackPlacements: C } },
            {
              enabled: !0,
              name: "preventOverflow",
              phase: "main",
              fn: function () {},
            },
          ],
        };
      }
      function _c(s) {
        return s;
      }
      function vc(s) {
        return (c) => (
          c.modifiers.push(zr, {
            name: "offset",
            options: { offset: () => s },
          }),
          c
        );
      }
      new Date(1882, 10, 12), new Date(2174, 10, 25);
      let Sc = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({ imports: [[k.ez, Ai.u5]] })),
            s
          );
        })(),
        dl = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({})),
            s
          );
        })();
      class En {
        constructor(c, r, u) {
          (this.nodes = c), (this.viewRef = r), (this.componentRef = u);
        }
      }
      class ws {
        constructor(c, r, u, g, C, x) {
          (this._type = c),
            (this._injector = r),
            (this._viewContainerRef = u),
            (this._renderer = g),
            (this._ngZone = C),
            (this._applicationRef = x),
            (this._windowRef = null),
            (this._contentRef = null);
        }
        open(c, r, u = !1) {
          this._windowRef ||
            ((this._contentRef = this._getContentRef(c, r)),
            (this._windowRef = this._viewContainerRef.createComponent(
              this._type,
              {
                index: this._viewContainerRef.length,
                injector: this._injector,
                projectableNodes: this._contentRef.nodes,
              }
            )));
          const { nativeElement: g } = this._windowRef.location,
            C = this._ngZone.onStable.pipe(
              (0, wt.q)(1),
              (0, ae.z)(() =>
                ut(this._ngZone, g, ({ classList: x }) => x.add("show"), {
                  animation: u,
                  runningTransition: "continue",
                })
              )
            );
          return { windowRef: this._windowRef, transition$: C };
        }
        close(c = !1) {
          return this._windowRef
            ? ut(
                this._ngZone,
                this._windowRef.location.nativeElement,
                ({ classList: r }) => r.remove("show"),
                { animation: c, runningTransition: "stop" }
              ).pipe(
                (0, ni.b)(() => {
                  var r;
                  this._windowRef &&
                    (this._viewContainerRef.remove(
                      this._viewContainerRef.indexOf(this._windowRef.hostView)
                    ),
                    (this._windowRef = null)),
                    (null === (r = this._contentRef) || void 0 === r
                      ? void 0
                      : r.viewRef) &&
                      (this._applicationRef.detachView(
                        this._contentRef.viewRef
                      ),
                      this._contentRef.viewRef.destroy(),
                      (this._contentRef = null));
                })
              )
            : (0, Q.of)(void 0);
        }
        _getContentRef(c, r) {
          if (c) {
            if (c instanceof a.Rgc) {
              const u = c.createEmbeddedView(r);
              return (
                this._applicationRef.attachView(u), new En([u.rootNodes], u)
              );
            }
            return new En([[this._renderer.createText(`${c}`)]]);
          }
          return new En([]);
        }
      }
      let fl = (() => {
        class s {
          constructor(r, u) {
            (this._el = r), (this._zone = u);
          }
          ngOnInit() {
            this._zone.onStable
              .asObservable()
              .pipe((0, wt.q)(1))
              .subscribe(() => {
                ut(
                  this._zone,
                  this._el.nativeElement,
                  (r, u) => {
                    u && O(r), r.classList.add("show");
                  },
                  { animation: this.animation, runningTransition: "continue" }
                );
              });
          }
          hide() {
            return ut(
              this._zone,
              this._el.nativeElement,
              ({ classList: r }) => r.remove("show"),
              { animation: this.animation, runningTransition: "stop" }
            );
          }
        }
        return (
          (s.ɵfac = function (r) {
            return new (r || s)(a.Y36(a.SBq), a.Y36(a.R0b));
          }),
          (s.ɵcmp = a.Xpm({
            type: s,
            selectors: [["ngb-modal-backdrop"]],
            hostAttrs: [2, "z-index", "1055"],
            hostVars: 6,
            hostBindings: function (r, u) {
              2 & r &&
                (a.Tol(
                  "modal-backdrop" +
                    (u.backdropClass ? " " + u.backdropClass : "")
                ),
                a.ekj("show", !u.animation)("fade", u.animation));
            },
            inputs: { animation: "animation", backdropClass: "backdropClass" },
            decls: 0,
            vars: 0,
            template: function (r, u) {},
            encapsulation: 2,
          })),
          s
        );
      })();
      class Mc {
        close(c) {}
        dismiss(c) {}
      }
      class ad {
        constructor(c, r, u, g) {
          (this._windowCmptRef = c),
            (this._contentRef = r),
            (this._backdropCmptRef = u),
            (this._beforeDismiss = g),
            (this._closed = new Oe.x()),
            (this._dismissed = new Oe.x()),
            (this._hidden = new Oe.x()),
            c.instance.dismissEvent.subscribe((C) => {
              this.dismiss(C);
            }),
            (this.result = new Promise((C, x) => {
              (this._resolve = C), (this._reject = x);
            })),
            this.result.then(null, () => {});
        }
        get componentInstance() {
          if (this._contentRef && this._contentRef.componentRef)
            return this._contentRef.componentRef.instance;
        }
        get closed() {
          return this._closed.asObservable().pipe(ft(this._hidden));
        }
        get dismissed() {
          return this._dismissed.asObservable().pipe(ft(this._hidden));
        }
        get hidden() {
          return this._hidden.asObservable();
        }
        get shown() {
          return this._windowCmptRef.instance.shown.asObservable();
        }
        close(c) {
          this._windowCmptRef &&
            (this._closed.next(c),
            this._resolve(c),
            this._removeModalElements());
        }
        _dismiss(c) {
          this._dismissed.next(c), this._reject(c), this._removeModalElements();
        }
        dismiss(c) {
          if (this._windowCmptRef)
            if (this._beforeDismiss) {
              const r = this._beforeDismiss();
              !(function m(s) {
                return s && s.then;
              })(r)
                ? !1 !== r && this._dismiss(c)
                : r.then(
                    (u) => {
                      !1 !== u && this._dismiss(c);
                    },
                    () => {}
                  );
            } else this._dismiss(c);
        }
        _removeModalElements() {
          const c = this._windowCmptRef.instance.hide(),
            r = this._backdropCmptRef
              ? this._backdropCmptRef.instance.hide()
              : (0, Q.of)(void 0);
          c.subscribe(() => {
            const { nativeElement: u } = this._windowCmptRef.location;
            u.parentNode.removeChild(u),
              this._windowCmptRef.destroy(),
              this._contentRef &&
                this._contentRef.viewRef &&
                this._contentRef.viewRef.destroy(),
              (this._windowCmptRef = null),
              (this._contentRef = null);
          }),
            r.subscribe(() => {
              if (this._backdropCmptRef) {
                const { nativeElement: u } = this._backdropCmptRef.location;
                u.parentNode.removeChild(u),
                  this._backdropCmptRef.destroy(),
                  (this._backdropCmptRef = null);
              }
            }),
            de(c, r).subscribe(() => {
              this._hidden.next(), this._hidden.complete();
            });
        }
      }
      var es = (() => {
        return (
          ((s = es || (es = {}))[(s.BACKDROP_CLICK = 0)] = "BACKDROP_CLICK"),
          (s[(s.ESC = 1)] = "ESC"),
          es
        );
        var s;
      })();
      let ld = (() => {
          class s {
            constructor(r, u, g) {
              (this._document = r),
                (this._elRef = u),
                (this._zone = g),
                (this._closed$ = new Oe.x()),
                (this._elWithFocus = null),
                (this.backdrop = !0),
                (this.keyboard = !0),
                (this.dismissEvent = new a.vpe()),
                (this.shown = new Oe.x()),
                (this.hidden = new Oe.x());
            }
            get fullscreenClass() {
              return !0 === this.fullscreen
                ? " modal-fullscreen"
                : Qr(this.fullscreen)
                ? ` modal-fullscreen-${this.fullscreen}-down`
                : "";
            }
            dismiss(r) {
              this.dismissEvent.emit(r);
            }
            ngOnInit() {
              (this._elWithFocus = this._document.activeElement),
                this._zone.onStable
                  .asObservable()
                  .pipe((0, wt.q)(1))
                  .subscribe(() => {
                    this._show();
                  });
            }
            ngOnDestroy() {
              this._disableEventHandling();
            }
            hide() {
              const { nativeElement: r } = this._elRef,
                u = { animation: this.animation, runningTransition: "stop" },
                x = de(
                  ut(this._zone, r, () => r.classList.remove("show"), u),
                  ut(this._zone, this._dialogEl.nativeElement, () => {}, u)
                );
              return (
                x.subscribe(() => {
                  this.hidden.next(), this.hidden.complete();
                }),
                this._disableEventHandling(),
                this._restoreFocus(),
                x
              );
            }
            _show() {
              const r = {
                animation: this.animation,
                runningTransition: "continue",
              };
              de(
                ut(
                  this._zone,
                  this._elRef.nativeElement,
                  (C, x) => {
                    x && O(C), C.classList.add("show");
                  },
                  r
                ),
                ut(this._zone, this._dialogEl.nativeElement, () => {}, r)
              ).subscribe(() => {
                this.shown.next(), this.shown.complete();
              }),
                this._enableEventHandling(),
                this._setFocus();
            }
            _enableEventHandling() {
              const { nativeElement: r } = this._elRef;
              this._zone.runOutsideAngular(() => {
                ne(r, "keydown")
                  .pipe(
                    ft(this._closed$),
                    (0, Wn.h)((g) => g.which === vn.Escape)
                  )
                  .subscribe((g) => {
                    this.keyboard
                      ? requestAnimationFrame(() => {
                          g.defaultPrevented ||
                            this._zone.run(() => this.dismiss(es.ESC));
                        })
                      : "static" === this.backdrop && this._bumpBackdrop();
                  });
                let u = !1;
                ne(this._dialogEl.nativeElement, "mousedown")
                  .pipe(
                    ft(this._closed$),
                    (0, ni.b)(() => (u = !1)),
                    (0, ti.w)(() =>
                      ne(r, "mouseup").pipe(ft(this._closed$), (0, wt.q)(1))
                    ),
                    (0, Wn.h)(({ target: g }) => r === g)
                  )
                  .subscribe(() => {
                    u = !0;
                  }),
                  ne(r, "click")
                    .pipe(ft(this._closed$))
                    .subscribe(({ target: g }) => {
                      r === g &&
                        ("static" === this.backdrop
                          ? this._bumpBackdrop()
                          : !0 === this.backdrop &&
                            !u &&
                            this._zone.run(() =>
                              this.dismiss(es.BACKDROP_CLICK)
                            )),
                        (u = !1);
                    });
              });
            }
            _disableEventHandling() {
              this._closed$.next();
            }
            _setFocus() {
              const { nativeElement: r } = this._elRef;
              if (!r.contains(document.activeElement)) {
                const u = r.querySelector("[ngbAutofocus]"),
                  g = Ko(r)[0];
                (u || g || r).focus();
              }
            }
            _restoreFocus() {
              const r = this._document.body,
                u = this._elWithFocus;
              let g;
              (g = u && u.focus && r.contains(u) ? u : r),
                this._zone.runOutsideAngular(() => {
                  setTimeout(() => g.focus()), (this._elWithFocus = null);
                });
            }
            _bumpBackdrop() {
              "static" === this.backdrop &&
                ut(
                  this._zone,
                  this._elRef.nativeElement,
                  ({ classList: r }) => (
                    r.add("modal-static"), () => r.remove("modal-static")
                  ),
                  { animation: this.animation, runningTransition: "continue" }
                );
            }
          }
          return (
            (s.ɵfac = function (r) {
              return new (r || s)(a.Y36(k.K0), a.Y36(a.SBq), a.Y36(a.R0b));
            }),
            (s.ɵcmp = a.Xpm({
              type: s,
              selectors: [["ngb-modal-window"]],
              viewQuery: function (r, u) {
                if ((1 & r && a.Gf(yo, 7), 2 & r)) {
                  let g;
                  a.iGM((g = a.CRH())) && (u._dialogEl = g.first);
                }
              },
              hostAttrs: ["role", "dialog", "tabindex", "-1"],
              hostVars: 7,
              hostBindings: function (r, u) {
                2 & r &&
                  (a.uIk("aria-modal", !0)("aria-labelledby", u.ariaLabelledBy)(
                    "aria-describedby",
                    u.ariaDescribedBy
                  ),
                  a.Tol(
                    "modal d-block" + (u.windowClass ? " " + u.windowClass : "")
                  ),
                  a.ekj("fade", u.animation));
              },
              inputs: {
                animation: "animation",
                ariaLabelledBy: "ariaLabelledBy",
                ariaDescribedBy: "ariaDescribedBy",
                backdrop: "backdrop",
                centered: "centered",
                fullscreen: "fullscreen",
                keyboard: "keyboard",
                scrollable: "scrollable",
                size: "size",
                windowClass: "windowClass",
                modalDialogClass: "modalDialogClass",
              },
              outputs: { dismissEvent: "dismiss" },
              ngContentSelectors: fr,
              decls: 4,
              vars: 2,
              consts: [
                ["role", "document"],
                ["dialog", ""],
                [1, "modal-content"],
              ],
              template: function (r, u) {
                1 & r &&
                  (a.F$t(),
                  a.TgZ(0, "div", 0, 1)(2, "div", 2),
                  a.Hsn(3),
                  a.qZA()()),
                  2 & r &&
                    a.Tol(
                      "modal-dialog" +
                        (u.size ? " modal-" + u.size : "") +
                        (u.centered ? " modal-dialog-centered" : "") +
                        u.fullscreenClass +
                        (u.scrollable ? " modal-dialog-scrollable" : "") +
                        (u.modalDialogClass ? " " + u.modalDialogClass : "")
                    );
              },
              styles: [
                "ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n",
              ],
              encapsulation: 2,
            })),
            s
          );
        })(),
        Oc = (() => {
          class s {
            constructor(r) {
              this._document = r;
            }
            hide() {
              const r = Math.abs(
                  window.innerWidth - this._document.documentElement.clientWidth
                ),
                u = this._document.body,
                g = u.style,
                { overflow: C, paddingRight: x } = g;
              if (r > 0) {
                const W = parseFloat(window.getComputedStyle(u).paddingRight);
                g.paddingRight = `${W + r}px`;
              }
              return (
                (g.overflow = "hidden"),
                () => {
                  r > 0 && (g.paddingRight = x), (g.overflow = C);
                }
              );
            }
          }
          return (
            (s.ɵfac = function (r) {
              return new (r || s)(a.LFG(k.K0));
            }),
            (s.ɵprov = a.Yz7({
              token: s,
              factory: s.ɵfac,
              providedIn: "root",
            })),
            s
          );
        })(),
        cd = (() => {
          class s {
            constructor(r, u, g, C, x, W) {
              (this._applicationRef = r),
                (this._injector = u),
                (this._document = g),
                (this._scrollBar = C),
                (this._rendererFactory = x),
                (this._ngZone = W),
                (this._activeWindowCmptHasChanged = new Oe.x()),
                (this._ariaHiddenValues = new Map()),
                (this._scrollBarRestoreFn = null),
                (this._backdropAttributes = ["animation", "backdropClass"]),
                (this._modalRefs = []),
                (this._windowAttributes = [
                  "animation",
                  "ariaLabelledBy",
                  "ariaDescribedBy",
                  "backdrop",
                  "centered",
                  "fullscreen",
                  "keyboard",
                  "scrollable",
                  "size",
                  "windowClass",
                  "modalDialogClass",
                ]),
                (this._windowCmpts = []),
                (this._activeInstances = new a.vpe()),
                this._activeWindowCmptHasChanged.subscribe(() => {
                  if (this._windowCmpts.length) {
                    const $ = this._windowCmpts[this._windowCmpts.length - 1];
                    ((s, c, r, u = !1) => {
                      this._ngZone.runOutsideAngular(() => {
                        const g = ne(c, "focusin").pipe(
                          ft(r),
                          (0, Rt.U)((C) => C.target)
                        );
                        ne(c, "keydown")
                          .pipe(
                            ft(r),
                            (0, Wn.h)((C) => C.which === vn.Tab),
                            jt(g)
                          )
                          .subscribe(([C, x]) => {
                            const [W, $] = Ko(c);
                            (x === W || x === c) &&
                              C.shiftKey &&
                              ($.focus(), C.preventDefault()),
                              x === $ &&
                                !C.shiftKey &&
                                (W.focus(), C.preventDefault());
                          }),
                          u &&
                            ne(c, "click")
                              .pipe(
                                ft(r),
                                jt(g),
                                (0, Rt.U)((C) => C[1])
                              )
                              .subscribe((C) => C.focus());
                      });
                    })(
                      0,
                      $.location.nativeElement,
                      this._activeWindowCmptHasChanged
                    ),
                      this._revertAriaHidden(),
                      this._setAriaHidden($.location.nativeElement);
                  }
                });
            }
            _restoreScrollBar() {
              const r = this._scrollBarRestoreFn;
              r && ((this._scrollBarRestoreFn = null), r());
            }
            _hideScrollBar() {
              this._scrollBarRestoreFn ||
                (this._scrollBarRestoreFn = this._scrollBar.hide());
            }
            open(r, u, g, C) {
              const x =
                  C.container instanceof HTMLElement
                    ? C.container
                    : Si(C.container)
                    ? this._document.querySelector(C.container)
                    : this._document.body,
                W = this._rendererFactory.createRenderer(null, null);
              if (!x)
                throw new Error(
                  `The specified modal container "${
                    C.container || "body"
                  }" was not found in the DOM.`
                );
              this._hideScrollBar();
              const $ = new Mc(),
                ee = this._getContentRef(r, C.injector || u, g, $, C);
              let pe = !1 !== C.backdrop ? this._attachBackdrop(r, x) : void 0,
                ze = this._attachWindowComponent(r, x, ee),
                We = new ad(ze, ee, pe, C.beforeDismiss);
              return (
                this._registerModalRef(We),
                this._registerWindowCmpt(ze),
                We.hidden.pipe((0, wt.q)(1)).subscribe(() =>
                  Promise.resolve(!0).then(() => {
                    this._modalRefs.length ||
                      (W.removeClass(this._document.body, "modal-open"),
                      this._restoreScrollBar(),
                      this._revertAriaHidden());
                  })
                ),
                ($.close = (Je) => {
                  We.close(Je);
                }),
                ($.dismiss = (Je) => {
                  We.dismiss(Je);
                }),
                this._applyWindowOptions(ze.instance, C),
                1 === this._modalRefs.length &&
                  W.addClass(this._document.body, "modal-open"),
                pe &&
                  pe.instance &&
                  (this._applyBackdropOptions(pe.instance, C),
                  pe.changeDetectorRef.detectChanges()),
                ze.changeDetectorRef.detectChanges(),
                We
              );
            }
            get activeInstances() {
              return this._activeInstances;
            }
            dismissAll(r) {
              this._modalRefs.forEach((u) => u.dismiss(r));
            }
            hasOpenModals() {
              return this._modalRefs.length > 0;
            }
            _attachBackdrop(r, u) {
              let C = r.resolveComponentFactory(fl).create(this._injector);
              return (
                this._applicationRef.attachView(C.hostView),
                u.appendChild(C.location.nativeElement),
                C
              );
            }
            _attachWindowComponent(r, u, g) {
              let x = r
                .resolveComponentFactory(ld)
                .create(this._injector, g.nodes);
              return (
                this._applicationRef.attachView(x.hostView),
                u.appendChild(x.location.nativeElement),
                x
              );
            }
            _applyWindowOptions(r, u) {
              this._windowAttributes.forEach((g) => {
                Si(u[g]) && (r[g] = u[g]);
              });
            }
            _applyBackdropOptions(r, u) {
              this._backdropAttributes.forEach((g) => {
                Si(u[g]) && (r[g] = u[g]);
              });
            }
            _getContentRef(r, u, g, C, x) {
              return g
                ? g instanceof a.Rgc
                  ? this._createFromTemplateRef(g, C)
                  : Qr(g)
                  ? this._createFromString(g)
                  : this._createFromComponent(r, u, g, C, x)
                : new En([]);
            }
            _createFromTemplateRef(r, u) {
              const C = r.createEmbeddedView({
                $implicit: u,
                close(x) {
                  u.close(x);
                },
                dismiss(x) {
                  u.dismiss(x);
                },
              });
              return (
                this._applicationRef.attachView(C), new En([C.rootNodes], C)
              );
            }
            _createFromString(r) {
              const u = this._document.createTextNode(`${r}`);
              return new En([[u]]);
            }
            _createFromComponent(r, u, g, C, x) {
              const W = r.resolveComponentFactory(g),
                $ = a.zs3.create({
                  providers: [{ provide: Mc, useValue: C }],
                  parent: u,
                }),
                ee = W.create($),
                pe = ee.location.nativeElement;
              return (
                x.scrollable && pe.classList.add("component-host-scrollable"),
                this._applicationRef.attachView(ee.hostView),
                new En([[pe]], ee.hostView, ee)
              );
            }
            _setAriaHidden(r) {
              const u = r.parentElement;
              u &&
                r !== this._document.body &&
                (Array.from(u.children).forEach((g) => {
                  g !== r &&
                    "SCRIPT" !== g.nodeName &&
                    (this._ariaHiddenValues.set(
                      g,
                      g.getAttribute("aria-hidden")
                    ),
                    g.setAttribute("aria-hidden", "true"));
                }),
                this._setAriaHidden(u));
            }
            _revertAriaHidden() {
              this._ariaHiddenValues.forEach((r, u) => {
                r
                  ? u.setAttribute("aria-hidden", r)
                  : u.removeAttribute("aria-hidden");
              }),
                this._ariaHiddenValues.clear();
            }
            _registerModalRef(r) {
              const u = () => {
                const g = this._modalRefs.indexOf(r);
                g > -1 &&
                  (this._modalRefs.splice(g, 1),
                  this._activeInstances.emit(this._modalRefs));
              };
              this._modalRefs.push(r),
                this._activeInstances.emit(this._modalRefs),
                r.result.then(u, u);
            }
            _registerWindowCmpt(r) {
              this._windowCmpts.push(r),
                this._activeWindowCmptHasChanged.next(),
                r.onDestroy(() => {
                  const u = this._windowCmpts.indexOf(r);
                  u > -1 &&
                    (this._windowCmpts.splice(u, 1),
                    this._activeWindowCmptHasChanged.next());
                });
            }
          }
          return (
            (s.ɵfac = function (r) {
              return new (r || s)(
                a.LFG(a.z2F),
                a.LFG(a.zs3),
                a.LFG(k.K0),
                a.LFG(Oc),
                a.LFG(a.FYo),
                a.LFG(a.R0b)
              );
            }),
            (s.ɵprov = a.Yz7({
              token: s,
              factory: s.ɵfac,
              providedIn: "root",
            })),
            s
          );
        })(),
        Ac = (() => {
          class s {
            constructor(r) {
              (this._ngbConfig = r),
                (this.backdrop = !0),
                (this.fullscreen = !1),
                (this.keyboard = !0);
            }
            get animation() {
              return void 0 === this._animation
                ? this._ngbConfig.animation
                : this._animation;
            }
            set animation(r) {
              this._animation = r;
            }
          }
          return (
            (s.ɵfac = function (r) {
              return new (r || s)(a.LFG(Xr));
            }),
            (s.ɵprov = a.Yz7({
              token: s,
              factory: s.ɵfac,
              providedIn: "root",
            })),
            s
          );
        })(),
        ud = (() => {
          class s {
            constructor(r, u, g, C) {
              (this._moduleCFR = r),
                (this._injector = u),
                (this._modalStack = g),
                (this._config = C);
            }
            open(r, u = {}) {
              const g = Object.assign(
                Object.assign(Object.assign({}, this._config), {
                  animation: this._config.animation,
                }),
                u
              );
              return this._modalStack.open(
                this._moduleCFR,
                this._injector,
                r,
                g
              );
            }
            get activeInstances() {
              return this._modalStack.activeInstances;
            }
            dismissAll(r) {
              this._modalStack.dismissAll(r);
            }
            hasOpenModals() {
              return this._modalStack.hasOpenModals();
            }
          }
          return (
            (s.ɵfac = function (r) {
              return new (r || s)(
                a.LFG(a._Vd),
                a.LFG(a.zs3),
                a.LFG(cd),
                a.LFG(Ac)
              );
            }),
            (s.ɵprov = a.Yz7({
              token: s,
              factory: s.ɵfac,
              providedIn: "root",
            })),
            s
          );
        })(),
        Rc = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({ providers: [ud] })),
            s
          );
        })(),
        _l = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({ imports: [[k.ez]] })),
            s
          );
        })(),
        gd = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({ imports: [[k.ez]] })),
            s
          );
        })(),
        sa = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({ imports: [[k.ez]] })),
            s
          );
        })(),
        bd = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({ imports: [[k.ez]] })),
            s
          );
        })(),
        yl = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({ imports: [[k.ez]] })),
            s
          );
        })(),
        bl = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({ imports: [[k.ez]] })),
            s
          );
        })(),
        ro = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({ imports: [[k.ez]] })),
            s
          );
        })(),
        Cl = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({})),
            s
          );
        })(),
        zc = (() => {
          class s {
            constructor() {
              (this.highlightClass = "ngb-highlight"),
                (this.accentSensitive = !0);
            }
            ngOnChanges(r) {
              !this.accentSensitive &&
                !String.prototype.normalize &&
                (console.warn(
                  "The `accentSensitive` input in `ngb-highlight` cannot be set to `false` in a browser that does not implement the `String.normalize` function. You will have to include a polyfill in your application to use this feature in the current browser."
                ),
                (this.accentSensitive = !0));
              const u = gr(this.result),
                g = Array.isArray(this.term) ? this.term : [this.term],
                C = (ee) => (this.accentSensitive ? ee : V(ee)),
                x = g
                  .map((ee) =>
                    (function f(s) {
                      return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
                    })(C(gr(ee)))
                  )
                  .filter((ee) => ee),
                W = this.accentSensitive ? u : V(u),
                $ = x.length
                  ? W.split(new RegExp(`(${x.join("|")})`, "gmi"))
                  : [u];
              if (this.accentSensitive) this.parts = $;
              else {
                let ee = 0;
                this.parts = $.map((pe) => u.substring(ee, (ee += pe.length)));
              }
            }
          }
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵcmp = a.Xpm({
              type: s,
              selectors: [["ngb-highlight"]],
              inputs: {
                highlightClass: "highlightClass",
                result: "result",
                term: "term",
                accentSensitive: "accentSensitive",
              },
              features: [a.TTD],
              decls: 1,
              vars: 1,
              consts: [
                ["ngFor", "", 3, "ngForOf"],
                [3, "class", 4, "ngIf", "ngIfElse"],
                ["even", ""],
              ],
              template: function (r, u) {
                1 & r && a.YNc(0, fs, 3, 2, "ng-template", 0),
                  2 & r && a.Q6J("ngForOf", u.parts);
              },
              directives: [k.sg, k.O5],
              styles: [".ngb-highlight{font-weight:700}\n"],
              encapsulation: 2,
              changeDetection: 0,
            })),
            s
          );
        })(),
        Yc = (() => {
          class s {
            constructor() {
              (this.activeIdx = 0),
                (this.focusFirst = !0),
                (this.formatter = gr),
                (this.selectEvent = new a.vpe()),
                (this.activeChangeEvent = new a.vpe());
            }
            hasActive() {
              return (
                this.activeIdx > -1 && this.activeIdx < this.results.length
              );
            }
            getActive() {
              return this.results[this.activeIdx];
            }
            markActive(r) {
              (this.activeIdx = r), this._activeChanged();
            }
            next() {
              this.activeIdx === this.results.length - 1
                ? (this.activeIdx = this.focusFirst
                    ? (this.activeIdx + 1) % this.results.length
                    : -1)
                : this.activeIdx++,
                this._activeChanged();
            }
            prev() {
              this.activeIdx < 0
                ? (this.activeIdx = this.results.length - 1)
                : 0 === this.activeIdx
                ? (this.activeIdx = this.focusFirst
                    ? this.results.length - 1
                    : -1)
                : this.activeIdx--,
                this._activeChanged();
            }
            resetActive() {
              (this.activeIdx = this.focusFirst ? 0 : -1),
                this._activeChanged();
            }
            select(r) {
              this.selectEvent.emit(r);
            }
            ngOnInit() {
              this.resetActive();
            }
            _activeChanged() {
              this.activeChangeEvent.emit(
                this.activeIdx >= 0 ? this.id + "-" + this.activeIdx : void 0
              );
            }
          }
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵcmp = a.Xpm({
              type: s,
              selectors: [["ngb-typeahead-window"]],
              hostAttrs: ["role", "listbox"],
              hostVars: 3,
              hostBindings: function (r, u) {
                1 & r &&
                  a.NdJ("mousedown", function (C) {
                    return C.preventDefault();
                  }),
                  2 & r &&
                    (a.Ikx("id", u.id),
                    a.Tol(
                      "dropdown-menu show" +
                        (u.popupClass ? " " + u.popupClass : "")
                    ));
              },
              inputs: {
                id: "id",
                focusFirst: "focusFirst",
                results: "results",
                term: "term",
                formatter: "formatter",
                resultTemplate: "resultTemplate",
                popupClass: "popupClass",
              },
              outputs: {
                selectEvent: "select",
                activeChangeEvent: "activeChange",
              },
              exportAs: ["ngbTypeaheadWindow"],
              decls: 3,
              vars: 1,
              consts: [
                ["rt", ""],
                ["ngFor", "", 3, "ngForOf"],
                [3, "result", "term"],
                [
                  "type",
                  "button",
                  "role",
                  "option",
                  1,
                  "dropdown-item",
                  3,
                  "id",
                  "mouseenter",
                  "click",
                ],
                [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
              ],
              template: function (r, u) {
                1 & r &&
                  (a.YNc(0, Wa, 1, 2, "ng-template", null, 0, a.W1O),
                  a.YNc(2, ic, 2, 9, "ng-template", 1)),
                  2 & r && (a.xp6(2), a.Q6J("ngForOf", u.results));
              },
              directives: [zc, k.sg, k.tP],
              encapsulation: 2,
            })),
            s
          );
        })(),
        Jc = (() => {
          class s {
            constructor() {
              (this.editable = !0),
                (this.focusFirst = !0),
                (this.showHint = !1),
                (this.placement = [
                  "bottom-start",
                  "bottom-end",
                  "top-start",
                  "top-end",
                ]);
            }
          }
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵprov = a.Yz7({
              token: s,
              factory: s.ɵfac,
              providedIn: "root",
            })),
            s
          );
        })();
      const El = new a.OlP("live announcer delay", {
        providedIn: "root",
        factory: function Kc() {
          return 100;
        },
      });
      function Ms(s, c = !1) {
        let r = s.body.querySelector("#ngb-live");
        return (
          null == r &&
            c &&
            ((r = s.createElement("div")),
            r.setAttribute("id", "ngb-live"),
            r.setAttribute("aria-live", "polite"),
            r.setAttribute("aria-atomic", "true"),
            r.classList.add("visually-hidden"),
            s.body.appendChild(r)),
          r
        );
      }
      let aa = (() => {
          class s {
            constructor(r, u) {
              (this._document = r), (this._delay = u);
            }
            ngOnDestroy() {
              const r = Ms(this._document);
              r && r.parentElement.removeChild(r);
            }
            say(r) {
              const u = Ms(this._document, !0),
                g = this._delay;
              if (null != u) {
                u.textContent = "";
                const C = () => (u.textContent = r);
                null === g ? C() : setTimeout(C, g);
              }
            }
          }
          return (
            (s.ɵfac = function (r) {
              return new (r || s)(a.LFG(k.K0), a.LFG(El));
            }),
            (s.ɵprov = a.Yz7({
              token: s,
              factory: s.ɵfac,
              providedIn: "root",
            })),
            s
          );
        })(),
        qc = 0,
        wl = (() => {
          class s {
            constructor(r, u, g, C, x, W, $, ee, pe, ze, We) {
              (this._elementRef = r),
                (this._renderer = g),
                (this._live = $),
                (this._document = ee),
                (this._ngZone = pe),
                (this._changeDetector = ze),
                (this._subscription = null),
                (this._closed$ = new Oe.x()),
                (this._inputValueBackup = null),
                (this._windowRef = null),
                (this._positioning = (function Wu() {
                  let s = null;
                  return {
                    createPopper(c) {
                      if (!s) {
                        let u = (c.updatePopperOptions || _c)(nl(c));
                        s = si(c.hostElement, c.targetElement, u);
                      }
                    },
                    update() {
                      s && s.update();
                    },
                    setOptions(c) {
                      if (s) {
                        let u = (c.updatePopperOptions || _c)(nl(c));
                        s.setOptions(u);
                      }
                    },
                    destroy() {
                      s && (s.destroy(), (s = null));
                    },
                  };
                })()),
                (this.autocomplete = "off"),
                (this.placement = "bottom-start"),
                (this.selectItem = new a.vpe()),
                (this.activeDescendant = null),
                (this.popupId = "ngb-typeahead-" + qc++),
                (this._onTouched = () => {}),
                (this._onChange = (Je) => {}),
                (this.container = x.container),
                (this.editable = x.editable),
                (this.focusFirst = x.focusFirst),
                (this.showHint = x.showHint),
                (this.placement = x.placement),
                (this._valueChanges = ne(r.nativeElement, "input").pipe(
                  (0, Rt.U)((Je) => Je.target.value)
                )),
                (this._resubscribeTypeahead = new He.X(null)),
                (this._popupService = new ws(Yc, C, u, g, this._ngZone, We)),
                (this._zoneSubscription = W.onStable.subscribe(() => {
                  this._positioning.update();
                }));
            }
            ngOnInit() {
              this._subscribeToUserInput();
            }
            ngOnChanges({ ngbTypeahead: r }) {
              r &&
                !r.firstChange &&
                (this._unsubscribeFromUserInput(),
                this._subscribeToUserInput());
            }
            ngOnDestroy() {
              this._closePopup(),
                this._unsubscribeFromUserInput(),
                this._zoneSubscription.unsubscribe();
            }
            registerOnChange(r) {
              this._onChange = r;
            }
            registerOnTouched(r) {
              this._onTouched = r;
            }
            writeValue(r) {
              this._writeInputValue(this._formatItemForInput(r)),
                this.showHint && (this._inputValueBackup = r);
            }
            setDisabledState(r) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                "disabled",
                r
              );
            }
            dismissPopup() {
              this.isPopupOpen() &&
                (this._resubscribeTypeahead.next(null),
                this._closePopup(),
                this.showHint &&
                  null !== this._inputValueBackup &&
                  this._writeInputValue(this._inputValueBackup),
                this._changeDetector.markForCheck());
            }
            isPopupOpen() {
              return null != this._windowRef;
            }
            handleBlur() {
              this._resubscribeTypeahead.next(null), this._onTouched();
            }
            handleKeyDown(r) {
              if (this.isPopupOpen())
                switch (r.which) {
                  case vn.ArrowDown:
                    r.preventDefault(),
                      this._windowRef.instance.next(),
                      this._showHint();
                    break;
                  case vn.ArrowUp:
                    r.preventDefault(),
                      this._windowRef.instance.prev(),
                      this._showHint();
                    break;
                  case vn.Enter:
                  case vn.Tab: {
                    const u = this._windowRef.instance.getActive();
                    Si(u) &&
                      (r.preventDefault(),
                      r.stopPropagation(),
                      this._selectResult(u)),
                      this._closePopup();
                    break;
                  }
                }
            }
            _openPopup() {
              if (!this.isPopupOpen()) {
                this._inputValueBackup = this._elementRef.nativeElement.value;
                const { windowRef: r } = this._popupService.open();
                (this._windowRef = r),
                  (this._windowRef.instance.id = this.popupId),
                  this._windowRef.instance.selectEvent.subscribe((u) =>
                    this._selectResultClosePopup(u)
                  ),
                  this._windowRef.instance.activeChangeEvent.subscribe(
                    (u) => (this.activeDescendant = u)
                  ),
                  (this._windowRef.instance.popupClass = this.popupClass),
                  "body" === this.container &&
                    (this._renderer.setStyle(
                      this._windowRef.location.nativeElement,
                      "z-index",
                      "1055"
                    ),
                    this._document
                      .querySelector(this.container)
                      .appendChild(this._windowRef.location.nativeElement)),
                  this._changeDetector.markForCheck(),
                  this._ngZone.onStable.pipe((0, wt.q)(1)).subscribe(() => {
                    this._windowRef &&
                      this._positioning.createPopper({
                        hostElement: this._elementRef.nativeElement,
                        targetElement: this._windowRef.location.nativeElement,
                        placement: this.placement,
                        appendToBody: "body" === this.container,
                        updatePopperOptions: vc([0, 2]),
                      });
                  }),
                  hc(
                    this._ngZone,
                    this._document,
                    "outside",
                    () => this.dismissPopup(),
                    this._closed$,
                    [
                      this._elementRef.nativeElement,
                      this._windowRef.location.nativeElement,
                    ]
                  );
              }
            }
            _closePopup() {
              this._popupService.close().subscribe(() => {
                this._positioning.destroy(),
                  this._closed$.next(),
                  (this._windowRef = null),
                  (this.activeDescendant = null);
              });
            }
            _selectResult(r) {
              let u = !1;
              this.selectItem.emit({
                item: r,
                preventDefault: () => {
                  u = !0;
                },
              }),
                this._resubscribeTypeahead.next(null),
                u || (this.writeValue(r), this._onChange(r));
            }
            _selectResultClosePopup(r) {
              this._selectResult(r), this._closePopup();
            }
            _showHint() {
              var r;
              if (
                this.showHint &&
                (null === (r = this._windowRef) || void 0 === r
                  ? void 0
                  : r.instance.hasActive()) &&
                null != this._inputValueBackup
              ) {
                const u = this._inputValueBackup.toLowerCase(),
                  g = this._formatItemForInput(
                    this._windowRef.instance.getActive()
                  );
                u === g.substr(0, this._inputValueBackup.length).toLowerCase()
                  ? (this._writeInputValue(
                      this._inputValueBackup +
                        g.substr(this._inputValueBackup.length)
                    ),
                    this._elementRef.nativeElement.setSelectionRange.apply(
                      this._elementRef.nativeElement,
                      [this._inputValueBackup.length, g.length]
                    ))
                  : this._writeInputValue(g);
              }
            }
            _formatItemForInput(r) {
              return null != r && this.inputFormatter
                ? this.inputFormatter(r)
                : gr(r);
            }
            _writeInputValue(r) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                "value",
                gr(r)
              );
            }
            _subscribeToUserInput() {
              const r = this._valueChanges.pipe(
                (0, ni.b)((u) => {
                  (this._inputValueBackup = this.showHint ? u : null),
                    this._onChange(this.editable ? u : void 0);
                }),
                this.ngbTypeahead ? this.ngbTypeahead : () => (0, Q.of)([])
              );
              this._subscription = this._resubscribeTypeahead
                .pipe((0, ti.w)(() => r))
                .subscribe((u) => {
                  u && 0 !== u.length
                    ? (this._openPopup(),
                      (this._windowRef.instance.focusFirst = this.focusFirst),
                      (this._windowRef.instance.results = u),
                      (this._windowRef.instance.term =
                        this._elementRef.nativeElement.value),
                      this.resultFormatter &&
                        (this._windowRef.instance.formatter =
                          this.resultFormatter),
                      this.resultTemplate &&
                        (this._windowRef.instance.resultTemplate =
                          this.resultTemplate),
                      this._windowRef.instance.resetActive(),
                      this._windowRef.changeDetectorRef.detectChanges(),
                      this._showHint())
                    : this._closePopup();
                  const g = u ? u.length : 0;
                  this._live.say(
                    0 === g
                      ? "No results available"
                      : `${g} result${1 === g ? "" : "s"} available`
                  );
                });
            }
            _unsubscribeFromUserInput() {
              this._subscription && this._subscription.unsubscribe(),
                (this._subscription = null);
            }
          }
          return (
            (s.ɵfac = function (r) {
              return new (r || s)(
                a.Y36(a.SBq),
                a.Y36(a.s_b),
                a.Y36(a.Qsj),
                a.Y36(a.zs3),
                a.Y36(Jc),
                a.Y36(a.R0b),
                a.Y36(aa),
                a.Y36(k.K0),
                a.Y36(a.R0b),
                a.Y36(a.sBO),
                a.Y36(a.z2F)
              );
            }),
            (s.ɵdir = a.lG2({
              type: s,
              selectors: [["input", "ngbTypeahead", ""]],
              hostAttrs: [
                "autocapitalize",
                "off",
                "autocorrect",
                "off",
                "role",
                "combobox",
                "aria-multiline",
                "false",
              ],
              hostVars: 7,
              hostBindings: function (r, u) {
                1 & r &&
                  a.NdJ("blur", function () {
                    return u.handleBlur();
                  })("keydown", function (C) {
                    return u.handleKeyDown(C);
                  }),
                  2 & r &&
                    (a.Ikx("autocomplete", u.autocomplete),
                    a.uIk("aria-autocomplete", u.showHint ? "both" : "list")(
                      "aria-activedescendant",
                      u.activeDescendant
                    )("aria-owns", u.isPopupOpen() ? u.popupId : null)(
                      "aria-expanded",
                      u.isPopupOpen()
                    ),
                    a.ekj("open", u.isPopupOpen()));
              },
              inputs: {
                autocomplete: "autocomplete",
                container: "container",
                editable: "editable",
                focusFirst: "focusFirst",
                inputFormatter: "inputFormatter",
                ngbTypeahead: "ngbTypeahead",
                resultFormatter: "resultFormatter",
                resultTemplate: "resultTemplate",
                showHint: "showHint",
                placement: "placement",
                popupClass: "popupClass",
              },
              outputs: { selectItem: "selectItem" },
              exportAs: ["ngbTypeahead"],
              features: [
                a._Bn([
                  {
                    provide: Ai.JU,
                    useExisting: (0, a.Gpc)(() => s),
                    multi: !0,
                  },
                ]),
                a.TTD,
              ],
            })),
            s
          );
        })(),
        la = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({ imports: [[k.ez]] })),
            s
          );
        })(),
        Tl = (() => {
          class s {}
          return (
            (s.ɵfac = function (r) {
              return new (r || s)();
            }),
            (s.ɵmod = a.oAB({ type: s })),
            (s.ɵinj = a.cJS({})),
            s
          );
        })();
      const pp = [
        Js,
        Ao,
        sc,
        ac,
        Zs,
        Sc,
        dl,
        Rc,
        _l,
        Tl,
        gd,
        sa,
        bd,
        yl,
        bl,
        ro,
        Cl,
        la,
      ];
      let Xc = (() => {
        class s {}
        return (
          (s.ɵfac = function (r) {
            return new (r || s)();
          }),
          (s.ɵmod = a.oAB({ type: s })),
          (s.ɵinj = a.cJS({
            imports: [
              pp,
              Js,
              Ao,
              sc,
              ac,
              Zs,
              Sc,
              dl,
              Rc,
              _l,
              Tl,
              gd,
              sa,
              bd,
              yl,
              bl,
              ro,
              Cl,
              la,
            ],
          })),
          s
        );
      })();
    },
  },
  (tt) => {
    tt((tt.s = 1791));
  },
]);
