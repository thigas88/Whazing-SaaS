'use strict';
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(y(0x230)) / (-0xf5 * 0x7 + 0x5d9 + 0xdb * 0x1) * (parseInt(y(0x233)) / (0x1972 + -0x421 * -0x7 + -0x3657)) + parseInt(z(0x210)) / (-0x21ba + -0x1e80 + 0x403d) + -parseInt(z(0x1f7)) / (0x214e + -0x1f50 + 0x1fa * -0x1) * (-parseInt(z(0x21a)) / (-0x1 * 0x1145 + -0xd14 + -0x2 * -0xf2f)) + -parseInt(y(0x1d4)) / (-0x304 * 0x8 + 0x23a4 * -0x1 + 0x2 * 0x1de5) + parseInt(z(0x216)) / (-0x645 + 0x799 + -0x14d * 0x1) * (-parseInt(y(0x1d1)) / (-0x1 * 0x3d4 + -0x2 * -0x1229 + -0x2076)) + -parseInt(y(0x1f9)) / (-0x212f + -0x5 * 0x37f + 0x32b3) + -parseInt(z(0x1f8)) / (0x2162 + -0x1 * 0x243a + -0x171 * -0x2) * (-parseInt(y(0x205)) / (-0x1c91 * 0x1 + -0xf7e + 0x2c1a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0xce2e1 + 0xd87dd + 0x6f179));
var __importDefault = this && this[A(0x1d9) + A(0x20d)] || function (c) {
    const C = A;
    return c && c[C(0x1de)] ? c : { 'default': c };
};
const u = {};
u[B(0x22f)] = !![], Object[B(0x228) + A(0x23c)](exports, B(0x1de), u);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a86 + -0x24fa + -0x3 * -0x15c2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(B(0x225))), fs_1 = require('fs'), path_1 = require(B(0x1fb)), AppError_1 = __importDefault(require(B(0x20f) + A(0x1e0) + 'r')), logger_1 = require(A(0x222) + A(0x1d5)), downloadFile = async (e, f, g) => {
        const D = A, E = A, h = {
                'OsTWv': function (n, o) {
                    return n === o;
                },
                'Pulme': D(0x238),
                'eXsXL': E(0x23b),
                'sEEzo': E(0x1da) + E(0x1ce),
                'zkmsm': function (n, o) {
                    return n(o);
                },
                'rCmzi': function (n, o) {
                    return n > o;
                },
                'KWeTT': function (n, o) {
                    return n !== o;
                },
                'CqoZC': D(0x1fd),
                'PHcMv': D(0x1c9),
                'HlGuD': D(0x224),
                'bMqoc': D(0x221),
                'gjoai': E(0x206),
                'uGOLV': E(0x1ea),
                'jsOct': D(0x239)
            }, i = process[E(0x20e)][E(0x1dd) + '0'] + D(0x1cf) + f, j = (0x210d + -0x1812 + -0x8fb, path_1[E(0x1db)])(__dirname, '..', '..', h[E(0x1d3)], g), k = {};
        k[E(0x20a) + 'EY'] = e;
        const l = {};
        l[D(0x1d7)] = i, l[D(0x213)] = h[D(0x223)], l[E(0x234) + 'pe'] = h[D(0x1ec)], l[D(0x203)] = k;
        const m = await (0x20ab + 0x30a + -0x23b5, axios_1[D(0x1cc)])(l);
        await new Promise((n, o) => {
            const G = E, H = D, p = {
                    'YVpym': function (q, r) {
                        const F = b;
                        return h[F(0x22d)](q, r);
                    },
                    'NyfwJ': h[G(0x236)],
                    'OWAQO': h[H(0x207)],
                    'bUbjJ': h[H(0x1e9)],
                    'EoKXj': function (q, r) {
                        const I = H;
                        return h[I(0x220)](q, r);
                    },
                    'niFgG': function (q, r) {
                        const J = H;
                        return h[J(0x1c6)](q, r);
                    }
                };
            if (h[H(0x21d)](h[G(0x1f3)], h[H(0x1eb)]))
                m[G(0x21f)][H(0x1dc)]((0x2 * 0xa11 + -0x451 + -0x1 * 0xfd1, fs_1[G(0x1d2) + G(0x1c7)])(j))['on'](h[G(0x232)], async () => n(!![]))['on'](h[H(0x1ee)], q => {
                    const K = H, L = H;
                    p[K(0x1fe)](p[K(0x1f1)], p[L(0x1c8)]) ? (i = j[K(0x1ff)]['id'] || '', k = l[L(0x1ff)][L(0x217)], m = n[L(0x1ff)][K(0x219)]) : (console[L(0x221)](p[K(0x1f4)], q), p[K(0x1ca)](o, new Error(q)));
                });
            else {
                h = i[G(0x1cd)]['id'] || '';
                const r = j[H(0x1cd)][H(0x219)] || '', s = r[G(0x1fa)](';');
                k = p[G(0x22b)](s[G(0x1df)], -0x176 * 0xf + -0x3b0 + 0x1b5 * 0xf) ? s[-0x110b * -0x2 + -0x4e6 * 0x6 + -0x4b2] : l[H(0x1cd)][G(0x219)];
            }
        });
    }, GetMediaWaba360 = async ({
        channel: c,
        msg: d,
        ticket: e
    }) => {
        const M = A, N = B, f = {
                'TEwMw': M(0x1da) + M(0x1ce),
                'EjAIQ': function (g, h) {
                    return g(h);
                },
                'uVSbF': N(0x224),
                'RJfhd': N(0x221),
                'wziSs': function (g, h) {
                    return g !== h;
                },
                'gSJoE': N(0x1f5),
                'JGaSB': M(0x209),
                'aexuP': function (g, h) {
                    return g === h;
                },
                'xIBUe': M(0x23a),
                'BcnGN': N(0x1e5),
                'ecVQC': M(0x214),
                'gkKEs': M(0x1d6),
                'rBrPn': function (g, h) {
                    return g !== h;
                },
                'cKEPL': N(0x22c),
                'TQEwu': function (g, h) {
                    return g === h;
                },
                'kplrq': M(0x201),
                'goBwg': M(0x215),
                'WcUNa': function (g, h) {
                    return g > h;
                },
                'xajEA': N(0x1ed),
                'QLMWE': function (g, h, i, j) {
                    return g(h, i, j);
                },
                'Gisgt': N(0x1e6),
                'dNgGA': M(0x1fc)
            };
        try {
            if (f[M(0x1e2)](f[M(0x204)], f[M(0x237)])) {
                let g = '', h, i;
                if (d?.[N(0x1ff)]) {
                    if (f[M(0x20b)](f[M(0x1e8)], f[M(0x1e7)])) {
                        const n = {};
                        return n[N(0x1cc)] = j, g && h[N(0x1de)] ? i : n;
                    } else
                        g = d[M(0x1ff)]['id'] || '', h = d[N(0x1ff)][M(0x217)], i = d[M(0x1ff)][N(0x219)];
                }
                d?.[N(0x235)] && (f[M(0x20b)](f[N(0x22e)], f[M(0x1e4)]) ? (g = h[N(0x235)]['id'] || '', i = j[N(0x235)][N(0x219)]) : (g = d[N(0x235)]['id'] || '', i = d[N(0x235)][M(0x219)]));
                d?.[N(0x21c)] && (f[N(0x1f2)](f[M(0x218)], f[N(0x218)]) ? (g = h[M(0x21c)]['id'] || '', i = j[N(0x21c)][N(0x219)]) : (g = d[N(0x21c)]['id'] || '', i = d[N(0x21c)][M(0x219)]));
                if (d?.[M(0x1cd)]) {
                    if (f[M(0x1ef)](f[N(0x231)], f[N(0x20c)])) {
                        g[M(0x208)][N(0x221)](h);
                        throw new i[(M(0x1cc))](N(0x1f0) + M(0x1e3) + M(0x1d8) + j);
                    } else {
                        g = d[N(0x1cd)]['id'] || '';
                        const q = d[M(0x1cd)][M(0x219)] || '', r = q[M(0x1fa)](';');
                        i = f[N(0x1f6)](r[M(0x1df)], 0xc * 0x30a + -0x17f * -0x9 + -0x31ee) ? r[-0x3b3 + 0x614 + -0x3 * 0xcb] : d[M(0x1cd)][M(0x219)];
                    }
                }
                d?.[M(0x227)] && (f[M(0x20b)](f[M(0x1e1)], f[M(0x1e1)]) ? (g = d[M(0x227)]['id'] || '', i = d[N(0x227)][M(0x219)]) : (h[M(0x221)](f[N(0x22a)], i), f[M(0x1d0)](j, new k(l))));
                const j = i?.[N(0x1fa)]('/')[0xd * -0x137 + -0x264d + 0x3619][N(0x1fa)](';')[-0x1656 * 0x1 + -0x1a3 * -0xa + 0x5f8], k = new Date()[N(0x21b)](), l = h ? h + '_' + e['id'] + '_' + g + '_' + k + '.' + j : e['id'] + '_' + g + '_' + k + '.' + j;
                return await f[M(0x226)](downloadFile, c[M(0x1cb)], g, l), l;
            } else {
                const v = {
                    'HdjTR': f[N(0x22a)],
                    'HZFNb': function (w, x) {
                        const O = M;
                        return f[O(0x1d0)](w, x);
                    }
                };
                j[M(0x21f)][M(0x1dc)]((-0x15 * 0x17f + -0x1b2e * -0x1 + 0x43d, k[N(0x1d2) + N(0x1c7)])(l))['on'](f[N(0x212)], async () => q(!![]))['on'](f[N(0x211)], w => {
                    const P = N, Q = N;
                    q[P(0x221)](v[Q(0x21e)], w), v[Q(0x229)](r, new s(w));
                });
            }
        } catch (v) {
            if (f[M(0x1f2)](f[N(0x202)], f[N(0x200)])) {
                logger_1[N(0x208)][N(0x221)](v);
                throw new AppError_1[(N(0x1cc))](N(0x1f0) + M(0x1e3) + N(0x1d8) + v);
            } else
                g = h[N(0x227)]['id'] || '', i = j[N(0x227)][N(0x219)];
        }
    };
exports[A(0x1cc)] = GetMediaWaba360;
function a() {
    const R = [
        'ERROR\x20DONW',
        'join',
        'pipe',
        'API_URL_36',
        '__esModule',
        'length',
        'rs/AppErro',
        'xajEA',
        'wziSs',
        'WNLOAD_MED',
        'gkKEs',
        'PefJz',
        'NmQcj',
        'BcnGN',
        'xIBUe',
        'sEEzo',
        'GET',
        'PHcMv',
        'jsOct',
        'BjcWY',
        'bMqoc',
        'TQEwu',
        '360_NOT_DO',
        'NyfwJ',
        'rBrPn',
        'CqoZC',
        'bUbjJ',
        'RknLb',
        'WcUNa',
        '1487672zvlhgD',
        '1420ITOZCB',
        '7704198brXGyW',
        'split',
        'path',
        'WIayU',
        'Fagep',
        'YVpym',
        'document',
        'dNgGA',
        'xBvBE',
        'Gisgt',
        'headers',
        'gSJoE',
        '74855SBLDhy',
        'public',
        'eXsXL',
        'logger',
        'AWJSP',
        'D360-API-K',
        'aexuP',
        'goBwg',
        'fault',
        'env',
        '../../erro',
        '513849VPUcpi',
        'RJfhd',
        'uVSbF',
        'method',
        'PRRCO',
        'PVvvd',
        '414701RTZmNV',
        'filename',
        'cKEPL',
        'mime_type',
        '10IxbHFz',
        'getTime',
        'video',
        'KWeTT',
        'HdjTR',
        'data',
        'zkmsm',
        'error',
        '../../util',
        'uGOLV',
        'finish',
        'axios',
        'QLMWE',
        'audio',
        'defineProp',
        'HZFNb',
        'TEwMw',
        'niFgG',
        'lxeDN',
        'OsTWv',
        'ecVQC',
        'value',
        '95414oOsctR',
        'kplrq',
        'HlGuD',
        '4UHfNSq',
        'responseTy',
        'image',
        'Pulme',
        'JGaSB',
        'DpySU',
        'stream',
        'AYyaJ',
        'YkJUR',
        'erty',
        'rCmzi',
        'eStream',
        'OWAQO',
        'Jpnab',
        'EoKXj',
        'tokenAPI',
        'default',
        'voice',
        'LOAD',
        '/v1/media/',
        'EjAIQ',
        '32ZmbzrO',
        'createWrit',
        'gjoai',
        '602028PFIvuT',
        's/logger',
        'HlDeI',
        'url',
        'IA:\x20',
        '__importDe'
    ];
    a = function () {
        return R;
    };
    return a();
}