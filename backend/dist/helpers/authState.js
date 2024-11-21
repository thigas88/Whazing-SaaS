'use strict';
const P = b, Q = b;
(function (c, d) {
    const N = b, O = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(N(0x188)) / (0xbd7 * -0x2 + 0x1275 + 0x53a) * (parseInt(O(0x184)) / (-0x75e + 0x3 * 0x511 + -0x7d3)) + parseInt(O(0x1c0)) / (0x4c * -0x24 + 0x2b3 + 0x800) * (parseInt(N(0x1c2)) / (-0x1 * 0x1b46 + -0x1 * 0x1ac0 + 0x2 * 0x1b05)) + parseInt(N(0x1cf)) / (-0x1 * -0x1cfb + -0x86d * -0x1 + 0x1 * -0x2563) + -parseInt(N(0x194)) / (0x3b * 0x1 + 0x130b + 0x9a * -0x20) + -parseInt(O(0x1b6)) / (0x83 * -0x1b + 0x61 * -0x35 + 0x21ed) + -parseInt(N(0x1e5)) / (-0x58b + 0x2d * -0x11 + 0x10 * 0x89) + parseInt(N(0x1bb)) / (0x2704 + -0x21bc + -0x53f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe2 * 0x81b + 0x37042 + 0x874b4 * 0x1));
var __importDefault = this && this[P(0x17c) + Q(0x17b)] || function (c) {
    const R = Q;
    return c && c[R(0x18d)] ? c : { 'default': c };
};
const M = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3ad * -0x2 + -0x17 * 0x19 + -0xe9 * 0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
M[Q(0x190)] = !![], Object[P(0x18a) + P(0x19f)](exports, Q(0x18d), M);
const baileys_1 = require(P(0x1c7) + P(0x1bf) + Q(0x1c1)), BaileysKeys_1 = __importDefault(require(P(0x18f) + P(0x1a3) + 's')), logger_1 = require(Q(0x1ad) + Q(0x1a4)), authState = async d => {
        const S = P, T = P, e = {
                'sEAJw': function (l, m) {
                    return l === m;
                },
                'NLMAK': S(0x1de),
                'TCtKu': S(0x1d3),
                'cElpo': function (l, m) {
                    return l === m;
                },
                'BROPK': S(0x1db),
                'LZABy': T(0x17e),
                'VORHt': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'Oaciz': function (l, m, n) {
                    return l(m, n);
                },
                'uDQpc': function (l, m) {
                    return l !== m;
                },
                'aOBbX': S(0x17f),
                'HHJGV': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'KVrmv': function (l, m) {
                    return l === m;
                },
                'NRkjs': S(0x1b3),
                'GxpHt': function (l, m) {
                    return l === m;
                },
                'oeJpd': S(0x17d),
                'PDzJI': S(0x186),
                'lFxap': function (l, m) {
                    return l === m;
                },
                'uJypp': T(0x1b5),
                'ellMl': T(0x1ac) + S(0x1b8),
                'yzWDe': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'NwDyM': function (l, m) {
                    return l !== m;
                },
                'kaiuL': S(0x1e1),
                'UbWzq': T(0x1ee),
                'hWkfC': T(0x181),
                'Cqcze': S(0x18b),
                'cunln': S(0x1d9),
                'cmrMB': S(0x1ac) + T(0x1d1) + 'on',
                'nCbxZ': S(0x1d9) + T(0x179),
                'ulvga': function (l, m) {
                    return l !== m;
                },
                'pdmTS': S(0x193),
                'nGgyv': S(0x19a),
                'aOJWA': function (l) {
                    return l();
                }
            };
        let f;
        const g = d['id'], h = async (l, m, n) => {
                const U = S, V = T;
                if (e[U(0x187)](e[V(0x196)], e[V(0x17a)])) {
                    const p = {};
                    p[V(0x1eb)] = h, p[U(0x1b1)] = i, p[U(0x1dc)] = j;
                    const q = {};
                    return q[V(0x1a5)] = p, g[U(0x1d2)][V(0x19e)](q);
                } else
                    return BaileysKeys_1[V(0x1d2)][U(0x183)]({
                        'whatsappId': g,
                        'type': l,
                        'key': m,
                        'value': JSON[V(0x1e6)](n)
                    });
            }, i = async (l, m) => {
                const W = T, X = T;
                if (e[W(0x182)](e[W(0x19d)], e[W(0x1d4)]))
                    return i[X(0x1d2)][W(0x183)]({
                        'whatsappId': j,
                        'type': k,
                        'key': l,
                        'value': m[W(0x1e6)](n)
                    });
                else {
                    const o = {};
                    o[X(0x1eb)] = g, o[X(0x1b1)] = l, o[W(0x1dc)] = m;
                    const p = {};
                    p[W(0x1a5)] = o;
                    const q = await BaileysKeys_1[W(0x1d2)][W(0x1d8)](p);
                    return q?.[X(0x190)] ? JSON[X(0x19b)](q[X(0x190)]) : null;
                }
            }, j = async (l, m) => {
                const a0 = T, a1 = T, n = {
                        'HxJrk': function (o, p, q, r) {
                            const Y = b;
                            return e[Y(0x1ab)](o, p, q, r);
                        },
                        'kxKIj': function (o, p, q) {
                            const Z = b;
                            return e[Z(0x1af)](o, p, q);
                        }
                    };
                if (e[a0(0x18c)](e[a0(0x1b9)], e[a1(0x1b9)])) {
                    const p = m[n][o];
                    p[a1(0x1e0)](p ? n[a0(0x1e8)](q, r, s, p) : n[a1(0x1bc)](t, u, v));
                } else {
                    const p = {};
                    p[a1(0x1eb)] = g, p[a0(0x1b1)] = l, p[a0(0x1dc)] = m;
                    const q = {};
                    return q[a1(0x1a5)] = p, BaileysKeys_1[a0(0x1d2)][a1(0x19e)](q);
                }
            }, k = async () => {
                const a2 = T, a3 = S;
                if (e[a2(0x1cb)](e[a2(0x1e4)], e[a3(0x1e4)]))
                    try {
                        if (e[a2(0x1b2)](e[a3(0x1c6)], e[a2(0x1a6)]))
                            f = g[a3(0x1ae)][a3(0x1e2)][a3(0x180) + a3(0x1e7)][a3(0x1d7)](h);
                        else {
                            const m = {};
                            m[a2(0x191)] = f, m[a3(0x1ba)] = {}, await d[a2(0x1a1)]({ 'session': JSON[a2(0x1e6)](m, baileys_1[a2(0x1da)][a3(0x199)], 0xbd0 + -0x7de * -0x2 + -0x1b8c) });
                        }
                    } catch (n) {
                        e[a3(0x1a2)](e[a3(0x1c5)], e[a3(0x1c5)]) ? console[a3(0x1a8)](n) : e = (0x5f * -0x49 + 0x1 * -0x2129 + 0x788 * 0x8, f[a2(0x1be) + a2(0x18e)])();
                    }
                else
                    for (const q in u[v]) {
                        const r = D[E][q];
                        F[a3(0x1e0)](r ? e[a3(0x185)](G, H, q, r) : e[a3(0x1af)](I, J, q));
                    }
            };
        if (d[T(0x18b)] && e[S(0x1bd)](d[T(0x18b)], null)) {
            const l = JSON[S(0x19b)](d[T(0x18b)], baileys_1[S(0x1da)][T(0x1e9)]);
            f = l[S(0x191)];
            const {keys: m} = l;
            if (Object[T(0x1ba)](m)[S(0x1ce)]) {
                if (e[S(0x1bd)](e[S(0x1c3)], e[T(0x1ef)])) {
                    const n = {};
                    n[S(0x1b4)] = e[S(0x192)], n[T(0x195)] = e[T(0x1d0)], n[T(0x19c)] = e[T(0x177)], n[S(0x1d6) + S(0x197)] = e[S(0x1ec)], n[S(0x1c4) + T(0x1ca)] = e[T(0x1a7)], n[T(0x1c8) + T(0x1a0)] = e[T(0x1ea)];
                    const o = n;
                    for await (const p of Object[S(0x1ba)](m)) {
                        if (e[T(0x198)](e[T(0x189)], e[T(0x189)]))
                            g[T(0x1e3)][S(0x1cd)](S(0x178) + S(0x1ed) + S(0x1a9) + h[T(0x1c9)]), i[S(0x1e3)][T(0x1cd)](S(0x178) + T(0x1cc) + T(0x1dd) + j[T(0x1aa)]);
                        else {
                            const r = o[p];
                            for await (const s of Object[T(0x1ba)](m[p])) {
                                e[S(0x198)](e[T(0x1d5)], e[T(0x1d5)]) ? e[T(0x1a8)](f) : await e[T(0x185)](h, r, s, m[p][s]);
                            }
                        }
                    }
                    e[T(0x1b7)](k);
                } else {
                    const v = {};
                    return v[T(0x1d2)] = j, g && h[T(0x18d)] ? i : v;
                }
            }
        } else
            f = (0x241 * 0xb + 0x2 * -0xad9 + -0x319 * 0x1, baileys_1[S(0x1be) + S(0x18e)])();
        return {
            'state': {
                'creds': f,
                'keys': {
                    'get': async (v, w) => {
                        const a4 = S, a5 = T, x = {};
                        for await (const y of w) {
                            try {
                                let z = await e[a4(0x1af)](i, v, y);
                                z && e[a5(0x187)](v, e[a5(0x1ec)]) && (z = baileys_1[a5(0x1ae)][a5(0x1e2)][a5(0x180) + a5(0x1e7)][a5(0x1d7)](z)), x[y] = z;
                            } catch (A) {
                                logger_1[a5(0x1e3)][a5(0x1cd)](a5(0x178) + a4(0x1ed) + a5(0x1a9) + A[a4(0x1c9)]), logger_1[a4(0x1e3)][a4(0x1cd)](a4(0x178) + a4(0x1cc) + a4(0x1dd) + A[a5(0x1aa)]);
                            }
                        }
                        return x;
                    },
                    'set': async v => {
                        const a6 = S, a7 = S, w = [];
                        for (const x in v) {
                            for (const y in v[x]) {
                                const z = v[x][y];
                                w[a6(0x1e0)](z ? e[a7(0x1b0)](h, x, y, z) : e[a7(0x1af)](j, x, y));
                            }
                        }
                        await Promise[a7(0x1df)](w);
                    }
                }
            },
            'saveState': k
        };
    };
function a() {
    const a8 = [
        'cElpo',
        'upsert',
        '50vZSopq',
        'HHJGV',
        'pFFfS',
        'sEAJw',
        '9043IRVVvq',
        'pdmTS',
        'defineProp',
        'session',
        'uDQpc',
        '__esModule',
        'eds',
        '../models/',
        'value',
        'creds',
        'hWkfC',
        'vzalu',
        '880494acQhgm',
        'sessions',
        'NLMAK',
        'ncKeys',
        'ulvga',
        'replacer',
        'zAtYB',
        'parse',
        'senderKeys',
        'BROPK',
        'destroy',
        'erty',
        'emory',
        'update',
        'lFxap',
        'BaileysKey',
        'ogger',
        'where',
        'PDzJI',
        'cmrMB',
        'log',
        'ror:\x20',
        'stack',
        'VORHt',
        'app-state-',
        '../utils/l',
        'proto',
        'Oaciz',
        'yzWDe',
        'type',
        'GxpHt',
        'AldgV',
        'preKeys',
        'DgcdI',
        '1936291iukcIo',
        'aOJWA',
        'sync-key',
        'aOBbX',
        'keys',
        '4486275XkkWNN',
        'kxKIj',
        'NwDyM',
        'initAuthCr',
        'ckets/bail',
        '66jvWSli',
        'eys',
        '93112jYjdYu',
        'kaiuL',
        'appStateVe',
        'uJypp',
        'oeJpd',
        '@whiskeyso',
        'senderKeyM',
        'message',
        'rsions',
        'KVrmv',
        '(72)\x20->\x20st',
        'error',
        'length',
        '575325sazyJz',
        'Cqcze',
        'sync-versi',
        'default',
        'hmVBo',
        'LZABy',
        'nGgyv',
        'appStateSy',
        'fromObject',
        'findOne',
        'sender-key',
        'BufferJSON',
        'xpxWP',
        'key',
        'ack:\x20',
        'fMIXH',
        'all',
        'push',
        'OaAwm',
        'Message',
        'logger',
        'NRkjs',
        '1325272crUlhV',
        'stringify',
        'ncKeyData',
        'HxJrk',
        'reviver',
        'nCbxZ',
        'whatsappId',
        'ellMl',
        '(69)\x20->\x20er',
        'aMRAZ',
        'UbWzq',
        'cunln',
        'authState\x20',
        '-memory',
        'TCtKu',
        'fault',
        '__importDe',
        'dHGNF',
        'xcDtG',
        'RdvCJ',
        'AppStateSy',
        'pre-key'
    ];
    a = function () {
        return a8;
    };
    return a();
}
exports[P(0x1d2)] = authState;