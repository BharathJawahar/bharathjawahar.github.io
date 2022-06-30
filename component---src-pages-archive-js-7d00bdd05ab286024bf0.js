(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [527],
  {
    226: function(e, t, a) {
      'use strict';
      a.r(t);
      const r = a(7294);
      const n = a(5414);
      const l = a(9);
      const i = a(537);
      const d = a(355);
      const c = a(7140);
      const o = a(9086);
      const m = a(3082);
      const s = l.ZP.div.withConfig({
        displayName: 'archive__StyledTableContainer',
        componentId: 'sc-2cxdc9-0',
      })(
        [
          'margin:100px -20px;@media (max-width:768px){margin:50px -10px;}table{width:100%;border-collapse:collapse;.hide-on-mobile{@media (max-width:768px){display:none;}}tbody tr{&:hover,&:focus{background-color:var(--light-navy);}}th,td{padding:10px;text-align:left;&:first-child{padding-left:20px;@media (max-width:768px){padding-left:10px;}}&:last-child{padding-right:20px;@media (max-width:768px){padding-right:10px;}}svg{width:20px;height:20px;}}tr{cursor:default;td:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);}td:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);}}td{&.year{padding-right:20px;@media (max-width:768px){padding-right:10px;font-size:var(--fz-sm);}}&.title{padding-top:15px;padding-right:20px;color:var(--lightest-slate);font-size:var(--fz-xl);font-weight:600;line-height:1.25;}&.company{font-size:var(--fz-lg);white-space:nowrap;}&.tech{font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;.separator{margin:0 5px;}span{display:inline-block;}}&.links{min-width:100px;div{display:flex;align-items:center;a{',
          ';flex-shrink:0;}a + a{margin-left:10px;}}}}}',
        ],
        function(e) {
          return e.theme.mixins.flexCenter;
        },
      );
      t.default = function(e) {
        const t = e.location;
        const a = e.data.allMarkdownRemark.edges;
        const l = (0, r.useRef)(null);
        const h = (0, r.useRef)(null);
        const p = (0, r.useRef)([]);
        const u = (0, m.Tb)();
        return (
          (0, r.useEffect)(function() {
            u ||
              (d.Z.reveal(l.current, (0, i.srConfig)()),
              d.Z.reveal(h.current, (0, i.srConfig)(200, 0)),
              p.current.forEach(function(e, t) {
                return d.Z.reveal(e, (0, i.srConfig)(10 * t));
              }));
          }, []),
          r.createElement(
            c.Ar,
            { location: t },
            r.createElement(n.q, { title: 'Archive' }),
            r.createElement(
              'main',
              null,
              r.createElement(
                'header',
                { ref: l },
                r.createElement('h1', { className: 'big-heading' }, 'Archive'),
                r.createElement(
                  'p',
                  { className: 'subtitle' },
                  'A big list of things I’ve worked on',
                ),
              ),
              r.createElement(
                s,
                { ref: h },
                r.createElement(
                  'table',
                  null,
                  r.createElement(
                    'thead',
                    null,
                    r.createElement(
                      'tr',
                      null,
                      r.createElement('th', null, 'Year'),
                      r.createElement('th', null, 'Title'),
                      r.createElement('th', { className: 'hide-on-mobile' }, 'Made at'),
                      r.createElement('th', { className: 'hide-on-mobile' }, 'Built with'),
                      r.createElement('th', null, 'Link'),
                    ),
                  ),
                  r.createElement(
                    'tbody',
                    null,
                    a.length > 0 &&
                      a.map(function(e, t) {
                        const a = e.node.frontmatter;
                        const n = a.date;
                        const l = a.github;
                        const i = a.external;
                        const d = a.ios;
                        const c = a.android;
                        const m = a.title;
                        const s = a.tech;
                        const h = a.company;
                        return r.createElement(
                          'tr',
                          {
                            key: t,
                            ref: function(e) {
                              return (p.current[t] = e);
                            },
                          },
                          r.createElement(
                            'td',
                            { className: 'overline year' },
                            `${  new Date(n).getFullYear()}`,
                          ),
                          r.createElement('td', { className: 'title' }, m),
                          r.createElement(
                            'td',
                            { className: 'company hide-on-mobile' },
                            h
                              ? r.createElement('span', null, h)
                              : r.createElement('span', null, '—'),
                          ),
                          r.createElement(
                            'td',
                            { className: 'tech hide-on-mobile' },
                            s.length > 0 &&
                              s.map(function(e, t) {
                                return r.createElement(
                                  'span',
                                  { key: t },
                                  e,
                                  '',
                                  t !== s.length - 1 &&
                                    r.createElement('span', { className: 'separator' }, '·'),
                                );
                              }),
                          ),
                          r.createElement(
                            'td',
                            { className: 'links' },
                            r.createElement(
                              'div',
                              null,
                              i &&
                                r.createElement(
                                  'a',
                                  { href: i, 'aria-label': 'External Link' },
                                  r.createElement(o.JO, { name: 'External' }),
                                ),
                              l &&
                                r.createElement(
                                  'a',
                                  { href: l, 'aria-label': 'GitHub Link' },
                                  r.createElement(o.JO, { name: 'GitHub' }),
                                ),
                              d &&
                                r.createElement(
                                  'a',
                                  { href: d, 'aria-label': 'Apple App Store Link' },
                                  r.createElement(o.JO, { name: 'AppStore' }),
                                ),
                              c &&
                                r.createElement(
                                  'a',
                                  { href: c, 'aria-label': 'Google Play Store Link' },
                                  r.createElement(o.JO, { name: 'PlayStore' }),
                                ),
                            ),
                          ),
                        );
                      }),
                  ),
                ),
              ),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-archive-js-7d00bdd05ab286024bf0.js.map
