_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [12],
  {
    O2ls: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('ODXe'),
        u = n('q1tI'),
        o = n.n(u),
        i = n('/MKj'),
        r = n('nOHt'),
        c = n('FGyW'),
        l = n('gaBn'),
        s = n('qoM+'),
        p = n('Twb8'),
        w = n('Xp8U'),
        b = o.a.createElement;
      t.default = function () {
        var e = Object(r.useRouter)(),
          t = Object(i.b)(),
          n = o.a.useState({}),
          u = Object(a.a)(n, 2),
          f = u[0],
          d = u[1],
          _ = Object(i.c)(p.a.selectAuthToken),
          m = Object(i.c)(p.a.selectError),
          O = f.email,
          E = f.password,
          j = o.a.useCallback(
            function () {
              t(w.a.login({ email: O, password: E }));
            },
            [f, t, w.a]
          );
        return (
          o.a.useEffect(
            function () {
              _ && e.push('/'),
                m &&
                  (Object.keys(m).map(function (e) {
                    return m[e] && Object(c.b)(m[e], { type: 'error' });
                  }),
                  t(w.a.clearError()));
            },
            [_, m]
          ),
          b(
            o.a.Fragment,
            null,
            b(c.a, null),
            b(l.a, { Title: 'Login', Links: [{ title: 'Home', ref: '/' }] }),
            b(s.a, {
              Title: 'Account',
              ParentState: [f, d],
              SubmitFunction: function (e) {
                e.preventDefault(), j();
              },
              Inputs: [
                { label: 'Email', id: 'email', type: 'email' },
                { label: 'Password', id: 'password', type: 'password' }
              ],
              LowerText: {
                info: "Don't have an account?",
                link: { name: 'Signup', ref: '/signup' }
              }
            })
          )
        );
      };
    },
    u6Hu: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/login',
        function () {
          return n('O2ls');
        }
      ]);
    }
  },
  [['u6Hu', 1, 2, 0, 3, 4, 5]]
]);
