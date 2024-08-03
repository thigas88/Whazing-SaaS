'use strict';
const Y = b, Z = b;
(function (c, d) {
    const W = b, X = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(W(0xfd)) / (0x2 * -0x136e + 0x73c + 0x1fa1) * (-parseInt(W(0x115)) / (-0x24da + 0x2323 + -0x7 * -0x3f)) + -parseInt(X(0xcc)) / (0x1f4 * 0x2 + 0x1ad2 + -0x1 * 0x1eb7) + -parseInt(W(0x114)) / (0x18e2 + 0x1cb5 * -0x1 + -0x3d7 * -0x1) * (-parseInt(W(0xe7)) / (0x232e * -0x1 + -0x21e + 0x2551)) + parseInt(W(0x103)) / (-0x1d5a + -0x11f4 * -0x1 + 0xb6c) + parseInt(W(0xff)) / (0x16 * 0x12b + -0x132a + 0x14d * -0x5) * (parseInt(W(0xe3)) / (0x54f + 0x220b + -0x2752)) + parseInt(X(0xcd)) / (0x1 * -0x205f + -0x1f0f + -0x3f77 * -0x1) * (-parseInt(X(0x11a)) / (-0x1 * 0x1aed + -0x15a * -0x7 + 0x1181 * 0x1)) + parseInt(X(0xd3)) / (-0x899 + 0x258f + -0x1ceb * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7cca3 + -0x19bcd7 * 0x1 + 0x2f9ba7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6ad + 0x4b1 + 0x2c4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const V = {};
V[Y(0xfc)] = !![], Object[Z(0x11c) + Z(0xf4)](exports, Z(0xc8), V), exports[Y(0xd5)] = exports[Y(0xf5)] = exports[Z(0xd0)] = void (0x74d * 0x3 + 0x1cd * 0x6 + -0x20b5);
const telegraf_1 = require(Y(0xcf)), socket_1 = require(Y(0x108)), logger_1 = require(Z(0x111) + Y(0x129)), TelegramSessions = [], initTbot = async c => {
        const a0 = Y, a1 = Y, d = {
                'FVoZP': function (e, f) {
                    return e !== f;
                },
                'iAPWP': a0(0x101),
                'ZxGoY': a1(0xf2),
                'CuLtA': a0(0xef) + 'ED',
                'dDMaw': function (e, f) {
                    return e(f);
                },
                'usUaa': a1(0x113) + a1(0xe6) + a1(0xd8) + 'n.',
                'zIiCL': function (e, f) {
                    return e !== f;
                },
                'zfKkR': function (e, f) {
                    return e === f;
                },
                'EFznx': a1(0xf6),
                'CpXdd': a1(0xf8),
                'TSgog': function (e, f) {
                    return e !== f;
                },
                'ineKz': a0(0xfa),
                'NBNOC': a0(0xfb),
                'IExLc': a1(0xf9),
                'LhvBH': a0(0x10a),
                'rZLzQ': function (e, f) {
                    return e === f;
                },
                'RKLNW': a1(0xda),
                'PfqEn': a0(0xdc),
                'jJZTs': a0(0x123),
                'jHhDg': a0(0x109)
            };
        return new Promise((f, g) => {
            const a2 = a0, a3 = a1;
            if (d[a2(0x12c)](d[a2(0x12f)], d[a3(0xca)]))
                h['id'] = i['id'], j[k] = l;
            else
                try {
                    if (d[a2(0x112)](d[a3(0x12a)], d[a2(0xe2)])) {
                        const i = (0x1a39 + 0x14dd + 0xfb2 * -0x3, socket_1[a3(0xe0)])(), j = c[a2(0xdd)], {tenantId: k} = c, l = new telegraf_1[(a2(0x124))](c[a3(0x118) + a2(0xe9)], {});
                        l['id'] = c['id'];
                        const m = TelegramSessions[a2(0x116)](p => p['id'] === c['id']);
                        if (d[a2(0x12c)](m, -(-0xb9d * 0x1 + -0x1 * 0x26ec + 0x328a)))
                            d[a2(0x12c)](d[a2(0x10d)], d[a3(0xc9)]) ? (g['id'] = h['id'], i[a3(0x128)](j)) : (l['id'] = c['id'], TelegramSessions[a2(0x128)](l));
                        else {
                            if (d[a3(0x12d)](d[a3(0xd6)], d[a2(0xd6)]))
                                l['id'] = c['id'], TelegramSessions[m] = l;
                            else
                                try {
                                    const r = q[a3(0x116)](E => E['id'] === w), s = s[r];
                                    d[a2(0x11b)](r, -(0x1871 * -0x1 + -0x1eb * -0x8 + -0x48d * -0x2)) && (w[a3(0xce)](d[a3(0x117)], () => s[a3(0x120)](a2(0x101))), x[a3(0xce)](d[a2(0x10c)], () => s[a3(0x120)](a2(0xf2))), y[a2(0xd7)](r, -0xb9 * -0x8 + 0x1 * 0xbf6 + -0x11bd * 0x1));
                                } catch (t) {
                                    A[a2(0xf1)][a2(0xec)](a2(0xd5) + a2(0xe8) + t);
                                }
                        }
                        l[a3(0x12e)]();
                        const n = {};
                        n[a3(0x119)] = d[a3(0x107)], n[a2(0xed)] = '', n[a3(0x10e)] = 0x0, c[a3(0x123)](n);
                        const o = {};
                        o[a3(0xe5)] = d[a2(0x126)], o[a2(0x102)] = c, i[a2(0xea)](k + (a3(0xd1) + a2(0xeb)), o), logger_1[a3(0xf1)][a3(0x110)](a3(0x11d) + a2(0x127) + j + a3(0xfe)), process[a2(0xce)](d[a3(0x117)], () => l[a2(0x120)](a2(0x101))), process[a3(0xce)](d[a3(0x10c)], () => l[a2(0x120)](a2(0xf2))), d[a3(0xe1)](f, l);
                    } else {
                        const s = {};
                        s[a3(0x119)] = d[a3(0xee)], s[a3(0xed)] = '', s[a2(0x10e)] = 0x0, h[a3(0x123)](s), i[a3(0xf1)][a2(0xec)](a2(0x12b) + a2(0xe4) + a3(0x121) + j), d[a3(0xe1)](k, new l(d[a3(0xd9)]));
                    }
                } catch (s) {
                    if (d[a2(0x12c)](d[a3(0x106)], d[a2(0x106)])) {
                        const t = {};
                        t[a2(0x119)] = d[a3(0xee)], t[a3(0xed)] = '', t[a3(0x10e)] = 0x0, c[a3(0x123)](t), logger_1[a3(0xf1)][a2(0xec)](a2(0x12b) + a3(0xe4) + a3(0x121) + s), d[a3(0xe1)](g, new Error(d[a3(0xd9)]));
                    } else {
                        const v = i[a3(0x116)](x => x['id'] === o), w = k[v];
                        d[a2(0x104)](v, -(0x11a8 * 0x1 + -0x1617 + 0x470)) && (o[a3(0xce)](d[a3(0x117)], () => w[a3(0x120)](a3(0x101))), p[a3(0xce)](d[a3(0x10c)], () => w[a3(0x120)](a2(0xf2))), q[a2(0xd7)](v, -0x24f2 + -0x140e + 0x1 * 0x3901));
                    }
                }
        });
    };
function a() {
    const a8 = [
        'Telegraf',
        'ckVTd',
        'jJZTs',
        'LEGRAM:\x20',
        'push',
        'ogger',
        'ineKz',
        'initWbot\x20e',
        'zfKkR',
        'rZLzQ',
        'launch',
        'EFznx',
        '__esModule',
        'LhvBH',
        'CpXdd',
        'vSpDb',
        '4556733ZivLPC',
        '275733QvyhkP',
        'once',
        'telegraf',
        'initTbot',
        ':whatsappS',
        'MyurF',
        '15442108JDaMID',
        'YpaPC',
        'removeTbot',
        'RKLNW',
        'splice',
        'ram\x20sessio',
        'usUaa',
        'HzYJC',
        'pxbyC',
        'CONNECTED',
        'name',
        'OdIkh',
        'hJiIi',
        'getIO',
        'dDMaw',
        'NBNOC',
        '8whkjLk',
        'rror\x20|\x20Err',
        'action',
        'ting\x20teleg',
        '69655ZOznpn',
        '\x20|\x20Error:\x20',
        'ram',
        'emit',
        'ession',
        'error',
        'qrcode',
        'CuLtA',
        'DISCONNECT',
        'ate:\x20',
        'logger',
        'SIGTERM',
        'rzOzc',
        'erty',
        'getTbot',
        'LoUwA',
        '\x20|\x20checkSt',
        'Xotly',
        'hXoQm',
        'vwslc',
        'kAMor',
        'value',
        '151WFNvMj',
        '\x20-\x20READY\x20',
        '9102646GTKIVN',
        'EUFmo',
        'SIGINT',
        'session',
        '3368202OhIRfI',
        'zIiCL',
        'ONxxD',
        'jHhDg',
        'PfqEn',
        './socket',
        'bRRcD',
        'xcRJV',
        'cIfTB',
        'ZxGoY',
        'IExLc',
        'retries',
        'jWPyk',
        'info',
        '../utils/l',
        'TSgog',
        'Error\x20star',
        '52BTQDYh',
        '3318TcDPTE',
        'findIndex',
        'iAPWP',
        'tokenTeleg',
        'status',
        '410kbvWUN',
        'FVoZP',
        'defineProp',
        'Session\x20TE',
        'whatsappId',
        'qiuIO',
        'stop',
        'or:\x20',
        'QgQDe',
        'update'
    ];
    a = function () {
        return a8;
    };
    return a();
}
exports[Y(0xd0)] = initTbot;
const getTbot = (c, d = !![]) => {
    const a4 = Z, a5 = Y;
    logger_1[a4(0xf1)][a4(0x110)](a4(0x11e) + ':\x20' + c + (a4(0xf7) + a4(0xf0)) + d);
    const e = TelegramSessions[a4(0x116)](f => f['id'] === c);
    return TelegramSessions[e];
};
exports[Z(0xf5)] = getTbot;
const removeTbot = d => {
    const a6 = Y, a7 = Z, e = {};
    e[a6(0xcb)] = a7(0x101), e[a7(0xdf)] = a7(0xf2), e[a6(0x125)] = function (g, h) {
        return g === h;
    }, e[a7(0x122)] = a6(0xd4), e[a7(0xd2)] = a7(0xf3), e[a7(0xdb)] = function (g, h) {
        return g !== h;
    }, e[a6(0x10b)] = a7(0x10f), e[a7(0x100)] = a6(0x105), e[a7(0x11f)] = a6(0xde);
    const f = e;
    try {
        if (f[a7(0x125)](f[a6(0x122)], f[a6(0xd2)]))
            i[a6(0xce)](f[a7(0xcb)], () => o[a7(0x120)](a6(0x101))), k[a6(0xce)](f[a7(0xdf)], () => o[a6(0x120)](a6(0xf2))), m[a7(0xd7)](n, -0x5d * 0x67 + 0x4f7 + -0x2075 * -0x1);
        else {
            const h = TelegramSessions[a7(0x116)](j => j['id'] === d), i = TelegramSessions[h];
            if (f[a7(0xdb)](h, -(-0x9c7 + 0x10d3 + -0x70b))) {
                if (f[a6(0x125)](f[a6(0x10b)], f[a6(0x10b)]))
                    process[a6(0xce)](f[a6(0xcb)], () => i[a6(0x120)](a6(0x101))), process[a6(0xce)](f[a7(0xdf)], () => i[a6(0x120)](a7(0xf2))), TelegramSessions[a6(0xd7)](h, -0x257c + 0x2b3 * -0x1 + -0x2 * -0x1418);
                else {
                    i[a6(0xf1)][a7(0x110)](a6(0x11e) + ':\x20' + j + (a7(0xf7) + a6(0xf0)) + k);
                    const k = l[a7(0x116)](q => q['id'] === k);
                    return n[k];
                }
            }
        }
    } catch (k) {
        f[a7(0x125)](f[a6(0x100)], f[a7(0x11f)]) ? e[a7(0xf1)][a7(0xec)](a7(0xd5) + a7(0xe8) + f) : logger_1[a6(0xf1)][a6(0xec)](a6(0xd5) + a7(0xe8) + k);
    }
};
exports[Y(0xd5)] = removeTbot;