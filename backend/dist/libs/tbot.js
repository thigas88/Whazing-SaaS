'use strict';
const Z = b, a0 = b;
(function (c, d) {
    const X = b, Y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(X(0xdf)) / (0x219b * -0x1 + -0xbe7 + 0x2d83) + -parseInt(Y(0xc3)) / (-0x117b + -0x2603 + 0xde * 0x40) * (-parseInt(X(0xd1)) / (0x1 * 0x1e7a + 0x8b6 + -0x272d)) + parseInt(X(0xa1)) / (-0xb78 + 0x167 * 0x13 + 0xf29 * -0x1) * (parseInt(X(0xc6)) / (-0x258a + 0x1b53 + 0xa3c)) + -parseInt(Y(0xcc)) / (0x1b7 * 0x11 + -0x8d * -0x3a + -0x3d13) + -parseInt(Y(0xfc)) / (-0x21df + -0xde4 + 0x2fca) * (-parseInt(X(0xc7)) / (-0x2600 + 0x1472 + 0x2 * 0x8cb)) + -parseInt(X(0xb0)) / (-0xc * -0x329 + -0xc7 * -0x31 + -0x4bfa) + parseInt(X(0xdd)) / (0x19 * -0x17a + -0x67 * -0x44 + 0x266 * 0x4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x942cf + 0x4d * 0x3259 + 0x322 * 0xb8));
const V = {};
V[Z(0xe4)] = !![], Object[Z(0x103) + a0(0xc1)](exports, Z(0xe1), V), exports[Z(0xed)] = exports[Z(0xcb)] = exports[Z(0x10e)] = void (0x395 + 0x1 * 0x773 + 0x1 * -0xb08);
const telegraf_1 = require(Z(0xc4)), socket_1 = require(Z(0xbe)), logger_1 = require(a0(0xbf) + a0(0xf1)), TelegramSessions = [], initTbot = async c => {
        const a1 = a0, a2 = Z, d = {
                'QvkJy': function (e, f) {
                    return e !== f;
                },
                'IIQgV': a1(0xd6),
                'fDQMT': a2(0xfb),
                'CXTip': a2(0xe7),
                'gMzmN': function (e, f) {
                    return e === f;
                },
                'wuWLo': a2(0xa8),
                'xNKVh': a2(0xe2),
                'yGipc': a2(0xa4),
                'kEONM': a2(0xc8),
                'DNNIR': a2(0xa9),
                'EXNwg': a2(0x10b),
                'brZER': a1(0xad),
                'jqPRy': a2(0x104),
                'tjdVO': function (e, f) {
                    return e(f);
                },
                'uiFCS': a1(0xdb),
                'nJxvU': a1(0xf8),
                'TwWOh': a2(0xf2) + 'ED',
                'qWdMz': function (e, f) {
                    return e(f);
                },
                'QYDZZ': a2(0x9f) + a1(0xa0) + a2(0xd2) + 'n.'
            };
        return new Promise((f, g) => {
            const a4 = a1, a5 = a1, h = {
                    'kOQhj': function (i, j) {
                        const a3 = b;
                        return d[a3(0xc2)](i, j);
                    },
                    'jpxsr': d[a4(0xa5)],
                    'ZdGjG': d[a4(0xf4)]
                };
            if (d[a4(0xc2)](d[a4(0xaf)], d[a5(0xaf)])) {
                const j = i[a5(0x101)](u => u['id'] === o), k = k[j];
                d[a5(0xc2)](j, -(0x20f7 + 0x1 * -0x3a1 + -0x1 * 0x1d55)) && (o[a5(0x10a)](d[a5(0xa5)], () => k[a5(0x106)](a5(0xd6))), p[a5(0x10a)](d[a5(0xf4)], () => k[a4(0x106)](a5(0xfb))), q[a4(0x107)](j, 0x1b81 + -0xd6d + 0x4b1 * -0x3));
            } else
                try {
                    if (d[a4(0xe0)](d[a4(0xb3)], d[a4(0xe8)]))
                        try {
                            const k = q[a4(0x101)](E => E['id'] === w), l = s[k];
                            h[a4(0xe3)](k, -(0x19a1 * -0x1 + -0x20d4 + -0x85a * -0x7)) && (w[a5(0x10a)](h[a5(0x10c)], () => l[a4(0x106)](a5(0xd6))), x[a4(0x10a)](h[a4(0xce)], () => l[a4(0x106)](a4(0xfb))), y[a5(0x107)](k, -0x1d * 0x29 + 0x98a + -0x4e4));
                        } catch (m) {
                            A[a4(0xf7)][a5(0x102)](a5(0xed) + a5(0xbd) + m);
                        }
                    else {
                        const k = (-0x3fa * 0x8 + 0x6e1 * -0x3 + 0x1 * 0x3473, socket_1[a4(0xee)])(), l = c[a4(0xf5)], {tenantId: m} = c, n = new telegraf_1[(a5(0xff))](c[a5(0xd4) + a4(0xaa)], {});
                        n['id'] = c['id'];
                        const o = TelegramSessions[a5(0x101)](r => r['id'] === c['id']);
                        if (d[a4(0xe0)](o, -(0xb * -0x36d + -0xa * -0x18d + 0x162e)))
                            d[a4(0xe0)](d[a5(0xfd)], d[a4(0xc0)]) ? (i[a4(0x10a)](d[a5(0xa5)], () => o[a5(0x106)](a5(0xd6))), k[a5(0x10a)](d[a5(0xf4)], () => o[a4(0x106)](a5(0xfb))), m[a4(0x107)](n, 0x23e7 + 0x9a * 0x2 + -0x251a)) : (n['id'] = c['id'], TelegramSessions[a5(0x9e)](n));
                        else {
                            if (d[a4(0xc2)](d[a4(0xac)], d[a4(0xae)]))
                                n['id'] = c['id'], TelegramSessions[o] = n;
                            else {
                                i[a5(0xf7)][a5(0xc9)](a5(0xf6) + ':\x20' + j + (a4(0x10f) + a5(0xf0)) + k);
                                const t = l[a5(0x101)](u => u['id'] === t);
                                return n[t];
                            }
                        }
                        n[a4(0xb1)]();
                        const p = {};
                        p[a4(0xea)] = d[a5(0xd7)], p[a4(0xd9)] = '', p[a4(0xef)] = 0x0, c[a4(0x104)](p);
                        const q = {};
                        q[a5(0xdc)] = d[a5(0xb9)], q[a4(0xb8)] = c, k[a5(0xeb)](m + (a4(0xe5) + a5(0xb2)), q), logger_1[a4(0xf7)][a5(0xc9)](a5(0xa6) + a5(0xda) + l + a5(0xab)), process[a5(0x10a)](d[a5(0xa5)], () => n[a4(0x106)](a5(0xd6))), process[a5(0x10a)](d[a5(0xf4)], () => n[a4(0x106)](a4(0xfb))), d[a5(0xd8)](f, n);
                    }
                } catch (t) {
                    if (d[a5(0xe0)](d[a5(0xde)], d[a5(0xb4)]))
                        g['id'] = h['id'], i[a5(0x9e)](j);
                    else {
                        const v = {};
                        v[a5(0xea)] = d[a5(0xd0)], v[a4(0xd9)] = '', v[a5(0xef)] = 0x0, c[a4(0x104)](v), logger_1[a4(0xf7)][a5(0x102)](a5(0xd5) + a5(0xb5) + a4(0xe6) + t), d[a5(0xbc)](g, new Error(d[a4(0xfe)]));
                    }
                }
        });
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa * -0x2f + 0x9cc + -0xb04);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[Z(0x10e)] = initTbot;
const getTbot = (c, d = !![]) => {
    const a6 = Z, a7 = a0;
    logger_1[a6(0xf7)][a6(0xc9)](a7(0xf6) + ':\x20' + c + (a7(0x10f) + a7(0xf0)) + d);
    const e = TelegramSessions[a7(0x101)](f => f['id'] === c);
    return TelegramSessions[e];
};
exports[Z(0xcb)] = getTbot;
const removeTbot = c => {
    const a8 = Z, a9 = a0, d = {
            'BYhfI': function (e, f) {
                return e === f;
            },
            'uOoFU': a8(0xad),
            'ZXMVB': a9(0x104),
            'QyFHb': a9(0xd6),
            'aVvPV': a9(0xfb),
            'roJXd': function (e, f) {
                return e(f);
            },
            'taWiR': a8(0xf2) + 'ED',
            'EsneE': a9(0x9f) + a8(0xa0) + a9(0xd2) + 'n.',
            'oqOMR': function (e, f) {
                return e !== f;
            },
            'aekCV': a8(0xec),
            'nuBwv': a9(0xcd),
            'cTTIz': a8(0xa7),
            'nhpXU': a9(0xd3),
            'wlzFZ': function (e, f) {
                return e === f;
            },
            'qeInk': a9(0xfa),
            'CrGej': a8(0xa3)
        };
    try {
        if (d[a9(0xa2)](d[a9(0xf9)], d[a9(0x100)])) {
            const e = TelegramSessions[a9(0x101)](g => g['id'] === c), f = TelegramSessions[e];
            d[a8(0xa2)](e, -(-0xe0e + 0x1894 + 0xa85 * -0x1)) && (d[a9(0xa2)](d[a9(0x10d)], d[a9(0x109)]) ? (process[a9(0x10a)](d[a8(0xf3)], () => f[a9(0x106)](a9(0xd6))), process[a8(0x10a)](d[a8(0xbb)], () => f[a8(0x106)](a8(0xfb))), TelegramSessions[a8(0x107)](e, -0x1f81 + 0x9b0 + 0x15d2)) : e[a9(0xf7)][a8(0x102)](a8(0xed) + a9(0xbd) + f));
        } else {
            const i = (-0x104 + -0x54d + 0x651, u[a8(0xee)])(), j = v[a9(0xf5)], {tenantId: k} = w, l = new x[(a8(0xff))](y[a9(0xd4) + a9(0xaa)], {});
            l['id'] = z['id'];
            const m = A[a9(0x101)](W => W['id'] === M['id']);
            d[a8(0xb7)](m, -(0x1 * 0x2279 + 0x9b1 * 0x4 + -0x493c)) ? (l['id'] = M['id'], N[a8(0x9e)](l)) : (l['id'] = O['id'], P[m] = l);
            l[a8(0xb1)]();
            const n = {};
            n[a8(0xea)] = d[a9(0x105)], n[a8(0xd9)] = '', n[a8(0xef)] = 0x0, G[a8(0x104)](n);
            const o = {};
            o[a8(0xdc)] = d[a9(0xcf)], o[a8(0xb8)] = H, i[a9(0xeb)](k + (a9(0xe5) + a9(0xb2)), o), I[a9(0xf7)][a9(0xc9)](a9(0xa6) + a8(0xda) + j + a9(0xab)), J[a9(0x10a)](d[a8(0xf3)], () => l[a8(0x106)](a8(0xd6))), K[a9(0x10a)](d[a8(0xbb)], () => l[a8(0x106)](a8(0xfb))), d[a8(0xca)](L, l);
        }
    } catch (i) {
        if (d[a9(0xc5)](d[a9(0xe9)], d[a8(0x108)])) {
            const k = {};
            k[a9(0xea)] = d[a8(0xb6)], k[a8(0xd9)] = '', k[a8(0xef)] = 0x0, h[a9(0x104)](k), i[a9(0xf7)][a9(0x102)](a9(0xd5) + a8(0xb5) + a9(0xe6) + j), d[a9(0xca)](k, new l(d[a8(0xba)]));
        } else
            logger_1[a9(0xf7)][a9(0x102)](a8(0xed) + a9(0xbd) + i);
    }
};
exports[a0(0xed)] = removeTbot;
function a() {
    const aa = [
        '2391618CsSDjh',
        'rTkoJ',
        'ZdGjG',
        'ZXMVB',
        'TwWOh',
        '1027227EWAZAU',
        'ram\x20sessio',
        'tnoFG',
        'tokenTeleg',
        'initWbot\x20e',
        'SIGINT',
        'brZER',
        'tjdVO',
        'qrcode',
        'LEGRAM:\x20',
        'YsnZF',
        'action',
        '13399200vFfrqQ',
        'uiFCS',
        '1006728mnGosj',
        'gMzmN',
        '__esModule',
        'gZPzU',
        'kOQhj',
        'value',
        ':whatsappS',
        'or:\x20',
        'EGLYk',
        'xNKVh',
        'qeInk',
        'status',
        'emit',
        'iRLbo',
        'removeTbot',
        'getIO',
        'retries',
        'ate:\x20',
        'ogger',
        'DISCONNECT',
        'QyFHb',
        'fDQMT',
        'name',
        'whatsappId',
        'logger',
        'FMGIu',
        'aekCV',
        'jonYx',
        'SIGTERM',
        '413pViBFK',
        'yGipc',
        'QYDZZ',
        'Telegraf',
        'nuBwv',
        'findIndex',
        'error',
        'defineProp',
        'update',
        'uOoFU',
        'stop',
        'splice',
        'CrGej',
        'nhpXU',
        'once',
        'cFRZO',
        'jpxsr',
        'cTTIz',
        'initTbot',
        '\x20|\x20checkSt',
        'push',
        'Error\x20star',
        'ting\x20teleg',
        '26420fHRctv',
        'oqOMR',
        'hGyDL',
        'YSnJI',
        'IIQgV',
        'Session\x20TE',
        'HzzbH',
        'fGlSD',
        'YohPx',
        'ram',
        '\x20-\x20READY\x20',
        'DNNIR',
        'CONNECTED',
        'EXNwg',
        'CXTip',
        '5068899OAXUKI',
        'launch',
        'ession',
        'wuWLo',
        'nJxvU',
        'rror\x20|\x20Err',
        'taWiR',
        'BYhfI',
        'session',
        'jqPRy',
        'EsneE',
        'aVvPV',
        'qWdMz',
        '\x20|\x20Error:\x20',
        './socket',
        '../utils/l',
        'kEONM',
        'erty',
        'QvkJy',
        '2MYGrgM',
        'telegraf',
        'wlzFZ',
        '240dFUfCu',
        '68104qAfImJ',
        'HXHlb',
        'info',
        'roJXd',
        'getTbot'
    ];
    a = function () {
        return aa;
    };
    return a();
}