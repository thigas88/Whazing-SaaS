'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0xcd)) / (-0x3fa * 0x6 + 0x1 * -0x1487 + -0xc * -0x3b3) + parseInt(F(0x149)) / (0x1 * 0xf8e + -0x1ed9 + -0xf4d * -0x1) * (parseInt(G(0x125)) / (-0x2 * -0x74 + 0x3ef + -0x135 * 0x4)) + parseInt(G(0x145)) / (0x7c3 + 0x1952 + 0x5 * -0x69d) * (parseInt(G(0x11a)) / (0x1 * 0x21a1 + 0x1d26 + 0x3a * -0x115)) + parseInt(F(0x139)) / (0xd91 + -0x6bb + -0x6d0) + parseInt(G(0xd2)) / (0xc59 * -0x3 + -0x1a87 * 0x1 + 0x3f99) + parseInt(F(0x153)) / (-0xd * -0x15a + -0x99e + -0x7ec) * (parseInt(G(0xe1)) / (0x11e1 * -0x2 + 0x9ca + 0x8ab * 0x3)) + -parseInt(G(0xee)) / (0x2b + 0x1bfe + -0x1c1f * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe45 * 0x9e + 0x16 * -0x320d + 0x60aba));
var __importDefault = this && this[H(0x11b) + H(0xd4)] || function (c) {
    const J = I;
    return c && c[J(0x11d)] ? c : { 'default': c };
};
const E = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb2d + 0x4 * 0x30e + -0x16b0 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
E[H(0xb7)] = !![], Object[I(0xd5) + I(0xf8)](exports, I(0x11d), E);
const pupa_1 = require(I(0xb9) + H(0xe2)), date_fns_1 = require(I(0x137)), date_fns_tz_1 = require(H(0x143) + 'z'), Campaign_1 = __importDefault(require(H(0xda) + I(0x13c) + 'n')), AppError_1 = __importDefault(require(I(0x134) + I(0xe4) + 'r')), CampaignContacts_1 = __importDefault(require(H(0xda) + H(0x13c) + I(0xc7))), Queue_1 = __importDefault(require(H(0x113) + H(0x108))), cArquivoName = d => {
        const K = H, L = I, e = {};
        e[K(0xdb)] = function (i, j) {
            return i - j;
        };
        const f = e;
        if (!d)
            return '';
        const g = d[K(0xe5)]('/'), h = g[f[L(0xdb)](g[K(0x142)], -0x1463 + -0x1cb4 * 0x1 + 0x3118)];
        return h;
    }, randomInteger = (d, e) => {
        const M = H, N = H, f = {};
        f[M(0xea)] = function (h, i) {
            return h + i;
        }, f[M(0x129)] = function (h, i) {
            return h * i;
        }, f[N(0x122)] = function (h, i) {
            return h + i;
        }, f[M(0xd9)] = function (h, i) {
            return h - i;
        };
        const g = f;
        return g[M(0xea)](Math[M(0xd8)](g[M(0x129)](Math[M(0xf9)](), g[N(0x122)](g[M(0xd9)](e, d), -0x187 * -0x19 + -0x220e + -0x8 * 0x84))), d);
    }, mountMessageData = (d, e, f) => {
        const O = I, P = I, g = {
                'eJQAh': function (k, l, m) {
                    return k(l, m);
                },
                'pdJNg': function (k, l) {
                    return k === l;
                },
                'lPdzD': function (k, l) {
                    return k === l;
                },
                'TqrGT': function (k, l) {
                    return k === l;
                },
                'ZSLHk': function (k, l) {
                    return k || l;
                },
                'uHMbh': function (k, l) {
                    return k(l);
                }
            }, h = g[O(0x10a)](randomInteger, -0x398 + 0x17f0 * 0x1 + 0x1 * -0x1457, 0xbfe + 0xbb8 + -0x17b3);
        let i = '';
        if (g[O(0x117)](h, -0x71f * -0x3 + -0x115 * 0x14 + 0x48))
            i = d[P(0xd1)];
        if (g[O(0xbf)](h, 0x9b * -0xa + -0x5 * -0x22d + -0x4d1))
            i = d[O(0x159)];
        if (g[P(0xf2)](h, 0x39 * -0x53 + -0x4f0 * -0x4 + -0x142))
            i = d[O(0x13e)];
        const j = {};
        return j[P(0x140)] = e[P(0x10d)][O(0x140)], i = (0x20d1 * 0x1 + 0x14f * -0x1 + -0x2 * 0xfc1, pupa_1[O(0xb6)])(g[O(0x11f)](i, ''), j), {
            'whatsappId': d[O(0x106)],
            'message': i,
            'number': e[P(0x10d)][O(0x13a)],
            'mediaUrl': d[P(0x146)],
            'mediaName': g[O(0xbc)](cArquivoName, d[O(0x146)]),
            'messageRandom': O(0x12f) + h,
            'campaignContact': e,
            'options': f
        };
    }, nextDayHoursValid = d => {
        const Q = H, R = H, e = {
                'Qoock': function (o, p) {
                    return o / p;
                },
                'uWzYo': function (o, p, q, r) {
                    return o(p, q, r);
                },
                'QrvqS': function (o, p, q) {
                    return o(p, q);
                },
                'ftXpA': Q(0xec) + R(0x144) + Q(0xc3),
                'jwhLm': Q(0x130) + R(0x12c) + Q(0xf5) + 'TS',
                'eSJWj': function (o, p) {
                    return o + p;
                },
                'fuOsU': function (o, p) {
                    return o * p;
                },
                'VLloD': function (o, p) {
                    return o < p;
                },
                'HtkSB': function (o, p) {
                    return o !== p;
                },
                'UiYAl': Q(0x110),
                'vKtVV': R(0x14c),
                'KXOVk': Q(0xc1),
                'CIXDw': R(0xfe),
                'vRFam': R(0xfd),
                'wOWec': Q(0x128),
                'HuqIK': R(0x154),
                'dqlNz': function (o, p) {
                    return o && p;
                },
                'UyhtY': Q(0x109),
                'GbMwc': R(0xbe),
                'UfUgk': function (o, p) {
                    return o && p;
                },
                'KKhpk': function (o, p) {
                    return o === p;
                },
                'pIGpk': R(0xfc),
                'MxkeB': R(0x103),
                'MFLHD': function (o, p) {
                    return o && p;
                },
                'TyUxV': function (o, p) {
                    return o > p;
                },
                'VslKD': R(0x10f),
                'lDWub': Q(0xfb)
            };
        let f = d;
        const g = new Date(), h = (0xc09 + 0x2 * -0x867 + -0x3 * -0x197, date_fns_1[Q(0x155) + R(0x123)])(f, new Date());
        if (e[Q(0x11e)](h, -0xcc2 * 0x2 + 0x4f * 0x14 + -0x1 * -0x1358)) {
            if (e[R(0x105)](e[R(0xe9)], e[R(0x107)]))
                f = (-0x7c6 * 0x5 + -0x1060 + -0x2 * -0x1b9f, date_fns_1[R(0xd3)])(f, e[Q(0x131)](h, -(0x1578 + -0x22fe + 0xd87)));
            else {
                const p = {};
                return p[Q(0x147)] = j, g && h[Q(0x11d)] ? i : p;
            }
        }
        if (e[Q(0x11e)](f[Q(0x127)](), g[R(0x127)]())) {
            if (e[Q(0x105)](e[Q(0x158)], e[Q(0xc4)]))
                f = (0x157d + -0xf19 * -0x2 + 0x1 * -0x33af, date_fns_1[R(0x14b)])((0x2133 + 0x1ee4 + -0x3 * 0x155d, date_fns_1[R(0xe3)])(f, g[Q(0xca)]()), g[Q(0x150)]());
            else
                return q = (-0xb5 + -0x1 * -0x4db + 0x162 * -0x3, r[Q(0x104)])(s, e[R(0x116)](t, -0x8be * -0x1 + -0x857 * -0x2 + -0x1584)), e[Q(0x121)](u, v, w, {
                    ...x,
                    'jobId': R(0xeb) + '_' + y['id'] + Q(0xf3) + z[R(0xcb)] + R(0xf0) + A['id'],
                    'delay': e[R(0xf4)](B, C, D)
                });
        }
        const i = (0x2 * 0xe41 + -0x471 + -0x1811, date_fns_1[Q(0xf1)])(e[Q(0xc0)], e[Q(0x157)], f), j = (-0x4b0 + 0x155f + -0x10af, date_fns_1[R(0xf1)])(e[R(0xbb)], e[Q(0x157)], f), k = {};
        k[R(0x132)] = i, k[Q(0x12e)] = j;
        const l = (0xe95 * 0x1 + 0x3 * -0x511 + -0x2 * -0x4f, date_fns_1[Q(0xdc) + Q(0x148)])(f, k), m = (-0x2627 + -0x1039 * -0x1 + -0x15ee * -0x1, date_fns_1[R(0xe7)])(i, f), n = (-0xd8 * -0x16 + -0xac1 + 0x7cf * -0x1, date_fns_1[Q(0xff)])(j, f);
        if (e[R(0xbd)](!l, m)) {
            if (e[R(0x105)](e[Q(0x13b)], e[R(0x102)]))
                f = (-0x47a + 0xb64 + 0x6ea * -0x1, date_fns_1[R(0x14b)])((-0x11e6 + 0x1 * 0xf32 + -0x4 * -0xad, date_fns_1[R(0xe3)])(f, -0x51b + 0xce4 + -0x7c1 * 0x1), 0x1d93 + -0x1c58 + -0x11d);
            else
                throw new d[(Q(0x147))](e[Q(0x13f)], -0x1261 + -0x1346 * -0x2 + -0x1297);
        }
        if (e[Q(0x12a)](!l, n) && e[R(0x115)](h, 0x727 * 0x1 + 0x7 * 0x367 + -0x2 * 0xf7c)) {
            if (e[Q(0x115)](e[R(0x138)], e[Q(0x12d)]))
                throw new d[(R(0x147))](e[Q(0xc2)], 0x13e4 * -0x1 + -0x184c * 0x1 + 0x2dc4);
            else
                f = (-0x5 * -0xaa + 0xafa + 0x4c4 * -0x3, date_fns_1[Q(0xd3)])((-0x35 * -0x47 + 0x549 + -0x13fc, date_fns_1[R(0xe3)])(f, -0x204 + 0x5ab * -0x2 + 0xd62), 0xb51 + 0x21b0 + -0x6 * 0x780);
        }
        if (e[Q(0x133)](!l, n) && e[R(0x112)](h, 0xa15 + 0x3 * -0x371 + 0x3e)) {
            if (e[R(0x115)](e[Q(0x141)], e[Q(0x126)])) {
                const t = (-0x1 * 0x144a + -0x4 * 0x433 + -0x65 * -0x5e, g[R(0x155) + R(0xdf)])(h, new i());
                return e[Q(0x14a)](e[Q(0x131)](t, 0xd5 * 0x9 + 0x1618 + -0x19ad), j);
            } else
                f = (0x75 * 0x2d + 0x1 * -0x1fdf + 0xb4e, date_fns_1[Q(0xe3)])(f, -0x152 + -0x4c6 + -0xe0 * -0x7);
        }
        return f;
    }, calcDelay = (d, e) => {
        const S = I, T = H, f = {};
        f[S(0xe0)] = function (i, j) {
            return i + j;
        }, f[S(0xcf)] = function (i, j) {
            return i * j;
        };
        const g = f, h = (-0x2417 + 0xa1 * -0x3a + 0x4891, date_fns_1[T(0x155) + S(0xdf)])(d, new Date());
        return g[T(0xe0)](g[S(0xcf)](h, -0x1 * -0x919 + -0x1 * 0x2125 + -0xdfa * -0x2), e);
    }, StartCampaignService = async ({
        campaignId: h,
        tenantId: i,
        options: j
    }) => {
        const U = I, V = I, k = {
                'FQfEX': function (v, w) {
                    return v * w;
                },
                'netzr': function (v, w) {
                    return v + w;
                },
                'LVttU': function (v, w) {
                    return v + w;
                },
                'bAWqr': function (v, w) {
                    return v - w;
                },
                'GCZsU': function (v, w) {
                    return v !== w;
                },
                'pOglE': U(0x156),
                'fCLmR': function (v, w) {
                    return v / w;
                },
                'JbvLG': function (v, w, x, y) {
                    return v(w, x, y);
                },
                'WyUeQ': function (v, w, x) {
                    return v(w, x);
                },
                'ZPatS': U(0x10e),
                'ojQXx': function (v, w) {
                    return v === w;
                },
                'vCVXg': U(0xdd),
                'yGGfy': V(0xec) + V(0x144) + V(0xc3),
                'GGEtF': V(0x10d),
                'lyAzQ': U(0x14e),
                'TtgbI': U(0x130) + U(0x12c) + U(0xf5) + 'TS',
                'RUdRn': function (v, w) {
                    return v * w;
                },
                'NBqSQ': V(0x119) + U(0x111),
                'qFedl': V(0xfa) + U(0x120) + U(0x10c),
                'YMMqW': V(0xcc)
            }, l = {};
        l['id'] = h, l[U(0xc8)] = i;
        const m = {};
        m[V(0xb8)] = l, m[U(0xd7)] = [k[V(0x152)]];
        const n = await Campaign_1[U(0x147)][V(0xce)](m);
        if (!n) {
            if (k[V(0x151)](k[U(0xd6)], k[V(0xd6)]))
                throw new AppError_1[(U(0x147))](k[V(0xc6)], 0x1a3 * 0x11 + -0x1 * -0x8a1 + -0x22e0);
            else
                u = (0xcf * 0x1f + 0x1 * 0x1c86 + -0x11 * 0x327, h[V(0xd3)])(i, k[V(0xe8)](j, -(0xd6b + 0x17d3 + 0x253d * -0x1)));
        }
        const o = {};
        o[V(0xef)] = h;
        const p = {};
        p[V(0xb8)] = o, p[V(0xd7)] = [k[V(0xde)]];
        const q = await CampaignContacts_1[U(0x147)][U(0x12b)](p);
        if (!q) {
            if (k[V(0xc5)](k[U(0xc9)], k[V(0xc9)]))
                p = (0x24aa + -0x2f2 + -0x34 * 0xa6, u[V(0xe3)])(h, -0xc * 0xb6 + -0xdb * 0x2b + 0x2d59);
            else
                throw new AppError_1[(V(0x147))](k[V(0xb5)], -0x1 * -0x1201 + -0x9e2 + 0x43 * -0x19);
        }
        const r = n[V(0x118)] ? k[U(0x11c)](n[V(0x118)], -0x258b + 0x1 * -0x25b9 + 0x4f2c) : 0x4e72 + 0x9b2f * -0x1 + 0x5 * 0x1ef9;
        let s = (0x199 + -0x2d8 * -0x5 + -0xfd1, date_fns_tz_1[V(0xba) + U(0x124)])(n[U(0x132)], k[U(0x10b)]);
        const t = q[V(0xd0)](x => {
            const W = U, X = V;
            return k[W(0xc5)](k[W(0x100)], k[X(0x100)]) ? k[W(0xf6)](h[W(0xd8)](k[X(0xe8)](i[X(0xf9)](), k[W(0xe6)](k[X(0x13d)](j, k), -0x141e + 0x3 * -0x71b + 0x2970))), l) : (s = (0x23a6 + 0x796 + 0x159e * -0x2, date_fns_1[X(0x104)])(s, k[W(0x14d)](r, 0x266b + 0x74b + -0x29ce * 0x1)), k[X(0x101)](mountMessageData, n, x, {
                ...j,
                'jobId': W(0xeb) + '_' + n['id'] + W(0xf3) + x[X(0xcb)] + W(0xf0) + x['id'],
                'delay': k[W(0xf7)](calcDelay, s, r)
            }));
        });
        Queue_1[U(0x147)][U(0x135)](k[U(0x14f)], t);
        const u = {};
        u[U(0x136)] = k[U(0x114)], await n[V(0xed)](u);
    };
exports[I(0x147)] = StartCampaignService;
function a() {
    const Y = [
        'AIGN_NOT_E',
        '8wrYwQS',
        'mediaUrl',
        'default',
        'terval',
        '15114aHStYh',
        'eSJWj',
        'setMinutes',
        'RDDRR',
        'fCLmR',
        'BVPIL',
        'qFedl',
        'getMinutes',
        'ojQXx',
        'ZPatS',
        '8CunTMh',
        '20:00',
        'difference',
        'ToeIr',
        'wOWec',
        'KXOVk',
        'message2',
        'TtgbI',
        'pupa',
        'value',
        'where',
        '../../util',
        'zonedTimeT',
        'HuqIK',
        'uHMbh',
        'dqlNz',
        'fLFeD',
        'lPdzD',
        'vRFam',
        'hICvk',
        'jwhLm',
        'XISTS',
        'CIXDw',
        'GCZsU',
        'yGGfy',
        'nContacts',
        'tenantId',
        'lyAzQ',
        'getHours',
        'contactId',
        'scheduled',
        '32804ZAKBmq',
        'findOne',
        'jPKpD',
        'map',
        'message1',
        '4073020wtENzh',
        'addDays',
        'fault',
        'defineProp',
        'vCVXg',
        'include',
        'floor',
        'ahjNU',
        '../../mode',
        'mIlzo',
        'isWithinIn',
        'iTNQN',
        'GGEtF',
        'InSeconds',
        'YSzqz',
        '4987719pSRfmK',
        's/pupa',
        'setHours',
        'rs/AppErro',
        'split',
        'LVttU',
        'isBefore',
        'FQfEX',
        'UiYAl',
        'MgJAY',
        'campaginId',
        'ERROR_CAMP',
        'update',
        '29446550xDKQyw',
        'campaignId',
        '_id_',
        'parse',
        'TqrGT',
        '_contact_',
        'QrvqS',
        'S_NOT_EXIS',
        'netzr',
        'WyUeQ',
        'erty',
        'random',
        'SendMessag',
        'DRJMH',
        'qdjMq',
        '08:00',
        'EgqSC',
        'isAfter',
        'pOglE',
        'JbvLG',
        'GbMwc',
        'lVdHG',
        'addSeconds',
        'HtkSB',
        'sessionId',
        'vKtVV',
        '/Queue',
        'uFuRY',
        'eJQAh',
        'NBqSQ',
        'ampaign',
        'contact',
        'session',
        'vnqkH',
        'cqRYh',
        'o_Paulo',
        'TyUxV',
        '../../libs',
        'YMMqW',
        'KKhpk',
        'Qoock',
        'pdJNg',
        'delay',
        'America/Sa',
        '2082385mkzTyH',
        '__importDe',
        'RUdRn',
        '__esModule',
        'VLloD',
        'ZSLHk',
        'eWhatsappC',
        'uWzYo',
        'vvMyS',
        'InDays',
        'oUtc',
        '219OHrKOn',
        'lDWub',
        'getTime',
        'HH:mm',
        'bxZpR',
        'UfUgk',
        'findAll',
        'GN_CONTACT',
        'MxkeB',
        'end',
        'message',
        'ERR_CAMPAI',
        'fuOsU',
        'start',
        'MFLHD',
        '../../erro',
        'add',
        'status',
        'date-fns',
        'pIGpk',
        '6494610ZVYwxH',
        'number',
        'UyhtY',
        'ls/Campaig',
        'bAWqr',
        'message3',
        'ftXpA',
        'name',
        'VslKD',
        'length',
        'date-fns-t'
    ];
    a = function () {
        return Y;
    };
    return a();
}