_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [10],
  {
    '2wU4': function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/dashboard',
        function () {
          return n('u9iw');
        }
      ]);
    },
    '3Nd0': function (e, t, n) {
      'use strict';
      var a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var i = a(n('q1tI')),
        r = (0, a(n('8/g6')).default)(
          i.default.createElement('path', {
            d:
              'M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z'
          }),
          'SubdirectoryArrowRight'
        );
      t.default = r;
    },
    '8/g6': function (e, t, n) {
      'use strict';
      var a = n('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          var n = r.default.memo(
            r.default.forwardRef(function (t, n) {
              return r.default.createElement(
                o.default,
                (0, i.default)({ ref: n }, t),
                e
              );
            })
          );
          0;
          return (n.muiName = o.default.muiName), n;
        });
      var i = a(n('pVnL')),
        r = a(n('q1tI')),
        o = a(n('UJJ5'));
    },
    UJJ5: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('HR5l');
      n.d(t, 'default', function () {
        return a.a;
      });
    },
    pVnL: function (e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      e.exports = n;
    },
    u9iw: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('o0o1'),
        i = n.n(a),
        r = n('HaE+'),
        o = n('q1tI'),
        s = n.n(o),
        c = n('/MKj'),
        l = n('wx14'),
        u = n('Ff2n'),
        d = n('rePB'),
        f = (n('17x9'), n('iuhU')),
        p = n('H2TA'),
        m = n('NqtD'),
        x = o.forwardRef(function (e, t) {
          var n = e.classes,
            a = e.className,
            i = e.component,
            r = void 0 === i ? 'div' : i,
            s = e.disableGutters,
            c = void 0 !== s && s,
            d = e.fixed,
            p = void 0 !== d && d,
            x = e.maxWidth,
            g = void 0 === x ? 'lg' : x,
            b = Object(u.a)(e, [
              'classes',
              'className',
              'component',
              'disableGutters',
              'fixed',
              'maxWidth'
            ]);
          return o.createElement(
            r,
            Object(l.a)(
              {
                className: Object(f.a)(
                  n.root,
                  a,
                  p && n.fixed,
                  c && n.disableGutters,
                  !1 !== g && n['maxWidth'.concat(Object(m.a)(String(g)))]
                ),
                ref: t
              },
              b
            )
          );
        }),
        g = Object(p.a)(
          function (e) {
            return {
              root: Object(d.a)(
                {
                  width: '100%',
                  marginLeft: 'auto',
                  boxSizing: 'border-box',
                  marginRight: 'auto',
                  paddingLeft: e.spacing(2),
                  paddingRight: e.spacing(2),
                  display: 'block'
                },
                e.breakpoints.up('sm'),
                { paddingLeft: e.spacing(3), paddingRight: e.spacing(3) }
              ),
              disableGutters: { paddingLeft: 0, paddingRight: 0 },
              fixed: Object.keys(e.breakpoints.values).reduce(function (t, n) {
                var a = e.breakpoints.values[n];
                return 0 !== a && (t[e.breakpoints.up(n)] = { maxWidth: a }), t;
              }, {}),
              maxWidthXs: Object(d.a)({}, e.breakpoints.up('xs'), {
                maxWidth: Math.max(e.breakpoints.values.xs, 444)
              }),
              maxWidthSm: Object(d.a)({}, e.breakpoints.up('sm'), {
                maxWidth: e.breakpoints.values.sm
              }),
              maxWidthMd: Object(d.a)({}, e.breakpoints.up('md'), {
                maxWidth: e.breakpoints.values.md
              }),
              maxWidthLg: Object(d.a)({}, e.breakpoints.up('lg'), {
                maxWidth: e.breakpoints.values.lg
              }),
              maxWidthXl: Object(d.a)({}, e.breakpoints.up('xl'), {
                maxWidth: e.breakpoints.values.xl
              })
            };
          },
          { name: 'MuiContainer' }
        )(x),
        b = n('30+C'),
        v = n('oa/T'),
        h = n('ofer'),
        w = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        j = ['auto', !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      function k(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = parseFloat(e);
        return ''
          .concat(n / t)
          .concat(String(e).replace(String(n), '') || 'px');
      }
      var O = o.forwardRef(function (e, t) {
          var n = e.alignContent,
            a = void 0 === n ? 'stretch' : n,
            i = e.alignItems,
            r = void 0 === i ? 'stretch' : i,
            s = e.classes,
            c = e.className,
            d = e.component,
            p = void 0 === d ? 'div' : d,
            m = e.container,
            x = void 0 !== m && m,
            g = e.direction,
            b = void 0 === g ? 'row' : g,
            v = e.item,
            h = void 0 !== v && v,
            w = e.justify,
            j = void 0 === w ? 'flex-start' : w,
            k = e.lg,
            O = void 0 !== k && k,
            y = e.md,
            W = void 0 !== y && y,
            N = e.sm,
            S = void 0 !== N && N,
            C = e.spacing,
            L = void 0 === C ? 0 : C,
            _ = e.wrap,
            E = void 0 === _ ? 'wrap' : _,
            M = e.xl,
            R = void 0 !== M && M,
            T = e.xs,
            I = void 0 !== T && T,
            z = e.zeroMinWidth,
            G = void 0 !== z && z,
            U = Object(u.a)(e, [
              'alignContent',
              'alignItems',
              'classes',
              'className',
              'component',
              'container',
              'direction',
              'item',
              'justify',
              'lg',
              'md',
              'sm',
              'spacing',
              'wrap',
              'xl',
              'xs',
              'zeroMinWidth'
            ]),
            B = Object(f.a)(
              s.root,
              c,
              x && [s.container, 0 !== L && s['spacing-xs-'.concat(String(L))]],
              h && s.item,
              G && s.zeroMinWidth,
              'row' !== b && s['direction-xs-'.concat(String(b))],
              'wrap' !== E && s['wrap-xs-'.concat(String(E))],
              'stretch' !== r && s['align-items-xs-'.concat(String(r))],
              'stretch' !== a && s['align-content-xs-'.concat(String(a))],
              'flex-start' !== j && s['justify-xs-'.concat(String(j))],
              !1 !== I && s['grid-xs-'.concat(String(I))],
              !1 !== S && s['grid-sm-'.concat(String(S))],
              !1 !== W && s['grid-md-'.concat(String(W))],
              !1 !== O && s['grid-lg-'.concat(String(O))],
              !1 !== R && s['grid-xl-'.concat(String(R))]
            );
          return o.createElement(p, Object(l.a)({ className: B, ref: t }, U));
        }),
        y = Object(p.a)(
          function (e) {
            return Object(l.a)(
              {
                root: {},
                container: {
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: '100%'
                },
                item: { boxSizing: 'border-box', margin: '0' },
                zeroMinWidth: { minWidth: 0 },
                'direction-xs-column': { flexDirection: 'column' },
                'direction-xs-column-reverse': {
                  flexDirection: 'column-reverse'
                },
                'direction-xs-row-reverse': { flexDirection: 'row-reverse' },
                'wrap-xs-nowrap': { flexWrap: 'nowrap' },
                'wrap-xs-wrap-reverse': { flexWrap: 'wrap-reverse' },
                'align-items-xs-center': { alignItems: 'center' },
                'align-items-xs-flex-start': { alignItems: 'flex-start' },
                'align-items-xs-flex-end': { alignItems: 'flex-end' },
                'align-items-xs-baseline': { alignItems: 'baseline' },
                'align-content-xs-center': { alignContent: 'center' },
                'align-content-xs-flex-start': { alignContent: 'flex-start' },
                'align-content-xs-flex-end': { alignContent: 'flex-end' },
                'align-content-xs-space-between': {
                  alignContent: 'space-between'
                },
                'align-content-xs-space-around': {
                  alignContent: 'space-around'
                },
                'justify-xs-center': { justifyContent: 'center' },
                'justify-xs-flex-end': { justifyContent: 'flex-end' },
                'justify-xs-space-between': { justifyContent: 'space-between' },
                'justify-xs-space-around': { justifyContent: 'space-around' },
                'justify-xs-space-evenly': { justifyContent: 'space-evenly' }
              },
              (function (e, t) {
                var n = {};
                return (
                  w.forEach(function (a) {
                    var i = e.spacing(a);
                    0 !== i &&
                      (n['spacing-'.concat(t, '-').concat(a)] = {
                        margin: '-'.concat(k(i, 2)),
                        width: 'calc(100% + '.concat(k(i), ')'),
                        '& > $item': { padding: k(i, 2) }
                      });
                  }),
                  n
                );
              })(e, 'xs'),
              e.breakpoints.keys.reduce(function (t, n) {
                return (
                  (function (e, t, n) {
                    var a = {};
                    j.forEach(function (e) {
                      var t = 'grid-'.concat(n, '-').concat(e);
                      if (!0 !== e)
                        if ('auto' !== e) {
                          var i = ''.concat(
                            Math.round((e / 12) * 1e8) / 1e6,
                            '%'
                          );
                          a[t] = { flexBasis: i, flexGrow: 0, maxWidth: i };
                        } else
                          a[t] = {
                            flexBasis: 'auto',
                            flexGrow: 0,
                            maxWidth: 'none'
                          };
                      else
                        a[t] = { flexBasis: 0, flexGrow: 1, maxWidth: '100%' };
                    }),
                      'xs' === n
                        ? Object(l.a)(e, a)
                        : (e[t.breakpoints.up(n)] = a);
                  })(t, e, n),
                  t
                );
              }, {})
            );
          },
          { name: 'MuiGrid' }
        )(O),
        W = n('Z3vd'),
        N = n('R/WZ'),
        S = n('3Nd0'),
        C = n.n(S),
        L = n('vqLa'),
        _ = n.n(L),
        E = n('1T6e'),
        M = n.n(E),
        R = n('nOHt'),
        T = n('gaBn'),
        I = n('Twb8'),
        z = n('Xp8U'),
        G = n('hsQd'),
        U = s.a.createElement,
        B = Object(N.a)({
          root: { marginTop: 30 },
          container: { borderBottom: '1px solid #ebebeb ', marginBottom: 10 },
          link: { flexGrow: 1 },
          ref: { '&:hover': { color: M.a[500] }, color: _.a[500] },
          delete: { marginBottom: 10 }
        });
      t.default = function () {
        var e = Object(R.useRouter)(),
          t = B(),
          n = Object(c.b)(),
          a = Object(c.c)(I.a.selectAuthToken),
          o = Object(c.c)(I.a.selectLoading),
          l = Object(c.c)(I.b.selectUrls),
          u = s.a.useCallback(
            Object(r.a)(
              i.a.mark(function e() {
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        n(z.a.logout());
                      case 1:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            ),
            [n, z.a]
          ),
          d = s.a.useCallback(
            Object(r.a)(
              i.a.mark(function e() {
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), n(z.b.fetchUrls());
                      case 2:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            ),
            [n]
          ),
          f = s.a.useCallback(
            function (e) {
              n(z.b.deleteUrl(e));
            },
            [n]
          );
        return (
          s.a.useEffect(function () {
            d();
          }, []),
          o || a || e.push('/login'),
          U(
            s.a.Fragment,
            null,
            a
              ? U(
                  s.a.Fragment,
                  null,
                  U(T.a, {
                    Title: 'Dashboard',
                    Links: [
                      { title: 'Shortening', ref: '/' },
                      {
                        title: 'Login',
                        ref: '/login',
                        condition: !!a,
                        replacement: U(G.a, {
                          Actions: [{ name: 'Logout', act: u }],
                          Letter: a ? a.userName[0] : null
                        })
                      }
                    ]
                  }),
                  U(
                    g,
                    { className: t.root },
                    U(
                      b.a,
                      null,
                      U(v.a, null, U(h.a, { variant: 'h4' }, 'Account Info')),
                      U(
                        v.a,
                        null,
                        U(h.a, null, 'username: ', a.userName),
                        U(h.a, null, 'email: ', a.email, ' ')
                      )
                    ),
                    U(
                      b.a,
                      null,
                      U(
                        v.a,
                        null,
                        U(h.a, { variant: 'h4' }, 'History'),
                        Object.keys(l || {}).map(function (e) {
                          return U(
                            g,
                            { className: t.container },
                            U(h.a, { key: e }, e),
                            U(
                              y,
                              { container: !0, direction: 'row' },
                              U(C.a, null),
                              U(
                                'div',
                                { className: t.link },
                                U('a', { className: t.ref, href: l[e] }, l[e])
                              ),
                              U(
                                W.a,
                                {
                                  size: 'small',
                                  className: t.delete,
                                  variant: 'contained',
                                  color: 'secondary',
                                  onClick: function () {
                                    return f(e);
                                  }
                                },
                                'delete'
                              )
                            )
                          );
                        })
                      ),
                      U(v.a, null)
                    )
                  ),
                  ' '
                )
              : 'Loading...'
          )
        );
      };
    }
  },
  [['2wU4', 1, 2, 0, 3, 4, 6]]
]);
