_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [11],
  {
    RNiq: function (t, e, n) {
      'use strict';
      n.r(e);
      var a = n('o0o1'),
        c = n.n(a),
        o = n('HaE+'),
        r = n('ODXe'),
        u = n('q1tI'),
        l = n.n(u),
        s = n('/MKj'),
        i = n('FGyW'),
        b = n('nOHt'),
        p = n('gaBn'),
        d = n('Twb8'),
        f = n('Xp8U'),
        m = n('hsQd'),
        h = n('qoM+'),
        w = n('xPX6'),
        O = l.a.createElement;
      e.default = function () {
        var t = Object(b.useRouter)(),
          e = Object(s.b)(),
          n = Object(s.c)(d.a.selectAuthToken),
          a = Object(s.c)(d.b.selectCurrentUrl),
          u = l.a.useState({ url: '', custom: '' }),
          j = Object(r.a)(u, 2),
          _ = j[0],
          L = j[1],
          g = _.url,
          v = _.custom,
          y = l.a.useState(null),
          E = Object(r.a)(y, 2),
          k = E[0],
          N = E[1],
          R = Object(s.c)(d.a.selectLoading),
          T = Object(s.c)(d.b.selectError),
          x = l.a.useCallback(
            function (t) {
              t.preventDefault(),
                N(v),
                n &&
                  ('' !== g && '' !== v
                    ? e(f.b.shorten({ custom: v, url: g }))
                    : Object(i.b)('Cannot have empty fields!', {
                        type: 'error'
                      }));
            },
            [_, k]
          ),
          D = l.a.useCallback(
            Object(o.a)(
              c.a.mark(function t() {
                return c.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        e(f.a.logout());
                      case 1:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            ),
            [e, f.a]
          );
        return (
          l.a.useEffect(
            function () {
              T && Object(i.b)(T, { type: 'error' });
            },
            [T]
          ),
          O(
            l.a.Fragment,
            null,
            !n && R
              ? 'Loading...'
              : O(
                  l.a.Fragment,
                  null,
                  O(i.a, null),
                  O(p.a, {
                    Title: 'URL-shortener',
                    Links: [
                      {
                        title: 'Login',
                        ref: '/login',
                        condition: !!n,
                        replacement: O(m.a, {
                          Actions: [
                            {
                              name: 'Dashboard',
                              act: function () {
                                return t.push('/dashboard');
                              }
                            },
                            { name: 'Logout', act: D }
                          ],
                          Letter:
                            null === n || void 0 === n ? void 0 : n.userName[0]
                        })
                      }
                    ]
                  }),
                  O(h.a, {
                    Title: 'Shorten your URL',
                    ParentState: [_, L],
                    SubmitFunction: x,
                    Inputs: [
                      { label: 'URL', id: 'url', type: 'text' },
                      {
                        id: 'custom',
                        type: 'text',
                        exteriorLabel: 'your-custom-path'
                      }
                    ],
                    LowerText: {
                      info: a
                        ? null
                        : ''.concat(w.a).concat(_.custom || 'your custom path'),
                      link: n
                        ? {
                            name: a ? ''.concat(w.a).concat(k) : null,
                            ref: a ? ''.concat(w.a).concat(k) : null
                          }
                        : {}
                    }
                  }),
                  ' '
                )
          )
        );
      };
    },
    vlRD: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n('RNiq');
        }
      ]);
    }
  },
  [['vlRD', 1, 2, 0, 3, 4, 5, 6]]
]);
