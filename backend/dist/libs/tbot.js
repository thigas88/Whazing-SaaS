'use strict';
const Z = b, a0 = b;
(function (c, d) {
    const X = b, Y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(X(0x175)) / (0x1c2c + 0xb * -0x43 + -0x194a) + -parseInt(Y(0x171)) / (0x1f * -0x9e + -0x1c4b + 0x2f6f) * (parseInt(X(0x179)) / (-0x7 * 0xaa + 0xa + 0x49f)) + -parseInt(Y(0x136)) / (-0x3 * -0x6be + 0x15fb + -0x607 * 0x7) * (parseInt(Y(0x18a)) / (0x539 * 0x7 + 0x6df * 0x1 + -0x1 * 0x2b69)) + -parseInt(X(0x133)) / (0xb8 + 0x203f + -0x20f1 * 0x1) * (parseInt(Y(0x12d)) / (0x274 * -0xb + 0x18ec + 0x217)) + parseInt(X(0x134)) / (0x27 * 0x4f + 0xa * 0x28f + -0x2597) * (parseInt(Y(0x132)) / (0xea4 + -0x6ba + -0x7e1)) + parseInt(Y(0x15c)) / (-0xe04 + 0x117b + -0x1 * 0x36d) * (parseInt(Y(0x141)) / (0x1 * -0x229f + 0x59f * -0x1 + -0x2849 * -0x1)) + parseInt(Y(0x17a)) / (-0x211d + 0x6aa + 0x1a7f) * (parseInt(X(0x194)) / (0x88b + -0x9 * -0x169 + -0x152f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x259 * -0x407 + -0x2 * -0x46c54 + 0x6881 * -0x14));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * -0xcd4 + -0x8a0 * 0x4 + 0x4a22);
        let h = e[f];
        return h;
    }, b(c, d);
}
const V = {};
V[Z(0x167)] = !![], Object[a0(0x187) + Z(0x158)](exports, Z(0x128), V), exports[Z(0x17c)] = exports[Z(0x165)] = exports[Z(0x183)] = void (0x5 * 0x679 + -0xc * -0x154 + -0x5 * 0x9a9);
const telegraf_1 = require(Z(0x148)), socket_1 = require(a0(0x182)), logger_1 = require(Z(0x15e) + Z(0x161)), TelegramSessions = [], initTbot = async c => {
        const a1 = Z, a2 = Z, d = {
                'IXepW': function (e, f) {
                    return e === f;
                },
                'hfNaq': a1(0x190),
                'IsRKW': a1(0x14e),
                'sZDoV': a1(0x13e),
                'IICtc': a1(0x164),
                'JYJwT': function (e, f) {
                    return e(f);
                },
                'HFZEc': a2(0x15d) + 'ED',
                'wPOvs': function (e, f) {
                    return e(f);
                },
                'VunMG': a1(0x17b) + a2(0x18b) + a1(0x14b) + 'n.',
                'OXXsX': function (e, f) {
                    return e !== f;
                },
                'hdcQA': function (e, f) {
                    return e === f;
                },
                'XfudL': a2(0x172),
                'Ykolp': function (e, f) {
                    return e !== f;
                },
                'PxlMV': a2(0x192),
                'jUVIF': function (e, f) {
                    return e !== f;
                },
                'AUzBC': a1(0x166),
                'MNNbl': a2(0x131),
                'PaagF': a2(0x135),
                'CkEnH': function (e, f) {
                    return e(f);
                },
                'yxEJi': function (e, f) {
                    return e === f;
                },
                'nWrNl': a2(0x16a)
            };
        return new Promise((f, g) => {
            const a3 = a1, a5 = a1, h = {
                    'VNkvr': d[a3(0x176)],
                    'pzpax': function (i, j) {
                        const a4 = a3;
                        return d[a4(0x140)](i, j);
                    },
                    'GJEAK': d[a5(0x13b)],
                    'zCqGk': function (i, j) {
                        const a6 = a5;
                        return d[a6(0x162)](i, j);
                    },
                    'lMSsr': d[a3(0x178)],
                    'XuFAa': d[a5(0x180)]
                };
            if (d[a3(0x149)](d[a5(0x13d)], d[a5(0x13d)]))
                try {
                    if (d[a5(0x143)](d[a3(0x144)], d[a5(0x144)])) {
                        const j = {};
                        j[a3(0x156)] = h[a5(0x163)], j[a3(0x18f)] = '', j[a3(0x15f)] = 0x0, h[a5(0x14e)](j), i[a3(0x16c)][a5(0x130)](a5(0x151) + a5(0x12f) + a5(0x129) + j), h[a5(0x177)](k, new l(h[a5(0x169)]));
                    } else {
                        const j = (-0x20ea + 0x1 * 0x263c + -0x3 * 0x1c6, socket_1[a5(0x17f)])(), k = c[a3(0x185)], {tenantId: l} = c, m = new telegraf_1[(a5(0x12e))](c[a3(0x170) + a5(0x17d)], {});
                        m['id'] = c['id'];
                        const n = TelegramSessions[a3(0x159)](q => q['id'] === c['id']);
                        if (d[a3(0x13f)](n, -(0x1d * 0x14b + -0x1aae + -0xad0))) {
                            if (d[a3(0x126)](d[a5(0x174)], d[a3(0x174)])) {
                                const r = (-0x1a65 + -0x1 * 0x16a7 + 0x310c * 0x1, u[a5(0x17f)])(), s = v[a5(0x185)], {tenantId: t} = w, u = new x[(a3(0x12e))](y[a3(0x170) + a5(0x17d)], {});
                                u['id'] = z['id'];
                                const v = A[a5(0x159)](W => W['id'] === M['id']);
                                d[a5(0x13f)](v, -(0x4ab + 0x1 * -0xc3d + -0x7 * -0x115)) ? (u['id'] = M['id'], N[a3(0x153)](u)) : (u['id'] = O['id'], P[v] = u);
                                u[a3(0x18d)]();
                                const w = {};
                                w[a5(0x156)] = d[a5(0x14c)], w[a5(0x18f)] = '', w[a3(0x15f)] = 0x0, G[a5(0x14e)](w);
                                const x = {};
                                x[a3(0x18e)] = d[a5(0x193)], x[a5(0x181)] = H, r[a3(0x16d)](t + (a5(0x12b) + a3(0x188)), x), I[a3(0x16c)][a3(0x155)](a5(0x138) + a3(0x139) + s + a3(0x150)), J[a5(0x189)](d[a3(0x178)], () => u[a5(0x15b)](a5(0x13e))), K[a3(0x189)](d[a5(0x180)], () => u[a3(0x15b)](a5(0x164))), d[a5(0x16b)](L, u);
                            } else
                                m['id'] = c['id'], TelegramSessions[a5(0x153)](m);
                        } else
                            d[a5(0x126)](d[a3(0x12a)], d[a3(0x157)]) ? (m['id'] = c['id'], TelegramSessions[n] = m) : (g['id'] = h['id'], i[a3(0x153)](j));
                        m[a3(0x18d)]();
                        const o = {};
                        o[a3(0x156)] = d[a5(0x14c)], o[a3(0x18f)] = '', o[a3(0x15f)] = 0x0, c[a5(0x14e)](o);
                        const p = {};
                        p[a5(0x18e)] = d[a3(0x193)], p[a5(0x181)] = c, j[a5(0x16d)](l + (a3(0x12b) + a3(0x188)), p), logger_1[a3(0x16c)][a5(0x155)](a5(0x138) + a3(0x139) + k + a3(0x150)), process[a3(0x189)](d[a5(0x178)], () => m[a3(0x15b)](a5(0x13e))), process[a3(0x189)](d[a5(0x180)], () => m[a5(0x15b)](a3(0x164))), d[a5(0x173)](f, m);
                    }
                } catch (s) {
                    if (d[a5(0x16e)](d[a3(0x13a)], d[a5(0x13a)])) {
                        const t = {};
                        t[a5(0x156)] = d[a3(0x176)], t[a5(0x18f)] = '', t[a5(0x15f)] = 0x0, c[a3(0x14e)](t), logger_1[a5(0x16c)][a3(0x130)](a5(0x151) + a5(0x12f) + a3(0x129) + s), d[a3(0x140)](g, new Error(d[a3(0x13b)]));
                    } else
                        i[a3(0x189)](d[a5(0x178)], () => o[a5(0x15b)](a5(0x13e))), k[a5(0x189)](d[a5(0x180)], () => o[a3(0x15b)](a5(0x164))), m[a5(0x12c)](n, 0x1481 * -0x1 + -0x25c * -0xf + -0xee2);
                }
            else
                try {
                    const w = q[a5(0x159)](E => E['id'] === w), x = s[w];
                    h[a3(0x147)](w, -(0x135a + 0x1 * -0x9f5 + 0x2 * -0x4b2)) && (w[a3(0x189)](h[a5(0x16f)], () => x[a3(0x15b)](a5(0x13e))), x[a3(0x189)](h[a3(0x13c)], () => x[a5(0x15b)](a5(0x164))), y[a5(0x12c)](w, 0xc21 + 0x182d * 0x1 + -0x244d * 0x1));
                } catch (y) {
                    A[a3(0x16c)][a3(0x130)](a3(0x17c) + a3(0x137) + y);
                }
        });
    };
exports[Z(0x183)] = initTbot;
function a() {
    const ab = [
        'ate:\x20',
        'launch',
        'action',
        'qrcode',
        'CONNECTED',
        '\x20|\x20checkSt',
        'WBmab',
        'IsRKW',
        '2262RhVRvw',
        'jUVIF',
        'jIvef',
        '__esModule',
        'or:\x20',
        'MNNbl',
        ':whatsappS',
        'splice',
        '7xFFOWG',
        'Telegraf',
        'rror\x20|\x20Err',
        'error',
        'XRYYe',
        '9UWLFab',
        '5461806ivSqfL',
        '933640kaXqLW',
        'oOJmP',
        '26276mOHayC',
        '\x20|\x20Error:\x20',
        'Session\x20TE',
        'LEGRAM:\x20',
        'nWrNl',
        'VunMG',
        'XuFAa',
        'XfudL',
        'SIGINT',
        'IXepW',
        'wPOvs',
        '11NvpCnJ',
        'aQqjS',
        'Ykolp',
        'PxlMV',
        'OgNGu',
        'TFVFi',
        'zCqGk',
        'telegraf',
        'hdcQA',
        'EjEwG',
        'ram\x20sessio',
        'hfNaq',
        'OXXaf',
        'update',
        'QYqZz',
        '\x20-\x20READY\x20',
        'initWbot\x20e',
        'oCqYY',
        'push',
        'eMHfs',
        'info',
        'status',
        'PaagF',
        'erty',
        'findIndex',
        'ABPLr',
        'stop',
        '9622910bKJoXu',
        'DISCONNECT',
        '../utils/l',
        'retries',
        'ldCiV',
        'ogger',
        'OXXsX',
        'VNkvr',
        'SIGTERM',
        'getTbot',
        'BLMzr',
        'value',
        'OlwWB',
        'GJEAK',
        'vVtOW',
        'JYJwT',
        'logger',
        'emit',
        'yxEJi',
        'lMSsr',
        'tokenTeleg',
        '1376MjENFb',
        'JQUEi',
        'CkEnH',
        'AUzBC',
        '22724JCUOUA',
        'HFZEc',
        'pzpax',
        'sZDoV',
        '3399ACPgps',
        '177396hrFjjB',
        'Error\x20star',
        'removeTbot',
        'ram',
        'whatsappId',
        'getIO',
        'IICtc',
        'session',
        './socket',
        'initTbot',
        'Ocqwu',
        'name',
        'hkGnB',
        'defineProp',
        'ession',
        'once',
        '970nRdLEV',
        'ting\x20teleg'
    ];
    a = function () {
        return ab;
    };
    return a();
}
const getTbot = (c, d = !![]) => {
    const a7 = Z, a8 = a0;
    logger_1[a7(0x16c)][a8(0x155)](a8(0x17e) + ':\x20' + c + (a8(0x191) + a8(0x18c)) + d);
    const e = TelegramSessions[a7(0x159)](f => f['id'] === c);
    return TelegramSessions[e];
};
exports[Z(0x165)] = getTbot;
const removeTbot = d => {
    const a9 = a0, aa = Z, e = {};
    e[a9(0x184)] = function (g, h) {
        return g !== h;
    }, e[a9(0x160)] = a9(0x13e), e[a9(0x15a)] = aa(0x164), e[aa(0x14f)] = function (g, h) {
        return g === h;
    }, e[a9(0x154)] = a9(0x168), e[aa(0x142)] = function (g, h) {
        return g !== h;
    }, e[aa(0x14a)] = aa(0x14d), e[a9(0x152)] = function (g, h) {
        return g !== h;
    }, e[a9(0x145)] = aa(0x127), e[a9(0x186)] = aa(0x146);
    const f = e;
    try {
        if (f[a9(0x14f)](f[a9(0x154)], f[aa(0x154)])) {
            const g = TelegramSessions[aa(0x159)](i => i['id'] === d), h = TelegramSessions[g];
            f[a9(0x184)](g, -(0x3 * 0x801 + -0x1 * -0x18a9 + -0x30ab)) && (f[aa(0x142)](f[a9(0x14a)], f[a9(0x14a)]) ? (h['id'] = i['id'], j[k] = l) : (process[a9(0x189)](f[aa(0x160)], () => h[aa(0x15b)](a9(0x13e))), process[a9(0x189)](f[aa(0x15a)], () => h[aa(0x15b)](aa(0x164))), TelegramSessions[a9(0x12c)](g, -0x60d + 0x319 + 0x2f5)));
        } else {
            const k = i[a9(0x159)](u => u['id'] === o), l = k[k];
            f[a9(0x184)](k, -(-0x22cf + 0x2 * -0x32f + 0x292e)) && (o[aa(0x189)](f[a9(0x160)], () => l[a9(0x15b)](a9(0x13e))), p[aa(0x189)](f[aa(0x15a)], () => l[aa(0x15b)](a9(0x164))), q[a9(0x12c)](k, 0x2 * -0xe12 + -0x1bdf + -0x12ac * -0x3));
        }
    } catch (k) {
        if (f[aa(0x152)](f[a9(0x145)], f[a9(0x186)]))
            logger_1[a9(0x16c)][aa(0x130)](aa(0x17c) + aa(0x137) + k);
        else {
            i[aa(0x16c)][aa(0x155)](aa(0x17e) + ':\x20' + j + (aa(0x191) + aa(0x18c)) + k);
            const m = l[a9(0x159)](q => q['id'] === m);
            return n[m];
        }
    }
};
exports[Z(0x17c)] = removeTbot;