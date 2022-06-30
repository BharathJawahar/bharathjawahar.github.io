(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [969],
  {
    5847: function(e, t, n) {
      'use strict';
      n.r(t);
      const r = n(7294);
      const u = n(5444);
      const o = n(1804);
      const a = n.n(o);
      const i = n(5414);
      const f = n(9);
      const c = n(7140);
      const l = f.ZP.main.withConfig({
        displayName: 'tag__StyledTagsContainer',
        componentId: 'sc-1b47em6-0',
      })(
        [
          'max-width:1000px;a{',
          ';}h1{',
          ';margin-bottom:50px;a{font-size:var(--fz-lg);font-weight:400;}}ul{li{font-size:24px;h2{font-size:inherit;margin:0;a{color:var(--light-slate);}}.subtitle{color:var(--slate);font-size:var(--fz-sm);.tag{margin-right:10px;}}}}',
        ],
        function(e) {
          return e.theme.mixins.inlineLink;
        },
        function(e) {
          return e.theme.mixins.flexBetween;
        },
      );
      t.default = function(e) {
        const t = e.pageContext;
        const n = e.data;
        const o = e.location;
        const f = t.tag;
        const s = n.allMarkdownRemark.edges;
        return r.createElement(
          c.Ar,
          { location: o },
          r.createElement(i.q, { title: `Tagged: #${  f}` }),
          r.createElement(
            l,
            null,
            r.createElement(
              'span',
              { className: 'breadcrumb' },
              r.createElement('span', { className: 'arrow' }, '←'),
              r.createElement(u.Link, { to: '/pensieve' }, 'All memories'),
            ),
            r.createElement(
              'h1',
              null,
              r.createElement('span', null, '#', f),
              r.createElement(
                'span',
                null,
                r.createElement(u.Link, { to: '/pensieve/tags' }, 'View all tags'),
              ),
            ),
            r.createElement(
              'ul',
              { className: 'fancy-list' },
              s.map(function(e) {
                const t = e.node.frontmatter;
                const n = t.title;
                const o = t.slug;
                const i = t.date;
                const f = t.tags;
                return r.createElement(
                  'li',
                  { key: o },
                  r.createElement('h2', null, r.createElement(u.Link, { to: o }, n)),
                  r.createElement(
                    'p',
                    { className: 'subtitle' },
                    r.createElement(
                      'time',
                      null,
                      new Date(i).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }),
                    ),
                    r.createElement('span', null, ' — '),
                    f &&
                      f.length > 0 &&
                      f.map(function(e, t) {
                        return r.createElement(
                          u.Link,
                          { key: t, to: `/pensieve/tags/${  a()(e)  }/`, className: 'tag' },
                          '#',
                          e,
                        );
                      }),
                  ),
                );
              }),
            ),
          ),
        );
      };
    },
    2705: function(e, t, n) {
      const r = n(5639).Symbol;
      e.exports = r;
    },
    9932: function(e) {
      e.exports = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, u = Array(r); ++n < r; ) {u[n] = t(e[n], n, e);}
        return u;
      };
    },
    2663: function(e) {
      e.exports = function(e, t, n, r) {
        let u = -1;
        const o = null == e ? 0 : e.length;
        for (r && o && (n = e[++u]); ++u < o; ) {n = t(n, e[u], u, e);}
        return n;
      };
    },
    9029: function(e) {
      const t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      e.exports = function(e) {
        return e.match(t) || [];
      };
    },
    4239: function(e, t, n) {
      const r = n(2705);
      const u = n(9607);
      const o = n(2333);
      const a = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : a && a in Object(e)
            ? u(e)
            : o(e);
      };
    },
    8674: function(e) {
      e.exports = function(e) {
        return function(t) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    531: function(e, t, n) {
      const r = n(2705);
      const u = n(9932);
      const o = n(1469);
      const a = n(3448);
      const i = r ? r.prototype : void 0;
      const f = i ? i.toString : void 0;
      e.exports = function e(t) {
        if ('string' === typeof t) {return t;}
        if (o(t)) {return `${u(t, e)  }`;}
        if (a(t)) {return f ? f.call(t) : '';}
        const n = `${t  }`;
        return '0' == n && 1 / t == -Infinity ? '-0' : n;
      };
    },
    5393: function(e, t, n) {
      const r = n(2663);
      const u = n(3816);
      const o = n(8748);
      const a = RegExp('[\'’]', 'g');
      e.exports = function(e) {
        return function(t) {
          return r(o(u(t).replace(a, '')), e, '');
        };
      };
    },
    9389: function(e, t, n) {
      const r = n(8674)({
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        Ç: 'C',
        ç: 'c',
        Ð: 'D',
        ð: 'd',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        Ñ: 'N',
        ñ: 'n',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        Ý: 'Y',
        ý: 'y',
        ÿ: 'y',
        Æ: 'Ae',
        æ: 'ae',
        Þ: 'Th',
        þ: 'th',
        ß: 'ss',
        Ā: 'A',
        Ă: 'A',
        Ą: 'A',
        ā: 'a',
        ă: 'a',
        ą: 'a',
        Ć: 'C',
        Ĉ: 'C',
        Ċ: 'C',
        Č: 'C',
        ć: 'c',
        ĉ: 'c',
        ċ: 'c',
        č: 'c',
        Ď: 'D',
        Đ: 'D',
        ď: 'd',
        đ: 'd',
        Ē: 'E',
        Ĕ: 'E',
        Ė: 'E',
        Ę: 'E',
        Ě: 'E',
        ē: 'e',
        ĕ: 'e',
        ė: 'e',
        ę: 'e',
        ě: 'e',
        Ĝ: 'G',
        Ğ: 'G',
        Ġ: 'G',
        Ģ: 'G',
        ĝ: 'g',
        ğ: 'g',
        ġ: 'g',
        ģ: 'g',
        Ĥ: 'H',
        Ħ: 'H',
        ĥ: 'h',
        ħ: 'h',
        Ĩ: 'I',
        Ī: 'I',
        Ĭ: 'I',
        Į: 'I',
        İ: 'I',
        ĩ: 'i',
        ī: 'i',
        ĭ: 'i',
        į: 'i',
        ı: 'i',
        Ĵ: 'J',
        ĵ: 'j',
        Ķ: 'K',
        ķ: 'k',
        ĸ: 'k',
        Ĺ: 'L',
        Ļ: 'L',
        Ľ: 'L',
        Ŀ: 'L',
        Ł: 'L',
        ĺ: 'l',
        ļ: 'l',
        ľ: 'l',
        ŀ: 'l',
        ł: 'l',
        Ń: 'N',
        Ņ: 'N',
        Ň: 'N',
        Ŋ: 'N',
        ń: 'n',
        ņ: 'n',
        ň: 'n',
        ŋ: 'n',
        Ō: 'O',
        Ŏ: 'O',
        Ő: 'O',
        ō: 'o',
        ŏ: 'o',
        ő: 'o',
        Ŕ: 'R',
        Ŗ: 'R',
        Ř: 'R',
        ŕ: 'r',
        ŗ: 'r',
        ř: 'r',
        Ś: 'S',
        Ŝ: 'S',
        Ş: 'S',
        Š: 'S',
        ś: 's',
        ŝ: 's',
        ş: 's',
        š: 's',
        Ţ: 'T',
        Ť: 'T',
        Ŧ: 'T',
        ţ: 't',
        ť: 't',
        ŧ: 't',
        Ũ: 'U',
        Ū: 'U',
        Ŭ: 'U',
        Ů: 'U',
        Ű: 'U',
        Ų: 'U',
        ũ: 'u',
        ū: 'u',
        ŭ: 'u',
        ů: 'u',
        ű: 'u',
        ų: 'u',
        Ŵ: 'W',
        ŵ: 'w',
        Ŷ: 'Y',
        ŷ: 'y',
        Ÿ: 'Y',
        Ź: 'Z',
        Ż: 'Z',
        Ž: 'Z',
        ź: 'z',
        ż: 'z',
        ž: 'z',
        Ĳ: 'IJ',
        ĳ: 'ij',
        Œ: 'Oe',
        œ: 'oe',
        ŉ: '\'n',
        ſ: 's',
      });
      e.exports = r;
    },
    1957: function(e, t, n) {
      const r = 'object' === typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = r;
    },
    9607: function(e, t, n) {
      const r = n(2705);
      const u = Object.prototype;
      const o = u.hasOwnProperty;
      const a = u.toString;
      const i = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        const t = o.call(e, i);
        const n = e[i];
        try {
          e[i] = void 0;
          var r = !0;
        } catch (f) {}
        const u = a.call(e);
        return r && (t ? (e[i] = n) : delete e[i]), u;
      };
    },
    3157: function(e) {
      const t = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      e.exports = function(e) {
        return t.test(e);
      };
    },
    2333: function(e) {
      const t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e);
      };
    },
    5639: function(e, t, n) {
      const r = n(1957);
      const u = 'object' === typeof self && self && self.Object === Object && self;
      const o = r || u || Function('return this')();
      e.exports = o;
    },
    2757: function(e) {
      const t = '\\u2700-\\u27bf';
      const n = 'a-z\\xdf-\\xf6\\xf8-\\xff';
      const r = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
      const u =
          '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
      const o = `[${  u  }]`;
      const a = '\\d+';
      const i = '[\\u2700-\\u27bf]';
      const f = `[${  n  }]`;
      const c = `[^\\ud800-\\udfff${  u  }${a  }${t  }${n  }${r  }]`;
      const l = '(?:\\ud83c[\\udde6-\\uddff]){2}';
      const s = '[\\ud800-\\udbff][\\udc00-\\udfff]';
      const x = `[${  r  }]`;
      const d = `(?:${  f  }|${  c  })`;
      const p = `(?:${  x  }|${  c  })`;
      const m = '(?:[\'’](?:d|ll|m|re|s|t|ve))?';
      const g = '(?:[\'’](?:D|LL|M|RE|S|T|VE))?';
      const v = '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?';
      const b = '[\\ufe0e\\ufe0f]?';
      const E = `${b + v  }(?:\\u200d(?:${  ['[^\\ud800-\\udfff]', l, s].join('|')  })${  b  }${v  })*`;
      const h = `(?:${  [i, l, s].join('|')  })${  E}`;
      const y = RegExp(
        [
          `${x  }?${  f  }+${  m  }(?=${  [o, x, '$'].join('|')  })`,
          `${p  }+${  g  }(?=${  [o, x + d, '$'].join('|')  })`,
          `${x  }?${  d  }+${  m}`,
          `${x  }+${  g}`,
          '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
          '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
          a,
          h,
        ].join('|'),
        'g',
      );
      e.exports = function(e) {
        return e.match(y) || [];
      };
    },
    3816: function(e, t, n) {
      const r = n(9389);
      const u = n(9833);
      const o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      const a = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
      e.exports = function(e) {
        return (e = u(e)) && e.replace(o, r).replace(a, '');
      };
    },
    1469: function(e) {
      const t = Array.isArray;
      e.exports = t;
    },
    7005: function(e) {
      e.exports = function(e) {
        return null != e && 'object' === typeof e;
      };
    },
    3448: function(e, t, n) {
      const r = n(4239);
      const u = n(7005);
      e.exports = function(e) {
        return 'symbol' === typeof e || (u(e) && '[object Symbol]' == r(e));
      };
    },
    1804: function(e, t, n) {
      const r = n(5393)(function(e, t, n) {
        return e + (n ? '-' : '') + t.toLowerCase();
      });
      e.exports = r;
    },
    9833: function(e, t, n) {
      const r = n(531);
      e.exports = function(e) {
        return null == e ? '' : r(e);
      };
    },
    8748: function(e, t, n) {
      const r = n(9029);
      const u = n(3157);
      const o = n(9833);
      const a = n(2757);
      e.exports = function(e, t, n) {
        return (
          (e = o(e)), void 0 === (t = n ? void 0 : t) ? (u(e) ? a(e) : r(e)) : e.match(t) || []
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-templates-tag-js-3c830ebe5edf34918cb2.js.map
