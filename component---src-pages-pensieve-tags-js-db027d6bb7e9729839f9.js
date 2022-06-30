(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [470],
  {
    2981: function(t, e, n) {
      'use strict';
      n.r(e);
      const r = n(7294);
      const u = n(5444);
      const o = n(1804);
      const f = n.n(o);
      const a = n(5414);
      const i = n(9);
      const c = n(7140);
      const l = i.ZP.main.withConfig({
        displayName: 'tags__StyledTagsContainer',
        componentId: 'sc-3n25qs-0',
      })([
        'max-width:1000px;h1{margin-bottom:50px;}ul{color:var(--light-slate);li{font-size:var(--fz-xxl);a{color:var(--light-slate);.count{color:var(--slate);font-family:var(--font-mono);font-size:var(--fz-md);}}}}',
      ]);
      e.default = function(t) {
        const e = t.data.allMarkdownRemark.group;
        const n = t.location;
        return r.createElement(
          c.Ar,
          { location: n },
          r.createElement(a.q, { title: 'Tags' }),
          r.createElement(
            l,
            null,
            r.createElement(
              'span',
              { className: 'breadcrumb' },
              r.createElement('span', { className: 'arrow' }, '←'),
              r.createElement(u.Link, { to: '/pensieve' }, 'All memories'),
            ),
            r.createElement('h1', null, 'Tags'),
            r.createElement(
              'ul',
              { className: 'fancy-list' },
              e.map(function(t) {
                return r.createElement(
                  'li',
                  { key: t.fieldValue },
                  r.createElement(
                    u.Link,
                    { to: `/pensieve/tags/${  f()(t.fieldValue)  }/`, className: 'inline-link' },
                    t.fieldValue,
                    ' ',
                    r.createElement('span', { className: 'count' }, '(', t.totalCount, ')'),
                  ),
                );
              }),
            ),
          ),
        );
      };
    },
    2705: function(t, e, n) {
      const r = n(5639).Symbol;
      t.exports = r;
    },
    9932: function(t) {
      t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, u = Array(r); ++n < r; ) {u[n] = e(t[n], n, t);}
        return u;
      };
    },
    2663: function(t) {
      t.exports = function(t, e, n, r) {
        let u = -1;
        const o = null == t ? 0 : t.length;
        for (r && o && (n = t[++u]); ++u < o; ) {n = e(n, t[u], u, t);}
        return n;
      };
    },
    9029: function(t) {
      const e = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      t.exports = function(t) {
        return t.match(e) || [];
      };
    },
    4239: function(t, e, n) {
      const r = n(2705);
      const u = n(9607);
      const o = n(2333);
      const f = r ? r.toStringTag : void 0;
      t.exports = function(t) {
        return null == t
          ? void 0 === t
            ? '[object Undefined]'
            : '[object Null]'
          : f && f in Object(t)
            ? u(t)
            : o(t);
      };
    },
    8674: function(t) {
      t.exports = function(t) {
        return function(e) {
          return null == t ? void 0 : t[e];
        };
      };
    },
    531: function(t, e, n) {
      const r = n(2705);
      const u = n(9932);
      const o = n(1469);
      const f = n(3448);
      const a = r ? r.prototype : void 0;
      const i = a ? a.toString : void 0;
      t.exports = function t(e) {
        if ('string' === typeof e) {return e;}
        if (o(e)) {return `${u(e, t)  }`;}
        if (f(e)) {return i ? i.call(e) : '';}
        const n = `${e  }`;
        return '0' == n && 1 / e == -Infinity ? '-0' : n;
      };
    },
    5393: function(t, e, n) {
      const r = n(2663);
      const u = n(3816);
      const o = n(8748);
      const f = RegExp('[\'’]', 'g');
      t.exports = function(t) {
        return function(e) {
          return r(o(u(e).replace(f, '')), t, '');
        };
      };
    },
    9389: function(t, e, n) {
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
      t.exports = r;
    },
    1957: function(t, e, n) {
      const r = 'object' === typeof n.g && n.g && n.g.Object === Object && n.g;
      t.exports = r;
    },
    9607: function(t, e, n) {
      const r = n(2705);
      const u = Object.prototype;
      const o = u.hasOwnProperty;
      const f = u.toString;
      const a = r ? r.toStringTag : void 0;
      t.exports = function(t) {
        const e = o.call(t, a);
        const n = t[a];
        try {
          t[a] = void 0;
          var r = !0;
        } catch (i) {}
        const u = f.call(t);
        return r && (e ? (t[a] = n) : delete t[a]), u;
      };
    },
    3157: function(t) {
      const e = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      t.exports = function(t) {
        return e.test(t);
      };
    },
    2333: function(t) {
      const e = Object.prototype.toString;
      t.exports = function(t) {
        return e.call(t);
      };
    },
    5639: function(t, e, n) {
      const r = n(1957);
      const u = 'object' === typeof self && self && self.Object === Object && self;
      const o = r || u || Function('return this')();
      t.exports = o;
    },
    2757: function(t) {
      const e = '\\u2700-\\u27bf';
      const n = 'a-z\\xdf-\\xf6\\xf8-\\xff';
      const r = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
      const u =
          '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
      const o = `[${  u  }]`;
      const f = '\\d+';
      const a = '[\\u2700-\\u27bf]';
      const i = `[${  n  }]`;
      const c = `[^\\ud800-\\udfff${  u  }${f  }${e  }${n  }${r  }]`;
      const l = '(?:\\ud83c[\\udde6-\\uddff]){2}';
      const s = '[\\ud800-\\udbff][\\udc00-\\udfff]';
      const x = `[${  r  }]`;
      const d = `(?:${  i  }|${  c  })`;
      const p = `(?:${  x  }|${  c  })`;
      const v = '(?:[\'’](?:d|ll|m|re|s|t|ve))?';
      const m = '(?:[\'’](?:D|LL|M|RE|S|T|VE))?';
      const g = '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?';
      const b = '[\\ufe0e\\ufe0f]?';
      const y = `${b + g  }(?:\\u200d(?:${  ['[^\\ud800-\\udfff]', l, s].join('|')  })${  b  }${g  })*`;
      const E = `(?:${  [a, l, s].join('|')  })${  y}`;
      const h = RegExp(
        [
          `${x  }?${  i  }+${  v  }(?=${  [o, x, '$'].join('|')  })`,
          `${p  }+${  m  }(?=${  [o, x + d, '$'].join('|')  })`,
          `${x  }?${  d  }+${  v}`,
          `${x  }+${  m}`,
          '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
          '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
          f,
          E,
        ].join('|'),
        'g',
      );
      t.exports = function(t) {
        return t.match(h) || [];
      };
    },
    3816: function(t, e, n) {
      const r = n(9389);
      const u = n(9833);
      const o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      const f = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
      t.exports = function(t) {
        return (t = u(t)) && t.replace(o, r).replace(f, '');
      };
    },
    1469: function(t) {
      const e = Array.isArray;
      t.exports = e;
    },
    7005: function(t) {
      t.exports = function(t) {
        return null != t && 'object' === typeof t;
      };
    },
    3448: function(t, e, n) {
      const r = n(4239);
      const u = n(7005);
      t.exports = function(t) {
        return 'symbol' === typeof t || (u(t) && '[object Symbol]' == r(t));
      };
    },
    1804: function(t, e, n) {
      const r = n(5393)(function(t, e, n) {
        return t + (n ? '-' : '') + e.toLowerCase();
      });
      t.exports = r;
    },
    9833: function(t, e, n) {
      const r = n(531);
      t.exports = function(t) {
        return null == t ? '' : r(t);
      };
    },
    8748: function(t, e, n) {
      const r = n(9029);
      const u = n(3157);
      const o = n(9833);
      const f = n(2757);
      t.exports = function(t, e, n) {
        return (
          (t = o(t)), void 0 === (e = n ? void 0 : e) ? (u(t) ? f(t) : r(t)) : t.match(e) || []
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-pensieve-tags-js-db027d6bb7e9729839f9.js.map
