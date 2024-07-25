'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(D(0x1e0)) / (0x35 * 0x91 + 0x1cc0 + -0x3ac4) * (-parseInt(D(0x1ba)) / (0xf63 * 0x1 + -0x157e + 0x61d)) + parseInt(E(0x1f0)) / (-0x1b81 + 0x220b + -0x687) * (parseInt(D(0x19f)) / (-0x18ab + -0x1e8 * 0x1 + 0x1a97)) + parseInt(E(0x1dc)) / (0x132a + -0x1a6b * -0x1 + -0x2d90) * (-parseInt(E(0x1d0)) / (-0x7 * -0x16 + 0x15a9 + 0x1 * -0x163d)) + parseInt(E(0x1f9)) / (-0x9b1 + 0x2356 * -0x1 + -0x4f * -0x92) + parseInt(E(0x1b0)) / (-0x2486 + 0x1 * 0x1863 + -0x1 * -0xc2b) * (parseInt(E(0x1df)) / (-0x206b + 0x3 * -0x23d + 0x1 * 0x272b)) + -parseInt(D(0x191)) / (-0x1898 + -0x2b * -0x71 + 0x1 * 0x5a7) * (parseInt(D(0x18a)) / (-0x8be * 0x3 + -0x1354 * 0x2 + 0x40ed)) + -parseInt(D(0x1ee)) / (-0x11e + -0x8b * -0x41 + -0x2221) * (-parseInt(E(0x1cc)) / (-0x468 * 0x2 + 0xcea + 0x40d * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7d77 * 0xa + -0x2532a + 0xb4667));
var __importDefault = this && this[F(0x1bf) + G(0x1e4)] || function (c) {
    const H = F;
    return c && c[H(0x1b1)] ? c : { 'default': c };
};
const B = {};
B[F(0x1e5)] = !![], Object[F(0x1a9) + G(0x1d7)](exports, G(0x1b1), B), exports[G(0x18b) + 'e'] = exports[F(0x19c)] = exports[G(0x19d)] = void (0x63a * -0x3 + 0x1ec7 + -0xa3 * 0x13);
const ioredis_1 = __importDefault(require(G(0x1db))), redisClient = new ioredis_1[(G(0x190))]({
        'port': Number(process[F(0x1f2)][F(0x1b8) + G(0x197)]),
        'host': process[G(0x1f2)][F(0x1f6) + G(0x1ad)],
        'db': Number(process[G(0x1f2)][G(0x1e9) + F(0x1bd)]) || -0x25d0 + 0x1010 + 0x15c9,
        'password': process[F(0x1f2)][F(0x1b8) + G(0x1cb)] || undefined
    }), getValue = c => {
        const I = F, J = G, d = {
                'MfzWd': function (e, f) {
                    return e(f);
                },
                'SnCtq': function (e, f) {
                    return e(f);
                },
                'vygxM': function (e, f) {
                    return e !== f;
                },
                'HeSIT': I(0x1c8),
                'EoIqw': function (e, f) {
                    return e(f);
                },
                'SOxqD': function (e, f) {
                    return e === f;
                },
                'mfcNn': J(0x1a6),
                'wXcRF': J(0x195),
                'reWjj': I(0x1da),
                'djKeU': function (e, f) {
                    return e || f;
                },
                'luBsG': function (e, f) {
                    return e === f;
                },
                'NcINm': J(0x1d1),
                'EmZUs': J(0x1dd),
                'quQmN': function (e, f) {
                    return e(f);
                },
                'uqeCX': function (e, f) {
                    return e === f;
                },
                'VBtxr': I(0x1ed),
                'CQtoD': function (e, f) {
                    return e(f);
                },
                'qrNQC': function (e, f) {
                    return e(f);
                },
                'pKeok': J(0x1f7)
            };
        return new Promise((e, f) => {
            const N = I, O = J, g = {
                    'xHOMi': function (h, i) {
                        const K = b;
                        return d[K(0x1f8)](h, i);
                    },
                    'RPsvV': function (h, i) {
                        const L = b;
                        return d[L(0x19a)](h, i);
                    },
                    'NimBm': function (h, i) {
                        const M = b;
                        return d[M(0x1cf)](h, i);
                    }
                };
            d[N(0x1c3)](d[N(0x1d6)], d[O(0x1d6)]) ? g[N(0x19e)](h, n => {
                const P = N, Q = N;
                if (n)
                    return g[P(0x1a2)](k, n);
                return g[Q(0x1a2)](l, !![]);
            }) : redisClient[N(0x1d2)](c, (i, j) => {
                const T = O, U = N, k = {
                        'AawdP': function (l, m) {
                            const R = b;
                            return d[R(0x1f8)](l, m);
                        },
                        'oxnKs': function (l, m) {
                            const S = b;
                            return d[S(0x199)](l, m);
                        }
                    };
                if (d[T(0x1c3)](d[U(0x1a3)], d[U(0x1a3)]))
                    f = g[T(0x1b5)](g, h);
                else {
                    if (i)
                        return d[U(0x1e2)](f, i);
                    let m;
                    if (j) {
                        if (d[T(0x1d3)](d[U(0x18c)], d[T(0x18c)]))
                            try {
                                d[T(0x1d3)](d[U(0x1c2)], d[T(0x1c0)]) ? e = f : m = JSON[U(0x1b6)](d[U(0x1de)](j, ''));
                            } catch (o) {
                                if (d[T(0x1b2)](d[T(0x196)], d[U(0x1b4)])) {
                                    if (h)
                                        return k[U(0x1ef)](i, j);
                                    return k[U(0x1c1)](k, l);
                                } else
                                    m = d[T(0x1cf)](String, j);
                            }
                        else
                            f = g[U(0x1e3)](g, h);
                    } else
                        d[U(0x1e6)](d[T(0x18f)], d[T(0x18f)]) ? m = j : f = g[T(0x1f1)](h);
                    return d[T(0x1cd)](e, m);
                }
            });
        });
    };
exports[F(0x19d)] = getValue;
const setValue = (c, d) => {
    const V = G, W = F, e = {
            'TqBym': function (f, g) {
                return f(g);
            },
            'ysOEU': function (f, g) {
                return f !== g;
            },
            'tvQuC': V(0x1b9),
            'xFprT': function (f, g) {
                return f(g);
            },
            'PeXhO': function (f, g) {
                return f(g);
            },
            'MPGed': function (f, g) {
                return f(g);
            },
            'XuknJ': function (f, g) {
                return f || g;
            },
            'VsBim': function (f, g) {
                return f === g;
            },
            'hiaer': V(0x1ce),
            'iYznE': W(0x1c9),
            'bCTxO': W(0x1af),
            'JFMOo': V(0x1b3),
            'kmPCh': V(0x1a0),
            'mUXOI': W(0x1e1),
            'HYrSC': function (f, g) {
                return f(g);
            }
        };
    return new Promise((f, g) => {
        const a0 = W, a1 = V, h = {
                'JtNZw': function (i, j) {
                    const X = b;
                    return e[X(0x192)](i, j);
                },
                'zSMgm': function (i, j) {
                    const Y = b;
                    return e[Y(0x1f3)](i, j);
                },
                'BYdhy': function (i, j) {
                    const Z = b;
                    return e[Z(0x1a7)](i, j);
                }
            };
        if (e[a0(0x188)](e[a1(0x1d8)], e[a1(0x1ab)])) {
            const j = {
                'eLyiH': function (k, l) {
                    const a2 = a0;
                    return e[a2(0x1a4)](k, l);
                },
                'FvzzT': function (k, l) {
                    const a3 = a1;
                    return e[a3(0x1a4)](k, l);
                }
            };
            return new f((m, n) => {
                const a4 = a0;
                i[a4(0x19e)](j, o => {
                    const a5 = a4, a6 = a4;
                    if (o)
                        return j[a5(0x1aa)](n, o);
                    return j[a6(0x1d4)](m, !![]);
                });
            });
        } else {
            let j;
            if (e[a1(0x188)](typeof d, e[a0(0x1e8)])) {
                if (e[a1(0x1bb)](e[a0(0x1a5)], e[a1(0x1a5)])) {
                    const l = {};
                    return l[a1(0x190)] = j, g && h[a1(0x1b1)] ? i : l;
                } else
                    j = JSON[a1(0x1f1)](d);
            } else {
                if (e[a1(0x1bb)](e[a0(0x1d9)], e[a0(0x1c5)]))
                    j = e[a0(0x1ae)](String, d);
                else {
                    if (g)
                        return h[a1(0x18e)](h, i);
                    return h[a1(0x1eb)](j, !![]);
                }
            }
            redisClient[a1(0x1ca)](c, j, m => {
                const a7 = a0, a8 = a1;
                if (e[a7(0x1bb)](e[a7(0x1b7)], e[a8(0x1b7)]))
                    try {
                        o = p[a8(0x1b6)](h[a7(0x1e7)](q, ''));
                    } catch (o) {
                        u = h[a7(0x1eb)](v, w);
                    }
                else {
                    if (m)
                        return e[a7(0x1a4)](g, m);
                    return e[a7(0x193)](f, j);
                }
            });
        }
    });
};
exports[G(0x19c)] = setValue;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7d3 * -0x3 + -0xa47 * 0x1 + 0x2347);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const ao = [
        'EmZUs',
        'RPsvV',
        'parse',
        'tvQuC',
        'IO_REDIS_P',
        'FkflV',
        '29908FlKILo',
        'ysOEU',
        'mcPMs',
        'B_SESSION',
        'Jaubz',
        '__importDe',
        'reWjj',
        'oxnKs',
        'wXcRF',
        'vygxM',
        'qcjKE',
        'mUXOI',
        'WdqNp',
        'CGoPE',
        'RqWcP',
        'xzmvg',
        'set',
        'ASSWORD',
        '78gsIjPq',
        'CQtoD',
        'ARsGf',
        'quQmN',
        '6798QCkZrv',
        'tuMEB',
        'get',
        'SOxqD',
        'FvzzT',
        'CqsyV',
        'pKeok',
        'erty',
        'hiaer',
        'kmPCh',
        'CeQzi',
        'ioredis',
        '2245PXxdqo',
        'syKRs',
        'djKeU',
        '9NmzboS',
        '3EKCpri',
        'KktiT',
        'EoIqw',
        'NimBm',
        'fault',
        'value',
        'uqeCX',
        'BYdhy',
        'bCTxO',
        'IO_REDIS_D',
        'DIRzL',
        'zSMgm',
        'aCXnI',
        'VNdHu',
        '1300620Qqgrtr',
        'AawdP',
        '39126sHOjlj',
        'stringify',
        'env',
        'MPGed',
        'iEguh',
        'FKygy',
        'IO_REDIS_S',
        'Boluo',
        'MfzWd',
        '239883iwMDDQ',
        'HisfM',
        'IcGiE',
        'VsBim',
        'HPNBX',
        '44SokXPA',
        'removeValu',
        'mfcNn',
        'xGwjL',
        'JtNZw',
        'VBtxr',
        'default',
        '1034180flkBXq',
        'PeXhO',
        'xFprT',
        'EtizQ',
        'oAACV',
        'NcINm',
        'ORT',
        'hAYOH',
        'SnCtq',
        'qrNQC',
        'jlscG',
        'setValue',
        'getValue',
        'del',
        '28GVCZZf',
        'BMnDt',
        'yLWda',
        'xHOMi',
        'HeSIT',
        'TqBym',
        'JFMOo',
        'iMaYV',
        'XuknJ',
        'TAFAU',
        'defineProp',
        'eLyiH',
        'iYznE',
        'ADYxE',
        'ERVER',
        'HYrSC',
        'object',
        '3653960FDGnpn',
        '__esModule',
        'luBsG',
        'OcBaA'
    ];
    a = function () {
        return ao;
    };
    return a();
}
const removeValue = c => {
    const a9 = G, aa = F, d = {
            'HisfM': function (e, f) {
                return e(f);
            },
            'CqsyV': function (e, f) {
                return e === f;
            },
            'iEguh': a9(0x1af),
            'DIRzL': aa(0x1c6),
            'HPNBX': function (e, f) {
                return e(f);
            },
            'mcPMs': function (e, f) {
                return e || f;
            },
            'Jaubz': function (e, f) {
                return e === f;
            },
            'qcjKE': a9(0x1ec)
        };
    return new Promise((e, f) => {
        const ad = a9, ae = aa, g = {
                'TAFAU': function (h, i) {
                    const ab = b;
                    return d[ab(0x1fa)](h, i);
                },
                'CGoPE': function (h, i) {
                    const ac = b;
                    return d[ac(0x1d5)](h, i);
                },
                'yLWda': d[ad(0x1f4)],
                'FKygy': d[ae(0x1ea)],
                'jlscG': function (h, i) {
                    const af = ad;
                    return d[af(0x189)](h, i);
                },
                'xGwjL': function (h, i) {
                    const ag = ad;
                    return d[ag(0x1bc)](h, i);
                }
            };
        d[ad(0x1be)](d[ad(0x1c4)], d[ae(0x1c4)]) ? redisClient[ae(0x19e)](c, h => {
            const aj = ae, ak = ad, i = {
                    'ADYxE': function (j, k) {
                        const ah = b;
                        return g[ah(0x1a8)](j, k);
                    },
                    'IcGiE': function (j, k) {
                        const ai = b;
                        return g[ai(0x1c7)](j, k);
                    },
                    'hAYOH': g[aj(0x1a1)]
                };
            if (g[ak(0x1c7)](g[ak(0x1f5)], g[ak(0x1f5)])) {
                if (h)
                    return g[aj(0x1a8)](f, h);
                return g[aj(0x19b)](e, !![]);
            } else {
                const k = {
                    'EtizQ': function (m, n) {
                        const al = aj;
                        return i[al(0x1ac)](m, n);
                    }
                };
                let l;
                i[ak(0x187)](typeof l, i[aj(0x198)]) ? l = u[aj(0x1f1)](v) : l = i[aj(0x1ac)](w, x), q[ak(0x1ca)](r, l, C => {
                    const am = aj, an = ak;
                    if (C)
                        return k[am(0x194)](l, C);
                    return k[am(0x194)](z, l);
                });
            }
        }) : f = g[ae(0x1b6)](g[ae(0x18d)](h, ''));
    });
};
exports[G(0x18b) + 'e'] = removeValue;