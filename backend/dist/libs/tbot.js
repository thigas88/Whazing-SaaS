'use strict';
const Z = b, a0 = b;
(function (c, d) {
    const X = b, Y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(X(0x1d0)) / (0x20af + -0x2a * -0x12 + -0x23a2) + -parseInt(Y(0x1da)) / (0x3 * -0x923 + 0xaf6 * 0x2 + 0x57f) * (-parseInt(Y(0x198)) / (-0x2fc + -0x1d77 + 0x2076)) + parseInt(X(0x1d1)) / (-0x1be * 0x1 + -0xdae + 0xf70) * (parseInt(Y(0x196)) / (0x354 * 0x8 + -0x1aa + 0x4fd * -0x5)) + parseInt(X(0x1c8)) / (0x1ee0 + -0x233 + -0x1ca7) + parseInt(Y(0x195)) / (-0x1a8d + 0x1 * -0xe87 + 0x291b) + -parseInt(X(0x1cd)) / (-0x578 + -0x147d + 0x19fd) * (-parseInt(X(0x1e1)) / (-0x19fc + -0x2490 + 0x3e95)) + -parseInt(X(0x1c9)) / (-0x304 * 0x2 + -0x103 + 0x715) * (parseInt(Y(0x1f5)) / (-0x8 * -0x2c6 + -0x119a + -0x48b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6a78 * 0x3 + -0x6b * -0xa85 + -0x359 * 0xc7));
const V = {};
V[Z(0x1e0)] = !![], Object[Z(0x1b7) + a0(0x1bb)](exports, Z(0x1ca), V), exports[a0(0x1a2)] = exports[Z(0x1af)] = exports[a0(0x19b)] = void (0x2 * 0xb65 + -0x1709 * 0x1 + 0x1 * 0x3f);
const telegraf_1 = require(Z(0x1d8)), socket_1 = require(Z(0x1d4)), logger_1 = require(a0(0x1d5) + Z(0x1f9)), TelegramSessions = [], initTbot = async c => {
        const a1 = Z, a2 = Z, d = {
                'dUrLd': a1(0x19f),
                'fcmqU': a1(0x19c),
                'QHVXg': function (e, f) {
                    return e === f;
                },
                'zLxyh': a2(0x1a3),
                'CMOXG': a1(0x1ff),
                'ctlfe': function (e, f) {
                    return e(f);
                },
                'vEhgJ': a1(0x1a0) + 'ED',
                'DyWFO': a2(0x1cb) + a2(0x1b8) + a1(0x1e2) + 'n.',
                'avkBG': function (e, f) {
                    return e !== f;
                },
                'zeLmP': a1(0x1a1),
                'nmyoE': a1(0x1e7),
                'DetKl': a2(0x1f4),
                'wTYwt': a1(0x1a6),
                'ghuQt': function (e, f) {
                    return e === f;
                },
                'dZwNh': a2(0x199),
                'qwWmH': function (e, f) {
                    return e(f);
                },
                'flcft': a2(0x1d6),
                'jPKMf': a2(0x1f0)
            };
        return new Promise((f, g) => {
            const a4 = a1, a5 = a1, h = {
                    'NLHeb': function (i, j) {
                        const a3 = b;
                        return d[a3(0x1fa)](i, j);
                    },
                    'QumQF': d[a4(0x1fb)],
                    'gqvdM': d[a4(0x1ae)],
                    'PZCWV': d[a4(0x1fe)],
                    'vqQpk': d[a5(0x1dd)],
                    'gURmp': function (i, j) {
                        const a6 = a4;
                        return d[a6(0x1c3)](i, j);
                    },
                    'gghRN': d[a4(0x1cf)],
                    'HtscV': function (i, j) {
                        const a7 = a4;
                        return d[a7(0x1c3)](i, j);
                    },
                    'YoKZf': d[a5(0x1d9)]
                };
            if (d[a5(0x1aa)](d[a4(0x1e9)], d[a4(0x1c5)]))
                try {
                    if (d[a4(0x1fa)](d[a5(0x1ea)], d[a4(0x1ea)])) {
                        const i = (0x3c * 0x91 + 0x45b + -0x2f3 * 0xd, socket_1[a5(0x1e6)])(), j = c[a4(0x1f6)], {tenantId: k} = c, l = new telegraf_1[(a5(0x1de))](c[a5(0x1e5) + a5(0x1c0)], {});
                        l['id'] = c['id'];
                        const m = TelegramSessions[a5(0x1b6)](p => p['id'] === c['id']);
                        if (d[a5(0x1fa)](m, -(-0x1d85 + 0x1 * -0xc8e + -0x4 * -0xa85))) {
                            if (d[a5(0x1aa)](d[a4(0x1fc)], d[a4(0x1fc)])) {
                                const q = (-0x3a8 + 0x4b6 * -0x8 + 0x1f8 * 0x15, u[a5(0x1e6)])(), r = v[a5(0x1f6)], {tenantId: s} = w, t = new x[(a5(0x1de))](y[a5(0x1e5) + a5(0x1c0)], {});
                                t['id'] = z['id'];
                                const u = A[a4(0x1b6)](W => W['id'] === M['id']);
                                h[a4(0x197)](u, -(-0x2605 + 0x2 * -0x544 + -0x5 * -0x9b6)) ? (t['id'] = M['id'], N[a4(0x1f7)](t)) : (t['id'] = O['id'], P[u] = t);
                                t[a4(0x192)]();
                                const v = {};
                                v[a4(0x1b5)] = h[a4(0x191)], v[a5(0x1d3)] = '', v[a4(0x1e8)] = 0x0, G[a4(0x1ff)](v);
                                const w = {};
                                w[a4(0x1d2)] = h[a5(0x1dc)], w[a4(0x1a5)] = H, q[a4(0x1eb)](s + (a4(0x1ec) + a5(0x1f2)), w), I[a4(0x1b9)][a4(0x1ab)](a4(0x1be) + a5(0x1fd) + r + a5(0x1b0)), J[a4(0x19d)](h[a4(0x1ce)], () => t[a5(0x1ee)](a4(0x19f))), K[a5(0x19d)](h[a5(0x1f3)], () => t[a5(0x1ee)](a5(0x19c))), h[a4(0x1db)](L, t);
                            } else
                                l['id'] = c['id'], TelegramSessions[a4(0x1f7)](l);
                        } else {
                            if (d[a4(0x1a4)](d[a4(0x1cc)], d[a5(0x1cc)]))
                                l['id'] = c['id'], TelegramSessions[m] = l;
                            else {
                                const r = {};
                                r[a5(0x1b5)] = h[a5(0x1bc)], r[a4(0x1d3)] = '', r[a4(0x1e8)] = 0x0, h[a5(0x1ff)](r), i[a4(0x1b9)][a4(0x1ba)](a4(0x1ef) + a5(0x1ad) + a5(0x1f8) + j), h[a5(0x1bf)](k, new l(h[a4(0x1ed)]));
                            }
                        }
                        l[a4(0x192)]();
                        const n = {};
                        n[a4(0x1b5)] = d[a4(0x1fb)], n[a4(0x1d3)] = '', n[a4(0x1e8)] = 0x0, c[a5(0x1ff)](n);
                        const o = {};
                        o[a5(0x1d2)] = d[a5(0x1ae)], o[a5(0x1a5)] = c, i[a4(0x1eb)](k + (a5(0x1ec) + a5(0x1f2)), o), logger_1[a5(0x1b9)][a4(0x1ab)](a5(0x1be) + a5(0x1fd) + j + a4(0x1b0)), process[a4(0x19d)](d[a5(0x1fe)], () => l[a4(0x1ee)](a4(0x19f))), process[a5(0x19d)](d[a5(0x1dd)], () => l[a4(0x1ee)](a5(0x19c))), d[a4(0x1a7)](f, l);
                    } else
                        e[a4(0x1b9)][a5(0x1ba)](a5(0x1a2) + a4(0x1d7) + f);
                } catch (s) {
                    if (d[a5(0x1fa)](d[a5(0x1c2)], d[a5(0x1df)]))
                        i[a5(0x19d)](d[a4(0x1fe)], () => o[a4(0x1ee)](a5(0x19f))), k[a4(0x19d)](d[a4(0x1dd)], () => o[a5(0x1ee)](a4(0x19c))), m[a5(0x1c7)](n, 0x2b * -0xc5 + -0x83 * -0x49 + -0x1 * 0x443);
                    else {
                        const u = {};
                        u[a4(0x1b5)] = d[a5(0x1cf)], u[a5(0x1d3)] = '', u[a4(0x1e8)] = 0x0, c[a4(0x1ff)](u), logger_1[a4(0x1b9)][a5(0x1ba)](a4(0x1ef) + a4(0x1ad) + a4(0x1f8) + s), d[a5(0x1a7)](g, new Error(d[a5(0x1d9)]));
                    }
                }
            else
                h['id'] = i['id'], j[k] = l;
        });
    };
exports[a0(0x19b)] = initTbot;
const getTbot = (c, d = !![]) => {
    const a8 = a0, a9 = Z;
    logger_1[a8(0x1b9)][a9(0x1ab)](a8(0x1f1) + ':\x20' + c + (a8(0x1a9) + a9(0x1e3)) + d);
    const e = TelegramSessions[a8(0x1b6)](f => f['id'] === c);
    return TelegramSessions[e];
};
function a() {
    const ac = [
        '5hxlOti',
        'NLHeb',
        '553554NkeXIh',
        'cpPlc',
        'oIuoK',
        'initTbot',
        'SIGTERM',
        'once',
        'ZmYMV',
        'SIGINT',
        'DISCONNECT',
        'JtacV',
        'removeTbot',
        'CONNECTED',
        'ghuQt',
        'session',
        'bduTc',
        'qwWmH',
        'FeqIH',
        '\x20|\x20checkSt',
        'avkBG',
        'info',
        'QjcuQ',
        'rror\x20|\x20Err',
        'CMOXG',
        'getTbot',
        '\x20-\x20READY\x20',
        'NOWoB',
        'ehSrW',
        'xTjUE',
        'CaGks',
        'status',
        'findIndex',
        'defineProp',
        'ting\x20teleg',
        'logger',
        'error',
        'erty',
        'gghRN',
        'NoANr',
        'Session\x20TE',
        'HtscV',
        'ram',
        'civkx',
        'flcft',
        'ctlfe',
        'mwevz',
        'nmyoE',
        'IYIyR',
        'splice',
        '2146512oHyrgd',
        '10GQnyjU',
        '__esModule',
        'Error\x20star',
        'dZwNh',
        '8LgtEzv',
        'PZCWV',
        'vEhgJ',
        '312761eoDmlI',
        '220196yWBILE',
        'action',
        'qrcode',
        './socket',
        '../utils/l',
        'yPqkJ',
        '\x20|\x20Error:\x20',
        'telegraf',
        'DyWFO',
        '2tDCvlZ',
        'gURmp',
        'gqvdM',
        'fcmqU',
        'Telegraf',
        'jPKMf',
        'value',
        '3168351BxNTkt',
        'ram\x20sessio',
        'ate:\x20',
        'WuSsU',
        'tokenTeleg',
        'getIO',
        'eMrjR',
        'retries',
        'zeLmP',
        'DetKl',
        'emit',
        ':whatsappS',
        'YoKZf',
        'stop',
        'initWbot\x20e',
        'QnzQD',
        'whatsappId',
        'ession',
        'vqQpk',
        'mmoXQ',
        '7971029feGMFb',
        'name',
        'push',
        'or:\x20',
        'ogger',
        'QHVXg',
        'zLxyh',
        'wTYwt',
        'LEGRAM:\x20',
        'dUrLd',
        'update',
        'oiotK',
        'QumQF',
        'launch',
        'FDiiB',
        'LPqvm',
        '2011926kpSOkZ'
    ];
    a = function () {
        return ac;
    };
    return a();
}
exports[a0(0x1af)] = getTbot;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x2551 + 0x21 * -0xe2 + 0x4403 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const removeTbot = d => {
    const aa = a0, ab = Z, e = {};
    e[aa(0x1b2)] = function (g, h) {
        return g !== h;
    }, e[ab(0x1b4)] = aa(0x19f), e[aa(0x194)] = aa(0x19c), e[ab(0x1a8)] = function (g, h) {
        return g === h;
    }, e[aa(0x1c1)] = ab(0x1c4), e[ab(0x19e)] = function (g, h) {
        return g !== h;
    }, e[ab(0x193)] = ab(0x1c6), e[ab(0x190)] = aa(0x1b1), e[aa(0x1e4)] = function (g, h) {
        return g !== h;
    }, e[aa(0x19a)] = aa(0x1ac), e[aa(0x1bd)] = ab(0x1b3);
    const f = e;
    try {
        if (f[aa(0x1a8)](f[ab(0x1c1)], f[aa(0x1c1)])) {
            const g = TelegramSessions[ab(0x1b6)](i => i['id'] === d), h = TelegramSessions[g];
            if (f[ab(0x1b2)](g, -(-0x2548 + -0x1d1a + -0x21 * -0x203))) {
                if (f[ab(0x19e)](f[ab(0x193)], f[aa(0x190)]))
                    process[aa(0x19d)](f[ab(0x1b4)], () => h[ab(0x1ee)](ab(0x19f))), process[aa(0x19d)](f[aa(0x194)], () => h[aa(0x1ee)](ab(0x19c))), TelegramSessions[aa(0x1c7)](g, 0x5 * 0x3b + -0x2aa + 0x184);
                else {
                    const j = i[ab(0x1b6)](u => u['id'] === o), k = k[j];
                    f[aa(0x1b2)](j, -(-0x2180 + 0x283 * 0x6 + -0x16b * -0xd)) && (o[ab(0x19d)](f[ab(0x1b4)], () => k[ab(0x1ee)](ab(0x19f))), p[ab(0x19d)](f[ab(0x194)], () => k[ab(0x1ee)](aa(0x19c))), q[aa(0x1c7)](j, 0xbc1 + -0x1956 + 0xd96));
                }
            }
        } else {
            i[aa(0x1b9)][aa(0x1ab)](ab(0x1f1) + ':\x20' + j + (aa(0x1a9) + aa(0x1e3)) + k);
            const k = l[aa(0x1b6)](q => q['id'] === k);
            return n[k];
        }
    } catch (k) {
        if (f[ab(0x1e4)](f[aa(0x19a)], f[ab(0x1bd)]))
            logger_1[ab(0x1b9)][ab(0x1ba)](aa(0x1a2) + aa(0x1d7) + k);
        else
            try {
                const m = q[aa(0x1b6)](E => E['id'] === w), n = s[m];
                f[aa(0x1b2)](m, -(0x180b * -0x1 + -0x2 * -0xae3 + 0x246)) && (w[ab(0x19d)](f[ab(0x1b4)], () => n[ab(0x1ee)](ab(0x19f))), x[ab(0x19d)](f[ab(0x194)], () => n[ab(0x1ee)](ab(0x19c))), y[ab(0x1c7)](m, -0x1b47 + -0x224 * 0x9 + 0x9 * 0x52c));
            } catch (o) {
                A[aa(0x1b9)][aa(0x1ba)](aa(0x1a2) + ab(0x1d7) + o);
            }
    }
};
exports[Z(0x1a2)] = removeTbot;