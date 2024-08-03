'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1ba6 + -0x4 * -0x2b0 + 0x12cb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(D(0x239)) / (0x151 * 0x4 + 0xa68 + -0x3 * 0x539) + parseInt(D(0x241)) / (0x1c2a + -0x1 * 0x741 + 0x1 * -0x14e7) * (-parseInt(D(0x1e9)) / (0x3 * -0x9d9 + -0x179 * 0xf + 0x33a5)) + -parseInt(D(0x1f8)) / (0x1 * 0x1551 + -0x1 * 0x1f4b + 0x9fe * 0x1) + -parseInt(D(0x21c)) / (0x4 * 0x35c + -0x1d9b + -0x40c * -0x4) + parseInt(D(0x24a)) / (-0x9cc + 0x2340 + -0x196e * 0x1) + parseInt(D(0x21b)) / (-0x11c5 + 0xd2f + -0x1 * -0x49d) + -parseInt(E(0x244)) / (-0x501 * 0x2 + -0x1 * 0xe89 + -0x3 * -0x831) * (parseInt(E(0x228)) / (0x5d * 0x1 + -0x8c * -0x10 + 0x4 * -0x245));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb05 * -0x1a1 + -0xe0fae + 0x6d * 0x6203));
var __importDefault = this && this[F(0x22b) + G(0x250)] || function (c) {
    const H = G;
    return c && c[H(0x200)] ? c : { 'default': c };
};
const B = {};
B[G(0x238)] = !![], Object[G(0x23f) + F(0x21f)](exports, F(0x200), B), exports[G(0x1f3) + 'e'] = exports[G(0x207)] = exports[G(0x208)] = void (0x4f * 0x59 + -0xe77 * -0x2 + 0x1 * -0x3865);
const ioredis_1 = __importDefault(require(F(0x24c))), redisClient = new ioredis_1[(F(0x1ee))]({
        'port': Number(process[F(0x21d)][G(0x20e) + F(0x229)]),
        'host': process[G(0x21d)][G(0x214) + G(0x203)],
        'db': Number(process[G(0x21d)][G(0x22c) + F(0x252)]) || 0x7a7 * 0x2 + 0x1985 + -0x28ca,
        'password': process[F(0x21d)][F(0x20e) + F(0x20f)] || undefined
    }), getValue = c => {
        const I = G, J = G, d = {
                'dSmEv': function (e, f) {
                    return e(f);
                },
                'ZpHFU': function (e, f) {
                    return e !== f;
                },
                'aLbcx': I(0x22a),
                'UTmZc': function (e, f) {
                    return e(f);
                },
                'TbWoH': function (e, f) {
                    return e === f;
                },
                'tqPRf': J(0x1fd),
                'eHPBz': I(0x1fe),
                'qxNBI': function (e, f) {
                    return e === f;
                },
                'BVFnY': I(0x1ff),
                'fkvzP': J(0x242),
                'mefbM': function (e, f) {
                    return e || f;
                },
                'zyHxh': I(0x1fc),
                'McwSs': I(0x248),
                'VCKRR': function (e, f) {
                    return e(f);
                },
                'IpHOl': J(0x24e),
                'BuVML': I(0x209),
                'aOPQe': function (e, f) {
                    return e(f);
                },
                'QslxD': function (e, f) {
                    return e(f);
                },
                'sIjHx': function (e, f) {
                    return e(f);
                },
                'AIzpO': function (e, f) {
                    return e === f;
                },
                'YqlAx': I(0x206),
                'PqfaM': I(0x225)
            };
        return new Promise((e, f) => {
            const N = J, O = I, g = {
                    'BIOgW': function (h, i) {
                        const K = b;
                        return d[K(0x1f2)](h, i);
                    },
                    'vdbSP': function (h, i) {
                        const L = b;
                        return d[L(0x233)](h, i);
                    },
                    'kUgML': function (h, i) {
                        const M = b;
                        return d[M(0x230)](h, i);
                    }
                };
            d[N(0x1ec)](d[O(0x211)], d[O(0x223)]) ? f = g[O(0x1e6)](g, h) : redisClient[N(0x23e)](c, (i, j) => {
                const Q = N, R = O, k = {
                        'VnVfQ': function (l, m) {
                            const P = b;
                            return d[P(0x212)](l, m);
                        }
                    };
                if (d[Q(0x219)](d[Q(0x216)], d[R(0x216)]))
                    try {
                        o = p[Q(0x254)](g[Q(0x1f5)](q, ''));
                    } catch (m) {
                        u = g[Q(0x235)](v, w);
                    }
                else {
                    if (i)
                        return d[R(0x221)](f, i);
                    let m;
                    if (j) {
                        if (d[Q(0x247)](d[Q(0x202)], d[Q(0x24d)]))
                            e = f;
                        else
                            try {
                                d[Q(0x24b)](d[R(0x22e)], d[R(0x1e5)]) ? f = g[Q(0x254)](g[R(0x1f5)](h, '')) : m = JSON[Q(0x254)](d[R(0x233)](j, ''));
                            } catch (p) {
                                if (d[R(0x24b)](d[R(0x201)], d[R(0x243)])) {
                                    if (g)
                                        return k[R(0x204)](h, i);
                                    return k[R(0x204)](j, !![]);
                                } else
                                    m = d[R(0x1ef)](String, j);
                            }
                    } else {
                        if (d[R(0x219)](d[Q(0x1f6)], d[R(0x1f4)]))
                            m = j;
                        else {
                            const s = {};
                            return s[R(0x1ee)] = j, g && h[Q(0x200)] ? i : s;
                        }
                    }
                    return d[Q(0x22d)](e, m);
                }
            });
        });
    };
exports[G(0x208)] = getValue;
function a() {
    const am = [
        'parse',
        'IWWYy',
        'iZDFU',
        'CKbJW',
        'fkvzP',
        'BIOgW',
        'LLaJb',
        'kXkqx',
        '3333ximFVR',
        'Djrrv',
        'ieCQr',
        'AIzpO',
        'xVcmx',
        'default',
        'VCKRR',
        'axXXF',
        'DhBNo',
        'QslxD',
        'removeValu',
        'BuVML',
        'vdbSP',
        'IpHOl',
        'hvJyN',
        '4292120kryfIo',
        'ChgwM',
        'hYcUK',
        'TnVlU',
        'GrLDe',
        'ajfog',
        'CPTAj',
        'FkmnC',
        '__esModule',
        'zyHxh',
        'tqPRf',
        'ERVER',
        'VnVfQ',
        'aodCI',
        'gPPsU',
        'setValue',
        'getValue',
        'DqUou',
        'txNaL',
        'mhdUI',
        'wDFOk',
        'WWOsb',
        'IO_REDIS_P',
        'ASSWORD',
        'jDwsE',
        'YqlAx',
        'dSmEv',
        'xQlUI',
        'IO_REDIS_S',
        'tfpiT',
        'aLbcx',
        'juCZs',
        'bmSag',
        'ZpHFU',
        'wMnlA',
        '7349587XybeVd',
        '4130700HAEJQb',
        'env',
        'dgoow',
        'erty',
        'dAjQu',
        'UTmZc',
        'object',
        'PqfaM',
        'CTqhF',
        'fnaVm',
        'jxdlj',
        'ockwL',
        '99LbNYkZ',
        'ORT',
        'AbWWm',
        '__importDe',
        'IO_REDIS_D',
        'aOPQe',
        'BVFnY',
        'set',
        'sIjHx',
        'del',
        'DLjsj',
        'mefbM',
        'AhFON',
        'kUgML',
        'kPskj',
        'zEawj',
        'value',
        '1238272CPHqMy',
        'fhqiq',
        'uVsrl',
        'stringify',
        'gTrEQ',
        'get',
        'defineProp',
        'RUMdK',
        '254BeNmXl',
        'ZAzYD',
        'McwSs',
        '452968GfDdZp',
        'VsaEW',
        'PEAQf',
        'TbWoH',
        'eJOWo',
        'aXWoJ',
        '6071574LuCaJF',
        'qxNBI',
        'ioredis',
        'eHPBz',
        'yyywL',
        'YrCVN',
        'fault',
        'YSdMj',
        'B_SESSION',
        'ppxXI'
    ];
    a = function () {
        return am;
    };
    return a();
}
const setValue = (c, d) => {
    const S = F, T = G, e = {
            'DhBNo': function (f, g) {
                return f === g;
            },
            'AhFON': S(0x222),
            'VsaEW': function (f, g) {
                return f(g);
            },
            'CTqhF': function (f, g) {
                return f(g);
            },
            'wMnlA': function (f, g) {
                return f(g);
            },
            'tfpiT': function (f, g) {
                return f === g;
            },
            'gTrEQ': T(0x218),
            'IWWYy': T(0x20a),
            'zEawj': function (f, g) {
                return f !== g;
            },
            'jxdlj': T(0x217),
            'PEAQf': S(0x1e8),
            'Djrrv': function (f, g) {
                return f === g;
            },
            'YrCVN': T(0x1f0),
            'CKbJW': T(0x1e7),
            'ChgwM': T(0x23b)
        };
    return new Promise((f, g) => {
        const Z = T, a0 = T, h = {
                'dAjQu': function (i, j) {
                    const U = b;
                    return e[U(0x224)](i, j);
                },
                'iZDFU': function (i, j) {
                    const V = b;
                    return e[V(0x245)](i, j);
                },
                'ieCQr': function (i, j) {
                    const W = b;
                    return e[W(0x224)](i, j);
                },
                'ockwL': function (i, j) {
                    const X = b;
                    return e[X(0x21a)](i, j);
                },
                'ppxXI': function (i, j) {
                    const Y = b;
                    return e[Y(0x215)](i, j);
                },
                'jDwsE': e[Z(0x23d)],
                'kPskj': e[Z(0x255)],
                'WWOsb': function (i, j) {
                    const a1 = a0;
                    return e[a1(0x21a)](i, j);
                },
                'wDFOk': function (i, j) {
                    const a2 = a0;
                    return e[a2(0x21a)](i, j);
                },
                'hvJyN': function (i, j) {
                    const a3 = a0;
                    return e[a3(0x224)](i, j);
                }
            };
        if (e[a0(0x237)](e[a0(0x226)], e[a0(0x246)])) {
            let i;
            e[a0(0x1f1)](typeof d, e[Z(0x234)]) ? e[Z(0x1ea)](e[Z(0x24f)], e[a0(0x257)]) ? g[Z(0x231)](h, n => {
                const a4 = Z, a5 = a0;
                if (n)
                    return h[a4(0x220)](k, n);
                return h[a5(0x256)](l, !![]);
            }) : i = JSON[Z(0x23c)](d) : e[a0(0x237)](e[a0(0x1f9)], e[a0(0x1f9)]) ? f = g[Z(0x23c)](h) : i = e[a0(0x224)](String, d), redisClient[a0(0x22f)](c, i, l => {
                const a6 = a0, a7 = a0;
                if (h[a6(0x253)](h[a7(0x210)], h[a7(0x236)])) {
                    if (h)
                        return h[a7(0x1eb)](i, j);
                    return h[a7(0x227)](k, l);
                } else {
                    if (l)
                        return h[a6(0x20d)](g, l);
                    return h[a6(0x256)](f, i);
                }
            });
        } else {
            let m;
            e[Z(0x1f1)](typeof l, e[a0(0x234)]) ? m = u[a0(0x23c)](v) : m = e[a0(0x245)](w, x), q[Z(0x22f)](r, m, C => {
                const a8 = a0, a9 = Z;
                if (C)
                    return h[a8(0x20c)](m, C);
                return h[a8(0x1f7)](z, m);
            });
        }
    });
};
exports[G(0x207)] = setValue;
const removeValue = c => {
    const aa = G, ab = F, d = {
            'xQlUI': function (e, f) {
                return e(f);
            },
            'aXWoJ': function (e, f) {
                return e !== f;
            },
            'dgoow': aa(0x232),
            'xVcmx': function (e, f) {
                return e(f);
            },
            'aodCI': aa(0x251),
            'fhqiq': ab(0x240)
        };
    return new Promise((e, f) => {
        const ad = ab, ae = ab, g = {
                'hYcUK': function (h, i) {
                    const ac = b;
                    return d[ac(0x1ed)](h, i);
                }
            };
        if (d[ad(0x249)](d[ae(0x205)], d[ae(0x23a)]))
            redisClient[ae(0x231)](c, h => {
                const ag = ae, ah = ad, i = {
                        'mhdUI': function (j, k) {
                            const af = b;
                            return d[af(0x213)](j, k);
                        }
                    };
                if (d[ag(0x249)](d[ag(0x21e)], d[ag(0x21e)]))
                    f = i[ah(0x20b)](g, h);
                else {
                    if (h)
                        return d[ag(0x213)](f, h);
                    return d[ag(0x1ed)](e, !![]);
                }
            });
        else {
            const i = {
                'TnVlU': function (j, k) {
                    const ai = ad;
                    return g[ai(0x1fa)](j, k);
                }
            };
            return new f((m, n) => {
                const aj = ad;
                i[aj(0x231)](j, o => {
                    const ak = aj, al = aj;
                    if (o)
                        return i[ak(0x1fb)](n, o);
                    return i[al(0x1fb)](m, !![]);
                });
            });
        }
    });
};
exports[F(0x1f3) + 'e'] = removeValue;