_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [13],
  {
    OUKs: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/signup',
        function () {
          return r('vL9u');
        }
      ]);
    },
    vL9u: function (e, t, r) {
      'use strict';
      r.r(t);
      var n = r('rePB'),
        a = r('ODXe'),
        o = r('q1tI'),
        c = r.n(o),
        s = r('/MKj'),
        i = r('nOHt'),
        u = r('FGyW'),
        p = r('gaBn'),
        l = r('qoM+'),
        b = r('Twb8'),
        O = r('Xp8U'),
        f = c.a.createElement;
      function w(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(r), !0).forEach(function (t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      t.default = function () {
        var e = Object(i.useRouter)(),
          t = Object(s.b)(),
          r = c.a.useState({}),
          n = Object(a.a)(r, 2),
          o = n[0],
          w = n[1],
          j = Object(s.c)(b.a.selectAuthToken),
          m = o.cpassword,
          y = o.password,
          g = o.userName,
          P = o.email,
          E = Object(s.c)(b.a.selectError),
          _ = c.a.useCallback(
            function () {
              m !== y
                ? w(d(d({}, o), {}, { error: "passwords don't match!" }))
                : t(O.a.signup({ email: P, password: y, userName: g }));
            },
            [o, t, O.a]
          );
        return (
          c.a.useEffect(
            function () {
              j && e.push('/'),
                E &&
                  (Object.keys(E).map(function (e) {
                    return E[e] && Object(u.b)(E[e], { type: 'error' });
                  }),
                  t(O.a.clearError()));
            },
            [j, E]
          ),
          f(
            c.a.Fragment,
            null,
            f(u.a, null),
            f(p.a, { Title: 'Signup', Links: [{ title: 'Home', ref: '/' }] }),
            f(l.a, {
              Title: 'Create Account',
              ParentState: [o, w],
              SubmitFunction: function (e) {
                e.preventDefault(), _();
              },
              Inputs: [
                { label: 'User name', id: 'userName', type: 'text' },
                { label: 'Email', id: 'email', type: 'email' },
                { label: 'Password', id: 'password', type: 'password' },
                { label: 'Confirm Password', id: 'cpassword', type: 'password' }
              ],
              LowerText: {
                info: 'Already have an account?',
                link: { name: 'Login', ref: '/login' }
              }
            })
          )
        );
      };
    }
  },
  [['OUKs', 1, 2, 0, 3, 4, 5]]
]);
